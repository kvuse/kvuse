import { defineComponent as B, ref as _, computed as y, resolveComponent as V, openBlock as v, createBlock as z, mergeProps as O, withModifiers as tn, withCtx as k, renderSlot as T, createElementBlock as w, createCommentVNode as j, withKeys as Tt, createSlots as fe, createElementVNode as S, watchEffect as ke, watch as q, nextTick as oe, normalizeClass as x, createVNode as N, unref as E, getCurrentScope as nn, onScopeDispose as an, getCurrentInstance as pe, onMounted as he, warn as on, inject as Z, provide as et, onBeforeUnmount as ln, toRef as Fe, Transition as rn, withDirectives as sn, normalizeStyle as G, vShow as un, Fragment as A, reactive as Nt, onUpdated as Mt, resolveDynamicComponent as Ee, useSlots as cn, Text as dn, renderList as Q, toDisplayString as K, createTextVNode as X, toRefs as fn, normalizeProps as st, useCssVars as Bt, onUnmounted as pn } from "vue";
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
    mounted: (e, n) => {
      const t = e.textContent;
      if (typeof Number(t) != "number")
        return;
      let a = "￥0";
      const { inter: o, point: l } = n.modifiers, s = l ? n.value : 2, r = t >= 0 ? `￥${Number(t).toFixed(s)}` : `-￥${Math.abs(Number(t.toFixed(s)))}`;
      o ? a = t >= 0 ? `￥${t}` : `-￥${Math.abs(t)}` : a = t ? r : "￥0.00", e.innerHTML = `${a}`;
    },
    updated: (e, n) => {
      const { point: t } = n.modifiers, a = t ? n.value : 2, o = n.arg === "value" && n.value ? `￥${Number(n.value).toFixed(a)}` : e.textContent;
      e.innerHTML = o;
    }
  },
  /**
   * 参数为空的处理
  */
  params: {
    mounted: (e) => {
      const n = e.textContent;
      e.innerHTML = `${n}` || "-";
    }
  },
  /**
   * title
   * 文字超出显示，绑定title，鼠标hover事件显示内容
   */
  title: {
    mounted: (e) => {
      e.parentNode.style.position = "relative";
      const n = document.createElement("div");
      n.innerHTML = e.textContent, n.setAttribute("class", "title-hover");
      const t = document.createElement("div");
      t.setAttribute("class", "border-div"), n.appendChild(t), e.setAttribute("class", "text-ellipsis"), e.onmouseover = () => {
        e.parentNode.appendChild(n);
      }, e.onmouseout = () => {
        e.parentNode.removeChild(n);
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
    mounted: (e, n) => {
      let t = 0;
      e.handler = function(a) {
        const o = Date.now(), l = /^[a-zA-Z]{2,}/.test(a.key) ? a.key : a.key.toLocaleUpperCase(), { buttonKey: s, isCombination: r = 0 } = n.value || e.valueKeys || {}, u = document.contains(e), i = a.target.tagName === "TEXTAREA" || a.target.tagName === "INPUT", {
          dialog: c,
          focus: d,
          long: g,
          any: f,
          fast: h
        } = n.modifiers;
        if (!u && !g) {
          document.removeEventListener("keydown", e.handler);
          return;
        }
        if (f && n.arg) {
          n.arg(a);
          return;
        }
        const m = h ? o - t > 30 : !0, p = document.querySelector(".el-popup-parent--hidden") || document.querySelector(".is-message-box");
        if (t = o, p && !c)
          return;
        const b = a.ctrlKey || a.metaKey, $ = r === +b && s === l;
        (!i || d || r) && $ && m && n.arg && n.arg(a);
      }, document.addEventListener("keydown", e.handler);
    },
    updated(e, n) {
      e.valueKeys = n.value, document.addEventListener("keydown", e.handler);
    },
    unmounted: (e) => {
      document.removeEventListener("keydown", e.handler);
    }
  },
  /**
   * 按钮点击防抖
   */
  button: {
    mounted: (e, n) => {
      e.handler = function() {
        const { delay: t = 800, content: a } = n.value || {};
        e.classList.add("is-disabled"), e.disabled = !0, a && (e.beforeText = e.textContent, e.innerHTML = a);
        const { once: o } = n.modifiers;
        o || (e.timer = setTimeout(() => {
          e.classList.remove("is-disabled"), e.disabled = !1, a && (e.innerHTML = e.beforeText), e.beforeText = null, clearTimeout(e.timer), e.timer = null;
        }, t));
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
  Object.keys(be).forEach((n) => {
    e.directive(n, be[n]);
  });
};
const D = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, o] of n)
    t[a] = o;
  return t;
}, hn = B({
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
  setup(e, { emit: n, attrs: t }) {
    const a = _(!0), o = _(null), l = () => {
      a.value && (a.value = !1, n("click")), s();
    }, s = () => {
      clearTimeout(o.value), o.value = setTimeout(() => {
        a.value = !0;
      }, 800);
    }, r = y(() => {
      const { border: u } = e, { type: i = "text" } = t;
      return u ? {
        backgroundColor: "transparent",
        color: `var(--el-color-${i})`
      } : {};
    });
    return { onclick: l, buttonStatus: a, buttonStyle: r };
  }
}), mn = {
  key: 0,
  class: "el-icon-lock el-icon--right"
};
function vn(e, n, t, a, o, l) {
  const s = V("el-button");
  return v(), z(s, O({
    disabled: !e.buttonStatus || e.disabled,
    style: e.buttonStyle,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: tn(e.onclick, ["stop"])
  }), {
    default: k(() => [
      T(e.$slots, "default"),
      e.iconLock ? (v(), w("i", mn)) : j("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "style", "click-state", "onClick"]);
}
const Ve = /* @__PURE__ */ D(hn, [["render", vn]]);
Ve.install = function(e) {
  e.component(Ve.name, Ve);
};
const gn = B({
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
  setup(e, { emit: n, attrs: t }) {
    const a = _(null), o = _(!0), l = y({
      get() {
        return e.modelValue;
      },
      set(c) {
        s(c);
      }
    }), s = (c) => {
      let d = c;
      if (e.type === "number") {
        if (d = d.replace(/[^\d.]/g, ""), d = d.replace(/^\./g, ""), d = d.replace(/\.{2,}/g, "."), d = d.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), d.indexOf(".") < 0 && d !== "" && d.substr(0, 1) === "0" && d.length === 2 && (d = d.substr(1, d.length)), d !== "")
          if (d.indexOf(".") > 0) {
            if (e.point) {
              const g = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
              d = d.match(g)[0] || null;
            }
          } else
            d === "." && (d = "");
      } else
        e.type === "integer" ? d = d.replace(/[^\d]/g, "") : e.type === "intText" && (d = d.replace(/[^\w]/g, ""));
      t.max !== void 0 && d && Number(d) > Number(t.max) && (d = t.max), t.min !== void 0 && d && Number(d) < Number(t.min) && (d = t.min), n("update:modelValue", d);
    }, r = () => {
      o.value && (o.value = !1, l.value && n("enter")), i();
    }, u = (c) => {
      n("change", c);
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
function bn(e, n, t, a, o, l) {
  const s = V("el-input");
  return v(), z(s, O({
    modelValue: e.inputValue,
    "onUpdate:modelValue": n[0] || (n[0] = (r) => e.inputValue = r),
    modelModifiers: { trim: !0 }
  }, e.$attrs, {
    onKeyup: Tt(e.searchContent, ["enter"]),
    onChange: e.changeValue
  }), fe({ _: 2 }, [
    e.$slots.append ? {
      name: "append",
      fn: k(() => [
        T(e.$slots, "append")
      ]),
      key: "0"
    } : void 0,
    e.$slots.prepend ? {
      name: "prepend",
      fn: k(() => [
        T(e.$slots, "prepend")
      ]),
      key: "1"
    } : void 0,
    e.$slots.prefix ? {
      name: "prefix",
      fn: k(() => [
        T(e.$slots, "prefix")
      ]),
      key: "2"
    } : void 0,
    e.$slots.suffix ? {
      name: "suffix",
      fn: k(() => [
        T(e.$slots, "suffix")
      ]),
      key: "3"
    } : void 0
  ]), 1040, ["modelValue", "onKeyup", "onChange"]);
}
const ye = /* @__PURE__ */ D(gn, [["render", bn]]);
ye.install = function(e) {
  e.component(ye.name, ye);
};
/*! Element Plus Icons Vue v2.1.0 */
var se = (e, n) => {
  let t = e.__vccOpts || e;
  for (let [a, o] of n)
    t[a] = o;
  return t;
}, yn = {
  name: "CaretLeft"
}, _n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, wn = /* @__PURE__ */ S(
  "path",
  {
    fill: "currentColor",
    d: "M672 192 288 511.936 672 832z"
  },
  null,
  -1
  /* HOISTED */
), $n = [
  wn
];
function kn(e, n, t, a, o, l) {
  return v(), w("svg", _n, $n);
}
var Sn = /* @__PURE__ */ se(yn, [["render", kn], ["__file", "caret-left.vue"]]), Cn = {
  name: "CaretRight"
}, En = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vn = /* @__PURE__ */ S(
  "path",
  {
    fill: "currentColor",
    d: "M384 192v640l384-320.064z"
  },
  null,
  -1
  /* HOISTED */
), Tn = [
  Vn
];
function Nn(e, n, t, a, o, l) {
  return v(), w("svg", En, Tn);
}
var Mn = /* @__PURE__ */ se(Cn, [["render", Nn], ["__file", "caret-right.vue"]]), Bn = {
  name: "Delete"
}, zn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xn = /* @__PURE__ */ S(
  "path",
  {
    fill: "currentColor",
    d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
  },
  null,
  -1
  /* HOISTED */
), Hn = [
  xn
];
function In(e, n, t, a, o, l) {
  return v(), w("svg", zn, Hn);
}
var Dn = /* @__PURE__ */ se(Bn, [["render", In], ["__file", "delete.vue"]]), Pn = {
  name: "Loading"
}, On = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, An = /* @__PURE__ */ S(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), Rn = [
  An
];
function Fn(e, n, t, a, o, l) {
  return v(), w("svg", On, Rn);
}
var Ln = /* @__PURE__ */ se(Pn, [["render", Fn], ["__file", "loading.vue"]]), Kn = {
  name: "Minus"
}, jn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Yn = /* @__PURE__ */ S(
  "path",
  {
    fill: "currentColor",
    d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
  },
  null,
  -1
  /* HOISTED */
), Un = [
  Yn
];
function Wn(e, n, t, a, o, l) {
  return v(), w("svg", jn, Un);
}
var Gn = /* @__PURE__ */ se(Kn, [["render", Wn], ["__file", "minus.vue"]]), qn = {
  name: "Plus"
}, Qn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xn = /* @__PURE__ */ S(
  "path",
  {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  },
  null,
  -1
  /* HOISTED */
), Zn = [
  Xn
];
function Jn(e, n, t, a, o, l) {
  return v(), w("svg", Qn, Zn);
}
var ea = /* @__PURE__ */ se(qn, [["render", Jn], ["__file", "plus.vue"]]), ta = {
  name: "Warning"
}, na = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, aa = /* @__PURE__ */ S(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), oa = [
  aa
];
function la(e, n, t, a, o, l) {
  return v(), w("svg", na, oa);
}
var ra = /* @__PURE__ */ se(ta, [["render", la], ["__file", "warning.vue"]]);
const sa = B({
  name: "KInputNumber",
  components: { Minus: Gn, Plus: ea, KInput: ye },
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
  setup(e, { emit: n }) {
    const t = _(1), a = _(null), o = _(!1), l = y(() => e.modelValue <= e.min), s = y(() => e.modelValue >= e.max), r = y({
      get: () => e.modelValue,
      set: (p) => {
        n("update:modelValue", p);
      }
    }), u = (p) => n("blur", p), i = (p) => n("focus", p), c = (p) => n("enter", p), d = (p) => {
      oe(() => {
        const b = p === "" ? void 0 : Number(p);
        (!Number.isNaN(b) || p === "") && m(b);
      });
    }, g = (p) => {
      o.value = !p, a.value = p;
    }, f = _(-1);
    ke(() => {
      t.value = e.modelValue;
    }), q(() => f.value, (p) => {
      p < 0 && (r.value = e.modelValue, d(t.value));
    }, { immediate: !0 });
    const h = (p) => {
      const b = p === "increase", $ = b ? s.value : l.value;
      if (e.disabled || $)
        return;
      const H = o.value ? 0 : r.value, Y = a.value ? t.value : H, U = b ? Y + e.step : Y - e.step;
      m(U);
    }, m = (p) => {
      a.value = p;
      let b = p;
      f.value !== b && (f.value = p, b >= e.max && (b = e.max), b <= e.min && (b = e.min), a.value === void 0 && (b = 1), n("update:modelValue", b), n("change", b, f.value), t.value = b);
    };
    return {
      currentValue: t,
      minDisabled: l,
      maxDisabled: s,
      handleBlur: u,
      handleFocus: i,
      handleKeyUp: c,
      handleInputChange: d,
      handleInput: g,
      clickBtnHandle: h
    };
  }
});
function ua(e, n, t, a, o, l) {
  const s = V("minus"), r = V("el-icon"), u = V("plus"), i = V("k-input");
  return v(), w("div", {
    class: x(["el-input-number", { "is-disabled": e.disabled }, { "is-without-controls": !e.controls }, e.size ? "el-input-number--" + e.size : ""])
  }, [
    e.controls ? (v(), w("span", {
      key: 0,
      class: x(["el-input-number__decrease", { "is-disabled": e.minDisabled }]),
      role: "button",
      onClick: n[0] || (n[0] = (c) => e.clickBtnHandle("decrease"))
    }, [
      N(r, { class: "el-input__icon" }, {
        default: k(() => [
          N(s)
        ]),
        _: 1
      })
    ], 2)) : j("", !0),
    e.controls ? (v(), w("span", {
      key: 1,
      class: x(["el-input-number__increase", { "is-disabled": e.maxDisabled }]),
      role: "button",
      onClick: n[1] || (n[1] = (c) => e.clickBtnHandle("increase"))
    }, [
      N(r, { class: "el-input__icon" }, {
        default: k(() => [
          N(u)
        ]),
        _: 1
      })
    ], 2)) : j("", !0),
    N(i, O({
      ref: "input",
      modelValue: e.currentValue,
      "onUpdate:modelValue": n[2] || (n[2] = (c) => e.currentValue = c),
      disabled: e.disabled,
      type: e.type
    }, e.$attrs, {
      onBlur: e.handleBlur,
      maxlength: "6",
      onFocus: e.handleFocus,
      onChange: e.handleInputChange,
      onInput: e.handleInput,
      onKeyup: Tt(e.handleKeyUp, ["enter"])
    }), null, 16, ["modelValue", "disabled", "type", "onBlur", "onFocus", "onChange", "onInput", "onKeyup"])
  ], 2);
}
const Te = /* @__PURE__ */ D(sa, [["render", ua]]);
Te.install = function(e) {
  e.component(Te.name, Te);
};
var ut;
const tt = typeof window < "u", ia = (e) => typeof e == "string", ca = () => {
};
tt && ((ut = window == null ? void 0 : window.navigator) != null && ut.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function zt(e) {
  return typeof e == "function" ? e() : E(e);
}
function da(e) {
  return e;
}
function xt(e) {
  return nn() ? (an(e), !0) : !1;
}
function fa(e, n = !0) {
  pe() ? he(e) : n ? e() : oe(e);
}
function Ht(e) {
  var n;
  const t = zt(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const It = tt ? window : void 0;
function Ge(...e) {
  let n, t, a, o;
  if (ia(e[0]) || Array.isArray(e[0]) ? ([t, a, o] = e, n = It) : [n, t, a, o] = e, !n)
    return ca;
  Array.isArray(t) || (t = [t]), Array.isArray(a) || (a = [a]);
  const l = [], s = () => {
    l.forEach((c) => c()), l.length = 0;
  }, r = (c, d, g, f) => (c.addEventListener(d, g, f), () => c.removeEventListener(d, g, f)), u = q(() => [Ht(n), zt(o)], ([c, d]) => {
    s(), c && l.push(...t.flatMap((g) => a.map((f) => r(c, g, f, d))));
  }, { immediate: !0, flush: "post" }), i = () => {
    u(), s();
  };
  return xt(i), i;
}
function pa(e, n = !1) {
  const t = _(), a = () => t.value = !!e();
  return a(), fa(a, n), t;
}
const it = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ct = "__vueuse_ssr_handlers__";
it[ct] = it[ct] || {};
var dt = Object.getOwnPropertySymbols, ha = Object.prototype.hasOwnProperty, ma = Object.prototype.propertyIsEnumerable, va = (e, n) => {
  var t = {};
  for (var a in e)
    ha.call(e, a) && n.indexOf(a) < 0 && (t[a] = e[a]);
  if (e != null && dt)
    for (var a of dt(e))
      n.indexOf(a) < 0 && ma.call(e, a) && (t[a] = e[a]);
  return t;
};
function ga(e, n, t = {}) {
  const a = t, { window: o = It } = a, l = va(a, ["window"]);
  let s;
  const r = pa(() => o && "ResizeObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, i = q(() => Ht(e), (d) => {
    u(), r.value && o && d && (s = new ResizeObserver(n), s.observe(d, l));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), i();
  };
  return xt(c), {
    isSupported: r,
    stop: c
  };
}
var ft;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ft || (ft = {}));
var ba = Object.defineProperty, pt = Object.getOwnPropertySymbols, ya = Object.prototype.hasOwnProperty, _a = Object.prototype.propertyIsEnumerable, ht = (e, n, t) => n in e ? ba(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, wa = (e, n) => {
  for (var t in n || (n = {}))
    ya.call(n, t) && ht(e, t, n[t]);
  if (pt)
    for (var t of pt(n))
      _a.call(n, t) && ht(e, t, n[t]);
  return e;
};
const $a = {
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
wa({
  linear: da
}, $a);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ka = () => {
}, Sa = Object.prototype.hasOwnProperty, mt = (e, n) => Sa.call(e, n), nt = (e) => typeof e == "string", at = (e) => e !== null && typeof e == "object";
function Ca(e) {
  for (var n = -1, t = e == null ? 0 : e.length, a = {}; ++n < t; ) {
    var o = e[n];
    a[o[0]] = o[1];
  }
  return a;
}
const Ea = (e) => e === void 0, ie = (e) => typeof e == "number", Va = (e) => nt(e) ? !Number.isNaN(Number(e)) : !1, vt = (e) => Object.keys(e);
class Dt extends Error {
  constructor(n) {
    super(n), this.name = "ElementPlusError";
  }
}
function Ta(e, n) {
  throw new Dt(`[${e}] ${n}`);
}
function $e(e, n) {
  if (process.env.NODE_ENV !== "production") {
    const t = nt(e) ? new Dt(`[${e}] ${n}`) : e;
    console.warn(t);
  }
}
const Na = "utils/dom/style";
function qe(e, n = "px") {
  if (!e)
    return "";
  if (ie(e) || Va(e))
    return `${e}${n}`;
  if (nt(e))
    return e;
  $e(Na, "binding value must be a string or number");
}
const Pt = "__epPropKey", ne = (e) => e, Ma = (e) => at(e) && !!e[Pt], Ot = (e, n) => {
  if (!at(e) || Ma(e))
    return e;
  const { values: t, required: a, default: o, type: l, validator: s } = e, u = {
    type: l,
    required: !!a,
    validator: t || s ? (i) => {
      let c = !1, d = [];
      if (t && (d = Array.from(t), mt(e, "default") && d.push(o), c || (c = d.includes(i))), s && (c || (c = s(i))), !c && d.length > 0) {
        const g = [...new Set(d)].map((f) => JSON.stringify(f)).join(", ");
        on(`Invalid prop: validation failed${n ? ` for prop "${n}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(i)}.`);
      }
      return c;
    } : void 0,
    [Pt]: !0
  };
  return mt(e, "default") && (u.default = o), u;
}, me = (e) => Ca(Object.entries(e).map(([n, t]) => [
  n,
  Ot(t, n)
])), gt = ne([
  String,
  Object,
  Function
]), Ke = (e, n) => {
  if (e.install = (t) => {
    for (const a of [e, ...Object.values(n ?? {})])
      t.component(a.name, a);
  }, n)
    for (const [t, a] of Object.entries(n))
      e[t] = a;
  return e;
}, Ba = (e) => (e.install = ka, e), za = ["", "default", "small", "large"], xa = ({ from: e, replacement: n, scope: t, version: a, ref: o, type: l = "API" }, s) => {
  q(() => E(s), (r) => {
    r && $e(t, `[${l}] ${e} is about to be deprecated in version ${a}, please use ${n} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, Ha = Symbol("localeContextKey"), bt = "el", Ia = "is-", le = (e, n, t, a, o) => {
  let l = `${e}-${n}`;
  return t && (l += `-${t}`), a && (l += `__${a}`), o && (l += `--${o}`), l;
}, At = Symbol("namespaceContextKey"), Da = (e) => {
  const n = e || Z(At, _(bt));
  return y(() => E(n) || bt);
}, ve = (e, n) => {
  const t = Da(n);
  return {
    namespace: t,
    b: (m = "") => le(t.value, e, m, "", ""),
    e: (m) => m ? le(t.value, e, "", m, "") : "",
    m: (m) => m ? le(t.value, e, "", "", m) : "",
    be: (m, p) => m && p ? le(t.value, e, m, p, "") : "",
    em: (m, p) => m && p ? le(t.value, e, "", m, p) : "",
    bm: (m, p) => m && p ? le(t.value, e, m, "", p) : "",
    bem: (m, p, b) => m && p && b ? le(t.value, e, m, p, b) : "",
    is: (m, ...p) => {
      const b = p.length >= 1 ? p[0] : !0;
      return m && b ? `${Ia}${m}` : "";
    },
    cssVar: (m) => {
      const p = {};
      for (const b in m)
        m[b] && (p[`--${t.value}-${b}`] = m[b]);
      return p;
    },
    cssVarName: (m) => `--${t.value}-${m}`,
    cssVarBlock: (m) => {
      const p = {};
      for (const b in m)
        m[b] && (p[`--${t.value}-${e}-${b}`] = m[b]);
      return p;
    },
    cssVarBlockName: (m) => `--${t.value}-${e}-${m}`
  };
}, Rt = (e) => {
  const n = pe();
  return y(() => {
    var t, a;
    return (a = (t = n == null ? void 0 : n.proxy) == null ? void 0 : t.$props) == null ? void 0 : a[e];
  });
};
_(0);
const Pa = Symbol("zIndexContextKey"), Ft = Ot({
  type: String,
  values: za,
  required: !1
}), Lt = Symbol("size"), Oa = () => {
  const e = Z(Lt, {});
  return y(() => E(e.size) || "");
}, Kt = Symbol(), Le = _();
function jt(e, n = void 0) {
  const t = pe() ? Z(Kt, Le) : Le;
  return e ? y(() => {
    var a, o;
    return (o = (a = t.value) == null ? void 0 : a[e]) != null ? o : n;
  }) : t;
}
const Aa = (e, n, t = !1) => {
  var a;
  const o = !!pe(), l = o ? jt() : void 0, s = (a = n == null ? void 0 : n.provide) != null ? a : o ? et : void 0;
  if (!s) {
    $e("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const r = y(() => {
    const u = E(e);
    return l != null && l.value ? Ra(l.value, u) : u;
  });
  return s(Kt, r), s(Ha, y(() => r.value.locale)), s(At, y(() => r.value.namespace)), s(Pa, y(() => r.value.zIndex)), s(Lt, {
    size: y(() => r.value.size || "")
  }), (t || !Le.value) && (Le.value = r.value), r;
}, Ra = (e, n) => {
  var t;
  const a = [.../* @__PURE__ */ new Set([...vt(e), ...vt(n)])], o = {};
  for (const l of a)
    o[l] = (t = n[l]) != null ? t : e[l];
  return o;
}, Fa = me({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ne(Object)
  },
  size: Ft,
  button: {
    type: ne(Object)
  },
  experimentalFeatures: {
    type: ne(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ne(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), La = {}, Ka = B({
  name: "ElConfigProvider",
  props: Fa,
  setup(e, { slots: n }) {
    q(() => e.message, (a) => {
      Object.assign(La, a ?? {});
    }, { immediate: !0, deep: !0 });
    const t = Aa(e);
    return () => T(n, "default", { config: t == null ? void 0 : t.value });
  }
}), Yt = Ke(Ka);
var ge = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, o] of n)
    t[a] = o;
  return t;
};
const ja = me({
  size: {
    type: ne([Number, String])
  },
  color: {
    type: String
  }
}), Ya = B({
  name: "ElIcon",
  inheritAttrs: !1
}), Ua = /* @__PURE__ */ B({
  ...Ya,
  props: ja,
  setup(e) {
    const n = e, t = ve("icon"), a = y(() => {
      const { size: o, color: l } = n;
      return !o && !l ? {} : {
        fontSize: Ea(o) ? void 0 : qe(o),
        "--color": l
      };
    });
    return (o, l) => (v(), w("i", O({
      class: E(t).b(),
      style: E(a)
    }, o.$attrs), [
      T(o.$slots, "default")
    ], 16));
  }
});
var Wa = /* @__PURE__ */ ge(Ua, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Qe = Ke(Wa), ot = Symbol("formContextKey"), Ut = Symbol("formItemContextKey"), Ga = (e, n = {}) => {
  const t = _(void 0), a = n.prop ? t : Rt("size"), o = n.global ? t : Oa(), l = n.form ? { size: void 0 } : Z(ot, void 0), s = n.formItem ? { size: void 0 } : Z(Ut, void 0);
  return y(() => a.value || E(e) || (s == null ? void 0 : s.size) || (l == null ? void 0 : l.size) || o.value || "");
}, Wt = (e) => {
  const n = Rt("disabled"), t = Z(ot, void 0);
  return y(() => n.value || E(e) || (t == null ? void 0 : t.disabled) || !1);
}, qa = () => {
  const e = Z(ot, void 0), n = Z(Ut, void 0);
  return {
    form: e,
    formItem: n
  };
}, ce = 4, Qa = {
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
}, Xa = ({
  move: e,
  size: n,
  bar: t
}) => ({
  [t.size]: n,
  transform: `translate${t.axis}(${e}%)`
}), Gt = Symbol("scrollbarContextKey"), Za = me({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Ja = "Thumb", eo = /* @__PURE__ */ B({
  __name: "thumb",
  props: Za,
  setup(e) {
    const n = e, t = Z(Gt), a = ve("scrollbar");
    t || Ta(Ja, "can not inject scrollbar context");
    const o = _(), l = _(), s = _({}), r = _(!1);
    let u = !1, i = !1, c = tt ? document.onselectstart : null;
    const d = y(() => Qa[n.vertical ? "vertical" : "horizontal"]), g = y(() => Xa({
      size: n.size,
      move: n.move,
      bar: d.value
    })), f = y(() => o.value[d.value.offset] ** 2 / t.wrapElement[d.value.scrollSize] / n.ratio / l.value[d.value.offset]), h = (M) => {
      var C;
      if (M.stopPropagation(), M.ctrlKey || [1, 2].includes(M.button))
        return;
      (C = window.getSelection()) == null || C.removeAllRanges(), p(M);
      const I = M.currentTarget;
      I && (s.value[d.value.axis] = I[d.value.offset] - (M[d.value.client] - I.getBoundingClientRect()[d.value.direction]));
    }, m = (M) => {
      if (!l.value || !o.value || !t.wrapElement)
        return;
      const C = Math.abs(M.target.getBoundingClientRect()[d.value.direction] - M[d.value.client]), I = l.value[d.value.offset] / 2, F = (C - I) * 100 * f.value / o.value[d.value.offset];
      t.wrapElement[d.value.scroll] = F * t.wrapElement[d.value.scrollSize] / 100;
    }, p = (M) => {
      M.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", b), document.addEventListener("mouseup", $), c = document.onselectstart, document.onselectstart = () => !1;
    }, b = (M) => {
      if (!o.value || !l.value || u === !1)
        return;
      const C = s.value[d.value.axis];
      if (!C)
        return;
      const I = (o.value.getBoundingClientRect()[d.value.direction] - M[d.value.client]) * -1, F = l.value[d.value.offset] - C, J = (I - F) * 100 * f.value / o.value[d.value.offset];
      t.wrapElement[d.value.scroll] = J * t.wrapElement[d.value.scrollSize] / 100;
    }, $ = () => {
      u = !1, s.value[d.value.axis] = 0, document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", $), U(), i && (r.value = !1);
    }, H = () => {
      i = !1, r.value = !!n.size;
    }, Y = () => {
      i = !0, r.value = u;
    };
    ln(() => {
      U(), document.removeEventListener("mouseup", $);
    });
    const U = () => {
      document.onselectstart !== c && (document.onselectstart = c);
    };
    return Ge(Fe(t, "scrollbarElement"), "mousemove", H), Ge(Fe(t, "scrollbarElement"), "mouseleave", Y), (M, C) => (v(), z(rn, {
      name: E(a).b("fade"),
      persisted: ""
    }, {
      default: k(() => [
        sn(S("div", {
          ref_key: "instance",
          ref: o,
          class: x([E(a).e("bar"), E(a).is(E(d).key)]),
          onMousedown: m
        }, [
          S("div", {
            ref_key: "thumb",
            ref: l,
            class: x(E(a).e("thumb")),
            style: G(E(g)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [un, M.always || r.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var yt = /* @__PURE__ */ ge(eo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const to = me({
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
}), no = /* @__PURE__ */ B({
  __name: "bar",
  props: to,
  setup(e, { expose: n }) {
    const t = e, a = _(0), o = _(0);
    return n({
      handleScroll: (s) => {
        if (s) {
          const r = s.offsetHeight - ce, u = s.offsetWidth - ce;
          o.value = s.scrollTop * 100 / r * t.ratioY, a.value = s.scrollLeft * 100 / u * t.ratioX;
        }
      }
    }), (s, r) => (v(), w(A, null, [
      N(yt, {
        move: a.value,
        ratio: s.ratioX,
        size: s.width,
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      N(yt, {
        move: o.value,
        ratio: s.ratioY,
        size: s.height,
        vertical: "",
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var ao = /* @__PURE__ */ ge(no, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const oo = me({
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
    type: ne([String, Object, Array]),
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
}), lo = {
  scroll: ({
    scrollTop: e,
    scrollLeft: n
  }) => [e, n].every(ie)
}, Xe = "ElScrollbar", ro = B({
  name: Xe
}), so = /* @__PURE__ */ B({
  ...ro,
  props: oo,
  emits: lo,
  setup(e, { expose: n, emit: t }) {
    const a = e, o = ve("scrollbar");
    let l, s;
    const r = _(), u = _(), i = _(), c = _("0"), d = _("0"), g = _(), f = _(1), h = _(1), m = y(() => {
      const C = {};
      return a.height && (C.height = qe(a.height)), a.maxHeight && (C.maxHeight = qe(a.maxHeight)), [a.wrapStyle, C];
    }), p = y(() => [
      a.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !a.native }
    ]), b = y(() => [o.e("view"), a.viewClass]), $ = () => {
      var C;
      u.value && ((C = g.value) == null || C.handleScroll(u.value), t("scroll", {
        scrollTop: u.value.scrollTop,
        scrollLeft: u.value.scrollLeft
      }));
    };
    function H(C, I) {
      at(C) ? u.value.scrollTo(C) : ie(C) && ie(I) && u.value.scrollTo(C, I);
    }
    const Y = (C) => {
      if (!ie(C)) {
        $e(Xe, "value must be a number");
        return;
      }
      u.value.scrollTop = C;
    }, U = (C) => {
      if (!ie(C)) {
        $e(Xe, "value must be a number");
        return;
      }
      u.value.scrollLeft = C;
    }, M = () => {
      if (!u.value)
        return;
      const C = u.value.offsetHeight - ce, I = u.value.offsetWidth - ce, F = C ** 2 / u.value.scrollHeight, J = I ** 2 / u.value.scrollWidth, R = Math.max(F, a.minSize), ue = Math.max(J, a.minSize);
      f.value = F / (C - F) / (R / (C - R)), h.value = J / (I - J) / (ue / (I - ue)), d.value = R + ce < C ? `${R}px` : "", c.value = ue + ce < I ? `${ue}px` : "";
    };
    return q(() => a.noresize, (C) => {
      C ? (l == null || l(), s == null || s()) : ({ stop: l } = ga(i, M), s = Ge("resize", M));
    }, { immediate: !0 }), q(() => [a.maxHeight, a.height], () => {
      a.native || oe(() => {
        var C;
        M(), u.value && ((C = g.value) == null || C.handleScroll(u.value));
      });
    }), et(Gt, Nt({
      scrollbarElement: r,
      wrapElement: u
    })), he(() => {
      a.native || oe(() => {
        M();
      });
    }), Mt(() => M()), n({
      wrapRef: u,
      update: M,
      scrollTo: H,
      setScrollTop: Y,
      setScrollLeft: U,
      handleScroll: $
    }), (C, I) => (v(), w("div", {
      ref_key: "scrollbarRef",
      ref: r,
      class: x(E(o).b())
    }, [
      S("div", {
        ref_key: "wrapRef",
        ref: u,
        class: x(E(p)),
        style: G(E(m)),
        onScroll: $
      }, [
        (v(), z(Ee(C.tag), {
          ref_key: "resizeRef",
          ref: i,
          class: x(E(b)),
          style: G(C.viewStyle)
        }, {
          default: k(() => [
            T(C.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      C.native ? j("v-if", !0) : (v(), z(ao, {
        key: 0,
        ref_key: "barRef",
        ref: g,
        height: d.value,
        width: c.value,
        always: C.always,
        "ratio-x": h.value,
        "ratio-y": f.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var uo = /* @__PURE__ */ ge(so, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const io = Ke(uo), qt = Symbol("buttonGroupContextKey"), co = (e, n) => {
  xa({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, y(() => e.type === "text"));
  const t = Z(qt, void 0), a = jt("button"), { form: o } = qa(), l = Ga(y(() => t == null ? void 0 : t.size)), s = Wt(), r = _(), u = cn(), i = y(() => e.type || (t == null ? void 0 : t.type) || ""), c = y(() => {
    var h, m, p;
    return (p = (m = e.autoInsertSpace) != null ? m : (h = a.value) == null ? void 0 : h.autoInsertSpace) != null ? p : !1;
  }), d = y(() => e.tag === "button" ? {
    ariaDisabled: s.value || e.loading,
    disabled: s.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), g = y(() => {
    var h;
    const m = (h = u.default) == null ? void 0 : h.call(u);
    if (c.value && (m == null ? void 0 : m.length) === 1) {
      const p = m[0];
      if ((p == null ? void 0 : p.type) === dn) {
        const b = p.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(b.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: l,
    _type: i,
    _ref: r,
    _props: d,
    shouldAddSpace: g,
    handleClick: (h) => {
      e.nativeType === "reset" && (o == null || o.resetFields()), n("click", h);
    }
  };
}, fo = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], po = ["button", "submit", "reset"], Ze = me({
  size: Ft,
  disabled: Boolean,
  type: {
    type: String,
    values: fo,
    default: ""
  },
  icon: {
    type: gt
  },
  nativeType: {
    type: String,
    values: po,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: gt,
    default: () => Ln
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
    type: ne([String, Object]),
    default: "button"
  }
}), ho = {
  click: (e) => e instanceof MouseEvent
};
function P(e, n) {
  mo(e) && (e = "100%");
  var t = vo(e);
  return e = n === 360 ? e : Math.min(n, Math.max(0, parseFloat(e))), t && (e = parseInt(String(e * n), 10) / 100), Math.abs(e - n) < 1e-6 ? 1 : (n === 360 ? e = (e < 0 ? e % n + n : e % n) / parseFloat(String(n)) : e = e % n / parseFloat(String(n)), e);
}
function Se(e) {
  return Math.min(1, Math.max(0, e));
}
function mo(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function vo(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Qt(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ce(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function re(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function go(e, n, t) {
  return {
    r: P(e, 255) * 255,
    g: P(n, 255) * 255,
    b: P(t, 255) * 255
  };
}
function _t(e, n, t) {
  e = P(e, 255), n = P(n, 255), t = P(t, 255);
  var a = Math.max(e, n, t), o = Math.min(e, n, t), l = 0, s = 0, r = (a + o) / 2;
  if (a === o)
    s = 0, l = 0;
  else {
    var u = a - o;
    switch (s = r > 0.5 ? u / (2 - a - o) : u / (a + o), a) {
      case e:
        l = (n - t) / u + (n < t ? 6 : 0);
        break;
      case n:
        l = (t - e) / u + 2;
        break;
      case t:
        l = (e - n) / u + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s, l: r };
}
function je(e, n, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (n - e) * (6 * t) : t < 1 / 2 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e;
}
function bo(e, n, t) {
  var a, o, l;
  if (e = P(e, 360), n = P(n, 100), t = P(t, 100), n === 0)
    o = t, l = t, a = t;
  else {
    var s = t < 0.5 ? t * (1 + n) : t + n - t * n, r = 2 * t - s;
    a = je(r, s, e + 1 / 3), o = je(r, s, e), l = je(r, s, e - 1 / 3);
  }
  return { r: a * 255, g: o * 255, b: l * 255 };
}
function wt(e, n, t) {
  e = P(e, 255), n = P(n, 255), t = P(t, 255);
  var a = Math.max(e, n, t), o = Math.min(e, n, t), l = 0, s = a, r = a - o, u = a === 0 ? 0 : r / a;
  if (a === o)
    l = 0;
  else {
    switch (a) {
      case e:
        l = (n - t) / r + (n < t ? 6 : 0);
        break;
      case n:
        l = (t - e) / r + 2;
        break;
      case t:
        l = (e - n) / r + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s: u, v: s };
}
function yo(e, n, t) {
  e = P(e, 360) * 6, n = P(n, 100), t = P(t, 100);
  var a = Math.floor(e), o = e - a, l = t * (1 - n), s = t * (1 - o * n), r = t * (1 - (1 - o) * n), u = a % 6, i = [t, s, l, l, r, t][u], c = [r, t, t, s, l, l][u], d = [l, l, r, t, t, s][u];
  return { r: i * 255, g: c * 255, b: d * 255 };
}
function $t(e, n, t, a) {
  var o = [
    re(Math.round(e).toString(16)),
    re(Math.round(n).toString(16)),
    re(Math.round(t).toString(16))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function _o(e, n, t, a, o) {
  var l = [
    re(Math.round(e).toString(16)),
    re(Math.round(n).toString(16)),
    re(Math.round(t).toString(16)),
    re(wo(a))
  ];
  return o && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function wo(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function kt(e) {
  return L(e) / 255;
}
function L(e) {
  return parseInt(e, 16);
}
function $o(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Je = {
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
function ko(e) {
  var n = { r: 0, g: 0, b: 0 }, t = 1, a = null, o = null, l = null, s = !1, r = !1;
  return typeof e == "string" && (e = Eo(e)), typeof e == "object" && (ee(e.r) && ee(e.g) && ee(e.b) ? (n = go(e.r, e.g, e.b), s = !0, r = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : ee(e.h) && ee(e.s) && ee(e.v) ? (a = Ce(e.s), o = Ce(e.v), n = yo(e.h, a, o), s = !0, r = "hsv") : ee(e.h) && ee(e.s) && ee(e.l) && (a = Ce(e.s), l = Ce(e.l), n = bo(e.h, a, l), s = !0, r = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (t = e.a)), t = Qt(t), {
    ok: s,
    format: e.format || r,
    r: Math.min(255, Math.max(n.r, 0)),
    g: Math.min(255, Math.max(n.g, 0)),
    b: Math.min(255, Math.max(n.b, 0)),
    a: t
  };
}
var So = "[-\\+]?\\d+%?", Co = "[-\\+]?\\d*\\.\\d+%?", ae = "(?:".concat(Co, ")|(?:").concat(So, ")"), Ye = "[\\s|\\(]+(".concat(ae, ")[,|\\s]+(").concat(ae, ")[,|\\s]+(").concat(ae, ")\\s*\\)?"), Ue = "[\\s|\\(]+(".concat(ae, ")[,|\\s]+(").concat(ae, ")[,|\\s]+(").concat(ae, ")[,|\\s]+(").concat(ae, ")\\s*\\)?"), W = {
  CSS_UNIT: new RegExp(ae),
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
function Eo(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var n = !1;
  if (Je[e])
    e = Je[e], n = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var t = W.rgb.exec(e);
  return t ? { r: t[1], g: t[2], b: t[3] } : (t = W.rgba.exec(e), t ? { r: t[1], g: t[2], b: t[3], a: t[4] } : (t = W.hsl.exec(e), t ? { h: t[1], s: t[2], l: t[3] } : (t = W.hsla.exec(e), t ? { h: t[1], s: t[2], l: t[3], a: t[4] } : (t = W.hsv.exec(e), t ? { h: t[1], s: t[2], v: t[3] } : (t = W.hsva.exec(e), t ? { h: t[1], s: t[2], v: t[3], a: t[4] } : (t = W.hex8.exec(e), t ? {
    r: L(t[1]),
    g: L(t[2]),
    b: L(t[3]),
    a: kt(t[4]),
    format: n ? "name" : "hex8"
  } : (t = W.hex6.exec(e), t ? {
    r: L(t[1]),
    g: L(t[2]),
    b: L(t[3]),
    format: n ? "name" : "hex"
  } : (t = W.hex4.exec(e), t ? {
    r: L(t[1] + t[1]),
    g: L(t[2] + t[2]),
    b: L(t[3] + t[3]),
    a: kt(t[4] + t[4]),
    format: n ? "name" : "hex8"
  } : (t = W.hex3.exec(e), t ? {
    r: L(t[1] + t[1]),
    g: L(t[2] + t[2]),
    b: L(t[3] + t[3]),
    format: n ? "name" : "hex"
  } : !1)))))))));
}
function ee(e) {
  return !!W.CSS_UNIT.exec(String(e));
}
var Vo = (
  /** @class */
  function() {
    function e(n, t) {
      n === void 0 && (n = ""), t === void 0 && (t = {});
      var a;
      if (n instanceof e)
        return n;
      typeof n == "number" && (n = $o(n)), this.originalInput = n;
      var o = ko(n);
      this.originalInput = n, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (a = t.format) !== null && a !== void 0 ? a : o.format, this.gradientType = t.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var n = this.toRgb();
      return (n.r * 299 + n.g * 587 + n.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var n = this.toRgb(), t, a, o, l = n.r / 255, s = n.g / 255, r = n.b / 255;
      return l <= 0.03928 ? t = l / 12.92 : t = Math.pow((l + 0.055) / 1.055, 2.4), s <= 0.03928 ? a = s / 12.92 : a = Math.pow((s + 0.055) / 1.055, 2.4), r <= 0.03928 ? o = r / 12.92 : o = Math.pow((r + 0.055) / 1.055, 2.4), 0.2126 * t + 0.7152 * a + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(n) {
      return this.a = Qt(n), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var n = this.toHsl().s;
      return n === 0;
    }, e.prototype.toHsv = function() {
      var n = wt(this.r, this.g, this.b);
      return { h: n.h * 360, s: n.s, v: n.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var n = wt(this.r, this.g, this.b), t = Math.round(n.h * 360), a = Math.round(n.s * 100), o = Math.round(n.v * 100);
      return this.a === 1 ? "hsv(".concat(t, ", ").concat(a, "%, ").concat(o, "%)") : "hsva(".concat(t, ", ").concat(a, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var n = _t(this.r, this.g, this.b);
      return { h: n.h * 360, s: n.s, l: n.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var n = _t(this.r, this.g, this.b), t = Math.round(n.h * 360), a = Math.round(n.s * 100), o = Math.round(n.l * 100);
      return this.a === 1 ? "hsl(".concat(t, ", ").concat(a, "%, ").concat(o, "%)") : "hsla(".concat(t, ", ").concat(a, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(n) {
      return n === void 0 && (n = !1), $t(this.r, this.g, this.b, n);
    }, e.prototype.toHexString = function(n) {
      return n === void 0 && (n = !1), "#" + this.toHex(n);
    }, e.prototype.toHex8 = function(n) {
      return n === void 0 && (n = !1), _o(this.r, this.g, this.b, this.a, n);
    }, e.prototype.toHex8String = function(n) {
      return n === void 0 && (n = !1), "#" + this.toHex8(n);
    }, e.prototype.toHexShortString = function(n) {
      return n === void 0 && (n = !1), this.a === 1 ? this.toHexString(n) : this.toHex8String(n);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var n = Math.round(this.r), t = Math.round(this.g), a = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(n, ", ").concat(t, ", ").concat(a, ")") : "rgba(".concat(n, ", ").concat(t, ", ").concat(a, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var n = function(t) {
        return "".concat(Math.round(P(t, 255) * 100), "%");
      };
      return {
        r: n(this.r),
        g: n(this.g),
        b: n(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var n = function(t) {
        return Math.round(P(t, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(n(this.r), "%, ").concat(n(this.g), "%, ").concat(n(this.b), "%)") : "rgba(".concat(n(this.r), "%, ").concat(n(this.g), "%, ").concat(n(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var n = "#" + $t(this.r, this.g, this.b, !1), t = 0, a = Object.entries(Je); t < a.length; t++) {
        var o = a[t], l = o[0], s = o[1];
        if (n === s)
          return l;
      }
      return !1;
    }, e.prototype.toString = function(n) {
      var t = !!n;
      n = n ?? this.format;
      var a = !1, o = this.a < 1 && this.a >= 0, l = !t && o && (n.startsWith("hex") || n === "name");
      return l ? n === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (n === "rgb" && (a = this.toRgbString()), n === "prgb" && (a = this.toPercentageRgbString()), (n === "hex" || n === "hex6") && (a = this.toHexString()), n === "hex3" && (a = this.toHexString(!0)), n === "hex4" && (a = this.toHex8String(!0)), n === "hex8" && (a = this.toHex8String()), n === "name" && (a = this.toName()), n === "hsl" && (a = this.toHslString()), n === "hsv" && (a = this.toHsvString()), a || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(n) {
      n === void 0 && (n = 10);
      var t = this.toHsl();
      return t.l += n / 100, t.l = Se(t.l), new e(t);
    }, e.prototype.brighten = function(n) {
      n === void 0 && (n = 10);
      var t = this.toRgb();
      return t.r = Math.max(0, Math.min(255, t.r - Math.round(255 * -(n / 100)))), t.g = Math.max(0, Math.min(255, t.g - Math.round(255 * -(n / 100)))), t.b = Math.max(0, Math.min(255, t.b - Math.round(255 * -(n / 100)))), new e(t);
    }, e.prototype.darken = function(n) {
      n === void 0 && (n = 10);
      var t = this.toHsl();
      return t.l -= n / 100, t.l = Se(t.l), new e(t);
    }, e.prototype.tint = function(n) {
      return n === void 0 && (n = 10), this.mix("white", n);
    }, e.prototype.shade = function(n) {
      return n === void 0 && (n = 10), this.mix("black", n);
    }, e.prototype.desaturate = function(n) {
      n === void 0 && (n = 10);
      var t = this.toHsl();
      return t.s -= n / 100, t.s = Se(t.s), new e(t);
    }, e.prototype.saturate = function(n) {
      n === void 0 && (n = 10);
      var t = this.toHsl();
      return t.s += n / 100, t.s = Se(t.s), new e(t);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(n) {
      var t = this.toHsl(), a = (t.h + n) % 360;
      return t.h = a < 0 ? 360 + a : a, new e(t);
    }, e.prototype.mix = function(n, t) {
      t === void 0 && (t = 50);
      var a = this.toRgb(), o = new e(n).toRgb(), l = t / 100, s = {
        r: (o.r - a.r) * l + a.r,
        g: (o.g - a.g) * l + a.g,
        b: (o.b - a.b) * l + a.b,
        a: (o.a - a.a) * l + a.a
      };
      return new e(s);
    }, e.prototype.analogous = function(n, t) {
      n === void 0 && (n = 6), t === void 0 && (t = 30);
      var a = this.toHsl(), o = 360 / t, l = [this];
      for (a.h = (a.h - (o * n >> 1) + 720) % 360; --n; )
        a.h = (a.h + o) % 360, l.push(new e(a));
      return l;
    }, e.prototype.complement = function() {
      var n = this.toHsl();
      return n.h = (n.h + 180) % 360, new e(n);
    }, e.prototype.monochromatic = function(n) {
      n === void 0 && (n = 6);
      for (var t = this.toHsv(), a = t.h, o = t.s, l = t.v, s = [], r = 1 / n; n--; )
        s.push(new e({ h: a, s: o, v: l })), l = (l + r) % 1;
      return s;
    }, e.prototype.splitcomplement = function() {
      var n = this.toHsl(), t = n.h;
      return [
        this,
        new e({ h: (t + 72) % 360, s: n.s, l: n.l }),
        new e({ h: (t + 216) % 360, s: n.s, l: n.l })
      ];
    }, e.prototype.onBackground = function(n) {
      var t = this.toRgb(), a = new e(n).toRgb(), o = t.a + a.a * (1 - t.a);
      return new e({
        r: (t.r * t.a + a.r * a.a * (1 - t.a)) / o,
        g: (t.g * t.a + a.g * a.a * (1 - t.a)) / o,
        b: (t.b * t.a + a.b * a.a * (1 - t.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(n) {
      for (var t = this.toHsl(), a = t.h, o = [this], l = 360 / n, s = 1; s < n; s++)
        o.push(new e({ h: (a + s * l) % 360, s: t.s, l: t.l }));
      return o;
    }, e.prototype.equals = function(n) {
      return this.toRgbString() === new e(n).toRgbString();
    }, e;
  }()
);
function te(e, n = 20) {
  return e.mix("#141414", n).toString();
}
function To(e) {
  const n = Wt(), t = ve("button");
  return y(() => {
    let a = {};
    const o = e.color;
    if (o) {
      const l = new Vo(o), s = e.dark ? l.tint(20).toString() : te(l, 20);
      if (e.plain)
        a = t.cssVarBlock({
          "bg-color": e.dark ? te(l, 90) : l.tint(90).toString(),
          "text-color": o,
          "border-color": e.dark ? te(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${t.cssVarName("color-white")})`,
          "hover-bg-color": o,
          "hover-border-color": o,
          "active-bg-color": s,
          "active-text-color": `var(${t.cssVarName("color-white")})`,
          "active-border-color": s
        }), n.value && (a[t.cssVarBlockName("disabled-bg-color")] = e.dark ? te(l, 90) : l.tint(90).toString(), a[t.cssVarBlockName("disabled-text-color")] = e.dark ? te(l, 50) : l.tint(50).toString(), a[t.cssVarBlockName("disabled-border-color")] = e.dark ? te(l, 80) : l.tint(80).toString());
      else {
        const r = e.dark ? te(l, 30) : l.tint(30).toString(), u = l.isDark() ? `var(${t.cssVarName("color-white")})` : `var(${t.cssVarName("color-black")})`;
        if (a = t.cssVarBlock({
          "bg-color": o,
          "text-color": u,
          "border-color": o,
          "hover-bg-color": r,
          "hover-text-color": u,
          "hover-border-color": r,
          "active-bg-color": s,
          "active-border-color": s
        }), n.value) {
          const i = e.dark ? te(l, 50) : l.tint(50).toString();
          a[t.cssVarBlockName("disabled-bg-color")] = i, a[t.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${t.cssVarName("color-white")})`, a[t.cssVarBlockName("disabled-border-color")] = i;
        }
      }
    }
    return a;
  });
}
const No = B({
  name: "ElButton"
}), Mo = /* @__PURE__ */ B({
  ...No,
  props: Ze,
  emits: ho,
  setup(e, { expose: n, emit: t }) {
    const a = e, o = To(a), l = ve("button"), { _ref: s, _size: r, _type: u, _disabled: i, _props: c, shouldAddSpace: d, handleClick: g } = co(a, t);
    return n({
      ref: s,
      size: r,
      type: u,
      disabled: i,
      shouldAddSpace: d
    }), (f, h) => (v(), z(Ee(f.tag), O({
      ref_key: "_ref",
      ref: s
    }, E(c), {
      class: [
        E(l).b(),
        E(l).m(E(u)),
        E(l).m(E(r)),
        E(l).is("disabled", E(i)),
        E(l).is("loading", f.loading),
        E(l).is("plain", f.plain),
        E(l).is("round", f.round),
        E(l).is("circle", f.circle),
        E(l).is("text", f.text),
        E(l).is("link", f.link),
        E(l).is("has-bg", f.bg)
      ],
      style: E(o),
      onClick: E(g)
    }), {
      default: k(() => [
        f.loading ? (v(), w(A, { key: 0 }, [
          f.$slots.loading ? T(f.$slots, "loading", { key: 0 }) : (v(), z(E(Qe), {
            key: 1,
            class: x(E(l).is("loading"))
          }, {
            default: k(() => [
              (v(), z(Ee(f.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : f.icon || f.$slots.icon ? (v(), z(E(Qe), { key: 1 }, {
          default: k(() => [
            f.icon ? (v(), z(Ee(f.icon), { key: 0 })) : T(f.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : j("v-if", !0),
        f.$slots.default ? (v(), w("span", {
          key: 2,
          class: x({ [E(l).em("text", "expand")]: E(d) })
        }, [
          T(f.$slots, "default")
        ], 2)) : j("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var Bo = /* @__PURE__ */ ge(Mo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const zo = {
  size: Ze.size,
  type: Ze.type
}, xo = B({
  name: "ElButtonGroup"
}), Ho = /* @__PURE__ */ B({
  ...xo,
  props: zo,
  setup(e) {
    const n = e;
    et(qt, Nt({
      size: Fe(n, "size"),
      type: Fe(n, "type")
    }));
    const t = ve("button");
    return (a, o) => (v(), w("div", {
      class: x(`${E(t).b("group")}`)
    }, [
      T(a.$slots, "default")
    ], 2));
  }
});
var Xt = /* @__PURE__ */ ge(Ho, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const Io = Ke(Bo, {
  ButtonGroup: Xt
});
Ba(Xt);
function Do(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = {
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
  e.default = n;
})(Zt);
const Jt = /* @__PURE__ */ Do(Zt);
const Po = B({
  name: "KPage",
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: !1 },
    small: { type: Boolean, default: !1 },
    pagerCount: { type: Number, default: 7 }
  },
  components: { ElConfigProvider: Yt },
  emits: ["update:modelValue", "update:size", "current-change", "size-change", "change"],
  setup(e, { emit: n }) {
    const t = Jt, a = y(() => {
      const { total: u, size: i, showSize: c } = e;
      return c ? !0 : u > i;
    }), o = y({
      get() {
        return e.modelValue;
      },
      set(u) {
        n("update:modelValue", u);
      }
    }), l = y(() => {
      const u = ["total", "sizes", "prev", "pager", "next", "jumper"];
      return e.showSize || u.splice(1, 1), u.join(",");
    });
    return {
      locale: t,
      currentPage: o,
      layoutList: l,
      handleSizeChange: (u) => {
        o.value = 1, n("update:size", u), n("size-change", u), n("change", { page: e.size === u ? o.value : 1, size: u });
      },
      handleCurrentChange: (u) => {
        n("current-change", u), n("change", { page: u, size: e.size });
      },
      showPage: a
    };
  }
}), Oo = {
  key: 0,
  class: "page-right mt20"
};
function Ao(e, n, t, a, o, l) {
  const s = V("el-pagination"), r = V("el-config-provider");
  return e.showPage ? (v(), w("div", Oo, [
    N(r, { locale: e.locale }, {
      default: k(() => [
        N(s, {
          onSizeChange: e.handleSizeChange,
          onCurrentChange: e.handleCurrentChange,
          currentPage: e.currentPage,
          "onUpdate:currentPage": n[0] || (n[0] = (u) => e.currentPage = u),
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
const de = /* @__PURE__ */ D(Po, [["render", Ao], ["__scopeId", "data-v-77c509db"]]);
de.install = function(e) {
  e.component(de.name, de);
};
const Ro = B({
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
  setup(e, { emit: n }) {
    const t = y({
      get: () => e.tableData,
      set: (r) => n("update:tableData", r)
    }), a = y({
      get: () => e.modelValue,
      set: (r) => n("update:modelValue", r)
    }), o = (r) => n("current-change", r), l = ({ column: r, order: u }) => {
      const i = u === "ascending" ? 1 : 0;
      n("sort-change", {
        prop: r == null ? void 0 : r.rawColumnKey,
        order: u,
        sortType: i,
        currentPage: a.value,
        column: r,
        sortColumn: r == null ? void 0 : r.rawColumnKey
      });
    }, s = _(null);
    return {
      currentPage: a,
      tableDataList: t,
      changePage: o,
      sortChange: l,
      instance: s,
      elTable: s
    };
  }
}), Fo = { key: 2 };
function Lo(e, n, t, a, o, l) {
  const s = V("el-table-column"), r = V("el-table"), u = V("pagination");
  return v(), w(A, null, [
    N(r, O({
      data: e.tableDataList,
      style: { width: "100%" },
      class: "mt20",
      "header-cell-style": e.headerCellStyle
    }, e.$attrs, {
      "empty-text": e.emptyText,
      onSortChange: e.sortChange,
      ref: "elTable"
    }), fe({
      default: k(() => [
        (v(!0), w(A, null, Q(e.tableColumn, (i) => (v(), z(s, {
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
          default: k((c) => [
            e.$slots.default ? T(e.$slots, "default", {
              key: 0,
              item: c.row,
              row: c.row,
              index: c.$index
            }) : i.custom && c.$index >= 0 ? T(e.$slots, i.custom, {
              key: 1,
              item: c.row,
              row: c.row,
              index: c.$index
            }) : (v(), w("span", Fo, K(c.row[i.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          i.header ? {
            name: "header",
            fn: k(() => [
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
        fn: k(() => [
          T(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "empty-text", "onSortChange"]),
    N(u, {
      total: e.total,
      size: e.size,
      "show-size": e.showSize,
      modelValue: e.currentPage,
      "onUpdate:modelValue": n[0] || (n[0] = (i) => e.currentPage = i),
      onCurrentChange: e.changePage
    }, null, 8, ["total", "size", "show-size", "modelValue", "onCurrentChange"])
  ], 64);
}
const Ne = /* @__PURE__ */ D(Ro, [["render", Lo]]);
Ne.install = function(e) {
  e.component(Ne.name, Ne);
};
const Ko = B({
  name: "KVirtualList",
  components: { ElScrollbar: io },
  props: {
    height: { type: String, default: "500px" },
    rowStyle: { type: Object, default: () => ({}) },
    rowClassName: { type: [Function, String, Object], default: "" },
    data: { type: Array, default: () => [] }
  },
  emits: ["scroll", "row-click"],
  setup(e, { emit: n }) {
    const t = _(0), a = _(0), o = _(null), l = _(10), s = () => {
      var p, b;
      return ((p = document.querySelector(".table-row")) == null ? void 0 : p.offsetHeight) ?? ((b = document.querySelector(".list-item")) == null ? void 0 : b.offsetHeight) ?? 10;
    }, r = () => {
      const { clientHeight: p = 100 } = o.value.wrapRef || {};
      return Math.ceil(p / s()) + t.value;
    }, u = _(100);
    he(() => {
      l.value = Number(r()) || 10, u.value = e.data.length * s();
    });
    const i = (p) => Math.floor(p / s()), c = (p) => Math.ceil(p * s()), d = (p) => p >= t.value && p <= l.value, g = y(() => e.data.filter((p, b) => d(b)));
    return q(() => e.data, (p) => {
      p.length || (t.value = 0, a.value = 0), e.data.forEach((b, $) => {
        b.rowIndex = $;
      }), oe(() => {
        u.value = e.data.length * s();
      });
    }), {
      startIndex: t,
      endIndex: l,
      startOffset: a,
      viewport: o,
      onScroll: (p) => {
        const { scrollTop: b, clientHeight: $ } = o.value.wrapRef;
        t.value = i(b), a.value = c(t.value), l.value = r();
        const H = Math.abs(u.value - $ - b);
        n("scroll", { distance: H, ...p });
      },
      showViewRanges: d,
      containHeight: u,
      listRanges: g,
      rowClick: (p, b) => {
        n("row-click", p, b);
      },
      rowClassHandle: (p, b) => typeof e.rowClassName == "function" ? e.rowClassName({ row: p, rowIndex: b }) : e.rowClassName
    };
  }
}), jo = {
  class: "virtual-list",
  "data-testid": "virtual-list"
}, Yo = ["onClick"];
function Uo(e, n, t, a, o, l) {
  const s = V("el-scrollbar");
  return v(), z(s, O({
    height: e.height,
    ref: "viewport"
  }, e.$attrs, { onScroll: e.onScroll }), {
    default: k(() => [
      S("div", jo, [
        S("div", {
          class: "list-contain",
          style: G({ height: `${e.containHeight}px` })
        }, null, 4),
        S("div", {
          class: "list-content",
          style: G({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          (v(!0), w(A, null, Q(e.listRanges, (r, u) => (v(), w("div", {
            key: u,
            class: x(["list-item", e.rowClassHandle(r, r.rowIndex)]),
            style: G(e.rowStyle),
            onClick: (i) => e.rowClick(r, r.rowIndex)
          }, [
            T(e.$slots, "default", {
              row: r,
              index: r.rowIndex
            }, () => [
              X(K(r.name), 1)
            ], !0)
          ], 14, Yo))), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["height", "onScroll"]);
}
const _e = /* @__PURE__ */ D(Ko, [["render", Uo], ["__scopeId", "data-v-e53aecaa"]]);
_e.install = function(e) {
  e.component(_e.name, _e);
};
const Wo = {
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
const Go = B({
  name: "KTableV2",
  components: { virtualList: _e },
  props: Wo,
  emits: ["sort-change"],
  setup(e, { emit: n }) {
    const t = y(() => e.tableColumn.map((g, f) => ({ ...g, keyId: f }))), a = _(null), o = (g) => {
      var $, H, Y, U;
      let f = {};
      const {
        align: h,
        width: m,
        fixed: p,
        minWidth: b
      } = g;
      if (h && (f["text-center"] = `${h}`), b && (f["min-width"] = `${b}`), m && (f = {
        ...f,
        width: `${m}`,
        flex: "inherit",
        "flex-shrink": 0
      }), p) {
        const M = e.tableColumn.findIndex((I) => I.prop === g.prop), C = e.tableColumn.length;
        if (f = {
          ...f,
          position: "sticky",
          background: "#ffffff",
          "z-index": 5
        }, p === "left") {
          const I = ($ = e.tableColumn.filter((R) => R.fixed === "left")) == null ? void 0 : $.length;
          let F = 0;
          M > 0 && M < C - 1 && I > 1 && (F = (H = a.value) == null ? void 0 : H.at(M - 1).clientWidth), f.left = `${F}px`;
          let J = 0;
          e.tableColumn.forEach((R, ue) => {
            R.fixed === "left" && (J = ue);
          }), J === M && (f["box-shadow"] = "3px 0px 4px #b0a8a836");
        } else {
          const I = (Y = e.tableColumn.filter((R) => R.fixed && R.fixed !== "left")) == null ? void 0 : Y.length;
          let F = 0;
          M < C - 1 && I > 1 && (F = (U = a.value) == null ? void 0 : U.at(M + 1).clientWidth), e.tableColumn.findIndex((R) => R.fixed && R.fixed !== "left") === M && (f["box-shadow"] = "-3px 0 4px #b0a8a836"), f.right = `${F}px`;
        }
      }
      return f;
    }, l = _(null), s = ({ scrollLeft: g }) => {
      l.value.scrollLeft = `${g}`;
    }, r = _(null), u = _({}), i = (g, f) => {
      u.value = f, r.value = r.value === g ? null : g, n("sort-change", { column: f, sortType: r.value });
    }, c = _(null), d = (g) => {
      var f;
      return (f = c.value) == null ? void 0 : f.viewport.setScrollTop(g);
    };
    return {
      ...fn(e),
      columnList: t,
      headerClass: o,
      tableHeader: l,
      scrollHandle: s,
      headerColmn: a,
      sortType: r,
      clickSortCaret: i,
      selectedRow: u,
      virtualRef: c,
      setScrollTop: d
    };
  }
}), qo = { class: "table-v2 el-table flex-column" }, Qo = {
  class: "table-header overflow",
  ref: "tableHeader"
}, Xo = { class: "flex table-border-bottom header-content" }, Zo = {
  key: 0,
  class: "table-header-sort flex-column flex-center"
}, Jo = { class: "sort-wrapper" }, el = ["onClick"], tl = ["onClick"], nl = { class: "flex table-body" };
function al(e, n, t, a, o, l) {
  const s = V("virtualList");
  return v(), w("div", qo, [
    S("div", Qo, [
      S("div", Xo, [
        (v(!0), w(A, null, Q(e.tableColumn, (r, u) => (v(), w("div", {
          key: u,
          class: "header-column cell flex-align-center",
          ref_for: !0,
          ref: "headerColmn",
          style: G([e.headerClass(r), e.headerCellStyle])
        }, [
          T(e.$slots, (r == null ? void 0 : r.header) ?? "default", {}, () => [
            X(K(r.label), 1)
          ], !0),
          r.sortable ? (v(), w("div", Zo, [
            S("span", Jo, [
              S("i", {
                class: x(["sort-caret ascending", { "bottom-caret": e.sortType === "ascending" && e.selectedRow.prop == r.prop }]),
                onClick: (i) => e.clickSortCaret("ascending", r)
              }, null, 10, el),
              S("i", {
                class: x(["sort-caret descending", { "top-caret": e.sortType === "descending" && e.selectedRow.prop == r.prop }]),
                onClick: (i) => e.clickSortCaret("descending", r)
              }, null, 10, tl)
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
      default: k(({ row: r, index: u }) => [
        T(e.$slots, "content", {}, () => [
          S("div", nl, [
            (v(!0), w(A, null, Q(e.columnList, (i) => (v(), w("div", {
              key: i.keyId,
              class: "cell table-row table-border-bottom flex-align-center",
              ref_for: !0,
              ref: "bodyCell",
              style: G(e.headerClass(i))
            }, [
              S("div", {
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
const Me = /* @__PURE__ */ D(Go, [["render", al], ["__scopeId", "data-v-f3e2be24"]]);
Me.install = function(e) {
  e.component(Me.name, Me);
};
const ol = {
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
}, ll = B({
  name: "KBatchTable",
  components: { pagination: de },
  props: ol,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { emit: n }) {
    const t = _(null), a = () => t.value.clearSelection(), o = (h) => {
      h ? e.tableData.forEach((m) => {
        h.forEach((p) => {
          f(m) === f(p) && oe(() => t.value && t.value.toggleRowSelection(m));
        });
      }) : (l.value = [], t.value.clearSelection());
    }, l = y({
      get: () => e.modelValue,
      set: (h) => n("update:modelValue", h)
    });
    q(() => e.modelValue, (h) => {
      !h.length && t.value && t.value.clearSelection();
    });
    const s = () => {
      setTimeout(() => {
        e.selectList.length && (e.tableData.forEach((h) => {
          h[e.checkKey] = h[e.checkKey] ?? 1;
        }), e.selectList.forEach((h) => {
          e.tableData.forEach((m) => {
            f(h) === f(m) && (m[e.checkKey] = 0);
          });
        }), o(l.value));
      }, 200);
    };
    q(() => e.tableData, (h) => {
      oe(() => {
        h.length && s(), h.length && o(l.value);
      });
    }, { immediate: !0 });
    const r = (h, m) => {
      h.some((b) => f(b) === f(m)) ? l.value = [...l.value, m] : l.value = l.value.filter((b) => f(b) !== f(m));
    }, u = (h) => {
      if (l.value.length)
        if (h.length) {
          const m = h.filter((p) => l.value.every((b) => f(b) !== f(p)));
          l.value = [...l.value, ...m];
        } else
          l.value = l.value.filter((m) => e.tableData.every((p) => f(m) !== f(p)));
      else
        l.value = h;
    }, i = (h) => {
      if (!c(h))
        return;
      const m = l.value.some((p) => f(p) === f(h));
      o([h]), m ? l.value = l.value.filter((p) => f(p) !== f(h)) : l.value = [...l.value, h], n("row-click", h);
    }, c = (h) => h[e.checkKey] ?? !h[e.checkKey], d = y({
      get: () => e.page,
      set: (h) => n("update:page", h)
    }), g = (h) => {
      n("current-change", h);
    }, f = (h) => h[e.keyId];
    return {
      multipleTable: t,
      handleSelect: r,
      selectAll: u,
      handleRowClick: i,
      checkSelection: c,
      toggleSelection: o,
      currentPage: d,
      changePage: g,
      clear: a
    };
  }
}), rl = { key: 2 }, sl = { class: "mt20 flex-between" }, ul = { class: "flex1" };
function il(e, n, t, a, o, l) {
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
      default: k(() => [
        N(s, {
          type: "selection",
          width: "55",
          selectable: e.checkSelection
        }, null, 8, ["selectable"]),
        (v(!0), w(A, null, Q(e.tableColumn, (i) => (v(), z(s, {
          label: i.label,
          key: i.prop,
          width: i.width,
          fixed: i.fixed,
          "min-width": i.minWidth,
          "show-overflow-tooltip": ""
        }, fe({
          default: k((c) => [
            e.$slots.default ? T(e.$slots, "default", {
              key: 0,
              item: c.row,
              row: c.row,
              column: i,
              index: c.$index
            }) : j("", !0),
            i.custom && c.$index >= 0 ? T(e.$slots, i.custom, {
              key: 1,
              item: c.row,
              column: i,
              row: c.row,
              index: c.$index
            }) : (v(), w("span", rl, K(c.row[i.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          i.header ? {
            name: "header",
            fn: k(() => [
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
        fn: k(() => [
          T(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "onSelect", "onSelectAll", "onRowClick"]),
    S("div", sl, [
      S("div", ul, [
        e.$slots.footer ? T(e.$slots, "footer", { key: 0 }) : j("", !0)
      ]),
      N(u, {
        total: e.total,
        "show-size": e.showSize,
        class: "mt0 ml20",
        modelValue: e.currentPage,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => e.currentPage = i),
        onCurrentChange: e.changePage
      }, null, 8, ["total", "show-size", "modelValue", "onCurrentChange"])
    ])
  ], 64);
}
const we = /* @__PURE__ */ D(ll, [["render", il]]);
we.install = function(e) {
  e.component(we.name, we);
};
const cl = B({
  name: "KDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { type: String, default: "提示" },
    showFooter: { type: Boolean, default: !0 },
    customClass: { type: String, default: "" },
    class: { type: String, default: "" },
    confirmDisabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "confirm", "open", "close"],
  setup(e, { emit: n }) {
    const t = y({
      get: () => e.modelValue,
      set: (r) => n("update:modelValue", r)
    }), a = y(() => e.class ? e.class : e.customClass ? e.customClass : e.showFooter ? "custom-dialog" : "custom-dialog no-footer");
    return {
      dialogVisible: t,
      customClassName: a,
      closeHandle: () => {
        n("close"), parent.window.postMessage("closeMask()", "*"), window.top.postMessage("closeMask()", "*");
      },
      openHandler: () => {
        n("open"), parent.window.postMessage("openMask()", "*"), window.top.postMessage("openMask()", "*");
      },
      confirmHandler: () => {
        n("confirm");
      }
    };
  }
}), dl = /* @__PURE__ */ S("span", null, "这是一段信息", -1), fl = { class: "dialog-footer" };
function pl(e, n, t, a, o, l) {
  const s = V("el-button"), r = V("el-dialog");
  return v(), z(r, O({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": n[1] || (n[1] = (u) => e.dialogVisible = u),
    class: e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), fe({
    default: k(() => [
      T(e.$slots, "default", {}, () => [
        dl
      ])
    ]),
    _: 2
  }, [
    e.showFooter ? {
      name: "footer",
      fn: k(() => [
        T(e.$slots, "footer", {}, () => [
          S("span", fl, [
            N(s, {
              size: "large",
              onClick: n[0] || (n[0] = (u) => e.dialogVisible = !1)
            }, {
              default: k(() => [
                X("取 消")
              ]),
              _: 1
            }),
            N(s, {
              size: "large",
              type: "primary",
              disabled: e.confirmDisabled,
              onClick: e.confirmHandler
            }, {
              default: k(() => [
                X("确 定")
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
const Be = /* @__PURE__ */ D(cl, [["render", pl]]);
Be.install = function(e) {
  e.component(Be.name, Be);
};
const hl = B({
  name: "KBreadcrumb",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = pe().appContext.config.globalProperties.$router;
    return { clickHandle: (o, l) => {
      if (o.url) {
        window.location.href = o.url;
        return;
      }
      o.path ? t == null || t.push(o.path) : t == null || t.go(l - e.list.length + 1);
    } };
  }
}), ml = { class: "crumb-header flex-between" }, vl = { class: "crumb-contain" }, gl = ["onClick"];
function bl(e, n, t, a, o, l) {
  const s = V("el-space");
  return v(), w("div", ml, [
    S("div", vl, [
      N(s, { spacer: "/" }, {
        default: k(() => [
          (v(!0), w(A, null, Q(e.list, (r, u) => (v(), w("span", {
            key: u,
            class: x({ "crumb-item": u !== e.list.length - 1 }),
            onClick: (i) => e.clickHandle(r, u)
          }, K(r.title), 11, gl))), 128))
        ]),
        _: 1
      })
    ]),
    T(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ze = /* @__PURE__ */ D(hl, [["render", bl], ["__scopeId", "data-v-4520378f"]]);
ze.install = function(e) {
  e.component(ze.name, ze);
};
const yl = B({
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
  setup(e, { emit: n }) {
    const t = pe(), a = y(() => t.appContext.config.globalProperties.$route), o = t.appContext.config.globalProperties.$router, l = y(() => {
      var i, c;
      return ((i = a.value) == null ? void 0 : i.params.type) || ((c = a.value) == null ? void 0 : c.name);
    }), s = _(l.value);
    ke(() => {
      s.value = e.modelValue || l.value, n("update:modelValue", s.value);
    });
    const r = y(() => a.value.query);
    return { activeName: s, handleClick: (i) => {
      if (e.isRouter) {
        const c = { path: `${i.paneName}`, query: r.value };
        e.replace ? o.replace(c) : o.push(c);
      }
      n("tab-click", i.paneName), n("change", i.paneName), n("update:modelValue", i.paneName);
    } };
  }
}), _l = { class: "tabs-right ml10" };
function wl(e, n, t, a, o, l) {
  const s = V("el-tab-pane"), r = V("el-tabs");
  return v(), w("div", {
    class: x(["k-tabs", { "style-card": !e.type, "style-padding": e.isPadding && !e.type }])
  }, [
    N(r, O({
      class: "flex-tabs",
      type: e.type
    }, e.$attrs, {
      modelValue: e.activeName,
      "onUpdate:modelValue": n[0] || (n[0] = (u) => e.activeName = u),
      onTabClick: e.handleClick
    }), {
      default: k(() => [
        (v(!0), w(A, null, Q(e.tabsList, (u) => (v(), z(s, {
          label: u.label,
          name: u.name,
          key: u.name
        }, null, 8, ["label", "name"]))), 128))
      ]),
      _: 1
    }, 16, ["type", "modelValue", "onTabClick"]),
    S("div", _l, [
      T(e.$slots, "default")
    ])
  ], 2);
}
const xe = /* @__PURE__ */ D(yl, [["render", wl]]);
xe.install = function(e) {
  e.component(xe.name, xe);
};
const $l = B({
  name: "KPicker",
  components: { batchTable: we, Delete: Dn },
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
  setup(e, { emit: n }) {
    const t = y({
      get: () => e.modelValue,
      set: (c) => n("update:modelValue", c)
    });
    ke(() => {
      e.showCount && t.value.forEach((c) => {
        c.num = c.num ?? 1;
      });
    });
    const a = _(null), o = () => a.value.toggleSelection(), l = (c) => a.value.handleRowClick(c), s = _(1);
    return {
      multipleSelection: t,
      batchTableRef: a,
      currentPage: s,
      emptyHandler: o,
      resetData: () => {
        s.value = 1, o();
      },
      deleteHandler: l,
      getName: (c) => c[e.keyName],
      getId: (c) => c[e.keyId]
    };
  }
}), kl = { class: "k-picker" }, Sl = { class: "col-left" }, Cl = { class: "col-right" }, El = { class: "selete-header flex-between" }, Vl = { class: "selete-content" }, Tl = { class: "flex flex1 mr20 overflow" }, Nl = { class: "text-overflow" };
function Ml(e, n, t, a, o, l) {
  const s = V("batchTable"), r = V("el-col"), u = V("delete"), i = V("el-icon"), c = V("el-button"), d = V("el-tooltip"), g = V("el-input-number"), f = V("el-row");
  return v(), w("div", kl, [
    T(e.$slots, "top", {}, void 0, !0),
    N(f, { gutter: 10 }, {
      default: k(() => [
        N(r, { span: 15 }, {
          default: k(() => [
            S("div", Sl, [
              N(s, {
                ref: "batchTableRef",
                height: "440px",
                "table-data": e.tableData,
                "table-column": e.tableColumn,
                "select-list": e.selectList,
                "key-id": e.keyId,
                modelValue: e.multipleSelection,
                "onUpdate:modelValue": n[0] || (n[0] = (h) => e.multipleSelection = h),
                page: e.currentPage,
                "onUpdate:page": n[1] || (n[1] = (h) => e.currentPage = h)
              }, {
                header: k(({ column: h }) => [
                  T(e.$slots, h.header, { column: h }, void 0, !0)
                ]),
                default: k(({ row: h, column: m, index: p }) => [
                  m.custom && p >= 0 ? T(e.$slots, m.custom, {
                    key: 0,
                    row: h,
                    index: p
                  }, void 0, !0) : j("", !0)
                ]),
                _: 3
              }, 8, ["table-data", "table-column", "select-list", "key-id", "modelValue", "page"])
            ])
          ]),
          _: 3
        }),
        N(r, { span: 9 }, {
          default: k(() => [
            T(e.$slots, "right", {}, () => [
              S("div", Cl, [
                S("div", El, [
                  T(e.$slots, "right-header", {}, () => [
                    S("span", null, [
                      X("已选择"),
                      S("span", null, "(" + K(e.multipleSelection.length) + ")", 1)
                    ]),
                    N(c, {
                      text: "",
                      disabled: !e.multipleSelection.length,
                      onClick: e.emptyHandler
                    }, {
                      default: k(() => [
                        N(i, null, {
                          default: k(() => [
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
                S("div", Vl, [
                  (v(!0), w(A, null, Q(e.multipleSelection, (h) => (v(), w("div", {
                    class: x(["flex-between pl10 pr10", { mt10: e.showCount }]),
                    key: e.getId(h)
                  }, [
                    S("div", Tl, [
                      N(d, {
                        effect: "dark",
                        content: e.getName(h),
                        placement: "top"
                      }, {
                        default: k(() => [
                          S("span", Nl, K(e.getName(h)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ]),
                    e.showCount ? (v(), z(g, {
                      key: 0,
                      modelValue: h.num,
                      "onUpdate:modelValue": (m) => h.num = m,
                      min: 1,
                      class: "width-100 flex-shrink mr10"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                    N(c, {
                      text: "",
                      onClick: (m) => e.deleteHandler(h)
                    }, {
                      default: k(() => [
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
const He = /* @__PURE__ */ D($l, [["render", Ml], ["__scopeId", "data-v-3723b329"]]);
He.install = function(e) {
  e.component(He.name, He);
};
const Bl = B({
  name: "KTooltip",
  props: {
    placement: { type: String, default: "top" },
    showIcon: { type: Boolean, default: !1 },
    overflow: { type: Boolean, default: !1 }
  },
  components: { Warning: ra }
});
function zl(e, n, t, a, o, l) {
  const s = V("warning"), r = V("el-icon"), u = V("el-tooltip");
  return v(), w("div", {
    class: x(["flex flex1", { "text-overflow": e.overflow }])
  }, [
    N(u, O(e.$attrs, { placement: e.placement }), {
      content: k(() => [
        T(e.$slots, "content", {}, void 0, !0)
      ]),
      default: k(() => [
        S("div", {
          class: x(["flex-center", { "text-overflow": e.overflow }])
        }, [
          T(e.$slots, "default", {}, void 0, !0),
          e.showIcon ? (v(), z(r, {
            key: 0,
            class: "ml5"
          }, {
            default: k(() => [
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
const Ie = /* @__PURE__ */ D(Bl, [["render", zl], ["__scopeId", "data-v-d468c200"]]);
Ie.install = function(e) {
  e.component(Ie.name, Ie);
};
const xl = {
  __name: "main",
  setup(e) {
    return (n, t) => (v(), z(E(Yt), { locale: E(Jt) }, {
      default: k(() => [
        T(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale"]));
  }
}, en = {
  __name: "datePicker",
  props: {
    type: { type: String, default: "daterange" },
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, a = y(() => t.type === "datetimerange" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"), o = (c) => {
      const d = /* @__PURE__ */ new Date(), g = /* @__PURE__ */ new Date();
      return d.setTime(d.getTime() - 3600 * 1e3 * 24 * c), t.type === "date" ? d : [d, g];
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
    ], s = [new Date(2e3, 1, 1, 0, 0, 0), new Date(2e3, 2, 1, 23, 59, 59)], r = y({
      get: () => t.modelValue,
      set: (c) => n("update:modelValue", c)
    }), u = (c) => c.getTime() > Date.now(), i = (c) => n("change", c);
    return (c, d) => {
      const g = V("el-date-picker");
      return v(), z(g, {
        modelValue: r.value,
        "onUpdate:modelValue": d[0] || (d[0] = (f) => r.value = f),
        type: e.type,
        "unlink-panels": "",
        "range-separator": "至",
        "start-placeholder": "开始日期",
        "end-placeholder": "结束日期",
        shortcuts: l,
        format: a.value,
        "value-format": "YYYY-MM-DD HH:mm:ss",
        "disabled-date": u,
        "default-time": s,
        editable: !1,
        clearable: !1,
        onChange: i
      }, null, 8, ["modelValue", "type", "format"]);
    };
  }
}, Hl = { class: "date-picker flex" }, Il = {
  __name: "selectType",
  props: {
    daterange: { type: Boolean, default: !1 },
    // 是否选择模式下 是否日期范围
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, a = _(0), o = _([
      { value: 0, label: "日" },
      { value: 1, label: "周" },
      { value: 2, label: "月" },
      { value: 3, label: "年" }
    ]), l = y({
      get: () => t.modelValue,
      set: (f) => n("update:modelValue", f)
    }), s = (f) => f.getTime() > Date.now(), r = y(() => ({
      0: "YYYY-MM-DD",
      1: "YYYY 第 ww 周",
      2: "YYYY-MM",
      3: "YYYY"
    })[a.value]), u = y(() => ({
      0: t.daterange ? "daterange" : "date",
      1: "week",
      2: "month",
      3: "year"
    })[a.value]), i = y(() => {
      const { label: f } = o.value.filter((h) => h.value === a.value)[0];
      return `选择${f}`;
    }), c = _("");
    ke(() => {
      if (Array.isArray(l.value)) {
        const [f, h] = l.value;
        c.value = [f, h];
      }
    });
    const d = (f) => {
      if (f) {
        if (Array.isArray(l.value)) {
          const [h] = l.value;
          l.value = h;
        }
      } else
        t.daterange && (l.value = c.value);
      g();
    }, g = () => {
      n("change", { type: a.value, time: l.value });
    };
    return (f, h) => {
      const m = V("el-option"), p = V("el-select"), b = V("el-date-picker");
      return v(), w("div", Hl, [
        N(p, {
          modelValue: a.value,
          "onUpdate:modelValue": h[0] || (h[0] = ($) => a.value = $),
          class: "width-100 mr10",
          onChange: d
        }, {
          default: k(() => [
            (v(!0), w(A, null, Q(o.value, ($) => (v(), z(m, {
              key: $.value,
              label: $.label,
              value: $.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        S("div", null, [
          e.daterange && !a.value ? (v(), z(en, O({
            key: 0,
            modelValue: l.value,
            "onUpdate:modelValue": h[1] || (h[1] = ($) => l.value = $)
          }, f.$props, { onChange: g }), null, 16, ["modelValue"])) : (v(), z(b, {
            key: 1,
            modelValue: l.value,
            "onUpdate:modelValue": h[2] || (h[2] = ($) => l.value = $),
            type: u.value,
            format: r.value,
            "value-format": "YYYY-MM-DD HH:mm:ss",
            placeholder: i.value,
            "disabled-date": s,
            clearable: !1,
            editable: !1,
            "start-placeholder": "开始日期",
            "end-placeholder": "结束日期",
            onChange: g
          }, null, 8, ["modelValue", "type", "format", "placeholder"]))
        ])
      ]);
    };
  }
}, Dl = B({
  name: "KDatePicker",
  props: {
    selectType: { type: Boolean, default: !1 }
    // 是否选择模式（年月日）
    // daterange: { type: Boolean, default: false }, // 是否选择模式下 是否日期范围
  },
  components: { configProvider: xl, selectType: Il, datePicker: en },
  setup() {
  }
});
function Pl(e, n, t, a, o, l) {
  const s = V("selectType"), r = V("datePicker"), u = V("config-provider");
  return v(), z(u, null, {
    default: k(() => [
      e.selectType ? (v(), z(s, st(O({ key: 0 }, e.$attrs)), null, 16)) : (v(), z(r, st(O({ key: 1 }, e.$attrs)), null, 16))
    ]),
    _: 1
  });
}
const De = /* @__PURE__ */ D(Dl, [["render", Pl]]);
De.install = function(e) {
  e.component(De.name, De);
};
const lt = B({
  name: "KNumberKeyboard",
  components: { ElButton: Io },
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
  setup(e, { emit: n }) {
    const t = [
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
    ], a = y(() => (e.decimalPoint && t.push({ name: "." }), t)), o = y({
      get: () => e.modelValue,
      set: (g) => n("update:modelValue", g)
    }), l = () => {
      oe(() => n("change", o.value));
    }, s = (g) => {
      if (e.maxlength && o.value.length >= Number(e.maxlength))
        return;
      const f = o.value.indexOf("."), h = o.value.split(".");
      h.length === 2 && (g === "." || h[1].length >= e.precision) || (o.value = `${f === 0 ? 0 : ""}${o.value}${g}`, !e.startZero && o.value.slice(0, 1) === "0" && (o.value = o.value.slice(1) + g), l());
    }, r = (g) => {
      g === "delete" ? o.value = o.value.slice(0, o.value.length - 1) : g === "clear" && (o.value = "", n("clear")), g === "confirm" ? n("confirm") : l();
    }, u = ({ key: g, name: f }) => {
      g ? r(g) : s(f);
    }, i = y(() => `${Number(4 * e.width + 20)}px`), c = y(() => `${e.width}px`), d = y(() => e.decimalPoint ? 3 : 4);
    return {
      keyboardList: a,
      clickHandleBtn: u,
      clickBtn: s,
      totalwidth: i,
      gridwidth: c,
      numberVal: o,
      zerogridend: d
    };
  }
}), St = () => {
  Bt((e) => ({
    "5f76155e": e.totalwidth,
    af867fde: e.gridwidth,
    c0d11484: e.zerogridend
  }));
}, Ct = lt.setup;
lt.setup = Ct ? (e, n) => (St(), Ct(e, n)) : St;
const Ol = { class: "number-keyboard mt10" }, Al = { class: "number-ul" };
function Rl(e, n, t, a, o, l) {
  const s = V("el-button");
  return v(), w("div", Ol, [
    S("ul", Al, [
      (v(!0), w(A, null, Q(e.keyboardList, (r, u) => (v(), w("li", {
        key: u,
        class: x(r.class)
      }, [
        N(s, {
          type: r.type,
          color: e.color,
          onClick: (i) => e.clickHandleBtn(r)
        }, {
          default: k(() => [
            X(K(r.name), 1)
          ]),
          _: 2
        }, 1032, ["type", "color", "onClick"])
      ], 2))), 128))
    ])
  ]);
}
const Pe = /* @__PURE__ */ D(lt, [["render", Rl], ["__scopeId", "data-v-2e1be318"]]);
Pe.install = function(e) {
  e.component(Pe.name, Pe);
};
const Fl = B({
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
  setup(e, { emit: n }) {
    const t = y({
      get: () => e.modelValue,
      set: (r) => n("update:modelValue", r)
    }), a = (r) => e.decimals ? Number(r).toFixed(e.decimals) : r, o = _(null), l = (r = !0) => {
      const u = o.value;
      if (!u)
        return;
      const i = +u.innerText, c = +t.value / 200, d = r && i < Number(t.value) || !r && i > Number(t.value);
      r && i > e.end || i < e.start || (d ? s(u, r ? i + c : i - c, r) : u.interText = a(t.value));
    }, s = (r, u, i = !0) => {
      const c = u < e.start ? e.start : `${e.decimals ? u : Math.floor(u)}`, d = u > e.end ? e.end : `${e.decimals ? u : Math.ceil(u)}`;
      r.innerText = a(i ? d : c);
      const g = setTimeout(() => {
        clearTimeout(g), i ? l() : l(!1);
      }, 5);
    };
    return he(() => {
      o.value && e.autoinit && l();
    }), Mt(() => {
      if (e.autoinit) {
        const r = +o.value.innerText;
        l(r < Number(t.value));
      }
    }), { textValue: t, spanText: o, setDeimals: a };
  }
}), Ll = { class: "auto-counter" }, Kl = { class: "mr5" }, jl = { class: "ml5" };
function Yl(e, n, t, a, o, l) {
  return v(), w("div", Ll, [
    S("span", Kl, K(e.prefix), 1),
    S("span", {
      class: "span-text",
      ref: "spanText"
    }, K(e.autoinit ? e.setDeimals(e.start) : e.setDeimals(e.textValue)), 513),
    S("span", jl, K(e.suffix), 1)
  ]);
}
const Oe = /* @__PURE__ */ D(Fl, [["render", Yl]]);
Oe.install = function(e) {
  e.component(Oe.name, Oe);
};
const Ul = B({
  name: "KCollapseButton",
  components: { ElIcon: Qe, CaretLeft: Sn, CaretRight: Mn },
  props: {
    style: { type: Object, default: () => ({}) },
    position: { type: String, default: "right" }
  },
  emits: ["click"],
  setup(e, { emit: n, slots: t }) {
    const a = _(!1), o = _(null);
    he(() => {
      const { parentNode: r } = o.value;
      r.style.position = "relative", r.style.overflow = "initial";
    });
    const l = y(() => {
      const { clientWidth: r, clientHeight: u } = o.value || {}, {
        top: i,
        right: c,
        width: d,
        height: g,
        left: f,
        bottom: h
      } = e.style, m = {
        right: {
          top: i ?? "50%",
          right: c ?? `-${r}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: i ? "0px" : `-${Math.ceil(u / 2)}px`
        },
        left: {
          top: i ?? "50%",
          left: f ?? `-${r}px`,
          borderRadius: "5px 0 0 5px",
          marginTop: i ? "0px" : `-${Math.ceil(u / 2)}px`
        },
        top: {
          left: f ?? "50%",
          marginLeft: f ?? (t == null ? void 0 : t.default) ? `-${Math.ceil(r / 2)}px` : "0px",
          top: i ?? (t == null ? void 0 : t.default) ? `-${u}px` : `-${Math.ceil(u / 2 + r / 2)}px`,
          borderRadius: t != null && t.default ? "5px 5px 0 0" : "0 5px 5px 0",
          transform: t != null && t.default ? "" : "rotate(-90deg)"
        },
        bottom: {
          left: f ?? "50%",
          bottom: h ?? (t == null ? void 0 : t.default) ? `-${u}px` : `-${Math.ceil(u / 2 + r / 2)}px`,
          marginLeft: f ?? (t == null ? void 0 : t.default) ? `-${Math.ceil(r / 2)}px` : "0px",
          borderRadius: t != null && t.default ? "0 0 5px 5px" : " 0 5px 5px 0",
          transform: t != null && t.default ? "" : "rotate(90deg)"
        }
      };
      return {
        width: d ?? (t == null ? void 0 : t.default) ? "" : "10px",
        height: g ?? (t == null ? void 0 : t.default) ? "" : "68px",
        ...m[e.position]
      };
    });
    return {
      isCollapse: a,
      collapse: o,
      clickHandle: () => {
        a.value = !a.value, n("click");
      },
      collapseStyle: l
    };
  }
});
function Wl(e, n, t, a, o, l) {
  const s = V("CaretRight"), r = V("CaretLeft"), u = V("el-icon");
  return v(), w("div", {
    class: "collapse-button flex-center pointer",
    style: G(e.collapseStyle),
    ref: "collapse",
    onClick: n[0] || (n[0] = (...i) => e.clickHandle && e.clickHandle(...i))
  }, [
    T(e.$slots, "default", {}, () => [
      N(u, {
        size: 18,
        color: "#999999"
      }, {
        default: k(() => [
          e.isCollapse ? (v(), z(s, { key: 0 })) : (v(), z(r, { key: 1 }))
        ]),
        _: 1
      })
    ], !0)
  ], 4);
}
const Ae = /* @__PURE__ */ D(Ul, [["render", Wl], ["__scopeId", "data-v-447ed96e"]]);
Ae.install = function(e) {
  e.component(Ae.name, Ae);
};
const Gl = {
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
function ql(e, n) {
  const t = _(null), a = _(100), o = _(null), l = () => {
    var $;
    return (($ = document.querySelector(".card-row")) == null ? void 0 : $.offsetHeight) ?? 10;
  }, s = () => {
    var $;
    return (($ = document.querySelector(".card-row")) == null ? void 0 : $.offsetWidth) ?? 10;
  }, r = _(0), u = _(20), i = _(0), c = _(e.columns), d = ($) => Math.ceil($ / l()), g = () => {
    const { clientHeight: $ = 100 } = t.value.wrapRef || {};
    return Math.floor($ / (l() + e.gridGap)) + r.value || 1;
  }, f = y(() => e.data.map(($, H) => ({ ...$, rowIndex: H }))), h = y(() => f.value.filter(($, H) => H >= r.value * c.value && H < u.value * c.value)), m = () => {
    const { clientHeight: $ = 100 } = t.value.wrapRef || {}, H = $ / l() * e.gridGap;
    a.value = Math.floor(e.data.length / c.value * l() + H);
  }, p = ($) => {
    const { scrollTop: H, clientHeight: Y } = t.value.wrapRef, U = a.value - Y - H;
    n("scroll", { distance: U, ...$ }), r.value = d(H), i.value = H + e.gridGap, u.value = g();
  };
  q(() => e.data, () => {
    m(), u.value = g();
  });
  const b = () => {
    if (o.value) {
      const { clientWidth: $ = 500 } = t.value.wrapRef;
      c.value = Math.floor($ / s()) || 1, m(), i.value = 0, r.value = 0, t.value.setScrollTop(0), u.value = g();
    }
  };
  return he(() => {
    b(), window.addEventListener("resize", b);
  }), pn(() => {
    window.removeEventListener("resize", b);
  }), {
    scrollbarRef: t,
    containHeight: a,
    cardRowRef: o,
    onScroll: p,
    startOffset: i,
    viewListRanges: h,
    resetViewport: b
  };
}
const rt = B({
  name: "KCardList",
  props: Gl,
  emits: ["click", "mouseenter", "mouseleave", "update:modelValue", "scroll"],
  setup(e, { emit: n }) {
    const t = y(() => `${Number((100 / e.columns).toFixed(1))}%`), a = y(() => `${e.gridGap}px`), o = y(() => `${e.width}`), l = (p) => p.disabled || e.disabled, s = y(() => e.rowClass === "border" ? "border-row" : e.rowClass === "shadow" ? "box-shadow" : e.rowClass), r = _("");
    ke(() => {
      r.value = e.modelValue;
    });
    const u = (p) => {
      l(p) || (e.highlight && (r.value = p[e.keyId], n("update:modelValue", p[e.keyId])), n("click", p));
    }, {
      scrollbarRef: i,
      containHeight: c,
      cardRowRef: d,
      startOffset: g,
      viewListRanges: f,
      onScroll: h,
      resetViewport: m
    } = ql(e, n);
    return {
      calcnum: t,
      gridgap: a,
      columnwidth: o,
      rowClassStyle: s,
      clickHandle: u,
      selectedId: r,
      bitNotAllowed: l,
      scrollbarRef: i,
      containHeight: c,
      cardRowRef: d,
      startOffset: g,
      viewListRanges: f,
      onScroll: h,
      resetViewport: m
    };
  }
}), Et = () => {
  Bt((e) => ({
    "7d46f10c": e.gridgap,
    "2e51acf2": e.columns,
    "5e29b28a": e.calcnum,
    "221aa64c": e.columnwidth,
    cb2c4c58: e.imgheight
  }));
}, Vt = rt.setup;
rt.setup = Vt ? (e, n) => (Et(), Vt(e, n)) : Et;
const Ql = { class: "card-contain" }, Xl = ["onClick", "onMouseenter", "onMouseleave"], Zl = { class: "card-list-content" }, Jl = { class: "sign" };
function er(e, n, t, a, o, l) {
  const s = V("el-scrollbar");
  return v(), z(s, O({
    ref: "scrollbarRef",
    "data-test": "card-list"
  }, e.$attrs, {
    always: "",
    onScroll: e.onScroll
  }), {
    default: k(() => [
      S("div", Ql, [
        S("div", {
          class: "card-wrap",
          style: G({ height: `${e.containHeight}px` })
        }, null, 4),
        S("div", {
          class: "card-list",
          style: G({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          S("div", {
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
              S("div", Zl, [
                T(e.$slots, "default", {
                  row: r,
                  index: r.rowIndex
                }, () => [
                  X(K(r.rowIndex), 1)
                ], !0)
              ]),
              S("div", Jl, [
                T(e.$slots, "sign", {
                  row: r,
                  index: r.rowIndex
                }, void 0, !0)
              ])
            ], 42, Xl))), 128))
          ], 2)
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["onScroll"]);
}
const Re = /* @__PURE__ */ D(rt, [["render", er], ["__scopeId", "data-v-6f6f8503"]]);
Re.install = function(e) {
  e.component(Re.name, Re);
};
const We = {
  KButton: Ve,
  KInput: ye,
  KInputNumber: Te,
  KTable: Ne,
  KTableV2: Me,
  KPage: de,
  KBatchTable: we,
  KDialog: Be,
  KBreadcrumb: ze,
  KTabs: xe,
  KPicker: He,
  KTooltip: Ie,
  KDatePicker: De,
  KNumberKeyboard: Pe,
  KVirtualList: _e,
  KAutoCounter: Oe,
  KCollapseButton: Ae,
  KCardList: Re,
  install: () => {
  }
};
function tr(e, n, t = 0) {
  return e.substr(t, n.length) === n;
}
We.install = function(e) {
  Object.keys(We).forEach((n) => {
    if (tr(n, "K")) {
      const t = We[n];
      e.component(t.name, t);
    }
  }), Object.keys(be).forEach((n) => {
    e.directive(n, be[n]);
  });
};
export {
  Oe as KAutoCounter,
  we as KBatchTable,
  ze as KBreadcrumb,
  Ve as KButton,
  Re as KCardList,
  Ae as KCollapseButton,
  De as KDatePicker,
  Be as KDialog,
  ye as KInput,
  Te as KInputNumber,
  Pe as KNumberKeyboard,
  de as KPage,
  He as KPicker,
  Ne as KTable,
  Me as KTableV2,
  xe as KTabs,
  Ie as KTooltip,
  We as KUI,
  _e as KVirtualList,
  be as directives
};
