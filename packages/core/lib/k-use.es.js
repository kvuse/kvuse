import { getCurrentInstance as H, reactive as rn, watchEffect as Ke, computed as S, toRefs as Ge, nextTick as wt, ref as T, watch as X, onMounted as Ae, onUnmounted as sn, unref as v, getCurrentScope as on, onScopeDispose as an, readonly as cn, openBlock as N, createElementBlock as $, createElementVNode as k, warn as ln, provide as un, inject as fn, defineComponent as M, mergeProps as dn, renderSlot as fe, normalizeClass as I, createVNode as $e, Transition as bt, withCtx as re, withDirectives as _t, toDisplayString as Et, vShow as vt, shallowReactive as pn, createBlock as W, normalizeStyle as mn, createCommentVNode as ne, resolveDynamicComponent as hn, Fragment as yn, withModifiers as gn, isVNode as Ot, render as Qe } from "vue";
function po() {
  const e = H(), { globalProperties: t } = e.appContext.config, {
    $route: n,
    $pinia: r,
    $store: s,
    $router: o
  } = t, i = o, a = n, f = rn({
    routeRef: n
  });
  Ke(() => {
    const { $route: u } = t;
    f.routeRef = u;
  });
  const c = S(() => f.routeRef.name), p = S(() => f.routeRef.query), m = S(() => f.routeRef.params), b = (u, h) => {
    h ? i.push({ path: u, ...h }) : u.includes("/") ? i.push(u) : i.push({ name: u });
  }, g = (u, h) => {
    h ? i.replace({ path: u, ...h }) : u.includes("/") ? i.replace(u) : i.replace({ name: u });
  }, d = S(() => !1), y = (u) => e.proxy[u];
  return {
    ...Ge(f),
    route: a,
    router: i,
    routeQuery: p,
    routeParams: m,
    routerName: c,
    loadPage: b,
    isDev: d,
    replacePage: g,
    globalProperties: t,
    resetParams: y,
    store: s,
    pinia: r,
    nextTick: wt,
    ref: T,
    watch: X,
    onMounted: Ae,
    onUnmounted: sn,
    watchEffect: Ke,
    getCurrentInstance: H,
    toRefs: Ge
  };
}
function St(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Tt } = Object.prototype, { getPrototypeOf: Le } = Object, Be = ((e) => (t) => {
  const n = Tt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), L = (e) => (e = e.toLowerCase(), (t) => Be(t) === e), de = (e) => (t) => typeof t === e, { isArray: J } = Array, G = de("undefined");
function wn(e) {
  return e !== null && !G(e) && e.constructor !== null && !G(e.constructor) && U(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ct = L("ArrayBuffer");
function bn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ct(e.buffer), t;
}
const _n = de("string"), U = de("function"), Pt = de("number"), Fe = (e) => e !== null && typeof e == "object", En = (e) => e === !0 || e === !1, se = (e) => {
  if (Be(e) !== "object")
    return !1;
  const t = Le(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, vn = L("Date"), On = L("File"), Sn = L("Blob"), Tn = L("FileList"), Cn = (e) => Fe(e) && U(e.pipe), Pn = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Tt.call(e) === t || U(e.toString) && e.toString() === t);
}, Nn = L("URLSearchParams"), Rn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Z(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), J(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function Nt(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Rt = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), xt = (e) => !G(e) && e !== Rt;
function Oe() {
  const { caseless: e } = xt(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Nt(t, s) || s;
    se(t[o]) && se(r) ? t[o] = Oe(t[o], r) : se(r) ? t[o] = Oe({}, r) : J(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Z(arguments[r], n);
  return t;
}
const xn = (e, t, n, { allOwnKeys: r } = {}) => (Z(t, (s, o) => {
  n && U(s) ? e[o] = St(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), An = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), $n = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ln = (e, t, n, r) => {
  let s, o, i;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Le(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Bn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Fn = (e) => {
  if (!e)
    return null;
  if (J(e))
    return e;
  let t = e.length;
  if (!Pt(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, In = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Le(Uint8Array)), Dn = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, kn = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Un = L("HTMLFormElement"), jn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Xe = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Mn = L("RegExp"), At = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Z(n, (s, o) => {
    t(s, o, e) !== !1 && (r[o] = s);
  }), Object.defineProperties(e, r);
}, zn = (e) => {
  At(e, (t, n) => {
    if (U(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (U(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Hn = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return J(e) ? r(e) : r(String(e).split(t)), n;
}, qn = () => {
}, Vn = (e, t) => (e = +e, Number.isFinite(e) ? e : t), we = "abcdefghijklmnopqrstuvwxyz", Ze = "0123456789", $t = {
  DIGIT: Ze,
  ALPHA: we,
  ALPHA_DIGIT: we + we.toUpperCase() + Ze
}, Jn = (e = 16, t = $t.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Wn(e) {
  return !!(e && U(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Kn = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Fe(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = J(r) ? [] : {};
        return Z(r, (i, a) => {
          const f = n(i, s + 1);
          !G(f) && (o[a] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, l = {
  isArray: J,
  isArrayBuffer: Ct,
  isBuffer: wn,
  isFormData: Pn,
  isArrayBufferView: bn,
  isString: _n,
  isNumber: Pt,
  isBoolean: En,
  isObject: Fe,
  isPlainObject: se,
  isUndefined: G,
  isDate: vn,
  isFile: On,
  isBlob: Sn,
  isRegExp: Mn,
  isFunction: U,
  isStream: Cn,
  isURLSearchParams: Nn,
  isTypedArray: In,
  isFileList: Tn,
  forEach: Z,
  merge: Oe,
  extend: xn,
  trim: Rn,
  stripBOM: An,
  inherits: $n,
  toFlatObject: Ln,
  kindOf: Be,
  kindOfTest: L,
  endsWith: Bn,
  toArray: Fn,
  forEachEntry: Dn,
  matchAll: kn,
  isHTMLForm: Un,
  hasOwnProperty: Xe,
  hasOwnProp: Xe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: At,
  freezeMethods: zn,
  toObjectSet: Hn,
  toCamelCase: jn,
  noop: qn,
  toFiniteNumber: Vn,
  findKey: Nt,
  global: Rt,
  isContextDefined: xt,
  ALPHABET: $t,
  generateString: Jn,
  isSpecCompliantForm: Wn,
  toJSONObject: Kn
};
function E(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
l.inherits(E, Error, {
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
      config: l.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Lt = E.prototype, Bt = {};
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
  Bt[e] = { value: e };
});
Object.defineProperties(E, Bt);
Object.defineProperty(Lt, "isAxiosError", { value: !0 });
E.from = (e, t, n, r, s, o) => {
  const i = Object.create(Lt);
  return l.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (a) => a !== "isAxiosError"), E.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Gn = null;
function Se(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function Ft(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ye(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Ft(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Qn(e) {
  return l.isArray(e) && !e.some(Se);
}
const Xn = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function pe(e, t, n) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = l.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, u) {
    return !l.isUndefined(u[y]);
  });
  const r = n.metaTokens, s = n.visitor || p, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null)
      return "";
    if (l.isDate(d))
      return d.toISOString();
    if (!f && l.isBlob(d))
      throw new E("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(d) || l.isTypedArray(d) ? f && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function p(d, y, u) {
    let h = d;
    if (d && !u && typeof d == "object") {
      if (l.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), d = JSON.stringify(d);
      else if (l.isArray(d) && Qn(d) || (l.isFileList(d) || l.endsWith(y, "[]")) && (h = l.toArray(d)))
        return y = Ft(y), h.forEach(function(C, _) {
          !(l.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ye([y], _, o) : i === null ? y : y + "[]",
            c(C)
          );
        }), !1;
    }
    return Se(d) ? !0 : (t.append(Ye(u, y, o), c(d)), !1);
  }
  const m = [], b = Object.assign(Xn, {
    defaultVisitor: p,
    convertValue: c,
    isVisitable: Se
  });
  function g(d, y) {
    if (!l.isUndefined(d)) {
      if (m.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      m.push(d), l.forEach(d, function(h, w) {
        (!(l.isUndefined(h) || h === null) && s.call(
          t,
          h,
          l.isString(w) ? w.trim() : w,
          y,
          b
        )) === !0 && g(h, y ? y.concat(w) : [w]);
      }), m.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function et(e) {
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
function Ie(e, t) {
  this._pairs = [], e && pe(e, this, t);
}
const It = Ie.prototype;
It.append = function(t, n) {
  this._pairs.push([t, n]);
};
It.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, et);
  } : et;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Zn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Dt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Zn, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = l.isURLSearchParams(t) ? t.toString() : new Ie(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Yn {
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
    l.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const tt = Yn, kt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, er = typeof URLSearchParams < "u" ? URLSearchParams : Ie, tr = typeof FormData < "u" ? FormData : null, nr = typeof Blob < "u" ? Blob : null, rr = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), sr = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), x = {
  isBrowser: !0,
  classes: {
    URLSearchParams: er,
    FormData: tr,
    Blob: nr
  },
  isStandardBrowserEnv: rr,
  isStandardBrowserWebWorkerEnv: sr,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function or(e, t) {
  return pe(e, new x.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return x.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ir(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ar(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Ut(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    const a = Number.isFinite(+i), f = o >= n.length;
    return i = !i && l.isArray(s) ? s.length : i, f ? (l.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !l.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && l.isArray(s[i]) && (s[i] = ar(s[i])), !a);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const n = {};
    return l.forEachEntry(e, (r, s) => {
      t(ir(r), s, n, 0);
    }), n;
  }
  return null;
}
const cr = {
  "Content-Type": void 0
};
function lr(e, t, n) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const me = {
  transitional: kt,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = l.isObject(t);
    if (o && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return s && s ? JSON.stringify(Ut(t)) : t;
    if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t))
      return t;
    if (l.isArrayBufferView(t))
      return t.buffer;
    if (l.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return or(t, this.formSerializer).toString();
      if ((a = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return pe(
          a ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), lr(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || me.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && l.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
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
    FormData: x.classes.FormData,
    Blob: x.classes.Blob
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
l.forEach(["delete", "get", "head"], function(t) {
  me.headers[t] = {};
});
l.forEach(["post", "put", "patch"], function(t) {
  me.headers[t] = l.merge(cr);
});
const De = me, ur = l.toObjectSet([
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
]), fr = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && ur[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, nt = Symbol("internals");
function K(e) {
  return e && String(e).trim().toLowerCase();
}
function oe(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(oe) : String(e);
}
function dr(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
function pr(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function be(e, t, n, r, s) {
  if (l.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!l.isString(t)) {
    if (l.isString(r))
      return t.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(t);
  }
}
function mr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function hr(e, t) {
  const n = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class he {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, f, c) {
      const p = K(f);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const m = l.findKey(s, p);
      (!m || s[m] === void 0 || c === !0 || c === void 0 && s[m] !== !1) && (s[m || f] = oe(a));
    }
    const i = (a, f) => l.forEach(a, (c, p) => o(c, p, f));
    return l.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : l.isString(t) && (t = t.trim()) && !pr(t) ? i(fr(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = K(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return dr(s);
        if (l.isFunction(n))
          return n.call(this, s, r);
        if (l.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = K(t), t) {
      const r = l.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || be(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = K(i), i) {
        const a = l.findKey(r, i);
        a && (!n || be(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return l.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || be(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return l.forEach(this, (s, o) => {
      const i = l.findKey(r, o);
      if (i) {
        n[i] = oe(s), delete n[o];
        return;
      }
      const a = t ? mr(o) : String(o).trim();
      a !== o && delete n[o], n[a] = oe(s), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && l.isArray(r) ? r.join(", ") : r);
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
    const r = (this[nt] = this[nt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = K(i);
      r[a] || (hr(s, i), r[a] = !0);
    }
    return l.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
he.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(he.prototype);
l.freezeMethods(he);
const A = he;
function _e(e, t) {
  const n = this || De, r = t || n, s = A.from(r.headers);
  let o = r.data;
  return l.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function jt(e) {
  return !!(e && e.__CANCEL__);
}
function Y(e, t, n) {
  E.call(this, e ?? "canceled", E.ERR_CANCELED, t, n), this.name = "CanceledError";
}
l.inherits(Y, E, {
  __CANCEL__: !0
});
function yr(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new E(
    "Request failed with status code " + n.status,
    [E.ERR_BAD_REQUEST, E.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const gr = x.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, o, i, a) {
        const f = [];
        f.push(n + "=" + encodeURIComponent(r)), l.isNumber(s) && f.push("expires=" + new Date(s).toGMTString()), l.isString(o) && f.push("path=" + o), l.isString(i) && f.push("domain=" + i), a === !0 && f.push("secure"), document.cookie = f.join("; ");
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
function wr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function br(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Mt(e, t) {
  return e && !wr(t) ? br(e, t) : t;
}
const _r = x.isStandardBrowserEnv ? (
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
      const a = l.isString(i) ? s(i) : i;
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
function Er(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function vr(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const c = Date.now(), p = r[o];
    i || (i = c), n[s] = f, r[s] = c;
    let m = o, b = 0;
    for (; m !== s; )
      b += n[m++], m = m % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - i < t)
      return;
    const g = p && c - p;
    return g ? Math.round(b * 1e3 / g) : void 0;
  };
}
function rt(e, t) {
  let n = 0;
  const r = vr(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, a = o - n, f = r(a), c = o <= i;
    n = o;
    const p = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: a,
      rate: f || void 0,
      estimated: f && i && c ? (i - o) / f : void 0,
      event: s
    };
    p[t ? "download" : "upload"] = !0, e(p);
  };
}
const Or = typeof XMLHttpRequest < "u", Sr = Or && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = A.from(e.headers).normalize(), i = e.responseType;
    let a;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    l.isFormData(s) && (x.isStandardBrowserEnv || x.isStandardBrowserWebWorkerEnv) && o.setContentType(!1);
    let c = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(g + ":" + d));
    }
    const p = Mt(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Dt(p, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function m() {
      if (!c)
        return;
      const g = A.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), y = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: g,
        config: e,
        request: c
      };
      yr(function(h) {
        n(h), f();
      }, function(h) {
        r(h), f();
      }, y), c = null;
    }
    if ("onloadend" in c ? c.onloadend = m : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, c.onabort = function() {
      c && (r(new E("Request aborted", E.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new E("Network Error", E.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || kt;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), r(new E(
        d,
        y.clarifyTimeoutError ? E.ETIMEDOUT : E.ECONNABORTED,
        e,
        c
      )), c = null;
    }, x.isStandardBrowserEnv) {
      const g = (e.withCredentials || _r(p)) && e.xsrfCookieName && gr.read(e.xsrfCookieName);
      g && o.set(e.xsrfHeaderName, g);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && l.forEach(o.toJSON(), function(d, y) {
      c.setRequestHeader(y, d);
    }), l.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", rt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", rt(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (g) => {
      c && (r(!g || g.type ? new Y(null, e, c) : g), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const b = Er(p);
    if (b && x.protocols.indexOf(b) === -1) {
      r(new E("Unsupported protocol " + b + ":", E.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, ie = {
  http: Gn,
  xhr: Sr
};
l.forEach(ie, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Tr = {
  getAdapter: (e) => {
    e = l.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let s = 0; s < t && (n = e[s], !(r = l.isString(n) ? ie[n.toLowerCase()] : n)); s++)
      ;
    if (!r)
      throw r === !1 ? new E(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        l.hasOwnProp(ie, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!l.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: ie
};
function Ee(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Y(null, e);
}
function st(e) {
  return Ee(e), e.headers = A.from(e.headers), e.data = _e.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Tr.getAdapter(e.adapter || De.adapter)(e).then(function(r) {
    return Ee(e), r.data = _e.call(
      e,
      e.transformResponse,
      r
    ), r.headers = A.from(r.headers), r;
  }, function(r) {
    return jt(r) || (Ee(e), r && r.response && (r.response.data = _e.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = A.from(r.response.headers))), Promise.reject(r);
  });
}
const ot = (e) => e instanceof A ? e.toJSON() : e;
function q(e, t) {
  t = t || {};
  const n = {};
  function r(c, p, m) {
    return l.isPlainObject(c) && l.isPlainObject(p) ? l.merge.call({ caseless: m }, c, p) : l.isPlainObject(p) ? l.merge({}, p) : l.isArray(p) ? p.slice() : p;
  }
  function s(c, p, m) {
    if (l.isUndefined(p)) {
      if (!l.isUndefined(c))
        return r(void 0, c, m);
    } else
      return r(c, p, m);
  }
  function o(c, p) {
    if (!l.isUndefined(p))
      return r(void 0, p);
  }
  function i(c, p) {
    if (l.isUndefined(p)) {
      if (!l.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, p);
  }
  function a(c, p, m) {
    if (m in t)
      return r(c, p);
    if (m in e)
      return r(void 0, c);
  }
  const f = {
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
    headers: (c, p) => s(ot(c), ot(p), !0)
  };
  return l.forEach(Object.keys(e).concat(Object.keys(t)), function(p) {
    const m = f[p] || s, b = m(e[p], t[p], p);
    l.isUndefined(b) && m !== a || (n[p] = b);
  }), n;
}
const zt = "1.3.4", ke = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ke[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const it = {};
ke.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + zt + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new E(
        s(i, " has been removed" + (n ? " in " + n : "")),
        E.ERR_DEPRECATED
      );
    return n && !it[i] && (it[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
function Cr(e, t, n) {
  if (typeof e != "object")
    throw new E("options must be an object", E.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const a = e[o], f = a === void 0 || i(a, o, e);
      if (f !== !0)
        throw new E("option " + o + " must be " + f, E.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new E("Unknown option " + o, E.ERR_BAD_OPTION);
  }
}
const Te = {
  assertOptions: Cr,
  validators: ke
}, F = Te.validators;
class ce {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new tt(),
      response: new tt()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = q(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Te.assertOptions(r, {
      silentJSONParsing: F.transitional(F.boolean),
      forcedJSONParsing: F.transitional(F.boolean),
      clarifyTimeoutError: F.transitional(F.boolean)
    }, !1), s !== void 0 && Te.assertOptions(s, {
      encode: F.function,
      serialize: F.function
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = o && l.merge(
      o.common,
      o[n.method]
    ), i && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete o[d];
      }
    ), n.headers = A.concat(i, o);
    const a = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (f = f && y.synchronous, a.unshift(y.fulfilled, y.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(y) {
      c.push(y.fulfilled, y.rejected);
    });
    let p, m = 0, b;
    if (!f) {
      const d = [st.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, c), b = d.length, p = Promise.resolve(n); m < b; )
        p = p.then(d[m++], d[m++]);
      return p;
    }
    b = a.length;
    let g = n;
    for (m = 0; m < b; ) {
      const d = a[m++], y = a[m++];
      try {
        g = d(g);
      } catch (u) {
        y.call(this, u);
        break;
      }
    }
    try {
      p = st.call(this, g);
    } catch (d) {
      return Promise.reject(d);
    }
    for (m = 0, b = c.length; m < b; )
      p = p.then(c[m++], c[m++]);
    return p;
  }
  getUri(t) {
    t = q(this.defaults, t);
    const n = Mt(t.baseURL, t.url);
    return Dt(n, t.params, t.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(t) {
  ce.prototype[t] = function(n, r) {
    return this.request(q(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, a) {
      return this.request(q(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  ce.prototype[t] = n(), ce.prototype[t + "Form"] = n(!0);
});
const ae = ce;
class Ue {
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
      r.reason || (r.reason = new Y(o, i, a), n(r.reason));
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
      token: new Ue(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Pr = Ue;
function Nr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Rr(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const Ce = {
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
Object.entries(Ce).forEach(([e, t]) => {
  Ce[t] = e;
});
const xr = Ce;
function Ht(e) {
  const t = new ae(e), n = St(ae.prototype.request, t);
  return l.extend(n, ae.prototype, t, { allOwnKeys: !0 }), l.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ht(q(e, s));
  }, n;
}
const O = Ht(De);
O.Axios = ae;
O.CanceledError = Y;
O.CancelToken = Pr;
O.isCancel = jt;
O.VERSION = zt;
O.toFormData = pe;
O.AxiosError = E;
O.Cancel = O.CanceledError;
O.all = function(t) {
  return Promise.all(t);
};
O.spread = Nr;
O.isAxiosError = Rr;
O.mergeConfig = q;
O.AxiosHeaders = A;
O.formToJSON = (e) => Ut(l.isHTMLForm(e) ? new FormData(e) : e);
O.HttpStatusCode = xr;
O.default = O;
const ve = O;
function Ar(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var s = e[t];
    r[s[0]] = s[1];
  }
  return r;
}
var at;
const ee = typeof window < "u", le = (e) => typeof e == "number", $r = (e) => typeof e == "string", Lr = () => {
};
ee && ((at = window == null ? void 0 : window.navigator) != null && at.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function je(e) {
  return typeof e == "function" ? e() : v(e);
}
function Br(e) {
  return e;
}
function Me(e) {
  return on() ? (an(e), !0) : !1;
}
function Fr(e, t = !0) {
  H() ? Ae(e) : t ? e() : wt(e);
}
function Ir(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, s = T(!1);
  let o = null;
  function i() {
    o && (clearTimeout(o), o = null);
  }
  function a() {
    s.value = !1, i();
  }
  function f(...c) {
    i(), s.value = !0, o = setTimeout(() => {
      s.value = !1, o = null, e(...c);
    }, je(t));
  }
  return r && (s.value = !0, ee && f()), Me(a), {
    isPending: cn(s),
    start: f,
    stop: a
  };
}
function qt(e) {
  var t;
  const n = je(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Vt = ee ? window : void 0;
function Dr(...e) {
  let t, n, r, s;
  if ($r(e[0]) || Array.isArray(e[0]) ? ([n, r, s] = e, t = Vt) : [t, n, r, s] = e, !t)
    return Lr;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], i = () => {
    o.forEach((p) => p()), o.length = 0;
  }, a = (p, m, b, g) => (p.addEventListener(m, b, g), () => p.removeEventListener(m, b, g)), f = X(() => [qt(t), je(s)], ([p, m]) => {
    i(), p && o.push(...n.flatMap((b) => r.map((g) => a(p, b, g, m))));
  }, { immediate: !0, flush: "post" }), c = () => {
    f(), i();
  };
  return Me(c), c;
}
function kr(e, t = !1) {
  const n = T(), r = () => n.value = Boolean(e());
  return r(), Fr(r, t), n;
}
const Pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ne = "__vueuse_ssr_handlers__";
Pe[Ne] = Pe[Ne] || {};
Pe[Ne];
var ct = Object.getOwnPropertySymbols, Ur = Object.prototype.hasOwnProperty, jr = Object.prototype.propertyIsEnumerable, Mr = (e, t) => {
  var n = {};
  for (var r in e)
    Ur.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ct)
    for (var r of ct(e))
      t.indexOf(r) < 0 && jr.call(e, r) && (n[r] = e[r]);
  return n;
};
function zr(e, t, n = {}) {
  const r = n, { window: s = Vt } = r, o = Mr(r, ["window"]);
  let i;
  const a = kr(() => s && "ResizeObserver" in s), f = () => {
    i && (i.disconnect(), i = void 0);
  }, c = X(() => qt(e), (m) => {
    f(), a.value && s && m && (i = new ResizeObserver(t), i.observe(m, o));
  }, { immediate: !0, flush: "post" }), p = () => {
    f(), c();
  };
  return Me(p), {
    isSupported: a,
    stop: p
  };
}
var lt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(lt || (lt = {}));
var Hr = Object.defineProperty, ut = Object.getOwnPropertySymbols, qr = Object.prototype.hasOwnProperty, Vr = Object.prototype.propertyIsEnumerable, ft = (e, t, n) => t in e ? Hr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Jr = (e, t) => {
  for (var n in t || (t = {}))
    qr.call(t, n) && ft(e, n, t[n]);
  if (ut)
    for (var n of ut(t))
      Vr.call(t, n) && ft(e, n, t[n]);
  return e;
};
const Wr = {
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
Jr({
  linear: Br
}, Wr);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Kr = Object.prototype.hasOwnProperty, dt = (e, t) => Kr.call(e, t), Re = (e) => typeof e == "function", Q = (e) => typeof e == "string", Jt = (e) => e !== null && typeof e == "object", Gr = (e) => e === void 0, Qr = (e) => typeof Element > "u" ? !1 : e instanceof Element, Xr = (e) => Q(e) ? !Number.isNaN(Number(e)) : !1, pt = (e) => Object.keys(e);
class Zr extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ze(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Q(e) ? new Zr(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Yr = "utils/dom/style";
function es(e, t = "px") {
  if (!e)
    return "";
  if (le(e) || Xr(e))
    return `${e}${t}`;
  if (Q(e))
    return e;
  ze(Yr, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.0.10 */
var te = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [r, s] of t)
    n[r] = s;
  return n;
}, ts = {
  name: "CircleCloseFilled"
}, ns = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, rs = /* @__PURE__ */ k("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1), ss = [
  rs
];
function os(e, t, n, r, s, o) {
  return N(), $("svg", ns, ss);
}
var Wt = /* @__PURE__ */ te(ts, [["render", os], ["__file", "circle-close-filled.vue"]]), is = {
  name: "Close"
}, as = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, cs = /* @__PURE__ */ k("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), ls = [
  cs
];
function us(e, t, n, r, s, o) {
  return N(), $("svg", as, ls);
}
var fs = /* @__PURE__ */ te(is, [["render", us], ["__file", "close.vue"]]), ds = {
  name: "InfoFilled"
}, ps = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ms = /* @__PURE__ */ k("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1), hs = [
  ms
];
function ys(e, t, n, r, s, o) {
  return N(), $("svg", ps, hs);
}
var Kt = /* @__PURE__ */ te(ds, [["render", ys], ["__file", "info-filled.vue"]]), gs = {
  name: "SuccessFilled"
}, ws = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, bs = /* @__PURE__ */ k("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), _s = [
  bs
];
function Es(e, t, n, r, s, o) {
  return N(), $("svg", ws, _s);
}
var Gt = /* @__PURE__ */ te(gs, [["render", Es], ["__file", "success-filled.vue"]]), vs = {
  name: "WarningFilled"
}, Os = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ss = /* @__PURE__ */ k("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1), Ts = [
  Ss
];
function Cs(e, t, n, r, s, o) {
  return N(), $("svg", Os, Ts);
}
var Qt = /* @__PURE__ */ te(vs, [["render", Cs], ["__file", "warning-filled.vue"]]);
const Xt = "__epPropKey", D = (e) => e, Ps = (e) => Jt(e) && !!e[Xt], Zt = (e, t) => {
  if (!Jt(e) || Ps(e))
    return e;
  const { values: n, required: r, default: s, type: o, validator: i } = e, f = {
    type: o,
    required: !!r,
    validator: n || i ? (c) => {
      let p = !1, m = [];
      if (n && (m = Array.from(n), dt(e, "default") && m.push(s), p || (p = m.includes(c))), i && (p || (p = i(c))), !p && m.length > 0) {
        const b = [...new Set(m)].map((g) => JSON.stringify(g)).join(", ");
        ln(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${b}], got value ${JSON.stringify(c)}.`);
      }
      return p;
    } : void 0,
    [Xt]: !0
  };
  return dt(e, "default") && (f.default = s), f;
}, ye = (e) => Ar(Object.entries(e).map(([t, n]) => [
  t,
  Zt(n, t)
])), Ns = D([
  String,
  Object,
  Function
]), Rs = {
  Close: fs,
  SuccessFilled: Gt,
  InfoFilled: Kt,
  WarningFilled: Qt,
  CircleCloseFilled: Wt
}, mt = {
  success: Gt,
  warning: Qt,
  error: Wt,
  info: Kt
}, Yt = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, xs = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), As = {
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
}, $s = ["", "default", "small", "large"], Ls = (e) => e, en = Symbol(), ue = T();
function He(e, t = void 0) {
  const n = H() ? fn(en, ue) : ue;
  return e ? S(() => {
    var r, s;
    return (s = (r = n.value) == null ? void 0 : r[e]) != null ? s : t;
  }) : n;
}
const Bs = (e, t, n = !1) => {
  var r;
  const s = !!H(), o = s ? He() : void 0, i = (r = t == null ? void 0 : t.provide) != null ? r : s ? un : void 0;
  if (!i) {
    ze("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const a = S(() => {
    const f = v(e);
    return o != null && o.value ? Fs(o.value, f) : f;
  });
  return i(en, a), (n || !ue.value) && (ue.value = a.value), a;
}, Fs = (e, t) => {
  var n;
  const r = [.../* @__PURE__ */ new Set([...pt(e), ...pt(t)])], s = {};
  for (const o of r)
    s[o] = (n = t[o]) != null ? n : e[o];
  return s;
}, Is = Zt({
  type: String,
  values: $s,
  required: !1
}), Ds = "el", ks = "is-", j = (e, t, n, r, s) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), r && (o += `__${r}`), s && (o += `--${s}`), o;
}, qe = (e) => {
  const t = He("namespace", Ds);
  return {
    namespace: t,
    b: (d = "") => j(t.value, e, d, "", ""),
    e: (d) => d ? j(t.value, e, "", d, "") : "",
    m: (d) => d ? j(t.value, e, "", "", d) : "",
    be: (d, y) => d && y ? j(t.value, e, d, y, "") : "",
    em: (d, y) => d && y ? j(t.value, e, "", d, y) : "",
    bm: (d, y) => d && y ? j(t.value, e, d, "", y) : "",
    bem: (d, y, u) => d && y && u ? j(t.value, e, d, y, u) : "",
    is: (d, ...y) => {
      const u = y.length >= 1 ? y[0] : !0;
      return d && u ? `${ks}${d}` : "";
    },
    cssVar: (d) => {
      const y = {};
      for (const u in d)
        d[u] && (y[`--${t.value}-${u}`] = d[u]);
      return y;
    },
    cssVarName: (d) => `--${t.value}-${d}`,
    cssVarBlock: (d) => {
      const y = {};
      for (const u in d)
        d[u] && (y[`--${t.value}-${e}-${u}`] = d[u]);
      return y;
    },
    cssVarBlockName: (d) => `--${t.value}-${e}-${d}`
  };
}, ht = T(0), Us = () => {
  const e = He("zIndex", 2e3), t = S(() => e.value + ht.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (ht.value++, t.value)
  };
};
var Ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
const js = ye({
  size: {
    type: D([Number, String])
  },
  color: {
    type: String
  }
}), Ms = M({
  name: "ElIcon",
  inheritAttrs: !1
}), zs = /* @__PURE__ */ M({
  ...Ms,
  props: js,
  setup(e) {
    const t = e, n = qe("icon"), r = S(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: Gr(s) ? void 0 : es(s),
        "--color": o
      };
    });
    return (s, o) => (N(), $("i", dn({
      class: v(n).b(),
      style: v(r)
    }, s.$attrs), [
      fe(s.$slots, "default")
    ], 16));
  }
});
var Hs = /* @__PURE__ */ Ve(zs, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const yt = Yt(Hs), qs = ye({
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
}), Vs = ["textContent"], Js = M({
  name: "ElBadge"
}), Ws = /* @__PURE__ */ M({
  ...Js,
  props: qs,
  setup(e, { expose: t }) {
    const n = e, r = qe("badge"), s = S(() => n.isDot ? "" : le(n.value) && le(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`);
    return t({
      content: s
    }), (o, i) => (N(), $("div", {
      class: I(v(r).b())
    }, [
      fe(o.$slots, "default"),
      $e(bt, {
        name: `${v(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: re(() => [
          _t(k("sup", {
            class: I([
              v(r).e("content"),
              v(r).em("content", o.type),
              v(r).is("fixed", !!o.$slots.default),
              v(r).is("dot", o.isDot)
            ]),
            textContent: Et(v(s))
          }, null, 10, Vs), [
            [vt, !o.hidden && (v(s) || o.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var Ks = /* @__PURE__ */ Ve(Ws, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const Gs = Yt(Ks), xe = {}, Qs = ye({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: D(Object)
  },
  size: Is,
  button: {
    type: D(Object)
  },
  experimentalFeatures: {
    type: D(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: D(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
});
M({
  name: "ElConfigProvider",
  props: Qs,
  setup(e, { slots: t }) {
    X(() => e.message, (r) => {
      Object.assign(xe, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Bs(e);
    return () => fe(t, "default", { config: n == null ? void 0 : n.value });
  }
});
const tn = ["success", "info", "warning", "error"], P = Ls({
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
  appendTo: ee ? document.body : void 0
}), Xs = ye({
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
    type: Ns,
    default: P.icon
  },
  id: {
    type: String,
    default: P.id
  },
  message: {
    type: D([
      String,
      Object,
      Function
    ]),
    default: P.message
  },
  onClose: {
    type: D(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: P.showClose
  },
  type: {
    type: String,
    values: tn,
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
}), Zs = {
  destroy: () => !0
}, R = pn([]), Ys = (e) => {
  const t = R.findIndex((s) => s.id === e), n = R[t];
  let r;
  return t > 0 && (r = R[t - 1]), { current: n, prev: r };
}, eo = (e) => {
  const { prev: t } = Ys(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, to = (e, t) => R.findIndex((r) => r.id === e) > 0 ? 20 : t, no = ["id"], ro = ["innerHTML"], so = M({
  name: "ElMessage"
}), oo = /* @__PURE__ */ M({
  ...so,
  props: Xs,
  emits: Zs,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = Rs, s = qe("message"), o = T(), i = T(!1), a = T(0);
    let f;
    const c = S(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), p = S(() => {
      const _ = n.type;
      return { [s.bm("icon", _)]: _ && mt[_] };
    }), m = S(() => n.icon || mt[n.type] || ""), b = S(() => eo(n.id)), g = S(() => to(n.id, n.offset) + b.value), d = S(() => a.value + g.value), y = S(() => ({
      top: `${g.value}px`,
      zIndex: n.zIndex
    }));
    function u() {
      n.duration !== 0 && ({ stop: f } = Ir(() => {
        w();
      }, n.duration));
    }
    function h() {
      f == null || f();
    }
    function w() {
      i.value = !1;
    }
    function C({ code: _ }) {
      _ === As.esc && w();
    }
    return Ae(() => {
      u(), i.value = !0;
    }), X(() => n.repeatNum, () => {
      h(), u();
    }), Dr(document, "keydown", C), zr(o, () => {
      a.value = o.value.getBoundingClientRect().height;
    }), t({
      visible: i,
      bottom: d,
      close: w
    }), (_, B) => (N(), W(bt, {
      name: v(s).b("fade"),
      onBeforeLeave: _.onClose,
      onAfterLeave: B[0] || (B[0] = (Je) => _.$emit("destroy")),
      persisted: ""
    }, {
      default: re(() => [
        _t(k("div", {
          id: _.id,
          ref_key: "messageRef",
          ref: o,
          class: I([
            v(s).b(),
            { [v(s).m(_.type)]: _.type && !_.icon },
            v(s).is("center", _.center),
            v(s).is("closable", _.showClose),
            _.customClass
          ]),
          style: mn(v(y)),
          role: "alert",
          onMouseenter: h,
          onMouseleave: u
        }, [
          _.repeatNum > 1 ? (N(), W(v(Gs), {
            key: 0,
            value: _.repeatNum,
            type: v(c),
            class: I(v(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ne("v-if", !0),
          v(m) ? (N(), W(v(yt), {
            key: 1,
            class: I([v(s).e("icon"), v(p)])
          }, {
            default: re(() => [
              (N(), W(hn(v(m))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          fe(_.$slots, "default", {}, () => [
            _.dangerouslyUseHTMLString ? (N(), $(yn, { key: 1 }, [
              ne(" Caution here, message could've been compromised, never use user's input as message "),
              k("p", {
                class: I(v(s).e("content")),
                innerHTML: _.message
              }, null, 10, ro)
            ], 2112)) : (N(), $("p", {
              key: 0,
              class: I(v(s).e("content"))
            }, Et(_.message), 3))
          ]),
          _.showClose ? (N(), W(v(yt), {
            key: 2,
            class: I(v(s).e("closeBtn")),
            onClick: gn(w, ["stop"])
          }, {
            default: re(() => [
              $e(v(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ne("v-if", !0)
        ], 46, no), [
          [vt, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var io = /* @__PURE__ */ Ve(oo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let ao = 1;
const nn = (e) => {
  const t = !e || Q(e) || Ot(e) || Re(e) ? { message: e } : e, n = {
    ...P,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Q(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    Qr(r) || (ze("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), r = document.body), n.appendTo = r;
  }
  return n;
}, co = (e) => {
  const t = R.indexOf(e);
  if (t === -1)
    return;
  R.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, lo = ({ appendTo: e, ...t }, n) => {
  const { nextZIndex: r } = Us(), s = `message_${ao++}`, o = t.onClose, i = document.createElement("div"), a = {
    ...t,
    zIndex: r() + t.zIndex,
    id: s,
    onClose: () => {
      o == null || o(), co(m);
    },
    onDestroy: () => {
      Qe(null, i);
    }
  }, f = $e(io, a, Re(a.message) || Ot(a.message) ? {
    default: Re(a.message) ? a.message : () => a.message
  } : null);
  f.appContext = n || V._context, Qe(f, i), e.appendChild(i.firstElementChild);
  const c = f.component, m = {
    id: s,
    vnode: f,
    vm: c,
    handler: {
      close: () => {
        c.exposed.visible.value = !1;
      }
    },
    props: f.component.props
  };
  return m;
}, V = (e = {}, t) => {
  if (!ee)
    return { close: () => {
    } };
  if (le(xe.max) && R.length >= xe.max)
    return { close: () => {
    } };
  const n = nn(e);
  if (n.grouping && R.length) {
    const s = R.find(({ vnode: o }) => {
      var i;
      return ((i = o.props) == null ? void 0 : i.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  const r = lo(n, t);
  return R.push(r), r.handler;
};
tn.forEach((e) => {
  V[e] = (t = {}, n) => {
    const r = nn(t);
    return V({ ...r, type: e }, n);
  };
});
function uo(e) {
  for (const t of R)
    (!e || e === t.props.type) && t.handler.close();
}
V.closeAll = uo;
V._context = null;
const gt = xs(V, "$message");
function mo({
  instance: e = ve,
  beforeRequest: t,
  beforeResponse: n,
  responseHandler: r,
  errorHandler: s,
  errorResponse: o,
  excludePeddings: i = []
} = {}) {
  let a = e;
  a || (a = ve, a.defaults.timeout = 1e4, a.defaults.withCredentials = !0, a.defaults.headers = {
    // 设置默认请求头
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=UTF-8"
  });
  const f = (u) => {
    s ? s(u) : (gt.closeAll(), gt.error(u));
  }, c = [], p = ve.CancelToken, m = (u) => {
    const h = `${u.url}&${u.method}`;
    for (const w in c)
      c[w].url === h && !i.includes(h) && (c[w].fn(), c.splice(w, 1));
  };
  a.interceptors.request.use(async (u) => {
    const h = t ? await t(u) : u;
    return m(h), h.cancelToken = new p((w) => {
      c.push({ url: `${h.url}&${h.method}`, fn: w });
    }), h;
  }), a.interceptors.response.use(
    async (u) => {
      if (m(u.config), n)
        return n ? await n(u) : u;
      if (r)
        return await r(u);
      const { data: h, data: { code: w }, config: C } = u || {};
      return [0, 1001].includes(w) ? h : (h && o(h, C), f(u.message));
    },
    async (u) => {
      if (u.code === "ERR_CANCELED")
        return "";
      if (u && u.response) {
        const { data: h, status: w, config: C } = u.response;
        if (w && o) {
          const [_] = (h == null ? void 0 : h.errors) || [];
          await o(_ ?? h, C);
        }
        if (h.errors && h.errors.length)
          u.message = h.errors[0].message || h.message;
        else {
          const _ = {
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
          u.message = _[w];
        }
        f(u.message);
      }
      return u.message && u.message.includes("timeout of") && (u.message = "网络超时, 请检查网络！"), u.message ? Promise.reject(u) : u;
    }
  );
  const b = (u, h = !1) => h ? u : typeof u.data < "u" && u.data, g = async (u, h, w = {}, C = "get", _ = !1) => {
    try {
      const B = {};
      if (h) {
        const We = (z) => /\[|\]/g.test(z);
        Object.keys(h).forEach((z) => {
          B[z] = h[z] && We ? [...h[z].toString()].map((ge) => We(ge) ? encodeURIComponent(ge) : ge).join("") : h[z];
        });
      }
      const Je = ["post", "put"].includes(C) ? await a({
        method: C,
        url: u,
        data: h,
        ...w
      }) : await a[C](u, { params: B, ...w });
      return b(Je, _);
    } catch (B) {
      if (f(B.message), _)
        return B;
    }
  };
  return {
    $api: {
      get: (u, h, w) => g(u, h, w, "get"),
      post: (u, h, w) => g(u, h, w, "post"),
      put: (u, h, w) => g(u, h, w, "put"),
      delete: (u, h, w) => g(u, h, w, "delete"),
      all: (u, h, w) => g(u, h, w, "all")
    },
    $http: {
      get: (u, h, w) => g(u, h, w, "get", !0),
      post: (u, h, w) => g(u, h, w, "post", !0),
      put: (u, h, w) => g(u, h, w, "put", !0),
      delete: (u, h, w) => g(u, h, w, "delete", !0),
      all: (u, h, w) => g(u, h, w, "all", !0)
    }
  };
}
function ho() {
  const e = H(), { globalProperties: t } = e.appContext.config, { $message: n, $messageBox: r } = t, s = (a, f, c) => {
    n.closeAll(), n({ message: a, type: f, ...c });
  };
  return {
    message: {
      error: (a, f) => s(a, "error", f),
      success: (a, f) => s(a, "success", f),
      warning: (a, f) => s(a, "warning", f),
      info: (a, f) => s(a, "info", f),
      close: () => n.closeAll()
    },
    messageBox: {
      confirm: ({
        msg: a,
        title: f = "提示",
        type: c = "warning",
        ...p
      }) => new Promise((m, b) => {
        parent.window.postMessage("openMask()", "*"), window.top.postMessage("openMask()", "*"), r.confirm(a, f, {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          buttonSize: "",
          type: c,
          ...p
        }).then(() => m(!0)).catch(() => b()).finally(() => {
          parent.window.postMessage("closeMask()", "*"), window.top.postMessage("closeMask()", "*");
        });
      }),
      alert: ({ msg: a, title: f = "提示", type: c = "warning" }, p) => {
        r.alert(a, f, {
          confirmButtonText: "确认",
          type: c,
          callback: (m) => p(m)
        });
      }
    }
  };
}
function yo() {
  const e = T(null);
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
function go() {
  const e = T(1), t = T(1), n = T(1), r = T([]), s = T(!0), o = T(!1);
  return {
    totalPage: e,
    totalRecord: t,
    currentPage: n,
    listData: r,
    tableData: r,
    loading: s,
    getNowPage: (f = [], c = r.value) => (n.value > 1 && (c.length === 1 || c.length === f.length) && n.value--, n.value),
    setListAndPage: (f) => {
      const {
        records: c = [],
        totalPage: p = 1,
        pageNo: m = 1,
        pageIndex: b,
        totalRecord: g = 1
      } = f || {};
      r.value = c, s.value = !1, e.value = p, t.value = g, n.value = b ?? m, o.value = !c.length;
    },
    isNullData: o
  };
}
function wo() {
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
const bo = {
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
export {
  po as useCommon,
  wo as useFilters,
  yo as useForm,
  ho as useMessage,
  go as usePage,
  mo as useRequest,
  bo as vOnClickActive
};
