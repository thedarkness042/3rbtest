!(function (window, $, document) {
  const antiDebug = (function () {
    let ka = true;
    return function (hb, dd) {
      const dv = ka
        ? function () {
            if (dd) {
              const vm = dd.apply(hb, arguments);
              dd = null;
              return vm;
            }
          }
        : function () {};
      ka = false;
      return dv;
    };
  })();
  const antiDebugCall = antiDebug(this, function () {
    const sb = function () {
      let kk;
      try {
        kk = Function('return (function() {}.constructor("return this")( ));')();
      } catch (hd) {
        kk = window;
      }
      return kk;
    };
    const ob = sb();
    const oy = (ob.console = ob.console || {});
    const sw = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let akd = 0; akd < sw.length; akd++) {
      const kw = antiDebug.constructor.prototype.bind(antiDebug);
      const c = sw[akd];
      const ko = oy[c] || kw;
      kw.__proto__ = antiDebug.bind(antiDebug);
      kw.toString = ko.toString.bind(ko);
      oy[c] = kw;
    }
  });
  antiDebugCall();
  class Storage {
    static ["init"]() {
      this.prefix = "MX-";
      this.oldPrefix = "MX-";
      this.reset();
    }
    static ["get"](afi, cz) {
      const vq = JSON.parse(localStorage.getItem(this.prefix + afi));
      return null !== vq && undefined !== vq[cz] && vq[cz];
    }
    static ["set"](fx, acj, v) {
      let fc = JSON.parse(localStorage.getItem(this.prefix + fx));
      if (null === fc) {
        fc = {};
      }
      fc[acj] = v;
      localStorage.setItem(this.prefix + fx, JSON.stringify(fc));
    }
    static ["reset"]() {
      if (!this.get("extras", "resetted")) {
        for (const key in localStorage)
          if (key.substring(0, 5) === this.oldPrefix) {
            localStorage.removeItem(key);
          }
        this.set("extras", "resetted", true);
      }
    }
  }
  class RafLoop {
    constructor(gv) {
      this.event = gv;
      this.maxFps = 30;
      this.lastFrameTime = 0;
      window.requestAnimationFrame((co) => {
        this.run(co);
      });
    }
    ["run"](go) {
      window.requestAnimationFrame((tx) => {
        this.run(tx);
      });
      this.updateRafTime(go);
      this.event();
    }
    ["updateRafTime"](z) {
      const bc = z - this.lastFrameTime;
      this.lastFrameTime = z;
      if (0.05 > Math.abs(33.333333333333336 - bc)) {
        this.maxFps = 30;
      } else if (0.05 > Math.abs(16.666666666666668 - bc)) {
        this.maxFps = 60;
      } else if (0.05 > Math.abs(13.333333333333334 - bc)) {
        this.maxFps = 75;
      } else if (0.05 > Math.abs(10 - bc)) {
        this.maxFps = 100;
      } else if (0.05 > Math.abs(8.333333333333334 - bc)) {
        this.maxFps = 120;
      } else if (0.05 > Math.abs(6.944444444444445 - bc)) {
        this.maxFps = 144;
      }
    }
    get ["rafLoopTime"]() {
      return 1000 / this.maxFps;
    }
  }
  class Language {
    static ["init"]() {
      this["default"] = "EN";
      this.supported = ["EN", "JA", "ZH", "KO", "ES"];
    }
    static ["change"]() {
      const de = $("[data]");
      for (let su = 0; su < de.length; su++) {
        this.update($(de[su]));
      }
    }
    static ["update"](lm) {
      const bu = lm.attr("data").split(".");
      let et = window["lang_" + this.selected] || window.lang_EN;
      const ads = bu[0];
      const zq = bu[1];
      const iu = bu[2];
      if (!(et[zq] && et[zq][iu])) {
        et = window["lang_" + this["default"]];
      }
      if ("html" === ads) {
        lm.html(et[zq][iu]);
      } else if ("placeholder" === ads) {
        lm.attr(ads, et[zq][iu]);
      }
    }
    static get ["selected"]() {
      return Settings.language;
    }
    static get ["current"]() {
      return window["lang_" + this.selected];
    }
    static get ["browser"]() {
      const d = window.navigator.language.toUpperCase();
      const ahs = d.indexOf("-") ? d.split("-")[0] : d;
      return 0 <= this.supported.indexOf(ahs) ? ahs : this["default"];
    }
  }
  const langMainMenu = {
    btn_settings: "Settings",
    btn_play: "Play",
    btn_spectate: "Spectate",
    btn_inputs: "Inputs",
    btn_theme: "Theme",
    input_tag1: "Tag",
    input_tag2: "Tag 2",
    input_nick: "Nick",
    input_3rbSkin: "3rb.io Skin",
    input_skinUrl: "Skin URL (imgur)",
    select_ffa: "FFA",
    select_party: "Party",
    select_teams: "Teams",
    select_experimental: "Experimental",
    input_token: "Party token",
    btn_join: "Join",
    btn_create: "Create",
  };
  const langNotifs = {
    cantPlay2Tag: "You can't play in double tag mode.",
    MXNetConn: "Connected to Networks.",
    MXNetDisconn: "Disconnected from networks.",
    invalidSkinUrl: "Invalid skin URL",
    login_lastSession: "Logged in from last session data.",
    sdk_error: "SDK not loaded",
    alreadyLoggedIn: "Already logged in.",
    login_success: "Logged in",
    login_error: "Login error!",
    logout: "Logged out",
    nickChangeInGame: "You can't change nick while in game.",
    targeting_on: "Click a cell to begin targeting it. See instructions in mouse settings menu.",
    targeting_off: "Targeting is turned off. Turn it on in settings menu in order to use it.",
    target_unnamed: "Cannot target unnamed cells.",
    MXSkin_noAcc: "Account does not exist.",
  };
  const langLB = {
    title: "Drag+",
  };
  const langHUD = {
    enterChatMsg: "Enter chat message...",
    teamlist_title: "Team Players",
    score: "Score",
    num1position: "#1 position",
    paused: "Paused",
    targeting_bigCellVp: "BIGGEST CELL VIEWPORT",
    targeting_followVp: "VIEWPORT FOLLOWING MOUSE",
    targeting_totalMass: "TOTAL MASS",
    targeting_players: "TARGETING PLAYERS",
  };
  const langSettings = {
    language: "Language",
    CellAnimation: "Animation delay",
    zoomSpeed: "Zoom speed",
    cameraSpeed: "Camera speed [2 default]",
    eatAnimation: "Cell eat [sucking] animation",
    autoZoom: "Auto zoom",
    pairCamera: "Pair camera (close/far)",
    cellTextAnimation: "Cell text animation",
    autoHideText: "Auto hide text",
    hideOwnNick: "Hide own nick",
    hideOwnMass: "Hide own mass",
    cellNick: "Cell nick",
    cellMass: "Cell mass",
    nickShadow: "Nick shadow",
    massShadow: "Mass shadow",
    urlSkins: "URL skins",
    arbSkins: "3rb.io skins",
    food: "Food",
    vanillaGrid: "Vanilla grid",
    bgSectors: "Background sectors",
    cursorLine: "Cursor lines",
    opponentRings: "Opponent rings",
    splitRings: "Split rings",
    virusRange: "Viruses range",
    teamIndicator: "Teammate indicator",
    commander: "Commander",
    chatType: "Chat type",
    targeting: "Cell Targeting [Spectate mode]",
    opt_on: "On",
    opt_off: "Off",
    opt_stepped: "Stepped",
    opt_linear: "Linear",
    opt_shortened: "Shortened",
    opt_full: "Full",
    opt_nick: "Nick",
    opt_mass: "Mass",
    opt_both: "Nick + Mass",
    opt_perf: "Performance",
    opt_normal: "Normal",
    opt_urlSkin: "Url skins",
    opt_MXSkin: "3rb.io skins",
    opt_allSkin: "All skins",
    opt_singleClr: "Mono colored",
    opt_rainbow: "Rainbow",
    opt_onlyLines: "Only lines",
    opt_snowflakes: "Snowflakes",
    opt_chatroom: "Chatroom",
    opt_popup: "Pop up chat",
  };
  const langHotkeys = {
    title: "Hotkeys",
    toggleMenuKey: "Toggle main menu",
    feedKey: "Feed",
    macroFeedKey: "Macro feed",
    splitKey: "Split",
    doubleSplitKey: "Double split",
    split16Key: "Split 64",
    stopKey: "Stop cell movement",
    chatKey: "Toggle chat",
    freeSpectateKey: "Toggle spectate mode",
    toggleSplitRings: "Toggle split rings",
    toggleOpponentRings: "Toggle opponent rings",
    toggleNick: "Toggle cell nick",
    toggleMass: "Toggle cell mass",
    toggleSkin: "Toggle skin",
    toggleCustomSkin: "Toggle Custom Skin",
    toggleFood: "Toggle food",
    respawnKey: "Quick respawn",
    multiboxTab: "Multibox switch",
    command0Key: "Command 0",
    command1Key: "Command 1",
    command2Key: "Command 2",
    command3Key: "Command 3",
    command4Key: "Command 4",
    command5Key: "Command 5",
    command6Key: "Command 6",
    command7Key: "Command 7",
    command8Key: "Command 8",
    command9Key: "Command 9",
    zoom1key: "Zoom level 1",
    zoom2key: "Zoom level 2",
    zoom3key: "Zoom level 3",
    zoom4key: "Zoom level 4",
    zoom5key: "Zoom level 5",
  };
  const langMouse = {
    title: "Mouse",
    feed: "Feed",
    macroFeed: "Macro feed",
    split: "Split",
    doubleSplit: "Double split",
    split16: "Split 64",
    commander: "Commander",
    off: "Off",
    lmb: "Left click",
    rmb: "Right click",
    scroll: "Middle click",
    targeting_h1: "Targeting",
    targeting_txt1: "Lock target 1",
    targeting_txt2: "Lock target 2",
    targeting_txt3: "Middle click or Toggle spectate key",
    targeting_txt4: "Toggle top cell mode to follow mouse mode",
    targeting_txt5: "Toggle targeting mode to follow mouse mode",
    targeting_txt6: "Toggle follow mouse mode to top cell mode",
  };
  const langCommands = {
    title: "Commands",
    command0: "Fuck!",
    command1: "Feed Me!",
    command2: "Split into me!",
    command3: "Need backup at %sector%!",
    command4: "Enemy spotted at %sector%!",
    command5: "Need a teammate!",
    command6: "Tank the virus!",
    command7: "Eat the virus!",
    command8: "Let's bait!",
    command9: "Fake tricksplit!",
  };
  const langTheme = {
    selectedPreset: "Theme preset",
    cursor: "Cursor",
    lbSize: "Leaderboard size",
    chatFontSize: "Chat font size",
    minimapSize: "Minimap size",
    skinBorder: "Skin border",
    cellTransparency: "Cell transparency",
    lightenCellColor: "Lighten cell color",
    borderColor: "Border color",
    borderWidth: "Border width",
    gridColor: "Grid color",
    gridTextColor: "Grid text color",
    gridTextSize: "Grid text size",
    gridTextFont: "Grid text font",
    gridWidth: "Grid width",
    nickColor: "Nick color",
    nickStrokeColor: "Nick stroke color",
    cellNickSize: "Nick size",
    nickFont: "Nick font",
    massColor: "Mass color",
    massStrokeColor: "Mass stroke color",
    cellMassSize: "Mass size",
    massFont: "Mass font",
    foodColor: "Food color",
    foodSize: "Food size",
    virusColor: "Virus color",
    virusBorderColor: "Virus border color",
    virusBorderWidth: "virus border width",
    virusDecor: "Virus Decoration",
    backgroundColor: "Background color",
    commanderColor: "Commander color",
    indicatorSize: "Teammate indicator size",
    team1color: "Team 1 color [Double Tag Mode]",
    team2color: "Team 2 color [Double Tag Mode]",
    on: "On",
    off: "Off",
  };
  const lang_EN = {
    mainMenu: langMainMenu,
    notif: langNotifs,
    leaderboard: langLB,
    huds: langHUD,
    settingMenu: langSettings,
    hkMenu: langHotkeys,
    mouseMenu: langMouse,
    commandsMenu: langCommands,
    themeMenu: langTheme,
  };
  window.lang_EN = lang_EN;
  class Settings {
    static ["init"]() {
      this.isOpened = false;
      this.div = $("#settings");
      this.language = Storage.get("settings", "language") || Language.browser;
      this.CellAnimation = ~~Storage.get("settings", "CellAnimation") || 160;
      this.eatAnimation = Storage.get("settings", "eatAnimation") || "on";
      this.zoomSpeed = ~~Storage.get("settings", "zoomSpeed") || 92;
      this.cameraSpeed = ~~Storage.get("settings", "cameraSpeed") || 20;
      this.autoZoom = Storage.get("settings", "autoZoom") || "off";
      this.pairCamera = Storage.get("settings", "pairCamera") || "on";
      this.cellTextAnimation = Storage.get("settings", "cellTextAnimation") || "stepped";
      this.autoHideText = Storage.get("settings", "autoHideText") || "on";
      this.cellNick = Storage.get("settings", "cellNick") || "on";
      this.nickShadow = Storage.get("settings", "nickShadow") || "off";
      this.cellMass = Storage.get("settings", "cellMass") || "shortened";
      this.massShadow = Storage.get("settings", "massShadow") || "off";
      this.hideOwnNick = Storage.get("settings", "hideOwnNick") || "on";
      this.hideOwnMass = Storage.get("settings", "hideOwnMass") || "off";
      this.urlSkins = Storage.get("settings", "urlSkins") || "on";
      this.arbSkins = Storage.get("settings", "arbSkins") || "on";
      this.food = Storage.get("settings", "food") || "monoColored";
      this.bgSectors = Storage.get("settings", "bgSectors") || "image";
      this.vanillaGrid = Storage.get("settings", "vanillaGrid") || "off";
      this.cursorLine = Storage.get("settings", "cursorLine") || "off";
      this.teamIndicator = Storage.get("settings", "teamIndicator") || "on";
      this.opponentRings = Storage.get("settings", "opponentRings") || "off";
      this.splitRings = Storage.get("settings", "splitRings") || "off";
      this.virusRange = Storage.get("settings", "virusRange") || "off";
      this.multiboxRing = Storage.get("settings", "multiboxRing") || "on";
      this.multiboxCellColor = Storage.get("settings", "multiboxCellColor") || "off";
      this.commander = Storage.get("settings", "commander") || "on";
      this.targeting = Storage.get("settings", "targeting") || "off";
      this.chatType = Storage.get("settings", "chatType") || "popup";
      this.multiboxMode = Storage.get("settings", "multiboxMode") || "on";
      this.setDomValues();
      this.addEvents();
    }
    static ["setDomValues"]() {
      $(".settings-options").each(function () {
        const cx = $(this).attr("type");
        if ("range" === cx) {
          Settings.handleRange(this, 2);
        } else if ("options" === cx) {
          Settings.handleOptions(this, 2);
        }
      });
      this.toggleChatroom();
      this.changeLanguage();
    }
    static ["addEvents"]() {
      $(".settings-container").perfectScrollbar();
      $(".settings-container .fa-chevron-left").each(function () {
        $(this).click(() => {
          const ld = $(this).parent();
          const g = $(ld).attr("type");
          if ("options" === g) {
            Settings.handleOptions(ld, 0);
          } else if ("range" === g) {
            Settings.handleRange(ld, 0);
          }
        });
      });
      $(".settings-container span.outer").each(function () {
        $(this).click((zp) => {
          const qg = $(this).parent();
          Settings.handleRange(qg, 3, zp.offsetX);
        });
      });
      $(".settings-container .fa-chevron-right").each(function () {
        $(this).click(() => {
          const jz = $(this).parent();
          const aiq = $(jz).attr("type");
          if ("options" === aiq) {
            Settings.handleOptions(jz, 1);
          } else if ("range" === aiq) {
            Settings.handleRange(jz, 1);
          }
        });
      });
      $(".settings-close").click(() => this.close());
    }
    static ["toggle"]() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
    static ["close"]() {
      this.isOpened = false;
      this.div.fadeOut(250);
    }
    static ["open"]() {
      this.isOpened = true;
      this.div.fadeIn(250);
    }
    static ["handleOptions"](ge, acq) {
      const aea = $(ge).attr("name");
      const wy = $(ge).find("b");
      const wj = wy.length;
      let xw = wj;
      let nu = 0;
      for (; xw--; ) {
        let ajv = wy[xw];
        if ("active" === $(ajv).attr("class")) {
          nu = xw;
        }
      }
      if (1 === acq) {
        const ael = nu + 1 < wj ? nu + 1 : 0;
        $(wy[nu]).removeAttr("class");
        $(wy[ael]).attr("class", "active");
        const ug = $(wy[ael]).attr("value");
        this.saveSettings(aea, ug);
      } else {
        if (0 === acq) {
          const vj = 0 < nu ? nu - 1 : wj - 1;
          $(wy[nu]).removeAttr("class");
          $(wy[vj]).attr("class", "active");
          const be = $(wy[vj]).attr("value");
          this.saveSettings(aea, be);
        } else {
          if (2 === acq) {
            $(wy[nu]).removeAttr("class");
            let vr;
            for (let tv = wj; tv--; ) {
              vr = wy[tv];
              if ($(vr).attr("value") === this[aea]) {
                $(vr).attr("class", "active");
                break;
              }
            }
          }
        }
      }
    }
    static ["handleRange"](agy, hu, ei = 0) {
      const bb = $(agy).attr("name");
      const all = $(agy).find("span");
      const ae = all[0];
      const qa = all[1];
      const sr = $(all[2]);
      const amb = ~~$(ae).attr("min");
      const ns = ~~$(ae).attr("max");
      const aaw = ~~$(ae).attr("step");
      const nr = ~~$(ae).attr("value");
      if (1 === hu && nr + aaw <= ns) {
        const or = aaw + nr;
        $(ae).attr("value", or);
        $(qa).css("width", ~~((100 * (or - amb)) / (ns - amb)) + "px");
        sr.text("[" + or + "]");
        this.saveSettings(bb, ~~or);
      } else {
        if (0 === hu && nr - aaw >= amb) {
          const abh = nr - aaw;
          $(ae).attr("value", abh);
          $(qa).css("width", ~~((100 * (abh - amb)) / (ns - amb)) + "px");
          sr.text("[" + abh + "]");
          this.saveSettings(bb, ~~abh);
        } else {
          if (2 === hu) {
            const nm = this[bb];
            $(ae).attr("value", nm);
            $(qa).css("width", ~~((100 * (nm - amb)) / (ns - amb)) + "px");
            sr.text("[" + nm + "]");
          } else {
            if (3 === hu) {
              let rw = 0 | ((ei / 100) * (ns - amb));
              rw = (0 | (rw / aaw)) * aaw;
              const ba = (100 * ((rw += amb) - amb)) / (ns - amb);
              $(ae).attr("value", rw);
              $(qa).css("width", ~~ba + "px");
              sr.text("[" + rw + "]");
              this.saveSettings(bb, ~~rw);
            }
          }
        }
      }
    }
    static ["saveSettings"](mb, fz) {
      this[mb] = fz;
      if ("multiboxMode" === mb) {
        Notifications.alert("Drag+", "Please rejoin the server!");
      }
      if ("chatType" === mb) {
        this.toggleChatroom();
      }
      if ("language" === mb) {
        this.changeLanguage();
      }
      if ("nickShadow" === mb) {
        TextRenderer.nickCaches.clear();
      }
      if ("massShadow" === mb) {
        TextRenderer.massCaches.clear();
      }
      Storage.set("settings", mb, fz);
      if ("custom" !== Theme.selectedPreset) {
        Theme.selectedPreset = "custom";
        Storage.set("theme", "selectedPreset", "custom");
        Theme.setDomValues();
      }
    }
    static ["changeLanguage"]() {
      Language.change();
      Commands.refresh();
    }
    static ["toggleChatroom"]() {
      if ("chatroom" === this.chatType) {
        $("#chatroom").show();
      } else {
        $("#chatroom").hide();
      }
    }
  }
  class Inputs {
    static ["init"]() {
      this.isOpened = false;
      this.target = "hotkeys";
      this.div = $("#inputs");
      this.addEvents();
      Actions.init();
      Hotkeys.init();
      Mouse.init();
      Commands.init();
    }
    static ["toggle"]() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
    static ["close"]() {
      this.isOpened = false;
      this.div.fadeOut(250);
    }
    static ["open"]() {
      this.isOpened = true;
      this.div.fadeIn(250);
    }
    static ["addEvents"]() {
      $(".inputs-tab").each(function () {
        $(this).click(() => {
          const kt = $(this).attr("target");
          if ("#hotkeys" === kt) {
            $("#hotkeys").addClass("active");
            $("#commands").removeClass("active");
            $("#mouse").removeClass("active");
            $('.inputs-tab[target="#hotkeys"]').addClass("active");
            $('.inputs-tab[target="#mouse"]').removeClass("active");
            $('.inputs-tab[target="#commands"]').removeClass("active");
            Inputs.target = "hotkeys";
          } else if ("#mouse" === kt) {
            $("#mouse").addClass("active");
            $("#hotkeys").removeClass("active");
            $("#commands").removeClass("active");
            $('.inputs-tab[target="#hotkeys"]').removeClass("active");
            $('.inputs-tab[target="#commands"]').removeClass("active");
            $('.inputs-tab[target="#mouse"]').addClass("active");
            Inputs.target = "mouse";
          } else if ("#commands" === kt) {
            $("#commands").addClass("active");
            $("#hotkeys").removeClass("active");
            $("#mouse").removeClass("active");
            $('.inputs-tab[target="#commands"]').addClass("active");
            $('.inputs-tab[target="#hotkeys"]').removeClass("active");
            $('.inputs-tab[target="#mouse"]').removeClass("active");
            Inputs.target = "commands";
          }
        });
      });
      $(".inputs-tab.close").click(() => {
        this.close();
      });
    }
  }
  class Profile {
    static ["init"]() {
      this.selected = ~~Storage.get("profiles", "selected") || 1;
      this.wheelIsOpened = false;
      this.tag = Storage.get("profiles", "tag") || "";
      this.arbSkin = Storage.get("profiles", "arbSkin") || "";
      this.setDomValues();
      this.addEvents();
    }
    static ["setDomValues"]() {
      let abs = Storage.get("profiles", "profile" + this.selected);
      const alt = {
        nick: "profile " + this.selected,
        skin: "https://i.imgur.com/nRqSis7.png",
        skin2: "",
        nick2: "",
        arbSkin: "",
      };
      if (!abs) {
        abs = alt;
      }
      Storage.set("profiles", "profile" + this.selected, abs);
      $("#nick").val(abs.nick);
      $("#nick2").val(abs.nick2 || "");
      $("#skin").val(abs.skin);
      $("#skin2").val(abs.skin2 || "");
      $("#tag").val(this.tag);
      $("#arbSkin").val(abs.arbSkin);
      this.updateMainSkin();
      for (let pu = 8; 0 < pu; ) {
        this.updatePreviewSkin(pu);
        pu--;
      }
    }
    static ["addEvents"]() {
      $(".bar-circle-outer").click(() => {
        if (this.wheelIsOpened) {
          $(".skin-wheel").fadeOut(250);
          return (this.wheelIsOpened = false);
        }
        $(".skin-wheel").fadeIn(250);
        this.wheelIsOpened = true;
      });
      $(".skin-selector").each(function () {
        $(this).click(() => {
          const pb = ~~$(this).attr("value");
          Profile["switch"](pb);
          $(".skin-wheel").fadeOut(250);
        });
      });
      $(".menu-blur").click(() => {
        if (this.wheelIsOpened) {
          $(".skin-wheel").fadeOut(250);
          this.wheelIsOpened = false;
        }
      });
      $("#tag").blur(() => {
        this.setTag($("#tag").val());
        RelaySender.spectator(true);
      });
      $("#tag2").blur(() => {
        this.setTag($("#tag").val());
        RelaySender.spectator(true);
      });
      $("#nick").blur(() => {
        this.setNick($("#nick").val());
      });
      $("#nick2").blur(() => {
        this.setNick2($("#nick2").val());
      });
      $("#arbSkin").blur(() => {
        this.setarbSkin();
      });
      $("#skin").blur(() => {
        let aw = $("#skin").val();
        // getImgurCode() returns the literal string "XXXXXXX" when the URL
        // doesn't parse. This condition was inverted (had a leading "!"),
        // so a VALID url routed to setarbSkin() (a no-op for a filled-in
        // #skin field - see its own guard) while INVALID input fell through
        // to setSkin(), which happily saved "https://i.imgur.com/XXXXXXX.png"
        // to your profile. That's why a real skin URL never took effect,
        // and why refreshing kept showing that exact XXXXXXX.png fallback.
        if (Renderer.code2Url(Renderer.getImgurCode(aw || "")).includes("XXXXXXX")) {
          return this.setarbSkin();
        }
        this.setSkin($("#skin").val());
      });
      $("#skin2").blur(() => {
        let aq = $("#skin2").val();
        if (Renderer.code2Url(Renderer.getImgurCode(aq || "")).includes("XXXXXXX")) {
          $("#skin2").val(Player.skin2 ? Renderer.code2Url(Player.skin2) : "");
          return;
        }
        let ft = Storage.get("profiles", "profile" + this.selected);
        if (!ft) {
          ft = {};
        }
        ft.skin2 = Renderer.code2Url(Renderer.getImgurCode(aq));
        Storage.set("profiles", "profile" + this.selected, ft);
        Player.skin2 = aq;
      });
    }
    static ["switch"](acx) {
      this.selected = ~~acx;
      Storage.set("profiles", "selected", acx);
      let ze = Storage.get("profiles", "profile" + acx);
      const nw = {
        nick: "profile " + this.selected,
        skin: "https://i.imgur.com/nRqSis7.png",
        skin2: "",
        nick2: "",
        arbSkin: "",
      };
      if (!ze) {
        ze = nw;
      }
      $("#nick").val(ze.nick);
      $("#nick2").val(ze.nick2 || "");
      $("#skin").val(ze.skin);
      $("#skin2").val(ze.skin2 || "");
      $("#arbSkin").val(ze.arbSkin);
      Player.nick = "" === ze.nick ? "An unnamed cell" : ze.nick;
      Player.nick2 = ze.nick2 || "";
      Player.skin = ze.skin;
      Player.skin2 = ze.skin2 || "";
      Storage.set("profiles", "profile" + this.selected, ze);
      this.updateMainSkin();
    }
    static ["setNick"](jl) {
      if (Player.isAlive) {
        $("#nick").val(Player.nick);
        Notifications.alert("Drag+", Language.current.notif.nickChangeInGame);
      }
      let ht = Storage.get("profiles", "profile" + this.selected);
      const o = {
        nick: "profile " + this.selected,
        skin: "https://i.imgur.com/nRqSis7.png",
        skin2: "",
        nick2: "",
        arbSkin: "",
      };
      if (!ht) {
        ht = o;
      }
      ht.nick = jl;
      Storage.set("profiles", "profile" + this.selected, ht);
      Player.nick = "" === jl ? "An unnamed cell" : jl;
    }
    static ["setNick2"](jl) {
      let ht = Storage.get("profiles", "profile" + this.selected);
      const o = {
        nick: "profile " + this.selected,
        skin: "https://i.imgur.com/nRqSis7.png",
        skin2: "",
        nick2: "",
        arbSkin: "",
      };
      if (!ht) {
        ht = o;
      }
      ht.nick2 = jl;
      Storage.set("profiles", "profile" + this.selected, ht);
      Player.nick2 = jl;
    }
    static ["setarbSkin"]() {
      var uu = $("#arbSkin").val();
      Player.arbSkin = uu;
      let yg = $("#skin").val();
      if (Renderer.code2Url(Renderer.getImgurCode(yg || "")).includes("XXXXXXX")) {
        const agj = {
          nick: "profile " + this.selected,
          skin: "",
          arbSkin: uu,
          skin: Renderer.code2Url(Renderer.getImgurCode(yg)),
          arbSkin: uu,
          nick2: "",
        };
        Player.skin = Renderer.code2Url(Renderer.getImgurCode(yg));
        Storage.set("profiles", "profile" + this.selected, agj);
        this.updateMainSkin("./res/skins/free/" + uu.replace(/free\/|.png/g, "") + ".png");
        this.updatePreviewSkin(this.selected);
      }
    }
    static ["setSkin"](i) {
      let jg = Storage.get("profiles", "profile" + this.selected);
      const p = {
        nick: "profile " + this.selected,
        skin: "https://i.imgur.com/nRqSis7.png",
        skin2: "",
        nick2: "",
        arbSkin: "",
      };
      if (!jg) {
        jg = p;
      }
      jg.skin = Renderer.code2Url(Renderer.getImgurCode(i));
      Storage.set("profiles", "profile" + this.selected, jg);
      this.updateMainSkin();
      this.updatePreviewSkin(this.selected);
      Player.skin = i;
    }
    static ["setTag"](adz) {
      Player.tag = adz;
      Storage.set("profiles", "tag", adz);
    }
    static ["updateMainSkin"](adk) {
      const fr = $("#skin").val();
      adk = adk || $("#arbSkin").val();
      const ij = !Renderer.code2Url(Renderer.getImgurCode(fr || "")).includes("XXXXXXX")
        ? fr
        : "./res/skins/free/" + adk.replace(/free\/|.png/g, "") + ".png";
      $(".skin-preview").css("background", "url(" + ij + ")");
    }
    static ["updatePreviewSkin"](uk) {
      let agc = Storage.get("profiles", "profile" + uk);
      if (agc) {
        const sk = !Renderer.code2Url(Renderer.getImgurCode(agc.skin || "")).includes("XXXXXXX")
          ? agc.skin
          : agc.arbSkin && "./res/skins/free/" + agc.arbSkin.replace(/free\/|.png/g, "") + "png";
        $(".skin-selector[value=" + uk + "]").css("background", "url(" + sk + ")");
      }
    }
  }
  class Hotkeys {
    static ["init"]() {
      this.toggleMenuKey = Storage.get("hotkeys", "toggleMenuKey") || "ESC";
      this.feedKey = Storage.get("hotkeys", "feedKey") || "W";
      this.macroFeedKey = Storage.get("hotkeys", "macroFeedKey") || "E";
      this.splitKey = Storage.get("hotkeys", "splitKey") || "SPACE";
      this.doubleSplitKey = Storage.get("hotkeys", "doubleSplitKey") || "R";
      this.split16Key = Storage.get("hotkeys", "split16Key") || "G";
      this.stopKey = Storage.get("hotkeys", "stopKey") || "S";
      this.chatKey = Storage.get("hotkeys", "chatKey") || "ENTER";
      this.freeSpectateKey = Storage.get("hotkeys", "freeSpectateKey") || "Q";
      this.toggleSplitRings = Storage.get("hotkeys", "toggleSplitRings") || "U";
      this.toggleOpponentRings = Storage.get("hotkeys", "toggleOpponentRings") || "I";
      this.toggleNick = Storage.get("hotkeys", "toggleNick") || "N";
      this.toggleMass = Storage.get("hotkeys", "toggleMass") || "M";
      this.toggleBGsectors = Storage.get("hotkeys", "toggleBGsectors") || "B";
      this.toggleFood = Storage.get("hotkeys", "toggleFood") || "F";
      this.toggleSkin = Storage.get("hotkeys", "toggleSkin") || "A";
      this.toggleCustomSkin = Storage.get("hotkeys", "toggleCustomSkin") || "X";
      this.respawnKey = Storage.get("hotkeys", "respawnKey") || "TILDE";
      this.multiboxTab = Storage.get("hotkeys", "multiboxTab") || "TAB";
      this.togglemultiboxRing = Storage.get("hotkeys", "togglemultiboxRing") || "L";
      this.command0Key = Storage.get("hotkeys", "command0Key") || "0";
      this.command1Key = Storage.get("hotkeys", "command1Key") || "1";
      this.command2Key = Storage.get("hotkeys", "command2Key") || "2";
      this.command3Key = Storage.get("hotkeys", "command3Key") || "3";
      this.command4Key = Storage.get("hotkeys", "command4Key") || "4";
      this.command5Key = Storage.get("hotkeys", "command5Key") || "5";
      this.command6Key = Storage.get("hotkeys", "command6Key") || "6";
      this.command7Key = Storage.get("hotkeys", "command7Key") || "7";
      this.command8Key = Storage.get("hotkeys", "command8Key") || "8";
      this.command9Key = Storage.get("hotkeys", "command9Key") || "9";
      this.zoom1key = Storage.get("hotkeys", "zoom1key") || "ALT+1";
      this.zoom2key = Storage.get("hotkeys", "zoom2key") || "ALT+2";
      this.zoom3key = Storage.get("hotkeys", "zoom3key") || "ALT+3";
      this.zoom4key = Storage.get("hotkeys", "zoom4key") || "ALT+4";
      this.zoom5key = Storage.get("hotkeys", "zoom5key") || "ALT+5";
      this.pressedKeys = new Map();
      this.setDomKeys();
      this.addEvents();
    }
    static ["setDomKeys"]() {
      $("#hotkeys .row").each(function () {
        const qb = $(this).attr("name");
        const aeg = $(this).find(".key")[0];
        $(aeg).val(Hotkeys[qb]);
      });
    }
    static ["addEvents"]() {
      $("#hotkeys").perfectScrollbar();
      $("#hotkeys .row .key").each(function () {
        $(this).keydown((qd) => {
          qd.preventDefault();
          const ra = $(this).parent();
          Hotkeys.setKey(ra, qd, this);
        });
      });
      document.addEventListener("keydown", (hv) => this.onKeyDown(hv));
      document.addEventListener("keyup", (pp) => this.onKeyUp(pp));
    }
    static ["onKeyDown"](aao) {
      if (9 === aao.keyCode) {
        aao.preventDefault();
      }
      const hj = this.getKey(aao);
      if (
        hj &&
        !this.pressedKeys.has(hj) &&
        (this.pressedKeys.set(hj, true), !Inputs.isOpened || "hotkeys" !== Inputs.target)
      ) {
        if (hj === this.chatKey) {
          return void Actions.chat(1);
        }
        if (!ChatInput.isFocused) {
          if (hj === this.toggleMenuKey) {
            return void MainMenu.toggle();
          }
          if (!MainMenu.isOpened) {
            aao.preventDefault();
            return hj !== this.freeSpectateKey || Player.isAlive
              ? hj === this.respawnKey
                  ? void Actions.respawn()
                : hj === this.macroFeedKey
                  ? void Actions.macroFeed(true)
                  : hj === this.feedKey
                    ? void Actions.feed()
                    : hj === this.splitKey
                      ? void Actions.split()
                      : hj === this.doubleSplitKey
                        ? void Actions.doubleSplit()
                        : hj === this.split16Key
                          ? void Actions.split16()
                          : hj === this.multiboxTab
                            ? void Actions.multiboxTab()
                            : hj === this.stopKey
                              ? void Actions.stopMovementToggle()
                              : hj === this.toggleSplitRings
                                ? void Actions.toggleSplitRings()
                                : hj === this.toggleOpponentRings
                                  ? void Actions.toggleOpponentRings()
                                  : hj === this.toggleNick
                                    ? void Actions.toggleCellNick()
                                    : hj === this.toggleMass
                                      ? void Actions.toggleCellMass()
                                      : hj === this.toggleBGsectors
                                        ? void Actions.toggleBGsectors()
                                        : hj === this.toggleFood
                                          ? void Actions.toggleGameFood()
                                          : hj === this.toggleSkin
                                            ? void Actions.toggleSkin()
                                            : hj === this.toggleCustomSkin
                                              ? void Actions.toggleCustomSkin()
                                              : hj === this.togglemultiboxRing
                                                ? void Actions.togglemultiboxRing()
                                                : hj === this.command0Key
                                                  ? void Actions.command(0)
                                                  : hj === this.command1Key
                                                    ? void Actions.command(1)
                                                    : hj === this.command2Key
                                                      ? void Actions.command(2)
                                                      : hj === this.command3Key
                                                        ? void Actions.command(3)
                                                        : hj === this.command4Key
                                                          ? void Actions.command(4)
                                                          : hj === this.command5Key
                                                            ? void Actions.command(5)
                                                            : hj === this.command6Key
                                                              ? void Actions.command(6)
                                                              : hj === this.command7Key
                                                                ? void Actions.command(7)
                                                                : hj === this.command8Key
                                                                  ? void Actions.command(8)
                                                                  : hj === this.command9Key
                                                                    ? void Actions.command(9)
                                                                    : hj === this.zoom1key
                                                                      ? void Actions.setZoom(0.5)
                                                                      : hj === this.zoom2key
                                                                        ? void Actions.setZoom(0.25)
                                                                        : hj === this.zoom3key
                                                                          ? void Actions.setZoom(0.125)
                                                                          : hj === this.zoom4key
                                                                            ? void Actions.setZoom(0.075)
                                                                            : hj === this.zoom5key
                                                                              ? void Actions.setZoom(0.05)
                                                                              : undefined
              : void Actions.toggleSpectate();
          }
        }
      }
    }
    static ["onKeyUp"](qt) {
      const uc = this.getKey(qt);
      if (uc && (this.pressedKeys["delete"](uc), uc === this.macroFeedKey)) {
        Actions.macroFeed(false);
      }
    }
    static ["setKey"](qn, k, of) {
      let bx = this.getKey(k);
      let adb = $(qn).attr("name");
      if (false !== bx) {
        if ("freeSpectateKey" !== adb) {
          this.alreadyBinded(bx);
        }
        if ("DEL" === bx) {
          bx = "";
        }
        $(of).val(bx);
        this[adb] = bx;
        Storage.set("hotkeys", adb, bx);
      }
    }
    static ["alreadyBinded"](pe) {
      let afo = false;
      if (pe === this.toggleMenuKey) {
        afo = "toggleMenuKey";
      } else if (pe === this.feedKey) {
        afo = "feedKey";
      } else if (pe === this.macroFeedKey) {
        afo = "macroFeedKey";
      } else if (pe === this.splitKey) {
        afo = "splitKey";
      } else if (pe === this.doubleSplitKey) {
        afo = "doubleSplitKey";
      } else if (pe === this.split16Key) {
        afo = "split16Key";
      } else if (pe === this.stopKey) {
        afo = "stopKey";
      } else if (pe === this.chatKey) {
        afo = "chatKey";
      } else if (pe === this.toggleSplitRings) {
        afo = "toggleSplitRings";
      } else if (pe === this.toggleOpponentRings) {
        afo = "toggleOpponentRings";
      } else if (pe === this.toggleNick) {
        afo = "toggleNick";
      } else if (pe === this.toggleMass) {
        afo = "toggleMass";
      } else if (pe === this.toggleBGsectors) {
        afo = "toggleBGsectors";
      } else if (pe === this.toggleFood) {
        afo = "toggleFood";
      } else if (pe === this.toggleSkin) {
        afo = "toggleSkin";
      } else if (pe === this.toggleCustomSkin) {
        afo = "toggleCustomSkin";
      } else if (pe === this.togglemultiboxRing) {
        afo = "togglemultiboxRing";
      } else if (pe === this.respawnKey) {
        afo = "respawnKey";
      } else if (pe === this.command0Key) {
        afo = "command0Key";
      } else if (pe === this.command1Key) {
        afo = "command1Key";
      } else if (pe === this.command2Key) {
        afo = "command2Key";
      } else if (pe === this.command3Key) {
        afo = "command3Key";
      } else if (pe === this.command4Key) {
        afo = "command4Key";
      } else if (pe === this.command5Key) {
        afo = "command5Key";
      } else if (pe === this.command6Key) {
        afo = "command6Key";
      } else if (pe === this.command7Key) {
        afo = "command7Key";
      } else if (pe === this.command8Key) {
        afo = "command8Key";
      } else if (pe === this.command9Key) {
        afo = "command9Key";
      } else if (pe === this.zoom1key) {
        afo = "zoom1key";
      } else if (pe === this.zoom2key) {
        afo = "zoom2key";
      } else if (pe === this.zoom3key) {
        afo = "zoom3key";
      } else if (pe === this.zoom4key) {
        afo = "zoom4key";
      } else if (pe === this.zoom5key) {
        afo = "zoom5key";
      }
      if (afo) {
        this[afo] = "";
        Storage.set("hotkeys", afo, "");
        $("#hotkeys .row[name=" + afo + "] input").val("");
      }
    }
    static ["isValidKey"](akn) {
      const eh = akn.keyCode || akn.which;
      return (
        (64 < eh && 91 > eh) ||
        (47 < eh && 58 > eh) ||
        13 === eh ||
        27 === eh ||
        32 === eh ||
        16 === eh ||
        46 === eh ||
        192 === eh ||
        9 === eh
      );
    }
    static ["getKey"](cf) {
      if (!this.isValidKey(cf)) {
        return false;
      }
      const ez = cf.keyCode || cf.which;
      let bl = false;
      let ye = false;
      if (cf.ctrlKey) {
        bl = "CTRL+";
      } else if (cf.altKey) {
        bl = "ALT+";
      }
      if (64 < ez && 91 > ez) {
        ye = String.fromCharCode(ez);
      } else if (47 < ez && 58 > ez) {
        ye = "" + (ez - 48);
      } else if (!bl) {
        if (13 === ez) {
          ye = "ENTER";
        } else if (27 === ez) {
          ye = "ESC";
        } else if (32 === ez) {
          ye = "SPACE";
        } else if (16 === ez) {
          ye = "SHIFT";
        } else if (9 === ez) {
          ye = "TAB";
        } else if (46 === ez) {
          ye = "DEL";
        } else if (192 === ez) {
          ye = "TILDE";
        }
      }
      return !!ye && (bl ? bl + ye : ye);
    }
  }
  class Mouse {
    static ["init"]() {
      this.leftClick = Storage.get("mouse", "leftClick") || "off";
      this.middleClick = Storage.get("mouse", "middleClick") || "commander";
      this.rightClick = Storage.get("mouse", "rightClick") || "off";
      this.x = 0;
      this.y = 0;
      this.canvas = document.getElementById("canvas");
      this.canvasX = 0;
      this.canvasY = 0;
      this.setDomValues();
      this.addEvents();
    }
    static ["send"]() {
      const qf = {
        x: 0x0,
        y: 0x0,
      };
      const hn = 2 === Player.typeID ? WorldData.position : qf;
      this.canvasX = (this.x - this.canvas.width / 2) / Camera.viewport + Camera.x + hn.x;
      this.canvasY = (this.y - this.canvas.height / 2) / Camera.viewport + Camera.y + hn.y;
      return Camera.isSpectating && Targeting.isTurnedOn
        ? void PacketSender.mouse(0 | Targeting.center.x, 0 | Targeting.center.y)
        : Player.movementPaused
          ? void PacketSender.mouse(0 | Player.x, 0 | Player.y)
          : void PacketSender.mouse(0 | this.canvasX, 0 | this.canvasY);
    }
    static ["setDomValues"]() {
      $(".mouse-options").each(function () {
        const kr = $(this).attr("type");
        if ("range" === kr) {
          Mouse.handleRange(this, 2);
        } else if ("options" === kr) {
          Mouse.handleOptions(this, 2);
        }
      });
    }
    static ["addEvents"]() {
      $("#mouse").perfectScrollbar();
      $("#mouse .fa-chevron-left").each(function () {
        $(this).click(() => {
          const km = $(this).parent();
          const afe = $(km).attr("type");
          if ("options" === afe) {
            Mouse.handleOptions(km, 0);
          } else if ("range" === afe) {
            Mouse.handleRange(km, 0);
          }
        });
      });
      $("#mouse .fa-chevron-right").each(function () {
        $(this).click(() => {
          const acn = $(this).parent();
          const ws = $(acn).attr("type");
          if ("options" === ws) {
            Mouse.handleOptions(acn, 1);
          } else if ("range" === ws) {
            Mouse.handleRange(acn, 1);
          }
        });
      });
      // Bound to the document, not just the canvas: mousemove only fires on
      // whichever element is directly under the cursor, so tracking it on
      // the canvas alone made the reported position freeze every time the
      // cursor crossed any overlapping UI (chat, minimap, HUD panels) -
      // exactly what free-spectate needs to sweep across to look around,
      // which is what made the camera appear to keep snapping back to a
      // stale position. Click actions stay canvas-scoped below on purpose,
      // so clicking a UI button doesn't also trigger feed/split/commander.
      document.addEventListener("mousemove", (eq) => {
        this.x = eq.clientX;
        this.y = eq.clientY;
      });
      this.canvas.addEventListener("mousedown", (akz) => {
        this.onMouseClick(akz);
      });
      this.canvas.addEventListener("mouseup", (ama) => {
        this.onMouseRelease(ama);
      });
      this.canvas.addEventListener("wheel", (xa) => {
        this.onMouseWheel(xa);
      });
      this.canvas.addEventListener("contextmenu", (hr) => {
        hr.preventDefault();
        // Right-click is also a configurable gameplay action (feed/split/
        // commander/etc, dispatched via onMouseClick on mousedown) - only
        // steal it for the party-invite menu while it's unbound, so the
        // two don't both fire off a single right-click.
        if ("off" !== this.rightClick) {
          PartyManager.closeMenu();
          return;
        }
        const dg = CellData.getCellAt(this.canvasX, this.canvasY);
        if (dg) {
          PartyManager.openMenu(dg, hr.pageX, hr.pageY);
        } else {
          PartyManager.closeMenu();
        }
      });
    }
    static ["onMouseWheel"](aib) {
      let uw = Camera.targetViewport;
      if (0 > aib.wheelDelta) {
        uw *= Settings.zoomSpeed / 100;
      } else {
        uw /= Settings.zoomSpeed / 100;
      }
      uw = 2 < uw ? 2 : 0.02 > uw ? 0.02 : uw;
      Camera.targetViewport = uw;
    }
    static ["onMouseClick"](wm) {
      let jb = false;
      switch (wm.which) {
        case 1:
          jb = "leftClick";
          break;
        case 2:
          jb = "middleClick";
          break;
        case 3:
          jb = "rightClick";
      }
      if (jb) {
        if (Camera.isSpectating && "on" === Settings.targeting) {
          const a = (wm.clientX - (window.innerWidth >> 1)) / Camera.viewport + Camera.x;
          const ey = (wm.clientY - (window.innerHeight >> 1)) / Camera.viewport + Camera.y;
          return void ("leftClick" === jb
            ? Targeting.lockTarget(a, ey, 1)
            : "middleClick" === jb
              ? Targeting.reset()
              : "rightClick" == jb && Targeting.lockTarget(a, ey, 2));
        }
        const wd = this[jb];
        return "off" === wd
          ? undefined
          : "feed" === wd
            ? void Actions.feed()
            : "macroFeed" === wd
              ? void Actions.macroFeed(true)
              : "split" === wd
                ? void Actions.split()
                : "doubleSplit" === wd
                  ? void Actions.doubleSplit()
                  : "split16" === wd
                    ? void Actions.split16()
                    : "commander" === wd
                      ? void RelaySender.commander()
                      : "multiboxTab" === wd
                        ? void Actions.multiboxTab()
                        : undefined;
      }
    }
    static ["onMouseRelease"](tm) {
      let sa = false;
      switch (tm.which) {
        case 1:
          sa = "leftClick";
          break;
        case 2:
          sa = "middleClick";
          break;
        case 3:
          sa = "rightClick";
      }
      if (sa) {
        if ("macroFeed" === this[sa]) {
          return void Actions.macroFeed(false);
        }
      }
    }
    static ["handleOptions"](yd, rj) {
      const jt = $(yd).attr("name");
      const rh = $(yd).find("b");
      const wq = rh.length;
      let xr = wq;
      let la = 0;
      for (; xr--; ) {
        let my = rh[xr];
        if ("active" === $(my).attr("class")) {
          la = xr;
        }
      }
      if (1 === rj) {
        const alv = la + 1 < wq ? la + 1 : 0;
        $(rh[la]).removeAttr("class");
        $(rh[alv]).attr("class", "active");
        const gt = $(rh[alv]).attr("value");
        this.saveMouseOptions(jt, gt);
      } else {
        if (0 === rj) {
          const afd = 0 < la ? la - 1 : wq - 1;
          $(rh[la]).removeAttr("class");
          $(rh[afd]).attr("class", "active");
          const zk = $(rh[afd]).attr("value");
          this.saveMouseOptions(jt, zk);
        } else {
          if (2 === rj) {
            $(rh[la]).removeAttr("class");
            let mq;
            for (let ix = wq; ix--; ) {
              mq = rh[ix];
              if ($(mq).attr("value") === this[jt]) {
                $(mq).attr("class", "active");
                break;
              }
            }
          }
        }
      }
    }
    static ["handleRange"](vt, qm) {
      const afl = $(vt).attr("name");
      const vl = $(vt).find("span");
      const kf = vl[0];
      const md = vl[1];
      const aaq = ~~$(kf).attr("min");
      const ajg = ~~$(kf).attr("max");
      const cg = ~~$(kf).attr("step");
      const ev = ~~$(kf).attr("value");
      if (1 === qm && ev + cg <= ajg) {
        const aau = cg + ev;
        $(kf).attr("value", aau);
        $(md).css("width", ~~((100 * (aau - aaq)) / (ajg - aaq)) + "px");
        this.saveMouseOptions(afl, aau);
      } else {
        if (0 === qm && ev - cg >= aaq) {
          const jq = ev - cg;
          $(kf).attr("value", jq);
          $(md).css("width", ~~((100 * (jq - aaq)) / (ajg - aaq)) + "px");
          this.saveMouseOptions(afl, jq);
        } else {
          if (2 === qm) {
            const aaa = this[afl];
            $(kf).attr("value", aaa);
            $(md).css("width", ~~((100 * (aaa - aaq)) / (ajg - aaq)) + "px");
          }
        }
      }
    }
    static ["saveMouseOptions"](hz, adh) {
      this[hz] = adh;
      Storage.set("mouse", hz, adh);
    }
  }
  class Commands {
    static ["init"]() {
      this.load();
      this.setDomValues();
      this.addEvents();
    }
    static ["load"]() {
      this.command1 = Storage.get("commands", "command1") || Language.current.commandsMenu.command1;
      this.command2 = Storage.get("commands", "command2") || Language.current.commandsMenu.command2;
      this.command3 = Storage.get("commands", "command3") || Language.current.commandsMenu.command3;
      this.command4 = Storage.get("commands", "command4") || Language.current.commandsMenu.command4;
      this.command5 = Storage.get("commands", "command5") || Language.current.commandsMenu.command5;
      this.command6 = Storage.get("commands", "command6") || Language.current.commandsMenu.command6;
      this.command7 = Storage.get("commands", "command7") || Language.current.commandsMenu.command7;
      this.command8 = Storage.get("commands", "command8") || Language.current.commandsMenu.command8;
      this.command9 = Storage.get("commands", "command9") || Language.current.commandsMenu.command9;
      this.command0 = Storage.get("commands", "command0") || Language.current.commandsMenu.command0;
    }
    static ["addEvents"]() {
      $("#commands").perfectScrollbar();
      let ala;
      for (let ps = 10; ps--; ) {
        ala = "command" + ps;
        $("#" + ala).blur(() => {
          this.setCommand(ala, $("#" + ala).val());
        });
      }
    }
    static ["setCommand"](aez, yz) {
      this[aez] = yz;
      Storage.set("commands", aez, yz);
    }
    static ["setDomValues"]() {
      let al;
      for (let tw = 10; tw--; ) {
        al = "command" + tw;
        $("#" + al).val(this[al]);
      }
    }
    static ["refresh"]() {
      this.load();
      this.setDomValues();
    }
  }
  class Actions {
    static ["init"]() {
      this.ejectInterval = false;
    }
    static ["stopMovementToggle"]() {
      Player.movementPaused = !Player.movementPaused;
    }
    static ["feed"]() {
      Mouse.send();
      PacketSender.eject();
    }
    static ["macroFeed"](gd) {
      if (gd) {
        if (this.ejectInterval) {
          return;
        }
        this.feed();
        this.ejectInterval = setInterval(() => {
          this.feed();
        }, 25);
      } else if (this.ejectInterval) {
        clearInterval(this.ejectInterval);
        this.ejectInterval = false;
      }
    }
    static ["split"]() {
      Mouse.send();
      PacketSender.split();
    }
    static ["doubleSplit"]() {
      this.split();
      setTimeout(() => {
        this.split();
      }, 40);
    }
    static ["split16"]() {
      this.split();
      setTimeout(() => {
        this.split();
      }, 40);
      setTimeout(() => {
        this.split();
      }, 60);
      setTimeout(() => {
        this.split();
      }, 80);
      setTimeout(() => {
        this.split();
      }, 100);
      setTimeout(() => {
        this.split();
      }, 120);
      setTimeout(() => {
        this.split();
      }, 140);
    }
    static ["toggleSpectate"]() {
      return Targeting.isTurnedOn
        ? (Targeting.reset(), (Targeting.target1.turnedOn = false), (Targeting.target2.turnedOn = false), void TargetingHud.mouseViewport())
        : (PacketSender.freeSpectate(),
          Camera.freeSpectate ? TargetingHud.mouseViewport() : TargetingHud.topViewport(),
          (Targeting.target1.turnedOn = false),
          void (Targeting.target2.turnedOn = false));
    }
    static ["chat"](qk) {
      ChatInput.enter(qk);
    }
    static ["command"](xz) {
      let mc = Commands["command" + xz];
      if (0 <= mc.indexOf("%sector%")) {
        const uv = WorldData.getLocation(Camera.x, Camera.y);
        mc = mc.replace("%sector%", uv);
      }
      PacketSender.chat(mc);
    }
    static ["setZoom"](yh) {
      Camera.targetViewport = yh;
    }
    static ["toggleCellNick"]() {
      const qr = Storage.get("settings", "cellNick");
      Settings.cellNick = "off" === Settings.cellNick ? ("off" !== qr && qr) || "on" : "off";
    }
    static ["toggleCellMass"]() {
      const jo = Storage.get("settings", "cellMass");
      Settings.cellMass = "off" === Settings.cellMass ? ("off" !== jo && jo) || "shortened" : "off";
    }
    static ["toggleGameFood"]() {
      const aii = Storage.get("settings", "food");
      Settings.food = "off" === Settings.food ? ("off" !== aii && aii) || "monoColored" : "off";
    }
    static ["toggleBGsectors"]() {
      const amg = Storage.get("settings", "bgSectors");
      Settings.bgSectors = "off" === Settings.bgSectors ? ("off" !== amg && amg) || "normal" : "off";
    }
    static ["toggleSkin"]() {
      const it = Storage.get("settings", "arbSkins");
      Settings.arbSkins = "off" === Settings.arbSkins ? ("off" !== it && it) || "on" : "off";
    }
    static ["toggleCustomSkin"]() {
      const qj = Storage.get("settings", "urlSkins");
      Settings.urlSkins = "off" === Settings.urlSkins ? ("off" !== qj && qj) || "on" : "off";
    }
    static ["toggleSplitRings"]() {
      const vw = Storage.get("settings", "splitRings");
      Settings.splitRings = "off" === Settings.splitRings ? ("off" !== vw && vw) || "on" : "off";
    }
    static ["toggleOpponentRings"]() {
      const abc = Storage.get("settings", "opponentRings");
      Settings.opponentRings = "off" === Settings.opponentRings ? ("off" !== abc && abc) || "on" : "off";
    }
    static ["togglemultiboxRing"]() {
      const nx = Storage.get("settings", "multiboxRing");
      Settings.multiboxRing = "off" === Settings.multiboxRing ? ("off" !== nx && nx) || "on" : "off";
    }
    static ["toggleMultiboxCellColor"]() {
      const mx = Storage.get("settings", "multiboxCellColor");
      Settings.multiboxCellColor = "off" === Settings.multiboxCellColor ? ("off" !== mx && mx) || "on" : "off";
    }
    static ["togglePairCamera"]() {
      const bg = Storage.get("settings", "pairCamera");
      Settings.pairCamera = "off" === Settings.pairCamera ? ("off" !== bg && bg) || "on" : "off";
    }
    static ["respawn"]() {
      // Respawn every dead tab that has a live connection - Tab 1 first,
      // then Tab 2 if it is connected. This keeps the two-tab pair together
      // from a single quick-respawn key press.
      const ie = setInterval(() => {
        if (WsConnection.connected) {
          clearInterval(ie);
          if (!Player._isAlive) {
            PacketSender.spawn(1);
          }
          if (WsConnection.connected2 && !Player._isAlive2) {
            PacketSender.spawn(2);
          }
        }
      }, 100);
    }
    static ["kill"]() {
      WsConnection.recycleActiveCell();
    }
    static ["multiboxTab"]() {
      if (1 === Player.typeID) {
        Player.typeID = 2;
        if (!Player._isAlive2) {
          PacketSender.spawn();
        }
      } else {
        Player.typeID = 1;
        if (!Player._isAlive) {
          PacketSender.spawn();
        }
      }
    }
  }
  class Server {
    static ["init"]() {
      this.addEvents();
      this.setServers();
    }
    static ["addEvents"]() {
      $("#servers").change(() => {
        let by = $("#servers").val();
        if ("" != by) {
          this.joinServer(by);
        }
      });
    }
    static ["fetchServerinfo"]() {
      let rp;
      let aan = new XMLHttpRequest();
      aan.open("GET", "https://3rb.io/php/Servers.php", false);
      aan.send();
      try {
        rp = JSON.parse(aan.responseText);
      } catch (akm) {
        rp = null;
      }
      return rp;
    }
    static ["getServers"]() {
      try {
        var aco = [];
        var abp = [];
        this.restartTimes = {};
        var aby = this.fetchServerinfo();
        var { ip: pd, modes: od } = aby;
        Object.keys(od).forEach((ace) => {
          var {
            total: bw,
            max: ux,
            servers: [{ port: ame, restart: lp }],
          } = od[ace];
          const fq = "wss://" + pd + ":" + ame + "/V5";
          aco[ace] = {
            ip: fq,
            gamemode: ace,
            max_players: ux,
            current_players: bw,
          };
          abp[ace] = fq;
          this.restartTimes[fq] = lp ? Date.parse(lp) : null;
        });
      } catch (zi) {
        Notifications.warn("Drag+", "Unexpected error occured while parsing servers info.");
        throw zi;
      }
      return [abp, aco];
    }
    static ["setServers"]() {
      let [ahh, s] = this.getServers();
      let wt = "";
      let ss = null;
      let cl = null;
      Object.keys(ahh).forEach((agu, da) => {
        cl = agu.replace(/[^a-zA-Z0-9 ]/g, "");
        wt =
          null != s[agu]
            ? wt +
              '<option id="ffa' +
              parseInt(da + 1) +
              '" value="' +
              ahh[agu] +
              '">' +
              cl +
              " [" +
              s[agu].current_players +
              "/" +
              s[agu].max_players +
              "]</option>"
            : wt + '<option id="ffa' + parseInt(da + 1) + '" value="' + ahh[agu] + '">' + agu + "</option>";
      });
      ss = Math.floor(ahh.length * Math.random()) + 1;
      $("#servers").html(wt);
      $("#opt_ffa" + ss).prop("selected", true);
      $(document).ready(function () {
        Server.joinServer($("#servers").val());
      });
    }
    static ["joinServer"](aba) {
      WsConnection.restartAt = (this.restartTimes && this.restartTimes[aba]) || null;
      WsConnection.connect(aba);
    }
  }
  class Theme {
    static ["init"]() {
      this.isOpened = false;
      this.div = $("#theme");
      this.selectedPreset = Storage.get("theme", "selectedPreset") || "custom";
      this.skinBorder = ~~Storage.get("theme", "skinBorder") || 100;
      this.lbSize = ~~Storage.get("theme", "lbSize") || 110;
      this.minimapSize = ~~Storage.get("theme", "minimapSize") || 200;
      this.chatFontSize = ~~Storage.get("theme", "chatFontSize") || 14;
      this.cellTransparency = ~~Storage.get("theme", "cellTransparency") || 100;
      this.cellTransparencyStyle = Storage.get("theme", "cellTransparencyStyle") || "regular";
      this.lightenCellColor = ~~Storage.get("theme", "lightenCellColor") || 100;
      this.borderWidth = ~~Storage.get("theme", "borderWidth") || 150;
      this.borderColor = Storage.get("theme", "borderColor") || "#ffffff";
      this.team1color = Storage.get("theme", "team1color") || "#aeaeae";
      this.team2color = Storage.get("theme", "team2color") || "#ff171f";
      this.multiboxActive = Storage.get("theme", "multiboxActive") || "#ff61f8";
      this.multiboxInactive = Storage.get("theme", "multiboxInactive") || "#fff";
      this.multiboxRingWidth = ~~Storage.get("theme", "multiboxRingWidth") || 10;
      this.nickColor = Storage.get("theme", "nickColor") || "#fff";
      this.nickStrokeColor = Storage.get("theme", "nickStrokeColor") || "#000";
      this.cellNickSize = ~~Storage.get("theme", "cellNickSize") || 120;
      this.nickFont = Storage.get("theme", "nickFont") || "ubuntu";
      this.massColor = Storage.get("theme", "massColor") || "#fff";
      this.massStrokeColor = Storage.get("theme", "massStrokeColor") || "#000";
      this.cellMassSize = ~~Storage.get("theme", "cellMassSize") || 150;
      this.massFont = Storage.get("theme", "massFont") || "ubuntu";
      this.gridWidth = ~~Storage.get("theme", "gridWidth") || 100;
      this.gridColor = Storage.get("theme", "gridColor") || "#111";
      this.gridTextColor = Storage.get("theme", "gridTextColor") || "#111";
      this.gridTextSize = Storage.get("theme", "gridTextSize") || 1500;
      this.gridTextFont = Storage.get("theme", "gridTextFont") || "ubuntu";
      this.foodSize = ~~Storage.get("theme", "foodSize") || 1;
      this.foodColor = Storage.get("theme", "foodColor") || "#6111ff";
      this.virusColor = Storage.get("theme", "virusColor") || "#8f8f8f";
      this.virusBorderColor = Storage.get("theme", "virusBorderColor") || "#c2c2c2";
      this.virusBorderWidth = ~~Storage.get("theme", "virusBorderWidth") || 10;
      this.commanderColor = Storage.get("theme", "commanderColor") || "#f5e35d";
      this.backgroundColor = Storage.get("theme", "backgroundColor") || "#000000";
      this.backgroundImage = Storage.get("theme", "backgroundImage") || "https://i.imgur.com/aKvo1jQ.png";
      this.borderStyle = Storage.get("theme", "borderStyle") || "rainbow";
      this.indicatorSize = ~~Storage.get("theme", "indicatorSize") || 100;
      this.cursor = Storage.get("theme", "cursor") || 13;
      this.addPresets();
      this.setDomValues();
      this.addEvents();
    }
    static ["setDomValues"]() {
      $(".theme-options").each(function () {
        const wi = $(this).attr("type");
        if ("range" === wi) {
          Theme.handleRange(this, 2);
        } else if ("options" === wi) {
          Theme.handleOptions(this, 2);
        } else if ("colorpicker" === wi) {
          Theme.initColorpicker(this);
        }
      });
      this.setChatFontSize(this.chatFontSize);
      this.setBackground(this.backgroundColor);
      this.setLeaderboard(this.lbSize);
      this.setMinimap(this.minimapSize);
      this.setCursor(this.cursor);
      $("#bgImageUrl").val(this.backgroundImage);
    }
    static ["addEvents"]() {
      $(".theme-container").perfectScrollbar();
      $(".theme-container .fa-chevron-left").each(function () {
        $(this).click(() => {
          const qx = $(this).parent();
          const aar = $(qx).attr("type");
          if ("options" === aar) {
            Theme.handleOptions(qx, 0);
          } else if ("range" === aar) {
            Theme.handleRange(qx, 0);
          }
        });
      });
      $(".theme-container span.outer").each(function () {
        $(this).click((alf) => {
          const zd = $(this).parent();
          Theme.handleRange(zd, 3, alf.offsetX);
        });
      });
      $(".theme-container .fa-chevron-right").each(function () {
        $(this).click(() => {
          const rt = $(this).parent();
          const ly = $(rt).attr("type");
          if ("options" === ly) {
            Theme.handleOptions(rt, 1);
          } else if ("range" === ly) {
            Theme.handleRange(rt, 1);
          }
        });
      });
      $(".theme-close").click(() => this.close());
      $("#bgImageUrl").blur(() => {
        this.saveTheme("backgroundImage", $("#bgImageUrl").val().trim());
      });
    }
    static ["toggle"]() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
    static ["close"]() {
      this.isOpened = false;
      this.div.fadeOut(250);
    }
    static ["open"]() {
      this.isOpened = true;
      this.div.fadeIn(250);
    }
    static ["handleOptions"](als, aep) {
      const afa = $(als).attr("name");
      const abn = $(als).find("b");
      const vk = abn.length;
      let gl = vk;
      let fb = 0;
      for (; gl--; ) {
        let wb = abn[gl];
        if ("active" === $(wb).attr("class")) {
          fb = gl;
        }
      }
      if (1 === aep) {
        const akr = fb + 1 < vk ? fb + 1 : 0;
        $(abn[fb]).removeAttr("class");
        $(abn[akr]).attr("class", "active");
        const ahr = $(abn[akr]).attr("value");
        this.saveTheme(afa, ahr);
      } else {
        if (0 === aep) {
          const agm = 0 < fb ? fb - 1 : vk - 1;
          $(abn[fb]).removeAttr("class");
          $(abn[agm]).attr("class", "active");
          const pm = $(abn[agm]).attr("value");
          this.saveTheme(afa, pm);
        } else {
          if (2 === aep) {
            $(abn[fb]).removeAttr("class");
            let agn;
            for (let agg = vk; agg--; ) {
              agn = abn[agg];
              if ($(agn).attr("value") === this[afa]) {
                $(agn).attr("class", "active");
                break;
              }
            }
          }
        }
      }
    }
    static ["handleRange"](gb, gw, agd = 0) {
      const amc = $(gb).attr("name");
      const alb = $(gb).find("span");
      const pq = alb[0];
      const fh = alb[1];
      const vc = $(alb[2]);
      const gg = ~~$(pq).attr("min");
      const kj = ~~$(pq).attr("max");
      const yy = ~~$(pq).attr("step");
      const xv = ~~$(pq).attr("value");
      if (1 === gw && xv + yy <= kj) {
        const aee = yy + xv;
        $(pq).attr("value", aee);
        $(fh).css("width", ~~((100 * (aee - gg)) / (kj - gg)) + "px");
        vc.text("[" + aee + "]");
        this.saveTheme(amc, ~~aee);
      } else {
        if (0 === gw && xv - yy >= gg) {
          const alj = xv - yy;
          $(pq).attr("value", alj);
          $(fh).css("width", ~~((100 * (alj - gg)) / (kj - gg)) + "px");
          vc.text("[" + alj + "]");
          this.saveTheme(amc, ~~alj);
        } else {
          if (2 === gw) {
            const alg = this[amc];
            $(pq).attr("value", alg);
            $(fh).css("width", ~~((100 * (alg - gg)) / (kj - gg)) + "px");
            vc.text("[" + alg + "]");
          } else {
            if (3 === gw) {
              let age = 0 | ((agd / 100) * (kj - gg));
              age = (0 | (age / yy)) * yy;
              const ud = (100 * ((age += gg) - gg)) / (kj - gg);
              $(pq).attr("value", age);
              $(fh).css("width", ~~ud + "px");
              vc.text("[" + age + "]");
              this.saveTheme(amc, ~~age);
            }
          }
        }
      }
    }
    static ["initColorpicker"](afu) {
      const iq = $(afu).find("input");
      const uz = iq.attr("id");
      const aky = this[uz];
      $(iq).val(aky);
      const ec = !!~~iq.attr("opacity");
      $("#" + uz).minicolors({
        opacity: ec,
        position: "bottom right",
        change: (mj) => {
          this.saveTheme(uz, mj);
        },
      });
    }
    static ["saveTheme"](aef, op) {
      this[aef] = op;
      if ("selectedPreset" === aef) {
        this.selectPreset(op);
      } else if ("custom" !== this.selectedPreset) {
        this.selectedPreset = "custom";
        Storage.set("theme", "selectedPreset", "custom");
        this.setDomValues();
      }
      if ("backgroundColor" === aef) {
        this.setBackground(op);
      }
      if ("chatFontSize" === aef) {
        this.setChatFontSize(op);
      }
      if ("lbSize" === aef) {
        this.setLeaderboard(op);
      }
      if ("minimapSize" === aef) {
        this.setMinimap(op);
      }
      if ("cursor" === aef) {
        this.setCursor(op);
      }
      if ("massFont" === aef) {
        TextRenderer.setMassCtxFont();
      }
      if ("nickFont" === aef) {
        TextRenderer.setNickCtxFont();
      }
      if ("massStrokeColor" === aef) {
        TextRenderer.massCaches.clear();
      }
      if ("nickStrokeColor" === aef) {
        TextRenderer.nickCaches.clear();
      }
      if ("massColor" === aef) {
        TextRenderer.massCaches.clear();
      }
      if ("nickColor" === aef) {
        TextRenderer.nickCaches.clear();
      }
      Storage.set("theme", aef, op);
    }
    static ["setBackground"](abb) {
      $("body").css("background", abb);
    }
    static ["setChatFontSize"](aku) {
      $("#notifications").css("font-size", aku + "px");
    }
    static ["setLeaderboard"](wz) {
      const abm = wz / 100;
      $("#leaderboard-head").css("font-size", (0 | (24 * abm)) + "px");
      $("#leaderboard-positions").css("font-size", (0 | (13 * abm)) + "px");
    }
    static ["setMinimap"](adm) {
      if (Minimap.initted) {
        Minimap.size = adm;
        Minimap.canvas.width = adm;
        Minimap.canvas.height = adm;
      }
      $("#minimap-hud, .minimap-grid").css({
        width: adm + "px",
        height: adm + "px",
      });
      $(".minimap-row").css({
        width: adm + "px",
        height: (0 | (adm / 5)) + "px",
      });
      $(".minimap-sector").css({
        width: (0 | (adm / 5)) + "px",
        height: (0 | (adm / 5)) + "px",
        "font-size": (0 | ((15 * adm) / 200)) + "px",
        "padding-top": (0 | ((11 * adm) / 200)) + "px",
      });
      const le = $(".minimap-head");
      le.css("bottom", adm + 9 + "px");
      // Stack on top of .minimap-head (which is itself already anchored
      // above #minimap-hud) - measuring its real height instead of
      // guessing keeps this correct regardless of minimap size/theme.
      $("#server-restart-countdown").css({
        bottom: adm + 9 + le.outerHeight() + 4 + "px",
        width: adm + "px",
      });
    }
    static ["setCursor"](alu) {}
    static ["selectPreset"](zo) {
      const afg = this.presets[zo];
      if ("custom" !== zo && afg) {
        for (const zs in afg.theme)
          if (afg.theme.hasOwnProperty(zs) && undefined !== this[zs]) {
            this[zs] = afg.theme[zs];
            Storage.set("theme", zs, this[zs]);
          }
        this.setDomValues();
        for (const nj in afg.settings)
          if (afg.settings.hasOwnProperty(nj) && undefined !== Settings[nj]) {
            Settings[nj] = afg.settings[nj];
            Storage.set("settings", nj, Settings[nj]);
          }
        Settings.setDomValues();
      }
    }
    static ["addPresets"]() {
      const dx = {
        skinBorder: 0x64,
        lbSize: 0x64,
        minimapSize: 0xc8,
        chatFontSize: 0xe,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x28,
        borderColor: "#fff",
        team1color: "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x78,
        nickFont: "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0xa0,
        massFont: "ubuntu",
        gridWidth: 0x28,
        gridColor: "#1a1a1a",
        gridTextColor: "#1a1a1a",
        gridTextSize: 0x4b0,
        gridTextFont: "ubuntu",
        foodSize: 0x1,
        foodColor: "#ffffff",
        virusColor: "#000",
        virusBorderColor: "#d4d6dd",
        virusBorderWidth: 0xe,
        commanderColor: "#0849d4",
        backgroundColor: "#000",
        indicatorSize: 0x64,
        cursor: 0x7,
      };
      const zm = {
        CellAnimation: 0xa0,
        eatAnimation: "on",
        cellTextAnimation: "on",
        cellMass: "shortened",
        food: "monoColored",
        bgSectors: "normal",
        vanillaGrid: "off",
      };
      const zr = {
        author: "Cyper",
        theme: dx,
        settings: zm,
      };
      const vv = {
        skinBorder: 0x64,
        lbSize: 0x6e,
        minimapSize: 0xc8,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x28,
        borderColor: "#ffffff",
        team1color: "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x8c,
        nickFont: "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0x8c,
        massFont: "ubuntu",
        gridWidth: 0x64,
        gridColor: "#1a1a1a",
        gridTextColor: "#1a1a1a",
        gridTextSize: 0x6a4,
        gridTextFont: "ubuntu",
        foodSize: 0x5,
        foodColor: "#0849d4",
        virusColor: "#808080",
        virusBorderColor: "#9e9e9e",
        virusBorderWidth: 0xa,
        commanderColor: "#0849d4",
        backgroundColor: "#000000",
        indicatorSize: 0x64,
        cursor: 0x1,
      };
      const pc = {
        CellAnimation: 0x78,
        eatAnimation: "on",
        cellTextAnimation: "on",
        cellMass: "full",
        food: "monoColored",
        bgSectors: "normal",
        vanillaGrid: "off",
      };
      const jw = {
        author: "Acydwarp",
        theme: vv,
        settings: pc,
      };
      const yw = {
        skinBorder: 0x64,
        lbSize: 0x6e,
        minimapSize: 0xc8,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x3c,
        borderColor: "#ffffff",
        team1color: "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x82,
        nickFont: "sans-serif",
        massColor: "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0x82,
        massFont: "sans-serif",
        gridWidth: 0x64,
        gridColor: "#1a1a1a",
        gridTextColor: "#1a1a1a",
        gridTextSize: 0x6a4,
        gridTextFont: "ubuntu",
        foodSize: 0x5,
        foodColor: "#6111ff",
        virusColor: "#808080",
        virusBorderColor: "#9e9e9e",
        virusBorderWidth: 0xa,
        commanderColor: "#0849d4",
        backgroundColor: "#000000",
        indicatorSize: 0x64,
        cursor: 0x1,
      };
      const yu = {
        CellAnimation: 0x78,
        eatAnimation: "on",
        cellTextAnimation: "off",
        cellMass: "full",
        food: "monoColored",
        bgSectors: "off",
        vanillaGrid: "off",
      };
      const adn = {
        author: "Num Jai",
        theme: yw,
        settings: yu,
      };
      const mt = {
        skinBorder: 0x64,
        lbSize: 0x64,
        minimapSize: 0xf0,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x5a,
        borderWidth: 0x28,
        borderColor: "#01d9cc",
        team1color: "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x78,
        nickFont: "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0xa0,
        massFont: "ubuntu",
        gridWidth: 0x28,
        gridColor: "#00243e",
        gridTextColor: "#00243e",
        gridTextSize: 0x4b0,
        gridTextFont: "ubuntu",
        foodSize: 0x5,
        foodColor: "#5000ff",
        virusColor: "#002f52",
        virusBorderColor: "#00b9e8",
        virusBorderWidth: 0xe,
        commanderColor: "#0849d4",
        backgroundColor: "#000a11",
        indicatorSize: 0x64,
        cursor: 0x1,
      };
      const ajf = {
        CellAnimation: 0x8c,
        eatAnimation: "on",
        cellTextAnimation: "on",
        cellMass: "shortened",
        food: "monoColored",
        bgSectors: "normal",
        vanillaGrid: "off",
      };
      const ahj = {
        author: "Szymy",
        theme: mt,
        settings: ajf,
      };
      const qp = {
        skinBorder: 0x64,
        lbSize: 0x82,
        minimapSize: 0xc8,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0xa,
        borderColor: "#116111",
        team1color: "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x64,
        nickFont: "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0x64,
        massFont: "ubuntu",
        gridWidth: 0xa,
        gridColor: "#333333",
        gridTextColor: "#333333",
        gridTextSize: 0x6a4,
        gridTextFont: "ubuntu",
        foodSize: 0x1,
        foodColor: "#555",
        virusColor: "#6fff00",
        virusBorderColor: "#55b304",
        virusBorderWidth: 0xe,
        commanderColor: "#00fff7",
        backgroundColor: "#000000",
        indicatorSize: 0x64,
        cursor: 0x1,
      };
      const akp = {
        CellAnimation: 0x78,
        eatAnimation: "on",
        cellTextAnimation: "on",
        cellMass: "full",
        food: "rainbow",
        bgSectors: "normal",
        vanillaGrid: "off",
      };
      const aly = {
        author: "DaChong",
        theme: qp,
        settings: akp,
      };
      const ahl = {
        skinBorder: 0x64,
        lbSize: 0x64,
        minimapSize: 0xc8,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0xa,
        borderColor: "#333333",
        team1color: "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x6e,
        nickFont: "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0x6e,
        massFont: "ubuntu",
        gridWidth: 0xa,
        gridColor: "#333333",
        gridTextColor: "#444444",
        gridTextSize: 0x4b0,
        gridTextFont: "ubuntu",
        foodSize: 0x1,
        foodColor: "#4b6efa",
        virusColor: "#6fff00",
        virusBorderColor: "#55b304",
        virusBorderWidth: 0xe,
        commanderColor: "#00fff7",
        backgroundColor: "#111",
        indicatorSize: 0x64,
        cursor: 0x1,
      };
      const aet = {
        CellAnimation: 0x78,
        eatAnimation: "on",
        cellTextAnimation: "stepped",
        cellMass: "shortened",
        food: "monoColored",
        bgSectors: "normal",
        vanillaGrid: "off",
      };
      const aad = {
        author: "KSCC",
        theme: ahl,
        settings: aet,
      };
      const eg = {
        skinBorder: 0x64,
        lbSize: 0x64,
        minimapSize: 0xc8,
        chatFontSize: 0xe,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x14,
        borderColor: "#666666",
        team1color: "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x6e,
        nickFont: "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#444",
        cellMassSize: 0x8c,
        massFont: "oswald",
        gridWidth: 0x64,
        gridColor: "#222222",
        gridTextColor: "#222222",
        gridTextSize: 0x578,
        gridTextFont: "sans-serif",
        foodSize: 0x1,
        foodColor: "#c9d3f5",
        virusColor: "#e0e0e0",
        virusBorderColor: "#9c9c9c",
        virusBorderWidth: 0xa,
        commanderColor: "#ffffff",
        backgroundColor: "#000000",
        indicatorSize: 0x64,
        cursor: 0x1,
      };
      const ahv = {
        CellAnimation: 0x78,
        eatAnimation: "on",
        cellTextAnimation: "on",
        cellMass: "full",
        food: "monoColored",
        bgSectors: "normal",
        vanillaGrid: "off",
      };
      const ad = {
        author: "Eric",
        theme: eg,
        settings: ahv,
      };
      const qe = {
        skinBorder: 0x5a,
        lbSize: 0x64,
        minimapSize: 0xb4,
        chatFontSize: 0xe,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x28,
        borderColor: "#f5d25f",
        team1color: "#aeaeae",
        team2color: "#ff006f",
        nickColor: "#fff",
        nickStrokeColor: "#000000",
        cellNickSize: 0x6e,
        nickFont: "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#000000",
        cellMassSize: 0x78,
        massFont: "ubuntu",
        gridWidth: 0xa,
        gridColor: "#fa676c",
        gridTextColor: "#333333",
        gridTextSize: 0x514,
        gridTextFont: "oswald",
        foodSize: 0x1,
        foodColor: "#555555",
        virusColor: "#7a4ba3",
        virusBorderColor: "#ead2fa",
        virusBorderWidth: 0xe,
        commanderColor: "#ff006f",
        backgroundColor: "#222222",
        indicatorSize: 0x64,
        cursor: 0x1,
      };
      const oh = {
        CellAnimation: 0x8c,
        eatAnimation: "on",
        cellTextAnimation: "on",
        cellMass: "shortened",
        food: "monoColored",
        bgSectors: "normal",
        vanillaGrid: "off",
      };
      const aiw = {
        author: "2coolife",
        theme: qe,
        settings: oh,
      };
      const fw = {
        Multibox: zr,
        "Agarplus v2": jw,
        HKG: adn,
        "Ogario v4": ahj,
        Yin: aly,
        VNDOT: aad,
        OZYDOT: ad,
        Pastels: aiw,
      };
      this.presets = fw;
    }
  }
  class Notifications {
    static ["init"]() {
      this.div = $("#notifications");
      this.duration = 10000;
      this.animDuration = 500;
      this.iconChat = '<i class="fa fa-comment"></i>';
      this.iconAlert = '<i class="fa fa-exclamation-circle"></i>';
      this.iconBell = '<i class="fa fa-bell"></i>';
      this.warningIcon = '<i class="fa-solid fa-triangle-exclamation"></i>';
      this.chatroomdiv = $("#chatroom");
      this.emojiPath = "./";
      this.emojis = {};
      this.displayEmojis();
    }
    static ["displayEmojis"]() {
      const ea = $("#emojiContainer");
      for (const lz in this.emojis) {
        const lu = $('<img src="' + (this.emojiPath + this.emojis[lz]) + '" class="emojiPreview">');
        lu.click(() => {
          const abq = $("#message");
          const ga = abq.val();
          abq.val(ga + " " + lz);
          ChatInput.input.focus();
        });
        ea.append(lu);
      }
    }
    static ["normal"](gz, ady, xo = "system") {
      this.chatroom(gz, ady, this.iconChat, xo);
      if ("chatroom" !== Settings.chatType) {
        const zv =
          '<div><div class="normal">' +
          this.iconChat +
          '<span class="nick">' +
          gz +
          '</span><span class="message">' +
          this.putEmojis(this.cleanMessage(ady)) +
          "</span></div></div>";
        this.append(zv);
      }
    }
    static ["command"](ahm, rq, xo = "system") {
      this.chatroom(ahm, rq, this.iconAlert, xo);
      if ("chatroom" !== Settings.chatType) {
        const ajm =
          '<div><div class="command">' +
          this.iconAlert +
          '<span class="nick">' +
          ahm +
          '</span><span class="message">' +
          this.cleanMessage(rq) +
          "</span></div></div>";
        this.append(ajm);
      }
    }
    static ["warn"](cy, an, xo = "system") {
      this.chatroom(cy, an, this.warningIcon, xo);
      if ("chatroom" !== Settings.chatType) {
        const nd =
          '<div><div class="alert">' +
          this.warningIcon +
          '<span class="nick">' +
          cy +
          '</span><span class="message">' +
          this.cleanMessage(an) +
          "</span></div></div>";
        this.append(nd);
      }
    }
    static ["alert"](tr, kx, xo = "system") {
      const fi = this.chatroom(tr, kx, this.iconBell, xo);
      if ("chatroom" !== Settings.chatType) {
        const br =
          '<div><div class="alert" style="direction: ltr;">' +
          this.iconBell +
          '<span class="nick">' +
          tr +
          '</span><span class="message">' +
          this.cleanMessage(kx) +
          "</span></div></div>";
        this.append(br);
      }
      return fi;
    }
    static ["gameChat"](dg, zf, ais, mt) {
      // Build up a nick->id memory from every attributed message we see -
      // the invite notification itself often arrives as a system-style
      // message (id1 <= 0, not attributed to the inviter), and the inviter
      // is frequently not a currently-visible nearby cell either, so this
      // is the only reliable way to later resolve who to reply to.
      PartyManager.rememberNick(dg, ais);
      if (PartyManager.isInviteMessage(zf) && !PartyManager.isOwnInviteEcho(zf)) {
        this.partyInvite(dg, zf, ais);
        return;
      }
      const akh = this.alert(dg, zf, "game");
      if (akh) {
        // Render the sender's real color, a crown for VIPs, and gray for
        // muted senders - the same fields the real client uses. mt comes
        // from handleChat's packet parse (opcode 86).
        const nickEl = akh.find(".nick");
        if (mt && nickEl.length) {
          if (mt.muted) {
            nickEl.css("color", "#7f7f7f");
          } else if (mt.vip) {
            nickEl.prepend("👑 ");
          }
          if ("number" === typeof mt.r) {
            nickEl.css("color", "#" + [mt.r, mt.g, mt.b].map((c) => ("0" + c.toString(16)).slice(-2)).join(""));
          }
        }
      }
      if (0 < ais && akh) {
        akh.find(".nick").on("contextmenu", (ahp) => {
          ahp.preventDefault();
          PartyManager.openMenu({ ownerId: ais, nick: dg, colorHex: "#fff" }, ahp.pageX, ahp.pageY);
        });
      }
    }
    static ["partyInvite"](dg, zf, ais) {
      // Confirmed format: message is literally `"<nick>" has invited you to
      // their party.` (with an embedded partyCode(...) button - see
      // extractPartyCode()) and the packet's own nick field is just the
      // generic system sender label ("Console"), not the real inviter -
      // the real name only ever shows up quoted inside the message text.
      const aie = PartyManager.extractPartyCode(zf);
      let aka = null;
      // Grab the first quoted substring from the VISIBLE text only - the
      // message also embeds an onclick="partyCode('...')" button (itself
      // double-quoted), which would otherwise be picked up instead of the
      // name whenever the button markup comes before the name in the
      // string. Stripping tags first (replaced with a space, so words
      // either side don't get glued together) avoids that entirely.
      const th = zf.replace(/<[^>]*>/g, " ");
      const ajh = th.match(/"([^"]+)"/);
      if (ajh) {
        aka = PartyManager.stripBidi(ajh[1]);
      } else if (dg && "Console" !== dg) {
        aka = dg;
      } else {
        const afm = th.match(/([^\s:"]+)\s+(?:has\s+)?invit/i);
        if (afm) {
          aka = afm[1];
        }
      }
      let mh = ais;
      if (0 >= mh && aka) {
        mh = PartyManager.resolveIdByNick(aka);
      }
      const ll = new Date();
      const sq = ll.getHours() + ":" + ll.getMinutes();
      const ajp = $(
        '<div class="chatroom-row party-invite-row" data-channel="game"><span class="chattime">' +
          sq +
          "</span> " +
          this.iconBell +
          ' <span class="nick">' +
          this.cleanMessage(aka || "Someone") +
          '</span> <span class="message">invited you to their party</span> ' +
          '<button class="party-invite-accept">Accept</button>' +
          '<button class="party-invite-reject">Reject</button>' +
          "</div>",
      );
      ajp.find(".party-invite-accept").click(() => {
        PartyManager.acceptInvite(aie, mh);
        ajp.remove();
      });
      ajp.find(".party-invite-reject").click(() => {
        ajp.remove();
      });
      this.chatroomdiv.append(ajp);
      this.chatroomdiv.scrollTop(this.chatroomdiv[0].scrollHeight);
    }
    static ["append"](jf) {
      const td = $(jf);
      td.slideUp(0);
      td.appendTo(this.div);
      td.slideDown(this.animDuration);
      setTimeout(() => {
        td.slideUp(this.animDuration, () => {
          td.remove();
        });
      }, this.duration);
    }
    static ["cleanMessage"](uh) {
      return uh;
    }
    static ["putEmojis"](aay) {
      for (const si in this.emojis) {
        const ft = new RegExp(si, "g");
        aay = aay.replace(ft, '<img src="' + (this.emojiPath + this.emojis[si]) + '">');
      }
      return aay;
    }
    static ["chatroom"](adw, so, agi, xo = "system") {
      const aki = new Date();
      const tl = aki.getHours() + ":" + aki.getMinutes();
      const aap = $(
        '<div class="chatroom-row" data-channel="' +
          xo +
          '"><span class="chattime">' +
          tl +
          "</span> " +
          agi +
          ' <span class="nick">' +
          adw +
          '</span> <span class="message">' +
          this.putEmojis(this.cleanMessage(so)) +
          "</span></div>",
      );
      this.chatroomdiv.append(aap);
      this.chatroomdiv.scrollTop(this.chatroomdiv[0].scrollHeight);
      return aap;
    }
  }
  class Leaderboard {
    static ["init"]() {
      this.list = new Set();
      this.div = $("#leaderboard-positions")[0];
      this.teamLB = $("#leaderboard-chart");
      this.teamLBvisible = false;
      this.barsCss = document.createElement("style");
      document.head.append(this.barsCss);
    }
    static ["add"](bp, vu, ca, fp, ahf, rv) {
      const gs = {
        nick: bp,
        position: vu,
        isSelf: ca,
        account: ahf,
        isFriend: fp,
        // The real leaderboard packet (handleLeaderboardFFA in 3rb.js,
        // verified by decoding it directly) never sends a score - only
        // rank/id/name, and the native UI template it renders
        // ("%rank%"/"%name%" only) confirms the game itself never shows
        // one either. "id" here is that same field, confirmed (via
        // `game.pID == entry.id` in 3rb.js's own leaderboard renderer) to
        // be the same id-space as cell ownerId/pID used everywhere else
        // in the protocol - see scoreForId() below, which cross-references
        // it against currently-tracked cells to approximate a real score
        // rather than inventing one. Undefined for the non-FFA leaderboard
        // variant (getLeaderboard() in PacketParser), which carries no id at
        // all - there's nothing to cross-reference for those entries.
        id: rv,
      };
      this.list.add(gs);
    }
    // Sums the static (non-animated, i.e. authoritative-as-of-last-packet)
    // mass of every currently-tracked cell owned by this id. Only accurate
    // for players whose cells are actually within render/network range
    // right now - same limitation the real client has, since neither of us
    // is ever told anything about cells we can't see. Returns undefined
    // (render nothing, not "0") when no matching cells are tracked at all.
    static ["scoreForId"](agq) {
      let aif = 0;
      let aiz = false;
      for (const ajc of CellData.sortedCells) {
        if (ajc.ownerId === agq) {
          aiz = true;
          aif += ajc.staticMass;
        }
      }
      return aiz ? aif : undefined;
    }
    // Same truncate-to-1-decimal "shortened mass" convention already used
    // for in-world cell mass labels (see Renderer around cellMass
    // "shortened"), extended with an "m" tier since a total leaderboard
    // score can run well past what a single cell's mass ever reaches.
    static ["formatScore"](zf) {
      return 999999 < zf
        ? (0 | (zf / 100000)) / 10 + "m"
        : 999 < zf
          ? (0 | (zf / 100)) / 10 + "k"
          : "" + zf;
    }
    static ["team"](di, hx, aip) {
      if (!this.teamLBvisible) {
        this.teamLB.show();
        this.div.innerHTML = "";
        this.teamLBvisible = true;
      }
      this.barsCss.innerText =
        ".chart-bar.red { width: " +
        (0 | (150 * di)) +
        "px } .chart-bar.green { width: " +
        (0 | (150 * hx)) +
        "px } .chart-bar.blue { width: " +
        (0 | (150 * aip)) +
        "px }";
    }
    static ["clear"]() {
      this.list.clear();
    }
    static ["update"]() {
      if (this.teamLBvisible) {
        this.teamLB.hide();
        this.teamLBvisible = false;
      }
      let ir = "";
      for (const ach of this.list.values()) {
        const lk = undefined !== ach.id ? this.scoreForId(ach.id) : undefined;
        const xu = undefined !== lk ? ' <span class="leaderboard-score">(' + this.formatScore(lk) + ")</span>" : "";
        ir +=
          '<span style="direction: rtl;"><strong>' + ach.position + "  </strong>" + this.cleanNick(ach.nick) + xu + "<span>";
      }
      this.div.innerHTML = ir;
    }
    static ["cleanNick"](ia) {
      return ia.replace(/</g, "(").replace(/>/g, ")").substring(0, 15);
    }
  }
  class Minimap {
    static ["init"]() {
      this.initted = true;
      this.canvas = $("#minimap-nodes")[0];
      this.size = Theme.minimapSize;
      this.canvas.width = this.size;
      this.canvas.height = this.size;
      this.pi2 = 2 * Math.PI;
      this.ctx = this.canvas.getContext("2d");
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "bottom";
      this.ctx.font = "500 12px ubuntu";
      this.ctx.lineWidth = 2;
      this.selector = 0;
    }
    static ["run"]() {
      const wk = this.ctx;
      const av = this.size / WorldData.edge;
      const sx = Camera.viewBounds;
      wk.clearRect(0, 0, this.size, this.size);
      wk.fillStyle = "rgba(180, 57, 69, 0.4)";
      wk.fillRect(
        0 | ((sx.left - WorldData.offset.x + 8000) * av),
        0 | ((sx.top - WorldData.offset.y + 8000) * av),
        0 | ((sx.right - sx.left) * av),
        0 | ((sx.bottom - sx.top) * av),
      );
      if (RelayData.biggestIsOn && (Player.isAlive || !Camera.isSpectating || Camera.freeSpectate)) {
        RelayData.biggest.animate();
        const j = RelayData.biggest.mapX;
        const jr = RelayData.biggest.mapY;
        wk.beginPath();
        wk.arc(j, jr, 7, 0, this.pi2, false);
        wk.closePath();
        wk.fillStyle = "#fff";
        wk.fill();
        wk.stroke();
        wk.fillText(Language.current.huds.num1position || "#1 position", j, jr - 8);
      }
      wk.strokeStyle = "#666";
      const aca = (8000 - WorldData.offset.x + Player.deathLocation.x) * av;
      const nz = (8000 - WorldData.offset.y + Player.deathLocation.y) * av;
      wk.beginPath();
      wk.moveTo(aca - 4, nz - 4);
      wk.lineTo(aca + 4, nz + 4);
      wk.moveTo(aca - 4, nz + 4);
      wk.lineTo(aca + 4, nz - 4);
      wk.closePath();
      wk.stroke();
      wk.strokeStyle = "rgba(51, 51, 51, 0.5)";
      const rg = (8000 - WorldData.offset.x + Camera.x) * av;
      const cs = (8000 - WorldData.offset.y + Camera.y) * av;
      const ja = Player.isAlive ? 4 : 7;
      wk.beginPath();
      wk.arc(rg, cs, ja, 0, this.pi2, false);
      wk.closePath();
      wk.fillStyle = "#fff";
      wk.fill();
      wk.stroke();
      if (RelayData.isSpectator) {
        this.teamMinimap();
      } else {
        this.normalMinimap();
      }
    }
    static ["teamMinimap"]() {
      const agv = this.ctx;
      agv.textAlign = "center";
      agv.textBaseline = "bottom";
      for (const te of RelayData.teamPlayers.values())
        if (te.isAlive && (!this.selector || this.selector === te.team) && !PartyManager.hasNick(te.nick)) {
          te.animate();
          const ql = te.mapX;
          const aen = te.mapY;
          agv.beginPath();
          agv.arc(ql, aen, 5, 0, this.pi2, false);
          agv.closePath();
          agv.fillStyle = "#fff";
          if (0 < te.nick.length) {
            agv.fillText(te.nick, ql, aen - 6);
          }
          agv.fillStyle = 1 === te.team ? Theme.team1color : Theme.team2color;
          agv.fill();
          agv.stroke();
        }
      this.partyMinimap();
    }
    static ["normalMinimap"]() {
      const t = this.ctx;
      t.textAlign = "center";
      t.textBaseline = "bottom";
      t.beginPath();
      for (const wr of RelayData.teamPlayers.values())
        if (wr.isAlive && !PartyManager.hasNick(wr.nick)) {
          wr.animate();
          const bh = wr.mapX;
          const q = wr.mapY;
          t.moveTo(bh + 5, q);
          t.arc(bh, q, 5, 0, this.pi2, false);
          if (0 < wr.nick.length) {
            t.fillText(wr.nick, bh, q - 6);
          }
        }
      t.closePath();
      t.fillStyle = "#555";
      t.fill();
      this.partyMinimap();
    }
    static ["partyMinimap"]() {
      // Native party members (see PartyManager) are drawn separately from
      // teamPlayers because each one keeps its own real in-game color
      // (sent by the server), unlike the team1/team2-color multibox dots
      // above - they can't share a single batched fill() call.
      const ki = this.ctx;
      ki.textAlign = "center";
      ki.textBaseline = "bottom";
      for (const agq of PartyManager.members.values()) {
        agq.animate();
        const ajk = agq.mapX;
        const lk = agq.mapY;
        ki.beginPath();
        ki.arc(ajk, lk, 5, 0, this.pi2, false);
        ki.closePath();
        ki.fillStyle = "#fff";
        if (0 < agq.nick.length) {
          ki.fillText(agq.nick, ajk, lk - 6);
        }
        ki.fillStyle = agq.colorHex;
        ki.fill();
        ki.stroke();
      }
    }
  }
  class TeamList {
    static ["init"]() {
      this.lastUpdateTime = 0;
      this.totalmass = 0;
      this.alive = 0;
      this.spectate = 0;
      this.html = "";
      this.temporaryArray = [];
      this.div = {
        positions: $("#teamlist-positions")[0],
        alive: $("#teamlist-alive span")[0],
        spectate: $("#teamlist-spectate span")[0],
        totalmass: $("#teamlist-totalmass span")[0],
      };
      this.divTeam1 = {
        alive: $("#teamlist-alive1 span")[0],
        spectate: $("#teamlist-spectate1 span")[0],
        totalmass: $("#teamlist-totalmass1 span")[0],
      };
      this.divTeam2 = {
        alive: $("#teamlist-alive2 span")[0],
        spectate: $("#teamlist-spectate2 span")[0],
        totalmass: $("#teamlist-totalmass2 span")[0],
      };
      this.teamVsBar = $(".team-vs-bar-inner");
      this.teamVsBarStyle = document.getElementsByClassName("team-vs-bar")[0].style;
      this.teamVsBarInnerStyle = document.getElementsByClassName("team-vs-bar-inner")[0].style;
    }
    static ["update"]() {
      if (1000 < GameLoop.time - this.lastUpdateTime) {
        this.lastUpdateTime = GameLoop.time;
        if (RelayData.isSpectator) {
          this.updateVs();
        }
        this.generateList();
        this.div.positions.innerHTML = this.html;
        this.div.alive.innerHTML = this.alive;
        this.div.spectate.innerHTML = this.spectate;
        this.div.totalmass.innerHTML = this.totalmass;
        this.reset();
      }
    }
    static ["generateList"]() {
      RelayData.teamPlayers.forEach((bf) => {
        if (PartyManager.hasNick(bf.nick)) {
          return;
        }
        if (bf.isAlive) {
          this.totalmass += bf.mass;
          this.temporaryArray.push(bf);
          this.alive++;
        } else {
          this.spectate++;
        }
      });
      PartyManager.members.forEach((qu) => {
        if (qu.isAlive) {
          this.totalmass += qu.mass;
          this.temporaryArray.push(qu);
          this.alive++;
        } else {
          this.spectate++;
        }
      });
      this.temporaryArray.sort((abj, aaz) => aaz.mass - abj.mass);
      this.temporaryArray.splice(5);
      if (!RelayData.isSpectator) {
        if (Player.isAlive) {
          this.totalmass += Player.mass;
          this.temporaryArray.push(Player);
          this.alive++;
        } else {
          this.spectate++;
        }
      }
      for (let fm = 0; fm < this.temporaryArray.length; fm++) {
        const agx = this.temporaryArray[fm];
        this.addPlayer(agx);
      }
    }
    static ["addPlayer"](za) {
      const ic = (100 * za.mass) / this.totalmass;
      this.html +=
        '<div class="tl-player"><div class="tl-player-mass">' +
        za.mass +
        '</div><div class="tl-player-nick">' +
        this.cleanNick(za.nick) +
        '</div><div class="tl-player-massbar"><div class="tl-player-massbar-inner" style="width: ' +
        (0 | ic) +
        '%;"></div></div></div>';
    }
    static ["updateVs"]() {
      const as = RelayData.teamData;
      let ih = (as[1].totalMass / (as[1].totalMass + as[2].totalMass)) * 100;
      if (0 === as[1].totalMass && 0 === as[2].totalMass) {
        ih = 50;
      }
      this.teamVsBar.css("width", (0 | ih) + "%");
      this.divTeam1.alive.innerHTML = as[1].alive;
      this.divTeam1.spectate.innerHTML = as[1].spectate;
      this.divTeam1.totalmass.innerHTML = as[1].totalMass;
      this.divTeam2.alive.innerHTML = as[2].alive;
      this.divTeam2.spectate.innerHTML = as[2].spectate;
      this.divTeam2.totalmass.innerHTML = as[2].totalMass;
      this.teamVsBarStyle.background = Theme.team2color;
      this.teamVsBarInnerStyle.background = Theme.team1color;
    }
    static ["reset"]() {
      this.totalmass = 0;
      this.alive = 0;
      this.spectate = 0;
      this.temporaryArray = [];
      this.html = "";
    }
    static ["cleanNick"](lr) {
      return lr.replace(/</g, "(").replace(/>/g, ")");
    }
  }
  class ChatInput {
    static ["init"]() {
      this.container = $("#message-hud");
      this.input = $("#message");
      this.isOpened = false;
      this.isFocused = false;
      this.input.blur(() => {
        this.isFocused = false;
      });
      this.input.focus(() => {
        this.isFocused = true;
      });
      // Shift+Enter sends while typing instead of the plain-Enter chatKey
      // binding. stopPropagation() is required, not optional: Actions.getKey()
      // never checks shiftKey, so plain Enter and Shift+Enter both produce
      // the exact same "ENTER" string - which is this game's default
      // chatKey binding. Without stopping it here, this same keydown would
      // also bubble up to that global document-level hotkey handler right
      // after send() has already closed the box, and re-open it again.
      this.input.keydown((me) => {
        const ta = me.keyCode || me.which;
        if (me.shiftKey && 13 === ta) {
          me.preventDefault();
          me.stopPropagation();
          this.enter();
        }
      });
      this.chatroom = $("#chatroom");
      this.chatroom.perfectScrollbar();
    }
    static ["open"]() {
      this.container.show();
      this.isOpened = true;
      this.input.focus();
    }
    static ["enter"]() {
      if (this.isOpened) {
        if (this.isFocused) {
          if (!Account.loggedIn) {
            this.input.val("");
            this.input.blur();
            this.container.hide();
            this.isOpened = false;
            Notifications.warn("Chat", "You must be registered and at least level 5 to use the chat");
            return;
          }
          let afp = this.input.val();
          if (0 < afp.length && 100 < afp.length) {
            afp = afp.substring(0, 100);
          }
          if (0 < afp.length) {
            PacketSender.chat(afp);
          }
          this.input.val("");
          this.input.blur();
          this.container.hide();
          this.isOpened = false;
        } else {
          this.input.focus();
        }
      } else {
        this.open();
      }
    }
  }
  class Stats {
    static ["init"]() {
      this.fpsCount = 0;
      this.lastUpdateTime = 0;
      this.div = $("#stats-hud")[0];
      this.lockClosed = '<i class="fa fa-lock"></i>';
      this.lockOpened = '<i class="fa fa-unlock-alt"></i>';
      this.speedometer = '<i class="fa fa-tachometer"></i>';
      this.iconPause = '<i class="fa fa-pause-circle"></i>';
    }
    static ["update"]() {
      this.fpsCount++;
      if (1000 < GameLoop.time - this.lastUpdateTime) {
        this.lastUpdateTime = GameLoop.time;
        this.refresh();
      }
    }
    static ["refresh"]() {
      let afs = "";
      afs += this.fps;
      if (Player.isAlive) {
        afs += this.score + this.n64 + this.STE + this.speed;
      }
      afs += this.PIO + this.paused + this.zoomLock;
      this.div.innerHTML = afs;
    }
    static get ["zoomLock"]() {
      return "on" === Settings.autoZoom ? this.lockClosed : this.lockOpened;
    }
    static get ["score"]() {
      return (Language.current.huds.score || "Score") + ": " + Player.score + "   ";
    }
    static get ["n64"]() {
      return "[" + Player.pieceCount + "/64] ";
    }
    static get ["STE"]() {
      const ji = Player.biggestPieceMass;
      return 35 < ji ? "STE: " + (0 | (ji * (1000 > ji ? 0.35 : 0.38))) + "   " : "";
    }
    static get ["speed"]() {
      Player.animSpeed += (Player.speed - Player.animSpeed) / 3;
      Player.speed = 0;
      return this.speedometer + " " + (0 | Player.animSpeed) + "px/s   ";
    }
    static get ["PIO"]() {
      const yp = WsConnection.packetCount["in"];
      const adt = WsConnection.packetCount.out;
      WsConnection.packetCount["in"] = 0;
      WsConnection.packetCount.out = 0;
      return "PIO: " + yp + "|" + adt + " ";
    }
    static get ["paused"]() {
      return Player.movementPaused ? "[" + this.iconPause + " " + (Language.current.huds.paused || "Paused") + "]   " : "";
    }
    static get ["fps"]() {
      const kc = this.fpsCount;
      this.fpsCount = 0;
      return "FPS: " + kc + "   ";
    }
  }
  class TargetingHud {
    static ["init"]() {
      this.container = $("#targeting-hud");
      this.DIVno1viewport = $("#targeting-no-1");
      this.DIVmouse = $("#targeting-mouse");
      this.DIVplayers = $("#targeting-players");
      this.DIVtotalMass = $("#targeting-playersMass span.mass")[0];
      this.DIVplayer1 = {
        nick: $("#targeting-player1 span.nick")[0],
        mass: $("#targeting-player1 span.mass")[0],
      };
      this.DIVplayer2 = {
        nick: $("#targeting-player2 span.nick")[0],
        mass: $("#targeting-player2 span.mass")[0],
      };
      this.lastTime = GameLoop.time;
    }
    static ["update"]() {
      if (!(1000 > GameLoop.time - this.lastTime) && ((this.lastTime = GameLoop.time), Camera.freeSpectate && Targeting.isTurnedOn)) {
        let qi = 0;
        if (Targeting.target1.turnedOn) {
          this.DIVplayer1.nick.innerHTML = Targeting.target1.nick;
          this.DIVplayer1.mass.innerHTML = Targeting.target1.outOfView ? "OUT OF VIEW" : Targeting.target1.mass;
          qi += Targeting.target1.outOfView ? 0 : Targeting.target1.mass;
        } else {
          this.DIVplayer1.nick.innerHTML = "Target 1";
          this.DIVplayer1.mass.innerHTML = "NOT SELECTED";
        }
        if (Targeting.target2.turnedOn) {
          this.DIVplayer2.nick.innerHTML = Targeting.target2.nick;
          this.DIVplayer2.mass.innerHTML = Targeting.target2.outOfView ? "OUT OF VIEW" : Targeting.target2.mass;
          qi += Targeting.target2.outOfView ? 0 : Targeting.target2.mass;
        } else {
          this.DIVplayer2.nick.innerHTML = "Target 2";
          this.DIVplayer2.mass.innerHTML = "NOT SELECTED";
        }
        this.DIVtotalMass.innerHTML = qi;
      }
    }
    static ["show"]() {
      this.container.show();
    }
    static ["hide"]() {
      this.container.hide();
    }
    static ["topViewport"]() {
      this.DIVno1viewport.show();
      this.DIVmouse.hide();
      this.DIVplayers.hide();
      $("#spectate-mode-top").addClass("active");
      $("#spectate-mode-mouse").removeClass("active");
      $("#spectate-mode-target").removeClass("active");
    }
    static ["mouseViewport"]() {
      this.DIVmouse.show();
      this.DIVno1viewport.hide();
      this.DIVplayers.hide();
      $("#spectate-mode-top").removeClass("active");
      $("#spectate-mode-mouse").addClass("active");
      $("#spectate-mode-target").removeClass("active");
    }
    static ["targetMode"]() {
      this.DIVplayers.show();
      this.DIVmouse.hide();
      this.DIVno1viewport.hide();
      $("#spectate-mode-top").removeClass("active");
      $("#spectate-mode-mouse").removeClass("active");
      $("#spectate-mode-target").addClass("active");
    }
  }
  class MainMenu {
    static ["init"]() {
      Notifications.init();
      Settings.init();
      Inputs.init();
      Profile.init();
      Server.init();
      Theme.init();
      Leaderboard.init();
      Minimap.init();
      TeamList.init();
      ChatInput.init();
      Stats.init();
      TargetingHud.init();
      this.isOpened = true;
      this.gMode = ":party";
      this.div = $("#menu-overlay");
      this.streammode = !Storage.get("extras", "streammode");
      this.toggleStreammode();
      this.buttons();
    }
    static ["buttons"]() {
      $("#button-settings").click(() => {
        this.closeSubMenus();
        Settings.toggle();
      });
      $("#button-play").click(() => {
        this.play();
      });
      $("#button-spectate").click(() => {
        PacketSender.spectate();
        this.close();
      });
      $("#create-party").click(() => {
        PartyManager.create();
      });
      $("#join-party").click(() => {
        PartyManager.join($("#party-token").val());
      });
      $("#leave-party").click(() => {
        PartyManager.leave();
      });
      $("#party-context-menu-invite").click(() => {
        PartyManager.invite();
      });
      $(document).click((ahi) => {
        if (!$(ahi.target).closest("#party-context-menu").length) {
          PartyManager.closeMenu();
        }
      });
      $("#button-inputs").click(() => {
        this.closeSubMenus();
        Inputs.toggle();
      });
      $("#button-theme").click(() => {
        this.closeSubMenus();
        Theme.toggle();
      });
      $("#normal-tag").click(() => {
        this.normalTag();
      });
      $("#minimap-show-1").click(() => {
        $("#minimap-show-" + Minimap.selector).removeClass("active");
        $("#minimap-show-1").addClass("active");
        Minimap.selector = 1;
      });
      $("#minimap-show-2").click(() => {
        $("#minimap-show-" + Minimap.selector).removeClass("active");
        $("#minimap-show-2").addClass("active");
        Minimap.selector = 2;
      });
      $("#minimap-show-0").click(() => {
        $("#minimap-show-" + Minimap.selector).removeClass("active");
        $("#minimap-show-0").addClass("active");
        Minimap.selector = 0;
      });
      $("#streamMode").click(() => {
        this.toggleStreammode();
      });
      $("#spectate-mode-top").click(() => {
        this.spectateModeTop();
      });
      $("#spectate-mode-mouse").click(() => {
        this.spectateModeMouse();
      });
      $("#spectate-mode-target").click(() => {
        this.spectateModeTarget();
      });
      if (!Storage.get("extras", "openedChangelog")) {
        $("#changelog").addClass("active");
      }
      $("#changelog").click(() => {
        Storage.set("extras", "openedChangelog", true);
        $("#changelog").removeClass("active");
      });
    }
    static ["doubleTag"]() {
      $("#double-tag").addClass("active-tag");
      $("#normal-tag").removeClass("active-tag");
      $("#tag2").show();
      $("#nick").css("width", "189px");
      $("#teams-vs").show();
      $("#info-tp").hide();
      RelayData.isSpectator = true;
      RelaySender.spectator(true);
      $(".minimap-button").each(function () {
        $(this).show();
      });
    }
    static ["normalTag"]() {
      $("#normal-tag").addClass("active-tag");
      $("#double-tag").removeClass("active-tag");
      $("#tag2").hide();
      $("#nick").css("width", "45px");
      $("#teams-vs").hide();
      $("#info-tp").show();
      RelaySender.spectator(false);
      RelayData.isSpectator = false;
      $(".minimap-button").each(function () {
        $(this).hide();
      });
    }
    static ["play"]() {
      this.close();
      // Spawn both tabs: Tab 1 always, Tab 2 as well when its connection is
      // live. A single Play click brings the whole pair back.
      if (!Player._isAlive) {
        PacketSender.spawn(1);
      }
      if (WsConnection.connected2 && !Player._isAlive2) {
        PacketSender.spawn(2);
      }
    }
    static ["closeSubMenus"]() {
      Inputs.close();
      Settings.close();
      Theme.close();
    }
    static ["toggle"]() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
    static ["close"]() {
      this.isOpened = false;
      this.div.fadeOut(250);
      $("#leaderboard-hud").css("top", "-2px");
      $("#teamlist-hud").css("top", "10px");
      $(".menu-bar").slideUp(250);
      $("#targeting-hud").css("top", "0px");
    }
    static ["open"]() {
      this.isOpened = true;
      this.div.fadeIn(250);
      $("#leaderboard-hud").css("top", "-2px");
      $("#teamlist-hud").css("top", "10px");
      $(".menu-bar").slideDown(250);
      $("#targeting-hud").css("top", "0px");
    }
    static ["toggleStreammode"]() {
      if (this.streammode) {
        $("#nick, #tag, #tag2, #party-token").removeClass("input-hidden");
        $("#streamMode").html('<i class="fa fa-eye fa-fw"></i>');
        this.streammode = false;
        Storage.set("extras", "streammode", this.streammode);
      } else {
        $("#nick, #tag, #tag2, #party-token").addClass("input-hidden");
        $("#streamMode").html('<i class="fa fa-eye-slash fa-fw"></i>');
        this.streammode = true;
        Storage.set("extras", "streammode", this.streammode);
      }
    }
    static ["spectateModeTop"]() {
      if (!Player.isAlive && Camera.isSpectating && Camera.freeSpectate) {
        TargetingHud.topViewport();
        PacketSender.freeSpectate();
      }
    }
    static ["spectateModeMouse"]() {
      if (!(Player.isAlive || !Camera.isSpectating || (Camera.freeSpectate && !Targeting.isTurnedOn))) {
        if (Targeting.isTurnedOn) {
          Targeting.target1.turnedOn = false;
          Targeting.target2.turnedOn = false;
          TargetingHud.mouseViewport();
        } else {
          PacketSender.freeSpectate();
          TargetingHud.mouseViewport();
        }
      }
    }
    static ["spectateModeTarget"]() {
      if ("on" === Settings.targeting) {
        Notifications.command("Multibox", Language.current.notif.targeting_on);
      } else {
        Notifications.command("Multibox", Language.current.notif.targeting_off);
      }
    }
  }
  class CellData {
    static ["init"]() {
      const aas = {
        left: 0x0,
        top: 0x0,
        right: 0x0,
        bottom: 0x0,
      };
      this.cells = new Map();
      this.cells2 = new Map();
      this.cells3 = new Map();
      this.myCellsIDs = new Set();
      this.myCellsIDs2 = new Set();
      this.myCellsIDs3 = new Set();
      this.myCells = new Map();
      this.myCells2 = new Map();
      this.myCells3 = new Map();
      this.sortedCells = [];
      this.food = [];
      this.cellsPositions = aas;
    }
    static ["update"]() {
      this.positions();
      this.food = [];
      this.sortedCells = [];
      this.cells.forEach((bi, fk) => {
        if (bi.isMine) {
          this.cellsPos(bi);
        }
        if (bi.fadeStartTime && 1 < (GameLoop.time - bi.fadeStartTime) / Settings.CellAnimation) {
          this.cells["delete"](fk);
        } else if (this.isInView(bi) && bi.worldID !== Player.worldID2) {
          if (bi.isFood) {
            this.food.push(bi);
          } else {
            this.sortedCells.push(bi);
          }
        }
      });
      this.cells2.forEach((afx, sz) => {
        if (afx.fadeStartTime && 1 < (GameLoop.time - afx.fadeStartTime) / Settings.CellAnimation) {
          this.cells2["delete"](sz);
        } else if (!(!this.isInView(afx) || (!afx.isMine && this.check(afx)))) {
          if (afx.isFood) {
            this.food.push(afx);
          } else {
            this.sortedCells.push(afx);
          }
        }
      });
      this.sortedCells.sort((uo, aei) => {
        const adg = uo.animRadius;
        const tq = aei.animRadius;
        return adg === tq ? aei.id - uo.id : adg - tq;
      });
    }
    static ["getCell"](tf, alr) {
      const col = 1 === alr ? this.cells : 2 === alr ? this.cells2 : this.cells3;
      return col.get(tf) || this.addCell(tf, alr);
    }
    static ["getCellAt"](dg, zf) {
      // Matches 3rb.js's own onContextMenu circle hit-test (pointInCircle
      // over this.nodes), used for the right-click party-invite menu.
      // sortedCells is ascending by radius and that's also render order
      // (see Renderer.cells()), so the last/largest one drawn on top of a
      // given point should win - walk it back to front.
      for (let ais = this.sortedCells.length; ais--; ) {
        const aka = this.sortedCells[ais];
        if (0 >= aka.ownerId || this.myCellsIDs.has(aka.id) || this.myCellsIDs2.has(aka.id)) {
          continue;
        }
        const sq = dg - aka.animX;
        const ajp = zf - aka.animY;
        if (sq * sq + ajp * ajp <= aka.animRadius * aka.animRadius) {
          return aka;
        }
      }
      return null;
    }
    static ["addCell"](ty, adc) {
      const aij = 1 === adc ? this.cells : 2 === adc ? this.cells2 : this.cells3;
      const iy = new Cell(ty, adc);
      aij.set(ty, iy);
      this.myCellCheck(ty, iy, adc);
      return iy;
    }
    static ["myCellCheck"](ek, st, afh) {
      const ww = 1 === afh ? this.myCellsIDs : 2 === afh ? this.myCellsIDs2 : this.myCellsIDs3;
      const jn = 1 === afh ? this.myCells : 2 === afh ? this.myCells2 : this.myCells3;
      if (ww.has(ek)) {
        jn.set(ek, st);
        ww["delete"](ek);
        st.isMine = true;
        st.nick = Player.nick;
      }
    }
    static ["eatCell"](agb, ahu, ahw) {
      const dr = 1 === ahw ? this.cells : 2 === ahw ? this.cells2 : this.cells3;
      const rx = 1 === ahw ? this.myCells : 2 === ahw ? this.myCells2 : this.myCells3;
      const zl = dr.get(ahu);
      const aio = dr.get(agb);
      if (zl && aio) {
        zl.x = aio.x;
        zl.y = aio.y;
        zl.radius = zl.animRadius;
        zl.fadeStartTime = GameLoop.time;
        zl.lastUpdateTime = GameLoop.time;
        if (zl.isMine) {
          rx["delete"](ahu);
        }
        dr["delete"](ahu);
        if (!zl.isFood) {
          dr.set(ahu + ":removed", zl);
        }
      }
    }
    static ["removeCell"](ao, jx) {
      const bq = 1 === jx ? this.cells : 2 === jx ? this.cells2 : this.cells3;
      const aim = 1 === jx ? this.myCells : 2 === jx ? this.myCells2 : this.myCells3;
      const lt = bq.get(ao);
      if (lt) {
        if (lt.isMine) {
          aim["delete"](ao);
        }
        bq["delete"](ao);
        if (!(lt.isFood || "on" !== Settings.eatAnimation)) {
          lt.fadeStartTime = GameLoop.time;
          bq.set(ao + ":removed", lt);
        }
      }
    }
    static ["isInView"](abt) {
      const f = {
        x: 0x0,
        y: 0x0,
      };
      const dy = 2 === abt.cellType ? WorldData.position : f;
      const lb = Camera.viewBounds;
      return !(
        abt.animX - dy.x + abt.animRadius < lb.left ||
        abt.animX - dy.x - abt.animRadius > lb.right ||
        abt.animY - dy.y + abt.animRadius < lb.top ||
        abt.animY - dy.y - abt.animRadius > lb.bottom
      );
    }
    static ["positions"]() {
      if (0 === CellData.myCells.size) {
        // tab1 has no cells of its own right now (dead/not spawned yet) ->
        // there's nothing to dedup tab2's view against, so don't suppress anything
        this.cellsPositions.left = Infinity;
        this.cellsPositions.right = -Infinity;
        this.cellsPositions.top = Infinity;
        this.cellsPositions.bottom = -Infinity;
        return;
      }
      let yf = true;
      CellData.myCells.forEach((agt) => {
        if (yf) {
          this.cellsPositions.left = agt.x;
          this.cellsPositions.right = agt.x;
          this.cellsPositions.top = agt.y;
          this.cellsPositions.bottom = agt.y;
          yf = false;
        }
      });
    }
    static ["cellsPos"](lh) {
      if (this.cellsPositions.left > lh.x + lh.radius) {
        this.cellsPositions.left = lh.x + lh.radius;
      }
      if (this.cellsPositions.right < lh.x - lh.radius) {
        this.cellsPositions.right = lh.x - lh.radius;
      }
      if (this.cellsPositions.top > lh.y + lh.radius) {
        this.cellsPositions.top = lh.y + lh.radius;
      }
      if (this.cellsPositions.bottom < lh.y - lh.radius) {
        this.cellsPositions.bottom = lh.y - lh.radius;
      }
    }
    static ["check"](cu) {
      const aew = WorldData.position;
      const gi = cu.x - aew.x;
      const os = cu.y - aew.y;
      const agz = this.cellsPositions;
      const dg = 600; // padding (game units) around tab1's own cell(s)
      return !(
        gi + cu.radius < agz.left - dg ||
        gi - cu.radius > agz.right + dg ||
        os + cu.radius < agz.top - dg ||
        os - cu.radius > agz.bottom + dg
      );
    }
    // Promote tab 3 data → killed tab slot (pointer swap, O(1))
    static ["promoteTab"](from, to) {
      const srcCells = from === 1 ? this.cells : from === 2 ? this.cells2 : this.cells3;
      const srcMy = from === 1 ? this.myCells : from === 2 ? this.myCells2 : this.myCells3;
      const srcIDs = from === 1 ? this.myCellsIDs : from === 2 ? this.myCellsIDs2 : this.myCellsIDs3;
      const dstCells = to === 1 ? this.cells : to === 2 ? this.cells2 : this.cells3;
      const dstMy = to === 1 ? this.myCells : to === 2 ? this.myCells2 : this.myCells3;
      const dstIDs = to === 1 ? this.myCellsIDs : to === 2 ? this.myCellsIDs2 : this.myCellsIDs3;
      // Clear destination
      dstCells.clear();
      dstMy.clear();
      dstIDs.clear();
      // Move source → destination
      srcCells.forEach((v, k) => dstCells.set(k, v));
      srcMy.forEach((v, k) => dstMy.set(k, v));
      srcIDs.forEach((v) => dstIDs.add(v));
      // Update cellType on promoted cells
      dstCells.forEach((c) => { c.cellType = to; });
      // Clear source
      srcCells.clear();
      srcMy.clear();
      srcIDs.clear();
    }
  }
  class Cell {
    constructor(wh, kh) {
      const db = {
        r: 0x0,
        g: 0x0,
        b: 0x0,
      };
      this.id = wh;
      this.x = 0;
      this.y = 0;
      this.radius = 0;
      this.colorObject = db;
      this.colorHex = "#555";
      this.skin = "";
      this.skinCode = 0;
      this._nick = "";
      this.isMine = false;
      this.isFood = false;
      this.isEjected = false;
      this.isVirus = false;
      this.isFriend = false;
      this.account = "";
      // Owner/"parent" player id (real 3rb.io protocol field, bit 0x40 of
      // the per-cell flags byte in worldUpdate). -1 means "no owner" - the
      // original client (3rb.js handleNodes) uses exactly this to decide
      // Player vs Food, not the nickname. See checkIsFood().
      this.ownerId = -1;
      this.cellType = kh;
      this.animX = 0;
      this.animY = 0;
      this.animRadius = 0;
      this.lastUpdateTime = 0;
      this.fadeStartTime = 0;
    }
    set ["nick"](np) {
      if (!np) {
        return;
      }
      this._nick = np;
      const abd = np.indexOf("");
      if (0 <= abd && np.length >= abd + 1) {
        const fe = np.charCodeAt(abd + 1);
        if (12000 < fe) {
          this.skinCode = fe;
        }
      }
    }
    get ["nick"]() {
      return this._nick;
    }
    get ["mass"]() {
      return 0 | ((this.animRadius * this.animRadius) / 100);
    }
    get ["staticMass"]() {
      return 0 | ((this.radius * this.radius) / 100);
    }
    ["setColor"](jp, aci, je) {
      this.colorObject.r = jp;
      this.colorObject.g = aci;
      this.colorObject.b = je;
      this.colorHex = "#" + (16777216 + (jp << 16) + (aci << 8) + je).toString(16).slice(1);
    }
    ["animate"]() {
      let aah = (GameLoop.time - this.lastUpdateTime) / Settings.CellAnimation;
      aah = 0 > aah ? 0 : 1 < aah ? 1 : aah;
      this.animX = aah * (this.x - this.animX) + this.animX;
      this.animY = aah * (this.y - this.animY) + this.animY;
      this.animRadius = aah * (this.radius - this.animRadius) + this.animRadius;
      this.lastUpdateTime = GameLoop.time;
    }
    get ["worldID"]() {
      let on = this._nick.substring(this._nick.indexOf("}") + 1);
      on = on.replace("%*^", "");
      return ":party" === MainMenu.gMode ? on + this.colorHex : on;
    }
    get ["isUnnamed"]() {
      return 1 > this._nick.substring(this._nick.indexOf("}") + 1).length;
    }
  }
  class Player {
    static ["init"]() {
      const ail = {
        r: 0x0,
        g: 0x0,
        b: 0x0,
      };
      const aeu = {
        x: 0x64,
        y: 0x64,
      };
      this._nick = $("#nick").val();
      this._nick2 = $("#nick2").val();
      this._arbSkin = $("#arbSkin").val();
      this._skin = Renderer.getImgurCode($("#skin").val());
      this._skin2 = Renderer.getImgurCode($("#skin2").val());
      this._tag = $("#tag").val();
      this._colorObject = ail;
      this.colorHex = "#000";
      this.colorHex2 = "#000";
      this._isAlive = false;
      this._isAlive2 = false;
      this._scouting1 = false;
      this._scouting2 = false;
      this.isRGB = false;
      this.x = 0;
      this.y = 0;
      this.speed = 0;
      this.animSpeed = 0;
      this.mass = 0;
      this.biggestPieceMass = 0;
      this.score = 0;
      this.movementPaused = false;
      this.deathLocation = aeu;
      this.type = 1;
      this._pairCamera = false;
    }
    static ["update"]() {
      if (0 < this.pieceCount1) {
        this.playing();
      } else {
        this.dead();
      }
      if (0 < this.pieceCount2) {
        this.playing2();
      } else {
        this.dead2();
      }
      this.updateData();
      this.updateScouting();
    }
    static get ["scouting"]() {
      return this._scouting1 || this._scouting2;
    }
    static ["updateScouting"]() {
      // A connected-but-idle tab is put into a background spectate so the
      // real server keeps streaming it the current #1 player's position -
      // that position is what feeds the minimap "#1 position" marker (via
      // RelaySender.biggest()). Without this, that feed only ever started on
      // an alive->dead edge (see dead()/dead2() below), so a tab that never
      // spawned at all this session (e.g. only ever playing tab 1) never
      // produced it and the marker just never lit up.
      const er = !this._isAlive && this._isAlive2 && PacketSender.chekConnection(1);
      const sg = !this._isAlive2 && this._isAlive && PacketSender.chekConnection(2);
      if (er && !this._scouting1) {
        PacketSender.spectateBackground(1);
      }
      if (sg && !this._scouting2) {
        PacketSender.spectateBackground(2);
      }
      this._scouting1 = er;
      this._scouting2 = sg;
      if (this._isAlive && this._isAlive2) {
        // Both tabs are actively played - neither is idle-scouting, so any
        // #1 marker still showing is leftover/stale data (e.g. from just
        // before the second tab respawned) rather than a live feed.
        RelayData.biggestIsOn = false;
      }
    }
    static ["playing"]() {
      if (!this._isAlive) {
        this._isAlive = true;
        // Tab 1 respawning ends any background scouting it was doing for
        // the #1 position marker - clear it locally instead of leaving the
        // last scouted position stuck on the minimap until a stale relay
        // broadcast happens to overwrite it.
        if (this._scouting1) {
          this._scouting1 = false;
          RelayData.biggestIsOn = false;
        }
        if (!this._isAlive2) {
          RelaySender.aliveStatus(2);
        }
        for (const nk of CellData.myCells.values()) {
          this.colorObject = nk.colorObject;
          this.colorHex = nk.colorHex;
          break;
        }
      }
    }
    static ["playing2"]() {
      if (!this._isAlive2) {
        this._isAlive2 = true;
        // Same as above, for tab 2 respawning.
        if (this._scouting2) {
          this._scouting2 = false;
          RelayData.biggestIsOn = false;
        }
        if (!this._isAlive) {
          RelaySender.aliveStatus(1);
        }
        for (const zy of CellData.myCells2.values()) {
          this.colorHex2 = zy.colorHex;
          break;
        }
        // Tab 2 respawned with a new color: re-broadcast the skin payload so
        // teammates can key tab 2's cells (they carry colorHex2) correctly.
        RelaySender.skin();
      }
    }
    static ["updateData"]() {
      if (this.isAlive) {
        let ahk = 0;
        let py = 0;
        let pair1 = null;
        let pair2 = null;
        this.mass = 0;
        this.biggestPieceMass = 0;
        const mergedCount = this.pieceCount;
        const pairCenter = (cells, origin) => {
          let tx = 0;
          let ty = 0;
          let tw = 0;
          let tr = 0;
          for (const cell of cells.values()) {
            cell.animate();
            const weight = Math.max(1, cell.animRadius * cell.animRadius);
            tx += (cell.animX - (origin ? origin.x : 0)) * weight;
            ty += (cell.animY - (origin ? origin.y : 0)) * weight;
            tw += weight;
            tr += cell.animRadius;
            ahk += (cell.animX - (origin ? origin.x : 0)) / mergedCount;
            py += (cell.animY - (origin ? origin.y : 0)) / mergedCount;
            this.mass += cell.staticMass;
            if (this.biggestPieceMass < cell.staticMass) {
              this.biggestPieceMass = cell.staticMass;
            }
          }
          return tw ? { x: tx / tw, y: ty / tw, radii: tr } : null;
        };
        if (this._isAlive) {
          pair1 = pairCenter(CellData.myCells, null);
        }
        if (this._isAlive2) {
          const yk = WorldData.position;
          pair2 = pairCenter(CellData.myCells2, yk);
        }
        // Merged simple average of every cell - the original framing, kept as
        // the fallback for single-tab play and for the Pair camera toggle OFF.
        let targetX = ahk;
        let targetY = py;
        let targetR = (pair1 ? pair1.radii : 0) + (pair2 ? pair2.radii : 0);
        if ("on" === Settings.pairCamera && pair1 && pair2) {
          // Close/far camera mode uses hysteresis so two nearby controlled cells
          // cannot make the camera rapidly flip between framing strategies.
          const dist = Math.hypot(pair1.x - pair2.x, pair1.y - pair2.y);
          this._pairCamera = this._pairCamera ? dist < 4500 : dist < 3000;
          if (this._pairCamera) {
            targetX = (pair1.x + pair2.x) / 2;
            targetY = (pair1.y + pair2.y) / 2;
            // Expanded close-cell envelope frames both cells as a stable
            // pair without weighting by mass.
            targetR = Math.max((pair1.radii + pair2.radii) * 1.15, dist * 0.1);
          } else {
            // When far apart, follow the selected tab instead of averaging
            // empty space between the cells.
            const followed = this.typeID === 2 ? pair2 : pair1;
            targetX = followed.x;
            targetY = followed.y;
            targetR = followed.radii;
          }
        } else {
          this._pairCamera = false;
        }
        if (!this.movementPaused) {
          const ajw = this.x - targetX;
          const ds = this.y - targetY;
          const acw = Math.sqrt(ajw * ajw + ds * ds);
          this.speed += acw;
          this.x = targetX;
          this.y = targetY;
        }
        if (this.score < this.mass) {
          this.score = this.mass;
        }
        const ow = Math.pow(Math.min(64 / Math.max(targetR, 1), 1), 0.4);
        const zz = Math.max(window.innerWidth / 1080, window.innerHeight / 1920);
        Camera.autoZoomViewport = ow * zz;
      }
    }
    static ["dead"]() {
      if (this._isAlive) {
        this._isAlive = false;
        if (this._isAlive2) {
          this.type = 2;
          PacketSender.spectate(1);
        } else {
          RelaySender.aliveStatus();
          this.setInfo();
        }
      }
    }
    static ["dead2"]() {
      if (this._isAlive2) {
        this._isAlive2 = false;
        if (this._isAlive) {
          this.type = 1;
          PacketSender.spectate(2);
        } else {
          RelaySender.aliveStatus();
          this.setInfo();
        }
      }
    }
    static ["setInfo"]() {
      this.score = 0;
      this.mass = 0;
      this.biggestPieceMass = 0;
      this.movementPaused = false;
      this.deathLocation.x = this.x;
      this.deathLocation.y = this.y;
      this.type = 1;
      MainMenu.open();
    }
    static set ["nick"](va) {
      this._nick = va;
      RelaySender.nick();
    }
    static get ["nick"]() {
      return this._nick.substring(0, 15);
    }
    static set ["nick2"](va) {
      this._nick2 = va;
      RelaySender.nick();
    }
    static get ["nick2"]() {
      return this._nick2 ? this._nick2.substring(0, 15) : "";
    }
    static set ["arbSkin"](aek) {
      this._arbSkin = aek;
    }
    static get ["arbSkin"]() {
      return this._arbSkin;
    }
    static set ["skin"](dn) {
      const acy = Renderer.getImgurCode(dn);
      const pj = Renderer.getRaindowFlag(dn);
      // getImgurCode() always returns a truthy string - either the real
      // code, or the literal "XXXXXXX" sentinel for "couldn't parse this".
      // Checking plain truthiness here meant the invalid-URL branch could
      // never actually run: a bad/unparseable URL silently became a skin
      // whose code was literally "XXXXXXX" (i.e. no skin), with no warning.
      return "XXXXXXX" !== acy
        ? (this.isRGB !== pj && ((this.isRGB = pj), RelaySender.rgbMode()), (this._skin = acy), void RelaySender.skin())
        : void Notifications.alert("Drag+", Language.current.notif.invalidSkinUrl);
    }
    static get ["skin"]() {
      return this._skin;
    }
    static set ["skin2"](dn) {
      const acy = Renderer.getImgurCode(dn);
      // Tab-2 skin: same code extraction as skin, no rainbow flag. An empty
      // input silently clears it (so switching to a profile that has no
      // second skin works); anything unparseable warns and keeps the old.
      if ("XXXXXXX" === acy) {
        if (dn) {
          return void Notifications.alert("Drag+", Language.current.notif.invalidSkinUrl);
        }
        this._skin2 = "";
      } else {
        this._skin2 = acy;
      }
      RelaySender.skin();
    }
    static get ["skin2"]() {
      return this._skin2 || "";
    }
    static set ["tag"](ry) {
      this._tag = ry;
      RelaySender.tag();
      // Tag is meant to work standalone, no party/invite needed - two
      // players who set the same tag should just see each other. Only
      // takes effect when not already in a native party (see
      // RelayWs.computeRoom()), which stays the higher-priority,
      // explicit grouping while active.
      RelayWs.updateRoom();
    }
    static get ["tag"]() {
      return this._tag;
    }
    static set ["colorObject"](abf) {
      this._colorObject.r = abf.r;
      this._colorObject.g = abf.g;
      this._colorObject.b = abf.b;
      RelaySender.color();
    }
    static get ["colorObject"]() {
      return this._colorObject;
    }
    static set ["isAlive"](akv) {
      this._isAlive = akv;
      RelaySender.aliveStatus(akv);
    }
    static get ["isAlive"]() {
      return this._isAlive || this._isAlive2;
    }
    static get ["worldID"]() {
      let ju = this._nick.substring(this._nick.indexOf("}") + 1);
      ju = ju.replace("%*^", "");
      return ":party" === MainMenu.gMode ? ju + this.colorHex : ju;
    }
    static get ["worldID2"]() {
      let agw = (this._nick2 || this._nick);
      agw = agw.substring(agw.indexOf("}") + 1);
      agw = agw.replace("%*^", "");
      return ":party" === MainMenu.gMode ? agw + this.colorHex2 : agw;
    }
    static get ["location"]() {
      return WorldData.getLocation(this.x, this.y);
    }
    static get ["pieceCount1"]() {
      return CellData.myCells.size;
    }
    static get ["pieceCount2"]() {
      return CellData.myCells2.size;
    }
    static get ["pieceCount"]() {
      return this.pieceCount1 + this.pieceCount2;
    }
    static set ["typeID"](aj) {
      this.type = aj;
    }
    static get ["typeID"]() {
      return this.type;
    }
  }
  class TeamPlayer {
    constructor(lj) {
      this.id = lj;
      this.isNew = 2;
      this.x = 90;
      this.y = 90;
      this.isAlive = 0;
      this.mass = 0;
      this.nick = "";
      this.nick2 = "";
      this.skin = "";
      this.skin2 = "";
      this.skin2Color = "";
      this.colorHex = "#000";
      this.isRGB = false;
      this.animX = 90;
      this.animY = 90;
      this.timeStamp = GameLoop.time;
      this.team = 1;
    }
    get ["worldID"]() {
      let wg = this.nick.substring(this.nick.indexOf("}") + 1);
      wg = wg.replace("%*^", "");
      return ":party" === MainMenu.gMode ? wg + this.colorHex : wg;
    }
    get ["location"]() {
      // `this.x/y` is now a raw world coordinate (see positionMass()) - pass
      // it straight through, same as `Player.location` does for the
      // local player. Adding this client's own offset on top (the old
      // behaviour) double-counted a shift that was never applied to begin
      // with, which is what put teammates in the wrong minimap sector.
      return WorldData.getLocation(this.x, this.y);
    }
    ["animate"]() {
      let wf = (GameLoop.time - this.timeStamp) / 1000;
      wf = 1 < wf ? 1 : 0 > wf ? 0 : wf;
      this.animX += (this.x - this.animX) * wf;
      this.animY += (this.y - this.animY) * wf;
      this.timeStamp = GameLoop.time;
    }
    get ["mapX"]() {
      // Matches Minimap.run()'s own viewport-rect math (size/edge scale,
      // relative to the actual live border) instead of assuming the world
      // is always exactly -8000..8000 - a server/mode with a different
      // border size would otherwise put every dot in the wrong spot.
      return (this.animX - WorldData.left) * (Minimap.size / WorldData.edge);
    }
    get ["mapY"]() {
      return (this.animY - WorldData.top) * (Minimap.size / WorldData.edge);
    }
  }
  class PartyManager {
    // Native party state - this mirrors 3rb.io's own built-in party system
    // (opcode 0x55/85 create-join-leave + code result, opcode 0x57/87
    // roster snapshot; see PacketSender/PacketParser) rather than routing through
    // the custom multibox relay, since the real game server already tracks
    // party membership and broadcasts member positions on its own.
    static ["init"]() {
      this._inParty = false;
      this.code = "";
      $("#leave-party").toggle(false);
      // Tracks an outstanding create/join request: awaitingResponse dedupes
      // the toast/clipboard-copy when both tabs' sockets each get their own
      // opcode 85 reply, awaitingCreate distinguishes "created" wording from
      // "joined" and tells the reply handler to auto-join tab 2 once the
      // freshly created code is known.
      this.awaitingCreate = false;
      this.awaitingResponse = false;
      this.members = new Map();
      this.selectedTarget = null;
      this.nickToId = new Map();
      this.lastInviteSentAt = 0;
    }
    static get ["inParty"]() {
      return this._inParty;
    }
    static set ["inParty"](lk) {
      this._inParty = lk;
      $("#leave-party").toggle(lk);
    }
    static ["getMember"](zw) {
      let ef = this.members.get(zw);
      if (undefined === ef) {
        ef = new TeamPlayer(zw);
        this.members.set(zw, ef);
      }
      return ef;
    }
    static ["hasNick"](dg) {
      // Native party (this.members) and the relay's "tag" roster
      // (RelayData.teamPlayers) are two entirely separate systems with no
      // shared id space - nick is the only thing they have in common, so
      // it's what render call sites use to skip a relay entry that's
      // actually the same person already shown via the party roster.
      for (const zf of this.members.values()) {
        if (zf.nick === dg) {
          return true;
        }
      }
      return false;
    }
    static ["normalizeCode"](aiy) {
      let ky = String(aiy || "").trim();
      ky = ky.replace("https://", "").replace("beta.3rb.io/", "").replace("3rb.io/", "");
      return ky && "#" === ky.charAt(0) ? ky : null;
    }
    static ["create"]() {
      this.awaitingCreate = true;
      this.awaitingResponse = true;
      PacketSender.createParty(1);
    }
    static ["join"](fn) {
      const yr = this.normalizeCode(fn);
      if (!yr) {
        Notifications.warn("Party", "Invalid party code.");
        return;
      }
      this.awaitingCreate = false;
      this.awaitingResponse = true;
      PacketSender.joinParty(yr, 1);
      if (PacketSender.chekConnection(2)) {
        PacketSender.joinParty(yr, 2);
      }
    }
    static ["leave"]() {
      if (!this.inParty) {
        return;
      }
      if (PacketSender.chekConnection(1)) {
        PacketSender.leaveParty(1);
      }
      if (PacketSender.chekConnection(2)) {
        PacketSender.leaveParty(2);
      }
      this.inParty = false;
      this.code = "";
      this.awaitingCreate = false;
      this.awaitingResponse = false;
      this.members.clear();
      RelayWs.updateRoom();
      $("#party-token").val("");
      Notifications.warn("Party", "Left the party.");
    }
    static ["isInviteMessage"](ta) {
      // Best-effort text match - the invite notification's exact wording is
      // server-generated (it's not a client-side string we could reverse
      // engineer), so this just looks for the obvious "invite ... party"
      // shape rather than an exact phrase.
      return /invit/i.test(ta) && /part(y|ie)/i.test(ta);
    }
    static ["rememberNick"](dg, ais) {
      if (dg && 0 < ais) {
        this.nickToId.set(dg, ais);
      }
    }
    static ["stripBidi"](dg) {
      // Strip RTL/LTR bidi control marks (common around Arabic/Hebrew
      // names mixed with English text) so the extracted name displays
      // cleanly and matches consistently for nick->id lookups.
      return dg.replace(/[\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, "").trim();
    }
    static ["resolveIdByNick"](zf) {
      if (this.nickToId.has(zf)) {
        return this.nickToId.get(zf);
      }
      for (const aka of CellData.cells.values()) {
        if (aka.nick === zf && 0 < aka.ownerId) {
          return aka.ownerId;
        }
      }
      for (const aka of CellData.cells2.values()) {
        if (aka.nick === zf && 0 < aka.ownerId) {
          return aka.ownerId;
        }
      }
      return -1;
    }
    static ["openMenu"](lk, ahi, ajp) {
      if (!lk || 0 >= lk.ownerId || lk.ownerId === WorldData.pID || lk.ownerId === WorldData.pID2) {
        this.closeMenu();
        return;
      }
      this.selectedTarget = lk;
      const zf = $("#party-context-menu");
      $("#party-context-menu-name").text(lk.nick || "An unnamed cell");
      $("#party-context-menu-swatch").css("background-color", lk.colorHex || "#555");
      const fi = this.members.has(lk.ownerId);
      $("#party-context-menu-invite")
        .prop("disabled", fi)
        .text(fi ? "Already in party" : "Invite to Party");
      zf.css({ visibility: "hidden", display: "block" });
      let ais = ahi;
      let aka = ajp;
      if (ais + zf.outerWidth() > window.innerWidth) {
        ais -= zf.outerWidth();
      }
      if (aka + zf.outerHeight() > window.innerHeight) {
        aka -= zf.outerHeight();
      }
      zf.css({ top: aka, left: ais, visibility: "visible" });
    }
    static ["closeMenu"]() {
      this.selectedTarget = null;
      $("#party-context-menu").hide();
    }
    static ["sendInvite"](ais) {
      if (this.inParty) {
        this.lastInviteSentAt = Date.now();
        PacketSender.chat("/invite " + ais, 1);
      } else {
        // Mirrors 3rb.js's own userMenuInvite(): create a party first, then
        // give the create request a moment to round-trip before inviting -
        // sending the invite over a connection that isn't in a party yet
        // would have nothing to invite the target into.
        this.create();
        setTimeout(() => {
          this.lastInviteSentAt = Date.now();
          PacketSender.chat("/invite " + ais, 1);
        }, 1000);
      }
    }
    static ["isOwnInviteEcho"](dg) {
      // The server appears to also message the SENDER back with something
      // shaped just like the recipient's "invited you" notification
      // (matches the same isInviteMessage() pattern), which would
      // otherwise show a confusing Accept/Reject prompt on your own
      // outgoing invite. Treat anything invite-shaped that arrives shortly
      // after we sent one - or that references a party we already own -
      // as that echo rather than a genuine incoming invite.
      if (this.lastInviteSentAt && 3000 > Date.now() - this.lastInviteSentAt) {
        return true;
      }
      const zf = this.extractPartyCode(dg);
      return !!(zf && this.inParty && zf === this.code);
    }
    static ["invite"]() {
      const lk = this.selectedTarget;
      this.closeMenu();
      if (lk && 0 < lk.ownerId) {
        this.sendInvite(lk.ownerId);
      }
    }
    static ["extractPartyCode"](dg) {
      // 3rb.js renders id1<=0 chat messages via raw .html() injection (not
      // text-escaped), and exposes a global partyCode(code) function
      // (self.partyCode, bound from the join-party UI handler) - the
      // server can embed a real, clickable "<button onclick=partyCode(...)>"
      // directly in the message. Look for that call first; fall back to a
      // bare "#CODE" token anywhere in the text.
      const zf = dg.match(/partyCode\(\s*['"]([^'"]+)['"]\s*\)/i);
      if (zf) {
        return zf[1];
      }
      const ais = dg.match(/#[A-Za-z0-9_-]{3,}/);
      return ais ? ais[0] : null;
    }
    static ["acceptInvite"](aie, ais) {
      if (this.inParty) {
        // Accepting should move you into the inviter's party, not leave you
        // stuck in whatever party you were already in.
        this.leave();
      }
      if (aie) {
        this.join(aie);
        return;
      }
      if (0 < ais) {
        // No separate accept opcode has turned up in the real protocol -
        // inviting the sender back is what actually groups two players
        // into one party (same mechanism as sending an invite in the
        // first place). This is the fallback when no code could be found
        // in the message itself.
        PacketSender.chat("/invite " + ais, 1);
        return;
      }
      Notifications.warn("Party", "Couldn't figure out who invited you - ask them to invite you again.");
    }
  }
  class WorldData {
    static ["init"]() {
      const ks = {
        left: -8000,
        top: -8000,
      };
      const cd = {
        x: 0x0,
        y: 0x0,
      };
      const hs = {
        x: 0x0,
        y: 0x0,
      };
      const gy = {
        x: 0x0,
        y: 0x0,
      };
      const aed = {
        x: 0x0,
        y: 0x0,
      };
      this.left = -8000;
      this.top = -8000;
      this.right = 8000;
      this.bottom = 8000;
      this.edge = 16000;
      this.botOffset = ks;
      this.offset = cd;
      this.center = hs;
      this.offset2 = gy;
      this.offset3 = cd;
      this.center2 = aed;
      this.focusedAtCenter = false;
      this.pID = -1;
      this.pID2 = -1;
      this.pID3 = -1;
    }
    static ["update"](ua, acd, vh, kb) {
      this.left = ua;
      this.top = acd;
      this.right = vh;
      this.edge = this.right - this.left + Theme.borderWidth;
      this.bottom = kb;
      this.offset.x = 8000 + ua;
      this.offset.y = 8000 + acd;
      this.center.x = (vh + ua) >> 1;
      this.center.y = (kb + acd) >> 1;
      if (!this.focusedAtCenter) {
        Camera.x = this.center.x;
        Camera.y = this.center.y;
        this.focusedAtCenter = true;
      }
    }
    static ["update2"](wl, ck, yo, tt) {
      this.offset2.x = 8000 + wl;
      this.offset2.y = 8000 + ck;
      this.botOffset.left = wl;
      this.botOffset.top = ck;
    }
    static ["update3"](wl, ck, yo, tt) {
      this.offset3.x = 8000 + wl;
      this.offset3.y = 8000 + ck;
    }
    static ["getLocation"](ib, js) {
      let abk = 0 | ((ib - this.left) / 3199);
      let hg = 0 | ((js - this.top) / 3199);
      abk = 0 > abk ? 0 : 4 < abk ? 4 : abk;
      hg = 0 > hg ? 0 : 4 < hg ? 4 : hg;
      return String.fromCharCode(65 + hg) + (abk + 1);
    }
    static get ["position"]() {
      this.center2.x = this.offset2.x - this.offset.x;
      this.center2.y = this.offset2.y - this.offset.y;
      return this.center2;
    }
    static get ["position3"]() {
      return this.offset3;
    }
    static ["promoteTab"](from, to) {
      const srcOff = from === 1 ? this.offset : from === 2 ? this.offset2 : this.offset3;
      const srcPID = from === 1 ? this.pID : from === 2 ? this.pID2 : this.pID3;
      if (to === 1) { this.offset = srcOff; this.pID = srcPID; }
      else if (to === 2) { this.offset2 = srcOff; this.pID2 = srcPID; }
      else { this.offset3 = srcOff; this.pID3 = srcPID; }
    }
  }
  class Camera {
    static ["init"]() {
      const mo = {
        left: -960,
        right: 0x3c0,
        top: -540,
        bottom: 0x21c,
      };
      const xi = {
        x: 0x0,
        y: 0x0,
      };
      this.x = 0;
      this.y = 0;
      this.targetViewport = 1;
      this.autoZoomViewport = 1;
      this.viewport = 1;
      this.viewBounds = mo;
      this.spectatePoint = xi;
      this._isSpectating = false;
      this._freeSpectate = false;
      Targeting.init();
    }
    static get ["isSpectating"]() {
      return this._isSpectating;
    }
    static get ["freeSpectate"]() {
      return this._freeSpectate;
    }
    static set ["isSpectating"](aec) {
      this._isSpectating = aec;
      if (!Player.isAlive && aec) {
        TargetingHud.show();
      } else {
        TargetingHud.hide();
      }
    }
    static set ["freeSpectate"](pf) {
      this._freeSpectate = pf;
      if (pf) {
        TargetingHud.mouseViewport();
      } else {
        TargetingHud.topViewport();
      }
    }
    static ["update"]() {
      if (this.isSpectating) {
        Targeting.update();
      }
      this.move();
      this.updateView();
    }
    static ["move"]() {
      if (Player.isAlive) {
        this.x += (Player.x - this.x) / Settings.cameraSpeed;
        this.y += (Player.y - this.y) / Settings.cameraSpeed;
      } else if (this.isSpectating) {
        this.x = (29 * this.x + this.spectatePoint.x) / 30;
        this.y = (29 * this.y + this.spectatePoint.y) / 30;
      }
    }
    static ["updateView"]() {
      let aq = this.targetViewport;
      if ("on" === Settings.autoZoom) {
        aq *= this.autoZoomViewport;
      }
      this.viewport += (aq - this.viewport) / 8;
      const aer = Renderer.canvas.width / 2 / this.viewport;
      const aag = Renderer.canvas.height / 2 / this.viewport;
      this.viewBounds.left = Math.max(-aer + this.x, WorldData.left);
      this.viewBounds.right = Math.min(aer + this.x, WorldData.right);
      this.viewBounds.top = Math.max(-aag + this.y, WorldData.top);
      this.viewBounds.bottom = Math.min(aag + this.y, WorldData.bottom);
    }
  }
  const TextRenderer = new (class {
    constructor() {
      this.nickCaches = new Map();
      this.massCaches = new Map();
      this.maxCacheLife = 1000;
      this.massUpdateInterval = 500;
      this.nickShadowCtx = this.newShadowContext();
      this.massShadowCtx = this.newShadowContext();
      this.canvasPool = [];
    }
    ["nick"](cn) {
      if (cn.isUnnamed || this.isSmall(cn)) {
        return false;
      }
      let pk = cn.nick.substring(cn.nick.indexOf("}") + 1) || "";
      const key = (cn.vip ? "v:" : "") + pk;
      const xb = this.nickCaches.get(key) || this.newNickCache(key);
      xb.lastUsedAt = GameLoop.time;
      const gc = 50 > this.getScreenRadius(cn.animRadius) ? 0 : 1;
      const uj = xb.level[gc];
      if (uj) {
        return uj;
      }
      const ac = this.getNewCanvas();
      const xd = ac.getContext("2d");
      const lx = (50 * (gc + 1) * Theme.cellNickSize) / 100;
      // VIP cells render their name in gold (no crown in-game - the crown
      // stays in chat), matching the real client (cell flags bit 256 = vip).
      const disp = pk;
      ac.height = 0 | (1.2 * lx);
      ac.width = 0 | (1.2 * this.getNickWidth(disp, lx));
      xd.font = "700 " + (0 | lx) + "px " + Theme.nickFont;
      xd.textBaseline = "middle";
      xd.textAlign = "center";
      if ("normal" === Settings.nickShadow) {
        xd.strokeStyle = cn.vip ? "#6b4f00" : Theme.nickStrokeColor;
        xd.lineWidth = 6 * (gc + 1);
        xd.strokeText(disp, ac.width >> 1, ac.height >> 1);
      } else {
        if ("performance" === Settings.nickShadow) {
          xd.fillStyle = cn.vip ? "#6b4f00" : Theme.nickStrokeColor;
          xd.globalAlpha = 0.75;
          const aga = 0 | (ac.width / 1.2);
          const xj = 0 | (ac.height / 1.2);
          xd.fillRect((ac.width - aga) >> 1, (ac.height - xj) >> 1, aga, xj);
          xd.globalAlpha = 1;
        }
      }
      xd.fillStyle = cn.vip ? "#fbb040" : Theme.nickColor;
      xd.fillText(disp, ac.width >> 1, ac.height >> 1);
      xb.level[gc] = ac;
      return ac;
    }
    ["newNickCache"](adl) {
      const bn = new NickCache();
      this.nickCaches.set(adl, bn);
      return bn;
    }
    ["getNickWidth"](oi, yq) {
      return (this.nickShadowCtx.measureText(oi).width * yq) / 50;
    }
    ["setNickCtxFont"]() {
      this.nickCaches.clear();
      this.nickShadowCtx.font = "700 50px " + Theme.nickFont;
    }
    ["mass"](ch) {
      if (!ch.isVirus && this.isSmall(ch)) {
        return false;
      }
      const agk = this.massCaches.get(ch.id) || this.newMassCache(ch.id);
      const hh =
        "shortened" === Settings.cellMass && 999 < ch.staticMass ? (0 | (ch.staticMass / 100)) / 10 + "k" : ch.staticMass;
      const qw = this.getScreenRadius(ch.radius);
      const gn = hh !== agk.lastMass;
      const li = GameLoop.time - agk.lastRenderTime > this.massUpdateInterval;
      const to = 1.2 < qw / agk.lastScreenRadius || (gn && li);
      agk.lastUsedAt = GameLoop.time;
      if (!to && agk.canvas) {
        return agk.canvas;
      }
      if (!agk.canvas) {
        agk.canvas = this.getNewCanvas();
      }
      const yv = agk.canvas;
      const bj = yv.getContext("2d");
      const tn = 0 | ((qw / 2) * (Theme.cellMassSize / 100));
      yv.height = 0 | (1.2 * tn);
      yv.width = 0 | (1.2 * this.getMassWidth(hh, tn));
      bj.font = "700 " + tn + "px " + Theme.massFont;
      bj.textBaseline = "middle";
      bj.textAlign = "center";
      if ("normal" === Settings.massShadow) {
        bj.strokeStyle = Theme.massStrokeColor;
        bj.lineWidth = (6 * tn) / 50;
        bj.strokeText(hh, yv.width >> 1, yv.height >> 1);
      } else {
        if ("performance" === Settings.massShadow) {
          bj.fillStyle = Theme.massStrokeColor;
          bj.globalAlpha = 0.75;
          const lw = 0 | (yv.width / 1.2);
          const oo = 0 | (yv.height / 1.2);
          bj.fillRect((yv.width - lw) >> 1, (yv.height - oo) >> 1, lw, oo);
          bj.globalAlpha = 1;
        }
      }
      bj.fillStyle = Theme.massColor;
      bj.fillText(hh, yv.width >> 1, yv.height >> 1);
      agk.lastMass = hh;
      agk.lastScreenRadius = qw;
      agk.lastRenderTime = GameLoop.time + agk.timeShift;
      return yv;
    }
    ["newMassCache"](ab) {
      const cc = new MassCache();
      this.massCaches.set(ab, cc);
      return cc;
    }
    ["getMassWidth"](df, acu) {
      return (this.massShadowCtx.measureText(df).width * acu) / 50;
    }
    ["setMassCtxFont"]() {
      this.massCaches.clear();
      this.massShadowCtx.font = "700 50px " + Theme.massFont;
    }
    ["getScreenRadius"](wc) {
      return wc * Camera.viewport;
    }
    ["isSmall"](rf) {
      return "on" === Settings.autoHideText && 20 > this.getScreenRadius(rf.animRadius);
    }
    ["getNewCanvas"]() {
      return this.canvasPool.shift() || document.createElement("canvas");
    }
    ["newShadowContext"]() {
      const wp = document.createElement("canvas").getContext("2d");
      wp.font = "700 50px ubuntu";
      return wp;
    }
    ["cleaner"]() {
      this.nickCaches.forEach((akl, fl) => {
        if (GameLoop.time - akl.lastUsedAt > this.maxCacheLife) {
          this.nickCaches["delete"](fl);
          if (50 <= this.canvasPool.length) {
            return;
          }
          const jk = akl.level[0];
          const bv = akl.level[1];
          if (jk) {
            this.resetCanvas(jk);
            this.canvasPool.push(jk);
          }
          if (bv) {
            this.resetCanvas(bv);
            this.canvasPool.push(bv);
          }
        }
      });
      this.massCaches.forEach((ub, alw) => {
        if (GameLoop.time - ub.lastUsedAt > this.maxCacheLife) {
          this.massCaches["delete"](alw);
          if (50 <= this.canvasPool.length) {
            return;
          }
          const ajo = ub.canvas;
          if (ajo) {
            this.resetCanvas(ajo);
            this.canvasPool.push(ajo);
          }
        }
      });
    }
    ["resetCanvas"](az) {
      az.width = 0;
    }
  })();
  class MassCache {
    constructor() {
      this.lastUsedAt = GameLoop.time;
      this.timeShift = 0 | (Math.random() * TextRenderer.massUpdateInterval);
      this.lastMass = 0;
      this.lastScreenRadius = 0;
      this.lastRenderTime = GameLoop.time;
      this.canvas = null;
    }
  }
  class NickCache {
    constructor() {
      this.lastUsedAt = GameLoop.time;
      this.level = [null, null];
    }
  }
  class FoodRender {
    static ["render"]() {
      if ("off" !== Settings.food) {
        if ("monoColored" === Settings.food) {
          this.monoColored();
        } else if ("rainbow" === Settings.food) {
          this.rainbow();
        }
      }
    }
    static ["monoColored"]() {
      const pi = Renderer.ctx;
      const akt = Theme.foodSize;
      let vp = CellData.food.length;
      pi.fillStyle = Theme.foodColor;
      for (pi.beginPath(); vp--; ) {
        const aic = {
          x: 0x0,
          y: 0x0,
        };
        const e = CellData.food[vp];
        const ag = 2 === e.cellType ? WorldData.position : aic;
        const sj = e.animRadius + akt;
        pi.moveTo(e.animX - ag.x + sj, e.animY - ag.y);
        pi.arc(e.animX - ag.x, e.animY - ag.y, sj, 0, Renderer.pi2, true);
      }
      pi.closePath();
      pi.fill();
    }
    static ["rainbow"]() {
      let ny = Renderer.ctx;
      let hw = Theme.foodSize;
      for (let ct = CellData.food.length; ct--; ) {
        const abe = {
          x: 0x0,
          y: 0x0,
        };
        const zu = CellData.food[ct];
        const au = 2 === zu.cellType ? WorldData.position : abe;
        const afw = zu.animRadius + hw;
        ny.fillStyle = zu.colorHex;
        if (2 > afw * Camera.viewport) {
          ny.fillRect(zu.animX - au.x - afw, zu.animY - au.y - afw, 2 * afw, 2 * afw);
        } else {
          ny.beginPath();
          ny.arc(zu.animX - au.x, zu.animY - au.y, afw, 0, Renderer.pi2, true);
          ny.closePath();
          ny.fill();
        }
      }
    }
  }
  class BgRender {
    static ["init"]() {
      this.left = 0;
      this.top = 0;
      this.sectorEdge = 0;
      this.edge = 0;
      this.halfSectorEdge = 0;
      this.letters = ["A", "B", "C", "D", "E"];
      this.visible = new Set();
      this.bgImageUrl = null;
      this.bgImageEl = null;
    }
    static ["render"]() {
      const xf = Settings.bgSectors;
      if ("image" === xf) {
        return this.image();
      }
      if ("off" !== xf) {
        const xn = Renderer.ctx;
        const afq = Theme.gridWidth >> 1;
        this.edge = WorldData.edge - Theme.gridWidth;
        this.left = WorldData.left + afq;
        this.top = WorldData.top + afq;
        this.sectorEdge = 0 | (this.edge / 5);
        this.halfSectorEdge = 0 | (this.edge / 10);
        xn.lineWidth = Theme.gridWidth;
        xn.strokeStyle = Theme.gridColor;
        this.sectors();
        if ("onlyLines" !== xf) {
          xn.textAlign = "center";
          xn.textBaseline = "middle";
          xn.fillStyle = Theme.gridTextColor;
          this.updateViewSectors();
          if ("snowflakes" === xf) {
            this.snowflakes();
          } else if ("stars" === xf) {
            this.stars();
          } else if ("hearts" === xf) {
            this.hearts();
          } else if ("diamonds" === xf) {
            this.diamonds();
          } else {
            this.normal();
          }
        }
      }
    }
    static ["sectors"]() {
      const qq = Renderer.ctx;
      Camera.viewBounds;
      qq.beginPath();
      qq.rect(this.left + this.sectorEdge, this.top, this.sectorEdge, this.edge);
      qq.rect(this.left + 3 * this.sectorEdge, this.top, this.sectorEdge, this.edge);
      qq.rect(this.left, this.top + this.sectorEdge, this.edge, this.sectorEdge);
      qq.rect(this.left, this.top + 3 * this.sectorEdge, this.edge, this.sectorEdge);
      qq.rect(this.left, this.top, this.edge, this.edge);
      qq.closePath();
      qq.stroke();
    }
    static ["updateViewSectors"]() {
      const r = this.visible;
      r.clear();
      const tu = Camera.viewBounds;
      const gq = 0 | ((tu.left - 200 - WorldData.left) / this.sectorEdge);
      const he = 0 | ((tu.top - 200 - WorldData.top) / this.sectorEdge);
      const cj = 5 - (0 | ((WorldData.right - tu.right - 200) / this.sectorEdge)) - gq;
      const amf = 5 - (0 | ((WorldData.bottom - tu.bottom - 200) / this.sectorEdge)) - he;
      for (let ej = 0; ej < cj; ej++) {
        for (let aja = 0; aja < amf; aja++) {
          r.add(this.letters[he + aja] + (gq + ej + 1));
        }
      }
    }
    static ["normal"]() {
      const qc = Renderer.ctx;
      qc.font = "400 " + Theme.gridTextSize + "px " + Theme.gridTextFont;
      for (let alz = 0; 5 > alz; alz++) {
        const aju = this.top + this.halfSectorEdge + alz * this.sectorEdge;
        for (let mr = 0; 5 > mr; mr++) {
          const sd = this.letters[alz] + (mr + 1);
          if (this.visible.has(sd)) {
            const ain = this.left + this.halfSectorEdge + mr * this.sectorEdge;
            qc.fillText(sd, ain, aju);
          }
        }
      }
    }
    static ["snowflakes"]() {
      this.symbolGrid("â‌†");
    }
    static ["stars"]() {
      this.symbolGrid("âœ¦");
    }
    static ["hearts"]() {
      this.symbolGrid("â‌¤");
    }
    static ["diamonds"]() {
      this.symbolGrid("â‌–");
    }
    static ["symbolGrid"](es) {
      const kd = Renderer.ctx;
      kd.font = "400 " + Theme.gridTextSize + "px Ubuntu";
      for (let ajx = 0; 5 > ajx; ajx++) {
        const aeo = this.top + this.halfSectorEdge + ajx * this.sectorEdge;
        for (let qv = 0; 5 > qv; qv++) {
          const ah = this.letters[ajx] + (qv + 1);
          if (this.visible.has(ah)) {
            const aji = this.left + this.halfSectorEdge + qv * this.sectorEdge;
            kd.fillText(es, aji, aeo);
          }
        }
      }
    }
    static ["image"]() {
      const na = Theme.backgroundImage;
      if (!na) {
        return;
      }
      const xl = this.getBackgroundImage(na);
      if (xl) {
        Renderer.ctx.drawImage(xl, WorldData.left, WorldData.top, WorldData.edge, WorldData.edge);
      }
    }
    static ["getBackgroundImage"](na) {
      if (this.bgImageUrl !== na) {
        this.bgImageUrl = na;
        this.bgImageEl = null;
        // No crossOrigin here on purpose: this image is only ever drawn to
        // the main canvas, and nothing anywhere reads pixel data back off
        // that canvas (toDataURL/getImageData), so there's no tainting risk
        // to guard against - and skipping it means image hosts that don't
        // send Access-Control-Allow-Origin (e.g. i.pinimg.com) still work,
        // instead of being blocked outright.
        const xl = new Image();
        xl.onload = () => {
          if (this.bgImageUrl === na) {
            this.bgImageEl = xl;
          }
        };
        xl.onerror = () => {};
        xl.src = na;
      }
      return this.bgImageEl;
    }
  }
  class Targeting {
    static ["init"]() {
      const aha = {
        x: 0x0,
        y: 0x0,
      };
      const ags = {
        turnedOn: false,
        nick: "",
        worldID: "",
        mass: 0x0,
        cellCount: 0x0,
        position: aha,
        outOfView: false,
      };
      const vz = {
        x: 0x0,
        y: 0x0,
      };
      const kl = {
        turnedOn: false,
        nick: "",
        worldID: "",
        mass: 0x0,
        cellCount: 0x0,
        position: vz,
        outOfView: false,
      };
      const gm = {
        x: 0x0,
        y: 0x0,
      };
      this.target1 = ags;
      this.target2 = kl;
      this.center = gm;
    }
    static ["update"]() {
      if (this.target1.turnedOn || this.target2.turnedOn) {
        const af = this.target1;
        const acc = this.target2;
        af.mass = 0;
        af.position.x = 0;
        af.position.y = 0;
        af.cellCount = 0;
        acc.mass = 0;
        acc.position.x = 0;
        acc.position.y = 0;
        acc.cellCount = 0;
        CellData.cells.forEach((adf) => {
          if (af.turnedOn && af.worldID === adf.worldID) {
            af.position.x += adf.animX;
            af.position.y += adf.animY;
            af.mass += adf.mass;
            af.cellCount++;
          } else if (acc.turnedOn && acc.worldID === adf.worldID) {
            acc.position.x += adf.animX;
            acc.position.y += adf.animY;
            acc.mass += adf.mass;
            acc.cellCount++;
          }
        });
        af.mass |= 0;
        acc.mass |= 0;
        let rr = 0;
        let sv = 0;
        let pn = 0;
        if (af.turnedOn) {
          if (0 < af.cellCount) {
            af.position.x /= af.cellCount;
            af.position.y /= af.cellCount;
            af.outOfView = false;
            sv += af.position.x;
            pn += af.position.y;
            rr++;
          } else {
            af.outOfView = true;
          }
        }
        if (acc.turnedOn) {
          if (0 < acc.cellCount) {
            acc.position.x /= acc.cellCount;
            acc.position.y /= acc.cellCount;
            acc.outOfView = false;
            sv += acc.position.x;
            pn += acc.position.y;
            rr++;
          } else {
            acc.outOfView = true;
          }
        }
        if (0 < rr) {
          this.center.x = 0 | (sv / rr);
          this.center.y = 0 | (pn / rr);
        }
      }
    }
    static ["lockTarget"](kv, ahg, us) {
      if (!Camera.freeSpectate) {
        Actions.toggleSpectate();
      }
      let ig = 199996164;
      let acl = false;
      CellData.cells.forEach((ahd) => {
        if (!(ahd.isFood || ahd.isVirus || ahd.isEjected)) {
          const ru = this.getDistanceSquare(kv, ahg, ahd.animX, ahd.animY);
          if (ru < ig) {
            ig = ru;
            acl = ahd;
          }
        }
      });
      if (acl) {
        if (acl.isUnnamed) {
          Notifications.alert("Drag+", Language.current.notif.target_unnamed);
        } else {
          const ou = this[1 === us ? "target1" : "target2"];
          ou.turnedOn = true;
          ou.nick = acl.nick;
          ou.worldID = acl.worldID;
          ou.outOfView = false;
          TargetingHud.targetMode();
        }
      }
    }
    static ["getDistanceSquare"](ade, bg, ho, ya) {
      const x = ho - ade;
      const tj = ya - bg;
      return x * x + tj * tj;
    }
    static ["reset"]() {
      if (!this.isTurnedOn) {
        Actions.toggleSpectate();
      }
      if (Camera.freeSpectate) {
        TargetingHud.mouseViewport();
      } else {
        TargetingHud.topViewport();
      }
      this.target1.turnedOn = false;
      this.target2.turnedOn = false;
    }
    static ["getMass"](acf) {
      return (acf * acf) / 100;
    }
    static get ["isTurnedOn"]() {
      return this.target1.turnedOn || this.target2.turnedOn;
    }
  }
  class RgbCycle {
    static ["init"]() {
      this.r = 0;
      this.g = 0;
      this.b = 0;
      this.targetR = 0;
      this.targetG = 0;
      this.targetB = 0;
      this.color = "#000000";
      this.lastTime = 0;
    }
    static ["update"]() {
      this.r += (this.targetR - this.r) / 80;
      this.g += (this.targetG - this.g) / 80;
      this.b += (this.targetB - this.b) / 80;
      this.color = "#" + (16777216 + (this.r << 16) + (this.g << 8) + (0 | this.b)).toString(16).slice(1);
      const oe = Math.min(GameLoop.time - this.lastTime - 2000, 33);
      if (!(0 > oe)) {
        this.lastTime = GameLoop.time + oe;
        this.newTargetRGB();
      }
    }
    static ["newTargetRGB"]() {
      let gx = [255, 7, 0 | (255 * Math.random())];
      gx.sort(() => 0.5 - Math.random());
      this.targetR = gx[0];
      this.targetG = gx[1];
      this.targetB = gx[2];
    }
    static ["getColor"](bz, aho) {
      return "rgb(" + (0 | (bz.r * aho)) + "," + (0 | (bz.g * aho)) + "," + (0 | (bz.b * aho)) + ")";
    }
  }
  class DataReader {
    constructor(xc) {
      this.dataView = xc;
      this.index = 0;
      this.maxIndex = xc.byteLength;
    }
    ["readUInt8"]() {
      const fu = this.dataView.getUint8(this.index, true);
      this.index++;
      return fu;
    }
    ["readInt8"]() {
      const eu = this.dataView.getInt8(this.index, true);
      this.index++;
      return eu;
    }
    ["readUInt16"]() {
      const aht = this.dataView.getUint16(this.index, true);
      this.index += 2;
      return aht;
    }
    ["readInt16"]() {
      const adj = this.dataView.getInt16(this.index, true);
      this.index += 2;
      return adj;
    }
    ["readUInt32"]() {
      const aje = this.dataView.getUint32(this.index, true);
      this.index += 4;
      return aje;
    }
    ["readInt32"]() {
      const ni = this.dataView.getInt32(this.index, true);
      this.index += 4;
      return ni;
    }
    ["readFloat32"]() {
      const abr = this.dataView.getFloat32(this.index, true);
      this.index += 4;
      return abr;
    }
    ["readFloat64"]() {
      const hc = this.dataView.getFloat64(this.index, true);
      this.index += 8;
      return hc;
    }
    ["readUTF8string"]() {
      let hp;
      let ve = "";
      for (; 0 !== (hp = this.readUInt8()) && !this.endOfBuffer(); ) {
        ve += String.fromCharCode(hp);
      }
      return ve;
    }
    ["readStringZeroUtf8"]() {
      let yb = "";
      let yx = 0;
      for (var abo = this.index; abo < this.dataView.byteLength; abo++) {
        if (this.dataView.getUint8(abo, true)) {
          yx++;
        } else {
          break;
        }
      }
      yb += new TextDecoder().decode(new Uint8Array(this.dataView.buffer, this.index, yx));
      this.index += yx + 1;
      return yb;
    }
    ["readEscapedUTF8string"]() {
      const rm = this.readUTF8string();
      return decodeURIComponent(escape(rm));
    }
    ["decompress"]() {
      const sn = new Uint8Array(this.dataView.buffer);
      const ku = this.readUInt32();
      const ms = new Uint8Array(ku);
      LZ4.decodeBlock(sn.slice(5), ms);
      this.dataView = new DataView(ms.buffer);
      this.index = 0;
      this.maxIndex = this.dataView.byteLength;
    }
    ["endOfBuffer"]() {
      return this.index >= this.maxIndex;
    }
  }
  class WsConnection {
    static ["init"]() {
      const yt = {
        in: 0x0,
        out: 0x0,
      };
      this.ip = null;
      this.ws = null;
      this.connected = false;
      this.ws2 = null;
      this.connected2 = false;
      this.ws3 = null;
      this.connected3 = false;
      this.backupReady = false;
      this.backupConnecting = false;
      this.backupRetryTimer = null;
      this.intentionalDisconnect = false;
      this.captchaQueue = Promise.resolve();
      this.packetCount = yt;
      this.widgetIds = {};
      this.pendingResolvers = {};
      this.restartAt = null;
      this.pendingRespawns = new Set();
      this.pendingPromotions = new Set();
      this.promotionInFlight = 0;
      this.autoRespawnGeneration = 0;
      this.recycleLocks = new Set();
      this.backupPhase = "Waiting";
      this.backupPhaseSince = Date.now();
      this.tab1Authed = false;
      this.tab2Queued = false;
      this.tab2GuestKicks = 0;
      this.tab2Gen = (this.tab2Gen || 0) + 1;
      // 2026 Shield (hello/HelloAck/attest) state, one entry per tab.
      this._shield = {};
      this._shieldQueue = {};
      this.registerKeyBindings();
      this.startConnectionStatus();
      window.DRAG_PLUS = {
        status: () => this.statusSnapshot(),
        serverUrl: () => this.ip,
        mouseWorld: () => ({ x: Mouse.canvasX, y: Mouse.canvasY }),
        playerPos: () => ({ x: Player.x, y: Player.y, alive: Player.isAlive }),
        kill: () => this.recycleActiveCell(),
        accounts: () => Account.slots(),
        setAccount: (slot, uuid, accessToken) => Account.setSlot(slot, uuid, accessToken),
        clearAccounts: () => Account.clearSlots(),
      };
      WorldData.init();
    }
    // ------------------------------------------------------------------
    // 2026 Shield handshake. The game server now rejects any connection that
    // does not complete the WASM hello exchange first ("No session"). After
    // the server answers with opcode 209 (HelloAck) every packet we send must
    // be `seal()`ed and every game frame arrives inside opcode 210 frames.
    // A fresh ShieldSession is created per tab/socket.
    // ------------------------------------------------------------------
    static ["shieldEntry"](slot) {
      if (!this._shield) this._shield = {};
      if (!this._shieldQueue) this._shieldQueue = {};
      if (!this._shield[slot]) {
        this._shield[slot] = { session: null, established: false };
      }
      return this._shield[slot];
    }
    static ["shieldReadyPromise"](timeout = 15000) {
      return new Promise((resolve) => {
        if (window.__SHIELD__ && window.__SHIELD__.ready) {
          return resolve(window.__SHIELD__);
        }
        const started = Date.now();
        const poll = () => {
          if (window.__SHIELD__ && window.__SHIELD__.ready) {
            return resolve(window.__SHIELD__);
          }
          if (Date.now() - started > timeout) {
            return resolve(window.__SHIELD__ || null);
          }
          setTimeout(poll, 100);
        };
        poll();
      });
    }
    static ["shieldHello"](slot) {
      this.shieldReadyPromise()
        .then((sh) => {
          if (!sh || !sh.ready || !this.ip) return;
          const entry = this._shield && this._shield[slot];
          if (!entry || entry.session) return;
          let session;
          try {
            session = new sh.ShieldSession(sh.shield_build_id());
          } catch (e) {
            console.log("[Drag+] shield session error (tab " + slot + ")", e);
            return;
          }
          entry.session = session;
          let hello = null;
          try {
            hello = session.hello();
          } catch (e) {
            console.log("[Drag+] shield hello error (tab " + slot + ")", e);
            return;
          }
          const socket = 1 === slot ? this.ws : 2 === slot ? this.ws2 : this.ws3;
          if (socket && socket.readyState === socket.OPEN) {
            socket.send(hello);
            console.log("[Drag+] shield hello sent (tab " + slot + ") len=" + hello.length);
          }
        })
        .catch((e) => console.log("[Drag+] shield hello failed (tab " + slot + ")", e));
    }
    static ["flushShieldQueue"](slot) {
      const q = (this._shieldQueue && this._shieldQueue[slot]) || [];
      if (this._shieldQueue) this._shieldQueue[slot] = [];
      for (const p of q) {
        this.send(p, slot);
      }
    }
    static ["resetShield"](slot) {
      if (this._shield && this._shield[slot]) {
        const entry = this._shield[slot];
        if (entry.session && entry.session.free) {
          try {
            entry.session.free();
          } catch (e) {}
        }
        this._shield[slot] = null;
      }
      if (this._shieldQueue) this._shieldQueue[slot] = [];
    }
    static ["shieldHandleFrame"](ev, slot) {
      const entry = this._shield && this._shield[slot];
      if (!entry || !entry.session) return false;
      const raw = new Uint8Array(ev.data);
      if (!raw.length) return false;
      const first = raw[0];
      if (209 === first) {
        // HelloAck -> session established, flush queued (login/captcha/ping).
        try {
          entry.session.onHelloAck(raw, "");
        } catch (e) {
          console.log("[Drag+] shield onHelloAck error (tab " + slot + ")", e);
          return true;
        }
        entry.established = true;
        if (this._protoWaiting && this._protoWaiting[slot]) {
          this._protoWaiting[slot] = false;
          clearTimeout(this["_protoTimer" + slot]);
          this.flushProtoQueue(slot);
        }
        this.flushShieldQueue(slot);
        console.log("[Drag+] shield established (tab " + slot + ")");
        if (1 === slot) {
          this.tab1Authed = true;
          this.queueTab2();
        }
        return true;
      }
      if (210 === first) {
        // Sealed game frame.
        let inner;
        try {
          inner = entry.session.open(raw);
        } catch (e) {
          console.log("[Drag+] shield open error (tab " + slot + ")", e);
          return true;
        }
        if (inner && inner.length > 1 && 212 === inner[0]) {
          // Attestation challenge: answer with a clean (0) bitmask.
          try {
            const sh = window.__SHIELD__;
            const attest = sh.shield_attest(() => 0, inner.subarray(1));
            this.send(attest, slot);
            console.log("[Drag+] shield attestation answered (tab " + slot + ")");
          } catch (e) {
            console.log("[Drag+] shield attest error (tab " + slot + ")", e);
          }
          return true;
        }
        if (inner && inner.length && 123 === inner[0]) {
          try {
            JSON.parse(new TextDecoder().decode(inner));
          } catch (e) {}
          return true;
        }
        if (inner && inner.length) {
          const dv = new DataView(inner.buffer, inner.byteOffset, inner.byteLength);
          PacketParser.parse(dv, slot);
        }
        return true;
      }
      return false;
    }
    // Each tab needs its OWN Cloudflare Turnstile widget/container. Rendering
    // the same container twice targets the same single element, so the 2nd
    // render() silently fails to bind and tab 2's promise never resolves ->
    // handshake2 never completes -> ws2 never sends its auth packet -> server
    // drops it as idle.
    // The captcha queue serializes token requests so the standby tab never
    // renders a third widget while an earlier one is still pending.
    static ["getToken"](alq) {
      const task = this.captchaQueue.then(() => this._getToken(alq));
      this.captchaQueue = task.catch(() => {});
      return task;
    }
    static ["loadTurnstileScript"]() {
      if (document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]')) return;
      const s = document.createElement("script");
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      s.async = true;
      s.defer = true;
      (document.head || document.documentElement).appendChild(s);
    }
    static async ["_getToken"](alq) {
      return new Promise((lv, dq) => {
        if (alq <= 1) {
          Notifications.warn("Drag+", "Solving captcha, please wait..");
        }
        // remember whoever is currently waiting for THIS tab's token
        this.pendingResolvers[alq] = { resolve: lv, reject: dq };

        const mu = alq === 1 ? "#cf-turnstile-1" : alq === 2 ? "#cf-turnstile-2" : "#cf-turnstile-3";
        const SITEKEY = "0x4AAAAAAEkQx2FZR28MuMJC";

        // The 2026 protocol server validates Cloudflare Turnstile tokens
        // (sitekey of 3rb.io itself). One widget per tab: render it on first
        // use, reset + re-execute on later reconnects.
        const doRender = () => {
          const container = document.querySelector(mu);
          if (!container) {
            return dq(new Error("Turnstile container not found: " + mu));
          }
          container.innerHTML = "";
          container.style.visibility = "visible";
          container.style.display = "block";
          let wid;
          try {
            wid = window.turnstile.render(container, {
              sitekey: SITEKEY,
              execution: "execute",
              // Hidden captcha: the widget only becomes visible if Cloudflare
              // requires a manual interaction (risk-based). During the usual
              // automated solve it stays fully hidden.
              appearance: "interaction-only",
              callback: (xs) => {
                const rz = this.pendingResolvers[alq];
                if (!xs) {
                  return Notifications.warn("Drag+", "Unexpected response from Turnstile API.");
                }
                const ls = document.getElementById("loading-screen");
                if (ls) {
                  $(ls).fadeOut(500, function () {
                    $(this).remove();
                  });
                }
                PacketSender.handleDisabledProperty(false);
                Notifications.warn("Drag+", "Captcha solved for Tab " + alq);
                if (rz) {
                  return rz.resolve(xs);
                }
              },
              "expired-callback": () => {
                const rz = this.pendingResolvers[alq];
                if (rz) {
                  rz.reject(new Error("Turnstile token expired for tab " + alq));
                }
              },
              "error-callback": () => {
                const rz = this.pendingResolvers[alq];
                if (rz) {
                  rz.reject(new Error("Turnstile error for tab " + alq));
                }
              },
            });
            this.widgetIds[alq] = wid;
            window.turnstile.execute(wid);
          } catch (e) {
            console.log("[Drag+] Turnstile render error:", e);
          }
        };
        this.loadTurnstileScript();
        let attempts = 0;
        const maxAttempts = 40;
        const waitForSdk = () => {
          if (window.turnstile && window.turnstile.render) {
            doRender();
          } else if (++attempts <= maxAttempts) {
            setTimeout(waitForSdk, 300);
          } else {
            dq(new Error("Cloudflare Turnstile SDK failed to load after " + maxAttempts * 300 + "ms"));
          }
        };
        waitForSdk();
      });
    }
    static ["connect"](hy, aff) {
      if ("string" != typeof hy) {
        return Notifications.warn("Drag+", "Server IP is invalid");
      }
      if (!hy) return;
      const go = () => {
        this.disconnect();
        this.resetData();
        this.ip = hy;
        this.intentionalDisconnect = false;
        this.tab1Authed = false;
        this.tab2Queued = false;
        this.tab2GuestKicks = 0;
        this.tab2Gen = (this.tab2Gen || 0) + 1;
        this.createSocket(1);
        console.log("Connecting to: " + hy + " (Tab 1 first, Tab 2 follows after Tab 1 auth)");
      };
      this.shieldReadyPromise().then((sh) => {
        if (sh && sh.ready) {
          sh.ready.then(go).catch(go);
        } else {
          go();
        }
      });
    }
    static ["queueTab2"]() {
      // The 2026 game server now kicks every other connection from the same
      // IP ("New connection from this browser") unless the existing
      // connections are authenticated accounts. Tab 2 therefore never opens
      // until Tab 1 has finished its full handshake AND carries a valid
      // account game token, so the two sockets can never kick each other
      // in a loop. If no account is logged in yet, keep retrying so Tab 2
      // connects as soon as the user logs in.
      if (this.tab2Queued || this.ws2) return;
      this.tab2Queued = true;
      this.tab2WarnedGuest = false;
      const gen = this.tab2Gen;
      const attempt = () => {
        if (this.tab2Gen !== gen || this.intentionalDisconnect || !this.ip) {
          if (this.tab2Gen === gen) this.tab2Queued = false;
          return;
        }
        if (this.ws2) return;
        if (!this.tab1Authed || !this.connected) {
          setTimeout(attempt, 600);
          return;
        }
        if (!Account.loginStringFor(1)) {
          if (!this.tab2WarnedGuest) {
            this.tab2WarnedGuest = true;
            Notifications.warn("Drag+", "3rb.io now blocks two guest tabs from the same IP. Log in with an account to enable Tab 2.");
          }
          setTimeout(attempt, 3000);
          return;
        }
        if (!Account.gameToken1) {
          Account.fetchSlotToken(1);
          setTimeout(attempt, 700);
          return;
        }
        this.createSocket(2);
      };
      setTimeout(attempt, 1500);
    }
    static ["retryTab2Later"]() {
      this.tab2Queued = false;
      if (this.intentionalDisconnect || !this.ip) return;
      if (!Account.loginStringFor(2) && 3 <= (this.tab2GuestKicks || 0)) {
        Notifications.warn("Drag+", "Tab 2 keeps getting kicked as guest - log in with a second account to keep Tab 2 alive.");
        return;
      }
      this.queueTab2();
    }
    static ["createSocket"](slot) {
      if (!this.ip) return null;
      // 2026 proto-map negotiation state (see handleProto). Each socket starts
      // "waiting" for the server's MapInit packet; every packet we send while
      // waiting is queued and flushed once the mapping is resolved.
      this._protoWaiting = this._protoWaiting || {};
      this._protoQueue = this._protoQueue || {};
      this._protoSend = this._protoSend || {};
      this._protoRecv = this._protoRecv || {};
      this._protoWaiting[slot] = true;
      this._protoQueue[slot] = [];
      this._protoSend[slot] = null;
      this._protoRecv[slot] = null;
      clearTimeout(this["_protoTimer" + slot]);
      this["_protoTimer" + slot] = setTimeout(() => {
        if (this._protoWaiting && this._protoWaiting[slot]) {
          this._protoWaiting[slot] = false;
          this._protoSend[slot] = null;
          this._protoRecv[slot] = null;
          this.flushProtoQueue(slot);
        }
      }, 700);
      const socket = new WebSocket(this.ip, "d1elnjtfbyzq7a");
      if (1 === slot) this.ws = socket;
      else if (2 === slot) this.ws2 = socket;
      else this.ws3 = socket;
      this.resetShield(slot);
      this.shieldEntry(slot);
      this.bindSocket(socket, slot);
      return socket;
    }
    static ["bindSocket"](socket, slot) {
      socket.binaryType = "arraybuffer";
      socket.onopen = () => this.onOpen(slot);
      socket.onmessage = (ev) => this.onMessage(ev, slot);
      socket.onclose = (ev) => this.onClose(slot, socket, ev);
      socket.onerror = () => this.onError(slot);
    }
    // Standby Tab 3 was removed: the new 3rb.io server kicks any extra
    // connection from the same IP, so a third socket can never survive.
    static ["scheduleBackup"](delay = 1500) {
      return false;
    }
    static ["connectBackup"]() {
      return false;
    }
    static ["disconnect"]() {
      this.intentionalDisconnect = true;
      clearTimeout(this.backupRetryTimer);
      [this.ws, this.ws2, this.ws3].forEach((socket) => {
        if (!socket) return;
        socket.onopen = socket.onmessage = socket.onclose = socket.onerror = null;
        try {
          socket.close();
        } catch (e) {}
      });
      PacketSender.stopAllPingLoops();
      this.ws = null;
      this.connected = false;
      this.ws2 = null;
      this.connected2 = false;
      this.ws3 = null;
      this.connected3 = false;
      this.backupReady = false;
      this.backupConnecting = false;
      this.pendingPromotions.clear();
      this.pendingRespawns.clear();
      this.promotionInFlight = 0;
      this.setBackupPhase("Waiting");
      this.ip = null;
      this.resetShield(1);
      this.resetShield(2);
      this.resetShield(3);
    }
    static ["resetData"]() {
      CellData.cells.clear();
      CellData.myCellsIDs.clear();
      CellData.myCells.clear();
      CellData.cells2.clear();
      CellData.myCellsIDs2.clear();
      CellData.myCells2.clear();
      CellData.cells3.clear();
      CellData.myCellsIDs3.clear();
      CellData.myCells3.clear();
      Player._isAlive = false;
      Player._isAlive2 = false;
      // dead()/dead2() leave `type` pointed at whichever tab was still
      // alive when the OTHER one died, so it can be stuck on 2 from the
      // previous session. spawn() spawns whichever tab `typeID` currently
      // points at, so without this a reconnect (auto or manual server
      // switch) would silently route every "Play" click to tab 2 only,
      // making tab 1 look completely unplayable.
      Player.type = 1;
    }
    static ["send"](acr, yj) {
      this.packetCount.out++;
      if (this._protoWaiting && this._protoWaiting[yj]) {
        (this._protoQueue[yj] = this._protoQueue[yj] || []).push(acr);
        return;
      }
      let payload = acr;
      if (this._protoSend && this._protoSend[yj]) {
        const remap = new Uint8Array(acr.byteLength);
        remap.set(new Uint8Array(acr));
        remap[0] = this._protoSend[yj][remap[0]];
        payload = remap.buffer;
      }
      // 2026 Shield: before the session is established, buffer packets; after
      // it is established, seal every packet (seal() output carries its own
      // 0xD2 envelope tag, exactly like the real client).
      const entry = this._shield && this._shield[yj];
      if (entry) {
        if (!entry.session || !entry.established) {
          (this._shieldQueue[yj] = this._shieldQueue[yj] || []).push(payload);
          return;
        }
        try {
          payload = entry.session.seal(new Uint8Array(payload));
        } catch (e) {
          console.log("[Drag+] shield seal error (tab " + yj + ")", e);
        }
      }
      if (1 === yj && this.wsOpen) {
        this.ws.send(payload);
      } else if (2 === yj && this.ws2Open) {
        this.ws2.send(payload);
      } else if (3 === yj && this.ws3Open) {
        this.ws3.send(payload);
      }
    }
    static ["onOpen"](nq) {
      RelaySender.ip();
      if (1 === nq) SpamDetect.init();
      // 2026 Shield: the server requires the WASM hello before anything else.
      this.shieldHello(nq);
      PacketSender.init(nq);
      if (3 !== nq) Notifications.alert("Drag+", "Tab " + nq + " connected");
    }
    static ["onMessage"](alh, adu) {
      this.packetCount["in"]++;
      if ("string" === typeof alh.data) {
        try {
          const o = JSON.parse(alh.data);
          if (o && "ban_ui" === o.type) {
            console.log("[Drag+] ban_ui received");
          }
        } catch (e) {}
        return;
      }
      // 2026 Shield frames (209 HelloAck / 210 sealed game frame).
      if (this.shieldHandleFrame(alh, adu)) {
        return;
      }
      // 2026 proto-map negotiation: the server may open with a MapInit packet
      // (opcode 240, 546 bytes, byte[1]===1). While we haven't resolved it,
      // check the FIRST incoming frame - if it's MapInit, apply the opcode
      // remap tables and ack; if it's anything else the server is legacy and
      // we flush the queued handshake untouched. A consumed MapInit frame is
      // not fed into the normal parser.
      if (this._protoWaiting && this._protoWaiting[adu] && this.handleProto(alh, adu)) {
        return;
      }
      // Slot 3 no longer exists (removed): only tabs 1 and 2 are parsed.
      if (3 === adu) return;
      PacketParser.getBuffer(alh, adu);
    }
    static ["handleProto"](alh, adu) {
      const raw = new Uint8Array(alh.data);
      if (240 !== raw[0] || 546 !== raw.length || 1 !== raw[1]) {
        // Legacy server: no opcode remapping. Flush what we queued, then let
        // this first frame be parsed normally.
        this._protoWaiting[adu] = false;
        this._protoSend[adu] = null;
        this._protoRecv[adu] = null;
        clearTimeout(this["_protoTimer" + adu]);
        this.flushProtoQueue(adu);
        console.log("[proto] Tab " + adu + ": legacy (no opcode map)");
        return false;
      }
      // MapInit: sendMap[r] = raw[18+r]; recvMap[raw[274+r]] = r.
      const sm = new Uint8Array(256);
      const rm = new Uint8Array(256);
      for (let r = 0; r < 256; r++) {
        sm[r] = raw[18 + r];
        rm[raw[274 + r]] = r;
      }
      this._protoSend[adu] = sm;
      this._protoRecv[adu] = rm;
      this._protoWaiting[adu] = false;
      clearTimeout(this["_protoTimer" + adu]);
      console.log("[proto] Tab " + adu + ": MapInit applied, opcode remap active");
      // Ack with the raw 17-byte MapAck (opcode 241 + raw[530..546)) - it is
      // sent directly, NOT through send(), so the map itself never remaps it.
      const ack = new Uint8Array(17);
      ack[0] = 241;
      ack.set(raw.subarray(530, 546), 1);
      const ws = 1 === adu ? this.ws : 2 === adu ? this.ws2 : this.ws3;
      if (ws && ws.readyState === ws.OPEN) {
        ws.send(ack.buffer);
      }
      this.flushProtoQueue(adu);
      return true;
    }
    static ["flushProtoQueue"](adu) {
      const q = this._protoQueue[adu] || [];
      this._protoQueue[adu] = [];
      for (const p of q) {
        this.send(p, adu);
      }
    }
    static ["onClose"](cq, socket, ev) {
      const numericTab = Number(cq);
      const current = numericTab === 1 ? this.ws : numericTab === 2 ? this.ws2 : this.ws3;
      if (current !== socket) return false;
      PacketSender.stopPingLoop(numericTab);
      clearTimeout(this["_protoTimer" + numericTab]);
      if (this.intentionalDisconnect) return false;
      if (numericTab !== 1 && numericTab !== 2) return false;
      const reason = ev && ev.reason ? String(ev.reason) : "";
      if (/new connection/i.test(reason)) {
        Notifications.warn("Drag+", "Tab " + numericTab + " was replaced by another connection from this IP (new 3rb.io rule)");
        if (2 === numericTab) {
          this.tab2GuestKicks = (this.tab2GuestKicks || 0) + 1;
        }
      }
      if (numericTab === 1) {
        this.ws = null;
        this.connected = false;
        this.tab1Authed = false;
      } else {
        this.ws2 = null;
        this.connected2 = false;
      }
      this.resetShield(numericTab);
      PacketParser.clearCells(numericTab);
      Notifications.alert("Drag+", "Tab " + numericTab + " disconnected");
      console.log("Websocket " + numericTab + " closed" + (reason ? " (" + reason + ")" : ""));
      if (1 === numericTab) {
        setTimeout(() => {
          if (this.intentionalDisconnect || !this.ip || this.ws) return;
          this.createSocket(1);
        }, 1000);
      } else {
        this.retryTab2Later();
      }
      if (!(this.wsOpen || this.ws2Open)) {
        MainMenu.open();
      }
      this.connectionStatus();
      return true;
    }
    static ["onError"](alo) {
      if (!(this.wsOpen || this.ws2Open)) {
        MainMenu.open();
      }
      if (1 === alo) {
        this.connected = false;
        this.tab1Authed = false;
      } else if (2 === alo) {
        this.connected2 = false;
      }
      console.log("Websocket " + alo + " errored out!");
    }
    static get ["wsOpen"]() {
      return this.ws && this.ws.readyState === this.ws.OPEN;
    }
    static get ["ws2Open"]() {
      return this.ws2 && this.ws2.readyState === this.ws2.OPEN;
    }
    static get ["ws3Open"]() {
      return this.ws3 && this.ws3.readyState === this.ws3.OPEN;
    }
    // Close a single tab's WebSocket (leaves other tabs intact)
    static ["closeTab"](tab) {
      const ws = tab === 1 ? this.ws : tab === 2 ? this.ws2 : this.ws3;
      if (ws && ws.close) {
        ws.close();
      }
      if (tab === 1) { this.ws = null; this.connected = false; }
      else if (tab === 2) { this.ws2 = null; this.connected2 = false; }
      else { this.ws3 = null; this.connected3 = false; this.backupReady = false; }
      PacketParser.clearCells(tab);
    }
    // ------------------------------------------------------------------
    // Standby Tab 3 was removed: only Tab 1 and Tab 2 remain. These stubs
    // keep the old hotkeys and call sites harmless.
    // ------------------------------------------------------------------
    static ["setBackupPhase"](phase) {
      this.backupPhase = String(phase || "Waiting");
      this.backupPhaseSince = Date.now();
      this.connectionStatus();
    }
    static ["promoteBackup"](tab, reason = "Standby promotion") {
      // Standby Tab 3 was removed (the new server kicks a third connection).
      return false;
    }
    static ["queuePromotion"](tab, reason = "Playable tab died") {
      return false;
    }
    static ["pumpPromotionQueue"]() {
      return false;
    }
    static ["recycleActiveCell"]() {
      // Standby Tab 3 was removed: K / /kill now just respawns the active
      // tab's cell instead of promoting a hidden third socket.
      const tab = Number(Player.typeID || 1);
      const alive = tab === 2 ? Player._isAlive2 : Player._isAlive;
      if (!alive) {
        Notifications.warn("Drag+", "Tab " + tab + " is not alive.");
        return false;
      }
      if (this.recycleLocks.has(tab)) return false;
      this.recycleLocks.add(tab);
      PacketSender.spawnTab(tab);
      setTimeout(() => this.recycleLocks.delete(tab), 1800);
      return true;
    }
    static ["statusSnapshot"]() {
      const tabStatus = (socket, connected, alive, pending) => {
        if (alive) return "Alive";
        if (!socket) return this.ip ? "Reconnecting" : "Offline";
        if (socket.readyState === WebSocket.CONNECTING) return "Connecting";
        if (socket.readyState === WebSocket.OPEN) return connected ? (pending ? "Spawning" : "Ready") : "Verifying";
        return "Reconnecting";
      };
      return {
        activeTab: Player.typeID,
        tab1: tabStatus(this.ws, this.connected, Player._isAlive, this.pendingRespawns.has(1)),
        tab2: tabStatus(this.ws2, this.connected2, Player._isAlive2, this.pendingRespawns.has(2)),
      };
    }
    static ["connectionStatus"]() {
      const status = this.statusSnapshot();
      let hud = document.getElementById("drag-plus-connection-status");
      if (!hud && document.body) {
        hud = document.createElement("div");
        hud.id = "drag-plus-connection-status";
        hud.style.cssText = "position:fixed;right:5px;z-index:2147483000;text-align:center;font-family:ubuntu,sans-serif;font-size:11px;color:rgba(255,255,255,.75);pointer-events:none;white-space:nowrap;text-shadow:0 1px 2px #000;padding-bottom:3px";
        hud.title = "Drag+ Multibox - Tab 1 and Tab 2 connection status.";
        document.body.appendChild(hud);
      }
      if (hud) {
        const restartEl = document.getElementById("server-restart-countdown");
        if (restartEl) {
          const restartBottom = parseInt(window.getComputedStyle(restartEl).bottom) || 235;
          hud.style.bottom = (restartBottom + 20) + "px";
        } else {
          hud.style.bottom = "255px";
        }
        hud.style.width = (Minimap.size || 200) + "px";
        hud.textContent = "Tab1:" + status.tab1 + " | Tab2:" + status.tab2;
      }
      return status;
    }
    static ["startConnectionStatus"]() {
      if (this.connectionStatusTimer) clearInterval(this.connectionStatusTimer);
      this.connectionStatusTimer = setInterval(() => this.connectionStatus(), 500);
      setTimeout(() => this.connectionStatus(), 0);
    }
    static ["registerKeyBindings"]() {
      if (this.keyBindingsRegistered) return;
      this.keyBindingsRegistered = true;
      document.addEventListener("keydown", (event) => {
        if (event.code !== "KeyK" || event.repeat || event.ctrlKey || event.altKey || event.metaKey) return;
        if (event.target && event.target.matches && event.target.matches("input, textarea, select, [contenteditable='true']")) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        this.recycleActiveCell();
      }, true);
    }
  }
  class SpamDetect {
    static ["init"]() {
      this.messages = new Map();
      this.spammers = [];
    }
    static ["checkSpam"](gf, dm) {
      if (-1 !== this.spammers.indexOf(gf)) {
        return true;
      }
      if (this.messages.has(gf)) {
        const ajb = this.messages.get(gf);
        if ((ajb == dm && dm.length >= 30) || (ajb.length >= 30 && dm.length >= 30)) {
          this.spammers.push(gf);
          Notifications.alert("Drag+", "Spammer Catched -> " + gf);
          return true;
        }
      } else if (dm.length >= 30) {
        this.messages.set(gf, dm);
      }
      if (this.messages.size >= 10) {
        this.messages.clear();
      }
      return false;
    }
  }
  class PacketParser {
    static ["getBuffer"](oj, zt) {
      const adr = new DataView(oj.data);
      this.parse(adr, zt);
    }
    static ["parse"](amd, ii) {
      const aam = new DataReader(amd);
      let ahy = aam.readUInt8();
      // 2026 proto-map: incoming opcodes are remapped through the receive
      // table once the server negotiated a map for this socket.
      if (WsConnection._protoRecv && WsConnection._protoRecv[ii]) {
        ahy = WsConnection._protoRecv[ii][ahy];
      }
      if (16 === ahy) {
        this.worldUpdate(aam, ii);
      } else if (17 === ahy) {
        this.getSpectateData(aam);
      } else if (18 === ahy) {
        this.clearCells(ii);
      } else if (20 === ahy) {
        this.clearMyCells(ii);
      } else if (32 === ahy) {
        this.getMyCellId(aam, ii);
      } else if (50 === ahy && 1 === ii) {
        this.getLeaderboard(aam);
      } else if (49 === ahy && 1 === ii) {
        this.getLeaderboardFFA(aam);
      } else if (65 === ahy) {
        this.borderUpdate(aam, ii);
      } else if (85 === ahy) {
        this.handlePartyCode(aam);
      } else if (87 === ahy) {
        this.handleParty(aam);
      } else if (88 === ahy && 1 === ii) {
        this.handleLevel(aam);
      } else if (154 === ahy && 1 === ii) {
        this.handleSweets(aam);
      }
      if (86 === ahy && 1 === ii) {
        this.handleChat(aam);
      }
    }
    static ["handlePartyCode"](ajj) {
      const fg = ajj.readStringZeroUtf8();
      if ("invalid" === fg) {
        if (PartyManager.awaitingResponse) {
          PartyManager.awaitingResponse = false;
          PartyManager.awaitingCreate = false;
          Notifications.warn("Party", "Invalid party code.");
        }
        return;
      }
      const aia = PartyManager.awaitingCreate;
      if (PartyManager.awaitingResponse) {
        PartyManager.awaitingResponse = false;
        PartyManager.awaitingCreate = false;
        $("#party-token").val(fg);
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(fg).catch(() => {});
        }
        Notifications.warn("Party", aia ? "Party created - code " + fg + " copied to clipboard." : "Joined party " + fg + ".");
      }
      PartyManager.code = fg;
      PartyManager.inParty = true;
      RelayWs.updateRoom();
      if (aia && PacketSender.chekConnection(2)) {
        PacketSender.joinParty(fg, 2);
      }
    }
    static ["handleSweets"](akl) {
      // Opcode 154: sweet pickup (uint16 count + x/y). Track the running
      // total for the status line; refresh is throttled by updateUI call.
      const gained = akl.readUInt16();
      if (0 < gained) {
        Account.sweets += gained;
        Account.updateUI();
      }
    }
    static ["handleLevel"](ajz) {
      // Opcode 88: server pushes the account's total XP (uint32, little
      // endian) + optional bonus coins (uint8 flag + uint32). We only need
      // the XP to track the current level and detect level-ups.
      Account.setXp(ajz.readUInt32());
    }
    static ["handleParty"](akb) {
      const tc = akb.readUInt16();
      const aix = new Set();
      const aig = [];
      for (let el = 0; el < tc; el++) {
        const aac = akb.readUInt32();
        const ajp = akb.readStringZeroUtf8();
        const mf = akb.readUInt8();
        const afm = akb.readUInt8();
        const akf = akb.readUInt8();
        const rb = akb.readInt32();
        const aie = akb.readInt32();
        const fn = akb.readInt32();
        aig.push({ id: aac, nick: ajp, mass: rb, x: aie, y: fn });
        if (ajp === Player.nick) {
          // Both tabs spawn under the same nick, and tab1/tab2 already see
          // each other via the multibox relay (RelayData.teamPlayers) - if
          // the server includes your own connection(s) in this roster too,
          // rendering them again here would just be a redundant/confusing
          // second dot for your own other tab. Still counts as "seen" so a
          // stale entry (from before this filter existed) gets pruned below.
          aix.add(aac);
          continue;
        }
        const yr = PartyManager.getMember(aac);
        yr.nick = ajp;
        yr.colorHex = "#" + (0x1000000 + (mf << 16) + (afm << 8) + akf).toString(16).slice(1);
        yr.mass = rb;
        yr.x = aie;
        yr.y = fn;
        yr.isAlive = 1;
        yr.timeStamp = GameLoop.time;
        aix.add(aac);
      }
      for (const ky of PartyManager.members.keys()) {
        if (!aix.has(ky)) {
          PartyManager.members.delete(ky);
        }
      }
    }
    static ["handleChat"](yn) {
      // 2026 chat packet: int32 senderId, int32 target, uint8 r, string a,
      // uint8x3 color, string msg, string nick, string l, uint8 c, uint8 u,
      // string d. id1 is the sender's real player id (matches cell.ownerId/
      // WorldData.pID namespace) - needed so a chat message's nick can be
      // right-clicked into the same party-invite menu as a map cell.
      const mz = yn.readInt32();
      yn.readInt32();
      const vip = yn.readUInt8();
      yn.readStringZeroUtf8();
      const cr = yn.readUInt8();
      const cg = yn.readUInt8();
      const cb2 = yn.readUInt8();
      var cb = yn.readStringZeroUtf8().replace("[]", "");
      var pv = yn.readStringZeroUtf8();
      yn.readStringZeroUtf8();
      yn.readUInt8();
      const muted = yn.readUInt8();
      yn.readStringZeroUtf8();
      Notifications.gameChat(cb, pv, mz, { r: cr, g: cg, b: cb2, vip: !!vip, muted: !!muted });
    }
    static ["worldUpdate"](vi, vd = 1) {
      GameLoop.refreshTime();
      var xh;
      var adi;
      var hl;
      var jd = false;
      var akq = null;
      var ajl = null;
      var ox = undefined;
      var we = undefined;
      var ci = undefined;
      var eb = undefined;
      var tz = undefined;
      var wn = undefined;
      var alx = undefined;
      var alm = undefined;
      var sf = undefined;
      var ale = undefined;
      var wa = "on" === Settings.eatAnimation;
      var akj = vi.readUInt16();
      for (var akx = 0; akx < akj; akx++) {
        var xh;
        var adi;
        var hl;
        var jd;
        var akq;
        var ajl;
        var ox;
        var we;
        var ci;
        var eb;
        var tz;
        var wn;
        var alx;
        var alm;
        var sf;
        var ale;
        var wa;
        var akj;
        var akx;
        ox = vi.readUInt32();
        we = vi.readUInt32();
        if (wa) {
          CellData.eatCell(ox, we, vd);
        }
      }
      for (; 0 !== (ci = vi.readUInt32()); ) {
        akq = CellData.getCell(ci, vd);
        eb = vi.readInt32();
        tz = vi.readInt32();
        wn = vi.readUInt16();
        if (akq.init) {
          akq.animate();
          akq.x = akq.animX;
          akq.y = akq.animY;
          akq.radius = akq.animRadius;
        } else {
          akq.animX = akq.x = eb;
          akq.animY = akq.y = tz;
          akq.radius = akq.animRadius = wn;
          akq.lastUpdateTime = GameLoop.time;
          akq.init = true;
        }
        akq.x = eb;
        akq.y = tz;
        akq.radius = wn;
        akq.lastUpdateTime = GameLoop.time;
        // The 2026 protocol widened the per-cell flags word from 8 to 16
        // bits (adds vip/gold/sweet bits at 256/512/1024) - must read 16.
        ajl = vi.readUInt16();
        sf = !!(1 & ajl);
        alm = !!(4 & ajl);
        alx = !!(8 & ajl);
        xh = !!(16 & ajl);
        adi = !!(32 & ajl);
        hl = !!(64 & ajl);
        ale = !!(128 & ajl);
        if (xh) {
          vi.readUInt32();
          vi.readUInt8();
        }
        if (hl) {
          // owner/"parent" player id - see the ownerId comment in Cell's
          // constructor. Only resent when it changes, so only overwrite when
          // this delta actually carries it (matches nick/skin below).
          akq.ownerId = vi.readInt32();
        }
        if (2 & ajl) {
          akq.setColor(vi.readUInt8(), vi.readUInt8(), vi.readUInt8());
        } else {
          null;
        }
        jd = !!(32 & ajl);
        if (alm) {
          // readStringZeroUtf8 (TextDecoder), NOT readEscapedUTF8string - the
          // original client (3rb.js handleNodes) reads skin/nick this way for
          // exactly this packet. readEscapedUTF8string's escape()/
          // decodeURIComponent() trick throws URIError on any byte sequence
          // that isn't strictly valid UTF-8, and that throw is uncaught here,
          // silently aborting the rest of this packet's cell loop - leaving
          // whichever cell was mid-parse (and everyone after it) stuck with
          // stale nick/skin/isFood forever, even though its x/y/radius (read
          // earlier above) keep updating fine. That's the "white, no name,
          // still moving" cell bug.
          akq.skin = vi.readStringZeroUtf8();
          if (akq.skin.split("/")[1] !== "undefined") {
            Renderer.get3rbSkin(akq.skin);
          }
        }
        akq.nick = alx ? vi.readStringZeroUtf8() : null;
        akq.bNick = ale ? vi.readStringZeroUtf8() : null;
        akq.vip = !!(256 & ajl);
        akq.isVirus = sf;
        akq.isEjected = jd;
        // classify AFTER isVirus/isEjected/ownerId are up to date for this
        // packet - doing this earlier misclassified brand-new cells (e.g.
        // fresh split pieces) as food for one tick, since they still had
        // stale defaults at that point.
        akq.isFood = this.checkIsFood(akq);
      }
      akj = vi.readUInt16();
      for (akx = 0; akx < akj; akx++) {
        we = vi.readUInt32();
        CellData.removeCell(we, vd);
      }
    }
    static ["checkIsFood"](vn) {
      // Matches 3rb.js's handleNodes exactly: a cell is Food unless the
      // server attached an owner/parent player id to it (and it's not a
      // virus/ejected mass). NOT based on whether it currently has a
      // nickname - real players can be legitimately unnamed, and a cell's
      // nick can lag its ownerId by a packet or two, both of which used to
      // get misclassified as food (flat single-color render, no name/skin/
      // mass) until the next full resync, e.g. on split.
      return !vn.isMine && !vn.isVirus && !vn.isEjected && -1 === vn.ownerId;
    }
    static ["getSpectateData"](m) {
      Camera.spectatePoint.x = m.readFloat32();
      Camera.spectatePoint.y = m.readFloat32();
      Camera.autoZoomViewport = m.readFloat32();
    }
    static ["clearCells"](tp) {
      if (1 === tp) {
        CellData.cells.clear();
        CellData.myCellsIDs.clear();
        CellData.myCells.clear();
      } else if (2 === tp) {
        CellData.cells2.clear();
        CellData.myCellsIDs2.clear();
        CellData.myCells2.clear();
      } else {
        CellData.cells3.clear();
        CellData.myCellsIDs3.clear();
        CellData.myCells3.clear();
      }
    }
    static ["clearMyCells"](mp) {
      if (1 === mp) {
        CellData.myCellsIDs.clear();
        CellData.myCells.clear();
      } else if (2 === mp) {
        CellData.myCellsIDs2.clear();
        CellData.myCells2.clear();
      } else {
        CellData.myCellsIDs3.clear();
        CellData.myCells3.clear();
      }
    }
    static ["getMyCellId"](agp, aft) {
      const ago = 1 === aft ? CellData.myCellsIDs : 2 === aft ? CellData.myCellsIDs2 : CellData.myCellsIDs3;
      const hq = agp.readUInt32();
      ago.add(hq);
    }
    static ["getLeaderboard"](abx) {
      Leaderboard.clear();
      let fo;
      let im;
      let aeh = abx.readUInt16();
      for (fo = 0; fo < aeh; fo++) {
        im = (im = abx.readStringZeroUtf8()) || "unnamed cell";
        Leaderboard.add(im, fo + 1, false, false, false);
      }
      Leaderboard.update();
    }
    static ["getLeaderboardFFA"](ew) {
      Leaderboard.clear();
      let uf;
      let pl;
      let acp;
      let cv;
      let vs = ew.readUInt16();
      for (uf = 0; uf < vs; uf++) {
        pl = ew.readUInt16();
        acp = ew.readUInt32();
        cv = ew.readStringZeroUtf8() || "unnamed cell";
        Leaderboard.add(cv, pl || 1, false, false, false, acp);
      }
      Leaderboard.update();
    }
    static ["getLeaderboardTeam"](ajy) {
      Leaderboard.clear();
      let aex;
      let aa = ajy.readUInt32();
      let hi = [];
      for (aex = 0; aex <= aa && !ajy.endOfBuffer(); aex++) {
        hi.push(ajy.readFloat32());
      }
      Leaderboard.team(hi[0], hi[1], hi[2]);
    }
    static ["borderUpdate"](hf, ee) {
      const zc = 0 | hf.readFloat64();
      const aax = 0 | hf.readFloat64();
      const afv = 0 | hf.readFloat64();
      const tk = 0 | hf.readFloat64();
      // Trailing field 3rb.js's own handleBorder also reads (this.game.pID)
      // - this connection's own real player id, used to tell "my own cell"
      // apart from everyone else's for the right-click party-invite menu.
      const ajr = hf.readUInt32();
      if (1 === ee) {
        WorldData.update(zc, aax, afv, tk);
        WorldData.pID = ajr;
      } else if (2 === ee) {
        WorldData.update2(zc, aax, afv, tk);
        WorldData.pID2 = ajr;
      }
    }
    static ["bytesToColor"](cr, un, ix) {
      return (
        "#" +
        ("00" + (~~cr).toString(16)).slice(-2) +
        ("00" + (~~un).toString(16)).slice(-2) +
        ("00" + (~~ix).toString(16)).slice(-2)
      );
    }
  }
  class PacketSender {
    static async ["init"](adx) {
      if (3 !== adx) {
        this.handleDisabledProperty(true);
      }
      this.stopPingLoop(adx);
      this.handshake1(adx);
      const ok = await this.handshake2(adx);
      if (!ok) {
        const target = 1 === adx ? WsConnection.ws : 2 === adx ? WsConnection.ws2 : WsConnection.ws3;
        try {
          target && target.close();
        } catch (e) {}
        return;
      }
      this.initPingLoop(adx);
      this.accountPacketSent = false;
      Camera.isSpectating = false;
      Camera.freeSpectate = false;
      console.log("Connected to: " + WsConnection.ip);
      if (1 === adx) {
        WsConnection.connected = true;
        WsConnection.tab1Authed = true;
        WsConnection.queueTab2();
      } else if (2 === adx) {
        WsConnection.connected2 = true;
        // Tab 2 just became playable: if Tab 1 already has a cell, bring
        // Tab 2's cell back automatically so the pair stays together.
        if (Player._isAlive) {
          setTimeout(() => this.spawnTab(2), 400);
        }
      }
      if (WsConnection.connected && WsConnection.connected2) {
        this.handleDisabledProperty(false);
      }
    }
    static ["handleDisabledProperty"](du) {
      document.querySelector("#button-play").disabled = du;
      document.querySelector("#button-spectate").disabled = du;
    }
    static ["createView"](dc) {
      return new DataView(new ArrayBuffer(dc));
    }
    static ["chekConnection"](iz) {
      return (1 === iz && WsConnection.connected) || (2 === iz && WsConnection.connected2);
    }
    static ["sendPacket"](yl, abl) {
      WsConnection.send(yl.buffer, abl);
    }
    static ["initPingLoop"](cm) {
      this["pingInterval" + cm] = setInterval(() => {
        WsConnection.send(new Uint8Array([100]).buffer, cm);
      }, 1000);
    }
    static ["stopPingLoop"](cm) {
      const key = "pingInterval" + cm;
      if (this[key]) {
        clearInterval(this[key]);
        this[key] = null;
      }
    }
    static ["stopAllPingLoops"]() {
      [1, 2, 3].forEach((slot) => this.stopPingLoop(slot));
    }
    static ["handshake1"](ahn) {
      // Login packet: [255] + UTF-16LE(string) + zero terminator (00 00).
      // Guest (no account) sends an empty string -> [255, 0, 0]. A logged-in
      // account sends [255, unicode(uuid|gameToken), 0, 0].
      // Each tab carries its OWN account: the game server allows a single
      // connection per account (concurrent-login protection) and, since the
      // last update, kicks every second guest connection from the same IP
      // ("New connection from this browser"). Tab 1 uses slot 1, Tab 2 uses
      // slot 2 (falling back to guest).
      const str = 1 === Number(ahn) ? Account.loginStringFor(1) : Account.loginStringFor(2);
      console.log("Drag+ Login packet (tab " + ahn + "): " + (str ? (str.length > 24 ? str.slice(0, 24) + "..." : str) : "guest"));
      if (!str) {
        const px = new Uint8Array([255, 0, 0]);
        WsConnection.send(px, ahn);
        return;
      }
      const bytes = new Uint8Array(3 + str.length * 2);
      bytes[0] = 255;
      for (let i = 0; i < str.length; i++) {
        const cc = str.charCodeAt(i);
        bytes[1 + i * 2] = cc & 0xff;
        bytes[2 + i * 2] = (cc >> 8) & 0xff;
      }
      WsConnection.send(bytes, ahn);
    }
    static ["resendLogin"]() {
      [1, 2].forEach((tab) => {
        if ((1 === tab && WsConnection.connected) || (2 === tab && WsConnection.connected2)) {
          this.handshake1(tab);
        }
      });
    }
    static async ["handshake2"](oq) {
      if (3 !== oq && WsConnection.connected && WsConnection.connected2) {
        return true;
      }
      var add;
      try {
        add = await WsConnection.getToken(oq);
      } catch (nb) {
        console.log("Multibox: failed to get captcha token for tab " + oq + ":", nb);
        Notifications.warn("Drag+", "Captcha failed for Tab " + oq + " - retrying the connection.");
        return false;
      }
      var fj = new DataView(new ArrayBuffer(add.length + 6));
      var ip = 0;
      fj.setUint8(ip++, 123);
      fj.setUint8(ip++, 6);
      // The 2026 server validates Cloudflare Turnstile tokens and expects the
      // "ts:" provider prefix (the same `prefix + ":" + token` the official
      // client sends inside the Protocol packet).
      ("ts:" + add).split("").forEach((cw) => fj.setUint8(ip++, cw.charCodeAt(0)));
      fj.setUint8(ip++, 0);
      WsConnection.send(fj.buffer, oq);
      return true;
    }
    // The standby tab is transport-only: it must never spawn a visible cell.
    static ["spawnTab"](tab) {
      tab = Number(tab);
      if (tab !== 1 && tab !== 2) return false;
      this.spawn(tab);
      return true;
    }
    static ["mouse"](afk, u) {
      const afj = Player.typeID;
      if (this.chekConnection(afj)) {
        const fa = this.createView(17);
        fa.setUint8(0, 16, true);
        fa.setFloat64(1, Math.fround(~~afk), true);
        fa.setFloat64(9, Math.fround(~~u), true);
        this.sendPacket(fa, afj);
      }
    }
    static ["chat"](am, jj = Player.typeID) {
      const command = String(am || "").trim().toLowerCase();
      if (command === "/kill" || command === "/recycle") {
        WsConnection.recycleActiveCell();
        return;
      }
      // Only Tab 1 carries the logged-in account, so route chat there
      // (guests on Tabs 2/3 get rejected by the server anyway). Fall back
      // to the active tab if Tab 1 is not currently connected.
      if (Account.loggedIn) {
        jj = 1;
        if (!this.chekConnection(jj)) {
          jj = Player.typeID;
        }
      }
      if (this.chekConnection(jj)) {
        const gh = unescape(encodeURIComponent(am));
        const ex = this.createView(6 + gh.length);
        ex.setUint8(0, 86);
        ex.setUint8(1, 255);
        ex.setUint8(2, 255);
        ex.setUint8(3, 255);
        ex.setUint8(4, 255);
        for (let ald = gh.length; ald--; ) {
          ex.setUint8(ald + 5, gh.charCodeAt(ald), true);
        }
        ex.setUint8(5 + gh.length, 0, true);
        this.sendPacket(ex, jj);
      }
    }
    static ["spectate"](aik) {
      const nf = aik || 1;
      if (this.chekConnection(nf) || (!Player.isAlive && !Camera.isSpectating) || aik) {
        const pt = this.createView(1);
        pt.setUint8(0, 1, true);
        this.sendPacket(pt, nf);
        Camera.isSpectating = true;
        if (!Player.isAlive) {
          Camera.targetViewport = 0.1;
        }
      }
    }
    static ["spectateBackground"](xp) {
      // Same request packet as spectate(), but deliberately skips touching
      // Camera.isSpectating/targetViewport - those drive the visible
      // camera and spectate UI, and this is only meant to make an idle tab
      // feed spectatePoint in the background while the other tab is being
      // actively played.
      if (this.chekConnection(xp)) {
        const fs = this.createView(1);
        fs.setUint8(0, 1, true);
        this.sendPacket(fs, xp);
      }
    }
    static ["spawn"](bTab) {
      const n = bTab || Player.typeID;
      if (this.chekConnection(n) && ((1 === n && !Player._isAlive) || (2 === n && !Player._isAlive2))) {
        Camera.isSpectating = false;
        let xnick = 2 === n && Player.nick2 ? Player.nick2 : Player.nick;
        if ("" === xnick) {
          xnick = "An unnamed cell";
        }
        let xt = unescape(encodeURIComponent(xnick));
        let h = unescape(encodeURIComponent("free/" + TeamList.arbSkin));
        const ul = {
          n: xt,
        };
        if (Player.arbSkin) {
          ul.s = h;
          ul.w = "";
        }
        // VIP flag: the real client sends v:true in the spawn/Name packet so
        // the server marks the connection as VIP (gold color + crown on the
        // cell, isVip on its chat messages). Tab 1 carries the account.
        if (1 === n && Account.isVip()) {
          ul.v = true;
        }
        const ur = JSON.stringify(ul);
        const ng = ur.length;
        const nv = this.createView(2 + ng);
        nv.setUint8(0, 0, true);
        for (let mm = 0; mm < ng; mm++) {
          nv.setUint8(mm + 1, ur.charCodeAt(mm), true);
        }
        nv.setUint8(ng + 1, 0, true);
        this.sendPacket(nv, n);
        // Re-sync identity with the relay on every spawn. RelaySender.init()
        // (which fires on relay connect) can run before Player.init() has
        // populated _nick from the #nick input - that race leaves the relay
        // broadcasting an empty nick forever, even though this very spawn
        // just used the real name (so the game server/leaderboard shows it
        // while teammates see a blank roster entry + nameless minimap dot).
        // nick()/skin() are no-ops when the relay isn't connected.
        RelaySender.nick();
        RelaySender.skin();
      }
    }
    static ["split"]() {
      const fv = Player.typeID;
      if (this.chekConnection(fv)) {
        const kp = this.createView(1);
        kp.setUint8(0, 17, true);
        this.sendPacket(kp, fv);
      }
    }
    static ["eject"]() {
      const is = Player.typeID;
      if (this.chekConnection(is)) {
        const ed = this.createView(1);
        ed.setUint8(0, 21, true);
        this.sendPacket(ed, is);
      }
    }
    static ["freeSpectate"]() {
      if (this.chekConnection(1)) {
        Camera.freeSpectate = !Camera.freeSpectate;
        const hk = this.createView(1);
        hk.setUint8(0, 18, true);
        this.sendPacket(hk, 1);
      }
    }
    // Native party protocol (opcode 85/0x55, matches 3rb.js's own
    // `sendParty`): byte 1 is the sub-type - 0 = create, 1 = join (followed
    // by the zero-terminated party code, "#" included).
    static ["createParty"](ajt) {
      if (this.chekConnection(ajt)) {
        const lq = this.createView(2);
        lq.setUint8(0, 85, true);
        lq.setUint8(1, 0, true);
        this.sendPacket(lq, ajt);
      }
    }
    static ["joinParty"](ahz, ajt) {
      if (this.chekConnection(ajt)) {
        const zj = unescape(encodeURIComponent(ahz));
        const akk = this.createView(2 + zj.length + 1);
        akk.setUint8(0, 85, true);
        akk.setUint8(1, 1, true);
        for (let dj = 0; dj < zj.length; dj++) {
          akk.setUint8(2 + dj, zj.charCodeAt(dj), true);
        }
        akk.setUint8(2 + zj.length, 0, true);
        this.sendPacket(akk, ajt);
      }
    }
    static ["leaveParty"](aiv) {
      if (this.chekConnection(aiv)) {
        const rn = this.createView(2);
        rn.setUint8(0, 85, true);
        rn.setUint8(1, 2, true);
        this.sendPacket(rn, aiv);
      }
    }
  }
  class Account {
    static ["init"]() {
      this.uuid = localStorage.getItem("active_session_id") || "";
      this.nick = localStorage.getItem("active_session_nick") || "";
      this.gameToken = null;
      this.gameTokenAt = 0;
      this.levels = null;
      this.xp = -1;
      this.level = 0;
      this.levelAnnounced = false;
      this.coins = 0;
      this.sweets = 0;
      this.vipEndAt = null;
      this.xpBoost = null;
      this.massBoost = null;
      this._xpPoll = null;
      this._tokenLoop = null;
      this.slot1 = this.readSlot("dragplus_account_1");
      this.slot2 = this.readSlot("dragplus_account_2");
      this.gameToken1 = null;
      this.gameTokenAt1 = 0;
      this.gameToken2 = null;
      this.gameTokenAt2 = 0;
      window.authResponse = (res) => {
        try {
          this.onAuthResponse(res);
        } catch (e) {
          console.log("authResponse error", e);
        }
      };
      window.addEventListener("storage", (e) => this.handleStorageChange(e));
      this.bindUI();
      this.updateUI();
      if (this.loggedIn) {
        this.refreshGameToken();
        this.loadLevels();
        this.startXpPoll();
      }
      this.captureCurrentSession();
      this.startTokenLoop();
      this.updateUI();
    }
    static ["readCookie"](name) {
      const parts = ("; " + document.cookie).split("; " + name + "=");
      return 2 === parts.length ? parts.pop().split(";").shift() : "";
    }
    static ["readSlot"](key) {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        const obj = JSON.parse(raw);
        if (obj && obj.uuid) return obj;
      } catch (e) {}
      return null;
    }
    static ["writeSlot"](key, obj) {
      try {
        localStorage.setItem(key, JSON.stringify(obj));
      } catch (e) {}
    }
    static ["captureCurrentSession"]() {
      // The php/Auth.php popup logs the browser into one account at a time
      // (PHPSESSID + optional access_token cookie). Every successful login
      // is captured here: the first account becomes slot 1 (Tab 1), a
      // DIFFERENT account becomes slot 2 (Tab 2). Game tokens are fetched
      // right away while the browser session belongs to that account.
      const uuid = this.uuid;
      if (!uuid || "logout" === uuid) return 0;
      let slot;
      if (this.slot1 && this.slot1.uuid === uuid) {
        slot = 1;
      } else if (!this.slot1) {
        slot = 1;
      } else {
        slot = 2;
      }
      const entry = { uuid: uuid, nick: this.nick, accessToken: "" };
      entry.accessToken = this.lastAuthAccessToken || this.readCookie("access_token") || "";
      if (1 === slot) {
        this.slot1 = entry;
        this.writeSlot("dragplus_account_1", entry);
      } else {
        this.slot2 = entry;
        this.writeSlot("dragplus_account_2", entry);
        this.gameToken2 = null;
        this.gameTokenAt2 = 0;
      }
      this.fetchSlotToken(slot);
      // The access_token cookie can land a moment after the popup callback
      // fires - retry reading it a few times and upgrade the slot if found.
      const retries = [800, 2500, 6000];
      for (const delay of retries) {
        setTimeout(() => {
          const at = this.readCookie("access_token");
          if (!at) return;
          const cur = 1 === slot ? this.slot1 : this.slot2;
          if (!cur || cur.uuid !== uuid) return;
          if (!cur.accessToken) {
            cur.accessToken = at;
            this.writeSlot(1 === slot ? "dragplus_account_1" : "dragplus_account_2", cur);
            this.fetchSlotToken(slot);
          }
        }, delay);
      }
      this.updateUI();
      // Account captured mid-game: kick the Tab 2 connection gate so it
      // opens as soon as Tab 1 carries this account.
      if (WsConnection && WsConnection.connected && !WsConnection.ws2) {
        WsConnection.queueTab2();
      }
      return slot;
    }
    static ["startTokenLoop"]() {
      if (this._tokenLoop) return;
      const tick = () => {
        this.fetchSlotToken(1);
        this.fetchSlotToken(2);
        this.warnStaleSlot(1);
        this.warnStaleSlot(2);
      };
      tick();
      this._tokenLoop = setInterval(tick, 180000);
    }
    static ["warnStaleSlot"](slot) {
      const entry = 1 === slot ? this.slot1 : this.slot2;
      const tk = 1 === slot ? this.gameToken1 : this.gameToken2;
      const at = 1 === slot ? this.gameTokenAt1 : this.gameTokenAt2;
      if (!entry || !tk) return;
      this._staleWarned = this._staleWarned || {};
      if (!entry.accessToken && this.uuid && "logout" !== this.uuid && this.uuid !== entry.uuid && 300000 < Date.now() - at) {
        if (!this._staleWarned[slot]) {
          this._staleWarned[slot] = true;
          Notifications.warn("Login", "Tab " + slot + " account game token expired and cannot auto-refresh (browser session is on the other account). Login again with that account to refresh it.");
        }
      } else {
        this._staleWarned[slot] = false;
      }
    }
    static ["fetchSlotToken"](slot) {
      const entry = 1 === slot ? this.slot1 : this.slot2;
      if (!entry || !entry.uuid) return;
      if (1 === slot && this.gameToken1 && Date.now() - this.gameTokenAt1 < 150000) return;
      if (2 === slot && this.gameToken2 && Date.now() - this.gameTokenAt2 < 150000) return;
      // Without a saved access_token the API authenticates through the
      // browser session cookie - only fetch while that session belongs to
      // THIS slot's account, otherwise we would get the wrong account token.
      if (!entry.accessToken && this.uuid && "logout" !== this.uuid && this.uuid !== entry.uuid) return;
      this._slotFetching = this._slotFetching || {};
      if (this._slotFetching[slot]) return;
      this._slotFetching[slot] = true;
      this._slotFetchFail = this._slotFetchFail || {};
      const opts = entry.accessToken
        ? { credentials: "omit", headers: { Authorization: "Bearer " + entry.accessToken } }
        : { credentials: "include" };
      fetch("https://3rb.io/api/auth/game-token", opts)
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => {
          this._slotFetching[slot] = false;
          const tk = d && (d.token || (d.data && d.data.token));
          if (!tk) {
            this._slotFetchFail[slot] = (this._slotFetchFail[slot] || 0) + 1;
            Notifications.warn("Login", "Game token failed for account slot " + slot + (3 === this._slotFetchFail[slot] ? " - the saved account token looks expired, please login again or use DRAG_PLUS.clearAccounts()" : ""));
            return;
          }
          this._slotFetchFail[slot] = 0;
          if (1 === slot) {
            this.gameToken1 = tk;
            this.gameTokenAt1 = Date.now();
          } else {
            this.gameToken2 = tk;
            this.gameTokenAt2 = Date.now();
          }
          Notifications.command("Login", "Game token ready (Tab " + slot + " account)");
          PacketSender.resendLogin();
          if (WsConnection && WsConnection.connected && !WsConnection.ws2) {
            WsConnection.queueTab2();
          }
        })
        .catch(() => {
          this._slotFetching[slot] = false;
          this._slotFetchFail[slot] = (this._slotFetchFail[slot] || 0) + 1;
        });
    }
    static ["loginStringFor"](slot) {
      if (1 === slot) {
        if (!this.slot1 || !this.slot1.uuid) return "";
        return this.gameToken1 ? this.slot1.uuid + "|" + this.gameToken1 : this.slot1.uuid;
      }
      if (!this.slot2 || !this.slot2.uuid) return "";
      // The server allows one connection per account: never send the same
      // account from Tab 2 or it will be kicked in a reconnect loop.
      if (this.slot1 && this.slot1.uuid === this.slot2.uuid) return "";
      return this.gameToken2 ? this.slot2.uuid + "|" + this.gameToken2 : this.slot2.uuid;
    }
    static ["slots"]() {
      return {
        tab1: this.slot1 ? { uuid: this.slot1.uuid, nick: this.slot1.nick, hasToken: !!this.slot1.accessToken, gameToken: !!this.gameToken1 } : null,
        tab2: this.slot2 ? { uuid: this.slot2.uuid, nick: this.slot2.nick, hasToken: !!this.slot2.accessToken, gameToken: !!this.gameToken2 } : null,
      };
    }
    static ["setSlot"](slot, uuid, accessToken) {
      const entry = { uuid: String(uuid || ""), nick: "", accessToken: String(accessToken || "") };
      if (1 === slot) {
        this.slot1 = entry.uuid ? entry : null;
        this.writeSlot("dragplus_account_1", this.slot1);
        this.gameToken1 = null;
        this.gameTokenAt1 = 0;
      } else {
        this.slot2 = entry.uuid ? entry : null;
        this.writeSlot("dragplus_account_2", this.slot2);
        this.gameToken2 = null;
        this.gameTokenAt2 = 0;
      }
      this.fetchSlotToken(slot);
      this.updateUI();
      PacketSender.resendLogin();
    }
    static ["clearSlots"]() {
      this.slot1 = null;
      this.slot2 = null;
      this.gameToken1 = null;
      this.gameToken2 = null;
      localStorage.removeItem("dragplus_account_1");
      localStorage.removeItem("dragplus_account_2");
      this.updateUI();
      PacketSender.resendLogin();
    }
    static get ["loggedIn"]() {
      return !!this.uuid && "logout" !== this.uuid;
    }
    static ["buildLoginString"](u) {
      if (!u) {
        return "";
      }
      if ("logout" === u || 0 === u.indexOf("locked-")) {
        return u;
      }
      return this.gameToken ? u + "|" + this.gameToken : u;
    }
    static ["openLogin"](provider) {
      // Match the game's own popup (createWindow) exactly: same window name
      // "3rb.io", same "scrollbars=yes, width=..., height=..., top=..., left=..."
      // features string. window.open from a Tampermonkey sandbox is often a
      // no-op (silently returns null, nothing opens), so route through the
      // real page window (unsafeWindow) when available - the popup needs the
      // real opener so php/Auth.php can call window.opener.authResponse().
      const w = "undefined" !== typeof unsafeWindow ? unsafeWindow : window;
      const top = (w.screenTop || w.screenY || 0) + ((w.outerHeight || w.innerHeight || 0) - 520) / 2;
      const left = (w.screenLeft || w.screenX || 0) + ((w.outerWidth || w.innerWidth || 0) - 400) / 2;
      const features = "scrollbars=yes, width=400, height=520, top=" + top + ", left=" + left;
      const win = w.open("php/Auth.php?provider=" + provider, "3rb.io", features);
      if (!win) {
        Notifications.warn("Login", "Login popup was blocked - please allow popups for 3rb.io and try again.");
      }
      return win;
    }
    static ["onAuthResponse"](e) {
      if (!e || e.error) {
        Notifications.warn("Login", (e && e.error) || "Login error!");
        return;
      }
      this.uuid = e.uuid || "";
      this.nick = e.Name || "";
      if (this.uuid) {
        localStorage.setItem("active_session_id", this.uuid);
        localStorage.setItem("active_session_nick", this.nick);
      }
      if (e && (e.access_token || e.accessToken)) {
        this.lastAuthAccessToken = e.access_token || e.accessToken;
      }
      this.captureCurrentSession();
      this.gameToken = null;
      this.gameTokenAt = 0;
      this.levels = (e && e.Shop && e.Shop.Levels) || this.levels;
      this.coins = parseInt(e && e.Coins) || 0;
      this.sweets = parseInt(e && e.Sweets) || 0;
      if (e && e.vipEndAt) this.vipEndAt = e.vipEndAt;
      if (e && e["XP Boost"]) this.xpBoost = e["XP Boost"];
      if (e && e["Mass Boost"]) this.massBoost = e["Mass Boost"];
      this.refreshGameToken();
      this.updateUI();
      PacketSender.resendLogin();
      const axp = parseInt(e && e.XP);
      if (!isNaN(axp) && 0 <= axp) {
        this.setXp(axp);
      }
      this.loadLevels();
      this.startXpPoll();
    }
    static ["refreshGameToken"]() {
      if (!this.loggedIn) {
        this.gameToken = null;
        return;
      }
      if (this.gameToken && Date.now() - this.gameTokenAt < 24e4) {
        return;
      }
      fetch("https://3rb.io/api/auth/game-token", { credentials: "include" })
        .then((r) => {
          if (!r.ok) {
            Notifications.warn("Login", "Game token failed (HTTP " + r.status + ") - chat may stay locked");
            throw new Error("game-token status " + r.status);
          }
          return r.json();
        })
        .then((d) => {
          const tk = d && (d.token || (d.data && d.data.token));
          if (tk) {
            this.gameToken = tk;
            this.gameTokenAt = Date.now();
            Notifications.command("Login", "Game token ready");
            PacketSender.resendLogin();
          } else {
            Notifications.warn("Login", "Game token: no token in response");
          }
        })
        .catch(() => {});
    }
    static ["loadLevels"]() {
      // Level thresholds come from the account's Shop.Levels table. Prefer
      // what php/Auth.php returns in authResponse; fall back to auth/me.
      if (!this.loggedIn) return;
      if (this.levels && this.levels.length) {
        this.announceLevel();
        return;
      }
      this.refreshAccountData();
    }
    static ["startXpPoll"]() {
      // Lightweight live account refresh (one small request every 40s) so the
      // XP/level updates while playing without needing a logout/login. Safe
      // for guests: only runs while logged in. Kept tiny to avoid any lag.
      if (this._xpPoll || !this.loggedIn) return;
      this._xpPoll = setInterval(() => {
        if (!this.loggedIn) {
          this.stopXpPoll();
          return;
        }
        this.refreshAccountData();
      }, 40000);
    }
    static ["stopXpPoll"]() {
      if (this._xpPoll) {
        clearInterval(this._xpPoll);
        this._xpPoll = null;
      }
    }
    static ["refreshAccountData"]() {
      if (!this.loggedIn) return;
      fetch("https://3rb.io/api/auth/me", { credentials: "include" })
        .then((r) => (r.ok ? r.json() : Promise.reject(new Error("status " + r.status))))
        .then((d) => {
          const body = d && d.data ? d.data : d;
          if (body) {
            this.applyAccountData(body);
          }
        })
        .catch(() => {});
    }
    static ["applyAccountData"](body) {
      if (body.Shop && body.Shop.Levels && body.Shop.Levels.length) {
        this.levels = body.Shop.Levels;
      }
      const xp = parseInt(body.XP);
      if (!isNaN(xp) && 0 <= xp) {
        this.setXp(xp);
      }
      const coins = parseInt(body.Coins);
      if (!isNaN(coins) && 0 <= coins) {
        this.coins = coins;
      }
      const sweets = parseInt(body.Sweets);
      if (!isNaN(sweets) && 0 <= sweets) {
        this.sweets = sweets;
      }
      if (body.vipEndAt) this.vipEndAt = body.vipEndAt;
      if (body["XP Boost"]) this.xpBoost = body["XP Boost"];
      if (body["Mass Boost"]) this.massBoost = body["Mass Boost"];
      this.updateUI();
    }
    static ["isVip"]() {
      if (!this.vipEndAt) return false;
      const t = new Date(this.vipEndAt).getTime();
      return !isNaN(t) && t > Date.now();
    }
    static ["boostActive"](val) {
      if (!val) return false;
      const t = new Date(val).getTime();
      return isNaN(t) || t > Date.now();
    }
    static ["levelForXp"](xp) {
      let cur = null;
      for (let i = 0; i < this.levels.length; i++) {
        if (this.levels[i].XP <= xp) {
          cur = this.levels[i];
        } else {
          break;
        }
      }
      return cur;
    }
    static ["setXp"](xp) {
      if (0 > xp || !this.levels || !this.levels.length) return;
      const wasKnown = 0 <= this.xp;
      const oldLevel = this.level;
      this.xp = xp;
      const cur = this.levelForXp(xp);
      if (!cur) return;
      this.level = cur.Level;
      if (wasKnown && oldLevel && cur.Level > oldLevel) {
        const coins = parseInt(cur.Coins);
        if (0 < coins) {
          this.coins += coins;
          this.updateUI();
        }
        Notifications.command(
          "Level",
          "Level Up! You reached level " + cur.Level + (0 < coins ? " (+" + coins.toLocaleString() + " Coins)" : "")
        );
      }
      this.announceLevel();
    }
    static ["announceLevel"]() {
      if (!this.levels || !this.levels.length) return;
      if (this.levelAnnounced || 0 > this.xp) return;
      this.levelAnnounced = true;
      Notifications.command("Level", "Your level: " + this.level + " (" + this.xp + " XP)");
    }
    static ["logout"]() {
      this.stopXpPoll();
      this.uuid = "logout";
      this.gameToken = null;
      PacketSender.resendLogin();
      this.uuid = "";
      this.nick = "";
      this.gameTokenAt = 0;
      localStorage.removeItem("active_session_id");
      localStorage.removeItem("active_session_nick");
      fetch("php/Auth.php?logout", { credentials: "include" }).catch(() => {});
      this.clearSlots();
      this.updateUI();
    }
    static ["handleStorageChange"](e) {
      if ("active_session_id" !== e.key) {
        return;
      }
      const v = localStorage.getItem("active_session_id");
      if (v === this.uuid) {
        return;
      }
      this.uuid = v || "";
      this.nick = this.uuid ? localStorage.getItem("active_session_nick") || "" : "";
      this.gameToken = null;
      this.gameTokenAt = 0;
      if (this.loggedIn) {
        this.refreshGameToken();
        this.startXpPoll();
      }
      this.updateUI();
      PacketSender.resendLogin();
    }
    static ["bindUI"]() {
      // Google/Discord login are native anchors (href + target="_blank" +
      // rel="opener") so the browser opens the Auth.php popup itself - no
      // window.open needed (the Tampermonkey sandbox swallows those). The
      // relay/authResponse still wires up through window.opener on the page.
      $(document).on("click", "#account-status-logout", (e) => {
        e.preventDefault();
        this.logout();
      });
    }
    static ["updateUI"]() {
      const tab2 = document.getElementById("account-tab2");
      if (tab2) {
        const s1 = this.slot1 ? (this.slot1.nick || this.slot1.uuid.slice(0, 12)) : "none";
        const s2 = this.slot2 ? (this.slot2.nick || this.slot2.uuid.slice(0, 12)) : "none";
        tab2.textContent = "Tab1: " + s1 + "   |   Tab2: " + s2;
      }
      if (!this.loggedIn) {
        $("#account-login").show();
        $("#account-login2").hide();
        $("#account-status-info").text("Anonymous");
        $("#account-status-logout").hide();
        return;
      }
      $("#account-login").hide();
      $("#account-login2").show();
      const parts = [];
      parts.push("👤 " + (this.nick || (this.uuid.length > 10 ? this.uuid.slice(0, 10) + "..." : this.uuid)));
      if (this.isVip()) {
        parts.push("[VIP]");
      }
      parts.push("💰 " + (this.coins || 0).toLocaleString());
      if (0 < this.sweets) {
        parts.push("🍬 " + this.sweets.toLocaleString());
      }
      if (this.boostActive(this.xpBoost)) {
        parts.push("⚡ XP Boost");
      } else if (this.boostActive(this.massBoost)) {
        parts.push("⚡ Mass Boost");
      }
      $("#account-status-info").text(parts.join(" │ "));
      $("#account-status-logout").show();
    }
  }
  class RelayWs {
    static ["init"]() {
      this.ip = "";
      this.ws = null;
      this.connected = false;
      // Plain browser WebSocket now (was socket.io-client) - every
      // Socket.IO-specific bug hunted down this session (version/EIO
      // handshake mismatches, ping/pong tuning, the Manager's own opaque
      // reconnect state machine dropping in-flight sends) was a symptom of
      // that abstraction layer, not the actual network. A raw WebSocket
      // has none of that hidden machinery - what you see here IS the
      // connection logic. MUST be wss:// (not https://): 3rb.io is
      // loaded over HTTPS, and browsers silently drop any plain ws://
      // connection an HTTPS page tries to open (mixed content) - the
      // socket just never opens, no error is ever thrown. If this is
      // pointed at a self-signed cert, open that URL once directly in this
      // browser first and click through the "not secure" warning,
      // otherwise this will never connect.
      this.url = "wss://157.180.84.143:8443";
      // The relay is a single shared deployment - everyone who connects
      // without a room ends up seeing everyone else. Tab 1 + tab 2 share
      // one relay connection (see RelaySender), so a private per-browser room
      // is the default (only your own two tabs see each other). Two other,
      // independent things can override that default room selection - see
      // updateRoom(): a shared "tag" (ambient, persists across sessions,
      // set once and just works with anyone else using the same tag) and a
      // native party (explicit invite/accept, takes priority over tag
      // while active - see PartyManager).
      this.privateRoom = Storage.get("multibox", "privateRoom") || this.generateCode(16);
      Storage.set("multibox", "privateRoom", this.privateRoom);
      this.room = this.computeRoom();
      this.reconnectAttempt = 0;
      this.reconnectTimer = null;
      this.connect();
    }
    static ["generateCode"](mw) {
      const ajq = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let zn = "";
      for (let rl = 0; rl < mw; rl++) {
        zn += ajq[0 | (Math.random() * ajq.length)];
      }
      return zn;
    }
    static ["connect"]() {
      if ("undefined" === typeof WebSocket) {
        return console.log("Multibox sync: WebSocket is not available in this page, cannot connect to " + this.url);
      }
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
      const lk = this.url + "?room=" + encodeURIComponent(this.room);
      this.ws = new WebSocket(lk);
      this.ws.binaryType = "arraybuffer";
      this.ws.onopen = () => {
        console.log("Multibox sync: connected to " + this.url);
        this.reconnectAttempt = 0;
        this.onOpen();
      };
      this.ws.onmessage = (xm) => {
        this.onMessage(xm);
      };
      this.ws.onclose = (lc) => {
        console.log("Multibox sync: disconnected (code " + lc.code + ")");
        this.onClose();
        this.scheduleReconnect();
      };
      this.ws.onerror = (dp) => {
        console.log("Multibox sync: socket error", dp);
        this.onError();
      };
    }
    static ["scheduleReconnect"]() {
      if (this.reconnectTimer) {
        return;
      }
      // Simple capped exponential backoff, entirely our own and visible -
      // no library-internal heuristics deciding when/whether to retry.
      const sc = Math.min(1000 * Math.pow(2, this.reconnectAttempt), 15000);
      this.reconnectAttempt++;
      this.reconnectTimer = setTimeout(() => {
        this.reconnectTimer = null;
        this.connect();
      }, sc);
    }
    static ["switchRoom"](ff) {
      if (this.room === ff) {
        return;
      }
      this.room = ff;
      this.reconnectAttempt = 0;
      this.disconnect();
      this.connect();
    }
    static ["sanitize"](ky, ahi) {
      // The relay's own room sanitizer only accepts [A-Z0-9_-], so strip
      // anything else first (native party codes look like "#NAKO6UI") -
      // otherwise it'd reject the room id and silently fall back to one
      // shared default for everyone, defeating isolation. Prefixed per
      // source so a tag can never collide with an unrelated party code (or
      // vice versa) that happens to sanitize to the same string.
      const ajh = String(ahi || "")
        .replace(/[^A-Za-z0-9_-]/g, "")
        .toUpperCase();
      return ajh ? ky + ajh : null;
    }
    static ["computeRoom"]() {
      // Native party (explicit invite/accept) takes priority over tag - a
      // party is a deliberate, one-off grouping; tag is the ambient,
      // persistent one that just works with anyone else using the same
      // value, no invite step needed. Falls back to the private room when
      // neither applies.
      if (PartyManager.inParty && PartyManager.code) {
        const aka = this.sanitize("P_", PartyManager.code);
        if (aka) {
          return aka;
        }
      }
      const zf = this.sanitize("T_", Player.tag);
      return zf || this.privateRoom;
    }
    static ["updateRoom"]() {
      this.switchRoom(this.computeRoom());
    }
    static ["disconnect"]() {
      // Strip handlers before closing so a late event from the old socket
      // (e.g. its "close" firing after switchRoom() has already opened a
      // new one) can't stomp on the new connection's state through onOpen/
      // onClose, which both write to this same static class either way.
      if (this.ws) {
        this.ws.onopen = this.ws.onmessage = this.ws.onclose = this.ws.onerror = null;
        this.ws.close();
      }
      this.ws = null;
      this.connected = false;
    }
    static ["isOpen"]() {
      return !!(this.ws && this.connected && this.ws.readyState === WebSocket.OPEN);
    }
    static ["send"](ar) {
      if (this.isOpen()) {
        this.ws.send(ar);
      }
    }
    static ["sendVolatile"](ar) {
      // A raw WebSocket has no "volatile" concept to delegate to (that was
      // Socket.IO-specific) - readyState===OPEN is the only "is this safe
      // to write right now" signal actually available, which is exactly
      // what send() already checks, so this is just an alias. Kept as its
      // own method so call sites (commander) still read as "this one is
      // fine to drop, no retry needed" rather than implying reliability.
      this.send(ar);
    }
    static ["onOpen"]() {
      this.connected = true;
      RelaySender.init();
    }
    static ["onMessage"](fy) {
      RelayParser.parse(fy);
    }
    static ["onClose"]() {
      this.connected = false;
      console.log("Disconnected from networks.");
    }
    static ["onError"]() {
      this.connected = false;
      console.log("Connection to networks errored out!");
    }
  }
  class RelayData {
    static ["init"]() {
      const qy = {
        totalMass: 0x0,
        alive: 0x0,
        spectate: 0x0,
      };
      const aav = {
        totalMass: 0x0,
        alive: 0x0,
        spectate: 0x0,
      };
      const ahe = {
        1: qy,
        2: aav,
      };
      RelayWs.init();
      this.teamPlayers = new Map();
      this.selfID = -1;
      this.isSpectator = false;
      this.teamAlternator = true;
      this.teamData = ahe;
      this.biggestIsOn = false;
      this.biggest = new TeamPlayer(0);
    }
    static ["clear"]() {
      this.teamPlayers.clear();
      console.log("cleared");
    }
    static ["remove"](pw) {
      this.teamPlayers["delete"](pw);
    }
    static ["getPlayer"](wu) {
      if (wu === this.selfID) {
        return {};
      }
      let bt = this.teamPlayers.get(wu);
      if (undefined === bt) {
        bt = this.newPlayer(wu);
      }
      return bt;
    }
    static ["newPlayer"](at) {
      const ay = new TeamPlayer(at);
      this.teamPlayers.set(at, ay);
      return ay;
    }
  }
  class RelayParser {
    static ["parse"](acm) {
      const pa = new DataView(acm.data);
      const ov = new DataReader(pa);
      const vb = ov.readUInt8();
      if (1 === vb) {
        this.update(ov);
      } else if (3 === vb) {
        this.commander(ov);
      } else if (4 === vb) {
        this.selfID(ov);
      } else if (5 === vb) {
        this.prePlayers(ov);
      }
    }
    static ["update"](ri) {
      // Do NOT re-send positionMass()/biggest() here in response to an
      // incoming update: the relay broadcasts to everyone in the room
      // *except* the sender, so a reactive resend here creates a
      // self-sustaining feedback loop the instant a second real client is
      // in the room (their update triggers your resend, which triggers
      // the relay to broadcast to them, which triggers their resend,
      // forever, bounded only by round-trip latency) - this was the cause
      // of the CPU/traffic spike that only appeared once a teammate
      // joined. The 250ms heartbeat (see Renderer's interval setup)
      // already keeps both fresh on a fixed, bounded schedule without
      // depending on teammate traffic to trigger it, so this reactive
      // path is redundant on top of being a footgun.
      const y = RelayData.teamAlternator ? 1 : 2;
      const l = RelayData.teamData[y];
      l.totalMass = 0;
      l.alive = 0;
      l.spectate = 0;
      let aej = ri.readUInt8();
      for (; aej--; ) {
        const ke = ri.readUInt32();
        RelayData.remove(ke);
      }
      for (aej = ri.readUInt8(); aej--; ) {
        const aaj = ri.readUInt32();
        const afb = RelayData.getPlayer(aaj);
        const abw = ri.readUInt8();
        if (1 & abw) {
          const vf = ri.readStringZeroUtf8();
          const vg = vf.split("|");
          afb.nick = vg[0] || "";
          afb.nick2 = vg[1] || "";
        }
        if (2 & abw) {
          const aey = ri.readUInt8();
          const abi = ri.readUInt8();
          const og = ri.readUInt8();
          afb.colorHex = "#" + (16777216 + (aey << 16) + (abi << 8) + og).toString(16).slice(1);
        }
        if (4 & abw) {
          const aey = ri.readUTF8string().split("|");
          afb.skin = aey[0] || "";
          afb.skin2 = aey[1] || "";
          afb.skin2Color = /^[0-9a-fA-F]{6}$/.test(aey[2] || "") ? "#" + aey[2].toLowerCase() : "";
        }
        if (16 & abw) {
          afb.x = ri.readInt16();
          afb.y = ri.readInt16();
          afb.mass = ri.readUInt32();
        }
        if (32 & abw) {
          afb.isAlive = ri.readUInt8();
        }
        if (64 & abw) {
          afb.isRGB = ri.readUInt8();
        }
        afb.team = y;
        if (afb.isAlive) {
          l.totalMass += afb.mass;
          l.alive++;
        } else {
          l.spectate++;
        }
      }
      const kg = ri.readUInt8();
      RelayData.biggestIsOn = kg;
      if (kg) {
        RelayData.biggest.x = ri.readInt16();
        RelayData.biggest.y = ri.readInt16();
      }
    }
    static ["prePlayers"](vy) {
      RelayData.clear();
      for (let xg = vy.readUInt8(); xg--; ) {
        const ada = vy.readUInt32();
        const ami = RelayData.newPlayer(ada);
        const avn = vy.readStringZeroUtf8().split("|");
        ami.nick = avn[0] || "";
        ami.nick2 = avn[1] || "";
        const rk = vy.readUInt8();
        const kz = vy.readUInt8();
        const jh = vy.readUInt8();
        ami.colorHex = "#" + (16777216 + (rk << 16) + (kz << 8) + jh).toString(16).slice(1);
        const aek = vy.readUTF8string().split("|");
        ami.skin = aek[0] || "";
        ami.skin2 = aek[1] || "";
        ami.skin2Color = /^[0-9a-fA-F]{6}$/.test(aek[2] || "") ? "#" + aek[2].toLowerCase() : "";
        ami.x = vy.readInt16();
        ami.y = vy.readInt16();
        ami.mass = vy.readUInt32();
        ami.isAlive = vy.readUInt8();
        ami.isRGB = vy.readUInt8();
      }
    }
    static ["commander"](acs) {
      // Raw world coordinates, no offset - same fix as positionMass()/
      // biggest(): WorldData.offset assumes the border is always -8000,
      // which isn't guaranteed for every server. Adding it back here (when
      // the sender no longer subtracts anything but a tab2 visual-shift,
      // if any) was producing wildly out-of-bounds points, e.g. y=-11279.
      const vg = acs.readInt16();
      const re = acs.readInt16();
      const agh = GameLoop.time;
      const bd = {
        x: vg,
        y: re,
        time: agh,
      };
      Renderer.commanderPoints.add(bd);
    }
    static ["selfID"](ln) {
      const aab = ln.readUInt32();
      RelayData.selfID = aab;
    }
  }
  class RelaySender {
    static ["init"]() {
      console.log("Connected to Networks.");
      // connected is already set true by RelayWs.onOpen() before this runs.
      this.nick();
      this.skin();
      this.tag();
      this.color();
      this.ip();
      this.aliveStatus();
      this.rgbMode();
      if (RelayData.isSpectator) {
        this.spectator(true);
      }
    }
    static ["createView"](se) {
      return new DataView(new ArrayBuffer(se));
    }
    static ["nick"]() {
      if (RelayWs.connected) {
        const id = unescape(encodeURIComponent([Player.nick, Player.nick2].join("|")));
        let aes = id.length;
        const vo = this.createView(2 + id.length);
        for (vo.setUint8(0, 1, true); aes--; ) {
          vo.setUint8(aes + 1, id.charCodeAt(aes), true);
        }
        vo.setUint8(1 + id.length, 0, true);
        RelayWs.send(vo.buffer);
      }
    }
    static ["color"]() {
      if (RelayWs.connected) {
        const alc = this.createView(4);
        alc.setUint8(0, 2, true);
        alc.setUint8(1, Player.colorObject.r, true);
        alc.setUint8(2, Player.colorObject.g, true);
        alc.setUint8(3, Player.colorObject.b, true);
        RelayWs.send(alc.buffer);
      }
    }
    static ["skin"]() {
      if (RelayWs.connected) {
        // Tab-2 skin and its player color ride along as "SKIN1|SKIN2|RRGGBB"
        // in the same opcode-4 field. The color is the discriminator the far
        // side needs: every cell of a player carries that player's color on
        // ANY socket, so each of our tabs maps to exactly one skin key - the
        // old worldID+cellType keying failed because a multibox teammate's
        // cells arrive on both of the friend's sockets (cellType 1 AND 2
        // copies), so both tabs' cells got both skins and the overlap picked
        // one at random. Colors are server-assigned per spawn and stay fixed
        // for the player's whole life, so the key is stable.
        const parts = [Player.skin];
        if (Player.skin2) {
          parts.push(Player.skin2);
          if (/^#[0-9a-fA-F]{6}$/.test(Player.colorHex2)) {
            parts.push(Player.colorHex2.slice(1));
          }
        }
        const ahc = parts.join("|");
        let aeb = ahc.length;
        const bk = this.createView(2 + ahc.length);
        for (bk.setUint8(0, 4, true); aeb--; ) {
          bk.setUint8(aeb + 1, ahc.charCodeAt(aeb), true);
        }
        bk.setUint8(1 + ahc.length, 0, true);
        RelayWs.send(bk.buffer);
      }
    }
    static ["ip"]() {
      if (RelayWs.connected && WsConnection.ip) {
        // WsConnection.ip is a "wss://host:port/path" URL (this game's servers
        // are hostnames like alpha2.3rb.io, never a raw dotted-quad IPv4
        // address) - splitting that on "." never yields 4 octets, so
        // agf[3] was always undefined and ".split(':')" on it threw.
        // That exception fired inside onOpen(), BEFORE it ever reached
        // PacketSender.init(tabNum) (which sends the actual handshake and
        // marks the tab connected) - so as soon as the relay socket was up,
        // every real-game connection silently stopped authenticating.
        // There's also nothing downstream that reads this once sent (the
        // relay's inbound update() decoder has no field bit for it), so if
        // the address isn't a real IPv4 host there's nothing useful to send
        // at all - just skip it instead of guessing.
        const abu = WsConnection.ip.match(/^wss?:\/\/([^:/]+)(?::(\d+))?/i);
        if (!abu) {
          return;
        }
        const agf = abu[1].split(".");
        if (4 !== agf.length) {
          return;
        }
        const lo = this.createView(8);
        lo.setUint8(0, 8, true);
        lo.setUint8(1, 1, true);
        lo.setUint8(2, 0 | agf[0], true);
        lo.setUint8(3, 0 | agf[1], true);
        lo.setUint8(4, 0 | agf[2], true);
        lo.setUint8(5, 0 | agf[3], true);
        lo.setUint16(6, 0 | abu[2], true);
        RelayWs.send(lo.buffer);
      }
    }
    static ["tag"]() {
      if (RelayWs.connected) {
        const po = Player.tag;
        let ha = po.length;
        const up = this.createView(3 + po.length);
        up.setUint8(0, 8, true);
        for (up.setUint8(1, 2, true); ha--; ) {
          up.setUint8(ha + 2, po.charCodeAt(ha), true);
        }
        up.setUint8(2 + po.length, 0, true);
        RelayWs.send(up.buffer);
      }
    }
    static ["positionMass"]() {
      if (RelayWs.connected) {
        const adq = this.createView(9);
        adq.setUint8(0, 16, true);
        // Send the raw world position, NOT offset-adjusted: `WorldData.offset`
        // reflects *this* player's own border rect, which the receiving
        // client has no way to reverse (it never adds any offset back before
        // handing the value to mapX/mapY). Sending it pre-shifted by a
        // sender-only value that never gets undone is exactly what caused
        // teammates to show up in the wrong minimap sector.
        adq.setInt16(1, 0 | Player.x, true);
        adq.setInt16(3, 0 | Player.y, true);
        adq.setUint32(5, Player.mass, true);
        RelayWs.send(adq.buffer);
      }
    }
    static ["aliveStatus"]() {
      if (RelayWs.connected) {
        const um = this.createView(2);
        const xk = Player.isAlive ? 1 : 0;
        um.setUint8(0, 32, true);
        um.setUint8(1, xk, true);
        RelayWs.send(um.buffer);
      }
    }
    static ["commander"]() {
      if (RelayWs.connected) {
        // Only remove tab2's visual-separation shift (WorldData.position -
        // the delta used to draw tab2's cells apart from tab1's on the
        // shared canvas), not the border-derived offset/offset2 - same
        // fix as positionMass()'s own Player.x/y, which already only
        // subtracts this same shift. canvasX/Y is otherwise already a raw
        // world coordinate.
        const qf = { x: 0, y: 0 };
        const afr = 2 === Player.typeID ? WorldData.position : qf;
        const ali = Mouse.canvasX - afr.x;
        const ol = Mouse.canvasY - afr.y;
        const pg = this.createView(5);
        pg.setUint8(0, 128, true);
        pg.setInt16(1, 0 | ali, true);
        pg.setInt16(3, 0 | ol, true);
        RelayWs.sendVolatile(pg.buffer);
      }
    }
    static ["spectator"]() {}
    static ["rgbMode"]() {
      if (RelayWs.connected) {
        const mg = Player.isRGB ? 1 : 0;
        const xq = this.createView(3);
        xq.setUint8(0, 0, true);
        xq.setUint8(1, 8, true);
        xq.setUint8(2, mg, true);
        RelayWs.send(xq.buffer);
      }
    }
    static ["biggest"]() {
      if (RelayWs.connected) {
        // Send the raw world position, same fix as positionMass() above -
        // spectatePoint.x/y comes straight from the real server's opcode 17
        // (getSpectateData), already a raw world coordinate. Subtracting
        // WorldData.offset here pre-shifted it by a sender-only value that
        // the receiving side (RelayParser.update -> RelayData.biggest.x/y)
        // never adds back, which is what put the #1 marker in the wrong
        // minimap spot.
        const aat = this.createView(6);
        aat.setUint8(0, 0, true);
        aat.setUint8(1, 16, true);
        aat.setInt16(2, 0 | Camera.spectatePoint.x, true);
        aat.setInt16(4, 0 | Camera.spectatePoint.y, true);
        RelayWs.send(aat.buffer);
      }
    }
  }
  const accountData = {
    gold: "https://i.imgur.com/UaUVo47.png",
    blue: "https://i.imgur.com/hfYVnJ1.png",
    red: "https://i.imgur.com/WLOBWEh.png",
    purple: "https://i.imgur.com/sQTniJp.png",
    green: "https://i.imgur.com/MGZW8Qv.png",
    yellow: "https://i.imgur.com/Z84sBmj.png",
    orange: "https://i.imgur.com/tTDI9L8.png",
    turquoise: "https://i.imgur.com/bpT4ELJ.png",
    pink: "https://i.imgur.com/19Yl3H3.png",
    rainbow: "https://i.imgur.com/e8OLq9q.png",
  };
  class Renderer {
    static ["init"]() {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.pi2 = 2 * Math.PI;
      this.skinMap = new Map();
      this.downloadedSkins = new Map();
      this.knownSkins = {};
      this.commanderPoints = new Set();
      this.rgbTeammates = new Set();
      this.borderImages = new Map();
      this.indicator = this.cacheIndicator();
      this.getKnownSkins();
      BgRender.init();
      RgbCycle.init();
      this.resizeCanvas();
      window.onresize = () => {
        this.resizeCanvas();
      };
    }
    static ["resizeCanvas"]() {
      this.canvas.width = 0 | window.innerWidth;
      this.canvas.height = 0 | window.innerHeight;
    }
    static ["run"]() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.save();
      try {
        this.vanillaGrid();
        const ajd = (this.canvas.width >> 1) / Camera.viewport - Camera.x;
        const ma = (this.canvas.height >> 1) / Camera.viewport - Camera.y;
        this.ctx.scale(Camera.viewport, Camera.viewport);
        this.ctx.translate(ajd, ma);
        RgbCycle.update();
        BgRender.render();
        this.border();
        FoodRender.render();
        this.createSkinMap();
        this.createRGBset();
        this.mouseTracker();
        this.cells();
        this.commands();
        TextRenderer.cleaner();
      } finally {
        this.ctx.restore();
      }
    }
    static ["vanillaGrid"]() {
      if ("off" !== Settings.vanillaGrid) {
        const ahx = this.ctx;
        const kn = Camera.viewport;
        const qs = this.canvas.width / kn;
        const yc = this.canvas.height / kn;
        let zg = (-Camera.x + qs / 2) % 50;
        let ce = (-Camera.y + yc / 2) % 50;
        ahx.strokeStyle = Theme.gridColor;
        ahx.lineWidth = 0 | (Math.min(Theme.gridWidth, 20) * Camera.viewport);
        ahx.globalAlpha = 0.2 * kn;
        for (ahx.beginPath(); zg < qs; ) {
          ahx.moveTo(zg * kn, 0);
          ahx.lineTo(zg * kn, yc * kn);
          zg += 50;
        }
        for (; ce < yc; ) {
          ahx.moveTo(0, ce * kn);
          ahx.lineTo(qs * kn, ce * kn);
          ce += 50;
        }
        ahx.closePath();
        ahx.stroke();
        ahx.globalAlpha = 1;
      }
    }
    static ["border"]() {
      if ("default" === Theme.borderStyle) {
        const sy = this.ctx;
        const dw = Theme.borderWidth >> 1;
        sy.strokeStyle = Theme.borderColor;
        sy.lineWidth = Theme.borderWidth;
        sy.strokeRect(
          WorldData.left - dw,
          WorldData.top - dw,
          WorldData.edge + Theme.borderWidth,
          WorldData.edge + Theme.borderWidth,
        );
      } else {
        this.animatedBorder(Theme.borderStyle);
      }
    }
    static ["animatedBorder"](kq) {
      const dl = accountData[kq];
      if (!dl) {
        return;
      }
      const aaf = this.getBorderImage(kq, dl);
      if (!aaf) {
        return;
      }
      const sy = this.ctx;
      const dw = Theme.borderWidth >> 1;
      const akc = WorldData.left - dw;
      const mx = WorldData.top - dw;
      const aid = WorldData.edge + Theme.borderWidth;
      // Clip to a rectangular ring (outer border box minus the inner map
      // area) so the texture only ever paints the border band - regardless
      // of the source image's actual transparency, the play area itself
      // can never get covered.
      sy.save();
      sy.beginPath();
      sy.rect(akc, mx, aid, aid);
      sy.rect(
        WorldData.left + dw,
        WorldData.top + dw,
        WorldData.edge - Theme.borderWidth,
        WorldData.edge - Theme.borderWidth,
      );
      sy.clip("evenodd");
      // NOTE: this used to rotate an oversized (~1.45x) copy of the image
      // through the clip to guarantee corner coverage at every angle.
      // Chromium silently draws nothing when drawImage's destination rect
      // extends past the clip's own outer edge (confirmed: fillRect with
      // the exact same oversized rect + clip renders fine, drawImage does
      // not - a real rendering quirk, not a logic bug). Animating via a
      // hue-rotate filter instead sidesteps it entirely: no oversizing, no
      // rotation, the image is drawn once at its exact bounding box (the
      // same draw that already works), and the color itself cycles - which
      // reads as "shimmering" at least as well as a spinning frame would.
      // Only "rainbow" gets the full 0-360 sweep - a full hue cycle on any
      // OTHER color eventually passes through every other color too, so
      // picking e.g. "Pink" would drift through gold/green/blue over time
      // and look indistinguishable from every other style. Named colors
      // instead get a small back-and-forth wobble around their own hue.
      const ys = "rainbow" === kq ? ((GameLoop.time / 6000) % 1) * 360 : Math.sin(GameLoop.time / 1500) * 15;
      sy.filter = "hue-rotate(" + ys + "deg)";
      sy.drawImage(aaf, akc, mx, aid, aid);
      sy.filter = "none";
      sy.restore();
    }
    static ["getBorderImage"](kq, dl) {
      const sm = this.borderImages.get(kq);
      if (sm) {
        return sm.ready ? sm.img : null;
      }
      const aaf = new Image();
      const ahq = { img: aaf, ready: false };
      this.borderImages.set(kq, ahq);
      aaf.onload = () => {
        ahq.ready = true;
      };
      aaf.onerror = () => {};
      aaf.src = dl;
      return null;
    }
    static ["cells"]() {
      const amh = this.ctx;
      const ait = Settings.cellMass !== "off";
      const acv = Settings.cellNick !== "off";
      const ajs = Settings.hideOwnNick === "on";
      const afz = Settings.hideOwnMass === "on";
      const jy = Settings.urlSkins === "on";
      const arb = Settings.arbSkins === "on";
      const aal = Settings.teamIndicator === "on";
      const nl = Settings.multiboxRing === "on";
      const mc = Settings.multiboxCellColor === "on";
      const en = Theme.indicatorSize;
      const afc = Theme.cellTransparency / 100;
      const b = Theme.cellNickSize / 100;
      const io = Theme.cellMassSize / 100;
      const xe = Settings.cellTextAnimation;
      const ph = Theme.multiboxActive;
      const bm = Theme.multiboxInactive;
      const iv = Theme.multiboxRingWidth;
      const no = Theme.lightenCellColor / 100;
      amh.strokeStyle = Theme.virusBorderColor;
      amh.lineWidth = Theme.virusBorderWidth;
      for (const aeq of CellData.sortedCells) {
        const wx = !aeq.isVirus && !aeq.isEjected && this.skinMap.has(this.skinKey(aeq.nick, aeq.colorHex));
        aeq.animate();
        let gu = 1;
        const alp = {
          x: 0x0,
          y: 0x0,
        };
        const w = aeq.cellType === 2 ? WorldData.position : alp;
        if (aeq.fadeStartTime) {
          gu = 1 - (GameLoop.time - aeq.fadeStartTime) / Settings.CellAnimation;
          gu = Math.max(0, Math.min(1, gu));
        }
        amh.beginPath();
        amh.arc(aeq.animX - w.x, aeq.animY - w.y, aeq.animRadius + 5, 0, this.pi2, true);
        amh.closePath();
        if (aeq.isVirus) {
          amh.fillStyle = Theme.virusColor;
          amh.globalAlpha = 0.7;
          amh.fill();
          amh.globalAlpha = 1;
          amh.stroke();
        } else if ("radiant" === Theme.cellTransparencyStyle) {
          const mn = 0 | (aeq.colorObject.r * no);
          const ajn = 0 | (aeq.colorObject.g * no);
          const aih = 0 | (aeq.colorObject.b * no);
          const akg = afc * gu;
          const eo = aeq.animRadius + 5;
          const xy = aeq.animX - w.x;
          const aiu = aeq.animY - w.y;
          const ti = amh.createRadialGradient(xy, aiu, 0, xy, aiu, eo);
          ti.addColorStop(0, "rgba(" + mn + "," + ajn + "," + aih + "," + akg * 0.6 + ")");
          ti.addColorStop(1, "rgba(" + mn + "," + ajn + "," + aih + "," + akg + ")");
          amh.fillStyle = ti;
          amh.fill();
        } else {
          amh.fillStyle =
            mc && aeq.isMine ? (aeq.cellType === Player.typeID ? ph : bm) : RgbCycle.getColor(aeq.colorObject, no);
          if (afc * gu < 1) {
            amh.globalAlpha = afc * gu;
            amh.fill();
            amh.globalAlpha = 1;
          } else {
            amh.fill();
          }
        }
        if (aeq.isEjected) {
          continue;
        }
        if (!aeq.isVirus && gu === 1 && aal && !aeq.isMine && wx && aeq.animRadius * Camera.viewport < 50) {
          amh.drawImage(
            this.indicator,
            aeq.animX - w.x - en / 2,
            aeq.animY - w.y - aeq.animRadius - 10 - en,
            en,
            en,
          );
        }
        let gk = Renderer.code2Url(Renderer.getImgurCode(aeq.skin || "")).includes("XXXXXXX") ? aeq.skin : aeq.arbSkin;
        const dk = wx && jy && this.getCustomSkin(this.skinKey(aeq.nick, aeq.colorHex));
        const akw =
          arb && !dk && gk && this.knownSkins.hasOwnProperty(gk.replace(/free\/|.png/, "")) && this.get3rbSkin(gk);
        if (dk) {
          amh.drawImage(
            dk,
            aeq.animX - w.x - (aeq.animRadius + 5),
            aeq.animY - w.y - (aeq.animRadius + 5),
            2 * (aeq.animRadius + 5),
            2 * (aeq.animRadius + 5),
          );
        } else if (akw) {
          amh.drawImage(
            akw,
            aeq.animX - w.x - (aeq.animRadius + 5),
            aeq.animY - w.y - (aeq.animRadius + 5),
            2 * (aeq.animRadius + 5),
            2 * (aeq.animRadius + 5),
          );
        }
        if (aeq.isMine && nl) {
          const jm = (aeq.animRadius * iv) / 100;
          amh.beginPath();
          amh.arc(aeq.animX - w.x, aeq.animY - w.y, aeq.animRadius + 5 - (jm >> 1), 0, this.pi2, true);
          amh.closePath();
          amh.lineWidth = jm | 0;
          amh.strokeStyle = aeq.cellType === Player.typeID ? ph : bm;
          amh.stroke();
          amh.strokeStyle = Theme.virusBorderColor;
          amh.lineWidth = Theme.virusBorderWidth;
        }
        if (gu === 1 && ((aeq.isMine && !ajs) || (!aeq.isMine && acv))) {
          const ax = TextRenderer.nick(aeq);
          if (ax) {
            const ik =
              xe === "on" ? aeq.animRadius : xe === "stepped" ? 50 + 75 * ((aeq.animRadius / 75) | 0) : aeq.radius;
            const qh = (ik * b * 0.3 + 6 / Camera.viewport) / ax.height;
            const nn = ax.width * qh;
            const aem = ax.height * qh;
            if (nn > 0 && aem > 0) {
              amh.drawImage(
                ax,
                aeq.animX - w.x - (nn >> 1),
                aeq.animY - w.y - (aem >> 1),
                nn,
                aem,
              );
            }
          }
        }
        if (gu === 1 && ((aeq.isMine && !afz) || (!aeq.isMine && ait))) {
          const mk = TextRenderer.mass(aeq);
          if (mk) {
            const ep =
              xe === "on" ? aeq.animRadius : xe === "stepped" ? 50 + 75 * ((aeq.animRadius / 75) | 0) : aeq.radius;
            const lg = (ep * io * 0.3 + 6 / Camera.viewport) / mk.height;
            const oz = mk.width * lg;
            const ue = mk.height * lg;
            const gj =
              aeq.isUnnamed || (aeq.isMine && ajs) || (!aeq.isMine && !acv) ? -(ue >> 1) : ue >> 2;
            if (oz > 0 && ue > 0) {
              amh.drawImage(
                mk,
                aeq.animX - w.x - (oz >> 1),
                aeq.animY - w.y + gj,
                oz,
                ue,
              );
            }
          }
        }
      }
    }
    static ["createSkinMap"]() {
      this.arbSkin = $("#arbSkin").val();
      this.skinMap.clear();
      // Keys are "base nick + player color" (see skinKey). Every cell of a
      // player carries that player's color, whichever socket it arrived on,
      // so each tab maps to exactly one key and renders one skin - unlike
      // worldID+cellType keying, where a multibox teammate's cells arrive on
      // both of the friend's sockets (cellType 1 AND 2 copies), so both
      // tabs' cells received both skins and the overlapping copies drew one
      // of them at random. Colors are server-assigned per spawn and stable
      // for the player's whole life.
      const u1 = Player.skin.includes("XXXXXXX") ? "" : this.code2Url(Player.skin);
      const u2 = Player.skin2 ? this.code2Url(Player.skin2) : u1;
      const arb = this.arbSkin
        ? "./res/skins/free/" + this.arbSkin.replace(/free\/|.png/g, "") + ".png"
        : "";
      const k1 = this.skinKey(Player.nick, Player.colorHex);
      const k2 = this.skinKey(Player.nick2 || Player.nick, Player.colorHex2);
      if (u1) {
        this.skinMap.set(k1, u1);
      } else if (arb) {
        this.skinMap.set(k1, arb);
      }
      if (u2) {
        this.skinMap.set(k2, u2);
      } else if (arb) {
        this.skinMap.set(k2, arb);
      }
      for (const agl of RelayData.teamPlayers.values())
        if (agl.isAlive) {
          const t1 = !agl.skin.includes("XXXXXXX") ? this.code2Url(agl.skin) : "";
          if (agl.skin2Color) {
            // No tab-2 skin: tab-1's skin doubles for tab-2 cells, mirroring
            // the sender's own map (createSkinMap sets both its keys to the
            // same URL when skin2 is empty). Tab-1's invalid sentinel must
            // not swallow tab-2: a teammate with a valid tab-2 skin but no
            // tab-1 skin still gets their tab-2 cells skinned.
            const t2 =
              agl.skin2 && !agl.skin2.includes("XXXXXXX") ? this.code2Url(agl.skin2) : t1;
            if (t2) {
              this.skinMap.set(this.skinKey(agl.nick2 || agl.nick, agl.skin2Color), t2);
            }
          }
          if (t1) {
            this.skinMap.set(this.skinKey(agl.nick, agl.colorHex), t1);
          }
        }
    }
    static ["skinKey"](nick, colorHex) {
      let base = nick.substring(nick.indexOf("}") + 1);
      base = base.replace(/^\[[^\]]*\]\s*/, "");
      base = base.replace("%*^", "");
      return base + colorHex;
    }
    static ["createRGBset"]() {
      this.rgbTeammates.clear();
      if (Player.isRGB) {
        this.rgbTeammates.add(Player.worldID);
      }
      for (const ok of RelayData.teamPlayers.values())
        if (ok.isAlive && ok.isRGB) {
          this.rgbTeammates.add(ok.worldID);
        }
    }
    static ["getCustomSkin"](aks) {
      const pr = this.skinMap.get(aks);
      if (!pr) {
        return false;
      }
      const ym = this.downloadedSkins.get(pr);
      return undefined === ym ? (this.downloadSkin(pr), false) : ym;
    }
    static ["get3rbSkin"](fd) {
      const rs = this.downloadedSkins.get(fd);
      return undefined === rs ? (this.download3rbSkin(fd), false) : rs;
    }
    static ["download3rbSkin"](jc) {
      this.downloadedSkins.set(jc, false);
      const oc = new Image();
      oc.crossOrigin = "anonymous";
      oc.onload = () => {
        this.cropSkinBitmap(oc, (bit) => {
          this.downloadedSkins.set(jc, bit);
        });
      };
      oc.src = "./res/skins/free/" + jc.replace(/free\/|.png/g, "") + ".png";
    }
    static ["downloadSkin"](oa) {
      this.downloadedSkins.set(oa, false);
      const il = new Image();
      il.crossOrigin = "anonymous";
      il.onload = () => {
        this.cropSkinBitmap(il, (bit) => {
          this.downloadedSkins.set(oa, bit);
        });
      };
      il.src = oa;
    }
    static ["cropSkinBitmap"](img, done) {
      // Circular-crop + PNG encode OFF the main thread. The old canvas +
      // toDataURL() path ran its multi-hundred-ms PNG encode synchronously on
      // the render thread whenever a skin image finished loading - and that
      // load fires at arbitrary times (every respawn/color change for you,
      // your tabs, or a skinned friend), which is exactly the recurring
      // random ~1s freeze. OffscreenCanvas rasterizes in a worker thread;
      // drawImage accepts the resulting ImageBitmap directly.
      if ("undefined" === typeof OffscreenCanvas) {
        done(null);
        return;
      }
      try {
        const adv = new OffscreenCanvas(512, 512);
        const acz = adv.getContext("2d");
        acz.beginPath();
        acz.arc(256, 256, 256, 0, 2 * Math.PI, true);
        acz.closePath();
        acz.clip();
        acz.drawImage(img, 0, 0, 512, 512);
        adv
          .convertToBlob({ type: "image/png" })
          .then((blob) => createImageBitmap(blob))
          .then(done)
          .catch(() => done(null));
      } catch (e) {
        done(null);
      }
    }
    static ["getImgurCode"](ajz) {
      if (!ajz) {
        return "XXXXXXX";
      }
      // Accepts the direct-image link (i.imgur.com/CODE.png), the plain
      // webpage link people actually copy by default (imgur.com/CODE, no
      // "i." subdomain, no extension), and album/gallery links - the old
      // regex only matched the first form, so pasting the normal share
      // link silently fell through to "invalid" every time.
      const ahb = ajz.match(/(?:https?:\/\/)?(?:i\.)?imgur\.com\/(?:a\/|gallery\/)?([a-zA-Z0-9]{5,8})(?:\.(?:png|jpe?g|gifv?|webp))?/i);
      return null === ahb ? "XXXXXXX" : ahb[1];
    }
    static ["getRaindowFlag"](xx) {
      return null !== xx.match(/#hue\s??=\s??auto\s??,\s??blend\s??=\s??auto/i);
    }
    static ["code2Url"](aae) {
      return "https://i.imgur.com/" + aae + ".png";
    }
    static ["commands"]() {
      const afn = this.ctx;
      const ui = "off" === Settings.commander;
      afn.strokeStyle = "#ffffff";
      afn.lineWidth = 5;
      for (const acg of this.commanderPoints.values()) {
        const ack = acg.x;
        const ai = acg.y;
        const iw = GameLoop.time - acg.time;
        if (iw > 1250) {
          this.commanderPoints["delete"](acg);
        } else {
          if (!(ui || 1 > iw)) {
            const ako = (1000 * iw) / 1250;
            afn.globalAlpha = ako > 333 ? (1000 - ako) / 667 : 1;
            const ut = afn.createRadialGradient(ack, ai, 0.7 * ako, ack, ai, ako);
            ut.addColorStop(0, "rgba(0,0,0,0)");
            ut.addColorStop(1, Theme.commanderColor);
            afn.fillStyle = ut;
            afn.beginPath();
            afn.arc(ack, ai, ako, 0, this.pi2, true);
            afn.closePath();
            afn.fill();
            afn.stroke();
          }
        }
      }
    }
    static ["mouseTracker"]() {
      if ("off" !== Settings.cursorLine) {
        const om = this.ctx;
        om.strokeStyle = "#fff";
        om.lineWidth = 4;
        om.lineCap = "round";
        om.lineJoin = "round";
        const aln = (Mouse.x - this.canvas.width / 2) / Camera.viewport + Camera.x;
        const bo = (Mouse.y - this.canvas.height / 2) / Camera.viewport + Camera.y;
        om.beginPath();
        const wv = {
          x: 0x0,
          y: 0x0,
        };
        const abg = 1 === Player.typeID ? CellData.myCells : CellData.myCells2;
        const abz = 1 === Player.typeID ? wv : WorldData.position;
        for (const act of abg.values()) {
          om.moveTo(act.animX - abz.x, act.animY - abz.y);
          om.lineTo(aln, bo);
        }
        om.closePath();
        om.stroke();
      }
    }
    static async ["getKnownSkins"]() {
      var ne = await fetch("https://3rb.io/php/Skins.php?type=free");
      var acb = await ne.json();
      var ts = Date.now();
      for (let nh = 0; nh < acb.length; nh++) {
        Renderer.knownSkins[acb[nh]] = ts;
      }
      for (let aak in Renderer.knownSkins)
        if (Renderer.knownSkins[aak] != ts) {
          delete Renderer.knownSkins[aak];
        }
    }
    static ["cacheIndicator"]() {
      const ak = document.createElement("canvas");
      ak.width = 150;
      ak.height = 150;
      const uy = ak.getContext("2d");
      uy.textAlign = "center";
      uy.textBaseline = "middle";
      uy.font = "600 150px FontAwesome";
      uy.fillStyle = "rgba(255,255,255,1)";
      uy.fillText("âڈ·آ¸", 75, 75);
      return ak;
    }
  }
  class GameLoop {
    static ["init"]() {
      this.time = Date.now();
      WsConnection.init();
      Storage.init();
      MainMenu.init();
      CellData.init();
      Player.init();
      Camera.init();
      RelayData.init();
      PartyManager.init();
      Account.init();
      Renderer.init();
      this.loop = new RafLoop(() => {
        this.run();
      });
      setInterval(() => {
        Mouse.send();
      }, 40);
      // The relay re-broadcasts every update to every room member, so the
      // heartbeat's cost scales with members × cadence. aliveStatus() is
      // tiny (2 bytes) and still goes out on every tick to keep the
      // server's 6s staleness purge from kicking an idle-but-connected
      // player, while positionMass() (the heavy 9-byte one) only fires
      // when the position/mass actually changed. biggest() stays
      // scouting-only, same condition as before.
      const hbPos = { x: 0, y: 0, m: 0 };
      let hbAlive = -1;
      setInterval(() => {
        RelaySender.aliveStatus();
        const x = 0 | Player.x;
        const y = 0 | Player.y;
        const m = Player.mass;
        if (x !== hbPos.x || y !== hbPos.y || m !== hbPos.m) {
          RelaySender.positionMass();
          hbPos.x = x;
          hbPos.y = y;
          hbPos.m = m;
        }
        if (Player.scouting || (!Player.isAlive && Camera.isSpectating && !Camera.freeSpectate)) {
          RelaySender.biggest();
        }
      }, 500);
      setInterval(() => {
        this.updateRestartCountdown();
      }, 1000);
    }
    static ["updateRestartCountdown"]() {
      const em = $("#server-restart-countdown");
      if (!WsConnection.restartAt) {
        em.text("").removeClass("warning");
        return;
      }
      const zx = WsConnection.restartAt - Date.now();
      if (0 >= zx) {
        em.text("Server restarting...").addClass("warning");
        return;
      }
      const rd = Math.floor(zx / 1000);
      const nc = Math.floor(rd / 60);
      const agr = rd % 60;
      em.text("Server restart in " + nc + ":" + (10 > agr ? "0" : "") + agr);
      em.toggleClass("warning", 60000 > zx);
    }
    static ["run"]() {
      GameLoop.refreshTime();
      CellData.update();
      Player.update();
      Camera.update();
      Renderer.run();
      Minimap.run();
      TeamList.update();
      Stats.update();
      TargetingHud.update();
    }
    static ["browserVersion"]() {
      const air = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
      return !!air && parseInt(air[2], 10);
    }
    static ["refreshTime"]() {
      this.time = Date.now();
    }
  }
  window.onload = () => (
    $("#loading-screen").html(
      '<div class="ls-title">Drag+</div><div class="ls-spinner"><span id="ls-icon"><i class="fa fa-solid fa-circle-notch fa-spin"></i></span><span style="display:block;" id="ls-message">Loading...</span></div>',
    ),
    49 > GameLoop.browserVersion()
      ? ($("#ls-icon").html('<i class="fa fa-chrome" aria-hidden="true"></i>'),
        void $("#ls-message").text(" Only Chrome version 49 or higher are supported."))
      : (Language.init(),
        GameLoop.init(),
        class {
          static ["init"]() {
            this.apiUrl = "";
            this.codeChecked = false;
            this.salt = Storage.get("profiles", "salt") || "";
            this.Code = Storage.get("profiles", "MXCode") || "";
            $("#private-code").val(this.Code);
            this.addEvents();
            this.checkCode();
          }
          static ["addCode"]() {
            this.salt = this.generateCode(5);
            Storage.set("profiles", "salt", this.salt);
            this.MXCode = this.generateCode(10);
            Storage.set("profiles", "Code", this.Code);
            this.sendAddCode();
          }
          static ["addEvents"]() {
            $("#user-code-check").click(() => {
              $("#userCode").fadeOut(250);
              this.checkCode();
            });
          }
          static ["sendAddCode"]() {}
          static ["checkCode"]() {}
          static ["generateCode"](qo) {
            var gp = "";
            for (var alk = 0; alk < qo; alk++) {
              var lf = Math.floor(62 * Math.random());
              var vx = (lf += lf > 9 ? (lf < 36 ? 55 : 61) : 48);
              gp += String.fromCharCode(vx);
            }
            return gp;
          }
          static ["getApiUrl"]() {
            return window.atob(window.atob(window.atob(this.apiUrl)));
          }
        }.init())
  );
})(window, $, document);
