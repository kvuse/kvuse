import { getCurrentInstance as J, reactive as Fn, watchEffect as it, computed as E, toRefs as at, nextTick as Lt, ref as T, watch as se, onMounted as Ue, onUnmounted as In, unref as w, getCurrentScope as Dn, onScopeDispose as Ln, readonly as Bn, openBlock as x, createElementBlock as D, createElementVNode as k, warn as jn, inject as we, isRef as Mn, provide as kn, defineComponent as q, renderSlot as _e, mergeProps as zn, normalizeClass as j, createVNode as He, Transition as Bt, withCtx as de, withDirectives as jt, toDisplayString as Mt, vShow as kt, shallowReactive as Un, createBlock as X, normalizeStyle as Hn, createCommentVNode as fe, resolveDynamicComponent as qn, Fragment as Vn, withModifiers as Jn, isVNode as zt, render as ct } from "vue";
function va() {
  const e = J(), { globalProperties: t } = e.appContext.config, {
    $route: n,
    $pinia: r,
    $store: o,
    $router: s
  } = t, i = s, a = n, f = Fn({
    routeRef: n
  });
  it(() => {
    const { $route: u } = t;
    f.routeRef = u;
  });
  const c = E(() => f.routeRef.name), d = E(() => f.routeRef.query), m = E(() => f.routeRef.params), _ = (u, p) => {
    p ? i.push({ path: u, ...p }) : u.includes("/") ? i.push(u) : i.push({ name: u });
  }, y = (u, p) => {
    p ? i.replace({ path: u, ...p }) : u.includes("/") ? i.replace(u) : i.replace({ name: u });
  }, g = E(() => !1), h = (u) => e.proxy[u];
  return {
    ...at(f),
    route: a,
    router: i,
    routeQuery: d,
    routeParams: m,
    routerName: c,
    loadPage: _,
    isDev: g,
    replacePage: y,
    globalProperties: t,
    resetParams: h,
    store: o,
    pinia: r,
    nextTick: Lt,
    ref: T,
    watch: se,
    onMounted: Ue,
    onUnmounted: In,
    watchEffect: it,
    getCurrentInstance: J,
    toRefs: at
  };
}
function Ut(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ht } = Object.prototype, { getPrototypeOf: qe } = Object, Ve = ((e) => (t) => {
  const n = Ht.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), L = (e) => (e = e.toLowerCase(), (t) => Ve(t) === e), ve = (e) => (t) => typeof t === e, { isArray: Q } = Array, te = ve("undefined");
function Kn(e) {
  return e !== null && !te(e) && e.constructor !== null && !te(e.constructor) && z(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qt = L("ArrayBuffer");
function Wn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qt(e.buffer), t;
}
const Gn = ve("string"), z = ve("function"), Vt = ve("number"), Je = (e) => e !== null && typeof e == "object", Qn = (e) => e === !0 || e === !1, pe = (e) => {
  if (Ve(e) !== "object")
    return !1;
  const t = qe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Zn = L("Date"), Xn = L("File"), Yn = L("Blob"), er = L("FileList"), tr = (e) => Je(e) && z(e.pipe), nr = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Ht.call(e) === t || z(e.toString) && e.toString() === t);
}, rr = L("URLSearchParams"), or = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ie(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Q(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function Jt(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Kt = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Wt = (e) => !te(e) && e !== Kt;
function De() {
  const { caseless: e } = Wt(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && Jt(t, o) || o;
    pe(t[s]) && pe(r) ? t[s] = De(t[s], r) : pe(r) ? t[s] = De({}, r) : Q(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && ie(arguments[r], n);
  return t;
}
const sr = (e, t, n, { allOwnKeys: r } = {}) => (ie(t, (o, s) => {
  n && z(o) ? e[s] = Ut(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), ir = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ar = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, cr = (e, t, n, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && qe(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, lr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, ur = (e) => {
  if (!e)
    return null;
  if (Q(e))
    return e;
  let t = e.length;
  if (!Vt(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, fr = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && qe(Uint8Array)), dr = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, pr = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, hr = L("HTMLFormElement"), mr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), lt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), gr = L("RegExp"), Gt = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ie(n, (o, s) => {
    t(o, s, e) !== !1 && (r[s] = o);
  }), Object.defineProperties(e, r);
}, yr = (e) => {
  Gt(e, (t, n) => {
    if (z(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (z(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, br = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Q(e) ? r(e) : r(String(e).split(t)), n;
}, wr = () => {
}, _r = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ne = "abcdefghijklmnopqrstuvwxyz", ut = "0123456789", Qt = {
  DIGIT: ut,
  ALPHA: Ne,
  ALPHA_DIGIT: Ne + Ne.toUpperCase() + ut
}, vr = (e = 16, t = Qt.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Er(e) {
  return !!(e && z(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Or = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Je(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = Q(r) ? [] : {};
        return ie(r, (i, a) => {
          const f = n(i, o + 1);
          !te(f) && (s[a] = f);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, l = {
  isArray: Q,
  isArrayBuffer: qt,
  isBuffer: Kn,
  isFormData: nr,
  isArrayBufferView: Wn,
  isString: Gn,
  isNumber: Vt,
  isBoolean: Qn,
  isObject: Je,
  isPlainObject: pe,
  isUndefined: te,
  isDate: Zn,
  isFile: Xn,
  isBlob: Yn,
  isRegExp: gr,
  isFunction: z,
  isStream: tr,
  isURLSearchParams: rr,
  isTypedArray: fr,
  isFileList: er,
  forEach: ie,
  merge: De,
  extend: sr,
  trim: or,
  stripBOM: ir,
  inherits: ar,
  toFlatObject: cr,
  kindOf: Ve,
  kindOfTest: L,
  endsWith: lr,
  toArray: ur,
  forEachEntry: dr,
  matchAll: pr,
  isHTMLForm: hr,
  hasOwnProperty: lt,
  hasOwnProp: lt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Gt,
  freezeMethods: yr,
  toObjectSet: br,
  toCamelCase: mr,
  noop: wr,
  toFiniteNumber: _r,
  findKey: Jt,
  global: Kt,
  isContextDefined: Wt,
  ALPHABET: Qt,
  generateString: vr,
  isSpecCompliantForm: Er,
  toJSONObject: Or
};
function v(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
l.inherits(v, Error, {
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
const Zt = v.prototype, Xt = {};
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
  Xt[e] = { value: e };
});
Object.defineProperties(v, Xt);
Object.defineProperty(Zt, "isAxiosError", { value: !0 });
v.from = (e, t, n, r, o, s) => {
  const i = Object.create(Zt);
  return l.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (a) => a !== "isAxiosError"), v.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Sr = null;
function Le(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function Yt(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ft(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Yt(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Tr(e) {
  return l.isArray(e) && !e.some(Le);
}
const Cr = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ee(e, t, n) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = l.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, u) {
    return !l.isUndefined(u[h]);
  });
  const r = n.metaTokens, o = n.visitor || d, s = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null)
      return "";
    if (l.isDate(g))
      return g.toISOString();
    if (!f && l.isBlob(g))
      throw new v("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(g) || l.isTypedArray(g) ? f && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function d(g, h, u) {
    let p = g;
    if (g && !u && typeof g == "object") {
      if (l.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), g = JSON.stringify(g);
      else if (l.isArray(g) && Tr(g) || (l.isFileList(g) || l.endsWith(h, "[]")) && (p = l.toArray(g)))
        return h = Yt(h), p.forEach(function(C, N) {
          !(l.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? ft([h], N, s) : i === null ? h : h + "[]",
            c(C)
          );
        }), !1;
    }
    return Le(g) ? !0 : (t.append(ft(u, h, s), c(g)), !1);
  }
  const m = [], _ = Object.assign(Cr, {
    defaultVisitor: d,
    convertValue: c,
    isVisitable: Le
  });
  function y(g, h) {
    if (!l.isUndefined(g)) {
      if (m.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      m.push(g), l.forEach(g, function(p, b) {
        (!(l.isUndefined(p) || p === null) && o.call(
          t,
          p,
          l.isString(b) ? b.trim() : b,
          h,
          _
        )) === !0 && y(p, h ? h.concat(b) : [b]);
      }), m.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function dt(e) {
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
function Ke(e, t) {
  this._pairs = [], e && Ee(e, this, t);
}
const en = Ke.prototype;
en.append = function(t, n) {
  this._pairs.push([t, n]);
};
en.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, dt);
  } : dt;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Pr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function tn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Pr, o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = l.isURLSearchParams(t) ? t.toString() : new Ke(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class xr {
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
const pt = xr, nn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Nr = typeof URLSearchParams < "u" ? URLSearchParams : Ke, Ar = typeof FormData < "u" ? FormData : null, Rr = typeof Blob < "u" ? Blob : null, $r = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Fr = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), R = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Nr,
    FormData: Ar,
    Blob: Rr
  },
  isStandardBrowserEnv: $r,
  isStandardBrowserWebWorkerEnv: Fr,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Ir(e, t) {
  return Ee(e, new R.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return R.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Dr(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Lr(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function rn(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    const a = Number.isFinite(+i), f = s >= n.length;
    return i = !i && l.isArray(o) ? o.length : i, f ? (l.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !l.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && l.isArray(o[i]) && (o[i] = Lr(o[i])), !a);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const n = {};
    return l.forEachEntry(e, (r, o) => {
      t(Dr(r), o, n, 0);
    }), n;
  }
  return null;
}
const Br = {
  "Content-Type": void 0
};
function jr(e, t, n) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Oe = {
  transitional: nn,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = l.isObject(t);
    if (s && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return o && o ? JSON.stringify(rn(t)) : t;
    if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t))
      return t;
    if (l.isArrayBufferView(t))
      return t.buffer;
    if (l.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ir(t, this.formSerializer).toString();
      if ((a = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Ee(
          a ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), jr(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Oe.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && l.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? v.from(a, v.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: R.classes.FormData,
    Blob: R.classes.Blob
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
  Oe.headers[t] = {};
});
l.forEach(["post", "put", "patch"], function(t) {
  Oe.headers[t] = l.merge(Br);
});
const We = Oe, Mr = l.toObjectSet([
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
]), kr = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && Mr[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ht = Symbol("internals");
function Y(e) {
  return e && String(e).trim().toLowerCase();
}
function he(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(he) : String(e);
}
function zr(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
function Ur(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function Ae(e, t, n, r, o) {
  if (l.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!l.isString(t)) {
    if (l.isString(r))
      return t.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(t);
  }
}
function Hr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function qr(e, t) {
  const n = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class Se {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(a, f, c) {
      const d = Y(f);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const m = l.findKey(o, d);
      (!m || o[m] === void 0 || c === !0 || c === void 0 && o[m] !== !1) && (o[m || f] = he(a));
    }
    const i = (a, f) => l.forEach(a, (c, d) => s(c, d, f));
    return l.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : l.isString(t) && (t = t.trim()) && !Ur(t) ? i(kr(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = Y(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return zr(o);
        if (l.isFunction(n))
          return n.call(this, o, r);
        if (l.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Y(t), t) {
      const r = l.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ae(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = Y(i), i) {
        const a = l.findKey(r, i);
        a && (!n || Ae(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return l.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Ae(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return l.forEach(this, (o, s) => {
      const i = l.findKey(r, s);
      if (i) {
        n[i] = he(o), delete n[s];
        return;
      }
      const a = t ? Hr(s) : String(s).trim();
      a !== s && delete n[s], n[a] = he(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && l.isArray(r) ? r.join(", ") : r);
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
    const r = (this[ht] = this[ht] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = Y(i);
      r[a] || (qr(o, i), r[a] = !0);
    }
    return l.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Se.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(Se.prototype);
l.freezeMethods(Se);
const I = Se;
function Re(e, t) {
  const n = this || We, r = t || n, o = I.from(r.headers);
  let s = r.data;
  return l.forEach(e, function(a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function on(e) {
  return !!(e && e.__CANCEL__);
}
function ae(e, t, n) {
  v.call(this, e ?? "canceled", v.ERR_CANCELED, t, n), this.name = "CanceledError";
}
l.inherits(ae, v, {
  __CANCEL__: !0
});
function Vr(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new v(
    "Request failed with status code " + n.status,
    [v.ERR_BAD_REQUEST, v.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Jr = R.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, s, i, a) {
        const f = [];
        f.push(n + "=" + encodeURIComponent(r)), l.isNumber(o) && f.push("expires=" + new Date(o).toGMTString()), l.isString(s) && f.push("path=" + s), l.isString(i) && f.push("domain=" + i), a === !0 && f.push("secure"), document.cookie = f.join("; ");
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
function Kr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Wr(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function sn(e, t) {
  return e && !Kr(t) ? Wr(e, t) : t;
}
const Gr = R.isStandardBrowserEnv ? (
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
      const a = l.isString(i) ? o(i) : i;
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
function Qr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Zr(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const c = Date.now(), d = r[s];
    i || (i = c), n[o] = f, r[o] = c;
    let m = s, _ = 0;
    for (; m !== o; )
      _ += n[m++], m = m % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), c - i < t)
      return;
    const y = d && c - d;
    return y ? Math.round(_ * 1e3 / y) : void 0;
  };
}
function mt(e, t) {
  let n = 0;
  const r = Zr(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, a = s - n, f = r(a), c = s <= i;
    n = s;
    const d = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: a,
      rate: f || void 0,
      estimated: f && i && c ? (i - s) / f : void 0,
      event: o
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const Xr = typeof XMLHttpRequest < "u", Yr = Xr && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const s = I.from(e.headers).normalize(), i = e.responseType;
    let a;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    l.isFormData(o) && (R.isStandardBrowserEnv || R.isStandardBrowserWebWorkerEnv) && s.setContentType(!1);
    let c = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(y + ":" + g));
    }
    const d = sn(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), tn(d, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function m() {
      if (!c)
        return;
      const y = I.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), h = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: y,
        config: e,
        request: c
      };
      Vr(function(p) {
        n(p), f();
      }, function(p) {
        r(p), f();
      }, h), c = null;
    }
    if ("onloadend" in c ? c.onloadend = m : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, c.onabort = function() {
      c && (r(new v("Request aborted", v.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new v("Network Error", v.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const h = e.transitional || nn;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), r(new v(
        g,
        h.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED,
        e,
        c
      )), c = null;
    }, R.isStandardBrowserEnv) {
      const y = (e.withCredentials || Gr(d)) && e.xsrfCookieName && Jr.read(e.xsrfCookieName);
      y && s.set(e.xsrfHeaderName, y);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in c && l.forEach(s.toJSON(), function(g, h) {
      c.setRequestHeader(h, g);
    }), l.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", mt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", mt(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (y) => {
      c && (r(!y || y.type ? new ae(null, e, c) : y), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const _ = Qr(d);
    if (_ && R.protocols.indexOf(_) === -1) {
      r(new v("Unsupported protocol " + _ + ":", v.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, me = {
  http: Sr,
  xhr: Yr
};
l.forEach(me, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const eo = {
  getAdapter: (e) => {
    e = l.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let o = 0; o < t && (n = e[o], !(r = l.isString(n) ? me[n.toLowerCase()] : n)); o++)
      ;
    if (!r)
      throw r === !1 ? new v(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        l.hasOwnProp(me, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!l.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: me
};
function $e(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ae(null, e);
}
function gt(e) {
  return $e(e), e.headers = I.from(e.headers), e.data = Re.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), eo.getAdapter(e.adapter || We.adapter)(e).then(function(r) {
    return $e(e), r.data = Re.call(
      e,
      e.transformResponse,
      r
    ), r.headers = I.from(r.headers), r;
  }, function(r) {
    return on(r) || ($e(e), r && r.response && (r.response.data = Re.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = I.from(r.response.headers))), Promise.reject(r);
  });
}
const yt = (e) => e instanceof I ? e.toJSON() : e;
function K(e, t) {
  t = t || {};
  const n = {};
  function r(c, d, m) {
    return l.isPlainObject(c) && l.isPlainObject(d) ? l.merge.call({ caseless: m }, c, d) : l.isPlainObject(d) ? l.merge({}, d) : l.isArray(d) ? d.slice() : d;
  }
  function o(c, d, m) {
    if (l.isUndefined(d)) {
      if (!l.isUndefined(c))
        return r(void 0, c, m);
    } else
      return r(c, d, m);
  }
  function s(c, d) {
    if (!l.isUndefined(d))
      return r(void 0, d);
  }
  function i(c, d) {
    if (l.isUndefined(d)) {
      if (!l.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, d);
  }
  function a(c, d, m) {
    if (m in t)
      return r(c, d);
    if (m in e)
      return r(void 0, c);
  }
  const f = {
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
    validateStatus: a,
    headers: (c, d) => o(yt(c), yt(d), !0)
  };
  return l.forEach(Object.keys(e).concat(Object.keys(t)), function(d) {
    const m = f[d] || o, _ = m(e[d], t[d], d);
    l.isUndefined(_) && m !== a || (n[d] = _);
  }), n;
}
const an = "1.3.4", Ge = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ge[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const bt = {};
Ge.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + an + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new v(
        o(i, " has been removed" + (n ? " in " + n : "")),
        v.ERR_DEPRECATED
      );
    return n && !bt[i] && (bt[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
function to(e, t, n) {
  if (typeof e != "object")
    throw new v("options must be an object", v.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const a = e[s], f = a === void 0 || i(a, s, e);
      if (f !== !0)
        throw new v("option " + s + " must be " + f, v.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new v("Unknown option " + s, v.ERR_BAD_OPTION);
  }
}
const Be = {
  assertOptions: to,
  validators: Ge
}, B = Be.validators;
class ye {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new pt(),
      response: new pt()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = K(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && Be.assertOptions(r, {
      silentJSONParsing: B.transitional(B.boolean),
      forcedJSONParsing: B.transitional(B.boolean),
      clarifyTimeoutError: B.transitional(B.boolean)
    }, !1), o !== void 0 && Be.assertOptions(o, {
      encode: B.function,
      serialize: B.function
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = s && l.merge(
      s.common,
      s[n.method]
    ), i && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete s[g];
      }
    ), n.headers = I.concat(i, s);
    const a = [];
    let f = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (f = f && h.synchronous, a.unshift(h.fulfilled, h.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(h) {
      c.push(h.fulfilled, h.rejected);
    });
    let d, m = 0, _;
    if (!f) {
      const g = [gt.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, c), _ = g.length, d = Promise.resolve(n); m < _; )
        d = d.then(g[m++], g[m++]);
      return d;
    }
    _ = a.length;
    let y = n;
    for (m = 0; m < _; ) {
      const g = a[m++], h = a[m++];
      try {
        y = g(y);
      } catch (u) {
        h.call(this, u);
        break;
      }
    }
    try {
      d = gt.call(this, y);
    } catch (g) {
      return Promise.reject(g);
    }
    for (m = 0, _ = c.length; m < _; )
      d = d.then(c[m++], c[m++]);
    return d;
  }
  getUri(t) {
    t = K(this.defaults, t);
    const n = sn(t.baseURL, t.url);
    return tn(n, t.params, t.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(t) {
  ye.prototype[t] = function(n, r) {
    return this.request(K(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, a) {
      return this.request(K(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  ye.prototype[t] = n(), ye.prototype[t + "Form"] = n(!0);
});
const ge = ye;
class Qe {
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
      const i = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      r.reason || (r.reason = new ae(s, i, a), n(r.reason));
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
      token: new Qe(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const no = Qe;
function ro(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function oo(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const je = {
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
Object.entries(je).forEach(([e, t]) => {
  je[t] = e;
});
const so = je;
function cn(e) {
  const t = new ge(e), n = Ut(ge.prototype.request, t);
  return l.extend(n, ge.prototype, t, { allOwnKeys: !0 }), l.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return cn(K(e, o));
  }, n;
}
const S = cn(We);
S.Axios = ge;
S.CanceledError = ae;
S.CancelToken = no;
S.isCancel = on;
S.VERSION = an;
S.toFormData = Ee;
S.AxiosError = v;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = ro;
S.isAxiosError = oo;
S.mergeConfig = K;
S.AxiosHeaders = I;
S.formToJSON = (e) => rn(l.isHTMLForm(e) ? new FormData(e) : e);
S.HttpStatusCode = so;
S.default = S;
const Fe = S;
var wt;
const ce = typeof window < "u", ne = (e) => typeof e == "number", io = (e) => typeof e == "string", ao = () => {
};
ce && ((wt = window == null ? void 0 : window.navigator) != null && wt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ze(e) {
  return typeof e == "function" ? e() : w(e);
}
function co(e) {
  return e;
}
function Xe(e) {
  return Dn() ? (Ln(e), !0) : !1;
}
function lo(e, t = !0) {
  J() ? Ue(e) : t ? e() : Lt(e);
}
function uo(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = T(!1);
  let s = null;
  function i() {
    s && (clearTimeout(s), s = null);
  }
  function a() {
    o.value = !1, i();
  }
  function f(...c) {
    i(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, e(...c);
    }, Ze(t));
  }
  return r && (o.value = !0, ce && f()), Xe(a), {
    isPending: Bn(o),
    start: f,
    stop: a
  };
}
function ln(e) {
  var t;
  const n = Ze(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const un = ce ? window : void 0;
function fo(...e) {
  let t, n, r, o;
  if (io(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = un) : [t, n, r, o] = e, !t)
    return ao;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], i = () => {
    s.forEach((d) => d()), s.length = 0;
  }, a = (d, m, _, y) => (d.addEventListener(m, _, y), () => d.removeEventListener(m, _, y)), f = se(() => [ln(t), Ze(o)], ([d, m]) => {
    i(), d && s.push(...n.flatMap((_) => r.map((y) => a(d, _, y, m))));
  }, { immediate: !0, flush: "post" }), c = () => {
    f(), i();
  };
  return Xe(c), c;
}
function po(e, t = !1) {
  const n = T(), r = () => n.value = !!e();
  return r(), lo(r, t), n;
}
const _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, vt = "__vueuse_ssr_handlers__";
_t[vt] = _t[vt] || {};
var Et = Object.getOwnPropertySymbols, ho = Object.prototype.hasOwnProperty, mo = Object.prototype.propertyIsEnumerable, go = (e, t) => {
  var n = {};
  for (var r in e)
    ho.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Et)
    for (var r of Et(e))
      t.indexOf(r) < 0 && mo.call(e, r) && (n[r] = e[r]);
  return n;
};
function yo(e, t, n = {}) {
  const r = n, { window: o = un } = r, s = go(r, ["window"]);
  let i;
  const a = po(() => o && "ResizeObserver" in o), f = () => {
    i && (i.disconnect(), i = void 0);
  }, c = se(() => ln(e), (m) => {
    f(), a.value && o && m && (i = new ResizeObserver(t), i.observe(m, s));
  }, { immediate: !0, flush: "post" }), d = () => {
    f(), c();
  };
  return Xe(d), {
    isSupported: a,
    stop: d
  };
}
var Ot;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ot || (Ot = {}));
var bo = Object.defineProperty, St = Object.getOwnPropertySymbols, wo = Object.prototype.hasOwnProperty, _o = Object.prototype.propertyIsEnumerable, Tt = (e, t, n) => t in e ? bo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vo = (e, t) => {
  for (var n in t || (t = {}))
    wo.call(t, n) && Tt(e, n, t[n]);
  if (St)
    for (var n of St(t))
      _o.call(t, n) && Tt(e, n, t[n]);
  return e;
};
const Eo = {
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
vo({
  linear: co
}, Eo);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Oo = Object.prototype.hasOwnProperty, Ct = (e, t) => Oo.call(e, t), Me = (e) => typeof e == "function", re = (e) => typeof e == "string", fn = (e) => e !== null && typeof e == "object";
var So = typeof global == "object" && global && global.Object === Object && global;
const To = So;
var Co = typeof self == "object" && self && self.Object === Object && self, Po = To || Co || Function("return this")();
const Ye = Po;
var xo = Ye.Symbol;
const W = xo;
var dn = Object.prototype, No = dn.hasOwnProperty, Ao = dn.toString, ee = W ? W.toStringTag : void 0;
function Ro(e) {
  var t = No.call(e, ee), n = e[ee];
  try {
    e[ee] = void 0;
    var r = !0;
  } catch {
  }
  var o = Ao.call(e);
  return r && (t ? e[ee] = n : delete e[ee]), o;
}
var $o = Object.prototype, Fo = $o.toString;
function Io(e) {
  return Fo.call(e);
}
var Do = "[object Null]", Lo = "[object Undefined]", Pt = W ? W.toStringTag : void 0;
function pn(e) {
  return e == null ? e === void 0 ? Lo : Do : Pt && Pt in Object(e) ? Ro(e) : Io(e);
}
function Bo(e) {
  return e != null && typeof e == "object";
}
var jo = "[object Symbol]";
function et(e) {
  return typeof e == "symbol" || Bo(e) && pn(e) == jo;
}
function Mo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var ko = Array.isArray;
const tt = ko;
var zo = 1 / 0, xt = W ? W.prototype : void 0, Nt = xt ? xt.toString : void 0;
function hn(e) {
  if (typeof e == "string")
    return e;
  if (tt(e))
    return Mo(e, hn) + "";
  if (et(e))
    return Nt ? Nt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -zo ? "-0" : t;
}
function mn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Uo = "[object AsyncFunction]", Ho = "[object Function]", qo = "[object GeneratorFunction]", Vo = "[object Proxy]";
function Jo(e) {
  if (!mn(e))
    return !1;
  var t = pn(e);
  return t == Ho || t == qo || t == Uo || t == Vo;
}
var Ko = Ye["__core-js_shared__"];
const Ie = Ko;
var At = function() {
  var e = /[^.]+$/.exec(Ie && Ie.keys && Ie.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Wo(e) {
  return !!At && At in e;
}
var Go = Function.prototype, Qo = Go.toString;
function Zo(e) {
  if (e != null) {
    try {
      return Qo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Xo = /[\\^$.*+?()[\]{}|]/g, Yo = /^\[object .+?Constructor\]$/, es = Function.prototype, ts = Object.prototype, ns = es.toString, rs = ts.hasOwnProperty, os = RegExp(
  "^" + ns.call(rs).replace(Xo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ss(e) {
  if (!mn(e) || Wo(e))
    return !1;
  var t = Jo(e) ? os : Yo;
  return t.test(Zo(e));
}
function is(e, t) {
  return e == null ? void 0 : e[t];
}
function gn(e, t) {
  var n = is(e, t);
  return ss(n) ? n : void 0;
}
function as(e, t) {
  return e === t || e !== e && t !== t;
}
var cs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ls = /^\w*$/;
function us(e, t) {
  if (tt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || et(e) ? !0 : ls.test(e) || !cs.test(e) || t != null && e in Object(t);
}
var fs = gn(Object, "create");
const oe = fs;
function ds() {
  this.__data__ = oe ? oe(null) : {}, this.size = 0;
}
function ps(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var hs = "__lodash_hash_undefined__", ms = Object.prototype, gs = ms.hasOwnProperty;
function ys(e) {
  var t = this.__data__;
  if (oe) {
    var n = t[e];
    return n === hs ? void 0 : n;
  }
  return gs.call(t, e) ? t[e] : void 0;
}
var bs = Object.prototype, ws = bs.hasOwnProperty;
function _s(e) {
  var t = this.__data__;
  return oe ? t[e] !== void 0 : ws.call(t, e);
}
var vs = "__lodash_hash_undefined__";
function Es(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = oe && t === void 0 ? vs : t, this;
}
function H(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
H.prototype.clear = ds;
H.prototype.delete = ps;
H.prototype.get = ys;
H.prototype.has = _s;
H.prototype.set = Es;
function Os() {
  this.__data__ = [], this.size = 0;
}
function Te(e, t) {
  for (var n = e.length; n--; )
    if (as(e[n][0], t))
      return n;
  return -1;
}
var Ss = Array.prototype, Ts = Ss.splice;
function Cs(e) {
  var t = this.__data__, n = Te(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Ts.call(t, n, 1), --this.size, !0;
}
function Ps(e) {
  var t = this.__data__, n = Te(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function xs(e) {
  return Te(this.__data__, e) > -1;
}
function Ns(e, t) {
  var n = this.__data__, r = Te(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Z(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Z.prototype.clear = Os;
Z.prototype.delete = Cs;
Z.prototype.get = Ps;
Z.prototype.has = xs;
Z.prototype.set = Ns;
var As = gn(Ye, "Map");
const Rs = As;
function $s() {
  this.size = 0, this.__data__ = {
    hash: new H(),
    map: new (Rs || Z)(),
    string: new H()
  };
}
function Fs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ce(e, t) {
  var n = e.__data__;
  return Fs(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Is(e) {
  var t = Ce(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ds(e) {
  return Ce(this, e).get(e);
}
function Ls(e) {
  return Ce(this, e).has(e);
}
function Bs(e, t) {
  var n = Ce(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function V(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
V.prototype.clear = $s;
V.prototype.delete = Is;
V.prototype.get = Ds;
V.prototype.has = Ls;
V.prototype.set = Bs;
var js = "Expected a function";
function nt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(js);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var i = e.apply(this, r);
    return n.cache = s.set(o, i) || s, i;
  };
  return n.cache = new (nt.Cache || V)(), n;
}
nt.Cache = V;
var Ms = 500;
function ks(e) {
  var t = nt(e, function(r) {
    return n.size === Ms && n.clear(), r;
  }), n = t.cache;
  return t;
}
var zs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Us = /\\(\\)?/g, Hs = ks(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(zs, function(n, r, o, s) {
    t.push(o ? s.replace(Us, "$1") : r || n);
  }), t;
});
const qs = Hs;
function Vs(e) {
  return e == null ? "" : hn(e);
}
function Js(e, t) {
  return tt(e) ? e : us(e, t) ? [e] : qs(Vs(e));
}
var Ks = 1 / 0;
function Ws(e) {
  if (typeof e == "string" || et(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ks ? "-0" : t;
}
function Gs(e, t) {
  t = Js(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Ws(t[n++])];
  return n && n == r ? e : void 0;
}
function Qs(e, t, n) {
  var r = e == null ? void 0 : Gs(e, t);
  return r === void 0 ? n : r;
}
function Zs(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
const Xs = (e) => e === void 0, Ys = (e) => typeof Element > "u" ? !1 : e instanceof Element, ei = (e) => re(e) ? !Number.isNaN(Number(e)) : !1, Rt = (e) => Object.keys(e);
class ti extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function rt(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = re(e) ? new ti(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const ni = "utils/dom/style";
function ri(e, t = "px") {
  if (!e)
    return "";
  if (ne(e) || ei(e))
    return `${e}${t}`;
  if (re(e))
    return e;
  rt(ni, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.1.0 */
var le = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [r, o] of t)
    n[r] = o;
  return n;
}, oi = {
  name: "CircleCloseFilled"
}, si = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ii = /* @__PURE__ */ k(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
  },
  null,
  -1
  /* HOISTED */
), ai = [
  ii
];
function ci(e, t, n, r, o, s) {
  return x(), D("svg", si, ai);
}
var yn = /* @__PURE__ */ le(oi, [["render", ci], ["__file", "circle-close-filled.vue"]]), li = {
  name: "Close"
}, ui = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fi = /* @__PURE__ */ k(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), di = [
  fi
];
function pi(e, t, n, r, o, s) {
  return x(), D("svg", ui, di);
}
var hi = /* @__PURE__ */ le(li, [["render", pi], ["__file", "close.vue"]]), mi = {
  name: "InfoFilled"
}, gi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yi = /* @__PURE__ */ k(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
  },
  null,
  -1
  /* HOISTED */
), bi = [
  yi
];
function wi(e, t, n, r, o, s) {
  return x(), D("svg", gi, bi);
}
var bn = /* @__PURE__ */ le(mi, [["render", wi], ["__file", "info-filled.vue"]]), _i = {
  name: "SuccessFilled"
}, vi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ei = /* @__PURE__ */ k(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
  },
  null,
  -1
  /* HOISTED */
), Oi = [
  Ei
];
function Si(e, t, n, r, o, s) {
  return x(), D("svg", vi, Oi);
}
var wn = /* @__PURE__ */ le(_i, [["render", Si], ["__file", "success-filled.vue"]]), Ti = {
  name: "WarningFilled"
}, Ci = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Pi = /* @__PURE__ */ k(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
  },
  null,
  -1
  /* HOISTED */
), xi = [
  Pi
];
function Ni(e, t, n, r, o, s) {
  return x(), D("svg", Ci, xi);
}
var _n = /* @__PURE__ */ le(Ti, [["render", Ni], ["__file", "warning-filled.vue"]]);
const vn = "__epPropKey", M = (e) => e, Ai = (e) => fn(e) && !!e[vn], En = (e, t) => {
  if (!fn(e) || Ai(e))
    return e;
  const { values: n, required: r, default: o, type: s, validator: i } = e, f = {
    type: s,
    required: !!r,
    validator: n || i ? (c) => {
      let d = !1, m = [];
      if (n && (m = Array.from(n), Ct(e, "default") && m.push(o), d || (d = m.includes(c))), i && (d || (d = i(c))), !d && m.length > 0) {
        const _ = [...new Set(m)].map((y) => JSON.stringify(y)).join(", ");
        jn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${_}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [vn]: !0
  };
  return Ct(e, "default") && (f.default = o), f;
}, Pe = (e) => Zs(Object.entries(e).map(([t, n]) => [
  t,
  En(n, t)
])), Ri = M([
  String,
  Object,
  Function
]), $i = {
  Close: hi,
  SuccessFilled: wn,
  InfoFilled: bn,
  WarningFilled: _n,
  CircleCloseFilled: yn
}, $t = {
  success: wn,
  warning: _n,
  error: yn,
  info: bn
}, On = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Fi = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Ii = {
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
}, Di = ["", "default", "small", "large"], Li = (e) => e;
var Bi = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const ji = (e) => (t, n) => Mi(t, n, w(e)), Mi = (e, t, n) => Qs(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var s;
  return `${(s = t == null ? void 0 : t[o]) != null ? s : `{${o}}`}`;
}), ki = (e) => {
  const t = E(() => w(e).name), n = Mn(e) ? e : T(e);
  return {
    lang: t,
    locale: n,
    t: ji(e)
  };
}, Sn = Symbol("localeContextKey"), zi = (e) => {
  const t = e || we(Sn, T());
  return ki(E(() => t.value || Bi));
}, ke = "el", Ui = "is-", U = (e, t, n, r, o) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), r && (s += `__${r}`), o && (s += `--${o}`), s;
}, Tn = Symbol("namespaceContextKey"), Hi = (e) => {
  const t = e || we(Tn, T(ke));
  return E(() => w(t) || ke);
}, ot = (e, t) => {
  const n = Hi(t);
  return {
    namespace: n,
    b: (h = "") => U(n.value, e, h, "", ""),
    e: (h) => h ? U(n.value, e, "", h, "") : "",
    m: (h) => h ? U(n.value, e, "", "", h) : "",
    be: (h, u) => h && u ? U(n.value, e, h, u, "") : "",
    em: (h, u) => h && u ? U(n.value, e, "", h, u) : "",
    bm: (h, u) => h && u ? U(n.value, e, h, "", u) : "",
    bem: (h, u, p) => h && u && p ? U(n.value, e, h, u, p) : "",
    is: (h, ...u) => {
      const p = u.length >= 1 ? u[0] : !0;
      return h && p ? `${Ui}${h}` : "";
    },
    cssVar: (h) => {
      const u = {};
      for (const p in h)
        h[p] && (u[`--${n.value}-${p}`] = h[p]);
      return u;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const u = {};
      for (const p in h)
        h[p] && (u[`--${n.value}-${e}-${p}`] = h[p]);
      return u;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
}, Ft = T(0), Cn = 2e3, Pn = Symbol("zIndexContextKey"), qi = (e) => {
  const t = e || we(Pn, void 0), n = E(() => {
    const s = w(t);
    return ne(s) ? s : Cn;
  }), r = E(() => n.value + Ft.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (Ft.value++, r.value)
  };
}, Vi = En({
  type: String,
  values: Di,
  required: !1
}), Ji = Symbol("size"), xn = Symbol(), be = T();
function Nn(e, t = void 0) {
  const n = J() ? we(xn, be) : be;
  return e ? E(() => {
    var r, o;
    return (o = (r = n.value) == null ? void 0 : r[e]) != null ? o : t;
  }) : n;
}
function Ki(e, t) {
  const n = Nn(), r = ot(e, E(() => {
    var a;
    return ((a = n.value) == null ? void 0 : a.namespace) || ke;
  })), o = zi(E(() => {
    var a;
    return (a = n.value) == null ? void 0 : a.locale;
  })), s = qi(E(() => {
    var a;
    return ((a = n.value) == null ? void 0 : a.zIndex) || Cn;
  })), i = E(() => {
    var a;
    return w(t) || ((a = n.value) == null ? void 0 : a.size) || "";
  });
  return An(E(() => w(n) || {})), {
    ns: r,
    locale: o,
    zIndex: s,
    size: i
  };
}
const An = (e, t, n = !1) => {
  var r;
  const o = !!J(), s = o ? Nn() : void 0, i = (r = t == null ? void 0 : t.provide) != null ? r : o ? kn : void 0;
  if (!i) {
    rt("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const a = E(() => {
    const f = w(e);
    return s != null && s.value ? Wi(s.value, f) : f;
  });
  return i(xn, a), i(Sn, E(() => a.value.locale)), i(Tn, E(() => a.value.namespace)), i(Pn, E(() => a.value.zIndex)), i(Ji, {
    size: E(() => a.value.size || "")
  }), (n || !be.value) && (be.value = a.value), a;
}, Wi = (e, t) => {
  var n;
  const r = [.../* @__PURE__ */ new Set([...Rt(e), ...Rt(t)])], o = {};
  for (const s of r)
    o[s] = (n = t[s]) != null ? n : e[s];
  return o;
}, Gi = Pe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: M(Object)
  },
  size: Vi,
  button: {
    type: M(Object)
  },
  experimentalFeatures: {
    type: M(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: M(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), ze = {};
q({
  name: "ElConfigProvider",
  props: Gi,
  setup(e, { slots: t }) {
    se(() => e.message, (r) => {
      Object.assign(ze, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = An(e);
    return () => _e(t, "default", { config: n == null ? void 0 : n.value });
  }
});
var st = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const Qi = Pe({
  size: {
    type: M([Number, String])
  },
  color: {
    type: String
  }
}), Zi = q({
  name: "ElIcon",
  inheritAttrs: !1
}), Xi = /* @__PURE__ */ q({
  ...Zi,
  props: Qi,
  setup(e) {
    const t = e, n = ot("icon"), r = E(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: Xs(o) ? void 0 : ri(o),
        "--color": s
      };
    });
    return (o, s) => (x(), D("i", zn({
      class: w(n).b(),
      style: w(r)
    }, o.$attrs), [
      _e(o.$slots, "default")
    ], 16));
  }
});
var Yi = /* @__PURE__ */ st(Xi, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const It = On(Yi), ea = Pe({
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
}), ta = ["textContent"], na = q({
  name: "ElBadge"
}), ra = /* @__PURE__ */ q({
  ...na,
  props: ea,
  setup(e, { expose: t }) {
    const n = e, r = ot("badge"), o = E(() => n.isDot ? "" : ne(n.value) && ne(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`);
    return t({
      content: o
    }), (s, i) => (x(), D("div", {
      class: j(w(r).b())
    }, [
      _e(s.$slots, "default"),
      He(Bt, {
        name: `${w(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: de(() => [
          jt(k("sup", {
            class: j([
              w(r).e("content"),
              w(r).em("content", s.type),
              w(r).is("fixed", !!s.$slots.default),
              w(r).is("dot", s.isDot)
            ]),
            textContent: Mt(w(o))
          }, null, 10, ta), [
            [kt, !s.hidden && (w(o) || s.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var oa = /* @__PURE__ */ st(ra, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const sa = On(oa), Rn = ["success", "info", "warning", "error"], P = Li({
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
  appendTo: ce ? document.body : void 0
}), ia = Pe({
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
    type: Ri,
    default: P.icon
  },
  id: {
    type: String,
    default: P.id
  },
  message: {
    type: M([
      String,
      Object,
      Function
    ]),
    default: P.message
  },
  onClose: {
    type: M(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: P.showClose
  },
  type: {
    type: String,
    values: Rn,
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
}), aa = {
  destroy: () => !0
}, A = Un([]), ca = (e) => {
  const t = A.findIndex((o) => o.id === e), n = A[t];
  let r;
  return t > 0 && (r = A[t - 1]), { current: n, prev: r };
}, la = (e) => {
  const { prev: t } = ca(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, ua = (e, t) => A.findIndex((r) => r.id === e) > 0 ? 20 : t, fa = ["id"], da = ["innerHTML"], pa = q({
  name: "ElMessage"
}), ha = /* @__PURE__ */ q({
  ...pa,
  props: ia,
  emits: aa,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = $i, { ns: o, zIndex: s } = Ki("message"), { currentZIndex: i, nextZIndex: a } = s, f = T(), c = T(!1), d = T(0);
    let m;
    const _ = E(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = E(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && $t[O] };
    }), g = E(() => n.icon || $t[n.type] || ""), h = E(() => la(n.id)), u = E(() => ua(n.id, n.offset) + h.value), p = E(() => d.value + u.value), b = E(() => ({
      top: `${u.value}px`,
      zIndex: i.value
    }));
    function C() {
      n.duration !== 0 && ({ stop: m } = uo(() => {
        $();
      }, n.duration));
    }
    function N() {
      m == null || m();
    }
    function $() {
      c.value = !1;
    }
    function xe({ code: O }) {
      O === Ii.esc && $();
    }
    return Ue(() => {
      C(), a(), c.value = !0;
    }), se(() => n.repeatNum, () => {
      N(), C();
    }), fo(document, "keydown", xe), yo(f, () => {
      d.value = f.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: p,
      close: $
    }), (O, F) => (x(), X(Bt, {
      name: w(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: F[0] || (F[0] = (ue) => O.$emit("destroy")),
      persisted: ""
    }, {
      default: de(() => [
        jt(k("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: f,
          class: j([
            w(o).b(),
            { [w(o).m(O.type)]: O.type && !O.icon },
            w(o).is("center", O.center),
            w(o).is("closable", O.showClose),
            O.customClass
          ]),
          style: Hn(w(b)),
          role: "alert",
          onMouseenter: N,
          onMouseleave: C
        }, [
          O.repeatNum > 1 ? (x(), X(w(sa), {
            key: 0,
            value: O.repeatNum,
            type: w(_),
            class: j(w(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : fe("v-if", !0),
          w(g) ? (x(), X(w(It), {
            key: 1,
            class: j([w(o).e("icon"), w(y)])
          }, {
            default: de(() => [
              (x(), X(qn(w(g))))
            ]),
            _: 1
          }, 8, ["class"])) : fe("v-if", !0),
          _e(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (x(), D(Vn, { key: 1 }, [
              fe(" Caution here, message could've been compromised, never use user's input as message "),
              k("p", {
                class: j(w(o).e("content")),
                innerHTML: O.message
              }, null, 10, da)
            ], 2112)) : (x(), D("p", {
              key: 0,
              class: j(w(o).e("content"))
            }, Mt(O.message), 3))
          ]),
          O.showClose ? (x(), X(w(It), {
            key: 2,
            class: j(w(o).e("closeBtn")),
            onClick: Jn($, ["stop"])
          }, {
            default: de(() => [
              He(w(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : fe("v-if", !0)
        ], 46, fa), [
          [kt, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var ma = /* @__PURE__ */ st(ha, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let ga = 1;
const $n = (e) => {
  const t = !e || re(e) || zt(e) || Me(e) ? { message: e } : e, n = {
    ...P,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (re(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    Ys(r) || (rt("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), r = document.body), n.appendTo = r;
  }
  return n;
}, ya = (e) => {
  const t = A.indexOf(e);
  if (t === -1)
    return;
  A.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ba = ({ appendTo: e, ...t }, n) => {
  const r = `message_${ga++}`, o = t.onClose, s = document.createElement("div"), i = {
    ...t,
    id: r,
    onClose: () => {
      o == null || o(), ya(d);
    },
    onDestroy: () => {
      ct(null, s);
    }
  }, a = He(ma, i, Me(i.message) || zt(i.message) ? {
    default: Me(i.message) ? i.message : () => i.message
  } : null);
  a.appContext = n || G._context, ct(a, s), e.appendChild(s.firstElementChild);
  const f = a.component, d = {
    id: r,
    vnode: a,
    vm: f,
    handler: {
      close: () => {
        f.exposed.visible.value = !1;
      }
    },
    props: a.component.props
  };
  return d;
}, G = (e = {}, t) => {
  if (!ce)
    return { close: () => {
    } };
  if (ne(ze.max) && A.length >= ze.max)
    return { close: () => {
    } };
  const n = $n(e);
  if (n.grouping && A.length) {
    const o = A.find(({ vnode: s }) => {
      var i;
      return ((i = s.props) == null ? void 0 : i.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  const r = ba(n, t);
  return A.push(r), r.handler;
};
Rn.forEach((e) => {
  G[e] = (t = {}, n) => {
    const r = $n(t);
    return G({ ...r, type: e }, n);
  };
});
function wa(e) {
  for (const t of A)
    (!e || e === t.props.type) && t.handler.close();
}
G.closeAll = wa;
G._context = null;
const Dt = Fi(G, "$message");
function Ea({
  instance: e = Fe,
  beforeRequest: t,
  beforeResponse: n,
  responseHandler: r,
  errorHandler: o,
  errorResponse: s,
  excludePeddings: i = []
} = {}) {
  let a = e;
  a || (a = Fe, a.defaults.timeout = 1e4, a.defaults.withCredentials = !0, a.defaults.headers = {
    // 设置默认请求头
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=UTF-8"
  });
  const f = (u, p) => {
    o ? o(u, p) : (Dt.closeAll(), Dt.error(u));
  }, c = [], d = Fe.CancelToken, m = (u) => {
    const p = `${u.url}&${u.method}`;
    for (const b in c)
      c[b].url === p && !i.includes(p) && (c[b].fn(), c.splice(b, 1));
  };
  a.interceptors.request.use(async (u) => {
    const p = t ? await t(u) : u;
    return m(p), p.cancelToken = new d((b) => {
      c.push({ url: `${p.url}&${p.method}`, fn: b });
    }), p;
  }), a.interceptors.response.use(
    async (u) => {
      if (m(u.config), n)
        return n ? await n(u) : u;
      if (r)
        return await r(u);
      const { data: p, data: { code: b }, config: C } = u || {};
      return [0, 1001].includes(b) ? p : (p && s(p, C), f(u.message, p));
    },
    async (u) => {
      if (u.code === "ERR_CANCELED")
        return "";
      if (u && u.response) {
        const { data: p, status: b, config: C } = u.response;
        if (b && s) {
          const [N] = (p == null ? void 0 : p.errors) || [];
          await s(N ?? p, C);
        }
        if (p.errors && p.errors.length)
          u.message = p.errors[0].message || p.message;
        else {
          const N = {
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
          u.message = N[b];
        }
        f(u.message, p);
      }
      return u.message && u.message.includes("timeout of") && (u.message = "网络超时, 请检查网络！"), u.message ? Promise.reject(u) : u;
    }
  );
  const _ = (u, p = !1) => p ? u : u.data ?? !0, y = async (u, p, b = {}, C = "get", N = !1) => {
    try {
      const $ = {};
      if (p) {
        const O = (F) => /\[|\]/g.test(F);
        Object.keys(p).forEach((F) => {
          $[F] = p[F] && O ? [...p[F].toString()].map((ue) => O(ue) ? encodeURIComponent(ue) : ue).join("") : p[F];
        });
      }
      const xe = ["post", "put"].includes(C) ? await a({
        method: C,
        url: u,
        data: p,
        ...b
      }) : await a[C](u, { params: $, ...b });
      return _(xe, N);
    } catch ($) {
      if (N)
        return $;
    }
  };
  return {
    $api: {
      get: (u, p, b) => y(u, p, b, "get"),
      post: (u, p, b) => y(u, p, b, "post"),
      put: (u, p, b) => y(u, p, b, "put"),
      delete: (u, p, b) => y(u, p, b, "delete"),
      all: (u, p, b) => y(u, p, b, "all")
    },
    $http: {
      get: (u, p, b) => y(u, p, b, "get", !0),
      post: (u, p, b) => y(u, p, b, "post", !0),
      put: (u, p, b) => y(u, p, b, "put", !0),
      delete: (u, p, b) => y(u, p, b, "delete", !0),
      all: (u, p, b) => y(u, p, b, "all", !0)
    }
  };
}
function Oa() {
  const e = J(), { globalProperties: t } = e.appContext.config, { $message: n, $messageBox: r } = t, o = (a, f, c) => {
    n.closeAll(), n({ message: a, type: f, ...c });
  };
  return {
    message: {
      error: (a, f) => o(a, "error", f),
      success: (a, f) => o(a, "success", f),
      warning: (a, f) => o(a, "warning", f),
      info: (a, f) => o(a, "info", f),
      close: () => n.closeAll()
    },
    messageBox: {
      confirm: ({
        msg: a,
        title: f = "提示",
        type: c = "warning",
        ...d
      }) => new Promise((m, _) => {
        parent.window.postMessage("openMask()", "*"), window.top.postMessage("openMask()", "*"), r.confirm(a, f, {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          buttonSize: "",
          type: c,
          ...d
        }).then(() => m(!0)).catch(() => _()).finally(() => {
          parent.window.postMessage("closeMask()", "*"), window.top.postMessage("closeMask()", "*");
        });
      }),
      alert: ({ msg: a, title: f = "提示", type: c = "warning" }, d) => {
        r.alert(a, f, {
          confirmButtonText: "确认",
          type: c,
          callback: (m) => d(m)
        });
      }
    }
  };
}
function Sa() {
  const e = T(null);
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
function Ta() {
  const e = T(1), t = T(1), n = T(1), r = T([]), o = T(!0), s = T(!1);
  return {
    totalPage: e,
    totalRecord: t,
    currentPage: n,
    listData: r,
    tableData: r,
    loading: o,
    getNowPage: (f = [], c = r.value) => (n.value > 1 && (c.length === 1 || c.length === f.length) && n.value--, n.value),
    setListAndPage: (f) => {
      const {
        records: c = [],
        totalPage: d = 1,
        pageNo: m = 1,
        pageIndex: _,
        totalRecord: y = 1
      } = f || {};
      r.value = c, o.value = !1, e.value = d, t.value = y, n.value = _ ?? m, s.value = !c.length;
    },
    isNullData: s
  };
}
function Ca() {
  const e = (s, i) => {
    if (s) {
      let a = s;
      return typeof s == "string" && (a = Number(s)), a.toFixed(2);
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
const Pa = {
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
export {
  va as useCommon,
  Ca as useFilters,
  Sa as useForm,
  Oa as useMessage,
  Ta as usePage,
  Ea as useRequest,
  Pa as vOnClickActive
};
