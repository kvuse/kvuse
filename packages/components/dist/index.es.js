import { defineComponent as H, ref as k, computed as S, resolveComponent as G, openBlock as T, createBlock as V, mergeProps as Pe, withModifiers as Ye, withCtx as F, renderSlot as W, createElementBlock as P, createCommentVNode as q, withKeys as it, createSlots as _n, createElementVNode as R, watchEffect as Ft, watch as Y, nextTick as he, normalizeClass as M, createVNode as Q, unref as m, getCurrentScope as ju, onScopeDispose as Uu, getCurrentInstance as Ce, onMounted as Me, warn as qu, inject as pe, isRef as Rn, shallowRef as Cn, onBeforeUnmount as Bt, onBeforeMount as ml, provide as ot, toRef as Rt, onUnmounted as To, useAttrs as Gu, useSlots as ba, withDirectives as We, Fragment as $e, resolveDynamicComponent as Qe, toDisplayString as ie, normalizeStyle as ye, vShow as dn, Transition as yo, reactive as Qn, onUpdated as bl, cloneVNode as Yu, Text as zs, Comment as Hs, Teleport as Xu, readonly as Qu, onDeactivated as Zu, toRaw as Fn, vModelCheckbox as ia, createTextVNode as Ke, toRefs as Zn, triggerRef as ro, resolveDirective as yl, renderList as ze, vModelText as Ju, h as re, useCssVars as wl, normalizeProps as sr } from "vue";
const uo = {
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
      let o = "￥0";
      const { inter: a, point: l } = t.modifiers, s = l ? t.value : 2, r = n >= 0 ? `￥${Number(n).toFixed(s)}` : `-￥${Math.abs(Number(n.toFixed(s)))}`;
      a ? o = n >= 0 ? `￥${n}` : `-￥${Math.abs(n)}` : o = n ? r : "￥0.00", e.innerHTML = `${o}`;
    },
    updated: (e, t) => {
      const { point: n } = t.modifiers, o = n ? t.value : 2, a = t.arg === "value" && t.value ? `￥${Number(t.value).toFixed(o)}` : e.textContent;
      e.innerHTML = a;
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
      e.handler = function(o) {
        const a = Date.now(), l = /^[a-zA-Z]{2,}/.test(o.key) ? o.key : o.key.toLocaleUpperCase(), { buttonKey: s, isCombination: r = 0 } = t.value || e.valueKeys || {}, i = document.contains(e), u = o.target.tagName === "TEXTAREA" || o.target.tagName === "INPUT", {
          dialog: c,
          focus: d,
          long: h,
          any: g,
          fast: v
        } = t.modifiers;
        if (!i && !h) {
          document.removeEventListener("keydown", e.handler);
          return;
        }
        if (g && t.arg) {
          t.arg(o);
          return;
        }
        const f = v ? a - n > 30 : !0, y = document.querySelector(".el-popup-parent--hidden") || document.querySelector(".is-message-box");
        if (n = a, y && !c)
          return;
        const p = o.ctrlKey || o.metaKey, w = r === +p && s === l;
        (!u || d || r) && w && f && t.arg && t.arg(o);
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
        const { delay: n = 800, content: o } = t.value || {};
        e.classList.add("is-disabled"), e.disabled = !0, o && (e.beforeText = e.textContent, e.innerHTML = o);
        const { once: a } = t.modifiers;
        a || (e.timer = setTimeout(() => {
          e.classList.remove("is-disabled"), e.disabled = !1, o && (e.innerHTML = e.beforeText), e.beforeText = null, clearTimeout(e.timer), e.timer = null;
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
uo.install = function(e) {
  Object.keys(uo).forEach((t) => {
    e.directive(t, uo[t]);
  });
};
const He = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, ec = H({
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
    const o = k(!0), a = k(null), l = () => {
      o.value && (o.value = !1, t("click")), s();
    }, s = () => {
      clearTimeout(a.value), a.value = setTimeout(() => {
        o.value = !0;
      }, 800);
    }, r = S(() => {
      const { border: i } = e, { type: u = "text" } = n;
      return i ? {
        backgroundColor: "transparent",
        color: `var(--el-color-${u})`
      } : {};
    });
    return { onclick: l, buttonStatus: o, buttonStyle: r };
  }
}), tc = {
  key: 0,
  class: "el-icon-lock el-icon--right"
};
function nc(e, t, n, o, a, l) {
  const s = G("el-button");
  return T(), V(s, Pe({
    disabled: !e.buttonStatus || e.disabled,
    style: e.buttonStyle,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: Ye(e.onclick, ["stop"])
  }), {
    default: F(() => [
      W(e.$slots, "default"),
      e.iconLock ? (T(), P("i", tc)) : q("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "style", "click-state", "onClick"]);
}
const Vo = /* @__PURE__ */ He(ec, [["render", nc]]);
Vo.install = function(e) {
  e.component(Vo.name, Vo);
};
const oc = H({
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
    const o = k(null), a = k(!0), l = S({
      get() {
        return e.modelValue;
      },
      set(c) {
        s(c);
      }
    }), s = (c) => {
      let d = c, h = n.max;
      if (e.type === "number") {
        if (d = d.replace(/[^\d.]/g, ""), d = d.replace(/^\./g, ""), d = d.replace(/\.{2,}/g, "."), d = d.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), d.indexOf(".") < 0 && d !== "" && d.substr(0, 1) === "0" && d.length === 2 && (d = d.substr(1, d.length)), d !== "")
          if (d.indexOf(".") > 0) {
            if (e.point) {
              const g = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
              d = d.match(g)[0] || null;
            }
          } else
            d === "." && (d = "");
        h = n.max ?? 999999.99;
      } else
        e.type === "integer" ? (d = d.replace(/[^\d]/g, ""), h = n.max ?? 999999) : e.type === "intText" && (d = d.replace(/[^\w]/g, ""));
      !n.maxlength && h !== void 0 && d && Number(d) > Number(h) && (d = h), n.min !== void 0 && d && Number(d) < Number(n.min) && (d = n.min), t("update:modelValue", d);
    }, r = () => {
      a.value && (a.value = !1, l.value && t("enter")), u();
    }, i = (c) => {
      t("change", c);
    }, u = () => {
      clearTimeout(o.value), o.value = setTimeout(() => {
        a.value = !0;
      }, 800);
    };
    return {
      inputValue: l,
      changeValue: i,
      searchContent: r
    };
  }
});
function ac(e, t, n, o, a, l) {
  const s = G("el-input");
  return T(), V(s, Pe({
    modelValue: e.inputValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => e.inputValue = r),
    modelModifiers: { trim: !0 }
  }, e.$attrs, {
    onKeyup: it(e.searchContent, ["enter"]),
    onChange: e.changeValue
  }), _n({ _: 2 }, [
    e.$slots.append ? {
      name: "append",
      fn: F(() => [
        W(e.$slots, "append")
      ]),
      key: "0"
    } : void 0,
    e.$slots.prepend ? {
      name: "prepend",
      fn: F(() => [
        W(e.$slots, "prepend")
      ]),
      key: "1"
    } : void 0,
    e.$slots.prefix ? {
      name: "prefix",
      fn: F(() => [
        W(e.$slots, "prefix")
      ]),
      key: "2"
    } : void 0,
    e.$slots.suffix ? {
      name: "suffix",
      fn: F(() => [
        W(e.$slots, "suffix")
      ]),
      key: "3"
    } : void 0
  ]), 1040, ["modelValue", "onKeyup", "onChange"]);
}
const co = /* @__PURE__ */ He(oc, [["render", ac]]);
co.install = function(e) {
  e.component(co.name, co);
};
/*! Element Plus Icons Vue v2.1.0 */
var Fe = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, a] of t)
    n[o] = a;
  return n;
}, lc = {
  name: "ArrowDown"
}, rc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, sc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), ic = [
  sc
];
function uc(e, t, n, o, a, l) {
  return T(), P("svg", rc, ic);
}
var Ds = /* @__PURE__ */ Fe(lc, [["render", uc], ["__file", "arrow-down.vue"]]), cc = {
  name: "ArrowLeft"
}, dc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), pc = [
  fc
];
function vc(e, t, n, o, a, l) {
  return T(), P("svg", dc, pc);
}
var hc = /* @__PURE__ */ Fe(cc, [["render", vc], ["__file", "arrow-left.vue"]]), gc = {
  name: "ArrowRight"
}, mc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, bc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), yc = [
  bc
];
function wc(e, t, n, o, a, l) {
  return T(), P("svg", mc, yc);
}
var Cl = /* @__PURE__ */ Fe(gc, [["render", wc], ["__file", "arrow-right.vue"]]), Cc = {
  name: "ArrowUp"
}, Sc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _c = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), $c = [
  _c
];
function Ec(e, t, n, o, a, l) {
  return T(), P("svg", Sc, $c);
}
var Tc = /* @__PURE__ */ Fe(Cc, [["render", Ec], ["__file", "arrow-up.vue"]]), kc = {
  name: "CaretLeft"
}, Oc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M672 192 288 511.936 672 832z"
  },
  null,
  -1
  /* HOISTED */
), Pc = [
  xc
];
function Ac(e, t, n, o, a, l) {
  return T(), P("svg", Oc, Pc);
}
var Mc = /* @__PURE__ */ Fe(kc, [["render", Ac], ["__file", "caret-left.vue"]]), Ic = {
  name: "CaretRight"
}, Lc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Nc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M384 192v640l384-320.064z"
  },
  null,
  -1
  /* HOISTED */
), Rc = [
  Nc
];
function Fc(e, t, n, o, a, l) {
  return T(), P("svg", Lc, Rc);
}
var Bc = /* @__PURE__ */ Fe(Ic, [["render", Fc], ["__file", "caret-right.vue"]]), zc = {
  name: "CircleCheck"
}, Hc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Dc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Vc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), Kc = [
  Dc,
  Vc
];
function Wc(e, t, n, o, a, l) {
  return T(), P("svg", Hc, Kc);
}
var jc = /* @__PURE__ */ Fe(zc, [["render", Wc], ["__file", "circle-check.vue"]]), Uc = {
  name: "CircleClose"
}, qc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), Yc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Xc = [
  Gc,
  Yc
];
function Qc(e, t, n, o, a, l) {
  return T(), P("svg", qc, Xc);
}
var Sl = /* @__PURE__ */ Fe(Uc, [["render", Qc], ["__file", "circle-close.vue"]]), Zc = {
  name: "Close"
}, Jc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ed = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), td = [
  ed
];
function nd(e, t, n, o, a, l) {
  return T(), P("svg", Jc, td);
}
var ir = /* @__PURE__ */ Fe(Zc, [["render", nd], ["__file", "close.vue"]]), od = {
  name: "DArrowLeft"
}, ad = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ld = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
  },
  null,
  -1
  /* HOISTED */
), rd = [
  ld
];
function sd(e, t, n, o, a, l) {
  return T(), P("svg", ad, rd);
}
var id = /* @__PURE__ */ Fe(od, [["render", sd], ["__file", "d-arrow-left.vue"]]), ud = {
  name: "DArrowRight"
}, cd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dd = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
  },
  null,
  -1
  /* HOISTED */
), fd = [
  dd
];
function pd(e, t, n, o, a, l) {
  return T(), P("svg", cd, fd);
}
var vd = /* @__PURE__ */ Fe(ud, [["render", pd], ["__file", "d-arrow-right.vue"]]), hd = {
  name: "Delete"
}, gd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, md = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
  },
  null,
  -1
  /* HOISTED */
), bd = [
  md
];
function yd(e, t, n, o, a, l) {
  return T(), P("svg", gd, bd);
}
var wd = /* @__PURE__ */ Fe(hd, [["render", yd], ["__file", "delete.vue"]]), Cd = {
  name: "Hide"
}, Sd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _d = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), $d = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), Ed = [
  _d,
  $d
];
function Td(e, t, n, o, a, l) {
  return T(), P("svg", Sd, Ed);
}
var kd = /* @__PURE__ */ Fe(Cd, [["render", Td], ["__file", "hide.vue"]]), Od = {
  name: "Loading"
}, xd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Pd = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), Ad = [
  Pd
];
function Md(e, t, n, o, a, l) {
  return T(), P("svg", xd, Ad);
}
var _l = /* @__PURE__ */ Fe(Od, [["render", Md], ["__file", "loading.vue"]]), Id = {
  name: "Minus"
}, Ld = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Nd = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
  },
  null,
  -1
  /* HOISTED */
), Rd = [
  Nd
];
function Fd(e, t, n, o, a, l) {
  return T(), P("svg", Ld, Rd);
}
var Bd = /* @__PURE__ */ Fe(Id, [["render", Fd], ["__file", "minus.vue"]]), zd = {
  name: "MoreFilled"
}, Hd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Dd = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
  },
  null,
  -1
  /* HOISTED */
), Vd = [
  Dd
];
function Kd(e, t, n, o, a, l) {
  return T(), P("svg", Hd, Vd);
}
var ur = /* @__PURE__ */ Fe(zd, [["render", Kd], ["__file", "more-filled.vue"]]), Wd = {
  name: "Plus"
}, jd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ud = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  },
  null,
  -1
  /* HOISTED */
), qd = [
  Ud
];
function Gd(e, t, n, o, a, l) {
  return T(), P("svg", jd, qd);
}
var Yd = /* @__PURE__ */ Fe(Wd, [["render", Gd], ["__file", "plus.vue"]]), Xd = {
  name: "View"
}, Qd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Zd = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), Jd = [
  Zd
];
function ef(e, t, n, o, a, l) {
  return T(), P("svg", Qd, Jd);
}
var tf = /* @__PURE__ */ Fe(Xd, [["render", ef], ["__file", "view.vue"]]), nf = {
  name: "Warning"
}, of = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, af = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), lf = [
  af
];
function rf(e, t, n, o, a, l) {
  return T(), P("svg", of, lf);
}
var sf = /* @__PURE__ */ Fe(nf, [["render", rf], ["__file", "warning.vue"]]);
const uf = H({
  name: "KInputNumber",
  components: { Minus: Bd, Plus: Yd, KInput: co },
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
    const n = k(1), o = k(null), a = k(!1), l = S(() => e.modelValue <= e.min), s = S(() => e.modelValue >= e.max), r = S({
      get: () => e.modelValue,
      set: (y) => {
        t("update:modelValue", y);
      }
    }), i = (y) => t("blur", y), u = (y) => t("focus", y), c = (y) => t("enter", y), d = (y) => {
      he(() => {
        const p = y === "" ? void 0 : Number(y);
        (!Number.isNaN(p) || y === "") && f(p);
      });
    }, h = (y) => {
      a.value = !y, o.value = y;
    }, g = k(-1);
    Ft(() => {
      n.value = e.modelValue;
    }), Y(() => g.value, (y) => {
      y < 0 && (r.value = e.modelValue, d(n.value));
    }, { immediate: !0 });
    const v = (y) => {
      const p = y === "increase", w = p ? s.value : l.value;
      if (e.disabled || w)
        return;
      const C = a.value ? 0 : r.value, b = o.value ? n.value : C, $ = p ? b + e.step : b - e.step;
      f($);
    }, f = (y) => {
      o.value = y;
      let p = y;
      g.value !== p && (g.value = y, p >= e.max && (p = e.max), p <= e.min && (p = e.min), o.value === void 0 && (p = 1), t("update:modelValue", p), t("change", p, g.value), n.value = p);
    };
    return {
      currentValue: n,
      minDisabled: l,
      maxDisabled: s,
      handleBlur: i,
      handleFocus: u,
      handleKeyUp: c,
      handleInputChange: d,
      handleInput: h,
      clickBtnHandle: v
    };
  }
});
function cf(e, t, n, o, a, l) {
  const s = G("minus"), r = G("el-icon"), i = G("plus"), u = G("k-input");
  return T(), P("div", {
    class: M(["el-input-number", { "is-disabled": e.disabled }, { "is-without-controls": !e.controls }, e.size ? "el-input-number--" + e.size : ""])
  }, [
    e.controls ? (T(), P("span", {
      key: 0,
      class: M(["el-input-number__decrease", { "is-disabled": e.minDisabled }]),
      role: "button",
      onClick: t[0] || (t[0] = (c) => e.clickBtnHandle("decrease"))
    }, [
      Q(r, { class: "el-input__icon" }, {
        default: F(() => [
          Q(s)
        ]),
        _: 1
      })
    ], 2)) : q("", !0),
    e.controls ? (T(), P("span", {
      key: 1,
      class: M(["el-input-number__increase", { "is-disabled": e.maxDisabled }]),
      role: "button",
      onClick: t[1] || (t[1] = (c) => e.clickBtnHandle("increase"))
    }, [
      Q(r, { class: "el-input__icon" }, {
        default: F(() => [
          Q(i)
        ]),
        _: 1
      })
    ], 2)) : q("", !0),
    Q(u, Pe({
      ref: "input",
      modelValue: e.currentValue,
      "onUpdate:modelValue": t[2] || (t[2] = (c) => e.currentValue = c),
      disabled: e.disabled,
      type: e.type
    }, e.$attrs, {
      onBlur: e.handleBlur,
      maxlength: "6",
      onFocus: e.handleFocus,
      onChange: e.handleInputChange,
      onInput: e.handleInput,
      onKeyup: it(e.handleKeyUp, ["enter"])
    }), null, 16, ["modelValue", "disabled", "type", "onBlur", "onFocus", "onChange", "onInput", "onKeyup"])
  ], 2);
}
const Ko = /* @__PURE__ */ He(uf, [["render", cf]]);
Ko.install = function(e) {
  e.component(Ko.name, Ko);
};
const Jt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (a) => {
  const l = e == null ? void 0 : e(a);
  if (n === !1 || !l)
    return t == null ? void 0 : t(a);
};
var cr;
const Ie = typeof window < "u", df = (e) => typeof e == "string", Vs = () => {
}, Ks = Ie && ((cr = window == null ? void 0 : window.navigator) == null ? void 0 : cr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ws(e) {
  return typeof e == "function" ? e() : m(e);
}
function ff(e) {
  return e;
}
function $l(e) {
  return ju() ? (Uu(e), !0) : !1;
}
function pf(e, t = !0) {
  Ce() ? Me(e) : t ? e() : he(e);
}
function un(e) {
  var t;
  const n = Ws(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const El = Ie ? window : void 0;
function en(...e) {
  let t, n, o, a;
  if (df(e[0]) || Array.isArray(e[0]) ? ([n, o, a] = e, t = El) : [t, n, o, a] = e, !t)
    return Vs;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], s = () => {
    l.forEach((c) => c()), l.length = 0;
  }, r = (c, d, h, g) => (c.addEventListener(d, h, g), () => c.removeEventListener(d, h, g)), i = Y(() => [un(t), Ws(a)], ([c, d]) => {
    s(), c && l.push(...n.flatMap((h) => o.map((g) => r(c, h, g, d))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), s();
  };
  return $l(u), u;
}
let dr = !1;
function vf(e, t, n = {}) {
  const { window: o = El, ignore: a = [], capture: l = !0, detectIframe: s = !1 } = n;
  if (!o)
    return;
  Ks && !dr && (dr = !0, Array.from(o.document.body.children).forEach((h) => h.addEventListener("click", Vs)));
  let r = !0;
  const i = (h) => a.some((g) => {
    if (typeof g == "string")
      return Array.from(o.document.querySelectorAll(g)).some((v) => v === h.target || h.composedPath().includes(v));
    {
      const v = un(g);
      return v && (h.target === v || h.composedPath().includes(v));
    }
  }), c = [
    en(o, "click", (h) => {
      const g = un(e);
      if (!(!g || g === h.target || h.composedPath().includes(g))) {
        if (h.detail === 0 && (r = !i(h)), !r) {
          r = !0;
          return;
        }
        t(h);
      }
    }, { passive: !0, capture: l }),
    en(o, "pointerdown", (h) => {
      const g = un(e);
      g && (r = !h.composedPath().includes(g) && !i(h));
    }, { passive: !0 }),
    s && en(o, "blur", (h) => {
      var g;
      const v = un(e);
      ((g = o.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !(v != null && v.contains(o.document.activeElement)) && t(h);
    })
  ].filter(Boolean);
  return () => c.forEach((h) => h());
}
function hf(e, t = !1) {
  const n = k(), o = () => n.value = !!e();
  return o(), pf(o, t), n;
}
const fr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, pr = "__vueuse_ssr_handlers__";
fr[pr] = fr[pr] || {};
var vr = Object.getOwnPropertySymbols, gf = Object.prototype.hasOwnProperty, mf = Object.prototype.propertyIsEnumerable, bf = (e, t) => {
  var n = {};
  for (var o in e)
    gf.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && vr)
    for (var o of vr(e))
      t.indexOf(o) < 0 && mf.call(e, o) && (n[o] = e[o]);
  return n;
};
function Bn(e, t, n = {}) {
  const o = n, { window: a = El } = o, l = bf(o, ["window"]);
  let s;
  const r = hf(() => a && "ResizeObserver" in a), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Y(() => un(e), (d) => {
    i(), r.value && a && d && (s = new ResizeObserver(t), s.observe(d, l));
  }, { immediate: !0, flush: "post" }), c = () => {
    i(), u();
  };
  return $l(c), {
    isSupported: r,
    stop: c
  };
}
var hr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(hr || (hr = {}));
var yf = Object.defineProperty, gr = Object.getOwnPropertySymbols, wf = Object.prototype.hasOwnProperty, Cf = Object.prototype.propertyIsEnumerable, mr = (e, t, n) => t in e ? yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Sf = (e, t) => {
  for (var n in t || (t = {}))
    wf.call(t, n) && mr(e, n, t[n]);
  if (gr)
    for (var n of gr(t))
      Cf.call(t, n) && mr(e, n, t[n]);
  return e;
};
const _f = {
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
Sf({
  linear: ff
}, _f);
const $f = () => Ie && /firefox/i.test(window.navigator.userAgent);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const wo = () => {
}, Ef = Object.prototype.hasOwnProperty, $n = (e, t) => Ef.call(e, t), En = Array.isArray, Et = (e) => typeof e == "function", Tt = (e) => typeof e == "string", nt = (e) => e !== null && typeof e == "object", Tf = Object.prototype.toString, kf = (e) => Tf.call(e), Ia = (e) => kf(e).slice(8, -1);
var Of = typeof global == "object" && global && global.Object === Object && global;
const js = Of;
var xf = typeof self == "object" && self && self.Object === Object && self, Pf = js || xf || Function("return this")();
const zt = Pf;
var Af = zt.Symbol;
const Ut = Af;
var Us = Object.prototype, Mf = Us.hasOwnProperty, If = Us.toString, so = Ut ? Ut.toStringTag : void 0;
function Lf(e) {
  var t = Mf.call(e, so), n = e[so];
  try {
    e[so] = void 0;
    var o = !0;
  } catch {
  }
  var a = If.call(e);
  return o && (t ? e[so] = n : delete e[so]), a;
}
var Nf = Object.prototype, Rf = Nf.toString;
function Ff(e) {
  return Rf.call(e);
}
var Bf = "[object Null]", zf = "[object Undefined]", br = Ut ? Ut.toStringTag : void 0;
function On(e) {
  return e == null ? e === void 0 ? zf : Bf : br && br in Object(e) ? Lf(e) : Ff(e);
}
function fn(e) {
  return e != null && typeof e == "object";
}
var Hf = "[object Symbol]";
function ya(e) {
  return typeof e == "symbol" || fn(e) && On(e) == Hf;
}
function qs(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = Array(o); ++n < o; )
    a[n] = t(e[n], n, e);
  return a;
}
var Df = Array.isArray;
const mt = Df;
var Vf = 1 / 0, yr = Ut ? Ut.prototype : void 0, wr = yr ? yr.toString : void 0;
function Gs(e) {
  if (typeof e == "string")
    return e;
  if (mt(e))
    return qs(e, Gs) + "";
  if (ya(e))
    return wr ? wr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Vf ? "-0" : t;
}
var Kf = /\s/;
function Wf(e) {
  for (var t = e.length; t-- && Kf.test(e.charAt(t)); )
    ;
  return t;
}
var jf = /^\s+/;
function Uf(e) {
  return e && e.slice(0, Wf(e) + 1).replace(jf, "");
}
function bt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Cr = 0 / 0, qf = /^[-+]0x[0-9a-f]+$/i, Gf = /^0b[01]+$/i, Yf = /^0o[0-7]+$/i, Xf = parseInt;
function qa(e) {
  if (typeof e == "number")
    return e;
  if (ya(e))
    return Cr;
  if (bt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = bt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Uf(e);
  var n = Gf.test(e);
  return n || Yf.test(e) ? Xf(e.slice(2), n ? 2 : 8) : qf.test(e) ? Cr : +e;
}
var Sr = 1 / 0, Qf = 17976931348623157e292;
function Zf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = qa(e), e === Sr || e === -Sr) {
    var t = e < 0 ? -1 : 1;
    return t * Qf;
  }
  return e === e ? e : 0;
}
function Jf(e) {
  var t = Zf(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function Tl(e) {
  return e;
}
var ep = "[object AsyncFunction]", tp = "[object Function]", np = "[object GeneratorFunction]", op = "[object Proxy]";
function kl(e) {
  if (!bt(e))
    return !1;
  var t = On(e);
  return t == tp || t == np || t == ep || t == op;
}
var ap = zt["__core-js_shared__"];
const La = ap;
var _r = function() {
  var e = /[^.]+$/.exec(La && La.keys && La.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function lp(e) {
  return !!_r && _r in e;
}
var rp = Function.prototype, sp = rp.toString;
function xn(e) {
  if (e != null) {
    try {
      return sp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ip = /[\\^$.*+?()[\]{}|]/g, up = /^\[object .+?Constructor\]$/, cp = Function.prototype, dp = Object.prototype, fp = cp.toString, pp = dp.hasOwnProperty, vp = RegExp(
  "^" + fp.call(pp).replace(ip, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function hp(e) {
  if (!bt(e) || lp(e))
    return !1;
  var t = kl(e) ? vp : up;
  return t.test(xn(e));
}
function gp(e, t) {
  return e == null ? void 0 : e[t];
}
function Pn(e, t) {
  var n = gp(e, t);
  return hp(n) ? n : void 0;
}
var mp = Pn(zt, "WeakMap");
const Ga = mp;
var $r = Object.create, bp = function() {
  function e() {
  }
  return function(t) {
    if (!bt(t))
      return {};
    if ($r)
      return $r(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const yp = bp;
function wp(e, t, n) {
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
function Cp(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var Sp = 800, _p = 16, $p = Date.now;
function Ep(e) {
  var t = 0, n = 0;
  return function() {
    var o = $p(), a = _p - (o - n);
    if (n = o, a > 0) {
      if (++t >= Sp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Tp(e) {
  return function() {
    return e;
  };
}
var kp = function() {
  try {
    var e = Pn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ua = kp;
var Op = ua ? function(e, t) {
  return ua(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Tp(t),
    writable: !0
  });
} : Tl;
const xp = Op;
var Pp = Ep(xp);
const Ys = Pp;
function Ap(e, t, n, o) {
  for (var a = e.length, l = n + (o ? 1 : -1); o ? l-- : ++l < a; )
    if (t(e[l], l, e))
      return l;
  return -1;
}
var Mp = 9007199254740991, Ip = /^(?:0|[1-9]\d*)$/;
function wa(e, t) {
  var n = typeof e;
  return t = t ?? Mp, !!t && (n == "number" || n != "symbol" && Ip.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ol(e, t, n) {
  t == "__proto__" && ua ? ua(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function ko(e, t) {
  return e === t || e !== e && t !== t;
}
var Lp = Object.prototype, Np = Lp.hasOwnProperty;
function Xs(e, t, n) {
  var o = e[t];
  (!(Np.call(e, t) && ko(o, n)) || n === void 0 && !(t in e)) && Ol(e, t, n);
}
function Rp(e, t, n, o) {
  var a = !n;
  n || (n = {});
  for (var l = -1, s = t.length; ++l < s; ) {
    var r = t[l], i = o ? o(n[r], e[r], r, n, e) : void 0;
    i === void 0 && (i = e[r]), a ? Ol(n, r, i) : Xs(n, r, i);
  }
  return n;
}
var Er = Math.max;
function Qs(e, t, n) {
  return t = Er(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, a = -1, l = Er(o.length - t, 0), s = Array(l); ++a < l; )
      s[a] = o[t + a];
    a = -1;
    for (var r = Array(t + 1); ++a < t; )
      r[a] = o[a];
    return r[t] = n(s), wp(e, this, r);
  };
}
function Fp(e, t) {
  return Ys(Qs(e, t, Tl), e + "");
}
var Bp = 9007199254740991;
function xl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Bp;
}
function Jn(e) {
  return e != null && xl(e.length) && !kl(e);
}
function zp(e, t, n) {
  if (!bt(n))
    return !1;
  var o = typeof t;
  return (o == "number" ? Jn(n) && wa(t, n.length) : o == "string" && t in n) ? ko(n[t], e) : !1;
}
function Hp(e) {
  return Fp(function(t, n) {
    var o = -1, a = n.length, l = a > 1 ? n[a - 1] : void 0, s = a > 2 ? n[2] : void 0;
    for (l = e.length > 3 && typeof l == "function" ? (a--, l) : void 0, s && zp(n[0], n[1], s) && (l = a < 3 ? void 0 : l, a = 1), t = Object(t); ++o < a; ) {
      var r = n[o];
      r && e(t, r, o, l);
    }
    return t;
  });
}
var Dp = Object.prototype;
function Pl(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Dp;
  return e === n;
}
function Vp(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Kp = "[object Arguments]";
function Tr(e) {
  return fn(e) && On(e) == Kp;
}
var Zs = Object.prototype, Wp = Zs.hasOwnProperty, jp = Zs.propertyIsEnumerable, Up = Tr(function() {
  return arguments;
}()) ? Tr : function(e) {
  return fn(e) && Wp.call(e, "callee") && !jp.call(e, "callee");
};
const Co = Up;
function qp() {
  return !1;
}
var Js = typeof exports == "object" && exports && !exports.nodeType && exports, kr = Js && typeof module == "object" && module && !module.nodeType && module, Gp = kr && kr.exports === Js, Or = Gp ? zt.Buffer : void 0, Yp = Or ? Or.isBuffer : void 0, Xp = Yp || qp;
const ca = Xp;
var Qp = "[object Arguments]", Zp = "[object Array]", Jp = "[object Boolean]", ev = "[object Date]", tv = "[object Error]", nv = "[object Function]", ov = "[object Map]", av = "[object Number]", lv = "[object Object]", rv = "[object RegExp]", sv = "[object Set]", iv = "[object String]", uv = "[object WeakMap]", cv = "[object ArrayBuffer]", dv = "[object DataView]", fv = "[object Float32Array]", pv = "[object Float64Array]", vv = "[object Int8Array]", hv = "[object Int16Array]", gv = "[object Int32Array]", mv = "[object Uint8Array]", bv = "[object Uint8ClampedArray]", yv = "[object Uint16Array]", wv = "[object Uint32Array]", Oe = {};
Oe[fv] = Oe[pv] = Oe[vv] = Oe[hv] = Oe[gv] = Oe[mv] = Oe[bv] = Oe[yv] = Oe[wv] = !0;
Oe[Qp] = Oe[Zp] = Oe[cv] = Oe[Jp] = Oe[dv] = Oe[ev] = Oe[tv] = Oe[nv] = Oe[ov] = Oe[av] = Oe[lv] = Oe[rv] = Oe[sv] = Oe[iv] = Oe[uv] = !1;
function Cv(e) {
  return fn(e) && xl(e.length) && !!Oe[On(e)];
}
function Sv(e) {
  return function(t) {
    return e(t);
  };
}
var ei = typeof exports == "object" && exports && !exports.nodeType && exports, fo = ei && typeof module == "object" && module && !module.nodeType && module, _v = fo && fo.exports === ei, Na = _v && js.process, $v = function() {
  try {
    var e = fo && fo.require && fo.require("util").types;
    return e || Na && Na.binding && Na.binding("util");
  } catch {
  }
}();
const xr = $v;
var Pr = xr && xr.isTypedArray, Ev = Pr ? Sv(Pr) : Cv;
const Al = Ev;
var Tv = Object.prototype, kv = Tv.hasOwnProperty;
function ti(e, t) {
  var n = mt(e), o = !n && Co(e), a = !n && !o && ca(e), l = !n && !o && !a && Al(e), s = n || o || a || l, r = s ? Vp(e.length, String) : [], i = r.length;
  for (var u in e)
    (t || kv.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    wa(u, i))) && r.push(u);
  return r;
}
function ni(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Ov = ni(Object.keys, Object);
const xv = Ov;
var Pv = Object.prototype, Av = Pv.hasOwnProperty;
function Mv(e) {
  if (!Pl(e))
    return xv(e);
  var t = [];
  for (var n in Object(e))
    Av.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ml(e) {
  return Jn(e) ? ti(e) : Mv(e);
}
function Iv(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Lv = Object.prototype, Nv = Lv.hasOwnProperty;
function Rv(e) {
  if (!bt(e))
    return Iv(e);
  var t = Pl(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !Nv.call(e, o)) || n.push(o);
  return n;
}
function oi(e) {
  return Jn(e) ? ti(e, !0) : Rv(e);
}
var Fv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bv = /^\w*$/;
function Il(e, t) {
  if (mt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ya(e) ? !0 : Bv.test(e) || !Fv.test(e) || t != null && e in Object(t);
}
var zv = Pn(Object, "create");
const So = zv;
function Hv() {
  this.__data__ = So ? So(null) : {}, this.size = 0;
}
function Dv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Vv = "__lodash_hash_undefined__", Kv = Object.prototype, Wv = Kv.hasOwnProperty;
function jv(e) {
  var t = this.__data__;
  if (So) {
    var n = t[e];
    return n === Vv ? void 0 : n;
  }
  return Wv.call(t, e) ? t[e] : void 0;
}
var Uv = Object.prototype, qv = Uv.hasOwnProperty;
function Gv(e) {
  var t = this.__data__;
  return So ? t[e] !== void 0 : qv.call(t, e);
}
var Yv = "__lodash_hash_undefined__";
function Xv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = So && t === void 0 ? Yv : t, this;
}
function Tn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Tn.prototype.clear = Hv;
Tn.prototype.delete = Dv;
Tn.prototype.get = jv;
Tn.prototype.has = Gv;
Tn.prototype.set = Xv;
function Qv() {
  this.__data__ = [], this.size = 0;
}
function Ca(e, t) {
  for (var n = e.length; n--; )
    if (ko(e[n][0], t))
      return n;
  return -1;
}
var Zv = Array.prototype, Jv = Zv.splice;
function eh(e) {
  var t = this.__data__, n = Ca(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Jv.call(t, n, 1), --this.size, !0;
}
function th(e) {
  var t = this.__data__, n = Ca(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function nh(e) {
  return Ca(this.__data__, e) > -1;
}
function oh(e, t) {
  var n = this.__data__, o = Ca(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function nn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
nn.prototype.clear = Qv;
nn.prototype.delete = eh;
nn.prototype.get = th;
nn.prototype.has = nh;
nn.prototype.set = oh;
var ah = Pn(zt, "Map");
const _o = ah;
function lh() {
  this.size = 0, this.__data__ = {
    hash: new Tn(),
    map: new (_o || nn)(),
    string: new Tn()
  };
}
function rh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Sa(e, t) {
  var n = e.__data__;
  return rh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function sh(e) {
  var t = Sa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ih(e) {
  return Sa(this, e).get(e);
}
function uh(e) {
  return Sa(this, e).has(e);
}
function ch(e, t) {
  var n = Sa(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function on(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
on.prototype.clear = lh;
on.prototype.delete = sh;
on.prototype.get = ih;
on.prototype.has = uh;
on.prototype.set = ch;
var dh = "Expected a function";
function Ll(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(dh);
  var n = function() {
    var o = arguments, a = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(a))
      return l.get(a);
    var s = e.apply(this, o);
    return n.cache = l.set(a, s) || l, s;
  };
  return n.cache = new (Ll.Cache || on)(), n;
}
Ll.Cache = on;
var fh = 500;
function ph(e) {
  var t = Ll(e, function(o) {
    return n.size === fh && n.clear(), o;
  }), n = t.cache;
  return t;
}
var vh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hh = /\\(\\)?/g, gh = ph(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(vh, function(n, o, a, l) {
    t.push(a ? l.replace(hh, "$1") : o || n);
  }), t;
});
const mh = gh;
function bh(e) {
  return e == null ? "" : Gs(e);
}
function _a(e, t) {
  return mt(e) ? e : Il(e, t) ? [e] : mh(bh(e));
}
var yh = 1 / 0;
function Oo(e) {
  if (typeof e == "string" || ya(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -yh ? "-0" : t;
}
function Nl(e, t) {
  t = _a(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Oo(t[n++])];
  return n && n == o ? e : void 0;
}
function Xe(e, t, n) {
  var o = e == null ? void 0 : Nl(e, t);
  return o === void 0 ? n : o;
}
function ai(e, t) {
  for (var n = -1, o = t.length, a = e.length; ++n < o; )
    e[a + n] = t[n];
  return e;
}
var Ar = Ut ? Ut.isConcatSpreadable : void 0;
function wh(e) {
  return mt(e) || Co(e) || !!(Ar && e && e[Ar]);
}
function Rl(e, t, n, o, a) {
  var l = -1, s = e.length;
  for (n || (n = wh), a || (a = []); ++l < s; ) {
    var r = e[l];
    t > 0 && n(r) ? t > 1 ? Rl(r, t - 1, n, o, a) : ai(a, r) : o || (a[a.length] = r);
  }
  return a;
}
function Ch(e) {
  var t = e == null ? 0 : e.length;
  return t ? Rl(e, 1) : [];
}
function Sh(e) {
  return Ys(Qs(e, void 0, Ch), e + "");
}
var _h = ni(Object.getPrototypeOf, Object);
const li = _h;
var $h = "[object Object]", Eh = Function.prototype, Th = Object.prototype, ri = Eh.toString, kh = Th.hasOwnProperty, Oh = ri.call(Object);
function xh(e) {
  if (!fn(e) || On(e) != $h)
    return !1;
  var t = li(e);
  if (t === null)
    return !0;
  var n = kh.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && ri.call(n) == Oh;
}
function Ph() {
  this.__data__ = new nn(), this.size = 0;
}
function Ah(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Mh(e) {
  return this.__data__.get(e);
}
function Ih(e) {
  return this.__data__.has(e);
}
var Lh = 200;
function Nh(e, t) {
  var n = this.__data__;
  if (n instanceof nn) {
    var o = n.__data__;
    if (!_o || o.length < Lh - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new on(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Wt(e) {
  var t = this.__data__ = new nn(e);
  this.size = t.size;
}
Wt.prototype.clear = Ph;
Wt.prototype.delete = Ah;
Wt.prototype.get = Mh;
Wt.prototype.has = Ih;
Wt.prototype.set = Nh;
var si = typeof exports == "object" && exports && !exports.nodeType && exports, Mr = si && typeof module == "object" && module && !module.nodeType && module, Rh = Mr && Mr.exports === si, Ir = Rh ? zt.Buffer : void 0, Lr = Ir ? Ir.allocUnsafe : void 0;
function Fh(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = Lr ? Lr(n) : new e.constructor(n);
  return e.copy(o), o;
}
function Bh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = 0, l = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (l[a++] = s);
  }
  return l;
}
function zh() {
  return [];
}
var Hh = Object.prototype, Dh = Hh.propertyIsEnumerable, Nr = Object.getOwnPropertySymbols, Vh = Nr ? function(e) {
  return e == null ? [] : (e = Object(e), Bh(Nr(e), function(t) {
    return Dh.call(e, t);
  }));
} : zh;
const Kh = Vh;
function Wh(e, t, n) {
  var o = t(e);
  return mt(e) ? o : ai(o, n(e));
}
function Rr(e) {
  return Wh(e, Ml, Kh);
}
var jh = Pn(zt, "DataView");
const Ya = jh;
var Uh = Pn(zt, "Promise");
const Xa = Uh;
var qh = Pn(zt, "Set");
const Qa = qh;
var Fr = "[object Map]", Gh = "[object Object]", Br = "[object Promise]", zr = "[object Set]", Hr = "[object WeakMap]", Dr = "[object DataView]", Yh = xn(Ya), Xh = xn(_o), Qh = xn(Xa), Zh = xn(Qa), Jh = xn(Ga), mn = On;
(Ya && mn(new Ya(new ArrayBuffer(1))) != Dr || _o && mn(new _o()) != Fr || Xa && mn(Xa.resolve()) != Br || Qa && mn(new Qa()) != zr || Ga && mn(new Ga()) != Hr) && (mn = function(e) {
  var t = On(e), n = t == Gh ? e.constructor : void 0, o = n ? xn(n) : "";
  if (o)
    switch (o) {
      case Yh:
        return Dr;
      case Xh:
        return Fr;
      case Qh:
        return Br;
      case Zh:
        return zr;
      case Jh:
        return Hr;
    }
  return t;
});
const Vr = mn;
var eg = zt.Uint8Array;
const da = eg;
function tg(e) {
  var t = new e.constructor(e.byteLength);
  return new da(t).set(new da(e)), t;
}
function ng(e, t) {
  var n = t ? tg(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function og(e) {
  return typeof e.constructor == "function" && !Pl(e) ? yp(li(e)) : {};
}
var ag = "__lodash_hash_undefined__";
function lg(e) {
  return this.__data__.set(e, ag), this;
}
function rg(e) {
  return this.__data__.has(e);
}
function fa(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new on(); ++t < n; )
    this.add(e[t]);
}
fa.prototype.add = fa.prototype.push = lg;
fa.prototype.has = rg;
function sg(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function ig(e, t) {
  return e.has(t);
}
var ug = 1, cg = 2;
function ii(e, t, n, o, a, l) {
  var s = n & ug, r = e.length, i = t.length;
  if (r != i && !(s && i > r))
    return !1;
  var u = l.get(e), c = l.get(t);
  if (u && c)
    return u == t && c == e;
  var d = -1, h = !0, g = n & cg ? new fa() : void 0;
  for (l.set(e, t), l.set(t, e); ++d < r; ) {
    var v = e[d], f = t[d];
    if (o)
      var y = s ? o(f, v, d, t, e, l) : o(v, f, d, e, t, l);
    if (y !== void 0) {
      if (y)
        continue;
      h = !1;
      break;
    }
    if (g) {
      if (!sg(t, function(p, w) {
        if (!ig(g, w) && (v === p || a(v, p, n, o, l)))
          return g.push(w);
      })) {
        h = !1;
        break;
      }
    } else if (!(v === f || a(v, f, n, o, l))) {
      h = !1;
      break;
    }
  }
  return l.delete(e), l.delete(t), h;
}
function dg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, a) {
    n[++t] = [a, o];
  }), n;
}
function fg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var pg = 1, vg = 2, hg = "[object Boolean]", gg = "[object Date]", mg = "[object Error]", bg = "[object Map]", yg = "[object Number]", wg = "[object RegExp]", Cg = "[object Set]", Sg = "[object String]", _g = "[object Symbol]", $g = "[object ArrayBuffer]", Eg = "[object DataView]", Kr = Ut ? Ut.prototype : void 0, Ra = Kr ? Kr.valueOf : void 0;
function Tg(e, t, n, o, a, l, s) {
  switch (n) {
    case Eg:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case $g:
      return !(e.byteLength != t.byteLength || !l(new da(e), new da(t)));
    case hg:
    case gg:
    case yg:
      return ko(+e, +t);
    case mg:
      return e.name == t.name && e.message == t.message;
    case wg:
    case Sg:
      return e == t + "";
    case bg:
      var r = dg;
    case Cg:
      var i = o & pg;
      if (r || (r = fg), e.size != t.size && !i)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      o |= vg, s.set(e, t);
      var c = ii(r(e), r(t), o, a, l, s);
      return s.delete(e), c;
    case _g:
      if (Ra)
        return Ra.call(e) == Ra.call(t);
  }
  return !1;
}
var kg = 1, Og = Object.prototype, xg = Og.hasOwnProperty;
function Pg(e, t, n, o, a, l) {
  var s = n & kg, r = Rr(e), i = r.length, u = Rr(t), c = u.length;
  if (i != c && !s)
    return !1;
  for (var d = i; d--; ) {
    var h = r[d];
    if (!(s ? h in t : xg.call(t, h)))
      return !1;
  }
  var g = l.get(e), v = l.get(t);
  if (g && v)
    return g == t && v == e;
  var f = !0;
  l.set(e, t), l.set(t, e);
  for (var y = s; ++d < i; ) {
    h = r[d];
    var p = e[h], w = t[h];
    if (o)
      var C = s ? o(w, p, h, t, e, l) : o(p, w, h, e, t, l);
    if (!(C === void 0 ? p === w || a(p, w, n, o, l) : C)) {
      f = !1;
      break;
    }
    y || (y = h == "constructor");
  }
  if (f && !y) {
    var b = e.constructor, $ = t.constructor;
    b != $ && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof $ == "function" && $ instanceof $) && (f = !1);
  }
  return l.delete(e), l.delete(t), f;
}
var Ag = 1, Wr = "[object Arguments]", jr = "[object Array]", Lo = "[object Object]", Mg = Object.prototype, Ur = Mg.hasOwnProperty;
function Ig(e, t, n, o, a, l) {
  var s = mt(e), r = mt(t), i = s ? jr : Vr(e), u = r ? jr : Vr(t);
  i = i == Wr ? Lo : i, u = u == Wr ? Lo : u;
  var c = i == Lo, d = u == Lo, h = i == u;
  if (h && ca(e)) {
    if (!ca(t))
      return !1;
    s = !0, c = !1;
  }
  if (h && !c)
    return l || (l = new Wt()), s || Al(e) ? ii(e, t, n, o, a, l) : Tg(e, t, i, n, o, a, l);
  if (!(n & Ag)) {
    var g = c && Ur.call(e, "__wrapped__"), v = d && Ur.call(t, "__wrapped__");
    if (g || v) {
      var f = g ? e.value() : e, y = v ? t.value() : t;
      return l || (l = new Wt()), a(f, y, n, o, l);
    }
  }
  return h ? (l || (l = new Wt()), Pg(e, t, n, o, a, l)) : !1;
}
function $a(e, t, n, o, a) {
  return e === t ? !0 : e == null || t == null || !fn(e) && !fn(t) ? e !== e && t !== t : Ig(e, t, n, o, $a, a);
}
var Lg = 1, Ng = 2;
function Rg(e, t, n, o) {
  var a = n.length, l = a, s = !o;
  if (e == null)
    return !l;
  for (e = Object(e); a--; ) {
    var r = n[a];
    if (s && r[2] ? r[1] !== e[r[0]] : !(r[0] in e))
      return !1;
  }
  for (; ++a < l; ) {
    r = n[a];
    var i = r[0], u = e[i], c = r[1];
    if (s && r[2]) {
      if (u === void 0 && !(i in e))
        return !1;
    } else {
      var d = new Wt();
      if (o)
        var h = o(u, c, i, e, t, d);
      if (!(h === void 0 ? $a(c, u, Lg | Ng, o, d) : h))
        return !1;
    }
  }
  return !0;
}
function ui(e) {
  return e === e && !bt(e);
}
function Fg(e) {
  for (var t = Ml(e), n = t.length; n--; ) {
    var o = t[n], a = e[o];
    t[n] = [o, a, ui(a)];
  }
  return t;
}
function ci(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Bg(e) {
  var t = Fg(e);
  return t.length == 1 && t[0][2] ? ci(t[0][0], t[0][1]) : function(n) {
    return n === e || Rg(n, e, t);
  };
}
function zg(e, t) {
  return e != null && t in Object(e);
}
function Hg(e, t, n) {
  t = _a(t, e);
  for (var o = -1, a = t.length, l = !1; ++o < a; ) {
    var s = Oo(t[o]);
    if (!(l = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return l || ++o != a ? l : (a = e == null ? 0 : e.length, !!a && xl(a) && wa(s, a) && (mt(e) || Co(e)));
}
function di(e, t) {
  return e != null && Hg(e, t, zg);
}
var Dg = 1, Vg = 2;
function Kg(e, t) {
  return Il(e) && ui(t) ? ci(Oo(e), t) : function(n) {
    var o = Xe(n, e);
    return o === void 0 && o === t ? di(n, e) : $a(t, o, Dg | Vg);
  };
}
function Wg(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function jg(e) {
  return function(t) {
    return Nl(t, e);
  };
}
function Ug(e) {
  return Il(e) ? Wg(Oo(e)) : jg(e);
}
function fi(e) {
  return typeof e == "function" ? e : e == null ? Tl : typeof e == "object" ? mt(e) ? Kg(e[0], e[1]) : Bg(e) : Ug(e);
}
function qg(e) {
  return function(t, n, o) {
    for (var a = -1, l = Object(t), s = o(t), r = s.length; r--; ) {
      var i = s[e ? r : ++a];
      if (n(l[i], i, l) === !1)
        break;
    }
    return t;
  };
}
var Gg = qg();
const pi = Gg;
function Yg(e, t) {
  return e && pi(e, t, Ml);
}
function Xg(e, t) {
  return function(n, o) {
    if (n == null)
      return n;
    if (!Jn(n))
      return e(n, o);
    for (var a = n.length, l = t ? a : -1, s = Object(n); (t ? l-- : ++l < a) && o(s[l], l, s) !== !1; )
      ;
    return n;
  };
}
var Qg = Xg(Yg);
const Zg = Qg;
var Jg = function() {
  return zt.Date.now();
};
const Fa = Jg;
var em = "Expected a function", tm = Math.max, nm = Math.min;
function zn(e, t, n) {
  var o, a, l, s, r, i, u = 0, c = !1, d = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(em);
  t = qa(t) || 0, bt(n) && (c = !!n.leading, d = "maxWait" in n, l = d ? tm(qa(n.maxWait) || 0, t) : l, h = "trailing" in n ? !!n.trailing : h);
  function g(E) {
    var _ = o, x = a;
    return o = a = void 0, u = E, s = e.apply(x, _), s;
  }
  function v(E) {
    return u = E, r = setTimeout(p, t), c ? g(E) : s;
  }
  function f(E) {
    var _ = E - i, x = E - u, L = t - _;
    return d ? nm(L, l - x) : L;
  }
  function y(E) {
    var _ = E - i, x = E - u;
    return i === void 0 || _ >= t || _ < 0 || d && x >= l;
  }
  function p() {
    var E = Fa();
    if (y(E))
      return w(E);
    r = setTimeout(p, f(E));
  }
  function w(E) {
    return r = void 0, h && o ? g(E) : (o = a = void 0, s);
  }
  function C() {
    r !== void 0 && clearTimeout(r), u = 0, o = i = a = r = void 0;
  }
  function b() {
    return r === void 0 ? s : w(Fa());
  }
  function $() {
    var E = Fa(), _ = y(E);
    if (o = arguments, a = this, i = E, _) {
      if (r === void 0)
        return v(i);
      if (d)
        return clearTimeout(r), r = setTimeout(p, t), g(i);
    }
    return r === void 0 && (r = setTimeout(p, t)), s;
  }
  return $.cancel = C, $.flush = b, $;
}
function Za(e, t, n) {
  (n !== void 0 && !ko(e[t], n) || n === void 0 && !(t in e)) && Ol(e, t, n);
}
function om(e) {
  return fn(e) && Jn(e);
}
function Ja(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function am(e) {
  return Rp(e, oi(e));
}
function lm(e, t, n, o, a, l, s) {
  var r = Ja(e, n), i = Ja(t, n), u = s.get(i);
  if (u) {
    Za(e, n, u);
    return;
  }
  var c = l ? l(r, i, n + "", e, t, s) : void 0, d = c === void 0;
  if (d) {
    var h = mt(i), g = !h && ca(i), v = !h && !g && Al(i);
    c = i, h || g || v ? mt(r) ? c = r : om(r) ? c = Cp(r) : g ? (d = !1, c = Fh(i, !0)) : v ? (d = !1, c = ng(i, !0)) : c = [] : xh(i) || Co(i) ? (c = r, Co(r) ? c = am(r) : (!bt(r) || kl(r)) && (c = og(i))) : d = !1;
  }
  d && (s.set(i, c), a(c, i, o, l, s), s.delete(i)), Za(e, n, c);
}
function vi(e, t, n, o, a) {
  e !== t && pi(t, function(l, s) {
    if (a || (a = new Wt()), bt(l))
      lm(e, t, s, n, vi, o, a);
    else {
      var r = o ? o(Ja(e, s), l, s + "", e, t, a) : void 0;
      r === void 0 && (r = l), Za(e, s, r);
    }
  }, oi);
}
var rm = Math.max, sm = Math.min;
function im(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var a = o - 1;
  return n !== void 0 && (a = Jf(n), a = n < 0 ? rm(o + a, 0) : sm(a, o - 1)), Ap(e, fi(t), a, !0);
}
function um(e, t) {
  var n = -1, o = Jn(e) ? Array(e.length) : [];
  return Zg(e, function(a, l, s) {
    o[++n] = t(a, l, s);
  }), o;
}
function cm(e, t) {
  var n = mt(e) ? qs : um;
  return n(e, fi(t));
}
function dm(e, t) {
  return Rl(cm(e, t), 1);
}
function pa(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var a = e[t];
    o[a[0]] = a[1];
  }
  return o;
}
function va(e, t) {
  return $a(e, t);
}
function xo(e) {
  return e == null;
}
function fm(e) {
  return e === void 0;
}
var pm = Hp(function(e, t, n) {
  vi(e, t, n);
});
const hi = pm;
function gi(e, t, n, o) {
  if (!bt(e))
    return e;
  t = _a(t, e);
  for (var a = -1, l = t.length, s = l - 1, r = e; r != null && ++a < l; ) {
    var i = Oo(t[a]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (a != s) {
      var c = r[i];
      u = o ? o(c, i, r) : void 0, u === void 0 && (u = bt(c) ? c : wa(t[a + 1]) ? [] : {});
    }
    Xs(r, i, u), r = r[i];
  }
  return e;
}
function vm(e, t, n) {
  for (var o = -1, a = t.length, l = {}; ++o < a; ) {
    var s = t[o], r = Nl(e, s);
    n(r, s) && gi(l, _a(s, e), r);
  }
  return l;
}
function hm(e, t) {
  return vm(e, t, function(n, o) {
    return di(e, o);
  });
}
var gm = Sh(function(e, t) {
  return e == null ? {} : hm(e, t);
});
const mm = gm;
function bm(e, t, n) {
  return e == null ? e : gi(e, t, n);
}
const Hn = (e) => e === void 0, Dn = (e) => typeof e == "boolean", xe = (e) => typeof e == "number", Vn = (e) => typeof Element > "u" ? !1 : e instanceof Element, ym = (e) => Tt(e) ? !Number.isNaN(Number(e)) : !1, wm = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), qr = (e) => Object.keys(e), Cm = (e, t, n) => ({
  get value() {
    return Xe(e, t, n);
  },
  set value(o) {
    bm(e, t, o);
  }
});
class mi extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function bi(e, t) {
  throw new mi(`[${e}] ${t}`);
}
function je(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Tt(e) ? new mi(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Sm = "utils/dom/style", yi = (e = "") => e.split(" ").filter((t) => !!t.trim()), Wo = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, wi = (e, t) => {
  !e || !t.trim() || e.classList.add(...yi(t));
}, el = (e, t) => {
  !e || !t.trim() || e.classList.remove(...yi(t));
};
function tl(e, t = "px") {
  if (!e)
    return "";
  if (xe(e) || ym(e))
    return `${e}${t}`;
  if (Tt(e))
    return e;
  je(Sm, "binding value must be a string or number");
}
function _m(e, t) {
  if (!Ie)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const a = t.offsetTop + n.reduce((i, u) => i + u.offsetTop, 0), l = a + t.offsetHeight, s = e.scrollTop, r = s + e.clientHeight;
  a < s ? e.scrollTop = a : l > r && (e.scrollTop = l - e.clientHeight);
}
const Ci = "__epPropKey", fe = (e) => e, $m = (e) => nt(e) && !!e[Ci], Ea = (e, t) => {
  if (!nt(e) || $m(e))
    return e;
  const { values: n, required: o, default: a, type: l, validator: s } = e, i = {
    type: l,
    required: !!o,
    validator: n || s ? (u) => {
      let c = !1, d = [];
      if (n && (d = Array.from(n), $n(e, "default") && d.push(a), c || (c = d.includes(u))), s && (c || (c = s(u))), !c && d.length > 0) {
        const h = [...new Set(d)].map((g) => JSON.stringify(g)).join(", ");
        qu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(u)}.`);
      }
      return c;
    } : void 0,
    [Ci]: !0
  };
  return $n(e, "default") && (i.default = a), i;
}, Ee = (e) => pa(Object.entries(e).map(([t, n]) => [
  t,
  Ea(n, t)
])), qt = fe([
  String,
  Object,
  Function
]), Si = {
  validating: _l,
  success: jc,
  error: Sl
}, dt = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, eo = (e) => (e.install = wo, e), Kn = {
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
}, tt = "update:modelValue", _i = "change", Po = ["", "default", "small", "large"], Em = {
  large: 40,
  default: 32,
  small: 24
}, Tm = (e) => Em[e || "default"], km = (e) => ["", ...Po].includes(e), $i = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), Om = (e) => Ie ? window.requestAnimationFrame(e) : setTimeout(e, 16), sn = (e) => e, xm = ["class", "style"], Pm = /^on[A-Z]/, Am = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = S(() => ((n == null ? void 0 : n.value) || []).concat(xm)), a = Ce();
  return a ? S(() => {
    var l;
    return pa(Object.entries((l = a.proxy) == null ? void 0 : l.$attrs).filter(([s]) => !o.value.includes(s) && !(t && Pm.test(s))));
  }) : (je("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), S(() => ({})));
}, Ei = ({ from: e, replacement: t, scope: n, version: o, ref: a, type: l = "API" }, s) => {
  Y(() => m(s), (r) => {
    r && je(n, `[${l}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${a}
`);
  }, {
    immediate: !0
  });
};
var Mm = {
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
const Im = (e) => (t, n) => Lm(t, n, m(e)), Lm = (e, t, n) => Xe(n, e, e).replace(/\{(\w+)\}/g, (o, a) => {
  var l;
  return `${(l = t == null ? void 0 : t[a]) != null ? l : `{${a}}`}`;
}), Nm = (e) => {
  const t = S(() => m(e).name), n = Rn(e) ? e : k(e);
  return {
    lang: t,
    locale: n,
    t: Im(e)
  };
}, Ti = Symbol("localeContextKey"), Pt = (e) => {
  const t = e || pe(Ti, k());
  return Nm(S(() => t.value || Mm));
}, Ba = "el", Rm = "is-", gn = (e, t, n, o, a) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), a && (l += `--${a}`), l;
}, ki = Symbol("namespaceContextKey"), Fl = (e) => {
  const t = e || (Ce() ? pe(ki, k(Ba)) : k(Ba));
  return S(() => m(t) || Ba);
}, ce = (e, t) => {
  const n = Fl(t);
  return {
    namespace: n,
    b: (f = "") => gn(n.value, e, f, "", ""),
    e: (f) => f ? gn(n.value, e, "", f, "") : "",
    m: (f) => f ? gn(n.value, e, "", "", f) : "",
    be: (f, y) => f && y ? gn(n.value, e, f, y, "") : "",
    em: (f, y) => f && y ? gn(n.value, e, "", f, y) : "",
    bm: (f, y) => f && y ? gn(n.value, e, f, "", y) : "",
    bem: (f, y, p) => f && y && p ? gn(n.value, e, f, y, p) : "",
    is: (f, ...y) => {
      const p = y.length >= 1 ? y[0] : !0;
      return f && p ? `${Rm}${f}` : "";
    },
    cssVar: (f) => {
      const y = {};
      for (const p in f)
        f[p] && (y[`--${n.value}-${p}`] = f[p]);
      return y;
    },
    cssVarName: (f) => `--${n.value}-${f}`,
    cssVarBlock: (f) => {
      const y = {};
      for (const p in f)
        f[p] && (y[`--${n.value}-${e}-${p}`] = f[p]);
      return y;
    },
    cssVarBlockName: (f) => `--${n.value}-${e}-${f}`
  };
}, Fm = Ea({
  type: fe(Boolean),
  default: null
}), Bm = Ea({
  type: fe(Function)
}), Oi = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], a = {
    [e]: Fm,
    [n]: Bm
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: r,
      shouldHideWhenRouteChanges: i,
      shouldProceed: u,
      onShow: c,
      onHide: d
    }) => {
      const h = Ce(), { emit: g } = h, v = h.props, f = S(() => Et(v[n])), y = S(() => v[e] === null), p = (_) => {
        s.value !== !0 && (s.value = !0, r && (r.value = _), Et(c) && c(_));
      }, w = (_) => {
        s.value !== !1 && (s.value = !1, r && (r.value = _), Et(d) && d(_));
      }, C = (_) => {
        if (v.disabled === !0 || Et(u) && !u())
          return;
        const x = f.value && Ie;
        x && g(t, !0), (y.value || !x) && p(_);
      }, b = (_) => {
        if (v.disabled === !0 || !Ie)
          return;
        const x = f.value && Ie;
        x && g(t, !1), (y.value || !x) && w(_);
      }, $ = (_) => {
        Dn(_) && (v.disabled && _ ? f.value && g(t, !1) : s.value !== _ && (_ ? p() : w()));
      }, E = () => {
        s.value ? b() : C();
      };
      return Y(() => v[e], $), i && h.appContext.config.globalProperties.$route !== void 0 && Y(() => ({
        ...h.proxy.$route
      }), () => {
        i.value && s.value && b();
      }), Me(() => {
        $(v[e]);
      }), {
        hide: b,
        show: C,
        toggle: E,
        hasUpdateHandler: f
      };
    },
    useModelToggleProps: a,
    useModelToggleEmits: o
  };
};
Oi("modelValue");
const xi = (e) => {
  const t = Ce();
  return S(() => {
    var n, o;
    return (o = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
};
var ut = "top", Ot = "bottom", xt = "right", ct = "left", Bl = "auto", Ao = [ut, Ot, xt, ct], Wn = "start", $o = "end", zm = "clippingParents", Pi = "viewport", io = "popper", Hm = "reference", Gr = Ao.reduce(function(e, t) {
  return e.concat([t + "-" + Wn, t + "-" + $o]);
}, []), Ta = [].concat(Ao, [Bl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Wn, t + "-" + $o]);
}, []), Dm = "beforeRead", Vm = "read", Km = "afterRead", Wm = "beforeMain", jm = "main", Um = "afterMain", qm = "beforeWrite", Gm = "write", Ym = "afterWrite", Xm = [Dm, Vm, Km, Wm, jm, Um, qm, Gm, Ym];
function Gt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ht(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function jn(e) {
  var t = Ht(e).Element;
  return e instanceof t || e instanceof Element;
}
function kt(e) {
  var t = Ht(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function zl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ht(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Qm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, a = t.attributes[n] || {}, l = t.elements[n];
    !kt(l) || !Gt(l) || (Object.assign(l.style, o), Object.keys(a).forEach(function(s) {
      var r = a[s];
      r === !1 ? l.removeAttribute(s) : l.setAttribute(s, r === !0 ? "" : r);
    }));
  });
}
function Zm(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var a = t.elements[o], l = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), r = s.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !kt(a) || !Gt(a) || (Object.assign(a.style, r), Object.keys(l).forEach(function(i) {
        a.removeAttribute(i);
      }));
    });
  };
}
var Ai = { name: "applyStyles", enabled: !0, phase: "write", fn: Qm, effect: Zm, requires: ["computeStyles"] };
function jt(e) {
  return e.split("-")[0];
}
var Sn = Math.max, ha = Math.min, Un = Math.round;
function qn(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  if (kt(e) && t) {
    var l = e.offsetHeight, s = e.offsetWidth;
    s > 0 && (o = Un(n.width) / s || 1), l > 0 && (a = Un(n.height) / l || 1);
  }
  return { width: n.width / o, height: n.height / a, top: n.top / a, right: n.right / o, bottom: n.bottom / a, left: n.left / o, x: n.left / o, y: n.top / a };
}
function Hl(e) {
  var t = qn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Mi(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && zl(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function tn(e) {
  return Ht(e).getComputedStyle(e);
}
function Jm(e) {
  return ["table", "td", "th"].indexOf(Gt(e)) >= 0;
}
function pn(e) {
  return ((jn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ka(e) {
  return Gt(e) === "html" ? e : e.assignedSlot || e.parentNode || (zl(e) ? e.host : null) || pn(e);
}
function Yr(e) {
  return !kt(e) || tn(e).position === "fixed" ? null : e.offsetParent;
}
function e0(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && kt(e)) {
    var o = tn(e);
    if (o.position === "fixed")
      return null;
  }
  var a = ka(e);
  for (zl(a) && (a = a.host); kt(a) && ["html", "body"].indexOf(Gt(a)) < 0; ) {
    var l = tn(a);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Mo(e) {
  for (var t = Ht(e), n = Yr(e); n && Jm(n) && tn(n).position === "static"; )
    n = Yr(n);
  return n && (Gt(n) === "html" || Gt(n) === "body" && tn(n).position === "static") ? t : n || e0(e) || t;
}
function Dl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function po(e, t, n) {
  return Sn(e, ha(t, n));
}
function t0(e, t, n) {
  var o = po(e, t, n);
  return o > n ? n : o;
}
function Ii() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Li(e) {
  return Object.assign({}, Ii(), e);
}
function Ni(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var n0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Li(typeof e != "number" ? e : Ni(e, Ao));
};
function o0(e) {
  var t, n = e.state, o = e.name, a = e.options, l = n.elements.arrow, s = n.modifiersData.popperOffsets, r = jt(n.placement), i = Dl(r), u = [ct, xt].indexOf(r) >= 0, c = u ? "height" : "width";
  if (!(!l || !s)) {
    var d = n0(a.padding, n), h = Hl(l), g = i === "y" ? ut : ct, v = i === "y" ? Ot : xt, f = n.rects.reference[c] + n.rects.reference[i] - s[i] - n.rects.popper[c], y = s[i] - n.rects.reference[i], p = Mo(l), w = p ? i === "y" ? p.clientHeight || 0 : p.clientWidth || 0 : 0, C = f / 2 - y / 2, b = d[g], $ = w - h[c] - d[v], E = w / 2 - h[c] / 2 + C, _ = po(b, E, $), x = i;
    n.modifiersData[o] = (t = {}, t[x] = _, t.centerOffset = _ - E, t);
  }
}
function a0(e) {
  var t = e.state, n = e.options, o = n.element, a = o === void 0 ? "[data-popper-arrow]" : o;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || !Mi(t.elements.popper, a) || (t.elements.arrow = a));
}
var l0 = { name: "arrow", enabled: !0, phase: "main", fn: o0, effect: a0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Gn(e) {
  return e.split("-")[1];
}
var r0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function s0(e) {
  var t = e.x, n = e.y, o = window, a = o.devicePixelRatio || 1;
  return { x: Un(t * a) / a || 0, y: Un(n * a) / a || 0 };
}
function Xr(e) {
  var t, n = e.popper, o = e.popperRect, a = e.placement, l = e.variation, s = e.offsets, r = e.position, i = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, h = s.x, g = h === void 0 ? 0 : h, v = s.y, f = v === void 0 ? 0 : v, y = typeof c == "function" ? c({ x: g, y: f }) : { x: g, y: f };
  g = y.x, f = y.y;
  var p = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), C = ct, b = ut, $ = window;
  if (u) {
    var E = Mo(n), _ = "clientHeight", x = "clientWidth";
    if (E === Ht(n) && (E = pn(n), tn(E).position !== "static" && r === "absolute" && (_ = "scrollHeight", x = "scrollWidth")), E = E, a === ut || (a === ct || a === xt) && l === $o) {
      b = Ot;
      var L = d && E === $ && $.visualViewport ? $.visualViewport.height : E[_];
      f -= L - o.height, f *= i ? 1 : -1;
    }
    if (a === ct || (a === ut || a === Ot) && l === $o) {
      C = xt;
      var D = d && E === $ && $.visualViewport ? $.visualViewport.width : E[x];
      g -= D - o.width, g *= i ? 1 : -1;
    }
  }
  var B = Object.assign({ position: r }, u && r0), I = c === !0 ? s0({ x: g, y: f }) : { x: g, y: f };
  if (g = I.x, f = I.y, i) {
    var Z;
    return Object.assign({}, B, (Z = {}, Z[b] = w ? "0" : "", Z[C] = p ? "0" : "", Z.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", Z));
  }
  return Object.assign({}, B, (t = {}, t[b] = w ? f + "px" : "", t[C] = p ? g + "px" : "", t.transform = "", t));
}
function i0(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, a = o === void 0 ? !0 : o, l = n.adaptive, s = l === void 0 ? !0 : l, r = n.roundOffsets, i = r === void 0 ? !0 : r, u = { placement: jt(t.placement), variation: Gn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Xr(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Xr(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Ri = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: i0, data: {} }, No = { passive: !0 };
function u0(e) {
  var t = e.state, n = e.instance, o = e.options, a = o.scroll, l = a === void 0 ? !0 : a, s = o.resize, r = s === void 0 ? !0 : s, i = Ht(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, No);
  }), r && i.addEventListener("resize", n.update, No), function() {
    l && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, No);
    }), r && i.removeEventListener("resize", n.update, No);
  };
}
var Fi = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: u0, data: {} }, c0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function jo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return c0[t];
  });
}
var d0 = { start: "end", end: "start" };
function Qr(e) {
  return e.replace(/start|end/g, function(t) {
    return d0[t];
  });
}
function Vl(e) {
  var t = Ht(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Kl(e) {
  return qn(pn(e)).left + Vl(e).scrollLeft;
}
function f0(e) {
  var t = Ht(e), n = pn(e), o = t.visualViewport, a = n.clientWidth, l = n.clientHeight, s = 0, r = 0;
  return o && (a = o.width, l = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = o.offsetLeft, r = o.offsetTop)), { width: a, height: l, x: s + Kl(e), y: r };
}
function p0(e) {
  var t, n = pn(e), o = Vl(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, l = Sn(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = Sn(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), r = -o.scrollLeft + Kl(e), i = -o.scrollTop;
  return tn(a || n).direction === "rtl" && (r += Sn(n.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: s, x: r, y: i };
}
function Wl(e) {
  var t = tn(e), n = t.overflow, o = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function Bi(e) {
  return ["html", "body", "#document"].indexOf(Gt(e)) >= 0 ? e.ownerDocument.body : kt(e) && Wl(e) ? e : Bi(ka(e));
}
function vo(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Bi(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Ht(o), s = a ? [l].concat(l.visualViewport || [], Wl(o) ? o : []) : o, r = t.concat(s);
  return a ? r : r.concat(vo(ka(s)));
}
function nl(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function v0(e) {
  var t = qn(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Zr(e, t) {
  return t === Pi ? nl(f0(e)) : jn(t) ? v0(t) : nl(p0(pn(e)));
}
function h0(e) {
  var t = vo(ka(e)), n = ["absolute", "fixed"].indexOf(tn(e).position) >= 0, o = n && kt(e) ? Mo(e) : e;
  return jn(o) ? t.filter(function(a) {
    return jn(a) && Mi(a, o) && Gt(a) !== "body";
  }) : [];
}
function g0(e, t, n) {
  var o = t === "clippingParents" ? h0(e) : [].concat(t), a = [].concat(o, [n]), l = a[0], s = a.reduce(function(r, i) {
    var u = Zr(e, i);
    return r.top = Sn(u.top, r.top), r.right = ha(u.right, r.right), r.bottom = ha(u.bottom, r.bottom), r.left = Sn(u.left, r.left), r;
  }, Zr(e, l));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function zi(e) {
  var t = e.reference, n = e.element, o = e.placement, a = o ? jt(o) : null, l = o ? Gn(o) : null, s = t.x + t.width / 2 - n.width / 2, r = t.y + t.height / 2 - n.height / 2, i;
  switch (a) {
    case ut:
      i = { x: s, y: t.y - n.height };
      break;
    case Ot:
      i = { x: s, y: t.y + t.height };
      break;
    case xt:
      i = { x: t.x + t.width, y: r };
      break;
    case ct:
      i = { x: t.x - n.width, y: r };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = a ? Dl(a) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (l) {
      case Wn:
        i[u] = i[u] - (t[c] / 2 - n[c] / 2);
        break;
      case $o:
        i[u] = i[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return i;
}
function Eo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = o === void 0 ? e.placement : o, l = n.boundary, s = l === void 0 ? zm : l, r = n.rootBoundary, i = r === void 0 ? Pi : r, u = n.elementContext, c = u === void 0 ? io : u, d = n.altBoundary, h = d === void 0 ? !1 : d, g = n.padding, v = g === void 0 ? 0 : g, f = Li(typeof v != "number" ? v : Ni(v, Ao)), y = c === io ? Hm : io, p = e.rects.popper, w = e.elements[h ? y : c], C = g0(jn(w) ? w : w.contextElement || pn(e.elements.popper), s, i), b = qn(e.elements.reference), $ = zi({ reference: b, element: p, strategy: "absolute", placement: a }), E = nl(Object.assign({}, p, $)), _ = c === io ? E : b, x = { top: C.top - _.top + f.top, bottom: _.bottom - C.bottom + f.bottom, left: C.left - _.left + f.left, right: _.right - C.right + f.right }, L = e.modifiersData.offset;
  if (c === io && L) {
    var D = L[a];
    Object.keys(x).forEach(function(B) {
      var I = [xt, Ot].indexOf(B) >= 0 ? 1 : -1, Z = [ut, Ot].indexOf(B) >= 0 ? "y" : "x";
      x[B] += D[Z] * I;
    });
  }
  return x;
}
function m0(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = n.boundary, l = n.rootBoundary, s = n.padding, r = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? Ta : i, c = Gn(o), d = c ? r ? Gr : Gr.filter(function(v) {
    return Gn(v) === c;
  }) : Ao, h = d.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  h.length === 0 && (h = d);
  var g = h.reduce(function(v, f) {
    return v[f] = Eo(e, { placement: f, boundary: a, rootBoundary: l, padding: s })[jt(f)], v;
  }, {});
  return Object.keys(g).sort(function(v, f) {
    return g[v] - g[f];
  });
}
function b0(e) {
  if (jt(e) === Bl)
    return [];
  var t = jo(e);
  return [Qr(e), t, Qr(t)];
}
function y0(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var a = n.mainAxis, l = a === void 0 ? !0 : a, s = n.altAxis, r = s === void 0 ? !0 : s, i = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, h = n.altBoundary, g = n.flipVariations, v = g === void 0 ? !0 : g, f = n.allowedAutoPlacements, y = t.options.placement, p = jt(y), w = p === y, C = i || (w || !v ? [jo(y)] : b0(y)), b = [y].concat(C).reduce(function(be, _e) {
      return be.concat(jt(_e) === Bl ? m0(t, { placement: _e, boundary: c, rootBoundary: d, padding: u, flipVariations: v, allowedAutoPlacements: f }) : _e);
    }, []), $ = t.rects.reference, E = t.rects.popper, _ = /* @__PURE__ */ new Map(), x = !0, L = b[0], D = 0; D < b.length; D++) {
      var B = b[D], I = jt(B), Z = Gn(B) === Wn, J = [ut, Ot].indexOf(I) >= 0, oe = J ? "width" : "height", ae = Eo(t, { placement: B, boundary: c, rootBoundary: d, altBoundary: h, padding: u }), j = J ? Z ? xt : ct : Z ? Ot : ut;
      $[oe] > E[oe] && (j = jo(j));
      var ne = jo(j), A = [];
      if (l && A.push(ae[I] <= 0), r && A.push(ae[j] <= 0, ae[ne] <= 0), A.every(function(be) {
        return be;
      })) {
        L = B, x = !1;
        break;
      }
      _.set(B, A);
    }
    if (x)
      for (var U = v ? 3 : 1, le = function(be) {
        var _e = b.find(function(Te) {
          var Le = _.get(Te);
          if (Le)
            return Le.slice(0, be).every(function(Se) {
              return Se;
            });
        });
        if (_e)
          return L = _e, "break";
      }, ue = U; ue > 0; ue--) {
        var me = le(ue);
        if (me === "break")
          break;
      }
    t.placement !== L && (t.modifiersData[o]._skip = !0, t.placement = L, t.reset = !0);
  }
}
var w0 = { name: "flip", enabled: !0, phase: "main", fn: y0, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Jr(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function es(e) {
  return [ut, xt, Ot, ct].some(function(t) {
    return e[t] >= 0;
  });
}
function C0(e) {
  var t = e.state, n = e.name, o = t.rects.reference, a = t.rects.popper, l = t.modifiersData.preventOverflow, s = Eo(t, { elementContext: "reference" }), r = Eo(t, { altBoundary: !0 }), i = Jr(s, o), u = Jr(r, a, l), c = es(i), d = es(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: c, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": c, "data-popper-escaped": d });
}
var S0 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: C0 };
function _0(e, t, n) {
  var o = jt(e), a = [ct, ut].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = l[0], r = l[1];
  return s = s || 0, r = (r || 0) * a, [ct, xt].indexOf(o) >= 0 ? { x: r, y: s } : { x: s, y: r };
}
function $0(e) {
  var t = e.state, n = e.options, o = e.name, a = n.offset, l = a === void 0 ? [0, 0] : a, s = Ta.reduce(function(c, d) {
    return c[d] = _0(d, t.rects, l), c;
  }, {}), r = s[t.placement], i = r.x, u = r.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
}
var E0 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: $0 };
function T0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = zi({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var Hi = { name: "popperOffsets", enabled: !0, phase: "read", fn: T0, data: {} };
function k0(e) {
  return e === "x" ? "y" : "x";
}
function O0(e) {
  var t = e.state, n = e.options, o = e.name, a = n.mainAxis, l = a === void 0 ? !0 : a, s = n.altAxis, r = s === void 0 ? !1 : s, i = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, h = n.tether, g = h === void 0 ? !0 : h, v = n.tetherOffset, f = v === void 0 ? 0 : v, y = Eo(t, { boundary: i, rootBoundary: u, padding: d, altBoundary: c }), p = jt(t.placement), w = Gn(t.placement), C = !w, b = Dl(p), $ = k0(b), E = t.modifiersData.popperOffsets, _ = t.rects.reference, x = t.rects.popper, L = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f, D = typeof L == "number" ? { mainAxis: L, altAxis: L } : Object.assign({ mainAxis: 0, altAxis: 0 }, L), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = { x: 0, y: 0 };
  if (E) {
    if (l) {
      var Z, J = b === "y" ? ut : ct, oe = b === "y" ? Ot : xt, ae = b === "y" ? "height" : "width", j = E[b], ne = j + y[J], A = j - y[oe], U = g ? -x[ae] / 2 : 0, le = w === Wn ? _[ae] : x[ae], ue = w === Wn ? -x[ae] : -_[ae], me = t.elements.arrow, be = g && me ? Hl(me) : { width: 0, height: 0 }, _e = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ii(), Te = _e[J], Le = _e[oe], Se = po(0, _[ae], be[ae]), Re = C ? _[ae] / 2 - U - Se - Te - D.mainAxis : le - Se - Te - D.mainAxis, Ae = C ? -_[ae] / 2 + U + Se + Le + D.mainAxis : ue + Se + Le + D.mainAxis, qe = t.elements.arrow && Mo(t.elements.arrow), At = qe ? b === "y" ? qe.clientTop || 0 : qe.clientLeft || 0 : 0, at = (Z = B == null ? void 0 : B[b]) != null ? Z : 0, Mt = j + Re - at - At, yt = j + Ae - at, ft = po(g ? ha(ne, Mt) : ne, j, g ? Sn(A, yt) : A);
      E[b] = ft, I[b] = ft - j;
    }
    if (r) {
      var Dt, pt = b === "x" ? ut : ct, It = b === "x" ? Ot : xt, Ze = E[$], wt = $ === "y" ? "height" : "width", vt = Ze + y[pt], Vt = Ze - y[It], Ct = [ut, ct].indexOf(p) !== -1, z = (Dt = B == null ? void 0 : B[$]) != null ? Dt : 0, te = Ct ? vt : Ze - _[wt] - x[wt] - z + D.altAxis, ke = Ct ? Ze + _[wt] + x[wt] - z - D.altAxis : Vt, Be = g && Ct ? t0(te, Ze, ke) : po(g ? te : vt, Ze, g ? ke : Vt);
      E[$] = Be, I[$] = Be - Ze;
    }
    t.modifiersData[o] = I;
  }
}
var x0 = { name: "preventOverflow", enabled: !0, phase: "main", fn: O0, requiresIfExists: ["offset"] };
function P0(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function A0(e) {
  return e === Ht(e) || !kt(e) ? Vl(e) : P0(e);
}
function M0(e) {
  var t = e.getBoundingClientRect(), n = Un(t.width) / e.offsetWidth || 1, o = Un(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function I0(e, t, n) {
  n === void 0 && (n = !1);
  var o = kt(t), a = kt(t) && M0(t), l = pn(t), s = qn(e, a), r = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((Gt(t) !== "body" || Wl(l)) && (r = A0(t)), kt(t) ? (i = qn(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = Kl(l))), { x: s.left + r.scrollLeft - i.x, y: s.top + r.scrollTop - i.y, width: s.width, height: s.height };
}
function L0(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(l) {
    t.set(l.name, l);
  });
  function a(l) {
    n.add(l.name);
    var s = [].concat(l.requires || [], l.requiresIfExists || []);
    s.forEach(function(r) {
      if (!n.has(r)) {
        var i = t.get(r);
        i && a(i);
      }
    }), o.push(l);
  }
  return e.forEach(function(l) {
    n.has(l.name) || a(l);
  }), o;
}
function N0(e) {
  var t = L0(e);
  return Xm.reduce(function(n, o) {
    return n.concat(t.filter(function(a) {
      return a.phase === o;
    }));
  }, []);
}
function R0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function F0(e) {
  var t = e.reduce(function(n, o) {
    var a = n[o.name];
    return n[o.name] = a ? Object.assign({}, a, o, { options: Object.assign({}, a.options, o.options), data: Object.assign({}, a.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ts = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ns() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function jl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, a = t.defaultOptions, l = a === void 0 ? ts : a;
  return function(s, r, i) {
    i === void 0 && (i = l);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ts, l), modifiersData: {}, elements: { reference: s, popper: r }, attributes: {}, styles: {} }, c = [], d = !1, h = { state: u, setOptions: function(f) {
      var y = typeof f == "function" ? f(u.options) : f;
      v(), u.options = Object.assign({}, l, u.options, y), u.scrollParents = { reference: jn(s) ? vo(s) : s.contextElement ? vo(s.contextElement) : [], popper: vo(r) };
      var p = N0(F0([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = p.filter(function(w) {
        return w.enabled;
      }), g(), h.update();
    }, forceUpdate: function() {
      if (!d) {
        var f = u.elements, y = f.reference, p = f.popper;
        if (ns(y, p)) {
          u.rects = { reference: I0(y, Mo(p), u.options.strategy === "fixed"), popper: Hl(p) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(x) {
            return u.modifiersData[x.name] = Object.assign({}, x.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var C = u.orderedModifiers[w], b = C.fn, $ = C.options, E = $ === void 0 ? {} : $, _ = C.name;
            typeof b == "function" && (u = b({ state: u, options: E, name: _, instance: h }) || u);
          }
        }
      }
    }, update: R0(function() {
      return new Promise(function(f) {
        h.forceUpdate(), f(u);
      });
    }), destroy: function() {
      v(), d = !0;
    } };
    if (!ns(s, r))
      return h;
    h.setOptions(i).then(function(f) {
      !d && i.onFirstUpdate && i.onFirstUpdate(f);
    });
    function g() {
      u.orderedModifiers.forEach(function(f) {
        var y = f.name, p = f.options, w = p === void 0 ? {} : p, C = f.effect;
        if (typeof C == "function") {
          var b = C({ state: u, name: y, instance: h, options: w }), $ = function() {
          };
          c.push(b || $);
        }
      });
    }
    function v() {
      c.forEach(function(f) {
        return f();
      }), c = [];
    }
    return h;
  };
}
jl();
var B0 = [Fi, Hi, Ri, Ai];
jl({ defaultModifiers: B0 });
var z0 = [Fi, Hi, Ri, Ai, E0, w0, x0, l0, S0], Di = jl({ defaultModifiers: z0 });
const H0 = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = D0(i);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, a = S(() => {
    const { onFirstUpdate: i, placement: u, strategy: c, modifiers: d } = m(n);
    return {
      onFirstUpdate: i,
      placement: u || "bottom",
      strategy: c || "absolute",
      modifiers: [
        ...d || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), l = Cn(), s = k({
    styles: {
      popper: {
        position: m(a).strategy,
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
  return Y(a, (i) => {
    const u = m(l);
    u && u.setOptions(i);
  }, {
    deep: !0
  }), Y([e, t], ([i, u]) => {
    r(), !(!i || !u) && (l.value = Di(i, u, m(a)));
  }), Bt(() => {
    r();
  }), {
    state: S(() => {
      var i;
      return { ...((i = m(l)) == null ? void 0 : i.state) || {} };
    }),
    styles: S(() => m(s).styles),
    attributes: S(() => m(s).attributes),
    update: () => {
      var i;
      return (i = m(l)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = m(l)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: S(() => m(l))
  };
};
function D0(e) {
  const t = Object.keys(e.elements), n = pa(t.map((a) => [a, e.styles[a] || {}])), o = pa(t.map((a) => [a, e.attributes[a]]));
  return {
    styles: n,
    attributes: o
  };
}
function os() {
  let e;
  const t = (o, a) => {
    n(), e = window.setTimeout(o, a);
  }, n = () => window.clearTimeout(e);
  return $l(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const ol = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, V0 = Symbol("elIdInjection"), Vi = () => Ce() ? pe(V0, ol) : ol, Oa = (e) => {
  const t = Vi();
  !Ie && t === ol && je("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Fl();
  return S(() => m(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let In = [];
const as = (e) => {
  const t = e;
  t.key === Kn.esc && In.forEach((n) => n(t));
}, K0 = (e) => {
  Me(() => {
    In.length === 0 && document.addEventListener("keydown", as), Ie && In.push(e);
  }), Bt(() => {
    In = In.filter((t) => t !== e), In.length === 0 && Ie && document.removeEventListener("keydown", as);
  });
};
let ls;
const Ki = () => {
  const e = Fl(), t = Vi(), n = S(() => `${e.value}-popper-container-${t.prefix}`), o = S(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, W0 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, j0 = () => {
  const { id: e, selector: t } = Ki();
  return ml(() => {
    Ie && (process.env.NODE_ENV === "test" || !ls && !document.body.querySelector(t.value)) && (ls = W0(e.value));
  }), {
    id: e,
    selector: t
  };
}, U0 = Ee({
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
}), Wi = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: a
}) => {
  const { registerTimeout: l } = os(), {
    registerTimeout: s,
    cancelTimeout: r
  } = os();
  return {
    onOpen: (c) => {
      l(() => {
        o(c);
        const d = m(n);
        xe(d) && d > 0 && s(() => {
          a(c);
        }, d);
      }, m(e));
    },
    onClose: (c) => {
      r(), l(() => {
        a(c);
      }, m(t));
    }
  };
}, ji = Symbol("elForwardRef"), q0 = (e) => {
  ot(ji, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, G0 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), rs = k(0), Y0 = 2e3, Ui = Symbol("zIndexContextKey"), qi = (e) => {
  const t = e || (Ce() ? pe(Ui, void 0) : void 0), n = S(() => {
    const l = m(t);
    return xe(l) ? l : Y0;
  }), o = S(() => n.value + rs.value);
  return {
    initialZIndex: n,
    currentZIndex: o,
    nextZIndex: () => (rs.value++, o.value)
  };
};
function X0(e) {
  const t = k();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: a, selectionEnd: l, value: s } = e.value;
    if (a == null || l == null)
      return;
    const r = s.slice(0, Math.max(0, a)), i = s.slice(Math.max(0, l));
    t.value = {
      selectionStart: a,
      selectionEnd: l,
      value: s,
      beforeTxt: r,
      afterTxt: i
    };
  }
  function o() {
    if (e.value == null || t.value == null)
      return;
    const { value: a } = e.value, { beforeTxt: l, afterTxt: s, selectionStart: r } = t.value;
    if (l == null || s == null || r == null)
      return;
    let i = a.length;
    if (a.endsWith(s))
      i = a.length - s.length;
    else if (a.startsWith(l))
      i = l.length;
    else {
      const u = l[r - 1], c = a.indexOf(u, r - 1);
      c !== -1 && (i = c + 1);
    }
    e.value.setSelectionRange(i, i);
  }
  return [n, o];
}
const to = Ea({
  type: String,
  values: Po,
  required: !1
}), Gi = Symbol("size"), Q0 = () => {
  const e = pe(Gi, {});
  return S(() => m(e.size) || "");
};
function Z0(e, { afterFocus: t, beforeBlur: n, afterBlur: o } = {}) {
  const a = Ce(), { emit: l } = a, s = Cn(), r = k(!1), i = (d) => {
    r.value || (r.value = !0, l("focus", d), t == null || t());
  }, u = (d) => {
    var h;
    Et(n) && n(d) || d.relatedTarget && ((h = s.value) != null && h.contains(d.relatedTarget)) || (r.value = !1, l("blur", d), o == null || o());
  }, c = () => {
    var d;
    (d = e.value) == null || d.focus();
  };
  return Y(s, (d) => {
    d && d.setAttribute("tabindex", "-1");
  }), en(s, "click", c), {
    wrapperRef: s,
    isFocused: r,
    handleFocus: i,
    handleBlur: u
  };
}
const Yi = Symbol(), ga = k();
function Xi(e, t = void 0) {
  const n = Ce() ? pe(Yi, ga) : ga;
  return e ? S(() => {
    var o, a;
    return (a = (o = n.value) == null ? void 0 : o[e]) != null ? a : t;
  }) : n;
}
const J0 = (e, t, n = !1) => {
  var o;
  const a = !!Ce(), l = a ? Xi() : void 0, s = (o = t == null ? void 0 : t.provide) != null ? o : a ? ot : void 0;
  if (!s) {
    je("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const r = S(() => {
    const i = m(e);
    return l != null && l.value ? eb(l.value, i) : i;
  });
  return s(Yi, r), s(Ti, S(() => r.value.locale)), s(ki, S(() => r.value.namespace)), s(Ui, S(() => r.value.zIndex)), s(Gi, {
    size: S(() => r.value.size || "")
  }), (n || !ga.value) && (ga.value = r.value), r;
}, eb = (e, t) => {
  var n;
  const o = [.../* @__PURE__ */ new Set([...qr(e), ...qr(t)])], a = {};
  for (const l of o)
    a[l] = (n = t[l]) != null ? n : e[l];
  return a;
}, tb = Ee({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: fe(Object)
  },
  size: to,
  button: {
    type: fe(Object)
  },
  experimentalFeatures: {
    type: fe(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: fe(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), nb = {}, ob = H({
  name: "ElConfigProvider",
  props: tb,
  setup(e, { slots: t }) {
    Y(() => e.message, (o) => {
      Object.assign(nb, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = J0(e);
    return () => W(t, "default", { config: n == null ? void 0 : n.value });
  }
}), Qi = dt(ob);
var we = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
};
const ab = Ee({
  size: {
    type: fe([Number, String])
  },
  color: {
    type: String
  }
}), lb = H({
  name: "ElIcon",
  inheritAttrs: !1
}), rb = /* @__PURE__ */ H({
  ...lb,
  props: ab,
  setup(e) {
    const t = e, n = ce("icon"), o = S(() => {
      const { size: a, color: l } = t;
      return !a && !l ? {} : {
        fontSize: Hn(a) ? void 0 : tl(a),
        "--color": l
      };
    });
    return (a, l) => (T(), P("i", Pe({
      class: m(n).b(),
      style: m(o)
    }, a.$attrs), [
      W(a.$slots, "default")
    ], 16));
  }
});
var sb = /* @__PURE__ */ we(rb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const De = dt(sb), Ul = Symbol("formContextKey"), ma = Symbol("formItemContextKey"), kn = (e, t = {}) => {
  const n = k(void 0), o = t.prop ? n : xi("size"), a = t.global ? n : Q0(), l = t.form ? { size: void 0 } : pe(Ul, void 0), s = t.formItem ? { size: void 0 } : pe(ma, void 0);
  return S(() => o.value || m(e) || (s == null ? void 0 : s.size) || (l == null ? void 0 : l.size) || a.value || "");
}, xa = (e) => {
  const t = xi("disabled"), n = pe(Ul, void 0);
  return S(() => t.value || m(e) || (n == null ? void 0 : n.disabled) || !1);
}, no = () => {
  const e = pe(Ul, void 0), t = pe(ma, void 0);
  return {
    form: e,
    formItem: t
  };
}, ql = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = k(!1)), o || (o = k(!1));
  const a = k();
  let l;
  const s = S(() => {
    var r;
    return !!(!e.label && t && t.inputIds && ((r = t.inputIds) == null ? void 0 : r.length) <= 1);
  });
  return Me(() => {
    l = Y([Rt(e, "id"), n], ([r, i]) => {
      const u = r ?? (i ? void 0 : Oa().value);
      u !== a.value && (t != null && t.removeInputId && (a.value && t.removeInputId(a.value), !(o != null && o.value) && !i && u && t.addInputId(u)), a.value = u);
    }, { immediate: !0 });
  }), To(() => {
    l && l(), t != null && t.removeInputId && a.value && t.removeInputId(a.value);
  }), {
    isLabeledByFormItem: s,
    inputId: a
  };
};
let Lt;
const ib = `
  height:0 !important;
  visibility:hidden !important;
  ${$f() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, ub = [
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
function cb(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), a = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: ub.map((s) => `${s}:${t.getPropertyValue(s)}`).join(";"), paddingSize: o, borderSize: a, boxSizing: n };
}
function ss(e, t = 1, n) {
  var o;
  Lt || (Lt = document.createElement("textarea"), document.body.appendChild(Lt));
  const { paddingSize: a, borderSize: l, boxSizing: s, contextStyle: r } = cb(e);
  Lt.setAttribute("style", `${r};${ib}`), Lt.value = e.value || e.placeholder || "";
  let i = Lt.scrollHeight;
  const u = {};
  s === "border-box" ? i = i + l : s === "content-box" && (i = i - a), Lt.value = "";
  const c = Lt.scrollHeight - a;
  if (xe(t)) {
    let d = c * t;
    s === "border-box" && (d = d + a + l), i = Math.max(d, i), u.minHeight = `${d}px`;
  }
  if (xe(n)) {
    let d = c * n;
    s === "border-box" && (d = d + a + l), i = Math.min(d, i);
  }
  return u.height = `${i}px`, (o = Lt.parentNode) == null || o.removeChild(Lt), Lt = void 0, u;
}
const db = Ee({
  id: {
    type: String,
    default: void 0
  },
  size: to,
  disabled: Boolean,
  modelValue: {
    type: fe([
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
    type: fe([Boolean, Object]),
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
    type: qt
  },
  prefixIcon: {
    type: qt
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
    type: fe([Object, Array, String]),
    default: () => sn({})
  },
  autofocus: {
    type: Boolean,
    default: !1
  }
}), fb = {
  [tt]: (e) => Tt(e),
  input: (e) => Tt(e),
  change: (e) => Tt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, pb = ["role"], vb = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus"], hb = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus"], gb = H({
  name: "ElInput",
  inheritAttrs: !1
}), mb = /* @__PURE__ */ H({
  ...gb,
  props: db,
  emits: fb,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Gu(), l = ba(), s = S(() => {
      const z = {};
      return o.containerRole === "combobox" && (z["aria-haspopup"] = a["aria-haspopup"], z["aria-owns"] = a["aria-owns"], z["aria-expanded"] = a["aria-expanded"]), z;
    }), r = S(() => [
      o.type === "textarea" ? y.b() : f.b(),
      f.m(g.value),
      f.is("disabled", v.value),
      f.is("exceed", be.value),
      {
        [f.b("group")]: l.prepend || l.append,
        [f.bm("group", "append")]: l.append,
        [f.bm("group", "prepend")]: l.prepend,
        [f.m("prefix")]: l.prefix || o.prefixIcon,
        [f.m("suffix")]: l.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [f.bm("suffix", "password-clear")]: U.value && le.value
      },
      a.class
    ]), i = S(() => [
      f.e("wrapper"),
      f.is("focus", D.value)
    ]), u = Am({
      excludeKeys: S(() => Object.keys(s.value))
    }), { form: c, formItem: d } = no(), { inputId: h } = ql(o, {
      formItemContext: d
    }), g = kn(), v = xa(), f = ce("input"), y = ce("textarea"), p = Cn(), w = Cn(), C = k(!1), b = k(!1), $ = k(!1), E = k(), _ = Cn(o.inputStyle), x = S(() => p.value || w.value), { wrapperRef: L, isFocused: D, handleFocus: B, handleBlur: I } = Z0(x, {
      afterBlur() {
        var z;
        o.validateEvent && ((z = d == null ? void 0 : d.validate) == null || z.call(d, "blur").catch((te) => je(te)));
      }
    }), Z = S(() => {
      var z;
      return (z = c == null ? void 0 : c.statusIcon) != null ? z : !1;
    }), J = S(() => (d == null ? void 0 : d.validateState) || ""), oe = S(() => J.value && Si[J.value]), ae = S(() => $.value ? tf : kd), j = S(() => [
      a.style,
      o.inputStyle
    ]), ne = S(() => [
      o.inputStyle,
      _.value,
      { resize: o.resize }
    ]), A = S(() => xo(o.modelValue) ? "" : String(o.modelValue)), U = S(() => o.clearable && !v.value && !o.readonly && !!A.value && (D.value || C.value)), le = S(() => o.showPassword && !v.value && !o.readonly && !!A.value && (!!A.value || D.value)), ue = S(() => o.showWordLimit && !!u.value.maxlength && (o.type === "text" || o.type === "textarea") && !v.value && !o.readonly && !o.showPassword), me = S(() => A.value.length), be = S(() => !!ue.value && me.value > Number(u.value.maxlength)), _e = S(() => !!l.suffix || !!o.suffixIcon || U.value || o.showPassword || ue.value || !!J.value && Z.value), [Te, Le] = X0(p);
    Bn(w, (z) => {
      if (Ae(), !ue.value || o.resize !== "both")
        return;
      const te = z[0], { width: ke } = te.contentRect;
      E.value = {
        right: `calc(100% - ${ke + 15 + 6}px)`
      };
    });
    const Se = () => {
      const { type: z, autosize: te } = o;
      if (!(!Ie || z !== "textarea" || !w.value))
        if (te) {
          const ke = nt(te) ? te.minRows : void 0, Be = nt(te) ? te.maxRows : void 0, Xt = ss(w.value, ke, Be);
          _.value = {
            overflowY: "hidden",
            ...Xt
          }, he(() => {
            w.value.offsetHeight, _.value = Xt;
          });
        } else
          _.value = {
            minHeight: ss(w.value).minHeight
          };
    }, Ae = ((z) => {
      let te = !1;
      return () => {
        var ke;
        if (te || !o.autosize)
          return;
        ((ke = w.value) == null ? void 0 : ke.offsetParent) === null || (z(), te = !0);
      };
    })(Se), qe = () => {
      const z = x.value, te = o.formatter ? o.formatter(A.value) : A.value;
      !z || z.value === te || (z.value = te);
    }, At = async (z) => {
      Te();
      let { value: te } = z.target;
      if (o.formatter && (te = o.parser ? o.parser(te) : te), !b.value) {
        if (te === A.value) {
          qe();
          return;
        }
        n(tt, te), n("input", te), await he(), qe(), Le();
      }
    }, at = (z) => {
      n("change", z.target.value);
    }, Mt = (z) => {
      n("compositionstart", z), b.value = !0;
    }, yt = (z) => {
      var te;
      n("compositionupdate", z);
      const ke = (te = z.target) == null ? void 0 : te.value, Be = ke[ke.length - 1] || "";
      b.value = !$i(Be);
    }, ft = (z) => {
      n("compositionend", z), b.value && (b.value = !1, At(z));
    }, Dt = () => {
      $.value = !$.value, pt();
    }, pt = async () => {
      var z;
      await he(), (z = x.value) == null || z.focus();
    }, It = () => {
      var z;
      return (z = x.value) == null ? void 0 : z.blur();
    }, Ze = (z) => {
      C.value = !1, n("mouseleave", z);
    }, wt = (z) => {
      C.value = !0, n("mouseenter", z);
    }, vt = (z) => {
      n("keydown", z);
    }, Vt = () => {
      var z;
      (z = x.value) == null || z.select();
    }, Ct = () => {
      n(tt, ""), n("change", ""), n("clear"), n("input", "");
    };
    return Y(() => o.modelValue, () => {
      var z;
      he(() => Se()), o.validateEvent && ((z = d == null ? void 0 : d.validate) == null || z.call(d, "change").catch((te) => je(te)));
    }), Y(A, () => qe()), Y(() => o.type, async () => {
      await he(), qe(), Se();
    }), Me(() => {
      !o.formatter && o.parser && je("ElInput", "If you set the parser, you also need to set the formatter."), qe(), he(Se);
    }), t({
      input: p,
      textarea: w,
      ref: x,
      textareaStyle: ne,
      autosize: Rt(o, "autosize"),
      focus: pt,
      blur: It,
      select: Vt,
      clear: Ct,
      resizeTextarea: Se
    }), (z, te) => We((T(), P("div", Pe(m(s), {
      class: m(r),
      style: m(j),
      role: z.containerRole,
      onMouseenter: wt,
      onMouseleave: Ze
    }), [
      q(" input "),
      z.type !== "textarea" ? (T(), P($e, { key: 0 }, [
        q(" prepend slot "),
        z.$slots.prepend ? (T(), P("div", {
          key: 0,
          class: M(m(f).be("group", "prepend"))
        }, [
          W(z.$slots, "prepend")
        ], 2)) : q("v-if", !0),
        R("div", {
          ref_key: "wrapperRef",
          ref: L,
          class: M(m(i))
        }, [
          q(" prefix slot "),
          z.$slots.prefix || z.prefixIcon ? (T(), P("span", {
            key: 0,
            class: M(m(f).e("prefix"))
          }, [
            R("span", {
              class: M(m(f).e("prefix-inner"))
            }, [
              W(z.$slots, "prefix"),
              z.prefixIcon ? (T(), V(m(De), {
                key: 0,
                class: M(m(f).e("icon"))
              }, {
                default: F(() => [
                  (T(), V(Qe(z.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0)
            ], 2)
          ], 2)) : q("v-if", !0),
          R("input", Pe({
            id: m(h),
            ref_key: "input",
            ref: p,
            class: m(f).e("inner")
          }, m(u), {
            type: z.showPassword ? $.value ? "text" : "password" : z.type,
            disabled: m(v),
            formatter: z.formatter,
            parser: z.parser,
            readonly: z.readonly,
            autocomplete: z.autocomplete,
            tabindex: z.tabindex,
            "aria-label": z.label,
            placeholder: z.placeholder,
            style: z.inputStyle,
            form: o.form,
            autofocus: o.autofocus,
            onCompositionstart: Mt,
            onCompositionupdate: yt,
            onCompositionend: ft,
            onInput: At,
            onFocus: te[0] || (te[0] = (...ke) => m(B) && m(B)(...ke)),
            onBlur: te[1] || (te[1] = (...ke) => m(I) && m(I)(...ke)),
            onChange: at,
            onKeydown: vt
          }), null, 16, vb),
          q(" suffix slot "),
          m(_e) ? (T(), P("span", {
            key: 1,
            class: M(m(f).e("suffix"))
          }, [
            R("span", {
              class: M(m(f).e("suffix-inner"))
            }, [
              !m(U) || !m(le) || !m(ue) ? (T(), P($e, { key: 0 }, [
                W(z.$slots, "suffix"),
                z.suffixIcon ? (T(), V(m(De), {
                  key: 0,
                  class: M(m(f).e("icon"))
                }, {
                  default: F(() => [
                    (T(), V(Qe(z.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : q("v-if", !0)
              ], 64)) : q("v-if", !0),
              m(U) ? (T(), V(m(De), {
                key: 1,
                class: M([m(f).e("icon"), m(f).e("clear")]),
                onMousedown: Ye(m(wo), ["prevent"]),
                onClick: Ct
              }, {
                default: F(() => [
                  Q(m(Sl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : q("v-if", !0),
              m(le) ? (T(), V(m(De), {
                key: 2,
                class: M([m(f).e("icon"), m(f).e("password")]),
                onClick: Dt
              }, {
                default: F(() => [
                  (T(), V(Qe(m(ae))))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0),
              m(ue) ? (T(), P("span", {
                key: 3,
                class: M(m(f).e("count"))
              }, [
                R("span", {
                  class: M(m(f).e("count-inner"))
                }, ie(m(me)) + " / " + ie(m(u).maxlength), 3)
              ], 2)) : q("v-if", !0),
              m(J) && m(oe) && m(Z) ? (T(), V(m(De), {
                key: 4,
                class: M([
                  m(f).e("icon"),
                  m(f).e("validateIcon"),
                  m(f).is("loading", m(J) === "validating")
                ])
              }, {
                default: F(() => [
                  (T(), V(Qe(m(oe))))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0)
            ], 2)
          ], 2)) : q("v-if", !0)
        ], 2),
        q(" append slot "),
        z.$slots.append ? (T(), P("div", {
          key: 1,
          class: M(m(f).be("group", "append"))
        }, [
          W(z.$slots, "append")
        ], 2)) : q("v-if", !0)
      ], 64)) : (T(), P($e, { key: 1 }, [
        q(" textarea "),
        R("textarea", Pe({
          id: m(h),
          ref_key: "textarea",
          ref: w,
          class: m(y).e("inner")
        }, m(u), {
          tabindex: z.tabindex,
          disabled: m(v),
          readonly: z.readonly,
          autocomplete: z.autocomplete,
          style: m(ne),
          "aria-label": z.label,
          placeholder: z.placeholder,
          form: o.form,
          autofocus: o.autofocus,
          onCompositionstart: Mt,
          onCompositionupdate: yt,
          onCompositionend: ft,
          onInput: At,
          onFocus: te[2] || (te[2] = (...ke) => m(B) && m(B)(...ke)),
          onBlur: te[3] || (te[3] = (...ke) => m(I) && m(I)(...ke)),
          onChange: at,
          onKeydown: vt
        }), null, 16, hb),
        m(ue) ? (T(), P("span", {
          key: 0,
          style: ye(E.value),
          class: M(m(f).e("count"))
        }, ie(m(me)) + " / " + ie(m(u).maxlength), 7)) : q("v-if", !0)
      ], 64))
    ], 16, pb)), [
      [dn, z.type !== "hidden"]
    ]);
  }
});
var bb = /* @__PURE__ */ we(mb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Zi = dt(bb), Ln = 4, yb = {
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
}, wb = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Ji = Symbol("scrollbarContextKey"), Cb = Ee({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Sb = "Thumb", _b = /* @__PURE__ */ H({
  __name: "thumb",
  props: Cb,
  setup(e) {
    const t = e, n = pe(Ji), o = ce("scrollbar");
    n || bi(Sb, "can not inject scrollbar context");
    const a = k(), l = k(), s = k({}), r = k(!1);
    let i = !1, u = !1, c = Ie ? document.onselectstart : null;
    const d = S(() => yb[t.vertical ? "vertical" : "horizontal"]), h = S(() => wb({
      size: t.size,
      move: t.move,
      bar: d.value
    })), g = S(() => a.value[d.value.offset] ** 2 / n.wrapElement[d.value.scrollSize] / t.ratio / l.value[d.value.offset]), v = (E) => {
      var _;
      if (E.stopPropagation(), E.ctrlKey || [1, 2].includes(E.button))
        return;
      (_ = window.getSelection()) == null || _.removeAllRanges(), y(E);
      const x = E.currentTarget;
      x && (s.value[d.value.axis] = x[d.value.offset] - (E[d.value.client] - x.getBoundingClientRect()[d.value.direction]));
    }, f = (E) => {
      if (!l.value || !a.value || !n.wrapElement)
        return;
      const _ = Math.abs(E.target.getBoundingClientRect()[d.value.direction] - E[d.value.client]), x = l.value[d.value.offset] / 2, L = (_ - x) * 100 * g.value / a.value[d.value.offset];
      n.wrapElement[d.value.scroll] = L * n.wrapElement[d.value.scrollSize] / 100;
    }, y = (E) => {
      E.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", p), document.addEventListener("mouseup", w), c = document.onselectstart, document.onselectstart = () => !1;
    }, p = (E) => {
      if (!a.value || !l.value || i === !1)
        return;
      const _ = s.value[d.value.axis];
      if (!_)
        return;
      const x = (a.value.getBoundingClientRect()[d.value.direction] - E[d.value.client]) * -1, L = l.value[d.value.offset] - _, D = (x - L) * 100 * g.value / a.value[d.value.offset];
      n.wrapElement[d.value.scroll] = D * n.wrapElement[d.value.scrollSize] / 100;
    }, w = () => {
      i = !1, s.value[d.value.axis] = 0, document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", w), $(), u && (r.value = !1);
    }, C = () => {
      u = !1, r.value = !!t.size;
    }, b = () => {
      u = !0, r.value = i;
    };
    Bt(() => {
      $(), document.removeEventListener("mouseup", w);
    });
    const $ = () => {
      document.onselectstart !== c && (document.onselectstart = c);
    };
    return en(Rt(n, "scrollbarElement"), "mousemove", C), en(Rt(n, "scrollbarElement"), "mouseleave", b), (E, _) => (T(), V(yo, {
      name: m(o).b("fade"),
      persisted: ""
    }, {
      default: F(() => [
        We(R("div", {
          ref_key: "instance",
          ref: a,
          class: M([m(o).e("bar"), m(o).is(m(d).key)]),
          onMousedown: f
        }, [
          R("div", {
            ref_key: "thumb",
            ref: l,
            class: M(m(o).e("thumb")),
            style: ye(m(h)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [dn, E.always || r.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var is = /* @__PURE__ */ we(_b, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const $b = Ee({
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
}), Eb = /* @__PURE__ */ H({
  __name: "bar",
  props: $b,
  setup(e, { expose: t }) {
    const n = e, o = k(0), a = k(0);
    return t({
      handleScroll: (s) => {
        if (s) {
          const r = s.offsetHeight - Ln, i = s.offsetWidth - Ln;
          a.value = s.scrollTop * 100 / r * n.ratioY, o.value = s.scrollLeft * 100 / i * n.ratioX;
        }
      }
    }), (s, r) => (T(), P($e, null, [
      Q(is, {
        move: o.value,
        ratio: s.ratioX,
        size: s.width,
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      Q(is, {
        move: a.value,
        ratio: s.ratioY,
        size: s.height,
        vertical: "",
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Tb = /* @__PURE__ */ we(Eb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const kb = Ee({
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
    type: fe([String, Object, Array]),
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
}), Ob = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(xe)
}, al = "ElScrollbar", xb = H({
  name: al
}), Pb = /* @__PURE__ */ H({
  ...xb,
  props: kb,
  emits: Ob,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = ce("scrollbar");
    let l, s;
    const r = k(), i = k(), u = k(), c = k("0"), d = k("0"), h = k(), g = k(1), v = k(1), f = S(() => {
      const _ = {};
      return o.height && (_.height = tl(o.height)), o.maxHeight && (_.maxHeight = tl(o.maxHeight)), [o.wrapStyle, _];
    }), y = S(() => [
      o.wrapClass,
      a.e("wrap"),
      { [a.em("wrap", "hidden-default")]: !o.native }
    ]), p = S(() => [a.e("view"), o.viewClass]), w = () => {
      var _;
      i.value && ((_ = h.value) == null || _.handleScroll(i.value), n("scroll", {
        scrollTop: i.value.scrollTop,
        scrollLeft: i.value.scrollLeft
      }));
    };
    function C(_, x) {
      nt(_) ? i.value.scrollTo(_) : xe(_) && xe(x) && i.value.scrollTo(_, x);
    }
    const b = (_) => {
      if (!xe(_)) {
        je(al, "value must be a number");
        return;
      }
      i.value.scrollTop = _;
    }, $ = (_) => {
      if (!xe(_)) {
        je(al, "value must be a number");
        return;
      }
      i.value.scrollLeft = _;
    }, E = () => {
      if (!i.value)
        return;
      const _ = i.value.offsetHeight - Ln, x = i.value.offsetWidth - Ln, L = _ ** 2 / i.value.scrollHeight, D = x ** 2 / i.value.scrollWidth, B = Math.max(L, o.minSize), I = Math.max(D, o.minSize);
      g.value = L / (_ - L) / (B / (_ - B)), v.value = D / (x - D) / (I / (x - I)), d.value = B + Ln < _ ? `${B}px` : "", c.value = I + Ln < x ? `${I}px` : "";
    };
    return Y(() => o.noresize, (_) => {
      _ ? (l == null || l(), s == null || s()) : ({ stop: l } = Bn(u, E), s = en("resize", E));
    }, { immediate: !0 }), Y(() => [o.maxHeight, o.height], () => {
      o.native || he(() => {
        var _;
        E(), i.value && ((_ = h.value) == null || _.handleScroll(i.value));
      });
    }), ot(Ji, Qn({
      scrollbarElement: r,
      wrapElement: i
    })), Me(() => {
      o.native || he(() => {
        E();
      });
    }), bl(() => E()), t({
      wrapRef: i,
      update: E,
      scrollTo: C,
      setScrollTop: b,
      setScrollLeft: $,
      handleScroll: w
    }), (_, x) => (T(), P("div", {
      ref_key: "scrollbarRef",
      ref: r,
      class: M(m(a).b())
    }, [
      R("div", {
        ref_key: "wrapRef",
        ref: i,
        class: M(m(y)),
        style: ye(m(f)),
        onScroll: w
      }, [
        (T(), V(Qe(_.tag), {
          id: _.id,
          ref_key: "resizeRef",
          ref: u,
          class: M(m(p)),
          style: ye(_.viewStyle),
          role: _.role,
          "aria-label": _.ariaLabel,
          "aria-orientation": _.ariaOrientation
        }, {
          default: F(() => [
            W(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 38),
      _.native ? q("v-if", !0) : (T(), V(Tb, {
        key: 0,
        ref_key: "barRef",
        ref: h,
        height: d.value,
        width: c.value,
        always: _.always,
        "ratio-x": v.value,
        "ratio-y": g.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var Ab = /* @__PURE__ */ we(Pb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const Pa = dt(Ab), Gl = Symbol("popper"), eu = Symbol("popperContent"), Mb = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], tu = Ee({
  role: {
    type: String,
    values: Mb,
    default: "tooltip"
  }
}), Ib = H({
  name: "ElPopper",
  inheritAttrs: !1
}), Lb = /* @__PURE__ */ H({
  ...Ib,
  props: tu,
  setup(e, { expose: t }) {
    const n = e, o = k(), a = k(), l = k(), s = k(), r = S(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: a,
      contentRef: l,
      referenceRef: s,
      role: r
    };
    return t(i), ot(Gl, i), (u, c) => W(u.$slots, "default");
  }
});
var Nb = /* @__PURE__ */ we(Lb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const nu = Ee({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Rb = H({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Fb = /* @__PURE__ */ H({
  ...Rb,
  props: nu,
  setup(e, { expose: t }) {
    const n = e, o = ce("popper"), { arrowOffset: a, arrowRef: l, arrowStyle: s } = pe(eu, void 0);
    return Y(() => n.arrowOffset, (r) => {
      a.value = r;
    }), Bt(() => {
      l.value = void 0;
    }), t({
      arrowRef: l
    }), (r, i) => (T(), P("span", {
      ref_key: "arrowRef",
      ref: l,
      class: M(m(o).e("arrow")),
      style: ye(m(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Bb = /* @__PURE__ */ we(Fb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const za = "ElOnlyChild", zb = H({
  name: za,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const a = pe(ji), l = G0((o = a == null ? void 0 : a.setForwardRef) != null ? o : wo);
    return () => {
      var s;
      const r = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!r)
        return null;
      if (r.length > 1)
        return je(za, "requires exact only one valid child."), null;
      const i = ou(r);
      return i ? We(Yu(i, n), [[l]]) : (je(za, "no valid child node found"), null);
    };
  }
});
function ou(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (nt(n))
      switch (n.type) {
        case Hs:
          continue;
        case zs:
        case "svg":
          return us(n);
        case $e:
          return ou(n.children);
        default:
          return n;
      }
    return us(n);
  }
  return null;
}
function us(e) {
  const t = ce("only-child");
  return Q("span", {
    class: t.e("content")
  }, [e]);
}
const au = Ee({
  virtualRef: {
    type: fe(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: fe(Function)
  },
  onMouseleave: {
    type: fe(Function)
  },
  onClick: {
    type: fe(Function)
  },
  onKeydown: {
    type: fe(Function)
  },
  onFocus: {
    type: fe(Function)
  },
  onBlur: {
    type: fe(Function)
  },
  onContextmenu: {
    type: fe(Function)
  },
  id: String,
  open: Boolean
}), Hb = H({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Db = /* @__PURE__ */ H({
  ...Hb,
  props: au,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: a } = pe(Gl, void 0);
    q0(a);
    const l = S(() => r.value ? n.id : void 0), s = S(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), r = S(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = S(() => r.value ? `${n.open}` : void 0);
    let u;
    return Me(() => {
      Y(() => n.virtualRef, (c) => {
        c && (a.value = un(c));
      }, {
        immediate: !0
      }), Y(a, (c, d) => {
        u == null || u(), u = void 0, Vn(c) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((h) => {
          var g;
          const v = n[h];
          v && (c.addEventListener(h.slice(2).toLowerCase(), v), (g = d == null ? void 0 : d.removeEventListener) == null || g.call(d, h.slice(2).toLowerCase(), v));
        }), u = Y([l, s, r, i], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, v) => {
            xo(h[v]) ? c.removeAttribute(g) : c.setAttribute(g, h[v]);
          });
        }, { immediate: !0 })), Vn(d) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => d.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), Bt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: a
    }), (c, d) => c.virtualTriggering ? q("v-if", !0) : (T(), V(m(zb), Pe({ key: 0 }, c.$attrs, {
      "aria-controls": m(l),
      "aria-describedby": m(s),
      "aria-expanded": m(i),
      "aria-haspopup": m(r)
    }), {
      default: F(() => [
        W(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Vb = /* @__PURE__ */ we(Db, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Ha = "focus-trap.focus-after-trapped", Da = "focus-trap.focus-after-released", Kb = "focus-trap.focusout-prevented", cs = {
  cancelable: !0,
  bubbles: !1
}, Wb = {
  cancelable: !0,
  bubbles: !1
}, ds = "focusAfterTrapped", fs = "focusAfterReleased", jb = Symbol("elFocusTrap"), Yl = k(), Aa = k(0), Xl = k(0);
let Ro = 0;
const lu = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, ps = (e, t) => {
  for (const n of e)
    if (!Ub(n, t))
      return n;
}, Ub = (e, t) => {
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
}, qb = (e) => {
  const t = lu(e), n = ps(t, e), o = ps(t.reverse(), e);
  return [n, o];
}, Gb = (e) => e instanceof HTMLInputElement && "select" in e, ln = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Xl.value = window.performance.now(), e !== n && Gb(e) && t && e.select();
  }
};
function vs(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Yb = () => {
  let e = [];
  return {
    push: (o) => {
      const a = e[0];
      a && o !== a && a.pause(), e = vs(e, o), e.unshift(o);
    },
    remove: (o) => {
      var a, l;
      e = vs(e, o), (l = (a = e[0]) == null ? void 0 : a.resume) == null || l.call(a);
    }
  };
}, Xb = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (ln(o, t), document.activeElement !== n)
      return;
}, hs = Yb(), Qb = () => Aa.value > Xl.value, Fo = () => {
  Yl.value = "pointer", Aa.value = window.performance.now();
}, gs = () => {
  Yl.value = "keyboard", Aa.value = window.performance.now();
}, Zb = () => (Me(() => {
  Ro === 0 && (document.addEventListener("mousedown", Fo), document.addEventListener("touchstart", Fo), document.addEventListener("keydown", gs)), Ro++;
}), Bt(() => {
  Ro--, Ro <= 0 && (document.removeEventListener("mousedown", Fo), document.removeEventListener("touchstart", Fo), document.removeEventListener("keydown", gs));
}), {
  focusReason: Yl,
  lastUserFocusTimestamp: Aa,
  lastAutomatedFocusTimestamp: Xl
}), Bo = (e) => new CustomEvent(Kb, {
  ...Wb,
  detail: e
}), Jb = H({
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
    ds,
    fs,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = k();
    let o, a;
    const { focusReason: l } = Zb();
    K0((v) => {
      e.trapped && !s.paused && t("release-requested", v);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, r = (v) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { key: f, altKey: y, ctrlKey: p, metaKey: w, currentTarget: C, shiftKey: b } = v, { loop: $ } = e, E = f === Kn.tab && !y && !p && !w, _ = document.activeElement;
      if (E && _) {
        const x = C, [L, D] = qb(x);
        if (L && D) {
          if (!b && _ === D) {
            const I = Bo({
              focusReason: l.value
            });
            t("focusout-prevented", I), I.defaultPrevented || (v.preventDefault(), $ && ln(L, !0));
          } else if (b && [L, x].includes(_)) {
            const I = Bo({
              focusReason: l.value
            });
            t("focusout-prevented", I), I.defaultPrevented || (v.preventDefault(), $ && ln(D, !0));
          }
        } else if (_ === x) {
          const I = Bo({
            focusReason: l.value
          });
          t("focusout-prevented", I), I.defaultPrevented || v.preventDefault();
        }
      }
    };
    ot(jb, {
      focusTrapRef: n,
      onKeydown: r
    }), Y(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), Y([n], ([v], [f]) => {
      v && (v.addEventListener("keydown", r), v.addEventListener("focusin", c), v.addEventListener("focusout", d)), f && (f.removeEventListener("keydown", r), f.removeEventListener("focusin", c), f.removeEventListener("focusout", d));
    });
    const i = (v) => {
      t(ds, v);
    }, u = (v) => t(fs, v), c = (v) => {
      const f = m(n);
      if (!f)
        return;
      const y = v.target, p = v.relatedTarget, w = y && f.contains(y);
      e.trapped || p && f.contains(p) || (o = p), w && t("focusin", v), !s.paused && e.trapped && (w ? a = y : ln(a, !0));
    }, d = (v) => {
      const f = m(n);
      if (!(s.paused || !f))
        if (e.trapped) {
          const y = v.relatedTarget;
          !xo(y) && !f.contains(y) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const p = Bo({
                focusReason: l.value
              });
              t("focusout-prevented", p), p.defaultPrevented || ln(a, !0);
            }
          }, 0);
        } else {
          const y = v.target;
          y && f.contains(y) || t("focusout", v);
        }
    };
    async function h() {
      await he();
      const v = m(n);
      if (v) {
        hs.push(s);
        const f = v.contains(document.activeElement) ? o : document.activeElement;
        if (o = f, !v.contains(f)) {
          const p = new Event(Ha, cs);
          v.addEventListener(Ha, i), v.dispatchEvent(p), p.defaultPrevented || he(() => {
            let w = e.focusStartEl;
            Tt(w) || (ln(w), document.activeElement !== w && (w = "first")), w === "first" && Xb(lu(v), !0), (document.activeElement === f || w === "container") && ln(v);
          });
        }
      }
    }
    function g() {
      const v = m(n);
      if (v) {
        v.removeEventListener(Ha, i);
        const f = new CustomEvent(Da, {
          ...cs,
          detail: {
            focusReason: l.value
          }
        });
        v.addEventListener(Da, u), v.dispatchEvent(f), !f.defaultPrevented && (l.value == "keyboard" || !Qb() || v.contains(document.activeElement)) && ln(o ?? document.body), v.removeEventListener(Da, u), hs.remove(s);
      }
    }
    return Me(() => {
      e.trapped && h(), Y(() => e.trapped, (v) => {
        v ? h() : g();
      });
    }), Bt(() => {
      e.trapped && g();
    }), {
      onKeydown: r
    };
  }
});
function ey(e, t, n, o, a, l) {
  return W(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var ty = /* @__PURE__ */ we(Jb, [["render", ey], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const ny = ["fixed", "absolute"], oy = Ee({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: fe(Array),
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
    values: Ta,
    default: "bottom"
  },
  popperOptions: {
    type: fe(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: ny,
    default: "absolute"
  }
}), ru = Ee({
  ...oy,
  id: String,
  style: {
    type: fe([String, Array, Object])
  },
  className: {
    type: fe([String, Array, Object])
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
    type: fe([String, Array, Object])
  },
  popperStyle: {
    type: fe([String, Array, Object])
  },
  referenceEl: {
    type: fe(Object)
  },
  triggerTargetEl: {
    type: fe(Object)
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
}), ay = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, ly = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: a } = e, l = {
    placement: n,
    strategy: o,
    ...a,
    modifiers: [...sy(e), ...t]
  };
  return iy(l, a == null ? void 0 : a.modifiers), l;
}, ry = (e) => {
  if (Ie)
    return un(e);
};
function sy(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
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
        fallbackPlacements: o
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
function iy(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const uy = 0, cy = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: a } = pe(Gl, void 0), l = k(), s = k(), r = S(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = S(() => {
    var p;
    const w = m(l), C = (p = m(s)) != null ? p : uy;
    return {
      name: "arrow",
      enabled: !fm(w),
      options: {
        element: w,
        padding: C
      }
    };
  }), u = S(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...ly(e, [
      m(i),
      m(r)
    ])
  })), c = S(() => ry(e.referenceEl) || m(o)), { attributes: d, state: h, styles: g, update: v, forceUpdate: f, instanceRef: y } = H0(c, n, u);
  return Y(y, (p) => t.value = p), Me(() => {
    Y(() => {
      var p;
      return (p = m(c)) == null ? void 0 : p.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: d,
    arrowRef: l,
    contentRef: n,
    instanceRef: y,
    state: h,
    styles: g,
    role: a,
    forceUpdate: f,
    update: v
  };
}, dy = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: a } = qi(), l = ce("popper"), s = S(() => m(t).popper), r = k(xe(e.zIndex) ? e.zIndex : a()), i = S(() => [
    l.b(),
    l.is("pure", e.pure),
    l.is(e.effect),
    e.popperClass
  ]), u = S(() => [
    { zIndex: m(r) },
    m(n).popper,
    e.popperStyle || {}
  ]), c = S(() => o.value === "dialog" ? "false" : void 0), d = S(() => m(n).arrow || {});
  return {
    ariaModal: c,
    arrowStyle: d,
    contentAttrs: s,
    contentClass: i,
    contentStyle: u,
    contentZIndex: r,
    updateZIndex: () => {
      r.value = xe(e.zIndex) ? e.zIndex : a();
    }
  };
}, fy = (e, t) => {
  const n = k(!1), o = k();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var c;
      ((c = u.detail) == null ? void 0 : c.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (o.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, py = H({
  name: "ElPopperContent"
}), vy = /* @__PURE__ */ H({
  ...py,
  props: ru,
  emits: ay,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: a,
      trapped: l,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: r,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: c
    } = fy(o, n), { attributes: d, arrowRef: h, contentRef: g, styles: v, instanceRef: f, role: y, update: p } = cy(o), {
      ariaModal: w,
      arrowStyle: C,
      contentAttrs: b,
      contentClass: $,
      contentStyle: E,
      updateZIndex: _
    } = dy(o, {
      styles: v,
      attributes: d,
      role: y
    }), x = pe(ma, void 0), L = k();
    ot(eu, {
      arrowStyle: C,
      arrowRef: h,
      arrowOffset: L
    }), x && (x.addInputId || x.removeInputId) && ot(ma, {
      ...x,
      addInputId: wo,
      removeInputId: wo
    });
    let D;
    const B = (Z = !0) => {
      p(), Z && _();
    }, I = () => {
      B(!1), o.visible && o.focusOnShow ? l.value = !0 : o.visible === !1 && (l.value = !1);
    };
    return Me(() => {
      Y(() => o.triggerTargetEl, (Z, J) => {
        D == null || D(), D = void 0;
        const oe = m(Z || g.value), ae = m(J || g.value);
        Vn(oe) && (D = Y([y, () => o.ariaLabel, w, () => o.id], (j) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ne, A) => {
            xo(j[A]) ? oe.removeAttribute(ne) : oe.setAttribute(ne, j[A]);
          });
        }, { immediate: !0 })), ae !== oe && Vn(ae) && ["role", "aria-label", "aria-modal", "id"].forEach((j) => {
          ae.removeAttribute(j);
        });
      }, { immediate: !0 }), Y(() => o.visible, I, { immediate: !0 });
    }), Bt(() => {
      D == null || D(), D = void 0;
    }), t({
      popperContentRef: g,
      popperInstanceRef: f,
      updatePopper: B,
      contentStyle: E
    }), (Z, J) => (T(), P("div", Pe({
      ref_key: "contentRef",
      ref: g
    }, m(b), {
      style: m(E),
      class: m($),
      tabindex: "-1",
      onMouseenter: J[0] || (J[0] = (oe) => Z.$emit("mouseenter", oe)),
      onMouseleave: J[1] || (J[1] = (oe) => Z.$emit("mouseleave", oe))
    }), [
      Q(m(ty), {
        trapped: m(l),
        "trap-on-focus-in": !0,
        "focus-trap-el": m(g),
        "focus-start-el": m(a),
        onFocusAfterTrapped: m(r),
        onFocusAfterReleased: m(s),
        onFocusin: m(i),
        onFocusoutPrevented: m(u),
        onReleaseRequested: m(c)
      }, {
        default: F(() => [
          W(Z.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var hy = /* @__PURE__ */ we(vy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const gy = dt(Nb), Ql = Symbol("elTooltip"), Zl = Ee({
  ...U0,
  ...ru,
  appendTo: {
    type: fe([String, Object])
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
    type: fe(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), su = Ee({
  ...au,
  disabled: Boolean,
  trigger: {
    type: fe([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: fe(Array),
    default: () => [Kn.enter, Kn.space]
  }
}), {
  useModelToggleProps: my,
  useModelToggleEmits: by,
  useModelToggle: yy
} = Oi("visible"), wy = Ee({
  ...tu,
  ...my,
  ...Zl,
  ...su,
  ...nu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Cy = [
  ...by,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Sy = (e, t) => En(e) ? e.includes(t) : e === t, Mn = (e, t, n) => (o) => {
  Sy(m(e), t) && n(o);
}, _y = H({
  name: "ElTooltipTrigger"
}), $y = /* @__PURE__ */ H({
  ..._y,
  props: su,
  setup(e, { expose: t }) {
    const n = e, o = ce("tooltip"), { controlled: a, id: l, open: s, onOpen: r, onClose: i, onToggle: u } = pe(Ql, void 0), c = k(null), d = () => {
      if (m(a) || n.disabled)
        return !0;
    }, h = Rt(n, "trigger"), g = Jt(d, Mn(h, "hover", r)), v = Jt(d, Mn(h, "hover", i)), f = Jt(d, Mn(h, "click", (b) => {
      b.button === 0 && u(b);
    })), y = Jt(d, Mn(h, "focus", r)), p = Jt(d, Mn(h, "focus", i)), w = Jt(d, Mn(h, "contextmenu", (b) => {
      b.preventDefault(), u(b);
    })), C = Jt(d, (b) => {
      const { code: $ } = b;
      n.triggerKeys.includes($) && (b.preventDefault(), u(b));
    });
    return t({
      triggerRef: c
    }), (b, $) => (T(), V(m(Vb), {
      id: m(l),
      "virtual-ref": b.virtualRef,
      open: m(s),
      "virtual-triggering": b.virtualTriggering,
      class: M(m(o).e("trigger")),
      onBlur: m(p),
      onClick: m(f),
      onContextmenu: m(w),
      onFocus: m(y),
      onMouseenter: m(g),
      onMouseleave: m(v),
      onKeydown: m(C)
    }, {
      default: F(() => [
        W(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Ey = /* @__PURE__ */ we($y, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const Ty = H({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), ky = /* @__PURE__ */ H({
  ...Ty,
  props: Zl,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Ki(), a = ce("tooltip"), l = k(null), s = k(!1), {
      controlled: r,
      id: i,
      open: u,
      trigger: c,
      onClose: d,
      onOpen: h,
      onShow: g,
      onHide: v,
      onBeforeShow: f,
      onBeforeHide: y
    } = pe(Ql, void 0), p = S(() => n.transition || `${a.namespace.value}-fade-in-linear`), w = S(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    Bt(() => {
      s.value = !0;
    });
    const C = S(() => m(w) ? !0 : m(u)), b = S(() => n.disabled ? !1 : m(u)), $ = S(() => n.appendTo || o.value), E = S(() => {
      var j;
      return (j = n.style) != null ? j : {};
    }), _ = S(() => !m(u)), x = () => {
      v();
    }, L = () => {
      if (m(r))
        return !0;
    }, D = Jt(L, () => {
      n.enterable && m(c) === "hover" && h();
    }), B = Jt(L, () => {
      m(c) === "hover" && d();
    }), I = () => {
      var j, ne;
      (ne = (j = l.value) == null ? void 0 : j.updatePopper) == null || ne.call(j), f == null || f();
    }, Z = () => {
      y == null || y();
    }, J = () => {
      g(), ae = vf(S(() => {
        var j;
        return (j = l.value) == null ? void 0 : j.popperContentRef;
      }), () => {
        if (m(r))
          return;
        m(c) !== "hover" && d();
      });
    }, oe = () => {
      n.virtualTriggering || d();
    };
    let ae;
    return Y(() => m(u), (j) => {
      j || ae == null || ae();
    }, {
      flush: "post"
    }), Y(() => n.content, () => {
      var j, ne;
      (ne = (j = l.value) == null ? void 0 : j.updatePopper) == null || ne.call(j);
    }), t({
      contentRef: l
    }), (j, ne) => (T(), V(Xu, {
      disabled: !j.teleported,
      to: m($)
    }, [
      Q(yo, {
        name: m(p),
        onAfterLeave: x,
        onBeforeEnter: I,
        onAfterEnter: J,
        onBeforeLeave: Z
      }, {
        default: F(() => [
          m(C) ? We((T(), V(m(hy), Pe({
            key: 0,
            id: m(i),
            ref_key: "contentRef",
            ref: l
          }, j.$attrs, {
            "aria-label": j.ariaLabel,
            "aria-hidden": m(_),
            "boundaries-padding": j.boundariesPadding,
            "fallback-placements": j.fallbackPlacements,
            "gpu-acceleration": j.gpuAcceleration,
            offset: j.offset,
            placement: j.placement,
            "popper-options": j.popperOptions,
            strategy: j.strategy,
            effect: j.effect,
            enterable: j.enterable,
            pure: j.pure,
            "popper-class": j.popperClass,
            "popper-style": [j.popperStyle, m(E)],
            "reference-el": j.referenceEl,
            "trigger-target-el": j.triggerTargetEl,
            visible: m(b),
            "z-index": j.zIndex,
            onMouseenter: m(D),
            onMouseleave: m(B),
            onBlur: oe,
            onClose: m(d)
          }), {
            default: F(() => [
              s.value ? q("v-if", !0) : W(j.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [dn, m(b)]
          ]) : q("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var Oy = /* @__PURE__ */ we(ky, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const xy = ["innerHTML"], Py = { key: 1 }, Ay = H({
  name: "ElTooltip"
}), My = /* @__PURE__ */ H({
  ...Ay,
  props: wy,
  emits: Cy,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    j0();
    const a = Oa(), l = k(), s = k(), r = () => {
      var p;
      const w = m(l);
      w && ((p = w.popperInstanceRef) == null || p.update());
    }, i = k(!1), u = k(), { show: c, hide: d, hasUpdateHandler: h } = yy({
      indicator: i,
      toggleReason: u
    }), { onOpen: g, onClose: v } = Wi({
      showAfter: Rt(o, "showAfter"),
      hideAfter: Rt(o, "hideAfter"),
      autoClose: Rt(o, "autoClose"),
      open: c,
      close: d
    }), f = S(() => Dn(o.visible) && !h.value);
    ot(Ql, {
      controlled: f,
      id: a,
      open: Qu(i),
      trigger: Rt(o, "trigger"),
      onOpen: (p) => {
        g(p);
      },
      onClose: (p) => {
        v(p);
      },
      onToggle: (p) => {
        m(i) ? v(p) : g(p);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: r
    }), Y(() => o.disabled, (p) => {
      p && i.value && (i.value = !1);
    });
    const y = (p) => {
      var w, C;
      const b = (C = (w = s.value) == null ? void 0 : w.contentRef) == null ? void 0 : C.popperContentRef, $ = (p == null ? void 0 : p.relatedTarget) || document.activeElement;
      return b && b.contains($);
    };
    return Zu(() => i.value && d()), t({
      popperRef: l,
      contentRef: s,
      isFocusInsideContent: y,
      updatePopper: r,
      onOpen: g,
      onClose: v,
      hide: d
    }), (p, w) => (T(), V(m(gy), {
      ref_key: "popperRef",
      ref: l,
      role: p.role
    }, {
      default: F(() => [
        Q(Ey, {
          disabled: p.disabled,
          trigger: p.trigger,
          "trigger-keys": p.triggerKeys,
          "virtual-ref": p.virtualRef,
          "virtual-triggering": p.virtualTriggering
        }, {
          default: F(() => [
            p.$slots.default ? W(p.$slots, "default", { key: 0 }) : q("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        Q(Oy, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": p.ariaLabel,
          "boundaries-padding": p.boundariesPadding,
          content: p.content,
          disabled: p.disabled,
          effect: p.effect,
          enterable: p.enterable,
          "fallback-placements": p.fallbackPlacements,
          "hide-after": p.hideAfter,
          "gpu-acceleration": p.gpuAcceleration,
          offset: p.offset,
          persistent: p.persistent,
          "popper-class": p.popperClass,
          "popper-style": p.popperStyle,
          placement: p.placement,
          "popper-options": p.popperOptions,
          pure: p.pure,
          "raw-content": p.rawContent,
          "reference-el": p.referenceEl,
          "trigger-target-el": p.triggerTargetEl,
          "show-after": p.showAfter,
          strategy: p.strategy,
          teleported: p.teleported,
          transition: p.transition,
          "virtual-triggering": p.virtualTriggering,
          "z-index": p.zIndex,
          "append-to": p.appendTo
        }, {
          default: F(() => [
            W(p.$slots, "content", {}, () => [
              p.rawContent ? (T(), P("span", {
                key: 0,
                innerHTML: p.content
              }, null, 8, xy)) : (T(), P("span", Py, ie(p.content), 1))
            ]),
            p.showArrow ? (T(), V(m(Bb), {
              key: 0,
              "arrow-offset": p.arrowOffset
            }, null, 8, ["arrow-offset"])) : q("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Iy = /* @__PURE__ */ we(My, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const iu = dt(Iy), uu = Symbol("buttonGroupContextKey"), Ly = (e, t) => {
  Ei({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, S(() => e.type === "text"));
  const n = pe(uu, void 0), o = Xi("button"), { form: a } = no(), l = kn(S(() => n == null ? void 0 : n.size)), s = xa(), r = k(), i = ba(), u = S(() => e.type || (n == null ? void 0 : n.type) || ""), c = S(() => {
    var v, f, y;
    return (y = (f = e.autoInsertSpace) != null ? f : (v = o.value) == null ? void 0 : v.autoInsertSpace) != null ? y : !1;
  }), d = S(() => e.tag === "button" ? {
    ariaDisabled: s.value || e.loading,
    disabled: s.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), h = S(() => {
    var v;
    const f = (v = i.default) == null ? void 0 : v.call(i);
    if (c.value && (f == null ? void 0 : f.length) === 1) {
      const y = f[0];
      if ((y == null ? void 0 : y.type) === zs) {
        const p = y.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(p.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: l,
    _type: u,
    _ref: r,
    _props: d,
    shouldAddSpace: h,
    handleClick: (v) => {
      e.nativeType === "reset" && (a == null || a.resetFields()), t("click", v);
    }
  };
}, Ny = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Ry = ["button", "submit", "reset"], ll = Ee({
  size: to,
  disabled: Boolean,
  type: {
    type: String,
    values: Ny,
    default: ""
  },
  icon: {
    type: qt
  },
  nativeType: {
    type: String,
    values: Ry,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: qt,
    default: () => _l
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
    type: fe([String, Object]),
    default: "button"
  }
}), Fy = {
  click: (e) => e instanceof MouseEvent
};
function Ue(e, t) {
  By(e) && (e = "100%");
  var n = zy(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function zo(e) {
  return Math.min(1, Math.max(0, e));
}
function By(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function zy(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function cu(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ho(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function yn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Hy(e, t, n) {
  return {
    r: Ue(e, 255) * 255,
    g: Ue(t, 255) * 255,
    b: Ue(n, 255) * 255
  };
}
function ms(e, t, n) {
  e = Ue(e, 255), t = Ue(t, 255), n = Ue(n, 255);
  var o = Math.max(e, t, n), a = Math.min(e, t, n), l = 0, s = 0, r = (o + a) / 2;
  if (o === a)
    s = 0, l = 0;
  else {
    var i = o - a;
    switch (s = r > 0.5 ? i / (2 - o - a) : i / (o + a), o) {
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
function Va(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Dy(e, t, n) {
  var o, a, l;
  if (e = Ue(e, 360), t = Ue(t, 100), n = Ue(n, 100), t === 0)
    a = n, l = n, o = n;
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - s;
    o = Va(r, s, e + 1 / 3), a = Va(r, s, e), l = Va(r, s, e - 1 / 3);
  }
  return { r: o * 255, g: a * 255, b: l * 255 };
}
function bs(e, t, n) {
  e = Ue(e, 255), t = Ue(t, 255), n = Ue(n, 255);
  var o = Math.max(e, t, n), a = Math.min(e, t, n), l = 0, s = o, r = o - a, i = o === 0 ? 0 : r / o;
  if (o === a)
    l = 0;
  else {
    switch (o) {
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
function Vy(e, t, n) {
  e = Ue(e, 360) * 6, t = Ue(t, 100), n = Ue(n, 100);
  var o = Math.floor(e), a = e - o, l = n * (1 - t), s = n * (1 - a * t), r = n * (1 - (1 - a) * t), i = o % 6, u = [n, s, l, l, r, n][i], c = [r, n, n, s, l, l][i], d = [l, l, r, n, n, s][i];
  return { r: u * 255, g: c * 255, b: d * 255 };
}
function ys(e, t, n, o) {
  var a = [
    yn(Math.round(e).toString(16)),
    yn(Math.round(t).toString(16)),
    yn(Math.round(n).toString(16))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Ky(e, t, n, o, a) {
  var l = [
    yn(Math.round(e).toString(16)),
    yn(Math.round(t).toString(16)),
    yn(Math.round(n).toString(16)),
    yn(Wy(o))
  ];
  return a && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function Wy(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ws(e) {
  return gt(e) / 255;
}
function gt(e) {
  return parseInt(e, 16);
}
function jy(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var rl = {
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
function Uy(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, a = null, l = null, s = !1, r = !1;
  return typeof e == "string" && (e = Yy(e)), typeof e == "object" && (Qt(e.r) && Qt(e.g) && Qt(e.b) ? (t = Hy(e.r, e.g, e.b), s = !0, r = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Qt(e.h) && Qt(e.s) && Qt(e.v) ? (o = Ho(e.s), a = Ho(e.v), t = Vy(e.h, o, a), s = !0, r = "hsv") : Qt(e.h) && Qt(e.s) && Qt(e.l) && (o = Ho(e.s), l = Ho(e.l), t = Dy(e.h, o, l), s = !0, r = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = cu(n), {
    ok: s,
    format: e.format || r,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var qy = "[-\\+]?\\d+%?", Gy = "[-\\+]?\\d*\\.\\d+%?", cn = "(?:".concat(Gy, ")|(?:").concat(qy, ")"), Ka = "[\\s|\\(]+(".concat(cn, ")[,|\\s]+(").concat(cn, ")[,|\\s]+(").concat(cn, ")\\s*\\)?"), Wa = "[\\s|\\(]+(".concat(cn, ")[,|\\s]+(").concat(cn, ")[,|\\s]+(").concat(cn, ")[,|\\s]+(").concat(cn, ")\\s*\\)?"), Nt = {
  CSS_UNIT: new RegExp(cn),
  rgb: new RegExp("rgb" + Ka),
  rgba: new RegExp("rgba" + Wa),
  hsl: new RegExp("hsl" + Ka),
  hsla: new RegExp("hsla" + Wa),
  hsv: new RegExp("hsv" + Ka),
  hsva: new RegExp("hsva" + Wa),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Yy(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (rl[e])
    e = rl[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Nt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Nt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Nt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Nt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Nt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Nt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Nt.hex8.exec(e), n ? {
    r: gt(n[1]),
    g: gt(n[2]),
    b: gt(n[3]),
    a: ws(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Nt.hex6.exec(e), n ? {
    r: gt(n[1]),
    g: gt(n[2]),
    b: gt(n[3]),
    format: t ? "name" : "hex"
  } : (n = Nt.hex4.exec(e), n ? {
    r: gt(n[1] + n[1]),
    g: gt(n[2] + n[2]),
    b: gt(n[3] + n[3]),
    a: ws(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Nt.hex3.exec(e), n ? {
    r: gt(n[1] + n[1]),
    g: gt(n[2] + n[2]),
    b: gt(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Qt(e) {
  return !!Nt.CSS_UNIT.exec(String(e));
}
var Xy = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = jy(t)), this.originalInput = t;
      var a = Uy(t);
      this.originalInput = t, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (o = n.format) !== null && o !== void 0 ? o : a.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, o, a, l = t.r / 255, s = t.g / 255, r = t.b / 255;
      return l <= 0.03928 ? n = l / 12.92 : n = Math.pow((l + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), r <= 0.03928 ? a = r / 12.92 : a = Math.pow((r + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * a;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = cu(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = bs(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = bs(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = ms(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = ms(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), ys(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Ky(this.r, this.g, this.b, this.a, t);
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
      var t = Math.round(this.r), n = Math.round(this.g), o = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(o, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(o, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Ue(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Ue(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + ys(this.r, this.g, this.b, !1), n = 0, o = Object.entries(rl); n < o.length; n++) {
        var a = o[n], l = a[0], s = a[1];
        if (t === s)
          return l;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var o = !1, a = this.a < 1 && this.a >= 0, l = !n && a && (t.startsWith("hex") || t === "name");
      return l ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = zo(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = zo(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = zo(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = zo(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), a = new e(t).toRgb(), l = n / 100, s = {
        r: (a.r - o.r) * l + o.r,
        g: (a.g - o.g) * l + o.g,
        b: (a.b - o.b) * l + o.b,
        a: (a.a - o.a) * l + o.a
      };
      return new e(s);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), a = 360 / n, l = [this];
      for (o.h = (o.h - (a * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + a) % 360, l.push(new e(o));
      return l;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, a = n.s, l = n.v, s = [], r = 1 / t; t--; )
        s.push(new e({ h: o, s: a, v: l })), l = (l + r) % 1;
      return s;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), o = new e(t).toRgb(), a = n.a + o.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + o.r * o.a * (1 - n.a)) / a,
        g: (n.g * n.a + o.g * o.a * (1 - n.a)) / a,
        b: (n.b * n.a + o.b * o.a * (1 - n.a)) / a,
        a
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), o = n.h, a = [this], l = 360 / t, s = 1; s < t; s++)
        a.push(new e({ h: (o + s * l) % 360, s: n.s, l: n.l }));
      return a;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function an(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function Qy(e) {
  const t = xa(), n = ce("button");
  return S(() => {
    let o = {};
    const a = e.color;
    if (a) {
      const l = new Xy(a), s = e.dark ? l.tint(20).toString() : an(l, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? an(l, 90) : l.tint(90).toString(),
          "text-color": a,
          "border-color": e.dark ? an(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": a,
          "hover-border-color": a,
          "active-bg-color": s,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": s
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? an(l, 90) : l.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? an(l, 50) : l.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? an(l, 80) : l.tint(80).toString());
      else {
        const r = e.dark ? an(l, 30) : l.tint(30).toString(), i = l.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (o = n.cssVarBlock({
          "bg-color": a,
          "text-color": i,
          "border-color": a,
          "hover-bg-color": r,
          "hover-text-color": i,
          "hover-border-color": r,
          "active-bg-color": s,
          "active-border-color": s
        }), t.value) {
          const u = e.dark ? an(l, 50) : l.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = u, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return o;
  });
}
const Zy = H({
  name: "ElButton"
}), Jy = /* @__PURE__ */ H({
  ...Zy,
  props: ll,
  emits: Fy,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Qy(o), l = ce("button"), { _ref: s, _size: r, _type: i, _disabled: u, _props: c, shouldAddSpace: d, handleClick: h } = Ly(o, n);
    return t({
      ref: s,
      size: r,
      type: i,
      disabled: u,
      shouldAddSpace: d
    }), (g, v) => (T(), V(Qe(g.tag), Pe({
      ref_key: "_ref",
      ref: s
    }, m(c), {
      class: [
        m(l).b(),
        m(l).m(m(i)),
        m(l).m(m(r)),
        m(l).is("disabled", m(u)),
        m(l).is("loading", g.loading),
        m(l).is("plain", g.plain),
        m(l).is("round", g.round),
        m(l).is("circle", g.circle),
        m(l).is("text", g.text),
        m(l).is("link", g.link),
        m(l).is("has-bg", g.bg)
      ],
      style: m(a),
      onClick: m(h)
    }), {
      default: F(() => [
        g.loading ? (T(), P($e, { key: 0 }, [
          g.$slots.loading ? W(g.$slots, "loading", { key: 0 }) : (T(), V(m(De), {
            key: 1,
            class: M(m(l).is("loading"))
          }, {
            default: F(() => [
              (T(), V(Qe(g.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : g.icon || g.$slots.icon ? (T(), V(m(De), { key: 1 }, {
          default: F(() => [
            g.icon ? (T(), V(Qe(g.icon), { key: 0 })) : W(g.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : q("v-if", !0),
        g.$slots.default ? (T(), P("span", {
          key: 2,
          class: M({ [m(l).em("text", "expand")]: m(d) })
        }, [
          W(g.$slots, "default")
        ], 2)) : q("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var e1 = /* @__PURE__ */ we(Jy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const t1 = {
  size: ll.size,
  type: ll.type
}, n1 = H({
  name: "ElButtonGroup"
}), o1 = /* @__PURE__ */ H({
  ...n1,
  props: t1,
  setup(e) {
    const t = e;
    ot(uu, Qn({
      size: Rt(t, "size"),
      type: Rt(t, "type")
    }));
    const n = ce("button");
    return (o, a) => (T(), P("div", {
      class: M(`${m(n).b("group")}`)
    }, [
      W(o.$slots, "default")
    ], 2));
  }
});
var du = /* @__PURE__ */ we(o1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const fu = dt(e1, {
  ButtonGroup: du
});
eo(du);
function a1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const rn = /* @__PURE__ */ new Map();
let Cs;
Ie && (document.addEventListener("mousedown", (e) => Cs = e), document.addEventListener("mouseup", (e) => {
  for (const t of rn.values())
    for (const { documentHandler: n } of t)
      n(e, Cs);
}));
function Ss(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : Vn(t.arg) && n.push(t.arg), function(o, a) {
    const l = t.instance.popperRef, s = o.target, r = a == null ? void 0 : a.target, i = !t || !t.instance, u = !s || !r, c = e.contains(s) || e.contains(r), d = e === s, h = n.length && n.some((v) => v == null ? void 0 : v.contains(s)) || n.length && n.includes(r), g = l && (l.contains(s) || l.contains(r));
    i || u || c || d || h || g || t.value(o, a);
  };
}
const pu = {
  beforeMount(e, t) {
    rn.has(e) || rn.set(e, []), rn.get(e).push({
      documentHandler: Ss(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    rn.has(e) || rn.set(e, []);
    const n = rn.get(e), o = n.findIndex((l) => l.bindingFn === t.oldValue), a = {
      documentHandler: Ss(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, a) : n.push(a);
  },
  unmounted(e) {
    rn.delete(e);
  }
};
var _s = !1, bn, sl, il, Uo, qo, vu, Go, ul, cl, dl, hu, fl, pl, gu, mu;
function st() {
  if (!_s) {
    _s = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (fl = /\b(iPhone|iP[ao]d)/.exec(e), pl = /\b(iP[ao]d)/.exec(e), dl = /Android/i.exec(e), gu = /FBAN\/\w+;/i.exec(e), mu = /Mobile/i.exec(e), hu = !!/Win64/.exec(e), t) {
      bn = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, bn && document && document.documentMode && (bn = document.documentMode);
      var o = /(?:Trident\/(\d+.\d+))/.exec(e);
      vu = o ? parseFloat(o[1]) + 4 : bn, sl = t[2] ? parseFloat(t[2]) : NaN, il = t[3] ? parseFloat(t[3]) : NaN, Uo = t[4] ? parseFloat(t[4]) : NaN, Uo ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), qo = t && t[1] ? parseFloat(t[1]) : NaN) : qo = NaN;
    } else
      bn = sl = il = qo = Uo = NaN;
    if (n) {
      if (n[1]) {
        var a = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        Go = a ? parseFloat(a[1].replace("_", ".")) : !0;
      } else
        Go = !1;
      ul = !!n[2], cl = !!n[3];
    } else
      Go = ul = cl = !1;
  }
}
var vl = { ie: function() {
  return st() || bn;
}, ieCompatibilityMode: function() {
  return st() || vu > bn;
}, ie64: function() {
  return vl.ie() && hu;
}, firefox: function() {
  return st() || sl;
}, opera: function() {
  return st() || il;
}, webkit: function() {
  return st() || Uo;
}, safari: function() {
  return vl.webkit();
}, chrome: function() {
  return st() || qo;
}, windows: function() {
  return st() || ul;
}, osx: function() {
  return st() || Go;
}, linux: function() {
  return st() || cl;
}, iphone: function() {
  return st() || fl;
}, mobile: function() {
  return st() || fl || pl || dl || mu;
}, nativeApp: function() {
  return st() || gu;
}, android: function() {
  return st() || dl;
}, ipad: function() {
  return st() || pl;
} }, l1 = vl, Do = !!(typeof window < "u" && window.document && window.document.createElement), r1 = { canUseDOM: Do, canUseWorkers: typeof Worker < "u", canUseEventListeners: Do && !!(window.addEventListener || window.attachEvent), canUseViewport: Do && !!window.screen, isInWorker: !Do }, bu = r1, yu;
bu.canUseDOM && (yu = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function s1(e, t) {
  if (!bu.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, o = n in document;
  if (!o) {
    var a = document.createElement("div");
    a.setAttribute(n, "return;"), o = typeof a[n] == "function";
  }
  return !o && yu && e === "wheel" && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
}
var i1 = s1, $s = 10, Es = 40, Ts = 800;
function wu(e) {
  var t = 0, n = 0, o = 0, a = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), o = t * $s, a = n * $s, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (o = e.deltaX), (o || a) && e.deltaMode && (e.deltaMode == 1 ? (o *= Es, a *= Es) : (o *= Ts, a *= Ts)), o && !t && (t = o < 1 ? -1 : 1), a && !n && (n = a < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: o, pixelY: a };
}
wu.getEventType = function() {
  return l1.firefox() ? "DOMMouseScroll" : i1("wheel") ? "wheel" : "mousewheel";
};
var u1 = wu;
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
const c1 = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(o) {
      const a = u1(o);
      t && Reflect.apply(t, this, [o, a]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, d1 = {
  beforeMount(e, t) {
    c1(e, t.value);
  }
}, Cu = {
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
  size: to,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Su = {
  [tt]: (e) => Tt(e) || xe(e) || Dn(e),
  change: (e) => Tt(e) || xe(e) || Dn(e)
}, oo = Symbol("checkboxGroupContextKey"), f1 = ({
  model: e,
  isChecked: t
}) => {
  const n = pe(oo, void 0), o = S(() => {
    var l, s;
    const r = (l = n == null ? void 0 : n.max) == null ? void 0 : l.value, i = (s = n == null ? void 0 : n.min) == null ? void 0 : s.value;
    return !Hn(r) && e.value.length >= r && !t.value || !Hn(i) && e.value.length <= i && t.value;
  });
  return {
    isDisabled: xa(S(() => (n == null ? void 0 : n.disabled.value) || o.value)),
    isLimitDisabled: o
  };
}, p1 = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: a,
  isLabeledByFormItem: l
}) => {
  const s = pe(oo, void 0), { formItem: r } = no(), { emit: i } = Ce();
  function u(v) {
    var f, y;
    return v === e.trueLabel || v === !0 ? (f = e.trueLabel) != null ? f : !0 : (y = e.falseLabel) != null ? y : !1;
  }
  function c(v, f) {
    i("change", u(v), f);
  }
  function d(v) {
    if (n.value)
      return;
    const f = v.target;
    i("change", u(f.checked), v);
  }
  async function h(v) {
    n.value || !o.value && !a.value && l.value && (v.composedPath().some((p) => p.tagName === "LABEL") || (t.value = u([!1, e.falseLabel].includes(t.value)), await he(), c(t.value, v)));
  }
  const g = S(() => (s == null ? void 0 : s.validateEvent) || e.validateEvent);
  return Y(() => e.modelValue, () => {
    g.value && (r == null || r.validate("change").catch((v) => je(v)));
  }), {
    handleChange: d,
    onClickRoot: h
  };
}, v1 = (e) => {
  const t = k(!1), { emit: n } = Ce(), o = pe(oo, void 0), a = S(() => Hn(o) === !1), l = k(!1);
  return {
    model: S({
      get() {
        var r, i;
        return a.value ? (r = o == null ? void 0 : o.modelValue) == null ? void 0 : r.value : (i = e.modelValue) != null ? i : t.value;
      },
      set(r) {
        var i, u;
        a.value && En(r) ? (l.value = ((i = o == null ? void 0 : o.max) == null ? void 0 : i.value) !== void 0 && r.length > (o == null ? void 0 : o.max.value), l.value === !1 && ((u = o == null ? void 0 : o.changeEvent) == null || u.call(o, r))) : (n(tt, r), t.value = r);
      }
    }),
    isGroup: a,
    isLimitExceeded: l
  };
}, h1 = (e, t, { model: n }) => {
  const o = pe(oo, void 0), a = k(!1), l = S(() => {
    const u = n.value;
    return Dn(u) ? u : En(u) ? nt(e.label) ? u.map(Fn).some((c) => va(c, e.label)) : u.map(Fn).includes(e.label) : u != null ? u === e.trueLabel : !!u;
  }), s = kn(S(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), r = kn(S(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  })), i = S(() => !!t.default || !xo(e.label));
  return {
    checkboxButtonSize: s,
    isChecked: l,
    isFocused: a,
    checkboxSize: r,
    hasOwnLabel: i
  };
}, g1 = (e, { model: t }) => {
  function n() {
    En(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, _u = (e, t) => {
  const { formItem: n } = no(), { model: o, isGroup: a, isLimitExceeded: l } = v1(e), {
    isFocused: s,
    isChecked: r,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: c
  } = h1(e, t, { model: o }), { isDisabled: d } = f1({ model: o, isChecked: r }), { inputId: h, isLabeledByFormItem: g } = ql(e, {
    formItemContext: n,
    disableIdGeneration: c,
    disableIdManagement: a
  }), { handleChange: v, onClickRoot: f } = p1(e, {
    model: o,
    isLimitExceeded: l,
    hasOwnLabel: c,
    isDisabled: d,
    isLabeledByFormItem: g
  });
  return g1(e, { model: o }), {
    inputId: h,
    isLabeledByFormItem: g,
    isChecked: r,
    isDisabled: d,
    isFocused: s,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: c,
    model: o,
    handleChange: v,
    onClickRoot: f
  };
}, m1 = ["id", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value"], b1 = ["id", "indeterminate", "disabled", "value", "name", "tabindex"], y1 = H({
  name: "ElCheckbox"
}), w1 = /* @__PURE__ */ H({
  ...y1,
  props: Cu,
  emits: Su,
  setup(e) {
    const t = e, n = ba(), {
      inputId: o,
      isLabeledByFormItem: a,
      isChecked: l,
      isDisabled: s,
      isFocused: r,
      checkboxSize: i,
      hasOwnLabel: u,
      model: c,
      handleChange: d,
      onClickRoot: h
    } = _u(t, n), g = ce("checkbox"), v = S(() => [
      g.b(),
      g.m(i.value),
      g.is("disabled", s.value),
      g.is("bordered", t.border),
      g.is("checked", l.value)
    ]), f = S(() => [
      g.e("input"),
      g.is("disabled", s.value),
      g.is("checked", l.value),
      g.is("indeterminate", t.indeterminate),
      g.is("focus", r.value)
    ]);
    return (y, p) => (T(), V(Qe(!m(u) && m(a) ? "span" : "label"), {
      class: M(m(v)),
      "aria-controls": y.indeterminate ? y.controls : null,
      onClick: m(h)
    }, {
      default: F(() => [
        R("span", {
          class: M(m(f))
        }, [
          y.trueLabel || y.falseLabel ? We((T(), P("input", {
            key: 0,
            id: m(o),
            "onUpdate:modelValue": p[0] || (p[0] = (w) => Rn(c) ? c.value = w : null),
            class: M(m(g).e("original")),
            type: "checkbox",
            indeterminate: y.indeterminate,
            name: y.name,
            tabindex: y.tabindex,
            disabled: m(s),
            "true-value": y.trueLabel,
            "false-value": y.falseLabel,
            onChange: p[1] || (p[1] = (...w) => m(d) && m(d)(...w)),
            onFocus: p[2] || (p[2] = (w) => r.value = !0),
            onBlur: p[3] || (p[3] = (w) => r.value = !1),
            onClick: p[4] || (p[4] = Ye(() => {
            }, ["stop"]))
          }, null, 42, m1)), [
            [ia, m(c)]
          ]) : We((T(), P("input", {
            key: 1,
            id: m(o),
            "onUpdate:modelValue": p[5] || (p[5] = (w) => Rn(c) ? c.value = w : null),
            class: M(m(g).e("original")),
            type: "checkbox",
            indeterminate: y.indeterminate,
            disabled: m(s),
            value: y.label,
            name: y.name,
            tabindex: y.tabindex,
            onChange: p[6] || (p[6] = (...w) => m(d) && m(d)(...w)),
            onFocus: p[7] || (p[7] = (w) => r.value = !0),
            onBlur: p[8] || (p[8] = (w) => r.value = !1),
            onClick: p[9] || (p[9] = Ye(() => {
            }, ["stop"]))
          }, null, 42, b1)), [
            [ia, m(c)]
          ]),
          R("span", {
            class: M(m(g).e("inner"))
          }, null, 2)
        ], 2),
        m(u) ? (T(), P("span", {
          key: 0,
          class: M(m(g).e("label"))
        }, [
          W(y.$slots, "default"),
          y.$slots.default ? q("v-if", !0) : (T(), P($e, { key: 0 }, [
            Ke(ie(y.label), 1)
          ], 64))
        ], 2)) : q("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var C1 = /* @__PURE__ */ we(w1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const S1 = ["name", "tabindex", "disabled", "true-value", "false-value"], _1 = ["name", "tabindex", "disabled", "value"], $1 = H({
  name: "ElCheckboxButton"
}), E1 = /* @__PURE__ */ H({
  ...$1,
  props: Cu,
  emits: Su,
  setup(e) {
    const t = e, n = ba(), {
      isFocused: o,
      isChecked: a,
      isDisabled: l,
      checkboxButtonSize: s,
      model: r,
      handleChange: i
    } = _u(t, n), u = pe(oo, void 0), c = ce("checkbox"), d = S(() => {
      var g, v, f, y;
      const p = (v = (g = u == null ? void 0 : u.fill) == null ? void 0 : g.value) != null ? v : "";
      return {
        backgroundColor: p,
        borderColor: p,
        color: (y = (f = u == null ? void 0 : u.textColor) == null ? void 0 : f.value) != null ? y : "",
        boxShadow: p ? `-1px 0 0 0 ${p}` : void 0
      };
    }), h = S(() => [
      c.b("button"),
      c.bm("button", s.value),
      c.is("disabled", l.value),
      c.is("checked", a.value),
      c.is("focus", o.value)
    ]);
    return (g, v) => (T(), P("label", {
      class: M(m(h))
    }, [
      g.trueLabel || g.falseLabel ? We((T(), P("input", {
        key: 0,
        "onUpdate:modelValue": v[0] || (v[0] = (f) => Rn(r) ? r.value = f : null),
        class: M(m(c).be("button", "original")),
        type: "checkbox",
        name: g.name,
        tabindex: g.tabindex,
        disabled: m(l),
        "true-value": g.trueLabel,
        "false-value": g.falseLabel,
        onChange: v[1] || (v[1] = (...f) => m(i) && m(i)(...f)),
        onFocus: v[2] || (v[2] = (f) => o.value = !0),
        onBlur: v[3] || (v[3] = (f) => o.value = !1),
        onClick: v[4] || (v[4] = Ye(() => {
        }, ["stop"]))
      }, null, 42, S1)), [
        [ia, m(r)]
      ]) : We((T(), P("input", {
        key: 1,
        "onUpdate:modelValue": v[5] || (v[5] = (f) => Rn(r) ? r.value = f : null),
        class: M(m(c).be("button", "original")),
        type: "checkbox",
        name: g.name,
        tabindex: g.tabindex,
        disabled: m(l),
        value: g.label,
        onChange: v[6] || (v[6] = (...f) => m(i) && m(i)(...f)),
        onFocus: v[7] || (v[7] = (f) => o.value = !0),
        onBlur: v[8] || (v[8] = (f) => o.value = !1),
        onClick: v[9] || (v[9] = Ye(() => {
        }, ["stop"]))
      }, null, 42, _1)), [
        [ia, m(r)]
      ]),
      g.$slots.default || g.label ? (T(), P("span", {
        key: 2,
        class: M(m(c).be("button", "inner")),
        style: ye(m(a) ? m(d) : void 0)
      }, [
        W(g.$slots, "default", {}, () => [
          Ke(ie(g.label), 1)
        ])
      ], 6)) : q("v-if", !0)
    ], 2));
  }
});
var $u = /* @__PURE__ */ we(E1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const T1 = Ee({
  modelValue: {
    type: fe(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: to,
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
}), k1 = {
  [tt]: (e) => En(e),
  change: (e) => En(e)
}, O1 = H({
  name: "ElCheckboxGroup"
}), x1 = /* @__PURE__ */ H({
  ...O1,
  props: T1,
  emits: k1,
  setup(e, { emit: t }) {
    const n = e, o = ce("checkbox"), { formItem: a } = no(), { inputId: l, isLabeledByFormItem: s } = ql(n, {
      formItemContext: a
    }), r = async (u) => {
      t(tt, u), await he(), t("change", u);
    }, i = S({
      get() {
        return n.modelValue;
      },
      set(u) {
        r(u);
      }
    });
    return ot(oo, {
      ...mm(Zn(n), [
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
    }), Y(() => n.modelValue, () => {
      n.validateEvent && (a == null || a.validate("change").catch((u) => je(u)));
    }), (u, c) => {
      var d;
      return T(), V(Qe(u.tag), {
        id: m(l),
        class: M(m(o).b("group")),
        role: "group",
        "aria-label": m(s) ? void 0 : u.label || "checkbox-group",
        "aria-labelledby": m(s) ? (d = m(a)) == null ? void 0 : d.labelId : void 0
      }, {
        default: F(() => [
          W(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Eu = /* @__PURE__ */ we(x1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const Yn = dt(C1, {
  CheckboxButton: $u,
  CheckboxGroup: Eu
});
eo($u);
eo(Eu);
const Tu = Ee({
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
    values: Po,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), P1 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, A1 = H({
  name: "ElTag"
}), M1 = /* @__PURE__ */ H({
  ...A1,
  props: Tu,
  emits: P1,
  setup(e, { emit: t }) {
    const n = e, o = kn(), a = ce("tag"), l = S(() => {
      const { type: i, hit: u, effect: c, closable: d, round: h } = n;
      return [
        a.b(),
        a.is("closable", d),
        a.m(i),
        a.m(o.value),
        a.m(c),
        a.is("hit", u),
        a.is("round", h)
      ];
    }), s = (i) => {
      t("close", i);
    }, r = (i) => {
      t("click", i);
    };
    return (i, u) => i.disableTransitions ? (T(), P("span", {
      key: 0,
      class: M(m(l)),
      style: ye({ backgroundColor: i.color }),
      onClick: r
    }, [
      R("span", {
        class: M(m(a).e("content"))
      }, [
        W(i.$slots, "default")
      ], 2),
      i.closable ? (T(), V(m(De), {
        key: 0,
        class: M(m(a).e("close")),
        onClick: Ye(s, ["stop"])
      }, {
        default: F(() => [
          Q(m(ir))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : q("v-if", !0)
    ], 6)) : (T(), V(yo, {
      key: 1,
      name: `${m(a).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: F(() => [
        R("span", {
          class: M(m(l)),
          style: ye({ backgroundColor: i.color }),
          onClick: r
        }, [
          R("span", {
            class: M(m(a).e("content"))
          }, [
            W(i.$slots, "default")
          ], 2),
          i.closable ? (T(), V(m(De), {
            key: 0,
            class: M(m(a).e("close")),
            onClick: Ye(s, ["stop"])
          }, {
            default: F(() => [
              Q(m(ir))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : q("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var I1 = /* @__PURE__ */ we(M1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const L1 = dt(I1), ku = Symbol("rowContextKey"), N1 = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly"
], R1 = ["top", "middle", "bottom"], F1 = Ee({
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
    values: N1,
    default: "start"
  },
  align: {
    type: String,
    values: R1
  }
}), B1 = H({
  name: "ElRow"
}), z1 = /* @__PURE__ */ H({
  ...B1,
  props: F1,
  setup(e) {
    const t = e, n = ce("row"), o = S(() => t.gutter);
    ot(ku, {
      gutter: o
    });
    const a = S(() => {
      const s = {};
      return t.gutter && (s.marginRight = s.marginLeft = `-${t.gutter / 2}px`), s;
    }), l = S(() => [
      n.b(),
      n.is(`justify-${t.justify}`, t.justify !== "start"),
      n.is(`align-${t.align}`, !!t.align)
    ]);
    return (s, r) => (T(), V(Qe(s.tag), {
      class: M(m(l)),
      style: ye(m(a))
    }, {
      default: F(() => [
        W(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
var H1 = /* @__PURE__ */ we(z1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);
const D1 = dt(H1), V1 = Ee({
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
    type: fe([Number, Object]),
    default: () => sn({})
  },
  sm: {
    type: fe([Number, Object]),
    default: () => sn({})
  },
  md: {
    type: fe([Number, Object]),
    default: () => sn({})
  },
  lg: {
    type: fe([Number, Object]),
    default: () => sn({})
  },
  xl: {
    type: fe([Number, Object]),
    default: () => sn({})
  }
}), K1 = H({
  name: "ElCol"
}), W1 = /* @__PURE__ */ H({
  ...K1,
  props: V1,
  setup(e) {
    const t = e, { gutter: n } = pe(ku, { gutter: S(() => 0) }), o = ce("col"), a = S(() => {
      const s = {};
      return n.value && (s.paddingLeft = s.paddingRight = `${n.value / 2}px`), s;
    }), l = S(() => {
      const s = [];
      return ["span", "offset", "pull", "push"].forEach((u) => {
        const c = t[u];
        xe(c) && (u === "span" ? s.push(o.b(`${t[u]}`)) : c > 0 && s.push(o.b(`${u}-${t[u]}`)));
      }), ["xs", "sm", "md", "lg", "xl"].forEach((u) => {
        xe(t[u]) ? s.push(o.b(`${u}-${t[u]}`)) : nt(t[u]) && Object.entries(t[u]).forEach(([c, d]) => {
          s.push(c !== "span" ? o.b(`${u}-${c}-${d}`) : o.b(`${u}-${d}`));
        });
      }), n.value && s.push(o.is("guttered")), [o.b(), s];
    });
    return (s, r) => (T(), V(Qe(s.tag), {
      class: M(m(l)),
      style: ye(m(a))
    }, {
      default: F(() => [
        W(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
var j1 = /* @__PURE__ */ we(W1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);
const U1 = dt(j1), Ou = Symbol("elPaginationKey"), q1 = Ee({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: qt
  }
}), G1 = {
  click: (e) => e instanceof MouseEvent
}, Y1 = ["disabled", "aria-label", "aria-disabled"], X1 = { key: 0 }, Q1 = H({
  name: "ElPaginationPrev"
}), Z1 = /* @__PURE__ */ H({
  ...Q1,
  props: q1,
  emits: G1,
  setup(e) {
    const t = e, { t: n } = Pt(), o = S(() => t.disabled || t.currentPage <= 1);
    return (a, l) => (T(), P("button", {
      type: "button",
      class: "btn-prev",
      disabled: m(o),
      "aria-label": a.prevText || m(n)("el.pagination.prev"),
      "aria-disabled": m(o),
      onClick: l[0] || (l[0] = (s) => a.$emit("click", s))
    }, [
      a.prevText ? (T(), P("span", X1, ie(a.prevText), 1)) : (T(), V(m(De), { key: 1 }, {
        default: F(() => [
          (T(), V(Qe(a.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, Y1));
  }
});
var J1 = /* @__PURE__ */ we(Z1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const ew = Ee({
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
    type: qt
  }
}), tw = ["disabled", "aria-label", "aria-disabled"], nw = { key: 0 }, ow = H({
  name: "ElPaginationNext"
}), aw = /* @__PURE__ */ H({
  ...ow,
  props: ew,
  emits: ["click"],
  setup(e) {
    const t = e, { t: n } = Pt(), o = S(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (a, l) => (T(), P("button", {
      type: "button",
      class: "btn-next",
      disabled: m(o),
      "aria-label": a.nextText || m(n)("el.pagination.next"),
      "aria-disabled": m(o),
      onClick: l[0] || (l[0] = (s) => a.$emit("click", s))
    }, [
      a.nextText ? (T(), P("span", nw, ie(a.nextText), 1)) : (T(), V(m(De), { key: 1 }, {
        default: F(() => [
          (T(), V(Qe(a.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, tw));
  }
});
var lw = /* @__PURE__ */ we(aw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const xu = Symbol("ElSelectGroup"), Ma = Symbol("ElSelect");
function rw(e, t) {
  const n = pe(Ma), o = pe(xu, { disabled: !1 }), a = S(() => nt(e.value)), l = S(() => n.props.multiple ? d(n.props.modelValue, e.value) : h(e.value, n.props.modelValue)), s = S(() => {
    if (n.props.multiple) {
      const f = n.props.modelValue || [];
      return !l.value && f.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), r = S(() => e.label || (a.value ? "" : e.value)), i = S(() => e.value || e.label || ""), u = S(() => e.disabled || t.groupDisabled || s.value), c = Ce(), d = (f = [], y) => {
    if (a.value) {
      const p = n.props.valueKey;
      return f && f.some((w) => Fn(Xe(w, p)) === Xe(y, p));
    } else
      return f && f.includes(y);
  }, h = (f, y) => {
    if (a.value) {
      const { valueKey: p } = n.props;
      return Xe(f, p) === Xe(y, p);
    } else
      return f === y;
  }, g = () => {
    !e.disabled && !o.disabled && (n.hoverIndex = n.optionsArray.indexOf(c.proxy));
  };
  Y(() => r.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Y(() => e.value, (f, y) => {
    const { remote: p, valueKey: w } = n.props;
    if (Object.is(f, y) || (n.onOptionDestroy(y, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !p) {
      if (w && nt(f) && nt(y) && f[w] === y[w])
        return;
      n.setSelected();
    }
  }), Y(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: v } = Fn(n);
  return Y(v, (f) => {
    const { query: y } = m(f), p = new RegExp(wm(y), "i");
    t.visible = p.test(r.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: r,
    currentValue: i,
    itemSelected: l,
    isDisabled: u,
    hoverItem: g
  };
}
const sw = H({
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
    const t = ce("select"), n = Oa(), o = S(() => [
      t.be("dropdown", "item"),
      t.is("disabled", m(r)),
      {
        selected: m(s),
        hover: m(d)
      }
    ]), a = Qn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: l, itemSelected: s, isDisabled: r, select: i, hoverItem: u } = rw(e, a), { visible: c, hover: d } = Zn(a), h = Ce().proxy;
    i.onOptionCreate(h), Bt(() => {
      const v = h.value, { selected: f } = i, p = (i.props.multiple ? f : [f]).some((w) => w.value === h.value);
      he(() => {
        i.cachedOptions.get(v) === h && !p && i.cachedOptions.delete(v);
      }), i.onOptionDestroy(v, h);
    });
    function g() {
      e.disabled !== !0 && a.groupDisabled !== !0 && i.handleOptionSelect(h);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: l,
      itemSelected: s,
      isDisabled: r,
      select: i,
      hoverItem: u,
      visible: c,
      hover: d,
      selectOptionClick: g,
      states: a
    };
  }
}), iw = ["id", "aria-disabled", "aria-selected"];
function uw(e, t, n, o, a, l) {
  return We((T(), P("li", {
    id: e.id,
    class: M(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMouseenter: t[0] || (t[0] = (...s) => e.hoverItem && e.hoverItem(...s)),
    onClick: t[1] || (t[1] = Ye((...s) => e.selectOptionClick && e.selectOptionClick(...s), ["stop"]))
  }, [
    W(e.$slots, "default", {}, () => [
      R("span", null, ie(e.currentLabel), 1)
    ])
  ], 42, iw)), [
    [dn, e.visible]
  ]);
}
var Jl = /* @__PURE__ */ we(sw, [["render", uw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const cw = H({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = pe(Ma), t = ce("select"), n = S(() => e.props.popperClass), o = S(() => e.props.multiple), a = S(() => e.props.fitInputWidth), l = k("");
    function s() {
      var r;
      l.value = `${(r = e.selectWrapper) == null ? void 0 : r.offsetWidth}px`;
    }
    return Me(() => {
      s(), Bn(e.selectWrapper, s);
    }), {
      ns: t,
      minWidth: l,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: a
    };
  }
});
function dw(e, t, n, o, a, l) {
  return T(), P("div", {
    class: M([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: ye({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    W(e.$slots, "default")
  ], 6);
}
var fw = /* @__PURE__ */ we(cw, [["render", dw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function pw(e) {
  const { t } = Pt();
  return Qn({
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
const vw = (e, t, n) => {
  const { t: o } = Pt(), a = ce("select");
  Ei({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, S(() => e.suffixTransition === !1));
  const l = k(null), s = k(null), r = k(null), i = k(null), u = k(null), c = k(null), d = k(null), h = k(null), g = k(), v = Cn({ query: "" }), f = Cn(""), y = k([]);
  let p = 0;
  const { form: w, formItem: C } = no(), b = S(() => !e.filterable || e.multiple || !t.visible), $ = S(() => e.disabled || (w == null ? void 0 : w.disabled)), E = S(() => {
    const O = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !$.value && t.inputHovering && O;
  }), _ = S(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), x = S(() => a.is("reverse", _.value && t.visible && e.suffixTransition)), L = S(() => (w == null ? void 0 : w.statusIcon) && (C == null ? void 0 : C.validateState) && Si[C == null ? void 0 : C.validateState]), D = S(() => e.remote ? 300 : 0), B = S(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), I = S(() => {
    const O = Array.from(t.options.values()), N = [];
    return y.value.forEach((K) => {
      const se = O.findIndex((Je) => Je.currentLabel === K);
      se > -1 && N.push(O[se]);
    }), N.length >= O.length ? N : O;
  }), Z = S(() => Array.from(t.cachedOptions.values())), J = S(() => {
    const O = I.value.filter((N) => !N.created).some((N) => N.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !O;
  }), oe = kn(), ae = S(() => ["small"].includes(oe.value) ? "small" : "default"), j = S({
    get() {
      return t.visible && B.value !== !1;
    },
    set(O) {
      t.visible = O;
    }
  });
  Y([() => $.value, () => oe.value, () => w == null ? void 0 : w.size], () => {
    he(() => {
      ne();
    });
  }), Y(() => e.placeholder, (O) => {
    t.cachedPlaceHolder = t.currentPlaceholder = O, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), Y(() => e.modelValue, (O, N) => {
    e.multiple && (ne(), O && O.length > 0 || s.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", A(t.query))), ue(), e.filterable && !e.multiple && (t.inputLength = 20), !va(O, N) && e.validateEvent && (C == null || C.validate("change").catch((K) => je(K)));
  }, {
    flush: "post",
    deep: !0
  }), Y(() => t.visible, (O) => {
    var N, K, se, Je, rt;
    O ? ((K = (N = i.value) == null ? void 0 : N.updatePopper) == null || K.call(N), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (Je = (se = r.value) == null ? void 0 : se.focus) == null || Je.call(se), e.multiple ? (rt = s.value) == null || rt.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), A(t.query), !e.multiple && !e.remote && (v.value.query = "", ro(v), ro(f)))) : (e.filterable && (Et(e.filterMethod) && e.filterMethod(""), Et(e.remoteMethod) && e.remoteMethod("")), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, be(), he(() => {
      s.value && s.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", O);
  }), Y(() => t.options.entries(), () => {
    var O, N, K;
    if (!Ie)
      return;
    (N = (O = i.value) == null ? void 0 : O.updatePopper) == null || N.call(O), e.multiple && ne();
    const se = ((K = d.value) == null ? void 0 : K.querySelectorAll("input")) || [];
    (!e.filterable && !e.defaultFirstOption && !Hn(e.modelValue) || !Array.from(se).includes(document.activeElement)) && ue(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && le();
  }, {
    flush: "post"
  }), Y(() => t.hoverIndex, (O) => {
    xe(O) && O > -1 ? g.value = I.value[O] || {} : g.value = {}, I.value.forEach((N) => {
      N.hover = g.value === N;
    });
  });
  const ne = () => {
    he(() => {
      var O, N;
      if (!l.value)
        return;
      const K = l.value.$el.querySelector("input");
      p = p || (K.clientHeight > 0 ? K.clientHeight + 2 : 0);
      const se = c.value, Je = getComputedStyle(K).getPropertyValue(a.cssVarName("input-height")), rt = Number.parseFloat(Je) || Tm(oe.value || (w == null ? void 0 : w.size)), _t = oe.value || rt === p || p <= 0 ? rt : p;
      !(K.offsetParent === null) && (K.style.height = `${(t.selected.length === 0 ? _t : Math.max(se ? se.clientHeight + (se.clientHeight > _t ? 6 : 0) : 0, _t)) - 2}px`), t.visible && B.value !== !1 && ((N = (O = i.value) == null ? void 0 : O.updatePopper) == null || N.call(O));
    });
  }, A = async (O) => {
    if (!(t.previousQuery === O || t.isOnComposition)) {
      if (t.previousQuery === null && (Et(e.filterMethod) || Et(e.remoteMethod))) {
        t.previousQuery = O;
        return;
      }
      t.previousQuery = O, he(() => {
        var N, K;
        t.visible && ((K = (N = i.value) == null ? void 0 : N.updatePopper) == null || K.call(N));
      }), t.hoverIndex = -1, e.multiple && e.filterable && he(() => {
        if (!$.value) {
          const N = s.value.value.length * 15 + 20;
          t.inputLength = e.collapseTags ? Math.min(50, N) : N, U();
        }
        ne();
      }), e.remote && Et(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(O)) : Et(e.filterMethod) ? (e.filterMethod(O), ro(f)) : (t.filteredOptionsCount = t.optionsCount, v.value.query = O, ro(v), ro(f)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await he(), le());
    }
  }, U = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = s.value.value ? "" : t.cachedPlaceHolder);
  }, le = () => {
    const O = I.value.filter((se) => se.visible && !se.disabled && !se.states.groupDisabled), N = O.find((se) => se.created), K = O[0];
    t.hoverIndex = ft(I.value, N || K);
  }, ue = () => {
    var O;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const K = me(e.modelValue);
      (O = K.props) != null && O.created ? (t.createdLabel = K.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = K.currentLabel, t.selected = K, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const N = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((K) => {
      N.push(me(K));
    }), t.selected = N, he(() => {
      ne();
    });
  }, me = (O) => {
    let N;
    const K = Ia(O).toLowerCase() === "object", se = Ia(O).toLowerCase() === "null", Je = Ia(O).toLowerCase() === "undefined";
    for (let Kt = t.cachedOptions.size - 1; Kt >= 0; Kt--) {
      const $t = Z.value[Kt];
      if (K ? Xe($t.value, e.valueKey) === Xe(O, e.valueKey) : $t.value === O) {
        N = {
          value: O,
          currentLabel: $t.currentLabel,
          isDisabled: $t.isDisabled
        };
        break;
      }
    }
    if (N)
      return N;
    const rt = K ? O.label : !se && !Je ? O : "", _t = {
      value: O,
      currentLabel: rt
    };
    return e.multiple && (_t.hitState = !1), _t;
  }, be = () => {
    setTimeout(() => {
      const O = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((N) => I.value.findIndex((K) => Xe(K, O) === Xe(N, O)))) : t.hoverIndex = -1 : t.hoverIndex = I.value.findIndex((N) => ge(N) === ge(t.selected));
    }, 300);
  }, _e = () => {
    var O, N;
    Te(), (N = (O = i.value) == null ? void 0 : O.updatePopper) == null || N.call(O), e.multiple && ne();
  }, Te = () => {
    var O;
    t.inputWidth = (O = l.value) == null ? void 0 : O.$el.offsetWidth;
  }, Le = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, A(t.query));
  }, Se = zn(() => {
    Le();
  }, D.value), Re = zn((O) => {
    A(O.target.value);
  }, D.value), Ae = (O) => {
    va(e.modelValue, O) || n.emit(_i, O);
  }, qe = (O) => im(O, (N) => !t.disabledOptions.has(N)), At = (O) => {
    if (O.code !== Kn.delete) {
      if (O.target.value.length <= 0 && !vt()) {
        const N = e.modelValue.slice(), K = qe(N);
        if (K < 0)
          return;
        N.splice(K, 1), n.emit(tt, N), Ae(N);
      }
      O.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, at = (O, N) => {
    const K = t.selected.indexOf(N);
    if (K > -1 && !$.value) {
      const se = e.modelValue.slice();
      se.splice(K, 1), n.emit(tt, se), Ae(se), n.emit("remove-tag", N.value);
    }
    O.stopPropagation(), te();
  }, Mt = (O) => {
    O.stopPropagation();
    const N = e.multiple ? [] : "";
    if (!Tt(N))
      for (const K of t.selected)
        K.isDisabled && N.push(K.value);
    n.emit(tt, N), Ae(N), t.hoverIndex = -1, t.visible = !1, n.emit("clear"), te();
  }, yt = (O) => {
    var N;
    if (e.multiple) {
      const K = (e.modelValue || []).slice(), se = ft(K, O.value);
      se > -1 ? K.splice(se, 1) : (e.multipleLimit <= 0 || K.length < e.multipleLimit) && K.push(O.value), n.emit(tt, K), Ae(K), O.created && (t.query = "", A(""), t.inputLength = 20), e.filterable && ((N = s.value) == null || N.focus());
    } else
      n.emit(tt, O.value), Ae(O.value), t.visible = !1;
    Dt(), !t.visible && he(() => {
      pt(O);
    });
  }, ft = (O = [], N) => {
    if (!nt(N))
      return O.indexOf(N);
    const K = e.valueKey;
    let se = -1;
    return O.some((Je, rt) => Fn(Xe(Je, K)) === Xe(N, K) ? (se = rt, !0) : !1), se;
  }, Dt = () => {
    const O = s.value || l.value;
    O && (O == null || O.focus());
  }, pt = (O) => {
    var N, K, se, Je, rt;
    const _t = Array.isArray(O) ? O[0] : O;
    let Kt = null;
    if (_t != null && _t.value) {
      const $t = I.value.filter((Io) => Io.value === _t.value);
      $t.length > 0 && (Kt = $t[0].$el);
    }
    if (i.value && Kt) {
      const $t = (Je = (se = (K = (N = i.value) == null ? void 0 : N.popperRef) == null ? void 0 : K.contentRef) == null ? void 0 : se.querySelector) == null ? void 0 : Je.call(se, `.${a.be("dropdown", "wrap")}`);
      $t && _m($t, Kt);
    }
    (rt = h.value) == null || rt.handleScroll();
  }, It = (O) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(O.value, O), t.cachedOptions.set(O.value, O), O.disabled && t.disabledOptions.set(O.value, O);
  }, Ze = (O, N) => {
    t.options.get(O) === N && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(O));
  }, wt = (O) => {
    O.code !== Kn.backspace && vt(!1), t.inputLength = s.value.value.length * 15 + 20, ne();
  }, vt = (O) => {
    if (!Array.isArray(t.selected))
      return;
    const N = qe(t.selected.map((se) => se.value)), K = t.selected[N];
    if (K)
      return O === !0 || O === !1 ? (K.hitState = O, O) : (K.hitState = !K.hitState, K.hitState);
  }, Vt = (O) => {
    const N = O.target.value;
    if (O.type === "compositionend")
      t.isOnComposition = !1, he(() => A(N));
    else {
      const K = N[N.length - 1] || "";
      t.isOnComposition = !$i(K);
    }
  }, Ct = () => {
    he(() => pt(t.selected));
  }, z = (O) => {
    t.focused || ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), t.focused = !0, n.emit("focus", O));
  }, te = () => {
    var O, N;
    t.visible ? (O = s.value || l.value) == null || O.focus() : (N = l.value) == null || N.focus();
  }, ke = () => {
    var O, N, K;
    t.visible = !1, (O = l.value) == null || O.blur(), (K = (N = r.value) == null ? void 0 : N.blur) == null || K.call(N);
  }, Be = (O) => {
    var N, K, se;
    (N = i.value) != null && N.isFocusInsideContent(O) || (K = u.value) != null && K.isFocusInsideContent(O) || (se = d.value) != null && se.contains(O.relatedTarget) || (t.visible && X(), t.focused = !1, n.emit("blur", O));
  }, Xt = (O) => {
    Mt(O);
  }, X = () => {
    t.visible = !1;
  }, ee = (O) => {
    t.visible && (O.preventDefault(), O.stopPropagation(), t.visible = !1);
  }, ve = (O) => {
    O && !t.mouseEnter || $.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!i.value || !i.value.isFocusInsideContent()) && (t.visible = !t.visible), te());
  }, de = () => {
    t.visible ? I.value[t.hoverIndex] && yt(I.value[t.hoverIndex]) : ve();
  }, ge = (O) => nt(O.value) ? Xe(O.value, e.valueKey) : O.value, Ne = S(() => I.value.filter((O) => O.visible).every((O) => O.disabled)), Ge = S(() => e.multiple ? t.selected.slice(0, e.maxCollapseTags) : []), St = S(() => e.multiple ? t.selected.slice(e.maxCollapseTags) : []), lt = (O) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !Ne.value) {
      O === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : O === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const N = I.value[t.hoverIndex];
      (N.disabled === !0 || N.states.groupDisabled === !0 || !N.visible) && lt(O), he(() => pt(g.value));
    }
  }, ao = () => {
    t.mouseEnter = !0;
  }, An = () => {
    t.mouseEnter = !1;
  }, lo = (O, N) => {
    var K, se;
    at(O, N), (se = (K = u.value) == null ? void 0 : K.updatePopper) == null || se.call(K);
  }, vn = S(() => ({
    maxWidth: `${m(t.inputWidth) - 32 - (L.value ? 22 : 0)}px`,
    width: "100%"
  }));
  return {
    optionList: y,
    optionsArray: I,
    hoverOption: g,
    selectSize: oe,
    handleResize: _e,
    debouncedOnInputChange: Se,
    debouncedQueryChange: Re,
    deletePrevTag: At,
    deleteTag: at,
    deleteSelected: Mt,
    handleOptionSelect: yt,
    scrollToOption: pt,
    readonly: b,
    resetInputHeight: ne,
    showClose: E,
    iconComponent: _,
    iconReverse: x,
    showNewOption: J,
    collapseTagSize: ae,
    setSelected: ue,
    managePlaceholder: U,
    selectDisabled: $,
    emptyText: B,
    toggleLastOptionHitState: vt,
    resetInputState: wt,
    handleComposition: Vt,
    onOptionCreate: It,
    onOptionDestroy: Ze,
    handleMenuEnter: Ct,
    handleFocus: z,
    focus: te,
    blur: ke,
    handleBlur: Be,
    handleClearClick: Xt,
    handleClose: X,
    handleKeydownEscape: ee,
    toggleMenu: ve,
    selectOption: de,
    getValueKey: ge,
    navigateOptions: lt,
    handleDeleteTooltipTag: lo,
    dropMenuVisible: j,
    queryChange: v,
    groupQueryChange: f,
    showTagList: Ge,
    collapseTagList: St,
    selectTagsStyle: vn,
    reference: l,
    input: s,
    iOSInput: r,
    tooltipRef: i,
    tagTooltipRef: u,
    tags: c,
    selectWrapper: d,
    scrollbar: h,
    handleMouseEnter: ao,
    handleMouseLeave: An
  };
};
var hw = H({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let o = [];
    function a(l, s) {
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
      function u(c) {
        Array.isArray(c) && c.forEach((d) => {
          var h, g, v, f;
          const y = (h = (d == null ? void 0 : d.type) || {}) == null ? void 0 : h.name;
          y === "ElOptionGroup" ? u(!Tt(d.children) && !Array.isArray(d.children) && Et((g = d.children) == null ? void 0 : g.default) ? (v = d.children) == null ? void 0 : v.default() : d.children) : y === "ElOption" ? i.push((f = d.props) == null ? void 0 : f.label) : Array.isArray(d.children) && u(d.children);
        });
      }
      return r.length && u((s = r[0]) == null ? void 0 : s.children), a(i, o) || (o = i, n("update-options", i)), r;
    };
  }
});
const ks = "ElSelect", gw = H({
  name: ks,
  componentName: ks,
  components: {
    ElInput: Zi,
    ElSelectMenu: fw,
    ElOption: Jl,
    ElOptions: hw,
    ElTag: L1,
    ElScrollbar: Pa,
    ElTooltip: iu,
    ElIcon: De
  },
  directives: { ClickOutside: pu },
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
      validator: km
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
    teleported: Zl.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: qt,
      default: Sl
    },
    fitInputWidth: Boolean,
    suffixIcon: {
      type: qt,
      default: Ds
    },
    tagType: { ...Tu.type, default: "info" },
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
      values: Ta,
      default: "bottom-start"
    },
    ariaLabel: {
      type: String,
      default: void 0
    }
  },
  emits: [
    tt,
    _i,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = ce("select"), o = ce("input"), { t: a } = Pt(), l = Oa(), s = pw(e), {
      optionList: r,
      optionsArray: i,
      hoverOption: u,
      selectSize: c,
      readonly: d,
      handleResize: h,
      collapseTagSize: g,
      debouncedOnInputChange: v,
      debouncedQueryChange: f,
      deletePrevTag: y,
      deleteTag: p,
      deleteSelected: w,
      handleOptionSelect: C,
      scrollToOption: b,
      setSelected: $,
      resetInputHeight: E,
      managePlaceholder: _,
      showClose: x,
      selectDisabled: L,
      iconComponent: D,
      iconReverse: B,
      showNewOption: I,
      emptyText: Z,
      toggleLastOptionHitState: J,
      resetInputState: oe,
      handleComposition: ae,
      onOptionCreate: j,
      onOptionDestroy: ne,
      handleMenuEnter: A,
      handleFocus: U,
      focus: le,
      blur: ue,
      handleBlur: me,
      handleClearClick: be,
      handleClose: _e,
      handleKeydownEscape: Te,
      toggleMenu: Le,
      selectOption: Se,
      getValueKey: Re,
      navigateOptions: Ae,
      handleDeleteTooltipTag: qe,
      dropMenuVisible: At,
      reference: at,
      input: Mt,
      iOSInput: yt,
      tooltipRef: ft,
      tagTooltipRef: Dt,
      tags: pt,
      selectWrapper: It,
      scrollbar: Ze,
      queryChange: wt,
      groupQueryChange: vt,
      handleMouseEnter: Vt,
      handleMouseLeave: Ct,
      showTagList: z,
      collapseTagList: te,
      selectTagsStyle: ke
    } = vw(e, s, t), {
      inputWidth: Be,
      selected: Xt,
      inputLength: X,
      filteredOptionsCount: ee,
      visible: ve,
      selectedLabel: de,
      hoverIndex: ge,
      query: Ne,
      inputHovering: Ge,
      currentPlaceholder: St,
      menuVisibleOnFocus: lt,
      isOnComposition: ao,
      options: An,
      cachedOptions: lo,
      optionsCount: vn,
      prefixWidth: O
    } = Zn(s), N = S(() => {
      const ht = [n.b()], hn = m(c);
      return hn && ht.push(n.m(hn)), e.disabled && ht.push(n.m("disabled")), ht;
    }), K = S(() => [
      n.e("tags"),
      n.is("disabled", m(L))
    ]), se = S(() => [
      n.b("tags-wrapper"),
      { "has-prefix": m(O) && m(Xt).length }
    ]), Je = S(() => [
      n.e("input"),
      n.is(m(c)),
      n.is("disabled", m(L))
    ]), rt = S(() => [
      n.e("input"),
      n.is(m(c)),
      n.em("input", "iOS")
    ]), _t = S(() => [
      n.is("empty", !e.allowCreate && !!m(Ne) && m(ee) === 0)
    ]), Kt = S(() => ({ maxWidth: `${m(Be) > 123 ? m(Be) - 123 : m(Be) - 75}px` })), $t = S(() => ({
      marginLeft: `${m(O)}px`,
      flexGrow: 1,
      width: `${m(X) / (m(Be) - 32)}%`,
      maxWidth: `${m(Be) - 42}px`
    }));
    ot(Ma, Qn({
      props: e,
      options: An,
      optionsArray: i,
      cachedOptions: lo,
      optionsCount: vn,
      filteredOptionsCount: ee,
      hoverIndex: ge,
      handleOptionSelect: C,
      onOptionCreate: j,
      onOptionDestroy: ne,
      selectWrapper: It,
      selected: Xt,
      setSelected: $,
      queryChange: wt,
      groupQueryChange: vt
    })), Me(() => {
      s.cachedPlaceHolder = St.value = e.placeholder || (() => a("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (St.value = ""), Bn(It, h), e.remote && e.multiple && E(), he(() => {
        const ht = at.value && at.value.$el;
        if (ht && (Be.value = ht.getBoundingClientRect().width, t.slots.prefix)) {
          const hn = ht.querySelector(`.${o.e("prefix")}`);
          O.value = Math.max(hn.getBoundingClientRect().width + 11, 30);
        }
      }), $();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(tt, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(tt, "");
    const Io = S(() => {
      var ht, hn;
      return (hn = (ht = ft.value) == null ? void 0 : ht.popperRef) == null ? void 0 : hn.contentRef;
    });
    return {
      isIOS: Ks,
      onOptionsRendered: (ht) => {
        r.value = ht;
      },
      prefixWidth: O,
      selectSize: c,
      readonly: d,
      handleResize: h,
      collapseTagSize: g,
      debouncedOnInputChange: v,
      debouncedQueryChange: f,
      deletePrevTag: y,
      deleteTag: p,
      handleDeleteTooltipTag: qe,
      deleteSelected: w,
      handleOptionSelect: C,
      scrollToOption: b,
      inputWidth: Be,
      selected: Xt,
      inputLength: X,
      filteredOptionsCount: ee,
      visible: ve,
      selectedLabel: de,
      hoverIndex: ge,
      query: Ne,
      inputHovering: Ge,
      currentPlaceholder: St,
      menuVisibleOnFocus: lt,
      isOnComposition: ao,
      options: An,
      resetInputHeight: E,
      managePlaceholder: _,
      showClose: x,
      selectDisabled: L,
      iconComponent: D,
      iconReverse: B,
      showNewOption: I,
      emptyText: Z,
      toggleLastOptionHitState: J,
      resetInputState: oe,
      handleComposition: ae,
      handleMenuEnter: A,
      handleFocus: U,
      focus: le,
      blur: ue,
      handleBlur: me,
      handleClearClick: be,
      handleClose: _e,
      handleKeydownEscape: Te,
      toggleMenu: Le,
      selectOption: Se,
      getValueKey: Re,
      navigateOptions: Ae,
      dropMenuVisible: At,
      reference: at,
      input: Mt,
      iOSInput: yt,
      tooltipRef: ft,
      popperPaneRef: Io,
      tags: pt,
      selectWrapper: It,
      scrollbar: Ze,
      wrapperKls: N,
      tagsKls: K,
      tagWrapperKls: se,
      inputKls: Je,
      iOSInputKls: rt,
      scrollbarKls: _t,
      selectTagsStyle: ke,
      nsSelect: n,
      tagTextStyle: Kt,
      inputStyle: $t,
      handleMouseEnter: Vt,
      handleMouseLeave: Ct,
      showTagList: z,
      collapseTagList: te,
      tagTooltipRef: Dt,
      contentId: l,
      hoverOption: u
    };
  }
}), mw = ["disabled", "autocomplete", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label"], bw = ["disabled"], yw = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function ww(e, t, n, o, a, l) {
  const s = G("el-tag"), r = G("el-tooltip"), i = G("el-icon"), u = G("el-input"), c = G("el-option"), d = G("el-options"), h = G("el-scrollbar"), g = G("el-select-menu"), v = yl("click-outside");
  return We((T(), P("div", {
    ref: "selectWrapper",
    class: M(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...f) => e.handleMouseEnter && e.handleMouseEnter(...f)),
    onMouseleave: t[23] || (t[23] = (...f) => e.handleMouseLeave && e.handleMouseLeave(...f)),
    onClick: t[24] || (t[24] = Ye((...f) => e.toggleMenu && e.toggleMenu(...f), ["stop"]))
  }, [
    Q(r, {
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
      default: F(() => {
        var f, y;
        return [
          R("div", {
            class: "select-trigger",
            onMouseenter: t[20] || (t[20] = (p) => e.inputHovering = !0),
            onMouseleave: t[21] || (t[21] = (p) => e.inputHovering = !1)
          }, [
            e.multiple ? (T(), P("div", {
              key: 0,
              ref: "tags",
              tabindex: "-1",
              class: M(e.tagsKls),
              style: ye(e.selectTagsStyle),
              onClick: t[15] || (t[15] = (...p) => e.focus && e.focus(...p))
            }, [
              e.collapseTags && e.selected.length ? (T(), V(yo, {
                key: 0,
                onAfterLeave: e.resetInputHeight
              }, {
                default: F(() => [
                  R("span", {
                    class: M(e.tagWrapperKls)
                  }, [
                    (T(!0), P($e, null, ze(e.showTagList, (p) => (T(), V(s, {
                      key: e.getValueKey(p),
                      closable: !e.selectDisabled && !p.isDisabled,
                      size: e.collapseTagSize,
                      hit: p.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (w) => e.deleteTag(w, p)
                    }, {
                      default: F(() => [
                        R("span", {
                          class: M(e.nsSelect.e("tags-text")),
                          style: ye(e.tagTextStyle)
                        }, ie(p.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                    e.selected.length > e.maxCollapseTags ? (T(), V(s, {
                      key: 0,
                      closable: !1,
                      size: e.collapseTagSize,
                      type: e.tagType,
                      "disable-transitions": ""
                    }, {
                      default: F(() => [
                        e.collapseTagsTooltip ? (T(), V(r, {
                          key: 0,
                          ref: "tagTooltipRef",
                          disabled: e.dropMenuVisible,
                          "fallback-placements": ["bottom", "top", "right", "left"],
                          effect: e.effect,
                          placement: "bottom",
                          teleported: e.teleported
                        }, {
                          default: F(() => [
                            R("span", {
                              class: M(e.nsSelect.e("tags-text"))
                            }, "+ " + ie(e.selected.length - e.maxCollapseTags), 3)
                          ]),
                          content: F(() => [
                            R("div", {
                              class: M(e.nsSelect.e("collapse-tags"))
                            }, [
                              (T(!0), P($e, null, ze(e.collapseTagList, (p) => (T(), P("div", {
                                key: e.getValueKey(p),
                                class: M(e.nsSelect.e("collapse-tag"))
                              }, [
                                Q(s, {
                                  class: "in-tooltip",
                                  closable: !e.selectDisabled && !p.isDisabled,
                                  size: e.collapseTagSize,
                                  hit: p.hitState,
                                  type: e.tagType,
                                  "disable-transitions": "",
                                  style: { margin: "2px" },
                                  onClose: (w) => e.handleDeleteTooltipTag(w, p)
                                }, {
                                  default: F(() => [
                                    R("span", {
                                      class: M(e.nsSelect.e("tags-text")),
                                      style: ye({
                                        maxWidth: e.inputWidth - 75 + "px"
                                      })
                                    }, ie(p.currentLabel), 7)
                                  ]),
                                  _: 2
                                }, 1032, ["closable", "size", "hit", "type", "onClose"])
                              ], 2))), 128))
                            ], 2)
                          ]),
                          _: 1
                        }, 8, ["disabled", "effect", "teleported"])) : (T(), P("span", {
                          key: 1,
                          class: M(e.nsSelect.e("tags-text"))
                        }, "+ " + ie(e.selected.length - e.maxCollapseTags), 3))
                      ]),
                      _: 1
                    }, 8, ["size", "type"])) : q("v-if", !0)
                  ], 2)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])) : q("v-if", !0),
              e.collapseTags ? q("v-if", !0) : (T(), V(yo, {
                key: 1,
                onAfterLeave: e.resetInputHeight
              }, {
                default: F(() => [
                  R("span", {
                    class: M(e.tagWrapperKls),
                    style: ye(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                  }, [
                    (T(!0), P($e, null, ze(e.selected, (p) => (T(), V(s, {
                      key: e.getValueKey(p),
                      closable: !e.selectDisabled && !p.isDisabled,
                      size: e.collapseTagSize,
                      hit: p.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (w) => e.deleteTag(w, p)
                    }, {
                      default: F(() => [
                        R("span", {
                          class: M(e.nsSelect.e("tags-text")),
                          style: ye({ maxWidth: e.inputWidth - 75 + "px" })
                        }, ie(p.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                  ], 6)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])),
              e.filterable && !e.selectDisabled ? We((T(), P("input", {
                key: 2,
                ref: "input",
                "onUpdate:modelValue": t[0] || (t[0] = (p) => e.query = p),
                type: "text",
                class: M(e.inputKls),
                disabled: e.selectDisabled,
                autocomplete: e.autocomplete,
                style: ye(e.inputStyle),
                role: "combobox",
                "aria-activedescendant": ((f = e.hoverOption) == null ? void 0 : f.id) || "",
                "aria-controls": e.contentId,
                "aria-expanded": e.dropMenuVisible,
                "aria-label": e.ariaLabel,
                "aria-autocomplete": "none",
                "aria-haspopup": "listbox",
                onFocus: t[1] || (t[1] = (...p) => e.handleFocus && e.handleFocus(...p)),
                onBlur: t[2] || (t[2] = (...p) => e.handleBlur && e.handleBlur(...p)),
                onKeyup: t[3] || (t[3] = (...p) => e.managePlaceholder && e.managePlaceholder(...p)),
                onKeydown: [
                  t[4] || (t[4] = (...p) => e.resetInputState && e.resetInputState(...p)),
                  t[5] || (t[5] = it(Ye((p) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                  t[6] || (t[6] = it(Ye((p) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                  t[7] || (t[7] = it((...p) => e.handleKeydownEscape && e.handleKeydownEscape(...p), ["esc"])),
                  t[8] || (t[8] = it(Ye((...p) => e.selectOption && e.selectOption(...p), ["stop", "prevent"]), ["enter"])),
                  t[9] || (t[9] = it((...p) => e.deletePrevTag && e.deletePrevTag(...p), ["delete"])),
                  t[10] || (t[10] = it((p) => e.visible = !1, ["tab"]))
                ],
                onCompositionstart: t[11] || (t[11] = (...p) => e.handleComposition && e.handleComposition(...p)),
                onCompositionupdate: t[12] || (t[12] = (...p) => e.handleComposition && e.handleComposition(...p)),
                onCompositionend: t[13] || (t[13] = (...p) => e.handleComposition && e.handleComposition(...p)),
                onInput: t[14] || (t[14] = (...p) => e.debouncedQueryChange && e.debouncedQueryChange(...p))
              }, null, 46, mw)), [
                [Ju, e.query]
              ]) : q("v-if", !0)
            ], 6)) : q("v-if", !0),
            e.isIOS && !e.multiple && e.filterable && e.readonly ? (T(), P("input", {
              key: 1,
              ref: "iOSInput",
              class: M(e.iOSInputKls),
              disabled: e.selectDisabled,
              type: "text"
            }, null, 10, bw)) : q("v-if", !0),
            Q(u, {
              id: e.id,
              ref: "reference",
              modelValue: e.selectedLabel,
              "onUpdate:modelValue": t[16] || (t[16] = (p) => e.selectedLabel = p),
              type: "text",
              placeholder: typeof e.currentPlaceholder == "function" ? e.currentPlaceholder() : e.currentPlaceholder,
              name: e.name,
              autocomplete: e.autocomplete,
              size: e.selectSize,
              disabled: e.selectDisabled,
              readonly: e.readonly,
              "validate-event": !1,
              class: M([e.nsSelect.is("focus", e.visible)]),
              tabindex: e.multiple && e.filterable ? -1 : void 0,
              role: "combobox",
              "aria-activedescendant": ((y = e.hoverOption) == null ? void 0 : y.id) || "",
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
                t[17] || (t[17] = it(Ye((p) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
                t[18] || (t[18] = it(Ye((p) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
                it(Ye(e.selectOption, ["stop", "prevent"]), ["enter"]),
                it(e.handleKeydownEscape, ["esc"]),
                t[19] || (t[19] = it((p) => e.visible = !1, ["tab"]))
              ]
            }, _n({
              suffix: F(() => [
                e.iconComponent && !e.showClose ? (T(), V(i, {
                  key: 0,
                  class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
                }, {
                  default: F(() => [
                    (T(), V(Qe(e.iconComponent)))
                  ]),
                  _: 1
                }, 8, ["class"])) : q("v-if", !0),
                e.showClose && e.clearIcon ? (T(), V(i, {
                  key: 1,
                  class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                  onClick: e.handleClearClick
                }, {
                  default: F(() => [
                    (T(), V(Qe(e.clearIcon)))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])) : q("v-if", !0)
              ]),
              _: 2
            }, [
              e.$slots.prefix ? {
                name: "prefix",
                fn: F(() => [
                  R("div", yw, [
                    W(e.$slots, "prefix")
                  ])
                ])
              } : void 0
            ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "aria-activedescendant", "aria-controls", "aria-expanded", "label", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
          ], 32)
        ];
      }),
      content: F(() => [
        Q(g, null, {
          default: F(() => [
            We(Q(h, {
              id: e.contentId,
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: M(e.scrollbarKls),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical"
            }, {
              default: F(() => [
                e.showNewOption ? (T(), V(c, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : q("v-if", !0),
                Q(d, { onUpdateOptions: e.onOptionsRendered }, {
                  default: F(() => [
                    W(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label"]), [
              [dn, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (T(), P($e, { key: 0 }, [
              e.$slots.empty ? W(e.$slots, "empty", { key: 0 }) : (T(), P("p", {
                key: 1,
                class: M(e.nsSelect.be("dropdown", "empty"))
              }, ie(e.emptyText), 3))
            ], 64)) : q("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [v, e.handleClose, e.popperPaneRef]
  ]);
}
var Cw = /* @__PURE__ */ we(gw, [["render", ww], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const Sw = H({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = ce("select"), n = k(!0), o = Ce(), a = k([]);
    ot(xu, Qn({
      ...Zn(e)
    }));
    const l = pe(Ma);
    Me(() => {
      a.value = s(o.subTree);
    });
    const s = (i) => {
      const u = [];
      return Array.isArray(i.children) && i.children.forEach((c) => {
        var d;
        c.type && c.type.name === "ElOption" && c.component && c.component.proxy ? u.push(c.component.proxy) : (d = c.children) != null && d.length && u.push(...s(c));
      }), u;
    }, { groupQueryChange: r } = Fn(l);
    return Y(r, () => {
      n.value = a.value.some((i) => i.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function _w(e, t, n, o, a, l) {
  return We((T(), P("ul", {
    class: M(e.ns.be("group", "wrap"))
  }, [
    R("li", {
      class: M(e.ns.be("group", "title"))
    }, ie(e.label), 3),
    R("li", null, [
      R("ul", {
        class: M(e.ns.b("group"))
      }, [
        W(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [dn, e.visible]
  ]);
}
var Pu = /* @__PURE__ */ we(Sw, [["render", _w], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const $w = dt(Cw, {
  Option: Jl,
  OptionGroup: Pu
}), Ew = eo(Jl);
eo(Pu);
const er = () => pe(Ou, {}), Tw = Ee({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: fe(Array),
    default: () => sn([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  teleported: Boolean,
  size: {
    type: String,
    values: Po
  }
}), kw = H({
  name: "ElPaginationSizes"
}), Ow = /* @__PURE__ */ H({
  ...kw,
  props: Tw,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: o } = Pt(), a = ce("pagination"), l = er(), s = k(n.pageSize);
    Y(() => n.pageSizes, (u, c) => {
      if (!va(u, c) && Array.isArray(u)) {
        const d = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", d);
      }
    }), Y(() => n.pageSize, (u) => {
      s.value = u;
    });
    const r = S(() => n.pageSizes);
    function i(u) {
      var c;
      u !== s.value && (s.value = u, (c = l.handleSizeChange) == null || c.call(l, Number(u)));
    }
    return (u, c) => (T(), P("span", {
      class: M(m(a).e("sizes"))
    }, [
      Q(m($w), {
        "model-value": s.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        teleported: u.teleported,
        "validate-event": !1,
        onChange: i
      }, {
        default: F(() => [
          (T(!0), P($e, null, ze(m(r), (d) => (T(), V(m(Ew), {
            key: d,
            value: d,
            label: d + m(o)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size", "teleported"])
    ], 2));
  }
});
var xw = /* @__PURE__ */ we(Ow, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const Pw = Ee({
  size: {
    type: String,
    values: Po
  }
}), Aw = ["disabled"], Mw = H({
  name: "ElPaginationJumper"
}), Iw = /* @__PURE__ */ H({
  ...Mw,
  props: Pw,
  setup(e) {
    const { t } = Pt(), n = ce("pagination"), { pageCount: o, disabled: a, currentPage: l, changeEvent: s } = er(), r = k(), i = S(() => {
      var d;
      return (d = r.value) != null ? d : l == null ? void 0 : l.value;
    });
    function u(d) {
      r.value = d ? +d : "";
    }
    function c(d) {
      d = Math.trunc(+d), s == null || s(d), r.value = void 0;
    }
    return (d, h) => (T(), P("span", {
      class: M(m(n).e("jump")),
      disabled: m(a)
    }, [
      R("span", {
        class: M([m(n).e("goto")])
      }, ie(m(t)("el.pagination.goto")), 3),
      Q(m(Zi), {
        size: d.size,
        class: M([m(n).e("editor"), m(n).is("in-pagination")]),
        min: 1,
        max: m(o),
        disabled: m(a),
        "model-value": m(i),
        "validate-event": !1,
        label: m(t)("el.pagination.page"),
        type: "number",
        "onUpdate:modelValue": u,
        onChange: c
      }, null, 8, ["size", "class", "max", "disabled", "model-value", "label"]),
      R("span", {
        class: M([m(n).e("classifier")])
      }, ie(m(t)("el.pagination.pageClassifier")), 3)
    ], 10, Aw));
  }
});
var Lw = /* @__PURE__ */ we(Iw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const Nw = Ee({
  total: {
    type: Number,
    default: 1e3
  }
}), Rw = ["disabled"], Fw = H({
  name: "ElPaginationTotal"
}), Bw = /* @__PURE__ */ H({
  ...Fw,
  props: Nw,
  setup(e) {
    const { t } = Pt(), n = ce("pagination"), { disabled: o } = er();
    return (a, l) => (T(), P("span", {
      class: M(m(n).e("total")),
      disabled: m(o)
    }, ie(m(t)("el.pagination.total", {
      total: a.total
    })), 11, Rw));
  }
});
var zw = /* @__PURE__ */ we(Bw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const Hw = Ee({
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
}), Dw = ["onKeyup"], Vw = ["aria-current", "aria-label", "tabindex"], Kw = ["tabindex", "aria-label"], Ww = ["aria-current", "aria-label", "tabindex"], jw = ["tabindex", "aria-label"], Uw = ["aria-current", "aria-label", "tabindex"], qw = H({
  name: "ElPaginationPager"
}), Gw = /* @__PURE__ */ H({
  ...qw,
  props: Hw,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = ce("pager"), a = ce("icon"), { t: l } = Pt(), s = k(!1), r = k(!1), i = k(!1), u = k(!1), c = k(!1), d = k(!1), h = S(() => {
      const b = n.pagerCount, $ = (b - 1) / 2, E = Number(n.currentPage), _ = Number(n.pageCount);
      let x = !1, L = !1;
      _ > b && (E > b - $ && (x = !0), E < _ - $ && (L = !0));
      const D = [];
      if (x && !L) {
        const B = _ - (b - 2);
        for (let I = B; I < _; I++)
          D.push(I);
      } else if (!x && L)
        for (let B = 2; B < b; B++)
          D.push(B);
      else if (x && L) {
        const B = Math.floor(b / 2) - 1;
        for (let I = E - B; I <= E + B; I++)
          D.push(I);
      } else
        for (let B = 2; B < _; B++)
          D.push(B);
      return D;
    }), g = S(() => [
      "more",
      "btn-quickprev",
      a.b(),
      o.is("disabled", n.disabled)
    ]), v = S(() => [
      "more",
      "btn-quicknext",
      a.b(),
      o.is("disabled", n.disabled)
    ]), f = S(() => n.disabled ? -1 : 0);
    Ft(() => {
      const b = (n.pagerCount - 1) / 2;
      s.value = !1, r.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - b && (s.value = !0), n.currentPage < n.pageCount - b && (r.value = !0));
    });
    function y(b = !1) {
      n.disabled || (b ? i.value = !0 : u.value = !0);
    }
    function p(b = !1) {
      b ? c.value = !0 : d.value = !0;
    }
    function w(b) {
      const $ = b.target;
      if ($.tagName.toLowerCase() === "li" && Array.from($.classList).includes("number")) {
        const E = Number($.textContent);
        E !== n.currentPage && t("change", E);
      } else
        $.tagName.toLowerCase() === "li" && Array.from($.classList).includes("more") && C(b);
    }
    function C(b) {
      const $ = b.target;
      if ($.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let E = Number($.textContent);
      const _ = n.pageCount, x = n.currentPage, L = n.pagerCount - 2;
      $.className.includes("more") && ($.className.includes("quickprev") ? E = x - L : $.className.includes("quicknext") && (E = x + L)), Number.isNaN(+E) || (E < 1 && (E = 1), E > _ && (E = _)), E !== x && t("change", E);
    }
    return (b, $) => (T(), P("ul", {
      class: M(m(o).b()),
      onClick: C,
      onKeyup: it(w, ["enter"])
    }, [
      b.pageCount > 0 ? (T(), P("li", {
        key: 0,
        class: M([[
          m(o).is("active", b.currentPage === 1),
          m(o).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === 1,
        "aria-label": m(l)("el.pagination.currentPage", { pager: 1 }),
        tabindex: m(f)
      }, " 1 ", 10, Vw)) : q("v-if", !0),
      s.value ? (T(), P("li", {
        key: 1,
        class: M(m(g)),
        tabindex: m(f),
        "aria-label": m(l)("el.pagination.prevPages", { pager: b.pagerCount - 2 }),
        onMouseenter: $[0] || ($[0] = (E) => y(!0)),
        onMouseleave: $[1] || ($[1] = (E) => i.value = !1),
        onFocus: $[2] || ($[2] = (E) => p(!0)),
        onBlur: $[3] || ($[3] = (E) => c.value = !1)
      }, [
        (i.value || c.value) && !b.disabled ? (T(), V(m(id), { key: 0 })) : (T(), V(m(ur), { key: 1 }))
      ], 42, Kw)) : q("v-if", !0),
      (T(!0), P($e, null, ze(m(h), (E) => (T(), P("li", {
        key: E,
        class: M([[
          m(o).is("active", b.currentPage === E),
          m(o).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === E,
        "aria-label": m(l)("el.pagination.currentPage", { pager: E }),
        tabindex: m(f)
      }, ie(E), 11, Ww))), 128)),
      r.value ? (T(), P("li", {
        key: 2,
        class: M(m(v)),
        tabindex: m(f),
        "aria-label": m(l)("el.pagination.nextPages", { pager: b.pagerCount - 2 }),
        onMouseenter: $[4] || ($[4] = (E) => y()),
        onMouseleave: $[5] || ($[5] = (E) => u.value = !1),
        onFocus: $[6] || ($[6] = (E) => p()),
        onBlur: $[7] || ($[7] = (E) => d.value = !1)
      }, [
        (u.value || d.value) && !b.disabled ? (T(), V(m(vd), { key: 0 })) : (T(), V(m(ur), { key: 1 }))
      ], 42, jw)) : q("v-if", !0),
      b.pageCount > 1 ? (T(), P("li", {
        key: 3,
        class: M([[
          m(o).is("active", b.currentPage === b.pageCount),
          m(o).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === b.pageCount,
        "aria-label": m(l)("el.pagination.currentPage", { pager: b.pageCount }),
        tabindex: m(f)
      }, ie(b.pageCount), 11, Uw)) : q("v-if", !0)
    ], 42, Dw));
  }
});
var Yw = /* @__PURE__ */ we(Gw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const et = (e) => typeof e != "number", Xw = Ee({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => xe(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  currentPage: Number,
  defaultCurrentPage: Number,
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: fe(Array),
    default: () => sn([10, 20, 30, 40, 50, 100])
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
    type: qt,
    default: () => hc
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: qt,
    default: () => Cl
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), Qw = {
  "update:current-page": (e) => xe(e),
  "update:page-size": (e) => xe(e),
  "size-change": (e) => xe(e),
  "current-change": (e) => xe(e),
  "prev-click": (e) => xe(e),
  "next-click": (e) => xe(e)
}, Os = "ElPagination";
var Zw = H({
  name: Os,
  props: Xw,
  emits: Qw,
  setup(e, { emit: t, slots: n }) {
    const { t: o } = Pt(), a = ce("pagination"), l = Ce().vnode.props || {}, s = "onUpdate:currentPage" in l || "onUpdate:current-page" in l || "onCurrentChange" in l, r = "onUpdate:pageSize" in l || "onUpdate:page-size" in l || "onSizeChange" in l, i = S(() => {
      if (et(e.total) && et(e.pageCount) || !et(e.currentPage) && !s)
        return !1;
      if (e.layout.includes("sizes")) {
        if (et(e.pageCount)) {
          if (!et(e.total) && !et(e.pageSize) && !r)
            return !1;
        } else if (!r)
          return !1;
      }
      return !0;
    }), u = k(et(e.defaultPageSize) ? 10 : e.defaultPageSize), c = k(et(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), d = S({
      get() {
        return et(e.pageSize) ? u.value : e.pageSize;
      },
      set(C) {
        et(e.pageSize) && (u.value = C), r && (t("update:page-size", C), t("size-change", C));
      }
    }), h = S(() => {
      let C = 0;
      return et(e.pageCount) ? et(e.total) || (C = Math.max(1, Math.ceil(e.total / d.value))) : C = e.pageCount, C;
    }), g = S({
      get() {
        return et(e.currentPage) ? c.value : e.currentPage;
      },
      set(C) {
        let b = C;
        C < 1 ? b = 1 : C > h.value && (b = h.value), et(e.currentPage) && (c.value = b), s && (t("update:current-page", b), t("current-change", b));
      }
    });
    Y(h, (C) => {
      g.value > C && (g.value = C);
    });
    function v(C) {
      g.value = C;
    }
    function f(C) {
      d.value = C;
      const b = h.value;
      g.value > b && (g.value = b);
    }
    function y() {
      e.disabled || (g.value -= 1, t("prev-click", g.value));
    }
    function p() {
      e.disabled || (g.value += 1, t("next-click", g.value));
    }
    function w(C, b) {
      C && (C.props || (C.props = {}), C.props.class = [C.props.class, b].join(" "));
    }
    return ot(Ou, {
      pageCount: h,
      disabled: S(() => e.disabled),
      currentPage: g,
      changeEvent: v,
      handleSizeChange: f
    }), () => {
      var C, b;
      if (!i.value)
        return je(Os, o("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && h.value <= 1)
        return null;
      const $ = [], E = [], _ = re("div", { class: a.e("rightwrapper") }, E), x = {
        prev: re(J1, {
          disabled: e.disabled,
          currentPage: g.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: y
        }),
        jumper: re(Lw, {
          size: e.small ? "small" : "default"
        }),
        pager: re(Yw, {
          currentPage: g.value,
          pageCount: h.value,
          pagerCount: e.pagerCount,
          onChange: v,
          disabled: e.disabled
        }),
        next: re(lw, {
          disabled: e.disabled,
          currentPage: g.value,
          pageCount: h.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: p
        }),
        sizes: re(xw, {
          pageSize: d.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          teleported: e.teleported,
          size: e.small ? "small" : "default"
        }),
        slot: (b = (C = n == null ? void 0 : n.default) == null ? void 0 : C.call(n)) != null ? b : null,
        total: re(zw, { total: et(e.total) ? 0 : e.total })
      }, L = e.layout.split(",").map((B) => B.trim());
      let D = !1;
      return L.forEach((B) => {
        if (B === "->") {
          D = !0;
          return;
        }
        D ? E.push(x[B]) : $.push(x[B]);
      }), w($[0], a.is("first")), w($[$.length - 1], a.is("last")), D && E.length > 0 && (w(E[0], a.is("first")), w(E[E.length - 1], a.is("last")), $.push(_)), re("div", {
        class: [
          a.b(),
          a.is("background", e.background),
          {
            [a.m("small")]: e.small
          }
        ]
      }, $);
    };
  }
});
const Jw = dt(Zw);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var e2 = /["'&<>]/, t2 = n2;
function n2(e) {
  var t = "" + e, n = e2.exec(t);
  if (!n)
    return t;
  var o, a = "", l = 0, s = 0;
  for (l = n.index; l < t.length; l++) {
    switch (t.charCodeAt(l)) {
      case 34:
        o = "&quot;";
        break;
      case 38:
        o = "&amp;";
        break;
      case 39:
        o = "&#39;";
        break;
      case 60:
        o = "&lt;";
        break;
      case 62:
        o = "&gt;";
        break;
      default:
        continue;
    }
    s !== l && (a += t.substring(s, l)), s = l + 1, a += o;
  }
  return s !== l ? a + t.substring(s, l) : a;
}
const o2 = /* @__PURE__ */ a1(t2), ja = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, a2 = function(e, t, n, o, a) {
  if (!t && !o && (!a || Array.isArray(a) && !a.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const l = o ? null : function(r, i) {
    return a ? (Array.isArray(a) || (a = [a]), a.map((u) => typeof u == "string" ? Xe(r, u) : u(r, i, e))) : (t !== "$key" && nt(r) && "$value" in r && (r = r.$value), [nt(r) ? Xe(r, t) : r]);
  }, s = function(r, i) {
    if (o)
      return o(r.value, i.value);
    for (let u = 0, c = r.key.length; u < c; u++) {
      if (r.key[u] < i.key[u])
        return -1;
      if (r.key[u] > i.key[u])
        return 1;
    }
    return 0;
  };
  return e.map((r, i) => ({
    value: r,
    index: i,
    key: l ? l(r, i) : null
  })).sort((r, i) => {
    let u = s(r, i);
    return u || (u = r.index - i.index), u * +n;
  }).map((r) => r.value);
}, Au = function(e, t) {
  let n = null;
  return e.columns.forEach((o) => {
    o.id === t && (n = o);
  }), n;
}, l2 = function(e, t) {
  let n = null;
  for (let o = 0; o < e.columns.length; o++) {
    const a = e.columns[o];
    if (a.columnKey === t) {
      n = a;
      break;
    }
  }
  return n || bi("ElTable", `No column matching with column-key: ${t}`), n;
}, xs = function(e, t, n) {
  const o = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return o ? Au(e, o[0]) : null;
}, Ve = (e, t) => {
  if (!e)
    throw new Error("Row is required when get row identity");
  if (typeof t == "string") {
    if (!t.includes("."))
      return `${e[t]}`;
    const n = t.split(".");
    let o = e;
    for (const a of n)
      o = o[a];
    return `${o}`;
  } else if (typeof t == "function")
    return t.call(null, e);
}, wn = function(e, t) {
  const n = {};
  return (e || []).forEach((o, a) => {
    n[Ve(o, t)] = { row: o, index: a };
  }), n;
};
function r2(e, t) {
  const n = {};
  let o;
  for (o in e)
    n[o] = e[o];
  for (o in t)
    if ($n(t, o)) {
      const a = t[o];
      typeof a < "u" && (n[o] = a);
    }
  return n;
}
function tr(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function Mu(e) {
  return e === "" || e !== void 0 && (e = tr(e), Number.isNaN(e) && (e = 80)), e;
}
function s2(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function i2(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function ho(e, t, n) {
  let o = !1;
  const a = e.indexOf(t), l = a !== -1, s = (r) => {
    r === "add" ? e.push(t) : e.splice(a, 1), o = !0, En(t.children) && t.children.forEach((i) => {
      ho(e, i, n ?? !l);
    });
  };
  return Dn(n) ? n && !l ? s("add") : !n && l && s("remove") : s(l ? "remove" : "add"), o;
}
function u2(e, t, n = "children", o = "hasChildren") {
  const a = (s) => !(Array.isArray(s) && s.length);
  function l(s, r, i) {
    t(s, r, i), r.forEach((u) => {
      if (u[o]) {
        t(u, null, i + 1);
        return;
      }
      const c = u[n];
      a(c) || l(u, c, i + 1);
    });
  }
  e.forEach((s) => {
    if (s[o]) {
      t(s, null, 0);
      return;
    }
    const r = s[n];
    a(r) || l(s, r, 0);
  });
}
let Zt;
function c2(e, t, n, o, a) {
  a = hi({
    enterable: !0,
    showArrow: !0
  }, a);
  const l = e == null ? void 0 : e.dataset.prefix, s = e == null ? void 0 : e.querySelector(`.${l}-scrollbar__wrap`);
  function r() {
    const y = a.effect === "light", p = document.createElement("div");
    return p.className = [
      `${l}-popper`,
      y ? "is-light" : "is-dark",
      a.popperClass || ""
    ].join(" "), n = o2(n), p.innerHTML = n, p.style.zIndex = String(o()), e == null || e.appendChild(p), p;
  }
  function i() {
    const y = document.createElement("div");
    return y.className = `${l}-popper__arrow`, y;
  }
  function u() {
    c && c.update();
  }
  Zt == null || Zt(), Zt = () => {
    try {
      c && c.destroy(), g && (e == null || e.removeChild(g)), t.removeEventListener("mouseenter", d), t.removeEventListener("mouseleave", h), s == null || s.removeEventListener("scroll", Zt), Zt = void 0;
    } catch {
    }
  };
  let c = null, d = u, h = Zt;
  a.enterable && ({ onOpen: d, onClose: h } = Wi({
    showAfter: a.showAfter,
    hideAfter: a.hideAfter,
    open: u,
    close: Zt
  }));
  const g = r();
  g.onmouseenter = d, g.onmouseleave = h;
  const v = [];
  if (a.offset && v.push({
    name: "offset",
    options: {
      offset: [0, a.offset]
    }
  }), a.showArrow) {
    const y = g.appendChild(i());
    v.push({
      name: "arrow",
      options: {
        element: y,
        padding: 10
      }
    });
  }
  const f = a.popperOptions || {};
  return c = Di(t, g, {
    placement: a.placement || "top",
    strategy: "fixed",
    ...f,
    modifiers: f.modifiers ? v.concat(f.modifiers) : v
  }), t.addEventListener("mouseenter", d), t.addEventListener("mouseleave", h), s == null || s.addEventListener("scroll", Zt), c;
}
function Iu(e) {
  return e.children ? dm(e.children, Iu) : [e];
}
function Ps(e, t) {
  return e + t.colSpan;
}
const Lu = (e, t, n, o) => {
  let a = 0, l = e;
  const s = n.states.columns.value;
  if (o) {
    const i = Iu(o[e]);
    a = s.slice(0, s.indexOf(i[0])).reduce(Ps, 0), l = a + i.reduce(Ps, 0) - 1;
  } else
    a = e;
  let r;
  switch (t) {
    case "left":
      l < n.states.fixedLeafColumnsLength.value && (r = "left");
      break;
    case "right":
      a >= s.length - n.states.rightFixedLeafColumnsLength.value && (r = "right");
      break;
    default:
      l < n.states.fixedLeafColumnsLength.value ? r = "left" : a >= s.length - n.states.rightFixedLeafColumnsLength.value && (r = "right");
  }
  return r ? {
    direction: r,
    start: a,
    after: l
  } : {};
}, nr = (e, t, n, o, a, l = 0) => {
  const s = [], { direction: r, start: i, after: u } = Lu(t, n, o, a);
  if (r) {
    const c = r === "left";
    s.push(`${e}-fixed-column--${r}`), c && u + l === o.states.fixedLeafColumnsLength.value - 1 ? s.push("is-last-column") : !c && i - l === o.states.columns.value.length - o.states.rightFixedLeafColumnsLength.value && s.push("is-first-column");
  }
  return s;
};
function As(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const or = (e, t, n, o) => {
  const {
    direction: a,
    start: l = 0,
    after: s = 0
  } = Lu(e, t, n, o);
  if (!a)
    return;
  const r = {}, i = a === "left", u = n.states.columns.value;
  return i ? r.left = u.slice(0, l).reduce(As, 0) : r.right = u.slice(s + 1).reverse().reduce(As, 0), r;
}, Xn = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function d2(e) {
  const t = Ce(), n = k(!1), o = k([]);
  return {
    updateExpandRows: () => {
      const i = e.data.value || [], u = e.rowKey.value;
      if (n.value)
        o.value = i.slice();
      else if (u) {
        const c = wn(o.value, u);
        o.value = i.reduce((d, h) => {
          const g = Ve(h, u);
          return c[g] && d.push(h), d;
        }, []);
      } else
        o.value = [];
    },
    toggleRowExpansion: (i, u) => {
      ho(o.value, i, u) && t.emit("expand-change", i, o.value.slice());
    },
    setExpandRowKeys: (i) => {
      t.store.assertRowKey();
      const u = e.data.value || [], c = e.rowKey.value, d = wn(u, c);
      o.value = i.reduce((h, g) => {
        const v = d[g];
        return v && h.push(v.row), h;
      }, []);
    },
    isRowExpanded: (i) => {
      const u = e.rowKey.value;
      return u ? !!wn(o.value, u)[Ve(i, u)] : o.value.includes(i);
    },
    states: {
      expandRows: o,
      defaultExpandAll: n
    }
  };
}
function f2(e) {
  const t = Ce(), n = k(null), o = k(null), a = (u) => {
    t.store.assertRowKey(), n.value = u, s(u);
  }, l = () => {
    n.value = null;
  }, s = (u) => {
    const { data: c, rowKey: d } = e;
    let h = null;
    d.value && (h = (m(c) || []).find((g) => Ve(g, d.value) === u)), o.value = h, t.emit("current-change", o.value, null);
  };
  return {
    setCurrentRowKey: a,
    restoreCurrentRowKey: l,
    setCurrentRowByKey: s,
    updateCurrentRow: (u) => {
      const c = o.value;
      if (u && u !== c) {
        o.value = u, t.emit("current-change", o.value, c);
        return;
      }
      !u && c && (o.value = null, t.emit("current-change", null, c));
    },
    updateCurrentRowData: () => {
      const u = e.rowKey.value, c = e.data.value || [], d = o.value;
      if (!c.includes(d) && d) {
        if (u) {
          const h = Ve(d, u);
          s(h);
        } else
          o.value = null;
        o.value === null && t.emit("current-change", null, d);
      } else
        n.value && (s(n.value), l());
    },
    states: {
      _currentRowKey: n,
      currentRow: o
    }
  };
}
function p2(e) {
  const t = k([]), n = k({}), o = k(16), a = k(!1), l = k({}), s = k("hasChildren"), r = k("children"), i = Ce(), u = S(() => {
    if (!e.rowKey.value)
      return {};
    const p = e.data.value || [];
    return d(p);
  }), c = S(() => {
    const p = e.rowKey.value, w = Object.keys(l.value), C = {};
    return w.length && w.forEach((b) => {
      if (l.value[b].length) {
        const $ = { children: [] };
        l.value[b].forEach((E) => {
          const _ = Ve(E, p);
          $.children.push(_), E[s.value] && !C[_] && (C[_] = { children: [] });
        }), C[b] = $;
      }
    }), C;
  }), d = (p) => {
    const w = e.rowKey.value, C = {};
    return u2(p, (b, $, E) => {
      const _ = Ve(b, w);
      Array.isArray($) ? C[_] = {
        children: $.map((x) => Ve(x, w)),
        level: E
      } : a.value && (C[_] = {
        children: [],
        lazy: !0,
        level: E
      });
    }, r.value, s.value), C;
  }, h = (p = !1, w = ((C) => (C = i.store) == null ? void 0 : C.states.defaultExpandAll.value)()) => {
    var C;
    const b = u.value, $ = c.value, E = Object.keys(b), _ = {};
    if (E.length) {
      const x = m(n), L = [], D = (I, Z) => {
        if (p)
          return t.value ? w || t.value.includes(Z) : !!(w || I != null && I.expanded);
        {
          const J = w || t.value && t.value.includes(Z);
          return !!(I != null && I.expanded || J);
        }
      };
      E.forEach((I) => {
        const Z = x[I], J = { ...b[I] };
        if (J.expanded = D(Z, I), J.lazy) {
          const { loaded: oe = !1, loading: ae = !1 } = Z || {};
          J.loaded = !!oe, J.loading = !!ae, L.push(I);
        }
        _[I] = J;
      });
      const B = Object.keys($);
      a.value && B.length && L.length && B.forEach((I) => {
        const Z = x[I], J = $[I].children;
        if (L.includes(I)) {
          if (_[I].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          _[I].children = J;
        } else {
          const { loaded: oe = !1, loading: ae = !1 } = Z || {};
          _[I] = {
            lazy: !0,
            loaded: !!oe,
            loading: !!ae,
            expanded: D(Z, I),
            children: J,
            level: ""
          };
        }
      });
    }
    n.value = _, (C = i.store) == null || C.updateTableScrollY();
  };
  Y(() => t.value, () => {
    h(!0);
  }), Y(() => u.value, () => {
    h();
  }), Y(() => c.value, () => {
    h();
  });
  const g = (p) => {
    t.value = p, h();
  }, v = (p, w) => {
    i.store.assertRowKey();
    const C = e.rowKey.value, b = Ve(p, C), $ = b && n.value[b];
    if (b && $ && "expanded" in $) {
      const E = $.expanded;
      w = typeof w > "u" ? !$.expanded : w, n.value[b].expanded = w, E !== w && i.emit("expand-change", p, w), i.store.updateTableScrollY();
    }
  }, f = (p) => {
    i.store.assertRowKey();
    const w = e.rowKey.value, C = Ve(p, w), b = n.value[C];
    a.value && b && "loaded" in b && !b.loaded ? y(p, C, b) : v(p, void 0);
  }, y = (p, w, C) => {
    const { load: b } = i.props;
    b && !n.value[w].loaded && (n.value[w].loading = !0, b(p, C, ($) => {
      if (!Array.isArray($))
        throw new TypeError("[ElTable] data must be an array");
      n.value[w].loading = !1, n.value[w].loaded = !0, n.value[w].expanded = !0, $.length && (l.value[w] = $), i.emit("expand-change", p, !0);
    }));
  };
  return {
    loadData: y,
    loadOrToggle: f,
    toggleTreeExpansion: v,
    updateTreeExpandKeys: g,
    updateTreeData: h,
    normalize: d,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: o,
      lazy: a,
      lazyTreeNodeMap: l,
      lazyColumnIdentifier: s,
      childrenColumnName: r
    }
  };
}
const v2 = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : a2(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, Yo = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children && n.children.length > 0 ? t.push.apply(t, Yo(n.children)) : t.push(n);
  }), t;
};
function h2() {
  var e;
  const t = Ce(), { size: n } = Zn((e = t.proxy) == null ? void 0 : e.$props), o = k(null), a = k([]), l = k([]), s = k(!1), r = k([]), i = k([]), u = k([]), c = k([]), d = k([]), h = k([]), g = k([]), v = k([]), f = [], y = k(0), p = k(0), w = k(0), C = k(!1), b = k([]), $ = k(!1), E = k(!1), _ = k(null), x = k({}), L = k(null), D = k(null), B = k(null), I = k(null), Z = k(null);
  Y(a, () => t.state && j(!1), {
    deep: !0
  });
  const J = () => {
    if (!o.value)
      throw new Error("[ElTable] prop row-key is required");
  }, oe = (X) => {
    var ee;
    (ee = X.children) == null || ee.forEach((ve) => {
      ve.fixed = X.fixed, oe(ve);
    });
  }, ae = () => {
    r.value.forEach((ge) => {
      oe(ge);
    }), c.value = r.value.filter((ge) => ge.fixed === !0 || ge.fixed === "left"), d.value = r.value.filter((ge) => ge.fixed === "right"), c.value.length > 0 && r.value[0] && r.value[0].type === "selection" && !r.value[0].fixed && (r.value[0].fixed = !0, c.value.unshift(r.value[0]));
    const X = r.value.filter((ge) => !ge.fixed);
    i.value = [].concat(c.value).concat(X).concat(d.value);
    const ee = Yo(X), ve = Yo(c.value), de = Yo(d.value);
    y.value = ee.length, p.value = ve.length, w.value = de.length, u.value = [].concat(ve).concat(ee).concat(de), s.value = c.value.length > 0 || d.value.length > 0;
  }, j = (X, ee = !1) => {
    X && ae(), ee ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, ne = (X) => b.value.includes(X), A = () => {
    C.value = !1, b.value.length && (b.value = [], t.emit("selection-change", []));
  }, U = () => {
    let X;
    if (o.value) {
      X = [];
      const ee = wn(b.value, o.value), ve = wn(a.value, o.value);
      for (const de in ee)
        $n(ee, de) && !ve[de] && X.push(ee[de].row);
    } else
      X = b.value.filter((ee) => !a.value.includes(ee));
    if (X.length) {
      const ee = b.value.filter((ve) => !X.includes(ve));
      b.value = ee, t.emit("selection-change", ee.slice());
    }
  }, le = () => (b.value || []).slice(), ue = (X, ee = void 0, ve = !0) => {
    if (ho(b.value, X, ee)) {
      const ge = (b.value || []).slice();
      ve && t.emit("select", ge, X), t.emit("selection-change", ge);
    }
  }, me = () => {
    var X, ee;
    const ve = E.value ? !C.value : !(C.value || b.value.length);
    C.value = ve;
    let de = !1, ge = 0;
    const Ne = (ee = (X = t == null ? void 0 : t.store) == null ? void 0 : X.states) == null ? void 0 : ee.rowKey.value;
    a.value.forEach((Ge, St) => {
      const lt = St + ge;
      _.value ? _.value.call(null, Ge, lt) && ho(b.value, Ge, ve) && (de = !0) : ho(b.value, Ge, ve) && (de = !0), ge += Te(Ve(Ge, Ne));
    }), de && t.emit("selection-change", b.value ? b.value.slice() : []), t.emit("select-all", b.value);
  }, be = () => {
    const X = wn(b.value, o.value);
    a.value.forEach((ee) => {
      const ve = Ve(ee, o.value), de = X[ve];
      de && (b.value[de.index] = ee);
    });
  }, _e = () => {
    var X, ee, ve;
    if (((X = a.value) == null ? void 0 : X.length) === 0) {
      C.value = !1;
      return;
    }
    let de;
    o.value && (de = wn(b.value, o.value));
    const ge = function(lt) {
      return de ? !!de[Ve(lt, o.value)] : b.value.includes(lt);
    };
    let Ne = !0, Ge = 0, St = 0;
    for (let lt = 0, ao = (a.value || []).length; lt < ao; lt++) {
      const An = (ve = (ee = t == null ? void 0 : t.store) == null ? void 0 : ee.states) == null ? void 0 : ve.rowKey.value, lo = lt + St, vn = a.value[lt], O = _.value && _.value.call(null, vn, lo);
      if (ge(vn))
        Ge++;
      else if (!_.value || O) {
        Ne = !1;
        break;
      }
      St += Te(Ve(vn, An));
    }
    Ge === 0 && (Ne = !1), C.value = Ne;
  }, Te = (X) => {
    var ee;
    if (!t || !t.store)
      return 0;
    const { treeData: ve } = t.store.states;
    let de = 0;
    const ge = (ee = ve.value[X]) == null ? void 0 : ee.children;
    return ge && (de += ge.length, ge.forEach((Ne) => {
      de += Te(Ne);
    })), de;
  }, Le = (X, ee) => {
    Array.isArray(X) || (X = [X]);
    const ve = {};
    return X.forEach((de) => {
      x.value[de.id] = ee, ve[de.columnKey || de.id] = ee;
    }), ve;
  }, Se = (X, ee, ve) => {
    D.value && D.value !== X && (D.value.order = null), D.value = X, B.value = ee, I.value = ve;
  }, Re = () => {
    let X = m(l);
    Object.keys(x.value).forEach((ee) => {
      const ve = x.value[ee];
      if (!ve || ve.length === 0)
        return;
      const de = Au({
        columns: u.value
      }, ee);
      de && de.filterMethod && (X = X.filter((ge) => ve.some((Ne) => de.filterMethod.call(null, Ne, ge, de))));
    }), L.value = X;
  }, Ae = () => {
    a.value = v2(L.value, {
      sortingColumn: D.value,
      sortProp: B.value,
      sortOrder: I.value
    });
  }, qe = (X = void 0) => {
    X && X.filter || Re(), Ae();
  }, At = (X) => {
    const { tableHeaderRef: ee } = t.refs;
    if (!ee)
      return;
    const ve = Object.assign({}, ee.filterPanels), de = Object.keys(ve);
    if (de.length)
      if (typeof X == "string" && (X = [X]), Array.isArray(X)) {
        const ge = X.map((Ne) => l2({
          columns: u.value
        }, Ne));
        de.forEach((Ne) => {
          const Ge = ge.find((St) => St.id === Ne);
          Ge && (Ge.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: ge,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        de.forEach((ge) => {
          const Ne = u.value.find((Ge) => Ge.id === ge);
          Ne && (Ne.filteredValue = []);
        }), x.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, at = () => {
    D.value && (Se(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: Mt,
    toggleRowExpansion: yt,
    updateExpandRows: ft,
    states: Dt,
    isRowExpanded: pt
  } = d2({
    data: a,
    rowKey: o
  }), {
    updateTreeExpandKeys: It,
    toggleTreeExpansion: Ze,
    updateTreeData: wt,
    loadOrToggle: vt,
    states: Vt
  } = p2({
    data: a,
    rowKey: o
  }), {
    updateCurrentRowData: Ct,
    updateCurrentRow: z,
    setCurrentRowKey: te,
    states: ke
  } = f2({
    data: a,
    rowKey: o
  });
  return {
    assertRowKey: J,
    updateColumns: ae,
    scheduleLayout: j,
    isSelected: ne,
    clearSelection: A,
    cleanSelection: U,
    getSelectionRows: le,
    toggleRowSelection: ue,
    _toggleAllSelection: me,
    toggleAllSelection: null,
    updateSelectionByRowKey: be,
    updateAllSelected: _e,
    updateFilters: Le,
    updateCurrentRow: z,
    updateSort: Se,
    execFilter: Re,
    execSort: Ae,
    execQuery: qe,
    clearFilter: At,
    clearSort: at,
    toggleRowExpansion: yt,
    setExpandRowKeysAdapter: (X) => {
      Mt(X), It(X);
    },
    setCurrentRowKey: te,
    toggleRowExpansionAdapter: (X, ee) => {
      u.value.some(({ type: de }) => de === "expand") ? yt(X, ee) : Ze(X, ee);
    },
    isRowExpanded: pt,
    updateExpandRows: ft,
    updateCurrentRowData: Ct,
    loadOrToggle: vt,
    updateTreeData: wt,
    states: {
      tableSize: n,
      rowKey: o,
      data: a,
      _data: l,
      isComplex: s,
      _columns: r,
      originColumns: i,
      columns: u,
      fixedColumns: c,
      rightFixedColumns: d,
      leafColumns: h,
      fixedLeafColumns: g,
      rightFixedLeafColumns: v,
      updateOrderFns: f,
      leafColumnsLength: y,
      fixedLeafColumnsLength: p,
      rightFixedLeafColumnsLength: w,
      isAllSelected: C,
      selection: b,
      reserveSelection: $,
      selectOnIndeterminate: E,
      selectable: _,
      filters: x,
      filteredData: L,
      sortingColumn: D,
      sortProp: B,
      sortOrder: I,
      hoverRow: Z,
      ...Dt,
      ...Vt,
      ...ke
    }
  };
}
function hl(e, t) {
  return e.map((n) => {
    var o;
    return n.id === t.id ? t : ((o = n.children) != null && o.length && (n.children = hl(n.children, t)), n);
  });
}
function gl(e) {
  e.forEach((t) => {
    var n, o;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (o = t.children) != null && o.length && gl(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function g2() {
  const e = Ce(), t = h2();
  return {
    ns: ce("table"),
    ...t,
    mutations: {
      setData(s, r) {
        const i = m(s._data) !== r;
        s.data.value = r, s._data.value = r, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), m(s.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : i ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(s, r, i, u) {
        const c = m(s._columns);
        let d = [];
        i ? (i && !i.children && (i.children = []), i.children.push(r), d = hl(c, i)) : (c.push(r), d = c), gl(d), s._columns.value = d, s.updateOrderFns.push(u), r.type === "selection" && (s.selectable.value = r.selectable, s.reserveSelection.value = r.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(s, r) {
        var i;
        ((i = r.getColumnIndex) == null ? void 0 : i.call(r)) !== r.no && (gl(s._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(s, r, i, u) {
        const c = m(s._columns) || [];
        if (i)
          i.children.splice(i.children.findIndex((h) => h.id === r.id), 1), he(() => {
            var h;
            ((h = i.children) == null ? void 0 : h.length) === 0 && delete i.children;
          }), s._columns.value = hl(c, i);
        else {
          const h = c.indexOf(r);
          h > -1 && (c.splice(h, 1), s._columns.value = c);
        }
        const d = s.updateOrderFns.indexOf(u);
        d > -1 && s.updateOrderFns.splice(d, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      sort(s, r) {
        const { prop: i, order: u, init: c } = r;
        if (i) {
          const d = m(s.columns).find((h) => h.property === i);
          d && (d.order = u, e.store.updateSort(d, i, u), e.store.commit("changeSortCondition", { init: c }));
        }
      },
      changeSortCondition(s, r) {
        const { sortingColumn: i, sortProp: u, sortOrder: c } = s, d = m(i), h = m(u), g = m(c);
        g === null && (s.sortingColumn.value = null, s.sortProp.value = null);
        const v = { filter: !0 };
        e.store.execQuery(v), (!r || !(r.silent || r.init)) && e.emit("sort-change", {
          column: d,
          prop: h,
          order: g
        }), e.store.updateTableScrollY();
      },
      filterChange(s, r) {
        const { column: i, values: u, silent: c } = r, d = e.store.updateFilters(i, u);
        e.store.execQuery(), c || e.emit("filter-change", d), e.store.updateTableScrollY();
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
      he(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const go = {
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
function m2(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = g2();
  return n.toggleAllSelection = zn(n._toggleAllSelection, 10), Object.keys(go).forEach((o) => {
    Nu(Ru(t, o), o, n);
  }), b2(n, t), n;
}
function b2(e, t) {
  Object.keys(go).forEach((n) => {
    Y(() => Ru(t, n), (o) => {
      Nu(o, n, e);
    });
  });
}
function Nu(e, t, n) {
  let o = e, a = go[t];
  typeof go[t] == "object" && (a = a.key, o = o || go[t].default), n.states[a].value = o;
}
function Ru(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let o = e;
    return n.forEach((a) => {
      o = o[a];
    }), o;
  } else
    return e[t];
}
class y2 {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = k(null), this.scrollX = k(!1), this.scrollY = k(!1), this.bodyWidth = k(null), this.fixedWidth = k(null), this.rightFixedWidth = k(null), this.gutterWidth = 0;
    for (const n in t)
      $n(t, n) && (Rn(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
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
      let o = !0;
      const a = this.scrollY.value;
      return o = n.wrapRef.scrollHeight > n.wrapRef.clientHeight, this.scrollY.value = o, a !== o;
    }
    return !1;
  }
  setHeight(t, n = "height") {
    if (!Ie)
      return;
    const o = this.table.vnode.el;
    if (t = s2(t), this.height.value = Number(t), !o && (t || t === 0))
      return he(() => this.setHeight(t, n));
    typeof t == "number" ? (o.style[n] = `${t}px`, this.updateElsHeight()) : typeof t == "string" && (o.style[n] = t, this.updateElsHeight());
  }
  setMaxHeight(t) {
    this.setHeight(t, "max-height");
  }
  getFlattenColumns() {
    const t = [];
    return this.table.store.states.columns.value.forEach((o) => {
      o.isColumnGroup ? t.push.apply(t, o.columns) : t.push(o);
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
    if (!Ie)
      return;
    const t = this.fit, n = this.table.vnode.el.clientWidth;
    let o = 0;
    const a = this.getFlattenColumns(), l = a.filter((i) => typeof i.width != "number");
    if (a.forEach((i) => {
      typeof i.width == "number" && i.realWidth && (i.realWidth = null);
    }), l.length > 0 && t) {
      if (a.forEach((i) => {
        o += Number(i.width || i.minWidth || 80);
      }), o <= n) {
        this.scrollX.value = !1;
        const i = n - o;
        if (l.length === 1)
          l[0].realWidth = Number(l[0].minWidth || 80) + i;
        else {
          const u = l.reduce((h, g) => h + Number(g.minWidth || 80), 0), c = i / u;
          let d = 0;
          l.forEach((h, g) => {
            if (g === 0)
              return;
            const v = Math.floor(Number(h.minWidth || 80) * c);
            d += v, h.realWidth = Number(h.minWidth || 80) + v;
          }), l[0].realWidth = Number(l[0].minWidth || 80) + i - d;
        }
      } else
        this.scrollX.value = !0, l.forEach((i) => {
          i.realWidth = Number(i.minWidth);
        });
      this.bodyWidth.value = Math.max(o, n), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else
      a.forEach((i) => {
        !i.width && !i.minWidth ? i.realWidth = 80 : i.realWidth = Number(i.width || i.minWidth), o += i.realWidth;
      }), this.scrollX.value = o > n, this.bodyWidth.value = o;
    const s = this.store.states.fixedColumns.value;
    if (s.length > 0) {
      let i = 0;
      s.forEach((u) => {
        i += Number(u.realWidth || u.width);
      }), this.fixedWidth.value = i;
    }
    const r = this.store.states.rightFixedColumns.value;
    if (r.length > 0) {
      let i = 0;
      r.forEach((u) => {
        i += Number(u.realWidth || u.width);
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
    this.observers.forEach((o) => {
      var a, l;
      switch (t) {
        case "columns":
          (a = o.state) == null || a.onColumnsChange(this);
          break;
        case "scrollable":
          (l = o.state) == null || l.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${t}.`);
      }
    });
  }
}
const { CheckboxGroup: w2 } = Yn, C2 = H({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: Yn,
    ElCheckboxGroup: w2,
    ElScrollbar: Pa,
    ElTooltip: iu,
    ElIcon: De,
    ArrowDown: Ds,
    ArrowUp: Tc
  },
  directives: { ClickOutside: pu },
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
    const t = Ce(), { t: n } = Pt(), o = ce("table-filter"), a = t == null ? void 0 : t.parent;
    a.filterPanels.value[e.column.id] || (a.filterPanels.value[e.column.id] = t);
    const l = k(!1), s = k(null), r = S(() => e.column && e.column.filters), i = S({
      get: () => {
        var b;
        return (((b = e.column) == null ? void 0 : b.filteredValue) || [])[0];
      },
      set: (b) => {
        u.value && (typeof b < "u" && b !== null ? u.value.splice(0, 1, b) : u.value.splice(0, 1));
      }
    }), u = S({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(b) {
        e.column && e.upDataColumn("filteredValue", b);
      }
    }), c = S(() => e.column ? e.column.filterMultiple : !0), d = (b) => b.value === i.value, h = () => {
      l.value = !1;
    }, g = (b) => {
      b.stopPropagation(), l.value = !l.value;
    }, v = () => {
      l.value = !1;
    }, f = () => {
      w(u.value), h();
    }, y = () => {
      u.value = [], w(u.value), h();
    }, p = (b) => {
      i.value = b, w(typeof b < "u" && b !== null ? u.value : []), h();
    }, w = (b) => {
      e.store.commit("filterChange", {
        column: e.column,
        values: b
      }), e.store.updateAllSelected();
    };
    Y(l, (b) => {
      e.column && e.upDataColumn("filterOpened", b);
    }, {
      immediate: !0
    });
    const C = S(() => {
      var b, $;
      return ($ = (b = s.value) == null ? void 0 : b.popperRef) == null ? void 0 : $.contentRef;
    });
    return {
      tooltipVisible: l,
      multiple: c,
      filteredValue: u,
      filterValue: i,
      filters: r,
      handleConfirm: f,
      handleReset: y,
      handleSelect: p,
      isActive: d,
      t: n,
      ns: o,
      showFilterPanel: g,
      hideFilterPanel: v,
      popperPaneRef: C,
      tooltip: s
    };
  }
}), S2 = { key: 0 }, _2 = ["disabled"], $2 = ["label", "onClick"];
function E2(e, t, n, o, a, l) {
  const s = G("el-checkbox"), r = G("el-checkbox-group"), i = G("el-scrollbar"), u = G("arrow-up"), c = G("arrow-down"), d = G("el-icon"), h = G("el-tooltip"), g = yl("click-outside");
  return T(), V(h, {
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
    content: F(() => [
      e.multiple ? (T(), P("div", S2, [
        R("div", {
          class: M(e.ns.e("content"))
        }, [
          Q(i, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: F(() => [
              Q(r, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (v) => e.filteredValue = v),
                class: M(e.ns.e("checkbox-group"))
              }, {
                default: F(() => [
                  (T(!0), P($e, null, ze(e.filters, (v) => (T(), V(s, {
                    key: v.value,
                    label: v.value
                  }, {
                    default: F(() => [
                      Ke(ie(v.text), 1)
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
        R("div", {
          class: M(e.ns.e("bottom"))
        }, [
          R("button", {
            class: M({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...v) => e.handleConfirm && e.handleConfirm(...v))
          }, ie(e.t("el.table.confirmFilter")), 11, _2),
          R("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...v) => e.handleReset && e.handleReset(...v))
          }, ie(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (T(), P("ul", {
        key: 1,
        class: M(e.ns.e("list"))
      }, [
        R("li", {
          class: M([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (v) => e.handleSelect(null))
        }, ie(e.t("el.table.clearFilter")), 3),
        (T(!0), P($e, null, ze(e.filters, (v) => (T(), P("li", {
          key: v.value,
          class: M([e.ns.e("list-item"), e.ns.is("active", e.isActive(v))]),
          label: v.value,
          onClick: (f) => e.handleSelect(v.value)
        }, ie(v.text), 11, $2))), 128))
      ], 2))
    ]),
    default: F(() => [
      We((T(), P("span", {
        class: M([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...v) => e.showFilterPanel && e.showFilterPanel(...v))
      }, [
        Q(d, null, {
          default: F(() => [
            e.column.filterOpened ? (T(), V(u, { key: 0 })) : (T(), V(c, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [g, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var T2 = /* @__PURE__ */ we(C2, [["render", E2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function Fu(e) {
  const t = Ce();
  ml(() => {
    n.value.addObserver(t);
  }), Me(() => {
    o(n.value), a(n.value);
  }), bl(() => {
    o(n.value), a(n.value);
  }), To(() => {
    n.value.removeObserver(t);
  });
  const n = S(() => {
    const l = e.layout;
    if (!l)
      throw new Error("Can not find table layout.");
    return l;
  }), o = (l) => {
    var s;
    const r = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("colgroup > col")) || [];
    if (!r.length)
      return;
    const i = l.getFlattenColumns(), u = {};
    i.forEach((c) => {
      u[c.id] = c;
    });
    for (let c = 0, d = r.length; c < d; c++) {
      const h = r[c], g = h.getAttribute("name"), v = u[g];
      v && h.setAttribute("width", v.realWidth || v.width);
    }
  }, a = (l) => {
    var s, r;
    const i = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let c = 0, d = i.length; c < d; c++)
      i[c].setAttribute("width", l.scrollY.value ? l.gutterWidth : "0");
    const u = ((r = e.vnode.el) == null ? void 0 : r.querySelectorAll("th.gutter")) || [];
    for (let c = 0, d = u.length; c < d; c++) {
      const h = u[c];
      h.style.width = l.scrollY.value ? `${l.gutterWidth}px` : "0", h.style.display = l.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: n.value,
    onColumnsChange: o,
    onScrollableChange: a
  };
}
const Yt = Symbol("ElTable");
function k2(e, t) {
  const n = Ce(), o = pe(Yt), a = (f) => {
    f.stopPropagation();
  }, l = (f, y) => {
    !y.filters && y.sortable ? v(f, y, !1) : y.filterable && !y.sortable && a(f), o == null || o.emit("header-click", y, f);
  }, s = (f, y) => {
    o == null || o.emit("header-contextmenu", y, f);
  }, r = k(null), i = k(!1), u = k({}), c = (f, y) => {
    if (Ie && !(y.children && y.children.length > 0) && r.value && e.border) {
      i.value = !0;
      const p = o;
      t("set-drag-visible", !0);
      const C = (p == null ? void 0 : p.vnode.el).getBoundingClientRect().left, b = n.vnode.el.querySelector(`th.${y.id}`), $ = b.getBoundingClientRect(), E = $.left - C + 30;
      wi(b, "noclick"), u.value = {
        startMouseLeft: f.clientX,
        startLeft: $.right - C,
        startColumnLeft: $.left - C,
        tableLeft: C
      };
      const _ = p == null ? void 0 : p.refs.resizeProxy;
      _.style.left = `${u.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const x = (D) => {
        const B = D.clientX - u.value.startMouseLeft, I = u.value.startLeft + B;
        _.style.left = `${Math.max(E, I)}px`;
      }, L = () => {
        if (i.value) {
          const { startColumnLeft: D, startLeft: B } = u.value, Z = Number.parseInt(_.style.left, 10) - D;
          y.width = y.realWidth = Z, p == null || p.emit("header-dragend", y.width, B - D, y, f), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", i.value = !1, r.value = null, u.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", L), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          el(b, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", x), document.addEventListener("mouseup", L);
    }
  }, d = (f, y) => {
    if (y.children && y.children.length > 0)
      return;
    const p = f.target;
    if (!Vn(p))
      return;
    const w = p == null ? void 0 : p.closest("th");
    if (!(!y || !y.resizable) && !i.value && e.border) {
      const C = w.getBoundingClientRect(), b = document.body.style;
      C.width > 12 && C.right - f.pageX < 8 ? (b.cursor = "col-resize", Wo(w, "is-sortable") && (w.style.cursor = "col-resize"), r.value = y) : i.value || (b.cursor = "", Wo(w, "is-sortable") && (w.style.cursor = "pointer"), r.value = null);
    }
  }, h = () => {
    Ie && (document.body.style.cursor = "");
  }, g = ({ order: f, sortOrders: y }) => {
    if (f === "")
      return y[0];
    const p = y.indexOf(f || null);
    return y[p > y.length - 2 ? 0 : p + 1];
  }, v = (f, y, p) => {
    var w;
    f.stopPropagation();
    const C = y.order === p ? null : p || g(y), b = (w = f.target) == null ? void 0 : w.closest("th");
    if (b && Wo(b, "noclick")) {
      el(b, "noclick");
      return;
    }
    if (!y.sortable)
      return;
    const $ = e.store.states;
    let E = $.sortProp.value, _;
    const x = $.sortingColumn.value;
    (x !== y || x === y && x.order === null) && (x && (x.order = null), $.sortingColumn.value = y, E = y.property), C ? _ = y.order = C : _ = y.order = null, $.sortProp.value = E, $.sortOrder.value = _, o == null || o.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick: l,
    handleHeaderContextMenu: s,
    handleMouseDown: c,
    handleMouseMove: d,
    handleMouseOut: h,
    handleSortClick: v,
    handleFilterClick: a
  };
}
function O2(e) {
  const t = pe(Yt), n = ce("table");
  return {
    getHeaderRowStyle: (r) => {
      const i = t == null ? void 0 : t.props.headerRowStyle;
      return typeof i == "function" ? i.call(null, { rowIndex: r }) : i;
    },
    getHeaderRowClass: (r) => {
      const i = [], u = t == null ? void 0 : t.props.headerRowClassName;
      return typeof u == "string" ? i.push(u) : typeof u == "function" && i.push(u.call(null, { rowIndex: r })), i.join(" ");
    },
    getHeaderCellStyle: (r, i, u, c) => {
      var d;
      let h = (d = t == null ? void 0 : t.props.headerCellStyle) != null ? d : {};
      typeof h == "function" && (h = h.call(null, {
        rowIndex: r,
        columnIndex: i,
        row: u,
        column: c
      }));
      const g = or(i, c.fixed, e.store, u);
      return Xn(g, "left"), Xn(g, "right"), Object.assign({}, h, g);
    },
    getHeaderCellClass: (r, i, u, c) => {
      const d = nr(n.b(), i, c.fixed, e.store, u), h = [
        c.id,
        c.order,
        c.headerAlign,
        c.className,
        c.labelClassName,
        ...d
      ];
      c.children || h.push("is-leaf"), c.sortable && h.push("is-sortable");
      const g = t == null ? void 0 : t.props.headerCellClassName;
      return typeof g == "string" ? h.push(g) : typeof g == "function" && h.push(g.call(null, {
        rowIndex: r,
        columnIndex: i,
        row: u,
        column: c
      })), h.push(n.e("cell")), h.filter((v) => !!v).join(" ");
    }
  };
}
const Bu = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, Bu(n.children))) : t.push(n);
  }), t;
}, x2 = (e) => {
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
  const o = [];
  for (let l = 0; l < t; l++)
    o.push([]);
  return Bu(e).forEach((l) => {
    l.children ? (l.rowSpan = 1, l.children.forEach((s) => s.isSubColumn = !0)) : l.rowSpan = t - l.level + 1, o[l.level - 1].push(l);
  }), o;
};
function P2(e) {
  const t = pe(Yt), n = S(() => x2(e.store.states.originColumns.value));
  return {
    isGroup: S(() => {
      const l = n.value.length > 1;
      return l && t && (t.state.isGroup.value = !0), l;
    }),
    toggleAllSelection: (l) => {
      l.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
var A2 = H({
  name: "ElTableHeader",
  components: {
    ElCheckbox: Yn
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
    const n = Ce(), o = pe(Yt), a = ce("table"), l = k({}), { onColumnsChange: s, onScrollableChange: r } = Fu(o);
    Me(async () => {
      await he(), await he();
      const { prop: E, order: _ } = e.defaultSort;
      o == null || o.store.commit("sort", { prop: E, order: _, init: !0 });
    });
    const {
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: c,
      handleMouseMove: d,
      handleMouseOut: h,
      handleSortClick: g,
      handleFilterClick: v
    } = k2(e, t), {
      getHeaderRowStyle: f,
      getHeaderRowClass: y,
      getHeaderCellStyle: p,
      getHeaderCellClass: w
    } = O2(e), { isGroup: C, toggleAllSelection: b, columnRows: $ } = P2(e);
    return n.state = {
      onColumnsChange: s,
      onScrollableChange: r
    }, n.filterPanels = l, {
      ns: a,
      filterPanels: l,
      onColumnsChange: s,
      onScrollableChange: r,
      columnRows: $,
      getHeaderRowClass: y,
      getHeaderRowStyle: f,
      getHeaderCellClass: w,
      getHeaderCellStyle: p,
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: c,
      handleMouseMove: d,
      handleMouseOut: h,
      handleSortClick: g,
      handleFilterClick: v,
      isGroup: C,
      toggleAllSelection: b
    };
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: n,
      getHeaderCellStyle: o,
      getHeaderCellClass: a,
      getHeaderRowClass: l,
      getHeaderRowStyle: s,
      handleHeaderClick: r,
      handleHeaderContextMenu: i,
      handleMouseDown: u,
      handleMouseMove: c,
      handleSortClick: d,
      handleMouseOut: h,
      store: g,
      $parent: v
    } = this;
    let f = 1;
    return re("thead", {
      class: { [e.is("group")]: t }
    }, n.map((y, p) => re("tr", {
      class: l(p),
      key: p,
      style: s(p)
    }, y.map((w, C) => (w.rowSpan > f && (f = w.rowSpan), re("th", {
      class: a(p, C, y, w),
      colspan: w.colSpan,
      key: `${w.id}-thead`,
      rowspan: w.rowSpan,
      style: o(p, C, y, w),
      onClick: (b) => r(b, w),
      onContextmenu: (b) => i(b, w),
      onMousedown: (b) => u(b, w),
      onMousemove: (b) => c(b, w),
      onMouseout: h
    }, [
      re("div", {
        class: [
          "cell",
          w.filteredValue && w.filteredValue.length > 0 ? "highlight" : ""
        ]
      }, [
        w.renderHeader ? w.renderHeader({
          column: w,
          $index: C,
          store: g,
          _self: v
        }) : w.label,
        w.sortable && re("span", {
          onClick: (b) => d(b, w),
          class: "caret-wrapper"
        }, [
          re("i", {
            onClick: (b) => d(b, w, "ascending"),
            class: "sort-caret ascending"
          }),
          re("i", {
            onClick: (b) => d(b, w, "descending"),
            class: "sort-caret descending"
          })
        ]),
        w.filterable && re(T2, {
          store: g,
          placement: w.filterPlacement || "bottom-start",
          column: w,
          upDataColumn: (b, $) => {
            w[b] = $;
          }
        })
      ])
    ]))))));
  }
});
function M2(e) {
  const t = pe(Yt), n = k(""), o = k(re("div")), { nextZIndex: a } = qi(), l = (v, f, y) => {
    var p;
    const w = t, C = ja(v);
    let b;
    const $ = (p = w == null ? void 0 : w.vnode.el) == null ? void 0 : p.dataset.prefix;
    C && (b = xs({
      columns: e.store.states.columns.value
    }, C, $), b && (w == null || w.emit(`cell-${y}`, f, b, C, v))), w == null || w.emit(`row-${y}`, f, b, v);
  }, s = (v, f) => {
    l(v, f, "dblclick");
  }, r = (v, f) => {
    e.store.commit("setCurrentRow", f), l(v, f, "click");
  }, i = (v, f) => {
    l(v, f, "contextmenu");
  }, u = zn((v) => {
    e.store.commit("setHoverRow", v);
  }, 30), c = zn(() => {
    e.store.commit("setHoverRow", null);
  }, 30), d = (v) => {
    const f = window.getComputedStyle(v, null), y = Number.parseInt(f.paddingLeft, 10) || 0, p = Number.parseInt(f.paddingRight, 10) || 0, w = Number.parseInt(f.paddingTop, 10) || 0, C = Number.parseInt(f.paddingBottom, 10) || 0;
    return {
      left: y,
      right: p,
      top: w,
      bottom: C
    };
  };
  return {
    handleDoubleClick: s,
    handleClick: r,
    handleContextMenu: i,
    handleMouseEnter: u,
    handleMouseLeave: c,
    handleCellMouseEnter: (v, f, y) => {
      var p;
      const w = t, C = ja(v), b = (p = w == null ? void 0 : w.vnode.el) == null ? void 0 : p.dataset.prefix;
      if (C) {
        const j = xs({
          columns: e.store.states.columns.value
        }, C, b), ne = w.hoverState = { cell: C, column: j, row: f };
        w == null || w.emit("cell-mouse-enter", ne.row, ne.column, ne.cell, v);
      }
      if (!y)
        return;
      const $ = v.target.querySelector(".cell");
      if (!(Wo($, `${b}-tooltip`) && $.childNodes.length))
        return;
      const E = document.createRange();
      E.setStart($, 0), E.setEnd($, $.childNodes.length);
      let _ = E.getBoundingClientRect().width, x = E.getBoundingClientRect().height;
      _ - Math.floor(_) < 1e-3 && (_ = Math.floor(_)), x - Math.floor(x) < 1e-3 && (x = Math.floor(x));
      const { top: B, left: I, right: Z, bottom: J } = d($), oe = I + Z, ae = B + J;
      (_ + oe > $.offsetWidth || x + ae > $.offsetHeight || $.scrollWidth > $.offsetWidth) && c2(t == null ? void 0 : t.refs.tableWrapper, C, C.innerText || C.textContent, a, y);
    },
    handleCellMouseLeave: (v) => {
      if (!ja(v))
        return;
      const y = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", y == null ? void 0 : y.row, y == null ? void 0 : y.column, y == null ? void 0 : y.cell, v);
    },
    tooltipContent: n,
    tooltipTrigger: o
  };
}
function I2(e) {
  const t = pe(Yt), n = ce("table");
  return {
    getRowStyle: (u, c) => {
      const d = t == null ? void 0 : t.props.rowStyle;
      return typeof d == "function" ? d.call(null, {
        row: u,
        rowIndex: c
      }) : d || null;
    },
    getRowClass: (u, c) => {
      const d = [n.e("row")];
      t != null && t.props.highlightCurrentRow && u === e.store.states.currentRow.value && d.push("current-row"), e.stripe && c % 2 === 1 && d.push(n.em("row", "striped"));
      const h = t == null ? void 0 : t.props.rowClassName;
      return typeof h == "string" ? d.push(h) : typeof h == "function" && d.push(h.call(null, {
        row: u,
        rowIndex: c
      })), d;
    },
    getCellStyle: (u, c, d, h) => {
      const g = t == null ? void 0 : t.props.cellStyle;
      let v = g ?? {};
      typeof g == "function" && (v = g.call(null, {
        rowIndex: u,
        columnIndex: c,
        row: d,
        column: h
      }));
      const f = or(c, e == null ? void 0 : e.fixed, e.store);
      return Xn(f, "left"), Xn(f, "right"), Object.assign({}, v, f);
    },
    getCellClass: (u, c, d, h, g) => {
      const v = nr(n.b(), c, e == null ? void 0 : e.fixed, e.store, void 0, g), f = [h.id, h.align, h.className, ...v], y = t == null ? void 0 : t.props.cellClassName;
      return typeof y == "string" ? f.push(y) : typeof y == "function" && f.push(y.call(null, {
        rowIndex: u,
        columnIndex: c,
        row: d,
        column: h
      })), f.push(n.e("cell")), f.filter((p) => !!p).join(" ");
    },
    getSpan: (u, c, d, h) => {
      let g = 1, v = 1;
      const f = t == null ? void 0 : t.props.spanMethod;
      if (typeof f == "function") {
        const y = f({
          row: u,
          column: c,
          rowIndex: d,
          columnIndex: h
        });
        Array.isArray(y) ? (g = y[0], v = y[1]) : typeof y == "object" && (g = y.rowspan, v = y.colspan);
      }
      return { rowspan: g, colspan: v };
    },
    getColspanRealWidth: (u, c, d) => {
      if (c < 1)
        return u[d].realWidth;
      const h = u.map(({ realWidth: g, width: v }) => g || v).slice(d, d + c);
      return Number(h.reduce((g, v) => Number(g) + Number(v), -1));
    }
  };
}
function L2(e) {
  const t = pe(Yt), n = ce("table"), {
    handleDoubleClick: o,
    handleClick: a,
    handleContextMenu: l,
    handleMouseEnter: s,
    handleMouseLeave: r,
    handleCellMouseEnter: i,
    handleCellMouseLeave: u,
    tooltipContent: c,
    tooltipTrigger: d
  } = M2(e), {
    getRowStyle: h,
    getRowClass: g,
    getCellStyle: v,
    getCellClass: f,
    getSpan: y,
    getColspanRealWidth: p
  } = I2(e), w = S(() => e.store.states.columns.value.findIndex(({ type: _ }) => _ === "default")), C = (_, x) => {
    const L = t.props.rowKey;
    return L ? Ve(_, L) : x;
  }, b = (_, x, L, D = !1) => {
    const { tooltipEffect: B, tooltipOptions: I, store: Z } = e, { indent: J, columns: oe } = Z.states, ae = g(_, x);
    let j = !0;
    return L && (ae.push(n.em("row", `level-${L.level}`)), j = L.display), re("tr", {
      style: [j ? null : {
        display: "none"
      }, h(_, x)],
      class: ae,
      key: C(_, x),
      onDblclick: (A) => o(A, _),
      onClick: (A) => a(A, _),
      onContextmenu: (A) => l(A, _),
      onMouseenter: () => s(x),
      onMouseleave: r
    }, oe.value.map((A, U) => {
      const { rowspan: le, colspan: ue } = y(_, A, x, U);
      if (!le || !ue)
        return null;
      const me = Object.assign({}, A);
      me.realWidth = p(oe.value, ue, U);
      const be = {
        store: e.store,
        _self: e.context || t,
        column: me,
        row: _,
        $index: x,
        cellIndex: U,
        expanded: D
      };
      U === w.value && L && (be.treeNode = {
        indent: L.level * J.value,
        level: L.level
      }, typeof L.expanded == "boolean" && (be.treeNode.expanded = L.expanded, "loading" in L && (be.treeNode.loading = L.loading), "noLazyChildren" in L && (be.treeNode.noLazyChildren = L.noLazyChildren)));
      const _e = `${x},${U}`, Te = me.columnKey || me.rawColumnKey || "", Le = $(U, A, be), Se = A.showOverflowTooltip && hi({
        effect: B
      }, I, A.showOverflowTooltip);
      return re("td", {
        style: v(x, U, _, A),
        class: f(x, U, _, A, ue - 1),
        key: `${Te}${_e}`,
        rowspan: le,
        colspan: ue,
        onMouseenter: (Re) => i(Re, _, Se),
        onMouseleave: u
      }, [Le]);
    }));
  }, $ = (_, x, L) => x.renderCell(L);
  return {
    wrappedRowRender: (_, x) => {
      const L = e.store, { isRowExpanded: D, assertRowKey: B } = L, { treeData: I, lazyTreeNodeMap: Z, childrenColumnName: J, rowKey: oe } = L.states, ae = L.states.columns.value;
      if (ae.some(({ type: ne }) => ne === "expand")) {
        const ne = D(_), A = b(_, x, void 0, ne), U = t.renderExpanded;
        return ne ? U ? [
          [
            A,
            re("tr", {
              key: `expanded-row__${A.key}`
            }, [
              re("td", {
                colspan: ae.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [U({ row: _, $index: x, store: L, expanded: ne })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), A) : [[A]];
      } else if (Object.keys(I.value).length) {
        B();
        const ne = Ve(_, oe.value);
        let A = I.value[ne], U = null;
        A && (U = {
          expanded: A.expanded,
          level: A.level,
          display: !0
        }, typeof A.lazy == "boolean" && (typeof A.loaded == "boolean" && A.loaded && (U.noLazyChildren = !(A.children && A.children.length)), U.loading = A.loading));
        const le = [b(_, x, U)];
        if (A) {
          let ue = 0;
          const me = (_e, Te) => {
            _e && _e.length && Te && _e.forEach((Le) => {
              const Se = {
                display: Te.display && Te.expanded,
                level: Te.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, Re = Ve(Le, oe.value);
              if (Re == null)
                throw new Error("For nested data item, row-key is required.");
              if (A = { ...I.value[Re] }, A && (Se.expanded = A.expanded, A.level = A.level || Se.level, A.display = !!(A.expanded && Se.display), typeof A.lazy == "boolean" && (typeof A.loaded == "boolean" && A.loaded && (Se.noLazyChildren = !(A.children && A.children.length)), Se.loading = A.loading)), ue++, le.push(b(Le, x + ue, Se)), A) {
                const Ae = Z.value[Re] || Le[J.value];
                me(Ae, A);
              }
            });
          };
          A.display = !0;
          const be = Z.value[ne] || _[J.value];
          me(be, A);
        }
        return le;
      } else
        return b(_, x, void 0);
    },
    tooltipContent: c,
    tooltipTrigger: d
  };
}
const N2 = {
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
var R2 = H({
  name: "ElTableBody",
  props: N2,
  setup(e) {
    const t = Ce(), n = pe(Yt), o = ce("table"), { wrappedRowRender: a, tooltipContent: l, tooltipTrigger: s } = L2(e), { onColumnsChange: r, onScrollableChange: i } = Fu(n);
    return Y(e.store.states.hoverRow, (u, c) => {
      !e.store.states.isComplex.value || !Ie || Om(() => {
        const d = t == null ? void 0 : t.vnode.el, h = Array.from((d == null ? void 0 : d.children) || []).filter((f) => f == null ? void 0 : f.classList.contains(`${o.e("row")}`)), g = h[c], v = h[u];
        g && el(g, "hover-row"), v && wi(v, "hover-row");
      });
    }), To(() => {
      var u;
      (u = Zt) == null || u();
    }), {
      ns: o,
      onColumnsChange: r,
      onScrollableChange: i,
      wrappedRowRender: a,
      tooltipContent: l,
      tooltipTrigger: s
    };
  },
  render() {
    const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
    return re("tbody", { tabIndex: -1 }, [
      n.reduce((o, a) => o.concat(e(a, o.length)), [])
    ]);
  }
});
function F2() {
  const e = pe(Yt), t = e == null ? void 0 : e.store, n = S(() => t.states.fixedLeafColumnsLength.value), o = S(() => t.states.rightFixedColumns.value.length), a = S(() => t.states.columns.value.length), l = S(() => t.states.fixedColumns.value.length), s = S(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: o,
    columnsCount: a,
    leftFixedCount: l,
    rightFixedCount: s,
    columns: t.states.columns
  };
}
function B2(e) {
  const { columns: t } = F2(), n = ce("table");
  return {
    getCellClasses: (l, s) => {
      const r = l[s], i = [
        n.e("cell"),
        r.id,
        r.align,
        r.labelClassName,
        ...nr(n.b(), s, r.fixed, e.store)
      ];
      return r.className && i.push(r.className), r.children || i.push(n.is("leaf")), i;
    },
    getCellStyles: (l, s) => {
      const r = or(s, l.fixed, e.store);
      return Xn(r, "left"), Xn(r, "right"), r;
    },
    columns: t
  };
}
var z2 = H({
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
    const { getCellClasses: t, getCellStyles: n, columns: o } = B2(e);
    return {
      ns: ce("table"),
      getCellClasses: t,
      getCellStyles: n,
      columns: o
    };
  },
  render() {
    const { columns: e, getCellStyles: t, getCellClasses: n, summaryMethod: o, sumText: a } = this, l = this.store.states.data.value;
    let s = [];
    return o ? s = o({
      columns: e,
      data: l
    }) : e.forEach((r, i) => {
      if (i === 0) {
        s[i] = a;
        return;
      }
      const u = l.map((g) => Number(g[r.property])), c = [];
      let d = !0;
      u.forEach((g) => {
        if (!Number.isNaN(+g)) {
          d = !1;
          const v = `${g}`.split(".")[1];
          c.push(v ? v.length : 0);
        }
      });
      const h = Math.max.apply(null, c);
      d ? s[i] = "" : s[i] = u.reduce((g, v) => {
        const f = Number(v);
        return Number.isNaN(+f) ? g : Number.parseFloat((g + v).toFixed(Math.min(h, 20)));
      }, 0);
    }), re(re("tfoot", [
      re("tr", {}, [
        ...e.map((r, i) => re("td", {
          key: i,
          colspan: r.colSpan,
          rowspan: r.rowSpan,
          class: n(e, i),
          style: t(r, i)
        }, [
          re("div", {
            class: ["cell", r.labelClassName]
          }, [s[i]])
        ]))
      ])
    ]));
  }
});
function H2(e) {
  return {
    setCurrentRow: (c) => {
      e.commit("setCurrentRow", c);
    },
    getSelectionRows: () => e.getSelectionRows(),
    toggleRowSelection: (c, d) => {
      e.toggleRowSelection(c, d, !1), e.updateAllSelected();
    },
    clearSelection: () => {
      e.clearSelection();
    },
    clearFilter: (c) => {
      e.clearFilter(c);
    },
    toggleAllSelection: () => {
      e.commit("toggleAllSelection");
    },
    toggleRowExpansion: (c, d) => {
      e.toggleRowExpansionAdapter(c, d);
    },
    clearSort: () => {
      e.clearSort();
    },
    sort: (c, d) => {
      e.commit("sort", { prop: c, order: d });
    }
  };
}
function D2(e, t, n, o) {
  const a = k(!1), l = k(null), s = k(!1), r = (A) => {
    s.value = A;
  }, i = k({
    width: null,
    height: null,
    headerHeight: null
  }), u = k(!1), c = {
    display: "inline-block",
    verticalAlign: "middle"
  }, d = k(), h = k(0), g = k(0), v = k(0), f = k(0), y = k(0);
  Ft(() => {
    t.setHeight(e.height);
  }), Ft(() => {
    t.setMaxHeight(e.maxHeight);
  }), Y(() => [e.currentRowKey, n.states.rowKey], ([A, U]) => {
    !m(U) || !m(A) || n.setCurrentRowKey(`${A}`);
  }, {
    immediate: !0
  }), Y(() => e.data, (A) => {
    o.store.commit("setData", A);
  }, {
    immediate: !0,
    deep: !0
  }), Ft(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const p = () => {
    o.store.commit("setHoverRow", null), o.hoverState && (o.hoverState = null);
  }, w = (A, U) => {
    const { pixelX: le, pixelY: ue } = U;
    Math.abs(le) >= Math.abs(ue) && (o.refs.bodyWrapper.scrollLeft += U.pixelX / 5);
  }, C = S(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), b = S(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), $ = () => {
    C.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(L);
  };
  Me(async () => {
    await he(), n.updateColumns(), D(), requestAnimationFrame($);
    const A = o.vnode.el, U = o.refs.headerWrapper;
    e.flexible && A && A.parentElement && (A.parentElement.style.minWidth = "0"), i.value = {
      width: d.value = A.offsetWidth,
      height: A.offsetHeight,
      headerHeight: e.showHeader && U ? U.offsetHeight : null
    }, n.states.columns.value.forEach((le) => {
      le.filteredValue && le.filteredValue.length && o.store.commit("filterChange", {
        column: le,
        values: le.filteredValue,
        silent: !0
      });
    }), o.$ready = !0;
  });
  const E = (A, U) => {
    if (!A)
      return;
    const le = Array.from(A.classList).filter((ue) => !ue.startsWith("is-scrolling-"));
    le.push(t.scrollX.value ? U : "is-scrolling-none"), A.className = le.join(" ");
  }, _ = (A) => {
    const { tableWrapper: U } = o.refs;
    E(U, A);
  }, x = (A) => {
    const { tableWrapper: U } = o.refs;
    return !!(U && U.classList.contains(A));
  }, L = function() {
    if (!o.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const Te = "is-scrolling-none";
      x(Te) || _(Te);
      return;
    }
    const A = o.refs.scrollBarRef.wrapRef;
    if (!A)
      return;
    const { scrollLeft: U, offsetWidth: le, scrollWidth: ue } = A, { headerWrapper: me, footerWrapper: be } = o.refs;
    me && (me.scrollLeft = U), be && (be.scrollLeft = U);
    const _e = ue - le - 1;
    U >= _e ? _("is-scrolling-right") : _(U === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, D = () => {
    o.refs.scrollBarRef && (o.refs.scrollBarRef.wrapRef && en(o.refs.scrollBarRef.wrapRef, "scroll", L, {
      passive: !0
    }), e.fit ? Bn(o.vnode.el, B) : en(window, "resize", B), Bn(o.refs.bodyWrapper, () => {
      var A, U;
      B(), (U = (A = o.refs) == null ? void 0 : A.scrollBarRef) == null || U.update();
    }));
  }, B = () => {
    var A, U, le, ue;
    const me = o.vnode.el;
    if (!o.$ready || !me)
      return;
    let be = !1;
    const {
      width: _e,
      height: Te,
      headerHeight: Le
    } = i.value, Se = d.value = me.offsetWidth;
    _e !== Se && (be = !0);
    const Re = me.offsetHeight;
    (e.height || C.value) && Te !== Re && (be = !0);
    const Ae = e.tableLayout === "fixed" ? o.refs.headerWrapper : (A = o.refs.tableHeaderRef) == null ? void 0 : A.$el;
    e.showHeader && (Ae == null ? void 0 : Ae.offsetHeight) !== Le && (be = !0), h.value = ((U = o.refs.tableWrapper) == null ? void 0 : U.scrollHeight) || 0, v.value = (Ae == null ? void 0 : Ae.scrollHeight) || 0, f.value = ((le = o.refs.footerWrapper) == null ? void 0 : le.offsetHeight) || 0, y.value = ((ue = o.refs.appendWrapper) == null ? void 0 : ue.offsetHeight) || 0, g.value = h.value - v.value - f.value - y.value, be && (i.value = {
      width: Se,
      height: Re,
      headerHeight: e.showHeader && (Ae == null ? void 0 : Ae.offsetHeight) || 0
    }, $());
  }, I = kn(), Z = S(() => {
    const { bodyWidth: A, scrollY: U, gutterWidth: le } = t;
    return A.value ? `${A.value - (U.value ? le : 0)}px` : "";
  }), J = S(() => e.maxHeight ? "fixed" : e.tableLayout), oe = S(() => {
    if (e.data && e.data.length)
      return null;
    let A = "100%";
    e.height && g.value && (A = `${g.value}px`);
    const U = d.value;
    return {
      width: U ? `${U}px` : "",
      height: A
    };
  }), ae = S(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), j = S(() => e.height ? {
    height: "100%"
  } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? {
    maxHeight: `calc(${e.maxHeight} - ${v.value + f.value}px)`
  } : {
    maxHeight: `${e.maxHeight - v.value - f.value}px`
  } : {});
  return {
    isHidden: a,
    renderExpanded: l,
    setDragVisible: r,
    isGroup: u,
    handleMouseLeave: p,
    handleHeaderFooterMousewheel: w,
    tableSize: I,
    emptyBlockStyle: oe,
    handleFixedMousewheel: (A, U) => {
      const le = o.refs.bodyWrapper;
      if (Math.abs(U.spinY) > 0) {
        const ue = le.scrollTop;
        U.pixelY < 0 && ue !== 0 && A.preventDefault(), U.pixelY > 0 && le.scrollHeight - le.clientHeight > ue && A.preventDefault(), le.scrollTop += Math.ceil(U.pixelY / 5);
      } else
        le.scrollLeft += Math.ceil(U.pixelX / 5);
    },
    resizeProxyVisible: s,
    bodyWidth: Z,
    resizeState: i,
    doLayout: $,
    tableBodyStyles: b,
    tableLayout: J,
    scrollbarViewStyle: c,
    tableInnerStyle: ae,
    scrollbarStyle: j
  };
}
function V2(e) {
  const t = k(), n = () => {
    const a = e.vnode.el.querySelector(".hidden-columns"), l = { childList: !0, subtree: !0 }, s = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      s.forEach((r) => r());
    }), t.value.observe(a, l);
  };
  Me(() => {
    n();
  }), To(() => {
    var o;
    (o = t.value) == null || o.disconnect();
  });
}
var K2 = {
  data: {
    type: Array,
    default: () => []
  },
  size: to,
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
function zu(e) {
  const t = e.tableLayout === "auto";
  let n = e.columns || [];
  t && n.every((a) => a.width === void 0) && (n = []);
  const o = (a) => {
    const l = {
      key: `${e.tableLayout}_${a.id}`,
      style: {},
      name: void 0
    };
    return t ? l.style = {
      width: `${a.width}px`
    } : l.name = a.id, l;
  };
  return re("colgroup", {}, n.map((a) => re("col", o(a))));
}
zu.props = ["columns", "tableLayout"];
const W2 = () => {
  const e = k(), t = (l, s) => {
    const r = e.value;
    r && r.scrollTo(l, s);
  }, n = (l, s) => {
    const r = e.value;
    r && xe(s) && ["Top", "Left"].includes(l) && r[`setScroll${l}`](s);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (l) => n("Top", l),
    setScrollLeft: (l) => n("Left", l)
  };
};
let j2 = 1;
const U2 = H({
  name: "ElTable",
  directives: {
    Mousewheel: d1
  },
  components: {
    TableHeader: A2,
    TableBody: R2,
    TableFooter: z2,
    ElScrollbar: Pa,
    hColgroup: zu
  },
  props: K2,
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
    const { t } = Pt(), n = ce("table"), o = Ce();
    ot(Yt, o);
    const a = m2(o, e);
    o.store = a;
    const l = new y2({
      store: o.store,
      table: o,
      fit: e.fit,
      showHeader: e.showHeader
    });
    o.layout = l;
    const s = S(() => (a.states.data.value || []).length === 0), {
      setCurrentRow: r,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: c,
      clearFilter: d,
      toggleAllSelection: h,
      toggleRowExpansion: g,
      clearSort: v,
      sort: f
    } = H2(a), {
      isHidden: y,
      renderExpanded: p,
      setDragVisible: w,
      isGroup: C,
      handleMouseLeave: b,
      handleHeaderFooterMousewheel: $,
      tableSize: E,
      emptyBlockStyle: _,
      handleFixedMousewheel: x,
      resizeProxyVisible: L,
      bodyWidth: D,
      resizeState: B,
      doLayout: I,
      tableBodyStyles: Z,
      tableLayout: J,
      scrollbarViewStyle: oe,
      tableInnerStyle: ae,
      scrollbarStyle: j
    } = D2(e, l, a, o), { scrollBarRef: ne, scrollTo: A, setScrollLeft: U, setScrollTop: le } = W2(), ue = zn(I, 50), me = `${n.namespace.value}-table_${j2++}`;
    o.tableId = me, o.state = {
      isGroup: C,
      resizeState: B,
      doLayout: I,
      debouncedUpdateLayout: ue
    };
    const be = S(() => e.sumText || t("el.table.sumText")), _e = S(() => e.emptyText || t("el.table.emptyText"));
    return V2(o), {
      ns: n,
      layout: l,
      store: a,
      handleHeaderFooterMousewheel: $,
      handleMouseLeave: b,
      tableId: me,
      tableSize: E,
      isHidden: y,
      isEmpty: s,
      renderExpanded: p,
      resizeProxyVisible: L,
      resizeState: B,
      isGroup: C,
      bodyWidth: D,
      tableBodyStyles: Z,
      emptyBlockStyle: _,
      debouncedUpdateLayout: ue,
      handleFixedMousewheel: x,
      setCurrentRow: r,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: c,
      clearFilter: d,
      toggleAllSelection: h,
      toggleRowExpansion: g,
      clearSort: v,
      doLayout: I,
      sort: f,
      t,
      setDragVisible: w,
      context: o,
      computedSumText: be,
      computedEmptyText: _e,
      tableLayout: J,
      scrollbarViewStyle: oe,
      tableInnerStyle: ae,
      scrollbarStyle: j,
      scrollBarRef: ne,
      scrollTo: A,
      setScrollLeft: U,
      setScrollTop: le
    };
  }
}), q2 = ["data-prefix"], G2 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function Y2(e, t, n, o, a, l) {
  const s = G("hColgroup"), r = G("table-header"), i = G("table-body"), u = G("table-footer"), c = G("el-scrollbar"), d = yl("mousewheel");
  return T(), P("div", {
    ref: "tableWrapper",
    class: M([
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
    style: ye(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (...h) => e.handleMouseLeave && e.handleMouseLeave(...h))
  }, [
    R("div", {
      class: M(e.ns.e("inner-wrapper")),
      style: ye(e.tableInnerStyle)
    }, [
      R("div", G2, [
        W(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? We((T(), P("div", {
        key: 0,
        ref: "headerWrapper",
        class: M(e.ns.e("header-wrapper"))
      }, [
        R("table", {
          ref: "tableHeader",
          class: M(e.ns.e("header")),
          style: ye(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          Q(s, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          Q(r, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [d, e.handleHeaderFooterMousewheel]
      ]) : q("v-if", !0),
      R("div", {
        ref: "bodyWrapper",
        class: M(e.ns.e("body-wrapper"))
      }, [
        Q(c, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: F(() => [
            R("table", {
              ref: "tableBody",
              class: M(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: ye({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              Q(s, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (T(), V(r, {
                key: 0,
                ref: "tableHeaderRef",
                class: M(e.ns.e("body-header")),
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["class", "border", "default-sort", "store", "onSetDragVisible"])) : q("v-if", !0),
              Q(i, {
                context: e.context,
                highlight: e.highlightCurrentRow,
                "row-class-name": e.rowClassName,
                "tooltip-effect": e.tooltipEffect,
                "tooltip-options": e.tooltipOptions,
                "row-style": e.rowStyle,
                store: e.store,
                stripe: e.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]),
              e.showSummary && e.tableLayout === "auto" ? (T(), V(u, {
                key: 1,
                class: M(e.ns.e("body-footer")),
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                "sum-text": e.computedSumText,
                "summary-method": e.summaryMethod
              }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : q("v-if", !0)
            ], 6),
            e.isEmpty ? (T(), P("div", {
              key: 0,
              ref: "emptyBlock",
              style: ye(e.emptyBlockStyle),
              class: M(e.ns.e("empty-block"))
            }, [
              R("span", {
                class: M(e.ns.e("empty-text"))
              }, [
                W(e.$slots, "empty", {}, () => [
                  Ke(ie(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : q("v-if", !0),
            e.$slots.append ? (T(), P("div", {
              key: 1,
              ref: "appendWrapper",
              class: M(e.ns.e("append-wrapper"))
            }, [
              W(e.$slots, "append")
            ], 2)) : q("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary && e.tableLayout === "fixed" ? We((T(), P("div", {
        key: 1,
        ref: "footerWrapper",
        class: M(e.ns.e("footer-wrapper"))
      }, [
        R("table", {
          class: M(e.ns.e("footer")),
          cellspacing: "0",
          cellpadding: "0",
          border: "0",
          style: ye(e.tableBodyStyles)
        }, [
          Q(s, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          Q(u, {
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            "sum-text": e.computedSumText,
            "summary-method": e.summaryMethod
          }, null, 8, ["border", "default-sort", "store", "sum-text", "summary-method"])
        ], 6)
      ], 2)), [
        [dn, !e.isEmpty],
        [d, e.handleHeaderFooterMousewheel]
      ]) : q("v-if", !0),
      e.border || e.isGroup ? (T(), P("div", {
        key: 2,
        class: M(e.ns.e("border-left-patch"))
      }, null, 2)) : q("v-if", !0)
    ], 6),
    We(R("div", {
      ref: "resizeProxy",
      class: M(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [dn, e.resizeProxyVisible]
    ])
  ], 46, q2);
}
var X2 = /* @__PURE__ */ we(U2, [["render", Y2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const Q2 = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, Z2 = {
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
}, J2 = (e) => Q2[e] || "", eC = {
  selection: {
    renderHeader({ store: e, column: t }) {
      function n() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return re(Yn, {
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
      $index: o
    }) {
      return re(Yn, {
        disabled: t.selectable ? !t.selectable.call(null, e, o) : !1,
        size: n.states.tableSize.value,
        onChange: () => {
          n.commit("rowSelectedChanged", e);
        },
        onClick: (a) => a.stopPropagation(),
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
      const o = e.index;
      return typeof o == "number" ? n = t + o : typeof o == "function" && (n = o(t)), re("div", {}, [n]);
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
      const { ns: o } = t, a = [o.e("expand-icon")];
      return n && a.push(o.em("expand-icon", "expanded")), re("div", {
        class: a,
        onClick: function(s) {
          s.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          re(De, null, {
            default: () => [re(Cl)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function tC({
  row: e,
  column: t,
  $index: n
}) {
  var o;
  const a = t.property, l = a && Cm(e, a).value;
  return t && t.formatter ? t.formatter(e, t, l, n) : ((o = l == null ? void 0 : l.toString) == null ? void 0 : o.call(l)) || "";
}
function nC({
  row: e,
  treeNode: t,
  store: n
}, o = !1) {
  const { ns: a } = n;
  if (!t)
    return o ? [
      re("span", {
        class: a.e("placeholder")
      })
    ] : null;
  const l = [], s = function(r) {
    r.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && l.push(re("span", {
    class: a.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const r = [
      a.e("expand-icon"),
      t.expanded ? a.em("expand-icon", "expanded") : ""
    ];
    let i = Cl;
    t.loading && (i = _l), l.push(re("div", {
      class: r,
      onClick: s
    }, {
      default: () => [
        re(De, { class: { [a.is("loading")]: t.loading } }, {
          default: () => [re(i)]
        })
      ]
    }));
  } else
    l.push(re("span", {
      class: a.e("placeholder")
    }));
  return l;
}
function Ms(e, t) {
  return e.reduce((n, o) => (n[o] = o, n), t);
}
function oC(e, t) {
  const n = Ce();
  return {
    registerComplexWatchers: () => {
      const l = ["fixed"], s = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, r = Ms(l, s);
      Object.keys(r).forEach((i) => {
        const u = s[i];
        $n(t, u) && Y(() => t[u], (c) => {
          let d = c;
          u === "width" && i === "realWidth" && (d = tr(c)), u === "minWidth" && i === "realMinWidth" && (d = Mu(c)), n.columnConfig.value[u] = d, n.columnConfig.value[i] = d;
          const h = u === "fixed";
          e.value.store.scheduleLayout(h);
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
      }, r = Ms(l, s);
      Object.keys(r).forEach((i) => {
        const u = s[i];
        $n(t, u) && Y(() => t[u], (c) => {
          n.columnConfig.value[i] = c;
        });
      });
    }
  };
}
function aC(e, t, n) {
  const o = Ce(), a = k(""), l = k(!1), s = k(), r = k(), i = ce("table");
  Ft(() => {
    s.value = e.align ? `is-${e.align}` : null, s.value;
  }), Ft(() => {
    r.value = e.headerAlign ? `is-${e.headerAlign}` : s.value, r.value;
  });
  const u = S(() => {
    let b = o.vnode.vParent || o.parent;
    for (; b && !b.tableId && !b.columnId; )
      b = b.vnode.vParent || b.parent;
    return b;
  }), c = S(() => {
    const { store: b } = o.parent;
    if (!b)
      return !1;
    const { treeData: $ } = b.states, E = $.value;
    return E && Object.keys(E).length > 0;
  }), d = k(tr(e.width)), h = k(Mu(e.minWidth)), g = (b) => (d.value && (b.width = d.value), h.value && (b.minWidth = h.value), !d.value && h.value && (b.width = void 0), b.minWidth || (b.minWidth = 80), b.realWidth = Number(b.width === void 0 ? b.minWidth : b.width), b), v = (b) => {
    const $ = b.type, E = eC[$] || {};
    Object.keys(E).forEach((x) => {
      const L = E[x];
      x !== "className" && L !== void 0 && (b[x] = L);
    });
    const _ = J2($);
    if (_) {
      const x = `${m(i.namespace)}-${_}`;
      b.className = b.className ? `${b.className} ${x}` : x;
    }
    return b;
  }, f = (b) => {
    Array.isArray(b) ? b.forEach((E) => $(E)) : $(b);
    function $(E) {
      var _;
      ((_ = E == null ? void 0 : E.type) == null ? void 0 : _.name) === "ElTableColumn" && (E.vParent = o);
    }
  };
  return {
    columnId: a,
    realAlign: s,
    isSubColumn: l,
    realHeaderAlign: r,
    columnOrTableParent: u,
    setColumnWidth: g,
    setColumnForcedProps: v,
    setColumnRenders: (b) => {
      e.renderHeader ? je("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : b.type !== "selection" && (b.renderHeader = (E) => {
        o.columnConfig.value.label;
        const _ = t.header;
        return _ ? _(E) : b.label;
      });
      let $ = b.renderCell;
      return b.type === "expand" ? (b.renderCell = (E) => re("div", {
        class: "cell"
      }, [$(E)]), n.value.renderExpanded = (E) => t.default ? t.default(E) : t.default) : ($ = $ || tC, b.renderCell = (E) => {
        let _ = null;
        if (t.default) {
          const Z = t.default(E);
          _ = Z.some((J) => J.type !== Hs) ? Z : $(E);
        } else
          _ = $(E);
        const { columns: x } = n.value.store.states, L = x.value.findIndex((Z) => Z.type === "default"), D = c.value && E.cellIndex === L, B = nC(E, D), I = {
          class: "cell",
          style: {}
        };
        return b.showOverflowTooltip && (I.class = `${I.class} ${m(i.namespace)}-tooltip`, I.style = {
          width: `${(E.column.realWidth || Number(E.column.width)) - 1}px`
        }), f(_), re("div", I, [B, _]);
      }), b;
    },
    getPropsData: (...b) => b.reduce(($, E) => (Array.isArray(E) && E.forEach((_) => {
      $[_] = e[_];
    }), $), {}),
    getColumnElIndex: (b, $) => Array.prototype.indexOf.call(b, $),
    updateColumnOrder: () => {
      n.value.store.commit("updateColumnOrder", o.columnConfig.value);
    }
  };
}
var lC = {
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
let rC = 1;
var Hu = H({
  name: "ElTableColumn",
  components: {
    ElCheckbox: Yn
  },
  props: lC,
  setup(e, { slots: t }) {
    const n = Ce(), o = k({}), a = S(() => {
      let C = n.parent;
      for (; C && !C.tableId; )
        C = C.parent;
      return C;
    }), { registerNormalWatchers: l, registerComplexWatchers: s } = oC(a, e), {
      columnId: r,
      isSubColumn: i,
      realHeaderAlign: u,
      columnOrTableParent: c,
      setColumnWidth: d,
      setColumnForcedProps: h,
      setColumnRenders: g,
      getPropsData: v,
      getColumnElIndex: f,
      realAlign: y,
      updateColumnOrder: p
    } = aC(e, t, a), w = c.value;
    r.value = `${w.tableId || w.columnId}_column_${rC++}`, ml(() => {
      i.value = a.value !== w;
      const C = e.type || "default", b = e.sortable === "" ? !0 : e.sortable, $ = Hn(e.showOverflowTooltip) ? w.props.showOverflowTooltip : e.showOverflowTooltip, E = {
        ...Z2[C],
        id: r.value,
        type: C,
        property: e.prop || e.property,
        align: y,
        headerAlign: u,
        showOverflowTooltip: $,
        filterable: e.filters || e.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        isColumnGroup: !1,
        isSubColumn: !1,
        filterOpened: !1,
        sortable: b,
        index: e.index,
        rawColumnKey: n.vnode.key
      };
      let B = v([
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
      B = r2(E, B), B = i2(g, d, h)(B), o.value = B, l(), s();
    }), Me(() => {
      var C;
      const b = c.value, $ = i.value ? b.vnode.el.children : (C = b.refs.hiddenColumns) == null ? void 0 : C.children, E = () => f($ || [], n.vnode.el);
      o.value.getColumnIndex = E, E() > -1 && a.value.store.commit("insertColumn", o.value, i.value ? b.columnConfig.value : null, p);
    }), Bt(() => {
      a.value.store.commit("removeColumn", o.value, i.value ? w.columnConfig.value : null, p);
    }), n.columnId = r.value, n.columnConfig = o;
  },
  render() {
    var e, t, n;
    try {
      const o = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, {
        row: {},
        column: {},
        $index: -1
      }), a = [];
      if (Array.isArray(o))
        for (const s of o)
          ((n = s.type) == null ? void 0 : n.name) === "ElTableColumn" || s.shapeFlag & 2 ? a.push(s) : s.type === $e && Array.isArray(s.children) && s.children.forEach((r) => {
            (r == null ? void 0 : r.patchFlag) !== 1024 && !Tt(r == null ? void 0 : r.children) && a.push(r);
          });
      return re("div", a);
    } catch {
      return re("div", []);
    }
  }
});
const sC = dt(X2, {
  TableColumn: Hu
});
eo(Hu);
/*! Element Plus v2.4.1 */
var Du = {
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
const iC = H({
  name: "KPage",
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: !1 },
    small: { type: Boolean, default: !1 },
    pagerCount: { type: Number, default: 7 }
  },
  components: { ElConfigProvider: Qi, ElPagination: Jw },
  emits: ["update:modelValue", "update:size", "current-change", "size-change", "change"],
  setup(e, { emit: t }) {
    const n = Du, o = S(() => {
      const { total: u, size: c, showSize: d } = e;
      return d ? !0 : u > c;
    }), a = S({
      get() {
        return e.modelValue;
      },
      set(u) {
        t("update:modelValue", u);
      }
    }), l = S({
      get: () => e.size,
      set: (u) => t("update:size", u)
    }), s = S(() => {
      const u = ["total", "sizes", "prev", "pager", "next", "jumper"];
      return e.showSize || u.splice(1, 1), u.join(",");
    });
    return {
      locale: n,
      currentPage: a,
      layoutList: s,
      handleSizeChange: (u) => {
        a.value = 1, t("update:size", u), t("size-change", u), t("change", { page: e.size === u ? a.value : 1, size: u });
      },
      handleCurrentChange: (u) => {
        t("current-change", u), t("change", { page: u, size: e.size });
      },
      showPage: o,
      pageSize: l
    };
  }
}), uC = {
  key: 0,
  class: "page-right mt20"
};
function cC(e, t, n, o, a, l) {
  const s = G("el-pagination"), r = G("el-config-provider");
  return e.showPage ? (T(), P("div", uC, [
    Q(r, { locale: e.locale }, {
      default: F(() => [
        Q(s, Pe({
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
  ])) : q("", !0);
}
const Nn = /* @__PURE__ */ He(iC, [["render", cC], ["__scopeId", "data-v-30359b33"]]);
Nn.install = function(e) {
  e.component(Nn.name, Nn);
};
const dC = H({
  name: "KTable",
  components: { pagination: Nn },
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
    const n = S({
      get: () => e.tableData,
      set: (r) => t("update:tableData", r)
    }), o = S({
      get: () => e.modelValue,
      set: (r) => t("update:modelValue", r)
    }), a = (r) => t("current-change", r), l = ({ column: r, order: i }) => {
      const u = i === "ascending" ? 1 : 0;
      t("sort-change", {
        prop: r == null ? void 0 : r.rawColumnKey,
        order: i,
        sortType: u,
        currentPage: o.value,
        column: r,
        sortColumn: r == null ? void 0 : r.rawColumnKey
      });
    }, s = k(null);
    return {
      currentPage: o,
      tableDataList: n,
      changePage: a,
      sortChange: l,
      instance: s,
      elTable: s
    };
  }
}), fC = { key: 2 };
function pC(e, t, n, o, a, l) {
  const s = G("el-table-column"), r = G("el-table"), i = G("pagination");
  return T(), P($e, null, [
    Q(r, Pe({
      data: e.tableDataList,
      style: { width: "100%" },
      class: "mt20",
      "header-cell-style": e.headerCellStyle
    }, e.$attrs, {
      "empty-text": e.emptyText,
      onSortChange: e.sortChange,
      ref: "elTable"
    }), _n({
      default: F(() => [
        (T(!0), P($e, null, ze(e.tableColumn, (u) => (T(), V(s, {
          key: u.prop,
          label: u.label,
          name: u.name,
          width: u.width,
          "min-width": u.minWidth,
          fixed: u.fixed,
          sortable: u.sortable,
          type: u.type,
          "show-overflow-tooltip": u.showOverflowTooltip ?? !0
        }, _n({
          default: F((c) => [
            e.$slots.default ? W(e.$slots, "default", {
              key: 0,
              item: c.row,
              row: c.row,
              index: c.$index
            }) : u.custom && c.$index >= 0 ? W(e.$slots, u.custom, {
              key: 1,
              item: c.row,
              row: c.row,
              index: c.$index
            }) : (T(), P("span", fC, ie(c.row[u.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          u.header ? {
            name: "header",
            fn: F(() => [
              W(e.$slots, u.header)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["label", "name", "width", "min-width", "fixed", "sortable", "type", "show-overflow-tooltip"]))), 128))
      ]),
      _: 2
    }, [
      e.$slots.empty ? {
        name: "empty",
        fn: F(() => [
          W(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "empty-text", "onSortChange"]),
    Q(i, {
      total: e.total,
      size: e.size,
      "show-size": e.showSize,
      modelValue: e.currentPage,
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.currentPage = u),
      onCurrentChange: e.changePage
    }, null, 8, ["total", "size", "show-size", "modelValue", "onCurrentChange"])
  ], 64);
}
const Xo = /* @__PURE__ */ He(dC, [["render", pC]]);
Xo.install = function(e) {
  e.component(Xo.name, Xo);
};
const vC = H({
  name: "KVirtualList",
  components: { ElScrollbar: Pa },
  props: {
    height: { type: String, default: "500px" },
    rowStyle: { type: Object, default: () => ({}) },
    rowClassName: { type: [Function, String, Object], default: "" },
    data: { type: Array, default: () => [] }
  },
  emits: ["scroll", "row-click"],
  setup(e, { emit: t }) {
    const n = k(0), o = k(0), a = k(null), l = k(10), s = () => {
      var y, p;
      return ((y = document.querySelector(".table-row")) == null ? void 0 : y.offsetHeight) ?? ((p = document.querySelector(".list-item")) == null ? void 0 : p.offsetHeight) ?? 10;
    }, r = () => {
      const { clientHeight: y = 100 } = a.value.wrapRef || {};
      return Math.ceil(y / s()) + n.value;
    }, i = k(100);
    Me(() => {
      l.value = Number(r()) || 10, i.value = e.data.length * s();
    });
    const u = (y) => Math.floor(y / s()), c = (y) => Math.ceil(y * s()), d = (y) => y >= n.value && y <= l.value, h = S(() => e.data.filter((y, p) => d(p)));
    return Y(() => e.data, (y) => {
      y.length || (n.value = 0, o.value = 0), e.data.forEach((p, w) => {
        p.rowIndex = w;
      }), he(() => {
        i.value = e.data.length * s();
      });
    }), {
      startIndex: n,
      endIndex: l,
      startOffset: o,
      viewport: a,
      onScroll: (y) => {
        const { scrollTop: p, clientHeight: w } = a.value.wrapRef;
        n.value = u(p), o.value = c(n.value), l.value = r();
        const C = Math.abs(i.value - w - p);
        t("scroll", { distance: C, ...y });
      },
      showViewRanges: d,
      containHeight: i,
      listRanges: h,
      rowClick: (y, p) => {
        t("row-click", y, p);
      },
      rowClassHandle: (y, p) => typeof e.rowClassName == "function" ? e.rowClassName({ row: y, rowIndex: p }) : e.rowClassName
    };
  }
}), hC = {
  class: "virtual-list",
  "data-testid": "virtual-list"
}, gC = ["onClick"];
function mC(e, t, n, o, a, l) {
  const s = G("el-scrollbar");
  return T(), V(s, Pe({
    height: e.height,
    ref: "viewport"
  }, e.$attrs, { onScroll: e.onScroll }), {
    default: F(() => [
      R("div", hC, [
        R("div", {
          class: "list-contain",
          style: ye({ height: `${e.containHeight}px` })
        }, null, 4),
        R("div", {
          class: "list-content",
          style: ye({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          (T(!0), P($e, null, ze(e.listRanges, (r, i) => (T(), P("div", {
            key: i,
            class: M(["list-item", e.rowClassHandle(r, r.rowIndex)]),
            style: ye(e.rowStyle),
            onClick: (u) => e.rowClick(r, r.rowIndex)
          }, [
            W(e.$slots, "default", {
              row: r,
              index: r.rowIndex
            }, () => [
              Ke(ie(r.name), 1)
            ], !0)
          ], 14, gC))), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["height", "onScroll"]);
}
const mo = /* @__PURE__ */ He(vC, [["render", mC], ["__scopeId", "data-v-e53aecaa"]]);
mo.install = function(e) {
  e.component(mo.name, mo);
};
const Vu = {
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
function Ku(e) {
  const t = k(null), n = (s) => {
    var h, g, v, f;
    let r = {};
    const {
      align: i,
      width: u,
      fixed: c,
      minWidth: d
    } = s;
    if (i && (r["text-center"] = `${i}`), d && (r["min-width"] = `${d}`), u && (r = {
      ...r,
      width: `${u}`,
      flex: "inherit",
      "flex-shrink": 0
    }), c) {
      const y = e.tableColumn.findIndex((w) => w.prop === s.prop), p = e.tableColumn.length;
      if (r = {
        ...r,
        position: "sticky",
        "z-index": 50
      }, c === "left") {
        const w = (h = e.tableColumn.filter(($) => $.fixed === "left")) == null ? void 0 : h.length;
        let C = 0;
        y > 0 && y < p - 1 && w > 1 && (C = (g = t.value) == null ? void 0 : g.at(y - 1).clientWidth), r.left = `${C}px`;
        let b = 0;
        e.tableColumn.forEach(($, E) => {
          $.fixed === "left" && (b = E);
        }), b === y && (r["box-shadow"] = "3px 0px 4px #b0a8a836");
      } else {
        const w = (v = e.tableColumn.filter(($) => $.fixed && $.fixed !== "left")) == null ? void 0 : v.length;
        let C = 0;
        y < p - 1 && w > 1 && (C = (f = t.value) == null ? void 0 : f.at(y + 1).clientWidth), e.tableColumn.findIndex(($) => $.fixed && $.fixed !== "left") === y && (r["box-shadow"] = "-3px 0 4px #b0a8a836"), r.right = `${C}px`;
      }
    }
    return e.isFooter && (r.color = "#606266"), r;
  }, o = k(null), a = (s) => {
    const r = e.tableData.reduce((i, u) => i + Number(u[s.prop]), 0);
    return Number.isNaN(r) ? "N/A" : r.toFixed(2);
  };
  return {
    headerColmn: t,
    headerClass: n,
    tableHeader: o,
    getSummaries: (s, r) => e.summaryMethod ? e.summaryMethod({ row: s, index: r }) : r ? a(s) : e.sumText
  };
}
const bC = { class: "flex table-border-bottom header-content" }, yC = {
  key: 0,
  class: "table-header-sort flex-column flex-center"
}, wC = { class: "sort-wrapper" }, CC = ["onClick"], SC = ["onClick"], _C = {
  __name: "headerFooter",
  props: {
    ...Vu,
    isFooter: { type: Boolean, default: !1 }
  },
  emits: ["sort-change"],
  setup(e, { expose: t, emit: n }) {
    const o = e, a = n, { headerClass: l, tableHeader: s } = Ku(o), r = k(null), i = k({}), u = (d, h) => {
      i.value = h, r.value = r.value === d ? null : d, a("sort-change", { column: h, sortType: r.value });
    };
    return t({
      setScrollLeft: (d) => {
        s.value.scrollLeft = `${d}`;
      }
    }), (d, h) => (T(), P("div", {
      class: "table-header overflow",
      ref_key: "tableHeader",
      ref: s
    }, [
      R("div", bC, [
        (T(!0), P($e, null, ze(d.tableColumn, (g, v) => (T(), P("div", {
          key: v,
          class: "header-column cell flex-align-center",
          ref_for: !0,
          ref: "headerColmn",
          style: ye([d.headerCellStyle, m(l)(g)])
        }, [
          W(d.$slots, "default", {
            row: g,
            index: v
          }, () => [
            Ke(ie(g.label), 1)
          ], !0),
          g.sortable && !e.isFooter ? (T(), P("div", yC, [
            R("span", wC, [
              R("i", {
                class: M(["sort-caret ascending", { "bottom-caret": r.value === "ascending" && i.value.prop == g.prop }]),
                onClick: (f) => u("ascending", g)
              }, null, 10, CC),
              R("i", {
                class: M(["sort-caret descending", { "top-caret": r.value === "descending" && i.value.prop == g.prop }]),
                onClick: (f) => u("descending", g)
              }, null, 10, SC)
            ])
          ])) : q("", !0)
        ], 4))), 128))
      ])
    ], 512));
  }
}, $C = /* @__PURE__ */ He(_C, [["__scopeId", "data-v-2fd08206"]]);
const EC = H({
  name: "KTableV2",
  components: { virtualList: mo, headerFooter: $C },
  props: Vu,
  emits: ["sort-change"],
  setup(e, { emit: t }) {
    const n = S(() => e.tableColumn.map((h, g) => ({ ...h, keyId: g }))), {
      headerColmn: o,
      headerClass: a,
      tableHeader: l,
      getSummaries: s
    } = Ku(e), r = k(null), i = ({ scrollLeft: h }) => {
      var g, v;
      (g = l.value) == null || g.setScrollLeft(h), (v = r.value) == null || v.setScrollLeft(h);
    }, u = ({ column: h, sortType: g }) => t("sort-change", { column: h, sortType: g }), c = k(null), d = (h) => {
      var g;
      return (g = c.value) == null ? void 0 : g.viewport.setScrollTop(h);
    };
    return {
      ...Zn(e),
      columnList: n,
      headerClass: a,
      tableHeader: l,
      tableBottom: r,
      scrollHandle: i,
      headerColmn: o,
      clickSortCaret: u,
      virtualRef: c,
      setScrollTop: d,
      getSummaries: s
    };
  }
}), TC = { class: "table-v2 el-table flex-column" }, kC = { class: "flex table-body" };
function OC(e, t, n, o, a, l) {
  const s = G("headerFooter"), r = G("virtualList");
  return T(), P("div", TC, [
    Q(s, {
      ref: "tableHeader",
      "table-column": e.tableColumn,
      onSortChange: e.clickSortCaret
    }, {
      default: F(({ row: i, index: u }) => [
        W(e.$slots, i == null ? void 0 : i.header, {
          row: i,
          index: u
        }, () => [
          Ke(ie(i.label), 1)
        ], !0)
      ]),
      _: 3
    }, 8, ["table-column", "onSortChange"]),
    e.tableData.length ? (T(), V(r, Pe({
      key: 0,
      data: e.tableData,
      always: "",
      ref: "virtualRef",
      "row-class-name": e.rowClassName
    }, e.$attrs, {
      height: e.height,
      onScroll: e.scrollHandle
    }), {
      default: F(({ row: i, index: u }) => [
        W(e.$slots, "content", {}, () => [
          R("div", kC, [
            (T(!0), P($e, null, ze(e.columnList, (c) => (T(), P("div", {
              key: c.keyId,
              class: M(["cell table-row table-border-bottom flex-align-center", { "fixed-cell": c.fixed }]),
              ref_for: !0,
              ref: "bodyCell",
              style: ye(e.headerClass(c))
            }, [
              R("div", {
                class: M({ "text-overflow": c.showOverflowTooltip ?? !0 })
              }, [
                W(e.$slots, (c == null ? void 0 : c.custom) ?? "default", {
                  row: i,
                  index: u
                }, () => [
                  Ke(ie(i[c.prop]), 1)
                ], !0)
              ], 2)
            ], 6))), 128))
          ])
        ], !0)
      ]),
      _: 3
    }, 16, ["data", "row-class-name", "height", "onScroll"])) : (T(), P("div", {
      key: 1,
      class: "flex-center pt20 pb20",
      style: ye({ height: e.height })
    }, [
      W(e.$slots, "empty", {}, () => [
        Ke(ie(e.emptyText), 1)
      ], !0)
    ], 4)),
    W(e.$slots, "footer", {}, () => [
      e.showSummary || e.$slots.footer ? (T(), V(s, {
        key: 0,
        ref: "tableBottom",
        "table-column": e.tableColumn,
        "is-footer": ""
      }, {
        default: F(({ row: i, index: u }) => [
          Ke(ie(e.getSummaries(i, u)), 1)
        ]),
        _: 1
      }, 8, ["table-column"])) : q("", !0)
    ], !0)
  ]);
}
const Qo = /* @__PURE__ */ He(EC, [["render", OC], ["__scopeId", "data-v-393e4622"]]);
Qo.install = function(e) {
  e.component(Qo.name, Qo);
};
const xC = {
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
}, PC = { key: 2 }, AC = {
  key: 0,
  class: "flex-between"
}, MC = { class: "flex1 mr20 mt20" }, bo = /* @__PURE__ */ Object.assign({
  name: "KBatchTable"
}, {
  __name: "main",
  props: xC,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { expose: t, emit: n }) {
    const o = e, a = n, l = k(null), s = k([]), r = (C) => {
      C ? C.forEach((b) => {
        const $ = o.tableData.find((E) => E[o.keyId] === b[o.keyId]);
        l.value.toggleRowSelection($ ?? b);
      }) : l.value.clearSelection();
    }, i = (C, b = !0) => {
      b ? s.value.push(C) : s.value = s.value.filter(($) => $[o.keyId] !== (C == null ? void 0 : C[o.keyId]));
    }, u = (C) => C[o.checkKey] ?? !C[o.checkKey], c = (C, b) => {
      const $ = C.some((E) => E[o.keyId] === (b == null ? void 0 : b[o.keyId]));
      i(b, $);
    }, d = (C) => g(C), h = (C) => {
      if (!u(C))
        return;
      r([C]);
      const b = s.value.some(($) => $[o.keyId] === C[o.keyId]);
      i(C, !b), a("row-click", C);
    };
    Y(() => s.value, (C, b) => {
      b && a("update:modelValue", C);
    }, { immediate: !0, deep: !0 });
    const g = (C = []) => {
      r(), C.forEach((b) => {
        const $ = o.tableData.find((E) => E[o.keyId] === b[o.keyId]);
        l.value.toggleRowSelection($ ?? b, !!u(b));
      }), s.value = C;
    }, v = () => g();
    Y(() => o.modelValue, (C, b) => {
      !C.length && b.length && g();
    });
    const f = (C) => C[o.keyId], y = () => {
      o.selectList.length && o.selectList.forEach((C) => {
        o.tableData.forEach((b) => {
          b[o.checkKey] = b[o.checkKey] ?? 1, f(C) === f(b) && (b[o.checkKey] = 0);
        });
      });
    };
    Y(() => o.tableData, (C) => {
      he(() => {
        C.length && y(), C.length && g(o.modelValue);
      });
    }, { immediate: !0 });
    const p = S({
      get: () => o.page,
      set: (C) => a("update:page", C)
    }), w = (C) => {
      a("current-change", C);
    };
    return t({
      toggleSelection: g,
      handleRowClick: h,
      clear: v
    }), (C, b) => {
      const $ = G("el-table-column");
      return T(), P($e, null, [
        Q(m(sC), Pe({
          ref_key: "multipleTableRef",
          ref: l,
          "empty-text": "暂无数据"
        }, C.$attrs, {
          data: C.tableData,
          "header-cell-style": C.headerCellStyle,
          onSelect: c,
          onSelectAll: d,
          onRowClick: h
        }), _n({
          default: F(() => [
            Q($, {
              type: "selection",
              width: "55",
              selectable: u
            }),
            (T(!0), P($e, null, ze(C.tableColumn, (E) => (T(), V($, {
              label: E.label,
              key: E.prop,
              width: E.width,
              fixed: E.fixed,
              "min-width": E.minWidth,
              "show-overflow-tooltip": E.showOverflowTooltip ?? !0
            }, _n({
              default: F((_) => [
                C.$slots.default ? W(C.$slots, "default", {
                  key: 0,
                  item: _.row,
                  row: _.row,
                  column: E,
                  index: _.$index
                }) : q("", !0),
                E.custom && _.$index >= 0 ? W(C.$slots, E.custom, {
                  key: 1,
                  item: _.row,
                  column: E,
                  row: _.row,
                  index: _.$index
                }) : (T(), P("span", PC, ie(_.row[E.prop] ?? "-"), 1))
              ]),
              _: 2
            }, [
              E.header ? {
                name: "header",
                fn: F(() => [
                  W(C.$slots, "header", { column: E }),
                  W(C.$slots, E.header, { column: E })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["label", "width", "fixed", "min-width", "show-overflow-tooltip"]))), 128))
          ]),
          _: 2
        }, [
          C.$slots.empty ? {
            name: "empty",
            fn: F(() => [
              W(C.$slots, "empty")
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["data", "header-cell-style"]),
        C.showFooter ? (T(), P("div", AC, [
          R("div", MC, [
            C.$slots.footer ? W(C.$slots, "footer", { key: 0 }) : q("", !0)
          ]),
          Q(m(Nn), Pe({
            total: C.total,
            "show-size": C.showSize
          }, C.$attrs, {
            modelValue: p.value,
            "onUpdate:modelValue": b[0] || (b[0] = (E) => p.value = E),
            onCurrentChange: w
          }), null, 16, ["total", "show-size", "modelValue"])
        ])) : q("", !0)
      ], 64);
    };
  }
});
bo.install = function(e) {
  e.component(bo.name, bo);
};
const IC = H({
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
  setup(e, { emit: t }) {
    const n = S({
      get: () => e.modelValue,
      set: (r) => t("update:modelValue", r)
    }), o = S(() => e.class ? e.class : e.customClass ? e.customClass : e.showFooter ? "custom-dialog" : "custom-dialog no-footer");
    return {
      dialogVisible: n,
      customClassName: o,
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
}), LC = /* @__PURE__ */ R("span", null, "这是一段信息", -1), NC = { class: "dialog-footer" };
function RC(e, t, n, o, a, l) {
  const s = G("el-button"), r = G("el-dialog");
  return T(), V(r, Pe({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": t[1] || (t[1] = (i) => e.dialogVisible = i),
    class: e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), _n({
    default: F(() => [
      W(e.$slots, "default", {}, () => [
        LC
      ])
    ]),
    _: 2
  }, [
    e.showFooter ? {
      name: "footer",
      fn: F(() => [
        W(e.$slots, "footer", {}, () => [
          R("span", NC, [
            Q(s, {
              size: "large",
              onClick: t[0] || (t[0] = (i) => e.dialogVisible = !1)
            }, {
              default: F(() => [
                Ke("取 消")
              ]),
              _: 1
            }),
            Q(s, {
              size: "large",
              type: "primary",
              disabled: e.confirmDisabled,
              onClick: e.confirmHandler
            }, {
              default: F(() => [
                Ke("确 定")
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
const Zo = /* @__PURE__ */ He(IC, [["render", RC]]);
Zo.install = function(e) {
  e.component(Zo.name, Zo);
};
const FC = H({
  name: "KBreadcrumb",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const n = Ce().appContext.config.globalProperties.$router;
    return { clickHandle: (a, l) => {
      if (a.url) {
        window.location.href = a.url;
        return;
      }
      const s = l - e.list.length + 1;
      a.path ? n == null || n.push(a.path) : s && (n == null || n.go(s));
    } };
  }
}), BC = { class: "crumb-header flex-between" }, zC = { class: "crumb-contain" }, HC = ["onClick"];
function DC(e, t, n, o, a, l) {
  const s = G("el-space");
  return T(), P("div", BC, [
    R("div", zC, [
      Q(s, { spacer: "/" }, {
        default: F(() => [
          (T(!0), P($e, null, ze(e.list, (r, i) => (T(), P("span", {
            key: i,
            class: M({ "crumb-item": i !== e.list.length - 1 }),
            onClick: (u) => e.clickHandle(r, i)
          }, ie(r.title), 11, HC))), 128))
        ]),
        _: 1
      })
    ]),
    W(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Jo = /* @__PURE__ */ He(FC, [["render", DC], ["__scopeId", "data-v-b570be29"]]);
Jo.install = function(e) {
  e.component(Jo.name, Jo);
};
const VC = H({
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
    const n = Ce(), o = S(() => n.appContext.config.globalProperties.$route), a = n.appContext.config.globalProperties.$router, l = S(() => {
      var u, c;
      return ((u = o.value) == null ? void 0 : u.params.type) || ((c = o.value) == null ? void 0 : c.name);
    }), s = k(l.value);
    Ft(() => {
      s.value = e.modelValue || l.value, t("update:modelValue", s.value);
    });
    const r = S(() => o.value.query);
    return { activeName: s, handleClick: (u) => {
      if (e.isRouter) {
        const c = { path: `${u.paneName}`, query: r.value };
        e.replace ? a.replace(c) : a.push(c);
      }
      t("tab-click", u.paneName), t("change", u.paneName), t("update:modelValue", u.paneName);
    } };
  }
}), KC = { class: "tabs-right ml10" };
function WC(e, t, n, o, a, l) {
  const s = G("el-tab-pane"), r = G("el-tabs");
  return T(), P("div", {
    class: M(["k-tabs", { "style-card": !e.type, "style-padding": e.isPadding && !e.type }])
  }, [
    Q(r, Pe({
      class: "flex-tabs",
      type: e.type
    }, e.$attrs, {
      modelValue: e.activeName,
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.activeName = i),
      onTabClick: e.handleClick
    }), {
      default: F(() => [
        (T(!0), P($e, null, ze(e.tabsList, (i) => (T(), V(s, {
          label: i.label,
          name: i.name,
          key: i.name
        }, null, 8, ["label", "name"]))), 128))
      ]),
      _: 1
    }, 16, ["type", "modelValue", "onTabClick"]),
    R("div", KC, [
      W(e.$slots, "default")
    ])
  ], 2);
}
const ea = /* @__PURE__ */ He(VC, [["render", WC]]);
ea.install = function(e) {
  e.component(ea.name, ea);
};
const ar = H({
  name: "KPicker",
  components: {
    batchTable: bo,
    Delete: wd,
    ElRow: D1,
    ElCol: U1,
    ElButton: fu,
    ElIcon: De
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
    const n = S({
      get: () => e.modelValue,
      set: (h) => t("update:modelValue", h)
    });
    Ft(() => {
      e.showCount && n.value.forEach((h) => {
        h.num = h.num ?? 1;
      });
    });
    const o = k(null), a = () => o.value.toggleSelection(), l = (h) => o.value.handleRowClick(h), s = k(1), r = () => {
      s.value = 1, a();
    }, i = (h) => h[e.keyName], u = (h) => h[e.keyId], c = S(() => e.rightWidth), d = S(() => e.height);
    return {
      multipleSelection: n,
      batchTableRef: o,
      currentPage: s,
      emptyHandler: a,
      resetData: r,
      deleteHandler: l,
      getName: i,
      getId: u,
      rightwidth: c,
      autoheight: d
    };
  }
}), Is = () => {
  wl((e) => ({
    f83a4ae0: e.autoheight,
    "264b0824": e.rightwidth
  }));
}, Ls = ar.setup;
ar.setup = Ls ? (e, t) => (Is(), Ls(e, t)) : Is;
const jC = { class: "k-picker flex-column" }, UC = { class: "col-left height-auto flex-column" }, qC = { class: "selete-header flex-between" }, GC = { class: "selete-content flex1" }, YC = { class: "flex flex1 mr20 overflow" }, XC = { class: "text-overflow" };
function QC(e, t, n, o, a, l) {
  const s = G("batchTable"), r = G("el-col"), i = G("delete"), u = G("el-icon"), c = G("el-button"), d = G("el-tooltip"), h = G("k-input-number"), g = G("el-scrollbar"), v = G("el-row");
  return T(), P("div", jC, [
    W(e.$slots, "top", {}, void 0, !0),
    Q(v, {
      gutter: 10,
      class: M(["height-auto mb20", { "custom-right": e.rightWidth }])
    }, {
      default: F(() => [
        Q(r, {
          span: 15,
          class: "height-auto flex1"
        }, {
          default: F(() => [
            R("div", UC, [
              Q(s, {
                ref: "batchTableRef",
                "show-footer": !1,
                height: e.height,
                "table-data": e.tableData,
                "table-column": e.tableColumn,
                "select-list": e.selectList,
                "key-id": e.keyId,
                modelValue: e.multipleSelection,
                "onUpdate:modelValue": t[0] || (t[0] = (f) => e.multipleSelection = f),
                page: e.currentPage,
                "onUpdate:page": t[1] || (t[1] = (f) => e.currentPage = f),
                "scrollbar-always-on": e.scrollbarAlwaysOn
              }, {
                header: F(({ column: f }) => [
                  W(e.$slots, f.header, { column: f }, void 0, !0)
                ]),
                default: F(({ row: f, column: y, index: p }) => [
                  y.custom && p >= 0 ? W(e.$slots, y.custom, {
                    key: 0,
                    row: f,
                    index: p
                  }, void 0, !0) : q("", !0)
                ]),
                _: 3
              }, 8, ["height", "table-data", "table-column", "select-list", "key-id", "modelValue", "page", "scrollbar-always-on"])
            ])
          ]),
          _: 3
        }),
        Q(r, {
          span: 9,
          class: "height-auto flex-column flex1"
        }, {
          default: F(() => [
            R("div", {
              class: "col-right flex-column height-auto",
              style: ye({ height: e.height })
            }, [
              W(e.$slots, "right", {}, () => [
                R("div", qC, [
                  W(e.$slots, "right-header", {}, () => [
                    R("span", null, [
                      Ke("已选择"),
                      R("span", null, "(" + ie(e.multipleSelection.length) + ")", 1)
                    ]),
                    Q(c, {
                      type: "primary",
                      text: "",
                      disabled: !e.multipleSelection.length,
                      onClick: e.emptyHandler
                    }, {
                      default: F(() => [
                        Q(u, null, {
                          default: F(() => [
                            Q(i)
                          ]),
                          _: 1
                        }),
                        Ke(" 清空 ")
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"])
                  ], !0)
                ]),
                R("div", GC, [
                  Q(g, { always: "" }, {
                    default: F(() => [
                      (T(!0), P($e, null, ze(e.multipleSelection, (f) => (T(), P("div", {
                        class: M(["flex-between pl10 pr10", { mt10: e.showCount }]),
                        key: e.getId(f)
                      }, [
                        R("div", YC, [
                          Q(d, {
                            effect: "dark",
                            content: e.getName(f),
                            placement: "top"
                          }, {
                            default: F(() => [
                              R("span", XC, ie(e.getName(f)), 1)
                            ]),
                            _: 2
                          }, 1032, ["content"])
                        ]),
                        e.showCount ? (T(), V(h, {
                          key: 0,
                          modelValue: f.num,
                          "onUpdate:modelValue": (y) => f.num = y,
                          min: 1,
                          class: "width-120 flex-shrink mr10"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : q("", !0),
                        Q(c, {
                          type: "primary",
                          text: "",
                          onClick: (y) => e.deleteHandler(f)
                        }, {
                          default: F(() => [
                            Ke(" 删除 ")
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
    W(e.$slots, "footer", {}, void 0, !0)
  ]);
}
const ta = /* @__PURE__ */ He(ar, [["render", QC], ["__scopeId", "data-v-1ba69535"]]);
ta.install = function(e) {
  e.component(ta.name, ta);
};
const ZC = H({
  name: "KTooltip",
  props: {
    placement: { type: String, default: "top" },
    showIcon: { type: Boolean, default: !1 },
    overflow: { type: Boolean, default: !1 }
  },
  components: { Warning: sf }
});
function JC(e, t, n, o, a, l) {
  const s = G("warning"), r = G("el-icon"), i = G("el-tooltip");
  return T(), P("div", {
    class: M(["flex flex1", { "text-overflow": e.overflow }])
  }, [
    Q(i, Pe(e.$attrs, { placement: e.placement }), {
      content: F(() => [
        W(e.$slots, "content", {}, void 0, !0)
      ]),
      default: F(() => [
        R("div", {
          class: M(["flex-center", { "text-overflow": e.overflow }])
        }, [
          W(e.$slots, "default", {}, void 0, !0),
          e.showIcon ? (T(), V(r, {
            key: 0,
            class: "ml5"
          }, {
            default: F(() => [
              W(e.$slots, "icon", {}, () => [
                Q(s)
              ], !0)
            ]),
            _: 3
          })) : q("", !0)
        ], 2)
      ]),
      _: 3
    }, 16, ["placement"])
  ], 2);
}
const na = /* @__PURE__ */ He(ZC, [["render", JC], ["__scopeId", "data-v-d468c200"]]);
na.install = function(e) {
  e.component(na.name, na);
};
const eS = {
  __name: "main",
  setup(e) {
    return (t, n) => (T(), V(m(Qi), { locale: m(Du) }, {
      default: F(() => [
        W(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale"]));
  }
}, Wu = {
  __name: "datePicker",
  props: {
    type: { type: String, default: "daterange" },
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = S(() => n.type === "datetimerange" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"), a = (d) => {
      const h = /* @__PURE__ */ new Date(), g = /* @__PURE__ */ new Date();
      return h.setTime(h.getTime() - 3600 * 1e3 * 24 * d), h.setHours(0, 0, 0, 0), g.setHours(23, 59, 59, 999), n.type === "date" ? h : [h, g];
    }, l = [
      {
        text: "最近一周",
        value: () => a(7)
      },
      {
        text: "最近一个月",
        value: () => a(30)
      },
      {
        text: "最近三个月",
        value: () => a(90)
      }
    ], s = [new Date(2e3, 1, 1, 0, 0, 0), new Date(2e3, 2, 1, 23, 59, 59)], r = t, i = S({
      get: () => n.modelValue,
      set: (d) => r("update:modelValue", d)
    }), u = (d) => d.getTime() > Date.now(), c = (d) => r("change", d);
    return (d, h) => {
      const g = G("el-date-picker");
      return T(), V(g, Pe({
        modelValue: i.value,
        "onUpdate:modelValue": h[0] || (h[0] = (v) => i.value = v),
        type: e.type,
        "unlink-panels": "",
        "range-separator": "至",
        "start-placeholder": "开始日期",
        "end-placeholder": "结束日期",
        shortcuts: l,
        format: o.value,
        "value-format": "YYYY-MM-DD HH:mm:ss",
        "disabled-date": u,
        "default-time": s,
        editable: !1
      }, d.$attrs, { onChange: c }), null, 16, ["modelValue", "type", "format"]);
    };
  }
}, tS = { class: "date-picker flex" }, nS = {
  __name: "selectType",
  props: {
    daterange: { type: Boolean, default: !1 },
    // 是否选择模式下 是否日期范围
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = k(0), a = k([
      { value: 0, label: "日" },
      { value: 1, label: "周" },
      { value: 2, label: "月" },
      { value: 3, label: "年" }
    ]), l = S({
      get: () => n.modelValue,
      set: (v) => c("update:modelValue", v)
    }), s = (v) => v.getTime() > Date.now(), r = S(() => ({
      0: "YYYY-MM-DD",
      1: "YYYY 第 ww 周",
      2: "YYYY-MM",
      3: "YYYY"
    })[o.value]), i = S(() => ({
      0: n.daterange ? "daterange" : "date",
      1: "week",
      2: "month",
      3: "year"
    })[o.value]), u = S(() => {
      const { label: v } = a.value.filter((f) => f.value === o.value)[0];
      return `选择${v}`;
    }), c = t, d = k("");
    Ft(() => {
      if (Array.isArray(l.value)) {
        const [v, f] = l.value;
        d.value = [v, f];
      }
    });
    const h = (v) => {
      if (v) {
        if (Array.isArray(l.value)) {
          const [f] = l.value;
          l.value = f;
        }
      } else
        n.daterange && (l.value = d.value);
      g();
    }, g = () => {
      c("change", { type: o.value, time: l.value });
    };
    return (v, f) => {
      const y = G("el-option"), p = G("el-select"), w = G("el-date-picker");
      return T(), P("div", tS, [
        Q(p, {
          modelValue: o.value,
          "onUpdate:modelValue": f[0] || (f[0] = (C) => o.value = C),
          class: "width-100 mr10",
          onChange: h
        }, {
          default: F(() => [
            (T(!0), P($e, null, ze(a.value, (C) => (T(), V(y, {
              key: C.value,
              label: C.label,
              value: C.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        R("div", null, [
          e.daterange && !o.value ? (T(), V(Wu, Pe({
            key: 0,
            modelValue: l.value,
            "onUpdate:modelValue": f[1] || (f[1] = (C) => l.value = C)
          }, v.$props, { onChange: g }), null, 16, ["modelValue"])) : (T(), V(w, {
            key: 1,
            modelValue: l.value,
            "onUpdate:modelValue": f[2] || (f[2] = (C) => l.value = C),
            type: i.value,
            format: r.value,
            "value-format": "YYYY-MM-DD HH:mm:ss",
            placeholder: u.value,
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
}, oS = H({
  name: "KDatePicker",
  props: {
    selectType: { type: Boolean, default: !1 }
    // 是否选择模式（年月日）
    // daterange: { type: Boolean, default: false }, // 是否选择模式下 是否日期范围
  },
  components: { configProvider: eS, selectType: nS, datePicker: Wu },
  setup() {
  }
});
function aS(e, t, n, o, a, l) {
  const s = G("selectType"), r = G("datePicker"), i = G("config-provider");
  return T(), V(i, null, {
    default: F(() => [
      e.selectType ? (T(), V(s, sr(Pe({ key: 0 }, e.$attrs)), null, 16)) : (T(), V(r, sr(Pe({ key: 1 }, e.$attrs)), null, 16))
    ]),
    _: 1
  });
}
const oa = /* @__PURE__ */ He(oS, [["render", aS]]);
oa.install = function(e) {
  e.component(oa.name, oa);
};
const lr = H({
  name: "KNumberKeyboard",
  components: { ElButton: fu },
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
    ], o = S(() => (e.decimalPoint && n.push({ name: "." }), n)), a = S({
      get: () => e.modelValue,
      set: (h) => t("update:modelValue", h)
    }), l = () => {
      he(() => t("change", a.value));
    }, s = (h) => {
      if (e.maxlength && a.value.length >= Number(e.maxlength))
        return;
      const g = a.value.indexOf("."), v = a.value.split(".");
      v.length === 2 && (h === "." || v[1].length >= e.precision) || (a.value = `${g === 0 ? 0 : ""}${a.value}${h}`, !e.startZero && a.value.slice(0, 1) === "0" && (a.value = a.value.slice(1) + h), l());
    }, r = (h) => {
      h === "delete" ? a.value = a.value.slice(0, a.value.length - 1) : h === "clear" && (a.value = "", t("clear")), h === "confirm" ? t("confirm") : l();
    }, i = ({ key: h, name: g }) => {
      h ? r(h) : s(g);
    }, u = S(() => `${Number(4 * e.width + 20)}px`), c = S(() => `${e.width}px`), d = S(() => e.decimalPoint ? 3 : 4);
    return {
      keyboardList: o,
      clickHandleBtn: i,
      clickBtn: s,
      totalwidth: u,
      gridwidth: c,
      numberVal: a,
      zerogridend: d
    };
  }
}), Ns = () => {
  wl((e) => ({
    "5f76155e": e.totalwidth,
    af867fde: e.gridwidth,
    c0d11484: e.zerogridend
  }));
}, Rs = lr.setup;
lr.setup = Rs ? (e, t) => (Ns(), Rs(e, t)) : Ns;
const lS = { class: "number-keyboard mt10" }, rS = { class: "number-ul" };
function sS(e, t, n, o, a, l) {
  const s = G("el-button");
  return T(), P("div", lS, [
    R("ul", rS, [
      (T(!0), P($e, null, ze(e.keyboardList, (r, i) => (T(), P("li", {
        key: i,
        class: M(r.class)
      }, [
        Q(s, {
          type: r.type,
          color: e.color,
          onClick: (u) => e.clickHandleBtn(r)
        }, {
          default: F(() => [
            Ke(ie(r.name), 1)
          ]),
          _: 2
        }, 1032, ["type", "color", "onClick"])
      ], 2))), 128))
    ])
  ]);
}
const aa = /* @__PURE__ */ He(lr, [["render", sS], ["__scopeId", "data-v-2e1be318"]]);
aa.install = function(e) {
  e.component(aa.name, aa);
};
const iS = H({
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
    const n = S({
      get: () => e.modelValue,
      set: (r) => t("update:modelValue", r)
    }), o = (r) => e.decimals ? Number(r).toFixed(e.decimals) : r, a = k(null), l = (r = !0) => {
      const i = a.value;
      if (!i)
        return;
      const u = +i.innerText, c = +n.value / 200, d = r && u < Number(n.value) || !r && u > Number(n.value);
      r && u > e.end || u < e.start || (d ? s(i, r ? u + c : u - c, r) : i.interText = o(n.value));
    }, s = (r, i, u = !0) => {
      const c = i < e.start ? e.start : `${e.decimals ? i : Math.floor(i)}`, d = i > e.end ? e.end : `${e.decimals ? i : Math.ceil(i)}`;
      r.innerText = o(u ? d : c);
      const h = setTimeout(() => {
        clearTimeout(h), u ? l() : l(!1);
      }, 5);
    };
    return Me(() => {
      a.value && e.autoinit && l();
    }), bl(() => {
      if (e.autoinit) {
        const r = +a.value.innerText;
        l(r < Number(n.value));
      }
    }), { textValue: n, spanText: a, setDeimals: o };
  }
}), uS = { class: "auto-counter" }, cS = { class: "mr5" }, dS = { class: "ml5" };
function fS(e, t, n, o, a, l) {
  return T(), P("div", uS, [
    R("span", cS, ie(e.prefix), 1),
    R("span", {
      class: "span-text",
      ref: "spanText"
    }, ie(e.autoinit ? e.setDeimals(e.start) : e.setDeimals(e.textValue)), 513),
    R("span", dS, ie(e.suffix), 1)
  ]);
}
const la = /* @__PURE__ */ He(iS, [["render", fS]]);
la.install = function(e) {
  e.component(la.name, la);
};
const pS = H({
  name: "KCollapseButton",
  components: { ElIcon: De, CaretLeft: Mc, CaretRight: Bc },
  props: {
    style: { type: Object, default: () => ({}) },
    position: { type: String, default: "right" }
  },
  emits: ["click"],
  setup(e, { emit: t, slots: n }) {
    const o = k(!1), a = k(null);
    Me(() => {
      const { parentNode: r } = a.value;
      r.style.position = "relative", r.style.overflow = "initial";
    });
    const l = S(() => {
      const { clientWidth: r, clientHeight: i } = a.value || {}, {
        top: u,
        right: c,
        width: d,
        height: h,
        left: g,
        bottom: v
      } = e.style, f = {
        right: {
          top: u ?? "50%",
          right: c ?? `-${r}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: u ? "0px" : `-${Math.ceil(i / 2)}px`
        },
        left: {
          top: u ?? "50%",
          left: g ?? `-${r}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: u ? "0px" : `-${Math.ceil(i / 2)}px`,
          transform: n != null && n.default ? "" : "rotate(180deg)"
        },
        top: {
          left: g ?? "50%",
          marginLeft: g ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(r / 2)}px` : "0px",
          top: u ?? (n == null ? void 0 : n.default) ? `-${i}px` : `-${Math.ceil(i / 2 + r / 2)}px`,
          borderRadius: n != null && n.default ? "5px 5px 0 0" : "0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(-90deg)"
        },
        bottom: {
          left: g ?? "50%",
          bottom: v ?? (n == null ? void 0 : n.default) ? `-${i}px` : `-${Math.ceil(i / 2 + r / 2)}px`,
          marginLeft: g ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(r / 2)}px` : "0px",
          borderRadius: n != null && n.default ? "0 0 5px 5px" : " 0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(90deg)"
        }
      };
      return {
        width: d ?? (n == null ? void 0 : n.default) ? "" : "10px",
        height: h ?? (n == null ? void 0 : n.default) ? "" : "68px",
        ...f[e.position]
      };
    });
    return {
      isCollapse: o,
      collapse: a,
      clickHandle: () => {
        o.value = !o.value, t("click");
      },
      collapseStyle: l
    };
  }
});
function vS(e, t, n, o, a, l) {
  const s = G("CaretRight"), r = G("CaretLeft"), i = G("el-icon");
  return T(), P("div", {
    class: "collapse-button flex-center pointer",
    style: ye(e.collapseStyle),
    ref: "collapse",
    onClick: t[0] || (t[0] = (...u) => e.clickHandle && e.clickHandle(...u))
  }, [
    W(e.$slots, "default", {}, () => [
      Q(i, {
        size: 18,
        color: "#999999"
      }, {
        default: F(() => [
          e.isCollapse ? (T(), V(s, { key: 0 })) : (T(), V(r, { key: 1 }))
        ]),
        _: 1
      })
    ], !0)
  ], 4);
}
const ra = /* @__PURE__ */ He(pS, [["render", vS], ["__scopeId", "data-v-53ad025a"]]);
ra.install = function(e) {
  e.component(ra.name, ra);
};
const hS = {
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
function gS(e, t) {
  const n = k(null), o = k(100), a = k(null), l = () => {
    var w;
    return ((w = document.querySelector(".card-row")) == null ? void 0 : w.offsetHeight) ?? 10;
  }, s = () => {
    var w;
    return ((w = document.querySelector(".card-row")) == null ? void 0 : w.offsetWidth) ?? 10;
  }, r = k(0), i = k(20), u = k(0), c = k(e.columns), d = (w) => Math.ceil(w / l()), h = () => {
    const { clientHeight: w = 100 } = n.value.wrapRef || {};
    return Math.floor(w / (l() + e.gridGap)) + r.value || 1;
  }, g = S(() => e.data.map((w, C) => ({ ...w, rowIndex: C }))), v = S(() => g.value.filter((w, C) => C >= r.value * c.value && C < i.value * c.value)), f = () => {
    const w = c.value * e.gridGap;
    o.value = Math.ceil(e.data.length / c.value * l()) + w;
  }, y = (w) => {
    const { scrollTop: C, clientHeight: b } = n.value.wrapRef, $ = o.value - b - C;
    t("scroll", { distance: $, ...w }), r.value = d(C), i.value = h(), u.value = C;
  };
  Y(() => e.data, () => {
    f(), i.value = h();
  });
  const p = () => {
    if (a.value) {
      const { clientWidth: w = 500 } = n.value.wrapRef;
      c.value = Math.floor(w / s()) || 1, f(), u.value = 0, r.value = 0, n.value.setScrollTop(0), i.value = h();
    }
  };
  return Me(() => {
    p(), window.addEventListener("resize", p);
  }), To(() => {
    window.removeEventListener("resize", p);
  }), {
    scrollbarRef: n,
    containHeight: o,
    cardRowRef: a,
    onScroll: y,
    startOffset: u,
    viewListRanges: v,
    resetViewport: p
  };
}
const rr = H({
  name: "KCardList",
  props: hS,
  emits: ["click", "mouseenter", "mouseleave", "update:modelValue", "scroll"],
  setup(e, { emit: t }) {
    const n = S(() => `${Number((100 / e.columns).toFixed(1))}%`), o = S(() => `${e.gridGap}px`), a = S(() => `${e.width}`), l = (y) => y.disabled || e.disabled, s = S(() => e.rowClass === "border" ? "border-row" : e.rowClass === "shadow" ? "box-shadow" : e.rowClass), r = k("");
    Ft(() => {
      r.value = e.modelValue;
    });
    const i = (y) => {
      l(y) || (e.highlight && (r.value = y[e.keyId], t("update:modelValue", y[e.keyId])), t("click", y));
    }, {
      scrollbarRef: u,
      containHeight: c,
      cardRowRef: d,
      startOffset: h,
      viewListRanges: g,
      onScroll: v,
      resetViewport: f
    } = gS(e, t);
    return {
      calcnum: n,
      gridgap: o,
      columnwidth: a,
      rowClassStyle: s,
      clickHandle: i,
      selectedId: r,
      bitNotAllowed: l,
      scrollbarRef: u,
      containHeight: c,
      cardRowRef: d,
      startOffset: h,
      viewListRanges: g,
      onScroll: v,
      resetViewport: f
    };
  }
}), Fs = () => {
  wl((e) => ({
    "7d46f10c": e.gridgap,
    "2e51acf2": e.columns,
    "5e29b28a": e.calcnum,
    "221aa64c": e.columnwidth,
    cb2c4c58: e.imgheight
  }));
}, Bs = rr.setup;
rr.setup = Bs ? (e, t) => (Fs(), Bs(e, t)) : Fs;
const mS = { class: "card-contain" }, bS = ["onClick", "onMouseenter", "onMouseleave"], yS = { class: "card-list-content" }, wS = { class: "sign" };
function CS(e, t, n, o, a, l) {
  const s = G("el-scrollbar");
  return T(), V(s, Pe({
    ref: "scrollbarRef",
    "data-test": "card-list"
  }, e.$attrs, {
    always: "",
    onScroll: e.onScroll
  }), {
    default: F(() => [
      R("div", mS, [
        R("div", {
          class: "card-wrap",
          style: ye({ height: `${e.containHeight}px` })
        }, null, 4),
        R("div", {
          class: "card-list",
          style: ye({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          R("div", {
            class: M([e.fixedColumn ? "card-fixed-coumn" : "card-content", { "fixed-width": e.width }])
          }, [
            (T(!0), P($e, null, ze(e.viewListRanges, (r, i) => (T(), P("div", {
              class: M(["card-row border-radius pointer", [e.selectedId === r[e.keyId] ? "select-style" : "", e.bitNotAllowed(r) ? "not-allowed" : "hover-style", e.rowClassStyle]]),
              key: i,
              onClick: (u) => e.clickHandle(r),
              ref_for: !0,
              ref: "cardRowRef",
              onMouseenter: (u) => e.$emit("mouseenter", r),
              onMouseleave: (u) => e.$emit("mouseleave", r)
            }, [
              R("div", yS, [
                W(e.$slots, "default", {
                  row: r,
                  index: r.rowIndex
                }, () => [
                  Ke(ie(r.rowIndex), 1)
                ], !0)
              ]),
              R("div", wS, [
                W(e.$slots, "sign", {
                  row: r,
                  index: r.rowIndex
                }, void 0, !0)
              ])
            ], 42, bS))), 128))
          ], 2)
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["onScroll"]);
}
const sa = /* @__PURE__ */ He(rr, [["render", CS], ["__scopeId", "data-v-6f6f8503"]]);
sa.install = function(e) {
  e.component(sa.name, sa);
};
const Ua = {
  KButton: Vo,
  KInput: co,
  KInputNumber: Ko,
  KTable: Xo,
  KTableV2: Qo,
  KPage: Nn,
  KBatchTable: bo,
  KDialog: Zo,
  KBreadcrumb: Jo,
  KTabs: ea,
  KPicker: ta,
  KTooltip: na,
  KDatePicker: oa,
  KNumberKeyboard: aa,
  KVirtualList: mo,
  KAutoCounter: la,
  KCollapseButton: ra,
  KCardList: sa,
  install: () => {
  }
};
function SS(e, t, n = 0) {
  return e.substr(n, t.length) === t;
}
Ua.install = function(e) {
  Object.keys(Ua).forEach((t) => {
    if (SS(t, "K")) {
      const n = Ua[t];
      e.component(n.name, n);
    }
  }), Object.keys(uo).forEach((t) => {
    e.directive(t, uo[t]);
  });
};
export {
  la as KAutoCounter,
  bo as KBatchTable,
  Jo as KBreadcrumb,
  Vo as KButton,
  sa as KCardList,
  ra as KCollapseButton,
  oa as KDatePicker,
  Zo as KDialog,
  co as KInput,
  Ko as KInputNumber,
  aa as KNumberKeyboard,
  Nn as KPage,
  ta as KPicker,
  Xo as KTable,
  Qo as KTableV2,
  ea as KTabs,
  na as KTooltip,
  Ua as KUI,
  mo as KVirtualList,
  uo as directives
};
