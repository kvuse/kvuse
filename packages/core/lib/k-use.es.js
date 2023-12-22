import { getCurrentInstance as z, reactive as Ge, watchEffect as pe, computed as $, toRefs as me, nextTick as Qe, ref as F, watch as Ze, onMounted as Ye, onUnmounted as et } from "vue";
function An() {
  const e = z(), { globalProperties: t } = e ? e.appContext.config : {}, {
    $route: n,
    $pinia: r,
    $store: o,
    $router: i
  } = t, s = i, a = n, m = Ge({
    routeRef: n
  });
  pe(() => {
    const { $route: l } = t;
    m.routeRef = l;
  });
  const p = $(() => m.routeRef.name), d = $(() => m.routeRef.query), u = $(() => m.routeRef.params), E = (l, f) => {
    f ? s.push({ path: l, ...f }) : l.includes("/") ? s.push(l) : s.push({ name: l });
  }, b = (l, f) => {
    f ? s.replace({ path: l, ...f }) : l.includes("/") ? s.replace(l) : s.replace({ name: l });
  }, h = $(() => !1), y = (l) => e.proxy[l];
  return {
    ...me(m),
    route: a,
    router: s,
    routeQuery: d,
    routeParams: u,
    routerName: p,
    loadPage: E,
    isDev: h,
    replacePage: b,
    globalProperties: t,
    resetParams: y,
    store: o,
    pinia: r,
    nextTick: Qe,
    ref: F,
    watch: Ze,
    onMounted: Ye,
    onUnmounted: et,
    watchEffect: pe,
    getCurrentInstance: z,
    toRefs: me
  };
}
function Ne(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: tt } = Object.prototype, { getPrototypeOf: ie } = Object, J = /* @__PURE__ */ ((e) => (t) => {
  const n = tt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), x = (e) => (e = e.toLowerCase(), (t) => J(t) === e), V = (e) => (t) => typeof t === e, { isArray: B } = Array, _ = V("undefined");
function nt(e) {
  return e !== null && !_(e) && e.constructor !== null && !_(e.constructor) && A(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ce = x("ArrayBuffer");
function rt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ce(e.buffer), t;
}
const st = V("string"), A = V("function"), Fe = V("number"), W = (e) => e !== null && typeof e == "object", ot = (e) => e === !0 || e === !1, M = (e) => {
  if (J(e) !== "object")
    return !1;
  const t = ie(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, it = x("Date"), at = x("File"), ct = x("Blob"), ut = x("FileList"), lt = (e) => W(e) && A(e.pipe), ft = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || A(e.append) && ((t = J(e)) === "formdata" || // detect form-data instance
  t === "object" && A(e.toString) && e.toString() === "[object FormData]"));
}, dt = x("URLSearchParams"), pt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function k(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), B(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function Le(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Ue = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Be = (e) => !_(e) && e !== Ue;
function te() {
  const { caseless: e } = Be(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && Le(t, o) || o;
    M(t[i]) && M(r) ? t[i] = te(t[i], r) : M(r) ? t[i] = te({}, r) : B(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && k(arguments[r], n);
  return t;
}
const mt = (e, t, n, { allOwnKeys: r } = {}) => (k(t, (o, i) => {
  n && A(o) ? e[i] = Ne(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), ht = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), yt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, wt = (e, t, n, r) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && ie(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, gt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Et = (e) => {
  if (!e)
    return null;
  if (B(e))
    return e;
  let t = e.length;
  if (!Fe(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, bt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ie(Uint8Array)), Rt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, St = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ot = x("HTMLFormElement"), At = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), he = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Tt = x("RegExp"), De = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  k(n, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, xt = (e) => {
  De(e, (t, n) => {
    if (A(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (A(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Pt = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return B(e) ? r(e) : r(String(e).split(t)), n;
}, Nt = () => {
}, Ct = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Q = "abcdefghijklmnopqrstuvwxyz", ye = "0123456789", _e = {
  DIGIT: ye,
  ALPHA: Q,
  ALPHA_DIGIT: Q + Q.toUpperCase() + ye
}, Ft = (e = 16, t = _e.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Lt(e) {
  return !!(e && A(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ut = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (W(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = B(r) ? [] : {};
        return k(r, (s, a) => {
          const m = n(s, o + 1);
          !_(m) && (i[a] = m);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, Bt = x("AsyncFunction"), Dt = (e) => e && (W(e) || A(e)) && A(e.then) && A(e.catch), c = {
  isArray: B,
  isArrayBuffer: Ce,
  isBuffer: nt,
  isFormData: ft,
  isArrayBufferView: rt,
  isString: st,
  isNumber: Fe,
  isBoolean: ot,
  isObject: W,
  isPlainObject: M,
  isUndefined: _,
  isDate: it,
  isFile: at,
  isBlob: ct,
  isRegExp: Tt,
  isFunction: A,
  isStream: lt,
  isURLSearchParams: dt,
  isTypedArray: bt,
  isFileList: ut,
  forEach: k,
  merge: te,
  extend: mt,
  trim: pt,
  stripBOM: ht,
  inherits: yt,
  toFlatObject: wt,
  kindOf: J,
  kindOfTest: x,
  endsWith: gt,
  toArray: Et,
  forEachEntry: Rt,
  matchAll: St,
  isHTMLForm: Ot,
  hasOwnProperty: he,
  hasOwnProp: he,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: De,
  freezeMethods: xt,
  toObjectSet: Pt,
  toCamelCase: At,
  noop: Nt,
  toFiniteNumber: Ct,
  findKey: Le,
  global: Ue,
  isContextDefined: Be,
  ALPHABET: _e,
  generateString: Ft,
  isSpecCompliantForm: Lt,
  toJSONObject: Ut,
  isAsyncFn: Bt,
  isThenable: Dt
};
function g(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
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
const ke = g.prototype, je = {};
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
  je[e] = { value: e };
});
Object.defineProperties(g, je);
Object.defineProperty(ke, "isAxiosError", { value: !0 });
g.from = (e, t, n, r, o, i) => {
  const s = Object.create(ke);
  return c.toFlatObject(e, s, function(m) {
    return m !== Error.prototype;
  }, (a) => a !== "isAxiosError"), g.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const _t = null;
function ne(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function $e(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function we(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = $e(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function kt(e) {
  return c.isArray(e) && !e.some(ne);
}
const jt = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function K(e, t, n) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = c.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, l) {
    return !c.isUndefined(l[y]);
  });
  const r = n.metaTokens, o = n.visitor || d, i = n.dots, s = n.indexes, m = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(o))
    throw new TypeError("visitor must be a function");
  function p(h) {
    if (h === null)
      return "";
    if (c.isDate(h))
      return h.toISOString();
    if (!m && c.isBlob(h))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(h) || c.isTypedArray(h) ? m && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function d(h, y, l) {
    let f = h;
    if (h && !l && typeof h == "object") {
      if (c.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), h = JSON.stringify(h);
      else if (c.isArray(h) && kt(h) || (c.isFileList(h) || c.endsWith(y, "[]")) && (f = c.toArray(h)))
        return y = $e(y), f.forEach(function(S, O) {
          !(c.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? we([y], O, i) : s === null ? y : y + "[]",
            p(S)
          );
        }), !1;
    }
    return ne(h) ? !0 : (t.append(we(l, y, i), p(h)), !1);
  }
  const u = [], E = Object.assign(jt, {
    defaultVisitor: d,
    convertValue: p,
    isVisitable: ne
  });
  function b(h, y) {
    if (!c.isUndefined(h)) {
      if (u.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      u.push(h), c.forEach(h, function(f, w) {
        (!(c.isUndefined(f) || f === null) && o.call(
          t,
          f,
          c.isString(w) ? w.trim() : w,
          y,
          E
        )) === !0 && b(f, y ? y.concat(w) : [w]);
      }), u.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
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
  this._pairs = [], e && K(e, this, t);
}
const Me = ae.prototype;
Me.append = function(t, n) {
  this._pairs.push([t, n]);
};
Me.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ge);
  } : ge;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function $t(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ie(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || $t, o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = c.isURLSearchParams(t) ? t.toString() : new ae(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Mt {
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
const Ee = Mt, He = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, It = typeof URLSearchParams < "u" ? URLSearchParams : ae, Ht = typeof FormData < "u" ? FormData : null, qt = typeof Blob < "u" ? Blob : null, zt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: It,
    FormData: Ht,
    Blob: qt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, qe = typeof window < "u" && typeof document < "u", vt = ((e) => qe && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Jt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: qe,
  hasStandardBrowserEnv: vt,
  hasStandardBrowserWebWorkerEnv: Jt
}, Symbol.toStringTag, { value: "Module" })), T = {
  ...Vt,
  ...zt
};
function Wt(e, t) {
  return K(e, new T.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return T.isNode && c.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Kt(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Xt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function ze(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    const a = Number.isFinite(+s), m = i >= n.length;
    return s = !s && c.isArray(o) ? o.length : s, m ? (c.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !c.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && c.isArray(o[s]) && (o[s] = Xt(o[s])), !a);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const n = {};
    return c.forEachEntry(e, (r, o) => {
      t(Kt(r), o, n, 0);
    }), n;
  }
  return null;
}
function Gt(e, t, n) {
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
  transitional: He,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = c.isObject(t);
    if (i && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return o && o ? JSON.stringify(ze(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Wt(t, this.formSerializer).toString();
      if ((a = c.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const m = this.env && this.env.FormData;
        return K(
          a ? { "files[]": t } : t,
          m && new m(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), Gt(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ce.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && c.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
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
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ce.headers[e] = {};
});
const ue = ce, Qt = c.toObjectSet([
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
]), Zt = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && Qt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, be = Symbol("internals");
function D(e) {
  return e && String(e).trim().toLowerCase();
}
function I(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(I) : String(e);
}
function Yt(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const en = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Z(e, t, n, r, o) {
  if (c.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!c.isString(t)) {
    if (c.isString(r))
      return t.indexOf(r) !== -1;
    if (c.isRegExp(r))
      return r.test(t);
  }
}
function tn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function nn(e, t) {
  const n = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, t, o, i, s);
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
    const o = this;
    function i(a, m, p) {
      const d = D(m);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const u = c.findKey(o, d);
      (!u || o[u] === void 0 || p === !0 || p === void 0 && o[u] !== !1) && (o[u || m] = I(a));
    }
    const s = (a, m) => c.forEach(a, (p, d) => i(p, d, m));
    return c.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : c.isString(t) && (t = t.trim()) && !en(t) ? s(Zt(t), n) : t != null && i(n, t, r), this;
  }
  get(t, n) {
    if (t = D(t), t) {
      const r = c.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Yt(o);
        if (c.isFunction(n))
          return n.call(this, o, r);
        if (c.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = D(t), t) {
      const r = c.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Z(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = D(s), s) {
        const a = c.findKey(r, s);
        a && (!n || Z(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return c.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Z(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return c.forEach(this, (o, i) => {
      const s = c.findKey(r, i);
      if (s) {
        n[s] = I(o), delete n[i];
        return;
      }
      const a = t ? tn(i) : String(i).trim();
      a !== i && delete n[i], n[a] = I(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && c.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[be] = this[be] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = D(s);
      r[a] || (nn(o, s), r[a] = !0);
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
function Y(e, t) {
  const n = this || ue, r = t || n, o = P.from(r.headers);
  let i = r.data;
  return c.forEach(e, function(a) {
    i = a.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function ve(e) {
  return !!(e && e.__CANCEL__);
}
function j(e, t, n) {
  g.call(this, e ?? "canceled", g.ERR_CANCELED, t, n), this.name = "CanceledError";
}
c.inherits(j, g, {
  __CANCEL__: !0
});
function rn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new g(
    "Request failed with status code " + n.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const sn = T.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, i) {
      const s = [e + "=" + encodeURIComponent(t)];
      c.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), c.isString(r) && s.push("path=" + r), c.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function on(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function an(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Je(e, t) {
  return e && !on(t) ? an(e, t) : t;
}
const cn = T.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(i) {
      let s = i;
      return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
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
    return r = o(window.location.href), function(s) {
      const a = c.isString(s) ? o(s) : s;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function un(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ln(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(m) {
    const p = Date.now(), d = r[i];
    s || (s = p), n[o] = m, r[o] = p;
    let u = i, E = 0;
    for (; u !== o; )
      E += n[u++], u = u % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), p - s < t)
      return;
    const b = d && p - d;
    return b ? Math.round(E * 1e3 / b) : void 0;
  };
}
function Re(e, t) {
  let n = 0;
  const r = ln(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, a = i - n, m = r(a), p = i <= s;
    n = i;
    const d = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: m || void 0,
      estimated: m && s && p ? (s - i) / m : void 0,
      event: o
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const fn = typeof XMLHttpRequest < "u", dn = fn && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const i = P.from(e.headers).normalize();
    let { responseType: s, withXSRFToken: a } = e, m;
    function p() {
      e.cancelToken && e.cancelToken.unsubscribe(m), e.signal && e.signal.removeEventListener("abort", m);
    }
    let d;
    if (c.isFormData(o)) {
      if (T.hasStandardBrowserEnv || T.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((d = i.getContentType()) !== !1) {
        const [y, ...l] = d ? d.split(";").map((f) => f.trim()).filter(Boolean) : [];
        i.setContentType([y || "multipart/form-data", ...l].join("; "));
      }
    }
    let u = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", l = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(y + ":" + l));
    }
    const E = Je(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Ie(E, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function b() {
      if (!u)
        return;
      const y = P.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), f = {
        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: y,
        config: e,
        request: u
      };
      rn(function(S) {
        n(S), p();
      }, function(S) {
        r(S), p();
      }, f), u = null;
    }
    if ("onloadend" in u ? u.onloadend = b : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, u.onabort = function() {
      u && (r(new g("Request aborted", g.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new g("Network Error", g.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let l = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const f = e.transitional || He;
      e.timeoutErrorMessage && (l = e.timeoutErrorMessage), r(new g(
        l,
        f.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        u
      )), u = null;
    }, T.hasStandardBrowserEnv && (a && c.isFunction(a) && (a = a(e)), a || a !== !1 && cn(E))) {
      const y = e.xsrfHeaderName && e.xsrfCookieName && sn.read(e.xsrfCookieName);
      y && i.set(e.xsrfHeaderName, y);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in u && c.forEach(i.toJSON(), function(l, f) {
      u.setRequestHeader(f, l);
    }), c.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), s && s !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Re(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Re(e.onUploadProgress)), (e.cancelToken || e.signal) && (m = (y) => {
      u && (r(!y || y.type ? new j(null, e, u) : y), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(m), e.signal && (e.signal.aborted ? m() : e.signal.addEventListener("abort", m)));
    const h = un(E);
    if (h && T.protocols.indexOf(h) === -1) {
      r(new g("Unsupported protocol " + h + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, re = {
  http: _t,
  xhr: dn
};
c.forEach(re, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Se = (e) => `- ${e}`, pn = (e) => c.isFunction(e) || e === null || e === !1, Ve = {
  getAdapter: (e) => {
    e = c.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let s;
      if (r = n, !pn(n) && (r = re[(s = String(n)).toLowerCase()], r === void 0))
        throw new g(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, m]) => `adapter ${a} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(Se).join(`
`) : " " + Se(i[0]) : "as no adapter specified";
      throw new g(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: re
};
function ee(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new j(null, e);
}
function Oe(e) {
  return ee(e), e.headers = P.from(e.headers), e.data = Y.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ve.getAdapter(e.adapter || ue.adapter)(e).then(function(r) {
    return ee(e), r.data = Y.call(
      e,
      e.transformResponse,
      r
    ), r.headers = P.from(r.headers), r;
  }, function(r) {
    return ve(r) || (ee(e), r && r.response && (r.response.data = Y.call(
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
  function r(p, d, u) {
    return c.isPlainObject(p) && c.isPlainObject(d) ? c.merge.call({ caseless: u }, p, d) : c.isPlainObject(d) ? c.merge({}, d) : c.isArray(d) ? d.slice() : d;
  }
  function o(p, d, u) {
    if (c.isUndefined(d)) {
      if (!c.isUndefined(p))
        return r(void 0, p, u);
    } else
      return r(p, d, u);
  }
  function i(p, d) {
    if (!c.isUndefined(d))
      return r(void 0, d);
  }
  function s(p, d) {
    if (c.isUndefined(d)) {
      if (!c.isUndefined(p))
        return r(void 0, p);
    } else
      return r(void 0, d);
  }
  function a(p, d, u) {
    if (u in t)
      return r(p, d);
    if (u in e)
      return r(void 0, p);
  }
  const m = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (p, d) => o(Ae(p), Ae(d), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const u = m[d] || o, E = u(e[d], t[d], d);
    c.isUndefined(E) && u !== a || (n[d] = E);
  }), n;
}
const We = "1.6.2", le = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  le[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Te = {};
le.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + We + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new g(
        o(s, " has been removed" + (n ? " in " + n : "")),
        g.ERR_DEPRECATED
      );
    return n && !Te[s] && (Te[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
function mn(e, t, n) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const a = e[i], m = a === void 0 || s(a, i, e);
      if (m !== !0)
        throw new g("option " + i + " must be " + m, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new g("Unknown option " + i, g.ERR_BAD_OPTION);
  }
}
const se = {
  assertOptions: mn,
  validators: le
}, C = se.validators;
class v {
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
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && se.assertOptions(r, {
      silentJSONParsing: C.transitional(C.boolean),
      forcedJSONParsing: C.transitional(C.boolean),
      clarifyTimeoutError: C.transitional(C.boolean)
    }, !1), o != null && (c.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : se.assertOptions(o, {
      encode: C.function,
      serialize: C.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && c.merge(
      i.common,
      i[n.method]
    );
    i && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
      }
    ), n.headers = P.concat(s, i);
    const a = [];
    let m = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (m = m && y.synchronous, a.unshift(y.fulfilled, y.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(y) {
      p.push(y.fulfilled, y.rejected);
    });
    let d, u = 0, E;
    if (!m) {
      const h = [Oe.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, p), E = h.length, d = Promise.resolve(n); u < E; )
        d = d.then(h[u++], h[u++]);
      return d;
    }
    E = a.length;
    let b = n;
    for (u = 0; u < E; ) {
      const h = a[u++], y = a[u++];
      try {
        b = h(b);
      } catch (l) {
        y.call(this, l);
        break;
      }
    }
    try {
      d = Oe.call(this, b);
    } catch (h) {
      return Promise.reject(h);
    }
    for (u = 0, E = p.length; u < E; )
      d = d.then(p[u++], p[u++]);
    return d;
  }
  getUri(t) {
    t = U(this.defaults, t);
    const n = Je(t.baseURL, t.url);
    return Ie(n, t.params, t.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(t) {
  v.prototype[t] = function(n, r) {
    return this.request(U(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, s, a) {
      return this.request(U(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  v.prototype[t] = n(), v.prototype[t + "Form"] = n(!0);
});
const H = v;
class fe {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(i);
      }, s;
    }, t(function(i, s, a) {
      r.reason || (r.reason = new j(i, s, a), n(r.reason));
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
      token: new fe(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const hn = fe;
function yn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function wn(e) {
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
const gn = oe;
function Ke(e) {
  const t = new H(e), n = Ne(H.prototype.request, t);
  return c.extend(n, H.prototype, t, { allOwnKeys: !0 }), c.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Ke(U(e, o));
  }, n;
}
const R = Ke(ue);
R.Axios = H;
R.CanceledError = j;
R.CancelToken = hn;
R.isCancel = ve;
R.VERSION = We;
R.toFormData = K;
R.AxiosError = g;
R.Cancel = R.CanceledError;
R.all = function(t) {
  return Promise.all(t);
};
R.spread = yn;
R.isAxiosError = wn;
R.mergeConfig = U;
R.AxiosHeaders = P;
R.formToJSON = (e) => ze(c.isHTMLForm(e) ? new FormData(e) : e);
R.getAdapter = Ve.getAdapter;
R.HttpStatusCode = gn;
R.default = R;
const q = R, En = {
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
function Tn({
  instance: e = q,
  beforeRequest: t,
  beforeResponse: n,
  responseHandler: r,
  errorHandler: o,
  errorResponse: i,
  excludePeddings: s = []
} = {}) {
  let a = e;
  a || (a = q, a.defaults.timeout = 1e4, a.defaults.withCredentials = !0, a.defaults.headers = {
    // 设置默认请求头
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=UTF-8"
  });
  const m = (l, f) => {
    o ? o(l, f) : En.error(l);
  }, p = [], d = q.CancelToken, u = (l) => {
    const { url: f, method: w, cancelable: S = !0 } = l, O = `${f}&${w}`;
    for (const N in p)
      p[N].url === O && !s.includes(O) && S && (p[N].fn(), p.splice(N, 1));
  };
  a.interceptors.request.use(async (l) => {
    const f = t ? await t(l) : l;
    return u(f), f.cancelToken = new d((w) => {
      p.push({ url: `${f.url}&${f.method}`, fn: w });
    }), f;
  }), a.interceptors.response.use(
    async (l) => {
      if (u(l.config), n)
        return n ? await n(l) : l;
      if (r)
        return await r(l);
      const { data: f, data: { code: w }, config: S } = l || {};
      return [0, 1001].includes(w) ? f : (f && i(f, S), m(l.message, f));
    },
    async (l) => {
      if (l.code === "ERR_CANCELED")
        return "";
      if (l && l.response) {
        const { data: f, status: w, config: S } = l.response;
        if (w && i) {
          const [O] = (f == null ? void 0 : f.errors) || [];
          await i(O ?? f, S);
        }
        if (f.errors && f.errors.length)
          l.message = f.errors[0].message || f.message;
        else {
          const O = {
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
          l.message = O[w];
        }
        m(l.message, f);
      }
      return l.message && l.message.includes("timeout of") && (l.message = "网络超时, 请检查网络！"), l.message ? Promise.reject(l) : l;
    }
  );
  const E = (l, f = !1) => f ? l : (l == null ? void 0 : l.data) ?? !1, b = async (l, f, w = {}, S = "get", O = !1) => {
    try {
      const N = {};
      if (f) {
        const de = (L) => /\[|\]/g.test(L);
        Object.keys(f).forEach((L) => {
          N[L] = f[L] && de ? [...f[L].toString()].map((G) => de(G) ? encodeURIComponent(G) : G).join("") : f[L];
        });
      }
      const Xe = ["post", "put"].includes(S) ? await a({
        method: S,
        url: l,
        data: f,
        ...w
      }) : await a[S](l, { params: N, ...w });
      return E(Xe, O);
    } catch (N) {
      if (O)
        return N;
    }
  };
  return {
    $api: {
      get: (l, f, w) => b(l, f, w, "get"),
      post: (l, f, w) => b(l, f, w, "post"),
      put: (l, f, w) => b(l, f, w, "put"),
      delete: (l, f, w) => b(l, f, w, "delete"),
      all: (l, f, w) => b(l, f, w, "all")
    },
    $http: {
      get: (l, f, w) => b(l, f, w, "get", !0),
      post: (l, f, w) => b(l, f, w, "post", !0),
      put: (l, f, w) => b(l, f, w, "put", !0),
      delete: (l, f, w) => b(l, f, w, "delete", !0),
      all: (l, f, w) => b(l, f, w, "all", !0)
    }
  };
}
function bn() {
  const e = z(), t = (s = "$message") => {
    const { globalProperties: a } = e.appContext.config;
    return a[s];
  }, n = (s, a, m) => {
    var p, d;
    (p = t()) == null || p.closeAll(), (d = t()) == null || d({ message: s, type: a, ...m });
  };
  return {
    message: {
      error: (s, a) => n(s, "error", a),
      success: (s, a) => n(s, "success", a),
      warning: (s, a) => n(s, "warning", a),
      info: (s, a) => n(s, "info", a),
      close: () => {
        var s;
        return (s = t()) == null ? void 0 : s.closeAll();
      }
    },
    messageBox: {
      confirm: ({
        msg: s,
        title: a = "提示",
        type: m = "warning",
        ...p
      }) => new Promise((d, u) => {
        var E;
        parent.window.postMessage("openMask()", "*"), window.top.postMessage("openMask()", "*"), (E = t("$messageBox")) == null || E.confirm(s, a, {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          buttonSize: "",
          type: m,
          ...p
        }).then(() => d(!0)).catch(() => u()).finally(() => {
          parent.window.postMessage("closeMask()", "*"), window.top.postMessage("closeMask()", "*");
        });
      }),
      alert: ({
        msg: s,
        title: a = "提示",
        type: m = "warning",
        ...p
      }, d) => {
        var u, E;
        (u = t("$messageBox")) == null || u.close(), (E = t("$messageBox")) == null || E.alert(s, a, {
          confirmButtonText: "确认",
          type: m,
          ...p,
          callback: (b) => d(b)
        });
      }
    },
    closeMessageBox: () => {
      var s;
      return (s = t("$messageBox")) == null ? void 0 : s.close();
    }
  };
}
function xn() {
  const e = F(null);
  return { ruleFormRef: e, submitForm: (r = e) => {
    const o = r.value || r;
    return o ? new Promise((i) => {
      o.validate((s) => {
        i(s);
      });
    }) : !1;
  }, resetForm: (r = e) => {
    (r.value || r).resetFields();
  } };
}
function Pn() {
  const e = F(1), t = F(1), n = F(1), r = F([]), o = F(!0), i = F(!1);
  return {
    totalPage: e,
    totalRecord: t,
    currentPage: n,
    listData: r,
    tableData: r,
    loading: o,
    getNowPage: (m = [], p = r.value) => (n.value > 1 && (p.length === 1 || p.length === m.length) && n.value--, n.value),
    setListAndPage: (m, p = !1) => {
      const {
        records: d = [],
        totalPage: u = 1,
        pageNo: E = 1,
        pageIndex: b,
        totalRecord: h = 1,
        content: y,
        total: l,
        size: f
      } = m || {}, w = y ?? d;
      r.value = p ? [...r.value, ...w] : w, o.value = !1, e.value = l ?? u, t.value = h, n.value = f ?? b ?? E, i.value = !r.value.length;
    },
    isNullData: i
  };
}
function Nn() {
  const e = (i, s) => {
    if (i) {
      let a = i;
      return typeof i == "string" && (a = Number(i)), a.toFixed(2);
    }
    return s ? 0 : "0.00";
  };
  return {
    moneyType: (i) => `￥${e(i)}`,
    moneyPoint: e,
    dataType: (i) => i || 0,
    paramsType: (i) => i !== void 0 ? i : "-",
    rounding: (i, s = 2) => Number(i.toFixed(s))
  };
}
const Cn = {
  mounted: (e, t) => {
    const { activeName: n, className: r, defaultIndex: o } = t.value || {};
    r && o ? document.querySelectorAll(`.${r}`)[o].classList.add(n) : document.querySelector(`.${n}`) || e.classList.add(n), e.handler = function() {
      const i = document.querySelector(`.${n}`);
      i && i.classList.remove(n), e.classList.add(n);
    }, e.addEventListener("click", e.handler);
  },
  unmounted: (e) => {
    e.removeEventListener("click", e.handler);
  }
};
function Rn() {
  return { getImageUrl: (t, n = "images", r = z()) => {
    var a;
    const o = (a = r.type.__file.split("src")) == null ? void 0 : a[1], i = `${window.location.origin}/src${o}`, s = /^(\.{1,2}\/)/.test(n) ? n : `../../assets/${n}`;
    return new URL(`${s}/${t}`, i).href;
  } };
}
const xe = (e, t, n) => {
  const { getImageUrl: r } = Rn(), { floder: o, name: i } = t.value || {}, s = r(i, o, n == null ? void 0 : n.ctx);
  e.setAttribute("src", s);
}, Fn = {
  mounted: (e, t, n) => xe(e, t, n),
  updated: (e, t, n) => xe(e, t, n)
}, Pe = (e, t) => {
  const { money: n, number: r } = t.modifiers;
  n ? e.innerHTML = `￥${Number(t.value).toFixed(2)}` : e.innerHTML = t.value || (r ? 0 : "-");
}, Ln = {
  mounted: (e, t) => Pe(e, t),
  updated: (e, t) => Pe(e, t)
};
function Sn() {
  return {
    getFormatParams: (r, o = 0) => r ?? o,
    formatRadixPoint: (r, o = 2) => {
      var s;
      const i = new RegExp(`^\\d+(\\.\\d{0,${o}})?`, "g");
      return r.indexOf(".") > 0 ? (s = r.match(i)) == null ? void 0 : s[0] : /(^0\d+)/.test(r) ? r.substr(1) : r;
    },
    setUrlParams: (r = {}, o = !1) => {
      let i = "";
      return Object.keys(r).forEach((s) => {
        ![void 0, "", null].includes(r[s]) && s !== "pageSize" && (i += `&${s}=${r[s]}`);
      }), o ? i : i.replace(/^&/, "?");
    }
  };
}
function Un() {
  const { setUrlParams: e } = Sn();
  return { setUrlParams: e, isExportEmpty: (r) => {
    const { message: o } = bn();
    return r ? (o.warning("当前无数据可导出"), !0) : !1;
  }, downloadFile: async (r, o) => {
    const i = /\.xlsx$/.test(o) ? o : `${o}.xlsx`, s = await q.get(r, { responseType: "blob" }), a = document.createElement("a");
    function m(p, d) {
      const u = new FileReader();
      u.readAsDataURL(p), u.onload = function(E) {
        d(E.target.result);
      };
    }
    if (typeof dfAndroidAppHD < "u") {
      const p = new Blob([s.data], { type: "application/vnd.ms-excel" });
      m(p, (d) => {
        window.webkit && window.webkit.messageHandlers.openDocument && window.webkit.messageHandlers.openDocument.postMessage(`${i};${d}`), typeof dfAndroidAppHD < "u" && dfAndroidAppHD.openDocument(`${i};${d}`);
      });
    } else
      a.href = URL.createObjectURL(s.data), a.download = `${i}`, a.click(), document.body.appendChild(a);
  } };
}
function Bn(e = {}, t = []) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    e[r] && !t.includes(r) && (n[r] = e[r]);
  }), n;
}
function Dn(e) {
  const t = (e ?? window.location.href).split("?")[1], n = {};
  if (t) {
    const r = t.split("&");
    for (let o = 0; o < r.length; o += 1) {
      const [i, s] = r[o].split("=");
      n[i] = s;
    }
  }
  return n;
}
export {
  Fn as VImageUrl,
  Ln as VParams,
  An as useCommon,
  Un as useExport,
  Nn as useFilters,
  xn as useForm,
  Bn as useFormatParams,
  Rn as useImage,
  bn as useMessage,
  Pn as usePage,
  Tn as useRequest,
  Dn as useUrlSearchParams,
  Sn as useUtils,
  Cn as vOnClickActive
};
