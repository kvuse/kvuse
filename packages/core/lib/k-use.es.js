import { getCurrentInstance as v, reactive as We, watchEffect as pe, computed as j, toRefs as me, nextTick as Ke, ref as F, watch as Ge, onMounted as Xe, onUnmounted as Qe } from "vue";
function bn() {
  const e = v(), { globalProperties: t } = e ? e.appContext.config : {}, {
    $route: n,
    $pinia: r,
    $store: s,
    $router: o
  } = t, i = o, a = n, p = We({
    routeRef: n
  });
  pe(() => {
    const { $route: l } = t;
    p.routeRef = l;
  });
  const u = j(() => p.routeRef.name), d = j(() => p.routeRef.query), h = j(() => p.routeRef.params), b = (l, f) => {
    f ? i.push({ path: l, ...f }) : l.includes("/") ? i.push(l) : i.push({ name: l });
  }, y = (l, f) => {
    f ? i.replace({ path: l, ...f }) : l.includes("/") ? i.replace(l) : i.replace({ name: l });
  }, m = j(() => !1), E = (l) => e.proxy[l];
  return {
    ...me(p),
    route: a,
    router: i,
    routeQuery: d,
    routeParams: h,
    routerName: u,
    loadPage: b,
    isDev: m,
    replacePage: y,
    globalProperties: t,
    resetParams: E,
    store: s,
    pinia: r,
    nextTick: Ke,
    ref: F,
    watch: Ge,
    onMounted: Xe,
    onUnmounted: Qe,
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
const { toString: Ye } = Object.prototype, { getPrototypeOf: ae } = Object, V = ((e) => (t) => {
  const n = Ye.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), x = (e) => (e = e.toLowerCase(), (t) => V(t) === e), W = (e) => (t) => typeof t === e, { isArray: B } = Array, _ = W("undefined");
function Ze(e) {
  return e !== null && !_(e) && e.constructor !== null && !_(e.constructor) && O(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ne = x("ArrayBuffer");
function et(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ne(e.buffer), t;
}
const tt = W("string"), O = W("function"), Ce = W("number"), K = (e) => e !== null && typeof e == "object", nt = (e) => e === !0 || e === !1, M = (e) => {
  if (V(e) !== "object")
    return !1;
  const t = ae(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, rt = x("Date"), st = x("File"), ot = x("Blob"), it = x("FileList"), at = (e) => K(e) && O(e.pipe), ct = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || O(e.append) && ((t = V(e)) === "formdata" || // detect form-data instance
  t === "object" && O(e.toString) && e.toString() === "[object FormData]"));
}, ut = x("URLSearchParams"), lt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function k(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), B(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function Fe(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Le = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ue = (e) => !_(e) && e !== Le;
function re() {
  const { caseless: e } = Ue(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Fe(t, s) || s;
    M(t[o]) && M(r) ? t[o] = re(t[o], r) : M(r) ? t[o] = re({}, r) : B(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && k(arguments[r], n);
  return t;
}
const ft = (e, t, n, { allOwnKeys: r } = {}) => (k(t, (s, o) => {
  n && O(s) ? e[o] = Pe(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), dt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), pt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, mt = (e, t, n, r) => {
  let s, o, i;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && ae(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ht = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, yt = (e) => {
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
}, wt = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ae(Uint8Array)), Et = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, gt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, bt = x("HTMLFormElement"), Rt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), he = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), St = x("RegExp"), Be = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  k(n, (s, o) => {
    t(s, o, e) !== !1 && (r[o] = s);
  }), Object.defineProperties(e, r);
}, At = (e) => {
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
}, Ot = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return B(e) ? r(e) : r(String(e).split(t)), n;
}, Tt = () => {
}, xt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Z = "abcdefghijklmnopqrstuvwxyz", ye = "0123456789", De = {
  DIGIT: ye,
  ALPHA: Z,
  ALPHA_DIGIT: Z + Z.toUpperCase() + ye
}, Pt = (e = 16, t = De.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Nt(e) {
  return !!(e && O(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ct = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (K(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = B(r) ? [] : {};
        return k(r, (i, a) => {
          const p = n(i, s + 1);
          !_(p) && (o[a] = p);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Ft = x("AsyncFunction"), Lt = (e) => e && (K(e) || O(e)) && O(e.then) && O(e.catch), c = {
  isArray: B,
  isArrayBuffer: Ne,
  isBuffer: Ze,
  isFormData: ct,
  isArrayBufferView: et,
  isString: tt,
  isNumber: Ce,
  isBoolean: nt,
  isObject: K,
  isPlainObject: M,
  isUndefined: _,
  isDate: rt,
  isFile: st,
  isBlob: ot,
  isRegExp: St,
  isFunction: O,
  isStream: at,
  isURLSearchParams: ut,
  isTypedArray: wt,
  isFileList: it,
  forEach: k,
  merge: re,
  extend: ft,
  trim: lt,
  stripBOM: dt,
  inherits: pt,
  toFlatObject: mt,
  kindOf: V,
  kindOfTest: x,
  endsWith: ht,
  toArray: yt,
  forEachEntry: Et,
  matchAll: gt,
  isHTMLForm: bt,
  hasOwnProperty: he,
  hasOwnProp: he,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Be,
  freezeMethods: At,
  toObjectSet: Ot,
  toCamelCase: Rt,
  noop: Tt,
  toFiniteNumber: xt,
  findKey: Fe,
  global: Le,
  isContextDefined: Ue,
  ALPHABET: De,
  generateString: Pt,
  isSpecCompliantForm: Nt,
  toJSONObject: Ct,
  isAsyncFn: Ft,
  isThenable: Lt
};
function g(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
c.inherits(g, Error, {
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
const _e = g.prototype, ke = {};
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
Object.defineProperties(g, ke);
Object.defineProperty(_e, "isAxiosError", { value: !0 });
g.from = (e, t, n, r, s, o) => {
  const i = Object.create(_e);
  return c.toFlatObject(e, i, function(p) {
    return p !== Error.prototype;
  }, (a) => a !== "isAxiosError"), g.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Ut = null;
function se(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function $e(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function we(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = $e(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Bt(e) {
  return c.isArray(e) && !e.some(se);
}
const Dt = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function G(e, t, n) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = c.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, l) {
    return !c.isUndefined(l[E]);
  });
  const r = n.metaTokens, s = n.visitor || d, o = n.dots, i = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null)
      return "";
    if (c.isDate(m))
      return m.toISOString();
    if (!p && c.isBlob(m))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(m) || c.isTypedArray(m) ? p && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function d(m, E, l) {
    let f = m;
    if (m && !l && typeof m == "object") {
      if (c.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), m = JSON.stringify(m);
      else if (c.isArray(m) && Bt(m) || (c.isFileList(m) || c.endsWith(E, "[]")) && (f = c.toArray(m)))
        return E = $e(E), f.forEach(function(S, A) {
          !(c.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? we([E], A, o) : i === null ? E : E + "[]",
            u(S)
          );
        }), !1;
    }
    return se(m) ? !0 : (t.append(we(l, E, o), u(m)), !1);
  }
  const h = [], b = Object.assign(Dt, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: se
  });
  function y(m, E) {
    if (!c.isUndefined(m)) {
      if (h.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      h.push(m), c.forEach(m, function(f, w) {
        (!(c.isUndefined(f) || f === null) && s.call(
          t,
          f,
          c.isString(w) ? w.trim() : w,
          E,
          b
        )) === !0 && y(f, E ? E.concat(w) : [w]);
      }), h.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Ee(e) {
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
function ce(e, t) {
  this._pairs = [], e && G(e, this, t);
}
const je = ce.prototype;
je.append = function(t, n) {
  this._pairs.push([t, n]);
};
je.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ee);
  } : Ee;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function _t(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Me(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || _t, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = c.isURLSearchParams(t) ? t.toString() : new ce(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class kt {
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
const ge = kt, Ie = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, $t = typeof URLSearchParams < "u" ? URLSearchParams : ce, jt = typeof FormData < "u" ? FormData : null, Mt = typeof Blob < "u" ? Blob : null, It = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Ht = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), T = {
  isBrowser: !0,
  classes: {
    URLSearchParams: $t,
    FormData: jt,
    Blob: Mt
  },
  isStandardBrowserEnv: It,
  isStandardBrowserWebWorkerEnv: Ht,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function qt(e, t) {
  return G(e, new T.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return T.isNode && c.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function zt(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function vt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function He(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    const a = Number.isFinite(+i), p = o >= n.length;
    return i = !i && c.isArray(s) ? s.length : i, p ? (c.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !c.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && c.isArray(s[i]) && (s[i] = vt(s[i])), !a);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const n = {};
    return c.forEachEntry(e, (r, s) => {
      t(zt(r), s, n, 0);
    }), n;
  }
  return null;
}
const Jt = {
  "Content-Type": void 0
};
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
const X = {
  transitional: Ie,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = c.isObject(t);
    if (o && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return s && s ? JSON.stringify(He(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return qt(t, this.formSerializer).toString();
      if ((a = c.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return G(
          a ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Vt(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || X.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && c.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? g.from(a, g.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
      Accept: "application/json, text/plain, */*"
    }
  }
};
c.forEach(["delete", "get", "head"], function(t) {
  X.headers[t] = {};
});
c.forEach(["post", "put", "patch"], function(t) {
  X.headers[t] = c.merge(Jt);
});
const ue = X, Wt = c.toObjectSet([
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
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Wt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
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
function ee(e, t, n, r, s) {
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
function Yt(e, t) {
  const n = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class Q {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, p, u) {
      const d = D(p);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const h = c.findKey(s, d);
      (!h || s[h] === void 0 || u === !0 || u === void 0 && s[h] !== !1) && (s[h || p] = I(a));
    }
    const i = (a, p) => c.forEach(a, (u, d) => o(u, d, p));
    return c.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : c.isString(t) && (t = t.trim()) && !Xt(t) ? i(Kt(t), n) : t != null && o(n, t, r), this;
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
      return !!(r && this[r] !== void 0 && (!n || ee(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = D(i), i) {
        const a = c.findKey(r, i);
        a && (!n || ee(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return c.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ee(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return c.forEach(this, (s, o) => {
      const i = c.findKey(r, o);
      if (i) {
        n[i] = I(s), delete n[o];
        return;
      }
      const a = t ? Qt(o) : String(o).trim();
      a !== o && delete n[o], n[a] = I(s), r[a] = !0;
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
    function o(i) {
      const a = D(i);
      r[a] || (Yt(s, i), r[a] = !0);
    }
    return c.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Q.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.freezeMethods(Q.prototype);
c.freezeMethods(Q);
const P = Q;
function te(e, t) {
  const n = this || ue, r = t || n, s = P.from(r.headers);
  let o = r.data;
  return c.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function qe(e) {
  return !!(e && e.__CANCEL__);
}
function $(e, t, n) {
  g.call(this, e ?? "canceled", g.ERR_CANCELED, t, n), this.name = "CanceledError";
}
c.inherits($, g, {
  __CANCEL__: !0
});
function Zt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new g(
    "Request failed with status code " + n.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const en = T.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, o, i, a) {
        const p = [];
        p.push(n + "=" + encodeURIComponent(r)), c.isNumber(s) && p.push("expires=" + new Date(s).toGMTString()), c.isString(o) && p.push("path=" + o), c.isString(i) && p.push("domain=" + i), a === !0 && p.push("secure"), document.cookie = p.join("; ");
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
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
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
    return r = s(window.location.href), function(i) {
      const a = c.isString(i) ? s(i) : i;
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
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const u = Date.now(), d = r[o];
    i || (i = u), n[s] = p, r[s] = u;
    let h = o, b = 0;
    for (; h !== s; )
      b += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const y = d && u - d;
    return y ? Math.round(b * 1e3 / y) : void 0;
  };
}
function Re(e, t) {
  let n = 0;
  const r = on(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, a = o - n, p = r(a), u = o <= i;
    n = o;
    const d = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: a,
      rate: p || void 0,
      estimated: p && i && u ? (i - o) / p : void 0,
      event: s
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const an = typeof XMLHttpRequest < "u", cn = an && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = P.from(e.headers).normalize(), i = e.responseType;
    let a;
    function p() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    c.isFormData(s) && (T.isStandardBrowserEnv || T.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(y + ":" + m));
    }
    const d = ze(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Me(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function h() {
      if (!u)
        return;
      const y = P.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), E = {
        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: y,
        config: e,
        request: u
      };
      Zt(function(f) {
        n(f), p();
      }, function(f) {
        r(f), p();
      }, E), u = null;
    }
    if ("onloadend" in u ? u.onloadend = h : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, u.onabort = function() {
      u && (r(new g("Request aborted", g.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new g("Network Error", g.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const E = e.transitional || Ie;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new g(
        m,
        E.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        u
      )), u = null;
    }, T.isStandardBrowserEnv) {
      const y = (e.withCredentials || rn(d)) && e.xsrfCookieName && en.read(e.xsrfCookieName);
      y && o.set(e.xsrfHeaderName, y);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in u && c.forEach(o.toJSON(), function(m, E) {
      u.setRequestHeader(E, m);
    }), c.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), i && i !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Re(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Re(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (y) => {
      u && (r(!y || y.type ? new $(null, e, u) : y), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const b = sn(d);
    if (b && T.protocols.indexOf(b) === -1) {
      r(new g("Unsupported protocol " + b + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(s || null);
  });
}, H = {
  http: Ut,
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
const un = {
  getAdapter: (e) => {
    e = c.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let s = 0; s < t && (n = e[s], !(r = c.isString(n) ? H[n.toLowerCase()] : n)); s++)
      ;
    if (!r)
      throw r === !1 ? new g(
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
function ne(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new $(null, e);
}
function Se(e) {
  return ne(e), e.headers = P.from(e.headers), e.data = te.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), un.getAdapter(e.adapter || ue.adapter)(e).then(function(r) {
    return ne(e), r.data = te.call(
      e,
      e.transformResponse,
      r
    ), r.headers = P.from(r.headers), r;
  }, function(r) {
    return qe(r) || (ne(e), r && r.response && (r.response.data = te.call(
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
  function o(u, d) {
    if (!c.isUndefined(d))
      return r(void 0, d);
  }
  function i(u, d) {
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
    url: o,
    method: o,
    data: o,
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
    validateStatus: a,
    headers: (u, d) => s(Ae(u), Ae(d), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const h = p[d] || s, b = h(e[d], t[d], d);
    c.isUndefined(b) && h !== a || (n[d] = b);
  }), n;
}
const ve = "1.4.0", le = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  le[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Oe = {};
le.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + ve + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new g(
        s(i, " has been removed" + (n ? " in " + n : "")),
        g.ERR_DEPRECATED
      );
    return n && !Oe[i] && (Oe[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
function ln(e, t, n) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const a = e[o], p = a === void 0 || i(a, o, e);
      if (p !== !0)
        throw new g("option " + o + " must be " + p, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new g("Unknown option " + o, g.ERR_BAD_OPTION);
  }
}
const oe = {
  assertOptions: ln,
  validators: le
}, C = oe.validators;
class J {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ge(),
      response: new ge()
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
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && oe.assertOptions(r, {
      silentJSONParsing: C.transitional(C.boolean),
      forcedJSONParsing: C.transitional(C.boolean),
      clarifyTimeoutError: C.transitional(C.boolean)
    }, !1), s != null && (c.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : oe.assertOptions(s, {
      encode: C.function,
      serialize: C.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = o && c.merge(
      o.common,
      o[n.method]
    ), i && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete o[m];
      }
    ), n.headers = P.concat(i, o);
    const a = [];
    let p = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(n) === !1 || (p = p && E.synchronous, a.unshift(E.fulfilled, E.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(E) {
      u.push(E.fulfilled, E.rejected);
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
      const m = a[h++], E = a[h++];
      try {
        y = m(y);
      } catch (l) {
        E.call(this, l);
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
    return function(o, i, a) {
      return this.request(U(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
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
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, a) {
      r.reason || (r.reason = new $(o, i, a), n(r.reason));
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
const fn = fe;
function dn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function pn(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const ie = {
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
Object.entries(ie).forEach(([e, t]) => {
  ie[t] = e;
});
const mn = ie;
function Je(e) {
  const t = new q(e), n = Pe(q.prototype.request, t);
  return c.extend(n, q.prototype, t, { allOwnKeys: !0 }), c.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Je(U(e, s));
  }, n;
}
const R = Je(ue);
R.Axios = q;
R.CanceledError = $;
R.CancelToken = fn;
R.isCancel = qe;
R.VERSION = ve;
R.toFormData = G;
R.AxiosError = g;
R.Cancel = R.CanceledError;
R.all = function(t) {
  return Promise.all(t);
};
R.spread = dn;
R.isAxiosError = pn;
R.mergeConfig = U;
R.AxiosHeaders = P;
R.formToJSON = (e) => He(c.isHTMLForm(e) ? new FormData(e) : e);
R.HttpStatusCode = mn;
R.default = R;
const z = R, hn = {
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
function Rn({
  instance: e = z,
  beforeRequest: t,
  beforeResponse: n,
  responseHandler: r,
  errorHandler: s,
  errorResponse: o,
  excludePeddings: i = []
} = {}) {
  let a = e;
  a || (a = z, a.defaults.timeout = 1e4, a.defaults.withCredentials = !0, a.defaults.headers = {
    // 设置默认请求头
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=UTF-8"
  });
  const p = (l, f) => {
    s ? s(l, f) : hn.error(l);
  }, u = [], d = z.CancelToken, h = (l) => {
    const { url: f, method: w, cancelable: S = !0 } = l, A = `${f}&${w}`;
    for (const N in u)
      u[N].url === A && !i.includes(A) && S && (u[N].fn(), u.splice(N, 1));
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
      return [0, 1001].includes(w) ? f : (f && o(f, S), p(l.message, f));
    },
    async (l) => {
      if (l.code === "ERR_CANCELED")
        return "";
      if (l && l.response) {
        const { data: f, status: w, config: S } = l.response;
        if (w && o) {
          const [A] = (f == null ? void 0 : f.errors) || [];
          await o(A ?? f, S);
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
  const b = (l, f = !1) => f ? l : l ? l.data ?? !0 : !1, y = async (l, f, w = {}, S = "get", A = !1) => {
    try {
      const N = {};
      if (f) {
        const de = (L) => /\[|\]/g.test(L);
        Object.keys(f).forEach((L) => {
          N[L] = f[L] && de ? [...f[L].toString()].map((Y) => de(Y) ? encodeURIComponent(Y) : Y).join("") : f[L];
        });
      }
      const Ve = ["post", "put"].includes(S) ? await a({
        method: S,
        url: l,
        data: f,
        ...w
      }) : await a[S](l, { params: N, ...w });
      return b(Ve, A);
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
function yn() {
  const e = v(), t = (i = "$message") => {
    const { globalProperties: a } = e.appContext.config;
    return a[i];
  }, n = (i, a, p) => {
    var u, d;
    (u = t()) == null || u.closeAll(), (d = t()) == null || d({ message: i, type: a, ...p });
  };
  return {
    message: {
      error: (i, a) => n(i, "error", a),
      success: (i, a) => n(i, "success", a),
      warning: (i, a) => n(i, "warning", a),
      info: (i, a) => n(i, "info", a),
      close: () => {
        var i;
        return (i = t()) == null ? void 0 : i.closeAll();
      }
    },
    messageBox: {
      confirm: ({
        msg: i,
        title: a = "提示",
        type: p = "warning",
        ...u
      }) => new Promise((d, h) => {
        var b;
        parent.window.postMessage("openMask()", "*"), window.top.postMessage("openMask()", "*"), (b = t("$messageBox")) == null || b.confirm(i, a, {
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
        msg: i,
        title: a = "提示",
        type: p = "warning",
        ...u
      }, d) => {
        var h, b;
        (h = t("$messageBox")) == null || h.close(), (b = t("$messageBox")) == null || b.alert(i, a, {
          confirmButtonText: "确认",
          type: p,
          ...u,
          callback: (y) => d(y)
        });
      }
    },
    closeMessageBox: () => {
      var i;
      return (i = t("$messageBox")) == null ? void 0 : i.close();
    }
  };
}
function Sn() {
  const e = F(null);
  return { ruleFormRef: e, submitForm: (r = e) => {
    const s = r.value || r;
    return s ? new Promise((o) => {
      s.validate((i) => {
        o(i);
      });
    }) : !1;
  }, resetForm: (r = e) => {
    (r.value || r).resetFields();
  } };
}
function An() {
  const e = F(1), t = F(1), n = F(1), r = F([]), s = F(!0), o = F(!1);
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
        content: E,
        total: l,
        size: f
      } = p || {}, w = E ?? d;
      r.value = u ? [...r.value, ...w] : w, s.value = !1, e.value = l ?? h, t.value = m, n.value = f ?? y ?? b, o.value = !r.value.length;
    },
    isNullData: o
  };
}
function On() {
  const e = (o, i) => {
    if (o) {
      let a = o;
      return typeof o == "string" && (a = Number(o)), a.toFixed(2);
    }
    return i ? 0 : "0.00";
  };
  return {
    moneyType: (o) => `￥${e(o)}`,
    moneyPoint: e,
    dataType: (o) => o || 0,
    paramsType: (o) => o !== void 0 ? o : "-",
    rounding: (o, i = 2) => Number(o.toFixed(i))
  };
}
const Tn = {
  mounted: (e, t) => {
    const { activeName: n, className: r, defaultIndex: s } = t.value || {};
    r && s ? document.querySelectorAll(`.${r}`)[s].classList.add(n) : document.querySelector(`.${n}`) || e.classList.add(n), e.handler = function() {
      const o = document.querySelector(`.${n}`);
      o && o.classList.remove(n), e.classList.add(n);
    }, e.addEventListener("click", e.handler);
  },
  unmounted: (e) => {
    e.removeEventListener("click", e.handler);
  }
};
function wn() {
  return { getImageUrl: (t, n = "images", r = v()) => {
    var a;
    const s = (a = r.type.__file.split("src")) == null ? void 0 : a[1], o = `${window.location.origin}/src${s}`, i = /^(\.{1,2}\/)/.test(n) ? n : `../../assets/${n}`;
    return new URL(`${i}/${t}`, o).href;
  } };
}
const Te = (e, t, n) => {
  const { getImageUrl: r } = wn(), { floder: s, name: o } = t.value || {}, i = r(o, s, n == null ? void 0 : n.ctx);
  e.setAttribute("src", i);
}, xn = {
  mounted: (e, t, n) => Te(e, t, n),
  updated: (e, t, n) => Te(e, t, n)
}, xe = (e, t) => {
  const { money: n, number: r } = t.modifiers;
  n ? e.innerHTML = `￥${Number(t.value).toFixed(2)}` : e.innerHTML = t.value || (r ? 0 : "-");
}, Pn = {
  mounted: (e, t) => xe(e, t),
  updated: (e, t) => xe(e, t)
};
function En() {
  return { getFormatParams: (r, s = 0) => r ?? s, formatRadixPoint: (r, s = 2) => {
    var i;
    const o = new RegExp(`^\\d+(\\.\\d{0,${s}})?`, "g");
    return r.indexOf(".") > 0 ? (i = r.match(o)) == null ? void 0 : i[0] : /(^0\d+)/.test(r) ? r.substr(1) : r;
  }, setUrlParams: (r = {}) => {
    let s = "";
    return Object.keys(r).forEach((o) => {
      r[o] !== void 0 && o !== "pageSize" && (s += `&${o}=${r[o]}`);
    }), s.replace(/^&/, "?");
  } };
}
function Nn() {
  const { setUrlParams: e } = En();
  return { setUrlParams: e, isExportEmpty: (r) => {
    const { message: s } = yn();
    return r ? (s.warning("当前无数据可导出"), !0) : !1;
  }, downloadFile: async (r, s) => {
    const o = /\.xlsx$/.test(s) ? s : `${s}.xlsx`, i = await z.get(r, { responseType: "blob" }), a = document.createElement("a");
    function p(u, d) {
      const h = new FileReader();
      h.readAsDataURL(u), h.onload = function(b) {
        d(b.target.result);
      };
    }
    if (typeof dfAndroidAppHD < "u") {
      const u = new Blob([i.data], { type: "application/vnd.ms-excel" });
      p(u, (d) => {
        window.webkit && window.webkit.messageHandlers.openDocument && window.webkit.messageHandlers.openDocument.postMessage(`${o};${d}`), typeof dfAndroidAppHD < "u" && dfAndroidAppHD.openDocument(`${o};${d}`);
      });
    } else
      a.href = URL.createObjectURL(i.data), a.download = `${o}`, a.click(), document.body.appendChild(a);
  } };
}
export {
  xn as VImageUrl,
  Pn as VParams,
  bn as useCommon,
  Nn as useExport,
  On as useFilters,
  Sn as useForm,
  wn as useImage,
  yn as useMessage,
  An as usePage,
  Rn as useRequest,
  En as useUtils,
  Tn as vOnClickActive
};
