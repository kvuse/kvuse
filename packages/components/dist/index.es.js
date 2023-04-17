import { defineComponent as B, ref as _, computed as y, resolveComponent as V, openBlock as g, createBlock as x, mergeProps as O, withModifiers as nn, withCtx as S, renderSlot as N, createElementBlock as $, createCommentVNode as j, withKeys as Tt, createSlots as fe, createElementVNode as C, watchEffect as ke, watch as q, nextTick as ae, normalizeClass as z, createVNode as T, unref as w, getCurrentScope as an, onScopeDispose as on, getCurrentInstance as pe, onMounted as he, warn as ln, inject as Z, provide as tt, onBeforeUnmount as rn, toRef as Re, Transition as sn, withDirectives as un, normalizeStyle as Y, vShow as cn, Fragment as A, reactive as Mt, onUpdated as Bt, resolveDynamicComponent as We, useSlots as dn, Text as fn, renderList as Q, toDisplayString as K, createTextVNode as X, toRefs as pn, isRef as Ge, normalizeProps as ut, useCssVars as xt, onUnmounted as hn } from "vue";
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
          dialog: d,
          focus: m,
          long: c,
          any: f,
          fast: h
        } = n.modifiers;
        if (!u && !c) {
          document.removeEventListener("keydown", e.handler);
          return;
        }
        if (f && n.arg) {
          n.arg(a);
          return;
        }
        const v = h ? o - t > 30 : !0, p = document.querySelector(".el-popup-parent--hidden") || document.querySelector(".is-message-box");
        if (t = o, p && !d)
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
const P = (e, n) => {
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
  return g(), x(s, O({
    disabled: !e.buttonStatus || e.disabled,
    style: e.buttonStyle,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: nn(e.onclick, ["stop"])
  }), {
    default: S(() => [
      N(e.$slots, "default"),
      e.iconLock ? (g(), $("i", vn)) : j("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "style", "click-state", "onClick"]);
}
const Ee = /* @__PURE__ */ P(mn, [["render", gn]]);
Ee.install = function(e) {
  e.component(Ee.name, Ee);
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
      let c = m;
      if (e.type === "number") {
        if (c = c.replace(/[^\d.]/g, ""), c = c.replace(/^\./g, ""), c = c.replace(/\.{2,}/g, "."), c = c.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), c.indexOf(".") < 0 && c !== "" && c.substr(0, 1) === "0" && c.length === 2 && (c = c.substr(1, c.length)), c !== "")
          if (c.indexOf(".") > 0) {
            if (e.point) {
              const f = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
              c = c.match(f)[0] || null;
            }
          } else
            c === "." && (c = "");
      } else
        e.type === "integer" ? c = s(c.replace(/[^\d]/g, "")) : e.type === "intText" && (c = c.replace(/[^\w]/g, ""));
      t.max !== void 0 && c && Number(c) > Number(t.max) && (c = t.max), t.min !== void 0 && c && Number(c) < Number(t.min) && (c = t.min), n("update:modelValue", c);
    }, u = () => {
      o.value && (o.value = !1, l.value && n("enter")), d();
    }, i = (m) => {
      n("change", m);
    }, d = () => {
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
  return g(), x(s, O({
    modelValue: e.inputValue,
    "onUpdate:modelValue": n[0] || (n[0] = (r) => e.inputValue = r),
    modelModifiers: { trim: !0 }
  }, e.$attrs, {
    onKeyup: Tt(e.searchContent, ["enter"]),
    onChange: e.changeValue
  }), fe({ _: 2 }, [
    e.$slots.append ? {
      name: "append",
      fn: S(() => [
        N(e.$slots, "append")
      ]),
      key: "0"
    } : void 0,
    e.$slots.prepend ? {
      name: "prepend",
      fn: S(() => [
        N(e.$slots, "prepend")
      ]),
      key: "1"
    } : void 0,
    e.$slots.prefix ? {
      name: "prefix",
      fn: S(() => [
        N(e.$slots, "prefix")
      ]),
      key: "2"
    } : void 0,
    e.$slots.suffix ? {
      name: "suffix",
      fn: S(() => [
        N(e.$slots, "suffix")
      ]),
      key: "3"
    } : void 0
  ]), 1040, ["modelValue", "onKeyup", "onChange"]);
}
const ye = /* @__PURE__ */ P(bn, [["render", yn]]);
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
}, Nn = /* @__PURE__ */ C(
  "path",
  {
    fill: "currentColor",
    d: "M384 192v640l384-320.064z"
  },
  null,
  -1
  /* HOISTED */
), Tn = [
  Nn
];
function Mn(e, n, t, a, o, l) {
  return g(), $("svg", Vn, Tn);
}
var Bn = /* @__PURE__ */ se(En, [["render", Mn], ["__file", "caret-right.vue"]]), xn = {
  name: "Delete"
}, zn = {
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
function Pn(e, n, t, a, o, l) {
  return g(), $("svg", zn, In);
}
var Dn = /* @__PURE__ */ se(xn, [["render", Pn], ["__file", "delete.vue"]]), On = {
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
      set: (p) => {
        n("update:modelValue", p);
      }
    }), u = (p) => n("blur", p), i = (p) => n("focus", p), d = (p) => n("enter", p), m = (p) => {
      ae(() => {
        const b = p === "" ? void 0 : Number(p);
        (!Number.isNaN(b) || p === "") && v(b);
      });
    }, c = (p) => {
      o.value = !p, a.value = p;
    }, f = _(-1);
    ke(() => {
      t.value = e.modelValue;
    }), q(() => f.value, (p) => {
      p < 0 && (r.value = e.modelValue, m(t.value));
    }, { immediate: !0 });
    const h = (p) => {
      const b = p === "increase", k = b ? s.value : l.value;
      if (e.disabled || k)
        return;
      const H = o.value ? 0 : r.value, U = a.value ? t.value : H, W = b ? U + e.step : U - e.step;
      v(W);
    }, v = (p) => {
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
      handleKeyUp: d,
      handleInputChange: m,
      handleInput: c,
      clickBtnHandle: h
    };
  }
});
function ia(e, n, t, a, o, l) {
  const s = V("minus"), r = V("el-icon"), u = V("plus"), i = V("k-input");
  return g(), $("div", {
    class: z(["el-input-number", { "is-disabled": e.disabled }, { "is-without-controls": !e.controls }, e.size ? "el-input-number--" + e.size : ""])
  }, [
    e.controls ? (g(), $("span", {
      key: 0,
      class: z(["el-input-number__decrease", { "is-disabled": e.minDisabled }]),
      role: "button",
      onClick: n[0] || (n[0] = (d) => e.clickBtnHandle("decrease"))
    }, [
      T(r, { class: "el-input__icon" }, {
        default: S(() => [
          T(s)
        ]),
        _: 1
      })
    ], 2)) : j("", !0),
    e.controls ? (g(), $("span", {
      key: 1,
      class: z(["el-input-number__increase", { "is-disabled": e.maxDisabled }]),
      role: "button",
      onClick: n[1] || (n[1] = (d) => e.clickBtnHandle("increase"))
    }, [
      T(r, { class: "el-input__icon" }, {
        default: S(() => [
          T(u)
        ]),
        _: 1
      })
    ], 2)) : j("", !0),
    T(i, O({
      ref: "input",
      modelValue: e.currentValue,
      "onUpdate:modelValue": n[2] || (n[2] = (d) => e.currentValue = d),
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
const Ve = /* @__PURE__ */ P(ua, [["render", ia]]);
Ve.install = function(e) {
  e.component(Ve.name, Ve);
};
var it;
const nt = typeof window < "u", ie = (e) => typeof e == "number", ca = (e) => typeof e == "string", da = () => {
};
nt && ((it = window == null ? void 0 : window.navigator) != null && it.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function zt(e) {
  return typeof e == "function" ? e() : w(e);
}
function fa(e) {
  return e;
}
function Ht(e) {
  return an() ? (on(e), !0) : !1;
}
function pa(e, n = !0) {
  pe() ? he(e) : n ? e() : ae(e);
}
function It(e) {
  var n;
  const t = zt(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const Pt = nt ? window : void 0;
function qe(...e) {
  let n, t, a, o;
  if (ca(e[0]) || Array.isArray(e[0]) ? ([t, a, o] = e, n = Pt) : [n, t, a, o] = e, !n)
    return da;
  Array.isArray(t) || (t = [t]), Array.isArray(a) || (a = [a]);
  const l = [], s = () => {
    l.forEach((d) => d()), l.length = 0;
  }, r = (d, m, c, f) => (d.addEventListener(m, c, f), () => d.removeEventListener(m, c, f)), u = q(() => [It(n), zt(o)], ([d, m]) => {
    s(), d && l.push(...t.flatMap((c) => a.map((f) => r(d, c, f, m))));
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
  const a = t, { window: o = Pt } = a, l = ga(a, ["window"]);
  let s;
  const r = ha(() => o && "ResizeObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, i = q(() => It(e), (m) => {
    u(), r.value && o && m && (s = new ResizeObserver(n), s.observe(m, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), i();
  };
  return Ht(d), {
    isSupported: r,
    stop: d
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
const Va = (e) => e === void 0, Na = (e) => at(e) ? !Number.isNaN(Number(e)) : !1, gt = (e) => Object.keys(e);
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
    const t = at(e) ? new Dt(`[${e}] ${n}`) : e;
    console.warn(t);
  }
}
const Ma = "utils/dom/style";
function Qe(e, n = "px") {
  if (!e)
    return "";
  if (ie(e) || Na(e))
    return `${e}${n}`;
  if (at(e))
    return e;
  $e(Ma, "binding value must be a string or number");
}
const Ot = "__epPropKey", le = (e) => e, Ba = (e) => ot(e) && !!e[Ot], At = (e, n) => {
  if (!ot(e) || Ba(e))
    return e;
  const { values: t, required: a, default: o, type: l, validator: s } = e, u = {
    type: l,
    required: !!a,
    validator: t || s ? (i) => {
      let d = !1, m = [];
      if (t && (m = Array.from(t), vt(e, "default") && m.push(o), d || (d = m.includes(i))), s && (d || (d = s(i))), !d && m.length > 0) {
        const c = [...new Set(m)].map((f) => JSON.stringify(f)).join(", ");
        ln(`Invalid prop: validation failed${n ? ` for prop "${n}"` : ""}. Expected one of [${c}], got value ${JSON.stringify(i)}.`);
      }
      return d;
    } : void 0,
    [Ot]: !0
  };
  return vt(e, "default") && (u.default = o), u;
}, me = (e) => Ea(Object.entries(e).map(([n, t]) => [
  n,
  At(t, n)
])), bt = le([
  String,
  Object,
  Function
]), Le = (e, n) => {
  if (e.install = (t) => {
    for (const a of [e, ...Object.values(n ?? {})])
      t.component(a.name, a);
  }, n)
    for (const [t, a] of Object.entries(n))
      e[t] = a;
  return e;
}, xa = (e) => (e.install = Sa, e), za = ["", "default", "small", "large"], Ha = ({ from: e, replacement: n, scope: t, version: a, ref: o, type: l = "API" }, s) => {
  q(() => w(s), (r) => {
    r && $e(t, `[${l}] ${e} is about to be deprecated in version ${a}, please use ${n} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, Ia = Symbol("localeContextKey"), yt = "el", Pa = "is-", oe = (e, n, t, a, o) => {
  let l = `${e}-${n}`;
  return t && (l += `-${t}`), a && (l += `__${a}`), o && (l += `--${o}`), l;
}, Rt = Symbol("namespaceContextKey"), Da = (e) => {
  const n = e || Z(Rt, _(yt));
  return y(() => w(n) || yt);
}, ve = (e, n) => {
  const t = Da(n);
  return {
    namespace: t,
    b: (v = "") => oe(t.value, e, v, "", ""),
    e: (v) => v ? oe(t.value, e, "", v, "") : "",
    m: (v) => v ? oe(t.value, e, "", "", v) : "",
    be: (v, p) => v && p ? oe(t.value, e, v, p, "") : "",
    em: (v, p) => v && p ? oe(t.value, e, "", v, p) : "",
    bm: (v, p) => v && p ? oe(t.value, e, v, "", p) : "",
    bem: (v, p, b) => v && p && b ? oe(t.value, e, v, p, b) : "",
    is: (v, ...p) => {
      const b = p.length >= 1 ? p[0] : !0;
      return v && b ? `${Pa}${v}` : "";
    },
    cssVar: (v) => {
      const p = {};
      for (const b in v)
        v[b] && (p[`--${t.value}-${b}`] = v[b]);
      return p;
    },
    cssVarName: (v) => `--${t.value}-${v}`,
    cssVarBlock: (v) => {
      const p = {};
      for (const b in v)
        v[b] && (p[`--${t.value}-${e}-${b}`] = v[b]);
      return p;
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
  values: za,
  required: !1
}), Kt = Symbol("size"), Aa = () => {
  const e = Z(Kt, {});
  return y(() => w(e.size) || "");
}, jt = Symbol(), Fe = _();
function Yt(e, n = void 0) {
  const t = pe() ? Z(jt, Fe) : Fe;
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
  }), (t || !Fe.value) && (Fe.value = r.value), r;
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
    type: le(Object)
  },
  size: Lt,
  button: {
    type: le(Object)
  },
  experimentalFeatures: {
    type: le(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: le(Object)
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
    return () => N(n, "default", { config: t == null ? void 0 : t.value });
  }
}), Ut = Le(ja);
var ge = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, o] of n)
    t[a] = o;
  return t;
};
const Ya = me({
  size: {
    type: le([Number, String])
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
      N(o.$slots, "default")
    ], 16));
  }
});
var Ga = /* @__PURE__ */ ge(Wa, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Xe = Le(Ga), lt = Symbol("formContextKey"), Wt = Symbol("formItemContextKey"), qa = (e, n = {}) => {
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
    t || Ta(eo, "can not inject scrollbar context");
    const o = _(), l = _(), s = _({}), r = _(!1);
    let u = !1, i = !1, d = nt ? document.onselectstart : null;
    const m = y(() => Xa[n.vertical ? "vertical" : "horizontal"]), c = y(() => Za({
      size: n.size,
      move: n.move,
      bar: m.value
    })), f = y(() => o.value[m.value.offset] ** 2 / t.wrapElement[m.value.scrollSize] / n.ratio / l.value[m.value.offset]), h = (M) => {
      var E;
      if (M.stopPropagation(), M.ctrlKey || [1, 2].includes(M.button))
        return;
      (E = window.getSelection()) == null || E.removeAllRanges(), p(M);
      const I = M.currentTarget;
      I && (s.value[m.value.axis] = I[m.value.offset] - (M[m.value.client] - I.getBoundingClientRect()[m.value.direction]));
    }, v = (M) => {
      if (!l.value || !o.value || !t.wrapElement)
        return;
      const E = Math.abs(M.target.getBoundingClientRect()[m.value.direction] - M[m.value.client]), I = l.value[m.value.offset] / 2, F = (E - I) * 100 * f.value / o.value[m.value.offset];
      t.wrapElement[m.value.scroll] = F * t.wrapElement[m.value.scrollSize] / 100;
    }, p = (M) => {
      M.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", b), document.addEventListener("mouseup", k), d = document.onselectstart, document.onselectstart = () => !1;
    }, b = (M) => {
      if (!o.value || !l.value || u === !1)
        return;
      const E = s.value[m.value.axis];
      if (!E)
        return;
      const I = (o.value.getBoundingClientRect()[m.value.direction] - M[m.value.client]) * -1, F = l.value[m.value.offset] - E, J = (I - F) * 100 * f.value / o.value[m.value.offset];
      t.wrapElement[m.value.scroll] = J * t.wrapElement[m.value.scrollSize] / 100;
    }, k = () => {
      u = !1, s.value[m.value.axis] = 0, document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", k), W(), i && (r.value = !1);
    }, H = () => {
      i = !1, r.value = !!n.size;
    }, U = () => {
      i = !0, r.value = u;
    };
    rn(() => {
      W(), document.removeEventListener("mouseup", k);
    });
    const W = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return qe(Re(t, "scrollbarElement"), "mousemove", H), qe(Re(t, "scrollbarElement"), "mouseleave", U), (M, E) => (g(), x(sn, {
      name: w(a).b("fade"),
      persisted: ""
    }, {
      default: S(() => [
        un(C("div", {
          ref_key: "instance",
          ref: o,
          class: z([w(a).e("bar"), w(a).is(w(m).key)]),
          onMousedown: v
        }, [
          C("div", {
            ref_key: "thumb",
            ref: l,
            class: z(w(a).e("thumb")),
            style: Y(w(c)),
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
      T(_t, {
        move: a.value,
        ratio: s.ratioX,
        size: s.width,
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      T(_t, {
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
    type: le([String, Object, Array]),
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
    const r = _(), u = _(), i = _(), d = _("0"), m = _("0"), c = _(), f = _(1), h = _(1), v = y(() => {
      const E = {};
      return a.height && (E.height = Qe(a.height)), a.maxHeight && (E.maxHeight = Qe(a.maxHeight)), [a.wrapStyle, E];
    }), p = y(() => [
      a.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !a.native }
    ]), b = y(() => [o.e("view"), a.viewClass]), k = () => {
      var E;
      u.value && ((E = c.value) == null || E.handleScroll(u.value), t("scroll", {
        scrollTop: u.value.scrollTop,
        scrollLeft: u.value.scrollLeft
      }));
    };
    function H(E, I) {
      ot(E) ? u.value.scrollTo(E) : ie(E) && ie(I) && u.value.scrollTo(E, I);
    }
    const U = (E) => {
      if (!ie(E)) {
        $e(Ze, "value must be a number");
        return;
      }
      u.value.scrollTop = E;
    }, W = (E) => {
      if (!ie(E)) {
        $e(Ze, "value must be a number");
        return;
      }
      u.value.scrollLeft = E;
    }, M = () => {
      if (!u.value)
        return;
      const E = u.value.offsetHeight - ce, I = u.value.offsetWidth - ce, F = E ** 2 / u.value.scrollHeight, J = I ** 2 / u.value.scrollWidth, R = Math.max(F, a.minSize), ue = Math.max(J, a.minSize);
      f.value = F / (E - F) / (R / (E - R)), h.value = J / (I - J) / (ue / (I - ue)), m.value = R + ce < E ? `${R}px` : "", d.value = ue + ce < I ? `${ue}px` : "";
    };
    return q(() => a.noresize, (E) => {
      E ? (l == null || l(), s == null || s()) : ({ stop: l } = ba(i, M), s = qe("resize", M));
    }, { immediate: !0 }), q(() => [a.maxHeight, a.height], () => {
      a.native || ae(() => {
        var E;
        M(), u.value && ((E = c.value) == null || E.handleScroll(u.value));
      });
    }), tt(qt, Mt({
      scrollbarElement: r,
      wrapElement: u
    })), he(() => {
      a.native || ae(() => {
        M();
      });
    }), Bt(() => M()), n({
      wrapRef: u,
      update: M,
      scrollTo: H,
      setScrollTop: U,
      setScrollLeft: W,
      handleScroll: k
    }), (E, I) => (g(), $("div", {
      ref_key: "scrollbarRef",
      ref: r,
      class: z(w(o).b())
    }, [
      C("div", {
        ref_key: "wrapRef",
        ref: u,
        class: z(w(p)),
        style: Y(w(v)),
        onScroll: k
      }, [
        (g(), x(We(E.tag), {
          ref_key: "resizeRef",
          ref: i,
          class: z(w(b)),
          style: Y(E.viewStyle)
        }, {
          default: S(() => [
            N(E.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      E.native ? j("v-if", !0) : (g(), x(oo, {
        key: 0,
        ref_key: "barRef",
        ref: c,
        height: m.value,
        width: d.value,
        always: E.always,
        "ratio-x": h.value,
        "ratio-y": f.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var io = /* @__PURE__ */ ge(uo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const co = Le(io), Qt = Symbol("buttonGroupContextKey"), fo = (e, n) => {
  Ha({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, y(() => e.type === "text"));
  const t = Z(Qt, void 0), a = Yt("button"), { form: o } = Qa(), l = qa(y(() => t == null ? void 0 : t.size)), s = Gt(), r = _(), u = dn(), i = y(() => e.type || (t == null ? void 0 : t.type) || ""), d = y(() => {
    var f, h, v;
    return (v = (h = e.autoInsertSpace) != null ? h : (f = a.value) == null ? void 0 : f.autoInsertSpace) != null ? v : !1;
  }), m = y(() => {
    var f;
    const h = (f = u.default) == null ? void 0 : f.call(u);
    if (d.value && (h == null ? void 0 : h.length) === 1) {
      const v = h[0];
      if ((v == null ? void 0 : v.type) === fn) {
        const p = v.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(p.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: l,
    _type: i,
    _ref: r,
    shouldAddSpace: m,
    handleClick: (f) => {
      e.nativeType === "reset" && (o == null || o.resetFields()), n("click", f);
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
  }
}), mo = {
  click: (e) => e instanceof MouseEvent
};
function D(e, n) {
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
    r: D(e, 255) * 255,
    g: D(n, 255) * 255,
    b: D(t, 255) * 255
  };
}
function wt(e, n, t) {
  e = D(e, 255), n = D(n, 255), t = D(t, 255);
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
function Ke(e, n, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (n - e) * (6 * t) : t < 1 / 2 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e;
}
function yo(e, n, t) {
  var a, o, l;
  if (e = D(e, 360), n = D(n, 100), t = D(t, 100), n === 0)
    o = t, l = t, a = t;
  else {
    var s = t < 0.5 ? t * (1 + n) : t + n - t * n, r = 2 * t - s;
    a = Ke(r, s, e + 1 / 3), o = Ke(r, s, e), l = Ke(r, s, e - 1 / 3);
  }
  return { r: a * 255, g: o * 255, b: l * 255 };
}
function $t(e, n, t) {
  e = D(e, 255), n = D(n, 255), t = D(t, 255);
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
  e = D(e, 360) * 6, n = D(n, 100), t = D(t, 100);
  var a = Math.floor(e), o = e - a, l = t * (1 - n), s = t * (1 - o * n), r = t * (1 - (1 - o) * n), u = a % 6, i = [t, s, l, l, r, t][u], d = [r, t, t, s, l, l][u], m = [l, l, r, t, t, s][u];
  return { r: i * 255, g: d * 255, b: m * 255 };
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
var Co = "[-\\+]?\\d+%?", Eo = "[-\\+]?\\d*\\.\\d+%?", ne = "(?:".concat(Eo, ")|(?:").concat(Co, ")"), je = "[\\s|\\(]+(".concat(ne, ")[,|\\s]+(").concat(ne, ")[,|\\s]+(").concat(ne, ")\\s*\\)?"), Ye = "[\\s|\\(]+(".concat(ne, ")[,|\\s]+(").concat(ne, ")[,|\\s]+(").concat(ne, ")[,|\\s]+(").concat(ne, ")\\s*\\)?"), G = {
  CSS_UNIT: new RegExp(ne),
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
function Vo(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var n = !1;
  if (et[e])
    e = et[e], n = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var t = G.rgb.exec(e);
  return t ? { r: t[1], g: t[2], b: t[3] } : (t = G.rgba.exec(e), t ? { r: t[1], g: t[2], b: t[3], a: t[4] } : (t = G.hsl.exec(e), t ? { h: t[1], s: t[2], l: t[3] } : (t = G.hsla.exec(e), t ? { h: t[1], s: t[2], l: t[3], a: t[4] } : (t = G.hsv.exec(e), t ? { h: t[1], s: t[2], v: t[3] } : (t = G.hsva.exec(e), t ? { h: t[1], s: t[2], v: t[3], a: t[4] } : (t = G.hex8.exec(e), t ? {
    r: L(t[1]),
    g: L(t[2]),
    b: L(t[3]),
    a: St(t[4]),
    format: n ? "name" : "hex8"
  } : (t = G.hex6.exec(e), t ? {
    r: L(t[1]),
    g: L(t[2]),
    b: L(t[3]),
    format: n ? "name" : "hex"
  } : (t = G.hex4.exec(e), t ? {
    r: L(t[1] + t[1]),
    g: L(t[2] + t[2]),
    b: L(t[3] + t[3]),
    a: St(t[4] + t[4]),
    format: n ? "name" : "hex8"
  } : (t = G.hex3.exec(e), t ? {
    r: L(t[1] + t[1]),
    g: L(t[2] + t[2]),
    b: L(t[3] + t[3]),
    format: n ? "name" : "hex"
  } : !1)))))))));
}
function ee(e) {
  return !!G.CSS_UNIT.exec(String(e));
}
var No = (
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
        return "".concat(Math.round(D(t, 255) * 100), "%");
      };
      return {
        r: n(this.r),
        g: n(this.g),
        b: n(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var n = function(t) {
        return Math.round(D(t, 255) * 100);
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
function To(e) {
  const n = Gt(), t = ve("button");
  return y(() => {
    let a = {};
    const o = e.color;
    if (o) {
      const l = new No(o), s = e.dark ? l.tint(20).toString() : te(l, 20);
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
const Mo = ["aria-disabled", "disabled", "autofocus", "type"], Bo = B({
  name: "ElButton"
}), xo = /* @__PURE__ */ B({
  ...Bo,
  props: Je,
  emits: mo,
  setup(e, { expose: n, emit: t }) {
    const a = e, o = To(a), l = ve("button"), { _ref: s, _size: r, _type: u, _disabled: i, shouldAddSpace: d, handleClick: m } = fo(a, t);
    return n({
      ref: s,
      size: r,
      type: u,
      disabled: i,
      shouldAddSpace: d
    }), (c, f) => (g(), $("button", {
      ref_key: "_ref",
      ref: s,
      class: z([
        w(l).b(),
        w(l).m(w(u)),
        w(l).m(w(r)),
        w(l).is("disabled", w(i)),
        w(l).is("loading", c.loading),
        w(l).is("plain", c.plain),
        w(l).is("round", c.round),
        w(l).is("circle", c.circle),
        w(l).is("text", c.text),
        w(l).is("link", c.link),
        w(l).is("has-bg", c.bg)
      ]),
      "aria-disabled": w(i) || c.loading,
      disabled: w(i) || c.loading,
      autofocus: c.autofocus,
      type: c.nativeType,
      style: Y(w(o)),
      onClick: f[0] || (f[0] = (...h) => w(m) && w(m)(...h))
    }, [
      c.loading ? (g(), $(A, { key: 0 }, [
        c.$slots.loading ? N(c.$slots, "loading", { key: 0 }) : (g(), x(w(Xe), {
          key: 1,
          class: z(w(l).is("loading"))
        }, {
          default: S(() => [
            (g(), x(We(c.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : c.icon || c.$slots.icon ? (g(), x(w(Xe), { key: 1 }, {
        default: S(() => [
          c.icon ? (g(), x(We(c.icon), { key: 0 })) : N(c.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : j("v-if", !0),
      c.$slots.default ? (g(), $("span", {
        key: 2,
        class: z({ [w(l).em("text", "expand")]: w(d) })
      }, [
        N(c.$slots, "default")
      ], 2)) : j("v-if", !0)
    ], 14, Mo));
  }
});
var zo = /* @__PURE__ */ ge(xo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const Ho = {
  size: Je.size,
  type: Je.type
}, Io = B({
  name: "ElButtonGroup"
}), Po = /* @__PURE__ */ B({
  ...Io,
  props: Ho,
  setup(e) {
    const n = e;
    tt(Qt, Mt({
      size: Re(n, "size"),
      type: Re(n, "type")
    }));
    const t = ve("button");
    return (a, o) => (g(), $("div", {
      class: z(`${w(t).b("group")}`)
    }, [
      N(a.$slots, "default")
    ], 2));
  }
});
var Zt = /* @__PURE__ */ ge(Po, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const Do = Le(zo, {
  ButtonGroup: Zt
});
xa(Zt);
function Oo(e) {
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
const en = /* @__PURE__ */ Oo(Jt);
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
  components: { ElConfigProvider: Ut },
  emits: ["update:modelValue", "update:size", "current-change", "size-change", "change"],
  setup(e, { emit: n }) {
    const t = en, a = y(() => {
      const { total: u, size: i, showSize: d } = e;
      return d ? !0 : u > i;
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
}), Ro = {
  key: 0,
  class: "page-right mt20"
};
function Fo(e, n, t, a, o, l) {
  const s = V("el-pagination"), r = V("el-config-provider");
  return e.showPage ? (g(), $("div", Ro, [
    T(r, { locale: e.locale }, {
      default: S(() => [
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
  ])) : j("", !0);
}
const de = /* @__PURE__ */ P(Ao, [["render", Fo], ["__scopeId", "data-v-77c509db"]]);
de.install = function(e) {
  e.component(de.name, de);
};
const Lo = B({
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
      set: (s) => n("update:tableData", s)
    }), a = y({
      get: () => e.modelValue,
      set: (s) => n("update:modelValue", s)
    });
    return {
      currentPage: a,
      tableDataList: t,
      changePage: (s) => n("current-change", s),
      sortChange: ({ column: s, order: r }) => {
        const u = r === "ascending" ? 1 : 0;
        n("sort-change", {
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
}), Ko = { key: 2 };
function jo(e, n, t, a, o, l) {
  const s = V("el-table-column"), r = V("el-table"), u = V("pagination");
  return g(), $(A, null, [
    T(r, O({
      data: e.tableDataList,
      style: { width: "100%" },
      class: "mt20",
      "header-cell-style": e.headerCellStyle
    }, e.$attrs, {
      "empty-text": e.emptyText,
      onSortChange: e.sortChange
    }), fe({
      default: S(() => [
        (g(!0), $(A, null, Q(e.tableColumn, (i) => (g(), x(s, {
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
            e.$slots.default ? N(e.$slots, "default", {
              key: 0,
              item: d.row,
              row: d.row,
              index: d.$index
            }) : i.custom && d.$index >= 0 ? N(e.$slots, i.custom, {
              key: 1,
              item: d.row,
              row: d.row,
              index: d.$index
            }) : (g(), $("span", Ko, K(d.row[i.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          i.header ? {
            name: "header",
            fn: S(() => [
              N(e.$slots, i.header)
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
          N(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "empty-text", "onSortChange"]),
    T(u, {
      total: e.total,
      "show-size": e.showSize,
      modelValue: e.currentPage,
      "onUpdate:modelValue": n[0] || (n[0] = (i) => e.currentPage = i),
      onCurrentChange: e.changePage
    }, null, 8, ["total", "show-size", "modelValue", "onCurrentChange"])
  ], 64);
}
const Ne = /* @__PURE__ */ P(Lo, [["render", jo]]);
Ne.install = function(e) {
  e.component(Ne.name, Ne);
};
const Yo = B({
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
      var p, b;
      return ((p = document.querySelector(".table-row")) == null ? void 0 : p.offsetHeight) ?? ((b = document.querySelector(".list-item")) == null ? void 0 : b.offsetHeight) ?? 10;
    }, r = () => {
      const { clientHeight: p = 100 } = o.value.wrapRef || {};
      return Math.ceil(p / s()) + t.value;
    }, u = _(100);
    he(() => {
      l.value = Number(r()) || 10, u.value = e.data.length * s();
    });
    const i = (p) => Math.floor(p / s()), d = (p) => Math.ceil(p * s()), m = (p) => p >= t.value && p <= l.value, c = y(() => e.data.filter((p, b) => m(b)));
    return q(() => e.data, (p) => {
      p.length || (t.value = 0, a.value = 0), e.data.forEach((b, k) => {
        b.rowIndex = k;
      }), ae(() => {
        u.value = e.data.length * s();
      });
    }), {
      startIndex: t,
      endIndex: l,
      startOffset: a,
      viewport: o,
      onScroll: (p) => {
        const { scrollTop: b, clientHeight: k } = o.value.wrapRef;
        t.value = i(b), a.value = d(t.value), l.value = r();
        const H = Math.abs(u.value - k - b);
        n("scroll", { distance: H, ...p });
      },
      showViewRanges: m,
      containHeight: u,
      listRanges: c,
      rowClick: (p, b) => {
        n("row-click", p, b);
      },
      rowClassHandle: (p, b) => typeof e.rowClassName == "function" ? e.rowClassName({ row: p, rowIndex: b }) : e.rowClassName
    };
  }
}), Uo = {
  class: "virtual-list",
  "data-testid": "virtual-list"
}, Wo = ["onClick"];
function Go(e, n, t, a, o, l) {
  const s = V("el-scrollbar");
  return g(), x(s, O({
    height: e.height,
    ref: "viewport"
  }, e.$attrs, { onScroll: e.onScroll }), {
    default: S(() => [
      C("div", Uo, [
        C("div", {
          class: "list-contain",
          style: Y({ height: `${e.containHeight}px` })
        }, null, 4),
        C("div", {
          class: "list-content",
          style: Y({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          (g(!0), $(A, null, Q(e.listRanges, (r, u) => (g(), $("div", {
            key: u,
            class: z(["list-item", e.rowClassHandle(r, r.rowIndex)]),
            style: Y(e.rowStyle),
            onClick: (i) => e.rowClick(r, r.rowIndex)
          }, [
            N(e.$slots, "default", {
              row: r,
              index: r.rowIndex
            }, () => [
              X(K(r.name), 1)
            ], !0)
          ], 14, Wo))), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["height", "onScroll"]);
}
const _e = /* @__PURE__ */ P(Yo, [["render", Go], ["__scopeId", "data-v-e53aecaa"]]);
_e.install = function(e) {
  e.component(_e.name, _e);
};
const qo = {
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
const Qo = B({
  name: "KTableV2",
  components: { virtualList: _e },
  props: qo,
  emits: ["sort-change"],
  setup(e, { emit: n }) {
    const t = y(() => e.tableColumn.map((c, f) => ({ ...c, keyId: f }))), a = _(null), o = (c) => {
      var k, H, U, W;
      let f = {};
      const {
        align: h,
        width: v,
        fixed: p,
        minWidth: b
      } = c;
      if (h && (f["text-center"] = `${h}`), b && (f["min-width"] = `${b}`), v && (f = {
        ...f,
        width: `${v}`,
        flex: "inherit",
        "flex-shrink": 0
      }), p) {
        const M = e.tableColumn.findIndex((I) => I.prop === c.prop), E = e.tableColumn.length;
        if (f = {
          ...f,
          position: "sticky",
          background: "#ffffff",
          "z-index": 5
        }, p === "left") {
          const I = (k = e.tableColumn.filter((R) => R.fixed === "left")) == null ? void 0 : k.length;
          let F = 0;
          M > 0 && M < E - 1 && I > 1 && (F = (H = a.value) == null ? void 0 : H.at(M - 1).clientWidth), f.left = `${F}px`;
          let J = 0;
          e.tableColumn.forEach((R, ue) => {
            R.fixed === "left" && (J = ue);
          }), J === M && (f["box-shadow"] = "3px 0px 4px #b0a8a836");
        } else {
          const I = (U = e.tableColumn.filter((R) => R.fixed && R.fixed !== "left")) == null ? void 0 : U.length;
          let F = 0;
          M < E - 1 && I > 1 && (F = (W = a.value) == null ? void 0 : W.at(M + 1).clientWidth), e.tableColumn.findIndex((R) => R.fixed && R.fixed !== "left") === M && (f["box-shadow"] = "-3px 0 4px #b0a8a836"), f.right = `${F}px`;
        }
      }
      return f;
    }, l = _(null), s = ({ scrollLeft: c }) => {
      l.value.scrollLeft = `${c}`;
    }, r = _(null), u = _({}), i = (c, f) => {
      u.value = f, r.value = r.value === c ? null : c, n("sort-change", { column: f, sortType: r.value });
    }, d = _(null), m = (c) => {
      var f;
      return (f = d.value) == null ? void 0 : f.viewport.setScrollTop(c);
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
      virtualRef: d,
      setScrollTop: m
    };
  }
}), Xo = { class: "table-v2 el-table flex-column" }, Zo = {
  class: "table-header overflow",
  ref: "tableHeader"
}, Jo = { class: "flex table-border-bottom header-content" }, el = {
  key: 0,
  class: "table-header-sort flex-column flex-center"
}, tl = { class: "sort-wrapper" }, nl = ["onClick"], al = ["onClick"], ol = { class: "flex table-body" };
function ll(e, n, t, a, o, l) {
  const s = V("virtualList");
  return g(), $("div", Xo, [
    C("div", Zo, [
      C("div", Jo, [
        (g(!0), $(A, null, Q(e.tableColumn, (r, u) => (g(), $("div", {
          key: u,
          class: "header-column cell flex-align-center",
          ref_for: !0,
          ref: "headerColmn",
          style: Y([e.headerClass(r), e.headerCellStyle])
        }, [
          N(e.$slots, (r == null ? void 0 : r.header) ?? "default", {}, () => [
            X(K(r.label), 1)
          ], !0),
          r.sortable ? (g(), $("div", el, [
            C("span", tl, [
              C("i", {
                class: z(["sort-caret ascending", { "bottom-caret": e.sortType === "ascending" && e.selectedRow.prop == r.prop }]),
                onClick: (i) => e.clickSortCaret("ascending", r)
              }, null, 10, nl),
              C("i", {
                class: z(["sort-caret descending", { "top-caret": e.sortType === "descending" && e.selectedRow.prop == r.prop }]),
                onClick: (i) => e.clickSortCaret("descending", r)
              }, null, 10, al)
            ])
          ])) : j("", !0)
        ], 4))), 128))
      ])
    ], 512),
    T(s, O({
      data: e.tableData,
      always: "",
      ref: "virtualRef",
      "row-class-name": e.rowClassName
    }, e.$attrs, {
      height: e.height,
      onScroll: e.scrollHandle
    }), {
      default: S(({ row: r, index: u }) => [
        N(e.$slots, "content", {}, () => [
          C("div", ol, [
            (g(!0), $(A, null, Q(e.columnList, (i) => (g(), $("div", {
              key: i.keyId,
              class: "cell table-row table-border-bottom flex-align-center",
              ref_for: !0,
              ref: "bodyCell",
              style: Y(e.headerClass(i))
            }, [
              C("div", {
                class: z({ "text-overflow": i.showOverflowTooltip ?? !0 })
              }, [
                N(e.$slots, (i == null ? void 0 : i.custom) ?? "default", {
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
const Te = /* @__PURE__ */ P(Qo, [["render", ll], ["__scopeId", "data-v-f3e2be24"]]);
Te.install = function(e) {
  e.component(Te.name, Te);
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
  components: { pagination: de },
  props: rl,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { emit: n }) {
    const t = _(null), a = () => t.value.clearSelection(), o = (h) => {
      h ? e.tableData.forEach((v) => {
        h.forEach((p) => {
          f(v) === f(p) && ae(() => t.value && t.value.toggleRowSelection(v));
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
            f(h) === f(v) && (v[e.checkKey] = 0);
          });
        }), o(l.value));
      }, 200);
    };
    q(() => e.tableData, (h) => {
      ae(() => {
        h.length && s(), h.length && o(l.value);
      });
    }, { immediate: !0 });
    const r = (h, v) => {
      h.some((b) => f(b) === f(v)) ? l.value = [...l.value, v] : l.value = l.value.filter((b) => f(b) !== f(v));
    }, u = (h) => {
      if (l.value.length)
        if (h.length) {
          const v = h.filter((p) => l.value.every((b) => f(b) !== f(p)));
          l.value = [...l.value, ...v];
        } else
          l.value = l.value.filter((v) => e.tableData.every((p) => f(v) !== f(p)));
      else
        l.value = h;
    }, i = (h) => {
      if (!d(h))
        return;
      const v = l.value.some((p) => f(p) === f(h));
      o([h]), v ? l.value = l.value.filter((p) => f(p) !== f(h)) : l.value = [...l.value, h], n("row-click", h);
    }, d = (h) => h[e.checkKey] ?? !h[e.checkKey], m = y({
      get: () => e.page,
      set: (h) => n("update:page", h)
    }), c = (h) => {
      n("current-change", h);
    }, f = (h) => h[e.keyId];
    return {
      multipleTable: t,
      handleSelect: r,
      selectAll: u,
      handleRowClick: i,
      checkSelection: d,
      toggleSelection: o,
      currentPage: m,
      changePage: c,
      clear: a
    };
  }
}), ul = { key: 2 }, il = { class: "mt20 flex-between" }, cl = { class: "flex1" };
function dl(e, n, t, a, o, l) {
  const s = V("el-table-column"), r = V("el-table"), u = V("pagination");
  return g(), $(A, null, [
    T(r, O({ ref: "multipleTable" }, e.$attrs, {
      "empty-text": "暂无数据",
      data: e.tableData,
      "header-cell-style": e.headerCellStyle,
      onSelect: e.handleSelect,
      onSelectAll: e.selectAll,
      onRowClick: e.handleRowClick
    }), fe({
      default: S(() => [
        T(s, {
          type: "selection",
          width: "55",
          selectable: e.checkSelection
        }, null, 8, ["selectable"]),
        (g(!0), $(A, null, Q(e.tableColumn, (i) => (g(), x(s, {
          label: i.label,
          key: i.prop,
          width: i.width,
          fixed: i.fixed,
          "min-width": i.minWidth,
          "show-overflow-tooltip": ""
        }, fe({
          default: S((d) => [
            e.$slots.default ? N(e.$slots, "default", {
              key: 0,
              item: d.row,
              row: d.row,
              column: i,
              index: d.$index
            }) : j("", !0),
            i.custom && d.$index >= 0 ? N(e.$slots, i.custom, {
              key: 1,
              item: d.row,
              column: i,
              row: d.row,
              index: d.$index
            }) : (g(), $("span", ul, K(d.row[i.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          i.header ? {
            name: "header",
            fn: S(() => [
              N(e.$slots, "header", { column: i }),
              N(e.$slots, i.header, { column: i })
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
          N(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "onSelect", "onSelectAll", "onRowClick"]),
    C("div", il, [
      C("div", cl, [
        e.$slots.footer ? N(e.$slots, "footer", { key: 0 }) : j("", !0)
      ]),
      T(u, {
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
const we = /* @__PURE__ */ P(sl, [["render", dl]]);
we.install = function(e) {
  e.component(we.name, we);
};
const fl = B({
  name: "KDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { type: String, default: "提示" },
    showFooter: { type: Boolean, default: !0 },
    customClass: { type: String, default: "" },
    class: { type: String, default: "" }
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
}), pl = /* @__PURE__ */ C("span", null, "这是一段信息", -1), hl = { class: "dialog-footer" };
function ml(e, n, t, a, o, l) {
  const s = V("el-button"), r = V("el-dialog");
  return g(), x(r, O({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": n[1] || (n[1] = (u) => e.dialogVisible = u),
    class: e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), fe({
    default: S(() => [
      N(e.$slots, "default", {}, () => [
        pl
      ])
    ]),
    _: 2
  }, [
    e.showFooter ? {
      name: "footer",
      fn: S(() => [
        N(e.$slots, "footer", {}, () => [
          C("span", hl, [
            T(s, {
              size: "large",
              onClick: n[0] || (n[0] = (u) => e.dialogVisible = !1)
            }, {
              default: S(() => [
                X("取 消")
              ]),
              _: 1
            }),
            T(s, {
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
const Me = /* @__PURE__ */ P(fl, [["render", ml]]);
Me.install = function(e) {
  e.component(Me.name, Me);
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
    const t = pe().appContext.config.globalProperties.$router;
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
  const s = V("el-space");
  return g(), $("div", gl, [
    C("div", bl, [
      T(s, { spacer: "/" }, {
        default: S(() => [
          (g(!0), $(A, null, Q(e.list, (r, u) => (g(), $("span", {
            key: u,
            class: z({ "crumb-item": u !== e.list.length - 1 }),
            onClick: (i) => e.clickHandle(r, u)
          }, K(r.title), 11, yl))), 128))
        ]),
        _: 1
      })
    ]),
    N(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Be = /* @__PURE__ */ P(vl, [["render", _l], ["__scopeId", "data-v-4520378f"]]);
Be.install = function(e) {
  e.component(Be.name, Be);
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
    const t = pe(), a = t.appContext.config.globalProperties.$route, o = t.appContext.config.globalProperties.$router, l = y(() => (a == null ? void 0 : a.params.type) || (a == null ? void 0 : a.name)), s = _(l.value);
    ke(() => {
      s.value = e.modelValue || l.value, n("update:modelValue", s.value);
    });
    const r = y(() => a.query);
    return { activeName: s, handleClick: (i) => {
      if (e.isRouter) {
        const d = { path: `${i.paneName}`, query: r.value };
        e.replace ? o.replace(d) : o.push(d);
      }
      n("tab-click", i.paneName), n("update:modelValue", i.paneName);
    } };
  }
}), $l = { class: "tabs-right ml10" };
function kl(e, n, t, a, o, l) {
  const s = V("el-tab-pane"), r = V("el-tabs");
  return g(), $("div", {
    class: z(["k-tabs", { "style-card": !e.type, "style-padding": e.isPadding && !e.type }])
  }, [
    T(r, O({
      class: "flex-tabs",
      type: e.type
    }, e.$attrs, {
      modelValue: e.activeName,
      "onUpdate:modelValue": n[0] || (n[0] = (u) => e.activeName = u),
      onTabClick: e.handleClick
    }), {
      default: S(() => [
        (g(!0), $(A, null, Q(e.tabsList, (u) => (g(), x(s, {
          label: u.label,
          name: u.name,
          key: u.name
        }, null, 8, ["label", "name"]))), 128))
      ]),
      _: 1
    }, 16, ["type", "modelValue", "onTabClick"]),
    C("div", $l, [
      N(e.$slots, "default")
    ])
  ], 2);
}
const xe = /* @__PURE__ */ P(wl, [["render", kl]]);
xe.install = function(e) {
  e.component(xe.name, xe);
};
const Sl = B({
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
      set: (d) => n("update:modelValue", d)
    });
    ke(() => {
      e.showCount && t.value.forEach((d) => {
        d.num = d.num ?? 1;
      });
    });
    const a = _(null), o = () => a.value.toggleSelection(), l = (d) => a.value.handleRowClick(d), s = _(1);
    return {
      multipleSelection: t,
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
}), Cl = { class: "k-picker" }, El = { class: "col-left" }, Vl = { class: "col-right" }, Nl = { class: "selete-header flex-between" }, Tl = { class: "selete-content" }, Ml = { class: "flex flex1 mr20 overflow" }, Bl = { class: "text-overflow" };
function xl(e, n, t, a, o, l) {
  const s = V("batchTable"), r = V("el-col"), u = V("delete"), i = V("el-icon"), d = V("el-button"), m = V("el-tooltip"), c = V("el-input-number"), f = V("el-row");
  return g(), $("div", Cl, [
    N(e.$slots, "top", {}, void 0, !0),
    T(f, { gutter: 10 }, {
      default: S(() => [
        T(r, { span: 15 }, {
          default: S(() => [
            C("div", El, [
              T(s, {
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
                  N(e.$slots, h.header, { column: h }, void 0, !0)
                ]),
                default: S(({ row: h, column: v, index: p }) => [
                  v.custom && p >= 0 ? N(e.$slots, v.custom, {
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
        T(r, { span: 9 }, {
          default: S(() => [
            N(e.$slots, "right", {}, () => [
              C("div", Vl, [
                C("div", Nl, [
                  N(e.$slots, "right-header", {}, () => [
                    C("span", null, [
                      X("已选择"),
                      C("span", null, "(" + K(e.multipleSelection.length) + ")", 1)
                    ]),
                    T(d, {
                      text: "",
                      disabled: !e.multipleSelection.length,
                      onClick: e.emptyHandler
                    }, {
                      default: S(() => [
                        T(i, null, {
                          default: S(() => [
                            T(u)
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
                    class: z(["flex-between pl10 pr10", { mt10: e.showCount }]),
                    key: e.getId(h)
                  }, [
                    C("div", Ml, [
                      T(m, {
                        effect: "dark",
                        content: e.getName(h),
                        placement: "top"
                      }, {
                        default: S(() => [
                          C("span", Bl, K(e.getName(h)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ]),
                    e.showCount ? (g(), x(c, {
                      key: 0,
                      modelValue: h.num,
                      "onUpdate:modelValue": (v) => h.num = v,
                      min: 1,
                      class: "width-100 flex-shrink mr10"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                    T(d, {
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
    N(e.$slots, "footer", {}, void 0, !0)
  ]);
}
const ze = /* @__PURE__ */ P(Sl, [["render", xl], ["__scopeId", "data-v-3723b329"]]);
ze.install = function(e) {
  e.component(ze.name, ze);
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
function Hl(e, n, t, a, o, l) {
  const s = V("warning"), r = V("el-icon"), u = V("el-tooltip");
  return g(), $("div", {
    class: z(["flex flex1", { "text-overflow": e.overflow }])
  }, [
    T(u, O(e.$attrs, { placement: e.placement }), {
      content: S(() => [
        N(e.$slots, "content", {}, void 0, !0)
      ]),
      default: S(() => [
        C("div", {
          class: z(["flex-center", { "text-overflow": e.overflow }])
        }, [
          N(e.$slots, "default", {}, void 0, !0),
          e.showIcon ? (g(), x(r, {
            key: 0,
            class: "ml5"
          }, {
            default: S(() => [
              N(e.$slots, "icon", {}, () => [
                T(s)
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
const He = /* @__PURE__ */ P(zl, [["render", Hl], ["__scopeId", "data-v-d468c200"]]);
He.install = function(e) {
  e.component(He.name, He);
};
const Il = {
  __name: "main",
  setup(e) {
    return (n, t) => (g(), x(w(Ut), { locale: w(en) }, {
      default: S(() => [
        N(n.$slots, "default")
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
    const t = e, a = y(() => t.type === "datetimerange" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"), o = (d) => {
      const m = /* @__PURE__ */ new Date(), c = /* @__PURE__ */ new Date();
      return m.setTime(m.getTime() - 3600 * 1e3 * 24 * d), t.type === "date" ? m : [m, c];
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
      set: (d) => n("update:modelValue", d)
    }), u = (d) => d.getTime() > Date.now(), i = (d) => n("change", d);
    return (d, m) => {
      const c = V("el-date-picker");
      return g(), x(c, {
        modelValue: w(r),
        "onUpdate:modelValue": m[0] || (m[0] = (f) => Ge(r) ? r.value = f : null),
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
}, Pl = { class: "date-picker flex" }, Dl = {
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
    }), d = _("");
    ke(() => {
      if (Array.isArray(l.value)) {
        const [f, h] = l.value;
        d.value = [f, h];
      }
    });
    const m = (f) => {
      if (f) {
        if (Array.isArray(l.value)) {
          const [h] = l.value;
          l.value = h;
        }
      } else
        t.daterange && (l.value = d.value);
      c();
    }, c = () => {
      n("change", { type: a.value, time: l.value });
    };
    return (f, h) => {
      const v = V("el-option"), p = V("el-select"), b = V("el-date-picker");
      return g(), $("div", Pl, [
        T(p, {
          modelValue: a.value,
          "onUpdate:modelValue": h[0] || (h[0] = (k) => a.value = k),
          class: "width-100 mr10",
          onChange: m
        }, {
          default: S(() => [
            (g(!0), $(A, null, Q(o.value, (k) => (g(), x(v, {
              key: k.value,
              label: k.label,
              value: k.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        C("div", null, [
          e.daterange && !a.value ? (g(), x(tn, O({
            key: 0,
            modelValue: w(l),
            "onUpdate:modelValue": h[1] || (h[1] = (k) => Ge(l) ? l.value = k : null)
          }, f.$props, { onChange: c }), null, 16, ["modelValue"])) : (g(), x(b, {
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
            onChange: c
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
  components: { configProvider: Il, selectType: Dl, datePicker: tn },
  setup() {
  }
});
function Al(e, n, t, a, o, l) {
  const s = V("selectType"), r = V("datePicker"), u = V("config-provider");
  return g(), x(u, null, {
    default: S(() => [
      e.selectType ? (g(), x(s, ut(O({ key: 0 }, e.$attrs)), null, 16)) : (g(), x(r, ut(O({ key: 1 }, e.$attrs)), null, 16))
    ]),
    _: 1
  });
}
const Ie = /* @__PURE__ */ P(Ol, [["render", Al]]);
Ie.install = function(e) {
  e.component(Ie.name, Ie);
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
      set: (c) => n("update:modelValue", c)
    }), l = () => {
      ae(() => n("change", o.value));
    }, s = (c) => {
      if (e.maxlength && o.value.length >= Number(e.maxlength))
        return;
      const f = o.value.indexOf("."), h = o.value.split(".");
      h.length === 2 && (c === "." || h[1].length >= e.precision) || (o.value = `${f === 0 ? 0 : ""}${o.value}${c}`, !e.startZero && o.value.slice(0, 1) === "0" && (o.value = o.value.slice(1) + c), l());
    }, r = (c) => {
      c === "delete" ? o.value = o.value.slice(0, o.value.length - 1) : c === "clear" && (o.value = "", n("clear")), c === "confirm" ? n("confirm") : l();
    }, u = ({ key: c, name: f }) => {
      c ? r(c) : s(f);
    }, i = y(() => `${Number(4 * e.width + 20)}px`), d = y(() => `${e.width}px`), m = y(() => e.decimalPoint ? 3 : 4);
    return {
      keyboardList: a,
      clickHandleBtn: u,
      clickBtn: s,
      totalwidth: i,
      gridwidth: d,
      numberVal: o,
      zerogridend: m
    };
  }
}), Ct = () => {
  xt((e) => ({
    "5f76155e": e.totalwidth,
    af867fde: e.gridwidth,
    c0d11484: e.zerogridend
  }));
}, Et = rt.setup;
rt.setup = Et ? (e, n) => (Ct(), Et(e, n)) : Ct;
const Rl = rt, Fl = { class: "number-keyboard mt10" }, Ll = { class: "number-ul" };
function Kl(e, n, t, a, o, l) {
  const s = V("el-button");
  return g(), $("div", Fl, [
    C("ul", Ll, [
      (g(!0), $(A, null, Q(e.keyboardList, (r, u) => (g(), $("li", {
        key: u,
        class: z(r.class)
      }, [
        T(s, {
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
const Pe = /* @__PURE__ */ P(Rl, [["render", Kl], ["__scopeId", "data-v-2e1be318"]]);
Pe.install = function(e) {
  e.component(Pe.name, Pe);
};
const jl = B({
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
      const i = +u.innerText, d = +t.value / 200, m = r && i < Number(t.value) || !r && i > Number(t.value);
      r && i > e.end || i < e.start || (m ? s(u, r ? i + d : i - d, r) : u.interText = a(t.value));
    }, s = (r, u, i = !0) => {
      const d = u < e.start ? e.start : `${e.decimals ? u : Math.floor(u)}`, m = u > e.end ? e.end : `${e.decimals ? u : Math.ceil(u)}`;
      r.innerText = a(i ? m : d);
      const c = setTimeout(() => {
        clearTimeout(c), i ? l() : l(!1);
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
}), Yl = { class: "auto-counter" }, Ul = { class: "mr5" }, Wl = { class: "ml5" };
function Gl(e, n, t, a, o, l) {
  return g(), $("div", Yl, [
    C("span", Ul, K(e.prefix), 1),
    C("span", {
      class: "span-text",
      ref: "spanText"
    }, K(e.autoinit ? e.setDeimals(e.start) : e.setDeimals(e.textValue)), 513),
    C("span", Wl, K(e.suffix), 1)
  ]);
}
const De = /* @__PURE__ */ P(jl, [["render", Gl]]);
De.install = function(e) {
  e.component(De.name, De);
};
const ql = B({
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
        right: d,
        width: m,
        height: c,
        left: f,
        bottom: h
      } = e.style, v = {
        right: {
          top: i ?? "50%",
          right: d ?? `-${r}px`,
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
        width: m ?? (t == null ? void 0 : t.default) ? "" : "10px",
        height: c ?? (t == null ? void 0 : t.default) ? "" : "68px",
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
function Ql(e, n, t, a, o, l) {
  const s = V("CaretRight"), r = V("CaretLeft"), u = V("el-icon");
  return g(), $("div", {
    class: "collapse-button flex-center pointer",
    style: Y(e.collapseStyle),
    ref: "collapse",
    onClick: n[0] || (n[0] = (...i) => e.clickHandle && e.clickHandle(...i))
  }, [
    N(e.$slots, "default", {}, () => [
      T(u, {
        size: 18,
        color: "#999999"
      }, {
        default: S(() => [
          e.isCollapse ? (g(), x(s, { key: 0 })) : (g(), x(r, { key: 1 }))
        ]),
        _: 1
      })
    ], !0)
  ], 4);
}
const Oe = /* @__PURE__ */ P(ql, [["render", Ql], ["__scopeId", "data-v-447ed96e"]]);
Oe.install = function(e) {
  e.component(Oe.name, Oe);
};
const Xl = {
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
function Zl(e, n) {
  const t = _(null), a = _(100), o = _(null), l = () => {
    var k;
    return ((k = document.querySelector(".card-row")) == null ? void 0 : k.offsetHeight) ?? 10;
  }, s = () => {
    var k;
    return ((k = document.querySelector(".card-row")) == null ? void 0 : k.offsetWidth) ?? 10;
  }, r = _(0), u = _(20), i = _(0), d = _(e.columns), m = (k) => Math.ceil(k / l()), c = () => {
    const { clientHeight: k = 100 } = t.value.wrapRef || {};
    return Math.floor(k / (l() + e.gridGap)) + r.value || 1;
  }, f = y(() => e.data.map((k, H) => ({ ...k, rowIndex: H }))), h = y(() => f.value.filter((k, H) => H >= r.value * d.value && H < u.value * d.value)), v = () => {
    const { clientHeight: k = 100 } = t.value.wrapRef || {}, H = k / l() * e.gridGap;
    a.value = Math.floor(e.data.length / d.value * l() + H);
  }, p = (k) => {
    const { scrollTop: H, clientHeight: U } = t.value.wrapRef, W = a.value - U - H;
    n("scroll", { distance: W, ...k }), r.value = m(H), i.value = H + e.gridGap, u.value = c();
  };
  q(() => e.data, () => {
    v(), u.value = c();
  });
  const b = () => {
    if (o.value) {
      const { clientWidth: k = 500 } = t.value.wrapRef;
      d.value = Math.floor(k / s()) || 1, v(), i.value = 0, r.value = 0, t.value.setScrollTop(0), u.value = c();
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
    onScroll: p,
    startOffset: i,
    viewListRanges: h,
    resetViewport: b
  };
}
const st = B({
  name: "KCardList",
  props: Xl,
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
      containHeight: d,
      cardRowRef: m,
      startOffset: c,
      viewListRanges: f,
      onScroll: h,
      resetViewport: v
    } = Zl(e, n);
    return {
      calcnum: t,
      gridgap: a,
      columnwidth: o,
      rowClassStyle: s,
      clickHandle: u,
      selectedId: r,
      bitNotAllowed: l,
      scrollbarRef: i,
      containHeight: d,
      cardRowRef: m,
      startOffset: c,
      viewListRanges: f,
      onScroll: h,
      resetViewport: v
    };
  }
}), Vt = () => {
  xt((e) => ({
    "7d46f10c": e.gridgap,
    "2e51acf2": e.columns,
    "5e29b28a": e.calcnum,
    "221aa64c": e.columnwidth,
    cb2c4c58: e.imgheight
  }));
}, Nt = st.setup;
st.setup = Nt ? (e, n) => (Vt(), Nt(e, n)) : Vt;
const Jl = st, er = { class: "card-contain" }, tr = ["onClick", "onMouseenter", "onMouseleave"], nr = { class: "card-list-content" }, ar = { class: "sign" };
function or(e, n, t, a, o, l) {
  const s = V("el-scrollbar");
  return g(), x(s, O({
    ref: "scrollbarRef",
    "data-test": "card-list"
  }, e.$attrs, {
    always: "",
    onScroll: e.onScroll
  }), {
    default: S(() => [
      C("div", er, [
        C("div", {
          class: "card-wrap",
          style: Y({ height: `${e.containHeight}px` })
        }, null, 4),
        C("div", {
          class: "card-list",
          style: Y({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          C("div", {
            class: z([e.fixedColumn ? "card-fixed-coumn" : "card-content", { "fixed-width": e.width }])
          }, [
            (g(!0), $(A, null, Q(e.viewListRanges, (r, u) => (g(), $("div", {
              class: z(["card-row border-radius pointer", [e.selectedId === r[e.keyId] ? "select-style" : "", e.bitNotAllowed(r) ? "not-allowed" : "hover-style", e.rowClassStyle]]),
              key: u,
              onClick: (i) => e.clickHandle(r),
              ref_for: !0,
              ref: "cardRowRef",
              onMouseenter: (i) => e.$emit("mouseenter", r),
              onMouseleave: (i) => e.$emit("mouseleave", r)
            }, [
              C("div", nr, [
                N(e.$slots, "default", {
                  row: r,
                  index: r.rowIndex
                }, () => [
                  X(K(r.rowIndex), 1)
                ], !0)
              ]),
              C("div", ar, [
                N(e.$slots, "sign", {
                  row: r,
                  index: r.rowIndex
                }, void 0, !0)
              ])
            ], 42, tr))), 128))
          ], 2)
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["onScroll"]);
}
const Ae = /* @__PURE__ */ P(Jl, [["render", or], ["__scopeId", "data-v-6f6f8503"]]);
Ae.install = function(e) {
  e.component(Ae.name, Ae);
};
const Ue = {
  KButton: Ee,
  KInput: ye,
  KInputNumber: Ve,
  KTable: Ne,
  KTableV2: Te,
  KPage: de,
  KBatchTable: we,
  KDialog: Me,
  KBreadcrumb: Be,
  KTabs: xe,
  KPicker: ze,
  KTooltip: He,
  KDatePicker: Ie,
  KNumberKeyboard: Pe,
  KVirtualList: _e,
  KAutoCounter: De,
  KCollapseButton: Oe,
  KCardList: Ae,
  install: () => {
  }
};
function lr(e, n, t = 0) {
  return e.substr(t, n.length) === n;
}
Ue.install = function(e) {
  Object.keys(Ue).forEach((n) => {
    if (lr(n, "K")) {
      const t = Ue[n];
      e.component(t.name, t);
    }
  }), Object.keys(be).forEach((n) => {
    e.directive(n, be[n]);
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
  ze as KPicker,
  Ne as KTable,
  Te as KTableV2,
  xe as KTabs,
  He as KTooltip,
  Ue as KUI,
  _e as KVirtualList,
  be as directives
};
