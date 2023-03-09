import { defineComponent as N, ref as k, computed as $, resolveComponent as S, openBlock as v, createBlock as M, mergeProps as I, withModifiers as Gt, withCtx as w, renderSlot as E, createElementBlock as _, createCommentVNode as R, withKeys as Ct, createSlots as ie, createElementVNode as C, watchEffect as Re, watch as U, nextTick as oe, normalizeClass as x, createVNode as T, unref as y, getCurrentScope as qt, onScopeDispose as Qt, getCurrentInstance as ce, onMounted as _e, warn as Xt, provide as at, inject as J, onBeforeUnmount as Zt, toRef as Oe, Transition as Jt, withDirectives as en, normalizeStyle as Y, vShow as tn, Fragment as A, reactive as Et, onUpdated as Vt, resolveDynamicComponent as We, useSlots as nn, Text as an, renderList as W, toDisplayString as K, createTextVNode as q, toRefs as on, isRef as Ge, normalizeProps as it, useCssVars as ln } from "vue";
const me = {
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
   * focus：输入框焦点下是否可用 dialog：是否是弹框可用 any: 监听所有键值
   */
  keyboard: {
    mounted: (e, t) => {
      let n = 0;
      e.handler = function(a) {
        const o = Date.now(), l = /^[a-zA-Z]{2,}/.test(a.key) ? a.key : a.key.toLocaleUpperCase(), { buttonKey: r, isCombination: s = 0 } = t.value || {}, u = document.contains(e), c = a.target.tagName === "TEXTAREA" || a.target.tagName === "INPUT";
        if (!u) {
          document.removeEventListener("keydown", e.handler);
          return;
        }
        const { dialog: d, focus: f, any: m } = t.modifiers;
        if (m && t.arg) {
          t.arg(a);
          return;
        }
        const h = o - n > 30, i = document.querySelector(".el-popup-parent--hidden") || document.querySelector(".is-message-box");
        if (n = o, i && !d)
          return;
        const p = a.ctrlKey || a.metaKey, g = s === +p && r === l;
        (!c || f || s) && g && h && t.arg && t.arg(a);
      }, document.addEventListener("keydown", e.handler);
    },
    updated(e) {
      document.addEventListener("keydown", e.handler);
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
        const { delay: n = 800 } = t.value || {};
        if (!document.contains(e)) {
          document.removeEventListener("click", e.handler);
          return;
        }
        e.classList.add("is-disabled"), e.disabled = !0;
        const { once: o } = t.modifiers;
        o || (e.timer = setTimeout(() => {
          e.classList.remove("is-disabled"), e.disabled = !1, clearTimeout(e.timer);
        }, n));
      }, document.addEventListener("click", e.handler);
    },
    updated(e) {
      document.addEventListener("click", e.handler);
    },
    unmounted: (e) => {
      document.removeEventListener("click", e.handler);
    }
  }
};
me.install = function(e) {
  Object.keys(me).forEach((t) => {
    e.directive(t, me[t]);
  });
};
const P = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, rn = N({
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
    const a = k(!0), o = k(null), l = () => {
      a.value && (a.value = !1, t("click")), r();
    }, r = () => {
      clearTimeout(o.value), o.value = setTimeout(() => {
        a.value = !0;
      }, 800);
    }, s = $(() => {
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
  const r = S("el-button");
  return v(), M(r, I({
    disabled: !e.buttonStatus || e.disabled,
    style: e.buttonStyle,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: Gt(e.onclick, ["stop"])
  }), {
    default: w(() => [
      E(e.$slots, "default"),
      e.iconLock ? (v(), _("i", sn)) : R("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "style", "click-state", "onClick"]);
}
const Ce = /* @__PURE__ */ P(rn, [["render", un]]);
Ce.install = function(e) {
  e.component(Ce.name, Ce);
};
const cn = N({
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
    const a = k(null), o = k(!0), l = $({
      get() {
        return e.modelValue;
      },
      set(d) {
        r(d);
      }
    }), r = (d) => {
      let f = d;
      if (e.type === "number") {
        if (f = f.replace(/[^\d.]/g, ""), f = f.replace(/^\./g, ""), f = f.replace(/\.{2,}/g, "."), f = f.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), f.indexOf(".") < 0 && f !== "" && f.substr(0, 1) === "0" && f.length === 2 && (f = f.substr(1, f.length)), f !== "")
          if (f.indexOf(".") > 0) {
            if (e.point) {
              const m = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
              f = f.match(m)[0] || null;
            }
          } else
            f === "." && (f = "");
      } else
        e.type === "integer" ? f = f.replace(/[^\d]/g, "") : e.type === "intText" && (f = f.replace(/[^\w]/g, ""));
      n.max !== void 0 && f && Number(f) > Number(n.max) && (f = n.max), n.min !== void 0 && f && Number(f) < Number(n.min) && (f = n.min), t("update:modelValue", f);
    }, s = () => {
      o.value && (o.value = !1, l.value && t("enter")), c();
    }, u = (d) => {
      t("change", d);
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
  const r = S("el-input");
  return v(), M(r, I({
    modelValue: e.inputValue,
    "onUpdate:modelValue": t[0] || (t[0] = (s) => e.inputValue = s),
    modelModifiers: { trim: !0 }
  }, e.$attrs, {
    onKeyup: Ct(e.searchContent, ["enter"]),
    onChange: e.changeValue
  }), ie({ _: 2 }, [
    e.$slots.append ? {
      name: "append",
      fn: w(() => [
        E(e.$slots, "append")
      ]),
      key: "0"
    } : void 0,
    e.$slots.prepend ? {
      name: "prepend",
      fn: w(() => [
        E(e.$slots, "prepend")
      ]),
      key: "1"
    } : void 0,
    e.$slots.prefix ? {
      name: "prefix",
      fn: w(() => [
        E(e.$slots, "prefix")
      ]),
      key: "2"
    } : void 0,
    e.$slots.suffix ? {
      name: "suffix",
      fn: w(() => [
        E(e.$slots, "suffix")
      ]),
      key: "3"
    } : void 0
  ]), 1040, ["modelValue", "onKeyup", "onChange"]);
}
const ve = /* @__PURE__ */ P(cn, [["render", dn]]);
ve.install = function(e) {
  e.component(ve.name, ve);
};
/*! Element Plus Icons Vue v2.0.10 */
var le = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [a, o] of t)
    n[a] = o;
  return n;
}, fn = {
  name: "CaretLeft"
}, pn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hn = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M672 192 288 511.936 672 832z"
}, null, -1), mn = [
  hn
];
function vn(e, t, n, a, o, l) {
  return v(), _("svg", pn, mn);
}
var gn = /* @__PURE__ */ le(fn, [["render", vn], ["__file", "caret-left.vue"]]), bn = {
  name: "CaretRight"
}, yn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _n = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null, -1), $n = [
  _n
];
function wn(e, t, n, a, o, l) {
  return v(), _("svg", yn, $n);
}
var kn = /* @__PURE__ */ le(bn, [["render", wn], ["__file", "caret-right.vue"]]), Sn = {
  name: "Delete"
}, Cn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, En = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1), Vn = [
  En
];
function Tn(e, t, n, a, o, l) {
  return v(), _("svg", Cn, Vn);
}
var Bn = /* @__PURE__ */ le(Sn, [["render", Tn], ["__file", "delete.vue"]]), Nn = {
  name: "Loading"
}, Mn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zn = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), xn = [
  zn
];
function Hn(e, t, n, a, o, l) {
  return v(), _("svg", Mn, xn);
}
var Pn = /* @__PURE__ */ le(Nn, [["render", Hn], ["__file", "loading.vue"]]), Dn = {
  name: "Minus"
}, An = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, On = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1), In = [
  On
];
function Rn(e, t, n, a, o, l) {
  return v(), _("svg", An, In);
}
var Fn = /* @__PURE__ */ le(Dn, [["render", Rn], ["__file", "minus.vue"]]), Ln = {
  name: "Plus"
}, Kn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jn = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), Yn = [
  jn
];
function Un(e, t, n, a, o, l) {
  return v(), _("svg", Kn, Yn);
}
var Wn = /* @__PURE__ */ le(Ln, [["render", Un], ["__file", "plus.vue"]]), Gn = {
  name: "Warning"
}, qn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qn = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), Xn = [
  Qn
];
function Zn(e, t, n, a, o, l) {
  return v(), _("svg", qn, Xn);
}
var Jn = /* @__PURE__ */ le(Gn, [["render", Zn], ["__file", "warning.vue"]]);
const ea = N({
  name: "KInputNumber",
  components: { Minus: Fn, Plus: Wn, KInput: ve },
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
    const n = k(1), a = k(null), o = k(!1), l = $(() => e.modelValue <= e.min), r = $(() => e.modelValue >= e.max), s = $({
      get: () => e.modelValue,
      set: (g) => {
        t("update:modelValue", g);
      }
    }), u = (g) => t("blur", g), c = (g) => t("focus", g), d = (g) => t("enter", g), f = (g) => {
      oe(() => {
        const V = g === "" ? void 0 : Number(g);
        (!Number.isNaN(V) || g === "") && p(V);
      });
    }, m = (g) => {
      o.value = !g, a.value = g;
    }, h = k(-1);
    Re(() => {
      n.value = e.modelValue;
    }), U(() => h.value, (g) => {
      g < 0 && (s.value = e.modelValue, f(n.value));
    }, { immediate: !0 });
    const i = (g) => {
      const V = g === "increase", B = V ? r.value : l.value;
      if (e.disabled || B)
        return;
      const Q = o.value ? 0 : s.value, F = a.value ? n.value : Q, L = V ? F + e.step : F - e.step;
      p(L);
    }, p = (g) => {
      a.value = g;
      let V = g;
      h.value !== V && (h.value = g, V >= e.max && (V = e.max), V <= e.min && (V = e.min), a.value === void 0 && (V = 1), t("update:modelValue", V), t("change", V, h.value), n.value = V);
    };
    return {
      currentValue: n,
      minDisabled: l,
      maxDisabled: r,
      handleBlur: u,
      handleFocus: c,
      handleKeyUp: d,
      handleInputChange: f,
      handleInput: m,
      clickBtnHandle: i
    };
  }
});
function ta(e, t, n, a, o, l) {
  const r = S("minus"), s = S("el-icon"), u = S("plus"), c = S("k-input");
  return v(), _("div", {
    class: x(["el-input-number", { "is-disabled": e.disabled }, { "is-without-controls": !e.controls }, e.size ? "el-input-number--" + e.size : ""])
  }, [
    e.controls ? (v(), _("span", {
      key: 0,
      class: x(["el-input-number__decrease", { "is-disabled": e.minDisabled }]),
      role: "button",
      onClick: t[0] || (t[0] = (d) => e.clickBtnHandle("decrease"))
    }, [
      T(s, { class: "el-input__icon" }, {
        default: w(() => [
          T(r)
        ]),
        _: 1
      })
    ], 2)) : R("", !0),
    e.controls ? (v(), _("span", {
      key: 1,
      class: x(["el-input-number__increase", { "is-disabled": e.maxDisabled }]),
      role: "button",
      onClick: t[1] || (t[1] = (d) => e.clickBtnHandle("increase"))
    }, [
      T(s, { class: "el-input__icon" }, {
        default: w(() => [
          T(u)
        ]),
        _: 1
      })
    ], 2)) : R("", !0),
    T(c, I({
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
      onKeyup: Ct(e.handleKeyUp, ["enter"])
    }), null, 16, ["modelValue", "disabled", "type", "onBlur", "onFocus", "onChange", "onInput", "onKeyup"])
  ], 2);
}
const Ee = /* @__PURE__ */ P(ea, [["render", ta]]);
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
const ot = typeof window < "u", re = (e) => typeof e == "number", aa = (e) => typeof e == "string", oa = () => {
};
ot && ((ct = window == null ? void 0 : window.navigator) != null && ct.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Tt(e) {
  return typeof e == "function" ? e() : y(e);
}
function la(e) {
  return e;
}
function Bt(e) {
  return qt() ? (Qt(e), !0) : !1;
}
function ra(e, t = !0) {
  ce() ? _e(e) : t ? e() : oe(e);
}
function Nt(e) {
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
    l.forEach((d) => d()), l.length = 0;
  }, s = (d, f, m, h) => (d.addEventListener(f, m, h), () => d.removeEventListener(f, m, h)), u = U(() => [Nt(t), Tt(o)], ([d, f]) => {
    r(), d && l.push(...n.flatMap((m) => a.map((h) => s(d, m, h, f))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), r();
  };
  return Bt(c), c;
}
function sa(e, t = !1) {
  const n = k(), a = () => n.value = Boolean(e());
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
  }, c = U(() => Nt(e), (f) => {
    u(), s.value && o && f && (r = new ResizeObserver(t), r.observe(f, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), c();
  };
  return Bt(d), {
    isSupported: s,
    stop: d
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
class zt extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function $a(e, t) {
  throw new zt(`[${e}] ${t}`);
}
function ye(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = lt(e) ? new zt(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const wa = "utils/dom/style";
function Ze(e, t = "px") {
  if (!e)
    return "";
  if (re(e) || _a(e))
    return `${e}${t}`;
  if (lt(e))
    return e;
  ye(wa, "binding value must be a string or number");
}
const xt = "__epPropKey", ne = (e) => e, ka = (e) => rt(e) && !!e[xt], Ht = (e, t) => {
  if (!rt(e) || ka(e))
    return e;
  const { values: n, required: a, default: o, type: l, validator: r } = e, u = {
    type: l,
    required: !!a,
    validator: n || r ? (c) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), mt(e, "default") && f.push(o), d || (d = f.includes(c))), r && (d || (d = r(c))), !d && f.length > 0) {
        const m = [...new Set(f)].map((h) => JSON.stringify(h)).join(", ");
        Xt(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [xt]: !0
  };
  return mt(e, "default") && (u.default = o), u;
}, de = (e) => na(Object.entries(e).map(([t, n]) => [
  t,
  Ht(n, t)
])), gt = ne([
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
}, Sa = (e) => (e.install = ga, e), Ca = ["", "default", "small", "large"], Pt = Symbol("buttonGroupContextKey"), Dt = Symbol(), st = Symbol("formContextKey"), At = Symbol("formItemContextKey"), Ot = Symbol("scrollbarContextKey"), It = (e) => {
  const t = ce();
  return $(() => {
    var n, a;
    return (a = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? a : void 0;
  });
}, Ie = k();
function Le(e, t = void 0) {
  const n = ce() ? J(Dt, Ie) : Ie;
  return e ? $(() => {
    var a, o;
    return (o = (a = n.value) == null ? void 0 : a[e]) != null ? o : t;
  }) : n;
}
const Ea = (e, t, n = !1) => {
  var a;
  const o = !!ce(), l = o ? Le() : void 0, r = (a = t == null ? void 0 : t.provide) != null ? a : o ? at : void 0;
  if (!r) {
    ye("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const s = $(() => {
    const u = y(e);
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
  const n = k(void 0), a = t.prop ? n : It("size"), o = t.global ? n : Le("size"), l = t.form ? { size: void 0 } : J(st, void 0), r = t.formItem ? { size: void 0 } : J(At, void 0);
  return $(() => a.value || y(e) || (r == null ? void 0 : r.size) || (l == null ? void 0 : l.size) || o.value || "");
}, Ft = (e) => {
  const t = It("disabled"), n = J(st, void 0);
  return $(() => t.value || y(e) || (n == null ? void 0 : n.disabled) || !1);
}, Ba = ({ from: e, replacement: t, scope: n, version: a, ref: o, type: l = "API" }, r) => {
  U(() => y(r), (s) => {
    s && ye(n, `[${l}] ${e} is about to be deprecated in version ${a}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, Na = "el", Ma = "is-", te = (e, t, n, a, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), a && (l += `__${a}`), o && (l += `--${o}`), l;
}, fe = (e) => {
  const t = Le("namespace", Na);
  return {
    namespace: t,
    b: (i = "") => te(t.value, e, i, "", ""),
    e: (i) => i ? te(t.value, e, "", i, "") : "",
    m: (i) => i ? te(t.value, e, "", "", i) : "",
    be: (i, p) => i && p ? te(t.value, e, i, p, "") : "",
    em: (i, p) => i && p ? te(t.value, e, "", i, p) : "",
    bm: (i, p) => i && p ? te(t.value, e, i, "", p) : "",
    bem: (i, p, g) => i && p && g ? te(t.value, e, i, p, g) : "",
    is: (i, ...p) => {
      const g = p.length >= 1 ? p[0] : !0;
      return i && g ? `${Ma}${i}` : "";
    },
    cssVar: (i) => {
      const p = {};
      for (const g in i)
        i[g] && (p[`--${t.value}-${g}`] = i[g]);
      return p;
    },
    cssVarName: (i) => `--${t.value}-${i}`,
    cssVarBlock: (i) => {
      const p = {};
      for (const g in i)
        i[g] && (p[`--${t.value}-${e}-${g}`] = i[g]);
      return p;
    },
    cssVarBlockName: (i) => `--${t.value}-${e}-${i}`
  };
}, za = () => {
  const e = J(st, void 0), t = J(At, void 0);
  return {
    form: e,
    formItem: t
  };
};
var pe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
};
const xa = de({
  size: {
    type: ne([Number, String])
  },
  color: {
    type: String
  }
}), Ha = N({
  name: "ElIcon",
  inheritAttrs: !1
}), Pa = /* @__PURE__ */ N({
  ...Ha,
  props: xa,
  setup(e) {
    const t = e, n = fe("icon"), a = $(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: ya(o) ? void 0 : Ze(o),
        "--color": l
      };
    });
    return (o, l) => (v(), _("i", I({
      class: y(n).b(),
      style: y(a)
    }, o.$attrs), [
      E(o.$slots, "default")
    ], 16));
  }
});
var Da = /* @__PURE__ */ pe(Pa, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Je = Fe(Da), se = 4, Aa = {
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
}, Oa = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Ia = de({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Ra = "Thumb", Fa = /* @__PURE__ */ N({
  __name: "thumb",
  props: Ia,
  setup(e) {
    const t = e, n = J(Ot), a = fe("scrollbar");
    n || $a(Ra, "can not inject scrollbar context");
    const o = k(), l = k(), r = k({}), s = k(!1);
    let u = !1, c = !1, d = ot ? document.onselectstart : null;
    const f = $(() => Aa[t.vertical ? "vertical" : "horizontal"]), m = $(() => Oa({
      size: t.size,
      move: t.move,
      bar: f.value
    })), h = $(() => o.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / l.value[f.value.offset]), i = (z) => {
      var b;
      if (z.stopPropagation(), z.ctrlKey || [1, 2].includes(z.button))
        return;
      (b = window.getSelection()) == null || b.removeAllRanges(), g(z);
      const D = z.currentTarget;
      D && (r.value[f.value.axis] = D[f.value.offset] - (z[f.value.client] - D.getBoundingClientRect()[f.value.direction]));
    }, p = (z) => {
      if (!l.value || !o.value || !n.wrapElement)
        return;
      const b = Math.abs(z.target.getBoundingClientRect()[f.value.direction] - z[f.value.client]), D = l.value[f.value.offset] / 2, ee = (b - D) * 100 * h.value / o.value[f.value.offset];
      n.wrapElement[f.value.scroll] = ee * n.wrapElement[f.value.scrollSize] / 100;
    }, g = (z) => {
      z.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", V), document.addEventListener("mouseup", B), d = document.onselectstart, document.onselectstart = () => !1;
    }, V = (z) => {
      if (!o.value || !l.value || u === !1)
        return;
      const b = r.value[f.value.axis];
      if (!b)
        return;
      const D = (o.value.getBoundingClientRect()[f.value.direction] - z[f.value.client]) * -1, ee = l.value[f.value.offset] - b, he = (D - ee) * 100 * h.value / o.value[f.value.offset];
      n.wrapElement[f.value.scroll] = he * n.wrapElement[f.value.scrollSize] / 100;
    }, B = () => {
      u = !1, r.value[f.value.axis] = 0, document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", B), L(), c && (s.value = !1);
    }, Q = () => {
      c = !1, s.value = !!t.size;
    }, F = () => {
      c = !0, s.value = u;
    };
    Zt(() => {
      L(), document.removeEventListener("mouseup", B);
    });
    const L = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return qe(Oe(n, "scrollbarElement"), "mousemove", Q), qe(Oe(n, "scrollbarElement"), "mouseleave", F), (z, b) => (v(), M(Jt, {
      name: y(a).b("fade"),
      persisted: ""
    }, {
      default: w(() => [
        en(C("div", {
          ref_key: "instance",
          ref: o,
          class: x([y(a).e("bar"), y(a).is(y(f).key)]),
          onMousedown: p
        }, [
          C("div", {
            ref_key: "thumb",
            ref: l,
            class: x(y(a).e("thumb")),
            style: Y(y(m)),
            onMousedown: i
          }, null, 38)
        ], 34), [
          [tn, z.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var bt = /* @__PURE__ */ pe(Fa, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const La = de({
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
}), Ka = /* @__PURE__ */ N({
  __name: "bar",
  props: La,
  setup(e, { expose: t }) {
    const n = e, a = k(0), o = k(0);
    return t({
      handleScroll: (r) => {
        if (r) {
          const s = r.offsetHeight - se, u = r.offsetWidth - se;
          o.value = r.scrollTop * 100 / s * n.ratioY, a.value = r.scrollLeft * 100 / u * n.ratioX;
        }
      }
    }), (r, s) => (v(), _(A, null, [
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
var ja = /* @__PURE__ */ pe(Ka, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const Ya = de({
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
}), Ua = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(re)
}, et = "ElScrollbar", Wa = N({
  name: et
}), Ga = /* @__PURE__ */ N({
  ...Wa,
  props: Ya,
  emits: Ua,
  setup(e, { expose: t, emit: n }) {
    const a = e, o = fe("scrollbar");
    let l, r;
    const s = k(), u = k(), c = k(), d = k("0"), f = k("0"), m = k(), h = k(1), i = k(1), p = $(() => {
      const b = {};
      return a.height && (b.height = Ze(a.height)), a.maxHeight && (b.maxHeight = Ze(a.maxHeight)), [a.wrapStyle, b];
    }), g = $(() => [
      a.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !a.native }
    ]), V = $(() => [o.e("view"), a.viewClass]), B = () => {
      var b;
      u.value && ((b = m.value) == null || b.handleScroll(u.value), n("scroll", {
        scrollTop: u.value.scrollTop,
        scrollLeft: u.value.scrollLeft
      }));
    };
    function Q(b, D) {
      rt(b) ? u.value.scrollTo(b) : re(b) && re(D) && u.value.scrollTo(b, D);
    }
    const F = (b) => {
      if (!re(b)) {
        ye(et, "value must be a number");
        return;
      }
      u.value.scrollTop = b;
    }, L = (b) => {
      if (!re(b)) {
        ye(et, "value must be a number");
        return;
      }
      u.value.scrollLeft = b;
    }, z = () => {
      if (!u.value)
        return;
      const b = u.value.offsetHeight - se, D = u.value.offsetWidth - se, ee = b ** 2 / u.value.scrollHeight, he = D ** 2 / u.value.scrollWidth, $e = Math.max(ee, a.minSize), we = Math.max(he, a.minSize);
      h.value = ee / (b - ee) / ($e / (b - $e)), i.value = he / (D - he) / (we / (D - we)), f.value = $e + se < b ? `${$e}px` : "", d.value = we + se < D ? `${we}px` : "";
    };
    return U(() => a.noresize, (b) => {
      b ? (l == null || l(), r == null || r()) : ({ stop: l } = da(c, z), r = qe("resize", z));
    }, { immediate: !0 }), U(() => [a.maxHeight, a.height], () => {
      a.native || oe(() => {
        var b;
        z(), u.value && ((b = m.value) == null || b.handleScroll(u.value));
      });
    }), at(Ot, Et({
      scrollbarElement: s,
      wrapElement: u
    })), _e(() => {
      a.native || oe(() => {
        z();
      });
    }), Vt(() => z()), t({
      wrapRef: u,
      update: z,
      scrollTo: Q,
      setScrollTop: F,
      setScrollLeft: L,
      handleScroll: B
    }), (b, D) => (v(), _("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: x(y(o).b())
    }, [
      C("div", {
        ref_key: "wrapRef",
        ref: u,
        class: x(y(g)),
        style: Y(y(p)),
        onScroll: B
      }, [
        (v(), M(We(b.tag), {
          ref_key: "resizeRef",
          ref: c,
          class: x(y(V)),
          style: Y(b.viewStyle)
        }, {
          default: w(() => [
            E(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      b.native ? R("v-if", !0) : (v(), M(ja, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        height: f.value,
        width: d.value,
        always: b.always,
        "ratio-x": i.value,
        "ratio-y": h.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var qa = /* @__PURE__ */ pe(Ga, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const Qa = Fe(qa), Xa = (e, t) => {
  Ba({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, $(() => e.type === "text"));
  const n = J(Pt, void 0), a = Le("button"), { form: o } = za(), l = Ta($(() => n == null ? void 0 : n.size)), r = Ft(), s = k(), u = nn(), c = $(() => e.type || (n == null ? void 0 : n.type) || ""), d = $(() => {
    var h, i, p;
    return (p = (i = e.autoInsertSpace) != null ? i : (h = a.value) == null ? void 0 : h.autoInsertSpace) != null ? p : !1;
  }), f = $(() => {
    var h;
    const i = (h = u.default) == null ? void 0 : h.call(u);
    if (d.value && (i == null ? void 0 : i.length) === 1) {
      const p = i[0];
      if ((p == null ? void 0 : p.type) === an) {
        const g = p.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(g.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: r,
    _size: l,
    _type: c,
    _ref: s,
    shouldAddSpace: f,
    handleClick: (h) => {
      e.nativeType === "reset" && (o == null || o.resetFields()), t("click", h);
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
], Ja = ["button", "submit", "reset"], tt = de({
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
function H(e, t) {
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
function ae(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function ao(e, t, n) {
  return {
    r: H(e, 255) * 255,
    g: H(t, 255) * 255,
    b: H(n, 255) * 255
  };
}
function yt(e, t, n) {
  e = H(e, 255), t = H(t, 255), n = H(n, 255);
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
function Ke(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function oo(e, t, n) {
  var a, o, l;
  if (e = H(e, 360), t = H(t, 100), n = H(n, 100), t === 0)
    o = n, l = n, a = n;
  else {
    var r = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
    a = Ke(s, r, e + 1 / 3), o = Ke(s, r, e), l = Ke(s, r, e - 1 / 3);
  }
  return { r: a * 255, g: o * 255, b: l * 255 };
}
function _t(e, t, n) {
  e = H(e, 255), t = H(t, 255), n = H(n, 255);
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
  e = H(e, 360) * 6, t = H(t, 100), n = H(n, 100);
  var a = Math.floor(e), o = e - a, l = n * (1 - t), r = n * (1 - o * t), s = n * (1 - (1 - o) * t), u = a % 6, c = [n, r, l, l, s, n][u], d = [s, n, n, r, l, l][u], f = [l, l, s, n, n, r][u];
  return { r: c * 255, g: d * 255, b: f * 255 };
}
function $t(e, t, n, a) {
  var o = [
    ae(Math.round(e).toString(16)),
    ae(Math.round(t).toString(16)),
    ae(Math.round(n).toString(16))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function ro(e, t, n, a, o) {
  var l = [
    ae(Math.round(e).toString(16)),
    ae(Math.round(t).toString(16)),
    ae(Math.round(n).toString(16)),
    ae(so(a))
  ];
  return o && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function so(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function wt(e) {
  return O(e) / 255;
}
function O(e) {
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
  return typeof e == "string" && (e = po(e)), typeof e == "object" && (G(e.r) && G(e.g) && G(e.b) ? (t = ao(e.r, e.g, e.b), r = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : G(e.h) && G(e.s) && G(e.v) ? (a = Se(e.s), o = Se(e.v), t = lo(e.h, a, o), r = !0, s = "hsv") : G(e.h) && G(e.s) && G(e.l) && (a = Se(e.s), l = Se(e.l), t = oo(e.h, a, l), r = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Lt(n), {
    ok: r,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var co = "[-\\+]?\\d+%?", fo = "[-\\+]?\\d*\\.\\d+%?", Z = "(?:".concat(fo, ")|(?:").concat(co, ")"), je = "[\\s|\\(]+(".concat(Z, ")[,|\\s]+(").concat(Z, ")[,|\\s]+(").concat(Z, ")\\s*\\)?"), Ye = "[\\s|\\(]+(".concat(Z, ")[,|\\s]+(").concat(Z, ")[,|\\s]+(").concat(Z, ")[,|\\s]+(").concat(Z, ")\\s*\\)?"), j = {
  CSS_UNIT: new RegExp(Z),
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
    r: O(n[1]),
    g: O(n[2]),
    b: O(n[3]),
    a: wt(n[4]),
    format: t ? "name" : "hex8"
  } : (n = j.hex6.exec(e), n ? {
    r: O(n[1]),
    g: O(n[2]),
    b: O(n[3]),
    format: t ? "name" : "hex"
  } : (n = j.hex4.exec(e), n ? {
    r: O(n[1] + n[1]),
    g: O(n[2] + n[2]),
    b: O(n[3] + n[3]),
    a: wt(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = j.hex3.exec(e), n ? {
    r: O(n[1] + n[1]),
    g: O(n[2] + n[2]),
    b: O(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function G(e) {
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
      var t = this.toRgb(), n, a, o, l = t.r / 255, r = t.g / 255, s = t.b / 255;
      return l <= 0.03928 ? n = l / 12.92 : n = Math.pow((l + 0.055) / 1.055, 2.4), r <= 0.03928 ? a = r / 12.92 : a = Math.pow((r + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * a + 0.0722 * o;
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
      return t === void 0 && (t = !1), $t(this.r, this.g, this.b, t);
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
        return "".concat(Math.round(H(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(H(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + $t(this.r, this.g, this.b, !1), n = 0, a = Object.entries(nt); n < a.length; n++) {
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
function X(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function mo(e) {
  const t = Ft(), n = fe("button");
  return $(() => {
    let a = {};
    const o = e.color;
    if (o) {
      const l = new ho(o), r = e.dark ? l.tint(20).toString() : X(l, 20);
      if (e.plain)
        a = n.cssVarBlock({
          "bg-color": e.dark ? X(l, 90) : l.tint(90).toString(),
          "text-color": o,
          "border-color": e.dark ? X(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": o,
          "hover-border-color": o,
          "active-bg-color": r,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": r
        }), t.value && (a[n.cssVarBlockName("disabled-bg-color")] = e.dark ? X(l, 90) : l.tint(90).toString(), a[n.cssVarBlockName("disabled-text-color")] = e.dark ? X(l, 50) : l.tint(50).toString(), a[n.cssVarBlockName("disabled-border-color")] = e.dark ? X(l, 80) : l.tint(80).toString());
      else {
        const s = e.dark ? X(l, 30) : l.tint(30).toString(), u = l.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
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
          const c = e.dark ? X(l, 50) : l.tint(50).toString();
          a[n.cssVarBlockName("disabled-bg-color")] = c, a[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, a[n.cssVarBlockName("disabled-border-color")] = c;
        }
      }
    }
    return a;
  });
}
const vo = ["aria-disabled", "disabled", "autofocus", "type"], go = N({
  name: "ElButton"
}), bo = /* @__PURE__ */ N({
  ...go,
  props: tt,
  emits: eo,
  setup(e, { expose: t, emit: n }) {
    const a = e, o = mo(a), l = fe("button"), { _ref: r, _size: s, _type: u, _disabled: c, shouldAddSpace: d, handleClick: f } = Xa(a, n);
    return t({
      ref: r,
      size: s,
      type: u,
      disabled: c,
      shouldAddSpace: d
    }), (m, h) => (v(), _("button", {
      ref_key: "_ref",
      ref: r,
      class: x([
        y(l).b(),
        y(l).m(y(u)),
        y(l).m(y(s)),
        y(l).is("disabled", y(c)),
        y(l).is("loading", m.loading),
        y(l).is("plain", m.plain),
        y(l).is("round", m.round),
        y(l).is("circle", m.circle),
        y(l).is("text", m.text),
        y(l).is("link", m.link),
        y(l).is("has-bg", m.bg)
      ]),
      "aria-disabled": y(c) || m.loading,
      disabled: y(c) || m.loading,
      autofocus: m.autofocus,
      type: m.nativeType,
      style: Y(y(o)),
      onClick: h[0] || (h[0] = (...i) => y(f) && y(f)(...i))
    }, [
      m.loading ? (v(), _(A, { key: 0 }, [
        m.$slots.loading ? E(m.$slots, "loading", { key: 0 }) : (v(), M(y(Je), {
          key: 1,
          class: x(y(l).is("loading"))
        }, {
          default: w(() => [
            (v(), M(We(m.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : m.icon || m.$slots.icon ? (v(), M(y(Je), { key: 1 }, {
        default: w(() => [
          m.icon ? (v(), M(We(m.icon), { key: 0 })) : E(m.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : R("v-if", !0),
      m.$slots.default ? (v(), _("span", {
        key: 2,
        class: x({ [y(l).em("text", "expand")]: y(d) })
      }, [
        E(m.$slots, "default")
      ], 2)) : R("v-if", !0)
    ], 14, vo));
  }
});
var yo = /* @__PURE__ */ pe(bo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const _o = {
  size: tt.size,
  type: tt.type
}, $o = N({
  name: "ElButtonGroup"
}), wo = /* @__PURE__ */ N({
  ...$o,
  props: _o,
  setup(e) {
    const t = e;
    at(Pt, Et({
      size: Oe(t, "size"),
      type: Oe(t, "type")
    }));
    const n = fe("button");
    return (a, o) => (v(), _("div", {
      class: x(`${y(n).b("group")}`)
    }, [
      E(a.$slots, "default")
    ], 2));
  }
});
var Kt = /* @__PURE__ */ pe(wo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const ko = Fe(yo, {
  ButtonGroup: Kt
});
Sa(Kt);
function So(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const Co = {}, Eo = de({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ne(Object)
  },
  size: Rt,
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
}), Vo = N({
  name: "ElConfigProvider",
  props: Eo,
  setup(e, { slots: t }) {
    U(() => e.message, (a) => {
      Object.assign(Co, a ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Ea(e);
    return () => E(t, "default", { config: n == null ? void 0 : n.value });
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
const To = N({
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
    const n = Ut, a = $(() => {
      const { total: u, size: c, showSize: d } = e;
      return d ? !0 : u > c;
    }), o = $({
      get() {
        return e.modelValue;
      },
      set(u) {
        t("update:modelValue", u);
      }
    }), l = $(() => {
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
}), Bo = {
  key: 0,
  class: "page-right mt20"
};
function No(e, t, n, a, o, l) {
  const r = S("el-pagination"), s = S("el-config-provider");
  return e.showPage ? (v(), _("div", Bo, [
    T(s, { locale: e.locale }, {
      default: w(() => [
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
  ])) : R("", !0);
}
const ue = /* @__PURE__ */ P(To, [["render", No], ["__scopeId", "data-v-77c509db"]]);
ue.install = function(e) {
  e.component(ue.name, ue);
};
const Mo = N({
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
  setup(e, { emit: t }) {
    const n = $({
      get: () => e.tableData,
      set: (r) => t("update:tableData", r)
    }), a = $({
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
}), zo = { key: 2 };
function xo(e, t, n, a, o, l) {
  const r = S("el-table-column"), s = S("el-table"), u = S("pagination");
  return v(), _(A, null, [
    T(s, I({
      data: e.tableDataList,
      style: { width: "100%" },
      class: "mt20",
      "header-cell-style": e.headerCellStyle
    }, e.$attrs, {
      "empty-text": e.emptyText,
      onSortChange: e.sortChange
    }), ie({
      default: w(() => [
        (v(!0), _(A, null, W(e.tableColumn, (c) => (v(), M(r, {
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
          default: w((d) => [
            e.$slots.default ? E(e.$slots, "default", {
              key: 0,
              item: d.row,
              row: d.row,
              index: d.$index
            }) : c.custom && d.$index >= 0 ? E(e.$slots, c.custom, {
              key: 1,
              item: d.row,
              row: d.row,
              index: d.$index
            }) : (v(), _("span", zo, K(d.row[c.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          c.header ? {
            name: "header",
            fn: w(() => [
              E(e.$slots, c.header)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["label", "name", "width", "min-width", "fixed", "sortable", "type", "show-overflow-tooltip"]))), 128))
      ]),
      _: 2
    }, [
      e.$slots.empty ? {
        name: "empty",
        fn: w(() => [
          E(e.$slots, "empty")
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
const Ve = /* @__PURE__ */ P(Mo, [["render", xo]]);
Ve.install = function(e) {
  e.component(Ve.name, Ve);
};
const Ho = N({
  name: "KVirtualList",
  components: { ElScrollbar: Qa },
  props: {
    height: { type: String, default: "500px" },
    rowClass: { type: [String, Object], default: "" },
    rowStyle: { type: Object, default: () => ({}) },
    data: { type: Array, default: () => [] }
  },
  emits: ["scroll", "row-click"],
  setup(e, { emit: t }) {
    const n = k(0), a = k(0), o = k(null), l = k(10), r = () => {
      var p;
      return ((p = document.querySelector(".list-item")) == null ? void 0 : p.offsetHeight) ?? 100;
    }, s = () => {
      const { clientHeight: p = 100 } = o.value.wrapRef || {};
      return Math.floor(p / r()) + n.value;
    }, u = k(100);
    _e(() => {
      l.value = Number(s()) || 10, u.value = e.data.length * r();
    });
    const c = (p) => Math.floor(p / r()), d = (p) => p * r(), f = (p) => p >= n.value && p <= l.value, m = $(() => e.data.filter((p, g) => f(g)));
    return U(() => e.data, () => {
      u.value = e.data.length * r();
    }), {
      startIndex: n,
      endIndex: l,
      startOffset: a,
      viewport: o,
      onScroll: (p) => {
        const { scrollTop: g, clientHeight: V } = o.value.wrapRef;
        n.value = c(g), a.value = d(n.value), l.value = s();
        const B = Math.abs(u.value - V - g);
        t("scroll", { distance: B, ...p });
      },
      showViewRanges: f,
      containHeight: u,
      listRanges: m,
      rowClick: (p, g) => {
        t("row-click", p, g);
      }
    };
  }
}), Po = {
  class: "virtual-list",
  "data-testid": "virtual-list"
}, Do = ["onClick"];
function Ao(e, t, n, a, o, l) {
  const r = S("el-scrollbar");
  return v(), M(r, I({
    height: e.height,
    ref: "viewport"
  }, e.$attrs, { onScroll: e.onScroll }), {
    default: w(() => [
      C("div", Po, [
        C("div", {
          class: "list-contain",
          style: Y({ height: `${e.containHeight}px` })
        }, null, 4),
        C("div", {
          class: "list-content",
          style: Y({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          (v(!0), _(A, null, W(e.listRanges, (s, u) => (v(), _("div", {
            key: u,
            class: x(["list-item", e.rowClass]),
            style: Y(e.rowStyle),
            onClick: (c) => e.rowClick(s, u)
          }, [
            E(e.$slots, "default", {
              row: s,
              index: u
            }, () => [
              q(K(s.name), 1)
            ], !0)
          ], 14, Do))), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["height", "onScroll"]);
}
const ge = /* @__PURE__ */ P(Ho, [["render", Ao], ["__scopeId", "data-v-de5e810b"]]);
ge.install = function(e) {
  e.component(ge.name, ge);
};
const Oo = {
  modelValue: { type: Array, default: () => [] },
  keyId: { type: String, default: "id" },
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
  height: { type: String, default: "500px" }
};
const Io = N({
  name: "KTableV2",
  components: { virtualList: ge },
  props: Oo,
  emits: ["sort-change"],
  setup(e, { emit: t }) {
    const n = k(null), a = (c) => {
      var i, p, g, V;
      let d = {};
      const { align: f, width: m, fixed: h } = c;
      if (f && (d["text-center"] = `${f}`), m && (d = {
        ...d,
        width: `${m}`,
        flex: "inherit",
        "flex-shrink": 0
      }), h) {
        const B = e.tableColumn.findIndex((F) => F.prop === c.prop), Q = e.tableColumn.length;
        if (d = {
          ...d,
          position: "sticky",
          background: "#ffffff",
          "z-index": 5
        }, h === "left") {
          const F = (i = e.tableColumn.filter((b) => b.fixed === "left")) == null ? void 0 : i.length;
          let L = 0;
          B > 0 && B < Q - 1 && F > 1 && (L = (p = n.value) == null ? void 0 : p.at(B - 1).clientWidth), d.left = `${L}px`, e.tableColumn.findLastIndex((b) => b.fixed === "left") === B && (d["box-shadow"] = "3px 0px 4px #b0a8a836");
        } else {
          const F = (g = e.tableColumn.filter((b) => b.fixed && b.fixed !== "left")) == null ? void 0 : g.length;
          let L = 0;
          B < Q - 1 && F > 1 && (L = (V = n.value) == null ? void 0 : V.at(B + 1).clientWidth), e.tableColumn.findIndex((b) => b.fixed && b.fixed !== "left") === B && (d["box-shadow"] = "-3px 0 4px #b0a8a836"), d.right = `${L}px`;
        }
      }
      return d;
    }, o = k(null), l = ({ scrollLeft: c }) => {
      o.value.scrollLeft = `${c}`;
    }, r = k(null), s = k({}), u = (c, d) => {
      s.value = d, r.value = r.value === c ? null : c, t("sort-change", { column: d, sortType: r.value });
    };
    return {
      ...on(e),
      headerClass: a,
      tableHeader: o,
      scrollHandle: l,
      headerColmn: n,
      sortType: r,
      clickSortCaret: u,
      selectedRow: s
    };
  }
}), Ro = { class: "table-v2 el-table" }, Fo = {
  class: "table-header overflow",
  ref: "tableHeader"
}, Lo = { class: "flex table-border-bottom header-content" }, Ko = {
  key: 0,
  class: "table-header-sort flex-column flex-center"
}, jo = { class: "sort-wrapper" }, Yo = ["onClick"], Uo = ["onClick"], Wo = { class: "flex table-body" };
function Go(e, t, n, a, o, l) {
  const r = S("virtualList");
  return v(), _("div", Ro, [
    C("div", Fo, [
      C("div", Lo, [
        (v(!0), _(A, null, W(e.tableColumn, (s, u) => (v(), _("div", {
          key: u,
          class: "header-column cell flex-align-center",
          ref_for: !0,
          ref: "headerColmn",
          style: Y([e.headerClass(s), e.headerCellStyle])
        }, [
          E(e.$slots, (s == null ? void 0 : s.header) ?? "default", {}, () => [
            q(K(s.label), 1)
          ], !0),
          s.sortable ? (v(), _("div", Ko, [
            C("span", jo, [
              C("i", {
                class: x(["sort-caret ascending", { "bottom-caret": e.sortType === "ascending" && e.selectedRow.prop == s.prop }]),
                onClick: (c) => e.clickSortCaret("ascending", s)
              }, null, 10, Yo),
              C("i", {
                class: x(["sort-caret descending", { "top-caret": e.sortType === "descending" && e.selectedRow.prop == s.prop }]),
                onClick: (c) => e.clickSortCaret("descending", s)
              }, null, 10, Uo)
            ])
          ])) : R("", !0)
        ], 4))), 128))
      ])
    ], 512),
    T(r, {
      data: e.tableData,
      height: e.height,
      onScroll: e.scrollHandle
    }, {
      default: w(({ row: s }) => [
        E(e.$slots, "content", {}, () => [
          C("div", Wo, [
            (v(!0), _(A, null, W(e.tableColumn, (u, c) => (v(), _("div", {
              key: c,
              class: "cell header-column table-border-bottom flex-align-center",
              ref_for: !0,
              ref: "bodyCell",
              style: Y(e.headerClass(u))
            }, [
              C("div", {
                class: x({ "text-overflow": u.showOverflowTooltip })
              }, [
                E(e.$slots, (u == null ? void 0 : u.custom) ?? "default", {
                  row: u,
                  index: c
                }, () => [
                  q(K(s[u.prop]), 1)
                ], !0)
              ], 2)
            ], 4))), 128))
          ])
        ], !0)
      ]),
      _: 3
    }, 8, ["data", "height", "onScroll"])
  ]);
}
const Te = /* @__PURE__ */ P(Io, [["render", Go], ["__scopeId", "data-v-cbc0f523"]]);
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
}, Qo = N({
  name: "KBatchTable",
  components: { pagination: ue },
  props: qo,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { emit: t }) {
    const n = k(null), a = () => n.value.clearSelection(), o = (i) => {
      i ? e.tableData.forEach((p) => {
        i.forEach((g) => {
          h(p) === h(g) && oe(() => n.value && n.value.toggleRowSelection(p));
        });
      }) : (l.value = [], n.value.clearSelection());
    }, l = $({
      get: () => e.modelValue,
      set: (i) => t("update:modelValue", i)
    });
    U(() => e.modelValue, (i) => {
      !i.length && n.value && n.value.clearSelection();
    });
    const r = () => {
      setTimeout(() => {
        e.selectList.length && (e.tableData.forEach((i) => {
          i[e.checkKey] = i[e.checkKey] ?? 1;
        }), e.selectList.forEach((i) => {
          e.tableData.forEach((p) => {
            h(i) === h(p) && (p[e.checkKey] = 0);
          });
        }), o(l.value));
      }, 200);
    };
    U(() => e.tableData, (i) => {
      oe(() => {
        i.length && r(), i.length && o(l.value);
      });
    }, { immediate: !0 });
    const s = (i, p) => {
      i.some((V) => h(V) === h(p)) ? l.value = [...l.value, p] : l.value = l.value.filter((V) => h(V) !== h(p));
    }, u = (i) => {
      if (l.value.length)
        if (i.length) {
          const p = i.filter((g) => l.value.every((V) => h(V) !== h(g)));
          l.value = [...l.value, ...p];
        } else
          l.value = l.value.filter((p) => e.tableData.every((g) => h(p) !== h(g)));
      else
        l.value = i;
    }, c = (i) => {
      if (!d(i))
        return;
      const p = l.value.some((g) => h(g) === h(i));
      o([i]), p ? l.value = l.value.filter((g) => h(g) !== h(i)) : l.value = [...l.value, i], t("row-click", i);
    }, d = (i) => i[e.checkKey] ?? !i[e.checkKey], f = $({
      get: () => e.page,
      set: (i) => t("update:page", i)
    }), m = (i) => {
      t("current-change", i);
    }, h = (i) => i[e.keyId];
    return {
      multipleTable: n,
      handleSelect: s,
      selectAll: u,
      handleRowClick: c,
      checkSelection: d,
      toggleSelection: o,
      currentPage: f,
      changePage: m,
      clear: a
    };
  }
}), Xo = { key: 2 }, Zo = { class: "mt20 flex-between" }, Jo = { class: "flex1" };
function el(e, t, n, a, o, l) {
  const r = S("el-table-column"), s = S("el-table"), u = S("pagination");
  return v(), _(A, null, [
    T(s, I({ ref: "multipleTable" }, e.$attrs, {
      "empty-text": "暂无数据",
      data: e.tableData,
      "header-cell-style": e.headerCellStyle,
      onSelect: e.handleSelect,
      onSelectAll: e.selectAll,
      onRowClick: e.handleRowClick
    }), ie({
      default: w(() => [
        T(r, {
          type: "selection",
          width: "55",
          selectable: e.checkSelection
        }, null, 8, ["selectable"]),
        (v(!0), _(A, null, W(e.tableColumn, (c) => (v(), M(r, {
          label: c.label,
          key: c.prop,
          width: c.width,
          fixed: c.fixed,
          "min-width": c.minWidth,
          "show-overflow-tooltip": ""
        }, ie({
          default: w((d) => [
            e.$slots.default ? E(e.$slots, "default", {
              key: 0,
              item: d.row,
              row: d.row,
              column: c,
              index: d.$index
            }) : R("", !0),
            c.custom && d.$index >= 0 ? E(e.$slots, c.custom, {
              key: 1,
              item: d.row,
              column: c,
              row: d.row,
              index: d.$index
            }) : (v(), _("span", Xo, K(d.row[c.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          c.header ? {
            name: "header",
            fn: w(() => [
              E(e.$slots, "header", { column: c }),
              E(e.$slots, c.header, { column: c })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["label", "width", "fixed", "min-width"]))), 128))
      ]),
      _: 2
    }, [
      e.$slots.empty ? {
        name: "empty",
        fn: w(() => [
          E(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "onSelect", "onSelectAll", "onRowClick"]),
    C("div", Zo, [
      C("div", Jo, [
        e.$slots.footer ? E(e.$slots, "footer", { key: 0 }) : R("", !0)
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
const be = /* @__PURE__ */ P(Qo, [["render", el]]);
be.install = function(e) {
  e.component(be.name, be);
};
const tl = N({
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
    const n = $({
      get: () => e.modelValue,
      set: (s) => t("update:modelValue", s)
    }), a = $(() => e.class ? e.class : e.customClass ? e.customClass : e.showFooter ? "custom-dialog" : "custom-dialog no-footer");
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
}), nl = /* @__PURE__ */ C("span", null, "这是一段信息", -1), al = { class: "dialog-footer" };
function ol(e, t, n, a, o, l) {
  const r = S("el-button"), s = S("el-dialog");
  return v(), M(s, I({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": t[1] || (t[1] = (u) => e.dialogVisible = u),
    class: e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), ie({
    default: w(() => [
      E(e.$slots, "default", {}, () => [
        nl
      ])
    ]),
    _: 2
  }, [
    e.showFooter ? {
      name: "footer",
      fn: w(() => [
        E(e.$slots, "footer", {}, () => [
          C("span", al, [
            T(r, {
              size: "large",
              onClick: t[0] || (t[0] = (u) => e.dialogVisible = !1)
            }, {
              default: w(() => [
                q("取 消")
              ]),
              _: 1
            }),
            T(r, {
              size: "large",
              type: "primary",
              onClick: e.confirmHandler
            }, {
              default: w(() => [
                q("确 定")
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
const Be = /* @__PURE__ */ P(tl, [["render", ol]]);
Be.install = function(e) {
  e.component(Be.name, Be);
};
const ll = N({
  name: "KBreadcrumb",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const n = ce().appContext.config.globalProperties.$router;
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
  const r = S("el-space");
  return v(), _("div", rl, [
    C("div", sl, [
      T(r, { spacer: "/" }, {
        default: w(() => [
          (v(!0), _(A, null, W(e.list, (s, u) => (v(), _("span", {
            key: u,
            class: x({ "crumb-item": u !== e.list.length - 1 }),
            onClick: (c) => e.clickHandle(s, u)
          }, K(s.title), 11, ul))), 128))
        ]),
        _: 1
      })
    ]),
    E(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Ne = /* @__PURE__ */ P(ll, [["render", il], ["__scopeId", "data-v-4520378f"]]);
Ne.install = function(e) {
  e.component(Ne.name, Ne);
};
const cl = N({
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
    const n = ce(), a = n.appContext.config.globalProperties.$route, o = n.appContext.config.globalProperties.$router, l = $(() => (a == null ? void 0 : a.params.type) || (a == null ? void 0 : a.name)), r = k(l.value);
    Re(() => {
      r.value = e.modelValue || l.value, t("update:modelValue", r.value);
    });
    const s = $(() => a.query);
    return { activeName: r, handleClick: (c) => {
      if (e.isRouter) {
        const d = { path: `${c.paneName}`, query: s.value };
        e.replace ? o.replace(d) : o.push(d);
      }
      t("tab-click", c.paneName), t("update:modelValue", c.paneName);
    } };
  }
}), dl = { class: "tabs-right ml10" };
function fl(e, t, n, a, o, l) {
  const r = S("el-tab-pane"), s = S("el-tabs");
  return v(), _("div", {
    class: x(["k-tabs", { "style-card": !e.type, "style-padding": e.isPadding && !e.type }])
  }, [
    T(s, I({
      class: "flex-tabs",
      type: e.type
    }, e.$attrs, {
      modelValue: e.activeName,
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.activeName = u),
      onTabClick: e.handleClick
    }), {
      default: w(() => [
        (v(!0), _(A, null, W(e.tabsList, (u) => (v(), M(r, {
          label: u.label,
          name: u.name,
          key: u.name
        }, null, 8, ["label", "name"]))), 128))
      ]),
      _: 1
    }, 16, ["type", "modelValue", "onTabClick"]),
    C("div", dl, [
      E(e.$slots, "default")
    ])
  ], 2);
}
const Me = /* @__PURE__ */ P(cl, [["render", fl]]);
Me.install = function(e) {
  e.component(Me.name, Me);
};
const pl = N({
  name: "KPicker",
  components: { batchTable: be, Delete: Bn },
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
    const n = $({
      get: () => e.modelValue,
      set: (d) => t("update:modelValue", d)
    });
    Re(() => {
      e.showCount && n.value.forEach((d) => {
        d.num = d.num ?? 1;
      });
    });
    const a = k(null), o = () => a.value.toggleSelection(), l = (d) => a.value.handleRowClick(d), r = k(1);
    return {
      multipleSelection: n,
      batchTableRef: a,
      currentPage: r,
      emptyHandler: o,
      resetData: () => {
        r.value = 1, o();
      },
      deleteHandler: l,
      getName: (d) => d[e.keyName],
      getId: (d) => d[e.keyId]
    };
  }
}), hl = { class: "k-picker" }, ml = { class: "col-left" }, vl = { class: "col-right" }, gl = { class: "selete-header flex-between" }, bl = { class: "selete-content" }, yl = { class: "flex flex1 mr20 overflow" }, _l = { class: "text-overflow" };
function $l(e, t, n, a, o, l) {
  const r = S("batchTable"), s = S("el-col"), u = S("delete"), c = S("el-icon"), d = S("el-button"), f = S("el-tooltip"), m = S("el-input-number"), h = S("el-row");
  return v(), _("div", hl, [
    E(e.$slots, "top", {}, void 0, !0),
    T(h, { gutter: 10 }, {
      default: w(() => [
        T(s, { span: 15 }, {
          default: w(() => [
            C("div", ml, [
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
                header: w(({ column: i }) => [
                  E(e.$slots, i.header, { column: i }, void 0, !0)
                ]),
                default: w(({ row: i, column: p, index: g }) => [
                  p.custom && g >= 0 ? E(e.$slots, p.custom, {
                    key: 0,
                    row: i,
                    index: g
                  }, void 0, !0) : R("", !0)
                ]),
                _: 3
              }, 8, ["table-data", "table-column", "select-list", "key-id", "modelValue", "page"])
            ])
          ]),
          _: 3
        }),
        T(s, { span: 9 }, {
          default: w(() => [
            C("div", vl, [
              C("div", gl, [
                C("span", null, [
                  q("已选择"),
                  C("span", null, "(" + K(e.multipleSelection.length) + ")", 1)
                ]),
                T(d, {
                  text: "",
                  disabled: !e.multipleSelection.length,
                  onClick: e.emptyHandler
                }, {
                  default: w(() => [
                    T(c, null, {
                      default: w(() => [
                        T(u)
                      ]),
                      _: 1
                    }),
                    q(" 清空 ")
                  ]),
                  _: 1
                }, 8, ["disabled", "onClick"])
              ]),
              C("div", bl, [
                (v(!0), _(A, null, W(e.multipleSelection, (i) => (v(), _("div", {
                  class: x(["flex-between pl10 pr10", { mt10: e.showCount }]),
                  key: e.getId(i)
                }, [
                  C("div", yl, [
                    T(f, {
                      effect: "dark",
                      content: e.getName(i),
                      placement: "top"
                    }, {
                      default: w(() => [
                        C("span", _l, K(e.getName(i)), 1)
                      ]),
                      _: 2
                    }, 1032, ["content"])
                  ]),
                  e.showCount ? (v(), M(m, {
                    key: 0,
                    modelValue: i.num,
                    "onUpdate:modelValue": (p) => i.num = p,
                    min: 1,
                    class: "width-100 flex-shrink mr10"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : R("", !0),
                  T(d, {
                    text: "",
                    onClick: (p) => e.deleteHandler(i)
                  }, {
                    default: w(() => [
                      q(" 删除 ")
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
    E(e.$slots, "footer", {}, void 0, !0)
  ]);
}
const ze = /* @__PURE__ */ P(pl, [["render", $l], ["__scopeId", "data-v-11e20448"]]);
ze.install = function(e) {
  e.component(ze.name, ze);
};
const wl = N({
  name: "KTooltip",
  props: {
    placement: { type: String, default: "top" },
    showIcon: { type: Boolean, default: !1 },
    overflow: { type: Boolean, default: !1 }
  },
  components: { Warning: Jn }
});
function kl(e, t, n, a, o, l) {
  const r = S("warning"), s = S("el-icon"), u = S("el-tooltip");
  return v(), _("div", {
    class: x(["flex flex1", { "text-overflow": e.overflow }])
  }, [
    T(u, I(e.$attrs, { placement: e.placement }), {
      content: w(() => [
        E(e.$slots, "content", {}, void 0, !0)
      ]),
      default: w(() => [
        C("div", {
          class: x(["flex-center", { "text-overflow": e.overflow }])
        }, [
          E(e.$slots, "default", {}, void 0, !0),
          e.showIcon ? (v(), M(s, {
            key: 0,
            class: "ml5"
          }, {
            default: w(() => [
              E(e.$slots, "icon", {}, () => [
                T(r)
              ], !0)
            ]),
            _: 3
          })) : R("", !0)
        ], 2)
      ]),
      _: 3
    }, 16, ["placement"])
  ], 2);
}
const xe = /* @__PURE__ */ P(wl, [["render", kl], ["__scopeId", "data-v-d468c200"]]);
xe.install = function(e) {
  e.component(xe.name, xe);
};
const Sl = {
  __name: "main",
  setup(e) {
    return (t, n) => (v(), M(y(jt), { locale: y(Ut) }, {
      default: w(() => [
        E(t.$slots, "default")
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
    const n = e, a = $(() => n.type === "datetimerange" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"), o = (d) => {
      const f = new Date(), m = new Date();
      return f.setTime(f.getTime() - 3600 * 1e3 * 24 * d), n.type === "date" ? f : [f, m];
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
    ], r = [new Date(2e3, 1, 1, 0, 0, 0), new Date(2e3, 2, 1, 23, 59, 59)], s = $({
      get: () => n.modelValue,
      set: (d) => t("update:modelValue", d)
    }), u = (d) => d.getTime() > Date.now(), c = (d) => t("change", d);
    return (d, f) => {
      const m = S("el-date-picker");
      return v(), M(m, {
        modelValue: y(s),
        "onUpdate:modelValue": f[0] || (f[0] = (h) => Ge(s) ? s.value = h : null),
        type: e.type,
        "unlink-panels": "",
        "range-separator": "至",
        "start-placeholder": "开始日期",
        "end-placeholder": "结束日期",
        shortcuts: l,
        format: y(a),
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
    const n = e, a = k(0), o = k([
      { value: 0, label: "日" },
      { value: 1, label: "周" },
      { value: 2, label: "月" },
      { value: 3, label: "年" }
    ]), l = $({
      get: () => n.modelValue,
      set: (h) => t("update:modelValue", h)
    }), r = (h) => h.getTime() > Date.now(), s = $(() => ({
      0: "YYYY-MM-DD",
      1: "YYYY 第 ww 周",
      2: "YYYY-MM",
      3: "YYYY"
    })[a.value]), u = $(() => ({
      0: n.daterange ? "daterange" : "date",
      1: "week",
      2: "month",
      3: "year"
    })[a.value]), c = $(() => {
      const { label: h } = o.value.filter((i) => i.value === a.value)[0];
      return `选择${h}`;
    }), d = k("");
    Re(() => {
      if (Array.isArray(l.value)) {
        const [h, i] = l.value;
        d.value = [h, i];
      }
    });
    const f = (h) => {
      if (h) {
        if (Array.isArray(l.value)) {
          const [i] = l.value;
          l.value = i;
        }
      } else
        n.daterange && (l.value = d.value);
      m();
    }, m = () => {
      t("change", { type: a.value, time: l.value });
    };
    return (h, i) => {
      const p = S("el-option"), g = S("el-select"), V = S("el-date-picker");
      return v(), _("div", Cl, [
        T(g, {
          modelValue: a.value,
          "onUpdate:modelValue": i[0] || (i[0] = (B) => a.value = B),
          class: "width-100 mr10",
          onChange: f
        }, {
          default: w(() => [
            (v(!0), _(A, null, W(o.value, (B) => (v(), M(p, {
              key: B.value,
              label: B.label,
              value: B.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        C("div", null, [
          e.daterange && !a.value ? (v(), M(Wt, I({
            key: 0,
            modelValue: y(l),
            "onUpdate:modelValue": i[1] || (i[1] = (B) => Ge(l) ? l.value = B : null)
          }, h.$props, { onChange: m }), null, 16, ["modelValue"])) : (v(), M(V, {
            key: 1,
            modelValue: y(l),
            "onUpdate:modelValue": i[2] || (i[2] = (B) => Ge(l) ? l.value = B : null),
            type: y(u),
            format: y(s),
            "value-format": "YYYY-MM-DD HH:mm:ss",
            placeholder: y(c),
            "disabled-date": r,
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
}, Vl = N({
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
  const r = S("selectType"), s = S("datePicker"), u = S("config-provider");
  return v(), M(u, null, {
    default: w(() => [
      e.selectType ? (v(), M(r, it(I({ key: 0 }, e.$attrs)), null, 16)) : (v(), M(s, it(I({ key: 1 }, e.$attrs)), null, 16))
    ]),
    _: 1
  });
}
const He = /* @__PURE__ */ P(Vl, [["render", Tl]]);
He.install = function(e) {
  e.component(He.name, He);
};
const ut = N({
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
    ], a = $(() => (e.decimalPoint && n.push({ name: "." }), n)), o = $({
      get: () => e.modelValue,
      set: (m) => t("update:modelValue", m)
    }), l = () => {
      oe(() => t("change", o.value));
    }, r = (m) => {
      if (e.maxlength && o.value.length >= Number(e.maxlength))
        return;
      const h = o.value.indexOf("."), i = o.value.split(".");
      i.length === 2 && (m === "." || i[1].length >= e.precision) || (o.value = `${h === 0 ? 0 : ""}${o.value}${m}`, !e.startZero && o.value.slice(0, 1) === "0" && (o.value = o.value.slice(1) + m), l());
    }, s = (m) => {
      m === "delete" ? o.value = o.value.slice(0, o.value.length - 1) : m === "clear" && (o.value = "", t("clear")), m === "confirm" ? t("confirm") : l();
    }, u = ({ key: m, name: h }) => {
      m ? s(m) : r(h);
    }, c = $(() => `${Number(4 * e.width + 20)}px`), d = $(() => `${e.width}px`), f = $(() => e.decimalPoint ? 3 : 4);
    return {
      keyboardList: a,
      clickHandleBtn: u,
      clickBtn: r,
      totalwidth: c,
      gridwidth: d,
      numberVal: o,
      zerogridend: f
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
const Bl = ut, Nl = { class: "number-keyboard mt10" }, Ml = { class: "number-ul" };
function zl(e, t, n, a, o, l) {
  const r = S("el-button");
  return v(), _("div", Nl, [
    C("ul", Ml, [
      (v(!0), _(A, null, W(e.keyboardList, (s, u) => (v(), _("li", {
        key: u,
        class: x(s.class)
      }, [
        T(r, {
          type: s.type,
          color: e.color,
          onClick: (c) => e.clickHandleBtn(s)
        }, {
          default: w(() => [
            q(K(s.name), 1)
          ]),
          _: 2
        }, 1032, ["type", "color", "onClick"])
      ], 2))), 128))
    ])
  ]);
}
const Pe = /* @__PURE__ */ P(Bl, [["render", zl], ["__scopeId", "data-v-2e1be318"]]);
Pe.install = function(e) {
  e.component(Pe.name, Pe);
};
const xl = N({
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
    const n = $({
      get: () => e.modelValue,
      set: (s) => t("update:modelValue", s)
    }), a = (s) => e.decimals ? Number(s).toFixed(e.decimals) : s, o = k(null), l = (s = !0) => {
      const u = o.value;
      if (!u)
        return;
      const c = +u.innerText, d = +n.value / 200, f = s && c < Number(n.value) || !s && c > Number(n.value);
      s && c > e.end || c < e.start || (f ? r(u, s ? c + d : c - d, s) : u.interText = a(n.value));
    }, r = (s, u, c = !0) => {
      const d = u < e.start ? e.start : `${e.decimals ? u : Math.floor(u)}`, f = u > e.end ? e.end : `${e.decimals ? u : Math.ceil(u)}`;
      s.innerText = a(c ? f : d);
      const m = setTimeout(() => {
        clearTimeout(m), c ? l() : l(!1);
      }, 5);
    };
    return _e(() => {
      o.value && e.autoinit && l();
    }), Vt(() => {
      if (e.autoinit) {
        const s = +o.value.innerText;
        l(s < Number(n.value));
      }
    }), { textValue: n, spanText: o, setDeimals: a };
  }
}), Hl = { class: "auto-counter" }, Pl = { class: "mr5" }, Dl = { class: "ml5" };
function Al(e, t, n, a, o, l) {
  return v(), _("div", Hl, [
    C("span", Pl, K(e.prefix), 1),
    C("span", {
      class: "span-text",
      ref: "spanText"
    }, K(e.autoinit ? e.setDeimals(e.start) : e.setDeimals(e.textValue)), 513),
    C("span", Dl, K(e.suffix), 1)
  ]);
}
const De = /* @__PURE__ */ P(xl, [["render", Al]]);
De.install = function(e) {
  e.component(De.name, De);
};
const Ol = N({
  name: "KCollapseButton",
  components: { ElIcon: Je, CaretLeft: gn, CaretRight: kn },
  props: {
    style: { type: Object, default: () => ({}) },
    position: { type: String, default: "right" }
  },
  emits: ["click"],
  setup(e, { emit: t, slots: n }) {
    const a = k(!1), o = k(null);
    _e(() => {
      const { parentNode: s } = o.value;
      s.style.position = "relative", s.style.overflow = "initial";
    });
    const l = $(() => {
      const { clientWidth: s, clientHeight: u } = o.value || {}, {
        top: c,
        right: d,
        width: f,
        height: m,
        left: h,
        bottom: i
      } = e.style, p = {
        right: {
          top: c ?? "50%",
          right: d ?? `-${s}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: c ? "0px" : `-${Math.ceil(u / 2)}px`
        },
        left: {
          top: c ?? "50%",
          left: h ?? `-${s}px`,
          borderRadius: "5px 0 0 5px",
          marginTop: c ? "0px" : `-${Math.ceil(u / 2)}px`
        },
        top: {
          left: h ?? "50%",
          marginLeft: h ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(s / 2)}px` : "0px",
          top: c ?? (n == null ? void 0 : n.default) ? `-${u}px` : `-${Math.ceil(u / 2 + s / 2)}px`,
          borderRadius: n != null && n.default ? "5px 5px 0 0" : "0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(-90deg)"
        },
        bottom: {
          left: h ?? "50%",
          bottom: i ?? (n == null ? void 0 : n.default) ? `-${u}px` : `-${Math.ceil(u / 2 + s / 2)}px`,
          marginLeft: h ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(s / 2)}px` : "0px",
          borderRadius: n != null && n.default ? "0 0 5px 5px" : " 0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(90deg)"
        }
      };
      return {
        width: f ?? (n == null ? void 0 : n.default) ? "" : "10px",
        height: m ?? (n == null ? void 0 : n.default) ? "" : "68px",
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
function Il(e, t, n, a, o, l) {
  const r = S("CaretRight"), s = S("CaretLeft"), u = S("el-icon");
  return v(), _("div", {
    class: "collapse-button flex-center pointer",
    style: Y(e.collapseStyle),
    ref: "collapse",
    onClick: t[0] || (t[0] = (...c) => e.clickHandle && e.clickHandle(...c))
  }, [
    E(e.$slots, "default", {}, () => [
      T(u, {
        size: 18,
        color: "#999999"
      }, {
        default: w(() => [
          e.isCollapse ? (v(), M(r, { key: 0 })) : (v(), M(s, { key: 1 }))
        ]),
        _: 1
      })
    ], !0)
  ], 4);
}
const Ae = /* @__PURE__ */ P(Ol, [["render", Il], ["__scopeId", "data-v-447ed96e"]]);
Ae.install = function(e) {
  e.component(Ae.name, Ae);
};
const Ue = {
  KButton: Ce,
  KInput: ve,
  KInputNumber: Ee,
  KTable: Ve,
  KTableV2: Te,
  KPage: ue,
  KBatchTable: be,
  KDialog: Be,
  KBreadcrumb: Ne,
  KTabs: Me,
  KPicker: ze,
  KTooltip: xe,
  KDatePicker: He,
  KNumberKeyboard: Pe,
  KVirtualList: ge,
  KAutoCounter: De,
  KCollapseButton: Ae,
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
  }), Object.keys(me).forEach((t) => {
    e.directive(t, me[t]);
  });
};
export {
  De as KAutoCounter,
  be as KBatchTable,
  Ne as KBreadcrumb,
  Ce as KButton,
  Ae as KCollapseButton,
  He as KDatePicker,
  Be as KDialog,
  ve as KInput,
  Ee as KInputNumber,
  Pe as KNumberKeyboard,
  ue as KPage,
  ze as KPicker,
  Ve as KTable,
  Te as KTableV2,
  Me as KTabs,
  xe as KTooltip,
  Ue as KUI,
  ge as KVirtualList,
  me as directives
};
