import { getCurrentInstance as v, reactive as Ke, watchEffect as pe, computed as j, toRefs as me, nextTick as Ge, ref as L, watch as Xe, onMounted as Qe, onUnmounted as Ze } from "vue";
function En() {
  const e = v(), { globalProperties: t } = e ? e.appContext.config : {}, {
    $route: n,
    $pinia: r,
    $store: s,
    $router: i
  } = t, o = i, a = n, p = Ke({
    routeRef: n
  });
  pe(() => {
    const { $route: l } = t;
    p.routeRef = l;
  });
  const u = j(() => p.routeRef.name), d = j(() => p.routeRef.query), h = j(() => p.routeRef.params), b = (l, f) => {
    f ? o.push({ path: l, ...f }) : l.includes("/") ? o.push(l) : o.push({ name: l });
  }, y = (l, f) => {
    f ? o.replace({ path: l, ...f }) : l.includes("/") ? o.replace(l) : o.replace({ name: l });
  }, m = j(() => !1), g = (l) => e.proxy[l];
  return {
    ...me(p),
    route: a,
    router: o,
    routeQuery: d,
    routeParams: h,
    routerName: u,
    loadPage: b,
    isDev: m,
    replacePage: y,
    globalProperties: t,
    resetParams: g,
    store: s,
    pinia: r,
    nextTick: Ge,
    ref: L,
    watch: Xe,
    onMounted: Qe,
    onUnmounted: Ze,
    watchEffect: pe,
    getCurrentInstance: v,
    toRefs: me
  };
}
function Pe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ye } = Object.prototype, { getPrototypeOf: ie } = Object, V = ((e) => (t) => {
  const n = Ye.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), x = (e) => (e = e.toLowerCase(), (t) => V(t) === e), W = (e) => (t) => typeof t === e, { isArray: B } = Array, _ = W("undefined");
function et(e) {
  return e !== null && !_(e) && e.constructor !== null && !_(e.constructor) && O(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ne = x("ArrayBuffer");
function tt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ne(e.buffer), t;
}
const nt = W("string"), O = W("function"), Ce = W("number"), K = (e) => e !== null && typeof e == "object", rt = (e) => e === !0 || e === !1, M = (e) => {
  if (V(e) !== "object")
    return !1;
  const t = ie(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, st = x("Date"), ot = x("File"), it = x("Blob"), at = x("FileList"), ct = (e) => K(e) && O(e.pipe), ut = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || O(e.append) && ((t = V(e)) === "formdata" || // detect form-data instance
  t === "object" && O(e.toString) && e.toString() === "[object FormData]"));
}, lt = x("URLSearchParams"), ft = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function k(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), B(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let a;
    for (r = 0; r < o; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function Le(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Fe = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ue = (e) => !_(e) && e !== Fe;
function ne() {
  const { caseless: e } = Ue(this) && this || {}, t = {}, n = (r, s) => {
    const i = e && Le(t, s) || s;
    M(t[i]) && M(r) ? t[i] = ne(t[i], r) : M(r) ? t[i] = ne({}, r) : B(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && k(arguments[r], n);
  return t;
}
const dt = (e, t, n, { allOwnKeys: r } = {}) => (k(t, (s, i) => {
  n && O(s) ? e[i] = Pe(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), pt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), mt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, ht = (e, t, n, r) => {
  let s, i, o;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = n !== !1 && ie(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, yt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, wt = (e) => {
  if (!e)
    return null;
  if (B(e))
    return e;
  let t = e.length;
  if (!Ce(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, gt = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ie(Uint8Array)), Et = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, bt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Rt = x("HTMLFormElement"), St = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), he = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), At = x("RegExp"), Be = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  k(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, Ot = (e) => {
  Be(e, (t, n) => {
    if (O(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (O(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Tt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return B(e) ? r(e) : r(String(e).split(t)), n;
}, xt = () => {
}, Pt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Z = "abcdefghijklmnopqrstuvwxyz", ye = "0123456789", De = {
  DIGIT: ye,
  ALPHA: Z,
  ALPHA_DIGIT: Z + Z.toUpperCase() + ye
}, Nt = (e = 16, t = De.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Ct(e) {
  return !!(e && O(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Lt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (K(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = B(r) ? [] : {};
        return k(r, (o, a) => {
          const p = n(o, s + 1);
          !_(p) && (i[a] = p);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, Ft = x("AsyncFunction"), Ut = (e) => e && (K(e) || O(e)) && O(e.then) && O(e.catch), c = {
  isArray: B,
  isArrayBuffer: Ne,
  isBuffer: et,
  isFormData: ut,
  isArrayBufferView: tt,
  isString: nt,
  isNumber: Ce,
  isBoolean: rt,
  isObject: K,
  isPlainObject: M,
  isUndefined: _,
  isDate: st,
  isFile: ot,
  isBlob: it,
  isRegExp: At,
  isFunction: O,
  isStream: ct,
  isURLSearchParams: lt,
  isTypedArray: gt,
  isFileList: at,
  forEach: k,
  merge: ne,
  extend: dt,
  trim: ft,
  stripBOM: pt,
  inherits: mt,
  toFlatObject: ht,
  kindOf: V,
  kindOfTest: x,
  endsWith: yt,
  toArray: wt,
  forEachEntry: Et,
  matchAll: bt,
  isHTMLForm: Rt,
  hasOwnProperty: he,
  hasOwnProp: he,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Be,
  freezeMethods: Ot,
  toObjectSet: Tt,
  toCamelCase: St,
  noop: xt,
  toFiniteNumber: Pt,
  findKey: Le,
  global: Fe,
  isContextDefined: Ue,
  ALPHABET: De,
  generateString: Nt,
  isSpecCompliantForm: Ct,
  toJSONObject: Lt,
  isAsyncFn: Ft,
  isThenable: Ut
};
function E(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
c.inherits(E, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const _e = E.prototype, ke = {};
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
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  ke[e] = { value: e };
});
Object.defineProperties(E, ke);
Object.defineProperty(_e, "isAxiosError", { value: !0 });
E.from = (e, t, n, r, s, i) => {
  const o = Object.create(_e);
  return c.toFlatObject(e, o, function(p) {
    return p !== Error.prototype;
  }, (a) => a !== "isAxiosError"), E.call(o, e.message, t, n, r, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Bt = null;
function re(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function $e(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function we(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = $e(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Dt(e) {
  return c.isArray(e) && !e.some(re);
}
const _t = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function G(e, t, n) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = c.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, l) {
    return !c.isUndefined(l[g]);
  });
  const r = n.metaTokens, s = n.visitor || d, i = n.dots, o = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null)
      return "";
    if (c.isDate(m))
      return m.toISOString();
    if (!p && c.isBlob(m))
      throw new E("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(m) || c.isTypedArray(m) ? p && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function d(m, g, l) {
    let f = m;
    if (m && !l && typeof m == "object") {
      if (c.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (c.isArray(m) && Dt(m) || (c.isFileList(m) || c.endsWith(g, "[]")) && (f = c.toArray(m)))
        return g = $e(g), f.forEach(function(S, A) {
          !(c.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? we([g], A, i) : o === null ? g : g + "[]",
            u(S)
          );
        }), !1;
    }
    return re(m) ? !0 : (t.append(we(l, g, i), u(m)), !1);
  }
  const h = [], b = Object.assign(_t, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: re
  });
  function y(m, g) {
    if (!c.isUndefined(m)) {
      if (h.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      h.push(m), c.forEach(m, function(f, w) {
        (!(c.isUndefined(f) || f === null) && s.call(
          t,
          f,
          c.isString(w) ? w.trim() : w,
          g,
          b
        )) === !0 && y(f, g ? g.concat(w) : [w]);
      }), h.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function ge(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ae(e, t) {
  this._pairs = [], e && G(e, this, t);
}
const je = ae.prototype;
je.append = function(t, n) {
  this._pairs.push([t, n]);
};
je.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ge);
  } : ge;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function kt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Me(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || kt, s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = c.isURLSearchParams(t) ? t.toString() : new ae(t, n).toString(r), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class $t {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    c.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ee = $t, Ie = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, jt = typeof URLSearchParams < "u" ? URLSearchParams : ae, Mt = typeof FormData < "u" ? FormData : null, It = typeof Blob < "u" ? Blob : null, Ht = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), qt = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), T = {
  isBrowser: !0,
  classes: {
    URLSearchParams: jt,
    FormData: Mt,
    Blob: It
  },
  isStandardBrowserEnv: Ht,
  isStandardBrowserWebWorkerEnv: qt,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function zt(e, t) {
  return G(e, new T.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, i) {
      return T.isNode && c.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function vt(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Jt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function He(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    const a = Number.isFinite(+o), p = i >= n.length;
    return o = !o && c.isArray(s) ? s.length : o, p ? (c.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !a) : ((!s[o] || !c.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && c.isArray(s[o]) && (s[o] = Jt(s[o])), !a);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const n = {};
    return c.forEachEntry(e, (r, s) => {
      t(vt(r), s, n, 0);
    }), n;
  }
  return null;
}
function Vt(e, t, n) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ce = {
  transitional: Ie,
  adapter: T.isNode ? "http" : "xhr",
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = c.isObject(t);
    if (i && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return s && s ? JSON.stringify(He(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return zt(t, this.formSerializer).toString();
      if ((a = c.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return G(
          a ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), Vt(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ce.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && c.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? E.from(a, E.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: T.classes.FormData,
    Blob: T.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ce.headers[e] = {};
});
const ue = ce, Wt = c.toObjectSet([
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
]), Kt = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && Wt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, be = Symbol("internals");
function D(e) {
  return e && String(e).trim().toLowerCase();
}
function I(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(I) : String(e);
}
function Gt(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Xt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Y(e, t, n, r, s) {
  if (c.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!c.isString(t)) {
    if (c.isString(r))
      return t.indexOf(r) !== -1;
    if (c.isRegExp(r))
      return r.test(t);
  }
}
function Qt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Zt(e, t) {
  const n = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
class X {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(a, p, u) {
      const d = D(p);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const h = c.findKey(s, d);
      (!h || s[h] === void 0 || u === !0 || u === void 0 && s[h] !== !1) && (s[h || p] = I(a));
    }
    const o = (a, p) => c.forEach(a, (u, d) => i(u, d, p));
    return c.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : c.isString(t) && (t = t.trim()) && !Xt(t) ? o(Kt(t), n) : t != null && i(n, t, r), this;
  }
  get(t, n) {
    if (t = D(t), t) {
      const r = c.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Gt(s);
        if (c.isFunction(n))
          return n.call(this, s, r);
        if (c.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = D(t), t) {
      const r = c.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Y(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = D(o), o) {
        const a = c.findKey(r, o);
        a && (!n || Y(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return c.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Y(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return c.forEach(this, (s, i) => {
      const o = c.findKey(r, i);
      if (o) {
        n[o] = I(s), delete n[i];
        return;
      }
      const a = t ? Qt(i) : String(i).trim();
      a !== i && delete n[i], n[a] = I(s), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && c.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[be] = this[be] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const a = D(o);
      r[a] || (Zt(s, o), r[a] = !0);
    }
    return c.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
X.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(X.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
c.freezeMethods(X);
const P = X;
function ee(e, t) {
  const n = this || ue, r = t || n, s = P.from(r.headers);
  let i = r.data;
  return c.forEach(e, function(a) {
    i = a.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function qe(e) {
  return !!(e && e.__CANCEL__);
}
function $(e, t, n) {
  E.call(this, e ?? "canceled", E.ERR_CANCELED, t, n), this.name = "CanceledError";
}
c.inherits($, E, {
  __CANCEL__: !0
});
function Yt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new E(
    "Request failed with status code " + n.status,
    [E.ERR_BAD_REQUEST, E.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const en = T.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, i, o, a) {
        const p = [];
        p.push(n + "=" + encodeURIComponent(r)), c.isNumber(s) && p.push("expires=" + new Date(s).toGMTString()), c.isString(i) && p.push("path=" + i), c.isString(o) && p.push("domain=" + o), a === !0 && p.push("secure"), document.cookie = p.join("; ");
      },
      read: function(n) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function tn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function nn(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ze(e, t) {
  return e && !tn(t) ? nn(e, t) : t;
}
const rn = T.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(i) {
      let o = i;
      return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(o) {
      const a = c.isString(o) ? s(o) : o;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function sn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function on(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const u = Date.now(), d = r[i];
    o || (o = u), n[s] = p, r[s] = u;
    let h = i, b = 0;
    for (; h !== s; )
      b += n[h++], h = h % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), u - o < t)
      return;
    const y = d && u - d;
    return y ? Math.round(b * 1e3 / y) : void 0;
  };
}
function Re(e, t) {
  let n = 0;
  const r = on(50, 250);
  return (s) => {
    const i = s.loaded, o = s.lengthComputable ? s.total : void 0, a = i - n, p = r(a), u = i <= o;
    n = i;
    const d = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: a,
      rate: p || void 0,
      estimated: p && o && u ? (o - i) / p : void 0,
      event: s
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const an = typeof XMLHttpRequest < "u", cn = an && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const i = P.from(e.headers).normalize(), o = e.responseType;
    let a;
    function p() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    c.isFormData(s) && (T.isStandardBrowserEnv || T.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(y + ":" + m));
    }
    const d = ze(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Me(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function h() {
      if (!u)
        return;
      const y = P.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), g = {
        data: !o || o === "text" || o === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: y,
        config: e,
        request: u
      };
      Yt(function(f) {
        n(f), p();
      }, function(f) {
        r(f), p();
      }, g), u = null;
    }
    if ("onloadend" in u ? u.onloadend = h : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, u.onabort = function() {
      u && (r(new E("Request aborted", E.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new E("Network Error", E.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const g = e.transitional || Ie;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new E(
        m,
        g.clarifyTimeoutError ? E.ETIMEDOUT : E.ECONNABORTED,
        e,
        u
      )), u = null;
    }, T.isStandardBrowserEnv) {
      const y = (e.withCredentials || rn(d)) && e.xsrfCookieName && en.read(e.xsrfCookieName);
      y && i.set(e.xsrfHeaderName, y);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in u && c.forEach(i.toJSON(), function(m, g) {
      u.setRequestHeader(g, m);
    }), c.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), o && o !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Re(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Re(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (y) => {
      u && (r(!y || y.type ? new $(null, e, u) : y), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const b = sn(d);
    if (b && T.protocols.indexOf(b) === -1) {
      r(new E("Unsupported protocol " + b + ":", E.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(s || null);
  });
}, H = {
  http: Bt,
  xhr: cn
};
c.forEach(H, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ve = {
  getAdapter: (e) => {
    e = c.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let s = 0; s < t && (n = e[s], !(r = c.isString(n) ? H[n.toLowerCase()] : n)); s++)
      ;
    if (!r)
      throw r === !1 ? new E(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        c.hasOwnProp(H, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!c.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: H
};
function te(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new $(null, e);
}
function Se(e) {
  return te(e), e.headers = P.from(e.headers), e.data = ee.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ve.getAdapter(e.adapter || ue.adapter)(e).then(function(r) {
    return te(e), r.data = ee.call(
      e,
      e.transformResponse,
      r
    ), r.headers = P.from(r.headers), r;
  }, function(r) {
    return qe(r) || (te(e), r && r.response && (r.response.data = ee.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = P.from(r.response.headers))), Promise.reject(r);
  });
}
const Ae = (e) => e instanceof P ? e.toJSON() : e;
function U(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, h) {
    return c.isPlainObject(u) && c.isPlainObject(d) ? c.merge.call({ caseless: h }, u, d) : c.isPlainObject(d) ? c.merge({}, d) : c.isArray(d) ? d.slice() : d;
  }
  function s(u, d, h) {
    if (c.isUndefined(d)) {
      if (!c.isUndefined(u))
        return r(void 0, u, h);
    } else
      return r(u, d, h);
  }
  function i(u, d) {
    if (!c.isUndefined(d))
      return r(void 0, d);
  }
  function o(u, d) {
    if (c.isUndefined(d)) {
      if (!c.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, d);
  }
  function a(u, d, h) {
    if (h in t)
      return r(u, d);
    if (h in e)
      return r(void 0, u);
  }
  const p = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (u, d) => s(Ae(u), Ae(d), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const h = p[d] || s, b = h(e[d], t[d], d);
    c.isUndefined(b) && h !== a || (n[d] = b);
  }), n;
}
const Je = "1.5.0", le = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  le[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Oe = {};
le.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + Je + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, a) => {
    if (t === !1)
      throw new E(
        s(o, " has been removed" + (n ? " in " + n : "")),
        E.ERR_DEPRECATED
      );
    return n && !Oe[o] && (Oe[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, a) : !0;
  };
};
function un(e, t, n) {
  if (typeof e != "object")
    throw new E("options must be an object", E.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const a = e[i], p = a === void 0 || o(a, i, e);
      if (p !== !0)
        throw new E("option " + i + " must be " + p, E.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new E("Unknown option " + i, E.ERR_BAD_OPTION);
  }
}
const se = {
  assertOptions: un,
  validators: le
}, C = se.validators;
class J {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ee(),
      response: new Ee()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = U(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && se.assertOptions(r, {
      silentJSONParsing: C.transitional(C.boolean),
      forcedJSONParsing: C.transitional(C.boolean),
      clarifyTimeoutError: C.transitional(C.boolean)
    }, !1), s != null && (c.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : se.assertOptions(s, {
      encode: C.function,
      serialize: C.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && c.merge(
      i.common,
      i[n.method]
    );
    i && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete i[m];
      }
    ), n.headers = P.concat(o, i);
    const a = [];
    let p = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (p = p && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let d, h = 0, b;
    if (!p) {
      const m = [Se.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, u), b = m.length, d = Promise.resolve(n); h < b; )
        d = d.then(m[h++], m[h++]);
      return d;
    }
    b = a.length;
    let y = n;
    for (h = 0; h < b; ) {
      const m = a[h++], g = a[h++];
      try {
        y = m(y);
      } catch (l) {
        g.call(this, l);
        break;
      }
    }
    try {
      d = Se.call(this, y);
    } catch (m) {
      return Promise.reject(m);
    }
    for (h = 0, b = u.length; h < b; )
      d = d.then(u[h++], u[h++]);
    return d;
  }
  getUri(t) {
    t = U(this.defaults, t);
    const n = ze(t.baseURL, t.url);
    return Me(n, t.params, t.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(t) {
  J.prototype[t] = function(n, r) {
    return this.request(U(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, a) {
      return this.request(U(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  J.prototype[t] = n(), J.prototype[t + "Form"] = n(!0);
});
const q = J;
class fe {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, a) {
      r.reason || (r.reason = new $(i, o, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new fe(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const ln = fe;
function fn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function dn(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const oe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(oe).forEach(([e, t]) => {
  oe[t] = e;
});
const pn = oe;
function Ve(e) {
  const t = new q(e), n = Pe(q.prototype.request, t);
  return c.extend(n, q.prototype, t, { allOwnKeys: !0 }), c.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ve(U(e, s));
  }, n;
}
const R = Ve(ue);
R.Axios = q;
R.CanceledError = $;
R.CancelToken = ln;
R.isCancel = qe;
R.VERSION = Je;
R.toFormData = G;
R.AxiosError = E;
R.Cancel = R.CanceledError;
R.all = function(t) {
  return Promise.all(t);
};
R.spread = fn;
R.isAxiosError = dn;
R.mergeConfig = U;
R.AxiosHeaders = P;
R.formToJSON = (e) => He(c.isHTMLForm(e) ? new FormData(e) : e);
R.getAdapter = ve.getAdapter;
R.HttpStatusCode = pn;
R.default = R;
const z = R, mn = {
  error: (e, t = 3e3) => {
    const n = document.createElement("div");
    n.className = "el-message el-message--error", n.style.zIndex = "9999", n.innerHTML = `
    <i class="el-icon el-message__icon el-message-icon--error"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"></path></svg></i>
    <p class="el-message__content">${e}</p>
    `, document.body.appendChild(n), setTimeout(() => {
      n.style.opacity = 0;
    }, t), setTimeout(() => {
      document.body.removeChild(n);
    }, t + 300);
  }
};
function bn({
  instance: e = z,
  beforeRequest: t,
  beforeResponse: n,
  responseHandler: r,
  errorHandler: s,
  errorResponse: i,
  excludePeddings: o = []
} = {}) {
  let a = e;
  a || (a = z, a.defaults.timeout = 1e4, a.defaults.withCredentials = !0, a.defaults.headers = {
    // 设置默认请求头
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=UTF-8"
  });
  const p = (l, f) => {
    s ? s(l, f) : mn.error(l);
  }, u = [], d = z.CancelToken, h = (l) => {
    const { url: f, method: w, cancelable: S = !0 } = l, A = `${f}&${w}`;
    for (const N in u)
      u[N].url === A && !o.includes(A) && S && (u[N].fn(), u.splice(N, 1));
  };
  a.interceptors.request.use(async (l) => {
    const f = t ? await t(l) : l;
    return h(f), f.cancelToken = new d((w) => {
      u.push({ url: `${f.url}&${f.method}`, fn: w });
    }), f;
  }), a.interceptors.response.use(
    async (l) => {
      if (h(l.config), n)
        return n ? await n(l) : l;
      if (r)
        return await r(l);
      const { data: f, data: { code: w }, config: S } = l || {};
      return [0, 1001].includes(w) ? f : (f && i(f, S), p(l.message, f));
    },
    async (l) => {
      if (l.code === "ERR_CANCELED")
        return "";
      if (l && l.response) {
        const { data: f, status: w, config: S } = l.response;
        if (w && i) {
          const [A] = (f == null ? void 0 : f.errors) || [];
          await i(A ?? f, S);
        }
        if (f.errors && f.errors.length)
          l.message = f.errors[0].message || f.message;
        else {
          const A = {
            400: "请求错误",
            401: "登录过期，请重新登录",
            403: "拒绝访问",
            404: "请求失败",
            408: "请求超时",
            500: "服务器内部错误",
            501: "服务未实现",
            502: "无法连接服务器",
            503: "服务不可用",
            504: "连接服务器超时",
            505: "HTTP版本不受支持"
          };
          l.message = A[w];
        }
        p(l.message, f);
      }
      return l.message && l.message.includes("timeout of") && (l.message = "网络超时, 请检查网络！"), l.message ? Promise.reject(l) : l;
    }
  );
  const b = (l, f = !1) => f ? l : (l == null ? void 0 : l.data) ?? !1, y = async (l, f, w = {}, S = "get", A = !1) => {
    try {
      const N = {};
      if (f) {
        const de = (F) => /\[|\]/g.test(F);
        Object.keys(f).forEach((F) => {
          N[F] = f[F] && de ? [...f[F].toString()].map((Q) => de(Q) ? encodeURIComponent(Q) : Q).join("") : f[F];
        });
      }
      const We = ["post", "put"].includes(S) ? await a({
        method: S,
        url: l,
        data: f,
        ...w
      }) : await a[S](l, { params: N, ...w });
      return b(We, A);
    } catch (N) {
      if (A)
        return N;
    }
  };
  return {
    $api: {
      get: (l, f, w) => y(l, f, w, "get"),
      post: (l, f, w) => y(l, f, w, "post"),
      put: (l, f, w) => y(l, f, w, "put"),
      delete: (l, f, w) => y(l, f, w, "delete"),
      all: (l, f, w) => y(l, f, w, "all")
    },
    $http: {
      get: (l, f, w) => y(l, f, w, "get", !0),
      post: (l, f, w) => y(l, f, w, "post", !0),
      put: (l, f, w) => y(l, f, w, "put", !0),
      delete: (l, f, w) => y(l, f, w, "delete", !0),
      all: (l, f, w) => y(l, f, w, "all", !0)
    }
  };
}
function hn() {
  const e = v(), t = (o = "$message") => {
    const { globalProperties: a } = e.appContext.config;
    return a[o];
  }, n = (o, a, p) => {
    var u, d;
    (u = t()) == null || u.closeAll(), (d = t()) == null || d({ message: o, type: a, ...p });
  };
  return {
    message: {
      error: (o, a) => n(o, "error", a),
      success: (o, a) => n(o, "success", a),
      warning: (o, a) => n(o, "warning", a),
      info: (o, a) => n(o, "info", a),
      close: () => {
        var o;
        return (o = t()) == null ? void 0 : o.closeAll();
      }
    },
    messageBox: {
      confirm: ({
        msg: o,
        title: a = "提示",
        type: p = "warning",
        ...u
      }) => new Promise((d, h) => {
        var b;
        parent.window.postMessage("openMask()", "*"), window.top.postMessage("openMask()", "*"), (b = t("$messageBox")) == null || b.confirm(o, a, {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          buttonSize: "",
          type: p,
          ...u
        }).then(() => d(!0)).catch(() => h()).finally(() => {
          parent.window.postMessage("closeMask()", "*"), window.top.postMessage("closeMask()", "*");
        });
      }),
      alert: ({
        msg: o,
        title: a = "提示",
        type: p = "warning",
        ...u
      }, d) => {
        var h, b;
        (h = t("$messageBox")) == null || h.close(), (b = t("$messageBox")) == null || b.alert(o, a, {
          confirmButtonText: "确认",
          type: p,
          ...u,
          callback: (y) => d(y)
        });
      }
    },
    closeMessageBox: () => {
      var o;
      return (o = t("$messageBox")) == null ? void 0 : o.close();
    }
  };
}
function Rn() {
  const e = L(null);
  return { ruleFormRef: e, submitForm: (r = e) => {
    const s = r.value || r;
    return s ? new Promise((i) => {
      s.validate((o) => {
        i(o);
      });
    }) : !1;
  }, resetForm: (r = e) => {
    (r.value || r).resetFields();
  } };
}
function Sn() {
  const e = L(1), t = L(1), n = L(1), r = L([]), s = L(!0), i = L(!1);
  return {
    totalPage: e,
    totalRecord: t,
    currentPage: n,
    listData: r,
    tableData: r,
    loading: s,
    getNowPage: (p = [], u = r.value) => (n.value > 1 && (u.length === 1 || u.length === p.length) && n.value--, n.value),
    setListAndPage: (p, u = !1) => {
      const {
        records: d = [],
        totalPage: h = 1,
        pageNo: b = 1,
        pageIndex: y,
        totalRecord: m = 1,
        content: g,
        total: l,
        size: f
      } = p || {}, w = g ?? d;
      r.value = u ? [...r.value, ...w] : w, s.value = !1, e.value = l ?? h, t.value = m, n.value = f ?? y ?? b, i.value = !r.value.length;
    },
    isNullData: i
  };
}
function An() {
  const e = (i, o) => {
    if (i) {
      let a = i;
      return typeof i == "string" && (a = Number(i)), a.toFixed(2);
    }
    return o ? 0 : "0.00";
  };
  return {
    moneyType: (i) => `￥${e(i)}`,
    moneyPoint: e,
    dataType: (i) => i || 0,
    paramsType: (i) => i !== void 0 ? i : "-",
    rounding: (i, o = 2) => Number(i.toFixed(o))
  };
}
const On = {
  mounted: (e, t) => {
    const { activeName: n, className: r, defaultIndex: s } = t.value || {};
    r && s ? document.querySelectorAll(`.${r}`)[s].classList.add(n) : document.querySelector(`.${n}`) || e.classList.add(n), e.handler = function() {
      const i = document.querySelector(`.${n}`);
      i && i.classList.remove(n), e.classList.add(n);
    }, e.addEventListener("click", e.handler);
  },
  unmounted: (e) => {
    e.removeEventListener("click", e.handler);
  }
};
function yn() {
  return { getImageUrl: (t, n = "images", r = v()) => {
    var a;
    const s = (a = r.type.__file.split("src")) == null ? void 0 : a[1], i = `${window.location.origin}/src${s}`, o = /^(\.{1,2}\/)/.test(n) ? n : `../../assets/${n}`;
    return new URL(`${o}/${t}`, i).href;
  } };
}
const Te = (e, t, n) => {
  const { getImageUrl: r } = yn(), { floder: s, name: i } = t.value || {}, o = r(i, s, n == null ? void 0 : n.ctx);
  e.setAttribute("src", o);
}, Tn = {
  mounted: (e, t, n) => Te(e, t, n),
  updated: (e, t, n) => Te(e, t, n)
}, xe = (e, t) => {
  const { money: n, number: r } = t.modifiers;
  n ? e.innerHTML = `￥${Number(t.value).toFixed(2)}` : e.innerHTML = t.value || (r ? 0 : "-");
}, xn = {
  mounted: (e, t) => xe(e, t),
  updated: (e, t) => xe(e, t)
};
function wn() {
  return {
    getFormatParams: (r, s = 0) => r ?? s,
    formatRadixPoint: (r, s = 2) => {
      var o;
      const i = new RegExp(`^\\d+(\\.\\d{0,${s}})?`, "g");
      return r.indexOf(".") > 0 ? (o = r.match(i)) == null ? void 0 : o[0] : /(^0\d+)/.test(r) ? r.substr(1) : r;
    },
    setUrlParams: (r = {}, s = !1) => {
      let i = "";
      return Object.keys(r).forEach((o) => {
        ![void 0, "", null].includes(r[o]) && o !== "pageSize" && (i += `&${o}=${r[o]}`);
      }), s ? i : i.replace(/^&/, "?");
    }
  };
}
function Pn() {
  const { setUrlParams: e } = wn();
  return { setUrlParams: e, isExportEmpty: (r) => {
    const { message: s } = hn();
    return r ? (s.warning("当前无数据可导出"), !0) : !1;
  }, downloadFile: async (r, s) => {
    const i = /\.xlsx$/.test(s) ? s : `${s}.xlsx`, o = await z.get(r, { responseType: "blob" }), a = document.createElement("a");
    function p(u, d) {
      const h = new FileReader();
      h.readAsDataURL(u), h.onload = function(b) {
        d(b.target.result);
      };
    }
    if (typeof dfAndroidAppHD < "u") {
      const u = new Blob([o.data], { type: "application/vnd.ms-excel" });
      p(u, (d) => {
        window.webkit && window.webkit.messageHandlers.openDocument && window.webkit.messageHandlers.openDocument.postMessage(`${i};${d}`), typeof dfAndroidAppHD < "u" && dfAndroidAppHD.openDocument(`${i};${d}`);
      });
    } else
      a.href = URL.createObjectURL(o.data), a.download = `${i}`, a.click(), document.body.appendChild(a);
  } };
}
function Nn(e) {
  const t = (e ?? window.location.href).split("?")[1], n = {};
  if (t) {
    const r = t.split("&");
    for (let s = 0; s < r.length; s += 1) {
      const [i, o] = r[s].split("=");
      n[i] = o;
    }
  }
  return n;
}
export {
  Tn as VImageUrl,
  xn as VParams,
  En as useCommon,
  Pn as useExport,
  An as useFilters,
  Rn as useForm,
  yn as useImage,
  hn as useMessage,
  Sn as usePage,
  bn as useRequest,
  Nn as useUrlSearchParams,
  wn as useUtils,
  On as vOnClickActive
};
