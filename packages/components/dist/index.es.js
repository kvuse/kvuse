import { defineComponent as B, ref as $, computed as _, resolveComponent as C, openBlock as v, createBlock as M, mergeProps as I, withModifiers as Gt, withCtx as k, renderSlot as V, createElementBlock as y, createCommentVNode as K, withKeys as Ct, createSlots as de, createElementVNode as E, watchEffect as Re, watch as G, nextTick as le, normalizeClass as H, createVNode as T, unref as b, getCurrentScope as qt, onScopeDispose as Qt, getCurrentInstance as fe, onMounted as we, warn as Xt, provide as at, inject as te, onBeforeUnmount as Zt, toRef as Ae, Transition as Jt, withDirectives as en, normalizeStyle as W, vShow as tn, Fragment as R, reactive as Et, onUpdated as Vt, resolveDynamicComponent as We, useSlots as nn, Text as an, renderList as q, toDisplayString as L, createTextVNode as Z, toRefs as on, isRef as Ge, normalizeProps as it, useCssVars as ln } from "vue";
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
    mounted: (e, t) => {
      const n = e.textContent;
      if (typeof Number(n) != "number")
        return;
      let a = "￥0";
      const { inter: o, point: l } = t.modifiers, r = l ? t.value : 2, s = n >= 0 ? `￥${Number(n).toFixed(r)}` : `-￥${Math.abs(Number(n.toFixed(r)))}`;
      o ? a = n >= 0 ? `￥${n}` : `-￥${Math.abs(n)}` : a = n ? s : "￥0.00", e.innerHTML = `${a}`;
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
        const o = Date.now(), l = /^[a-zA-Z]{2,}/.test(a.key) ? a.key : a.key.toLocaleUpperCase(), { buttonKey: r, isCombination: s = 0 } = t.value || e.valueKeys || {}, u = document.contains(e), c = a.target.tagName === "TEXTAREA" || a.target.tagName === "INPUT", {
          dialog: f,
          focus: d,
          long: p,
          any: m,
          fast: i
        } = t.modifiers;
        if (!u && !p) {
          document.removeEventListener("keydown", e.handler);
          return;
        }
        if (m && t.arg) {
          t.arg(a);
          return;
        }
        const g = i ? o - n > 30 : !0, h = document.querySelector(".el-popup-parent--hidden") || document.querySelector(".is-message-box");
        if (n = o, h && !f)
          return;
        const S = a.ctrlKey || a.metaKey, N = s === +S && r === l;
        (!c || d || s) && N && g && t.arg && t.arg(a);
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
ve.install = function(e) {
  Object.keys(ve).forEach((t) => {
    e.directive(t, ve[t]);
  });
};
const D = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, rn = B({
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
    const a = $(!0), o = $(null), l = () => {
      a.value && (a.value = !1, t("click")), r();
    }, r = () => {
      clearTimeout(o.value), o.value = setTimeout(() => {
        a.value = !0;
      }, 800);
    }, s = _(() => {
      const { border: u } = e, { type: c = "text" } = n;
      return u ? {
        backgroundColor: "transparent",
        color: `var(--el-color-${c})`
      } : {};
    });
    return { onclick: l, buttonStatus: a, buttonStyle: s };
  }
}), sn = {
  key: 0,
  class: "el-icon-lock el-icon--right"
};
function un(e, t, n, a, o, l) {
  const r = C("el-button");
  return v(), M(r, I({
    disabled: !e.buttonStatus || e.disabled,
    style: e.buttonStyle,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: Gt(e.onclick, ["stop"])
  }), {
    default: k(() => [
      V(e.$slots, "default"),
      e.iconLock ? (v(), y("i", sn)) : K("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "style", "click-state", "onClick"]);
}
const Ce = /* @__PURE__ */ D(rn, [["render", un]]);
Ce.install = function(e) {
  e.component(Ce.name, Ce);
};
const cn = B({
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
    const a = $(null), o = $(!0), l = _({
      get() {
        return e.modelValue;
      },
      set(f) {
        r(f);
      }
    }), r = (f) => {
      let d = f;
      if (e.type === "number") {
        if (d = d.replace(/[^\d.]/g, ""), d = d.replace(/^\./g, ""), d = d.replace(/\.{2,}/g, "."), d = d.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), d.indexOf(".") < 0 && d !== "" && d.substr(0, 1) === "0" && d.length === 2 && (d = d.substr(1, d.length)), d !== "")
          if (d.indexOf(".") > 0) {
            if (e.point) {
              const p = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
              d = d.match(p)[0] || null;
            }
          } else
            d === "." && (d = "");
      } else
        e.type === "integer" ? d = d.replace(/[^\d]/g, "") : e.type === "intText" && (d = d.replace(/[^\w]/g, ""));
      n.max !== void 0 && d && Number(d) > Number(n.max) && (d = n.max), n.min !== void 0 && d && Number(d) < Number(n.min) && (d = n.min), t("update:modelValue", d);
    }, s = () => {
      o.value && (o.value = !1, l.value && t("enter")), c();
    }, u = (f) => {
      t("change", f);
    }, c = () => {
      clearTimeout(a.value), a.value = setTimeout(() => {
        o.value = !0;
      }, 800);
    };
    return {
      inputValue: l,
      changeValue: u,
      searchContent: s
    };
  }
});
function dn(e, t, n, a, o, l) {
  const r = C("el-input");
  return v(), M(r, I({
    modelValue: e.inputValue,
    "onUpdate:modelValue": t[0] || (t[0] = (s) => e.inputValue = s),
    modelModifiers: { trim: !0 }
  }, e.$attrs, {
    onKeyup: Ct(e.searchContent, ["enter"]),
    onChange: e.changeValue
  }), de({ _: 2 }, [
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
const ge = /* @__PURE__ */ D(cn, [["render", dn]]);
ge.install = function(e) {
  e.component(ge.name, ge);
};
/*! Element Plus Icons Vue v2.0.10 */
var re = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [a, o] of t)
    n[a] = o;
  return n;
}, fn = {
  name: "CaretLeft"
}, pn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hn = /* @__PURE__ */ E("path", {
  fill: "currentColor",
  d: "M672 192 288 511.936 672 832z"
}, null, -1), mn = [
  hn
];
function vn(e, t, n, a, o, l) {
  return v(), y("svg", pn, mn);
}
var gn = /* @__PURE__ */ re(fn, [["render", vn], ["__file", "caret-left.vue"]]), bn = {
  name: "CaretRight"
}, yn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _n = /* @__PURE__ */ E("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null, -1), wn = [
  _n
];
function $n(e, t, n, a, o, l) {
  return v(), y("svg", yn, wn);
}
var kn = /* @__PURE__ */ re(bn, [["render", $n], ["__file", "caret-right.vue"]]), Sn = {
  name: "Delete"
}, Cn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, En = /* @__PURE__ */ E("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1), Vn = [
  En
];
function Tn(e, t, n, a, o, l) {
  return v(), y("svg", Cn, Vn);
}
var Nn = /* @__PURE__ */ re(Sn, [["render", Tn], ["__file", "delete.vue"]]), Bn = {
  name: "Loading"
}, Mn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xn = /* @__PURE__ */ E("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), zn = [
  xn
];
function Hn(e, t, n, a, o, l) {
  return v(), y("svg", Mn, zn);
}
var Pn = /* @__PURE__ */ re(Bn, [["render", Hn], ["__file", "loading.vue"]]), Dn = {
  name: "Minus"
}, On = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, An = /* @__PURE__ */ E("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1), In = [
  An
];
function Rn(e, t, n, a, o, l) {
  return v(), y("svg", On, In);
}
var Fn = /* @__PURE__ */ re(Dn, [["render", Rn], ["__file", "minus.vue"]]), Kn = {
  name: "Plus"
}, Ln = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jn = /* @__PURE__ */ E("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), Yn = [
  jn
];
function Un(e, t, n, a, o, l) {
  return v(), y("svg", Ln, Yn);
}
var Wn = /* @__PURE__ */ re(Kn, [["render", Un], ["__file", "plus.vue"]]), Gn = {
  name: "Warning"
}, qn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qn = /* @__PURE__ */ E("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), Xn = [
  Qn
];
function Zn(e, t, n, a, o, l) {
  return v(), y("svg", qn, Xn);
}
var Jn = /* @__PURE__ */ re(Gn, [["render", Zn], ["__file", "warning.vue"]]);
const ea = B({
  name: "KInputNumber",
  components: { Minus: Fn, Plus: Wn, KInput: ge },
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
    const n = $(1), a = $(null), o = $(!1), l = _(() => e.modelValue <= e.min), r = _(() => e.modelValue >= e.max), s = _({
      get: () => e.modelValue,
      set: (h) => {
        t("update:modelValue", h);
      }
    }), u = (h) => t("blur", h), c = (h) => t("focus", h), f = (h) => t("enter", h), d = (h) => {
      le(() => {
        const S = h === "" ? void 0 : Number(h);
        (!Number.isNaN(S) || h === "") && g(S);
      });
    }, p = (h) => {
      o.value = !h, a.value = h;
    }, m = $(-1);
    Re(() => {
      n.value = e.modelValue;
    }), G(() => m.value, (h) => {
      h < 0 && (s.value = e.modelValue, d(n.value));
    }, { immediate: !0 });
    const i = (h) => {
      const S = h === "increase", N = S ? r.value : l.value;
      if (e.disabled || N)
        return;
      const U = o.value ? 0 : s.value, Q = a.value ? n.value : U, A = S ? Q + e.step : Q - e.step;
      g(A);
    }, g = (h) => {
      a.value = h;
      let S = h;
      m.value !== S && (m.value = h, S >= e.max && (S = e.max), S <= e.min && (S = e.min), a.value === void 0 && (S = 1), t("update:modelValue", S), t("change", S, m.value), n.value = S);
    };
    return {
      currentValue: n,
      minDisabled: l,
      maxDisabled: r,
      handleBlur: u,
      handleFocus: c,
      handleKeyUp: f,
      handleInputChange: d,
      handleInput: p,
      clickBtnHandle: i
    };
  }
});
function ta(e, t, n, a, o, l) {
  const r = C("minus"), s = C("el-icon"), u = C("plus"), c = C("k-input");
  return v(), y("div", {
    class: H(["el-input-number", { "is-disabled": e.disabled }, { "is-without-controls": !e.controls }, e.size ? "el-input-number--" + e.size : ""])
  }, [
    e.controls ? (v(), y("span", {
      key: 0,
      class: H(["el-input-number__decrease", { "is-disabled": e.minDisabled }]),
      role: "button",
      onClick: t[0] || (t[0] = (f) => e.clickBtnHandle("decrease"))
    }, [
      T(s, { class: "el-input__icon" }, {
        default: k(() => [
          T(r)
        ]),
        _: 1
      })
    ], 2)) : K("", !0),
    e.controls ? (v(), y("span", {
      key: 1,
      class: H(["el-input-number__increase", { "is-disabled": e.maxDisabled }]),
      role: "button",
      onClick: t[1] || (t[1] = (f) => e.clickBtnHandle("increase"))
    }, [
      T(s, { class: "el-input__icon" }, {
        default: k(() => [
          T(u)
        ]),
        _: 1
      })
    ], 2)) : K("", !0),
    T(c, I({
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
      onKeyup: Ct(e.handleKeyUp, ["enter"])
    }), null, 16, ["modelValue", "disabled", "type", "onBlur", "onFocus", "onChange", "onInput", "onKeyup"])
  ], 2);
}
const Ee = /* @__PURE__ */ D(ea, [["render", ta]]);
Ee.install = function(e) {
  e.component(Ee.name, Ee);
};
function na(e) {
  for (var t = -1, n = e == null ? 0 : e.length, a = {}; ++t < n; ) {
    var o = e[t];
    a[o[0]] = o[1];
  }
  return a;
}
var ct;
const ot = typeof window < "u", ue = (e) => typeof e == "number", aa = (e) => typeof e == "string", oa = () => {
};
ot && ((ct = window == null ? void 0 : window.navigator) != null && ct.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Tt(e) {
  return typeof e == "function" ? e() : b(e);
}
function la(e) {
  return e;
}
function Nt(e) {
  return qt() ? (Qt(e), !0) : !1;
}
function ra(e, t = !0) {
  fe() ? we(e) : t ? e() : le(e);
}
function Bt(e) {
  var t;
  const n = Tt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Mt = ot ? window : void 0;
function qe(...e) {
  let t, n, a, o;
  if (aa(e[0]) || Array.isArray(e[0]) ? ([n, a, o] = e, t = Mt) : [t, n, a, o] = e, !t)
    return oa;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const l = [], r = () => {
    l.forEach((f) => f()), l.length = 0;
  }, s = (f, d, p, m) => (f.addEventListener(d, p, m), () => f.removeEventListener(d, p, m)), u = G(() => [Bt(t), Tt(o)], ([f, d]) => {
    r(), f && l.push(...n.flatMap((p) => a.map((m) => s(f, p, m, d))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), r();
  };
  return Nt(c), c;
}
function sa(e, t = !1) {
  const n = $(), a = () => n.value = Boolean(e());
  return a(), ra(a, t), n;
}
const Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Xe = "__vueuse_ssr_handlers__";
Qe[Xe] = Qe[Xe] || {};
Qe[Xe];
var dt = Object.getOwnPropertySymbols, ua = Object.prototype.hasOwnProperty, ia = Object.prototype.propertyIsEnumerable, ca = (e, t) => {
  var n = {};
  for (var a in e)
    ua.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && dt)
    for (var a of dt(e))
      t.indexOf(a) < 0 && ia.call(e, a) && (n[a] = e[a]);
  return n;
};
function da(e, t, n = {}) {
  const a = n, { window: o = Mt } = a, l = ca(a, ["window"]);
  let r;
  const s = sa(() => o && "ResizeObserver" in o), u = () => {
    r && (r.disconnect(), r = void 0);
  }, c = G(() => Bt(e), (d) => {
    u(), s.value && o && d && (r = new ResizeObserver(t), r.observe(d, l));
  }, { immediate: !0, flush: "post" }), f = () => {
    u(), c();
  };
  return Nt(f), {
    isSupported: s,
    stop: f
  };
}
var ft;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ft || (ft = {}));
var fa = Object.defineProperty, pt = Object.getOwnPropertySymbols, pa = Object.prototype.hasOwnProperty, ha = Object.prototype.propertyIsEnumerable, ht = (e, t, n) => t in e ? fa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ma = (e, t) => {
  for (var n in t || (t = {}))
    pa.call(t, n) && ht(e, n, t[n]);
  if (pt)
    for (var n of pt(t))
      ha.call(t, n) && ht(e, n, t[n]);
  return e;
};
const va = {
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
ma({
  linear: la
}, va);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ga = () => {
}, ba = Object.prototype.hasOwnProperty, mt = (e, t) => ba.call(e, t), lt = (e) => typeof e == "string", rt = (e) => e !== null && typeof e == "object", ya = (e) => e === void 0, _a = (e) => lt(e) ? !Number.isNaN(Number(e)) : !1, vt = (e) => Object.keys(e);
class xt extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function wa(e, t) {
  throw new xt(`[${e}] ${t}`);
}
function _e(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = lt(e) ? new xt(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const $a = "utils/dom/style";
function Ze(e, t = "px") {
  if (!e)
    return "";
  if (ue(e) || _a(e))
    return `${e}${t}`;
  if (lt(e))
    return e;
  _e($a, "binding value must be a string or number");
}
const zt = "__epPropKey", ae = (e) => e, ka = (e) => rt(e) && !!e[zt], Ht = (e, t) => {
  if (!rt(e) || ka(e))
    return e;
  const { values: n, required: a, default: o, type: l, validator: r } = e, u = {
    type: l,
    required: !!a,
    validator: n || r ? (c) => {
      let f = !1, d = [];
      if (n && (d = Array.from(n), mt(e, "default") && d.push(o), f || (f = d.includes(c))), r && (f || (f = r(c))), !f && d.length > 0) {
        const p = [...new Set(d)].map((m) => JSON.stringify(m)).join(", ");
        Xt(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(c)}.`);
      }
      return f;
    } : void 0,
    [zt]: !0
  };
  return mt(e, "default") && (u.default = o), u;
}, pe = (e) => na(Object.entries(e).map(([t, n]) => [
  t,
  Ht(n, t)
])), gt = ae([
  String,
  Object,
  Function
]), Fe = (e, t) => {
  if (e.install = (n) => {
    for (const a of [e, ...Object.values(t ?? {})])
      n.component(a.name, a);
  }, t)
    for (const [n, a] of Object.entries(t))
      e[n] = a;
  return e;
}, Sa = (e) => (e.install = ga, e), Ca = ["", "default", "small", "large"], Pt = Symbol("buttonGroupContextKey"), Dt = Symbol(), st = Symbol("formContextKey"), Ot = Symbol("formItemContextKey"), At = Symbol("scrollbarContextKey"), It = (e) => {
  const t = fe();
  return _(() => {
    var n, a;
    return (a = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? a : void 0;
  });
}, Ie = $();
function Ke(e, t = void 0) {
  const n = fe() ? te(Dt, Ie) : Ie;
  return e ? _(() => {
    var a, o;
    return (o = (a = n.value) == null ? void 0 : a[e]) != null ? o : t;
  }) : n;
}
const Ea = (e, t, n = !1) => {
  var a;
  const o = !!fe(), l = o ? Ke() : void 0, r = (a = t == null ? void 0 : t.provide) != null ? a : o ? at : void 0;
  if (!r) {
    _e("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const s = _(() => {
    const u = b(e);
    return l != null && l.value ? Va(l.value, u) : u;
  });
  return r(Dt, s), (n || !Ie.value) && (Ie.value = s.value), s;
}, Va = (e, t) => {
  var n;
  const a = [.../* @__PURE__ */ new Set([...vt(e), ...vt(t)])], o = {};
  for (const l of a)
    o[l] = (n = t[l]) != null ? n : e[l];
  return o;
}, Rt = Ht({
  type: String,
  values: Ca,
  required: !1
}), Ta = (e, t = {}) => {
  const n = $(void 0), a = t.prop ? n : It("size"), o = t.global ? n : Ke("size"), l = t.form ? { size: void 0 } : te(st, void 0), r = t.formItem ? { size: void 0 } : te(Ot, void 0);
  return _(() => a.value || b(e) || (r == null ? void 0 : r.size) || (l == null ? void 0 : l.size) || o.value || "");
}, Ft = (e) => {
  const t = It("disabled"), n = te(st, void 0);
  return _(() => t.value || b(e) || (n == null ? void 0 : n.disabled) || !1);
}, Na = ({ from: e, replacement: t, scope: n, version: a, ref: o, type: l = "API" }, r) => {
  G(() => b(r), (s) => {
    s && _e(n, `[${l}] ${e} is about to be deprecated in version ${a}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, Ba = "el", Ma = "is-", ne = (e, t, n, a, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), a && (l += `__${a}`), o && (l += `--${o}`), l;
}, he = (e) => {
  const t = Ke("namespace", Ba);
  return {
    namespace: t,
    b: (i = "") => ne(t.value, e, i, "", ""),
    e: (i) => i ? ne(t.value, e, "", i, "") : "",
    m: (i) => i ? ne(t.value, e, "", "", i) : "",
    be: (i, g) => i && g ? ne(t.value, e, i, g, "") : "",
    em: (i, g) => i && g ? ne(t.value, e, "", i, g) : "",
    bm: (i, g) => i && g ? ne(t.value, e, i, "", g) : "",
    bem: (i, g, h) => i && g && h ? ne(t.value, e, i, g, h) : "",
    is: (i, ...g) => {
      const h = g.length >= 1 ? g[0] : !0;
      return i && h ? `${Ma}${i}` : "";
    },
    cssVar: (i) => {
      const g = {};
      for (const h in i)
        i[h] && (g[`--${t.value}-${h}`] = i[h]);
      return g;
    },
    cssVarName: (i) => `--${t.value}-${i}`,
    cssVarBlock: (i) => {
      const g = {};
      for (const h in i)
        i[h] && (g[`--${t.value}-${e}-${h}`] = i[h]);
      return g;
    },
    cssVarBlockName: (i) => `--${t.value}-${e}-${i}`
  };
}, xa = () => {
  const e = te(st, void 0), t = te(Ot, void 0);
  return {
    form: e,
    formItem: t
  };
};
var me = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
};
const za = pe({
  size: {
    type: ae([Number, String])
  },
  color: {
    type: String
  }
}), Ha = B({
  name: "ElIcon",
  inheritAttrs: !1
}), Pa = /* @__PURE__ */ B({
  ...Ha,
  props: za,
  setup(e) {
    const t = e, n = he("icon"), a = _(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: ya(o) ? void 0 : Ze(o),
        "--color": l
      };
    });
    return (o, l) => (v(), y("i", I({
      class: b(n).b(),
      style: b(a)
    }, o.$attrs), [
      V(o.$slots, "default")
    ], 16));
  }
});
var Da = /* @__PURE__ */ me(Pa, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Je = Fe(Da), ie = 4, Oa = {
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
}, Aa = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Ia = pe({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Ra = "Thumb", Fa = /* @__PURE__ */ B({
  __name: "thumb",
  props: Ia,
  setup(e) {
    const t = e, n = te(At), a = he("scrollbar");
    n || wa(Ra, "can not inject scrollbar context");
    const o = $(), l = $(), r = $({}), s = $(!1);
    let u = !1, c = !1, f = ot ? document.onselectstart : null;
    const d = _(() => Oa[t.vertical ? "vertical" : "horizontal"]), p = _(() => Aa({
      size: t.size,
      move: t.move,
      bar: d.value
    })), m = _(() => o.value[d.value.offset] ** 2 / n.wrapElement[d.value.scrollSize] / t.ratio / l.value[d.value.offset]), i = (x) => {
      var w;
      if (x.stopPropagation(), x.ctrlKey || [1, 2].includes(x.button))
        return;
      (w = window.getSelection()) == null || w.removeAllRanges(), h(x);
      const z = x.currentTarget;
      z && (r.value[d.value.axis] = z[d.value.offset] - (x[d.value.client] - z.getBoundingClientRect()[d.value.direction]));
    }, g = (x) => {
      if (!l.value || !o.value || !n.wrapElement)
        return;
      const w = Math.abs(x.target.getBoundingClientRect()[d.value.direction] - x[d.value.client]), z = l.value[d.value.offset] / 2, j = (w - z) * 100 * m.value / o.value[d.value.offset];
      n.wrapElement[d.value.scroll] = j * n.wrapElement[d.value.scrollSize] / 100;
    }, h = (x) => {
      x.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", S), document.addEventListener("mouseup", N), f = document.onselectstart, document.onselectstart = () => !1;
    }, S = (x) => {
      if (!o.value || !l.value || u === !1)
        return;
      const w = r.value[d.value.axis];
      if (!w)
        return;
      const z = (o.value.getBoundingClientRect()[d.value.direction] - x[d.value.client]) * -1, j = l.value[d.value.offset] - w, O = (z - j) * 100 * m.value / o.value[d.value.offset];
      n.wrapElement[d.value.scroll] = O * n.wrapElement[d.value.scrollSize] / 100;
    }, N = () => {
      u = !1, r.value[d.value.axis] = 0, document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", N), A(), c && (s.value = !1);
    }, U = () => {
      c = !1, s.value = !!t.size;
    }, Q = () => {
      c = !0, s.value = u;
    };
    Zt(() => {
      A(), document.removeEventListener("mouseup", N);
    });
    const A = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return qe(Ae(n, "scrollbarElement"), "mousemove", U), qe(Ae(n, "scrollbarElement"), "mouseleave", Q), (x, w) => (v(), M(Jt, {
      name: b(a).b("fade"),
      persisted: ""
    }, {
      default: k(() => [
        en(E("div", {
          ref_key: "instance",
          ref: o,
          class: H([b(a).e("bar"), b(a).is(b(d).key)]),
          onMousedown: g
        }, [
          E("div", {
            ref_key: "thumb",
            ref: l,
            class: H(b(a).e("thumb")),
            style: W(b(p)),
            onMousedown: i
          }, null, 38)
        ], 34), [
          [tn, x.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var bt = /* @__PURE__ */ me(Fa, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const Ka = pe({
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
}), La = /* @__PURE__ */ B({
  __name: "bar",
  props: Ka,
  setup(e, { expose: t }) {
    const n = e, a = $(0), o = $(0);
    return t({
      handleScroll: (r) => {
        if (r) {
          const s = r.offsetHeight - ie, u = r.offsetWidth - ie;
          o.value = r.scrollTop * 100 / s * n.ratioY, a.value = r.scrollLeft * 100 / u * n.ratioX;
        }
      }
    }), (r, s) => (v(), y(R, null, [
      T(bt, {
        move: a.value,
        ratio: r.ratioX,
        size: r.width,
        always: r.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      T(bt, {
        move: o.value,
        ratio: r.ratioY,
        size: r.height,
        vertical: "",
        always: r.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var ja = /* @__PURE__ */ me(La, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const Ya = pe({
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
    type: ae([String, Object, Array]),
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
}), Ua = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ue)
}, et = "ElScrollbar", Wa = B({
  name: et
}), Ga = /* @__PURE__ */ B({
  ...Wa,
  props: Ya,
  emits: Ua,
  setup(e, { expose: t, emit: n }) {
    const a = e, o = he("scrollbar");
    let l, r;
    const s = $(), u = $(), c = $(), f = $("0"), d = $("0"), p = $(), m = $(1), i = $(1), g = _(() => {
      const w = {};
      return a.height && (w.height = Ze(a.height)), a.maxHeight && (w.maxHeight = Ze(a.maxHeight)), [a.wrapStyle, w];
    }), h = _(() => [
      a.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !a.native }
    ]), S = _(() => [o.e("view"), a.viewClass]), N = () => {
      var w;
      u.value && ((w = p.value) == null || w.handleScroll(u.value), n("scroll", {
        scrollTop: u.value.scrollTop,
        scrollLeft: u.value.scrollLeft
      }));
    };
    function U(w, z) {
      rt(w) ? u.value.scrollTo(w) : ue(w) && ue(z) && u.value.scrollTo(w, z);
    }
    const Q = (w) => {
      if (!ue(w)) {
        _e(et, "value must be a number");
        return;
      }
      u.value.scrollTop = w;
    }, A = (w) => {
      if (!ue(w)) {
        _e(et, "value must be a number");
        return;
      }
      u.value.scrollLeft = w;
    }, x = () => {
      if (!u.value)
        return;
      const w = u.value.offsetHeight - ie, z = u.value.offsetWidth - ie, j = w ** 2 / u.value.scrollHeight, O = z ** 2 / u.value.scrollWidth, se = Math.max(j, a.minSize), $e = Math.max(O, a.minSize);
      m.value = j / (w - j) / (se / (w - se)), i.value = O / (z - O) / ($e / (z - $e)), d.value = se + ie < w ? `${se}px` : "", f.value = $e + ie < z ? `${$e}px` : "";
    };
    return G(() => a.noresize, (w) => {
      w ? (l == null || l(), r == null || r()) : ({ stop: l } = da(c, x), r = qe("resize", x));
    }, { immediate: !0 }), G(() => [a.maxHeight, a.height], () => {
      a.native || le(() => {
        var w;
        x(), u.value && ((w = p.value) == null || w.handleScroll(u.value));
      });
    }), at(At, Et({
      scrollbarElement: s,
      wrapElement: u
    })), we(() => {
      a.native || le(() => {
        x();
      });
    }), Vt(() => x()), t({
      wrapRef: u,
      update: x,
      scrollTo: U,
      setScrollTop: Q,
      setScrollLeft: A,
      handleScroll: N
    }), (w, z) => (v(), y("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: H(b(o).b())
    }, [
      E("div", {
        ref_key: "wrapRef",
        ref: u,
        class: H(b(h)),
        style: W(b(g)),
        onScroll: N
      }, [
        (v(), M(We(w.tag), {
          ref_key: "resizeRef",
          ref: c,
          class: H(b(S)),
          style: W(w.viewStyle)
        }, {
          default: k(() => [
            V(w.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      w.native ? K("v-if", !0) : (v(), M(ja, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        height: d.value,
        width: f.value,
        always: w.always,
        "ratio-x": i.value,
        "ratio-y": m.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var qa = /* @__PURE__ */ me(Ga, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const Qa = Fe(qa), Xa = (e, t) => {
  Na({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, _(() => e.type === "text"));
  const n = te(Pt, void 0), a = Ke("button"), { form: o } = xa(), l = Ta(_(() => n == null ? void 0 : n.size)), r = Ft(), s = $(), u = nn(), c = _(() => e.type || (n == null ? void 0 : n.type) || ""), f = _(() => {
    var m, i, g;
    return (g = (i = e.autoInsertSpace) != null ? i : (m = a.value) == null ? void 0 : m.autoInsertSpace) != null ? g : !1;
  }), d = _(() => {
    var m;
    const i = (m = u.default) == null ? void 0 : m.call(u);
    if (f.value && (i == null ? void 0 : i.length) === 1) {
      const g = i[0];
      if ((g == null ? void 0 : g.type) === an) {
        const h = g.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(h.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: r,
    _size: l,
    _type: c,
    _ref: s,
    shouldAddSpace: d,
    handleClick: (m) => {
      e.nativeType === "reset" && (o == null || o.resetFields()), t("click", m);
    }
  };
}, Za = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Ja = ["button", "submit", "reset"], tt = pe({
  size: Rt,
  disabled: Boolean,
  type: {
    type: String,
    values: Za,
    default: ""
  },
  icon: {
    type: gt
  },
  nativeType: {
    type: String,
    values: Ja,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: gt,
    default: () => Pn
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
}), eo = {
  click: (e) => e instanceof MouseEvent
};
function P(e, t) {
  to(e) && (e = "100%");
  var n = no(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function ke(e) {
  return Math.min(1, Math.max(0, e));
}
function to(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function no(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Kt(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Se(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function oe(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function ao(e, t, n) {
  return {
    r: P(e, 255) * 255,
    g: P(t, 255) * 255,
    b: P(n, 255) * 255
  };
}
function yt(e, t, n) {
  e = P(e, 255), t = P(t, 255), n = P(n, 255);
  var a = Math.max(e, t, n), o = Math.min(e, t, n), l = 0, r = 0, s = (a + o) / 2;
  if (a === o)
    r = 0, l = 0;
  else {
    var u = a - o;
    switch (r = s > 0.5 ? u / (2 - a - o) : u / (a + o), a) {
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
  return { h: l, s: r, l: s };
}
function Le(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function oo(e, t, n) {
  var a, o, l;
  if (e = P(e, 360), t = P(t, 100), n = P(n, 100), t === 0)
    o = n, l = n, a = n;
  else {
    var r = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
    a = Le(s, r, e + 1 / 3), o = Le(s, r, e), l = Le(s, r, e - 1 / 3);
  }
  return { r: a * 255, g: o * 255, b: l * 255 };
}
function _t(e, t, n) {
  e = P(e, 255), t = P(t, 255), n = P(n, 255);
  var a = Math.max(e, t, n), o = Math.min(e, t, n), l = 0, r = a, s = a - o, u = a === 0 ? 0 : s / a;
  if (a === o)
    l = 0;
  else {
    switch (a) {
      case e:
        l = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        l = (n - e) / s + 2;
        break;
      case n:
        l = (e - t) / s + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s: u, v: r };
}
function lo(e, t, n) {
  e = P(e, 360) * 6, t = P(t, 100), n = P(n, 100);
  var a = Math.floor(e), o = e - a, l = n * (1 - t), r = n * (1 - o * t), s = n * (1 - (1 - o) * t), u = a % 6, c = [n, r, l, l, s, n][u], f = [s, n, n, r, l, l][u], d = [l, l, s, n, n, r][u];
  return { r: c * 255, g: f * 255, b: d * 255 };
}
function wt(e, t, n, a) {
  var o = [
    oe(Math.round(e).toString(16)),
    oe(Math.round(t).toString(16)),
    oe(Math.round(n).toString(16))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function ro(e, t, n, a, o) {
  var l = [
    oe(Math.round(e).toString(16)),
    oe(Math.round(t).toString(16)),
    oe(Math.round(n).toString(16)),
    oe(so(a))
  ];
  return o && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function so(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function $t(e) {
  return F(e) / 255;
}
function F(e) {
  return parseInt(e, 16);
}
function uo(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var nt = {
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
function io(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, a = null, o = null, l = null, r = !1, s = !1;
  return typeof e == "string" && (e = po(e)), typeof e == "object" && (X(e.r) && X(e.g) && X(e.b) ? (t = ao(e.r, e.g, e.b), r = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : X(e.h) && X(e.s) && X(e.v) ? (a = Se(e.s), o = Se(e.v), t = lo(e.h, a, o), r = !0, s = "hsv") : X(e.h) && X(e.s) && X(e.l) && (a = Se(e.s), l = Se(e.l), t = oo(e.h, a, l), r = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Kt(n), {
    ok: r,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var co = "[-\\+]?\\d+%?", fo = "[-\\+]?\\d*\\.\\d+%?", ee = "(?:".concat(fo, ")|(?:").concat(co, ")"), je = "[\\s|\\(]+(".concat(ee, ")[,|\\s]+(").concat(ee, ")[,|\\s]+(").concat(ee, ")\\s*\\)?"), Ye = "[\\s|\\(]+(".concat(ee, ")[,|\\s]+(").concat(ee, ")[,|\\s]+(").concat(ee, ")[,|\\s]+(").concat(ee, ")\\s*\\)?"), Y = {
  CSS_UNIT: new RegExp(ee),
  rgb: new RegExp("rgb" + je),
  rgba: new RegExp("rgba" + Ye),
  hsl: new RegExp("hsl" + je),
  hsla: new RegExp("hsla" + Ye),
  hsv: new RegExp("hsv" + je),
  hsva: new RegExp("hsva" + Ye),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function po(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (nt[e])
    e = nt[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Y.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Y.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Y.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Y.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Y.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Y.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Y.hex8.exec(e), n ? {
    r: F(n[1]),
    g: F(n[2]),
    b: F(n[3]),
    a: $t(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Y.hex6.exec(e), n ? {
    r: F(n[1]),
    g: F(n[2]),
    b: F(n[3]),
    format: t ? "name" : "hex"
  } : (n = Y.hex4.exec(e), n ? {
    r: F(n[1] + n[1]),
    g: F(n[2] + n[2]),
    b: F(n[3] + n[3]),
    a: $t(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Y.hex3.exec(e), n ? {
    r: F(n[1] + n[1]),
    g: F(n[2] + n[2]),
    b: F(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function X(e) {
  return Boolean(Y.CSS_UNIT.exec(String(e)));
}
var ho = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var a;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = uo(t)), this.originalInput = t;
      var o = io(t);
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
      var t = this.toRgb(), n, a, o, l = t.r / 255, r = t.g / 255, s = t.b / 255;
      return l <= 0.03928 ? n = l / 12.92 : n = Math.pow((l + 0.055) / 1.055, 2.4), r <= 0.03928 ? a = r / 12.92 : a = Math.pow((r + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * a + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Kt(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = _t(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = _t(this.r, this.g, this.b), n = Math.round(t.h * 360), a = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(a, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(a, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = yt(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = yt(this.r, this.g, this.b), n = Math.round(t.h * 360), a = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(a, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(a, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), wt(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), ro(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(P(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(P(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + wt(this.r, this.g, this.b, !1), n = 0, a = Object.entries(nt); n < a.length; n++) {
        var o = a[n], l = o[0], r = o[1];
        if (t === r)
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
      return n.l += t / 100, n.l = ke(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = ke(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = ke(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = ke(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), a = (n.h + t) % 360;
      return n.h = a < 0 ? 360 + a : a, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var a = this.toRgb(), o = new e(t).toRgb(), l = n / 100, r = {
        r: (o.r - a.r) * l + a.r,
        g: (o.g - a.g) * l + a.g,
        b: (o.b - a.b) * l + a.b,
        a: (o.a - a.a) * l + a.a
      };
      return new e(r);
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
      for (var n = this.toHsv(), a = n.h, o = n.s, l = n.v, r = [], s = 1 / t; t--; )
        r.push(new e({ h: a, s: o, v: l })), l = (l + s) % 1;
      return r;
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
      for (var n = this.toHsl(), a = n.h, o = [this], l = 360 / t, r = 1; r < t; r++)
        o.push(new e({ h: (a + r * l) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function J(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function mo(e) {
  const t = Ft(), n = he("button");
  return _(() => {
    let a = {};
    const o = e.color;
    if (o) {
      const l = new ho(o), r = e.dark ? l.tint(20).toString() : J(l, 20);
      if (e.plain)
        a = n.cssVarBlock({
          "bg-color": e.dark ? J(l, 90) : l.tint(90).toString(),
          "text-color": o,
          "border-color": e.dark ? J(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": o,
          "hover-border-color": o,
          "active-bg-color": r,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": r
        }), t.value && (a[n.cssVarBlockName("disabled-bg-color")] = e.dark ? J(l, 90) : l.tint(90).toString(), a[n.cssVarBlockName("disabled-text-color")] = e.dark ? J(l, 50) : l.tint(50).toString(), a[n.cssVarBlockName("disabled-border-color")] = e.dark ? J(l, 80) : l.tint(80).toString());
      else {
        const s = e.dark ? J(l, 30) : l.tint(30).toString(), u = l.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (a = n.cssVarBlock({
          "bg-color": o,
          "text-color": u,
          "border-color": o,
          "hover-bg-color": s,
          "hover-text-color": u,
          "hover-border-color": s,
          "active-bg-color": r,
          "active-border-color": r
        }), t.value) {
          const c = e.dark ? J(l, 50) : l.tint(50).toString();
          a[n.cssVarBlockName("disabled-bg-color")] = c, a[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, a[n.cssVarBlockName("disabled-border-color")] = c;
        }
      }
    }
    return a;
  });
}
const vo = ["aria-disabled", "disabled", "autofocus", "type"], go = B({
  name: "ElButton"
}), bo = /* @__PURE__ */ B({
  ...go,
  props: tt,
  emits: eo,
  setup(e, { expose: t, emit: n }) {
    const a = e, o = mo(a), l = he("button"), { _ref: r, _size: s, _type: u, _disabled: c, shouldAddSpace: f, handleClick: d } = Xa(a, n);
    return t({
      ref: r,
      size: s,
      type: u,
      disabled: c,
      shouldAddSpace: f
    }), (p, m) => (v(), y("button", {
      ref_key: "_ref",
      ref: r,
      class: H([
        b(l).b(),
        b(l).m(b(u)),
        b(l).m(b(s)),
        b(l).is("disabled", b(c)),
        b(l).is("loading", p.loading),
        b(l).is("plain", p.plain),
        b(l).is("round", p.round),
        b(l).is("circle", p.circle),
        b(l).is("text", p.text),
        b(l).is("link", p.link),
        b(l).is("has-bg", p.bg)
      ]),
      "aria-disabled": b(c) || p.loading,
      disabled: b(c) || p.loading,
      autofocus: p.autofocus,
      type: p.nativeType,
      style: W(b(o)),
      onClick: m[0] || (m[0] = (...i) => b(d) && b(d)(...i))
    }, [
      p.loading ? (v(), y(R, { key: 0 }, [
        p.$slots.loading ? V(p.$slots, "loading", { key: 0 }) : (v(), M(b(Je), {
          key: 1,
          class: H(b(l).is("loading"))
        }, {
          default: k(() => [
            (v(), M(We(p.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : p.icon || p.$slots.icon ? (v(), M(b(Je), { key: 1 }, {
        default: k(() => [
          p.icon ? (v(), M(We(p.icon), { key: 0 })) : V(p.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : K("v-if", !0),
      p.$slots.default ? (v(), y("span", {
        key: 2,
        class: H({ [b(l).em("text", "expand")]: b(f) })
      }, [
        V(p.$slots, "default")
      ], 2)) : K("v-if", !0)
    ], 14, vo));
  }
});
var yo = /* @__PURE__ */ me(bo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const _o = {
  size: tt.size,
  type: tt.type
}, wo = B({
  name: "ElButtonGroup"
}), $o = /* @__PURE__ */ B({
  ...wo,
  props: _o,
  setup(e) {
    const t = e;
    at(Pt, Et({
      size: Ae(t, "size"),
      type: Ae(t, "type")
    }));
    const n = he("button");
    return (a, o) => (v(), y("div", {
      class: H(`${b(n).b("group")}`)
    }, [
      V(a.$slots, "default")
    ], 2));
  }
});
var Lt = /* @__PURE__ */ me($o, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const ko = Fe(yo, {
  ButtonGroup: Lt
});
Sa(Lt);
function So(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const Co = {}, Eo = pe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ae(Object)
  },
  size: Rt,
  button: {
    type: ae(Object)
  },
  experimentalFeatures: {
    type: ae(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ae(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), Vo = B({
  name: "ElConfigProvider",
  props: Eo,
  setup(e, { slots: t }) {
    G(() => e.message, (a) => {
      Object.assign(Co, a ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Ea(e);
    return () => V(t, "default", { config: n == null ? void 0 : n.value });
  }
}), jt = Fe(Vo);
var Yt = {};
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
})(Yt);
const Ut = /* @__PURE__ */ So(Yt);
const To = B({
  name: "KPage",
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: !1 },
    small: { type: Boolean, default: !1 },
    pagerCount: { type: Number, default: 7 }
  },
  components: { ElConfigProvider: jt },
  emits: ["update:modelValue", "update:size", "current-change", "size-change", "change"],
  setup(e, { emit: t }) {
    const n = Ut, a = _(() => {
      const { total: u, size: c, showSize: f } = e;
      return f ? !0 : u > c;
    }), o = _({
      get() {
        return e.modelValue;
      },
      set(u) {
        t("update:modelValue", u);
      }
    }), l = _(() => {
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
}), No = {
  key: 0,
  class: "page-right mt20"
};
function Bo(e, t, n, a, o, l) {
  const r = C("el-pagination"), s = C("el-config-provider");
  return e.showPage ? (v(), y("div", No, [
    T(s, { locale: e.locale }, {
      default: k(() => [
        T(r, {
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
  ])) : K("", !0);
}
const ce = /* @__PURE__ */ D(To, [["render", Bo], ["__scopeId", "data-v-77c509db"]]);
ce.install = function(e) {
  e.component(ce.name, ce);
};
const Mo = B({
  name: "KTable",
  components: { pagination: ce },
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
    const n = _({
      get: () => e.tableData,
      set: (r) => t("update:tableData", r)
    }), a = _({
      get: () => e.modelValue,
      set: (r) => t("update:modelValue", r)
    });
    return {
      currentPage: a,
      tableDataList: n,
      changePage: (r) => t("current-change", r),
      sortChange: ({ column: r, order: s }) => {
        const u = s === "ascending" ? 1 : 0;
        t("sort-change", {
          prop: r == null ? void 0 : r.rawColumnKey,
          order: s,
          sortType: u,
          currentPage: a.value,
          column: r,
          sortColumn: r == null ? void 0 : r.rawColumnKey
        });
      }
    };
  }
}), xo = { key: 2 };
function zo(e, t, n, a, o, l) {
  const r = C("el-table-column"), s = C("el-table"), u = C("pagination");
  return v(), y(R, null, [
    T(s, I({
      data: e.tableDataList,
      style: { width: "100%" },
      class: "mt20",
      "header-cell-style": e.headerCellStyle
    }, e.$attrs, {
      "empty-text": e.emptyText,
      onSortChange: e.sortChange
    }), de({
      default: k(() => [
        (v(!0), y(R, null, q(e.tableColumn, (c) => (v(), M(r, {
          key: c.prop,
          label: c.label,
          name: c.name,
          width: c.width,
          "min-width": c.minWidth,
          fixed: c.fixed,
          sortable: c.sortable,
          type: c.type,
          "show-overflow-tooltip": e.showOverflowTooltip
        }, de({
          default: k((f) => [
            e.$slots.default ? V(e.$slots, "default", {
              key: 0,
              item: f.row,
              row: f.row,
              index: f.$index
            }) : c.custom && f.$index >= 0 ? V(e.$slots, c.custom, {
              key: 1,
              item: f.row,
              row: f.row,
              index: f.$index
            }) : (v(), y("span", xo, L(f.row[c.prop] ?? "-"), 1))
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
      "show-size": e.showSize,
      modelValue: e.currentPage,
      "onUpdate:modelValue": t[0] || (t[0] = (c) => e.currentPage = c),
      onCurrentChange: e.changePage
    }, null, 8, ["total", "show-size", "modelValue", "onCurrentChange"])
  ], 64);
}
const Ve = /* @__PURE__ */ D(Mo, [["render", zo]]);
Ve.install = function(e) {
  e.component(Ve.name, Ve);
};
const Ho = B({
  name: "KVirtualList",
  components: { ElScrollbar: Qa },
  props: {
    height: { type: String, default: "500px" },
    rowStyle: { type: Object, default: () => ({}) },
    rowClassName: { type: [Function, String, Object], default: "" },
    data: { type: Array, default: () => [] }
  },
  emits: ["scroll", "row-click"],
  setup(e, { emit: t }) {
    const n = $(0), a = $(0), o = $(null), l = $(10), r = () => {
      var h;
      return ((h = document.querySelector(".list-item")) == null ? void 0 : h.offsetHeight) ?? 100;
    }, s = () => {
      const { clientHeight: h = 100 } = o.value.wrapRef || {};
      return Math.ceil(h / r()) + n.value;
    }, u = $(100);
    we(() => {
      l.value = Number(s()) || 10, u.value = e.data.length * r();
    });
    const c = (h) => Math.floor(h / r()), f = (h) => Math.ceil(h * r()), d = (h) => h >= n.value && h <= l.value, p = _(() => e.data.filter((h, S) => d(S)));
    return G(() => e.data, (h) => {
      h.length || (n.value = 0, a.value = 0), e.data.forEach((S, N) => {
        S.rowIndex = N;
      }), u.value = e.data.length * r();
    }), {
      startIndex: n,
      endIndex: l,
      startOffset: a,
      viewport: o,
      onScroll: (h) => {
        const { scrollTop: S, clientHeight: N } = o.value.wrapRef;
        n.value = c(S), a.value = f(n.value), l.value = s();
        const U = Math.abs(u.value - N - S);
        t("scroll", { distance: U, ...h });
      },
      showViewRanges: d,
      containHeight: u,
      listRanges: p,
      rowClick: (h, S) => {
        t("row-click", h, S);
      },
      rowClassHandle: (h, S) => typeof e.rowClassName == "function" ? e.rowClassName({ row: h, rowIndex: S }) : e.rowClassName
    };
  }
}), Po = {
  class: "virtual-list",
  "data-testid": "virtual-list"
}, Do = ["onClick"];
function Oo(e, t, n, a, o, l) {
  const r = C("el-scrollbar");
  return v(), M(r, I({
    height: e.height,
    ref: "viewport"
  }, e.$attrs, { onScroll: e.onScroll }), {
    default: k(() => [
      E("div", Po, [
        E("div", {
          class: "list-contain",
          style: W({ height: `${e.containHeight}px` })
        }, null, 4),
        E("div", {
          class: "list-content",
          style: W({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          (v(!0), y(R, null, q(e.listRanges, (s, u) => (v(), y("div", {
            key: u,
            class: H(["list-item", e.rowClassHandle(s, s.rowIndex)]),
            style: W(e.rowStyle),
            onClick: (c) => e.rowClick(s, s.rowIndex)
          }, [
            V(e.$slots, "default", {
              row: s,
              index: s.rowIndex
            }, () => [
              Z(L(s.name), 1)
            ], !0)
          ], 14, Do))), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["height", "onScroll"]);
}
const be = /* @__PURE__ */ D(Ho, [["render", Oo], ["__scopeId", "data-v-69a974a1"]]);
be.install = function(e) {
  e.component(be.name, be);
};
const Ao = {
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
const Io = B({
  name: "KTableV2",
  components: { virtualList: be },
  props: Ao,
  emits: ["sort-change"],
  setup(e, { emit: t }) {
    const n = $(null), a = (d) => {
      var S, N, U, Q;
      let p = {};
      const {
        align: m,
        width: i,
        fixed: g,
        minWidth: h
      } = d;
      if (m && (p["text-center"] = `${m}`), h && (p["min-width"] = `${h}`), i && (p = {
        ...p,
        width: `${i}`,
        flex: "inherit",
        "flex-shrink": 0
      }), g) {
        const A = e.tableColumn.findIndex((w) => w.prop === d.prop), x = e.tableColumn.length;
        if (p = {
          ...p,
          position: "sticky",
          background: "#ffffff",
          "z-index": 5
        }, g === "left") {
          const w = (S = e.tableColumn.filter((O) => O.fixed === "left")) == null ? void 0 : S.length;
          let z = 0;
          A > 0 && A < x - 1 && w > 1 && (z = (N = n.value) == null ? void 0 : N.at(A - 1).clientWidth), p.left = `${z}px`;
          let j = 0;
          e.tableColumn.forEach((O, se) => {
            O.fixed === "left" && (j = se);
          }), j === A && (p["box-shadow"] = "3px 0px 4px #b0a8a836");
        } else {
          const w = (U = e.tableColumn.filter((O) => O.fixed && O.fixed !== "left")) == null ? void 0 : U.length;
          let z = 0;
          A < x - 1 && w > 1 && (z = (Q = n.value) == null ? void 0 : Q.at(A + 1).clientWidth), e.tableColumn.findIndex((O) => O.fixed && O.fixed !== "left") === A && (p["box-shadow"] = "-3px 0 4px #b0a8a836"), p.right = `${z}px`;
        }
      }
      return p;
    }, o = $(null), l = ({ scrollLeft: d }) => {
      o.value.scrollLeft = `${d}`;
    }, r = $(null), s = $({}), u = (d, p) => {
      s.value = p, r.value = r.value === d ? null : d, t("sort-change", { column: p, sortType: r.value });
    }, c = $(null), f = (d) => {
      var p;
      return (p = c.value) == null ? void 0 : p.viewport.setScrollTop(d);
    };
    return {
      ...on(e),
      headerClass: a,
      tableHeader: o,
      scrollHandle: l,
      headerColmn: n,
      sortType: r,
      clickSortCaret: u,
      selectedRow: s,
      virtualRef: c,
      setScrollTop: f
    };
  }
}), Ro = { class: "table-v2 el-table flex-column" }, Fo = {
  class: "table-header overflow",
  ref: "tableHeader"
}, Ko = { class: "flex table-border-bottom header-content" }, Lo = {
  key: 0,
  class: "table-header-sort flex-column flex-center"
}, jo = { class: "sort-wrapper" }, Yo = ["onClick"], Uo = ["onClick"], Wo = { class: "flex table-body" };
function Go(e, t, n, a, o, l) {
  const r = C("virtualList");
  return v(), y("div", Ro, [
    E("div", Fo, [
      E("div", Ko, [
        (v(!0), y(R, null, q(e.tableColumn, (s, u) => (v(), y("div", {
          key: u,
          class: "header-column cell flex-align-center",
          ref_for: !0,
          ref: "headerColmn",
          style: W([e.headerClass(s), e.headerCellStyle])
        }, [
          V(e.$slots, (s == null ? void 0 : s.header) ?? "default", {}, () => [
            Z(L(s.label), 1)
          ], !0),
          s.sortable ? (v(), y("div", Lo, [
            E("span", jo, [
              E("i", {
                class: H(["sort-caret ascending", { "bottom-caret": e.sortType === "ascending" && e.selectedRow.prop == s.prop }]),
                onClick: (c) => e.clickSortCaret("ascending", s)
              }, null, 10, Yo),
              E("i", {
                class: H(["sort-caret descending", { "top-caret": e.sortType === "descending" && e.selectedRow.prop == s.prop }]),
                onClick: (c) => e.clickSortCaret("descending", s)
              }, null, 10, Uo)
            ])
          ])) : K("", !0)
        ], 4))), 128))
      ])
    ], 512),
    T(r, I({
      data: e.tableData,
      always: "",
      ref: "virtualRef",
      "row-class-name": e.rowClassName
    }, e.$attrs, {
      height: e.height,
      onScroll: e.scrollHandle
    }), {
      default: k(({ row: s, index: u }) => [
        V(e.$slots, "content", {}, () => [
          E("div", Wo, [
            (v(!0), y(R, null, q(e.tableColumn, (c) => (v(), y("div", {
              key: c.id,
              class: "cell table-row table-border-bottom flex-align-center",
              ref_for: !0,
              ref: "bodyCell",
              style: W(e.headerClass(c))
            }, [
              E("div", {
                class: H({ "text-overflow": c.showOverflowTooltip ?? !0 })
              }, [
                V(e.$slots, (c == null ? void 0 : c.custom) ?? "default", {
                  row: s,
                  index: u
                }, () => [
                  Z(L(s[c.prop]), 1)
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
const Te = /* @__PURE__ */ D(Io, [["render", Go], ["__scopeId", "data-v-6fa719af"]]);
Te.install = function(e) {
  e.component(Te.name, Te);
};
const qo = {
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
}, Qo = B({
  name: "KBatchTable",
  components: { pagination: ce },
  props: qo,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { emit: t }) {
    const n = $(null), a = () => n.value.clearSelection(), o = (i) => {
      i ? e.tableData.forEach((g) => {
        i.forEach((h) => {
          m(g) === m(h) && le(() => n.value && n.value.toggleRowSelection(g));
        });
      }) : (l.value = [], n.value.clearSelection());
    }, l = _({
      get: () => e.modelValue,
      set: (i) => t("update:modelValue", i)
    });
    G(() => e.modelValue, (i) => {
      !i.length && n.value && n.value.clearSelection();
    });
    const r = () => {
      setTimeout(() => {
        e.selectList.length && (e.tableData.forEach((i) => {
          i[e.checkKey] = i[e.checkKey] ?? 1;
        }), e.selectList.forEach((i) => {
          e.tableData.forEach((g) => {
            m(i) === m(g) && (g[e.checkKey] = 0);
          });
        }), o(l.value));
      }, 200);
    };
    G(() => e.tableData, (i) => {
      le(() => {
        i.length && r(), i.length && o(l.value);
      });
    }, { immediate: !0 });
    const s = (i, g) => {
      i.some((S) => m(S) === m(g)) ? l.value = [...l.value, g] : l.value = l.value.filter((S) => m(S) !== m(g));
    }, u = (i) => {
      if (l.value.length)
        if (i.length) {
          const g = i.filter((h) => l.value.every((S) => m(S) !== m(h)));
          l.value = [...l.value, ...g];
        } else
          l.value = l.value.filter((g) => e.tableData.every((h) => m(g) !== m(h)));
      else
        l.value = i;
    }, c = (i) => {
      if (!f(i))
        return;
      const g = l.value.some((h) => m(h) === m(i));
      o([i]), g ? l.value = l.value.filter((h) => m(h) !== m(i)) : l.value = [...l.value, i], t("row-click", i);
    }, f = (i) => i[e.checkKey] ?? !i[e.checkKey], d = _({
      get: () => e.page,
      set: (i) => t("update:page", i)
    }), p = (i) => {
      t("current-change", i);
    }, m = (i) => i[e.keyId];
    return {
      multipleTable: n,
      handleSelect: s,
      selectAll: u,
      handleRowClick: c,
      checkSelection: f,
      toggleSelection: o,
      currentPage: d,
      changePage: p,
      clear: a
    };
  }
}), Xo = { key: 2 }, Zo = { class: "mt20 flex-between" }, Jo = { class: "flex1" };
function el(e, t, n, a, o, l) {
  const r = C("el-table-column"), s = C("el-table"), u = C("pagination");
  return v(), y(R, null, [
    T(s, I({ ref: "multipleTable" }, e.$attrs, {
      "empty-text": "暂无数据",
      data: e.tableData,
      "header-cell-style": e.headerCellStyle,
      onSelect: e.handleSelect,
      onSelectAll: e.selectAll,
      onRowClick: e.handleRowClick
    }), de({
      default: k(() => [
        T(r, {
          type: "selection",
          width: "55",
          selectable: e.checkSelection
        }, null, 8, ["selectable"]),
        (v(!0), y(R, null, q(e.tableColumn, (c) => (v(), M(r, {
          label: c.label,
          key: c.prop,
          width: c.width,
          fixed: c.fixed,
          "min-width": c.minWidth,
          "show-overflow-tooltip": ""
        }, de({
          default: k((f) => [
            e.$slots.default ? V(e.$slots, "default", {
              key: 0,
              item: f.row,
              row: f.row,
              column: c,
              index: f.$index
            }) : K("", !0),
            c.custom && f.$index >= 0 ? V(e.$slots, c.custom, {
              key: 1,
              item: f.row,
              column: c,
              row: f.row,
              index: f.$index
            }) : (v(), y("span", Xo, L(f.row[c.prop] ?? "-"), 1))
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
    E("div", Zo, [
      E("div", Jo, [
        e.$slots.footer ? V(e.$slots, "footer", { key: 0 }) : K("", !0)
      ]),
      T(u, {
        total: e.total,
        "show-size": e.showSize,
        class: "mt0 ml20",
        modelValue: e.currentPage,
        "onUpdate:modelValue": t[0] || (t[0] = (c) => e.currentPage = c),
        onCurrentChange: e.changePage
      }, null, 8, ["total", "show-size", "modelValue", "onCurrentChange"])
    ])
  ], 64);
}
const ye = /* @__PURE__ */ D(Qo, [["render", el]]);
ye.install = function(e) {
  e.component(ye.name, ye);
};
const tl = B({
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
    const n = _({
      get: () => e.modelValue,
      set: (s) => t("update:modelValue", s)
    }), a = _(() => e.class ? e.class : e.customClass ? e.customClass : e.showFooter ? "custom-dialog" : "custom-dialog no-footer");
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
}), nl = /* @__PURE__ */ E("span", null, "这是一段信息", -1), al = { class: "dialog-footer" };
function ol(e, t, n, a, o, l) {
  const r = C("el-button"), s = C("el-dialog");
  return v(), M(s, I({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": t[1] || (t[1] = (u) => e.dialogVisible = u),
    class: e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), de({
    default: k(() => [
      V(e.$slots, "default", {}, () => [
        nl
      ])
    ]),
    _: 2
  }, [
    e.showFooter ? {
      name: "footer",
      fn: k(() => [
        V(e.$slots, "footer", {}, () => [
          E("span", al, [
            T(r, {
              size: "large",
              onClick: t[0] || (t[0] = (u) => e.dialogVisible = !1)
            }, {
              default: k(() => [
                Z("取 消")
              ]),
              _: 1
            }),
            T(r, {
              size: "large",
              type: "primary",
              onClick: e.confirmHandler
            }, {
              default: k(() => [
                Z("确 定")
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
const Ne = /* @__PURE__ */ D(tl, [["render", ol]]);
Ne.install = function(e) {
  e.component(Ne.name, Ne);
};
const ll = B({
  name: "KBreadcrumb",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const n = fe().appContext.config.globalProperties.$router;
    return { clickHandle: (o, l) => {
      if (o.url) {
        window.location.href = o.url;
        return;
      }
      o.path ? n == null || n.push(o.path) : n == null || n.go(l - e.list.length + 1);
    } };
  }
}), rl = { class: "crumb-header flex-between" }, sl = { class: "crumb-contain" }, ul = ["onClick"];
function il(e, t, n, a, o, l) {
  const r = C("el-space");
  return v(), y("div", rl, [
    E("div", sl, [
      T(r, { spacer: "/" }, {
        default: k(() => [
          (v(!0), y(R, null, q(e.list, (s, u) => (v(), y("span", {
            key: u,
            class: H({ "crumb-item": u !== e.list.length - 1 }),
            onClick: (c) => e.clickHandle(s, u)
          }, L(s.title), 11, ul))), 128))
        ]),
        _: 1
      })
    ]),
    V(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Be = /* @__PURE__ */ D(ll, [["render", il], ["__scopeId", "data-v-4520378f"]]);
Be.install = function(e) {
  e.component(Be.name, Be);
};
const cl = B({
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
    const n = fe(), a = n.appContext.config.globalProperties.$route, o = n.appContext.config.globalProperties.$router, l = _(() => (a == null ? void 0 : a.params.type) || (a == null ? void 0 : a.name)), r = $(l.value);
    Re(() => {
      r.value = e.modelValue || l.value, t("update:modelValue", r.value);
    });
    const s = _(() => a.query);
    return { activeName: r, handleClick: (c) => {
      if (e.isRouter) {
        const f = { path: `${c.paneName}`, query: s.value };
        e.replace ? o.replace(f) : o.push(f);
      }
      t("tab-click", c.paneName), t("update:modelValue", c.paneName);
    } };
  }
}), dl = { class: "tabs-right ml10" };
function fl(e, t, n, a, o, l) {
  const r = C("el-tab-pane"), s = C("el-tabs");
  return v(), y("div", {
    class: H(["k-tabs", { "style-card": !e.type, "style-padding": e.isPadding && !e.type }])
  }, [
    T(s, I({
      class: "flex-tabs",
      type: e.type
    }, e.$attrs, {
      modelValue: e.activeName,
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.activeName = u),
      onTabClick: e.handleClick
    }), {
      default: k(() => [
        (v(!0), y(R, null, q(e.tabsList, (u) => (v(), M(r, {
          label: u.label,
          name: u.name,
          key: u.name
        }, null, 8, ["label", "name"]))), 128))
      ]),
      _: 1
    }, 16, ["type", "modelValue", "onTabClick"]),
    E("div", dl, [
      V(e.$slots, "default")
    ])
  ], 2);
}
const Me = /* @__PURE__ */ D(cl, [["render", fl]]);
Me.install = function(e) {
  e.component(Me.name, Me);
};
const pl = B({
  name: "KPicker",
  components: { batchTable: ye, Delete: Nn },
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
    const n = _({
      get: () => e.modelValue,
      set: (f) => t("update:modelValue", f)
    });
    Re(() => {
      e.showCount && n.value.forEach((f) => {
        f.num = f.num ?? 1;
      });
    });
    const a = $(null), o = () => a.value.toggleSelection(), l = (f) => a.value.handleRowClick(f), r = $(1);
    return {
      multipleSelection: n,
      batchTableRef: a,
      currentPage: r,
      emptyHandler: o,
      resetData: () => {
        r.value = 1, o();
      },
      deleteHandler: l,
      getName: (f) => f[e.keyName],
      getId: (f) => f[e.keyId]
    };
  }
}), hl = { class: "k-picker" }, ml = { class: "col-left" }, vl = { class: "col-right" }, gl = { class: "selete-header flex-between" }, bl = { class: "selete-content" }, yl = { class: "flex flex1 mr20 overflow" }, _l = { class: "text-overflow" };
function wl(e, t, n, a, o, l) {
  const r = C("batchTable"), s = C("el-col"), u = C("delete"), c = C("el-icon"), f = C("el-button"), d = C("el-tooltip"), p = C("el-input-number"), m = C("el-row");
  return v(), y("div", hl, [
    V(e.$slots, "top", {}, void 0, !0),
    T(m, { gutter: 10 }, {
      default: k(() => [
        T(s, { span: 15 }, {
          default: k(() => [
            E("div", ml, [
              T(r, {
                ref: "batchTableRef",
                height: "440px",
                "table-data": e.tableData,
                "table-column": e.tableColumn,
                "select-list": e.selectList,
                "key-id": e.keyId,
                modelValue: e.multipleSelection,
                "onUpdate:modelValue": t[0] || (t[0] = (i) => e.multipleSelection = i),
                page: e.currentPage,
                "onUpdate:page": t[1] || (t[1] = (i) => e.currentPage = i)
              }, {
                header: k(({ column: i }) => [
                  V(e.$slots, i.header, { column: i }, void 0, !0)
                ]),
                default: k(({ row: i, column: g, index: h }) => [
                  g.custom && h >= 0 ? V(e.$slots, g.custom, {
                    key: 0,
                    row: i,
                    index: h
                  }, void 0, !0) : K("", !0)
                ]),
                _: 3
              }, 8, ["table-data", "table-column", "select-list", "key-id", "modelValue", "page"])
            ])
          ]),
          _: 3
        }),
        T(s, { span: 9 }, {
          default: k(() => [
            E("div", vl, [
              E("div", gl, [
                E("span", null, [
                  Z("已选择"),
                  E("span", null, "(" + L(e.multipleSelection.length) + ")", 1)
                ]),
                T(f, {
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
                    Z(" 清空 ")
                  ]),
                  _: 1
                }, 8, ["disabled", "onClick"])
              ]),
              E("div", bl, [
                (v(!0), y(R, null, q(e.multipleSelection, (i) => (v(), y("div", {
                  class: H(["flex-between pl10 pr10", { mt10: e.showCount }]),
                  key: e.getId(i)
                }, [
                  E("div", yl, [
                    T(d, {
                      effect: "dark",
                      content: e.getName(i),
                      placement: "top"
                    }, {
                      default: k(() => [
                        E("span", _l, L(e.getName(i)), 1)
                      ]),
                      _: 2
                    }, 1032, ["content"])
                  ]),
                  e.showCount ? (v(), M(p, {
                    key: 0,
                    modelValue: i.num,
                    "onUpdate:modelValue": (g) => i.num = g,
                    min: 1,
                    class: "width-100 flex-shrink mr10"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : K("", !0),
                  T(f, {
                    text: "",
                    onClick: (g) => e.deleteHandler(i)
                  }, {
                    default: k(() => [
                      Z(" 删除 ")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ], 2))), 128))
              ])
            ])
          ]),
          _: 1
        })
      ]),
      _: 3
    }),
    V(e.$slots, "footer", {}, void 0, !0)
  ]);
}
const xe = /* @__PURE__ */ D(pl, [["render", wl], ["__scopeId", "data-v-11e20448"]]);
xe.install = function(e) {
  e.component(xe.name, xe);
};
const $l = B({
  name: "KTooltip",
  props: {
    placement: { type: String, default: "top" },
    showIcon: { type: Boolean, default: !1 },
    overflow: { type: Boolean, default: !1 }
  },
  components: { Warning: Jn }
});
function kl(e, t, n, a, o, l) {
  const r = C("warning"), s = C("el-icon"), u = C("el-tooltip");
  return v(), y("div", {
    class: H(["flex flex1", { "text-overflow": e.overflow }])
  }, [
    T(u, I(e.$attrs, { placement: e.placement }), {
      content: k(() => [
        V(e.$slots, "content", {}, void 0, !0)
      ]),
      default: k(() => [
        E("div", {
          class: H(["flex-center", { "text-overflow": e.overflow }])
        }, [
          V(e.$slots, "default", {}, void 0, !0),
          e.showIcon ? (v(), M(s, {
            key: 0,
            class: "ml5"
          }, {
            default: k(() => [
              V(e.$slots, "icon", {}, () => [
                T(r)
              ], !0)
            ]),
            _: 3
          })) : K("", !0)
        ], 2)
      ]),
      _: 3
    }, 16, ["placement"])
  ], 2);
}
const ze = /* @__PURE__ */ D($l, [["render", kl], ["__scopeId", "data-v-d468c200"]]);
ze.install = function(e) {
  e.component(ze.name, ze);
};
const Sl = {
  __name: "main",
  setup(e) {
    return (t, n) => (v(), M(b(jt), { locale: b(Ut) }, {
      default: k(() => [
        V(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale"]));
  }
}, Wt = {
  __name: "datePicker",
  props: {
    type: { type: String, default: "daterange" },
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = _(() => n.type === "datetimerange" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"), o = (f) => {
      const d = new Date(), p = new Date();
      return d.setTime(d.getTime() - 3600 * 1e3 * 24 * f), n.type === "date" ? d : [d, p];
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
    ], r = [new Date(2e3, 1, 1, 0, 0, 0), new Date(2e3, 2, 1, 23, 59, 59)], s = _({
      get: () => n.modelValue,
      set: (f) => t("update:modelValue", f)
    }), u = (f) => f.getTime() > Date.now(), c = (f) => t("change", f);
    return (f, d) => {
      const p = C("el-date-picker");
      return v(), M(p, {
        modelValue: b(s),
        "onUpdate:modelValue": d[0] || (d[0] = (m) => Ge(s) ? s.value = m : null),
        type: e.type,
        "unlink-panels": "",
        "range-separator": "至",
        "start-placeholder": "开始日期",
        "end-placeholder": "结束日期",
        shortcuts: l,
        format: b(a),
        "value-format": "YYYY-MM-DD HH:mm:ss",
        "disabled-date": u,
        "default-time": r,
        editable: !1,
        clearable: !1,
        onChange: c
      }, null, 8, ["modelValue", "type", "format"]);
    };
  }
}, Cl = { class: "date-picker flex" }, El = {
  __name: "selectType",
  props: {
    daterange: { type: Boolean, default: !1 },
    // 是否选择模式下 是否日期范围
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = $(0), o = $([
      { value: 0, label: "日" },
      { value: 1, label: "周" },
      { value: 2, label: "月" },
      { value: 3, label: "年" }
    ]), l = _({
      get: () => n.modelValue,
      set: (m) => t("update:modelValue", m)
    }), r = (m) => m.getTime() > Date.now(), s = _(() => ({
      0: "YYYY-MM-DD",
      1: "YYYY 第 ww 周",
      2: "YYYY-MM",
      3: "YYYY"
    })[a.value]), u = _(() => ({
      0: n.daterange ? "daterange" : "date",
      1: "week",
      2: "month",
      3: "year"
    })[a.value]), c = _(() => {
      const { label: m } = o.value.filter((i) => i.value === a.value)[0];
      return `选择${m}`;
    }), f = $("");
    Re(() => {
      if (Array.isArray(l.value)) {
        const [m, i] = l.value;
        f.value = [m, i];
      }
    });
    const d = (m) => {
      if (m) {
        if (Array.isArray(l.value)) {
          const [i] = l.value;
          l.value = i;
        }
      } else
        n.daterange && (l.value = f.value);
      p();
    }, p = () => {
      t("change", { type: a.value, time: l.value });
    };
    return (m, i) => {
      const g = C("el-option"), h = C("el-select"), S = C("el-date-picker");
      return v(), y("div", Cl, [
        T(h, {
          modelValue: a.value,
          "onUpdate:modelValue": i[0] || (i[0] = (N) => a.value = N),
          class: "width-100 mr10",
          onChange: d
        }, {
          default: k(() => [
            (v(!0), y(R, null, q(o.value, (N) => (v(), M(g, {
              key: N.value,
              label: N.label,
              value: N.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        E("div", null, [
          e.daterange && !a.value ? (v(), M(Wt, I({
            key: 0,
            modelValue: b(l),
            "onUpdate:modelValue": i[1] || (i[1] = (N) => Ge(l) ? l.value = N : null)
          }, m.$props, { onChange: p }), null, 16, ["modelValue"])) : (v(), M(S, {
            key: 1,
            modelValue: b(l),
            "onUpdate:modelValue": i[2] || (i[2] = (N) => Ge(l) ? l.value = N : null),
            type: b(u),
            format: b(s),
            "value-format": "YYYY-MM-DD HH:mm:ss",
            placeholder: b(c),
            "disabled-date": r,
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
}, Vl = B({
  name: "KDatePicker",
  props: {
    selectType: { type: Boolean, default: !1 }
    // 是否选择模式（年月日）
    // daterange: { type: Boolean, default: false }, // 是否选择模式下 是否日期范围
  },
  components: { configProvider: Sl, selectType: El, datePicker: Wt },
  setup() {
  }
});
function Tl(e, t, n, a, o, l) {
  const r = C("selectType"), s = C("datePicker"), u = C("config-provider");
  return v(), M(u, null, {
    default: k(() => [
      e.selectType ? (v(), M(r, it(I({ key: 0 }, e.$attrs)), null, 16)) : (v(), M(s, it(I({ key: 1 }, e.$attrs)), null, 16))
    ]),
    _: 1
  });
}
const He = /* @__PURE__ */ D(Vl, [["render", Tl]]);
He.install = function(e) {
  e.component(He.name, He);
};
const ut = B({
  name: "KNumberKeyboard",
  components: { ElButton: ko },
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
    ], a = _(() => (e.decimalPoint && n.push({ name: "." }), n)), o = _({
      get: () => e.modelValue,
      set: (p) => t("update:modelValue", p)
    }), l = () => {
      le(() => t("change", o.value));
    }, r = (p) => {
      if (e.maxlength && o.value.length >= Number(e.maxlength))
        return;
      const m = o.value.indexOf("."), i = o.value.split(".");
      i.length === 2 && (p === "." || i[1].length >= e.precision) || (o.value = `${m === 0 ? 0 : ""}${o.value}${p}`, !e.startZero && o.value.slice(0, 1) === "0" && (o.value = o.value.slice(1) + p), l());
    }, s = (p) => {
      p === "delete" ? o.value = o.value.slice(0, o.value.length - 1) : p === "clear" && (o.value = "", t("clear")), p === "confirm" ? t("confirm") : l();
    }, u = ({ key: p, name: m }) => {
      p ? s(p) : r(m);
    }, c = _(() => `${Number(4 * e.width + 20)}px`), f = _(() => `${e.width}px`), d = _(() => e.decimalPoint ? 3 : 4);
    return {
      keyboardList: a,
      clickHandleBtn: u,
      clickBtn: r,
      totalwidth: c,
      gridwidth: f,
      numberVal: o,
      zerogridend: d
    };
  }
}), kt = () => {
  ln((e) => ({
    "5f76155e": e.totalwidth,
    af867fde: e.gridwidth,
    c0d11484: e.zerogridend
  }));
}, St = ut.setup;
ut.setup = St ? (e, t) => (kt(), St(e, t)) : kt;
const Nl = ut, Bl = { class: "number-keyboard mt10" }, Ml = { class: "number-ul" };
function xl(e, t, n, a, o, l) {
  const r = C("el-button");
  return v(), y("div", Bl, [
    E("ul", Ml, [
      (v(!0), y(R, null, q(e.keyboardList, (s, u) => (v(), y("li", {
        key: u,
        class: H(s.class)
      }, [
        T(r, {
          type: s.type,
          color: e.color,
          onClick: (c) => e.clickHandleBtn(s)
        }, {
          default: k(() => [
            Z(L(s.name), 1)
          ]),
          _: 2
        }, 1032, ["type", "color", "onClick"])
      ], 2))), 128))
    ])
  ]);
}
const Pe = /* @__PURE__ */ D(Nl, [["render", xl], ["__scopeId", "data-v-2e1be318"]]);
Pe.install = function(e) {
  e.component(Pe.name, Pe);
};
const zl = B({
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
    const n = _({
      get: () => e.modelValue,
      set: (s) => t("update:modelValue", s)
    }), a = (s) => e.decimals ? Number(s).toFixed(e.decimals) : s, o = $(null), l = (s = !0) => {
      const u = o.value;
      if (!u)
        return;
      const c = +u.innerText, f = +n.value / 200, d = s && c < Number(n.value) || !s && c > Number(n.value);
      s && c > e.end || c < e.start || (d ? r(u, s ? c + f : c - f, s) : u.interText = a(n.value));
    }, r = (s, u, c = !0) => {
      const f = u < e.start ? e.start : `${e.decimals ? u : Math.floor(u)}`, d = u > e.end ? e.end : `${e.decimals ? u : Math.ceil(u)}`;
      s.innerText = a(c ? d : f);
      const p = setTimeout(() => {
        clearTimeout(p), c ? l() : l(!1);
      }, 5);
    };
    return we(() => {
      o.value && e.autoinit && l();
    }), Vt(() => {
      if (e.autoinit) {
        const s = +o.value.innerText;
        l(s < Number(n.value));
      }
    }), { textValue: n, spanText: o, setDeimals: a };
  }
}), Hl = { class: "auto-counter" }, Pl = { class: "mr5" }, Dl = { class: "ml5" };
function Ol(e, t, n, a, o, l) {
  return v(), y("div", Hl, [
    E("span", Pl, L(e.prefix), 1),
    E("span", {
      class: "span-text",
      ref: "spanText"
    }, L(e.autoinit ? e.setDeimals(e.start) : e.setDeimals(e.textValue)), 513),
    E("span", Dl, L(e.suffix), 1)
  ]);
}
const De = /* @__PURE__ */ D(zl, [["render", Ol]]);
De.install = function(e) {
  e.component(De.name, De);
};
const Al = B({
  name: "KCollapseButton",
  components: { ElIcon: Je, CaretLeft: gn, CaretRight: kn },
  props: {
    style: { type: Object, default: () => ({}) },
    position: { type: String, default: "right" }
  },
  emits: ["click"],
  setup(e, { emit: t, slots: n }) {
    const a = $(!1), o = $(null);
    we(() => {
      const { parentNode: s } = o.value;
      s.style.position = "relative", s.style.overflow = "initial";
    });
    const l = _(() => {
      const { clientWidth: s, clientHeight: u } = o.value || {}, {
        top: c,
        right: f,
        width: d,
        height: p,
        left: m,
        bottom: i
      } = e.style, g = {
        right: {
          top: c ?? "50%",
          right: f ?? `-${s}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: c ? "0px" : `-${Math.ceil(u / 2)}px`
        },
        left: {
          top: c ?? "50%",
          left: m ?? `-${s}px`,
          borderRadius: "5px 0 0 5px",
          marginTop: c ? "0px" : `-${Math.ceil(u / 2)}px`
        },
        top: {
          left: m ?? "50%",
          marginLeft: m ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(s / 2)}px` : "0px",
          top: c ?? (n == null ? void 0 : n.default) ? `-${u}px` : `-${Math.ceil(u / 2 + s / 2)}px`,
          borderRadius: n != null && n.default ? "5px 5px 0 0" : "0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(-90deg)"
        },
        bottom: {
          left: m ?? "50%",
          bottom: i ?? (n == null ? void 0 : n.default) ? `-${u}px` : `-${Math.ceil(u / 2 + s / 2)}px`,
          marginLeft: m ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(s / 2)}px` : "0px",
          borderRadius: n != null && n.default ? "0 0 5px 5px" : " 0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(90deg)"
        }
      };
      return {
        width: d ?? (n == null ? void 0 : n.default) ? "" : "10px",
        height: p ?? (n == null ? void 0 : n.default) ? "" : "68px",
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
function Il(e, t, n, a, o, l) {
  const r = C("CaretRight"), s = C("CaretLeft"), u = C("el-icon");
  return v(), y("div", {
    class: "collapse-button flex-center pointer",
    style: W(e.collapseStyle),
    ref: "collapse",
    onClick: t[0] || (t[0] = (...c) => e.clickHandle && e.clickHandle(...c))
  }, [
    V(e.$slots, "default", {}, () => [
      T(u, {
        size: 18,
        color: "#999999"
      }, {
        default: k(() => [
          e.isCollapse ? (v(), M(r, { key: 0 })) : (v(), M(s, { key: 1 }))
        ]),
        _: 1
      })
    ], !0)
  ], 4);
}
const Oe = /* @__PURE__ */ D(Al, [["render", Il], ["__scopeId", "data-v-447ed96e"]]);
Oe.install = function(e) {
  e.component(Oe.name, Oe);
};
const Ue = {
  KButton: Ce,
  KInput: ge,
  KInputNumber: Ee,
  KTable: Ve,
  KTableV2: Te,
  KPage: ce,
  KBatchTable: ye,
  KDialog: Ne,
  KBreadcrumb: Be,
  KTabs: Me,
  KPicker: xe,
  KTooltip: ze,
  KDatePicker: He,
  KNumberKeyboard: Pe,
  KVirtualList: be,
  KAutoCounter: De,
  KCollapseButton: Oe,
  install: () => {
  }
};
function Rl(e, t, n = 0) {
  return e.substr(n, t.length) === t;
}
Ue.install = function(e) {
  Object.keys(Ue).forEach((t) => {
    if (Rl(t, "K")) {
      const n = Ue[t];
      e.component(n.name, n);
    }
  }), Object.keys(ve).forEach((t) => {
    e.directive(t, ve[t]);
  });
};
export {
  De as KAutoCounter,
  ye as KBatchTable,
  Be as KBreadcrumb,
  Ce as KButton,
  Oe as KCollapseButton,
  He as KDatePicker,
  Ne as KDialog,
  ge as KInput,
  Ee as KInputNumber,
  Pe as KNumberKeyboard,
  ce as KPage,
  xe as KPicker,
  Ve as KTable,
  Te as KTableV2,
  Me as KTabs,
  ze as KTooltip,
  Ue as KUI,
  be as KVirtualList,
  ve as directives
};
