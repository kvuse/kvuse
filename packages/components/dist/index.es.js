import { defineComponent as B, ref as y, computed as b, resolveComponent as V, openBlock as v, createBlock as H, mergeProps as O, withModifiers as Jt, withCtx as S, renderSlot as T, createElementBlock as w, createCommentVNode as j, withKeys as Nt, createSlots as fe, createElementVNode as C, watchEffect as ke, watch as q, nextTick as re, normalizeClass as x, createVNode as N, unref as _, getCurrentScope as en, onScopeDispose as tn, getCurrentInstance as pe, onMounted as he, warn as nn, provide as ot, inject as ne, onBeforeUnmount as an, toRef as Re, Transition as on, withDirectives as ln, normalizeStyle as Y, vShow as rn, Fragment as A, reactive as Mt, onUpdated as Bt, resolveDynamicComponent as Ge, useSlots as sn, Text as un, renderList as Q, toDisplayString as K, createTextVNode as X, toRefs as cn, isRef as qe, normalizeProps as dt, useCssVars as Ht, onUnmounted as dn } from "vue";
const be = {
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
        const o = Date.now(), l = /^[a-zA-Z]{2,}/.test(a.key) ? a.key : a.key.toLocaleUpperCase(), { buttonKey: s, isCombination: r = 0 } = t.value || e.valueKeys || {}, u = document.contains(e), i = a.target.tagName === "TEXTAREA" || a.target.tagName === "INPUT", {
          dialog: d,
          focus: f,
          long: h,
          any: p,
          fast: c
        } = t.modifiers;
        if (!u && !h) {
          document.removeEventListener("keydown", e.handler);
          return;
        }
        if (p && t.arg) {
          t.arg(a);
          return;
        }
        const g = c ? o - n > 30 : !0, m = document.querySelector(".el-popup-parent--hidden") || document.querySelector(".is-message-box");
        if (n = o, m && !d)
          return;
        const $ = a.ctrlKey || a.metaKey, k = r === +$ && s === l;
        (!i || f || r) && k && g && t.arg && t.arg(a);
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
be.install = function(e) {
  Object.keys(be).forEach((t) => {
    e.directive(t, be[t]);
  });
};
const P = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, fn = B({
  name: "KButton",
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
    const a = y(!0), o = y(null), l = () => {
      a.value && (a.value = !1, t("click")), s();
    }, s = () => {
      clearTimeout(o.value), o.value = setTimeout(() => {
        a.value = !0;
      }, 800);
    }, r = b(() => {
      const { border: u } = e, { type: i = "text" } = n;
      return u ? {
        backgroundColor: "transparent",
        color: `var(--el-color-${i})`
      } : {};
    });
    return { onclick: l, buttonStatus: a, buttonStyle: r };
  }
}), pn = {
  key: 0,
  class: "el-icon-lock el-icon--right"
};
function hn(e, t, n, a, o, l) {
  const s = V("el-button");
  return v(), H(s, O({
    disabled: !e.buttonStatus || e.disabled,
    style: e.buttonStyle,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: Jt(e.onclick, ["stop"])
  }), {
    default: S(() => [
      T(e.$slots, "default"),
      e.iconLock ? (v(), w("i", pn)) : j("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "style", "click-state", "onClick"]);
}
const Ee = /* @__PURE__ */ P(fn, [["render", hn]]);
Ee.install = function(e) {
  e.component(Ee.name, Ee);
};
const mn = B({
  name: "KInput",
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
    const a = y(null), o = y(!0), l = b({
      get() {
        return e.modelValue;
      },
      set(d) {
        s(d);
      }
    }), s = (d) => {
      let f = d;
      if (e.type === "number") {
        if (f = f.replace(/[^\d.]/g, ""), f = f.replace(/^\./g, ""), f = f.replace(/\.{2,}/g, "."), f = f.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), f.indexOf(".") < 0 && f !== "" && f.substr(0, 1) === "0" && f.length === 2 && (f = f.substr(1, f.length)), f !== "")
          if (f.indexOf(".") > 0) {
            if (e.point) {
              const h = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
              f = f.match(h)[0] || null;
            }
          } else
            f === "." && (f = "");
      } else
        e.type === "integer" ? f = f.replace(/[^\d]/g, "") : e.type === "intText" && (f = f.replace(/[^\w]/g, ""));
      n.max !== void 0 && f && Number(f) > Number(n.max) && (f = n.max), n.min !== void 0 && f && Number(f) < Number(n.min) && (f = n.min), t("update:modelValue", f);
    }, r = () => {
      o.value && (o.value = !1, l.value && t("enter")), i();
    }, u = (d) => {
      t("change", d);
    }, i = () => {
      clearTimeout(a.value), a.value = setTimeout(() => {
        o.value = !0;
      }, 800);
    };
    return {
      inputValue: l,
      changeValue: u,
      searchContent: r
    };
  }
});
function vn(e, t, n, a, o, l) {
  const s = V("el-input");
  return v(), H(s, O({
    modelValue: e.inputValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => e.inputValue = r),
    modelModifiers: { trim: !0 }
  }, e.$attrs, {
    onKeyup: Nt(e.searchContent, ["enter"]),
    onChange: e.changeValue
  }), fe({ _: 2 }, [
    e.$slots.append ? {
      name: "append",
      fn: S(() => [
        T(e.$slots, "append")
      ]),
      key: "0"
    } : void 0,
    e.$slots.prepend ? {
      name: "prepend",
      fn: S(() => [
        T(e.$slots, "prepend")
      ]),
      key: "1"
    } : void 0,
    e.$slots.prefix ? {
      name: "prefix",
      fn: S(() => [
        T(e.$slots, "prefix")
      ]),
      key: "2"
    } : void 0,
    e.$slots.suffix ? {
      name: "suffix",
      fn: S(() => [
        T(e.$slots, "suffix")
      ]),
      key: "3"
    } : void 0
  ]), 1040, ["modelValue", "onKeyup", "onChange"]);
}
const ye = /* @__PURE__ */ P(mn, [["render", vn]]);
ye.install = function(e) {
  e.component(ye.name, ye);
};
/*! Element Plus Icons Vue v2.0.10 */
var se = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [a, o] of t)
    n[a] = o;
  return n;
}, gn = {
  name: "CaretLeft"
}, bn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yn = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M672 192 288 511.936 672 832z"
}, null, -1), _n = [
  yn
];
function wn(e, t, n, a, o, l) {
  return v(), w("svg", bn, _n);
}
var $n = /* @__PURE__ */ se(gn, [["render", wn], ["__file", "caret-left.vue"]]), kn = {
  name: "CaretRight"
}, Sn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Cn = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null, -1), En = [
  Cn
];
function Vn(e, t, n, a, o, l) {
  return v(), w("svg", Sn, En);
}
var Tn = /* @__PURE__ */ se(kn, [["render", Vn], ["__file", "caret-right.vue"]]), Nn = {
  name: "Delete"
}, Mn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Bn = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1), Hn = [
  Bn
];
function xn(e, t, n, a, o, l) {
  return v(), w("svg", Mn, Hn);
}
var zn = /* @__PURE__ */ se(Nn, [["render", xn], ["__file", "delete.vue"]]), In = {
  name: "Loading"
}, Pn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Dn = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), On = [
  Dn
];
function An(e, t, n, a, o, l) {
  return v(), w("svg", Pn, On);
}
var Rn = /* @__PURE__ */ se(In, [["render", An], ["__file", "loading.vue"]]), Fn = {
  name: "Minus"
}, Ln = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Kn = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1), jn = [
  Kn
];
function Yn(e, t, n, a, o, l) {
  return v(), w("svg", Ln, jn);
}
var Un = /* @__PURE__ */ se(Fn, [["render", Yn], ["__file", "minus.vue"]]), Wn = {
  name: "Plus"
}, Gn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qn = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), Qn = [
  qn
];
function Xn(e, t, n, a, o, l) {
  return v(), w("svg", Gn, Qn);
}
var Zn = /* @__PURE__ */ se(Wn, [["render", Xn], ["__file", "plus.vue"]]), Jn = {
  name: "Warning"
}, ea = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ta = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), na = [
  ta
];
function aa(e, t, n, a, o, l) {
  return v(), w("svg", ea, na);
}
var oa = /* @__PURE__ */ se(Jn, [["render", aa], ["__file", "warning.vue"]]);
const la = B({
  name: "KInputNumber",
  components: { Minus: Un, Plus: Zn, KInput: ye },
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
    const n = y(1), a = y(null), o = y(!1), l = b(() => e.modelValue <= e.min), s = b(() => e.modelValue >= e.max), r = b({
      get: () => e.modelValue,
      set: (m) => {
        t("update:modelValue", m);
      }
    }), u = (m) => t("blur", m), i = (m) => t("focus", m), d = (m) => t("enter", m), f = (m) => {
      re(() => {
        const $ = m === "" ? void 0 : Number(m);
        (!Number.isNaN($) || m === "") && g($);
      });
    }, h = (m) => {
      o.value = !m, a.value = m;
    }, p = y(-1);
    ke(() => {
      n.value = e.modelValue;
    }), q(() => p.value, (m) => {
      m < 0 && (r.value = e.modelValue, f(n.value));
    }, { immediate: !0 });
    const c = (m) => {
      const $ = m === "increase", k = $ ? s.value : l.value;
      if (e.disabled || k)
        return;
      const z = o.value ? 0 : r.value, U = a.value ? n.value : z, W = $ ? U + e.step : U - e.step;
      g(W);
    }, g = (m) => {
      a.value = m;
      let $ = m;
      p.value !== $ && (p.value = m, $ >= e.max && ($ = e.max), $ <= e.min && ($ = e.min), a.value === void 0 && ($ = 1), t("update:modelValue", $), t("change", $, p.value), n.value = $);
    };
    return {
      currentValue: n,
      minDisabled: l,
      maxDisabled: s,
      handleBlur: u,
      handleFocus: i,
      handleKeyUp: d,
      handleInputChange: f,
      handleInput: h,
      clickBtnHandle: c
    };
  }
});
function ra(e, t, n, a, o, l) {
  const s = V("minus"), r = V("el-icon"), u = V("plus"), i = V("k-input");
  return v(), w("div", {
    class: x(["el-input-number", { "is-disabled": e.disabled }, { "is-without-controls": !e.controls }, e.size ? "el-input-number--" + e.size : ""])
  }, [
    e.controls ? (v(), w("span", {
      key: 0,
      class: x(["el-input-number__decrease", { "is-disabled": e.minDisabled }]),
      role: "button",
      onClick: t[0] || (t[0] = (d) => e.clickBtnHandle("decrease"))
    }, [
      N(r, { class: "el-input__icon" }, {
        default: S(() => [
          N(s)
        ]),
        _: 1
      })
    ], 2)) : j("", !0),
    e.controls ? (v(), w("span", {
      key: 1,
      class: x(["el-input-number__increase", { "is-disabled": e.maxDisabled }]),
      role: "button",
      onClick: t[1] || (t[1] = (d) => e.clickBtnHandle("increase"))
    }, [
      N(r, { class: "el-input__icon" }, {
        default: S(() => [
          N(u)
        ]),
        _: 1
      })
    ], 2)) : j("", !0),
    N(i, O({
      ref: "input",
      modelValue: e.currentValue,
      "onUpdate:modelValue": t[2] || (t[2] = (d) => e.currentValue = d),
      disabled: e.disabled,
      type: e.type
    }, e.$attrs, {
      onBlur: e.handleBlur,
      maxlength: "6",
      onFocus: e.handleFocus,
      onChange: e.handleInputChange,
      onInput: e.handleInput,
      onKeyup: Nt(e.handleKeyUp, ["enter"])
    }), null, 16, ["modelValue", "disabled", "type", "onBlur", "onFocus", "onChange", "onInput", "onKeyup"])
  ], 2);
}
const Ve = /* @__PURE__ */ P(la, [["render", ra]]);
Ve.install = function(e) {
  e.component(Ve.name, Ve);
};
function sa(e) {
  for (var t = -1, n = e == null ? 0 : e.length, a = {}; ++t < n; ) {
    var o = e[t];
    a[o[0]] = o[1];
  }
  return a;
}
var ft;
const lt = typeof window < "u", ie = (e) => typeof e == "number", ua = (e) => typeof e == "string", ia = () => {
};
lt && ((ft = window == null ? void 0 : window.navigator) != null && ft.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function xt(e) {
  return typeof e == "function" ? e() : _(e);
}
function ca(e) {
  return e;
}
function zt(e) {
  return en() ? (tn(e), !0) : !1;
}
function da(e, t = !0) {
  pe() ? he(e) : t ? e() : re(e);
}
function It(e) {
  var t;
  const n = xt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Pt = lt ? window : void 0;
function Qe(...e) {
  let t, n, a, o;
  if (ua(e[0]) || Array.isArray(e[0]) ? ([n, a, o] = e, t = Pt) : [t, n, a, o] = e, !t)
    return ia;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const l = [], s = () => {
    l.forEach((d) => d()), l.length = 0;
  }, r = (d, f, h, p) => (d.addEventListener(f, h, p), () => d.removeEventListener(f, h, p)), u = q(() => [It(t), xt(o)], ([d, f]) => {
    s(), d && l.push(...n.flatMap((h) => a.map((p) => r(d, h, p, f))));
  }, { immediate: !0, flush: "post" }), i = () => {
    u(), s();
  };
  return zt(i), i;
}
function fa(e, t = !1) {
  const n = y(), a = () => n.value = Boolean(e());
  return a(), da(a, t), n;
}
const Xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ze = "__vueuse_ssr_handlers__";
Xe[Ze] = Xe[Ze] || {};
Xe[Ze];
var pt = Object.getOwnPropertySymbols, pa = Object.prototype.hasOwnProperty, ha = Object.prototype.propertyIsEnumerable, ma = (e, t) => {
  var n = {};
  for (var a in e)
    pa.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && pt)
    for (var a of pt(e))
      t.indexOf(a) < 0 && ha.call(e, a) && (n[a] = e[a]);
  return n;
};
function va(e, t, n = {}) {
  const a = n, { window: o = Pt } = a, l = ma(a, ["window"]);
  let s;
  const r = fa(() => o && "ResizeObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, i = q(() => It(e), (f) => {
    u(), r.value && o && f && (s = new ResizeObserver(t), s.observe(f, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), i();
  };
  return zt(d), {
    isSupported: r,
    stop: d
  };
}
var ht;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ht || (ht = {}));
var ga = Object.defineProperty, mt = Object.getOwnPropertySymbols, ba = Object.prototype.hasOwnProperty, ya = Object.prototype.propertyIsEnumerable, vt = (e, t, n) => t in e ? ga(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _a = (e, t) => {
  for (var n in t || (t = {}))
    ba.call(t, n) && vt(e, n, t[n]);
  if (mt)
    for (var n of mt(t))
      ya.call(t, n) && vt(e, n, t[n]);
  return e;
};
const wa = {
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
_a({
  linear: ca
}, wa);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const $a = () => {
}, ka = Object.prototype.hasOwnProperty, gt = (e, t) => ka.call(e, t), rt = (e) => typeof e == "string", st = (e) => e !== null && typeof e == "object", Sa = (e) => e === void 0, Ca = (e) => rt(e) ? !Number.isNaN(Number(e)) : !1, bt = (e) => Object.keys(e);
class Dt extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ea(e, t) {
  throw new Dt(`[${e}] ${t}`);
}
function $e(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = rt(e) ? new Dt(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Va = "utils/dom/style";
function Je(e, t = "px") {
  if (!e)
    return "";
  if (ie(e) || Ca(e))
    return `${e}${t}`;
  if (rt(e))
    return e;
  $e(Va, "binding value must be a string or number");
}
const Ot = "__epPropKey", oe = (e) => e, Ta = (e) => st(e) && !!e[Ot], At = (e, t) => {
  if (!st(e) || Ta(e))
    return e;
  const { values: n, required: a, default: o, type: l, validator: s } = e, u = {
    type: l,
    required: !!a,
    validator: n || s ? (i) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), gt(e, "default") && f.push(o), d || (d = f.includes(i))), s && (d || (d = s(i))), !d && f.length > 0) {
        const h = [...new Set(f)].map((p) => JSON.stringify(p)).join(", ");
        nn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(i)}.`);
      }
      return d;
    } : void 0,
    [Ot]: !0
  };
  return gt(e, "default") && (u.default = o), u;
}, me = (e) => sa(Object.entries(e).map(([t, n]) => [
  t,
  At(n, t)
])), yt = oe([
  String,
  Object,
  Function
]), Le = (e, t) => {
  if (e.install = (n) => {
    for (const a of [e, ...Object.values(t ?? {})])
      n.component(a.name, a);
  }, t)
    for (const [n, a] of Object.entries(t))
      e[n] = a;
  return e;
}, Na = (e) => (e.install = $a, e), Ma = ["", "default", "small", "large"], Rt = Symbol("buttonGroupContextKey"), Ft = Symbol(), ut = Symbol("formContextKey"), Lt = Symbol("formItemContextKey"), Kt = Symbol("scrollbarContextKey"), jt = (e) => {
  const t = pe();
  return b(() => {
    var n, a;
    return (a = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? a : void 0;
  });
}, Fe = y();
function Ke(e, t = void 0) {
  const n = pe() ? ne(Ft, Fe) : Fe;
  return e ? b(() => {
    var a, o;
    return (o = (a = n.value) == null ? void 0 : a[e]) != null ? o : t;
  }) : n;
}
const Ba = (e, t, n = !1) => {
  var a;
  const o = !!pe(), l = o ? Ke() : void 0, s = (a = t == null ? void 0 : t.provide) != null ? a : o ? ot : void 0;
  if (!s) {
    $e("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const r = b(() => {
    const u = _(e);
    return l != null && l.value ? Ha(l.value, u) : u;
  });
  return s(Ft, r), (n || !Fe.value) && (Fe.value = r.value), r;
}, Ha = (e, t) => {
  var n;
  const a = [.../* @__PURE__ */ new Set([...bt(e), ...bt(t)])], o = {};
  for (const l of a)
    o[l] = (n = t[l]) != null ? n : e[l];
  return o;
}, Yt = At({
  type: String,
  values: Ma,
  required: !1
}), xa = (e, t = {}) => {
  const n = y(void 0), a = t.prop ? n : jt("size"), o = t.global ? n : Ke("size"), l = t.form ? { size: void 0 } : ne(ut, void 0), s = t.formItem ? { size: void 0 } : ne(Lt, void 0);
  return b(() => a.value || _(e) || (s == null ? void 0 : s.size) || (l == null ? void 0 : l.size) || o.value || "");
}, Ut = (e) => {
  const t = jt("disabled"), n = ne(ut, void 0);
  return b(() => t.value || _(e) || (n == null ? void 0 : n.disabled) || !1);
}, za = ({ from: e, replacement: t, scope: n, version: a, ref: o, type: l = "API" }, s) => {
  q(() => _(s), (r) => {
    r && $e(n, `[${l}] ${e} is about to be deprecated in version ${a}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, Ia = "el", Pa = "is-", ae = (e, t, n, a, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), a && (l += `__${a}`), o && (l += `--${o}`), l;
}, ve = (e) => {
  const t = Ke("namespace", Ia);
  return {
    namespace: t,
    b: (c = "") => ae(t.value, e, c, "", ""),
    e: (c) => c ? ae(t.value, e, "", c, "") : "",
    m: (c) => c ? ae(t.value, e, "", "", c) : "",
    be: (c, g) => c && g ? ae(t.value, e, c, g, "") : "",
    em: (c, g) => c && g ? ae(t.value, e, "", c, g) : "",
    bm: (c, g) => c && g ? ae(t.value, e, c, "", g) : "",
    bem: (c, g, m) => c && g && m ? ae(t.value, e, c, g, m) : "",
    is: (c, ...g) => {
      const m = g.length >= 1 ? g[0] : !0;
      return c && m ? `${Pa}${c}` : "";
    },
    cssVar: (c) => {
      const g = {};
      for (const m in c)
        c[m] && (g[`--${t.value}-${m}`] = c[m]);
      return g;
    },
    cssVarName: (c) => `--${t.value}-${c}`,
    cssVarBlock: (c) => {
      const g = {};
      for (const m in c)
        c[m] && (g[`--${t.value}-${e}-${m}`] = c[m]);
      return g;
    },
    cssVarBlockName: (c) => `--${t.value}-${e}-${c}`
  };
}, Da = () => {
  const e = ne(ut, void 0), t = ne(Lt, void 0);
  return {
    form: e,
    formItem: t
  };
};
var ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
};
const Oa = me({
  size: {
    type: oe([Number, String])
  },
  color: {
    type: String
  }
}), Aa = B({
  name: "ElIcon",
  inheritAttrs: !1
}), Ra = /* @__PURE__ */ B({
  ...Aa,
  props: Oa,
  setup(e) {
    const t = e, n = ve("icon"), a = b(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: Sa(o) ? void 0 : Je(o),
        "--color": l
      };
    });
    return (o, l) => (v(), w("i", O({
      class: _(n).b(),
      style: _(a)
    }, o.$attrs), [
      T(o.$slots, "default")
    ], 16));
  }
});
var Fa = /* @__PURE__ */ ge(Ra, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const et = Le(Fa), ce = 4, La = {
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
}, Ka = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), ja = me({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Ya = "Thumb", Ua = /* @__PURE__ */ B({
  __name: "thumb",
  props: ja,
  setup(e) {
    const t = e, n = ne(Kt), a = ve("scrollbar");
    n || Ea(Ya, "can not inject scrollbar context");
    const o = y(), l = y(), s = y({}), r = y(!1);
    let u = !1, i = !1, d = lt ? document.onselectstart : null;
    const f = b(() => La[t.vertical ? "vertical" : "horizontal"]), h = b(() => Ka({
      size: t.size,
      move: t.move,
      bar: f.value
    })), p = b(() => o.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / l.value[f.value.offset]), c = (M) => {
      var E;
      if (M.stopPropagation(), M.ctrlKey || [1, 2].includes(M.button))
        return;
      (E = window.getSelection()) == null || E.removeAllRanges(), m(M);
      const I = M.currentTarget;
      I && (s.value[f.value.axis] = I[f.value.offset] - (M[f.value.client] - I.getBoundingClientRect()[f.value.direction]));
    }, g = (M) => {
      if (!l.value || !o.value || !n.wrapElement)
        return;
      const E = Math.abs(M.target.getBoundingClientRect()[f.value.direction] - M[f.value.client]), I = l.value[f.value.offset] / 2, F = (E - I) * 100 * p.value / o.value[f.value.offset];
      n.wrapElement[f.value.scroll] = F * n.wrapElement[f.value.scrollSize] / 100;
    }, m = (M) => {
      M.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", $), document.addEventListener("mouseup", k), d = document.onselectstart, document.onselectstart = () => !1;
    }, $ = (M) => {
      if (!o.value || !l.value || u === !1)
        return;
      const E = s.value[f.value.axis];
      if (!E)
        return;
      const I = (o.value.getBoundingClientRect()[f.value.direction] - M[f.value.client]) * -1, F = l.value[f.value.offset] - E, Z = (I - F) * 100 * p.value / o.value[f.value.offset];
      n.wrapElement[f.value.scroll] = Z * n.wrapElement[f.value.scrollSize] / 100;
    }, k = () => {
      u = !1, s.value[f.value.axis] = 0, document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", k), W(), i && (r.value = !1);
    }, z = () => {
      i = !1, r.value = !!t.size;
    }, U = () => {
      i = !0, r.value = u;
    };
    an(() => {
      W(), document.removeEventListener("mouseup", k);
    });
    const W = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Qe(Re(n, "scrollbarElement"), "mousemove", z), Qe(Re(n, "scrollbarElement"), "mouseleave", U), (M, E) => (v(), H(on, {
      name: _(a).b("fade"),
      persisted: ""
    }, {
      default: S(() => [
        ln(C("div", {
          ref_key: "instance",
          ref: o,
          class: x([_(a).e("bar"), _(a).is(_(f).key)]),
          onMousedown: g
        }, [
          C("div", {
            ref_key: "thumb",
            ref: l,
            class: x(_(a).e("thumb")),
            style: Y(_(h)),
            onMousedown: c
          }, null, 38)
        ], 34), [
          [rn, M.always || r.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var _t = /* @__PURE__ */ ge(Ua, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const Wa = me({
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
}), Ga = /* @__PURE__ */ B({
  __name: "bar",
  props: Wa,
  setup(e, { expose: t }) {
    const n = e, a = y(0), o = y(0);
    return t({
      handleScroll: (s) => {
        if (s) {
          const r = s.offsetHeight - ce, u = s.offsetWidth - ce;
          o.value = s.scrollTop * 100 / r * n.ratioY, a.value = s.scrollLeft * 100 / u * n.ratioX;
        }
      }
    }), (s, r) => (v(), w(A, null, [
      N(_t, {
        move: a.value,
        ratio: s.ratioX,
        size: s.width,
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      N(_t, {
        move: o.value,
        ratio: s.ratioY,
        size: s.height,
        vertical: "",
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var qa = /* @__PURE__ */ ge(Ga, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const Qa = me({
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
    type: oe([String, Object, Array]),
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
  }
}), Xa = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ie)
}, tt = "ElScrollbar", Za = B({
  name: tt
}), Ja = /* @__PURE__ */ B({
  ...Za,
  props: Qa,
  emits: Xa,
  setup(e, { expose: t, emit: n }) {
    const a = e, o = ve("scrollbar");
    let l, s;
    const r = y(), u = y(), i = y(), d = y("0"), f = y("0"), h = y(), p = y(1), c = y(1), g = b(() => {
      const E = {};
      return a.height && (E.height = Je(a.height)), a.maxHeight && (E.maxHeight = Je(a.maxHeight)), [a.wrapStyle, E];
    }), m = b(() => [
      a.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !a.native }
    ]), $ = b(() => [o.e("view"), a.viewClass]), k = () => {
      var E;
      u.value && ((E = h.value) == null || E.handleScroll(u.value), n("scroll", {
        scrollTop: u.value.scrollTop,
        scrollLeft: u.value.scrollLeft
      }));
    };
    function z(E, I) {
      st(E) ? u.value.scrollTo(E) : ie(E) && ie(I) && u.value.scrollTo(E, I);
    }
    const U = (E) => {
      if (!ie(E)) {
        $e(tt, "value must be a number");
        return;
      }
      u.value.scrollTop = E;
    }, W = (E) => {
      if (!ie(E)) {
        $e(tt, "value must be a number");
        return;
      }
      u.value.scrollLeft = E;
    }, M = () => {
      if (!u.value)
        return;
      const E = u.value.offsetHeight - ce, I = u.value.offsetWidth - ce, F = E ** 2 / u.value.scrollHeight, Z = I ** 2 / u.value.scrollWidth, R = Math.max(F, a.minSize), ue = Math.max(Z, a.minSize);
      p.value = F / (E - F) / (R / (E - R)), c.value = Z / (I - Z) / (ue / (I - ue)), f.value = R + ce < E ? `${R}px` : "", d.value = ue + ce < I ? `${ue}px` : "";
    };
    return q(() => a.noresize, (E) => {
      E ? (l == null || l(), s == null || s()) : ({ stop: l } = va(i, M), s = Qe("resize", M));
    }, { immediate: !0 }), q(() => [a.maxHeight, a.height], () => {
      a.native || re(() => {
        var E;
        M(), u.value && ((E = h.value) == null || E.handleScroll(u.value));
      });
    }), ot(Kt, Mt({
      scrollbarElement: r,
      wrapElement: u
    })), he(() => {
      a.native || re(() => {
        M();
      });
    }), Bt(() => M()), t({
      wrapRef: u,
      update: M,
      scrollTo: z,
      setScrollTop: U,
      setScrollLeft: W,
      handleScroll: k
    }), (E, I) => (v(), w("div", {
      ref_key: "scrollbarRef",
      ref: r,
      class: x(_(o).b())
    }, [
      C("div", {
        ref_key: "wrapRef",
        ref: u,
        class: x(_(m)),
        style: Y(_(g)),
        onScroll: k
      }, [
        (v(), H(Ge(E.tag), {
          ref_key: "resizeRef",
          ref: i,
          class: x(_($)),
          style: Y(E.viewStyle)
        }, {
          default: S(() => [
            T(E.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      E.native ? j("v-if", !0) : (v(), H(qa, {
        key: 0,
        ref_key: "barRef",
        ref: h,
        height: f.value,
        width: d.value,
        always: E.always,
        "ratio-x": c.value,
        "ratio-y": p.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var eo = /* @__PURE__ */ ge(Ja, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const to = Le(eo), no = (e, t) => {
  za({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, b(() => e.type === "text"));
  const n = ne(Rt, void 0), a = Ke("button"), { form: o } = Da(), l = xa(b(() => n == null ? void 0 : n.size)), s = Ut(), r = y(), u = sn(), i = b(() => e.type || (n == null ? void 0 : n.type) || ""), d = b(() => {
    var p, c, g;
    return (g = (c = e.autoInsertSpace) != null ? c : (p = a.value) == null ? void 0 : p.autoInsertSpace) != null ? g : !1;
  }), f = b(() => {
    var p;
    const c = (p = u.default) == null ? void 0 : p.call(u);
    if (d.value && (c == null ? void 0 : c.length) === 1) {
      const g = c[0];
      if ((g == null ? void 0 : g.type) === un) {
        const m = g.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(m.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: l,
    _type: i,
    _ref: r,
    shouldAddSpace: f,
    handleClick: (p) => {
      e.nativeType === "reset" && (o == null || o.resetFields()), t("click", p);
    }
  };
}, ao = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], oo = ["button", "submit", "reset"], nt = me({
  size: Yt,
  disabled: Boolean,
  type: {
    type: String,
    values: ao,
    default: ""
  },
  icon: {
    type: yt
  },
  nativeType: {
    type: String,
    values: oo,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: yt,
    default: () => Rn
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
  }
}), lo = {
  click: (e) => e instanceof MouseEvent
};
function D(e, t) {
  ro(e) && (e = "100%");
  var n = so(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Se(e) {
  return Math.min(1, Math.max(0, e));
}
function ro(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function so(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Wt(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ce(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function le(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function uo(e, t, n) {
  return {
    r: D(e, 255) * 255,
    g: D(t, 255) * 255,
    b: D(n, 255) * 255
  };
}
function wt(e, t, n) {
  e = D(e, 255), t = D(t, 255), n = D(n, 255);
  var a = Math.max(e, t, n), o = Math.min(e, t, n), l = 0, s = 0, r = (a + o) / 2;
  if (a === o)
    s = 0, l = 0;
  else {
    var u = a - o;
    switch (s = r > 0.5 ? u / (2 - a - o) : u / (a + o), a) {
      case e:
        l = (t - n) / u + (t < n ? 6 : 0);
        break;
      case t:
        l = (n - e) / u + 2;
        break;
      case n:
        l = (e - t) / u + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s, l: r };
}
function je(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function io(e, t, n) {
  var a, o, l;
  if (e = D(e, 360), t = D(t, 100), n = D(n, 100), t === 0)
    o = n, l = n, a = n;
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - s;
    a = je(r, s, e + 1 / 3), o = je(r, s, e), l = je(r, s, e - 1 / 3);
  }
  return { r: a * 255, g: o * 255, b: l * 255 };
}
function $t(e, t, n) {
  e = D(e, 255), t = D(t, 255), n = D(n, 255);
  var a = Math.max(e, t, n), o = Math.min(e, t, n), l = 0, s = a, r = a - o, u = a === 0 ? 0 : r / a;
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
  return { h: l, s: u, v: s };
}
function co(e, t, n) {
  e = D(e, 360) * 6, t = D(t, 100), n = D(n, 100);
  var a = Math.floor(e), o = e - a, l = n * (1 - t), s = n * (1 - o * t), r = n * (1 - (1 - o) * t), u = a % 6, i = [n, s, l, l, r, n][u], d = [r, n, n, s, l, l][u], f = [l, l, r, n, n, s][u];
  return { r: i * 255, g: d * 255, b: f * 255 };
}
function kt(e, t, n, a) {
  var o = [
    le(Math.round(e).toString(16)),
    le(Math.round(t).toString(16)),
    le(Math.round(n).toString(16))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function fo(e, t, n, a, o) {
  var l = [
    le(Math.round(e).toString(16)),
    le(Math.round(t).toString(16)),
    le(Math.round(n).toString(16)),
    le(po(a))
  ];
  return o && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function po(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function St(e) {
  return L(e) / 255;
}
function L(e) {
  return parseInt(e, 16);
}
function ho(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var at = {
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
function mo(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, a = null, o = null, l = null, s = !1, r = !1;
  return typeof e == "string" && (e = bo(e)), typeof e == "object" && (J(e.r) && J(e.g) && J(e.b) ? (t = uo(e.r, e.g, e.b), s = !0, r = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : J(e.h) && J(e.s) && J(e.v) ? (a = Ce(e.s), o = Ce(e.v), t = co(e.h, a, o), s = !0, r = "hsv") : J(e.h) && J(e.s) && J(e.l) && (a = Ce(e.s), l = Ce(e.l), t = io(e.h, a, l), s = !0, r = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Wt(n), {
    ok: s,
    format: e.format || r,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var vo = "[-\\+]?\\d+%?", go = "[-\\+]?\\d*\\.\\d+%?", te = "(?:".concat(go, ")|(?:").concat(vo, ")"), Ye = "[\\s|\\(]+(".concat(te, ")[,|\\s]+(").concat(te, ")[,|\\s]+(").concat(te, ")\\s*\\)?"), Ue = "[\\s|\\(]+(".concat(te, ")[,|\\s]+(").concat(te, ")[,|\\s]+(").concat(te, ")[,|\\s]+(").concat(te, ")\\s*\\)?"), G = {
  CSS_UNIT: new RegExp(te),
  rgb: new RegExp("rgb" + Ye),
  rgba: new RegExp("rgba" + Ue),
  hsl: new RegExp("hsl" + Ye),
  hsla: new RegExp("hsla" + Ue),
  hsv: new RegExp("hsv" + Ye),
  hsva: new RegExp("hsva" + Ue),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function bo(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (at[e])
    e = at[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = G.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = G.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = G.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = G.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = G.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = G.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = G.hex8.exec(e), n ? {
    r: L(n[1]),
    g: L(n[2]),
    b: L(n[3]),
    a: St(n[4]),
    format: t ? "name" : "hex8"
  } : (n = G.hex6.exec(e), n ? {
    r: L(n[1]),
    g: L(n[2]),
    b: L(n[3]),
    format: t ? "name" : "hex"
  } : (n = G.hex4.exec(e), n ? {
    r: L(n[1] + n[1]),
    g: L(n[2] + n[2]),
    b: L(n[3] + n[3]),
    a: St(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = G.hex3.exec(e), n ? {
    r: L(n[1] + n[1]),
    g: L(n[2] + n[2]),
    b: L(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function J(e) {
  return Boolean(G.CSS_UNIT.exec(String(e)));
}
var yo = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var a;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = ho(t)), this.originalInput = t;
      var o = mo(t);
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
      return this.a = Wt(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = $t(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = $t(this.r, this.g, this.b), n = Math.round(t.h * 360), a = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(a, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(a, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = wt(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = wt(this.r, this.g, this.b), n = Math.round(t.h * 360), a = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(a, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(a, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), kt(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), fo(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(D(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(D(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + kt(this.r, this.g, this.b, !1), n = 0, a = Object.entries(at); n < a.length; n++) {
        var o = a[n], l = o[0], s = o[1];
        if (t === s)
          return l;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = Boolean(t);
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
      return n.l += t / 100, n.l = Se(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Se(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Se(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Se(n.s), new e(n);
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
function ee(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function _o(e) {
  const t = Ut(), n = ve("button");
  return b(() => {
    let a = {};
    const o = e.color;
    if (o) {
      const l = new yo(o), s = e.dark ? l.tint(20).toString() : ee(l, 20);
      if (e.plain)
        a = n.cssVarBlock({
          "bg-color": e.dark ? ee(l, 90) : l.tint(90).toString(),
          "text-color": o,
          "border-color": e.dark ? ee(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": o,
          "hover-border-color": o,
          "active-bg-color": s,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": s
        }), t.value && (a[n.cssVarBlockName("disabled-bg-color")] = e.dark ? ee(l, 90) : l.tint(90).toString(), a[n.cssVarBlockName("disabled-text-color")] = e.dark ? ee(l, 50) : l.tint(50).toString(), a[n.cssVarBlockName("disabled-border-color")] = e.dark ? ee(l, 80) : l.tint(80).toString());
      else {
        const r = e.dark ? ee(l, 30) : l.tint(30).toString(), u = l.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (a = n.cssVarBlock({
          "bg-color": o,
          "text-color": u,
          "border-color": o,
          "hover-bg-color": r,
          "hover-text-color": u,
          "hover-border-color": r,
          "active-bg-color": s,
          "active-border-color": s
        }), t.value) {
          const i = e.dark ? ee(l, 50) : l.tint(50).toString();
          a[n.cssVarBlockName("disabled-bg-color")] = i, a[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, a[n.cssVarBlockName("disabled-border-color")] = i;
        }
      }
    }
    return a;
  });
}
const wo = ["aria-disabled", "disabled", "autofocus", "type"], $o = B({
  name: "ElButton"
}), ko = /* @__PURE__ */ B({
  ...$o,
  props: nt,
  emits: lo,
  setup(e, { expose: t, emit: n }) {
    const a = e, o = _o(a), l = ve("button"), { _ref: s, _size: r, _type: u, _disabled: i, shouldAddSpace: d, handleClick: f } = no(a, n);
    return t({
      ref: s,
      size: r,
      type: u,
      disabled: i,
      shouldAddSpace: d
    }), (h, p) => (v(), w("button", {
      ref_key: "_ref",
      ref: s,
      class: x([
        _(l).b(),
        _(l).m(_(u)),
        _(l).m(_(r)),
        _(l).is("disabled", _(i)),
        _(l).is("loading", h.loading),
        _(l).is("plain", h.plain),
        _(l).is("round", h.round),
        _(l).is("circle", h.circle),
        _(l).is("text", h.text),
        _(l).is("link", h.link),
        _(l).is("has-bg", h.bg)
      ]),
      "aria-disabled": _(i) || h.loading,
      disabled: _(i) || h.loading,
      autofocus: h.autofocus,
      type: h.nativeType,
      style: Y(_(o)),
      onClick: p[0] || (p[0] = (...c) => _(f) && _(f)(...c))
    }, [
      h.loading ? (v(), w(A, { key: 0 }, [
        h.$slots.loading ? T(h.$slots, "loading", { key: 0 }) : (v(), H(_(et), {
          key: 1,
          class: x(_(l).is("loading"))
        }, {
          default: S(() => [
            (v(), H(Ge(h.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : h.icon || h.$slots.icon ? (v(), H(_(et), { key: 1 }, {
        default: S(() => [
          h.icon ? (v(), H(Ge(h.icon), { key: 0 })) : T(h.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : j("v-if", !0),
      h.$slots.default ? (v(), w("span", {
        key: 2,
        class: x({ [_(l).em("text", "expand")]: _(d) })
      }, [
        T(h.$slots, "default")
      ], 2)) : j("v-if", !0)
    ], 14, wo));
  }
});
var So = /* @__PURE__ */ ge(ko, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const Co = {
  size: nt.size,
  type: nt.type
}, Eo = B({
  name: "ElButtonGroup"
}), Vo = /* @__PURE__ */ B({
  ...Eo,
  props: Co,
  setup(e) {
    const t = e;
    ot(Rt, Mt({
      size: Re(t, "size"),
      type: Re(t, "type")
    }));
    const n = ve("button");
    return (a, o) => (v(), w("div", {
      class: x(`${_(n).b("group")}`)
    }, [
      T(a.$slots, "default")
    ], 2));
  }
});
var Gt = /* @__PURE__ */ ge(Vo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const To = Le(So, {
  ButtonGroup: Gt
});
Na(Gt);
function No(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const Mo = {}, Bo = me({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: oe(Object)
  },
  size: Yt,
  button: {
    type: oe(Object)
  },
  experimentalFeatures: {
    type: oe(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: oe(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), Ho = B({
  name: "ElConfigProvider",
  props: Bo,
  setup(e, { slots: t }) {
    q(() => e.message, (a) => {
      Object.assign(Mo, a ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Ba(e);
    return () => T(t, "default", { config: n == null ? void 0 : n.value });
  }
}), qt = Le(Ho);
var Qt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = {
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
  e.default = t;
})(Qt);
const Xt = /* @__PURE__ */ No(Qt);
const xo = B({
  name: "KPage",
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: !1 },
    small: { type: Boolean, default: !1 },
    pagerCount: { type: Number, default: 7 }
  },
  components: { ElConfigProvider: qt },
  emits: ["update:modelValue", "update:size", "current-change", "size-change", "change"],
  setup(e, { emit: t }) {
    const n = Xt, a = b(() => {
      const { total: u, size: i, showSize: d } = e;
      return d ? !0 : u > i;
    }), o = b({
      get() {
        return e.modelValue;
      },
      set(u) {
        t("update:modelValue", u);
      }
    }), l = b(() => {
      const u = ["total", "sizes", "prev", "pager", "next", "jumper"];
      return e.showSize || u.splice(1, 1), u.join(",");
    });
    return {
      locale: n,
      currentPage: o,
      layoutList: l,
      handleSizeChange: (u) => {
        o.value = 1, t("update:size", u), t("size-change", u), t("change", { page: e.size === u ? o.value : 1, size: u });
      },
      handleCurrentChange: (u) => {
        t("current-change", u), t("change", { page: u, size: e.size });
      },
      showPage: a
    };
  }
}), zo = {
  key: 0,
  class: "page-right mt20"
};
function Io(e, t, n, a, o, l) {
  const s = V("el-pagination"), r = V("el-config-provider");
  return e.showPage ? (v(), w("div", zo, [
    N(r, { locale: e.locale }, {
      default: S(() => [
        N(s, {
          onSizeChange: e.handleSizeChange,
          onCurrentChange: e.handleCurrentChange,
          currentPage: e.currentPage,
          "onUpdate:currentPage": t[0] || (t[0] = (u) => e.currentPage = u),
          "page-sizes": [10, 20, 50, 100],
          "page-size": e.size,
          layout: e.layoutList,
          total: e.total,
          small: e.small,
          "pager-count": e.pagerCount
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage", "page-size", "layout", "total", "small", "pager-count"])
      ]),
      _: 1
    }, 8, ["locale"])
  ])) : j("", !0);
}
const de = /* @__PURE__ */ P(xo, [["render", Io], ["__scopeId", "data-v-77c509db"]]);
de.install = function(e) {
  e.component(de.name, de);
};
const Po = B({
  name: "KTable",
  components: { pagination: de },
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
    const n = b({
      get: () => e.tableData,
      set: (s) => t("update:tableData", s)
    }), a = b({
      get: () => e.modelValue,
      set: (s) => t("update:modelValue", s)
    });
    return {
      currentPage: a,
      tableDataList: n,
      changePage: (s) => t("current-change", s),
      sortChange: ({ column: s, order: r }) => {
        const u = r === "ascending" ? 1 : 0;
        t("sort-change", {
          prop: s == null ? void 0 : s.rawColumnKey,
          order: r,
          sortType: u,
          currentPage: a.value,
          column: s,
          sortColumn: s == null ? void 0 : s.rawColumnKey
        });
      }
    };
  }
}), Do = { key: 2 };
function Oo(e, t, n, a, o, l) {
  const s = V("el-table-column"), r = V("el-table"), u = V("pagination");
  return v(), w(A, null, [
    N(r, O({
      data: e.tableDataList,
      style: { width: "100%" },
      class: "mt20",
      "header-cell-style": e.headerCellStyle
    }, e.$attrs, {
      "empty-text": e.emptyText,
      onSortChange: e.sortChange
    }), fe({
      default: S(() => [
        (v(!0), w(A, null, Q(e.tableColumn, (i) => (v(), H(s, {
          key: i.prop,
          label: i.label,
          name: i.name,
          width: i.width,
          "min-width": i.minWidth,
          fixed: i.fixed,
          sortable: i.sortable,
          type: i.type,
          "show-overflow-tooltip": e.showOverflowTooltip
        }, fe({
          default: S((d) => [
            e.$slots.default ? T(e.$slots, "default", {
              key: 0,
              item: d.row,
              row: d.row,
              index: d.$index
            }) : i.custom && d.$index >= 0 ? T(e.$slots, i.custom, {
              key: 1,
              item: d.row,
              row: d.row,
              index: d.$index
            }) : (v(), w("span", Do, K(d.row[i.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          i.header ? {
            name: "header",
            fn: S(() => [
              T(e.$slots, i.header)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["label", "name", "width", "min-width", "fixed", "sortable", "type", "show-overflow-tooltip"]))), 128))
      ]),
      _: 2
    }, [
      e.$slots.empty ? {
        name: "empty",
        fn: S(() => [
          T(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "empty-text", "onSortChange"]),
    N(u, {
      total: e.total,
      "show-size": e.showSize,
      modelValue: e.currentPage,
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.currentPage = i),
      onCurrentChange: e.changePage
    }, null, 8, ["total", "show-size", "modelValue", "onCurrentChange"])
  ], 64);
}
const Te = /* @__PURE__ */ P(Po, [["render", Oo]]);
Te.install = function(e) {
  e.component(Te.name, Te);
};
const Ao = B({
  name: "KVirtualList",
  components: { ElScrollbar: to },
  props: {
    height: { type: String, default: "500px" },
    rowStyle: { type: Object, default: () => ({}) },
    rowClassName: { type: [Function, String, Object], default: "" },
    data: { type: Array, default: () => [] }
  },
  emits: ["scroll", "row-click"],
  setup(e, { emit: t }) {
    const n = y(0), a = y(0), o = y(null), l = y(10), s = () => {
      var m;
      return ((m = document.querySelector(".list-item")) == null ? void 0 : m.offsetHeight) ?? 10;
    }, r = () => {
      const { clientHeight: m = 100 } = o.value.wrapRef || {};
      return Math.ceil(m / s()) + n.value;
    }, u = y(100);
    he(() => {
      l.value = Number(r()) || 10, u.value = e.data.length * s();
    });
    const i = (m) => Math.floor(m / s()), d = (m) => Math.ceil(m * s()), f = (m) => m >= n.value && m <= l.value, h = b(() => e.data.filter((m, $) => f($)));
    return q(() => e.data, (m) => {
      m.length || (n.value = 0, a.value = 0), e.data.forEach(($, k) => {
        $.rowIndex = k;
      }), nextTick(() => {
        u.value = e.data.length * s();
      });
    }), {
      startIndex: n,
      endIndex: l,
      startOffset: a,
      viewport: o,
      onScroll: (m) => {
        const { scrollTop: $, clientHeight: k } = o.value.wrapRef;
        n.value = i($), a.value = d(n.value), l.value = r();
        const z = Math.abs(u.value - k - $);
        t("scroll", { distance: z, ...m });
      },
      showViewRanges: f,
      containHeight: u,
      listRanges: h,
      rowClick: (m, $) => {
        t("row-click", m, $);
      },
      rowClassHandle: (m, $) => typeof e.rowClassName == "function" ? e.rowClassName({ row: m, rowIndex: $ }) : e.rowClassName
    };
  }
}), Ro = {
  class: "virtual-list",
  "data-testid": "virtual-list"
}, Fo = ["onClick"];
function Lo(e, t, n, a, o, l) {
  const s = V("el-scrollbar");
  return v(), H(s, O({
    height: e.height,
    ref: "viewport"
  }, e.$attrs, { onScroll: e.onScroll }), {
    default: S(() => [
      C("div", Ro, [
        C("div", {
          class: "list-contain",
          style: Y({ height: `${e.containHeight}px` })
        }, null, 4),
        C("div", {
          class: "list-content",
          style: Y({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          (v(!0), w(A, null, Q(e.listRanges, (r, u) => (v(), w("div", {
            key: u,
            class: x(["list-item", e.rowClassHandle(r, r.rowIndex)]),
            style: Y(e.rowStyle),
            onClick: (i) => e.rowClick(r, r.rowIndex)
          }, [
            T(e.$slots, "default", {
              row: r,
              index: r.rowIndex
            }, () => [
              X(K(r.name), 1)
            ], !0)
          ], 14, Fo))), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["height", "onScroll"]);
}
const _e = /* @__PURE__ */ P(Ao, [["render", Lo], ["__scopeId", "data-v-9096c55d"]]);
_e.install = function(e) {
  e.component(_e.name, _e);
};
const Ko = {
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
  height: { type: String, default: "100%" }
};
const jo = B({
  name: "KTableV2",
  components: { virtualList: _e },
  props: Ko,
  emits: ["sort-change"],
  setup(e, { emit: t }) {
    const n = b(() => e.tableColumn.map((h, p) => ({ ...h, keyId: p }))), a = y(null), o = (h) => {
      var k, z, U, W;
      let p = {};
      const {
        align: c,
        width: g,
        fixed: m,
        minWidth: $
      } = h;
      if (c && (p["text-center"] = `${c}`), $ && (p["min-width"] = `${$}`), g && (p = {
        ...p,
        width: `${g}`,
        flex: "inherit",
        "flex-shrink": 0
      }), m) {
        const M = e.tableColumn.findIndex((I) => I.prop === h.prop), E = e.tableColumn.length;
        if (p = {
          ...p,
          position: "sticky",
          background: "#ffffff",
          "z-index": 5
        }, m === "left") {
          const I = (k = e.tableColumn.filter((R) => R.fixed === "left")) == null ? void 0 : k.length;
          let F = 0;
          M > 0 && M < E - 1 && I > 1 && (F = (z = a.value) == null ? void 0 : z.at(M - 1).clientWidth), p.left = `${F}px`;
          let Z = 0;
          e.tableColumn.forEach((R, ue) => {
            R.fixed === "left" && (Z = ue);
          }), Z === M && (p["box-shadow"] = "3px 0px 4px #b0a8a836");
        } else {
          const I = (U = e.tableColumn.filter((R) => R.fixed && R.fixed !== "left")) == null ? void 0 : U.length;
          let F = 0;
          M < E - 1 && I > 1 && (F = (W = a.value) == null ? void 0 : W.at(M + 1).clientWidth), e.tableColumn.findIndex((R) => R.fixed && R.fixed !== "left") === M && (p["box-shadow"] = "-3px 0 4px #b0a8a836"), p.right = `${F}px`;
        }
      }
      return p;
    }, l = y(null), s = ({ scrollLeft: h }) => {
      l.value.scrollLeft = `${h}`;
    }, r = y(null), u = y({}), i = (h, p) => {
      u.value = p, r.value = r.value === h ? null : h, t("sort-change", { column: p, sortType: r.value });
    }, d = y(null), f = (h) => {
      var p;
      return (p = d.value) == null ? void 0 : p.viewport.setScrollTop(h);
    };
    return {
      ...cn(e),
      columnList: n,
      headerClass: o,
      tableHeader: l,
      scrollHandle: s,
      headerColmn: a,
      sortType: r,
      clickSortCaret: i,
      selectedRow: u,
      virtualRef: d,
      setScrollTop: f
    };
  }
}), Yo = { class: "table-v2 el-table flex-column" }, Uo = {
  class: "table-header overflow",
  ref: "tableHeader"
}, Wo = { class: "flex table-border-bottom header-content" }, Go = {
  key: 0,
  class: "table-header-sort flex-column flex-center"
}, qo = { class: "sort-wrapper" }, Qo = ["onClick"], Xo = ["onClick"], Zo = { class: "flex table-body" };
function Jo(e, t, n, a, o, l) {
  const s = V("virtualList");
  return v(), w("div", Yo, [
    C("div", Uo, [
      C("div", Wo, [
        (v(!0), w(A, null, Q(e.tableColumn, (r, u) => (v(), w("div", {
          key: u,
          class: "header-column cell flex-align-center",
          ref_for: !0,
          ref: "headerColmn",
          style: Y([e.headerClass(r), e.headerCellStyle])
        }, [
          T(e.$slots, (r == null ? void 0 : r.header) ?? "default", {}, () => [
            X(K(r.label), 1)
          ], !0),
          r.sortable ? (v(), w("div", Go, [
            C("span", qo, [
              C("i", {
                class: x(["sort-caret ascending", { "bottom-caret": e.sortType === "ascending" && e.selectedRow.prop == r.prop }]),
                onClick: (i) => e.clickSortCaret("ascending", r)
              }, null, 10, Qo),
              C("i", {
                class: x(["sort-caret descending", { "top-caret": e.sortType === "descending" && e.selectedRow.prop == r.prop }]),
                onClick: (i) => e.clickSortCaret("descending", r)
              }, null, 10, Xo)
            ])
          ])) : j("", !0)
        ], 4))), 128))
      ])
    ], 512),
    N(s, O({
      data: e.tableData,
      always: "",
      ref: "virtualRef",
      "row-class-name": e.rowClassName
    }, e.$attrs, {
      height: e.height,
      onScroll: e.scrollHandle
    }), {
      default: S(({ row: r, index: u }) => [
        T(e.$slots, "content", {}, () => [
          C("div", Zo, [
            (v(!0), w(A, null, Q(e.columnList, (i) => (v(), w("div", {
              key: i.keyId,
              class: "cell table-row table-border-bottom flex-align-center",
              ref_for: !0,
              ref: "bodyCell",
              style: Y(e.headerClass(i))
            }, [
              C("div", {
                class: x({ "text-overflow": i.showOverflowTooltip ?? !0 })
              }, [
                T(e.$slots, (i == null ? void 0 : i.custom) ?? "default", {
                  row: r,
                  index: u
                }, () => [
                  X(K(r[i.prop]), 1)
                ], !0)
              ], 2)
            ], 4))), 128))
          ])
        ], !0)
      ]),
      _: 3
    }, 16, ["data", "row-class-name", "height", "onScroll"])
  ]);
}
const Ne = /* @__PURE__ */ P(jo, [["render", Jo], ["__scopeId", "data-v-f3e2be24"]]);
Ne.install = function(e) {
  e.component(Ne.name, Ne);
};
const el = {
  modelValue: { type: Array, default: () => [] },
  total: { type: Number, default: 9 },
  size: { type: Number, default: 10 },
  page: { type: Number, default: 1 },
  showSize: { type: Boolean, default: !1 },
  keyId: { type: String, default: "id" },
  checkKey: { type: String, default: "isSelect" },
  tableData: { type: Array, default: () => [] },
  selectList: { type: Array, default: () => [] },
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
      color: "#909366"
    })
  }
}, tl = B({
  name: "KBatchTable",
  components: { pagination: de },
  props: el,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { emit: t }) {
    const n = y(null), a = () => n.value.clearSelection(), o = (c) => {
      c ? e.tableData.forEach((g) => {
        c.forEach((m) => {
          p(g) === p(m) && re(() => n.value && n.value.toggleRowSelection(g));
        });
      }) : (l.value = [], n.value.clearSelection());
    }, l = b({
      get: () => e.modelValue,
      set: (c) => t("update:modelValue", c)
    });
    q(() => e.modelValue, (c) => {
      !c.length && n.value && n.value.clearSelection();
    });
    const s = () => {
      setTimeout(() => {
        e.selectList.length && (e.tableData.forEach((c) => {
          c[e.checkKey] = c[e.checkKey] ?? 1;
        }), e.selectList.forEach((c) => {
          e.tableData.forEach((g) => {
            p(c) === p(g) && (g[e.checkKey] = 0);
          });
        }), o(l.value));
      }, 200);
    };
    q(() => e.tableData, (c) => {
      re(() => {
        c.length && s(), c.length && o(l.value);
      });
    }, { immediate: !0 });
    const r = (c, g) => {
      c.some(($) => p($) === p(g)) ? l.value = [...l.value, g] : l.value = l.value.filter(($) => p($) !== p(g));
    }, u = (c) => {
      if (l.value.length)
        if (c.length) {
          const g = c.filter((m) => l.value.every(($) => p($) !== p(m)));
          l.value = [...l.value, ...g];
        } else
          l.value = l.value.filter((g) => e.tableData.every((m) => p(g) !== p(m)));
      else
        l.value = c;
    }, i = (c) => {
      if (!d(c))
        return;
      const g = l.value.some((m) => p(m) === p(c));
      o([c]), g ? l.value = l.value.filter((m) => p(m) !== p(c)) : l.value = [...l.value, c], t("row-click", c);
    }, d = (c) => c[e.checkKey] ?? !c[e.checkKey], f = b({
      get: () => e.page,
      set: (c) => t("update:page", c)
    }), h = (c) => {
      t("current-change", c);
    }, p = (c) => c[e.keyId];
    return {
      multipleTable: n,
      handleSelect: r,
      selectAll: u,
      handleRowClick: i,
      checkSelection: d,
      toggleSelection: o,
      currentPage: f,
      changePage: h,
      clear: a
    };
  }
}), nl = { key: 2 }, al = { class: "mt20 flex-between" }, ol = { class: "flex1" };
function ll(e, t, n, a, o, l) {
  const s = V("el-table-column"), r = V("el-table"), u = V("pagination");
  return v(), w(A, null, [
    N(r, O({ ref: "multipleTable" }, e.$attrs, {
      "empty-text": "暂无数据",
      data: e.tableData,
      "header-cell-style": e.headerCellStyle,
      onSelect: e.handleSelect,
      onSelectAll: e.selectAll,
      onRowClick: e.handleRowClick
    }), fe({
      default: S(() => [
        N(s, {
          type: "selection",
          width: "55",
          selectable: e.checkSelection
        }, null, 8, ["selectable"]),
        (v(!0), w(A, null, Q(e.tableColumn, (i) => (v(), H(s, {
          label: i.label,
          key: i.prop,
          width: i.width,
          fixed: i.fixed,
          "min-width": i.minWidth,
          "show-overflow-tooltip": ""
        }, fe({
          default: S((d) => [
            e.$slots.default ? T(e.$slots, "default", {
              key: 0,
              item: d.row,
              row: d.row,
              column: i,
              index: d.$index
            }) : j("", !0),
            i.custom && d.$index >= 0 ? T(e.$slots, i.custom, {
              key: 1,
              item: d.row,
              column: i,
              row: d.row,
              index: d.$index
            }) : (v(), w("span", nl, K(d.row[i.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          i.header ? {
            name: "header",
            fn: S(() => [
              T(e.$slots, "header", { column: i }),
              T(e.$slots, i.header, { column: i })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["label", "width", "fixed", "min-width"]))), 128))
      ]),
      _: 2
    }, [
      e.$slots.empty ? {
        name: "empty",
        fn: S(() => [
          T(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "onSelect", "onSelectAll", "onRowClick"]),
    C("div", al, [
      C("div", ol, [
        e.$slots.footer ? T(e.$slots, "footer", { key: 0 }) : j("", !0)
      ]),
      N(u, {
        total: e.total,
        "show-size": e.showSize,
        class: "mt0 ml20",
        modelValue: e.currentPage,
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.currentPage = i),
        onCurrentChange: e.changePage
      }, null, 8, ["total", "show-size", "modelValue", "onCurrentChange"])
    ])
  ], 64);
}
const we = /* @__PURE__ */ P(tl, [["render", ll]]);
we.install = function(e) {
  e.component(we.name, we);
};
const rl = B({
  name: "KDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { type: String, default: "提示" },
    showFooter: { type: Boolean, default: !0 },
    customClass: { type: String, default: "" },
    class: { type: String, default: "" }
  },
  emits: ["update:modelValue", "confirm", "open", "close"],
  setup(e, { emit: t }) {
    const n = b({
      get: () => e.modelValue,
      set: (r) => t("update:modelValue", r)
    }), a = b(() => e.class ? e.class : e.customClass ? e.customClass : e.showFooter ? "custom-dialog" : "custom-dialog no-footer");
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
}), sl = /* @__PURE__ */ C("span", null, "这是一段信息", -1), ul = { class: "dialog-footer" };
function il(e, t, n, a, o, l) {
  const s = V("el-button"), r = V("el-dialog");
  return v(), H(r, O({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": t[1] || (t[1] = (u) => e.dialogVisible = u),
    class: e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), fe({
    default: S(() => [
      T(e.$slots, "default", {}, () => [
        sl
      ])
    ]),
    _: 2
  }, [
    e.showFooter ? {
      name: "footer",
      fn: S(() => [
        T(e.$slots, "footer", {}, () => [
          C("span", ul, [
            N(s, {
              size: "large",
              onClick: t[0] || (t[0] = (u) => e.dialogVisible = !1)
            }, {
              default: S(() => [
                X("取 消")
              ]),
              _: 1
            }),
            N(s, {
              size: "large",
              type: "primary",
              onClick: e.confirmHandler
            }, {
              default: S(() => [
                X("确 定")
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ])
      ]),
      key: "0"
    } : void 0
  ]), 1040, ["title", "modelValue", "class", "onClose", "onOpen"]);
}
const Me = /* @__PURE__ */ P(rl, [["render", il]]);
Me.install = function(e) {
  e.component(Me.name, Me);
};
const cl = B({
  name: "KBreadcrumb",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const n = pe().appContext.config.globalProperties.$router;
    return { clickHandle: (o, l) => {
      if (o.url) {
        window.location.href = o.url;
        return;
      }
      o.path ? n == null || n.push(o.path) : n == null || n.go(l - e.list.length + 1);
    } };
  }
}), dl = { class: "crumb-header flex-between" }, fl = { class: "crumb-contain" }, pl = ["onClick"];
function hl(e, t, n, a, o, l) {
  const s = V("el-space");
  return v(), w("div", dl, [
    C("div", fl, [
      N(s, { spacer: "/" }, {
        default: S(() => [
          (v(!0), w(A, null, Q(e.list, (r, u) => (v(), w("span", {
            key: u,
            class: x({ "crumb-item": u !== e.list.length - 1 }),
            onClick: (i) => e.clickHandle(r, u)
          }, K(r.title), 11, pl))), 128))
        ]),
        _: 1
      })
    ]),
    T(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Be = /* @__PURE__ */ P(cl, [["render", hl], ["__scopeId", "data-v-4520378f"]]);
Be.install = function(e) {
  e.component(Be.name, Be);
};
const ml = B({
  name: "KTabs",
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
    const n = pe(), a = n.appContext.config.globalProperties.$route, o = n.appContext.config.globalProperties.$router, l = b(() => (a == null ? void 0 : a.params.type) || (a == null ? void 0 : a.name)), s = y(l.value);
    ke(() => {
      s.value = e.modelValue || l.value, t("update:modelValue", s.value);
    });
    const r = b(() => a.query);
    return { activeName: s, handleClick: (i) => {
      if (e.isRouter) {
        const d = { path: `${i.paneName}`, query: r.value };
        e.replace ? o.replace(d) : o.push(d);
      }
      t("tab-click", i.paneName), t("update:modelValue", i.paneName);
    } };
  }
}), vl = { class: "tabs-right ml10" };
function gl(e, t, n, a, o, l) {
  const s = V("el-tab-pane"), r = V("el-tabs");
  return v(), w("div", {
    class: x(["k-tabs", { "style-card": !e.type, "style-padding": e.isPadding && !e.type }])
  }, [
    N(r, O({
      class: "flex-tabs",
      type: e.type
    }, e.$attrs, {
      modelValue: e.activeName,
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.activeName = u),
      onTabClick: e.handleClick
    }), {
      default: S(() => [
        (v(!0), w(A, null, Q(e.tabsList, (u) => (v(), H(s, {
          label: u.label,
          name: u.name,
          key: u.name
        }, null, 8, ["label", "name"]))), 128))
      ]),
      _: 1
    }, 16, ["type", "modelValue", "onTabClick"]),
    C("div", vl, [
      T(e.$slots, "default")
    ])
  ], 2);
}
const He = /* @__PURE__ */ P(ml, [["render", gl]]);
He.install = function(e) {
  e.component(He.name, He);
};
const bl = B({
  name: "KPicker",
  components: { batchTable: we, Delete: zn },
  emits: ["update:modelValue", "update:page"],
  props: {
    modelValue: { type: Array, default: () => [] },
    selectList: { type: Array, default: () => [] },
    page: { type: Number, default: 1 },
    tableData: { type: Array, default: () => [] },
    tableColumn: { type: Array, default: () => [] },
    keyId: { type: String, default: "id" },
    keyName: { type: String, default: "name" },
    showCount: { type: Boolean, default: !1 }
  },
  setup(e, { emit: t }) {
    const n = b({
      get: () => e.modelValue,
      set: (d) => t("update:modelValue", d)
    });
    ke(() => {
      e.showCount && n.value.forEach((d) => {
        d.num = d.num ?? 1;
      });
    });
    const a = y(null), o = () => a.value.toggleSelection(), l = (d) => a.value.handleRowClick(d), s = y(1);
    return {
      multipleSelection: n,
      batchTableRef: a,
      currentPage: s,
      emptyHandler: o,
      resetData: () => {
        s.value = 1, o();
      },
      deleteHandler: l,
      getName: (d) => d[e.keyName],
      getId: (d) => d[e.keyId]
    };
  }
}), yl = { class: "k-picker" }, _l = { class: "col-left" }, wl = { class: "col-right" }, $l = { class: "selete-header flex-between" }, kl = { class: "selete-content" }, Sl = { class: "flex flex1 mr20 overflow" }, Cl = { class: "text-overflow" };
function El(e, t, n, a, o, l) {
  const s = V("batchTable"), r = V("el-col"), u = V("delete"), i = V("el-icon"), d = V("el-button"), f = V("el-tooltip"), h = V("el-input-number"), p = V("el-row");
  return v(), w("div", yl, [
    T(e.$slots, "top", {}, void 0, !0),
    N(p, { gutter: 10 }, {
      default: S(() => [
        N(r, { span: 15 }, {
          default: S(() => [
            C("div", _l, [
              N(s, {
                ref: "batchTableRef",
                height: "440px",
                "table-data": e.tableData,
                "table-column": e.tableColumn,
                "select-list": e.selectList,
                "key-id": e.keyId,
                modelValue: e.multipleSelection,
                "onUpdate:modelValue": t[0] || (t[0] = (c) => e.multipleSelection = c),
                page: e.currentPage,
                "onUpdate:page": t[1] || (t[1] = (c) => e.currentPage = c)
              }, {
                header: S(({ column: c }) => [
                  T(e.$slots, c.header, { column: c }, void 0, !0)
                ]),
                default: S(({ row: c, column: g, index: m }) => [
                  g.custom && m >= 0 ? T(e.$slots, g.custom, {
                    key: 0,
                    row: c,
                    index: m
                  }, void 0, !0) : j("", !0)
                ]),
                _: 3
              }, 8, ["table-data", "table-column", "select-list", "key-id", "modelValue", "page"])
            ])
          ]),
          _: 3
        }),
        N(r, { span: 9 }, {
          default: S(() => [
            T(e.$slots, "right", {}, () => [
              C("div", wl, [
                C("div", $l, [
                  T(e.$slots, "right-header", {}, () => [
                    C("span", null, [
                      X("已选择"),
                      C("span", null, "(" + K(e.multipleSelection.length) + ")", 1)
                    ]),
                    N(d, {
                      text: "",
                      disabled: !e.multipleSelection.length,
                      onClick: e.emptyHandler
                    }, {
                      default: S(() => [
                        N(i, null, {
                          default: S(() => [
                            N(u)
                          ]),
                          _: 1
                        }),
                        X(" 清空 ")
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"])
                  ], !0)
                ]),
                C("div", kl, [
                  (v(!0), w(A, null, Q(e.multipleSelection, (c) => (v(), w("div", {
                    class: x(["flex-between pl10 pr10", { mt10: e.showCount }]),
                    key: e.getId(c)
                  }, [
                    C("div", Sl, [
                      N(f, {
                        effect: "dark",
                        content: e.getName(c),
                        placement: "top"
                      }, {
                        default: S(() => [
                          C("span", Cl, K(e.getName(c)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ]),
                    e.showCount ? (v(), H(h, {
                      key: 0,
                      modelValue: c.num,
                      "onUpdate:modelValue": (g) => c.num = g,
                      min: 1,
                      class: "width-100 flex-shrink mr10"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                    N(d, {
                      text: "",
                      onClick: (g) => e.deleteHandler(c)
                    }, {
                      default: S(() => [
                        X(" 删除 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ], 2))), 128))
                ])
              ])
            ], !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }),
    T(e.$slots, "footer", {}, void 0, !0)
  ]);
}
const xe = /* @__PURE__ */ P(bl, [["render", El], ["__scopeId", "data-v-3723b329"]]);
xe.install = function(e) {
  e.component(xe.name, xe);
};
const Vl = B({
  name: "KTooltip",
  props: {
    placement: { type: String, default: "top" },
    showIcon: { type: Boolean, default: !1 },
    overflow: { type: Boolean, default: !1 }
  },
  components: { Warning: oa }
});
function Tl(e, t, n, a, o, l) {
  const s = V("warning"), r = V("el-icon"), u = V("el-tooltip");
  return v(), w("div", {
    class: x(["flex flex1", { "text-overflow": e.overflow }])
  }, [
    N(u, O(e.$attrs, { placement: e.placement }), {
      content: S(() => [
        T(e.$slots, "content", {}, void 0, !0)
      ]),
      default: S(() => [
        C("div", {
          class: x(["flex-center", { "text-overflow": e.overflow }])
        }, [
          T(e.$slots, "default", {}, void 0, !0),
          e.showIcon ? (v(), H(r, {
            key: 0,
            class: "ml5"
          }, {
            default: S(() => [
              T(e.$slots, "icon", {}, () => [
                N(s)
              ], !0)
            ]),
            _: 3
          })) : j("", !0)
        ], 2)
      ]),
      _: 3
    }, 16, ["placement"])
  ], 2);
}
const ze = /* @__PURE__ */ P(Vl, [["render", Tl], ["__scopeId", "data-v-d468c200"]]);
ze.install = function(e) {
  e.component(ze.name, ze);
};
const Nl = {
  __name: "main",
  setup(e) {
    return (t, n) => (v(), H(_(qt), { locale: _(Xt) }, {
      default: S(() => [
        T(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale"]));
  }
}, Zt = {
  __name: "datePicker",
  props: {
    type: { type: String, default: "daterange" },
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = b(() => n.type === "datetimerange" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"), o = (d) => {
      const f = new Date(), h = new Date();
      return f.setTime(f.getTime() - 3600 * 1e3 * 24 * d), n.type === "date" ? f : [f, h];
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
    ], s = [new Date(2e3, 1, 1, 0, 0, 0), new Date(2e3, 2, 1, 23, 59, 59)], r = b({
      get: () => n.modelValue,
      set: (d) => t("update:modelValue", d)
    }), u = (d) => d.getTime() > Date.now(), i = (d) => t("change", d);
    return (d, f) => {
      const h = V("el-date-picker");
      return v(), H(h, {
        modelValue: _(r),
        "onUpdate:modelValue": f[0] || (f[0] = (p) => qe(r) ? r.value = p : null),
        type: e.type,
        "unlink-panels": "",
        "range-separator": "至",
        "start-placeholder": "开始日期",
        "end-placeholder": "结束日期",
        shortcuts: l,
        format: _(a),
        "value-format": "YYYY-MM-DD HH:mm:ss",
        "disabled-date": u,
        "default-time": s,
        editable: !1,
        clearable: !1,
        onChange: i
      }, null, 8, ["modelValue", "type", "format"]);
    };
  }
}, Ml = { class: "date-picker flex" }, Bl = {
  __name: "selectType",
  props: {
    daterange: { type: Boolean, default: !1 },
    // 是否选择模式下 是否日期范围
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = y(0), o = y([
      { value: 0, label: "日" },
      { value: 1, label: "周" },
      { value: 2, label: "月" },
      { value: 3, label: "年" }
    ]), l = b({
      get: () => n.modelValue,
      set: (p) => t("update:modelValue", p)
    }), s = (p) => p.getTime() > Date.now(), r = b(() => ({
      0: "YYYY-MM-DD",
      1: "YYYY 第 ww 周",
      2: "YYYY-MM",
      3: "YYYY"
    })[a.value]), u = b(() => ({
      0: n.daterange ? "daterange" : "date",
      1: "week",
      2: "month",
      3: "year"
    })[a.value]), i = b(() => {
      const { label: p } = o.value.filter((c) => c.value === a.value)[0];
      return `选择${p}`;
    }), d = y("");
    ke(() => {
      if (Array.isArray(l.value)) {
        const [p, c] = l.value;
        d.value = [p, c];
      }
    });
    const f = (p) => {
      if (p) {
        if (Array.isArray(l.value)) {
          const [c] = l.value;
          l.value = c;
        }
      } else
        n.daterange && (l.value = d.value);
      h();
    }, h = () => {
      t("change", { type: a.value, time: l.value });
    };
    return (p, c) => {
      const g = V("el-option"), m = V("el-select"), $ = V("el-date-picker");
      return v(), w("div", Ml, [
        N(m, {
          modelValue: a.value,
          "onUpdate:modelValue": c[0] || (c[0] = (k) => a.value = k),
          class: "width-100 mr10",
          onChange: f
        }, {
          default: S(() => [
            (v(!0), w(A, null, Q(o.value, (k) => (v(), H(g, {
              key: k.value,
              label: k.label,
              value: k.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        C("div", null, [
          e.daterange && !a.value ? (v(), H(Zt, O({
            key: 0,
            modelValue: _(l),
            "onUpdate:modelValue": c[1] || (c[1] = (k) => qe(l) ? l.value = k : null)
          }, p.$props, { onChange: h }), null, 16, ["modelValue"])) : (v(), H($, {
            key: 1,
            modelValue: _(l),
            "onUpdate:modelValue": c[2] || (c[2] = (k) => qe(l) ? l.value = k : null),
            type: _(u),
            format: _(r),
            "value-format": "YYYY-MM-DD HH:mm:ss",
            placeholder: _(i),
            "disabled-date": s,
            clearable: !1,
            editable: !1,
            "start-placeholder": "开始日期",
            "end-placeholder": "结束日期",
            onChange: h
          }, null, 8, ["modelValue", "type", "format", "placeholder"]))
        ])
      ]);
    };
  }
}, Hl = B({
  name: "KDatePicker",
  props: {
    selectType: { type: Boolean, default: !1 }
    // 是否选择模式（年月日）
    // daterange: { type: Boolean, default: false }, // 是否选择模式下 是否日期范围
  },
  components: { configProvider: Nl, selectType: Bl, datePicker: Zt },
  setup() {
  }
});
function xl(e, t, n, a, o, l) {
  const s = V("selectType"), r = V("datePicker"), u = V("config-provider");
  return v(), H(u, null, {
    default: S(() => [
      e.selectType ? (v(), H(s, dt(O({ key: 0 }, e.$attrs)), null, 16)) : (v(), H(r, dt(O({ key: 1 }, e.$attrs)), null, 16))
    ]),
    _: 1
  });
}
const Ie = /* @__PURE__ */ P(Hl, [["render", xl]]);
Ie.install = function(e) {
  e.component(Ie.name, Ie);
};
const it = B({
  name: "KNumberKeyboard",
  components: { ElButton: To },
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
    ], a = b(() => (e.decimalPoint && n.push({ name: "." }), n)), o = b({
      get: () => e.modelValue,
      set: (h) => t("update:modelValue", h)
    }), l = () => {
      re(() => t("change", o.value));
    }, s = (h) => {
      if (e.maxlength && o.value.length >= Number(e.maxlength))
        return;
      const p = o.value.indexOf("."), c = o.value.split(".");
      c.length === 2 && (h === "." || c[1].length >= e.precision) || (o.value = `${p === 0 ? 0 : ""}${o.value}${h}`, !e.startZero && o.value.slice(0, 1) === "0" && (o.value = o.value.slice(1) + h), l());
    }, r = (h) => {
      h === "delete" ? o.value = o.value.slice(0, o.value.length - 1) : h === "clear" && (o.value = "", t("clear")), h === "confirm" ? t("confirm") : l();
    }, u = ({ key: h, name: p }) => {
      h ? r(h) : s(p);
    }, i = b(() => `${Number(4 * e.width + 20)}px`), d = b(() => `${e.width}px`), f = b(() => e.decimalPoint ? 3 : 4);
    return {
      keyboardList: a,
      clickHandleBtn: u,
      clickBtn: s,
      totalwidth: i,
      gridwidth: d,
      numberVal: o,
      zerogridend: f
    };
  }
}), Ct = () => {
  Ht((e) => ({
    "5f76155e": e.totalwidth,
    af867fde: e.gridwidth,
    c0d11484: e.zerogridend
  }));
}, Et = it.setup;
it.setup = Et ? (e, t) => (Ct(), Et(e, t)) : Ct;
const zl = it, Il = { class: "number-keyboard mt10" }, Pl = { class: "number-ul" };
function Dl(e, t, n, a, o, l) {
  const s = V("el-button");
  return v(), w("div", Il, [
    C("ul", Pl, [
      (v(!0), w(A, null, Q(e.keyboardList, (r, u) => (v(), w("li", {
        key: u,
        class: x(r.class)
      }, [
        N(s, {
          type: r.type,
          color: e.color,
          onClick: (i) => e.clickHandleBtn(r)
        }, {
          default: S(() => [
            X(K(r.name), 1)
          ]),
          _: 2
        }, 1032, ["type", "color", "onClick"])
      ], 2))), 128))
    ])
  ]);
}
const Pe = /* @__PURE__ */ P(zl, [["render", Dl], ["__scopeId", "data-v-2e1be318"]]);
Pe.install = function(e) {
  e.component(Pe.name, Pe);
};
const Ol = B({
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
    const n = b({
      get: () => e.modelValue,
      set: (r) => t("update:modelValue", r)
    }), a = (r) => e.decimals ? Number(r).toFixed(e.decimals) : r, o = y(null), l = (r = !0) => {
      const u = o.value;
      if (!u)
        return;
      const i = +u.innerText, d = +n.value / 200, f = r && i < Number(n.value) || !r && i > Number(n.value);
      r && i > e.end || i < e.start || (f ? s(u, r ? i + d : i - d, r) : u.interText = a(n.value));
    }, s = (r, u, i = !0) => {
      const d = u < e.start ? e.start : `${e.decimals ? u : Math.floor(u)}`, f = u > e.end ? e.end : `${e.decimals ? u : Math.ceil(u)}`;
      r.innerText = a(i ? f : d);
      const h = setTimeout(() => {
        clearTimeout(h), i ? l() : l(!1);
      }, 5);
    };
    return he(() => {
      o.value && e.autoinit && l();
    }), Bt(() => {
      if (e.autoinit) {
        const r = +o.value.innerText;
        l(r < Number(n.value));
      }
    }), { textValue: n, spanText: o, setDeimals: a };
  }
}), Al = { class: "auto-counter" }, Rl = { class: "mr5" }, Fl = { class: "ml5" };
function Ll(e, t, n, a, o, l) {
  return v(), w("div", Al, [
    C("span", Rl, K(e.prefix), 1),
    C("span", {
      class: "span-text",
      ref: "spanText"
    }, K(e.autoinit ? e.setDeimals(e.start) : e.setDeimals(e.textValue)), 513),
    C("span", Fl, K(e.suffix), 1)
  ]);
}
const De = /* @__PURE__ */ P(Ol, [["render", Ll]]);
De.install = function(e) {
  e.component(De.name, De);
};
const Kl = B({
  name: "KCollapseButton",
  components: { ElIcon: et, CaretLeft: $n, CaretRight: Tn },
  props: {
    style: { type: Object, default: () => ({}) },
    position: { type: String, default: "right" }
  },
  emits: ["click"],
  setup(e, { emit: t, slots: n }) {
    const a = y(!1), o = y(null);
    he(() => {
      const { parentNode: r } = o.value;
      r.style.position = "relative", r.style.overflow = "initial";
    });
    const l = b(() => {
      const { clientWidth: r, clientHeight: u } = o.value || {}, {
        top: i,
        right: d,
        width: f,
        height: h,
        left: p,
        bottom: c
      } = e.style, g = {
        right: {
          top: i ?? "50%",
          right: d ?? `-${r}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: i ? "0px" : `-${Math.ceil(u / 2)}px`
        },
        left: {
          top: i ?? "50%",
          left: p ?? `-${r}px`,
          borderRadius: "5px 0 0 5px",
          marginTop: i ? "0px" : `-${Math.ceil(u / 2)}px`
        },
        top: {
          left: p ?? "50%",
          marginLeft: p ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(r / 2)}px` : "0px",
          top: i ?? (n == null ? void 0 : n.default) ? `-${u}px` : `-${Math.ceil(u / 2 + r / 2)}px`,
          borderRadius: n != null && n.default ? "5px 5px 0 0" : "0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(-90deg)"
        },
        bottom: {
          left: p ?? "50%",
          bottom: c ?? (n == null ? void 0 : n.default) ? `-${u}px` : `-${Math.ceil(u / 2 + r / 2)}px`,
          marginLeft: p ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(r / 2)}px` : "0px",
          borderRadius: n != null && n.default ? "0 0 5px 5px" : " 0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(90deg)"
        }
      };
      return {
        width: f ?? (n == null ? void 0 : n.default) ? "" : "10px",
        height: h ?? (n == null ? void 0 : n.default) ? "" : "68px",
        ...g[e.position]
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
function jl(e, t, n, a, o, l) {
  const s = V("CaretRight"), r = V("CaretLeft"), u = V("el-icon");
  return v(), w("div", {
    class: "collapse-button flex-center pointer",
    style: Y(e.collapseStyle),
    ref: "collapse",
    onClick: t[0] || (t[0] = (...i) => e.clickHandle && e.clickHandle(...i))
  }, [
    T(e.$slots, "default", {}, () => [
      N(u, {
        size: 18,
        color: "#999999"
      }, {
        default: S(() => [
          e.isCollapse ? (v(), H(s, { key: 0 })) : (v(), H(r, { key: 1 }))
        ]),
        _: 1
      })
    ], !0)
  ], 4);
}
const Oe = /* @__PURE__ */ P(Kl, [["render", jl], ["__scopeId", "data-v-447ed96e"]]);
Oe.install = function(e) {
  e.component(Oe.name, Oe);
};
const Yl = {
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
function Ul(e, t) {
  const n = y(null), a = y(100), o = y(null), l = () => {
    var k;
    return ((k = document.querySelector(".card-row")) == null ? void 0 : k.offsetHeight) ?? 10;
  }, s = () => {
    var k;
    return ((k = document.querySelector(".card-row")) == null ? void 0 : k.offsetWidth) ?? 10;
  }, r = y(0), u = y(20), i = y(0), d = y(e.columns), f = (k) => Math.ceil(k / l()), h = () => {
    const { clientHeight: k = 100 } = n.value.wrapRef || {};
    return Math.floor(k / (l() + e.gridGap)) + r.value || 1;
  }, p = b(() => e.data.map((k, z) => ({ ...k, rowIndex: z }))), c = b(() => p.value.filter((k, z) => z >= r.value * d.value && z < u.value * d.value)), g = () => {
    const { clientHeight: k = 100 } = n.value.wrapRef || {}, z = k / l() * e.gridGap;
    a.value = Math.floor(e.data.length / d.value * l() + z);
  }, m = (k) => {
    const { scrollTop: z, clientHeight: U } = n.value.wrapRef, W = a.value - U - z;
    t("scroll", { distance: W, ...k }), r.value = f(z), i.value = z + e.gridGap, u.value = h();
  };
  q(() => e.data, () => {
    g(), u.value = h();
  });
  const $ = () => {
    if (o.value) {
      const { clientWidth: k = 500 } = n.value.wrapRef;
      d.value = Math.floor(k / s()) || 1, g(), i.value = 0, r.value = 0, n.value.setScrollTop(0), u.value = h();
    }
  };
  return he(() => {
    $(), window.addEventListener("resize", $);
  }), dn(() => {
    window.removeEventListener("resize", $);
  }), {
    scrollbarRef: n,
    containHeight: a,
    cardRowRef: o,
    onScroll: m,
    startOffset: i,
    viewListRanges: c,
    resetViewport: $
  };
}
const ct = B({
  name: "KCardList",
  props: Yl,
  emits: ["click", "mouseenter", "mouseleave", "update:modelValue", "scroll"],
  setup(e, { emit: t }) {
    const n = b(() => `${Number((100 / e.columns).toFixed(1))}%`), a = b(() => `${e.gridGap}px`), o = b(() => `${e.width}`), l = (m) => m.disabled || e.disabled, s = b(() => e.rowClass === "border" ? "border-row" : e.rowClass === "shadow" ? "box-shadow" : e.rowClass), r = y("");
    ke(() => {
      r.value = e.modelValue;
    });
    const u = (m) => {
      l(m) || (e.highlight && (r.value = m[e.keyId], t("update:modelValue", m[e.keyId])), t("click", m));
    }, {
      scrollbarRef: i,
      containHeight: d,
      cardRowRef: f,
      startOffset: h,
      viewListRanges: p,
      onScroll: c,
      resetViewport: g
    } = Ul(e, t);
    return {
      calcnum: n,
      gridgap: a,
      columnwidth: o,
      rowClassStyle: s,
      clickHandle: u,
      selectedId: r,
      bitNotAllowed: l,
      scrollbarRef: i,
      containHeight: d,
      cardRowRef: f,
      startOffset: h,
      viewListRanges: p,
      onScroll: c,
      resetViewport: g
    };
  }
}), Vt = () => {
  Ht((e) => ({
    "7d46f10c": e.gridgap,
    "2e51acf2": e.columns,
    "5e29b28a": e.calcnum,
    "221aa64c": e.columnwidth,
    cb2c4c58: e.imgheight
  }));
}, Tt = ct.setup;
ct.setup = Tt ? (e, t) => (Vt(), Tt(e, t)) : Vt;
const Wl = ct, Gl = { class: "card-contain" }, ql = ["onClick", "onMouseenter", "onMouseleave"], Ql = { class: "card-list-content" }, Xl = { class: "sign" };
function Zl(e, t, n, a, o, l) {
  const s = V("el-scrollbar");
  return v(), H(s, O({
    ref: "scrollbarRef",
    "data-test": "card-list"
  }, e.$attrs, {
    always: "",
    onScroll: e.onScroll
  }), {
    default: S(() => [
      C("div", Gl, [
        C("div", {
          class: "card-wrap",
          style: Y({ height: `${e.containHeight}px` })
        }, null, 4),
        C("div", {
          class: "card-list",
          style: Y({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          C("div", {
            class: x([e.fixedColumn ? "card-fixed-coumn" : "card-content", { "fixed-width": e.width }])
          }, [
            (v(!0), w(A, null, Q(e.viewListRanges, (r, u) => (v(), w("div", {
              class: x(["card-row border-radius pointer", [e.selectedId === r[e.keyId] ? "select-style" : "", e.bitNotAllowed(r) ? "not-allowed" : "hover-style", e.rowClassStyle]]),
              key: u,
              onClick: (i) => e.clickHandle(r),
              ref_for: !0,
              ref: "cardRowRef",
              onMouseenter: (i) => e.$emit("mouseenter", r),
              onMouseleave: (i) => e.$emit("mouseleave", r)
            }, [
              C("div", Ql, [
                T(e.$slots, "default", {
                  row: r,
                  index: r.rowIndex
                }, () => [
                  X(K(r.rowIndex), 1)
                ], !0)
              ]),
              C("div", Xl, [
                T(e.$slots, "sign", {
                  row: r,
                  index: r.rowIndex
                }, void 0, !0)
              ])
            ], 42, ql))), 128))
          ], 2)
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["onScroll"]);
}
const Ae = /* @__PURE__ */ P(Wl, [["render", Zl], ["__scopeId", "data-v-6f6f8503"]]);
Ae.install = function(e) {
  e.component(Ae.name, Ae);
};
const We = {
  KButton: Ee,
  KInput: ye,
  KInputNumber: Ve,
  KTable: Te,
  KTableV2: Ne,
  KPage: de,
  KBatchTable: we,
  KDialog: Me,
  KBreadcrumb: Be,
  KTabs: He,
  KPicker: xe,
  KTooltip: ze,
  KDatePicker: Ie,
  KNumberKeyboard: Pe,
  KVirtualList: _e,
  KAutoCounter: De,
  KCollapseButton: Oe,
  KCardList: Ae,
  install: () => {
  }
};
function Jl(e, t, n = 0) {
  return e.substr(n, t.length) === t;
}
We.install = function(e) {
  Object.keys(We).forEach((t) => {
    if (Jl(t, "K")) {
      const n = We[t];
      e.component(n.name, n);
    }
  }), Object.keys(be).forEach((t) => {
    e.directive(t, be[t]);
  });
};
export {
  De as KAutoCounter,
  we as KBatchTable,
  Be as KBreadcrumb,
  Ee as KButton,
  Ae as KCardList,
  Oe as KCollapseButton,
  Ie as KDatePicker,
  Me as KDialog,
  ye as KInput,
  Ve as KInputNumber,
  Pe as KNumberKeyboard,
  de as KPage,
  xe as KPicker,
  Te as KTable,
  Ne as KTableV2,
  He as KTabs,
  ze as KTooltip,
  We as KUI,
  _e as KVirtualList,
  be as directives
};
