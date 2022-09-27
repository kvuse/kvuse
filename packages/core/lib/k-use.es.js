import { getCurrentInstance as G, computed as C, nextTick as qt, ref as R, reactive as Cr, watch as K, watchEffect as Rr, onMounted as Me, onUnmounted as Pr, getCurrentScope as xr, onScopeDispose as Sr, unref as g, openBlock as x, createElementBlock as I, createElementVNode as U, warn as $r, provide as Tr, inject as Nr, defineComponent as ue, mergeProps as Ar, renderSlot as le, normalizeClass as D, createVNode as ke, Transition as Mt, withCtx as te, withDirectives as kt, toDisplayString as jt, vShow as zt, shallowReactive as Br, createBlock as X, normalizeStyle as Ir, createCommentVNode as ee, resolveDynamicComponent as Dr, Fragment as Lr, withModifiers as Fr, isVNode as Ht, render as st } from "vue";
function Ro() {
  const e = G(), { globalProperties: t } = e.appContext.config, {
    $route: r,
    $router: s,
    $pinia: n,
    $store: o
  } = t, a = r, i = s, u = C(() => a.name), d = (l, y) => {
    y ? i.push({ path: l, ...y }) : l.includes("/") ? i.push(l) : i.push({ name: l });
  }, p = (l, y) => {
    y ? i.replace({ path: l, ...y }) : l.includes("/") ? i.replace(l) : i.replace({ name: l });
  }, m = C(() => !1);
  return {
    route: a,
    router: i,
    nextTick: qt,
    ref: R,
    reactive: Cr,
    computed: C,
    watch: K,
    watchEffect: Rr,
    onMounted: Me,
    onUnmounted: Pr,
    routerName: u,
    loadPage: d,
    isDev: m,
    replacePage: p,
    pinia: n,
    store: o,
    globalProperties: t
  };
}
function Ur(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vt = { exports: {} }, je = { exports: {} }, Wt = function(t, r) {
  return function() {
    for (var n = new Array(arguments.length), o = 0; o < n.length; o++)
      n[o] = arguments[o];
    return t.apply(r, n);
  };
}, qr = Wt, ze = Object.prototype.toString, He = function(e) {
  return function(t) {
    var r = ze.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function k(e) {
  return e = e.toLowerCase(), function(r) {
    return He(r) === e;
  };
}
function Ve(e) {
  return Array.isArray(e);
}
function se(e) {
  return typeof e > "u";
}
function Mr(e) {
  return e !== null && !se(e) && e.constructor !== null && !se(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Jt = k("ArrayBuffer");
function kr(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Jt(e.buffer), t;
}
function jr(e) {
  return typeof e == "string";
}
function zr(e) {
  return typeof e == "number";
}
function Qt(e) {
  return e !== null && typeof e == "object";
}
function re(e) {
  if (He(e) !== "object")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var Hr = k("Date"), Vr = k("File"), Wr = k("Blob"), Jr = k("FileList");
function We(e) {
  return ze.call(e) === "[object Function]";
}
function Qr(e) {
  return Qt(e) && We(e.pipe);
}
function Xr(e) {
  var t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || ze.call(e) === t || We(e.toString) && e.toString() === t);
}
var Gr = k("URLSearchParams");
function Kr(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Zr() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Je(e, t) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Ve(e))
      for (var r = 0, s = e.length; r < s; r++)
        t.call(null, e[r], r, e);
    else
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e);
}
function De() {
  var e = {};
  function t(n, o) {
    re(e[o]) && re(n) ? e[o] = De(e[o], n) : re(n) ? e[o] = De({}, n) : Ve(n) ? e[o] = n.slice() : e[o] = n;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    Je(arguments[r], t);
  return e;
}
function Yr(e, t, r) {
  return Je(t, function(n, o) {
    r && typeof n == "function" ? e[o] = qr(n, r) : e[o] = n;
  }), e;
}
function en(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function tn(e, t, r, s) {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function rn(e, t, r) {
  var s, n, o, a = {};
  t = t || {};
  do {
    for (s = Object.getOwnPropertyNames(e), n = s.length; n-- > 0; )
      o = s[n], a[o] || (t[o] = e[o], a[o] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}
function nn(e, t, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  var s = e.indexOf(t, r);
  return s !== -1 && s === r;
}
function sn(e) {
  if (!e)
    return null;
  var t = e.length;
  if (se(t))
    return null;
  for (var r = new Array(t); t-- > 0; )
    r[t] = e[t];
  return r;
}
var on = function(e) {
  return function(t) {
    return e && t instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), O = {
  isArray: Ve,
  isArrayBuffer: Jt,
  isBuffer: Mr,
  isFormData: Xr,
  isArrayBufferView: kr,
  isString: jr,
  isNumber: zr,
  isObject: Qt,
  isPlainObject: re,
  isUndefined: se,
  isDate: Hr,
  isFile: Vr,
  isBlob: Wr,
  isFunction: We,
  isStream: Qr,
  isURLSearchParams: Gr,
  isStandardBrowserEnv: Zr,
  forEach: Je,
  merge: De,
  extend: Yr,
  trim: Kr,
  stripBOM: en,
  inherits: tn,
  toFlatObject: rn,
  kindOf: He,
  kindOfTest: k,
  endsWith: nn,
  toArray: sn,
  isTypedArray: on,
  isFileList: Jr
}, z = O;
function ot(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Xt = function(t, r, s) {
  if (!r)
    return t;
  var n;
  if (s)
    n = s(r);
  else if (z.isURLSearchParams(r))
    n = r.toString();
  else {
    var o = [];
    z.forEach(r, function(u, d) {
      u === null || typeof u > "u" || (z.isArray(u) ? d = d + "[]" : u = [u], z.forEach(u, function(m) {
        z.isDate(m) ? m = m.toISOString() : z.isObject(m) && (m = JSON.stringify(m)), o.push(ot(d) + "=" + ot(m));
      }));
    }), n = o.join("&");
  }
  if (n) {
    var a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
  }
  return t;
}, an = O;
function ce() {
  this.handlers = [];
}
ce.prototype.use = function(t, r, s) {
  return this.handlers.push({
    fulfilled: t,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
ce.prototype.eject = function(t) {
  this.handlers[t] && (this.handlers[t] = null);
};
ce.prototype.forEach = function(t) {
  an.forEach(this.handlers, function(s) {
    s !== null && t(s);
  });
};
var un = ce, ln = O, cn = function(t, r) {
  ln.forEach(t, function(n, o) {
    o !== r && o.toUpperCase() === r.toUpperCase() && (t[r] = n, delete t[o]);
  });
}, Gt = O;
function V(e, t, r, s, n) {
  Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), s && (this.request = s), n && (this.response = n);
}
Gt.inherits(V, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var Kt = V.prototype, Zt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(e) {
  Zt[e] = { value: e };
});
Object.defineProperties(V, Zt);
Object.defineProperty(Kt, "isAxiosError", { value: !0 });
V.from = function(e, t, r, s, n, o) {
  var a = Object.create(Kt);
  return Gt.toFlatObject(e, a, function(u) {
    return u !== Error.prototype;
  }), V.call(a, e.message, t, r, s, n), a.name = e.name, o && Object.assign(a, o), a;
};
var Q = V, Yt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, A = O;
function fn(e, t) {
  t = t || new FormData();
  var r = [];
  function s(o) {
    return o === null ? "" : A.isDate(o) ? o.toISOString() : A.isArrayBuffer(o) || A.isTypedArray(o) ? typeof Blob == "function" ? new Blob([o]) : Buffer.from(o) : o;
  }
  function n(o, a) {
    if (A.isPlainObject(o) || A.isArray(o)) {
      if (r.indexOf(o) !== -1)
        throw Error("Circular reference detected in " + a);
      r.push(o), A.forEach(o, function(u, d) {
        if (!A.isUndefined(u)) {
          var p = a ? a + "." + d : d, m;
          if (u && !a && typeof u == "object") {
            if (A.endsWith(d, "{}"))
              u = JSON.stringify(u);
            else if (A.endsWith(d, "[]") && (m = A.toArray(u))) {
              m.forEach(function(l) {
                !A.isUndefined(l) && t.append(p, s(l));
              });
              return;
            }
          }
          n(u, p);
        }
      }), r.pop();
    } else
      t.append(a, s(o));
  }
  return n(e), t;
}
var er = fn, ye, at;
function dn() {
  if (at)
    return ye;
  at = 1;
  var e = Q;
  return ye = function(r, s, n) {
    var o = n.config.validateStatus;
    !n.status || !o || o(n.status) ? r(n) : s(new e(
      "Request failed with status code " + n.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    ));
  }, ye;
}
var we, it;
function pn() {
  if (it)
    return we;
  it = 1;
  var e = O;
  return we = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(s, n, o, a, i, u) {
        var d = [];
        d.push(s + "=" + encodeURIComponent(n)), e.isNumber(o) && d.push("expires=" + new Date(o).toGMTString()), e.isString(a) && d.push("path=" + a), e.isString(i) && d.push("domain=" + i), u === !0 && d.push("secure"), document.cookie = d.join("; ");
      },
      read: function(s) {
        var n = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(s) {
        this.write(s, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), we;
}
var mn = function(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}, vn = function(t, r) {
  return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
}, hn = mn, gn = vn, tr = function(t, r) {
  return t && !hn(r) ? gn(t, r) : r;
}, _e, ut;
function yn() {
  if (ut)
    return _e;
  ut = 1;
  var e = O, t = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return _e = function(s) {
    var n = {}, o, a, i;
    return s && e.forEach(s.split(`
`), function(d) {
      if (i = d.indexOf(":"), o = e.trim(d.substr(0, i)).toLowerCase(), a = e.trim(d.substr(i + 1)), o) {
        if (n[o] && t.indexOf(o) >= 0)
          return;
        o === "set-cookie" ? n[o] = (n[o] ? n[o] : []).concat([a]) : n[o] = n[o] ? n[o] + ", " + a : a;
      }
    }), n;
  }, _e;
}
var Ee, lt;
function wn() {
  if (lt)
    return Ee;
  lt = 1;
  var e = O;
  return Ee = e.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a"), n;
    function o(a) {
      var i = a;
      return r && (s.setAttribute("href", i), i = s.href), s.setAttribute("href", i), {
        href: s.href,
        protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
        host: s.host,
        search: s.search ? s.search.replace(/^\?/, "") : "",
        hash: s.hash ? s.hash.replace(/^#/, "") : "",
        hostname: s.hostname,
        port: s.port,
        pathname: s.pathname.charAt(0) === "/" ? s.pathname : "/" + s.pathname
      };
    }
    return n = o(window.location.href), function(i) {
      var u = e.isString(i) ? o(i) : i;
      return u.protocol === n.protocol && u.host === n.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Ee;
}
var be, ct;
function fe() {
  if (ct)
    return be;
  ct = 1;
  var e = Q, t = O;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return t.inherits(r, e, {
    __CANCEL__: !0
  }), be = r, be;
}
var Oe, ft;
function _n() {
  return ft || (ft = 1, Oe = function(t) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return r && r[1] || "";
  }), Oe;
}
var Ce, dt;
function pt() {
  if (dt)
    return Ce;
  dt = 1;
  var e = O, t = dn(), r = pn(), s = Xt, n = tr, o = yn(), a = wn(), i = Yt, u = Q, d = fe(), p = _n();
  return Ce = function(l) {
    return new Promise(function(h, c) {
      var f = l.data, _ = l.headers, b = l.responseType, $;
      function w() {
        l.cancelToken && l.cancelToken.unsubscribe($), l.signal && l.signal.removeEventListener("abort", $);
      }
      e.isFormData(f) && e.isStandardBrowserEnv() && delete _["Content-Type"];
      var v = new XMLHttpRequest();
      if (l.auth) {
        var tt = l.auth.username || "", br = l.auth.password ? unescape(encodeURIComponent(l.auth.password)) : "";
        _.Authorization = "Basic " + btoa(tt + ":" + br);
      }
      var ve = n(l.baseURL, l.url);
      v.open(l.method.toUpperCase(), s(ve, l.params, l.paramsSerializer), !0), v.timeout = l.timeout;
      function rt() {
        if (!!v) {
          var N = "getAllResponseHeaders" in v ? o(v.getAllResponseHeaders()) : null, j = !b || b === "text" || b === "json" ? v.responseText : v.response, q = {
            data: j,
            status: v.status,
            statusText: v.statusText,
            headers: N,
            config: l,
            request: v
          };
          t(function(ge) {
            h(ge), w();
          }, function(ge) {
            c(ge), w();
          }, q), v = null;
        }
      }
      if ("onloadend" in v ? v.onloadend = rt : v.onreadystatechange = function() {
        !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(rt);
      }, v.onabort = function() {
        !v || (c(new u("Request aborted", u.ECONNABORTED, l, v)), v = null);
      }, v.onerror = function() {
        c(new u("Network Error", u.ERR_NETWORK, l, v, v)), v = null;
      }, v.ontimeout = function() {
        var j = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded", q = l.transitional || i;
        l.timeoutErrorMessage && (j = l.timeoutErrorMessage), c(new u(
          j,
          q.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED,
          l,
          v
        )), v = null;
      }, e.isStandardBrowserEnv()) {
        var nt = (l.withCredentials || a(ve)) && l.xsrfCookieName ? r.read(l.xsrfCookieName) : void 0;
        nt && (_[l.xsrfHeaderName] = nt);
      }
      "setRequestHeader" in v && e.forEach(_, function(j, q) {
        typeof f > "u" && q.toLowerCase() === "content-type" ? delete _[q] : v.setRequestHeader(q, j);
      }), e.isUndefined(l.withCredentials) || (v.withCredentials = !!l.withCredentials), b && b !== "json" && (v.responseType = l.responseType), typeof l.onDownloadProgress == "function" && v.addEventListener("progress", l.onDownloadProgress), typeof l.onUploadProgress == "function" && v.upload && v.upload.addEventListener("progress", l.onUploadProgress), (l.cancelToken || l.signal) && ($ = function(N) {
        !v || (c(!N || N && N.type ? new d() : N), v.abort(), v = null);
      }, l.cancelToken && l.cancelToken.subscribe($), l.signal && (l.signal.aborted ? $() : l.signal.addEventListener("abort", $))), f || (f = null);
      var he = p(ve);
      if (he && ["http", "https", "file"].indexOf(he) === -1) {
        c(new u("Unsupported protocol " + he + ":", u.ERR_BAD_REQUEST, l));
        return;
      }
      v.send(f);
    });
  }, Ce;
}
var Re, mt;
function En() {
  return mt || (mt = 1, Re = null), Re;
}
var E = O, vt = cn, ht = Q, bn = Yt, On = er, Cn = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function gt(e, t) {
  !E.isUndefined(e) && E.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function Rn() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = pt()), e;
}
function Pn(e, t, r) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var de = {
  transitional: bn,
  adapter: Rn(),
  transformRequest: [function(t, r) {
    if (vt(r, "Accept"), vt(r, "Content-Type"), E.isFormData(t) || E.isArrayBuffer(t) || E.isBuffer(t) || E.isStream(t) || E.isFile(t) || E.isBlob(t))
      return t;
    if (E.isArrayBufferView(t))
      return t.buffer;
    if (E.isURLSearchParams(t))
      return gt(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
    var s = E.isObject(t), n = r && r["Content-Type"], o;
    if ((o = E.isFileList(t)) || s && n === "multipart/form-data") {
      var a = this.env && this.env.FormData;
      return On(o ? { "files[]": t } : t, a && new a());
    } else if (s || n === "application/json")
      return gt(r, "application/json"), Pn(t);
    return t;
  }],
  transformResponse: [function(t) {
    var r = this.transitional || de.transitional, s = r && r.silentJSONParsing, n = r && r.forcedJSONParsing, o = !s && this.responseType === "json";
    if (o || n && E.isString(t) && t.length)
      try {
        return JSON.parse(t);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? ht.from(a, ht.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: En()
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
E.forEach(["delete", "get", "head"], function(t) {
  de.headers[t] = {};
});
E.forEach(["post", "put", "patch"], function(t) {
  de.headers[t] = E.merge(Cn);
});
var Qe = de, xn = O, Sn = Qe, $n = function(t, r, s) {
  var n = this || Sn;
  return xn.forEach(s, function(a) {
    t = a.call(n, t, r);
  }), t;
}, Pe, yt;
function rr() {
  return yt || (yt = 1, Pe = function(t) {
    return !!(t && t.__CANCEL__);
  }), Pe;
}
var wt = O, xe = $n, Tn = rr(), Nn = Qe, An = fe();
function Se(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new An();
}
var Bn = function(t) {
  Se(t), t.headers = t.headers || {}, t.data = xe.call(
    t,
    t.data,
    t.headers,
    t.transformRequest
  ), t.headers = wt.merge(
    t.headers.common || {},
    t.headers[t.method] || {},
    t.headers
  ), wt.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(n) {
      delete t.headers[n];
    }
  );
  var r = t.adapter || Nn.adapter;
  return r(t).then(function(n) {
    return Se(t), n.data = xe.call(
      t,
      n.data,
      n.headers,
      t.transformResponse
    ), n;
  }, function(n) {
    return Tn(n) || (Se(t), n && n.response && (n.response.data = xe.call(
      t,
      n.response.data,
      n.response.headers,
      t.transformResponse
    ))), Promise.reject(n);
  });
}, T = O, nr = function(t, r) {
  r = r || {};
  var s = {};
  function n(p, m) {
    return T.isPlainObject(p) && T.isPlainObject(m) ? T.merge(p, m) : T.isPlainObject(m) ? T.merge({}, m) : T.isArray(m) ? m.slice() : m;
  }
  function o(p) {
    if (T.isUndefined(r[p])) {
      if (!T.isUndefined(t[p]))
        return n(void 0, t[p]);
    } else
      return n(t[p], r[p]);
  }
  function a(p) {
    if (!T.isUndefined(r[p]))
      return n(void 0, r[p]);
  }
  function i(p) {
    if (T.isUndefined(r[p])) {
      if (!T.isUndefined(t[p]))
        return n(void 0, t[p]);
    } else
      return n(void 0, r[p]);
  }
  function u(p) {
    if (p in r)
      return n(t[p], r[p]);
    if (p in t)
      return n(void 0, t[p]);
  }
  var d = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: u
  };
  return T.forEach(Object.keys(t).concat(Object.keys(r)), function(m) {
    var l = d[m] || o, y = l(m);
    T.isUndefined(y) && l !== u || (s[m] = y);
  }), s;
}, $e, _t;
function sr() {
  return _t || (_t = 1, $e = {
    version: "0.27.2"
  }), $e;
}
var In = sr().version, L = Q, Xe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  Xe[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var Et = {};
Xe.transitional = function(t, r, s) {
  function n(o, a) {
    return "[Axios v" + In + "] Transitional option '" + o + "'" + a + (s ? ". " + s : "");
  }
  return function(o, a, i) {
    if (t === !1)
      throw new L(
        n(a, " has been removed" + (r ? " in " + r : "")),
        L.ERR_DEPRECATED
      );
    return r && !Et[a] && (Et[a] = !0, console.warn(
      n(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, a, i) : !0;
  };
};
function Dn(e, t, r) {
  if (typeof e != "object")
    throw new L("options must be an object", L.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), n = s.length; n-- > 0; ) {
    var o = s[n], a = t[o];
    if (a) {
      var i = e[o], u = i === void 0 || a(i, o, e);
      if (u !== !0)
        throw new L("option " + o + " must be " + u, L.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new L("Unknown option " + o, L.ERR_BAD_OPTION);
  }
}
var Ln = {
  assertOptions: Dn,
  validators: Xe
}, or = O, Fn = Xt, bt = un, Ot = Bn, pe = nr, Un = tr, ar = Ln, H = ar.validators;
function W(e) {
  this.defaults = e, this.interceptors = {
    request: new bt(),
    response: new bt()
  };
}
W.prototype.request = function(t, r) {
  typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = pe(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && ar.assertOptions(s, {
    silentJSONParsing: H.transitional(H.boolean),
    forcedJSONParsing: H.transitional(H.boolean),
    clarifyTimeoutError: H.transitional(H.boolean)
  }, !1);
  var n = [], o = !0;
  this.interceptors.request.forEach(function(y) {
    typeof y.runWhen == "function" && y.runWhen(r) === !1 || (o = o && y.synchronous, n.unshift(y.fulfilled, y.rejected));
  });
  var a = [];
  this.interceptors.response.forEach(function(y) {
    a.push(y.fulfilled, y.rejected);
  });
  var i;
  if (!o) {
    var u = [Ot, void 0];
    for (Array.prototype.unshift.apply(u, n), u = u.concat(a), i = Promise.resolve(r); u.length; )
      i = i.then(u.shift(), u.shift());
    return i;
  }
  for (var d = r; n.length; ) {
    var p = n.shift(), m = n.shift();
    try {
      d = p(d);
    } catch (l) {
      m(l);
      break;
    }
  }
  try {
    i = Ot(d);
  } catch (l) {
    return Promise.reject(l);
  }
  for (; a.length; )
    i = i.then(a.shift(), a.shift());
  return i;
};
W.prototype.getUri = function(t) {
  t = pe(this.defaults, t);
  var r = Un(t.baseURL, t.url);
  return Fn(r, t.params, t.paramsSerializer);
};
or.forEach(["delete", "get", "head", "options"], function(t) {
  W.prototype[t] = function(r, s) {
    return this.request(pe(s || {}, {
      method: t,
      url: r,
      data: (s || {}).data
    }));
  };
});
or.forEach(["post", "put", "patch"], function(t) {
  function r(s) {
    return function(o, a, i) {
      return this.request(pe(i || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  W.prototype[t] = r(), W.prototype[t + "Form"] = r(!0);
});
var qn = W, Te, Ct;
function Mn() {
  if (Ct)
    return Te;
  Ct = 1;
  var e = fe();
  function t(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var s;
    this.promise = new Promise(function(a) {
      s = a;
    });
    var n = this;
    this.promise.then(function(o) {
      if (!!n._listeners) {
        var a, i = n._listeners.length;
        for (a = 0; a < i; a++)
          n._listeners[a](o);
        n._listeners = null;
      }
    }), this.promise.then = function(o) {
      var a, i = new Promise(function(u) {
        n.subscribe(u), a = u;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(a);
      }, i;
    }, r(function(a) {
      n.reason || (n.reason = new e(a), s(n.reason));
    });
  }
  return t.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, t.prototype.subscribe = function(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : this._listeners = [s];
  }, t.prototype.unsubscribe = function(s) {
    if (!!this._listeners) {
      var n = this._listeners.indexOf(s);
      n !== -1 && this._listeners.splice(n, 1);
    }
  }, t.source = function() {
    var s, n = new t(function(a) {
      s = a;
    });
    return {
      token: n,
      cancel: s
    };
  }, Te = t, Te;
}
var Ne, Rt;
function kn() {
  return Rt || (Rt = 1, Ne = function(t) {
    return function(s) {
      return t.apply(null, s);
    };
  }), Ne;
}
var Ae, Pt;
function jn() {
  if (Pt)
    return Ae;
  Pt = 1;
  var e = O;
  return Ae = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Ae;
}
var xt = O, zn = Wt, ne = qn, Hn = nr, Vn = Qe;
function ir(e) {
  var t = new ne(e), r = zn(ne.prototype.request, t);
  return xt.extend(r, ne.prototype, t), xt.extend(r, t), r.create = function(n) {
    return ir(Hn(e, n));
  }, r;
}
var S = ir(Vn);
S.Axios = ne;
S.CanceledError = fe();
S.CancelToken = Mn();
S.isCancel = rr();
S.VERSION = sr().version;
S.toFormData = er;
S.AxiosError = Q;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = kn();
S.isAxiosError = jn();
je.exports = S;
je.exports.default = S;
(function(e) {
  e.exports = je.exports;
})(Vt);
const Be = /* @__PURE__ */ Ur(Vt.exports);
function Wn(e) {
  for (var t = -1, r = e == null ? 0 : e.length, s = {}; ++t < r; ) {
    var n = e[t];
    s[n[0]] = n[1];
  }
  return s;
}
var St;
const Z = typeof window < "u", oe = (e) => typeof e == "number", Jn = (e) => typeof e == "string", Ie = () => {
};
Z && ((St = window == null ? void 0 : window.navigator) == null ? void 0 : St.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ur(e) {
  return typeof e == "function" ? e() : g(e);
}
function Qn(e) {
  return e;
}
function Ge(e) {
  return xr() ? (Sr(e), !0) : !1;
}
function Xn(e, t = !0) {
  G() ? Me(e) : t ? e() : qt(e);
}
function Gn(e, t, r = {}) {
  const {
    immediate: s = !0
  } = r, n = R(!1);
  let o = null;
  function a() {
    o && (clearTimeout(o), o = null);
  }
  function i() {
    n.value = !1, a();
  }
  function u(...d) {
    a(), n.value = !0, o = setTimeout(() => {
      n.value = !1, o = null, e(...d);
    }, ur(t));
  }
  return s && (n.value = !0, Z && u()), Ge(i), {
    isPending: n,
    start: u,
    stop: i
  };
}
function lr(e) {
  var t;
  const r = ur(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const cr = Z ? window : void 0;
function Kn(...e) {
  let t, r, s, n;
  if (Jn(e[0]) ? ([r, s, n] = e, t = cr) : [t, r, s, n] = e, !t)
    return Ie;
  let o = Ie;
  const a = K(() => lr(t), (u) => {
    o(), u && (u.addEventListener(r, s, n), o = () => {
      u.removeEventListener(r, s, n), o = Ie;
    });
  }, { immediate: !0, flush: "post" }), i = () => {
    a(), o();
  };
  return Ge(i), i;
}
function Zn(e, t = !1) {
  const r = R(), s = () => r.value = Boolean(e());
  return s(), Xn(s, t), r;
}
const Le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Fe = "__vueuse_ssr_handlers__";
Le[Fe] = Le[Fe] || {};
Le[Fe];
var $t = Object.getOwnPropertySymbols, Yn = Object.prototype.hasOwnProperty, es = Object.prototype.propertyIsEnumerable, ts = (e, t) => {
  var r = {};
  for (var s in e)
    Yn.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
  if (e != null && $t)
    for (var s of $t(e))
      t.indexOf(s) < 0 && es.call(e, s) && (r[s] = e[s]);
  return r;
};
function rs(e, t, r = {}) {
  const s = r, { window: n = cr } = s, o = ts(s, ["window"]);
  let a;
  const i = Zn(() => n && "ResizeObserver" in n), u = () => {
    a && (a.disconnect(), a = void 0);
  }, d = K(() => lr(e), (m) => {
    u(), i.value && n && m && (a = new ResizeObserver(t), a.observe(m, o));
  }, { immediate: !0, flush: "post" }), p = () => {
    u(), d();
  };
  return Ge(p), {
    isSupported: i,
    stop: p
  };
}
var Tt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Tt || (Tt = {}));
var ns = Object.defineProperty, Nt = Object.getOwnPropertySymbols, ss = Object.prototype.hasOwnProperty, os = Object.prototype.propertyIsEnumerable, At = (e, t, r) => t in e ? ns(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, as = (e, t) => {
  for (var r in t || (t = {}))
    ss.call(t, r) && At(e, r, t[r]);
  if (Nt)
    for (var r of Nt(t))
      os.call(t, r) && At(e, r, t[r]);
  return e;
};
const is = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
as({
  linear: Qn
}, is);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const us = Object.prototype.hasOwnProperty, Bt = (e, t) => us.call(e, t), Ue = (e) => typeof e == "function", ae = (e) => typeof e == "string", fr = (e) => e !== null && typeof e == "object", ls = (e) => e === void 0, cs = (e) => typeof Element > "u" ? !1 : e instanceof Element, It = (e) => Object.keys(e);
class fs extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ke(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = ae(e) ? new fs(`[${e}] ${t}`) : e;
    console.warn(r);
  }
}
const ds = "utils/dom/style";
function ps(e, t = "px") {
  if (!e)
    return "";
  if (ae(e))
    return e;
  if (oe(e))
    return `${e}${t}`;
  Ke(ds, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.0.9 */
var Y = (e, t) => {
  let r = e.__vccOpts || e;
  for (let [s, n] of t)
    r[s] = n;
  return r;
}, ms = {
  name: "CircleCloseFilled"
}, vs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hs = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1), gs = [
  hs
];
function ys(e, t, r, s, n, o) {
  return x(), I("svg", vs, gs);
}
var dr = /* @__PURE__ */ Y(ms, [["render", ys], ["__file", "circle-close-filled.vue"]]), ws = {
  name: "Close"
}, _s = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Es = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), bs = [
  Es
];
function Os(e, t, r, s, n, o) {
  return x(), I("svg", _s, bs);
}
var Cs = /* @__PURE__ */ Y(ws, [["render", Os], ["__file", "close.vue"]]), Rs = {
  name: "InfoFilled"
}, Ps = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xs = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1), Ss = [
  xs
];
function $s(e, t, r, s, n, o) {
  return x(), I("svg", Ps, Ss);
}
var pr = /* @__PURE__ */ Y(Rs, [["render", $s], ["__file", "info-filled.vue"]]), Ts = {
  name: "SuccessFilled"
}, Ns = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, As = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), Bs = [
  As
];
function Is(e, t, r, s, n, o) {
  return x(), I("svg", Ns, Bs);
}
var mr = /* @__PURE__ */ Y(Ts, [["render", Is], ["__file", "success-filled.vue"]]), Ds = {
  name: "WarningFilled"
}, Ls = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fs = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1), Us = [
  Fs
];
function qs(e, t, r, s, n, o) {
  return x(), I("svg", Ls, Us);
}
var vr = /* @__PURE__ */ Y(Ds, [["render", qs], ["__file", "warning-filled.vue"]]);
const hr = "__epPropKey", F = (e) => e, Ms = (e) => fr(e) && !!e[hr], gr = (e, t) => {
  if (!fr(e) || Ms(e))
    return e;
  const { values: r, required: s, default: n, type: o, validator: a } = e, u = {
    type: o,
    required: !!s,
    validator: r || a ? (d) => {
      let p = !1, m = [];
      if (r && (m = Array.from(r), Bt(e, "default") && m.push(n), p || (p = m.includes(d))), a && (p || (p = a(d))), !p && m.length > 0) {
        const l = [...new Set(m)].map((y) => JSON.stringify(y)).join(", ");
        $r(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${l}], got value ${JSON.stringify(d)}.`);
      }
      return p;
    } : void 0,
    [hr]: !0
  };
  return Bt(e, "default") && (u.default = n), u;
}, me = (e) => Wn(Object.entries(e).map(([t, r]) => [
  t,
  gr(r, t)
])), ks = F([
  String,
  Object,
  Function
]), js = {
  Close: Cs,
  SuccessFilled: mr,
  InfoFilled: pr,
  WarningFilled: vr,
  CircleCloseFilled: dr
}, Dt = {
  success: mr,
  warning: vr,
  error: dr,
  info: pr
}, yr = (e, t) => {
  if (e.install = (r) => {
    for (const s of [e, ...Object.values(t != null ? t : {})])
      r.component(s.name, s);
  }, t)
    for (const [r, s] of Object.entries(t))
      e[r] = s;
  return e;
}, zs = (e, t) => (e.install = (r) => {
  e._context = r._context, r.config.globalProperties[t] = e;
}, e), Hs = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Vs = ["", "default", "small", "large"], Ws = (e) => e, wr = Symbol(), ie = R();
function Ze(e, t = void 0) {
  const r = G() ? Nr(wr, ie) : ie;
  return e ? C(() => {
    var s, n;
    return (n = (s = r.value) == null ? void 0 : s[e]) != null ? n : t;
  }) : r;
}
const Js = (e, t, r = !1) => {
  var s;
  const n = !!G(), o = n ? Ze() : void 0, a = (s = t == null ? void 0 : t.provide) != null ? s : n ? Tr : void 0;
  if (!a) {
    Ke("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const i = C(() => {
    const u = g(e);
    return o != null && o.value ? Qs(o.value, u) : u;
  });
  return a(wr, i), (r || !ie.value) && (ie.value = i.value), i;
}, Qs = (e, t) => {
  var r;
  const s = [.../* @__PURE__ */ new Set([...It(e), ...It(t)])], n = {};
  for (const o of s)
    n[o] = (r = t[o]) != null ? r : e[o];
  return n;
}, Xs = gr({
  type: String,
  values: Vs,
  required: !1
}), Gs = "el", Ks = "is-", M = (e, t, r, s, n) => {
  let o = `${e}-${t}`;
  return r && (o += `-${r}`), s && (o += `__${s}`), n && (o += `--${n}`), o;
}, Ye = (e) => {
  const t = Ze("namespace", Gs);
  return {
    namespace: t,
    b: (h = "") => M(t.value, e, h, "", ""),
    e: (h) => h ? M(t.value, e, "", h, "") : "",
    m: (h) => h ? M(t.value, e, "", "", h) : "",
    be: (h, c) => h && c ? M(t.value, e, h, c, "") : "",
    em: (h, c) => h && c ? M(t.value, e, "", h, c) : "",
    bm: (h, c) => h && c ? M(t.value, e, h, "", c) : "",
    bem: (h, c, f) => h && c && f ? M(t.value, e, h, c, f) : "",
    is: (h, ...c) => {
      const f = c.length >= 1 ? c[0] : !0;
      return h && f ? `${Ks}${h}` : "";
    },
    cssVar: (h) => {
      const c = {};
      for (const f in h)
        h[f] && (c[`--${t.value}-${f}`] = h[f]);
      return c;
    },
    cssVarName: (h) => `--${t.value}-${h}`,
    cssVarBlock: (h) => {
      const c = {};
      for (const f in h)
        h[f] && (c[`--${t.value}-${e}-${f}`] = h[f]);
      return c;
    },
    cssVarBlockName: (h) => `--${t.value}-${e}-${h}`
  };
}, Lt = R(0), Zs = () => {
  const e = Ze("zIndex", 2e3), t = C(() => e.value + Lt.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (Lt.value++, t.value)
  };
};
var et = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, n] of t)
    r[s] = n;
  return r;
};
const Ys = me({
  size: {
    type: F([Number, String])
  },
  color: {
    type: String
  }
}), eo = {
  name: "ElIcon",
  inheritAttrs: !1
}, to = /* @__PURE__ */ ue({
  ...eo,
  props: Ys,
  setup(e) {
    const t = e, r = Ye("icon"), s = C(() => {
      const { size: n, color: o } = t;
      return !n && !o ? {} : {
        fontSize: ls(n) ? void 0 : ps(n),
        "--color": o
      };
    });
    return (n, o) => (x(), I("i", Ar({
      class: g(r).b(),
      style: g(s)
    }, n.$attrs), [
      le(n.$slots, "default")
    ], 16));
  }
});
var ro = /* @__PURE__ */ et(to, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Ft = yr(ro), no = me({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
}), so = ["textContent"], oo = {
  name: "ElBadge"
}, ao = /* @__PURE__ */ ue({
  ...oo,
  props: no,
  setup(e, { expose: t }) {
    const r = e, s = Ye("badge"), n = C(() => r.isDot ? "" : oe(r.value) && oe(r.max) ? r.max < r.value ? `${r.max}+` : `${r.value}` : `${r.value}`);
    return t({
      content: n
    }), (o, a) => (x(), I("div", {
      class: D(g(s).b())
    }, [
      le(o.$slots, "default"),
      ke(Mt, {
        name: `${g(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: te(() => [
          kt(U("sup", {
            class: D([
              g(s).e("content"),
              g(s).em("content", o.type),
              g(s).is("fixed", !!o.$slots.default),
              g(s).is("dot", o.isDot)
            ]),
            textContent: jt(g(n))
          }, null, 10, so), [
            [zt, !o.hidden && (g(n) || o.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var io = /* @__PURE__ */ et(ao, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const uo = yr(io), qe = {}, lo = me({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: F(Object)
  },
  size: Xs,
  button: {
    type: F(Object)
  },
  experimentalFeatures: {
    type: F(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: F(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
});
ue({
  name: "ElConfigProvider",
  props: lo,
  setup(e, { slots: t }) {
    K(() => e.message, (s) => {
      Object.assign(qe, s != null ? s : {});
    }, { immediate: !0, deep: !0 });
    const r = Js(e);
    return () => le(t, "default", { config: r == null ? void 0 : r.value });
  }
});
const _r = ["success", "info", "warning", "error"], P = Ws({
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  offset: 16,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: Z ? document.body : void 0
}), co = me({
  customClass: {
    type: String,
    default: P.customClass
  },
  center: {
    type: Boolean,
    default: P.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: P.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: P.duration
  },
  icon: {
    type: ks,
    default: P.icon
  },
  id: {
    type: String,
    default: P.id
  },
  message: {
    type: F([
      String,
      Object,
      Function
    ]),
    default: P.message
  },
  onClose: {
    type: F(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: P.showClose
  },
  type: {
    type: String,
    values: _r,
    default: P.type
  },
  offset: {
    type: Number,
    default: P.offset
  },
  zIndex: {
    type: Number,
    default: P.zIndex
  },
  grouping: {
    type: Boolean,
    default: P.grouping
  },
  repeatNum: {
    type: Number,
    default: P.repeatNum
  }
}), fo = {
  destroy: () => !0
}, B = Br([]), po = (e) => {
  const t = B.findIndex((n) => n.id === e), r = B[t];
  let s;
  return t > 0 && (s = B[t - 1]), { current: r, prev: s };
}, mo = (e) => {
  const { prev: t } = po(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, vo = ["id"], ho = ["innerHTML"], go = {
  name: "ElMessage"
}, yo = /* @__PURE__ */ ue({
  ...go,
  props: co,
  emits: fo,
  setup(e, { expose: t }) {
    const r = e, { Close: s } = js, n = Ye("message"), o = R(), a = R(!1), i = R(0);
    let u;
    const d = C(() => r.type ? r.type === "error" ? "danger" : r.type : "info"), p = C(() => {
      const w = r.type;
      return { [n.bm("icon", w)]: w && Dt[w] };
    }), m = C(() => r.icon || Dt[r.type] || ""), l = C(() => mo(r.id)), y = C(() => r.offset + l.value), h = C(() => i.value + y.value), c = C(() => ({
      top: `${y.value}px`,
      zIndex: r.zIndex
    }));
    function f() {
      r.duration !== 0 && ({ stop: u } = Gn(() => {
        b();
      }, r.duration));
    }
    function _() {
      u == null || u();
    }
    function b() {
      a.value = !1;
    }
    function $({ code: w }) {
      w === Hs.esc && b();
    }
    return Me(() => {
      f(), a.value = !0;
    }), K(() => r.repeatNum, () => {
      _(), f();
    }), Kn(document, "keydown", $), rs(o, () => {
      i.value = o.value.getBoundingClientRect().height;
    }), t({
      visible: a,
      bottom: h,
      close: b
    }), (w, v) => (x(), X(Mt, {
      name: g(n).b("fade"),
      onBeforeLeave: w.onClose,
      onAfterLeave: v[0] || (v[0] = (tt) => w.$emit("destroy")),
      persisted: ""
    }, {
      default: te(() => [
        kt(U("div", {
          id: w.id,
          ref_key: "messageRef",
          ref: o,
          class: D([
            g(n).b(),
            { [g(n).m(w.type)]: w.type && !w.icon },
            g(n).is("center", w.center),
            g(n).is("closable", w.showClose),
            w.customClass
          ]),
          style: Ir(g(c)),
          role: "alert",
          onMouseenter: _,
          onMouseleave: f
        }, [
          w.repeatNum > 1 ? (x(), X(g(uo), {
            key: 0,
            value: w.repeatNum,
            type: g(d),
            class: D(g(n).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ee("v-if", !0),
          g(m) ? (x(), X(g(Ft), {
            key: 1,
            class: D([g(n).e("icon"), g(p)])
          }, {
            default: te(() => [
              (x(), X(Dr(g(m))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          le(w.$slots, "default", {}, () => [
            w.dangerouslyUseHTMLString ? (x(), I(Lr, { key: 1 }, [
              ee(" Caution here, message could've been compromised, never use user's input as message "),
              U("p", {
                class: D(g(n).e("content")),
                innerHTML: w.message
              }, null, 10, ho)
            ], 2112)) : (x(), I("p", {
              key: 0,
              class: D(g(n).e("content"))
            }, jt(w.message), 3))
          ]),
          w.showClose ? (x(), X(g(Ft), {
            key: 2,
            class: D(g(n).e("closeBtn")),
            onClick: Fr(b, ["stop"])
          }, {
            default: te(() => [
              ke(g(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 46, vo), [
          [zt, a.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var wo = /* @__PURE__ */ et(yo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let _o = 1;
const Er = (e) => {
  const t = !e || ae(e) || Ht(e) || Ue(e) ? { message: e } : e, r = {
    ...P,
    ...t
  };
  if (!r.appendTo)
    r.appendTo = document.body;
  else if (ae(r.appendTo)) {
    let s = document.querySelector(r.appendTo);
    cs(s) || (Ke("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), s = document.body), r.appendTo = s;
  }
  return r;
}, Eo = (e) => {
  const t = B.indexOf(e);
  if (t === -1)
    return;
  B.splice(t, 1);
  const { handler: r } = e;
  r.close();
}, bo = ({ appendTo: e, ...t }, r) => {
  const { nextZIndex: s } = Zs(), n = `message_${_o++}`, o = t.onClose, a = document.createElement("div"), i = {
    ...t,
    zIndex: s() + t.zIndex,
    id: n,
    onClose: () => {
      o == null || o(), Eo(m);
    },
    onDestroy: () => {
      st(null, a);
    }
  }, u = ke(wo, i, Ue(i.message) || Ht(i.message) ? {
    default: Ue(i.message) ? i.message : () => i.message
  } : null);
  u.appContext = r || J._context, st(u, a), e.appendChild(a.firstElementChild);
  const d = u.component, m = {
    id: n,
    vnode: u,
    vm: d,
    handler: {
      close: () => {
        d.exposed.visible.value = !1;
      }
    },
    props: u.component.props
  };
  return m;
}, J = (e = {}, t) => {
  if (!Z)
    return { close: () => {
    } };
  if (oe(qe.max) && B.length >= qe.max)
    return { close: () => {
    } };
  const r = Er(e);
  if (r.grouping && B.length) {
    const n = B.find(({ vnode: o }) => {
      var a;
      return ((a = o.props) == null ? void 0 : a.message) === r.message;
    });
    if (n)
      return n.props.repeatNum += 1, n.props.type = r.type, n.handler;
  }
  const s = bo(r, t);
  return B.push(s), s.handler;
};
_r.forEach((e) => {
  J[e] = (t = {}, r) => {
    const s = Er(t);
    return J({ ...s, type: e }, r);
  };
});
function Oo(e) {
  for (const t of B)
    (!e || e === t.props.type) && t.handler.close();
}
J.closeAll = Oo;
J._context = null;
const Ut = zs(J, "$message");
function Po({
  instance: e = Be,
  beforeRequest: t,
  beforeResponse: r,
  responseHandler: s,
  errorHandler: n,
  errorResponse: o
} = {}) {
  let a = e;
  a || (a = Be, a.defaults.timeout = 1e4, a.defaults.withCredentials = !0, a.defaults.headers = {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=UTF-8"
  });
  const i = (c) => {
    n ? n(c) : (Ut.closeAll(), Ut.error(c));
  }, u = [], d = Be.CancelToken, p = (c) => {
    const f = `${c.url}&${c.method}`;
    for (const _ in u)
      u[_].url === f && (u[_].fn(), u.splice(_, 1));
  };
  a.interceptors.request.use(async (c) => {
    const f = t ? await t(c) : c;
    return p(f), f.cancelToken = new d((_) => {
      u.push({ url: `${f.url}&${f.method}`, fn: _ });
    }), f;
  }), a.interceptors.response.use(
    async (c) => {
      if (p(c.config), r)
        return r ? await r(c) : c;
      if (s)
        return await s(c);
      const { data: f, data: { code: _ } } = c || {};
      return [0, 1001].includes(_) ? f : (f && o(f), i(c.message));
    },
    async (c) => {
      if (c && c.response) {
        const { data: f, status: _ } = c.response;
        if (_ && o && await o(f), f.errors && f.errors.length)
          c.message = f.errors[0].message || f.message;
        else {
          const b = {
            400: "\u8BF7\u6C42\u9519\u8BEF",
            401: "\u767B\u5F55\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55",
            403: "\u62D2\u7EDD\u8BBF\u95EE",
            404: "\u8BF7\u6C42\u5931\u8D25",
            408: "\u8BF7\u6C42\u8D85\u65F6",
            500: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF",
            501: "\u670D\u52A1\u672A\u5B9E\u73B0",
            502: "\u65E0\u6CD5\u8FDE\u63A5\u670D\u52A1\u5668",
            503: "\u670D\u52A1\u4E0D\u53EF\u7528",
            504: "\u8FDE\u63A5\u670D\u52A1\u5668\u8D85\u65F6",
            505: "HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301"
          };
          c.message = b[_];
        }
        i(c.message);
      }
      return c.message && c.message.includes("timeout of") && (c.message = "\u7F51\u7EDC\u8D85\u65F6, \u8BF7\u68C0\u67E5\u7F51\u7EDC\uFF01"), c.message ? Promise.reject(c) : c;
    }
  );
  const m = (c, f = !1) => f ? c : typeof c.data < "u" && c.data, l = async (c, f, _, b) => {
    try {
      const $ = ["post", "put"].includes(_) ? await a({ method: _, url: c, data: f }) : await a[_](c, { params: f });
      return m($, b);
    } catch ($) {
      if (i($.message), b)
        return $;
    }
  };
  return {
    $api: {
      get: (c, f) => l(c, f, "get"),
      post: (c, f) => l(c, f, "post"),
      put: (c, f) => l(c, f, "put"),
      delete: (c, f) => l(c, f, "delete"),
      all: (c, f) => l(c, f, "all")
    },
    $http: {
      get: (c, f) => l(c, f, "get", !0),
      post: (c, f) => l(c, f, "post", !0),
      put: (c, f) => l(c, f, "put", !0),
      delete: (c, f) => l(c, f, "delete", !0),
      all: (c, f) => l(c, f, "all", !0)
    }
  };
}
function xo() {
  const e = G(), { globalProperties: t } = e.appContext.config, { $message: r, $messageBox: s } = t, n = (i, u, d) => {
    r.closeAll(), r({ message: i, type: u, ...d });
  };
  return {
    message: {
      error: (i, u) => n(i, "error", u),
      success: (i, u) => n(i, "success", u),
      warning: (i, u) => n(i, "warning", u),
      info: (i, u) => n(i, "info", u),
      close: () => r.closeAll()
    },
    messageBox: {
      confirm: ({ msg: i, title: u = "\u63D0\u793A", type: d = "warning" }) => new Promise((p) => {
        parent.window.postMessage("openMask()", "*"), window.top.postMessage("openMask()", "*"), s.confirm(i, u, {
          confirmButtonText: "\u786E\u8BA4",
          cancelButtonText: "\u53D6\u6D88",
          buttonSize: "",
          type: d
        }).then(() => p(!0)).catch(() => {
        }).finally(() => {
          parent.window.postMessage("closeMask()", "*"), window.top.postMessage("closeMask()", "*");
        });
      }),
      alert: ({ msg: i, title: u = "\u63D0\u793A", type: d = "warning" }, p) => {
        s.alert(i, u, {
          confirmButtonText: "\u786E\u8BA4",
          type: d,
          callback: (m) => p(m)
        });
      }
    }
  };
}
function So() {
  const e = R(null);
  return { ruleFormRef: e, submitForm: (s = e) => {
    const n = s.value || s;
    return n ? new Promise((o) => {
      n.validate((a) => {
        o(a);
      });
    }) : !1;
  }, resetForm: (s = e) => {
    (s.value || s).resetFields();
  } };
}
function $o() {
  const e = R(1), t = R(1), r = R(1), s = R([]), n = R(!0), o = R(!1);
  return {
    totalPage: e,
    totalRecord: t,
    currentPage: r,
    listData: s,
    tableData: s,
    loading: n,
    getNowPage: (u = [], d = s.value) => (r.value > 1 && (d.length === 1 || d.length === u.length) && r.value--, r.value),
    setListAndPage: (u) => {
      const {
        records: d = [],
        totalPage: p = 1,
        pageNo: m = 1,
        pageIndex: l,
        totalRecord: y = 1
      } = u || {};
      s.value = d, n.value = !1, e.value = p, t.value = y, r.value = l != null ? l : m, o.value = !d.length;
    },
    isNullData: o
  };
}
function To() {
  const e = (o, a) => {
    if (o) {
      let i = o;
      return typeof o == "string" && (i = Number(o)), i.toFixed(2);
    }
    return a ? 0 : "0.00";
  };
  return {
    moneyType: (o) => `\uFFE5${e(o)}`,
    moneyPoint: e,
    dataType: (o) => o || 0,
    paramsType: (o) => o !== void 0 ? o : "-",
    rounding: (o, a = 2) => Number(o.toFixed(a))
  };
}
export {
  Ro as useCommon,
  To as useFilters,
  So as useForm,
  xo as useMessage,
  $o as usePage,
  Po as useRequest
};
