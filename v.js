// Deobfuscated - protection header removed
window.kanm1i = "ghmarab";
(!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (T, e) {
  "use strict";
  var t = [],
    C = T.document,
    n = Object.getPrototypeOf,
    a = t.slice,
    g = t.concat,
    l = t.push,
    i = t.indexOf,
    r = {},
    o = r.toString,
    h = r.hasOwnProperty,
    s = h.toString,
    c = s.call(Object),
    m = {};
  function v(e, t) {
    var n = (t = t || C).createElement("script");
    ((n.text = e), t.head.appendChild(n).parentNode.removeChild(n));
  }
  function u(e, t) {
    return t.toUpperCase();
  }
  var d = "3.2.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    },
    f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    y = /-([a-z])/g;
  function b(e) {
    var t = !!e && "length" in e && e.length,
      n = S.type(e);
    return "function" !== n && !S.isWindow(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
  }
  ((S.fn = S.prototype =
    {
      jquery: d,
      constructor: S,
      length: 0,
      toArray: function () {
        return a.call(this);
      },
      get: function (e) {
        return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function (e) {
        e = S.merge(this.constructor(), e);
        return ((e.prevObject = this), e);
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          }),
        );
      },
      slice: function () {
        return this.pushStack(a.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          e = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= e && e < t ? [this[e]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: l,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o = arguments[0] || {},
          s = 1,
          a = arguments.length,
          l = !1;
        for (
          "boolean" == typeof o && ((l = o), (o = arguments[s] || {}), s++),
            "object" == typeof o || S.isFunction(o) || (o = {}),
            s === a && ((o = this), s--);
          s < a;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              ((i = o[t]),
                (n = e[t]),
                o !== n &&
                  (l && n && (S.isPlainObject(n) || (r = Array.isArray(n)))
                    ? ((i = r ? ((r = !1), i && Array.isArray(i) ? i : []) : i && S.isPlainObject(i) ? i : {}), (o[t] = S.extend(l, i, n)))
                    : void 0 !== n && (o[t] = n)));
        return o;
      }),
    S.extend({
      expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === S.type(e);
      },
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      },
      isPlainObject: function (e) {
        return !(
          !e ||
          "[object Object]" !== o.call(e) ||
          ((e = n(e)) && ("function" != typeof (e = h.call(e, "constructor") && e.constructor) || s.call(e) !== c))
        );
      },
      isEmptyObject: function (e) {
        for (var t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e;
      },
      globalEval: function (e) {
        v(e);
      },
      camelCase: function (e) {
        return e.replace(p, "ms-").replace(y, u);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (b(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(f, "");
      },
      makeArray: function (e, t) {
        t = t || [];
        return (null != e && (b(Object(e)) ? S.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)), t);
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return ((e.length = i), e);
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) != s && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (b(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
        else for (o in e) ((i = t(e[o], o, n)), null != i && s.push(i));
        return g.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r;
        if (("string" == typeof t && ((r = e[t]), (t = e), (e = r)), S.isFunction(e)))
          return (
            (n = a.call(arguments, 2)),
            ((r = function () {
              return e.apply(t || this, n.concat(a.call(arguments)));
            }).guid = e.guid =
              e.guid || S.guid++),
            r
          );
      },
      now: Date.now,
      support: m,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      r["[object " + t + "]"] = t.toLowerCase();
    }));
  var x = (function (n) {
    function d(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
    }
    function r() {
      T();
    }
    var e,
      p,
      x,
      o,
      i,
      h,
      f,
      g,
      w,
      l,
      c,
      T,
      C,
      s,
      S,
      m,
      a,
      u,
      v,
      k = "sizzle" + +new Date(),
      y = n.document,
      E = 0,
      b = 0,
      L = se(),
      A = se(),
      D = se(),
      N = function (e, t) {
        return (e === t && (c = !0), 0);
      },
      j = {}.hasOwnProperty,
      t = [],
      H = t.pop,
      R = t.push,
      M = t.push,
      W = t.slice,
      q = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      X = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      Y = "[\\x20\\t\\r\\n\\f]",
      P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      I =
        "\\[" +
        Y +
        "*(" +
        P +
        ")(?:" +
        Y +
        "*([*^$|!~]?=)" +
        Y +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        P +
        "))|)" +
        Y +
        "*\\]",
      O = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
      F = new RegExp(Y + "+", "g"),
      B = new RegExp("^" + Y + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Y + "+$", "g"),
      $ = new RegExp("^" + Y + "*," + Y + "*"),
      _ = new RegExp("^" + Y + "*([>+~]|" + Y + ")" + Y + "*"),
      z = new RegExp("=" + Y + "*([^\\]'\"]*?)" + Y + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + P + "$"),
      K = {
        ID: new RegExp("^#(" + P + ")"),
        CLASS: new RegExp("^\\.(" + P + ")"),
        TAG: new RegExp("^(" + P + "|[*])"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            Y +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            Y +
            "*(?:([+-]|)" +
            Y +
            "*(\\d+)|))" +
            Y +
            "*\\)|)",
          "i",
        ),
        bool: new RegExp("^(?:" + X + ")$", "i"),
        needsContext: new RegExp("^" + Y + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Y + "*((?:-\\d)?\\d*)" + Y + "*\\)|)(?=[^-]|$)", "i"),
      },
      G = /^(?:input|select|textarea|button)$/i,
      Q = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + Y + "?|(" + Y + ")|.)", "ig"),
      ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      re = function (e, t) {
        return t ? ("\0" === e ? "ï؟½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
      },
      ie = me(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" },
      );
    try {
      (M.apply((t = W.call(y.childNodes)), y.childNodes), t[y.childNodes.length].nodeType);
    } catch (e) {
      M = {
        apply: t.length
          ? function (e, t) {
              R.apply(e, W.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, n, r) {
      var i,
        o,
        s,
        a,
        l,
        c,
        u,
        d = t && t.ownerDocument,
        f = t ? t.nodeType : 9;
      if (((n = n || []), "string" != typeof e || !e || (1 !== f && 9 !== f && 11 !== f))) return n;
      if (!r && ((t ? t.ownerDocument || t : y) !== C && T(t), (t = t || C), S)) {
        if (11 !== f && (l = Z.exec(e)))
          if ((i = l[1])) {
            if (9 === f) {
              if (!(s = t.getElementById(i))) return n;
              if (s.id === i) return (n.push(s), n);
            } else if (d && (s = d.getElementById(i)) && v(t, s) && s.id === i) return (n.push(s), n);
          } else {
            if (l[2]) return (M.apply(n, t.getElementsByTagName(e)), n);
            if ((i = l[3]) && p.getElementsByClassName && t.getElementsByClassName) return (M.apply(n, t.getElementsByClassName(i)), n);
          }
        if (p.qsa && !D[e + " "] && (!m || !m.test(e))) {
          if (1 !== f) ((d = t), (u = e));
          else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? (a = a.replace(ne, re)) : t.setAttribute("id", (a = k)), o = (c = h(e)).length; o--; )
              c[o] = "#" + a + " " + ge(c[o]);
            ((u = c.join(",")), (d = (ee.test(e) && pe(t.parentNode)) || t));
          }
          if (u)
            try {
              return (M.apply(n, d.querySelectorAll(u)), n);
            } catch (e) {
            } finally {
              a === k && t.removeAttribute("id");
            }
        }
      }
      return g(e.replace(B, "$1"), t, n, r);
    }
    function se() {
      var n = [];
      function r(e, t) {
        return (n.push(e + " ") > x.cacheLength && delete r[n.shift()], (r[e + " "] = t));
      }
      return r;
    }
    function ae(e) {
      return ((e[k] = !0), e);
    }
    function le(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        (t.parentNode && t.parentNode.removeChild(t), (t = null));
      }
    }
    function ce(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) x.attrHandle[n[r]] = t;
    }
    function ue(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ie(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function fe(s) {
      return ae(function (o) {
        return (
          (o = +o),
          ae(function (e, t) {
            for (var n, r = s([], e.length, o), i = r.length; i--; ) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function pe(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (e in ((p = oe.support = {}),
    (i = oe.isXML =
      function (e) {
        e = e && (e.ownerDocument || e).documentElement;
        return !!e && "HTML" !== e.nodeName;
      }),
    (T = oe.setDocument =
      function (e) {
        var t,
          e = e ? e.ownerDocument || e : y;
        return (
          e !== C &&
            9 === e.nodeType &&
            e.documentElement &&
            ((s = (C = e).documentElement),
            (S = !i(C)),
            y !== C &&
              (t = C.defaultView) &&
              t.top !== t &&
              (t.addEventListener ? t.addEventListener("unload", r, !1) : t.attachEvent && t.attachEvent("onunload", r)),
            (p.attributes = le(function (e) {
              return ((e.className = "i"), !e.getAttribute("className"));
            })),
            (p.getElementsByTagName = le(function (e) {
              return (e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length);
            })),
            (p.getElementsByClassName = J.test(C.getElementsByClassName)),
            (p.getById = le(function (e) {
              return ((s.appendChild(e).id = k), !C.getElementsByName || !C.getElementsByName(k).length);
            })),
            p.getById
              ? ((x.filter.ID = function (e) {
                  var t = e.replace(te, d);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (x.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && S) {
                    e = t.getElementById(e);
                    return e ? [e] : [];
                  }
                }))
              : ((x.filter.ID = function (e) {
                  var t = e.replace(te, d);
                  return function (e) {
                    e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return e && e.value === t;
                  };
                }),
                (x.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && S) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                    }
                    return [];
                  }
                })),
            (x.find.TAG = p.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" !== e) return o;
                  for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                  return r;
                }),
            (x.find.CLASS =
              p.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e);
              }),
            (a = []),
            (m = []),
            (p.qsa = J.test(C.querySelectorAll)) &&
              (le(function (e) {
                ((s.appendChild(e).innerHTML =
                  "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + Y + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length || m.push("\\[" + Y + "*(?:value|" + X + ")"),
                  e.querySelectorAll("[id~=" + k + "-]").length || m.push("~="),
                  e.querySelectorAll(":checked").length || m.push(":checked"),
                  e.querySelectorAll("a#" + k + "+*").length || m.push(".#.+[+~]"));
              }),
              le(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                (t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length && m.push("name" + Y + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                  (s.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  m.push(",.*:"));
              })),
            (p.matchesSelector = J.test(
              (u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector),
            )) &&
              le(function (e) {
                ((p.disconnectedMatch = u.call(e, "*")), u.call(e, "[s!='']:x"), a.push("!=", O));
              }),
            (m = m.length && new RegExp(m.join("|"))),
            (a = a.length && new RegExp(a.join("|"))),
            (t = J.test(s.compareDocumentPosition)),
            (v =
              t || J.test(s.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      t = t && t.parentNode;
                    return (
                      e === t ||
                      !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (N = t
              ? function (e, t) {
                  if (e === t) return ((c = !0), 0);
                  var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                    (!p.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === C || (e.ownerDocument === y && v(y, e))
                        ? -1
                        : t === C || (t.ownerDocument === y && v(y, t))
                          ? 1
                          : l
                            ? q(l, e) - q(l, t)
                            : 0
                      : 4 & n
                        ? -1
                        : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return ((c = !0), 0);
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : l ? q(l, e) - q(l, t) : 0;
                  if (i === o) return ue(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (; s[r] === a[r]; ) r++;
                  return r ? ue(s[r], a[r]) : s[r] === y ? -1 : a[r] === y ? 1 : 0;
                })),
          C
        );
      }),
    (oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }),
    (oe.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== C && T(e),
        (t = t.replace(z, "='$1']")),
        p.matchesSelector && S && !D[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t)))
      )
        try {
          var n = u.call(e, t);
          if (n || p.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
        } catch (e) {}
      return 0 < oe(t, C, null, [e]).length;
    }),
    (oe.contains = function (e, t) {
      return ((e.ownerDocument || e) !== C && T(e), v(e, t));
    }),
    (oe.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = x.attrHandle[t.toLowerCase()],
        n = n && j.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
      return void 0 !== n ? n : p.attributes || !S ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
    }),
    (oe.escape = function (e) {
      return (e + "").replace(ne, re);
    }),
    (oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (oe.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (((c = !p.detectDuplicates), (l = !p.sortStable && e.slice(0)), e.sort(N), c)) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
        for (; r--; ) e.splice(n[r], 1);
      }
      return ((l = null), e);
    }),
    (o = oe.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += o(t);
        return n;
      }),
    ((x = oe.selectors =
      {
        cacheLength: 50,
        createPseudo: ae,
        match: K,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, d)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, d)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return K.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    U.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, d).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = L[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + Y + ")" + e + "(" + Y + "|$)")) &&
                L(e, function (e) {
                  return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                }))
            );
          },
          ATTR: function (t, n, r) {
            return function (e) {
              e = oe.attr(e, t);
              return null == e
                ? "!=" === n
                : !n ||
                    ((e += ""),
                    "=" === n
                      ? e === r
                      : "!=" === n
                        ? e !== r
                        : "^=" === n
                          ? r && 0 === e.indexOf(r)
                          : "*=" === n
                            ? r && -1 < e.indexOf(r)
                            : "$=" === n
                              ? r && e.slice(-r.length) === r
                              : "~=" === n
                                ? -1 < (" " + e.replace(F, " ") + " ").indexOf(r)
                                : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"));
            };
          },
          CHILD: function (h, e, t, g, m) {
            var v = "nth" !== h.slice(0, 3),
              y = "last" !== h.slice(-4),
              b = "of-type" === e;
            return 1 === g && 0 === m
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    s,
                    a,
                    l,
                    c = v != y ? "nextSibling" : "previousSibling",
                    u = e.parentNode,
                    d = b && e.nodeName.toLowerCase(),
                    f = !n && !b,
                    p = !1;
                  if (u) {
                    if (v) {
                      for (; c; ) {
                        for (s = e; (s = s[c]); ) if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                        l = c = "only" === h && !l && "nextSibling";
                      }
                      return !0;
                    }
                    if (((l = [y ? u.firstChild : u.lastChild]), y && f)) {
                      for (
                        p = (a = (r = (i = (o = (s = u)[k] || (s[k] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === E && r[1]) && r[2],
                          s = a && u.childNodes[a];
                        (s = (++a && s && s[c]) || (p = a = 0) || l.pop());
                      )
                        if (1 === s.nodeType && ++p && s === e) {
                          i[h] = [E, a, p];
                          break;
                        }
                    } else if (
                      (f && (p = a = (r = (i = (o = (s = e)[k] || (s[k] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === E && r[1]),
                      !1 === p)
                    )
                      for (
                        ;
                        (s = (++a && s && s[c]) || (p = a = 0) || l.pop()) &&
                        ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) ||
                          !++p ||
                          (f && ((i = (o = s[k] || (s[k] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [E, p]), s !== e));
                      );
                    return (p -= m) === g || (p % g == 0 && 0 <= p / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
            return s[k]
              ? s(o)
              : 1 < s.length
                ? ((t = [e, e, "", o]),
                  x.setFilters.hasOwnProperty(e.toLowerCase())
                    ? ae(function (e, t) {
                        for (var n, r = s(e, o), i = r.length; i--; ) e[(n = q(e, r[i]))] = !(t[n] = r[i]);
                      })
                    : function (e) {
                        return s(e, 0, t);
                      })
                : s;
          },
        },
        pseudos: {
          not: ae(function (e) {
            var r = [],
              i = [],
              a = f(e.replace(B, "$1"));
            return a[k]
              ? ae(function (e, t, n, r) {
                  for (var i, o = a(e, null, r, []), s = e.length; s--; ) (i = o[s]) && (e[s] = !(t[s] = i));
                })
              : function (e, t, n) {
                  return ((r[0] = e), a(r, null, n, i), (r[0] = null), !i.pop());
                };
          }),
          has: ae(function (t) {
            return function (e) {
              return 0 < oe(t, e).length;
            };
          }),
          contains: ae(function (t) {
            return (
              (t = t.replace(te, d)),
              function (e) {
                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t);
              }
            );
          }),
          lang: ae(function (n) {
            return (
              V.test(n || "") || oe.error("unsupported lang: " + n),
              (n = n.replace(te, d).toLowerCase()),
              function (e) {
                var t;
                do {
                  if ((t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")))
                    return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === s;
          },
          focus: function (e) {
            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: de(!1),
          disabled: de(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
          },
          selected: function (e) {
            return (e.parentNode && e.parentNode.selectedIndex, !0 === e.selected);
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !x.pseudos.empty(e);
          },
          header: function (e) {
            return Q.test(e.nodeName);
          },
          input: function (e) {
            return G.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
          },
          first: fe(function () {
            return [0];
          }),
          last: fe(function (e, t) {
            return [t - 1];
          }),
          eq: fe(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: fe(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: fe(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: fe(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: fe(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = x.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      x.pseudos[e] = (function (t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      })(e);
    for (e in { submit: !0, reset: !0 })
      x.pseudos[e] = (function (n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      })(e);
    function he() {}
    function ge(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function me(s, e, t) {
      var a = e.dir,
        l = e.next,
        c = l || a,
        u = t && "parentNode" === c,
        d = b++;
      return e.first
        ? function (e, t, n) {
            for (; (e = e[a]); ) if (1 === e.nodeType || u) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o = [E, d];
            if (n) {
              for (; (e = e[a]); ) if ((1 === e.nodeType || u) && s(e, t, n)) return !0;
            } else
              for (; (e = e[a]); )
                if (1 === e.nodeType || u)
                  if (((r = (i = e[k] || (e[k] = {}))[e.uniqueID] || (i[e.uniqueID] = {})), l && l === e.nodeName.toLowerCase())) e = e[a] || e;
                  else {
                    if ((i = r[c]) && i[0] === E && i[1] === d) return (o[2] = i[2]);
                    if (((r[c] = o)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function ve(i) {
      return 1 < i.length
        ? function (e, t, n) {
            for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function ye(e, t, n, r, i) {
      for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), c && t.push(a)));
      return s;
    }
    function be(p, h, g, m, v, e) {
      return (
        m && !m[k] && (m = be(m)),
        v && !v[k] && (v = be(v, e)),
        ae(function (e, t, n, r) {
          var i,
            o,
            s,
            a = [],
            l = [],
            c = t.length,
            u =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            d = !p || (!e && h) ? u : ye(u, a, p, n, r),
            f = g ? (v || (e ? p : c || m) ? [] : t) : d;
          if ((g && g(d, f, n, r), m)) for (i = ye(f, l), m(i, [], n, r), o = i.length; o--; ) (s = i[o]) && (f[l[o]] = !(d[l[o]] = s));
          if (e) {
            if (v || p) {
              if (v) {
                for (i = [], o = f.length; o--; ) (s = f[o]) && i.push((d[o] = s));
                v(null, (f = []), i, r);
              }
              for (o = f.length; o--; ) (s = f[o]) && -1 < (i = v ? q(e, s) : a[o]) && (e[i] = !(t[i] = s));
            }
          } else ((f = ye(f === t ? f.splice(c, f.length) : f)), v ? v(null, t, f, r) : M.apply(t, f));
        })
      );
    }
    function xe(m, v) {
      function e(e, t, n, r, i) {
        var o,
          s,
          a,
          l = 0,
          c = "0",
          u = e && [],
          d = [],
          f = w,
          p = e || (b && x.find.TAG("*", i)),
          h = (E += null == f ? 1 : Math.random() || 0.1),
          g = p.length;
        for (i && (w = t === C || t || i); c !== g && null != (o = p[c]); c++) {
          if (b && o) {
            for (s = 0, t || o.ownerDocument === C || (T(o), (n = !S)); (a = m[s++]); )
              if (a(o, t || C, n)) {
                r.push(o);
                break;
              }
            i && (E = h);
          }
          y && ((o = !a && o) && l--, e && u.push(o));
        }
        if (((l += c), y && c !== l)) {
          for (s = 0; (a = v[s++]); ) a(u, d, t, n);
          if (e) {
            if (0 < l) for (; c--; ) u[c] || d[c] || (d[c] = H.call(r));
            d = ye(d);
          }
          (M.apply(r, d), i && !e && 0 < d.length && 1 < l + v.length && oe.uniqueSort(r));
        }
        return (i && ((E = h), (w = f)), u);
      }
      var y = 0 < v.length,
        b = 0 < m.length;
      return y ? ae(e) : e;
    }
    return (
      (he.prototype = x.filters = x.pseudos),
      (x.setFilters = new he()),
      (h = oe.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            s,
            a,
            l,
            c = A[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (s = e, a = [], l = x.preFilter; s; ) {
            for (o in ((n && !(r = $.exec(s))) || (r && (s = s.slice(r[0].length) || s), a.push((i = []))),
            (n = !1),
            (r = _.exec(s)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace(B, " ") }), (s = s.slice(n.length))),
            x.filter))
              !(r = K[o].exec(s)) ||
                (l[o] && !(r = l[o](r))) ||
                ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? oe.error(e) : A(e, a).slice(0);
        }),
      (f = oe.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = D[e + " "];
          if (!o) {
            for (n = (t = t || h(e)).length; n--; )
              ((o = (function e(t) {
                for (
                  var r,
                    n,
                    i,
                    o = t.length,
                    s = x.relative[t[0].type],
                    a = s || x.relative[" "],
                    l = s ? 1 : 0,
                    c = me(
                      function (e) {
                        return e === r;
                      },
                      a,
                      !0,
                    ),
                    u = me(
                      function (e) {
                        return -1 < q(r, e);
                      },
                      a,
                      !0,
                    ),
                    d = [
                      function (e, t, n) {
                        return ((n = (!s && (n || t !== w)) || ((r = t).nodeType ? c : u)(e, t, n)), (r = null), n);
                      },
                    ];
                  l < o;
                  l++
                )
                  if ((n = x.relative[t[l].type])) d = [me(ve(d), n)];
                  else {
                    if ((n = x.filter[t[l].type].apply(null, t[l].matches))[k]) {
                      for (i = ++l; i < o && !x.relative[t[i].type]; i++);
                      return be(
                        1 < l && ve(d),
                        1 < l && ge(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(B, "$1"),
                        n,
                        l < i && e(t.slice(l, i)),
                        i < o && e((t = t.slice(i))),
                        i < o && ge(t),
                      );
                    }
                    d.push(n);
                  }
                return ve(d);
              })(t[n]))[k]
                ? r
                : i
              ).push(o);
            (o = D(e, xe(i, r))).selector = e;
          }
          return o;
        }),
      (g = oe.select =
        function (e, t, n, r) {
          var i,
            o,
            s,
            a,
            l,
            c = "function" == typeof e && e,
            u = !r && h((e = c.selector || e));
          if (((n = n || []), 1 === u.length)) {
            if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && S && x.relative[o[1].type]) {
              if (!(t = (x.find.ID(s.matches[0].replace(te, d), t) || [])[0])) return n;
              (c && (t = t.parentNode), (e = e.slice(o.shift().value.length)));
            }
            for (i = K.needsContext.test(e) ? 0 : o.length; i-- && ((s = o[i]), !x.relative[(a = s.type)]); )
              if ((l = x.find[a]) && (r = l(s.matches[0].replace(te, d), (ee.test(o[0].type) && pe(t.parentNode)) || t))) {
                if ((o.splice(i, 1), !(e = r.length && ge(o)))) return (M.apply(n, r), n);
                break;
              }
          }
          return ((c || f(e, u))(r, t, !S, n, !t || (ee.test(e) && pe(t.parentNode)) || t), n);
        }),
      (p.sortStable = k.split("").sort(N).join("") === k),
      (p.detectDuplicates = !!c),
      T(),
      (p.sortDetached = le(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      le(function (e) {
        return ((e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href"));
      }) ||
        ce("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (p.attributes &&
        le(function (e) {
          return ((e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value"));
        })) ||
        ce("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      le(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        ce(X, function (e, t, n) {
          if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null;
        }),
      oe
    );
  })(T);
  ((S.find = x),
    (S.expr = x.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = x.uniqueSort),
    (S.text = x.getText),
    (S.isXMLDoc = x.isXML),
    (S.contains = x.contains),
    (S.escapeSelector = x.escape));
  function w(e, t, n) {
    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    return r;
  }
  function k(e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  var E = S.expr.match.needsContext;
  function L(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;
  function N(e, n, r) {
    return S.isFunction(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
        ? S.grep(e, function (e) {
            return (e === n) !== r;
          })
        : "string" != typeof n
          ? S.grep(e, function (e) {
              return -1 < i.call(n, e) !== r;
            })
          : D.test(n)
            ? S.filter(n, e, r)
            : ((n = S.filter(n, e)),
              S.grep(e, function (e) {
                return -1 < i.call(n, e) !== r && 1 === e.nodeType;
              }));
  }
  ((S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            }),
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            }),
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(N(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(N(this, e || [], !0));
      },
      is: function (e) {
        return !!N(this, "string" == typeof e && E.test(e) ? S(e) : e || [], !1).length;
      },
    }));
  var j,
    H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (((S.fn.init = function (e, t, n) {
    if (!e) return this;
    if (((n = n || j), "string" != typeof e))
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : S.isFunction(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(S)
          : S.makeArray(e, this);
    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : H.exec(e)) || (!r[1] && t))
      return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
    if (r[1]) {
      if (
        ((t = t instanceof S ? t[0] : t),
        S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)),
        A.test(r[1]) && S.isPlainObject(t))
      )
        for (var r in t) S.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
      return this;
    }
    return ((e = C.getElementById(r[2])) && ((this[0] = e), (this.length = 1)), this);
  }).prototype = S.fn),
    (j = S(C)));
  var R = /^(?:parents|prev(?:Until|All))/,
    M = { children: !0, contents: !0, next: !0, prev: !0 };
  function W(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  (S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        s = "string" != typeof e && S(e);
      if (!E.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          e = e.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (e) {
          return w(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return w(e, "parentNode", n);
        },
        next: function (e) {
          return W(e, "nextSibling");
        },
        prev: function (e) {
          return W(e, "previousSibling");
        },
        nextAll: function (e) {
          return w(e, "nextSibling");
        },
        prevAll: function (e) {
          return w(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return w(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return w(e, "previousSibling", n);
        },
        siblings: function (e) {
          return k((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return k(e.firstChild);
        },
        contents: function (e) {
          return L(e, "iframe") ? e.contentDocument : (L(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (M[r] || S.uniqueSort(n), R.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      },
    ));
  var q = /[^\x20\t\r\n\f]+/g;
  function X(e) {
    return e;
  }
  function Y(e) {
    throw e;
  }
  function P(e, t, n, r) {
    var i;
    try {
      e && S.isFunction((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && S.isFunction((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  ((S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(q) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    function i() {
      for (a = a || r.once, s = o = !0; c.length; u = -1)
        for (t = c.shift(); ++u < l.length; ) !1 === l[u].apply(t[0], t[1]) && r.stopOnFalse && ((u = l.length), (t = !1));
      (r.memory || (t = !1), (o = !1), a && (l = t ? [] : ""));
    }
    var o,
      t,
      s,
      a,
      l = [],
      c = [],
      u = -1,
      d = {
        add: function () {
          return (
            l &&
              (t && !o && ((u = l.length - 1), c.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  S.isFunction(t) ? (r.unique && d.has(t)) || l.push(t) : t && t.length && "string" !== S.type(t) && n(t);
                });
              })(arguments),
              t && !o && i()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              for (var n; -1 < (n = S.inArray(t, l, n)); ) (l.splice(n, 1), n <= u && u--);
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, l) : 0 < l.length;
        },
        empty: function () {
          return ((l = l && []), this);
        },
        disable: function () {
          return ((a = c = []), (l = t = ""), this);
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return ((a = c = []), t || o || (l = t = ""), this);
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (a || ((t = [e, (t = t || []).slice ? t.slice() : t]), c.push(t), o || i()), this);
        },
        fire: function () {
          return (d.fireWith(this, arguments), this);
        },
        fired: function () {
          return !!s;
        },
      };
    return d;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
            ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"],
          ],
          i = "pending",
          s = {
            state: function () {
              return i;
            },
            always: function () {
              return (a.done(arguments).fail(arguments), this);
            },
            catch: function (e) {
              return s.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                (S.each(o, function (e, t) {
                  var n = S.isFunction(i[t[4]]) && i[t[4]];
                  a[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && S.isFunction(e.promise)
                      ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null));
              }).promise();
            },
            then: function (t, n, r) {
              var l = 0;
              function c(i, o, s, a) {
                return function () {
                  function e() {
                    var e, t;
                    if (!(i < l)) {
                      if ((e = s.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      ((t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                        S.isFunction(t)
                          ? a
                            ? t.call(e, c(l, o, X, a), c(l, o, Y, a))
                            : (l++, t.call(e, c(l, o, X, a), c(l, o, Y, a), c(l, o, X, o.notifyWith)))
                          : (s !== X && ((n = void 0), (r = [e])), (a || o.resolveWith)(n, r)));
                    }
                  }
                  var n = this,
                    r = arguments,
                    t = a
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            (S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                              l <= i + 1 && (s !== Y && ((n = void 0), (r = [e])), o.rejectWith(n, r)));
                          }
                        };
                  i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), T.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                (o[0][3].add(c(0, e, S.isFunction(r) ? r : X, e.notifyWith)),
                  o[1][3].add(c(0, e, S.isFunction(t) ? t : X)),
                  o[2][3].add(c(0, e, S.isFunction(n) ? n : Y)));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, s) : s;
            },
          },
          a = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            ((s[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[0][2].lock,
                ),
              n.add(t[3].fire),
              (a[t[0]] = function () {
                return (a[t[0] + "With"](this === a ? void 0 : this, arguments), this);
              }),
              (a[t[0] + "With"] = n.fireWith));
          }),
          s.promise(a),
          e && e.call(a, a),
          a
        );
      },
      when: function (e) {
        function t(t) {
          return function (e) {
            ((i[t] = this), (o[t] = 1 < arguments.length ? a.call(arguments) : e), --n || s.resolveWith(i, o));
          };
        }
        var n = arguments.length,
          r = n,
          i = Array(r),
          o = a.call(arguments),
          s = S.Deferred();
        if (n <= 1 && (P(e, s.done(t(r)).resolve, s.reject, !n), "pending" === s.state() || S.isFunction(o[r] && o[r].then))) return s.then();
        for (; r--; ) P(o[r], t(r), s.reject);
        return s.promise();
      },
    }));
  var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ((S.Deferred.exceptionHook = function (e, t) {
    T.console && T.console.warn && e && I.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      T.setTimeout(function () {
        throw e;
      });
    }));
  var O = S.Deferred();
  function F() {
    (C.removeEventListener("DOMContentLoaded", F), T.removeEventListener("load", F), S.ready());
  }
  ((S.fn.ready = function (e) {
    return (
      O.then(e).catch(function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait) || O.resolveWith(C, [S]);
      },
    }),
    (S.ready.then = O.then),
    "complete" === C.readyState || ("loading" !== C.readyState && !C.documentElement.doScroll)
      ? T.setTimeout(S.ready)
      : (C.addEventListener("DOMContentLoaded", F), T.addEventListener("load", F)));
  function B(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  var $ = function (e, t, n, r, i, o, s) {
    var a = 0,
      l = e.length,
      c = null == n;
    if ("object" === S.type(n)) for (a in ((i = !0), n)) $(e, t, a, n[a], !0, o, s);
    else if (
      void 0 !== r &&
      ((i = !0),
      S.isFunction(r) || (s = !0),
      c &&
        (t = s
          ? (t.call(e, r), null)
          : ((c = t),
            function (e, t, n) {
              return c.call(S(e), n);
            })),
      t)
    )
      for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
    return i ? e : c ? t.call(e) : l ? t(e[0], n) : o;
  };
  function _() {
    this.expando = S.expando + _.uid++;
  }
  ((_.uid = 1),
    (_.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t || ((t = {}), B(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[S.camelCase(t)] = n;
        else for (r in t) i[S.camelCase(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][S.camelCase(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(S.camelCase) : (t = S.camelCase(t)) in r ? [t] : t.match(q) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (void 0 !== t && !S.isEmptyObject(r)) || (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        e = e[this.expando];
        return void 0 !== e && !S.isEmptyObject(e);
      },
    }));
  var z = new _(),
    U = new _(),
    V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function G(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (((r = "data-" + t.replace(K, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
        try {
          n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : V.test(i) ? JSON.parse(i) : i));
        } catch (e) {}
        U.set(e, t, n);
      } else n = void 0;
    return n;
  }
  (S.extend({
    hasData: function (e) {
      return U.hasData(e) || z.hasData(e);
    },
    data: function (e, t, n) {
      return U.access(e, t, n);
    },
    removeData: function (e, t) {
      U.remove(e, t);
    },
    _data: function (e, t, n) {
      return z.access(e, t, n);
    },
    _removeData: function (e, t) {
      z.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          s = o && o.attributes;
        if (void 0 !== n)
          return "object" == typeof n
            ? this.each(function () {
                U.set(this, n);
              })
            : $(
                this,
                function (e) {
                  var t;
                  return o && void 0 === e
                    ? void 0 !== (t = U.get(o, n)) || void 0 !== (t = G(o, n))
                      ? t
                      : void 0
                    : void this.each(function () {
                        U.set(this, n, e);
                      });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0,
              );
        if (this.length && ((i = U.get(o)), 1 === o.nodeType && !z.get(o, "hasDataAttrs"))) {
          for (t = s.length; t--; ) s[t] && 0 === (r = s[t].name).indexOf("data-") && ((r = S.camelCase(r.slice(5))), G(o, r, i[r]));
          z.set(o, "hasDataAttrs", !0);
        }
        return i;
      },
      removeData: function (e) {
        return this.each(function () {
          U.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = z.get(e, t)),
            n && (!r || Array.isArray(n) ? (r = z.access(e, t, S.makeArray(n))) : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        ("inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o,
            )),
          !r && o && o.empty.fire());
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          z.get(e, n) ||
          z.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              z.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
              ? this
              : this.each(function () {
                  var e = S.queue(this, t, n);
                  (S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t));
                })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        function n() {
          --i || o.resolveWith(s, [s]);
        }
        var r,
          i = 1,
          o = S.Deferred(),
          s = this,
          a = this.length;
        for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; )
          (r = z.get(s[a], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
        return (n(), o.promise(t));
      },
    }));
  function Q(e, t, n, r) {
    var i,
      o = {};
    for (i in t) ((o[i] = e.style[i]), (e.style[i] = t[i]));
    for (i in ((r = n.apply(e, r || [])), t)) e.style[i] = o[i];
    return r;
  }
  var d = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    J = new RegExp("^(?:([+-])=|)(" + d + ")([a-z%]*)$", "i"),
    Z = ["Top", "Right", "Bottom", "Left"],
    ee = function (e, t) {
      return "none" === (e = t || e).style.display || ("" === e.style.display && S.contains(e.ownerDocument, e) && "none" === S.css(e, "display"));
    };
  function te(e, t, n, r) {
    var i,
      o = 1,
      s = 20,
      a = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      l = a(),
      c = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      u = (S.cssNumber[t] || ("px" !== c && +l)) && J.exec(S.css(e, t));
    if (u && u[3] !== c)
      for (c = c || u[3], n = n || [], u = +l || 1; (o = o || ".5"), (u /= o), S.style(e, t, u + c), o !== (o = a() / l) && 1 !== o && --s; );
    return (n && ((u = +u || +l || 0), (i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = c), (r.start = u), (r.end = i))), i);
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, s, a = [], l = 0, c = e.length; l < c; l++)
      (r = e[l]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n && ((a[l] = z.get(r, "display") || null), a[l] || (r.style.display = "")),
            "" === r.style.display &&
              ee(r) &&
              (a[l] =
                ((s = o = void 0),
                (o = (i = r).ownerDocument),
                (s = i.nodeName),
                (i = ne[s]) ||
                  ((o = o.body.appendChild(o.createElement(s))),
                  (i = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === i && (i = "block"),
                  (ne[s] = i)))))
          : "none" !== n && ((a[l] = "none"), z.set(r, "display", n)));
    for (l = 0; l < c; l++) null != a[l] && (e[l].style.display = a[l]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ie = /^(?:checkbox|radio)$/i,
    oe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    se = /^$|\/(?:java|ecma)script/i,
    ae = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function le(e, t) {
    var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || (t && L(e, t)) ? S.merge([e], n) : n;
  }
  function ce(e, t) {
    for (var n = 0, r = e.length; n < r; n++) z.set(e[n], "globalEval", !t || z.get(t[n], "globalEval"));
  }
  ((ae.optgroup = ae.option), (ae.tbody = ae.tfoot = ae.colgroup = ae.caption = ae.thead), (ae.th = ae.td));
  var ue = /<|&#?\w+;/;
  function de(e, t, n, r, i) {
    for (var o, s, a, l, c, u = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++)
      if ((o = e[f]) || 0 === o)
        if ("object" === S.type(o)) S.merge(d, o.nodeType ? [o] : o);
        else if (ue.test(o)) {
          for (
            s = s || u.appendChild(t.createElement("div")),
              a = (oe.exec(o) || ["", ""])[1].toLowerCase(),
              a = ae[a] || ae._default,
              s.innerHTML = a[1] + S.htmlPrefilter(o) + a[2],
              c = a[0];
            c--;
          )
            s = s.lastChild;
          (S.merge(d, s.childNodes), ((s = u.firstChild).textContent = ""));
        } else d.push(t.createTextNode(o));
    for (u.textContent = "", f = 0; (o = d[f++]); )
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (((l = S.contains(o.ownerDocument, o)), (s = le(u.appendChild(o), "script")), l && ce(s), n))
        for (c = 0; (o = s[c++]); ) se.test(o.type || "") && n.push(o);
    return u;
  }
  ((t = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (x = C.createElement("input")).setAttribute("type", "radio"),
    x.setAttribute("checked", "checked"),
    x.setAttribute("name", "t"),
    t.appendChild(x),
    (m.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (t.innerHTML = "<textarea>x</textarea>"),
    (m.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue));
  var fe = C.documentElement,
    pe = /^key/,
    he = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ge = /^([^.]*)(?:\.(.+)|)/;
  function me() {
    return !0;
  }
  function ve() {
    return !1;
  }
  function ye() {
    try {
      return C.activeElement;
    } catch (e) {}
  }
  function be(e, t, n, r, i, o) {
    var s, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) be(e, a, n, r, t[a], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ve;
    else if (!i) return e;
    return (
      1 === o &&
        ((s = i),
        ((i = function (e) {
          return (S().off(e), s.apply(this, arguments));
        }).guid = s.guid || (s.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  ((S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        s,
        a,
        l,
        c,
        u,
        d,
        f,
        p,
        h = z.get(t);
      if (h)
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && S.find.matchesSelector(fe, i),
            n.guid || (n.guid = S.guid++),
            (a = h.events) || (a = h.events = {}),
            (s = h.handle) ||
              (s = h.handle =
                function (e) {
                  return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
                }),
            l = (e = (e || "").match(q) || [""]).length;
          l--;
        )
          ((d = p = (c = ge.exec(e[l]) || [])[1]),
            (f = (c[2] || "").split(".").sort()),
            d &&
              ((u = S.event.special[d] || {}),
              (d = (i ? u.delegateType : u.bindType) || d),
              (u = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: p,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: f.join("."),
                },
                o,
              )),
              (p = a[d]) ||
                (((p = a[d] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(t, r, f, s)) || (t.addEventListener && t.addEventListener(d, s))),
              u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0)));
    },
    remove: function (e, t, n, r, i) {
      var o,
        s,
        a,
        l,
        c,
        u,
        d,
        f,
        p,
        h,
        g,
        m = z.hasData(e) && z.get(e);
      if (m && (l = m.events)) {
        for (c = (t = (t || "").match(q) || [""]).length; c--; )
          if (((p = g = (a = ge.exec(t[c]) || [])[1]), (h = (a[2] || "").split(".").sort()), p)) {
            for (
              d = S.event.special[p] || {},
                f = l[(p = (r ? d.delegateType : d.bindType) || p)] || [],
                a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = f.length;
              o--;
            )
              ((u = f[o]),
                (!i && g !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (r && r !== u.selector && ("**" !== r || !u.selector)) ||
                  (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u)));
            s && !f.length && ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) || S.removeEvent(e, p, m.handle), delete l[p]);
          } else for (p in l) S.event.remove(e, p + t[c], n, r, !0);
        S.isEmptyObject(l) && z.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        s = S.event.fix(e),
        a = new Array(arguments.length),
        l = (z.get(this, "events") || {})[s.type] || [],
        e = S.event.special[s.type] || {};
      for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (((s.delegateTarget = this), !e.preDispatch || !1 !== e.preDispatch.call(this, s))) {
        for (o = S.event.handlers.call(this, s, l), t = 0; (r = o[t++]) && !s.isPropagationStopped(); )
          for (s.currentTarget = r.elem, n = 0; (i = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
            (s.rnamespace && !s.rnamespace.test(i.namespace)) ||
              ((s.handleObj = i),
              (s.data = i.data),
              void 0 !== (i = ((S.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) &&
                !1 === (s.result = i) &&
                (s.preventDefault(), s.stopPropagation()));
        return (e.postDispatch && e.postDispatch.call(this, s), s.result);
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        s,
        a = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++)
              (void 0 === s[(i = (r = t[n]).selector + " ")] &&
                (s[i] = r.needsContext ? -1 < S(i, this).index(c) : S.find(i, this, null, [c]).length),
                s[i] && o.push(r));
            o.length && a.push({ elem: c, handlers: o });
          }
      return ((c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a);
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: S.isFunction(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== ye() && this.focus) return (this.focus(), !1);
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === ye() && this.blur) return (this.blur(), !1);
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && L(this, "input")) return (this.click(), !1);
        },
        _default: function (e) {
          return L(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      return this instanceof S.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? me : ve),
              (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
          t && S.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || S.now()),
          void (this[S.expando] = !0))
        : new S.Event(e, t);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: ve,
      isPropagationStopped: ve,
      isImmediatePropagationStopped: ve,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        ((this.isDefaultPrevented = me), e && !this.isSimulated && e.preventDefault());
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        ((this.isPropagationStopped = me), e && !this.isSimulated && e.stopPropagation());
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        ((this.isImmediatePropagationStopped = me), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation());
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && pe.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && he.test(e.type)
              ? 1 & t
                ? 1
                : 2 & t
                  ? 3
                  : 4 & t
                    ? 2
                    : 0
              : e.which;
        },
      },
      S.event.addProp,
    ),
    S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
      S.event.special[e] = {
        delegateType: i,
        bindType: i,
        handle: function (e) {
          var t,
            n = e.relatedTarget,
            r = e.handleObj;
          return ((n && (n === this || S.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t);
        },
      };
    }),
    S.fn.extend({
      on: function (e, t, n, r) {
        return be(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return be(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return ((r = e.handleObj), S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this);
        if ("object" != typeof e)
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = ve),
            this.each(function () {
              S.event.remove(this, e, n, t);
            })
          );
        for (i in e) this.off(i, t, e[i]);
        return this;
      },
    }));
  var xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    we = /<script|<style|<link/i,
    Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ce = /^true\/(.*)/,
    Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function ke(e, t) {
    return (L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && S(">tbody", e)[0]) || e;
  }
  function Ee(e) {
    return ((e.type = (null !== e.getAttribute("type")) + "/" + e.type), e);
  }
  function Le(e) {
    var t = Ce.exec(e.type);
    return (t ? (e.type = t[1]) : e.removeAttribute("type"), e);
  }
  function Ae(e, t) {
    var n, r, i, o, s, a;
    if (1 === t.nodeType) {
      if (z.hasData(e) && ((o = z.access(e)), (s = z.set(t, o)), (a = o.events)))
        for (i in (delete s.handle, (s.events = {}), a)) for (n = 0, r = a[i].length; n < r; n++) S.event.add(t, i, a[i][n]);
      U.hasData(e) && ((e = U.access(e)), (e = S.extend({}, e)), U.set(t, e));
    }
  }
  function De(n, r, i, o) {
    r = g.apply([], r);
    var e,
      t,
      s,
      a,
      l,
      c,
      u = 0,
      d = n.length,
      f = d - 1,
      p = r[0],
      h = S.isFunction(p);
    if (h || (1 < d && "string" == typeof p && !m.checkClone && Te.test(p)))
      return n.each(function (e) {
        var t = n.eq(e);
        (h && (r[0] = p.call(this, e, t.html())), De(t, r, i, o));
      });
    if (d && ((t = (e = de(r, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
      for (a = (s = S.map(le(e, "script"), Ee)).length; u < d; u++)
        ((l = e), u !== f && ((l = S.clone(l, !0, !0)), a && S.merge(s, le(l, "script"))), i.call(n[u], l, u));
      if (a)
        for (c = s[s.length - 1].ownerDocument, S.map(s, Le), u = 0; u < a; u++)
          ((l = s[u]),
            se.test(l.type || "") &&
              !z.access(l, "globalEval") &&
              S.contains(c, l) &&
              (l.src ? S._evalUrl && S._evalUrl(l.src) : v(l.textContent.replace(Se, ""), c)));
    }
    return n;
  }
  function Ne(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      (n || 1 !== r.nodeType || S.cleanData(le(r)),
        r.parentNode && (n && S.contains(r.ownerDocument, r) && ce(le(r, "script")), r.parentNode.removeChild(r)));
    return e;
  }
  (S.extend({
    htmlPrefilter: function (e) {
      return e.replace(xe, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        s,
        a,
        l,
        c,
        u = e.cloneNode(!0),
        d = S.contains(e.ownerDocument, e);
      if (!(m.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || S.isXMLDoc(e)))
        for (s = le(u), r = 0, i = (o = le(e)).length; r < i; r++)
          ((a = o[r]),
            (l = s[r]),
            (c = void 0),
            "input" === (c = l.nodeName.toLowerCase()) && ie.test(a.type)
              ? (l.checked = a.checked)
              : ("input" !== c && "textarea" !== c) || (l.defaultValue = a.defaultValue));
      if (t)
        if (n) for (o = o || le(e), s = s || le(u), r = 0, i = o.length; r < i; r++) Ae(o[r], s[r]);
        else Ae(e, u);
      return (0 < (s = le(u, "script")).length && ce(s, !d && le(e, "script")), u);
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (B(n)) {
          if ((t = n[z.expando])) {
            if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[z.expando] = void 0;
          }
          n[U.expando] && (n[U.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Ne(this, e, !0);
      },
      remove: function (e) {
        return Ne(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return De(this, arguments, function (e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || ke(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return De(this, arguments, function (e) {
          var t;
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (t = ke(this, e)).insertBefore(e, t.firstChild);
        });
      },
      before: function () {
        return De(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return De(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(le(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !we.test(e) && !ae[(oe.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(le(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var n = [];
        return De(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 && (S.cleanData(le(this)), t && t.replaceChild(e, this));
          },
          n,
        );
      },
    }),
    S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, s) {
      S.fn[e] = function (e) {
        for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
          ((t = o === i ? this : this.clone(!0)), S(r[o])[s](t), l.apply(n, t.get()));
        return this.pushStack(n);
      };
    }));
  var je,
    He,
    Re,
    Me,
    We,
    qe,
    Xe = /^margin/,
    Ye = new RegExp("^(" + d + ")(?!px)[a-z%]+$", "i"),
    Pe = function (e) {
      var t = e.ownerDocument.defaultView;
      return ((t && t.opener) || (t = T), t.getComputedStyle(e));
    };
  function Ie() {
    var e;
    qe &&
      ((qe.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
      (qe.innerHTML = ""),
      fe.appendChild(We),
      (e = T.getComputedStyle(qe)),
      (je = "1%" !== e.top),
      (Me = "2px" === e.marginLeft),
      (He = "4px" === e.width),
      (qe.style.marginRight = "50%"),
      (Re = "4px" === e.marginRight),
      fe.removeChild(We),
      (qe = null));
  }
  function Oe(e, t, n) {
    var r,
      i,
      o = e.style;
    return (
      (n = n || Pe(e)) &&
        ("" !== (i = n.getPropertyValue(t) || n[t]) || S.contains(e.ownerDocument, e) || (i = S.style(e, t)),
        !m.pixelMarginRight() &&
          Ye.test(i) &&
          Xe.test(t) &&
          ((r = o.width),
          (e = o.minWidth),
          (t = o.maxWidth),
          (o.minWidth = o.maxWidth = o.width = i),
          (i = n.width),
          (o.width = r),
          (o.minWidth = e),
          (o.maxWidth = t))),
      void 0 !== i ? i + "" : i
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      },
    };
  }
  ((We = C.createElement("div")),
    (qe = C.createElement("div")).style &&
      ((qe.style.backgroundClip = "content-box"),
      (qe.cloneNode(!0).style.backgroundClip = ""),
      (m.clearCloneStyle = "content-box" === qe.style.backgroundClip),
      (We.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      We.appendChild(qe),
      S.extend(m, {
        pixelPosition: function () {
          return (Ie(), je);
        },
        boxSizingReliable: function () {
          return (Ie(), He);
        },
        pixelMarginRight: function () {
          return (Ie(), Re);
        },
        reliableMarginLeft: function () {
          return (Ie(), Me);
        },
      })));
  var Be = /^(none|table(?!-c[ea]).+)/,
    $e = /^--/,
    _e = { position: "absolute", visibility: "hidden", display: "block" },
    ze = { letterSpacing: "0", fontWeight: "400" },
    Ue = ["Webkit", "Moz", "ms"],
    Ve = C.createElement("div").style;
  function Ke(e) {
    return (
      S.cssProps[e] ||
      (S.cssProps[e] =
        (function (e) {
          if (e in Ve) return e;
          for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; ) if ((e = Ue[n] + t) in Ve) return e;
        })(e) || e)
    );
  }
  function Ge(e, t, n) {
    var r = J.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Qe(e, t, n, r, i) {
    for (var o = 0, s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; s < 4; s += 2)
      ("margin" === n && (o += S.css(e, n + Z[s], !0, i)),
        r
          ? ("content" === n && (o -= S.css(e, "padding" + Z[s], !0, i)), "margin" !== n && (o -= S.css(e, "border" + Z[s] + "Width", !0, i)))
          : ((o += S.css(e, "padding" + Z[s], !0, i)), "padding" !== n && (o += S.css(e, "border" + Z[s] + "Width", !0, i))));
    return o;
  }
  function Je(e, t, n) {
    var r,
      i = Pe(e),
      o = Oe(e, t, i),
      s = "border-box" === S.css(e, "boxSizing", !1, i);
    return Ye.test(o)
      ? o
      : ((r = s && (m.boxSizingReliable() || o === e.style[t])),
        "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]),
        (o = parseFloat(o) || 0) + Qe(e, t, n || (s ? "border" : "content"), r, i) + "px");
  }
  function Ze(e, t, n, r, i) {
    return new Ze.prototype.init(e, t, n, r, i);
  }
  (S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            e = Oe(e, "opacity");
            return "" === e ? "1" : e;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          s,
          a = S.camelCase(t),
          l = $e.test(t),
          c = e.style;
        return (
          l || (t = Ke(a)),
          (s = S.cssHooks[t] || S.cssHooks[a]),
          void 0 === n
            ? s && "get" in s && void 0 !== (i = s.get(e, !1, r))
              ? i
              : c[t]
            : ("string" === (o = typeof n) && (i = J.exec(n)) && i[1] && ((n = te(e, t, i)), (o = "number")),
              void (
                null != n &&
                n == n &&
                ("number" === o && (n += (i && i[3]) || (S.cssNumber[a] ? "" : "px")),
                m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, r))) || (l ? c.setProperty(t, n) : (c[t] = n)))
              ))
        );
      }
    },
    css: function (e, t, n, r) {
      var i,
        o = S.camelCase(t);
      return (
        $e.test(t) || (t = Ke(o)),
        (o = S.cssHooks[t] || S.cssHooks[o]) && "get" in o && (i = o.get(e, !0, n)),
        void 0 === i && (i = Oe(e, t, r)),
        "normal" === i && t in ze && (i = ze[t]),
        "" === n || n ? ((t = parseFloat(i)), !0 === n || isFinite(t) ? t || 0 : i) : i
      );
    },
  }),
    S.each(["height", "width"], function (e, o) {
      S.cssHooks[o] = {
        get: function (e, t, n) {
          if (t)
            return !Be.test(S.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, o, n)
              : Q(e, _e, function () {
                  return Je(e, o, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = n && Pe(e),
            i = n && Qe(e, o, n, "border-box" === S.css(e, "boxSizing", !1, i), i);
          return (i && (r = J.exec(t)) && "px" !== (r[3] || "px") && ((e.style[o] = t), (t = S.css(e, o))), Ge(0, t, i));
        },
      };
    }),
    (S.cssHooks.marginLeft = Fe(m.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Oe(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Q(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      ((S.cssHooks[i + o] = {
        expand: function (e) {
          for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Z[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        Xe.test(i) || (S.cssHooks[i + o].set = Ge));
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              s = 0;
            if (Array.isArray(t)) {
              for (r = Pe(e), i = t.length; s < i; s++) o[t[s]] = S.css(e, t[s], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length,
        );
      },
    }),
    ((S.Tween = Ze).prototype = {
      constructor: Ze,
      init: function (e, t, n, r, i, o) {
        ((this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px")));
      },
      cur: function () {
        var e = Ze.propHooks[this.prop];
        return (e && e.get ? e : Ze.propHooks._default).get(this);
      },
      run: function (e) {
        var t,
          n = Ze.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          (n && n.set ? n : Ze.propHooks._default).set(this),
          this
        );
      },
    }),
    (Ze.prototype.init.prototype = Ze.prototype),
    (Ze.propHooks = {
      _default: {
        get: function (e) {
          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (e = S.css(e.elem, e.prop, "")) && "auto" !== e
              ? e
              : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType || (null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop])
              ? (e.elem[e.prop] = e.now)
              : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = Ze.prototype.init),
    (S.fx.step = {}));
  var et,
    tt,
    nt = /^(?:toggle|show|hide)$/,
    rt = /queueHooks$/;
  function it() {
    tt && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(it) : T.setTimeout(it, S.fx.interval), S.fx.tick());
  }
  function ot() {
    return (
      T.setTimeout(function () {
        et = void 0;
      }),
      (et = S.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Z[r])] = i["padding" + n] = e;
    return (t && (i.opacity = i.width = e), i);
  }
  function at(e, t, n) {
    for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, s = i.length; o < s; o++) if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(i, e, t) {
    var n,
      o,
      r = 0,
      s = lt.prefilters.length,
      a = S.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (var e = et || ot(), e = Math.max(0, c.startTime + c.duration - e), t = 1 - (e / c.duration || 0), n = 0, r = c.tweens.length; n < r; n++)
          c.tweens[n].run(t);
        return (a.notifyWith(i, [c, t, e]), t < 1 && r ? e : (r || a.notifyWith(i, [c, 1, 0]), a.resolveWith(i, [c]), !1));
      },
      c = a.promise({
        elem: i,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: et || ot(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          e = S.Tween(i, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
          return (c.tweens.push(e), e);
        },
        stop: function (e) {
          var t = 0,
            n = e ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; t < n; t++) c.tweens[t].run(1);
          return (e ? (a.notifyWith(i, [c, 1, 0]), a.resolveWith(i, [c, e])) : a.rejectWith(i, [c, e]), this);
        },
      }),
      u = c.props;
    for (
      (function (e, t) {
        var n, r, i, o, s;
        for (n in e)
          if (
            ((r = S.camelCase(n)),
            (i = t[r]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (s = S.cssHooks[r]),
            s && ("expand" in s))
          )
            for (n in ((o = s.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(u, c.opts.specialEasing);
      r < s;
      r++
    )
      if ((n = lt.prefilters[r].call(c, i, u, c.opts)))
        return (S.isFunction(n.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = S.proxy(n.stop, n)), n);
    return (
      S.map(u, at, c),
      S.isFunction(c.opts.start) && c.opts.start.call(i, c),
      c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
      S.fx.timer(S.extend(l, { elem: i, anim: c, queue: c.opts.queue })),
      c
    );
  }
  ((S.Animation = S.extend(lt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return (te(n.elem, e, J.exec(t), n), n);
        },
      ],
    },
    tweener: function (e, t) {
      for (var n, r = 0, i = (e = S.isFunction(e) ? ((t = e), ["*"]) : e.match(q)).length; r < i; r++)
        ((n = e[r]), (lt.tweeners[n] = lt.tweeners[n] || []), lt.tweeners[n].unshift(t));
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          l,
          c,
          u = "width" in t || "height" in t,
          d = this,
          f = {},
          p = e.style,
          h = e.nodeType && ee(e),
          g = z.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (s = S._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          d.always(function () {
            d.always(function () {
              (s.unqueued--, S.queue(e, "fx").length || s.empty.fire());
            });
          })),
        t))
          if (((i = t[r]), nt.test(i))) {
            if ((delete t[r], (o = o || "toggle" === i), i === (h ? "hide" : "show"))) {
              if ("show" !== i || !g || void 0 === g[r]) continue;
              h = !0;
            }
            f[r] = (g && g[r]) || S.style(e, r);
          }
        if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(f))
          for (r in (u &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (c = g && g.display) && (c = z.get(e, "display")),
            "none" === (u = S.css(e, "display")) && (c ? (u = c) : (re([e], !0), (c = e.style.display || c), (u = S.css(e, "display")), re([e]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === S.css(e, "float") &&
              (l ||
                (d.done(function () {
                  p.display = c;
                }),
                null == c && ((u = p.display), (c = "none" === u ? "" : u))),
              (p.display = "inline-block"))),
          n.overflow &&
            ((p.overflow = "hidden"),
            d.always(function () {
              ((p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]));
            })),
          (l = !1),
          f))
            (l ||
              (g ? "hidden" in g && (h = g.hidden) : (g = z.access(e, "fxshow", { display: c })),
              o && (g.hidden = !h),
              h && re([e], !0),
              d.done(function () {
                for (r in (h || re([e]), z.remove(e, "fxshow"), f)) S.style(e, r, f[r]);
              })),
              (l = at(h ? g[r] : 0, r, d)),
              r in g || ((g[r] = l.start), h && ((l.end = l.start), (l.start = 0))));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : { complete: n || (!n && t) || (S.isFunction(e) && e), duration: e, easing: (n && t) || (t && !S.isFunction(t) && t) };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds ? (r.duration = S.fx.speeds[r.duration]) : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          (S.isFunction(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue));
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ee).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          r = function () {
            var e = lt(this, S.extend({}, t), o);
            (i || z.get(this, "finish")) && e.stop(!0);
          };
        return ((r.finish = r), i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r));
      },
      stop: function (i, e, o) {
        function s(e) {
          var t = e.stop;
          (delete e.stop, t(o));
        }
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = z.get(this);
            if (t) r[t] && r[t].stop && s(r[t]);
            else for (t in r) r[t] && r[t].stop && rt.test(t) && s(r[t]);
            for (t = n.length; t--; ) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (s) {
        return (
          !1 !== s && (s = s || "fx"),
          this.each(function () {
            var e,
              t = z.get(this),
              n = t[s + "queue"],
              r = t[s + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (t.finish = !0, S.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--; )
              i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      },
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (et = S.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      (n.length || S.fx.stop(), (et = void 0));
    }),
    (S.fx.timer = function (e) {
      (S.timers.push(e), S.fx.start());
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      tt || ((tt = !0), it());
    }),
    (S.fx.stop = function () {
      tt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = T.setTimeout(e, r);
          t.stop = function () {
            T.clearTimeout(n);
          };
        })
      );
    }),
    (t = C.createElement("input")),
    (d = C.createElement("select").appendChild(C.createElement("option"))),
    (t.type = "checkbox"),
    (m.checkOn = "" !== t.value),
    (m.optSelected = d.selected),
    ((t = C.createElement("input")).value = "t"),
    (t.type = "radio"),
    (m.radioValue = "t" === t.value));
  var ct,
    ut = S.expr.attrHandle;
  (S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = S.find.attr(e, t))
                    ? void 0
                    : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!m.radioValue && "radio" === t && L(e, "input")) {
              var n = e.value;
              return (e.setAttribute("type", t), n && (e.value = n), t);
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(q);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return (!1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n);
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var s = ut[t] || S.find.attr;
      ut[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (n || ((i = ut[o]), (ut[o] = r), (r = null != s(e, t, n) ? o : null), (ut[o] = i)), r);
      };
    }));
  var dt = /^(?:input|select|textarea|button)$/i,
    ft = /^(?:a|area)$/i;
  function pt(e) {
    return (e.match(q) || []).join(" ");
  }
  function ht(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  (S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : dt.test(e.nodeName) || (ft.test(e.nodeName) && e.href) ? 0 : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    m.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          e = e.parentNode;
          return (e && e.parentNode && e.parentNode.selectedIndex, null);
        },
        set: function (e) {
          e = e.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        },
      }),
    S.each(
      ["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
      function () {
        S.propFix[this.toLowerCase()] = this;
      },
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          s,
          a = 0;
        if (S.isFunction(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, ht(this)));
          });
        if ("string" == typeof t && t)
          for (e = t.match(q) || []; (n = this[a++]); )
            if (((s = ht(n)), (r = 1 === n.nodeType && " " + pt(s) + " "))) {
              for (o = 0; (i = e[o++]); ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
              s !== (s = pt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          s,
          a = 0;
        if (S.isFunction(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, ht(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
          for (e = t.match(q) || []; (n = this[a++]); )
            if (((s = ht(n)), (r = 1 === n.nodeType && " " + pt(s) + " "))) {
              for (o = 0; (i = e[o++]); ) for (; -1 < r.indexOf(" " + i + " "); ) r = r.replace(" " + i + " ", " ");
              s !== (s = pt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i;
        return "boolean" == typeof t && "string" == o
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : S.isFunction(i)
            ? this.each(function (e) {
                S(this).toggleClass(i.call(this, e, ht(this), t), t);
              })
            : this.each(function () {
                var e, t, n, r;
                if ("string" == o) for (t = 0, n = S(this), r = i.match(q) || []; (e = r[t++]); ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                  (void 0 !== i && "boolean" != o) ||
                    ((e = ht(this)) && z.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", (!e && !1 !== i && z.get(this, "__className__")) || ""));
              });
      },
      hasClass: function (e) {
        for (var t, n = 0, r = " " + e + " "; (t = this[n++]); ) if (1 === t.nodeType && -1 < (" " + pt(ht(t)) + " ").indexOf(r)) return !0;
        return !1;
      },
    }));
  var gt = /\r/g;
  (S.fn.extend({
    val: function (t) {
      var n,
        e,
        r,
        i = this[0];
      return arguments.length
        ? ((r = S.isFunction(t)),
          this.each(function (e) {
            1 === this.nodeType &&
              (null == (e = r ? t.call(this, e, S(this).val()) : t)
                ? (e = "")
                : "number" == typeof e
                  ? (e += "")
                  : Array.isArray(e) &&
                    (e = S.map(e, function (e) {
                      return null == e ? "" : e + "";
                    })),
              ((n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value")) ||
                (this.value = e));
          }))
        : i
          ? (n = S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(i, "value"))
            ? e
            : "string" == typeof (e = i.value)
              ? e.replace(gt, "")
              : null == e
                ? ""
                : e
          : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : pt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n = e.options,
                r = e.selectedIndex,
                i = "select-one" === e.type,
                o = i ? null : [],
                s = i ? r + 1 : n.length,
                a = r < 0 ? s : i ? r : 0;
              a < s;
              a++
            )
              if (((t = n[a]).selected || a === r) && !t.disabled && (!t.parentNode.disabled || !L(t.parentNode, "optgroup"))) {
                if (((t = S(t).val()), i)) return t;
                o.push(t);
              }
            return o;
          },
          set: function (e, t) {
            for (var n, r, i = e.options, o = S.makeArray(t), s = i.length; s--; )
              ((r = i[s]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return (n || (e.selectedIndex = -1), o);
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      ((S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        m.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          }));
    }));
  var mt = /^(?:focusinfocus|focusoutblur)$/;
  (S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        s,
        a,
        l,
        c,
        u = [n || C],
        d = h.call(e, "type") ? e.type : e,
        f = h.call(e, "namespace") ? e.namespace.split(".") : [],
        p = (o = n = n || C);
      if (
        3 !== n.nodeType &&
        8 !== n.nodeType &&
        !mt.test(d + S.event.triggered) &&
        (-1 < d.indexOf(".") && ((d = (f = d.split(".")).shift()), f.sort()),
        (a = d.indexOf(":") < 0 && "on" + d),
        ((e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
        (e.namespace = f.join(".")),
        (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
        (e.result = void 0),
        e.target || (e.target = n),
        (t = null == t ? [e] : S.makeArray(t, [e])),
        (c = S.event.special[d] || {}),
        r || !c.trigger || !1 !== c.trigger.apply(n, t))
      ) {
        if (!r && !c.noBubble && !S.isWindow(n)) {
          for (s = c.delegateType || d, mt.test(s + d) || (p = p.parentNode); p; p = p.parentNode) (u.push(p), (o = p));
          o === (n.ownerDocument || C) && u.push(o.defaultView || o.parentWindow || T);
        }
        for (i = 0; (p = u[i++]) && !e.isPropagationStopped(); )
          ((e.type = 1 < i ? s : c.bindType || d),
            (l = (z.get(p, "events") || {})[e.type] && z.get(p, "handle")) && l.apply(p, t),
            (l = a && p[a]) && l.apply && B(p) && ((e.result = l.apply(p, t)), !1 === e.result && e.preventDefault()));
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(u.pop(), t)) ||
            !B(n) ||
            (a &&
              S.isFunction(n[d]) &&
              !S.isWindow(n) &&
              ((o = n[a]) && (n[a] = null), n[(S.event.triggered = d)](), (S.event.triggered = void 0), o && (n[a] = o))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      e = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(e, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " ",
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
      },
    ),
    S.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    (m.focusin = "onfocusin" in T),
    m.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        function i(e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        }
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = z.access(e, r);
            (t || e.addEventListener(n, i, !0), z.access(e, r, (t || 0) + 1));
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = z.access(e, r) - 1;
            t ? z.access(e, r, t) : (e.removeEventListener(n, i, !0), z.remove(e, r));
          },
        };
      }));
  var vt = T.location,
    yt = S.now(),
    bt = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new T.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return ((t && !t.getElementsByTagName("parsererror").length) || S.error("Invalid XML: " + e), t);
  };
  var xt = /\[\]$/,
    wt = /\r?\n/g,
    Tt = /^(?:submit|button|image|reset|file)$/i,
    Ct = /^(?:input|select|textarea|keygen)/i;
  ((S.param = function (e, t) {
    function n(e, t) {
      ((t = S.isFunction(t) ? t() : t), (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)));
    }
    var r,
      i = [];
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        n(this.name, this.value);
      });
    else
      for (r in e)
        !(function n(r, e, i, o) {
          if (Array.isArray(e))
            S.each(e, function (e, t) {
              i || xt.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o);
            });
          else if (i || "object" !== S.type(e)) o(r, e);
          else for (var t in e) n(r + "[" + t + "]", e[t], i, o);
        })(r, e[r], t, n);
    return i.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return this.name && !S(this).is(":disabled") && Ct.test(this.nodeName) && !Tt.test(e) && (this.checked || !ie.test(e));
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
                ? S.map(n, function (e) {
                    return { name: t.name, value: e.replace(wt, "\r\n") };
                  })
                : { name: t.name, value: n.replace(wt, "\r\n") };
          })
          .get();
      },
    }));
  var St = /%20/g,
    kt = /#.*$/,
    Et = /([?&])_=[^&]*/,
    Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    At = /^(?:GET|HEAD)$/,
    Dt = /^\/\//,
    Nt = {},
    jt = {},
    Ht = "*/".concat("*"),
    Rt = C.createElement("a");
  function Mt(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(q) || [];
      if (S.isFunction(t))
        for (; (n = i[r++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, r, i, o) {
    var s = {},
      a = t === jt;
    function l(e) {
      var n;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          t = t(r, i, o);
          return "string" != typeof t || a || s[t] ? (a ? !(n = t) : void 0) : (r.dataTypes.unshift(t), l(t), !1);
        }),
        n
      );
    }
    return l(r.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function qt(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
    return (r && S.extend(!0, e, r), e);
  }
  ((Rt.href = vt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: vt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: { "*": Ht, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? qt(qt(e, S.ajaxSettings), t) : qt(S.ajaxSettings, e);
      },
      ajaxPrefilter: Mt(Nt),
      ajaxTransport: Mt(jt),
      ajax: function (e, t) {
        ("object" == typeof e && ((t = e), (e = void 0)), (t = t || {}));
        var l,
          c,
          u,
          n,
          d,
          r,
          f,
          p,
          i,
          h = S.ajaxSetup({}, t),
          g = h.context || h,
          m = h.context && (g.nodeType || g.jquery) ? S(g) : S.event,
          v = S.Deferred(),
          y = S.Callbacks("once memory"),
          b = h.statusCode || {},
          o = {},
          s = {},
          a = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (f) {
                if (!n) for (n = {}; (t = Lt.exec(u)); ) n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return f ? u : null;
            },
            setRequestHeader: function (e, t) {
              return (null == f && ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e), (o[e] = t)), this);
            },
            overrideMimeType: function (e) {
              return (null == f && (h.mimeType = e), this);
            },
            statusCode: function (e) {
              if (e)
                if (f) x.always(e[x.status]);
                else for (var t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              e = e || a;
              return (l && l.abort(e), w(0, e), this);
            },
          };
        if (
          (v.promise(x),
          (h.url = ((e || h.url || vt.href) + "").replace(Dt, vt.protocol + "//")),
          (h.type = t.method || t.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [""]),
          null == h.crossDomain)
        ) {
          r = C.createElement("a");
          try {
            ((r.href = h.url), (r.href = r.href), (h.crossDomain = Rt.protocol + "//" + Rt.host != r.protocol + "//" + r.host));
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if ((h.data && h.processData && "string" != typeof h.data && (h.data = S.param(h.data, h.traditional)), Wt(Nt, h, t, x), f)) return x;
        for (i in ((p = S.event && h.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !At.test(h.type)),
        (c = h.url.replace(kt, "")),
        h.hasContent
          ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(St, "+"))
          : ((e = h.url.slice(c.length)),
            h.data && ((c += (bt.test(c) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache && ((c = c.replace(Et, "$1")), (e = (bt.test(c) ? "&" : "?") + "_=" + yt++ + e)),
            (h.url = c + e)),
        h.ifModified &&
          (S.lastModified[c] && x.setRequestHeader("If-Modified-Since", S.lastModified[c]),
          S.etag[c] && x.setRequestHeader("If-None-Match", S.etag[c])),
        ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) && x.setRequestHeader("Content-Type", h.contentType),
        x.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
            : h.accepts["*"],
        ),
        h.headers))
          x.setRequestHeader(i, h.headers[i]);
        if (h.beforeSend && (!1 === h.beforeSend.call(g, x, h) || f)) return x.abort();
        if (((a = "abort"), y.add(h.complete), x.done(h.success), x.fail(h.error), (l = Wt(jt, h, t, x)))) {
          if (((x.readyState = 1), p && m.trigger("ajaxSend", [x, h]), f)) return x;
          h.async &&
            0 < h.timeout &&
            (d = T.setTimeout(function () {
              x.abort("timeout");
            }, h.timeout));
          try {
            ((f = !1), l.send(o, w));
          } catch (e) {
            if (f) throw e;
            w(-1, e);
          }
        } else w(-1, "No Transport");
        function w(e, t, n, r) {
          var i,
            o,
            s,
            a = t;
          f ||
            ((f = !0),
            d && T.clearTimeout(d),
            (l = void 0),
            (u = r || ""),
            (x.readyState = 0 < e ? 4 : 0),
            (r = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                  (l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")));
                if (r)
                  for (i in a)
                    if (a[i] && a[i].test(r)) {
                      l.unshift(i);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (i in n) {
                    if (!l[0] || e.converters[i + " " + l[0]]) {
                      o = i;
                      break;
                    }
                    s = s || i;
                  }
                  o = o || s;
                }
                if (o) return (o !== l[0] && l.unshift(o), n[o]);
              })(h, x, n)),
            (s = (function (e, t, n, r) {
              var i,
                o,
                s,
                a,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
              for (o = u.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = o),
                  (o = u.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(s = c[l + " " + o] || c["* " + o]))
                      for (i in c)
                        if (((a = i.split(" ")), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]]))) {
                          !0 === s ? (s = c[i]) : !0 !== c[i] && ((o = a[0]), u.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o };
                        }
                  }
              return { state: "success", data: t };
            })(h, s, x, r)),
            r
              ? (h.ifModified &&
                  ((n = x.getResponseHeader("Last-Modified")) && (S.lastModified[c] = n), (n = x.getResponseHeader("etag")) && (S.etag[c] = n)),
                204 === e || "HEAD" === h.type
                  ? (a = "nocontent")
                  : 304 === e
                    ? (a = "notmodified")
                    : ((a = s.state), (i = s.data), (r = !(o = s.error))))
              : ((o = a), (!e && a) || ((a = "error"), e < 0 && (e = 0))),
            (x.status = e),
            (x.statusText = (t || a) + ""),
            r ? v.resolveWith(g, [i, a, x]) : v.rejectWith(g, [x, a, o]),
            x.statusCode(b),
            (b = void 0),
            p && m.trigger(r ? "ajaxSuccess" : "ajaxError", [x, h, r ? i : o]),
            y.fireWith(g, [x, a]),
            p && (m.trigger("ajaxComplete", [x, h]), --S.active || S.event.trigger("ajaxStop")));
        }
        return x;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          S.isFunction(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e))
        );
      };
    }),
    (S._evalUrl = function (e) {
      return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        return (
          this[0] &&
            (S.isFunction(e) && (e = e.call(this[0])),
            (e = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return S.isFunction(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = S.isFunction(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new T.XMLHttpRequest();
      } catch (e) {}
    }));
  var Xt = { 0: 200, 1223: 204 },
    Yt = S.ajaxSettings.xhr();
  ((m.cors = !!Yt && "withCredentials" in Yt),
    (m.ajax = Yt = !!Yt),
    S.ajaxTransport(function (i) {
      var o, s;
      if (m.cors || (Yt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)) for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
            i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            ((o = function (e) {
              return function () {
                o &&
                  ((o = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                      ? "number" != typeof r.status
                        ? t(0, "error")
                        : t(r.status, r.statusText)
                      : t(
                          Xt[r.status] || r.status,
                          r.statusText,
                          "text" !== (r.responseType || "text") || "string" != typeof r.responseText
                            ? { binary: r.response }
                            : { text: r.responseText },
                          r.getAllResponseHeaders(),
                        ));
              };
            }),
              (r.onload = o()),
              (s = r.onerror = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = s)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      T.setTimeout(function () {
                        o && s();
                      });
                  }),
              (o = o("abort")));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return (S.globalEval(e), e);
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      (void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET"));
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain)
        return {
          send: function (e, t) {
            ((r = S("<script>")
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  (r.remove(), (i = null), e && t("error" === e.type ? 404 : 200, e.type));
                }),
              )),
              C.head.appendChild(r[0]));
          },
          abort: function () {
            i && i();
          },
        };
    }));
  var Pt = [],
    It = /(=)\?(?=&|$)|\?\?/;
  (S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Pt.pop() || S.expando + "_" + yt++;
      return ((this[e] = !0), e);
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        s =
          !1 !== e.jsonp &&
          (It.test(e.url)
            ? "url"
            : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(e.data) && "data");
      if (s || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback = S.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          s ? (e[s] = e[s].replace(It, "$1" + r)) : !1 !== e.jsonp && (e.url += (bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return (o || S.error(r + " was not called"), o[0]);
          }),
          (e.dataTypes[0] = "json"),
          (i = T[r]),
          (T[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            (void 0 === i ? S(T).removeProp(r) : (T[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Pt.push(r)),
              o && S.isFunction(i) && i(o[0]),
              (o = i = void 0));
          }),
          "script"
        );
    }),
    (m.createHTMLDocument =
      (((t = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (m.createHTMLDocument
              ? (((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href), t.head.appendChild(r))
              : (t = C)),
          (r = !n && []),
          (n = A.exec(e)) ? [t.createElement(n[1])] : ((n = de([e], t, r)), r && r.length && S(r).remove(), S.merge([], n.childNodes)));
      var r;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        s = this,
        a = e.indexOf(" ");
      return (
        -1 < a && ((r = pt(e.slice(a))), (e = e.slice(0, a))),
        S.isFunction(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
        0 < s.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              ((o = arguments), s.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e));
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                },
            ),
        this
      );
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      S.fn[t] = function (e) {
        return this.on(t, e);
      };
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          s,
          a = S.css(e, "position"),
          l = S(e),
          c = {};
        ("static" === a && (e.style.position = "relative"),
          (o = l.offset()),
          (r = S.css(e, "top")),
          (s = S.css(e, "left")),
          (s =
            ("absolute" === a || "fixed" === a) && -1 < (r + s).indexOf("auto")
              ? ((i = (a = l.position()).top), a.left)
              : ((i = parseFloat(r) || 0), parseFloat(s) || 0)),
          S.isFunction(t) && (t = t.call(e, n, S.extend({}, o))),
          null != t.top && (c.top = t.top - o.top + i),
          null != t.left && (c.left = t.left - o.left + s),
          "using" in t ? t.using.call(e, c) : l.css(c));
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (r = (n = r.ownerDocument).documentElement),
              (n = n.defaultView),
              { top: e.top + n.pageYOffset - r.clientTop, left: e.left + n.pageXOffset - r.clientLeft })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            r = { top: 0, left: 0 };
          return (
            "fixed" === S.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                L(e[0], "html") || (r = e.offset()),
                (r = { top: r.top + S.css(e[0], "borderTopWidth", !0), left: r.left + S.css(e[0], "borderLeftWidth", !0) })),
            { top: t.top - r.top - S.css(n, "marginTop", !0), left: t.left - r.left - S.css(n, "marginLeft", !0) }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === S.css(e, "position"); ) e = e.offsetParent;
          return e || fe;
        });
      },
    }),
    S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
      var o = "pageYOffset" === i;
      S.fn[t] = function (e) {
        return $(
          this,
          function (e, t, n) {
            var r;
            return (
              S.isWindow(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
              void 0 === n ? (r ? r[i] : e[t]) : void (r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n))
            );
          },
          t,
          e,
          arguments.length,
        );
      };
    }),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = Fe(m.pixelPosition, function (e, t) {
        if (t) return ((t = Oe(e, n)), Ye.test(t) ? S(e).position()[n] + "px" : t);
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (s, a) {
      S.each({ padding: "inner" + s, content: a, "": "outer" + s }, function (r, o) {
        S.fn[o] = function (e, t) {
          var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
          return $(
            this,
            function (e, t, n) {
              var r;
              return S.isWindow(e)
                ? 0 === o.indexOf("outer")
                  ? e["inner" + s]
                  : e.document.documentElement["client" + s]
                : 9 === e.nodeType
                  ? ((r = e.documentElement), Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s]))
                  : void 0 === n
                    ? S.css(e, t, i)
                    : S.style(e, t, n, i);
            },
            a,
            n ? e : void 0,
            n,
          );
        };
      });
    }),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      },
    }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = L),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      }));
  var Ot = T.jQuery,
    Ft = T.$;
  return (
    (S.noConflict = function (e) {
      return (T.$ === S && (T.$ = Ft), e && T.jQuery === S && (T.jQuery = Ot), S);
    }),
    e || (T.jQuery = T.$ = S),
    S
  );
}),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
        ? (module.exports = e(require("jquery")))
        : e(jQuery);
  })(function (b) {
    "use strict";
    function o(e) {
      var t = e.parent();
      (e.removeData("minicolors-initialized").removeData("minicolors-settings").removeProp("size").removeClass("minicolors-input"),
        t.before(e).remove());
    }
    function s(e) {
      var t = e.parent(),
        n = t.find(".minicolors-panel"),
        r = e.data("minicolors-settings");
      !e.data("minicolors-initialized") ||
        e.prop("disabled") ||
        t.hasClass("minicolors-inline") ||
        t.hasClass("minicolors-focus") ||
        (a(),
        t.addClass("minicolors-focus"),
        n.stop(!0, !0).fadeIn(r.showSpeed, function () {
          r.show && r.show.call(e.get(0));
        }));
    }
    function a() {
      b(".minicolors-focus").each(function () {
        var e = b(this),
          t = e.find(".minicolors-input"),
          n = e.find(".minicolors-panel"),
          r = t.data("minicolors-settings");
        n.fadeOut(r.hideSpeed, function () {
          (r.hide && r.hide.call(t.get(0)), e.removeClass("minicolors-focus"));
        });
      });
    }
    function n(e, t, n) {
      var r = e.parents(".minicolors").find(".minicolors-input"),
        i = r.data("minicolors-settings"),
        o = e.find("[class$=-picker]"),
        s = e.offset().left,
        a = e.offset().top,
        l = Math.round(t.pageX - s),
        c = Math.round(t.pageY - a),
        n = n ? i.animationSpeed : 0;
      (t.originalEvent.changedTouches && ((l = t.originalEvent.changedTouches[0].pageX - s), (c = t.originalEvent.changedTouches[0].pageY - a)),
        l < 0 && (l = 0),
        c < 0 && (c = 0),
        l > e.width() && (l = e.width()),
        c > e.height() && (c = e.height()),
        e.parent().is(".minicolors-slider-wheel") &&
          o.parent().is(".minicolors-grid") &&
          ((s = 75 - l),
          (t = 75 - c),
          (a = Math.sqrt(s * s + t * t)),
          (s = Math.atan2(t, s)) < 0 && (s += 2 * Math.PI),
          75 < a && ((l = 75 - 75 * Math.cos(s)), (c = 75 - 75 * Math.sin(s))),
          (l = Math.round(l)),
          (c = Math.round(c))),
        e.is(".minicolors-grid")
          ? o.stop(!0).animate({ top: c + "px", left: l + "px" }, n, i.animationEasing, function () {
              u(r, e);
            })
          : o.stop(!0).animate({ top: c + "px" }, n, i.animationEasing, function () {
              u(r, e);
            }));
    }
    function u(e, t) {
      function n(e, t) {
        var n, r;
        return e.length && t
          ? ((n = e.offset().left),
            (r = e.offset().top),
            { x: n - t.offset().left + e.outerWidth() / 2, y: r - t.offset().top + e.outerHeight() / 2 })
          : null;
      }
      var r,
        i,
        o,
        s = e.val(),
        a = e.attr("data-opacity"),
        l = e.parent(),
        c = e.data("minicolors-settings"),
        u = l.find(".minicolors-input-swatch"),
        d = l.find(".minicolors-grid"),
        f = l.find(".minicolors-slider"),
        p = l.find(".minicolors-opacity-slider"),
        h = d.find("[class$=-picker]"),
        g = f.find("[class$=-picker]"),
        m = p.find("[class$=-picker]"),
        v = n(h, d),
        y = n(g, f),
        m = n(m, p);
      if (t.is(".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider")) {
        switch (c.control) {
          case "wheel":
            ((r = d.width() / 2 - v.x),
              (o = d.height() / 2 - v.y),
              (i = Math.sqrt(r * r + o * o)),
              (o = Math.atan2(o, r)) < 0 && (o += 2 * Math.PI),
              75 < i && ((i = 75), (v.x = 69 - 75 * Math.cos(o)), (v.y = 69 - 75 * Math.sin(o))),
              (r = E(i / 0.75, 0, 100)),
              (s = N({ h: (i = E((180 * o) / Math.PI, 0, 360)), s: r, b: (o = E(100 - Math.floor(y.y * (100 / f.height())), 0, 100)) })),
              f.css("backgroundColor", N({ h: i, s: r, b: 100 })));
            break;
          case "saturation":
            ((s = N({
              h: (i = E(parseInt(v.x * (360 / d.width()), 10), 0, 360)),
              s: (r = E(100 - Math.floor(y.y * (100 / f.height())), 0, 100)),
              b: (o = E(100 - Math.floor(v.y * (100 / d.height())), 0, 100)),
            })),
              f.css("backgroundColor", N({ h: i, s: 100, b: o })),
              l.find(".minicolors-grid-inner").css("opacity", r / 100));
            break;
          case "brightness":
            ((s = N({
              h: (i = E(parseInt(v.x * (360 / d.width()), 10), 0, 360)),
              s: (r = E(100 - Math.floor(v.y * (100 / d.height())), 0, 100)),
              b: (o = E(100 - Math.floor(y.y * (100 / f.height())), 0, 100)),
            })),
              f.css("backgroundColor", N({ h: i, s: r, b: 100 })),
              l.find(".minicolors-grid-inner").css("opacity", 1 - o / 100));
            break;
          default:
            ((s = N({
              h: (i = E(360 - parseInt(y.y * (360 / f.height()), 10), 0, 360)),
              s: (r = E(Math.floor(v.x * (100 / d.width())), 0, 100)),
              b: (o = E(100 - Math.floor(v.y * (100 / d.height())), 0, 100)),
            })),
              d.css("backgroundColor", N({ h: i, s: 100, b: 100 })));
        }
        x(e, s, (a = c.opacity ? parseFloat(1 - m.y / p.height()).toFixed(2) : 1));
      } else (u.find("span").css({ backgroundColor: s, opacity: a }), w(e, s, a));
    }
    function x(e, t, n) {
      var r = e.parent(),
        i = e.data("minicolors-settings"),
        o = r.find(".minicolors-input-swatch");
      (i.opacity && e.attr("data-opacity", n),
        (t =
          "rgb" === i.format
            ? ((r = L(t) ? S(t, !0) : j(C(t, !0))),
              (n = "" === e.attr("data-opacity") ? 1 : E(parseFloat(e.attr("data-opacity")).toFixed(2), 0, 1)),
              (!isNaN(n) && i.opacity) || (n = 1),
              e.minicolors("rgbObject").a <= 1 && r && i.opacity
                ? "rgba(" + r.r + ", " + r.g + ", " + r.b + ", " + parseFloat(n) + ")"
                : "rgb(" + r.r + ", " + r.g + ", " + r.b + ")")
            : (L(t) && (t = D(t)), T(t, i.letterCase))),
        e.val(t),
        o.find("span").css({ backgroundColor: t, opacity: n }),
        w(e, t, n));
    }
    function l(e, t) {
      var n,
        r,
        i,
        o,
        s,
        a,
        l,
        c,
        u = e.parent(),
        d = e.data("minicolors-settings"),
        f = u.find(".minicolors-input-swatch"),
        p = u.find(".minicolors-grid"),
        h = u.find(".minicolors-slider"),
        g = u.find(".minicolors-opacity-slider"),
        m = p.find("[class$=-picker]"),
        v = h.find("[class$=-picker]"),
        y = g.find("[class$=-picker]");
      switch (
        (L(e.val())
          ? ((n = D(e.val())), (o = E(parseFloat(A(e.val())).toFixed(2), 0, 1)) && e.attr("data-opacity", o))
          : (n = T(C(e.val(), !0), d.letterCase)),
        (r = (function (e) {
          e = (function (e) {
            var t = { h: 0, s: 0, b: 0 },
              n = Math.min(e.r, e.g, e.b),
              r = Math.max(e.r, e.g, e.b),
              n = r - n;
            return (
              (t.b = r),
              (t.s = 0 !== r ? (255 * n) / r : 0),
              0 !== t.s ? (e.r === r ? (t.h = (e.g - e.b) / n) : e.g === r ? (t.h = 2 + (e.b - e.r) / n) : (t.h = 4 + (e.r - e.g) / n)) : (t.h = -1),
              (t.h *= 60),
              t.h < 0 && (t.h += 360),
              (t.s *= 100 / 255),
              (t.b *= 100 / 255),
              t
            );
          })(j(e));
          return (0 === e.s && (e.h = 360), e);
        })((n = n || T(k(d.defaultValue, !0), d.letterCase)))),
        (o = d.keywords
          ? b.map(d.keywords.split(","), function (e) {
              return b.trim(e.toLowerCase());
            })
          : []),
        (o = "" !== e.val() && -1 < b.inArray(e.val().toLowerCase(), o) ? T(e.val()) : L(e.val()) ? S(e.val()) : n),
        t || e.val(o),
        d.opacity &&
          ((i = "" === e.attr("data-opacity") ? 1 : E(parseFloat(e.attr("data-opacity")).toFixed(2), 0, 1)),
          isNaN(i) && (i = 1),
          e.attr("data-opacity", i),
          f.find("span").css("opacity", i),
          (a = E(g.height() - g.height() * i, 0, g.height())),
          y.css("top", a + "px")),
        "transparent" === e.val().toLowerCase() && f.find("span").css("opacity", 0),
        f.find("span").css("backgroundColor", n),
        d.control)
      ) {
        case "wheel":
          ((l = E(Math.ceil(0.75 * r.s), 0, p.height() / 2)),
            (c = (r.h * Math.PI) / 180),
            (s = E(75 - Math.cos(c) * l, 0, p.width())),
            (a = E(75 - Math.sin(c) * l, 0, p.height())),
            m.css({ top: a + "px", left: s + "px" }),
            (a = 150 - r.b / (100 / p.height())),
            "" === n && (a = 0),
            v.css("top", a + "px"),
            h.css("backgroundColor", N({ h: r.h, s: r.s, b: 100 })));
          break;
        case "saturation":
          ((s = E((5 * r.h) / 12, 0, 150)),
            (a = E(p.height() - Math.ceil(r.b / (100 / p.height())), 0, p.height())),
            m.css({ top: a + "px", left: s + "px" }),
            (a = E(h.height() - r.s * (h.height() / 100), 0, h.height())),
            v.css("top", a + "px"),
            h.css("backgroundColor", N({ h: r.h, s: 100, b: r.b })),
            u.find(".minicolors-grid-inner").css("opacity", r.s / 100));
          break;
        case "brightness":
          ((s = E((5 * r.h) / 12, 0, 150)),
            (a = E(p.height() - Math.ceil(r.s / (100 / p.height())), 0, p.height())),
            m.css({ top: a + "px", left: s + "px" }),
            (a = E(h.height() - r.b * (h.height() / 100), 0, h.height())),
            v.css("top", a + "px"),
            h.css("backgroundColor", N({ h: r.h, s: r.s, b: 100 })),
            u.find(".minicolors-grid-inner").css("opacity", 1 - r.b / 100));
          break;
        default:
          ((s = E(Math.ceil(r.s / (100 / p.width())), 0, p.width())),
            (a = E(p.height() - Math.ceil(r.b / (100 / p.height())), 0, p.height())),
            m.css({ top: a + "px", left: s + "px" }),
            (a = E(h.height() - r.h / (360 / h.height()), 0, h.height())),
            v.css("top", a + "px"),
            p.css("backgroundColor", N({ h: r.h, s: 100, b: 100 })));
      }
      e.data("minicolors-initialized") && w(e, o, i);
    }
    function w(e, t, n) {
      var r,
        i,
        o,
        s = e.data("minicolors-settings"),
        a = e.data("minicolors-lastChange");
      if (!a || a.value !== t || a.opacity !== n) {
        if ((e.data("minicolors-lastChange", { value: t, opacity: n }), s.swatches && 0 !== s.swatches.length)) {
          for (r = L(t) ? S(t, !0) : j(t), i = -1, o = 0; o < s.swatches.length; ++o)
            if (r.r === s.swatches[o].r && r.g === s.swatches[o].g && r.b === s.swatches[o].b && r.a === s.swatches[o].a) {
              i = o;
              break;
            }
          (e.parent().find(".minicolors-swatches .minicolors-swatch").removeClass("selected"),
            -1 !== i && e.parent().find(".minicolors-swatches .minicolors-swatch").eq(o).addClass("selected"));
        }
        (s.change &&
          (s.changeDelay
            ? (clearTimeout(e.data("minicolors-changeTimeout")),
              e.data(
                "minicolors-changeTimeout",
                setTimeout(function () {
                  s.change.call(e.get(0), t, n);
                }, s.changeDelay),
              ))
            : s.change.call(e.get(0), t, n)),
          e.trigger("change").trigger("input"));
      }
    }
    function T(e, t) {
      return "uppercase" === t ? e.toUpperCase() : e.toLowerCase();
    }
    function C(e, t) {
      return !(e = e.replace(/^#/g, "")).match(/^[A-F0-9]{3,6}/gi) || (3 !== e.length && 6 !== e.length)
        ? ""
        : (3 === e.length && t && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), "#" + e);
    }
    function S(e, t) {
      e = e.replace(/[^\d,.]/g, "").split(",");
      return (
        (e[0] = E(parseInt(e[0], 10), 0, 255)),
        (e[1] = E(parseInt(e[1], 10), 0, 255)),
        (e[2] = E(parseInt(e[2], 10), 0, 255)),
        e[3] && (e[3] = E(parseFloat(e[3], 10), 0, 1)),
        t
          ? e[3]
            ? { r: e[0], g: e[1], b: e[2], a: e[3] }
            : { r: e[0], g: e[1], b: e[2] }
          : void 0 !== e[3] && e[3] <= 1
            ? "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
            : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
      );
    }
    function k(e, t) {
      return L(e) ? S(e) : C(e, t);
    }
    function E(e, t, n) {
      return (e < t && (e = t), n < e && (e = n), e);
    }
    function L(e) {
      e = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return e && 4 === e.length;
    }
    function A(e) {
      return (e = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+(\.\d{1,2})?|\.\d{1,2})[\s+]?/i)) &&
        6 === e.length
        ? e[4]
        : "1";
    }
    function D(e) {
      return (e = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === e.length
        ? "#" +
            ("0" + parseInt(e[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(e[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(e[3], 10).toString(16)).slice(-2)
        : "";
    }
    function c(e) {
      var n = [e.r.toString(16), e.g.toString(16), e.b.toString(16)];
      return (
        b.each(n, function (e, t) {
          1 === t.length && (n[e] = "0" + t);
        }),
        "#" + n.join("")
      );
    }
    function N(e) {
      return c(
        ((t = e),
        (n = {}),
        (r = Math.round(t.h)),
        (i = Math.round((255 * t.s) / 100)),
        (e = Math.round((255 * t.b) / 100)),
        0 === i
          ? (n.r = n.g = n.b = e)
          : ((e = ((r % 60) * ((t = e) - (i = ((255 - i) * e) / 255))) / 60),
            360 === r && (r = 0),
            r < 60
              ? ((n.r = t), (n.b = i), (n.g = i + e))
              : r < 120
                ? ((n.g = t), (n.b = i), (n.r = t - e))
                : r < 180
                  ? ((n.g = t), (n.r = i), (n.b = i + e))
                  : r < 240
                    ? ((n.b = t), (n.r = i), (n.g = t - e))
                    : r < 300
                      ? ((n.b = t), (n.g = i), (n.r = i + e))
                      : r < 360
                        ? ((n.r = t), (n.g = i), (n.b = t - e))
                        : ((n.r = 0), (n.g = 0), (n.b = 0))),
        { r: Math.round(n.r), g: Math.round(n.g), b: Math.round(n.b) }),
      );
      var t, n, r, i;
    }
    function j(e) {
      return { r: (e = parseInt(-1 < e.indexOf("#") ? e.substring(1) : e, 16)) >> 16, g: (65280 & e) >> 8, b: 255 & e };
    }
    ((b.minicolors = {
      defaults: {
        animationSpeed: 50,
        animationEasing: "swing",
        change: null,
        changeDelay: 0,
        control: "hue",
        defaultValue: "",
        format: "hex",
        hide: null,
        hideSpeed: 100,
        inline: !1,
        keywords: "",
        letterCase: "lowercase",
        opacity: !1,
        position: "bottom left",
        show: null,
        showSpeed: 100,
        theme: "default",
        swatches: [],
      },
    }),
      b.extend(b.fn, {
        minicolors: function (e, t) {
          switch (e) {
            case "destroy":
              return (
                b(this).each(function () {
                  o(b(this));
                }),
                b(this)
              );
            case "hide":
              return (a(), b(this));
            case "opacity":
              return void 0 === t
                ? b(this).attr("data-opacity")
                : (b(this).each(function () {
                    l(b(this).attr("data-opacity", t));
                  }),
                  b(this));
            case "rgbObject":
              return (
                (r = b(this)),
                (i = b(r).attr("data-opacity")),
                (r = L(b(r).val()) ? S(b(r).val(), !0) : j(C(b(r).val(), !0))) ? (void 0 !== i && b.extend(r, { a: parseFloat(i) }), r) : null
              );
            case "rgbString":
            case "rgbaString":
              return (
                (n = b(this)),
                (i = "rgbaString" === e),
                (r = b(n).attr("data-opacity")),
                (n = L(b(n).val()) ? S(b(n).val(), !0) : j(C(b(n).val(), !0)))
                  ? (void 0 === r && (r = 1),
                    i ? "rgba(" + n.r + ", " + n.g + ", " + n.b + ", " + parseFloat(r) + ")" : "rgb(" + n.r + ", " + n.g + ", " + n.b + ")")
                  : null
              );
            case "settings":
              return void 0 === t
                ? b(this).data("minicolors-settings")
                : (b(this).each(function () {
                    var e = b(this).data("minicolors-settings") || {};
                    (o(b(this)), b(this).minicolors(b.extend(!0, e, t)));
                  }),
                  b(this));
            case "show":
              return (s(b(this).eq(0)), b(this));
            case "value":
              return void 0 === t
                ? b(this).val()
                : (b(this).each(function () {
                    ("object" == typeof t && "null" !== t
                      ? (t.opacity && b(this).attr("data-opacity", E(t.opacity, 0, 1)), t.color && b(this).val(t.color))
                      : b(this).val(t),
                      l(b(this)));
                  }),
                  b(this));
            default:
              return (
                "create" !== e && (t = e),
                b(this).each(function () {
                  !(function (t, e) {
                    var n,
                      r,
                      i,
                      o = b('<div class="minicolors" />'),
                      s = b.minicolors.defaults;
                    if (!t.data("minicolors-initialized")) {
                      if (
                        ((e = b.extend(!0, {}, s, e)),
                        o.addClass("minicolors-theme-" + e.theme).toggleClass("minicolors-with-opacity", e.opacity),
                        void 0 !== e.position &&
                          b.each(e.position.split(" "), function () {
                            o.addClass("minicolors-position-" + this);
                          }),
                        (s = "rgb" === e.format ? (e.opacity ? "25" : "20") : e.keywords ? "11" : "7"),
                        t
                          .addClass("minicolors-input")
                          .data("minicolors-initialized", !1)
                          .data("minicolors-settings", e)
                          .prop("size", s)
                          .wrap(o)
                          .after(
                            '<div class="minicolors-panel minicolors-slider-' +
                              e.control +
                              '"><div class="minicolors-slider minicolors-sprite"><div class="minicolors-picker"></div></div><div class="minicolors-opacity-slider minicolors-sprite"><div class="minicolors-picker"></div></div><div class="minicolors-grid minicolors-sprite"><div class="minicolors-grid-inner"></div><div class="minicolors-picker"><div></div></div></div></div>',
                          ),
                        e.inline ||
                          (t.after(
                            '<span class="minicolors-swatch minicolors-sprite minicolors-input-swatch"><span class="minicolors-swatch-color"></span></span>',
                          ),
                          t.next(".minicolors-input-swatch").on("click", function (e) {
                            (e.preventDefault(), t.focus());
                          })),
                        (s = t.parent().find(".minicolors-panel"))
                          .on("selectstart", function () {
                            return !1;
                          })
                          .end(),
                        e.swatches && 0 !== e.swatches.length)
                      )
                        for (
                          s.addClass("minicolors-with-swatches"), n = b('<ul class="minicolors-swatches"></ul>').appendTo(s), i = 0;
                          i < e.swatches.length;
                          ++i
                        )
                          ((r = L((r = e.swatches[i])) ? S(r, !0) : j(C(r, !0))),
                            b('<li class="minicolors-swatch minicolors-sprite"><span class="minicolors-swatch-color"></span></li>')
                              .appendTo(n)
                              .data("swatch-color", e.swatches[i])
                              .find(".minicolors-swatch-color")
                              .css({ backgroundColor: c(r), opacity: r.a }),
                            (e.swatches[i] = r));
                      (e.inline && t.parent().addClass("minicolors-inline"), l(t, !1), t.data("minicolors-initialized", !0));
                    }
                  })(b(this), t);
                }),
                b(this)
              );
          }
          var n, r, i;
        },
      }),
      b([document, top.document])
        .on("mousedown.minicolors touchstart.minicolors", function (e) {
          b(e.target).parents().add(e.target).hasClass("minicolors") || a();
        })
        .on("mousedown.minicolors touchstart.minicolors", ".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider", function (e) {
          var t = b(this);
          (e.preventDefault(), b(e.delegateTarget).data("minicolors-target", t), n(t, e, !0));
        })
        .on("mousemove.minicolors touchmove.minicolors", function (e) {
          var t = b(e.delegateTarget).data("minicolors-target");
          t && n(t, e);
        })
        .on("mouseup.minicolors touchend.minicolors", function () {
          b(this).removeData("minicolors-target");
        })
        .on("click.minicolors", ".minicolors-swatches li", function (e) {
          e.preventDefault();
          var t = b(this),
            e = t.parents(".minicolors").find(".minicolors-input"),
            t = t.data("swatch-color");
          (x(e, t, A(t)), l(e));
        })
        .on("mousedown.minicolors touchstart.minicolors", ".minicolors-input-swatch", function (e) {
          var t = b(this).parent().find(".minicolors-input");
          (e.preventDefault(), s(t));
        })
        .on("focus.minicolors", ".minicolors-input", function () {
          var e = b(this);
          e.data("minicolors-initialized") && s(e);
        })
        .on("blur.minicolors", ".minicolors-input", function () {
          var e,
            t,
            n,
            r = b(this),
            i = r.data("minicolors-settings");
          r.data("minicolors-initialized") &&
            ((e = i.keywords
              ? b.map(i.keywords.split(","), function (e) {
                  return b.trim(e.toLowerCase());
                })
              : []),
            (n =
              "" !== r.val() && -1 < b.inArray(r.val().toLowerCase(), e)
                ? r.val()
                : null === (t = L(r.val()) ? S(r.val(), !0) : (n = C(r.val(), !0)) ? j(n) : null)
                  ? i.defaultValue
                  : "rgb" === i.format
                    ? S(
                        i.opacity
                          ? "rgba(" + t.r + "," + t.g + "," + t.b + "," + r.attr("data-opacity") + ")"
                          : "rgb(" + t.r + "," + t.g + "," + t.b + ")",
                      )
                    : c(t)),
            (t = i.opacity ? r.attr("data-opacity") : 1),
            "transparent" === n.toLowerCase() && (t = 0),
            r.closest(".minicolors").find(".minicolors-input-swatch > span").css("opacity", t),
            r.val(n),
            "" === r.val() && r.val(k(i.defaultValue, !0)),
            r.val(T(r.val(), i.letterCase)));
        })
        .on("keydown.minicolors", ".minicolors-input", function (e) {
          var t = b(this);
          if (t.data("minicolors-initialized"))
            switch (e.keyCode) {
              case 9:
                a();
                break;
              case 13:
              case 27:
                (a(), t.blur());
            }
        })
        .on("keyup.minicolors", ".minicolors-input", function () {
          var e = b(this);
          e.data("minicolors-initialized") && l(e, !0);
        })
        .on("paste.minicolors", ".minicolors-input", function () {
          var e = b(this);
          e.data("minicolors-initialized") &&
            setTimeout(function () {
              l(e, !0);
            }, 1);
        }));
  }),
  (function r(i, o, s) {
    function a(n, e) {
      if (!o[n]) {
        if (!i[n]) {
          var t = "function" == typeof require && require;
          if (!e && t) return t(n, !0);
          if (l) return l(n, !0);
          t = new Error("Cannot find module '" + n + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        t = o[n] = { exports: {} };
        i[n][0].call(
          t.exports,
          function (e) {
            var t = i[n][1][e];
            return a(t || e);
          },
          t,
          t.exports,
          r,
          i,
          o,
          s,
        );
      }
      return o[n].exports;
    }
    for (var l = "function" == typeof require && require, e = 0; e < s.length; e++) a(s[e]);
    return a;
  })(
    {
      1: [
        function (e, t, n) {
          "use strict";
          function r(e) {
            e.fn.perfectScrollbar = function (t) {
              return this.each(function () {
                var e;
                "object" == typeof t || void 0 === t
                  ? ((e = t), o.get(this) || i.initialize(this, e))
                  : "update" === (e = t)
                    ? i.update(this)
                    : "destroy" === e && i.destroy(this);
              });
            };
          }
          var i = e("../main"),
            o = e("../plugin/instances");
          ("function" == typeof define && define.amd ? define(["jquery"], r) : void 0 !== (e = window.jQuery || window.$) && r(e), (t.exports = r));
        },
        { "../main": 7, "../plugin/instances": 18 },
      ],
      2: [
        function (e, t, n) {
          "use strict";
          ((n.add = function (e, t) {
            var n;
            e.classList ? e.classList.add(t) : ((n = t), (e = (t = e).className.split(" ")).indexOf(n) < 0 && e.push(n), (t.className = e.join(" ")));
          }),
            (n.remove = function (e, t) {
              var n;
              e.classList
                ? e.classList.remove(t)
                : ((n = t), (e = (t = e).className.split(" ")), 0 <= (n = e.indexOf(n)) && e.splice(n, 1), (t.className = e.join(" ")));
            }),
            (n.list = function (e) {
              return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ");
            }));
        },
        {},
      ],
      3: [
        function (e, t, n) {
          "use strict";
          var r = {
            e: function (e, t) {
              e = document.createElement(e);
              return ((e.className = t), e);
            },
            appendTo: function (e, t) {
              return (t.appendChild(e), e);
            },
          };
          ((r.css = function (e, t, n) {
            return "object" == typeof t
              ? (function (e, t) {
                  for (var n in t) {
                    var r = t[n];
                    ("number" == typeof r && (r = r.toString() + "px"), (e.style[n] = r));
                  }
                  return e;
                })(e, t)
              : void 0 === n
                ? ((r = e), (i = t), window.getComputedStyle(r)[i])
                : ((e = e), (t = t), "number" == typeof (n = n) && (n = n.toString() + "px"), (e.style[t] = n), e);
            var r, i;
          }),
            (r.matches = function (e, t) {
              return void 0 !== e.matches
                ? e.matches(t)
                : void 0 !== e.matchesSelector
                  ? e.matchesSelector(t)
                  : void 0 !== e.webkitMatchesSelector
                    ? e.webkitMatchesSelector(t)
                    : void 0 !== e.mozMatchesSelector
                      ? e.mozMatchesSelector(t)
                      : void 0 !== e.msMatchesSelector
                        ? e.msMatchesSelector(t)
                        : void 0;
            }),
            (r.remove = function (e) {
              void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
            }),
            (r.queryChildren = function (e, t) {
              return Array.prototype.filter.call(e.childNodes, function (e) {
                return r.matches(e, t);
              });
            }),
            (t.exports = r));
        },
        {},
      ],
      4: [
        function (e, t, n) {
          "use strict";
          function r(e) {
            ((this.element = e), (this.events = {}));
          }
          ((r.prototype.bind = function (e, t) {
            (void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1));
          }),
            (r.prototype.unbind = function (t, n) {
              var r = void 0 !== n;
              this.events[t] = this.events[t].filter(function (e) {
                return !(!r || e === n) || (this.element.removeEventListener(t, e, !1), !1);
              }, this);
            }),
            (r.prototype.unbindAll = function () {
              for (var e in this.events) this.unbind(e);
            }));
          function i() {
            this.eventElements = [];
          }
          ((i.prototype.eventElement = function (t) {
            var e = this.eventElements.filter(function (e) {
              return e.element === t;
            })[0];
            return (void 0 === e && ((e = new r(t)), this.eventElements.push(e)), e);
          }),
            (i.prototype.bind = function (e, t, n) {
              this.eventElement(e).bind(t, n);
            }),
            (i.prototype.unbind = function (e, t, n) {
              this.eventElement(e).unbind(t, n);
            }),
            (i.prototype.unbindAll = function () {
              for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll();
            }),
            (i.prototype.once = function (e, t, n) {
              var r = this.eventElement(e),
                i = function (e) {
                  (r.unbind(t, i), n(e));
                };
              r.bind(t, i);
            }),
            (t.exports = i));
        },
        {},
      ],
      5: [
        function (e, t, n) {
          "use strict";
          function r() {
            return Math.floor(65536 * (1 + Math.random()))
              .toString(16)
              .substring(1);
          }
          t.exports = function () {
            return r() + r() + "-" + r() + "-" + r() + "-" + r() + "-" + r() + r() + r();
          };
        },
        {},
      ],
      6: [
        function (e, t, n) {
          "use strict";
          function r(n) {
            return function (e, t) {
              (n(e, "ps--in-scrolling"), void 0 !== t ? n(e, "ps--" + t) : (n(e, "ps--x"), n(e, "ps--y")));
            };
          }
          var i = e("./class"),
            o = e("./dom"),
            s = (n.toInt = function (e) {
              return parseInt(e, 10) || 0;
            }),
            a = (n.clone = function (e) {
              if (e) {
                if (Array.isArray(e)) return e.map(a);
                if ("object" != typeof e) return e;
                var t,
                  n = {};
                for (t in e) n[t] = a(e[t]);
                return n;
              }
              return null;
            });
          ((n.extend = function (e, t) {
            var n,
              r = a(e);
            for (n in t) r[n] = a(t[n]);
            return r;
          }),
            (n.isEditable = function (e) {
              return (
                o.matches(e, "input,[contenteditable]") ||
                o.matches(e, "select,[contenteditable]") ||
                o.matches(e, "textarea,[contenteditable]") ||
                o.matches(e, "button,[contenteditable]")
              );
            }),
            (n.removePsClasses = function (e) {
              for (var t = i.list(e), n = 0; n < t.length; n++) {
                var r = t[n];
                0 === r.indexOf("ps-") && i.remove(e, r);
              }
            }),
            (n.outerWidth = function (e) {
              return (
                s(o.css(e, "width")) +
                s(o.css(e, "paddingLeft")) +
                s(o.css(e, "paddingRight")) +
                s(o.css(e, "borderLeftWidth")) +
                s(o.css(e, "borderRightWidth"))
              );
            }),
            (n.startScrolling = r(i.add)),
            (n.stopScrolling = r(i.remove)),
            (n.env = {
              isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
              supportsTouch:
                "undefined" != typeof window && ("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
              supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints,
            }));
        },
        { "./class": 2, "./dom": 3 },
      ],
      7: [
        function (e, t, n) {
          "use strict";
          var r = e("./plugin/destroy"),
            i = e("./plugin/initialize"),
            e = e("./plugin/update");
          t.exports = { initialize: i, update: e, destroy: r };
        },
        { "./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21 },
      ],
      8: [
        function (e, t, n) {
          "use strict";
          t.exports = {
            handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default",
          };
        },
        {},
      ],
      9: [
        function (e, t, n) {
          "use strict";
          var r = e("../lib/helper"),
            i = e("../lib/dom"),
            o = e("./instances");
          t.exports = function (e) {
            var t = o.get(e);
            t &&
              (t.event.unbindAll(),
              i.remove(t.scrollbarX),
              i.remove(t.scrollbarY),
              i.remove(t.scrollbarXRail),
              i.remove(t.scrollbarYRail),
              r.removePsClasses(e),
              o.remove(e));
          };
        },
        { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 },
      ],
      10: [
        function (e, t, n) {
          "use strict";
          function r(n, r) {
            function i(e) {
              return e.getBoundingClientRect();
            }
            function e(e) {
              e.stopPropagation();
            }
            (r.event.bind(r.scrollbarY, "click", e),
              r.event.bind(r.scrollbarYRail, "click", function (e) {
                var t = e.pageY - window.pageYOffset - i(r.scrollbarYRail).top > r.scrollbarYTop ? 1 : -1;
                (s(n, "top", n.scrollTop + t * r.containerHeight), o(n), e.stopPropagation());
              }),
              r.event.bind(r.scrollbarX, "click", e),
              r.event.bind(r.scrollbarXRail, "click", function (e) {
                var t = e.pageX - window.pageXOffset - i(r.scrollbarXRail).left > r.scrollbarXLeft ? 1 : -1;
                (s(n, "left", n.scrollLeft + t * r.containerWidth), o(n), e.stopPropagation());
              }));
          }
          var i = e("../instances"),
            o = e("../update-geometry"),
            s = e("../update-scroll");
          t.exports = function (e) {
            r(e, i.get(e));
          };
        },
        { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 },
      ],
      11: [
        function (e, t, n) {
          "use strict";
          function r(r, i) {
            function t(e) {
              var t, n;
              ((t = e.pageX - s),
                (n = o + t * i.railXRatio),
                (t = Math.max(0, i.scrollbarXRail.getBoundingClientRect().left) + i.railXRatio * (i.railXWidth - i.scrollbarXWidth)),
                (i.scrollbarXLeft = n < 0 ? 0 : t < n ? t : n),
                (n =
                  a.toInt((i.scrollbarXLeft * (i.contentWidth - i.containerWidth)) / (i.containerWidth - i.railXRatio * i.scrollbarXWidth)) -
                  i.negativeScrollAdjustment),
                u(r, "left", n),
                c(r),
                e.stopPropagation(),
                e.preventDefault());
            }
            function n() {
              (a.stopScrolling(r, "x"), i.event.unbind(i.ownerDocument, "mousemove", t));
            }
            var o = null,
              s = null;
            i.event.bind(i.scrollbarX, "mousedown", function (e) {
              ((s = e.pageX),
                (o = a.toInt(l.css(i.scrollbarX, "left")) * i.railXRatio),
                a.startScrolling(r, "x"),
                i.event.bind(i.ownerDocument, "mousemove", t),
                i.event.once(i.ownerDocument, "mouseup", n),
                e.stopPropagation(),
                e.preventDefault());
            });
          }
          function i(r, i) {
            function t(e) {
              var t, n;
              ((t = e.pageY - s),
                (n = o + t * i.railYRatio),
                (t = Math.max(0, i.scrollbarYRail.getBoundingClientRect().top) + i.railYRatio * (i.railYHeight - i.scrollbarYHeight)),
                (i.scrollbarYTop = n < 0 ? 0 : t < n ? t : n),
                (n = a.toInt((i.scrollbarYTop * (i.contentHeight - i.containerHeight)) / (i.containerHeight - i.railYRatio * i.scrollbarYHeight))),
                u(r, "top", n),
                c(r),
                e.stopPropagation(),
                e.preventDefault());
            }
            function n() {
              (a.stopScrolling(r, "y"), i.event.unbind(i.ownerDocument, "mousemove", t));
            }
            var o = null,
              s = null;
            i.event.bind(i.scrollbarY, "mousedown", function (e) {
              ((s = e.pageY),
                (o = a.toInt(l.css(i.scrollbarY, "top")) * i.railYRatio),
                a.startScrolling(r, "y"),
                i.event.bind(i.ownerDocument, "mousemove", t),
                i.event.once(i.ownerDocument, "mouseup", n),
                e.stopPropagation(),
                e.preventDefault());
            });
          }
          var a = e("../../lib/helper"),
            l = e("../../lib/dom"),
            o = e("../instances"),
            c = e("../update-geometry"),
            u = e("../update-scroll");
          t.exports = function (e) {
            var t = o.get(e);
            (r(e, t), i(e, t));
          };
        },
        { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 },
      ],
      12: [
        function (e, t, n) {
          "use strict";
          function r(o, s) {
            var a = !1;
            (s.event.bind(o, "mouseenter", function () {
              a = !0;
            }),
              s.event.bind(o, "mouseleave", function () {
                a = !1;
              }));
            s.event.bind(s.ownerDocument, "keydown", function (e) {
              if (!((e.isDefaultPrevented && e.isDefaultPrevented()) || e.defaultPrevented)) {
                var t = c.matches(s.scrollbarX, ":focus") || c.matches(s.scrollbarY, ":focus");
                if (a || t) {
                  var n = document.activeElement || s.ownerDocument.activeElement;
                  if (n) {
                    if ("IFRAME" === n.tagName) n = n.contentDocument.activeElement;
                    else for (; n.shadowRoot; ) n = n.shadowRoot.activeElement;
                    if (l.isEditable(n)) return;
                  }
                  var r = 0,
                    i = 0;
                  switch (e.which) {
                    case 37:
                      r = e.metaKey ? -s.contentWidth : e.altKey ? -s.containerWidth : -30;
                      break;
                    case 38:
                      i = e.metaKey ? s.contentHeight : e.altKey ? s.containerHeight : 30;
                      break;
                    case 39:
                      r = e.metaKey ? s.contentWidth : e.altKey ? s.containerWidth : 30;
                      break;
                    case 40:
                      i = e.metaKey ? -s.contentHeight : e.altKey ? -s.containerHeight : -30;
                      break;
                    case 33:
                      i = 90;
                      break;
                    case 32:
                      i = e.shiftKey ? 90 : -90;
                      break;
                    case 34:
                      i = -90;
                      break;
                    case 35:
                      i = e.ctrlKey ? -s.contentHeight : -s.containerHeight;
                      break;
                    case 36:
                      i = e.ctrlKey ? o.scrollTop : s.containerHeight;
                      break;
                    default:
                      return;
                  }
                  (d(o, "top", o.scrollTop - i),
                    d(o, "left", o.scrollLeft + r),
                    u(o),
                    (function (e, t) {
                      var n = o.scrollTop;
                      if (0 === e) {
                        if (!s.scrollbarYActive) return !1;
                        if ((0 === n && 0 < t) || (n >= s.contentHeight - s.containerHeight && t < 0)) return !s.settings.wheelPropagation;
                      }
                      if (((n = o.scrollLeft), 0 === t)) {
                        if (!s.scrollbarXActive) return !1;
                        if ((0 === n && e < 0) || (n >= s.contentWidth - s.containerWidth && 0 < e)) return !s.settings.wheelPropagation;
                      }
                      return !0;
                    })(r, i) && e.preventDefault());
                }
              }
            });
          }
          var l = e("../../lib/helper"),
            c = e("../../lib/dom"),
            i = e("../instances"),
            u = e("../update-geometry"),
            d = e("../update-scroll");
          t.exports = function (e) {
            r(e, i.get(e));
          };
        },
        { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 },
      ],
      13: [
        function (e, t, n) {
          "use strict";
          function r(i, o) {
            function e(e) {
              var t,
                n,
                r,
                n =
                  ((n = (t = e).deltaX),
                  (r = -1 * t.deltaY),
                  (void 0 !== n && void 0 !== r) || ((n = (-1 * t.wheelDeltaX) / 6), (r = t.wheelDeltaY / 6)),
                  t.deltaMode && 1 === t.deltaMode && ((n *= 10), (r *= 10)),
                  n != n && r != r && ((n = 0), (r = t.wheelDelta)),
                  t.shiftKey ? [-r, -n] : [n, r]),
                r = n[0],
                n = n[1];
              !(function (e, t) {
                var n = i.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                if (n) {
                  var r = window.getComputedStyle(n);
                  if (![r.overflow, r.overflowX, r.overflowY].join("").match(/(scroll|auto)/)) return;
                  r = n.scrollHeight - n.clientHeight;
                  if (0 < r && !((0 === n.scrollTop && 0 < t) || (n.scrollTop === r && t < 0))) return 1;
                  t = n.scrollLeft - n.clientWidth;
                  if (0 < t && !((0 === n.scrollLeft && e < 0) || (n.scrollLeft === t && 0 < e))) return 1;
                }
              })(r, n) &&
                ((s = !1),
                o.settings.useBothWheelAxes
                  ? o.scrollbarYActive && !o.scrollbarXActive
                    ? (l(i, "top", n ? i.scrollTop - n * o.settings.wheelSpeed : i.scrollTop + r * o.settings.wheelSpeed), (s = !0))
                    : o.scrollbarXActive &&
                      !o.scrollbarYActive &&
                      (l(i, "left", r ? i.scrollLeft + r * o.settings.wheelSpeed : i.scrollLeft - n * o.settings.wheelSpeed), (s = !0))
                  : (l(i, "top", i.scrollTop - n * o.settings.wheelSpeed), l(i, "left", i.scrollLeft + r * o.settings.wheelSpeed)),
                a(i),
                (s =
                  s ||
                  (function (e, t) {
                    var n = i.scrollTop;
                    if (0 === e) {
                      if (!o.scrollbarYActive) return !1;
                      if ((0 === n && 0 < t) || (n >= o.contentHeight - o.containerHeight && t < 0)) return !o.settings.wheelPropagation;
                    }
                    if (((n = i.scrollLeft), 0 === t)) {
                      if (!o.scrollbarXActive) return !1;
                      if ((0 === n && e < 0) || (n >= o.contentWidth - o.containerWidth && 0 < e)) return !o.settings.wheelPropagation;
                    }
                    return !0;
                  })(r, n)) && (e.stopPropagation(), e.preventDefault()));
            }
            var s = !1;
            void 0 !== window.onwheel ? o.event.bind(i, "wheel", e) : void 0 !== window.onmousewheel && o.event.bind(i, "mousewheel", e);
          }
          var i = e("../instances"),
            a = e("../update-geometry"),
            l = e("../update-scroll");
          t.exports = function (e) {
            r(e, i.get(e));
          };
        },
        { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 },
      ],
      14: [
        function (e, t, n) {
          "use strict";
          var r = e("../instances"),
            i = e("../update-geometry");
          t.exports = function (e) {
            var t,
              n = r.get(e);
            ((t = e),
              n.event.bind(t, "scroll", function () {
                i(t);
              }));
          };
        },
        { "../instances": 18, "../update-geometry": 19 },
      ],
      15: [
        function (e, t, n) {
          "use strict";
          function r(s, e) {
            function a() {
              (l && (clearInterval(l), (l = null)), d.stopScrolling(s));
            }
            var l = null,
              c = { top: 0, left: 0 },
              u = !1;
            (e.event.bind(e.ownerDocument, "selectionchange", function () {
              var e;
              s.contains(
                0 === (e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "").toString().length
                  ? null
                  : e.getRangeAt(0).commonAncestorContainer,
              )
                ? (u = !0)
                : ((u = !1), a());
            }),
              e.event.bind(window, "mouseup", function () {
                u && ((u = !1), a());
              }),
              e.event.bind(window, "keyup", function () {
                u && ((u = !1), a());
              }),
              e.event.bind(window, "mousemove", function (e) {
                var t, n, r, i, o;
                u &&
                  ((t = e.pageX),
                  (n = e.pageY),
                  (r = s.offsetLeft),
                  (i = s.offsetLeft + s.offsetWidth),
                  (o = s.offsetTop),
                  (e = s.offsetTop + s.offsetHeight),
                  t < r + 3 ? ((c.left = -5), d.startScrolling(s, "x")) : i - 3 < t ? ((c.left = 5), d.startScrolling(s, "x")) : (c.left = 0),
                  n < o + 3
                    ? ((c.top = o + 3 - n < 5 ? -5 : -20), d.startScrolling(s, "y"))
                    : e - 3 < n
                      ? ((c.top = n - e + 3 < 5 ? 5 : 20), d.startScrolling(s, "y"))
                      : (c.top = 0),
                  0 === c.top && 0 === c.left
                    ? a()
                    : (l =
                        l ||
                        setInterval(function () {
                          return f.get(s)
                            ? (h(s, "top", s.scrollTop + c.top), h(s, "left", s.scrollLeft + c.left), void p(s))
                            : void clearInterval(l);
                        }, 50)));
              }));
          }
          var d = e("../../lib/helper"),
            f = e("../instances"),
            p = e("../update-geometry"),
            h = e("../update-scroll");
          t.exports = function (e) {
            r(e, f.get(e));
          };
        },
        { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 },
      ],
      16: [
        function (e, t, n) {
          "use strict";
          function r(s, a, e, t) {
            function o(e, t) {
              (x(s, "top", s.scrollTop - t), x(s, "left", s.scrollLeft - e), b(s));
            }
            function n() {
              m = !0;
            }
            function r() {
              m = !1;
            }
            function l(e) {
              return e.targetTouches ? e.targetTouches[0] : e;
            }
            function c(e) {
              return (
                (e.targetTouches && 1 === e.targetTouches.length) ||
                (e.pointerType && "mouse" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_MOUSE)
              );
            }
            function u(e) {
              var t;
              c(e) &&
                ((v = !0),
                (t = l(e)),
                (f.pageX = t.pageX),
                (f.pageY = t.pageY),
                (p = new Date().getTime()),
                null !== g && clearInterval(g),
                e.stopPropagation());
            }
            function i(e) {
              var t, n, r, i;
              (!v && a.settings.swipePropagation && u(e),
                !m &&
                  v &&
                  c(e) &&
                  (o((t = (i = { pageX: (r = l(e)).pageX, pageY: r.pageY }).pageX - f.pageX), (n = i.pageY - f.pageY)),
                  (f = i),
                  0 < (i = (r = new Date().getTime()) - p) && ((h.x = t / i), (h.y = n / i), (p = r)),
                  (function (e, t) {
                    var n = s.scrollTop,
                      r = s.scrollLeft,
                      i = Math.abs(e),
                      o = Math.abs(t);
                    if (i < o) {
                      if ((t < 0 && n === a.contentHeight - a.containerHeight) || (0 < t && 0 === n)) return !a.settings.swipePropagation;
                    } else if (o < i && ((e < 0 && r === a.contentWidth - a.containerWidth) || (0 < e && 0 === r)))
                      return !a.settings.swipePropagation;
                    return 1;
                  })(t, n) && (e.stopPropagation(), e.preventDefault())));
            }
            function d() {
              !m &&
                v &&
                ((v = !1),
                a.settings.swipeEasing &&
                  (clearInterval(g),
                  (g = setInterval(function () {
                    return !y.get(s) || (!h.x && !h.y) || (Math.abs(h.x) < 0.01 && Math.abs(h.y) < 0.01)
                      ? void clearInterval(g)
                      : (o(30 * h.x, 30 * h.y), (h.x *= 0.8), void (h.y *= 0.8));
                  }, 10))));
            }
            var f = {},
              p = 0,
              h = {},
              g = null,
              m = !1,
              v = !1;
            e
              ? (a.event.bind(window, "touchstart", n),
                a.event.bind(window, "touchend", r),
                a.event.bind(s, "touchstart", u),
                a.event.bind(s, "touchmove", i),
                a.event.bind(s, "touchend", d))
              : t &&
                (window.PointerEvent
                  ? (a.event.bind(window, "pointerdown", n),
                    a.event.bind(window, "pointerup", r),
                    a.event.bind(s, "pointerdown", u),
                    a.event.bind(s, "pointermove", i),
                    a.event.bind(s, "pointerup", d))
                  : window.MSPointerEvent &&
                    (a.event.bind(window, "MSPointerDown", n),
                    a.event.bind(window, "MSPointerUp", r),
                    a.event.bind(s, "MSPointerDown", u),
                    a.event.bind(s, "MSPointerMove", i),
                    a.event.bind(s, "MSPointerUp", d)));
          }
          var i = e("../../lib/helper"),
            y = e("../instances"),
            b = e("../update-geometry"),
            x = e("../update-scroll");
          t.exports = function (e) {
            (i.env.supportsTouch || i.env.supportsIePointer) && r(e, y.get(e), i.env.supportsTouch, i.env.supportsIePointer);
          };
        },
        { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 },
      ],
      17: [
        function (e, t, n) {
          "use strict";
          var r = e("../lib/helper"),
            i = e("../lib/class"),
            o = e("./instances"),
            s = e("./update-geometry"),
            a = {
              "click-rail": e("./handler/click-rail"),
              "drag-scrollbar": e("./handler/drag-scrollbar"),
              keyboard: e("./handler/keyboard"),
              wheel: e("./handler/mouse-wheel"),
              touch: e("./handler/touch"),
              selection: e("./handler/selection"),
            },
            l = e("./handler/native-scroll");
          t.exports = function (t, e) {
            ((e = "object" == typeof e ? e : {}), i.add(t, "ps"));
            var n = o.add(t);
            ((n.settings = r.extend(n.settings, e)),
              i.add(t, "ps--theme_" + n.settings.theme),
              n.settings.handlers.forEach(function (e) {
                a[e](t);
              }),
              l(t),
              s(t));
          };
        },
        {
          "../lib/class": 2,
          "../lib/helper": 6,
          "./handler/click-rail": 10,
          "./handler/drag-scrollbar": 11,
          "./handler/keyboard": 12,
          "./handler/mouse-wheel": 13,
          "./handler/native-scroll": 14,
          "./handler/selection": 15,
          "./handler/touch": 16,
          "./instances": 18,
          "./update-geometry": 19,
        },
      ],
      18: [
        function (e, t, n) {
          "use strict";
          function r(e) {
            function t() {
              a.add(e, "ps--focus");
            }
            function n() {
              a.remove(e, "ps--focus");
            }
            var r,
              i,
              o = this;
            ((o.settings = s.clone(l)),
              (o.containerWidth = null),
              (o.containerHeight = null),
              (o.contentWidth = null),
              (o.contentHeight = null),
              (o.isRtl = "rtl" === c.css(e, "direction")),
              (o.isNegativeScroll = ((i = e.scrollLeft), (e.scrollLeft = -1), (r = e.scrollLeft < 0), (e.scrollLeft = i), r)),
              (o.negativeScrollAdjustment = o.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
              (o.event = new u()),
              (o.ownerDocument = e.ownerDocument || document),
              (o.scrollbarXRail = c.appendTo(c.e("div", "ps__scrollbar-x-rail"), e)),
              (o.scrollbarX = c.appendTo(c.e("div", "ps__scrollbar-x"), o.scrollbarXRail)),
              o.scrollbarX.setAttribute("tabindex", 0),
              o.event.bind(o.scrollbarX, "focus", t),
              o.event.bind(o.scrollbarX, "blur", n),
              (o.scrollbarXActive = null),
              (o.scrollbarXWidth = null),
              (o.scrollbarXLeft = null),
              (o.scrollbarXBottom = s.toInt(c.css(o.scrollbarXRail, "bottom"))),
              (o.isScrollbarXUsingBottom = o.scrollbarXBottom == o.scrollbarXBottom),
              (o.scrollbarXTop = o.isScrollbarXUsingBottom ? null : s.toInt(c.css(o.scrollbarXRail, "top"))),
              (o.railBorderXWidth = s.toInt(c.css(o.scrollbarXRail, "borderLeftWidth")) + s.toInt(c.css(o.scrollbarXRail, "borderRightWidth"))),
              c.css(o.scrollbarXRail, "display", "block"),
              (o.railXMarginWidth = s.toInt(c.css(o.scrollbarXRail, "marginLeft")) + s.toInt(c.css(o.scrollbarXRail, "marginRight"))),
              c.css(o.scrollbarXRail, "display", ""),
              (o.railXWidth = null),
              (o.railXRatio = null),
              (o.scrollbarYRail = c.appendTo(c.e("div", "ps__scrollbar-y-rail"), e)),
              (o.scrollbarY = c.appendTo(c.e("div", "ps__scrollbar-y"), o.scrollbarYRail)),
              o.scrollbarY.setAttribute("tabindex", 0),
              o.event.bind(o.scrollbarY, "focus", t),
              o.event.bind(o.scrollbarY, "blur", n),
              (o.scrollbarYActive = null),
              (o.scrollbarYHeight = null),
              (o.scrollbarYTop = null),
              (o.scrollbarYRight = s.toInt(c.css(o.scrollbarYRail, "right"))),
              (o.isScrollbarYUsingRight = o.scrollbarYRight == o.scrollbarYRight),
              (o.scrollbarYLeft = o.isScrollbarYUsingRight ? null : s.toInt(c.css(o.scrollbarYRail, "left"))),
              (o.scrollbarYOuterWidth = o.isRtl ? s.outerWidth(o.scrollbarY) : null),
              (o.railBorderYWidth = s.toInt(c.css(o.scrollbarYRail, "borderTopWidth")) + s.toInt(c.css(o.scrollbarYRail, "borderBottomWidth"))),
              c.css(o.scrollbarYRail, "display", "block"),
              (o.railYMarginHeight = s.toInt(c.css(o.scrollbarYRail, "marginTop")) + s.toInt(c.css(o.scrollbarYRail, "marginBottom"))),
              c.css(o.scrollbarYRail, "display", ""),
              (o.railYHeight = null),
              (o.railYRatio = null));
          }
          function i(e) {
            return e.getAttribute("data-ps-id");
          }
          var s = e("../lib/helper"),
            a = e("../lib/class"),
            l = e("./default-setting"),
            c = e("../lib/dom"),
            u = e("../lib/event-manager"),
            o = e("../lib/guid"),
            d = {};
          ((n.add = function (e) {
            var t,
              n = o();
            return ((t = n), e.setAttribute("data-ps-id", t), (d[n] = new r(e)), d[n]);
          }),
            (n.remove = function (e) {
              (delete d[i(e)], e.removeAttribute("data-ps-id"));
            }),
            (n.get = function (e) {
              return d[i(e)];
            }));
        },
        { "../lib/class": 2, "../lib/dom": 3, "../lib/event-manager": 4, "../lib/guid": 5, "../lib/helper": 6, "./default-setting": 8 },
      ],
      19: [
        function (e, t, n) {
          "use strict";
          function o(e, t) {
            return (
              e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
              e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
              t
            );
          }
          var s = e("../lib/helper"),
            a = e("../lib/class"),
            l = e("../lib/dom"),
            c = e("./instances"),
            u = e("./update-scroll");
          t.exports = function (e) {
            var t,
              n,
              r,
              i = c.get(e);
            ((i.containerWidth = e.clientWidth),
              (i.containerHeight = e.clientHeight),
              (i.contentWidth = e.scrollWidth),
              (i.contentHeight = e.scrollHeight),
              e.contains(i.scrollbarXRail) ||
                (0 < (r = l.queryChildren(e, ".ps__scrollbar-x-rail")).length &&
                  r.forEach(function (e) {
                    l.remove(e);
                  }),
                l.appendTo(i.scrollbarXRail, e)),
              e.contains(i.scrollbarYRail) ||
                (0 < (r = l.queryChildren(e, ".ps__scrollbar-y-rail")).length &&
                  r.forEach(function (e) {
                    l.remove(e);
                  }),
                l.appendTo(i.scrollbarYRail, e)),
              !i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
                ? ((i.scrollbarXActive = !0),
                  (i.railXWidth = i.containerWidth - i.railXMarginWidth),
                  (i.railXRatio = i.containerWidth / i.railXWidth),
                  (i.scrollbarXWidth = o(i, s.toInt((i.railXWidth * i.containerWidth) / i.contentWidth))),
                  (i.scrollbarXLeft = s.toInt(
                    ((i.negativeScrollAdjustment + e.scrollLeft) * (i.railXWidth - i.scrollbarXWidth)) / (i.contentWidth - i.containerWidth),
                  )))
                : (i.scrollbarXActive = !1),
              !i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
                ? ((i.scrollbarYActive = !0),
                  (i.railYHeight = i.containerHeight - i.railYMarginHeight),
                  (i.railYRatio = i.containerHeight / i.railYHeight),
                  (i.scrollbarYHeight = o(i, s.toInt((i.railYHeight * i.containerHeight) / i.contentHeight))),
                  (i.scrollbarYTop = s.toInt((e.scrollTop * (i.railYHeight - i.scrollbarYHeight)) / (i.contentHeight - i.containerHeight))))
                : (i.scrollbarYActive = !1),
              i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth && (i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth),
              i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight && (i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight),
              (t = e),
              (r = { width: (n = i).railXWidth }),
              n.isRtl ? (r.left = n.negativeScrollAdjustment + t.scrollLeft + n.containerWidth - n.contentWidth) : (r.left = t.scrollLeft),
              n.isScrollbarXUsingBottom ? (r.bottom = n.scrollbarXBottom - t.scrollTop) : (r.top = n.scrollbarXTop + t.scrollTop),
              l.css(n.scrollbarXRail, r),
              (r = { top: t.scrollTop, height: n.railYHeight }),
              n.isScrollbarYUsingRight
                ? n.isRtl
                  ? (r.right = n.contentWidth - (n.negativeScrollAdjustment + t.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth)
                  : (r.right = n.scrollbarYRight - t.scrollLeft)
                : n.isRtl
                  ? (r.left =
                      n.negativeScrollAdjustment + t.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth)
                  : (r.left = n.scrollbarYLeft + t.scrollLeft),
              l.css(n.scrollbarYRail, r),
              l.css(n.scrollbarX, { left: n.scrollbarXLeft, width: n.scrollbarXWidth - n.railBorderXWidth }),
              l.css(n.scrollbarY, { top: n.scrollbarYTop, height: n.scrollbarYHeight - n.railBorderYWidth }),
              i.scrollbarXActive
                ? a.add(e, "ps--active-x")
                : (a.remove(e, "ps--active-x"), (i.scrollbarXWidth = 0), (i.scrollbarXLeft = 0), u(e, "left", 0)),
              i.scrollbarYActive
                ? a.add(e, "ps--active-y")
                : (a.remove(e, "ps--active-y"), (i.scrollbarYHeight = 0), (i.scrollbarYTop = 0), u(e, "top", 0)));
          };
        },
        { "../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-scroll": 20 },
      ],
      20: [
        function (e, t, n) {
          "use strict";
          function i(e) {
            var t = document.createEvent("Event");
            return (t.initEvent(e, !0, !0), t);
          }
          var o = e("./instances");
          t.exports = function (e, t, n) {
            if (void 0 === e) throw "You must provide an element to the update-scroll function";
            if (void 0 === t) throw "You must provide an axis to the update-scroll function";
            if (void 0 === n) throw "You must provide a value to the update-scroll function";
            ("top" === t && n <= 0 && ((e.scrollTop = n = 0), e.dispatchEvent(i("ps-y-reach-start"))),
              "left" === t && n <= 0 && ((e.scrollLeft = n = 0), e.dispatchEvent(i("ps-x-reach-start"))));
            var r = o.get(e);
            ("top" === t &&
              n >= r.contentHeight - r.containerHeight &&
              ((n = r.contentHeight - r.containerHeight) - e.scrollTop <= 1 ? (n = e.scrollTop) : (e.scrollTop = n),
              e.dispatchEvent(i("ps-y-reach-end"))),
              "left" === t &&
                n >= r.contentWidth - r.containerWidth &&
                ((n = r.contentWidth - r.containerWidth) - e.scrollLeft <= 1 ? (n = e.scrollLeft) : (e.scrollLeft = n),
                e.dispatchEvent(i("ps-x-reach-end"))),
              void 0 === r.lastTop && (r.lastTop = e.scrollTop),
              void 0 === r.lastLeft && (r.lastLeft = e.scrollLeft),
              "top" === t && n < r.lastTop && e.dispatchEvent(i("ps-scroll-up")),
              "top" === t && n > r.lastTop && e.dispatchEvent(i("ps-scroll-down")),
              "left" === t && n < r.lastLeft && e.dispatchEvent(i("ps-scroll-left")),
              "left" === t && n > r.lastLeft && e.dispatchEvent(i("ps-scroll-right")),
              "top" === t && n !== r.lastTop && ((e.scrollTop = r.lastTop = n), e.dispatchEvent(i("ps-scroll-y"))),
              "left" === t && n !== r.lastLeft && ((e.scrollLeft = r.lastLeft = n), e.dispatchEvent(i("ps-scroll-x"))));
          };
        },
        { "./instances": 18 },
      ],
      21: [
        function (e, t, n) {
          "use strict";
          var r = e("../lib/helper"),
            i = e("../lib/dom"),
            o = e("./instances"),
            s = e("./update-geometry"),
            a = e("./update-scroll");
          t.exports = function (e) {
            var t = o.get(e);
            t &&
              ((t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
              i.css(t.scrollbarXRail, "display", "block"),
              i.css(t.scrollbarYRail, "display", "block"),
              (t.railXMarginWidth = r.toInt(i.css(t.scrollbarXRail, "marginLeft")) + r.toInt(i.css(t.scrollbarXRail, "marginRight"))),
              (t.railYMarginHeight = r.toInt(i.css(t.scrollbarYRail, "marginTop")) + r.toInt(i.css(t.scrollbarYRail, "marginBottom"))),
              i.css(t.scrollbarXRail, "display", "none"),
              i.css(t.scrollbarYRail, "display", "none"),
              s(e),
              a(e, "top", e.scrollTop),
              a(e, "left", e.scrollLeft),
              i.css(t.scrollbarXRail, "display", ""),
              i.css(t.scrollbarYRail, "display", ""));
          };
        },
        { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19, "./update-scroll": 20 },
      ],
    },
    {},
    [1],
  ));