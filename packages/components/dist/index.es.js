import { shallowRef as fn, watchEffect as Mt, readonly as cr, unref as u, getCurrentScope as Ld, onScopeDispose as eu, getCurrentInstance as Le, onMounted as Ge, nextTick as $e, ref as O, watch as ue, defineComponent as Q, openBlock as _, createElementBlock as L, createElementVNode as K, warn as Fd, isVNode as Pn, Fragment as Te, Comment as dr, computed as k, onBeforeUnmount as Ut, inject as Se, isRef as Un, onBeforeMount as fr, provide as ct, renderSlot as ae, mergeProps as Ue, toRef as wt, onUnmounted as $a, useAttrs as Zo, useSlots as Nn, withDirectives as je, createCommentVNode as ie, normalizeClass as A, createBlock as oe, withCtx as X, resolveDynamicComponent as rt, withModifiers as Ze, createVNode as q, toDisplayString as pe, normalizeStyle as Fe, vShow as $t, Transition as qn, reactive as Rn, onUpdated as Qo, cloneVNode as Bd, Text as tu, Teleport as nu, onDeactivated as Vd, renderList as He, createTextVNode as Qe, toRaw as da, vModelCheckbox as Vo, toRefs as _a, withKeys as ut, h as Pe, createSlots as vn, triggerRef as Ma, resolveComponent as he, resolveDirective as pr, vModelText as zd, useCssVars as vr, normalizeProps as as } from "vue";
const Ia = {
  /**
   * 输入框得到焦点
   */
  focus: {
    mounted: (e) => {
      setTimeout(() => {
        e.querySelector("input").focus();
      }, 100);
    }
  },
  /**
   * 输入框自动获取焦点 更新和创建
   */
  autofocus: {
    mounted: (e) => {
      setTimeout(() => {
        e.querySelector("input").focus();
      }, 100);
    },
    updated: (e) => {
      setTimeout(() => {
        e.querySelector("input").focus();
      }, 100);
    }
  },
  /**
   * 返参金额的处理
   * @param { string } inter 数字浮点类型
   * @example v-money.point 小数点后两位
   * @example v-money=“value” 更新后的数据
  */
  money: {
    mounted: (e, t) => {
      const n = e.textContent;
      if (typeof Number(n) != "number")
        return;
      let a = "￥0";
      const { inter: o, point: l } = t.modifiers, s = l ? t.value : 2, r = n >= 0 ? `￥${Number(n).toFixed(s)}` : `-￥${Math.abs(Number(n.toFixed(s)))}`;
      o ? a = n >= 0 ? `￥${n}` : `-￥${Math.abs(n)}` : a = n ? r : "￥0.00", e.innerHTML = `${a}`;
    },
    updated: (e, t) => {
      const { point: n } = t.modifiers, a = n ? t.value : 2, o = t.arg === "value" && t.value ? `￥${Number(t.value).toFixed(a)}` : e.textContent;
      e.innerHTML = o;
    }
  },
  /**
   * 参数为空的处理
  */
  params: {
    mounted: (e) => {
      const t = e.textContent;
      e.innerHTML = `${t}` || "-";
    }
  },
  /**
   * title
   * 文字超出显示，绑定title，鼠标hover事件显示内容
   */
  title: {
    mounted: (e) => {
      e.parentNode.style.position = "relative";
      const t = document.createElement("div");
      t.innerHTML = e.textContent, t.setAttribute("class", "title-hover");
      const n = document.createElement("div");
      n.setAttribute("class", "border-div"), t.appendChild(n), e.setAttribute("class", "text-ellipsis"), e.onmouseover = () => {
        e.parentNode.appendChild(t);
      }, e.onmouseout = () => {
        e.parentNode.removeChild(t);
      };
    }
  },
  /**
   * 键盘事件
   * @example
   * <div v-keyboard:[fn].focus="object"><div>  fn：执行的方法  object:{ buttonKey:'Enter' }
   * modifiers: { focus, dialog, any }
   * focus：输入框焦点下是否可用 dialog：是否是弹框可用 long:不主动断开，长监听 any: 监听所有键值 fast: 是否快速扫码
   */
  keyboard: {
    mounted: (e, t) => {
      let n = 0;
      e.handler = function(a) {
        const o = Date.now(), l = /^[a-zA-Z]{2,}/.test(a.key) ? a.key : a.key.toLocaleUpperCase(), { buttonKey: s, isCombination: r = 0 } = t.value || e.valueKeys || {}, i = document.contains(e), c = a.target.tagName === "TEXTAREA" || a.target.tagName === "INPUT", {
          dialog: f,
          focus: d,
          long: v,
          any: m,
          fast: h
        } = t.modifiers;
        if (!i && !v) {
          document.removeEventListener("keydown", e.handler);
          return;
        }
        if (m && t.arg) {
          t.arg(a);
          return;
        }
        const p = h ? o - n > 30 : !0, b = document.querySelector(".el-popup-parent--hidden") || document.querySelector(".is-message-box");
        if (n = o, b && !f)
          return;
        const g = a.ctrlKey || a.metaKey, w = r === +g && s === l;
        (!c || d || r) && w && p && t.arg && t.arg(a);
      }, document.addEventListener("keydown", e.handler);
    },
    updated(e, t) {
      e.valueKeys = t.value, document.addEventListener("keydown", e.handler);
    },
    unmounted: (e) => {
      document.removeEventListener("keydown", e.handler);
    }
  },
  /**
   * 按钮点击防抖
   */
  button: {
    mounted: (e, t) => {
      e.handler = function() {
        const { delay: n = 800, content: a } = t.value || {};
        e.classList.add("is-disabled"), e.disabled = !0, a && (e.beforeText = e.textContent, e.innerHTML = a);
        const { once: o } = t.modifiers;
        o || (e.timer = setTimeout(() => {
          e.classList.remove("is-disabled"), e.disabled = !1, a && (e.innerHTML = e.beforeText), e.beforeText = null, clearTimeout(e.timer), e.timer = null;
        }, n));
      }, e.addEventListener("click", e.handler);
    },
    updated(e) {
      e.addEventListener("click", e.handler);
    },
    unmounted: (e) => {
      e.removeEventListener("click", e.handler);
    }
  }
};
Ia.install = function(e) {
  Object.keys(Ia).forEach((t) => {
    e.directive(t, Ia[t]);
  });
};
const dn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const l = e == null ? void 0 : e(o);
  if (n === !1 || !l)
    return t == null ? void 0 : t(o);
};
var Hd = Object.defineProperty, Kd = Object.defineProperties, Wd = Object.getOwnPropertyDescriptors, os = Object.getOwnPropertySymbols, jd = Object.prototype.hasOwnProperty, Yd = Object.prototype.propertyIsEnumerable, ls = (e, t, n) => t in e ? Hd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ud = (e, t) => {
  for (var n in t || (t = {}))
    jd.call(t, n) && ls(e, n, t[n]);
  if (os)
    for (var n of os(t))
      Yd.call(t, n) && ls(e, n, t[n]);
  return e;
}, qd = (e, t) => Kd(e, Wd(t));
function rs(e, t) {
  var n;
  const a = fn();
  return Mt(() => {
    a.value = e();
  }, qd(Ud({}, t), {
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  })), cr(a);
}
var ss;
const qe = typeof window < "u", Gd = (e) => typeof e == "string", au = () => {
}, ou = qe && ((ss = window == null ? void 0 : window.navigator) == null ? void 0 : ss.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function mr(e) {
  return typeof e == "function" ? e() : u(e);
}
function Xd(e) {
  return e;
}
function Jo(e) {
  return Ld() ? (eu(e), !0) : !1;
}
function Zd(e, t = !0) {
  Le() ? Ge(e) : t ? e() : $e(e);
}
function is(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, o = O(!1);
  let l = null;
  function s() {
    l && (clearTimeout(l), l = null);
  }
  function r() {
    o.value = !1, s();
  }
  function i(...c) {
    s(), o.value = !0, l = setTimeout(() => {
      o.value = !1, l = null, e(...c);
    }, mr(t));
  }
  return a && (o.value = !0, qe && i()), Jo(r), {
    isPending: cr(o),
    start: i,
    stop: r
  };
}
function _n(e) {
  var t;
  const n = mr(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const el = qe ? window : void 0, Qd = qe ? window.document : void 0;
function Kt(...e) {
  let t, n, a, o;
  if (Gd(e[0]) || Array.isArray(e[0]) ? ([n, a, o] = e, t = el) : [t, n, a, o] = e, !t)
    return au;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const l = [], s = () => {
    l.forEach((f) => f()), l.length = 0;
  }, r = (f, d, v, m) => (f.addEventListener(d, v, m), () => f.removeEventListener(d, v, m)), i = ue(() => [_n(t), mr(o)], ([f, d]) => {
    s(), f && l.push(...n.flatMap((v) => a.map((m) => r(f, v, m, d))));
  }, { immediate: !0, flush: "post" }), c = () => {
    i(), s();
  };
  return Jo(c), c;
}
let us = !1;
function lu(e, t, n = {}) {
  const { window: a = el, ignore: o = [], capture: l = !0, detectIframe: s = !1 } = n;
  if (!a)
    return;
  ou && !us && (us = !0, Array.from(a.document.body.children).forEach((v) => v.addEventListener("click", au)));
  let r = !0;
  const i = (v) => o.some((m) => {
    if (typeof m == "string")
      return Array.from(a.document.querySelectorAll(m)).some((h) => h === v.target || v.composedPath().includes(h));
    {
      const h = _n(m);
      return h && (v.target === h || v.composedPath().includes(h));
    }
  }), f = [
    Kt(a, "click", (v) => {
      const m = _n(e);
      if (!(!m || m === v.target || v.composedPath().includes(m))) {
        if (v.detail === 0 && (r = !i(v)), !r) {
          r = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: l }),
    Kt(a, "pointerdown", (v) => {
      const m = _n(e);
      m && (r = !v.composedPath().includes(m) && !i(v));
    }, { passive: !0 }),
    s && Kt(a, "blur", (v) => {
      var m;
      const h = _n(e);
      ((m = a.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(h != null && h.contains(a.document.activeElement)) && t(v);
    })
  ].filter(Boolean);
  return () => f.forEach((v) => v());
}
function Jd(e, t = !1) {
  const n = O(), a = () => n.value = !!e();
  return a(), Zd(a, t), n;
}
const cs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ds = "__vueuse_ssr_handlers__";
cs[ds] = cs[ds] || {};
function ef({ document: e = Qd } = {}) {
  if (!e)
    return O("visible");
  const t = O(e.visibilityState);
  return Kt(e, "visibilitychange", () => {
    t.value = e.visibilityState;
  }), t;
}
var fs = Object.getOwnPropertySymbols, tf = Object.prototype.hasOwnProperty, nf = Object.prototype.propertyIsEnumerable, af = (e, t) => {
  var n = {};
  for (var a in e)
    tf.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && fs)
    for (var a of fs(e))
      t.indexOf(a) < 0 && nf.call(e, a) && (n[a] = e[a]);
  return n;
};
function Mn(e, t, n = {}) {
  const a = n, { window: o = el } = a, l = af(a, ["window"]);
  let s;
  const r = Jd(() => o && "ResizeObserver" in o), i = () => {
    s && (s.disconnect(), s = void 0);
  }, c = ue(() => _n(e), (d) => {
    i(), r.value && o && d && (s = new ResizeObserver(t), s.observe(d, l));
  }, { immediate: !0, flush: "post" }), f = () => {
    i(), c();
  };
  return Jo(f), {
    isSupported: r,
    stop: f
  };
}
var ps;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ps || (ps = {}));
var of = Object.defineProperty, vs = Object.getOwnPropertySymbols, lf = Object.prototype.hasOwnProperty, rf = Object.prototype.propertyIsEnumerable, ms = (e, t, n) => t in e ? of(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, sf = (e, t) => {
  for (var n in t || (t = {}))
    lf.call(t, n) && ms(e, n, t[n]);
  if (vs)
    for (var n of vs(t))
      rf.call(t, n) && ms(e, n, t[n]);
  return e;
};
const uf = {
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
sf({
  linear: Xd
}, uf);
function cf({ window: e = el } = {}) {
  if (!e)
    return O(!1);
  const t = O(e.document.hasFocus());
  return Kt(e, "blur", () => {
    t.value = !1;
  }), Kt(e, "focus", () => {
    t.value = !0;
  }), t;
}
const df = () => qe && /firefox/i.test(window.navigator.userAgent);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const pn = () => {
}, ru = Object.assign, ff = Object.prototype.hasOwnProperty, Gn = (e, t) => ff.call(e, t), ze = Array.isArray, hs = (e) => su(e) === "[object Date]", pt = (e) => typeof e == "function", xt = (e) => typeof e == "string", pf = (e) => typeof e == "symbol", _t = (e) => e !== null && typeof e == "object", vf = Object.prototype.toString, su = (e) => vf.call(e), gl = (e) => su(e).slice(8, -1), iu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, mf = /-(\w)/g, hf = iu((e) => e.replace(mf, (t, n) => n ? n.toUpperCase() : "")), gf = iu((e) => e.charAt(0).toUpperCase() + e.slice(1));
var bf = typeof global == "object" && global && global.Object === Object && global;
const uu = bf;
var yf = typeof self == "object" && self && self.Object === Object && self, wf = uu || yf || Function("return this")();
const Zt = wf;
var Cf = Zt.Symbol;
const on = Cf;
var cu = Object.prototype, Sf = cu.hasOwnProperty, kf = cu.toString, xa = on ? on.toStringTag : void 0;
function $f(e) {
  var t = Sf.call(e, xa), n = e[xa];
  try {
    e[xa] = void 0;
    var a = !0;
  } catch {
  }
  var o = kf.call(e);
  return a && (t ? e[xa] = n : delete e[xa]), o;
}
var _f = Object.prototype, Ef = _f.toString;
function Tf(e) {
  return Ef.call(e);
}
var Of = "[object Null]", Pf = "[object Undefined]", gs = on ? on.toStringTag : void 0;
function Jn(e) {
  return e == null ? e === void 0 ? Pf : Of : gs && gs in Object(e) ? $f(e) : Tf(e);
}
function xn(e) {
  return e != null && typeof e == "object";
}
var Mf = "[object Symbol]";
function tl(e) {
  return typeof e == "symbol" || xn(e) && Jn(e) == Mf;
}
function du(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, o = Array(a); ++n < a; )
    o[n] = t(e[n], n, e);
  return o;
}
var xf = Array.isArray;
const Ft = xf;
var Af = 1 / 0, bs = on ? on.prototype : void 0, ys = bs ? bs.toString : void 0;
function fu(e) {
  if (typeof e == "string")
    return e;
  if (Ft(e))
    return du(e, fu) + "";
  if (tl(e))
    return ys ? ys.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Af ? "-0" : t;
}
var Df = /\s/;
function If(e) {
  for (var t = e.length; t-- && Df.test(e.charAt(t)); )
    ;
  return t;
}
var Nf = /^\s+/;
function Rf(e) {
  return e && e.slice(0, If(e) + 1).replace(Nf, "");
}
function Bt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ws = NaN, Lf = /^[-+]0x[0-9a-f]+$/i, Ff = /^0b[01]+$/i, Bf = /^0o[0-7]+$/i, Vf = parseInt;
function Il(e) {
  if (typeof e == "number")
    return e;
  if (tl(e))
    return ws;
  if (Bt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Bt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Rf(e);
  var n = Ff.test(e);
  return n || Bf.test(e) ? Vf(e.slice(2), n ? 2 : 8) : Lf.test(e) ? ws : +e;
}
var Cs = 1 / 0, zf = 17976931348623157e292;
function Hf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Il(e), e === Cs || e === -Cs) {
    var t = e < 0 ? -1 : 1;
    return t * zf;
  }
  return e === e ? e : 0;
}
function Kf(e) {
  var t = Hf(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function hr(e) {
  return e;
}
var Wf = "[object AsyncFunction]", jf = "[object Function]", Yf = "[object GeneratorFunction]", Uf = "[object Proxy]";
function gr(e) {
  if (!Bt(e))
    return !1;
  var t = Jn(e);
  return t == jf || t == Yf || t == Wf || t == Uf;
}
var qf = Zt["__core-js_shared__"];
const bl = qf;
var Ss = function() {
  var e = /[^.]+$/.exec(bl && bl.keys && bl.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Gf(e) {
  return !!Ss && Ss in e;
}
var Xf = Function.prototype, Zf = Xf.toString;
function ea(e) {
  if (e != null) {
    try {
      return Zf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Qf = /[\\^$.*+?()[\]{}|]/g, Jf = /^\[object .+?Constructor\]$/, ep = Function.prototype, tp = Object.prototype, np = ep.toString, ap = tp.hasOwnProperty, op = RegExp(
  "^" + np.call(ap).replace(Qf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function lp(e) {
  if (!Bt(e) || Gf(e))
    return !1;
  var t = gr(e) ? op : Jf;
  return t.test(ea(e));
}
function rp(e, t) {
  return e == null ? void 0 : e[t];
}
function ta(e, t) {
  var n = rp(e, t);
  return lp(n) ? n : void 0;
}
var sp = ta(Zt, "WeakMap");
const Nl = sp;
var ks = Object.create, ip = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Bt(t))
      return {};
    if (ks)
      return ks(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const up = ip;
function cp(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function dp(e, t) {
  var n = -1, a = e.length;
  for (t || (t = Array(a)); ++n < a; )
    t[n] = e[n];
  return t;
}
var fp = 800, pp = 16, vp = Date.now;
function mp(e) {
  var t = 0, n = 0;
  return function() {
    var a = vp(), o = pp - (a - n);
    if (n = a, o > 0) {
      if (++t >= fp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function hp(e) {
  return function() {
    return e;
  };
}
var gp = function() {
  try {
    var e = ta(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const zo = gp;
var bp = zo ? function(e, t) {
  return zo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: hp(t),
    writable: !0
  });
} : hr;
const yp = bp;
var wp = mp(yp);
const pu = wp;
function Cp(e, t, n, a) {
  for (var o = e.length, l = n + (a ? 1 : -1); a ? l-- : ++l < o; )
    if (t(e[l], l, e))
      return l;
  return -1;
}
var Sp = 9007199254740991, kp = /^(?:0|[1-9]\d*)$/;
function nl(e, t) {
  var n = typeof e;
  return t = t ?? Sp, !!t && (n == "number" || n != "symbol" && kp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function br(e, t, n) {
  t == "__proto__" && zo ? zo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Ja(e, t) {
  return e === t || e !== e && t !== t;
}
var $p = Object.prototype, _p = $p.hasOwnProperty;
function vu(e, t, n) {
  var a = e[t];
  (!(_p.call(e, t) && Ja(a, n)) || n === void 0 && !(t in e)) && br(e, t, n);
}
function Ep(e, t, n, a) {
  var o = !n;
  n || (n = {});
  for (var l = -1, s = t.length; ++l < s; ) {
    var r = t[l], i = a ? a(n[r], e[r], r, n, e) : void 0;
    i === void 0 && (i = e[r]), o ? br(n, r, i) : vu(n, r, i);
  }
  return n;
}
var $s = Math.max;
function mu(e, t, n) {
  return t = $s(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var a = arguments, o = -1, l = $s(a.length - t, 0), s = Array(l); ++o < l; )
      s[o] = a[t + o];
    o = -1;
    for (var r = Array(t + 1); ++o < t; )
      r[o] = a[o];
    return r[t] = n(s), cp(e, this, r);
  };
}
function Tp(e, t) {
  return pu(mu(e, t, hr), e + "");
}
var Op = 9007199254740991;
function yr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Op;
}
function Ea(e) {
  return e != null && yr(e.length) && !gr(e);
}
function Pp(e, t, n) {
  if (!Bt(n))
    return !1;
  var a = typeof t;
  return (a == "number" ? Ea(n) && nl(t, n.length) : a == "string" && t in n) ? Ja(n[t], e) : !1;
}
function Mp(e) {
  return Tp(function(t, n) {
    var a = -1, o = n.length, l = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
    for (l = e.length > 3 && typeof l == "function" ? (o--, l) : void 0, s && Pp(n[0], n[1], s) && (l = o < 3 ? void 0 : l, o = 1), t = Object(t); ++a < o; ) {
      var r = n[a];
      r && e(t, r, a, l);
    }
    return t;
  });
}
var xp = Object.prototype;
function wr(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || xp;
  return e === n;
}
function Ap(e, t) {
  for (var n = -1, a = Array(e); ++n < e; )
    a[n] = t(n);
  return a;
}
var Dp = "[object Arguments]";
function _s(e) {
  return xn(e) && Jn(e) == Dp;
}
var hu = Object.prototype, Ip = hu.hasOwnProperty, Np = hu.propertyIsEnumerable, Rp = _s(/* @__PURE__ */ function() {
  return arguments;
}()) ? _s : function(e) {
  return xn(e) && Ip.call(e, "callee") && !Np.call(e, "callee");
};
const Wa = Rp;
function Lp() {
  return !1;
}
var gu = typeof exports == "object" && exports && !exports.nodeType && exports, Es = gu && typeof module == "object" && module && !module.nodeType && module, Fp = Es && Es.exports === gu, Ts = Fp ? Zt.Buffer : void 0, Bp = Ts ? Ts.isBuffer : void 0, Vp = Bp || Lp;
const Ho = Vp;
var zp = "[object Arguments]", Hp = "[object Array]", Kp = "[object Boolean]", Wp = "[object Date]", jp = "[object Error]", Yp = "[object Function]", Up = "[object Map]", qp = "[object Number]", Gp = "[object Object]", Xp = "[object RegExp]", Zp = "[object Set]", Qp = "[object String]", Jp = "[object WeakMap]", ev = "[object ArrayBuffer]", tv = "[object DataView]", nv = "[object Float32Array]", av = "[object Float64Array]", ov = "[object Int8Array]", lv = "[object Int16Array]", rv = "[object Int32Array]", sv = "[object Uint8Array]", iv = "[object Uint8ClampedArray]", uv = "[object Uint16Array]", cv = "[object Uint32Array]", tt = {};
tt[nv] = tt[av] = tt[ov] = tt[lv] = tt[rv] = tt[sv] = tt[iv] = tt[uv] = tt[cv] = !0;
tt[zp] = tt[Hp] = tt[ev] = tt[Kp] = tt[tv] = tt[Wp] = tt[jp] = tt[Yp] = tt[Up] = tt[qp] = tt[Gp] = tt[Xp] = tt[Zp] = tt[Qp] = tt[Jp] = !1;
function dv(e) {
  return xn(e) && yr(e.length) && !!tt[Jn(e)];
}
function fv(e) {
  return function(t) {
    return e(t);
  };
}
var bu = typeof exports == "object" && exports && !exports.nodeType && exports, Na = bu && typeof module == "object" && module && !module.nodeType && module, pv = Na && Na.exports === bu, yl = pv && uu.process, vv = function() {
  try {
    var e = Na && Na.require && Na.require("util").types;
    return e || yl && yl.binding && yl.binding("util");
  } catch {
  }
}();
const Os = vv;
var Ps = Os && Os.isTypedArray, mv = Ps ? fv(Ps) : dv;
const Cr = mv;
var hv = Object.prototype, gv = hv.hasOwnProperty;
function yu(e, t) {
  var n = Ft(e), a = !n && Wa(e), o = !n && !a && Ho(e), l = !n && !a && !o && Cr(e), s = n || a || o || l, r = s ? Ap(e.length, String) : [], i = r.length;
  for (var c in e)
    (t || gv.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    nl(c, i))) && r.push(c);
  return r;
}
function wu(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var bv = wu(Object.keys, Object);
const yv = bv;
var wv = Object.prototype, Cv = wv.hasOwnProperty;
function Sv(e) {
  if (!wr(e))
    return yv(e);
  var t = [];
  for (var n in Object(e))
    Cv.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Sr(e) {
  return Ea(e) ? yu(e) : Sv(e);
}
function kv(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var $v = Object.prototype, _v = $v.hasOwnProperty;
function Ev(e) {
  if (!Bt(e))
    return kv(e);
  var t = wr(e), n = [];
  for (var a in e)
    a == "constructor" && (t || !_v.call(e, a)) || n.push(a);
  return n;
}
function Cu(e) {
  return Ea(e) ? yu(e, !0) : Ev(e);
}
var Tv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ov = /^\w*$/;
function kr(e, t) {
  if (Ft(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || tl(e) ? !0 : Ov.test(e) || !Tv.test(e) || t != null && e in Object(t);
}
var Pv = ta(Object, "create");
const ja = Pv;
function Mv() {
  this.__data__ = ja ? ja(null) : {}, this.size = 0;
}
function xv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Av = "__lodash_hash_undefined__", Dv = Object.prototype, Iv = Dv.hasOwnProperty;
function Nv(e) {
  var t = this.__data__;
  if (ja) {
    var n = t[e];
    return n === Av ? void 0 : n;
  }
  return Iv.call(t, e) ? t[e] : void 0;
}
var Rv = Object.prototype, Lv = Rv.hasOwnProperty;
function Fv(e) {
  var t = this.__data__;
  return ja ? t[e] !== void 0 : Lv.call(t, e);
}
var Bv = "__lodash_hash_undefined__";
function Vv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ja && t === void 0 ? Bv : t, this;
}
function Xn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Xn.prototype.clear = Mv;
Xn.prototype.delete = xv;
Xn.prototype.get = Nv;
Xn.prototype.has = Fv;
Xn.prototype.set = Vv;
function zv() {
  this.__data__ = [], this.size = 0;
}
function al(e, t) {
  for (var n = e.length; n--; )
    if (Ja(e[n][0], t))
      return n;
  return -1;
}
var Hv = Array.prototype, Kv = Hv.splice;
function Wv(e) {
  var t = this.__data__, n = al(t, e);
  if (n < 0)
    return !1;
  var a = t.length - 1;
  return n == a ? t.pop() : Kv.call(t, n, 1), --this.size, !0;
}
function jv(e) {
  var t = this.__data__, n = al(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Yv(e) {
  return al(this.__data__, e) > -1;
}
function Uv(e, t) {
  var n = this.__data__, a = al(n, e);
  return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this;
}
function gn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
gn.prototype.clear = zv;
gn.prototype.delete = Wv;
gn.prototype.get = jv;
gn.prototype.has = Yv;
gn.prototype.set = Uv;
var qv = ta(Zt, "Map");
const Ya = qv;
function Gv() {
  this.size = 0, this.__data__ = {
    hash: new Xn(),
    map: new (Ya || gn)(),
    string: new Xn()
  };
}
function Xv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ol(e, t) {
  var n = e.__data__;
  return Xv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Zv(e) {
  var t = ol(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Qv(e) {
  return ol(this, e).get(e);
}
function Jv(e) {
  return ol(this, e).has(e);
}
function em(e, t) {
  var n = ol(this, e), a = n.size;
  return n.set(e, t), this.size += n.size == a ? 0 : 1, this;
}
function bn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
bn.prototype.clear = Gv;
bn.prototype.delete = Zv;
bn.prototype.get = Qv;
bn.prototype.has = Jv;
bn.prototype.set = em;
var tm = "Expected a function";
function $r(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(tm);
  var n = function() {
    var a = arguments, o = t ? t.apply(this, a) : a[0], l = n.cache;
    if (l.has(o))
      return l.get(o);
    var s = e.apply(this, a);
    return n.cache = l.set(o, s) || l, s;
  };
  return n.cache = new ($r.Cache || bn)(), n;
}
$r.Cache = bn;
var nm = 500;
function am(e) {
  var t = $r(e, function(a) {
    return n.size === nm && n.clear(), a;
  }), n = t.cache;
  return t;
}
var om = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, lm = /\\(\\)?/g, rm = am(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(om, function(n, a, o, l) {
    t.push(o ? l.replace(lm, "$1") : a || n);
  }), t;
});
const sm = rm;
function im(e) {
  return e == null ? "" : fu(e);
}
function ll(e, t) {
  return Ft(e) ? e : kr(e, t) ? [e] : sm(im(e));
}
var um = 1 / 0;
function eo(e) {
  if (typeof e == "string" || tl(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -um ? "-0" : t;
}
function _r(e, t) {
  t = ll(t, e);
  for (var n = 0, a = t.length; e != null && n < a; )
    e = e[eo(t[n++])];
  return n && n == a ? e : void 0;
}
function kt(e, t, n) {
  var a = e == null ? void 0 : _r(e, t);
  return a === void 0 ? n : a;
}
function Su(e, t) {
  for (var n = -1, a = t.length, o = e.length; ++n < a; )
    e[o + n] = t[n];
  return e;
}
var Ms = on ? on.isConcatSpreadable : void 0;
function cm(e) {
  return Ft(e) || Wa(e) || !!(Ms && e && e[Ms]);
}
function Er(e, t, n, a, o) {
  var l = -1, s = e.length;
  for (n || (n = cm), o || (o = []); ++l < s; ) {
    var r = e[l];
    t > 0 && n(r) ? t > 1 ? Er(r, t - 1, n, a, o) : Su(o, r) : a || (o[o.length] = r);
  }
  return o;
}
function ku(e) {
  var t = e == null ? 0 : e.length;
  return t ? Er(e, 1) : [];
}
function dm(e) {
  return pu(mu(e, void 0, ku), e + "");
}
var fm = wu(Object.getPrototypeOf, Object);
const $u = fm;
var pm = "[object Object]", vm = Function.prototype, mm = Object.prototype, _u = vm.toString, hm = mm.hasOwnProperty, gm = _u.call(Object);
function bm(e) {
  if (!xn(e) || Jn(e) != pm)
    return !1;
  var t = $u(e);
  if (t === null)
    return !0;
  var n = hm.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && _u.call(n) == gm;
}
function ym() {
  this.__data__ = new gn(), this.size = 0;
}
function wm(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Cm(e) {
  return this.__data__.get(e);
}
function Sm(e) {
  return this.__data__.has(e);
}
var km = 200;
function $m(e, t) {
  var n = this.__data__;
  if (n instanceof gn) {
    var a = n.__data__;
    if (!Ya || a.length < km - 1)
      return a.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new bn(a);
  }
  return n.set(e, t), this.size = n.size, this;
}
function nn(e) {
  var t = this.__data__ = new gn(e);
  this.size = t.size;
}
nn.prototype.clear = ym;
nn.prototype.delete = wm;
nn.prototype.get = Cm;
nn.prototype.has = Sm;
nn.prototype.set = $m;
var Eu = typeof exports == "object" && exports && !exports.nodeType && exports, xs = Eu && typeof module == "object" && module && !module.nodeType && module, _m = xs && xs.exports === Eu, As = _m ? Zt.Buffer : void 0, Ds = As ? As.allocUnsafe : void 0;
function Em(e, t) {
  if (t)
    return e.slice();
  var n = e.length, a = Ds ? Ds(n) : new e.constructor(n);
  return e.copy(a), a;
}
function Tm(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, o = 0, l = []; ++n < a; ) {
    var s = e[n];
    t(s, n, e) && (l[o++] = s);
  }
  return l;
}
function Om() {
  return [];
}
var Pm = Object.prototype, Mm = Pm.propertyIsEnumerable, Is = Object.getOwnPropertySymbols, xm = Is ? function(e) {
  return e == null ? [] : (e = Object(e), Tm(Is(e), function(t) {
    return Mm.call(e, t);
  }));
} : Om;
const Am = xm;
function Dm(e, t, n) {
  var a = t(e);
  return Ft(e) ? a : Su(a, n(e));
}
function Ns(e) {
  return Dm(e, Sr, Am);
}
var Im = ta(Zt, "DataView");
const Rl = Im;
var Nm = ta(Zt, "Promise");
const Ll = Nm;
var Rm = ta(Zt, "Set");
const Fl = Rm;
var Rs = "[object Map]", Lm = "[object Object]", Ls = "[object Promise]", Fs = "[object Set]", Bs = "[object WeakMap]", Vs = "[object DataView]", Fm = ea(Rl), Bm = ea(Ya), Vm = ea(Ll), zm = ea(Fl), Hm = ea(Nl), zn = Jn;
(Rl && zn(new Rl(new ArrayBuffer(1))) != Vs || Ya && zn(new Ya()) != Rs || Ll && zn(Ll.resolve()) != Ls || Fl && zn(new Fl()) != Fs || Nl && zn(new Nl()) != Bs) && (zn = function(e) {
  var t = Jn(e), n = t == Lm ? e.constructor : void 0, a = n ? ea(n) : "";
  if (a)
    switch (a) {
      case Fm:
        return Vs;
      case Bm:
        return Rs;
      case Vm:
        return Ls;
      case zm:
        return Fs;
      case Hm:
        return Bs;
    }
  return t;
});
const zs = zn;
var Km = Zt.Uint8Array;
const Ko = Km;
function Wm(e) {
  var t = new e.constructor(e.byteLength);
  return new Ko(t).set(new Ko(e)), t;
}
function jm(e, t) {
  var n = t ? Wm(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function Ym(e) {
  return typeof e.constructor == "function" && !wr(e) ? up($u(e)) : {};
}
var Um = "__lodash_hash_undefined__";
function qm(e) {
  return this.__data__.set(e, Um), this;
}
function Gm(e) {
  return this.__data__.has(e);
}
function Wo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new bn(); ++t < n; )
    this.add(e[t]);
}
Wo.prototype.add = Wo.prototype.push = qm;
Wo.prototype.has = Gm;
function Xm(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Zm(e, t) {
  return e.has(t);
}
var Qm = 1, Jm = 2;
function Tu(e, t, n, a, o, l) {
  var s = n & Qm, r = e.length, i = t.length;
  if (r != i && !(s && i > r))
    return !1;
  var c = l.get(e), f = l.get(t);
  if (c && f)
    return c == t && f == e;
  var d = -1, v = !0, m = n & Jm ? new Wo() : void 0;
  for (l.set(e, t), l.set(t, e); ++d < r; ) {
    var h = e[d], p = t[d];
    if (a)
      var b = s ? a(p, h, d, t, e, l) : a(h, p, d, e, t, l);
    if (b !== void 0) {
      if (b)
        continue;
      v = !1;
      break;
    }
    if (m) {
      if (!Xm(t, function(g, w) {
        if (!Zm(m, w) && (h === g || o(h, g, n, a, l)))
          return m.push(w);
      })) {
        v = !1;
        break;
      }
    } else if (!(h === p || o(h, p, n, a, l))) {
      v = !1;
      break;
    }
  }
  return l.delete(e), l.delete(t), v;
}
function eh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(a, o) {
    n[++t] = [o, a];
  }), n;
}
function th(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(a) {
    n[++t] = a;
  }), n;
}
var nh = 1, ah = 2, oh = "[object Boolean]", lh = "[object Date]", rh = "[object Error]", sh = "[object Map]", ih = "[object Number]", uh = "[object RegExp]", ch = "[object Set]", dh = "[object String]", fh = "[object Symbol]", ph = "[object ArrayBuffer]", vh = "[object DataView]", Hs = on ? on.prototype : void 0, wl = Hs ? Hs.valueOf : void 0;
function mh(e, t, n, a, o, l, s) {
  switch (n) {
    case vh:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ph:
      return !(e.byteLength != t.byteLength || !l(new Ko(e), new Ko(t)));
    case oh:
    case lh:
    case ih:
      return Ja(+e, +t);
    case rh:
      return e.name == t.name && e.message == t.message;
    case uh:
    case dh:
      return e == t + "";
    case sh:
      var r = eh;
    case ch:
      var i = a & nh;
      if (r || (r = th), e.size != t.size && !i)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      a |= ah, s.set(e, t);
      var f = Tu(r(e), r(t), a, o, l, s);
      return s.delete(e), f;
    case fh:
      if (wl)
        return wl.call(e) == wl.call(t);
  }
  return !1;
}
var hh = 1, gh = Object.prototype, bh = gh.hasOwnProperty;
function yh(e, t, n, a, o, l) {
  var s = n & hh, r = Ns(e), i = r.length, c = Ns(t), f = c.length;
  if (i != f && !s)
    return !1;
  for (var d = i; d--; ) {
    var v = r[d];
    if (!(s ? v in t : bh.call(t, v)))
      return !1;
  }
  var m = l.get(e), h = l.get(t);
  if (m && h)
    return m == t && h == e;
  var p = !0;
  l.set(e, t), l.set(t, e);
  for (var b = s; ++d < i; ) {
    v = r[d];
    var g = e[v], w = t[v];
    if (a)
      var S = s ? a(w, g, v, t, e, l) : a(g, w, v, e, t, l);
    if (!(S === void 0 ? g === w || o(g, w, n, a, l) : S)) {
      p = !1;
      break;
    }
    b || (b = v == "constructor");
  }
  if (p && !b) {
    var y = e.constructor, $ = t.constructor;
    y != $ && "constructor" in e && "constructor" in t && !(typeof y == "function" && y instanceof y && typeof $ == "function" && $ instanceof $) && (p = !1);
  }
  return l.delete(e), l.delete(t), p;
}
var wh = 1, Ks = "[object Arguments]", Ws = "[object Array]", ro = "[object Object]", Ch = Object.prototype, js = Ch.hasOwnProperty;
function Sh(e, t, n, a, o, l) {
  var s = Ft(e), r = Ft(t), i = s ? Ws : zs(e), c = r ? Ws : zs(t);
  i = i == Ks ? ro : i, c = c == Ks ? ro : c;
  var f = i == ro, d = c == ro, v = i == c;
  if (v && Ho(e)) {
    if (!Ho(t))
      return !1;
    s = !0, f = !1;
  }
  if (v && !f)
    return l || (l = new nn()), s || Cr(e) ? Tu(e, t, n, a, o, l) : mh(e, t, i, n, a, o, l);
  if (!(n & wh)) {
    var m = f && js.call(e, "__wrapped__"), h = d && js.call(t, "__wrapped__");
    if (m || h) {
      var p = m ? e.value() : e, b = h ? t.value() : t;
      return l || (l = new nn()), o(p, b, n, a, l);
    }
  }
  return v ? (l || (l = new nn()), yh(e, t, n, a, o, l)) : !1;
}
function rl(e, t, n, a, o) {
  return e === t ? !0 : e == null || t == null || !xn(e) && !xn(t) ? e !== e && t !== t : Sh(e, t, n, a, rl, o);
}
var kh = 1, $h = 2;
function _h(e, t, n, a) {
  var o = n.length, l = o, s = !a;
  if (e == null)
    return !l;
  for (e = Object(e); o--; ) {
    var r = n[o];
    if (s && r[2] ? r[1] !== e[r[0]] : !(r[0] in e))
      return !1;
  }
  for (; ++o < l; ) {
    r = n[o];
    var i = r[0], c = e[i], f = r[1];
    if (s && r[2]) {
      if (c === void 0 && !(i in e))
        return !1;
    } else {
      var d = new nn();
      if (a)
        var v = a(c, f, i, e, t, d);
      if (!(v === void 0 ? rl(f, c, kh | $h, a, d) : v))
        return !1;
    }
  }
  return !0;
}
function Ou(e) {
  return e === e && !Bt(e);
}
function Eh(e) {
  for (var t = Sr(e), n = t.length; n--; ) {
    var a = t[n], o = e[a];
    t[n] = [a, o, Ou(o)];
  }
  return t;
}
function Pu(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Th(e) {
  var t = Eh(e);
  return t.length == 1 && t[0][2] ? Pu(t[0][0], t[0][1]) : function(n) {
    return n === e || _h(n, e, t);
  };
}
function Oh(e, t) {
  return e != null && t in Object(e);
}
function Ph(e, t, n) {
  t = ll(t, e);
  for (var a = -1, o = t.length, l = !1; ++a < o; ) {
    var s = eo(t[a]);
    if (!(l = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return l || ++a != o ? l : (o = e == null ? 0 : e.length, !!o && yr(o) && nl(s, o) && (Ft(e) || Wa(e)));
}
function Mu(e, t) {
  return e != null && Ph(e, t, Oh);
}
var Mh = 1, xh = 2;
function Ah(e, t) {
  return kr(e) && Ou(t) ? Pu(eo(e), t) : function(n) {
    var a = kt(n, e);
    return a === void 0 && a === t ? Mu(n, e) : rl(t, a, Mh | xh);
  };
}
function Dh(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Ih(e) {
  return function(t) {
    return _r(t, e);
  };
}
function Nh(e) {
  return kr(e) ? Dh(eo(e)) : Ih(e);
}
function xu(e) {
  return typeof e == "function" ? e : e == null ? hr : typeof e == "object" ? Ft(e) ? Ah(e[0], e[1]) : Th(e) : Nh(e);
}
function Rh(e) {
  return function(t, n, a) {
    for (var o = -1, l = Object(t), s = a(t), r = s.length; r--; ) {
      var i = s[e ? r : ++o];
      if (n(l[i], i, l) === !1)
        break;
    }
    return t;
  };
}
var Lh = Rh();
const Au = Lh;
function Fh(e, t) {
  return e && Au(e, t, Sr);
}
function Bh(e, t) {
  return function(n, a) {
    if (n == null)
      return n;
    if (!Ea(n))
      return e(n, a);
    for (var o = n.length, l = t ? o : -1, s = Object(n); (t ? l-- : ++l < o) && a(s[l], l, s) !== !1; )
      ;
    return n;
  };
}
var Vh = Bh(Fh);
const zh = Vh;
var Hh = function() {
  return Zt.Date.now();
};
const Cl = Hh;
var Kh = "Expected a function", Wh = Math.max, jh = Math.min;
function Zn(e, t, n) {
  var a, o, l, s, r, i, c = 0, f = !1, d = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Kh);
  t = Il(t) || 0, Bt(n) && (f = !!n.leading, d = "maxWait" in n, l = d ? Wh(Il(n.maxWait) || 0, t) : l, v = "trailing" in n ? !!n.trailing : v);
  function m(T) {
    var E = a, x = o;
    return a = o = void 0, c = T, s = e.apply(x, E), s;
  }
  function h(T) {
    return c = T, r = setTimeout(g, t), f ? m(T) : s;
  }
  function p(T) {
    var E = T - i, x = T - c, N = t - E;
    return d ? jh(N, l - x) : N;
  }
  function b(T) {
    var E = T - i, x = T - c;
    return i === void 0 || E >= t || E < 0 || d && x >= l;
  }
  function g() {
    var T = Cl();
    if (b(T))
      return w(T);
    r = setTimeout(g, p(T));
  }
  function w(T) {
    return r = void 0, v && a ? m(T) : (a = o = void 0, s);
  }
  function S() {
    r !== void 0 && clearTimeout(r), c = 0, a = i = o = r = void 0;
  }
  function y() {
    return r === void 0 ? s : w(Cl());
  }
  function $() {
    var T = Cl(), E = b(T);
    if (a = arguments, o = this, i = T, E) {
      if (r === void 0)
        return h(i);
      if (d)
        return clearTimeout(r), r = setTimeout(g, t), m(i);
    }
    return r === void 0 && (r = setTimeout(g, t)), s;
  }
  return $.cancel = S, $.flush = y, $;
}
function Bl(e, t, n) {
  (n !== void 0 && !Ja(e[t], n) || n === void 0 && !(t in e)) && br(e, t, n);
}
function Yh(e) {
  return xn(e) && Ea(e);
}
function Vl(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Uh(e) {
  return Ep(e, Cu(e));
}
function qh(e, t, n, a, o, l, s) {
  var r = Vl(e, n), i = Vl(t, n), c = s.get(i);
  if (c) {
    Bl(e, n, c);
    return;
  }
  var f = l ? l(r, i, n + "", e, t, s) : void 0, d = f === void 0;
  if (d) {
    var v = Ft(i), m = !v && Ho(i), h = !v && !m && Cr(i);
    f = i, v || m || h ? Ft(r) ? f = r : Yh(r) ? f = dp(r) : m ? (d = !1, f = Em(i, !0)) : h ? (d = !1, f = jm(i, !0)) : f = [] : bm(i) || Wa(i) ? (f = r, Wa(r) ? f = Uh(r) : (!Bt(r) || gr(r)) && (f = Ym(i))) : d = !1;
  }
  d && (s.set(i, f), o(f, i, a, l, s), s.delete(i)), Bl(e, n, f);
}
function Du(e, t, n, a, o) {
  e !== t && Au(t, function(l, s) {
    if (o || (o = new nn()), Bt(l))
      qh(e, t, s, n, Du, a, o);
    else {
      var r = a ? a(Vl(e, s), l, s + "", e, t, o) : void 0;
      r === void 0 && (r = l), Bl(e, s, r);
    }
  }, Cu);
}
var Gh = Math.max, Xh = Math.min;
function Zh(e, t, n) {
  var a = e == null ? 0 : e.length;
  if (!a)
    return -1;
  var o = a - 1;
  return n !== void 0 && (o = Kf(n), o = n < 0 ? Gh(a + o, 0) : Xh(o, a - 1)), Cp(e, xu(t), o, !0);
}
function Qh(e, t) {
  var n = -1, a = Ea(e) ? Array(e.length) : [];
  return zh(e, function(o, l, s) {
    a[++n] = t(o, l, s);
  }), a;
}
function Jh(e, t) {
  var n = Ft(e) ? du : Qh;
  return n(e, xu(t));
}
function eg(e, t) {
  return Er(Jh(e, t), 1);
}
function jo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, a = {}; ++t < n; ) {
    var o = e[t];
    a[o[0]] = o[1];
  }
  return a;
}
function Ua(e, t) {
  return rl(e, t);
}
function to(e) {
  return e == null;
}
function Iu(e) {
  return e === void 0;
}
var tg = Mp(function(e, t, n) {
  Du(e, t, n);
});
const Nu = tg;
function Ru(e, t, n, a) {
  if (!Bt(e))
    return e;
  t = ll(t, e);
  for (var o = -1, l = t.length, s = l - 1, r = e; r != null && ++o < l; ) {
    var i = eo(t[o]), c = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (o != s) {
      var f = r[i];
      c = a ? a(f, i, r) : void 0, c === void 0 && (c = Bt(f) ? f : nl(t[o + 1]) ? [] : {});
    }
    vu(r, i, c), r = r[i];
  }
  return e;
}
function ng(e, t, n) {
  for (var a = -1, o = t.length, l = {}; ++a < o; ) {
    var s = t[a], r = _r(e, s);
    n(r, s) && Ru(l, ll(s, e), r);
  }
  return l;
}
function ag(e, t) {
  return ng(e, t, function(n, a) {
    return Mu(e, a);
  });
}
var og = dm(function(e, t) {
  return e == null ? {} : ag(e, t);
});
const lg = og;
function rg(e, t, n) {
  return e == null ? e : Ru(e, t, n);
}
const mn = (e) => e === void 0, Qn = (e) => typeof e == "boolean", Ye = (e) => typeof e == "number", Lu = (e) => !e && e !== 0 || ze(e) && e.length === 0 || _t(e) && !Object.keys(e).length, fa = (e) => typeof Element > "u" ? !1 : e instanceof Element, sg = (e) => xt(e) ? !Number.isNaN(Number(e)) : !1, ig = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), $n = (e) => gf(e), Ys = (e) => Object.keys(e), ug = (e, t, n) => ({
  get value() {
    return kt(e, t, n);
  },
  set value(a) {
    rg(e, t, a);
  }
});
class Fu extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ta(e, t) {
  throw new Fu(`[${e}] ${t}`);
}
function mt(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = xt(e) ? new Fu(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const cg = "utils/dom/style", Bu = (e = "") => e.split(" ").filter((t) => !!t.trim()), Tn = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Tr = (e, t) => {
  !e || !t.trim() || e.classList.add(...Bu(t));
}, Yo = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Bu(t));
}, Vu = (e, t) => {
  var n;
  if (!qe || !e || !t)
    return "";
  let a = hf(t);
  a === "float" && (a = "cssFloat");
  try {
    const o = e.style[a];
    if (o)
      return o;
    const l = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return l ? l[a] : "";
  } catch {
    return e.style[a];
  }
};
function pa(e, t = "px") {
  if (!e)
    return "";
  if (Ye(e) || sg(e))
    return `${e}${t}`;
  if (xt(e))
    return e;
  mt(cg, "binding value must be a string or number");
}
let so;
const dg = (e) => {
  var t;
  if (!qe)
    return 0;
  if (so !== void 0)
    return so;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const a = n.offsetWidth;
  n.style.overflow = "scroll";
  const o = document.createElement("div");
  o.style.width = "100%", n.appendChild(o);
  const l = o.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), so = a - l, so;
};
function fg(e, t) {
  if (!qe)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let a = t.offsetParent;
  for (; a !== null && e !== a && e.contains(a); )
    n.push(a), a = a.offsetParent;
  const o = t.offsetTop + n.reduce((i, c) => i + c.offsetTop, 0), l = o + t.offsetHeight, s = e.scrollTop, r = s + e.clientHeight;
  o < s ? e.scrollTop = o : l > r && (e.scrollTop = l - e.clientHeight);
}
/*! Element Plus Icons Vue v2.3.1 */
var pg = /* @__PURE__ */ Q({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Or = pg, vg = /* @__PURE__ */ Q({
  name: "ArrowLeft",
  __name: "arrow-left",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), qa = vg, mg = /* @__PURE__ */ Q({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), On = mg, hg = /* @__PURE__ */ Q({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), zu = hg, gg = /* @__PURE__ */ Q({
  name: "Calendar",
  __name: "calendar",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64"
      })
    ]));
  }
}), bg = gg, yg = /* @__PURE__ */ Q({
  name: "CaretLeft",
  __name: "caret-left",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M672 192 288 511.936 672 832z"
      })
    ]));
  }
}), wg = yg, Cg = /* @__PURE__ */ Q({
  name: "CaretRight",
  __name: "caret-right",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M384 192v640l384-320.064z"
      })
    ]));
  }
}), Sg = Cg, kg = /* @__PURE__ */ Q({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      K("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), $g = kg, _g = /* @__PURE__ */ Q({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      K("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), sl = _g, Eg = /* @__PURE__ */ Q({
  name: "Clock",
  __name: "clock",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      K("path", {
        fill: "currentColor",
        d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      }),
      K("path", {
        fill: "currentColor",
        d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"
      })
    ]));
  }
}), Tg = Eg, Og = /* @__PURE__ */ Q({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Uo = Og, Pg = /* @__PURE__ */ Q({
  name: "DArrowLeft",
  __name: "d-arrow-left",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
      })
    ]));
  }
}), va = Pg, Mg = /* @__PURE__ */ Q({
  name: "DArrowRight",
  __name: "d-arrow-right",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
      })
    ]));
  }
}), ma = Mg, xg = /* @__PURE__ */ Q({
  name: "Delete",
  __name: "delete",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
      })
    ]));
  }
}), Ag = xg, Dg = /* @__PURE__ */ Q({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      K("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), Ig = Dg, Ng = /* @__PURE__ */ Q({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Pr = Ng, Rg = /* @__PURE__ */ Q({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), Lg = Rg, Fg = /* @__PURE__ */ Q({
  name: "MoreFilled",
  __name: "more-filled",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224"
      })
    ]));
  }
}), Us = Fg, Bg = /* @__PURE__ */ Q({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), Hu = Bg, Vg = /* @__PURE__ */ Q({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), zg = Vg, Hg = /* @__PURE__ */ Q({
  name: "Warning",
  __name: "warning",
  setup(e) {
    return (t, n) => (_(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), Kg = Hg;
const Ku = "__epPropKey", ce = (e) => e, Wg = (e) => _t(e) && !!e[Ku], il = (e, t) => {
  if (!_t(e) || Wg(e))
    return e;
  const { values: n, required: a, default: o, type: l, validator: s } = e, i = {
    type: l,
    required: !!a,
    validator: n || s ? (c) => {
      let f = !1, d = [];
      if (n && (d = Array.from(n), Gn(e, "default") && d.push(o), f || (f = d.includes(c))), s && (f || (f = s(c))), !f && d.length > 0) {
        const v = [...new Set(d)].map((m) => JSON.stringify(m)).join(", ");
        Fd(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(c)}.`);
      }
      return f;
    } : void 0,
    [Ku]: !0
  };
  return Gn(e, "default") && (i.default = o), i;
}, _e = (e) => jo(Object.entries(e).map(([t, n]) => [
  t,
  il(n, t)
])), Xt = ce([
  String,
  Object,
  Function
]), jg = {
  Close: Uo
}, Wu = {
  validating: Pr,
  success: $g,
  error: sl
}, St = (e, t) => {
  if (e.install = (n) => {
    for (const a of [e, ...Object.values(t ?? {})])
      n.component(a.name, a);
  }, t)
    for (const [n, a] of Object.entries(t))
      e[n] = a;
  return e;
}, na = (e) => (e.install = pn, e), Yg = (...e) => (t) => {
  e.forEach((n) => {
    pt(n) ? n(t) : n.value = t;
  });
}, We = {
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
}, Ug = [
  "year",
  "month",
  "date",
  "dates",
  "week",
  "datetime",
  "datetimerange",
  "daterange",
  "monthrange"
], vt = "update:modelValue", ju = "change", Oa = ["", "default", "small", "large"], qg = {
  large: 40,
  default: 32,
  small: 24
}, Gg = (e) => qg[e || "default"], Xg = (e) => ["", ...Oa].includes(e);
var Ht = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(Ht || {});
function zl(e) {
  return Pn(e) && e.type === Te;
}
function Zg(e) {
  return Pn(e) && e.type === dr;
}
function Qg(e) {
  return Pn(e) && !zl(e) && !Zg(e);
}
const bo = (e) => {
  const t = ze(e) ? e : [e], n = [];
  return t.forEach((a) => {
    var o;
    ze(a) ? n.push(...bo(a)) : Pn(a) && ze(a.children) ? n.push(...bo(a.children)) : (n.push(a), Pn(a) && ((o = a.component) != null && o.subTree) && n.push(...bo(a.component.subTree)));
  }), n;
}, jn = (e) => !e && e !== 0 ? [] : Array.isArray(e) ? e : [e], Yu = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), Jg = (e) => qe ? window.requestAnimationFrame(e) : setTimeout(e, 16), en = (e) => e, eb = ["class", "style"], tb = /^on[A-Z]/, nb = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, a = k(() => ((n == null ? void 0 : n.value) || []).concat(eb)), o = Le();
  return o ? k(() => {
    var l;
    return jo(Object.entries((l = o.proxy) == null ? void 0 : l.$attrs).filter(([s]) => !a.value.includes(s) && !(t && tb.test(s))));
  }) : (mt("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), k(() => ({})));
}, Ga = ({ from: e, replacement: t, scope: n, version: a, ref: o, type: l = "API" }, s) => {
  ue(() => u(s), (r) => {
    r && mt(n, `[${l}] ${e} is about to be deprecated in version ${a}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, ab = (e, t, n) => {
  let a = {
    offsetX: 0,
    offsetY: 0
  };
  const o = (r) => {
    const i = r.clientX, c = r.clientY, { offsetX: f, offsetY: d } = a, v = e.value.getBoundingClientRect(), m = v.left, h = v.top, p = v.width, b = v.height, g = document.documentElement.clientWidth, w = document.documentElement.clientHeight, S = -m + f, y = -h + d, $ = g - m - p + f, T = w - h - b + d, E = (N) => {
      const I = Math.min(Math.max(f + N.clientX - i, S), $), D = Math.min(Math.max(d + N.clientY - c, y), T);
      a = {
        offsetX: I,
        offsetY: D
      }, e.value && (e.value.style.transform = `translate(${pa(I)}, ${pa(D)})`);
    }, x = () => {
      document.removeEventListener("mousemove", E), document.removeEventListener("mouseup", x);
    };
    document.addEventListener("mousemove", E), document.addEventListener("mouseup", x);
  }, l = () => {
    t.value && e.value && t.value.addEventListener("mousedown", o);
  }, s = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", o);
  };
  Ge(() => {
    Mt(() => {
      n.value ? l() : s();
    });
  }), Ut(() => {
    s();
  });
};
var ob = {
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
const lb = (e) => (t, n) => rb(t, n, u(e)), rb = (e, t, n) => kt(n, e, e).replace(/\{(\w+)\}/g, (a, o) => {
  var l;
  return `${(l = t == null ? void 0 : t[o]) != null ? l : `{${o}}`}`;
}), sb = (e) => {
  const t = k(() => u(e).name), n = Un(e) ? e : O(e);
  return {
    lang: t,
    locale: n,
    t: lb(e)
  };
}, Uu = Symbol("localeContextKey"), at = (e) => {
  const t = e || Se(Uu, O());
  return sb(k(() => t.value || ob));
};
let ib;
function ub(e, t = ib) {
  t && t.active && t.effects.push(e);
}
const qs = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, qu = (e) => (e.w & An) > 0, Gu = (e) => (e.n & An) > 0, cb = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= An;
}, db = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let a = 0; a < t.length; a++) {
      const o = t[a];
      qu(o) && !Gu(o) ? o.delete(e) : t[n++] = o, o.w &= ~An, o.n &= ~An;
    }
    t.length = n;
  }
};
let Da = 0, An = 1;
const Hl = 30;
let Lt;
Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class fb {
  constructor(t, n = null, a) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, ub(this, a);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Lt, n = yo;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Lt, Lt = this, yo = !0, An = 1 << ++Da, Da <= Hl ? cb(this) : Gs(this), this.fn();
    } finally {
      Da <= Hl && db(this), An = 1 << --Da, Lt = this.parent, yo = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Lt === this ? this.deferStop = !0 : this.active && (Gs(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Gs(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let yo = !0;
function Xs(e, t) {
  let n = !1;
  Da <= Hl ? Gu(e) || (e.n |= An, n = !qu(e)) : n = !e.has(Lt), n && (e.add(Lt), Lt.deps.push(e), process.env.NODE_ENV !== "production" && Lt.onTrack && Lt.onTrack(
    ru(
      {
        effect: Lt
      },
      t
    )
  ));
}
function Zs(e, t) {
  const n = ze(e) ? e : [...e];
  for (const a of n)
    a.computed && Qs(a, t);
  for (const a of n)
    a.computed || Qs(a, t);
}
function Qs(e, t) {
  (e !== Lt || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(ru({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pf)
);
function ul(e) {
  const t = e && e.__v_raw;
  return t ? ul(t) : e;
}
function pb(e) {
  yo && Lt && (e = ul(e), process.env.NODE_ENV !== "production" ? Xs(e.dep || (e.dep = qs()), {
    target: e,
    type: "get",
    key: "value"
  }) : Xs(e.dep || (e.dep = qs())));
}
function vb(e, t) {
  e = ul(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? Zs(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Zs(n));
}
class mb {
  constructor(t, n, a, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new fb(t, () => {
      this._dirty || (this._dirty = !0, vb(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = a;
  }
  get value() {
    const t = ul(this);
    return pb(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function hb(e, t, n = !1) {
  let a, o;
  const l = pt(e);
  l ? (a = e, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : pn) : (a = e.get, o = e.set);
  const s = new mb(a, o, l || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
const wo = "el", gb = "is-", Vn = (e, t, n, a, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), a && (l += `__${a}`), o && (l += `--${o}`), l;
}, Xu = Symbol("namespaceContextKey"), Mr = (e) => {
  const t = e || (Le() ? Se(Xu, O(wo)) : O(wo));
  return k(() => u(t) || wo);
}, me = (e, t) => {
  const n = Mr(t);
  return {
    namespace: n,
    b: (p = "") => Vn(n.value, e, p, "", ""),
    e: (p) => p ? Vn(n.value, e, "", p, "") : "",
    m: (p) => p ? Vn(n.value, e, "", "", p) : "",
    be: (p, b) => p && b ? Vn(n.value, e, p, b, "") : "",
    em: (p, b) => p && b ? Vn(n.value, e, "", p, b) : "",
    bm: (p, b) => p && b ? Vn(n.value, e, p, "", b) : "",
    bem: (p, b, g) => p && b && g ? Vn(n.value, e, p, b, g) : "",
    is: (p, ...b) => {
      const g = b.length >= 1 ? b[0] : !0;
      return p && g ? `${gb}${p}` : "";
    },
    cssVar: (p) => {
      const b = {};
      for (const g in p)
        p[g] && (b[`--${n.value}-${g}`] = p[g]);
      return b;
    },
    cssVarName: (p) => `--${n.value}-${p}`,
    cssVarBlock: (p) => {
      const b = {};
      for (const g in p)
        p[g] && (b[`--${n.value}-${e}-${g}`] = p[g]);
      return b;
    },
    cssVarBlockName: (p) => `--${n.value}-${e}-${p}`
  };
}, bb = (e, t = {}) => {
  Un(e) || Ta("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || me("popup"), a = hb(() => n.bm("parent", "hidden"));
  if (!qe || Tn(document.body, a.value))
    return;
  let o = 0, l = !1, s = "0";
  const r = () => {
    setTimeout(() => {
      Yo(document == null ? void 0 : document.body, a.value), l && document && (document.body.style.width = s);
    }, 200);
  };
  ue(e, (i) => {
    if (!i) {
      r();
      return;
    }
    l = !Tn(document.body, a.value), l && (s = document.body.style.width), o = dg(n.namespace.value);
    const c = document.documentElement.clientHeight < document.body.scrollHeight, f = Vu(document.body, "overflowY");
    o > 0 && (c || f === "scroll") && l && (document.body.style.width = `calc(100% - ${o}px)`), Tr(document.body, a.value);
  }), eu(() => r());
}, yb = il({
  type: ce(Boolean),
  default: null
}), wb = il({
  type: ce(Function)
}), Zu = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, a = [t], o = {
    [e]: yb,
    [n]: wb
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: r,
      shouldHideWhenRouteChanges: i,
      shouldProceed: c,
      onShow: f,
      onHide: d
    }) => {
      const v = Le(), { emit: m } = v, h = v.props, p = k(() => pt(h[n])), b = k(() => h[e] === null), g = (E) => {
        s.value !== !0 && (s.value = !0, r && (r.value = E), pt(f) && f(E));
      }, w = (E) => {
        s.value !== !1 && (s.value = !1, r && (r.value = E), pt(d) && d(E));
      }, S = (E) => {
        if (h.disabled === !0 || pt(c) && !c())
          return;
        const x = p.value && qe;
        x && m(t, !0), (b.value || !x) && g(E);
      }, y = (E) => {
        if (h.disabled === !0 || !qe)
          return;
        const x = p.value && qe;
        x && m(t, !1), (b.value || !x) && w(E);
      }, $ = (E) => {
        Qn(E) && (h.disabled && E ? p.value && m(t, !1) : s.value !== E && (E ? g() : w()));
      }, T = () => {
        s.value ? y() : S();
      };
      return ue(() => h[e], $), i && v.appContext.config.globalProperties.$route !== void 0 && ue(() => ({
        ...v.proxy.$route
      }), () => {
        i.value && s.value && y();
      }), Ge(() => {
        $(h[e]);
      }), {
        hide: y,
        show: S,
        toggle: T,
        hasUpdateHandler: p
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: a
  };
};
Zu("modelValue");
const Qu = (e) => {
  const t = Le();
  return k(() => {
    var n, a;
    return (a = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : a[e];
  });
};
var At = "top", jt = "bottom", Yt = "right", Dt = "left", xr = "auto", no = [At, jt, Yt, Dt], ha = "start", Xa = "end", Cb = "clippingParents", Ju = "viewport", Aa = "popper", Sb = "reference", Js = no.reduce(function(e, t) {
  return e.concat([t + "-" + ha, t + "-" + Xa]);
}, []), cl = [].concat(no, [xr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ha, t + "-" + Xa]);
}, []), kb = "beforeRead", $b = "read", _b = "afterRead", Eb = "beforeMain", Tb = "main", Ob = "afterMain", Pb = "beforeWrite", Mb = "write", xb = "afterWrite", Ab = [kb, $b, _b, Eb, Tb, Ob, Pb, Mb, xb];
function ln(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Qt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ga(e) {
  var t = Qt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Wt(e) {
  var t = Qt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ar(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Qt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Db(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var a = t.styles[n] || {}, o = t.attributes[n] || {}, l = t.elements[n];
    !Wt(l) || !ln(l) || (Object.assign(l.style, a), Object.keys(o).forEach(function(s) {
      var r = o[s];
      r === !1 ? l.removeAttribute(s) : l.setAttribute(s, r === !0 ? "" : r);
    }));
  });
}
function Ib(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(a) {
      var o = t.elements[a], l = t.attributes[a] || {}, s = Object.keys(t.styles.hasOwnProperty(a) ? t.styles[a] : n[a]), r = s.reduce(function(i, c) {
        return i[c] = "", i;
      }, {});
      !Wt(o) || !ln(o) || (Object.assign(o.style, r), Object.keys(l).forEach(function(i) {
        o.removeAttribute(i);
      }));
    });
  };
}
var ec = { name: "applyStyles", enabled: !0, phase: "write", fn: Db, effect: Ib, requires: ["computeStyles"] };
function an(e) {
  return e.split("-")[0];
}
var Yn = Math.max, qo = Math.min, ba = Math.round;
function ya(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), a = 1, o = 1;
  if (Wt(e) && t) {
    var l = e.offsetHeight, s = e.offsetWidth;
    s > 0 && (a = ba(n.width) / s || 1), l > 0 && (o = ba(n.height) / l || 1);
  }
  return { width: n.width / a, height: n.height / o, top: n.top / o, right: n.right / a, bottom: n.bottom / o, left: n.left / a, x: n.left / a, y: n.top / o };
}
function Dr(e) {
  var t = ya(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - a) <= 1 && (a = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: a };
}
function tc(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ar(n)) {
    var a = t;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function hn(e) {
  return Qt(e).getComputedStyle(e);
}
function Nb(e) {
  return ["table", "td", "th"].indexOf(ln(e)) >= 0;
}
function Ln(e) {
  return ((ga(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function dl(e) {
  return ln(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ar(e) ? e.host : null) || Ln(e);
}
function ei(e) {
  return !Wt(e) || hn(e).position === "fixed" ? null : e.offsetParent;
}
function Rb(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && Wt(e)) {
    var a = hn(e);
    if (a.position === "fixed")
      return null;
  }
  var o = dl(e);
  for (Ar(o) && (o = o.host); Wt(o) && ["html", "body"].indexOf(ln(o)) < 0; ) {
    var l = hn(o);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function ao(e) {
  for (var t = Qt(e), n = ei(e); n && Nb(n) && hn(n).position === "static"; )
    n = ei(n);
  return n && (ln(n) === "html" || ln(n) === "body" && hn(n).position === "static") ? t : n || Rb(e) || t;
}
function Ir(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ra(e, t, n) {
  return Yn(e, qo(t, n));
}
function Lb(e, t, n) {
  var a = Ra(e, t, n);
  return a > n ? n : a;
}
function nc() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ac(e) {
  return Object.assign({}, nc(), e);
}
function oc(e, t) {
  return t.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
var Fb = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, ac(typeof e != "number" ? e : oc(e, no));
};
function Bb(e) {
  var t, n = e.state, a = e.name, o = e.options, l = n.elements.arrow, s = n.modifiersData.popperOffsets, r = an(n.placement), i = Ir(r), c = [Dt, Yt].indexOf(r) >= 0, f = c ? "height" : "width";
  if (!(!l || !s)) {
    var d = Fb(o.padding, n), v = Dr(l), m = i === "y" ? At : Dt, h = i === "y" ? jt : Yt, p = n.rects.reference[f] + n.rects.reference[i] - s[i] - n.rects.popper[f], b = s[i] - n.rects.reference[i], g = ao(l), w = g ? i === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, S = p / 2 - b / 2, y = d[m], $ = w - v[f] - d[h], T = w / 2 - v[f] / 2 + S, E = Ra(y, T, $), x = i;
    n.modifiersData[a] = (t = {}, t[x] = E, t.centerOffset = E - T, t);
  }
}
function Vb(e) {
  var t = e.state, n = e.options, a = n.element, o = a === void 0 ? "[data-popper-arrow]" : a;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !tc(t.elements.popper, o) || (t.elements.arrow = o));
}
var zb = { name: "arrow", enabled: !0, phase: "main", fn: Bb, effect: Vb, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function wa(e) {
  return e.split("-")[1];
}
var Hb = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Kb(e) {
  var t = e.x, n = e.y, a = window, o = a.devicePixelRatio || 1;
  return { x: ba(t * o) / o || 0, y: ba(n * o) / o || 0 };
}
function ti(e) {
  var t, n = e.popper, a = e.popperRect, o = e.placement, l = e.variation, s = e.offsets, r = e.position, i = e.gpuAcceleration, c = e.adaptive, f = e.roundOffsets, d = e.isFixed, v = s.x, m = v === void 0 ? 0 : v, h = s.y, p = h === void 0 ? 0 : h, b = typeof f == "function" ? f({ x: m, y: p }) : { x: m, y: p };
  m = b.x, p = b.y;
  var g = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), S = Dt, y = At, $ = window;
  if (c) {
    var T = ao(n), E = "clientHeight", x = "clientWidth";
    if (T === Qt(n) && (T = Ln(n), hn(T).position !== "static" && r === "absolute" && (E = "scrollHeight", x = "scrollWidth")), T = T, o === At || (o === Dt || o === Yt) && l === Xa) {
      y = jt;
      var N = d && T === $ && $.visualViewport ? $.visualViewport.height : T[E];
      p -= N - a.height, p *= i ? 1 : -1;
    }
    if (o === Dt || (o === At || o === jt) && l === Xa) {
      S = Yt;
      var I = d && T === $ && $.visualViewport ? $.visualViewport.width : T[x];
      m -= I - a.width, m *= i ? 1 : -1;
    }
  }
  var D = Object.assign({ position: r }, c && Hb), H = f === !0 ? Kb({ x: m, y: p }) : { x: m, y: p };
  if (m = H.x, p = H.y, i) {
    var Z;
    return Object.assign({}, D, (Z = {}, Z[y] = w ? "0" : "", Z[S] = g ? "0" : "", Z.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + p + "px)" : "translate3d(" + m + "px, " + p + "px, 0)", Z));
  }
  return Object.assign({}, D, (t = {}, t[y] = w ? p + "px" : "", t[S] = g ? m + "px" : "", t.transform = "", t));
}
function Wb(e) {
  var t = e.state, n = e.options, a = n.gpuAcceleration, o = a === void 0 ? !0 : a, l = n.adaptive, s = l === void 0 ? !0 : l, r = n.roundOffsets, i = r === void 0 ? !0 : r, c = { placement: an(t.placement), variation: wa(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ti(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ti(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var lc = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Wb, data: {} }, io = { passive: !0 };
function jb(e) {
  var t = e.state, n = e.instance, a = e.options, o = a.scroll, l = o === void 0 ? !0 : o, s = a.resize, r = s === void 0 ? !0 : s, i = Qt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && c.forEach(function(f) {
    f.addEventListener("scroll", n.update, io);
  }), r && i.addEventListener("resize", n.update, io), function() {
    l && c.forEach(function(f) {
      f.removeEventListener("scroll", n.update, io);
    }), r && i.removeEventListener("resize", n.update, io);
  };
}
var rc = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: jb, data: {} }, Yb = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Co(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Yb[t];
  });
}
var Ub = { start: "end", end: "start" };
function ni(e) {
  return e.replace(/start|end/g, function(t) {
    return Ub[t];
  });
}
function Nr(e) {
  var t = Qt(e), n = t.pageXOffset, a = t.pageYOffset;
  return { scrollLeft: n, scrollTop: a };
}
function Rr(e) {
  return ya(Ln(e)).left + Nr(e).scrollLeft;
}
function qb(e) {
  var t = Qt(e), n = Ln(e), a = t.visualViewport, o = n.clientWidth, l = n.clientHeight, s = 0, r = 0;
  return a && (o = a.width, l = a.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = a.offsetLeft, r = a.offsetTop)), { width: o, height: l, x: s + Rr(e), y: r };
}
function Gb(e) {
  var t, n = Ln(e), a = Nr(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, l = Yn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Yn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), r = -a.scrollLeft + Rr(e), i = -a.scrollTop;
  return hn(o || n).direction === "rtl" && (r += Yn(n.clientWidth, o ? o.clientWidth : 0) - l), { width: l, height: s, x: r, y: i };
}
function Lr(e) {
  var t = hn(e), n = t.overflow, a = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + a);
}
function sc(e) {
  return ["html", "body", "#document"].indexOf(ln(e)) >= 0 ? e.ownerDocument.body : Wt(e) && Lr(e) ? e : sc(dl(e));
}
function La(e, t) {
  var n;
  t === void 0 && (t = []);
  var a = sc(e), o = a === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Qt(a), s = o ? [l].concat(l.visualViewport || [], Lr(a) ? a : []) : a, r = t.concat(s);
  return o ? r : r.concat(La(dl(s)));
}
function Kl(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Xb(e) {
  var t = ya(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function ai(e, t) {
  return t === Ju ? Kl(qb(e)) : ga(t) ? Xb(t) : Kl(Gb(Ln(e)));
}
function Zb(e) {
  var t = La(dl(e)), n = ["absolute", "fixed"].indexOf(hn(e).position) >= 0, a = n && Wt(e) ? ao(e) : e;
  return ga(a) ? t.filter(function(o) {
    return ga(o) && tc(o, a) && ln(o) !== "body";
  }) : [];
}
function Qb(e, t, n) {
  var a = t === "clippingParents" ? Zb(e) : [].concat(t), o = [].concat(a, [n]), l = o[0], s = o.reduce(function(r, i) {
    var c = ai(e, i);
    return r.top = Yn(c.top, r.top), r.right = qo(c.right, r.right), r.bottom = qo(c.bottom, r.bottom), r.left = Yn(c.left, r.left), r;
  }, ai(e, l));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ic(e) {
  var t = e.reference, n = e.element, a = e.placement, o = a ? an(a) : null, l = a ? wa(a) : null, s = t.x + t.width / 2 - n.width / 2, r = t.y + t.height / 2 - n.height / 2, i;
  switch (o) {
    case At:
      i = { x: s, y: t.y - n.height };
      break;
    case jt:
      i = { x: s, y: t.y + t.height };
      break;
    case Yt:
      i = { x: t.x + t.width, y: r };
      break;
    case Dt:
      i = { x: t.x - n.width, y: r };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var c = o ? Ir(o) : null;
  if (c != null) {
    var f = c === "y" ? "height" : "width";
    switch (l) {
      case ha:
        i[c] = i[c] - (t[f] / 2 - n[f] / 2);
        break;
      case Xa:
        i[c] = i[c] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return i;
}
function Za(e, t) {
  t === void 0 && (t = {});
  var n = t, a = n.placement, o = a === void 0 ? e.placement : a, l = n.boundary, s = l === void 0 ? Cb : l, r = n.rootBoundary, i = r === void 0 ? Ju : r, c = n.elementContext, f = c === void 0 ? Aa : c, d = n.altBoundary, v = d === void 0 ? !1 : d, m = n.padding, h = m === void 0 ? 0 : m, p = ac(typeof h != "number" ? h : oc(h, no)), b = f === Aa ? Sb : Aa, g = e.rects.popper, w = e.elements[v ? b : f], S = Qb(ga(w) ? w : w.contextElement || Ln(e.elements.popper), s, i), y = ya(e.elements.reference), $ = ic({ reference: y, element: g, strategy: "absolute", placement: o }), T = Kl(Object.assign({}, g, $)), E = f === Aa ? T : y, x = { top: S.top - E.top + p.top, bottom: E.bottom - S.bottom + p.bottom, left: S.left - E.left + p.left, right: E.right - S.right + p.right }, N = e.modifiersData.offset;
  if (f === Aa && N) {
    var I = N[o];
    Object.keys(x).forEach(function(D) {
      var H = [Yt, jt].indexOf(D) >= 0 ? 1 : -1, Z = [At, jt].indexOf(D) >= 0 ? "y" : "x";
      x[D] += I[Z] * H;
    });
  }
  return x;
}
function Jb(e, t) {
  t === void 0 && (t = {});
  var n = t, a = n.placement, o = n.boundary, l = n.rootBoundary, s = n.padding, r = n.flipVariations, i = n.allowedAutoPlacements, c = i === void 0 ? cl : i, f = wa(a), d = f ? r ? Js : Js.filter(function(h) {
    return wa(h) === f;
  }) : no, v = d.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  v.length === 0 && (v = d);
  var m = v.reduce(function(h, p) {
    return h[p] = Za(e, { placement: p, boundary: o, rootBoundary: l, padding: s })[an(p)], h;
  }, {});
  return Object.keys(m).sort(function(h, p) {
    return m[h] - m[p];
  });
}
function ey(e) {
  if (an(e) === xr)
    return [];
  var t = Co(e);
  return [ni(e), t, ni(t)];
}
function ty(e) {
  var t = e.state, n = e.options, a = e.name;
  if (!t.modifiersData[a]._skip) {
    for (var o = n.mainAxis, l = o === void 0 ? !0 : o, s = n.altAxis, r = s === void 0 ? !0 : s, i = n.fallbackPlacements, c = n.padding, f = n.boundary, d = n.rootBoundary, v = n.altBoundary, m = n.flipVariations, h = m === void 0 ? !0 : m, p = n.allowedAutoPlacements, b = t.options.placement, g = an(b), w = g === b, S = i || (w || !h ? [Co(b)] : ey(b)), y = [b].concat(S).reduce(function(le, ve) {
      return le.concat(an(ve) === xr ? Jb(t, { placement: ve, boundary: f, rootBoundary: d, padding: c, flipVariations: h, allowedAutoPlacements: p }) : ve);
    }, []), $ = t.rects.reference, T = t.rects.popper, E = /* @__PURE__ */ new Map(), x = !0, N = y[0], I = 0; I < y.length; I++) {
      var D = y[I], H = an(D), Z = wa(D) === ha, U = [At, jt].indexOf(H) >= 0, j = U ? "width" : "height", W = Za(t, { placement: D, boundary: f, rootBoundary: d, altBoundary: v, padding: c }), R = U ? Z ? Yt : Dt : Z ? jt : At;
      $[j] > T[j] && (R = Co(R));
      var B = Co(R), C = [];
      if (l && C.push(W[H] <= 0), r && C.push(W[R] <= 0, W[B] <= 0), C.every(function(le) {
        return le;
      })) {
        N = D, x = !1;
        break;
      }
      E.set(D, C);
    }
    if (x)
      for (var M = h ? 3 : 1, z = function(le) {
        var ve = y.find(function(ge) {
          var we = E.get(ge);
          if (we)
            return we.slice(0, le).every(function(ke) {
              return ke;
            });
        });
        if (ve)
          return N = ve, "break";
      }, Y = M; Y > 0; Y--) {
        var ne = z(Y);
        if (ne === "break")
          break;
      }
    t.placement !== N && (t.modifiersData[a]._skip = !0, t.placement = N, t.reset = !0);
  }
}
var ny = { name: "flip", enabled: !0, phase: "main", fn: ty, requiresIfExists: ["offset"], data: { _skip: !1 } };
function oi(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function li(e) {
  return [At, Yt, jt, Dt].some(function(t) {
    return e[t] >= 0;
  });
}
function ay(e) {
  var t = e.state, n = e.name, a = t.rects.reference, o = t.rects.popper, l = t.modifiersData.preventOverflow, s = Za(t, { elementContext: "reference" }), r = Za(t, { altBoundary: !0 }), i = oi(s, a), c = oi(r, o, l), f = li(i), d = li(c);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: c, isReferenceHidden: f, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": d });
}
var oy = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: ay };
function ly(e, t, n) {
  var a = an(e), o = [Dt, At].indexOf(a) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = l[0], r = l[1];
  return s = s || 0, r = (r || 0) * o, [Dt, Yt].indexOf(a) >= 0 ? { x: r, y: s } : { x: s, y: r };
}
function ry(e) {
  var t = e.state, n = e.options, a = e.name, o = n.offset, l = o === void 0 ? [0, 0] : o, s = cl.reduce(function(f, d) {
    return f[d] = ly(d, t.rects, l), f;
  }, {}), r = s[t.placement], i = r.x, c = r.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += c), t.modifiersData[a] = s;
}
var sy = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: ry };
function iy(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ic({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var uc = { name: "popperOffsets", enabled: !0, phase: "read", fn: iy, data: {} };
function uy(e) {
  return e === "x" ? "y" : "x";
}
function cy(e) {
  var t = e.state, n = e.options, a = e.name, o = n.mainAxis, l = o === void 0 ? !0 : o, s = n.altAxis, r = s === void 0 ? !1 : s, i = n.boundary, c = n.rootBoundary, f = n.altBoundary, d = n.padding, v = n.tether, m = v === void 0 ? !0 : v, h = n.tetherOffset, p = h === void 0 ? 0 : h, b = Za(t, { boundary: i, rootBoundary: c, padding: d, altBoundary: f }), g = an(t.placement), w = wa(t.placement), S = !w, y = Ir(g), $ = uy(y), T = t.modifiersData.popperOffsets, E = t.rects.reference, x = t.rects.popper, N = typeof p == "function" ? p(Object.assign({}, t.rects, { placement: t.placement })) : p, I = typeof N == "number" ? { mainAxis: N, altAxis: N } : Object.assign({ mainAxis: 0, altAxis: 0 }, N), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, H = { x: 0, y: 0 };
  if (T) {
    if (l) {
      var Z, U = y === "y" ? At : Dt, j = y === "y" ? jt : Yt, W = y === "y" ? "height" : "width", R = T[y], B = R + b[U], C = R - b[j], M = m ? -x[W] / 2 : 0, z = w === ha ? E[W] : x[W], Y = w === ha ? -x[W] : -E[W], ne = t.elements.arrow, le = m && ne ? Dr(ne) : { width: 0, height: 0 }, ve = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : nc(), ge = ve[U], we = ve[j], ke = Ra(0, E[W], le[W]), De = S ? E[W] / 2 - M - ke - ge - I.mainAxis : z - ke - ge - I.mainAxis, Oe = S ? -E[W] / 2 + M + ke + we + I.mainAxis : Y + ke + we + I.mainAxis, Re = t.elements.arrow && ao(t.elements.arrow), Ne = Re ? y === "y" ? Re.clientTop || 0 : Re.clientLeft || 0 : 0, Ve = (Z = D == null ? void 0 : D[y]) != null ? Z : 0, Xe = R + De - Ve - Ne, Je = R + Oe - Ve, Ke = Ra(m ? qo(B, Xe) : B, R, m ? Yn(C, Je) : C);
      T[y] = Ke, H[y] = Ke - R;
    }
    if (r) {
      var dt, st = y === "x" ? At : Dt, et = y === "x" ? jt : Yt, Ce = T[$], it = $ === "y" ? "height" : "width", ot = Ce + b[st], ft = Ce - b[et], lt = [At, Dt].indexOf(g) !== -1, re = (dt = D == null ? void 0 : D[$]) != null ? dt : 0, be = lt ? ot : Ce - E[it] - x[it] - re + I.altAxis, Be = lt ? Ce + E[it] + x[it] - re - I.altAxis : ft, nt = m && lt ? Lb(be, Ce, Be) : Ra(m ? be : ot, Ce, m ? Be : ft);
      T[$] = nt, H[$] = nt - Ce;
    }
    t.modifiersData[a] = H;
  }
}
var dy = { name: "preventOverflow", enabled: !0, phase: "main", fn: cy, requiresIfExists: ["offset"] };
function fy(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function py(e) {
  return e === Qt(e) || !Wt(e) ? Nr(e) : fy(e);
}
function vy(e) {
  var t = e.getBoundingClientRect(), n = ba(t.width) / e.offsetWidth || 1, a = ba(t.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function my(e, t, n) {
  n === void 0 && (n = !1);
  var a = Wt(t), o = Wt(t) && vy(t), l = Ln(t), s = ya(e, o), r = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (a || !a && !n) && ((ln(t) !== "body" || Lr(l)) && (r = py(t)), Wt(t) ? (i = ya(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = Rr(l))), { x: s.left + r.scrollLeft - i.x, y: s.top + r.scrollTop - i.y, width: s.width, height: s.height };
}
function hy(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(l) {
    t.set(l.name, l);
  });
  function o(l) {
    n.add(l.name);
    var s = [].concat(l.requires || [], l.requiresIfExists || []);
    s.forEach(function(r) {
      if (!n.has(r)) {
        var i = t.get(r);
        i && o(i);
      }
    }), a.push(l);
  }
  return e.forEach(function(l) {
    n.has(l.name) || o(l);
  }), a;
}
function gy(e) {
  var t = hy(e);
  return Ab.reduce(function(n, a) {
    return n.concat(t.filter(function(o) {
      return o.phase === a;
    }));
  }, []);
}
function by(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function yy(e) {
  var t = e.reduce(function(n, a) {
    var o = n[a.name];
    return n[a.name] = o ? Object.assign({}, o, a, { options: Object.assign({}, o.options, a.options), data: Object.assign({}, o.data, a.data) }) : a, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ri = { placement: "bottom", modifiers: [], strategy: "absolute" };
function si() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Fr(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, a = n === void 0 ? [] : n, o = t.defaultOptions, l = o === void 0 ? ri : o;
  return function(s, r, i) {
    i === void 0 && (i = l);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ri, l), modifiersData: {}, elements: { reference: s, popper: r }, attributes: {}, styles: {} }, f = [], d = !1, v = { state: c, setOptions: function(p) {
      var b = typeof p == "function" ? p(c.options) : p;
      h(), c.options = Object.assign({}, l, c.options, b), c.scrollParents = { reference: ga(s) ? La(s) : s.contextElement ? La(s.contextElement) : [], popper: La(r) };
      var g = gy(yy([].concat(a, c.options.modifiers)));
      return c.orderedModifiers = g.filter(function(w) {
        return w.enabled;
      }), m(), v.update();
    }, forceUpdate: function() {
      if (!d) {
        var p = c.elements, b = p.reference, g = p.popper;
        if (si(b, g)) {
          c.rects = { reference: my(b, ao(g), c.options.strategy === "fixed"), popper: Dr(g) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(x) {
            return c.modifiersData[x.name] = Object.assign({}, x.data);
          });
          for (var w = 0; w < c.orderedModifiers.length; w++) {
            if (c.reset === !0) {
              c.reset = !1, w = -1;
              continue;
            }
            var S = c.orderedModifiers[w], y = S.fn, $ = S.options, T = $ === void 0 ? {} : $, E = S.name;
            typeof y == "function" && (c = y({ state: c, options: T, name: E, instance: v }) || c);
          }
        }
      }
    }, update: by(function() {
      return new Promise(function(p) {
        v.forceUpdate(), p(c);
      });
    }), destroy: function() {
      h(), d = !0;
    } };
    if (!si(s, r))
      return v;
    v.setOptions(i).then(function(p) {
      !d && i.onFirstUpdate && i.onFirstUpdate(p);
    });
    function m() {
      c.orderedModifiers.forEach(function(p) {
        var b = p.name, g = p.options, w = g === void 0 ? {} : g, S = p.effect;
        if (typeof S == "function") {
          var y = S({ state: c, name: b, instance: v, options: w }), $ = function() {
          };
          f.push(y || $);
        }
      });
    }
    function h() {
      f.forEach(function(p) {
        return p();
      }), f = [];
    }
    return v;
  };
}
Fr();
var wy = [rc, uc, lc, ec];
Fr({ defaultModifiers: wy });
var Cy = [rc, uc, lc, ec, sy, ny, dy, zb, oy], cc = Fr({ defaultModifiers: Cy });
const Sy = (e, t, n = {}) => {
  const a = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const c = ky(i);
      Object.assign(s.value, c);
    },
    requires: ["computeStyles"]
  }, o = k(() => {
    const { onFirstUpdate: i, placement: c, strategy: f, modifiers: d } = u(n);
    return {
      onFirstUpdate: i,
      placement: c || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...d || [],
        a,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), l = fn(), s = O({
    styles: {
      popper: {
        position: u(o).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), r = () => {
    l.value && (l.value.destroy(), l.value = void 0);
  };
  return ue(o, (i) => {
    const c = u(l);
    c && c.setOptions(i);
  }, {
    deep: !0
  }), ue([e, t], ([i, c]) => {
    r(), !(!i || !c) && (l.value = cc(i, c, u(o)));
  }), Ut(() => {
    r();
  }), {
    state: k(() => {
      var i;
      return { ...((i = u(l)) == null ? void 0 : i.state) || {} };
    }),
    styles: k(() => u(s).styles),
    attributes: k(() => u(s).attributes),
    update: () => {
      var i;
      return (i = u(l)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = u(l)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: k(() => u(l))
  };
};
function ky(e) {
  const t = Object.keys(e.elements), n = jo(t.map((o) => [o, e.styles[o] || {}])), a = jo(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: a
  };
}
const dc = (e) => {
  if (!e)
    return { onClick: pn, onMousedown: pn, onMouseup: pn };
  let t = !1, n = !1;
  return { onClick: (s) => {
    t && n && e(s), t = n = !1;
  }, onMousedown: (s) => {
    t = s.target === s.currentTarget;
  }, onMouseup: (s) => {
    n = s.target === s.currentTarget;
  } };
};
function ii() {
  let e;
  const t = (a, o) => {
    n(), e = window.setTimeout(a, o);
  }, n = () => window.clearTimeout(e);
  return Jo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Wl = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, $y = Symbol("elIdInjection"), fc = () => Le() ? Se($y, Wl) : Wl, Ca = (e) => {
  const t = fc();
  !qe && t === Wl && mt("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Mr();
  return k(() => u(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let sa = [];
const ui = (e) => {
  const t = e;
  t.key === We.esc && sa.forEach((n) => n(t));
}, _y = (e) => {
  Ge(() => {
    sa.length === 0 && document.addEventListener("keydown", ui), qe && sa.push(e);
  }), Ut(() => {
    sa = sa.filter((t) => t !== e), sa.length === 0 && qe && document.removeEventListener("keydown", ui);
  });
};
let ci;
const pc = () => {
  const e = Mr(), t = fc(), n = k(() => `${e.value}-popper-container-${t.prefix}`), a = k(() => `#${n.value}`);
  return {
    id: n,
    selector: a
  };
}, Ey = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Ty = () => {
  const { id: e, selector: t } = pc();
  return fr(() => {
    qe && (process.env.NODE_ENV === "test" || !ci && !document.body.querySelector(t.value)) && (ci = Ey(e.value));
  }), {
    id: e,
    selector: t
  };
}, Oy = _e({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), vc = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: a,
  close: o
}) => {
  const { registerTimeout: l } = ii(), {
    registerTimeout: s,
    cancelTimeout: r
  } = ii();
  return {
    onOpen: (f) => {
      l(() => {
        a(f);
        const d = u(n);
        Ye(d) && d > 0 && s(() => {
          o(f);
        }, d);
      }, u(e));
    },
    onClose: (f) => {
      r(), l(() => {
        o(f);
      }, u(t));
    }
  };
}, mc = Symbol("elForwardRef"), Py = (e) => {
  ct(mc, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, My = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), di = O(0), xy = 2e3, hc = Symbol("zIndexContextKey"), Br = (e) => {
  const t = e || (Le() ? Se(hc, void 0) : void 0), n = k(() => {
    const l = u(t);
    return Ye(l) ? l : xy;
  }), a = k(() => n.value + di.value);
  return {
    initialZIndex: n,
    currentZIndex: a,
    nextZIndex: () => (di.value++, a.value)
  };
};
function Ay(e) {
  const t = O();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: o, selectionEnd: l, value: s } = e.value;
    if (o == null || l == null)
      return;
    const r = s.slice(0, Math.max(0, o)), i = s.slice(Math.max(0, l));
    t.value = {
      selectionStart: o,
      selectionEnd: l,
      value: s,
      beforeTxt: r,
      afterTxt: i
    };
  }
  function a() {
    if (e.value == null || t.value == null)
      return;
    const { value: o } = e.value, { beforeTxt: l, afterTxt: s, selectionStart: r } = t.value;
    if (l == null || s == null || r == null)
      return;
    let i = o.length;
    if (o.endsWith(s))
      i = o.length - s.length;
    else if (o.startsWith(l))
      i = l.length;
    else {
      const c = l[r - 1], f = o.indexOf(c, r - 1);
      f !== -1 && (i = f + 1);
    }
    e.value.setSelectionRange(i, i);
  }
  return [n, a];
}
const Dy = (e, t, n) => bo(e.subTree).filter((l) => {
  var s;
  return Pn(l) && ((s = l.type) == null ? void 0 : s.name) === t && !!l.component;
}).map((l) => l.component.uid).map((l) => n[l]).filter((l) => !!l), Iy = (e, t) => {
  const n = {}, a = fn([]);
  return {
    children: a,
    addChild: (s) => {
      n[s.uid] = s, a.value = Dy(e, t, n);
    },
    removeChild: (s) => {
      delete n[s], a.value = a.value.filter((r) => r.uid !== s);
    }
  };
}, aa = il({
  type: String,
  values: Oa,
  required: !1
}), gc = Symbol("size"), Ny = () => {
  const e = Se(gc, {});
  return k(() => u(e.size) || "");
};
function Ry(e, { afterFocus: t, beforeBlur: n, afterBlur: a } = {}) {
  const o = Le(), { emit: l } = o, s = fn(), r = O(!1), i = (d) => {
    r.value || (r.value = !0, l("focus", d), t == null || t());
  }, c = (d) => {
    var v;
    pt(n) && n(d) || d.relatedTarget && ((v = s.value) != null && v.contains(d.relatedTarget)) || (r.value = !1, l("blur", d), a == null || a());
  }, f = () => {
    var d;
    (d = e.value) == null || d.focus();
  };
  return ue(s, (d) => {
    d && d.setAttribute("tabindex", "-1");
  }), Kt(s, "click", f), {
    wrapperRef: s,
    isFocused: r,
    handleFocus: i,
    handleBlur: c
  };
}
const bc = Symbol(), Go = O();
function Vr(e, t = void 0) {
  const n = Le() ? Se(bc, Go) : Go;
  return e ? k(() => {
    var a, o;
    return (o = (a = n.value) == null ? void 0 : a[e]) != null ? o : t;
  }) : n;
}
const Ly = (e, t, n = !1) => {
  var a;
  const o = !!Le(), l = o ? Vr() : void 0, s = (a = t == null ? void 0 : t.provide) != null ? a : o ? ct : void 0;
  if (!s) {
    mt("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const r = k(() => {
    const i = u(e);
    return l != null && l.value ? Fy(l.value, i) : i;
  });
  return s(bc, r), s(Uu, k(() => r.value.locale)), s(Xu, k(() => r.value.namespace)), s(hc, k(() => r.value.zIndex)), s(gc, {
    size: k(() => r.value.size || "")
  }), (n || !Go.value) && (Go.value = r.value), r;
}, Fy = (e, t) => {
  var n;
  const a = [.../* @__PURE__ */ new Set([...Ys(e), ...Ys(t)])], o = {};
  for (const l of a)
    o[l] = (n = t[l]) != null ? n : e[l];
  return o;
}, By = _e({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ce(Object)
  },
  size: aa,
  button: {
    type: ce(Object)
  },
  experimentalFeatures: {
    type: ce(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ce(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), Vy = {}, zy = Q({
  name: "ElConfigProvider",
  props: By,
  setup(e, { slots: t }) {
    ue(() => e.message, (a) => {
      Object.assign(Vy, a ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Ly(e);
    return () => ae(t, "default", { config: n == null ? void 0 : n.value });
  }
}), yc = St(zy);
var Me = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
};
const Hy = _e({
  size: {
    type: ce([Number, String])
  },
  color: {
    type: String
  }
}), Ky = Q({
  name: "ElIcon",
  inheritAttrs: !1
}), Wy = /* @__PURE__ */ Q({
  ...Ky,
  props: Hy,
  setup(e) {
    const t = e, n = me("icon"), a = k(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: mn(o) ? void 0 : pa(o),
        "--color": l
      };
    });
    return (o, l) => (_(), L("i", Ue({
      class: u(n).b(),
      style: u(a)
    }, o.$attrs), [
      ae(o.$slots, "default")
    ], 16));
  }
});
var jy = /* @__PURE__ */ Me(Wy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const xe = St(jy), zr = Symbol("formContextKey"), Xo = Symbol("formItemContextKey"), Dn = (e, t = {}) => {
  const n = O(void 0), a = t.prop ? n : Qu("size"), o = t.global ? n : Ny(), l = t.form ? { size: void 0 } : Se(zr, void 0), s = t.formItem ? { size: void 0 } : Se(Xo, void 0);
  return k(() => a.value || u(e) || (s == null ? void 0 : s.size) || (l == null ? void 0 : l.size) || o.value || "");
}, fl = (e) => {
  const t = Qu("disabled"), n = Se(zr, void 0);
  return k(() => t.value || u(e) || (n == null ? void 0 : n.disabled) || !1);
}, oa = () => {
  const e = Se(zr, void 0), t = Se(Xo, void 0);
  return {
    form: e,
    formItem: t
  };
}, Hr = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: a
}) => {
  n || (n = O(!1)), a || (a = O(!1));
  const o = O();
  let l;
  const s = k(() => {
    var r;
    return !!(!e.label && t && t.inputIds && ((r = t.inputIds) == null ? void 0 : r.length) <= 1);
  });
  return Ge(() => {
    l = ue([wt(e, "id"), n], ([r, i]) => {
      const c = r ?? (i ? void 0 : Ca().value);
      c !== o.value && (t != null && t.removeInputId && (o.value && t.removeInputId(o.value), !(a != null && a.value) && !i && c && t.addInputId(c)), o.value = c);
    }, { immediate: !0 });
  }), $a(() => {
    l && l(), t != null && t.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
};
let qt;
const Yy = `
  height:0 !important;
  visibility:hidden !important;
  ${df() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Uy = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function qy(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), a = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Uy.map((s) => `${s}:${t.getPropertyValue(s)}`).join(";"), paddingSize: a, borderSize: o, boxSizing: n };
}
function fi(e, t = 1, n) {
  var a;
  qt || (qt = document.createElement("textarea"), document.body.appendChild(qt));
  const { paddingSize: o, borderSize: l, boxSizing: s, contextStyle: r } = qy(e);
  qt.setAttribute("style", `${r};${Yy}`), qt.value = e.value || e.placeholder || "";
  let i = qt.scrollHeight;
  const c = {};
  s === "border-box" ? i = i + l : s === "content-box" && (i = i - o), qt.value = "";
  const f = qt.scrollHeight - o;
  if (Ye(t)) {
    let d = f * t;
    s === "border-box" && (d = d + o + l), i = Math.max(d, i), c.minHeight = `${d}px`;
  }
  if (Ye(n)) {
    let d = f * n;
    s === "border-box" && (d = d + o + l), i = Math.min(d, i);
  }
  return c.height = `${i}px`, (a = qt.parentNode) == null || a.removeChild(qt), qt = void 0, c;
}
const Gy = _e({
  id: {
    type: String,
    default: void 0
  },
  size: aa,
  disabled: Boolean,
  modelValue: {
    type: ce([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: ce([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: Xt
  },
  prefixIcon: {
    type: Xt
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: ce([Object, Array, String]),
    default: () => en({})
  },
  autofocus: {
    type: Boolean,
    default: !1
  }
}), Xy = {
  [vt]: (e) => xt(e),
  input: (e) => xt(e),
  change: (e) => xt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Zy = ["role"], Qy = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus"], Jy = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus"], e0 = Q({
  name: "ElInput",
  inheritAttrs: !1
}), t0 = /* @__PURE__ */ Q({
  ...e0,
  props: Gy,
  emits: Xy,
  setup(e, { expose: t, emit: n }) {
    const a = e, o = Zo(), l = Nn(), s = k(() => {
      const re = {};
      return a.containerRole === "combobox" && (re["aria-haspopup"] = o["aria-haspopup"], re["aria-owns"] = o["aria-owns"], re["aria-expanded"] = o["aria-expanded"]), re;
    }), r = k(() => [
      a.type === "textarea" ? b.b() : p.b(),
      p.m(m.value),
      p.is("disabled", h.value),
      p.is("exceed", le.value),
      {
        [p.b("group")]: l.prepend || l.append,
        [p.bm("group", "append")]: l.append,
        [p.bm("group", "prepend")]: l.prepend,
        [p.m("prefix")]: l.prefix || a.prefixIcon,
        [p.m("suffix")]: l.suffix || a.suffixIcon || a.clearable || a.showPassword,
        [p.bm("suffix", "password-clear")]: M.value && z.value
      },
      o.class
    ]), i = k(() => [
      p.e("wrapper"),
      p.is("focus", I.value)
    ]), c = nb({
      excludeKeys: k(() => Object.keys(s.value))
    }), { form: f, formItem: d } = oa(), { inputId: v } = Hr(a, {
      formItemContext: d
    }), m = Dn(), h = fl(), p = me("input"), b = me("textarea"), g = fn(), w = fn(), S = O(!1), y = O(!1), $ = O(!1), T = O(), E = fn(a.inputStyle), x = k(() => g.value || w.value), { wrapperRef: N, isFocused: I, handleFocus: D, handleBlur: H } = Ry(x, {
      afterBlur() {
        var re;
        a.validateEvent && ((re = d == null ? void 0 : d.validate) == null || re.call(d, "blur").catch((be) => mt(be)));
      }
    }), Z = k(() => {
      var re;
      return (re = f == null ? void 0 : f.statusIcon) != null ? re : !1;
    }), U = k(() => (d == null ? void 0 : d.validateState) || ""), j = k(() => U.value && Wu[U.value]), W = k(() => $.value ? zg : Ig), R = k(() => [
      o.style,
      a.inputStyle
    ]), B = k(() => [
      a.inputStyle,
      E.value,
      { resize: a.resize }
    ]), C = k(() => to(a.modelValue) ? "" : String(a.modelValue)), M = k(() => a.clearable && !h.value && !a.readonly && !!C.value && (I.value || S.value)), z = k(() => a.showPassword && !h.value && !a.readonly && !!C.value && (!!C.value || I.value)), Y = k(() => a.showWordLimit && !!c.value.maxlength && (a.type === "text" || a.type === "textarea") && !h.value && !a.readonly && !a.showPassword), ne = k(() => C.value.length), le = k(() => !!Y.value && ne.value > Number(c.value.maxlength)), ve = k(() => !!l.suffix || !!a.suffixIcon || M.value || a.showPassword || Y.value || !!U.value && Z.value), [ge, we] = Ay(g);
    Mn(w, (re) => {
      if (Oe(), !Y.value || a.resize !== "both")
        return;
      const be = re[0], { width: Be } = be.contentRect;
      T.value = {
        right: `calc(100% - ${Be + 15 + 6}px)`
      };
    });
    const ke = () => {
      const { type: re, autosize: be } = a;
      if (!(!qe || re !== "textarea" || !w.value))
        if (be) {
          const Be = _t(be) ? be.minRows : void 0, nt = _t(be) ? be.maxRows : void 0, ht = fi(w.value, Be, nt);
          E.value = {
            overflowY: "hidden",
            ...ht
          }, $e(() => {
            w.value.offsetHeight, E.value = ht;
          });
        } else
          E.value = {
            minHeight: fi(w.value).minHeight
          };
    }, Oe = ((re) => {
      let be = !1;
      return () => {
        var Be;
        if (be || !a.autosize)
          return;
        ((Be = w.value) == null ? void 0 : Be.offsetParent) === null || (re(), be = !0);
      };
    })(ke), Re = () => {
      const re = x.value, be = a.formatter ? a.formatter(C.value) : C.value;
      !re || re.value === be || (re.value = be);
    }, Ne = async (re) => {
      ge();
      let { value: be } = re.target;
      if (a.formatter && (be = a.parser ? a.parser(be) : be), !y.value) {
        if (be === C.value) {
          Re();
          return;
        }
        n(vt, be), n("input", be), await $e(), Re(), we();
      }
    }, Ve = (re) => {
      n("change", re.target.value);
    }, Xe = (re) => {
      n("compositionstart", re), y.value = !0;
    }, Je = (re) => {
      var be;
      n("compositionupdate", re);
      const Be = (be = re.target) == null ? void 0 : be.value, nt = Be[Be.length - 1] || "";
      y.value = !Yu(nt);
    }, Ke = (re) => {
      n("compositionend", re), y.value && (y.value = !1, Ne(re));
    }, dt = () => {
      $.value = !$.value, st();
    }, st = async () => {
      var re;
      await $e(), (re = x.value) == null || re.focus();
    }, et = () => {
      var re;
      return (re = x.value) == null ? void 0 : re.blur();
    }, Ce = (re) => {
      S.value = !1, n("mouseleave", re);
    }, it = (re) => {
      S.value = !0, n("mouseenter", re);
    }, ot = (re) => {
      n("keydown", re);
    }, ft = () => {
      var re;
      (re = x.value) == null || re.select();
    }, lt = () => {
      n(vt, ""), n("change", ""), n("clear"), n("input", "");
    };
    return ue(() => a.modelValue, () => {
      var re;
      $e(() => ke()), a.validateEvent && ((re = d == null ? void 0 : d.validate) == null || re.call(d, "change").catch((be) => mt(be)));
    }), ue(C, () => Re()), ue(() => a.type, async () => {
      await $e(), Re(), ke();
    }), Ge(() => {
      !a.formatter && a.parser && mt("ElInput", "If you set the parser, you also need to set the formatter."), Re(), $e(ke);
    }), t({
      input: g,
      textarea: w,
      ref: x,
      textareaStyle: B,
      autosize: wt(a, "autosize"),
      focus: st,
      blur: et,
      select: ft,
      clear: lt,
      resizeTextarea: ke
    }), (re, be) => je((_(), L("div", Ue(u(s), {
      class: u(r),
      style: u(R),
      role: re.containerRole,
      onMouseenter: it,
      onMouseleave: Ce
    }), [
      ie(" input "),
      re.type !== "textarea" ? (_(), L(Te, { key: 0 }, [
        ie(" prepend slot "),
        re.$slots.prepend ? (_(), L("div", {
          key: 0,
          class: A(u(p).be("group", "prepend"))
        }, [
          ae(re.$slots, "prepend")
        ], 2)) : ie("v-if", !0),
        K("div", {
          ref_key: "wrapperRef",
          ref: N,
          class: A(u(i))
        }, [
          ie(" prefix slot "),
          re.$slots.prefix || re.prefixIcon ? (_(), L("span", {
            key: 0,
            class: A(u(p).e("prefix"))
          }, [
            K("span", {
              class: A(u(p).e("prefix-inner"))
            }, [
              ae(re.$slots, "prefix"),
              re.prefixIcon ? (_(), oe(u(xe), {
                key: 0,
                class: A(u(p).e("icon"))
              }, {
                default: X(() => [
                  (_(), oe(rt(re.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ie("v-if", !0)
            ], 2)
          ], 2)) : ie("v-if", !0),
          K("input", Ue({
            id: u(v),
            ref_key: "input",
            ref: g,
            class: u(p).e("inner")
          }, u(c), {
            type: re.showPassword ? $.value ? "text" : "password" : re.type,
            disabled: u(h),
            formatter: re.formatter,
            parser: re.parser,
            readonly: re.readonly,
            autocomplete: re.autocomplete,
            tabindex: re.tabindex,
            "aria-label": re.label,
            placeholder: re.placeholder,
            style: re.inputStyle,
            form: a.form,
            autofocus: a.autofocus,
            onCompositionstart: Xe,
            onCompositionupdate: Je,
            onCompositionend: Ke,
            onInput: Ne,
            onFocus: be[0] || (be[0] = (...Be) => u(D) && u(D)(...Be)),
            onBlur: be[1] || (be[1] = (...Be) => u(H) && u(H)(...Be)),
            onChange: Ve,
            onKeydown: ot
          }), null, 16, Qy),
          ie(" suffix slot "),
          u(ve) ? (_(), L("span", {
            key: 1,
            class: A(u(p).e("suffix"))
          }, [
            K("span", {
              class: A(u(p).e("suffix-inner"))
            }, [
              !u(M) || !u(z) || !u(Y) ? (_(), L(Te, { key: 0 }, [
                ae(re.$slots, "suffix"),
                re.suffixIcon ? (_(), oe(u(xe), {
                  key: 0,
                  class: A(u(p).e("icon"))
                }, {
                  default: X(() => [
                    (_(), oe(rt(re.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ie("v-if", !0)
              ], 64)) : ie("v-if", !0),
              u(M) ? (_(), oe(u(xe), {
                key: 1,
                class: A([u(p).e("icon"), u(p).e("clear")]),
                onMousedown: Ze(u(pn), ["prevent"]),
                onClick: lt
              }, {
                default: X(() => [
                  q(u(sl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ie("v-if", !0),
              u(z) ? (_(), oe(u(xe), {
                key: 2,
                class: A([u(p).e("icon"), u(p).e("password")]),
                onClick: dt
              }, {
                default: X(() => [
                  (_(), oe(rt(u(W))))
                ]),
                _: 1
              }, 8, ["class"])) : ie("v-if", !0),
              u(Y) ? (_(), L("span", {
                key: 3,
                class: A(u(p).e("count"))
              }, [
                K("span", {
                  class: A(u(p).e("count-inner"))
                }, pe(u(ne)) + " / " + pe(u(c).maxlength), 3)
              ], 2)) : ie("v-if", !0),
              u(U) && u(j) && u(Z) ? (_(), oe(u(xe), {
                key: 4,
                class: A([
                  u(p).e("icon"),
                  u(p).e("validateIcon"),
                  u(p).is("loading", u(U) === "validating")
                ])
              }, {
                default: X(() => [
                  (_(), oe(rt(u(j))))
                ]),
                _: 1
              }, 8, ["class"])) : ie("v-if", !0)
            ], 2)
          ], 2)) : ie("v-if", !0)
        ], 2),
        ie(" append slot "),
        re.$slots.append ? (_(), L("div", {
          key: 1,
          class: A(u(p).be("group", "append"))
        }, [
          ae(re.$slots, "append")
        ], 2)) : ie("v-if", !0)
      ], 64)) : (_(), L(Te, { key: 1 }, [
        ie(" textarea "),
        K("textarea", Ue({
          id: u(v),
          ref_key: "textarea",
          ref: w,
          class: u(b).e("inner")
        }, u(c), {
          tabindex: re.tabindex,
          disabled: u(h),
          readonly: re.readonly,
          autocomplete: re.autocomplete,
          style: u(B),
          "aria-label": re.label,
          placeholder: re.placeholder,
          form: a.form,
          autofocus: a.autofocus,
          onCompositionstart: Xe,
          onCompositionupdate: Je,
          onCompositionend: Ke,
          onInput: Ne,
          onFocus: be[2] || (be[2] = (...Be) => u(D) && u(D)(...Be)),
          onBlur: be[3] || (be[3] = (...Be) => u(H) && u(H)(...Be)),
          onChange: Ve,
          onKeydown: ot
        }), null, 16, Jy),
        u(Y) ? (_(), L("span", {
          key: 0,
          style: Fe(T.value),
          class: A(u(p).e("count"))
        }, pe(u(ne)) + " / " + pe(u(c).maxlength), 7)) : ie("v-if", !0)
      ], 64))
    ], 16, Zy)), [
      [$t, re.type !== "hidden"]
    ]);
  }
});
var n0 = /* @__PURE__ */ Me(t0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const tn = St(n0), ua = 4, a0 = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, o0 = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), wc = Symbol("scrollbarContextKey"), l0 = _e({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), r0 = "Thumb", s0 = /* @__PURE__ */ Q({
  __name: "thumb",
  props: l0,
  setup(e) {
    const t = e, n = Se(wc), a = me("scrollbar");
    n || Ta(r0, "can not inject scrollbar context");
    const o = O(), l = O(), s = O({}), r = O(!1);
    let i = !1, c = !1, f = qe ? document.onselectstart : null;
    const d = k(() => a0[t.vertical ? "vertical" : "horizontal"]), v = k(() => o0({
      size: t.size,
      move: t.move,
      bar: d.value
    })), m = k(() => o.value[d.value.offset] ** 2 / n.wrapElement[d.value.scrollSize] / t.ratio / l.value[d.value.offset]), h = (T) => {
      var E;
      if (T.stopPropagation(), T.ctrlKey || [1, 2].includes(T.button))
        return;
      (E = window.getSelection()) == null || E.removeAllRanges(), b(T);
      const x = T.currentTarget;
      x && (s.value[d.value.axis] = x[d.value.offset] - (T[d.value.client] - x.getBoundingClientRect()[d.value.direction]));
    }, p = (T) => {
      if (!l.value || !o.value || !n.wrapElement)
        return;
      const E = Math.abs(T.target.getBoundingClientRect()[d.value.direction] - T[d.value.client]), x = l.value[d.value.offset] / 2, N = (E - x) * 100 * m.value / o.value[d.value.offset];
      n.wrapElement[d.value.scroll] = N * n.wrapElement[d.value.scrollSize] / 100;
    }, b = (T) => {
      T.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", w), f = document.onselectstart, document.onselectstart = () => !1;
    }, g = (T) => {
      if (!o.value || !l.value || i === !1)
        return;
      const E = s.value[d.value.axis];
      if (!E)
        return;
      const x = (o.value.getBoundingClientRect()[d.value.direction] - T[d.value.client]) * -1, N = l.value[d.value.offset] - E, I = (x - N) * 100 * m.value / o.value[d.value.offset];
      n.wrapElement[d.value.scroll] = I * n.wrapElement[d.value.scrollSize] / 100;
    }, w = () => {
      i = !1, s.value[d.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", w), $(), c && (r.value = !1);
    }, S = () => {
      c = !1, r.value = !!t.size;
    }, y = () => {
      c = !0, r.value = i;
    };
    Ut(() => {
      $(), document.removeEventListener("mouseup", w);
    });
    const $ = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Kt(wt(n, "scrollbarElement"), "mousemove", S), Kt(wt(n, "scrollbarElement"), "mouseleave", y), (T, E) => (_(), oe(qn, {
      name: u(a).b("fade"),
      persisted: ""
    }, {
      default: X(() => [
        je(K("div", {
          ref_key: "instance",
          ref: o,
          class: A([u(a).e("bar"), u(a).is(u(d).key)]),
          onMousedown: p
        }, [
          K("div", {
            ref_key: "thumb",
            ref: l,
            class: A(u(a).e("thumb")),
            style: Fe(u(v)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [$t, T.always || r.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var pi = /* @__PURE__ */ Me(s0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const i0 = _e({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), u0 = /* @__PURE__ */ Q({
  __name: "bar",
  props: i0,
  setup(e, { expose: t }) {
    const n = e, a = O(0), o = O(0);
    return t({
      handleScroll: (s) => {
        if (s) {
          const r = s.offsetHeight - ua, i = s.offsetWidth - ua;
          o.value = s.scrollTop * 100 / r * n.ratioY, a.value = s.scrollLeft * 100 / i * n.ratioX;
        }
      }
    }), (s, r) => (_(), L(Te, null, [
      q(pi, {
        move: a.value,
        ratio: s.ratioX,
        size: s.width,
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      q(pi, {
        move: o.value,
        ratio: s.ratioY,
        size: s.height,
        vertical: "",
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var c0 = /* @__PURE__ */ Me(u0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const d0 = _e({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: ce([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  id: String,
  role: String,
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical"]
  }
}), f0 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Ye)
}, jl = "ElScrollbar", p0 = Q({
  name: jl
}), v0 = /* @__PURE__ */ Q({
  ...p0,
  props: d0,
  emits: f0,
  setup(e, { expose: t, emit: n }) {
    const a = e, o = me("scrollbar");
    let l, s;
    const r = O(), i = O(), c = O(), f = O("0"), d = O("0"), v = O(), m = O(1), h = O(1), p = k(() => {
      const E = {};
      return a.height && (E.height = pa(a.height)), a.maxHeight && (E.maxHeight = pa(a.maxHeight)), [a.wrapStyle, E];
    }), b = k(() => [
      a.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !a.native }
    ]), g = k(() => [o.e("view"), a.viewClass]), w = () => {
      var E;
      i.value && ((E = v.value) == null || E.handleScroll(i.value), n("scroll", {
        scrollTop: i.value.scrollTop,
        scrollLeft: i.value.scrollLeft
      }));
    };
    function S(E, x) {
      _t(E) ? i.value.scrollTo(E) : Ye(E) && Ye(x) && i.value.scrollTo(E, x);
    }
    const y = (E) => {
      if (!Ye(E)) {
        mt(jl, "value must be a number");
        return;
      }
      i.value.scrollTop = E;
    }, $ = (E) => {
      if (!Ye(E)) {
        mt(jl, "value must be a number");
        return;
      }
      i.value.scrollLeft = E;
    }, T = () => {
      if (!i.value)
        return;
      const E = i.value.offsetHeight - ua, x = i.value.offsetWidth - ua, N = E ** 2 / i.value.scrollHeight, I = x ** 2 / i.value.scrollWidth, D = Math.max(N, a.minSize), H = Math.max(I, a.minSize);
      m.value = N / (E - N) / (D / (E - D)), h.value = I / (x - I) / (H / (x - H)), d.value = D + ua < E ? `${D}px` : "", f.value = H + ua < x ? `${H}px` : "";
    };
    return ue(() => a.noresize, (E) => {
      E ? (l == null || l(), s == null || s()) : ({ stop: l } = Mn(c, T), s = Kt("resize", T));
    }, { immediate: !0 }), ue(() => [a.maxHeight, a.height], () => {
      a.native || $e(() => {
        var E;
        T(), i.value && ((E = v.value) == null || E.handleScroll(i.value));
      });
    }), ct(wc, Rn({
      scrollbarElement: r,
      wrapElement: i
    })), Ge(() => {
      a.native || $e(() => {
        T();
      });
    }), Qo(() => T()), t({
      wrapRef: i,
      update: T,
      scrollTo: S,
      setScrollTop: y,
      setScrollLeft: $,
      handleScroll: w
    }), (E, x) => (_(), L("div", {
      ref_key: "scrollbarRef",
      ref: r,
      class: A(u(o).b())
    }, [
      K("div", {
        ref_key: "wrapRef",
        ref: i,
        class: A(u(b)),
        style: Fe(u(p)),
        onScroll: w
      }, [
        (_(), oe(rt(E.tag), {
          id: E.id,
          ref_key: "resizeRef",
          ref: c,
          class: A(u(g)),
          style: Fe(E.viewStyle),
          role: E.role,
          "aria-label": E.ariaLabel,
          "aria-orientation": E.ariaOrientation
        }, {
          default: X(() => [
            ae(E.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 38),
      E.native ? ie("v-if", !0) : (_(), oe(c0, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        height: d.value,
        width: f.value,
        always: E.always,
        "ratio-x": h.value,
        "ratio-y": m.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var m0 = /* @__PURE__ */ Me(v0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const la = St(m0), Kr = Symbol("popper"), Cc = Symbol("popperContent"), h0 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Sc = _e({
  role: {
    type: String,
    values: h0,
    default: "tooltip"
  }
}), g0 = Q({
  name: "ElPopper",
  inheritAttrs: !1
}), b0 = /* @__PURE__ */ Q({
  ...g0,
  props: Sc,
  setup(e, { expose: t }) {
    const n = e, a = O(), o = O(), l = O(), s = O(), r = k(() => n.role), i = {
      triggerRef: a,
      popperInstanceRef: o,
      contentRef: l,
      referenceRef: s,
      role: r
    };
    return t(i), ct(Kr, i), (c, f) => ae(c.$slots, "default");
  }
});
var y0 = /* @__PURE__ */ Me(b0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const kc = _e({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), w0 = Q({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), C0 = /* @__PURE__ */ Q({
  ...w0,
  props: kc,
  setup(e, { expose: t }) {
    const n = e, a = me("popper"), { arrowOffset: o, arrowRef: l, arrowStyle: s } = Se(Cc, void 0);
    return ue(() => n.arrowOffset, (r) => {
      o.value = r;
    }), Ut(() => {
      l.value = void 0;
    }), t({
      arrowRef: l
    }), (r, i) => (_(), L("span", {
      ref_key: "arrowRef",
      ref: l,
      class: A(u(a).e("arrow")),
      style: Fe(u(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var S0 = /* @__PURE__ */ Me(C0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const Sl = "ElOnlyChild", k0 = Q({
  name: Sl,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var a;
    const o = Se(mc), l = My((a = o == null ? void 0 : o.setForwardRef) != null ? a : pn);
    return () => {
      var s;
      const r = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!r)
        return null;
      if (r.length > 1)
        return mt(Sl, "requires exact only one valid child."), null;
      const i = $c(r);
      return i ? je(Bd(i, n), [[l]]) : (mt(Sl, "no valid child node found"), null);
    };
  }
});
function $c(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (_t(n))
      switch (n.type) {
        case dr:
          continue;
        case tu:
        case "svg":
          return vi(n);
        case Te:
          return $c(n.children);
        default:
          return n;
      }
    return vi(n);
  }
  return null;
}
function vi(e) {
  const t = me("only-child");
  return q("span", {
    class: t.e("content")
  }, [e]);
}
const _c = _e({
  virtualRef: {
    type: ce(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: ce(Function)
  },
  onMouseleave: {
    type: ce(Function)
  },
  onClick: {
    type: ce(Function)
  },
  onKeydown: {
    type: ce(Function)
  },
  onFocus: {
    type: ce(Function)
  },
  onBlur: {
    type: ce(Function)
  },
  onContextmenu: {
    type: ce(Function)
  },
  id: String,
  open: Boolean
}), $0 = Q({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), _0 = /* @__PURE__ */ Q({
  ...$0,
  props: _c,
  setup(e, { expose: t }) {
    const n = e, { role: a, triggerRef: o } = Se(Kr, void 0);
    Py(o);
    const l = k(() => r.value ? n.id : void 0), s = k(() => {
      if (a && a.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), r = k(() => {
      if (a && a.value !== "tooltip")
        return a.value;
    }), i = k(() => r.value ? `${n.open}` : void 0);
    let c;
    return Ge(() => {
      ue(() => n.virtualRef, (f) => {
        f && (o.value = _n(f));
      }, {
        immediate: !0
      }), ue(o, (f, d) => {
        c == null || c(), c = void 0, fa(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((v) => {
          var m;
          const h = n[v];
          h && (f.addEventListener(v.slice(2).toLowerCase(), h), (m = d == null ? void 0 : d.removeEventListener) == null || m.call(d, v.slice(2).toLowerCase(), h));
        }), c = ue([l, s, r, i], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((m, h) => {
            to(v[h]) ? f.removeAttribute(m) : f.setAttribute(m, v[h]);
          });
        }, { immediate: !0 })), fa(d) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((v) => d.removeAttribute(v));
      }, {
        immediate: !0
      });
    }), Ut(() => {
      c == null || c(), c = void 0;
    }), t({
      triggerRef: o
    }), (f, d) => f.virtualTriggering ? ie("v-if", !0) : (_(), oe(u(k0), Ue({ key: 0 }, f.$attrs, {
      "aria-controls": u(l),
      "aria-describedby": u(s),
      "aria-expanded": u(i),
      "aria-haspopup": u(r)
    }), {
      default: X(() => [
        ae(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var E0 = /* @__PURE__ */ Me(_0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const kl = "focus-trap.focus-after-trapped", $l = "focus-trap.focus-after-released", T0 = "focus-trap.focusout-prevented", mi = {
  cancelable: !0,
  bubbles: !1
}, O0 = {
  cancelable: !0,
  bubbles: !1
}, hi = "focusAfterTrapped", gi = "focusAfterReleased", Ec = Symbol("elFocusTrap"), Wr = O(), pl = O(0), jr = O(0);
let uo = 0;
const Tc = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const o = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || o ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 || a === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, bi = (e, t) => {
  for (const n of e)
    if (!P0(n, t))
      return n;
}, P0 = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, M0 = (e) => {
  const t = Tc(e), n = bi(t, e), a = bi(t.reverse(), e);
  return [n, a];
}, x0 = (e) => e instanceof HTMLInputElement && "select" in e, Sn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), jr.value = window.performance.now(), e !== n && x0(e) && t && e.select();
  }
};
function yi(e, t) {
  const n = [...e], a = e.indexOf(t);
  return a !== -1 && n.splice(a, 1), n;
}
const A0 = () => {
  let e = [];
  return {
    push: (a) => {
      const o = e[0];
      o && a !== o && o.pause(), e = yi(e, a), e.unshift(a);
    },
    remove: (a) => {
      var o, l;
      e = yi(e, a), (l = (o = e[0]) == null ? void 0 : o.resume) == null || l.call(o);
    }
  };
}, D0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const a of e)
    if (Sn(a, t), document.activeElement !== n)
      return;
}, wi = A0(), I0 = () => pl.value > jr.value, co = () => {
  Wr.value = "pointer", pl.value = window.performance.now();
}, Ci = () => {
  Wr.value = "keyboard", pl.value = window.performance.now();
}, N0 = () => (Ge(() => {
  uo === 0 && (document.addEventListener("mousedown", co), document.addEventListener("touchstart", co), document.addEventListener("keydown", Ci)), uo++;
}), Ut(() => {
  uo--, uo <= 0 && (document.removeEventListener("mousedown", co), document.removeEventListener("touchstart", co), document.removeEventListener("keydown", Ci));
}), {
  focusReason: Wr,
  lastUserFocusTimestamp: pl,
  lastAutomatedFocusTimestamp: jr
}), fo = (e) => new CustomEvent(T0, {
  ...O0,
  detail: e
}), R0 = Q({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    hi,
    gi,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = O();
    let a, o;
    const { focusReason: l } = N0();
    _y((h) => {
      e.trapped && !s.paused && t("release-requested", h);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, r = (h) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { key: p, altKey: b, ctrlKey: g, metaKey: w, currentTarget: S, shiftKey: y } = h, { loop: $ } = e, T = p === We.tab && !b && !g && !w, E = document.activeElement;
      if (T && E) {
        const x = S, [N, I] = M0(x);
        if (N && I) {
          if (!y && E === I) {
            const H = fo({
              focusReason: l.value
            });
            t("focusout-prevented", H), H.defaultPrevented || (h.preventDefault(), $ && Sn(N, !0));
          } else if (y && [N, x].includes(E)) {
            const H = fo({
              focusReason: l.value
            });
            t("focusout-prevented", H), H.defaultPrevented || (h.preventDefault(), $ && Sn(I, !0));
          }
        } else if (E === x) {
          const H = fo({
            focusReason: l.value
          });
          t("focusout-prevented", H), H.defaultPrevented || h.preventDefault();
        }
      }
    };
    ct(Ec, {
      focusTrapRef: n,
      onKeydown: r
    }), ue(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), ue([n], ([h], [p]) => {
      h && (h.addEventListener("keydown", r), h.addEventListener("focusin", f), h.addEventListener("focusout", d)), p && (p.removeEventListener("keydown", r), p.removeEventListener("focusin", f), p.removeEventListener("focusout", d));
    });
    const i = (h) => {
      t(hi, h);
    }, c = (h) => t(gi, h), f = (h) => {
      const p = u(n);
      if (!p)
        return;
      const b = h.target, g = h.relatedTarget, w = b && p.contains(b);
      e.trapped || g && p.contains(g) || (a = g), w && t("focusin", h), !s.paused && e.trapped && (w ? o = b : Sn(o, !0));
    }, d = (h) => {
      const p = u(n);
      if (!(s.paused || !p))
        if (e.trapped) {
          const b = h.relatedTarget;
          !to(b) && !p.contains(b) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const g = fo({
                focusReason: l.value
              });
              t("focusout-prevented", g), g.defaultPrevented || Sn(o, !0);
            }
          }, 0);
        } else {
          const b = h.target;
          b && p.contains(b) || t("focusout", h);
        }
    };
    async function v() {
      await $e();
      const h = u(n);
      if (h) {
        wi.push(s);
        const p = h.contains(document.activeElement) ? a : document.activeElement;
        if (a = p, !h.contains(p)) {
          const g = new Event(kl, mi);
          h.addEventListener(kl, i), h.dispatchEvent(g), g.defaultPrevented || $e(() => {
            let w = e.focusStartEl;
            xt(w) || (Sn(w), document.activeElement !== w && (w = "first")), w === "first" && D0(Tc(h), !0), (document.activeElement === p || w === "container") && Sn(h);
          });
        }
      }
    }
    function m() {
      const h = u(n);
      if (h) {
        h.removeEventListener(kl, i);
        const p = new CustomEvent($l, {
          ...mi,
          detail: {
            focusReason: l.value
          }
        });
        h.addEventListener($l, c), h.dispatchEvent(p), !p.defaultPrevented && (l.value == "keyboard" || !I0() || h.contains(document.activeElement)) && Sn(a ?? document.body), h.removeEventListener($l, c), wi.remove(s);
      }
    }
    return Ge(() => {
      e.trapped && v(), ue(() => e.trapped, (h) => {
        h ? v() : m();
      });
    }), Ut(() => {
      e.trapped && m();
    }), {
      onKeydown: r
    };
  }
});
function L0(e, t, n, a, o, l) {
  return ae(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Oc = /* @__PURE__ */ Me(R0, [["render", L0], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const F0 = ["fixed", "absolute"], B0 = _e({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: ce(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: cl,
    default: "bottom"
  },
  popperOptions: {
    type: ce(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: F0,
    default: "absolute"
  }
}), Pc = _e({
  ...B0,
  id: String,
  style: {
    type: ce([String, Array, Object])
  },
  className: {
    type: ce([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: ce([String, Array, Object])
  },
  popperStyle: {
    type: ce([String, Array, Object])
  },
  referenceEl: {
    type: ce(Object)
  },
  triggerTargetEl: {
    type: ce(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), V0 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, z0 = (e, t = []) => {
  const { placement: n, strategy: a, popperOptions: o } = e, l = {
    placement: n,
    strategy: a,
    ...o,
    modifiers: [...K0(e), ...t]
  };
  return W0(l, o == null ? void 0 : o.modifiers), l;
}, H0 = (e) => {
  if (qe)
    return _n(e);
};
function K0(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: a } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: a
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function W0(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const j0 = 0, Y0 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: a, role: o } = Se(Kr, void 0), l = O(), s = O(), r = k(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = k(() => {
    var g;
    const w = u(l), S = (g = u(s)) != null ? g : j0;
    return {
      name: "arrow",
      enabled: !Iu(w),
      options: {
        element: w,
        padding: S
      }
    };
  }), c = k(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...z0(e, [
      u(i),
      u(r)
    ])
  })), f = k(() => H0(e.referenceEl) || u(a)), { attributes: d, state: v, styles: m, update: h, forceUpdate: p, instanceRef: b } = Sy(f, n, c);
  return ue(b, (g) => t.value = g), Ge(() => {
    ue(() => {
      var g;
      return (g = u(f)) == null ? void 0 : g.getBoundingClientRect();
    }, () => {
      h();
    });
  }), {
    attributes: d,
    arrowRef: l,
    contentRef: n,
    instanceRef: b,
    state: v,
    styles: m,
    role: o,
    forceUpdate: p,
    update: h
  };
}, U0 = (e, {
  attributes: t,
  styles: n,
  role: a
}) => {
  const { nextZIndex: o } = Br(), l = me("popper"), s = k(() => u(t).popper), r = O(Ye(e.zIndex) ? e.zIndex : o()), i = k(() => [
    l.b(),
    l.is("pure", e.pure),
    l.is(e.effect),
    e.popperClass
  ]), c = k(() => [
    { zIndex: u(r) },
    u(n).popper,
    e.popperStyle || {}
  ]), f = k(() => a.value === "dialog" ? "false" : void 0), d = k(() => u(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: d,
    contentAttrs: s,
    contentClass: i,
    contentStyle: c,
    contentZIndex: r,
    updateZIndex: () => {
      r.value = Ye(e.zIndex) ? e.zIndex : o();
    }
  };
}, q0 = (e, t) => {
  const n = O(!1), a = O();
  return {
    focusStartRef: a,
    trapped: n,
    onFocusAfterReleased: (c) => {
      var f;
      ((f = c.detail) == null ? void 0 : f.focusReason) !== "pointer" && (a.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (c) => {
      e.visible && !n.value && (c.target && (a.value = c.target), n.value = !0);
    },
    onFocusoutPrevented: (c) => {
      e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, G0 = Q({
  name: "ElPopperContent"
}), X0 = /* @__PURE__ */ Q({
  ...G0,
  props: Pc,
  emits: V0,
  setup(e, { expose: t, emit: n }) {
    const a = e, {
      focusStartRef: o,
      trapped: l,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: r,
      onFocusInTrap: i,
      onFocusoutPrevented: c,
      onReleaseRequested: f
    } = q0(a, n), { attributes: d, arrowRef: v, contentRef: m, styles: h, instanceRef: p, role: b, update: g } = Y0(a), {
      ariaModal: w,
      arrowStyle: S,
      contentAttrs: y,
      contentClass: $,
      contentStyle: T,
      updateZIndex: E
    } = U0(a, {
      styles: h,
      attributes: d,
      role: b
    }), x = Se(Xo, void 0), N = O();
    ct(Cc, {
      arrowStyle: S,
      arrowRef: v,
      arrowOffset: N
    }), x && (x.addInputId || x.removeInputId) && ct(Xo, {
      ...x,
      addInputId: pn,
      removeInputId: pn
    });
    let I;
    const D = (Z = !0) => {
      g(), Z && E();
    }, H = () => {
      D(!1), a.visible && a.focusOnShow ? l.value = !0 : a.visible === !1 && (l.value = !1);
    };
    return Ge(() => {
      ue(() => a.triggerTargetEl, (Z, U) => {
        I == null || I(), I = void 0;
        const j = u(Z || m.value), W = u(U || m.value);
        fa(j) && (I = ue([b, () => a.ariaLabel, w, () => a.id], (R) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((B, C) => {
            to(R[C]) ? j.removeAttribute(B) : j.setAttribute(B, R[C]);
          });
        }, { immediate: !0 })), W !== j && fa(W) && ["role", "aria-label", "aria-modal", "id"].forEach((R) => {
          W.removeAttribute(R);
        });
      }, { immediate: !0 }), ue(() => a.visible, H, { immediate: !0 });
    }), Ut(() => {
      I == null || I(), I = void 0;
    }), t({
      popperContentRef: m,
      popperInstanceRef: p,
      updatePopper: D,
      contentStyle: T
    }), (Z, U) => (_(), L("div", Ue({
      ref_key: "contentRef",
      ref: m
    }, u(y), {
      style: u(T),
      class: u($),
      tabindex: "-1",
      onMouseenter: U[0] || (U[0] = (j) => Z.$emit("mouseenter", j)),
      onMouseleave: U[1] || (U[1] = (j) => Z.$emit("mouseleave", j))
    }), [
      q(u(Oc), {
        trapped: u(l),
        "trap-on-focus-in": !0,
        "focus-trap-el": u(m),
        "focus-start-el": u(o),
        onFocusAfterTrapped: u(r),
        onFocusAfterReleased: u(s),
        onFocusin: u(i),
        onFocusoutPrevented: u(c),
        onReleaseRequested: u(f)
      }, {
        default: X(() => [
          ae(Z.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var Z0 = /* @__PURE__ */ Me(X0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const Q0 = St(y0), vl = Symbol("elTooltip"), Yr = _e({
  ...Oy,
  ...Pc,
  appendTo: {
    type: ce([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: ce(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), Mc = _e({
  ..._c,
  disabled: Boolean,
  trigger: {
    type: ce([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: ce(Array),
    default: () => [We.enter, We.space]
  }
}), {
  useModelToggleProps: J0,
  useModelToggleEmits: e1,
  useModelToggle: t1
} = Zu("visible"), n1 = _e({
  ...Sc,
  ...J0,
  ...Yr,
  ...Mc,
  ...kc,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), a1 = [
  ...e1,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], o1 = (e, t) => ze(e) ? e.includes(t) : e === t, ra = (e, t, n) => (a) => {
  o1(u(e), t) && n(a);
}, l1 = Q({
  name: "ElTooltipTrigger"
}), r1 = /* @__PURE__ */ Q({
  ...l1,
  props: Mc,
  setup(e, { expose: t }) {
    const n = e, a = me("tooltip"), { controlled: o, id: l, open: s, onOpen: r, onClose: i, onToggle: c } = Se(vl, void 0), f = O(null), d = () => {
      if (u(o) || n.disabled)
        return !0;
    }, v = wt(n, "trigger"), m = dn(d, ra(v, "hover", r)), h = dn(d, ra(v, "hover", i)), p = dn(d, ra(v, "click", (y) => {
      y.button === 0 && c(y);
    })), b = dn(d, ra(v, "focus", r)), g = dn(d, ra(v, "focus", i)), w = dn(d, ra(v, "contextmenu", (y) => {
      y.preventDefault(), c(y);
    })), S = dn(d, (y) => {
      const { code: $ } = y;
      n.triggerKeys.includes($) && (y.preventDefault(), c(y));
    });
    return t({
      triggerRef: f
    }), (y, $) => (_(), oe(u(E0), {
      id: u(l),
      "virtual-ref": y.virtualRef,
      open: u(s),
      "virtual-triggering": y.virtualTriggering,
      class: A(u(a).e("trigger")),
      onBlur: u(g),
      onClick: u(p),
      onContextmenu: u(w),
      onFocus: u(b),
      onMouseenter: u(m),
      onMouseleave: u(h),
      onKeydown: u(S)
    }, {
      default: X(() => [
        ae(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var s1 = /* @__PURE__ */ Me(r1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const i1 = Q({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), u1 = /* @__PURE__ */ Q({
  ...i1,
  props: Yr,
  setup(e, { expose: t }) {
    const n = e, { selector: a } = pc(), o = me("tooltip"), l = O(null), s = O(!1), {
      controlled: r,
      id: i,
      open: c,
      trigger: f,
      onClose: d,
      onOpen: v,
      onShow: m,
      onHide: h,
      onBeforeShow: p,
      onBeforeHide: b
    } = Se(vl, void 0), g = k(() => n.transition || `${o.namespace.value}-fade-in-linear`), w = k(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    Ut(() => {
      s.value = !0;
    });
    const S = k(() => u(w) ? !0 : u(c)), y = k(() => n.disabled ? !1 : u(c)), $ = k(() => n.appendTo || a.value), T = k(() => {
      var R;
      return (R = n.style) != null ? R : {};
    }), E = k(() => !u(c)), x = () => {
      h();
    }, N = () => {
      if (u(r))
        return !0;
    }, I = dn(N, () => {
      n.enterable && u(f) === "hover" && v();
    }), D = dn(N, () => {
      u(f) === "hover" && d();
    }), H = () => {
      var R, B;
      (B = (R = l.value) == null ? void 0 : R.updatePopper) == null || B.call(R), p == null || p();
    }, Z = () => {
      b == null || b();
    }, U = () => {
      m(), W = lu(k(() => {
        var R;
        return (R = l.value) == null ? void 0 : R.popperContentRef;
      }), () => {
        if (u(r))
          return;
        u(f) !== "hover" && d();
      });
    }, j = () => {
      n.virtualTriggering || d();
    };
    let W;
    return ue(() => u(c), (R) => {
      R || W == null || W();
    }, {
      flush: "post"
    }), ue(() => n.content, () => {
      var R, B;
      (B = (R = l.value) == null ? void 0 : R.updatePopper) == null || B.call(R);
    }), t({
      contentRef: l
    }), (R, B) => (_(), oe(nu, {
      disabled: !R.teleported,
      to: u($)
    }, [
      q(qn, {
        name: u(g),
        onAfterLeave: x,
        onBeforeEnter: H,
        onAfterEnter: U,
        onBeforeLeave: Z
      }, {
        default: X(() => [
          u(S) ? je((_(), oe(u(Z0), Ue({
            key: 0,
            id: u(i),
            ref_key: "contentRef",
            ref: l
          }, R.$attrs, {
            "aria-label": R.ariaLabel,
            "aria-hidden": u(E),
            "boundaries-padding": R.boundariesPadding,
            "fallback-placements": R.fallbackPlacements,
            "gpu-acceleration": R.gpuAcceleration,
            offset: R.offset,
            placement: R.placement,
            "popper-options": R.popperOptions,
            strategy: R.strategy,
            effect: R.effect,
            enterable: R.enterable,
            pure: R.pure,
            "popper-class": R.popperClass,
            "popper-style": [R.popperStyle, u(T)],
            "reference-el": R.referenceEl,
            "trigger-target-el": R.triggerTargetEl,
            visible: u(y),
            "z-index": R.zIndex,
            onMouseenter: u(I),
            onMouseleave: u(D),
            onBlur: j,
            onClose: u(d)
          }), {
            default: X(() => [
              s.value ? ie("v-if", !0) : ae(R.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [$t, u(y)]
          ]) : ie("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var c1 = /* @__PURE__ */ Me(u1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const d1 = ["innerHTML"], f1 = { key: 1 }, p1 = Q({
  name: "ElTooltip"
}), v1 = /* @__PURE__ */ Q({
  ...p1,
  props: n1,
  emits: a1,
  setup(e, { expose: t, emit: n }) {
    const a = e;
    Ty();
    const o = Ca(), l = O(), s = O(), r = () => {
      var g;
      const w = u(l);
      w && ((g = w.popperInstanceRef) == null || g.update());
    }, i = O(!1), c = O(), { show: f, hide: d, hasUpdateHandler: v } = t1({
      indicator: i,
      toggleReason: c
    }), { onOpen: m, onClose: h } = vc({
      showAfter: wt(a, "showAfter"),
      hideAfter: wt(a, "hideAfter"),
      autoClose: wt(a, "autoClose"),
      open: f,
      close: d
    }), p = k(() => Qn(a.visible) && !v.value);
    ct(vl, {
      controlled: p,
      id: o,
      open: cr(i),
      trigger: wt(a, "trigger"),
      onOpen: (g) => {
        m(g);
      },
      onClose: (g) => {
        h(g);
      },
      onToggle: (g) => {
        u(i) ? h(g) : m(g);
      },
      onShow: () => {
        n("show", c.value);
      },
      onHide: () => {
        n("hide", c.value);
      },
      onBeforeShow: () => {
        n("before-show", c.value);
      },
      onBeforeHide: () => {
        n("before-hide", c.value);
      },
      updatePopper: r
    }), ue(() => a.disabled, (g) => {
      g && i.value && (i.value = !1);
    });
    const b = (g) => {
      var w, S;
      const y = (S = (w = s.value) == null ? void 0 : w.contentRef) == null ? void 0 : S.popperContentRef, $ = (g == null ? void 0 : g.relatedTarget) || document.activeElement;
      return y && y.contains($);
    };
    return Vd(() => i.value && d()), t({
      popperRef: l,
      contentRef: s,
      isFocusInsideContent: b,
      updatePopper: r,
      onOpen: m,
      onClose: h,
      hide: d
    }), (g, w) => (_(), oe(u(Q0), {
      ref_key: "popperRef",
      ref: l,
      role: g.role
    }, {
      default: X(() => [
        q(s1, {
          disabled: g.disabled,
          trigger: g.trigger,
          "trigger-keys": g.triggerKeys,
          "virtual-ref": g.virtualRef,
          "virtual-triggering": g.virtualTriggering
        }, {
          default: X(() => [
            g.$slots.default ? ae(g.$slots, "default", { key: 0 }) : ie("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        q(c1, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": g.ariaLabel,
          "boundaries-padding": g.boundariesPadding,
          content: g.content,
          disabled: g.disabled,
          effect: g.effect,
          enterable: g.enterable,
          "fallback-placements": g.fallbackPlacements,
          "hide-after": g.hideAfter,
          "gpu-acceleration": g.gpuAcceleration,
          offset: g.offset,
          persistent: g.persistent,
          "popper-class": g.popperClass,
          "popper-style": g.popperStyle,
          placement: g.placement,
          "popper-options": g.popperOptions,
          pure: g.pure,
          "raw-content": g.rawContent,
          "reference-el": g.referenceEl,
          "trigger-target-el": g.triggerTargetEl,
          "show-after": g.showAfter,
          strategy: g.strategy,
          teleported: g.teleported,
          transition: g.transition,
          "virtual-triggering": g.virtualTriggering,
          "z-index": g.zIndex,
          "append-to": g.appendTo
        }, {
          default: X(() => [
            ae(g.$slots, "content", {}, () => [
              g.rawContent ? (_(), L("span", {
                key: 0,
                innerHTML: g.content
              }, null, 8, d1)) : (_(), L("span", f1, pe(g.content), 1))
            ]),
            g.showArrow ? (_(), oe(u(S0), {
              key: 0,
              "arrow-offset": g.arrowOffset
            }, null, 8, ["arrow-offset"])) : ie("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var m1 = /* @__PURE__ */ Me(v1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const oo = St(m1), xc = Symbol("buttonGroupContextKey"), h1 = (e, t) => {
  Ga({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, k(() => e.type === "text"));
  const n = Se(xc, void 0), a = Vr("button"), { form: o } = oa(), l = Dn(k(() => n == null ? void 0 : n.size)), s = fl(), r = O(), i = Nn(), c = k(() => e.type || (n == null ? void 0 : n.type) || ""), f = k(() => {
    var h, p, b;
    return (b = (p = e.autoInsertSpace) != null ? p : (h = a.value) == null ? void 0 : h.autoInsertSpace) != null ? b : !1;
  }), d = k(() => e.tag === "button" ? {
    ariaDisabled: s.value || e.loading,
    disabled: s.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), v = k(() => {
    var h;
    const p = (h = i.default) == null ? void 0 : h.call(i);
    if (f.value && (p == null ? void 0 : p.length) === 1) {
      const b = p[0];
      if ((b == null ? void 0 : b.type) === tu) {
        const g = b.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(g.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: l,
    _type: c,
    _ref: r,
    _props: d,
    shouldAddSpace: v,
    handleClick: (h) => {
      e.nativeType === "reset" && (o == null || o.resetFields()), t("click", h);
    }
  };
}, g1 = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], b1 = ["button", "submit", "reset"], Yl = _e({
  size: aa,
  disabled: Boolean,
  type: {
    type: String,
    values: g1,
    default: ""
  },
  icon: {
    type: Xt
  },
  nativeType: {
    type: String,
    values: b1,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Xt,
    default: () => Pr
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: ce([String, Object]),
    default: "button"
  }
}), y1 = {
  click: (e) => e instanceof MouseEvent
};
function Ct(e, t) {
  w1(e) && (e = "100%");
  var n = C1(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function po(e) {
  return Math.min(1, Math.max(0, e));
}
function w1(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function C1(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ac(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function vo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Kn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function S1(e, t, n) {
  return {
    r: Ct(e, 255) * 255,
    g: Ct(t, 255) * 255,
    b: Ct(n, 255) * 255
  };
}
function Si(e, t, n) {
  e = Ct(e, 255), t = Ct(t, 255), n = Ct(n, 255);
  var a = Math.max(e, t, n), o = Math.min(e, t, n), l = 0, s = 0, r = (a + o) / 2;
  if (a === o)
    s = 0, l = 0;
  else {
    var i = a - o;
    switch (s = r > 0.5 ? i / (2 - a - o) : i / (a + o), a) {
      case e:
        l = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        l = (n - e) / i + 2;
        break;
      case n:
        l = (e - t) / i + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s, l: r };
}
function _l(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function k1(e, t, n) {
  var a, o, l;
  if (e = Ct(e, 360), t = Ct(t, 100), n = Ct(n, 100), t === 0)
    o = n, l = n, a = n;
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - s;
    a = _l(r, s, e + 1 / 3), o = _l(r, s, e), l = _l(r, s, e - 1 / 3);
  }
  return { r: a * 255, g: o * 255, b: l * 255 };
}
function ki(e, t, n) {
  e = Ct(e, 255), t = Ct(t, 255), n = Ct(n, 255);
  var a = Math.max(e, t, n), o = Math.min(e, t, n), l = 0, s = a, r = a - o, i = a === 0 ? 0 : r / a;
  if (a === o)
    l = 0;
  else {
    switch (a) {
      case e:
        l = (t - n) / r + (t < n ? 6 : 0);
        break;
      case t:
        l = (n - e) / r + 2;
        break;
      case n:
        l = (e - t) / r + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s: i, v: s };
}
function $1(e, t, n) {
  e = Ct(e, 360) * 6, t = Ct(t, 100), n = Ct(n, 100);
  var a = Math.floor(e), o = e - a, l = n * (1 - t), s = n * (1 - o * t), r = n * (1 - (1 - o) * t), i = a % 6, c = [n, s, l, l, r, n][i], f = [r, n, n, s, l, l][i], d = [l, l, r, n, n, s][i];
  return { r: c * 255, g: f * 255, b: d * 255 };
}
function $i(e, t, n, a) {
  var o = [
    Kn(Math.round(e).toString(16)),
    Kn(Math.round(t).toString(16)),
    Kn(Math.round(n).toString(16))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function _1(e, t, n, a, o) {
  var l = [
    Kn(Math.round(e).toString(16)),
    Kn(Math.round(t).toString(16)),
    Kn(Math.round(n).toString(16)),
    Kn(E1(a))
  ];
  return o && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function E1(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function _i(e) {
  return Rt(e) / 255;
}
function Rt(e) {
  return parseInt(e, 16);
}
function T1(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Ul = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function O1(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, a = null, o = null, l = null, s = !1, r = !1;
  return typeof e == "string" && (e = x1(e)), typeof e == "object" && (un(e.r) && un(e.g) && un(e.b) ? (t = S1(e.r, e.g, e.b), s = !0, r = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : un(e.h) && un(e.s) && un(e.v) ? (a = vo(e.s), o = vo(e.v), t = $1(e.h, a, o), s = !0, r = "hsv") : un(e.h) && un(e.s) && un(e.l) && (a = vo(e.s), l = vo(e.l), t = k1(e.h, a, l), s = !0, r = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ac(n), {
    ok: s,
    format: e.format || r,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var P1 = "[-\\+]?\\d+%?", M1 = "[-\\+]?\\d*\\.\\d+%?", En = "(?:".concat(M1, ")|(?:").concat(P1, ")"), El = "[\\s|\\(]+(".concat(En, ")[,|\\s]+(").concat(En, ")[,|\\s]+(").concat(En, ")\\s*\\)?"), Tl = "[\\s|\\(]+(".concat(En, ")[,|\\s]+(").concat(En, ")[,|\\s]+(").concat(En, ")[,|\\s]+(").concat(En, ")\\s*\\)?"), Gt = {
  CSS_UNIT: new RegExp(En),
  rgb: new RegExp("rgb" + El),
  rgba: new RegExp("rgba" + Tl),
  hsl: new RegExp("hsl" + El),
  hsla: new RegExp("hsla" + Tl),
  hsv: new RegExp("hsv" + El),
  hsva: new RegExp("hsva" + Tl),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function x1(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Ul[e])
    e = Ul[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Gt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Gt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Gt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Gt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Gt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Gt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Gt.hex8.exec(e), n ? {
    r: Rt(n[1]),
    g: Rt(n[2]),
    b: Rt(n[3]),
    a: _i(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Gt.hex6.exec(e), n ? {
    r: Rt(n[1]),
    g: Rt(n[2]),
    b: Rt(n[3]),
    format: t ? "name" : "hex"
  } : (n = Gt.hex4.exec(e), n ? {
    r: Rt(n[1] + n[1]),
    g: Rt(n[2] + n[2]),
    b: Rt(n[3] + n[3]),
    a: _i(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Gt.hex3.exec(e), n ? {
    r: Rt(n[1] + n[1]),
    g: Rt(n[2] + n[2]),
    b: Rt(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function un(e) {
  return !!Gt.CSS_UNIT.exec(String(e));
}
var A1 = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var a;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = T1(t)), this.originalInput = t;
      var o = O1(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (a = n.format) !== null && a !== void 0 ? a : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, a, o, l = t.r / 255, s = t.g / 255, r = t.b / 255;
      return l <= 0.03928 ? n = l / 12.92 : n = Math.pow((l + 0.055) / 1.055, 2.4), s <= 0.03928 ? a = s / 12.92 : a = Math.pow((s + 0.055) / 1.055, 2.4), r <= 0.03928 ? o = r / 12.92 : o = Math.pow((r + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * a + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Ac(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ki(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ki(this.r, this.g, this.b), n = Math.round(t.h * 360), a = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(a, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(a, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Si(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Si(this.r, this.g, this.b), n = Math.round(t.h * 360), a = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(a, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(a, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), $i(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), _1(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), a = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(a, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(a, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Ct(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Ct(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + $i(this.r, this.g, this.b, !1), n = 0, a = Object.entries(Ul); n < a.length; n++) {
        var o = a[n], l = o[0], s = o[1];
        if (t === s)
          return l;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var a = !1, o = this.a < 1 && this.a >= 0, l = !n && o && (t.startsWith("hex") || t === "name");
      return l ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (a = this.toRgbString()), t === "prgb" && (a = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (a = this.toHexString()), t === "hex3" && (a = this.toHexString(!0)), t === "hex4" && (a = this.toHex8String(!0)), t === "hex8" && (a = this.toHex8String()), t === "name" && (a = this.toName()), t === "hsl" && (a = this.toHslString()), t === "hsv" && (a = this.toHsvString()), a || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = po(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = po(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = po(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = po(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), a = (n.h + t) % 360;
      return n.h = a < 0 ? 360 + a : a, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var a = this.toRgb(), o = new e(t).toRgb(), l = n / 100, s = {
        r: (o.r - a.r) * l + a.r,
        g: (o.g - a.g) * l + a.g,
        b: (o.b - a.b) * l + a.b,
        a: (o.a - a.a) * l + a.a
      };
      return new e(s);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var a = this.toHsl(), o = 360 / n, l = [this];
      for (a.h = (a.h - (o * t >> 1) + 720) % 360; --t; )
        a.h = (a.h + o) % 360, l.push(new e(a));
      return l;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), a = n.h, o = n.s, l = n.v, s = [], r = 1 / t; t--; )
        s.push(new e({ h: a, s: o, v: l })), l = (l + r) % 1;
      return s;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), a = new e(t).toRgb(), o = n.a + a.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + a.r * a.a * (1 - n.a)) / o,
        g: (n.g * n.a + a.g * a.a * (1 - n.a)) / o,
        b: (n.b * n.a + a.b * a.a * (1 - n.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), a = n.h, o = [this], l = 360 / t, s = 1; s < t; s++)
        o.push(new e({ h: (a + s * l) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function Cn(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function D1(e) {
  const t = fl(), n = me("button");
  return k(() => {
    let a = {};
    const o = e.color;
    if (o) {
      const l = new A1(o), s = e.dark ? l.tint(20).toString() : Cn(l, 20);
      if (e.plain)
        a = n.cssVarBlock({
          "bg-color": e.dark ? Cn(l, 90) : l.tint(90).toString(),
          "text-color": o,
          "border-color": e.dark ? Cn(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": o,
          "hover-border-color": o,
          "active-bg-color": s,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": s
        }), t.value && (a[n.cssVarBlockName("disabled-bg-color")] = e.dark ? Cn(l, 90) : l.tint(90).toString(), a[n.cssVarBlockName("disabled-text-color")] = e.dark ? Cn(l, 50) : l.tint(50).toString(), a[n.cssVarBlockName("disabled-border-color")] = e.dark ? Cn(l, 80) : l.tint(80).toString());
      else {
        const r = e.dark ? Cn(l, 30) : l.tint(30).toString(), i = l.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (a = n.cssVarBlock({
          "bg-color": o,
          "text-color": i,
          "border-color": o,
          "hover-bg-color": r,
          "hover-text-color": i,
          "hover-border-color": r,
          "active-bg-color": s,
          "active-border-color": s
        }), t.value) {
          const c = e.dark ? Cn(l, 50) : l.tint(50).toString();
          a[n.cssVarBlockName("disabled-bg-color")] = c, a[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, a[n.cssVarBlockName("disabled-border-color")] = c;
        }
      }
    }
    return a;
  });
}
const I1 = Q({
  name: "ElButton"
}), N1 = /* @__PURE__ */ Q({
  ...I1,
  props: Yl,
  emits: y1,
  setup(e, { expose: t, emit: n }) {
    const a = e, o = D1(a), l = me("button"), { _ref: s, _size: r, _type: i, _disabled: c, _props: f, shouldAddSpace: d, handleClick: v } = h1(a, n);
    return t({
      ref: s,
      size: r,
      type: i,
      disabled: c,
      shouldAddSpace: d
    }), (m, h) => (_(), oe(rt(m.tag), Ue({
      ref_key: "_ref",
      ref: s
    }, u(f), {
      class: [
        u(l).b(),
        u(l).m(u(i)),
        u(l).m(u(r)),
        u(l).is("disabled", u(c)),
        u(l).is("loading", m.loading),
        u(l).is("plain", m.plain),
        u(l).is("round", m.round),
        u(l).is("circle", m.circle),
        u(l).is("text", m.text),
        u(l).is("link", m.link),
        u(l).is("has-bg", m.bg)
      ],
      style: u(o),
      onClick: u(v)
    }), {
      default: X(() => [
        m.loading ? (_(), L(Te, { key: 0 }, [
          m.$slots.loading ? ae(m.$slots, "loading", { key: 0 }) : (_(), oe(u(xe), {
            key: 1,
            class: A(u(l).is("loading"))
          }, {
            default: X(() => [
              (_(), oe(rt(m.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : m.icon || m.$slots.icon ? (_(), oe(u(xe), { key: 1 }, {
          default: X(() => [
            m.icon ? (_(), oe(rt(m.icon), { key: 0 })) : ae(m.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : ie("v-if", !0),
        m.$slots.default ? (_(), L("span", {
          key: 2,
          class: A({ [u(l).em("text", "expand")]: u(d) })
        }, [
          ae(m.$slots, "default")
        ], 2)) : ie("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var R1 = /* @__PURE__ */ Me(N1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const L1 = {
  size: Yl.size,
  type: Yl.type
}, F1 = Q({
  name: "ElButtonGroup"
}), B1 = /* @__PURE__ */ Q({
  ...F1,
  props: L1,
  setup(e) {
    const t = e;
    ct(xc, Rn({
      size: wt(t, "size"),
      type: wt(t, "type")
    }));
    const n = me("button");
    return (a, o) => (_(), L("div", {
      class: A(`${u(n).b("group")}`)
    }, [
      ae(a.$slots, "default")
    ], 2));
  }
});
var Dc = /* @__PURE__ */ Me(B1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const In = St(R1, {
  ButtonGroup: Dc
});
na(Dc);
var yn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ic = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(yn, function() {
    var n = 1e3, a = 6e4, o = 36e5, l = "millisecond", s = "second", r = "minute", i = "hour", c = "day", f = "week", d = "month", v = "quarter", m = "year", h = "date", p = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(U) {
      var j = ["th", "st", "nd", "rd"], W = U % 100;
      return "[" + U + (j[(W - 20) % 10] || j[W] || j[0]) + "]";
    } }, S = function(U, j, W) {
      var R = String(U);
      return !R || R.length >= j ? U : "" + Array(j + 1 - R.length).join(W) + U;
    }, y = { s: S, z: function(U) {
      var j = -U.utcOffset(), W = Math.abs(j), R = Math.floor(W / 60), B = W % 60;
      return (j <= 0 ? "+" : "-") + S(R, 2, "0") + ":" + S(B, 2, "0");
    }, m: function U(j, W) {
      if (j.date() < W.date())
        return -U(W, j);
      var R = 12 * (W.year() - j.year()) + (W.month() - j.month()), B = j.clone().add(R, d), C = W - B < 0, M = j.clone().add(R + (C ? -1 : 1), d);
      return +(-(R + (W - B) / (C ? B - M : M - B)) || 0);
    }, a: function(U) {
      return U < 0 ? Math.ceil(U) || 0 : Math.floor(U);
    }, p: function(U) {
      return { M: d, y: m, w: f, d: c, D: h, h: i, m: r, s, ms: l, Q: v }[U] || String(U || "").toLowerCase().replace(/s$/, "");
    }, u: function(U) {
      return U === void 0;
    } }, $ = "en", T = {};
    T[$] = w;
    var E = "$isDayjsObject", x = function(U) {
      return U instanceof H || !(!U || !U[E]);
    }, N = function U(j, W, R) {
      var B;
      if (!j)
        return $;
      if (typeof j == "string") {
        var C = j.toLowerCase();
        T[C] && (B = C), W && (T[C] = W, B = C);
        var M = j.split("-");
        if (!B && M.length > 1)
          return U(M[0]);
      } else {
        var z = j.name;
        T[z] = j, B = z;
      }
      return !R && B && ($ = B), B || !R && $;
    }, I = function(U, j) {
      if (x(U))
        return U.clone();
      var W = typeof j == "object" ? j : {};
      return W.date = U, W.args = arguments, new H(W);
    }, D = y;
    D.l = N, D.i = x, D.w = function(U, j) {
      return I(U, { locale: j.$L, utc: j.$u, x: j.$x, $offset: j.$offset });
    };
    var H = function() {
      function U(W) {
        this.$L = N(W.locale, null, !0), this.parse(W), this.$x = this.$x || W.x || {}, this[E] = !0;
      }
      var j = U.prototype;
      return j.parse = function(W) {
        this.$d = function(R) {
          var B = R.date, C = R.utc;
          if (B === null)
            return /* @__PURE__ */ new Date(NaN);
          if (D.u(B))
            return /* @__PURE__ */ new Date();
          if (B instanceof Date)
            return new Date(B);
          if (typeof B == "string" && !/Z$/i.test(B)) {
            var M = B.match(b);
            if (M) {
              var z = M[2] - 1 || 0, Y = (M[7] || "0").substring(0, 3);
              return C ? new Date(Date.UTC(M[1], z, M[3] || 1, M[4] || 0, M[5] || 0, M[6] || 0, Y)) : new Date(M[1], z, M[3] || 1, M[4] || 0, M[5] || 0, M[6] || 0, Y);
            }
          }
          return new Date(B);
        }(W), this.init();
      }, j.init = function() {
        var W = this.$d;
        this.$y = W.getFullYear(), this.$M = W.getMonth(), this.$D = W.getDate(), this.$W = W.getDay(), this.$H = W.getHours(), this.$m = W.getMinutes(), this.$s = W.getSeconds(), this.$ms = W.getMilliseconds();
      }, j.$utils = function() {
        return D;
      }, j.isValid = function() {
        return this.$d.toString() !== p;
      }, j.isSame = function(W, R) {
        var B = I(W);
        return this.startOf(R) <= B && B <= this.endOf(R);
      }, j.isAfter = function(W, R) {
        return I(W) < this.startOf(R);
      }, j.isBefore = function(W, R) {
        return this.endOf(R) < I(W);
      }, j.$g = function(W, R, B) {
        return D.u(W) ? this[R] : this.set(B, W);
      }, j.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, j.valueOf = function() {
        return this.$d.getTime();
      }, j.startOf = function(W, R) {
        var B = this, C = !!D.u(R) || R, M = D.p(W), z = function(De, Oe) {
          var Re = D.w(B.$u ? Date.UTC(B.$y, Oe, De) : new Date(B.$y, Oe, De), B);
          return C ? Re : Re.endOf(c);
        }, Y = function(De, Oe) {
          return D.w(B.toDate()[De].apply(B.toDate("s"), (C ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Oe)), B);
        }, ne = this.$W, le = this.$M, ve = this.$D, ge = "set" + (this.$u ? "UTC" : "");
        switch (M) {
          case m:
            return C ? z(1, 0) : z(31, 11);
          case d:
            return C ? z(1, le) : z(0, le + 1);
          case f:
            var we = this.$locale().weekStart || 0, ke = (ne < we ? ne + 7 : ne) - we;
            return z(C ? ve - ke : ve + (6 - ke), le);
          case c:
          case h:
            return Y(ge + "Hours", 0);
          case i:
            return Y(ge + "Minutes", 1);
          case r:
            return Y(ge + "Seconds", 2);
          case s:
            return Y(ge + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, j.endOf = function(W) {
        return this.startOf(W, !1);
      }, j.$set = function(W, R) {
        var B, C = D.p(W), M = "set" + (this.$u ? "UTC" : ""), z = (B = {}, B[c] = M + "Date", B[h] = M + "Date", B[d] = M + "Month", B[m] = M + "FullYear", B[i] = M + "Hours", B[r] = M + "Minutes", B[s] = M + "Seconds", B[l] = M + "Milliseconds", B)[C], Y = C === c ? this.$D + (R - this.$W) : R;
        if (C === d || C === m) {
          var ne = this.clone().set(h, 1);
          ne.$d[z](Y), ne.init(), this.$d = ne.set(h, Math.min(this.$D, ne.daysInMonth())).$d;
        } else
          z && this.$d[z](Y);
        return this.init(), this;
      }, j.set = function(W, R) {
        return this.clone().$set(W, R);
      }, j.get = function(W) {
        return this[D.p(W)]();
      }, j.add = function(W, R) {
        var B, C = this;
        W = Number(W);
        var M = D.p(R), z = function(le) {
          var ve = I(C);
          return D.w(ve.date(ve.date() + Math.round(le * W)), C);
        };
        if (M === d)
          return this.set(d, this.$M + W);
        if (M === m)
          return this.set(m, this.$y + W);
        if (M === c)
          return z(1);
        if (M === f)
          return z(7);
        var Y = (B = {}, B[r] = a, B[i] = o, B[s] = n, B)[M] || 1, ne = this.$d.getTime() + W * Y;
        return D.w(ne, this);
      }, j.subtract = function(W, R) {
        return this.add(-1 * W, R);
      }, j.format = function(W) {
        var R = this, B = this.$locale();
        if (!this.isValid())
          return B.invalidDate || p;
        var C = W || "YYYY-MM-DDTHH:mm:ssZ", M = D.z(this), z = this.$H, Y = this.$m, ne = this.$M, le = B.weekdays, ve = B.months, ge = B.meridiem, we = function(Oe, Re, Ne, Ve) {
          return Oe && (Oe[Re] || Oe(R, C)) || Ne[Re].slice(0, Ve);
        }, ke = function(Oe) {
          return D.s(z % 12 || 12, Oe, "0");
        }, De = ge || function(Oe, Re, Ne) {
          var Ve = Oe < 12 ? "AM" : "PM";
          return Ne ? Ve.toLowerCase() : Ve;
        };
        return C.replace(g, function(Oe, Re) {
          return Re || function(Ne) {
            switch (Ne) {
              case "YY":
                return String(R.$y).slice(-2);
              case "YYYY":
                return D.s(R.$y, 4, "0");
              case "M":
                return ne + 1;
              case "MM":
                return D.s(ne + 1, 2, "0");
              case "MMM":
                return we(B.monthsShort, ne, ve, 3);
              case "MMMM":
                return we(ve, ne);
              case "D":
                return R.$D;
              case "DD":
                return D.s(R.$D, 2, "0");
              case "d":
                return String(R.$W);
              case "dd":
                return we(B.weekdaysMin, R.$W, le, 2);
              case "ddd":
                return we(B.weekdaysShort, R.$W, le, 3);
              case "dddd":
                return le[R.$W];
              case "H":
                return String(z);
              case "HH":
                return D.s(z, 2, "0");
              case "h":
                return ke(1);
              case "hh":
                return ke(2);
              case "a":
                return De(z, Y, !0);
              case "A":
                return De(z, Y, !1);
              case "m":
                return String(Y);
              case "mm":
                return D.s(Y, 2, "0");
              case "s":
                return String(R.$s);
              case "ss":
                return D.s(R.$s, 2, "0");
              case "SSS":
                return D.s(R.$ms, 3, "0");
              case "Z":
                return M;
            }
            return null;
          }(Oe) || M.replace(":", "");
        });
      }, j.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, j.diff = function(W, R, B) {
        var C, M = this, z = D.p(R), Y = I(W), ne = (Y.utcOffset() - this.utcOffset()) * a, le = this - Y, ve = function() {
          return D.m(M, Y);
        };
        switch (z) {
          case m:
            C = ve() / 12;
            break;
          case d:
            C = ve();
            break;
          case v:
            C = ve() / 3;
            break;
          case f:
            C = (le - ne) / 6048e5;
            break;
          case c:
            C = (le - ne) / 864e5;
            break;
          case i:
            C = le / o;
            break;
          case r:
            C = le / a;
            break;
          case s:
            C = le / n;
            break;
          default:
            C = le;
        }
        return B ? C : D.a(C);
      }, j.daysInMonth = function() {
        return this.endOf(d).$D;
      }, j.$locale = function() {
        return T[this.$L];
      }, j.locale = function(W, R) {
        if (!W)
          return this.$L;
        var B = this.clone(), C = N(W, R, !0);
        return C && (B.$L = C), B;
      }, j.clone = function() {
        return D.w(this.$d, this);
      }, j.toDate = function() {
        return new Date(this.valueOf());
      }, j.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, j.toISOString = function() {
        return this.$d.toISOString();
      }, j.toString = function() {
        return this.$d.toUTCString();
      }, U;
    }(), Z = H.prototype;
    return I.prototype = Z, [["$ms", l], ["$s", s], ["$m", r], ["$H", i], ["$W", c], ["$M", d], ["$y", m], ["$D", h]].forEach(function(U) {
      Z[U[1]] = function(j) {
        return this.$g(j, U[0], U[1]);
      };
    }), I.extend = function(U, j) {
      return U.$i || (U(j, H, I), U.$i = !0), I;
    }, I.locale = N, I.isDayjs = x, I.unix = function(U) {
      return I(1e3 * U);
    }, I.en = T[$], I.Ls = T, I.p = {}, I;
  });
})(Ic);
var V1 = Ic.exports;
const Ee = /* @__PURE__ */ rn(V1);
var Nc = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(yn, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, a = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d\d/, l = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, r = {}, i = function(p) {
      return (p = +p) + (p > 68 ? 1900 : 2e3);
    }, c = function(p) {
      return function(b) {
        this[p] = +b;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(p) {
      (this.zone || (this.zone = {})).offset = function(b) {
        if (!b || b === "Z")
          return 0;
        var g = b.match(/([+-]|\d\d)/g), w = 60 * g[1] + (+g[2] || 0);
        return w === 0 ? 0 : g[0] === "+" ? -w : w;
      }(p);
    }], d = function(p) {
      var b = r[p];
      return b && (b.indexOf ? b : b.s.concat(b.f));
    }, v = function(p, b) {
      var g, w = r.meridiem;
      if (w) {
        for (var S = 1; S <= 24; S += 1)
          if (p.indexOf(w(S, 0, b)) > -1) {
            g = S > 12;
            break;
          }
      } else
        g = p === (b ? "pm" : "PM");
      return g;
    }, m = { A: [s, function(p) {
      this.afternoon = v(p, !1);
    }], a: [s, function(p) {
      this.afternoon = v(p, !0);
    }], S: [/\d/, function(p) {
      this.milliseconds = 100 * +p;
    }], SS: [o, function(p) {
      this.milliseconds = 10 * +p;
    }], SSS: [/\d{3}/, function(p) {
      this.milliseconds = +p;
    }], s: [l, c("seconds")], ss: [l, c("seconds")], m: [l, c("minutes")], mm: [l, c("minutes")], H: [l, c("hours")], h: [l, c("hours")], HH: [l, c("hours")], hh: [l, c("hours")], D: [l, c("day")], DD: [o, c("day")], Do: [s, function(p) {
      var b = r.ordinal, g = p.match(/\d+/);
      if (this.day = g[0], b)
        for (var w = 1; w <= 31; w += 1)
          b(w).replace(/\[|\]/g, "") === p && (this.day = w);
    }], M: [l, c("month")], MM: [o, c("month")], MMM: [s, function(p) {
      var b = d("months"), g = (d("monthsShort") || b.map(function(w) {
        return w.slice(0, 3);
      })).indexOf(p) + 1;
      if (g < 1)
        throw new Error();
      this.month = g % 12 || g;
    }], MMMM: [s, function(p) {
      var b = d("months").indexOf(p) + 1;
      if (b < 1)
        throw new Error();
      this.month = b % 12 || b;
    }], Y: [/[+-]?\d+/, c("year")], YY: [o, function(p) {
      this.year = i(p);
    }], YYYY: [/\d{4}/, c("year")], Z: f, ZZ: f };
    function h(p) {
      var b, g;
      b = p, g = r && r.formats;
      for (var w = (p = b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(N, I, D) {
        var H = D && D.toUpperCase();
        return I || g[D] || n[D] || g[H].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(Z, U, j) {
          return U || j.slice(1);
        });
      })).match(a), S = w.length, y = 0; y < S; y += 1) {
        var $ = w[y], T = m[$], E = T && T[0], x = T && T[1];
        w[y] = x ? { regex: E, parser: x } : $.replace(/^\[|\]$/g, "");
      }
      return function(N) {
        for (var I = {}, D = 0, H = 0; D < S; D += 1) {
          var Z = w[D];
          if (typeof Z == "string")
            H += Z.length;
          else {
            var U = Z.regex, j = Z.parser, W = N.slice(H), R = U.exec(W)[0];
            j.call(I, R), N = N.replace(R, "");
          }
        }
        return function(B) {
          var C = B.afternoon;
          if (C !== void 0) {
            var M = B.hours;
            C ? M < 12 && (B.hours += 12) : M === 12 && (B.hours = 0), delete B.afternoon;
          }
        }(I), I;
      };
    }
    return function(p, b, g) {
      g.p.customParseFormat = !0, p && p.parseTwoDigitYear && (i = p.parseTwoDigitYear);
      var w = b.prototype, S = w.parse;
      w.parse = function(y) {
        var $ = y.date, T = y.utc, E = y.args;
        this.$u = T;
        var x = E[1];
        if (typeof x == "string") {
          var N = E[2] === !0, I = E[3] === !0, D = N || I, H = E[2];
          I && (H = E[2]), r = this.$locale(), !N && H && (r = g.Ls[H]), this.$d = function(W, R, B) {
            try {
              if (["x", "X"].indexOf(R) > -1)
                return new Date((R === "X" ? 1e3 : 1) * W);
              var C = h(R)(W), M = C.year, z = C.month, Y = C.day, ne = C.hours, le = C.minutes, ve = C.seconds, ge = C.milliseconds, we = C.zone, ke = /* @__PURE__ */ new Date(), De = Y || (M || z ? 1 : ke.getDate()), Oe = M || ke.getFullYear(), Re = 0;
              M && !z || (Re = z > 0 ? z - 1 : ke.getMonth());
              var Ne = ne || 0, Ve = le || 0, Xe = ve || 0, Je = ge || 0;
              return we ? new Date(Date.UTC(Oe, Re, De, Ne, Ve, Xe, Je + 60 * we.offset * 1e3)) : B ? new Date(Date.UTC(Oe, Re, De, Ne, Ve, Xe, Je)) : new Date(Oe, Re, De, Ne, Ve, Xe, Je);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }($, x, T), this.init(), H && H !== !0 && (this.$L = this.locale(H).$L), D && $ != this.format(x) && (this.$d = /* @__PURE__ */ new Date("")), r = {};
        } else if (x instanceof Array)
          for (var Z = x.length, U = 1; U <= Z; U += 1) {
            E[1] = x[U - 1];
            var j = g.apply(this, E);
            if (j.isValid()) {
              this.$d = j.$d, this.$L = j.$L, this.init();
              break;
            }
            U === Z && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          S.call(this, y);
      };
    };
  });
})(Nc);
var z1 = Nc.exports;
const H1 = /* @__PURE__ */ rn(z1), Ei = ["hours", "minutes", "seconds"], Ti = "HH:mm:ss", ia = "YYYY-MM-DD", K1 = {
  date: ia,
  dates: ia,
  week: "gggg[w]ww",
  year: "YYYY",
  month: "YYYY-MM",
  datetime: `${ia} ${Ti}`,
  monthrange: "YYYY-MM",
  daterange: ia,
  datetimerange: `${ia} ${Ti}`
}, Ol = (e, t) => [
  e > 0 ? e - 1 : void 0,
  e,
  e < t ? e + 1 : void 0
], Rc = (e) => Array.from(Array.from({ length: e }).keys()), Lc = (e) => e.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim(), Fc = (e) => e.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim(), Oi = function(e, t) {
  const n = hs(e), a = hs(t);
  return n && a ? e.getTime() === t.getTime() : !n && !a ? e === t : !1;
}, Pi = function(e, t) {
  const n = ze(e), a = ze(t);
  return n && a ? e.length !== t.length ? !1 : e.every((o, l) => Oi(o, t[l])) : !n && !a ? Oi(e, t) : !1;
}, Mi = function(e, t, n) {
  const a = Lu(t) || t === "x" ? Ee(e).locale(n) : Ee(e, t).locale(n);
  return a.isValid() ? a : void 0;
}, xi = function(e, t, n) {
  return Lu(t) ? e : t === "x" ? +e : Ee(e).locale(n).format(t);
}, Pl = (e, t) => {
  var n;
  const a = [], o = t == null ? void 0 : t();
  for (let l = 0; l < e; l++)
    a.push((n = o == null ? void 0 : o.includes(l)) != null ? n : !1);
  return a;
}, Bc = _e({
  disabledHours: {
    type: ce(Function)
  },
  disabledMinutes: {
    type: ce(Function)
  },
  disabledSeconds: {
    type: ce(Function)
  }
}), W1 = _e({
  visible: Boolean,
  actualVisible: {
    type: Boolean,
    default: void 0
  },
  format: {
    type: String,
    default: ""
  }
}), Vc = _e({
  id: {
    type: ce([Array, String])
  },
  name: {
    type: ce([Array, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  format: String,
  valueFormat: String,
  dateFormat: String,
  timeFormat: String,
  type: {
    type: String,
    default: ""
  },
  clearable: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: ce([String, Object]),
    default: sl
  },
  editable: {
    type: Boolean,
    default: !0
  },
  prefixIcon: {
    type: ce([String, Object]),
    default: ""
  },
  size: aa,
  readonly: Boolean,
  disabled: Boolean,
  placeholder: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: ce(Object),
    default: () => ({})
  },
  modelValue: {
    type: ce([Date, Array, String, Number]),
    default: ""
  },
  rangeSeparator: {
    type: String,
    default: "-"
  },
  startPlaceholder: String,
  endPlaceholder: String,
  defaultValue: {
    type: ce([Date, Array])
  },
  defaultTime: {
    type: ce([Date, Array])
  },
  isRange: Boolean,
  ...Bc,
  disabledDate: {
    type: Function
  },
  cellClassName: {
    type: Function
  },
  shortcuts: {
    type: Array,
    default: () => []
  },
  arrowControl: Boolean,
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: ce([String, Number]),
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  unlinkPanels: Boolean
}), j1 = ["id", "name", "placeholder", "value", "disabled", "readonly"], Y1 = ["id", "name", "placeholder", "value", "disabled", "readonly"], U1 = Q({
  name: "Picker"
}), q1 = /* @__PURE__ */ Q({
  ...U1,
  props: Vc,
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "calendar-change",
    "panel-change",
    "visible-change",
    "keydown"
  ],
  setup(e, { expose: t, emit: n }) {
    const a = e, o = Zo(), { lang: l } = at(), s = me("date"), r = me("input"), i = me("range"), { form: c, formItem: f } = oa(), d = Se("ElPopperOptions", {}), v = O(), m = O(), h = O(!1), p = O(!1), b = O(null);
    let g = !1, w = !1;
    const S = k(() => [
      s.b("editor"),
      s.bm("editor", a.type),
      r.e("wrapper"),
      s.is("disabled", Y.value),
      s.is("active", h.value),
      i.b("editor"),
      dt ? i.bm("editor", dt.value) : "",
      o.class
    ]), y = k(() => [
      r.e("icon"),
      i.e("close-icon"),
      De.value ? "" : i.e("close-icon--hidden")
    ]);
    ue(h, (P) => {
      P ? $e(() => {
        P && (b.value = a.modelValue);
      }) : (Ce.value = null, $e(() => {
        $(a.modelValue);
      }));
    });
    const $ = (P, se) => {
      (se || !Pi(P, b.value)) && (n("change", P), a.validateEvent && (f == null || f.validate("change").catch((ye) => mt(ye))));
    }, T = (P) => {
      if (!Pi(a.modelValue, P)) {
        let se;
        ze(P) ? se = P.map((ye) => xi(ye, a.valueFormat, l.value)) : P && (se = xi(P, a.valueFormat, l.value)), n("update:modelValue", P && se, l.value);
      }
    }, E = (P) => {
      n("keydown", P);
    }, x = k(() => {
      if (m.value) {
        const P = Ke.value ? m.value : m.value.$el;
        return Array.from(P.querySelectorAll("input"));
      }
      return [];
    }), N = (P, se, ye) => {
      const Ie = x.value;
      Ie.length && (!ye || ye === "min" ? (Ie[0].setSelectionRange(P, se), Ie[0].focus()) : ye === "max" && (Ie[1].setSelectionRange(P, se), Ie[1].focus()));
    }, I = () => {
      B(!0, !0), $e(() => {
        w = !1;
      });
    }, D = (P = "", se = !1) => {
      se || (w = !0), h.value = se;
      let ye;
      ze(P) ? ye = P.map((Ie) => Ie.toDate()) : ye = P && P.toDate(), Ce.value = null, T(ye);
    }, H = () => {
      p.value = !0;
    }, Z = () => {
      n("visible-change", !0);
    }, U = (P) => {
      (P == null ? void 0 : P.key) === We.esc && B(!0, !0);
    }, j = () => {
      p.value = !1, h.value = !1, w = !1, n("visible-change", !1);
    }, W = () => {
      h.value = !0;
    }, R = () => {
      h.value = !1;
    }, B = (P = !0, se = !1) => {
      w = se;
      const [ye, Ie] = u(x);
      let bt = ye;
      !P && Ke.value && (bt = Ie), bt && bt.focus();
    }, C = (P) => {
      a.readonly || Y.value || h.value || w || (h.value = !0, n("focus", P));
    };
    let M;
    const z = (P) => {
      const se = async () => {
        setTimeout(() => {
          var ye;
          M === se && (!((ye = v.value) != null && ye.isFocusInsideContent() && !g) && x.value.filter((Ie) => Ie.contains(document.activeElement)).length === 0 && (it(), h.value = !1, n("blur", P), a.validateEvent && (f == null || f.validate("blur").catch((Ie) => mt(Ie)))), g = !1);
        }, 0);
      };
      M = se, se();
    }, Y = k(() => a.disabled || (c == null ? void 0 : c.disabled)), ne = k(() => {
      let P;
      if (Re.value ? V.value.getDefaultValue && (P = V.value.getDefaultValue()) : ze(a.modelValue) ? P = a.modelValue.map((se) => Mi(se, a.valueFormat, l.value)) : P = Mi(a.modelValue, a.valueFormat, l.value), V.value.getRangeAvailableTime) {
        const se = V.value.getRangeAvailableTime(P);
        Ua(se, P) || (P = se, T(ze(P) ? P.map((ye) => ye.toDate()) : P.toDate()));
      }
      return ze(P) && P.some((se) => !se) && (P = []), P;
    }), le = k(() => {
      if (!V.value.panelReady)
        return "";
      const P = ft(ne.value);
      return ze(Ce.value) ? [
        Ce.value[0] || P && P[0] || "",
        Ce.value[1] || P && P[1] || ""
      ] : Ce.value !== null ? Ce.value : !ge.value && Re.value || !h.value && Re.value ? "" : P ? we.value ? P.join(", ") : P : "";
    }), ve = k(() => a.type.includes("time")), ge = k(() => a.type.startsWith("time")), we = k(() => a.type === "dates"), ke = k(() => a.prefixIcon || (ve.value ? Tg : bg)), De = O(!1), Oe = (P) => {
      a.readonly || Y.value || De.value && (P.stopPropagation(), I(), T(null), $(null, !0), De.value = !1, h.value = !1, V.value.handleClear && V.value.handleClear());
    }, Re = k(() => {
      const { modelValue: P } = a;
      return !P || ze(P) && !P.filter(Boolean).length;
    }), Ne = async (P) => {
      var se;
      a.readonly || Y.value || (((se = P.target) == null ? void 0 : se.tagName) !== "INPUT" || x.value.includes(document.activeElement)) && (h.value = !0);
    }, Ve = () => {
      a.readonly || Y.value || !Re.value && a.clearable && (De.value = !0);
    }, Xe = () => {
      De.value = !1;
    }, Je = (P) => {
      var se;
      a.readonly || Y.value || (((se = P.touches[0].target) == null ? void 0 : se.tagName) !== "INPUT" || x.value.includes(document.activeElement)) && (h.value = !0);
    }, Ke = k(() => a.type.includes("range")), dt = Dn(), st = k(() => {
      var P, se;
      return (se = (P = u(v)) == null ? void 0 : P.popperRef) == null ? void 0 : se.contentRef;
    }), et = k(() => {
      var P;
      return u(Ke) ? u(m) : (P = u(m)) == null ? void 0 : P.$el;
    });
    lu(et, (P) => {
      const se = u(st), ye = u(et);
      se && (P.target === se || P.composedPath().includes(se)) || P.target === ye || P.composedPath().includes(ye) || (h.value = !1);
    });
    const Ce = O(null), it = () => {
      if (Ce.value) {
        const P = ot(le.value);
        P && lt(P) && (T(ze(P) ? P.map((se) => se.toDate()) : P.toDate()), Ce.value = null);
      }
      Ce.value === "" && (T(null), $(null), Ce.value = null);
    }, ot = (P) => P ? V.value.parseUserInput(P) : null, ft = (P) => P ? V.value.formatToString(P) : null, lt = (P) => V.value.isValidValue(P), re = async (P) => {
      if (a.readonly || Y.value)
        return;
      const { code: se } = P;
      if (E(P), se === We.esc) {
        h.value === !0 && (h.value = !1, P.preventDefault(), P.stopPropagation());
        return;
      }
      if (se === We.down && (V.value.handleFocusPicker && (P.preventDefault(), P.stopPropagation()), h.value === !1 && (h.value = !0, await $e()), V.value.handleFocusPicker)) {
        V.value.handleFocusPicker();
        return;
      }
      if (se === We.tab) {
        g = !0;
        return;
      }
      if (se === We.enter || se === We.numpadEnter) {
        (Ce.value === null || Ce.value === "" || lt(ot(le.value))) && (it(), h.value = !1), P.stopPropagation();
        return;
      }
      if (Ce.value) {
        P.stopPropagation();
        return;
      }
      V.value.handleKeydownInput && V.value.handleKeydownInput(P);
    }, be = (P) => {
      Ce.value = P, h.value || (h.value = !0);
    }, Be = (P) => {
      const se = P.target;
      Ce.value ? Ce.value = [se.value, Ce.value[1]] : Ce.value = [se.value, null];
    }, nt = (P) => {
      const se = P.target;
      Ce.value ? Ce.value = [Ce.value[0], se.value] : Ce.value = [null, se.value];
    }, ht = () => {
      var P;
      const se = Ce.value, ye = ot(se && se[0]), Ie = u(ne);
      if (ye && ye.isValid()) {
        Ce.value = [
          ft(ye),
          ((P = le.value) == null ? void 0 : P[1]) || null
        ];
        const bt = [ye, Ie && (Ie[1] || null)];
        lt(bt) && (T(bt), Ce.value = null);
      }
    }, fe = () => {
      var P;
      const se = u(Ce), ye = ot(se && se[1]), Ie = u(ne);
      if (ye && ye.isValid()) {
        Ce.value = [
          ((P = u(le)) == null ? void 0 : P[0]) || null,
          ft(ye)
        ];
        const bt = [Ie && Ie[0], ye];
        lt(bt) && (T(bt), Ce.value = null);
      }
    }, V = O({}), J = (P) => {
      V.value[P[0]] = P[1], V.value.panelReady = !0;
    }, G = (P) => {
      n("calendar-change", P);
    }, te = (P, se, ye) => {
      n("panel-change", P, se, ye);
    };
    return ct("EP_PICKER_BASE", {
      props: a
    }), t({
      focus: B,
      handleFocusInput: C,
      handleBlurInput: z,
      handleOpen: W,
      handleClose: R,
      onPick: D
    }), (P, se) => (_(), oe(u(oo), Ue({
      ref_key: "refPopper",
      ref: v,
      visible: h.value,
      effect: "light",
      pure: "",
      trigger: "click"
    }, P.$attrs, {
      role: "dialog",
      teleported: "",
      transition: `${u(s).namespace.value}-zoom-in-top`,
      "popper-class": [`${u(s).namespace.value}-picker__popper`, P.popperClass],
      "popper-options": u(d),
      "fallback-placements": ["bottom", "top", "right", "left"],
      "gpu-acceleration": !1,
      "stop-popper-mouse-event": !1,
      "hide-after": 0,
      persistent: "",
      onBeforeShow: H,
      onShow: Z,
      onHide: j
    }), {
      default: X(() => [
        u(Ke) ? (_(), L("div", {
          key: 1,
          ref_key: "inputRef",
          ref: m,
          class: A(u(S)),
          style: Fe(P.$attrs.style),
          onClick: C,
          onMouseenter: Ve,
          onMouseleave: Xe,
          onTouchstart: Je,
          onKeydown: re
        }, [
          u(ke) ? (_(), oe(u(xe), {
            key: 0,
            class: A([u(r).e("icon"), u(i).e("icon")]),
            onMousedown: Ze(Ne, ["prevent"]),
            onTouchstart: Je
          }, {
            default: X(() => [
              (_(), oe(rt(u(ke))))
            ]),
            _: 1
          }, 8, ["class", "onMousedown"])) : ie("v-if", !0),
          K("input", {
            id: P.id && P.id[0],
            autocomplete: "off",
            name: P.name && P.name[0],
            placeholder: P.startPlaceholder,
            value: u(le) && u(le)[0],
            disabled: u(Y),
            readonly: !P.editable || P.readonly,
            class: A(u(i).b("input")),
            onMousedown: Ne,
            onInput: Be,
            onChange: ht,
            onFocus: C,
            onBlur: z
          }, null, 42, j1),
          ae(P.$slots, "range-separator", {}, () => [
            K("span", {
              class: A(u(i).b("separator"))
            }, pe(P.rangeSeparator), 3)
          ]),
          K("input", {
            id: P.id && P.id[1],
            autocomplete: "off",
            name: P.name && P.name[1],
            placeholder: P.endPlaceholder,
            value: u(le) && u(le)[1],
            disabled: u(Y),
            readonly: !P.editable || P.readonly,
            class: A(u(i).b("input")),
            onMousedown: Ne,
            onFocus: C,
            onBlur: z,
            onInput: nt,
            onChange: fe
          }, null, 42, Y1),
          P.clearIcon ? (_(), oe(u(xe), {
            key: 1,
            class: A(u(y)),
            onClick: Oe
          }, {
            default: X(() => [
              (_(), oe(rt(P.clearIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : ie("v-if", !0)
        ], 38)) : (_(), oe(u(tn), {
          key: 0,
          id: P.id,
          ref_key: "inputRef",
          ref: m,
          "container-role": "combobox",
          "model-value": u(le),
          name: P.name,
          size: u(dt),
          disabled: u(Y),
          placeholder: P.placeholder,
          class: A([u(s).b("editor"), u(s).bm("editor", P.type), P.$attrs.class]),
          style: Fe(P.$attrs.style),
          readonly: !P.editable || P.readonly || u(we) || P.type === "week",
          label: P.label,
          tabindex: P.tabindex,
          "validate-event": !1,
          onInput: be,
          onFocus: C,
          onBlur: z,
          onKeydown: re,
          onChange: it,
          onMousedown: Ne,
          onMouseenter: Ve,
          onMouseleave: Xe,
          onTouchstart: Je,
          onClick: se[0] || (se[0] = Ze(() => {
          }, ["stop"]))
        }, {
          prefix: X(() => [
            u(ke) ? (_(), oe(u(xe), {
              key: 0,
              class: A(u(r).e("icon")),
              onMousedown: Ze(Ne, ["prevent"]),
              onTouchstart: Je
            }, {
              default: X(() => [
                (_(), oe(rt(u(ke))))
              ]),
              _: 1
            }, 8, ["class", "onMousedown"])) : ie("v-if", !0)
          ]),
          suffix: X(() => [
            De.value && P.clearIcon ? (_(), oe(u(xe), {
              key: 0,
              class: A(`${u(r).e("icon")} clear-icon`),
              onClick: Ze(Oe, ["stop"])
            }, {
              default: X(() => [
                (_(), oe(rt(P.clearIcon)))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ie("v-if", !0)
          ]),
          _: 1
        }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "label", "tabindex", "onKeydown"]))
      ]),
      content: X(() => [
        ae(P.$slots, "default", {
          visible: h.value,
          actualVisible: p.value,
          parsedValue: u(ne),
          format: P.format,
          dateFormat: P.dateFormat,
          timeFormat: P.timeFormat,
          unlinkPanels: P.unlinkPanels,
          type: P.type,
          defaultValue: P.defaultValue,
          onPick: D,
          onSelectRange: N,
          onSetPickerOption: J,
          onCalendarChange: G,
          onPanelChange: te,
          onKeydown: U,
          onMousedown: se[1] || (se[1] = Ze(() => {
          }, ["stop"]))
        })
      ]),
      _: 3
    }, 16, ["visible", "transition", "popper-class", "popper-options"]));
  }
});
var G1 = /* @__PURE__ */ Me(q1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);
const X1 = _e({
  ...W1,
  datetimeRole: String,
  parsedValue: {
    type: ce(Object)
  }
}), Z1 = ({
  getAvailableHours: e,
  getAvailableMinutes: t,
  getAvailableSeconds: n
}) => {
  const a = (s, r, i, c) => {
    const f = {
      hour: e,
      minute: t,
      second: n
    };
    let d = s;
    return ["hour", "minute", "second"].forEach((v) => {
      if (f[v]) {
        let m;
        const h = f[v];
        switch (v) {
          case "minute": {
            m = h(d.hour(), r, c);
            break;
          }
          case "second": {
            m = h(d.hour(), d.minute(), r, c);
            break;
          }
          default: {
            m = h(r, c);
            break;
          }
        }
        if (m != null && m.length && !m.includes(d[v]())) {
          const p = i ? 0 : m.length - 1;
          d = d[v](m[p]);
        }
      }
    }), d;
  }, o = {};
  return {
    timePickerOptions: o,
    getAvailableTime: a,
    onSetOption: ([s, r]) => {
      o[s] = r;
    }
  };
}, Ml = (e) => {
  const t = (a, o) => a || o, n = (a) => a !== !0;
  return e.map(t).filter(n);
}, zc = (e, t, n) => ({
  getHoursList: (s, r) => Pl(24, e && (() => e == null ? void 0 : e(s, r))),
  getMinutesList: (s, r, i) => Pl(60, t && (() => t == null ? void 0 : t(s, r, i))),
  getSecondsList: (s, r, i, c) => Pl(60, n && (() => n == null ? void 0 : n(s, r, i, c)))
}), Q1 = (e, t, n) => {
  const { getHoursList: a, getMinutesList: o, getSecondsList: l } = zc(e, t, n);
  return {
    getAvailableHours: (c, f) => Ml(a(c, f)),
    getAvailableMinutes: (c, f, d) => Ml(o(c, f, d)),
    getAvailableSeconds: (c, f, d, v) => Ml(l(c, f, d, v))
  };
}, J1 = (e) => {
  const t = O(e.parsedValue);
  return ue(() => e.visible, (n) => {
    n || (t.value = e.parsedValue);
  }), t;
}, kn = /* @__PURE__ */ new Map();
let Ai;
qe && (document.addEventListener("mousedown", (e) => Ai = e), document.addEventListener("mouseup", (e) => {
  for (const t of kn.values())
    for (const { documentHandler: n } of t)
      n(e, Ai);
}));
function Di(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : fa(t.arg) && n.push(t.arg), function(a, o) {
    const l = t.instance.popperRef, s = a.target, r = o == null ? void 0 : o.target, i = !t || !t.instance, c = !s || !r, f = e.contains(s) || e.contains(r), d = e === s, v = n.length && n.some((h) => h == null ? void 0 : h.contains(s)) || n.length && n.includes(r), m = l && (l.contains(s) || l.contains(r));
    i || c || f || d || v || m || t.value(a, o);
  };
}
const Qa = {
  beforeMount(e, t) {
    kn.has(e) || kn.set(e, []), kn.get(e).push({
      documentHandler: Di(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    kn.has(e) || kn.set(e, []);
    const n = kn.get(e), a = n.findIndex((l) => l.bindingFn === t.oldValue), o = {
      documentHandler: Di(e, t),
      bindingFn: t.value
    };
    a >= 0 ? n.splice(a, 1, o) : n.push(o);
  },
  unmounted(e) {
    kn.delete(e);
  }
}, ew = 100, tw = 600, Ii = {
  beforeMount(e, t) {
    const n = t.value, { interval: a = ew, delay: o = tw } = pt(n) ? {} : n;
    let l, s;
    const r = () => pt(n) ? n() : n.handler(), i = () => {
      s && (clearTimeout(s), s = void 0), l && (clearInterval(l), l = void 0);
    };
    e.addEventListener("mousedown", (c) => {
      c.button === 0 && (i(), r(), document.addEventListener("mouseup", () => i(), {
        once: !0
      }), s = setTimeout(() => {
        l = setInterval(() => {
          r();
        }, a);
      }, o));
    });
  }
};
var Ni = !1, Hn, ql, Gl, So, ko, Hc, $o, Xl, Zl, Ql, Kc, Jl, er, Wc, jc;
function Pt() {
  if (!Ni) {
    Ni = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (Jl = /\b(iPhone|iP[ao]d)/.exec(e), er = /\b(iP[ao]d)/.exec(e), Ql = /Android/i.exec(e), Wc = /FBAN\/\w+;/i.exec(e), jc = /Mobile/i.exec(e), Kc = !!/Win64/.exec(e), t) {
      Hn = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, Hn && document && document.documentMode && (Hn = document.documentMode);
      var a = /(?:Trident\/(\d+.\d+))/.exec(e);
      Hc = a ? parseFloat(a[1]) + 4 : Hn, ql = t[2] ? parseFloat(t[2]) : NaN, Gl = t[3] ? parseFloat(t[3]) : NaN, So = t[4] ? parseFloat(t[4]) : NaN, So ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), ko = t && t[1] ? parseFloat(t[1]) : NaN) : ko = NaN;
    } else
      Hn = ql = Gl = ko = So = NaN;
    if (n) {
      if (n[1]) {
        var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        $o = o ? parseFloat(o[1].replace("_", ".")) : !0;
      } else
        $o = !1;
      Xl = !!n[2], Zl = !!n[3];
    } else
      $o = Xl = Zl = !1;
  }
}
var tr = { ie: function() {
  return Pt() || Hn;
}, ieCompatibilityMode: function() {
  return Pt() || Hc > Hn;
}, ie64: function() {
  return tr.ie() && Kc;
}, firefox: function() {
  return Pt() || ql;
}, opera: function() {
  return Pt() || Gl;
}, webkit: function() {
  return Pt() || So;
}, safari: function() {
  return tr.webkit();
}, chrome: function() {
  return Pt() || ko;
}, windows: function() {
  return Pt() || Xl;
}, osx: function() {
  return Pt() || $o;
}, linux: function() {
  return Pt() || Zl;
}, iphone: function() {
  return Pt() || Jl;
}, mobile: function() {
  return Pt() || Jl || er || Ql || jc;
}, nativeApp: function() {
  return Pt() || Wc;
}, android: function() {
  return Pt() || Ql;
}, ipad: function() {
  return Pt() || er;
} }, nw = tr, mo = !!(typeof window < "u" && window.document && window.document.createElement), aw = { canUseDOM: mo, canUseWorkers: typeof Worker < "u", canUseEventListeners: mo && !!(window.addEventListener || window.attachEvent), canUseViewport: mo && !!window.screen, isInWorker: !mo }, Yc = aw, Uc;
Yc.canUseDOM && (Uc = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function ow(e, t) {
  if (!Yc.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, a = n in document;
  if (!a) {
    var o = document.createElement("div");
    o.setAttribute(n, "return;"), a = typeof o[n] == "function";
  }
  return !a && Uc && e === "wheel" && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a;
}
var lw = ow, Ri = 10, Li = 40, Fi = 800;
function qc(e) {
  var t = 0, n = 0, a = 0, o = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), a = t * Ri, o = n * Ri, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (a = e.deltaX), (a || o) && e.deltaMode && (e.deltaMode == 1 ? (a *= Li, o *= Li) : (a *= Fi, o *= Fi)), a && !t && (t = a < 1 ? -1 : 1), o && !n && (n = o < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: a, pixelY: o };
}
qc.getEventType = function() {
  return nw.firefox() ? "DOMMouseScroll" : lw("wheel") ? "wheel" : "mousewheel";
};
var rw = qc;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
const sw = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(a) {
      const o = rw(a);
      t && Reflect.apply(t, this, [a, o]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, iw = {
  beforeMount(e, t) {
    sw(e, t.value);
  }
}, uw = _e({
  role: {
    type: String,
    required: !0
  },
  spinnerDate: {
    type: ce(Object),
    required: !0
  },
  showSeconds: {
    type: Boolean,
    default: !0
  },
  arrowControl: Boolean,
  amPmMode: {
    type: ce(String),
    default: ""
  },
  ...Bc
}), cw = ["onClick"], dw = ["onMouseenter"], fw = /* @__PURE__ */ Q({
  __name: "basic-time-spinner",
  props: uw,
  emits: ["change", "select-range", "set-option"],
  setup(e, { emit: t }) {
    const n = e, a = me("time"), { getHoursList: o, getMinutesList: l, getSecondsList: s } = zc(n.disabledHours, n.disabledMinutes, n.disabledSeconds);
    let r = !1;
    const i = O(), c = O(), f = O(), d = O(), v = {
      hours: c,
      minutes: f,
      seconds: d
    }, m = k(() => n.showSeconds ? Ei : Ei.slice(0, 2)), h = k(() => {
      const { spinnerDate: C } = n, M = C.hour(), z = C.minute(), Y = C.second();
      return { hours: M, minutes: z, seconds: Y };
    }), p = k(() => {
      const { hours: C, minutes: M } = u(h);
      return {
        hours: o(n.role),
        minutes: l(C, n.role),
        seconds: s(C, M, n.role)
      };
    }), b = k(() => {
      const { hours: C, minutes: M, seconds: z } = u(h);
      return {
        hours: Ol(C, 23),
        minutes: Ol(M, 59),
        seconds: Ol(z, 59)
      };
    }), g = Zn((C) => {
      r = !1, y(C);
    }, 200), w = (C) => {
      if (!!!n.amPmMode)
        return "";
      const z = n.amPmMode === "A";
      let Y = C < 12 ? " am" : " pm";
      return z && (Y = Y.toUpperCase()), Y;
    }, S = (C) => {
      let M;
      switch (C) {
        case "hours":
          M = [0, 2];
          break;
        case "minutes":
          M = [3, 5];
          break;
        case "seconds":
          M = [6, 8];
          break;
      }
      const [z, Y] = M;
      t("select-range", z, Y), i.value = C;
    }, y = (C) => {
      E(C, u(h)[C]);
    }, $ = () => {
      y("hours"), y("minutes"), y("seconds");
    }, T = (C) => C.querySelector(`.${a.namespace.value}-scrollbar__wrap`), E = (C, M) => {
      if (n.arrowControl)
        return;
      const z = u(v[C]);
      z && z.$el && (T(z.$el).scrollTop = Math.max(0, M * x(C)));
    }, x = (C) => {
      const M = u(v[C]), z = M == null ? void 0 : M.$el.querySelector("li");
      return z && Number.parseFloat(Vu(z, "height")) || 0;
    }, N = () => {
      D(1);
    }, I = () => {
      D(-1);
    }, D = (C) => {
      i.value || S("hours");
      const M = i.value, z = u(h)[M], Y = i.value === "hours" ? 24 : 60, ne = H(M, z, C, Y);
      Z(M, ne), E(M, ne), $e(() => S(M));
    }, H = (C, M, z, Y) => {
      let ne = (M + z + Y) % Y;
      const le = u(p)[C];
      for (; le[ne] && ne !== M; )
        ne = (ne + z + Y) % Y;
      return ne;
    }, Z = (C, M) => {
      if (u(p)[C][M])
        return;
      const { hours: ne, minutes: le, seconds: ve } = u(h);
      let ge;
      switch (C) {
        case "hours":
          ge = n.spinnerDate.hour(M).minute(le).second(ve);
          break;
        case "minutes":
          ge = n.spinnerDate.hour(ne).minute(M).second(ve);
          break;
        case "seconds":
          ge = n.spinnerDate.hour(ne).minute(le).second(M);
          break;
      }
      t("change", ge);
    }, U = (C, { value: M, disabled: z }) => {
      z || (Z(C, M), S(C), E(C, M));
    }, j = (C) => {
      r = !0, g(C);
      const M = Math.min(Math.round((T(u(v[C]).$el).scrollTop - (W(C) * 0.5 - 10) / x(C) + 3) / x(C)), C === "hours" ? 23 : 59);
      Z(C, M);
    }, W = (C) => u(v[C]).$el.offsetHeight, R = () => {
      const C = (M) => {
        const z = u(v[M]);
        z && z.$el && (T(z.$el).onscroll = () => {
          j(M);
        });
      };
      C("hours"), C("minutes"), C("seconds");
    };
    Ge(() => {
      $e(() => {
        !n.arrowControl && R(), $(), n.role === "start" && S("hours");
      });
    });
    const B = (C, M) => {
      v[M].value = C;
    };
    return t("set-option", [`${n.role}_scrollDown`, D]), t("set-option", [`${n.role}_emitSelectRange`, S]), ue(() => n.spinnerDate, () => {
      r || $();
    }), (C, M) => (_(), L("div", {
      class: A([u(a).b("spinner"), { "has-seconds": C.showSeconds }])
    }, [
      C.arrowControl ? ie("v-if", !0) : (_(!0), L(Te, { key: 0 }, He(u(m), (z) => (_(), oe(u(la), {
        key: z,
        ref_for: !0,
        ref: (Y) => B(Y, z),
        class: A(u(a).be("spinner", "wrapper")),
        "wrap-style": "max-height: inherit;",
        "view-class": u(a).be("spinner", "list"),
        noresize: "",
        tag: "ul",
        onMouseenter: (Y) => S(z),
        onMousemove: (Y) => y(z)
      }, {
        default: X(() => [
          (_(!0), L(Te, null, He(u(p)[z], (Y, ne) => (_(), L("li", {
            key: ne,
            class: A([
              u(a).be("spinner", "item"),
              u(a).is("active", ne === u(h)[z]),
              u(a).is("disabled", Y)
            ]),
            onClick: (le) => U(z, { value: ne, disabled: Y })
          }, [
            z === "hours" ? (_(), L(Te, { key: 0 }, [
              Qe(pe(("0" + (C.amPmMode ? ne % 12 || 12 : ne)).slice(-2)) + pe(w(ne)), 1)
            ], 64)) : (_(), L(Te, { key: 1 }, [
              Qe(pe(("0" + ne).slice(-2)), 1)
            ], 64))
          ], 10, cw))), 128))
        ]),
        _: 2
      }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]))), 128)),
      C.arrowControl ? (_(!0), L(Te, { key: 1 }, He(u(m), (z) => (_(), L("div", {
        key: z,
        class: A([u(a).be("spinner", "wrapper"), u(a).is("arrow")]),
        onMouseenter: (Y) => S(z)
      }, [
        je((_(), oe(u(xe), {
          class: A(["arrow-up", u(a).be("spinner", "arrow")])
        }, {
          default: X(() => [
            q(u(zu))
          ]),
          _: 1
        }, 8, ["class"])), [
          [u(Ii), I]
        ]),
        je((_(), oe(u(xe), {
          class: A(["arrow-down", u(a).be("spinner", "arrow")])
        }, {
          default: X(() => [
            q(u(Or))
          ]),
          _: 1
        }, 8, ["class"])), [
          [u(Ii), N]
        ]),
        K("ul", {
          class: A(u(a).be("spinner", "list"))
        }, [
          (_(!0), L(Te, null, He(u(b)[z], (Y, ne) => (_(), L("li", {
            key: ne,
            class: A([
              u(a).be("spinner", "item"),
              u(a).is("active", Y === u(h)[z]),
              u(a).is("disabled", u(p)[z][Y])
            ])
          }, [
            typeof Y == "number" ? (_(), L(Te, { key: 0 }, [
              z === "hours" ? (_(), L(Te, { key: 0 }, [
                Qe(pe(("0" + (C.amPmMode ? Y % 12 || 12 : Y)).slice(-2)) + pe(w(Y)), 1)
              ], 64)) : (_(), L(Te, { key: 1 }, [
                Qe(pe(("0" + Y).slice(-2)), 1)
              ], 64))
            ], 64)) : ie("v-if", !0)
          ], 2))), 128))
        ], 2)
      ], 42, dw))), 128)) : ie("v-if", !0)
    ], 2));
  }
});
var pw = /* @__PURE__ */ Me(fw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);
const vw = /* @__PURE__ */ Q({
  __name: "panel-time-pick",
  props: X1,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(e, { emit: t }) {
    const n = e, a = Se("EP_PICKER_BASE"), {
      arrowControl: o,
      disabledHours: l,
      disabledMinutes: s,
      disabledSeconds: r,
      defaultValue: i
    } = a.props, { getAvailableHours: c, getAvailableMinutes: f, getAvailableSeconds: d } = Q1(l, s, r), v = me("time"), { t: m, lang: h } = at(), p = O([0, 2]), b = J1(n), g = k(() => mn(n.actualVisible) ? `${v.namespace.value}-zoom-in-top` : ""), w = k(() => n.format.includes("ss")), S = k(() => n.format.includes("A") ? "A" : n.format.includes("a") ? "a" : ""), y = (B) => {
      const C = Ee(B).locale(h.value), M = U(C);
      return C.isSame(M);
    }, $ = () => {
      t("pick", b.value, !1);
    }, T = (B = !1, C = !1) => {
      C || t("pick", n.parsedValue, B);
    }, E = (B) => {
      if (!n.visible)
        return;
      const C = U(B).millisecond(0);
      t("pick", C, !0);
    }, x = (B, C) => {
      t("select-range", B, C), p.value = [B, C];
    }, N = (B) => {
      const C = [0, 3].concat(w.value ? [6] : []), M = ["hours", "minutes"].concat(w.value ? ["seconds"] : []), Y = (C.indexOf(p.value[0]) + B + C.length) % C.length;
      D.start_emitSelectRange(M[Y]);
    }, I = (B) => {
      const C = B.code, { left: M, right: z, up: Y, down: ne } = We;
      if ([M, z].includes(C)) {
        N(C === M ? -1 : 1), B.preventDefault();
        return;
      }
      if ([Y, ne].includes(C)) {
        const le = C === Y ? -1 : 1;
        D.start_scrollDown(le), B.preventDefault();
        return;
      }
    }, { timePickerOptions: D, onSetOption: H, getAvailableTime: Z } = Z1({
      getAvailableHours: c,
      getAvailableMinutes: f,
      getAvailableSeconds: d
    }), U = (B) => Z(B, n.datetimeRole || "", !0), j = (B) => B ? Ee(B, n.format).locale(h.value) : null, W = (B) => B ? B.format(n.format) : null, R = () => Ee(i).locale(h.value);
    return t("set-picker-option", ["isValidValue", y]), t("set-picker-option", ["formatToString", W]), t("set-picker-option", ["parseUserInput", j]), t("set-picker-option", ["handleKeydownInput", I]), t("set-picker-option", ["getRangeAvailableTime", U]), t("set-picker-option", ["getDefaultValue", R]), (B, C) => (_(), oe(qn, { name: u(g) }, {
      default: X(() => [
        B.actualVisible || B.visible ? (_(), L("div", {
          key: 0,
          class: A(u(v).b("panel"))
        }, [
          K("div", {
            class: A([u(v).be("panel", "content"), { "has-seconds": u(w) }])
          }, [
            q(pw, {
              ref: "spinner",
              role: B.datetimeRole || "start",
              "arrow-control": u(o),
              "show-seconds": u(w),
              "am-pm-mode": u(S),
              "spinner-date": B.parsedValue,
              "disabled-hours": u(l),
              "disabled-minutes": u(s),
              "disabled-seconds": u(r),
              onChange: E,
              onSetOption: u(H),
              onSelectRange: x
            }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])
          ], 2),
          K("div", {
            class: A(u(v).be("panel", "footer"))
          }, [
            K("button", {
              type: "button",
              class: A([u(v).be("panel", "btn"), "cancel"]),
              onClick: $
            }, pe(u(m)("el.datepicker.cancel")), 3),
            K("button", {
              type: "button",
              class: A([u(v).be("panel", "btn"), "confirm"]),
              onClick: C[0] || (C[0] = (M) => T())
            }, pe(u(m)("el.datepicker.confirm")), 3)
          ], 2)
        ], 2)) : ie("v-if", !0)
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var nr = /* @__PURE__ */ Me(vw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]), Gc = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(yn, function() {
    return function(n, a, o) {
      var l = a.prototype, s = function(d) {
        return d && (d.indexOf ? d : d.s);
      }, r = function(d, v, m, h, p) {
        var b = d.name ? d : d.$locale(), g = s(b[v]), w = s(b[m]), S = g || w.map(function($) {
          return $.slice(0, h);
        });
        if (!p)
          return S;
        var y = b.weekStart;
        return S.map(function($, T) {
          return S[(T + (y || 0)) % 7];
        });
      }, i = function() {
        return o.Ls[o.locale()];
      }, c = function(d, v) {
        return d.formats[v] || function(m) {
          return m.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(h, p, b) {
            return p || b.slice(1);
          });
        }(d.formats[v.toUpperCase()]);
      }, f = function() {
        var d = this;
        return { months: function(v) {
          return v ? v.format("MMMM") : r(d, "months");
        }, monthsShort: function(v) {
          return v ? v.format("MMM") : r(d, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return d.$locale().weekStart || 0;
        }, weekdays: function(v) {
          return v ? v.format("dddd") : r(d, "weekdays");
        }, weekdaysMin: function(v) {
          return v ? v.format("dd") : r(d, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(v) {
          return v ? v.format("ddd") : r(d, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(v) {
          return c(d.$locale(), v);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      l.localeData = function() {
        return f.bind(this)();
      }, o.localeData = function() {
        var d = i();
        return { firstDayOfWeek: function() {
          return d.weekStart || 0;
        }, weekdays: function() {
          return o.weekdays();
        }, weekdaysShort: function() {
          return o.weekdaysShort();
        }, weekdaysMin: function() {
          return o.weekdaysMin();
        }, months: function() {
          return o.months();
        }, monthsShort: function() {
          return o.monthsShort();
        }, longDateFormat: function(v) {
          return c(d, v);
        }, meridiem: d.meridiem, ordinal: d.ordinal };
      }, o.months = function() {
        return r(i(), "months");
      }, o.monthsShort = function() {
        return r(i(), "monthsShort", "months", 3);
      }, o.weekdays = function(d) {
        return r(i(), "weekdays", null, null, d);
      }, o.weekdaysShort = function(d) {
        return r(i(), "weekdaysShort", "weekdays", 3, d);
      }, o.weekdaysMin = function(d) {
        return r(i(), "weekdaysMin", "weekdays", 2, d);
      };
    };
  });
})(Gc);
var mw = Gc.exports;
const hw = /* @__PURE__ */ rn(mw), Xc = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: aa,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Zc = {
  [vt]: (e) => xt(e) || Ye(e) || Qn(e),
  change: (e) => xt(e) || Ye(e) || Qn(e)
}, Pa = Symbol("checkboxGroupContextKey"), gw = ({
  model: e,
  isChecked: t
}) => {
  const n = Se(Pa, void 0), a = k(() => {
    var l, s;
    const r = (l = n == null ? void 0 : n.max) == null ? void 0 : l.value, i = (s = n == null ? void 0 : n.min) == null ? void 0 : s.value;
    return !mn(r) && e.value.length >= r && !t.value || !mn(i) && e.value.length <= i && t.value;
  });
  return {
    isDisabled: fl(k(() => (n == null ? void 0 : n.disabled.value) || a.value)),
    isLimitDisabled: a
  };
}, bw = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: a,
  isDisabled: o,
  isLabeledByFormItem: l
}) => {
  const s = Se(Pa, void 0), { formItem: r } = oa(), { emit: i } = Le();
  function c(h) {
    var p, b;
    return h === e.trueLabel || h === !0 ? (p = e.trueLabel) != null ? p : !0 : (b = e.falseLabel) != null ? b : !1;
  }
  function f(h, p) {
    i("change", c(h), p);
  }
  function d(h) {
    if (n.value)
      return;
    const p = h.target;
    i("change", c(p.checked), h);
  }
  async function v(h) {
    n.value || !a.value && !o.value && l.value && (h.composedPath().some((g) => g.tagName === "LABEL") || (t.value = c([!1, e.falseLabel].includes(t.value)), await $e(), f(t.value, h)));
  }
  const m = k(() => (s == null ? void 0 : s.validateEvent) || e.validateEvent);
  return ue(() => e.modelValue, () => {
    m.value && (r == null || r.validate("change").catch((h) => mt(h)));
  }), {
    handleChange: d,
    onClickRoot: v
  };
}, yw = (e) => {
  const t = O(!1), { emit: n } = Le(), a = Se(Pa, void 0), o = k(() => mn(a) === !1), l = O(!1);
  return {
    model: k({
      get() {
        var r, i;
        return o.value ? (r = a == null ? void 0 : a.modelValue) == null ? void 0 : r.value : (i = e.modelValue) != null ? i : t.value;
      },
      set(r) {
        var i, c;
        o.value && ze(r) ? (l.value = ((i = a == null ? void 0 : a.max) == null ? void 0 : i.value) !== void 0 && r.length > (a == null ? void 0 : a.max.value), l.value === !1 && ((c = a == null ? void 0 : a.changeEvent) == null || c.call(a, r))) : (n(vt, r), t.value = r);
      }
    }),
    isGroup: o,
    isLimitExceeded: l
  };
}, ww = (e, t, { model: n }) => {
  const a = Se(Pa, void 0), o = O(!1), l = k(() => {
    const c = n.value;
    return Qn(c) ? c : ze(c) ? _t(e.label) ? c.map(da).some((f) => Ua(f, e.label)) : c.map(da).includes(e.label) : c != null ? c === e.trueLabel : !!c;
  }), s = Dn(k(() => {
    var c;
    return (c = a == null ? void 0 : a.size) == null ? void 0 : c.value;
  }), {
    prop: !0
  }), r = Dn(k(() => {
    var c;
    return (c = a == null ? void 0 : a.size) == null ? void 0 : c.value;
  })), i = k(() => !!t.default || !to(e.label));
  return {
    checkboxButtonSize: s,
    isChecked: l,
    isFocused: o,
    checkboxSize: r,
    hasOwnLabel: i
  };
}, Cw = (e, { model: t }) => {
  function n() {
    ze(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, Qc = (e, t) => {
  const { formItem: n } = oa(), { model: a, isGroup: o, isLimitExceeded: l } = yw(e), {
    isFocused: s,
    isChecked: r,
    checkboxButtonSize: i,
    checkboxSize: c,
    hasOwnLabel: f
  } = ww(e, t, { model: a }), { isDisabled: d } = gw({ model: a, isChecked: r }), { inputId: v, isLabeledByFormItem: m } = Hr(e, {
    formItemContext: n,
    disableIdGeneration: f,
    disableIdManagement: o
  }), { handleChange: h, onClickRoot: p } = bw(e, {
    model: a,
    isLimitExceeded: l,
    hasOwnLabel: f,
    isDisabled: d,
    isLabeledByFormItem: m
  });
  return Cw(e, { model: a }), {
    inputId: v,
    isLabeledByFormItem: m,
    isChecked: r,
    isDisabled: d,
    isFocused: s,
    checkboxButtonSize: i,
    checkboxSize: c,
    hasOwnLabel: f,
    model: a,
    handleChange: h,
    onClickRoot: p
  };
}, Sw = ["id", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value"], kw = ["id", "indeterminate", "disabled", "value", "name", "tabindex"], $w = Q({
  name: "ElCheckbox"
}), _w = /* @__PURE__ */ Q({
  ...$w,
  props: Xc,
  emits: Zc,
  setup(e) {
    const t = e, n = Nn(), {
      inputId: a,
      isLabeledByFormItem: o,
      isChecked: l,
      isDisabled: s,
      isFocused: r,
      checkboxSize: i,
      hasOwnLabel: c,
      model: f,
      handleChange: d,
      onClickRoot: v
    } = Qc(t, n), m = me("checkbox"), h = k(() => [
      m.b(),
      m.m(i.value),
      m.is("disabled", s.value),
      m.is("bordered", t.border),
      m.is("checked", l.value)
    ]), p = k(() => [
      m.e("input"),
      m.is("disabled", s.value),
      m.is("checked", l.value),
      m.is("indeterminate", t.indeterminate),
      m.is("focus", r.value)
    ]);
    return (b, g) => (_(), oe(rt(!u(c) && u(o) ? "span" : "label"), {
      class: A(u(h)),
      "aria-controls": b.indeterminate ? b.controls : null,
      onClick: u(v)
    }, {
      default: X(() => [
        K("span", {
          class: A(u(p))
        }, [
          b.trueLabel || b.falseLabel ? je((_(), L("input", {
            key: 0,
            id: u(a),
            "onUpdate:modelValue": g[0] || (g[0] = (w) => Un(f) ? f.value = w : null),
            class: A(u(m).e("original")),
            type: "checkbox",
            indeterminate: b.indeterminate,
            name: b.name,
            tabindex: b.tabindex,
            disabled: u(s),
            "true-value": b.trueLabel,
            "false-value": b.falseLabel,
            onChange: g[1] || (g[1] = (...w) => u(d) && u(d)(...w)),
            onFocus: g[2] || (g[2] = (w) => r.value = !0),
            onBlur: g[3] || (g[3] = (w) => r.value = !1),
            onClick: g[4] || (g[4] = Ze(() => {
            }, ["stop"]))
          }, null, 42, Sw)), [
            [Vo, u(f)]
          ]) : je((_(), L("input", {
            key: 1,
            id: u(a),
            "onUpdate:modelValue": g[5] || (g[5] = (w) => Un(f) ? f.value = w : null),
            class: A(u(m).e("original")),
            type: "checkbox",
            indeterminate: b.indeterminate,
            disabled: u(s),
            value: b.label,
            name: b.name,
            tabindex: b.tabindex,
            onChange: g[6] || (g[6] = (...w) => u(d) && u(d)(...w)),
            onFocus: g[7] || (g[7] = (w) => r.value = !0),
            onBlur: g[8] || (g[8] = (w) => r.value = !1),
            onClick: g[9] || (g[9] = Ze(() => {
            }, ["stop"]))
          }, null, 42, kw)), [
            [Vo, u(f)]
          ]),
          K("span", {
            class: A(u(m).e("inner"))
          }, null, 2)
        ], 2),
        u(c) ? (_(), L("span", {
          key: 0,
          class: A(u(m).e("label"))
        }, [
          ae(b.$slots, "default"),
          b.$slots.default ? ie("v-if", !0) : (_(), L(Te, { key: 0 }, [
            Qe(pe(b.label), 1)
          ], 64))
        ], 2)) : ie("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var Ew = /* @__PURE__ */ Me(_w, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const Tw = ["name", "tabindex", "disabled", "true-value", "false-value"], Ow = ["name", "tabindex", "disabled", "value"], Pw = Q({
  name: "ElCheckboxButton"
}), Mw = /* @__PURE__ */ Q({
  ...Pw,
  props: Xc,
  emits: Zc,
  setup(e) {
    const t = e, n = Nn(), {
      isFocused: a,
      isChecked: o,
      isDisabled: l,
      checkboxButtonSize: s,
      model: r,
      handleChange: i
    } = Qc(t, n), c = Se(Pa, void 0), f = me("checkbox"), d = k(() => {
      var m, h, p, b;
      const g = (h = (m = c == null ? void 0 : c.fill) == null ? void 0 : m.value) != null ? h : "";
      return {
        backgroundColor: g,
        borderColor: g,
        color: (b = (p = c == null ? void 0 : c.textColor) == null ? void 0 : p.value) != null ? b : "",
        boxShadow: g ? `-1px 0 0 0 ${g}` : void 0
      };
    }), v = k(() => [
      f.b("button"),
      f.bm("button", s.value),
      f.is("disabled", l.value),
      f.is("checked", o.value),
      f.is("focus", a.value)
    ]);
    return (m, h) => (_(), L("label", {
      class: A(u(v))
    }, [
      m.trueLabel || m.falseLabel ? je((_(), L("input", {
        key: 0,
        "onUpdate:modelValue": h[0] || (h[0] = (p) => Un(r) ? r.value = p : null),
        class: A(u(f).be("button", "original")),
        type: "checkbox",
        name: m.name,
        tabindex: m.tabindex,
        disabled: u(l),
        "true-value": m.trueLabel,
        "false-value": m.falseLabel,
        onChange: h[1] || (h[1] = (...p) => u(i) && u(i)(...p)),
        onFocus: h[2] || (h[2] = (p) => a.value = !0),
        onBlur: h[3] || (h[3] = (p) => a.value = !1),
        onClick: h[4] || (h[4] = Ze(() => {
        }, ["stop"]))
      }, null, 42, Tw)), [
        [Vo, u(r)]
      ]) : je((_(), L("input", {
        key: 1,
        "onUpdate:modelValue": h[5] || (h[5] = (p) => Un(r) ? r.value = p : null),
        class: A(u(f).be("button", "original")),
        type: "checkbox",
        name: m.name,
        tabindex: m.tabindex,
        disabled: u(l),
        value: m.label,
        onChange: h[6] || (h[6] = (...p) => u(i) && u(i)(...p)),
        onFocus: h[7] || (h[7] = (p) => a.value = !0),
        onBlur: h[8] || (h[8] = (p) => a.value = !1),
        onClick: h[9] || (h[9] = Ze(() => {
        }, ["stop"]))
      }, null, 42, Ow)), [
        [Vo, u(r)]
      ]),
      m.$slots.default || m.label ? (_(), L("span", {
        key: 2,
        class: A(u(f).be("button", "inner")),
        style: Fe(u(o) ? u(d) : void 0)
      }, [
        ae(m.$slots, "default", {}, () => [
          Qe(pe(m.label), 1)
        ])
      ], 6)) : ie("v-if", !0)
    ], 2));
  }
});
var Jc = /* @__PURE__ */ Me(Mw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const xw = _e({
  modelValue: {
    type: ce(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: aa,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), Aw = {
  [vt]: (e) => ze(e),
  change: (e) => ze(e)
}, Dw = Q({
  name: "ElCheckboxGroup"
}), Iw = /* @__PURE__ */ Q({
  ...Dw,
  props: xw,
  emits: Aw,
  setup(e, { emit: t }) {
    const n = e, a = me("checkbox"), { formItem: o } = oa(), { inputId: l, isLabeledByFormItem: s } = Hr(n, {
      formItemContext: o
    }), r = async (c) => {
      t(vt, c), await $e(), t("change", c);
    }, i = k({
      get() {
        return n.modelValue;
      },
      set(c) {
        r(c);
      }
    });
    return ct(Pa, {
      ...lg(_a(n), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: i,
      changeEvent: r
    }), ue(() => n.modelValue, () => {
      n.validateEvent && (o == null || o.validate("change").catch((c) => mt(c)));
    }), (c, f) => {
      var d;
      return _(), oe(rt(c.tag), {
        id: u(l),
        class: A(u(a).b("group")),
        role: "group",
        "aria-label": u(s) ? void 0 : c.label || "checkbox-group",
        "aria-labelledby": u(s) ? (d = u(o)) == null ? void 0 : d.labelId : void 0
      }, {
        default: X(() => [
          ae(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var ed = /* @__PURE__ */ Me(Iw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const Sa = St(Ew, {
  CheckboxButton: Jc,
  CheckboxGroup: ed
});
na(Jc);
na(ed);
const td = _e({
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: Oa,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Nw = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Rw = Q({
  name: "ElTag"
}), Lw = /* @__PURE__ */ Q({
  ...Rw,
  props: td,
  emits: Nw,
  setup(e, { emit: t }) {
    const n = e, a = Dn(), o = me("tag"), l = k(() => {
      const { type: i, hit: c, effect: f, closable: d, round: v } = n;
      return [
        o.b(),
        o.is("closable", d),
        o.m(i),
        o.m(a.value),
        o.m(f),
        o.is("hit", c),
        o.is("round", v)
      ];
    }), s = (i) => {
      t("close", i);
    }, r = (i) => {
      t("click", i);
    };
    return (i, c) => i.disableTransitions ? (_(), L("span", {
      key: 0,
      class: A(u(l)),
      style: Fe({ backgroundColor: i.color }),
      onClick: r
    }, [
      K("span", {
        class: A(u(o).e("content"))
      }, [
        ae(i.$slots, "default")
      ], 2),
      i.closable ? (_(), oe(u(xe), {
        key: 0,
        class: A(u(o).e("close")),
        onClick: Ze(s, ["stop"])
      }, {
        default: X(() => [
          q(u(Uo))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ie("v-if", !0)
    ], 6)) : (_(), oe(qn, {
      key: 1,
      name: `${u(o).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: X(() => [
        K("span", {
          class: A(u(l)),
          style: Fe({ backgroundColor: i.color }),
          onClick: r
        }, [
          K("span", {
            class: A(u(o).e("content"))
          }, [
            ae(i.$slots, "default")
          ], 2),
          i.closable ? (_(), oe(u(xe), {
            key: 0,
            class: A(u(o).e("close")),
            onClick: Ze(s, ["stop"])
          }, {
            default: X(() => [
              q(u(Uo))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ie("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Fw = /* @__PURE__ */ Me(Lw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const Bw = St(Fw), nd = Symbol("rowContextKey"), Vw = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly"
], zw = ["top", "middle", "bottom"], Hw = _e({
  tag: {
    type: String,
    default: "div"
  },
  gutter: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    values: Vw,
    default: "start"
  },
  align: {
    type: String,
    values: zw
  }
}), Kw = Q({
  name: "ElRow"
}), Ww = /* @__PURE__ */ Q({
  ...Kw,
  props: Hw,
  setup(e) {
    const t = e, n = me("row"), a = k(() => t.gutter);
    ct(nd, {
      gutter: a
    });
    const o = k(() => {
      const s = {};
      return t.gutter && (s.marginRight = s.marginLeft = `-${t.gutter / 2}px`), s;
    }), l = k(() => [
      n.b(),
      n.is(`justify-${t.justify}`, t.justify !== "start"),
      n.is(`align-${t.align}`, !!t.align)
    ]);
    return (s, r) => (_(), oe(rt(s.tag), {
      class: A(u(l)),
      style: Fe(u(o))
    }, {
      default: X(() => [
        ae(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
var jw = /* @__PURE__ */ Me(Ww, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);
const Yw = St(jw), Uw = _e({
  tag: {
    type: String,
    default: "div"
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  },
  xs: {
    type: ce([Number, Object]),
    default: () => en({})
  },
  sm: {
    type: ce([Number, Object]),
    default: () => en({})
  },
  md: {
    type: ce([Number, Object]),
    default: () => en({})
  },
  lg: {
    type: ce([Number, Object]),
    default: () => en({})
  },
  xl: {
    type: ce([Number, Object]),
    default: () => en({})
  }
}), qw = Q({
  name: "ElCol"
}), Gw = /* @__PURE__ */ Q({
  ...qw,
  props: Uw,
  setup(e) {
    const t = e, { gutter: n } = Se(nd, { gutter: k(() => 0) }), a = me("col"), o = k(() => {
      const s = {};
      return n.value && (s.paddingLeft = s.paddingRight = `${n.value / 2}px`), s;
    }), l = k(() => {
      const s = [];
      return ["span", "offset", "pull", "push"].forEach((c) => {
        const f = t[c];
        Ye(f) && (c === "span" ? s.push(a.b(`${t[c]}`)) : f > 0 && s.push(a.b(`${c}-${t[c]}`)));
      }), ["xs", "sm", "md", "lg", "xl"].forEach((c) => {
        Ye(t[c]) ? s.push(a.b(`${c}-${t[c]}`)) : _t(t[c]) && Object.entries(t[c]).forEach(([f, d]) => {
          s.push(f !== "span" ? a.b(`${c}-${f}-${d}`) : a.b(`${c}-${d}`));
        });
      }), n.value && s.push(a.is("guttered")), [a.b(), s];
    });
    return (s, r) => (_(), oe(rt(s.tag), {
      class: A(u(l)),
      style: Fe(u(o))
    }, {
      default: X(() => [
        ae(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
var Xw = /* @__PURE__ */ Me(Gw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);
const Zw = St(Xw);
var ad = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(yn, function() {
    return function(n, a) {
      var o = a.prototype, l = o.format;
      o.format = function(s) {
        var r = this, i = this.$locale();
        if (!this.isValid())
          return l.bind(this)(s);
        var c = this.$utils(), f = (s || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(d) {
          switch (d) {
            case "Q":
              return Math.ceil((r.$M + 1) / 3);
            case "Do":
              return i.ordinal(r.$D);
            case "gggg":
              return r.weekYear();
            case "GGGG":
              return r.isoWeekYear();
            case "wo":
              return i.ordinal(r.week(), "W");
            case "w":
            case "ww":
              return c.s(r.week(), d === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return c.s(r.isoWeek(), d === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return c.s(String(r.$H === 0 ? 24 : r.$H), d === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(r.$d.getTime() / 1e3);
            case "x":
              return r.$d.getTime();
            case "z":
              return "[" + r.offsetName() + "]";
            case "zzz":
              return "[" + r.offsetName("long") + "]";
            default:
              return d;
          }
        });
        return l.bind(this)(f);
      };
    };
  });
})(ad);
var Qw = ad.exports;
const Jw = /* @__PURE__ */ rn(Qw);
var od = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(yn, function() {
    var n = "week", a = "year";
    return function(o, l, s) {
      var r = l.prototype;
      r.week = function(i) {
        if (i === void 0 && (i = null), i !== null)
          return this.add(7 * (i - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var f = s(this).startOf(a).add(1, a).date(c), d = s(this).endOf(n);
          if (f.isBefore(d))
            return 1;
        }
        var v = s(this).startOf(a).date(c).startOf(n).subtract(1, "millisecond"), m = this.diff(v, n, !0);
        return m < 0 ? s(this).startOf("week").week() : Math.ceil(m);
      }, r.weeks = function(i) {
        return i === void 0 && (i = null), this.week(i);
      };
    };
  });
})(od);
var e2 = od.exports;
const t2 = /* @__PURE__ */ rn(e2);
var ld = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(yn, function() {
    return function(n, a) {
      a.prototype.weekYear = function() {
        var o = this.month(), l = this.week(), s = this.year();
        return l === 1 && o === 11 ? s + 1 : o === 0 && l >= 52 ? s - 1 : s;
      };
    };
  });
})(ld);
var n2 = ld.exports;
const a2 = /* @__PURE__ */ rn(n2);
var rd = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(yn, function() {
    return function(n, a, o) {
      a.prototype.dayOfYear = function(l) {
        var s = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return l == null ? s : this.add(l - s, "day");
      };
    };
  });
})(rd);
var o2 = rd.exports;
const l2 = /* @__PURE__ */ rn(o2);
var sd = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(yn, function() {
    return function(n, a) {
      a.prototype.isSameOrAfter = function(o, l) {
        return this.isSame(o, l) || this.isAfter(o, l);
      };
    };
  });
})(sd);
var r2 = sd.exports;
const s2 = /* @__PURE__ */ rn(r2);
var id = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(yn, function() {
    return function(n, a) {
      a.prototype.isSameOrBefore = function(o, l) {
        return this.isSame(o, l) || this.isBefore(o, l);
      };
    };
  });
})(id);
var i2 = id.exports;
const u2 = /* @__PURE__ */ rn(i2), Ur = Symbol(), c2 = _e({
  ...Vc,
  type: {
    type: ce(String),
    default: "date"
  }
}), d2 = ["date", "dates", "year", "month", "week", "range"], qr = _e({
  disabledDate: {
    type: ce(Function)
  },
  date: {
    type: ce(Object),
    required: !0
  },
  minDate: {
    type: ce(Object)
  },
  maxDate: {
    type: ce(Object)
  },
  parsedValue: {
    type: ce([Object, Array])
  },
  rangeState: {
    type: ce(Object),
    default: () => ({
      endDate: null,
      selecting: !1
    })
  }
}), ud = _e({
  type: {
    type: ce(String),
    required: !0,
    values: Ug
  },
  dateFormat: String,
  timeFormat: String
}), cd = _e({
  unlinkPanels: Boolean,
  parsedValue: {
    type: ce(Array)
  }
}), dd = (e) => ({
  type: String,
  values: d2,
  default: e
}), f2 = _e({
  ...ud,
  parsedValue: {
    type: ce([Object, Array])
  },
  visible: {
    type: Boolean
  },
  format: {
    type: String,
    default: ""
  }
}), p2 = _e({
  ...qr,
  cellClassName: {
    type: ce(Function)
  },
  showWeekNumber: Boolean,
  selectionMode: dd("date")
}), v2 = ["changerange", "pick", "select"], ar = (e) => {
  if (!ze(e))
    return !1;
  const [t, n] = e;
  return Ee.isDayjs(t) && Ee.isDayjs(n) && t.isSameOrBefore(n);
}, fd = (e, { lang: t, unit: n, unlinkPanels: a }) => {
  let o;
  if (ze(e)) {
    let [l, s] = e.map((r) => Ee(r).locale(t));
    return a || (s = l.add(1, n)), [l, s];
  } else
    e ? o = Ee(e) : o = Ee();
  return o = o.locale(t), [o, o.add(1, n)];
}, m2 = (e, t, {
  columnIndexOffset: n,
  startDate: a,
  nextEndDate: o,
  now: l,
  unit: s,
  relativeDateGetter: r,
  setCellMetadata: i,
  setRowMetadata: c
}) => {
  for (let f = 0; f < e.row; f++) {
    const d = t[f];
    for (let v = 0; v < e.column; v++) {
      let m = d[v + n];
      m || (m = {
        row: f,
        column: v,
        type: "normal",
        inRange: !1,
        start: !1,
        end: !1
      });
      const h = f * e.column + v, p = r(h);
      m.dayjs = p, m.date = p.toDate(), m.timestamp = p.valueOf(), m.type = "normal", m.inRange = !!(a && p.isSameOrAfter(a, s) && o && p.isSameOrBefore(o, s)) || !!(a && p.isSameOrBefore(a, s) && o && p.isSameOrAfter(o, s)), a != null && a.isSameOrAfter(o) ? (m.start = !!o && p.isSame(o, s), m.end = a && p.isSame(a, s)) : (m.start = !!a && p.isSame(a, s), m.end = !!o && p.isSame(o, s)), p.isSame(l, s) && (m.type = "today"), i == null || i(m, { rowIndex: f, columnIndex: v }), d[v + n] = m;
    }
    c == null || c(d);
  }
}, or = (e = "") => ["normal", "today"].includes(e), h2 = (e, t) => {
  const { lang: n } = at(), a = O(), o = O(), l = O(), s = O(), r = O([[], [], [], [], [], []]);
  let i = !1;
  const c = e.date.$locale().weekStart || 7, f = e.date.locale("en").localeData().weekdaysShort().map((C) => C.toLowerCase()), d = k(() => c > 3 ? 7 - c : -c), v = k(() => {
    const C = e.date.startOf("month");
    return C.subtract(C.day() || 7, "day");
  }), m = k(() => f.concat(f).slice(c, c + 7)), h = k(() => ku(u(y)).some((C) => C.isCurrent)), p = k(() => {
    const C = e.date.startOf("month"), M = C.day() || 7, z = C.daysInMonth(), Y = C.subtract(1, "month").daysInMonth();
    return {
      startOfMonthDay: M,
      dateCountOfMonth: z,
      dateCountOfLastMonth: Y
    };
  }), b = k(() => e.selectionMode === "dates" ? jn(e.parsedValue) : []), g = (C, { count: M, rowIndex: z, columnIndex: Y }) => {
    const { startOfMonthDay: ne, dateCountOfMonth: le, dateCountOfLastMonth: ve } = u(p), ge = u(d);
    if (z >= 0 && z <= 1) {
      const we = ne + ge < 0 ? 7 + ne + ge : ne + ge;
      if (Y + z * 7 >= we)
        return C.text = M, !0;
      C.text = ve - (we - Y % 7) + 1 + z * 7, C.type = "prev-month";
    } else
      return M <= le ? C.text = M : (C.text = M - le, C.type = "next-month"), !0;
    return !1;
  }, w = (C, { columnIndex: M, rowIndex: z }, Y) => {
    const { disabledDate: ne, cellClassName: le } = e, ve = u(b), ge = g(C, { count: Y, rowIndex: z, columnIndex: M }), we = C.dayjs.toDate();
    return C.selected = ve.find((ke) => ke.valueOf() === C.dayjs.valueOf()), C.isSelected = !!C.selected, C.isCurrent = T(C), C.disabled = ne == null ? void 0 : ne(we), C.customClass = le == null ? void 0 : le(we), ge;
  }, S = (C) => {
    if (e.selectionMode === "week") {
      const [M, z] = e.showWeekNumber ? [1, 7] : [0, 6], Y = B(C[M + 1]);
      C[M].inRange = Y, C[M].start = Y, C[z].inRange = Y, C[z].end = Y;
    }
  }, y = k(() => {
    const { minDate: C, maxDate: M, rangeState: z, showWeekNumber: Y } = e, ne = u(d), le = u(r), ve = "day";
    let ge = 1;
    if (Y)
      for (let we = 0; we < 6; we++)
        le[we][0] || (le[we][0] = {
          type: "week",
          text: u(v).add(we * 7 + 1, ve).week()
        });
    return m2({ row: 6, column: 7 }, le, {
      startDate: C,
      columnIndexOffset: Y ? 1 : 0,
      nextEndDate: z.endDate || M || z.selecting && C || null,
      now: Ee().locale(u(n)).startOf(ve),
      unit: ve,
      relativeDateGetter: (we) => u(v).add(we - ne, ve),
      setCellMetadata: (...we) => {
        w(...we, ge) && (ge += 1);
      },
      setRowMetadata: S
    }), le;
  });
  ue(() => e.date, async () => {
    var C;
    (C = u(a)) != null && C.contains(document.activeElement) && (await $e(), await $());
  });
  const $ = async () => {
    var C;
    return (C = u(o)) == null ? void 0 : C.focus();
  }, T = (C) => e.selectionMode === "date" && or(C.type) && E(C, e.parsedValue), E = (C, M) => M ? Ee(M).locale(u(n)).isSame(e.date.date(Number(C.text)), "day") : !1, x = (C, M) => {
    const z = C * 7 + (M - (e.showWeekNumber ? 1 : 0)) - u(d);
    return u(v).add(z, "day");
  }, N = (C) => {
    var M;
    if (!e.rangeState.selecting)
      return;
    let z = C.target;
    if (z.tagName === "SPAN" && (z = (M = z.parentNode) == null ? void 0 : M.parentNode), z.tagName === "DIV" && (z = z.parentNode), z.tagName !== "TD")
      return;
    const Y = z.parentNode.rowIndex - 1, ne = z.cellIndex;
    u(y)[Y][ne].disabled || (Y !== u(l) || ne !== u(s)) && (l.value = Y, s.value = ne, t("changerange", {
      selecting: !0,
      endDate: x(Y, ne)
    }));
  }, I = (C) => !u(h) && (C == null ? void 0 : C.text) === 1 && C.type === "normal" || C.isCurrent, D = (C) => {
    i || u(h) || e.selectionMode !== "date" || R(C, !0);
  }, H = (C) => {
    C.target.closest("td") && (i = !0);
  }, Z = (C) => {
    C.target.closest("td") && (i = !1);
  }, U = (C) => {
    !e.rangeState.selecting || !e.minDate ? (t("pick", { minDate: C, maxDate: null }), t("select", !0)) : (C >= e.minDate ? t("pick", { minDate: e.minDate, maxDate: C }) : t("pick", { minDate: C, maxDate: e.minDate }), t("select", !1));
  }, j = (C) => {
    const M = C.week(), z = `${C.year()}w${M}`;
    t("pick", {
      year: C.year(),
      week: M,
      value: z,
      date: C.startOf("week")
    });
  }, W = (C, M) => {
    const z = M ? jn(e.parsedValue).filter((Y) => (Y == null ? void 0 : Y.valueOf()) !== C.valueOf()) : jn(e.parsedValue).concat([C]);
    t("pick", z);
  }, R = (C, M = !1) => {
    const z = C.target.closest("td");
    if (!z)
      return;
    const Y = z.parentNode.rowIndex - 1, ne = z.cellIndex, le = u(y)[Y][ne];
    if (le.disabled || le.type === "week")
      return;
    const ve = x(Y, ne);
    switch (e.selectionMode) {
      case "range": {
        U(ve);
        break;
      }
      case "date": {
        t("pick", ve, M);
        break;
      }
      case "week": {
        j(ve);
        break;
      }
      case "dates": {
        W(ve, !!le.selected);
        break;
      }
    }
  }, B = (C) => {
    if (e.selectionMode !== "week")
      return !1;
    let M = e.date.startOf("day");
    if (C.type === "prev-month" && (M = M.subtract(1, "month")), C.type === "next-month" && (M = M.add(1, "month")), M = M.date(Number.parseInt(C.text, 10)), e.parsedValue && !Array.isArray(e.parsedValue)) {
      const z = (e.parsedValue.day() - c + 7) % 7 - 1;
      return e.parsedValue.subtract(z, "day").isSame(M, "day");
    }
    return !1;
  };
  return {
    WEEKS: m,
    rows: y,
    tbodyRef: a,
    currentCellRef: o,
    focus: $,
    isCurrent: T,
    isWeekActive: B,
    isSelectedCell: I,
    handlePickDate: R,
    handleMouseUp: Z,
    handleMouseDown: H,
    handleMouseMove: N,
    handleFocus: D
  };
}, g2 = (e, {
  isCurrent: t,
  isWeekActive: n
}) => {
  const a = me("date-table"), { t: o } = at(), l = k(() => [
    a.b(),
    { "is-week-mode": e.selectionMode === "week" }
  ]), s = k(() => o("el.datepicker.dateTablePrompt")), r = k(() => o("el.datepicker.week"));
  return {
    tableKls: l,
    tableLabel: s,
    weekLabel: r,
    getCellClasses: (f) => {
      const d = [];
      return or(f.type) && !f.disabled ? (d.push("available"), f.type === "today" && d.push("today")) : d.push(f.type), t(f) && d.push("current"), f.inRange && (or(f.type) || e.selectionMode === "week") && (d.push("in-range"), f.start && d.push("start-date"), f.end && d.push("end-date")), f.disabled && d.push("disabled"), f.selected && d.push("selected"), f.customClass && d.push(f.customClass), d.join(" ");
    },
    getRowKls: (f) => [
      a.e("row"),
      { current: n(f) }
    ],
    t: o
  };
}, b2 = _e({
  cell: {
    type: ce(Object)
  }
});
var y2 = Q({
  name: "ElDatePickerCell",
  props: b2,
  setup(e) {
    const t = me("date-table-cell"), {
      slots: n
    } = Se(Ur);
    return () => {
      const {
        cell: a
      } = e;
      if (n.default) {
        const o = n.default(a).filter((l) => l.patchFlag !== -2 && l.type.toString() !== "Symbol(Comment)" && l.type.toString() !== "Symbol(v-cmt)");
        if (o.length)
          return o;
      }
      return q("div", {
        class: t.b()
      }, [q("span", {
        class: t.e("text")
      }, [a == null ? void 0 : a.text])]);
    };
  }
});
const w2 = ["aria-label"], C2 = {
  key: 0,
  scope: "col"
}, S2 = ["aria-label"], k2 = ["aria-current", "aria-selected", "tabindex"], $2 = /* @__PURE__ */ Q({
  __name: "basic-date-table",
  props: p2,
  emits: v2,
  setup(e, { expose: t, emit: n }) {
    const a = e, {
      WEEKS: o,
      rows: l,
      tbodyRef: s,
      currentCellRef: r,
      focus: i,
      isCurrent: c,
      isWeekActive: f,
      isSelectedCell: d,
      handlePickDate: v,
      handleMouseUp: m,
      handleMouseDown: h,
      handleMouseMove: p,
      handleFocus: b
    } = h2(a, n), { tableLabel: g, tableKls: w, weekLabel: S, getCellClasses: y, getRowKls: $, t: T } = g2(a, {
      isCurrent: c,
      isWeekActive: f
    });
    return t({
      focus: i
    }), (E, x) => (_(), L("table", {
      "aria-label": u(g),
      class: A(u(w)),
      cellspacing: "0",
      cellpadding: "0",
      role: "grid",
      onClick: x[1] || (x[1] = (...N) => u(v) && u(v)(...N)),
      onMousemove: x[2] || (x[2] = (...N) => u(p) && u(p)(...N)),
      onMousedown: x[3] || (x[3] = Ze((...N) => u(h) && u(h)(...N), ["prevent"])),
      onMouseup: x[4] || (x[4] = (...N) => u(m) && u(m)(...N))
    }, [
      K("tbody", {
        ref_key: "tbodyRef",
        ref: s
      }, [
        K("tr", null, [
          E.showWeekNumber ? (_(), L("th", C2, pe(u(S)), 1)) : ie("v-if", !0),
          (_(!0), L(Te, null, He(u(o), (N, I) => (_(), L("th", {
            key: I,
            "aria-label": u(T)("el.datepicker.weeksFull." + N),
            scope: "col"
          }, pe(u(T)("el.datepicker.weeks." + N)), 9, S2))), 128))
        ]),
        (_(!0), L(Te, null, He(u(l), (N, I) => (_(), L("tr", {
          key: I,
          class: A(u($)(N[1]))
        }, [
          (_(!0), L(Te, null, He(N, (D, H) => (_(), L("td", {
            key: `${I}.${H}`,
            ref_for: !0,
            ref: (Z) => u(d)(D) && (r.value = Z),
            class: A(u(y)(D)),
            "aria-current": D.isCurrent ? "date" : void 0,
            "aria-selected": D.isCurrent,
            tabindex: u(d)(D) ? 0 : -1,
            onFocus: x[0] || (x[0] = (...Z) => u(b) && u(b)(...Z))
          }, [
            q(u(y2), { cell: D }, null, 8, ["cell"])
          ], 42, k2))), 128))
        ], 2))), 128))
      ], 512)
    ], 42, w2));
  }
});
var lr = /* @__PURE__ */ Me($2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-date-table.vue"]]);
const _2 = _e({
  ...qr,
  selectionMode: dd("month")
}), E2 = ["aria-label"], T2 = ["aria-selected", "aria-label", "tabindex", "onKeydown"], O2 = { class: "cell" }, P2 = /* @__PURE__ */ Q({
  __name: "basic-month-table",
  props: _2,
  emits: ["changerange", "pick", "select"],
  setup(e, { expose: t, emit: n }) {
    const a = e, o = (y, $, T) => {
      const E = Ee().locale(T).startOf("month").month($).year(y), x = E.daysInMonth();
      return Rc(x).map((N) => E.add(N, "day").toDate());
    }, l = me("month-table"), { t: s, lang: r } = at(), i = O(), c = O(), f = O(a.date.locale("en").localeData().monthsShort().map((y) => y.toLowerCase())), d = O([
      [],
      [],
      []
    ]), v = O(), m = O(), h = k(() => {
      var y, $;
      const T = d.value, E = Ee().locale(r.value).startOf("month");
      for (let x = 0; x < 3; x++) {
        const N = T[x];
        for (let I = 0; I < 4; I++) {
          const D = N[I] || (N[I] = {
            row: x,
            column: I,
            type: "normal",
            inRange: !1,
            start: !1,
            end: !1,
            text: -1,
            disabled: !1
          });
          D.type = "normal";
          const H = x * 4 + I, Z = a.date.startOf("year").month(H), U = a.rangeState.endDate || a.maxDate || a.rangeState.selecting && a.minDate || null;
          D.inRange = !!(a.minDate && Z.isSameOrAfter(a.minDate, "month") && U && Z.isSameOrBefore(U, "month")) || !!(a.minDate && Z.isSameOrBefore(a.minDate, "month") && U && Z.isSameOrAfter(U, "month")), (y = a.minDate) != null && y.isSameOrAfter(U) ? (D.start = !!(U && Z.isSame(U, "month")), D.end = a.minDate && Z.isSame(a.minDate, "month")) : (D.start = !!(a.minDate && Z.isSame(a.minDate, "month")), D.end = !!(U && Z.isSame(U, "month"))), E.isSame(Z) && (D.type = "today"), D.text = H, D.disabled = (($ = a.disabledDate) == null ? void 0 : $.call(a, Z.toDate())) || !1;
        }
      }
      return T;
    }), p = () => {
      var y;
      (y = c.value) == null || y.focus();
    }, b = (y) => {
      const $ = {}, T = a.date.year(), E = /* @__PURE__ */ new Date(), x = y.text;
      return $.disabled = a.disabledDate ? o(T, x, r.value).every(a.disabledDate) : !1, $.current = jn(a.parsedValue).findIndex((N) => Ee.isDayjs(N) && N.year() === T && N.month() === x) >= 0, $.today = E.getFullYear() === T && E.getMonth() === x, y.inRange && ($["in-range"] = !0, y.start && ($["start-date"] = !0), y.end && ($["end-date"] = !0)), $;
    }, g = (y) => {
      const $ = a.date.year(), T = y.text;
      return jn(a.date).findIndex((E) => E.year() === $ && E.month() === T) >= 0;
    }, w = (y) => {
      var $;
      if (!a.rangeState.selecting)
        return;
      let T = y.target;
      if (T.tagName === "A" && (T = ($ = T.parentNode) == null ? void 0 : $.parentNode), T.tagName === "DIV" && (T = T.parentNode), T.tagName !== "TD")
        return;
      const E = T.parentNode.rowIndex, x = T.cellIndex;
      h.value[E][x].disabled || (E !== v.value || x !== m.value) && (v.value = E, m.value = x, n("changerange", {
        selecting: !0,
        endDate: a.date.startOf("year").month(E * 4 + x)
      }));
    }, S = (y) => {
      var $;
      const T = ($ = y.target) == null ? void 0 : $.closest("td");
      if ((T == null ? void 0 : T.tagName) !== "TD" || Tn(T, "disabled"))
        return;
      const E = T.cellIndex, N = T.parentNode.rowIndex * 4 + E, I = a.date.startOf("year").month(N);
      a.selectionMode === "range" ? a.rangeState.selecting ? (a.minDate && I >= a.minDate ? n("pick", { minDate: a.minDate, maxDate: I }) : n("pick", { minDate: I, maxDate: a.minDate }), n("select", !1)) : (n("pick", { minDate: I, maxDate: null }), n("select", !0)) : n("pick", N);
    };
    return ue(() => a.date, async () => {
      var y, $;
      (y = i.value) != null && y.contains(document.activeElement) && (await $e(), ($ = c.value) == null || $.focus());
    }), t({
      focus: p
    }), (y, $) => (_(), L("table", {
      role: "grid",
      "aria-label": u(s)("el.datepicker.monthTablePrompt"),
      class: A(u(l).b()),
      onClick: S,
      onMousemove: w
    }, [
      K("tbody", {
        ref_key: "tbodyRef",
        ref: i
      }, [
        (_(!0), L(Te, null, He(u(h), (T, E) => (_(), L("tr", { key: E }, [
          (_(!0), L(Te, null, He(T, (x, N) => (_(), L("td", {
            key: N,
            ref_for: !0,
            ref: (I) => g(x) && (c.value = I),
            class: A(b(x)),
            "aria-selected": `${g(x)}`,
            "aria-label": u(s)(`el.datepicker.month${+x.text + 1}`),
            tabindex: g(x) ? 0 : -1,
            onKeydown: [
              ut(Ze(S, ["prevent", "stop"]), ["space"]),
              ut(Ze(S, ["prevent", "stop"]), ["enter"])
            ]
          }, [
            K("div", null, [
              K("span", O2, pe(u(s)("el.datepicker.months." + f.value[x.text])), 1)
            ])
          ], 42, T2))), 128))
        ]))), 128))
      ], 512)
    ], 42, E2));
  }
});
var rr = /* @__PURE__ */ Me(P2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-month-table.vue"]]);
const { date: M2, disabledDate: x2, parsedValue: A2 } = qr, D2 = _e({
  date: M2,
  disabledDate: x2,
  parsedValue: A2
}), I2 = ["aria-label"], N2 = ["aria-selected", "tabindex", "onKeydown"], R2 = { class: "cell" }, L2 = { key: 1 }, F2 = /* @__PURE__ */ Q({
  __name: "basic-year-table",
  props: D2,
  emits: ["pick"],
  setup(e, { expose: t, emit: n }) {
    const a = e, o = (p, b) => {
      const g = Ee(String(p)).locale(b).startOf("year"), S = g.endOf("year").dayOfYear();
      return Rc(S).map((y) => g.add(y, "day").toDate());
    }, l = me("year-table"), { t: s, lang: r } = at(), i = O(), c = O(), f = k(() => Math.floor(a.date.year() / 10) * 10), d = () => {
      var p;
      (p = c.value) == null || p.focus();
    }, v = (p) => {
      const b = {}, g = Ee().locale(r.value);
      return b.disabled = a.disabledDate ? o(p, r.value).every(a.disabledDate) : !1, b.current = jn(a.parsedValue).findIndex((w) => w.year() === p) >= 0, b.today = g.year() === p, b;
    }, m = (p) => p === f.value && a.date.year() < f.value && a.date.year() > f.value + 9 || jn(a.date).findIndex((b) => b.year() === p) >= 0, h = (p) => {
      const g = p.target.closest("td");
      if (g && g.textContent) {
        if (Tn(g, "disabled"))
          return;
        const w = g.textContent || g.innerText;
        n("pick", Number(w));
      }
    };
    return ue(() => a.date, async () => {
      var p, b;
      (p = i.value) != null && p.contains(document.activeElement) && (await $e(), (b = c.value) == null || b.focus());
    }), t({
      focus: d
    }), (p, b) => (_(), L("table", {
      role: "grid",
      "aria-label": u(s)("el.datepicker.yearTablePrompt"),
      class: A(u(l).b()),
      onClick: h
    }, [
      K("tbody", {
        ref_key: "tbodyRef",
        ref: i
      }, [
        (_(), L(Te, null, He(3, (g, w) => K("tr", { key: w }, [
          (_(), L(Te, null, He(4, (S, y) => (_(), L(Te, {
            key: w + "_" + y
          }, [
            w * 4 + y < 10 ? (_(), L("td", {
              key: 0,
              ref_for: !0,
              ref: ($) => m(u(f) + w * 4 + y) && (c.value = $),
              class: A(["available", v(u(f) + w * 4 + y)]),
              "aria-selected": `${m(u(f) + w * 4 + y)}`,
              tabindex: m(u(f) + w * 4 + y) ? 0 : -1,
              onKeydown: [
                ut(Ze(h, ["prevent", "stop"]), ["space"]),
                ut(Ze(h, ["prevent", "stop"]), ["enter"])
              ]
            }, [
              K("span", R2, pe(u(f) + w * 4 + y), 1)
            ], 42, N2)) : (_(), L("td", L2))
          ], 64))), 64))
        ])), 64))
      ], 512)
    ], 10, I2));
  }
});
var B2 = /* @__PURE__ */ Me(F2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-year-table.vue"]]);
const V2 = ["onClick"], z2 = ["aria-label"], H2 = ["aria-label"], K2 = ["aria-label"], W2 = ["aria-label"], j2 = /* @__PURE__ */ Q({
  __name: "panel-date-pick",
  props: f2,
  emits: ["pick", "set-picker-option", "panel-change"],
  setup(e, { emit: t }) {
    const n = e, a = (V, J, G) => !0, o = me("picker-panel"), l = me("date-picker"), s = Zo(), r = Nn(), { t: i, lang: c } = at(), f = Se("EP_PICKER_BASE"), d = Se(vl), { shortcuts: v, disabledDate: m, cellClassName: h, defaultTime: p } = f.props, b = wt(f.props, "defaultValue"), g = O(), w = O(Ee().locale(c.value)), S = O(!1);
    let y = !1;
    const $ = k(() => Ee(p).locale(c.value)), T = k(() => w.value.month()), E = k(() => w.value.year()), x = O([]), N = O(null), I = O(null), D = (V) => x.value.length > 0 ? a(V, x.value, n.format || "HH:mm:ss") : !0, H = (V) => p && !Xe.value && !S.value && !y ? $.value.year(V.year()).month(V.month()).date(V.date()) : ge.value ? V.millisecond(0) : V.startOf("day"), Z = (V, ...J) => {
      if (!V)
        t("pick", V, ...J);
      else if (ze(V)) {
        const G = V.map(H);
        t("pick", G, ...J);
      } else
        t("pick", H(V), ...J);
      N.value = null, I.value = null, S.value = !1, y = !1;
    }, U = (V, J) => {
      if (M.value === "date") {
        V = V;
        let G = n.parsedValue ? n.parsedValue.year(V.year()).month(V.month()).date(V.date()) : V;
        D(G) || (G = x.value[0][0].year(V.year()).month(V.month()).date(V.date())), w.value = G, Z(G, ge.value || J);
      } else
        M.value === "week" ? Z(V.date) : M.value === "dates" && Z(V, !0);
    }, j = (V) => {
      const J = V ? "add" : "subtract";
      w.value = w.value[J](1, "month"), fe("month");
    }, W = (V) => {
      const J = w.value, G = V ? "add" : "subtract";
      w.value = R.value === "year" ? J[G](10, "year") : J[G](1, "year"), fe("year");
    }, R = O("date"), B = k(() => {
      const V = i("el.datepicker.year");
      if (R.value === "year") {
        const J = Math.floor(E.value / 10) * 10;
        return V ? `${J} ${V} - ${J + 9} ${V}` : `${J} - ${J + 9}`;
      }
      return `${E.value} ${V}`;
    }), C = (V) => {
      const J = pt(V.value) ? V.value() : V.value;
      if (J) {
        y = !0, Z(Ee(J).locale(c.value));
        return;
      }
      V.onClick && V.onClick({
        attrs: s,
        slots: r,
        emit: t
      });
    }, M = k(() => {
      const { type: V } = n;
      return ["week", "month", "year", "dates"].includes(V) ? V : "date";
    }), z = k(() => M.value === "date" ? R.value : M.value), Y = k(() => !!v.length), ne = async (V) => {
      w.value = w.value.startOf("month").month(V), M.value === "month" ? Z(w.value, !1) : (R.value = "date", ["month", "year", "date", "week"].includes(M.value) && (Z(w.value, !0), await $e(), Be())), fe("month");
    }, le = async (V) => {
      M.value === "year" ? (w.value = w.value.startOf("year").year(V), Z(w.value, !1)) : (w.value = w.value.year(V), R.value = "month", ["month", "year", "date", "week"].includes(M.value) && (Z(w.value, !0), await $e(), Be())), fe("year");
    }, ve = async (V) => {
      R.value = V, await $e(), Be();
    }, ge = k(() => n.type === "datetime" || n.type === "datetimerange"), we = k(() => ge.value || M.value === "dates"), ke = k(() => m ? n.parsedValue ? ze(n.parsedValue) ? m(n.parsedValue[0].toDate()) : m(n.parsedValue.toDate()) : !0 : !1), De = () => {
      if (M.value === "dates")
        Z(n.parsedValue);
      else {
        let V = n.parsedValue;
        if (!V) {
          const J = Ee(p).locale(c.value), G = be();
          V = J.year(G.year()).month(G.month()).date(G.date());
        }
        w.value = V, Z(V);
      }
    }, Oe = k(() => m ? m(Ee().locale(c.value).toDate()) : !1), Re = () => {
      const J = Ee().locale(c.value).toDate();
      S.value = !0, (!m || !m(J)) && D(J) && (w.value = Ee().locale(c.value), Z(w.value));
    }, Ne = k(() => n.timeFormat || Fc(n.format)), Ve = k(() => n.dateFormat || Lc(n.format)), Xe = k(() => {
      if (I.value)
        return I.value;
      if (!(!n.parsedValue && !b.value))
        return (n.parsedValue || w.value).format(Ne.value);
    }), Je = k(() => {
      if (N.value)
        return N.value;
      if (!(!n.parsedValue && !b.value))
        return (n.parsedValue || w.value).format(Ve.value);
    }), Ke = O(!1), dt = () => {
      Ke.value = !0;
    }, st = () => {
      Ke.value = !1;
    }, et = (V) => ({
      hour: V.hour(),
      minute: V.minute(),
      second: V.second(),
      year: V.year(),
      month: V.month(),
      date: V.date()
    }), Ce = (V, J, G) => {
      const { hour: te, minute: P, second: se } = et(V), ye = n.parsedValue ? n.parsedValue.hour(te).minute(P).second(se) : V;
      w.value = ye, Z(w.value, !0), G || (Ke.value = J);
    }, it = (V) => {
      const J = Ee(V, Ne.value).locale(c.value);
      if (J.isValid() && D(J)) {
        const { year: G, month: te, date: P } = et(w.value);
        w.value = J.year(G).month(te).date(P), I.value = null, Ke.value = !1, Z(w.value, !0);
      }
    }, ot = (V) => {
      const J = Ee(V, Ve.value).locale(c.value);
      if (J.isValid()) {
        if (m && m(J.toDate()))
          return;
        const { hour: G, minute: te, second: P } = et(w.value);
        w.value = J.hour(G).minute(te).second(P), N.value = null, Z(w.value, !0);
      }
    }, ft = (V) => Ee.isDayjs(V) && V.isValid() && (m ? !m(V.toDate()) : !0), lt = (V) => M.value === "dates" ? V.map((J) => J.format(n.format)) : V.format(n.format), re = (V) => Ee(V, n.format).locale(c.value), be = () => {
      const V = Ee(b.value).locale(c.value);
      if (!b.value) {
        const J = $.value;
        return Ee().hour(J.hour()).minute(J.minute()).second(J.second()).locale(c.value);
      }
      return V;
    }, Be = async () => {
      var V;
      ["week", "month", "year", "date"].includes(M.value) && ((V = g.value) == null || V.focus(), M.value === "week" && ht(We.down));
    }, nt = (V) => {
      const { code: J } = V;
      [
        We.up,
        We.down,
        We.left,
        We.right,
        We.home,
        We.end,
        We.pageUp,
        We.pageDown
      ].includes(J) && (ht(J), V.stopPropagation(), V.preventDefault()), [We.enter, We.space, We.numpadEnter].includes(J) && N.value === null && I.value === null && (V.preventDefault(), Z(w.value, !1));
    }, ht = (V) => {
      var J;
      const { up: G, down: te, left: P, right: se, home: ye, end: Ie, pageUp: bt, pageDown: wn } = We, Fn = {
        year: {
          [G]: -4,
          [te]: 4,
          [P]: -1,
          [se]: 1,
          offset: (F, ee) => F.setFullYear(F.getFullYear() + ee)
        },
        month: {
          [G]: -4,
          [te]: 4,
          [P]: -1,
          [se]: 1,
          offset: (F, ee) => F.setMonth(F.getMonth() + ee)
        },
        week: {
          [G]: -1,
          [te]: 1,
          [P]: -1,
          [se]: 1,
          offset: (F, ee) => F.setDate(F.getDate() + ee * 7)
        },
        date: {
          [G]: -7,
          [te]: 7,
          [P]: -1,
          [se]: 1,
          [ye]: (F) => -F.getDay(),
          [Ie]: (F) => -F.getDay() + 6,
          [bt]: (F) => -new Date(F.getFullYear(), F.getMonth(), 0).getDate(),
          [wn]: (F) => new Date(F.getFullYear(), F.getMonth() + 1, 0).getDate(),
          offset: (F, ee) => F.setDate(F.getDate() + ee)
        }
      }, It = w.value.toDate();
      for (; Math.abs(w.value.diff(It, "year", !0)) < 1; ) {
        const F = Fn[z.value];
        if (!F)
          return;
        if (F.offset(It, pt(F[V]) ? F[V](It) : (J = F[V]) != null ? J : 0), m && m(It))
          break;
        const ee = Ee(It).locale(c.value);
        w.value = ee, t("pick", ee, !0);
        break;
      }
    }, fe = (V) => {
      t("panel-change", w.value.toDate(), V, R.value);
    };
    return ue(() => M.value, (V) => {
      if (["month", "year"].includes(V)) {
        R.value = V;
        return;
      }
      R.value = "date";
    }, { immediate: !0 }), ue(() => R.value, () => {
      d == null || d.updatePopper();
    }), ue(() => b.value, (V) => {
      V && (w.value = be());
    }, { immediate: !0 }), ue(() => n.parsedValue, (V) => {
      if (V) {
        if (M.value === "dates" || Array.isArray(V))
          return;
        w.value = V;
      } else
        w.value = be();
    }, { immediate: !0 }), t("set-picker-option", ["isValidValue", ft]), t("set-picker-option", ["formatToString", lt]), t("set-picker-option", ["parseUserInput", re]), t("set-picker-option", ["handleFocusPicker", Be]), (V, J) => (_(), L("div", {
      class: A([
        u(o).b(),
        u(l).b(),
        {
          "has-sidebar": V.$slots.sidebar || u(Y),
          "has-time": u(ge)
        }
      ])
    }, [
      K("div", {
        class: A(u(o).e("body-wrapper"))
      }, [
        ae(V.$slots, "sidebar", {
          class: A(u(o).e("sidebar"))
        }),
        u(Y) ? (_(), L("div", {
          key: 0,
          class: A(u(o).e("sidebar"))
        }, [
          (_(!0), L(Te, null, He(u(v), (G, te) => (_(), L("button", {
            key: te,
            type: "button",
            class: A(u(o).e("shortcut")),
            onClick: (P) => C(G)
          }, pe(G.text), 11, V2))), 128))
        ], 2)) : ie("v-if", !0),
        K("div", {
          class: A(u(o).e("body"))
        }, [
          u(ge) ? (_(), L("div", {
            key: 0,
            class: A(u(l).e("time-header"))
          }, [
            K("span", {
              class: A(u(l).e("editor-wrap"))
            }, [
              q(u(tn), {
                placeholder: u(i)("el.datepicker.selectDate"),
                "model-value": u(Je),
                size: "small",
                "validate-event": !1,
                onInput: J[0] || (J[0] = (G) => N.value = G),
                onChange: ot
              }, null, 8, ["placeholder", "model-value"])
            ], 2),
            je((_(), L("span", {
              class: A(u(l).e("editor-wrap"))
            }, [
              q(u(tn), {
                placeholder: u(i)("el.datepicker.selectTime"),
                "model-value": u(Xe),
                size: "small",
                "validate-event": !1,
                onFocus: dt,
                onInput: J[1] || (J[1] = (G) => I.value = G),
                onChange: it
              }, null, 8, ["placeholder", "model-value"]),
              q(u(nr), {
                visible: Ke.value,
                format: u(Ne),
                "parsed-value": w.value,
                onPick: Ce
              }, null, 8, ["visible", "format", "parsed-value"])
            ], 2)), [
              [u(Qa), st]
            ])
          ], 2)) : ie("v-if", !0),
          je(K("div", {
            class: A([
              u(l).e("header"),
              (R.value === "year" || R.value === "month") && u(l).e("header--bordered")
            ])
          }, [
            K("span", {
              class: A(u(l).e("prev-btn"))
            }, [
              K("button", {
                type: "button",
                "aria-label": u(i)("el.datepicker.prevYear"),
                class: A(["d-arrow-left", u(o).e("icon-btn")]),
                onClick: J[2] || (J[2] = (G) => W(!1))
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(va))
                  ]),
                  _: 1
                })
              ], 10, z2),
              je(K("button", {
                type: "button",
                "aria-label": u(i)("el.datepicker.prevMonth"),
                class: A([u(o).e("icon-btn"), "arrow-left"]),
                onClick: J[3] || (J[3] = (G) => j(!1))
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(qa))
                  ]),
                  _: 1
                })
              ], 10, H2), [
                [$t, R.value === "date"]
              ])
            ], 2),
            K("span", {
              role: "button",
              class: A(u(l).e("header-label")),
              "aria-live": "polite",
              tabindex: "0",
              onKeydown: J[4] || (J[4] = ut((G) => ve("year"), ["enter"])),
              onClick: J[5] || (J[5] = (G) => ve("year"))
            }, pe(u(B)), 35),
            je(K("span", {
              role: "button",
              "aria-live": "polite",
              tabindex: "0",
              class: A([
                u(l).e("header-label"),
                { active: R.value === "month" }
              ]),
              onKeydown: J[6] || (J[6] = ut((G) => ve("month"), ["enter"])),
              onClick: J[7] || (J[7] = (G) => ve("month"))
            }, pe(u(i)(`el.datepicker.month${u(T) + 1}`)), 35), [
              [$t, R.value === "date"]
            ]),
            K("span", {
              class: A(u(l).e("next-btn"))
            }, [
              je(K("button", {
                type: "button",
                "aria-label": u(i)("el.datepicker.nextMonth"),
                class: A([u(o).e("icon-btn"), "arrow-right"]),
                onClick: J[8] || (J[8] = (G) => j(!0))
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(On))
                  ]),
                  _: 1
                })
              ], 10, K2), [
                [$t, R.value === "date"]
              ]),
              K("button", {
                type: "button",
                "aria-label": u(i)("el.datepicker.nextYear"),
                class: A([u(o).e("icon-btn"), "d-arrow-right"]),
                onClick: J[9] || (J[9] = (G) => W(!0))
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(ma))
                  ]),
                  _: 1
                })
              ], 10, W2)
            ], 2)
          ], 2), [
            [$t, R.value !== "time"]
          ]),
          K("div", {
            class: A(u(o).e("content")),
            onKeydown: nt
          }, [
            R.value === "date" ? (_(), oe(lr, {
              key: 0,
              ref_key: "currentViewRef",
              ref: g,
              "selection-mode": u(M),
              date: w.value,
              "parsed-value": V.parsedValue,
              "disabled-date": u(m),
              "cell-class-name": u(h),
              onPick: U
            }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "cell-class-name"])) : ie("v-if", !0),
            R.value === "year" ? (_(), oe(B2, {
              key: 1,
              ref_key: "currentViewRef",
              ref: g,
              date: w.value,
              "disabled-date": u(m),
              "parsed-value": V.parsedValue,
              onPick: le
            }, null, 8, ["date", "disabled-date", "parsed-value"])) : ie("v-if", !0),
            R.value === "month" ? (_(), oe(rr, {
              key: 2,
              ref_key: "currentViewRef",
              ref: g,
              date: w.value,
              "parsed-value": V.parsedValue,
              "disabled-date": u(m),
              onPick: ne
            }, null, 8, ["date", "parsed-value", "disabled-date"])) : ie("v-if", !0)
          ], 34)
        ], 2)
      ], 2),
      je(K("div", {
        class: A(u(o).e("footer"))
      }, [
        je(q(u(In), {
          text: "",
          size: "small",
          class: A(u(o).e("link-btn")),
          disabled: u(Oe),
          onClick: Re
        }, {
          default: X(() => [
            Qe(pe(u(i)("el.datepicker.now")), 1)
          ]),
          _: 1
        }, 8, ["class", "disabled"]), [
          [$t, u(M) !== "dates"]
        ]),
        q(u(In), {
          plain: "",
          size: "small",
          class: A(u(o).e("link-btn")),
          disabled: u(ke),
          onClick: De
        }, {
          default: X(() => [
            Qe(pe(u(i)("el.datepicker.confirm")), 1)
          ]),
          _: 1
        }, 8, ["class", "disabled"])
      ], 2), [
        [$t, u(we) && R.value === "date"]
      ])
    ], 2));
  }
});
var Y2 = /* @__PURE__ */ Me(j2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-pick.vue"]]);
const U2 = _e({
  ...ud,
  ...cd
}), q2 = (e) => {
  const { emit: t } = Le(), n = Zo(), a = Nn();
  return (l) => {
    const s = pt(l.value) ? l.value() : l.value;
    if (s) {
      t("pick", [
        Ee(s[0]).locale(e.value),
        Ee(s[1]).locale(e.value)
      ]);
      return;
    }
    l.onClick && l.onClick({
      attrs: n,
      slots: a,
      emit: t
    });
  };
}, pd = (e, {
  defaultValue: t,
  leftDate: n,
  rightDate: a,
  unit: o,
  onParsedValueChanged: l
}) => {
  const { emit: s } = Le(), { pickerNs: r } = Se(Ur), i = me("date-range-picker"), { t: c, lang: f } = at(), d = q2(f), v = O(), m = O(), h = O({
    endDate: null,
    selecting: !1
  }), p = (S) => {
    h.value = S;
  }, b = (S = !1) => {
    const y = u(v), $ = u(m);
    ar([y, $]) && s("pick", [y, $], S);
  }, g = (S) => {
    h.value.selecting = S, S || (h.value.endDate = null);
  }, w = () => {
    const [S, y] = fd(u(t), {
      lang: u(f),
      unit: o,
      unlinkPanels: e.unlinkPanels
    });
    v.value = void 0, m.value = void 0, n.value = S, a.value = y;
  };
  return ue(t, (S) => {
    S && w();
  }, { immediate: !0 }), ue(() => e.parsedValue, (S) => {
    if (ze(S) && S.length === 2) {
      const [y, $] = S;
      v.value = y, n.value = y, m.value = $, l(u(v), u(m));
    } else
      w();
  }, { immediate: !0 }), {
    minDate: v,
    maxDate: m,
    rangeState: h,
    lang: f,
    ppNs: r,
    drpNs: i,
    handleChangeRange: p,
    handleRangeConfirm: b,
    handleShortcutClick: d,
    onSelect: g,
    t: c
  };
}, G2 = ["onClick"], X2 = ["aria-label"], Z2 = ["aria-label"], Q2 = ["disabled", "aria-label"], J2 = ["disabled", "aria-label"], eC = ["disabled", "aria-label"], tC = ["disabled", "aria-label"], nC = ["aria-label"], aC = ["aria-label"], ho = "month", oC = /* @__PURE__ */ Q({
  __name: "panel-date-range",
  props: U2,
  emits: [
    "pick",
    "set-picker-option",
    "calendar-change",
    "panel-change"
  ],
  setup(e, { emit: t }) {
    const n = e, a = Se("EP_PICKER_BASE"), { disabledDate: o, cellClassName: l, format: s, defaultTime: r, clearable: i } = a.props, c = wt(a.props, "shortcuts"), f = wt(a.props, "defaultValue"), { lang: d } = at(), v = O(Ee().locale(d.value)), m = O(Ee().locale(d.value).add(1, ho)), {
      minDate: h,
      maxDate: p,
      rangeState: b,
      ppNs: g,
      drpNs: w,
      handleChangeRange: S,
      handleRangeConfirm: y,
      handleShortcutClick: $,
      onSelect: T,
      t: E
    } = pd(n, {
      defaultValue: f,
      leftDate: v,
      rightDate: m,
      unit: ho,
      onParsedValueChanged: J
    }), x = O({
      min: null,
      max: null
    }), N = O({
      min: null,
      max: null
    }), I = k(() => `${v.value.year()} ${E("el.datepicker.year")} ${E(`el.datepicker.month${v.value.month() + 1}`)}`), D = k(() => `${m.value.year()} ${E("el.datepicker.year")} ${E(`el.datepicker.month${m.value.month() + 1}`)}`), H = k(() => v.value.year()), Z = k(() => v.value.month()), U = k(() => m.value.year()), j = k(() => m.value.month()), W = k(() => !!c.value.length), R = k(() => x.value.min !== null ? x.value.min : h.value ? h.value.format(Y.value) : ""), B = k(() => x.value.max !== null ? x.value.max : p.value || h.value ? (p.value || h.value).format(Y.value) : ""), C = k(() => N.value.min !== null ? N.value.min : h.value ? h.value.format(z.value) : ""), M = k(() => N.value.max !== null ? N.value.max : p.value || h.value ? (p.value || h.value).format(z.value) : ""), z = k(() => n.timeFormat || Fc(s)), Y = k(() => n.dateFormat || Lc(s)), ne = (G) => ar(G) && (o ? !o(G[0].toDate()) && !o(G[1].toDate()) : !0), le = () => {
      v.value = v.value.subtract(1, "year"), n.unlinkPanels || (m.value = v.value.add(1, "month")), Ne("year");
    }, ve = () => {
      v.value = v.value.subtract(1, "month"), n.unlinkPanels || (m.value = v.value.add(1, "month")), Ne("month");
    }, ge = () => {
      n.unlinkPanels ? m.value = m.value.add(1, "year") : (v.value = v.value.add(1, "year"), m.value = v.value.add(1, "month")), Ne("year");
    }, we = () => {
      n.unlinkPanels ? m.value = m.value.add(1, "month") : (v.value = v.value.add(1, "month"), m.value = v.value.add(1, "month")), Ne("month");
    }, ke = () => {
      v.value = v.value.add(1, "year"), Ne("year");
    }, De = () => {
      v.value = v.value.add(1, "month"), Ne("month");
    }, Oe = () => {
      m.value = m.value.subtract(1, "year"), Ne("year");
    }, Re = () => {
      m.value = m.value.subtract(1, "month"), Ne("month");
    }, Ne = (G) => {
      t("panel-change", [v.value.toDate(), m.value.toDate()], G);
    }, Ve = k(() => {
      const G = (Z.value + 1) % 12, te = Z.value + 1 >= 12 ? 1 : 0;
      return n.unlinkPanels && new Date(H.value + te, G) < new Date(U.value, j.value);
    }), Xe = k(() => n.unlinkPanels && U.value * 12 + j.value - (H.value * 12 + Z.value + 1) >= 12), Je = k(() => !(h.value && p.value && !b.value.selecting && ar([h.value, p.value]))), Ke = k(() => n.type === "datetime" || n.type === "datetimerange"), dt = (G, te) => {
      if (G)
        return r ? Ee(r[te] || r).locale(d.value).year(G.year()).month(G.month()).date(G.date()) : G;
    }, st = (G, te = !0) => {
      const P = G.minDate, se = G.maxDate, ye = dt(P, 0), Ie = dt(se, 1);
      p.value === Ie && h.value === ye || (t("calendar-change", [P.toDate(), se && se.toDate()]), p.value = Ie, h.value = ye, !(!te || Ke.value) && y());
    }, et = O(!1), Ce = O(!1), it = () => {
      et.value = !1;
    }, ot = () => {
      Ce.value = !1;
    }, ft = (G, te) => {
      x.value[te] = G;
      const P = Ee(G, Y.value).locale(d.value);
      if (P.isValid()) {
        if (o && o(P.toDate()))
          return;
        te === "min" ? (v.value = P, h.value = (h.value || v.value).year(P.year()).month(P.month()).date(P.date()), !n.unlinkPanels && (!p.value || p.value.isBefore(h.value)) && (m.value = P.add(1, "month"), p.value = h.value.add(1, "month"))) : (m.value = P, p.value = (p.value || m.value).year(P.year()).month(P.month()).date(P.date()), !n.unlinkPanels && (!h.value || h.value.isAfter(p.value)) && (v.value = P.subtract(1, "month"), h.value = p.value.subtract(1, "month")));
      }
    }, lt = (G, te) => {
      x.value[te] = null;
    }, re = (G, te) => {
      N.value[te] = G;
      const P = Ee(G, z.value).locale(d.value);
      P.isValid() && (te === "min" ? (et.value = !0, h.value = (h.value || v.value).hour(P.hour()).minute(P.minute()).second(P.second()), (!p.value || p.value.isBefore(h.value)) && (p.value = h.value)) : (Ce.value = !0, p.value = (p.value || m.value).hour(P.hour()).minute(P.minute()).second(P.second()), m.value = p.value, p.value && p.value.isBefore(h.value) && (h.value = p.value)));
    }, be = (G, te) => {
      N.value[te] = null, te === "min" ? (v.value = h.value, et.value = !1) : (m.value = p.value, Ce.value = !1);
    }, Be = (G, te, P) => {
      N.value.min || (G && (v.value = G, h.value = (h.value || v.value).hour(G.hour()).minute(G.minute()).second(G.second())), P || (et.value = te), (!p.value || p.value.isBefore(h.value)) && (p.value = h.value, m.value = G));
    }, nt = (G, te, P) => {
      N.value.max || (G && (m.value = G, p.value = (p.value || m.value).hour(G.hour()).minute(G.minute()).second(G.second())), P || (Ce.value = te), p.value && p.value.isBefore(h.value) && (h.value = p.value));
    }, ht = () => {
      v.value = fd(u(f), {
        lang: u(d),
        unit: "month",
        unlinkPanels: n.unlinkPanels
      })[0], m.value = v.value.add(1, "month"), t("pick", null);
    }, fe = (G) => ze(G) ? G.map((te) => te.format(s)) : G.format(s), V = (G) => ze(G) ? G.map((te) => Ee(te, s).locale(d.value)) : Ee(G, s).locale(d.value);
    function J(G, te) {
      if (n.unlinkPanels && te) {
        const P = (G == null ? void 0 : G.year()) || 0, se = (G == null ? void 0 : G.month()) || 0, ye = te.year(), Ie = te.month();
        m.value = P === ye && se === Ie ? te.add(1, ho) : te;
      } else
        m.value = v.value.add(1, ho), te && (m.value = m.value.hour(te.hour()).minute(te.minute()).second(te.second()));
    }
    return t("set-picker-option", ["isValidValue", ne]), t("set-picker-option", ["parseUserInput", V]), t("set-picker-option", ["formatToString", fe]), t("set-picker-option", ["handleClear", ht]), (G, te) => (_(), L("div", {
      class: A([
        u(g).b(),
        u(w).b(),
        {
          "has-sidebar": G.$slots.sidebar || u(W),
          "has-time": u(Ke)
        }
      ])
    }, [
      K("div", {
        class: A(u(g).e("body-wrapper"))
      }, [
        ae(G.$slots, "sidebar", {
          class: A(u(g).e("sidebar"))
        }),
        u(W) ? (_(), L("div", {
          key: 0,
          class: A(u(g).e("sidebar"))
        }, [
          (_(!0), L(Te, null, He(u(c), (P, se) => (_(), L("button", {
            key: se,
            type: "button",
            class: A(u(g).e("shortcut")),
            onClick: (ye) => u($)(P)
          }, pe(P.text), 11, G2))), 128))
        ], 2)) : ie("v-if", !0),
        K("div", {
          class: A(u(g).e("body"))
        }, [
          u(Ke) ? (_(), L("div", {
            key: 0,
            class: A(u(w).e("time-header"))
          }, [
            K("span", {
              class: A(u(w).e("editors-wrap"))
            }, [
              K("span", {
                class: A(u(w).e("time-picker-wrap"))
              }, [
                q(u(tn), {
                  size: "small",
                  disabled: u(b).selecting,
                  placeholder: u(E)("el.datepicker.startDate"),
                  class: A(u(w).e("editor")),
                  "model-value": u(R),
                  "validate-event": !1,
                  onInput: te[0] || (te[0] = (P) => ft(P, "min")),
                  onChange: te[1] || (te[1] = (P) => lt(P, "min"))
                }, null, 8, ["disabled", "placeholder", "class", "model-value"])
              ], 2),
              je((_(), L("span", {
                class: A(u(w).e("time-picker-wrap"))
              }, [
                q(u(tn), {
                  size: "small",
                  class: A(u(w).e("editor")),
                  disabled: u(b).selecting,
                  placeholder: u(E)("el.datepicker.startTime"),
                  "model-value": u(C),
                  "validate-event": !1,
                  onFocus: te[2] || (te[2] = (P) => et.value = !0),
                  onInput: te[3] || (te[3] = (P) => re(P, "min")),
                  onChange: te[4] || (te[4] = (P) => be(P, "min"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value"]),
                q(u(nr), {
                  visible: et.value,
                  format: u(z),
                  "datetime-role": "start",
                  "parsed-value": v.value,
                  onPick: Be
                }, null, 8, ["visible", "format", "parsed-value"])
              ], 2)), [
                [u(Qa), it]
              ])
            ], 2),
            K("span", null, [
              q(u(xe), null, {
                default: X(() => [
                  q(u(On))
                ]),
                _: 1
              })
            ]),
            K("span", {
              class: A([u(w).e("editors-wrap"), "is-right"])
            }, [
              K("span", {
                class: A(u(w).e("time-picker-wrap"))
              }, [
                q(u(tn), {
                  size: "small",
                  class: A(u(w).e("editor")),
                  disabled: u(b).selecting,
                  placeholder: u(E)("el.datepicker.endDate"),
                  "model-value": u(B),
                  readonly: !u(h),
                  "validate-event": !1,
                  onInput: te[5] || (te[5] = (P) => ft(P, "max")),
                  onChange: te[6] || (te[6] = (P) => lt(P, "max"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"])
              ], 2),
              je((_(), L("span", {
                class: A(u(w).e("time-picker-wrap"))
              }, [
                q(u(tn), {
                  size: "small",
                  class: A(u(w).e("editor")),
                  disabled: u(b).selecting,
                  placeholder: u(E)("el.datepicker.endTime"),
                  "model-value": u(M),
                  readonly: !u(h),
                  "validate-event": !1,
                  onFocus: te[7] || (te[7] = (P) => u(h) && (Ce.value = !0)),
                  onInput: te[8] || (te[8] = (P) => re(P, "max")),
                  onChange: te[9] || (te[9] = (P) => be(P, "max"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"]),
                q(u(nr), {
                  "datetime-role": "end",
                  visible: Ce.value,
                  format: u(z),
                  "parsed-value": m.value,
                  onPick: nt
                }, null, 8, ["visible", "format", "parsed-value"])
              ], 2)), [
                [u(Qa), ot]
              ])
            ], 2)
          ], 2)) : ie("v-if", !0),
          K("div", {
            class: A([[u(g).e("content"), u(w).e("content")], "is-left"])
          }, [
            K("div", {
              class: A(u(w).e("header"))
            }, [
              K("button", {
                type: "button",
                class: A([u(g).e("icon-btn"), "d-arrow-left"]),
                "aria-label": u(E)("el.datepicker.prevYear"),
                onClick: le
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(va))
                  ]),
                  _: 1
                })
              ], 10, X2),
              K("button", {
                type: "button",
                class: A([u(g).e("icon-btn"), "arrow-left"]),
                "aria-label": u(E)("el.datepicker.prevMonth"),
                onClick: ve
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(qa))
                  ]),
                  _: 1
                })
              ], 10, Z2),
              G.unlinkPanels ? (_(), L("button", {
                key: 0,
                type: "button",
                disabled: !u(Xe),
                class: A([[u(g).e("icon-btn"), { "is-disabled": !u(Xe) }], "d-arrow-right"]),
                "aria-label": u(E)("el.datepicker.nextYear"),
                onClick: ke
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(ma))
                  ]),
                  _: 1
                })
              ], 10, Q2)) : ie("v-if", !0),
              G.unlinkPanels ? (_(), L("button", {
                key: 1,
                type: "button",
                disabled: !u(Ve),
                class: A([[
                  u(g).e("icon-btn"),
                  { "is-disabled": !u(Ve) }
                ], "arrow-right"]),
                "aria-label": u(E)("el.datepicker.nextMonth"),
                onClick: De
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(On))
                  ]),
                  _: 1
                })
              ], 10, J2)) : ie("v-if", !0),
              K("div", null, pe(u(I)), 1)
            ], 2),
            q(lr, {
              "selection-mode": "range",
              date: v.value,
              "min-date": u(h),
              "max-date": u(p),
              "range-state": u(b),
              "disabled-date": u(o),
              "cell-class-name": u(l),
              onChangerange: u(S),
              onPick: st,
              onSelect: u(T)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
          ], 2),
          K("div", {
            class: A([[u(g).e("content"), u(w).e("content")], "is-right"])
          }, [
            K("div", {
              class: A(u(w).e("header"))
            }, [
              G.unlinkPanels ? (_(), L("button", {
                key: 0,
                type: "button",
                disabled: !u(Xe),
                class: A([[u(g).e("icon-btn"), { "is-disabled": !u(Xe) }], "d-arrow-left"]),
                "aria-label": u(E)("el.datepicker.prevYear"),
                onClick: Oe
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(va))
                  ]),
                  _: 1
                })
              ], 10, eC)) : ie("v-if", !0),
              G.unlinkPanels ? (_(), L("button", {
                key: 1,
                type: "button",
                disabled: !u(Ve),
                class: A([[
                  u(g).e("icon-btn"),
                  { "is-disabled": !u(Ve) }
                ], "arrow-left"]),
                "aria-label": u(E)("el.datepicker.prevMonth"),
                onClick: Re
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(qa))
                  ]),
                  _: 1
                })
              ], 10, tC)) : ie("v-if", !0),
              K("button", {
                type: "button",
                "aria-label": u(E)("el.datepicker.nextYear"),
                class: A([u(g).e("icon-btn"), "d-arrow-right"]),
                onClick: ge
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(ma))
                  ]),
                  _: 1
                })
              ], 10, nC),
              K("button", {
                type: "button",
                class: A([u(g).e("icon-btn"), "arrow-right"]),
                "aria-label": u(E)("el.datepicker.nextMonth"),
                onClick: we
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(On))
                  ]),
                  _: 1
                })
              ], 10, aC),
              K("div", null, pe(u(D)), 1)
            ], 2),
            q(lr, {
              "selection-mode": "range",
              date: m.value,
              "min-date": u(h),
              "max-date": u(p),
              "range-state": u(b),
              "disabled-date": u(o),
              "cell-class-name": u(l),
              onChangerange: u(S),
              onPick: st,
              onSelect: u(T)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
          ], 2)
        ], 2)
      ], 2),
      u(Ke) ? (_(), L("div", {
        key: 0,
        class: A(u(g).e("footer"))
      }, [
        u(i) ? (_(), oe(u(In), {
          key: 0,
          text: "",
          size: "small",
          class: A(u(g).e("link-btn")),
          onClick: ht
        }, {
          default: X(() => [
            Qe(pe(u(E)("el.datepicker.clear")), 1)
          ]),
          _: 1
        }, 8, ["class"])) : ie("v-if", !0),
        q(u(In), {
          plain: "",
          size: "small",
          class: A(u(g).e("link-btn")),
          disabled: u(Je),
          onClick: te[10] || (te[10] = (P) => u(y)(!1))
        }, {
          default: X(() => [
            Qe(pe(u(E)("el.datepicker.confirm")), 1)
          ]),
          _: 1
        }, 8, ["class", "disabled"])
      ], 2)) : ie("v-if", !0)
    ], 2));
  }
});
var lC = /* @__PURE__ */ Me(oC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-range.vue"]]);
const rC = _e({
  ...cd
}), sC = [
  "pick",
  "set-picker-option",
  "calendar-change"
], iC = ({
  unlinkPanels: e,
  leftDate: t,
  rightDate: n
}) => {
  const { t: a } = at(), o = () => {
    t.value = t.value.subtract(1, "year"), e.value || (n.value = n.value.subtract(1, "year"));
  }, l = () => {
    e.value || (t.value = t.value.add(1, "year")), n.value = n.value.add(1, "year");
  }, s = () => {
    t.value = t.value.add(1, "year");
  }, r = () => {
    n.value = n.value.subtract(1, "year");
  }, i = k(() => `${t.value.year()} ${a("el.datepicker.year")}`), c = k(() => `${n.value.year()} ${a("el.datepicker.year")}`), f = k(() => t.value.year()), d = k(() => n.value.year() === t.value.year() ? t.value.year() + 1 : n.value.year());
  return {
    leftPrevYear: o,
    rightNextYear: l,
    leftNextYear: s,
    rightPrevYear: r,
    leftLabel: i,
    rightLabel: c,
    leftYear: f,
    rightYear: d
  };
}, uC = ["onClick"], cC = ["disabled"], dC = ["disabled"], go = "year", fC = Q({
  name: "DatePickerMonthRange"
}), pC = /* @__PURE__ */ Q({
  ...fC,
  props: rC,
  emits: sC,
  setup(e, { emit: t }) {
    const n = e, { lang: a } = at(), o = Se("EP_PICKER_BASE"), { shortcuts: l, disabledDate: s, format: r } = o.props, i = wt(o.props, "defaultValue"), c = O(Ee().locale(a.value)), f = O(Ee().locale(a.value).add(1, go)), {
      minDate: d,
      maxDate: v,
      rangeState: m,
      ppNs: h,
      drpNs: p,
      handleChangeRange: b,
      handleRangeConfirm: g,
      handleShortcutClick: w,
      onSelect: S
    } = pd(n, {
      defaultValue: i,
      leftDate: c,
      rightDate: f,
      unit: go,
      onParsedValueChanged: W
    }), y = k(() => !!l.length), {
      leftPrevYear: $,
      rightNextYear: T,
      leftNextYear: E,
      rightPrevYear: x,
      leftLabel: N,
      rightLabel: I,
      leftYear: D,
      rightYear: H
    } = iC({
      unlinkPanels: wt(n, "unlinkPanels"),
      leftDate: c,
      rightDate: f
    }), Z = k(() => n.unlinkPanels && H.value > D.value + 1), U = (R, B = !0) => {
      const C = R.minDate, M = R.maxDate;
      v.value === M && d.value === C || (t("calendar-change", [C.toDate(), M && M.toDate()]), v.value = M, d.value = C, B && g());
    }, j = (R) => R.map((B) => B.format(r));
    function W(R, B) {
      if (n.unlinkPanels && B) {
        const C = (R == null ? void 0 : R.year()) || 0, M = B.year();
        f.value = C === M ? B.add(1, go) : B;
      } else
        f.value = c.value.add(1, go);
    }
    return t("set-picker-option", ["formatToString", j]), (R, B) => (_(), L("div", {
      class: A([
        u(h).b(),
        u(p).b(),
        {
          "has-sidebar": !!R.$slots.sidebar || u(y)
        }
      ])
    }, [
      K("div", {
        class: A(u(h).e("body-wrapper"))
      }, [
        ae(R.$slots, "sidebar", {
          class: A(u(h).e("sidebar"))
        }),
        u(y) ? (_(), L("div", {
          key: 0,
          class: A(u(h).e("sidebar"))
        }, [
          (_(!0), L(Te, null, He(u(l), (C, M) => (_(), L("button", {
            key: M,
            type: "button",
            class: A(u(h).e("shortcut")),
            onClick: (z) => u(w)(C)
          }, pe(C.text), 11, uC))), 128))
        ], 2)) : ie("v-if", !0),
        K("div", {
          class: A(u(h).e("body"))
        }, [
          K("div", {
            class: A([[u(h).e("content"), u(p).e("content")], "is-left"])
          }, [
            K("div", {
              class: A(u(p).e("header"))
            }, [
              K("button", {
                type: "button",
                class: A([u(h).e("icon-btn"), "d-arrow-left"]),
                onClick: B[0] || (B[0] = (...C) => u($) && u($)(...C))
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(va))
                  ]),
                  _: 1
                })
              ], 2),
              R.unlinkPanels ? (_(), L("button", {
                key: 0,
                type: "button",
                disabled: !u(Z),
                class: A([[
                  u(h).e("icon-btn"),
                  { [u(h).is("disabled")]: !u(Z) }
                ], "d-arrow-right"]),
                onClick: B[1] || (B[1] = (...C) => u(E) && u(E)(...C))
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(ma))
                  ]),
                  _: 1
                })
              ], 10, cC)) : ie("v-if", !0),
              K("div", null, pe(u(N)), 1)
            ], 2),
            q(rr, {
              "selection-mode": "range",
              date: c.value,
              "min-date": u(d),
              "max-date": u(v),
              "range-state": u(m),
              "disabled-date": u(s),
              onChangerange: u(b),
              onPick: U,
              onSelect: u(S)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
          ], 2),
          K("div", {
            class: A([[u(h).e("content"), u(p).e("content")], "is-right"])
          }, [
            K("div", {
              class: A(u(p).e("header"))
            }, [
              R.unlinkPanels ? (_(), L("button", {
                key: 0,
                type: "button",
                disabled: !u(Z),
                class: A([[u(h).e("icon-btn"), { "is-disabled": !u(Z) }], "d-arrow-left"]),
                onClick: B[2] || (B[2] = (...C) => u(x) && u(x)(...C))
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(va))
                  ]),
                  _: 1
                })
              ], 10, dC)) : ie("v-if", !0),
              K("button", {
                type: "button",
                class: A([u(h).e("icon-btn"), "d-arrow-right"]),
                onClick: B[3] || (B[3] = (...C) => u(T) && u(T)(...C))
              }, [
                q(u(xe), null, {
                  default: X(() => [
                    q(u(ma))
                  ]),
                  _: 1
                })
              ], 2),
              K("div", null, pe(u(I)), 1)
            ], 2),
            q(rr, {
              "selection-mode": "range",
              date: f.value,
              "min-date": u(d),
              "max-date": u(v),
              "range-state": u(m),
              "disabled-date": u(s),
              onChangerange: u(b),
              onPick: U,
              onSelect: u(S)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
          ], 2)
        ], 2)
      ], 2)
    ], 2));
  }
});
var vC = /* @__PURE__ */ Me(pC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-month-range.vue"]]);
const mC = function(e) {
  switch (e) {
    case "daterange":
    case "datetimerange":
      return lC;
    case "monthrange":
      return vC;
    default:
      return Y2;
  }
};
Ee.extend(hw);
Ee.extend(Jw);
Ee.extend(H1);
Ee.extend(t2);
Ee.extend(a2);
Ee.extend(l2);
Ee.extend(s2);
Ee.extend(u2);
var hC = Q({
  name: "ElDatePicker",
  install: null,
  props: c2,
  emits: ["update:modelValue"],
  setup(e, {
    expose: t,
    emit: n,
    slots: a
  }) {
    const o = me("picker-panel");
    ct("ElPopperOptions", Rn(wt(e, "popperOptions"))), ct(Ur, {
      slots: a,
      pickerNs: o
    });
    const l = O();
    t({
      focus: (i = !0) => {
        var c;
        (c = l.value) == null || c.focus(i);
      },
      handleOpen: () => {
        var i;
        (i = l.value) == null || i.handleOpen();
      },
      handleClose: () => {
        var i;
        (i = l.value) == null || i.handleClose();
      }
    });
    const r = (i) => {
      n("update:modelValue", i);
    };
    return () => {
      var i;
      const c = (i = e.format) != null ? i : K1[e.type] || ia, f = mC(e.type);
      return q(G1, Ue(e, {
        format: c,
        type: e.type,
        ref: l,
        "onUpdate:modelValue": r
      }), {
        default: (d) => q(f, d, null),
        "range-separator": a["range-separator"]
      });
    };
  }
});
const _o = hC;
_o.install = (e) => {
  e.component(_o.name, _o);
};
const gC = _o, bC = _e({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: ce([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: ce([String, Number])
  }
}), yC = {
  click: (e) => e instanceof MouseEvent
}, wC = "overlay";
var CC = Q({
  name: "ElOverlay",
  props: bC,
  emits: yC,
  setup(e, { slots: t, emit: n }) {
    const a = me(wC), o = (i) => {
      n("click", i);
    }, { onClick: l, onMousedown: s, onMouseup: r } = dc(e.customMaskEvent ? void 0 : o);
    return () => e.mask ? q("div", {
      class: [a.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: l,
      onMousedown: s,
      onMouseup: r
    }, [ae(t, "default")], Ht.STYLE | Ht.CLASS | Ht.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Pe("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [ae(t, "default")]);
  }
});
const SC = CC, vd = Symbol("dialogInjectionKey"), md = _e({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: Xt
  },
  customClass: {
    type: String,
    default: ""
  },
  draggable: Boolean,
  fullscreen: Boolean,
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
}), kC = {
  close: () => !0
}, $C = ["aria-level"], _C = ["aria-label"], EC = ["id"], TC = Q({ name: "ElDialogContent" }), OC = /* @__PURE__ */ Q({
  ...TC,
  props: md,
  emits: kC,
  setup(e) {
    const t = e, { t: n } = at(), { Close: a } = jg, { dialogRef: o, headerRef: l, bodyId: s, ns: r, style: i } = Se(vd), { focusTrapRef: c } = Se(Ec), f = k(() => [
      r.b(),
      r.is("fullscreen", t.fullscreen),
      r.is("draggable", t.draggable),
      r.is("align-center", t.alignCenter),
      { [r.m("center")]: t.center },
      t.customClass
    ]), d = Yg(c, o), v = k(() => t.draggable);
    return ab(o, l, v), (m, h) => (_(), L("div", {
      ref: u(d),
      class: A(u(f)),
      style: Fe(u(i)),
      tabindex: "-1"
    }, [
      K("header", {
        ref_key: "headerRef",
        ref: l,
        class: A(u(r).e("header"))
      }, [
        ae(m.$slots, "header", {}, () => [
          K("span", {
            role: "heading",
            "aria-level": m.ariaLevel,
            class: A(u(r).e("title"))
          }, pe(m.title), 11, $C)
        ]),
        m.showClose ? (_(), L("button", {
          key: 0,
          "aria-label": u(n)("el.dialog.close"),
          class: A(u(r).e("headerbtn")),
          type: "button",
          onClick: h[0] || (h[0] = (p) => m.$emit("close"))
        }, [
          q(u(xe), {
            class: A(u(r).e("close"))
          }, {
            default: X(() => [
              (_(), oe(rt(m.closeIcon || u(a))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, _C)) : ie("v-if", !0)
      ], 2),
      K("div", {
        id: u(s),
        class: A(u(r).e("body"))
      }, [
        ae(m.$slots, "default")
      ], 10, EC),
      m.$slots.footer ? (_(), L("footer", {
        key: 0,
        class: A(u(r).e("footer"))
      }, [
        ae(m.$slots, "footer")
      ], 2)) : ie("v-if", !0)
    ], 6));
  }
});
var PC = /* @__PURE__ */ Me(OC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);
const MC = _e({
  ...md,
  appendToBody: Boolean,
  appendTo: {
    type: ce(String),
    default: "body"
  },
  beforeClose: {
    type: ce(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: !0
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  modal: {
    type: Boolean,
    default: !0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: {
    type: Boolean,
    default: !1
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
}), xC = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [vt]: (e) => Qn(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, AC = (e, t) => {
  var n;
  const o = Le().emit, { nextZIndex: l } = Br();
  let s = "";
  const r = Ca(), i = Ca(), c = O(!1), f = O(!1), d = O(!1), v = O((n = e.zIndex) != null ? n : l());
  let m, h;
  const p = Vr("namespace", wo), b = k(() => {
    const j = {}, W = `--${p.value}-dialog`;
    return e.fullscreen || (e.top && (j[`${W}-margin-top`] = e.top), e.width && (j[`${W}-width`] = pa(e.width))), j;
  }), g = k(() => e.alignCenter ? { display: "flex" } : {});
  function w() {
    o("opened");
  }
  function S() {
    o("closed"), o(vt, !1), e.destroyOnClose && (d.value = !1);
  }
  function y() {
    o("close");
  }
  function $() {
    h == null || h(), m == null || m(), e.openDelay && e.openDelay > 0 ? { stop: m } = is(() => N(), e.openDelay) : N();
  }
  function T() {
    m == null || m(), h == null || h(), e.closeDelay && e.closeDelay > 0 ? { stop: h } = is(() => I(), e.closeDelay) : I();
  }
  function E() {
    function j(W) {
      W || (f.value = !0, c.value = !1);
    }
    e.beforeClose ? e.beforeClose(j) : T();
  }
  function x() {
    e.closeOnClickModal && E();
  }
  function N() {
    qe && (c.value = !0);
  }
  function I() {
    c.value = !1;
  }
  function D() {
    o("openAutoFocus");
  }
  function H() {
    o("closeAutoFocus");
  }
  function Z(j) {
    var W;
    ((W = j.detail) == null ? void 0 : W.focusReason) === "pointer" && j.preventDefault();
  }
  e.lockScroll && bb(c);
  function U() {
    e.closeOnPressEscape && E();
  }
  return ue(() => e.modelValue, (j) => {
    j ? (f.value = !1, $(), d.value = !0, v.value = Iu(e.zIndex) ? l() : v.value++, $e(() => {
      o("open"), t.value && (t.value.scrollTop = 0);
    })) : c.value && T();
  }), ue(() => e.fullscreen, (j) => {
    t.value && (j ? (s = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = s);
  }), Ge(() => {
    e.modelValue && (c.value = !0, d.value = !0, $());
  }), {
    afterEnter: w,
    afterLeave: S,
    beforeLeave: y,
    handleClose: E,
    onModalClick: x,
    close: T,
    doClose: I,
    onOpenAutoFocus: D,
    onCloseAutoFocus: H,
    onCloseRequested: U,
    onFocusoutPrevented: Z,
    titleId: r,
    bodyId: i,
    closed: f,
    style: b,
    overlayDialogStyle: g,
    rendered: d,
    visible: c,
    zIndex: v
  };
}, DC = ["aria-label", "aria-labelledby", "aria-describedby"], IC = Q({
  name: "ElDialog",
  inheritAttrs: !1
}), NC = /* @__PURE__ */ Q({
  ...IC,
  props: MC,
  emits: xC,
  setup(e, { expose: t }) {
    const n = e, a = Nn();
    Ga({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, k(() => !!a.title)), Ga({
      scope: "el-dialog",
      from: "custom-class",
      replacement: "class",
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#attributes",
      type: "Attribute"
    }, k(() => !!n.customClass));
    const o = me("dialog"), l = O(), s = O(), r = O(), {
      visible: i,
      titleId: c,
      bodyId: f,
      style: d,
      overlayDialogStyle: v,
      rendered: m,
      zIndex: h,
      afterEnter: p,
      afterLeave: b,
      beforeLeave: g,
      handleClose: w,
      onModalClick: S,
      onOpenAutoFocus: y,
      onCloseAutoFocus: $,
      onCloseRequested: T,
      onFocusoutPrevented: E
    } = AC(n, l);
    ct(vd, {
      dialogRef: l,
      headerRef: s,
      bodyId: f,
      ns: o,
      rendered: m,
      style: d
    });
    const x = dc(S), N = k(() => n.draggable && !n.fullscreen);
    return t({
      visible: i,
      dialogContentRef: r
    }), (I, D) => (_(), oe(nu, {
      to: I.appendTo,
      disabled: I.appendTo !== "body" ? !1 : !I.appendToBody
    }, [
      q(qn, {
        name: "dialog-fade",
        onAfterEnter: u(p),
        onAfterLeave: u(b),
        onBeforeLeave: u(g),
        persisted: ""
      }, {
        default: X(() => [
          je(q(u(SC), {
            "custom-mask-event": "",
            mask: I.modal,
            "overlay-class": I.modalClass,
            "z-index": u(h)
          }, {
            default: X(() => [
              K("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": I.title || void 0,
                "aria-labelledby": I.title ? void 0 : u(c),
                "aria-describedby": u(f),
                class: A(`${u(o).namespace.value}-overlay-dialog`),
                style: Fe(u(v)),
                onClick: D[0] || (D[0] = (...H) => u(x).onClick && u(x).onClick(...H)),
                onMousedown: D[1] || (D[1] = (...H) => u(x).onMousedown && u(x).onMousedown(...H)),
                onMouseup: D[2] || (D[2] = (...H) => u(x).onMouseup && u(x).onMouseup(...H))
              }, [
                q(u(Oc), {
                  loop: "",
                  trapped: u(i),
                  "focus-start-el": "container",
                  onFocusAfterTrapped: u(y),
                  onFocusAfterReleased: u($),
                  onFocusoutPrevented: u(E),
                  onReleaseRequested: u(T)
                }, {
                  default: X(() => [
                    u(m) ? (_(), oe(PC, Ue({
                      key: 0,
                      ref_key: "dialogContentRef",
                      ref: r
                    }, I.$attrs, {
                      "custom-class": I.customClass,
                      center: I.center,
                      "align-center": I.alignCenter,
                      "close-icon": I.closeIcon,
                      draggable: u(N),
                      fullscreen: I.fullscreen,
                      "show-close": I.showClose,
                      title: I.title,
                      "aria-level": I.headerAriaLevel,
                      onClose: u(w)
                    }), vn({
                      header: X(() => [
                        I.$slots.title ? ae(I.$slots, "title", { key: 1 }) : ae(I.$slots, "header", {
                          key: 0,
                          close: u(w),
                          titleId: u(c),
                          titleClass: u(o).e("title")
                        })
                      ]),
                      default: X(() => [
                        ae(I.$slots, "default")
                      ]),
                      _: 2
                    }, [
                      I.$slots.footer ? {
                        name: "footer",
                        fn: X(() => [
                          ae(I.$slots, "footer")
                        ])
                      } : void 0
                    ]), 1040, ["custom-class", "center", "align-center", "close-icon", "draggable", "fullscreen", "show-close", "title", "aria-level", "onClose"])) : ie("v-if", !0)
                  ]),
                  _: 3
                }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
              ], 46, DC)
            ]),
            _: 3
          }, 8, ["mask", "overlay-class", "z-index"]), [
            [$t, u(i)]
          ])
        ]),
        _: 3
      }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
    ], 8, ["to", "disabled"]));
  }
});
var RC = /* @__PURE__ */ Me(NC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);
const LC = St(RC), hd = Symbol("elPaginationKey"), FC = _e({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: Xt
  }
}), BC = {
  click: (e) => e instanceof MouseEvent
}, VC = ["disabled", "aria-label", "aria-disabled"], zC = { key: 0 }, HC = Q({
  name: "ElPaginationPrev"
}), KC = /* @__PURE__ */ Q({
  ...HC,
  props: FC,
  emits: BC,
  setup(e) {
    const t = e, { t: n } = at(), a = k(() => t.disabled || t.currentPage <= 1);
    return (o, l) => (_(), L("button", {
      type: "button",
      class: "btn-prev",
      disabled: u(a),
      "aria-label": o.prevText || u(n)("el.pagination.prev"),
      "aria-disabled": u(a),
      onClick: l[0] || (l[0] = (s) => o.$emit("click", s))
    }, [
      o.prevText ? (_(), L("span", zC, pe(o.prevText), 1)) : (_(), oe(u(xe), { key: 1 }, {
        default: X(() => [
          (_(), oe(rt(o.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, VC));
  }
});
var WC = /* @__PURE__ */ Me(KC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const jC = _e({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  },
  nextIcon: {
    type: Xt
  }
}), YC = ["disabled", "aria-label", "aria-disabled"], UC = { key: 0 }, qC = Q({
  name: "ElPaginationNext"
}), GC = /* @__PURE__ */ Q({
  ...qC,
  props: jC,
  emits: ["click"],
  setup(e) {
    const t = e, { t: n } = at(), a = k(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (o, l) => (_(), L("button", {
      type: "button",
      class: "btn-next",
      disabled: u(a),
      "aria-label": o.nextText || u(n)("el.pagination.next"),
      "aria-disabled": u(a),
      onClick: l[0] || (l[0] = (s) => o.$emit("click", s))
    }, [
      o.nextText ? (_(), L("span", UC, pe(o.nextText), 1)) : (_(), oe(u(xe), { key: 1 }, {
        default: X(() => [
          (_(), oe(rt(o.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, YC));
  }
});
var XC = /* @__PURE__ */ Me(GC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const gd = Symbol("ElSelectGroup"), ml = Symbol("ElSelect");
function ZC(e, t) {
  const n = Se(ml), a = Se(gd, { disabled: !1 }), o = k(() => _t(e.value)), l = k(() => n.props.multiple ? d(n.props.modelValue, e.value) : v(e.value, n.props.modelValue)), s = k(() => {
    if (n.props.multiple) {
      const p = n.props.modelValue || [];
      return !l.value && p.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), r = k(() => e.label || (o.value ? "" : e.value)), i = k(() => e.value || e.label || ""), c = k(() => e.disabled || t.groupDisabled || s.value), f = Le(), d = (p = [], b) => {
    if (o.value) {
      const g = n.props.valueKey;
      return p && p.some((w) => da(kt(w, g)) === kt(b, g));
    } else
      return p && p.includes(b);
  }, v = (p, b) => {
    if (o.value) {
      const { valueKey: g } = n.props;
      return kt(p, g) === kt(b, g);
    } else
      return p === b;
  }, m = () => {
    !e.disabled && !a.disabled && (n.hoverIndex = n.optionsArray.indexOf(f.proxy));
  };
  ue(() => r.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ue(() => e.value, (p, b) => {
    const { remote: g, valueKey: w } = n.props;
    if (Object.is(p, b) || (n.onOptionDestroy(b, f.proxy), n.onOptionCreate(f.proxy)), !e.created && !g) {
      if (w && _t(p) && _t(b) && p[w] === b[w])
        return;
      n.setSelected();
    }
  }), ue(() => a.disabled, () => {
    t.groupDisabled = a.disabled;
  }, { immediate: !0 });
  const { queryChange: h } = da(n);
  return ue(h, (p) => {
    const { query: b } = u(p), g = new RegExp(ig(b), "i");
    t.visible = g.test(r.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: r,
    currentValue: i,
    itemSelected: l,
    isDisabled: c,
    hoverItem: m
  };
}
const QC = Q({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(e) {
    const t = me("select"), n = Ca(), a = k(() => [
      t.be("dropdown", "item"),
      t.is("disabled", u(r)),
      {
        selected: u(s),
        hover: u(d)
      }
    ]), o = Rn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: l, itemSelected: s, isDisabled: r, select: i, hoverItem: c } = ZC(e, o), { visible: f, hover: d } = _a(o), v = Le().proxy;
    i.onOptionCreate(v), Ut(() => {
      const h = v.value, { selected: p } = i, g = (i.props.multiple ? p : [p]).some((w) => w.value === v.value);
      $e(() => {
        i.cachedOptions.get(h) === v && !g && i.cachedOptions.delete(h);
      }), i.onOptionDestroy(h, v);
    });
    function m() {
      e.disabled !== !0 && o.groupDisabled !== !0 && i.handleOptionSelect(v);
    }
    return {
      ns: t,
      id: n,
      containerKls: a,
      currentLabel: l,
      itemSelected: s,
      isDisabled: r,
      select: i,
      hoverItem: c,
      visible: f,
      hover: d,
      selectOptionClick: m,
      states: o
    };
  }
}), JC = ["id", "aria-disabled", "aria-selected"];
function eS(e, t, n, a, o, l) {
  return je((_(), L("li", {
    id: e.id,
    class: A(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMouseenter: t[0] || (t[0] = (...s) => e.hoverItem && e.hoverItem(...s)),
    onClick: t[1] || (t[1] = Ze((...s) => e.selectOptionClick && e.selectOptionClick(...s), ["stop"]))
  }, [
    ae(e.$slots, "default", {}, () => [
      K("span", null, pe(e.currentLabel), 1)
    ])
  ], 42, JC)), [
    [$t, e.visible]
  ]);
}
var Gr = /* @__PURE__ */ Me(QC, [["render", eS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const tS = Q({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Se(ml), t = me("select"), n = k(() => e.props.popperClass), a = k(() => e.props.multiple), o = k(() => e.props.fitInputWidth), l = O("");
    function s() {
      var r;
      l.value = `${(r = e.selectWrapper) == null ? void 0 : r.offsetWidth}px`;
    }
    return Ge(() => {
      s(), Mn(e.selectWrapper, s);
    }), {
      ns: t,
      minWidth: l,
      popperClass: n,
      isMultiple: a,
      isFitInputWidth: o
    };
  }
});
function nS(e, t, n, a, o, l) {
  return _(), L("div", {
    class: A([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Fe({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (_(), L("div", {
      key: 0,
      class: A(e.ns.be("dropdown", "header"))
    }, [
      ae(e.$slots, "header")
    ], 2)) : ie("v-if", !0),
    ae(e.$slots, "default"),
    e.$slots.footer ? (_(), L("div", {
      key: 1,
      class: A(e.ns.be("dropdown", "footer"))
    }, [
      ae(e.$slots, "footer")
    ], 2)) : ie("v-if", !0)
  ], 6);
}
var aS = /* @__PURE__ */ Me(tS, [["render", nS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function oS(e) {
  const { t } = at();
  return Rn({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    disabledOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    prefixWidth: 11,
    mouseEnter: !1,
    focused: !1
  });
}
const lS = (e, t, n) => {
  const { t: a } = at(), o = me("select");
  Ga({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, k(() => e.suffixTransition === !1));
  const l = O(null), s = O(null), r = O(null), i = O(null), c = O(null), f = O(null), d = O(null), v = O(null), m = O(), h = fn({ query: "" }), p = fn(""), b = O([]);
  let g = 0;
  const { form: w, formItem: S } = oa(), y = k(() => !e.filterable || e.multiple || !t.visible), $ = k(() => e.disabled || (w == null ? void 0 : w.disabled)), T = k(() => {
    const F = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !$.value && t.inputHovering && F;
  }), E = k(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), x = k(() => o.is("reverse", E.value && t.visible && e.suffixTransition)), N = k(() => (w == null ? void 0 : w.statusIcon) && (S == null ? void 0 : S.validateState) && Wu[S == null ? void 0 : S.validateState]), I = k(() => e.remote ? 300 : 0), D = k(() => e.loading ? e.loadingText || a("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || a("el.select.noMatch") : t.options.size === 0 ? e.noDataText || a("el.select.noData") : null), H = k(() => {
    const F = Array.from(t.options.values()), ee = [];
    return b.value.forEach((de) => {
      const Ae = F.findIndex((Et) => Et.currentLabel === de);
      Ae > -1 && ee.push(F[Ae]);
    }), ee.length >= F.length ? ee : F;
  }), Z = k(() => Array.from(t.cachedOptions.values())), U = k(() => {
    const F = H.value.filter((ee) => !ee.created).some((ee) => ee.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !F;
  }), j = Dn(), W = k(() => ["small"].includes(j.value) ? "small" : "default"), R = k({
    get() {
      return t.visible && D.value !== !1;
    },
    set(F) {
      t.visible = F;
    }
  });
  ue([() => $.value, () => j.value, () => w == null ? void 0 : w.size], () => {
    $e(() => {
      B();
    });
  }), ue(() => e.placeholder, (F) => {
    t.cachedPlaceHolder = t.currentPlaceholder = F, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), ue(() => e.modelValue, (F, ee) => {
    e.multiple && (B(), F && F.length > 0 || s.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", C(t.query))), Y(), e.filterable && !e.multiple && (t.inputLength = 20), !Ua(F, ee) && e.validateEvent && (S == null || S.validate("change").catch((de) => mt(de)));
  }, {
    flush: "post",
    deep: !0
  }), ue(() => t.visible, (F) => {
    var ee, de, Ae, Et, Ot;
    F ? ((de = (ee = i.value) == null ? void 0 : ee.updatePopper) == null || de.call(ee), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (Et = (Ae = r.value) == null ? void 0 : Ae.focus) == null || Et.call(Ae), e.multiple ? (Ot = s.value) == null || Ot.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), C(t.query), !e.multiple && !e.remote && (h.value.query = "", Ma(h), Ma(p)))) : (e.filterable && (pt(e.filterMethod) && e.filterMethod(""), pt(e.remoteMethod) && e.remoteMethod("")), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, le(), $e(() => {
      s.value && s.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", F);
  }), ue(() => t.options.entries(), () => {
    var F, ee, de;
    if (!qe)
      return;
    (ee = (F = i.value) == null ? void 0 : F.updatePopper) == null || ee.call(F), e.multiple && B();
    const Ae = ((de = d.value) == null ? void 0 : de.querySelectorAll("input")) || [];
    (!e.filterable && !e.defaultFirstOption && !mn(e.modelValue) || !Array.from(Ae).includes(document.activeElement)) && Y(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && z();
  }, {
    flush: "post"
  }), ue(() => t.hoverIndex, (F) => {
    Ye(F) && F > -1 ? m.value = H.value[F] || {} : m.value = {}, H.value.forEach((ee) => {
      ee.hover = m.value === ee;
    });
  });
  const B = () => {
    $e(() => {
      var F, ee;
      if (!l.value)
        return;
      const de = l.value.$el.querySelector("input");
      g = g || (de.clientHeight > 0 ? de.clientHeight + 2 : 0);
      const Ae = f.value, Et = getComputedStyle(de).getPropertyValue(o.cssVarName("input-height")), Ot = Number.parseFloat(Et) || Gg(j.value || (w == null ? void 0 : w.size)), Vt = j.value || Ot === g || g <= 0 ? Ot : g;
      !(de.offsetParent === null) && (de.style.height = `${(t.selected.length === 0 ? Vt : Math.max(Ae ? Ae.clientHeight + (Ae.clientHeight > Vt ? 6 : 0) : 0, Vt)) - 2}px`), t.visible && D.value !== !1 && ((ee = (F = i.value) == null ? void 0 : F.updatePopper) == null || ee.call(F));
    });
  }, C = async (F) => {
    if (!(t.previousQuery === F || t.isOnComposition)) {
      if (t.previousQuery === null && (pt(e.filterMethod) || pt(e.remoteMethod))) {
        t.previousQuery = F;
        return;
      }
      t.previousQuery = F, $e(() => {
        var ee, de;
        t.visible && ((de = (ee = i.value) == null ? void 0 : ee.updatePopper) == null || de.call(ee));
      }), t.hoverIndex = -1, e.multiple && e.filterable && $e(() => {
        if (!$.value) {
          const ee = s.value.value.length * 15 + 20;
          t.inputLength = e.collapseTags ? Math.min(50, ee) : ee, M();
        }
        B();
      }), e.remote && pt(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(F)) : pt(e.filterMethod) ? (e.filterMethod(F), Ma(p)) : (t.filteredOptionsCount = t.optionsCount, h.value.query = F, Ma(h), Ma(p)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await $e(), z());
    }
  }, M = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = s.value.value ? "" : t.cachedPlaceHolder);
  }, z = () => {
    const F = H.value.filter((Ae) => Ae.visible && !Ae.disabled && !Ae.states.groupDisabled), ee = F.find((Ae) => Ae.created), de = F[0];
    t.hoverIndex = Ke(H.value, ee || de);
  }, Y = () => {
    var F;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const de = ne(e.modelValue);
      (F = de.props) != null && F.created ? (t.createdLabel = de.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = de.currentLabel, t.selected = de, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const ee = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((de) => {
      ee.push(ne(de));
    }), t.selected = ee, $e(() => {
      B();
    });
  }, ne = (F) => {
    let ee;
    const de = gl(F).toLowerCase() === "object", Ae = gl(F).toLowerCase() === "null", Et = gl(F).toLowerCase() === "undefined";
    for (let Jt = t.cachedOptions.size - 1; Jt >= 0; Jt--) {
      const zt = Z.value[Jt];
      if (de ? kt(zt.value, e.valueKey) === kt(F, e.valueKey) : zt.value === F) {
        ee = {
          value: F,
          currentLabel: zt.currentLabel,
          isDisabled: zt.isDisabled
        };
        break;
      }
    }
    if (ee)
      return ee;
    const Ot = de ? F.label : !Ae && !Et ? F : "", Vt = {
      value: F,
      currentLabel: Ot
    };
    return e.multiple && (Vt.hitState = !1), Vt;
  }, le = () => {
    setTimeout(() => {
      const F = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((ee) => H.value.findIndex((de) => kt(de, F) === kt(ee, F)))) : t.hoverIndex = -1 : t.hoverIndex = H.value.findIndex((ee) => te(ee) === te(t.selected));
    }, 300);
  }, ve = () => {
    var F, ee;
    ge(), (ee = (F = i.value) == null ? void 0 : F.updatePopper) == null || ee.call(F), e.multiple && B();
  }, ge = () => {
    var F;
    t.inputWidth = (F = l.value) == null ? void 0 : F.$el.offsetWidth;
  }, we = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, C(t.query));
  }, ke = Zn(() => {
    we();
  }, I.value), De = Zn((F) => {
    C(F.target.value);
  }, I.value), Oe = (F) => {
    Ua(e.modelValue, F) || n.emit(ju, F);
  }, Re = (F) => Zh(F, (ee) => !t.disabledOptions.has(ee)), Ne = (F) => {
    if (F.code !== We.delete) {
      if (F.target.value.length <= 0 && !ot()) {
        const ee = e.modelValue.slice(), de = Re(ee);
        if (de < 0)
          return;
        ee.splice(de, 1), n.emit(vt, ee), Oe(ee);
      }
      F.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, Ve = (F, ee) => {
    const de = t.selected.indexOf(ee);
    if (de > -1 && !$.value) {
      const Ae = e.modelValue.slice();
      Ae.splice(de, 1), n.emit(vt, Ae), Oe(Ae), n.emit("remove-tag", ee.value);
    }
    F.stopPropagation(), be();
  }, Xe = (F) => {
    F.stopPropagation();
    const ee = e.multiple ? [] : "";
    if (!xt(ee))
      for (const de of t.selected)
        de.isDisabled && ee.push(de.value);
    n.emit(vt, ee), Oe(ee), t.hoverIndex = -1, t.visible = !1, n.emit("clear"), be();
  }, Je = (F) => {
    var ee;
    if (e.multiple) {
      const de = (e.modelValue || []).slice(), Ae = Ke(de, F.value);
      Ae > -1 ? de.splice(Ae, 1) : (e.multipleLimit <= 0 || de.length < e.multipleLimit) && de.push(F.value), n.emit(vt, de), Oe(de), F.created && (t.query = "", C(""), t.inputLength = 20), e.filterable && ((ee = s.value) == null || ee.focus());
    } else
      n.emit(vt, F.value), Oe(F.value), t.visible = !1;
    dt(), !t.visible && $e(() => {
      st(F);
    });
  }, Ke = (F = [], ee) => {
    if (!_t(ee))
      return F.indexOf(ee);
    const de = e.valueKey;
    let Ae = -1;
    return F.some((Et, Ot) => da(kt(Et, de)) === kt(ee, de) ? (Ae = Ot, !0) : !1), Ae;
  }, dt = () => {
    const F = s.value || l.value;
    F && (F == null || F.focus());
  }, st = (F) => {
    var ee, de, Ae, Et, Ot;
    const Vt = Array.isArray(F) ? F[0] : F;
    let Jt = null;
    if (Vt != null && Vt.value) {
      const zt = H.value.filter((lo) => lo.value === Vt.value);
      zt.length > 0 && (Jt = zt[0].$el);
    }
    if (i.value && Jt) {
      const zt = (Et = (Ae = (de = (ee = i.value) == null ? void 0 : ee.popperRef) == null ? void 0 : de.contentRef) == null ? void 0 : Ae.querySelector) == null ? void 0 : Et.call(Ae, `.${o.be("dropdown", "wrap")}`);
      zt && fg(zt, Jt);
    }
    (Ot = v.value) == null || Ot.handleScroll();
  }, et = (F) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(F.value, F), t.cachedOptions.set(F.value, F), F.disabled && t.disabledOptions.set(F.value, F);
  }, Ce = (F, ee) => {
    t.options.get(F) === ee && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(F));
  }, it = (F) => {
    F.code !== We.backspace && ot(!1), t.inputLength = s.value.value.length * 15 + 20, B();
  }, ot = (F) => {
    if (!Array.isArray(t.selected))
      return;
    const ee = Re(t.selected.map((Ae) => Ae.value)), de = t.selected[ee];
    if (de)
      return F === !0 || F === !1 ? (de.hitState = F, F) : (de.hitState = !de.hitState, de.hitState);
  }, ft = (F) => {
    const ee = F.target.value;
    if (F.type === "compositionend")
      t.isOnComposition = !1, $e(() => C(ee));
    else {
      const de = ee[ee.length - 1] || "";
      t.isOnComposition = !Yu(de);
    }
  }, lt = () => {
    $e(() => st(t.selected));
  }, re = (F) => {
    t.focused || ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), t.focused = !0, n.emit("focus", F));
  }, be = () => {
    var F, ee;
    t.visible ? (F = s.value || l.value) == null || F.focus() : (ee = l.value) == null || ee.focus();
  }, Be = () => {
    var F, ee, de;
    t.visible = !1, (F = l.value) == null || F.blur(), (de = (ee = r.value) == null ? void 0 : ee.blur) == null || de.call(ee);
  }, nt = (F) => {
    var ee, de, Ae;
    (ee = i.value) != null && ee.isFocusInsideContent(F) || (de = c.value) != null && de.isFocusInsideContent(F) || (Ae = d.value) != null && Ae.contains(F.relatedTarget) || (t.visible && fe(), t.focused = !1, n.emit("blur", F));
  }, ht = (F) => {
    Xe(F);
  }, fe = () => {
    t.visible = !1;
  }, V = (F) => {
    t.visible && (F.preventDefault(), F.stopPropagation(), t.visible = !1);
  }, J = (F) => {
    F && !t.mouseEnter || $.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!i.value || !i.value.isFocusInsideContent()) && (t.visible = !t.visible), be());
  }, G = () => {
    t.visible ? H.value[t.hoverIndex] && Je(H.value[t.hoverIndex]) : J();
  }, te = (F) => _t(F.value) ? kt(F.value, e.valueKey) : F.value, P = k(() => H.value.filter((F) => F.visible).every((F) => F.disabled)), se = k(() => e.multiple ? t.selected.slice(0, e.maxCollapseTags) : []), ye = k(() => e.multiple ? t.selected.slice(e.maxCollapseTags) : []), Ie = (F) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !P.value) {
      F === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : F === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const ee = H.value[t.hoverIndex];
      (ee.disabled === !0 || ee.states.groupDisabled === !0 || !ee.visible) && Ie(F), $e(() => st(m.value));
    }
  }, bt = () => {
    t.mouseEnter = !0;
  }, wn = () => {
    t.mouseEnter = !1;
  }, Fn = (F, ee) => {
    var de, Ae;
    Ve(F, ee), (Ae = (de = c.value) == null ? void 0 : de.updatePopper) == null || Ae.call(de);
  }, It = k(() => ({
    maxWidth: `${u(t.inputWidth) - 32 - (N.value ? 22 : 0)}px`,
    width: "100%"
  }));
  return {
    optionList: b,
    optionsArray: H,
    hoverOption: m,
    selectSize: j,
    handleResize: ve,
    debouncedOnInputChange: ke,
    debouncedQueryChange: De,
    deletePrevTag: Ne,
    deleteTag: Ve,
    deleteSelected: Xe,
    handleOptionSelect: Je,
    scrollToOption: st,
    readonly: y,
    resetInputHeight: B,
    showClose: T,
    iconComponent: E,
    iconReverse: x,
    showNewOption: U,
    collapseTagSize: W,
    setSelected: Y,
    managePlaceholder: M,
    selectDisabled: $,
    emptyText: D,
    toggleLastOptionHitState: ot,
    resetInputState: it,
    handleComposition: ft,
    onOptionCreate: et,
    onOptionDestroy: Ce,
    handleMenuEnter: lt,
    handleFocus: re,
    focus: be,
    blur: Be,
    handleBlur: nt,
    handleClearClick: ht,
    handleClose: fe,
    handleKeydownEscape: V,
    toggleMenu: J,
    selectOption: G,
    getValueKey: te,
    navigateOptions: Ie,
    handleDeleteTooltipTag: Fn,
    dropMenuVisible: R,
    queryChange: h,
    groupQueryChange: p,
    showTagList: se,
    collapseTagList: ye,
    selectTagsStyle: It,
    reference: l,
    input: s,
    iOSInput: r,
    tooltipRef: i,
    tagTooltipRef: c,
    tags: f,
    selectWrapper: d,
    scrollbar: v,
    handleMouseEnter: bt,
    handleMouseLeave: wn
  };
};
var rS = Q({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let a = [];
    function o(l, s) {
      if (l.length !== s.length)
        return !1;
      for (const [r] of l.entries())
        if (l[r] != s[r])
          return !1;
      return !0;
    }
    return () => {
      var l, s;
      const r = (l = t.default) == null ? void 0 : l.call(t), i = [];
      function c(f) {
        Array.isArray(f) && f.forEach((d) => {
          var v, m, h, p;
          const b = (v = (d == null ? void 0 : d.type) || {}) == null ? void 0 : v.name;
          b === "ElOptionGroup" ? c(!xt(d.children) && !Array.isArray(d.children) && pt((m = d.children) == null ? void 0 : m.default) ? (h = d.children) == null ? void 0 : h.default() : d.children) : b === "ElOption" ? i.push((p = d.props) == null ? void 0 : p.label) : Array.isArray(d.children) && c(d.children);
        });
      }
      return r.length && c((s = r[0]) == null ? void 0 : s.children), o(i, a) || (a = i, n("update-options", i)), r;
    };
  }
});
const Bi = "ElSelect", sS = Q({
  name: Bi,
  componentName: Bi,
  components: {
    ElInput: tn,
    ElSelectMenu: aS,
    ElOption: Gr,
    ElOptions: rS,
    ElTag: Bw,
    ElScrollbar: la,
    ElTooltip: oo,
    ElIcon: xe
  },
  directives: { ClickOutside: Qa },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: Xg
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: Boolean,
    maxCollapseTags: {
      type: Number,
      default: 1
    },
    teleported: Yr.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Xt,
      default: sl
    },
    fitInputWidth: Boolean,
    suffixIcon: {
      type: Xt,
      default: Or
    },
    tagType: { ...td.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: Boolean,
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: cl,
      default: "bottom-start"
    },
    ariaLabel: {
      type: String,
      default: void 0
    }
  },
  emits: [
    vt,
    ju,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = me("select"), a = me("input"), { t: o } = at(), l = Ca(), s = oS(e), {
      optionList: r,
      optionsArray: i,
      hoverOption: c,
      selectSize: f,
      readonly: d,
      handleResize: v,
      collapseTagSize: m,
      debouncedOnInputChange: h,
      debouncedQueryChange: p,
      deletePrevTag: b,
      deleteTag: g,
      deleteSelected: w,
      handleOptionSelect: S,
      scrollToOption: y,
      setSelected: $,
      resetInputHeight: T,
      managePlaceholder: E,
      showClose: x,
      selectDisabled: N,
      iconComponent: I,
      iconReverse: D,
      showNewOption: H,
      emptyText: Z,
      toggleLastOptionHitState: U,
      resetInputState: j,
      handleComposition: W,
      onOptionCreate: R,
      onOptionDestroy: B,
      handleMenuEnter: C,
      handleFocus: M,
      focus: z,
      blur: Y,
      handleBlur: ne,
      handleClearClick: le,
      handleClose: ve,
      handleKeydownEscape: ge,
      toggleMenu: we,
      selectOption: ke,
      getValueKey: De,
      navigateOptions: Oe,
      handleDeleteTooltipTag: Re,
      dropMenuVisible: Ne,
      reference: Ve,
      input: Xe,
      iOSInput: Je,
      tooltipRef: Ke,
      tagTooltipRef: dt,
      tags: st,
      selectWrapper: et,
      scrollbar: Ce,
      queryChange: it,
      groupQueryChange: ot,
      handleMouseEnter: ft,
      handleMouseLeave: lt,
      showTagList: re,
      collapseTagList: be,
      selectTagsStyle: Be
    } = lS(e, s, t), {
      inputWidth: nt,
      selected: ht,
      inputLength: fe,
      filteredOptionsCount: V,
      visible: J,
      selectedLabel: G,
      hoverIndex: te,
      query: P,
      inputHovering: se,
      currentPlaceholder: ye,
      menuVisibleOnFocus: Ie,
      isOnComposition: bt,
      options: wn,
      cachedOptions: Fn,
      optionsCount: It,
      prefixWidth: F
    } = _a(s), ee = k(() => {
      const Nt = [n.b()], Bn = u(f);
      return Bn && Nt.push(n.m(Bn)), e.disabled && Nt.push(n.m("disabled")), Nt;
    }), de = k(() => [
      n.e("tags"),
      n.is("disabled", u(N))
    ]), Ae = k(() => [
      n.b("tags-wrapper"),
      { "has-prefix": u(F) && u(ht).length }
    ]), Et = k(() => [
      n.e("input"),
      n.is(u(f)),
      n.is("disabled", u(N))
    ]), Ot = k(() => [
      n.e("input"),
      n.is(u(f)),
      n.em("input", "iOS")
    ]), Vt = k(() => [
      n.is("empty", !e.allowCreate && !!u(P) && u(V) === 0)
    ]), Jt = k(() => ({ maxWidth: `${u(nt) > 123 && u(ht).length > e.maxCollapseTags ? u(nt) - 123 : u(nt) - 75}px` })), zt = k(() => ({
      marginLeft: `${u(F)}px`,
      flexGrow: 1,
      width: `${u(fe) / (u(nt) - 32)}%`,
      maxWidth: `${u(nt) - 42}px`
    }));
    ct(ml, Rn({
      props: e,
      options: wn,
      optionsArray: i,
      cachedOptions: Fn,
      optionsCount: It,
      filteredOptionsCount: V,
      hoverIndex: te,
      handleOptionSelect: S,
      onOptionCreate: R,
      onOptionDestroy: B,
      selectWrapper: et,
      selected: ht,
      setSelected: $,
      queryChange: it,
      groupQueryChange: ot
    })), Ge(() => {
      s.cachedPlaceHolder = ye.value = e.placeholder || (() => o("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (ye.value = ""), Mn(et, v), e.remote && e.multiple && T(), $e(() => {
        const Nt = Ve.value && Ve.value.$el;
        if (Nt && (nt.value = Nt.getBoundingClientRect().width, t.slots.prefix)) {
          const Bn = Nt.querySelector(`.${a.e("prefix")}`);
          F.value = Math.max(Bn.getBoundingClientRect().width + 11, 30);
        }
      }), $();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(vt, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(vt, "");
    const lo = k(() => {
      var Nt, Bn;
      return (Bn = (Nt = Ke.value) == null ? void 0 : Nt.popperRef) == null ? void 0 : Bn.contentRef;
    });
    return {
      isIOS: ou,
      onOptionsRendered: (Nt) => {
        r.value = Nt;
      },
      prefixWidth: F,
      selectSize: f,
      readonly: d,
      handleResize: v,
      collapseTagSize: m,
      debouncedOnInputChange: h,
      debouncedQueryChange: p,
      deletePrevTag: b,
      deleteTag: g,
      handleDeleteTooltipTag: Re,
      deleteSelected: w,
      handleOptionSelect: S,
      scrollToOption: y,
      inputWidth: nt,
      selected: ht,
      inputLength: fe,
      filteredOptionsCount: V,
      visible: J,
      selectedLabel: G,
      hoverIndex: te,
      query: P,
      inputHovering: se,
      currentPlaceholder: ye,
      menuVisibleOnFocus: Ie,
      isOnComposition: bt,
      options: wn,
      resetInputHeight: T,
      managePlaceholder: E,
      showClose: x,
      selectDisabled: N,
      iconComponent: I,
      iconReverse: D,
      showNewOption: H,
      emptyText: Z,
      toggleLastOptionHitState: U,
      resetInputState: j,
      handleComposition: W,
      handleMenuEnter: C,
      handleFocus: M,
      focus: z,
      blur: Y,
      handleBlur: ne,
      handleClearClick: le,
      handleClose: ve,
      handleKeydownEscape: ge,
      toggleMenu: we,
      selectOption: ke,
      getValueKey: De,
      navigateOptions: Oe,
      dropMenuVisible: Ne,
      reference: Ve,
      input: Xe,
      iOSInput: Je,
      tooltipRef: Ke,
      popperPaneRef: lo,
      tags: st,
      selectWrapper: et,
      scrollbar: Ce,
      wrapperKls: ee,
      tagsKls: de,
      tagWrapperKls: Ae,
      inputKls: Et,
      iOSInputKls: Ot,
      scrollbarKls: Vt,
      selectTagsStyle: Be,
      nsSelect: n,
      tagTextStyle: Jt,
      inputStyle: zt,
      handleMouseEnter: ft,
      handleMouseLeave: lt,
      showTagList: re,
      collapseTagList: be,
      tagTooltipRef: dt,
      contentId: l,
      hoverOption: c
    };
  }
}), iS = ["disabled", "autocomplete", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label"], uS = ["disabled"], cS = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function dS(e, t, n, a, o, l) {
  const s = he("el-tag"), r = he("el-tooltip"), i = he("el-icon"), c = he("el-input"), f = he("el-option"), d = he("el-options"), v = he("el-scrollbar"), m = he("el-select-menu"), h = pr("click-outside");
  return je((_(), L("div", {
    ref: "selectWrapper",
    class: A(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...p) => e.handleMouseEnter && e.handleMouseEnter(...p)),
    onMouseleave: t[23] || (t[23] = (...p) => e.handleMouseLeave && e.handleMouseLeave(...p)),
    onClick: t[24] || (t[24] = Ze((...p) => e.toggleMenu && e.toggleMenu(...p), ["stop"]))
  }, [
    q(r, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: X(() => {
        var p, b;
        return [
          K("div", {
            class: "select-trigger",
            onMouseenter: t[20] || (t[20] = (g) => e.inputHovering = !0),
            onMouseleave: t[21] || (t[21] = (g) => e.inputHovering = !1)
          }, [
            e.multiple ? (_(), L("div", {
              key: 0,
              ref: "tags",
              tabindex: "-1",
              class: A(e.tagsKls),
              style: Fe(e.selectTagsStyle),
              onClick: t[15] || (t[15] = (...g) => e.focus && e.focus(...g))
            }, [
              e.collapseTags && e.selected.length ? (_(), oe(qn, {
                key: 0,
                onAfterLeave: e.resetInputHeight
              }, {
                default: X(() => [
                  K("span", {
                    class: A(e.tagWrapperKls)
                  }, [
                    (_(!0), L(Te, null, He(e.showTagList, (g) => (_(), oe(s, {
                      key: e.getValueKey(g),
                      closable: !e.selectDisabled && !g.isDisabled,
                      size: e.collapseTagSize,
                      hit: g.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (w) => e.deleteTag(w, g)
                    }, {
                      default: X(() => [
                        K("span", {
                          class: A(e.nsSelect.e("tags-text")),
                          style: Fe(e.tagTextStyle)
                        }, pe(g.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                    e.selected.length > e.maxCollapseTags ? (_(), oe(s, {
                      key: 0,
                      closable: !1,
                      size: e.collapseTagSize,
                      type: e.tagType,
                      "disable-transitions": ""
                    }, {
                      default: X(() => [
                        e.collapseTagsTooltip ? (_(), oe(r, {
                          key: 0,
                          ref: "tagTooltipRef",
                          disabled: e.dropMenuVisible,
                          "fallback-placements": ["bottom", "top", "right", "left"],
                          effect: e.effect,
                          placement: "bottom",
                          teleported: e.teleported
                        }, {
                          default: X(() => [
                            K("span", {
                              class: A(e.nsSelect.e("tags-text"))
                            }, "+ " + pe(e.selected.length - e.maxCollapseTags), 3)
                          ]),
                          content: X(() => [
                            K("div", {
                              class: A(e.nsSelect.e("collapse-tags"))
                            }, [
                              (_(!0), L(Te, null, He(e.collapseTagList, (g) => (_(), L("div", {
                                key: e.getValueKey(g),
                                class: A(e.nsSelect.e("collapse-tag"))
                              }, [
                                q(s, {
                                  class: "in-tooltip",
                                  closable: !e.selectDisabled && !g.isDisabled,
                                  size: e.collapseTagSize,
                                  hit: g.hitState,
                                  type: e.tagType,
                                  "disable-transitions": "",
                                  style: { margin: "2px" },
                                  onClose: (w) => e.handleDeleteTooltipTag(w, g)
                                }, {
                                  default: X(() => [
                                    K("span", {
                                      class: A(e.nsSelect.e("tags-text")),
                                      style: Fe({
                                        maxWidth: e.inputWidth - 75 + "px"
                                      })
                                    }, pe(g.currentLabel), 7)
                                  ]),
                                  _: 2
                                }, 1032, ["closable", "size", "hit", "type", "onClose"])
                              ], 2))), 128))
                            ], 2)
                          ]),
                          _: 1
                        }, 8, ["disabled", "effect", "teleported"])) : (_(), L("span", {
                          key: 1,
                          class: A(e.nsSelect.e("tags-text"))
                        }, "+ " + pe(e.selected.length - e.maxCollapseTags), 3))
                      ]),
                      _: 1
                    }, 8, ["size", "type"])) : ie("v-if", !0)
                  ], 2)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])) : ie("v-if", !0),
              e.collapseTags ? ie("v-if", !0) : (_(), oe(qn, {
                key: 1,
                onAfterLeave: e.resetInputHeight
              }, {
                default: X(() => [
                  K("span", {
                    class: A(e.tagWrapperKls),
                    style: Fe(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                  }, [
                    (_(!0), L(Te, null, He(e.selected, (g) => (_(), oe(s, {
                      key: e.getValueKey(g),
                      closable: !e.selectDisabled && !g.isDisabled,
                      size: e.collapseTagSize,
                      hit: g.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (w) => e.deleteTag(w, g)
                    }, {
                      default: X(() => [
                        K("span", {
                          class: A(e.nsSelect.e("tags-text")),
                          style: Fe({ maxWidth: e.inputWidth - 75 + "px" })
                        }, pe(g.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                  ], 6)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])),
              e.filterable && !e.selectDisabled ? je((_(), L("input", {
                key: 2,
                ref: "input",
                "onUpdate:modelValue": t[0] || (t[0] = (g) => e.query = g),
                type: "text",
                class: A(e.inputKls),
                disabled: e.selectDisabled,
                autocomplete: e.autocomplete,
                style: Fe(e.inputStyle),
                role: "combobox",
                "aria-activedescendant": ((p = e.hoverOption) == null ? void 0 : p.id) || "",
                "aria-controls": e.contentId,
                "aria-expanded": e.dropMenuVisible,
                "aria-label": e.ariaLabel,
                "aria-autocomplete": "none",
                "aria-haspopup": "listbox",
                onFocus: t[1] || (t[1] = (...g) => e.handleFocus && e.handleFocus(...g)),
                onBlur: t[2] || (t[2] = (...g) => e.handleBlur && e.handleBlur(...g)),
                onKeyup: t[3] || (t[3] = (...g) => e.managePlaceholder && e.managePlaceholder(...g)),
                onKeydown: [
                  t[4] || (t[4] = (...g) => e.resetInputState && e.resetInputState(...g)),
                  t[5] || (t[5] = ut(Ze((g) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                  t[6] || (t[6] = ut(Ze((g) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                  t[7] || (t[7] = ut((...g) => e.handleKeydownEscape && e.handleKeydownEscape(...g), ["esc"])),
                  t[8] || (t[8] = ut(Ze((...g) => e.selectOption && e.selectOption(...g), ["stop", "prevent"]), ["enter"])),
                  t[9] || (t[9] = ut((...g) => e.deletePrevTag && e.deletePrevTag(...g), ["delete"])),
                  t[10] || (t[10] = ut((g) => e.visible = !1, ["tab"]))
                ],
                onCompositionstart: t[11] || (t[11] = (...g) => e.handleComposition && e.handleComposition(...g)),
                onCompositionupdate: t[12] || (t[12] = (...g) => e.handleComposition && e.handleComposition(...g)),
                onCompositionend: t[13] || (t[13] = (...g) => e.handleComposition && e.handleComposition(...g)),
                onInput: t[14] || (t[14] = (...g) => e.debouncedQueryChange && e.debouncedQueryChange(...g))
              }, null, 46, iS)), [
                [zd, e.query]
              ]) : ie("v-if", !0)
            ], 6)) : ie("v-if", !0),
            e.isIOS && !e.multiple && e.filterable && e.readonly ? (_(), L("input", {
              key: 1,
              ref: "iOSInput",
              class: A(e.iOSInputKls),
              disabled: e.selectDisabled,
              type: "text"
            }, null, 10, uS)) : ie("v-if", !0),
            q(c, {
              id: e.id,
              ref: "reference",
              modelValue: e.selectedLabel,
              "onUpdate:modelValue": t[16] || (t[16] = (g) => e.selectedLabel = g),
              type: "text",
              placeholder: typeof e.currentPlaceholder == "function" ? e.currentPlaceholder() : e.currentPlaceholder,
              name: e.name,
              autocomplete: e.autocomplete,
              size: e.selectSize,
              disabled: e.selectDisabled,
              readonly: e.readonly,
              "validate-event": !1,
              class: A([e.nsSelect.is("focus", e.visible)]),
              tabindex: e.multiple && e.filterable ? -1 : void 0,
              role: "combobox",
              "aria-activedescendant": ((b = e.hoverOption) == null ? void 0 : b.id) || "",
              "aria-controls": e.contentId,
              "aria-expanded": e.dropMenuVisible,
              label: e.ariaLabel,
              "aria-autocomplete": "none",
              "aria-haspopup": "listbox",
              onFocus: e.handleFocus,
              onBlur: e.handleBlur,
              onInput: e.debouncedOnInputChange,
              onPaste: e.debouncedOnInputChange,
              onCompositionstart: e.handleComposition,
              onCompositionupdate: e.handleComposition,
              onCompositionend: e.handleComposition,
              onKeydown: [
                t[17] || (t[17] = ut(Ze((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
                t[18] || (t[18] = ut(Ze((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
                ut(Ze(e.selectOption, ["stop", "prevent"]), ["enter"]),
                ut(e.handleKeydownEscape, ["esc"]),
                t[19] || (t[19] = ut((g) => e.visible = !1, ["tab"]))
              ]
            }, vn({
              suffix: X(() => [
                e.iconComponent && !e.showClose ? (_(), oe(i, {
                  key: 0,
                  class: A([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
                }, {
                  default: X(() => [
                    (_(), oe(rt(e.iconComponent)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ie("v-if", !0),
                e.showClose && e.clearIcon ? (_(), oe(i, {
                  key: 1,
                  class: A([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                  onClick: e.handleClearClick
                }, {
                  default: X(() => [
                    (_(), oe(rt(e.clearIcon)))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])) : ie("v-if", !0)
              ]),
              _: 2
            }, [
              e.$slots.prefix ? {
                name: "prefix",
                fn: X(() => [
                  K("div", cS, [
                    ae(e.$slots, "prefix")
                  ])
                ])
              } : void 0
            ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "aria-activedescendant", "aria-controls", "aria-expanded", "label", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
          ], 32)
        ];
      }),
      content: X(() => [
        q(m, null, vn({
          default: X(() => [
            je(q(v, {
              id: e.contentId,
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: A(e.scrollbarKls),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical"
            }, {
              default: X(() => [
                e.showNewOption ? (_(), oe(f, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : ie("v-if", !0),
                q(d, { onUpdateOptions: e.onOptionsRendered }, {
                  default: X(() => [
                    ae(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label"]), [
              [$t, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (_(), L(Te, { key: 0 }, [
              e.$slots.empty ? ae(e.$slots, "empty", { key: 0 }) : (_(), L("p", {
                key: 1,
                class: A(e.nsSelect.be("dropdown", "empty"))
              }, pe(e.emptyText), 3))
            ], 64)) : ie("v-if", !0)
          ]),
          _: 2
        }, [
          e.$slots.header ? {
            name: "header",
            fn: X(() => [
              ae(e.$slots, "header")
            ])
          } : void 0,
          e.$slots.footer ? {
            name: "footer",
            fn: X(() => [
              ae(e.$slots, "footer")
            ])
          } : void 0
        ]), 1024)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [h, e.handleClose, e.popperPaneRef]
  ]);
}
var fS = /* @__PURE__ */ Me(sS, [["render", dS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const pS = Q({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = me("select"), n = O(!0), a = Le(), o = O([]);
    ct(gd, Rn({
      ..._a(e)
    }));
    const l = Se(ml);
    Ge(() => {
      o.value = s(a.subTree);
    });
    const s = (i) => {
      const c = [];
      return Array.isArray(i.children) && i.children.forEach((f) => {
        var d;
        f.type && f.type.name === "ElOption" && f.component && f.component.proxy ? c.push(f.component.proxy) : (d = f.children) != null && d.length && c.push(...s(f));
      }), c;
    }, { groupQueryChange: r } = da(l);
    return ue(r, () => {
      n.value = o.value.some((i) => i.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function vS(e, t, n, a, o, l) {
  return je((_(), L("ul", {
    class: A(e.ns.be("group", "wrap"))
  }, [
    K("li", {
      class: A(e.ns.be("group", "title"))
    }, pe(e.label), 3),
    K("li", null, [
      K("ul", {
        class: A(e.ns.b("group"))
      }, [
        ae(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [$t, e.visible]
  ]);
}
var bd = /* @__PURE__ */ Me(pS, [["render", vS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const mS = St(fS, {
  Option: Gr,
  OptionGroup: bd
}), hS = na(Gr);
na(bd);
const Xr = () => Se(hd, {}), gS = _e({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: ce(Array),
    default: () => en([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  teleported: Boolean,
  size: {
    type: String,
    values: Oa
  }
}), bS = Q({
  name: "ElPaginationSizes"
}), yS = /* @__PURE__ */ Q({
  ...bS,
  props: gS,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: a } = at(), o = me("pagination"), l = Xr(), s = O(n.pageSize);
    ue(() => n.pageSizes, (c, f) => {
      if (!Ua(c, f) && Array.isArray(c)) {
        const d = c.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", d);
      }
    }), ue(() => n.pageSize, (c) => {
      s.value = c;
    });
    const r = k(() => n.pageSizes);
    function i(c) {
      var f;
      c !== s.value && (s.value = c, (f = l.handleSizeChange) == null || f.call(l, Number(c)));
    }
    return (c, f) => (_(), L("span", {
      class: A(u(o).e("sizes"))
    }, [
      q(u(mS), {
        "model-value": s.value,
        disabled: c.disabled,
        "popper-class": c.popperClass,
        size: c.size,
        teleported: c.teleported,
        "validate-event": !1,
        onChange: i
      }, {
        default: X(() => [
          (_(!0), L(Te, null, He(u(r), (d) => (_(), oe(u(hS), {
            key: d,
            value: d,
            label: d + u(a)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size", "teleported"])
    ], 2));
  }
});
var wS = /* @__PURE__ */ Me(yS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const CS = _e({
  size: {
    type: String,
    values: Oa
  }
}), SS = ["disabled"], kS = Q({
  name: "ElPaginationJumper"
}), $S = /* @__PURE__ */ Q({
  ...kS,
  props: CS,
  setup(e) {
    const { t } = at(), n = me("pagination"), { pageCount: a, disabled: o, currentPage: l, changeEvent: s } = Xr(), r = O(), i = k(() => {
      var d;
      return (d = r.value) != null ? d : l == null ? void 0 : l.value;
    });
    function c(d) {
      r.value = d ? +d : "";
    }
    function f(d) {
      d = Math.trunc(+d), s == null || s(d), r.value = void 0;
    }
    return (d, v) => (_(), L("span", {
      class: A(u(n).e("jump")),
      disabled: u(o)
    }, [
      K("span", {
        class: A([u(n).e("goto")])
      }, pe(u(t)("el.pagination.goto")), 3),
      q(u(tn), {
        size: d.size,
        class: A([u(n).e("editor"), u(n).is("in-pagination")]),
        min: 1,
        max: u(a),
        disabled: u(o),
        "model-value": u(i),
        "validate-event": !1,
        label: u(t)("el.pagination.page"),
        type: "number",
        "onUpdate:modelValue": c,
        onChange: f
      }, null, 8, ["size", "class", "max", "disabled", "model-value", "label"]),
      K("span", {
        class: A([u(n).e("classifier")])
      }, pe(u(t)("el.pagination.pageClassifier")), 3)
    ], 10, SS));
  }
});
var _S = /* @__PURE__ */ Me($S, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const ES = _e({
  total: {
    type: Number,
    default: 1e3
  }
}), TS = ["disabled"], OS = Q({
  name: "ElPaginationTotal"
}), PS = /* @__PURE__ */ Q({
  ...OS,
  props: ES,
  setup(e) {
    const { t } = at(), n = me("pagination"), { disabled: a } = Xr();
    return (o, l) => (_(), L("span", {
      class: A(u(n).e("total")),
      disabled: u(a)
    }, pe(u(t)("el.pagination.total", {
      total: o.total
    })), 11, TS));
  }
});
var MS = /* @__PURE__ */ Me(PS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const xS = _e({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: !0
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
}), AS = ["onKeyup"], DS = ["aria-current", "aria-label", "tabindex"], IS = ["tabindex", "aria-label"], NS = ["aria-current", "aria-label", "tabindex"], RS = ["tabindex", "aria-label"], LS = ["aria-current", "aria-label", "tabindex"], FS = Q({
  name: "ElPaginationPager"
}), BS = /* @__PURE__ */ Q({
  ...FS,
  props: xS,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, a = me("pager"), o = me("icon"), { t: l } = at(), s = O(!1), r = O(!1), i = O(!1), c = O(!1), f = O(!1), d = O(!1), v = k(() => {
      const y = n.pagerCount, $ = (y - 1) / 2, T = Number(n.currentPage), E = Number(n.pageCount);
      let x = !1, N = !1;
      E > y && (T > y - $ && (x = !0), T < E - $ && (N = !0));
      const I = [];
      if (x && !N) {
        const D = E - (y - 2);
        for (let H = D; H < E; H++)
          I.push(H);
      } else if (!x && N)
        for (let D = 2; D < y; D++)
          I.push(D);
      else if (x && N) {
        const D = Math.floor(y / 2) - 1;
        for (let H = T - D; H <= T + D; H++)
          I.push(H);
      } else
        for (let D = 2; D < E; D++)
          I.push(D);
      return I;
    }), m = k(() => [
      "more",
      "btn-quickprev",
      o.b(),
      a.is("disabled", n.disabled)
    ]), h = k(() => [
      "more",
      "btn-quicknext",
      o.b(),
      a.is("disabled", n.disabled)
    ]), p = k(() => n.disabled ? -1 : 0);
    Mt(() => {
      const y = (n.pagerCount - 1) / 2;
      s.value = !1, r.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - y && (s.value = !0), n.currentPage < n.pageCount - y && (r.value = !0));
    });
    function b(y = !1) {
      n.disabled || (y ? i.value = !0 : c.value = !0);
    }
    function g(y = !1) {
      y ? f.value = !0 : d.value = !0;
    }
    function w(y) {
      const $ = y.target;
      if ($.tagName.toLowerCase() === "li" && Array.from($.classList).includes("number")) {
        const T = Number($.textContent);
        T !== n.currentPage && t("change", T);
      } else
        $.tagName.toLowerCase() === "li" && Array.from($.classList).includes("more") && S(y);
    }
    function S(y) {
      const $ = y.target;
      if ($.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let T = Number($.textContent);
      const E = n.pageCount, x = n.currentPage, N = n.pagerCount - 2;
      $.className.includes("more") && ($.className.includes("quickprev") ? T = x - N : $.className.includes("quicknext") && (T = x + N)), Number.isNaN(+T) || (T < 1 && (T = 1), T > E && (T = E)), T !== x && t("change", T);
    }
    return (y, $) => (_(), L("ul", {
      class: A(u(a).b()),
      onClick: S,
      onKeyup: ut(w, ["enter"])
    }, [
      y.pageCount > 0 ? (_(), L("li", {
        key: 0,
        class: A([[
          u(a).is("active", y.currentPage === 1),
          u(a).is("disabled", y.disabled)
        ], "number"]),
        "aria-current": y.currentPage === 1,
        "aria-label": u(l)("el.pagination.currentPage", { pager: 1 }),
        tabindex: u(p)
      }, " 1 ", 10, DS)) : ie("v-if", !0),
      s.value ? (_(), L("li", {
        key: 1,
        class: A(u(m)),
        tabindex: u(p),
        "aria-label": u(l)("el.pagination.prevPages", { pager: y.pagerCount - 2 }),
        onMouseenter: $[0] || ($[0] = (T) => b(!0)),
        onMouseleave: $[1] || ($[1] = (T) => i.value = !1),
        onFocus: $[2] || ($[2] = (T) => g(!0)),
        onBlur: $[3] || ($[3] = (T) => f.value = !1)
      }, [
        (i.value || f.value) && !y.disabled ? (_(), oe(u(va), { key: 0 })) : (_(), oe(u(Us), { key: 1 }))
      ], 42, IS)) : ie("v-if", !0),
      (_(!0), L(Te, null, He(u(v), (T) => (_(), L("li", {
        key: T,
        class: A([[
          u(a).is("active", y.currentPage === T),
          u(a).is("disabled", y.disabled)
        ], "number"]),
        "aria-current": y.currentPage === T,
        "aria-label": u(l)("el.pagination.currentPage", { pager: T }),
        tabindex: u(p)
      }, pe(T), 11, NS))), 128)),
      r.value ? (_(), L("li", {
        key: 2,
        class: A(u(h)),
        tabindex: u(p),
        "aria-label": u(l)("el.pagination.nextPages", { pager: y.pagerCount - 2 }),
        onMouseenter: $[4] || ($[4] = (T) => b()),
        onMouseleave: $[5] || ($[5] = (T) => c.value = !1),
        onFocus: $[6] || ($[6] = (T) => g()),
        onBlur: $[7] || ($[7] = (T) => d.value = !1)
      }, [
        (c.value || d.value) && !y.disabled ? (_(), oe(u(ma), { key: 0 })) : (_(), oe(u(Us), { key: 1 }))
      ], 42, RS)) : ie("v-if", !0),
      y.pageCount > 1 ? (_(), L("li", {
        key: 3,
        class: A([[
          u(a).is("active", y.currentPage === y.pageCount),
          u(a).is("disabled", y.disabled)
        ], "number"]),
        "aria-current": y.currentPage === y.pageCount,
        "aria-label": u(l)("el.pagination.currentPage", { pager: y.pageCount }),
        tabindex: u(p)
      }, pe(y.pageCount), 11, LS)) : ie("v-if", !0)
    ], 42, AS));
  }
});
var VS = /* @__PURE__ */ Me(BS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const Tt = (e) => typeof e != "number", zS = _e({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => Ye(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  currentPage: Number,
  defaultCurrentPage: Number,
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: ce(Array),
    default: () => en([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  prevIcon: {
    type: Xt,
    default: () => qa
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: Xt,
    default: () => On
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), HS = {
  "update:current-page": (e) => Ye(e),
  "update:page-size": (e) => Ye(e),
  "size-change": (e) => Ye(e),
  "current-change": (e) => Ye(e),
  "prev-click": (e) => Ye(e),
  "next-click": (e) => Ye(e)
}, Vi = "ElPagination";
var KS = Q({
  name: Vi,
  props: zS,
  emits: HS,
  setup(e, { emit: t, slots: n }) {
    const { t: a } = at(), o = me("pagination"), l = Le().vnode.props || {}, s = "onUpdate:currentPage" in l || "onUpdate:current-page" in l || "onCurrentChange" in l, r = "onUpdate:pageSize" in l || "onUpdate:page-size" in l || "onSizeChange" in l, i = k(() => {
      if (Tt(e.total) && Tt(e.pageCount) || !Tt(e.currentPage) && !s)
        return !1;
      if (e.layout.includes("sizes")) {
        if (Tt(e.pageCount)) {
          if (!Tt(e.total) && !Tt(e.pageSize) && !r)
            return !1;
        } else if (!r)
          return !1;
      }
      return !0;
    }), c = O(Tt(e.defaultPageSize) ? 10 : e.defaultPageSize), f = O(Tt(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), d = k({
      get() {
        return Tt(e.pageSize) ? c.value : e.pageSize;
      },
      set(S) {
        Tt(e.pageSize) && (c.value = S), r && (t("update:page-size", S), t("size-change", S));
      }
    }), v = k(() => {
      let S = 0;
      return Tt(e.pageCount) ? Tt(e.total) || (S = Math.max(1, Math.ceil(e.total / d.value))) : S = e.pageCount, S;
    }), m = k({
      get() {
        return Tt(e.currentPage) ? f.value : e.currentPage;
      },
      set(S) {
        let y = S;
        S < 1 ? y = 1 : S > v.value && (y = v.value), Tt(e.currentPage) && (f.value = y), s && (t("update:current-page", y), t("current-change", y));
      }
    });
    ue(v, (S) => {
      m.value > S && (m.value = S);
    });
    function h(S) {
      m.value = S;
    }
    function p(S) {
      d.value = S;
      const y = v.value;
      m.value > y && (m.value = y);
    }
    function b() {
      e.disabled || (m.value -= 1, t("prev-click", m.value));
    }
    function g() {
      e.disabled || (m.value += 1, t("next-click", m.value));
    }
    function w(S, y) {
      S && (S.props || (S.props = {}), S.props.class = [S.props.class, y].join(" "));
    }
    return ct(hd, {
      pageCount: v,
      disabled: k(() => e.disabled),
      currentPage: m,
      changeEvent: h,
      handleSizeChange: p
    }), () => {
      var S, y;
      if (!i.value)
        return mt(Vi, a("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && v.value <= 1)
        return null;
      const $ = [], T = [], E = Pe("div", { class: o.e("rightwrapper") }, T), x = {
        prev: Pe(WC, {
          disabled: e.disabled,
          currentPage: m.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: b
        }),
        jumper: Pe(_S, {
          size: e.small ? "small" : "default"
        }),
        pager: Pe(VS, {
          currentPage: m.value,
          pageCount: v.value,
          pagerCount: e.pagerCount,
          onChange: h,
          disabled: e.disabled
        }),
        next: Pe(XC, {
          disabled: e.disabled,
          currentPage: m.value,
          pageCount: v.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: g
        }),
        sizes: Pe(wS, {
          pageSize: d.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          teleported: e.teleported,
          size: e.small ? "small" : "default"
        }),
        slot: (y = (S = n == null ? void 0 : n.default) == null ? void 0 : S.call(n)) != null ? y : null,
        total: Pe(MS, { total: Tt(e.total) ? 0 : e.total })
      }, N = e.layout.split(",").map((D) => D.trim());
      let I = !1;
      return N.forEach((D) => {
        if (D === "->") {
          I = !0;
          return;
        }
        I ? T.push(x[D]) : $.push(x[D]);
      }), w($[0], o.is("first")), w($[$.length - 1], o.is("last")), I && T.length > 0 && (w(T[0], o.is("first")), w(T[T.length - 1], o.is("last")), $.push(E)), Pe("div", {
        class: [
          o.b(),
          o.is("background", e.background),
          {
            [o.m("small")]: e.small
          }
        ]
      }, $);
    };
  }
});
const WS = St(KS), jS = _e({
  prefixCls: {
    type: String
  }
}), zi = Q({
  name: "ElSpaceItem",
  props: jS,
  setup(e, { slots: t }) {
    const n = me("space"), a = k(() => `${e.prefixCls || n.b()}__item`);
    return () => Pe("div", { class: a.value }, ae(t, "default"));
  }
}), Hi = {
  small: 8,
  default: 12,
  large: 16
};
function YS(e) {
  const t = me("space"), n = k(() => [t.b(), t.m(e.direction), e.class]), a = O(0), o = O(0), l = k(() => {
    const r = e.wrap || e.fill ? { flexWrap: "wrap", marginBottom: `-${o.value}px` } : {}, i = {
      alignItems: e.alignment
    };
    return [r, i, e.style];
  }), s = k(() => {
    const r = {
      paddingBottom: `${o.value}px`,
      marginRight: `${a.value}px`
    }, i = e.fill ? { flexGrow: 1, minWidth: `${e.fillRatio}%` } : {};
    return [r, i];
  });
  return Mt(() => {
    const { size: r = "small", wrap: i, direction: c, fill: f } = e;
    if (ze(r)) {
      const [d = 0, v = 0] = r;
      a.value = d, o.value = v;
    } else {
      let d;
      Ye(r) ? d = r : d = Hi[r || "small"] || Hi.small, (i || f) && c === "horizontal" ? a.value = o.value = d : c === "horizontal" ? (a.value = d, o.value = 0) : (o.value = d, a.value = 0);
    }
  }), {
    classes: n,
    containerStyle: l,
    itemStyle: s
  };
}
const US = _e({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  class: {
    type: ce([
      String,
      Object,
      Array
    ]),
    default: ""
  },
  style: {
    type: ce([String, Array, Object]),
    default: ""
  },
  alignment: {
    type: ce(String),
    default: "center"
  },
  prefixCls: {
    type: String
  },
  spacer: {
    type: ce([Object, String, Number, Array]),
    default: null,
    validator: (e) => Pn(e) || Ye(e) || xt(e)
  },
  wrap: Boolean,
  fill: Boolean,
  fillRatio: {
    type: Number,
    default: 100
  },
  size: {
    type: [String, Array, Number],
    values: Oa,
    validator: (e) => Ye(e) || ze(e) && e.length === 2 && e.every(Ye)
  }
}), qS = Q({
  name: "ElSpace",
  props: US,
  setup(e, { slots: t }) {
    const { classes: n, containerStyle: a, itemStyle: o } = YS(e);
    function l(s, r = "", i = []) {
      const { prefixCls: c } = e;
      return s.forEach((f, d) => {
        zl(f) ? ze(f.children) && f.children.forEach((v, m) => {
          zl(v) && ze(v.children) ? l(v.children, `${r + m}-`, i) : i.push(q(zi, {
            style: o.value,
            prefixCls: c,
            key: `nested-${r + m}`
          }, {
            default: () => [v]
          }, Ht.PROPS | Ht.STYLE, ["style", "prefixCls"]));
        }) : Qg(f) && i.push(q(zi, {
          style: o.value,
          prefixCls: c,
          key: `LoopKey${r + d}`
        }, {
          default: () => [f]
        }, Ht.PROPS | Ht.STYLE, ["style", "prefixCls"]));
      }), i;
    }
    return () => {
      var s;
      const { spacer: r, direction: i } = e, c = ae(t, "default", { key: 0 }, () => []);
      if (((s = c.children) != null ? s : []).length === 0)
        return null;
      if (ze(c.children)) {
        let f = l(c.children);
        if (r) {
          const d = f.length - 1;
          f = f.reduce((v, m, h) => {
            const p = [...v, m];
            return h !== d && p.push(q("span", {
              style: [
                o.value,
                i === "vertical" ? "width: 100%" : null
              ],
              key: h
            }, [
              Pn(r) ? r : Qe(r, Ht.TEXT)
            ], Ht.STYLE)), p;
          }, []);
        }
        return q("div", {
          class: n.value,
          style: a.value
        }, f, Ht.STYLE | Ht.CLASS);
      }
      return c.children;
    };
  }
}), GS = St(qS);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var XS = /["'&<>]/, ZS = QS;
function QS(e) {
  var t = "" + e, n = XS.exec(t);
  if (!n)
    return t;
  var a, o = "", l = 0, s = 0;
  for (l = n.index; l < t.length; l++) {
    switch (t.charCodeAt(l)) {
      case 34:
        a = "&quot;";
        break;
      case 38:
        a = "&amp;";
        break;
      case 39:
        a = "&#39;";
        break;
      case 60:
        a = "&lt;";
        break;
      case 62:
        a = "&gt;";
        break;
      default:
        continue;
    }
    s !== l && (o += t.substring(s, l)), s = l + 1, o += a;
  }
  return s !== l ? o + t.substring(s, l) : o;
}
const JS = /* @__PURE__ */ rn(ZS), xl = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, ek = function(e, t, n, a, o) {
  if (!t && !a && (!o || Array.isArray(o) && !o.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const l = a ? null : function(r, i) {
    return o ? (Array.isArray(o) || (o = [o]), o.map((c) => typeof c == "string" ? kt(r, c) : c(r, i, e))) : (t !== "$key" && _t(r) && "$value" in r && (r = r.$value), [_t(r) ? kt(r, t) : r]);
  }, s = function(r, i) {
    if (a)
      return a(r.value, i.value);
    for (let c = 0, f = r.key.length; c < f; c++) {
      if (r.key[c] < i.key[c])
        return -1;
      if (r.key[c] > i.key[c])
        return 1;
    }
    return 0;
  };
  return e.map((r, i) => ({
    value: r,
    index: i,
    key: l ? l(r, i) : null
  })).sort((r, i) => {
    let c = s(r, i);
    return c || (c = r.index - i.index), c * +n;
  }).map((r) => r.value);
}, yd = function(e, t) {
  let n = null;
  return e.columns.forEach((a) => {
    a.id === t && (n = a);
  }), n;
}, tk = function(e, t) {
  let n = null;
  for (let a = 0; a < e.columns.length; a++) {
    const o = e.columns[a];
    if (o.columnKey === t) {
      n = o;
      break;
    }
  }
  return n || Ta("ElTable", `No column matching with column-key: ${t}`), n;
}, Ki = function(e, t, n) {
  const a = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return a ? yd(e, a[0]) : null;
}, yt = (e, t) => {
  if (!e)
    throw new Error("Row is required when get row identity");
  if (typeof t == "string") {
    if (!t.includes("."))
      return `${e[t]}`;
    const n = t.split(".");
    let a = e;
    for (const o of n)
      a = a[o];
    return `${a}`;
  } else if (typeof t == "function")
    return t.call(null, e);
}, Wn = function(e, t) {
  const n = {};
  return (e || []).forEach((a, o) => {
    n[yt(a, t)] = { row: a, index: o };
  }), n;
};
function nk(e, t) {
  const n = {};
  let a;
  for (a in e)
    n[a] = e[a];
  for (a in t)
    if (Gn(t, a)) {
      const o = t[a];
      typeof o < "u" && (n[a] = o);
    }
  return n;
}
function Zr(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function wd(e) {
  return e === "" || e !== void 0 && (e = Zr(e), Number.isNaN(e) && (e = 80)), e;
}
function ak(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function ok(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...a) => t(n(...a)));
}
function Fa(e, t, n) {
  let a = !1;
  const o = e.indexOf(t), l = o !== -1, s = (r) => {
    r === "add" ? e.push(t) : e.splice(o, 1), a = !0, ze(t.children) && t.children.forEach((i) => {
      Fa(e, i, n ?? !l);
    });
  };
  return Qn(n) ? n && !l ? s("add") : !n && l && s("remove") : s(l ? "remove" : "add"), a;
}
function lk(e, t, n = "children", a = "hasChildren") {
  const o = (s) => !(Array.isArray(s) && s.length);
  function l(s, r, i) {
    t(s, r, i), r.forEach((c) => {
      if (c[a]) {
        t(c, null, i + 1);
        return;
      }
      const f = c[n];
      o(f) || l(c, f, i + 1);
    });
  }
  e.forEach((s) => {
    if (s[a]) {
      t(s, null, 0);
      return;
    }
    const r = s[n];
    o(r) || l(s, r, 0);
  });
}
let cn;
function rk(e, t, n, a, o) {
  o = Nu({
    enterable: !0,
    showArrow: !0
  }, o);
  const l = e == null ? void 0 : e.dataset.prefix, s = e == null ? void 0 : e.querySelector(`.${l}-scrollbar__wrap`);
  function r() {
    const b = o.effect === "light", g = document.createElement("div");
    return g.className = [
      `${l}-popper`,
      b ? "is-light" : "is-dark",
      o.popperClass || ""
    ].join(" "), n = JS(n), g.innerHTML = n, g.style.zIndex = String(a()), e == null || e.appendChild(g), g;
  }
  function i() {
    const b = document.createElement("div");
    return b.className = `${l}-popper__arrow`, b;
  }
  function c() {
    f && f.update();
  }
  cn == null || cn(), cn = () => {
    try {
      f && f.destroy(), m && (e == null || e.removeChild(m)), t.removeEventListener("mouseenter", d), t.removeEventListener("mouseleave", v), s == null || s.removeEventListener("scroll", cn), cn = void 0;
    } catch {
    }
  };
  let f = null, d = c, v = cn;
  o.enterable && ({ onOpen: d, onClose: v } = vc({
    showAfter: o.showAfter,
    hideAfter: o.hideAfter,
    open: c,
    close: cn
  }));
  const m = r();
  m.onmouseenter = d, m.onmouseleave = v;
  const h = [];
  if (o.offset && h.push({
    name: "offset",
    options: {
      offset: [0, o.offset]
    }
  }), o.showArrow) {
    const b = m.appendChild(i());
    h.push({
      name: "arrow",
      options: {
        element: b,
        padding: 10
      }
    });
  }
  const p = o.popperOptions || {};
  return f = cc(t, m, {
    placement: o.placement || "top",
    strategy: "fixed",
    ...p,
    modifiers: p.modifiers ? h.concat(p.modifiers) : h
  }), t.addEventListener("mouseenter", d), t.addEventListener("mouseleave", v), s == null || s.addEventListener("scroll", cn), f;
}
function Cd(e) {
  return e.children ? eg(e.children, Cd) : [e];
}
function Wi(e, t) {
  return e + t.colSpan;
}
const Sd = (e, t, n, a) => {
  let o = 0, l = e;
  const s = n.states.columns.value;
  if (a) {
    const i = Cd(a[e]);
    o = s.slice(0, s.indexOf(i[0])).reduce(Wi, 0), l = o + i.reduce(Wi, 0) - 1;
  } else
    o = e;
  let r;
  switch (t) {
    case "left":
      l < n.states.fixedLeafColumnsLength.value && (r = "left");
      break;
    case "right":
      o >= s.length - n.states.rightFixedLeafColumnsLength.value && (r = "right");
      break;
    default:
      l < n.states.fixedLeafColumnsLength.value ? r = "left" : o >= s.length - n.states.rightFixedLeafColumnsLength.value && (r = "right");
  }
  return r ? {
    direction: r,
    start: o,
    after: l
  } : {};
}, Qr = (e, t, n, a, o, l = 0) => {
  const s = [], { direction: r, start: i, after: c } = Sd(t, n, a, o);
  if (r) {
    const f = r === "left";
    s.push(`${e}-fixed-column--${r}`), f && c + l === a.states.fixedLeafColumnsLength.value - 1 ? s.push("is-last-column") : !f && i - l === a.states.columns.value.length - a.states.rightFixedLeafColumnsLength.value && s.push("is-first-column");
  }
  return s;
};
function ji(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const Jr = (e, t, n, a) => {
  const {
    direction: o,
    start: l = 0,
    after: s = 0
  } = Sd(e, t, n, a);
  if (!o)
    return;
  const r = {}, i = o === "left", c = n.states.columns.value;
  return i ? r.left = c.slice(0, l).reduce(ji, 0) : r.right = c.slice(s + 1).reverse().reduce(ji, 0), r;
}, ka = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function sk(e) {
  const t = Le(), n = O(!1), a = O([]);
  return {
    updateExpandRows: () => {
      const i = e.data.value || [], c = e.rowKey.value;
      if (n.value)
        a.value = i.slice();
      else if (c) {
        const f = Wn(a.value, c);
        a.value = i.reduce((d, v) => {
          const m = yt(v, c);
          return f[m] && d.push(v), d;
        }, []);
      } else
        a.value = [];
    },
    toggleRowExpansion: (i, c) => {
      Fa(a.value, i, c) && t.emit("expand-change", i, a.value.slice());
    },
    setExpandRowKeys: (i) => {
      t.store.assertRowKey();
      const c = e.data.value || [], f = e.rowKey.value, d = Wn(c, f);
      a.value = i.reduce((v, m) => {
        const h = d[m];
        return h && v.push(h.row), v;
      }, []);
    },
    isRowExpanded: (i) => {
      const c = e.rowKey.value;
      return c ? !!Wn(a.value, c)[yt(i, c)] : a.value.includes(i);
    },
    states: {
      expandRows: a,
      defaultExpandAll: n
    }
  };
}
function ik(e) {
  const t = Le(), n = O(null), a = O(null), o = (c) => {
    t.store.assertRowKey(), n.value = c, s(c);
  }, l = () => {
    n.value = null;
  }, s = (c) => {
    const { data: f, rowKey: d } = e;
    let v = null;
    d.value && (v = (u(f) || []).find((m) => yt(m, d.value) === c)), a.value = v, t.emit("current-change", a.value, null);
  };
  return {
    setCurrentRowKey: o,
    restoreCurrentRowKey: l,
    setCurrentRowByKey: s,
    updateCurrentRow: (c) => {
      const f = a.value;
      if (c && c !== f) {
        a.value = c, t.emit("current-change", a.value, f);
        return;
      }
      !c && f && (a.value = null, t.emit("current-change", null, f));
    },
    updateCurrentRowData: () => {
      const c = e.rowKey.value, f = e.data.value || [], d = a.value;
      if (!f.includes(d) && d) {
        if (c) {
          const v = yt(d, c);
          s(v);
        } else
          a.value = null;
        a.value === null && t.emit("current-change", null, d);
      } else
        n.value && (s(n.value), l());
    },
    states: {
      _currentRowKey: n,
      currentRow: a
    }
  };
}
function uk(e) {
  const t = O([]), n = O({}), a = O(16), o = O(!1), l = O({}), s = O("hasChildren"), r = O("children"), i = Le(), c = k(() => {
    if (!e.rowKey.value)
      return {};
    const g = e.data.value || [];
    return d(g);
  }), f = k(() => {
    const g = e.rowKey.value, w = Object.keys(l.value), S = {};
    return w.length && w.forEach((y) => {
      if (l.value[y].length) {
        const $ = { children: [] };
        l.value[y].forEach((T) => {
          const E = yt(T, g);
          $.children.push(E), T[s.value] && !S[E] && (S[E] = { children: [] });
        }), S[y] = $;
      }
    }), S;
  }), d = (g) => {
    const w = e.rowKey.value, S = {};
    return lk(g, (y, $, T) => {
      const E = yt(y, w);
      Array.isArray($) ? S[E] = {
        children: $.map((x) => yt(x, w)),
        level: T
      } : o.value && (S[E] = {
        children: [],
        lazy: !0,
        level: T
      });
    }, r.value, s.value), S;
  }, v = (g = !1, w = ((S) => (S = i.store) == null ? void 0 : S.states.defaultExpandAll.value)()) => {
    var S;
    const y = c.value, $ = f.value, T = Object.keys(y), E = {};
    if (T.length) {
      const x = u(n), N = [], I = (H, Z) => {
        if (g)
          return t.value ? w || t.value.includes(Z) : !!(w || H != null && H.expanded);
        {
          const U = w || t.value && t.value.includes(Z);
          return !!(H != null && H.expanded || U);
        }
      };
      T.forEach((H) => {
        const Z = x[H], U = { ...y[H] };
        if (U.expanded = I(Z, H), U.lazy) {
          const { loaded: j = !1, loading: W = !1 } = Z || {};
          U.loaded = !!j, U.loading = !!W, N.push(H);
        }
        E[H] = U;
      });
      const D = Object.keys($);
      o.value && D.length && N.length && D.forEach((H) => {
        const Z = x[H], U = $[H].children;
        if (N.includes(H)) {
          if (E[H].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          E[H].children = U;
        } else {
          const { loaded: j = !1, loading: W = !1 } = Z || {};
          E[H] = {
            lazy: !0,
            loaded: !!j,
            loading: !!W,
            expanded: I(Z, H),
            children: U,
            level: ""
          };
        }
      });
    }
    n.value = E, (S = i.store) == null || S.updateTableScrollY();
  };
  ue(() => t.value, () => {
    v(!0);
  }), ue(() => c.value, () => {
    v();
  }), ue(() => f.value, () => {
    v();
  });
  const m = (g) => {
    t.value = g, v();
  }, h = (g, w) => {
    i.store.assertRowKey();
    const S = e.rowKey.value, y = yt(g, S), $ = y && n.value[y];
    if (y && $ && "expanded" in $) {
      const T = $.expanded;
      w = typeof w > "u" ? !$.expanded : w, n.value[y].expanded = w, T !== w && i.emit("expand-change", g, w), i.store.updateTableScrollY();
    }
  }, p = (g) => {
    i.store.assertRowKey();
    const w = e.rowKey.value, S = yt(g, w), y = n.value[S];
    o.value && y && "loaded" in y && !y.loaded ? b(g, S, y) : h(g, void 0);
  }, b = (g, w, S) => {
    const { load: y } = i.props;
    y && !n.value[w].loaded && (n.value[w].loading = !0, y(g, S, ($) => {
      if (!Array.isArray($))
        throw new TypeError("[ElTable] data must be an array");
      n.value[w].loading = !1, n.value[w].loaded = !0, n.value[w].expanded = !0, $.length && (l.value[w] = $), i.emit("expand-change", g, !0);
    }));
  };
  return {
    loadData: b,
    loadOrToggle: p,
    toggleTreeExpansion: h,
    updateTreeExpandKeys: m,
    updateTreeData: v,
    normalize: d,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: a,
      lazy: o,
      lazyTreeNodeMap: l,
      lazyColumnIdentifier: s,
      childrenColumnName: r
    }
  };
}
const ck = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : ek(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, Eo = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children && n.children.length > 0 ? t.push.apply(t, Eo(n.children)) : t.push(n);
  }), t;
};
function dk() {
  var e;
  const t = Le(), { size: n } = _a((e = t.proxy) == null ? void 0 : e.$props), a = O(null), o = O([]), l = O([]), s = O(!1), r = O([]), i = O([]), c = O([]), f = O([]), d = O([]), v = O([]), m = O([]), h = O([]), p = [], b = O(0), g = O(0), w = O(0), S = O(!1), y = O([]), $ = O(!1), T = O(!1), E = O(null), x = O({}), N = O(null), I = O(null), D = O(null), H = O(null), Z = O(null);
  ue(o, () => t.state && R(!1), {
    deep: !0
  });
  const U = () => {
    if (!a.value)
      throw new Error("[ElTable] prop row-key is required");
  }, j = (fe) => {
    var V;
    (V = fe.children) == null || V.forEach((J) => {
      J.fixed = fe.fixed, j(J);
    });
  }, W = () => {
    r.value.forEach((te) => {
      j(te);
    }), f.value = r.value.filter((te) => te.fixed === !0 || te.fixed === "left"), d.value = r.value.filter((te) => te.fixed === "right"), f.value.length > 0 && r.value[0] && r.value[0].type === "selection" && !r.value[0].fixed && (r.value[0].fixed = !0, f.value.unshift(r.value[0]));
    const fe = r.value.filter((te) => !te.fixed);
    i.value = [].concat(f.value).concat(fe).concat(d.value);
    const V = Eo(fe), J = Eo(f.value), G = Eo(d.value);
    b.value = V.length, g.value = J.length, w.value = G.length, c.value = [].concat(J).concat(V).concat(G), s.value = f.value.length > 0 || d.value.length > 0;
  }, R = (fe, V = !1) => {
    fe && W(), V ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, B = (fe) => y.value.includes(fe), C = () => {
    S.value = !1, y.value.length && (y.value = [], t.emit("selection-change", []));
  }, M = () => {
    let fe;
    if (a.value) {
      fe = [];
      const V = Wn(y.value, a.value), J = Wn(o.value, a.value);
      for (const G in V)
        Gn(V, G) && !J[G] && fe.push(V[G].row);
    } else
      fe = y.value.filter((V) => !o.value.includes(V));
    if (fe.length) {
      const V = y.value.filter((J) => !fe.includes(J));
      y.value = V, t.emit("selection-change", V.slice());
    }
  }, z = () => (y.value || []).slice(), Y = (fe, V = void 0, J = !0) => {
    if (Fa(y.value, fe, V)) {
      const te = (y.value || []).slice();
      J && t.emit("select", te, fe), t.emit("selection-change", te);
    }
  }, ne = () => {
    var fe, V;
    const J = T.value ? !S.value : !(S.value || y.value.length);
    S.value = J;
    let G = !1, te = 0;
    const P = (V = (fe = t == null ? void 0 : t.store) == null ? void 0 : fe.states) == null ? void 0 : V.rowKey.value;
    o.value.forEach((se, ye) => {
      const Ie = ye + te;
      E.value ? E.value.call(null, se, Ie) && Fa(y.value, se, J) && (G = !0) : Fa(y.value, se, J) && (G = !0), te += ge(yt(se, P));
    }), G && t.emit("selection-change", y.value ? y.value.slice() : []), t.emit("select-all", y.value);
  }, le = () => {
    const fe = Wn(y.value, a.value);
    o.value.forEach((V) => {
      const J = yt(V, a.value), G = fe[J];
      G && (y.value[G.index] = V);
    });
  }, ve = () => {
    var fe, V, J;
    if (((fe = o.value) == null ? void 0 : fe.length) === 0) {
      S.value = !1;
      return;
    }
    let G;
    a.value && (G = Wn(y.value, a.value));
    const te = function(Ie) {
      return G ? !!G[yt(Ie, a.value)] : y.value.includes(Ie);
    };
    let P = !0, se = 0, ye = 0;
    for (let Ie = 0, bt = (o.value || []).length; Ie < bt; Ie++) {
      const wn = (J = (V = t == null ? void 0 : t.store) == null ? void 0 : V.states) == null ? void 0 : J.rowKey.value, Fn = Ie + ye, It = o.value[Ie], F = E.value && E.value.call(null, It, Fn);
      if (te(It))
        se++;
      else if (!E.value || F) {
        P = !1;
        break;
      }
      ye += ge(yt(It, wn));
    }
    se === 0 && (P = !1), S.value = P;
  }, ge = (fe) => {
    var V;
    if (!t || !t.store)
      return 0;
    const { treeData: J } = t.store.states;
    let G = 0;
    const te = (V = J.value[fe]) == null ? void 0 : V.children;
    return te && (G += te.length, te.forEach((P) => {
      G += ge(P);
    })), G;
  }, we = (fe, V) => {
    Array.isArray(fe) || (fe = [fe]);
    const J = {};
    return fe.forEach((G) => {
      x.value[G.id] = V, J[G.columnKey || G.id] = V;
    }), J;
  }, ke = (fe, V, J) => {
    I.value && I.value !== fe && (I.value.order = null), I.value = fe, D.value = V, H.value = J;
  }, De = () => {
    let fe = u(l);
    Object.keys(x.value).forEach((V) => {
      const J = x.value[V];
      if (!J || J.length === 0)
        return;
      const G = yd({
        columns: c.value
      }, V);
      G && G.filterMethod && (fe = fe.filter((te) => J.some((P) => G.filterMethod.call(null, P, te, G))));
    }), N.value = fe;
  }, Oe = () => {
    o.value = ck(N.value, {
      sortingColumn: I.value,
      sortProp: D.value,
      sortOrder: H.value
    });
  }, Re = (fe = void 0) => {
    fe && fe.filter || De(), Oe();
  }, Ne = (fe) => {
    const { tableHeaderRef: V } = t.refs;
    if (!V)
      return;
    const J = Object.assign({}, V.filterPanels), G = Object.keys(J);
    if (G.length)
      if (typeof fe == "string" && (fe = [fe]), Array.isArray(fe)) {
        const te = fe.map((P) => tk({
          columns: c.value
        }, P));
        G.forEach((P) => {
          const se = te.find((ye) => ye.id === P);
          se && (se.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: te,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        G.forEach((te) => {
          const P = c.value.find((se) => se.id === te);
          P && (P.filteredValue = []);
        }), x.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, Ve = () => {
    I.value && (ke(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: Xe,
    toggleRowExpansion: Je,
    updateExpandRows: Ke,
    states: dt,
    isRowExpanded: st
  } = sk({
    data: o,
    rowKey: a
  }), {
    updateTreeExpandKeys: et,
    toggleTreeExpansion: Ce,
    updateTreeData: it,
    loadOrToggle: ot,
    states: ft
  } = uk({
    data: o,
    rowKey: a
  }), {
    updateCurrentRowData: lt,
    updateCurrentRow: re,
    setCurrentRowKey: be,
    states: Be
  } = ik({
    data: o,
    rowKey: a
  });
  return {
    assertRowKey: U,
    updateColumns: W,
    scheduleLayout: R,
    isSelected: B,
    clearSelection: C,
    cleanSelection: M,
    getSelectionRows: z,
    toggleRowSelection: Y,
    _toggleAllSelection: ne,
    toggleAllSelection: null,
    updateSelectionByRowKey: le,
    updateAllSelected: ve,
    updateFilters: we,
    updateCurrentRow: re,
    updateSort: ke,
    execFilter: De,
    execSort: Oe,
    execQuery: Re,
    clearFilter: Ne,
    clearSort: Ve,
    toggleRowExpansion: Je,
    setExpandRowKeysAdapter: (fe) => {
      Xe(fe), et(fe);
    },
    setCurrentRowKey: be,
    toggleRowExpansionAdapter: (fe, V) => {
      c.value.some(({ type: G }) => G === "expand") ? Je(fe, V) : Ce(fe, V);
    },
    isRowExpanded: st,
    updateExpandRows: Ke,
    updateCurrentRowData: lt,
    loadOrToggle: ot,
    updateTreeData: it,
    states: {
      tableSize: n,
      rowKey: a,
      data: o,
      _data: l,
      isComplex: s,
      _columns: r,
      originColumns: i,
      columns: c,
      fixedColumns: f,
      rightFixedColumns: d,
      leafColumns: v,
      fixedLeafColumns: m,
      rightFixedLeafColumns: h,
      updateOrderFns: p,
      leafColumnsLength: b,
      fixedLeafColumnsLength: g,
      rightFixedLeafColumnsLength: w,
      isAllSelected: S,
      selection: y,
      reserveSelection: $,
      selectOnIndeterminate: T,
      selectable: E,
      filters: x,
      filteredData: N,
      sortingColumn: I,
      sortProp: D,
      sortOrder: H,
      hoverRow: Z,
      ...dt,
      ...ft,
      ...Be
    }
  };
}
function sr(e, t) {
  return e.map((n) => {
    var a;
    return n.id === t.id ? t : ((a = n.children) != null && a.length && (n.children = sr(n.children, t)), n);
  });
}
function ir(e) {
  e.forEach((t) => {
    var n, a;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (a = t.children) != null && a.length && ir(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function fk() {
  const e = Le(), t = dk();
  return {
    ns: me("table"),
    ...t,
    mutations: {
      setData(s, r) {
        const i = u(s._data) !== r;
        s.data.value = r, s._data.value = r, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), u(s.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : i ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(s, r, i, c) {
        const f = u(s._columns);
        let d = [];
        i ? (i && !i.children && (i.children = []), i.children.push(r), d = sr(f, i)) : (f.push(r), d = f), ir(d), s._columns.value = d, s.updateOrderFns.push(c), r.type === "selection" && (s.selectable.value = r.selectable, s.reserveSelection.value = r.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(s, r) {
        var i;
        ((i = r.getColumnIndex) == null ? void 0 : i.call(r)) !== r.no && (ir(s._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(s, r, i, c) {
        const f = u(s._columns) || [];
        if (i)
          i.children.splice(i.children.findIndex((v) => v.id === r.id), 1), $e(() => {
            var v;
            ((v = i.children) == null ? void 0 : v.length) === 0 && delete i.children;
          }), s._columns.value = sr(f, i);
        else {
          const v = f.indexOf(r);
          v > -1 && (f.splice(v, 1), s._columns.value = f);
        }
        const d = s.updateOrderFns.indexOf(c);
        d > -1 && s.updateOrderFns.splice(d, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      sort(s, r) {
        const { prop: i, order: c, init: f } = r;
        if (i) {
          const d = u(s.columns).find((v) => v.property === i);
          d && (d.order = c, e.store.updateSort(d, i, c), e.store.commit("changeSortCondition", { init: f }));
        }
      },
      changeSortCondition(s, r) {
        const { sortingColumn: i, sortProp: c, sortOrder: f } = s, d = u(i), v = u(c), m = u(f);
        m === null && (s.sortingColumn.value = null, s.sortProp.value = null);
        const h = { filter: !0 };
        e.store.execQuery(h), (!r || !(r.silent || r.init)) && e.emit("sort-change", {
          column: d,
          prop: v,
          order: m
        }), e.store.updateTableScrollY();
      },
      filterChange(s, r) {
        const { column: i, values: c, silent: f } = r, d = e.store.updateFilters(i, c);
        e.store.execQuery(), f || e.emit("filter-change", d), e.store.updateTableScrollY();
      },
      toggleAllSelection() {
        e.store.toggleAllSelection();
      },
      rowSelectedChanged(s, r) {
        e.store.toggleRowSelection(r), e.store.updateAllSelected();
      },
      setHoverRow(s, r) {
        s.hoverRow.value = r;
      },
      setCurrentRow(s, r) {
        e.store.updateCurrentRow(r);
      }
    },
    commit: function(s, ...r) {
      const i = e.store.mutations;
      if (i[s])
        i[s].apply(e, [e.store.states].concat(r));
      else
        throw new Error(`Action not found: ${s}`);
    },
    updateTableScrollY: function() {
      $e(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const Ba = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  data: "data",
  "treeProps.hasChildren": {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  "treeProps.children": {
    key: "childrenColumnName",
    default: "children"
  }
};
function pk(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = fk();
  return n.toggleAllSelection = Zn(n._toggleAllSelection, 10), Object.keys(Ba).forEach((a) => {
    kd($d(t, a), a, n);
  }), vk(n, t), n;
}
function vk(e, t) {
  Object.keys(Ba).forEach((n) => {
    ue(() => $d(t, n), (a) => {
      kd(a, n, e);
    });
  });
}
function kd(e, t, n) {
  let a = e, o = Ba[t];
  typeof Ba[t] == "object" && (o = o.key, a = a || Ba[t].default), n.states[o].value = a;
}
function $d(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let a = e;
    return n.forEach((o) => {
      a = a[o];
    }), a;
  } else
    return e[t];
}
class mk {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = O(null), this.scrollX = O(!1), this.scrollY = O(!1), this.bodyWidth = O(null), this.fixedWidth = O(null), this.rightFixedWidth = O(null), this.gutterWidth = 0;
    for (const n in t)
      Gn(t, n) && (Un(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
    if (!this.table)
      throw new Error("Table is required for Table Layout");
    if (!this.store)
      throw new Error("Store is required for Table Layout");
  }
  updateScrollY() {
    if (this.height.value === null)
      return !1;
    const n = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && (n != null && n.wrapRef)) {
      let a = !0;
      const o = this.scrollY.value;
      return a = n.wrapRef.scrollHeight > n.wrapRef.clientHeight, this.scrollY.value = a, o !== a;
    }
    return !1;
  }
  setHeight(t, n = "height") {
    if (!qe)
      return;
    const a = this.table.vnode.el;
    if (t = ak(t), this.height.value = Number(t), !a && (t || t === 0))
      return $e(() => this.setHeight(t, n));
    typeof t == "number" ? (a.style[n] = `${t}px`, this.updateElsHeight()) : typeof t == "string" && (a.style[n] = t, this.updateElsHeight());
  }
  setMaxHeight(t) {
    this.setHeight(t, "max-height");
  }
  getFlattenColumns() {
    const t = [];
    return this.table.store.states.columns.value.forEach((a) => {
      a.isColumnGroup ? t.push.apply(t, a.columns) : t.push(a);
    }), t;
  }
  updateElsHeight() {
    this.updateScrollY(), this.notifyObservers("scrollable");
  }
  headerDisplayNone(t) {
    if (!t)
      return !0;
    let n = t;
    for (; n.tagName !== "DIV"; ) {
      if (getComputedStyle(n).display === "none")
        return !0;
      n = n.parentElement;
    }
    return !1;
  }
  updateColumnsWidth() {
    if (!qe)
      return;
    const t = this.fit, n = this.table.vnode.el.clientWidth;
    let a = 0;
    const o = this.getFlattenColumns(), l = o.filter((i) => typeof i.width != "number");
    if (o.forEach((i) => {
      typeof i.width == "number" && i.realWidth && (i.realWidth = null);
    }), l.length > 0 && t) {
      if (o.forEach((i) => {
        a += Number(i.width || i.minWidth || 80);
      }), a <= n) {
        this.scrollX.value = !1;
        const i = n - a;
        if (l.length === 1)
          l[0].realWidth = Number(l[0].minWidth || 80) + i;
        else {
          const c = l.reduce((v, m) => v + Number(m.minWidth || 80), 0), f = i / c;
          let d = 0;
          l.forEach((v, m) => {
            if (m === 0)
              return;
            const h = Math.floor(Number(v.minWidth || 80) * f);
            d += h, v.realWidth = Number(v.minWidth || 80) + h;
          }), l[0].realWidth = Number(l[0].minWidth || 80) + i - d;
        }
      } else
        this.scrollX.value = !0, l.forEach((i) => {
          i.realWidth = Number(i.minWidth);
        });
      this.bodyWidth.value = Math.max(a, n), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else
      o.forEach((i) => {
        !i.width && !i.minWidth ? i.realWidth = 80 : i.realWidth = Number(i.width || i.minWidth), a += i.realWidth;
      }), this.scrollX.value = a > n, this.bodyWidth.value = a;
    const s = this.store.states.fixedColumns.value;
    if (s.length > 0) {
      let i = 0;
      s.forEach((c) => {
        i += Number(c.realWidth || c.width);
      }), this.fixedWidth.value = i;
    }
    const r = this.store.states.rightFixedColumns.value;
    if (r.length > 0) {
      let i = 0;
      r.forEach((c) => {
        i += Number(c.realWidth || c.width);
      }), this.rightFixedWidth.value = i;
    }
    this.notifyObservers("columns");
  }
  addObserver(t) {
    this.observers.push(t);
  }
  removeObserver(t) {
    const n = this.observers.indexOf(t);
    n !== -1 && this.observers.splice(n, 1);
  }
  notifyObservers(t) {
    this.observers.forEach((a) => {
      var o, l;
      switch (t) {
        case "columns":
          (o = a.state) == null || o.onColumnsChange(this);
          break;
        case "scrollable":
          (l = a.state) == null || l.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${t}.`);
      }
    });
  }
}
const { CheckboxGroup: hk } = Sa, gk = Q({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: Sa,
    ElCheckboxGroup: hk,
    ElScrollbar: la,
    ElTooltip: oo,
    ElIcon: xe,
    ArrowDown: Or,
    ArrowUp: zu
  },
  directives: { ClickOutside: Qa },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    }
  },
  setup(e) {
    const t = Le(), { t: n } = at(), a = me("table-filter"), o = t == null ? void 0 : t.parent;
    o.filterPanels.value[e.column.id] || (o.filterPanels.value[e.column.id] = t);
    const l = O(!1), s = O(null), r = k(() => e.column && e.column.filters), i = k({
      get: () => {
        var y;
        return (((y = e.column) == null ? void 0 : y.filteredValue) || [])[0];
      },
      set: (y) => {
        c.value && (typeof y < "u" && y !== null ? c.value.splice(0, 1, y) : c.value.splice(0, 1));
      }
    }), c = k({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(y) {
        e.column && e.upDataColumn("filteredValue", y);
      }
    }), f = k(() => e.column ? e.column.filterMultiple : !0), d = (y) => y.value === i.value, v = () => {
      l.value = !1;
    }, m = (y) => {
      y.stopPropagation(), l.value = !l.value;
    }, h = () => {
      l.value = !1;
    }, p = () => {
      w(c.value), v();
    }, b = () => {
      c.value = [], w(c.value), v();
    }, g = (y) => {
      i.value = y, w(typeof y < "u" && y !== null ? c.value : []), v();
    }, w = (y) => {
      e.store.commit("filterChange", {
        column: e.column,
        values: y
      }), e.store.updateAllSelected();
    };
    ue(l, (y) => {
      e.column && e.upDataColumn("filterOpened", y);
    }, {
      immediate: !0
    });
    const S = k(() => {
      var y, $;
      return ($ = (y = s.value) == null ? void 0 : y.popperRef) == null ? void 0 : $.contentRef;
    });
    return {
      tooltipVisible: l,
      multiple: f,
      filteredValue: c,
      filterValue: i,
      filters: r,
      handleConfirm: p,
      handleReset: b,
      handleSelect: g,
      isActive: d,
      t: n,
      ns: a,
      showFilterPanel: m,
      hideFilterPanel: h,
      popperPaneRef: S,
      tooltip: s
    };
  }
}), bk = { key: 0 }, yk = ["disabled"], wk = ["label", "onClick"];
function Ck(e, t, n, a, o, l) {
  const s = he("el-checkbox"), r = he("el-checkbox-group"), i = he("el-scrollbar"), c = he("arrow-up"), f = he("arrow-down"), d = he("el-icon"), v = he("el-tooltip"), m = pr("click-outside");
  return _(), oe(v, {
    ref: "tooltip",
    visible: e.tooltipVisible,
    offset: 0,
    placement: e.placement,
    "show-arrow": !1,
    "stop-popper-mouse-event": !1,
    teleported: "",
    effect: "light",
    pure: "",
    "popper-class": e.ns.b(),
    persistent: ""
  }, {
    content: X(() => [
      e.multiple ? (_(), L("div", bk, [
        K("div", {
          class: A(e.ns.e("content"))
        }, [
          q(i, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: X(() => [
              q(r, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (h) => e.filteredValue = h),
                class: A(e.ns.e("checkbox-group"))
              }, {
                default: X(() => [
                  (_(!0), L(Te, null, He(e.filters, (h) => (_(), oe(s, {
                    key: h.value,
                    label: h.value
                  }, {
                    default: X(() => [
                      Qe(pe(h.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            _: 1
          }, 8, ["wrap-class"])
        ], 2),
        K("div", {
          class: A(e.ns.e("bottom"))
        }, [
          K("button", {
            class: A({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...h) => e.handleConfirm && e.handleConfirm(...h))
          }, pe(e.t("el.table.confirmFilter")), 11, yk),
          K("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...h) => e.handleReset && e.handleReset(...h))
          }, pe(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (_(), L("ul", {
        key: 1,
        class: A(e.ns.e("list"))
      }, [
        K("li", {
          class: A([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (h) => e.handleSelect(null))
        }, pe(e.t("el.table.clearFilter")), 3),
        (_(!0), L(Te, null, He(e.filters, (h) => (_(), L("li", {
          key: h.value,
          class: A([e.ns.e("list-item"), e.ns.is("active", e.isActive(h))]),
          label: h.value,
          onClick: (p) => e.handleSelect(h.value)
        }, pe(h.text), 11, wk))), 128))
      ], 2))
    ]),
    default: X(() => [
      je((_(), L("span", {
        class: A([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...h) => e.showFilterPanel && e.showFilterPanel(...h))
      }, [
        q(d, null, {
          default: X(() => [
            e.column.filterOpened ? (_(), oe(c, { key: 0 })) : (_(), oe(f, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [m, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var Sk = /* @__PURE__ */ Me(gk, [["render", Ck], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function _d(e) {
  const t = Le();
  fr(() => {
    n.value.addObserver(t);
  }), Ge(() => {
    a(n.value), o(n.value);
  }), Qo(() => {
    a(n.value), o(n.value);
  }), $a(() => {
    n.value.removeObserver(t);
  });
  const n = k(() => {
    const l = e.layout;
    if (!l)
      throw new Error("Can not find table layout.");
    return l;
  }), a = (l) => {
    var s;
    const r = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("colgroup > col")) || [];
    if (!r.length)
      return;
    const i = l.getFlattenColumns(), c = {};
    i.forEach((f) => {
      c[f.id] = f;
    });
    for (let f = 0, d = r.length; f < d; f++) {
      const v = r[f], m = v.getAttribute("name"), h = c[m];
      h && v.setAttribute("width", h.realWidth || h.width);
    }
  }, o = (l) => {
    var s, r;
    const i = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let f = 0, d = i.length; f < d; f++)
      i[f].setAttribute("width", l.scrollY.value ? l.gutterWidth : "0");
    const c = ((r = e.vnode.el) == null ? void 0 : r.querySelectorAll("th.gutter")) || [];
    for (let f = 0, d = c.length; f < d; f++) {
      const v = c[f];
      v.style.width = l.scrollY.value ? `${l.gutterWidth}px` : "0", v.style.display = l.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: n.value,
    onColumnsChange: a,
    onScrollableChange: o
  };
}
const sn = Symbol("ElTable");
function kk(e, t) {
  const n = Le(), a = Se(sn), o = (p) => {
    p.stopPropagation();
  }, l = (p, b) => {
    !b.filters && b.sortable ? h(p, b, !1) : b.filterable && !b.sortable && o(p), a == null || a.emit("header-click", b, p);
  }, s = (p, b) => {
    a == null || a.emit("header-contextmenu", b, p);
  }, r = O(null), i = O(!1), c = O({}), f = (p, b) => {
    if (qe && !(b.children && b.children.length > 0) && r.value && e.border) {
      i.value = !0;
      const g = a;
      t("set-drag-visible", !0);
      const S = (g == null ? void 0 : g.vnode.el).getBoundingClientRect().left, y = n.vnode.el.querySelector(`th.${b.id}`), $ = y.getBoundingClientRect(), T = $.left - S + 30;
      Tr(y, "noclick"), c.value = {
        startMouseLeft: p.clientX,
        startLeft: $.right - S,
        startColumnLeft: $.left - S,
        tableLeft: S
      };
      const E = g == null ? void 0 : g.refs.resizeProxy;
      E.style.left = `${c.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const x = (I) => {
        const D = I.clientX - c.value.startMouseLeft, H = c.value.startLeft + D;
        E.style.left = `${Math.max(T, H)}px`;
      }, N = () => {
        if (i.value) {
          const { startColumnLeft: I, startLeft: D } = c.value, Z = Number.parseInt(E.style.left, 10) - I;
          b.width = b.realWidth = Z, g == null || g.emit("header-dragend", b.width, D - I, b, p), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", i.value = !1, r.value = null, c.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", N), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          Yo(y, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", x), document.addEventListener("mouseup", N);
    }
  }, d = (p, b) => {
    if (b.children && b.children.length > 0)
      return;
    const g = p.target;
    if (!fa(g))
      return;
    const w = g == null ? void 0 : g.closest("th");
    if (!(!b || !b.resizable) && !i.value && e.border) {
      const S = w.getBoundingClientRect(), y = document.body.style;
      S.width > 12 && S.right - p.pageX < 8 ? (y.cursor = "col-resize", Tn(w, "is-sortable") && (w.style.cursor = "col-resize"), r.value = b) : i.value || (y.cursor = "", Tn(w, "is-sortable") && (w.style.cursor = "pointer"), r.value = null);
    }
  }, v = () => {
    qe && (document.body.style.cursor = "");
  }, m = ({ order: p, sortOrders: b }) => {
    if (p === "")
      return b[0];
    const g = b.indexOf(p || null);
    return b[g > b.length - 2 ? 0 : g + 1];
  }, h = (p, b, g) => {
    var w;
    p.stopPropagation();
    const S = b.order === g ? null : g || m(b), y = (w = p.target) == null ? void 0 : w.closest("th");
    if (y && Tn(y, "noclick")) {
      Yo(y, "noclick");
      return;
    }
    if (!b.sortable)
      return;
    const $ = e.store.states;
    let T = $.sortProp.value, E;
    const x = $.sortingColumn.value;
    (x !== b || x === b && x.order === null) && (x && (x.order = null), $.sortingColumn.value = b, T = b.property), S ? E = b.order = S : E = b.order = null, $.sortProp.value = T, $.sortOrder.value = E, a == null || a.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick: l,
    handleHeaderContextMenu: s,
    handleMouseDown: f,
    handleMouseMove: d,
    handleMouseOut: v,
    handleSortClick: h,
    handleFilterClick: o
  };
}
function $k(e) {
  const t = Se(sn), n = me("table");
  return {
    getHeaderRowStyle: (r) => {
      const i = t == null ? void 0 : t.props.headerRowStyle;
      return typeof i == "function" ? i.call(null, { rowIndex: r }) : i;
    },
    getHeaderRowClass: (r) => {
      const i = [], c = t == null ? void 0 : t.props.headerRowClassName;
      return typeof c == "string" ? i.push(c) : typeof c == "function" && i.push(c.call(null, { rowIndex: r })), i.join(" ");
    },
    getHeaderCellStyle: (r, i, c, f) => {
      var d;
      let v = (d = t == null ? void 0 : t.props.headerCellStyle) != null ? d : {};
      typeof v == "function" && (v = v.call(null, {
        rowIndex: r,
        columnIndex: i,
        row: c,
        column: f
      }));
      const m = Jr(i, f.fixed, e.store, c);
      return ka(m, "left"), ka(m, "right"), Object.assign({}, v, m);
    },
    getHeaderCellClass: (r, i, c, f) => {
      const d = Qr(n.b(), i, f.fixed, e.store, c), v = [
        f.id,
        f.order,
        f.headerAlign,
        f.className,
        f.labelClassName,
        ...d
      ];
      f.children || v.push("is-leaf"), f.sortable && v.push("is-sortable");
      const m = t == null ? void 0 : t.props.headerCellClassName;
      return typeof m == "string" ? v.push(m) : typeof m == "function" && v.push(m.call(null, {
        rowIndex: r,
        columnIndex: i,
        row: c,
        column: f
      })), v.push(n.e("cell")), v.filter((h) => !!h).join(" ");
    }
  };
}
const Ed = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, Ed(n.children))) : t.push(n);
  }), t;
}, _k = (e) => {
  let t = 1;
  const n = (l, s) => {
    if (s && (l.level = s.level + 1, t < l.level && (t = l.level)), l.children) {
      let r = 0;
      l.children.forEach((i) => {
        n(i, l), r += i.colSpan;
      }), l.colSpan = r;
    } else
      l.colSpan = 1;
  };
  e.forEach((l) => {
    l.level = 1, n(l, void 0);
  });
  const a = [];
  for (let l = 0; l < t; l++)
    a.push([]);
  return Ed(e).forEach((l) => {
    l.children ? (l.rowSpan = 1, l.children.forEach((s) => s.isSubColumn = !0)) : l.rowSpan = t - l.level + 1, a[l.level - 1].push(l);
  }), a;
};
function Ek(e) {
  const t = Se(sn), n = k(() => _k(e.store.states.originColumns.value));
  return {
    isGroup: k(() => {
      const l = n.value.length > 1;
      return l && t && (t.state.isGroup.value = !0), l;
    }),
    toggleAllSelection: (l) => {
      l.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
var Tk = Q({
  name: "ElTableHeader",
  components: {
    ElCheckbox: Sa
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e, { emit: t }) {
    const n = Le(), a = Se(sn), o = me("table"), l = O({}), { onColumnsChange: s, onScrollableChange: r } = _d(a);
    Ge(async () => {
      await $e(), await $e();
      const { prop: T, order: E } = e.defaultSort;
      a == null || a.store.commit("sort", { prop: T, order: E, init: !0 });
    });
    const {
      handleHeaderClick: i,
      handleHeaderContextMenu: c,
      handleMouseDown: f,
      handleMouseMove: d,
      handleMouseOut: v,
      handleSortClick: m,
      handleFilterClick: h
    } = kk(e, t), {
      getHeaderRowStyle: p,
      getHeaderRowClass: b,
      getHeaderCellStyle: g,
      getHeaderCellClass: w
    } = $k(e), { isGroup: S, toggleAllSelection: y, columnRows: $ } = Ek(e);
    return n.state = {
      onColumnsChange: s,
      onScrollableChange: r
    }, n.filterPanels = l, {
      ns: o,
      filterPanels: l,
      onColumnsChange: s,
      onScrollableChange: r,
      columnRows: $,
      getHeaderRowClass: b,
      getHeaderRowStyle: p,
      getHeaderCellClass: w,
      getHeaderCellStyle: g,
      handleHeaderClick: i,
      handleHeaderContextMenu: c,
      handleMouseDown: f,
      handleMouseMove: d,
      handleMouseOut: v,
      handleSortClick: m,
      handleFilterClick: h,
      isGroup: S,
      toggleAllSelection: y
    };
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: n,
      getHeaderCellStyle: a,
      getHeaderCellClass: o,
      getHeaderRowClass: l,
      getHeaderRowStyle: s,
      handleHeaderClick: r,
      handleHeaderContextMenu: i,
      handleMouseDown: c,
      handleMouseMove: f,
      handleSortClick: d,
      handleMouseOut: v,
      store: m,
      $parent: h
    } = this;
    let p = 1;
    return Pe("thead", {
      class: { [e.is("group")]: t }
    }, n.map((b, g) => Pe("tr", {
      class: l(g),
      key: g,
      style: s(g)
    }, b.map((w, S) => (w.rowSpan > p && (p = w.rowSpan), Pe("th", {
      class: o(g, S, b, w),
      colspan: w.colSpan,
      key: `${w.id}-thead`,
      rowspan: w.rowSpan,
      style: a(g, S, b, w),
      onClick: (y) => r(y, w),
      onContextmenu: (y) => i(y, w),
      onMousedown: (y) => c(y, w),
      onMousemove: (y) => f(y, w),
      onMouseout: v
    }, [
      Pe("div", {
        class: [
          "cell",
          w.filteredValue && w.filteredValue.length > 0 ? "highlight" : ""
        ]
      }, [
        w.renderHeader ? w.renderHeader({
          column: w,
          $index: S,
          store: m,
          _self: h
        }) : w.label,
        w.sortable && Pe("span", {
          onClick: (y) => d(y, w),
          class: "caret-wrapper"
        }, [
          Pe("i", {
            onClick: (y) => d(y, w, "ascending"),
            class: "sort-caret ascending"
          }),
          Pe("i", {
            onClick: (y) => d(y, w, "descending"),
            class: "sort-caret descending"
          })
        ]),
        w.filterable && Pe(Sk, {
          store: m,
          placement: w.filterPlacement || "bottom-start",
          column: w,
          upDataColumn: (y, $) => {
            w[y] = $;
          }
        })
      ])
    ]))))));
  }
});
function Ok(e) {
  const t = Se(sn), n = O(""), a = O(Pe("div")), { nextZIndex: o } = Br(), l = (h, p, b) => {
    var g;
    const w = t, S = xl(h);
    let y;
    const $ = (g = w == null ? void 0 : w.vnode.el) == null ? void 0 : g.dataset.prefix;
    S && (y = Ki({
      columns: e.store.states.columns.value
    }, S, $), y && (w == null || w.emit(`cell-${b}`, p, y, S, h))), w == null || w.emit(`row-${b}`, p, y, h);
  }, s = (h, p) => {
    l(h, p, "dblclick");
  }, r = (h, p) => {
    e.store.commit("setCurrentRow", p), l(h, p, "click");
  }, i = (h, p) => {
    l(h, p, "contextmenu");
  }, c = Zn((h) => {
    e.store.commit("setHoverRow", h);
  }, 30), f = Zn(() => {
    e.store.commit("setHoverRow", null);
  }, 30), d = (h) => {
    const p = window.getComputedStyle(h, null), b = Number.parseInt(p.paddingLeft, 10) || 0, g = Number.parseInt(p.paddingRight, 10) || 0, w = Number.parseInt(p.paddingTop, 10) || 0, S = Number.parseInt(p.paddingBottom, 10) || 0;
    return {
      left: b,
      right: g,
      top: w,
      bottom: S
    };
  };
  return {
    handleDoubleClick: s,
    handleClick: r,
    handleContextMenu: i,
    handleMouseEnter: c,
    handleMouseLeave: f,
    handleCellMouseEnter: (h, p, b) => {
      var g;
      const w = t, S = xl(h), y = (g = w == null ? void 0 : w.vnode.el) == null ? void 0 : g.dataset.prefix;
      if (S) {
        const R = Ki({
          columns: e.store.states.columns.value
        }, S, y), B = w.hoverState = { cell: S, column: R, row: p };
        w == null || w.emit("cell-mouse-enter", B.row, B.column, B.cell, h);
      }
      if (!b)
        return;
      const $ = h.target.querySelector(".cell");
      if (!(Tn($, `${y}-tooltip`) && $.childNodes.length))
        return;
      const T = document.createRange();
      T.setStart($, 0), T.setEnd($, $.childNodes.length);
      let E = T.getBoundingClientRect().width, x = T.getBoundingClientRect().height;
      E - Math.floor(E) < 1e-3 && (E = Math.floor(E)), x - Math.floor(x) < 1e-3 && (x = Math.floor(x));
      const { top: D, left: H, right: Z, bottom: U } = d($), j = H + Z, W = D + U;
      (E + j > $.offsetWidth || x + W > $.offsetHeight || $.scrollWidth > $.offsetWidth) && rk(t == null ? void 0 : t.refs.tableWrapper, S, S.innerText || S.textContent, o, b);
    },
    handleCellMouseLeave: (h) => {
      if (!xl(h))
        return;
      const b = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", b == null ? void 0 : b.row, b == null ? void 0 : b.column, b == null ? void 0 : b.cell, h);
    },
    tooltipContent: n,
    tooltipTrigger: a
  };
}
function Pk(e) {
  const t = Se(sn), n = me("table");
  return {
    getRowStyle: (c, f) => {
      const d = t == null ? void 0 : t.props.rowStyle;
      return typeof d == "function" ? d.call(null, {
        row: c,
        rowIndex: f
      }) : d || null;
    },
    getRowClass: (c, f) => {
      const d = [n.e("row")];
      t != null && t.props.highlightCurrentRow && c === e.store.states.currentRow.value && d.push("current-row"), e.stripe && f % 2 === 1 && d.push(n.em("row", "striped"));
      const v = t == null ? void 0 : t.props.rowClassName;
      return typeof v == "string" ? d.push(v) : typeof v == "function" && d.push(v.call(null, {
        row: c,
        rowIndex: f
      })), d;
    },
    getCellStyle: (c, f, d, v) => {
      const m = t == null ? void 0 : t.props.cellStyle;
      let h = m ?? {};
      typeof m == "function" && (h = m.call(null, {
        rowIndex: c,
        columnIndex: f,
        row: d,
        column: v
      }));
      const p = Jr(f, e == null ? void 0 : e.fixed, e.store);
      return ka(p, "left"), ka(p, "right"), Object.assign({}, h, p);
    },
    getCellClass: (c, f, d, v, m) => {
      const h = Qr(n.b(), f, e == null ? void 0 : e.fixed, e.store, void 0, m), p = [v.id, v.align, v.className, ...h], b = t == null ? void 0 : t.props.cellClassName;
      return typeof b == "string" ? p.push(b) : typeof b == "function" && p.push(b.call(null, {
        rowIndex: c,
        columnIndex: f,
        row: d,
        column: v
      })), p.push(n.e("cell")), p.filter((g) => !!g).join(" ");
    },
    getSpan: (c, f, d, v) => {
      let m = 1, h = 1;
      const p = t == null ? void 0 : t.props.spanMethod;
      if (typeof p == "function") {
        const b = p({
          row: c,
          column: f,
          rowIndex: d,
          columnIndex: v
        });
        Array.isArray(b) ? (m = b[0], h = b[1]) : typeof b == "object" && (m = b.rowspan, h = b.colspan);
      }
      return { rowspan: m, colspan: h };
    },
    getColspanRealWidth: (c, f, d) => {
      if (f < 1)
        return c[d].realWidth;
      const v = c.map(({ realWidth: m, width: h }) => m || h).slice(d, d + f);
      return Number(v.reduce((m, h) => Number(m) + Number(h), -1));
    }
  };
}
function Mk(e) {
  const t = Se(sn), n = me("table"), {
    handleDoubleClick: a,
    handleClick: o,
    handleContextMenu: l,
    handleMouseEnter: s,
    handleMouseLeave: r,
    handleCellMouseEnter: i,
    handleCellMouseLeave: c,
    tooltipContent: f,
    tooltipTrigger: d
  } = Ok(e), {
    getRowStyle: v,
    getRowClass: m,
    getCellStyle: h,
    getCellClass: p,
    getSpan: b,
    getColspanRealWidth: g
  } = Pk(e), w = k(() => e.store.states.columns.value.findIndex(({ type: E }) => E === "default")), S = (E, x) => {
    const N = t.props.rowKey;
    return N ? yt(E, N) : x;
  }, y = (E, x, N, I = !1) => {
    const { tooltipEffect: D, tooltipOptions: H, store: Z } = e, { indent: U, columns: j } = Z.states, W = m(E, x);
    let R = !0;
    return N && (W.push(n.em("row", `level-${N.level}`)), R = N.display), Pe("tr", {
      style: [R ? null : {
        display: "none"
      }, v(E, x)],
      class: W,
      key: S(E, x),
      onDblclick: (C) => a(C, E),
      onClick: (C) => o(C, E),
      onContextmenu: (C) => l(C, E),
      onMouseenter: () => s(x),
      onMouseleave: r
    }, j.value.map((C, M) => {
      const { rowspan: z, colspan: Y } = b(E, C, x, M);
      if (!z || !Y)
        return null;
      const ne = Object.assign({}, C);
      ne.realWidth = g(j.value, Y, M);
      const le = {
        store: e.store,
        _self: e.context || t,
        column: ne,
        row: E,
        $index: x,
        cellIndex: M,
        expanded: I
      };
      M === w.value && N && (le.treeNode = {
        indent: N.level * U.value,
        level: N.level
      }, typeof N.expanded == "boolean" && (le.treeNode.expanded = N.expanded, "loading" in N && (le.treeNode.loading = N.loading), "noLazyChildren" in N && (le.treeNode.noLazyChildren = N.noLazyChildren)));
      const ve = `${x},${M}`, ge = ne.columnKey || ne.rawColumnKey || "", we = $(M, C, le), ke = C.showOverflowTooltip && Nu({
        effect: D
      }, H, C.showOverflowTooltip);
      return Pe("td", {
        style: h(x, M, E, C),
        class: p(x, M, E, C, Y - 1),
        key: `${ge}${ve}`,
        rowspan: z,
        colspan: Y,
        onMouseenter: (De) => i(De, E, ke),
        onMouseleave: c
      }, [we]);
    }));
  }, $ = (E, x, N) => x.renderCell(N);
  return {
    wrappedRowRender: (E, x) => {
      const N = e.store, { isRowExpanded: I, assertRowKey: D } = N, { treeData: H, lazyTreeNodeMap: Z, childrenColumnName: U, rowKey: j } = N.states, W = N.states.columns.value;
      if (W.some(({ type: B }) => B === "expand")) {
        const B = I(E), C = y(E, x, void 0, B), M = t.renderExpanded;
        return B ? M ? [
          [
            C,
            Pe("tr", {
              key: `expanded-row__${C.key}`
            }, [
              Pe("td", {
                colspan: W.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [M({ row: E, $index: x, store: N, expanded: B })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), C) : [[C]];
      } else if (Object.keys(H.value).length) {
        D();
        const B = yt(E, j.value);
        let C = H.value[B], M = null;
        C && (M = {
          expanded: C.expanded,
          level: C.level,
          display: !0
        }, typeof C.lazy == "boolean" && (typeof C.loaded == "boolean" && C.loaded && (M.noLazyChildren = !(C.children && C.children.length)), M.loading = C.loading));
        const z = [y(E, x, M)];
        if (C) {
          let Y = 0;
          const ne = (ve, ge) => {
            ve && ve.length && ge && ve.forEach((we) => {
              const ke = {
                display: ge.display && ge.expanded,
                level: ge.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, De = yt(we, j.value);
              if (De == null)
                throw new Error("For nested data item, row-key is required.");
              if (C = { ...H.value[De] }, C && (ke.expanded = C.expanded, C.level = C.level || ke.level, C.display = !!(C.expanded && ke.display), typeof C.lazy == "boolean" && (typeof C.loaded == "boolean" && C.loaded && (ke.noLazyChildren = !(C.children && C.children.length)), ke.loading = C.loading)), Y++, z.push(y(we, x + Y, ke)), C) {
                const Oe = Z.value[De] || we[U.value];
                ne(Oe, C);
              }
            });
          };
          C.display = !0;
          const le = Z.value[B] || E[U.value];
          ne(le, C);
        }
        return z;
      } else
        return y(E, x, void 0);
    },
    tooltipContent: f,
    tooltipTrigger: d
  };
}
const xk = {
  store: {
    required: !0,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: {
    type: Object
  },
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};
var Ak = Q({
  name: "ElTableBody",
  props: xk,
  setup(e) {
    const t = Le(), n = Se(sn), a = me("table"), { wrappedRowRender: o, tooltipContent: l, tooltipTrigger: s } = Mk(e), { onColumnsChange: r, onScrollableChange: i } = _d(n);
    return ue(e.store.states.hoverRow, (c, f) => {
      !e.store.states.isComplex.value || !qe || Jg(() => {
        const d = t == null ? void 0 : t.vnode.el, v = Array.from((d == null ? void 0 : d.children) || []).filter((p) => p == null ? void 0 : p.classList.contains(`${a.e("row")}`)), m = v[f], h = v[c];
        m && Yo(m, "hover-row"), h && Tr(h, "hover-row");
      });
    }), $a(() => {
      var c;
      (c = cn) == null || c();
    }), {
      ns: a,
      onColumnsChange: r,
      onScrollableChange: i,
      wrappedRowRender: o,
      tooltipContent: l,
      tooltipTrigger: s
    };
  },
  render() {
    const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
    return Pe("tbody", { tabIndex: -1 }, [
      n.reduce((a, o) => a.concat(e(o, a.length)), [])
    ]);
  }
});
function Dk() {
  const e = Se(sn), t = e == null ? void 0 : e.store, n = k(() => t.states.fixedLeafColumnsLength.value), a = k(() => t.states.rightFixedColumns.value.length), o = k(() => t.states.columns.value.length), l = k(() => t.states.fixedColumns.value.length), s = k(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: a,
    columnsCount: o,
    leftFixedCount: l,
    rightFixedCount: s,
    columns: t.states.columns
  };
}
function Ik(e) {
  const { columns: t } = Dk(), n = me("table");
  return {
    getCellClasses: (l, s) => {
      const r = l[s], i = [
        n.e("cell"),
        r.id,
        r.align,
        r.labelClassName,
        ...Qr(n.b(), s, r.fixed, e.store)
      ];
      return r.className && i.push(r.className), r.children || i.push(n.is("leaf")), i;
    },
    getCellStyles: (l, s) => {
      const r = Jr(s, l.fixed, e.store);
      return ka(r, "left"), ka(r, "right"), r;
    },
    columns: t
  };
}
var Nk = Q({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e) {
    const { getCellClasses: t, getCellStyles: n, columns: a } = Ik(e);
    return {
      ns: me("table"),
      getCellClasses: t,
      getCellStyles: n,
      columns: a
    };
  },
  render() {
    const { columns: e, getCellStyles: t, getCellClasses: n, summaryMethod: a, sumText: o } = this, l = this.store.states.data.value;
    let s = [];
    return a ? s = a({
      columns: e,
      data: l
    }) : e.forEach((r, i) => {
      if (i === 0) {
        s[i] = o;
        return;
      }
      const c = l.map((m) => Number(m[r.property])), f = [];
      let d = !0;
      c.forEach((m) => {
        if (!Number.isNaN(+m)) {
          d = !1;
          const h = `${m}`.split(".")[1];
          f.push(h ? h.length : 0);
        }
      });
      const v = Math.max.apply(null, f);
      d ? s[i] = "" : s[i] = c.reduce((m, h) => {
        const p = Number(h);
        return Number.isNaN(+p) ? m : Number.parseFloat((m + h).toFixed(Math.min(v, 20)));
      }, 0);
    }), Pe(Pe("tfoot", [
      Pe("tr", {}, [
        ...e.map((r, i) => Pe("td", {
          key: i,
          colspan: r.colSpan,
          rowspan: r.rowSpan,
          class: n(e, i),
          style: t(r, i)
        }, [
          Pe("div", {
            class: ["cell", r.labelClassName]
          }, [s[i]])
        ]))
      ])
    ]));
  }
});
function Rk(e) {
  return {
    setCurrentRow: (f) => {
      e.commit("setCurrentRow", f);
    },
    getSelectionRows: () => e.getSelectionRows(),
    toggleRowSelection: (f, d) => {
      e.toggleRowSelection(f, d, !1), e.updateAllSelected();
    },
    clearSelection: () => {
      e.clearSelection();
    },
    clearFilter: (f) => {
      e.clearFilter(f);
    },
    toggleAllSelection: () => {
      e.commit("toggleAllSelection");
    },
    toggleRowExpansion: (f, d) => {
      e.toggleRowExpansionAdapter(f, d);
    },
    clearSort: () => {
      e.clearSort();
    },
    sort: (f, d) => {
      e.commit("sort", { prop: f, order: d });
    }
  };
}
function Lk(e, t, n, a) {
  const o = O(!1), l = O(null), s = O(!1), r = (C) => {
    s.value = C;
  }, i = O({
    width: null,
    height: null,
    headerHeight: null
  }), c = O(!1), f = {
    display: "inline-block",
    verticalAlign: "middle"
  }, d = O(), v = O(0), m = O(0), h = O(0), p = O(0), b = O(0);
  Mt(() => {
    t.setHeight(e.height);
  }), Mt(() => {
    t.setMaxHeight(e.maxHeight);
  }), ue(() => [e.currentRowKey, n.states.rowKey], ([C, M]) => {
    !u(M) || !u(C) || n.setCurrentRowKey(`${C}`);
  }, {
    immediate: !0
  }), ue(() => e.data, (C) => {
    a.store.commit("setData", C);
  }, {
    immediate: !0,
    deep: !0
  }), Mt(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const g = () => {
    a.store.commit("setHoverRow", null), a.hoverState && (a.hoverState = null);
  }, w = (C, M) => {
    const { pixelX: z, pixelY: Y } = M;
    Math.abs(z) >= Math.abs(Y) && (a.refs.bodyWrapper.scrollLeft += M.pixelX / 5);
  }, S = k(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), y = k(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), $ = () => {
    S.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(N);
  };
  Ge(async () => {
    await $e(), n.updateColumns(), I(), requestAnimationFrame($);
    const C = a.vnode.el, M = a.refs.headerWrapper;
    e.flexible && C && C.parentElement && (C.parentElement.style.minWidth = "0"), i.value = {
      width: d.value = C.offsetWidth,
      height: C.offsetHeight,
      headerHeight: e.showHeader && M ? M.offsetHeight : null
    }, n.states.columns.value.forEach((z) => {
      z.filteredValue && z.filteredValue.length && a.store.commit("filterChange", {
        column: z,
        values: z.filteredValue,
        silent: !0
      });
    }), a.$ready = !0;
  });
  const T = (C, M) => {
    if (!C)
      return;
    const z = Array.from(C.classList).filter((Y) => !Y.startsWith("is-scrolling-"));
    z.push(t.scrollX.value ? M : "is-scrolling-none"), C.className = z.join(" ");
  }, E = (C) => {
    const { tableWrapper: M } = a.refs;
    T(M, C);
  }, x = (C) => {
    const { tableWrapper: M } = a.refs;
    return !!(M && M.classList.contains(C));
  }, N = function() {
    if (!a.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const ge = "is-scrolling-none";
      x(ge) || E(ge);
      return;
    }
    const C = a.refs.scrollBarRef.wrapRef;
    if (!C)
      return;
    const { scrollLeft: M, offsetWidth: z, scrollWidth: Y } = C, { headerWrapper: ne, footerWrapper: le } = a.refs;
    ne && (ne.scrollLeft = M), le && (le.scrollLeft = M);
    const ve = Y - z - 1;
    M >= ve ? E("is-scrolling-right") : E(M === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, I = () => {
    a.refs.scrollBarRef && (a.refs.scrollBarRef.wrapRef && Kt(a.refs.scrollBarRef.wrapRef, "scroll", N, {
      passive: !0
    }), e.fit ? Mn(a.vnode.el, D) : Kt(window, "resize", D), Mn(a.refs.bodyWrapper, () => {
      var C, M;
      D(), (M = (C = a.refs) == null ? void 0 : C.scrollBarRef) == null || M.update();
    }));
  }, D = () => {
    var C, M, z, Y;
    const ne = a.vnode.el;
    if (!a.$ready || !ne)
      return;
    let le = !1;
    const {
      width: ve,
      height: ge,
      headerHeight: we
    } = i.value, ke = d.value = ne.offsetWidth;
    ve !== ke && (le = !0);
    const De = ne.offsetHeight;
    (e.height || S.value) && ge !== De && (le = !0);
    const Oe = e.tableLayout === "fixed" ? a.refs.headerWrapper : (C = a.refs.tableHeaderRef) == null ? void 0 : C.$el;
    e.showHeader && (Oe == null ? void 0 : Oe.offsetHeight) !== we && (le = !0), v.value = ((M = a.refs.tableWrapper) == null ? void 0 : M.scrollHeight) || 0, h.value = (Oe == null ? void 0 : Oe.scrollHeight) || 0, p.value = ((z = a.refs.footerWrapper) == null ? void 0 : z.offsetHeight) || 0, b.value = ((Y = a.refs.appendWrapper) == null ? void 0 : Y.offsetHeight) || 0, m.value = v.value - h.value - p.value - b.value, le && (i.value = {
      width: ke,
      height: De,
      headerHeight: e.showHeader && (Oe == null ? void 0 : Oe.offsetHeight) || 0
    }, $());
  }, H = Dn(), Z = k(() => {
    const { bodyWidth: C, scrollY: M, gutterWidth: z } = t;
    return C.value ? `${C.value - (M.value ? z : 0)}px` : "";
  }), U = k(() => e.maxHeight ? "fixed" : e.tableLayout), j = k(() => {
    if (e.data && e.data.length)
      return null;
    let C = "100%";
    e.height && m.value && (C = `${m.value}px`);
    const M = d.value;
    return {
      width: M ? `${M}px` : "",
      height: C
    };
  }), W = k(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), R = k(() => e.height ? {
    height: "100%"
  } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? {
    maxHeight: `calc(${e.maxHeight} - ${h.value + p.value}px)`
  } : {
    maxHeight: `${e.maxHeight - h.value - p.value}px`
  } : {});
  return {
    isHidden: o,
    renderExpanded: l,
    setDragVisible: r,
    isGroup: c,
    handleMouseLeave: g,
    handleHeaderFooterMousewheel: w,
    tableSize: H,
    emptyBlockStyle: j,
    handleFixedMousewheel: (C, M) => {
      const z = a.refs.bodyWrapper;
      if (Math.abs(M.spinY) > 0) {
        const Y = z.scrollTop;
        M.pixelY < 0 && Y !== 0 && C.preventDefault(), M.pixelY > 0 && z.scrollHeight - z.clientHeight > Y && C.preventDefault(), z.scrollTop += Math.ceil(M.pixelY / 5);
      } else
        z.scrollLeft += Math.ceil(M.pixelX / 5);
    },
    resizeProxyVisible: s,
    bodyWidth: Z,
    resizeState: i,
    doLayout: $,
    tableBodyStyles: y,
    tableLayout: U,
    scrollbarViewStyle: f,
    tableInnerStyle: W,
    scrollbarStyle: R
  };
}
function Fk(e) {
  const t = O(), n = () => {
    const o = e.vnode.el.querySelector(".hidden-columns"), l = { childList: !0, subtree: !0 }, s = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      s.forEach((r) => r());
    }), t.value.observe(o, l);
  };
  Ge(() => {
    n();
  }), $a(() => {
    var a;
    (a = t.value) == null || a.disconnect();
  });
}
var Bk = {
  data: {
    type: Array,
    default: () => []
  },
  size: aa,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: !0
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: !0
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: !0
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => ({
      hasChildren: "hasChildren",
      children: "children"
    })
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: !1
  },
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object]
};
function Td(e) {
  const t = e.tableLayout === "auto";
  let n = e.columns || [];
  t && n.every((o) => o.width === void 0) && (n = []);
  const a = (o) => {
    const l = {
      key: `${e.tableLayout}_${o.id}`,
      style: {},
      name: void 0
    };
    return t ? l.style = {
      width: `${o.width}px`
    } : l.name = o.id, l;
  };
  return Pe("colgroup", {}, n.map((o) => Pe("col", a(o))));
}
Td.props = ["columns", "tableLayout"];
const Vk = () => {
  const e = O(), t = (l, s) => {
    const r = e.value;
    r && r.scrollTo(l, s);
  }, n = (l, s) => {
    const r = e.value;
    r && Ye(s) && ["Top", "Left"].includes(l) && r[`setScroll${l}`](s);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (l) => n("Top", l),
    setScrollLeft: (l) => n("Left", l)
  };
};
let zk = 1;
const Hk = Q({
  name: "ElTable",
  directives: {
    Mousewheel: iw
  },
  components: {
    TableHeader: Tk,
    TableBody: Ak,
    TableFooter: Nk,
    ElScrollbar: la,
    hColgroup: Td
  },
  props: Bk,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  setup(e) {
    const { t } = at(), n = me("table"), a = Le();
    ct(sn, a);
    const o = pk(a, e);
    a.store = o;
    const l = new mk({
      store: a.store,
      table: a,
      fit: e.fit,
      showHeader: e.showHeader
    });
    a.layout = l;
    const s = k(() => (o.states.data.value || []).length === 0), {
      setCurrentRow: r,
      getSelectionRows: i,
      toggleRowSelection: c,
      clearSelection: f,
      clearFilter: d,
      toggleAllSelection: v,
      toggleRowExpansion: m,
      clearSort: h,
      sort: p
    } = Rk(o), {
      isHidden: b,
      renderExpanded: g,
      setDragVisible: w,
      isGroup: S,
      handleMouseLeave: y,
      handleHeaderFooterMousewheel: $,
      tableSize: T,
      emptyBlockStyle: E,
      handleFixedMousewheel: x,
      resizeProxyVisible: N,
      bodyWidth: I,
      resizeState: D,
      doLayout: H,
      tableBodyStyles: Z,
      tableLayout: U,
      scrollbarViewStyle: j,
      tableInnerStyle: W,
      scrollbarStyle: R
    } = Lk(e, l, o, a), { scrollBarRef: B, scrollTo: C, setScrollLeft: M, setScrollTop: z } = Vk(), Y = Zn(H, 50), ne = `${n.namespace.value}-table_${zk++}`;
    a.tableId = ne, a.state = {
      isGroup: S,
      resizeState: D,
      doLayout: H,
      debouncedUpdateLayout: Y
    };
    const le = k(() => e.sumText || t("el.table.sumText")), ve = k(() => e.emptyText || t("el.table.emptyText"));
    return Fk(a), {
      ns: n,
      layout: l,
      store: o,
      handleHeaderFooterMousewheel: $,
      handleMouseLeave: y,
      tableId: ne,
      tableSize: T,
      isHidden: b,
      isEmpty: s,
      renderExpanded: g,
      resizeProxyVisible: N,
      resizeState: D,
      isGroup: S,
      bodyWidth: I,
      tableBodyStyles: Z,
      emptyBlockStyle: E,
      debouncedUpdateLayout: Y,
      handleFixedMousewheel: x,
      setCurrentRow: r,
      getSelectionRows: i,
      toggleRowSelection: c,
      clearSelection: f,
      clearFilter: d,
      toggleAllSelection: v,
      toggleRowExpansion: m,
      clearSort: h,
      doLayout: H,
      sort: p,
      t,
      setDragVisible: w,
      context: a,
      computedSumText: le,
      computedEmptyText: ve,
      tableLayout: U,
      scrollbarViewStyle: j,
      tableInnerStyle: W,
      scrollbarStyle: R,
      scrollBarRef: B,
      scrollTo: C,
      setScrollLeft: M,
      setScrollTop: z
    };
  }
}), Kk = ["data-prefix"], Wk = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function jk(e, t, n, a, o, l) {
  const s = he("hColgroup"), r = he("table-header"), i = he("table-body"), c = he("table-footer"), f = he("el-scrollbar"), d = pr("mousewheel");
  return _(), L("div", {
    ref: "tableWrapper",
    class: A([
      {
        [e.ns.m("fit")]: e.fit,
        [e.ns.m("striped")]: e.stripe,
        [e.ns.m("border")]: e.border || e.isGroup,
        [e.ns.m("hidden")]: e.isHidden,
        [e.ns.m("group")]: e.isGroup,
        [e.ns.m("fluid-height")]: e.maxHeight,
        [e.ns.m("scrollable-x")]: e.layout.scrollX.value,
        [e.ns.m("scrollable-y")]: e.layout.scrollY.value,
        [e.ns.m("enable-row-hover")]: !e.store.states.isComplex.value,
        [e.ns.m("enable-row-transition")]: (e.store.states.data.value || []).length !== 0 && (e.store.states.data.value || []).length < 100,
        "has-footer": e.showSummary
      },
      e.ns.m(e.tableSize),
      e.className,
      e.ns.b(),
      e.ns.m(`layout-${e.tableLayout}`)
    ]),
    style: Fe(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (...v) => e.handleMouseLeave && e.handleMouseLeave(...v))
  }, [
    K("div", {
      class: A(e.ns.e("inner-wrapper")),
      style: Fe(e.tableInnerStyle)
    }, [
      K("div", Wk, [
        ae(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? je((_(), L("div", {
        key: 0,
        ref: "headerWrapper",
        class: A(e.ns.e("header-wrapper"))
      }, [
        K("table", {
          ref: "tableHeader",
          class: A(e.ns.e("header")),
          style: Fe(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          q(s, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          q(r, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [d, e.handleHeaderFooterMousewheel]
      ]) : ie("v-if", !0),
      K("div", {
        ref: "bodyWrapper",
        class: A(e.ns.e("body-wrapper"))
      }, [
        q(f, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: X(() => [
            K("table", {
              ref: "tableBody",
              class: A(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: Fe({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              q(s, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (_(), oe(r, {
                key: 0,
                ref: "tableHeaderRef",
                class: A(e.ns.e("body-header")),
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["class", "border", "default-sort", "store", "onSetDragVisible"])) : ie("v-if", !0),
              q(i, {
                context: e.context,
                highlight: e.highlightCurrentRow,
                "row-class-name": e.rowClassName,
                "tooltip-effect": e.tooltipEffect,
                "tooltip-options": e.tooltipOptions,
                "row-style": e.rowStyle,
                store: e.store,
                stripe: e.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]),
              e.showSummary && e.tableLayout === "auto" ? (_(), oe(c, {
                key: 1,
                class: A(e.ns.e("body-footer")),
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                "sum-text": e.computedSumText,
                "summary-method": e.summaryMethod
              }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : ie("v-if", !0)
            ], 6),
            e.isEmpty ? (_(), L("div", {
              key: 0,
              ref: "emptyBlock",
              style: Fe(e.emptyBlockStyle),
              class: A(e.ns.e("empty-block"))
            }, [
              K("span", {
                class: A(e.ns.e("empty-text"))
              }, [
                ae(e.$slots, "empty", {}, () => [
                  Qe(pe(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : ie("v-if", !0),
            e.$slots.append ? (_(), L("div", {
              key: 1,
              ref: "appendWrapper",
              class: A(e.ns.e("append-wrapper"))
            }, [
              ae(e.$slots, "append")
            ], 2)) : ie("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary && e.tableLayout === "fixed" ? je((_(), L("div", {
        key: 1,
        ref: "footerWrapper",
        class: A(e.ns.e("footer-wrapper"))
      }, [
        K("table", {
          class: A(e.ns.e("footer")),
          cellspacing: "0",
          cellpadding: "0",
          border: "0",
          style: Fe(e.tableBodyStyles)
        }, [
          q(s, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          q(c, {
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            "sum-text": e.computedSumText,
            "summary-method": e.summaryMethod
          }, null, 8, ["border", "default-sort", "store", "sum-text", "summary-method"])
        ], 6)
      ], 2)), [
        [$t, !e.isEmpty],
        [d, e.handleHeaderFooterMousewheel]
      ]) : ie("v-if", !0),
      e.border || e.isGroup ? (_(), L("div", {
        key: 2,
        class: A(e.ns.e("border-left-patch"))
      }, null, 2)) : ie("v-if", !0)
    ], 6),
    je(K("div", {
      ref: "resizeProxy",
      class: A(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [$t, e.resizeProxyVisible]
    ])
  ], 46, Kk);
}
var Yk = /* @__PURE__ */ Me(Hk, [["render", jk], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const Uk = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, qk = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
}, Gk = (e) => Uk[e] || "", Xk = {
  selection: {
    renderHeader({ store: e, column: t }) {
      function n() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return Pe(Sa, {
        disabled: n(),
        size: e.states.tableSize.value,
        indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
        "onUpdate:modelValue": e.toggleAllSelection,
        modelValue: e.states.isAllSelected.value,
        ariaLabel: t.label
      });
    },
    renderCell({
      row: e,
      column: t,
      store: n,
      $index: a
    }) {
      return Pe(Sa, {
        disabled: t.selectable ? !t.selectable.call(null, e, a) : !1,
        size: n.states.tableSize.value,
        onChange: () => {
          n.commit("rowSelectedChanged", e);
        },
        onClick: (o) => o.stopPropagation(),
        modelValue: n.isSelected(e),
        ariaLabel: t.label
      });
    },
    sortable: !1,
    resizable: !1
  },
  index: {
    renderHeader({ column: e }) {
      return e.label || "#";
    },
    renderCell({
      column: e,
      $index: t
    }) {
      let n = t + 1;
      const a = e.index;
      return typeof a == "number" ? n = t + a : typeof a == "function" && (n = a(t)), Pe("div", {}, [n]);
    },
    sortable: !1
  },
  expand: {
    renderHeader({ column: e }) {
      return e.label || "";
    },
    renderCell({
      row: e,
      store: t,
      expanded: n
    }) {
      const { ns: a } = t, o = [a.e("expand-icon")];
      return n && o.push(a.em("expand-icon", "expanded")), Pe("div", {
        class: o,
        onClick: function(s) {
          s.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          Pe(xe, null, {
            default: () => [Pe(On)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function Zk({
  row: e,
  column: t,
  $index: n
}) {
  var a;
  const o = t.property, l = o && ug(e, o).value;
  return t && t.formatter ? t.formatter(e, t, l, n) : ((a = l == null ? void 0 : l.toString) == null ? void 0 : a.call(l)) || "";
}
function Qk({
  row: e,
  treeNode: t,
  store: n
}, a = !1) {
  const { ns: o } = n;
  if (!t)
    return a ? [
      Pe("span", {
        class: o.e("placeholder")
      })
    ] : null;
  const l = [], s = function(r) {
    r.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && l.push(Pe("span", {
    class: o.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const r = [
      o.e("expand-icon"),
      t.expanded ? o.em("expand-icon", "expanded") : ""
    ];
    let i = On;
    t.loading && (i = Pr), l.push(Pe("div", {
      class: r,
      onClick: s
    }, {
      default: () => [
        Pe(xe, { class: { [o.is("loading")]: t.loading } }, {
          default: () => [Pe(i)]
        })
      ]
    }));
  } else
    l.push(Pe("span", {
      class: o.e("placeholder")
    }));
  return l;
}
function Yi(e, t) {
  return e.reduce((n, a) => (n[a] = a, n), t);
}
function Jk(e, t) {
  const n = Le();
  return {
    registerComplexWatchers: () => {
      const l = ["fixed"], s = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, r = Yi(l, s);
      Object.keys(r).forEach((i) => {
        const c = s[i];
        Gn(t, c) && ue(() => t[c], (f) => {
          let d = f;
          c === "width" && i === "realWidth" && (d = Zr(f)), c === "minWidth" && i === "realMinWidth" && (d = wd(f)), n.columnConfig.value[c] = d, n.columnConfig.value[i] = d;
          const v = c === "fixed";
          e.value.store.scheduleLayout(v);
        });
      });
    },
    registerNormalWatchers: () => {
      const l = [
        "label",
        "filters",
        "filterMultiple",
        "filteredValue",
        "sortable",
        "index",
        "formatter",
        "className",
        "labelClassName",
        "showOverflowTooltip"
      ], s = {
        property: "prop",
        align: "realAlign",
        headerAlign: "realHeaderAlign"
      }, r = Yi(l, s);
      Object.keys(r).forEach((i) => {
        const c = s[i];
        Gn(t, c) && ue(() => t[c], (f) => {
          n.columnConfig.value[i] = f;
        });
      });
    }
  };
}
function e$(e, t, n) {
  const a = Le(), o = O(""), l = O(!1), s = O(), r = O(), i = me("table");
  Mt(() => {
    s.value = e.align ? `is-${e.align}` : null, s.value;
  }), Mt(() => {
    r.value = e.headerAlign ? `is-${e.headerAlign}` : s.value, r.value;
  });
  const c = k(() => {
    let y = a.vnode.vParent || a.parent;
    for (; y && !y.tableId && !y.columnId; )
      y = y.vnode.vParent || y.parent;
    return y;
  }), f = k(() => {
    const { store: y } = a.parent;
    if (!y)
      return !1;
    const { treeData: $ } = y.states, T = $.value;
    return T && Object.keys(T).length > 0;
  }), d = O(Zr(e.width)), v = O(wd(e.minWidth)), m = (y) => (d.value && (y.width = d.value), v.value && (y.minWidth = v.value), !d.value && v.value && (y.width = void 0), y.minWidth || (y.minWidth = 80), y.realWidth = Number(y.width === void 0 ? y.minWidth : y.width), y), h = (y) => {
    const $ = y.type, T = Xk[$] || {};
    Object.keys(T).forEach((x) => {
      const N = T[x];
      x !== "className" && N !== void 0 && (y[x] = N);
    });
    const E = Gk($);
    if (E) {
      const x = `${u(i.namespace)}-${E}`;
      y.className = y.className ? `${y.className} ${x}` : x;
    }
    return y;
  }, p = (y) => {
    Array.isArray(y) ? y.forEach((T) => $(T)) : $(y);
    function $(T) {
      var E;
      ((E = T == null ? void 0 : T.type) == null ? void 0 : E.name) === "ElTableColumn" && (T.vParent = a);
    }
  };
  return {
    columnId: o,
    realAlign: s,
    isSubColumn: l,
    realHeaderAlign: r,
    columnOrTableParent: c,
    setColumnWidth: m,
    setColumnForcedProps: h,
    setColumnRenders: (y) => {
      e.renderHeader ? mt("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : y.type !== "selection" && (y.renderHeader = (T) => {
        a.columnConfig.value.label;
        const E = t.header;
        return E ? E(T) : y.label;
      });
      let $ = y.renderCell;
      return y.type === "expand" ? (y.renderCell = (T) => Pe("div", {
        class: "cell"
      }, [$(T)]), n.value.renderExpanded = (T) => t.default ? t.default(T) : t.default) : ($ = $ || Zk, y.renderCell = (T) => {
        let E = null;
        if (t.default) {
          const Z = t.default(T);
          E = Z.some((U) => U.type !== dr) ? Z : $(T);
        } else
          E = $(T);
        const { columns: x } = n.value.store.states, N = x.value.findIndex((Z) => Z.type === "default"), I = f.value && T.cellIndex === N, D = Qk(T, I), H = {
          class: "cell",
          style: {}
        };
        return y.showOverflowTooltip && (H.class = `${H.class} ${u(i.namespace)}-tooltip`, H.style = {
          width: `${(T.column.realWidth || Number(T.column.width)) - 1}px`
        }), p(E), Pe("div", H, [D, E]);
      }), y;
    },
    getPropsData: (...y) => y.reduce(($, T) => (Array.isArray(T) && T.forEach((E) => {
      $[E] = e[E];
    }), $), {}),
    getColumnElIndex: (y, $) => Array.prototype.indexOf.call(y, $),
    updateColumnOrder: () => {
      n.value.store.commit("updateColumnOrder", a.columnConfig.value);
    }
  };
}
var t$ = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: !1
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: !0
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: {
    type: [Boolean, Object],
    default: void 0
  },
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: !0
  },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => ["ascending", "descending", null],
    validator: (e) => e.every((t) => ["ascending", "descending", null].includes(t))
  }
};
let n$ = 1;
var Od = Q({
  name: "ElTableColumn",
  components: {
    ElCheckbox: Sa
  },
  props: t$,
  setup(e, { slots: t }) {
    const n = Le(), a = O({}), o = k(() => {
      let S = n.parent;
      for (; S && !S.tableId; )
        S = S.parent;
      return S;
    }), { registerNormalWatchers: l, registerComplexWatchers: s } = Jk(o, e), {
      columnId: r,
      isSubColumn: i,
      realHeaderAlign: c,
      columnOrTableParent: f,
      setColumnWidth: d,
      setColumnForcedProps: v,
      setColumnRenders: m,
      getPropsData: h,
      getColumnElIndex: p,
      realAlign: b,
      updateColumnOrder: g
    } = e$(e, t, o), w = f.value;
    r.value = `${w.tableId || w.columnId}_column_${n$++}`, fr(() => {
      i.value = o.value !== w;
      const S = e.type || "default", y = e.sortable === "" ? !0 : e.sortable, $ = mn(e.showOverflowTooltip) ? w.props.showOverflowTooltip : e.showOverflowTooltip, T = {
        ...qk[S],
        id: r.value,
        type: S,
        property: e.prop || e.property,
        align: b,
        headerAlign: c,
        showOverflowTooltip: $,
        filterable: e.filters || e.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        isColumnGroup: !1,
        isSubColumn: !1,
        filterOpened: !1,
        sortable: y,
        index: e.index,
        rawColumnKey: n.vnode.key
      };
      let D = h([
        "columnKey",
        "label",
        "className",
        "labelClassName",
        "type",
        "renderHeader",
        "formatter",
        "fixed",
        "resizable"
      ], ["sortMethod", "sortBy", "sortOrders"], ["selectable", "reserveSelection"], [
        "filterMethod",
        "filters",
        "filterMultiple",
        "filterOpened",
        "filteredValue",
        "filterPlacement"
      ]);
      D = nk(T, D), D = ok(m, d, v)(D), a.value = D, l(), s();
    }), Ge(() => {
      var S;
      const y = f.value, $ = i.value ? y.vnode.el.children : (S = y.refs.hiddenColumns) == null ? void 0 : S.children, T = () => p($ || [], n.vnode.el);
      a.value.getColumnIndex = T, T() > -1 && o.value.store.commit("insertColumn", a.value, i.value ? y.columnConfig.value : null, g);
    }), Ut(() => {
      o.value.store.commit("removeColumn", a.value, i.value ? w.columnConfig.value : null, g);
    }), n.columnId = r.value, n.columnConfig = a;
  },
  render() {
    var e, t, n;
    try {
      const a = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, {
        row: {},
        column: {},
        $index: -1
      }), o = [];
      if (Array.isArray(a))
        for (const s of a)
          ((n = s.type) == null ? void 0 : n.name) === "ElTableColumn" || s.shapeFlag & 2 ? o.push(s) : s.type === Te && Array.isArray(s.children) && s.children.forEach((r) => {
            (r == null ? void 0 : r.patchFlag) !== 1024 && !xt(r == null ? void 0 : r.children) && o.push(r);
          });
      return Pe("div", o);
    } catch {
      return Pe("div", []);
    }
  }
});
const Pd = St(Yk, {
  TableColumn: Od
}), ur = na(Od), hl = Symbol("tabsRootContextKey"), a$ = _e({
  tabs: {
    type: ce(Array),
    default: () => en([])
  }
}), Md = "ElTabBar", o$ = Q({
  name: Md
}), l$ = /* @__PURE__ */ Q({
  ...o$,
  props: a$,
  setup(e, { expose: t }) {
    const n = e, a = Le(), o = Se(hl);
    o || Ta(Md, "<el-tabs><el-tab-bar /></el-tabs>");
    const l = me("tabs"), s = O(), r = O(), i = () => {
      let f = 0, d = 0;
      const v = ["top", "bottom"].includes(o.props.tabPosition) ? "width" : "height", m = v === "width" ? "x" : "y", h = m === "x" ? "left" : "top";
      return n.tabs.every((p) => {
        var b, g;
        const w = (g = (b = a.parent) == null ? void 0 : b.refs) == null ? void 0 : g[`tab-${p.uid}`];
        if (!w)
          return !1;
        if (!p.active)
          return !0;
        f = w[`offset${$n(h)}`], d = w[`client${$n(v)}`];
        const S = window.getComputedStyle(w);
        return v === "width" && (n.tabs.length > 1 && (d -= Number.parseFloat(S.paddingLeft) + Number.parseFloat(S.paddingRight)), f += Number.parseFloat(S.paddingLeft)), !1;
      }), {
        [v]: `${d}px`,
        transform: `translate${$n(m)}(${f}px)`
      };
    }, c = () => r.value = i();
    return ue(() => n.tabs, async () => {
      await $e(), c();
    }, { immediate: !0 }), Mn(s, () => c()), t({
      ref: s,
      update: c
    }), (f, d) => (_(), L("div", {
      ref_key: "barRef",
      ref: s,
      class: A([u(l).e("active-bar"), u(l).is(u(o).props.tabPosition)]),
      style: Fe(r.value)
    }, null, 6));
  }
});
var r$ = /* @__PURE__ */ Me(l$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);
const s$ = _e({
  panes: {
    type: ce(Array),
    default: () => en([])
  },
  currentName: {
    type: [String, Number],
    default: ""
  },
  editable: Boolean,
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  stretch: Boolean
}), i$ = {
  tabClick: (e, t, n) => n instanceof Event,
  tabRemove: (e, t) => t instanceof Event
}, Ui = "ElTabNav", u$ = Q({
  name: Ui,
  props: s$,
  emits: i$,
  setup(e, {
    expose: t,
    emit: n
  }) {
    const a = Le(), o = Se(hl);
    o || Ta(Ui, "<el-tabs><tab-nav /></el-tabs>");
    const l = me("tabs"), s = ef(), r = cf(), i = O(), c = O(), f = O(), d = O(), v = O(!1), m = O(0), h = O(!1), p = O(!0), b = k(() => ["top", "bottom"].includes(o.props.tabPosition) ? "width" : "height"), g = k(() => ({
      transform: `translate${b.value === "width" ? "X" : "Y"}(-${m.value}px)`
    })), w = () => {
      if (!i.value)
        return;
      const N = i.value[`offset${$n(b.value)}`], I = m.value;
      if (!I)
        return;
      const D = I > N ? I - N : 0;
      m.value = D;
    }, S = () => {
      if (!i.value || !c.value)
        return;
      const N = c.value[`offset${$n(b.value)}`], I = i.value[`offset${$n(b.value)}`], D = m.value;
      if (N - D <= I)
        return;
      const H = N - D > I * 2 ? D + I : N - I;
      m.value = H;
    }, y = async () => {
      const N = c.value;
      if (!v.value || !f.value || !i.value || !N)
        return;
      await $e();
      const I = f.value.querySelector(".is-active");
      if (!I)
        return;
      const D = i.value, H = ["top", "bottom"].includes(o.props.tabPosition), Z = I.getBoundingClientRect(), U = D.getBoundingClientRect(), j = H ? N.offsetWidth - U.width : N.offsetHeight - U.height, W = m.value;
      let R = W;
      H ? (Z.left < U.left && (R = W - (U.left - Z.left)), Z.right > U.right && (R = W + Z.right - U.right)) : (Z.top < U.top && (R = W - (U.top - Z.top)), Z.bottom > U.bottom && (R = W + (Z.bottom - U.bottom))), R = Math.max(R, 0), m.value = Math.min(R, j);
    }, $ = () => {
      var N;
      if (!c.value || !i.value)
        return;
      e.stretch && ((N = d.value) == null || N.update());
      const I = c.value[`offset${$n(b.value)}`], D = i.value[`offset${$n(b.value)}`], H = m.value;
      D < I ? (v.value = v.value || {}, v.value.prev = H, v.value.next = H + D < I, I - H < D && (m.value = I - D)) : (v.value = !1, H > 0 && (m.value = 0));
    }, T = (N) => {
      const I = N.code, {
        up: D,
        down: H,
        left: Z,
        right: U
      } = We;
      if (![D, H, Z, U].includes(I))
        return;
      const j = Array.from(N.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")), W = j.indexOf(N.target);
      let R;
      I === Z || I === D ? W === 0 ? R = j.length - 1 : R = W - 1 : W < j.length - 1 ? R = W + 1 : R = 0, j[R].focus({
        preventScroll: !0
      }), j[R].click(), E();
    }, E = () => {
      p.value && (h.value = !0);
    }, x = () => h.value = !1;
    return ue(s, (N) => {
      N === "hidden" ? p.value = !1 : N === "visible" && setTimeout(() => p.value = !0, 50);
    }), ue(r, (N) => {
      N ? setTimeout(() => p.value = !0, 50) : p.value = !1;
    }), Mn(f, $), Ge(() => setTimeout(() => y(), 0)), Qo(() => $()), t({
      scrollToActiveTab: y,
      removeFocus: x
    }), ue(() => e.panes, () => a.update(), {
      flush: "post",
      deep: !0
    }), () => {
      const N = v.value ? [q("span", {
        class: [l.e("nav-prev"), l.is("disabled", !v.value.prev)],
        onClick: w
      }, [q(xe, null, {
        default: () => [q(qa, null, null)]
      })]), q("span", {
        class: [l.e("nav-next"), l.is("disabled", !v.value.next)],
        onClick: S
      }, [q(xe, null, {
        default: () => [q(On, null, null)]
      })])] : null, I = e.panes.map((D, H) => {
        var Z, U, j, W;
        const R = D.uid, B = D.props.disabled, C = (U = (Z = D.props.name) != null ? Z : D.index) != null ? U : `${H}`, M = !B && (D.isClosable || e.editable);
        D.index = `${H}`;
        const z = M ? q(xe, {
          class: "is-icon-close",
          onClick: (le) => n("tabRemove", D, le)
        }, {
          default: () => [q(Uo, null, null)]
        }) : null, Y = ((W = (j = D.slots).label) == null ? void 0 : W.call(j)) || D.props.label, ne = !B && D.active ? 0 : -1;
        return q("div", {
          ref: `tab-${R}`,
          class: [l.e("item"), l.is(o.props.tabPosition), l.is("active", D.active), l.is("disabled", B), l.is("closable", M), l.is("focus", h.value)],
          id: `tab-${C}`,
          key: `tab-${R}`,
          "aria-controls": `pane-${C}`,
          role: "tab",
          "aria-selected": D.active,
          tabindex: ne,
          onFocus: () => E(),
          onBlur: () => x(),
          onClick: (le) => {
            x(), n("tabClick", D, C, le);
          },
          onKeydown: (le) => {
            M && (le.code === We.delete || le.code === We.backspace) && n("tabRemove", D, le);
          }
        }, [Y, z]);
      });
      return q("div", {
        ref: f,
        class: [l.e("nav-wrap"), l.is("scrollable", !!v.value), l.is(o.props.tabPosition)]
      }, [N, q("div", {
        class: l.e("nav-scroll"),
        ref: i
      }, [q("div", {
        class: [l.e("nav"), l.is(o.props.tabPosition), l.is("stretch", e.stretch && ["top", "bottom"].includes(o.props.tabPosition))],
        ref: c,
        style: g.value,
        role: "tablist",
        onKeydown: T
      }, [e.type ? null : q(r$, {
        ref: d,
        tabs: [...e.panes]
      }, null), I])])]);
    };
  }
}), c$ = _e({
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  activeName: {
    type: [String, Number]
  },
  closable: Boolean,
  addable: Boolean,
  modelValue: {
    type: [String, Number]
  },
  editable: Boolean,
  tabPosition: {
    type: String,
    values: ["top", "right", "bottom", "left"],
    default: "top"
  },
  beforeLeave: {
    type: ce(Function),
    default: () => !0
  },
  stretch: Boolean
}), Al = (e) => xt(e) || Ye(e), d$ = {
  [vt]: (e) => Al(e),
  tabClick: (e, t) => t instanceof Event,
  tabChange: (e) => Al(e),
  edit: (e, t) => ["remove", "add"].includes(t),
  tabRemove: (e) => Al(e),
  tabAdd: () => !0
}, f$ = Q({
  name: "ElTabs",
  props: c$,
  emits: d$,
  setup(e, {
    emit: t,
    slots: n,
    expose: a
  }) {
    var o, l;
    const s = me("tabs"), {
      children: r,
      addChild: i,
      removeChild: c
    } = Iy(Le(), "ElTabPane"), f = O(), d = O((l = (o = e.modelValue) != null ? o : e.activeName) != null ? l : "0"), v = async (b, g = !1) => {
      var w, S, y;
      if (!(d.value === b || mn(b)))
        try {
          await ((w = e.beforeLeave) == null ? void 0 : w.call(e, b, d.value)) !== !1 && (d.value = b, g && (t(vt, b), t("tabChange", b)), (y = (S = f.value) == null ? void 0 : S.removeFocus) == null || y.call(S));
        } catch {
        }
    }, m = (b, g, w) => {
      b.props.disabled || (v(g, !0), t("tabClick", b, w));
    }, h = (b, g) => {
      b.props.disabled || mn(b.props.name) || (g.stopPropagation(), t("edit", b.props.name, "remove"), t("tabRemove", b.props.name));
    }, p = () => {
      t("edit", void 0, "add"), t("tabAdd");
    };
    return Ga({
      from: '"activeName"',
      replacement: '"model-value" or "v-model"',
      scope: "ElTabs",
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/tabs.html#attributes",
      type: "Attribute"
    }, k(() => !!e.activeName)), ue(() => e.activeName, (b) => v(b)), ue(() => e.modelValue, (b) => v(b)), ue(d, async () => {
      var b;
      await $e(), (b = f.value) == null || b.scrollToActiveTab();
    }), ct(hl, {
      props: e,
      currentName: d,
      registerPane: i,
      unregisterPane: c
    }), a({
      currentName: d
    }), () => {
      const b = n.addIcon, g = e.editable || e.addable ? q("span", {
        class: s.e("new-tab"),
        tabindex: "0",
        onClick: p,
        onKeydown: (y) => {
          y.code === We.enter && p();
        }
      }, [b ? ae(n, "addIcon") : q(xe, {
        class: s.is("icon-plus")
      }, {
        default: () => [q(Hu, null, null)]
      })]) : null, w = q("div", {
        class: [s.e("header"), s.is(e.tabPosition)]
      }, [g, q(u$, {
        ref: f,
        currentName: d.value,
        editable: e.editable,
        type: e.type,
        panes: r.value,
        stretch: e.stretch,
        onTabClick: m,
        onTabRemove: h
      }, null)]), S = q("div", {
        class: s.e("content")
      }, [ae(n, "default")]);
      return q("div", {
        class: [s.b(), s.m(e.tabPosition), {
          [s.m("card")]: e.type === "card",
          [s.m("border-card")]: e.type === "border-card"
        }]
      }, [...e.tabPosition !== "bottom" ? [w, S] : [S, w]]);
    };
  }
}), p$ = _e({
  label: {
    type: String,
    default: ""
  },
  name: {
    type: [String, Number]
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
}), v$ = ["id", "aria-hidden", "aria-labelledby"], xd = "ElTabPane", m$ = Q({
  name: xd
}), h$ = /* @__PURE__ */ Q({
  ...m$,
  props: p$,
  setup(e) {
    const t = e, n = Le(), a = Nn(), o = Se(hl);
    o || Ta(xd, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
    const l = me("tab-pane"), s = O(), r = k(() => t.closable || o.props.closable), i = rs(() => {
      var m;
      return o.currentName.value === ((m = t.name) != null ? m : s.value);
    }), c = O(i.value), f = k(() => {
      var m;
      return (m = t.name) != null ? m : s.value;
    }), d = rs(() => !t.lazy || c.value || i.value);
    ue(i, (m) => {
      m && (c.value = !0);
    });
    const v = Rn({
      uid: n.uid,
      slots: a,
      props: t,
      paneName: f,
      active: i,
      index: s,
      isClosable: r
    });
    return Ge(() => {
      o.registerPane(v);
    }), $a(() => {
      o.unregisterPane(v.uid);
    }), (m, h) => u(d) ? je((_(), L("div", {
      key: 0,
      id: `pane-${u(f)}`,
      class: A(u(l).b()),
      role: "tabpanel",
      "aria-hidden": !u(i),
      "aria-labelledby": `tab-${u(f)}`
    }, [
      ae(m.$slots, "default")
    ], 10, v$)), [
      [$t, u(i)]
    ]) : ie("v-if", !0);
  }
});
var Ad = /* @__PURE__ */ Me(h$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);
const g$ = St(f$, {
  TabPane: Ad
}), b$ = na(Ad), gt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, y$ = Q({
  name: "KButton",
  components: { ElButton: In },
  props: {
    // 是否可以点击
    clickState: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 },
    // 是否有权限
    iconLock: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t, attrs: n }) {
    const a = O(!0), o = O(null), l = () => {
      a.value && (a.value = !1, t("click")), s();
    }, s = () => {
      clearTimeout(o.value), o.value = setTimeout(() => {
        a.value = !0;
      }, 800);
    }, r = k(() => {
      const { border: i } = e, { type: c = "text" } = n;
      return i ? {
        backgroundColor: "transparent",
        color: `var(--el-color-${c})`
      } : {};
    });
    return { onclick: l, buttonStatus: a, buttonStyle: r };
  }
}), w$ = {
  key: 0,
  class: "el-icon-lock el-icon--right"
};
function C$(e, t, n, a, o, l) {
  const s = he("el-button");
  return _(), oe(s, Ue({
    disabled: !e.buttonStatus || e.disabled,
    style: e.buttonStyle,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: Ze(e.onclick, ["stop"])
  }), {
    default: X(() => [
      ae(e.$slots, "default"),
      e.iconLock ? (_(), L("i", w$)) : ie("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "style", "click-state", "onClick"]);
}
const To = /* @__PURE__ */ gt(y$, [["render", C$]]);
To.install = function(e) {
  e.component(To.name, To);
};
const S$ = Q({
  name: "KInput",
  components: { ElInput: tn },
  props: {
    modelValue: { type: [String, Number], default: "" },
    /**
     * @param { ?number } point 小数点后几位
     * @example :point="2"
     * @param { ?string } 输入框的类型 integer 只能输入整数
     */
    point: { type: Number, default: 2 },
    type: { type: String, default: "number" }
  },
  emits: ["change", "update:modelValue", "enter"],
  setup(e, { emit: t, attrs: n }) {
    const a = O(null), o = O(!0), l = k({
      get() {
        return e.modelValue;
      },
      set(f) {
        s(f);
      }
    }), s = (f) => {
      let d = f, v = n.max;
      if (e.type === "number") {
        if (d = d.replace(/[^\d.]/g, ""), d = d.replace(/^\./g, ""), d = d.replace(/\.{2,}/g, "."), d = d.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), d.indexOf(".") < 0 && d !== "" && d.substr(0, 1) === "0" && d.length === 2 && (d = d.substr(1, d.length)), d !== "")
          if (d.indexOf(".") > 0) {
            if (e.point) {
              const m = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
              d = d.match(m)[0] || null;
            }
          } else
            d === "." && (d = "");
        v = n.max ?? 999999.99;
      } else
        e.type === "integer" ? (d = d.replace(/[^\d]/g, ""), v = n.max ?? 999999) : e.type === "intText" && (d = d.replace(/[^\w]/g, ""));
      !n.maxlength && v !== void 0 && d && Number(d) > Number(v) && (d = v), n.min !== void 0 && d && Number(d) < Number(n.min) && (d = n.min), t("update:modelValue", d);
    }, r = () => {
      o.value && (o.value = !1, l.value && t("enter")), c();
    }, i = (f) => {
      t("change", f);
    }, c = () => {
      clearTimeout(a.value), a.value = setTimeout(() => {
        o.value = !0;
      }, 800);
    };
    return {
      inputValue: l,
      changeValue: i,
      searchContent: r
    };
  }
});
function k$(e, t, n, a, o, l) {
  const s = he("el-input");
  return _(), oe(s, Ue({
    modelValue: e.inputValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => e.inputValue = r),
    modelModifiers: { trim: !0 }
  }, e.$attrs, {
    onKeyup: ut(e.searchContent, ["enter"]),
    onChange: e.changeValue
  }), vn({ _: 2 }, [
    e.$slots.append ? {
      name: "append",
      fn: X(() => [
        ae(e.$slots, "append")
      ]),
      key: "0"
    } : void 0,
    e.$slots.prepend ? {
      name: "prepend",
      fn: X(() => [
        ae(e.$slots, "prepend")
      ]),
      key: "1"
    } : void 0,
    e.$slots.prefix ? {
      name: "prefix",
      fn: X(() => [
        ae(e.$slots, "prefix")
      ]),
      key: "2"
    } : void 0,
    e.$slots.suffix ? {
      name: "suffix",
      fn: X(() => [
        ae(e.$slots, "suffix")
      ]),
      key: "3"
    } : void 0
  ]), 1040, ["modelValue", "onKeyup", "onChange"]);
}
const Va = /* @__PURE__ */ gt(S$, [["render", k$]]);
Va.install = function(e) {
  e.component(Va.name, Va);
};
const $$ = Q({
  name: "KInputNumber",
  components: { Minus: Lg, Plus: Hu, KInput: Va },
  props: {
    modelValue: { type: [String, Number], default: "" },
    step: { type: Number, default: 1 },
    placeholder: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 },
    controls: { type: Boolean, default: !0 },
    size: { type: String, default: "default" },
    max: { type: Number, default: 999999 },
    min: { type: Number, default: 1 },
    type: { type: String, default: "integer" }
  },
  emits: ["update:modelValue", "blur", "focus", "enter", "change"],
  setup(e, { emit: t }) {
    const n = O(1), a = O(null), o = O(!1), l = k(() => e.modelValue <= e.min), s = k(() => e.modelValue >= e.max), r = k({
      get: () => e.modelValue,
      set: (b) => {
        t("update:modelValue", b);
      }
    }), i = (b) => t("blur", b), c = (b) => t("focus", b), f = (b) => t("enter", b), d = (b) => {
      $e(() => {
        const g = b === "" ? void 0 : Number(b);
        (!Number.isNaN(g) || b === "") && p(g);
      });
    }, v = (b) => {
      o.value = !b, a.value = b;
    }, m = O(-1);
    Mt(() => {
      n.value = e.modelValue;
    }), ue(() => m.value, (b) => {
      b < 0 && (r.value = e.modelValue, d(n.value));
    }, { immediate: !0 });
    const h = (b) => {
      const g = b === "increase", w = g ? s.value : l.value;
      if (e.disabled || w)
        return;
      const S = o.value ? 0 : r.value, y = a.value ? n.value : S, $ = g ? y + e.step : y - e.step;
      p($);
    }, p = (b) => {
      a.value = b;
      let g = b;
      m.value !== g && (m.value = b, g >= e.max && (g = e.max), g <= e.min && (g = e.min), a.value === void 0 && (g = 1), t("update:modelValue", g), t("change", g, m.value), n.value = g);
    };
    return {
      currentValue: n,
      minDisabled: l,
      maxDisabled: s,
      handleBlur: i,
      handleFocus: c,
      handleKeyUp: f,
      handleInputChange: d,
      handleInput: v,
      clickBtnHandle: h
    };
  }
});
function _$(e, t, n, a, o, l) {
  const s = he("minus"), r = he("el-icon"), i = he("plus"), c = he("k-input");
  return _(), L("div", {
    class: A(["el-input-number", { "is-disabled": e.disabled }, { "is-without-controls": !e.controls }, e.size ? "el-input-number--" + e.size : ""])
  }, [
    e.controls ? (_(), L("span", {
      key: 0,
      class: A(["el-input-number__decrease", { "is-disabled": e.minDisabled }]),
      role: "button",
      onClick: t[0] || (t[0] = (f) => e.clickBtnHandle("decrease"))
    }, [
      q(r, { class: "el-input__icon" }, {
        default: X(() => [
          q(s)
        ]),
        _: 1
      })
    ], 2)) : ie("", !0),
    e.controls ? (_(), L("span", {
      key: 1,
      class: A(["el-input-number__increase", { "is-disabled": e.maxDisabled }]),
      role: "button",
      onClick: t[1] || (t[1] = (f) => e.clickBtnHandle("increase"))
    }, [
      q(r, { class: "el-input__icon" }, {
        default: X(() => [
          q(i)
        ]),
        _: 1
      })
    ], 2)) : ie("", !0),
    q(c, Ue({
      ref: "input",
      modelValue: e.currentValue,
      "onUpdate:modelValue": t[2] || (t[2] = (f) => e.currentValue = f),
      disabled: e.disabled,
      type: e.type
    }, e.$attrs, {
      onBlur: e.handleBlur,
      maxlength: "6",
      onFocus: e.handleFocus,
      onChange: e.handleInputChange,
      onInput: e.handleInput,
      onKeyup: ut(e.handleKeyUp, ["enter"])
    }), null, 16, ["modelValue", "disabled", "type", "onBlur", "onFocus", "onChange", "onInput", "onKeyup"])
  ], 2);
}
const za = /* @__PURE__ */ gt($$, [["render", _$]]);
za.install = function(e) {
  e.component(za.name, za);
};
/*! Element Plus v2.4.3 */
var Dd = {
  name: "zh-cn",
  el: {
    colorpicker: {
      confirm: "确定",
      clear: "清空"
    },
    datepicker: {
      now: "此刻",
      today: "今天",
      cancel: "取消",
      clear: "清空",
      confirm: "确定",
      selectDate: "选择日期",
      selectTime: "选择时间",
      startDate: "开始日期",
      startTime: "开始时间",
      endDate: "结束日期",
      endTime: "结束时间",
      prevYear: "前一年",
      nextYear: "后一年",
      prevMonth: "上个月",
      nextMonth: "下个月",
      year: "年",
      month1: "1 月",
      month2: "2 月",
      month3: "3 月",
      month4: "4 月",
      month5: "5 月",
      month6: "6 月",
      month7: "7 月",
      month8: "8 月",
      month9: "9 月",
      month10: "10 月",
      month11: "11 月",
      month12: "12 月",
      weeks: {
        sun: "日",
        mon: "一",
        tue: "二",
        wed: "三",
        thu: "四",
        fri: "五",
        sat: "六"
      },
      months: {
        jan: "一月",
        feb: "二月",
        mar: "三月",
        apr: "四月",
        may: "五月",
        jun: "六月",
        jul: "七月",
        aug: "八月",
        sep: "九月",
        oct: "十月",
        nov: "十一月",
        dec: "十二月"
      }
    },
    select: {
      loading: "加载中",
      noMatch: "无匹配数据",
      noData: "无数据",
      placeholder: "请选择"
    },
    cascader: {
      noMatch: "无匹配数据",
      loading: "加载中",
      placeholder: "请选择",
      noData: "暂无数据"
    },
    pagination: {
      goto: "前往",
      pagesize: "条/页",
      total: "共 {total} 条",
      pageClassifier: "页",
      page: "页",
      prev: "上一页",
      next: "下一页",
      currentPage: "第 {pager} 页",
      prevPages: "向前 {pager} 页",
      nextPages: "向后 {pager} 页",
      deprecationWarning: "你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"
    },
    messagebox: {
      title: "提示",
      confirm: "确定",
      cancel: "取消",
      error: "输入的数据不合法!"
    },
    upload: {
      deleteTip: "按 delete 键可删除",
      delete: "删除",
      preview: "查看图片",
      continue: "继续上传"
    },
    table: {
      emptyText: "暂无数据",
      confirmFilter: "筛选",
      resetFilter: "重置",
      clearFilter: "全部",
      sumText: "合计"
    },
    tree: {
      emptyText: "暂无数据"
    },
    transfer: {
      noMatch: "无匹配数据",
      noData: "无数据",
      titles: ["列表 1", "列表 2"],
      filterPlaceholder: "请输入搜索内容",
      noCheckedFormat: "共 {total} 项",
      hasCheckedFormat: "已选 {checked}/{total} 项"
    },
    image: {
      error: "加载失败"
    },
    pageHeader: {
      title: "返回"
    },
    popconfirm: {
      confirmButtonText: "确定",
      cancelButtonText: "取消"
    }
  }
};
const E$ = Q({
  name: "KPage",
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: !1 },
    small: { type: Boolean, default: !1 },
    pagerCount: { type: Number, default: 7 }
  },
  components: { ElConfigProvider: yc, ElPagination: WS },
  emits: ["update:modelValue", "update:size", "current-change", "size-change", "change"],
  setup(e, { emit: t }) {
    const n = Dd, a = k(() => {
      const { total: c, size: f, showSize: d } = e;
      return d ? !0 : c > f;
    }), o = k({
      get() {
        return e.modelValue;
      },
      set(c) {
        t("update:modelValue", c);
      }
    }), l = k({
      get: () => e.size,
      set: (c) => t("update:size", c)
    }), s = k(() => {
      const c = ["total", "sizes", "prev", "pager", "next", "jumper"];
      return e.showSize || c.splice(1, 1), c.join(",");
    });
    return {
      locale: n,
      currentPage: o,
      layoutList: s,
      handleSizeChange: (c) => {
        o.value = 1, t("update:size", c), t("size-change", c), t("change", { page: e.size === c ? o.value : 1, size: c });
      },
      handleCurrentChange: (c) => {
        t("current-change", c), t("change", { page: c, size: e.size });
      },
      showPage: a,
      pageSize: l
    };
  }
}), T$ = {
  key: 0,
  class: "page-right mt20"
};
function O$(e, t, n, a, o, l) {
  const s = he("el-pagination"), r = he("el-config-provider");
  return e.showPage ? (_(), L("div", T$, [
    q(r, { locale: e.locale }, {
      default: X(() => [
        q(s, Ue({
          onSizeChange: e.handleSizeChange,
          onCurrentChange: e.handleCurrentChange,
          currentPage: e.currentPage,
          "onUpdate:currentPage": t[0] || (t[0] = (i) => e.currentPage = i),
          "page-sizes": [10, 20, 50, 100],
          "page-size": e.pageSize,
          "onUpdate:pageSize": t[1] || (t[1] = (i) => e.pageSize = i),
          layout: e.layoutList,
          total: e.total,
          small: e.small,
          "pager-count": e.pagerCount
        }, e.$attrs), null, 16, ["onSizeChange", "onCurrentChange", "currentPage", "page-size", "layout", "total", "small", "pager-count"])
      ]),
      _: 1
    }, 8, ["locale"])
  ])) : ie("", !0);
}
const ca = /* @__PURE__ */ gt(E$, [["render", O$], ["__scopeId", "data-v-30359b33"]]);
ca.install = function(e) {
  e.component(ca.name, ca);
};
const P$ = Q({
  name: "KTable",
  components: { pagination: ca, ElTable: Pd, ElTableColumn: ur },
  props: {
    emptyText: { type: String, default: "暂无数据" },
    headerCellStyle: {
      type: Object,
      default: () => ({
        background: "#f5f7fa",
        color: "#909399"
      })
    },
    tableColumn: {
      type: Array,
      default: () => [
        { label: "日期", prop: "date" },
        { label: "姓名", prop: "name" }
      ]
    },
    showOverflowTooltip: { type: Boolean, default: !0 },
    tableData: { type: Array, default: () => [] },
    modelValue: { type: Number, default: 1 },
    showSize: { type: Boolean, default: !1 },
    total: { type: Number, default: 9 },
    size: { type: Number, default: 10 }
  },
  emits: ["update:modelValue", "current-change", "update:tableData", "sort-change"],
  setup(e, { emit: t }) {
    const n = k({
      get: () => e.tableData,
      set: (r) => t("update:tableData", r)
    }), a = k({
      get: () => e.modelValue,
      set: (r) => t("update:modelValue", r)
    }), o = (r) => t("current-change", r), l = ({ column: r, order: i }) => {
      const c = i === "ascending" ? 1 : 0;
      t("sort-change", {
        prop: r == null ? void 0 : r.rawColumnKey,
        order: i,
        sortType: c,
        currentPage: a.value,
        column: r,
        sortColumn: r == null ? void 0 : r.rawColumnKey
      });
    }, s = O(null);
    return {
      currentPage: a,
      tableDataList: n,
      changePage: o,
      sortChange: l,
      instance: s,
      elTable: s
    };
  }
}), M$ = { key: 2 };
function x$(e, t, n, a, o, l) {
  const s = he("el-table-column"), r = he("el-table"), i = he("pagination");
  return _(), L(Te, null, [
    q(r, Ue({
      data: e.tableDataList,
      style: { width: "100%" },
      class: "mt20",
      "header-cell-style": e.headerCellStyle
    }, e.$attrs, {
      "empty-text": e.emptyText,
      onSortChange: e.sortChange,
      ref: "elTable"
    }), vn({
      default: X(() => [
        (_(!0), L(Te, null, He(e.tableColumn, (c) => (_(), oe(s, {
          key: c.prop,
          label: c.label,
          name: c.name,
          width: c.width,
          "min-width": c.minWidth,
          fixed: c.fixed,
          sortable: c.sortable,
          type: c.type,
          "show-overflow-tooltip": c.showOverflowTooltip ?? !0
        }, vn({
          default: X((f) => [
            e.$slots.default ? ae(e.$slots, "default", {
              key: 0,
              item: f.row,
              row: f.row,
              index: f.$index
            }) : c.custom && f.$index >= 0 ? ae(e.$slots, c.custom, {
              key: 1,
              item: f.row,
              row: f.row,
              index: f.$index
            }) : (_(), L("span", M$, pe(f.row[c.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          c.header ? {
            name: "header",
            fn: X(() => [
              ae(e.$slots, c.header)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["label", "name", "width", "min-width", "fixed", "sortable", "type", "show-overflow-tooltip"]))), 128))
      ]),
      _: 2
    }, [
      e.$slots.empty ? {
        name: "empty",
        fn: X(() => [
          ae(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "empty-text", "onSortChange"]),
    q(i, {
      total: e.total,
      size: e.size,
      "show-size": e.showSize,
      modelValue: e.currentPage,
      "onUpdate:modelValue": t[0] || (t[0] = (c) => e.currentPage = c),
      onCurrentChange: e.changePage
    }, null, 8, ["total", "size", "show-size", "modelValue", "onCurrentChange"])
  ], 64);
}
const Oo = /* @__PURE__ */ gt(P$, [["render", x$]]);
Oo.install = function(e) {
  e.component(Oo.name, Oo);
};
const A$ = Q({
  name: "KVirtualList",
  components: { ElScrollbar: la },
  props: {
    height: { type: String, default: "500px" },
    rowStyle: { type: Object, default: () => ({}) },
    rowClassName: { type: [Function, String, Object], default: "" },
    data: { type: Array, default: () => [] }
  },
  emits: ["scroll", "row-click"],
  setup(e, { emit: t }) {
    const n = O(0), a = O(0), o = O(null), l = O(10), s = () => {
      var b, g;
      return ((b = document.querySelector(".table-row")) == null ? void 0 : b.offsetHeight) ?? ((g = document.querySelector(".list-item")) == null ? void 0 : g.offsetHeight) ?? 10;
    }, r = () => {
      const { clientHeight: b = 100 } = o.value.wrapRef || {};
      return Math.ceil(b / s()) + n.value;
    }, i = O(100);
    Ge(() => {
      l.value = Number(r()) || 10, i.value = e.data.length * s();
    });
    const c = (b) => Math.floor(b / s()), f = (b) => Math.ceil(b * s()), d = (b) => b >= n.value && b <= l.value, v = k(() => e.data.filter((b, g) => d(g)));
    return ue(() => e.data, (b) => {
      b.length || (n.value = 0, a.value = 0), e.data.forEach((g, w) => {
        g.rowIndex = w;
      }), $e(() => {
        i.value = e.data.length * s();
      });
    }), {
      startIndex: n,
      endIndex: l,
      startOffset: a,
      viewport: o,
      onScroll: (b) => {
        const { scrollTop: g, clientHeight: w } = o.value.wrapRef;
        n.value = c(g), a.value = f(n.value), l.value = r();
        const S = Math.abs(i.value - w - g);
        t("scroll", { distance: S, ...b });
      },
      showViewRanges: d,
      containHeight: i,
      listRanges: v,
      rowClick: (b, g) => {
        t("row-click", b, g);
      },
      rowClassHandle: (b, g) => typeof e.rowClassName == "function" ? e.rowClassName({ row: b, rowIndex: g }) : e.rowClassName
    };
  }
}), D$ = {
  class: "virtual-list",
  "data-testid": "virtual-list"
}, I$ = ["onClick"];
function N$(e, t, n, a, o, l) {
  const s = he("el-scrollbar");
  return _(), oe(s, Ue({
    height: e.height,
    ref: "viewport"
  }, e.$attrs, { onScroll: e.onScroll }), {
    default: X(() => [
      K("div", D$, [
        K("div", {
          class: "list-contain",
          style: Fe({ height: `${e.containHeight}px` })
        }, null, 4),
        K("div", {
          class: "list-content",
          style: Fe({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          (_(!0), L(Te, null, He(e.listRanges, (r, i) => (_(), L("div", {
            key: i,
            class: A(["list-item", e.rowClassHandle(r, r.rowIndex)]),
            style: Fe(e.rowStyle),
            onClick: (c) => e.rowClick(r, r.rowIndex)
          }, [
            ae(e.$slots, "default", {
              row: r,
              index: r.rowIndex
            }, () => [
              Qe(pe(r.name), 1)
            ], !0)
          ], 14, I$))), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["height", "onScroll"]);
}
const Ha = /* @__PURE__ */ gt(A$, [["render", N$], ["__scopeId", "data-v-e53aecaa"]]);
Ha.install = function(e) {
  e.component(Ha.name, Ha);
};
const Id = {
  modelValue: { type: Array, default: () => [] },
  keyId: { type: String, default: "id" },
  rowStyle: { type: Object, default: () => ({}) },
  rowClassName: { type: [Function, String, Object], default: "" },
  tableData: { type: Array, default: () => [] },
  tableColumn: {
    type: Array,
    default: () => [
      { label: "商品名称", prop: "name", aglin: "center" },
      { label: "等级", prop: "level" },
      { label: "价格", prop: "price" }
    ]
  },
  headerCellStyle: {
    type: Object,
    default: () => ({
      background: "#f5f7fa",
      color: "#909399"
    })
  },
  height: { type: String, default: "100%" },
  showSummary: { type: Boolean, default: !1 },
  sumText: { type: String, default: "合计" },
  summaryMethod: { type: [String, Function], default: "" },
  emptyText: { type: String, default: "暂无数据" }
};
function Nd(e) {
  const t = O(null), n = (s) => {
    var v, m, h, p;
    let r = {};
    const {
      align: i,
      width: c,
      fixed: f,
      minWidth: d
    } = s;
    if (i && (r["text-center"] = `${i}`), d && (r["min-width"] = `${d}`), c && (r = {
      ...r,
      width: `${c}`,
      flex: "inherit",
      "flex-shrink": 0
    }), f) {
      const b = e.tableColumn.findIndex((w) => w.prop === s.prop), g = e.tableColumn.length;
      if (r = {
        ...r,
        position: "sticky",
        "z-index": 50
      }, f === "left") {
        const w = (v = e.tableColumn.filter(($) => $.fixed === "left")) == null ? void 0 : v.length;
        let S = 0;
        b > 0 && b < g - 1 && w > 1 && (S = (m = t.value) == null ? void 0 : m.at(b - 1).clientWidth), r.left = `${S}px`;
        let y = 0;
        e.tableColumn.forEach(($, T) => {
          $.fixed === "left" && (y = T);
        }), y === b && (r["box-shadow"] = "3px 0px 4px #b0a8a836");
      } else {
        const w = (h = e.tableColumn.filter(($) => $.fixed && $.fixed !== "left")) == null ? void 0 : h.length;
        let S = 0;
        b < g - 1 && w > 1 && (S = (p = t.value) == null ? void 0 : p.at(b + 1).clientWidth), e.tableColumn.findIndex(($) => $.fixed && $.fixed !== "left") === b && (r["box-shadow"] = "-3px 0 4px #b0a8a836"), r.right = `${S}px`;
      }
    }
    return e.isFooter && (r.color = "#606266"), r;
  }, a = O(null), o = (s) => {
    const r = e.tableData.reduce((i, c) => i + Number(c[s.prop]), 0);
    return Number.isNaN(r) ? "N/A" : r.toFixed(2);
  };
  return {
    headerColmn: t,
    headerClass: n,
    tableHeader: a,
    getSummaries: (s, r) => e.summaryMethod ? e.summaryMethod({ row: s, index: r }) : r ? o(s) : e.sumText
  };
}
const R$ = { class: "flex table-border-bottom header-content" }, L$ = {
  key: 0,
  class: "table-header-sort flex-column flex-center"
}, F$ = { class: "sort-wrapper" }, B$ = ["onClick"], V$ = ["onClick"], z$ = {
  __name: "headerFooter",
  props: {
    ...Id,
    isFooter: { type: Boolean, default: !1 }
  },
  emits: ["sort-change"],
  setup(e, { expose: t, emit: n }) {
    const a = e, o = n, { headerClass: l, tableHeader: s } = Nd(a), r = O(null), i = O({}), c = (d, v) => {
      i.value = v, r.value = r.value === d ? null : d, o("sort-change", { column: v, sortType: r.value });
    };
    return t({
      setScrollLeft: (d) => {
        s.value.scrollLeft = `${d}`;
      }
    }), (d, v) => (_(), L("div", {
      class: "table-header overflow",
      ref_key: "tableHeader",
      ref: s
    }, [
      K("div", R$, [
        (_(!0), L(Te, null, He(d.tableColumn, (m, h) => (_(), L("div", {
          key: h,
          class: "header-column cell flex-align-center",
          ref_for: !0,
          ref: "headerColmn",
          style: Fe([d.headerCellStyle, u(l)(m)])
        }, [
          ae(d.$slots, "default", {
            row: m,
            index: h
          }, () => [
            Qe(pe(m.label), 1)
          ], !0),
          m.sortable && !e.isFooter ? (_(), L("div", L$, [
            K("span", F$, [
              K("i", {
                class: A(["sort-caret ascending", { "bottom-caret": r.value === "ascending" && i.value.prop == m.prop }]),
                onClick: (p) => c("ascending", m)
              }, null, 10, B$),
              K("i", {
                class: A(["sort-caret descending", { "top-caret": r.value === "descending" && i.value.prop == m.prop }]),
                onClick: (p) => c("descending", m)
              }, null, 10, V$)
            ])
          ])) : ie("", !0)
        ], 4))), 128))
      ])
    ], 512));
  }
}, H$ = /* @__PURE__ */ gt(z$, [["__scopeId", "data-v-2fd08206"]]), K$ = Q({
  name: "KTableV2",
  components: { virtualList: Ha, headerFooter: H$ },
  props: Id,
  emits: ["sort-change"],
  setup(e, { emit: t }) {
    const n = k(() => e.tableColumn.map((v, m) => ({ ...v, keyId: m }))), {
      headerColmn: a,
      headerClass: o,
      tableHeader: l,
      getSummaries: s
    } = Nd(e), r = O(null), i = ({ scrollLeft: v }) => {
      var m, h;
      (m = l.value) == null || m.setScrollLeft(v), (h = r.value) == null || h.setScrollLeft(v);
    }, c = ({ column: v, sortType: m }) => t("sort-change", { column: v, sortType: m }), f = O(null), d = (v) => {
      var m;
      return (m = f.value) == null ? void 0 : m.viewport.setScrollTop(v);
    };
    return {
      ..._a(e),
      columnList: n,
      headerClass: o,
      tableHeader: l,
      tableBottom: r,
      scrollHandle: i,
      headerColmn: a,
      clickSortCaret: c,
      virtualRef: f,
      setScrollTop: d,
      getSummaries: s
    };
  }
}), W$ = { class: "table-v2 el-table flex-column" }, j$ = { class: "flex table-body" };
function Y$(e, t, n, a, o, l) {
  const s = he("headerFooter"), r = he("virtualList");
  return _(), L("div", W$, [
    q(s, {
      ref: "tableHeader",
      "table-column": e.tableColumn,
      onSortChange: e.clickSortCaret
    }, {
      default: X(({ row: i, index: c }) => [
        ae(e.$slots, i == null ? void 0 : i.header, {
          row: i,
          index: c
        }, () => [
          Qe(pe(i.label), 1)
        ], !0)
      ]),
      _: 3
    }, 8, ["table-column", "onSortChange"]),
    e.tableData.length ? (_(), oe(r, Ue({
      key: 0,
      data: e.tableData,
      always: "",
      ref: "virtualRef",
      "row-class-name": e.rowClassName
    }, e.$attrs, {
      height: e.height,
      onScroll: e.scrollHandle
    }), {
      default: X(({ row: i, index: c }) => [
        ae(e.$slots, "content", {}, () => [
          K("div", j$, [
            (_(!0), L(Te, null, He(e.columnList, (f) => (_(), L("div", {
              key: f.keyId,
              class: A(["cell table-row table-border-bottom flex-align-center", { "fixed-cell": f.fixed }]),
              ref_for: !0,
              ref: "bodyCell",
              style: Fe(e.headerClass(f))
            }, [
              K("div", {
                class: A({ "text-overflow": f.showOverflowTooltip ?? !0 })
              }, [
                ae(e.$slots, (f == null ? void 0 : f.custom) ?? "default", {
                  row: i,
                  index: c
                }, () => [
                  Qe(pe(i[f.prop]), 1)
                ], !0)
              ], 2)
            ], 6))), 128))
          ])
        ], !0)
      ]),
      _: 3
    }, 16, ["data", "row-class-name", "height", "onScroll"])) : (_(), L("div", {
      key: 1,
      class: "flex-center pt20 pb20",
      style: Fe({ height: e.height })
    }, [
      ae(e.$slots, "empty", {}, () => [
        Qe(pe(e.emptyText), 1)
      ], !0)
    ], 4)),
    ae(e.$slots, "footer", {}, () => [
      e.showSummary || e.$slots.footer ? (_(), oe(s, {
        key: 0,
        ref: "tableBottom",
        "table-column": e.tableColumn,
        "is-footer": ""
      }, {
        default: X(({ row: i, index: c }) => [
          Qe(pe(e.getSummaries(i, c)), 1)
        ]),
        _: 1
      }, 8, ["table-column"])) : ie("", !0)
    ], !0)
  ]);
}
const Po = /* @__PURE__ */ gt(K$, [["render", Y$], ["__scopeId", "data-v-393e4622"]]);
Po.install = function(e) {
  e.component(Po.name, Po);
};
const U$ = {
  modelValue: { type: Array, default: () => [] },
  total: { type: Number, default: 9 },
  size: { type: Number, default: 10 },
  page: { type: Number, default: 1 },
  showSize: { type: Boolean, default: !1 },
  keyId: { type: String, default: "id" },
  checkKey: { type: String, default: "isSelect" },
  tableData: { type: Array, default: () => [] },
  selectList: { type: Array, default: () => [] },
  showFooter: { type: Boolean, default: !0 },
  tableColumn: {
    type: Array,
    default: () => [
      { label: "商品名称", prop: "name" },
      { label: "等级", prop: "level" },
      { label: "价格", prop: "price" }
    ]
  },
  headerCellStyle: {
    type: Object,
    default: () => ({
      background: "#f5f7fa",
      color: "#909399"
    })
  }
}, q$ = { key: 2 }, G$ = {
  key: 0,
  class: "flex-between"
}, X$ = { class: "flex1 mr20 mt20" }, Ka = /* @__PURE__ */ Object.assign({
  name: "KBatchTable"
}, {
  __name: "main",
  props: U$,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { expose: t, emit: n }) {
    const a = e, o = n, l = O(null), s = O([]), r = (S) => {
      S ? S.forEach((y) => {
        const $ = a.tableData.find((T) => T[a.keyId] === y[a.keyId]);
        l.value.toggleRowSelection($ ?? y);
      }) : l.value.clearSelection();
    }, i = (S, y = !0) => {
      y ? s.value.push(S) : s.value = s.value.filter(($) => $[a.keyId] !== (S == null ? void 0 : S[a.keyId]));
    }, c = (S) => S[a.checkKey] ?? !S[a.checkKey], f = (S, y) => {
      const $ = S.some((T) => T[a.keyId] === (y == null ? void 0 : y[a.keyId]));
      i(y, $);
    }, d = (S) => m(S), v = (S) => {
      if (!c(S))
        return;
      r([S]);
      const y = s.value.some(($) => $[a.keyId] === S[a.keyId]);
      i(S, !y), o("row-click", S);
    };
    ue(() => s.value, (S, y) => {
      y && o("update:modelValue", S);
    }, { immediate: !0, deep: !0 });
    const m = (S = []) => {
      r(), S.forEach((y) => {
        const $ = a.tableData.find((T) => T[a.keyId] === y[a.keyId]);
        l.value.toggleRowSelection($ ?? y, !!c(y));
      }), s.value = S;
    }, h = () => m();
    ue(() => a.modelValue, (S, y) => {
      !S.length && y.length && m();
    });
    const p = (S) => S[a.keyId], b = () => {
      a.selectList.length && a.selectList.forEach((S) => {
        a.tableData.forEach((y) => {
          y[a.checkKey] = y[a.checkKey] ?? 1, p(S) === p(y) && (y[a.checkKey] = 0);
        });
      });
    };
    ue(() => a.tableData, (S) => {
      $e(() => {
        S.length && b(), S.length && m(a.modelValue);
      });
    }, { immediate: !0 });
    const g = k({
      get: () => a.page,
      set: (S) => o("update:page", S)
    }), w = (S) => {
      o("current-change", S);
    };
    return t({
      toggleSelection: m,
      handleRowClick: v,
      clear: h
    }), (S, y) => (_(), L(Te, null, [
      q(u(Pd), Ue({
        ref_key: "multipleTableRef",
        ref: l,
        "empty-text": "暂无数据"
      }, S.$attrs, {
        data: S.tableData,
        "header-cell-style": S.headerCellStyle,
        onSelect: f,
        onSelectAll: d,
        onRowClick: v
      }), vn({
        default: X(() => [
          q(u(ur), {
            type: "selection",
            width: "55",
            selectable: c
          }),
          (_(!0), L(Te, null, He(S.tableColumn, ($) => (_(), oe(u(ur), {
            label: $.label,
            key: $.prop,
            width: $.width,
            fixed: $.fixed,
            "min-width": $.minWidth,
            "show-overflow-tooltip": $.showOverflowTooltip ?? !0
          }, vn({
            default: X((T) => [
              S.$slots.default ? ae(S.$slots, "default", {
                key: 0,
                item: T.row,
                row: T.row,
                column: $,
                index: T.$index
              }) : ie("", !0),
              $.custom && T.$index >= 0 ? ae(S.$slots, $.custom, {
                key: 1,
                item: T.row,
                column: $,
                row: T.row,
                index: T.$index
              }) : (_(), L("span", q$, pe(T.row[$.prop] ?? "-"), 1))
            ]),
            _: 2
          }, [
            $.header ? {
              name: "header",
              fn: X(() => [
                ae(S.$slots, "header", { column: $ }),
                ae(S.$slots, $.header, { column: $ })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["label", "width", "fixed", "min-width", "show-overflow-tooltip"]))), 128))
        ]),
        _: 2
      }, [
        S.$slots.empty ? {
          name: "empty",
          fn: X(() => [
            ae(S.$slots, "empty")
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["data", "header-cell-style"]),
      S.showFooter ? (_(), L("div", G$, [
        K("div", X$, [
          S.$slots.footer ? ae(S.$slots, "footer", { key: 0 }) : ie("", !0)
        ]),
        q(u(ca), Ue({
          total: S.total,
          "show-size": S.showSize
        }, S.$attrs, {
          modelValue: g.value,
          "onUpdate:modelValue": y[0] || (y[0] = ($) => g.value = $),
          onCurrentChange: w
        }), null, 16, ["total", "show-size", "modelValue"])
      ])) : ie("", !0)
    ], 64));
  }
});
Ka.install = function(e) {
  e.component(Ka.name, Ka);
};
const Z$ = Q({
  name: "KDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { type: String, default: "提示" },
    showFooter: { type: Boolean, default: !0 },
    customClass: { type: String, default: "" },
    class: { type: String, default: "" },
    confirmDisabled: { type: Boolean, default: !1 }
  },
  components: { ElDialog: LC, ElButton: In },
  emits: ["update:modelValue", "confirm", "open", "close"],
  setup(e, { emit: t }) {
    const n = k({
      get: () => e.modelValue,
      set: (r) => t("update:modelValue", r)
    }), a = k(() => e.class ? e.class : e.customClass ? e.customClass : e.showFooter ? "custom-dialog" : "custom-dialog no-footer");
    return {
      dialogVisible: n,
      customClassName: a,
      closeHandle: () => {
        t("close"), parent.window.postMessage("closeMask()", "*"), window.top.postMessage("closeMask()", "*");
      },
      openHandler: () => {
        t("open"), parent.window.postMessage("openMask()", "*"), window.top.postMessage("openMask()", "*");
      },
      confirmHandler: () => {
        t("confirm");
      }
    };
  }
}), Q$ = /* @__PURE__ */ K("span", null, "这是一段信息", -1), J$ = { class: "dialog-footer" };
function e_(e, t, n, a, o, l) {
  const s = he("el-button"), r = he("el-dialog");
  return _(), oe(r, Ue({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": t[1] || (t[1] = (i) => e.dialogVisible = i),
    class: e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), vn({
    default: X(() => [
      ae(e.$slots, "default", {}, () => [
        Q$
      ])
    ]),
    _: 2
  }, [
    e.showFooter ? {
      name: "footer",
      fn: X(() => [
        ae(e.$slots, "footer", {}, () => [
          K("span", J$, [
            q(s, {
              size: "large",
              onClick: t[0] || (t[0] = (i) => e.dialogVisible = !1)
            }, {
              default: X(() => [
                Qe("取 消")
              ]),
              _: 1
            }),
            q(s, {
              size: "large",
              type: "primary",
              disabled: e.confirmDisabled,
              onClick: e.confirmHandler
            }, {
              default: X(() => [
                Qe("确 定")
              ]),
              _: 1
            }, 8, ["disabled", "onClick"])
          ])
        ])
      ]),
      key: "0"
    } : void 0
  ]), 1040, ["title", "modelValue", "class", "onClose", "onOpen"]);
}
const Mo = /* @__PURE__ */ gt(Z$, [["render", e_]]);
Mo.install = function(e) {
  e.component(Mo.name, Mo);
};
const t_ = Q({
  name: "KBreadcrumb",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: { ElSpace: GS },
  setup(e) {
    const n = Le().appContext.config.globalProperties.$router;
    return { clickHandle: (o, l) => {
      if (o.url) {
        window.location.href = o.url;
        return;
      }
      const s = l - e.list.length + 1;
      o.path ? n == null || n.push(o.path) : s && (n == null || n.go(s));
    } };
  }
}), n_ = { class: "crumb-header flex-between" }, a_ = { class: "crumb-contain" }, o_ = ["onClick"];
function l_(e, t, n, a, o, l) {
  const s = he("el-space");
  return _(), L("div", n_, [
    K("div", a_, [
      q(s, { spacer: "/" }, {
        default: X(() => [
          (_(!0), L(Te, null, He(e.list, (r, i) => (_(), L("span", {
            key: i,
            class: A({ "crumb-item": i !== e.list.length - 1 }),
            onClick: (c) => e.clickHandle(r, i)
          }, pe(r.title), 11, o_))), 128))
        ]),
        _: 1
      })
    ]),
    ae(e.$slots, "default", {}, void 0, !0)
  ]);
}
const xo = /* @__PURE__ */ gt(t_, [["render", l_], ["__scopeId", "data-v-fbf3e6d2"]]);
xo.install = function(e) {
  e.component(xo.name, xo);
};
const r_ = Q({
  name: "KTabs",
  components: { ElTabs: g$, ElTabPane: b$ },
  props: {
    type: { type: String, default: "" },
    isRouter: { type: Boolean, default: !1 },
    modelValue: { type: String, default: "" },
    isPadding: { type: Boolean, default: !0 },
    replace: { type: Boolean, default: !1 },
    tabsList: {
      type: Array,
      default: () => [
        { label: "全部", name: "all" },
        { label: "正常", name: "normal" },
        { label: "已拉黑", name: "block" }
      ]
    }
  },
  emits: ["tab-click", "change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Le(), a = k(() => n.appContext.config.globalProperties.$route), o = n.appContext.config.globalProperties.$router, l = k(() => {
      var c, f;
      return ((c = a.value) == null ? void 0 : c.params.type) || ((f = a.value) == null ? void 0 : f.name);
    }), s = O(l.value);
    Mt(() => {
      s.value = e.modelValue || l.value, t("update:modelValue", s.value);
    });
    const r = k(() => a.value.query);
    return { activeName: s, handleClick: (c) => {
      if (e.isRouter) {
        const f = { path: `${c.paneName}`, query: r.value };
        e.replace ? o.replace(f) : o.push(f);
      }
      t("tab-click", c.paneName), t("change", c.paneName), t("update:modelValue", c.paneName);
    } };
  }
}), s_ = { class: "tabs-right ml10" };
function i_(e, t, n, a, o, l) {
  const s = he("el-tab-pane"), r = he("el-tabs");
  return _(), L("div", {
    class: A(["k-tabs", { "style-card": !e.type, "style-padding": e.isPadding && !e.type }])
  }, [
    q(r, Ue({
      class: "flex-tabs",
      type: e.type
    }, e.$attrs, {
      modelValue: e.activeName,
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.activeName = i),
      onTabClick: e.handleClick
    }), {
      addIcon: X(() => [
        ae(e.$slots, "addIcon")
      ]),
      default: X(() => [
        (_(!0), L(Te, null, He(e.tabsList, (i, c) => (_(), oe(s, {
          label: i.label,
          name: i.name,
          key: i.name
        }, {
          default: X(() => [
            ae(e.$slots, "label", {
              row: i,
              index: c
            })
          ]),
          _: 2
        }, 1032, ["label", "name"]))), 128))
      ]),
      _: 3
    }, 16, ["type", "modelValue", "onTabClick"]),
    K("div", s_, [
      ae(e.$slots, "right"),
      ae(e.$slots, "default")
    ])
  ], 2);
}
const Ao = /* @__PURE__ */ gt(r_, [["render", i_]]);
Ao.install = function(e) {
  e.component(Ao.name, Ao);
};
const es = Q({
  name: "KPicker",
  components: {
    batchTable: Ka,
    kInputNumber: za,
    Delete: Ag,
    ElRow: Yw,
    ElCol: Zw,
    ElButton: In,
    ElIcon: xe,
    ElScrollbar: la,
    ElTooltip: oo
  },
  emits: ["update:modelValue", "update:page"],
  props: {
    modelValue: { type: Array, default: () => [] },
    selectList: { type: Array, default: () => [] },
    page: { type: Number, default: 1 },
    tableData: { type: Array, default: () => [] },
    tableColumn: { type: Array, default: () => [] },
    keyId: { type: String, default: "id" },
    keyName: { type: String, default: "name" },
    showCount: { type: Boolean, default: !1 },
    height: { type: String, default: "442px" },
    scrollbarAlwaysOn: { type: Boolean, default: !1 },
    rightWidth: { type: String, default: "" }
  },
  setup(e, { emit: t }) {
    const n = k({
      get: () => e.modelValue,
      set: (v) => t("update:modelValue", v)
    });
    Mt(() => {
      e.showCount && n.value.forEach((v) => {
        v.num = v.num ?? 1;
      });
    });
    const a = O(null), o = () => a.value.toggleSelection(), l = (v) => a.value.handleRowClick(v), s = O(1), r = () => {
      s.value = 1, o();
    }, i = (v) => v[e.keyName], c = (v) => v[e.keyId], f = k(() => e.rightWidth), d = k(() => e.height);
    return {
      multipleSelection: n,
      batchTableRef: a,
      currentPage: s,
      emptyHandler: o,
      resetData: r,
      deleteHandler: l,
      getName: i,
      getId: c,
      rightwidth: f,
      autoheight: d
    };
  }
}), qi = () => {
  vr((e) => ({
    "40a8486d": e.autoheight,
    "39df13fe": e.rightwidth
  }));
}, Gi = es.setup;
es.setup = Gi ? (e, t) => (qi(), Gi(e, t)) : qi;
const u_ = { class: "k-picker flex-column" }, c_ = { class: "col-left height-auto flex-column" }, d_ = { class: "selete-header flex-between" }, f_ = { class: "selete-content flex1" }, p_ = { class: "flex flex1 mr20 overflow" }, v_ = { class: "text-overflow" };
function m_(e, t, n, a, o, l) {
  const s = he("batchTable"), r = he("el-col"), i = he("delete"), c = he("el-icon"), f = he("el-button"), d = he("el-tooltip"), v = he("k-input-number"), m = he("el-scrollbar"), h = he("el-row");
  return _(), L("div", u_, [
    ae(e.$slots, "top", {}, void 0, !0),
    q(h, {
      gutter: 10,
      class: A(["height-auto mb20", { "custom-right": e.rightWidth }])
    }, {
      default: X(() => [
        q(r, {
          span: 15,
          class: "height-auto flex1"
        }, {
          default: X(() => [
            K("div", c_, [
              q(s, {
                ref: "batchTableRef",
                "show-footer": !1,
                height: e.height,
                "table-data": e.tableData,
                "table-column": e.tableColumn,
                "select-list": e.selectList,
                "key-id": e.keyId,
                modelValue: e.multipleSelection,
                "onUpdate:modelValue": t[0] || (t[0] = (p) => e.multipleSelection = p),
                page: e.currentPage,
                "onUpdate:page": t[1] || (t[1] = (p) => e.currentPage = p),
                "scrollbar-always-on": e.scrollbarAlwaysOn
              }, {
                header: X(({ column: p }) => [
                  ae(e.$slots, p.header, { column: p }, void 0, !0)
                ]),
                default: X(({ row: p, column: b, index: g }) => [
                  b.custom && g >= 0 ? ae(e.$slots, b.custom, {
                    key: 0,
                    row: p,
                    index: g
                  }, void 0, !0) : ie("", !0)
                ]),
                _: 3
              }, 8, ["height", "table-data", "table-column", "select-list", "key-id", "modelValue", "page", "scrollbar-always-on"])
            ])
          ]),
          _: 3
        }),
        q(r, {
          span: 9,
          class: "height-auto flex-column flex1"
        }, {
          default: X(() => [
            K("div", {
              class: "col-right flex-column height-auto",
              style: Fe({ height: e.height })
            }, [
              ae(e.$slots, "right", {}, () => [
                K("div", d_, [
                  ae(e.$slots, "right-header", {}, () => [
                    K("span", null, [
                      Qe("已选择"),
                      K("span", null, "(" + pe(e.multipleSelection.length) + ")", 1)
                    ]),
                    q(f, {
                      type: "primary",
                      text: "",
                      disabled: !e.multipleSelection.length,
                      onClick: e.emptyHandler
                    }, {
                      default: X(() => [
                        q(c, null, {
                          default: X(() => [
                            q(i)
                          ]),
                          _: 1
                        }),
                        Qe(" 清空 ")
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"])
                  ], !0)
                ]),
                K("div", f_, [
                  q(m, { always: "" }, {
                    default: X(() => [
                      (_(!0), L(Te, null, He(e.multipleSelection, (p) => (_(), L("div", {
                        class: A(["flex-between pl10 pr10", { mt10: e.showCount }]),
                        key: e.getId(p)
                      }, [
                        K("div", p_, [
                          q(d, {
                            effect: "dark",
                            content: e.getName(p),
                            placement: "top"
                          }, {
                            default: X(() => [
                              K("span", v_, pe(e.getName(p)), 1)
                            ]),
                            _: 2
                          }, 1032, ["content"])
                        ]),
                        e.showCount ? (_(), oe(v, {
                          key: 0,
                          modelValue: p.num,
                          "onUpdate:modelValue": (b) => p.num = b,
                          min: 1,
                          class: "width-120 flex-shrink mr10"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : ie("", !0),
                        q(f, {
                          type: "primary",
                          text: "",
                          onClick: (b) => e.deleteHandler(p)
                        }, {
                          default: X(() => [
                            Qe(" 删除 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ], 2))), 128))
                    ]),
                    _: 1
                  })
                ])
              ], !0)
            ], 4)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["class"]),
    ae(e.$slots, "footer", {}, void 0, !0)
  ]);
}
const Do = /* @__PURE__ */ gt(es, [["render", m_], ["__scopeId", "data-v-c677d563"]]);
Do.install = function(e) {
  e.component(Do.name, Do);
};
const h_ = Q({
  name: "KTooltip",
  props: {
    placement: { type: String, default: "top" },
    showIcon: { type: Boolean, default: !1 },
    overflow: { type: Boolean, default: !1 }
  },
  components: { Warning: Kg, ElTooltip: oo }
});
function g_(e, t, n, a, o, l) {
  const s = he("warning"), r = he("el-icon"), i = he("el-tooltip");
  return _(), L("div", {
    class: A(["flex flex1", { "text-overflow": e.overflow }])
  }, [
    q(i, Ue(e.$attrs, { placement: e.placement }), {
      content: X(() => [
        ae(e.$slots, "content", {}, void 0, !0)
      ]),
      default: X(() => [
        K("div", {
          class: A(["flex-center", { "text-overflow": e.overflow }])
        }, [
          ae(e.$slots, "default", {}, void 0, !0),
          e.showIcon ? (_(), oe(r, {
            key: 0,
            class: "ml5"
          }, {
            default: X(() => [
              ae(e.$slots, "icon", {}, () => [
                q(s)
              ], !0)
            ]),
            _: 3
          })) : ie("", !0)
        ], 2)
      ]),
      _: 3
    }, 16, ["placement"])
  ], 2);
}
const Io = /* @__PURE__ */ gt(h_, [["render", g_], ["__scopeId", "data-v-734f22cf"]]);
Io.install = function(e) {
  e.component(Io.name, Io);
};
const b_ = {
  __name: "main",
  setup(e) {
    return (t, n) => (_(), oe(u(yc), { locale: u(Dd) }, {
      default: X(() => [
        ae(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale"]));
  }
}, Rd = {
  __name: "datePicker",
  props: {
    type: { type: String, default: "daterange" },
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = k(() => n.type === "datetimerange" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"), o = (d) => {
      const v = /* @__PURE__ */ new Date(), m = /* @__PURE__ */ new Date();
      return v.setTime(v.getTime() - 3600 * 1e3 * 24 * d), v.setHours(0, 0, 0, 0), m.setHours(23, 59, 59, 999), n.type === "date" ? v : [v, m];
    }, l = [
      {
        text: "最近一周",
        value: () => o(7)
      },
      {
        text: "最近一个月",
        value: () => o(30)
      },
      {
        text: "最近三个月",
        value: () => o(90)
      }
    ], s = [new Date(2e3, 1, 1, 0, 0, 0), new Date(2e3, 2, 1, 23, 59, 59)], r = t, i = k({
      get: () => n.modelValue,
      set: (d) => r("update:modelValue", d)
    }), c = (d) => d.getTime() > Date.now(), f = (d) => r("change", d);
    return (d, v) => (_(), oe(u(gC), Ue({
      modelValue: i.value,
      "onUpdate:modelValue": v[0] || (v[0] = (m) => i.value = m),
      type: e.type,
      "unlink-panels": "",
      "range-separator": "至",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期",
      shortcuts: l,
      format: a.value,
      "value-format": "YYYY-MM-DD HH:mm:ss",
      "disabled-date": c,
      "default-time": s,
      editable: !1
    }, d.$attrs, { onChange: f }), null, 16, ["modelValue", "type", "format"]));
  }
}, y_ = { class: "date-picker flex" }, w_ = {
  __name: "selectType",
  props: {
    daterange: { type: Boolean, default: !1 },
    // 是否选择模式下 是否日期范围
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = O(0), o = O([
      { value: 0, label: "日" },
      { value: 1, label: "周" },
      { value: 2, label: "月" },
      { value: 3, label: "年" }
    ]), l = k({
      get: () => n.modelValue,
      set: (h) => f("update:modelValue", h)
    }), s = (h) => h.getTime() > Date.now(), r = k(() => ({
      0: "YYYY-MM-DD",
      1: "YYYY 第 ww 周",
      2: "YYYY-MM",
      3: "YYYY"
    })[a.value]), i = k(() => ({
      0: n.daterange ? "daterange" : "date",
      1: "week",
      2: "month",
      3: "year"
    })[a.value]), c = k(() => {
      const { label: h } = o.value.filter((p) => p.value === a.value)[0];
      return `选择${h}`;
    }), f = t, d = O("");
    Mt(() => {
      if (Array.isArray(l.value)) {
        const [h, p] = l.value;
        d.value = [h, p];
      }
    });
    const v = (h) => {
      if (h) {
        if (Array.isArray(l.value)) {
          const [p] = l.value;
          l.value = p;
        }
      } else
        n.daterange && (l.value = d.value);
      m();
    }, m = () => {
      f("change", { type: a.value, time: l.value });
    };
    return (h, p) => {
      const b = he("el-option"), g = he("el-select"), w = he("el-date-picker");
      return _(), L("div", y_, [
        q(g, {
          modelValue: a.value,
          "onUpdate:modelValue": p[0] || (p[0] = (S) => a.value = S),
          class: "width-100 mr10",
          onChange: v
        }, {
          default: X(() => [
            (_(!0), L(Te, null, He(o.value, (S) => (_(), oe(b, {
              key: S.value,
              label: S.label,
              value: S.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        K("div", null, [
          e.daterange && !a.value ? (_(), oe(Rd, Ue({
            key: 0,
            modelValue: l.value,
            "onUpdate:modelValue": p[1] || (p[1] = (S) => l.value = S)
          }, h.$props, { onChange: m }), null, 16, ["modelValue"])) : (_(), oe(w, {
            key: 1,
            modelValue: l.value,
            "onUpdate:modelValue": p[2] || (p[2] = (S) => l.value = S),
            type: i.value,
            format: r.value,
            "value-format": "YYYY-MM-DD HH:mm:ss",
            placeholder: c.value,
            "disabled-date": s,
            clearable: !1,
            editable: !1,
            "start-placeholder": "开始日期",
            "end-placeholder": "结束日期",
            onChange: m
          }, null, 8, ["modelValue", "type", "format", "placeholder"]))
        ])
      ]);
    };
  }
}, C_ = Q({
  name: "KDatePicker",
  props: {
    selectType: { type: Boolean, default: !1 }
    // 是否选择模式（年月日）
    // daterange: { type: Boolean, default: false }, // 是否选择模式下 是否日期范围
  },
  components: { configProvider: b_, selectType: w_, datePicker: Rd },
  setup() {
  }
});
function S_(e, t, n, a, o, l) {
  const s = he("selectType"), r = he("datePicker"), i = he("config-provider");
  return _(), oe(i, null, {
    default: X(() => [
      e.selectType ? (_(), oe(s, as(Ue({ key: 0 }, e.$attrs)), null, 16)) : (_(), oe(r, as(Ue({ key: 1 }, e.$attrs)), null, 16))
    ]),
    _: 1
  });
}
const No = /* @__PURE__ */ gt(C_, [["render", S_]]);
No.install = function(e) {
  e.component(No.name, No);
};
const ts = Q({
  name: "KNumberKeyboard",
  components: { ElButton: In },
  props: {
    modelValue: { type: [String, Number], default: "" },
    width: { type: Number, default: 60 },
    color: { type: String, default: "" },
    maxlength: { type: [String, Number], default: 0 },
    precision: { type: Number, default: 2 },
    decimalPoint: { type: Boolean, default: !1 },
    // 是否显示小数点
    startZero: { type: Boolean, default: !0 }
    // 开头是否可以为零
  },
  emits: ["update:modelValue", "change", "clear", "confirm"],
  setup(e, { emit: t }) {
    const n = [
      { name: 7 },
      { name: 8 },
      { name: 9 },
      { name: "删除", key: "delete" },
      { name: 4 },
      { name: 5 },
      { name: 6 },
      { name: "清空", key: "clear" },
      { name: 1 },
      { name: 2 },
      { name: 3 },
      {
        name: "确认",
        key: "confirm",
        class: "confirm-class",
        type: "primary"
      },
      { name: 0, class: "zero-class" }
    ], a = k(() => (e.decimalPoint && n.push({ name: "." }), n)), o = k({
      get: () => e.modelValue,
      set: (v) => t("update:modelValue", v)
    }), l = () => {
      $e(() => t("change", o.value));
    }, s = (v) => {
      if (e.maxlength && o.value.length >= Number(e.maxlength))
        return;
      const m = o.value.indexOf("."), h = o.value.split(".");
      h.length === 2 && (v === "." || h[1].length >= e.precision) || (o.value = `${m === 0 ? 0 : ""}${o.value}${v}`, !e.startZero && o.value.slice(0, 1) === "0" && (o.value = o.value.slice(1) + v), l());
    }, r = (v) => {
      v === "delete" ? o.value = o.value.slice(0, o.value.length - 1) : v === "clear" && (o.value = "", t("clear")), v === "confirm" ? t("confirm") : l();
    }, i = ({ key: v, name: m }) => {
      v ? r(v) : s(m);
    }, c = k(() => `${Number(4 * e.width + 20)}px`), f = k(() => `${e.width}px`), d = k(() => e.decimalPoint ? 3 : 4);
    return {
      keyboardList: a,
      clickHandleBtn: i,
      clickBtn: s,
      totalwidth: c,
      gridwidth: f,
      numberVal: o,
      zerogridend: d
    };
  }
}), Xi = () => {
  vr((e) => ({
    "5f76155e": e.totalwidth,
    af867fde: e.gridwidth,
    c0d11484: e.zerogridend
  }));
}, Zi = ts.setup;
ts.setup = Zi ? (e, t) => (Xi(), Zi(e, t)) : Xi;
const k_ = { class: "number-keyboard mt10" }, $_ = { class: "number-ul" };
function __(e, t, n, a, o, l) {
  const s = he("el-button");
  return _(), L("div", k_, [
    K("ul", $_, [
      (_(!0), L(Te, null, He(e.keyboardList, (r, i) => (_(), L("li", {
        key: i,
        class: A(r.class)
      }, [
        q(s, {
          type: r.type,
          color: e.color,
          onClick: (c) => e.clickHandleBtn(r)
        }, {
          default: X(() => [
            Qe(pe(r.name), 1)
          ]),
          _: 2
        }, 1032, ["type", "color", "onClick"])
      ], 2))), 128))
    ])
  ]);
}
const Ro = /* @__PURE__ */ gt(ts, [["render", __], ["__scopeId", "data-v-2e1be318"]]);
Ro.install = function(e) {
  e.component(Ro.name, Ro);
};
const E_ = Q({
  name: "KAutoCounter",
  props: {
    modelValue: { type: [Number, String], default: 0 },
    start: { type: Number, default: 0 },
    end: { type: Number, default: 1 / 0 },
    autoinit: { type: Boolean, default: !0 },
    prefix: { type: String, default: "" },
    suffix: { type: String, default: "" },
    decimals: { type: Number, default: 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = k({
      get: () => e.modelValue,
      set: (r) => t("update:modelValue", r)
    }), a = (r) => e.decimals ? Number(r).toFixed(e.decimals) : r, o = O(null), l = (r = !0) => {
      const i = o.value;
      if (!i)
        return;
      const c = +i.innerText, f = +n.value / 200, d = r && c < Number(n.value) || !r && c > Number(n.value);
      r && c > e.end || c < e.start || (d ? s(i, r ? c + f : c - f, r) : i.interText = a(n.value));
    }, s = (r, i, c = !0) => {
      const f = i < e.start ? e.start : `${e.decimals ? i : Math.floor(i)}`, d = i > e.end ? e.end : `${e.decimals ? i : Math.ceil(i)}`;
      r.innerText = a(c ? d : f);
      const v = setTimeout(() => {
        clearTimeout(v), c ? l() : l(!1);
      }, 5);
    };
    return Ge(() => {
      o.value && e.autoinit && l();
    }), Qo(() => {
      if (e.autoinit) {
        const r = +o.value.innerText;
        l(r < Number(n.value));
      }
    }), { textValue: n, spanText: o, setDeimals: a };
  }
}), T_ = { class: "auto-counter" }, O_ = { class: "mr5" }, P_ = { class: "ml5" };
function M_(e, t, n, a, o, l) {
  return _(), L("div", T_, [
    K("span", O_, pe(e.prefix), 1),
    K("span", {
      class: "span-text",
      ref: "spanText"
    }, pe(e.autoinit ? e.setDeimals(e.start) : e.setDeimals(e.textValue)), 513),
    K("span", P_, pe(e.suffix), 1)
  ]);
}
const Lo = /* @__PURE__ */ gt(E_, [["render", M_]]);
Lo.install = function(e) {
  e.component(Lo.name, Lo);
};
const x_ = Q({
  name: "KCollapseButton",
  components: { ElIcon: xe, CaretLeft: wg, CaretRight: Sg },
  props: {
    style: { type: Object, default: () => ({}) },
    position: { type: String, default: "right" }
  },
  emits: ["click"],
  setup(e, { emit: t, slots: n }) {
    const a = O(!1), o = O(null);
    Ge(() => {
      const { parentNode: r } = o.value;
      r.style.position = "relative", r.style.overflow = "initial";
    });
    const l = k(() => {
      const { clientWidth: r, clientHeight: i } = o.value || {}, {
        top: c,
        right: f,
        width: d,
        height: v,
        left: m,
        bottom: h
      } = e.style, p = {
        right: {
          top: c ?? "50%",
          right: f ?? `-${r}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: c ? "0px" : `-${Math.ceil(i / 2)}px`
        },
        left: {
          top: c ?? "50%",
          left: m ?? `-${r}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: c ? "0px" : `-${Math.ceil(i / 2)}px`,
          transform: n != null && n.default ? "" : "rotate(180deg)"
        },
        top: {
          left: m ?? "50%",
          marginLeft: m ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(r / 2)}px` : "0px",
          top: c ?? (n == null ? void 0 : n.default) ? `-${i}px` : `-${Math.ceil(i / 2 + r / 2)}px`,
          borderRadius: n != null && n.default ? "5px 5px 0 0" : "0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(-90deg)"
        },
        bottom: {
          left: m ?? "50%",
          bottom: h ?? (n == null ? void 0 : n.default) ? `-${i}px` : `-${Math.ceil(i / 2 + r / 2)}px`,
          marginLeft: m ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(r / 2)}px` : "0px",
          borderRadius: n != null && n.default ? "0 0 5px 5px" : " 0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(90deg)"
        }
      };
      return {
        width: d ?? (n == null ? void 0 : n.default) ? "" : "10px",
        height: v ?? (n == null ? void 0 : n.default) ? "" : "68px",
        ...p[e.position]
      };
    });
    return {
      isCollapse: a,
      collapse: o,
      clickHandle: () => {
        a.value = !a.value, t("click");
      },
      collapseStyle: l
    };
  }
});
function A_(e, t, n, a, o, l) {
  const s = he("CaretRight"), r = he("CaretLeft"), i = he("el-icon");
  return _(), L("div", {
    class: "collapse-button flex-center pointer",
    style: Fe(e.collapseStyle),
    ref: "collapse",
    onClick: t[0] || (t[0] = (...c) => e.clickHandle && e.clickHandle(...c))
  }, [
    ae(e.$slots, "default", {}, () => [
      q(i, {
        size: 18,
        color: "#999999"
      }, {
        default: X(() => [
          e.isCollapse ? (_(), oe(s, { key: 0 })) : (_(), oe(r, { key: 1 }))
        ]),
        _: 1
      })
    ], !0)
  ], 4);
}
const Fo = /* @__PURE__ */ gt(x_, [["render", A_], ["__scopeId", "data-v-53ad025a"]]);
Fo.install = function(e) {
  e.component(Fo.name, Fo);
};
const D_ = {
  modelValue: { type: [String, Number], default: "" },
  data: { type: Array, default: () => [] },
  width: { type: String, default: "" },
  columns: { type: Number, default: 5 },
  fixedColumn: { type: Boolean, default: !1 },
  // 固定column
  gridGap: { type: Number, default: 20 },
  disabled: { type: Boolean, default: !1 },
  // 是否可选
  keyId: { type: String, default: "id" },
  highlight: { type: Boolean, default: !1 },
  // 点击是否高亮
  rowClass: { type: [String, Object], default: "border" }
};
function I_(e, t) {
  const n = O(null), a = O(100), o = O(null), l = () => {
    var w;
    return ((w = document.querySelector(".card-row")) == null ? void 0 : w.offsetHeight) ?? 10;
  }, s = () => {
    var w;
    return ((w = document.querySelector(".card-row")) == null ? void 0 : w.offsetWidth) ?? 10;
  }, r = O(0), i = O(20), c = O(0), f = O(e.columns), d = (w) => Math.ceil(w / l()), v = () => {
    const { clientHeight: w = 100 } = n.value.wrapRef || {};
    return Math.floor(w / (l() + e.gridGap)) + r.value || 1;
  }, m = k(() => e.data.map((w, S) => ({ ...w, rowIndex: S }))), h = k(() => m.value.filter((w, S) => S >= r.value * f.value && S < i.value * f.value)), p = () => {
    const w = f.value * e.gridGap;
    a.value = Math.ceil(e.data.length / f.value * l()) + w;
  }, b = (w) => {
    const { scrollTop: S, clientHeight: y } = n.value.wrapRef, $ = a.value - y - S;
    t("scroll", { distance: $, ...w }), r.value = d(S), i.value = v(), c.value = S;
  };
  ue(() => e.data, () => {
    p(), i.value = v();
  });
  const g = () => {
    if (o.value) {
      const { clientWidth: w = 500 } = n.value.wrapRef;
      f.value = Math.floor(w / s()) || 1, p(), c.value = 0, r.value = 0, n.value.setScrollTop(0), i.value = v();
    }
  };
  return Ge(() => {
    g(), window.addEventListener("resize", g);
  }), $a(() => {
    window.removeEventListener("resize", g);
  }), {
    scrollbarRef: n,
    containHeight: a,
    cardRowRef: o,
    onScroll: b,
    startOffset: c,
    viewListRanges: h,
    resetViewport: g
  };
}
const ns = Q({
  name: "KCardList",
  props: D_,
  components: { ElScrollbar: la },
  emits: ["click", "mouseenter", "mouseleave", "update:modelValue", "scroll"],
  setup(e, { emit: t }) {
    const n = k(() => `${Number((100 / e.columns).toFixed(1))}%`), a = k(() => `${e.gridGap}px`), o = k(() => `${e.width}`), l = (b) => b.disabled || e.disabled, s = k(() => e.rowClass === "border" ? "border-row" : e.rowClass === "shadow" ? "box-shadow" : e.rowClass), r = O("");
    Mt(() => {
      r.value = e.modelValue;
    });
    const i = (b) => {
      l(b) || (e.highlight && (r.value = b[e.keyId], t("update:modelValue", b[e.keyId])), t("click", b));
    }, {
      scrollbarRef: c,
      containHeight: f,
      cardRowRef: d,
      startOffset: v,
      viewListRanges: m,
      onScroll: h,
      resetViewport: p
    } = I_(e, t);
    return {
      calcnum: n,
      gridgap: a,
      columnwidth: o,
      rowClassStyle: s,
      clickHandle: i,
      selectedId: r,
      bitNotAllowed: l,
      scrollbarRef: c,
      containHeight: f,
      cardRowRef: d,
      startOffset: v,
      viewListRanges: m,
      onScroll: h,
      resetViewport: p
    };
  }
}), Qi = () => {
  vr((e) => ({
    a9602a90: e.gridgap,
    "5a6ae676": e.columns,
    "8a42ec0e": e.calcnum,
    "1de64118": e.columnwidth,
    "55dd34dc": e.imgheight
  }));
}, Ji = ns.setup;
ns.setup = Ji ? (e, t) => (Qi(), Ji(e, t)) : Qi;
const N_ = { class: "card-contain" }, R_ = ["onClick", "onMouseenter", "onMouseleave"], L_ = { class: "card-list-content" }, F_ = { class: "sign" };
function B_(e, t, n, a, o, l) {
  const s = he("el-scrollbar");
  return _(), oe(s, Ue({
    ref: "scrollbarRef",
    "data-test": "card-list"
  }, e.$attrs, {
    always: "",
    onScroll: e.onScroll
  }), {
    default: X(() => [
      K("div", N_, [
        K("div", {
          class: "card-wrap",
          style: Fe({ height: `${e.containHeight}px` })
        }, null, 4),
        K("div", {
          class: "card-list",
          style: Fe({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          K("div", {
            class: A([e.fixedColumn ? "card-fixed-coumn" : "card-content", { "fixed-width": e.width }])
          }, [
            (_(!0), L(Te, null, He(e.viewListRanges, (r, i) => (_(), L("div", {
              class: A(["card-row border-radius pointer", [e.selectedId === r[e.keyId] ? "select-style" : "", e.bitNotAllowed(r) ? "not-allowed" : "hover-style", e.rowClassStyle]]),
              key: i,
              onClick: (c) => e.clickHandle(r),
              ref_for: !0,
              ref: "cardRowRef",
              onMouseenter: (c) => e.$emit("mouseenter", r),
              onMouseleave: (c) => e.$emit("mouseleave", r)
            }, [
              K("div", L_, [
                ae(e.$slots, "default", {
                  row: r,
                  index: r.rowIndex
                }, () => [
                  Qe(pe(r.rowIndex), 1)
                ], !0)
              ]),
              K("div", F_, [
                ae(e.$slots, "sign", {
                  row: r,
                  index: r.rowIndex
                }, void 0, !0)
              ])
            ], 42, R_))), 128))
          ], 2)
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["onScroll"]);
}
const Bo = /* @__PURE__ */ gt(ns, [["render", B_], ["__scopeId", "data-v-fe95936c"]]);
Bo.install = function(e) {
  e.component(Bo.name, Bo);
};
const Dl = {
  KButton: To,
  KInput: Va,
  KInputNumber: za,
  KTable: Oo,
  KTableV2: Po,
  KPage: ca,
  KBatchTable: Ka,
  KDialog: Mo,
  KBreadcrumb: xo,
  KTabs: Ao,
  KPicker: Do,
  KTooltip: Io,
  KDatePicker: No,
  KNumberKeyboard: Ro,
  KVirtualList: Ha,
  KAutoCounter: Lo,
  KCollapseButton: Fo,
  KCardList: Bo,
  install: () => {
  }
};
function V_(e, t, n = 0) {
  return e.substr(n, t.length) === t;
}
Dl.install = function(e) {
  Object.keys(Dl).forEach((t) => {
    if (V_(t, "K")) {
      const n = Dl[t];
      e.component(n.name, n);
    }
  }), Object.keys(Ia).forEach((t) => {
    e.directive(t, Ia[t]);
  });
};
export {
  Lo as KAutoCounter,
  Ka as KBatchTable,
  xo as KBreadcrumb,
  To as KButton,
  Bo as KCardList,
  Fo as KCollapseButton,
  No as KDatePicker,
  Mo as KDialog,
  Va as KInput,
  za as KInputNumber,
  Ro as KNumberKeyboard,
  ca as KPage,
  Do as KPicker,
  Oo as KTable,
  Po as KTableV2,
  Ao as KTabs,
  Io as KTooltip,
  Dl as KUI,
  Ha as KVirtualList,
  Ia as directives
};
