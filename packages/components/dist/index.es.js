import { defineComponent as M, ref as w, computed as _, resolveComponent as C, openBlock as v, createBlock as x, mergeProps as A, withModifiers as Gt, withCtx as k, renderSlot as V, createElementBlock as y, createCommentVNode as L, withKeys as Ct, createSlots as fe, createElementVNode as E, watchEffect as Re, watch as W, nextTick as re, normalizeClass as H, createVNode as T, unref as b, getCurrentScope as qt, onScopeDispose as Qt, getCurrentInstance as pe, onMounted as $e, warn as Xt, provide as at, inject as ne, onBeforeUnmount as Zt, toRef as Ae, Transition as Jt, withDirectives as en, normalizeStyle as U, vShow as tn, Fragment as I, reactive as Et, onUpdated as Vt, resolveDynamicComponent as We, useSlots as nn, Text as an, renderList as G, toDisplayString as K, createTextVNode as J, toRefs as on, isRef as Ge, normalizeProps as it, useCssVars as ln } from "vue";
const ge = {
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
        const o = Date.now(), l = /^[a-zA-Z]{2,}/.test(a.key) ? a.key : a.key.toLocaleUpperCase(), { buttonKey: s, isCombination: r = 0 } = t.value || e.valueKeys || {}, u = document.contains(e), c = a.target.tagName === "TEXTAREA" || a.target.tagName === "INPUT", {
          dialog: f,
          focus: d,
          long: h,
          any: p,
          fast: i
        } = t.modifiers;
        if (!u && !h) {
          document.removeEventListener("keydown", e.handler);
          return;
        }
        if (p && t.arg) {
          t.arg(a);
          return;
        }
        const g = i ? o - n > 30 : !0, m = document.querySelector(".el-popup-parent--hidden") || document.querySelector(".is-message-box");
        if (n = o, m && !f)
          return;
        const S = a.ctrlKey || a.metaKey, B = r === +S && s === l;
        (!c || d || r) && B && g && t.arg && t.arg(a);
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
ge.install = function(e) {
  Object.keys(ge).forEach((t) => {
    e.directive(t, ge[t]);
  });
};
const D = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, rn = M({
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
    const a = w(!0), o = w(null), l = () => {
      a.value && (a.value = !1, t("click")), s();
    }, s = () => {
      clearTimeout(o.value), o.value = setTimeout(() => {
        a.value = !0;
      }, 800);
    }, r = _(() => {
      const { border: u } = e, { type: c = "text" } = n;
      return u ? {
        backgroundColor: "transparent",
        color: `var(--el-color-${c})`
      } : {};
    });
    return { onclick: l, buttonStatus: a, buttonStyle: r };
  }
}), sn = {
  key: 0,
  class: "el-icon-lock el-icon--right"
};
function un(e, t, n, a, o, l) {
  const s = C("el-button");
  return v(), x(s, A({
    disabled: !e.buttonStatus || e.disabled,
    style: e.buttonStyle,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: Gt(e.onclick, ["stop"])
  }), {
    default: k(() => [
      V(e.$slots, "default"),
      e.iconLock ? (v(), y("i", sn)) : L("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "style", "click-state", "onClick"]);
}
const Ce = /* @__PURE__ */ D(rn, [["render", un]]);
Ce.install = function(e) {
  e.component(Ce.name, Ce);
};
const cn = M({
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
    const a = w(null), o = w(!0), l = _({
      get() {
        return e.modelValue;
      },
      set(f) {
        s(f);
      }
    }), s = (f) => {
      let d = f;
      if (e.type === "number") {
        if (d = d.replace(/[^\d.]/g, ""), d = d.replace(/^\./g, ""), d = d.replace(/\.{2,}/g, "."), d = d.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), d.indexOf(".") < 0 && d !== "" && d.substr(0, 1) === "0" && d.length === 2 && (d = d.substr(1, d.length)), d !== "")
          if (d.indexOf(".") > 0) {
            if (e.point) {
              const h = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
              d = d.match(h)[0] || null;
            }
          } else
            d === "." && (d = "");
      } else
        e.type === "integer" ? d = d.replace(/[^\d]/g, "") : e.type === "intText" && (d = d.replace(/[^\w]/g, ""));
      n.max !== void 0 && d && Number(d) > Number(n.max) && (d = n.max), n.min !== void 0 && d && Number(d) < Number(n.min) && (d = n.min), t("update:modelValue", d);
    }, r = () => {
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
      searchContent: r
    };
  }
});
function dn(e, t, n, a, o, l) {
  const s = C("el-input");
  return v(), x(s, A({
    modelValue: e.inputValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => e.inputValue = r),
    modelModifiers: { trim: !0 }
  }, e.$attrs, {
    onKeyup: Ct(e.searchContent, ["enter"]),
    onChange: e.changeValue
  }), fe({ _: 2 }, [
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
const be = /* @__PURE__ */ D(cn, [["render", dn]]);
be.install = function(e) {
  e.component(be.name, be);
};
/*! Element Plus Icons Vue v2.0.10 */
var se = (e, t) => {
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
var gn = /* @__PURE__ */ se(fn, [["render", vn], ["__file", "caret-left.vue"]]), bn = {
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
var kn = /* @__PURE__ */ se(bn, [["render", $n], ["__file", "caret-right.vue"]]), Sn = {
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
var Nn = /* @__PURE__ */ se(Sn, [["render", Tn], ["__file", "delete.vue"]]), Bn = {
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
var Pn = /* @__PURE__ */ se(Bn, [["render", Hn], ["__file", "loading.vue"]]), Dn = {
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
var Fn = /* @__PURE__ */ se(Dn, [["render", Rn], ["__file", "minus.vue"]]), Ln = {
  name: "Plus"
}, Kn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jn = /* @__PURE__ */ E("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), Yn = [
  jn
];
function Un(e, t, n, a, o, l) {
  return v(), y("svg", Kn, Yn);
}
var Wn = /* @__PURE__ */ se(Ln, [["render", Un], ["__file", "plus.vue"]]), Gn = {
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
var Jn = /* @__PURE__ */ se(Gn, [["render", Zn], ["__file", "warning.vue"]]);
const ea = M({
  name: "KInputNumber",
  components: { Minus: Fn, Plus: Wn, KInput: be },
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
    const n = w(1), a = w(null), o = w(!1), l = _(() => e.modelValue <= e.min), s = _(() => e.modelValue >= e.max), r = _({
      get: () => e.modelValue,
      set: (m) => {
        t("update:modelValue", m);
      }
    }), u = (m) => t("blur", m), c = (m) => t("focus", m), f = (m) => t("enter", m), d = (m) => {
      re(() => {
        const S = m === "" ? void 0 : Number(m);
        (!Number.isNaN(S) || m === "") && g(S);
      });
    }, h = (m) => {
      o.value = !m, a.value = m;
    }, p = w(-1);
    Re(() => {
      n.value = e.modelValue;
    }), W(() => p.value, (m) => {
      m < 0 && (r.value = e.modelValue, d(n.value));
    }, { immediate: !0 });
    const i = (m) => {
      const S = m === "increase", B = S ? s.value : l.value;
      if (e.disabled || B)
        return;
      const Y = o.value ? 0 : r.value, q = a.value ? n.value : Y, Q = S ? q + e.step : q - e.step;
      g(Q);
    }, g = (m) => {
      a.value = m;
      let S = m;
      p.value !== S && (p.value = m, S >= e.max && (S = e.max), S <= e.min && (S = e.min), a.value === void 0 && (S = 1), t("update:modelValue", S), t("change", S, p.value), n.value = S);
    };
    return {
      currentValue: n,
      minDisabled: l,
      maxDisabled: s,
      handleBlur: u,
      handleFocus: c,
      handleKeyUp: f,
      handleInputChange: d,
      handleInput: h,
      clickBtnHandle: i
    };
  }
});
function ta(e, t, n, a, o, l) {
  const s = C("minus"), r = C("el-icon"), u = C("plus"), c = C("k-input");
  return v(), y("div", {
    class: H(["el-input-number", { "is-disabled": e.disabled }, { "is-without-controls": !e.controls }, e.size ? "el-input-number--" + e.size : ""])
  }, [
    e.controls ? (v(), y("span", {
      key: 0,
      class: H(["el-input-number__decrease", { "is-disabled": e.minDisabled }]),
      role: "button",
      onClick: t[0] || (t[0] = (f) => e.clickBtnHandle("decrease"))
    }, [
      T(r, { class: "el-input__icon" }, {
        default: k(() => [
          T(s)
        ]),
        _: 1
      })
    ], 2)) : L("", !0),
    e.controls ? (v(), y("span", {
      key: 1,
      class: H(["el-input-number__increase", { "is-disabled": e.maxDisabled }]),
      role: "button",
      onClick: t[1] || (t[1] = (f) => e.clickBtnHandle("increase"))
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
const ot = typeof window < "u", ie = (e) => typeof e == "number", aa = (e) => typeof e == "string", oa = () => {
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
  pe() ? $e(e) : t ? e() : re(e);
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
  const l = [], s = () => {
    l.forEach((f) => f()), l.length = 0;
  }, r = (f, d, h, p) => (f.addEventListener(d, h, p), () => f.removeEventListener(d, h, p)), u = W(() => [Bt(t), Tt(o)], ([f, d]) => {
    s(), f && l.push(...n.flatMap((h) => a.map((p) => r(f, h, p, d))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), s();
  };
  return Nt(c), c;
}
function sa(e, t = !1) {
  const n = w(), a = () => n.value = Boolean(e());
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
  let s;
  const r = sa(() => o && "ResizeObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = W(() => Bt(e), (d) => {
    u(), r.value && o && d && (s = new ResizeObserver(t), s.observe(d, l));
  }, { immediate: !0, flush: "post" }), f = () => {
    u(), c();
  };
  return Nt(f), {
    isSupported: r,
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
function we(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = lt(e) ? new xt(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const $a = "utils/dom/style";
function Ze(e, t = "px") {
  if (!e)
    return "";
  if (ie(e) || _a(e))
    return `${e}${t}`;
  if (lt(e))
    return e;
  we($a, "binding value must be a string or number");
}
const zt = "__epPropKey", oe = (e) => e, ka = (e) => rt(e) && !!e[zt], Ht = (e, t) => {
  if (!rt(e) || ka(e))
    return e;
  const { values: n, required: a, default: o, type: l, validator: s } = e, u = {
    type: l,
    required: !!a,
    validator: n || s ? (c) => {
      let f = !1, d = [];
      if (n && (d = Array.from(n), mt(e, "default") && d.push(o), f || (f = d.includes(c))), s && (f || (f = s(c))), !f && d.length > 0) {
        const h = [...new Set(d)].map((p) => JSON.stringify(p)).join(", ");
        Xt(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(c)}.`);
      }
      return f;
    } : void 0,
    [zt]: !0
  };
  return mt(e, "default") && (u.default = o), u;
}, he = (e) => na(Object.entries(e).map(([t, n]) => [
  t,
  Ht(n, t)
])), gt = oe([
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
  const t = pe();
  return _(() => {
    var n, a;
    return (a = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? a : void 0;
  });
}, Ie = w();
function Le(e, t = void 0) {
  const n = pe() ? ne(Dt, Ie) : Ie;
  return e ? _(() => {
    var a, o;
    return (o = (a = n.value) == null ? void 0 : a[e]) != null ? o : t;
  }) : n;
}
const Ea = (e, t, n = !1) => {
  var a;
  const o = !!pe(), l = o ? Le() : void 0, s = (a = t == null ? void 0 : t.provide) != null ? a : o ? at : void 0;
  if (!s) {
    we("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const r = _(() => {
    const u = b(e);
    return l != null && l.value ? Va(l.value, u) : u;
  });
  return s(Dt, r), (n || !Ie.value) && (Ie.value = r.value), r;
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
  const n = w(void 0), a = t.prop ? n : It("size"), o = t.global ? n : Le("size"), l = t.form ? { size: void 0 } : ne(st, void 0), s = t.formItem ? { size: void 0 } : ne(Ot, void 0);
  return _(() => a.value || b(e) || (s == null ? void 0 : s.size) || (l == null ? void 0 : l.size) || o.value || "");
}, Ft = (e) => {
  const t = It("disabled"), n = ne(st, void 0);
  return _(() => t.value || b(e) || (n == null ? void 0 : n.disabled) || !1);
}, Na = ({ from: e, replacement: t, scope: n, version: a, ref: o, type: l = "API" }, s) => {
  W(() => b(s), (r) => {
    r && we(n, `[${l}] ${e} is about to be deprecated in version ${a}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, Ba = "el", Ma = "is-", ae = (e, t, n, a, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), a && (l += `__${a}`), o && (l += `--${o}`), l;
}, me = (e) => {
  const t = Le("namespace", Ba);
  return {
    namespace: t,
    b: (i = "") => ae(t.value, e, i, "", ""),
    e: (i) => i ? ae(t.value, e, "", i, "") : "",
    m: (i) => i ? ae(t.value, e, "", "", i) : "",
    be: (i, g) => i && g ? ae(t.value, e, i, g, "") : "",
    em: (i, g) => i && g ? ae(t.value, e, "", i, g) : "",
    bm: (i, g) => i && g ? ae(t.value, e, i, "", g) : "",
    bem: (i, g, m) => i && g && m ? ae(t.value, e, i, g, m) : "",
    is: (i, ...g) => {
      const m = g.length >= 1 ? g[0] : !0;
      return i && m ? `${Ma}${i}` : "";
    },
    cssVar: (i) => {
      const g = {};
      for (const m in i)
        i[m] && (g[`--${t.value}-${m}`] = i[m]);
      return g;
    },
    cssVarName: (i) => `--${t.value}-${i}`,
    cssVarBlock: (i) => {
      const g = {};
      for (const m in i)
        i[m] && (g[`--${t.value}-${e}-${m}`] = i[m]);
      return g;
    },
    cssVarBlockName: (i) => `--${t.value}-${e}-${i}`
  };
}, xa = () => {
  const e = ne(st, void 0), t = ne(Ot, void 0);
  return {
    form: e,
    formItem: t
  };
};
var ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
};
const za = he({
  size: {
    type: oe([Number, String])
  },
  color: {
    type: String
  }
}), Ha = M({
  name: "ElIcon",
  inheritAttrs: !1
}), Pa = /* @__PURE__ */ M({
  ...Ha,
  props: za,
  setup(e) {
    const t = e, n = me("icon"), a = _(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: ya(o) ? void 0 : Ze(o),
        "--color": l
      };
    });
    return (o, l) => (v(), y("i", A({
      class: b(n).b(),
      style: b(a)
    }, o.$attrs), [
      V(o.$slots, "default")
    ], 16));
  }
});
var Da = /* @__PURE__ */ ve(Pa, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Je = Fe(Da), ce = 4, Oa = {
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
}), Ia = he({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Ra = "Thumb", Fa = /* @__PURE__ */ M({
  __name: "thumb",
  props: Ia,
  setup(e) {
    const t = e, n = ne(At), a = me("scrollbar");
    n || wa(Ra, "can not inject scrollbar context");
    const o = w(), l = w(), s = w({}), r = w(!1);
    let u = !1, c = !1, f = ot ? document.onselectstart : null;
    const d = _(() => Oa[t.vertical ? "vertical" : "horizontal"]), h = _(() => Aa({
      size: t.size,
      move: t.move,
      bar: d.value
    })), p = _(() => o.value[d.value.offset] ** 2 / n.wrapElement[d.value.scrollSize] / t.ratio / l.value[d.value.offset]), i = (N) => {
      var $;
      if (N.stopPropagation(), N.ctrlKey || [1, 2].includes(N.button))
        return;
      ($ = window.getSelection()) == null || $.removeAllRanges(), m(N);
      const z = N.currentTarget;
      z && (s.value[d.value.axis] = z[d.value.offset] - (N[d.value.client] - z.getBoundingClientRect()[d.value.direction]));
    }, g = (N) => {
      if (!l.value || !o.value || !n.wrapElement)
        return;
      const $ = Math.abs(N.target.getBoundingClientRect()[d.value.direction] - N[d.value.client]), z = l.value[d.value.offset] / 2, R = ($ - z) * 100 * p.value / o.value[d.value.offset];
      n.wrapElement[d.value.scroll] = R * n.wrapElement[d.value.scrollSize] / 100;
    }, m = (N) => {
      N.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", S), document.addEventListener("mouseup", B), f = document.onselectstart, document.onselectstart = () => !1;
    }, S = (N) => {
      if (!o.value || !l.value || u === !1)
        return;
      const $ = s.value[d.value.axis];
      if (!$)
        return;
      const z = (o.value.getBoundingClientRect()[d.value.direction] - N[d.value.client]) * -1, R = l.value[d.value.offset] - $, X = (z - R) * 100 * p.value / o.value[d.value.offset];
      n.wrapElement[d.value.scroll] = X * n.wrapElement[d.value.scrollSize] / 100;
    }, B = () => {
      u = !1, s.value[d.value.axis] = 0, document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", B), Q(), c && (r.value = !1);
    }, Y = () => {
      c = !1, r.value = !!t.size;
    }, q = () => {
      c = !0, r.value = u;
    };
    Zt(() => {
      Q(), document.removeEventListener("mouseup", B);
    });
    const Q = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return qe(Ae(n, "scrollbarElement"), "mousemove", Y), qe(Ae(n, "scrollbarElement"), "mouseleave", q), (N, $) => (v(), x(Jt, {
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
            style: U(b(h)),
            onMousedown: i
          }, null, 38)
        ], 34), [
          [tn, N.always || r.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var bt = /* @__PURE__ */ ve(Fa, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const La = he({
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
}), Ka = /* @__PURE__ */ M({
  __name: "bar",
  props: La,
  setup(e, { expose: t }) {
    const n = e, a = w(0), o = w(0);
    return t({
      handleScroll: (s) => {
        if (s) {
          const r = s.offsetHeight - ce, u = s.offsetWidth - ce;
          o.value = s.scrollTop * 100 / r * n.ratioY, a.value = s.scrollLeft * 100 / u * n.ratioX;
        }
      }
    }), (s, r) => (v(), y(I, null, [
      T(bt, {
        move: a.value,
        ratio: s.ratioX,
        size: s.width,
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      T(bt, {
        move: o.value,
        ratio: s.ratioY,
        size: s.height,
        vertical: "",
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var ja = /* @__PURE__ */ ve(Ka, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const Ya = he({
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
}), Ua = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ie)
}, et = "ElScrollbar", Wa = M({
  name: et
}), Ga = /* @__PURE__ */ M({
  ...Wa,
  props: Ya,
  emits: Ua,
  setup(e, { expose: t, emit: n }) {
    const a = e, o = me("scrollbar");
    let l, s;
    const r = w(), u = w(), c = w(), f = w("0"), d = w("0"), h = w(), p = w(1), i = w(1), g = _(() => {
      const $ = {};
      return a.height && ($.height = Ze(a.height)), a.maxHeight && ($.maxHeight = Ze(a.maxHeight)), [a.wrapStyle, $];
    }), m = _(() => [
      a.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !a.native }
    ]), S = _(() => [o.e("view"), a.viewClass]), B = () => {
      var $;
      u.value && (($ = h.value) == null || $.handleScroll(u.value), n("scroll", {
        scrollTop: u.value.scrollTop,
        scrollLeft: u.value.scrollLeft
      }));
    };
    function Y($, z) {
      rt($) ? u.value.scrollTo($) : ie($) && ie(z) && u.value.scrollTo($, z);
    }
    const q = ($) => {
      if (!ie($)) {
        we(et, "value must be a number");
        return;
      }
      u.value.scrollTop = $;
    }, Q = ($) => {
      if (!ie($)) {
        we(et, "value must be a number");
        return;
      }
      u.value.scrollLeft = $;
    }, N = () => {
      if (!u.value)
        return;
      const $ = u.value.offsetHeight - ce, z = u.value.offsetWidth - ce, R = $ ** 2 / u.value.scrollHeight, X = z ** 2 / u.value.scrollWidth, O = Math.max(R, a.minSize), ue = Math.max(X, a.minSize);
      p.value = R / ($ - R) / (O / ($ - O)), i.value = X / (z - X) / (ue / (z - ue)), d.value = O + ce < $ ? `${O}px` : "", f.value = ue + ce < z ? `${ue}px` : "";
    };
    return W(() => a.noresize, ($) => {
      $ ? (l == null || l(), s == null || s()) : ({ stop: l } = da(c, N), s = qe("resize", N));
    }, { immediate: !0 }), W(() => [a.maxHeight, a.height], () => {
      a.native || re(() => {
        var $;
        N(), u.value && (($ = h.value) == null || $.handleScroll(u.value));
      });
    }), at(At, Et({
      scrollbarElement: r,
      wrapElement: u
    })), $e(() => {
      a.native || re(() => {
        N();
      });
    }), Vt(() => N()), t({
      wrapRef: u,
      update: N,
      scrollTo: Y,
      setScrollTop: q,
      setScrollLeft: Q,
      handleScroll: B
    }), ($, z) => (v(), y("div", {
      ref_key: "scrollbarRef",
      ref: r,
      class: H(b(o).b())
    }, [
      E("div", {
        ref_key: "wrapRef",
        ref: u,
        class: H(b(m)),
        style: U(b(g)),
        onScroll: B
      }, [
        (v(), x(We($.tag), {
          ref_key: "resizeRef",
          ref: c,
          class: H(b(S)),
          style: U($.viewStyle)
        }, {
          default: k(() => [
            V($.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      $.native ? L("v-if", !0) : (v(), x(ja, {
        key: 0,
        ref_key: "barRef",
        ref: h,
        height: d.value,
        width: f.value,
        always: $.always,
        "ratio-x": i.value,
        "ratio-y": p.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var qa = /* @__PURE__ */ ve(Ga, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const Qa = Fe(qa), Xa = (e, t) => {
  Na({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, _(() => e.type === "text"));
  const n = ne(Pt, void 0), a = Le("button"), { form: o } = xa(), l = Ta(_(() => n == null ? void 0 : n.size)), s = Ft(), r = w(), u = nn(), c = _(() => e.type || (n == null ? void 0 : n.type) || ""), f = _(() => {
    var p, i, g;
    return (g = (i = e.autoInsertSpace) != null ? i : (p = a.value) == null ? void 0 : p.autoInsertSpace) != null ? g : !1;
  }), d = _(() => {
    var p;
    const i = (p = u.default) == null ? void 0 : p.call(u);
    if (f.value && (i == null ? void 0 : i.length) === 1) {
      const g = i[0];
      if ((g == null ? void 0 : g.type) === an) {
        const m = g.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(m.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: l,
    _type: c,
    _ref: r,
    shouldAddSpace: d,
    handleClick: (p) => {
      e.nativeType === "reset" && (o == null || o.resetFields()), t("click", p);
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
], Ja = ["button", "submit", "reset"], tt = he({
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
function Lt(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Se(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function le(e) {
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
function Ke(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function oo(e, t, n) {
  var a, o, l;
  if (e = P(e, 360), t = P(t, 100), n = P(n, 100), t === 0)
    o = n, l = n, a = n;
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - s;
    a = Ke(r, s, e + 1 / 3), o = Ke(r, s, e), l = Ke(r, s, e - 1 / 3);
  }
  return { r: a * 255, g: o * 255, b: l * 255 };
}
function _t(e, t, n) {
  e = P(e, 255), t = P(t, 255), n = P(n, 255);
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
function lo(e, t, n) {
  e = P(e, 360) * 6, t = P(t, 100), n = P(n, 100);
  var a = Math.floor(e), o = e - a, l = n * (1 - t), s = n * (1 - o * t), r = n * (1 - (1 - o) * t), u = a % 6, c = [n, s, l, l, r, n][u], f = [r, n, n, s, l, l][u], d = [l, l, r, n, n, s][u];
  return { r: c * 255, g: f * 255, b: d * 255 };
}
function wt(e, t, n, a) {
  var o = [
    le(Math.round(e).toString(16)),
    le(Math.round(t).toString(16)),
    le(Math.round(n).toString(16))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function ro(e, t, n, a, o) {
  var l = [
    le(Math.round(e).toString(16)),
    le(Math.round(t).toString(16)),
    le(Math.round(n).toString(16)),
    le(so(a))
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
  var t = { r: 0, g: 0, b: 0 }, n = 1, a = null, o = null, l = null, s = !1, r = !1;
  return typeof e == "string" && (e = po(e)), typeof e == "object" && (Z(e.r) && Z(e.g) && Z(e.b) ? (t = ao(e.r, e.g, e.b), s = !0, r = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Z(e.h) && Z(e.s) && Z(e.v) ? (a = Se(e.s), o = Se(e.v), t = lo(e.h, a, o), s = !0, r = "hsv") : Z(e.h) && Z(e.s) && Z(e.l) && (a = Se(e.s), l = Se(e.l), t = oo(e.h, a, l), s = !0, r = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Lt(n), {
    ok: s,
    format: e.format || r,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var co = "[-\\+]?\\d+%?", fo = "[-\\+]?\\d*\\.\\d+%?", te = "(?:".concat(fo, ")|(?:").concat(co, ")"), je = "[\\s|\\(]+(".concat(te, ")[,|\\s]+(").concat(te, ")[,|\\s]+(").concat(te, ")\\s*\\)?"), Ye = "[\\s|\\(]+(".concat(te, ")[,|\\s]+(").concat(te, ")[,|\\s]+(").concat(te, ")[,|\\s]+(").concat(te, ")\\s*\\)?"), j = {
  CSS_UNIT: new RegExp(te),
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
  var n = j.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = j.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = j.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = j.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = j.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = j.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = j.hex8.exec(e), n ? {
    r: F(n[1]),
    g: F(n[2]),
    b: F(n[3]),
    a: $t(n[4]),
    format: t ? "name" : "hex8"
  } : (n = j.hex6.exec(e), n ? {
    r: F(n[1]),
    g: F(n[2]),
    b: F(n[3]),
    format: t ? "name" : "hex"
  } : (n = j.hex4.exec(e), n ? {
    r: F(n[1] + n[1]),
    g: F(n[2] + n[2]),
    b: F(n[3] + n[3]),
    a: $t(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = j.hex3.exec(e), n ? {
    r: F(n[1] + n[1]),
    g: F(n[2] + n[2]),
    b: F(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Z(e) {
  return Boolean(j.CSS_UNIT.exec(String(e)));
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
      var t = this.toRgb(), n, a, o, l = t.r / 255, s = t.g / 255, r = t.b / 255;
      return l <= 0.03928 ? n = l / 12.92 : n = Math.pow((l + 0.055) / 1.055, 2.4), s <= 0.03928 ? a = s / 12.92 : a = Math.pow((s + 0.055) / 1.055, 2.4), r <= 0.03928 ? o = r / 12.92 : o = Math.pow((r + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * a + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Lt(t), this.roundA = Math.round(100 * this.a) / 100, this;
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
function mo(e) {
  const t = Ft(), n = me("button");
  return _(() => {
    let a = {};
    const o = e.color;
    if (o) {
      const l = new ho(o), s = e.dark ? l.tint(20).toString() : ee(l, 20);
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
          const c = e.dark ? ee(l, 50) : l.tint(50).toString();
          a[n.cssVarBlockName("disabled-bg-color")] = c, a[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, a[n.cssVarBlockName("disabled-border-color")] = c;
        }
      }
    }
    return a;
  });
}
const vo = ["aria-disabled", "disabled", "autofocus", "type"], go = M({
  name: "ElButton"
}), bo = /* @__PURE__ */ M({
  ...go,
  props: tt,
  emits: eo,
  setup(e, { expose: t, emit: n }) {
    const a = e, o = mo(a), l = me("button"), { _ref: s, _size: r, _type: u, _disabled: c, shouldAddSpace: f, handleClick: d } = Xa(a, n);
    return t({
      ref: s,
      size: r,
      type: u,
      disabled: c,
      shouldAddSpace: f
    }), (h, p) => (v(), y("button", {
      ref_key: "_ref",
      ref: s,
      class: H([
        b(l).b(),
        b(l).m(b(u)),
        b(l).m(b(r)),
        b(l).is("disabled", b(c)),
        b(l).is("loading", h.loading),
        b(l).is("plain", h.plain),
        b(l).is("round", h.round),
        b(l).is("circle", h.circle),
        b(l).is("text", h.text),
        b(l).is("link", h.link),
        b(l).is("has-bg", h.bg)
      ]),
      "aria-disabled": b(c) || h.loading,
      disabled: b(c) || h.loading,
      autofocus: h.autofocus,
      type: h.nativeType,
      style: U(b(o)),
      onClick: p[0] || (p[0] = (...i) => b(d) && b(d)(...i))
    }, [
      h.loading ? (v(), y(I, { key: 0 }, [
        h.$slots.loading ? V(h.$slots, "loading", { key: 0 }) : (v(), x(b(Je), {
          key: 1,
          class: H(b(l).is("loading"))
        }, {
          default: k(() => [
            (v(), x(We(h.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : h.icon || h.$slots.icon ? (v(), x(b(Je), { key: 1 }, {
        default: k(() => [
          h.icon ? (v(), x(We(h.icon), { key: 0 })) : V(h.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : L("v-if", !0),
      h.$slots.default ? (v(), y("span", {
        key: 2,
        class: H({ [b(l).em("text", "expand")]: b(f) })
      }, [
        V(h.$slots, "default")
      ], 2)) : L("v-if", !0)
    ], 14, vo));
  }
});
var yo = /* @__PURE__ */ ve(bo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const _o = {
  size: tt.size,
  type: tt.type
}, wo = M({
  name: "ElButtonGroup"
}), $o = /* @__PURE__ */ M({
  ...wo,
  props: _o,
  setup(e) {
    const t = e;
    at(Pt, Et({
      size: Ae(t, "size"),
      type: Ae(t, "type")
    }));
    const n = me("button");
    return (a, o) => (v(), y("div", {
      class: H(`${b(n).b("group")}`)
    }, [
      V(a.$slots, "default")
    ], 2));
  }
});
var Kt = /* @__PURE__ */ ve($o, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const ko = Fe(yo, {
  ButtonGroup: Kt
});
Sa(Kt);
function So(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const Co = {}, Eo = he({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: oe(Object)
  },
  size: Rt,
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
}), Vo = M({
  name: "ElConfigProvider",
  props: Eo,
  setup(e, { slots: t }) {
    W(() => e.message, (a) => {
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
const To = M({
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
  const s = C("el-pagination"), r = C("el-config-provider");
  return e.showPage ? (v(), y("div", No, [
    T(r, { locale: e.locale }, {
      default: k(() => [
        T(s, {
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
  ])) : L("", !0);
}
const de = /* @__PURE__ */ D(To, [["render", Bo], ["__scopeId", "data-v-77c509db"]]);
de.install = function(e) {
  e.component(de.name, de);
};
const Mo = M({
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
    const n = _({
      get: () => e.tableData,
      set: (s) => t("update:tableData", s)
    }), a = _({
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
}), xo = { key: 2 };
function zo(e, t, n, a, o, l) {
  const s = C("el-table-column"), r = C("el-table"), u = C("pagination");
  return v(), y(I, null, [
    T(r, A({
      data: e.tableDataList,
      style: { width: "100%" },
      class: "mt20",
      "header-cell-style": e.headerCellStyle
    }, e.$attrs, {
      "empty-text": e.emptyText,
      onSortChange: e.sortChange
    }), fe({
      default: k(() => [
        (v(!0), y(I, null, G(e.tableColumn, (c) => (v(), x(s, {
          key: c.prop,
          label: c.label,
          name: c.name,
          width: c.width,
          "min-width": c.minWidth,
          fixed: c.fixed,
          sortable: c.sortable,
          type: c.type,
          "show-overflow-tooltip": e.showOverflowTooltip
        }, fe({
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
            }) : (v(), y("span", xo, K(f.row[c.prop] ?? "-"), 1))
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
const Ho = M({
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
    const n = w(0), a = w(0), o = w(null), l = w(10), s = () => {
      var m;
      return ((m = document.querySelector(".list-item")) == null ? void 0 : m.offsetHeight) ?? 10;
    }, r = () => {
      const { clientHeight: m = 100 } = o.value.wrapRef || {};
      return Math.ceil(m / s()) + n.value;
    }, u = w(100);
    $e(() => {
      l.value = Number(r()) || 10, u.value = e.data.length * s();
    });
    const c = (m) => Math.floor(m / s()), f = (m) => Math.ceil(m * s()), d = (m) => m >= n.value && m <= l.value, h = _(() => e.data.filter((m, S) => d(S)));
    return W(() => e.data, (m) => {
      m.length || (n.value = 0, a.value = 0), e.data.forEach((S, B) => {
        S.rowIndex = B;
      }), u.value = e.data.length * s();
    }), {
      startIndex: n,
      endIndex: l,
      startOffset: a,
      viewport: o,
      onScroll: (m) => {
        const { scrollTop: S, clientHeight: B } = o.value.wrapRef;
        n.value = c(S), a.value = f(n.value), l.value = r();
        const Y = Math.abs(u.value - B - S);
        t("scroll", { distance: Y, ...m });
      },
      showViewRanges: d,
      containHeight: u,
      listRanges: h,
      rowClick: (m, S) => {
        t("row-click", m, S);
      },
      rowClassHandle: (m, S) => typeof e.rowClassName == "function" ? e.rowClassName({ row: m, rowIndex: S }) : e.rowClassName
    };
  }
}), Po = {
  class: "virtual-list",
  "data-testid": "virtual-list"
}, Do = ["onClick"];
function Oo(e, t, n, a, o, l) {
  const s = C("el-scrollbar");
  return v(), x(s, A({
    height: e.height,
    ref: "viewport"
  }, e.$attrs, { onScroll: e.onScroll }), {
    default: k(() => [
      E("div", Po, [
        E("div", {
          class: "list-contain",
          style: U({ height: `${e.containHeight}px` })
        }, null, 4),
        E("div", {
          class: "list-content",
          style: U({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          (v(!0), y(I, null, G(e.listRanges, (r, u) => (v(), y("div", {
            key: u,
            class: H(["list-item", e.rowClassHandle(r, r.rowIndex)]),
            style: U(e.rowStyle),
            onClick: (c) => e.rowClick(r, r.rowIndex)
          }, [
            V(e.$slots, "default", {
              row: r,
              index: r.rowIndex
            }, () => [
              J(K(r.name), 1)
            ], !0)
          ], 14, Do))), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["height", "onScroll"]);
}
const ye = /* @__PURE__ */ D(Ho, [["render", Oo], ["__scopeId", "data-v-4e39706c"]]);
ye.install = function(e) {
  e.component(ye.name, ye);
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
const Io = M({
  name: "KTableV2",
  components: { virtualList: ye },
  props: Ao,
  emits: ["sort-change"],
  setup(e, { emit: t }) {
    const n = computed(() => e.tableColumn.map((h, p) => ({ ...h, keyId: p }))), a = w(null), o = (h) => {
      var B, Y, q, Q;
      let p = {};
      const {
        align: i,
        width: g,
        fixed: m,
        minWidth: S
      } = h;
      if (i && (p["text-center"] = `${i}`), S && (p["min-width"] = `${S}`), g && (p = {
        ...p,
        width: `${g}`,
        flex: "inherit",
        "flex-shrink": 0
      }), m) {
        const N = e.tableColumn.findIndex((z) => z.prop === h.prop), $ = e.tableColumn.length;
        if (p = {
          ...p,
          position: "sticky",
          background: "#ffffff",
          "z-index": 5
        }, m === "left") {
          const z = (B = e.tableColumn.filter((O) => O.fixed === "left")) == null ? void 0 : B.length;
          let R = 0;
          N > 0 && N < $ - 1 && z > 1 && (R = (Y = a.value) == null ? void 0 : Y.at(N - 1).clientWidth), p.left = `${R}px`;
          let X = 0;
          e.tableColumn.forEach((O, ue) => {
            O.fixed === "left" && (X = ue);
          }), X === N && (p["box-shadow"] = "3px 0px 4px #b0a8a836");
        } else {
          const z = (q = e.tableColumn.filter((O) => O.fixed && O.fixed !== "left")) == null ? void 0 : q.length;
          let R = 0;
          N < $ - 1 && z > 1 && (R = (Q = a.value) == null ? void 0 : Q.at(N + 1).clientWidth), e.tableColumn.findIndex((O) => O.fixed && O.fixed !== "left") === N && (p["box-shadow"] = "-3px 0 4px #b0a8a836"), p.right = `${R}px`;
        }
      }
      return p;
    }, l = w(null), s = ({ scrollLeft: h }) => {
      l.value.scrollLeft = `${h}`;
    }, r = w(null), u = w({}), c = (h, p) => {
      u.value = p, r.value = r.value === h ? null : h, t("sort-change", { column: p, sortType: r.value });
    }, f = w(null), d = (h) => {
      var p;
      return (p = f.value) == null ? void 0 : p.viewport.setScrollTop(h);
    };
    return {
      ...on(e),
      columnList: n,
      headerClass: o,
      tableHeader: l,
      scrollHandle: s,
      headerColmn: a,
      sortType: r,
      clickSortCaret: c,
      selectedRow: u,
      virtualRef: f,
      setScrollTop: d
    };
  }
}), Ro = { class: "table-v2 el-table flex-column" }, Fo = {
  class: "table-header overflow",
  ref: "tableHeader"
}, Lo = { class: "flex table-border-bottom header-content" }, Ko = {
  key: 0,
  class: "table-header-sort flex-column flex-center"
}, jo = { class: "sort-wrapper" }, Yo = ["onClick"], Uo = ["onClick"], Wo = { class: "flex table-body" };
function Go(e, t, n, a, o, l) {
  const s = C("virtualList");
  return v(), y("div", Ro, [
    E("div", Fo, [
      E("div", Lo, [
        (v(!0), y(I, null, G(e.tableColumn, (r, u) => (v(), y("div", {
          key: u,
          class: "header-column cell flex-align-center",
          ref_for: !0,
          ref: "headerColmn",
          style: U([e.headerClass(r), e.headerCellStyle])
        }, [
          V(e.$slots, (r == null ? void 0 : r.header) ?? "default", {}, () => [
            J(K(r.label), 1)
          ], !0),
          r.sortable ? (v(), y("div", Ko, [
            E("span", jo, [
              E("i", {
                class: H(["sort-caret ascending", { "bottom-caret": e.sortType === "ascending" && e.selectedRow.prop == r.prop }]),
                onClick: (c) => e.clickSortCaret("ascending", r)
              }, null, 10, Yo),
              E("i", {
                class: H(["sort-caret descending", { "top-caret": e.sortType === "descending" && e.selectedRow.prop == r.prop }]),
                onClick: (c) => e.clickSortCaret("descending", r)
              }, null, 10, Uo)
            ])
          ])) : L("", !0)
        ], 4))), 128))
      ])
    ], 512),
    T(s, A({
      data: e.tableData,
      always: "",
      ref: "virtualRef",
      "row-class-name": e.rowClassName
    }, e.$attrs, {
      height: e.height,
      onScroll: e.scrollHandle
    }), {
      default: k(({ row: r, index: u }) => [
        V(e.$slots, "content", {}, () => [
          E("div", Wo, [
            (v(!0), y(I, null, G(e.columnList, (c) => (v(), y("div", {
              key: c.keyId,
              class: "cell table-row table-border-bottom flex-align-center",
              ref_for: !0,
              ref: "bodyCell",
              style: U(e.headerClass(c))
            }, [
              E("div", {
                class: H({ "text-overflow": c.showOverflowTooltip ?? !0 })
              }, [
                V(e.$slots, (c == null ? void 0 : c.custom) ?? "default", {
                  row: r,
                  index: u
                }, () => [
                  J(K(r[c.prop]), 1)
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
const Te = /* @__PURE__ */ D(Io, [["render", Go], ["__scopeId", "data-v-05ed3773"]]);
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
}, Qo = M({
  name: "KBatchTable",
  components: { pagination: de },
  props: qo,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { emit: t }) {
    const n = w(null), a = () => n.value.clearSelection(), o = (i) => {
      i ? e.tableData.forEach((g) => {
        i.forEach((m) => {
          p(g) === p(m) && re(() => n.value && n.value.toggleRowSelection(g));
        });
      }) : (l.value = [], n.value.clearSelection());
    }, l = _({
      get: () => e.modelValue,
      set: (i) => t("update:modelValue", i)
    });
    W(() => e.modelValue, (i) => {
      !i.length && n.value && n.value.clearSelection();
    });
    const s = () => {
      setTimeout(() => {
        e.selectList.length && (e.tableData.forEach((i) => {
          i[e.checkKey] = i[e.checkKey] ?? 1;
        }), e.selectList.forEach((i) => {
          e.tableData.forEach((g) => {
            p(i) === p(g) && (g[e.checkKey] = 0);
          });
        }), o(l.value));
      }, 200);
    };
    W(() => e.tableData, (i) => {
      re(() => {
        i.length && s(), i.length && o(l.value);
      });
    }, { immediate: !0 });
    const r = (i, g) => {
      i.some((S) => p(S) === p(g)) ? l.value = [...l.value, g] : l.value = l.value.filter((S) => p(S) !== p(g));
    }, u = (i) => {
      if (l.value.length)
        if (i.length) {
          const g = i.filter((m) => l.value.every((S) => p(S) !== p(m)));
          l.value = [...l.value, ...g];
        } else
          l.value = l.value.filter((g) => e.tableData.every((m) => p(g) !== p(m)));
      else
        l.value = i;
    }, c = (i) => {
      if (!f(i))
        return;
      const g = l.value.some((m) => p(m) === p(i));
      o([i]), g ? l.value = l.value.filter((m) => p(m) !== p(i)) : l.value = [...l.value, i], t("row-click", i);
    }, f = (i) => i[e.checkKey] ?? !i[e.checkKey], d = _({
      get: () => e.page,
      set: (i) => t("update:page", i)
    }), h = (i) => {
      t("current-change", i);
    }, p = (i) => i[e.keyId];
    return {
      multipleTable: n,
      handleSelect: r,
      selectAll: u,
      handleRowClick: c,
      checkSelection: f,
      toggleSelection: o,
      currentPage: d,
      changePage: h,
      clear: a
    };
  }
}), Xo = { key: 2 }, Zo = { class: "mt20 flex-between" }, Jo = { class: "flex1" };
function el(e, t, n, a, o, l) {
  const s = C("el-table-column"), r = C("el-table"), u = C("pagination");
  return v(), y(I, null, [
    T(r, A({ ref: "multipleTable" }, e.$attrs, {
      "empty-text": "暂无数据",
      data: e.tableData,
      "header-cell-style": e.headerCellStyle,
      onSelect: e.handleSelect,
      onSelectAll: e.selectAll,
      onRowClick: e.handleRowClick
    }), fe({
      default: k(() => [
        T(s, {
          type: "selection",
          width: "55",
          selectable: e.checkSelection
        }, null, 8, ["selectable"]),
        (v(!0), y(I, null, G(e.tableColumn, (c) => (v(), x(s, {
          label: c.label,
          key: c.prop,
          width: c.width,
          fixed: c.fixed,
          "min-width": c.minWidth,
          "show-overflow-tooltip": ""
        }, fe({
          default: k((f) => [
            e.$slots.default ? V(e.$slots, "default", {
              key: 0,
              item: f.row,
              row: f.row,
              column: c,
              index: f.$index
            }) : L("", !0),
            c.custom && f.$index >= 0 ? V(e.$slots, c.custom, {
              key: 1,
              item: f.row,
              column: c,
              row: f.row,
              index: f.$index
            }) : (v(), y("span", Xo, K(f.row[c.prop] ?? "-"), 1))
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
        e.$slots.footer ? V(e.$slots, "footer", { key: 0 }) : L("", !0)
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
const _e = /* @__PURE__ */ D(Qo, [["render", el]]);
_e.install = function(e) {
  e.component(_e.name, _e);
};
const tl = M({
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
      set: (r) => t("update:modelValue", r)
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
  const s = C("el-button"), r = C("el-dialog");
  return v(), x(r, A({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": t[1] || (t[1] = (u) => e.dialogVisible = u),
    class: e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), fe({
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
            T(s, {
              size: "large",
              onClick: t[0] || (t[0] = (u) => e.dialogVisible = !1)
            }, {
              default: k(() => [
                J("取 消")
              ]),
              _: 1
            }),
            T(s, {
              size: "large",
              type: "primary",
              onClick: e.confirmHandler
            }, {
              default: k(() => [
                J("确 定")
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
const ll = M({
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
}), rl = { class: "crumb-header flex-between" }, sl = { class: "crumb-contain" }, ul = ["onClick"];
function il(e, t, n, a, o, l) {
  const s = C("el-space");
  return v(), y("div", rl, [
    E("div", sl, [
      T(s, { spacer: "/" }, {
        default: k(() => [
          (v(!0), y(I, null, G(e.list, (r, u) => (v(), y("span", {
            key: u,
            class: H({ "crumb-item": u !== e.list.length - 1 }),
            onClick: (c) => e.clickHandle(r, u)
          }, K(r.title), 11, ul))), 128))
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
const cl = M({
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
    const n = pe(), a = n.appContext.config.globalProperties.$route, o = n.appContext.config.globalProperties.$router, l = _(() => (a == null ? void 0 : a.params.type) || (a == null ? void 0 : a.name)), s = w(l.value);
    Re(() => {
      s.value = e.modelValue || l.value, t("update:modelValue", s.value);
    });
    const r = _(() => a.query);
    return { activeName: s, handleClick: (c) => {
      if (e.isRouter) {
        const f = { path: `${c.paneName}`, query: r.value };
        e.replace ? o.replace(f) : o.push(f);
      }
      t("tab-click", c.paneName), t("update:modelValue", c.paneName);
    } };
  }
}), dl = { class: "tabs-right ml10" };
function fl(e, t, n, a, o, l) {
  const s = C("el-tab-pane"), r = C("el-tabs");
  return v(), y("div", {
    class: H(["k-tabs", { "style-card": !e.type, "style-padding": e.isPadding && !e.type }])
  }, [
    T(r, A({
      class: "flex-tabs",
      type: e.type
    }, e.$attrs, {
      modelValue: e.activeName,
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.activeName = u),
      onTabClick: e.handleClick
    }), {
      default: k(() => [
        (v(!0), y(I, null, G(e.tabsList, (u) => (v(), x(s, {
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
const pl = M({
  name: "KPicker",
  components: { batchTable: _e, Delete: Nn },
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
    const a = w(null), o = () => a.value.toggleSelection(), l = (f) => a.value.handleRowClick(f), s = w(1);
    return {
      multipleSelection: n,
      batchTableRef: a,
      currentPage: s,
      emptyHandler: o,
      resetData: () => {
        s.value = 1, o();
      },
      deleteHandler: l,
      getName: (f) => f[e.keyName],
      getId: (f) => f[e.keyId]
    };
  }
}), hl = { class: "k-picker" }, ml = { class: "col-left" }, vl = { class: "col-right" }, gl = { class: "selete-header flex-between" }, bl = { class: "selete-content" }, yl = { class: "flex flex1 mr20 overflow" }, _l = { class: "text-overflow" };
function wl(e, t, n, a, o, l) {
  const s = C("batchTable"), r = C("el-col"), u = C("delete"), c = C("el-icon"), f = C("el-button"), d = C("el-tooltip"), h = C("el-input-number"), p = C("el-row");
  return v(), y("div", hl, [
    V(e.$slots, "top", {}, void 0, !0),
    T(p, { gutter: 10 }, {
      default: k(() => [
        T(r, { span: 15 }, {
          default: k(() => [
            E("div", ml, [
              T(s, {
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
                default: k(({ row: i, column: g, index: m }) => [
                  g.custom && m >= 0 ? V(e.$slots, g.custom, {
                    key: 0,
                    row: i,
                    index: m
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
            E("div", vl, [
              E("div", gl, [
                E("span", null, [
                  J("已选择"),
                  E("span", null, "(" + K(e.multipleSelection.length) + ")", 1)
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
                    J(" 清空 ")
                  ]),
                  _: 1
                }, 8, ["disabled", "onClick"])
              ]),
              E("div", bl, [
                (v(!0), y(I, null, G(e.multipleSelection, (i) => (v(), y("div", {
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
                        E("span", _l, K(e.getName(i)), 1)
                      ]),
                      _: 2
                    }, 1032, ["content"])
                  ]),
                  e.showCount ? (v(), x(h, {
                    key: 0,
                    modelValue: i.num,
                    "onUpdate:modelValue": (g) => i.num = g,
                    min: 1,
                    class: "width-100 flex-shrink mr10"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : L("", !0),
                  T(f, {
                    text: "",
                    onClick: (g) => e.deleteHandler(i)
                  }, {
                    default: k(() => [
                      J(" 删除 ")
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
const $l = M({
  name: "KTooltip",
  props: {
    placement: { type: String, default: "top" },
    showIcon: { type: Boolean, default: !1 },
    overflow: { type: Boolean, default: !1 }
  },
  components: { Warning: Jn }
});
function kl(e, t, n, a, o, l) {
  const s = C("warning"), r = C("el-icon"), u = C("el-tooltip");
  return v(), y("div", {
    class: H(["flex flex1", { "text-overflow": e.overflow }])
  }, [
    T(u, A(e.$attrs, { placement: e.placement }), {
      content: k(() => [
        V(e.$slots, "content", {}, void 0, !0)
      ]),
      default: k(() => [
        E("div", {
          class: H(["flex-center", { "text-overflow": e.overflow }])
        }, [
          V(e.$slots, "default", {}, void 0, !0),
          e.showIcon ? (v(), x(r, {
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
const ze = /* @__PURE__ */ D($l, [["render", kl], ["__scopeId", "data-v-d468c200"]]);
ze.install = function(e) {
  e.component(ze.name, ze);
};
const Sl = {
  __name: "main",
  setup(e) {
    return (t, n) => (v(), x(b(jt), { locale: b(Ut) }, {
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
      const d = new Date(), h = new Date();
      return d.setTime(d.getTime() - 3600 * 1e3 * 24 * f), n.type === "date" ? d : [d, h];
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
    ], s = [new Date(2e3, 1, 1, 0, 0, 0), new Date(2e3, 2, 1, 23, 59, 59)], r = _({
      get: () => n.modelValue,
      set: (f) => t("update:modelValue", f)
    }), u = (f) => f.getTime() > Date.now(), c = (f) => t("change", f);
    return (f, d) => {
      const h = C("el-date-picker");
      return v(), x(h, {
        modelValue: b(r),
        "onUpdate:modelValue": d[0] || (d[0] = (p) => Ge(r) ? r.value = p : null),
        type: e.type,
        "unlink-panels": "",
        "range-separator": "至",
        "start-placeholder": "开始日期",
        "end-placeholder": "结束日期",
        shortcuts: l,
        format: b(a),
        "value-format": "YYYY-MM-DD HH:mm:ss",
        "disabled-date": u,
        "default-time": s,
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
    const n = e, a = w(0), o = w([
      { value: 0, label: "日" },
      { value: 1, label: "周" },
      { value: 2, label: "月" },
      { value: 3, label: "年" }
    ]), l = _({
      get: () => n.modelValue,
      set: (p) => t("update:modelValue", p)
    }), s = (p) => p.getTime() > Date.now(), r = _(() => ({
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
      const { label: p } = o.value.filter((i) => i.value === a.value)[0];
      return `选择${p}`;
    }), f = w("");
    Re(() => {
      if (Array.isArray(l.value)) {
        const [p, i] = l.value;
        f.value = [p, i];
      }
    });
    const d = (p) => {
      if (p) {
        if (Array.isArray(l.value)) {
          const [i] = l.value;
          l.value = i;
        }
      } else
        n.daterange && (l.value = f.value);
      h();
    }, h = () => {
      t("change", { type: a.value, time: l.value });
    };
    return (p, i) => {
      const g = C("el-option"), m = C("el-select"), S = C("el-date-picker");
      return v(), y("div", Cl, [
        T(m, {
          modelValue: a.value,
          "onUpdate:modelValue": i[0] || (i[0] = (B) => a.value = B),
          class: "width-100 mr10",
          onChange: d
        }, {
          default: k(() => [
            (v(!0), y(I, null, G(o.value, (B) => (v(), x(g, {
              key: B.value,
              label: B.label,
              value: B.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        E("div", null, [
          e.daterange && !a.value ? (v(), x(Wt, A({
            key: 0,
            modelValue: b(l),
            "onUpdate:modelValue": i[1] || (i[1] = (B) => Ge(l) ? l.value = B : null)
          }, p.$props, { onChange: h }), null, 16, ["modelValue"])) : (v(), x(S, {
            key: 1,
            modelValue: b(l),
            "onUpdate:modelValue": i[2] || (i[2] = (B) => Ge(l) ? l.value = B : null),
            type: b(u),
            format: b(r),
            "value-format": "YYYY-MM-DD HH:mm:ss",
            placeholder: b(c),
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
}, Vl = M({
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
  const s = C("selectType"), r = C("datePicker"), u = C("config-provider");
  return v(), x(u, null, {
    default: k(() => [
      e.selectType ? (v(), x(s, it(A({ key: 0 }, e.$attrs)), null, 16)) : (v(), x(r, it(A({ key: 1 }, e.$attrs)), null, 16))
    ]),
    _: 1
  });
}
const He = /* @__PURE__ */ D(Vl, [["render", Tl]]);
He.install = function(e) {
  e.component(He.name, He);
};
const ut = M({
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
      set: (h) => t("update:modelValue", h)
    }), l = () => {
      re(() => t("change", o.value));
    }, s = (h) => {
      if (e.maxlength && o.value.length >= Number(e.maxlength))
        return;
      const p = o.value.indexOf("."), i = o.value.split(".");
      i.length === 2 && (h === "." || i[1].length >= e.precision) || (o.value = `${p === 0 ? 0 : ""}${o.value}${h}`, !e.startZero && o.value.slice(0, 1) === "0" && (o.value = o.value.slice(1) + h), l());
    }, r = (h) => {
      h === "delete" ? o.value = o.value.slice(0, o.value.length - 1) : h === "clear" && (o.value = "", t("clear")), h === "confirm" ? t("confirm") : l();
    }, u = ({ key: h, name: p }) => {
      h ? r(h) : s(p);
    }, c = _(() => `${Number(4 * e.width + 20)}px`), f = _(() => `${e.width}px`), d = _(() => e.decimalPoint ? 3 : 4);
    return {
      keyboardList: a,
      clickHandleBtn: u,
      clickBtn: s,
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
  const s = C("el-button");
  return v(), y("div", Bl, [
    E("ul", Ml, [
      (v(!0), y(I, null, G(e.keyboardList, (r, u) => (v(), y("li", {
        key: u,
        class: H(r.class)
      }, [
        T(s, {
          type: r.type,
          color: e.color,
          onClick: (c) => e.clickHandleBtn(r)
        }, {
          default: k(() => [
            J(K(r.name), 1)
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
const zl = M({
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
      set: (r) => t("update:modelValue", r)
    }), a = (r) => e.decimals ? Number(r).toFixed(e.decimals) : r, o = w(null), l = (r = !0) => {
      const u = o.value;
      if (!u)
        return;
      const c = +u.innerText, f = +n.value / 200, d = r && c < Number(n.value) || !r && c > Number(n.value);
      r && c > e.end || c < e.start || (d ? s(u, r ? c + f : c - f, r) : u.interText = a(n.value));
    }, s = (r, u, c = !0) => {
      const f = u < e.start ? e.start : `${e.decimals ? u : Math.floor(u)}`, d = u > e.end ? e.end : `${e.decimals ? u : Math.ceil(u)}`;
      r.innerText = a(c ? d : f);
      const h = setTimeout(() => {
        clearTimeout(h), c ? l() : l(!1);
      }, 5);
    };
    return $e(() => {
      o.value && e.autoinit && l();
    }), Vt(() => {
      if (e.autoinit) {
        const r = +o.value.innerText;
        l(r < Number(n.value));
      }
    }), { textValue: n, spanText: o, setDeimals: a };
  }
}), Hl = { class: "auto-counter" }, Pl = { class: "mr5" }, Dl = { class: "ml5" };
function Ol(e, t, n, a, o, l) {
  return v(), y("div", Hl, [
    E("span", Pl, K(e.prefix), 1),
    E("span", {
      class: "span-text",
      ref: "spanText"
    }, K(e.autoinit ? e.setDeimals(e.start) : e.setDeimals(e.textValue)), 513),
    E("span", Dl, K(e.suffix), 1)
  ]);
}
const De = /* @__PURE__ */ D(zl, [["render", Ol]]);
De.install = function(e) {
  e.component(De.name, De);
};
const Al = M({
  name: "KCollapseButton",
  components: { ElIcon: Je, CaretLeft: gn, CaretRight: kn },
  props: {
    style: { type: Object, default: () => ({}) },
    position: { type: String, default: "right" }
  },
  emits: ["click"],
  setup(e, { emit: t, slots: n }) {
    const a = w(!1), o = w(null);
    $e(() => {
      const { parentNode: r } = o.value;
      r.style.position = "relative", r.style.overflow = "initial";
    });
    const l = _(() => {
      const { clientWidth: r, clientHeight: u } = o.value || {}, {
        top: c,
        right: f,
        width: d,
        height: h,
        left: p,
        bottom: i
      } = e.style, g = {
        right: {
          top: c ?? "50%",
          right: f ?? `-${r}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: c ? "0px" : `-${Math.ceil(u / 2)}px`
        },
        left: {
          top: c ?? "50%",
          left: p ?? `-${r}px`,
          borderRadius: "5px 0 0 5px",
          marginTop: c ? "0px" : `-${Math.ceil(u / 2)}px`
        },
        top: {
          left: p ?? "50%",
          marginLeft: p ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(r / 2)}px` : "0px",
          top: c ?? (n == null ? void 0 : n.default) ? `-${u}px` : `-${Math.ceil(u / 2 + r / 2)}px`,
          borderRadius: n != null && n.default ? "5px 5px 0 0" : "0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(-90deg)"
        },
        bottom: {
          left: p ?? "50%",
          bottom: i ?? (n == null ? void 0 : n.default) ? `-${u}px` : `-${Math.ceil(u / 2 + r / 2)}px`,
          marginLeft: p ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(r / 2)}px` : "0px",
          borderRadius: n != null && n.default ? "0 0 5px 5px" : " 0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(90deg)"
        }
      };
      return {
        width: d ?? (n == null ? void 0 : n.default) ? "" : "10px",
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
function Il(e, t, n, a, o, l) {
  const s = C("CaretRight"), r = C("CaretLeft"), u = C("el-icon");
  return v(), y("div", {
    class: "collapse-button flex-center pointer",
    style: U(e.collapseStyle),
    ref: "collapse",
    onClick: t[0] || (t[0] = (...c) => e.clickHandle && e.clickHandle(...c))
  }, [
    V(e.$slots, "default", {}, () => [
      T(u, {
        size: 18,
        color: "#999999"
      }, {
        default: k(() => [
          e.isCollapse ? (v(), x(s, { key: 0 })) : (v(), x(r, { key: 1 }))
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
  KInput: be,
  KInputNumber: Ee,
  KTable: Ve,
  KTableV2: Te,
  KPage: de,
  KBatchTable: _e,
  KDialog: Ne,
  KBreadcrumb: Be,
  KTabs: Me,
  KPicker: xe,
  KTooltip: ze,
  KDatePicker: He,
  KNumberKeyboard: Pe,
  KVirtualList: ye,
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
  }), Object.keys(ge).forEach((t) => {
    e.directive(t, ge[t]);
  });
};
export {
  De as KAutoCounter,
  _e as KBatchTable,
  Be as KBreadcrumb,
  Ce as KButton,
  Oe as KCollapseButton,
  He as KDatePicker,
  Ne as KDialog,
  be as KInput,
  Ee as KInputNumber,
  Pe as KNumberKeyboard,
  de as KPage,
  xe as KPicker,
  Ve as KTable,
  Te as KTableV2,
  Me as KTabs,
  ze as KTooltip,
  Ue as KUI,
  ye as KVirtualList,
  ge as directives
};
