import { getCurrentInstance as H, reactive as In, watchEffect as it, computed as E, toRefs as at, nextTick as Bt, ref as C, watch as se, onMounted as He, onUnmounted as Ln, unref as w, getCurrentScope as Dn, onScopeDispose as jn, readonly as Bn, openBlock as N, createElementBlock as L, createElementVNode as k, warn as Mn, inject as we, isRef as Un, provide as kn, defineComponent as V, renderSlot as _e, mergeProps as zn, normalizeClass as M, createVNode as qe, Transition as Mt, withCtx as de, withDirectives as Ut, toDisplayString as kt, vShow as zt, shallowReactive as Hn, createBlock as X, normalizeStyle as qn, createCommentVNode as fe, resolveDynamicComponent as Vn, Fragment as Jn, withModifiers as Kn, isVNode as Ht, render as ct } from "vue";
function Sa() {
  const e = H(), { globalProperties: t } = e ? e.appContext.config : {}, {
    $route: n,
    $pinia: r,
    $store: o,
    $router: s
  } = t, i = s, a = n, f = In({
    routeRef: n
  });
  it(() => {
    const { $route: u } = t;
    f.routeRef = u;
  });
  const c = E(() => f.routeRef.name), d = E(() => f.routeRef.query), h = E(() => f.routeRef.params), _ = (u, p) => {
    p ? i.push({ path: u, ...p }) : u.includes("/") ? i.push(u) : i.push({ name: u });
  }, y = (u, p) => {
    p ? i.replace({ path: u, ...p }) : u.includes("/") ? i.replace(u) : i.replace({ name: u });
  }, g = E(() => !1), m = (u) => e.proxy[u];
  return {
    ...at(f),
    route: a,
    router: i,
    routeQuery: d,
    routeParams: h,
    routerName: c,
    loadPage: _,
    isDev: g,
    replacePage: y,
    globalProperties: t,
    resetParams: m,
    store: o,
    pinia: r,
    nextTick: Bt,
    ref: C,
    watch: se,
    onMounted: He,
    onUnmounted: Ln,
    watchEffect: it,
    getCurrentInstance: H,
    toRefs: at
  };
}
function qt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Wn } = Object.prototype, { getPrototypeOf: Ve } = Object, ve = ((e) => (t) => {
  const n = Wn.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), j = (e) => (e = e.toLowerCase(), (t) => ve(t) === e), Ee = (e) => (t) => typeof t === e, { isArray: Q } = Array, te = Ee("undefined");
function Gn(e) {
  return e !== null && !te(e) && e.constructor !== null && !te(e.constructor) && D(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Vt = j("ArrayBuffer");
function Qn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Vt(e.buffer), t;
}
const Zn = Ee("string"), D = Ee("function"), Jt = Ee("number"), Je = (e) => e !== null && typeof e == "object", Xn = (e) => e === !0 || e === !1, pe = (e) => {
  if (ve(e) !== "object")
    return !1;
  const t = Ve(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Yn = j("Date"), er = j("File"), tr = j("Blob"), nr = j("FileList"), rr = (e) => Je(e) && D(e.pipe), or = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || D(e.append) && ((t = ve(e)) === "formdata" || // detect form-data instance
  t === "object" && D(e.toString) && e.toString() === "[object FormData]"));
}, sr = j("URLSearchParams"), ir = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function Kt(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Wt = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Gt = (e) => !te(e) && e !== Wt;
function De() {
  const { caseless: e } = Gt(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && Kt(t, o) || o;
    pe(t[s]) && pe(r) ? t[s] = De(t[s], r) : pe(r) ? t[s] = De({}, r) : Q(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && ie(arguments[r], n);
  return t;
}
const ar = (e, t, n, { allOwnKeys: r } = {}) => (ie(t, (o, s) => {
  n && D(o) ? e[s] = qt(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), cr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), lr = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, ur = (e, t, n, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Ve(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, fr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, dr = (e) => {
  if (!e)
    return null;
  if (Q(e))
    return e;
  let t = e.length;
  if (!Jt(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, pr = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ve(Uint8Array)), mr = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, hr = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, gr = j("HTMLFormElement"), yr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), lt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), br = j("RegExp"), Qt = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ie(n, (o, s) => {
    t(o, s, e) !== !1 && (r[s] = o);
  }), Object.defineProperties(e, r);
}, wr = (e) => {
  Qt(e, (t, n) => {
    if (D(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (D(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, _r = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Q(e) ? r(e) : r(String(e).split(t)), n;
}, vr = () => {
}, Er = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Re = "abcdefghijklmnopqrstuvwxyz", ut = "0123456789", Zt = {
  DIGIT: ut,
  ALPHA: Re,
  ALPHA_DIGIT: Re + Re.toUpperCase() + ut
}, Or = (e = 16, t = Zt.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Sr(e) {
  return !!(e && D(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Tr = (e) => {
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
  isArrayBuffer: Vt,
  isBuffer: Gn,
  isFormData: or,
  isArrayBufferView: Qn,
  isString: Zn,
  isNumber: Jt,
  isBoolean: Xn,
  isObject: Je,
  isPlainObject: pe,
  isUndefined: te,
  isDate: Yn,
  isFile: er,
  isBlob: tr,
  isRegExp: br,
  isFunction: D,
  isStream: rr,
  isURLSearchParams: sr,
  isTypedArray: pr,
  isFileList: nr,
  forEach: ie,
  merge: De,
  extend: ar,
  trim: ir,
  stripBOM: cr,
  inherits: lr,
  toFlatObject: ur,
  kindOf: ve,
  kindOfTest: j,
  endsWith: fr,
  toArray: dr,
  forEachEntry: mr,
  matchAll: hr,
  isHTMLForm: gr,
  hasOwnProperty: lt,
  hasOwnProp: lt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Qt,
  freezeMethods: wr,
  toObjectSet: _r,
  toCamelCase: yr,
  noop: vr,
  toFiniteNumber: Er,
  findKey: Kt,
  global: Wt,
  isContextDefined: Gt,
  ALPHABET: Zt,
  generateString: Or,
  isSpecCompliantForm: Sr,
  toJSONObject: Tr
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
const Xt = v.prototype, Yt = {};
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
  Yt[e] = { value: e };
});
Object.defineProperties(v, Yt);
Object.defineProperty(Xt, "isAxiosError", { value: !0 });
v.from = (e, t, n, r, o, s) => {
  const i = Object.create(Xt);
  return l.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (a) => a !== "isAxiosError"), v.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Cr = null;
function je(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function en(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ft(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = en(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Pr(e) {
  return l.isArray(e) && !e.some(je);
}
const xr = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Oe(e, t, n) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = l.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, u) {
    return !l.isUndefined(u[m]);
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
  function d(g, m, u) {
    let p = g;
    if (g && !u && typeof g == "object") {
      if (l.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), g = JSON.stringify(g);
      else if (l.isArray(g) && Pr(g) || (l.isFileList(g) || l.endsWith(m, "[]")) && (p = l.toArray(g)))
        return m = en(m), p.forEach(function(T, P) {
          !(l.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? ft([m], P, s) : i === null ? m : m + "[]",
            c(T)
          );
        }), !1;
    }
    return je(g) ? !0 : (t.append(ft(u, m, s), c(g)), !1);
  }
  const h = [], _ = Object.assign(xr, {
    defaultVisitor: d,
    convertValue: c,
    isVisitable: je
  });
  function y(g, m) {
    if (!l.isUndefined(g)) {
      if (h.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      h.push(g), l.forEach(g, function(p, b) {
        (!(l.isUndefined(p) || p === null) && o.call(
          t,
          p,
          l.isString(b) ? b.trim() : b,
          m,
          _
        )) === !0 && y(p, m ? m.concat(b) : [b]);
      }), h.pop();
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
  this._pairs = [], e && Oe(e, this, t);
}
const tn = Ke.prototype;
tn.append = function(t, n) {
  this._pairs.push([t, n]);
};
tn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, dt);
  } : dt;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Nr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function nn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Nr, o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = l.isURLSearchParams(t) ? t.toString() : new Ke(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Rr {
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
const pt = Rr, rn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ar = typeof URLSearchParams < "u" ? URLSearchParams : Ke, $r = typeof FormData < "u" ? FormData : null, Fr = typeof Blob < "u" ? Blob : null, Ir = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Lr = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), $ = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ar,
    FormData: $r,
    Blob: Fr
  },
  isStandardBrowserEnv: Ir,
  isStandardBrowserWebWorkerEnv: Lr,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Dr(e, t) {
  return Oe(e, new $.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return $.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function jr(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Br(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function on(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    const a = Number.isFinite(+i), f = s >= n.length;
    return i = !i && l.isArray(o) ? o.length : i, f ? (l.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !l.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && l.isArray(o[i]) && (o[i] = Br(o[i])), !a);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const n = {};
    return l.forEachEntry(e, (r, o) => {
      t(jr(r), o, n, 0);
    }), n;
  }
  return null;
}
const Mr = {
  "Content-Type": void 0
};
function Ur(e, t, n) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Se = {
  transitional: rn,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = l.isObject(t);
    if (s && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return o && o ? JSON.stringify(on(t)) : t;
    if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t))
      return t;
    if (l.isArrayBufferView(t))
      return t.buffer;
    if (l.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Dr(t, this.formSerializer).toString();
      if ((a = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Oe(
          a ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), Ur(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Se.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
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
    FormData: $.classes.FormData,
    Blob: $.classes.Blob
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
  Se.headers[t] = {};
});
l.forEach(["post", "put", "patch"], function(t) {
  Se.headers[t] = l.merge(Mr);
});
const We = Se, kr = l.toObjectSet([
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
]), zr = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && kr[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, mt = Symbol("internals");
function Y(e) {
  return e && String(e).trim().toLowerCase();
}
function me(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(me) : String(e);
}
function Hr(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const qr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function Vr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Jr(e, t) {
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
class Te {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(a, f, c) {
      const d = Y(f);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const h = l.findKey(o, d);
      (!h || o[h] === void 0 || c === !0 || c === void 0 && o[h] !== !1) && (o[h || f] = me(a));
    }
    const i = (a, f) => l.forEach(a, (c, d) => s(c, d, f));
    return l.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : l.isString(t) && (t = t.trim()) && !qr(t) ? i(zr(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = Y(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Hr(o);
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
        n[i] = me(o), delete n[s];
        return;
      }
      const a = t ? Vr(s) : String(s).trim();
      a !== s && delete n[s], n[a] = me(o), r[a] = !0;
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
    const r = (this[mt] = this[mt] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = Y(i);
      r[a] || (Jr(o, i), r[a] = !0);
    }
    return l.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Te.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(Te.prototype);
l.freezeMethods(Te);
const I = Te;
function $e(e, t) {
  const n = this || We, r = t || n, o = I.from(r.headers);
  let s = r.data;
  return l.forEach(e, function(a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function sn(e) {
  return !!(e && e.__CANCEL__);
}
function ae(e, t, n) {
  v.call(this, e ?? "canceled", v.ERR_CANCELED, t, n), this.name = "CanceledError";
}
l.inherits(ae, v, {
  __CANCEL__: !0
});
function Kr(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new v(
    "Request failed with status code " + n.status,
    [v.ERR_BAD_REQUEST, v.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Wr = $.isStandardBrowserEnv ? (
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
function Gr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Qr(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function an(e, t) {
  return e && !Gr(t) ? Qr(e, t) : t;
}
const Zr = $.isStandardBrowserEnv ? (
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
function Xr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Yr(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const c = Date.now(), d = r[s];
    i || (i = c), n[o] = f, r[o] = c;
    let h = s, _ = 0;
    for (; h !== o; )
      _ += n[h++], h = h % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), c - i < t)
      return;
    const y = d && c - d;
    return y ? Math.round(_ * 1e3 / y) : void 0;
  };
}
function ht(e, t) {
  let n = 0;
  const r = Yr(50, 250);
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
const eo = typeof XMLHttpRequest < "u", to = eo && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const s = I.from(e.headers).normalize(), i = e.responseType;
    let a;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    l.isFormData(o) && ($.isStandardBrowserEnv || $.isStandardBrowserWebWorkerEnv) && s.setContentType(!1);
    let c = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(y + ":" + g));
    }
    const d = an(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), nn(d, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function h() {
      if (!c)
        return;
      const y = I.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), m = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: y,
        config: e,
        request: c
      };
      Kr(function(p) {
        n(p), f();
      }, function(p) {
        r(p), f();
      }, m), c = null;
    }
    if ("onloadend" in c ? c.onloadend = h : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, c.onabort = function() {
      c && (r(new v("Request aborted", v.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new v("Network Error", v.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const m = e.transitional || rn;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), r(new v(
        g,
        m.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED,
        e,
        c
      )), c = null;
    }, $.isStandardBrowserEnv) {
      const y = (e.withCredentials || Zr(d)) && e.xsrfCookieName && Wr.read(e.xsrfCookieName);
      y && s.set(e.xsrfHeaderName, y);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in c && l.forEach(s.toJSON(), function(g, m) {
      c.setRequestHeader(m, g);
    }), l.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", ht(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", ht(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (y) => {
      c && (r(!y || y.type ? new ae(null, e, c) : y), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const _ = Xr(d);
    if (_ && $.protocols.indexOf(_) === -1) {
      r(new v("Unsupported protocol " + _ + ":", v.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, he = {
  http: Cr,
  xhr: to
};
l.forEach(he, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const no = {
  getAdapter: (e) => {
    e = l.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let o = 0; o < t && (n = e[o], !(r = l.isString(n) ? he[n.toLowerCase()] : n)); o++)
      ;
    if (!r)
      throw r === !1 ? new v(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        l.hasOwnProp(he, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!l.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: he
};
function Fe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ae(null, e);
}
function gt(e) {
  return Fe(e), e.headers = I.from(e.headers), e.data = $e.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), no.getAdapter(e.adapter || We.adapter)(e).then(function(r) {
    return Fe(e), r.data = $e.call(
      e,
      e.transformResponse,
      r
    ), r.headers = I.from(r.headers), r;
  }, function(r) {
    return sn(r) || (Fe(e), r && r.response && (r.response.data = $e.call(
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
  function r(c, d, h) {
    return l.isPlainObject(c) && l.isPlainObject(d) ? l.merge.call({ caseless: h }, c, d) : l.isPlainObject(d) ? l.merge({}, d) : l.isArray(d) ? d.slice() : d;
  }
  function o(c, d, h) {
    if (l.isUndefined(d)) {
      if (!l.isUndefined(c))
        return r(void 0, c, h);
    } else
      return r(c, d, h);
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
  function a(c, d, h) {
    if (h in t)
      return r(c, d);
    if (h in e)
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
    const h = f[d] || o, _ = h(e[d], t[d], d);
    l.isUndefined(_) && h !== a || (n[d] = _);
  }), n;
}
const cn = "1.3.6", Ge = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ge[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const bt = {};
Ge.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + cn + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
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
function ro(e, t, n) {
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
  assertOptions: ro,
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
    }, !1), o != null && (l.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Be.assertOptions(o, {
      encode: B.function,
      serialize: B.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
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
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (f = f && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let d, h = 0, _;
    if (!f) {
      const g = [gt.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, c), _ = g.length, d = Promise.resolve(n); h < _; )
        d = d.then(g[h++], g[h++]);
      return d;
    }
    _ = a.length;
    let y = n;
    for (h = 0; h < _; ) {
      const g = a[h++], m = a[h++];
      try {
        y = g(y);
      } catch (u) {
        m.call(this, u);
        break;
      }
    }
    try {
      d = gt.call(this, y);
    } catch (g) {
      return Promise.reject(g);
    }
    for (h = 0, _ = c.length; h < _; )
      d = d.then(c[h++], c[h++]);
    return d;
  }
  getUri(t) {
    t = K(this.defaults, t);
    const n = an(t.baseURL, t.url);
    return nn(n, t.params, t.paramsSerializer);
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
const oo = Qe;
function so(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function io(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const Me = {
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
Object.entries(Me).forEach(([e, t]) => {
  Me[t] = e;
});
const ao = Me;
function ln(e) {
  const t = new ge(e), n = qt(ge.prototype.request, t);
  return l.extend(n, ge.prototype, t, { allOwnKeys: !0 }), l.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return ln(K(e, o));
  }, n;
}
const S = ln(We);
S.Axios = ge;
S.CanceledError = ae;
S.CancelToken = oo;
S.isCancel = sn;
S.VERSION = cn;
S.toFormData = Oe;
S.AxiosError = v;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = so;
S.isAxiosError = io;
S.mergeConfig = K;
S.AxiosHeaders = I;
S.formToJSON = (e) => on(l.isHTMLForm(e) ? new FormData(e) : e);
S.HttpStatusCode = ao;
S.default = S;
const Ie = S;
var wt;
const ce = typeof window < "u", co = (e) => typeof e == "string", lo = () => {
};
ce && ((wt = window == null ? void 0 : window.navigator) != null && wt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ze(e) {
  return typeof e == "function" ? e() : w(e);
}
function uo(e) {
  return e;
}
function Xe(e) {
  return Dn() ? (jn(e), !0) : !1;
}
function fo(e, t = !0) {
  H() ? He(e) : t ? e() : Bt(e);
}
function po(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = C(!1);
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
function un(e) {
  var t;
  const n = Ze(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const fn = ce ? window : void 0;
function mo(...e) {
  let t, n, r, o;
  if (co(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = fn) : [t, n, r, o] = e, !t)
    return lo;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], i = () => {
    s.forEach((d) => d()), s.length = 0;
  }, a = (d, h, _, y) => (d.addEventListener(h, _, y), () => d.removeEventListener(h, _, y)), f = se(() => [un(t), Ze(o)], ([d, h]) => {
    i(), d && s.push(...n.flatMap((_) => r.map((y) => a(d, _, y, h))));
  }, { immediate: !0, flush: "post" }), c = () => {
    f(), i();
  };
  return Xe(c), c;
}
function ho(e, t = !1) {
  const n = C(), r = () => n.value = !!e();
  return r(), fo(r, t), n;
}
const _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, vt = "__vueuse_ssr_handlers__";
_t[vt] = _t[vt] || {};
var Et = Object.getOwnPropertySymbols, go = Object.prototype.hasOwnProperty, yo = Object.prototype.propertyIsEnumerable, bo = (e, t) => {
  var n = {};
  for (var r in e)
    go.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Et)
    for (var r of Et(e))
      t.indexOf(r) < 0 && yo.call(e, r) && (n[r] = e[r]);
  return n;
};
function wo(e, t, n = {}) {
  const r = n, { window: o = fn } = r, s = bo(r, ["window"]);
  let i;
  const a = ho(() => o && "ResizeObserver" in o), f = () => {
    i && (i.disconnect(), i = void 0);
  }, c = se(() => un(e), (h) => {
    f(), a.value && o && h && (i = new ResizeObserver(t), i.observe(h, s));
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
var _o = Object.defineProperty, St = Object.getOwnPropertySymbols, vo = Object.prototype.hasOwnProperty, Eo = Object.prototype.propertyIsEnumerable, Tt = (e, t, n) => t in e ? _o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Oo = (e, t) => {
  for (var n in t || (t = {}))
    vo.call(t, n) && Tt(e, n, t[n]);
  if (St)
    for (var n of St(t))
      Eo.call(t, n) && Tt(e, n, t[n]);
  return e;
};
const So = {
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
Oo({
  linear: uo
}, So);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const To = Object.prototype.hasOwnProperty, Ct = (e, t) => To.call(e, t), Ue = (e) => typeof e == "function", ne = (e) => typeof e == "string", dn = (e) => e !== null && typeof e == "object";
var Co = typeof global == "object" && global && global.Object === Object && global;
const Po = Co;
var xo = typeof self == "object" && self && self.Object === Object && self, No = Po || xo || Function("return this")();
const Ye = No;
var Ro = Ye.Symbol;
const W = Ro;
var pn = Object.prototype, Ao = pn.hasOwnProperty, $o = pn.toString, ee = W ? W.toStringTag : void 0;
function Fo(e) {
  var t = Ao.call(e, ee), n = e[ee];
  try {
    e[ee] = void 0;
    var r = !0;
  } catch {
  }
  var o = $o.call(e);
  return r && (t ? e[ee] = n : delete e[ee]), o;
}
var Io = Object.prototype, Lo = Io.toString;
function Do(e) {
  return Lo.call(e);
}
var jo = "[object Null]", Bo = "[object Undefined]", Pt = W ? W.toStringTag : void 0;
function mn(e) {
  return e == null ? e === void 0 ? Bo : jo : Pt && Pt in Object(e) ? Fo(e) : Do(e);
}
function Mo(e) {
  return e != null && typeof e == "object";
}
var Uo = "[object Symbol]";
function et(e) {
  return typeof e == "symbol" || Mo(e) && mn(e) == Uo;
}
function ko(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var zo = Array.isArray;
const tt = zo;
var Ho = 1 / 0, xt = W ? W.prototype : void 0, Nt = xt ? xt.toString : void 0;
function hn(e) {
  if (typeof e == "string")
    return e;
  if (tt(e))
    return ko(e, hn) + "";
  if (et(e))
    return Nt ? Nt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ho ? "-0" : t;
}
function gn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var qo = "[object AsyncFunction]", Vo = "[object Function]", Jo = "[object GeneratorFunction]", Ko = "[object Proxy]";
function Wo(e) {
  if (!gn(e))
    return !1;
  var t = mn(e);
  return t == Vo || t == Jo || t == qo || t == Ko;
}
var Go = Ye["__core-js_shared__"];
const Le = Go;
var Rt = function() {
  var e = /[^.]+$/.exec(Le && Le.keys && Le.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Qo(e) {
  return !!Rt && Rt in e;
}
var Zo = Function.prototype, Xo = Zo.toString;
function Yo(e) {
  if (e != null) {
    try {
      return Xo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var es = /[\\^$.*+?()[\]{}|]/g, ts = /^\[object .+?Constructor\]$/, ns = Function.prototype, rs = Object.prototype, os = ns.toString, ss = rs.hasOwnProperty, is = RegExp(
  "^" + os.call(ss).replace(es, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function as(e) {
  if (!gn(e) || Qo(e))
    return !1;
  var t = Wo(e) ? is : ts;
  return t.test(Yo(e));
}
function cs(e, t) {
  return e == null ? void 0 : e[t];
}
function yn(e, t) {
  var n = cs(e, t);
  return as(n) ? n : void 0;
}
function ls(e, t) {
  return e === t || e !== e && t !== t;
}
var us = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fs = /^\w*$/;
function ds(e, t) {
  if (tt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || et(e) ? !0 : fs.test(e) || !us.test(e) || t != null && e in Object(t);
}
var ps = yn(Object, "create");
const re = ps;
function ms() {
  this.__data__ = re ? re(null) : {}, this.size = 0;
}
function hs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var gs = "__lodash_hash_undefined__", ys = Object.prototype, bs = ys.hasOwnProperty;
function ws(e) {
  var t = this.__data__;
  if (re) {
    var n = t[e];
    return n === gs ? void 0 : n;
  }
  return bs.call(t, e) ? t[e] : void 0;
}
var _s = Object.prototype, vs = _s.hasOwnProperty;
function Es(e) {
  var t = this.__data__;
  return re ? t[e] !== void 0 : vs.call(t, e);
}
var Os = "__lodash_hash_undefined__";
function Ss(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = re && t === void 0 ? Os : t, this;
}
function q(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
q.prototype.clear = ms;
q.prototype.delete = hs;
q.prototype.get = ws;
q.prototype.has = Es;
q.prototype.set = Ss;
function Ts() {
  this.__data__ = [], this.size = 0;
}
function Ce(e, t) {
  for (var n = e.length; n--; )
    if (ls(e[n][0], t))
      return n;
  return -1;
}
var Cs = Array.prototype, Ps = Cs.splice;
function xs(e) {
  var t = this.__data__, n = Ce(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Ps.call(t, n, 1), --this.size, !0;
}
function Ns(e) {
  var t = this.__data__, n = Ce(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Rs(e) {
  return Ce(this.__data__, e) > -1;
}
function As(e, t) {
  var n = this.__data__, r = Ce(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Z(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Z.prototype.clear = Ts;
Z.prototype.delete = xs;
Z.prototype.get = Ns;
Z.prototype.has = Rs;
Z.prototype.set = As;
var $s = yn(Ye, "Map");
const Fs = $s;
function Is() {
  this.size = 0, this.__data__ = {
    hash: new q(),
    map: new (Fs || Z)(),
    string: new q()
  };
}
function Ls(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Pe(e, t) {
  var n = e.__data__;
  return Ls(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ds(e) {
  var t = Pe(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function js(e) {
  return Pe(this, e).get(e);
}
function Bs(e) {
  return Pe(this, e).has(e);
}
function Ms(e, t) {
  var n = Pe(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function J(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
J.prototype.clear = Is;
J.prototype.delete = Ds;
J.prototype.get = js;
J.prototype.has = Bs;
J.prototype.set = Ms;
var Us = "Expected a function";
function nt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Us);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var i = e.apply(this, r);
    return n.cache = s.set(o, i) || s, i;
  };
  return n.cache = new (nt.Cache || J)(), n;
}
nt.Cache = J;
var ks = 500;
function zs(e) {
  var t = nt(e, function(r) {
    return n.size === ks && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Hs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qs = /\\(\\)?/g, Vs = zs(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Hs, function(n, r, o, s) {
    t.push(o ? s.replace(qs, "$1") : r || n);
  }), t;
});
const Js = Vs;
function Ks(e) {
  return e == null ? "" : hn(e);
}
function Ws(e, t) {
  return tt(e) ? e : ds(e, t) ? [e] : Js(Ks(e));
}
var Gs = 1 / 0;
function Qs(e) {
  if (typeof e == "string" || et(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Gs ? "-0" : t;
}
function Zs(e, t) {
  t = Ws(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Qs(t[n++])];
  return n && n == r ? e : void 0;
}
function Xs(e, t, n) {
  var r = e == null ? void 0 : Zs(e, t);
  return r === void 0 ? n : r;
}
function Ys(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
const ei = (e) => e === void 0, oe = (e) => typeof e == "number", ti = (e) => typeof Element > "u" ? !1 : e instanceof Element, ni = (e) => ne(e) ? !Number.isNaN(Number(e)) : !1, At = (e) => Object.keys(e);
class ri extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function rt(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = ne(e) ? new ri(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const oi = "utils/dom/style";
function si(e, t = "px") {
  if (!e)
    return "";
  if (oe(e) || ni(e))
    return `${e}${t}`;
  if (ne(e))
    return e;
  rt(oi, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.1.0 */
var le = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [r, o] of t)
    n[r] = o;
  return n;
}, ii = {
  name: "CircleCloseFilled"
}, ai = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ci = /* @__PURE__ */ k(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
  },
  null,
  -1
  /* HOISTED */
), li = [
  ci
];
function ui(e, t, n, r, o, s) {
  return N(), L("svg", ai, li);
}
var bn = /* @__PURE__ */ le(ii, [["render", ui], ["__file", "circle-close-filled.vue"]]), fi = {
  name: "Close"
}, di = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pi = /* @__PURE__ */ k(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), mi = [
  pi
];
function hi(e, t, n, r, o, s) {
  return N(), L("svg", di, mi);
}
var gi = /* @__PURE__ */ le(fi, [["render", hi], ["__file", "close.vue"]]), yi = {
  name: "InfoFilled"
}, bi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, wi = /* @__PURE__ */ k(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
  },
  null,
  -1
  /* HOISTED */
), _i = [
  wi
];
function vi(e, t, n, r, o, s) {
  return N(), L("svg", bi, _i);
}
var wn = /* @__PURE__ */ le(yi, [["render", vi], ["__file", "info-filled.vue"]]), Ei = {
  name: "SuccessFilled"
}, Oi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Si = /* @__PURE__ */ k(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
  },
  null,
  -1
  /* HOISTED */
), Ti = [
  Si
];
function Ci(e, t, n, r, o, s) {
  return N(), L("svg", Oi, Ti);
}
var _n = /* @__PURE__ */ le(Ei, [["render", Ci], ["__file", "success-filled.vue"]]), Pi = {
  name: "WarningFilled"
}, xi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ni = /* @__PURE__ */ k(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
  },
  null,
  -1
  /* HOISTED */
), Ri = [
  Ni
];
function Ai(e, t, n, r, o, s) {
  return N(), L("svg", xi, Ri);
}
var vn = /* @__PURE__ */ le(Pi, [["render", Ai], ["__file", "warning-filled.vue"]]);
const En = "__epPropKey", U = (e) => e, $i = (e) => dn(e) && !!e[En], On = (e, t) => {
  if (!dn(e) || $i(e))
    return e;
  const { values: n, required: r, default: o, type: s, validator: i } = e, f = {
    type: s,
    required: !!r,
    validator: n || i ? (c) => {
      let d = !1, h = [];
      if (n && (h = Array.from(n), Ct(e, "default") && h.push(o), d || (d = h.includes(c))), i && (d || (d = i(c))), !d && h.length > 0) {
        const _ = [...new Set(h)].map((y) => JSON.stringify(y)).join(", ");
        Mn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${_}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [En]: !0
  };
  return Ct(e, "default") && (f.default = o), f;
}, xe = (e) => Ys(Object.entries(e).map(([t, n]) => [
  t,
  On(n, t)
])), Fi = U([
  String,
  Object,
  Function
]), Ii = {
  Close: gi,
  SuccessFilled: _n,
  InfoFilled: wn,
  WarningFilled: vn,
  CircleCloseFilled: bn
}, $t = {
  success: _n,
  warning: vn,
  error: bn,
  info: wn
}, Sn = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Li = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Di = {
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
}, ji = ["", "default", "small", "large"], Bi = (e) => e;
var Mi = {
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
const Ui = (e) => (t, n) => ki(t, n, w(e)), ki = (e, t, n) => Xs(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var s;
  return `${(s = t == null ? void 0 : t[o]) != null ? s : `{${o}}`}`;
}), zi = (e) => {
  const t = E(() => w(e).name), n = Un(e) ? e : C(e);
  return {
    lang: t,
    locale: n,
    t: Ui(e)
  };
}, Tn = Symbol("localeContextKey"), Hi = (e) => {
  const t = e || we(Tn, C());
  return zi(E(() => t.value || Mi));
}, ke = "el", qi = "is-", z = (e, t, n, r, o) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), r && (s += `__${r}`), o && (s += `--${o}`), s;
}, Cn = Symbol("namespaceContextKey"), Vi = (e) => {
  const t = e || we(Cn, C(ke));
  return E(() => w(t) || ke);
}, ot = (e, t) => {
  const n = Vi(t);
  return {
    namespace: n,
    b: (m = "") => z(n.value, e, m, "", ""),
    e: (m) => m ? z(n.value, e, "", m, "") : "",
    m: (m) => m ? z(n.value, e, "", "", m) : "",
    be: (m, u) => m && u ? z(n.value, e, m, u, "") : "",
    em: (m, u) => m && u ? z(n.value, e, "", m, u) : "",
    bm: (m, u) => m && u ? z(n.value, e, m, "", u) : "",
    bem: (m, u, p) => m && u && p ? z(n.value, e, m, u, p) : "",
    is: (m, ...u) => {
      const p = u.length >= 1 ? u[0] : !0;
      return m && p ? `${qi}${m}` : "";
    },
    cssVar: (m) => {
      const u = {};
      for (const p in m)
        m[p] && (u[`--${n.value}-${p}`] = m[p]);
      return u;
    },
    cssVarName: (m) => `--${n.value}-${m}`,
    cssVarBlock: (m) => {
      const u = {};
      for (const p in m)
        m[p] && (u[`--${n.value}-${e}-${p}`] = m[p]);
      return u;
    },
    cssVarBlockName: (m) => `--${n.value}-${e}-${m}`
  };
}, Ft = C(0), Pn = 2e3, xn = Symbol("zIndexContextKey"), Ji = (e) => {
  const t = e || we(xn, void 0), n = E(() => {
    const s = w(t);
    return oe(s) ? s : Pn;
  }), r = E(() => n.value + Ft.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (Ft.value++, r.value)
  };
}, Ki = On({
  type: String,
  values: ji,
  required: !1
}), Wi = Symbol("size"), Nn = Symbol(), be = C();
function Rn(e, t = void 0) {
  const n = H() ? we(Nn, be) : be;
  return e ? E(() => {
    var r, o;
    return (o = (r = n.value) == null ? void 0 : r[e]) != null ? o : t;
  }) : n;
}
function Gi(e, t) {
  const n = Rn(), r = ot(e, E(() => {
    var a;
    return ((a = n.value) == null ? void 0 : a.namespace) || ke;
  })), o = Hi(E(() => {
    var a;
    return (a = n.value) == null ? void 0 : a.locale;
  })), s = Ji(E(() => {
    var a;
    return ((a = n.value) == null ? void 0 : a.zIndex) || Pn;
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
  const o = !!H(), s = o ? Rn() : void 0, i = (r = t == null ? void 0 : t.provide) != null ? r : o ? kn : void 0;
  if (!i) {
    rt("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const a = E(() => {
    const f = w(e);
    return s != null && s.value ? Qi(s.value, f) : f;
  });
  return i(Nn, a), i(Tn, E(() => a.value.locale)), i(Cn, E(() => a.value.namespace)), i(xn, E(() => a.value.zIndex)), i(Wi, {
    size: E(() => a.value.size || "")
  }), (n || !be.value) && (be.value = a.value), a;
}, Qi = (e, t) => {
  var n;
  const r = [.../* @__PURE__ */ new Set([...At(e), ...At(t)])], o = {};
  for (const s of r)
    o[s] = (n = t[s]) != null ? n : e[s];
  return o;
}, Zi = xe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: U(Object)
  },
  size: Ki,
  button: {
    type: U(Object)
  },
  experimentalFeatures: {
    type: U(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: U(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), ze = {};
V({
  name: "ElConfigProvider",
  props: Zi,
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
const Xi = xe({
  size: {
    type: U([Number, String])
  },
  color: {
    type: String
  }
}), Yi = V({
  name: "ElIcon",
  inheritAttrs: !1
}), ea = /* @__PURE__ */ V({
  ...Yi,
  props: Xi,
  setup(e) {
    const t = e, n = ot("icon"), r = E(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: ei(o) ? void 0 : si(o),
        "--color": s
      };
    });
    return (o, s) => (N(), L("i", zn({
      class: w(n).b(),
      style: w(r)
    }, o.$attrs), [
      _e(o.$slots, "default")
    ], 16));
  }
});
var ta = /* @__PURE__ */ st(ea, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const It = Sn(ta), na = xe({
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
}), ra = ["textContent"], oa = V({
  name: "ElBadge"
}), sa = /* @__PURE__ */ V({
  ...oa,
  props: na,
  setup(e, { expose: t }) {
    const n = e, r = ot("badge"), o = E(() => n.isDot ? "" : oe(n.value) && oe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`);
    return t({
      content: o
    }), (s, i) => (N(), L("div", {
      class: M(w(r).b())
    }, [
      _e(s.$slots, "default"),
      qe(Mt, {
        name: `${w(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: de(() => [
          Ut(k("sup", {
            class: M([
              w(r).e("content"),
              w(r).em("content", s.type),
              w(r).is("fixed", !!s.$slots.default),
              w(r).is("dot", s.isDot)
            ]),
            textContent: kt(w(o))
          }, null, 10, ra), [
            [zt, !s.hidden && (w(o) || s.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var ia = /* @__PURE__ */ st(sa, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const aa = Sn(ia), $n = ["success", "info", "warning", "error"], x = Bi({
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
}), ca = xe({
  customClass: {
    type: String,
    default: x.customClass
  },
  center: {
    type: Boolean,
    default: x.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: x.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: x.duration
  },
  icon: {
    type: Fi,
    default: x.icon
  },
  id: {
    type: String,
    default: x.id
  },
  message: {
    type: U([
      String,
      Object,
      Function
    ]),
    default: x.message
  },
  onClose: {
    type: U(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: x.showClose
  },
  type: {
    type: String,
    values: $n,
    default: x.type
  },
  offset: {
    type: Number,
    default: x.offset
  },
  zIndex: {
    type: Number,
    default: x.zIndex
  },
  grouping: {
    type: Boolean,
    default: x.grouping
  },
  repeatNum: {
    type: Number,
    default: x.repeatNum
  }
}), la = {
  destroy: () => !0
}, A = Hn([]), ua = (e) => {
  const t = A.findIndex((o) => o.id === e), n = A[t];
  let r;
  return t > 0 && (r = A[t - 1]), { current: n, prev: r };
}, fa = (e) => {
  const { prev: t } = ua(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, da = (e, t) => A.findIndex((r) => r.id === e) > 0 ? 20 : t, pa = ["id"], ma = ["innerHTML"], ha = V({
  name: "ElMessage"
}), ga = /* @__PURE__ */ V({
  ...ha,
  props: ca,
  emits: la,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = Ii, { ns: o, zIndex: s } = Gi("message"), { currentZIndex: i, nextZIndex: a } = s, f = C(), c = C(!1), d = C(0);
    let h;
    const _ = E(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = E(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && $t[O] };
    }), g = E(() => n.icon || $t[n.type] || ""), m = E(() => fa(n.id)), u = E(() => da(n.id, n.offset) + m.value), p = E(() => d.value + u.value), b = E(() => ({
      top: `${u.value}px`,
      zIndex: i.value
    }));
    function T() {
      n.duration !== 0 && ({ stop: h } = po(() => {
        R();
      }, n.duration));
    }
    function P() {
      h == null || h();
    }
    function R() {
      c.value = !1;
    }
    function Ne({ code: O }) {
      O === Di.esc && R();
    }
    return He(() => {
      T(), a(), c.value = !0;
    }), se(() => n.repeatNum, () => {
      P(), T();
    }), mo(document, "keydown", Ne), wo(f, () => {
      d.value = f.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: p,
      close: R
    }), (O, F) => (N(), X(Mt, {
      name: w(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: F[0] || (F[0] = (ue) => O.$emit("destroy")),
      persisted: ""
    }, {
      default: de(() => [
        Ut(k("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: f,
          class: M([
            w(o).b(),
            { [w(o).m(O.type)]: O.type && !O.icon },
            w(o).is("center", O.center),
            w(o).is("closable", O.showClose),
            O.customClass
          ]),
          style: qn(w(b)),
          role: "alert",
          onMouseenter: P,
          onMouseleave: T
        }, [
          O.repeatNum > 1 ? (N(), X(w(aa), {
            key: 0,
            value: O.repeatNum,
            type: w(_),
            class: M(w(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : fe("v-if", !0),
          w(g) ? (N(), X(w(It), {
            key: 1,
            class: M([w(o).e("icon"), w(y)])
          }, {
            default: de(() => [
              (N(), X(Vn(w(g))))
            ]),
            _: 1
          }, 8, ["class"])) : fe("v-if", !0),
          _e(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (N(), L(Jn, { key: 1 }, [
              fe(" Caution here, message could've been compromised, never use user's input as message "),
              k("p", {
                class: M(w(o).e("content")),
                innerHTML: O.message
              }, null, 10, ma)
            ], 2112)) : (N(), L("p", {
              key: 0,
              class: M(w(o).e("content"))
            }, kt(O.message), 3))
          ]),
          O.showClose ? (N(), X(w(It), {
            key: 2,
            class: M(w(o).e("closeBtn")),
            onClick: Kn(R, ["stop"])
          }, {
            default: de(() => [
              qe(w(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : fe("v-if", !0)
        ], 46, pa), [
          [zt, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var ya = /* @__PURE__ */ st(ga, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let ba = 1;
const Fn = (e) => {
  const t = !e || ne(e) || Ht(e) || Ue(e) ? { message: e } : e, n = {
    ...x,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ne(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    ti(r) || (rt("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), r = document.body), n.appendTo = r;
  }
  return n;
}, wa = (e) => {
  const t = A.indexOf(e);
  if (t === -1)
    return;
  A.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, _a = ({ appendTo: e, ...t }, n) => {
  const r = `message_${ba++}`, o = t.onClose, s = document.createElement("div"), i = {
    ...t,
    id: r,
    onClose: () => {
      o == null || o(), wa(d);
    },
    onDestroy: () => {
      ct(null, s);
    }
  }, a = qe(ya, i, Ue(i.message) || Ht(i.message) ? {
    default: Ue(i.message) ? i.message : () => i.message
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
  if (oe(ze.max) && A.length >= ze.max)
    return { close: () => {
    } };
  const n = Fn(e);
  if (n.grouping && A.length) {
    const o = A.find(({ vnode: s }) => {
      var i;
      return ((i = s.props) == null ? void 0 : i.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  const r = _a(n, t);
  return A.push(r), r.handler;
};
$n.forEach((e) => {
  G[e] = (t = {}, n) => {
    const r = Fn(t);
    return G({ ...r, type: e }, n);
  };
});
function va(e) {
  for (const t of A)
    (!e || e === t.props.type) && t.handler.close();
}
G.closeAll = va;
G._context = null;
const Lt = Li(G, "$message");
function Ta({
  instance: e = Ie,
  beforeRequest: t,
  beforeResponse: n,
  responseHandler: r,
  errorHandler: o,
  errorResponse: s,
  excludePeddings: i = []
} = {}) {
  let a = e;
  a || (a = Ie, a.defaults.timeout = 1e4, a.defaults.withCredentials = !0, a.defaults.headers = {
    // 设置默认请求头
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=UTF-8"
  });
  const f = (u, p) => {
    o ? o(u, p) : (Lt.closeAll(), Lt.error(u));
  }, c = [], d = Ie.CancelToken, h = (u) => {
    const { url: p, method: b, cancelable: T = !0 } = u, P = `${p}&${b}`;
    for (const R in c)
      c[R].url === P && !i.includes(P) && T && (c[R].fn(), c.splice(R, 1));
  };
  a.interceptors.request.use(async (u) => {
    const p = t ? await t(u) : u;
    return h(p), p.cancelToken = new d((b) => {
      c.push({ url: `${p.url}&${p.method}`, fn: b });
    }), p;
  }), a.interceptors.response.use(
    async (u) => {
      if (h(u.config), n)
        return n ? await n(u) : u;
      if (r)
        return await r(u);
      const { data: p, data: { code: b }, config: T } = u || {};
      return [0, 1001].includes(b) ? p : (p && s(p, T), f(u.message, p));
    },
    async (u) => {
      if (u.code === "ERR_CANCELED")
        return "";
      if (u && u.response) {
        const { data: p, status: b, config: T } = u.response;
        if (b && s) {
          const [P] = (p == null ? void 0 : p.errors) || [];
          await s(P ?? p, T);
        }
        if (p.errors && p.errors.length)
          u.message = p.errors[0].message || p.message;
        else {
          const P = {
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
          u.message = P[b];
        }
        f(u.message, p);
      }
      return u.message && u.message.includes("timeout of") && (u.message = "网络超时, 请检查网络！"), u.message ? Promise.reject(u) : u;
    }
  );
  const _ = (u, p = !1) => p ? u : u.data ?? !0, y = async (u, p, b = {}, T = "get", P = !1) => {
    try {
      const R = {};
      if (p) {
        const O = (F) => /\[|\]/g.test(F);
        Object.keys(p).forEach((F) => {
          R[F] = p[F] && O ? [...p[F].toString()].map((ue) => O(ue) ? encodeURIComponent(ue) : ue).join("") : p[F];
        });
      }
      const Ne = ["post", "put"].includes(T) ? await a({
        method: T,
        url: u,
        data: p,
        ...b
      }) : await a[T](u, { params: R, ...b });
      return _(Ne, P);
    } catch (R) {
      if (P)
        return R;
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
function Ca() {
  const e = H(), { globalProperties: t } = e.appContext.config, { $message: n, $messageBox: r } = t, o = (a, f, c) => {
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
      }) => new Promise((h, _) => {
        parent.window.postMessage("openMask()", "*"), window.top.postMessage("openMask()", "*"), r.confirm(a, f, {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          buttonSize: "",
          type: c,
          ...d
        }).then(() => h(!0)).catch(() => _()).finally(() => {
          parent.window.postMessage("closeMask()", "*"), window.top.postMessage("closeMask()", "*");
        });
      }),
      alert: ({ msg: a, title: f = "提示", type: c = "warning" }, d) => {
        r.alert(a, f, {
          confirmButtonText: "确认",
          type: c,
          callback: (h) => d(h)
        });
      }
    }
  };
}
function Pa() {
  const e = C(null);
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
function xa() {
  const e = C(1), t = C(1), n = C(1), r = C([]), o = C(!0), s = C(!1);
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
        pageNo: h = 1,
        pageIndex: _,
        totalRecord: y = 1
      } = f || {};
      r.value = c, o.value = !1, e.value = d, t.value = y, n.value = _ ?? h, s.value = !c.length;
    },
    isNullData: s
  };
}
function Na() {
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
const Ra = {
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
function Ea() {
  return { getImageUrl: (t, n = "images", r = H()) => {
    var a;
    const o = (a = r.type.__file.split("src")) == null ? void 0 : a[1], s = `${window.location.origin}/src${o}`, i = /^(\.{1,2}\/)/.test(n) ? n : `../../assets/${n}`;
    return new URL(`${i}/${t}`, s).href;
  } };
}
const Dt = (e, t, n) => {
  const { getImageUrl: r } = Ea(), { floder: o, name: s } = t.value || {}, i = r(s, o, n == null ? void 0 : n.ctx);
  e.setAttribute("src", i);
}, Aa = {
  mounted: (e, t, n) => Dt(e, t, n),
  updated: (e, t, n) => Dt(e, t, n)
}, jt = (e, t) => {
  const { money: n, number: r } = t.modifiers;
  n ? e.innerHTML = `￥${Number(t.value).toFixed(2)}` : e.innerHTML = t.value || (r ? 0 : "-");
}, $a = {
  mounted: (e, t) => jt(e, t),
  updated: (e, t) => jt(e, t)
};
function Fa() {
  return { getFormatParams: (n, r = 0) => n ?? r, formatRadixPoint: (n, r = 2) => {
    var s;
    const o = new RegExp(`^\\d+(\\.\\d{0,${r}})?`, "g");
    return n.indexOf(".") > 0 ? (s = n.match(o)) == null ? void 0 : s[0] : /(^0\d+)/.test(n) ? n.substr(1) : n;
  } };
}
export {
  Aa as VImageUrl,
  $a as VParams,
  Sa as useCommon,
  Na as useFilters,
  Pa as useForm,
  Ea as useImage,
  Ca as useMessage,
  xa as usePage,
  Ta as useRequest,
  Fa as useUtils,
  Ra as vOnClickActive
};
