import { getCurrentInstance as z, reactive as We, watchEffect as pe, computed as I, toRefs as he, nextTick as Ke, ref as F, watch as Ge, onMounted as Xe, onUnmounted as Qe } from "vue";
function yn() {
  const e = z(), { globalProperties: t } = e ? e.appContext.config : {}, {
    $route: n,
    $pinia: r,
    $store: s,
    $router: o
  } = t, i = o, c = n, d = We({
    routeRef: n
  });
  pe(() => {
    const { $route: l } = t;
    d.routeRef = l;
  });
  const u = I(() => d.routeRef.name), p = I(() => d.routeRef.query), m = I(() => d.routeRef.params), b = (l, f) => {
    f ? i.push({ path: l, ...f }) : l.includes("/") ? i.push(l) : i.push({ name: l });
  }, y = (l, f) => {
    f ? i.replace({ path: l, ...f }) : l.includes("/") ? i.replace(l) : i.replace({ name: l });
  }, h = I(() => !1), w = (l) => e.proxy[l];
  return {
    ...he(d),
    route: c,
    router: i,
    routeQuery: p,
    routeParams: m,
    routerName: u,
    loadPage: b,
    isDev: h,
    replacePage: y,
    globalProperties: t,
    resetParams: w,
    store: s,
    pinia: r,
    nextTick: Ke,
    ref: F,
    watch: Ge,
    onMounted: Xe,
    onUnmounted: Qe,
    watchEffect: pe,
    getCurrentInstance: z,
    toRefs: he
  };
}
function xe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ye } = Object.prototype, { getPrototypeOf: ie } = Object, J = ((e) => (t) => {
  const n = Ye.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), x = (e) => (e = e.toLowerCase(), (t) => J(t) === e), V = (e) => (t) => typeof t === e, { isArray: _ } = Array, D = V("undefined");
function Ze(e) {
  return e !== null && !D(e) && e.constructor !== null && !D(e.constructor) && P(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ne = x("ArrayBuffer");
function et(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ne(e.buffer), t;
}
const tt = V("string"), P = V("function"), Ce = V("number"), ae = (e) => e !== null && typeof e == "object", nt = (e) => e === !0 || e === !1, M = (e) => {
  if (J(e) !== "object")
    return !1;
  const t = ie(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, rt = x("Date"), st = x("File"), ot = x("Blob"), it = x("FileList"), at = (e) => ae(e) && P(e.pipe), ct = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || P(e.append) && ((t = J(e)) === "formdata" || // detect form-data instance
  t === "object" && P(e.toString) && e.toString() === "[object FormData]"));
}, ut = x("URLSearchParams"), lt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function k(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), _(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
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
const Le = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ue = (e) => !D(e) && e !== Le;
function ne() {
  const { caseless: e } = Ue(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Fe(t, s) || s;
    M(t[o]) && M(r) ? t[o] = ne(t[o], r) : M(r) ? t[o] = ne({}, r) : _(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && k(arguments[r], n);
  return t;
}
const ft = (e, t, n, { allOwnKeys: r } = {}) => (k(t, (s, o) => {
  n && P(s) ? e[o] = xe(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), dt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), pt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, ht = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && ie(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, mt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, yt = (e) => {
  if (!e)
    return null;
  if (_(e))
    return e;
  let t = e.length;
  if (!Ce(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, wt = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ie(Uint8Array)), Et = (e, t) => {
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
), me = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), St = x("RegExp"), _e = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  k(n, (s, o) => {
    t(s, o, e) !== !1 && (r[o] = s);
  }), Object.defineProperties(e, r);
}, Ot = (e) => {
  _e(e, (t, n) => {
    if (P(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (P(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, At = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return _(e) ? r(e) : r(String(e).split(t)), n;
}, Tt = () => {
}, Pt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Q = "abcdefghijklmnopqrstuvwxyz", ye = "0123456789", Be = {
  DIGIT: ye,
  ALPHA: Q,
  ALPHA_DIGIT: Q + Q.toUpperCase() + ye
}, xt = (e = 16, t = Be.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Nt(e) {
  return !!(e && P(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ct = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (ae(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = _(r) ? [] : {};
        return k(r, (i, c) => {
          const d = n(i, s + 1);
          !D(d) && (o[c] = d);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, a = {
  isArray: _,
  isArrayBuffer: Ne,
  isBuffer: Ze,
  isFormData: ct,
  isArrayBufferView: et,
  isString: tt,
  isNumber: Ce,
  isBoolean: nt,
  isObject: ae,
  isPlainObject: M,
  isUndefined: D,
  isDate: rt,
  isFile: st,
  isBlob: ot,
  isRegExp: St,
  isFunction: P,
  isStream: at,
  isURLSearchParams: ut,
  isTypedArray: wt,
  isFileList: it,
  forEach: k,
  merge: ne,
  extend: ft,
  trim: lt,
  stripBOM: dt,
  inherits: pt,
  toFlatObject: ht,
  kindOf: J,
  kindOfTest: x,
  endsWith: mt,
  toArray: yt,
  forEachEntry: Et,
  matchAll: gt,
  isHTMLForm: bt,
  hasOwnProperty: me,
  hasOwnProp: me,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: _e,
  freezeMethods: Ot,
  toObjectSet: At,
  toCamelCase: Rt,
  noop: Tt,
  toFiniteNumber: Pt,
  findKey: Fe,
  global: Le,
  isContextDefined: Ue,
  ALPHABET: Be,
  generateString: xt,
  isSpecCompliantForm: Nt,
  toJSONObject: Ct
};
function g(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(g, Error, {
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
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const De = g.prototype, ke = {};
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
Object.defineProperty(De, "isAxiosError", { value: !0 });
g.from = (e, t, n, r, s, o) => {
  const i = Object.create(De);
  return a.toFlatObject(e, i, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), g.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Ft = null;
function re(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function je(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function we(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = je(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Lt(e) {
  return a.isArray(e) && !e.some(re);
}
const Ut = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function W(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, l) {
    return !a.isUndefined(l[w]);
  });
  const r = n.metaTokens, s = n.visitor || p, o = n.dots, i = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null)
      return "";
    if (a.isDate(h))
      return h.toISOString();
    if (!d && a.isBlob(h))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(h) || a.isTypedArray(h) ? d && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function p(h, w, l) {
    let f = h;
    if (h && !l && typeof h == "object") {
      if (a.endsWith(w, "{}"))
        w = r ? w : w.slice(0, -2), h = JSON.stringify(h);
      else if (a.isArray(h) && Lt(h) || (a.isFileList(h) || a.endsWith(w, "[]")) && (f = a.toArray(h)))
        return w = je(w), f.forEach(function(S, O) {
          !(a.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? we([w], O, o) : i === null ? w : w + "[]",
            u(S)
          );
        }), !1;
    }
    return re(h) ? !0 : (t.append(we(l, w, o), u(h)), !1);
  }
  const m = [], b = Object.assign(Ut, {
    defaultVisitor: p,
    convertValue: u,
    isVisitable: re
  });
  function y(h, w) {
    if (!a.isUndefined(h)) {
      if (m.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      m.push(h), a.forEach(h, function(f, E) {
        (!(a.isUndefined(f) || f === null) && s.call(
          t,
          f,
          a.isString(E) ? E.trim() : E,
          w,
          b
        )) === !0 && y(f, w ? w.concat(E) : [E]);
      }), m.pop();
    }
  }
  if (!a.isObject(e))
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
  this._pairs = [], e && W(e, this, t);
}
const Ie = ce.prototype;
Ie.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ie.toString = function(t) {
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
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new ce(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Bt {
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
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ge = Bt, $e = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Dt = typeof URLSearchParams < "u" ? URLSearchParams : ce, kt = typeof FormData < "u" ? FormData : null, jt = typeof Blob < "u" ? Blob : null, It = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Mt = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), A = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Dt,
    FormData: kt,
    Blob: jt
  },
  isStandardBrowserEnv: It,
  isStandardBrowserWebWorkerEnv: Mt,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function $t(e, t) {
  return W(e, new A.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return A.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ht(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function qt(e) {
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
    const c = Number.isFinite(+i), d = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, d ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = qt(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(Ht(r), s, n, 0);
    }), n;
  }
  return null;
}
const zt = {
  "Content-Type": void 0
};
function vt(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const K = {
  transitional: $e,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s && s ? JSON.stringify(He(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return $t(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return W(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), vt(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || K.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? g.from(c, g.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
    FormData: A.classes.FormData,
    Blob: A.classes.Blob
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
a.forEach(["delete", "get", "head"], function(t) {
  K.headers[t] = {};
});
a.forEach(["post", "put", "patch"], function(t) {
  K.headers[t] = a.merge(zt);
});
const ue = K, Jt = a.toObjectSet([
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
]), Vt = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Jt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, be = Symbol("internals");
function B(e) {
  return e && String(e).trim().toLowerCase();
}
function $(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map($) : String(e);
}
function Wt(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Kt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Y(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Gt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Xt(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class G {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, d, u) {
      const p = B(d);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const m = a.findKey(s, p);
      (!m || s[m] === void 0 || u === !0 || u === void 0 && s[m] !== !1) && (s[m || d] = $(c));
    }
    const i = (c, d) => a.forEach(c, (u, p) => o(u, p, d));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !Kt(t) ? i(Vt(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = B(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Wt(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = B(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Y(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = B(i), i) {
        const c = a.findKey(r, i);
        c && (!n || Y(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Y(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = $(s), delete n[o];
        return;
      }
      const c = t ? Gt(o) : String(o).trim();
      c !== o && delete n[o], n[c] = $(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
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
      const c = B(i);
      r[c] || (Xt(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
G.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.freezeMethods(G.prototype);
a.freezeMethods(G);
const T = G;
function Z(e, t) {
  const n = this || ue, r = t || n, s = T.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function qe(e) {
  return !!(e && e.__CANCEL__);
}
function j(e, t, n) {
  g.call(this, e ?? "canceled", g.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(j, g, {
  __CANCEL__: !0
});
function Qt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new g(
    "Request failed with status code " + n.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Yt = A.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, o, i, c) {
        const d = [];
        d.push(n + "=" + encodeURIComponent(r)), a.isNumber(s) && d.push("expires=" + new Date(s).toGMTString()), a.isString(o) && d.push("path=" + o), a.isString(i) && d.push("domain=" + i), c === !0 && d.push("secure"), document.cookie = d.join("; ");
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
function Zt(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function en(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ze(e, t) {
  return e && !Zt(t) ? en(e, t) : t;
}
const tn = A.isStandardBrowserEnv ? (
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
      const c = a.isString(i) ? s(i) : i;
      return c.protocol === r.protocol && c.host === r.host;
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
function nn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function rn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const u = Date.now(), p = r[o];
    i || (i = u), n[s] = d, r[s] = u;
    let m = o, b = 0;
    for (; m !== s; )
      b += n[m++], m = m % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const y = p && u - p;
    return y ? Math.round(b * 1e3 / y) : void 0;
  };
}
function Re(e, t) {
  let n = 0;
  const r = rn(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, c = o - n, d = r(c), u = o <= i;
    n = o;
    const p = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: c,
      rate: d || void 0,
      estimated: d && i && u ? (i - o) / d : void 0,
      event: s
    };
    p[t ? "download" : "upload"] = !0, e(p);
  };
}
const sn = typeof XMLHttpRequest < "u", on = sn && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = T.from(e.headers).normalize(), i = e.responseType;
    let c;
    function d() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    a.isFormData(s) && (A.isStandardBrowserEnv || A.isStandardBrowserWebWorkerEnv) && o.setContentType(!1);
    let u = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", h = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(y + ":" + h));
    }
    const p = ze(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Me(p, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function m() {
      if (!u)
        return;
      const y = T.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), w = {
        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: y,
        config: e,
        request: u
      };
      Qt(function(f) {
        n(f), d();
      }, function(f) {
        r(f), d();
      }, w), u = null;
    }
    if ("onloadend" in u ? u.onloadend = m : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, u.onabort = function() {
      u && (r(new g("Request aborted", g.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new g("Network Error", g.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const w = e.transitional || $e;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new g(
        h,
        w.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        u
      )), u = null;
    }, A.isStandardBrowserEnv) {
      const y = (e.withCredentials || tn(p)) && e.xsrfCookieName && Yt.read(e.xsrfCookieName);
      y && o.set(e.xsrfHeaderName, y);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in u && a.forEach(o.toJSON(), function(h, w) {
      u.setRequestHeader(w, h);
    }), a.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), i && i !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Re(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Re(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (y) => {
      u && (r(!y || y.type ? new j(null, e, u) : y), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const b = nn(p);
    if (b && A.protocols.indexOf(b) === -1) {
      r(new g("Unsupported protocol " + b + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(s || null);
  });
}, H = {
  http: Ft,
  xhr: on
};
a.forEach(H, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const an = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let s = 0; s < t && (n = e[s], !(r = a.isString(n) ? H[n.toLowerCase()] : n)); s++)
      ;
    if (!r)
      throw r === !1 ? new g(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        a.hasOwnProp(H, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!a.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: H
};
function ee(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new j(null, e);
}
function Se(e) {
  return ee(e), e.headers = T.from(e.headers), e.data = Z.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), an.getAdapter(e.adapter || ue.adapter)(e).then(function(r) {
    return ee(e), r.data = Z.call(
      e,
      e.transformResponse,
      r
    ), r.headers = T.from(r.headers), r;
  }, function(r) {
    return qe(r) || (ee(e), r && r.response && (r.response.data = Z.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = T.from(r.response.headers))), Promise.reject(r);
  });
}
const Oe = (e) => e instanceof T ? e.toJSON() : e;
function U(e, t) {
  t = t || {};
  const n = {};
  function r(u, p, m) {
    return a.isPlainObject(u) && a.isPlainObject(p) ? a.merge.call({ caseless: m }, u, p) : a.isPlainObject(p) ? a.merge({}, p) : a.isArray(p) ? p.slice() : p;
  }
  function s(u, p, m) {
    if (a.isUndefined(p)) {
      if (!a.isUndefined(u))
        return r(void 0, u, m);
    } else
      return r(u, p, m);
  }
  function o(u, p) {
    if (!a.isUndefined(p))
      return r(void 0, p);
  }
  function i(u, p) {
    if (a.isUndefined(p)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, p);
  }
  function c(u, p, m) {
    if (m in t)
      return r(u, p);
    if (m in e)
      return r(void 0, u);
  }
  const d = {
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
    validateStatus: c,
    headers: (u, p) => s(Oe(u), Oe(p), !0)
  };
  return a.forEach(Object.keys(e).concat(Object.keys(t)), function(p) {
    const m = d[p] || s, b = m(e[p], t[p], p);
    a.isUndefined(b) && m !== c || (n[p] = b);
  }), n;
}
const ve = "1.3.6", le = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  le[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ae = {};
le.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + ve + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new g(
        s(i, " has been removed" + (n ? " in " + n : "")),
        g.ERR_DEPRECATED
      );
    return n && !Ae[i] && (Ae[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
function cn(e, t, n) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], d = c === void 0 || i(c, o, e);
      if (d !== !0)
        throw new g("option " + o + " must be " + d, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new g("Unknown option " + o, g.ERR_BAD_OPTION);
  }
}
const se = {
  assertOptions: cn,
  validators: le
}, C = se.validators;
class v {
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
    r !== void 0 && se.assertOptions(r, {
      silentJSONParsing: C.transitional(C.boolean),
      forcedJSONParsing: C.transitional(C.boolean),
      clarifyTimeoutError: C.transitional(C.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : se.assertOptions(s, {
      encode: C.function,
      serialize: C.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = o && a.merge(
      o.common,
      o[n.method]
    ), i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete o[h];
      }
    ), n.headers = T.concat(i, o);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(n) === !1 || (d = d && w.synchronous, c.unshift(w.fulfilled, w.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(w) {
      u.push(w.fulfilled, w.rejected);
    });
    let p, m = 0, b;
    if (!d) {
      const h = [Se.bind(this), void 0];
      for (h.unshift.apply(h, c), h.push.apply(h, u), b = h.length, p = Promise.resolve(n); m < b; )
        p = p.then(h[m++], h[m++]);
      return p;
    }
    b = c.length;
    let y = n;
    for (m = 0; m < b; ) {
      const h = c[m++], w = c[m++];
      try {
        y = h(y);
      } catch (l) {
        w.call(this, l);
        break;
      }
    }
    try {
      p = Se.call(this, y);
    } catch (h) {
      return Promise.reject(h);
    }
    for (m = 0, b = u.length; m < b; )
      p = p.then(u[m++], u[m++]);
    return p;
  }
  getUri(t) {
    t = U(this.defaults, t);
    const n = ze(t.baseURL, t.url);
    return Me(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  v.prototype[t] = function(n, r) {
    return this.request(U(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(U(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  v.prototype[t] = n(), v.prototype[t + "Form"] = n(!0);
});
const q = v;
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
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      r.reason || (r.reason = new j(o, i, c), n(r.reason));
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
const un = fe;
function ln(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function fn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
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
const dn = oe;
function Je(e) {
  const t = new q(e), n = xe(q.prototype.request, t);
  return a.extend(n, q.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Je(U(e, s));
  }, n;
}
const R = Je(ue);
R.Axios = q;
R.CanceledError = j;
R.CancelToken = un;
R.isCancel = qe;
R.VERSION = ve;
R.toFormData = W;
R.AxiosError = g;
R.Cancel = R.CanceledError;
R.all = function(t) {
  return Promise.all(t);
};
R.spread = ln;
R.isAxiosError = fn;
R.mergeConfig = U;
R.AxiosHeaders = T;
R.formToJSON = (e) => He(a.isHTMLForm(e) ? new FormData(e) : e);
R.HttpStatusCode = dn;
R.default = R;
const te = R, pn = {
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
function wn({
  instance: e = te,
  beforeRequest: t,
  beforeResponse: n,
  responseHandler: r,
  errorHandler: s,
  errorResponse: o,
  excludePeddings: i = []
} = {}) {
  let c = e;
  c || (c = te, c.defaults.timeout = 1e4, c.defaults.withCredentials = !0, c.defaults.headers = {
    // 设置默认请求头
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=UTF-8"
  });
  const d = (l, f) => {
    s ? s(l, f) : pn.error(l);
  }, u = [], p = te.CancelToken, m = (l) => {
    const { url: f, method: E, cancelable: S = !0 } = l, O = `${f}&${E}`;
    for (const N in u)
      u[N].url === O && !i.includes(O) && S && (u[N].fn(), u.splice(N, 1));
  };
  c.interceptors.request.use(async (l) => {
    const f = t ? await t(l) : l;
    return m(f), f.cancelToken = new p((E) => {
      u.push({ url: `${f.url}&${f.method}`, fn: E });
    }), f;
  }), c.interceptors.response.use(
    async (l) => {
      if (m(l.config), n)
        return n ? await n(l) : l;
      if (r)
        return await r(l);
      const { data: f, data: { code: E }, config: S } = l || {};
      return [0, 1001].includes(E) ? f : (f && o(f, S), d(l.message, f));
    },
    async (l) => {
      if (l.code === "ERR_CANCELED")
        return "";
      if (l && l.response) {
        const { data: f, status: E, config: S } = l.response;
        if (E && o) {
          const [O] = (f == null ? void 0 : f.errors) || [];
          await o(O ?? f, S);
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
          l.message = O[E];
        }
        d(l.message, f);
      }
      return l.message && l.message.includes("timeout of") && (l.message = "网络超时, 请检查网络！"), l.message ? Promise.reject(l) : l;
    }
  );
  const b = (l, f = !1) => f ? l : l.data ?? !0, y = async (l, f, E = {}, S = "get", O = !1) => {
    try {
      const N = {};
      if (f) {
        const de = (L) => /\[|\]/g.test(L);
        Object.keys(f).forEach((L) => {
          N[L] = f[L] && de ? [...f[L].toString()].map((X) => de(X) ? encodeURIComponent(X) : X).join("") : f[L];
        });
      }
      const Ve = ["post", "put"].includes(S) ? await c({
        method: S,
        url: l,
        data: f,
        ...E
      }) : await c[S](l, { params: N, ...E });
      return b(Ve, O);
    } catch (N) {
      if (O)
        return N;
    }
  };
  return {
    $api: {
      get: (l, f, E) => y(l, f, E, "get"),
      post: (l, f, E) => y(l, f, E, "post"),
      put: (l, f, E) => y(l, f, E, "put"),
      delete: (l, f, E) => y(l, f, E, "delete"),
      all: (l, f, E) => y(l, f, E, "all")
    },
    $http: {
      get: (l, f, E) => y(l, f, E, "get", !0),
      post: (l, f, E) => y(l, f, E, "post", !0),
      put: (l, f, E) => y(l, f, E, "put", !0),
      delete: (l, f, E) => y(l, f, E, "delete", !0),
      all: (l, f, E) => y(l, f, E, "all", !0)
    }
  };
}
function En() {
  const e = z(), { globalProperties: t } = e.appContext.config, { $message: n, $messageBox: r } = t, s = (c, d, u) => {
    n.closeAll(), n({ message: c, type: d, ...u });
  };
  return {
    message: {
      error: (c, d) => s(c, "error", d),
      success: (c, d) => s(c, "success", d),
      warning: (c, d) => s(c, "warning", d),
      info: (c, d) => s(c, "info", d),
      close: () => n.closeAll()
    },
    messageBox: {
      confirm: ({
        msg: c,
        title: d = "提示",
        type: u = "warning",
        ...p
      }) => new Promise((m, b) => {
        parent.window.postMessage("openMask()", "*"), window.top.postMessage("openMask()", "*"), r.confirm(c, d, {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          buttonSize: "",
          type: u,
          ...p
        }).then(() => m(!0)).catch(() => b()).finally(() => {
          parent.window.postMessage("closeMask()", "*"), window.top.postMessage("closeMask()", "*");
        });
      }),
      alert: ({ msg: c, title: d = "提示", type: u = "warning" }, p) => {
        r.alert(c, d, {
          confirmButtonText: "确认",
          type: u,
          callback: (m) => p(m)
        });
      }
    }
  };
}
function gn() {
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
function bn() {
  const e = F(1), t = F(1), n = F(1), r = F([]), s = F(!0), o = F(!1);
  return {
    totalPage: e,
    totalRecord: t,
    currentPage: n,
    listData: r,
    tableData: r,
    loading: s,
    getNowPage: (d = [], u = r.value) => (n.value > 1 && (u.length === 1 || u.length === d.length) && n.value--, n.value),
    setListAndPage: (d) => {
      const {
        records: u = [],
        totalPage: p = 1,
        pageNo: m = 1,
        pageIndex: b,
        totalRecord: y = 1,
        content: h,
        total: w,
        size: l
      } = d || {};
      r.value = h ?? u, s.value = !1, e.value = w ?? p, t.value = y, n.value = l ?? b ?? m, o.value = !r.value.length;
    },
    isNullData: o
  };
}
function Rn() {
  const e = (o, i) => {
    if (o) {
      let c = o;
      return typeof o == "string" && (c = Number(o)), c.toFixed(2);
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
const Sn = {
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
function hn() {
  return { getImageUrl: (t, n = "images", r = z()) => {
    var c;
    const s = (c = r.type.__file.split("src")) == null ? void 0 : c[1], o = `${window.location.origin}/src${s}`, i = /^(\.{1,2}\/)/.test(n) ? n : `../../assets/${n}`;
    return new URL(`${i}/${t}`, o).href;
  } };
}
const Te = (e, t, n) => {
  const { getImageUrl: r } = hn(), { floder: s, name: o } = t.value || {}, i = r(o, s, n == null ? void 0 : n.ctx);
  e.setAttribute("src", i);
}, On = {
  mounted: (e, t, n) => Te(e, t, n),
  updated: (e, t, n) => Te(e, t, n)
}, Pe = (e, t) => {
  const { money: n, number: r } = t.modifiers;
  n ? e.innerHTML = `￥${Number(t.value).toFixed(2)}` : e.innerHTML = t.value || (r ? 0 : "-");
}, An = {
  mounted: (e, t) => Pe(e, t),
  updated: (e, t) => Pe(e, t)
};
function Tn() {
  return { getFormatParams: (n, r = 0) => n ?? r, formatRadixPoint: (n, r = 2) => {
    var o;
    const s = new RegExp(`^\\d+(\\.\\d{0,${r}})?`, "g");
    return n.indexOf(".") > 0 ? (o = n.match(s)) == null ? void 0 : o[0] : /(^0\d+)/.test(n) ? n.substr(1) : n;
  } };
}
export {
  On as VImageUrl,
  An as VParams,
  yn as useCommon,
  Rn as useFilters,
  gn as useForm,
  hn as useImage,
  En as useMessage,
  bn as usePage,
  wn as useRequest,
  Tn as useUtils,
  Sn as vOnClickActive
};
