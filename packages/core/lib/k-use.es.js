import { getCurrentInstance as v, reactive as We, watchEffect as pe, computed as $, toRefs as he, nextTick as Ke, ref as L, watch as Ge, onMounted as Xe, onUnmounted as Qe } from "vue";
function En() {
  const e = v(), { globalProperties: t } = e ? e.appContext.config : {}, {
    $route: n,
    $pinia: r,
    $store: o,
    $router: s
  } = t, i = s, c = n, p = We({
    routeRef: n
  });
  pe(() => {
    const { $route: l } = t;
    p.routeRef = l;
  });
  const u = $(() => p.routeRef.name), d = $(() => p.routeRef.query), m = $(() => p.routeRef.params), b = (l, f) => {
    f ? i.push({ path: l, ...f }) : l.includes("/") ? i.push(l) : i.push({ name: l });
  }, y = (l, f) => {
    f ? i.replace({ path: l, ...f }) : l.includes("/") ? i.replace(l) : i.replace({ name: l });
  }, h = $(() => !1), w = (l) => e.proxy[l];
  return {
    ...he(p),
    route: c,
    router: i,
    routeQuery: d,
    routeParams: m,
    routerName: u,
    loadPage: b,
    isDev: h,
    replacePage: y,
    globalProperties: t,
    resetParams: w,
    store: o,
    pinia: r,
    nextTick: Ke,
    ref: L,
    watch: Ge,
    onMounted: Xe,
    onUnmounted: Qe,
    watchEffect: pe,
    getCurrentInstance: v,
    toRefs: he
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
})(/* @__PURE__ */ Object.create(null)), P = (e) => (e = e.toLowerCase(), (t) => V(t) === e), W = (e) => (t) => typeof t === e, { isArray: D } = Array, _ = W("undefined");
function Ze(e) {
  return e !== null && !_(e) && e.constructor !== null && !_(e.constructor) && x(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ne = P("ArrayBuffer");
function et(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ne(e.buffer), t;
}
const tt = W("string"), x = W("function"), Ce = W("number"), ae = (e) => e !== null && typeof e == "object", nt = (e) => e === !0 || e === !1, M = (e) => {
  if (V(e) !== "object")
    return !1;
  const t = ie(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, rt = P("Date"), st = P("File"), ot = P("Blob"), it = P("FileList"), at = (e) => ae(e) && x(e.pipe), ct = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || x(e.append) && ((t = V(e)) === "formdata" || // detect form-data instance
  t === "object" && x(e.toString) && e.toString() === "[object FormData]"));
}, ut = P("URLSearchParams"), lt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function k(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), D(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let c;
    for (r = 0; r < i; r++)
      c = s[r], t.call(null, e[c], c, e);
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
const Fe = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ue = (e) => !_(e) && e !== Fe;
function ne() {
  const { caseless: e } = Ue(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && Le(t, o) || o;
    M(t[s]) && M(r) ? t[s] = ne(t[s], r) : M(r) ? t[s] = ne({}, r) : D(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && k(arguments[r], n);
  return t;
}
const ft = (e, t, n, { allOwnKeys: r } = {}) => (k(t, (o, s) => {
  n && x(o) ? e[s] = Pe(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), dt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), pt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, ht = (e, t, n, r) => {
  let o, s, i;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
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
  if (D(e))
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
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, gt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, bt = P("HTMLFormElement"), Rt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), me = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), St = P("RegExp"), De = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  k(n, (o, s) => {
    t(o, s, e) !== !1 && (r[s] = o);
  }), Object.defineProperties(e, r);
}, Ot = (e) => {
  De(e, (t, n) => {
    if (x(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (x(r)) {
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
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return D(e) ? r(e) : r(String(e).split(t)), n;
}, Tt = () => {
}, xt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Y = "abcdefghijklmnopqrstuvwxyz", ye = "0123456789", Be = {
  DIGIT: ye,
  ALPHA: Y,
  ALPHA_DIGIT: Y + Y.toUpperCase() + ye
}, Pt = (e = 16, t = Be.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Nt(e) {
  return !!(e && x(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ct = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (ae(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = D(r) ? [] : {};
        return k(r, (i, c) => {
          const p = n(i, o + 1);
          !_(p) && (s[c] = p);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, a = {
  isArray: D,
  isArrayBuffer: Ne,
  isBuffer: Ze,
  isFormData: ct,
  isArrayBufferView: et,
  isString: tt,
  isNumber: Ce,
  isBoolean: nt,
  isObject: ae,
  isPlainObject: M,
  isUndefined: _,
  isDate: rt,
  isFile: st,
  isBlob: ot,
  isRegExp: St,
  isFunction: x,
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
  kindOf: V,
  kindOfTest: P,
  endsWith: mt,
  toArray: yt,
  forEachEntry: Et,
  matchAll: gt,
  isHTMLForm: bt,
  hasOwnProperty: me,
  hasOwnProp: me,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: De,
  freezeMethods: Ot,
  toObjectSet: At,
  toCamelCase: Rt,
  noop: Tt,
  toFiniteNumber: xt,
  findKey: Le,
  global: Fe,
  isContextDefined: Ue,
  ALPHABET: Be,
  generateString: Pt,
  isSpecCompliantForm: Nt,
  toJSONObject: Ct
};
function g(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
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
g.from = (e, t, n, r, o, s) => {
  const i = Object.create(_e);
  return a.toFlatObject(e, i, function(p) {
    return p !== Error.prototype;
  }, (c) => c !== "isAxiosError"), g.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Lt = null;
function re(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function je(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function we(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = je(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Ft(e) {
  return a.isArray(e) && !e.some(re);
}
const Ut = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function K(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, l) {
    return !a.isUndefined(l[w]);
  });
  const r = n.metaTokens, o = n.visitor || d, s = n.dots, i = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null)
      return "";
    if (a.isDate(h))
      return h.toISOString();
    if (!p && a.isBlob(h))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(h) || a.isTypedArray(h) ? p && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function d(h, w, l) {
    let f = h;
    if (h && !l && typeof h == "object") {
      if (a.endsWith(w, "{}"))
        w = r ? w : w.slice(0, -2), h = JSON.stringify(h);
      else if (a.isArray(h) && Ft(h) || (a.isFileList(h) || a.endsWith(w, "[]")) && (f = a.toArray(h)))
        return w = je(w), f.forEach(function(S, O) {
          !(a.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? we([w], O, s) : i === null ? w : w + "[]",
            u(S)
          );
        }), !1;
    }
    return re(h) ? !0 : (t.append(we(l, w, s), u(h)), !1);
  }
  const m = [], b = Object.assign(Ut, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: re
  });
  function y(h, w) {
    if (!a.isUndefined(h)) {
      if (m.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      m.push(h), a.forEach(h, function(f, E) {
        (!(a.isUndefined(f) || f === null) && o.call(
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
  this._pairs = [], e && K(e, this, t);
}
const $e = ce.prototype;
$e.append = function(t, n) {
  this._pairs.push([t, n]);
};
$e.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ee);
  } : Ee;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Dt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Me(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Dt, o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = a.isURLSearchParams(t) ? t.toString() : new ce(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
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
const ge = Bt, Ie = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, _t = typeof URLSearchParams < "u" ? URLSearchParams : ce, kt = typeof FormData < "u" ? FormData : null, jt = typeof Blob < "u" ? Blob : null, $t = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Mt = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), A = {
  isBrowser: !0,
  classes: {
    URLSearchParams: _t,
    FormData: kt,
    Blob: jt
  },
  isStandardBrowserEnv: $t,
  isStandardBrowserWebWorkerEnv: Mt,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function It(e, t) {
  return K(e, new A.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return A.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ht(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function qt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function He(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    const c = Number.isFinite(+i), p = s >= n.length;
    return i = !i && a.isArray(o) ? o.length : i, p ? (a.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !c) : ((!o[i] || !a.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && a.isArray(o[i]) && (o[i] = qt(o[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, o) => {
      t(Ht(r), o, n, 0);
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
const G = {
  transitional: Ie,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = a.isObject(t);
    if (s && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return o && o ? JSON.stringify(He(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return It(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return K(
          c ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), vt(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || G.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
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
  G.headers[t] = {};
});
a.forEach(["post", "put", "patch"], function(t) {
  G.headers[t] = a.merge(zt);
});
const ue = G, Jt = a.toObjectSet([
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
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && Jt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, be = Symbol("internals");
function B(e) {
  return e && String(e).trim().toLowerCase();
}
function I(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(I) : String(e);
}
function Wt(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Kt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Z(e, t, n, r, o) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!a.isString(t)) {
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
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
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
    function s(c, p, u) {
      const d = B(p);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const m = a.findKey(o, d);
      (!m || o[m] === void 0 || u === !0 || u === void 0 && o[m] !== !1) && (o[m || p] = I(c));
    }
    const i = (c, p) => a.forEach(c, (u, d) => s(u, d, p));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !Kt(t) ? i(Vt(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = B(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Wt(o);
        if (a.isFunction(n))
          return n.call(this, o, r);
        if (a.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = B(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Z(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = B(i), i) {
        const c = a.findKey(r, i);
        c && (!n || Z(r, r[c], c, n)) && (delete r[c], o = !0);
      }
    }
    return a.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Z(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (o, s) => {
      const i = a.findKey(r, s);
      if (i) {
        n[i] = I(o), delete n[s];
        return;
      }
      const c = t ? Gt(s) : String(s).trim();
      c !== s && delete n[s], n[c] = I(o), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && a.isArray(r) ? r.join(", ") : r);
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
    function s(i) {
      const c = B(i);
      r[c] || (Xt(o, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
X.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.freezeMethods(X.prototype);
a.freezeMethods(X);
const T = X;
function ee(e, t) {
  const n = this || ue, r = t || n, o = T.from(r.headers);
  let s = r.data;
  return a.forEach(e, function(c) {
    s = c.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
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
      write: function(n, r, o, s, i, c) {
        const p = [];
        p.push(n + "=" + encodeURIComponent(r)), a.isNumber(o) && p.push("expires=" + new Date(o).toGMTString()), a.isString(s) && p.push("path=" + s), a.isString(i) && p.push("domain=" + i), c === !0 && p.push("secure"), document.cookie = p.join("; ");
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
    function o(s) {
      let i = s;
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
    return r = o(window.location.href), function(i) {
      const c = a.isString(i) ? o(i) : i;
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
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const u = Date.now(), d = r[s];
    i || (i = u), n[o] = p, r[o] = u;
    let m = s, b = 0;
    for (; m !== o; )
      b += n[m++], m = m % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - i < t)
      return;
    const y = d && u - d;
    return y ? Math.round(b * 1e3 / y) : void 0;
  };
}
function Re(e, t) {
  let n = 0;
  const r = rn(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, c = s - n, p = r(c), u = s <= i;
    n = s;
    const d = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: c,
      rate: p || void 0,
      estimated: p && i && u ? (i - s) / p : void 0,
      event: o
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const sn = typeof XMLHttpRequest < "u", on = sn && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const s = T.from(e.headers).normalize(), i = e.responseType;
    let c;
    function p() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    a.isFormData(o) && (A.isStandardBrowserEnv || A.isStandardBrowserWebWorkerEnv) && s.setContentType(!1);
    let u = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", h = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(y + ":" + h));
    }
    const d = ze(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Me(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
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
        n(f), p();
      }, function(f) {
        r(f), p();
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
      const w = e.transitional || Ie;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new g(
        h,
        w.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        u
      )), u = null;
    }, A.isStandardBrowserEnv) {
      const y = (e.withCredentials || tn(d)) && e.xsrfCookieName && Yt.read(e.xsrfCookieName);
      y && s.set(e.xsrfHeaderName, y);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in u && a.forEach(s.toJSON(), function(h, w) {
      u.setRequestHeader(w, h);
    }), a.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), i && i !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Re(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Re(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (y) => {
      u && (r(!y || y.type ? new j(null, e, u) : y), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const b = nn(d);
    if (b && A.protocols.indexOf(b) === -1) {
      r(new g("Unsupported protocol " + b + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, H = {
  http: Lt,
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
    for (let o = 0; o < t && (n = e[o], !(r = a.isString(n) ? H[n.toLowerCase()] : n)); o++)
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
function te(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new j(null, e);
}
function Se(e) {
  return te(e), e.headers = T.from(e.headers), e.data = ee.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), an.getAdapter(e.adapter || ue.adapter)(e).then(function(r) {
    return te(e), r.data = ee.call(
      e,
      e.transformResponse,
      r
    ), r.headers = T.from(r.headers), r;
  }, function(r) {
    return qe(r) || (te(e), r && r.response && (r.response.data = ee.call(
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
  function r(u, d, m) {
    return a.isPlainObject(u) && a.isPlainObject(d) ? a.merge.call({ caseless: m }, u, d) : a.isPlainObject(d) ? a.merge({}, d) : a.isArray(d) ? d.slice() : d;
  }
  function o(u, d, m) {
    if (a.isUndefined(d)) {
      if (!a.isUndefined(u))
        return r(void 0, u, m);
    } else
      return r(u, d, m);
  }
  function s(u, d) {
    if (!a.isUndefined(d))
      return r(void 0, d);
  }
  function i(u, d) {
    if (a.isUndefined(d)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, d);
  }
  function c(u, d, m) {
    if (m in t)
      return r(u, d);
    if (m in e)
      return r(void 0, u);
  }
  const p = {
    url: s,
    method: s,
    data: s,
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
    headers: (u, d) => o(Oe(u), Oe(d), !0)
  };
  return a.forEach(Object.keys(e).concat(Object.keys(t)), function(d) {
    const m = p[d] || o, b = m(e[d], t[d], d);
    a.isUndefined(b) && m !== c || (n[d] = b);
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
  function o(s, i) {
    return "[Axios v" + ve + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, c) => {
    if (t === !1)
      throw new g(
        o(i, " has been removed" + (n ? " in " + n : "")),
        g.ERR_DEPRECATED
      );
    return n && !Ae[i] && (Ae[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, c) : !0;
  };
};
function cn(e, t, n) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const c = e[s], p = c === void 0 || i(c, s, e);
      if (p !== !0)
        throw new g("option " + s + " must be " + p, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new g("Unknown option " + s, g.ERR_BAD_OPTION);
  }
}
const se = {
  assertOptions: cn,
  validators: le
}, C = se.validators;
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
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && se.assertOptions(r, {
      silentJSONParsing: C.transitional(C.boolean),
      forcedJSONParsing: C.transitional(C.boolean),
      clarifyTimeoutError: C.transitional(C.boolean)
    }, !1), o != null && (a.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : se.assertOptions(o, {
      encode: C.function,
      serialize: C.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = s && a.merge(
      s.common,
      s[n.method]
    ), i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete s[h];
      }
    ), n.headers = T.concat(i, s);
    const c = [];
    let p = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(n) === !1 || (p = p && w.synchronous, c.unshift(w.fulfilled, w.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(w) {
      u.push(w.fulfilled, w.rejected);
    });
    let d, m = 0, b;
    if (!p) {
      const h = [Se.bind(this), void 0];
      for (h.unshift.apply(h, c), h.push.apply(h, u), b = h.length, d = Promise.resolve(n); m < b; )
        d = d.then(h[m++], h[m++]);
      return d;
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
      d = Se.call(this, y);
    } catch (h) {
      return Promise.reject(h);
    }
    for (m = 0, b = u.length; m < b; )
      d = d.then(u[m++], u[m++]);
    return d;
  }
  getUri(t) {
    t = U(this.defaults, t);
    const n = ze(t.baseURL, t.url);
    return Me(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  J.prototype[t] = function(n, r) {
    return this.request(U(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, c) {
      return this.request(U(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
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
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((c) => {
        r.subscribe(c), s = c;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, c) {
      r.reason || (r.reason = new j(s, i, c), n(r.reason));
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
  const t = new q(e), n = Pe(q.prototype.request, t);
  return a.extend(n, q.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Je(U(e, o));
  }, n;
}
const R = Je(ue);
R.Axios = q;
R.CanceledError = j;
R.CancelToken = un;
R.isCancel = qe;
R.VERSION = ve;
R.toFormData = K;
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
const z = R, pn = {
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
function gn({
  instance: e = z,
  beforeRequest: t,
  beforeResponse: n,
  responseHandler: r,
  errorHandler: o,
  errorResponse: s,
  excludePeddings: i = []
} = {}) {
  let c = e;
  c || (c = z, c.defaults.timeout = 1e4, c.defaults.withCredentials = !0, c.defaults.headers = {
    // 设置默认请求头
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=UTF-8"
  });
  const p = (l, f) => {
    o ? o(l, f) : pn.error(l);
  }, u = [], d = z.CancelToken, m = (l) => {
    const { url: f, method: E, cancelable: S = !0 } = l, O = `${f}&${E}`;
    for (const N in u)
      u[N].url === O && !i.includes(O) && S && (u[N].fn(), u.splice(N, 1));
  };
  c.interceptors.request.use(async (l) => {
    const f = t ? await t(l) : l;
    return m(f), f.cancelToken = new d((E) => {
      u.push({ url: `${f.url}&${f.method}`, fn: E });
    }), f;
  }), c.interceptors.response.use(
    async (l) => {
      if (m(l.config), n)
        return n ? await n(l) : l;
      if (r)
        return await r(l);
      const { data: f, data: { code: E }, config: S } = l || {};
      return [0, 1001].includes(E) ? f : (f && s(f, S), p(l.message, f));
    },
    async (l) => {
      if (l.code === "ERR_CANCELED")
        return "";
      if (l && l.response) {
        const { data: f, status: E, config: S } = l.response;
        if (E && s) {
          const [O] = (f == null ? void 0 : f.errors) || [];
          await s(O ?? f, S);
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
        p(l.message, f);
      }
      return l.message && l.message.includes("timeout of") && (l.message = "网络超时, 请检查网络！"), l.message ? Promise.reject(l) : l;
    }
  );
  const b = (l, f = !1) => f ? l : l ? l.data ?? !0 : !1, y = async (l, f, E = {}, S = "get", O = !1) => {
    try {
      const N = {};
      if (f) {
        const de = (F) => /\[|\]/g.test(F);
        Object.keys(f).forEach((F) => {
          N[F] = f[F] && de ? [...f[F].toString()].map((Q) => de(Q) ? encodeURIComponent(Q) : Q).join("") : f[F];
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
function hn() {
  const e = v(), t = (s = "$message") => {
    const { globalProperties: i } = e.appContext.config;
    return i[s];
  }, n = (s, i, c) => {
    var p, u;
    (p = t()) == null || p.closeAll(), (u = t()) == null || u({ message: s, type: i, ...c });
  };
  return {
    message: {
      error: (s, i) => n(s, "error", i),
      success: (s, i) => n(s, "success", i),
      warning: (s, i) => n(s, "warning", i),
      info: (s, i) => n(s, "info", i),
      close: () => {
        var s;
        return (s = t()) == null ? void 0 : s.closeAll();
      }
    },
    messageBox: {
      confirm: ({
        msg: s,
        title: i = "提示",
        type: c = "warning",
        ...p
      }) => new Promise((u, d) => {
        var m;
        parent.window.postMessage("openMask()", "*"), window.top.postMessage("openMask()", "*"), (m = t("$messageBox")) == null || m.confirm(s, i, {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          buttonSize: "",
          type: c,
          ...p
        }).then(() => u(!0)).catch(() => d()).finally(() => {
          parent.window.postMessage("closeMask()", "*"), window.top.postMessage("closeMask()", "*");
        });
      }),
      alert: ({ msg: s, title: i = "提示", type: c = "warning" }, p) => {
        var u;
        (u = t("$messageBox")) == null || u.alert(s, i, {
          confirmButtonText: "确认",
          type: c,
          callback: (d) => p(d)
        });
      }
    }
  };
}
function bn() {
  const e = L(null);
  return { ruleFormRef: e, submitForm: (r = e) => {
    const o = r.value || r;
    return o ? new Promise((s) => {
      o.validate((i) => {
        s(i);
      });
    }) : !1;
  }, resetForm: (r = e) => {
    (r.value || r).resetFields();
  } };
}
function Rn() {
  const e = L(1), t = L(1), n = L(1), r = L([]), o = L(!0), s = L(!1);
  return {
    totalPage: e,
    totalRecord: t,
    currentPage: n,
    listData: r,
    tableData: r,
    loading: o,
    getNowPage: (p = [], u = r.value) => (n.value > 1 && (u.length === 1 || u.length === p.length) && n.value--, n.value),
    setListAndPage: (p) => {
      const {
        records: u = [],
        totalPage: d = 1,
        pageNo: m = 1,
        pageIndex: b,
        totalRecord: y = 1,
        content: h,
        total: w,
        size: l
      } = p || {};
      r.value = h ?? u, o.value = !1, e.value = w ?? d, t.value = y, n.value = l ?? b ?? m, s.value = !r.value.length;
    },
    isNullData: s
  };
}
function Sn() {
  const e = (s, i) => {
    if (s) {
      let c = s;
      return typeof s == "string" && (c = Number(s)), c.toFixed(2);
    }
    return i ? 0 : "0.00";
  };
  return {
    moneyType: (s) => `￥${e(s)}`,
    moneyPoint: e,
    dataType: (s) => s || 0,
    paramsType: (s) => s !== void 0 ? s : "-",
    rounding: (s, i = 2) => Number(s.toFixed(i))
  };
}
const On = {
  mounted: (e, t) => {
    const { activeName: n, className: r, defaultIndex: o } = t.value || {};
    r && o ? document.querySelectorAll(`.${r}`)[o].classList.add(n) : document.querySelector(`.${n}`) || e.classList.add(n), e.handler = function() {
      const s = document.querySelector(`.${n}`);
      s && s.classList.remove(n), e.classList.add(n);
    }, e.addEventListener("click", e.handler);
  },
  unmounted: (e) => {
    e.removeEventListener("click", e.handler);
  }
};
function mn() {
  return { getImageUrl: (t, n = "images", r = v()) => {
    var c;
    const o = (c = r.type.__file.split("src")) == null ? void 0 : c[1], s = `${window.location.origin}/src${o}`, i = /^(\.{1,2}\/)/.test(n) ? n : `../../assets/${n}`;
    return new URL(`${i}/${t}`, s).href;
  } };
}
const Te = (e, t, n) => {
  const { getImageUrl: r } = mn(), { floder: o, name: s } = t.value || {}, i = r(s, o, n == null ? void 0 : n.ctx);
  e.setAttribute("src", i);
}, An = {
  mounted: (e, t, n) => Te(e, t, n),
  updated: (e, t, n) => Te(e, t, n)
}, xe = (e, t) => {
  const { money: n, number: r } = t.modifiers;
  n ? e.innerHTML = `￥${Number(t.value).toFixed(2)}` : e.innerHTML = t.value || (r ? 0 : "-");
}, Tn = {
  mounted: (e, t) => xe(e, t),
  updated: (e, t) => xe(e, t)
};
function yn() {
  return { getFormatParams: (r, o = 0) => r ?? o, formatRadixPoint: (r, o = 2) => {
    var i;
    const s = new RegExp(`^\\d+(\\.\\d{0,${o}})?`, "g");
    return r.indexOf(".") > 0 ? (i = r.match(s)) == null ? void 0 : i[0] : /(^0\d+)/.test(r) ? r.substr(1) : r;
  }, setUrlParams: (r = {}) => {
    let o = "";
    return Object.keys(r).forEach((s) => {
      r[s] !== void 0 && s !== "pageSize" && (o += `&${s}=${r[s]}`);
    }), o.replace(/^&/, "?");
  } };
}
function xn() {
  const { setUrlParams: e } = yn();
  return { setUrlParams: e, isExportEmpty: (r) => {
    const { message: o } = hn();
    return r ? (o.warning("当前无数据可导出"), !0) : !1;
  }, downloadFile: async (r, o) => {
    const s = /\.xlsx$/.test(o) ? o : `${o}.xlsx`, i = await z.get(r, { responseType: "blob" }), c = document.createElement("a");
    function p(u, d) {
      const m = new FileReader();
      m.readAsDataURL(u), m.onload = function(b) {
        d(b.target.result);
      };
    }
    if (typeof dfAndroidAppHD < "u") {
      const u = new Blob([i.data], { type: "application/vnd.ms-excel" });
      p(u, (d) => {
        window.webkit && window.webkit.messageHandlers.openDocument && window.webkit.messageHandlers.openDocument.postMessage(`${s};${d}`), typeof dfAndroidAppHD < "u" && dfAndroidAppHD.openDocument(`${s};${d}`);
      });
    } else
      c.href = URL.createObjectURL(i.data), c.download = `${s}`, c.click(), document.body.appendChild(c);
  } };
}
export {
  An as VImageUrl,
  Tn as VParams,
  En as useCommon,
  xn as useExport,
  Sn as useFilters,
  bn as useForm,
  mn as useImage,
  hn as useMessage,
  Rn as usePage,
  gn as useRequest,
  yn as useUtils,
  On as vOnClickActive
};
