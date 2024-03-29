"use strict";

// import './jquery.flexslider-min.js'

/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a);
  } : b(a);
}("undefined" != typeof window ? window : void 0, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "2.2.4",
      n = function (a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function (a, b) {
    return b.toUpperCase();
  };

  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function () {
      return e.call(this);
    },
    get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    },
    pushStack: function (a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function (a) {
      return n.each(this, a);
    },
    map: function (a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function () {
      return this.pushStack(e.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: g,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;

    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));

    return g;
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (a) {
      throw new Error(a);
    },
    noop: function () {},
    isFunction: function (a) {
      return "function" === n.type(a);
    },
    isArray: Array.isArray,
    isWindow: function (a) {
      return null != a && a === a.window;
    },
    isNumeric: function (a) {
      var b = a && a.toString();
      return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    },
    isPlainObject: function (a) {
      var b;
      if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
      if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;

      for (b in a);

      return void 0 === b || k.call(a, b);
    },
    isEmptyObject: function (a) {
      var b;

      for (b in a) return !1;

      return !0;
    },
    type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a;
    },
    globalEval: function (a) {
      var b,
          c = eval;
      a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    },
    camelCase: function (a) {
      return a.replace(p, "ms-").replace(q, r);
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function (a, b) {
      var c,
          d = 0;

      if (s(a)) {
        for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break;
      } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;

      return a;
    },
    trim: function (a) {
      return null == a ? "" : (a + "").replace(o, "");
    },
    makeArray: function (a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    },
    inArray: function (a, b, c) {
      return null == b ? -1 : h.call(b, a, c);
    },
    merge: function (a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];

      return a.length = e, a;
    },
    grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);

      return e;
    },
    map: function (a, b, c) {
      var d,
          e,
          g = 0,
          h = [];
      if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);else for (g in a) e = b(a[g], g, c), null != e && h.push(e);
      return f.apply([], h);
    },
    guid: 1,
    proxy: function (a, b) {
      var c, d, f;
      return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function () {
        return a.apply(b || this, d.concat(e.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    },
    now: Date.now,
    support: l
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });

  function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }

  var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function (a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function (a, b) {
      for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;

      return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = {
      ID: new RegExp("^#(" + M + ")"),
      CLASS: new RegExp("^\\.(" + M + ")"),
      TAG: new RegExp("^(" + M + "|[*])"),
      ATTR: new RegExp("^" + N),
      PSEUDO: new RegExp("^" + O),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + K + ")$", "i"),
      needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
    },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function (a, b, c) {
      var d = "0x" + b - 65536;
      return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function () {
      m();
    };

    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;

          while (a[c++] = b[d++]);

          a.length = c - 1;
        }
      };
    }

    function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;

      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;
            if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
          if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }

        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";

            while (h--) r[h] = l + " " + qa(r[h]);

            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }

      return i(a.replace(Q, "$1"), b, d, e);
    }

    function ga() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }

      return b;
    }

    function ha(a) {
      return a[u] = !0, a;
    }

    function ia(a) {
      var b = n.createElement("div");

      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }

    function ja(a, b) {
      var c = a.split("|"),
          e = c.length;

      while (e--) d.attrHandle[c[e]] = b;
    }

    function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while (c = c.nextSibling) if (c === b) return -1;
      return a ? 1 : -1;
    }

    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }

    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }

    function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;

          while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
        });
      });
    }

    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }

    c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);

        if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);

          return d;
        }

        return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) if (b === a) return !0;
        return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return ka(a, b);
        c = a;

        while (c = c.parentNode) g.unshift(c);

        c = b;

        while (c = c.parentNode) h.unshift(c);

        while (g[d] === h[d]) d++;

        return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}
      return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;

      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));

        while (e--) a.splice(d[e], 1);
      }

      return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;

      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;

          for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) c += e(b);

      return c;
    }, d = fa.selectors = {
      cacheLength: 50,
      createPseudo: ha,
      match: W,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        },
        CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        },
        PSEUDO: function (a) {
          var b,
              c = !a[6] && a[2];
          return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function (a) {
          var b = a.replace(ba, ca).toLowerCase();
          return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function (a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        },
        ATTR: function (a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        },
        CHILD: function (a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;

            if (q) {
              if (f) {
                while (p) {
                  m = b;

                  while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;

                  o = p = "only" === a && !o && "nextSibling";
                }

                return !0;
              }

              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];

                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                  k[a] = [w, n, t];
                  break;
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;

              return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        },
        PSEUDO: function (a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;

            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));
          return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;

            while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }),
        has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }),
        contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }),
        lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;

            do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);

            return !1;
          };
        }),
        target: function (b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id;
        },
        root: function (a) {
          return a === o;
        },
        focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function (a) {
          return a.disabled === !1;
        },
        disabled: function (a) {
          return a.disabled === !0;
        },
        checked: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected;
        },
        selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;

          return !0;
        },
        parent: function (a) {
          return !d.pseudos.empty(a);
        },
        header: function (a) {
          return Y.test(a.nodeName);
        },
        input: function (a) {
          return X.test(a.nodeName);
        },
        button: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b;
        },
        text: function (a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        },
        first: na(function () {
          return [0];
        }),
        last: na(function (a, b) {
          return [b - 1];
        }),
        eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }),
        even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);

          return a;
        }),
        odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);

          return a;
        }),
        lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);

          return a;
        }),
        gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);

          return a;
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;

    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) d.pseudos[b] = la(b);

    for (b in {
      submit: !0,
      reset: !0
    }) d.pseudos[b] = ma(b);

    function pa() {}

    pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;

      while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(Q, " ")
        }), h = h.slice(c.length));

        for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));

        if (!c) break;
      }

      return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };

    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;

      return d;
    }

    function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];

        if (g) {
          while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
        } else while (b = b[d]) if (1 === b.nodeType || e) {
          if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
          if (i[d] = k, k[2] = a(b, c, g)) return !0;
        }
      };
    }

    function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;

        while (e--) if (!a[e](b, c, d)) return !1;

        return !0;
      } : a[0];
    }

    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);

      return c;
    }

    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));

      return g;
    }

    function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;

        if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;

          while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
        }

        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;

              while (k--) (l = r[k]) && j.push(q[k] = l);

              e(null, r = [], j, i);
            }

            k = r.length;

            while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }

    function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
        return b = null, e;
      }]; f > i; i++) if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
          for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;

          return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
            value: " " === a[i - 2].type ? "*" : ""
          })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
        }

        m.push(c);
      }

      return sa(m);
    }

    function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function (f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;

        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);

            while (q = a[o++]) if (q(l, g || n, h)) {
              i.push(l);
              break;
            }

            k && (w = y);
          }

          c && ((l = !q && l) && r--, f && t.push(l));
        }

        if (r += s, c && s !== r) {
          o = 0;

          while (q = b[o++]) q(t, u, g, h);

          if (f) {
            if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
            u = ua(u);
          }

          H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }

        return k && (w = y, j = v), t;
      };

      return c ? ha(f) : f;
    }

    return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];

      if (!f) {
        b || (b = g(a)), c = b.length;

        while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);

        f = A(a, xa(e, d)), f.selector = a;
      }

      return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);

      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }

        i = W.needsContext.test(a) ? 0 : j.length;

        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;

          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
            break;
          }
        }
      }

      return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);

  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;

  var u = function (a, b, c) {
    var d = [],
        e = void 0 !== c;

    while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
      if (e && n(a).is(c)) break;
      d.push(a);
    }

    return d;
  },
      v = function (a, b) {
    for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);

    return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;

  function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });

    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }

    return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }

  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({
    find: function (a) {
      var b,
          c = this.length,
          d = [],
          e = this;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
      }));

      for (b = 0; c > b; b++) n.find(a, e[b], d);

      return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    },
    filter: function (a) {
      return this.pushStack(z(this, a || [], !1));
    },
    not: function (a) {
      return this.pushStack(z(this, a || [], !0));
    },
    is: function (a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    }
  });

  var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;
    if (!a) return this;

    if (c = c || A, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);

      if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        return this;
      }

      return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this;
    }

    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };

  C.prototype = n.fn, A = n(d);
  var D = /^(?:parents|prev(?:Until|All))/,
      E = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  n.fn.extend({
    has: function (a) {
      var b = n(a, this),
          c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
        f.push(c);
        break;
      }

      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function (a) {
      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });

  function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);

    return a;
  }

  n.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function (a) {
      return u(a, "parentNode");
    },
    parentsUntil: function (a, b, c) {
      return u(a, "parentNode", c);
    },
    next: function (a) {
      return F(a, "nextSibling");
    },
    prev: function (a) {
      return F(a, "previousSibling");
    },
    nextAll: function (a) {
      return u(a, "nextSibling");
    },
    prevAll: function (a) {
      return u(a, "previousSibling");
    },
    nextUntil: function (a, b, c) {
      return u(a, "nextSibling", c);
    },
    prevUntil: function (a, b, c) {
      return u(a, "previousSibling", c);
    },
    siblings: function (a) {
      return v((a.parentNode || {}).firstChild, a);
    },
    children: function (a) {
      return v(a.firstChild);
    },
    contents: function (a) {
      return a.contentDocument || n.merge([], a.childNodes);
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
    };
  });
  var G = /\S+/g;

  function H(a) {
    var b = {};
    return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }

  n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);

    var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function () {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();

        while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
      }

      a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = {
      add: function () {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      },
      remove: function () {
        return n.each(arguments, function (a, b) {
          var c;

          while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--;
        }), this;
      },
      has: function (a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      },
      empty: function () {
        return f && (f = []), this;
      },
      disable: function () {
        return e = g = [], f = c = "", this;
      },
      disabled: function () {
        return !f;
      },
      lock: function () {
        return e = g = [], c || (f = c = ""), this;
      },
      locked: function () {
        return !!e;
      },
      fireWith: function (a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      },
      fire: function () {
        return j.fireWith(this, arguments), this;
      },
      fired: function () {
        return !!d;
      }
    };

    return j;
  }, n.extend({
    Deferred: function (a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = {
        state: function () {
          return c;
        },
        always: function () {
          return e.done(arguments).fail(arguments), this;
        },
        then: function () {
          var a = arguments;
          return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        },
        promise: function (a) {
          return null != a ? n.extend(a, d) : d;
        }
      },
          e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function (a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;

      if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var I;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (a) {
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function (a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    }
  });

  function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
  }

  n.ready.promise = function (b) {
    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b);
  }, n.ready.promise();

  var K = function (a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;

    if ("object" === n.type(c)) {
      e = !0;

      for (h in c) K(a, b, h, c[h], !0, f, g);
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));

    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      L = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };

  function M() {
    this.expando = n.expando + M.uid++;
  }

  M.uid = 1, M.prototype = {
    register: function (a, b) {
      var c = b || {};
      return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
        value: c,
        writable: !0,
        configurable: !0
      }), a[this.expando];
    },
    cache: function (a) {
      if (!L(a)) return {};
      var b = a[this.expando];
      return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
        value: b,
        configurable: !0
      }))), b;
    },
    set: function (a, b, c) {
      var d,
          e = this.cache(a);
      if ("string" == typeof b) e[b] = c;else for (d in b) e[d] = b[d];
      return e;
    },
    get: function (a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
    },
    access: function (a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    },
    remove: function (a, b) {
      var c,
          d,
          e,
          f = a[this.expando];

      if (void 0 !== f) {
        if (void 0 === b) this.register(a);else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;

          while (c--) delete f[d[c]];
        }
        (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    },
    hasData: function (a) {
      var b = a[this.expando];
      return void 0 !== b && !n.isEmptyObject(b);
    }
  };
  var N = new M(),
      O = new M(),
      P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Q = /[A-Z]/g;

  function R(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}

      O.set(a, b, c);
    } else c = void 0;
    return c;
  }

  n.extend({
    hasData: function (a) {
      return O.hasData(a) || N.hasData(a);
    },
    data: function (a, b, c) {
      return O.access(a, b, c);
    },
    removeData: function (a, b) {
      O.remove(a, b);
    },
    _data: function (a, b, c) {
      return N.access(a, b, c);
    },
    _removeData: function (a, b) {
      N.remove(a, b);
    }
  }), n.fn.extend({
    data: function (a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;

      if (void 0 === a) {
        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
          c = g.length;

          while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));

          N.set(f, "hasDataAttrs", !0);
        }

        return e;
      }

      return "object" == typeof a ? this.each(function () {
        O.set(this, a);
      }) : K(this, function (b) {
        var c, d;

        if (f && void 0 === b) {
          if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
          if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
          if (c = R(f, d, void 0), void 0 !== c) return c;
        } else d = n.camelCase(a), this.each(function () {
          var c = O.get(this, d);
          O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    },
    removeData: function (a) {
      return this.each(function () {
        O.remove(this, a);
      });
    }
  }), n.extend({
    queue: function (a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    },
    dequeue: function (a, b) {
      b = b || "fx";

      var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
        n.dequeue(a, b);
      };

      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function (a, b) {
      var c = b + "queueHooks";
      return N.get(a, c) || N.access(a, c, {
        empty: n.Callbacks("once memory").add(function () {
          N.remove(a, [b + "queue", c]);
        })
      });
    }
  }), n.fn.extend({
    queue: function (a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    },
    dequeue: function (a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    },
    clearQueue: function (a) {
      return this.queue(a || "fx", []);
    },
    promise: function (a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
        --d || e.resolveWith(f, [f]);
      };

      "string" != typeof a && (b = a, a = void 0), a = a || "fx";

      while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));

      return h(), e.promise(b);
    }
  });

  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      U = ["Top", "Right", "Bottom", "Left"],
      V = function (a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };

  function W(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));

    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;

      do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g);
    }

    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }

  var X = /^(?:checkbox|radio)$/i,
      Y = /<([\w:-]+)/,
      Z = /^$|\/(?:java|ecma)script/i,
      $ = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

  function _(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }

  function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
  }

  var ba = /<|&#?\w+;/;

  function ca(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);else if (ba.test(f)) {
      g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];

      while (k--) g = g.lastChild;

      n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
    } else m.push(b.createTextNode(f));

    l.textContent = "", o = 0;

    while (f = m[o++]) if (d && n.inArray(f, d) > -1) e && e.push(f);else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
      k = 0;

      while (f = g[k++]) Z.test(f.type || "") && c.push(f);
    }

    return l;
  }

  !function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();
  var da = /^key/,
      ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      fa = /^([^.]*)(?:\.(.+)|)/;

  function ga() {
    return !0;
  }

  function ha() {
    return !1;
  }

  function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }

  function ja(a, b, c, d, e, f) {
    var g, h;

    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);

      for (h in b) ja(a, h, c, d, b[h], f);

      return a;
    }

    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;else if (!e) return a;
    return 1 === f && (g = e, e = function (a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }

  n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.get(a);

      if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(G) || [""], j = b.length;

        while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && n.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.hasData(a) && N.get(a);

      if (r && (i = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;

        while (j--) if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
          l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;

          while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));

          g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
        } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);

        n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (N.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};

      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;

        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;

          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
        }

        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);

        d.length && g.push({
          elem: i,
          handlers: d
        });
      }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (a, b) {
        var c,
            e,
            f,
            g = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      }
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];
      h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;

      while (b--) c = e[b], a[c] = g[c];

      return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a;
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    }
  }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = {
    constructor: n.Event,
    isDefaultPrevented: ha,
    isPropagationStopped: ha,
    isImmediatePropagationStopped: ha,
    isSimulated: !1,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault();
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function (a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;
        return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), n.fn.extend({
    on: function (a, b, c, d) {
      return ja(this, a, b, c, d);
    },
    one: function (a, b, c, d) {
      return ja(this, a, b, c, d, 1);
    },
    off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;

      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);

        return this;
      }

      return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    }
  });
  var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      la = /<script|<style|<link/i,
      ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
      na = /^true\/(.*)/,
      oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function pa(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }

  function qa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }

  function ra(a) {
    var b = na.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }

  function sa(a, b) {
    var c, d, e, f, g, h, i, j;

    if (1 === b.nodeType) {
      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};

        for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }

      O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
    }
  }

  function ta(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }

  function ua(a, b, c, d) {
    b = f.apply([], b);
    var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);
    if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
      var f = a.eq(e);
      r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
    });

    if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);

      if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
    }

    return a;
  }

  function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));

    return a;
  }

  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(ka, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);
      if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
      if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);else sa(a, h);
      return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
    },
    cleanData: function (a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) if (L(c)) {
        if (b = c[N.expando]) {
          if (b.events) for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          c[N.expando] = void 0;
        }

        c[O.expando] && (c[O.expando] = void 0);
      }
    }
  }), n.fn.extend({
    domManip: ua,
    detach: function (a) {
      return va(this, a, !0);
    },
    remove: function (a) {
      return va(this, a);
    },
    text: function (a) {
      return K(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    },
    append: function () {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);
          b.appendChild(a);
        }
      });
    },
    prepend: function () {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function () {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function () {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");

      return this;
    },
    clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    },
    html: function (a) {
      return K(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;

        if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);

          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);

            b = 0;
          } catch (e) {}
        }

        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function () {
      var a = [];
      return ua(this, arguments, function (b) {
        var c = this.parentNode;
        n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
      }, a);
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());

      return this.pushStack(d);
    };
  });
  var wa,
      xa = {
    HTML: "block",
    BODY: "block"
  };

  function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");
    return c.detach(), d;
  }

  function za(a) {
    var b = d,
        c = xa[a];
    return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c;
  }

  var Aa = /^margin/,
      Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ca = function (b) {
    var c = b.ownerDocument.defaultView;
    return c && c.opener || (c = a), c.getComputedStyle(b);
  },
      Da = function (a, b, c, d) {
    var e,
        f,
        g = {};

    for (f in b) g[f] = a.style[f], a.style[f] = b[f];

    e = c.apply(a, d || []);

    for (f in b) a.style[f] = g[f];

    return e;
  },
      Ea = d.documentElement;

  !function () {
    var b,
        c,
        e,
        f,
        g = d.createElement("div"),
        h = d.createElement("div");

    if (h.style) {
      h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

      function i() {
        h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
        var d = a.getComputedStyle(h);
        b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g);
      }

      n.extend(l, {
        pixelPosition: function () {
          return i(), b;
        },
        boxSizingReliable: function () {
          return null == c && i(), c;
        },
        pixelMarginRight: function () {
          return null == c && i(), e;
        },
        reliableMarginLeft: function () {
          return null == c && i(), f;
        },
        reliableMarginRight: function () {
          var b,
              c = h.appendChild(d.createElement("div"));
          return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b;
        }
      });
    }
  }();

  function Fa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
  }

  function Ga(a, b) {
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    };
  }

  var Ha = /^(none|table(?!-c[ea]).+)/,
      Ia = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ja = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Ka = ["Webkit", "O", "Moz", "ms"],
      La = d.createElement("div").style;

  function Ma(a) {
    if (a in La) return a;
    var b = a[0].toUpperCase() + a.slice(1),
        c = Ka.length;

    while (c--) if (a = Ka[c] + b, a in La) return a;
  }

  function Na(a, b, c) {
    var d = T.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }

  function Oa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));

    return g;
  }

  function Pa(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ca(a),
        g = "border-box" === n.css(a, "boxSizing", !1, f);

    if (0 >= e || null == e) {
      if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
      d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }

    return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }

  function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));

    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));

    return a;
  }

  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Fa(a, "opacity");
            return "" === c ? "1" : c;
          }
        }
      }
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
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;
        return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    },
    css: function (a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = {
      get: function (a, c, d) {
        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
          return Pa(a, b, d);
        }) : Pa(a, b, d) : void 0;
      },
      set: function (a, c, d) {
        var e,
            f = d && Ca(a),
            g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
        return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g);
      }
    };
  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
      marginLeft: 0
    }, function () {
      return a.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
    return b ? Da(a, {
      display: "inline-block"
    }, Fa, [a, "marginRight"]) : void 0;
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function (c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];

        return e;
      }
    }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
  }), n.fn.extend({
    css: function (a, b) {
      return K(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;

        if (n.isArray(b)) {
          for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);

          return f;
        }

        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function () {
      return Qa(this, !0);
    },
    hide: function () {
      return Qa(this);
    },
    toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide();
      });
    }
  });

  function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }

  n.Tween = Ra, Ra.prototype = {
    constructor: Ra,
    init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    },
    cur: function () {
      var a = Ra.propHooks[this.prop];
      return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
    },
    run: function (a) {
      var b,
          c = Ra.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
    }
  }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      },
      set: function (a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      }
    }
  }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, n.easing = {
    linear: function (a) {
      return a;
    },
    swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    },
    _default: "swing"
  }, n.fx = Ra.prototype.init, n.fx.step = {};
  var Sa,
      Ta,
      Ua = /^(?:toggle|show|hide)$/,
      Va = /queueHooks$/;

  function Wa() {
    return a.setTimeout(function () {
      Sa = void 0;
    }), Sa = n.now();
  }

  function Xa(a, b) {
    var c,
        d = 0,
        e = {
      height: a
    };

    for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;

    return b && (e.opacity = e.width = a), e;
  }

  function Ya(a, b, c) {
    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
  }

  function Za(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && V(a),
        q = N.get(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));

    for (d in b) if (e = b[d], Ua.exec(e)) {
      if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
        if ("show" !== e || !q || void 0 === q[d]) continue;
        p = !0;
      }

      m[d] = q && q[d] || n.style(a, d);
    } else j = void 0;

    if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);else {
      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;
        N.remove(a, "fxshow");

        for (b in m) n.style(a, b, m[b]);
      });

      for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
    }
  }

  function $a(a, b) {
    var c, d, e, f, g;

    for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
      f = g.expand(f), delete a[d];

      for (c in f) c in a || (a[c] = f[c], b[c] = e);
    } else b[d] = e;
  }

  function _a(a, b, c) {
    var d,
        e,
        f = 0,
        g = _a.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function () {
      if (e) return !1;

      for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);

      return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({
      elem: a,
      props: n.extend({}, b),
      opts: n.extend(!0, {
        specialEasing: {},
        easing: n.easing._default
      }, c),
      originalProperties: b,
      originalOptions: c,
      startTime: Sa || Wa(),
      duration: c.duration,
      tweens: [],
      createTween: function (b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d;
      },
      stop: function (b) {
        var c = 0,
            d = b ? j.tweens.length : 0;
        if (e) return this;

        for (e = !0; d > c; c++) j.tweens[c].run(1);

        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      }
    }),
        k = j.props;

    for ($a(k, j.opts.specialEasing); g > f; f++) if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;

    return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }

  n.Animation = n.extend(_a, {
    tweeners: {
      "*": [function (a, b) {
        var c = this.createTween(a, b);
        return W(c.elem, a, T.exec(b), c), c;
      }]
    },
    tweener: function (a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);

      for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b);
    },
    prefilters: [Za],
    prefilter: function (a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    }
  }), n.speed = function (a, b, c) {
    var d = a && "object" == typeof a ? n.extend({}, a) : {
      complete: c || !c && b || n.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !n.isFunction(b) && b
    };
    return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({
    fadeTo: function (a, b, c, d) {
      return this.filter(V).css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, d);
    },
    animate: function (a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
        var b = _a(this, n.extend({}, a), f);

        (e || N.get(this, "finish")) && b.stop(!0);
      };

      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function (a, b, c) {
      var d = function (a) {
        var b = a.stop;
        delete a.stop, b(c);
      };

      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = N.get(this);
        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);

        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));

        !b && c || n.dequeue(this, a);
      });
    },
    finish: function (a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = N.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;

        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));

        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);

        delete c.finish;
      });
    }
  }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];

    n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
    };
  }), n.each({
    slideDown: Xa("show"),
    slideUp: Xa("hide"),
    slideToggle: Xa("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;

    for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);

    c.length || n.fx.stop(), Sa = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(Ta), Ta = null;
  }, n.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);

      d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
    a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
  }();
  var ab,
      bb = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    }
  }), n.extend({
    attr: function (a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b;
          }
        }
      }
    },
    removeAttr: function (a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);
      if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
    }
  }), ab = {
    set: function (a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = bb[b] || n.find.attr;

    bb[b] = function (a, b, d) {
      var e, f;
      return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e;
    };
  });
  var cb = /^(?:input|select|textarea|button)$/i,
      db = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    }
  }), n.extend({
    prop: function (a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          var b = n.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), l.optSelected || (n.propHooks.selected = {
    get: function (a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null;
    },
    set: function (a) {
      var b = a.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });
  var eb = /[\t\r\n\f]/g;

  function fb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }

  n.fn.extend({
    addClass: function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, fb(this)));
      });

      if ("string" == typeof a && a) {
        b = a.match(G) || [];

        while (c = this[i++]) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
          g = 0;

          while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");

          h = n.trim(d), e !== h && c.setAttribute("class", h);
        }
      }

      return this;
    },
    removeClass: function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, fb(this)));
      });
      if (!arguments.length) return this.attr("class", "");

      if ("string" == typeof a && a) {
        b = a.match(G) || [];

        while (c = this[i++]) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
          g = 0;

          while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");

          h = n.trim(d), e !== h && c.setAttribute("class", h);
        }
      }

      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, fb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;

        if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];

          while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
      });
    },
    hasClass: function (a) {
      var b,
          c,
          d = 0;
      b = " " + a + " ";

      while (c = this[d++]) if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;

      return !1;
    }
  });
  var gb = /\r/g,
      hb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function (a) {
      var b,
          c,
          d,
          e = this[0];
      {
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
        }
      },
      select: {
        get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
            if (b = n(c).val(), f) return b;
            g.push(b);
          }

          return g;
        },
        set: function (a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;

          while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);

          return c || (a.selectedIndex = -1), f;
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = {
      set: function (a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      }
    }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });
  var ib = /^(?:focusinfocus|focusoutblur)$/;
  n.extend(n.event, {
    trigger: function (b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];

      if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;

          i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
        }

        g = 0;

        while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());

        return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result;
      }
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0
      });
      n.event.trigger(d, null, b);
    }
  }), n.fn.extend({
    trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function (a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0;
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }
  }), l.focusin = "onfocusin" in a, l.focusin || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function (a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };

    n.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument || this,
            e = N.access(d, b);
        e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
      },
      teardown: function () {
        var d = this.ownerDocument || this,
            e = N.access(d, b) - 1;
        e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
      }
    };
  });
  var jb = a.location,
      kb = n.now(),
      lb = /\?/;
  n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (b) {
    var c;
    if (!b || "string" != typeof b) return null;

    try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }

    return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
  };
  var mb = /#.*$/,
      nb = /([?&])_=[^&]*/,
      ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      qb = /^(?:GET|HEAD)$/,
      rb = /^\/\//,
      sb = {},
      tb = {},
      ub = "*/".concat("*"),
      vb = d.createElement("a");
  vb.href = jb.href;

  function wb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
    };
  }

  function xb(a, b, c, d) {
    var e = {},
        f = a === tb;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }

    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }

  function yb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};

    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);

    return d && n.extend(!0, a, d), a;
  }

  function zb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;

    while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));

    if (d) for (e in h) if (h[e] && h[e].test(d)) {
      i.unshift(e);
      break;
    }
    if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }

        g || (g = e);
      }

      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }

  function Ab(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();

    while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
        break;
      }
      if (g !== !0) if (g && a["throws"]) b = g(b);else try {
        b = g(b);
      } catch (l) {
        return {
          state: "parsererror",
          error: g ? l : "No conversion from " + i + " to " + f
        };
      }
    }

    return {
      state: "success",
      data: b
    };
  }

  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: jb.href,
      type: "GET",
      isLocal: pb.test(jb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ub,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (a, b) {
      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
    },
    ajaxPrefilter: wb(sb),
    ajaxTransport: wb(tb),
    ajax: function (b, c) {
      "object" == typeof b && (c = b, b = void 0), c = c || {};
      var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = n.ajaxSetup({}, c),
          o = m.context || m,
          p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
          q = n.Deferred(),
          r = n.Callbacks("once memory"),
          s = m.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = {
        readyState: 0,
        getResponseHeader: function (a) {
          var b;

          if (2 === v) {
            if (!h) {
              h = {};

              while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2];
            }

            b = h[a.toLowerCase()];
          }

          return null == b ? null : b;
        },
        getAllResponseHeaders: function () {
          return 2 === v ? g : null;
        },
        setRequestHeader: function (a, b) {
          var c = a.toLowerCase();
          return v || (a = u[c] = u[c] || a, t[a] = b), this;
        },
        overrideMimeType: function (a) {
          return v || (m.mimeType = a), this;
        },
        statusCode: function (a) {
          var b;
          if (a) if (2 > v) for (b in a) s[b] = [s[b], a[b]];else x.always(a[x.status]);
          return this;
        },
        abort: function (a) {
          var b = a || w;
          return e && e.abort(b), z(0, b), this;
        }
      };

      if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
        j = d.createElement("a");

        try {
          j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host;
        } catch (y) {
          m.crossDomain = !0;
        }
      }

      if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
      k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);

      for (l in m.headers) x.setRequestHeader(l, m.headers[l]);

      if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
      w = "abort";

      for (l in {
        success: 1,
        error: 1,
        complete: 1
      }) x[l](m[l]);

      if (e = xb(tb, m, c, x)) {
        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
        m.async && m.timeout > 0 && (i = a.setTimeout(function () {
          x.abort("timeout");
        }, m.timeout));

        try {
          v = 1, e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;
          z(-1, y);
        }
      } else z(-1, "No Transport");

      function z(b, c, d, h) {
        var j,
            l,
            t,
            u,
            w,
            y = c;
        2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
      }

      return x;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    });
  }, n.fn.extend({
    wrapAll: function (a) {
      var b;
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;

        while (a.firstElementChild) a = a.firstElementChild;

        return a;
      }).append(this)), this);
    },
    wrapInner: function (a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function (a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    }
  }), n.expr.filters.hidden = function (a) {
    return !n.expr.filters.visible(a);
  }, n.expr.filters.visible = function (a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
  };
  var Bb = /%20/g,
      Cb = /\[\]$/,
      Db = /\r?\n/g,
      Eb = /^(?:submit|button|image|reset|file)$/i,
      Fb = /^(?:input|select|textarea|keygen)/i;

  function Gb(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) Gb(a + "[" + e + "]", b[e], c, d);
  }

  n.param = function (a, b) {
    var c,
        d = [],
        e = function (a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };

    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) Gb(c, a[c], b, e);
    return d.join("&").replace(Bb, "+");
  }, n.fn.extend({
    serialize: function () {
      return n.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a));
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(Db, "\r\n")
          };
        }) : {
          name: b.name,
          value: c.replace(Db, "\r\n")
        };
      }).get();
    }
  }), n.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };
  var Hb = {
    0: 200,
    1223: 204
  },
      Ib = n.ajaxSettings.xhr();
  l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function (b) {
    var c, d;
    return l.cors || Ib && !b.crossDomain ? {
      send: function (e, f) {
        var g,
            h = b.xhr();
        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");

        for (g in e) h.setRequestHeader(g, e[g]);

        c = function (a) {
          return function () {
            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
              binary: h.response
            } : {
              text: h.responseText
            }, h.getAllResponseHeaders()));
          };
        }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            c && d();
          });
        }, c = c("abort");

        try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (c) throw i;
        }
      },
      abort: function () {
        c && c();
      }
    } : void 0;
  }), n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (a) {
        return n.globalEval(a), a;
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function (e, f) {
          b = n("<script>").prop({
            charset: a.scriptCharset,
            src: a.url
          }).on("load error", c = function (a) {
            b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        },
        abort: function () {
          c && c();
        }
      };
    }
  });
  var Jb = [],
      Kb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Jb.pop() || n.expando + "_" + kb++;
      return this[a] = !0, a;
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || d;
    var e = x.exec(a),
        f = !c && [];
    return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };
  var Lb = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
    return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };

  function Mb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }

  n.offset = {
    setOffset: function (a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    }
  }, n.fn.extend({
    offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });
      var b,
          c,
          d = this[0],
          e = {
        top: 0,
        left: 0
      },
          f = d && d.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
        top: e.top + c.pageYOffset - b.clientTop,
        left: e.left + c.pageXOffset - b.clientLeft
      }) : e;
    },
    position: function () {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = {
          top: 0,
          left: 0
        };
        return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - d.top - n.css(c, "marginTop", !0),
          left: b.left - d.left - n.css(c, "marginLeft", !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent;

        while (a && "static" === n.css(a, "position")) a = a.offsetParent;

        return a || Ea;
      });
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, b) {
    var c = "pageYOffset" === b;

    n.fn[a] = function (d) {
      return K(this, function (a, d, e) {
        var f = Mb(a);
        return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
        return K(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({
    bind: function (a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function (a, b) {
      return this.off(a, null, b);
    },
    delegate: function (a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    },
    size: function () {
      return this.length;
    }
  }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });
  var Nb = a.jQuery,
      Ob = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
  }, b || (a.jQuery = a.$ = n), n;
});
/*
 AngularJS v1.6.4
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/

(function (x) {
  'use strict';

  function L(a, b) {
    b = b || Error;
    return function () {
      var d = arguments[0],
          c;
      c = "[" + (a ? a + ":" : "") + d + "] http://errors.angularjs.org/1.6.4/" + (a ? a + "/" : "") + d;

      for (d = 1; d < arguments.length; d++) {
        c = c + (1 == d ? "?" : "&") + "p" + (d - 1) + "=";
        var e = encodeURIComponent,
            f;
        f = arguments[d];
        f = "function" == typeof f ? f.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof f ? "undefined" : "string" != typeof f ? JSON.stringify(f) : f;
        c += e(f);
      }

      return new b(c);
    };
  }

  function me(a) {
    if (C(a)) u(a.objectMaxDepth) && (Ic.objectMaxDepth = Sb(a.objectMaxDepth) ? a.objectMaxDepth : NaN);else return Ic;
  }

  function Sb(a) {
    return ba(a) && 0 < a;
  }

  function qa(a) {
    if (null == a || Wa(a)) return !1;
    if (H(a) || F(a) || B && a instanceof B) return !0;
    var b = "length" in Object(a) && a.length;
    return ba(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" === typeof a.item);
  }

  function q(a, b, d) {
    var c, e;
    if (a) if (D(a)) for (c in a) "prototype" !== c && "length" !== c && "name" !== c && a.hasOwnProperty(c) && b.call(d, a[c], c, a);else if (H(a) || qa(a)) {
      var f = "object" !== typeof a;
      c = 0;

      for (e = a.length; c < e; c++) (f || c in a) && b.call(d, a[c], c, a);
    } else if (a.forEach && a.forEach !== q) a.forEach(b, d, a);else if (Jc(a)) for (c in a) b.call(d, a[c], c, a);else if ("function" === typeof a.hasOwnProperty) for (c in a) a.hasOwnProperty(c) && b.call(d, a[c], c, a);else for (c in a) ua.call(a, c) && b.call(d, a[c], c, a);
    return a;
  }

  function Kc(a, b, d) {
    for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) b.call(d, a[c[e]], c[e]);

    return c;
  }

  function Lc(a) {
    return function (b, d) {
      a(d, b);
    };
  }

  function ne() {
    return ++qb;
  }

  function Tb(a, b, d) {
    for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
      var g = b[e];
      if (C(g) || D(g)) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
        var m = h[k],
            n = g[m];
        d && C(n) ? ga(n) ? a[m] = new Date(n.valueOf()) : Xa(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Ub(n) ? a[m] = n.clone() : (C(a[m]) || (a[m] = H(n) ? [] : {}), Tb(a[m], [n], !0)) : a[m] = n;
      }
    }

    c ? a.$$hashKey = c : delete a.$$hashKey;
    return a;
  }

  function S(a) {
    return Tb(a, va.call(arguments, 1), !1);
  }

  function oe(a) {
    return Tb(a, va.call(arguments, 1), !0);
  }

  function Z(a) {
    return parseInt(a, 10);
  }

  function Vb(a, b) {
    return S(Object.create(a), b);
  }

  function z() {}

  function Ya(a) {
    return a;
  }

  function la(a) {
    return function () {
      return a;
    };
  }

  function Wb(a) {
    return D(a.toString) && a.toString !== ma;
  }

  function w(a) {
    return "undefined" === typeof a;
  }

  function u(a) {
    return "undefined" !== typeof a;
  }

  function C(a) {
    return null !== a && "object" === typeof a;
  }

  function Jc(a) {
    return null !== a && "object" === typeof a && !Mc(a);
  }

  function F(a) {
    return "string" === typeof a;
  }

  function ba(a) {
    return "number" === typeof a;
  }

  function ga(a) {
    return "[object Date]" === ma.call(a);
  }

  function D(a) {
    return "function" === typeof a;
  }

  function Xa(a) {
    return "[object RegExp]" === ma.call(a);
  }

  function Wa(a) {
    return a && a.window === a;
  }

  function Za(a) {
    return a && a.$evalAsync && a.$watch;
  }

  function Ha(a) {
    return "boolean" === typeof a;
  }

  function pe(a) {
    return a && ba(a.length) && qe.test(ma.call(a));
  }

  function Ub(a) {
    return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
  }

  function re(a) {
    var b = {};
    a = a.split(",");
    var d;

    for (d = 0; d < a.length; d++) b[a[d]] = !0;

    return b;
  }

  function wa(a) {
    return Q(a.nodeName || a[0] && a[0].nodeName);
  }

  function $a(a, b) {
    var d = a.indexOf(b);
    0 <= d && a.splice(d, 1);
    return d;
  }

  function ra(a, b, d) {
    function c(a, b, c) {
      c--;
      if (0 > c) return "...";
      var d = b.$$hashKey,
          f;

      if (H(a)) {
        f = 0;

        for (var g = a.length; f < g; f++) b.push(e(a[f], c));
      } else if (Jc(a)) for (f in a) b[f] = e(a[f], c);else if (a && "function" === typeof a.hasOwnProperty) for (f in a) a.hasOwnProperty(f) && (b[f] = e(a[f], c));else for (f in a) ua.call(a, f) && (b[f] = e(a[f], c));

      d ? b.$$hashKey = d : delete b.$$hashKey;
      return b;
    }

    function e(a, b) {
      if (!C(a)) return a;
      var d = g.indexOf(a);
      if (-1 !== d) return h[d];
      if (Wa(a) || Za(a)) throw Fa("cpws");
      var d = !1,
          e = f(a);
      void 0 === e && (e = H(a) ? [] : Object.create(Mc(a)), d = !0);
      g.push(a);
      h.push(e);
      return d ? c(a, e, b) : e;
    }

    function f(a) {
      switch (ma.call(a)) {
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object Int32Array]":
        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":
        case "[object Uint32Array]":
          return new a.constructor(e(a.buffer), a.byteOffset, a.length);

        case "[object ArrayBuffer]":
          if (!a.slice) {
            var b = new ArrayBuffer(a.byteLength);
            new Uint8Array(b).set(new Uint8Array(a));
            return b;
          }

          return a.slice(0);

        case "[object Boolean]":
        case "[object Number]":
        case "[object String]":
        case "[object Date]":
          return new a.constructor(a.valueOf());

        case "[object RegExp]":
          return b = new RegExp(a.source, a.toString().match(/[^/]*$/)[0]), b.lastIndex = a.lastIndex, b;

        case "[object Blob]":
          return new a.constructor([a], {
            type: a.type
          });
      }

      if (D(a.cloneNode)) return a.cloneNode(!0);
    }

    var g = [],
        h = [];
    d = Sb(d) ? d : NaN;

    if (b) {
      if (pe(b) || "[object ArrayBuffer]" === ma.call(b)) throw Fa("cpta");
      if (a === b) throw Fa("cpi");
      H(b) ? b.length = 0 : q(b, function (a, c) {
        "$$hashKey" !== c && delete b[c];
      });
      g.push(a);
      h.push(b);
      return c(a, b, d);
    }

    return e(a, d);
  }

  function Xb(a, b) {
    return a === b || a !== a && b !== b;
  }

  function sa(a, b) {
    if (a === b) return !0;
    if (null === a || null === b) return !1;
    if (a !== a && b !== b) return !0;
    var d = typeof a,
        c;
    if (d === typeof b && "object" === d) if (H(a)) {
      if (!H(b)) return !1;

      if ((d = a.length) === b.length) {
        for (c = 0; c < d; c++) if (!sa(a[c], b[c])) return !1;

        return !0;
      }
    } else {
      if (ga(a)) return ga(b) ? Xb(a.getTime(), b.getTime()) : !1;
      if (Xa(a)) return Xa(b) ? a.toString() === b.toString() : !1;
      if (Za(a) || Za(b) || Wa(a) || Wa(b) || H(b) || ga(b) || Xa(b)) return !1;
      d = V();

      for (c in a) if ("$" !== c.charAt(0) && !D(a[c])) {
        if (!sa(a[c], b[c])) return !1;
        d[c] = !0;
      }

      for (c in b) if (!(c in d) && "$" !== c.charAt(0) && u(b[c]) && !D(b[c])) return !1;

      return !0;
    }
    return !1;
  }

  function ab(a, b, d) {
    return a.concat(va.call(b, d));
  }

  function bb(a, b) {
    var d = 2 < arguments.length ? va.call(arguments, 2) : [];
    return !D(b) || b instanceof RegExp ? b : d.length ? function () {
      return arguments.length ? b.apply(a, ab(d, arguments, 0)) : b.apply(a, d);
    } : function () {
      return arguments.length ? b.apply(a, arguments) : b.call(a);
    };
  }

  function Nc(a, b) {
    var d = b;
    "string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Wa(b) ? d = "$WINDOW" : b && x.document === b ? d = "$DOCUMENT" : Za(b) && (d = "$SCOPE");
    return d;
  }

  function cb(a, b) {
    if (!w(a)) return ba(b) || (b = b ? 2 : null), JSON.stringify(a, Nc, b);
  }

  function Oc(a) {
    return F(a) ? JSON.parse(a) : a;
  }

  function Pc(a, b) {
    a = a.replace(se, "");
    var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;
    return da(d) ? b : d;
  }

  function Yb(a, b, d) {
    d = d ? -1 : 1;
    var c = a.getTimezoneOffset();
    b = Pc(b, c);
    d *= b - c;
    a = new Date(a.getTime());
    a.setMinutes(a.getMinutes() + d);
    return a;
  }

  function xa(a) {
    a = B(a).clone();

    try {
      a.empty();
    } catch (b) {}

    var d = B("<div>").append(a).html();

    try {
      return a[0].nodeType === Ia ? Q(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (a, b) {
        return "<" + Q(b);
      });
    } catch (c) {
      return Q(d);
    }
  }

  function Qc(a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {}
  }

  function Rc(a) {
    var b = {};
    q((a || "").split("&"), function (a) {
      var c, e, f;
      a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = Qc(e), u(e) && (f = u(f) ? Qc(f) : !0, ua.call(b, e) ? H(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f));
    });
    return b;
  }

  function Zb(a) {
    var b = [];
    q(a, function (a, c) {
      H(a) ? q(a, function (a) {
        b.push($(c, !0) + (!0 === a ? "" : "=" + $(a, !0)));
      }) : b.push($(c, !0) + (!0 === a ? "" : "=" + $(a, !0)));
    });
    return b.length ? b.join("&") : "";
  }

  function db(a) {
    return $(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
  }

  function $(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
  }

  function te(a, b) {
    var d,
        c,
        e = Ja.length;

    for (c = 0; c < e; ++c) if (d = Ja[c] + b, F(d = a.getAttribute(d))) return d;

    return null;
  }

  function ue(a, b) {
    var d,
        c,
        e = {};
    q(Ja, function (b) {
      b += "app";
      !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
    });
    q(Ja, function (b) {
      b += "app";
      var e;
      !d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b));
    });
    d && (ve ? (e.strictDi = null !== te(d, "strict-di"), b(d, c ? [c] : [], e)) : x.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."));
  }

  function Sc(a, b, d) {
    C(d) || (d = {});
    d = S({
      strictDi: !1
    }, d);

    var c = function () {
      a = B(a);

      if (a.injector()) {
        var c = a[0] === x.document ? "document" : xa(a);
        throw Fa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }

      b = b || [];
      b.unshift(["$provide", function (b) {
        b.value("$rootElement", a);
      }]);
      d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
        a.debugInfoEnabled(!0);
      }]);
      b.unshift("ng");
      c = eb(b, d.strictDi);
      c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
        a.$apply(function () {
          b.data("$injector", d);
          c(b)(a);
        });
      }]);
      return c;
    },
        e = /^NG_ENABLE_DEBUG_INFO!/,
        f = /^NG_DEFER_BOOTSTRAP!/;

    x && e.test(x.name) && (d.debugInfoEnabled = !0, x.name = x.name.replace(e, ""));
    if (x && !f.test(x.name)) return c();
    x.name = x.name.replace(f, "");

    ea.resumeBootstrap = function (a) {
      q(a, function (a) {
        b.push(a);
      });
      return c();
    };

    D(ea.resumeDeferredBootstrap) && ea.resumeDeferredBootstrap();
  }

  function we() {
    x.name = "NG_ENABLE_DEBUG_INFO!" + x.name;
    x.location.reload();
  }

  function xe(a) {
    a = ea.element(a).injector();
    if (!a) throw Fa("test");
    return a.get("$$testability");
  }

  function Tc(a, b) {
    b = b || "_";
    return a.replace(ye, function (a, c) {
      return (c ? b : "") + a.toLowerCase();
    });
  }

  function ze() {
    var a;

    if (!Uc) {
      var b = rb();
      (na = w(b) ? x.jQuery : b ? x[b] : void 0) && na.fn.on ? (B = na, S(na.fn, {
        scope: Na.scope,
        isolateScope: Na.isolateScope,
        controller: Na.controller,
        injector: Na.injector,
        inheritedData: Na.inheritedData
      }), a = na.cleanData, na.cleanData = function (b) {
        for (var c, e = 0, f; null != (f = b[e]); e++) (c = na._data(f, "events")) && c.$destroy && na(f).triggerHandler("$destroy");

        a(b);
      }) : B = W;
      ea.element = B;
      Uc = !0;
    }
  }

  function fb(a, b, d) {
    if (!a) throw Fa("areq", b || "?", d || "required");
    return a;
  }

  function sb(a, b, d) {
    d && H(a) && (a = a[a.length - 1]);
    fb(D(a), b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));
    return a;
  }

  function Ka(a, b) {
    if ("hasOwnProperty" === a) throw Fa("badname", b);
  }

  function Vc(a, b, d) {
    if (!b) return a;
    b = b.split(".");

    for (var c, e = a, f = b.length, g = 0; g < f; g++) c = b[g], a && (a = (e = a)[c]);

    return !d && D(a) ? bb(e, a) : a;
  }

  function tb(a) {
    for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++) if (c || a[e] !== b) c || (c = B(va.call(a, 0, e))), c.push(b);

    return c || a;
  }

  function V() {
    return Object.create(null);
  }

  function $b(a) {
    if (null == a) return "";

    switch (typeof a) {
      case "string":
        break;

      case "number":
        a = "" + a;
        break;

      default:
        a = !Wb(a) || H(a) || ga(a) ? cb(a) : a.toString();
    }

    return a;
  }

  function Ae(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c());
    }

    var d = L("$injector"),
        c = L("ng");
    a = b(a, "angular", Object);
    a.$$minErr = a.$$minErr || L;
    return b(a, "module", function () {
      var a = {};
      return function (f, g, h) {
        var k = {};
        if ("hasOwnProperty" === f) throw c("badname", "module");
        g && a.hasOwnProperty(f) && (a[f] = null);
        return b(a, f, function () {
          function a(b, c, d, f) {
            f || (f = e);
            return function () {
              f[d || "push"]([b, c, arguments]);
              return v;
            };
          }

          function b(a, c, d) {
            d || (d = e);
            return function (b, e) {
              e && D(e) && (e.$$moduleName = f);
              d.push([a, c, arguments]);
              return v;
            };
          }

          if (!g) throw d("nomod", f);
          var e = [],
              p = [],
              r = [],
              J = a("$injector", "invoke", "push", p),
              v = {
            _invokeQueue: e,
            _configBlocks: p,
            _runBlocks: r,
            info: function (a) {
              if (u(a)) {
                if (!C(a)) throw c("aobj", "value");
                k = a;
                return this;
              }

              return k;
            },
            requires: g,
            name: f,
            provider: b("$provide", "provider"),
            factory: b("$provide", "factory"),
            service: b("$provide", "service"),
            value: a("$provide", "value"),
            constant: a("$provide", "constant", "unshift"),
            decorator: b("$provide", "decorator", p),
            animation: b("$animateProvider", "register"),
            filter: b("$filterProvider", "register"),
            controller: b("$controllerProvider", "register"),
            directive: b("$compileProvider", "directive"),
            component: b("$compileProvider", "component"),
            config: J,
            run: function (a) {
              r.push(a);
              return this;
            }
          };
          h && J(h);
          return v;
        });
      };
    });
  }

  function pa(a, b) {
    if (H(a)) {
      b = b || [];

      for (var d = 0, c = a.length; d < c; d++) b[d] = a[d];
    } else if (C(a)) for (d in b = b || {}, a) if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];

    return b || a;
  }

  function Be(a, b) {
    var d = [];
    Sb(b) && (a = ra(a, null, b));
    return JSON.stringify(a, function (a, b) {
      b = Nc(a, b);

      if (C(b)) {
        if (0 <= d.indexOf(b)) return "...";
        d.push(b);
      }

      return b;
    });
  }

  function Ce(a) {
    S(a, {
      errorHandlingConfig: me,
      bootstrap: Sc,
      copy: ra,
      extend: S,
      merge: oe,
      equals: sa,
      element: B,
      forEach: q,
      injector: eb,
      noop: z,
      bind: bb,
      toJson: cb,
      fromJson: Oc,
      identity: Ya,
      isUndefined: w,
      isDefined: u,
      isString: F,
      isFunction: D,
      isObject: C,
      isNumber: ba,
      isElement: Ub,
      isArray: H,
      version: De,
      isDate: ga,
      lowercase: Q,
      uppercase: ub,
      callbacks: {
        $$counter: 0
      },
      getTestability: xe,
      reloadWithDebugInfo: we,
      $$minErr: L,
      $$csp: Ga,
      $$encodeUriSegment: db,
      $$encodeUriQuery: $,
      $$stringify: $b
    });
    ac = Ae(x);
    ac("ng", ["ngLocale"], ["$provide", function (a) {
      a.provider({
        $$sanitizeUri: Ee
      });
      a.provider("$compile", Wc).directive({
        a: Fe,
        input: Xc,
        textarea: Xc,
        form: Ge,
        script: He,
        select: Ie,
        option: Je,
        ngBind: Ke,
        ngBindHtml: Le,
        ngBindTemplate: Me,
        ngClass: Ne,
        ngClassEven: Oe,
        ngClassOdd: Pe,
        ngCloak: Qe,
        ngController: Re,
        ngForm: Se,
        ngHide: Te,
        ngIf: Ue,
        ngInclude: Ve,
        ngInit: We,
        ngNonBindable: Xe,
        ngPluralize: Ye,
        ngRepeat: Ze,
        ngShow: $e,
        ngStyle: af,
        ngSwitch: bf,
        ngSwitchWhen: cf,
        ngSwitchDefault: df,
        ngOptions: ef,
        ngTransclude: ff,
        ngModel: gf,
        ngList: hf,
        ngChange: jf,
        pattern: Yc,
        ngPattern: Yc,
        required: Zc,
        ngRequired: Zc,
        minlength: $c,
        ngMinlength: $c,
        maxlength: ad,
        ngMaxlength: ad,
        ngValue: kf,
        ngModelOptions: lf
      }).directive({
        ngInclude: mf
      }).directive(vb).directive(bd);
      a.provider({
        $anchorScroll: nf,
        $animate: of,
        $animateCss: pf,
        $$animateJs: qf,
        $$animateQueue: rf,
        $$AnimateRunner: sf,
        $$animateAsyncRun: tf,
        $browser: uf,
        $cacheFactory: vf,
        $controller: wf,
        $document: xf,
        $$isDocumentHidden: yf,
        $exceptionHandler: zf,
        $filter: cd,
        $$forceReflow: Af,
        $interpolate: Bf,
        $interval: Cf,
        $http: Df,
        $httpParamSerializer: Ef,
        $httpParamSerializerJQLike: Ff,
        $httpBackend: Gf,
        $xhrFactory: Hf,
        $jsonpCallbacks: If,
        $location: Jf,
        $log: Kf,
        $parse: Lf,
        $rootScope: Mf,
        $q: Nf,
        $$q: Of,
        $sce: Pf,
        $sceDelegate: Qf,
        $sniffer: Rf,
        $templateCache: Sf,
        $templateRequest: Tf,
        $$testability: Uf,
        $timeout: Vf,
        $window: Wf,
        $$rAF: Xf,
        $$jqLite: Yf,
        $$Map: Zf,
        $$cookieReader: $f
      });
    }]).info({
      angularVersion: "1.6.4"
    });
  }

  function gb(a, b) {
    return b.toUpperCase();
  }

  function wb(a) {
    return a.replace(ag, gb);
  }

  function bc(a) {
    a = a.nodeType;
    return 1 === a || !a || 9 === a;
  }

  function dd(a, b) {
    var d,
        c,
        e = b.createDocumentFragment(),
        f = [];

    if (cc.test(a)) {
      d = e.appendChild(b.createElement("div"));
      c = (bg.exec(a) || ["", ""])[1].toLowerCase();
      c = ha[c] || ha._default;
      d.innerHTML = c[1] + a.replace(cg, "<$1></$2>") + c[2];

      for (c = c[0]; c--;) d = d.lastChild;

      f = ab(f, d.childNodes);
      d = e.firstChild;
      d.textContent = "";
    } else f.push(b.createTextNode(a));

    e.textContent = "";
    e.innerHTML = "";
    q(f, function (a) {
      e.appendChild(a);
    });
    return e;
  }

  function W(a) {
    if (a instanceof W) return a;
    var b;
    F(a) && (a = T(a), b = !0);

    if (!(this instanceof W)) {
      if (b && "<" !== a.charAt(0)) throw dc("nosel");
      return new W(a);
    }

    if (b) {
      b = x.document;
      var d;
      a = (d = dg.exec(a)) ? [b.createElement(d[1])] : (d = dd(a, b)) ? d.childNodes : [];
      ec(this, a);
    } else D(a) ? ed(a) : ec(this, a);
  }

  function fc(a) {
    return a.cloneNode(!0);
  }

  function xb(a, b) {
    !b && bc(a) && B.cleanData([a]);
    a.querySelectorAll && B.cleanData(a.querySelectorAll("*"));
  }

  function fd(a, b, d, c) {
    if (u(c)) throw dc("offargs");
    var e = (c = yb(a)) && c.events,
        f = c && c.handle;
    if (f) if (b) {
      var g = function (b) {
        var c = e[b];
        u(d) && $a(c || [], d);
        u(d) && c && 0 < c.length || (a.removeEventListener(b, f), delete e[b]);
      };

      q(b.split(" "), function (a) {
        g(a);
        zb[a] && g(zb[a]);
      });
    } else for (b in e) "$destroy" !== b && a.removeEventListener(b, f), delete e[b];
  }

  function gc(a, b) {
    var d = a.ng339,
        c = d && hb[d];
    c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), fd(a)), delete hb[d], a.ng339 = void 0));
  }

  function yb(a, b) {
    var d = a.ng339,
        d = d && hb[d];
    b && !d && (a.ng339 = d = ++eg, d = hb[d] = {
      events: {},
      data: {},
      handle: void 0
    });
    return d;
  }

  function hc(a, b, d) {
    if (bc(a)) {
      var c,
          e = u(d),
          f = !e && b && !C(b),
          g = !b;
      a = (a = yb(a, !f)) && a.data;
      if (e) a[wb(b)] = d;else {
        if (g) return a;
        if (f) return a && a[wb(b)];

        for (c in b) a[wb(c)] = b[c];
      }
    }
  }

  function Ab(a, b) {
    return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
  }

  function Bb(a, b) {
    b && a.setAttribute && q(b.split(" "), function (b) {
      a.setAttribute("class", T((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + T(b) + " ", " ")));
    });
  }

  function Cb(a, b) {
    if (b && a.setAttribute) {
      var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      q(b.split(" "), function (a) {
        a = T(a);
        -1 === d.indexOf(" " + a + " ") && (d += a + " ");
      });
      a.setAttribute("class", T(d));
    }
  }

  function ec(a, b) {
    if (b) if (b.nodeType) a[a.length++] = b;else {
      var d = b.length;

      if ("number" === typeof d && b.window !== b) {
        if (d) for (var c = 0; c < d; c++) a[a.length++] = b[c];
      } else a[a.length++] = b;
    }
  }

  function gd(a, b) {
    return Db(a, "$" + (b || "ngController") + "Controller");
  }

  function Db(a, b, d) {
    9 === a.nodeType && (a = a.documentElement);

    for (b = H(b) ? b : [b]; a;) {
      for (var c = 0, e = b.length; c < e; c++) if (u(d = B.data(a, b[c]))) return d;

      a = a.parentNode || 11 === a.nodeType && a.host;
    }
  }

  function hd(a) {
    for (xb(a, !0); a.firstChild;) a.removeChild(a.firstChild);
  }

  function Eb(a, b) {
    b || xb(a);
    var d = a.parentNode;
    d && d.removeChild(a);
  }

  function fg(a, b) {
    b = b || x;
    if ("complete" === b.document.readyState) b.setTimeout(a);else B(b).on("load", a);
  }

  function ed(a) {
    function b() {
      x.document.removeEventListener("DOMContentLoaded", b);
      x.removeEventListener("load", b);
      a();
    }

    "complete" === x.document.readyState ? x.setTimeout(a) : (x.document.addEventListener("DOMContentLoaded", b), x.addEventListener("load", b));
  }

  function id(a, b) {
    var d = Fb[b.toLowerCase()];
    return d && jd[wa(a)] && d;
  }

  function gg(a, b) {
    var d = function (c, d) {
      c.isDefaultPrevented = function () {
        return c.defaultPrevented;
      };

      var f = b[d || c.type],
          g = f ? f.length : 0;

      if (g) {
        if (w(c.immediatePropagationStopped)) {
          var h = c.stopImmediatePropagation;

          c.stopImmediatePropagation = function () {
            c.immediatePropagationStopped = !0;
            c.stopPropagation && c.stopPropagation();
            h && h.call(c);
          };
        }

        c.isImmediatePropagationStopped = function () {
          return !0 === c.immediatePropagationStopped;
        };

        var k = f.specialHandlerWrapper || hg;
        1 < g && (f = pa(f));

        for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || k(a, c, f[l]);
      }
    };

    d.elem = a;
    return d;
  }

  function hg(a, b, d) {
    d.call(a, b);
  }

  function ig(a, b, d) {
    var c = b.relatedTarget;
    c && (c === a || jg.call(a, c)) || d.call(a, b);
  }

  function Yf() {
    this.$get = function () {
      return S(W, {
        hasClass: function (a, b) {
          a.attr && (a = a[0]);
          return Ab(a, b);
        },
        addClass: function (a, b) {
          a.attr && (a = a[0]);
          return Cb(a, b);
        },
        removeClass: function (a, b) {
          a.attr && (a = a[0]);
          return Bb(a, b);
        }
      });
    };
  }

  function Pa(a, b) {
    var d = a && a.$$hashKey;
    if (d) return "function" === typeof d && (d = a.$$hashKey()), d;
    d = typeof a;
    return d = "function" === d || "object" === d && null !== a ? a.$$hashKey = d + ":" + (b || ne)() : d + ":" + a;
  }

  function kd() {
    this._keys = [];
    this._values = [];
    this._lastKey = NaN;
    this._lastIndex = -1;
  }

  function ld(a) {
    a = Function.prototype.toString.call(a).replace(kg, "");
    return a.match(lg) || a.match(mg);
  }

  function ng(a) {
    return (a = ld(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
  }

  function eb(a, b) {
    function d(a) {
      return function (b, c) {
        if (C(b)) q(b, Lc(a));else return a(b, c);
      };
    }

    function c(a, b) {
      Ka(a, "service");
      if (D(b) || H(b)) b = p.instantiate(b);
      if (!b.$get) throw ya("pget", a);
      return n[a + "Provider"] = b;
    }

    function e(a, b) {
      return function () {
        var c = v.invoke(b, this);
        if (w(c)) throw ya("undef", a);
        return c;
      };
    }

    function f(a, b, d) {
      return c(a, {
        $get: !1 !== d ? e(a, b) : b
      });
    }

    function g(a) {
      fb(w(a) || H(a), "modulesToLoad", "not an array");
      var b = [],
          c;
      q(a, function (a) {
        function d(a) {
          var b, c;
          b = 0;

          for (c = a.length; b < c; b++) {
            var e = a[b],
                f = p.get(e[0]);
            f[e[1]].apply(f, e[2]);
          }
        }

        if (!m.get(a)) {
          m.set(a, !0);

          try {
            F(a) ? (c = ac(a), v.modules[a] = c, b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : D(a) ? b.push(p.invoke(a)) : H(a) ? b.push(p.invoke(a)) : sb(a, "module");
          } catch (e) {
            throw H(a) && (a = a[a.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), ya("modulerr", a, e.stack || e.message || e);
          }
        }
      });
      return b;
    }

    function h(a, c) {
      function d(b, e) {
        if (a.hasOwnProperty(b)) {
          if (a[b] === k) throw ya("cdep", b + " <- " + l.join(" <- "));
          return a[b];
        }

        try {
          return l.unshift(b), a[b] = k, a[b] = c(b, e), a[b];
        } catch (f) {
          throw a[b] === k && delete a[b], f;
        } finally {
          l.shift();
        }
      }

      function e(a, c, f) {
        var g = [];
        a = eb.$$annotate(a, b, f);

        for (var k = 0, h = a.length; k < h; k++) {
          var l = a[k];
          if ("string" !== typeof l) throw ya("itkn", l);
          g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f));
        }

        return g;
      }

      return {
        invoke: function (a, b, c, d) {
          "string" === typeof c && (d = c, c = null);
          c = e(a, c, d);
          H(a) && (a = a[a.length - 1]);
          d = a;
          if (za || "function" !== typeof d) d = !1;else {
            var f = d.$$ngIsClass;
            Ha(f) || (f = d.$$ngIsClass = /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));
            d = f;
          }
          return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
        },
        instantiate: function (a, b, c) {
          var d = H(a) ? a[a.length - 1] : a;
          a = e(a, b, c);
          a.unshift(null);
          return new (Function.prototype.bind.apply(d, a))();
        },
        get: d,
        annotate: eb.$$annotate,
        has: function (b) {
          return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
        }
      };
    }

    b = !0 === b;
    var k = {},
        l = [],
        m = new Gb(),
        n = {
      $provide: {
        provider: d(c),
        factory: d(f),
        service: d(function (a, b) {
          return f(a, ["$injector", function (a) {
            return a.instantiate(b);
          }]);
        }),
        value: d(function (a, b) {
          return f(a, la(b), !1);
        }),
        constant: d(function (a, b) {
          Ka(a, "constant");
          n[a] = b;
          r[a] = b;
        }),
        decorator: function (a, b) {
          var c = p.get(a + "Provider"),
              d = c.$get;

          c.$get = function () {
            var a = v.invoke(d, c);
            return v.invoke(b, null, {
              $delegate: a
            });
          };
        }
      }
    },
        p = n.$injector = h(n, function (a, b) {
      ea.isString(b) && l.push(b);
      throw ya("unpr", l.join(" <- "));
    }),
        r = {},
        J = h(r, function (a, b) {
      var c = p.get(a + "Provider", b);
      return v.invoke(c.$get, c, void 0, a);
    }),
        v = J;
    n.$injectorProvider = {
      $get: la(J)
    };
    v.modules = p.modules = V();
    var t = g(a),
        v = J.get("$injector");
    v.strictDi = b;
    q(t, function (a) {
      a && v.invoke(a);
    });
    return v;
  }

  function nf() {
    var a = !0;

    this.disableAutoScrolling = function () {
      a = !1;
    };

    this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
      function e(a) {
        var b = null;
        Array.prototype.some.call(a, function (a) {
          if ("a" === wa(a)) return b = a, !0;
        });
        return b;
      }

      function f(a) {
        if (a) {
          a.scrollIntoView();
          var c;
          c = g.yOffset;
          D(c) ? c = c() : Ub(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : ba(c) || (c = 0);
          c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
        } else b.scrollTo(0, 0);
      }

      function g(a) {
        a = F(a) ? a : ba(a) ? a.toString() : d.hash();
        var b;
        a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
      }

      var h = b.document;
      a && c.$watch(function () {
        return d.hash();
      }, function (a, b) {
        a === b && "" === a || fg(function () {
          c.$evalAsync(g);
        });
      });
      return g;
    }];
  }

  function ib(a, b) {
    if (!a && !b) return "";
    if (!a) return b;
    if (!b) return a;
    H(a) && (a = a.join(" "));
    H(b) && (b = b.join(" "));
    return a + " " + b;
  }

  function og(a) {
    F(a) && (a = a.split(" "));
    var b = V();
    q(a, function (a) {
      a.length && (b[a] = !0);
    });
    return b;
  }

  function ia(a) {
    return C(a) ? a : {};
  }

  function pg(a, b, d, c) {
    function e(a) {
      try {
        a.apply(null, va.call(arguments, 1));
      } finally {
        if (J--, 0 === J) for (; v.length;) try {
          v.pop()();
        } catch (b) {
          d.error(b);
        }
      }
    }

    function f() {
      Oa = null;
      h();
    }

    function g() {
      t = I();
      t = w(t) ? null : t;
      sa(t, G) && (t = G);
      M = G = t;
    }

    function h() {
      var a = M;
      g();
      if (N !== k.url() || a !== t) N = k.url(), M = t, q(K, function (a) {
        a(k.url(), t);
      });
    }

    var k = this,
        l = a.location,
        m = a.history,
        n = a.setTimeout,
        p = a.clearTimeout,
        r = {};
    k.isMock = !1;
    var J = 0,
        v = [];
    k.$$completeOutstandingRequest = e;

    k.$$incOutstandingRequestCount = function () {
      J++;
    };

    k.notifyWhenNoOutstandingRequests = function (a) {
      0 === J ? a() : v.push(a);
    };

    var t,
        M,
        N = l.href,
        A = b.find("base"),
        Oa = null,
        I = c.history ? function () {
      try {
        return m.state;
      } catch (a) {}
    } : z;
    g();

    k.url = function (b, d, e) {
      w(e) && (e = null);
      l !== a.location && (l = a.location);
      m !== a.history && (m = a.history);

      if (b) {
        var f = M === e;
        if (N === b && (!c.history || f)) return k;
        var h = N && Aa(N) === Aa(b);
        N = b;
        M = e;
        !c.history || h && f ? (h || (Oa = b), d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (Oa = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g());
        Oa && (Oa = b);
        return k;
      }

      return Oa || l.href.replace(/%27/g, "'");
    };

    k.state = function () {
      return t;
    };

    var K = [],
        E = !1,
        G = null;

    k.onUrlChange = function (b) {
      if (!E) {
        if (c.history) B(a).on("popstate", f);
        B(a).on("hashchange", f);
        E = !0;
      }

      K.push(b);
      return b;
    };

    k.$$applicationDestroyed = function () {
      B(a).off("hashchange popstate", f);
    };

    k.$$checkUrlChange = h;

    k.baseHref = function () {
      var a = A.attr("href");
      return a ? a.replace(/^(https?:)?\/\/[^/]*/, "") : "";
    };

    k.defer = function (a, b) {
      var c;
      J++;
      c = n(function () {
        delete r[c];
        e(a);
      }, b || 0);
      r[c] = !0;
      return c;
    };

    k.defer.cancel = function (a) {
      return r[a] ? (delete r[a], p(a), e(z), !0) : !1;
    };
  }

  function uf() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
      return new pg(a, c, b, d);
    }];
  }

  function vf() {
    this.$get = function () {
      function a(a, c) {
        function e(a) {
          a !== n && (p ? p === a && (p = a.n) : p = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
        }

        function f(a, b) {
          a !== b && (a && (a.p = b), b && (b.n = a));
        }

        if (a in b) throw L("$cacheFactory")("iid", a);
        var g = 0,
            h = S({}, c, {
          id: a
        }),
            k = V(),
            l = c && c.capacity || Number.MAX_VALUE,
            m = V(),
            n = null,
            p = null;
        return b[a] = {
          put: function (a, b) {
            if (!w(b)) {
              if (l < Number.MAX_VALUE) {
                var c = m[a] || (m[a] = {
                  key: a
                });
                e(c);
              }

              a in k || g++;
              k[a] = b;
              g > l && this.remove(p.key);
              return b;
            }
          },
          get: function (a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];
              if (!b) return;
              e(b);
            }

            return k[a];
          },
          remove: function (a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];
              if (!b) return;
              b === n && (n = b.p);
              b === p && (p = b.n);
              f(b.n, b.p);
              delete m[a];
            }

            a in k && (delete k[a], g--);
          },
          removeAll: function () {
            k = V();
            g = 0;
            m = V();
            n = p = null;
          },
          destroy: function () {
            m = h = k = null;
            delete b[a];
          },
          info: function () {
            return S({}, h, {
              size: g
            });
          }
        };
      }

      var b = {};

      a.info = function () {
        var a = {};
        q(b, function (b, e) {
          a[e] = b.info();
        });
        return a;
      };

      a.get = function (a) {
        return b[a];
      };

      return a;
    };
  }

  function Sf() {
    this.$get = ["$cacheFactory", function (a) {
      return a("templates");
    }];
  }

  function Wc(a, b) {
    function d(a, b, c) {
      var d = /^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,
          e = V();
      q(a, function (a, f) {
        if (a in n) e[f] = n[a];else {
          var g = a.match(d);
          if (!g) throw fa("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
          e[f] = {
            mode: g[1][0],
            collection: "*" === g[2],
            optional: "?" === g[3],
            attrName: g[4] || f
          };
          g[4] && (n[a] = e[f]);
        }
      });
      return e;
    }

    function c(a) {
      var b = a.charAt(0);
      if (!b || b !== Q(b)) throw fa("baddir", a);
      if (a !== a.trim()) throw fa("baddir", a);
    }

    function e(a) {
      var b = a.require || a.controller && a.name;
      !H(b) && C(b) && q(b, function (a, c) {
        var d = a.match(l);
        a.substring(d[0].length) || (b[c] = d[0] + c);
      });
      return b;
    }

    var f = {},
        g = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
        h = /(([\w-]+)(?::([^;]+))?;?)/,
        k = re("ngSrc,ngSrcset,src,srcset"),
        l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        m = /^(on[a-z]+|formaction)$/,
        n = V();

    this.directive = function N(b, d) {
      fb(b, "name");
      Ka(b, "directive");
      F(b) ? (c(b), fb(d, "directiveFactory"), f.hasOwnProperty(b) || (f[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
        var d = [];
        q(f[b], function (f, g) {
          try {
            var h = a.invoke(f);
            D(h) ? h = {
              compile: la(h)
            } : !h.compile && h.link && (h.compile = la(h.link));
            h.priority = h.priority || 0;
            h.index = g;
            h.name = h.name || b;
            h.require = e(h);
            var k = h,
                l = h.restrict;
            if (l && (!F(l) || !/[EACM]/.test(l))) throw fa("badrestrict", l, b);
            k.restrict = l || "EA";
            h.$$moduleName = f.$$moduleName;
            d.push(h);
          } catch (m) {
            c(m);
          }
        });
        return d;
      }])), f[b].push(d)) : q(b, Lc(N));
      return this;
    };

    this.component = function (a, b) {
      function c(a) {
        function e(b) {
          return D(b) || H(b) ? function (c, d) {
            return a.invoke(b, this, {
              $element: c,
              $attrs: d
            });
          } : b;
        }

        var f = b.template || b.templateUrl ? b.template : "",
            g = {
          controller: d,
          controllerAs: qg(b.controller) || b.controllerAs || "$ctrl",
          template: e(f),
          templateUrl: e(b.templateUrl),
          transclude: b.transclude,
          scope: {},
          bindToController: b.bindings || {},
          restrict: "E",
          require: b.require
        };
        q(b, function (a, b) {
          "$" === b.charAt(0) && (g[b] = a);
        });
        return g;
      }

      var d = b.controller || function () {};

      q(b, function (a, b) {
        "$" === b.charAt(0) && (c[b] = a, D(d) && (d[b] = a));
      });
      c.$inject = ["$injector"];
      return this.directive(a, c);
    };

    this.aHrefSanitizationWhitelist = function (a) {
      return u(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
    };

    this.imgSrcSanitizationWhitelist = function (a) {
      return u(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
    };

    var p = !0;

    this.debugInfoEnabled = function (a) {
      return u(a) ? (p = a, this) : p;
    };

    var r = !1;

    this.preAssignBindingsEnabled = function (a) {
      return u(a) ? (r = a, this) : r;
    };

    var J = 10;

    this.onChangesTtl = function (a) {
      return arguments.length ? (J = a, this) : J;
    };

    var v = !0;

    this.commentDirectivesEnabled = function (a) {
      return arguments.length ? (v = a, this) : v;
    };

    var t = !0;

    this.cssClassDirectivesEnabled = function (a) {
      return arguments.length ? (t = a, this) : t;
    };

    this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, e, n, E, G, y, O, X) {
      function P() {
        try {
          if (! --ya) throw ia = void 0, fa("infchng", J);
          G.$apply(function () {
            for (var a = [], b = 0, c = ia.length; b < c; ++b) try {
              ia[b]();
            } catch (d) {
              a.push(d);
            }

            ia = void 0;
            if (a.length) throw a;
          });
        } finally {
          ya++;
        }
      }

      function s(a, b) {
        if (b) {
          var c = Object.keys(b),
              d,
              e,
              f;
          d = 0;

          for (e = c.length; d < e; d++) f = c[d], this[f] = b[f];
        } else this.$attr = {};

        this.$$element = a;
      }

      function R(a, b, c) {
        ta.innerHTML = "<span " + b + ">";
        b = ta.firstChild.attributes;
        var d = b[0];
        b.removeNamedItem(d.name);
        d.value = c;
        a.attributes.setNamedItem(d);
      }

      function La(a, b) {
        try {
          a.addClass(b);
        } catch (c) {}
      }

      function ca(a, b, c, d, e) {
        a instanceof B || (a = B(a));
        var f = Ma(a, b, a, c, d, e);
        ca.$$addScopeClass(a);
        var g = null;
        return function (b, c, d) {
          if (!a) throw fa("multilink");
          fb(b, "scope");
          e && e.needsNewScope && (b = b.$parent.$new());
          d = d || {};
          var h = d.parentBoundTranscludeFn,
              k = d.transcludeControllers;
          d = d.futureParentElement;
          h && h.$$boundTransclude && (h = h.$$boundTransclude);
          g || (g = (d = d && d[0]) ? "foreignobject" !== wa(d) && ma.call(d).match(/SVG/) ? "svg" : "html" : "html");
          d = "html" !== g ? B(ha(g, B("<div>").append(a).html())) : c ? Na.clone.call(a) : a;
          if (k) for (var l in k) d.data("$" + l + "Controller", k[l].instance);
          ca.$$addScopeInfo(d, b);
          c && c(d, b);
          f && f(b, d, d, h);
          c || (a = f = null);
          return d;
        };
      }

      function Ma(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f, k, l, m, n, p, r;
          if (K) for (r = Array(c.length), m = 0; m < h.length; m += 3) f = h[m], r[f] = c[f];else r = c;
          m = 0;

          for (n = h.length; m < n;) k = r[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), ca.$$addScopeInfo(B(k), l)) : l = a, p = c.transcludeOnThisElement ? ja(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? ja(a, b) : null, c(f, l, k, d, p)) : f && f(a, k.childNodes, void 0, e);
        }

        for (var h = [], k = H(a) || a instanceof B, l, m, n, p, K, r = 0; r < a.length; r++) {
          l = new s();
          11 === za && L(a, r, k);
          m = jc(a[r], [], l, 0 === r ? d : void 0, e);
          (f = m.length ? W(m, a[r], l, b, c, null, [], [], f) : null) && f.scope && ca.$$addScopeClass(l.$$element);
          l = f && f.terminal || !(n = a[r].childNodes) || !n.length ? null : Ma(n, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
          if (f || l) h.push(r, f, l), p = !0, K = K || f;
          f = null;
        }

        return p ? g : null;
      }

      function L(a, b, c) {
        var d = a[b],
            e = d.parentNode,
            f;
        if (d.nodeType === Ia) for (;;) {
          f = e ? d.nextSibling : a[b + 1];
          if (!f || f.nodeType !== Ia) break;
          d.nodeValue += f.nodeValue;
          f.parentNode && f.parentNode.removeChild(f);
          c && f === a[b + 1] && a.splice(b + 1, 1);
        }
      }

      function ja(a, b, c) {
        function d(e, f, g, h, k) {
          e || (e = a.$new(!1, k), e.$$transcluded = !0);
          return b(e, f, {
            parentBoundTranscludeFn: c,
            transcludeControllers: g,
            futureParentElement: h
          });
        }

        var e = d.$$slots = V(),
            f;

        for (f in b.$$slots) e[f] = b.$$slots[f] ? ja(a, b.$$slots[f], c) : null;

        return d;
      }

      function jc(a, b, c, d, e) {
        var f = c.$attr,
            g;

        switch (a.nodeType) {
          case 1:
            g = wa(a);
            Y(b, Ba(g), "E", d, e);

            for (var k, l, m, n, p = a.attributes, K = 0, r = p && p.length; K < r; K++) {
              var G = !1,
                  E = !1;
              k = p[K];
              l = k.name;
              m = k.value;
              k = Ba(l);
              (n = Ja.test(k)) && (l = l.replace(md, "").substr(8).replace(/_(.)/g, function (a, b) {
                return b.toUpperCase();
              }));
              (k = k.match(Ka)) && Z(k[1]) && (G = l, E = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));
              k = Ba(l.toLowerCase());
              f[k] = l;
              if (n || !c.hasOwnProperty(k)) c[k] = m, id(a, k) && (c[k] = !0);
              pa(a, b, m, k, n);
              Y(b, k, "A", d, e, G, E);
            }

            "input" === g && "hidden" === a.getAttribute("type") && a.setAttribute("autocomplete", "off");
            if (!Ga) break;
            f = a.className;
            C(f) && (f = f.animVal);
            if (F(f) && "" !== f) for (; a = h.exec(f);) k = Ba(a[2]), Y(b, k, "C", d, e) && (c[k] = T(a[3])), f = f.substr(a.index + a[0].length);
            break;

          case Ia:
            la(b, a.nodeValue);
            break;

          case 8:
            if (!Fa) break;
            jb(a, b, c, d, e);
        }

        b.sort(ea);
        return b;
      }

      function jb(a, b, c, d, e) {
        try {
          var f = g.exec(a.nodeValue);

          if (f) {
            var h = Ba(f[1]);
            Y(b, h, "M", d, e) && (c[h] = T(f[2]));
          }
        } catch (k) {}
      }

      function nd(a, b, c) {
        var d = [],
            e = 0;

        if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw fa("uterdir", b, c);
            1 === a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
            d.push(a);
            a = a.nextSibling;
          } while (0 < e);
        } else d.push(a);

        return B(d);
      }

      function od(a, b, c) {
        return function (d, e, f, g, h) {
          e = nd(e[0], b, c);
          return a(d, e, f, g, h);
        };
      }

      function kc(a, b, c, d, e, f) {
        var g;
        return a ? ca(b, c, d, e, f) : function () {
          g || (g = ca(b, c, d, e, f), b = c = f = null);
          return g.apply(this, arguments);
        };
      }

      function W(a, b, d, e, f, g, h, k, l) {
        function m(a, b, c, d) {
          if (a) {
            c && (a = od(a, c, d));
            a.require = y.require;
            a.directiveName = P;
            if (E === y || y.$$isolateScope) a = qa(a, {
              isolateScope: !0
            });
            h.push(a);
          }

          if (b) {
            c && (b = od(b, c, d));
            b.require = y.require;
            b.directiveName = P;
            if (E === y || y.$$isolateScope) b = qa(b, {
              isolateScope: !0
            });
            k.push(b);
          }
        }

        function n(a, e, f, g, l) {
          function m(a, b, c, d) {
            var e;
            Za(a) || (d = c, c = b, b = a, a = void 0);
            X && (e = O);
            c || (c = X ? P.parent() : P);

            if (d) {
              var f = l.$$slots[d];
              if (f) return f(a, b, e, c, R);
              if (w(f)) throw fa("noslot", d, xa(P));
            } else return l(a, b, e, c, R);
          }

          var p, y, t, v, J, O, N, P;
          b === f ? (g = d, P = d.$$element) : (P = B(f), g = new s(P, d));
          J = e;
          E ? v = e.$new(!0) : K && (J = e.$parent);
          l && (N = m, N.$$boundTransclude = l, N.isSlotFilled = function (a) {
            return !!l.$$slots[a];
          });
          G && (O = ba(P, g, N, G, v, e, E));
          E && (ca.$$addScopeInfo(P, v, !0, !(I && (I === E || I === E.$$originalDirective))), ca.$$addScopeClass(P, !0), v.$$isolateBindings = E.$$isolateBindings, y = na(e, g, v, v.$$isolateBindings, E), y.removeWatches && v.$on("$destroy", y.removeWatches));

          for (p in O) {
            y = G[p];
            t = O[p];
            var Hb = y.$$bindings.bindToController;

            if (r) {
              t.bindingInfo = Hb ? na(J, g, t.instance, Hb, y) : {};
              var A = t();
              A !== t.instance && (t.instance = A, P.data("$" + y.name + "Controller", A), t.bindingInfo.removeWatches && t.bindingInfo.removeWatches(), t.bindingInfo = na(J, g, t.instance, Hb, y));
            } else t.instance = t(), P.data("$" + y.name + "Controller", t.instance), t.bindingInfo = na(J, g, t.instance, Hb, y);
          }

          q(G, function (a, b) {
            var c = a.require;
            a.bindToController && !H(c) && C(c) && S(O[b].instance, U(b, c, P, O));
          });
          q(O, function (a) {
            var b = a.instance;
            if (D(b.$onChanges)) try {
              b.$onChanges(a.bindingInfo.initialChanges);
            } catch (d) {
              c(d);
            }
            if (D(b.$onInit)) try {
              b.$onInit();
            } catch (e) {
              c(e);
            }
            D(b.$doCheck) && (J.$watch(function () {
              b.$doCheck();
            }), b.$doCheck());
            D(b.$onDestroy) && J.$on("$destroy", function () {
              b.$onDestroy();
            });
          });
          p = 0;

          for (y = h.length; p < y; p++) t = h[p], ra(t, t.isolateScope ? v : e, P, g, t.require && U(t.directiveName, t.require, P, O), N);

          var R = e;
          E && (E.template || null === E.templateUrl) && (R = v);
          a && a(R, f.childNodes, void 0, l);

          for (p = k.length - 1; 0 <= p; p--) t = k[p], ra(t, t.isolateScope ? v : e, P, g, t.require && U(t.directiveName, t.require, P, O), N);

          q(O, function (a) {
            a = a.instance;
            D(a.$postLink) && a.$postLink();
          });
        }

        l = l || {};

        for (var p = -Number.MAX_VALUE, K = l.newScopeDirective, G = l.controllerDirectives, E = l.newIsolateScopeDirective, I = l.templateDirective, t = l.nonTlbTranscludeDirective, J = !1, O = !1, X = l.hasElementTranscludeDirective, v = d.$$element = B(b), y, P, N, A = e, R, u = !1, La = !1, x, z = 0, F = a.length; z < F; z++) {
          y = a[z];
          var Ma = y.$$start,
              L = y.$$end;
          Ma && (v = nd(b, Ma, L));
          N = void 0;
          if (p > y.priority) break;
          if (x = y.scope) y.templateUrl || (C(x) ? ($("new/isolated scope", E || K, y, v), E = y) : $("new/isolated scope", E, y, v)), K = K || y;
          P = y.name;

          if (!u && (y.replace && (y.templateUrl || y.template) || y.transclude && !y.$$tlb)) {
            for (x = z + 1; u = a[x++];) if (u.transclude && !u.$$tlb || u.replace && (u.templateUrl || u.template)) {
              La = !0;
              break;
            }

            u = !0;
          }

          !y.templateUrl && y.controller && (G = G || V(), $("'" + P + "' controller", G[P], y, v), G[P] = y);
          if (x = y.transclude) if (J = !0, y.$$tlb || ($("transclusion", t, y, v), t = y), "element" === x) X = !0, p = y.priority, N = v, v = d.$$element = B(ca.$$createComment(P, d[P])), b = v[0], ka(f, va.call(N, 0), b), N[0].$$parentNode = N[0].parentNode, A = kc(La, N, e, p, g && g.name, {
            nonTlbTranscludeDirective: t
          });else {
            var ja = V();

            if (C(x)) {
              N = [];
              var Q = V(),
                  jb = V();
              q(x, function (a, b) {
                var c = "?" === a.charAt(0);
                a = c ? a.substring(1) : a;
                Q[a] = b;
                ja[b] = null;
                jb[b] = c;
              });
              q(v.contents(), function (a) {
                var b = Q[Ba(wa(a))];
                b ? (jb[b] = !0, ja[b] = ja[b] || [], ja[b].push(a)) : N.push(a);
              });
              q(jb, function (a, b) {
                if (!a) throw fa("reqslot", b);
              });

              for (var ic in ja) ja[ic] && (ja[ic] = kc(La, ja[ic], e));
            } else N = B(fc(b)).contents();

            v.empty();
            A = kc(La, N, e, void 0, void 0, {
              needsNewScope: y.$$isolateScope || y.$$newScope
            });
            A.$$slots = ja;
          }
          if (y.template) if (O = !0, $("template", I, y, v), I = y, x = D(y.template) ? y.template(v, d) : y.template, x = Ea(x), y.replace) {
            g = y;
            N = cc.test(x) ? pd(ha(y.templateNamespace, T(x))) : [];
            b = N[0];
            if (1 !== N.length || 1 !== b.nodeType) throw fa("tplrt", P, "");
            ka(f, v, b);
            F = {
              $attr: {}
            };
            x = jc(b, [], F);
            var Y = a.splice(z + 1, a.length - (z + 1));
            (E || K) && aa(x, E, K);
            a = a.concat(x).concat(Y);
            da(d, F);
            F = a.length;
          } else v.html(x);
          if (y.templateUrl) O = !0, $("template", I, y, v), I = y, y.replace && (g = y), n = ga(a.splice(z, a.length - z), v, d, f, J && A, h, k, {
            controllerDirectives: G,
            newScopeDirective: K !== y && K,
            newIsolateScopeDirective: E,
            templateDirective: I,
            nonTlbTranscludeDirective: t
          }), F = a.length;else if (y.compile) try {
            R = y.compile(v, d, A);
            var Z = y.$$originalDirective || y;
            D(R) ? m(null, bb(Z, R), Ma, L) : R && m(bb(Z, R.pre), bb(Z, R.post), Ma, L);
          } catch (ea) {
            c(ea, xa(v));
          }
          y.terminal && (n.terminal = !0, p = Math.max(p, y.priority));
        }

        n.scope = K && !0 === K.scope;
        n.transcludeOnThisElement = J;
        n.templateOnThisElement = O;
        n.transclude = A;
        l.hasElementTranscludeDirective = X;
        return n;
      }

      function U(a, b, c, d) {
        var e;

        if (F(b)) {
          var f = b.match(l);
          b = b.substring(f[0].length);
          var g = f[1] || f[3],
              f = "?" === f[2];
          "^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;

          if (!e) {
            var h = "$" + b + "Controller";
            e = g ? c.inheritedData(h) : c.data(h);
          }

          if (!e && !f) throw fa("ctreq", b, a);
        } else if (H(b)) for (e = [], g = 0, f = b.length; g < f; g++) e[g] = U(a, b[g], c, d);else C(b) && (e = {}, q(b, function (b, f) {
          e[f] = U(a, b, c, d);
        }));

        return e || null;
      }

      function ba(a, b, c, d, e, f, g) {
        var h = V(),
            k;

        for (k in d) {
          var l = d[k],
              m = {
            $scope: l === g || l.$$isolateScope ? e : f,
            $element: a,
            $attrs: b,
            $transclude: c
          },
              n = l.controller;
          "@" === n && (n = b[l.name]);
          m = E(n, m, !0, l.controllerAs);
          h[l.name] = m;
          a.data("$" + l.name + "Controller", m.instance);
        }

        return h;
      }

      function aa(a, b, c) {
        for (var d = 0, e = a.length; d < e; d++) a[d] = Vb(a[d], {
          $$isolateScope: b,
          $$newScope: c
        });
      }

      function Y(b, c, e, g, h, k, l) {
        if (c === h) return null;
        var m = null;

        if (f.hasOwnProperty(c)) {
          h = a.get(c + "Directive");

          for (var n = 0, p = h.length; n < p; n++) if (c = h[n], (w(g) || g > c.priority) && -1 !== c.restrict.indexOf(e)) {
            k && (c = Vb(c, {
              $$start: k,
              $$end: l
            }));

            if (!c.$$bindings) {
              var K = m = c,
                  r = c.name,
                  t = {
                isolateScope: null,
                bindToController: null
              };
              C(K.scope) && (!0 === K.bindToController ? (t.bindToController = d(K.scope, r, !0), t.isolateScope = {}) : t.isolateScope = d(K.scope, r, !1));
              C(K.bindToController) && (t.bindToController = d(K.bindToController, r, !0));
              if (t.bindToController && !K.controller) throw fa("noctrl", r);
              m = m.$$bindings = t;
              C(m.isolateScope) && (c.$$isolateBindings = m.isolateScope);
            }

            b.push(c);
            m = c;
          }
        }

        return m;
      }

      function Z(b) {
        if (f.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, e = c.length; d < e; d++) if (b = c[d], b.multiElement) return !0;
        return !1;
      }

      function da(a, b) {
        var c = b.$attr,
            d = a.$attr;
        q(a, function (d, e) {
          "$" !== e.charAt(0) && (b[e] && b[e] !== d && (d = d.length ? d + (("style" === e ? ";" : " ") + b[e]) : b[e]), a.$set(e, d, !0, c[e]));
        });
        q(b, function (b, e) {
          a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]));
        });
      }

      function ga(a, b, d, f, g, h, k, l) {
        var m = [],
            n,
            p,
            K = b[0],
            r = a.shift(),
            t = Vb(r, {
          templateUrl: null,
          transclude: null,
          replace: null,
          $$originalDirective: r
        }),
            y = D(r.templateUrl) ? r.templateUrl(b, d) : r.templateUrl,
            E = r.templateNamespace;
        b.empty();
        e(y).then(function (c) {
          var e, G;
          c = Ea(c);

          if (r.replace) {
            c = cc.test(c) ? pd(ha(E, T(c))) : [];
            e = c[0];
            if (1 !== c.length || 1 !== e.nodeType) throw fa("tplrt", r.name, y);
            c = {
              $attr: {}
            };
            ka(f, b, e);
            var I = jc(e, [], c);
            C(r.scope) && aa(I, !0);
            a = I.concat(a);
            da(d, c);
          } else e = K, b.html(c);

          a.unshift(t);
          n = W(a, e, d, g, b, r, h, k, l);
          q(f, function (a, c) {
            a === e && (f[c] = b[0]);
          });

          for (p = Ma(b[0].childNodes, g); m.length;) {
            c = m.shift();
            G = m.shift();
            var v = m.shift(),
                J = m.shift(),
                I = b[0];

            if (!c.$$destroyed) {
              if (G !== K) {
                var O = G.className;
                l.hasElementTranscludeDirective && r.replace || (I = fc(e));
                ka(v, B(G), I);
                La(B(I), O);
              }

              G = n.transcludeOnThisElement ? ja(c, n.transclude, J) : J;
              n(p, c, I, f, G);
            }
          }

          m = null;
        }).catch(function (a) {
          a instanceof Error && c(a);
        });
        return function (a, b, c, d, e) {
          a = e;
          b.$$destroyed || (m ? m.push(b, c, d, a) : (n.transcludeOnThisElement && (a = ja(b, n.transclude, e)), n(p, b, c, d, a)));
        };
      }

      function ea(a, b) {
        var c = b.priority - a.priority;
        return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
      }

      function $(a, b, c, d) {
        function e(a) {
          return a ? " (module: " + a + ")" : "";
        }

        if (b) throw fa("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, xa(d));
      }

      function la(a, c) {
        var d = b(c, !0);
        d && a.push({
          priority: 0,
          compile: function (a) {
            a = a.parent();
            var b = !!a.length;
            b && ca.$$addBindingClass(a);
            return function (a, c) {
              var e = c.parent();
              b || ca.$$addBindingClass(e);
              ca.$$addBindingInfo(e, d.expressions);
              a.$watch(d, function (a) {
                c[0].nodeValue = a;
              });
            };
          }
        });
      }

      function ha(a, b) {
        a = Q(a || "html");

        switch (a) {
          case "svg":
          case "math":
            var c = x.document.createElement("div");
            c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
            return c.childNodes[0].childNodes;

          default:
            return b;
        }
      }

      function oa(a, b) {
        if ("srcdoc" === b) return y.HTML;
        var c = wa(a);

        if ("src" === b || "ngSrc" === b) {
          if (-1 === ["img", "video", "audio", "source", "track"].indexOf(c)) return y.RESOURCE_URL;
        } else if ("xlinkHref" === b || "form" === c && "action" === b || "link" === c && "href" === b) return y.RESOURCE_URL;
      }

      function pa(a, c, d, e, f) {
        var g = oa(a, e),
            h = k[e] || f,
            l = b(d, !f, g, h);

        if (l) {
          if ("multiple" === e && "select" === wa(a)) throw fa("selmulti", xa(a));
          if (m.test(e)) throw fa("nodomevents");
          c.push({
            priority: 100,
            compile: function () {
              return {
                pre: function (a, c, f) {
                  c = f.$$observers || (f.$$observers = V());
                  var k = f[e];
                  k !== d && (l = k && b(k, !0, g, h), d = k);
                  l && (f[e] = l(a), (c[e] || (c[e] = [])).$$inter = !0, (f.$$observers && f.$$observers[e].$$scope || a).$watch(l, function (a, b) {
                    "class" === e && a !== b ? f.$updateClass(a, b) : f.$set(e, a);
                  }));
                }
              };
            }
          });
        }
      }

      function ka(a, b, c) {
        var d = b[0],
            e = b.length,
            f = d.parentNode,
            g,
            h;
        if (a) for (g = 0, h = a.length; g < h; g++) if (a[g] === d) {
          a[g++] = c;
          h = g + e - 1;

          for (var k = a.length; g < k; g++, h++) h < k ? a[g] = a[h] : delete a[g];

          a.length -= e - 1;
          a.context === d && (a.context = c);
          break;
        }
        f && f.replaceChild(c, d);
        a = x.document.createDocumentFragment();

        for (g = 0; g < e; g++) a.appendChild(b[g]);

        B.hasData(d) && (B.data(c, B.data(d)), B(d).off("$destroy"));
        B.cleanData(a.querySelectorAll("*"));

        for (g = 1; g < e; g++) delete b[g];

        b[0] = c;
        b.length = 1;
      }

      function qa(a, b) {
        return S(function () {
          return a.apply(null, arguments);
        }, a, b);
      }

      function ra(a, b, d, e, f, g) {
        try {
          a(b, d, e, f, g);
        } catch (h) {
          c(h, xa(d));
        }
      }

      function na(a, c, d, e, f) {
        function g(b, c, e) {
          D(d.$onChanges) && !Xb(c, e) && (ia || (a.$$postDigest(P), ia = []), m || (m = {}, ia.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Ib(e, c));
        }

        function h() {
          d.$onChanges(m);
          m = void 0;
        }

        var k = [],
            l = {},
            m;
        q(e, function (e, h) {
          var m = e.attrName,
              p = e.optional,
              r,
              t,
              y,
              G;

          switch (e.mode) {
            case "@":
              p || ua.call(c, m) || (d[h] = c[m] = void 0);
              p = c.$observe(m, function (a) {
                if (F(a) || Ha(a)) g(h, a, d[h]), d[h] = a;
              });
              c.$$observers[m].$$scope = a;
              r = c[m];
              F(r) ? d[h] = b(r)(a) : Ha(r) && (d[h] = r);
              l[h] = new Ib(lc, d[h]);
              k.push(p);
              break;

            case "=":
              if (!ua.call(c, m)) {
                if (p) break;
                c[m] = void 0;
              }

              if (p && !c[m]) break;
              t = n(c[m]);
              G = t.literal ? sa : Xb;

              y = t.assign || function () {
                r = d[h] = t(a);
                throw fa("nonassign", c[m], m, f.name);
              };

              r = d[h] = t(a);

              p = function (b) {
                G(b, d[h]) || (G(b, r) ? y(a, b = d[h]) : d[h] = b);
                return r = b;
              };

              p.$stateful = !0;
              p = e.collection ? a.$watchCollection(c[m], p) : a.$watch(n(c[m], p), null, t.literal);
              k.push(p);
              break;

            case "<":
              if (!ua.call(c, m)) {
                if (p) break;
                c[m] = void 0;
              }

              if (p && !c[m]) break;
              t = n(c[m]);
              var E = t.literal,
                  I = d[h] = t(a);
              l[h] = new Ib(lc, d[h]);
              p = a.$watch(t, function (a, b) {
                if (b === a) {
                  if (b === I || E && sa(b, I)) return;
                  b = I;
                }

                g(h, a, b);
                d[h] = a;
              }, E);
              k.push(p);
              break;

            case "&":
              t = c.hasOwnProperty(m) ? n(c[m]) : z;
              if (t === z && p) break;

              d[h] = function (b) {
                return t(a, b);
              };

          }
        });
        return {
          initialChanges: l,
          removeWatches: k.length && function () {
            for (var a = 0, b = k.length; a < b; ++a) k[a]();
          }
        };
      }

      var Ca = /^\w/,
          ta = x.document.createElement("div"),
          Fa = v,
          Ga = t,
          ya = J,
          ia;
      s.prototype = {
        $normalize: Ba,
        $addClass: function (a) {
          a && 0 < a.length && O.addClass(this.$$element, a);
        },
        $removeClass: function (a) {
          a && 0 < a.length && O.removeClass(this.$$element, a);
        },
        $updateClass: function (a, b) {
          var c = qd(a, b);
          c && c.length && O.addClass(this.$$element, c);
          (c = qd(b, a)) && c.length && O.removeClass(this.$$element, c);
        },
        $set: function (a, b, d, e) {
          var f = id(this.$$element[0], a),
              g = rd[a],
              h = a;
          f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
          this[a] = b;
          e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Tc(a, "-"));
          f = wa(this.$$element);
          if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a) this[a] = b = X(b, "src" === a);else if ("img" === f && "srcset" === a && u(b)) {
            for (var f = "", g = T(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) var m = 2 * l, f = f + X(T(g[m]), !0), f = f + (" " + T(g[m + 1]));

            g = T(g[2 * l]).split(/\s/);
            f += X(T(g[0]), !0);
            2 === g.length && (f += " " + T(g[1]));
            this[a] = b = f;
          }
          !1 !== d && (null === b || w(b) ? this.$$element.removeAttr(e) : Ca.test(e) ? this.$$element.attr(e, b) : R(this.$$element[0], e, b));
          (a = this.$$observers) && q(a[h], function (a) {
            try {
              a(b);
            } catch (d) {
              c(d);
            }
          });
        },
        $observe: function (a, b) {
          var c = this,
              d = c.$$observers || (c.$$observers = V()),
              e = d[a] || (d[a] = []);
          e.push(b);
          G.$evalAsync(function () {
            e.$$inter || !c.hasOwnProperty(a) || w(c[a]) || b(c[a]);
          });
          return function () {
            $a(e, b);
          };
        }
      };
      var Aa = b.startSymbol(),
          Da = b.endSymbol(),
          Ea = "{{" === Aa && "}}" === Da ? Ya : function (a) {
        return a.replace(/\{\{/g, Aa).replace(/}}/g, Da);
      },
          Ja = /^ngAttr[A-Z]/,
          Ka = /^(.+)Start$/;
      ca.$$addBindingInfo = p ? function (a, b) {
        var c = a.data("$binding") || [];
        H(b) ? c = c.concat(b) : c.push(b);
        a.data("$binding", c);
      } : z;
      ca.$$addBindingClass = p ? function (a) {
        La(a, "ng-binding");
      } : z;
      ca.$$addScopeInfo = p ? function (a, b, c, d) {
        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
      } : z;
      ca.$$addScopeClass = p ? function (a, b) {
        La(a, b ? "ng-isolate-scope" : "ng-scope");
      } : z;

      ca.$$createComment = function (a, b) {
        var c = "";
        p && (c = " " + (a || "") + ": ", b && (c += b + " "));
        return x.document.createComment(c);
      };

      return ca;
    }];
  }

  function Ib(a, b) {
    this.previousValue = a;
    this.currentValue = b;
  }

  function Ba(a) {
    return a.replace(md, "").replace(rg, gb);
  }

  function qd(a, b) {
    var d = "",
        c = a.split(/\s+/),
        e = b.split(/\s+/),
        f = 0;

    a: for (; f < c.length; f++) {
      for (var g = c[f], h = 0; h < e.length; h++) if (g === e[h]) continue a;

      d += (0 < d.length ? " " : "") + g;
    }

    return d;
  }

  function pd(a) {
    a = B(a);
    var b = a.length;
    if (1 >= b) return a;

    for (; b--;) {
      var d = a[b];
      (8 === d.nodeType || d.nodeType === Ia && "" === d.nodeValue.trim()) && sg.call(a, b, 1);
    }

    return a;
  }

  function qg(a, b) {
    if (b && F(b)) return b;

    if (F(a)) {
      var d = sd.exec(a);
      if (d) return d[3];
    }
  }

  function wf() {
    var a = {},
        b = !1;

    this.has = function (b) {
      return a.hasOwnProperty(b);
    };

    this.register = function (b, c) {
      Ka(b, "controller");
      C(b) ? S(a, b) : a[b] = c;
    };

    this.allowGlobals = function () {
      b = !0;
    };

    this.$get = ["$injector", "$window", function (d, c) {
      function e(a, b, c, d) {
        if (!a || !C(a.$scope)) throw L("$controller")("noscp", d, b);
        a.$scope[b] = c;
      }

      return function (f, g, h, k) {
        var l, m, n;
        h = !0 === h;
        k && F(k) && (n = k);

        if (F(f)) {
          k = f.match(sd);
          if (!k) throw td("ctrlfmt", f);
          m = k[1];
          n = n || k[3];
          f = a.hasOwnProperty(m) ? a[m] : Vc(g.$scope, m, !0) || (b ? Vc(c, m, !0) : void 0);
          if (!f) throw td("ctrlreg", m);
          sb(f, m, !0);
        }

        if (h) return h = (H(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), n && e(g, n, l, m || f.name), S(function () {
          var a = d.invoke(f, l, g, m);
          a !== l && (C(a) || D(a)) && (l = a, n && e(g, n, l, m || f.name));
          return l;
        }, {
          instance: l,
          identifier: n
        });
        l = d.instantiate(f, g, m);
        n && e(g, n, l, m || f.name);
        return l;
      };
    }];
  }

  function xf() {
    this.$get = ["$window", function (a) {
      return B(a.document);
    }];
  }

  function yf() {
    this.$get = ["$document", "$rootScope", function (a, b) {
      function d() {
        e = c.hidden;
      }

      var c = a[0],
          e = c && c.hidden;
      a.on("visibilitychange", d);
      b.$on("$destroy", function () {
        a.off("visibilitychange", d);
      });
      return function () {
        return e;
      };
    }];
  }

  function zf() {
    this.$get = ["$log", function (a) {
      return function (b, d) {
        a.error.apply(a, arguments);
      };
    }];
  }

  function mc(a) {
    return C(a) ? ga(a) ? a.toISOString() : cb(a) : a;
  }

  function Ef() {
    this.$get = function () {
      return function (a) {
        if (!a) return "";
        var b = [];
        Kc(a, function (a, c) {
          null === a || w(a) || (H(a) ? q(a, function (a) {
            b.push($(c) + "=" + $(mc(a)));
          }) : b.push($(c) + "=" + $(mc(a))));
        });
        return b.join("&");
      };
    };
  }

  function Ff() {
    this.$get = function () {
      return function (a) {
        function b(a, e, f) {
          null === a || w(a) || (H(a) ? q(a, function (a, c) {
            b(a, e + "[" + (C(a) ? c : "") + "]");
          }) : C(a) && !ga(a) ? Kc(a, function (a, c) {
            b(a, e + (f ? "" : "[") + c + (f ? "" : "]"));
          }) : d.push($(e) + "=" + $(mc(a))));
        }

        if (!a) return "";
        var d = [];
        b(a, "", !0);
        return d.join("&");
      };
    };
  }

  function nc(a, b) {
    if (F(a)) {
      var d = a.replace(tg, "").trim();

      if (d) {
        var c = b("Content-Type");
        (c = c && 0 === c.indexOf(ud)) || (c = (c = d.match(ug)) && vg[c[0]].test(d));
        if (c) try {
          a = Oc(d);
        } catch (e) {
          throw oc("baddata", a, e);
        }
      }
    }

    return a;
  }

  function vd(a) {
    var b = V(),
        d;
    F(a) ? q(a.split("\n"), function (a) {
      d = a.indexOf(":");
      var e = Q(T(a.substr(0, d)));
      a = T(a.substr(d + 1));
      e && (b[e] = b[e] ? b[e] + ", " + a : a);
    }) : C(a) && q(a, function (a, d) {
      var f = Q(d),
          g = T(a);
      f && (b[f] = b[f] ? b[f] + ", " + g : g);
    });
    return b;
  }

  function wd(a) {
    var b;
    return function (d) {
      b || (b = vd(a));
      return d ? (d = b[Q(d)], void 0 === d && (d = null), d) : b;
    };
  }

  function xd(a, b, d, c) {
    if (D(c)) return c(a, b, d);
    q(c, function (c) {
      a = c(a, b, d);
    });
    return a;
  }

  function Df() {
    var a = this.defaults = {
      transformResponse: [nc],
      transformRequest: [function (a) {
        return C(a) && "[object File]" !== ma.call(a) && "[object Blob]" !== ma.call(a) && "[object FormData]" !== ma.call(a) ? cb(a) : a;
      }],
      headers: {
        common: {
          Accept: "application/json, text/plain, */*"
        },
        post: pa(pc),
        put: pa(pc),
        patch: pa(pc)
      },
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      paramSerializer: "$httpParamSerializer",
      jsonpCallbackParam: "callback"
    },
        b = !1;

    this.useApplyAsync = function (a) {
      return u(a) ? (b = !!a, this) : b;
    };

    var d = this.interceptors = [];
    this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function (c, e, f, g, h, k, l, m) {
      function n(b) {
        function d(a, b) {
          for (var c = 0, e = b.length; c < e;) {
            var f = b[c++],
                g = b[c++];
            a = a.then(f, g);
          }

          b.length = 0;
          return a;
        }

        function e(a, b) {
          var c,
              d = {};
          q(a, function (a, e) {
            D(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
          });
          return d;
        }

        function f(a) {
          var b = S({}, a);
          b.data = xd(a.data, a.headers, a.status, g.transformResponse);
          a = a.status;
          return 200 <= a && 300 > a ? b : k.reject(b);
        }

        if (!C(b)) throw L("$http")("badreq", b);
        if (!F(m.valueOf(b.url))) throw L("$http")("badreq", b.url);
        var g = S({
          method: "get",
          transformRequest: a.transformRequest,
          transformResponse: a.transformResponse,
          paramSerializer: a.paramSerializer,
          jsonpCallbackParam: a.jsonpCallbackParam
        }, b);

        g.headers = function (b) {
          var c = a.headers,
              d = S({}, b.headers),
              f,
              g,
              h,
              c = S({}, c.common, c[Q(b.method)]);

          a: for (f in c) {
            g = Q(f);

            for (h in d) if (Q(h) === g) continue a;

            d[f] = c[f];
          }

          return e(d, pa(b));
        }(b);

        g.method = ub(g.method);
        g.paramSerializer = F(g.paramSerializer) ? l.get(g.paramSerializer) : g.paramSerializer;
        c.$$incOutstandingRequestCount();
        var h = [],
            n = [];
        b = k.resolve(g);
        q(t, function (a) {
          (a.request || a.requestError) && h.unshift(a.request, a.requestError);
          (a.response || a.responseError) && n.push(a.response, a.responseError);
        });
        b = d(b, h);
        b = b.then(function (b) {
          var c = b.headers,
              d = xd(b.data, wd(c), void 0, b.transformRequest);
          w(d) && q(c, function (a, b) {
            "content-type" === Q(b) && delete c[b];
          });
          w(b.withCredentials) && !w(a.withCredentials) && (b.withCredentials = a.withCredentials);
          return p(b, d).then(f, f);
        });
        b = d(b, n);
        return b = b.finally(function () {
          c.$$completeOutstandingRequest(z);
        });
      }

      function p(c, d) {
        function g(a) {
          if (a) {
            var c = {};
            q(a, function (a, d) {
              c[d] = function (c) {
                function d() {
                  a(c);
                }

                b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d);
              };
            });
            return c;
          }
        }

        function l(a, c, d, e) {
          function f() {
            p(c, a, d, e);
          }

          O && (200 <= a && 300 > a ? O.put(R, [a, c, vd(d), e]) : O.remove(R));
          b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
        }

        function p(a, b, d, e) {
          b = -1 <= b ? b : 0;
          (200 <= b && 300 > b ? G.resolve : G.reject)({
            data: a,
            status: b,
            headers: wd(d),
            config: c,
            statusText: e
          });
        }

        function K(a) {
          p(a.data, a.status, pa(a.headers()), a.statusText);
        }

        function t() {
          var a = n.pendingRequests.indexOf(c);
          -1 !== a && n.pendingRequests.splice(a, 1);
        }

        var G = k.defer(),
            y = G.promise,
            O,
            X,
            P = c.headers,
            s = "jsonp" === Q(c.method),
            R = c.url;
        s ? R = m.getTrustedResourceUrl(R) : F(R) || (R = m.valueOf(R));
        R = r(R, c.paramSerializer(c.params));
        s && (R = J(R, c.jsonpCallbackParam));
        n.pendingRequests.push(c);
        y.then(t, t);
        !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (O = C(c.cache) ? c.cache : C(a.cache) ? a.cache : v);
        O && (X = O.get(R), u(X) ? X && D(X.then) ? X.then(K, K) : H(X) ? p(X[1], X[0], pa(X[2]), X[3]) : p(X, 200, {}, "OK") : O.put(R, y));
        w(X) && ((X = yd(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (P[c.xsrfHeaderName || a.xsrfHeaderName] = X), e(c.method, R, d, l, P, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));
        return y;
      }

      function r(a, b) {
        0 < b.length && (a += (-1 === a.indexOf("?") ? "?" : "&") + b);
        return a;
      }

      function J(a, b) {
        if (/[&?][^=]+=JSON_CALLBACK/.test(a)) throw oc("badjsonp", a);
        if (new RegExp("[&?]" + b + "=").test(a)) throw oc("badjsonp", b, a);
        return a += (-1 === a.indexOf("?") ? "?" : "&") + b + "=JSON_CALLBACK";
      }

      var v = g("$http");
      a.paramSerializer = F(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
      var t = [];
      q(d, function (a) {
        t.unshift(F(a) ? l.get(a) : l.invoke(a));
      });
      n.pendingRequests = [];

      (function (a) {
        q(arguments, function (a) {
          n[a] = function (b, c) {
            return n(S({}, c || {}, {
              method: a,
              url: b
            }));
          };
        });
      })("get", "delete", "head", "jsonp");

      (function (a) {
        q(arguments, function (a) {
          n[a] = function (b, c, d) {
            return n(S({}, d || {}, {
              method: a,
              url: b,
              data: c
            }));
          };
        });
      })("post", "put", "patch");

      n.defaults = a;
      return n;
    }];
  }

  function Hf() {
    this.$get = function () {
      return function () {
        return new x.XMLHttpRequest();
      };
    };
  }

  function Gf() {
    this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (a, b, d, c) {
      return wg(a, c, a.defer, b, d[0]);
    }];
  }

  function wg(a, b, d, c, e) {
    function f(a, b, d) {
      a = a.replace("JSON_CALLBACK", b);
      var f = e.createElement("script"),
          m = null;
      f.type = "text/javascript";
      f.src = a;
      f.async = !0;

      m = function (a) {
        f.removeEventListener("load", m);
        f.removeEventListener("error", m);
        e.body.removeChild(f);
        f = null;
        var g = -1,
            r = "unknown";
        a && ("load" !== a.type || c.wasCalled(b) || (a = {
          type: "error"
        }), r = a.type, g = "error" === a.type ? 404 : 200);
        d && d(g, r);
      };

      f.addEventListener("load", m);
      f.addEventListener("error", m);
      e.body.appendChild(f);
      return m;
    }

    return function (e, h, k, l, m, n, p, r, J, v) {
      function t() {
        N && N();
        A && A.abort();
      }

      h = h || a.url();
      if ("jsonp" === Q(e)) var M = c.createCallback(h),
          N = f(h, M, function (a, b) {
        var e = 200 === a && c.getResponse(M);
        u(I) && d.cancel(I);
        N = A = null;
        l(a, e, "", b);
        c.removeCallback(M);
      });else {
        var A = b(e, h);
        A.open(e, h, !0);
        q(m, function (a, b) {
          u(a) && A.setRequestHeader(b, a);
        });

        A.onload = function () {
          var a = A.statusText || "",
              b = "response" in A ? A.response : A.responseText,
              c = 1223 === A.status ? 204 : A.status;
          0 === c && (c = b ? 200 : "file" === Ca(h).protocol ? 404 : 0);
          var e = A.getAllResponseHeaders();
          u(I) && d.cancel(I);
          N = A = null;
          l(c, b, e, a);
        };

        e = function () {
          u(I) && d.cancel(I);
          N = A = null;
          l(-1, null, null, "");
        };

        A.onerror = e;
        A.onabort = e;
        A.ontimeout = e;
        q(J, function (a, b) {
          A.addEventListener(b, a);
        });
        q(v, function (a, b) {
          A.upload.addEventListener(b, a);
        });
        p && (A.withCredentials = !0);
        if (r) try {
          A.responseType = r;
        } catch (s) {
          if ("json" !== r) throw s;
        }
        A.send(w(k) ? null : k);
      }
      if (0 < n) var I = d(t, n);else n && D(n.then) && n.then(t);
    };
  }

  function Bf() {
    var a = "{{",
        b = "}}";

    this.startSymbol = function (b) {
      return b ? (a = b, this) : a;
    };

    this.endSymbol = function (a) {
      return a ? (b = a, this) : b;
    };

    this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
      function f(a) {
        return "\\\\\\" + a;
      }

      function g(c) {
        return c.replace(n, a).replace(p, b);
      }

      function h(a, b, c, d) {
        var e = a.$watch(function (a) {
          e();
          return d(a);
        }, b, c);
        return e;
      }

      function k(f, k, n, p) {
        function M(a) {
          try {
            var b = a;
            a = n ? e.getTrusted(n, b) : e.valueOf(b);
            return p && !u(a) ? a : $b(a);
          } catch (d) {
            c(Da.interr(f, d));
          }
        }

        if (!f.length || -1 === f.indexOf(a)) {
          var q;
          k || (k = g(f), q = la(k), q.exp = f, q.expressions = [], q.$$watchDelegate = h);
          return q;
        }

        p = !!p;
        var A,
            s,
            I = 0,
            K = [],
            E = [];
        q = f.length;

        for (var G = [], y = []; I < q;) if (-1 !== (A = f.indexOf(a, I)) && -1 !== (s = f.indexOf(b, A + l))) I !== A && G.push(g(f.substring(I, A))), I = f.substring(A + l, s), K.push(I), E.push(d(I, M)), I = s + m, y.push(G.length), G.push("");else {
          I !== q && G.push(g(f.substring(I)));
          break;
        }

        n && 1 < G.length && Da.throwNoconcat(f);

        if (!k || K.length) {
          var O = function (a) {
            for (var b = 0, c = K.length; b < c; b++) {
              if (p && w(a[b])) return;
              G[y[b]] = a[b];
            }

            return G.join("");
          };

          return S(function (a) {
            var b = 0,
                d = K.length,
                e = Array(d);

            try {
              for (; b < d; b++) e[b] = E[b](a);

              return O(e);
            } catch (g) {
              c(Da.interr(f, g));
            }
          }, {
            exp: f,
            expressions: K,
            $$watchDelegate: function (a, b) {
              var c;
              return a.$watchGroup(E, function (d, e) {
                var f = O(d);
                D(b) && b.call(this, f, d !== e ? c : f, a);
                c = f;
              });
            }
          });
        }
      }

      var l = a.length,
          m = b.length,
          n = new RegExp(a.replace(/./g, f), "g"),
          p = new RegExp(b.replace(/./g, f), "g");

      k.startSymbol = function () {
        return a;
      };

      k.endSymbol = function () {
        return b;
      };

      return k;
    }];
  }

  function Cf() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
      function f(f, k, l, m) {
        function n() {
          p ? f.apply(null, r) : f(t);
        }

        var p = 4 < arguments.length,
            r = p ? va.call(arguments, 4) : [],
            J = b.setInterval,
            v = b.clearInterval,
            t = 0,
            M = u(m) && !m,
            q = (M ? c : d).defer(),
            A = q.promise;
        l = u(l) ? l : 0;
        A.$$intervalId = J(function () {
          M ? e.defer(n) : a.$evalAsync(n);
          q.notify(t++);
          0 < l && t >= l && (q.resolve(t), v(A.$$intervalId), delete g[A.$$intervalId]);
          M || a.$apply();
        }, k);
        g[A.$$intervalId] = q;
        return A;
      }

      var g = {};

      f.cancel = function (a) {
        return a && a.$$intervalId in g ? (g[a.$$intervalId].promise.catch(z), g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1;
      };

      return f;
    }];
  }

  function qc(a) {
    a = a.split("/");

    for (var b = a.length; b--;) a[b] = db(a[b]);

    return a.join("/");
  }

  function zd(a, b) {
    var d = Ca(a);
    b.$$protocol = d.protocol;
    b.$$host = d.hostname;
    b.$$port = Z(d.port) || xg[d.protocol] || null;
  }

  function Ad(a, b) {
    if (yg.test(a)) throw kb("badpath", a);
    var d = "/" !== a.charAt(0);
    d && (a = "/" + a);
    var c = Ca(a);
    b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
    b.$$search = Rc(c.search);
    b.$$hash = decodeURIComponent(c.hash);
    b.$$path && "/" !== b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
  }

  function rc(a, b) {
    return a.slice(0, b.length) === b;
  }

  function ka(a, b) {
    if (rc(b, a)) return b.substr(a.length);
  }

  function Aa(a) {
    var b = a.indexOf("#");
    return -1 === b ? a : a.substr(0, b);
  }

  function lb(a) {
    return a.replace(/(#.+)|#$/, "$1");
  }

  function sc(a, b, d) {
    this.$$html5 = !0;
    d = d || "";
    zd(a, this);

    this.$$parse = function (a) {
      var d = ka(b, a);
      if (!F(d)) throw kb("ipthprfx", a, b);
      Ad(d, this);
      this.$$path || (this.$$path = "/");
      this.$$compose();
    };

    this.$$compose = function () {
      var a = Zb(this.$$search),
          d = this.$$hash ? "#" + db(this.$$hash) : "";
      this.$$url = qc(this.$$path) + (a ? "?" + a : "") + d;
      this.$$absUrl = b + this.$$url.substr(1);
      this.$$urlUpdatedByLocation = !0;
    };

    this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
      var f, g;
      u(f = ka(a, c)) ? (g = f, g = d && u(f = ka(d, f)) ? b + (ka("/", f) || f) : a + g) : u(f = ka(b, c)) ? g = b + f : b === c + "/" && (g = b);
      g && this.$$parse(g);
      return !!g;
    };
  }

  function tc(a, b, d) {
    zd(a, this);

    this.$$parse = function (c) {
      var e = ka(a, c) || ka(b, c),
          f;
      w(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", w(e) && (a = c, this.replace())) : (f = ka(d, e), w(f) && (f = e));
      Ad(f, this);
      c = this.$$path;
      var e = a,
          g = /^\/[A-Z]:(\/.*)/;
      rc(f, e) && (f = f.replace(e, ""));
      g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
      this.$$path = c;
      this.$$compose();
    };

    this.$$compose = function () {
      var b = Zb(this.$$search),
          e = this.$$hash ? "#" + db(this.$$hash) : "";
      this.$$url = qc(this.$$path) + (b ? "?" + b : "") + e;
      this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
      this.$$urlUpdatedByLocation = !0;
    };

    this.$$parseLinkUrl = function (b, d) {
      return Aa(a) === Aa(b) ? (this.$$parse(b), !0) : !1;
    };
  }

  function Bd(a, b, d) {
    this.$$html5 = !0;
    tc.apply(this, arguments);

    this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
      var f, g;
      a === Aa(c) ? f = c : (g = ka(b, c)) ? f = a + d + g : b === c + "/" && (f = b);
      f && this.$$parse(f);
      return !!f;
    };

    this.$$compose = function () {
      var b = Zb(this.$$search),
          e = this.$$hash ? "#" + db(this.$$hash) : "";
      this.$$url = qc(this.$$path) + (b ? "?" + b : "") + e;
      this.$$absUrl = a + d + this.$$url;
      this.$$urlUpdatedByLocation = !0;
    };
  }

  function Jb(a) {
    return function () {
      return this[a];
    };
  }

  function Cd(a, b) {
    return function (d) {
      if (w(d)) return this[a];
      this[a] = b(d);
      this.$$compose();
      return this;
    };
  }

  function Jf() {
    var a = "!",
        b = {
      enabled: !1,
      requireBase: !0,
      rewriteLinks: !0
    };

    this.hashPrefix = function (b) {
      return u(b) ? (a = b, this) : a;
    };

    this.html5Mode = function (a) {
      if (Ha(a)) return b.enabled = a, this;

      if (C(a)) {
        Ha(a.enabled) && (b.enabled = a.enabled);
        Ha(a.requireBase) && (b.requireBase = a.requireBase);
        if (Ha(a.rewriteLinks) || F(a.rewriteLinks)) b.rewriteLinks = a.rewriteLinks;
        return this;
      }

      return b;
    };

    this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
      function h(a, b, d) {
        var e = l.url(),
            f = l.$$state;

        try {
          c.url(a, b, d), l.$$state = c.state();
        } catch (g) {
          throw l.url(e), l.$$state = f, g;
        }
      }

      function k(a, b) {
        d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b);
      }

      var l, m;
      m = c.baseHref();
      var n = c.url(),
          p;

      if (b.enabled) {
        if (!m && b.requireBase) throw kb("nobase");
        p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");
        m = e.history ? sc : Bd;
      } else p = Aa(n), m = tc;

      var r = p.substr(0, Aa(p).lastIndexOf("/") + 1);
      l = new m(p, r, "#" + a);
      l.$$parseLinkUrl(n, n);
      l.$$state = c.state();
      var J = /^\s*(javascript|mailto):/i;
      f.on("click", function (a) {
        var e = b.rewriteLinks;

        if (e && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 !== a.which && 2 !== a.button) {
          for (var h = B(a.target); "a" !== wa(h[0]);) if (h[0] === f[0] || !(h = h.parent())[0]) return;

          if (!F(e) || !w(h.attr(e))) {
            var e = h.prop("href"),
                k = h.attr("href") || h.attr("xlink:href");
            C(e) && "[object SVGAnimatedString]" === e.toString() && (e = Ca(e.animVal).href);
            J.test(e) || !e || h.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(e, k) || (a.preventDefault(), l.absUrl() !== c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0));
          }
        }
      });
      lb(l.absUrl()) !== lb(n) && c.url(l.absUrl(), !0);
      var v = !0;
      c.onUrlChange(function (a, b) {
        rc(a, r) ? (d.$evalAsync(function () {
          var c = l.absUrl(),
              e = l.$$state,
              f;
          a = lb(a);
          l.$$parse(a);
          l.$$state = b;
          f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
          l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (v = !1, k(c, e)));
        }), d.$$phase || d.$digest()) : g.location.href = a;
      });
      d.$watch(function () {
        if (v || l.$$urlUpdatedByLocation) {
          l.$$urlUpdatedByLocation = !1;
          var a = lb(c.url()),
              b = lb(l.absUrl()),
              f = c.state(),
              g = l.$$replace,
              m = a !== b || l.$$html5 && e.history && f !== l.$$state;
          if (v || m) v = !1, d.$evalAsync(function () {
            var b = l.absUrl(),
                c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;
            l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)));
          });
        }

        l.$$replace = !1;
      });
      return l;
    }];
  }

  function Kf() {
    var a = !0,
        b = this;

    this.debugEnabled = function (b) {
      return u(b) ? (a = b, this) : a;
    };

    this.$get = ["$window", function (d) {
      function c(a) {
        a instanceof Error && (a.stack && f ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
        return a;
      }

      function e(a) {
        var b = d.console || {},
            e = b[a] || b.log || z;
        a = !1;

        try {
          a = !!e.apply;
        } catch (f) {}

        return a ? function () {
          var a = [];
          q(arguments, function (b) {
            a.push(c(b));
          });
          return e.apply(b, a);
        } : function (a, b) {
          e(a, null == b ? "" : b);
        };
      }

      var f = za || /\bEdge\//.test(d.navigator && d.navigator.userAgent);
      return {
        log: e("log"),
        info: e("info"),
        warn: e("warn"),
        error: e("error"),
        debug: function () {
          var c = e("debug");
          return function () {
            a && c.apply(b, arguments);
          };
        }()
      };
    }];
  }

  function zg(a) {
    return a + "";
  }

  function Ag(a, b) {
    return "undefined" !== typeof a ? a : b;
  }

  function Dd(a, b) {
    return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
  }

  function U(a, b) {
    var d, c, e;

    switch (a.type) {
      case s.Program:
        d = !0;
        q(a.body, function (a) {
          U(a.expression, b);
          d = d && a.expression.constant;
        });
        a.constant = d;
        break;

      case s.Literal:
        a.constant = !0;
        a.toWatch = [];
        break;

      case s.UnaryExpression:
        U(a.argument, b);
        a.constant = a.argument.constant;
        a.toWatch = a.argument.toWatch;
        break;

      case s.BinaryExpression:
        U(a.left, b);
        U(a.right, b);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = a.left.toWatch.concat(a.right.toWatch);
        break;

      case s.LogicalExpression:
        U(a.left, b);
        U(a.right, b);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = a.constant ? [] : [a];
        break;

      case s.ConditionalExpression:
        U(a.test, b);
        U(a.alternate, b);
        U(a.consequent, b);
        a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
        a.toWatch = a.constant ? [] : [a];
        break;

      case s.Identifier:
        a.constant = !1;
        a.toWatch = [a];
        break;

      case s.MemberExpression:
        U(a.object, b);
        a.computed && U(a.property, b);
        a.constant = a.object.constant && (!a.computed || a.property.constant);
        a.toWatch = [a];
        break;

      case s.CallExpression:
        d = e = a.filter ? !b(a.callee.name).$stateful : !1;
        c = [];
        q(a.arguments, function (a) {
          U(a, b);
          d = d && a.constant;
          a.constant || c.push.apply(c, a.toWatch);
        });
        a.constant = d;
        a.toWatch = e ? c : [a];
        break;

      case s.AssignmentExpression:
        U(a.left, b);
        U(a.right, b);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = [a];
        break;

      case s.ArrayExpression:
        d = !0;
        c = [];
        q(a.elements, function (a) {
          U(a, b);
          d = d && a.constant;
          a.constant || c.push.apply(c, a.toWatch);
        });
        a.constant = d;
        a.toWatch = c;
        break;

      case s.ObjectExpression:
        d = !0;
        c = [];
        q(a.properties, function (a) {
          U(a.value, b);
          d = d && a.value.constant && !a.computed;
          a.value.constant || c.push.apply(c, a.value.toWatch);
          a.computed && (U(a.key, b), a.key.constant || c.push.apply(c, a.key.toWatch));
        });
        a.constant = d;
        a.toWatch = c;
        break;

      case s.ThisExpression:
        a.constant = !1;
        a.toWatch = [];
        break;

      case s.LocalsExpression:
        a.constant = !1, a.toWatch = [];
    }
  }

  function Ed(a) {
    if (1 === a.length) {
      a = a[0].expression;
      var b = a.toWatch;
      return 1 !== b.length ? b : b[0] !== a ? b : void 0;
    }
  }

  function Fd(a) {
    return a.type === s.Identifier || a.type === s.MemberExpression;
  }

  function Gd(a) {
    if (1 === a.body.length && Fd(a.body[0].expression)) return {
      type: s.AssignmentExpression,
      left: a.body[0].expression,
      right: {
        type: s.NGValueParameter
      },
      operator: "="
    };
  }

  function Hd(a) {
    this.$filter = a;
  }

  function Id(a) {
    this.$filter = a;
  }

  function uc(a, b, d) {
    this.ast = new s(a, d);
    this.astCompiler = d.csp ? new Id(b) : new Hd(b);
  }

  function vc(a) {
    return D(a.valueOf) ? a.valueOf() : Bg.call(a);
  }

  function Lf() {
    var a = V(),
        b = {
      "true": !0,
      "false": !1,
      "null": null,
      undefined: void 0
    },
        d,
        c;

    this.addLiteral = function (a, c) {
      b[a] = c;
    };

    this.setIdentifierFns = function (a, b) {
      d = a;
      c = b;
      return this;
    };

    this.$get = ["$filter", function (e) {
      function f(a, b, c) {
        return null == a || null == b ? a === b : "object" !== typeof a || (a = vc(a), "object" !== typeof a || c) ? a === b || a !== a && b !== b : !1;
      }

      function g(a, b, c, d, e) {
        var g = d.inputs,
            h;

        if (1 === g.length) {
          var k = f,
              g = g[0];
          return a.$watch(function (a) {
            var b = g(a);
            f(b, k, d.literal) || (h = d(a, void 0, void 0, [b]), k = b && vc(b));
            return h;
          }, b, c, e);
        }

        for (var l = [], m = [], n = 0, E = g.length; n < E; n++) l[n] = f, m[n] = null;

        return a.$watch(function (a) {
          for (var b = !1, c = 0, e = g.length; c < e; c++) {
            var k = g[c](a);
            if (b || (b = !f(k, l[c], d.literal))) m[c] = k, l[c] = k && vc(k);
          }

          b && (h = d(a, void 0, void 0, m));
          return h;
        }, b, c, e);
      }

      function h(a, b, c, d, e) {
        function f(a) {
          return d(a);
        }

        function h(a, c, d) {
          n = a;
          D(b) && b(a, c, d);
          l(a) && d.$$postDigest(function () {
            l(n) && m();
          });
        }

        var l = d.literal ? k : u,
            m,
            n;
        return m = d.inputs ? g(a, h, c, d, e) : a.$watch(f, h, c);
      }

      function k(a) {
        var b = !0;
        q(a, function (a) {
          u(a) || (b = !1);
        });
        return b;
      }

      function l(a, b, c, d) {
        var e = a.$watch(function (a) {
          e();
          return d(a);
        }, b, c);
        return e;
      }

      function m(a, b) {
        function c(d, e, g, h) {
          g = f && h ? h[0] : a(d, e, g, h);
          return b(g, d, e);
        }

        function d(c, e, g, k) {
          g = f && k ? k[0] : a(c, e, g, k);
          c = b(g, c, e);
          return h(g) ? c : g;
        }

        if (!b) return a;
        var e = a.$$watchDelegate,
            f = !1,
            h = a.literal ? k : u,
            l = a.oneTime ? d : c;
        l.literal = a.literal;
        l.oneTime = a.oneTime;
        f = !a.inputs;
        e && e !== g ? (l.$$watchDelegate = e, l.inputs = a.inputs) : b.$stateful || (l.$$watchDelegate = g, l.inputs = a.inputs ? a.inputs : [a]);
        return l;
      }

      var n = {
        csp: Ga().noUnsafeEval,
        literals: ra(b),
        isIdentifierStart: D(d) && d,
        isIdentifierContinue: D(c) && c
      };
      return function (b, c) {
        var d, f, k;

        switch (typeof b) {
          case "string":
            return k = b = b.trim(), d = a[k], d || (":" === b.charAt(0) && ":" === b.charAt(1) && (f = !0, b = b.substring(2)), d = new wc(n), d = new uc(d, e, n).parse(b), d.constant ? d.$$watchDelegate = l : f ? (d.oneTime = !0, d.$$watchDelegate = h) : d.inputs && (d.$$watchDelegate = g), a[k] = d), m(d, c);

          case "function":
            return m(b, c);

          default:
            return m(z, c);
        }
      };
    }];
  }

  function Nf() {
    var a = !0;
    this.$get = ["$rootScope", "$exceptionHandler", function (b, d) {
      return Jd(function (a) {
        b.$evalAsync(a);
      }, d, a);
    }];

    this.errorOnUnhandledRejections = function (b) {
      return u(b) ? (a = b, this) : a;
    };
  }

  function Of() {
    var a = !0;
    this.$get = ["$browser", "$exceptionHandler", function (b, d) {
      return Jd(function (a) {
        b.defer(a);
      }, d, a);
    }];

    this.errorOnUnhandledRejections = function (b) {
      return u(b) ? (a = b, this) : a;
    };
  }

  function Jd(a, b, d) {
    function c() {
      return new e();
    }

    function e() {
      var a = this.promise = new f();

      this.resolve = function (b) {
        k(a, b);
      };

      this.reject = function (b) {
        m(a, b);
      };

      this.notify = function (b) {
        p(a, b);
      };
    }

    function f() {
      this.$$state = {
        status: 0
      };
    }

    function g() {
      for (; !s && A.length;) {
        var a = A.shift();

        if (!a.pur) {
          a.pur = !0;
          var c = a.value,
              c = "Possibly unhandled rejection: " + ("function" === typeof c ? c.toString().replace(/ \{[\s\S]*$/, "") : w(c) ? "undefined" : "string" !== typeof c ? Be(c, void 0) : c);
          a.value instanceof Error ? b(a.value, c) : b(c);
        }
      }
    }

    function h(b) {
      !d || b.pending || 2 !== b.status || b.pur || (0 === s && 0 === A.length && a(g), A.push(b));
      !b.processScheduled && b.pending && (b.processScheduled = !0, ++s, a(function () {
        var c, e, f;
        f = b.pending;
        b.processScheduled = !1;
        b.pending = void 0;

        try {
          for (var h = 0, l = f.length; h < l; ++h) {
            b.pur = !0;
            e = f[h][0];
            c = f[h][b.status];

            try {
              D(c) ? k(e, c(b.value)) : 1 === b.status ? k(e, b.value) : m(e, b.value);
            } catch (n) {
              m(e, n);
            }
          }
        } finally {
          --s, d && 0 === s && a(g);
        }
      }));
    }

    function k(a, b) {
      a.$$state.status || (b === a ? n(a, M("qcycle", b)) : l(a, b));
    }

    function l(a, b) {
      function c(b) {
        g || (g = !0, l(a, b));
      }

      function d(b) {
        g || (g = !0, n(a, b));
      }

      function e(b) {
        p(a, b);
      }

      var f,
          g = !1;

      try {
        if (C(b) || D(b)) f = b.then;
        D(f) ? (a.$$state.status = -1, f.call(b, c, d, e)) : (a.$$state.value = b, a.$$state.status = 1, h(a.$$state));
      } catch (k) {
        d(k);
      }
    }

    function m(a, b) {
      a.$$state.status || n(a, b);
    }

    function n(a, b) {
      a.$$state.value = b;
      a.$$state.status = 2;
      h(a.$$state);
    }

    function p(c, d) {
      var e = c.$$state.pending;
      0 >= c.$$state.status && e && e.length && a(function () {
        for (var a, c, f = 0, g = e.length; f < g; f++) {
          c = e[f][0];
          a = e[f][3];

          try {
            p(c, D(a) ? a(d) : d);
          } catch (h) {
            b(h);
          }
        }
      });
    }

    function r(a) {
      var b = new f();
      m(b, a);
      return b;
    }

    function J(a, b, c) {
      var d = null;

      try {
        D(c) && (d = c());
      } catch (e) {
        return r(e);
      }

      return d && D(d.then) ? d.then(function () {
        return b(a);
      }, r) : b(a);
    }

    function v(a, b, c, d) {
      var e = new f();
      k(e, a);
      return e.then(b, c, d);
    }

    function t(a) {
      if (!D(a)) throw M("norslvr", a);
      var b = new f();
      a(function (a) {
        k(b, a);
      }, function (a) {
        m(b, a);
      });
      return b;
    }

    var M = L("$q", TypeError),
        s = 0,
        A = [];
    S(f.prototype, {
      then: function (a, b, c) {
        if (w(a) && w(b) && w(c)) return this;
        var d = new f();
        this.$$state.pending = this.$$state.pending || [];
        this.$$state.pending.push([d, a, b, c]);
        0 < this.$$state.status && h(this.$$state);
        return d;
      },
      "catch": function (a) {
        return this.then(null, a);
      },
      "finally": function (a, b) {
        return this.then(function (b) {
          return J(b, u, a);
        }, function (b) {
          return J(b, r, a);
        }, b);
      }
    });
    var u = v;
    t.prototype = f.prototype;
    t.defer = c;
    t.reject = r;
    t.when = v;
    t.resolve = u;

    t.all = function (a) {
      var b = new f(),
          c = 0,
          d = H(a) ? [] : {};
      q(a, function (a, e) {
        c++;
        v(a).then(function (a) {
          d[e] = a;
          --c || k(b, d);
        }, function (a) {
          m(b, a);
        });
      });
      0 === c && k(b, d);
      return b;
    };

    t.race = function (a) {
      var b = c();
      q(a, function (a) {
        v(a).then(b.resolve, b.reject);
      });
      return b.promise;
    };

    return t;
  }

  function Xf() {
    this.$get = ["$window", "$timeout", function (a, b) {
      var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
          c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
          e = !!d,
          f = e ? function (a) {
        var b = d(a);
        return function () {
          c(b);
        };
      } : function (a) {
        var c = b(a, 16.66, !1);
        return function () {
          b.cancel(c);
        };
      };
      f.supported = e;
      return f;
    }];
  }

  function Mf() {
    function a(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$watchersCount = 0;
        this.$id = ++qb;
        this.$$ChildScope = null;
      }

      b.prototype = a;
      return b;
    }

    var b = 10,
        d = L("$rootScope"),
        c = null,
        e = null;

    this.digestTtl = function (a) {
      arguments.length && (b = a);
      return b;
    };

    this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, h) {
      function k(a) {
        a.currentScope.$$destroyed = !0;
      }

      function l(a) {
        9 === za && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));
        a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
      }

      function m() {
        this.$id = ++qb;
        this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
        this.$root = this;
        this.$$destroyed = !1;
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$watchersCount = 0;
        this.$$isolateBindings = null;
      }

      function n(a) {
        if (M.$$phase) throw d("inprog", M.$$phase);
        M.$$phase = a;
      }

      function p(a, b) {
        do a.$$watchersCount += b; while (a = a.$parent);
      }

      function r(a, b, c) {
        do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
      }

      function J() {}

      function v() {
        for (; u.length;) try {
          u.shift()();
        } catch (a) {
          f(a);
        }

        e = null;
      }

      function t() {
        null === e && (e = h.defer(function () {
          M.$apply(v);
        }));
      }

      m.prototype = {
        constructor: m,
        $new: function (b, c) {
          var d;
          c = c || this;
          b ? (d = new m(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());
          d.$parent = c;
          d.$$prevSibling = c.$$childTail;
          c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
          (b || c !== this) && d.$on("$destroy", k);
          return d;
        },
        $watch: function (a, b, d, e) {
          var f = g(a);
          if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);
          var h = this,
              k = h.$$watchers,
              l = {
            fn: b,
            last: J,
            get: f,
            exp: e || a,
            eq: !!d
          };
          c = null;
          D(b) || (l.fn = z);
          k || (k = h.$$watchers = [], k.$$digestWatchIndex = -1);
          k.unshift(l);
          k.$$digestWatchIndex++;
          p(this, 1);
          return function () {
            var a = $a(k, l);
            0 <= a && (p(h, -1), a < k.$$digestWatchIndex && k.$$digestWatchIndex--);
            c = null;
          };
        },
        $watchGroup: function (a, b) {
          function c() {
            h = !1;
            k ? (k = !1, b(e, e, g)) : b(e, d, g);
          }

          var d = Array(a.length),
              e = Array(a.length),
              f = [],
              g = this,
              h = !1,
              k = !0;

          if (!a.length) {
            var l = !0;
            g.$evalAsync(function () {
              l && b(e, e, g);
            });
            return function () {
              l = !1;
            };
          }

          if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
            e[0] = a;
            d[0] = c;
            b(e, a === c ? e : d, f);
          });
          q(a, function (a, b) {
            var k = g.$watch(a, function (a, f) {
              e[b] = a;
              d[b] = f;
              h || (h = !0, g.$evalAsync(c));
            });
            f.push(k);
          });
          return function () {
            for (; f.length;) f.shift()();
          };
        },
        $watchCollection: function (a, b) {
          function c(a) {
            e = a;
            var b, d, g, h;

            if (!w(e)) {
              if (C(e)) {
                if (qa(e)) for (f !== n && (f = n, t = f.length = 0, l++), a = e.length, t !== a && (l++, f.length = t = a), b = 0; b < a; b++) h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);else {
                  f !== p && (f = p = {}, t = 0, l++);
                  a = 0;

                  for (b in e) ua.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (t++, f[b] = g, l++));

                  if (t > a) for (b in l++, f) ua.call(e, b) || (t--, delete f[b]);
                }
              } else f !== e && (f = e, l++);
              return l;
            }
          }

          c.$stateful = !0;
          var d = this,
              e,
              f,
              h,
              k = 1 < b.length,
              l = 0,
              m = g(a, c),
              n = [],
              p = {},
              r = !0,
              t = 0;
          return this.$watch(m, function () {
            r ? (r = !1, b(e, e, d)) : b(e, h, d);
            if (k) if (C(e)) {
              if (qa(e)) {
                h = Array(e.length);

                for (var a = 0; a < e.length; a++) h[a] = e[a];
              } else for (a in h = {}, e) ua.call(e, a) && (h[a] = e[a]);
            } else h = e;
          });
        },
        $digest: function () {
          var a,
              g,
              k,
              l,
              m,
              p,
              r,
              t = b,
              q,
              u = [],
              w,
              x;
          n("$digest");
          h.$$checkUrlChange();
          this === M && null !== e && (h.defer.cancel(e), v());
          c = null;

          do {
            r = !1;
            q = this;

            for (p = 0; p < s.length; p++) {
              try {
                x = s[p], l = x.fn, l(x.scope, x.locals);
              } catch (z) {
                f(z);
              }

              c = null;
            }

            s.length = 0;

            a: do {
              if (p = q.$$watchers) for (p.$$digestWatchIndex = p.length; p.$$digestWatchIndex--;) try {
                if (a = p[p.$$digestWatchIndex]) if (m = a.get, (g = m(q)) !== (k = a.last) && !(a.eq ? sa(g, k) : da(g) && da(k))) r = !0, c = a, a.last = a.eq ? ra(g, null) : g, l = a.fn, l(g, k === J ? g : k, q), 5 > t && (w = 4 - t, u[w] || (u[w] = []), u[w].push({
                  msg: D(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                  newVal: g,
                  oldVal: k
                }));else if (a === c) {
                  r = !1;
                  break a;
                }
              } catch (B) {
                f(B);
              }
              if (!(p = q.$$watchersCount && q.$$childHead || q !== this && q.$$nextSibling)) for (; q !== this && !(p = q.$$nextSibling);) q = q.$parent;
            } while (q = p);

            if ((r || s.length) && !t--) throw M.$$phase = null, d("infdig", b, u);
          } while (r || s.length);

          for (M.$$phase = null; I < A.length;) try {
            A[I++]();
          } catch (F) {
            f(F);
          }

          A.length = I = 0;
          h.$$checkUrlChange();
        },
        $destroy: function () {
          if (!this.$$destroyed) {
            var a = this.$parent;
            this.$broadcast("$destroy");
            this.$$destroyed = !0;
            this === M && h.$$applicationDestroyed();
            p(this, -this.$$watchersCount);

            for (var b in this.$$listenerCount) r(this, this.$$listenerCount[b], b);

            a && a.$$childHead === this && (a.$$childHead = this.$$nextSibling);
            a && a.$$childTail === this && (a.$$childTail = this.$$prevSibling);
            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
            this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = z;

            this.$on = this.$watch = this.$watchGroup = function () {
              return z;
            };

            this.$$listeners = {};
            this.$$nextSibling = null;
            l(this);
          }
        },
        $eval: function (a, b) {
          return g(a)(this, b);
        },
        $evalAsync: function (a, b) {
          M.$$phase || s.length || h.defer(function () {
            s.length && M.$digest();
          });
          s.push({
            scope: this,
            fn: g(a),
            locals: b
          });
        },
        $$postDigest: function (a) {
          A.push(a);
        },
        $apply: function (a) {
          try {
            n("$apply");

            try {
              return this.$eval(a);
            } finally {
              M.$$phase = null;
            }
          } catch (b) {
            f(b);
          } finally {
            try {
              M.$digest();
            } catch (c) {
              throw f(c), c;
            }
          }
        },
        $applyAsync: function (a) {
          function b() {
            c.$eval(a);
          }

          var c = this;
          a && u.push(b);
          a = g(a);
          t();
        },
        $on: function (a, b) {
          var c = this.$$listeners[a];
          c || (this.$$listeners[a] = c = []);
          c.push(b);
          var d = this;

          do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);

          var e = this;
          return function () {
            var d = c.indexOf(b);
            -1 !== d && (c[d] = null, r(e, 1, a));
          };
        },
        $emit: function (a, b) {
          var c = [],
              d,
              e = this,
              g = !1,
              h = {
            name: a,
            targetScope: e,
            stopPropagation: function () {
              g = !0;
            },
            preventDefault: function () {
              h.defaultPrevented = !0;
            },
            defaultPrevented: !1
          },
              k = ab([h], arguments, 1),
              l,
              m;

          do {
            d = e.$$listeners[a] || c;
            h.currentScope = e;
            l = 0;

            for (m = d.length; l < m; l++) if (d[l]) try {
              d[l].apply(null, k);
            } catch (n) {
              f(n);
            } else d.splice(l, 1), l--, m--;

            if (g) return h.currentScope = null, h;
            e = e.$parent;
          } while (e);

          h.currentScope = null;
          return h;
        },
        $broadcast: function (a, b) {
          var c = this,
              d = this,
              e = {
            name: a,
            targetScope: this,
            preventDefault: function () {
              e.defaultPrevented = !0;
            },
            defaultPrevented: !1
          };
          if (!this.$$listenerCount[a]) return e;

          for (var g = ab([e], arguments, 1), h, k; c = d;) {
            e.currentScope = c;
            d = c.$$listeners[a] || [];
            h = 0;

            for (k = d.length; h < k; h++) if (d[h]) try {
              d[h].apply(null, g);
            } catch (l) {
              f(l);
            } else d.splice(h, 1), h--, k--;

            if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent;
          }

          e.currentScope = null;
          return e;
        }
      };
      var M = new m(),
          s = M.$$asyncQueue = [],
          A = M.$$postDigestQueue = [],
          u = M.$$applyAsyncQueue = [],
          I = 0;
      return M;
    }];
  }

  function Ee() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/,
        b = /^\s*((https?|ftp|file|blob):|data:image\/)/;

    this.aHrefSanitizationWhitelist = function (b) {
      return u(b) ? (a = b, this) : a;
    };

    this.imgSrcSanitizationWhitelist = function (a) {
      return u(a) ? (b = a, this) : b;
    };

    this.$get = function () {
      return function (d, c) {
        var e = c ? b : a,
            f;
        f = Ca(d).href;
        return "" === f || f.match(e) ? d : "unsafe:" + f;
      };
    };
  }

  function Cg(a) {
    if ("self" === a) return a;

    if (F(a)) {
      if (-1 < a.indexOf("***")) throw ta("iwcard", a);
      a = Kd(a).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*");
      return new RegExp("^" + a + "$");
    }

    if (Xa(a)) return new RegExp("^" + a.source + "$");
    throw ta("imatcher");
  }

  function Ld(a) {
    var b = [];
    u(a) && q(a, function (a) {
      b.push(Cg(a));
    });
    return b;
  }

  function Qf() {
    this.SCE_CONTEXTS = oa;
    var a = ["self"],
        b = [];

    this.resourceUrlWhitelist = function (b) {
      arguments.length && (a = Ld(b));
      return a;
    };

    this.resourceUrlBlacklist = function (a) {
      arguments.length && (b = Ld(a));
      return b;
    };

    this.$get = ["$injector", function (d) {
      function c(a, b) {
        return "self" === a ? yd(b) : !!a.exec(b.href);
      }

      function e(a) {
        var b = function (a) {
          this.$$unwrapTrustedValue = function () {
            return a;
          };
        };

        a && (b.prototype = new a());

        b.prototype.valueOf = function () {
          return this.$$unwrapTrustedValue();
        };

        b.prototype.toString = function () {
          return this.$$unwrapTrustedValue().toString();
        };

        return b;
      }

      var f = function (a) {
        throw ta("unsafe");
      };

      d.has("$sanitize") && (f = d.get("$sanitize"));
      var g = e(),
          h = {};
      h[oa.HTML] = e(g);
      h[oa.CSS] = e(g);
      h[oa.URL] = e(g);
      h[oa.JS] = e(g);
      h[oa.RESOURCE_URL] = e(h[oa.URL]);
      return {
        trustAs: function (a, b) {
          var c = h.hasOwnProperty(a) ? h[a] : null;
          if (!c) throw ta("icontext", a, b);
          if (null === b || w(b) || "" === b) return b;
          if ("string" !== typeof b) throw ta("itype", a);
          return new c(b);
        },
        getTrusted: function (d, e) {
          if (null === e || w(e) || "" === e) return e;
          var g = h.hasOwnProperty(d) ? h[d] : null;
          if (g && e instanceof g) return e.$$unwrapTrustedValue();

          if (d === oa.RESOURCE_URL) {
            var g = Ca(e.toString()),
                n,
                p,
                r = !1;
            n = 0;

            for (p = a.length; n < p; n++) if (c(a[n], g)) {
              r = !0;
              break;
            }

            if (r) for (n = 0, p = b.length; n < p; n++) if (c(b[n], g)) {
              r = !1;
              break;
            }
            if (r) return e;
            throw ta("insecurl", e.toString());
          }

          if (d === oa.HTML) return f(e);
          throw ta("unsafe");
        },
        valueOf: function (a) {
          return a instanceof g ? a.$$unwrapTrustedValue() : a;
        }
      };
    }];
  }

  function Pf() {
    var a = !0;

    this.enabled = function (b) {
      arguments.length && (a = !!b);
      return a;
    };

    this.$get = ["$parse", "$sceDelegate", function (b, d) {
      if (a && 8 > za) throw ta("iequirks");
      var c = pa(oa);

      c.isEnabled = function () {
        return a;
      };

      c.trustAs = d.trustAs;
      c.getTrusted = d.getTrusted;
      c.valueOf = d.valueOf;
      a || (c.trustAs = c.getTrusted = function (a, b) {
        return b;
      }, c.valueOf = Ya);

      c.parseAs = function (a, d) {
        var e = b(d);
        return e.literal && e.constant ? e : b(d, function (b) {
          return c.getTrusted(a, b);
        });
      };

      var e = c.parseAs,
          f = c.getTrusted,
          g = c.trustAs;
      q(oa, function (a, b) {
        var d = Q(b);

        c[("parse_as_" + d).replace(xc, gb)] = function (b) {
          return e(a, b);
        };

        c[("get_trusted_" + d).replace(xc, gb)] = function (b) {
          return f(a, b);
        };

        c[("trust_as_" + d).replace(xc, gb)] = function (b) {
          return g(a, b);
        };
      });
      return c;
    }];
  }

  function Rf() {
    this.$get = ["$window", "$document", function (a, b) {
      var d = {},
          c = !((!a.nw || !a.nw.process) && a.chrome && (a.chrome.app && a.chrome.app.runtime || !a.chrome.app && a.chrome.runtime && a.chrome.runtime.id)) && a.history && a.history.pushState,
          e = Z((/android (\d+)/.exec(Q((a.navigator || {}).userAgent)) || [])[1]),
          f = /Boxee/i.test((a.navigator || {}).userAgent),
          g = b[0] || {},
          h = g.body && g.body.style,
          k = !1,
          l = !1;
      h && (k = !!("transition" in h || "webkitTransition" in h), l = !!("animation" in h || "webkitAnimation" in h));
      return {
        history: !(!c || 4 > e || f),
        hasEvent: function (a) {
          if ("input" === a && za) return !1;

          if (w(d[a])) {
            var b = g.createElement("div");
            d[a] = "on" + a in b;
          }

          return d[a];
        },
        csp: Ga(),
        transitions: k,
        animations: l,
        android: e
      };
    }];
  }

  function Tf() {
    var a;

    this.httpOptions = function (b) {
      return b ? (a = b, this) : a;
    };

    this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function (b, d, c, e, f) {
      function g(h, k) {
        g.totalPendingRequests++;
        if (!F(h) || w(d.get(h))) h = f.getTrustedResourceUrl(h);
        var l = c.defaults && c.defaults.transformResponse;
        H(l) ? l = l.filter(function (a) {
          return a !== nc;
        }) : l === nc && (l = null);
        return c.get(h, S({
          cache: d,
          transformResponse: l
        }, a)).finally(function () {
          g.totalPendingRequests--;
        }).then(function (a) {
          d.put(h, a.data);
          return a.data;
        }, function (a) {
          k || (a = Dg("tpload", h, a.status, a.statusText), b(a));
          return e.reject(a);
        });
      }

      g.totalPendingRequests = 0;
      return g;
    }];
  }

  function Uf() {
    this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
      return {
        findBindings: function (a, b, d) {
          a = a.getElementsByClassName("ng-binding");
          var g = [];
          q(a, function (a) {
            var c = ea.element(a).data("$binding");
            c && q(c, function (c) {
              d ? new RegExp("(^|\\s)" + Kd(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 !== c.indexOf(b) && g.push(a);
            });
          });
          return g;
        },
        findModels: function (a, b, d) {
          for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
            var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
            if (k.length) return k;
          }
        },
        getLocation: function () {
          return d.url();
        },
        setLocation: function (b) {
          b !== d.url() && (d.url(b), a.$digest());
        },
        whenStable: function (a) {
          b.notifyWhenNoOutstandingRequests(a);
        }
      };
    }];
  }

  function Vf() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
      function f(f, k, l) {
        D(f) || (l = k, k = f, f = z);
        var m = va.call(arguments, 3),
            n = u(l) && !l,
            p = (n ? c : d).defer(),
            r = p.promise,
            q;
        q = b.defer(function () {
          try {
            p.resolve(f.apply(null, m));
          } catch (b) {
            p.reject(b), e(b);
          } finally {
            delete g[r.$$timeoutId];
          }

          n || a.$apply();
        }, k);
        r.$$timeoutId = q;
        g[q] = p;
        return r;
      }

      var g = {};

      f.cancel = function (a) {
        return a && a.$$timeoutId in g ? (g[a.$$timeoutId].promise.catch(z), g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
      };

      return f;
    }];
  }

  function Ca(a) {
    za && (aa.setAttribute("href", a), a = aa.href);
    aa.setAttribute("href", a);
    return {
      href: aa.href,
      protocol: aa.protocol ? aa.protocol.replace(/:$/, "") : "",
      host: aa.host,
      search: aa.search ? aa.search.replace(/^\?/, "") : "",
      hash: aa.hash ? aa.hash.replace(/^#/, "") : "",
      hostname: aa.hostname,
      port: aa.port,
      pathname: "/" === aa.pathname.charAt(0) ? aa.pathname : "/" + aa.pathname
    };
  }

  function yd(a) {
    a = F(a) ? Ca(a) : a;
    return a.protocol === Md.protocol && a.host === Md.host;
  }

  function Wf() {
    this.$get = la(x);
  }

  function Nd(a) {
    function b(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }

    var d = a[0] || {},
        c = {},
        e = "";
    return function () {
      var a, g, h, k, l;

      try {
        a = d.cookie || "";
      } catch (m) {
        a = "";
      }

      if (a !== e) for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++) g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), w(c[l]) && (c[l] = b(g.substring(k + 1))));
      return c;
    };
  }

  function $f() {
    this.$get = Nd;
  }

  function cd(a) {
    function b(d, c) {
      if (C(d)) {
        var e = {};
        q(d, function (a, c) {
          e[c] = b(c, a);
        });
        return e;
      }

      return a.factory(d + "Filter", c);
    }

    this.register = b;
    this.$get = ["$injector", function (a) {
      return function (b) {
        return a.get(b + "Filter");
      };
    }];
    b("currency", Od);
    b("date", Pd);
    b("filter", Eg);
    b("json", Fg);
    b("limitTo", Gg);
    b("lowercase", Hg);
    b("number", Qd);
    b("orderBy", Rd);
    b("uppercase", Ig);
  }

  function Eg() {
    return function (a, b, d, c) {
      if (!qa(a)) {
        if (null == a) return a;
        throw L("filter")("notarray", a);
      }

      c = c || "$";
      var e;

      switch (yc(b)) {
        case "function":
          break;

        case "boolean":
        case "null":
        case "number":
        case "string":
          e = !0;

        case "object":
          b = Jg(b, d, c, e);
          break;

        default:
          return a;
      }

      return Array.prototype.filter.call(a, b);
    };
  }

  function Jg(a, b, d, c) {
    var e = C(a) && d in a;
    !0 === b ? b = sa : D(b) || (b = function (a, b) {
      if (w(a)) return !1;
      if (null === a || null === b) return a === b;
      if (C(b) || C(a) && !Wb(a)) return !1;
      a = Q("" + a);
      b = Q("" + b);
      return -1 !== a.indexOf(b);
    });
    return function (f) {
      return e && !C(f) ? Ea(f, a[d], b, d, !1) : Ea(f, a, b, d, c);
    };
  }

  function Ea(a, b, d, c, e, f) {
    var g = yc(a),
        h = yc(b);
    if ("string" === h && "!" === b.charAt(0)) return !Ea(a, b.substring(1), d, c, e);
    if (H(a)) return a.some(function (a) {
      return Ea(a, b, d, c, e);
    });

    switch (g) {
      case "object":
        var k;

        if (e) {
          for (k in a) if (k.charAt && "$" !== k.charAt(0) && Ea(a[k], b, d, c, !0)) return !0;

          return f ? !1 : Ea(a, b, d, c, !1);
        }

        if ("object" === h) {
          for (k in b) if (f = b[k], !D(f) && !w(f) && (g = k === c, !Ea(g ? a : a[k], f, d, c, g, g))) return !1;

          return !0;
        }

        return d(a, b);

      case "function":
        return !1;

      default:
        return d(a, b);
    }
  }

  function yc(a) {
    return null === a ? "null" : typeof a;
  }

  function Od(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c, e) {
      w(c) && (c = b.CURRENCY_SYM);
      w(e) && (e = b.PATTERNS[1].maxFrac);
      return null == a ? a : Sd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c);
    };
  }

  function Qd(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c) {
      return null == a ? a : Sd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
    };
  }

  function Kg(a) {
    var b = 0,
        d,
        c,
        e,
        f,
        g;
    -1 < (c = a.indexOf(Td)) && (a = a.replace(Td, ""));
    0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);

    for (e = 0; a.charAt(e) === zc; e++);

    if (e === (g = a.length)) d = [0], c = 1;else {
      for (g--; a.charAt(g) === zc;) g--;

      c -= e;
      d = [];

      for (f = 0; e <= g; e++, f++) d[f] = +a.charAt(e);
    }
    c > Ud && (d = d.splice(0, Ud - 1), b = c - 1, c = 1);
    return {
      d: d,
      e: b,
      i: c
    };
  }

  function Lg(a, b, d, c) {
    var e = a.d,
        f = e.length - a.i;
    b = w(b) ? Math.min(Math.max(d, f), c) : +b;
    d = b + a.i;
    c = e[d];

    if (0 < d) {
      e.splice(Math.max(a.i, d));

      for (var g = d; g < e.length; g++) e[g] = 0;
    } else for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++) e[g] = 0;

    if (5 <= c) if (0 > d - 1) {
      for (c = 0; c > d; c--) e.unshift(0), a.i++;

      e.unshift(1);
      a.i++;
    } else e[d - 1]++;

    for (; f < Math.max(0, b); f++) e.push(0);

    if (b = e.reduceRight(function (a, b, c, d) {
      b += a;
      d[c] = b % 10;
      return Math.floor(b / 10);
    }, 0)) e.unshift(b), a.i++;
  }

  function Sd(a, b, d, c, e) {
    if (!F(a) && !ba(a) || isNaN(a)) return "";
    var f = !isFinite(a),
        g = !1,
        h = Math.abs(a) + "",
        k = "";
    if (f) k = "\u221e";else {
      g = Kg(h);
      Lg(g, e, b.minFrac, b.maxFrac);
      k = g.d;
      h = g.i;
      e = g.e;
      f = [];

      for (g = k.reduce(function (a, b) {
        return a && !b;
      }, !0); 0 > h;) k.unshift(0), h++;

      0 < h ? f = k.splice(h, k.length) : (f = k, k = [0]);
      h = [];

      for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;) h.unshift(k.splice(-b.gSize, k.length).join(""));

      k.length && h.unshift(k.join(""));
      k = h.join(d);
      f.length && (k += c + f.join(""));
      e && (k += "e+" + e);
    }
    return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf;
  }

  function Kb(a, b, d, c) {
    var e = "";
    if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, e = "-");

    for (a = "" + a; a.length < b;) a = zc + a;

    d && (a = a.substr(a.length - b));
    return e + a;
  }

  function Y(a, b, d, c, e) {
    d = d || 0;
    return function (f) {
      f = f["get" + a]();
      if (0 < d || f > -d) f += d;
      0 === f && -12 === d && (f = 12);
      return Kb(f, b, c, e);
    };
  }

  function mb(a, b, d) {
    return function (c, e) {
      var f = c["get" + a](),
          g = ub((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);
      return e[g][f];
    };
  }

  function Vd(a) {
    var b = new Date(a, 0, 1).getDay();
    return new Date(a, 0, (4 >= b ? 5 : 12) - b);
  }

  function Wd(a) {
    return function (b) {
      var d = Vd(b.getFullYear());
      b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
      b = 1 + Math.round(b / 6048E5);
      return Kb(b, a);
    };
  }

  function Ac(a, b) {
    return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
  }

  function Pd(a) {
    function b(a) {
      var b;

      if (b = a.match(d)) {
        a = new Date(0);
        var f = 0,
            g = 0,
            h = b[8] ? a.setUTCFullYear : a.setFullYear,
            k = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (f = Z(b[9] + b[10]), g = Z(b[9] + b[11]));
        h.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3]));
        f = Z(b[4] || 0) - f;
        g = Z(b[5] || 0) - g;
        h = Z(b[6] || 0);
        b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
        k.call(a, f, g, h, b);
      }

      return a;
    }

    var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, d, f) {
      var g = "",
          h = [],
          k,
          l;
      d = d || "mediumDate";
      d = a.DATETIME_FORMATS[d] || d;
      F(c) && (c = Mg.test(c) ? Z(c) : b(c));
      ba(c) && (c = new Date(c));
      if (!ga(c) || !isFinite(c.getTime())) return c;

      for (; d;) (l = Ng.exec(d)) ? (h = ab(h, l, 1), d = h.pop()) : (h.push(d), d = null);

      var m = c.getTimezoneOffset();
      f && (m = Pc(f, m), c = Yb(c, f, !0));
      q(h, function (b) {
        k = Og[b];
        g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
      });
      return g;
    };
  }

  function Fg() {
    return function (a, b) {
      w(b) && (b = 2);
      return cb(a, b);
    };
  }

  function Gg() {
    return function (a, b, d) {
      b = Infinity === Math.abs(Number(b)) ? Number(b) : Z(b);
      if (da(b)) return a;
      ba(a) && (a = a.toString());
      if (!qa(a)) return a;
      d = !d || isNaN(d) ? 0 : Z(d);
      d = 0 > d ? Math.max(0, a.length + d) : d;
      return 0 <= b ? Bc(a, d, d + b) : 0 === d ? Bc(a, b, a.length) : Bc(a, Math.max(0, d + b), d);
    };
  }

  function Bc(a, b, d) {
    return F(a) ? a.slice(b, d) : va.call(a, b, d);
  }

  function Rd(a) {
    function b(b) {
      return b.map(function (b) {
        var c = 1,
            d = Ya;
        if (D(b)) d = b;else if (F(b)) {
          if ("+" === b.charAt(0) || "-" === b.charAt(0)) c = "-" === b.charAt(0) ? -1 : 1, b = b.substring(1);
          if ("" !== b && (d = a(b), d.constant)) var e = d(),
              d = function (a) {
            return a[e];
          };
        }
        return {
          get: d,
          descending: c
        };
      });
    }

    function d(a) {
      switch (typeof a) {
        case "number":
        case "boolean":
        case "string":
          return !0;

        default:
          return !1;
      }
    }

    function c(a, b) {
      var c = 0,
          d = a.type,
          k = b.type;

      if (d === k) {
        var k = a.value,
            l = b.value;
        "string" === d ? (k = k.toLowerCase(), l = l.toLowerCase()) : "object" === d && (C(k) && (k = a.index), C(l) && (l = b.index));
        k !== l && (c = k < l ? -1 : 1);
      } else c = d < k ? -1 : 1;

      return c;
    }

    return function (a, f, g, h) {
      if (null == a) return a;
      if (!qa(a)) throw L("orderBy")("notarray", a);
      H(f) || (f = [f]);
      0 === f.length && (f = ["+"]);
      var k = b(f),
          l = g ? -1 : 1,
          m = D(h) ? h : c;
      a = Array.prototype.map.call(a, function (a, b) {
        return {
          value: a,
          tieBreaker: {
            value: b,
            type: "number",
            index: b
          },
          predicateValues: k.map(function (c) {
            var e = c.get(a);
            c = typeof e;
            if (null === e) c = "string", e = "null";else if ("object" === c) a: {
              if (D(e.valueOf) && (e = e.valueOf(), d(e))) break a;
              Wb(e) && (e = e.toString(), d(e));
            }
            return {
              value: e,
              type: c,
              index: b
            };
          })
        };
      });
      a.sort(function (a, b) {
        for (var c = 0, d = k.length; c < d; c++) {
          var e = m(a.predicateValues[c], b.predicateValues[c]);
          if (e) return e * k[c].descending * l;
        }

        return m(a.tieBreaker, b.tieBreaker) * l;
      });
      return a = a.map(function (a) {
        return a.value;
      });
    };
  }

  function Qa(a) {
    D(a) && (a = {
      link: a
    });
    a.restrict = a.restrict || "AC";
    return la(a);
  }

  function Lb(a, b, d, c, e) {
    this.$$controls = [];
    this.$error = {};
    this.$$success = {};
    this.$pending = void 0;
    this.$name = e(b.name || b.ngForm || "")(d);
    this.$dirty = !1;
    this.$valid = this.$pristine = !0;
    this.$submitted = this.$invalid = !1;
    this.$$parentForm = Mb;
    this.$$element = a;
    this.$$animate = c;
    Xd(this);
  }

  function Xd(a) {
    a.$$classCache = {};
    a.$$classCache[Yd] = !(a.$$classCache[nb] = a.$$element.hasClass(nb));
  }

  function Zd(a) {
    function b(a, b, c) {
      c && !a.$$classCache[b] ? (a.$$animate.addClass(a.$$element, b), a.$$classCache[b] = !0) : !c && a.$$classCache[b] && (a.$$animate.removeClass(a.$$element, b), a.$$classCache[b] = !1);
    }

    function d(a, c, d) {
      c = c ? "-" + Tc(c, "-") : "";
      b(a, nb + c, !0 === d);
      b(a, Yd + c, !1 === d);
    }

    var c = a.set,
        e = a.unset;

    a.clazz.prototype.$setValidity = function (a, g, h) {
      w(g) ? (this.$pending || (this.$pending = {}), c(this.$pending, a, h)) : (this.$pending && e(this.$pending, a, h), $d(this.$pending) && (this.$pending = void 0));
      Ha(g) ? g ? (e(this.$error, a, h), c(this.$$success, a, h)) : (c(this.$error, a, h), e(this.$$success, a, h)) : (e(this.$error, a, h), e(this.$$success, a, h));
      this.$pending ? (b(this, "ng-pending", !0), this.$valid = this.$invalid = void 0, d(this, "", null)) : (b(this, "ng-pending", !1), this.$valid = $d(this.$error), this.$invalid = !this.$valid, d(this, "", this.$valid));
      g = this.$pending && this.$pending[a] ? void 0 : this.$error[a] ? !1 : this.$$success[a] ? !0 : null;
      d(this, a, g);
      this.$$parentForm.$setValidity(a, g, this);
    };
  }

  function $d(a) {
    if (a) for (var b in a) if (a.hasOwnProperty(b)) return !1;
    return !0;
  }

  function Cc(a) {
    a.$formatters.push(function (b) {
      return a.$isEmpty(b) ? b : b.toString();
    });
  }

  function Ra(a, b, d, c, e, f) {
    var g = Q(b[0].type);

    if (!e.android) {
      var h = !1;
      b.on("compositionstart", function () {
        h = !0;
      });
      b.on("compositionend", function () {
        h = !1;
        l();
      });
    }

    var k,
        l = function (a) {
      k && (f.defer.cancel(k), k = null);

      if (!h) {
        var e = b.val();
        a = a && a.type;
        "password" === g || d.ngTrim && "false" === d.ngTrim || (e = T(e));
        (c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a);
      }
    };

    if (e.hasEvent("input")) b.on("input", l);else {
      var m = function (a, b, c) {
        k || (k = f.defer(function () {
          k = null;
          b && b.value === c || l(a);
        }));
      };

      b.on("keydown", function (a) {
        var b = a.keyCode;
        91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
      });
      if (e.hasEvent("paste")) b.on("paste cut", m);
    }
    b.on("change", l);
    if (ae[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
      if (!k) {
        var b = this.validity,
            c = b.badInput,
            d = b.typeMismatch;
        k = f.defer(function () {
          k = null;
          b.badInput === c && b.typeMismatch === d || l(a);
        });
      }
    });

    c.$render = function () {
      var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
      b.val() !== a && b.val(a);
    };
  }

  function Nb(a, b) {
    return function (d, c) {
      var e, f;
      if (ga(d)) return d;

      if (F(d)) {
        '"' === d.charAt(0) && '"' === d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
        if (Pg.test(d)) return new Date(d);
        a.lastIndex = 0;
        if (e = a.exec(d)) return e.shift(), f = c ? {
          yyyy: c.getFullYear(),
          MM: c.getMonth() + 1,
          dd: c.getDate(),
          HH: c.getHours(),
          mm: c.getMinutes(),
          ss: c.getSeconds(),
          sss: c.getMilliseconds() / 1E3
        } : {
          yyyy: 1970,
          MM: 1,
          dd: 1,
          HH: 0,
          mm: 0,
          ss: 0,
          sss: 0
        }, q(e, function (a, c) {
          c < b.length && (f[b[c]] = +a);
        }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0);
      }

      return NaN;
    };
  }

  function ob(a, b, d, c) {
    return function (e, f, g, h, k, l, m) {
      function n(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime());
      }

      function p(a) {
        return u(a) && !ga(a) ? d(a) || void 0 : a;
      }

      Dc(e, f, g, h);
      Ra(e, f, g, h, k, l);
      var r = h && h.$options.getOption("timezone"),
          q;
      h.$$parserName = a;
      h.$parsers.push(function (a) {
        if (h.$isEmpty(a)) return null;
        if (b.test(a)) return a = d(a, q), r && (a = Yb(a, r)), a;
      });
      h.$formatters.push(function (a) {
        if (a && !ga(a)) throw pb("datefmt", a);
        if (n(a)) return (q = a) && r && (q = Yb(q, r, !0)), m("date")(a, c, r);
        q = null;
        return "";
      });

      if (u(g.min) || g.ngMin) {
        var v;

        h.$validators.min = function (a) {
          return !n(a) || w(v) || d(a) >= v;
        };

        g.$observe("min", function (a) {
          v = p(a);
          h.$validate();
        });
      }

      if (u(g.max) || g.ngMax) {
        var t;

        h.$validators.max = function (a) {
          return !n(a) || w(t) || d(a) <= t;
        };

        g.$observe("max", function (a) {
          t = p(a);
          h.$validate();
        });
      }
    };
  }

  function Dc(a, b, d, c) {
    (c.$$hasNativeValidators = C(b[0].validity)) && c.$parsers.push(function (a) {
      var c = b.prop("validity") || {};
      return c.badInput || c.typeMismatch ? void 0 : a;
    });
  }

  function be(a) {
    a.$$parserName = "number";
    a.$parsers.push(function (b) {
      if (a.$isEmpty(b)) return null;
      if (Qg.test(b)) return parseFloat(b);
    });
    a.$formatters.push(function (b) {
      if (!a.$isEmpty(b)) {
        if (!ba(b)) throw pb("numfmt", b);
        b = b.toString();
      }

      return b;
    });
  }

  function Sa(a) {
    u(a) && !ba(a) && (a = parseFloat(a));
    return da(a) ? void 0 : a;
  }

  function Ec(a) {
    var b = a.toString(),
        d = b.indexOf(".");
    return -1 === d ? -1 < a && 1 > a && (a = /e-(\d+)$/.exec(b)) ? Number(a[1]) : 0 : b.length - d - 1;
  }

  function ce(a, b, d) {
    a = Number(a);
    var c = (a | 0) !== a,
        e = (b | 0) !== b,
        f = (d | 0) !== d;

    if (c || e || f) {
      var g = c ? Ec(a) : 0,
          h = e ? Ec(b) : 0,
          k = f ? Ec(d) : 0,
          g = Math.max(g, h, k),
          g = Math.pow(10, g);
      a *= g;
      b *= g;
      d *= g;
      c && (a = Math.round(a));
      e && (b = Math.round(b));
      f && (d = Math.round(d));
    }

    return 0 === (a - b) % d;
  }

  function de(a, b, d, c, e) {
    if (u(c)) {
      a = a(c);
      if (!a.constant) throw pb("constexpr", d, c);
      return a(b);
    }

    return e;
  }

  function Fc(a, b) {
    function d(a, b) {
      if (!a || !a.length) return [];
      if (!b || !b.length) return a;
      var c = [],
          d = 0;

      a: for (; d < a.length; d++) {
        for (var e = a[d], m = 0; m < b.length; m++) if (e === b[m]) continue a;

        c.push(e);
      }

      return c;
    }

    function c(a) {
      var b = a;
      H(a) ? b = a.map(c).join(" ") : C(a) && (b = Object.keys(a).filter(function (b) {
        return a[b];
      }).join(" "));
      return b;
    }

    a = "ngClass" + a;
    var e;
    return ["$parse", function (f) {
      return {
        restrict: "AC",
        link: function (g, h, k) {
          function l(a, b) {
            var c = [];
            q(a, function (a) {
              if (0 < b || n[a]) n[a] = (n[a] || 0) + b, n[a] === +(0 < b) && c.push(a);
            });
            return c.join(" ");
          }

          function m(a) {
            if (a === b) {
              var c = r,
                  c = l(c && c.split(" "), 1);
              k.$addClass(c);
            } else c = r, c = l(c && c.split(" "), -1), k.$removeClass(c);

            p = a;
          }

          var n = h.data("$classCounts"),
              p = !0,
              r;
          n || (n = V(), h.data("$classCounts", n));
          "ngClass" !== a && (e || (e = f("$index", function (a) {
            return a & 1;
          })), g.$watch(e, m));
          g.$watch(f(k[a], c), function (a) {
            F(a) || (a = c(a));

            if (p === b) {
              var e = a,
                  f = r && r.split(" "),
                  g = e && e.split(" "),
                  e = d(f, g),
                  f = d(g, f),
                  e = l(e, -1),
                  f = l(f, 1);
              k.$addClass(f);
              k.$removeClass(e);
            }

            r = a;
          });
        }
      };
    }];
  }

  function Ob(a, b, d, c, e, f, g, h, k) {
    this.$modelValue = this.$viewValue = Number.NaN;
    this.$$rawModelValue = void 0;
    this.$validators = {};
    this.$asyncValidators = {};
    this.$parsers = [];
    this.$formatters = [];
    this.$viewChangeListeners = [];
    this.$untouched = !0;
    this.$touched = !1;
    this.$pristine = !0;
    this.$dirty = !1;
    this.$valid = !0;
    this.$invalid = !1;
    this.$error = {};
    this.$$success = {};
    this.$pending = void 0;
    this.$name = k(d.name || "", !1)(a);
    this.$$parentForm = Mb;
    this.$options = Pb;
    this.$$parsedNgModel = e(d.ngModel);
    this.$$parsedNgModelAssign = this.$$parsedNgModel.assign;
    this.$$ngModelGet = this.$$parsedNgModel;
    this.$$ngModelSet = this.$$parsedNgModelAssign;
    this.$$pendingDebounce = null;
    this.$$parserValid = void 0;
    this.$$currentValidationRunId = 0;
    Object.defineProperty(this, "$$scope", {
      value: a
    });
    this.$$attr = d;
    this.$$element = c;
    this.$$animate = f;
    this.$$timeout = g;
    this.$$parse = e;
    this.$$q = h;
    this.$$exceptionHandler = b;
    Xd(this);
    Rg(this);
  }

  function Rg(a) {
    a.$$scope.$watch(function (b) {
      b = a.$$ngModelGet(b);

      if (b !== a.$modelValue && (a.$modelValue === a.$modelValue || b === b)) {
        a.$modelValue = a.$$rawModelValue = b;
        a.$$parserValid = void 0;

        for (var d = a.$formatters, c = d.length, e = b; c--;) e = d[c](e);

        a.$viewValue !== e && (a.$$updateEmptyClasses(e), a.$viewValue = a.$$lastCommittedViewValue = e, a.$render(), a.$$runValidators(a.$modelValue, a.$viewValue, z));
      }

      return b;
    });
  }

  function Gc(a) {
    this.$$options = a;
  }

  function ee(a, b) {
    q(b, function (b, c) {
      u(a[c]) || (a[c] = b);
    });
  }

  function Ta(a, b) {
    a.prop("selected", b);
    a.attr("selected", b);
  }

  var Sg = /^\/(.+)\/([a-z]*)$/,
      ua = Object.prototype.hasOwnProperty,
      Ic = {
    objectMaxDepth: 5
  },
      Q = function (a) {
    return F(a) ? a.toLowerCase() : a;
  },
      ub = function (a) {
    return F(a) ? a.toUpperCase() : a;
  },
      za,
      B,
      na,
      va = [].slice,
      sg = [].splice,
      Tg = [].push,
      ma = Object.prototype.toString,
      Mc = Object.getPrototypeOf,
      Fa = L("ng"),
      ea = x.angular || (x.angular = {}),
      ac,
      qb = 0;

  za = x.document.documentMode;

  var da = Number.isNaN || function (a) {
    return a !== a;
  };

  z.$inject = [];
  Ya.$inject = [];

  var H = Array.isArray,
      qe = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
      T = function (a) {
    return F(a) ? a.trim() : a;
  },
      Kd = function (a) {
    return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  },
      Ga = function () {
    if (!u(Ga.rules)) {
      var a = x.document.querySelector("[ng-csp]") || x.document.querySelector("[data-ng-csp]");

      if (a) {
        var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
        Ga.rules = {
          noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
          noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
        };
      } else {
        a = Ga;

        try {
          new Function(""), b = !1;
        } catch (d) {
          b = !0;
        }

        a.rules = {
          noUnsafeEval: b,
          noInlineStyle: !1
        };
      }
    }

    return Ga.rules;
  },
      rb = function () {
    if (u(rb.name_)) return rb.name_;
    var a,
        b,
        d = Ja.length,
        c,
        e;

    for (b = 0; b < d; ++b) if (c = Ja[b], a = x.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
      e = a.getAttribute(c + "jq");
      break;
    }

    return rb.name_ = e;
  },
      se = /:/g,
      Ja = ["ng-", "data-ng-", "ng:", "x-ng-"],
      ve = function (a) {
    var b = a.currentScript;
    if (!b) return !0;
    if (!(b instanceof x.HTMLScriptElement || b instanceof x.SVGScriptElement)) return !1;
    b = b.attributes;
    return [b.getNamedItem("src"), b.getNamedItem("href"), b.getNamedItem("xlink:href")].every(function (b) {
      if (!b) return !0;
      if (!b.value) return !1;
      var c = a.createElement("a");
      c.href = b.value;
      if (a.location.origin === c.origin) return !0;

      switch (c.protocol) {
        case "http:":
        case "https:":
        case "ftp:":
        case "blob:":
        case "file:":
        case "data:":
          return !0;

        default:
          return !1;
      }
    });
  }(x.document),
      ye = /[A-Z]/g,
      Uc = !1,
      Ia = 3,
      De = {
    full: "1.6.4",
    major: 1,
    minor: 6,
    dot: 4,
    codeName: "phenomenal-footnote"
  };

  W.expando = "ng339";
  var hb = W.cache = {},
      eg = 1;

  W._data = function (a) {
    return this.cache[a[this.expando]] || {};
  };

  var ag = /-([a-z])/g,
      Ug = /^-ms-/,
      zb = {
    mouseleave: "mouseout",
    mouseenter: "mouseover"
  },
      dc = L("jqLite"),
      dg = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      cc = /<|&#?\w+;/,
      bg = /<([\w:-]+)/,
      cg = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ha = {
    option: [1, '<select multiple="multiple">', "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  ha.optgroup = ha.option;
  ha.tbody = ha.tfoot = ha.colgroup = ha.caption = ha.thead;
  ha.th = ha.td;

  var jg = x.Node.prototype.contains || function (a) {
    return !!(this.compareDocumentPosition(a) & 16);
  },
      Na = W.prototype = {
    ready: ed,
    toString: function () {
      var a = [];
      q(this, function (b) {
        a.push("" + b);
      });
      return "[" + a.join(", ") + "]";
    },
    eq: function (a) {
      return 0 <= a ? B(this[a]) : B(this[this.length + a]);
    },
    length: 0,
    push: Tg,
    sort: [].sort,
    splice: [].splice
  },
      Fb = {};

  q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
    Fb[Q(a)] = a;
  });
  var jd = {};
  q("input select option textarea button form details".split(" "), function (a) {
    jd[a] = !0;
  });
  var rd = {
    ngMinlength: "minlength",
    ngMaxlength: "maxlength",
    ngMin: "min",
    ngMax: "max",
    ngPattern: "pattern",
    ngStep: "step"
  };
  q({
    data: hc,
    removeData: gc,
    hasData: function (a) {
      for (var b in hb[a.ng339]) return !0;

      return !1;
    },
    cleanData: function (a) {
      for (var b = 0, d = a.length; b < d; b++) gc(a[b]);
    }
  }, function (a, b) {
    W[b] = a;
  });
  q({
    data: hc,
    inheritedData: Db,
    scope: function (a) {
      return B.data(a, "$scope") || Db(a.parentNode || a, ["$isolateScope", "$scope"]);
    },
    isolateScope: function (a) {
      return B.data(a, "$isolateScope") || B.data(a, "$isolateScopeNoTemplate");
    },
    controller: gd,
    injector: function (a) {
      return Db(a, "$injector");
    },
    removeAttr: function (a, b) {
      a.removeAttribute(b);
    },
    hasClass: Ab,
    css: function (a, b, d) {
      b = wb(b.replace(Ug, "ms-"));
      if (u(d)) a.style[b] = d;else return a.style[b];
    },
    attr: function (a, b, d) {
      var c = a.nodeType;

      if (c !== Ia && 2 !== c && 8 !== c && a.getAttribute) {
        var c = Q(b),
            e = Fb[c];
        if (u(d)) null === d || !1 === d && e ? a.removeAttribute(b) : a.setAttribute(b, e ? c : d);else return a = a.getAttribute(b), e && null !== a && (a = c), null === a ? void 0 : a;
      }
    },
    prop: function (a, b, d) {
      if (u(d)) a[b] = d;else return a[b];
    },
    text: function () {
      function a(a, d) {
        if (w(d)) {
          var c = a.nodeType;
          return 1 === c || c === Ia ? a.textContent : "";
        }

        a.textContent = d;
      }

      a.$dv = "";
      return a;
    }(),
    val: function (a, b) {
      if (w(b)) {
        if (a.multiple && "select" === wa(a)) {
          var d = [];
          q(a.options, function (a) {
            a.selected && d.push(a.value || a.text);
          });
          return d;
        }

        return a.value;
      }

      a.value = b;
    },
    html: function (a, b) {
      if (w(b)) return a.innerHTML;
      xb(a, !0);
      a.innerHTML = b;
    },
    empty: hd
  }, function (a, b) {
    W.prototype[b] = function (b, c) {
      var e,
          f,
          g = this.length;

      if (a !== hd && w(2 === a.length && a !== Ab && a !== gd ? b : c)) {
        if (C(b)) {
          for (e = 0; e < g; e++) if (a === hc) a(this[e], b);else for (f in b) a(this[e], f, b[f]);

          return this;
        }

        e = a.$dv;
        g = w(e) ? Math.min(g, 1) : g;

        for (f = 0; f < g; f++) {
          var h = a(this[f], b, c);
          e = e ? e + h : h;
        }

        return e;
      }

      for (e = 0; e < g; e++) a(this[e], b, c);

      return this;
    };
  });
  q({
    removeData: gc,
    on: function (a, b, d, c) {
      if (u(c)) throw dc("onargs");

      if (bc(a)) {
        c = yb(a, !0);
        var e = c.events,
            f = c.handle;
        f || (f = c.handle = gg(a, e));
        c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];

        for (var g = c.length, h = function (b, c, g) {
          var h = e[b];
          h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f));
          h.push(d);
        }; g--;) b = c[g], zb[b] ? (h(zb[b], ig), h(b, void 0, !0)) : h(b);
      }
    },
    off: fd,
    one: function (a, b, d) {
      a = B(a);
      a.on(b, function e() {
        a.off(b, d);
        a.off(b, e);
      });
      a.on(b, d);
    },
    replaceWith: function (a, b) {
      var d,
          c = a.parentNode;
      xb(a);
      q(new W(b), function (b) {
        d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
        d = b;
      });
    },
    children: function (a) {
      var b = [];
      q(a.childNodes, function (a) {
        1 === a.nodeType && b.push(a);
      });
      return b;
    },
    contents: function (a) {
      return a.contentDocument || a.childNodes || [];
    },
    append: function (a, b) {
      var d = a.nodeType;

      if (1 === d || 11 === d) {
        b = new W(b);

        for (var d = 0, c = b.length; d < c; d++) a.appendChild(b[d]);
      }
    },
    prepend: function (a, b) {
      if (1 === a.nodeType) {
        var d = a.firstChild;
        q(new W(b), function (b) {
          a.insertBefore(b, d);
        });
      }
    },
    wrap: function (a, b) {
      var d = B(b).eq(0).clone()[0],
          c = a.parentNode;
      c && c.replaceChild(d, a);
      d.appendChild(a);
    },
    remove: Eb,
    detach: function (a) {
      Eb(a, !0);
    },
    after: function (a, b) {
      var d = a,
          c = a.parentNode;

      if (c) {
        b = new W(b);

        for (var e = 0, f = b.length; e < f; e++) {
          var g = b[e];
          c.insertBefore(g, d.nextSibling);
          d = g;
        }
      }
    },
    addClass: Cb,
    removeClass: Bb,
    toggleClass: function (a, b, d) {
      b && q(b.split(" "), function (b) {
        var e = d;
        w(e) && (e = !Ab(a, b));
        (e ? Cb : Bb)(a, b);
      });
    },
    parent: function (a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    },
    next: function (a) {
      return a.nextElementSibling;
    },
    find: function (a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
    },
    clone: fc,
    triggerHandler: function (a, b, d) {
      var c,
          e,
          f = b.type || b,
          g = yb(a);
      if (g = (g = g && g.events) && g[f]) c = {
        preventDefault: function () {
          this.defaultPrevented = !0;
        },
        isDefaultPrevented: function () {
          return !0 === this.defaultPrevented;
        },
        stopImmediatePropagation: function () {
          this.immediatePropagationStopped = !0;
        },
        isImmediatePropagationStopped: function () {
          return !0 === this.immediatePropagationStopped;
        },
        stopPropagation: z,
        type: f,
        target: a
      }, b.type && (c = S(c, b)), b = pa(g), e = d ? [c].concat(d) : [c], q(b, function (b) {
        c.isImmediatePropagationStopped() || b.apply(a, e);
      });
    }
  }, function (a, b) {
    W.prototype[b] = function (b, c, e) {
      for (var f, g = 0, h = this.length; g < h; g++) w(f) ? (f = a(this[g], b, c, e), u(f) && (f = B(f))) : ec(f, a(this[g], b, c, e));

      return u(f) ? f : this;
    };
  });
  W.prototype.bind = W.prototype.on;
  W.prototype.unbind = W.prototype.off;
  var Vg = Object.create(null);
  kd.prototype = {
    _idx: function (a) {
      if (a === this._lastKey) return this._lastIndex;
      this._lastKey = a;
      return this._lastIndex = this._keys.indexOf(a);
    },
    _transformKey: function (a) {
      return da(a) ? Vg : a;
    },
    get: function (a) {
      a = this._transformKey(a);
      a = this._idx(a);
      if (-1 !== a) return this._values[a];
    },
    set: function (a, b) {
      a = this._transformKey(a);

      var d = this._idx(a);

      -1 === d && (d = this._lastIndex = this._keys.length);
      this._keys[d] = a;
      this._values[d] = b;
    },
    delete: function (a) {
      a = this._transformKey(a);
      a = this._idx(a);
      if (-1 === a) return !1;

      this._keys.splice(a, 1);

      this._values.splice(a, 1);

      this._lastKey = NaN;
      this._lastIndex = -1;
      return !0;
    }
  };
  var Gb = kd,
      Zf = [function () {
    this.$get = [function () {
      return Gb;
    }];
  }],
      lg = /^([^(]+?)=>/,
      mg = /^[^(]*\(\s*([^)]*)\)/m,
      Wg = /,/,
      Xg = /^\s*(_?)(\S+?)\1\s*$/,
      kg = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
      ya = L("$injector");

  eb.$$annotate = function (a, b, d) {
    var c;

    if ("function" === typeof a) {
      if (!(c = a.$inject)) {
        c = [];

        if (a.length) {
          if (b) throw F(d) && d || (d = a.name || ng(a)), ya("strictdi", d);
          b = ld(a);
          q(b[1].split(Wg), function (a) {
            a.replace(Xg, function (a, b, d) {
              c.push(d);
            });
          });
        }

        a.$inject = c;
      }
    } else H(a) ? (b = a.length - 1, sb(a[b], "fn"), c = a.slice(0, b)) : sb(a, "fn", !0);

    return c;
  };

  var fe = L("$animate"),
      qf = function () {
    this.$get = z;
  },
      rf = function () {
    var a = new Gb(),
        b = [];
    this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
      function e(a, b, c) {
        var d = !1;
        b && (b = F(b) ? b.split(" ") : H(b) ? b : [], q(b, function (b) {
          b && (d = !0, a[b] = c);
        }));
        return d;
      }

      function f() {
        q(b, function (b) {
          var c = a.get(b);

          if (c) {
            var d = og(b.attr("class")),
                e = "",
                f = "";
            q(c, function (a, b) {
              a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
            });
            q(b, function (a) {
              e && Cb(a, e);
              f && Bb(a, f);
            });
            a.delete(b);
          }
        });
        b.length = 0;
      }

      return {
        enabled: z,
        on: z,
        off: z,
        pin: z,
        push: function (g, h, k, l) {
          l && l();
          k = k || {};
          k.from && g.css(k.from);
          k.to && g.css(k.to);
          if (k.addClass || k.removeClass) if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l) a.set(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);
          g = new d();
          g.complete();
          return g;
        }
      };
    }];
  },
      of = ["$provide", function (a) {
    var b = this,
        d = null;
    this.$$registeredAnimations = Object.create(null);

    this.register = function (c, d) {
      if (c && "." !== c.charAt(0)) throw fe("notcsel", c);
      var f = c + "-animation";
      b.$$registeredAnimations[c.substr(1)] = f;
      a.factory(f, d);
    };

    this.classNameFilter = function (a) {
      if (1 === arguments.length && (d = a instanceof RegExp ? a : null) && /[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString())) throw d = null, fe("nongcls", "ng-animate");
      return d;
    };

    this.$get = ["$$animateQueue", function (a) {
      function b(a, c, d) {
        if (d) {
          var e;

          a: {
            for (e = 0; e < d.length; e++) {
              var l = d[e];

              if (1 === l.nodeType) {
                e = l;
                break a;
              }
            }

            e = void 0;
          }

          !e || e.parentNode || e.previousElementSibling || (d = null);
        }

        d ? d.after(a) : c.prepend(a);
      }

      return {
        on: a.on,
        off: a.off,
        pin: a.pin,
        enabled: a.enabled,
        cancel: function (a) {
          a.end && a.end();
        },
        enter: function (d, g, h, k) {
          g = g && B(g);
          h = h && B(h);
          g = g || h.parent();
          b(d, g, h);
          return a.push(d, "enter", ia(k));
        },
        move: function (d, g, h, k) {
          g = g && B(g);
          h = h && B(h);
          g = g || h.parent();
          b(d, g, h);
          return a.push(d, "move", ia(k));
        },
        leave: function (b, d) {
          return a.push(b, "leave", ia(d), function () {
            b.remove();
          });
        },
        addClass: function (b, d, e) {
          e = ia(e);
          e.addClass = ib(e.addclass, d);
          return a.push(b, "addClass", e);
        },
        removeClass: function (b, d, e) {
          e = ia(e);
          e.removeClass = ib(e.removeClass, d);
          return a.push(b, "removeClass", e);
        },
        setClass: function (b, d, e, k) {
          k = ia(k);
          k.addClass = ib(k.addClass, d);
          k.removeClass = ib(k.removeClass, e);
          return a.push(b, "setClass", k);
        },
        animate: function (b, d, e, k, l) {
          l = ia(l);
          l.from = l.from ? S(l.from, d) : d;
          l.to = l.to ? S(l.to, e) : e;
          l.tempClasses = ib(l.tempClasses, k || "ng-inline-animate");
          return a.push(b, "animate", l);
        }
      };
    }];
  }],
      tf = function () {
    this.$get = ["$$rAF", function (a) {
      function b(b) {
        d.push(b);
        1 < d.length || a(function () {
          for (var a = 0; a < d.length; a++) d[a]();

          d = [];
        });
      }

      var d = [];
      return function () {
        var a = !1;
        b(function () {
          a = !0;
        });
        return function (d) {
          a ? d() : b(d);
        };
      };
    }];
  },
      sf = function () {
    this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function (a, b, d, c, e) {
      function f(a) {
        this.setHost(a);
        var b = d();
        this._doneCallbacks = [];

        this._tick = function (a) {
          c() ? e(a, 0, !1) : b(a);
        };

        this._state = 0;
      }

      f.chain = function (a, b) {
        function c() {
          if (d === a.length) b(!0);else a[d](function (a) {
            !1 === a ? b(!1) : (d++, c());
          });
        }

        var d = 0;
        c();
      };

      f.all = function (a, b) {
        function c(f) {
          e = e && f;
          ++d === a.length && b(e);
        }

        var d = 0,
            e = !0;
        q(a, function (a) {
          a.done(c);
        });
      };

      f.prototype = {
        setHost: function (a) {
          this.host = a || {};
        },
        done: function (a) {
          2 === this._state ? a() : this._doneCallbacks.push(a);
        },
        progress: z,
        getPromise: function () {
          if (!this.promise) {
            var b = this;
            this.promise = a(function (a, c) {
              b.done(function (b) {
                !1 === b ? c() : a();
              });
            });
          }

          return this.promise;
        },
        then: function (a, b) {
          return this.getPromise().then(a, b);
        },
        "catch": function (a) {
          return this.getPromise()["catch"](a);
        },
        "finally": function (a) {
          return this.getPromise()["finally"](a);
        },
        pause: function () {
          this.host.pause && this.host.pause();
        },
        resume: function () {
          this.host.resume && this.host.resume();
        },
        end: function () {
          this.host.end && this.host.end();

          this._resolve(!0);
        },
        cancel: function () {
          this.host.cancel && this.host.cancel();

          this._resolve(!1);
        },
        complete: function (a) {
          var b = this;
          0 === b._state && (b._state = 1, b._tick(function () {
            b._resolve(a);
          }));
        },
        _resolve: function (a) {
          2 !== this._state && (q(this._doneCallbacks, function (b) {
            b(a);
          }), this._doneCallbacks.length = 0, this._state = 2);
        }
      };
      return f;
    }];
  },
      pf = function () {
    this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
      return function (b, e) {
        function f() {
          a(function () {
            g.addClass && (b.addClass(g.addClass), g.addClass = null);
            g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);
            g.to && (b.css(g.to), g.to = null);
            h || k.complete();
            h = !0;
          });
          return k;
        }

        var g = e || {};
        g.$$prepared || (g = ra(g));
        g.cleanupStyles && (g.from = g.to = null);
        g.from && (b.css(g.from), g.from = null);
        var h,
            k = new d();
        return {
          start: f,
          end: f
        };
      };
    }];
  },
      fa = L("$compile"),
      lc = new function () {}();

  Wc.$inject = ["$provide", "$$sanitizeUriProvider"];

  Ib.prototype.isFirstChange = function () {
    return this.previousValue === lc;
  };

  var md = /^((?:x|data)[:\-_])/i,
      rg = /[:\-_]+(.)/g,
      td = L("$controller"),
      sd = /^(\S+)(\s+as\s+([\w$]+))?$/,
      Af = function () {
    this.$get = ["$document", function (a) {
      return function (b) {
        b ? !b.nodeType && b instanceof B && (b = b[0]) : b = a[0].body;
        return b.offsetWidth + 1;
      };
    }];
  },
      ud = "application/json",
      pc = {
    "Content-Type": ud + ";charset=utf-8"
  },
      ug = /^\[|^\{(?!\{)/,
      vg = {
    "[": /]$/,
    "{": /}$/
  },
      tg = /^\)]\}',?\n/,
      oc = L("$http"),
      Da = ea.$interpolateMinErr = L("$interpolate");

  Da.throwNoconcat = function (a) {
    throw Da("noconcat", a);
  };

  Da.interr = function (a, b) {
    return Da("interr", a, b.toString());
  };

  var If = function () {
    this.$get = function () {
      function a(a) {
        var b = function (a) {
          b.data = a;
          b.called = !0;
        };

        b.id = a;
        return b;
      }

      var b = ea.callbacks,
          d = {};
      return {
        createCallback: function (c) {
          c = "_" + (b.$$counter++).toString(36);
          var e = "angular.callbacks." + c,
              f = a(c);
          d[e] = b[c] = f;
          return e;
        },
        wasCalled: function (a) {
          return d[a].called;
        },
        getResponse: function (a) {
          return d[a].data;
        },
        removeCallback: function (a) {
          delete b[d[a].id];
          delete d[a];
        }
      };
    };
  },
      Yg = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
      xg = {
    http: 80,
    https: 443,
    ftp: 21
  },
      kb = L("$location"),
      yg = /^\s*[\\/]{2,}/,
      Zg = {
    $$absUrl: "",
    $$html5: !1,
    $$replace: !1,
    absUrl: Jb("$$absUrl"),
    url: function (a) {
      if (w(a)) return this.$$url;
      var b = Yg.exec(a);
      (b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
      (b[2] || b[1] || "" === a) && this.search(b[3] || "");
      this.hash(b[5] || "");
      return this;
    },
    protocol: Jb("$$protocol"),
    host: Jb("$$host"),
    port: Jb("$$port"),
    path: Cd("$$path", function (a) {
      a = null !== a ? a.toString() : "";
      return "/" === a.charAt(0) ? a : "/" + a;
    }),
    search: function (a, b) {
      switch (arguments.length) {
        case 0:
          return this.$$search;

        case 1:
          if (F(a) || ba(a)) a = a.toString(), this.$$search = Rc(a);else if (C(a)) a = ra(a, {}), q(a, function (b, c) {
            null == b && delete a[c];
          }), this.$$search = a;else throw kb("isrcharg");
          break;

        default:
          w(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;
      }

      this.$$compose();
      return this;
    },
    hash: Cd("$$hash", function (a) {
      return null !== a ? a.toString() : "";
    }),
    replace: function () {
      this.$$replace = !0;
      return this;
    }
  };

  q([Bd, tc, sc], function (a) {
    a.prototype = Object.create(Zg);

    a.prototype.state = function (b) {
      if (!arguments.length) return this.$$state;
      if (a !== sc || !this.$$html5) throw kb("nostate");
      this.$$state = w(b) ? null : b;
      this.$$urlUpdatedByLocation = !0;
      return this;
    };
  });
  var Ua = L("$parse"),
      Bg = {}.constructor.prototype.valueOf,
      Qb = V();
  q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
    Qb[a] = !0;
  });

  var $g = {
    n: "\n",
    f: "\f",
    r: "\r",
    t: "\t",
    v: "\v",
    "'": "'",
    '"': '"'
  },
      wc = function (a) {
    this.options = a;
  };

  wc.prototype = {
    constructor: wc,
    lex: function (a) {
      this.text = a;
      this.index = 0;

      for (this.tokens = []; this.index < this.text.length;) if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
        index: this.index,
        text: a
      }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
        var b = a + this.peek(),
            d = b + this.peek(2),
            c = Qb[b],
            e = Qb[d];
        Qb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({
          index: this.index,
          text: a,
          operator: !0
        }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
      }

      return this.tokens;
    },
    is: function (a, b) {
      return -1 !== b.indexOf(a);
    },
    peek: function (a) {
      a = a || 1;
      return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    },
    isNumber: function (a) {
      return "0" <= a && "9" >= a && "string" === typeof a;
    },
    isWhitespace: function (a) {
      return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a;
    },
    isIdentifierStart: function (a) {
      return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a);
    },
    isValidIdentifierStart: function (a) {
      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
    },
    isIdentifierContinue: function (a) {
      return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a);
    },
    isValidIdentifierContinue: function (a, b) {
      return this.isValidIdentifierStart(a, b) || this.isNumber(a);
    },
    codePointAt: function (a) {
      return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888;
    },
    peekMultichar: function () {
      var a = this.text.charAt(this.index),
          b = this.peek();
      if (!b) return a;
      var d = a.charCodeAt(0),
          c = b.charCodeAt(0);
      return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a;
    },
    isExpOperator: function (a) {
      return "-" === a || "+" === a || this.isNumber(a);
    },
    throwError: function (a, b, d) {
      d = d || this.index;
      b = u(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;
      throw Ua("lexerr", a, b, this.text);
    },
    readNumber: function () {
      for (var a = "", b = this.index; this.index < this.text.length;) {
        var d = Q(this.text.charAt(this.index));
        if ("." === d || this.isNumber(d)) a += d;else {
          var c = this.peek();
          if ("e" === d && this.isExpOperator(c)) a += d;else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" === a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" !== a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
        }
        this.index++;
      }

      this.tokens.push({
        index: b,
        text: a,
        constant: !0,
        value: Number(a)
      });
    },
    readIdent: function () {
      var a = this.index;

      for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
        var b = this.peekMultichar();
        if (!this.isIdentifierContinue(b)) break;
        this.index += b.length;
      }

      this.tokens.push({
        index: a,
        text: this.text.slice(a, this.index),
        identifier: !0
      });
    },
    readString: function (a) {
      var b = this.index;
      this.index++;

      for (var d = "", c = a, e = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index),
            c = c + f;
        if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += $g[f] || f, e = !1;else if ("\\" === f) e = !0;else {
          if (f === a) {
            this.index++;
            this.tokens.push({
              index: b,
              text: c,
              constant: !0,
              value: d
            });
            return;
          }

          d += f;
        }
        this.index++;
      }

      this.throwError("Unterminated quote", b);
    }
  };

  var s = function (a, b) {
    this.lexer = a;
    this.options = b;
  };

  s.Program = "Program";
  s.ExpressionStatement = "ExpressionStatement";
  s.AssignmentExpression = "AssignmentExpression";
  s.ConditionalExpression = "ConditionalExpression";
  s.LogicalExpression = "LogicalExpression";
  s.BinaryExpression = "BinaryExpression";
  s.UnaryExpression = "UnaryExpression";
  s.CallExpression = "CallExpression";
  s.MemberExpression = "MemberExpression";
  s.Identifier = "Identifier";
  s.Literal = "Literal";
  s.ArrayExpression = "ArrayExpression";
  s.Property = "Property";
  s.ObjectExpression = "ObjectExpression";
  s.ThisExpression = "ThisExpression";
  s.LocalsExpression = "LocalsExpression";
  s.NGValueParameter = "NGValueParameter";
  s.prototype = {
    ast: function (a) {
      this.text = a;
      this.tokens = this.lexer.lex(a);
      a = this.program();
      0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
      return a;
    },
    program: function () {
      for (var a = [];;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
        type: s.Program,
        body: a
      };
    },
    expressionStatement: function () {
      return {
        type: s.ExpressionStatement,
        expression: this.filterChain()
      };
    },
    filterChain: function () {
      for (var a = this.expression(); this.expect("|");) a = this.filter(a);

      return a;
    },
    expression: function () {
      return this.assignment();
    },
    assignment: function () {
      var a = this.ternary();

      if (this.expect("=")) {
        if (!Fd(a)) throw Ua("lval");
        a = {
          type: s.AssignmentExpression,
          left: a,
          right: this.assignment(),
          operator: "="
        };
      }

      return a;
    },
    ternary: function () {
      var a = this.logicalOR(),
          b,
          d;
      return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), {
        type: s.ConditionalExpression,
        test: a,
        alternate: b,
        consequent: d
      }) : a;
    },
    logicalOR: function () {
      for (var a = this.logicalAND(); this.expect("||");) a = {
        type: s.LogicalExpression,
        operator: "||",
        left: a,
        right: this.logicalAND()
      };

      return a;
    },
    logicalAND: function () {
      for (var a = this.equality(); this.expect("&&");) a = {
        type: s.LogicalExpression,
        operator: "&&",
        left: a,
        right: this.equality()
      };

      return a;
    },
    equality: function () {
      for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) a = {
        type: s.BinaryExpression,
        operator: b.text,
        left: a,
        right: this.relational()
      };

      return a;
    },
    relational: function () {
      for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) a = {
        type: s.BinaryExpression,
        operator: b.text,
        left: a,
        right: this.additive()
      };

      return a;
    },
    additive: function () {
      for (var a = this.multiplicative(), b; b = this.expect("+", "-");) a = {
        type: s.BinaryExpression,
        operator: b.text,
        left: a,
        right: this.multiplicative()
      };

      return a;
    },
    multiplicative: function () {
      for (var a = this.unary(), b; b = this.expect("*", "/", "%");) a = {
        type: s.BinaryExpression,
        operator: b.text,
        left: a,
        right: this.unary()
      };

      return a;
    },
    unary: function () {
      var a;
      return (a = this.expect("+", "-", "!")) ? {
        type: s.UnaryExpression,
        operator: a.text,
        prefix: !0,
        argument: this.unary()
      } : this.primary();
    },
    primary: function () {
      var a;
      this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = ra(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = {
        type: s.Literal,
        value: this.options.literals[this.consume().text]
      } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());

      for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = {
        type: s.CallExpression,
        callee: a,
        arguments: this.parseArguments()
      }, this.consume(")")) : "[" === b.text ? (a = {
        type: s.MemberExpression,
        object: a,
        property: this.expression(),
        computed: !0
      }, this.consume("]")) : "." === b.text ? a = {
        type: s.MemberExpression,
        object: a,
        property: this.identifier(),
        computed: !1
      } : this.throwError("IMPOSSIBLE");

      return a;
    },
    filter: function (a) {
      a = [a];

      for (var b = {
        type: s.CallExpression,
        callee: this.identifier(),
        arguments: a,
        filter: !0
      }; this.expect(":");) a.push(this.expression());

      return b;
    },
    parseArguments: function () {
      var a = [];

      if (")" !== this.peekToken().text) {
        do a.push(this.filterChain()); while (this.expect(","));
      }

      return a;
    },
    identifier: function () {
      var a = this.consume();
      a.identifier || this.throwError("is not a valid identifier", a);
      return {
        type: s.Identifier,
        name: a.text
      };
    },
    constant: function () {
      return {
        type: s.Literal,
        value: this.consume().value
      };
    },
    arrayDeclaration: function () {
      var a = [];

      if ("]" !== this.peekToken().text) {
        do {
          if (this.peek("]")) break;
          a.push(this.expression());
        } while (this.expect(","));
      }

      this.consume("]");
      return {
        type: s.ArrayExpression,
        elements: a
      };
    },
    object: function () {
      var a = [],
          b;

      if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}")) break;
          b = {
            type: s.Property,
            kind: "init"
          };
          this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek());
          a.push(b);
        } while (this.expect(","));
      }

      this.consume("}");
      return {
        type: s.ObjectExpression,
        properties: a
      };
    },
    throwError: function (a, b) {
      throw Ua("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
    },
    consume: function (a) {
      if (0 === this.tokens.length) throw Ua("ueoe", this.text);
      var b = this.expect(a);
      b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
      return b;
    },
    peekToken: function () {
      if (0 === this.tokens.length) throw Ua("ueoe", this.text);
      return this.tokens[0];
    },
    peek: function (a, b, d, c) {
      return this.peekAhead(0, a, b, d, c);
    },
    peekAhead: function (a, b, d, c, e) {
      if (this.tokens.length > a) {
        a = this.tokens[a];
        var f = a.text;
        if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a;
      }

      return !1;
    },
    expect: function (a, b, d, c) {
      return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
    },
    selfReferential: {
      "this": {
        type: s.ThisExpression
      },
      $locals: {
        type: s.LocalsExpression
      }
    }
  };
  Hd.prototype = {
    compile: function (a) {
      var b = this;
      this.state = {
        nextId: 0,
        filters: {},
        fn: {
          vars: [],
          body: [],
          own: {}
        },
        assign: {
          vars: [],
          body: [],
          own: {}
        },
        inputs: []
      };
      U(a, b.$filter);
      var d = "",
          c;
      this.stage = "assign";
      if (c = Gd(a)) this.state.computing = "assign", d = this.nextId(), this.recurse(c, d), this.return_(d), d = "fn.assign=" + this.generateFunction("assign", "s,v,l");
      c = Ed(a.body);
      b.stage = "inputs";
      q(c, function (a, c) {
        var d = "fn" + c;
        b.state[d] = {
          vars: [],
          body: [],
          own: {}
        };
        b.state.computing = d;
        var h = b.nextId();
        b.recurse(a, h);
        b.return_(h);
        b.state.inputs.push(d);
        a.watchId = c;
      });
      this.state.computing = "fn";
      this.stage = "main";
      this.recurse(a);
      a = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + d + this.watchFns() + "return fn;";
      a = new Function("$filter", "getStringValue", "ifDefined", "plus", a)(this.$filter, zg, Ag, Dd);
      this.state = this.stage = void 0;
      return a;
    },
    USE: "use",
    STRICT: "strict",
    watchFns: function () {
      var a = [],
          b = this.state.inputs,
          d = this;
      q(b, function (b) {
        a.push("var " + b + "=" + d.generateFunction(b, "s"));
      });
      b.length && a.push("fn.inputs=[" + b.join(",") + "];");
      return a.join("");
    },
    generateFunction: function (a, b) {
      return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
    },
    filterPrefix: function () {
      var a = [],
          b = this;
      q(this.state.filters, function (d, c) {
        a.push(d + "=$filter(" + b.escape(c) + ")");
      });
      return a.length ? "var " + a.join(",") + ";" : "";
    },
    varsPrefix: function (a) {
      return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
    },
    body: function (a) {
      return this.state[a].body.join("");
    },
    recurse: function (a, b, d, c, e, f) {
      var g,
          h,
          k = this,
          l,
          m,
          n;
      c = c || z;
      if (!f && u(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));else switch (a.type) {
        case s.Program:
          q(a.body, function (b, c) {
            k.recurse(b.expression, void 0, void 0, function (a) {
              h = a;
            });
            c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h);
          });
          break;

        case s.Literal:
          m = this.escape(a.value);
          this.assign(b, m);
          c(b || m);
          break;

        case s.UnaryExpression:
          this.recurse(a.argument, void 0, void 0, function (a) {
            h = a;
          });
          m = a.operator + "(" + this.ifDefined(h, 0) + ")";
          this.assign(b, m);
          c(m);
          break;

        case s.BinaryExpression:
          this.recurse(a.left, void 0, void 0, function (a) {
            g = a;
          });
          this.recurse(a.right, void 0, void 0, function (a) {
            h = a;
          });
          m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";
          this.assign(b, m);
          c(m);
          break;

        case s.LogicalExpression:
          b = b || this.nextId();
          k.recurse(a.left, b);
          k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
          c(b);
          break;

        case s.ConditionalExpression:
          b = b || this.nextId();
          k.recurse(a.test, b);
          k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
          c(b);
          break;

        case s.Identifier:
          b = b || this.nextId();
          d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);
          k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
            k.if_("inputs" === k.stage || "s", function () {
              e && 1 !== e && k.if_(k.isNull(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
              k.assign(b, k.nonComputedMember("s", a.name));
            });
          }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));
          c(b);
          break;

        case s.MemberExpression:
          g = d && (d.context = this.nextId()) || this.nextId();
          b = b || this.nextId();
          k.recurse(a.object, g, void 0, function () {
            k.if_(k.notNull(g), function () {
              a.computed ? (h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.computedMember(g, h), k.assign(b, m), d && (d.computed = !0, d.name = h)) : (e && 1 !== e && k.if_(k.isNull(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}")), m = k.nonComputedMember(g, a.property.name), k.assign(b, m), d && (d.computed = !1, d.name = a.property.name));
            }, function () {
              k.assign(b, "undefined");
            });
            c(b);
          }, !!e);
          break;

        case s.CallExpression:
          b = b || this.nextId();
          a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function (a) {
            var b = k.nextId();
            k.recurse(a, b);
            l.push(b);
          }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
            k.if_(k.notNull(h), function () {
              q(a.arguments, function (b) {
                k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function (a) {
                  l.push(a);
                });
              });
              m = g.name ? k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")" : h + "(" + l.join(",") + ")";
              k.assign(b, m);
            }, function () {
              k.assign(b, "undefined");
            });
            c(b);
          }));
          break;

        case s.AssignmentExpression:
          h = this.nextId();
          g = {};
          this.recurse(a.left, void 0, g, function () {
            k.if_(k.notNull(g.context), function () {
              k.recurse(a.right, h);
              m = k.member(g.context, g.name, g.computed) + a.operator + h;
              k.assign(b, m);
              c(b || m);
            });
          }, 1);
          break;

        case s.ArrayExpression:
          l = [];
          q(a.elements, function (b) {
            k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function (a) {
              l.push(a);
            });
          });
          m = "[" + l.join(",") + "]";
          this.assign(b, m);
          c(b || m);
          break;

        case s.ObjectExpression:
          l = [];
          n = !1;
          q(a.properties, function (a) {
            a.computed && (n = !0);
          });
          n ? (b = b || this.nextId(), this.assign(b, "{}"), q(a.properties, function (a) {
            a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type === s.Identifier ? a.key.name : "" + a.key.value;
            h = k.nextId();
            k.recurse(a.value, h);
            k.assign(k.member(b, g, a.computed), h);
          })) : (q(a.properties, function (b) {
            k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function (a) {
              l.push(k.escape(b.key.type === s.Identifier ? b.key.name : "" + b.key.value) + ":" + a);
            });
          }), m = "{" + l.join(",") + "}", this.assign(b, m));
          c(b || m);
          break;

        case s.ThisExpression:
          this.assign(b, "s");
          c(b || "s");
          break;

        case s.LocalsExpression:
          this.assign(b, "l");
          c(b || "l");
          break;

        case s.NGValueParameter:
          this.assign(b, "v"), c(b || "v");
      }
    },
    getHasOwnProperty: function (a, b) {
      var d = a + "." + b,
          c = this.current().own;
      c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));
      return c[d];
    },
    assign: function (a, b) {
      if (a) return this.current().body.push(a, "=", b, ";"), a;
    },
    filter: function (a) {
      this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));
      return this.state.filters[a];
    },
    ifDefined: function (a, b) {
      return "ifDefined(" + a + "," + this.escape(b) + ")";
    },
    plus: function (a, b) {
      return "plus(" + a + "," + b + ")";
    },
    return_: function (a) {
      this.current().body.push("return ", a, ";");
    },
    if_: function (a, b, d) {
      if (!0 === a) b();else {
        var c = this.current().body;
        c.push("if(", a, "){");
        b();
        c.push("}");
        d && (c.push("else{"), d(), c.push("}"));
      }
    },
    not: function (a) {
      return "!(" + a + ")";
    },
    isNull: function (a) {
      return a + "==null";
    },
    notNull: function (a) {
      return a + "!=null";
    },
    nonComputedMember: function (a, b) {
      var d = /[^$_a-zA-Z0-9]/g;
      return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]';
    },
    computedMember: function (a, b) {
      return a + "[" + b + "]";
    },
    member: function (a, b, d) {
      return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
    },
    getStringValue: function (a) {
      this.assign(a, "getStringValue(" + a + ")");
    },
    lazyRecurse: function (a, b, d, c, e, f) {
      var g = this;
      return function () {
        g.recurse(a, b, d, c, e, f);
      };
    },
    lazyAssign: function (a, b) {
      var d = this;
      return function () {
        d.assign(a, b);
      };
    },
    stringEscapeRegex: /[^ a-zA-Z0-9]/g,
    stringEscapeFn: function (a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    },
    escape: function (a) {
      if (F(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
      if (ba(a)) return a.toString();
      if (!0 === a) return "true";
      if (!1 === a) return "false";
      if (null === a) return "null";
      if ("undefined" === typeof a) return "undefined";
      throw Ua("esc");
    },
    nextId: function (a, b) {
      var d = "v" + this.state.nextId++;
      a || this.current().vars.push(d + (b ? "=" + b : ""));
      return d;
    },
    current: function () {
      return this.state[this.state.computing];
    }
  };
  Id.prototype = {
    compile: function (a) {
      var b = this;
      U(a, b.$filter);
      var d, c;
      if (d = Gd(a)) c = this.recurse(d);
      d = Ed(a.body);
      var e;
      d && (e = [], q(d, function (a, c) {
        var d = b.recurse(a);
        a.input = d;
        e.push(d);
        a.watchId = c;
      }));
      var f = [];
      q(a.body, function (a) {
        f.push(b.recurse(a.expression));
      });
      a = 0 === a.body.length ? z : 1 === a.body.length ? f[0] : function (a, b) {
        var c;
        q(f, function (d) {
          c = d(a, b);
        });
        return c;
      };
      c && (a.assign = function (a, b, d) {
        return c(a, d, b);
      });
      e && (a.inputs = e);
      return a;
    },
    recurse: function (a, b, d) {
      var c,
          e,
          f = this,
          g;
      if (a.input) return this.inputs(a.input, a.watchId);

      switch (a.type) {
        case s.Literal:
          return this.value(a.value, b);

        case s.UnaryExpression:
          return e = this.recurse(a.argument), this["unary" + a.operator](e, b);

        case s.BinaryExpression:
          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);

        case s.LogicalExpression:
          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);

        case s.ConditionalExpression:
          return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);

        case s.Identifier:
          return f.identifier(a.name, b, d);

        case s.MemberExpression:
          return c = this.recurse(a.object, !1, !!d), a.computed || (e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d) : this.nonComputedMember(c, e, b, d);

        case s.CallExpression:
          return g = [], q(a.arguments, function (a) {
            g.push(f.recurse(a));
          }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
            for (var n = [], p = 0; p < g.length; ++p) n.push(g[p](a, c, d, f));

            a = e.apply(void 0, n, f);
            return b ? {
              context: void 0,
              name: void 0,
              value: a
            } : a;
          } : function (a, c, d, f) {
            var n = e(a, c, d, f),
                p;

            if (null != n.value) {
              p = [];

              for (var r = 0; r < g.length; ++r) p.push(g[r](a, c, d, f));

              p = n.value.apply(n.context, p);
            }

            return b ? {
              value: p
            } : p;
          };

        case s.AssignmentExpression:
          return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, f, g) {
            var n = c(a, d, f, g);
            a = e(a, d, f, g);
            n.context[n.name] = a;
            return b ? {
              value: a
            } : a;
          };

        case s.ArrayExpression:
          return g = [], q(a.elements, function (a) {
            g.push(f.recurse(a));
          }), function (a, c, d, e) {
            for (var f = [], p = 0; p < g.length; ++p) f.push(g[p](a, c, d, e));

            return b ? {
              value: f
            } : f;
          };

        case s.ObjectExpression:
          return g = [], q(a.properties, function (a) {
            a.computed ? g.push({
              key: f.recurse(a.key),
              computed: !0,
              value: f.recurse(a.value)
            }) : g.push({
              key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value,
              computed: !1,
              value: f.recurse(a.value)
            });
          }), function (a, c, d, e) {
            for (var f = {}, p = 0; p < g.length; ++p) g[p].computed ? f[g[p].key(a, c, d, e)] = g[p].value(a, c, d, e) : f[g[p].key] = g[p].value(a, c, d, e);

            return b ? {
              value: f
            } : f;
          };

        case s.ThisExpression:
          return function (a) {
            return b ? {
              value: a
            } : a;
          };

        case s.LocalsExpression:
          return function (a, c) {
            return b ? {
              value: c
            } : c;
          };

        case s.NGValueParameter:
          return function (a, c, d) {
            return b ? {
              value: d
            } : d;
          };
      }
    },
    "unary+": function (a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);
        d = u(d) ? +d : 0;
        return b ? {
          value: d
        } : d;
      };
    },
    "unary-": function (a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);
        d = u(d) ? -d : -0;
        return b ? {
          value: d
        } : d;
      };
    },
    "unary!": function (a, b) {
      return function (d, c, e, f) {
        d = !a(d, c, e, f);
        return b ? {
          value: d
        } : d;
      };
    },
    "binary+": function (a, b, d) {
      return function (c, e, f, g) {
        var h = a(c, e, f, g);
        c = b(c, e, f, g);
        h = Dd(h, c);
        return d ? {
          value: h
        } : h;
      };
    },
    "binary-": function (a, b, d) {
      return function (c, e, f, g) {
        var h = a(c, e, f, g);
        c = b(c, e, f, g);
        h = (u(h) ? h : 0) - (u(c) ? c : 0);
        return d ? {
          value: h
        } : h;
      };
    },
    "binary*": function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) * b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary/": function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) / b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary%": function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) % b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary===": function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) === b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary!==": function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) !== b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary==": function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) == b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary!=": function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) != b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary<": function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) < b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary>": function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) > b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary<=": function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) <= b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary>=": function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) >= b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary&&": function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) && b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary||": function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) || b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "ternary?:": function (a, b, d, c) {
      return function (e, f, g, h) {
        e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);
        return c ? {
          value: e
        } : e;
      };
    },
    value: function (a, b) {
      return function () {
        return b ? {
          context: void 0,
          name: void 0,
          value: a
        } : a;
      };
    },
    identifier: function (a, b, d) {
      return function (c, e, f, g) {
        c = e && a in e ? e : c;
        d && 1 !== d && c && null == c[a] && (c[a] = {});
        e = c ? c[a] : void 0;
        return b ? {
          context: c,
          name: a,
          value: e
        } : e;
      };
    },
    computedMember: function (a, b, d, c) {
      return function (e, f, g, h) {
        var k = a(e, f, g, h),
            l,
            m;
        null != k && (l = b(e, f, g, h), l += "", c && 1 !== c && k && !k[l] && (k[l] = {}), m = k[l]);
        return d ? {
          context: k,
          name: l,
          value: m
        } : m;
      };
    },
    nonComputedMember: function (a, b, d, c) {
      return function (e, f, g, h) {
        e = a(e, f, g, h);
        c && 1 !== c && e && null == e[b] && (e[b] = {});
        f = null != e ? e[b] : void 0;
        return d ? {
          context: e,
          name: b,
          value: f
        } : f;
      };
    },
    inputs: function (a, b) {
      return function (d, c, e, f) {
        return f ? f[b] : a(d, c, e);
      };
    }
  };
  uc.prototype = {
    constructor: uc,
    parse: function (a) {
      a = this.ast.ast(a);
      var b = this.astCompiler.compile(a);
      b.literal = 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression);
      b.constant = a.constant;
      return b;
    }
  };
  var ta = L("$sce"),
      oa = {
    HTML: "html",
    CSS: "css",
    URL: "url",
    RESOURCE_URL: "resourceUrl",
    JS: "js"
  },
      xc = /_([a-z])/g,
      Dg = L("$compile"),
      aa = x.document.createElement("a"),
      Md = Ca(x.location.href);
  Nd.$inject = ["$document"];
  cd.$inject = ["$provide"];
  var Ud = 22,
      Td = ".",
      zc = "0";
  Od.$inject = ["$locale"];
  Qd.$inject = ["$locale"];
  var Og = {
    yyyy: Y("FullYear", 4, 0, !1, !0),
    yy: Y("FullYear", 2, 0, !0, !0),
    y: Y("FullYear", 1, 0, !1, !0),
    MMMM: mb("Month"),
    MMM: mb("Month", !0),
    MM: Y("Month", 2, 1),
    M: Y("Month", 1, 1),
    LLLL: mb("Month", !1, !0),
    dd: Y("Date", 2),
    d: Y("Date", 1),
    HH: Y("Hours", 2),
    H: Y("Hours", 1),
    hh: Y("Hours", 2, -12),
    h: Y("Hours", 1, -12),
    mm: Y("Minutes", 2),
    m: Y("Minutes", 1),
    ss: Y("Seconds", 2),
    s: Y("Seconds", 1),
    sss: Y("Milliseconds", 3),
    EEEE: mb("Day"),
    EEE: mb("Day", !0),
    a: function (a, b) {
      return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
    },
    Z: function (a, b, d) {
      a = -1 * d;
      return a = (0 <= a ? "+" : "") + (Kb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Kb(Math.abs(a % 60), 2));
    },
    ww: Wd(2),
    w: Wd(1),
    G: Ac,
    GG: Ac,
    GGG: Ac,
    GGGG: function (a, b) {
      return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
    }
  },
      Ng = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
      Mg = /^-?\d+$/;
  Pd.$inject = ["$locale"];
  var Hg = la(Q),
      Ig = la(ub);
  Rd.$inject = ["$parse"];
  var Fe = la({
    restrict: "E",
    compile: function (a, b) {
      if (!b.href && !b.xlinkHref) return function (a, b) {
        if ("a" === b[0].nodeName.toLowerCase()) {
          var e = "[object SVGAnimatedString]" === ma.call(b.prop("href")) ? "xlink:href" : "href";
          b.on("click", function (a) {
            b.attr(e) || a.preventDefault();
          });
        }
      };
    }
  }),
      vb = {};
  q(Fb, function (a, b) {
    function d(a, d, e) {
      a.$watch(e[c], function (a) {
        e.$set(b, !!a);
      });
    }

    if ("multiple" !== a) {
      var c = Ba("ng-" + b),
          e = d;
      "checked" === a && (e = function (a, b, e) {
        e.ngModel !== e[c] && d(a, b, e);
      });

      vb[c] = function () {
        return {
          restrict: "A",
          priority: 100,
          link: e
        };
      };
    }
  });
  q(rd, function (a, b) {
    vb[b] = function () {
      return {
        priority: 100,
        link: function (a, c, e) {
          if ("ngPattern" === b && "/" === e.ngPattern.charAt(0) && (c = e.ngPattern.match(Sg))) {
            e.$set("ngPattern", new RegExp(c[1], c[2]));
            return;
          }

          a.$watch(e[b], function (a) {
            e.$set(b, a);
          });
        }
      };
    };
  });
  q(["src", "srcset", "href"], function (a) {
    var b = Ba("ng-" + a);

    vb[b] = function () {
      return {
        priority: 99,
        link: function (d, c, e) {
          var f = a,
              g = a;
          "href" === a && "[object SVGAnimatedString]" === ma.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);
          e.$observe(b, function (b) {
            b ? (e.$set(g, b), za && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null);
          });
        }
      };
    };
  });
  var Mb = {
    $addControl: z,
    $$renameControl: function (a, b) {
      a.$name = b;
    },
    $removeControl: z,
    $setValidity: z,
    $setDirty: z,
    $setPristine: z,
    $setSubmitted: z
  };
  Lb.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
  Lb.prototype = {
    $rollbackViewValue: function () {
      q(this.$$controls, function (a) {
        a.$rollbackViewValue();
      });
    },
    $commitViewValue: function () {
      q(this.$$controls, function (a) {
        a.$commitViewValue();
      });
    },
    $addControl: function (a) {
      Ka(a.$name, "input");
      this.$$controls.push(a);
      a.$name && (this[a.$name] = a);
      a.$$parentForm = this;
    },
    $$renameControl: function (a, b) {
      var d = a.$name;
      this[d] === a && delete this[d];
      this[b] = a;
      a.$name = b;
    },
    $removeControl: function (a) {
      a.$name && this[a.$name] === a && delete this[a.$name];
      q(this.$pending, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);
      q(this.$error, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);
      q(this.$$success, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);
      $a(this.$$controls, a);
      a.$$parentForm = Mb;
    },
    $setDirty: function () {
      this.$$animate.removeClass(this.$$element, Va);
      this.$$animate.addClass(this.$$element, Rb);
      this.$dirty = !0;
      this.$pristine = !1;
      this.$$parentForm.$setDirty();
    },
    $setPristine: function () {
      this.$$animate.setClass(this.$$element, Va, Rb + " ng-submitted");
      this.$dirty = !1;
      this.$pristine = !0;
      this.$submitted = !1;
      q(this.$$controls, function (a) {
        a.$setPristine();
      });
    },
    $setUntouched: function () {
      q(this.$$controls, function (a) {
        a.$setUntouched();
      });
    },
    $setSubmitted: function () {
      this.$$animate.addClass(this.$$element, "ng-submitted");
      this.$submitted = !0;
      this.$$parentForm.$setSubmitted();
    }
  };
  Zd({
    clazz: Lb,
    set: function (a, b, d) {
      var c = a[b];
      c ? -1 === c.indexOf(d) && c.push(d) : a[b] = [d];
    },
    unset: function (a, b, d) {
      var c = a[b];
      c && ($a(c, d), 0 === c.length && delete a[b]);
    }
  });

  var ge = function (a) {
    return ["$timeout", "$parse", function (b, d) {
      function c(a) {
        return "" === a ? d('this[""]').assign : d(a).assign || z;
      }

      return {
        name: "form",
        restrict: a ? "EAC" : "E",
        require: ["form", "^^?form"],
        controller: Lb,
        compile: function (d, f) {
          d.addClass(Va).addClass(nb);
          var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
          return {
            pre: function (a, d, e, f) {
              var n = f[0];

              if (!("action" in e)) {
                var p = function (b) {
                  a.$apply(function () {
                    n.$commitViewValue();
                    n.$setSubmitted();
                  });
                  b.preventDefault();
                };

                d[0].addEventListener("submit", p);
                d.on("$destroy", function () {
                  b(function () {
                    d[0].removeEventListener("submit", p);
                  }, 0, !1);
                });
              }

              (f[1] || n.$$parentForm).$addControl(n);
              var r = g ? c(n.$name) : z;
              g && (r(a, n), e.$observe(g, function (b) {
                n.$name !== b && (r(a, void 0), n.$$parentForm.$$renameControl(n, b), r = c(n.$name), r(a, n));
              }));
              d.on("$destroy", function () {
                n.$$parentForm.$removeControl(n);
                r(a, void 0);
                S(n, Mb);
              });
            }
          };
        }
      };
    }];
  },
      Ge = ge(),
      Se = ge(!0),
      Pg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
      ah = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
      bh = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
      Qg = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
      he = /^(\d{4,})-(\d{2})-(\d{2})$/,
      ie = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Hc = /^(\d{4,})-W(\d\d)$/,
      je = /^(\d{4,})-(\d\d)$/,
      ke = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      ae = V();

  q(["date", "datetime-local", "month", "time", "week"], function (a) {
    ae[a] = !0;
  });

  var le = {
    text: function (a, b, d, c, e, f) {
      Ra(a, b, d, c, e, f);
      Cc(c);
    },
    date: ob("date", he, Nb(he, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
    "datetime-local": ob("datetimelocal", ie, Nb(ie, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
    time: ob("time", ke, Nb(ke, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
    week: ob("week", Hc, function (a, b) {
      if (ga(a)) return a;

      if (F(a)) {
        Hc.lastIndex = 0;
        var d = Hc.exec(a);

        if (d) {
          var c = +d[1],
              e = +d[2],
              f = d = 0,
              g = 0,
              h = 0,
              k = Vd(c),
              e = 7 * (e - 1);
          b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());
          return new Date(c, 0, k.getDate() + e, d, f, g, h);
        }
      }

      return NaN;
    }, "yyyy-Www"),
    month: ob("month", je, Nb(je, ["yyyy", "MM"]), "yyyy-MM"),
    number: function (a, b, d, c, e, f) {
      Dc(a, b, d, c);
      be(c);
      Ra(a, b, d, c, e, f);
      var g, h;
      if (u(d.min) || d.ngMin) c.$validators.min = function (a) {
        return c.$isEmpty(a) || w(g) || a >= g;
      }, d.$observe("min", function (a) {
        g = Sa(a);
        c.$validate();
      });
      if (u(d.max) || d.ngMax) c.$validators.max = function (a) {
        return c.$isEmpty(a) || w(h) || a <= h;
      }, d.$observe("max", function (a) {
        h = Sa(a);
        c.$validate();
      });

      if (u(d.step) || d.ngStep) {
        var k;

        c.$validators.step = function (a, b) {
          return c.$isEmpty(b) || w(k) || ce(b, g || 0, k);
        };

        d.$observe("step", function (a) {
          k = Sa(a);
          c.$validate();
        });
      }
    },
    url: function (a, b, d, c, e, f) {
      Ra(a, b, d, c, e, f);
      Cc(c);
      c.$$parserName = "url";

      c.$validators.url = function (a, b) {
        var d = a || b;
        return c.$isEmpty(d) || ah.test(d);
      };
    },
    email: function (a, b, d, c, e, f) {
      Ra(a, b, d, c, e, f);
      Cc(c);
      c.$$parserName = "email";

      c.$validators.email = function (a, b) {
        var d = a || b;
        return c.$isEmpty(d) || bh.test(d);
      };
    },
    radio: function (a, b, d, c) {
      var e = !d.ngTrim || "false" !== T(d.ngTrim);
      w(d.name) && b.attr("name", ++qb);
      b.on("click", function (a) {
        var g;
        b[0].checked && (g = d.value, e && (g = T(g)), c.$setViewValue(g, a && a.type));
      });

      c.$render = function () {
        var a = d.value;
        e && (a = T(a));
        b[0].checked = a === c.$viewValue;
      };

      d.$observe("value", c.$render);
    },
    range: function (a, b, d, c, e, f) {
      function g(a, c) {
        b.attr(a, d[a]);
        d.$observe(a, c);
      }

      function h(a) {
        n = Sa(a);
        da(c.$modelValue) || (m ? (a = b.val(), n > a && (a = n, b.val(a)), c.$setViewValue(a)) : c.$validate());
      }

      function k(a) {
        p = Sa(a);
        da(c.$modelValue) || (m ? (a = b.val(), p < a && (b.val(p), a = p < n ? n : p), c.$setViewValue(a)) : c.$validate());
      }

      function l(a) {
        r = Sa(a);
        da(c.$modelValue) || (m && c.$viewValue !== b.val() ? c.$setViewValue(b.val()) : c.$validate());
      }

      Dc(a, b, d, c);
      be(c);
      Ra(a, b, d, c, e, f);
      var m = c.$$hasNativeValidators && "range" === b[0].type,
          n = m ? 0 : void 0,
          p = m ? 100 : void 0,
          r = m ? 1 : void 0,
          q = b[0].validity;
      a = u(d.min);
      e = u(d.max);
      f = u(d.step);
      var s = c.$render;
      c.$render = m && u(q.rangeUnderflow) && u(q.rangeOverflow) ? function () {
        s();
        c.$setViewValue(b.val());
      } : s;
      a && (c.$validators.min = m ? function () {
        return !0;
      } : function (a, b) {
        return c.$isEmpty(b) || w(n) || b >= n;
      }, g("min", h));
      e && (c.$validators.max = m ? function () {
        return !0;
      } : function (a, b) {
        return c.$isEmpty(b) || w(p) || b <= p;
      }, g("max", k));
      f && (c.$validators.step = m ? function () {
        return !q.stepMismatch;
      } : function (a, b) {
        return c.$isEmpty(b) || w(r) || ce(b, n || 0, r);
      }, g("step", l));
    },
    checkbox: function (a, b, d, c, e, f, g, h) {
      var k = de(h, a, "ngTrueValue", d.ngTrueValue, !0),
          l = de(h, a, "ngFalseValue", d.ngFalseValue, !1);
      b.on("click", function (a) {
        c.$setViewValue(b[0].checked, a && a.type);
      });

      c.$render = function () {
        b[0].checked = c.$viewValue;
      };

      c.$isEmpty = function (a) {
        return !1 === a;
      };

      c.$formatters.push(function (a) {
        return sa(a, k);
      });
      c.$parsers.push(function (a) {
        return a ? k : l;
      });
    },
    hidden: z,
    button: z,
    submit: z,
    reset: z,
    file: z
  },
      Xc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
    return {
      restrict: "E",
      require: ["?ngModel"],
      link: {
        pre: function (e, f, g, h) {
          h[0] && (le[Q(g.type)] || le.text)(e, f, g, h[0], b, a, d, c);
        }
      }
    };
  }],
      ch = /^(true|false|\d+)$/,
      kf = function () {
    function a(a, d, c) {
      var e = u(c) ? c : 9 === za ? "" : null;
      a.prop("value", e);
      d.$set("value", c);
    }

    return {
      restrict: "A",
      priority: 100,
      compile: function (b, d) {
        return ch.test(d.ngValue) ? function (b, d, f) {
          b = b.$eval(f.ngValue);
          a(d, f, b);
        } : function (b, d, f) {
          b.$watch(f.ngValue, function (b) {
            a(d, f, b);
          });
        };
      }
    };
  },
      Ke = ["$compile", function (a) {
    return {
      restrict: "AC",
      compile: function (b) {
        a.$$addBindingClass(b);
        return function (b, c, e) {
          a.$$addBindingInfo(c, e.ngBind);
          c = c[0];
          b.$watch(e.ngBind, function (a) {
            c.textContent = $b(a);
          });
        };
      }
    };
  }],
      Me = ["$interpolate", "$compile", function (a, b) {
    return {
      compile: function (d) {
        b.$$addBindingClass(d);
        return function (c, d, f) {
          c = a(d.attr(f.$attr.ngBindTemplate));
          b.$$addBindingInfo(d, c.expressions);
          d = d[0];
          f.$observe("ngBindTemplate", function (a) {
            d.textContent = w(a) ? "" : a;
          });
        };
      }
    };
  }],
      Le = ["$sce", "$parse", "$compile", function (a, b, d) {
    return {
      restrict: "A",
      compile: function (c, e) {
        var f = b(e.ngBindHtml),
            g = b(e.ngBindHtml, function (b) {
          return a.valueOf(b);
        });
        d.$$addBindingClass(c);
        return function (b, c, e) {
          d.$$addBindingInfo(c, e.ngBindHtml);
          b.$watch(g, function () {
            var d = f(b);
            c.html(a.getTrustedHtml(d) || "");
          });
        };
      }
    };
  }],
      jf = la({
    restrict: "A",
    require: "ngModel",
    link: function (a, b, d, c) {
      c.$viewChangeListeners.push(function () {
        a.$eval(d.ngChange);
      });
    }
  }),
      Ne = Fc("", !0),
      Pe = Fc("Odd", 0),
      Oe = Fc("Even", 1),
      Qe = Qa({
    compile: function (a, b) {
      b.$set("ngCloak", void 0);
      a.removeClass("ng-cloak");
    }
  }),
      Re = [function () {
    return {
      restrict: "A",
      scope: !0,
      controller: "@",
      priority: 500
    };
  }],
      bd = {},
      dh = {
    blur: !0,
    focus: !0
  };

  q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
    var b = Ba("ng-" + a);
    bd[b] = ["$parse", "$rootScope", function (d, c) {
      return {
        restrict: "A",
        compile: function (e, f) {
          var g = d(f[b]);
          return function (b, d) {
            d.on(a, function (d) {
              var e = function () {
                g(b, {
                  $event: d
                });
              };

              dh[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
            });
          };
        }
      };
    }];
  });

  var Ue = ["$animate", "$compile", function (a, b) {
    return {
      multiElement: !0,
      transclude: "element",
      priority: 600,
      terminal: !0,
      restrict: "A",
      $$tlb: !0,
      link: function (d, c, e, f, g) {
        var h, k, l;
        d.$watch(e.ngIf, function (d) {
          d ? k || g(function (d, f) {
            k = f;
            d[d.length++] = b.$$createComment("end ngIf", e.ngIf);
            h = {
              clone: d
            };
            a.enter(d, c.parent(), c);
          }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = tb(h.clone), a.leave(l).done(function (a) {
            !1 !== a && (l = null);
          }), h = null));
        });
      }
    };
  }],
      Ve = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
    return {
      restrict: "ECA",
      priority: 400,
      terminal: !0,
      transclude: "element",
      controller: ea.noop,
      compile: function (c, e) {
        var f = e.ngInclude || e.src,
            g = e.onload || "",
            h = e.autoscroll;
        return function (c, e, m, n, p) {
          var r = 0,
              q,
              s,
              t,
              w = function () {
            s && (s.remove(), s = null);
            q && (q.$destroy(), q = null);
            t && (d.leave(t).done(function (a) {
              !1 !== a && (s = null);
            }), s = t, t = null);
          };

          c.$watch(f, function (f) {
            var m = function (a) {
              !1 === a || !u(h) || h && !c.$eval(h) || b();
            },
                s = ++r;

            f ? (a(f, !0).then(function (a) {
              if (!c.$$destroyed && s === r) {
                var b = c.$new();
                n.template = a;
                a = p(b, function (a) {
                  w();
                  d.enter(a, null, e).done(m);
                });
                q = b;
                t = a;
                q.$emit("$includeContentLoaded", f);
                c.$eval(g);
              }
            }, function () {
              c.$$destroyed || s !== r || (w(), c.$emit("$includeContentError", f));
            }), c.$emit("$includeContentRequested", f)) : (w(), n.template = null);
          });
        };
      }
    };
  }],
      mf = ["$compile", function (a) {
    return {
      restrict: "ECA",
      priority: -400,
      require: "ngInclude",
      link: function (b, d, c, e) {
        ma.call(d[0]).match(/SVG/) ? (d.empty(), a(dd(e.template, x.document).childNodes)(b, function (a) {
          d.append(a);
        }, {
          futureParentElement: d
        })) : (d.html(e.template), a(d.contents())(b));
      }
    };
  }],
      We = Qa({
    priority: 450,
    compile: function () {
      return {
        pre: function (a, b, d) {
          a.$eval(d.ngInit);
        }
      };
    }
  }),
      hf = function () {
    return {
      restrict: "A",
      priority: 100,
      require: "ngModel",
      link: function (a, b, d, c) {
        var e = d.ngList || ", ",
            f = "false" !== d.ngTrim,
            g = f ? T(e) : e;
        c.$parsers.push(function (a) {
          if (!w(a)) {
            var b = [];
            a && q(a.split(g), function (a) {
              a && b.push(f ? T(a) : a);
            });
            return b;
          }
        });
        c.$formatters.push(function (a) {
          if (H(a)) return a.join(e);
        });

        c.$isEmpty = function (a) {
          return !a || !a.length;
        };
      }
    };
  },
      nb = "ng-valid",
      Yd = "ng-invalid",
      Va = "ng-pristine",
      Rb = "ng-dirty",
      pb = L("ngModel");

  Ob.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
  Ob.prototype = {
    $$initGetterSetters: function () {
      if (this.$options.getOption("getterSetter")) {
        var a = this.$$parse(this.$$attr.ngModel + "()"),
            b = this.$$parse(this.$$attr.ngModel + "($$$p)");

        this.$$ngModelGet = function (b) {
          var c = this.$$parsedNgModel(b);
          D(c) && (c = a(b));
          return c;
        };

        this.$$ngModelSet = function (a, c) {
          D(this.$$parsedNgModel(a)) ? b(a, {
            $$$p: c
          }) : this.$$parsedNgModelAssign(a, c);
        };
      } else if (!this.$$parsedNgModel.assign) throw pb("nonassign", this.$$attr.ngModel, xa(this.$$element));
    },
    $render: z,
    $isEmpty: function (a) {
      return w(a) || "" === a || null === a || a !== a;
    },
    $$updateEmptyClasses: function (a) {
      this.$isEmpty(a) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"));
    },
    $setPristine: function () {
      this.$dirty = !1;
      this.$pristine = !0;
      this.$$animate.removeClass(this.$$element, Rb);
      this.$$animate.addClass(this.$$element, Va);
    },
    $setDirty: function () {
      this.$dirty = !0;
      this.$pristine = !1;
      this.$$animate.removeClass(this.$$element, Va);
      this.$$animate.addClass(this.$$element, Rb);
      this.$$parentForm.$setDirty();
    },
    $setUntouched: function () {
      this.$touched = !1;
      this.$untouched = !0;
      this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched");
    },
    $setTouched: function () {
      this.$touched = !0;
      this.$untouched = !1;
      this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched");
    },
    $rollbackViewValue: function () {
      this.$$timeout.cancel(this.$$pendingDebounce);
      this.$viewValue = this.$$lastCommittedViewValue;
      this.$render();
    },
    $validate: function () {
      if (!da(this.$modelValue)) {
        var a = this.$$lastCommittedViewValue,
            b = this.$$rawModelValue,
            d = this.$valid,
            c = this.$modelValue,
            e = this.$options.getOption("allowInvalid"),
            f = this;
        this.$$runValidators(b, a, function (a) {
          e || d === a || (f.$modelValue = a ? b : void 0, f.$modelValue !== c && f.$$writeModelToScope());
        });
      }
    },
    $$runValidators: function (a, b, d) {
      function c() {
        var c = !0;
        q(k.$validators, function (d, e) {
          var g = Boolean(d(a, b));
          c = c && g;
          f(e, g);
        });
        return c ? !0 : (q(k.$asyncValidators, function (a, b) {
          f(b, null);
        }), !1);
      }

      function e() {
        var c = [],
            d = !0;
        q(k.$asyncValidators, function (e, g) {
          var k = e(a, b);
          if (!k || !D(k.then)) throw pb("nopromise", k);
          f(g, void 0);
          c.push(k.then(function () {
            f(g, !0);
          }, function () {
            d = !1;
            f(g, !1);
          }));
        });
        c.length ? k.$$q.all(c).then(function () {
          g(d);
        }, z) : g(!0);
      }

      function f(a, b) {
        h === k.$$currentValidationRunId && k.$setValidity(a, b);
      }

      function g(a) {
        h === k.$$currentValidationRunId && d(a);
      }

      this.$$currentValidationRunId++;
      var h = this.$$currentValidationRunId,
          k = this;
      (function () {
        var a = k.$$parserName || "parse";
        if (w(k.$$parserValid)) f(a, null);else return k.$$parserValid || (q(k.$validators, function (a, b) {
          f(b, null);
        }), q(k.$asyncValidators, function (a, b) {
          f(b, null);
        })), f(a, k.$$parserValid), k.$$parserValid;
        return !0;
      })() ? c() ? e() : g(!1) : g(!1);
    },
    $commitViewValue: function () {
      var a = this.$viewValue;
      this.$$timeout.cancel(this.$$pendingDebounce);
      if (this.$$lastCommittedViewValue !== a || "" === a && this.$$hasNativeValidators) this.$$updateEmptyClasses(a), this.$$lastCommittedViewValue = a, this.$pristine && this.$setDirty(), this.$$parseAndValidate();
    },
    $$parseAndValidate: function () {
      var a = this.$$lastCommittedViewValue,
          b = this;
      if (this.$$parserValid = w(a) ? void 0 : !0) for (var d = 0; d < this.$parsers.length; d++) if (a = this.$parsers[d](a), w(a)) {
        this.$$parserValid = !1;
        break;
      }
      da(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
      var c = this.$modelValue,
          e = this.$options.getOption("allowInvalid");
      this.$$rawModelValue = a;
      e && (this.$modelValue = a, b.$modelValue !== c && b.$$writeModelToScope());
      this.$$runValidators(a, this.$$lastCommittedViewValue, function (d) {
        e || (b.$modelValue = d ? a : void 0, b.$modelValue !== c && b.$$writeModelToScope());
      });
    },
    $$writeModelToScope: function () {
      this.$$ngModelSet(this.$$scope, this.$modelValue);
      q(this.$viewChangeListeners, function (a) {
        try {
          a();
        } catch (b) {
          this.$$exceptionHandler(b);
        }
      }, this);
    },
    $setViewValue: function (a, b) {
      this.$viewValue = a;
      this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(b);
    },
    $$debounceViewValueCommit: function (a) {
      var b = this.$options.getOption("debounce");
      ba(b[a]) ? b = b[a] : ba(b["default"]) && (b = b["default"]);
      this.$$timeout.cancel(this.$$pendingDebounce);
      var d = this;
      0 < b ? this.$$pendingDebounce = this.$$timeout(function () {
        d.$commitViewValue();
      }, b) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function () {
        d.$commitViewValue();
      });
    },
    $overrideModelOptions: function (a) {
      this.$options = this.$options.createChild(a);
    }
  };
  Zd({
    clazz: Ob,
    set: function (a, b) {
      a[b] = !0;
    },
    unset: function (a, b) {
      delete a[b];
    }
  });
  var gf = ["$rootScope", function (a) {
    return {
      restrict: "A",
      require: ["ngModel", "^?form", "^?ngModelOptions"],
      controller: Ob,
      priority: 1,
      compile: function (b) {
        b.addClass(Va).addClass("ng-untouched").addClass(nb);
        return {
          pre: function (a, b, e, f) {
            var g = f[0];
            b = f[1] || g.$$parentForm;
            if (f = f[2]) g.$options = f.$options;
            g.$$initGetterSetters();
            b.$addControl(g);
            e.$observe("name", function (a) {
              g.$name !== a && g.$$parentForm.$$renameControl(g, a);
            });
            a.$on("$destroy", function () {
              g.$$parentForm.$removeControl(g);
            });
          },
          post: function (b, c, e, f) {
            function g() {
              h.$setTouched();
            }

            var h = f[0];
            if (h.$options.getOption("updateOn")) c.on(h.$options.getOption("updateOn"), function (a) {
              h.$$debounceViewValueCommit(a && a.type);
            });
            c.on("blur", function () {
              h.$touched || (a.$$phase ? b.$evalAsync(g) : b.$apply(g));
            });
          }
        };
      }
    };
  }],
      Pb,
      eh = /(\s+|^)default(\s+|$)/;
  Gc.prototype = {
    getOption: function (a) {
      return this.$$options[a];
    },
    createChild: function (a) {
      var b = !1;
      a = S({}, a);
      q(a, function (d, c) {
        "$inherit" === d ? "*" === c ? b = !0 : (a[c] = this.$$options[c], "updateOn" === c && (a.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === c && (a.updateOnDefault = !1, a[c] = T(d.replace(eh, function () {
          a.updateOnDefault = !0;
          return " ";
        })));
      }, this);
      b && (delete a["*"], ee(a, this.$$options));
      ee(a, Pb.$$options);
      return new Gc(a);
    }
  };
  Pb = new Gc({
    updateOn: "",
    updateOnDefault: !0,
    debounce: 0,
    getterSetter: !1,
    allowInvalid: !1,
    timezone: null
  });

  var lf = function () {
    function a(a, d) {
      this.$$attrs = a;
      this.$$scope = d;
    }

    a.$inject = ["$attrs", "$scope"];
    a.prototype = {
      $onInit: function () {
        var a = this.parentCtrl ? this.parentCtrl.$options : Pb,
            d = this.$$scope.$eval(this.$$attrs.ngModelOptions);
        this.$options = a.createChild(d);
      }
    };
    return {
      restrict: "A",
      priority: 10,
      require: {
        parentCtrl: "?^^ngModelOptions"
      },
      bindToController: !0,
      controller: a
    };
  },
      Xe = Qa({
    terminal: !0,
    priority: 1E3
  }),
      fh = L("ngOptions"),
      gh = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      ef = ["$compile", "$document", "$parse", function (a, b, d) {
    function c(a, b, c) {
      function e(a, b, c, d, f) {
        this.selectValue = a;
        this.viewValue = b;
        this.label = c;
        this.group = d;
        this.disabled = f;
      }

      function f(a) {
        var b;
        if (!q && qa(a)) b = a;else {
          b = [];

          for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
        }
        return b;
      }

      var n = a.match(gh);
      if (!n) throw fh("iexp", a, xa(b));
      var p = n[5] || n[7],
          q = n[6];
      a = / as /.test(n[0]) && n[1];
      var s = n[9];
      b = d(n[2] ? n[1] : p);

      var v = a && d(a) || b,
          t = s && d(s),
          u = s ? function (a, b) {
        return t(c, b);
      } : function (a) {
        return Pa(a);
      },
          w = function (a, b) {
        return u(a, G(a, b));
      },
          A = d(n[2] || n[1]),
          x = d(n[3] || ""),
          I = d(n[4] || ""),
          K = d(n[8]),
          E = {},
          G = q ? function (a, b) {
        E[q] = b;
        E[p] = a;
        return E;
      } : function (a) {
        E[p] = a;
        return E;
      };

      return {
        trackBy: s,
        getTrackByValue: w,
        getWatchables: d(K, function (a) {
          var b = [];
          a = a || [];

          for (var d = f(a), e = d.length, g = 0; g < e; g++) {
            var h = a === d ? g : d[g],
                l = a[h],
                h = G(l, h),
                l = u(l, h);
            b.push(l);
            if (n[2] || n[1]) l = A(c, h), b.push(l);
            n[4] && (h = I(c, h), b.push(h));
          }

          return b;
        }),
        getOptions: function () {
          for (var a = [], b = {}, d = K(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
            var p = d === g ? n : g[n],
                q = G(d[p], p),
                r = v(c, q),
                p = u(r, q),
                t = A(c, q),
                E = x(c, q),
                q = I(c, q),
                r = new e(p, r, t, E, q);
            a.push(r);
            b[p] = r;
          }

          return {
            items: a,
            selectValueMap: b,
            getOptionFromViewValue: function (a) {
              return b[w(a)];
            },
            getViewValueFromOption: function (a) {
              return s ? ra(a.viewValue) : a.viewValue;
            }
          };
        }
      };
    }

    var e = x.document.createElement("option"),
        f = x.document.createElement("optgroup");
    return {
      restrict: "A",
      terminal: !0,
      require: ["select", "ngModel"],
      link: {
        pre: function (a, b, c, d) {
          d[0].registerOption = z;
        },
        post: function (d, h, k, l) {
          function m(a) {
            var b = (a = A.getOptionFromViewValue(a)) && a.element;
            b && !b.selected && (b.selected = !0);
            return a;
          }

          function n(a, b) {
            a.element = b;
            b.disabled = a.disabled;
            a.label !== b.label && (b.label = a.label, b.textContent = a.label);
            b.value = a.selectValue;
          }

          function p() {
            var a = A && r.readValue();
            if (A) for (var b = A.items.length - 1; 0 <= b; b--) {
              var c = A.items[b];
              u(c.group) ? Eb(c.element.parentNode) : Eb(c.element);
            }
            A = z.getOptions();
            var d = {};
            x && h.prepend(r.emptyOption);
            A.items.forEach(function (a) {
              var b;

              if (u(a.group)) {
                b = d[a.group];
                b || (b = f.cloneNode(!1), I.appendChild(b), b.label = null === a.group ? "null" : a.group, d[a.group] = b);
                var c = e.cloneNode(!1);
              } else b = I, c = e.cloneNode(!1);

              b.appendChild(c);
              n(a, c);
            });
            h[0].appendChild(I);
            s.$render();
            s.$isEmpty(a) || (b = r.readValue(), (z.trackBy || v ? sa(a, b) : a === b) || (s.$setViewValue(b), s.$render()));
          }

          var r = l[0],
              s = l[1],
              v = k.multiple;
          l = 0;

          for (var t = h.children(), w = t.length; l < w; l++) if ("" === t[l].value) {
            r.hasEmptyOption = !0;
            r.emptyOption = t.eq(l);
            break;
          }

          var x = !!r.emptyOption;
          B(e.cloneNode(!1)).val("?");
          var A,
              z = c(k.ngOptions, h, d),
              I = b[0].createDocumentFragment();

          r.generateUnknownOptionValue = function (a) {
            return "?";
          };

          v ? (r.writeValue = function (a) {
            var b = a && a.map(m) || [];
            A.items.forEach(function (a) {
              a.element.selected && -1 === Array.prototype.indexOf.call(b, a) && (a.element.selected = !1);
            });
          }, r.readValue = function () {
            var a = h.val() || [],
                b = [];
            q(a, function (a) {
              (a = A.selectValueMap[a]) && !a.disabled && b.push(A.getViewValueFromOption(a));
            });
            return b;
          }, z.trackBy && d.$watchCollection(function () {
            if (H(s.$viewValue)) return s.$viewValue.map(function (a) {
              return z.getTrackByValue(a);
            });
          }, function () {
            s.$render();
          })) : (r.writeValue = function (a) {
            var b = A.selectValueMap[h.val()],
                c = A.getOptionFromViewValue(a);
            b && b.element.removeAttribute("selected");
            c ? (h[0].value !== c.selectValue && (r.removeUnknownOption(), r.unselectEmptyOption(), h[0].value = c.selectValue, c.element.selected = !0), c.element.setAttribute("selected", "selected")) : x ? r.selectEmptyOption() : r.unknownOption.parent().length ? r.updateUnknownOption(a) : r.renderUnknownOption(a);
          }, r.readValue = function () {
            var a = A.selectValueMap[h.val()];
            return a && !a.disabled ? (r.unselectEmptyOption(), r.removeUnknownOption(), A.getViewValueFromOption(a)) : null;
          }, z.trackBy && d.$watch(function () {
            return z.getTrackByValue(s.$viewValue);
          }, function () {
            s.$render();
          }));
          x && (r.emptyOption.remove(), a(r.emptyOption)(d), 8 === r.emptyOption[0].nodeType ? (r.hasEmptyOption = !1, r.registerOption = function (a, b) {
            "" === b.val() && (r.hasEmptyOption = !0, r.emptyOption = b, r.emptyOption.removeClass("ng-scope"), s.$render(), b.on("$destroy", function () {
              r.hasEmptyOption = !1;
              r.emptyOption = void 0;
            }));
          }) : r.emptyOption.removeClass("ng-scope"));
          h.empty();
          p();
          d.$watchCollection(z.getWatchables, p);
        }
      }
    };
  }],
      Ye = ["$locale", "$interpolate", "$log", function (a, b, d) {
    var c = /{}/g,
        e = /^when(Minus)?(.+)$/;
    return {
      link: function (f, g, h) {
        function k(a) {
          g.text(a || "");
        }

        var l = h.count,
            m = h.$attr.when && g.attr(h.$attr.when),
            n = h.offset || 0,
            p = f.$eval(m) || {},
            r = {},
            s = b.startSymbol(),
            v = b.endSymbol(),
            t = s + l + "-" + n + v,
            u = ea.noop,
            x;
        q(h, function (a, b) {
          var c = e.exec(b);
          c && (c = (c[1] ? "-" : "") + Q(c[2]), p[c] = g.attr(h.$attr[b]));
        });
        q(p, function (a, d) {
          r[d] = b(a.replace(c, t));
        });
        f.$watch(l, function (b) {
          var c = parseFloat(b),
              e = da(c);
          e || c in p || (c = a.pluralCat(c - n));
          c === x || e && da(x) || (u(), e = r[c], w(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), u = z, k()) : u = f.$watch(e, k), x = c);
        });
      }
    };
  }],
      Ze = ["$parse", "$animate", "$compile", function (a, b, d) {
    var c = L("ngRepeat"),
        e = function (a, b, c, d, e, m, n) {
      a[c] = d;
      e && (a[e] = m);
      a.$index = b;
      a.$first = 0 === b;
      a.$last = b === n - 1;
      a.$middle = !(a.$first || a.$last);
      a.$odd = !(a.$even = 0 === (b & 1));
    };

    return {
      restrict: "A",
      multiElement: !0,
      transclude: "element",
      priority: 1E3,
      terminal: !0,
      $$tlb: !0,
      compile: function (f, g) {
        var h = g.ngRepeat,
            k = d.$$createComment("end ngRepeat", h),
            l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
        if (!l) throw c("iexp", h);
        var m = l[1],
            n = l[2],
            p = l[3],
            r = l[4],
            l = m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);
        if (!l) throw c("iidexp", m);
        var s = l[3] || l[1],
            v = l[2];
        if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);
        var t,
            u,
            w,
            x,
            z = {
          $id: Pa
        };
        r ? t = a(r) : (w = function (a, b) {
          return Pa(b);
        }, x = function (a) {
          return a;
        });
        return function (a, d, f, g, l) {
          t && (u = function (b, c, d) {
            v && (z[v] = b);
            z[s] = c;
            z.$index = d;
            return t(a, z);
          });
          var m = V();
          a.$watchCollection(n, function (f) {
            var g,
                n,
                r = d[0],
                t,
                z = V(),
                B,
                D,
                F,
                C,
                G,
                E,
                H;
            p && (a[p] = f);
            if (qa(f)) G = f, n = u || w;else for (H in n = u || x, G = [], f) ua.call(f, H) && "$" !== H.charAt(0) && G.push(H);
            B = G.length;
            H = Array(B);

            for (g = 0; g < B; g++) if (D = f === G ? g : G[g], F = f[D], C = n(D, F, g), m[C]) E = m[C], delete m[C], z[C] = E, H[g] = E;else {
              if (z[C]) throw q(H, function (a) {
                a && a.scope && (m[a.id] = a);
              }), c("dupes", h, C, F);
              H[g] = {
                id: C,
                scope: void 0,
                clone: void 0
              };
              z[C] = !0;
            }

            for (t in m) {
              E = m[t];
              C = tb(E.clone);
              b.leave(C);
              if (C[0].parentNode) for (g = 0, n = C.length; g < n; g++) C[g].$$NG_REMOVED = !0;
              E.scope.$destroy();
            }

            for (g = 0; g < B; g++) if (D = f === G ? g : G[g], F = f[D], E = H[g], E.scope) {
              t = r;

              do t = t.nextSibling; while (t && t.$$NG_REMOVED);

              E.clone[0] !== t && b.move(tb(E.clone), null, r);
              r = E.clone[E.clone.length - 1];
              e(E.scope, g, s, F, v, D, B);
            } else l(function (a, c) {
              E.scope = c;
              var d = k.cloneNode(!1);
              a[a.length++] = d;
              b.enter(a, null, r);
              r = d;
              E.clone = a;
              z[E.id] = E;
              e(E.scope, g, s, F, v, D, B);
            });

            m = z;
          });
        };
      }
    };
  }],
      $e = ["$animate", function (a) {
    return {
      restrict: "A",
      multiElement: !0,
      link: function (b, d, c) {
        b.$watch(c.ngShow, function (b) {
          a[b ? "removeClass" : "addClass"](d, "ng-hide", {
            tempClasses: "ng-hide-animate"
          });
        });
      }
    };
  }],
      Te = ["$animate", function (a) {
    return {
      restrict: "A",
      multiElement: !0,
      link: function (b, d, c) {
        b.$watch(c.ngHide, function (b) {
          a[b ? "addClass" : "removeClass"](d, "ng-hide", {
            tempClasses: "ng-hide-animate"
          });
        });
      }
    };
  }],
      af = Qa(function (a, b, d) {
    a.$watch(d.ngStyle, function (a, d) {
      d && a !== d && q(d, function (a, c) {
        b.css(c, "");
      });
      a && b.css(a);
    }, !0);
  }),
      bf = ["$animate", "$compile", function (a, b) {
    return {
      require: "ngSwitch",
      controller: ["$scope", function () {
        this.cases = {};
      }],
      link: function (d, c, e, f) {
        var g = [],
            h = [],
            k = [],
            l = [],
            m = function (a, b) {
          return function (c) {
            !1 !== c && a.splice(b, 1);
          };
        };

        d.$watch(e.ngSwitch || e.on, function (c) {
          for (var d, e; k.length;) a.cancel(k.pop());

          d = 0;

          for (e = l.length; d < e; ++d) {
            var s = tb(h[d].clone);
            l[d].$destroy();
            (k[d] = a.leave(s)).done(m(k, d));
          }

          h.length = 0;
          l.length = 0;
          (g = f.cases["!" + c] || f.cases["?"]) && q(g, function (c) {
            c.transclude(function (d, e) {
              l.push(e);
              var f = c.element;
              d[d.length++] = b.$$createComment("end ngSwitchWhen");
              h.push({
                clone: d
              });
              a.enter(d, f.parent(), f);
            });
          });
        });
      }
    };
  }],
      cf = Qa({
    transclude: "element",
    priority: 1200,
    require: "^ngSwitch",
    multiElement: !0,
    link: function (a, b, d, c, e) {
      a = d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function (a, b, c) {
        return c[b - 1] !== a;
      });
      q(a, function (a) {
        c.cases["!" + a] = c.cases["!" + a] || [];
        c.cases["!" + a].push({
          transclude: e,
          element: b
        });
      });
    }
  }),
      df = Qa({
    transclude: "element",
    priority: 1200,
    require: "^ngSwitch",
    multiElement: !0,
    link: function (a, b, d, c, e) {
      c.cases["?"] = c.cases["?"] || [];
      c.cases["?"].push({
        transclude: e,
        element: b
      });
    }
  }),
      hh = L("ngTransclude"),
      ff = ["$compile", function (a) {
    return {
      restrict: "EAC",
      terminal: !0,
      compile: function (b) {
        var d = a(b.contents());
        b.empty();
        return function (a, b, f, g, h) {
          function k() {
            d(a, function (a) {
              b.append(a);
            });
          }

          if (!h) throw hh("orphan", xa(b));
          f.ngTransclude === f.$attr.ngTransclude && (f.ngTransclude = "");
          f = f.ngTransclude || f.ngTranscludeSlot;
          h(function (a, c) {
            var d;
            if (d = a.length) a: {
              d = 0;

              for (var f = a.length; d < f; d++) {
                var g = a[d];

                if (g.nodeType !== Ia || g.nodeValue.trim()) {
                  d = !0;
                  break a;
                }
              }

              d = void 0;
            }
            d ? b.append(a) : (k(), c.$destroy());
          }, null, f);
          f && !h.isSlotFilled(f) && k();
        };
      }
    };
  }],
      He = ["$templateCache", function (a) {
    return {
      restrict: "E",
      terminal: !0,
      compile: function (b, d) {
        "text/ng-template" === d.type && a.put(d.id, b[0].text);
      }
    };
  }],
      ih = {
    $setViewValue: z,
    $render: z
  },
      jh = ["$element", "$scope", function (a, b) {
    function d() {
      g || (g = !0, b.$$postDigest(function () {
        g = !1;
        e.ngModelCtrl.$render();
      }));
    }

    function c(a) {
      h || (h = !0, b.$$postDigest(function () {
        b.$$destroyed || (h = !1, e.ngModelCtrl.$setViewValue(e.readValue()), a && e.ngModelCtrl.$render());
      }));
    }

    var e = this,
        f = new Gb();
    e.selectValueMap = {};
    e.ngModelCtrl = ih;
    e.multiple = !1;
    e.unknownOption = B(x.document.createElement("option"));
    e.hasEmptyOption = !1;
    e.emptyOption = void 0;

    e.renderUnknownOption = function (b) {
      b = e.generateUnknownOptionValue(b);
      e.unknownOption.val(b);
      a.prepend(e.unknownOption);
      Ta(e.unknownOption, !0);
      a.val(b);
    };

    e.updateUnknownOption = function (b) {
      b = e.generateUnknownOptionValue(b);
      e.unknownOption.val(b);
      Ta(e.unknownOption, !0);
      a.val(b);
    };

    e.generateUnknownOptionValue = function (a) {
      return "? " + Pa(a) + " ?";
    };

    e.removeUnknownOption = function () {
      e.unknownOption.parent() && e.unknownOption.remove();
    };

    e.selectEmptyOption = function () {
      e.emptyOption && (a.val(""), Ta(e.emptyOption, !0));
    };

    e.unselectEmptyOption = function () {
      e.hasEmptyOption && e.emptyOption.removeAttr("selected");
    };

    b.$on("$destroy", function () {
      e.renderUnknownOption = z;
    });

    e.readValue = function () {
      var b = a.val(),
          b = b in e.selectValueMap ? e.selectValueMap[b] : b;
      return e.hasOption(b) ? b : null;
    };

    e.writeValue = function (b) {
      var c = a[0].options[a[0].selectedIndex];
      c && Ta(B(c), !1);
      e.hasOption(b) ? (e.removeUnknownOption(), c = Pa(b), a.val(c in e.selectValueMap ? c : b), Ta(B(a[0].options[a[0].selectedIndex]), !0)) : null == b && e.emptyOption ? (e.removeUnknownOption(), e.selectEmptyOption()) : e.unknownOption.parent().length ? e.updateUnknownOption(b) : e.renderUnknownOption(b);
    };

    e.addOption = function (a, b) {
      if (8 !== b[0].nodeType) {
        Ka(a, '"option value"');
        "" === a && (e.hasEmptyOption = !0, e.emptyOption = b);
        var c = f.get(a) || 0;
        f.set(a, c + 1);
        d();
      }
    };

    e.removeOption = function (a) {
      var b = f.get(a);
      b && (1 === b ? (f.delete(a), "" === a && (e.hasEmptyOption = !1, e.emptyOption = void 0)) : f.set(a, b - 1));
    };

    e.hasOption = function (a) {
      return !!f.get(a);
    };

    var g = !1,
        h = !1;

    e.registerOption = function (a, b, f, g, h) {
      if (f.$attr.ngValue) {
        var q,
            s = NaN;
        f.$observe("value", function (a) {
          var d,
              f = b.prop("selected");
          u(s) && (e.removeOption(q), delete e.selectValueMap[s], d = !0);
          s = Pa(a);
          q = a;
          e.selectValueMap[s] = a;
          e.addOption(a, b);
          b.attr("value", s);
          d && f && c();
        });
      } else g ? f.$observe("value", function (a) {
        e.readValue();
        var d,
            f = b.prop("selected");
        u(q) && (e.removeOption(q), d = !0);
        q = a;
        e.addOption(a, b);
        d && f && c();
      }) : h ? a.$watch(h, function (a, d) {
        f.$set("value", a);
        var g = b.prop("selected");
        d !== a && e.removeOption(d);
        e.addOption(a, b);
        d && g && c();
      }) : e.addOption(f.value, b);

      f.$observe("disabled", function (a) {
        if ("true" === a || a && b.prop("selected")) e.multiple ? c(!0) : (e.ngModelCtrl.$setViewValue(null), e.ngModelCtrl.$render());
      });
      b.on("$destroy", function () {
        var a = e.readValue(),
            b = f.value;
        e.removeOption(b);
        d();
        (e.multiple && a && -1 !== a.indexOf(b) || a === b) && c(!0);
      });
    };
  }],
      Ie = function () {
    return {
      restrict: "E",
      require: ["select", "?ngModel"],
      controller: jh,
      priority: 1,
      link: {
        pre: function (a, b, d, c) {
          var e = c[0],
              f = c[1];

          if (f) {
            if (e.ngModelCtrl = f, b.on("change", function () {
              e.removeUnknownOption();
              a.$apply(function () {
                f.$setViewValue(e.readValue());
              });
            }), d.multiple) {
              e.multiple = !0;

              e.readValue = function () {
                var a = [];
                q(b.find("option"), function (b) {
                  b.selected && !b.disabled && (b = b.value, a.push(b in e.selectValueMap ? e.selectValueMap[b] : b));
                });
                return a;
              };

              e.writeValue = function (a) {
                q(b.find("option"), function (b) {
                  var c = !!a && (-1 !== Array.prototype.indexOf.call(a, b.value) || -1 !== Array.prototype.indexOf.call(a, e.selectValueMap[b.value]));
                  c !== b.selected && Ta(B(b), c);
                });
              };

              var g,
                  h = NaN;
              a.$watch(function () {
                h !== f.$viewValue || sa(g, f.$viewValue) || (g = pa(f.$viewValue), f.$render());
                h = f.$viewValue;
              });

              f.$isEmpty = function (a) {
                return !a || 0 === a.length;
              };
            }
          } else e.registerOption = z;
        },
        post: function (a, b, d, c) {
          var e = c[1];

          if (e) {
            var f = c[0];

            e.$render = function () {
              f.writeValue(e.$viewValue);
            };
          }
        }
      }
    };
  },
      Je = ["$interpolate", function (a) {
    return {
      restrict: "E",
      priority: 100,
      compile: function (b, d) {
        var c, e;
        u(d.ngValue) || (u(d.value) ? c = a(d.value, !0) : (e = a(b.text(), !0)) || d.$set("value", b.text()));
        return function (a, b, d) {
          var k = b.parent();
          (k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e);
        };
      }
    };
  }],
      Zc = function () {
    return {
      restrict: "A",
      require: "?ngModel",
      link: function (a, b, d, c) {
        c && (d.required = !0, c.$validators.required = function (a, b) {
          return !d.required || !c.$isEmpty(b);
        }, d.$observe("required", function () {
          c.$validate();
        }));
      }
    };
  },
      Yc = function () {
    return {
      restrict: "A",
      require: "?ngModel",
      link: function (a, b, d, c) {
        if (c) {
          var e,
              f = d.ngPattern || d.pattern;
          d.$observe("pattern", function (a) {
            F(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
            if (a && !a.test) throw L("ngPattern")("noregexp", f, a, xa(b));
            e = a || void 0;
            c.$validate();
          });

          c.$validators.pattern = function (a, b) {
            return c.$isEmpty(b) || w(e) || e.test(b);
          };
        }
      }
    };
  },
      ad = function () {
    return {
      restrict: "A",
      require: "?ngModel",
      link: function (a, b, d, c) {
        if (c) {
          var e = -1;
          d.$observe("maxlength", function (a) {
            a = Z(a);
            e = da(a) ? -1 : a;
            c.$validate();
          });

          c.$validators.maxlength = function (a, b) {
            return 0 > e || c.$isEmpty(b) || b.length <= e;
          };
        }
      }
    };
  },
      $c = function () {
    return {
      restrict: "A",
      require: "?ngModel",
      link: function (a, b, d, c) {
        if (c) {
          var e = 0;
          d.$observe("minlength", function (a) {
            e = Z(a) || 0;
            c.$validate();
          });

          c.$validators.minlength = function (a, b) {
            return c.$isEmpty(b) || b.length >= e;
          };
        }
      }
    };
  };

  x.angular.bootstrap ? x.console && console.log("WARNING: Tried to load angular more than once.") : (ze(), Ce(ea), ea.module("ngLocale", [], ["$provide", function (a) {
    function b(a) {
      a += "";
      var b = a.indexOf(".");
      return -1 == b ? 0 : a.length - b - 1;
    }

    a.value("$locale", {
      DATETIME_FORMATS: {
        AMPMS: ["AM", "PM"],
        DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        ERANAMES: ["Before Christ", "Anno Domini"],
        ERAS: ["BC", "AD"],
        FIRSTDAYOFWEEK: 6,
        MONTH: "January February March April May June July August September October November December".split(" "),
        SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
        WEEKENDRANGE: [5, 6],
        fullDate: "EEEE, MMMM d, y",
        longDate: "MMMM d, y",
        medium: "MMM d, y h:mm:ss a",
        mediumDate: "MMM d, y",
        mediumTime: "h:mm:ss a",
        "short": "M/d/yy h:mm a",
        shortDate: "M/d/yy",
        shortTime: "h:mm a"
      },
      NUMBER_FORMATS: {
        CURRENCY_SYM: "$",
        DECIMAL_SEP: ".",
        GROUP_SEP: ",",
        PATTERNS: [{
          gSize: 3,
          lgSize: 3,
          maxFrac: 3,
          minFrac: 0,
          minInt: 1,
          negPre: "-",
          negSuf: "",
          posPre: "",
          posSuf: ""
        }, {
          gSize: 3,
          lgSize: 3,
          maxFrac: 2,
          minFrac: 2,
          minInt: 1,
          negPre: "-\u00a4",
          negSuf: "",
          posPre: "\u00a4",
          posSuf: ""
        }]
      },
      id: "en-us",
      localeID: "en_US",
      pluralCat: function (a, c) {
        var e = a | 0,
            f = c;
        void 0 === f && (f = Math.min(b(a), 3));
        Math.pow(10, f);
        return 1 == e && 0 == f ? "one" : "other";
      }
    });
  }]), B(function () {
    ue(x.document, Sc);
  }));
})(window);

!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
/*
 AngularJS v1.6.6
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/

(function (s, d) {
  'use strict';

  function J(d) {
    var k = [];
    w(k, B).chars(d);
    return k.join("");
  }

  var x = d.$$minErr("$sanitize"),
      C,
      k,
      D,
      E,
      p,
      B,
      F,
      G,
      w;
  d.module("ngSanitize", []).provider("$sanitize", function () {
    function g(a, e) {
      var c = {},
          b = a.split(","),
          f;

      for (f = 0; f < b.length; f++) c[e ? p(b[f]) : b[f]] = !0;

      return c;
    }

    function K(a) {
      for (var e = {}, c = 0, b = a.length; c < b; c++) {
        var f = a[c];
        e[f.name] = f.value;
      }

      return e;
    }

    function H(a) {
      return a.replace(/&/g, "&amp;").replace(L, function (a) {
        var c = a.charCodeAt(0);
        a = a.charCodeAt(1);
        return "&#" + (1024 * (c - 55296) + (a - 56320) + 65536) + ";";
      }).replace(M, function (a) {
        return "&#" + a.charCodeAt(0) + ";";
      }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function I(a) {
      for (; a;) {
        if (a.nodeType === s.Node.ELEMENT_NODE) for (var e = a.attributes, c = 0, b = e.length; c < b; c++) {
          var f = e[c],
              h = f.name.toLowerCase();
          if ("xmlns:ns1" === h || 0 === h.lastIndexOf("ns1:", 0)) a.removeAttributeNode(f), c--, b--;
        }
        (e = a.firstChild) && I(e);
        a = t("nextSibling", a);
      }
    }

    function t(a, e) {
      var c = e[a];
      if (c && F.call(e, c)) throw x("elclob", e.outerHTML || e.outerText);
      return c;
    }

    var y = !1;
    this.$get = ["$$sanitizeUri", function (a) {
      y && k(n, z);
      return function (e) {
        var c = [];
        G(e, w(c, function (b, c) {
          return !/^unsafe:/.test(a(b, c));
        }));
        return c.join("");
      };
    }];

    this.enableSvg = function (a) {
      return E(a) ? (y = a, this) : y;
    };

    C = d.bind;
    k = d.extend;
    D = d.forEach;
    E = d.isDefined;
    p = d.lowercase;
    B = d.noop;

    G = function (a, e) {
      null === a || void 0 === a ? a = "" : "string" !== typeof a && (a = "" + a);
      var c = u(a);
      if (!c) return "";
      var b = 5;

      do {
        if (0 === b) throw x("uinput");
        b--;
        a = c.innerHTML;
        c = u(a);
      } while (a !== c.innerHTML);

      for (b = c.firstChild; b;) {
        switch (b.nodeType) {
          case 1:
            e.start(b.nodeName.toLowerCase(), K(b.attributes));
            break;

          case 3:
            e.chars(b.textContent);
        }

        var f;
        if (!(f = b.firstChild) && (1 === b.nodeType && e.end(b.nodeName.toLowerCase()), f = t("nextSibling", b), !f)) for (; null == f;) {
          b = t("parentNode", b);
          if (b === c) break;
          f = t("nextSibling", b);
          1 === b.nodeType && e.end(b.nodeName.toLowerCase());
        }
        b = f;
      }

      for (; b = c.firstChild;) c.removeChild(b);
    };

    w = function (a, e) {
      var c = !1,
          b = C(a, a.push);
      return {
        start: function (a, h) {
          a = p(a);
          !c && A[a] && (c = a);
          c || !0 !== n[a] || (b("<"), b(a), D(h, function (c, h) {
            var d = p(h),
                g = "img" === a && "src" === d || "background" === d;
            !0 !== v[d] || !0 === m[d] && !e(c, g) || (b(" "), b(h), b('="'), b(H(c)), b('"'));
          }), b(">"));
        },
        end: function (a) {
          a = p(a);
          c || !0 !== n[a] || !0 === h[a] || (b("</"), b(a), b(">"));
          a == c && (c = !1);
        },
        chars: function (a) {
          c || b(H(a));
        }
      };
    };

    F = s.Node.prototype.contains || function (a) {
      return !!(this.compareDocumentPosition(a) & 16);
    };

    var L = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        M = /([^#-~ |!])/g,
        h = g("area,br,col,hr,img,wbr"),
        q = g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        l = g("rp,rt"),
        r = k({}, l, q),
        q = k({}, q, g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),
        l = k({}, l, g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
        z = g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
        A = g("script,style"),
        n = k({}, h, q, l, r),
        m = g("background,cite,href,longdesc,src,xlink:href"),
        r = g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
        l = g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
        v = k({}, m, l, r),
        u = function (a, e) {
      function c(b) {
        b = "<remove></remove>" + b;

        try {
          var c = new a.DOMParser().parseFromString(b, "text/html").body;
          c.firstChild.remove();
          return c;
        } catch (e) {}
      }

      function b(a) {
        d.innerHTML = a;
        e.documentMode && I(d);
        return d;
      }

      var h;
      if (e && e.implementation) h = e.implementation.createHTMLDocument("inert");else throw x("noinert");
      var d = (h.documentElement || h.getDocumentElement()).querySelector("body");
      d.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>';
      return d.querySelector("svg") ? (d.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', d.querySelector("svg img") ? c : b) : function (b) {
        b = "<remove></remove>" + b;

        try {
          b = encodeURI(b);
        } catch (c) {
          return;
        }

        var e = new a.XMLHttpRequest();
        e.responseType = "document";
        e.open("GET", "data:text/html;charset=utf-8," + b, !1);
        e.send(null);
        b = e.response.body;
        b.firstChild.remove();
        return b;
      };
    }(s, s.document);
  }).info({
    angularVersion: "1.6.6"
  });
  d.module("ngSanitize").filter("linky", ["$sanitize", function (g) {
    var k = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
        p = /^mailto:/i,
        s = d.$$minErr("linky"),
        t = d.isDefined,
        y = d.isFunction,
        w = d.isObject,
        x = d.isString;
    return function (d, q, l) {
      function r(a) {
        a && m.push(J(a));
      }

      function z(a, d) {
        var c,
            b = A(a);
        m.push("<a ");

        for (c in b) m.push(c + '="' + b[c] + '" ');

        !t(q) || "target" in b || m.push('target="', q, '" ');
        m.push('href="', a.replace(/"/g, "&quot;"), '">');
        r(d);
        m.push("</a>");
      }

      if (null == d || "" === d) return d;
      if (!x(d)) throw s("notstring", d);

      for (var A = y(l) ? l : w(l) ? function () {
        return l;
      } : function () {
        return {};
      }, n = d, m = [], v, u; d = n.match(k);) v = d[0], d[2] || d[4] || (v = (d[3] ? "http://" : "mailto:") + v), u = d.index, r(n.substr(0, u)), z(v, d[0].replace(p, "")), n = n.substring(u + d[0].length);

      r(n);
      return g(m.join(""));
    };
  }]);
})(window, window.angular);
/*!
 * angular-translate - v2.15.2 - 2017-06-22
 * 
 * Copyright (c) 2017 The angular-translate team, Pascal Precht; Licensed MIT
 */


!function (a, b) {
  "function" == typeof define && define.amd ? define([], function () {
    return b();
  }) : "object" == typeof module && module.exports ? module.exports = b() : b();
}(0, function () {
  function a(a) {
    "use strict";

    var b = a.storageKey(),
        c = a.storage(),
        d = function () {
      var d = a.preferredLanguage();
      angular.isString(d) ? a.use(d) : c.put(b, a.use());
    };

    d.displayName = "fallbackFromIncorrectStorageValue", c ? c.get(b) ? a.use(c.get(b)).catch(d) : d() : angular.isString(a.preferredLanguage()) && a.use(a.preferredLanguage());
  }

  function b() {
    "use strict";

    var a,
        b,
        c,
        d = null,
        e = !1,
        f = !1;
    c = {
      sanitize: function (a, b) {
        return "text" === b && (a = h(a)), a;
      },
      escape: function (a, b) {
        return "text" === b && (a = g(a)), a;
      },
      sanitizeParameters: function (a, b) {
        return "params" === b && (a = j(a, h)), a;
      },
      escapeParameters: function (a, b) {
        return "params" === b && (a = j(a, g)), a;
      },
      sce: function (a, b, c) {
        return "text" === b ? a = i(a) : "params" === b && "filter" !== c && (a = j(a, g)), a;
      },
      sceParameters: function (a, b) {
        return "params" === b && (a = j(a, i)), a;
      }
    }, c.escaped = c.escapeParameters, this.addStrategy = function (a, b) {
      return c[a] = b, this;
    }, this.removeStrategy = function (a) {
      return delete c[a], this;
    }, this.useStrategy = function (a) {
      return e = !0, d = a, this;
    }, this.$get = ["$injector", "$log", function (g, h) {
      var i = {},
          j = function (a, b, d, e) {
        return angular.forEach(e, function (e) {
          if (angular.isFunction(e)) a = e(a, b, d);else if (angular.isFunction(c[e])) a = c[e](a, b, d);else {
            if (!angular.isString(c[e])) throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '" + e + "'");
            if (!i[c[e]]) try {
              i[c[e]] = g.get(c[e]);
            } catch (a) {
              throw i[c[e]] = function () {}, new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '" + e + "'");
            }
            a = i[c[e]](a, b, d);
          }
        }), a;
      },
          k = function () {
        e || f || (h.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."), f = !0);
      };

      return g.has("$sanitize") && (a = g.get("$sanitize")), g.has("$sce") && (b = g.get("$sce")), {
        useStrategy: function (a) {
          return function (b) {
            a.useStrategy(b);
          };
        }(this),
        sanitize: function (a, b, c, e) {
          if (d || k(), c || null === c || (c = d), !c) return a;
          e || (e = "service");
          var f = angular.isArray(c) ? c : [c];
          return j(a, b, e, f);
        }
      };
    }];

    var g = function (a) {
      var b = angular.element("<div></div>");
      return b.text(a), b.html();
    },
        h = function (b) {
      if (!a) throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");
      return a(b);
    },
        i = function (a) {
      if (!b) throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sce service.");
      return b.trustAsHtml(a);
    },
        j = function (a, b, c) {
      if (angular.isDate(a)) return a;

      if (angular.isObject(a)) {
        var d = angular.isArray(a) ? [] : {};

        if (c) {
          if (c.indexOf(a) > -1) throw new Error("pascalprecht.translate.$translateSanitization: Error cannot interpolate parameter due recursive object");
        } else c = [];

        return c.push(a), angular.forEach(a, function (a, e) {
          angular.isFunction(a) || (d[e] = j(a, b, c));
        }), c.splice(-1, 1), d;
      }

      return angular.isNumber(a) ? a : !0 === a || !1 === a ? a : angular.isUndefined(a) || null === a ? a : b(a);
    };
  }

  function c(a, b, c, d) {
    "use strict";

    var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = {},
        v = [],
        w = a,
        x = [],
        y = "translate-cloak",
        z = !1,
        A = !1,
        B = ".",
        C = !1,
        D = !1,
        E = 0,
        F = !0,
        G = "default",
        H = {
      default: function (a) {
        return (a || "").split("-").join("_");
      },
      java: function (a) {
        var b = (a || "").split("-").join("_"),
            c = b.split("_");
        return c.length > 1 ? c[0].toLowerCase() + "_" + c[1].toUpperCase() : b;
      },
      bcp47: function (a) {
        var b = (a || "").split("_").join("-"),
            c = b.split("-");
        return c.length > 1 ? c[0].toLowerCase() + "-" + c[1].toUpperCase() : b;
      },
      "iso639-1": function (a) {
        return (a || "").split("_").join("-").split("-")[0].toLowerCase();
      }
    },
        I = function () {
      if (angular.isFunction(d.getLocale)) return d.getLocale();
      var a,
          c,
          e = b.$get().navigator,
          f = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
      if (angular.isArray(e.languages)) for (a = 0; a < e.languages.length; a++) if ((c = e.languages[a]) && c.length) return c;

      for (a = 0; a < f.length; a++) if ((c = e[f[a]]) && c.length) return c;

      return null;
    };

    I.displayName = "angular-translate/service: getFirstBrowserLanguage";

    var J = function () {
      var a = I() || "";
      return H[G] && (a = H[G](a)), a;
    };

    J.displayName = "angular-translate/service: getLocale";

    var K = function (a, b) {
      for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;

      return -1;
    },
        L = function () {
      return this.toString().replace(/^\s+|\s+$/g, "");
    },
        M = function (a) {
      if (a) {
        for (var b = [], c = angular.lowercase(a), d = 0, e = v.length; d < e; d++) b.push(angular.lowercase(v[d]));

        if (K(b, c) > -1) return a;

        if (f) {
          var g;

          for (var h in f) if (f.hasOwnProperty(h)) {
            var i = !1,
                j = Object.prototype.hasOwnProperty.call(f, h) && angular.lowercase(h) === angular.lowercase(a);
            if ("*" === h.slice(-1) && (i = h.slice(0, -1) === a.slice(0, h.length - 1)), (j || i) && (g = f[h], K(b, angular.lowercase(g)) > -1)) return g;
          }
        }

        var k = a.split("_");
        return k.length > 1 && K(b, angular.lowercase(k[0])) > -1 ? k[0] : void 0;
      }
    },
        N = function (a, b) {
      if (!a && !b) return u;

      if (a && !b) {
        if (angular.isString(a)) return u[a];
      } else angular.isObject(u[a]) || (u[a] = {}), angular.extend(u[a], O(b));

      return this;
    };

    this.translations = N, this.cloakClassName = function (a) {
      return a ? (y = a, this) : y;
    }, this.nestedObjectDelimeter = function (a) {
      return a ? (B = a, this) : B;
    };

    var O = function (a, b, c, d) {
      var e, f, g, h;
      b || (b = []), c || (c = {});

      for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (h = a[e], angular.isObject(h) ? O(h, b.concat(e), c, e) : (f = b.length ? "" + b.join(B) + B + e : e, b.length && e === d && (g = "" + b.join(B), c[g] = "@:" + f), c[f] = h));

      return c;
    };

    O.displayName = "flatObject", this.addInterpolation = function (a) {
      return x.push(a), this;
    }, this.useMessageFormatInterpolation = function () {
      return this.useInterpolation("$translateMessageFormatInterpolation");
    }, this.useInterpolation = function (a) {
      return n = a, this;
    }, this.useSanitizeValueStrategy = function (a) {
      return c.useStrategy(a), this;
    }, this.preferredLanguage = function (a) {
      return a ? (P(a), this) : e;
    };

    var P = function (a) {
      return a && (e = a), e;
    };

    this.translationNotFoundIndicator = function (a) {
      return this.translationNotFoundIndicatorLeft(a), this.translationNotFoundIndicatorRight(a), this;
    }, this.translationNotFoundIndicatorLeft = function (a) {
      return a ? (q = a, this) : q;
    }, this.translationNotFoundIndicatorRight = function (a) {
      return a ? (r = a, this) : r;
    }, this.fallbackLanguage = function (a) {
      return Q(a), this;
    };

    var Q = function (a) {
      return a ? (angular.isString(a) ? (h = !0, g = [a]) : angular.isArray(a) && (h = !1, g = a), angular.isString(e) && K(g, e) < 0 && g.push(e), this) : h ? g[0] : g;
    };

    this.use = function (a) {
      if (a) {
        if (!u[a] && !o) throw new Error("$translateProvider couldn't find translationTable for langKey: '" + a + "'");
        return i = a, this;
      }

      return i;
    }, this.resolveClientLocale = function () {
      return J();
    };

    var R = function (a) {
      return a ? (w = a, this) : l ? l + w : w;
    };

    this.storageKey = R, this.useUrlLoader = function (a, b) {
      return this.useLoader("$translateUrlLoader", angular.extend({
        url: a
      }, b));
    }, this.useStaticFilesLoader = function (a) {
      return this.useLoader("$translateStaticFilesLoader", a);
    }, this.useLoader = function (a, b) {
      return o = a, p = b || {}, this;
    }, this.useLocalStorage = function () {
      return this.useStorage("$translateLocalStorage");
    }, this.useCookieStorage = function () {
      return this.useStorage("$translateCookieStorage");
    }, this.useStorage = function (a) {
      return k = a, this;
    }, this.storagePrefix = function (a) {
      return a ? (l = a, this) : a;
    }, this.useMissingTranslationHandlerLog = function () {
      return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog");
    }, this.useMissingTranslationHandler = function (a) {
      return m = a, this;
    }, this.usePostCompiling = function (a) {
      return z = !!a, this;
    }, this.forceAsyncReload = function (a) {
      return A = !!a, this;
    }, this.uniformLanguageTag = function (a) {
      return a ? angular.isString(a) && (a = {
        standard: a
      }) : a = {}, G = a.standard, this;
    }, this.determinePreferredLanguage = function (a) {
      var b = a && angular.isFunction(a) ? a() : J();
      return e = v.length ? M(b) || b : b, this;
    }, this.registerAvailableLanguageKeys = function (a, b) {
      return a ? (v = a, b && (f = b), this) : v;
    }, this.useLoaderCache = function (a) {
      return !1 === a ? s = void 0 : !0 === a ? s = !0 : void 0 === a ? s = "$translationCache" : a && (s = a), this;
    }, this.directivePriority = function (a) {
      return void 0 === a ? E : (E = a, this);
    }, this.statefulFilter = function (a) {
      return void 0 === a ? F : (F = a, this);
    }, this.postProcess = function (a) {
      return t = a || void 0, this;
    }, this.keepContent = function (a) {
      return D = !!a, this;
    }, this.$get = ["$log", "$injector", "$rootScope", "$q", function (a, b, c, d) {
      var f,
          l,
          G,
          H = b.get(n || "$translateDefaultInterpolation"),
          I = !1,
          S = {},
          T = {},
          U = function (a, b, c, h, j) {
        !i && e && (i = e);
        var m = j && j !== i ? M(j) || j : i;

        if (j && ja(j), angular.isArray(a)) {
          return function (a) {
            for (var e = {}, f = [], g = 0, i = a.length; g < i; g++) f.push(function (a) {
              var f = d.defer(),
                  g = function (b) {
                e[a] = b, f.resolve([a, b]);
              };

              return U(a, b, c, h, j).then(g, g), f.promise;
            }(a[g]));

            return d.all(f).then(function () {
              return e;
            });
          }(a);
        }

        var n = d.defer();
        a && (a = L.apply(a));

        var o = function () {
          var a = e ? T[e] : T[m];

          if (l = 0, k && !a) {
            var b = f.get(w);

            if (a = T[b], g && g.length) {
              var c = K(g, b);
              l = 0 === c ? 1 : 0, K(g, e) < 0 && g.push(e);
            }
          }

          return a;
        }();

        if (o) {
          var p = function () {
            j || (m = i), fa(a, b, c, h, m).then(n.resolve, n.reject);
          };

          p.displayName = "promiseResolved", o.finally(p).catch(angular.noop);
        } else fa(a, b, c, h, m).then(n.resolve, n.reject);

        return n.promise;
      },
          V = function (a) {
        return q && (a = [q, a].join(" ")), r && (a = [a, r].join(" ")), a;
      },
          W = function (a) {
        i = a, k && f.put(U.storageKey(), i), c.$emit("$translateChangeSuccess", {
          language: a
        }), H.setLocale(i);

        var b = function (a, b) {
          S[b].setLocale(i);
        };

        b.displayName = "eachInterpolatorLocaleSetter", angular.forEach(S, b), c.$emit("$translateChangeEnd", {
          language: a
        });
      },
          X = function (a) {
        if (!a) throw "No language key specified for loading.";
        var e = d.defer();
        c.$emit("$translateLoadingStart", {
          language: a
        }), I = !0;
        var f = s;
        "string" == typeof f && (f = b.get(f));

        var g = angular.extend({}, p, {
          key: a,
          $http: angular.extend({}, {
            cache: f
          }, p.$http)
        }),
            h = function (b) {
          var d = {};
          c.$emit("$translateLoadingSuccess", {
            language: a
          }), angular.isArray(b) ? angular.forEach(b, function (a) {
            angular.extend(d, O(a));
          }) : angular.extend(d, O(b)), I = !1, e.resolve({
            key: a,
            table: d
          }), c.$emit("$translateLoadingEnd", {
            language: a
          });
        };

        h.displayName = "onLoaderSuccess";

        var i = function (a) {
          c.$emit("$translateLoadingError", {
            language: a
          }), e.reject(a), c.$emit("$translateLoadingEnd", {
            language: a
          });
        };

        return i.displayName = "onLoaderError", b.get(o)(g).then(h, i), e.promise;
      };

      if (k && (f = b.get(k), !f.get || !f.put)) throw new Error("Couldn't use storage '" + k + "', missing get() or put() method!");

      if (x.length) {
        var Y = function (a) {
          var c = b.get(a);
          c.setLocale(e || i), S[c.getInterpolationIdentifier()] = c;
        };

        Y.displayName = "interpolationFactoryAdder", angular.forEach(x, Y);
      }

      var Z = function (a) {
        var b = d.defer();
        if (Object.prototype.hasOwnProperty.call(u, a)) b.resolve(u[a]);else if (T[a]) {
          var c = function (a) {
            N(a.key, a.table), b.resolve(a.table);
          };

          c.displayName = "translationTableResolver", T[a].then(c, b.reject);
        } else b.reject();
        return b.promise;
      },
          $ = function (a, b, c, e, f) {
        var g = d.defer(),
            h = function (d) {
          if (Object.prototype.hasOwnProperty.call(d, b) && null !== d[b]) {
            e.setLocale(a);
            var h = d[b];
            if ("@:" === h.substr(0, 2)) $(a, h.substr(2), c, e, f).then(g.resolve, g.reject);else {
              var j = e.interpolate(d[b], c, "service", f, b);
              j = ia(b, d[b], j, c, a), g.resolve(j);
            }
            e.setLocale(i);
          } else g.reject();
        };

        return h.displayName = "fallbackTranslationResolver", Z(a).then(h, g.reject), g.promise;
      },
          _ = function (a, b, c, d, e) {
        var f,
            g = u[a];

        if (g && Object.prototype.hasOwnProperty.call(g, b) && null !== g[b]) {
          if (d.setLocale(a), f = d.interpolate(g[b], c, "filter", e, b), f = ia(b, g[b], f, c, a, e), !angular.isString(f) && angular.isFunction(f.$$unwrapTrustedValue)) {
            var h = f.$$unwrapTrustedValue();
            if ("@:" === h.substr(0, 2)) return _(a, h.substr(2), c, d, e);
          } else if ("@:" === f.substr(0, 2)) return _(a, f.substr(2), c, d, e);

          d.setLocale(i);
        }

        return f;
      },
          aa = function (a, c, d, e) {
        return m ? b.get(m)(a, i, c, d, e) : a;
      },
          ba = function (a, b, c, e, f, h) {
        var i = d.defer();

        if (a < g.length) {
          var j = g[a];
          $(j, b, c, e, h).then(function (a) {
            i.resolve(a);
          }, function () {
            return ba(a + 1, b, c, e, f, h).then(i.resolve, i.reject);
          });
        } else if (f) i.resolve(f);else {
          var k = aa(b, c, f);
          m && k ? i.resolve(k) : i.reject(V(b));
        }

        return i.promise;
      },
          ca = function (a, b, c, d, e) {
        var f;

        if (a < g.length) {
          var h = g[a];
          f = _(h, b, c, d, e), f || "" === f || (f = ca(a + 1, b, c, d));
        }

        return f;
      },
          da = function (a, b, c, d, e) {
        return ba(G > 0 ? G : l, a, b, c, d, e);
      },
          ea = function (a, b, c, d) {
        return ca(G > 0 ? G : l, a, b, c, d);
      },
          fa = function (a, b, c, e, f, h) {
        var i = d.defer(),
            j = f ? u[f] : u,
            k = c ? S[c] : H;

        if (j && Object.prototype.hasOwnProperty.call(j, a) && null !== j[a]) {
          var l = j[a];
          if ("@:" === l.substr(0, 2)) U(l.substr(2), b, c, e, f).then(i.resolve, i.reject);else {
            var n = k.interpolate(l, b, "service", h, a);
            n = ia(a, l, n, b, f), i.resolve(n);
          }
        } else {
          var o;
          m && !I && (o = aa(a, b, e)), f && g && g.length ? da(a, b, k, e, h).then(function (a) {
            i.resolve(a);
          }, function (a) {
            i.reject(V(a));
          }) : m && !I && o ? e ? i.resolve(e) : i.resolve(o) : e ? i.resolve(e) : i.reject(V(a));
        }

        return i.promise;
      },
          ga = function (a, b, c, d, e) {
        var f,
            h = d ? u[d] : u,
            i = H;

        if (S && Object.prototype.hasOwnProperty.call(S, c) && (i = S[c]), h && Object.prototype.hasOwnProperty.call(h, a) && null !== h[a]) {
          var j = h[a];
          "@:" === j.substr(0, 2) ? f = ga(j.substr(2), b, c, d, e) : (f = i.interpolate(j, b, "filter", e, a), f = ia(a, j, f, b, d, e));
        } else {
          var k;
          m && !I && (k = aa(a, b, e)), d && g && g.length ? (l = 0, f = ea(a, b, i, e)) : f = m && !I && k ? k : V(a);
        }

        return f;
      },
          ha = function (a) {
        j === a && (j = void 0), T[a] = void 0;
      },
          ia = function (a, c, d, e, f, g) {
        var h = t;
        return h && ("string" == typeof h && (h = b.get(h)), h) ? h(a, c, d, e, f, g) : d;
      },
          ja = function (a) {
        u[a] || !o || T[a] || (T[a] = X(a).then(function (a) {
          return N(a.key, a.table), a;
        }));
      };

      U.preferredLanguage = function (a) {
        return a && P(a), e;
      }, U.cloakClassName = function () {
        return y;
      }, U.nestedObjectDelimeter = function () {
        return B;
      }, U.fallbackLanguage = function (a) {
        if (void 0 !== a && null !== a) {
          if (Q(a), o && g && g.length) for (var b = 0, c = g.length; b < c; b++) T[g[b]] || (T[g[b]] = X(g[b]));
          U.use(U.use());
        }

        return h ? g[0] : g;
      }, U.useFallbackLanguage = function (a) {
        if (void 0 !== a && null !== a) if (a) {
          var b = K(g, a);
          b > -1 && (G = b);
        } else G = 0;
      }, U.proposedLanguage = function () {
        return j;
      }, U.storage = function () {
        return f;
      }, U.negotiateLocale = M, U.use = function (a) {
        if (!a) return i;
        var b = d.defer();
        b.promise.then(null, angular.noop), c.$emit("$translateChangeStart", {
          language: a
        });
        var e = M(a);
        return v.length > 0 && !e ? d.reject(a) : (e && (a = e), j = a, !A && u[a] || !o || T[a] ? T[a] ? T[a].then(function (a) {
          return j === a.key && W(a.key), b.resolve(a.key), a;
        }, function (a) {
          return !i && g && g.length > 0 && g[0] !== a ? U.use(g[0]).then(b.resolve, b.reject) : b.reject(a);
        }) : (b.resolve(a), W(a)) : (T[a] = X(a).then(function (c) {
          return N(c.key, c.table), b.resolve(c.key), j === a && W(c.key), c;
        }, function (a) {
          return c.$emit("$translateChangeError", {
            language: a
          }), b.reject(a), c.$emit("$translateChangeEnd", {
            language: a
          }), d.reject(a);
        }), T[a].finally(function () {
          ha(a);
        }).catch(angular.noop)), b.promise);
      }, U.resolveClientLocale = function () {
        return J();
      }, U.storageKey = function () {
        return R();
      }, U.isPostCompilingEnabled = function () {
        return z;
      }, U.isForceAsyncReloadEnabled = function () {
        return A;
      }, U.isKeepContent = function () {
        return D;
      }, U.refresh = function (a) {
        function b(a) {
          var b = X(a);
          return T[a] = b, b.then(function (b) {
            u[a] = {}, N(a, b.table), f[a] = !0;
          }, angular.noop), b;
        }

        if (!o) throw new Error("Couldn't refresh translation table, no loader registered!");
        c.$emit("$translateRefreshStart", {
          language: a
        });
        var e = d.defer(),
            f = {};
        if (e.promise.then(function () {
          for (var a in u) u.hasOwnProperty(a) && (a in f || delete u[a]);

          i && W(i);
        }, angular.noop).finally(function () {
          c.$emit("$translateRefreshEnd", {
            language: a
          });
        }), a) u[a] ? b(a).then(e.resolve, e.reject) : e.reject();else {
          var h = g && g.slice() || [];
          i && -1 === h.indexOf(i) && h.push(i), d.all(h.map(b)).then(e.resolve, e.reject);
        }
        return e.promise;
      }, U.instant = function (a, b, c, d, f) {
        var h = d && d !== i ? M(d) || d : i;
        if (null === a || angular.isUndefined(a)) return a;

        if (d && ja(d), angular.isArray(a)) {
          for (var j = {}, k = 0, l = a.length; k < l; k++) j[a[k]] = U.instant(a[k], b, c, d, f);

          return j;
        }

        if (angular.isString(a) && a.length < 1) return a;
        a && (a = L.apply(a));
        var n,
            o = [];
        e && o.push(e), h && o.push(h), g && g.length && (o = o.concat(g));

        for (var p = 0, s = o.length; p < s; p++) {
          var t = o[p];
          if (u[t] && void 0 !== u[t][a] && (n = ga(a, b, c, h, f)), void 0 !== n) break;
        }

        if (!n && "" !== n) if (q || r) n = V(a);else {
          n = H.interpolate(a, b, "filter", f);
          var v;
          m && !I && (v = aa(a, b, f)), m && !I && v && (n = v);
        }
        return n;
      }, U.versionInfo = function () {
        return "2.15.2";
      }, U.loaderCache = function () {
        return s;
      }, U.directivePriority = function () {
        return E;
      }, U.statefulFilter = function () {
        return F;
      }, U.isReady = function () {
        return C;
      };
      var ka = d.defer();
      ka.promise.then(function () {
        C = !0;
      }), U.onReady = function (a) {
        var b = d.defer();
        return angular.isFunction(a) && b.promise.then(a), C ? b.resolve() : ka.promise.then(b.resolve), b.promise;
      }, U.getAvailableLanguageKeys = function () {
        return v.length > 0 ? v : null;
      }, U.getTranslationTable = function (a) {
        return a = a || U.use(), a && u[a] ? angular.copy(u[a]) : null;
      };
      var la = c.$on("$translateReady", function () {
        ka.resolve(), la(), la = null;
      }),
          ma = c.$on("$translateChangeEnd", function () {
        ka.resolve(), ma(), ma = null;
      });

      if (o) {
        if (angular.equals(u, {}) && U.use() && U.use(U.use()), g && g.length) for (var na = function (a) {
          return N(a.key, a.table), c.$emit("$translateChangeEnd", {
            language: a.key
          }), a;
        }, oa = 0, pa = g.length; oa < pa; oa++) {
          var qa = g[oa];
          !A && u[qa] || (T[qa] = X(qa).then(na));
        }
      } else c.$emit("$translateReady", {
        language: U.use()
      });

      return U;
    }];
  }

  function d(a, b) {
    "use strict";

    var c,
        d = {};
    return d.setLocale = function (a) {
      c = a;
    }, d.getInterpolationIdentifier = function () {
      return "default";
    }, d.useSanitizeValueStrategy = function (a) {
      return b.useStrategy(a), this;
    }, d.interpolate = function (c, d, e, f, g) {
      d = d || {}, d = b.sanitize(d, "params", f, e);
      var h;
      return angular.isNumber(c) ? h = "" + c : angular.isString(c) ? (h = a(c)(d), h = b.sanitize(h, "text", f, e)) : h = "", h;
    }, d;
  }

  function e(a, b, c, d, e) {
    "use strict";

    var g = function () {
      return this.toString().replace(/^\s+|\s+$/g, "");
    };

    return {
      restrict: "AE",
      scope: !0,
      priority: a.directivePriority(),
      compile: function (h, i) {
        var j = i.translateValues ? i.translateValues : void 0,
            k = i.translateInterpolation ? i.translateInterpolation : void 0,
            l = h[0].outerHTML.match(/translate-value-+/i),
            m = "^(.*)(" + b.startSymbol() + ".*" + b.endSymbol() + ")(.*)",
            n = "^(.*)" + b.startSymbol() + "(.*)" + b.endSymbol() + "(.*)";
        return function (h, o, p) {
          h.interpolateParams = {}, h.preText = "", h.postText = "", h.translateNamespace = f(h);

          var q = {},
              r = function (a) {
            if (angular.isFunction(r._unwatchOld) && (r._unwatchOld(), r._unwatchOld = void 0), angular.equals(a, "") || !angular.isDefined(a)) {
              var c = g.apply(o.text()),
                  d = c.match(m);

              if (angular.isArray(d)) {
                h.preText = d[1], h.postText = d[3], q.translate = b(d[2])(h.$parent);
                var e = c.match(n);
                angular.isArray(e) && e[2] && e[2].length && (r._unwatchOld = h.$watch(e[2], function (a) {
                  q.translate = a, v();
                }));
              } else q.translate = c || void 0;
            } else q.translate = a;

            v();
          };

          !function (a, b, c) {
            if (b.translateValues && angular.extend(a, d(b.translateValues)(h.$parent)), l) for (var e in c) if (Object.prototype.hasOwnProperty.call(b, e) && "translateValue" === e.substr(0, 14) && "translateValues" !== e) {
              var f = angular.lowercase(e.substr(14, 1)) + e.substr(15);
              a[f] = c[e];
            }
          }(h.interpolateParams, p, i);
          var s = !0;
          p.$observe("translate", function (a) {
            void 0 === a ? r("") : "" === a && s || (q.translate = a, v()), s = !1;
          });

          for (var t in p) p.hasOwnProperty(t) && "translateAttr" === t.substr(0, 13) && t.length > 13 && function (a) {
            p.$observe(a, function (b) {
              q[a] = b, v();
            });
          }(t);

          if (p.$observe("translateDefault", function (a) {
            h.defaultText = a, v();
          }), j && p.$observe("translateValues", function (a) {
            a && h.$parent.$watch(function () {
              angular.extend(h.interpolateParams, d(a)(h.$parent));
            });
          }), l) {
            for (var u in p) Object.prototype.hasOwnProperty.call(p, u) && "translateValue" === u.substr(0, 14) && "translateValues" !== u && function (a) {
              p.$observe(a, function (b) {
                var c = angular.lowercase(a.substr(14, 1)) + a.substr(15);
                h.interpolateParams[c] = b;
              });
            }(u);
          }

          var v = function () {
            for (var a in q) q.hasOwnProperty(a) && void 0 !== q[a] && w(a, q[a], h, h.interpolateParams, h.defaultText, h.translateNamespace);
          },
              w = function (b, c, d, e, f, g) {
            c ? (g && "." === c.charAt(0) && (c = g + c), a(c, e, k, f, d.translateLanguage).then(function (a) {
              x(a, d, !0, b);
            }, function (a) {
              x(a, d, !1, b);
            })) : x(c, d, !1, b);
          },
              x = function (b, d, e, f) {
            if (e || void 0 !== d.defaultText && (b = d.defaultText), "translate" === f) {
              (e || !e && !a.isKeepContent() && void 0 === p.translateKeepContent) && o.empty().append(d.preText + b + d.postText);
              var g = a.isPostCompilingEnabled(),
                  h = void 0 !== i.translateCompile,
                  j = h && "false" !== i.translateCompile;
              (g && !h || j) && c(o.contents())(d);
            } else {
              var k = p.$attr[f];
              "data-" === k.substr(0, 5) && (k = k.substr(5)), k = k.substr(15), o.attr(k, b);
            }
          };

          (j || l || p.translateDefault) && h.$watch("interpolateParams", v, !0), h.$on("translateLanguageChanged", v);
          var y = e.$on("$translateChangeSuccess", v);
          o.text().length ? r(p.translate ? p.translate : "") : p.translate && r(p.translate), v(), h.$on("$destroy", y);
        };
      }
    };
  }

  function f(a) {
    "use strict";

    return a.translateNamespace ? a.translateNamespace : a.$parent ? f(a.$parent) : void 0;
  }

  function g(a, b) {
    "use strict";

    return {
      restrict: "A",
      priority: a.directivePriority(),
      link: function (c, d, e) {
        var f,
            g,
            i = {},
            j = function () {
          angular.forEach(f, function (b, f) {
            b && (i[f] = !0, c.translateNamespace && "." === b.charAt(0) && (b = c.translateNamespace + b), a(b, g, e.translateInterpolation, void 0, c.translateLanguage).then(function (a) {
              d.attr(f, a);
            }, function (a) {
              d.attr(f, a);
            }));
          }), angular.forEach(i, function (a, b) {
            f[b] || (d.removeAttr(b), delete i[b]);
          });
        };

        h(c, e.translateAttr, function (a) {
          f = a;
        }, j), h(c, e.translateValues, function (a) {
          g = a;
        }, j), e.translateValues && c.$watch(e.translateValues, j, !0), c.$on("translateLanguageChanged", j);
        var k = b.$on("$translateChangeSuccess", j);
        j(), c.$on("$destroy", k);
      }
    };
  }

  function h(a, b, c, d) {
    "use strict";

    b && ("::" === b.substr(0, 2) ? b = b.substr(2) : a.$watch(b, function (a) {
      c(a), d();
    }, !0), c(a.$eval(b)));
  }

  function i(a, b) {
    "use strict";

    return {
      compile: function (c) {
        var d = function (b) {
          b.addClass(a.cloakClassName());
        },
            e = function (b) {
          b.removeClass(a.cloakClassName());
        };

        return d(c), function (c, f, g) {
          var h = e.bind(this, f),
              i = d.bind(this, f);
          g.translateCloak && g.translateCloak.length ? (g.$observe("translateCloak", function (b) {
            a(b).then(h, i);
          }), b.$on("$translateChangeSuccess", function () {
            a(g.translateCloak).then(h, i);
          })) : a.onReady(h);
        };
      }
    };
  }

  function j() {
    "use strict";

    return {
      restrict: "A",
      scope: !0,
      compile: function () {
        return {
          pre: function (a, b, c) {
            a.translateNamespace = f(a), a.translateNamespace && "." === c.translateNamespace.charAt(0) ? a.translateNamespace += c.translateNamespace : a.translateNamespace = c.translateNamespace;
          }
        };
      }
    };
  }

  function f(a) {
    "use strict";

    return a.translateNamespace ? a.translateNamespace : a.$parent ? f(a.$parent) : void 0;
  }

  function k() {
    "use strict";

    return {
      restrict: "A",
      scope: !0,
      compile: function () {
        return function (a, b, c) {
          c.$observe("translateLanguage", function (b) {
            a.translateLanguage = b;
          }), a.$watch("translateLanguage", function () {
            a.$broadcast("translateLanguageChanged");
          });
        };
      }
    };
  }

  function l(a, b) {
    "use strict";

    var c = function (c, d, e, f) {
      if (!angular.isObject(d)) {
        var g = this || {
          __SCOPE_IS_NOT_AVAILABLE: "More info at https://github.com/angular/angular.js/commit/8863b9d04c722b278fa93c5d66ad1e578ad6eb1f"
        };
        d = a(d)(g);
      }

      return b.instant(c, d, e, f);
    };

    return b.statefulFilter() && (c.$stateful = !0), c;
  }

  function m(a) {
    "use strict";

    return a("translations");
  }

  return a.$inject = ["$translate"], c.$inject = ["$STORAGE_KEY", "$windowProvider", "$translateSanitizationProvider", "pascalprechtTranslateOverrider"], d.$inject = ["$interpolate", "$translateSanitization"], e.$inject = ["$translate", "$interpolate", "$compile", "$parse", "$rootScope"], g.$inject = ["$translate", "$rootScope"], i.$inject = ["$translate", "$rootScope"], l.$inject = ["$parse", "$translate"], m.$inject = ["$cacheFactory"], angular.module("pascalprecht.translate", ["ng"]).run(a), a.displayName = "runTranslate", angular.module("pascalprecht.translate").provider("$translateSanitization", b), angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider", {}).provider("$translate", c), c.displayName = "displayName", angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", d), d.displayName = "$translateDefaultInterpolation", angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY"), angular.module("pascalprecht.translate").directive("translate", e), e.displayName = "translateDirective", angular.module("pascalprecht.translate").directive("translateAttr", g), g.displayName = "translateAttrDirective", angular.module("pascalprecht.translate").directive("translateCloak", i), i.displayName = "translateCloakDirective", angular.module("pascalprecht.translate").directive("translateNamespace", j), j.displayName = "translateNamespaceDirective", angular.module("pascalprecht.translate").directive("translateLanguage", k), k.displayName = "translateLanguageDirective", angular.module("pascalprecht.translate").filter("translate", l), l.displayName = "translateFilterFactory", angular.module("pascalprecht.translate").factory("$translationCache", m), m.displayName = "$translationCache", "pascalprecht.translate";
});
/*!
 * angular-translate - v2.15.2 - 2017-06-22
 *
 * Copyright (c) 2017 The angular-translate team, Pascal Precht; Licensed MIT
 */

!function (a, b) {
  "function" == typeof define && define.amd ? define([], function () {
    return b();
  }) : "object" == typeof module && module.exports ? module.exports = b() : b();
}(0, function () {
  function a(a, b) {
    "use strict";

    return function (c) {
      if (!(c && (angular.isArray(c.files) || angular.isString(c.prefix) && angular.isString(c.suffix)))) throw new Error("Couldn't load static files, no files and prefix or suffix specified!");
      c.files || (c.files = [{
        prefix: c.prefix,
        suffix: c.suffix
      }]);

      for (var d = [], e = c.files.length, f = 0; f < e; f++) d.push(function (d) {
        if (!d || !angular.isString(d.prefix) || !angular.isString(d.suffix)) throw new Error("Couldn't load static file, no prefix or suffix specified!");
        var e = [d.prefix, c.key, d.suffix].join("");
        return angular.isObject(c.fileMap) && c.fileMap[e] && (e = c.fileMap[e]), b(angular.extend({
          url: e,
          method: "GET"
        }, c.$http)).then(function (a) {
          return a.data;
        }, function () {
          return a.reject(c.key);
        });
      }({
        prefix: c.files[f].prefix,
        key: c.key,
        suffix: c.files[f].suffix
      }));

      return a.all(d).then(function (a) {
        for (var b = a.length, c = {}, d = 0; d < b; d++) for (var e in a[d]) c[e] = a[d][e];

        return c;
      });
    };
  }

  return a.$inject = ["$q", "$http"], angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader", a), a.displayName = "$translateStaticFilesLoader", "pascalprecht.translate";
});
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/

!function () {
  "use strict";

  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element) throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1;
  }

  var e = 0,
      i = {};
  t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }, t.prototype.trigger = function (t) {
    this.enabled && this.callback && this.callback.apply(this, t);
  }, t.prototype.destroy = function () {
    this.context.remove(this), this.group.remove(this), delete i[this.key];
  }, t.prototype.disable = function () {
    return this.enabled = !1, this;
  }, t.prototype.enable = function () {
    return this.context.refresh(), this.enabled = !0, this;
  }, t.prototype.next = function () {
    return this.group.next(this);
  }, t.prototype.previous = function () {
    return this.group.previous(this);
  }, t.invokeAll = function (t) {
    var e = [];

    for (var o in i) e.push(i[o]);

    for (var n = 0, r = e.length; r > n; n++) e[n][t]();
  }, t.destroyAll = function () {
    t.invokeAll("destroy");
  }, t.disableAll = function () {
    t.invokeAll("disable");
  }, t.enableAll = function () {
    t.Context.refreshAll();

    for (var e in i) i[e].enabled = !0;

    return this;
  }, t.refreshAll = function () {
    t.Context.refreshAll();
  }, t.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight;
  }, t.viewportWidth = function () {
    return document.documentElement.clientWidth;
  }, t.adapters = [], t.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0
  }, t.offsetAliases = {
    "bottom-in-view": function () {
      return this.context.innerHeight() - this.adapter.outerHeight();
    },
    "right-in-view": function () {
      return this.context.innerWidth() - this.adapter.outerWidth();
    }
  }, window.Waypoint = t;
}(), function () {
  "use strict";

  function t(t) {
    window.setTimeout(t, 1e3 / 60);
  }

  function e(t) {
    this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }, this.waypoints = {
      vertical: {},
      horizontal: {}
    }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
  }

  var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
  e.prototype.add = function (t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e][t.key] = t, this.refresh();
  }, e.prototype.checkEmpty = function () {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
        e = this.Adapter.isEmptyObject(this.waypoints.vertical),
        i = this.element == this.element.window;
    t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
  }, e.prototype.createThrottledResizeHandler = function () {
    function t() {
      e.handleResize(), e.didResize = !1;
    }

    var e = this;
    this.adapter.on("resize.waypoints", function () {
      e.didResize || (e.didResize = !0, n.requestAnimationFrame(t));
    });
  }, e.prototype.createThrottledScrollHandler = function () {
    function t() {
      e.handleScroll(), e.didScroll = !1;
    }

    var e = this;
    this.adapter.on("scroll.waypoints", function () {
      (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t));
    });
  }, e.prototype.handleResize = function () {
    n.Context.refreshAll();
  }, e.prototype.handleScroll = function () {
    var t = {},
        e = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left"
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up"
      }
    };

    for (var i in e) {
      var o = e[i],
          n = o.newScroll > o.oldScroll,
          r = n ? o.forward : o.backward;

      for (var s in this.waypoints[i]) {
        var a = this.waypoints[i][s];

        if (null !== a.triggerPoint) {
          var l = o.oldScroll < a.triggerPoint,
              h = o.newScroll >= a.triggerPoint,
              p = l && h,
              u = !l && !h;
          (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group);
        }
      }
    }

    for (var c in t) t[c].flushTriggers();

    this.oldScroll = {
      x: e.horizontal.newScroll,
      y: e.vertical.newScroll
    };
  }, e.prototype.innerHeight = function () {
    return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
  }, e.prototype.remove = function (t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty();
  }, e.prototype.innerWidth = function () {
    return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
  }, e.prototype.destroy = function () {
    var t = [];

    for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);

    for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
  }, e.prototype.refresh = function () {
    var t,
        e = this.element == this.element.window,
        i = e ? void 0 : this.adapter.offset(),
        o = {};
    this.handleScroll(), t = {
      horizontal: {
        contextOffset: e ? 0 : i.left,
        contextScroll: e ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left",
        offsetProp: "left"
      },
      vertical: {
        contextOffset: e ? 0 : i.top,
        contextScroll: e ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up",
        offsetProp: "top"
      }
    };

    for (var r in t) {
      var s = t[r];

      for (var a in this.waypoints[r]) {
        var l,
            h,
            p,
            u,
            c,
            d = this.waypoints[r][a],
            f = d.options.offset,
            w = d.triggerPoint,
            y = 0,
            g = null == w;
        d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group);
      }
    }

    return n.requestAnimationFrame(function () {
      for (var t in o) o[t].flushTriggers();
    }), this;
  }, e.findOrCreateByElement = function (t) {
    return e.findByElement(t) || new e(t);
  }, e.refreshAll = function () {
    for (var t in o) o[t].refresh();
  }, e.findByElement = function (t) {
    return o[t.waypointContextKey];
  }, window.onload = function () {
    r && r(), e.refreshAll();
  }, n.requestAnimationFrame = function (e) {
    var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
    i.call(window, e);
  }, n.Context = e;
}(), function () {
  "use strict";

  function t(t, e) {
    return t.triggerPoint - e.triggerPoint;
  }

  function e(t, e) {
    return e.triggerPoint - t.triggerPoint;
  }

  function i(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this;
  }

  var o = {
    vertical: {},
    horizontal: {}
  },
      n = window.Waypoint;
  i.prototype.add = function (t) {
    this.waypoints.push(t);
  }, i.prototype.clearTriggerQueues = function () {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    };
  }, i.prototype.flushTriggers = function () {
    for (var i in this.triggerQueues) {
      var o = this.triggerQueues[i],
          n = "up" === i || "left" === i;
      o.sort(n ? e : t);

      for (var r = 0, s = o.length; s > r; r += 1) {
        var a = o[r];
        (a.options.continuous || r === o.length - 1) && a.trigger([i]);
      }
    }

    this.clearTriggerQueues();
  }, i.prototype.next = function (e) {
    this.waypoints.sort(t);
    var i = n.Adapter.inArray(e, this.waypoints),
        o = i === this.waypoints.length - 1;
    return o ? null : this.waypoints[i + 1];
  }, i.prototype.previous = function (e) {
    this.waypoints.sort(t);
    var i = n.Adapter.inArray(e, this.waypoints);
    return i ? this.waypoints[i - 1] : null;
  }, i.prototype.queueTrigger = function (t, e) {
    this.triggerQueues[e].push(t);
  }, i.prototype.remove = function (t) {
    var e = n.Adapter.inArray(t, this.waypoints);
    e > -1 && this.waypoints.splice(e, 1);
  }, i.prototype.first = function () {
    return this.waypoints[0];
  }, i.prototype.last = function () {
    return this.waypoints[this.waypoints.length - 1];
  }, i.findOrCreate = function (t) {
    return o[t.axis][t.name] || new i(t);
  }, n.Group = i;
}(), function () {
  "use strict";

  function t(t) {
    this.$element = e(t);
  }

  var e = window.jQuery,
      i = window.Waypoint;
  e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
    t.prototype[i] = function () {
      var t = Array.prototype.slice.call(arguments);
      return this.$element[i].apply(this.$element, t);
    };
  }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
    t[o] = e[o];
  }), i.adapters.push({
    name: "jquery",
    Adapter: t
  }), i.Adapter = t;
}(), function () {
  "use strict";

  function t(t) {
    return function () {
      var i = [],
          o = arguments[0];
      return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
        var n = t.extend({}, o, {
          element: this
        });
        "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n));
      }), i;
    };
  }

  var e = window.Waypoint;
  window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
}();
/*global jQuery */

/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function ($) {
  $.fn.fitText = function (kompressor, options) {
    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
      'minFontSize': Number.NEGATIVE_INFINITY,
      'maxFontSize': Number.POSITIVE_INFINITY
    }, options);
    return this.each(function () {
      // Store the object
      var $this = $(this); // Resizer() resizes items based on the object width divided by the compressor * 10

      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      }; // Call once to set.


      resizer(); // Call on resize. Opera debounces their resize by default.

      $(window).on('resize.fittext orientationchange.fittext', resizer);
    });
  };
})(jQuery);
/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */


!function (t, i, e, s) {
  function o(i, e) {
    var h = this;
    "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this, e)), this.$element = t(i), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
    var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
    if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), "top" != r[0] && "bottom" != r[0] && "left" != r[1] && "right" != r[1] || (r = [r[1], r[0]]), this.positionX !== s && (r[0] = this.positionX.toLowerCase()), this.positionY !== s && (r[1] = this.positionY.toLowerCase()), h.positionX = r[0], h.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
      backgroundImage: "url(" + this.imageSrc + ")",
      backgroundSize: "cover",
      backgroundPosition: this.position
    }), this;
    if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
      backgroundImage: "url(" + this.imageSrc + ")",
      backgroundSize: "cover",
      backgroundPosition: this.position
    }), this;
    this.$mirror = t("<div />").prependTo(this.mirrorContainer);
    var a = this.$element.find(">.parallax-slider"),
        n = !1;
    0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), n = !0), this.$mirror.addClass("parallax-mirror").css({
      visibility: "hidden",
      zIndex: this.zIndex,
      position: "fixed",
      top: 0,
      left: 0,
      overflow: "hidden"
    }), this.$slider.addClass("parallax-slider").one("load", function () {
      h.naturalHeight && h.naturalWidth || (h.naturalHeight = this.naturalHeight || this.height || 1, h.naturalWidth = this.naturalWidth || this.width || 1), h.aspectRatio = h.naturalWidth / h.naturalHeight, o.isSetup || o.setup(), o.sliders.push(h), o.isFresh = !1, o.requestRender();
    }), n || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load");
  }

  !function () {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !i.requestAnimationFrame; ++s) i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[s] + "CancelAnimationFrame"] || i[e[s] + "CancelRequestAnimationFrame"];

    i.requestAnimationFrame || (i.requestAnimationFrame = function (e) {
      var s = new Date().getTime(),
          o = Math.max(0, 16 - (s - t)),
          h = i.setTimeout(function () {
        e(s + o);
      }, o);
      return t = s + o, h;
    }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (t) {
      clearTimeout(t);
    });
  }(), t.extend(o.prototype, {
    speed: .2,
    bleed: 0,
    zIndex: -100,
    iosFix: !0,
    androidFix: !0,
    position: "center",
    overScrollFix: !1,
    mirrorContainer: "body",
    refresh: function () {
      this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
      var t,
          i = o.winHeight,
          e = o.docHeight,
          s = Math.min(this.boxOffsetTop, e - i),
          h = Math.max(this.boxOffsetTop + this.boxHeight - i, 0),
          r = this.boxHeight + (s - h) * (1 - this.speed) | 0,
          a = (this.boxOffsetTop - s) * (1 - this.speed) | 0;
      r * this.aspectRatio >= this.boxWidth ? (this.imageWidth = r * this.aspectRatio | 0, this.imageHeight = r, this.offsetBaseTop = a, t = this.imageWidth - this.boxWidth, "left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -t : isNaN(this.positionX) ? this.offsetLeft = -t / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -t)) : (this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0, t = this.imageHeight - r, "top" == this.positionY ? this.offsetBaseTop = a : "bottom" == this.positionY ? this.offsetBaseTop = a - t : isNaN(this.positionY) ? this.offsetBaseTop = a - t / 2 | 0 : this.offsetBaseTop = a + Math.max(this.positionY, -t));
    },
    render: function () {
      var t = o.scrollTop,
          i = o.scrollLeft,
          e = this.overScrollFix ? o.overScroll : 0,
          s = t + o.winHeight;
      this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - i, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
        transform: "translate3d(" + this.mirrorLeft + "px, " + (this.mirrorTop - e) + "px, 0px)",
        visibility: this.visibility,
        height: this.boxHeight,
        width: this.boxWidth
      }), this.$slider.css({
        transform: "translate3d(" + this.offsetLeft + "px, " + this.offsetTop + "px, 0px)",
        position: "absolute",
        height: this.imageHeight,
        width: this.imageWidth,
        maxWidth: "none"
      });
    }
  }), t.extend(o, {
    scrollTop: 0,
    scrollLeft: 0,
    winHeight: 0,
    winWidth: 0,
    docHeight: 1 << 30,
    docWidth: 1 << 30,
    sliders: [],
    isReady: !1,
    isFresh: !1,
    isBusy: !1,
    setup: function () {
      function s() {
        if (p == i.pageYOffset) return i.requestAnimationFrame(s), !1;
        p = i.pageYOffset, h.render(), i.requestAnimationFrame(s);
      }

      if (!this.isReady) {
        var h = this,
            r = t(e),
            a = t(i),
            n = function () {
          o.winHeight = a.height(), o.winWidth = a.width(), o.docHeight = r.height(), o.docWidth = r.width();
        },
            l = function () {
          var t = a.scrollTop(),
              i = o.docHeight - o.winHeight,
              e = o.docWidth - o.winWidth;
          o.scrollTop = Math.max(0, Math.min(i, t)), o.scrollLeft = Math.max(0, Math.min(e, a.scrollLeft())), o.overScroll = Math.max(t - i, Math.min(t, 0));
        };

        a.on("resize.px.parallax load.px.parallax", function () {
          n(), h.refresh(), o.isFresh = !1, o.requestRender();
        }).on("scroll.px.parallax load.px.parallax", function () {
          l(), o.requestRender();
        }), n(), l(), this.isReady = !0;
        var p = -1;
        s();
      }
    },
    configure: function (i) {
      "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this.prototype, i));
    },
    refresh: function () {
      t.each(this.sliders, function () {
        this.refresh();
      }), this.isFresh = !0;
    },
    render: function () {
      this.isFresh || this.refresh(), t.each(this.sliders, function () {
        this.render();
      });
    },
    requestRender: function () {
      var t = this;
      t.render(), t.isBusy = !1;
    },
    destroy: function (e) {
      var s,
          h = t(e).data("px.parallax");

      for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1) this.sliders[s] == h && this.sliders.splice(s, 1);

      t(e).data("px.parallax", !1), 0 === this.sliders.length && (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1);
    }
  });
  var h = t.fn.parallax;
  t.fn.parallax = function (s) {
    return this.each(function () {
      var h = t(this),
          r = "object" == typeof s && s;
      this == i || this == e || h.is("body") ? o.configure(r) : h.data("px.parallax") ? "object" == typeof s && t.extend(h.data("px.parallax"), r) : (r = t.extend({}, h.data(), r), h.data("px.parallax", new o(this, r))), "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]());
    });
  }, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function () {
    return t.fn.parallax = h, this;
  }, t(function () {
    t('[data-parallax="scroll"]').parallax();
  });
}(jQuery, window, document);