import { defineComponent as B, ref as _, computed as y, resolveComponent as V, openBlock as g, createBlock as z, mergeProps as O, withModifiers as nn, withCtx as S, renderSlot as T, createElementBlock as $, createCommentVNode as j, withKeys as Nt, createSlots as fe, createElementVNode as C, watchEffect as ke, watch as q, nextTick as oe, normalizeClass as x, createVNode as N, unref as w, getCurrentScope as an, onScopeDispose as on, getCurrentInstance as pe, onMounted as he, warn as ln, inject as Z, provide as tt, onBeforeUnmount as rn, toRef as Fe, Transition as sn, withDirectives as un, normalizeStyle as G, vShow as cn, Fragment as A, reactive as Mt, onUpdated as Bt, resolveDynamicComponent as Ee, useSlots as dn, Text as fn, renderList as Q, toDisplayString as K, createTextVNode as X, toRefs as pn, isRef as Ge, normalizeProps as ut, useCssVars as zt, onUnmounted as hn } from "vue";
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
          focus: m,
          long: p,
          any: d,
          fast: h
        } = n.modifiers;
        if (!u && !p) {
          document.removeEventListener("keydown", e.handler);
          return;
        }
        if (d && n.arg) {
          n.arg(a);
          return;
        }
        const v = h ? o - t > 30 : !0, f = document.querySelector(".el-popup-parent--hidden") || document.querySelector(".is-message-box");
        if (t = o, f && !c)
          return;
        const b = a.ctrlKey || a.metaKey, k = r === +b && s === l;
        (!i || m || r) && k && v && n.arg && n.arg(a);
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
}, mn = B({
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
}), vn = {
  key: 0,
  class: "el-icon-lock el-icon--right"
};
function gn(e, n, t, a, o, l) {
  const s = V("el-button");
  return g(), z(s, O({
    disabled: !e.buttonStatus || e.disabled,
    style: e.buttonStyle,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: nn(e.onclick, ["stop"])
  }), {
    default: S(() => [
      T(e.$slots, "default"),
      e.iconLock ? (g(), $("i", vn)) : j("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "style", "click-state", "onClick"]);
}
const Ve = /* @__PURE__ */ D(mn, [["render", gn]]);
Ve.install = function(e) {
  e.component(Ve.name, Ve);
};
const bn = B({
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
      set(m) {
        r(m);
      }
    }), s = (m) => !m && m !== "0" ? m : Number(m), r = (m) => {
      let p = m;
      if (e.type === "number") {
        if (p = p.replace(/[^\d.]/g, ""), p = p.replace(/^\./g, ""), p = p.replace(/\.{2,}/g, "."), p = p.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), p.indexOf(".") < 0 && p !== "" && p.substr(0, 1) === "0" && p.length === 2 && (p = p.substr(1, p.length)), p !== "")
          if (p.indexOf(".") > 0) {
            if (e.point) {
              const d = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
              p = p.match(d)[0] || null;
            }
          } else
            p === "." && (p = "");
      } else
        e.type === "integer" ? p = s(p.replace(/[^\d]/g, "")) : e.type === "intText" && (p = p.replace(/[^\w]/g, ""));
      t.max !== void 0 && p && Number(p) > Number(t.max) && (p = t.max), t.min !== void 0 && p && Number(p) < Number(t.min) && (p = t.min), n("update:modelValue", p);
    }, u = () => {
      o.value && (o.value = !1, l.value && n("enter")), c();
    }, i = (m) => {
      n("change", m);
    }, c = () => {
      clearTimeout(a.value), a.value = setTimeout(() => {
        o.value = !0;
      }, 800);
    };
    return {
      inputValue: l,
      changeValue: i,
      searchContent: u
    };
  }
});
function yn(e, n, t, a, o, l) {
  const s = V("el-input");
  return g(), z(s, O({
    modelValue: e.inputValue,
    "onUpdate:modelValue": n[0] || (n[0] = (r) => e.inputValue = r),
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
const ye = /* @__PURE__ */ D(bn, [["render", yn]]);
ye.install = function(e) {
  e.component(ye.name, ye);
};
/*! Element Plus Icons Vue v2.1.0 */
var se = (e, n) => {
  let t = e.__vccOpts || e;
  for (let [a, o] of n)
    t[a] = o;
  return t;
}, _n = {
  name: "CaretLeft"
}, wn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $n = /* @__PURE__ */ C(
  "path",
  {
    fill: "currentColor",
    d: "M672 192 288 511.936 672 832z"
  },
  null,
  -1
  /* HOISTED */
), kn = [
  $n
];
function Sn(e, n, t, a, o, l) {
  return g(), $("svg", wn, kn);
}
var Cn = /* @__PURE__ */ se(_n, [["render", Sn], ["__file", "caret-left.vue"]]), En = {
  name: "CaretRight"
}, Vn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Tn = /* @__PURE__ */ C(
  "path",
  {
    fill: "currentColor",
    d: "M384 192v640l384-320.064z"
  },
  null,
  -1
  /* HOISTED */
), Nn = [
  Tn
];
function Mn(e, n, t, a, o, l) {
  return g(), $("svg", Vn, Nn);
}
var Bn = /* @__PURE__ */ se(En, [["render", Mn], ["__file", "caret-right.vue"]]), zn = {
  name: "Delete"
}, xn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hn = /* @__PURE__ */ C(
  "path",
  {
    fill: "currentColor",
    d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
  },
  null,
  -1
  /* HOISTED */
), In = [
  Hn
];
function Dn(e, n, t, a, o, l) {
  return g(), $("svg", xn, In);
}
var Pn = /* @__PURE__ */ se(zn, [["render", Dn], ["__file", "delete.vue"]]), On = {
  name: "Loading"
}, An = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rn = /* @__PURE__ */ C(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), Fn = [
  Rn
];
function Ln(e, n, t, a, o, l) {
  return g(), $("svg", An, Fn);
}
var Kn = /* @__PURE__ */ se(On, [["render", Ln], ["__file", "loading.vue"]]), jn = {
  name: "Minus"
}, Yn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Un = /* @__PURE__ */ C(
  "path",
  {
    fill: "currentColor",
    d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
  },
  null,
  -1
  /* HOISTED */
), Wn = [
  Un
];
function Gn(e, n, t, a, o, l) {
  return g(), $("svg", Yn, Wn);
}
var qn = /* @__PURE__ */ se(jn, [["render", Gn], ["__file", "minus.vue"]]), Qn = {
  name: "Plus"
}, Xn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Zn = /* @__PURE__ */ C(
  "path",
  {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  },
  null,
  -1
  /* HOISTED */
), Jn = [
  Zn
];
function ea(e, n, t, a, o, l) {
  return g(), $("svg", Xn, Jn);
}
var ta = /* @__PURE__ */ se(Qn, [["render", ea], ["__file", "plus.vue"]]), na = {
  name: "Warning"
}, aa = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, oa = /* @__PURE__ */ C(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), la = [
  oa
];
function ra(e, n, t, a, o, l) {
  return g(), $("svg", aa, la);
}
var sa = /* @__PURE__ */ se(na, [["render", ra], ["__file", "warning.vue"]]);
const ua = B({
  name: "KInputNumber",
  components: { Minus: qn, Plus: ta, KInput: ye },
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
      set: (f) => {
        n("update:modelValue", f);
      }
    }), u = (f) => n("blur", f), i = (f) => n("focus", f), c = (f) => n("enter", f), m = (f) => {
      oe(() => {
        const b = f === "" ? void 0 : Number(f);
        (!Number.isNaN(b) || f === "") && v(b);
      });
    }, p = (f) => {
      o.value = !f, a.value = f;
    }, d = _(-1);
    ke(() => {
      t.value = e.modelValue;
    }), q(() => d.value, (f) => {
      f < 0 && (r.value = e.modelValue, m(t.value));
    }, { immediate: !0 });
    const h = (f) => {
      const b = f === "increase", k = b ? s.value : l.value;
      if (e.disabled || k)
        return;
      const H = o.value ? 0 : r.value, Y = a.value ? t.value : H, U = b ? Y + e.step : Y - e.step;
      v(U);
    }, v = (f) => {
      a.value = f;
      let b = f;
      d.value !== b && (d.value = f, b >= e.max && (b = e.max), b <= e.min && (b = e.min), a.value === void 0 && (b = 1), n("update:modelValue", b), n("change", b, d.value), t.value = b);
    };
    return {
      currentValue: t,
      minDisabled: l,
      maxDisabled: s,
      handleBlur: u,
      handleFocus: i,
      handleKeyUp: c,
      handleInputChange: m,
      handleInput: p,
      clickBtnHandle: h
    };
  }
});
function ia(e, n, t, a, o, l) {
  const s = V("minus"), r = V("el-icon"), u = V("plus"), i = V("k-input");
  return g(), $("div", {
    class: x(["el-input-number", { "is-disabled": e.disabled }, { "is-without-controls": !e.controls }, e.size ? "el-input-number--" + e.size : ""])
  }, [
    e.controls ? (g(), $("span", {
      key: 0,
      class: x(["el-input-number__decrease", { "is-disabled": e.minDisabled }]),
      role: "button",
      onClick: n[0] || (n[0] = (c) => e.clickBtnHandle("decrease"))
    }, [
      N(r, { class: "el-input__icon" }, {
        default: S(() => [
          N(s)
        ]),
        _: 1
      })
    ], 2)) : j("", !0),
    e.controls ? (g(), $("span", {
      key: 1,
      class: x(["el-input-number__increase", { "is-disabled": e.maxDisabled }]),
      role: "button",
      onClick: n[1] || (n[1] = (c) => e.clickBtnHandle("increase"))
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
      "onUpdate:modelValue": n[2] || (n[2] = (c) => e.currentValue = c),
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
const Te = /* @__PURE__ */ D(ua, [["render", ia]]);
Te.install = function(e) {
  e.component(Te.name, Te);
};
var it;
const nt = typeof window < "u", ca = (e) => typeof e == "string", da = () => {
};
nt && ((it = window == null ? void 0 : window.navigator) != null && it.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function xt(e) {
  return typeof e == "function" ? e() : w(e);
}
function fa(e) {
  return e;
}
function Ht(e) {
  return an() ? (on(e), !0) : !1;
}
function pa(e, n = !0) {
  pe() ? he(e) : n ? e() : oe(e);
}
function It(e) {
  var n;
  const t = xt(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const Dt = nt ? window : void 0;
function qe(...e) {
  let n, t, a, o;
  if (ca(e[0]) || Array.isArray(e[0]) ? ([t, a, o] = e, n = Dt) : [n, t, a, o] = e, !n)
    return da;
  Array.isArray(t) || (t = [t]), Array.isArray(a) || (a = [a]);
  const l = [], s = () => {
    l.forEach((c) => c()), l.length = 0;
  }, r = (c, m, p, d) => (c.addEventListener(m, p, d), () => c.removeEventListener(m, p, d)), u = q(() => [It(n), xt(o)], ([c, m]) => {
    s(), c && l.push(...t.flatMap((p) => a.map((d) => r(c, p, d, m))));
  }, { immediate: !0, flush: "post" }), i = () => {
    u(), s();
  };
  return Ht(i), i;
}
function ha(e, n = !1) {
  const t = _(), a = () => t.value = !!e();
  return a(), pa(a, n), t;
}
const ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, dt = "__vueuse_ssr_handlers__";
ct[dt] = ct[dt] || {};
var ft = Object.getOwnPropertySymbols, ma = Object.prototype.hasOwnProperty, va = Object.prototype.propertyIsEnumerable, ga = (e, n) => {
  var t = {};
  for (var a in e)
    ma.call(e, a) && n.indexOf(a) < 0 && (t[a] = e[a]);
  if (e != null && ft)
    for (var a of ft(e))
      n.indexOf(a) < 0 && va.call(e, a) && (t[a] = e[a]);
  return t;
};
function ba(e, n, t = {}) {
  const a = t, { window: o = Dt } = a, l = ga(a, ["window"]);
  let s;
  const r = ha(() => o && "ResizeObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, i = q(() => It(e), (m) => {
    u(), r.value && o && m && (s = new ResizeObserver(n), s.observe(m, l));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), i();
  };
  return Ht(c), {
    isSupported: r,
    stop: c
  };
}
var pt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(pt || (pt = {}));
var ya = Object.defineProperty, ht = Object.getOwnPropertySymbols, _a = Object.prototype.hasOwnProperty, wa = Object.prototype.propertyIsEnumerable, mt = (e, n, t) => n in e ? ya(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, $a = (e, n) => {
  for (var t in n || (n = {}))
    _a.call(n, t) && mt(e, t, n[t]);
  if (ht)
    for (var t of ht(n))
      wa.call(n, t) && mt(e, t, n[t]);
  return e;
};
const ka = {
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
$a({
  linear: fa
}, ka);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Sa = () => {
}, Ca = Object.prototype.hasOwnProperty, vt = (e, n) => Ca.call(e, n), at = (e) => typeof e == "string", ot = (e) => e !== null && typeof e == "object";
function Ea(e) {
  for (var n = -1, t = e == null ? 0 : e.length, a = {}; ++n < t; ) {
    var o = e[n];
    a[o[0]] = o[1];
  }
  return a;
}
const Va = (e) => e === void 0, ie = (e) => typeof e == "number", Ta = (e) => at(e) ? !Number.isNaN(Number(e)) : !1, gt = (e) => Object.keys(e);
class Pt extends Error {
  constructor(n) {
    super(n), this.name = "ElementPlusError";
  }
}
function Na(e, n) {
  throw new Pt(`[${e}] ${n}`);
}
function $e(e, n) {
  if (process.env.NODE_ENV !== "production") {
    const t = at(e) ? new Pt(`[${e}] ${n}`) : e;
    console.warn(t);
  }
}
const Ma = "utils/dom/style";
function Qe(e, n = "px") {
  if (!e)
    return "";
  if (ie(e) || Ta(e))
    return `${e}${n}`;
  if (at(e))
    return e;
  $e(Ma, "binding value must be a string or number");
}
const Ot = "__epPropKey", ne = (e) => e, Ba = (e) => ot(e) && !!e[Ot], At = (e, n) => {
  if (!ot(e) || Ba(e))
    return e;
  const { values: t, required: a, default: o, type: l, validator: s } = e, u = {
    type: l,
    required: !!a,
    validator: t || s ? (i) => {
      let c = !1, m = [];
      if (t && (m = Array.from(t), vt(e, "default") && m.push(o), c || (c = m.includes(i))), s && (c || (c = s(i))), !c && m.length > 0) {
        const p = [...new Set(m)].map((d) => JSON.stringify(d)).join(", ");
        ln(`Invalid prop: validation failed${n ? ` for prop "${n}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(i)}.`);
      }
      return c;
    } : void 0,
    [Ot]: !0
  };
  return vt(e, "default") && (u.default = o), u;
}, me = (e) => Ea(Object.entries(e).map(([n, t]) => [
  n,
  At(t, n)
])), bt = ne([
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
}, za = (e) => (e.install = Sa, e), xa = ["", "default", "small", "large"], Ha = ({ from: e, replacement: n, scope: t, version: a, ref: o, type: l = "API" }, s) => {
  q(() => w(s), (r) => {
    r && $e(t, `[${l}] ${e} is about to be deprecated in version ${a}, please use ${n} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, Ia = Symbol("localeContextKey"), yt = "el", Da = "is-", le = (e, n, t, a, o) => {
  let l = `${e}-${n}`;
  return t && (l += `-${t}`), a && (l += `__${a}`), o && (l += `--${o}`), l;
}, Rt = Symbol("namespaceContextKey"), Pa = (e) => {
  const n = e || Z(Rt, _(yt));
  return y(() => w(n) || yt);
}, ve = (e, n) => {
  const t = Pa(n);
  return {
    namespace: t,
    b: (v = "") => le(t.value, e, v, "", ""),
    e: (v) => v ? le(t.value, e, "", v, "") : "",
    m: (v) => v ? le(t.value, e, "", "", v) : "",
    be: (v, f) => v && f ? le(t.value, e, v, f, "") : "",
    em: (v, f) => v && f ? le(t.value, e, "", v, f) : "",
    bm: (v, f) => v && f ? le(t.value, e, v, "", f) : "",
    bem: (v, f, b) => v && f && b ? le(t.value, e, v, f, b) : "",
    is: (v, ...f) => {
      const b = f.length >= 1 ? f[0] : !0;
      return v && b ? `${Da}${v}` : "";
    },
    cssVar: (v) => {
      const f = {};
      for (const b in v)
        v[b] && (f[`--${t.value}-${b}`] = v[b]);
      return f;
    },
    cssVarName: (v) => `--${t.value}-${v}`,
    cssVarBlock: (v) => {
      const f = {};
      for (const b in v)
        v[b] && (f[`--${t.value}-${e}-${b}`] = v[b]);
      return f;
    },
    cssVarBlockName: (v) => `--${t.value}-${e}-${v}`
  };
}, Ft = (e) => {
  const n = pe();
  return y(() => {
    var t, a;
    return (a = (t = n == null ? void 0 : n.proxy) == null ? void 0 : t.$props) == null ? void 0 : a[e];
  });
};
_(0);
const Oa = Symbol("zIndexContextKey"), Lt = At({
  type: String,
  values: xa,
  required: !1
}), Kt = Symbol("size"), Aa = () => {
  const e = Z(Kt, {});
  return y(() => w(e.size) || "");
}, jt = Symbol(), Le = _();
function Yt(e, n = void 0) {
  const t = pe() ? Z(jt, Le) : Le;
  return e ? y(() => {
    var a, o;
    return (o = (a = t.value) == null ? void 0 : a[e]) != null ? o : n;
  }) : t;
}
const Ra = (e, n, t = !1) => {
  var a;
  const o = !!pe(), l = o ? Yt() : void 0, s = (a = n == null ? void 0 : n.provide) != null ? a : o ? tt : void 0;
  if (!s) {
    $e("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const r = y(() => {
    const u = w(e);
    return l != null && l.value ? Fa(l.value, u) : u;
  });
  return s(jt, r), s(Ia, y(() => r.value.locale)), s(Rt, y(() => r.value.namespace)), s(Oa, y(() => r.value.zIndex)), s(Kt, {
    size: y(() => r.value.size || "")
  }), (t || !Le.value) && (Le.value = r.value), r;
}, Fa = (e, n) => {
  var t;
  const a = [.../* @__PURE__ */ new Set([...gt(e), ...gt(n)])], o = {};
  for (const l of a)
    o[l] = (t = n[l]) != null ? t : e[l];
  return o;
}, La = me({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ne(Object)
  },
  size: Lt,
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
}), Ka = {}, ja = B({
  name: "ElConfigProvider",
  props: La,
  setup(e, { slots: n }) {
    q(() => e.message, (a) => {
      Object.assign(Ka, a ?? {});
    }, { immediate: !0, deep: !0 });
    const t = Ra(e);
    return () => T(n, "default", { config: t == null ? void 0 : t.value });
  }
}), Ut = Ke(ja);
var ge = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, o] of n)
    t[a] = o;
  return t;
};
const Ya = me({
  size: {
    type: ne([Number, String])
  },
  color: {
    type: String
  }
}), Ua = B({
  name: "ElIcon",
  inheritAttrs: !1
}), Wa = /* @__PURE__ */ B({
  ...Ua,
  props: Ya,
  setup(e) {
    const n = e, t = ve("icon"), a = y(() => {
      const { size: o, color: l } = n;
      return !o && !l ? {} : {
        fontSize: Va(o) ? void 0 : Qe(o),
        "--color": l
      };
    });
    return (o, l) => (g(), $("i", O({
      class: w(t).b(),
      style: w(a)
    }, o.$attrs), [
      T(o.$slots, "default")
    ], 16));
  }
});
var Ga = /* @__PURE__ */ ge(Wa, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Xe = Ke(Ga), lt = Symbol("formContextKey"), Wt = Symbol("formItemContextKey"), qa = (e, n = {}) => {
  const t = _(void 0), a = n.prop ? t : Ft("size"), o = n.global ? t : Aa(), l = n.form ? { size: void 0 } : Z(lt, void 0), s = n.formItem ? { size: void 0 } : Z(Wt, void 0);
  return y(() => a.value || w(e) || (s == null ? void 0 : s.size) || (l == null ? void 0 : l.size) || o.value || "");
}, Gt = (e) => {
  const n = Ft("disabled"), t = Z(lt, void 0);
  return y(() => n.value || w(e) || (t == null ? void 0 : t.disabled) || !1);
}, Qa = () => {
  const e = Z(lt, void 0), n = Z(Wt, void 0);
  return {
    form: e,
    formItem: n
  };
}, ce = 4, Xa = {
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
}, Za = ({
  move: e,
  size: n,
  bar: t
}) => ({
  [t.size]: n,
  transform: `translate${t.axis}(${e}%)`
}), qt = Symbol("scrollbarContextKey"), Ja = me({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), eo = "Thumb", to = /* @__PURE__ */ B({
  __name: "thumb",
  props: Ja,
  setup(e) {
    const n = e, t = Z(qt), a = ve("scrollbar");
    t || Na(eo, "can not inject scrollbar context");
    const o = _(), l = _(), s = _({}), r = _(!1);
    let u = !1, i = !1, c = nt ? document.onselectstart : null;
    const m = y(() => Xa[n.vertical ? "vertical" : "horizontal"]), p = y(() => Za({
      size: n.size,
      move: n.move,
      bar: m.value
    })), d = y(() => o.value[m.value.offset] ** 2 / t.wrapElement[m.value.scrollSize] / n.ratio / l.value[m.value.offset]), h = (M) => {
      var E;
      if (M.stopPropagation(), M.ctrlKey || [1, 2].includes(M.button))
        return;
      (E = window.getSelection()) == null || E.removeAllRanges(), f(M);
      const I = M.currentTarget;
      I && (s.value[m.value.axis] = I[m.value.offset] - (M[m.value.client] - I.getBoundingClientRect()[m.value.direction]));
    }, v = (M) => {
      if (!l.value || !o.value || !t.wrapElement)
        return;
      const E = Math.abs(M.target.getBoundingClientRect()[m.value.direction] - M[m.value.client]), I = l.value[m.value.offset] / 2, F = (E - I) * 100 * d.value / o.value[m.value.offset];
      t.wrapElement[m.value.scroll] = F * t.wrapElement[m.value.scrollSize] / 100;
    }, f = (M) => {
      M.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", b), document.addEventListener("mouseup", k), c = document.onselectstart, document.onselectstart = () => !1;
    }, b = (M) => {
      if (!o.value || !l.value || u === !1)
        return;
      const E = s.value[m.value.axis];
      if (!E)
        return;
      const I = (o.value.getBoundingClientRect()[m.value.direction] - M[m.value.client]) * -1, F = l.value[m.value.offset] - E, J = (I - F) * 100 * d.value / o.value[m.value.offset];
      t.wrapElement[m.value.scroll] = J * t.wrapElement[m.value.scrollSize] / 100;
    }, k = () => {
      u = !1, s.value[m.value.axis] = 0, document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", k), U(), i && (r.value = !1);
    }, H = () => {
      i = !1, r.value = !!n.size;
    }, Y = () => {
      i = !0, r.value = u;
    };
    rn(() => {
      U(), document.removeEventListener("mouseup", k);
    });
    const U = () => {
      document.onselectstart !== c && (document.onselectstart = c);
    };
    return qe(Fe(t, "scrollbarElement"), "mousemove", H), qe(Fe(t, "scrollbarElement"), "mouseleave", Y), (M, E) => (g(), z(sn, {
      name: w(a).b("fade"),
      persisted: ""
    }, {
      default: S(() => [
        un(C("div", {
          ref_key: "instance",
          ref: o,
          class: x([w(a).e("bar"), w(a).is(w(m).key)]),
          onMousedown: v
        }, [
          C("div", {
            ref_key: "thumb",
            ref: l,
            class: x(w(a).e("thumb")),
            style: G(w(p)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [cn, M.always || r.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var _t = /* @__PURE__ */ ge(to, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const no = me({
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
}), ao = /* @__PURE__ */ B({
  __name: "bar",
  props: no,
  setup(e, { expose: n }) {
    const t = e, a = _(0), o = _(0);
    return n({
      handleScroll: (s) => {
        if (s) {
          const r = s.offsetHeight - ce, u = s.offsetWidth - ce;
          o.value = s.scrollTop * 100 / r * t.ratioY, a.value = s.scrollLeft * 100 / u * t.ratioX;
        }
      }
    }), (s, r) => (g(), $(A, null, [
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
var oo = /* @__PURE__ */ ge(ao, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const lo = me({
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
}), ro = {
  scroll: ({
    scrollTop: e,
    scrollLeft: n
  }) => [e, n].every(ie)
}, Ze = "ElScrollbar", so = B({
  name: Ze
}), uo = /* @__PURE__ */ B({
  ...so,
  props: lo,
  emits: ro,
  setup(e, { expose: n, emit: t }) {
    const a = e, o = ve("scrollbar");
    let l, s;
    const r = _(), u = _(), i = _(), c = _("0"), m = _("0"), p = _(), d = _(1), h = _(1), v = y(() => {
      const E = {};
      return a.height && (E.height = Qe(a.height)), a.maxHeight && (E.maxHeight = Qe(a.maxHeight)), [a.wrapStyle, E];
    }), f = y(() => [
      a.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !a.native }
    ]), b = y(() => [o.e("view"), a.viewClass]), k = () => {
      var E;
      u.value && ((E = p.value) == null || E.handleScroll(u.value), t("scroll", {
        scrollTop: u.value.scrollTop,
        scrollLeft: u.value.scrollLeft
      }));
    };
    function H(E, I) {
      ot(E) ? u.value.scrollTo(E) : ie(E) && ie(I) && u.value.scrollTo(E, I);
    }
    const Y = (E) => {
      if (!ie(E)) {
        $e(Ze, "value must be a number");
        return;
      }
      u.value.scrollTop = E;
    }, U = (E) => {
      if (!ie(E)) {
        $e(Ze, "value must be a number");
        return;
      }
      u.value.scrollLeft = E;
    }, M = () => {
      if (!u.value)
        return;
      const E = u.value.offsetHeight - ce, I = u.value.offsetWidth - ce, F = E ** 2 / u.value.scrollHeight, J = I ** 2 / u.value.scrollWidth, R = Math.max(F, a.minSize), ue = Math.max(J, a.minSize);
      d.value = F / (E - F) / (R / (E - R)), h.value = J / (I - J) / (ue / (I - ue)), m.value = R + ce < E ? `${R}px` : "", c.value = ue + ce < I ? `${ue}px` : "";
    };
    return q(() => a.noresize, (E) => {
      E ? (l == null || l(), s == null || s()) : ({ stop: l } = ba(i, M), s = qe("resize", M));
    }, { immediate: !0 }), q(() => [a.maxHeight, a.height], () => {
      a.native || oe(() => {
        var E;
        M(), u.value && ((E = p.value) == null || E.handleScroll(u.value));
      });
    }), tt(qt, Mt({
      scrollbarElement: r,
      wrapElement: u
    })), he(() => {
      a.native || oe(() => {
        M();
      });
    }), Bt(() => M()), n({
      wrapRef: u,
      update: M,
      scrollTo: H,
      setScrollTop: Y,
      setScrollLeft: U,
      handleScroll: k
    }), (E, I) => (g(), $("div", {
      ref_key: "scrollbarRef",
      ref: r,
      class: x(w(o).b())
    }, [
      C("div", {
        ref_key: "wrapRef",
        ref: u,
        class: x(w(f)),
        style: G(w(v)),
        onScroll: k
      }, [
        (g(), z(Ee(E.tag), {
          ref_key: "resizeRef",
          ref: i,
          class: x(w(b)),
          style: G(E.viewStyle)
        }, {
          default: S(() => [
            T(E.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      E.native ? j("v-if", !0) : (g(), z(oo, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        height: m.value,
        width: c.value,
        always: E.always,
        "ratio-x": h.value,
        "ratio-y": d.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var io = /* @__PURE__ */ ge(uo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const co = Ke(io), Qt = Symbol("buttonGroupContextKey"), fo = (e, n) => {
  Ha({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, y(() => e.type === "text"));
  const t = Z(Qt, void 0), a = Yt("button"), { form: o } = Qa(), l = qa(y(() => t == null ? void 0 : t.size)), s = Gt(), r = _(), u = dn(), i = y(() => e.type || (t == null ? void 0 : t.type) || ""), c = y(() => {
    var h, v, f;
    return (f = (v = e.autoInsertSpace) != null ? v : (h = a.value) == null ? void 0 : h.autoInsertSpace) != null ? f : !1;
  }), m = y(() => e.tag === "button" ? {
    ariaDisabled: s.value || e.loading,
    disabled: s.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), p = y(() => {
    var h;
    const v = (h = u.default) == null ? void 0 : h.call(u);
    if (c.value && (v == null ? void 0 : v.length) === 1) {
      const f = v[0];
      if ((f == null ? void 0 : f.type) === fn) {
        const b = f.children;
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
    _props: m,
    shouldAddSpace: p,
    handleClick: (h) => {
      e.nativeType === "reset" && (o == null || o.resetFields()), n("click", h);
    }
  };
}, po = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], ho = ["button", "submit", "reset"], Je = me({
  size: Lt,
  disabled: Boolean,
  type: {
    type: String,
    values: po,
    default: ""
  },
  icon: {
    type: bt
  },
  nativeType: {
    type: String,
    values: ho,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: bt,
    default: () => Kn
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
}), mo = {
  click: (e) => e instanceof MouseEvent
};
function P(e, n) {
  vo(e) && (e = "100%");
  var t = go(e);
  return e = n === 360 ? e : Math.min(n, Math.max(0, parseFloat(e))), t && (e = parseInt(String(e * n), 10) / 100), Math.abs(e - n) < 1e-6 ? 1 : (n === 360 ? e = (e < 0 ? e % n + n : e % n) / parseFloat(String(n)) : e = e % n / parseFloat(String(n)), e);
}
function Se(e) {
  return Math.min(1, Math.max(0, e));
}
function vo(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function go(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Xt(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ce(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function re(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function bo(e, n, t) {
  return {
    r: P(e, 255) * 255,
    g: P(n, 255) * 255,
    b: P(t, 255) * 255
  };
}
function wt(e, n, t) {
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
function yo(e, n, t) {
  var a, o, l;
  if (e = P(e, 360), n = P(n, 100), t = P(t, 100), n === 0)
    o = t, l = t, a = t;
  else {
    var s = t < 0.5 ? t * (1 + n) : t + n - t * n, r = 2 * t - s;
    a = je(r, s, e + 1 / 3), o = je(r, s, e), l = je(r, s, e - 1 / 3);
  }
  return { r: a * 255, g: o * 255, b: l * 255 };
}
function $t(e, n, t) {
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
function _o(e, n, t) {
  e = P(e, 360) * 6, n = P(n, 100), t = P(t, 100);
  var a = Math.floor(e), o = e - a, l = t * (1 - n), s = t * (1 - o * n), r = t * (1 - (1 - o) * n), u = a % 6, i = [t, s, l, l, r, t][u], c = [r, t, t, s, l, l][u], m = [l, l, r, t, t, s][u];
  return { r: i * 255, g: c * 255, b: m * 255 };
}
function kt(e, n, t, a) {
  var o = [
    re(Math.round(e).toString(16)),
    re(Math.round(n).toString(16)),
    re(Math.round(t).toString(16))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function wo(e, n, t, a, o) {
  var l = [
    re(Math.round(e).toString(16)),
    re(Math.round(n).toString(16)),
    re(Math.round(t).toString(16)),
    re($o(a))
  ];
  return o && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function $o(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function St(e) {
  return L(e) / 255;
}
function L(e) {
  return parseInt(e, 16);
}
function ko(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var et = {
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
function So(e) {
  var n = { r: 0, g: 0, b: 0 }, t = 1, a = null, o = null, l = null, s = !1, r = !1;
  return typeof e == "string" && (e = Vo(e)), typeof e == "object" && (ee(e.r) && ee(e.g) && ee(e.b) ? (n = bo(e.r, e.g, e.b), s = !0, r = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : ee(e.h) && ee(e.s) && ee(e.v) ? (a = Ce(e.s), o = Ce(e.v), n = _o(e.h, a, o), s = !0, r = "hsv") : ee(e.h) && ee(e.s) && ee(e.l) && (a = Ce(e.s), l = Ce(e.l), n = yo(e.h, a, l), s = !0, r = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (t = e.a)), t = Xt(t), {
    ok: s,
    format: e.format || r,
    r: Math.min(255, Math.max(n.r, 0)),
    g: Math.min(255, Math.max(n.g, 0)),
    b: Math.min(255, Math.max(n.b, 0)),
    a: t
  };
}
var Co = "[-\\+]?\\d+%?", Eo = "[-\\+]?\\d*\\.\\d+%?", ae = "(?:".concat(Eo, ")|(?:").concat(Co, ")"), Ye = "[\\s|\\(]+(".concat(ae, ")[,|\\s]+(").concat(ae, ")[,|\\s]+(").concat(ae, ")\\s*\\)?"), Ue = "[\\s|\\(]+(".concat(ae, ")[,|\\s]+(").concat(ae, ")[,|\\s]+(").concat(ae, ")[,|\\s]+(").concat(ae, ")\\s*\\)?"), W = {
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
function Vo(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var n = !1;
  if (et[e])
    e = et[e], n = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var t = W.rgb.exec(e);
  return t ? { r: t[1], g: t[2], b: t[3] } : (t = W.rgba.exec(e), t ? { r: t[1], g: t[2], b: t[3], a: t[4] } : (t = W.hsl.exec(e), t ? { h: t[1], s: t[2], l: t[3] } : (t = W.hsla.exec(e), t ? { h: t[1], s: t[2], l: t[3], a: t[4] } : (t = W.hsv.exec(e), t ? { h: t[1], s: t[2], v: t[3] } : (t = W.hsva.exec(e), t ? { h: t[1], s: t[2], v: t[3], a: t[4] } : (t = W.hex8.exec(e), t ? {
    r: L(t[1]),
    g: L(t[2]),
    b: L(t[3]),
    a: St(t[4]),
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
    a: St(t[4] + t[4]),
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
var To = (
  /** @class */
  function() {
    function e(n, t) {
      n === void 0 && (n = ""), t === void 0 && (t = {});
      var a;
      if (n instanceof e)
        return n;
      typeof n == "number" && (n = ko(n)), this.originalInput = n;
      var o = So(n);
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
      return this.a = Xt(n), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var n = this.toHsl().s;
      return n === 0;
    }, e.prototype.toHsv = function() {
      var n = $t(this.r, this.g, this.b);
      return { h: n.h * 360, s: n.s, v: n.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var n = $t(this.r, this.g, this.b), t = Math.round(n.h * 360), a = Math.round(n.s * 100), o = Math.round(n.v * 100);
      return this.a === 1 ? "hsv(".concat(t, ", ").concat(a, "%, ").concat(o, "%)") : "hsva(".concat(t, ", ").concat(a, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var n = wt(this.r, this.g, this.b);
      return { h: n.h * 360, s: n.s, l: n.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var n = wt(this.r, this.g, this.b), t = Math.round(n.h * 360), a = Math.round(n.s * 100), o = Math.round(n.l * 100);
      return this.a === 1 ? "hsl(".concat(t, ", ").concat(a, "%, ").concat(o, "%)") : "hsla(".concat(t, ", ").concat(a, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(n) {
      return n === void 0 && (n = !1), kt(this.r, this.g, this.b, n);
    }, e.prototype.toHexString = function(n) {
      return n === void 0 && (n = !1), "#" + this.toHex(n);
    }, e.prototype.toHex8 = function(n) {
      return n === void 0 && (n = !1), wo(this.r, this.g, this.b, this.a, n);
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
      for (var n = "#" + kt(this.r, this.g, this.b, !1), t = 0, a = Object.entries(et); t < a.length; t++) {
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
function No(e) {
  const n = Gt(), t = ve("button");
  return y(() => {
    let a = {};
    const o = e.color;
    if (o) {
      const l = new To(o), s = e.dark ? l.tint(20).toString() : te(l, 20);
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
const Mo = B({
  name: "ElButton"
}), Bo = /* @__PURE__ */ B({
  ...Mo,
  props: Je,
  emits: mo,
  setup(e, { expose: n, emit: t }) {
    const a = e, o = No(a), l = ve("button"), { _ref: s, _size: r, _type: u, _disabled: i, _props: c, shouldAddSpace: m, handleClick: p } = fo(a, t);
    return n({
      ref: s,
      size: r,
      type: u,
      disabled: i,
      shouldAddSpace: m
    }), (d, h) => (g(), z(Ee(d.tag), O({
      ref_key: "_ref",
      ref: s
    }, w(c), {
      class: [
        w(l).b(),
        w(l).m(w(u)),
        w(l).m(w(r)),
        w(l).is("disabled", w(i)),
        w(l).is("loading", d.loading),
        w(l).is("plain", d.plain),
        w(l).is("round", d.round),
        w(l).is("circle", d.circle),
        w(l).is("text", d.text),
        w(l).is("link", d.link),
        w(l).is("has-bg", d.bg)
      ],
      style: w(o),
      onClick: w(p)
    }), {
      default: S(() => [
        d.loading ? (g(), $(A, { key: 0 }, [
          d.$slots.loading ? T(d.$slots, "loading", { key: 0 }) : (g(), z(w(Xe), {
            key: 1,
            class: x(w(l).is("loading"))
          }, {
            default: S(() => [
              (g(), z(Ee(d.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : d.icon || d.$slots.icon ? (g(), z(w(Xe), { key: 1 }, {
          default: S(() => [
            d.icon ? (g(), z(Ee(d.icon), { key: 0 })) : T(d.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : j("v-if", !0),
        d.$slots.default ? (g(), $("span", {
          key: 2,
          class: x({ [w(l).em("text", "expand")]: w(m) })
        }, [
          T(d.$slots, "default")
        ], 2)) : j("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var zo = /* @__PURE__ */ ge(Bo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const xo = {
  size: Je.size,
  type: Je.type
}, Ho = B({
  name: "ElButtonGroup"
}), Io = /* @__PURE__ */ B({
  ...Ho,
  props: xo,
  setup(e) {
    const n = e;
    tt(Qt, Mt({
      size: Fe(n, "size"),
      type: Fe(n, "type")
    }));
    const t = ve("button");
    return (a, o) => (g(), $("div", {
      class: x(`${w(t).b("group")}`)
    }, [
      T(a.$slots, "default")
    ], 2));
  }
});
var Zt = /* @__PURE__ */ ge(Io, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const Do = Ke(zo, {
  ButtonGroup: Zt
});
za(Zt);
function Po(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jt = {};
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
})(Jt);
const en = /* @__PURE__ */ Po(Jt);
const Oo = B({
  name: "KPage",
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: !1 },
    small: { type: Boolean, default: !1 },
    pagerCount: { type: Number, default: 7 }
  },
  components: { ElConfigProvider: Ut },
  emits: ["update:modelValue", "update:size", "current-change", "size-change", "change"],
  setup(e, { emit: n }) {
    const t = en, a = y(() => {
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
}), Ao = {
  key: 0,
  class: "page-right mt20"
};
function Ro(e, n, t, a, o, l) {
  const s = V("el-pagination"), r = V("el-config-provider");
  return e.showPage ? (g(), $("div", Ao, [
    N(r, { locale: e.locale }, {
      default: S(() => [
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
const de = /* @__PURE__ */ D(Oo, [["render", Ro], ["__scopeId", "data-v-77c509db"]]);
de.install = function(e) {
  e.component(de.name, de);
};
const Fo = B({
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
}), Lo = { key: 2 };
function Ko(e, n, t, a, o, l) {
  const s = V("el-table-column"), r = V("el-table"), u = V("pagination");
  return g(), $(A, null, [
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
      default: S(() => [
        (g(!0), $(A, null, Q(e.tableColumn, (i) => (g(), z(s, {
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
          default: S((c) => [
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
            }) : (g(), $("span", Lo, K(c.row[i.prop] ?? "-"), 1))
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
      size: e.size,
      "show-size": e.showSize,
      modelValue: e.currentPage,
      "onUpdate:modelValue": n[0] || (n[0] = (i) => e.currentPage = i),
      onCurrentChange: e.changePage
    }, null, 8, ["total", "size", "show-size", "modelValue", "onCurrentChange"])
  ], 64);
}
const Ne = /* @__PURE__ */ D(Fo, [["render", Ko]]);
Ne.install = function(e) {
  e.component(Ne.name, Ne);
};
const jo = B({
  name: "KVirtualList",
  components: { ElScrollbar: co },
  props: {
    height: { type: String, default: "500px" },
    rowStyle: { type: Object, default: () => ({}) },
    rowClassName: { type: [Function, String, Object], default: "" },
    data: { type: Array, default: () => [] }
  },
  emits: ["scroll", "row-click"],
  setup(e, { emit: n }) {
    const t = _(0), a = _(0), o = _(null), l = _(10), s = () => {
      var f, b;
      return ((f = document.querySelector(".table-row")) == null ? void 0 : f.offsetHeight) ?? ((b = document.querySelector(".list-item")) == null ? void 0 : b.offsetHeight) ?? 10;
    }, r = () => {
      const { clientHeight: f = 100 } = o.value.wrapRef || {};
      return Math.ceil(f / s()) + t.value;
    }, u = _(100);
    he(() => {
      l.value = Number(r()) || 10, u.value = e.data.length * s();
    });
    const i = (f) => Math.floor(f / s()), c = (f) => Math.ceil(f * s()), m = (f) => f >= t.value && f <= l.value, p = y(() => e.data.filter((f, b) => m(b)));
    return q(() => e.data, (f) => {
      f.length || (t.value = 0, a.value = 0), e.data.forEach((b, k) => {
        b.rowIndex = k;
      }), oe(() => {
        u.value = e.data.length * s();
      });
    }), {
      startIndex: t,
      endIndex: l,
      startOffset: a,
      viewport: o,
      onScroll: (f) => {
        const { scrollTop: b, clientHeight: k } = o.value.wrapRef;
        t.value = i(b), a.value = c(t.value), l.value = r();
        const H = Math.abs(u.value - k - b);
        n("scroll", { distance: H, ...f });
      },
      showViewRanges: m,
      containHeight: u,
      listRanges: p,
      rowClick: (f, b) => {
        n("row-click", f, b);
      },
      rowClassHandle: (f, b) => typeof e.rowClassName == "function" ? e.rowClassName({ row: f, rowIndex: b }) : e.rowClassName
    };
  }
}), Yo = {
  class: "virtual-list",
  "data-testid": "virtual-list"
}, Uo = ["onClick"];
function Wo(e, n, t, a, o, l) {
  const s = V("el-scrollbar");
  return g(), z(s, O({
    height: e.height,
    ref: "viewport"
  }, e.$attrs, { onScroll: e.onScroll }), {
    default: S(() => [
      C("div", Yo, [
        C("div", {
          class: "list-contain",
          style: G({ height: `${e.containHeight}px` })
        }, null, 4),
        C("div", {
          class: "list-content",
          style: G({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          (g(!0), $(A, null, Q(e.listRanges, (r, u) => (g(), $("div", {
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
          ], 14, Uo))), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["height", "onScroll"]);
}
const _e = /* @__PURE__ */ D(jo, [["render", Wo], ["__scopeId", "data-v-e53aecaa"]]);
_e.install = function(e) {
  e.component(_e.name, _e);
};
const Go = {
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
const qo = B({
  name: "KTableV2",
  components: { virtualList: _e },
  props: Go,
  emits: ["sort-change"],
  setup(e, { emit: n }) {
    const t = y(() => e.tableColumn.map((p, d) => ({ ...p, keyId: d }))), a = _(null), o = (p) => {
      var k, H, Y, U;
      let d = {};
      const {
        align: h,
        width: v,
        fixed: f,
        minWidth: b
      } = p;
      if (h && (d["text-center"] = `${h}`), b && (d["min-width"] = `${b}`), v && (d = {
        ...d,
        width: `${v}`,
        flex: "inherit",
        "flex-shrink": 0
      }), f) {
        const M = e.tableColumn.findIndex((I) => I.prop === p.prop), E = e.tableColumn.length;
        if (d = {
          ...d,
          position: "sticky",
          background: "#ffffff",
          "z-index": 5
        }, f === "left") {
          const I = (k = e.tableColumn.filter((R) => R.fixed === "left")) == null ? void 0 : k.length;
          let F = 0;
          M > 0 && M < E - 1 && I > 1 && (F = (H = a.value) == null ? void 0 : H.at(M - 1).clientWidth), d.left = `${F}px`;
          let J = 0;
          e.tableColumn.forEach((R, ue) => {
            R.fixed === "left" && (J = ue);
          }), J === M && (d["box-shadow"] = "3px 0px 4px #b0a8a836");
        } else {
          const I = (Y = e.tableColumn.filter((R) => R.fixed && R.fixed !== "left")) == null ? void 0 : Y.length;
          let F = 0;
          M < E - 1 && I > 1 && (F = (U = a.value) == null ? void 0 : U.at(M + 1).clientWidth), e.tableColumn.findIndex((R) => R.fixed && R.fixed !== "left") === M && (d["box-shadow"] = "-3px 0 4px #b0a8a836"), d.right = `${F}px`;
        }
      }
      return d;
    }, l = _(null), s = ({ scrollLeft: p }) => {
      l.value.scrollLeft = `${p}`;
    }, r = _(null), u = _({}), i = (p, d) => {
      u.value = d, r.value = r.value === p ? null : p, n("sort-change", { column: d, sortType: r.value });
    }, c = _(null), m = (p) => {
      var d;
      return (d = c.value) == null ? void 0 : d.viewport.setScrollTop(p);
    };
    return {
      ...pn(e),
      columnList: t,
      headerClass: o,
      tableHeader: l,
      scrollHandle: s,
      headerColmn: a,
      sortType: r,
      clickSortCaret: i,
      selectedRow: u,
      virtualRef: c,
      setScrollTop: m
    };
  }
}), Qo = { class: "table-v2 el-table flex-column" }, Xo = {
  class: "table-header overflow",
  ref: "tableHeader"
}, Zo = { class: "flex table-border-bottom header-content" }, Jo = {
  key: 0,
  class: "table-header-sort flex-column flex-center"
}, el = { class: "sort-wrapper" }, tl = ["onClick"], nl = ["onClick"], al = { class: "flex table-body" };
function ol(e, n, t, a, o, l) {
  const s = V("virtualList");
  return g(), $("div", Qo, [
    C("div", Xo, [
      C("div", Zo, [
        (g(!0), $(A, null, Q(e.tableColumn, (r, u) => (g(), $("div", {
          key: u,
          class: "header-column cell flex-align-center",
          ref_for: !0,
          ref: "headerColmn",
          style: G([e.headerClass(r), e.headerCellStyle])
        }, [
          T(e.$slots, (r == null ? void 0 : r.header) ?? "default", {}, () => [
            X(K(r.label), 1)
          ], !0),
          r.sortable ? (g(), $("div", Jo, [
            C("span", el, [
              C("i", {
                class: x(["sort-caret ascending", { "bottom-caret": e.sortType === "ascending" && e.selectedRow.prop == r.prop }]),
                onClick: (i) => e.clickSortCaret("ascending", r)
              }, null, 10, tl),
              C("i", {
                class: x(["sort-caret descending", { "top-caret": e.sortType === "descending" && e.selectedRow.prop == r.prop }]),
                onClick: (i) => e.clickSortCaret("descending", r)
              }, null, 10, nl)
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
          C("div", al, [
            (g(!0), $(A, null, Q(e.columnList, (i) => (g(), $("div", {
              key: i.keyId,
              class: "cell table-row table-border-bottom flex-align-center",
              ref_for: !0,
              ref: "bodyCell",
              style: G(e.headerClass(i))
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
const Me = /* @__PURE__ */ D(qo, [["render", ol], ["__scopeId", "data-v-f3e2be24"]]);
Me.install = function(e) {
  e.component(Me.name, Me);
};
const ll = {
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
}, rl = B({
  name: "KBatchTable",
  components: { pagination: de },
  props: ll,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { emit: n }) {
    const t = _(null), a = () => t.value.clearSelection(), o = (h) => {
      h ? e.tableData.forEach((v) => {
        h.forEach((f) => {
          d(v) === d(f) && oe(() => t.value && t.value.toggleRowSelection(v));
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
          e.tableData.forEach((v) => {
            d(h) === d(v) && (v[e.checkKey] = 0);
          });
        }), o(l.value));
      }, 200);
    };
    q(() => e.tableData, (h) => {
      oe(() => {
        h.length && s(), h.length && o(l.value);
      });
    }, { immediate: !0 });
    const r = (h, v) => {
      h.some((b) => d(b) === d(v)) ? l.value = [...l.value, v] : l.value = l.value.filter((b) => d(b) !== d(v));
    }, u = (h) => {
      if (l.value.length)
        if (h.length) {
          const v = h.filter((f) => l.value.every((b) => d(b) !== d(f)));
          l.value = [...l.value, ...v];
        } else
          l.value = l.value.filter((v) => e.tableData.every((f) => d(v) !== d(f)));
      else
        l.value = h;
    }, i = (h) => {
      if (!c(h))
        return;
      const v = l.value.some((f) => d(f) === d(h));
      o([h]), v ? l.value = l.value.filter((f) => d(f) !== d(h)) : l.value = [...l.value, h], n("row-click", h);
    }, c = (h) => h[e.checkKey] ?? !h[e.checkKey], m = y({
      get: () => e.page,
      set: (h) => n("update:page", h)
    }), p = (h) => {
      n("current-change", h);
    }, d = (h) => h[e.keyId];
    return {
      multipleTable: t,
      handleSelect: r,
      selectAll: u,
      handleRowClick: i,
      checkSelection: c,
      toggleSelection: o,
      currentPage: m,
      changePage: p,
      clear: a
    };
  }
}), sl = { key: 2 }, ul = { class: "mt20 flex-between" }, il = { class: "flex1" };
function cl(e, n, t, a, o, l) {
  const s = V("el-table-column"), r = V("el-table"), u = V("pagination");
  return g(), $(A, null, [
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
        (g(!0), $(A, null, Q(e.tableColumn, (i) => (g(), z(s, {
          label: i.label,
          key: i.prop,
          width: i.width,
          fixed: i.fixed,
          "min-width": i.minWidth,
          "show-overflow-tooltip": ""
        }, fe({
          default: S((c) => [
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
            }) : (g(), $("span", sl, K(c.row[i.prop] ?? "-"), 1))
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
    C("div", ul, [
      C("div", il, [
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
const we = /* @__PURE__ */ D(rl, [["render", cl]]);
we.install = function(e) {
  e.component(we.name, we);
};
const dl = B({
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
}), fl = /* @__PURE__ */ C("span", null, "这是一段信息", -1), pl = { class: "dialog-footer" };
function hl(e, n, t, a, o, l) {
  const s = V("el-button"), r = V("el-dialog");
  return g(), z(r, O({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": n[1] || (n[1] = (u) => e.dialogVisible = u),
    class: e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), fe({
    default: S(() => [
      T(e.$slots, "default", {}, () => [
        fl
      ])
    ]),
    _: 2
  }, [
    e.showFooter ? {
      name: "footer",
      fn: S(() => [
        T(e.$slots, "footer", {}, () => [
          C("span", pl, [
            N(s, {
              size: "large",
              onClick: n[0] || (n[0] = (u) => e.dialogVisible = !1)
            }, {
              default: S(() => [
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
              default: S(() => [
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
const Be = /* @__PURE__ */ D(dl, [["render", hl]]);
Be.install = function(e) {
  e.component(Be.name, Be);
};
const ml = B({
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
}), vl = { class: "crumb-header flex-between" }, gl = { class: "crumb-contain" }, bl = ["onClick"];
function yl(e, n, t, a, o, l) {
  const s = V("el-space");
  return g(), $("div", vl, [
    C("div", gl, [
      N(s, { spacer: "/" }, {
        default: S(() => [
          (g(!0), $(A, null, Q(e.list, (r, u) => (g(), $("span", {
            key: u,
            class: x({ "crumb-item": u !== e.list.length - 1 }),
            onClick: (i) => e.clickHandle(r, u)
          }, K(r.title), 11, bl))), 128))
        ]),
        _: 1
      })
    ]),
    T(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ze = /* @__PURE__ */ D(ml, [["render", yl], ["__scopeId", "data-v-4520378f"]]);
ze.install = function(e) {
  e.component(ze.name, ze);
};
const _l = B({
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
}), wl = { class: "tabs-right ml10" };
function $l(e, n, t, a, o, l) {
  const s = V("el-tab-pane"), r = V("el-tabs");
  return g(), $("div", {
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
      default: S(() => [
        (g(!0), $(A, null, Q(e.tabsList, (u) => (g(), z(s, {
          label: u.label,
          name: u.name,
          key: u.name
        }, null, 8, ["label", "name"]))), 128))
      ]),
      _: 1
    }, 16, ["type", "modelValue", "onTabClick"]),
    C("div", wl, [
      T(e.$slots, "default")
    ])
  ], 2);
}
const xe = /* @__PURE__ */ D(_l, [["render", $l]]);
xe.install = function(e) {
  e.component(xe.name, xe);
};
const kl = B({
  name: "KPicker",
  components: { batchTable: we, Delete: Pn },
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
}), Sl = { class: "k-picker" }, Cl = { class: "col-left" }, El = { class: "col-right" }, Vl = { class: "selete-header flex-between" }, Tl = { class: "selete-content" }, Nl = { class: "flex flex1 mr20 overflow" }, Ml = { class: "text-overflow" };
function Bl(e, n, t, a, o, l) {
  const s = V("batchTable"), r = V("el-col"), u = V("delete"), i = V("el-icon"), c = V("el-button"), m = V("el-tooltip"), p = V("el-input-number"), d = V("el-row");
  return g(), $("div", Sl, [
    T(e.$slots, "top", {}, void 0, !0),
    N(d, { gutter: 10 }, {
      default: S(() => [
        N(r, { span: 15 }, {
          default: S(() => [
            C("div", Cl, [
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
                header: S(({ column: h }) => [
                  T(e.$slots, h.header, { column: h }, void 0, !0)
                ]),
                default: S(({ row: h, column: v, index: f }) => [
                  v.custom && f >= 0 ? T(e.$slots, v.custom, {
                    key: 0,
                    row: h,
                    index: f
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
              C("div", El, [
                C("div", Vl, [
                  T(e.$slots, "right-header", {}, () => [
                    C("span", null, [
                      X("已选择"),
                      C("span", null, "(" + K(e.multipleSelection.length) + ")", 1)
                    ]),
                    N(c, {
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
                C("div", Tl, [
                  (g(!0), $(A, null, Q(e.multipleSelection, (h) => (g(), $("div", {
                    class: x(["flex-between pl10 pr10", { mt10: e.showCount }]),
                    key: e.getId(h)
                  }, [
                    C("div", Nl, [
                      N(m, {
                        effect: "dark",
                        content: e.getName(h),
                        placement: "top"
                      }, {
                        default: S(() => [
                          C("span", Ml, K(e.getName(h)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ]),
                    e.showCount ? (g(), z(p, {
                      key: 0,
                      modelValue: h.num,
                      "onUpdate:modelValue": (v) => h.num = v,
                      min: 1,
                      class: "width-100 flex-shrink mr10"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                    N(c, {
                      text: "",
                      onClick: (v) => e.deleteHandler(h)
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
const He = /* @__PURE__ */ D(kl, [["render", Bl], ["__scopeId", "data-v-3723b329"]]);
He.install = function(e) {
  e.component(He.name, He);
};
const zl = B({
  name: "KTooltip",
  props: {
    placement: { type: String, default: "top" },
    showIcon: { type: Boolean, default: !1 },
    overflow: { type: Boolean, default: !1 }
  },
  components: { Warning: sa }
});
function xl(e, n, t, a, o, l) {
  const s = V("warning"), r = V("el-icon"), u = V("el-tooltip");
  return g(), $("div", {
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
          e.showIcon ? (g(), z(r, {
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
const Ie = /* @__PURE__ */ D(zl, [["render", xl], ["__scopeId", "data-v-d468c200"]]);
Ie.install = function(e) {
  e.component(Ie.name, Ie);
};
const Hl = {
  __name: "main",
  setup(e) {
    return (n, t) => (g(), z(w(Ut), { locale: w(en) }, {
      default: S(() => [
        T(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale"]));
  }
}, tn = {
  __name: "datePicker",
  props: {
    type: { type: String, default: "daterange" },
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, a = y(() => t.type === "datetimerange" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"), o = (c) => {
      const m = /* @__PURE__ */ new Date(), p = /* @__PURE__ */ new Date();
      return m.setTime(m.getTime() - 3600 * 1e3 * 24 * c), t.type === "date" ? m : [m, p];
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
    return (c, m) => {
      const p = V("el-date-picker");
      return g(), z(p, {
        modelValue: w(r),
        "onUpdate:modelValue": m[0] || (m[0] = (d) => Ge(r) ? r.value = d : null),
        type: e.type,
        "unlink-panels": "",
        "range-separator": "至",
        "start-placeholder": "开始日期",
        "end-placeholder": "结束日期",
        shortcuts: l,
        format: w(a),
        "value-format": "YYYY-MM-DD HH:mm:ss",
        "disabled-date": u,
        "default-time": s,
        editable: !1,
        clearable: !1,
        onChange: i
      }, null, 8, ["modelValue", "type", "format"]);
    };
  }
}, Il = { class: "date-picker flex" }, Dl = {
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
      set: (d) => n("update:modelValue", d)
    }), s = (d) => d.getTime() > Date.now(), r = y(() => ({
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
      const { label: d } = o.value.filter((h) => h.value === a.value)[0];
      return `选择${d}`;
    }), c = _("");
    ke(() => {
      if (Array.isArray(l.value)) {
        const [d, h] = l.value;
        c.value = [d, h];
      }
    });
    const m = (d) => {
      if (d) {
        if (Array.isArray(l.value)) {
          const [h] = l.value;
          l.value = h;
        }
      } else
        t.daterange && (l.value = c.value);
      p();
    }, p = () => {
      n("change", { type: a.value, time: l.value });
    };
    return (d, h) => {
      const v = V("el-option"), f = V("el-select"), b = V("el-date-picker");
      return g(), $("div", Il, [
        N(f, {
          modelValue: a.value,
          "onUpdate:modelValue": h[0] || (h[0] = (k) => a.value = k),
          class: "width-100 mr10",
          onChange: m
        }, {
          default: S(() => [
            (g(!0), $(A, null, Q(o.value, (k) => (g(), z(v, {
              key: k.value,
              label: k.label,
              value: k.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        C("div", null, [
          e.daterange && !a.value ? (g(), z(tn, O({
            key: 0,
            modelValue: w(l),
            "onUpdate:modelValue": h[1] || (h[1] = (k) => Ge(l) ? l.value = k : null)
          }, d.$props, { onChange: p }), null, 16, ["modelValue"])) : (g(), z(b, {
            key: 1,
            modelValue: w(l),
            "onUpdate:modelValue": h[2] || (h[2] = (k) => Ge(l) ? l.value = k : null),
            type: w(u),
            format: w(r),
            "value-format": "YYYY-MM-DD HH:mm:ss",
            placeholder: w(i),
            "disabled-date": s,
            clearable: !1,
            editable: !1,
            "start-placeholder": "开始日期",
            "end-placeholder": "结束日期",
            onChange: p
          }, null, 8, ["modelValue", "type", "format", "placeholder"]))
        ])
      ]);
    };
  }
}, Pl = B({
  name: "KDatePicker",
  props: {
    selectType: { type: Boolean, default: !1 }
    // 是否选择模式（年月日）
    // daterange: { type: Boolean, default: false }, // 是否选择模式下 是否日期范围
  },
  components: { configProvider: Hl, selectType: Dl, datePicker: tn },
  setup() {
  }
});
function Ol(e, n, t, a, o, l) {
  const s = V("selectType"), r = V("datePicker"), u = V("config-provider");
  return g(), z(u, null, {
    default: S(() => [
      e.selectType ? (g(), z(s, ut(O({ key: 0 }, e.$attrs)), null, 16)) : (g(), z(r, ut(O({ key: 1 }, e.$attrs)), null, 16))
    ]),
    _: 1
  });
}
const De = /* @__PURE__ */ D(Pl, [["render", Ol]]);
De.install = function(e) {
  e.component(De.name, De);
};
const rt = B({
  name: "KNumberKeyboard",
  components: { ElButton: Do },
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
      set: (p) => n("update:modelValue", p)
    }), l = () => {
      oe(() => n("change", o.value));
    }, s = (p) => {
      if (e.maxlength && o.value.length >= Number(e.maxlength))
        return;
      const d = o.value.indexOf("."), h = o.value.split(".");
      h.length === 2 && (p === "." || h[1].length >= e.precision) || (o.value = `${d === 0 ? 0 : ""}${o.value}${p}`, !e.startZero && o.value.slice(0, 1) === "0" && (o.value = o.value.slice(1) + p), l());
    }, r = (p) => {
      p === "delete" ? o.value = o.value.slice(0, o.value.length - 1) : p === "clear" && (o.value = "", n("clear")), p === "confirm" ? n("confirm") : l();
    }, u = ({ key: p, name: d }) => {
      p ? r(p) : s(d);
    }, i = y(() => `${Number(4 * e.width + 20)}px`), c = y(() => `${e.width}px`), m = y(() => e.decimalPoint ? 3 : 4);
    return {
      keyboardList: a,
      clickHandleBtn: u,
      clickBtn: s,
      totalwidth: i,
      gridwidth: c,
      numberVal: o,
      zerogridend: m
    };
  }
}), Ct = () => {
  zt((e) => ({
    "5f76155e": e.totalwidth,
    af867fde: e.gridwidth,
    c0d11484: e.zerogridend
  }));
}, Et = rt.setup;
rt.setup = Et ? (e, n) => (Ct(), Et(e, n)) : Ct;
const Al = rt, Rl = { class: "number-keyboard mt10" }, Fl = { class: "number-ul" };
function Ll(e, n, t, a, o, l) {
  const s = V("el-button");
  return g(), $("div", Rl, [
    C("ul", Fl, [
      (g(!0), $(A, null, Q(e.keyboardList, (r, u) => (g(), $("li", {
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
const Pe = /* @__PURE__ */ D(Al, [["render", Ll], ["__scopeId", "data-v-2e1be318"]]);
Pe.install = function(e) {
  e.component(Pe.name, Pe);
};
const Kl = B({
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
      const i = +u.innerText, c = +t.value / 200, m = r && i < Number(t.value) || !r && i > Number(t.value);
      r && i > e.end || i < e.start || (m ? s(u, r ? i + c : i - c, r) : u.interText = a(t.value));
    }, s = (r, u, i = !0) => {
      const c = u < e.start ? e.start : `${e.decimals ? u : Math.floor(u)}`, m = u > e.end ? e.end : `${e.decimals ? u : Math.ceil(u)}`;
      r.innerText = a(i ? m : c);
      const p = setTimeout(() => {
        clearTimeout(p), i ? l() : l(!1);
      }, 5);
    };
    return he(() => {
      o.value && e.autoinit && l();
    }), Bt(() => {
      if (e.autoinit) {
        const r = +o.value.innerText;
        l(r < Number(t.value));
      }
    }), { textValue: t, spanText: o, setDeimals: a };
  }
}), jl = { class: "auto-counter" }, Yl = { class: "mr5" }, Ul = { class: "ml5" };
function Wl(e, n, t, a, o, l) {
  return g(), $("div", jl, [
    C("span", Yl, K(e.prefix), 1),
    C("span", {
      class: "span-text",
      ref: "spanText"
    }, K(e.autoinit ? e.setDeimals(e.start) : e.setDeimals(e.textValue)), 513),
    C("span", Ul, K(e.suffix), 1)
  ]);
}
const Oe = /* @__PURE__ */ D(Kl, [["render", Wl]]);
Oe.install = function(e) {
  e.component(Oe.name, Oe);
};
const Gl = B({
  name: "KCollapseButton",
  components: { ElIcon: Xe, CaretLeft: Cn, CaretRight: Bn },
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
        width: m,
        height: p,
        left: d,
        bottom: h
      } = e.style, v = {
        right: {
          top: i ?? "50%",
          right: c ?? `-${r}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: i ? "0px" : `-${Math.ceil(u / 2)}px`
        },
        left: {
          top: i ?? "50%",
          left: d ?? `-${r}px`,
          borderRadius: "5px 0 0 5px",
          marginTop: i ? "0px" : `-${Math.ceil(u / 2)}px`
        },
        top: {
          left: d ?? "50%",
          marginLeft: d ?? (t == null ? void 0 : t.default) ? `-${Math.ceil(r / 2)}px` : "0px",
          top: i ?? (t == null ? void 0 : t.default) ? `-${u}px` : `-${Math.ceil(u / 2 + r / 2)}px`,
          borderRadius: t != null && t.default ? "5px 5px 0 0" : "0 5px 5px 0",
          transform: t != null && t.default ? "" : "rotate(-90deg)"
        },
        bottom: {
          left: d ?? "50%",
          bottom: h ?? (t == null ? void 0 : t.default) ? `-${u}px` : `-${Math.ceil(u / 2 + r / 2)}px`,
          marginLeft: d ?? (t == null ? void 0 : t.default) ? `-${Math.ceil(r / 2)}px` : "0px",
          borderRadius: t != null && t.default ? "0 0 5px 5px" : " 0 5px 5px 0",
          transform: t != null && t.default ? "" : "rotate(90deg)"
        }
      };
      return {
        width: m ?? (t == null ? void 0 : t.default) ? "" : "10px",
        height: p ?? (t == null ? void 0 : t.default) ? "" : "68px",
        ...v[e.position]
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
function ql(e, n, t, a, o, l) {
  const s = V("CaretRight"), r = V("CaretLeft"), u = V("el-icon");
  return g(), $("div", {
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
        default: S(() => [
          e.isCollapse ? (g(), z(s, { key: 0 })) : (g(), z(r, { key: 1 }))
        ]),
        _: 1
      })
    ], !0)
  ], 4);
}
const Ae = /* @__PURE__ */ D(Gl, [["render", ql], ["__scopeId", "data-v-447ed96e"]]);
Ae.install = function(e) {
  e.component(Ae.name, Ae);
};
const Ql = {
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
function Xl(e, n) {
  const t = _(null), a = _(100), o = _(null), l = () => {
    var k;
    return ((k = document.querySelector(".card-row")) == null ? void 0 : k.offsetHeight) ?? 10;
  }, s = () => {
    var k;
    return ((k = document.querySelector(".card-row")) == null ? void 0 : k.offsetWidth) ?? 10;
  }, r = _(0), u = _(20), i = _(0), c = _(e.columns), m = (k) => Math.ceil(k / l()), p = () => {
    const { clientHeight: k = 100 } = t.value.wrapRef || {};
    return Math.floor(k / (l() + e.gridGap)) + r.value || 1;
  }, d = y(() => e.data.map((k, H) => ({ ...k, rowIndex: H }))), h = y(() => d.value.filter((k, H) => H >= r.value * c.value && H < u.value * c.value)), v = () => {
    const { clientHeight: k = 100 } = t.value.wrapRef || {}, H = k / l() * e.gridGap;
    a.value = Math.floor(e.data.length / c.value * l() + H);
  }, f = (k) => {
    const { scrollTop: H, clientHeight: Y } = t.value.wrapRef, U = a.value - Y - H;
    n("scroll", { distance: U, ...k }), r.value = m(H), i.value = H + e.gridGap, u.value = p();
  };
  q(() => e.data, () => {
    v(), u.value = p();
  });
  const b = () => {
    if (o.value) {
      const { clientWidth: k = 500 } = t.value.wrapRef;
      c.value = Math.floor(k / s()) || 1, v(), i.value = 0, r.value = 0, t.value.setScrollTop(0), u.value = p();
    }
  };
  return he(() => {
    b(), window.addEventListener("resize", b);
  }), hn(() => {
    window.removeEventListener("resize", b);
  }), {
    scrollbarRef: t,
    containHeight: a,
    cardRowRef: o,
    onScroll: f,
    startOffset: i,
    viewListRanges: h,
    resetViewport: b
  };
}
const st = B({
  name: "KCardList",
  props: Ql,
  emits: ["click", "mouseenter", "mouseleave", "update:modelValue", "scroll"],
  setup(e, { emit: n }) {
    const t = y(() => `${Number((100 / e.columns).toFixed(1))}%`), a = y(() => `${e.gridGap}px`), o = y(() => `${e.width}`), l = (f) => f.disabled || e.disabled, s = y(() => e.rowClass === "border" ? "border-row" : e.rowClass === "shadow" ? "box-shadow" : e.rowClass), r = _("");
    ke(() => {
      r.value = e.modelValue;
    });
    const u = (f) => {
      l(f) || (e.highlight && (r.value = f[e.keyId], n("update:modelValue", f[e.keyId])), n("click", f));
    }, {
      scrollbarRef: i,
      containHeight: c,
      cardRowRef: m,
      startOffset: p,
      viewListRanges: d,
      onScroll: h,
      resetViewport: v
    } = Xl(e, n);
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
      cardRowRef: m,
      startOffset: p,
      viewListRanges: d,
      onScroll: h,
      resetViewport: v
    };
  }
}), Vt = () => {
  zt((e) => ({
    "7d46f10c": e.gridgap,
    "2e51acf2": e.columns,
    "5e29b28a": e.calcnum,
    "221aa64c": e.columnwidth,
    cb2c4c58: e.imgheight
  }));
}, Tt = st.setup;
st.setup = Tt ? (e, n) => (Vt(), Tt(e, n)) : Vt;
const Zl = st, Jl = { class: "card-contain" }, er = ["onClick", "onMouseenter", "onMouseleave"], tr = { class: "card-list-content" }, nr = { class: "sign" };
function ar(e, n, t, a, o, l) {
  const s = V("el-scrollbar");
  return g(), z(s, O({
    ref: "scrollbarRef",
    "data-test": "card-list"
  }, e.$attrs, {
    always: "",
    onScroll: e.onScroll
  }), {
    default: S(() => [
      C("div", Jl, [
        C("div", {
          class: "card-wrap",
          style: G({ height: `${e.containHeight}px` })
        }, null, 4),
        C("div", {
          class: "card-list",
          style: G({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          C("div", {
            class: x([e.fixedColumn ? "card-fixed-coumn" : "card-content", { "fixed-width": e.width }])
          }, [
            (g(!0), $(A, null, Q(e.viewListRanges, (r, u) => (g(), $("div", {
              class: x(["card-row border-radius pointer", [e.selectedId === r[e.keyId] ? "select-style" : "", e.bitNotAllowed(r) ? "not-allowed" : "hover-style", e.rowClassStyle]]),
              key: u,
              onClick: (i) => e.clickHandle(r),
              ref_for: !0,
              ref: "cardRowRef",
              onMouseenter: (i) => e.$emit("mouseenter", r),
              onMouseleave: (i) => e.$emit("mouseleave", r)
            }, [
              C("div", tr, [
                T(e.$slots, "default", {
                  row: r,
                  index: r.rowIndex
                }, () => [
                  X(K(r.rowIndex), 1)
                ], !0)
              ]),
              C("div", nr, [
                T(e.$slots, "sign", {
                  row: r,
                  index: r.rowIndex
                }, void 0, !0)
              ])
            ], 42, er))), 128))
          ], 2)
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["onScroll"]);
}
const Re = /* @__PURE__ */ D(Zl, [["render", ar], ["__scopeId", "data-v-6f6f8503"]]);
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
function or(e, n, t = 0) {
  return e.substr(t, n.length) === n;
}
We.install = function(e) {
  Object.keys(We).forEach((n) => {
    if (or(n, "K")) {
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
