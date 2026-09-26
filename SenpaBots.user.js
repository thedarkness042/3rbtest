// ==UserScript==
// @name         Drag Senpa Bots
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Senpa-style independent bot connections on top of the Drag client (3rb.io).
// @author       darkness
// @match        *://*.3rb.io/
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  "use strict";
  if (window.SENPA_BOTS) return;
  window.SENPA_BOTS = true;

  const SITEKEY = "0x4AAAAAAEkQx2FZR28MuMJC";
  const SUBPROTOCOL = "d1elnjtfbyzq7a";

  const state = {
    bots: new Map(),
    nextId: 1,
    serverUrl: "",
    paused: false,
    autoSpawn: false,
    autoRespawn: false,
    autoFeed: false,
    autoSplit: false,
    follow: true,
    target: "mouse",
  };

  let panel = null;
  let listEl = null;

  function render() {
    if (!listEl) return;
    const total = state.bots.size;
    let ready = 0;
    let alive = 0;
    listEl.innerHTML = "";
    for (const b of state.bots.values()) {
      if (b.status === "ready" || b.alive) ready++;
      if (b.alive) alive++;
      const row = document.createElement("div");
      row.className = "sb-row";
      row.innerHTML =
        '<b>' + b.id + "</b> " +
        '<span class="sb-name">' + escapeHtml(b.name) + "</span> " +
        '<span class="sb-phase ' + b.status + '">' + b.status + "</span>" +
        (b.alive ? ' <span class="sb-alive">alive</span>' : "") +
        (b.error ? ' <span class="sb-err">' + escapeHtml(b.error) + "</span>" : "") +
        ' <button class="sb-kill" data-id="' + b.id + '">✕</button>';
      listEl.appendChild(row);
    }
    const counts = document.getElementById("sb-counts");
    if (counts) counts.textContent = total + " total | " + ready + " ready | " + alive + " alive";
  }

  function escapeHtml(s) {
    return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // ------------------------------------------------------------------ shield
  function shieldReady() {
    return new Promise((resolve, reject) => {
      const started = Date.now();
      const poll = () => {
        if (window.__SHIELD__ && window.__SHIELD__.ready) {
          return window.__SHIELD__.ready.then(
            () => resolve(window.__SHIELD__),
            () => resolve(window.__SHIELD__),
          );
        }
        if (Date.now() - started > 20000) return reject(new Error("shield not ready"));
        setTimeout(poll, 100);
      };
      poll();
    });
  }

  // ------------------------------------------------------------------ turnstile
  let turnstileSeq = 0;
  function getTurnstileToken() {
    return new Promise((resolve, reject) => {
      const id = "sb-turnstile-" + (++turnstileSeq);
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement("div");
        el.id = id;
        el.style.cssText = "position:fixed;left:-10000px;top:-10000px;width:1px;height:1px;overflow:hidden;pointer-events:none";
        document.body.appendChild(el);
      }
      el.replaceChildren();
      const started = Date.now();
      const wait = () => {
        if (window.turnstile && window.turnstile.render) {
          let wid;
          try {
            wid = window.turnstile.render(el, {
              sitekey: SITEKEY,
              execution: "execute",
              appearance: "interaction-only",
              callback: (t) => t ? resolve(t) : reject(new Error("no token")),
              "expired-callback": () => reject(new Error("token expired")),
              "error-callback": () => reject(new Error("turnstile error")),
            });
            window.turnstile.execute(wid);
          } catch (e) {
            reject(e);
          }
          return;
        }
        if (Date.now() - started > 20000) return reject(new Error("turnstile sdk timeout"));
        setTimeout(wait, 100);
      };
      wait();
    });
  }

  // ------------------------------------------------------------------ bot connection
  class BotConnection {
    constructor(name) {
      this.id = state.nextId++;
      this.name = name || "Bot " + this.id;
      this.status = "queued";
      this.alive = false;
      this.established = false;
      this.spawned = false;
      this.ws = null;
      this.session = null;
      this.error = "";
      this.lastWorldAt = 0;
      this.lastAutoSplit = 0;
      this.lastRespawnAt = 0;
      this._queue = [];
    }

    start() {
      this.status = "opening";
      render();
      shieldReady()
        .then((sh) => {
          this.session = new sh.ShieldSession(sh.shield_build_id());
          const hello = this.session.hello();
          this.ws = new WebSocket(state.serverUrl, SUBPROTOCOL);
          this.ws.binaryType = "arraybuffer";
          this.ws.onopen = () => {
            this.status = "handshake";
            render();
            if (hello && hello.length) this.ws.send(hello);
          };
          this.ws.onmessage = (ev) => this._onMessage(ev);
          this.ws.onclose = (ev) => this._onClose(ev);
          this.ws.onerror = () => {};
        })
        .catch((e) => {
          this.error = (e && e.message) || "shield error";
          this.status = "closed";
          render();
        });
    }

    _send(payload) {
      if (!this.established) {
        this._queue.push(payload);
        return;
      }
      try {
        const sealed = this.session.seal(new Uint8Array(payload));
        this.ws.send(sealed);
      } catch (e) {
        try {
          this.ws.send(payload);
        } catch (_) {}
      }
    }

    _onMessage(ev) {
      const bytes = new Uint8Array(ev.data);
      if (!bytes.length) return;
      const first = bytes[0];
      if (209 === first) {
        try {
          this.session.onHelloAck(bytes, "");
        } catch (e) {}
        this.established = true;
        const q = this._queue;
        this._queue = [];
        for (const p of q) this._send(p);
        this.status = "ready";
        render();
        return;
      }
      if (210 === first) {
        let inner;
        try {
          inner = this.session.open(bytes);
        } catch (e) {
          return;
        }
        if (!inner || !inner.length) return;
        if (212 === inner[0]) {
          const att = window.__SHIELD__.shield_attest(() => 0, inner.subarray(1));
          this._send(att);
          return;
        }
        this._parse(inner);
        return;
      }
      this._parse(bytes);
    }

    _parse(inner) {
      const op = inner[0];
      if (32 === op) {
        this.alive = true;
        this.lastWorldAt = Date.now();
      } else if (18 === op || 20 === op) {
        this.alive = false;
      } else if (16 === op) {
        this.lastWorldAt = Date.now();
      }
      render();
    }

    _onClose(ev) {
      this.status = "closed";
      this.error = (ev && ev.reason) || "close " + (ev && ev.code);
      render();
    }

    login(loginStr) {
      if (!loginStr) {
        this._send(new Uint8Array([255, 0, 0]));
        return;
      }
      const bytes = new Uint8Array(3 + loginStr.length * 2);
      bytes[0] = 255;
      for (let i = 0; i < loginStr.length; i++) {
        const cc = loginStr.charCodeAt(i);
        bytes[1 + i * 2] = cc & 0xff;
        bytes[2 + i * 2] = (cc >> 8) & 0xff;
      }
      this._send(bytes);
    }

    captcha(token) {
      const s = "ts:" + token;
      const bytes = new Uint8Array(s.length + 3);
      bytes[0] = 123;
      bytes[1] = 6;
      for (let i = 0; i < s.length; i++) bytes[i + 2] = s.charCodeAt(i);
      bytes[bytes.length - 1] = 0;
      this._send(bytes);
    }

    spawn() {
      const json = JSON.stringify({ n: this.name });
      const bytes = new Uint8Array(json.length + 2);
      bytes[0] = 0;
      for (let i = 0; i < json.length; i++) bytes[i + 1] = json.charCodeAt(i);
      bytes[bytes.length - 1] = 0;
      this._send(bytes);
      this.spawned = true;
      this.status = "ready";
      render();
    }

    move(x, y) {
      if (!this.alive || !this.established) return;
      const b = new ArrayBuffer(17);
      const v = new DataView(b);
      v.setUint8(0, 16);
      v.setFloat64(1, x, true);
      v.setFloat64(9, y, true);
      this._send(b);
    }

    split() {
      if (!this.alive) return;
      this._send(new Uint8Array([17]));
    }

    feed() {
      if (!this.alive) return;
      this._send(new Uint8Array([21]));
    }

    close() {
      try {
        if (this.ws) this.ws.close();
      } catch (e) {}
      this.ws = null;
      this.status = "closed";
    }
  }

  // ------------------------------------------------------------------ controller
  function currentTarget() {
    const api = window.DRAG_PLUS;
    if (!api) return null;
    if (state.target === "player") {
      const p = api.playerPos ? api.playerPos() : null;
      if (p && p.alive && Number.isFinite(p.x) && Number.isFinite(p.y)) return { x: p.x, y: p.y };
      return null;
    }
    const m = api.mouseWorld ? api.mouseWorld() : null;
    if (m && Number.isFinite(m.x) && Number.isFinite(m.y)) return { x: m.x, y: m.y };
    return null;
  }

  function addBatch(count) {
    if (!state.serverUrl) {
      setStatus("No main-player server yet - connect the main player first.");
      return;
    }
    count = Math.max(1, Math.min(100, Math.trunc(Number(count) || 1)));
    for (let i = 0; i < count; i++) {
      const name = document.getElementById("sb-name") ? document.getElementById("sb-name").value || "Bot" : "Bot";
      const bot = new BotConnection(name);
      state.bots.set(bot.id, bot);
      bot.start();
    }
    render();
    setStatus("Added " + count + " connection(s).");
  }

  function authBot(bot) {
    if (bot._authed) return;
    bot._authed = true;
    let loginStr = "";
    try {
      const pool = JSON.parse(localStorage.getItem("senpa_bots_accounts") || "[]");
      if (Array.isArray(pool) && pool.length) {
        const idx = (state._accountIdx = (state._accountIdx || 0) % pool.length);
        state._accountIdx++;
        loginStr = String(pool[idx] || "");
      }
    } catch (e) {}
    bot.login(loginStr);
    getTurnstileToken()
      .then((tok) => {
        bot.captcha(tok);
        if (state.autoSpawn) setTimeout(() => bot.spawn(), 600);
      })
      .catch((e) => {
        bot.error = "captcha: " + e.message;
        render();
      });
  }

  function spawnAll() {
    for (const b of state.bots.values()) {
      if (b.status === "ready" || b.status === "queued") {
        authBot(b);
        if (b.established) b.spawn();
      }
    }
    render();
  }

  function respawnAll() {
    for (const b of state.bots.values()) {
      if (!b.alive && (b.status === "ready" || b.status === "closed") && b.established) {
        b.spawn();
      }
    }
    render();
  }

  function stopAll() {
    for (const b of state.bots.values()) b.close();
    state.bots.clear();
    render();
    setStatus("Stopped all.");
  }

  // auto loop: follow / feed / split / respawn
  setInterval(() => {
    if (state.paused) return;
    const target = state.follow ? currentTarget() : null;
    const now = Date.now();
    for (const b of state.bots.values()) {
      if (!b.established) {
        if (b.status === "ready" && !b._authed) authBot(b);
        continue;
      }
      if (state.autoRespawn && !b.alive && b.spawned && now - b.lastRespawnAt > 1500) {
        b.lastRespawnAt = now;
        b.spawn();
        continue;
      }
      if (!b.alive) continue;
      if (target) {
        b.move(target.x, target.y);
        if (state.autoFeed && now % 200 < 100) b.feed();
      }
      if (state.autoSplit && now - b.lastAutoSplit > 1000) {
        b.lastAutoSplit = now;
        b.split();
      }
    }
  }, 250);

  // read main server when available
  setInterval(() => {
    const api = window.DRAG_PLUS;
    if (api && api.serverUrl) {
      const u = api.serverUrl();
      if (u && u !== state.serverUrl) {
        state.serverUrl = u;
        setStatus("Main server: " + u);
        render();
      }
    }
  }, 1000);

  function setStatus(msg) {
    const s = document.getElementById("sb-status");
    if (s) s.textContent = msg;
  }

  // ------------------------------------------------------------------ UI
  function injectUI() {
    panel = document.createElement("div");
    panel.id = "senpa-bots-panel";
    panel.innerHTML =
      '<style>' +
      "#senpa-bots-panel{position:fixed;right:16px;top:70px;z-index:2147483000;width:360px;font:12px system-ui,Arial,sans-serif;color:#dfe6ee;background:#0a0c0e;border:1px solid #2a3138;border-radius:8px;box-shadow:0 8px 30px #000a;overflow:hidden}" +
      "#senpa-bots-panel *{box-sizing:border-box}" +
      "#senpa-bots-panel header{display:flex;align-items:center;gap:8px;padding:10px 12px;background:#13171b;border-bottom:1px solid #262c33}" +
      "#senpa-bots-panel header b{flex:1;font-size:13px}" +
      "#senpa-bots-panel main{padding:12px;max-height:calc(100vh - 160px);overflow:auto}" +
      "#senpa-bots-panel .sb-row{display:flex;align-items:center;gap:6px;padding:5px 6px;border-bottom:1px solid #1c2126;font-size:11px;flex-wrap:wrap}" +
      "#senpa-bots-panel .sb-row .sb-name{max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}" +
      "#senpa-bots-panel .sb-phase{color:#9fb4c8}#senpa-bots-panel .sb-phase.ready{color:#7ee0a0}#senpa-bots-panel .sb-phase.closed{color:#ff8383}" +
      "#senpa-bots-panel .sb-alive{color:#8ef08e}#senpa-bots-panel .sb-err{color:#ff9d9d;font-size:10px;overflow-wrap:anywhere}" +
      "#senpa-bots-panel .sb-kill{background:#3a2020;border:1px solid #5a3a3a;color:#fff;border-radius:3px;cursor:pointer}" +
      "#senpa-bots-panel label{display:block;color:#93a3b4;font-size:10px;margin:6px 0 2px}" +
      "#senpa-bots-panel input,#senpa-bots-panel select,#senpa-bots-panel button{background:#14171b;border:1px solid #2e353d;color:#e5ecf3;border-radius:4px;padding:6px 8px;font:inherit}" +
      "#senpa-bots-panel button{cursor:pointer}#senpa-bots-panel button:hover{border-color:#6a7480}" +
      "#senpa-bots-panel .sb-rowbtns{display:flex;gap:6px;margin:8px 0;flex-wrap:wrap}" +
      "#senpa-bots-panel .sb-rowbtns button{flex:1;min-width:70px}" +
      "#senpa-bots-panel .sb-checks{display:flex;flex-wrap:wrap;gap:8px;margin:6px 0}" +
      "#senpa-bots-panel .sb-checks label{display:flex;align-items:center;gap:4px;margin:0;color:#cdd7e0}" +
      "#senpa-bots-panel #sb-status{color:#8aa4b8;font-size:11px;margin-top:6px;overflow-wrap:anywhere}" +
      "</style>" +
      '<header><b>🤖 Senpa Bots</b><button id="sb-collapse">−</button></header>' +
      "<main>" +
      '<div class="sb-rowbtns"><label>NAME<input id="sb-name" maxlength="24" value="Bot" style="width:100%"></label></div>' +
      '<div class="sb-rowbtns"><label>ADD COUNT<input id="sb-count" type="number" min="1" max="100" value="1" style="width:80px"></label></div>' +
      '<div class="sb-rowbtns"><button id="sb-add">⚡ Add Batch</button><button id="sb-spawn">▶ Spawn</button><button id="sb-respawn">↻ Respawn</button><button id="sb-stop">■ Stop All</button></div>' +
      '<div class="sb-checks">' +
      '<label><input id="sb-auto" type="checkbox">AUTO SPAWN</label>' +
      '<label><input id="sb-resp" type="checkbox">AUTO RESPAWN</label>' +
      '<label><input id="sb-feed" type="checkbox">AUTO FEED</label>' +
      '<label><input id="sb-split" type="checkbox">AUTO SPLIT</label>' +
      '<label><input id="sb-follow" type="checkbox" checked>FOLLOW</label>' +
      "</div>" +
      '<label>TARGET<select id="sb-target"><option value="mouse">Mouse</option><option value="player">Follow player</option></select></label>' +
      '<div id="sb-counts">0 total | 0 ready | 0 alive</div>' +
      '<div id="sb-list"></div>' +
      '<div id="sb-status">Waiting for Drag + main player...</div>' +
      "</main>";
    document.body.appendChild(panel);

    listEl = document.getElementById("sb-list");

    document.getElementById("sb-add").addEventListener("click", () => {
      addBatch(document.getElementById("sb-count").value);
    });
    document.getElementById("sb-spawn").addEventListener("click", () => spawnAll());
    document.getElementById("sb-respawn").addEventListener("click", () => respawnAll());
    document.getElementById("sb-stop").addEventListener("click", () => stopAll());
    document.getElementById("sb-auto").addEventListener("change", (e) => { state.autoSpawn = e.target.checked; });
    document.getElementById("sb-resp").addEventListener("change", (e) => { state.autoRespawn = e.target.checked; });
    document.getElementById("sb-feed").addEventListener("change", (e) => { state.autoFeed = e.target.checked; });
    document.getElementById("sb-split").addEventListener("change", (e) => { state.autoSplit = e.target.checked; });
    document.getElementById("sb-follow").addEventListener("change", (e) => { state.follow = e.target.checked; });
    document.getElementById("sb-target").addEventListener("change", (e) => { state.target = e.target.value; });
    document.getElementById("sb-collapse").addEventListener("click", () => {
      const m = panel.querySelector("main");
      const hidden = m.style.display === "none";
      m.style.display = hidden ? "" : "none";
    });
    panel.addEventListener("click", (e) => {
      const kill = e.target.closest(".sb-kill");
      if (kill) {
        const id = Number(kill.getAttribute("data-id"));
        const b = state.bots.get(id);
        if (b) { b.close(); state.bots.delete(id); render(); }
      }
    });

    render();
  }

  // boot: wait for DRAG_PLUS then inject
  let booted = false;
  function boot() {
    if (booted) return;
    if (!window.DRAG_PLUS || !document.body) return;
    booted = true;
    injectUI();
    const api = window.DRAG_PLUS;
    const u = api.serverUrl ? api.serverUrl() : "";
    if (u) { state.serverUrl = u; setStatus("Main server: " + u); }
  }
  setInterval(boot, 500);
})();