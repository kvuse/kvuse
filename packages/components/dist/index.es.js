import { defineComponent as B, ref as _, computed as y, resolveComponent as C, openBlock as g, createBlock as M, mergeProps as A, withModifiers as an, withCtx as k, renderSlot as V, createElementBlock as w, createCommentVNode as L, withKeys as Nt, createSlots as ie, createElementVNode as E, watchEffect as we, watch as G, nextTick as te, normalizeClass as z, createVNode as T, unref as S, getCurrentScope as on, onScopeDispose as ln, getCurrentInstance as ce, onMounted as de, warn as rn, inject as Q, provide as et, onBeforeUnmount as sn, toRef as Re, Transition as un, withDirectives as cn, normalizeStyle as W, vShow as dn, Fragment as R, reactive as Tt, onUpdated as Mt, resolveDynamicComponent as Ee, useSlots as fn, Text as pn, renderList as q, toDisplayString as F, createTextVNode as Y, toRefs as mn, normalizeProps as st, useCssVars as Bt, onUnmounted as hn } from "vue";
const ve = {
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
        const o = Date.now(), l = /^[a-zA-Z]{2,}/.test(a.key) ? a.key : a.key.toLocaleUpperCase(), { buttonKey: s, isCombination: r = 0 } = n.value || e.valueKeys || {}, u = document.contains(e), c = a.target.tagName === "TEXTAREA" || a.target.tagName === "INPUT", {
          dialog: i,
          focus: d,
          long: v,
          any: p,
          fast: m
        } = n.modifiers;
        if (!u && !v) {
          document.removeEventListener("keydown", e.handler);
          return;
        }
        if (p && n.arg) {
          n.arg(a);
          return;
        }
        const h = m ? o - t > 30 : !0, f = document.querySelector(".el-popup-parent--hidden") || document.querySelector(".is-message-box");
        if (t = o, f && !i)
          return;
        const b = a.ctrlKey || a.metaKey, $ = r === +b && s === l;
        (!c || d || r) && $ && h && n.arg && n.arg(a);
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
ve.install = function(e) {
  Object.keys(ve).forEach((n) => {
    e.directive(n, ve[n]);
  });
};
const I = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, o] of n)
    t[a] = o;
  return t;
}, vn = B({
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
      const { border: u } = e, { type: c = "text" } = t;
      return u ? {
        backgroundColor: "transparent",
        color: `var(--el-color-${c})`
      } : {};
    });
    return { onclick: l, buttonStatus: a, buttonStyle: r };
  }
}), gn = {
  key: 0,
  class: "el-icon-lock el-icon--right"
};
function bn(e, n, t, a, o, l) {
  const s = C("el-button");
  return g(), M(s, A({
    disabled: !e.buttonStatus || e.disabled,
    style: e.buttonStyle,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: an(e.onclick, ["stop"])
  }), {
    default: k(() => [
      V(e.$slots, "default"),
      e.iconLock ? (g(), w("i", gn)) : L("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "style", "click-state", "onClick"]);
}
const Ve = /* @__PURE__ */ I(vn, [["render", bn]]);
Ve.install = function(e) {
  e.component(Ve.name, Ve);
};
const yn = B({
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
      set(i) {
        s(i);
      }
    }), s = (i) => {
      let d = i;
      if (e.type === "number") {
        if (d = d.replace(/[^\d.]/g, ""), d = d.replace(/^\./g, ""), d = d.replace(/\.{2,}/g, "."), d = d.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), d.indexOf(".") < 0 && d !== "" && d.substr(0, 1) === "0" && d.length === 2 && (d = d.substr(1, d.length)), d !== "")
          if (d.indexOf(".") > 0) {
            if (e.point) {
              const v = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
              d = d.match(v)[0] || null;
            }
          } else
            d === "." && (d = "");
      } else
        e.type === "integer" ? d = d.replace(/[^\d]/g, "") : e.type === "intText" && (d = d.replace(/[^\w]/g, ""));
      t.max !== void 0 && d && Number(d) > Number(t.max) && (d = t.max), t.min !== void 0 && d && Number(d) < Number(t.min) && (d = t.min), n("update:modelValue", d);
    }, r = () => {
      o.value && (o.value = !1, l.value && n("enter")), c();
    }, u = (i) => {
      n("change", i);
    }, c = () => {
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
function _n(e, n, t, a, o, l) {
  const s = C("el-input");
  return g(), M(s, A({
    modelValue: e.inputValue,
    "onUpdate:modelValue": n[0] || (n[0] = (r) => e.inputValue = r),
    modelModifiers: { trim: !0 }
  }, e.$attrs, {
    onKeyup: Nt(e.searchContent, ["enter"]),
    onChange: e.changeValue
  }), ie({ _: 2 }, [
    e.$slots.append ? {
      name: "append",
      fn: k(() => [
        V(e.$slots, "append")
      ]),
      key: "0"
    } : void 0,
    e.$slots.prepend ? {
      name: "prepend",
      fn: k(() => [
        V(e.$slots, "prepend")
      ]),
      key: "1"
    } : void 0,
    e.$slots.prefix ? {
      name: "prefix",
      fn: k(() => [
        V(e.$slots, "prefix")
      ]),
      key: "2"
    } : void 0,
    e.$slots.suffix ? {
      name: "suffix",
      fn: k(() => [
        V(e.$slots, "suffix")
      ]),
      key: "3"
    } : void 0
  ]), 1040, ["modelValue", "onKeyup", "onChange"]);
}
const ge = /* @__PURE__ */ I(yn, [["render", _n]]);
ge.install = function(e) {
  e.component(ge.name, ge);
};
/*! Element Plus Icons Vue v2.1.0 */
var le = (e, n) => {
  let t = e.__vccOpts || e;
  for (let [a, o] of n)
    t[a] = o;
  return t;
}, wn = {
  name: "CaretLeft"
}, $n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, kn = /* @__PURE__ */ E(
  "path",
  {
    fill: "currentColor",
    d: "M672 192 288 511.936 672 832z"
  },
  null,
  -1
  /* HOISTED */
), Sn = [
  kn
];
function Cn(e, n, t, a, o, l) {
  return g(), w("svg", $n, Sn);
}
var En = /* @__PURE__ */ le(wn, [["render", Cn], ["__file", "caret-left.vue"]]), Vn = {
  name: "CaretRight"
}, Nn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Tn = /* @__PURE__ */ E(
  "path",
  {
    fill: "currentColor",
    d: "M384 192v640l384-320.064z"
  },
  null,
  -1
  /* HOISTED */
), Mn = [
  Tn
];
function Bn(e, n, t, a, o, l) {
  return g(), w("svg", Nn, Mn);
}
var xn = /* @__PURE__ */ le(Vn, [["render", Bn], ["__file", "caret-right.vue"]]), zn = {
  name: "Delete"
}, Hn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, In = /* @__PURE__ */ E(
  "path",
  {
    fill: "currentColor",
    d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
  },
  null,
  -1
  /* HOISTED */
), Dn = [
  In
];
function Pn(e, n, t, a, o, l) {
  return g(), w("svg", Hn, Dn);
}
var On = /* @__PURE__ */ le(zn, [["render", Pn], ["__file", "delete.vue"]]), An = {
  name: "Loading"
}, Fn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rn = /* @__PURE__ */ E(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), Ln = [
  Rn
];
function Kn(e, n, t, a, o, l) {
  return g(), w("svg", Fn, Ln);
}
var jn = /* @__PURE__ */ le(An, [["render", Kn], ["__file", "loading.vue"]]), Yn = {
  name: "Minus"
}, Un = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Wn = /* @__PURE__ */ E(
  "path",
  {
    fill: "currentColor",
    d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
  },
  null,
  -1
  /* HOISTED */
), Gn = [
  Wn
];
function qn(e, n, t, a, o, l) {
  return g(), w("svg", Un, Gn);
}
var Qn = /* @__PURE__ */ le(Yn, [["render", qn], ["__file", "minus.vue"]]), Xn = {
  name: "Plus"
}, Zn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Jn = /* @__PURE__ */ E(
  "path",
  {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  },
  null,
  -1
  /* HOISTED */
), ea = [
  Jn
];
function ta(e, n, t, a, o, l) {
  return g(), w("svg", Zn, ea);
}
var na = /* @__PURE__ */ le(Xn, [["render", ta], ["__file", "plus.vue"]]), aa = {
  name: "Warning"
}, oa = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, la = /* @__PURE__ */ E(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), ra = [
  la
];
function sa(e, n, t, a, o, l) {
  return g(), w("svg", oa, ra);
}
var ua = /* @__PURE__ */ le(aa, [["render", sa], ["__file", "warning.vue"]]);
const ia = B({
  name: "KInputNumber",
  components: { Minus: Qn, Plus: na, KInput: ge },
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
    }), u = (f) => n("blur", f), c = (f) => n("focus", f), i = (f) => n("enter", f), d = (f) => {
      te(() => {
        const b = f === "" ? void 0 : Number(f);
        (!Number.isNaN(b) || f === "") && h(b);
      });
    }, v = (f) => {
      o.value = !f, a.value = f;
    }, p = _(-1);
    we(() => {
      t.value = e.modelValue;
    }), G(() => p.value, (f) => {
      f < 0 && (r.value = e.modelValue, d(t.value));
    }, { immediate: !0 });
    const m = (f) => {
      const b = f === "increase", $ = b ? s.value : l.value;
      if (e.disabled || $)
        return;
      const H = o.value ? 0 : r.value, j = a.value ? t.value : H, D = b ? j + e.step : j - e.step;
      h(D);
    }, h = (f) => {
      a.value = f;
      let b = f;
      p.value !== b && (p.value = f, b >= e.max && (b = e.max), b <= e.min && (b = e.min), a.value === void 0 && (b = 1), n("update:modelValue", b), n("change", b, p.value), t.value = b);
    };
    return {
      currentValue: t,
      minDisabled: l,
      maxDisabled: s,
      handleBlur: u,
      handleFocus: c,
      handleKeyUp: i,
      handleInputChange: d,
      handleInput: v,
      clickBtnHandle: m
    };
  }
});
function ca(e, n, t, a, o, l) {
  const s = C("minus"), r = C("el-icon"), u = C("plus"), c = C("k-input");
  return g(), w("div", {
    class: z(["el-input-number", { "is-disabled": e.disabled }, { "is-without-controls": !e.controls }, e.size ? "el-input-number--" + e.size : ""])
  }, [
    e.controls ? (g(), w("span", {
      key: 0,
      class: z(["el-input-number__decrease", { "is-disabled": e.minDisabled }]),
      role: "button",
      onClick: n[0] || (n[0] = (i) => e.clickBtnHandle("decrease"))
    }, [
      T(r, { class: "el-input__icon" }, {
        default: k(() => [
          T(s)
        ]),
        _: 1
      })
    ], 2)) : L("", !0),
    e.controls ? (g(), w("span", {
      key: 1,
      class: z(["el-input-number__increase", { "is-disabled": e.maxDisabled }]),
      role: "button",
      onClick: n[1] || (n[1] = (i) => e.clickBtnHandle("increase"))
    }, [
      T(r, { class: "el-input__icon" }, {
        default: k(() => [
          T(u)
        ]),
        _: 1
      })
    ], 2)) : L("", !0),
    T(c, A({
      ref: "input",
      modelValue: e.currentValue,
      "onUpdate:modelValue": n[2] || (n[2] = (i) => e.currentValue = i),
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
const Ne = /* @__PURE__ */ I(ia, [["render", ca]]);
Ne.install = function(e) {
  e.component(Ne.name, Ne);
};
var ut;
const tt = typeof window < "u", da = (e) => typeof e == "string", fa = () => {
};
tt && ((ut = window == null ? void 0 : window.navigator) != null && ut.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function xt(e) {
  return typeof e == "function" ? e() : S(e);
}
function pa(e) {
  return e;
}
function zt(e) {
  return on() ? (ln(e), !0) : !1;
}
function ma(e, n = !0) {
  ce() ? de(e) : n ? e() : te(e);
}
function Ht(e) {
  var n;
  const t = xt(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const It = tt ? window : void 0;
function Ge(...e) {
  let n, t, a, o;
  if (da(e[0]) || Array.isArray(e[0]) ? ([t, a, o] = e, n = It) : [n, t, a, o] = e, !n)
    return fa;
  Array.isArray(t) || (t = [t]), Array.isArray(a) || (a = [a]);
  const l = [], s = () => {
    l.forEach((i) => i()), l.length = 0;
  }, r = (i, d, v, p) => (i.addEventListener(d, v, p), () => i.removeEventListener(d, v, p)), u = G(() => [Ht(n), xt(o)], ([i, d]) => {
    s(), i && l.push(...t.flatMap((v) => a.map((p) => r(i, v, p, d))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), s();
  };
  return zt(c), c;
}
function ha(e, n = !1) {
  const t = _(), a = () => t.value = !!e();
  return a(), ma(a, n), t;
}
const it = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ct = "__vueuse_ssr_handlers__";
it[ct] = it[ct] || {};
var dt = Object.getOwnPropertySymbols, va = Object.prototype.hasOwnProperty, ga = Object.prototype.propertyIsEnumerable, ba = (e, n) => {
  var t = {};
  for (var a in e)
    va.call(e, a) && n.indexOf(a) < 0 && (t[a] = e[a]);
  if (e != null && dt)
    for (var a of dt(e))
      n.indexOf(a) < 0 && ga.call(e, a) && (t[a] = e[a]);
  return t;
};
function ya(e, n, t = {}) {
  const a = t, { window: o = It } = a, l = ba(a, ["window"]);
  let s;
  const r = ha(() => o && "ResizeObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = G(() => Ht(e), (d) => {
    u(), r.value && o && d && (s = new ResizeObserver(n), s.observe(d, l));
  }, { immediate: !0, flush: "post" }), i = () => {
    u(), c();
  };
  return zt(i), {
    isSupported: r,
    stop: i
  };
}
var ft;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ft || (ft = {}));
var _a = Object.defineProperty, pt = Object.getOwnPropertySymbols, wa = Object.prototype.hasOwnProperty, $a = Object.prototype.propertyIsEnumerable, mt = (e, n, t) => n in e ? _a(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ka = (e, n) => {
  for (var t in n || (n = {}))
    wa.call(n, t) && mt(e, t, n[t]);
  if (pt)
    for (var t of pt(n))
      $a.call(n, t) && mt(e, t, n[t]);
  return e;
};
const Sa = {
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
ka({
  linear: pa
}, Sa);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Ca = () => {
}, Ea = Object.prototype.hasOwnProperty, ht = (e, n) => Ea.call(e, n), nt = (e) => typeof e == "string", at = (e) => e !== null && typeof e == "object";
function Va(e) {
  for (var n = -1, t = e == null ? 0 : e.length, a = {}; ++n < t; ) {
    var o = e[n];
    a[o[0]] = o[1];
  }
  return a;
}
const Na = (e) => e === void 0, re = (e) => typeof e == "number", Ta = (e) => nt(e) ? !Number.isNaN(Number(e)) : !1, vt = (e) => Object.keys(e);
class Dt extends Error {
  constructor(n) {
    super(n), this.name = "ElementPlusError";
  }
}
function Ma(e, n) {
  throw new Dt(`[${e}] ${n}`);
}
function _e(e, n) {
  if (process.env.NODE_ENV !== "production") {
    const t = nt(e) ? new Dt(`[${e}] ${n}`) : e;
    console.warn(t);
  }
}
const Ba = "utils/dom/style";
function qe(e, n = "px") {
  if (!e)
    return "";
  if (re(e) || Ta(e))
    return `${e}${n}`;
  if (nt(e))
    return e;
  _e(Ba, "binding value must be a string or number");
}
const Pt = "__epPropKey", J = (e) => e, xa = (e) => at(e) && !!e[Pt], Ot = (e, n) => {
  if (!at(e) || xa(e))
    return e;
  const { values: t, required: a, default: o, type: l, validator: s } = e, u = {
    type: l,
    required: !!a,
    validator: t || s ? (c) => {
      let i = !1, d = [];
      if (t && (d = Array.from(t), ht(e, "default") && d.push(o), i || (i = d.includes(c))), s && (i || (i = s(c))), !i && d.length > 0) {
        const v = [...new Set(d)].map((p) => JSON.stringify(p)).join(", ");
        rn(`Invalid prop: validation failed${n ? ` for prop "${n}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(c)}.`);
      }
      return i;
    } : void 0,
    [Pt]: !0
  };
  return ht(e, "default") && (u.default = o), u;
}, fe = (e) => Va(Object.entries(e).map(([n, t]) => [
  n,
  Ot(t, n)
])), gt = J([
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
}, za = (e) => (e.install = Ca, e), Ha = ["", "default", "small", "large"], Ia = ({ from: e, replacement: n, scope: t, version: a, ref: o, type: l = "API" }, s) => {
  G(() => S(s), (r) => {
    r && _e(t, `[${l}] ${e} is about to be deprecated in version ${a}, please use ${n} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, Da = Symbol("localeContextKey"), bt = "el", Pa = "is-", ae = (e, n, t, a, o) => {
  let l = `${e}-${n}`;
  return t && (l += `-${t}`), a && (l += `__${a}`), o && (l += `--${o}`), l;
}, At = Symbol("namespaceContextKey"), Oa = (e) => {
  const n = e || Q(At, _(bt));
  return y(() => S(n) || bt);
}, pe = (e, n) => {
  const t = Oa(n);
  return {
    namespace: t,
    b: (h = "") => ae(t.value, e, h, "", ""),
    e: (h) => h ? ae(t.value, e, "", h, "") : "",
    m: (h) => h ? ae(t.value, e, "", "", h) : "",
    be: (h, f) => h && f ? ae(t.value, e, h, f, "") : "",
    em: (h, f) => h && f ? ae(t.value, e, "", h, f) : "",
    bm: (h, f) => h && f ? ae(t.value, e, h, "", f) : "",
    bem: (h, f, b) => h && f && b ? ae(t.value, e, h, f, b) : "",
    is: (h, ...f) => {
      const b = f.length >= 1 ? f[0] : !0;
      return h && b ? `${Pa}${h}` : "";
    },
    cssVar: (h) => {
      const f = {};
      for (const b in h)
        h[b] && (f[`--${t.value}-${b}`] = h[b]);
      return f;
    },
    cssVarName: (h) => `--${t.value}-${h}`,
    cssVarBlock: (h) => {
      const f = {};
      for (const b in h)
        h[b] && (f[`--${t.value}-${e}-${b}`] = h[b]);
      return f;
    },
    cssVarBlockName: (h) => `--${t.value}-${e}-${h}`
  };
}, Ft = (e) => {
  const n = ce();
  return y(() => {
    var t, a;
    return (a = (t = n == null ? void 0 : n.proxy) == null ? void 0 : t.$props) == null ? void 0 : a[e];
  });
};
_(0);
const Aa = Symbol("zIndexContextKey"), Rt = Ot({
  type: String,
  values: Ha,
  required: !1
}), Lt = Symbol("size"), Fa = () => {
  const e = Q(Lt, {});
  return y(() => S(e.size) || "");
}, Kt = Symbol(), Le = _();
function jt(e, n = void 0) {
  const t = ce() ? Q(Kt, Le) : Le;
  return e ? y(() => {
    var a, o;
    return (o = (a = t.value) == null ? void 0 : a[e]) != null ? o : n;
  }) : t;
}
const Ra = (e, n, t = !1) => {
  var a;
  const o = !!ce(), l = o ? jt() : void 0, s = (a = n == null ? void 0 : n.provide) != null ? a : o ? et : void 0;
  if (!s) {
    _e("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const r = y(() => {
    const u = S(e);
    return l != null && l.value ? La(l.value, u) : u;
  });
  return s(Kt, r), s(Da, y(() => r.value.locale)), s(At, y(() => r.value.namespace)), s(Aa, y(() => r.value.zIndex)), s(Lt, {
    size: y(() => r.value.size || "")
  }), (t || !Le.value) && (Le.value = r.value), r;
}, La = (e, n) => {
  var t;
  const a = [.../* @__PURE__ */ new Set([...vt(e), ...vt(n)])], o = {};
  for (const l of a)
    o[l] = (t = n[l]) != null ? t : e[l];
  return o;
}, Ka = fe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: J(Object)
  },
  size: Rt,
  button: {
    type: J(Object)
  },
  experimentalFeatures: {
    type: J(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: J(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), ja = {}, Ya = B({
  name: "ElConfigProvider",
  props: Ka,
  setup(e, { slots: n }) {
    G(() => e.message, (a) => {
      Object.assign(ja, a ?? {});
    }, { immediate: !0, deep: !0 });
    const t = Ra(e);
    return () => V(n, "default", { config: t == null ? void 0 : t.value });
  }
}), Yt = Ke(Ya);
var me = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, o] of n)
    t[a] = o;
  return t;
};
const Ua = fe({
  size: {
    type: J([Number, String])
  },
  color: {
    type: String
  }
}), Wa = B({
  name: "ElIcon",
  inheritAttrs: !1
}), Ga = /* @__PURE__ */ B({
  ...Wa,
  props: Ua,
  setup(e) {
    const n = e, t = pe("icon"), a = y(() => {
      const { size: o, color: l } = n;
      return !o && !l ? {} : {
        fontSize: Na(o) ? void 0 : qe(o),
        "--color": l
      };
    });
    return (o, l) => (g(), w("i", A({
      class: S(t).b(),
      style: S(a)
    }, o.$attrs), [
      V(o.$slots, "default")
    ], 16));
  }
});
var qa = /* @__PURE__ */ me(Ga, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Qe = Ke(qa), ot = Symbol("formContextKey"), Ut = Symbol("formItemContextKey"), Qa = (e, n = {}) => {
  const t = _(void 0), a = n.prop ? t : Ft("size"), o = n.global ? t : Fa(), l = n.form ? { size: void 0 } : Q(ot, void 0), s = n.formItem ? { size: void 0 } : Q(Ut, void 0);
  return y(() => a.value || S(e) || (s == null ? void 0 : s.size) || (l == null ? void 0 : l.size) || o.value || "");
}, Wt = (e) => {
  const n = Ft("disabled"), t = Q(ot, void 0);
  return y(() => n.value || S(e) || (t == null ? void 0 : t.disabled) || !1);
}, Xa = () => {
  const e = Q(ot, void 0), n = Q(Ut, void 0);
  return {
    form: e,
    formItem: n
  };
}, se = 4, Za = {
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
}, Ja = ({
  move: e,
  size: n,
  bar: t
}) => ({
  [t.size]: n,
  transform: `translate${t.axis}(${e}%)`
}), Gt = Symbol("scrollbarContextKey"), eo = fe({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), to = "Thumb", no = /* @__PURE__ */ B({
  __name: "thumb",
  props: eo,
  setup(e) {
    const n = e, t = Q(Gt), a = pe("scrollbar");
    t || Ma(to, "can not inject scrollbar context");
    const o = _(), l = _(), s = _({}), r = _(!1);
    let u = !1, c = !1, i = tt ? document.onselectstart : null;
    const d = y(() => Za[n.vertical ? "vertical" : "horizontal"]), v = y(() => Ja({
      size: n.size,
      move: n.move,
      bar: d.value
    })), p = y(() => o.value[d.value.offset] ** 2 / t.wrapElement[d.value.scrollSize] / n.ratio / l.value[d.value.offset]), m = (x) => {
      var N;
      if (x.stopPropagation(), x.ctrlKey || [1, 2].includes(x.button))
        return;
      (N = window.getSelection()) == null || N.removeAllRanges(), f(x);
      const O = x.currentTarget;
      O && (s.value[d.value.axis] = O[d.value.offset] - (x[d.value.client] - O.getBoundingClientRect()[d.value.direction]));
    }, h = (x) => {
      if (!l.value || !o.value || !t.wrapElement)
        return;
      const N = Math.abs(x.target.getBoundingClientRect()[d.value.direction] - x[d.value.client]), O = l.value[d.value.offset] / 2, ne = (N - O) * 100 * p.value / o.value[d.value.offset];
      t.wrapElement[d.value.scroll] = ne * t.wrapElement[d.value.scrollSize] / 100;
    }, f = (x) => {
      x.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", b), document.addEventListener("mouseup", $), i = document.onselectstart, document.onselectstart = () => !1;
    }, b = (x) => {
      if (!o.value || !l.value || u === !1)
        return;
      const N = s.value[d.value.axis];
      if (!N)
        return;
      const O = (o.value.getBoundingClientRect()[d.value.direction] - x[d.value.client]) * -1, ne = l.value[d.value.offset] - N, he = (O - ne) * 100 * p.value / o.value[d.value.offset];
      t.wrapElement[d.value.scroll] = he * t.wrapElement[d.value.scrollSize] / 100;
    }, $ = () => {
      u = !1, s.value[d.value.axis] = 0, document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", $), D(), c && (r.value = !1);
    }, H = () => {
      c = !1, r.value = !!n.size;
    }, j = () => {
      c = !0, r.value = u;
    };
    sn(() => {
      D(), document.removeEventListener("mouseup", $);
    });
    const D = () => {
      document.onselectstart !== i && (document.onselectstart = i);
    };
    return Ge(Re(t, "scrollbarElement"), "mousemove", H), Ge(Re(t, "scrollbarElement"), "mouseleave", j), (x, N) => (g(), M(un, {
      name: S(a).b("fade"),
      persisted: ""
    }, {
      default: k(() => [
        cn(E("div", {
          ref_key: "instance",
          ref: o,
          class: z([S(a).e("bar"), S(a).is(S(d).key)]),
          onMousedown: h
        }, [
          E("div", {
            ref_key: "thumb",
            ref: l,
            class: z(S(a).e("thumb")),
            style: W(S(v)),
            onMousedown: m
          }, null, 38)
        ], 34), [
          [dn, x.always || r.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var yt = /* @__PURE__ */ me(no, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const ao = fe({
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
}), oo = /* @__PURE__ */ B({
  __name: "bar",
  props: ao,
  setup(e, { expose: n }) {
    const t = e, a = _(0), o = _(0);
    return n({
      handleScroll: (s) => {
        if (s) {
          const r = s.offsetHeight - se, u = s.offsetWidth - se;
          o.value = s.scrollTop * 100 / r * t.ratioY, a.value = s.scrollLeft * 100 / u * t.ratioX;
        }
      }
    }), (s, r) => (g(), w(R, null, [
      T(yt, {
        move: a.value,
        ratio: s.ratioX,
        size: s.width,
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      T(yt, {
        move: o.value,
        ratio: s.ratioY,
        size: s.height,
        vertical: "",
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var lo = /* @__PURE__ */ me(oo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const ro = fe({
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
    type: J([String, Object, Array]),
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
}), so = {
  scroll: ({
    scrollTop: e,
    scrollLeft: n
  }) => [e, n].every(re)
}, Xe = "ElScrollbar", uo = B({
  name: Xe
}), io = /* @__PURE__ */ B({
  ...uo,
  props: ro,
  emits: so,
  setup(e, { expose: n, emit: t }) {
    const a = e, o = pe("scrollbar");
    let l, s;
    const r = _(), u = _(), c = _(), i = _("0"), d = _("0"), v = _(), p = _(1), m = _(1), h = y(() => {
      const N = {};
      return a.height && (N.height = qe(a.height)), a.maxHeight && (N.maxHeight = qe(a.maxHeight)), [a.wrapStyle, N];
    }), f = y(() => [
      a.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !a.native }
    ]), b = y(() => [o.e("view"), a.viewClass]), $ = () => {
      var N;
      u.value && ((N = v.value) == null || N.handleScroll(u.value), t("scroll", {
        scrollTop: u.value.scrollTop,
        scrollLeft: u.value.scrollLeft
      }));
    };
    function H(N, O) {
      at(N) ? u.value.scrollTo(N) : re(N) && re(O) && u.value.scrollTo(N, O);
    }
    const j = (N) => {
      if (!re(N)) {
        _e(Xe, "value must be a number");
        return;
      }
      u.value.scrollTop = N;
    }, D = (N) => {
      if (!re(N)) {
        _e(Xe, "value must be a number");
        return;
      }
      u.value.scrollLeft = N;
    }, x = () => {
      if (!u.value)
        return;
      const N = u.value.offsetHeight - se, O = u.value.offsetWidth - se, ne = N ** 2 / u.value.scrollHeight, he = O ** 2 / u.value.scrollWidth, $e = Math.max(ne, a.minSize), ke = Math.max(he, a.minSize);
      p.value = ne / (N - ne) / ($e / (N - $e)), m.value = he / (O - he) / (ke / (O - ke)), d.value = $e + se < N ? `${$e}px` : "", i.value = ke + se < O ? `${ke}px` : "";
    };
    return G(() => a.noresize, (N) => {
      N ? (l == null || l(), s == null || s()) : ({ stop: l } = ya(c, x), s = Ge("resize", x));
    }, { immediate: !0 }), G(() => [a.maxHeight, a.height], () => {
      a.native || te(() => {
        var N;
        x(), u.value && ((N = v.value) == null || N.handleScroll(u.value));
      });
    }), et(Gt, Tt({
      scrollbarElement: r,
      wrapElement: u
    })), de(() => {
      a.native || te(() => {
        x();
      });
    }), Mt(() => x()), n({
      wrapRef: u,
      update: x,
      scrollTo: H,
      setScrollTop: j,
      setScrollLeft: D,
      handleScroll: $
    }), (N, O) => (g(), w("div", {
      ref_key: "scrollbarRef",
      ref: r,
      class: z(S(o).b())
    }, [
      E("div", {
        ref_key: "wrapRef",
        ref: u,
        class: z(S(f)),
        style: W(S(h)),
        onScroll: $
      }, [
        (g(), M(Ee(N.tag), {
          ref_key: "resizeRef",
          ref: c,
          class: z(S(b)),
          style: W(N.viewStyle)
        }, {
          default: k(() => [
            V(N.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      N.native ? L("v-if", !0) : (g(), M(lo, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        height: d.value,
        width: i.value,
        always: N.always,
        "ratio-x": m.value,
        "ratio-y": p.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var co = /* @__PURE__ */ me(io, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const fo = Ke(co), qt = Symbol("buttonGroupContextKey"), po = (e, n) => {
  Ia({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, y(() => e.type === "text"));
  const t = Q(qt, void 0), a = jt("button"), { form: o } = Xa(), l = Qa(y(() => t == null ? void 0 : t.size)), s = Wt(), r = _(), u = fn(), c = y(() => e.type || (t == null ? void 0 : t.type) || ""), i = y(() => {
    var m, h, f;
    return (f = (h = e.autoInsertSpace) != null ? h : (m = a.value) == null ? void 0 : m.autoInsertSpace) != null ? f : !1;
  }), d = y(() => e.tag === "button" ? {
    ariaDisabled: s.value || e.loading,
    disabled: s.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), v = y(() => {
    var m;
    const h = (m = u.default) == null ? void 0 : m.call(u);
    if (i.value && (h == null ? void 0 : h.length) === 1) {
      const f = h[0];
      if ((f == null ? void 0 : f.type) === pn) {
        const b = f.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(b.trim());
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
    handleClick: (m) => {
      e.nativeType === "reset" && (o == null || o.resetFields()), n("click", m);
    }
  };
}, mo = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], ho = ["button", "submit", "reset"], Ze = fe({
  size: Rt,
  disabled: Boolean,
  type: {
    type: String,
    values: mo,
    default: ""
  },
  icon: {
    type: gt
  },
  nativeType: {
    type: String,
    values: ho,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: gt,
    default: () => jn
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
    type: J([String, Object]),
    default: "button"
  }
}), vo = {
  click: (e) => e instanceof MouseEvent
};
function P(e, n) {
  go(e) && (e = "100%");
  var t = bo(e);
  return e = n === 360 ? e : Math.min(n, Math.max(0, parseFloat(e))), t && (e = parseInt(String(e * n), 10) / 100), Math.abs(e - n) < 1e-6 ? 1 : (n === 360 ? e = (e < 0 ? e % n + n : e % n) / parseFloat(String(n)) : e = e % n / parseFloat(String(n)), e);
}
function Se(e) {
  return Math.min(1, Math.max(0, e));
}
function go(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function bo(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Qt(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ce(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function oe(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function yo(e, n, t) {
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
function _o(e, n, t) {
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
function wo(e, n, t) {
  e = P(e, 360) * 6, n = P(n, 100), t = P(t, 100);
  var a = Math.floor(e), o = e - a, l = t * (1 - n), s = t * (1 - o * n), r = t * (1 - (1 - o) * n), u = a % 6, c = [t, s, l, l, r, t][u], i = [r, t, t, s, l, l][u], d = [l, l, r, t, t, s][u];
  return { r: c * 255, g: i * 255, b: d * 255 };
}
function $t(e, n, t, a) {
  var o = [
    oe(Math.round(e).toString(16)),
    oe(Math.round(n).toString(16)),
    oe(Math.round(t).toString(16))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function $o(e, n, t, a, o) {
  var l = [
    oe(Math.round(e).toString(16)),
    oe(Math.round(n).toString(16)),
    oe(Math.round(t).toString(16)),
    oe(ko(a))
  ];
  return o && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function ko(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function kt(e) {
  return K(e) / 255;
}
function K(e) {
  return parseInt(e, 16);
}
function So(e) {
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
function Co(e) {
  var n = { r: 0, g: 0, b: 0 }, t = 1, a = null, o = null, l = null, s = !1, r = !1;
  return typeof e == "string" && (e = No(e)), typeof e == "object" && (X(e.r) && X(e.g) && X(e.b) ? (n = yo(e.r, e.g, e.b), s = !0, r = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : X(e.h) && X(e.s) && X(e.v) ? (a = Ce(e.s), o = Ce(e.v), n = wo(e.h, a, o), s = !0, r = "hsv") : X(e.h) && X(e.s) && X(e.l) && (a = Ce(e.s), l = Ce(e.l), n = _o(e.h, a, l), s = !0, r = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (t = e.a)), t = Qt(t), {
    ok: s,
    format: e.format || r,
    r: Math.min(255, Math.max(n.r, 0)),
    g: Math.min(255, Math.max(n.g, 0)),
    b: Math.min(255, Math.max(n.b, 0)),
    a: t
  };
}
var Eo = "[-\\+]?\\d+%?", Vo = "[-\\+]?\\d*\\.\\d+%?", ee = "(?:".concat(Vo, ")|(?:").concat(Eo, ")"), Ye = "[\\s|\\(]+(".concat(ee, ")[,|\\s]+(").concat(ee, ")[,|\\s]+(").concat(ee, ")\\s*\\)?"), Ue = "[\\s|\\(]+(".concat(ee, ")[,|\\s]+(").concat(ee, ")[,|\\s]+(").concat(ee, ")[,|\\s]+(").concat(ee, ")\\s*\\)?"), U = {
  CSS_UNIT: new RegExp(ee),
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
function No(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var n = !1;
  if (Je[e])
    e = Je[e], n = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var t = U.rgb.exec(e);
  return t ? { r: t[1], g: t[2], b: t[3] } : (t = U.rgba.exec(e), t ? { r: t[1], g: t[2], b: t[3], a: t[4] } : (t = U.hsl.exec(e), t ? { h: t[1], s: t[2], l: t[3] } : (t = U.hsla.exec(e), t ? { h: t[1], s: t[2], l: t[3], a: t[4] } : (t = U.hsv.exec(e), t ? { h: t[1], s: t[2], v: t[3] } : (t = U.hsva.exec(e), t ? { h: t[1], s: t[2], v: t[3], a: t[4] } : (t = U.hex8.exec(e), t ? {
    r: K(t[1]),
    g: K(t[2]),
    b: K(t[3]),
    a: kt(t[4]),
    format: n ? "name" : "hex8"
  } : (t = U.hex6.exec(e), t ? {
    r: K(t[1]),
    g: K(t[2]),
    b: K(t[3]),
    format: n ? "name" : "hex"
  } : (t = U.hex4.exec(e), t ? {
    r: K(t[1] + t[1]),
    g: K(t[2] + t[2]),
    b: K(t[3] + t[3]),
    a: kt(t[4] + t[4]),
    format: n ? "name" : "hex8"
  } : (t = U.hex3.exec(e), t ? {
    r: K(t[1] + t[1]),
    g: K(t[2] + t[2]),
    b: K(t[3] + t[3]),
    format: n ? "name" : "hex"
  } : !1)))))))));
}
function X(e) {
  return !!U.CSS_UNIT.exec(String(e));
}
var To = (
  /** @class */
  function() {
    function e(n, t) {
      n === void 0 && (n = ""), t === void 0 && (t = {});
      var a;
      if (n instanceof e)
        return n;
      typeof n == "number" && (n = So(n)), this.originalInput = n;
      var o = Co(n);
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
      return n === void 0 && (n = !1), $o(this.r, this.g, this.b, this.a, n);
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
function Z(e, n = 20) {
  return e.mix("#141414", n).toString();
}
function Mo(e) {
  const n = Wt(), t = pe("button");
  return y(() => {
    let a = {};
    const o = e.color;
    if (o) {
      const l = new To(o), s = e.dark ? l.tint(20).toString() : Z(l, 20);
      if (e.plain)
        a = t.cssVarBlock({
          "bg-color": e.dark ? Z(l, 90) : l.tint(90).toString(),
          "text-color": o,
          "border-color": e.dark ? Z(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${t.cssVarName("color-white")})`,
          "hover-bg-color": o,
          "hover-border-color": o,
          "active-bg-color": s,
          "active-text-color": `var(${t.cssVarName("color-white")})`,
          "active-border-color": s
        }), n.value && (a[t.cssVarBlockName("disabled-bg-color")] = e.dark ? Z(l, 90) : l.tint(90).toString(), a[t.cssVarBlockName("disabled-text-color")] = e.dark ? Z(l, 50) : l.tint(50).toString(), a[t.cssVarBlockName("disabled-border-color")] = e.dark ? Z(l, 80) : l.tint(80).toString());
      else {
        const r = e.dark ? Z(l, 30) : l.tint(30).toString(), u = l.isDark() ? `var(${t.cssVarName("color-white")})` : `var(${t.cssVarName("color-black")})`;
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
          const c = e.dark ? Z(l, 50) : l.tint(50).toString();
          a[t.cssVarBlockName("disabled-bg-color")] = c, a[t.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${t.cssVarName("color-white")})`, a[t.cssVarBlockName("disabled-border-color")] = c;
        }
      }
    }
    return a;
  });
}
const Bo = B({
  name: "ElButton"
}), xo = /* @__PURE__ */ B({
  ...Bo,
  props: Ze,
  emits: vo,
  setup(e, { expose: n, emit: t }) {
    const a = e, o = Mo(a), l = pe("button"), { _ref: s, _size: r, _type: u, _disabled: c, _props: i, shouldAddSpace: d, handleClick: v } = po(a, t);
    return n({
      ref: s,
      size: r,
      type: u,
      disabled: c,
      shouldAddSpace: d
    }), (p, m) => (g(), M(Ee(p.tag), A({
      ref_key: "_ref",
      ref: s
    }, S(i), {
      class: [
        S(l).b(),
        S(l).m(S(u)),
        S(l).m(S(r)),
        S(l).is("disabled", S(c)),
        S(l).is("loading", p.loading),
        S(l).is("plain", p.plain),
        S(l).is("round", p.round),
        S(l).is("circle", p.circle),
        S(l).is("text", p.text),
        S(l).is("link", p.link),
        S(l).is("has-bg", p.bg)
      ],
      style: S(o),
      onClick: S(v)
    }), {
      default: k(() => [
        p.loading ? (g(), w(R, { key: 0 }, [
          p.$slots.loading ? V(p.$slots, "loading", { key: 0 }) : (g(), M(S(Qe), {
            key: 1,
            class: z(S(l).is("loading"))
          }, {
            default: k(() => [
              (g(), M(Ee(p.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : p.icon || p.$slots.icon ? (g(), M(S(Qe), { key: 1 }, {
          default: k(() => [
            p.icon ? (g(), M(Ee(p.icon), { key: 0 })) : V(p.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : L("v-if", !0),
        p.$slots.default ? (g(), w("span", {
          key: 2,
          class: z({ [S(l).em("text", "expand")]: S(d) })
        }, [
          V(p.$slots, "default")
        ], 2)) : L("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var zo = /* @__PURE__ */ me(xo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const Ho = {
  size: Ze.size,
  type: Ze.type
}, Io = B({
  name: "ElButtonGroup"
}), Do = /* @__PURE__ */ B({
  ...Io,
  props: Ho,
  setup(e) {
    const n = e;
    et(qt, Tt({
      size: Re(n, "size"),
      type: Re(n, "type")
    }));
    const t = pe("button");
    return (a, o) => (g(), w("div", {
      class: z(`${S(t).b("group")}`)
    }, [
      V(a.$slots, "default")
    ], 2));
  }
});
var Xt = /* @__PURE__ */ me(Do, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const Po = Ke(zo, {
  ButtonGroup: Xt
});
za(Xt);
function Oo(e) {
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
const Jt = /* @__PURE__ */ Oo(Zt);
const Ao = B({
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
      const { total: u, size: c, showSize: i } = e;
      return i ? !0 : u > c;
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
}), Fo = {
  key: 0,
  class: "page-right mt20"
};
function Ro(e, n, t, a, o, l) {
  const s = C("el-pagination"), r = C("el-config-provider");
  return e.showPage ? (g(), w("div", Fo, [
    T(r, { locale: e.locale }, {
      default: k(() => [
        T(s, {
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
  ])) : L("", !0);
}
const ue = /* @__PURE__ */ I(Ao, [["render", Ro], ["__scopeId", "data-v-77c509db"]]);
ue.install = function(e) {
  e.component(ue.name, ue);
};
const Lo = B({
  name: "KTable",
  components: { pagination: ue },
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
      const c = u === "ascending" ? 1 : 0;
      n("sort-change", {
        prop: r == null ? void 0 : r.rawColumnKey,
        order: u,
        sortType: c,
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
}), Ko = { key: 2 };
function jo(e, n, t, a, o, l) {
  const s = C("el-table-column"), r = C("el-table"), u = C("pagination");
  return g(), w(R, null, [
    T(r, A({
      data: e.tableDataList,
      style: { width: "100%" },
      class: "mt20",
      "header-cell-style": e.headerCellStyle
    }, e.$attrs, {
      "empty-text": e.emptyText,
      onSortChange: e.sortChange,
      ref: "elTable"
    }), ie({
      default: k(() => [
        (g(!0), w(R, null, q(e.tableColumn, (c) => (g(), M(s, {
          key: c.prop,
          label: c.label,
          name: c.name,
          width: c.width,
          "min-width": c.minWidth,
          fixed: c.fixed,
          sortable: c.sortable,
          type: c.type,
          "show-overflow-tooltip": e.showOverflowTooltip
        }, ie({
          default: k((i) => [
            e.$slots.default ? V(e.$slots, "default", {
              key: 0,
              item: i.row,
              row: i.row,
              index: i.$index
            }) : c.custom && i.$index >= 0 ? V(e.$slots, c.custom, {
              key: 1,
              item: i.row,
              row: i.row,
              index: i.$index
            }) : (g(), w("span", Ko, F(i.row[c.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          c.header ? {
            name: "header",
            fn: k(() => [
              V(e.$slots, c.header)
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
          V(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "empty-text", "onSortChange"]),
    T(u, {
      total: e.total,
      size: e.size,
      "show-size": e.showSize,
      modelValue: e.currentPage,
      "onUpdate:modelValue": n[0] || (n[0] = (c) => e.currentPage = c),
      onCurrentChange: e.changePage
    }, null, 8, ["total", "size", "show-size", "modelValue", "onCurrentChange"])
  ], 64);
}
const Te = /* @__PURE__ */ I(Lo, [["render", jo]]);
Te.install = function(e) {
  e.component(Te.name, Te);
};
const Yo = B({
  name: "KVirtualList",
  components: { ElScrollbar: fo },
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
    de(() => {
      l.value = Number(r()) || 10, u.value = e.data.length * s();
    });
    const c = (f) => Math.floor(f / s()), i = (f) => Math.ceil(f * s()), d = (f) => f >= t.value && f <= l.value, v = y(() => e.data.filter((f, b) => d(b)));
    return G(() => e.data, (f) => {
      f.length || (t.value = 0, a.value = 0), e.data.forEach((b, $) => {
        b.rowIndex = $;
      }), te(() => {
        u.value = e.data.length * s();
      });
    }), {
      startIndex: t,
      endIndex: l,
      startOffset: a,
      viewport: o,
      onScroll: (f) => {
        const { scrollTop: b, clientHeight: $ } = o.value.wrapRef;
        t.value = c(b), a.value = i(t.value), l.value = r();
        const H = Math.abs(u.value - $ - b);
        n("scroll", { distance: H, ...f });
      },
      showViewRanges: d,
      containHeight: u,
      listRanges: v,
      rowClick: (f, b) => {
        n("row-click", f, b);
      },
      rowClassHandle: (f, b) => typeof e.rowClassName == "function" ? e.rowClassName({ row: f, rowIndex: b }) : e.rowClassName
    };
  }
}), Uo = {
  class: "virtual-list",
  "data-testid": "virtual-list"
}, Wo = ["onClick"];
function Go(e, n, t, a, o, l) {
  const s = C("el-scrollbar");
  return g(), M(s, A({
    height: e.height,
    ref: "viewport"
  }, e.$attrs, { onScroll: e.onScroll }), {
    default: k(() => [
      E("div", Uo, [
        E("div", {
          class: "list-contain",
          style: W({ height: `${e.containHeight}px` })
        }, null, 4),
        E("div", {
          class: "list-content",
          style: W({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          (g(!0), w(R, null, q(e.listRanges, (r, u) => (g(), w("div", {
            key: u,
            class: z(["list-item", e.rowClassHandle(r, r.rowIndex)]),
            style: W(e.rowStyle),
            onClick: (c) => e.rowClick(r, r.rowIndex)
          }, [
            V(e.$slots, "default", {
              row: r,
              index: r.rowIndex
            }, () => [
              Y(F(r.name), 1)
            ], !0)
          ], 14, Wo))), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["height", "onScroll"]);
}
const be = /* @__PURE__ */ I(Yo, [["render", Go], ["__scopeId", "data-v-e53aecaa"]]);
be.install = function(e) {
  e.component(be.name, be);
};
const en = {
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
  summaryMethod: { type: [String, Function], default: "" }
};
function tn(e) {
  const n = _(null), t = (s) => {
    var v, p, m, h;
    let r = {};
    const {
      align: u,
      width: c,
      fixed: i,
      minWidth: d
    } = s;
    if (u && (r["text-center"] = `${u}`), d && (r["min-width"] = `${d}`), c && (r = {
      ...r,
      width: `${c}`,
      flex: "inherit",
      "flex-shrink": 0
    }), i) {
      const f = e.tableColumn.findIndex(($) => $.prop === s.prop), b = e.tableColumn.length;
      if (r = {
        ...r,
        position: "sticky",
        "z-index": 50
      }, i === "left") {
        const $ = (v = e.tableColumn.filter((D) => D.fixed === "left")) == null ? void 0 : v.length;
        let H = 0;
        f > 0 && f < b - 1 && $ > 1 && (H = (p = n.value) == null ? void 0 : p.at(f - 1).clientWidth), r.left = `${H}px`;
        let j = 0;
        e.tableColumn.forEach((D, x) => {
          D.fixed === "left" && (j = x);
        }), j === f && (r["box-shadow"] = "3px 0px 4px #b0a8a836");
      } else {
        const $ = (m = e.tableColumn.filter((D) => D.fixed && D.fixed !== "left")) == null ? void 0 : m.length;
        let H = 0;
        f < b - 1 && $ > 1 && (H = (h = n.value) == null ? void 0 : h.at(f + 1).clientWidth), e.tableColumn.findIndex((D) => D.fixed && D.fixed !== "left") === f && (r["box-shadow"] = "-3px 0 4px #b0a8a836"), r.right = `${H}px`;
      }
    }
    return e.isFooter && (r.color = "#606266"), r;
  }, a = _(null), o = (s) => {
    const r = e.tableData.reduce((u, c) => u + Number(c[s.prop]), 0);
    return Number.isNaN(r) ? "N/A" : r.toFixed(2);
  };
  return {
    headerColmn: n,
    headerClass: t,
    tableHeader: a,
    getSummaries: (s, r) => e.summaryMethod ? e.summaryMethod({ row: s, index: r }) : r ? o(s) : e.sumText
  };
}
const qo = { class: "flex table-border-bottom header-content" }, Qo = {
  key: 0,
  class: "table-header-sort flex-column flex-center"
}, Xo = { class: "sort-wrapper" }, Zo = ["onClick"], Jo = ["onClick"], el = {
  __name: "headerFooter",
  props: {
    ...en,
    isFooter: { type: Boolean, default: !1 }
  },
  emits: ["sort-change"],
  setup(e, { expose: n, emit: t }) {
    const a = e, { headerClass: o, tableHeader: l } = tn(a), s = _(null), r = _({}), u = (i, d) => {
      r.value = d, s.value = s.value === i ? null : i, t("sort-change", { column: d, sortType: s.value });
    };
    return n({
      setScrollLeft: (i) => {
        l.value.scrollLeft = `${i}`;
      }
    }), (i, d) => (g(), w("div", {
      class: "table-header overflow",
      ref_key: "tableHeader",
      ref: l
    }, [
      E("div", qo, [
        (g(!0), w(R, null, q(i.tableColumn, (v, p) => (g(), w("div", {
          key: p,
          class: "header-column cell flex-align-center",
          ref_for: !0,
          ref: "headerColmn",
          style: W([i.headerCellStyle, S(o)(v)])
        }, [
          V(i.$slots, "default", {
            row: v,
            index: p
          }, () => [
            Y(F(v.label), 1)
          ], !0),
          v.sortable && !e.isFooter ? (g(), w("div", Qo, [
            E("span", Xo, [
              E("i", {
                class: z(["sort-caret ascending", { "bottom-caret": s.value === "ascending" && r.value.prop == v.prop }]),
                onClick: (m) => u("ascending", v)
              }, null, 10, Zo),
              E("i", {
                class: z(["sort-caret descending", { "top-caret": s.value === "descending" && r.value.prop == v.prop }]),
                onClick: (m) => u("descending", v)
              }, null, 10, Jo)
            ])
          ])) : L("", !0)
        ], 4))), 128))
      ])
    ], 512));
  }
}, tl = /* @__PURE__ */ I(el, [["__scopeId", "data-v-2fd08206"]]);
const nl = B({
  name: "KTableV2",
  components: { virtualList: be, headerFooter: tl },
  props: en,
  emits: ["sort-change"],
  setup(e, { emit: n }) {
    const t = y(() => e.tableColumn.map((v, p) => ({ ...v, keyId: p }))), {
      headerColmn: a,
      headerClass: o,
      tableHeader: l,
      getSummaries: s
    } = tn(e), r = _(null), u = ({ scrollLeft: v }) => {
      var p, m;
      (p = l.value) == null || p.setScrollLeft(v), (m = r.value) == null || m.setScrollLeft(v);
    }, c = ({ column: v, sortType: p }) => n("sort-change", { column: v, sortType: p }), i = _(null), d = (v) => {
      var p;
      return (p = i.value) == null ? void 0 : p.viewport.setScrollTop(v);
    };
    return {
      ...mn(e),
      columnList: t,
      headerClass: o,
      tableHeader: l,
      tableBottom: r,
      scrollHandle: u,
      headerColmn: a,
      clickSortCaret: c,
      virtualRef: i,
      setScrollTop: d,
      getSummaries: s
    };
  }
}), al = { class: "table-v2 el-table flex-column" }, ol = { class: "flex table-body" };
function ll(e, n, t, a, o, l) {
  const s = C("headerFooter"), r = C("virtualList");
  return g(), w("div", al, [
    T(s, {
      ref: "tableHeader",
      "table-column": e.tableColumn,
      onSortChange: e.clickSortCaret
    }, {
      default: k(({ row: u, index: c }) => [
        V(e.$slots, u == null ? void 0 : u.header, {
          row: u,
          index: c
        }, () => [
          Y(F(u.label), 1)
        ], !0)
      ]),
      _: 3
    }, 8, ["table-column", "onSortChange"]),
    T(r, A({
      data: e.tableData,
      always: "",
      ref: "virtualRef",
      "row-class-name": e.rowClassName
    }, e.$attrs, {
      height: e.height,
      onScroll: e.scrollHandle
    }), {
      default: k(({ row: u, index: c }) => [
        V(e.$slots, "content", {}, () => [
          E("div", ol, [
            (g(!0), w(R, null, q(e.columnList, (i) => (g(), w("div", {
              key: i.keyId,
              class: z(["cell table-row table-border-bottom flex-align-center", { "fixed-cell": i.fixed }]),
              ref_for: !0,
              ref: "bodyCell",
              style: W(e.headerClass(i))
            }, [
              E("div", {
                class: z({ "text-overflow": i.showOverflowTooltip ?? !0 })
              }, [
                V(e.$slots, (i == null ? void 0 : i.custom) ?? "default", {
                  row: u,
                  index: c
                }, () => [
                  Y(F(u[i.prop]), 1)
                ], !0)
              ], 2)
            ], 6))), 128))
          ])
        ], !0)
      ]),
      _: 3
    }, 16, ["data", "row-class-name", "height", "onScroll"]),
    V(e.$slots, "footer", {}, () => [
      e.showSummary || e.$slots.footer ? (g(), M(s, {
        key: 0,
        ref: "tableBottom",
        "table-column": e.tableColumn,
        "is-footer": ""
      }, {
        default: k(({ row: u, index: c }) => [
          Y(F(e.getSummaries(u, c)), 1)
        ]),
        _: 1
      }, 8, ["table-column"])) : L("", !0)
    ], !0)
  ]);
}
const Me = /* @__PURE__ */ I(nl, [["render", ll], ["__scopeId", "data-v-1be5c93b"]]);
Me.install = function(e) {
  e.component(Me.name, Me);
};
const rl = {
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
}, sl = B({
  name: "KBatchTable",
  components: { pagination: ue },
  props: rl,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { emit: n }) {
    const t = _(null), a = () => t.value.clearSelection(), o = (m) => {
      m ? e.tableData.forEach((h) => {
        m.forEach((f) => {
          p(h) === p(f) && te(() => t.value && t.value.toggleRowSelection(h));
        });
      }) : (l.value = [], t.value.clearSelection());
    }, l = y({
      get: () => e.modelValue,
      set: (m) => n("update:modelValue", m)
    });
    G(() => e.modelValue, (m) => {
      !m.length && t.value && t.value.clearSelection();
    });
    const s = () => {
      setTimeout(() => {
        e.selectList.length && (e.tableData.forEach((m) => {
          m[e.checkKey] = m[e.checkKey] ?? 1;
        }), e.selectList.forEach((m) => {
          e.tableData.forEach((h) => {
            p(m) === p(h) && (h[e.checkKey] = 0);
          });
        }), o(l.value));
      }, 200);
    };
    G(() => e.tableData, (m) => {
      te(() => {
        m.length && s(), m.length && o(l.value);
      });
    }, { immediate: !0 });
    const r = (m, h) => {
      m.some((b) => p(b) === p(h)) ? l.value = [...l.value, h] : l.value = l.value.filter((b) => p(b) !== p(h));
    }, u = (m) => {
      if (l.value.length)
        if (m.length) {
          const h = m.filter((f) => l.value.every((b) => p(b) !== p(f)));
          l.value = [...l.value, ...h];
        } else
          l.value = l.value.filter((h) => e.tableData.every((f) => p(h) !== p(f)));
      else
        l.value = m;
    }, c = (m) => {
      if (!i(m))
        return;
      const h = l.value.some((f) => p(f) === p(m));
      o([m]), h ? l.value = l.value.filter((f) => p(f) !== p(m)) : l.value = [...l.value, m], n("row-click", m);
    }, i = (m) => m[e.checkKey] ?? !m[e.checkKey], d = y({
      get: () => e.page,
      set: (m) => n("update:page", m)
    }), v = (m) => {
      n("current-change", m);
    }, p = (m) => m[e.keyId];
    return {
      multipleTable: t,
      handleSelect: r,
      selectAll: u,
      handleRowClick: c,
      checkSelection: i,
      toggleSelection: o,
      currentPage: d,
      changePage: v,
      clear: a
    };
  }
}), ul = { key: 2 }, il = { class: "mt20 flex-between" }, cl = { class: "flex1" };
function dl(e, n, t, a, o, l) {
  const s = C("el-table-column"), r = C("el-table"), u = C("pagination");
  return g(), w(R, null, [
    T(r, A({ ref: "multipleTable" }, e.$attrs, {
      "empty-text": "暂无数据",
      data: e.tableData,
      "header-cell-style": e.headerCellStyle,
      onSelect: e.handleSelect,
      onSelectAll: e.selectAll,
      onRowClick: e.handleRowClick
    }), ie({
      default: k(() => [
        T(s, {
          type: "selection",
          width: "55",
          selectable: e.checkSelection
        }, null, 8, ["selectable"]),
        (g(!0), w(R, null, q(e.tableColumn, (c) => (g(), M(s, {
          label: c.label,
          key: c.prop,
          width: c.width,
          fixed: c.fixed,
          "min-width": c.minWidth,
          "show-overflow-tooltip": ""
        }, ie({
          default: k((i) => [
            e.$slots.default ? V(e.$slots, "default", {
              key: 0,
              item: i.row,
              row: i.row,
              column: c,
              index: i.$index
            }) : L("", !0),
            c.custom && i.$index >= 0 ? V(e.$slots, c.custom, {
              key: 1,
              item: i.row,
              column: c,
              row: i.row,
              index: i.$index
            }) : (g(), w("span", ul, F(i.row[c.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          c.header ? {
            name: "header",
            fn: k(() => [
              V(e.$slots, "header", { column: c }),
              V(e.$slots, c.header, { column: c })
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
          V(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "onSelect", "onSelectAll", "onRowClick"]),
    E("div", il, [
      E("div", cl, [
        e.$slots.footer ? V(e.$slots, "footer", { key: 0 }) : L("", !0)
      ]),
      T(u, {
        total: e.total,
        "show-size": e.showSize,
        class: "mt0 ml20",
        modelValue: e.currentPage,
        "onUpdate:modelValue": n[0] || (n[0] = (c) => e.currentPage = c),
        onCurrentChange: e.changePage
      }, null, 8, ["total", "show-size", "modelValue", "onCurrentChange"])
    ])
  ], 64);
}
const ye = /* @__PURE__ */ I(sl, [["render", dl]]);
ye.install = function(e) {
  e.component(ye.name, ye);
};
const fl = B({
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
}), pl = /* @__PURE__ */ E("span", null, "这是一段信息", -1), ml = { class: "dialog-footer" };
function hl(e, n, t, a, o, l) {
  const s = C("el-button"), r = C("el-dialog");
  return g(), M(r, A({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": n[1] || (n[1] = (u) => e.dialogVisible = u),
    class: e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), ie({
    default: k(() => [
      V(e.$slots, "default", {}, () => [
        pl
      ])
    ]),
    _: 2
  }, [
    e.showFooter ? {
      name: "footer",
      fn: k(() => [
        V(e.$slots, "footer", {}, () => [
          E("span", ml, [
            T(s, {
              size: "large",
              onClick: n[0] || (n[0] = (u) => e.dialogVisible = !1)
            }, {
              default: k(() => [
                Y("取 消")
              ]),
              _: 1
            }),
            T(s, {
              size: "large",
              type: "primary",
              disabled: e.confirmDisabled,
              onClick: e.confirmHandler
            }, {
              default: k(() => [
                Y("确 定")
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
const Be = /* @__PURE__ */ I(fl, [["render", hl]]);
Be.install = function(e) {
  e.component(Be.name, Be);
};
const vl = B({
  name: "KBreadcrumb",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = ce().appContext.config.globalProperties.$router;
    return { clickHandle: (o, l) => {
      if (o.url) {
        window.location.href = o.url;
        return;
      }
      o.path ? t == null || t.push(o.path) : t == null || t.go(l - e.list.length + 1);
    } };
  }
}), gl = { class: "crumb-header flex-between" }, bl = { class: "crumb-contain" }, yl = ["onClick"];
function _l(e, n, t, a, o, l) {
  const s = C("el-space");
  return g(), w("div", gl, [
    E("div", bl, [
      T(s, { spacer: "/" }, {
        default: k(() => [
          (g(!0), w(R, null, q(e.list, (r, u) => (g(), w("span", {
            key: u,
            class: z({ "crumb-item": u !== e.list.length - 1 }),
            onClick: (c) => e.clickHandle(r, u)
          }, F(r.title), 11, yl))), 128))
        ]),
        _: 1
      })
    ]),
    V(e.$slots, "default", {}, void 0, !0)
  ]);
}
const xe = /* @__PURE__ */ I(vl, [["render", _l], ["__scopeId", "data-v-4520378f"]]);
xe.install = function(e) {
  e.component(xe.name, xe);
};
const wl = B({
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
    const t = ce(), a = y(() => t.appContext.config.globalProperties.$route), o = t.appContext.config.globalProperties.$router, l = y(() => {
      var c, i;
      return ((c = a.value) == null ? void 0 : c.params.type) || ((i = a.value) == null ? void 0 : i.name);
    }), s = _(l.value);
    we(() => {
      s.value = e.modelValue || l.value, n("update:modelValue", s.value);
    });
    const r = y(() => a.value.query);
    return { activeName: s, handleClick: (c) => {
      if (e.isRouter) {
        const i = { path: `${c.paneName}`, query: r.value };
        e.replace ? o.replace(i) : o.push(i);
      }
      n("tab-click", c.paneName), n("change", c.paneName), n("update:modelValue", c.paneName);
    } };
  }
}), $l = { class: "tabs-right ml10" };
function kl(e, n, t, a, o, l) {
  const s = C("el-tab-pane"), r = C("el-tabs");
  return g(), w("div", {
    class: z(["k-tabs", { "style-card": !e.type, "style-padding": e.isPadding && !e.type }])
  }, [
    T(r, A({
      class: "flex-tabs",
      type: e.type
    }, e.$attrs, {
      modelValue: e.activeName,
      "onUpdate:modelValue": n[0] || (n[0] = (u) => e.activeName = u),
      onTabClick: e.handleClick
    }), {
      default: k(() => [
        (g(!0), w(R, null, q(e.tabsList, (u) => (g(), M(s, {
          label: u.label,
          name: u.name,
          key: u.name
        }, null, 8, ["label", "name"]))), 128))
      ]),
      _: 1
    }, 16, ["type", "modelValue", "onTabClick"]),
    E("div", $l, [
      V(e.$slots, "default")
    ])
  ], 2);
}
const ze = /* @__PURE__ */ I(wl, [["render", kl]]);
ze.install = function(e) {
  e.component(ze.name, ze);
};
const Sl = B({
  name: "KPicker",
  components: { batchTable: ye, Delete: On },
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
      set: (i) => n("update:modelValue", i)
    });
    we(() => {
      e.showCount && t.value.forEach((i) => {
        i.num = i.num ?? 1;
      });
    });
    const a = _(null), o = () => a.value.toggleSelection(), l = (i) => a.value.handleRowClick(i), s = _(1);
    return {
      multipleSelection: t,
      batchTableRef: a,
      currentPage: s,
      emptyHandler: o,
      resetData: () => {
        s.value = 1, o();
      },
      deleteHandler: l,
      getName: (i) => i[e.keyName],
      getId: (i) => i[e.keyId]
    };
  }
}), Cl = { class: "k-picker" }, El = { class: "col-left" }, Vl = { class: "col-right" }, Nl = { class: "selete-header flex-between" }, Tl = { class: "selete-content" }, Ml = { class: "flex flex1 mr20 overflow" }, Bl = { class: "text-overflow" };
function xl(e, n, t, a, o, l) {
  const s = C("batchTable"), r = C("el-col"), u = C("delete"), c = C("el-icon"), i = C("el-button"), d = C("el-tooltip"), v = C("el-input-number"), p = C("el-row");
  return g(), w("div", Cl, [
    V(e.$slots, "top", {}, void 0, !0),
    T(p, { gutter: 10 }, {
      default: k(() => [
        T(r, { span: 15 }, {
          default: k(() => [
            E("div", El, [
              T(s, {
                ref: "batchTableRef",
                height: "440px",
                "table-data": e.tableData,
                "table-column": e.tableColumn,
                "select-list": e.selectList,
                "key-id": e.keyId,
                modelValue: e.multipleSelection,
                "onUpdate:modelValue": n[0] || (n[0] = (m) => e.multipleSelection = m),
                page: e.currentPage,
                "onUpdate:page": n[1] || (n[1] = (m) => e.currentPage = m)
              }, {
                header: k(({ column: m }) => [
                  V(e.$slots, m.header, { column: m }, void 0, !0)
                ]),
                default: k(({ row: m, column: h, index: f }) => [
                  h.custom && f >= 0 ? V(e.$slots, h.custom, {
                    key: 0,
                    row: m,
                    index: f
                  }, void 0, !0) : L("", !0)
                ]),
                _: 3
              }, 8, ["table-data", "table-column", "select-list", "key-id", "modelValue", "page"])
            ])
          ]),
          _: 3
        }),
        T(r, { span: 9 }, {
          default: k(() => [
            V(e.$slots, "right", {}, () => [
              E("div", Vl, [
                E("div", Nl, [
                  V(e.$slots, "right-header", {}, () => [
                    E("span", null, [
                      Y("已选择"),
                      E("span", null, "(" + F(e.multipleSelection.length) + ")", 1)
                    ]),
                    T(i, {
                      text: "",
                      disabled: !e.multipleSelection.length,
                      onClick: e.emptyHandler
                    }, {
                      default: k(() => [
                        T(c, null, {
                          default: k(() => [
                            T(u)
                          ]),
                          _: 1
                        }),
                        Y(" 清空 ")
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"])
                  ], !0)
                ]),
                E("div", Tl, [
                  (g(!0), w(R, null, q(e.multipleSelection, (m) => (g(), w("div", {
                    class: z(["flex-between pl10 pr10", { mt10: e.showCount }]),
                    key: e.getId(m)
                  }, [
                    E("div", Ml, [
                      T(d, {
                        effect: "dark",
                        content: e.getName(m),
                        placement: "top"
                      }, {
                        default: k(() => [
                          E("span", Bl, F(e.getName(m)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ]),
                    e.showCount ? (g(), M(v, {
                      key: 0,
                      modelValue: m.num,
                      "onUpdate:modelValue": (h) => m.num = h,
                      min: 1,
                      class: "width-100 flex-shrink mr10"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                    T(i, {
                      text: "",
                      onClick: (h) => e.deleteHandler(m)
                    }, {
                      default: k(() => [
                        Y(" 删除 ")
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
    V(e.$slots, "footer", {}, void 0, !0)
  ]);
}
const He = /* @__PURE__ */ I(Sl, [["render", xl], ["__scopeId", "data-v-3723b329"]]);
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
  components: { Warning: ua }
});
function Hl(e, n, t, a, o, l) {
  const s = C("warning"), r = C("el-icon"), u = C("el-tooltip");
  return g(), w("div", {
    class: z(["flex flex1", { "text-overflow": e.overflow }])
  }, [
    T(u, A(e.$attrs, { placement: e.placement }), {
      content: k(() => [
        V(e.$slots, "content", {}, void 0, !0)
      ]),
      default: k(() => [
        E("div", {
          class: z(["flex-center", { "text-overflow": e.overflow }])
        }, [
          V(e.$slots, "default", {}, void 0, !0),
          e.showIcon ? (g(), M(r, {
            key: 0,
            class: "ml5"
          }, {
            default: k(() => [
              V(e.$slots, "icon", {}, () => [
                T(s)
              ], !0)
            ]),
            _: 3
          })) : L("", !0)
        ], 2)
      ]),
      _: 3
    }, 16, ["placement"])
  ], 2);
}
const Ie = /* @__PURE__ */ I(zl, [["render", Hl], ["__scopeId", "data-v-d468c200"]]);
Ie.install = function(e) {
  e.component(Ie.name, Ie);
};
const Il = {
  __name: "main",
  setup(e) {
    return (n, t) => (g(), M(S(Yt), { locale: S(Jt) }, {
      default: k(() => [
        V(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale"]));
  }
}, nn = {
  __name: "datePicker",
  props: {
    type: { type: String, default: "daterange" },
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, a = y(() => t.type === "datetimerange" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"), o = (i) => {
      const d = /* @__PURE__ */ new Date(), v = /* @__PURE__ */ new Date();
      return d.setTime(d.getTime() - 3600 * 1e3 * 24 * i), t.type === "date" ? d : [d, v];
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
      set: (i) => n("update:modelValue", i)
    }), u = (i) => i.getTime() > Date.now(), c = (i) => n("change", i);
    return (i, d) => {
      const v = C("el-date-picker");
      return g(), M(v, {
        modelValue: r.value,
        "onUpdate:modelValue": d[0] || (d[0] = (p) => r.value = p),
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
        onChange: c
      }, null, 8, ["modelValue", "type", "format"]);
    };
  }
}, Dl = { class: "date-picker flex" }, Pl = {
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
      set: (p) => n("update:modelValue", p)
    }), s = (p) => p.getTime() > Date.now(), r = y(() => ({
      0: "YYYY-MM-DD",
      1: "YYYY 第 ww 周",
      2: "YYYY-MM",
      3: "YYYY"
    })[a.value]), u = y(() => ({
      0: t.daterange ? "daterange" : "date",
      1: "week",
      2: "month",
      3: "year"
    })[a.value]), c = y(() => {
      const { label: p } = o.value.filter((m) => m.value === a.value)[0];
      return `选择${p}`;
    }), i = _("");
    we(() => {
      if (Array.isArray(l.value)) {
        const [p, m] = l.value;
        i.value = [p, m];
      }
    });
    const d = (p) => {
      if (p) {
        if (Array.isArray(l.value)) {
          const [m] = l.value;
          l.value = m;
        }
      } else
        t.daterange && (l.value = i.value);
      v();
    }, v = () => {
      n("change", { type: a.value, time: l.value });
    };
    return (p, m) => {
      const h = C("el-option"), f = C("el-select"), b = C("el-date-picker");
      return g(), w("div", Dl, [
        T(f, {
          modelValue: a.value,
          "onUpdate:modelValue": m[0] || (m[0] = ($) => a.value = $),
          class: "width-100 mr10",
          onChange: d
        }, {
          default: k(() => [
            (g(!0), w(R, null, q(o.value, ($) => (g(), M(h, {
              key: $.value,
              label: $.label,
              value: $.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        E("div", null, [
          e.daterange && !a.value ? (g(), M(nn, A({
            key: 0,
            modelValue: l.value,
            "onUpdate:modelValue": m[1] || (m[1] = ($) => l.value = $)
          }, p.$props, { onChange: v }), null, 16, ["modelValue"])) : (g(), M(b, {
            key: 1,
            modelValue: l.value,
            "onUpdate:modelValue": m[2] || (m[2] = ($) => l.value = $),
            type: u.value,
            format: r.value,
            "value-format": "YYYY-MM-DD HH:mm:ss",
            placeholder: c.value,
            "disabled-date": s,
            clearable: !1,
            editable: !1,
            "start-placeholder": "开始日期",
            "end-placeholder": "结束日期",
            onChange: v
          }, null, 8, ["modelValue", "type", "format", "placeholder"]))
        ])
      ]);
    };
  }
}, Ol = B({
  name: "KDatePicker",
  props: {
    selectType: { type: Boolean, default: !1 }
    // 是否选择模式（年月日）
    // daterange: { type: Boolean, default: false }, // 是否选择模式下 是否日期范围
  },
  components: { configProvider: Il, selectType: Pl, datePicker: nn },
  setup() {
  }
});
function Al(e, n, t, a, o, l) {
  const s = C("selectType"), r = C("datePicker"), u = C("config-provider");
  return g(), M(u, null, {
    default: k(() => [
      e.selectType ? (g(), M(s, st(A({ key: 0 }, e.$attrs)), null, 16)) : (g(), M(r, st(A({ key: 1 }, e.$attrs)), null, 16))
    ]),
    _: 1
  });
}
const De = /* @__PURE__ */ I(Ol, [["render", Al]]);
De.install = function(e) {
  e.component(De.name, De);
};
const lt = B({
  name: "KNumberKeyboard",
  components: { ElButton: Po },
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
      set: (v) => n("update:modelValue", v)
    }), l = () => {
      te(() => n("change", o.value));
    }, s = (v) => {
      if (e.maxlength && o.value.length >= Number(e.maxlength))
        return;
      const p = o.value.indexOf("."), m = o.value.split(".");
      m.length === 2 && (v === "." || m[1].length >= e.precision) || (o.value = `${p === 0 ? 0 : ""}${o.value}${v}`, !e.startZero && o.value.slice(0, 1) === "0" && (o.value = o.value.slice(1) + v), l());
    }, r = (v) => {
      v === "delete" ? o.value = o.value.slice(0, o.value.length - 1) : v === "clear" && (o.value = "", n("clear")), v === "confirm" ? n("confirm") : l();
    }, u = ({ key: v, name: p }) => {
      v ? r(v) : s(p);
    }, c = y(() => `${Number(4 * e.width + 20)}px`), i = y(() => `${e.width}px`), d = y(() => e.decimalPoint ? 3 : 4);
    return {
      keyboardList: a,
      clickHandleBtn: u,
      clickBtn: s,
      totalwidth: c,
      gridwidth: i,
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
const Fl = { class: "number-keyboard mt10" }, Rl = { class: "number-ul" };
function Ll(e, n, t, a, o, l) {
  const s = C("el-button");
  return g(), w("div", Fl, [
    E("ul", Rl, [
      (g(!0), w(R, null, q(e.keyboardList, (r, u) => (g(), w("li", {
        key: u,
        class: z(r.class)
      }, [
        T(s, {
          type: r.type,
          color: e.color,
          onClick: (c) => e.clickHandleBtn(r)
        }, {
          default: k(() => [
            Y(F(r.name), 1)
          ]),
          _: 2
        }, 1032, ["type", "color", "onClick"])
      ], 2))), 128))
    ])
  ]);
}
const Pe = /* @__PURE__ */ I(lt, [["render", Ll], ["__scopeId", "data-v-2e1be318"]]);
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
      const c = +u.innerText, i = +t.value / 200, d = r && c < Number(t.value) || !r && c > Number(t.value);
      r && c > e.end || c < e.start || (d ? s(u, r ? c + i : c - i, r) : u.interText = a(t.value));
    }, s = (r, u, c = !0) => {
      const i = u < e.start ? e.start : `${e.decimals ? u : Math.floor(u)}`, d = u > e.end ? e.end : `${e.decimals ? u : Math.ceil(u)}`;
      r.innerText = a(c ? d : i);
      const v = setTimeout(() => {
        clearTimeout(v), c ? l() : l(!1);
      }, 5);
    };
    return de(() => {
      o.value && e.autoinit && l();
    }), Mt(() => {
      if (e.autoinit) {
        const r = +o.value.innerText;
        l(r < Number(t.value));
      }
    }), { textValue: t, spanText: o, setDeimals: a };
  }
}), jl = { class: "auto-counter" }, Yl = { class: "mr5" }, Ul = { class: "ml5" };
function Wl(e, n, t, a, o, l) {
  return g(), w("div", jl, [
    E("span", Yl, F(e.prefix), 1),
    E("span", {
      class: "span-text",
      ref: "spanText"
    }, F(e.autoinit ? e.setDeimals(e.start) : e.setDeimals(e.textValue)), 513),
    E("span", Ul, F(e.suffix), 1)
  ]);
}
const Oe = /* @__PURE__ */ I(Kl, [["render", Wl]]);
Oe.install = function(e) {
  e.component(Oe.name, Oe);
};
const Gl = B({
  name: "KCollapseButton",
  components: { ElIcon: Qe, CaretLeft: En, CaretRight: xn },
  props: {
    style: { type: Object, default: () => ({}) },
    position: { type: String, default: "right" }
  },
  emits: ["click"],
  setup(e, { emit: n, slots: t }) {
    const a = _(!1), o = _(null);
    de(() => {
      const { parentNode: r } = o.value;
      r.style.position = "relative", r.style.overflow = "initial";
    });
    const l = y(() => {
      const { clientWidth: r, clientHeight: u } = o.value || {}, {
        top: c,
        right: i,
        width: d,
        height: v,
        left: p,
        bottom: m
      } = e.style, h = {
        right: {
          top: c ?? "50%",
          right: i ?? `-${r}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: c ? "0px" : `-${Math.ceil(u / 2)}px`
        },
        left: {
          top: c ?? "50%",
          left: p ?? `-${r}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: c ? "0px" : `-${Math.ceil(u / 2)}px`,
          transform: t != null && t.default ? "" : "rotate(180deg)"
        },
        top: {
          left: p ?? "50%",
          marginLeft: p ?? (t == null ? void 0 : t.default) ? `-${Math.ceil(r / 2)}px` : "0px",
          top: c ?? (t == null ? void 0 : t.default) ? `-${u}px` : `-${Math.ceil(u / 2 + r / 2)}px`,
          borderRadius: t != null && t.default ? "5px 5px 0 0" : "0 5px 5px 0",
          transform: t != null && t.default ? "" : "rotate(-90deg)"
        },
        bottom: {
          left: p ?? "50%",
          bottom: m ?? (t == null ? void 0 : t.default) ? `-${u}px` : `-${Math.ceil(u / 2 + r / 2)}px`,
          marginLeft: p ?? (t == null ? void 0 : t.default) ? `-${Math.ceil(r / 2)}px` : "0px",
          borderRadius: t != null && t.default ? "0 0 5px 5px" : " 0 5px 5px 0",
          transform: t != null && t.default ? "" : "rotate(90deg)"
        }
      };
      return {
        width: d ?? (t == null ? void 0 : t.default) ? "" : "10px",
        height: v ?? (t == null ? void 0 : t.default) ? "" : "68px",
        ...h[e.position]
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
  const s = C("CaretRight"), r = C("CaretLeft"), u = C("el-icon");
  return g(), w("div", {
    class: "collapse-button flex-center pointer",
    style: W(e.collapseStyle),
    ref: "collapse",
    onClick: n[0] || (n[0] = (...c) => e.clickHandle && e.clickHandle(...c))
  }, [
    V(e.$slots, "default", {}, () => [
      T(u, {
        size: 18,
        color: "#999999"
      }, {
        default: k(() => [
          e.isCollapse ? (g(), M(s, { key: 0 })) : (g(), M(r, { key: 1 }))
        ]),
        _: 1
      })
    ], !0)
  ], 4);
}
const Ae = /* @__PURE__ */ I(Gl, [["render", ql], ["__scopeId", "data-v-53ad025a"]]);
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
    var $;
    return (($ = document.querySelector(".card-row")) == null ? void 0 : $.offsetHeight) ?? 10;
  }, s = () => {
    var $;
    return (($ = document.querySelector(".card-row")) == null ? void 0 : $.offsetWidth) ?? 10;
  }, r = _(0), u = _(20), c = _(0), i = _(e.columns), d = ($) => Math.ceil($ / l()), v = () => {
    const { clientHeight: $ = 100 } = t.value.wrapRef || {};
    return Math.floor($ / (l() + e.gridGap)) + r.value || 1;
  }, p = y(() => e.data.map(($, H) => ({ ...$, rowIndex: H }))), m = y(() => p.value.filter(($, H) => H >= r.value * i.value && H < u.value * i.value)), h = () => {
    const $ = i.value * e.gridGap;
    a.value = Math.ceil(e.data.length / i.value * l()) + $;
  }, f = ($) => {
    const { scrollTop: H, clientHeight: j } = t.value.wrapRef, D = a.value - j - H;
    n("scroll", { distance: D, ...$ }), r.value = d(H), u.value = v(), c.value = H;
  };
  G(() => e.data, () => {
    h(), u.value = v();
  });
  const b = () => {
    if (o.value) {
      const { clientWidth: $ = 500 } = t.value.wrapRef;
      i.value = Math.floor($ / s()) || 1, h(), c.value = 0, r.value = 0, t.value.setScrollTop(0), u.value = v();
    }
  };
  return de(() => {
    b(), window.addEventListener("resize", b);
  }), hn(() => {
    window.removeEventListener("resize", b);
  }), {
    scrollbarRef: t,
    containHeight: a,
    cardRowRef: o,
    onScroll: f,
    startOffset: c,
    viewListRanges: m,
    resetViewport: b
  };
}
const rt = B({
  name: "KCardList",
  props: Ql,
  emits: ["click", "mouseenter", "mouseleave", "update:modelValue", "scroll"],
  setup(e, { emit: n }) {
    const t = y(() => `${Number((100 / e.columns).toFixed(1))}%`), a = y(() => `${e.gridGap}px`), o = y(() => `${e.width}`), l = (f) => f.disabled || e.disabled, s = y(() => e.rowClass === "border" ? "border-row" : e.rowClass === "shadow" ? "box-shadow" : e.rowClass), r = _("");
    we(() => {
      r.value = e.modelValue;
    });
    const u = (f) => {
      l(f) || (e.highlight && (r.value = f[e.keyId], n("update:modelValue", f[e.keyId])), n("click", f));
    }, {
      scrollbarRef: c,
      containHeight: i,
      cardRowRef: d,
      startOffset: v,
      viewListRanges: p,
      onScroll: m,
      resetViewport: h
    } = Xl(e, n);
    return {
      calcnum: t,
      gridgap: a,
      columnwidth: o,
      rowClassStyle: s,
      clickHandle: u,
      selectedId: r,
      bitNotAllowed: l,
      scrollbarRef: c,
      containHeight: i,
      cardRowRef: d,
      startOffset: v,
      viewListRanges: p,
      onScroll: m,
      resetViewport: h
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
const Zl = { class: "card-contain" }, Jl = ["onClick", "onMouseenter", "onMouseleave"], er = { class: "card-list-content" }, tr = { class: "sign" };
function nr(e, n, t, a, o, l) {
  const s = C("el-scrollbar");
  return g(), M(s, A({
    ref: "scrollbarRef",
    "data-test": "card-list"
  }, e.$attrs, {
    always: "",
    onScroll: e.onScroll
  }), {
    default: k(() => [
      E("div", Zl, [
        E("div", {
          class: "card-wrap",
          style: W({ height: `${e.containHeight}px` })
        }, null, 4),
        E("div", {
          class: "card-list",
          style: W({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          E("div", {
            class: z([e.fixedColumn ? "card-fixed-coumn" : "card-content", { "fixed-width": e.width }])
          }, [
            (g(!0), w(R, null, q(e.viewListRanges, (r, u) => (g(), w("div", {
              class: z(["card-row border-radius pointer", [e.selectedId === r[e.keyId] ? "select-style" : "", e.bitNotAllowed(r) ? "not-allowed" : "hover-style", e.rowClassStyle]]),
              key: u,
              onClick: (c) => e.clickHandle(r),
              ref_for: !0,
              ref: "cardRowRef",
              onMouseenter: (c) => e.$emit("mouseenter", r),
              onMouseleave: (c) => e.$emit("mouseleave", r)
            }, [
              E("div", er, [
                V(e.$slots, "default", {
                  row: r,
                  index: r.rowIndex
                }, () => [
                  Y(F(r.rowIndex), 1)
                ], !0)
              ]),
              E("div", tr, [
                V(e.$slots, "sign", {
                  row: r,
                  index: r.rowIndex
                }, void 0, !0)
              ])
            ], 42, Jl))), 128))
          ], 2)
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["onScroll"]);
}
const Fe = /* @__PURE__ */ I(rt, [["render", nr], ["__scopeId", "data-v-6f6f8503"]]);
Fe.install = function(e) {
  e.component(Fe.name, Fe);
};
const We = {
  KButton: Ve,
  KInput: ge,
  KInputNumber: Ne,
  KTable: Te,
  KTableV2: Me,
  KPage: ue,
  KBatchTable: ye,
  KDialog: Be,
  KBreadcrumb: xe,
  KTabs: ze,
  KPicker: He,
  KTooltip: Ie,
  KDatePicker: De,
  KNumberKeyboard: Pe,
  KVirtualList: be,
  KAutoCounter: Oe,
  KCollapseButton: Ae,
  KCardList: Fe,
  install: () => {
  }
};
function ar(e, n, t = 0) {
  return e.substr(t, n.length) === n;
}
We.install = function(e) {
  Object.keys(We).forEach((n) => {
    if (ar(n, "K")) {
      const t = We[n];
      e.component(t.name, t);
    }
  }), Object.keys(ve).forEach((n) => {
    e.directive(n, ve[n]);
  });
};
export {
  Oe as KAutoCounter,
  ye as KBatchTable,
  xe as KBreadcrumb,
  Ve as KButton,
  Fe as KCardList,
  Ae as KCollapseButton,
  De as KDatePicker,
  Be as KDialog,
  ge as KInput,
  Ne as KInputNumber,
  Pe as KNumberKeyboard,
  ue as KPage,
  He as KPicker,
  Te as KTable,
  Me as KTableV2,
  ze as KTabs,
  Ie as KTooltip,
  We as KUI,
  be as KVirtualList,
  ve as directives
};
