// Drag+ MultiBox - 3rb.io 2026 "Shield" (Rust/WebAssembly anti-cheat) loader.
// Port of the wasm-bindgen glue shipped in 3rb.io's chunk
//   123.78b3c61700e715be2bfd.bundle.js (module 8389 / 7535)
// plus the WebAssembly binary c0520ea829cb2f9efdf0.module.wasm.
//
// Exposes window.__SHIELD__ with the same surface as the game's own `F`
// module: ShieldSession, shield_attest, shield_build_id, shield_protocol_version,
// shield_selftest, shield_vm_seed, shield_run_challenge and a `ready` promise.
(function () {
  "use strict";

  var WASM_PRIMARY = "https://3rb.io/js/dist/02a680f97000a97d1b0a.module.wasm";
  var WASM_FALLBACK = "https://3rb.io/js/dist/02a680f97000a97d1b0a.module.wasm";

  // ------------------------------------------------------------------ glue
  var T = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
  T.decode();
  var A = 2146435072,
    D = 0;
  var C = new TextEncoder();
  if (!("encodeInto" in C)) {
    C.encodeInto = function (e, t) {
      var n = C.encode(e);
      t.set(n);
      return { read: e.length, written: n.length };
    };
  }
  var y = null;
  function k() {
    return (
      (null === y ||
        true === y.buffer.detached ||
        (void 0 === y.buffer.detached && y.buffer !== E.memory.buffer)) &&
      (y = new DataView(E.memory.buffer)),
      y
    );
  }
  var I = null;
  var F64 = null;
  function x() {
    return (null !== I && 0 !== I.byteLength) || (I = new Uint8Array(E.memory.buffer)), I;
  }
  function Q(e, t, n) {
    if (void 0 === n) {
      var r = C.encode(e),
        i = t(r.length, 1) >>> 0;
      return x().subarray(i, i + r.length).set(r), (P = r.length), i;
    }
    for (var _ = e.length, o = t(_, 1) >>> 0, a = x(), s = 0; s < _; s++) {
      var l = e.charCodeAt(s);
      if (l > 127) break;
      a[o + s] = l;
    }
    if (s !== _) {
      0 !== s && (e = e.slice(s));
      o = n(o, _, (_ = s + 3 * e.length), 1) >>> 0;
      var u = x().subarray(o + s, o + _);
      o = n(o, _, (s += C.encodeInto(e, u).written), 1) >>> 0;
    }
    return (P = s), o;
  }
  function O2(arr, t) {
    var n = t(8 * arr.length, 8) >>> 0;
    return (
      (null !== F64 && 0 !== F64.byteLength || (F64 = new Float64Array(E.memory.buffer)), F64.set(arr, n / 8)),
      (P = arr.length),
      n
    );
  }
  function m(e, t) {
    return (function (e, t) {
      return (
        (D += t) >= A &&
          ((T = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true })).decode(), (D = t)),
        T.decode(x().subarray(e, e + t))
      );
    })(e >>> 0, t);
  }
  function w(e, t) {
    return (e >>>= 0), x().subarray(e / 1, e / 1 + t);
  }
  var S = new Array(1024).fill(void 0);
  S.push(void 0, null, true, false);
  var j = S.length;
  function O(e, t) {
    var n = t(1 * e.length, 1) >>> 0;
    return x().set(e, n / 1), (P = e.length), n;
  }
  function v(e) {
    j === S.length && S.push(S.length + 1);
    var t = j;
    return (j = S[t]), (S[t] = e), t;
  }
  function R(e) {
    var t = (function (e) {
      return S[e];
    })(e);
    return (
      (function (e) {
        e < 1028 || ((S[e] = j), (j = e));
      })(e),
      t
    );
  }
  var E,
    P = 0;
  var p =
    "undefined" == typeof FinalizationRegistry
      ? { register: function () {}, unregister: function () {} }
      : new FinalizationRegistry(function (e) {
          return E.__wbg_shieldsession_free(e, 1);
        });

  function BR(cls, key, val) {
    Object.defineProperty(cls, key, { value: val, enumerable: false, configurable: true, writable: true });
  }

  function ShieldSession(t) {
    if (!(this instanceof ShieldSession)) throw new TypeError("Cannot call a class as a function");
    try {
      var n = E.__wbindgen_add_to_stack_pointer(-16);
      E.shieldsession_new_js(n, t);
      var r = k().getInt32(n + 0, true),
        i = k().getInt32(n + 4, true);
      if (k().getInt32(n + 8, true)) throw R(i);
      this.__wbg_ptr = r;
      p.register(this, this.__wbg_ptr, this);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  BR(ShieldSession.prototype, "__destroy_into_raw", function () {
    var e = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    p.unregister(this);
    return e;
  });
  BR(ShieldSession.prototype, "free", function () {
    var e = this.__destroy_into_raw();
    E.__wbg_shieldsession_free(e, 0);
  });
  BR(ShieldSession.prototype, "established", function () {
    return 0 !== E.shieldsession_established(this.__wbg_ptr);
  });
  BR(ShieldSession.prototype, "hello", function () {
    try {
      var e = E.__wbindgen_add_to_stack_pointer(-16);
      E.shieldsession_hello(e, this.__wbg_ptr);
      var t = k().getInt32(e + 0, true),
        n = k().getInt32(e + 4, true),
        r = w(t, n).slice();
      E.__wbindgen_export3(t, 1 * n, 1);
      return r;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  });
  BR(ShieldSession.prototype, "onHelloAck", function (e, t) {
    try {
      var n = E.__wbindgen_add_to_stack_pointer(-16),
        r = O(e, E.__wbindgen_export2),
        i = P,
        _ = (function (e, t, n) {
          if (void 0 === n) {
            var r = C.encode(e),
              i = t(r.length, 1) >>> 0;
            return x().subarray(i, i + r.length).set(r), (P = r.length), i;
          }
          for (var _ = e.length, o = t(_, 1) >>> 0, a = x(), s = 0; s < _; s++) {
            var l = e.charCodeAt(s);
            if (l > 127) break;
            a[o + s] = l;
          }
          if (s !== _) {
            0 !== s && (e = e.slice(s));
            o = n(o, _, (_ = s + 3 * e.length), 1) >>> 0;
            var u = x().subarray(o + s, o + _);
            o = n(o, _, (s += C.encodeInto(e, u).written), 1) >>> 0;
          }
          return (P = s), o;
        })(t, E.__wbindgen_export2, E.__wbindgen_export4),
        o = P;
      E.shieldsession_onHelloAck(n, this.__wbg_ptr, r, i, _, o);
      var a = k().getInt32(n + 0, true);
      if (k().getInt32(n + 4, true)) throw R(a);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  });
  BR(ShieldSession.prototype, "open", function (e) {
    try {
      var t = E.__wbindgen_add_to_stack_pointer(-16),
        n = O(e, E.__wbindgen_export2),
        r = P;
      E.shieldsession_open(t, this.__wbg_ptr, n, r);
      var i = k().getInt32(t + 0, true),
        _ = k().getInt32(t + 4, true),
        o = k().getInt32(t + 8, true);
      if (k().getInt32(t + 12, true)) throw R(o);
      var a = w(i, _).slice();
      return E.__wbindgen_export3(i, 1 * _, 1), a;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  });
  BR(ShieldSession.prototype, "sealControl", function (e) {
    try {
      var t = E.__wbindgen_add_to_stack_pointer(-16),
        n = O(e, E.__wbindgen_export2),
        r = P;
      E.shieldsession_sealControl(t, this.__wbg_ptr, n, r);
      var i = k().getInt32(t + 0, true),
        _ = k().getInt32(t + 4, true),
        o = k().getInt32(t + 8, true);
      if (k().getInt32(t + 12, true)) throw R(o);
      var a = w(i, _).slice();
      return E.__wbindgen_export3(i, 1 * _, 1), a;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  });
  BR(ShieldSession.prototype, "mouse", function (e, t) {
    try {
      var n = E.__wbindgen_add_to_stack_pointer(-16);
      E.shieldsession_mouse(n, this.__wbg_ptr, e, t);
      var r = k().getInt32(n + 0, true),
        _ = k().getInt32(n + 4, true),
        i = k().getInt32(n + 8, true);
      if (k().getInt32(n + 12, true)) throw R(i);
      var o = w(r, _).slice();
      return E.__wbindgen_export3(r, 1 * _, 1), o;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  });
  BR(ShieldSession.prototype, "split", function () {
    try {
      var e = E.__wbindgen_add_to_stack_pointer(-16);
      E.shieldsession_split(e, this.__wbg_ptr);
      var t = k().getInt32(e + 0, true),
        n = k().getInt32(e + 4, true),
        r = k().getInt32(e + 8, true);
      if (k().getInt32(e + 12, true)) throw R(r);
      var _ = w(t, n).slice();
      return E.__wbindgen_export3(t, 1 * n, 1), _;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  });
  BR(ShieldSession.prototype, "eject", function () {
    try {
      var e = E.__wbindgen_add_to_stack_pointer(-16);
      E.shieldsession_eject(e, this.__wbg_ptr);
      var t = k().getInt32(e + 0, true),
        n = k().getInt32(e + 4, true),
        r = k().getInt32(e + 8, true);
      if (k().getInt32(e + 12, true)) throw R(r);
      var _ = w(t, n).slice();
      return E.__wbindgen_export3(t, 1 * n, 1), _;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  });
  BR(ShieldSession.prototype, "spawn", function (e) {
    try {
      var t = E.__wbindgen_add_to_stack_pointer(-16),
        n = O(e, E.__wbindgen_export2),
        r = P;
      E.shieldsession_spawn(t, this.__wbg_ptr, n, r);
      var i = k().getInt32(t + 0, true),
        _ = k().getInt32(t + 4, true),
        o = k().getInt32(t + 8, true);
      if (k().getInt32(t + 12, true)) throw R(o);
      var a = w(i, _).slice();
      return E.__wbindgen_export3(i, 1 * _, 1), a;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  });
  BR(ShieldSession.prototype, "omegaHello", function (e, t, n) {
    try {
      var r = E.__wbindgen_add_to_stack_pointer(-16),
        _ = Q(e, E.__wbindgen_export2, E.__wbindgen_export4),
        i = P,
        o = Q(t, E.__wbindgen_export2, E.__wbindgen_export4),
        a = P;
      E.shieldsession_omegaHello(r, this.__wbg_ptr, _, i, o, a, n);
      var s = k().getInt32(r + 0, true),
        d = k().getInt32(r + 4, true),
        l = k().getInt32(r + 8, true);
      if (k().getInt32(r + 12, true)) throw R(l);
      var u = w(s, d).slice();
      return E.__wbindgen_export3(s, 1 * d, 1), u;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  });
  BR(ShieldSession.prototype, "omegaInput", function (e, t, n, r, _, i) {
    try {
      var o = E.__wbindgen_add_to_stack_pointer(-16),
        a = O2(_, E.__wbindgen_export2),
        s = P,
        d = O2(i, E.__wbindgen_export2),
        l = P;
      E.shieldsession_omegaInput(o, this.__wbg_ptr, e, t, n, r, a, s, d, l);
      var u = k().getInt32(o + 0, true),
        g = k().getInt32(o + 4, true),
        c = k().getInt32(o + 8, true);
      if (k().getInt32(o + 12, true)) throw R(c);
      var f = w(u, g).slice();
      return E.__wbindgen_export3(u, 1 * g, 1), f;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  });
  function omegaGroups(grp) {
    return new Float64Array([
      grp.x,
      grp.y,
      grp.generation,
      grp.waves,
      grp.feed ? 1 : 0,
      grp.spawn ? 1 : 0,
      grp.line ? 1 : 0,
    ]);
  }
  BR(ShieldSession.prototype, "seal", function (e) {
    if (!this.established() || !this.__wbg_ptr) return e;
    var t = new Uint8Array(e);
    if (0 === t.length) return e;
    try {
      switch (t[0]) {
        case 16:
          if (t.length < 17) return this.sealControl(t);
          var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
          return this.mouse(n.getFloat64(1, true), n.getFloat64(9, true));
        case 17:
          return this.split();
        case 21:
          return this.eject();
        case 0:
          return this.spawn(t.subarray(1, t.length - 1));
        case 123:
          if (t.length > 1 && 6 === t[1]) return this.sealControl(t);
          var r = JSON.parse(new TextDecoder().decode(t));
          return r && "omegaInput" === r.type
            ? this.omegaInput(r.epoch, r.seq, r.active, !0 === r.spectate, omegaGroups(r.groups[0]), omegaGroups(r.groups[1]))
            : r && "omegaHello" === r.type
              ? this.omegaHello(r.secondaryName || "", r.secondarySkin || "", !0 === r.sealedJson)
              : this.sealControl(t);
        default:
          return this.sealControl(t);
      }
    } catch (e2) {
      return e;
    }
  });
  Object.defineProperty(ShieldSession, "prototype", { writable: false });

  function shield_attest(cb, payload) {
    try {
      var n = E.__wbindgen_add_to_stack_pointer(-16),
        r = O(payload, E.__wbindgen_export2),
        i = P;
      E.shield_attest(n, cb, r, i);
      var _ = k().getInt32(n + 0, true),
        o = k().getInt32(n + 4, true);
      if (k().getInt32(n + 8, true)) throw R(o);
      var a = w(_, o).slice();
      return E.__wbindgen_export3(_, 1 * o, 1), a;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function shield_build_id() {
    return E.shield_build_id() >>> 0;
  }
  function shield_protocol_version() {
    return E.shield_protocol_version();
  }
  function shield_selftest() {
    return 0 !== E.shield_selftest();
  }
  function shield_vm_seed() {
    return E.shield_vm_seed() >>> 0;
  }
  function shield_run_challenge(e) {
    var t = O(e, E.__wbindgen_export2),
      n = P;
    return E.shield_run_challenge(t, n) >>> 0;
  }
  function getRandomValues(ptr, len) {
    try {
      globalThis.crypto.getRandomValues(w(ptr, len));
    } catch (err) {
      E.__wbindgen_export(v(err));
    }
  }
  function throwError(ptr, len) {
    throw new Error(m(ptr, len));
  }
  function castStr(ptr, len) {
    return v(m(ptr, len));
  }

  // ------------------------------------------------------------------ wasm
  var imports = {
    "./shield_bg.js": {
      __wbindgen_object_drop_ref: R,
      __wbg_getRandomValues_436a51d0629d84e1: getRandomValues,
      __wbg___wbindgen_throw_bb96b2010945f0bc: throwError,
      __wbindgen_cast_0000000000000001: castStr,
    },
  };

  function loadWasm(url) {
    return fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error("wasm fetch failed " + r.status);
        return r.arrayBuffer();
      })
      .then(function (buf) {
        return WebAssembly.instantiate(buf, imports);
      })
      .then(function (res) {
        E = res.instance.exports;
        if (!shield_selftest()) throw new Error("shield selftest failed");
        return true;
      });
  }

  // The server validates the shield build the CURRENT page ships
  // (js/dist/bundle.js?v=...), and that build hash changes on every game
  // update. Discover the live wasm URL from the versioned bundle + shield
  // chunk, and cache it per bundle version so later loads are instant.
  function getBundleVersion() {
    return fetch("https://3rb.io/").then(function (r) {
      if (!r.ok) throw new Error("page fetch failed " + r.status);
      return r.text();
    }).then(function (html) {
      var m = html.match(/js\/dist\/bundle\.js\?v=([a-f0-9]+)/);
      if (!m) throw new Error("bundle version not found in page");
      return m[1];
    });
  }
  function discoverWasmUrl(v) {
    try {
      var cached = localStorage.getItem("dragplus_wasm_" + v);
      if (cached) return Promise.resolve(cached);
    } catch (e) {}
    return fetch("https://3rb.io/js/dist/bundle.js?v=" + v)
      .then(function (r) {
        if (!r.ok) throw new Error("bundle fetch failed " + r.status);
        return r.text();
      })
      .then(function (text) {
        var m = text.match(/123:"([a-f0-9]+)"/);
        if (!m) throw new Error("shield chunk not found in bundle");
        return fetch("https://3rb.io/js/dist/123." + m[1] + ".bundle.js").then(function (r) {
          if (!r.ok) throw new Error("chunk fetch failed " + r.status);
          return r.text();
        });
      })
      .then(function (text) {
        var m = text.match(/\.v\([^)]*?"([a-f0-9]{20})"/);
        if (!m) throw new Error("shield wasm id not found in chunk");
        return "https://3rb.io/js/dist/" + m[1] + ".module.wasm";
      })
      .then(function (url) {
        try { localStorage.setItem("dragplus_wasm_" + v, url); } catch (e) {}
        return url;
      });
  }
  function loadWasmDynamic() {
    return getBundleVersion().then(discoverWasmUrl).then(loadWasm);
  }

  // Order: current live build -> hardcoded current build -> GitHub copy.
  var ready = loadWasmDynamic()
    .catch(function (e) {
      console.warn("[Drag+] live shield discovery failed (" + (e && e.message) + "), trying hardcoded wasm");
      return loadWasm(WASM_PRIMARY);
    })
    .catch(function () {
      console.warn("[Drag+] hardcoded wasm failed, trying GitHub fallback");
      return loadWasm(WASM_FALLBACK);
    });

  window.__SHIELD__ = {
    ready: ready,
    isReady: false,
    ShieldSession: ShieldSession,
    shield_attest: shield_attest,
    shield_build_id: shield_build_id,
    shield_protocol_version: shield_protocol_version,
    shield_selftest: shield_selftest,
    shield_vm_seed: shield_vm_seed,
    shield_run_challenge: shield_run_challenge,
  };
  ready.then(function () {
    window.__SHIELD__.isReady = true;
  }).catch(function (e) {
    console.error("[Drag+] Shield init failed", e);
  });
})();