(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerpolicy && (i.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function qu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var fn = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bn = Symbol.for("react.element"),
  dc = Symbol.for("react.portal"),
  pc = Symbol.for("react.fragment"),
  hc = Symbol.for("react.strict_mode"),
  mc = Symbol.for("react.profiler"),
  vc = Symbol.for("react.provider"),
  yc = Symbol.for("react.context"),
  gc = Symbol.for("react.forward_ref"),
  wc = Symbol.for("react.suspense"),
  kc = Symbol.for("react.memo"),
  Sc = Symbol.for("react.lazy"),
  Bo = Symbol.iterator;
function Ec(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bo && e[Bo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var bu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  es = Object.assign,
  ts = {};
function dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ts),
    (this.updater = n || bu);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ns() {}
ns.prototype = dn.prototype;
function Qi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ts),
    (this.updater = n || bu);
}
var Ki = (Qi.prototype = new ns());
Ki.constructor = Qi;
es(Ki, dn.prototype);
Ki.isPureReactComponent = !0;
var Wo = Array.isArray,
  rs = Object.prototype.hasOwnProperty,
  Yi = { current: null },
  ls = { key: !0, ref: !0, __self: !0, __source: !0 };
function is(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      rs.call(t, r) && !ls.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: bn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Yi.current,
  };
}
function xc(e, t) {
  return {
    $$typeof: bn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Xi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bn;
}
function _c(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Qo = /\/+/g;
function xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _c("" + e.key)
    : t.toString(36);
}
function xr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case bn:
          case dc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + xl(o, 0) : r),
      Wo(l)
        ? ((n = ""),
          e != null && (n = e.replace(Qo, "$&/") + "/"),
          xr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Xi(l) &&
            (l = xc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Qo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Wo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + xl(i, u);
      o += xr(i, t, n, s, l);
    }
  else if (((s = Ec(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + xl(i, u++)), (o += xr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function or(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    xr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Cc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  _r = { transition: null },
  Nc = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: _r,
    ReactCurrentOwner: Yi,
  };
M.Children = {
  map: or,
  forEach: function (e, t, n) {
    or(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      or(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      or(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Xi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
M.Component = dn;
M.Fragment = pc;
M.Profiler = mc;
M.PureComponent = Qi;
M.StrictMode = hc;
M.Suspense = wc;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nc;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = es({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Yi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      rs.call(t, s) &&
        !ls.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: bn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: yc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: vc, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = is;
M.createFactory = function (e) {
  var t = is.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: gc, render: e };
};
M.isValidElement = Xi;
M.lazy = function (e) {
  return { $$typeof: Sc, _payload: { _status: -1, _result: e }, _init: Cc };
};
M.memo = function (e, t) {
  return { $$typeof: kc, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = _r.transition;
  _r.transition = {};
  try {
    e();
  } finally {
    _r.transition = t;
  }
};
M.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
M.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
M.useContext = function (e) {
  return de.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
M.useId = function () {
  return de.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return de.current.useRef(e);
};
M.useState = function (e) {
  return de.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return de.current.useTransition();
};
M.version = "18.2.0";
(function (e) {
  e.exports = M;
})(fn);
const Pc = qu(fn.exports);
var Gl = {},
  os = { exports: {} },
  xe = {},
  us = { exports: {} },
  ss = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, O) {
    var z = N.length;
    N.push(O);
    e: for (; 0 < z; ) {
      var Y = (z - 1) >>> 1,
        q = N[Y];
      if (0 < l(q, O)) (N[Y] = O), (N[z] = q), (z = Y);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var O = N[0],
      z = N.pop();
    if (z !== O) {
      N[0] = z;
      e: for (var Y = 0, q = N.length, lr = q >>> 1; Y < lr; ) {
        var Et = 2 * (Y + 1) - 1,
          El = N[Et],
          xt = Et + 1,
          ir = N[xt];
        if (0 > l(El, z))
          xt < q && 0 > l(ir, El)
            ? ((N[Y] = ir), (N[xt] = z), (Y = xt))
            : ((N[Y] = El), (N[Et] = z), (Y = Et));
        else if (xt < q && 0 > l(ir, z)) (N[Y] = ir), (N[xt] = z), (Y = xt);
        else break e;
      }
    }
    return O;
  }
  function l(N, O) {
    var z = N.sortIndex - O.sortIndex;
    return z !== 0 ? z : N.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    S = 1,
    y = null,
    h = 3,
    g = !1,
    E = !1,
    _ = !1,
    L = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(N) {
    for (var O = n(c); O !== null; ) {
      if (O.callback === null) r(c);
      else if (O.startTime <= N)
        r(c), (O.sortIndex = O.expirationTime), t(s, O);
      else break;
      O = n(c);
    }
  }
  function m(N) {
    if (((_ = !1), d(N), !E))
      if (n(s) !== null) (E = !0), We(k);
      else {
        var O = n(c);
        O !== null && Sl(m, O.startTime - N);
      }
  }
  function k(N, O) {
    (E = !1), _ && ((_ = !1), f(v), (v = -1)), (g = !0);
    var z = h;
    try {
      for (
        d(O), y = n(s);
        y !== null && (!(y.expirationTime > O) || (N && !D()));

      ) {
        var Y = y.callback;
        if (typeof Y == "function") {
          (y.callback = null), (h = y.priorityLevel);
          var q = Y(y.expirationTime <= O);
          (O = e.unstable_now()),
            typeof q == "function" ? (y.callback = q) : y === n(s) && r(s),
            d(O);
        } else r(s);
        y = n(s);
      }
      if (y !== null) var lr = !0;
      else {
        var Et = n(c);
        Et !== null && Sl(m, Et.startTime - O), (lr = !1);
      }
      return lr;
    } finally {
      (y = null), (h = z), (g = !1);
    }
  }
  var p = !1,
    w = null,
    v = -1,
    T = 5,
    P = -1;
  function D() {
    return !(e.unstable_now() - P < T);
  }
  function I() {
    if (w !== null) {
      var N = e.unstable_now();
      P = N;
      var O = !0;
      try {
        O = w(!0, N);
      } finally {
        O ? Q() : ((p = !1), (w = null));
      }
    } else p = !1;
  }
  var Q;
  if (typeof a == "function")
    Q = function () {
      a(I);
    };
  else if (typeof MessageChannel < "u") {
    var le = new MessageChannel(),
      Ce = le.port2;
    (le.port1.onmessage = I),
      (Q = function () {
        Ce.postMessage(null);
      });
  } else
    Q = function () {
      L(I, 0);
    };
  function We(N) {
    (w = N), p || ((p = !0), Q());
  }
  function Sl(N, O) {
    v = L(function () {
      N(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      E || g || ((E = !0), We(k));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = h;
      }
      var z = h;
      h = O;
      try {
        return N();
      } finally {
        h = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, O) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var z = h;
      h = N;
      try {
        return O();
      } finally {
        h = z;
      }
    }),
    (e.unstable_scheduleCallback = function (N, O, z) {
      var Y = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Y + z : Y))
          : (z = Y),
        N)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = z + q),
        (N = {
          id: S++,
          callback: O,
          priorityLevel: N,
          startTime: z,
          expirationTime: q,
          sortIndex: -1,
        }),
        z > Y
          ? ((N.sortIndex = z),
            t(c, N),
            n(s) === null &&
              N === n(c) &&
              (_ ? (f(v), (v = -1)) : (_ = !0), Sl(m, z - Y)))
          : ((N.sortIndex = q), t(s, N), E || g || ((E = !0), We(k))),
        N
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (N) {
      var O = h;
      return function () {
        var z = h;
        h = O;
        try {
          return N.apply(this, arguments);
        } finally {
          h = z;
        }
      };
    });
})(ss);
(function (e) {
  e.exports = ss;
})(us);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var as = fn.exports,
  Ee = us.exports;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var cs = new Set(),
  Fn = {};
function Ft(e, t) {
  rn(e, t), rn(e + "Capture", t);
}
function rn(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++) cs.add(t[e]);
}
var Je = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Zl = Object.prototype.hasOwnProperty,
  Tc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ko = {},
  Yo = {};
function Rc(e) {
  return Zl.call(Yo, e)
    ? !0
    : Zl.call(Ko, e)
    ? !1
    : Tc.test(e)
    ? (Yo[e] = !0)
    : ((Ko[e] = !0), !1);
}
function Oc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Lc(e, t, n, r) {
  if (t === null || typeof t > "u" || Oc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  re[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gi = /[\-:]([a-z])/g;
function Zi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gi, Zi);
    re[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gi, Zi);
    re[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Gi, Zi);
  re[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ji(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Lc(t, n, l, r) && (n = null),
    r || l === null
      ? Rc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tt = as.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ur = Symbol.for("react.element"),
  At = Symbol.for("react.portal"),
  Ht = Symbol.for("react.fragment"),
  qi = Symbol.for("react.strict_mode"),
  Jl = Symbol.for("react.profiler"),
  fs = Symbol.for("react.provider"),
  ds = Symbol.for("react.context"),
  bi = Symbol.for("react.forward_ref"),
  ql = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  eo = Symbol.for("react.memo"),
  rt = Symbol.for("react.lazy"),
  ps = Symbol.for("react.offscreen"),
  Xo = Symbol.iterator;
function mn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xo && e[Xo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  _l;
function xn(e) {
  if (_l === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      _l = (t && t[1]) || "";
    }
  return (
    `
` +
    _l +
    e
  );
}
var Cl = !1;
function Nl(e, t) {
  if (!e || Cl) return "";
  Cl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Cl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? xn(e) : "";
}
function zc(e) {
  switch (e.tag) {
    case 5:
      return xn(e.type);
    case 16:
      return xn("Lazy");
    case 13:
      return xn("Suspense");
    case 19:
      return xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function ei(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ht:
      return "Fragment";
    case At:
      return "Portal";
    case Jl:
      return "Profiler";
    case qi:
      return "StrictMode";
    case ql:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ds:
        return (e.displayName || "Context") + ".Consumer";
      case fs:
        return (e._context.displayName || "Context") + ".Provider";
      case bi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case eo:
        return (
          (t = e.displayName || null), t !== null ? t : ei(e.type) || "Memo"
        );
      case rt:
        (t = e._payload), (e = e._init);
        try {
          return ei(e(t));
        } catch {}
    }
  return null;
}
function Mc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ei(t);
    case 8:
      return t === qi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function yt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function hs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Dc(e) {
  var t = hs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function sr(e) {
  e._valueTracker || (e._valueTracker = Dc(e));
}
function ms(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = hs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function jr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ti(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Go(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = yt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function vs(e, t) {
  (t = t.checked), t != null && Ji(e, "checked", t, !1);
}
function ni(e, t) {
  vs(e, t);
  var n = yt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ri(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ri(e, t.type, yt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Zo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ri(e, t, n) {
  (t !== "number" || jr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _n = Array.isArray;
function Jt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + yt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function li(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Jo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (_n(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: yt(n) };
}
function ys(e, t) {
  var n = yt(t.value),
    r = yt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function qo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ii(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? gs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ar,
  ws = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ar = ar || document.createElement("div"),
          ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ar.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function In(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pn).forEach(function (e) {
  jc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pn[t] = Pn[e]);
  });
});
function ks(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Pn.hasOwnProperty(e) && Pn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ss(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ks(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Fc = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function oi(e, t) {
  if (t) {
    if (Fc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function ui(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var si = null;
function to(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ai = null,
  qt = null,
  bt = null;
function bo(e) {
  if ((e = nr(e))) {
    if (typeof ai != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = al(t)), ai(e.stateNode, e.type, t));
  }
}
function Es(e) {
  qt ? (bt ? bt.push(e) : (bt = [e])) : (qt = e);
}
function xs() {
  if (qt) {
    var e = qt,
      t = bt;
    if (((bt = qt = null), bo(e), t)) for (e = 0; e < t.length; e++) bo(t[e]);
  }
}
function _s(e, t) {
  return e(t);
}
function Cs() {}
var Pl = !1;
function Ns(e, t, n) {
  if (Pl) return e(t, n);
  Pl = !0;
  try {
    return _s(e, t, n);
  } finally {
    (Pl = !1), (qt !== null || bt !== null) && (Cs(), xs());
  }
}
function Un(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = al(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var ci = !1;
if (Je)
  try {
    var vn = {};
    Object.defineProperty(vn, "passive", {
      get: function () {
        ci = !0;
      },
    }),
      window.addEventListener("test", vn, vn),
      window.removeEventListener("test", vn, vn);
  } catch {
    ci = !1;
  }
function Ic(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (S) {
    this.onError(S);
  }
}
var Tn = !1,
  Fr = null,
  Ir = !1,
  fi = null,
  Uc = {
    onError: function (e) {
      (Tn = !0), (Fr = e);
    },
  };
function Ac(e, t, n, r, l, i, o, u, s) {
  (Tn = !1), (Fr = null), Ic.apply(Uc, arguments);
}
function Hc(e, t, n, r, l, i, o, u, s) {
  if ((Ac.apply(this, arguments), Tn)) {
    if (Tn) {
      var c = Fr;
      (Tn = !1), (Fr = null);
    } else throw Error(x(198));
    Ir || ((Ir = !0), (fi = c));
  }
}
function It(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ps(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function eu(e) {
  if (It(e) !== e) throw Error(x(188));
}
function $c(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return eu(l), e;
        if (i === r) return eu(l), t;
        i = i.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Ts(e) {
  return (e = $c(e)), e !== null ? Rs(e) : null;
}
function Rs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Rs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Os = Ee.unstable_scheduleCallback,
  tu = Ee.unstable_cancelCallback,
  Vc = Ee.unstable_shouldYield,
  Bc = Ee.unstable_requestPaint,
  X = Ee.unstable_now,
  Wc = Ee.unstable_getCurrentPriorityLevel,
  no = Ee.unstable_ImmediatePriority,
  Ls = Ee.unstable_UserBlockingPriority,
  Ur = Ee.unstable_NormalPriority,
  Qc = Ee.unstable_LowPriority,
  zs = Ee.unstable_IdlePriority,
  il = null,
  Ve = null;
function Kc(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : Gc,
  Yc = Math.log,
  Xc = Math.LN2;
function Gc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Yc(e) / Xc) | 0)) | 0;
}
var cr = 64,
  fr = 4194304;
function Cn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ar(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Cn(u)) : ((i &= o), i !== 0 && (r = Cn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Cn(o)) : i !== 0 && (r = Cn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & l) === 0 &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Fe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Zc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Jc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Fe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = Zc(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function di(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ms() {
  var e = cr;
  return (cr <<= 1), (cr & 4194240) === 0 && (cr = 64), e;
}
function Tl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function er(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Fe(t)),
    (e[t] = n);
}
function qc(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Fe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function ro(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var F = 0;
function Ds(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var js,
  lo,
  Fs,
  Is,
  Us,
  pi = !1,
  dr = [],
  at = null,
  ct = null,
  ft = null,
  An = new Map(),
  Hn = new Map(),
  it = [],
  bc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function nu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      at = null;
      break;
    case "dragenter":
    case "dragleave":
      ct = null;
      break;
    case "mouseover":
    case "mouseout":
      ft = null;
      break;
    case "pointerover":
    case "pointerout":
      An.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hn.delete(t.pointerId);
  }
}
function yn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = nr(t)), t !== null && lo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function ef(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (at = yn(at, e, t, n, r, l)), !0;
    case "dragenter":
      return (ct = yn(ct, e, t, n, r, l)), !0;
    case "mouseover":
      return (ft = yn(ft, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return An.set(i, yn(An.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Hn.set(i, yn(Hn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function As(e) {
  var t = Nt(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ps(n)), t !== null)) {
          (e.blockedOn = t),
            Us(e.priority, function () {
              Fs(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Cr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (si = r), n.target.dispatchEvent(r), (si = null);
    } else return (t = nr(n)), t !== null && lo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ru(e, t, n) {
  Cr(e) && n.delete(t);
}
function tf() {
  (pi = !1),
    at !== null && Cr(at) && (at = null),
    ct !== null && Cr(ct) && (ct = null),
    ft !== null && Cr(ft) && (ft = null),
    An.forEach(ru),
    Hn.forEach(ru);
}
function gn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pi ||
      ((pi = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, tf)));
}
function $n(e) {
  function t(l) {
    return gn(l, e);
  }
  if (0 < dr.length) {
    gn(dr[0], e);
    for (var n = 1; n < dr.length; n++) {
      var r = dr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    at !== null && gn(at, e),
      ct !== null && gn(ct, e),
      ft !== null && gn(ft, e),
      An.forEach(t),
      Hn.forEach(t),
      n = 0;
    n < it.length;
    n++
  )
    (r = it[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < it.length && ((n = it[0]), n.blockedOn === null); )
    As(n), n.blockedOn === null && it.shift();
}
var en = tt.ReactCurrentBatchConfig,
  Hr = !0;
function nf(e, t, n, r) {
  var l = F,
    i = en.transition;
  en.transition = null;
  try {
    (F = 1), io(e, t, n, r);
  } finally {
    (F = l), (en.transition = i);
  }
}
function rf(e, t, n, r) {
  var l = F,
    i = en.transition;
  en.transition = null;
  try {
    (F = 4), io(e, t, n, r);
  } finally {
    (F = l), (en.transition = i);
  }
}
function io(e, t, n, r) {
  if (Hr) {
    var l = hi(e, t, n, r);
    if (l === null) Ul(e, t, r, $r, n), nu(e, r);
    else if (ef(l, e, t, n, r)) r.stopPropagation();
    else if ((nu(e, r), t & 4 && -1 < bc.indexOf(e))) {
      for (; l !== null; ) {
        var i = nr(l);
        if (
          (i !== null && js(i),
          (i = hi(e, t, n, r)),
          i === null && Ul(e, t, r, $r, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ul(e, t, r, null, n);
  }
}
var $r = null;
function hi(e, t, n, r) {
  if ((($r = null), (e = to(r)), (e = Nt(e)), e !== null))
    if (((t = It(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ps(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ($r = e), null;
}
function Hs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Wc()) {
        case no:
          return 1;
        case Ls:
          return 4;
        case Ur:
        case Qc:
          return 16;
        case zs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ut = null,
  oo = null,
  Nr = null;
function $s() {
  if (Nr) return Nr;
  var e,
    t = oo,
    n = t.length,
    r,
    l = "value" in ut ? ut.value : ut.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Nr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Pr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pr() {
  return !0;
}
function lu() {
  return !1;
}
function _e(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? pr
        : lu),
      (this.isPropagationStopped = lu),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = pr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = pr));
      },
      persist: function () {},
      isPersistent: pr,
    }),
    t
  );
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  uo = _e(pn),
  tr = W({}, pn, { view: 0, detail: 0 }),
  lf = _e(tr),
  Rl,
  Ol,
  wn,
  ol = W({}, tr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: so,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== wn &&
            (wn && e.type === "mousemove"
              ? ((Rl = e.screenX - wn.screenX), (Ol = e.screenY - wn.screenY))
              : (Ol = Rl = 0),
            (wn = e)),
          Rl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ol;
    },
  }),
  iu = _e(ol),
  of = W({}, ol, { dataTransfer: 0 }),
  uf = _e(of),
  sf = W({}, tr, { relatedTarget: 0 }),
  Ll = _e(sf),
  af = W({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cf = _e(af),
  ff = W({}, pn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  df = _e(ff),
  pf = W({}, pn, { data: 0 }),
  ou = _e(pf),
  hf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  mf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  vf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function yf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vf[e]) ? !!t[e] : !1;
}
function so() {
  return yf;
}
var gf = W({}, tr, {
    key: function (e) {
      if (e.key) {
        var t = hf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Pr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? mf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: so,
    charCode: function (e) {
      return e.type === "keypress" ? Pr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Pr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  wf = _e(gf),
  kf = W({}, ol, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  uu = _e(kf),
  Sf = W({}, tr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: so,
  }),
  Ef = _e(Sf),
  xf = W({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _f = _e(xf),
  Cf = W({}, ol, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Nf = _e(Cf),
  Pf = [9, 13, 27, 32],
  ao = Je && "CompositionEvent" in window,
  Rn = null;
Je && "documentMode" in document && (Rn = document.documentMode);
var Tf = Je && "TextEvent" in window && !Rn,
  Vs = Je && (!ao || (Rn && 8 < Rn && 11 >= Rn)),
  su = String.fromCharCode(32),
  au = !1;
function Bs(e, t) {
  switch (e) {
    case "keyup":
      return Pf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ws(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var $t = !1;
function Rf(e, t) {
  switch (e) {
    case "compositionend":
      return Ws(t);
    case "keypress":
      return t.which !== 32 ? null : ((au = !0), su);
    case "textInput":
      return (e = t.data), e === su && au ? null : e;
    default:
      return null;
  }
}
function Of(e, t) {
  if ($t)
    return e === "compositionend" || (!ao && Bs(e, t))
      ? ((e = $s()), (Nr = oo = ut = null), ($t = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Vs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Lf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Lf[e.type] : t === "textarea";
}
function Qs(e, t, n, r) {
  Es(r),
    (t = Vr(t, "onChange")),
    0 < t.length &&
      ((n = new uo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var On = null,
  Vn = null;
function zf(e) {
  na(e, 0);
}
function ul(e) {
  var t = Wt(e);
  if (ms(t)) return e;
}
function Mf(e, t) {
  if (e === "change") return t;
}
var Ks = !1;
if (Je) {
  var zl;
  if (Je) {
    var Ml = "oninput" in document;
    if (!Ml) {
      var fu = document.createElement("div");
      fu.setAttribute("oninput", "return;"),
        (Ml = typeof fu.oninput == "function");
    }
    zl = Ml;
  } else zl = !1;
  Ks = zl && (!document.documentMode || 9 < document.documentMode);
}
function du() {
  On && (On.detachEvent("onpropertychange", Ys), (Vn = On = null));
}
function Ys(e) {
  if (e.propertyName === "value" && ul(Vn)) {
    var t = [];
    Qs(t, Vn, e, to(e)), Ns(zf, t);
  }
}
function Df(e, t, n) {
  e === "focusin"
    ? (du(), (On = t), (Vn = n), On.attachEvent("onpropertychange", Ys))
    : e === "focusout" && du();
}
function jf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ul(Vn);
}
function Ff(e, t) {
  if (e === "click") return ul(t);
}
function If(e, t) {
  if (e === "input" || e === "change") return ul(t);
}
function Uf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ue = typeof Object.is == "function" ? Object.is : Uf;
function Bn(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Zl.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function pu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hu(e, t) {
  var n = pu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = pu(n);
  }
}
function Xs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Xs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Gs() {
  for (var e = window, t = jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = jr(e.document);
  }
  return t;
}
function co(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Af(e) {
  var t = Gs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && co(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = hu(n, i));
        var o = hu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Hf = Je && "documentMode" in document && 11 >= document.documentMode,
  Vt = null,
  mi = null,
  Ln = null,
  vi = !1;
function mu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vi ||
    Vt == null ||
    Vt !== jr(r) ||
    ((r = Vt),
    "selectionStart" in r && co(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ln && Bn(Ln, r)) ||
      ((Ln = r),
      (r = Vr(mi, "onSelect")),
      0 < r.length &&
        ((t = new uo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vt))));
}
function hr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bt = {
    animationend: hr("Animation", "AnimationEnd"),
    animationiteration: hr("Animation", "AnimationIteration"),
    animationstart: hr("Animation", "AnimationStart"),
    transitionend: hr("Transition", "TransitionEnd"),
  },
  Dl = {},
  Zs = {};
Je &&
  ((Zs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bt.animationend.animation,
    delete Bt.animationiteration.animation,
    delete Bt.animationstart.animation),
  "TransitionEvent" in window || delete Bt.transitionend.transition);
function sl(e) {
  if (Dl[e]) return Dl[e];
  if (!Bt[e]) return e;
  var t = Bt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zs) return (Dl[e] = t[n]);
  return e;
}
var Js = sl("animationend"),
  qs = sl("animationiteration"),
  bs = sl("animationstart"),
  ea = sl("transitionend"),
  ta = new Map(),
  vu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function wt(e, t) {
  ta.set(e, t), Ft(t, [e]);
}
for (var jl = 0; jl < vu.length; jl++) {
  var Fl = vu[jl],
    $f = Fl.toLowerCase(),
    Vf = Fl[0].toUpperCase() + Fl.slice(1);
  wt($f, "on" + Vf);
}
wt(Js, "onAnimationEnd");
wt(qs, "onAnimationIteration");
wt(bs, "onAnimationStart");
wt("dblclick", "onDoubleClick");
wt("focusin", "onFocus");
wt("focusout", "onBlur");
wt(ea, "onTransitionEnd");
rn("onMouseEnter", ["mouseout", "mouseover"]);
rn("onMouseLeave", ["mouseout", "mouseover"]);
rn("onPointerEnter", ["pointerout", "pointerover"]);
rn("onPointerLeave", ["pointerout", "pointerover"]);
Ft(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ft(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ft(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ft(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ft(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Nn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function yu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Hc(r, t, void 0, e), (e.currentTarget = null);
}
function na(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          yu(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          yu(l, u, c), (i = s);
        }
    }
  }
  if (Ir) throw ((e = fi), (Ir = !1), (fi = null), e);
}
function A(e, t) {
  var n = t[Si];
  n === void 0 && (n = t[Si] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ra(t, e, 2, !1), n.add(r));
}
function Il(e, t, n) {
  var r = 0;
  t && (r |= 4), ra(n, e, r, t);
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function Wn(e) {
  if (!e[mr]) {
    (e[mr] = !0),
      cs.forEach(function (n) {
        n !== "selectionchange" && (Bf.has(n) || Il(n, !1, e), Il(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mr] || ((t[mr] = !0), Il("selectionchange", !1, t));
  }
}
function ra(e, t, n, r) {
  switch (Hs(t)) {
    case 1:
      var l = nf;
      break;
    case 4:
      l = rf;
      break;
    default:
      l = io;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ci ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ul(e, t, n, r, l) {
  var i = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Nt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ns(function () {
    var c = i,
      S = to(n),
      y = [];
    e: {
      var h = ta.get(e);
      if (h !== void 0) {
        var g = uo,
          E = e;
        switch (e) {
          case "keypress":
            if (Pr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = wf;
            break;
          case "focusin":
            (E = "focus"), (g = Ll);
            break;
          case "focusout":
            (E = "blur"), (g = Ll);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ll;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = iu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = uf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Ef;
            break;
          case Js:
          case qs:
          case bs:
            g = cf;
            break;
          case ea:
            g = _f;
            break;
          case "scroll":
            g = lf;
            break;
          case "wheel":
            g = Nf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = df;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = uu;
        }
        var _ = (t & 4) !== 0,
          L = !_ && e === "scroll",
          f = _ ? (h !== null ? h + "Capture" : null) : h;
        _ = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var m = d.stateNode;
          if (
            (d.tag === 5 &&
              m !== null &&
              ((d = m),
              f !== null && ((m = Un(a, f)), m != null && _.push(Qn(a, m, d)))),
            L)
          )
            break;
          a = a.return;
        }
        0 < _.length &&
          ((h = new g(h, E, null, n, S)), y.push({ event: h, listeners: _ }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== si &&
            (E = n.relatedTarget || n.fromElement) &&
            (Nt(E) || E[qe]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            S.window === S
              ? S
              : (h = S.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((E = n.relatedTarget || n.toElement),
              (g = c),
              (E = E ? Nt(E) : null),
              E !== null &&
                ((L = It(E)), E !== L || (E.tag !== 5 && E.tag !== 6)) &&
                (E = null))
            : ((g = null), (E = c)),
          g !== E)
        ) {
          if (
            ((_ = iu),
            (m = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = uu),
              (m = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (L = g == null ? h : Wt(g)),
            (d = E == null ? h : Wt(E)),
            (h = new _(m, a + "leave", g, n, S)),
            (h.target = L),
            (h.relatedTarget = d),
            (m = null),
            Nt(S) === c &&
              ((_ = new _(f, a + "enter", E, n, S)),
              (_.target = d),
              (_.relatedTarget = L),
              (m = _)),
            (L = m),
            g && E)
          )
            t: {
              for (_ = g, f = E, a = 0, d = _; d; d = Ut(d)) a++;
              for (d = 0, m = f; m; m = Ut(m)) d++;
              for (; 0 < a - d; ) (_ = Ut(_)), a--;
              for (; 0 < d - a; ) (f = Ut(f)), d--;
              for (; a--; ) {
                if (_ === f || (f !== null && _ === f.alternate)) break t;
                (_ = Ut(_)), (f = Ut(f));
              }
              _ = null;
            }
          else _ = null;
          g !== null && gu(y, h, g, _, !1),
            E !== null && L !== null && gu(y, L, E, _, !0);
        }
      }
      e: {
        if (
          ((h = c ? Wt(c) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var k = Mf;
        else if (cu(h))
          if (Ks) k = If;
          else {
            k = jf;
            var p = Df;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = Ff);
        if (k && (k = k(e, c))) {
          Qs(y, k, n, S);
          break e;
        }
        p && p(e, h, c),
          e === "focusout" &&
            (p = h._wrapperState) &&
            p.controlled &&
            h.type === "number" &&
            ri(h, "number", h.value);
      }
      switch (((p = c ? Wt(c) : window), e)) {
        case "focusin":
          (cu(p) || p.contentEditable === "true") &&
            ((Vt = p), (mi = c), (Ln = null));
          break;
        case "focusout":
          Ln = mi = Vt = null;
          break;
        case "mousedown":
          vi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (vi = !1), mu(y, n, S);
          break;
        case "selectionchange":
          if (Hf) break;
        case "keydown":
        case "keyup":
          mu(y, n, S);
      }
      var w;
      if (ao)
        e: {
          switch (e) {
            case "compositionstart":
              var v = "onCompositionStart";
              break e;
            case "compositionend":
              v = "onCompositionEnd";
              break e;
            case "compositionupdate":
              v = "onCompositionUpdate";
              break e;
          }
          v = void 0;
        }
      else
        $t
          ? Bs(e, n) && (v = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (v = "onCompositionStart");
      v &&
        (Vs &&
          n.locale !== "ko" &&
          ($t || v !== "onCompositionStart"
            ? v === "onCompositionEnd" && $t && (w = $s())
            : ((ut = S),
              (oo = "value" in ut ? ut.value : ut.textContent),
              ($t = !0))),
        (p = Vr(c, v)),
        0 < p.length &&
          ((v = new ou(v, e, null, n, S)),
          y.push({ event: v, listeners: p }),
          w ? (v.data = w) : ((w = Ws(n)), w !== null && (v.data = w)))),
        (w = Tf ? Rf(e, n) : Of(e, n)) &&
          ((c = Vr(c, "onBeforeInput")),
          0 < c.length &&
            ((S = new ou("onBeforeInput", "beforeinput", null, n, S)),
            y.push({ event: S, listeners: c }),
            (S.data = w)));
    }
    na(y, t);
  });
}
function Qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Un(e, n)),
      i != null && r.unshift(Qn(e, i, l)),
      (i = Un(e, t)),
      i != null && r.push(Qn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ut(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function gu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Un(n, i)), s != null && o.unshift(Qn(n, s, u)))
        : l || ((s = Un(n, i)), s != null && o.push(Qn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Wf = /\r\n?/g,
  Qf = /\u0000|\uFFFD/g;
function wu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Wf,
      `
`
    )
    .replace(Qf, "");
}
function vr(e, t, n) {
  if (((t = wu(t)), wu(e) !== t && n)) throw Error(x(425));
}
function Br() {}
var yi = null,
  gi = null;
function wi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ki = typeof setTimeout == "function" ? setTimeout : void 0,
  Kf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ku = typeof Promise == "function" ? Promise : void 0,
  Yf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ku < "u"
      ? function (e) {
          return ku.resolve(null).then(e).catch(Xf);
        }
      : ki;
function Xf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Al(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), $n(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  $n(t);
}
function dt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Su(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var hn = Math.random().toString(36).slice(2),
  $e = "__reactFiber$" + hn,
  Kn = "__reactProps$" + hn,
  qe = "__reactContainer$" + hn,
  Si = "__reactEvents$" + hn,
  Gf = "__reactListeners$" + hn,
  Zf = "__reactHandles$" + hn;
function Nt(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qe] || n[$e])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Su(e); e !== null; ) {
          if ((n = e[$e])) return n;
          e = Su(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function nr(e) {
  return (
    (e = e[$e] || e[qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function al(e) {
  return e[Kn] || null;
}
var Ei = [],
  Qt = -1;
function kt(e) {
  return { current: e };
}
function H(e) {
  0 > Qt || ((e.current = Ei[Qt]), (Ei[Qt] = null), Qt--);
}
function U(e, t) {
  Qt++, (Ei[Qt] = e.current), (e.current = t);
}
var gt = {},
  se = kt(gt),
  ve = kt(!1),
  Lt = gt;
function ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function Wr() {
  H(ve), H(se);
}
function Eu(e, t, n) {
  if (se.current !== gt) throw Error(x(168));
  U(se, t), U(ve, n);
}
function la(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, Mc(e) || "Unknown", l));
  return W({}, n, r);
}
function Qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gt),
    (Lt = se.current),
    U(se, e),
    U(ve, ve.current),
    !0
  );
}
function xu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = la(e, t, Lt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(ve),
      H(se),
      U(se, e))
    : H(ve),
    U(ve, n);
}
var Ye = null,
  cl = !1,
  Hl = !1;
function ia(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
function Jf(e) {
  (cl = !0), ia(e);
}
function St() {
  if (!Hl && Ye !== null) {
    Hl = !0;
    var e = 0,
      t = F;
    try {
      var n = Ye;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ye = null), (cl = !1);
    } catch (l) {
      throw (Ye !== null && (Ye = Ye.slice(e + 1)), Os(no, St), l);
    } finally {
      (F = t), (Hl = !1);
    }
  }
  return null;
}
var Kt = [],
  Yt = 0,
  Kr = null,
  Yr = 0,
  Ne = [],
  Pe = 0,
  zt = null,
  Xe = 1,
  Ge = "";
function _t(e, t) {
  (Kt[Yt++] = Yr), (Kt[Yt++] = Kr), (Kr = e), (Yr = t);
}
function oa(e, t, n) {
  (Ne[Pe++] = Xe), (Ne[Pe++] = Ge), (Ne[Pe++] = zt), (zt = e);
  var r = Xe;
  e = Ge;
  var l = 32 - Fe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Fe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Xe = (1 << (32 - Fe(t) + l)) | (n << l) | r),
      (Ge = i + e);
  } else (Xe = (1 << i) | (n << l) | r), (Ge = e);
}
function fo(e) {
  e.return !== null && (_t(e, 1), oa(e, 1, 0));
}
function po(e) {
  for (; e === Kr; )
    (Kr = Kt[--Yt]), (Kt[Yt] = null), (Yr = Kt[--Yt]), (Kt[Yt] = null);
  for (; e === zt; )
    (zt = Ne[--Pe]),
      (Ne[Pe] = null),
      (Ge = Ne[--Pe]),
      (Ne[Pe] = null),
      (Xe = Ne[--Pe]),
      (Ne[Pe] = null);
}
var Se = null,
  ke = null,
  $ = !1,
  je = null;
function ua(e, t) {
  var n = Te(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function _u(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (ke = dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zt !== null ? { id: Xe, overflow: Ge } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Te(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _i(e) {
  if ($) {
    var t = ke;
    if (t) {
      var n = t;
      if (!_u(e, t)) {
        if (xi(e)) throw Error(x(418));
        t = dt(n.nextSibling);
        var r = Se;
        t && _u(e, t)
          ? ua(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Se = e));
      }
    } else {
      if (xi(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (Se = e);
    }
  }
}
function Cu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function yr(e) {
  if (e !== Se) return !1;
  if (!$) return Cu(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (xi(e)) throw (sa(), Error(x(418)));
    for (; t; ) ua(e, t), (t = dt(t.nextSibling));
  }
  if ((Cu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = Se ? dt(e.stateNode.nextSibling) : null;
  return !0;
}
function sa() {
  for (var e = ke; e; ) e = dt(e.nextSibling);
}
function on() {
  (ke = Se = null), ($ = !1);
}
function ho(e) {
  je === null ? (je = [e]) : je.push(e);
}
var qf = tt.ReactCurrentBatchConfig;
function Me(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Xr = kt(null),
  Gr = null,
  Xt = null,
  mo = null;
function vo() {
  mo = Xt = Gr = null;
}
function yo(e) {
  var t = Xr.current;
  H(Xr), (e._currentValue = t);
}
function Ci(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function tn(e, t) {
  (Gr = e),
    (mo = Xt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (me = !0), (e.firstContext = null));
}
function Oe(e) {
  var t = e._currentValue;
  if (mo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xt === null)) {
      if (Gr === null) throw Error(x(308));
      (Xt = e), (Gr.dependencies = { lanes: 0, firstContext: e });
    } else Xt = Xt.next = e;
  return t;
}
var Pt = null;
function go(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function aa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), go(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    be(e, r)
  );
}
function be(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var lt = !1;
function wo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ca(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ze(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (j & 2) !== 0)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      be(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), go(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    be(e, n)
  );
}
function Tr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ro(e, n);
  }
}
function Nu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Zr(e, t, n, r) {
  var l = e.updateQueue;
  lt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var S = e.alternate;
    S !== null &&
      ((S = S.updateQueue),
      (u = S.lastBaseUpdate),
      u !== o &&
        (u === null ? (S.firstBaseUpdate = c) : (u.next = c),
        (S.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var y = l.baseState;
    (o = 0), (S = c = s = null), (u = i);
    do {
      var h = u.lane,
        g = u.eventTime;
      if ((r & h) === h) {
        S !== null &&
          (S = S.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var E = e,
            _ = u;
          switch (((h = t), (g = n), _.tag)) {
            case 1:
              if (((E = _.payload), typeof E == "function")) {
                y = E.call(g, y, h);
                break e;
              }
              y = E;
              break e;
            case 3:
              E.flags = (E.flags & -65537) | 128;
            case 0:
              if (
                ((E = _.payload),
                (h = typeof E == "function" ? E.call(g, y, h) : E),
                h == null)
              )
                break e;
              y = W({}, y, h);
              break e;
            case 2:
              lt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          S === null ? ((c = S = g), (s = y)) : (S = S.next = g),
          (o |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (S === null && (s = y),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = S),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Dt |= o), (e.lanes = o), (e.memoizedState = y);
  }
}
function Pu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var fa = new as.Component().refs;
function Ni(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = mt(e),
      i = Ze(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = pt(e, i, l)),
      t !== null && (Ie(t, e, l, r), Tr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = mt(e),
      i = Ze(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = pt(e, i, l)),
      t !== null && (Ie(t, e, l, r), Tr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = mt(e),
      l = Ze(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = pt(e, l, r)),
      t !== null && (Ie(t, e, r, n), Tr(t, e, r));
  },
};
function Tu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Bn(n, r) || !Bn(l, i)
      : !0
  );
}
function da(e, t, n) {
  var r = !1,
    l = gt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Oe(i))
      : ((l = ye(t) ? Lt : se.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ln(e, l) : gt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ru(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fl.enqueueReplaceState(t, t.state, null);
}
function Pi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = fa), wo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Oe(i))
    : ((i = ye(t) ? Lt : se.current), (l.context = ln(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ni(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && fl.enqueueReplaceState(l, l.state, null),
      Zr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function kn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === fa && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function gr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ou(e) {
  var t = e._init;
  return t(e._payload);
}
function pa(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = vt(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, m) {
    return a === null || a.tag !== 6
      ? ((a = Yl(d, f.mode, m)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, m) {
    var k = d.type;
    return k === Ht
      ? S(f, a, d.props.children, m, d.key)
      : a !== null &&
        (a.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === rt &&
            Ou(k) === a.type))
      ? ((m = l(a, d.props)), (m.ref = kn(f, a, d)), (m.return = f), m)
      : ((m = Dr(d.type, d.key, d.props, null, f.mode, m)),
        (m.ref = kn(f, a, d)),
        (m.return = f),
        m);
  }
  function c(f, a, d, m) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Xl(d, f.mode, m)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function S(f, a, d, m, k) {
    return a === null || a.tag !== 7
      ? ((a = Ot(d, f.mode, m, k)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function y(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Yl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ur:
          return (
            (d = Dr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = kn(f, null, a)),
            (d.return = f),
            d
          );
        case At:
          return (a = Xl(a, f.mode, d)), (a.return = f), a;
        case rt:
          var m = a._init;
          return y(f, m(a._payload), d);
      }
      if (_n(a) || mn(a))
        return (a = Ot(a, f.mode, d, null)), (a.return = f), a;
      gr(f, a);
    }
    return null;
  }
  function h(f, a, d, m) {
    var k = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return k !== null ? null : u(f, a, "" + d, m);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ur:
          return d.key === k ? s(f, a, d, m) : null;
        case At:
          return d.key === k ? c(f, a, d, m) : null;
        case rt:
          return (k = d._init), h(f, a, k(d._payload), m);
      }
      if (_n(d) || mn(d)) return k !== null ? null : S(f, a, d, m, null);
      gr(f, d);
    }
    return null;
  }
  function g(f, a, d, m, k) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (f = f.get(d) || null), u(a, f, "" + m, k);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ur:
          return (f = f.get(m.key === null ? d : m.key) || null), s(a, f, m, k);
        case At:
          return (f = f.get(m.key === null ? d : m.key) || null), c(a, f, m, k);
        case rt:
          var p = m._init;
          return g(f, a, d, p(m._payload), k);
      }
      if (_n(m) || mn(m)) return (f = f.get(d) || null), S(a, f, m, k, null);
      gr(a, m);
    }
    return null;
  }
  function E(f, a, d, m) {
    for (
      var k = null, p = null, w = a, v = (a = 0), T = null;
      w !== null && v < d.length;
      v++
    ) {
      w.index > v ? ((T = w), (w = null)) : (T = w.sibling);
      var P = h(f, w, d[v], m);
      if (P === null) {
        w === null && (w = T);
        break;
      }
      e && w && P.alternate === null && t(f, w),
        (a = i(P, a, v)),
        p === null ? (k = P) : (p.sibling = P),
        (p = P),
        (w = T);
    }
    if (v === d.length) return n(f, w), $ && _t(f, v), k;
    if (w === null) {
      for (; v < d.length; v++)
        (w = y(f, d[v], m)),
          w !== null &&
            ((a = i(w, a, v)), p === null ? (k = w) : (p.sibling = w), (p = w));
      return $ && _t(f, v), k;
    }
    for (w = r(f, w); v < d.length; v++)
      (T = g(w, f, v, d[v], m)),
        T !== null &&
          (e && T.alternate !== null && w.delete(T.key === null ? v : T.key),
          (a = i(T, a, v)),
          p === null ? (k = T) : (p.sibling = T),
          (p = T));
    return (
      e &&
        w.forEach(function (D) {
          return t(f, D);
        }),
      $ && _t(f, v),
      k
    );
  }
  function _(f, a, d, m) {
    var k = mn(d);
    if (typeof k != "function") throw Error(x(150));
    if (((d = k.call(d)), d == null)) throw Error(x(151));
    for (
      var p = (k = null), w = a, v = (a = 0), T = null, P = d.next();
      w !== null && !P.done;
      v++, P = d.next()
    ) {
      w.index > v ? ((T = w), (w = null)) : (T = w.sibling);
      var D = h(f, w, P.value, m);
      if (D === null) {
        w === null && (w = T);
        break;
      }
      e && w && D.alternate === null && t(f, w),
        (a = i(D, a, v)),
        p === null ? (k = D) : (p.sibling = D),
        (p = D),
        (w = T);
    }
    if (P.done) return n(f, w), $ && _t(f, v), k;
    if (w === null) {
      for (; !P.done; v++, P = d.next())
        (P = y(f, P.value, m)),
          P !== null &&
            ((a = i(P, a, v)), p === null ? (k = P) : (p.sibling = P), (p = P));
      return $ && _t(f, v), k;
    }
    for (w = r(f, w); !P.done; v++, P = d.next())
      (P = g(w, f, v, P.value, m)),
        P !== null &&
          (e && P.alternate !== null && w.delete(P.key === null ? v : P.key),
          (a = i(P, a, v)),
          p === null ? (k = P) : (p.sibling = P),
          (p = P));
    return (
      e &&
        w.forEach(function (I) {
          return t(f, I);
        }),
      $ && _t(f, v),
      k
    );
  }
  function L(f, a, d, m) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ht &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case ur:
          e: {
            for (var k = d.key, p = a; p !== null; ) {
              if (p.key === k) {
                if (((k = d.type), k === Ht)) {
                  if (p.tag === 7) {
                    n(f, p.sibling),
                      (a = l(p, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  p.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === rt &&
                    Ou(k) === p.type)
                ) {
                  n(f, p.sibling),
                    (a = l(p, d.props)),
                    (a.ref = kn(f, p, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, p);
                break;
              } else t(f, p);
              p = p.sibling;
            }
            d.type === Ht
              ? ((a = Ot(d.props.children, f.mode, m, d.key)),
                (a.return = f),
                (f = a))
              : ((m = Dr(d.type, d.key, d.props, null, f.mode, m)),
                (m.ref = kn(f, a, d)),
                (m.return = f),
                (f = m));
          }
          return o(f);
        case At:
          e: {
            for (p = d.key; a !== null; ) {
              if (a.key === p)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Xl(d, f.mode, m)), (a.return = f), (f = a);
          }
          return o(f);
        case rt:
          return (p = d._init), L(f, a, p(d._payload), m);
      }
      if (_n(d)) return E(f, a, d, m);
      if (mn(d)) return _(f, a, d, m);
      gr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Yl(d, f.mode, m)), (a.return = f), (f = a)),
        o(f))
      : n(f, a);
  }
  return L;
}
var un = pa(!0),
  ha = pa(!1),
  rr = {},
  Be = kt(rr),
  Yn = kt(rr),
  Xn = kt(rr);
function Tt(e) {
  if (e === rr) throw Error(x(174));
  return e;
}
function ko(e, t) {
  switch ((U(Xn, t), U(Yn, e), U(Be, rr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ii(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ii(t, e));
  }
  H(Be), U(Be, t);
}
function sn() {
  H(Be), H(Yn), H(Xn);
}
function ma(e) {
  Tt(Xn.current);
  var t = Tt(Be.current),
    n = ii(t, e.type);
  t !== n && (U(Yn, e), U(Be, n));
}
function So(e) {
  Yn.current === e && (H(Be), H(Yn));
}
var V = kt(0);
function Jr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var $l = [];
function Eo() {
  for (var e = 0; e < $l.length; e++)
    $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0;
}
var Rr = tt.ReactCurrentDispatcher,
  Vl = tt.ReactCurrentBatchConfig,
  Mt = 0,
  B = null,
  Z = null,
  b = null,
  qr = !1,
  zn = !1,
  Gn = 0,
  bf = 0;
function ie() {
  throw Error(x(321));
}
function xo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function _o(e, t, n, r, l, i) {
  if (
    ((Mt = i),
    (B = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Rr.current = e === null || e.memoizedState === null ? rd : ld),
    (e = n(r, l)),
    zn)
  ) {
    i = 0;
    do {
      if (((zn = !1), (Gn = 0), 25 <= i)) throw Error(x(301));
      (i += 1),
        (b = Z = null),
        (t.updateQueue = null),
        (Rr.current = id),
        (e = n(r, l));
    } while (zn);
  }
  if (
    ((Rr.current = br),
    (t = Z !== null && Z.next !== null),
    (Mt = 0),
    (b = Z = B = null),
    (qr = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function Co() {
  var e = Gn !== 0;
  return (Gn = 0), e;
}
function He() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? (B.memoizedState = b = e) : (b = b.next = e), b;
}
function Le() {
  if (Z === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = b === null ? B.memoizedState : b.next;
  if (t !== null) (b = t), (Z = e);
  else {
    if (e === null) throw Error(x(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      b === null ? (B.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function Zn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bl(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var S = c.lane;
      if ((Mt & S) === S)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var y = {
          lane: S,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = y), (o = r)) : (s = s.next = y),
          (B.lanes |= S),
          (Dt |= S);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Ue(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (B.lanes |= i), (Dt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wl(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ue(i, t.memoizedState) || (me = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function va() {}
function ya(e, t) {
  var n = B,
    r = Le(),
    l = t(),
    i = !Ue(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (me = !0)),
    (r = r.queue),
    No(ka.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Jn(9, wa.bind(null, n, r, l, t), void 0, null),
      ee === null)
    )
      throw Error(x(349));
    (Mt & 30) !== 0 || ga(n, t, l);
  }
  return l;
}
function ga(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function wa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Sa(t) && Ea(e);
}
function ka(e, t, n) {
  return n(function () {
    Sa(t) && Ea(e);
  });
}
function Sa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function Ea(e) {
  var t = be(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Lu(e) {
  var t = He();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = nd.bind(null, B, e)),
    [t.memoizedState, e]
  );
}
function Jn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xa() {
  return Le().memoizedState;
}
function Or(e, t, n, r) {
  var l = He();
  (B.flags |= e),
    (l.memoizedState = Jn(1 | t, n, void 0, r === void 0 ? null : r));
}
function dl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var o = Z.memoizedState;
    if (((i = o.destroy), r !== null && xo(r, o.deps))) {
      l.memoizedState = Jn(t, n, i, r);
      return;
    }
  }
  (B.flags |= e), (l.memoizedState = Jn(1 | t, n, i, r));
}
function zu(e, t) {
  return Or(8390656, 8, e, t);
}
function No(e, t) {
  return dl(2048, 8, e, t);
}
function _a(e, t) {
  return dl(4, 2, e, t);
}
function Ca(e, t) {
  return dl(4, 4, e, t);
}
function Na(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Pa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), dl(4, 4, Na.bind(null, t, e), n)
  );
}
function Po() {}
function Ta(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ra(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Oa(e, t, n) {
  return (Mt & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n))
    : (Ue(n, t) || ((n = Ms()), (B.lanes |= n), (Dt |= n), (e.baseState = !0)),
      t);
}
function ed(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (Vl.transition = r);
  }
}
function La() {
  return Le().memoizedState;
}
function td(e, t, n) {
  var r = mt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    za(e))
  )
    Ma(t, n);
  else if (((n = aa(e, t, n, r)), n !== null)) {
    var l = fe();
    Ie(n, e, r, l), Da(n, t, r);
  }
}
function nd(e, t, n) {
  var r = mt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (za(e)) Ma(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ue(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), go(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = aa(e, t, l, r)),
      n !== null && ((l = fe()), Ie(n, e, r, l), Da(n, t, r));
  }
}
function za(e) {
  var t = e.alternate;
  return e === B || (t !== null && t === B);
}
function Ma(e, t) {
  zn = qr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Da(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ro(e, n);
  }
}
var br = {
    readContext: Oe,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  rd = {
    readContext: Oe,
    useCallback: function (e, t) {
      return (He().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Oe,
    useEffect: zu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Or(4194308, 4, Na.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Or(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Or(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = He();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = He();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = td.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = He();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Lu,
    useDebugValue: Po,
    useDeferredValue: function (e) {
      return (He().memoizedState = e);
    },
    useTransition: function () {
      var e = Lu(!1),
        t = e[0];
      return (e = ed.bind(null, e[1])), (He().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = B,
        l = He();
      if ($) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(x(349));
        (Mt & 30) !== 0 || ga(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        zu(ka.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Jn(9, wa.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = He(),
        t = ee.identifierPrefix;
      if ($) {
        var n = Ge,
          r = Xe;
        (n = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Gn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = bf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ld = {
    readContext: Oe,
    useCallback: Ta,
    useContext: Oe,
    useEffect: No,
    useImperativeHandle: Pa,
    useInsertionEffect: _a,
    useLayoutEffect: Ca,
    useMemo: Ra,
    useReducer: Bl,
    useRef: xa,
    useState: function () {
      return Bl(Zn);
    },
    useDebugValue: Po,
    useDeferredValue: function (e) {
      var t = Le();
      return Oa(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Zn)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: va,
    useSyncExternalStore: ya,
    useId: La,
    unstable_isNewReconciler: !1,
  },
  id = {
    readContext: Oe,
    useCallback: Ta,
    useContext: Oe,
    useEffect: No,
    useImperativeHandle: Pa,
    useInsertionEffect: _a,
    useLayoutEffect: Ca,
    useMemo: Ra,
    useReducer: Wl,
    useRef: xa,
    useState: function () {
      return Wl(Zn);
    },
    useDebugValue: Po,
    useDeferredValue: function (e) {
      var t = Le();
      return Z === null ? (t.memoizedState = e) : Oa(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(Zn)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: va,
    useSyncExternalStore: ya,
    useId: La,
    unstable_isNewReconciler: !1,
  };
function an(e, t) {
  try {
    var n = "",
      r = t;
    do (n += zc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ql(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function Ti(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var od = typeof WeakMap == "function" ? WeakMap : Map;
function ja(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      tl || ((tl = !0), (Ui = r)), Ti(e, t);
    }),
    n
  );
}
function Fa(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ti(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ti(e, t),
          typeof r != "function" &&
            (ht === null ? (ht = new Set([this])) : ht.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Mu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new od();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = kd.bind(null, e, t, n)), t.then(e, e));
}
function Du(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ju(e, t, n, r, l) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ze(-1, 1)), (t.tag = 2), pt(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = l), e);
}
var ud = tt.ReactCurrentOwner,
  me = !1;
function ae(e, t, n, r) {
  t.child = e === null ? ha(t, null, n, r) : un(t, e.child, n, r);
}
function Fu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    tn(t, l),
    (r = _o(e, t, n, r, i, l)),
    (n = Co()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        et(e, t, l))
      : ($ && n && fo(t), (t.flags |= 1), ae(e, t, r, l), t.child)
  );
}
function Iu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !jo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ia(e, t, i, r, l))
      : ((e = Dr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), (e.lanes & l) === 0)) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Bn), n(o, r) && e.ref === t.ref)
    )
      return et(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = vt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ia(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bn(i, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        (e.flags & 131072) !== 0 && (me = !0);
      else return (t.lanes = e.lanes), et(e, t, l);
  }
  return Ri(e, t, n, r, l);
}
function Ua(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(Zt, we),
        (we |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(Zt, we),
          (we |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        U(Zt, we),
        (we |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(Zt, we),
      (we |= r);
  return ae(e, t, l, n), t.child;
}
function Aa(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ri(e, t, n, r, l) {
  var i = ye(n) ? Lt : se.current;
  return (
    (i = ln(t, i)),
    tn(t, l),
    (n = _o(e, t, n, r, i, l)),
    (r = Co()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        et(e, t, l))
      : ($ && r && fo(t), (t.flags |= 1), ae(e, t, n, l), t.child)
  );
}
function Uu(e, t, n, r, l) {
  if (ye(n)) {
    var i = !0;
    Qr(t);
  } else i = !1;
  if ((tn(t, l), t.stateNode === null))
    Lr(e, t), da(t, n, r), Pi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Oe(c))
      : ((c = ye(n) ? Lt : se.current), (c = ln(t, c)));
    var S = n.getDerivedStateFromProps,
      y =
        typeof S == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    y ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Ru(t, o, r, c)),
      (lt = !1);
    var h = t.memoizedState;
    (o.state = h),
      Zr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || h !== s || ve.current || lt
        ? (typeof S == "function" && (Ni(t, n, S, r), (s = t.memoizedState)),
          (u = lt || Tu(t, n, u, r, h, s, c))
            ? (y ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ca(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Me(t.type, u)),
      (o.props = c),
      (y = t.pendingProps),
      (h = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Oe(s))
        : ((s = ye(n) ? Lt : se.current), (s = ln(t, s)));
    var g = n.getDerivedStateFromProps;
    (S =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== y || h !== s) && Ru(t, o, r, s)),
      (lt = !1),
      (h = t.memoizedState),
      (o.state = h),
      Zr(t, r, o, l);
    var E = t.memoizedState;
    u !== y || h !== E || ve.current || lt
      ? (typeof g == "function" && (Ni(t, n, g, r), (E = t.memoizedState)),
        (c = lt || Tu(t, n, c, r, h, E, s) || !1)
          ? (S ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, E, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, E, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = E)),
        (o.props = r),
        (o.state = E),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Oi(e, t, n, r, i, l);
}
function Oi(e, t, n, r, l, i) {
  Aa(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && xu(t, n, !1), et(e, t, i);
  (r = t.stateNode), (ud.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = un(t, e.child, null, i)), (t.child = un(t, null, u, i)))
      : ae(e, t, u, i),
    (t.memoizedState = r.state),
    l && xu(t, n, !0),
    t.child
  );
}
function Ha(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Eu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Eu(e, t.context, !1),
    ko(e, t.containerInfo);
}
function Au(e, t, n, r, l) {
  return on(), ho(l), (t.flags |= 256), ae(e, t, n, r), t.child;
}
var Li = { dehydrated: null, treeContext: null, retryLane: 0 };
function zi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $a(e, t, n) {
  var r = t.pendingProps,
    l = V.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    U(V, l & 1),
    e === null)
  )
    return (
      _i(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              (r & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = ml(o, r, 0, null)),
              (e = Ot(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = zi(n)),
              (t.memoizedState = Li),
              e)
            : To(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return sd(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      (o & 1) === 0 && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = vt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = vt(u, i)) : ((i = Ot(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? zi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Li),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = vt(i, { mode: "visible", children: r.children })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function To(e, t) {
  return (
    (t = ml({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function wr(e, t, n, r) {
  return (
    r !== null && ho(r),
    un(t, e.child, null, n),
    (e = To(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function sd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ql(Error(x(422)))), wr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = ml({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Ot(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        (t.mode & 1) !== 0 && un(t, e.child, null, o),
        (t.child.memoizedState = zi(o)),
        (t.memoizedState = Li),
        i);
  if ((t.mode & 1) === 0) return wr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(x(419))), (r = Ql(i, r, void 0)), wr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), me || u)) {
    if (((r = ee), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), be(e, l), Ie(r, e, l, -1));
    }
    return Do(), (r = Ql(Error(x(421)))), wr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Sd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ke = dt(l.nextSibling)),
      (Se = t),
      ($ = !0),
      (je = null),
      e !== null &&
        ((Ne[Pe++] = Xe),
        (Ne[Pe++] = Ge),
        (Ne[Pe++] = zt),
        (Xe = e.id),
        (Ge = e.overflow),
        (zt = t)),
      (t = To(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Hu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ci(e.return, t, n);
}
function Kl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Va(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ae(e, t, r.children, n), (r = V.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hu(e, n, t);
        else if (e.tag === 19) Hu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(V, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Jr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Kl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Jr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Kl(t, !0, n, null, i);
        break;
      case "together":
        Kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Lr(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function et(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dt |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ad(e, t, n) {
  switch (t.tag) {
    case 3:
      Ha(t), on();
      break;
    case 5:
      ma(t);
      break;
    case 1:
      ye(t.type) && Qr(t);
      break;
    case 4:
      ko(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      U(Xr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(V, V.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? $a(e, t, n)
          : (U(V, V.current & 1),
            (e = et(e, t, n)),
            e !== null ? e.sibling : null);
      U(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return Va(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        U(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ua(e, t, n);
  }
  return et(e, t, n);
}
var Ba, Mi, Wa, Qa;
Ba = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Mi = function () {};
Wa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Tt(Be.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ti(e, l)), (r = ti(e, r)), (i = []);
        break;
      case "select":
        (l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = li(e, l)), (r = li(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Br);
    }
    oi(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Fn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Fn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && A("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Qa = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function cd(e, t, n) {
  var r = t.pendingProps;
  switch ((po(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return ye(t.type) && Wr(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        sn(),
        H(ve),
        H(se),
        Eo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (yr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), je !== null && ($i(je), (je = null)))),
        Mi(e, t),
        oe(t),
        null
      );
    case 5:
      So(t);
      var l = Tt(Xn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Wa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return oe(t), null;
        }
        if (((e = Tt(Be.current)), yr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[$e] = t), (r[Kn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              A("cancel", r), A("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              A("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Nn.length; l++) A(Nn[l], r);
              break;
            case "source":
              A("error", r);
              break;
            case "img":
            case "image":
            case "link":
              A("error", r), A("load", r);
              break;
            case "details":
              A("toggle", r);
              break;
            case "input":
              Go(r, i), A("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                A("invalid", r);
              break;
            case "textarea":
              Jo(r, i), A("invalid", r);
          }
          oi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      vr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      vr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Fn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  A("scroll", r);
            }
          switch (n) {
            case "input":
              sr(r), Zo(r, i, !0);
              break;
            case "textarea":
              sr(r), qo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Br);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = gs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[$e] = t),
            (e[Kn] = r),
            Ba(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ui(n, r)), n)) {
              case "dialog":
                A("cancel", e), A("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                A("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Nn.length; l++) A(Nn[l], e);
                l = r;
                break;
              case "source":
                A("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                A("error", e), A("load", e), (l = r);
                break;
              case "details":
                A("toggle", e), (l = r);
                break;
              case "input":
                Go(e, r), (l = ti(e, r)), A("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  A("invalid", e);
                break;
              case "textarea":
                Jo(e, r), (l = li(e, r)), A("invalid", e);
                break;
              default:
                l = r;
            }
            oi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Ss(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ws(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && In(e, s)
                    : typeof s == "number" && In(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Fn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && A("scroll", e)
                      : s != null && Ji(e, i, s, o));
              }
            switch (n) {
              case "input":
                sr(e), Zo(e, r, !1);
                break;
              case "textarea":
                sr(e), qo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + yt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Jt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Jt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Br);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) Qa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = Tt(Xn.current)), Tt(Be.current), yr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$e] = t),
            (i = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                vr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  vr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$e] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (H(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ke !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          sa(), on(), (t.flags |= 98560), (i = !1);
        else if (((i = yr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(x(317));
            i[$e] = t;
          } else
            on(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          oe(t), (i = !1);
        } else je !== null && ($i(je), (je = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (V.current & 1) !== 0
                ? J === 0 && (J = 3)
                : Do())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        sn(), Mi(e, t), e === null && Wn(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return yo(t.type._context), oe(t), null;
    case 17:
      return ye(t.type) && Wr(), oe(t), null;
    case 19:
      if ((H(V), (i = t.memoizedState), i === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Sn(i, !1);
        else {
          if (J !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((o = Jr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Sn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            X() > cn &&
            ((t.flags |= 128), (r = !0), Sn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !$)
            )
              return oe(t), null;
          } else
            2 * X() - i.renderingStartTime > cn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = X()),
          (t.sibling = null),
          (n = V.current),
          U(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        Mo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (we & 1073741824) !== 0 &&
            (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function fd(e, t) {
  switch ((po(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && Wr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        sn(),
        H(ve),
        H(se),
        Eo(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return So(t), null;
    case 13:
      if ((H(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        on();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(V), null;
    case 4:
      return sn(), null;
    case 10:
      return yo(t.type._context), null;
    case 22:
    case 23:
      return Mo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var kr = !1,
  ue = !1,
  dd = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function Gt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function Di(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var $u = !1;
function pd(e, t) {
  if (((yi = Hr), (e = Gs()), co(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            S = 0,
            y = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              y !== n || (l !== 0 && y.nodeType !== 3) || (u = o + l),
                y !== i || (r !== 0 && y.nodeType !== 3) || (s = o + r),
                y.nodeType === 3 && (o += y.nodeValue.length),
                (g = y.firstChild) !== null;

            )
              (h = y), (y = g);
            for (;;) {
              if (y === e) break t;
              if (
                (h === n && ++c === l && (u = o),
                h === i && ++S === r && (s = o),
                (g = y.nextSibling) !== null)
              )
                break;
              (y = h), (h = y.parentNode);
            }
            y = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (gi = { focusedElem: e, selectionRange: n }, Hr = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var E = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (E !== null) {
                  var _ = E.memoizedProps,
                    L = E.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : Me(t.type, _),
                      L
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (m) {
          K(t, t.return, m);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (E = $u), ($u = !1), E;
}
function Mn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Di(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ji(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ka(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ka(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$e], delete t[Kn], delete t[Si], delete t[Gf], delete t[Zf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ya(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Vu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ya(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Br));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fi(e, t, n), e = e.sibling; e !== null; ) Fi(e, t, n), (e = e.sibling);
}
function Ii(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ii(e, t, n), e = e.sibling; e !== null; ) Ii(e, t, n), (e = e.sibling);
}
var te = null,
  De = !1;
function nt(e, t, n) {
  for (n = n.child; n !== null; ) Xa(e, t, n), (n = n.sibling);
}
function Xa(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(il, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || Gt(n, t);
    case 6:
      var r = te,
        l = De;
      (te = null),
        nt(e, t, n),
        (te = r),
        (De = l),
        te !== null &&
          (De
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (De
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, n)
              : e.nodeType === 1 && Al(e, n),
            $n(e))
          : Al(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (l = De),
        (te = n.stateNode.containerInfo),
        (De = !0),
        nt(e, t, n),
        (te = r),
        (De = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Di(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      nt(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (Gt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          K(n, t, u);
        }
      nt(e, t, n);
      break;
    case 21:
      nt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), nt(e, t, n), (ue = r))
        : nt(e, t, n);
      break;
    default:
      nt(e, t, n);
  }
}
function Bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new dd()),
      t.forEach(function (r) {
        var l = Ed.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (te = u.stateNode), (De = !1);
              break e;
            case 3:
              (te = u.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (te = u.stateNode.containerInfo), (De = !0);
              break e;
          }
          u = u.return;
        }
        if (te === null) throw Error(x(160));
        Xa(i, o, l), (te = null), (De = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        K(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ga(t, e), (t = t.sibling);
}
function Ga(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Ae(e), r & 4)) {
        try {
          Mn(3, e, e.return), pl(3, e);
        } catch (_) {
          K(e, e.return, _);
        }
        try {
          Mn(5, e, e.return);
        } catch (_) {
          K(e, e.return, _);
        }
      }
      break;
    case 1:
      ze(t, e), Ae(e), r & 512 && n !== null && Gt(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        Ae(e),
        r & 512 && n !== null && Gt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          In(l, "");
        } catch (_) {
          K(e, e.return, _);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && vs(l, i),
              ui(u, o);
            var c = ui(u, i);
            for (o = 0; o < s.length; o += 2) {
              var S = s[o],
                y = s[o + 1];
              S === "style"
                ? Ss(l, y)
                : S === "dangerouslySetInnerHTML"
                ? ws(l, y)
                : S === "children"
                ? In(l, y)
                : Ji(l, S, y, c);
            }
            switch (u) {
              case "input":
                ni(l, i);
                break;
              case "textarea":
                ys(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Jt(l, !!i.multiple, g, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Jt(l, !!i.multiple, i.defaultValue, !0)
                      : Jt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Kn] = i;
          } catch (_) {
            K(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Ae(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (_) {
          K(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $n(t.containerInfo);
        } catch (_) {
          K(e, e.return, _);
        }
      break;
    case 4:
      ze(t, e), Ae(e);
      break;
    case 13:
      ze(t, e),
        Ae(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Lo = X())),
        r & 4 && Bu(e);
      break;
    case 22:
      if (
        ((S = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (c = ue) || S), ze(t, e), (ue = c)) : ze(t, e),
        Ae(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !S && (e.mode & 1) !== 0)
        )
          for (C = e, S = e.child; S !== null; ) {
            for (y = C = S; C !== null; ) {
              switch (((h = C), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mn(4, h, h.return);
                  break;
                case 1:
                  Gt(h, h.return);
                  var E = h.stateNode;
                  if (typeof E.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (E.props = t.memoizedProps),
                        (E.state = t.memoizedState),
                        E.componentWillUnmount();
                    } catch (_) {
                      K(r, n, _);
                    }
                  }
                  break;
                case 5:
                  Gt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Qu(y);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (C = g)) : Qu(y);
            }
            S = S.sibling;
          }
        e: for (S = null, y = e; ; ) {
          if (y.tag === 5) {
            if (S === null) {
              S = y;
              try {
                (l = y.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = y.stateNode),
                      (s = y.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = ks("display", o)));
              } catch (_) {
                K(e, e.return, _);
              }
            }
          } else if (y.tag === 6) {
            if (S === null)
              try {
                y.stateNode.nodeValue = c ? "" : y.memoizedProps;
              } catch (_) {
                K(e, e.return, _);
              }
          } else if (
            ((y.tag !== 22 && y.tag !== 23) ||
              y.memoizedState === null ||
              y === e) &&
            y.child !== null
          ) {
            (y.child.return = y), (y = y.child);
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            S === y && (S = null), (y = y.return);
          }
          S === y && (S = null), (y.sibling.return = y.return), (y = y.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), Ae(e), r & 4 && Bu(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), Ae(e);
  }
}
function Ae(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ya(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (In(l, ""), (r.flags &= -33));
          var i = Vu(e);
          Ii(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Vu(e);
          Fi(e, u, o);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      K(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hd(e, t, n) {
  (C = e), Za(e);
}
function Za(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || kr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ue;
        u = kr;
        var c = ue;
        if (((kr = o), (ue = s) && !c))
          for (C = l; C !== null; )
            (o = C),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ku(l)
                : s !== null
                ? ((s.return = o), (C = s))
                : Ku(l);
        for (; i !== null; ) (C = i), Za(i), (i = i.sibling);
        (C = l), (kr = u), (ue = c);
      }
      Wu(e);
    } else
      (l.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = l), (C = i))
        : Wu(e);
  }
}
function Wu(e) {
  for (; C !== null; ) {
    var t = C;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Me(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Pu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Pu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var S = c.memoizedState;
                  if (S !== null) {
                    var y = S.dehydrated;
                    y !== null && $n(y);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        ue || (t.flags & 512 && ji(t));
      } catch (h) {
        K(t, t.return, h);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Qu(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Ku(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pl(4, t);
          } catch (s) {
            K(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              K(t, l, s);
            }
          }
          var i = t.return;
          try {
            ji(t);
          } catch (s) {
            K(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ji(t);
          } catch (s) {
            K(t, o, s);
          }
      }
    } catch (s) {
      K(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (C = u);
      break;
    }
    C = t.return;
  }
}
var md = Math.ceil,
  el = tt.ReactCurrentDispatcher,
  Ro = tt.ReactCurrentOwner,
  Re = tt.ReactCurrentBatchConfig,
  j = 0,
  ee = null,
  G = null,
  ne = 0,
  we = 0,
  Zt = kt(0),
  J = 0,
  qn = null,
  Dt = 0,
  hl = 0,
  Oo = 0,
  Dn = null,
  he = null,
  Lo = 0,
  cn = 1 / 0,
  Ke = null,
  tl = !1,
  Ui = null,
  ht = null,
  Sr = !1,
  st = null,
  nl = 0,
  jn = 0,
  Ai = null,
  zr = -1,
  Mr = 0;
function fe() {
  return (j & 6) !== 0 ? X() : zr !== -1 ? zr : (zr = X());
}
function mt(e) {
  return (e.mode & 1) === 0
    ? 1
    : (j & 2) !== 0 && ne !== 0
    ? ne & -ne
    : qf.transition !== null
    ? (Mr === 0 && (Mr = Ms()), Mr)
    : ((e = F),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Hs(e.type))),
      e);
}
function Ie(e, t, n, r) {
  if (50 < jn) throw ((jn = 0), (Ai = null), Error(x(185)));
  er(e, n, r),
    ((j & 2) === 0 || e !== ee) &&
      (e === ee && ((j & 2) === 0 && (hl |= n), J === 4 && ot(e, ne)),
      ge(e, r),
      n === 1 &&
        j === 0 &&
        (t.mode & 1) === 0 &&
        ((cn = X() + 500), cl && St()));
}
function ge(e, t) {
  var n = e.callbackNode;
  Jc(e, t);
  var r = Ar(e, e === ee ? ne : 0);
  if (r === 0)
    n !== null && tu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && tu(n), t === 1))
      e.tag === 0 ? Jf(Yu.bind(null, e)) : ia(Yu.bind(null, e)),
        Yf(function () {
          (j & 6) === 0 && St();
        }),
        (n = null);
    else {
      switch (Ds(r)) {
        case 1:
          n = no;
          break;
        case 4:
          n = Ls;
          break;
        case 16:
          n = Ur;
          break;
        case 536870912:
          n = zs;
          break;
        default:
          n = Ur;
      }
      n = lc(n, Ja.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ja(e, t) {
  if (((zr = -1), (Mr = 0), (j & 6) !== 0)) throw Error(x(327));
  var n = e.callbackNode;
  if (nn() && e.callbackNode !== n) return null;
  var r = Ar(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = rl(e, r);
  else {
    t = r;
    var l = j;
    j |= 2;
    var i = ba();
    (ee !== e || ne !== t) && ((Ke = null), (cn = X() + 500), Rt(e, t));
    do
      try {
        gd();
        break;
      } catch (u) {
        qa(e, u);
      }
    while (1);
    vo(),
      (el.current = i),
      (j = l),
      G !== null ? (t = 0) : ((ee = null), (ne = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = di(e)), l !== 0 && ((r = l), (t = Hi(e, l)))), t === 1)
    )
      throw ((n = qn), Rt(e, 0), ot(e, r), ge(e, X()), n);
    if (t === 6) ot(e, r);
    else {
      if (
        ((l = e.current.alternate),
        (r & 30) === 0 &&
          !vd(l) &&
          ((t = rl(e, r)),
          t === 2 && ((i = di(e)), i !== 0 && ((r = i), (t = Hi(e, i)))),
          t === 1))
      )
        throw ((n = qn), Rt(e, 0), ot(e, r), ge(e, X()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Ct(e, he, Ke);
          break;
        case 3:
          if (
            (ot(e, r), (r & 130023424) === r && ((t = Lo + 500 - X()), 10 < t))
          ) {
            if (Ar(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ki(Ct.bind(null, e, he, Ke), t);
            break;
          }
          Ct(e, he, Ke);
          break;
        case 4:
          if ((ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Fe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = X() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * md(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ki(Ct.bind(null, e, he, Ke), r);
            break;
          }
          Ct(e, he, Ke);
          break;
        case 5:
          Ct(e, he, Ke);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return ge(e, X()), e.callbackNode === n ? Ja.bind(null, e) : null;
}
function Hi(e, t) {
  var n = Dn;
  return (
    e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
    (e = rl(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && $i(t)),
    e
  );
}
function $i(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function vd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ue(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ot(e, t) {
  for (
    t &= ~Oo,
      t &= ~hl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Fe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Yu(e) {
  if ((j & 6) !== 0) throw Error(x(327));
  nn();
  var t = Ar(e, 0);
  if ((t & 1) === 0) return ge(e, X()), null;
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = di(e);
    r !== 0 && ((t = r), (n = Hi(e, r)));
  }
  if (n === 1) throw ((n = qn), Rt(e, 0), ot(e, t), ge(e, X()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ct(e, he, Ke),
    ge(e, X()),
    null
  );
}
function zo(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    (j = n), j === 0 && ((cn = X() + 500), cl && St());
  }
}
function jt(e) {
  st !== null && st.tag === 0 && (j & 6) === 0 && nn();
  var t = j;
  j |= 1;
  var n = Re.transition,
    r = F;
  try {
    if (((Re.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Re.transition = n), (j = t), (j & 6) === 0 && St();
  }
}
function Mo() {
  (we = Zt.current), H(Zt);
}
function Rt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Kf(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((po(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Wr();
          break;
        case 3:
          sn(), H(ve), H(se), Eo();
          break;
        case 5:
          So(r);
          break;
        case 4:
          sn();
          break;
        case 13:
          H(V);
          break;
        case 19:
          H(V);
          break;
        case 10:
          yo(r.type._context);
          break;
        case 22:
        case 23:
          Mo();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (G = e = vt(e.current, null)),
    (ne = we = t),
    (J = 0),
    (qn = null),
    (Oo = hl = Dt = 0),
    (he = Dn = null),
    Pt !== null)
  ) {
    for (t = 0; t < Pt.length; t++)
      if (((n = Pt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Pt = null;
  }
  return e;
}
function qa(e, t) {
  do {
    var n = G;
    try {
      if ((vo(), (Rr.current = br), qr)) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        qr = !1;
      }
      if (
        ((Mt = 0),
        (b = Z = B = null),
        (zn = !1),
        (Gn = 0),
        (Ro.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (qn = t), (G = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = ne),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            S = u,
            y = S.tag;
          if ((S.mode & 1) === 0 && (y === 0 || y === 11 || y === 15)) {
            var h = S.alternate;
            h
              ? ((S.updateQueue = h.updateQueue),
                (S.memoizedState = h.memoizedState),
                (S.lanes = h.lanes))
              : ((S.updateQueue = null), (S.memoizedState = null));
          }
          var g = Du(o);
          if (g !== null) {
            (g.flags &= -257),
              ju(g, o, u, i, t),
              g.mode & 1 && Mu(i, c, t),
              (t = g),
              (s = c);
            var E = t.updateQueue;
            if (E === null) {
              var _ = new Set();
              _.add(s), (t.updateQueue = _);
            } else E.add(s);
            break e;
          } else {
            if ((t & 1) === 0) {
              Mu(i, c, t), Do();
              break e;
            }
            s = Error(x(426));
          }
        } else if ($ && u.mode & 1) {
          var L = Du(o);
          if (L !== null) {
            (L.flags & 65536) === 0 && (L.flags |= 256),
              ju(L, o, u, i, t),
              ho(an(s, u));
            break e;
          }
        }
        (i = s = an(s, u)),
          J !== 4 && (J = 2),
          Dn === null ? (Dn = [i]) : Dn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = ja(i, s, t);
              Nu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                (i.flags & 128) === 0 &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ht === null || !ht.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var m = Fa(i, u, t);
                Nu(i, m);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      tc(n);
    } catch (k) {
      (t = k), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function ba() {
  var e = el.current;
  return (el.current = br), e === null ? br : e;
}
function Do() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    ee === null ||
      ((Dt & 268435455) === 0 && (hl & 268435455) === 0) ||
      ot(ee, ne);
}
function rl(e, t) {
  var n = j;
  j |= 2;
  var r = ba();
  (ee !== e || ne !== t) && ((Ke = null), Rt(e, t));
  do
    try {
      yd();
      break;
    } catch (l) {
      qa(e, l);
    }
  while (1);
  if ((vo(), (j = n), (el.current = r), G !== null)) throw Error(x(261));
  return (ee = null), (ne = 0), J;
}
function yd() {
  for (; G !== null; ) ec(G);
}
function gd() {
  for (; G !== null && !Vc(); ) ec(G);
}
function ec(e) {
  var t = rc(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps),
    t === null ? tc(e) : (G = t),
    (Ro.current = null);
}
function tc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = cd(n, t, we)), n !== null)) {
        G = n;
        return;
      }
    } else {
      if (((n = fd(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (G = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Ct(e, t, n) {
  var r = F,
    l = Re.transition;
  try {
    (Re.transition = null), (F = 1), wd(e, t, n, r);
  } finally {
    (Re.transition = l), (F = r);
  }
  return null;
}
function wd(e, t, n, r) {
  do nn();
  while (st !== null);
  if ((j & 6) !== 0) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (qc(e, i),
    e === ee && ((G = ee = null), (ne = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Sr ||
      ((Sr = !0),
      lc(Ur, function () {
        return nn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = Re.transition), (Re.transition = null);
    var o = F;
    F = 1;
    var u = j;
    (j |= 4),
      (Ro.current = null),
      pd(e, n),
      Ga(n, e),
      Af(gi),
      (Hr = !!yi),
      (gi = yi = null),
      (e.current = n),
      hd(n),
      Bc(),
      (j = u),
      (F = o),
      (Re.transition = i);
  } else e.current = n;
  if (
    (Sr && ((Sr = !1), (st = e), (nl = l)),
    (i = e.pendingLanes),
    i === 0 && (ht = null),
    Kc(n.stateNode),
    ge(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (tl) throw ((tl = !1), (e = Ui), (Ui = null), e);
  return (
    (nl & 1) !== 0 && e.tag !== 0 && nn(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === Ai ? jn++ : ((jn = 0), (Ai = e))) : (jn = 0),
    St(),
    null
  );
}
function nn() {
  if (st !== null) {
    var e = Ds(nl),
      t = Re.transition,
      n = F;
    try {
      if (((Re.transition = null), (F = 16 > e ? 16 : e), st === null))
        var r = !1;
      else {
        if (((e = st), (st = null), (nl = 0), (j & 6) !== 0))
          throw Error(x(331));
        var l = j;
        for (j |= 4, C = e.current; C !== null; ) {
          var i = C,
            o = i.child;
          if ((C.flags & 16) !== 0) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (C = c; C !== null; ) {
                  var S = C;
                  switch (S.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mn(8, S, i);
                  }
                  var y = S.child;
                  if (y !== null) (y.return = S), (C = y);
                  else
                    for (; C !== null; ) {
                      S = C;
                      var h = S.sibling,
                        g = S.return;
                      if ((Ka(S), S === c)) {
                        C = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (C = h);
                        break;
                      }
                      C = g;
                    }
                }
              }
              var E = i.alternate;
              if (E !== null) {
                var _ = E.child;
                if (_ !== null) {
                  E.child = null;
                  do {
                    var L = _.sibling;
                    (_.sibling = null), (_ = L);
                  } while (_ !== null);
                }
              }
              C = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && o !== null)
            (o.return = i), (C = o);
          else
            e: for (; C !== null; ) {
              if (((i = C), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (C = f);
                break e;
              }
              C = i.return;
            }
        }
        var a = e.current;
        for (C = a; C !== null; ) {
          o = C;
          var d = o.child;
          if ((o.subtreeFlags & 2064) !== 0 && d !== null)
            (d.return = o), (C = d);
          else
            e: for (o = a; C !== null; ) {
              if (((u = C), (u.flags & 2048) !== 0))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pl(9, u);
                  }
                } catch (k) {
                  K(u, u.return, k);
                }
              if (u === o) {
                C = null;
                break e;
              }
              var m = u.sibling;
              if (m !== null) {
                (m.return = u.return), (C = m);
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((j = l), St(), Ve && typeof Ve.onPostCommitFiberRoot == "function")
        )
          try {
            Ve.onPostCommitFiberRoot(il, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Re.transition = t);
    }
  }
  return !1;
}
function Xu(e, t, n) {
  (t = an(n, t)),
    (t = ja(e, t, 1)),
    (e = pt(e, t, 1)),
    (t = fe()),
    e !== null && (er(e, 1, t), ge(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) Xu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ht === null || !ht.has(r)))
        ) {
          (e = an(n, e)),
            (e = Fa(t, e, 1)),
            (t = pt(t, e, 1)),
            (e = fe()),
            t !== null && (er(t, 1, e), ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function kd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (J === 4 || (J === 3 && (ne & 130023424) === ne && 500 > X() - Lo)
        ? Rt(e, 0)
        : (Oo |= n)),
    ge(e, t);
}
function nc(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = fr), (fr <<= 1), (fr & 130023424) === 0 && (fr = 4194304)));
  var n = fe();
  (e = be(e, t)), e !== null && (er(e, t, n), ge(e, n));
}
function Sd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), nc(e, n);
}
function Ed(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), nc(e, n);
}
var rc;
rc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) me = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (me = !1), ad(e, t, n);
      me = (e.flags & 131072) !== 0;
    }
  else (me = !1), $ && (t.flags & 1048576) !== 0 && oa(t, Yr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Lr(e, t), (e = t.pendingProps);
      var l = ln(t, se.current);
      tn(t, n), (l = _o(null, t, r, e, l, n));
      var i = Co();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((i = !0), Qr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            wo(t),
            (l.updater = fl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Pi(t, r, e, n),
            (t = Oi(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && fo(t), ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Lr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = _d(r)),
          (e = Me(r, e)),
          l)
        ) {
          case 0:
            t = Ri(null, t, r, e, n);
            break e;
          case 1:
            t = Uu(null, t, r, e, n);
            break e;
          case 11:
            t = Fu(null, t, r, e, n);
            break e;
          case 14:
            t = Iu(null, t, r, Me(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Ri(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Uu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ha(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          ca(e, t),
          Zr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = an(Error(x(423)), t)), (t = Au(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = an(Error(x(424)), t)), (t = Au(e, t, r, n, l));
            break e;
          } else
            for (
              ke = dt(t.stateNode.containerInfo.firstChild),
                Se = t,
                $ = !0,
                je = null,
                n = ha(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((on(), r === l)) {
            t = et(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ma(t),
        e === null && _i(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        wi(r, l) ? (o = null) : i !== null && wi(r, i) && (t.flags |= 32),
        Aa(e, t),
        ae(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && _i(t), null;
    case 13:
      return $a(e, t, n);
    case 4:
      return (
        ko(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = un(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Fu(e, t, r, l, n)
      );
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          U(Xr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ue(i.value, o)) {
            if (i.children === l.children && !ve.current) {
              t = et(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ze(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var S = c.pending;
                        S === null
                          ? (s.next = s)
                          : ((s.next = S.next), (S.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ci(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(x(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Ci(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ae(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        tn(t, n),
        (l = Oe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Me(r, t.pendingProps)),
        (l = Me(r.type, l)),
        Iu(e, t, r, l, n)
      );
    case 15:
      return Ia(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Lr(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), Qr(t)) : (e = !1),
        tn(t, n),
        da(t, r, l),
        Pi(t, r, l, n),
        Oi(null, t, r, !0, e, n)
      );
    case 19:
      return Va(e, t, n);
    case 22:
      return Ua(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function lc(e, t) {
  return Os(e, t);
}
function xd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Te(e, t, n, r) {
  return new xd(e, t, n, r);
}
function jo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _d(e) {
  if (typeof e == "function") return jo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === bi)) return 11;
    if (e === eo) return 14;
  }
  return 2;
}
function vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Te(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Dr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) jo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Ht:
        return Ot(n.children, l, i, t);
      case qi:
        (o = 8), (l |= 8);
        break;
      case Jl:
        return (
          (e = Te(12, n, t, l | 2)), (e.elementType = Jl), (e.lanes = i), e
        );
      case ql:
        return (e = Te(13, n, t, l)), (e.elementType = ql), (e.lanes = i), e;
      case bl:
        return (e = Te(19, n, t, l)), (e.elementType = bl), (e.lanes = i), e;
      case ps:
        return ml(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case fs:
              o = 10;
              break e;
            case ds:
              o = 9;
              break e;
            case bi:
              o = 11;
              break e;
            case eo:
              o = 14;
              break e;
            case rt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Te(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ot(e, t, n, r) {
  return (e = Te(7, e, r, t)), (e.lanes = n), e;
}
function ml(e, t, n, r) {
  return (
    (e = Te(22, e, r, t)),
    (e.elementType = ps),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Yl(e, t, n) {
  return (e = Te(6, e, null, t)), (e.lanes = n), e;
}
function Xl(e, t, n) {
  return (
    (t = Te(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Cd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Tl(0)),
    (this.expirationTimes = Tl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Tl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Fo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Cd(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Te(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    wo(i),
    e
  );
}
function Nd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: At,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ic(e) {
  if (!e) return gt;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return la(e, n, t);
  }
  return t;
}
function oc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Fo(n, r, !0, e, l, i, o, u, s)),
    (e.context = ic(null)),
    (n = e.current),
    (r = fe()),
    (l = mt(n)),
    (i = Ze(r, l)),
    (i.callback = t != null ? t : null),
    pt(n, i, l),
    (e.current.lanes = l),
    er(e, l, r),
    ge(e, r),
    e
  );
}
function vl(e, t, n, r) {
  var l = t.current,
    i = fe(),
    o = mt(l);
  return (
    (n = ic(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ze(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pt(l, t, o)),
    e !== null && (Ie(e, l, o, i), Tr(e, l, o)),
    o
  );
}
function ll(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Io(e, t) {
  Gu(e, t), (e = e.alternate) && Gu(e, t);
}
function Pd() {
  return null;
}
var uc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Uo(e) {
  this._internalRoot = e;
}
yl.prototype.render = Uo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  vl(e, t, null, null);
};
yl.prototype.unmount = Uo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jt(function () {
      vl(null, e, null, null);
    }),
      (t[qe] = null);
  }
};
function yl(e) {
  this._internalRoot = e;
}
yl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Is();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < it.length && t !== 0 && t < it[n].priority; n++);
    it.splice(n, 0, e), n === 0 && As(e);
  }
};
function Ao(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Zu() {}
function Td(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = ll(o);
        i.call(c);
      };
    }
    var o = oc(t, r, e, 0, null, !1, !1, "", Zu);
    return (
      (e._reactRootContainer = o),
      (e[qe] = o.current),
      Wn(e.nodeType === 8 ? e.parentNode : e),
      jt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = ll(s);
      u.call(c);
    };
  }
  var s = Fo(e, 0, !1, null, null, !1, !1, "", Zu);
  return (
    (e._reactRootContainer = s),
    (e[qe] = s.current),
    Wn(e.nodeType === 8 ? e.parentNode : e),
    jt(function () {
      vl(t, s, n, r);
    }),
    s
  );
}
function wl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ll(o);
        u.call(s);
      };
    }
    vl(t, o, e, l);
  } else o = Td(n, t, e, l, r);
  return ll(o);
}
js = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cn(t.pendingLanes);
        n !== 0 &&
          (ro(t, n | 1), ge(t, X()), (j & 6) === 0 && ((cn = X() + 500), St()));
      }
      break;
    case 13:
      jt(function () {
        var r = be(e, 1);
        if (r !== null) {
          var l = fe();
          Ie(r, e, 1, l);
        }
      }),
        Io(e, 1);
  }
};
lo = function (e) {
  if (e.tag === 13) {
    var t = be(e, 134217728);
    if (t !== null) {
      var n = fe();
      Ie(t, e, 134217728, n);
    }
    Io(e, 134217728);
  }
};
Fs = function (e) {
  if (e.tag === 13) {
    var t = mt(e),
      n = be(e, t);
    if (n !== null) {
      var r = fe();
      Ie(n, e, t, r);
    }
    Io(e, t);
  }
};
Is = function () {
  return F;
};
Us = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
ai = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ni(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = al(r);
            if (!l) throw Error(x(90));
            ms(r), ni(r, l);
          }
        }
      }
      break;
    case "textarea":
      ys(e, n);
      break;
    case "select":
      (t = n.value), t != null && Jt(e, !!n.multiple, t, !1);
  }
};
_s = zo;
Cs = jt;
var Rd = { usingClientEntryPoint: !1, Events: [nr, Wt, al, Es, xs, zo] },
  En = {
    findFiberByHostInstance: Nt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Od = {
    bundleType: En.bundleType,
    version: En.version,
    rendererPackageName: En.rendererPackageName,
    rendererConfig: En.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ts(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: En.findFiberByHostInstance || Pd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Er.isDisabled && Er.supportsFiber)
    try {
      (il = Er.inject(Od)), (Ve = Er);
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ao(t)) throw Error(x(200));
  return Nd(e, t, null, n);
};
xe.createRoot = function (e, t) {
  if (!Ao(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = uc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Fo(e, 1, !1, null, null, n, !1, r, l)),
    (e[qe] = t.current),
    Wn(e.nodeType === 8 ? e.parentNode : e),
    new Uo(t)
  );
};
xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = Ts(t)), (e = e === null ? null : e.stateNode), e;
};
xe.flushSync = function (e) {
  return jt(e);
};
xe.hydrate = function (e, t, n) {
  if (!gl(t)) throw Error(x(200));
  return wl(null, e, t, !0, n);
};
xe.hydrateRoot = function (e, t, n) {
  if (!Ao(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = uc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = oc(t, null, e, 1, n != null ? n : null, l, !1, i, o)),
    (e[qe] = t.current),
    Wn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new yl(t);
};
xe.render = function (e, t, n) {
  if (!gl(t)) throw Error(x(200));
  return wl(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function (e) {
  if (!gl(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (jt(function () {
        wl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qe] = null);
        });
      }),
      !0)
    : !1;
};
xe.unstable_batchedUpdates = zo;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!gl(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return wl(e, t, n, !1, r);
};
xe.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = xe);
})(os);
var Ju = os.exports;
(Gl.createRoot = Ju.createRoot), (Gl.hydrateRoot = Ju.hydrateRoot);
var Ho = { exports: {} },
  kl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ld = fn.exports,
  zd = Symbol.for("react.element"),
  Md = Symbol.for("react.fragment"),
  Dd = Object.prototype.hasOwnProperty,
  jd = Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Fd = { key: !0, ref: !0, __self: !0, __source: !0 };
function sc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Dd.call(t, r) && !Fd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: zd,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: jd.current,
  };
}
kl.Fragment = Md;
kl.jsx = sc;
kl.jsxs = sc;
(function (e) {
  e.exports = kl;
})(Ho);
const R = Ho.exports.jsx,
  ce = Ho.exports.jsxs,
  Id = () =>
    ce("div", {
      className: "h-[100vh] flex flex-col md:flex-row",
      children: [
        R("section", {
          className:
            "h-4/6 md:h-screen md:w-2/3 md:items-center bg-blueDark flex justify-center p-20 pt-20 pb-0",
          children: ce("div", {
            className:
              "flex flex-col bg-[#0a182e] md:drop-shadow-2xl md:p-10 md:rounded-2xl",
            children: [
              R("p", {
                className:
                  "text-greyLight font-Roboto text-left text-base mb-2 tracking-wider",
                children: "Bienvenido",
              }),
              R("h1", {
                className:
                  "text-greenLight text-5xl md:text-7xl text-left font-bold font-Roboto",
                children: "Desarrollador Web.",
              }),
              R("p", {
                className:
                  "text-left text-base text-white mt-8 font-Roboto md:text-2xl",
                children:
                  "Soy un ingeniero Multimedia con inter\xE9s en el desarrollo web.",
              }),
              R("a", {
                href: "./files/CV-Alejandro-Bernardo.pdf",
                download: !0,
                className: "mt-8 mr-2 mb-2 ",
                children: R("button", {
                  type: "button",
                  className:
                    "w-full text-white bg-gradient-to-r bg-greenLight hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-greyLight font-medium rounded-lg text-center text-sm px-5 py-2.5",
                  children: "Descargar CV",
                }),
              }),
              R("p", {
                className:
                  "mt-8 self-center text-left text-gray-600 font-Caveat text-2xl",
                children:
                  "\xA1Interesado en aprender nuevas tecnolog\xEDas y mejorar las ya exploradas!",
              }),
            ],
          }),
        }),
        R("section", {
          className:
            "h-2/6 md:h-screen md:w-1/3 bg-greenLight flex justify-center items-center",
          children: ce("div", {
            className: "p-1 flex flex-row md:flex-col items-center ",
            children: [
              R("img", {
                className:
                  "w-52 h-44 rounded-2xl drop-shadow-2xl bg-[#3c968b] mr-10 md:self-center md:mr-0",
                src: "https://res.cloudinary.com/diynu0wll/image/upload/v1668696500/personal/snpwm669tbnp7urg8ecm.png",
                alt: "Avatar",
              }),
              ce("div", {
                children: [
                  R("p", {
                    className:
                      "font-Caveat font-bold text-xl w-full md:mt-10 text-gray-300",
                    children: "Alejandro Bernardo Rup\xE9rez.",
                  }),
                  R("p", {
                    className:
                      "font-Caveat font-bold text-xl w-full text-gray-300",
                    children: "Ingeniero Multimedia.",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
var Vi = { exports: {} },
  $o = { exports: {} },
  Ud = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Ad = Ud,
  Hd = Ad;
function ac() {}
function cc() {}
cc.resetWarningCache = ac;
var $d = function () {
  function e(r, l, i, o, u, s) {
    if (s !== Hd) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: cc,
    resetWarningCache: ac,
  };
  return (n.PropTypes = n), n;
};
$o.exports = $d();
var Bi = { exports: {} },
  Wi = { exports: {} },
  Vo = {};
(function (e) {
  function t(a) {
    try {
      return _.insertRule(a, _.cssRules.length);
    } catch {
      console.warn("react-reveal - animation failed");
    }
  }
  function n(a, d, m, k, p) {
    var w = Math.log(k),
      v = Math.log(p),
      T = (v - w) / (m - d);
    return Math.exp(w + T * (a - d));
  }
  function r(a) {
    if (!_) return "";
    var d = "@keyframes " + (L + g) + "{" + a + "}",
      m = E[a];
    return m
      ? "" + L + m
      : (_.insertRule(d, _.cssRules.length), (E[a] = g), "" + L + g++);
  }
  function l() {
    y ||
      ((e.globalHide = y = !0),
      window.removeEventListener("scroll", l, !0),
      t("." + o + " { opacity: 0; }"),
      window.removeEventListener("orientationchange", l, !0),
      window.document.removeEventListener("visibilitychange", l));
  }
  function i(a) {
    var d = a.ssrFadeout;
    e.fadeOutEnabled = d;
  }
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.insertRule = t),
    (e.cascade = n),
    (e.animation = r),
    (e.hideAll = l),
    (e.default = i);
  var o = (e.namespace = "react-reveal");
  e.defaults = { duration: 1e3, delay: 0, count: 1 };
  var u = (e.ssr = !0),
    s = (e.observerMode = !1),
    c = (e.raf = function (a) {
      return window.setTimeout(a, 66);
    }),
    S = (e.disableSsr = function () {
      return (e.ssr = u = !1);
    });
  (e.fadeOutEnabled = !1),
    (e.ssrFadeout = function () {
      var a = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      return (e.fadeOutEnabled = a);
    });
  var y = (e.globalHide = !1);
  e.ie10 = !1;
  var h = (e.collapseend = void 0),
    g = 1,
    E = {},
    _ = !1,
    L = o + "-" + Math.floor(1e15 * Math.random()) + "-";
  if (
    typeof window < "u" &&
    window.name !== "nodejs" &&
    window.document &&
    typeof navigator < "u"
  ) {
    (e.observerMode = s =
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype &&
      /\{\s*\[native code\]\s*\}/.test("" + IntersectionObserver)),
      (e.raf = c =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        c),
      (e.ssr = u =
        window.document.querySelectorAll("div[data-reactroot]").length > 0),
      navigator.appVersion.indexOf("MSIE 10") !== -1 && (e.ie10 = !0),
      u &&
        "performance" in window &&
        "timing" in window.performance &&
        "domContentLoadedEventEnd" in window.performance.timing &&
        window.performance.timing.domLoading &&
        Date.now() - window.performance.timing.domLoading < 300 &&
        (e.ssr = u = !1),
      u && window.setTimeout(S, 1500),
      s ||
        ((e.collapseend = h = document.createEvent("Event")),
        h.initEvent("collapseend", !0, !0));
    var f = document.createElement("style");
    document.head.appendChild(f),
      f.sheet &&
        f.sheet.cssRules &&
        f.sheet.insertRule &&
        ((_ = f.sheet),
        window.addEventListener("scroll", l, !0),
        window.addEventListener("orientationchange", l, !0),
        window.document.addEventListener("visibilitychange", l));
  }
})(Vo);
(function (e, t) {
  function n(m) {
    return m && m.__esModule ? m : { default: m };
  }
  function r(m, k, p) {
    return (
      k in m
        ? Object.defineProperty(m, k, {
            value: p,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (m[k] = p),
      m
    );
  }
  function l(m, k) {
    if (!(m instanceof k))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(m, k) {
    if (!m)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return !k || (typeof k != "object" && typeof k != "function") ? m : k;
  }
  function o(m, k) {
    if (typeof k != "function" && k !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof k
      );
    (m.prototype = Object.create(k && k.prototype, {
      constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 },
    })),
      k &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(m, k)
          : (m.__proto__ = k));
  }
  Object.defineProperty(t, "__esModule", { value: !0 });
  var u =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (m) {
            return typeof m;
          }
        : function (m) {
            return m &&
              typeof Symbol == "function" &&
              m.constructor === Symbol &&
              m !== Symbol.prototype
              ? "symbol"
              : typeof m;
          },
    s = (function () {
      function m(k, p) {
        var w = [],
          v = !0,
          T = !1,
          P = void 0;
        try {
          for (
            var D, I = k[Symbol.iterator]();
            !(v = (D = I.next()).done) &&
            (w.push(D.value), !p || w.length !== p);
            v = !0
          );
        } catch (Q) {
          (T = !0), (P = Q);
        } finally {
          try {
            !v && I.return && I.return();
          } finally {
            if (T) throw P;
          }
        }
        return w;
      }
      return function (k, p) {
        if (Array.isArray(k)) return k;
        if (Symbol.iterator in Object(k)) return m(k, p);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
    })(),
    c =
      Object.assign ||
      function (m) {
        for (var k = 1; k < arguments.length; k++) {
          var p = arguments[k];
          for (var w in p)
            Object.prototype.hasOwnProperty.call(p, w) && (m[w] = p[w]);
        }
        return m;
      },
    S = (function () {
      function m(k, p) {
        for (var w = 0; w < p.length; w++) {
          var v = p[w];
          (v.enumerable = v.enumerable || !1),
            (v.configurable = !0),
            "value" in v && (v.writable = !0),
            Object.defineProperty(k, v.key, v);
        }
      }
      return function (k, p, w) {
        return p && m(k.prototype, p), w && m(k, w), k;
      };
    })(),
    y = fn.exports,
    h = n(y),
    g = $o.exports,
    E = Vo,
    _ = (0, g.shape)({
      make: g.func,
      duration: g.number.isRequired,
      delay: g.number.isRequired,
      forever: g.bool,
      count: g.number.isRequired,
      style: g.object.isRequired,
      reverse: g.bool,
    }),
    L = {
      collapse: g.bool,
      collapseEl: g.element,
      cascade: g.bool,
      wait: g.number,
      force: g.bool,
      disabled: g.bool,
      appear: g.bool,
      enter: g.bool,
      exit: g.bool,
      fraction: g.number,
      refProp: g.string,
      innerRef: g.func,
      onReveal: g.func,
      unmountOnExit: g.bool,
      mountOnEnter: g.bool,
      inEffect: _.isRequired,
      outEffect: (0, g.oneOfType)([_, (0, g.oneOf)([!1])]).isRequired,
      ssrReveal: g.bool,
      collapseOnly: g.bool,
      ssrFadeout: g.bool,
    },
    f = { fraction: 0.2, refProp: "ref" },
    a = { transitionGroup: g.object },
    d = (function (m) {
      function k(p, w) {
        l(this, k);
        var v = i(
          this,
          (k.__proto__ || Object.getPrototypeOf(k)).call(this, p, w)
        );
        return (
          (v.isOn = p.when === void 0 || !!p.when),
          (v.state = {
            collapse: p.collapse ? k.getInitialCollapseStyle(p) : void 0,
            style: {
              opacity: (v.isOn && !p.ssrReveal) || !p.outEffect ? void 0 : 0,
            },
          }),
          (v.savedChild = !1),
          (v.isShown = !1),
          E.observerMode
            ? (v.handleObserve = v.handleObserve.bind(v))
            : ((v.revealHandler = v.makeHandler(v.reveal)),
              (v.resizeHandler = v.makeHandler(v.resize))),
          (v.saveRef = v.saveRef.bind(v)),
          v
        );
      }
      return (
        o(k, m),
        S(
          k,
          [
            {
              key: "saveRef",
              value: function (p) {
                this.childRef && this.childRef(p),
                  this.props.innerRef && this.props.innerRef(p),
                  this.el !== p &&
                    ((this.el = p && "offsetHeight" in p ? p : void 0),
                    this.observe(this.props, !0));
              },
            },
            {
              key: "invisible",
              value: function () {
                this &&
                  this.el &&
                  ((this.savedChild = !1),
                  this.isShown ||
                    (this.setState({
                      hasExited: !0,
                      collapse: this.props.collapse
                        ? c({}, this.state.collapse, { visibility: "hidden" })
                        : null,
                      style: { opacity: 0 },
                    }),
                    !E.observerMode &&
                      this.props.collapse &&
                      window.document.dispatchEvent(E.collapseend)));
              },
            },
            {
              key: "animationEnd",
              value: function (p, w, v) {
                var T = this,
                  P = v.forever,
                  D = v.count,
                  I = v.delay,
                  Q = v.duration;
                if (!P) {
                  var le = function () {
                    T && T.el && ((T.animationEndTimeout = void 0), p.call(T));
                  };
                  this.animationEndTimeout = window.setTimeout(
                    le,
                    I + (Q + (w ? Q : 0) * D)
                  );
                }
              },
            },
            {
              key: "getDimensionValue",
              value: function () {
                return (
                  this.el.offsetHeight +
                  parseInt(
                    window
                      .getComputedStyle(this.el, null)
                      .getPropertyValue("margin-top"),
                    10
                  ) +
                  parseInt(
                    window
                      .getComputedStyle(this.el, null)
                      .getPropertyValue("margin-bottom"),
                    10
                  )
                );
              },
            },
            {
              key: "collapse",
              value: function (p, w, v) {
                var T = v.duration + (w.cascade ? v.duration : 0),
                  P = this.isOn ? this.getDimensionValue() : 0,
                  D = void 0,
                  I = void 0;
                if (w.collapseOnly) (D = v.duration / 3), (I = v.delay);
                else {
                  var Q = T >> 2,
                    le = Q >> 1;
                  (D = Q),
                    (I = v.delay + (this.isOn ? 0 : T - Q - le)),
                    (p.style.animationDuration =
                      T - Q + (this.isOn ? le : -le) + "ms"),
                    (p.style.animationDelay =
                      v.delay + (this.isOn ? Q - le : 0) + "ms");
                }
                return (
                  (p.collapse = {
                    height: P,
                    transition: "height " + D + "ms ease " + I + "ms",
                    overflow: w.collapseOnly ? "hidden" : void 0,
                  }),
                  p
                );
              },
            },
            {
              key: "animate",
              value: function (p) {
                if (
                  this &&
                  this.el &&
                  (this.unlisten(), this.isShown !== this.isOn)
                ) {
                  this.isShown = this.isOn;
                  var w = !this.isOn && p.outEffect,
                    v = p[w ? "outEffect" : "inEffect"],
                    T = ("style" in v && v.style.animationName) || void 0,
                    P = void 0;
                  p.collapseOnly
                    ? (P = {
                        hasAppeared: !0,
                        hasExited: !1,
                        style: { opacity: 1 },
                      })
                    : ((p.outEffect || this.isOn) && v.make && (T = v.make),
                      (P = {
                        hasAppeared: !0,
                        hasExited: !1,
                        collapse: void 0,
                        style: c({}, v.style, {
                          animationDuration: v.duration + "ms",
                          animationDelay: v.delay + "ms",
                          animationIterationCount: v.forever
                            ? "infinite"
                            : v.count,
                          opacity: 1,
                          animationName: T,
                        }),
                        className: v.className,
                      })),
                    this.setState(p.collapse ? this.collapse(P, p, v) : P),
                    w
                      ? ((this.savedChild = h.default.cloneElement(
                          this.getChild()
                        )),
                        this.animationEnd(this.invisible, p.cascade, v))
                      : (this.savedChild = !1),
                    this.onReveal(p);
                }
              },
            },
            {
              key: "onReveal",
              value: function (p) {
                p.onReveal &&
                  this.isOn &&
                  (this.onRevealTimeout &&
                    (this.onRevealTimeout = window.clearTimeout(
                      this.onRevealTimeout
                    )),
                  p.wait
                    ? (this.onRevealTimeout = window.setTimeout(
                        p.onReveal,
                        p.wait
                      ))
                    : p.onReveal());
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.unlisten(), E.ssr && (0, E.disableSsr)();
              },
            },
            {
              key: "handleObserve",
              value: function (p, w) {
                s(p, 1)[0].intersectionRatio > 0 &&
                  (w.disconnect(),
                  (this.observer = null),
                  this.reveal(this.props, !0));
              },
            },
            {
              key: "observe",
              value: function (p) {
                var w =
                  arguments.length > 1 &&
                  arguments[1] !== void 0 &&
                  arguments[1];
                if (this.el && E.observerMode) {
                  if (this.observer) {
                    if (!w) return;
                    this.observer.disconnect();
                  } else if (w) return;
                  (this.observer = new IntersectionObserver(
                    this.handleObserve,
                    { threshold: p.fraction }
                  )),
                    this.observer.observe(this.el);
                }
              },
            },
            {
              key: "reveal",
              value: function (p) {
                var w = this,
                  v =
                    arguments.length > 1 &&
                    arguments[1] !== void 0 &&
                    arguments[1];
                E.globalHide || (0, E.hideAll)(),
                  this &&
                    this.el &&
                    (p || (p = this.props),
                    E.ssr && (0, E.disableSsr)(),
                    this.isOn && this.isShown && p.spy !== void 0
                      ? ((this.isShown = !1),
                        this.setState({ style: {} }),
                        window.setTimeout(function () {
                          return w.reveal(p);
                        }, 200))
                      : v || this.inViewport(p) || p.force
                      ? this.animate(p)
                      : E.observerMode
                      ? this.observe(p)
                      : this.listen());
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                var p = this;
                if (this.el && !this.props.disabled) {
                  this.props.collapseOnly ||
                    ("make" in this.props.inEffect &&
                      this.props.inEffect.make(!1, this.props),
                    this.props.when !== void 0 &&
                      this.props.outEffect &&
                      "make" in this.props.outEffect &&
                      this.props.outEffect.make(!0, this.props));
                  var w = this.context.transitionGroup,
                    v =
                      w && !w.isMounting
                        ? !("enter" in this.props && this.props.enter === !1)
                        : this.props.appear;
                  return this.isOn &&
                    (((this.props.when !== void 0 ||
                      this.props.spy !== void 0) &&
                      !v) ||
                      (E.ssr &&
                        !E.fadeOutEnabled &&
                        !this.props.ssrFadeout &&
                        this.props.outEffect &&
                        !this.props.ssrReveal &&
                        k.getTop(this.el) <
                          window.pageYOffset + window.innerHeight))
                    ? ((this.isShown = !0),
                      this.setState({
                        hasAppeared: !0,
                        collapse: this.props.collapse
                          ? { height: this.getDimensionValue() }
                          : this.state.collapse,
                        style: { opacity: 1 },
                      }),
                      void this.onReveal(this.props))
                    : E.ssr &&
                      (E.fadeOutEnabled || this.props.ssrFadeout) &&
                      this.props.outEffect &&
                      k.getTop(this.el) <
                        window.pageYOffset + window.innerHeight
                    ? (this.setState({
                        style: {
                          opacity: 0,
                          transition: "opacity 1000ms 1000ms",
                        },
                      }),
                      void window.setTimeout(function () {
                        return p.reveal(p.props, !0);
                      }, 2e3))
                    : void (
                        this.isOn &&
                        (this.props.force
                          ? this.animate(this.props)
                          : this.reveal(this.props))
                      );
                }
              },
            },
            {
              key: "cascade",
              value: function (p) {
                var w = this,
                  v = void 0;
                v =
                  typeof p == "string"
                    ? p.split("").map(function (Ce, We) {
                        return h.default.createElement(
                          "span",
                          {
                            key: We,
                            style: {
                              display: "inline-block",
                              whiteSpace: "pre",
                            },
                          },
                          Ce
                        );
                      })
                    : h.default.Children.toArray(p);
                var T =
                    this.props[
                      this.isOn || !this.props.outEffect
                        ? "inEffect"
                        : "outEffect"
                    ],
                  P = T.duration,
                  D = T.reverse,
                  I = v.length,
                  Q = 2 * P;
                this.props.collapse &&
                  ((Q = parseInt(this.state.style.animationDuration, 10)),
                  (P = Q / 2));
                var le = D ? I : 0;
                return (v = v.map(function (Ce) {
                  return (Ce === void 0 ? "undefined" : u(Ce)) === "object" &&
                    Ce
                    ? h.default.cloneElement(Ce, {
                        style: c({}, Ce.props.style, w.state.style, {
                          animationDuration:
                            Math.round(
                              (0, E.cascade)(D ? le-- : le++, 0, I, P, Q)
                            ) + "ms",
                        }),
                      })
                    : Ce;
                }));
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function (p) {
                if (
                  (p.when !== void 0 && (this.isOn = !!p.when),
                  p.fraction !== this.props.fraction && this.observe(p, !0),
                  !this.isOn && p.onExited && "exit" in p && p.exit === !1)
                )
                  return void p.onExited();
                p.disabled ||
                  (p.collapse &&
                    !this.props.collapse &&
                    (this.setState({
                      style: {},
                      collapse: k.getInitialCollapseStyle(p),
                    }),
                    (this.isShown = !1)),
                  (p.when === this.props.when && p.spy === this.props.spy) ||
                    this.reveal(p),
                  this.onRevealTimeout &&
                    !this.isOn &&
                    (this.onRevealTimeout = window.clearTimeout(
                      this.onRevealTimeout
                    )));
              },
            },
            {
              key: "getChild",
              value: function () {
                if (this.savedChild && !this.props.disabled)
                  return this.savedChild;
                if (u(this.props.children) === "object") {
                  var p = h.default.Children.only(this.props.children);
                  return ("type" in p && typeof p.type == "string") ||
                    this.props.refProp !== "ref"
                    ? p
                    : h.default.createElement("div", null, p);
                }
                return h.default.createElement(
                  "div",
                  null,
                  this.props.children
                );
              },
            },
            {
              key: "render",
              value: function () {
                var p = void 0;
                p = this.state.hasAppeared
                  ? !this.props.unmountOnExit ||
                    !this.state.hasExited ||
                    this.isOn
                  : !this.props.mountOnEnter || this.isOn;
                var w = this.getChild();
                typeof w.ref == "function" && (this.childRef = w.ref);
                var v = !1,
                  T = w.props,
                  P = T.style,
                  D = T.className,
                  I = T.children,
                  Q = this.props.disabled
                    ? D
                    : (this.props.outEffect ? E.namespace : "") +
                        (this.state.className
                          ? " " + this.state.className
                          : "") +
                        (D ? " " + D : "") || void 0,
                  le = void 0;
                typeof this.state.style.animationName == "function" &&
                  (this.state.style.animationName =
                    this.state.style.animationName(!this.isOn, this.props)),
                  this.props.cascade &&
                  !this.props.disabled &&
                  I &&
                  this.state.style.animationName
                    ? ((v = this.cascade(I)), (le = c({}, P, { opacity: 1 })))
                    : (le = this.props.disabled
                        ? P
                        : c({}, P, this.state.style));
                var Ce = c(
                    {},
                    this.props.props,
                    r(
                      { className: Q, style: le },
                      this.props.refProp,
                      this.saveRef
                    )
                  ),
                  We = h.default.cloneElement(w, Ce, p ? v || I : void 0);
                return this.props.collapse !== void 0
                  ? this.props.collapseEl
                    ? h.default.cloneElement(this.props.collapseEl, {
                        style: c(
                          {},
                          this.props.collapseEl.style,
                          this.props.disabled ? void 0 : this.state.collapse
                        ),
                        children: We,
                      })
                    : h.default.createElement("div", {
                        style: this.props.disabled
                          ? void 0
                          : this.state.collapse,
                        children: We,
                      })
                  : We;
              },
            },
            {
              key: "makeHandler",
              value: function (p) {
                var w = this,
                  v = function () {
                    p.call(w, w.props), (w.ticking = !1);
                  };
                return function () {
                  w.ticking || ((0, E.raf)(v), (w.ticking = !0));
                };
              },
            },
            {
              key: "inViewport",
              value: function (p) {
                if (!this.el || window.document.hidden) return !1;
                var w = this.el.offsetHeight,
                  v = window.pageYOffset - k.getTop(this.el),
                  T =
                    Math.min(w, window.innerHeight) *
                    (E.globalHide ? p.fraction : 0);
                return v > T - window.innerHeight && v < w - T;
              },
            },
            {
              key: "resize",
              value: function (p) {
                this &&
                  this.el &&
                  this.isOn &&
                  this.inViewport(p) &&
                  (this.unlisten(),
                  (this.isShown = this.isOn),
                  this.setState({
                    hasExited: !this.isOn,
                    hasAppeared: !0,
                    collapse: void 0,
                    style: { opacity: this.isOn || !p.outEffect ? 1 : 0 },
                  }),
                  this.onReveal(p));
              },
            },
            {
              key: "listen",
              value: function () {
                E.observerMode ||
                  this.isListener ||
                  ((this.isListener = !0),
                  window.addEventListener("scroll", this.revealHandler, {
                    passive: !0,
                  }),
                  window.addEventListener(
                    "orientationchange",
                    this.revealHandler,
                    { passive: !0 }
                  ),
                  window.document.addEventListener(
                    "visibilitychange",
                    this.revealHandler,
                    { passive: !0 }
                  ),
                  window.document.addEventListener(
                    "collapseend",
                    this.revealHandler,
                    { passive: !0 }
                  ),
                  window.addEventListener("resize", this.resizeHandler, {
                    passive: !0,
                  }));
              },
            },
            {
              key: "unlisten",
              value: function () {
                !E.observerMode &&
                  this.isListener &&
                  (window.removeEventListener("scroll", this.revealHandler, {
                    passive: !0,
                  }),
                  window.removeEventListener(
                    "orientationchange",
                    this.revealHandler,
                    { passive: !0 }
                  ),
                  window.document.removeEventListener(
                    "visibilitychange",
                    this.revealHandler,
                    { passive: !0 }
                  ),
                  window.document.removeEventListener(
                    "collapseend",
                    this.revealHandler,
                    { passive: !0 }
                  ),
                  window.removeEventListener("resize", this.resizeHandler, {
                    passive: !0,
                  }),
                  (this.isListener = !1)),
                  this.onRevealTimeout &&
                    (this.onRevealTimeout = window.clearTimeout(
                      this.onRevealTimeout
                    )),
                  this.animationEndTimeout &&
                    (this.animationEndTimeout = window.clearTimeout(
                      this.animationEndTimeout
                    ));
              },
            },
          ],
          [
            {
              key: "getInitialCollapseStyle",
              value: function (p) {
                return { height: 0, visibility: p.when ? void 0 : "hidden" };
              },
            },
            {
              key: "getTop",
              value: function (p) {
                for (; p.offsetTop === void 0; ) p = p.parentNode;
                for (var w = p.offsetTop; p.offsetParent; w += p.offsetTop)
                  p = p.offsetParent;
                return w;
              },
            },
          ]
        ),
        k
      );
    })(h.default.Component);
  (d.propTypes = L),
    (d.defaultProps = f),
    (d.contextTypes = a),
    (d.displayName = "RevealBase"),
    (t.default = d),
    (e.exports = t.default);
})(Wi, Wi.exports);
(function (e, t) {
  function n(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function r(c, S, y, h) {
    return (
      "in" in c && (c.when = c.in),
      o.default.Children.count(h) < 2
        ? o.default.createElement(
            s.default,
            l({}, c, { inEffect: S, outEffect: y, children: h })
          )
        : ((h = o.default.Children.map(h, function (g) {
            return o.default.createElement(
              s.default,
              l({}, c, { inEffect: S, outEffect: y, children: g })
            );
          })),
          "Fragment" in o.default
            ? o.default.createElement(o.default.Fragment, null, h)
            : o.default.createElement("span", null, h))
    );
  }
  Object.defineProperty(t, "__esModule", { value: !0 });
  var l =
    Object.assign ||
    function (c) {
      for (var S = 1; S < arguments.length; S++) {
        var y = arguments[S];
        for (var h in y)
          Object.prototype.hasOwnProperty.call(y, h) && (c[h] = y[h]);
      }
      return c;
    };
  t.default = r;
  var i = fn.exports,
    o = n(i),
    u = Wi.exports,
    s = n(u);
  e.exports = t.default;
})(Bi, Bi.exports);
(function (e, t) {
  function n(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function r(h, g) {
    var E = {};
    for (var _ in h)
      g.indexOf(_) >= 0 ||
        (Object.prototype.hasOwnProperty.call(h, _) && (E[_] = h[_]));
    return E;
  }
  function l(h, g) {
    var E = g.left,
      _ = g.right,
      L = g.up,
      f = g.down,
      a = g.top,
      d = g.bottom,
      m = g.big,
      k = g.mirror,
      p = g.opposite,
      w =
        (E ? 1 : 0) |
        (_ ? 2 : 0) |
        (a || f ? 4 : 0) |
        (d || L ? 8 : 0) |
        (k ? 16 : 0) |
        (p ? 32 : 0) |
        (h ? 64 : 0) |
        (m ? 128 : 0);
    if (y.hasOwnProperty(w)) return y[w];
    var v = E || _ || L || f || a || d,
      T = void 0,
      P = void 0;
    if (v) {
      if (!k != !(h && p)) {
        var D = [_, E, d, a, f, L];
        (E = D[0]), (_ = D[1]), (a = D[2]), (d = D[3]), (L = D[4]), (f = D[5]);
      }
      var I = m ? "2000px" : "100%";
      (T = E ? "-" + I : _ ? I : "0"),
        (P = f || a ? "-" + I : L || d ? I : "0");
    }
    return (
      (y[w] = (0, c.animation)(
        (h ? "to" : "from") +
          " {" +
          (v ? " transform: translate3d(" + T + ", " + P + ", 0);" : "") +
          `}
     ` +
          (h ? "from" : "to") +
          " {transform: none;} "
      )),
      y[w]
    );
  }
  function i() {
    var h =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : c.defaults,
      g = h.children,
      E = (h.out, h.forever),
      _ = h.timeout,
      L = h.duration,
      f = L === void 0 ? c.defaults.duration : L,
      a = h.delay,
      d = a === void 0 ? c.defaults.delay : a,
      m = h.count,
      k = m === void 0 ? c.defaults.count : m,
      p = r(h, [
        "children",
        "out",
        "forever",
        "timeout",
        "duration",
        "delay",
        "count",
      ]),
      w = {
        make: l,
        duration: _ === void 0 ? f : _,
        delay: d,
        forever: E,
        count: k,
        style: { animationFillMode: "both" },
        reverse: p.left,
      };
    return (0, s.default)(p, w, w, g);
  }
  Object.defineProperty(t, "__esModule", { value: !0 });
  var o = $o.exports,
    u = Bi.exports,
    s = n(u),
    c = Vo,
    S = {
      out: o.bool,
      left: o.bool,
      right: o.bool,
      top: o.bool,
      bottom: o.bool,
      big: o.bool,
      mirror: o.bool,
      opposite: o.bool,
      duration: o.number,
      timeout: o.number,
      delay: o.number,
      count: o.number,
      forever: o.bool,
    },
    y = {};
  (i.propTypes = S), (t.default = i), (e.exports = t.default);
})(Vi, Vi.exports);
const fc = qu(Vi.exports),
  Vd = () =>
    R("section", {
      className:
        "h-screen bg-[#0a182e] flex flex-col justify-center items-center",
      children: R(fc, {
        bottom: !0,
        children: ce("div", {
          className: "w-4/6",
          children: [
            ce("div", {
              className:
                "text-gray-300 text-4xl flex flex-col md:block items-center md:text-7xl text-left font-bold font-Roboto bg-[#0a182e] drop-shadow-2xl p-10 rounded-2xl",
              children: [
                R("span", {
                  className: "text-greenLight mr-3",
                  children: "01.",
                }),
                " Sobre mi",
              ],
            }),
            ce("div", {
              className:
                "bg-[#0a182e] md:drop-shadow-2xl md:p-10 md:rounded-2xl mt-8",
              children: [
                R("p", {
                  className: " font-Roboto text-greenLight text-left text-xl ",
                  children:
                    "Mi nombre es Alejandro Bernardo Rup\xE9rez y recientemente termin\xE9 la carrera de Ingenier\xEDa Multimedia en la Universitad de Valencia, en la ETSE.",
                }),
                R("p", {
                  className:
                    "mt-8 font-Roboto text-greenLight text-left text-xl ",
                  children:
                    "Mi inter\xE9s sobre el desarrollo web comenz\xF3 m\xE1s o menos en mi segundo a\xF1o en la carrera, aunque desde joven siempre me ha interesado la creaci\xF3n de interfaces, incluso por aquella epoca cre\xE9 alg\xFAn sitio web sencillo.",
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Bd = () =>
    ce("footer", {
      className:
        "h-[20vh] w-full p-4 flex flex-col items-center justify-center md:p-6 bg-gray-800",
      children: [
        R("h2", {
          className: "text-xl md:text-3xl font-Roboto text-white",
          children: "Puedes ver m\xE1s en mis otras redes",
        }),
        ce("div", {
          className: "flex flex-row items-center justify-center mt-4",
          children: [
            R("div", {
              className: "flex flex-col items-center mr-10",
              children: R("a", {
                href: "https://github.com/AlexBR784",
                children: R("img", {
                  width: "60",
                  height: "60",
                  alt: "Github octocat image",
                  src: "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
                  className:
                    "filter grayscale hover:filter-none cursor-pointer hover:animate-pulse",
                }),
              }),
            }),
            R("div", {
              className: "flex flex-col items-center mr-10",
              children: R("a", {
                href: "https://twitter.com/alexbr784",
                children: R("img", {
                  width: "60",
                  height: "60",
                  alt: "Twitter logo image",
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png",
                  className:
                    "filter grayscale hover:filter-none cursor-pointer hover:animate-pulse",
                }),
              }),
            }),
            R("div", {
              className: "flex flex-col items-center mr-10",
              children: R("a", {
                href: "https://www.frontendmentor.io/profile/AlexBR784",
                children: R("img", {
                  width: "60",
                  height: "60",
                  alt: "Frontend Mentor image",
                  src: "https://seeklogo.com/images/F/frontend-mentor-logo-DD85EFE0E9-seeklogo.com.png",
                  className:
                    "filter grayscale hover:filter-none cursor-pointer hover:animate-pulse",
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  Qe = ({ tech: e, url: t }) =>
    ce("li", {
      className: "flex items-center",
      children: [R("img", { width: "20", className: "mr-1", src: t }), e],
    }),
  Wd = () =>
    R("section", {
      className:
        "h-screen bg-[#0a182e] flex flex-col justify-center items-center",
      children: R(fc, {
        bottom: !0,
        children: ce("div", {
          className: "w-4/6",
          children: [
            ce("div", {
              className:
                "text-gray-300 flex flex-col md:block items-center text-4xl md:text-7xl text-left font-bold font-Roboto mt-20 bg-[#0a182e] drop-shadow-2xl p-10 rounded-2xl",
              children: [
                R("span", {
                  className: "text-greenLight mr-3",
                  children: "02.",
                }),
                " Tecnolog\xEDas",
              ],
            }),
            ce("div", {
              className:
                "bg-[#0a182e] md:drop-shadow-2xl md:p-10 md:rounded-2xl mt-8",
              children: [
                R("p", {
                  className:
                    "mt-8 font-Roboto text-greenLight text-left text-xl",
                  children:
                    "A lo largo de la carrera he empleado gran variedad de lenguajes de programaci\xF3n y tecnolog\xEDas. De todas maneras, aqu\xED dejo unos cuantos con los cuales trabajo m\xE1s a menudo:",
                }),
                R("div", {
                  className: "flex flex-col items-center mt-10 pb-2",
                  children: ce("ul", {
                    className:
                      "space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400 grid grid-cols-2 md:grid-cols-3 gap-x-14  md:gap-12",
                    children: [
                      R(Qe, {
                        tech: "HTML",
                        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png",
                      }),
                      R(Qe, {
                        tech: "CSS",
                        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png",
                      }),
                      R(Qe, {
                        tech: "JavaScript",
                        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
                      }),
                      R(Qe, {
                        tech: "TypeScript",
                        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/300px-Typescript_logo_2020.svg.png",
                      }),
                      R(Qe, {
                        tech: "Node",
                        url: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
                      }),
                      R(Qe, {
                        tech: "SASS",
                        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/245px-Sass_Logo_Color.svg.png",
                      }),
                      R(Qe, {
                        tech: "Tailwind",
                        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
                      }),
                      R(Qe, {
                        tech: "Jest",
                        url: "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png",
                      }),
                      R(Qe, {
                        tech: "React",
                        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
Gl.createRoot(document.getElementById("root")).render(
  R(Pc.StrictMode, {
    children: ce("main", {
      className: "h-[320vh]",
      children: [R(Id, {}), R(Vd, {}), R(Wd, {}), R(Bd, {})],
    }),
  })
);
