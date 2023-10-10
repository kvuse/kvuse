import { defineComponent as H, ref as k, computed as _, resolveComponent as q, openBlock as E, createBlock as V, mergeProps as xe, withModifiers as Xe, withCtx as R, renderSlot as K, createElementBlock as P, createCommentVNode as G, withKeys as at, createSlots as $n, createElementVNode as N, watchEffect as Nt, watch as Y, nextTick as he, normalizeClass as M, createVNode as Z, unref as h, getCurrentScope as Wu, onScopeDispose as ju, getCurrentInstance as Ce, onMounted as Me, warn as Uu, inject as ve, isRef as Rn, shallowRef as Sn, onBeforeUnmount as Rt, onBeforeMount as hr, provide as lt, toRef as Lt, onUnmounted as To, useAttrs as qu, useSlots as gl, withDirectives as We, Fragment as $e, resolveDynamicComponent as Ze, toDisplayString as ie, normalizeStyle as we, vShow as fn, Transition as yo, reactive as Qn, onUpdated as gr, cloneVNode as Gu, Text as Bs, Comment as zs, Teleport as Yu, readonly as Xu, onDeactivated as Qu, toRaw as Fn, vModelCheckbox as al, createTextVNode as Ke, toRefs as Zn, triggerRef as ao, resolveDirective as mr, renderList as ze, vModelText as Zu, h as ae, useCssVars as br, normalizeProps as aa } from "vue";
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
      const { inter: l, point: r } = t.modifiers, s = r ? t.value : 2, a = n >= 0 ? `￥${Number(n).toFixed(s)}` : `-￥${Math.abs(Number(n.toFixed(s)))}`;
      l ? o = n >= 0 ? `￥${n}` : `-￥${Math.abs(n)}` : o = n ? a : "￥0.00", e.innerHTML = `${o}`;
    },
    updated: (e, t) => {
      const { point: n } = t.modifiers, o = n ? t.value : 2, l = t.arg === "value" && t.value ? `￥${Number(t.value).toFixed(o)}` : e.textContent;
      e.innerHTML = l;
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
        const l = Date.now(), r = /^[a-zA-Z]{2,}/.test(o.key) ? o.key : o.key.toLocaleUpperCase(), { buttonKey: s, isCombination: a = 0 } = t.value || e.valueKeys || {}, i = document.contains(e), u = o.target.tagName === "TEXTAREA" || o.target.tagName === "INPUT", {
          dialog: c,
          focus: d,
          long: v,
          any: g,
          fast: p
        } = t.modifiers;
        if (!i && !v) {
          document.removeEventListener("keydown", e.handler);
          return;
        }
        if (g && t.arg) {
          t.arg(o);
          return;
        }
        const f = p ? l - n > 30 : !0, m = document.querySelector(".el-popup-parent--hidden") || document.querySelector(".is-message-box");
        if (n = l, m && !c)
          return;
        const b = o.ctrlKey || o.metaKey, w = a === +b && s === r;
        (!u || d || a) && w && f && t.arg && t.arg(o);
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
        const { once: l } = t.modifiers;
        l || (e.timer = setTimeout(() => {
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
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, Ju = H({
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
    const o = k(!0), l = k(null), r = () => {
      o.value && (o.value = !1, t("click")), s();
    }, s = () => {
      clearTimeout(l.value), l.value = setTimeout(() => {
        o.value = !0;
      }, 800);
    }, a = _(() => {
      const { border: i } = e, { type: u = "text" } = n;
      return i ? {
        backgroundColor: "transparent",
        color: `var(--el-color-${u})`
      } : {};
    });
    return { onclick: r, buttonStatus: o, buttonStyle: a };
  }
}), ec = {
  key: 0,
  class: "el-icon-lock el-icon--right"
};
function tc(e, t, n, o, l, r) {
  const s = q("el-button");
  return E(), V(s, xe({
    disabled: !e.buttonStatus || e.disabled,
    style: e.buttonStyle,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: Xe(e.onclick, ["stop"])
  }), {
    default: R(() => [
      K(e.$slots, "default"),
      e.iconLock ? (E(), P("i", ec)) : G("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "style", "click-state", "onClick"]);
}
const Ho = /* @__PURE__ */ He(Ju, [["render", tc]]);
Ho.install = function(e) {
  e.component(Ho.name, Ho);
};
const nc = H({
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
    const o = k(null), l = k(!0), r = _({
      get() {
        return e.modelValue;
      },
      set(c) {
        s(c);
      }
    }), s = (c) => {
      let d = c, v = n.max;
      if (e.type === "number") {
        if (d = d.replace(/[^\d.]/g, ""), d = d.replace(/^\./g, ""), d = d.replace(/\.{2,}/g, "."), d = d.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), d.indexOf(".") < 0 && d !== "" && d.substr(0, 1) === "0" && d.length === 2 && (d = d.substr(1, d.length)), d !== "")
          if (d.indexOf(".") > 0) {
            if (e.point) {
              const g = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
              d = d.match(g)[0] || null;
            }
          } else
            d === "." && (d = "");
        v = n.max ?? 999999.99;
      } else
        e.type === "integer" ? (d = d.replace(/[^\d]/g, ""), v = n.max ?? 999999) : e.type === "intText" && (d = d.replace(/[^\w]/g, ""));
      !n.maxlength && v !== void 0 && d && Number(d) > Number(v) && (d = v), n.min !== void 0 && d && Number(d) < Number(n.min) && (d = n.min), t("update:modelValue", d);
    }, a = () => {
      l.value && (l.value = !1, r.value && t("enter")), u();
    }, i = (c) => {
      t("change", c);
    }, u = () => {
      clearTimeout(o.value), o.value = setTimeout(() => {
        l.value = !0;
      }, 800);
    };
    return {
      inputValue: r,
      changeValue: i,
      searchContent: a
    };
  }
});
function oc(e, t, n, o, l, r) {
  const s = q("el-input");
  return E(), V(s, xe({
    modelValue: e.inputValue,
    "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputValue = a),
    modelModifiers: { trim: !0 }
  }, e.$attrs, {
    onKeyup: at(e.searchContent, ["enter"]),
    onChange: e.changeValue
  }), $n({ _: 2 }, [
    e.$slots.append ? {
      name: "append",
      fn: R(() => [
        K(e.$slots, "append")
      ]),
      key: "0"
    } : void 0,
    e.$slots.prepend ? {
      name: "prepend",
      fn: R(() => [
        K(e.$slots, "prepend")
      ]),
      key: "1"
    } : void 0,
    e.$slots.prefix ? {
      name: "prefix",
      fn: R(() => [
        K(e.$slots, "prefix")
      ]),
      key: "2"
    } : void 0,
    e.$slots.suffix ? {
      name: "suffix",
      fn: R(() => [
        K(e.$slots, "suffix")
      ]),
      key: "3"
    } : void 0
  ]), 1040, ["modelValue", "onKeyup", "onChange"]);
}
const co = /* @__PURE__ */ He(nc, [["render", oc]]);
co.install = function(e) {
  e.component(co.name, co);
};
/*! Element Plus Icons Vue v2.1.0 */
var Fe = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, l] of t)
    n[o] = l;
  return n;
}, lc = {
  name: "ArrowDown"
}, rc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ac = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), sc = [
  ac
];
function ic(e, t, n, o, l, r) {
  return E(), P("svg", rc, sc);
}
var Hs = /* @__PURE__ */ Fe(lc, [["render", ic], ["__file", "arrow-down.vue"]]), uc = {
  name: "ArrowLeft"
}, cc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dc = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), fc = [
  dc
];
function pc(e, t, n, o, l, r) {
  return E(), P("svg", cc, fc);
}
var vc = /* @__PURE__ */ Fe(uc, [["render", pc], ["__file", "arrow-left.vue"]]), hc = {
  name: "ArrowRight"
}, gc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mc = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), bc = [
  mc
];
function yc(e, t, n, o, l, r) {
  return E(), P("svg", gc, bc);
}
var yr = /* @__PURE__ */ Fe(hc, [["render", yc], ["__file", "arrow-right.vue"]]), wc = {
  name: "ArrowUp"
}, Cc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Sc = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), _c = [
  Sc
];
function $c(e, t, n, o, l, r) {
  return E(), P("svg", Cc, _c);
}
var Ec = /* @__PURE__ */ Fe(wc, [["render", $c], ["__file", "arrow-up.vue"]]), Tc = {
  name: "CaretLeft"
}, kc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Oc = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M672 192 288 511.936 672 832z"
  },
  null,
  -1
  /* HOISTED */
), xc = [
  Oc
];
function Pc(e, t, n, o, l, r) {
  return E(), P("svg", kc, xc);
}
var Ac = /* @__PURE__ */ Fe(Tc, [["render", Pc], ["__file", "caret-left.vue"]]), Mc = {
  name: "CaretRight"
}, Ic = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Lc = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M384 192v640l384-320.064z"
  },
  null,
  -1
  /* HOISTED */
), Nc = [
  Lc
];
function Rc(e, t, n, o, l, r) {
  return E(), P("svg", Ic, Nc);
}
var Fc = /* @__PURE__ */ Fe(Mc, [["render", Rc], ["__file", "caret-right.vue"]]), Bc = {
  name: "CircleCheck"
}, zc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hc = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Dc = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), Vc = [
  Hc,
  Dc
];
function Kc(e, t, n, o, l, r) {
  return E(), P("svg", zc, Vc);
}
var Wc = /* @__PURE__ */ Fe(Bc, [["render", Kc], ["__file", "circle-check.vue"]]), jc = {
  name: "CircleClose"
}, Uc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qc = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), Gc = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Yc = [
  qc,
  Gc
];
function Xc(e, t, n, o, l, r) {
  return E(), P("svg", Uc, Yc);
}
var wr = /* @__PURE__ */ Fe(jc, [["render", Xc], ["__file", "circle-close.vue"]]), Qc = {
  name: "Close"
}, Zc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Jc = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), ed = [
  Jc
];
function td(e, t, n, o, l, r) {
  return E(), P("svg", Zc, ed);
}
var sa = /* @__PURE__ */ Fe(Qc, [["render", td], ["__file", "close.vue"]]), nd = {
  name: "DArrowLeft"
}, od = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ld = /* @__PURE__ */ N(
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
function ad(e, t, n, o, l, r) {
  return E(), P("svg", od, rd);
}
var sd = /* @__PURE__ */ Fe(nd, [["render", ad], ["__file", "d-arrow-left.vue"]]), id = {
  name: "DArrowRight"
}, ud = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, cd = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
  },
  null,
  -1
  /* HOISTED */
), dd = [
  cd
];
function fd(e, t, n, o, l, r) {
  return E(), P("svg", ud, dd);
}
var pd = /* @__PURE__ */ Fe(id, [["render", fd], ["__file", "d-arrow-right.vue"]]), vd = {
  name: "Delete"
}, hd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gd = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
  },
  null,
  -1
  /* HOISTED */
), md = [
  gd
];
function bd(e, t, n, o, l, r) {
  return E(), P("svg", hd, md);
}
var yd = /* @__PURE__ */ Fe(vd, [["render", bd], ["__file", "delete.vue"]]), wd = {
  name: "Hide"
}, Cd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Sd = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), _d = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), $d = [
  Sd,
  _d
];
function Ed(e, t, n, o, l, r) {
  return E(), P("svg", Cd, $d);
}
var Td = /* @__PURE__ */ Fe(wd, [["render", Ed], ["__file", "hide.vue"]]), kd = {
  name: "Loading"
}, Od = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xd = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), Pd = [
  xd
];
function Ad(e, t, n, o, l, r) {
  return E(), P("svg", Od, Pd);
}
var Cr = /* @__PURE__ */ Fe(kd, [["render", Ad], ["__file", "loading.vue"]]), Md = {
  name: "Minus"
}, Id = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ld = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
  },
  null,
  -1
  /* HOISTED */
), Nd = [
  Ld
];
function Rd(e, t, n, o, l, r) {
  return E(), P("svg", Id, Nd);
}
var Fd = /* @__PURE__ */ Fe(Md, [["render", Rd], ["__file", "minus.vue"]]), Bd = {
  name: "MoreFilled"
}, zd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hd = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
  },
  null,
  -1
  /* HOISTED */
), Dd = [
  Hd
];
function Vd(e, t, n, o, l, r) {
  return E(), P("svg", zd, Dd);
}
var ia = /* @__PURE__ */ Fe(Bd, [["render", Vd], ["__file", "more-filled.vue"]]), Kd = {
  name: "Plus"
}, Wd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jd = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  },
  null,
  -1
  /* HOISTED */
), Ud = [
  jd
];
function qd(e, t, n, o, l, r) {
  return E(), P("svg", Wd, Ud);
}
var Gd = /* @__PURE__ */ Fe(Kd, [["render", qd], ["__file", "plus.vue"]]), Yd = {
  name: "View"
}, Xd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Qd = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), Zd = [
  Qd
];
function Jd(e, t, n, o, l, r) {
  return E(), P("svg", Xd, Zd);
}
var ef = /* @__PURE__ */ Fe(Yd, [["render", Jd], ["__file", "view.vue"]]), tf = {
  name: "Warning"
}, nf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, of = /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), lf = [
  of
];
function rf(e, t, n, o, l, r) {
  return E(), P("svg", nf, lf);
}
var af = /* @__PURE__ */ Fe(tf, [["render", rf], ["__file", "warning.vue"]]);
const sf = H({
  name: "KInputNumber",
  components: { Minus: Fd, Plus: Gd, KInput: co },
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
    const n = k(1), o = k(null), l = k(!1), r = _(() => e.modelValue <= e.min), s = _(() => e.modelValue >= e.max), a = _({
      get: () => e.modelValue,
      set: (m) => {
        t("update:modelValue", m);
      }
    }), i = (m) => t("blur", m), u = (m) => t("focus", m), c = (m) => t("enter", m), d = (m) => {
      he(() => {
        const b = m === "" ? void 0 : Number(m);
        (!Number.isNaN(b) || m === "") && f(b);
      });
    }, v = (m) => {
      l.value = !m, o.value = m;
    }, g = k(-1);
    Nt(() => {
      n.value = e.modelValue;
    }), Y(() => g.value, (m) => {
      m < 0 && (a.value = e.modelValue, d(n.value));
    }, { immediate: !0 });
    const p = (m) => {
      const b = m === "increase", w = b ? s.value : r.value;
      if (e.disabled || w)
        return;
      const C = l.value ? 0 : a.value, y = o.value ? n.value : C, S = b ? y + e.step : y - e.step;
      f(S);
    }, f = (m) => {
      o.value = m;
      let b = m;
      g.value !== b && (g.value = m, b >= e.max && (b = e.max), b <= e.min && (b = e.min), o.value === void 0 && (b = 1), t("update:modelValue", b), t("change", b, g.value), n.value = b);
    };
    return {
      currentValue: n,
      minDisabled: r,
      maxDisabled: s,
      handleBlur: i,
      handleFocus: u,
      handleKeyUp: c,
      handleInputChange: d,
      handleInput: v,
      clickBtnHandle: p
    };
  }
});
function uf(e, t, n, o, l, r) {
  const s = q("minus"), a = q("el-icon"), i = q("plus"), u = q("k-input");
  return E(), P("div", {
    class: M(["el-input-number", { "is-disabled": e.disabled }, { "is-without-controls": !e.controls }, e.size ? "el-input-number--" + e.size : ""])
  }, [
    e.controls ? (E(), P("span", {
      key: 0,
      class: M(["el-input-number__decrease", { "is-disabled": e.minDisabled }]),
      role: "button",
      onClick: t[0] || (t[0] = (c) => e.clickBtnHandle("decrease"))
    }, [
      Z(a, { class: "el-input__icon" }, {
        default: R(() => [
          Z(s)
        ]),
        _: 1
      })
    ], 2)) : G("", !0),
    e.controls ? (E(), P("span", {
      key: 1,
      class: M(["el-input-number__increase", { "is-disabled": e.maxDisabled }]),
      role: "button",
      onClick: t[1] || (t[1] = (c) => e.clickBtnHandle("increase"))
    }, [
      Z(a, { class: "el-input__icon" }, {
        default: R(() => [
          Z(i)
        ]),
        _: 1
      })
    ], 2)) : G("", !0),
    Z(u, xe({
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
      onKeyup: at(e.handleKeyUp, ["enter"])
    }), null, 16, ["modelValue", "disabled", "type", "onBlur", "onFocus", "onChange", "onInput", "onKeyup"])
  ], 2);
}
const Do = /* @__PURE__ */ He(sf, [["render", uf]]);
Do.install = function(e) {
  e.component(Do.name, Do);
};
const Jt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (l) => {
  const r = e == null ? void 0 : e(l);
  if (n === !1 || !r)
    return t == null ? void 0 : t(l);
};
var ua;
const Le = typeof window < "u", cf = (e) => typeof e == "string", Ds = () => {
}, Vs = Le && ((ua = window == null ? void 0 : window.navigator) == null ? void 0 : ua.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ks(e) {
  return typeof e == "function" ? e() : h(e);
}
function df(e) {
  return e;
}
function Sr(e) {
  return Wu() ? (ju(e), !0) : !1;
}
function ff(e, t = !0) {
  Ce() ? Me(e) : t ? e() : he(e);
}
function cn(e) {
  var t;
  const n = Ks(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const _r = Le ? window : void 0;
function en(...e) {
  let t, n, o, l;
  if (cf(e[0]) || Array.isArray(e[0]) ? ([n, o, l] = e, t = _r) : [t, n, o, l] = e, !t)
    return Ds;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], s = () => {
    r.forEach((c) => c()), r.length = 0;
  }, a = (c, d, v, g) => (c.addEventListener(d, v, g), () => c.removeEventListener(d, v, g)), i = Y(() => [cn(t), Ks(l)], ([c, d]) => {
    s(), c && r.push(...n.flatMap((v) => o.map((g) => a(c, v, g, d))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), s();
  };
  return Sr(u), u;
}
let ca = !1;
function pf(e, t, n = {}) {
  const { window: o = _r, ignore: l = [], capture: r = !0, detectIframe: s = !1 } = n;
  if (!o)
    return;
  Vs && !ca && (ca = !0, Array.from(o.document.body.children).forEach((v) => v.addEventListener("click", Ds)));
  let a = !0;
  const i = (v) => l.some((g) => {
    if (typeof g == "string")
      return Array.from(o.document.querySelectorAll(g)).some((p) => p === v.target || v.composedPath().includes(p));
    {
      const p = cn(g);
      return p && (v.target === p || v.composedPath().includes(p));
    }
  }), c = [
    en(o, "click", (v) => {
      const g = cn(e);
      if (!(!g || g === v.target || v.composedPath().includes(g))) {
        if (v.detail === 0 && (a = !i(v)), !a) {
          a = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: r }),
    en(o, "pointerdown", (v) => {
      const g = cn(e);
      g && (a = !v.composedPath().includes(g) && !i(v));
    }, { passive: !0 }),
    s && en(o, "blur", (v) => {
      var g;
      const p = cn(e);
      ((g = o.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !(p != null && p.contains(o.document.activeElement)) && t(v);
    })
  ].filter(Boolean);
  return () => c.forEach((v) => v());
}
function vf(e, t = !1) {
  const n = k(), o = () => n.value = !!e();
  return o(), ff(o, t), n;
}
const da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, fa = "__vueuse_ssr_handlers__";
da[fa] = da[fa] || {};
var pa = Object.getOwnPropertySymbols, hf = Object.prototype.hasOwnProperty, gf = Object.prototype.propertyIsEnumerable, mf = (e, t) => {
  var n = {};
  for (var o in e)
    hf.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && pa)
    for (var o of pa(e))
      t.indexOf(o) < 0 && gf.call(e, o) && (n[o] = e[o]);
  return n;
};
function Bn(e, t, n = {}) {
  const o = n, { window: l = _r } = o, r = mf(o, ["window"]);
  let s;
  const a = vf(() => l && "ResizeObserver" in l), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Y(() => cn(e), (d) => {
    i(), a.value && l && d && (s = new ResizeObserver(t), s.observe(d, r));
  }, { immediate: !0, flush: "post" }), c = () => {
    i(), u();
  };
  return Sr(c), {
    isSupported: a,
    stop: c
  };
}
var va;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(va || (va = {}));
var bf = Object.defineProperty, ha = Object.getOwnPropertySymbols, yf = Object.prototype.hasOwnProperty, wf = Object.prototype.propertyIsEnumerable, ga = (e, t, n) => t in e ? bf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Cf = (e, t) => {
  for (var n in t || (t = {}))
    yf.call(t, n) && ga(e, n, t[n]);
  if (ha)
    for (var n of ha(t))
      wf.call(t, n) && ga(e, n, t[n]);
  return e;
};
const Sf = {
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
Cf({
  linear: df
}, Sf);
const _f = () => Le && /firefox/i.test(window.navigator.userAgent);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const wo = () => {
}, $f = Object.prototype.hasOwnProperty, En = (e, t) => $f.call(e, t), Tn = Array.isArray, It = (e) => typeof e == "function", _t = (e) => typeof e == "string", Et = (e) => e !== null && typeof e == "object", Ef = Object.prototype.toString, Tf = (e) => Ef.call(e), Al = (e) => Tf(e).slice(8, -1);
var kf = typeof global == "object" && global && global.Object === Object && global;
const Ws = kf;
var Of = typeof self == "object" && self && self.Object === Object && self, xf = Ws || Of || Function("return this")();
const Ft = xf;
var Pf = Ft.Symbol;
const Kt = Pf;
var js = Object.prototype, Af = js.hasOwnProperty, Mf = js.toString, so = Kt ? Kt.toStringTag : void 0;
function If(e) {
  var t = Af.call(e, so), n = e[so];
  try {
    e[so] = void 0;
    var o = !0;
  } catch {
  }
  var l = Mf.call(e);
  return o && (t ? e[so] = n : delete e[so]), l;
}
var Lf = Object.prototype, Nf = Lf.toString;
function Rf(e) {
  return Nf.call(e);
}
var Ff = "[object Null]", Bf = "[object Undefined]", ma = Kt ? Kt.toStringTag : void 0;
function xn(e) {
  return e == null ? e === void 0 ? Bf : Ff : ma && ma in Object(e) ? If(e) : Rf(e);
}
function pn(e) {
  return e != null && typeof e == "object";
}
var zf = "[object Symbol]";
function ml(e) {
  return typeof e == "symbol" || pn(e) && xn(e) == zf;
}
function Us(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, l = Array(o); ++n < o; )
    l[n] = t(e[n], n, e);
  return l;
}
var Hf = Array.isArray;
const vt = Hf;
var Df = 1 / 0, ba = Kt ? Kt.prototype : void 0, ya = ba ? ba.toString : void 0;
function qs(e) {
  if (typeof e == "string")
    return e;
  if (vt(e))
    return Us(e, qs) + "";
  if (ml(e))
    return ya ? ya.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Df ? "-0" : t;
}
var Vf = /\s/;
function Kf(e) {
  for (var t = e.length; t-- && Vf.test(e.charAt(t)); )
    ;
  return t;
}
var Wf = /^\s+/;
function jf(e) {
  return e && e.slice(0, Kf(e) + 1).replace(Wf, "");
}
function ht(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var wa = 0 / 0, Uf = /^[-+]0x[0-9a-f]+$/i, qf = /^0b[01]+$/i, Gf = /^0o[0-7]+$/i, Yf = parseInt;
function jl(e) {
  if (typeof e == "number")
    return e;
  if (ml(e))
    return wa;
  if (ht(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ht(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = jf(e);
  var n = qf.test(e);
  return n || Gf.test(e) ? Yf(e.slice(2), n ? 2 : 8) : Uf.test(e) ? wa : +e;
}
var Ca = 1 / 0, Xf = 17976931348623157e292;
function Qf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = jl(e), e === Ca || e === -Ca) {
    var t = e < 0 ? -1 : 1;
    return t * Xf;
  }
  return e === e ? e : 0;
}
function Zf(e) {
  var t = Qf(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function $r(e) {
  return e;
}
var Jf = "[object AsyncFunction]", ep = "[object Function]", tp = "[object GeneratorFunction]", np = "[object Proxy]";
function Er(e) {
  if (!ht(e))
    return !1;
  var t = xn(e);
  return t == ep || t == tp || t == Jf || t == np;
}
var op = Ft["__core-js_shared__"];
const Ml = op;
var Sa = function() {
  var e = /[^.]+$/.exec(Ml && Ml.keys && Ml.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function lp(e) {
  return !!Sa && Sa in e;
}
var rp = Function.prototype, ap = rp.toString;
function Pn(e) {
  if (e != null) {
    try {
      return ap.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var sp = /[\\^$.*+?()[\]{}|]/g, ip = /^\[object .+?Constructor\]$/, up = Function.prototype, cp = Object.prototype, dp = up.toString, fp = cp.hasOwnProperty, pp = RegExp(
  "^" + dp.call(fp).replace(sp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function vp(e) {
  if (!ht(e) || lp(e))
    return !1;
  var t = Er(e) ? pp : ip;
  return t.test(Pn(e));
}
function hp(e, t) {
  return e == null ? void 0 : e[t];
}
function An(e, t) {
  var n = hp(e, t);
  return vp(n) ? n : void 0;
}
var gp = An(Ft, "WeakMap");
const Ul = gp;
var _a = Object.create, mp = function() {
  function e() {
  }
  return function(t) {
    if (!ht(t))
      return {};
    if (_a)
      return _a(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const bp = mp;
function yp(e, t, n) {
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
function wp(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var Cp = 800, Sp = 16, _p = Date.now;
function $p(e) {
  var t = 0, n = 0;
  return function() {
    var o = _p(), l = Sp - (o - n);
    if (n = o, l > 0) {
      if (++t >= Cp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ep(e) {
  return function() {
    return e;
  };
}
var Tp = function() {
  try {
    var e = An(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const sl = Tp;
var kp = sl ? function(e, t) {
  return sl(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ep(t),
    writable: !0
  });
} : $r;
const Op = kp;
var xp = $p(Op);
const Gs = xp;
function Pp(e, t, n, o) {
  for (var l = e.length, r = n + (o ? 1 : -1); o ? r-- : ++r < l; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var Ap = 9007199254740991, Mp = /^(?:0|[1-9]\d*)$/;
function bl(e, t) {
  var n = typeof e;
  return t = t ?? Ap, !!t && (n == "number" || n != "symbol" && Mp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Tr(e, t, n) {
  t == "__proto__" && sl ? sl(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function ko(e, t) {
  return e === t || e !== e && t !== t;
}
var Ip = Object.prototype, Lp = Ip.hasOwnProperty;
function Ys(e, t, n) {
  var o = e[t];
  (!(Lp.call(e, t) && ko(o, n)) || n === void 0 && !(t in e)) && Tr(e, t, n);
}
function Np(e, t, n, o) {
  var l = !n;
  n || (n = {});
  for (var r = -1, s = t.length; ++r < s; ) {
    var a = t[r], i = o ? o(n[a], e[a], a, n, e) : void 0;
    i === void 0 && (i = e[a]), l ? Tr(n, a, i) : Ys(n, a, i);
  }
  return n;
}
var $a = Math.max;
function Xs(e, t, n) {
  return t = $a(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, l = -1, r = $a(o.length - t, 0), s = Array(r); ++l < r; )
      s[l] = o[t + l];
    l = -1;
    for (var a = Array(t + 1); ++l < t; )
      a[l] = o[l];
    return a[t] = n(s), yp(e, this, a);
  };
}
function Rp(e, t) {
  return Gs(Xs(e, t, $r), e + "");
}
var Fp = 9007199254740991;
function kr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Fp;
}
function Jn(e) {
  return e != null && kr(e.length) && !Er(e);
}
function Bp(e, t, n) {
  if (!ht(n))
    return !1;
  var o = typeof t;
  return (o == "number" ? Jn(n) && bl(t, n.length) : o == "string" && t in n) ? ko(n[t], e) : !1;
}
function zp(e) {
  return Rp(function(t, n) {
    var o = -1, l = n.length, r = l > 1 ? n[l - 1] : void 0, s = l > 2 ? n[2] : void 0;
    for (r = e.length > 3 && typeof r == "function" ? (l--, r) : void 0, s && Bp(n[0], n[1], s) && (r = l < 3 ? void 0 : r, l = 1), t = Object(t); ++o < l; ) {
      var a = n[o];
      a && e(t, a, o, r);
    }
    return t;
  });
}
var Hp = Object.prototype;
function Or(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Hp;
  return e === n;
}
function Dp(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Vp = "[object Arguments]";
function Ea(e) {
  return pn(e) && xn(e) == Vp;
}
var Qs = Object.prototype, Kp = Qs.hasOwnProperty, Wp = Qs.propertyIsEnumerable, jp = Ea(function() {
  return arguments;
}()) ? Ea : function(e) {
  return pn(e) && Kp.call(e, "callee") && !Wp.call(e, "callee");
};
const Co = jp;
function Up() {
  return !1;
}
var Zs = typeof exports == "object" && exports && !exports.nodeType && exports, Ta = Zs && typeof module == "object" && module && !module.nodeType && module, qp = Ta && Ta.exports === Zs, ka = qp ? Ft.Buffer : void 0, Gp = ka ? ka.isBuffer : void 0, Yp = Gp || Up;
const il = Yp;
var Xp = "[object Arguments]", Qp = "[object Array]", Zp = "[object Boolean]", Jp = "[object Date]", ev = "[object Error]", tv = "[object Function]", nv = "[object Map]", ov = "[object Number]", lv = "[object Object]", rv = "[object RegExp]", av = "[object Set]", sv = "[object String]", iv = "[object WeakMap]", uv = "[object ArrayBuffer]", cv = "[object DataView]", dv = "[object Float32Array]", fv = "[object Float64Array]", pv = "[object Int8Array]", vv = "[object Int16Array]", hv = "[object Int32Array]", gv = "[object Uint8Array]", mv = "[object Uint8ClampedArray]", bv = "[object Uint16Array]", yv = "[object Uint32Array]", Oe = {};
Oe[dv] = Oe[fv] = Oe[pv] = Oe[vv] = Oe[hv] = Oe[gv] = Oe[mv] = Oe[bv] = Oe[yv] = !0;
Oe[Xp] = Oe[Qp] = Oe[uv] = Oe[Zp] = Oe[cv] = Oe[Jp] = Oe[ev] = Oe[tv] = Oe[nv] = Oe[ov] = Oe[lv] = Oe[rv] = Oe[av] = Oe[sv] = Oe[iv] = !1;
function wv(e) {
  return pn(e) && kr(e.length) && !!Oe[xn(e)];
}
function Cv(e) {
  return function(t) {
    return e(t);
  };
}
var Js = typeof exports == "object" && exports && !exports.nodeType && exports, fo = Js && typeof module == "object" && module && !module.nodeType && module, Sv = fo && fo.exports === Js, Il = Sv && Ws.process, _v = function() {
  try {
    var e = fo && fo.require && fo.require("util").types;
    return e || Il && Il.binding && Il.binding("util");
  } catch {
  }
}();
const Oa = _v;
var xa = Oa && Oa.isTypedArray, $v = xa ? Cv(xa) : wv;
const xr = $v;
var Ev = Object.prototype, Tv = Ev.hasOwnProperty;
function ei(e, t) {
  var n = vt(e), o = !n && Co(e), l = !n && !o && il(e), r = !n && !o && !l && xr(e), s = n || o || l || r, a = s ? Dp(e.length, String) : [], i = a.length;
  for (var u in e)
    (t || Tv.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    l && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    bl(u, i))) && a.push(u);
  return a;
}
function ti(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var kv = ti(Object.keys, Object);
const Ov = kv;
var xv = Object.prototype, Pv = xv.hasOwnProperty;
function Av(e) {
  if (!Or(e))
    return Ov(e);
  var t = [];
  for (var n in Object(e))
    Pv.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Pr(e) {
  return Jn(e) ? ei(e) : Av(e);
}
function Mv(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Iv = Object.prototype, Lv = Iv.hasOwnProperty;
function Nv(e) {
  if (!ht(e))
    return Mv(e);
  var t = Or(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !Lv.call(e, o)) || n.push(o);
  return n;
}
function ni(e) {
  return Jn(e) ? ei(e, !0) : Nv(e);
}
var Rv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Fv = /^\w*$/;
function Ar(e, t) {
  if (vt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ml(e) ? !0 : Fv.test(e) || !Rv.test(e) || t != null && e in Object(t);
}
var Bv = An(Object, "create");
const So = Bv;
function zv() {
  this.__data__ = So ? So(null) : {}, this.size = 0;
}
function Hv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Dv = "__lodash_hash_undefined__", Vv = Object.prototype, Kv = Vv.hasOwnProperty;
function Wv(e) {
  var t = this.__data__;
  if (So) {
    var n = t[e];
    return n === Dv ? void 0 : n;
  }
  return Kv.call(t, e) ? t[e] : void 0;
}
var jv = Object.prototype, Uv = jv.hasOwnProperty;
function qv(e) {
  var t = this.__data__;
  return So ? t[e] !== void 0 : Uv.call(t, e);
}
var Gv = "__lodash_hash_undefined__";
function Yv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = So && t === void 0 ? Gv : t, this;
}
function kn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
kn.prototype.clear = zv;
kn.prototype.delete = Hv;
kn.prototype.get = Wv;
kn.prototype.has = qv;
kn.prototype.set = Yv;
function Xv() {
  this.__data__ = [], this.size = 0;
}
function yl(e, t) {
  for (var n = e.length; n--; )
    if (ko(e[n][0], t))
      return n;
  return -1;
}
var Qv = Array.prototype, Zv = Qv.splice;
function Jv(e) {
  var t = this.__data__, n = yl(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Zv.call(t, n, 1), --this.size, !0;
}
function eh(e) {
  var t = this.__data__, n = yl(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function th(e) {
  return yl(this.__data__, e) > -1;
}
function nh(e, t) {
  var n = this.__data__, o = yl(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function nn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
nn.prototype.clear = Xv;
nn.prototype.delete = Jv;
nn.prototype.get = eh;
nn.prototype.has = th;
nn.prototype.set = nh;
var oh = An(Ft, "Map");
const _o = oh;
function lh() {
  this.size = 0, this.__data__ = {
    hash: new kn(),
    map: new (_o || nn)(),
    string: new kn()
  };
}
function rh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function wl(e, t) {
  var n = e.__data__;
  return rh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ah(e) {
  var t = wl(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function sh(e) {
  return wl(this, e).get(e);
}
function ih(e) {
  return wl(this, e).has(e);
}
function uh(e, t) {
  var n = wl(this, e), o = n.size;
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
on.prototype.delete = ah;
on.prototype.get = sh;
on.prototype.has = ih;
on.prototype.set = uh;
var ch = "Expected a function";
function Mr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ch);
  var n = function() {
    var o = arguments, l = t ? t.apply(this, o) : o[0], r = n.cache;
    if (r.has(l))
      return r.get(l);
    var s = e.apply(this, o);
    return n.cache = r.set(l, s) || r, s;
  };
  return n.cache = new (Mr.Cache || on)(), n;
}
Mr.Cache = on;
var dh = 500;
function fh(e) {
  var t = Mr(e, function(o) {
    return n.size === dh && n.clear(), o;
  }), n = t.cache;
  return t;
}
var ph = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, vh = /\\(\\)?/g, hh = fh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ph, function(n, o, l, r) {
    t.push(l ? r.replace(vh, "$1") : o || n);
  }), t;
});
const gh = hh;
function mh(e) {
  return e == null ? "" : qs(e);
}
function Cl(e, t) {
  return vt(e) ? e : Ar(e, t) ? [e] : gh(mh(e));
}
var bh = 1 / 0;
function Oo(e) {
  if (typeof e == "string" || ml(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -bh ? "-0" : t;
}
function Ir(e, t) {
  t = Cl(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Oo(t[n++])];
  return n && n == o ? e : void 0;
}
function Qe(e, t, n) {
  var o = e == null ? void 0 : Ir(e, t);
  return o === void 0 ? n : o;
}
function oi(e, t) {
  for (var n = -1, o = t.length, l = e.length; ++n < o; )
    e[l + n] = t[n];
  return e;
}
var Pa = Kt ? Kt.isConcatSpreadable : void 0;
function yh(e) {
  return vt(e) || Co(e) || !!(Pa && e && e[Pa]);
}
function Lr(e, t, n, o, l) {
  var r = -1, s = e.length;
  for (n || (n = yh), l || (l = []); ++r < s; ) {
    var a = e[r];
    t > 0 && n(a) ? t > 1 ? Lr(a, t - 1, n, o, l) : oi(l, a) : o || (l[l.length] = a);
  }
  return l;
}
function wh(e) {
  var t = e == null ? 0 : e.length;
  return t ? Lr(e, 1) : [];
}
function Ch(e) {
  return Gs(Xs(e, void 0, wh), e + "");
}
var Sh = ti(Object.getPrototypeOf, Object);
const li = Sh;
var _h = "[object Object]", $h = Function.prototype, Eh = Object.prototype, ri = $h.toString, Th = Eh.hasOwnProperty, kh = ri.call(Object);
function Oh(e) {
  if (!pn(e) || xn(e) != _h)
    return !1;
  var t = li(e);
  if (t === null)
    return !0;
  var n = Th.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && ri.call(n) == kh;
}
function xh() {
  this.__data__ = new nn(), this.size = 0;
}
function Ph(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Ah(e) {
  return this.__data__.get(e);
}
function Mh(e) {
  return this.__data__.has(e);
}
var Ih = 200;
function Lh(e, t) {
  var n = this.__data__;
  if (n instanceof nn) {
    var o = n.__data__;
    if (!_o || o.length < Ih - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new on(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Dt(e) {
  var t = this.__data__ = new nn(e);
  this.size = t.size;
}
Dt.prototype.clear = xh;
Dt.prototype.delete = Ph;
Dt.prototype.get = Ah;
Dt.prototype.has = Mh;
Dt.prototype.set = Lh;
var ai = typeof exports == "object" && exports && !exports.nodeType && exports, Aa = ai && typeof module == "object" && module && !module.nodeType && module, Nh = Aa && Aa.exports === ai, Ma = Nh ? Ft.Buffer : void 0, Ia = Ma ? Ma.allocUnsafe : void 0;
function Rh(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = Ia ? Ia(n) : new e.constructor(n);
  return e.copy(o), o;
}
function Fh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, l = 0, r = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (r[l++] = s);
  }
  return r;
}
function Bh() {
  return [];
}
var zh = Object.prototype, Hh = zh.propertyIsEnumerable, La = Object.getOwnPropertySymbols, Dh = La ? function(e) {
  return e == null ? [] : (e = Object(e), Fh(La(e), function(t) {
    return Hh.call(e, t);
  }));
} : Bh;
const Vh = Dh;
function Kh(e, t, n) {
  var o = t(e);
  return vt(e) ? o : oi(o, n(e));
}
function Na(e) {
  return Kh(e, Pr, Vh);
}
var Wh = An(Ft, "DataView");
const ql = Wh;
var jh = An(Ft, "Promise");
const Gl = jh;
var Uh = An(Ft, "Set");
const Yl = Uh;
var Ra = "[object Map]", qh = "[object Object]", Fa = "[object Promise]", Ba = "[object Set]", za = "[object WeakMap]", Ha = "[object DataView]", Gh = Pn(ql), Yh = Pn(_o), Xh = Pn(Gl), Qh = Pn(Yl), Zh = Pn(Ul), bn = xn;
(ql && bn(new ql(new ArrayBuffer(1))) != Ha || _o && bn(new _o()) != Ra || Gl && bn(Gl.resolve()) != Fa || Yl && bn(new Yl()) != Ba || Ul && bn(new Ul()) != za) && (bn = function(e) {
  var t = xn(e), n = t == qh ? e.constructor : void 0, o = n ? Pn(n) : "";
  if (o)
    switch (o) {
      case Gh:
        return Ha;
      case Yh:
        return Ra;
      case Xh:
        return Fa;
      case Qh:
        return Ba;
      case Zh:
        return za;
    }
  return t;
});
const Da = bn;
var Jh = Ft.Uint8Array;
const ul = Jh;
function eg(e) {
  var t = new e.constructor(e.byteLength);
  return new ul(t).set(new ul(e)), t;
}
function tg(e, t) {
  var n = t ? eg(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function ng(e) {
  return typeof e.constructor == "function" && !Or(e) ? bp(li(e)) : {};
}
var og = "__lodash_hash_undefined__";
function lg(e) {
  return this.__data__.set(e, og), this;
}
function rg(e) {
  return this.__data__.has(e);
}
function cl(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new on(); ++t < n; )
    this.add(e[t]);
}
cl.prototype.add = cl.prototype.push = lg;
cl.prototype.has = rg;
function ag(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function sg(e, t) {
  return e.has(t);
}
var ig = 1, ug = 2;
function si(e, t, n, o, l, r) {
  var s = n & ig, a = e.length, i = t.length;
  if (a != i && !(s && i > a))
    return !1;
  var u = r.get(e), c = r.get(t);
  if (u && c)
    return u == t && c == e;
  var d = -1, v = !0, g = n & ug ? new cl() : void 0;
  for (r.set(e, t), r.set(t, e); ++d < a; ) {
    var p = e[d], f = t[d];
    if (o)
      var m = s ? o(f, p, d, t, e, r) : o(p, f, d, e, t, r);
    if (m !== void 0) {
      if (m)
        continue;
      v = !1;
      break;
    }
    if (g) {
      if (!ag(t, function(b, w) {
        if (!sg(g, w) && (p === b || l(p, b, n, o, r)))
          return g.push(w);
      })) {
        v = !1;
        break;
      }
    } else if (!(p === f || l(p, f, n, o, r))) {
      v = !1;
      break;
    }
  }
  return r.delete(e), r.delete(t), v;
}
function cg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, l) {
    n[++t] = [l, o];
  }), n;
}
function dg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var fg = 1, pg = 2, vg = "[object Boolean]", hg = "[object Date]", gg = "[object Error]", mg = "[object Map]", bg = "[object Number]", yg = "[object RegExp]", wg = "[object Set]", Cg = "[object String]", Sg = "[object Symbol]", _g = "[object ArrayBuffer]", $g = "[object DataView]", Va = Kt ? Kt.prototype : void 0, Ll = Va ? Va.valueOf : void 0;
function Eg(e, t, n, o, l, r, s) {
  switch (n) {
    case $g:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case _g:
      return !(e.byteLength != t.byteLength || !r(new ul(e), new ul(t)));
    case vg:
    case hg:
    case bg:
      return ko(+e, +t);
    case gg:
      return e.name == t.name && e.message == t.message;
    case yg:
    case Cg:
      return e == t + "";
    case mg:
      var a = cg;
    case wg:
      var i = o & fg;
      if (a || (a = dg), e.size != t.size && !i)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      o |= pg, s.set(e, t);
      var c = si(a(e), a(t), o, l, r, s);
      return s.delete(e), c;
    case Sg:
      if (Ll)
        return Ll.call(e) == Ll.call(t);
  }
  return !1;
}
var Tg = 1, kg = Object.prototype, Og = kg.hasOwnProperty;
function xg(e, t, n, o, l, r) {
  var s = n & Tg, a = Na(e), i = a.length, u = Na(t), c = u.length;
  if (i != c && !s)
    return !1;
  for (var d = i; d--; ) {
    var v = a[d];
    if (!(s ? v in t : Og.call(t, v)))
      return !1;
  }
  var g = r.get(e), p = r.get(t);
  if (g && p)
    return g == t && p == e;
  var f = !0;
  r.set(e, t), r.set(t, e);
  for (var m = s; ++d < i; ) {
    v = a[d];
    var b = e[v], w = t[v];
    if (o)
      var C = s ? o(w, b, v, t, e, r) : o(b, w, v, e, t, r);
    if (!(C === void 0 ? b === w || l(b, w, n, o, r) : C)) {
      f = !1;
      break;
    }
    m || (m = v == "constructor");
  }
  if (f && !m) {
    var y = e.constructor, S = t.constructor;
    y != S && "constructor" in e && "constructor" in t && !(typeof y == "function" && y instanceof y && typeof S == "function" && S instanceof S) && (f = !1);
  }
  return r.delete(e), r.delete(t), f;
}
var Pg = 1, Ka = "[object Arguments]", Wa = "[object Array]", Mo = "[object Object]", Ag = Object.prototype, ja = Ag.hasOwnProperty;
function Mg(e, t, n, o, l, r) {
  var s = vt(e), a = vt(t), i = s ? Wa : Da(e), u = a ? Wa : Da(t);
  i = i == Ka ? Mo : i, u = u == Ka ? Mo : u;
  var c = i == Mo, d = u == Mo, v = i == u;
  if (v && il(e)) {
    if (!il(t))
      return !1;
    s = !0, c = !1;
  }
  if (v && !c)
    return r || (r = new Dt()), s || xr(e) ? si(e, t, n, o, l, r) : Eg(e, t, i, n, o, l, r);
  if (!(n & Pg)) {
    var g = c && ja.call(e, "__wrapped__"), p = d && ja.call(t, "__wrapped__");
    if (g || p) {
      var f = g ? e.value() : e, m = p ? t.value() : t;
      return r || (r = new Dt()), l(f, m, n, o, r);
    }
  }
  return v ? (r || (r = new Dt()), xg(e, t, n, o, l, r)) : !1;
}
function Sl(e, t, n, o, l) {
  return e === t ? !0 : e == null || t == null || !pn(e) && !pn(t) ? e !== e && t !== t : Mg(e, t, n, o, Sl, l);
}
var Ig = 1, Lg = 2;
function Ng(e, t, n, o) {
  var l = n.length, r = l, s = !o;
  if (e == null)
    return !r;
  for (e = Object(e); l--; ) {
    var a = n[l];
    if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++l < r; ) {
    a = n[l];
    var i = a[0], u = e[i], c = a[1];
    if (s && a[2]) {
      if (u === void 0 && !(i in e))
        return !1;
    } else {
      var d = new Dt();
      if (o)
        var v = o(u, c, i, e, t, d);
      if (!(v === void 0 ? Sl(c, u, Ig | Lg, o, d) : v))
        return !1;
    }
  }
  return !0;
}
function ii(e) {
  return e === e && !ht(e);
}
function Rg(e) {
  for (var t = Pr(e), n = t.length; n--; ) {
    var o = t[n], l = e[o];
    t[n] = [o, l, ii(l)];
  }
  return t;
}
function ui(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Fg(e) {
  var t = Rg(e);
  return t.length == 1 && t[0][2] ? ui(t[0][0], t[0][1]) : function(n) {
    return n === e || Ng(n, e, t);
  };
}
function Bg(e, t) {
  return e != null && t in Object(e);
}
function zg(e, t, n) {
  t = Cl(t, e);
  for (var o = -1, l = t.length, r = !1; ++o < l; ) {
    var s = Oo(t[o]);
    if (!(r = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return r || ++o != l ? r : (l = e == null ? 0 : e.length, !!l && kr(l) && bl(s, l) && (vt(e) || Co(e)));
}
function ci(e, t) {
  return e != null && zg(e, t, Bg);
}
var Hg = 1, Dg = 2;
function Vg(e, t) {
  return Ar(e) && ii(t) ? ui(Oo(e), t) : function(n) {
    var o = Qe(n, e);
    return o === void 0 && o === t ? ci(n, e) : Sl(t, o, Hg | Dg);
  };
}
function Kg(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Wg(e) {
  return function(t) {
    return Ir(t, e);
  };
}
function jg(e) {
  return Ar(e) ? Kg(Oo(e)) : Wg(e);
}
function di(e) {
  return typeof e == "function" ? e : e == null ? $r : typeof e == "object" ? vt(e) ? Vg(e[0], e[1]) : Fg(e) : jg(e);
}
function Ug(e) {
  return function(t, n, o) {
    for (var l = -1, r = Object(t), s = o(t), a = s.length; a--; ) {
      var i = s[e ? a : ++l];
      if (n(r[i], i, r) === !1)
        break;
    }
    return t;
  };
}
var qg = Ug();
const fi = qg;
function Gg(e, t) {
  return e && fi(e, t, Pr);
}
function Yg(e, t) {
  return function(n, o) {
    if (n == null)
      return n;
    if (!Jn(n))
      return e(n, o);
    for (var l = n.length, r = t ? l : -1, s = Object(n); (t ? r-- : ++r < l) && o(s[r], r, s) !== !1; )
      ;
    return n;
  };
}
var Xg = Yg(Gg);
const Qg = Xg;
var Zg = function() {
  return Ft.Date.now();
};
const Nl = Zg;
var Jg = "Expected a function", em = Math.max, tm = Math.min;
function zn(e, t, n) {
  var o, l, r, s, a, i, u = 0, c = !1, d = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Jg);
  t = jl(t) || 0, ht(n) && (c = !!n.leading, d = "maxWait" in n, r = d ? em(jl(n.maxWait) || 0, t) : r, v = "trailing" in n ? !!n.trailing : v);
  function g(T) {
    var $ = o, x = l;
    return o = l = void 0, u = T, s = e.apply(x, $), s;
  }
  function p(T) {
    return u = T, a = setTimeout(b, t), c ? g(T) : s;
  }
  function f(T) {
    var $ = T - i, x = T - u, F = t - $;
    return d ? tm(F, r - x) : F;
  }
  function m(T) {
    var $ = T - i, x = T - u;
    return i === void 0 || $ >= t || $ < 0 || d && x >= r;
  }
  function b() {
    var T = Nl();
    if (m(T))
      return w(T);
    a = setTimeout(b, f(T));
  }
  function w(T) {
    return a = void 0, v && o ? g(T) : (o = l = void 0, s);
  }
  function C() {
    a !== void 0 && clearTimeout(a), u = 0, o = i = l = a = void 0;
  }
  function y() {
    return a === void 0 ? s : w(Nl());
  }
  function S() {
    var T = Nl(), $ = m(T);
    if (o = arguments, l = this, i = T, $) {
      if (a === void 0)
        return p(i);
      if (d)
        return clearTimeout(a), a = setTimeout(b, t), g(i);
    }
    return a === void 0 && (a = setTimeout(b, t)), s;
  }
  return S.cancel = C, S.flush = y, S;
}
function Xl(e, t, n) {
  (n !== void 0 && !ko(e[t], n) || n === void 0 && !(t in e)) && Tr(e, t, n);
}
function nm(e) {
  return pn(e) && Jn(e);
}
function Ql(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function om(e) {
  return Np(e, ni(e));
}
function lm(e, t, n, o, l, r, s) {
  var a = Ql(e, n), i = Ql(t, n), u = s.get(i);
  if (u) {
    Xl(e, n, u);
    return;
  }
  var c = r ? r(a, i, n + "", e, t, s) : void 0, d = c === void 0;
  if (d) {
    var v = vt(i), g = !v && il(i), p = !v && !g && xr(i);
    c = i, v || g || p ? vt(a) ? c = a : nm(a) ? c = wp(a) : g ? (d = !1, c = Rh(i, !0)) : p ? (d = !1, c = tg(i, !0)) : c = [] : Oh(i) || Co(i) ? (c = a, Co(a) ? c = om(a) : (!ht(a) || Er(a)) && (c = ng(i))) : d = !1;
  }
  d && (s.set(i, c), l(c, i, o, r, s), s.delete(i)), Xl(e, n, c);
}
function pi(e, t, n, o, l) {
  e !== t && fi(t, function(r, s) {
    if (l || (l = new Dt()), ht(r))
      lm(e, t, s, n, pi, o, l);
    else {
      var a = o ? o(Ql(e, s), r, s + "", e, t, l) : void 0;
      a === void 0 && (a = r), Xl(e, s, a);
    }
  }, ni);
}
var rm = Math.max, am = Math.min;
function sm(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var l = o - 1;
  return n !== void 0 && (l = Zf(n), l = n < 0 ? rm(o + l, 0) : am(l, o - 1)), Pp(e, di(t), l, !0);
}
function im(e, t) {
  var n = -1, o = Jn(e) ? Array(e.length) : [];
  return Qg(e, function(l, r, s) {
    o[++n] = t(l, r, s);
  }), o;
}
function um(e, t) {
  var n = vt(e) ? Us : im;
  return n(e, di(t));
}
function cm(e, t) {
  return Lr(um(e, t), 1);
}
function dl(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var l = e[t];
    o[l[0]] = l[1];
  }
  return o;
}
function fl(e, t) {
  return Sl(e, t);
}
function _l(e) {
  return e == null;
}
function dm(e) {
  return e === void 0;
}
var fm = zp(function(e, t, n) {
  pi(e, t, n);
});
const vi = fm;
function hi(e, t, n, o) {
  if (!ht(e))
    return e;
  t = Cl(t, e);
  for (var l = -1, r = t.length, s = r - 1, a = e; a != null && ++l < r; ) {
    var i = Oo(t[l]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (l != s) {
      var c = a[i];
      u = o ? o(c, i, a) : void 0, u === void 0 && (u = ht(c) ? c : bl(t[l + 1]) ? [] : {});
    }
    Ys(a, i, u), a = a[i];
  }
  return e;
}
function pm(e, t, n) {
  for (var o = -1, l = t.length, r = {}; ++o < l; ) {
    var s = t[o], a = Ir(e, s);
    n(a, s) && hi(r, Cl(s, e), a);
  }
  return r;
}
function vm(e, t) {
  return pm(e, t, function(n, o) {
    return ci(e, o);
  });
}
var hm = Ch(function(e, t) {
  return e == null ? {} : vm(e, t);
});
const gm = hm;
function mm(e, t, n) {
  return e == null ? e : hi(e, t, n);
}
const Hn = (e) => e === void 0, Dn = (e) => typeof e == "boolean", Ae = (e) => typeof e == "number", Vn = (e) => typeof Element > "u" ? !1 : e instanceof Element, bm = (e) => _t(e) ? !Number.isNaN(Number(e)) : !1, ym = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ua = (e) => Object.keys(e), wm = (e, t, n) => ({
  get value() {
    return Qe(e, t, n);
  },
  set value(o) {
    mm(e, t, o);
  }
});
class gi extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function mi(e, t) {
  throw new gi(`[${e}] ${t}`);
}
function je(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = _t(e) ? new gi(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Cm = "utils/dom/style", bi = (e = "") => e.split(" ").filter((t) => !!t.trim()), Vo = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, yi = (e, t) => {
  !e || !t.trim() || e.classList.add(...bi(t));
}, Zl = (e, t) => {
  !e || !t.trim() || e.classList.remove(...bi(t));
};
function Jl(e, t = "px") {
  if (!e)
    return "";
  if (Ae(e) || bm(e))
    return `${e}${t}`;
  if (_t(e))
    return e;
  je(Cm, "binding value must be a string or number");
}
function Sm(e, t) {
  if (!Le)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const l = t.offsetTop + n.reduce((i, u) => i + u.offsetTop, 0), r = l + t.offsetHeight, s = e.scrollTop, a = s + e.clientHeight;
  l < s ? e.scrollTop = l : r > a && (e.scrollTop = r - e.clientHeight);
}
const wi = "__epPropKey", fe = (e) => e, _m = (e) => Et(e) && !!e[wi], $l = (e, t) => {
  if (!Et(e) || _m(e))
    return e;
  const { values: n, required: o, default: l, type: r, validator: s } = e, i = {
    type: r,
    required: !!o,
    validator: n || s ? (u) => {
      let c = !1, d = [];
      if (n && (d = Array.from(n), En(e, "default") && d.push(l), c || (c = d.includes(u))), s && (c || (c = s(u))), !c && d.length > 0) {
        const v = [...new Set(d)].map((g) => JSON.stringify(g)).join(", ");
        Uu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(u)}.`);
      }
      return c;
    } : void 0,
    [wi]: !0
  };
  return En(e, "default") && (i.default = l), i;
}, Te = (e) => dl(Object.entries(e).map(([t, n]) => [
  t,
  $l(n, t)
])), Wt = fe([
  String,
  Object,
  Function
]), Ci = {
  validating: Cr,
  success: Wc,
  error: wr
}, ut = (e, t) => {
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
}, ot = "update:modelValue", Si = "change", xo = ["", "default", "small", "large"], $m = {
  large: 40,
  default: 32,
  small: 24
}, Em = (e) => $m[e || "default"], Tm = (e) => ["", ...xo].includes(e), _i = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), km = (e) => Le ? window.requestAnimationFrame(e) : setTimeout(e, 16), un = (e) => e, Om = ["class", "style"], xm = /^on[A-Z]/, Pm = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = _(() => ((n == null ? void 0 : n.value) || []).concat(Om)), l = Ce();
  return l ? _(() => {
    var r;
    return dl(Object.entries((r = l.proxy) == null ? void 0 : r.$attrs).filter(([s]) => !o.value.includes(s) && !(t && xm.test(s))));
  }) : (je("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), _(() => ({})));
}, $i = ({ from: e, replacement: t, scope: n, version: o, ref: l, type: r = "API" }, s) => {
  Y(() => h(s), (a) => {
    a && je(n, `[${r}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${l}
`);
  }, {
    immediate: !0
  });
};
var Am = {
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
const Mm = (e) => (t, n) => Im(t, n, h(e)), Im = (e, t, n) => Qe(n, e, e).replace(/\{(\w+)\}/g, (o, l) => {
  var r;
  return `${(r = t == null ? void 0 : t[l]) != null ? r : `{${l}}`}`;
}), Lm = (e) => {
  const t = _(() => h(e).name), n = Rn(e) ? e : k(e);
  return {
    lang: t,
    locale: n,
    t: Mm(e)
  };
}, Ei = Symbol("localeContextKey"), Ot = (e) => {
  const t = e || ve(Ei, k());
  return Lm(_(() => t.value || Am));
}, Rl = "el", Nm = "is-", mn = (e, t, n, o, l) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), o && (r += `__${o}`), l && (r += `--${l}`), r;
}, Ti = Symbol("namespaceContextKey"), Nr = (e) => {
  const t = e || (Ce() ? ve(Ti, k(Rl)) : k(Rl));
  return _(() => h(t) || Rl);
}, de = (e, t) => {
  const n = Nr(t);
  return {
    namespace: n,
    b: (f = "") => mn(n.value, e, f, "", ""),
    e: (f) => f ? mn(n.value, e, "", f, "") : "",
    m: (f) => f ? mn(n.value, e, "", "", f) : "",
    be: (f, m) => f && m ? mn(n.value, e, f, m, "") : "",
    em: (f, m) => f && m ? mn(n.value, e, "", f, m) : "",
    bm: (f, m) => f && m ? mn(n.value, e, f, "", m) : "",
    bem: (f, m, b) => f && m && b ? mn(n.value, e, f, m, b) : "",
    is: (f, ...m) => {
      const b = m.length >= 1 ? m[0] : !0;
      return f && b ? `${Nm}${f}` : "";
    },
    cssVar: (f) => {
      const m = {};
      for (const b in f)
        f[b] && (m[`--${n.value}-${b}`] = f[b]);
      return m;
    },
    cssVarName: (f) => `--${n.value}-${f}`,
    cssVarBlock: (f) => {
      const m = {};
      for (const b in f)
        f[b] && (m[`--${n.value}-${e}-${b}`] = f[b]);
      return m;
    },
    cssVarBlockName: (f) => `--${n.value}-${e}-${f}`
  };
}, Rm = $l({
  type: fe(Boolean),
  default: null
}), Fm = $l({
  type: fe(Function)
}), ki = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], l = {
    [e]: Rm,
    [n]: Fm
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: a,
      shouldHideWhenRouteChanges: i,
      shouldProceed: u,
      onShow: c,
      onHide: d
    }) => {
      const v = Ce(), { emit: g } = v, p = v.props, f = _(() => It(p[n])), m = _(() => p[e] === null), b = ($) => {
        s.value !== !0 && (s.value = !0, a && (a.value = $), It(c) && c($));
      }, w = ($) => {
        s.value !== !1 && (s.value = !1, a && (a.value = $), It(d) && d($));
      }, C = ($) => {
        if (p.disabled === !0 || It(u) && !u())
          return;
        const x = f.value && Le;
        x && g(t, !0), (m.value || !x) && b($);
      }, y = ($) => {
        if (p.disabled === !0 || !Le)
          return;
        const x = f.value && Le;
        x && g(t, !1), (m.value || !x) && w($);
      }, S = ($) => {
        Dn($) && (p.disabled && $ ? f.value && g(t, !1) : s.value !== $ && ($ ? b() : w()));
      }, T = () => {
        s.value ? y() : C();
      };
      return Y(() => p[e], S), i && v.appContext.config.globalProperties.$route !== void 0 && Y(() => ({
        ...v.proxy.$route
      }), () => {
        i.value && s.value && y();
      }), Me(() => {
        S(p[e]);
      }), {
        hide: y,
        show: C,
        toggle: T,
        hasUpdateHandler: f
      };
    },
    useModelToggleProps: l,
    useModelToggleEmits: o
  };
};
ki("modelValue");
const Oi = (e) => {
  const t = Ce();
  return _(() => {
    var n, o;
    return (o = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
};
var st = "top", Tt = "bottom", kt = "right", it = "left", Rr = "auto", Po = [st, Tt, kt, it], Wn = "start", $o = "end", Bm = "clippingParents", xi = "viewport", io = "popper", zm = "reference", qa = Po.reduce(function(e, t) {
  return e.concat([t + "-" + Wn, t + "-" + $o]);
}, []), El = [].concat(Po, [Rr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Wn, t + "-" + $o]);
}, []), Hm = "beforeRead", Dm = "read", Vm = "afterRead", Km = "beforeMain", Wm = "main", jm = "afterMain", Um = "beforeWrite", qm = "write", Gm = "afterWrite", Ym = [Hm, Dm, Vm, Km, Wm, jm, Um, qm, Gm];
function jt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Bt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function jn(e) {
  var t = Bt(e).Element;
  return e instanceof t || e instanceof Element;
}
function $t(e) {
  var t = Bt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Fr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Bt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Xm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, l = t.attributes[n] || {}, r = t.elements[n];
    !$t(r) || !jt(r) || (Object.assign(r.style, o), Object.keys(l).forEach(function(s) {
      var a = l[s];
      a === !1 ? r.removeAttribute(s) : r.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function Qm(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var l = t.elements[o], r = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = s.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !$t(l) || !jt(l) || (Object.assign(l.style, a), Object.keys(r).forEach(function(i) {
        l.removeAttribute(i);
      }));
    });
  };
}
var Pi = { name: "applyStyles", enabled: !0, phase: "write", fn: Xm, effect: Qm, requires: ["computeStyles"] };
function Vt(e) {
  return e.split("-")[0];
}
var _n = Math.max, pl = Math.min, Un = Math.round;
function qn(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, l = 1;
  if ($t(e) && t) {
    var r = e.offsetHeight, s = e.offsetWidth;
    s > 0 && (o = Un(n.width) / s || 1), r > 0 && (l = Un(n.height) / r || 1);
  }
  return { width: n.width / o, height: n.height / l, top: n.top / l, right: n.right / o, bottom: n.bottom / l, left: n.left / o, x: n.left / o, y: n.top / l };
}
function Br(e) {
  var t = qn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Ai(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Fr(n)) {
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
  return Bt(e).getComputedStyle(e);
}
function Zm(e) {
  return ["table", "td", "th"].indexOf(jt(e)) >= 0;
}
function vn(e) {
  return ((jn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Tl(e) {
  return jt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Fr(e) ? e.host : null) || vn(e);
}
function Ga(e) {
  return !$t(e) || tn(e).position === "fixed" ? null : e.offsetParent;
}
function Jm(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && $t(e)) {
    var o = tn(e);
    if (o.position === "fixed")
      return null;
  }
  var l = Tl(e);
  for (Fr(l) && (l = l.host); $t(l) && ["html", "body"].indexOf(jt(l)) < 0; ) {
    var r = tn(l);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
function Ao(e) {
  for (var t = Bt(e), n = Ga(e); n && Zm(n) && tn(n).position === "static"; )
    n = Ga(n);
  return n && (jt(n) === "html" || jt(n) === "body" && tn(n).position === "static") ? t : n || Jm(e) || t;
}
function zr(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function po(e, t, n) {
  return _n(e, pl(t, n));
}
function e0(e, t, n) {
  var o = po(e, t, n);
  return o > n ? n : o;
}
function Mi() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ii(e) {
  return Object.assign({}, Mi(), e);
}
function Li(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var t0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ii(typeof e != "number" ? e : Li(e, Po));
};
function n0(e) {
  var t, n = e.state, o = e.name, l = e.options, r = n.elements.arrow, s = n.modifiersData.popperOffsets, a = Vt(n.placement), i = zr(a), u = [it, kt].indexOf(a) >= 0, c = u ? "height" : "width";
  if (!(!r || !s)) {
    var d = t0(l.padding, n), v = Br(r), g = i === "y" ? st : it, p = i === "y" ? Tt : kt, f = n.rects.reference[c] + n.rects.reference[i] - s[i] - n.rects.popper[c], m = s[i] - n.rects.reference[i], b = Ao(r), w = b ? i === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, C = f / 2 - m / 2, y = d[g], S = w - v[c] - d[p], T = w / 2 - v[c] / 2 + C, $ = po(y, T, S), x = i;
    n.modifiersData[o] = (t = {}, t[x] = $, t.centerOffset = $ - T, t);
  }
}
function o0(e) {
  var t = e.state, n = e.options, o = n.element, l = o === void 0 ? "[data-popper-arrow]" : o;
  l != null && (typeof l == "string" && (l = t.elements.popper.querySelector(l), !l) || !Ai(t.elements.popper, l) || (t.elements.arrow = l));
}
var l0 = { name: "arrow", enabled: !0, phase: "main", fn: n0, effect: o0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Gn(e) {
  return e.split("-")[1];
}
var r0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function a0(e) {
  var t = e.x, n = e.y, o = window, l = o.devicePixelRatio || 1;
  return { x: Un(t * l) / l || 0, y: Un(n * l) / l || 0 };
}
function Ya(e) {
  var t, n = e.popper, o = e.popperRect, l = e.placement, r = e.variation, s = e.offsets, a = e.position, i = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, v = s.x, g = v === void 0 ? 0 : v, p = s.y, f = p === void 0 ? 0 : p, m = typeof c == "function" ? c({ x: g, y: f }) : { x: g, y: f };
  g = m.x, f = m.y;
  var b = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), C = it, y = st, S = window;
  if (u) {
    var T = Ao(n), $ = "clientHeight", x = "clientWidth";
    if (T === Bt(n) && (T = vn(n), tn(T).position !== "static" && a === "absolute" && ($ = "scrollHeight", x = "scrollWidth")), T = T, l === st || (l === it || l === kt) && r === $o) {
      y = Tt;
      var F = d && T === S && S.visualViewport ? S.visualViewport.height : T[$];
      f -= F - o.height, f *= i ? 1 : -1;
    }
    if (l === it || (l === st || l === Tt) && r === $o) {
      C = kt;
      var D = d && T === S && S.visualViewport ? S.visualViewport.width : T[x];
      g -= D - o.width, g *= i ? 1 : -1;
    }
  }
  var B = Object.assign({ position: a }, u && r0), I = c === !0 ? a0({ x: g, y: f }) : { x: g, y: f };
  if (g = I.x, f = I.y, i) {
    var Q;
    return Object.assign({}, B, (Q = {}, Q[y] = w ? "0" : "", Q[C] = b ? "0" : "", Q.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", Q));
  }
  return Object.assign({}, B, (t = {}, t[y] = w ? f + "px" : "", t[C] = b ? g + "px" : "", t.transform = "", t));
}
function s0(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, l = o === void 0 ? !0 : o, r = n.adaptive, s = r === void 0 ? !0 : r, a = n.roundOffsets, i = a === void 0 ? !0 : a, u = { placement: Vt(t.placement), variation: Gn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: l, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ya(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ya(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Ni = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: s0, data: {} }, Io = { passive: !0 };
function i0(e) {
  var t = e.state, n = e.instance, o = e.options, l = o.scroll, r = l === void 0 ? !0 : l, s = o.resize, a = s === void 0 ? !0 : s, i = Bt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Io);
  }), a && i.addEventListener("resize", n.update, Io), function() {
    r && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Io);
    }), a && i.removeEventListener("resize", n.update, Io);
  };
}
var Ri = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: i0, data: {} }, u0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ko(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return u0[t];
  });
}
var c0 = { start: "end", end: "start" };
function Xa(e) {
  return e.replace(/start|end/g, function(t) {
    return c0[t];
  });
}
function Hr(e) {
  var t = Bt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Dr(e) {
  return qn(vn(e)).left + Hr(e).scrollLeft;
}
function d0(e) {
  var t = Bt(e), n = vn(e), o = t.visualViewport, l = n.clientWidth, r = n.clientHeight, s = 0, a = 0;
  return o && (l = o.width, r = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = o.offsetLeft, a = o.offsetTop)), { width: l, height: r, x: s + Dr(e), y: a };
}
function f0(e) {
  var t, n = vn(e), o = Hr(e), l = (t = e.ownerDocument) == null ? void 0 : t.body, r = _n(n.scrollWidth, n.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), s = _n(n.scrollHeight, n.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), a = -o.scrollLeft + Dr(e), i = -o.scrollTop;
  return tn(l || n).direction === "rtl" && (a += _n(n.clientWidth, l ? l.clientWidth : 0) - r), { width: r, height: s, x: a, y: i };
}
function Vr(e) {
  var t = tn(e), n = t.overflow, o = t.overflowX, l = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + l + o);
}
function Fi(e) {
  return ["html", "body", "#document"].indexOf(jt(e)) >= 0 ? e.ownerDocument.body : $t(e) && Vr(e) ? e : Fi(Tl(e));
}
function vo(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Fi(e), l = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Bt(o), s = l ? [r].concat(r.visualViewport || [], Vr(o) ? o : []) : o, a = t.concat(s);
  return l ? a : a.concat(vo(Tl(s)));
}
function er(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function p0(e) {
  var t = qn(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Qa(e, t) {
  return t === xi ? er(d0(e)) : jn(t) ? p0(t) : er(f0(vn(e)));
}
function v0(e) {
  var t = vo(Tl(e)), n = ["absolute", "fixed"].indexOf(tn(e).position) >= 0, o = n && $t(e) ? Ao(e) : e;
  return jn(o) ? t.filter(function(l) {
    return jn(l) && Ai(l, o) && jt(l) !== "body";
  }) : [];
}
function h0(e, t, n) {
  var o = t === "clippingParents" ? v0(e) : [].concat(t), l = [].concat(o, [n]), r = l[0], s = l.reduce(function(a, i) {
    var u = Qa(e, i);
    return a.top = _n(u.top, a.top), a.right = pl(u.right, a.right), a.bottom = pl(u.bottom, a.bottom), a.left = _n(u.left, a.left), a;
  }, Qa(e, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Bi(e) {
  var t = e.reference, n = e.element, o = e.placement, l = o ? Vt(o) : null, r = o ? Gn(o) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, i;
  switch (l) {
    case st:
      i = { x: s, y: t.y - n.height };
      break;
    case Tt:
      i = { x: s, y: t.y + t.height };
      break;
    case kt:
      i = { x: t.x + t.width, y: a };
      break;
    case it:
      i = { x: t.x - n.width, y: a };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = l ? zr(l) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (r) {
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
  var n = t, o = n.placement, l = o === void 0 ? e.placement : o, r = n.boundary, s = r === void 0 ? Bm : r, a = n.rootBoundary, i = a === void 0 ? xi : a, u = n.elementContext, c = u === void 0 ? io : u, d = n.altBoundary, v = d === void 0 ? !1 : d, g = n.padding, p = g === void 0 ? 0 : g, f = Ii(typeof p != "number" ? p : Li(p, Po)), m = c === io ? zm : io, b = e.rects.popper, w = e.elements[v ? m : c], C = h0(jn(w) ? w : w.contextElement || vn(e.elements.popper), s, i), y = qn(e.elements.reference), S = Bi({ reference: y, element: b, strategy: "absolute", placement: l }), T = er(Object.assign({}, b, S)), $ = c === io ? T : y, x = { top: C.top - $.top + f.top, bottom: $.bottom - C.bottom + f.bottom, left: C.left - $.left + f.left, right: $.right - C.right + f.right }, F = e.modifiersData.offset;
  if (c === io && F) {
    var D = F[l];
    Object.keys(x).forEach(function(B) {
      var I = [kt, Tt].indexOf(B) >= 0 ? 1 : -1, Q = [st, Tt].indexOf(B) >= 0 ? "y" : "x";
      x[B] += D[Q] * I;
    });
  }
  return x;
}
function g0(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, l = n.boundary, r = n.rootBoundary, s = n.padding, a = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? El : i, c = Gn(o), d = c ? a ? qa : qa.filter(function(p) {
    return Gn(p) === c;
  }) : Po, v = d.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  v.length === 0 && (v = d);
  var g = v.reduce(function(p, f) {
    return p[f] = Eo(e, { placement: f, boundary: l, rootBoundary: r, padding: s })[Vt(f)], p;
  }, {});
  return Object.keys(g).sort(function(p, f) {
    return g[p] - g[f];
  });
}
function m0(e) {
  if (Vt(e) === Rr)
    return [];
  var t = Ko(e);
  return [Xa(e), t, Xa(t)];
}
function b0(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var l = n.mainAxis, r = l === void 0 ? !0 : l, s = n.altAxis, a = s === void 0 ? !0 : s, i = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, v = n.altBoundary, g = n.flipVariations, p = g === void 0 ? !0 : g, f = n.allowedAutoPlacements, m = t.options.placement, b = Vt(m), w = b === m, C = i || (w || !p ? [Ko(m)] : m0(m)), y = [m].concat(C).reduce(function(me, _e) {
      return me.concat(Vt(_e) === Rr ? g0(t, { placement: _e, boundary: c, rootBoundary: d, padding: u, flipVariations: p, allowedAutoPlacements: f }) : _e);
    }, []), S = t.rects.reference, T = t.rects.popper, $ = /* @__PURE__ */ new Map(), x = !0, F = y[0], D = 0; D < y.length; D++) {
      var B = y[D], I = Vt(B), Q = Gn(B) === Wn, ee = [st, Tt].indexOf(I) >= 0, oe = ee ? "width" : "height", le = Eo(t, { placement: B, boundary: c, rootBoundary: d, altBoundary: v, padding: u }), j = ee ? Q ? kt : it : Q ? Tt : st;
      S[oe] > T[oe] && (j = Ko(j));
      var ne = Ko(j), A = [];
      if (r && A.push(le[I] <= 0), a && A.push(le[j] <= 0, le[ne] <= 0), A.every(function(me) {
        return me;
      })) {
        F = B, x = !1;
        break;
      }
      $.set(B, A);
    }
    if (x)
      for (var U = p ? 3 : 1, re = function(me) {
        var _e = y.find(function(ke) {
          var Ne = $.get(ke);
          if (Ne)
            return Ne.slice(0, me).every(function(Se) {
              return Se;
            });
        });
        if (_e)
          return F = _e, "break";
      }, ue = U; ue > 0; ue--) {
        var ge = re(ue);
        if (ge === "break")
          break;
      }
    t.placement !== F && (t.modifiersData[o]._skip = !0, t.placement = F, t.reset = !0);
  }
}
var y0 = { name: "flip", enabled: !0, phase: "main", fn: b0, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Za(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Ja(e) {
  return [st, kt, Tt, it].some(function(t) {
    return e[t] >= 0;
  });
}
function w0(e) {
  var t = e.state, n = e.name, o = t.rects.reference, l = t.rects.popper, r = t.modifiersData.preventOverflow, s = Eo(t, { elementContext: "reference" }), a = Eo(t, { altBoundary: !0 }), i = Za(s, o), u = Za(a, l, r), c = Ja(i), d = Ja(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: c, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": c, "data-popper-escaped": d });
}
var C0 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: w0 };
function S0(e, t, n) {
  var o = Vt(e), l = [it, st].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = r[0], a = r[1];
  return s = s || 0, a = (a || 0) * l, [it, kt].indexOf(o) >= 0 ? { x: a, y: s } : { x: s, y: a };
}
function _0(e) {
  var t = e.state, n = e.options, o = e.name, l = n.offset, r = l === void 0 ? [0, 0] : l, s = El.reduce(function(c, d) {
    return c[d] = S0(d, t.rects, r), c;
  }, {}), a = s[t.placement], i = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
}
var $0 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: _0 };
function E0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Bi({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var zi = { name: "popperOffsets", enabled: !0, phase: "read", fn: E0, data: {} };
function T0(e) {
  return e === "x" ? "y" : "x";
}
function k0(e) {
  var t = e.state, n = e.options, o = e.name, l = n.mainAxis, r = l === void 0 ? !0 : l, s = n.altAxis, a = s === void 0 ? !1 : s, i = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, v = n.tether, g = v === void 0 ? !0 : v, p = n.tetherOffset, f = p === void 0 ? 0 : p, m = Eo(t, { boundary: i, rootBoundary: u, padding: d, altBoundary: c }), b = Vt(t.placement), w = Gn(t.placement), C = !w, y = zr(b), S = T0(y), T = t.modifiersData.popperOffsets, $ = t.rects.reference, x = t.rects.popper, F = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f, D = typeof F == "number" ? { mainAxis: F, altAxis: F } : Object.assign({ mainAxis: 0, altAxis: 0 }, F), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = { x: 0, y: 0 };
  if (T) {
    if (r) {
      var Q, ee = y === "y" ? st : it, oe = y === "y" ? Tt : kt, le = y === "y" ? "height" : "width", j = T[y], ne = j + m[ee], A = j - m[oe], U = g ? -x[le] / 2 : 0, re = w === Wn ? $[le] : x[le], ue = w === Wn ? -x[le] : -$[le], ge = t.elements.arrow, me = g && ge ? Br(ge) : { width: 0, height: 0 }, _e = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Mi(), ke = _e[ee], Ne = _e[oe], Se = po(0, $[le], me[le]), Re = C ? $[le] / 2 - U - Se - ke - D.mainAxis : re - Se - ke - D.mainAxis, Pe = C ? -$[le] / 2 + U + Se + Ne + D.mainAxis : ue + Se + Ne + D.mainAxis, Be = t.elements.arrow && Ao(t.elements.arrow), xt = Be ? y === "y" ? Be.clientTop || 0 : Be.clientLeft || 0 : 0, gt = (Q = B == null ? void 0 : B[y]) != null ? Q : 0, mt = j + Re - gt - xt, bt = j + Pe - gt, yt = po(g ? pl(ne, mt) : ne, j, g ? _n(A, bt) : A);
      T[y] = yt, I[y] = yt - j;
    }
    if (a) {
      var wt, ct = y === "x" ? st : it, qt = y === "x" ? Tt : kt, Je = T[S], Ct = S === "y" ? "height" : "width", dt = Je + m[ct], zt = Je - m[qt], St = [st, it].indexOf(b) !== -1, z = (wt = B == null ? void 0 : B[S]) != null ? wt : 0, J = St ? dt : Je - $[Ct] - x[Ct] - z + D.altAxis, Ee = St ? Je + $[Ct] + x[Ct] - z - D.altAxis : zt, ft = g && St ? e0(J, Je, Ee) : po(g ? J : dt, Je, g ? Ee : zt);
      T[S] = ft, I[S] = ft - Je;
    }
    t.modifiersData[o] = I;
  }
}
var O0 = { name: "preventOverflow", enabled: !0, phase: "main", fn: k0, requiresIfExists: ["offset"] };
function x0(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function P0(e) {
  return e === Bt(e) || !$t(e) ? Hr(e) : x0(e);
}
function A0(e) {
  var t = e.getBoundingClientRect(), n = Un(t.width) / e.offsetWidth || 1, o = Un(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function M0(e, t, n) {
  n === void 0 && (n = !1);
  var o = $t(t), l = $t(t) && A0(t), r = vn(t), s = qn(e, l), a = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((jt(t) !== "body" || Vr(r)) && (a = P0(t)), $t(t) ? (i = qn(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : r && (i.x = Dr(r))), { x: s.left + a.scrollLeft - i.x, y: s.top + a.scrollTop - i.y, width: s.width, height: s.height };
}
function I0(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function l(r) {
    n.add(r.name);
    var s = [].concat(r.requires || [], r.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var i = t.get(a);
        i && l(i);
      }
    }), o.push(r);
  }
  return e.forEach(function(r) {
    n.has(r.name) || l(r);
  }), o;
}
function L0(e) {
  var t = I0(e);
  return Ym.reduce(function(n, o) {
    return n.concat(t.filter(function(l) {
      return l.phase === o;
    }));
  }, []);
}
function N0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function R0(e) {
  var t = e.reduce(function(n, o) {
    var l = n[o.name];
    return n[o.name] = l ? Object.assign({}, l, o, { options: Object.assign({}, l.options, o.options), data: Object.assign({}, l.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var es = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ts() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Kr(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, l = t.defaultOptions, r = l === void 0 ? es : l;
  return function(s, a, i) {
    i === void 0 && (i = r);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, es, r), modifiersData: {}, elements: { reference: s, popper: a }, attributes: {}, styles: {} }, c = [], d = !1, v = { state: u, setOptions: function(f) {
      var m = typeof f == "function" ? f(u.options) : f;
      p(), u.options = Object.assign({}, r, u.options, m), u.scrollParents = { reference: jn(s) ? vo(s) : s.contextElement ? vo(s.contextElement) : [], popper: vo(a) };
      var b = L0(R0([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = b.filter(function(w) {
        return w.enabled;
      }), g(), v.update();
    }, forceUpdate: function() {
      if (!d) {
        var f = u.elements, m = f.reference, b = f.popper;
        if (ts(m, b)) {
          u.rects = { reference: M0(m, Ao(b), u.options.strategy === "fixed"), popper: Br(b) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(x) {
            return u.modifiersData[x.name] = Object.assign({}, x.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var C = u.orderedModifiers[w], y = C.fn, S = C.options, T = S === void 0 ? {} : S, $ = C.name;
            typeof y == "function" && (u = y({ state: u, options: T, name: $, instance: v }) || u);
          }
        }
      }
    }, update: N0(function() {
      return new Promise(function(f) {
        v.forceUpdate(), f(u);
      });
    }), destroy: function() {
      p(), d = !0;
    } };
    if (!ts(s, a))
      return v;
    v.setOptions(i).then(function(f) {
      !d && i.onFirstUpdate && i.onFirstUpdate(f);
    });
    function g() {
      u.orderedModifiers.forEach(function(f) {
        var m = f.name, b = f.options, w = b === void 0 ? {} : b, C = f.effect;
        if (typeof C == "function") {
          var y = C({ state: u, name: m, instance: v, options: w }), S = function() {
          };
          c.push(y || S);
        }
      });
    }
    function p() {
      c.forEach(function(f) {
        return f();
      }), c = [];
    }
    return v;
  };
}
Kr();
var F0 = [Ri, zi, Ni, Pi];
Kr({ defaultModifiers: F0 });
var B0 = [Ri, zi, Ni, Pi, $0, y0, O0, l0, C0], Hi = Kr({ defaultModifiers: B0 });
const z0 = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = H0(i);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, l = _(() => {
    const { onFirstUpdate: i, placement: u, strategy: c, modifiers: d } = h(n);
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
  }), r = Sn(), s = k({
    styles: {
      popper: {
        position: h(l).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), a = () => {
    r.value && (r.value.destroy(), r.value = void 0);
  };
  return Y(l, (i) => {
    const u = h(r);
    u && u.setOptions(i);
  }, {
    deep: !0
  }), Y([e, t], ([i, u]) => {
    a(), !(!i || !u) && (r.value = Hi(i, u, h(l)));
  }), Rt(() => {
    a();
  }), {
    state: _(() => {
      var i;
      return { ...((i = h(r)) == null ? void 0 : i.state) || {} };
    }),
    styles: _(() => h(s).styles),
    attributes: _(() => h(s).attributes),
    update: () => {
      var i;
      return (i = h(r)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = h(r)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: _(() => h(r))
  };
};
function H0(e) {
  const t = Object.keys(e.elements), n = dl(t.map((l) => [l, e.styles[l] || {}])), o = dl(t.map((l) => [l, e.attributes[l]]));
  return {
    styles: n,
    attributes: o
  };
}
function ns() {
  let e;
  const t = (o, l) => {
    n(), e = window.setTimeout(o, l);
  }, n = () => window.clearTimeout(e);
  return Sr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const tr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, D0 = Symbol("elIdInjection"), Di = () => Ce() ? ve(D0, tr) : tr, Vi = (e) => {
  const t = Di();
  !Le && t === tr && je("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Nr();
  return _(() => h(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let In = [];
const os = (e) => {
  const t = e;
  t.key === Kn.esc && In.forEach((n) => n(t));
}, V0 = (e) => {
  Me(() => {
    In.length === 0 && document.addEventListener("keydown", os), Le && In.push(e);
  }), Rt(() => {
    In = In.filter((t) => t !== e), In.length === 0 && Le && document.removeEventListener("keydown", os);
  });
};
let ls;
const Ki = () => {
  const e = Nr(), t = Di(), n = _(() => `${e.value}-popper-container-${t.prefix}`), o = _(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, K0 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, W0 = () => {
  const { id: e, selector: t } = Ki();
  return hr(() => {
    Le && (process.env.NODE_ENV === "test" || !ls && !document.body.querySelector(t.value)) && (ls = K0(e.value));
  }), {
    id: e,
    selector: t
  };
}, j0 = Te({
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
  close: l
}) => {
  const { registerTimeout: r } = ns(), {
    registerTimeout: s,
    cancelTimeout: a
  } = ns();
  return {
    onOpen: (c) => {
      r(() => {
        o(c);
        const d = h(n);
        Ae(d) && d > 0 && s(() => {
          l(c);
        }, d);
      }, h(e));
    },
    onClose: (c) => {
      a(), r(() => {
        l(c);
      }, h(t));
    }
  };
}, ji = Symbol("elForwardRef"), U0 = (e) => {
  lt(ji, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, q0 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), rs = k(0), G0 = 2e3, Ui = Symbol("zIndexContextKey"), qi = (e) => {
  const t = e || (Ce() ? ve(Ui, void 0) : void 0), n = _(() => {
    const r = h(t);
    return Ae(r) ? r : G0;
  }), o = _(() => n.value + rs.value);
  return {
    initialZIndex: n,
    currentZIndex: o,
    nextZIndex: () => (rs.value++, o.value)
  };
};
function Y0(e) {
  const t = k();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: l, selectionEnd: r, value: s } = e.value;
    if (l == null || r == null)
      return;
    const a = s.slice(0, Math.max(0, l)), i = s.slice(Math.max(0, r));
    t.value = {
      selectionStart: l,
      selectionEnd: r,
      value: s,
      beforeTxt: a,
      afterTxt: i
    };
  }
  function o() {
    if (e.value == null || t.value == null)
      return;
    const { value: l } = e.value, { beforeTxt: r, afterTxt: s, selectionStart: a } = t.value;
    if (r == null || s == null || a == null)
      return;
    let i = l.length;
    if (l.endsWith(s))
      i = l.length - s.length;
    else if (l.startsWith(r))
      i = r.length;
    else {
      const u = r[a - 1], c = l.indexOf(u, a - 1);
      c !== -1 && (i = c + 1);
    }
    e.value.setSelectionRange(i, i);
  }
  return [n, o];
}
const to = $l({
  type: String,
  values: xo,
  required: !1
}), Gi = Symbol("size"), X0 = () => {
  const e = ve(Gi, {});
  return _(() => h(e.size) || "");
};
function Q0(e, { afterFocus: t, afterBlur: n } = {}) {
  const o = Ce(), { emit: l } = o, r = Sn(), s = k(!1), a = (c) => {
    s.value || (s.value = !0, l("focus", c), t == null || t());
  }, i = (c) => {
    var d;
    c.relatedTarget && ((d = r.value) != null && d.contains(c.relatedTarget)) || (s.value = !1, l("blur", c), n == null || n());
  }, u = () => {
    var c;
    (c = e.value) == null || c.focus();
  };
  return Y(r, (c) => {
    c && c.setAttribute("tabindex", "-1");
  }), en(r, "click", u), {
    wrapperRef: r,
    isFocused: s,
    handleFocus: a,
    handleBlur: i
  };
}
const Yi = Symbol(), vl = k();
function Xi(e, t = void 0) {
  const n = Ce() ? ve(Yi, vl) : vl;
  return e ? _(() => {
    var o, l;
    return (l = (o = n.value) == null ? void 0 : o[e]) != null ? l : t;
  }) : n;
}
const Z0 = (e, t, n = !1) => {
  var o;
  const l = !!Ce(), r = l ? Xi() : void 0, s = (o = t == null ? void 0 : t.provide) != null ? o : l ? lt : void 0;
  if (!s) {
    je("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const a = _(() => {
    const i = h(e);
    return r != null && r.value ? J0(r.value, i) : i;
  });
  return s(Yi, a), s(Ei, _(() => a.value.locale)), s(Ti, _(() => a.value.namespace)), s(Ui, _(() => a.value.zIndex)), s(Gi, {
    size: _(() => a.value.size || "")
  }), (n || !vl.value) && (vl.value = a.value), a;
}, J0 = (e, t) => {
  var n;
  const o = [.../* @__PURE__ */ new Set([...Ua(e), ...Ua(t)])], l = {};
  for (const r of o)
    l[r] = (n = t[r]) != null ? n : e[r];
  return l;
}, eb = Te({
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
}), tb = {}, nb = H({
  name: "ElConfigProvider",
  props: eb,
  setup(e, { slots: t }) {
    Y(() => e.message, (o) => {
      Object.assign(tb, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Z0(e);
    return () => K(t, "default", { config: n == null ? void 0 : n.value });
  }
}), Qi = ut(nb);
var ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
const ob = Te({
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
  props: ob,
  setup(e) {
    const t = e, n = de("icon"), o = _(() => {
      const { size: l, color: r } = t;
      return !l && !r ? {} : {
        fontSize: Hn(l) ? void 0 : Jl(l),
        "--color": r
      };
    });
    return (l, r) => (E(), P("i", xe({
      class: h(n).b(),
      style: h(o)
    }, l.$attrs), [
      K(l.$slots, "default")
    ], 16));
  }
});
var ab = /* @__PURE__ */ ye(rb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const De = ut(ab), Wr = Symbol("formContextKey"), hl = Symbol("formItemContextKey"), On = (e, t = {}) => {
  const n = k(void 0), o = t.prop ? n : Oi("size"), l = t.global ? n : X0(), r = t.form ? { size: void 0 } : ve(Wr, void 0), s = t.formItem ? { size: void 0 } : ve(hl, void 0);
  return _(() => o.value || h(e) || (s == null ? void 0 : s.size) || (r == null ? void 0 : r.size) || l.value || "");
}, kl = (e) => {
  const t = Oi("disabled"), n = ve(Wr, void 0);
  return _(() => t.value || h(e) || (n == null ? void 0 : n.disabled) || !1);
}, no = () => {
  const e = ve(Wr, void 0), t = ve(hl, void 0);
  return {
    form: e,
    formItem: t
  };
}, jr = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = k(!1)), o || (o = k(!1));
  const l = k();
  let r;
  const s = _(() => {
    var a;
    return !!(!e.label && t && t.inputIds && ((a = t.inputIds) == null ? void 0 : a.length) <= 1);
  });
  return Me(() => {
    r = Y([Lt(e, "id"), n], ([a, i]) => {
      const u = a ?? (i ? void 0 : Vi().value);
      u !== l.value && (t != null && t.removeInputId && (l.value && t.removeInputId(l.value), !(o != null && o.value) && !i && u && t.addInputId(u)), l.value = u);
    }, { immediate: !0 });
  }), To(() => {
    r && r(), t != null && t.removeInputId && l.value && t.removeInputId(l.value);
  }), {
    isLabeledByFormItem: s,
    inputId: l
  };
};
let At;
const sb = `
  height:0 !important;
  visibility:hidden !important;
  ${_f() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, ib = [
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
function ub(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), l = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: ib.map((s) => `${s}:${t.getPropertyValue(s)}`).join(";"), paddingSize: o, borderSize: l, boxSizing: n };
}
function as(e, t = 1, n) {
  var o;
  At || (At = document.createElement("textarea"), document.body.appendChild(At));
  const { paddingSize: l, borderSize: r, boxSizing: s, contextStyle: a } = ub(e);
  At.setAttribute("style", `${a};${sb}`), At.value = e.value || e.placeholder || "";
  let i = At.scrollHeight;
  const u = {};
  s === "border-box" ? i = i + r : s === "content-box" && (i = i - l), At.value = "";
  const c = At.scrollHeight - l;
  if (Ae(t)) {
    let d = c * t;
    s === "border-box" && (d = d + l + r), i = Math.max(d, i), u.minHeight = `${d}px`;
  }
  if (Ae(n)) {
    let d = c * n;
    s === "border-box" && (d = d + l + r), i = Math.min(d, i);
  }
  return u.height = `${i}px`, (o = At.parentNode) == null || o.removeChild(At), At = void 0, u;
}
const cb = Te({
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
    type: Wt
  },
  prefixIcon: {
    type: Wt
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
    default: () => un({})
  }
}), db = {
  [ot]: (e) => _t(e),
  input: (e) => _t(e),
  change: (e) => _t(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, fb = ["role"], pb = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], vb = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], hb = H({
  name: "ElInput",
  inheritAttrs: !1
}), gb = /* @__PURE__ */ H({
  ...hb,
  props: cb,
  emits: db,
  setup(e, { expose: t, emit: n }) {
    const o = e, l = qu(), r = gl(), s = _(() => {
      const z = {};
      return o.containerRole === "combobox" && (z["aria-haspopup"] = l["aria-haspopup"], z["aria-owns"] = l["aria-owns"], z["aria-expanded"] = l["aria-expanded"]), z;
    }), a = _(() => [
      o.type === "textarea" ? m.b() : f.b(),
      f.m(g.value),
      f.is("disabled", p.value),
      f.is("exceed", me.value),
      {
        [f.b("group")]: r.prepend || r.append,
        [f.bm("group", "append")]: r.append,
        [f.bm("group", "prepend")]: r.prepend,
        [f.m("prefix")]: r.prefix || o.prefixIcon,
        [f.m("suffix")]: r.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [f.bm("suffix", "password-clear")]: U.value && re.value
      },
      l.class
    ]), i = _(() => [
      f.e("wrapper"),
      f.is("focus", D.value)
    ]), u = Pm({
      excludeKeys: _(() => Object.keys(s.value))
    }), { form: c, formItem: d } = no(), { inputId: v } = jr(o, {
      formItemContext: d
    }), g = On(), p = kl(), f = de("input"), m = de("textarea"), b = Sn(), w = Sn(), C = k(!1), y = k(!1), S = k(!1), T = k(), $ = Sn(o.inputStyle), x = _(() => b.value || w.value), { wrapperRef: F, isFocused: D, handleFocus: B, handleBlur: I } = Q0(x, {
      afterBlur() {
        var z;
        o.validateEvent && ((z = d == null ? void 0 : d.validate) == null || z.call(d, "blur").catch((J) => je(J)));
      }
    }), Q = _(() => {
      var z;
      return (z = c == null ? void 0 : c.statusIcon) != null ? z : !1;
    }), ee = _(() => (d == null ? void 0 : d.validateState) || ""), oe = _(() => ee.value && Ci[ee.value]), le = _(() => S.value ? ef : Td), j = _(() => [
      l.style,
      o.inputStyle
    ]), ne = _(() => [
      o.inputStyle,
      $.value,
      { resize: o.resize }
    ]), A = _(() => _l(o.modelValue) ? "" : String(o.modelValue)), U = _(() => o.clearable && !p.value && !o.readonly && !!A.value && (D.value || C.value)), re = _(() => o.showPassword && !p.value && !o.readonly && !!A.value && (!!A.value || D.value)), ue = _(() => o.showWordLimit && !!u.value.maxlength && (o.type === "text" || o.type === "textarea") && !p.value && !o.readonly && !o.showPassword), ge = _(() => A.value.length), me = _(() => !!ue.value && ge.value > Number(u.value.maxlength)), _e = _(() => !!r.suffix || !!o.suffixIcon || U.value || o.showPassword || ue.value || !!ee.value && Q.value), [ke, Ne] = Y0(b);
    Bn(w, (z) => {
      if (Pe(), !ue.value || o.resize !== "both")
        return;
      const J = z[0], { width: Ee } = J.contentRect;
      T.value = {
        right: `calc(100% - ${Ee + 15 + 6}px)`
      };
    });
    const Se = () => {
      const { type: z, autosize: J } = o;
      if (!(!Le || z !== "textarea" || !w.value))
        if (J) {
          const Ee = Et(J) ? J.minRows : void 0, ft = Et(J) ? J.maxRows : void 0, Gt = as(w.value, Ee, ft);
          $.value = {
            overflowY: "hidden",
            ...Gt
          }, he(() => {
            w.value.offsetHeight, $.value = Gt;
          });
        } else
          $.value = {
            minHeight: as(w.value).minHeight
          };
    }, Pe = ((z) => {
      let J = !1;
      return () => {
        var Ee;
        if (J || !o.autosize)
          return;
        ((Ee = w.value) == null ? void 0 : Ee.offsetParent) === null || (z(), J = !0);
      };
    })(Se), Be = () => {
      const z = x.value, J = o.formatter ? o.formatter(A.value) : A.value;
      !z || z.value === J || (z.value = J);
    }, xt = async (z) => {
      ke();
      let { value: J } = z.target;
      if (o.formatter && (J = o.parser ? o.parser(J) : J), !y.value) {
        if (J === A.value) {
          Be();
          return;
        }
        n(ot, J), n("input", J), await he(), Be(), Ne();
      }
    }, gt = (z) => {
      n("change", z.target.value);
    }, mt = (z) => {
      n("compositionstart", z), y.value = !0;
    }, bt = (z) => {
      var J;
      n("compositionupdate", z);
      const Ee = (J = z.target) == null ? void 0 : J.value, ft = Ee[Ee.length - 1] || "";
      y.value = !_i(ft);
    }, yt = (z) => {
      n("compositionend", z), y.value && (y.value = !1, xt(z));
    }, wt = () => {
      S.value = !S.value, ct();
    }, ct = async () => {
      var z;
      await he(), (z = x.value) == null || z.focus();
    }, qt = () => {
      var z;
      return (z = x.value) == null ? void 0 : z.blur();
    }, Je = (z) => {
      C.value = !1, n("mouseleave", z);
    }, Ct = (z) => {
      C.value = !0, n("mouseenter", z);
    }, dt = (z) => {
      n("keydown", z);
    }, zt = () => {
      var z;
      (z = x.value) == null || z.select();
    }, St = () => {
      n(ot, ""), n("change", ""), n("clear"), n("input", "");
    };
    return Y(() => o.modelValue, () => {
      var z;
      he(() => Se()), o.validateEvent && ((z = d == null ? void 0 : d.validate) == null || z.call(d, "change").catch((J) => je(J)));
    }), Y(A, () => Be()), Y(() => o.type, async () => {
      await he(), Be(), Se();
    }), Me(() => {
      !o.formatter && o.parser && je("ElInput", "If you set the parser, you also need to set the formatter."), Be(), he(Se);
    }), t({
      input: b,
      textarea: w,
      ref: x,
      textareaStyle: ne,
      autosize: Lt(o, "autosize"),
      focus: ct,
      blur: qt,
      select: zt,
      clear: St,
      resizeTextarea: Se
    }), (z, J) => We((E(), P("div", xe(h(s), {
      class: h(a),
      style: h(j),
      role: z.containerRole,
      onMouseenter: Ct,
      onMouseleave: Je
    }), [
      G(" input "),
      z.type !== "textarea" ? (E(), P($e, { key: 0 }, [
        G(" prepend slot "),
        z.$slots.prepend ? (E(), P("div", {
          key: 0,
          class: M(h(f).be("group", "prepend"))
        }, [
          K(z.$slots, "prepend")
        ], 2)) : G("v-if", !0),
        N("div", {
          ref_key: "wrapperRef",
          ref: F,
          class: M(h(i))
        }, [
          G(" prefix slot "),
          z.$slots.prefix || z.prefixIcon ? (E(), P("span", {
            key: 0,
            class: M(h(f).e("prefix"))
          }, [
            N("span", {
              class: M(h(f).e("prefix-inner"))
            }, [
              K(z.$slots, "prefix"),
              z.prefixIcon ? (E(), V(h(De), {
                key: 0,
                class: M(h(f).e("icon"))
              }, {
                default: R(() => [
                  (E(), V(Ze(z.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0)
            ], 2)
          ], 2)) : G("v-if", !0),
          N("input", xe({
            id: h(v),
            ref_key: "input",
            ref: b,
            class: h(f).e("inner")
          }, h(u), {
            type: z.showPassword ? S.value ? "text" : "password" : z.type,
            disabled: h(p),
            formatter: z.formatter,
            parser: z.parser,
            readonly: z.readonly,
            autocomplete: z.autocomplete,
            tabindex: z.tabindex,
            "aria-label": z.label,
            placeholder: z.placeholder,
            style: z.inputStyle,
            form: o.form,
            onCompositionstart: mt,
            onCompositionupdate: bt,
            onCompositionend: yt,
            onInput: xt,
            onFocus: J[0] || (J[0] = (...Ee) => h(B) && h(B)(...Ee)),
            onBlur: J[1] || (J[1] = (...Ee) => h(I) && h(I)(...Ee)),
            onChange: gt,
            onKeydown: dt
          }), null, 16, pb),
          G(" suffix slot "),
          h(_e) ? (E(), P("span", {
            key: 1,
            class: M(h(f).e("suffix"))
          }, [
            N("span", {
              class: M(h(f).e("suffix-inner"))
            }, [
              !h(U) || !h(re) || !h(ue) ? (E(), P($e, { key: 0 }, [
                K(z.$slots, "suffix"),
                z.suffixIcon ? (E(), V(h(De), {
                  key: 0,
                  class: M(h(f).e("icon"))
                }, {
                  default: R(() => [
                    (E(), V(Ze(z.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : G("v-if", !0)
              ], 64)) : G("v-if", !0),
              h(U) ? (E(), V(h(De), {
                key: 1,
                class: M([h(f).e("icon"), h(f).e("clear")]),
                onMousedown: Xe(h(wo), ["prevent"]),
                onClick: St
              }, {
                default: R(() => [
                  Z(h(wr))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : G("v-if", !0),
              h(re) ? (E(), V(h(De), {
                key: 2,
                class: M([h(f).e("icon"), h(f).e("password")]),
                onClick: wt
              }, {
                default: R(() => [
                  (E(), V(Ze(h(le))))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0),
              h(ue) ? (E(), P("span", {
                key: 3,
                class: M(h(f).e("count"))
              }, [
                N("span", {
                  class: M(h(f).e("count-inner"))
                }, ie(h(ge)) + " / " + ie(h(u).maxlength), 3)
              ], 2)) : G("v-if", !0),
              h(ee) && h(oe) && h(Q) ? (E(), V(h(De), {
                key: 4,
                class: M([
                  h(f).e("icon"),
                  h(f).e("validateIcon"),
                  h(f).is("loading", h(ee) === "validating")
                ])
              }, {
                default: R(() => [
                  (E(), V(Ze(h(oe))))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0)
            ], 2)
          ], 2)) : G("v-if", !0)
        ], 2),
        G(" append slot "),
        z.$slots.append ? (E(), P("div", {
          key: 1,
          class: M(h(f).be("group", "append"))
        }, [
          K(z.$slots, "append")
        ], 2)) : G("v-if", !0)
      ], 64)) : (E(), P($e, { key: 1 }, [
        G(" textarea "),
        N("textarea", xe({
          id: h(v),
          ref_key: "textarea",
          ref: w,
          class: h(m).e("inner")
        }, h(u), {
          tabindex: z.tabindex,
          disabled: h(p),
          readonly: z.readonly,
          autocomplete: z.autocomplete,
          style: h(ne),
          "aria-label": z.label,
          placeholder: z.placeholder,
          form: o.form,
          onCompositionstart: mt,
          onCompositionupdate: bt,
          onCompositionend: yt,
          onInput: xt,
          onFocus: J[2] || (J[2] = (...Ee) => h(B) && h(B)(...Ee)),
          onBlur: J[3] || (J[3] = (...Ee) => h(I) && h(I)(...Ee)),
          onChange: gt,
          onKeydown: dt
        }), null, 16, vb),
        h(ue) ? (E(), P("span", {
          key: 0,
          style: we(T.value),
          class: M(h(f).e("count"))
        }, ie(h(ge)) + " / " + ie(h(u).maxlength), 7)) : G("v-if", !0)
      ], 64))
    ], 16, fb)), [
      [fn, z.type !== "hidden"]
    ]);
  }
});
var mb = /* @__PURE__ */ ye(gb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Zi = ut(mb), Ln = 4, bb = {
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
}, yb = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Ji = Symbol("scrollbarContextKey"), wb = Te({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Cb = "Thumb", Sb = /* @__PURE__ */ H({
  __name: "thumb",
  props: wb,
  setup(e) {
    const t = e, n = ve(Ji), o = de("scrollbar");
    n || mi(Cb, "can not inject scrollbar context");
    const l = k(), r = k(), s = k({}), a = k(!1);
    let i = !1, u = !1, c = Le ? document.onselectstart : null;
    const d = _(() => bb[t.vertical ? "vertical" : "horizontal"]), v = _(() => yb({
      size: t.size,
      move: t.move,
      bar: d.value
    })), g = _(() => l.value[d.value.offset] ** 2 / n.wrapElement[d.value.scrollSize] / t.ratio / r.value[d.value.offset]), p = (T) => {
      var $;
      if (T.stopPropagation(), T.ctrlKey || [1, 2].includes(T.button))
        return;
      ($ = window.getSelection()) == null || $.removeAllRanges(), m(T);
      const x = T.currentTarget;
      x && (s.value[d.value.axis] = x[d.value.offset] - (T[d.value.client] - x.getBoundingClientRect()[d.value.direction]));
    }, f = (T) => {
      if (!r.value || !l.value || !n.wrapElement)
        return;
      const $ = Math.abs(T.target.getBoundingClientRect()[d.value.direction] - T[d.value.client]), x = r.value[d.value.offset] / 2, F = ($ - x) * 100 * g.value / l.value[d.value.offset];
      n.wrapElement[d.value.scroll] = F * n.wrapElement[d.value.scrollSize] / 100;
    }, m = (T) => {
      T.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", b), document.addEventListener("mouseup", w), c = document.onselectstart, document.onselectstart = () => !1;
    }, b = (T) => {
      if (!l.value || !r.value || i === !1)
        return;
      const $ = s.value[d.value.axis];
      if (!$)
        return;
      const x = (l.value.getBoundingClientRect()[d.value.direction] - T[d.value.client]) * -1, F = r.value[d.value.offset] - $, D = (x - F) * 100 * g.value / l.value[d.value.offset];
      n.wrapElement[d.value.scroll] = D * n.wrapElement[d.value.scrollSize] / 100;
    }, w = () => {
      i = !1, s.value[d.value.axis] = 0, document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", w), S(), u && (a.value = !1);
    }, C = () => {
      u = !1, a.value = !!t.size;
    }, y = () => {
      u = !0, a.value = i;
    };
    Rt(() => {
      S(), document.removeEventListener("mouseup", w);
    });
    const S = () => {
      document.onselectstart !== c && (document.onselectstart = c);
    };
    return en(Lt(n, "scrollbarElement"), "mousemove", C), en(Lt(n, "scrollbarElement"), "mouseleave", y), (T, $) => (E(), V(yo, {
      name: h(o).b("fade"),
      persisted: ""
    }, {
      default: R(() => [
        We(N("div", {
          ref_key: "instance",
          ref: l,
          class: M([h(o).e("bar"), h(o).is(h(d).key)]),
          onMousedown: f
        }, [
          N("div", {
            ref_key: "thumb",
            ref: r,
            class: M(h(o).e("thumb")),
            style: we(h(v)),
            onMousedown: p
          }, null, 38)
        ], 34), [
          [fn, T.always || a.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var ss = /* @__PURE__ */ ye(Sb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const _b = Te({
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
}), $b = /* @__PURE__ */ H({
  __name: "bar",
  props: _b,
  setup(e, { expose: t }) {
    const n = e, o = k(0), l = k(0);
    return t({
      handleScroll: (s) => {
        if (s) {
          const a = s.offsetHeight - Ln, i = s.offsetWidth - Ln;
          l.value = s.scrollTop * 100 / a * n.ratioY, o.value = s.scrollLeft * 100 / i * n.ratioX;
        }
      }
    }), (s, a) => (E(), P($e, null, [
      Z(ss, {
        move: o.value,
        ratio: s.ratioX,
        size: s.width,
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      Z(ss, {
        move: l.value,
        ratio: s.ratioY,
        size: s.height,
        vertical: "",
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Eb = /* @__PURE__ */ ye($b, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const Tb = Te({
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
  }
}), kb = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Ae)
}, nr = "ElScrollbar", Ob = H({
  name: nr
}), xb = /* @__PURE__ */ H({
  ...Ob,
  props: Tb,
  emits: kb,
  setup(e, { expose: t, emit: n }) {
    const o = e, l = de("scrollbar");
    let r, s;
    const a = k(), i = k(), u = k(), c = k("0"), d = k("0"), v = k(), g = k(1), p = k(1), f = _(() => {
      const $ = {};
      return o.height && ($.height = Jl(o.height)), o.maxHeight && ($.maxHeight = Jl(o.maxHeight)), [o.wrapStyle, $];
    }), m = _(() => [
      o.wrapClass,
      l.e("wrap"),
      { [l.em("wrap", "hidden-default")]: !o.native }
    ]), b = _(() => [l.e("view"), o.viewClass]), w = () => {
      var $;
      i.value && (($ = v.value) == null || $.handleScroll(i.value), n("scroll", {
        scrollTop: i.value.scrollTop,
        scrollLeft: i.value.scrollLeft
      }));
    };
    function C($, x) {
      Et($) ? i.value.scrollTo($) : Ae($) && Ae(x) && i.value.scrollTo($, x);
    }
    const y = ($) => {
      if (!Ae($)) {
        je(nr, "value must be a number");
        return;
      }
      i.value.scrollTop = $;
    }, S = ($) => {
      if (!Ae($)) {
        je(nr, "value must be a number");
        return;
      }
      i.value.scrollLeft = $;
    }, T = () => {
      if (!i.value)
        return;
      const $ = i.value.offsetHeight - Ln, x = i.value.offsetWidth - Ln, F = $ ** 2 / i.value.scrollHeight, D = x ** 2 / i.value.scrollWidth, B = Math.max(F, o.minSize), I = Math.max(D, o.minSize);
      g.value = F / ($ - F) / (B / ($ - B)), p.value = D / (x - D) / (I / (x - I)), d.value = B + Ln < $ ? `${B}px` : "", c.value = I + Ln < x ? `${I}px` : "";
    };
    return Y(() => o.noresize, ($) => {
      $ ? (r == null || r(), s == null || s()) : ({ stop: r } = Bn(u, T), s = en("resize", T));
    }, { immediate: !0 }), Y(() => [o.maxHeight, o.height], () => {
      o.native || he(() => {
        var $;
        T(), i.value && (($ = v.value) == null || $.handleScroll(i.value));
      });
    }), lt(Ji, Qn({
      scrollbarElement: a,
      wrapElement: i
    })), Me(() => {
      o.native || he(() => {
        T();
      });
    }), gr(() => T()), t({
      wrapRef: i,
      update: T,
      scrollTo: C,
      setScrollTop: y,
      setScrollLeft: S,
      handleScroll: w
    }), ($, x) => (E(), P("div", {
      ref_key: "scrollbarRef",
      ref: a,
      class: M(h(l).b())
    }, [
      N("div", {
        ref_key: "wrapRef",
        ref: i,
        class: M(h(m)),
        style: we(h(f)),
        onScroll: w
      }, [
        (E(), V(Ze($.tag), {
          ref_key: "resizeRef",
          ref: u,
          class: M(h(b)),
          style: we($.viewStyle)
        }, {
          default: R(() => [
            K($.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      $.native ? G("v-if", !0) : (E(), V(Eb, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        height: d.value,
        width: c.value,
        always: $.always,
        "ratio-x": p.value,
        "ratio-y": g.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var Pb = /* @__PURE__ */ ye(xb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const Ol = ut(Pb), Ur = Symbol("popper"), eu = Symbol("popperContent"), Ab = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], tu = Te({
  role: {
    type: String,
    values: Ab,
    default: "tooltip"
  }
}), Mb = H({
  name: "ElPopper",
  inheritAttrs: !1
}), Ib = /* @__PURE__ */ H({
  ...Mb,
  props: tu,
  setup(e, { expose: t }) {
    const n = e, o = k(), l = k(), r = k(), s = k(), a = _(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: l,
      contentRef: r,
      referenceRef: s,
      role: a
    };
    return t(i), lt(Ur, i), (u, c) => K(u.$slots, "default");
  }
});
var Lb = /* @__PURE__ */ ye(Ib, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const nu = Te({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Nb = H({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Rb = /* @__PURE__ */ H({
  ...Nb,
  props: nu,
  setup(e, { expose: t }) {
    const n = e, o = de("popper"), { arrowOffset: l, arrowRef: r, arrowStyle: s } = ve(eu, void 0);
    return Y(() => n.arrowOffset, (a) => {
      l.value = a;
    }), Rt(() => {
      r.value = void 0;
    }), t({
      arrowRef: r
    }), (a, i) => (E(), P("span", {
      ref_key: "arrowRef",
      ref: r,
      class: M(h(o).e("arrow")),
      style: we(h(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Fb = /* @__PURE__ */ ye(Rb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const Fl = "ElOnlyChild", Bb = H({
  name: Fl,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const l = ve(ji), r = q0((o = l == null ? void 0 : l.setForwardRef) != null ? o : wo);
    return () => {
      var s;
      const a = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!a)
        return null;
      if (a.length > 1)
        return je(Fl, "requires exact only one valid child."), null;
      const i = ou(a);
      return i ? We(Gu(i, n), [[r]]) : (je(Fl, "no valid child node found"), null);
    };
  }
});
function ou(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Et(n))
      switch (n.type) {
        case zs:
          continue;
        case Bs:
        case "svg":
          return is(n);
        case $e:
          return ou(n.children);
        default:
          return n;
      }
    return is(n);
  }
  return null;
}
function is(e) {
  const t = de("only-child");
  return Z("span", {
    class: t.e("content")
  }, [e]);
}
const lu = Te({
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
}), zb = H({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Hb = /* @__PURE__ */ H({
  ...zb,
  props: lu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: l } = ve(Ur, void 0);
    U0(l);
    const r = _(() => a.value ? n.id : void 0), s = _(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), a = _(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = _(() => a.value ? `${n.open}` : void 0);
    let u;
    return Me(() => {
      Y(() => n.virtualRef, (c) => {
        c && (l.value = cn(c));
      }, {
        immediate: !0
      }), Y(l, (c, d) => {
        u == null || u(), u = void 0, Vn(c) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((v) => {
          var g;
          const p = n[v];
          p && (c.addEventListener(v.slice(2).toLowerCase(), p), (g = d == null ? void 0 : d.removeEventListener) == null || g.call(d, v.slice(2).toLowerCase(), p));
        }), u = Y([r, s, a, i], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, p) => {
            _l(v[p]) ? c.removeAttribute(g) : c.setAttribute(g, v[p]);
          });
        }, { immediate: !0 })), Vn(d) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((v) => d.removeAttribute(v));
      }, {
        immediate: !0
      });
    }), Rt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: l
    }), (c, d) => c.virtualTriggering ? G("v-if", !0) : (E(), V(h(Bb), xe({ key: 0 }, c.$attrs, {
      "aria-controls": h(r),
      "aria-describedby": h(s),
      "aria-expanded": h(i),
      "aria-haspopup": h(a)
    }), {
      default: R(() => [
        K(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Db = /* @__PURE__ */ ye(Hb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Bl = "focus-trap.focus-after-trapped", zl = "focus-trap.focus-after-released", Vb = "focus-trap.focusout-prevented", us = {
  cancelable: !0,
  bubbles: !1
}, Kb = {
  cancelable: !0,
  bubbles: !1
}, cs = "focusAfterTrapped", ds = "focusAfterReleased", Wb = Symbol("elFocusTrap"), qr = k(), xl = k(0), Gr = k(0);
let Lo = 0;
const ru = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const l = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || l ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, fs = (e, t) => {
  for (const n of e)
    if (!jb(n, t))
      return n;
}, jb = (e, t) => {
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
}, Ub = (e) => {
  const t = ru(e), n = fs(t, e), o = fs(t.reverse(), e);
  return [n, o];
}, qb = (e) => e instanceof HTMLInputElement && "select" in e, an = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Gr.value = window.performance.now(), e !== n && qb(e) && t && e.select();
  }
};
function ps(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Gb = () => {
  let e = [];
  return {
    push: (o) => {
      const l = e[0];
      l && o !== l && l.pause(), e = ps(e, o), e.unshift(o);
    },
    remove: (o) => {
      var l, r;
      e = ps(e, o), (r = (l = e[0]) == null ? void 0 : l.resume) == null || r.call(l);
    }
  };
}, Yb = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (an(o, t), document.activeElement !== n)
      return;
}, vs = Gb(), Xb = () => xl.value > Gr.value, No = () => {
  qr.value = "pointer", xl.value = window.performance.now();
}, hs = () => {
  qr.value = "keyboard", xl.value = window.performance.now();
}, Qb = () => (Me(() => {
  Lo === 0 && (document.addEventListener("mousedown", No), document.addEventListener("touchstart", No), document.addEventListener("keydown", hs)), Lo++;
}), Rt(() => {
  Lo--, Lo <= 0 && (document.removeEventListener("mousedown", No), document.removeEventListener("touchstart", No), document.removeEventListener("keydown", hs));
}), {
  focusReason: qr,
  lastUserFocusTimestamp: xl,
  lastAutomatedFocusTimestamp: Gr
}), Ro = (e) => new CustomEvent(Vb, {
  ...Kb,
  detail: e
}), Zb = H({
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
    cs,
    ds,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = k();
    let o, l;
    const { focusReason: r } = Qb();
    V0((p) => {
      e.trapped && !s.paused && t("release-requested", p);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, a = (p) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { key: f, altKey: m, ctrlKey: b, metaKey: w, currentTarget: C, shiftKey: y } = p, { loop: S } = e, T = f === Kn.tab && !m && !b && !w, $ = document.activeElement;
      if (T && $) {
        const x = C, [F, D] = Ub(x);
        if (F && D) {
          if (!y && $ === D) {
            const I = Ro({
              focusReason: r.value
            });
            t("focusout-prevented", I), I.defaultPrevented || (p.preventDefault(), S && an(F, !0));
          } else if (y && [F, x].includes($)) {
            const I = Ro({
              focusReason: r.value
            });
            t("focusout-prevented", I), I.defaultPrevented || (p.preventDefault(), S && an(D, !0));
          }
        } else if ($ === x) {
          const I = Ro({
            focusReason: r.value
          });
          t("focusout-prevented", I), I.defaultPrevented || p.preventDefault();
        }
      }
    };
    lt(Wb, {
      focusTrapRef: n,
      onKeydown: a
    }), Y(() => e.focusTrapEl, (p) => {
      p && (n.value = p);
    }, { immediate: !0 }), Y([n], ([p], [f]) => {
      p && (p.addEventListener("keydown", a), p.addEventListener("focusin", c), p.addEventListener("focusout", d)), f && (f.removeEventListener("keydown", a), f.removeEventListener("focusin", c), f.removeEventListener("focusout", d));
    });
    const i = (p) => {
      t(cs, p);
    }, u = (p) => t(ds, p), c = (p) => {
      const f = h(n);
      if (!f)
        return;
      const m = p.target, b = p.relatedTarget, w = m && f.contains(m);
      e.trapped || b && f.contains(b) || (o = b), w && t("focusin", p), !s.paused && e.trapped && (w ? l = m : an(l, !0));
    }, d = (p) => {
      const f = h(n);
      if (!(s.paused || !f))
        if (e.trapped) {
          const m = p.relatedTarget;
          !_l(m) && !f.contains(m) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const b = Ro({
                focusReason: r.value
              });
              t("focusout-prevented", b), b.defaultPrevented || an(l, !0);
            }
          }, 0);
        } else {
          const m = p.target;
          m && f.contains(m) || t("focusout", p);
        }
    };
    async function v() {
      await he();
      const p = h(n);
      if (p) {
        vs.push(s);
        const f = p.contains(document.activeElement) ? o : document.activeElement;
        if (o = f, !p.contains(f)) {
          const b = new Event(Bl, us);
          p.addEventListener(Bl, i), p.dispatchEvent(b), b.defaultPrevented || he(() => {
            let w = e.focusStartEl;
            _t(w) || (an(w), document.activeElement !== w && (w = "first")), w === "first" && Yb(ru(p), !0), (document.activeElement === f || w === "container") && an(p);
          });
        }
      }
    }
    function g() {
      const p = h(n);
      if (p) {
        p.removeEventListener(Bl, i);
        const f = new CustomEvent(zl, {
          ...us,
          detail: {
            focusReason: r.value
          }
        });
        p.addEventListener(zl, u), p.dispatchEvent(f), !f.defaultPrevented && (r.value == "keyboard" || !Xb() || p.contains(document.activeElement)) && an(o ?? document.body), p.removeEventListener(zl, u), vs.remove(s);
      }
    }
    return Me(() => {
      e.trapped && v(), Y(() => e.trapped, (p) => {
        p ? v() : g();
      });
    }), Rt(() => {
      e.trapped && g();
    }), {
      onKeydown: a
    };
  }
});
function Jb(e, t, n, o, l, r) {
  return K(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var ey = /* @__PURE__ */ ye(Zb, [["render", Jb], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const ty = ["fixed", "absolute"], ny = Te({
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
    values: El,
    default: "bottom"
  },
  popperOptions: {
    type: fe(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: ty,
    default: "absolute"
  }
}), au = Te({
  ...ny,
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
}), oy = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, ly = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: l } = e, r = {
    placement: n,
    strategy: o,
    ...l,
    modifiers: [...ay(e), ...t]
  };
  return sy(r, l == null ? void 0 : l.modifiers), r;
}, ry = (e) => {
  if (Le)
    return cn(e);
};
function ay(e) {
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
function sy(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const iy = 0, uy = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: l } = ve(Ur, void 0), r = k(), s = k(), a = _(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = _(() => {
    var b;
    const w = h(r), C = (b = h(s)) != null ? b : iy;
    return {
      name: "arrow",
      enabled: !dm(w),
      options: {
        element: w,
        padding: C
      }
    };
  }), u = _(() => ({
    onFirstUpdate: () => {
      p();
    },
    ...ly(e, [
      h(i),
      h(a)
    ])
  })), c = _(() => ry(e.referenceEl) || h(o)), { attributes: d, state: v, styles: g, update: p, forceUpdate: f, instanceRef: m } = z0(c, n, u);
  return Y(m, (b) => t.value = b), Me(() => {
    Y(() => {
      var b;
      return (b = h(c)) == null ? void 0 : b.getBoundingClientRect();
    }, () => {
      p();
    });
  }), {
    attributes: d,
    arrowRef: r,
    contentRef: n,
    instanceRef: m,
    state: v,
    styles: g,
    role: l,
    forceUpdate: f,
    update: p
  };
}, cy = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: l } = qi(), r = de("popper"), s = _(() => h(t).popper), a = k(e.zIndex || l()), i = _(() => [
    r.b(),
    r.is("pure", e.pure),
    r.is(e.effect),
    e.popperClass
  ]), u = _(() => [
    { zIndex: h(a) },
    h(n).popper,
    e.popperStyle || {}
  ]), c = _(() => o.value === "dialog" ? "false" : void 0), d = _(() => h(n).arrow || {});
  return {
    ariaModal: c,
    arrowStyle: d,
    contentAttrs: s,
    contentClass: i,
    contentStyle: u,
    contentZIndex: a,
    updateZIndex: () => {
      a.value = e.zIndex || l();
    }
  };
}, dy = (e, t) => {
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
}, fy = H({
  name: "ElPopperContent"
}), py = /* @__PURE__ */ H({
  ...fy,
  props: au,
  emits: oy,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: l,
      trapped: r,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: a,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: c
    } = dy(o, n), { attributes: d, arrowRef: v, contentRef: g, styles: p, instanceRef: f, role: m, update: b } = uy(o), {
      ariaModal: w,
      arrowStyle: C,
      contentAttrs: y,
      contentClass: S,
      contentStyle: T,
      updateZIndex: $
    } = cy(o, {
      styles: p,
      attributes: d,
      role: m
    }), x = ve(hl, void 0), F = k();
    lt(eu, {
      arrowStyle: C,
      arrowRef: v,
      arrowOffset: F
    }), x && (x.addInputId || x.removeInputId) && lt(hl, {
      ...x,
      addInputId: wo,
      removeInputId: wo
    });
    let D;
    const B = (Q = !0) => {
      b(), Q && $();
    }, I = () => {
      B(!1), o.visible && o.focusOnShow ? r.value = !0 : o.visible === !1 && (r.value = !1);
    };
    return Me(() => {
      Y(() => o.triggerTargetEl, (Q, ee) => {
        D == null || D(), D = void 0;
        const oe = h(Q || g.value), le = h(ee || g.value);
        Vn(oe) && (D = Y([m, () => o.ariaLabel, w, () => o.id], (j) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ne, A) => {
            _l(j[A]) ? oe.removeAttribute(ne) : oe.setAttribute(ne, j[A]);
          });
        }, { immediate: !0 })), le !== oe && Vn(le) && ["role", "aria-label", "aria-modal", "id"].forEach((j) => {
          le.removeAttribute(j);
        });
      }, { immediate: !0 }), Y(() => o.visible, I, { immediate: !0 });
    }), Rt(() => {
      D == null || D(), D = void 0;
    }), t({
      popperContentRef: g,
      popperInstanceRef: f,
      updatePopper: B,
      contentStyle: T
    }), (Q, ee) => (E(), P("div", xe({
      ref_key: "contentRef",
      ref: g
    }, h(y), {
      style: h(T),
      class: h(S),
      tabindex: "-1",
      onMouseenter: ee[0] || (ee[0] = (oe) => Q.$emit("mouseenter", oe)),
      onMouseleave: ee[1] || (ee[1] = (oe) => Q.$emit("mouseleave", oe))
    }), [
      Z(h(ey), {
        trapped: h(r),
        "trap-on-focus-in": !0,
        "focus-trap-el": h(g),
        "focus-start-el": h(l),
        onFocusAfterTrapped: h(a),
        onFocusAfterReleased: h(s),
        onFocusin: h(i),
        onFocusoutPrevented: h(u),
        onReleaseRequested: h(c)
      }, {
        default: R(() => [
          K(Q.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var vy = /* @__PURE__ */ ye(py, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const hy = ut(Lb), Yr = Symbol("elTooltip"), Xr = Te({
  ...j0,
  ...au,
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
}), su = Te({
  ...lu,
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
  useModelToggleProps: gy,
  useModelToggleEmits: my,
  useModelToggle: by
} = ki("visible"), yy = Te({
  ...tu,
  ...gy,
  ...Xr,
  ...su,
  ...nu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), wy = [
  ...my,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Cy = (e, t) => Tn(e) ? e.includes(t) : e === t, Mn = (e, t, n) => (o) => {
  Cy(h(e), t) && n(o);
}, Sy = H({
  name: "ElTooltipTrigger"
}), _y = /* @__PURE__ */ H({
  ...Sy,
  props: su,
  setup(e, { expose: t }) {
    const n = e, o = de("tooltip"), { controlled: l, id: r, open: s, onOpen: a, onClose: i, onToggle: u } = ve(Yr, void 0), c = k(null), d = () => {
      if (h(l) || n.disabled)
        return !0;
    }, v = Lt(n, "trigger"), g = Jt(d, Mn(v, "hover", a)), p = Jt(d, Mn(v, "hover", i)), f = Jt(d, Mn(v, "click", (y) => {
      y.button === 0 && u(y);
    })), m = Jt(d, Mn(v, "focus", a)), b = Jt(d, Mn(v, "focus", i)), w = Jt(d, Mn(v, "contextmenu", (y) => {
      y.preventDefault(), u(y);
    })), C = Jt(d, (y) => {
      const { code: S } = y;
      n.triggerKeys.includes(S) && (y.preventDefault(), u(y));
    });
    return t({
      triggerRef: c
    }), (y, S) => (E(), V(h(Db), {
      id: h(r),
      "virtual-ref": y.virtualRef,
      open: h(s),
      "virtual-triggering": y.virtualTriggering,
      class: M(h(o).e("trigger")),
      onBlur: h(b),
      onClick: h(f),
      onContextmenu: h(w),
      onFocus: h(m),
      onMouseenter: h(g),
      onMouseleave: h(p),
      onKeydown: h(C)
    }, {
      default: R(() => [
        K(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var $y = /* @__PURE__ */ ye(_y, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const Ey = H({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Ty = /* @__PURE__ */ H({
  ...Ey,
  props: Xr,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Ki(), l = de("tooltip"), r = k(null), s = k(!1), {
      controlled: a,
      id: i,
      open: u,
      trigger: c,
      onClose: d,
      onOpen: v,
      onShow: g,
      onHide: p,
      onBeforeShow: f,
      onBeforeHide: m
    } = ve(Yr, void 0), b = _(() => n.transition || `${l.namespace.value}-fade-in-linear`), w = _(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    Rt(() => {
      s.value = !0;
    });
    const C = _(() => h(w) ? !0 : h(u)), y = _(() => n.disabled ? !1 : h(u)), S = _(() => n.appendTo || o.value), T = _(() => {
      var j;
      return (j = n.style) != null ? j : {};
    }), $ = _(() => !h(u)), x = () => {
      p();
    }, F = () => {
      if (h(a))
        return !0;
    }, D = Jt(F, () => {
      n.enterable && h(c) === "hover" && v();
    }), B = Jt(F, () => {
      h(c) === "hover" && d();
    }), I = () => {
      var j, ne;
      (ne = (j = r.value) == null ? void 0 : j.updatePopper) == null || ne.call(j), f == null || f();
    }, Q = () => {
      m == null || m();
    }, ee = () => {
      g(), le = pf(_(() => {
        var j;
        return (j = r.value) == null ? void 0 : j.popperContentRef;
      }), () => {
        if (h(a))
          return;
        h(c) !== "hover" && d();
      });
    }, oe = () => {
      n.virtualTriggering || d();
    };
    let le;
    return Y(() => h(u), (j) => {
      j || le == null || le();
    }, {
      flush: "post"
    }), Y(() => n.content, () => {
      var j, ne;
      (ne = (j = r.value) == null ? void 0 : j.updatePopper) == null || ne.call(j);
    }), t({
      contentRef: r
    }), (j, ne) => (E(), V(Yu, {
      disabled: !j.teleported,
      to: h(S)
    }, [
      Z(yo, {
        name: h(b),
        onAfterLeave: x,
        onBeforeEnter: I,
        onAfterEnter: ee,
        onBeforeLeave: Q
      }, {
        default: R(() => [
          h(C) ? We((E(), V(h(vy), xe({
            key: 0,
            id: h(i),
            ref_key: "contentRef",
            ref: r
          }, j.$attrs, {
            "aria-label": j.ariaLabel,
            "aria-hidden": h($),
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
            "popper-style": [j.popperStyle, h(T)],
            "reference-el": j.referenceEl,
            "trigger-target-el": j.triggerTargetEl,
            visible: h(y),
            "z-index": j.zIndex,
            onMouseenter: h(D),
            onMouseleave: h(B),
            onBlur: oe,
            onClose: h(d)
          }), {
            default: R(() => [
              s.value ? G("v-if", !0) : K(j.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [fn, h(y)]
          ]) : G("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var ky = /* @__PURE__ */ ye(Ty, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const Oy = ["innerHTML"], xy = { key: 1 }, Py = H({
  name: "ElTooltip"
}), Ay = /* @__PURE__ */ H({
  ...Py,
  props: yy,
  emits: wy,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    W0();
    const l = Vi(), r = k(), s = k(), a = () => {
      var b;
      const w = h(r);
      w && ((b = w.popperInstanceRef) == null || b.update());
    }, i = k(!1), u = k(), { show: c, hide: d, hasUpdateHandler: v } = by({
      indicator: i,
      toggleReason: u
    }), { onOpen: g, onClose: p } = Wi({
      showAfter: Lt(o, "showAfter"),
      hideAfter: Lt(o, "hideAfter"),
      autoClose: Lt(o, "autoClose"),
      open: c,
      close: d
    }), f = _(() => Dn(o.visible) && !v.value);
    lt(Yr, {
      controlled: f,
      id: l,
      open: Xu(i),
      trigger: Lt(o, "trigger"),
      onOpen: (b) => {
        g(b);
      },
      onClose: (b) => {
        p(b);
      },
      onToggle: (b) => {
        h(i) ? p(b) : g(b);
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
      updatePopper: a
    }), Y(() => o.disabled, (b) => {
      b && i.value && (i.value = !1);
    });
    const m = (b) => {
      var w, C;
      const y = (C = (w = s.value) == null ? void 0 : w.contentRef) == null ? void 0 : C.popperContentRef, S = (b == null ? void 0 : b.relatedTarget) || document.activeElement;
      return y && y.contains(S);
    };
    return Qu(() => i.value && d()), t({
      popperRef: r,
      contentRef: s,
      isFocusInsideContent: m,
      updatePopper: a,
      onOpen: g,
      onClose: p,
      hide: d
    }), (b, w) => (E(), V(h(hy), {
      ref_key: "popperRef",
      ref: r,
      role: b.role
    }, {
      default: R(() => [
        Z($y, {
          disabled: b.disabled,
          trigger: b.trigger,
          "trigger-keys": b.triggerKeys,
          "virtual-ref": b.virtualRef,
          "virtual-triggering": b.virtualTriggering
        }, {
          default: R(() => [
            b.$slots.default ? K(b.$slots, "default", { key: 0 }) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        Z(ky, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": b.ariaLabel,
          "boundaries-padding": b.boundariesPadding,
          content: b.content,
          disabled: b.disabled,
          effect: b.effect,
          enterable: b.enterable,
          "fallback-placements": b.fallbackPlacements,
          "hide-after": b.hideAfter,
          "gpu-acceleration": b.gpuAcceleration,
          offset: b.offset,
          persistent: b.persistent,
          "popper-class": b.popperClass,
          "popper-style": b.popperStyle,
          placement: b.placement,
          "popper-options": b.popperOptions,
          pure: b.pure,
          "raw-content": b.rawContent,
          "reference-el": b.referenceEl,
          "trigger-target-el": b.triggerTargetEl,
          "show-after": b.showAfter,
          strategy: b.strategy,
          teleported: b.teleported,
          transition: b.transition,
          "virtual-triggering": b.virtualTriggering,
          "z-index": b.zIndex,
          "append-to": b.appendTo
        }, {
          default: R(() => [
            K(b.$slots, "content", {}, () => [
              b.rawContent ? (E(), P("span", {
                key: 0,
                innerHTML: b.content
              }, null, 8, Oy)) : (E(), P("span", xy, ie(b.content), 1))
            ]),
            b.showArrow ? (E(), V(h(Fb), {
              key: 0,
              "arrow-offset": b.arrowOffset
            }, null, 8, ["arrow-offset"])) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var My = /* @__PURE__ */ ye(Ay, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const iu = ut(My), uu = Symbol("buttonGroupContextKey"), Iy = (e, t) => {
  $i({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, _(() => e.type === "text"));
  const n = ve(uu, void 0), o = Xi("button"), { form: l } = no(), r = On(_(() => n == null ? void 0 : n.size)), s = kl(), a = k(), i = gl(), u = _(() => e.type || (n == null ? void 0 : n.type) || ""), c = _(() => {
    var p, f, m;
    return (m = (f = e.autoInsertSpace) != null ? f : (p = o.value) == null ? void 0 : p.autoInsertSpace) != null ? m : !1;
  }), d = _(() => e.tag === "button" ? {
    ariaDisabled: s.value || e.loading,
    disabled: s.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), v = _(() => {
    var p;
    const f = (p = i.default) == null ? void 0 : p.call(i);
    if (c.value && (f == null ? void 0 : f.length) === 1) {
      const m = f[0];
      if ((m == null ? void 0 : m.type) === Bs) {
        const b = m.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(b.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: r,
    _type: u,
    _ref: a,
    _props: d,
    shouldAddSpace: v,
    handleClick: (p) => {
      e.nativeType === "reset" && (l == null || l.resetFields()), t("click", p);
    }
  };
}, Ly = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Ny = ["button", "submit", "reset"], or = Te({
  size: to,
  disabled: Boolean,
  type: {
    type: String,
    values: Ly,
    default: ""
  },
  icon: {
    type: Wt
  },
  nativeType: {
    type: String,
    values: Ny,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Wt,
    default: () => Cr
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
}), Ry = {
  click: (e) => e instanceof MouseEvent
};
function Ue(e, t) {
  Fy(e) && (e = "100%");
  var n = By(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Fo(e) {
  return Math.min(1, Math.max(0, e));
}
function Fy(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function By(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function cu(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Bo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function wn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function zy(e, t, n) {
  return {
    r: Ue(e, 255) * 255,
    g: Ue(t, 255) * 255,
    b: Ue(n, 255) * 255
  };
}
function gs(e, t, n) {
  e = Ue(e, 255), t = Ue(t, 255), n = Ue(n, 255);
  var o = Math.max(e, t, n), l = Math.min(e, t, n), r = 0, s = 0, a = (o + l) / 2;
  if (o === l)
    s = 0, r = 0;
  else {
    var i = o - l;
    switch (s = a > 0.5 ? i / (2 - o - l) : i / (o + l), o) {
      case e:
        r = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        r = (n - e) / i + 2;
        break;
      case n:
        r = (e - t) / i + 4;
        break;
    }
    r /= 6;
  }
  return { h: r, s, l: a };
}
function Hl(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Hy(e, t, n) {
  var o, l, r;
  if (e = Ue(e, 360), t = Ue(t, 100), n = Ue(n, 100), t === 0)
    l = n, r = n, o = n;
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
    o = Hl(a, s, e + 1 / 3), l = Hl(a, s, e), r = Hl(a, s, e - 1 / 3);
  }
  return { r: o * 255, g: l * 255, b: r * 255 };
}
function ms(e, t, n) {
  e = Ue(e, 255), t = Ue(t, 255), n = Ue(n, 255);
  var o = Math.max(e, t, n), l = Math.min(e, t, n), r = 0, s = o, a = o - l, i = o === 0 ? 0 : a / o;
  if (o === l)
    r = 0;
  else {
    switch (o) {
      case e:
        r = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        r = (n - e) / a + 2;
        break;
      case n:
        r = (e - t) / a + 4;
        break;
    }
    r /= 6;
  }
  return { h: r, s: i, v: s };
}
function Dy(e, t, n) {
  e = Ue(e, 360) * 6, t = Ue(t, 100), n = Ue(n, 100);
  var o = Math.floor(e), l = e - o, r = n * (1 - t), s = n * (1 - l * t), a = n * (1 - (1 - l) * t), i = o % 6, u = [n, s, r, r, a, n][i], c = [a, n, n, s, r, r][i], d = [r, r, a, n, n, s][i];
  return { r: u * 255, g: c * 255, b: d * 255 };
}
function bs(e, t, n, o) {
  var l = [
    wn(Math.round(e).toString(16)),
    wn(Math.round(t).toString(16)),
    wn(Math.round(n).toString(16))
  ];
  return o && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) : l.join("");
}
function Vy(e, t, n, o, l) {
  var r = [
    wn(Math.round(e).toString(16)),
    wn(Math.round(t).toString(16)),
    wn(Math.round(n).toString(16)),
    wn(Ky(o))
  ];
  return l && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) && r[3].startsWith(r[3].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) + r[3].charAt(0) : r.join("");
}
function Ky(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ys(e) {
  return pt(e) / 255;
}
function pt(e) {
  return parseInt(e, 16);
}
function Wy(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var lr = {
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
function jy(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, l = null, r = null, s = !1, a = !1;
  return typeof e == "string" && (e = Gy(e)), typeof e == "object" && (Qt(e.r) && Qt(e.g) && Qt(e.b) ? (t = zy(e.r, e.g, e.b), s = !0, a = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Qt(e.h) && Qt(e.s) && Qt(e.v) ? (o = Bo(e.s), l = Bo(e.v), t = Dy(e.h, o, l), s = !0, a = "hsv") : Qt(e.h) && Qt(e.s) && Qt(e.l) && (o = Bo(e.s), r = Bo(e.l), t = Hy(e.h, o, r), s = !0, a = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = cu(n), {
    ok: s,
    format: e.format || a,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Uy = "[-\\+]?\\d+%?", qy = "[-\\+]?\\d*\\.\\d+%?", dn = "(?:".concat(qy, ")|(?:").concat(Uy, ")"), Dl = "[\\s|\\(]+(".concat(dn, ")[,|\\s]+(").concat(dn, ")[,|\\s]+(").concat(dn, ")\\s*\\)?"), Vl = "[\\s|\\(]+(".concat(dn, ")[,|\\s]+(").concat(dn, ")[,|\\s]+(").concat(dn, ")[,|\\s]+(").concat(dn, ")\\s*\\)?"), Mt = {
  CSS_UNIT: new RegExp(dn),
  rgb: new RegExp("rgb" + Dl),
  rgba: new RegExp("rgba" + Vl),
  hsl: new RegExp("hsl" + Dl),
  hsla: new RegExp("hsla" + Vl),
  hsv: new RegExp("hsv" + Dl),
  hsva: new RegExp("hsva" + Vl),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Gy(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (lr[e])
    e = lr[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Mt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Mt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Mt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Mt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Mt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Mt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Mt.hex8.exec(e), n ? {
    r: pt(n[1]),
    g: pt(n[2]),
    b: pt(n[3]),
    a: ys(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Mt.hex6.exec(e), n ? {
    r: pt(n[1]),
    g: pt(n[2]),
    b: pt(n[3]),
    format: t ? "name" : "hex"
  } : (n = Mt.hex4.exec(e), n ? {
    r: pt(n[1] + n[1]),
    g: pt(n[2] + n[2]),
    b: pt(n[3] + n[3]),
    a: ys(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Mt.hex3.exec(e), n ? {
    r: pt(n[1] + n[1]),
    g: pt(n[2] + n[2]),
    b: pt(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Qt(e) {
  return !!Mt.CSS_UNIT.exec(String(e));
}
var Yy = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Wy(t)), this.originalInput = t;
      var l = jy(t);
      this.originalInput = t, this.r = l.r, this.g = l.g, this.b = l.b, this.a = l.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (o = n.format) !== null && o !== void 0 ? o : l.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = l.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, o, l, r = t.r / 255, s = t.g / 255, a = t.b / 255;
      return r <= 0.03928 ? n = r / 12.92 : n = Math.pow((r + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), a <= 0.03928 ? l = a / 12.92 : l = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * l;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = cu(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ms(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ms(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), l = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(l, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(l, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = gs(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = gs(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), l = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(l, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(l, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), bs(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Vy(this.r, this.g, this.b, this.a, t);
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
      for (var t = "#" + bs(this.r, this.g, this.b, !1), n = 0, o = Object.entries(lr); n < o.length; n++) {
        var l = o[n], r = l[0], s = l[1];
        if (t === s)
          return r;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var o = !1, l = this.a < 1 && this.a >= 0, r = !n && l && (t.startsWith("hex") || t === "name");
      return r ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Fo(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Fo(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Fo(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Fo(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), l = new e(t).toRgb(), r = n / 100, s = {
        r: (l.r - o.r) * r + o.r,
        g: (l.g - o.g) * r + o.g,
        b: (l.b - o.b) * r + o.b,
        a: (l.a - o.a) * r + o.a
      };
      return new e(s);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), l = 360 / n, r = [this];
      for (o.h = (o.h - (l * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + l) % 360, r.push(new e(o));
      return r;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, l = n.s, r = n.v, s = [], a = 1 / t; t--; )
        s.push(new e({ h: o, s: l, v: r })), r = (r + a) % 1;
      return s;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), o = new e(t).toRgb(), l = n.a + o.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + o.r * o.a * (1 - n.a)) / l,
        g: (n.g * n.a + o.g * o.a * (1 - n.a)) / l,
        b: (n.b * n.a + o.b * o.a * (1 - n.a)) / l,
        a: l
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), o = n.h, l = [this], r = 360 / t, s = 1; s < t; s++)
        l.push(new e({ h: (o + s * r) % 360, s: n.s, l: n.l }));
      return l;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function rn(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function Xy(e) {
  const t = kl(), n = de("button");
  return _(() => {
    let o = {};
    const l = e.color;
    if (l) {
      const r = new Yy(l), s = e.dark ? r.tint(20).toString() : rn(r, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? rn(r, 90) : r.tint(90).toString(),
          "text-color": l,
          "border-color": e.dark ? rn(r, 50) : r.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": l,
          "hover-border-color": l,
          "active-bg-color": s,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": s
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? rn(r, 90) : r.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? rn(r, 50) : r.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? rn(r, 80) : r.tint(80).toString());
      else {
        const a = e.dark ? rn(r, 30) : r.tint(30).toString(), i = r.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (o = n.cssVarBlock({
          "bg-color": l,
          "text-color": i,
          "border-color": l,
          "hover-bg-color": a,
          "hover-text-color": i,
          "hover-border-color": a,
          "active-bg-color": s,
          "active-border-color": s
        }), t.value) {
          const u = e.dark ? rn(r, 50) : r.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = u, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return o;
  });
}
const Qy = H({
  name: "ElButton"
}), Zy = /* @__PURE__ */ H({
  ...Qy,
  props: or,
  emits: Ry,
  setup(e, { expose: t, emit: n }) {
    const o = e, l = Xy(o), r = de("button"), { _ref: s, _size: a, _type: i, _disabled: u, _props: c, shouldAddSpace: d, handleClick: v } = Iy(o, n);
    return t({
      ref: s,
      size: a,
      type: i,
      disabled: u,
      shouldAddSpace: d
    }), (g, p) => (E(), V(Ze(g.tag), xe({
      ref_key: "_ref",
      ref: s
    }, h(c), {
      class: [
        h(r).b(),
        h(r).m(h(i)),
        h(r).m(h(a)),
        h(r).is("disabled", h(u)),
        h(r).is("loading", g.loading),
        h(r).is("plain", g.plain),
        h(r).is("round", g.round),
        h(r).is("circle", g.circle),
        h(r).is("text", g.text),
        h(r).is("link", g.link),
        h(r).is("has-bg", g.bg)
      ],
      style: h(l),
      onClick: h(v)
    }), {
      default: R(() => [
        g.loading ? (E(), P($e, { key: 0 }, [
          g.$slots.loading ? K(g.$slots, "loading", { key: 0 }) : (E(), V(h(De), {
            key: 1,
            class: M(h(r).is("loading"))
          }, {
            default: R(() => [
              (E(), V(Ze(g.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : g.icon || g.$slots.icon ? (E(), V(h(De), { key: 1 }, {
          default: R(() => [
            g.icon ? (E(), V(Ze(g.icon), { key: 0 })) : K(g.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : G("v-if", !0),
        g.$slots.default ? (E(), P("span", {
          key: 2,
          class: M({ [h(r).em("text", "expand")]: h(d) })
        }, [
          K(g.$slots, "default")
        ], 2)) : G("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var Jy = /* @__PURE__ */ ye(Zy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const e1 = {
  size: or.size,
  type: or.type
}, t1 = H({
  name: "ElButtonGroup"
}), n1 = /* @__PURE__ */ H({
  ...t1,
  props: e1,
  setup(e) {
    const t = e;
    lt(uu, Qn({
      size: Lt(t, "size"),
      type: Lt(t, "type")
    }));
    const n = de("button");
    return (o, l) => (E(), P("div", {
      class: M(`${h(n).b("group")}`)
    }, [
      K(o.$slots, "default")
    ], 2));
  }
});
var du = /* @__PURE__ */ ye(n1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const fu = ut(Jy, {
  ButtonGroup: du
});
eo(du);
function o1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const sn = /* @__PURE__ */ new Map();
let ws;
Le && (document.addEventListener("mousedown", (e) => ws = e), document.addEventListener("mouseup", (e) => {
  for (const t of sn.values())
    for (const { documentHandler: n } of t)
      n(e, ws);
}));
function Cs(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : Vn(t.arg) && n.push(t.arg), function(o, l) {
    const r = t.instance.popperRef, s = o.target, a = l == null ? void 0 : l.target, i = !t || !t.instance, u = !s || !a, c = e.contains(s) || e.contains(a), d = e === s, v = n.length && n.some((p) => p == null ? void 0 : p.contains(s)) || n.length && n.includes(a), g = r && (r.contains(s) || r.contains(a));
    i || u || c || d || v || g || t.value(o, l);
  };
}
const pu = {
  beforeMount(e, t) {
    sn.has(e) || sn.set(e, []), sn.get(e).push({
      documentHandler: Cs(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    sn.has(e) || sn.set(e, []);
    const n = sn.get(e), o = n.findIndex((r) => r.bindingFn === t.oldValue), l = {
      documentHandler: Cs(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, l) : n.push(l);
  },
  unmounted(e) {
    sn.delete(e);
  }
};
var Ss = !1, yn, rr, ar, Wo, jo, vu, Uo, sr, ir, ur, hu, cr, dr, gu, mu;
function rt() {
  if (!Ss) {
    Ss = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (cr = /\b(iPhone|iP[ao]d)/.exec(e), dr = /\b(iP[ao]d)/.exec(e), ur = /Android/i.exec(e), gu = /FBAN\/\w+;/i.exec(e), mu = /Mobile/i.exec(e), hu = !!/Win64/.exec(e), t) {
      yn = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, yn && document && document.documentMode && (yn = document.documentMode);
      var o = /(?:Trident\/(\d+.\d+))/.exec(e);
      vu = o ? parseFloat(o[1]) + 4 : yn, rr = t[2] ? parseFloat(t[2]) : NaN, ar = t[3] ? parseFloat(t[3]) : NaN, Wo = t[4] ? parseFloat(t[4]) : NaN, Wo ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), jo = t && t[1] ? parseFloat(t[1]) : NaN) : jo = NaN;
    } else
      yn = rr = ar = jo = Wo = NaN;
    if (n) {
      if (n[1]) {
        var l = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        Uo = l ? parseFloat(l[1].replace("_", ".")) : !0;
      } else
        Uo = !1;
      sr = !!n[2], ir = !!n[3];
    } else
      Uo = sr = ir = !1;
  }
}
var fr = { ie: function() {
  return rt() || yn;
}, ieCompatibilityMode: function() {
  return rt() || vu > yn;
}, ie64: function() {
  return fr.ie() && hu;
}, firefox: function() {
  return rt() || rr;
}, opera: function() {
  return rt() || ar;
}, webkit: function() {
  return rt() || Wo;
}, safari: function() {
  return fr.webkit();
}, chrome: function() {
  return rt() || jo;
}, windows: function() {
  return rt() || sr;
}, osx: function() {
  return rt() || Uo;
}, linux: function() {
  return rt() || ir;
}, iphone: function() {
  return rt() || cr;
}, mobile: function() {
  return rt() || cr || dr || ur || mu;
}, nativeApp: function() {
  return rt() || gu;
}, android: function() {
  return rt() || ur;
}, ipad: function() {
  return rt() || dr;
} }, l1 = fr, zo = !!(typeof window < "u" && window.document && window.document.createElement), r1 = { canUseDOM: zo, canUseWorkers: typeof Worker < "u", canUseEventListeners: zo && !!(window.addEventListener || window.attachEvent), canUseViewport: zo && !!window.screen, isInWorker: !zo }, bu = r1, yu;
bu.canUseDOM && (yu = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function a1(e, t) {
  if (!bu.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, o = n in document;
  if (!o) {
    var l = document.createElement("div");
    l.setAttribute(n, "return;"), o = typeof l[n] == "function";
  }
  return !o && yu && e === "wheel" && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
}
var s1 = a1, _s = 10, $s = 40, Es = 800;
function wu(e) {
  var t = 0, n = 0, o = 0, l = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), o = t * _s, l = n * _s, "deltaY" in e && (l = e.deltaY), "deltaX" in e && (o = e.deltaX), (o || l) && e.deltaMode && (e.deltaMode == 1 ? (o *= $s, l *= $s) : (o *= Es, l *= Es)), o && !t && (t = o < 1 ? -1 : 1), l && !n && (n = l < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: o, pixelY: l };
}
wu.getEventType = function() {
  return l1.firefox() ? "DOMMouseScroll" : s1("wheel") ? "wheel" : "mousewheel";
};
var i1 = wu;
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
const u1 = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(o) {
      const l = i1(o);
      t && Reflect.apply(t, this, [o, l]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, c1 = {
  beforeMount(e, t) {
    u1(e, t.value);
  }
}, Cu = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
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
  [ot]: (e) => _t(e) || Ae(e) || Dn(e),
  change: (e) => _t(e) || Ae(e) || Dn(e)
}, oo = Symbol("checkboxGroupContextKey"), d1 = ({
  model: e,
  isChecked: t
}) => {
  const n = ve(oo, void 0), o = _(() => {
    var r, s;
    const a = (r = n == null ? void 0 : n.max) == null ? void 0 : r.value, i = (s = n == null ? void 0 : n.min) == null ? void 0 : s.value;
    return !Hn(a) && e.value.length >= a && !t.value || !Hn(i) && e.value.length <= i && t.value;
  });
  return {
    isDisabled: kl(_(() => (n == null ? void 0 : n.disabled.value) || o.value)),
    isLimitDisabled: o
  };
}, f1 = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: l,
  isLabeledByFormItem: r
}) => {
  const s = ve(oo, void 0), { formItem: a } = no(), { emit: i } = Ce();
  function u(p) {
    var f, m;
    return p === e.trueLabel || p === !0 ? (f = e.trueLabel) != null ? f : !0 : (m = e.falseLabel) != null ? m : !1;
  }
  function c(p, f) {
    i("change", u(p), f);
  }
  function d(p) {
    if (n.value)
      return;
    const f = p.target;
    i("change", u(f.checked), p);
  }
  async function v(p) {
    n.value || !o.value && !l.value && r.value && (p.composedPath().some((b) => b.tagName === "LABEL") || (t.value = u([!1, e.falseLabel].includes(t.value)), await he(), c(t.value, p)));
  }
  const g = _(() => (s == null ? void 0 : s.validateEvent) || e.validateEvent);
  return Y(() => e.modelValue, () => {
    g.value && (a == null || a.validate("change").catch((p) => je(p)));
  }), {
    handleChange: d,
    onClickRoot: v
  };
}, p1 = (e) => {
  const t = k(!1), { emit: n } = Ce(), o = ve(oo, void 0), l = _(() => Hn(o) === !1), r = k(!1);
  return {
    model: _({
      get() {
        var a, i;
        return l.value ? (a = o == null ? void 0 : o.modelValue) == null ? void 0 : a.value : (i = e.modelValue) != null ? i : t.value;
      },
      set(a) {
        var i, u;
        l.value && Tn(a) ? (r.value = ((i = o == null ? void 0 : o.max) == null ? void 0 : i.value) !== void 0 && a.length > (o == null ? void 0 : o.max.value), r.value === !1 && ((u = o == null ? void 0 : o.changeEvent) == null || u.call(o, a))) : (n(ot, a), t.value = a);
      }
    }),
    isGroup: l,
    isLimitExceeded: r
  };
}, v1 = (e, t, { model: n }) => {
  const o = ve(oo, void 0), l = k(!1), r = _(() => {
    const u = n.value;
    return Dn(u) ? u : Tn(u) ? Et(e.label) ? u.map(Fn).some((c) => fl(c, e.label)) : u.map(Fn).includes(e.label) : u != null ? u === e.trueLabel : !!u;
  }), s = On(_(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), a = On(_(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  })), i = _(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: s,
    isChecked: r,
    isFocused: l,
    checkboxSize: a,
    hasOwnLabel: i
  };
}, h1 = (e, { model: t }) => {
  function n() {
    Tn(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, _u = (e, t) => {
  const { formItem: n } = no(), { model: o, isGroup: l, isLimitExceeded: r } = p1(e), {
    isFocused: s,
    isChecked: a,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: c
  } = v1(e, t, { model: o }), { isDisabled: d } = d1({ model: o, isChecked: a }), { inputId: v, isLabeledByFormItem: g } = jr(e, {
    formItemContext: n,
    disableIdGeneration: c,
    disableIdManagement: l
  }), { handleChange: p, onClickRoot: f } = f1(e, {
    model: o,
    isLimitExceeded: r,
    hasOwnLabel: c,
    isDisabled: d,
    isLabeledByFormItem: g
  });
  return h1(e, { model: o }), {
    inputId: v,
    isLabeledByFormItem: g,
    isChecked: a,
    isDisabled: d,
    isFocused: s,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: c,
    model: o,
    handleChange: p,
    onClickRoot: f
  };
}, g1 = ["tabindex", "role", "aria-checked"], m1 = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], b1 = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], y1 = H({
  name: "ElCheckbox"
}), w1 = /* @__PURE__ */ H({
  ...y1,
  props: Cu,
  emits: Su,
  setup(e) {
    const t = e, n = gl(), {
      inputId: o,
      isLabeledByFormItem: l,
      isChecked: r,
      isDisabled: s,
      isFocused: a,
      checkboxSize: i,
      hasOwnLabel: u,
      model: c,
      handleChange: d,
      onClickRoot: v
    } = _u(t, n), g = de("checkbox"), p = _(() => [
      g.b(),
      g.m(i.value),
      g.is("disabled", s.value),
      g.is("bordered", t.border),
      g.is("checked", r.value)
    ]), f = _(() => [
      g.e("input"),
      g.is("disabled", s.value),
      g.is("checked", r.value),
      g.is("indeterminate", t.indeterminate),
      g.is("focus", a.value)
    ]);
    return (m, b) => (E(), V(Ze(!h(u) && h(l) ? "span" : "label"), {
      class: M(h(p)),
      "aria-controls": m.indeterminate ? m.controls : null,
      onClick: h(v)
    }, {
      default: R(() => [
        N("span", {
          class: M(h(f)),
          tabindex: m.indeterminate ? 0 : void 0,
          role: m.indeterminate ? "checkbox" : void 0,
          "aria-checked": m.indeterminate ? "mixed" : void 0
        }, [
          m.trueLabel || m.falseLabel ? We((E(), P("input", {
            key: 0,
            id: h(o),
            "onUpdate:modelValue": b[0] || (b[0] = (w) => Rn(c) ? c.value = w : null),
            class: M(h(g).e("original")),
            type: "checkbox",
            "aria-hidden": m.indeterminate ? "true" : "false",
            name: m.name,
            tabindex: m.tabindex,
            disabled: h(s),
            "true-value": m.trueLabel,
            "false-value": m.falseLabel,
            onChange: b[1] || (b[1] = (...w) => h(d) && h(d)(...w)),
            onFocus: b[2] || (b[2] = (w) => a.value = !0),
            onBlur: b[3] || (b[3] = (w) => a.value = !1),
            onClick: b[4] || (b[4] = Xe(() => {
            }, ["stop"]))
          }, null, 42, m1)), [
            [al, h(c)]
          ]) : We((E(), P("input", {
            key: 1,
            id: h(o),
            "onUpdate:modelValue": b[5] || (b[5] = (w) => Rn(c) ? c.value = w : null),
            class: M(h(g).e("original")),
            type: "checkbox",
            "aria-hidden": m.indeterminate ? "true" : "false",
            disabled: h(s),
            value: m.label,
            name: m.name,
            tabindex: m.tabindex,
            onChange: b[6] || (b[6] = (...w) => h(d) && h(d)(...w)),
            onFocus: b[7] || (b[7] = (w) => a.value = !0),
            onBlur: b[8] || (b[8] = (w) => a.value = !1),
            onClick: b[9] || (b[9] = Xe(() => {
            }, ["stop"]))
          }, null, 42, b1)), [
            [al, h(c)]
          ]),
          N("span", {
            class: M(h(g).e("inner"))
          }, null, 2)
        ], 10, g1),
        h(u) ? (E(), P("span", {
          key: 0,
          class: M(h(g).e("label"))
        }, [
          K(m.$slots, "default"),
          m.$slots.default ? G("v-if", !0) : (E(), P($e, { key: 0 }, [
            Ke(ie(m.label), 1)
          ], 64))
        ], 2)) : G("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var C1 = /* @__PURE__ */ ye(w1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const S1 = ["name", "tabindex", "disabled", "true-value", "false-value"], _1 = ["name", "tabindex", "disabled", "value"], $1 = H({
  name: "ElCheckboxButton"
}), E1 = /* @__PURE__ */ H({
  ...$1,
  props: Cu,
  emits: Su,
  setup(e) {
    const t = e, n = gl(), {
      isFocused: o,
      isChecked: l,
      isDisabled: r,
      checkboxButtonSize: s,
      model: a,
      handleChange: i
    } = _u(t, n), u = ve(oo, void 0), c = de("checkbox"), d = _(() => {
      var g, p, f, m;
      const b = (p = (g = u == null ? void 0 : u.fill) == null ? void 0 : g.value) != null ? p : "";
      return {
        backgroundColor: b,
        borderColor: b,
        color: (m = (f = u == null ? void 0 : u.textColor) == null ? void 0 : f.value) != null ? m : "",
        boxShadow: b ? `-1px 0 0 0 ${b}` : void 0
      };
    }), v = _(() => [
      c.b("button"),
      c.bm("button", s.value),
      c.is("disabled", r.value),
      c.is("checked", l.value),
      c.is("focus", o.value)
    ]);
    return (g, p) => (E(), P("label", {
      class: M(h(v))
    }, [
      g.trueLabel || g.falseLabel ? We((E(), P("input", {
        key: 0,
        "onUpdate:modelValue": p[0] || (p[0] = (f) => Rn(a) ? a.value = f : null),
        class: M(h(c).be("button", "original")),
        type: "checkbox",
        name: g.name,
        tabindex: g.tabindex,
        disabled: h(r),
        "true-value": g.trueLabel,
        "false-value": g.falseLabel,
        onChange: p[1] || (p[1] = (...f) => h(i) && h(i)(...f)),
        onFocus: p[2] || (p[2] = (f) => o.value = !0),
        onBlur: p[3] || (p[3] = (f) => o.value = !1),
        onClick: p[4] || (p[4] = Xe(() => {
        }, ["stop"]))
      }, null, 42, S1)), [
        [al, h(a)]
      ]) : We((E(), P("input", {
        key: 1,
        "onUpdate:modelValue": p[5] || (p[5] = (f) => Rn(a) ? a.value = f : null),
        class: M(h(c).be("button", "original")),
        type: "checkbox",
        name: g.name,
        tabindex: g.tabindex,
        disabled: h(r),
        value: g.label,
        onChange: p[6] || (p[6] = (...f) => h(i) && h(i)(...f)),
        onFocus: p[7] || (p[7] = (f) => o.value = !0),
        onBlur: p[8] || (p[8] = (f) => o.value = !1),
        onClick: p[9] || (p[9] = Xe(() => {
        }, ["stop"]))
      }, null, 42, _1)), [
        [al, h(a)]
      ]),
      g.$slots.default || g.label ? (E(), P("span", {
        key: 2,
        class: M(h(c).be("button", "inner")),
        style: we(h(l) ? h(d) : void 0)
      }, [
        K(g.$slots, "default", {}, () => [
          Ke(ie(g.label), 1)
        ])
      ], 6)) : G("v-if", !0)
    ], 2));
  }
});
var $u = /* @__PURE__ */ ye(E1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const T1 = Te({
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
  [ot]: (e) => Tn(e),
  change: (e) => Tn(e)
}, O1 = H({
  name: "ElCheckboxGroup"
}), x1 = /* @__PURE__ */ H({
  ...O1,
  props: T1,
  emits: k1,
  setup(e, { emit: t }) {
    const n = e, o = de("checkbox"), { formItem: l } = no(), { inputId: r, isLabeledByFormItem: s } = jr(n, {
      formItemContext: l
    }), a = async (u) => {
      t(ot, u), await he(), t("change", u);
    }, i = _({
      get() {
        return n.modelValue;
      },
      set(u) {
        a(u);
      }
    });
    return lt(oo, {
      ...gm(Zn(n), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: i,
      changeEvent: a
    }), Y(() => n.modelValue, () => {
      n.validateEvent && (l == null || l.validate("change").catch((u) => je(u)));
    }), (u, c) => {
      var d;
      return E(), V(Ze(u.tag), {
        id: h(r),
        class: M(h(o).b("group")),
        role: "group",
        "aria-label": h(s) ? void 0 : u.label || "checkbox-group",
        "aria-labelledby": h(s) ? (d = h(l)) == null ? void 0 : d.labelId : void 0
      }, {
        default: R(() => [
          K(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Eu = /* @__PURE__ */ ye(x1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const Yn = ut(C1, {
  CheckboxButton: $u,
  CheckboxGroup: Eu
});
eo($u);
eo(Eu);
const Tu = Te({
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
    values: xo,
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
    const n = e, o = On(), l = de("tag"), r = _(() => {
      const { type: i, hit: u, effect: c, closable: d, round: v } = n;
      return [
        l.b(),
        l.is("closable", d),
        l.m(i),
        l.m(o.value),
        l.m(c),
        l.is("hit", u),
        l.is("round", v)
      ];
    }), s = (i) => {
      t("close", i);
    }, a = (i) => {
      t("click", i);
    };
    return (i, u) => i.disableTransitions ? (E(), P("span", {
      key: 0,
      class: M(h(r)),
      style: we({ backgroundColor: i.color }),
      onClick: a
    }, [
      N("span", {
        class: M(h(l).e("content"))
      }, [
        K(i.$slots, "default")
      ], 2),
      i.closable ? (E(), V(h(De), {
        key: 0,
        class: M(h(l).e("close")),
        onClick: Xe(s, ["stop"])
      }, {
        default: R(() => [
          Z(h(sa))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : G("v-if", !0)
    ], 6)) : (E(), V(yo, {
      key: 1,
      name: `${h(l).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: R(() => [
        N("span", {
          class: M(h(r)),
          style: we({ backgroundColor: i.color }),
          onClick: a
        }, [
          N("span", {
            class: M(h(l).e("content"))
          }, [
            K(i.$slots, "default")
          ], 2),
          i.closable ? (E(), V(h(De), {
            key: 0,
            class: M(h(l).e("close")),
            onClick: Xe(s, ["stop"])
          }, {
            default: R(() => [
              Z(h(sa))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : G("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var I1 = /* @__PURE__ */ ye(M1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const L1 = ut(I1), ku = Symbol("rowContextKey"), N1 = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly"
], R1 = ["top", "middle", "bottom"], F1 = Te({
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
    const t = e, n = de("row"), o = _(() => t.gutter);
    lt(ku, {
      gutter: o
    });
    const l = _(() => {
      const s = {};
      return t.gutter && (s.marginRight = s.marginLeft = `-${t.gutter / 2}px`), s;
    }), r = _(() => [
      n.b(),
      n.is(`justify-${t.justify}`, t.justify !== "start"),
      n.is(`align-${t.align}`, !!t.align)
    ]);
    return (s, a) => (E(), V(Ze(s.tag), {
      class: M(h(r)),
      style: we(h(l))
    }, {
      default: R(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
var H1 = /* @__PURE__ */ ye(z1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);
const D1 = ut(H1), V1 = Te({
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
    default: () => un({})
  },
  sm: {
    type: fe([Number, Object]),
    default: () => un({})
  },
  md: {
    type: fe([Number, Object]),
    default: () => un({})
  },
  lg: {
    type: fe([Number, Object]),
    default: () => un({})
  },
  xl: {
    type: fe([Number, Object]),
    default: () => un({})
  }
}), K1 = H({
  name: "ElCol"
}), W1 = /* @__PURE__ */ H({
  ...K1,
  props: V1,
  setup(e) {
    const t = e, { gutter: n } = ve(ku, { gutter: _(() => 0) }), o = de("col"), l = _(() => {
      const s = {};
      return n.value && (s.paddingLeft = s.paddingRight = `${n.value / 2}px`), s;
    }), r = _(() => {
      const s = [];
      return ["span", "offset", "pull", "push"].forEach((u) => {
        const c = t[u];
        Ae(c) && (u === "span" ? s.push(o.b(`${t[u]}`)) : c > 0 && s.push(o.b(`${u}-${t[u]}`)));
      }), ["xs", "sm", "md", "lg", "xl"].forEach((u) => {
        Ae(t[u]) ? s.push(o.b(`${u}-${t[u]}`)) : Et(t[u]) && Object.entries(t[u]).forEach(([c, d]) => {
          s.push(c !== "span" ? o.b(`${u}-${c}-${d}`) : o.b(`${u}-${d}`));
        });
      }), n.value && s.push(o.is("guttered")), [o.b(), s];
    });
    return (s, a) => (E(), V(Ze(s.tag), {
      class: M(h(r)),
      style: we(h(l))
    }, {
      default: R(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
var j1 = /* @__PURE__ */ ye(W1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);
const U1 = ut(j1), Ou = Symbol("elPaginationKey"), q1 = Te({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: Wt
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
    const t = e, { t: n } = Ot(), o = _(() => t.disabled || t.currentPage <= 1);
    return (l, r) => (E(), P("button", {
      type: "button",
      class: "btn-prev",
      disabled: h(o),
      "aria-label": l.prevText || h(n)("el.pagination.prev"),
      "aria-disabled": h(o),
      onClick: r[0] || (r[0] = (s) => l.$emit("click", s))
    }, [
      l.prevText ? (E(), P("span", X1, ie(l.prevText), 1)) : (E(), V(h(De), { key: 1 }, {
        default: R(() => [
          (E(), V(Ze(l.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, Y1));
  }
});
var J1 = /* @__PURE__ */ ye(Z1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const ew = Te({
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
    type: Wt
  }
}), tw = ["disabled", "aria-label", "aria-disabled"], nw = { key: 0 }, ow = H({
  name: "ElPaginationNext"
}), lw = /* @__PURE__ */ H({
  ...ow,
  props: ew,
  emits: ["click"],
  setup(e) {
    const t = e, { t: n } = Ot(), o = _(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (l, r) => (E(), P("button", {
      type: "button",
      class: "btn-next",
      disabled: h(o),
      "aria-label": l.nextText || h(n)("el.pagination.next"),
      "aria-disabled": h(o),
      onClick: r[0] || (r[0] = (s) => l.$emit("click", s))
    }, [
      l.nextText ? (E(), P("span", nw, ie(l.nextText), 1)) : (E(), V(h(De), { key: 1 }, {
        default: R(() => [
          (E(), V(Ze(l.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, tw));
  }
});
var rw = /* @__PURE__ */ ye(lw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const xu = Symbol("ElSelectGroup"), Pl = Symbol("ElSelect");
function aw(e, t) {
  const n = ve(Pl), o = ve(xu, { disabled: !1 }), l = _(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), r = _(() => n.props.multiple ? d(n.props.modelValue, e.value) : v(e.value, n.props.modelValue)), s = _(() => {
    if (n.props.multiple) {
      const f = n.props.modelValue || [];
      return !r.value && f.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = _(() => e.label || (l.value ? "" : e.value)), i = _(() => e.value || e.label || ""), u = _(() => e.disabled || t.groupDisabled || s.value), c = Ce(), d = (f = [], m) => {
    if (l.value) {
      const b = n.props.valueKey;
      return f && f.some((w) => Fn(Qe(w, b)) === Qe(m, b));
    } else
      return f && f.includes(m);
  }, v = (f, m) => {
    if (l.value) {
      const { valueKey: b } = n.props;
      return Qe(f, b) === Qe(m, b);
    } else
      return f === m;
  }, g = () => {
    !e.disabled && !o.disabled && (n.hoverIndex = n.optionsArray.indexOf(c.proxy));
  };
  Y(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Y(() => e.value, (f, m) => {
    const { remote: b, valueKey: w } = n.props;
    if (Object.is(f, m) || (n.onOptionDestroy(m, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !b) {
      if (w && typeof f == "object" && typeof m == "object" && f[w] === m[w])
        return;
      n.setSelected();
    }
  }), Y(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: p } = Fn(n);
  return Y(p, (f) => {
    const { query: m } = h(f), b = new RegExp(ym(m), "i");
    t.visible = b.test(a.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: i,
    itemSelected: r,
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
    const t = de("select"), n = _(() => [
      t.be("dropdown", "item"),
      t.is("disabled", h(s)),
      {
        selected: h(r),
        hover: h(c)
      }
    ]), o = Qn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: l, itemSelected: r, isDisabled: s, select: a, hoverItem: i } = aw(e, o), { visible: u, hover: c } = Zn(o), d = Ce().proxy;
    a.onOptionCreate(d), Rt(() => {
      const g = d.value, { selected: p } = a, m = (a.props.multiple ? p : [p]).some((b) => b.value === d.value);
      he(() => {
        a.cachedOptions.get(g) === d && !m && a.cachedOptions.delete(g);
      }), a.onOptionDestroy(g, d);
    });
    function v() {
      e.disabled !== !0 && o.groupDisabled !== !0 && a.handleOptionSelect(d);
    }
    return {
      ns: t,
      containerKls: n,
      currentLabel: l,
      itemSelected: r,
      isDisabled: s,
      select: a,
      hoverItem: i,
      visible: u,
      hover: c,
      selectOptionClick: v,
      states: o
    };
  }
});
function iw(e, t, n, o, l, r) {
  return We((E(), P("li", {
    class: M(e.containerKls),
    onMouseenter: t[0] || (t[0] = (...s) => e.hoverItem && e.hoverItem(...s)),
    onClick: t[1] || (t[1] = Xe((...s) => e.selectOptionClick && e.selectOptionClick(...s), ["stop"]))
  }, [
    K(e.$slots, "default", {}, () => [
      N("span", null, ie(e.currentLabel), 1)
    ])
  ], 34)), [
    [fn, e.visible]
  ]);
}
var Qr = /* @__PURE__ */ ye(sw, [["render", iw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const uw = H({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ve(Pl), t = de("select"), n = _(() => e.props.popperClass), o = _(() => e.props.multiple), l = _(() => e.props.fitInputWidth), r = k("");
    function s() {
      var a;
      r.value = `${(a = e.selectWrapper) == null ? void 0 : a.offsetWidth}px`;
    }
    return Me(() => {
      s(), Bn(e.selectWrapper, s);
    }), {
      ns: t,
      minWidth: r,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: l
    };
  }
});
function cw(e, t, n, o, l, r) {
  return E(), P("div", {
    class: M([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: we({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    K(e.$slots, "default")
  ], 6);
}
var dw = /* @__PURE__ */ ye(uw, [["render", cw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function fw(e) {
  const { t } = Ot();
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
const pw = (e, t, n) => {
  const { t: o } = Ot(), l = de("select");
  $i({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, _(() => e.suffixTransition === !1));
  const r = k(null), s = k(null), a = k(null), i = k(null), u = k(null), c = k(null), d = k(null), v = k(null), g = k(-1), p = Sn({ query: "" }), f = Sn(""), m = k([]);
  let b = 0;
  const { form: w, formItem: C } = no(), y = _(() => !e.filterable || e.multiple || !t.visible), S = _(() => e.disabled || (w == null ? void 0 : w.disabled)), T = _(() => {
    const O = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !S.value && t.inputHovering && O;
  }), $ = _(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), x = _(() => l.is("reverse", $.value && t.visible && e.suffixTransition)), F = _(() => (w == null ? void 0 : w.statusIcon) && (C == null ? void 0 : C.validateState) && Ci[C == null ? void 0 : C.validateState]), D = _(() => e.remote ? 300 : 0), B = _(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), I = _(() => {
    const O = Array.from(t.options.values()), L = [];
    return m.value.forEach((W) => {
      const se = O.findIndex((Ge) => Ge.currentLabel === W);
      se > -1 && L.push(O[se]);
    }), L.length ? L : O;
  }), Q = _(() => Array.from(t.cachedOptions.values())), ee = _(() => {
    const O = I.value.filter((L) => !L.created).some((L) => L.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !O;
  }), oe = On(), le = _(() => ["small"].includes(oe.value) ? "small" : "default"), j = _({
    get() {
      return t.visible && B.value !== !1;
    },
    set(O) {
      t.visible = O;
    }
  });
  Y([() => S.value, () => oe.value, () => w == null ? void 0 : w.size], () => {
    he(() => {
      ne();
    });
  }), Y(() => e.placeholder, (O) => {
    t.cachedPlaceHolder = t.currentPlaceholder = O, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), Y(() => e.modelValue, (O, L) => {
    e.multiple && (ne(), O && O.length > 0 || s.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", A(t.query))), ue(), e.filterable && !e.multiple && (t.inputLength = 20), !fl(O, L) && e.validateEvent && (C == null || C.validate("change").catch((W) => je(W)));
  }, {
    flush: "post",
    deep: !0
  }), Y(() => t.visible, (O) => {
    var L, W, se, Ge, tt;
    O ? ((W = (L = i.value) == null ? void 0 : L.updatePopper) == null || W.call(L), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (Ge = (se = a.value) == null ? void 0 : se.focus) == null || Ge.call(se), e.multiple ? (tt = s.value) == null || tt.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), A(t.query), !e.multiple && !e.remote && (p.value.query = "", ao(p), ao(f)))) : (e.filterable && (It(e.filterMethod) && e.filterMethod(""), It(e.remoteMethod) && e.remoteMethod("")), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, me(), he(() => {
      s.value && s.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", O);
  }), Y(() => t.options.entries(), () => {
    var O, L, W;
    if (!Le)
      return;
    (L = (O = i.value) == null ? void 0 : O.updatePopper) == null || L.call(O), e.multiple && ne();
    const se = ((W = d.value) == null ? void 0 : W.querySelectorAll("input")) || [];
    (!e.filterable && !e.defaultFirstOption && !Hn(e.modelValue) || !Array.from(se).includes(document.activeElement)) && ue(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && re();
  }, {
    flush: "post"
  }), Y(() => t.hoverIndex, (O) => {
    Ae(O) && O > -1 ? g.value = I.value[O] || {} : g.value = {}, I.value.forEach((L) => {
      L.hover = g.value === L;
    });
  });
  const ne = () => {
    he(() => {
      var O, L;
      if (!r.value)
        return;
      const W = r.value.$el.querySelector("input");
      b = b || (W.clientHeight > 0 ? W.clientHeight + 2 : 0);
      const se = c.value, Ge = Em(oe.value || (w == null ? void 0 : w.size)), tt = oe.value || Ge === b || b <= 0 ? Ge : b;
      !(W.offsetParent === null) && (W.style.height = `${(t.selected.length === 0 ? tt : Math.max(se ? se.clientHeight + (se.clientHeight > tt ? 6 : 0) : 0, tt)) - 2}px`), t.visible && B.value !== !1 && ((L = (O = i.value) == null ? void 0 : O.updatePopper) == null || L.call(O));
    });
  }, A = async (O) => {
    if (!(t.previousQuery === O || t.isOnComposition)) {
      if (t.previousQuery === null && (It(e.filterMethod) || It(e.remoteMethod))) {
        t.previousQuery = O;
        return;
      }
      t.previousQuery = O, he(() => {
        var L, W;
        t.visible && ((W = (L = i.value) == null ? void 0 : L.updatePopper) == null || W.call(L));
      }), t.hoverIndex = -1, e.multiple && e.filterable && he(() => {
        if (!S.value) {
          const L = s.value.value.length * 15 + 20;
          t.inputLength = e.collapseTags ? Math.min(50, L) : L, U();
        }
        ne();
      }), e.remote && It(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(O)) : It(e.filterMethod) ? (e.filterMethod(O), ao(f)) : (t.filteredOptionsCount = t.optionsCount, p.value.query = O, ao(p), ao(f)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await he(), re());
    }
  }, U = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = s.value.value ? "" : t.cachedPlaceHolder);
  }, re = () => {
    const O = I.value.filter((se) => se.visible && !se.disabled && !se.states.groupDisabled), L = O.find((se) => se.created), W = O[0];
    t.hoverIndex = yt(I.value, L || W);
  }, ue = () => {
    var O;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const W = ge(e.modelValue);
      (O = W.props) != null && O.created ? (t.createdLabel = W.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = W.currentLabel, t.selected = W, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const L = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((W) => {
      L.push(ge(W));
    }), t.selected = L, he(() => {
      ne();
    });
  }, ge = (O) => {
    let L;
    const W = Al(O).toLowerCase() === "object", se = Al(O).toLowerCase() === "null", Ge = Al(O).toLowerCase() === "undefined";
    for (let Xt = t.cachedOptions.size - 1; Xt >= 0; Xt--) {
      const Pt = Q.value[Xt];
      if (W ? Qe(Pt.value, e.valueKey) === Qe(O, e.valueKey) : Pt.value === O) {
        L = {
          value: O,
          currentLabel: Pt.currentLabel,
          isDisabled: Pt.isDisabled
        };
        break;
      }
    }
    if (L)
      return L;
    const tt = W ? O.label : !se && !Ge ? O : "", Yt = {
      value: O,
      currentLabel: tt
    };
    return e.multiple && (Yt.hitState = !1), Yt;
  }, me = () => {
    setTimeout(() => {
      const O = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((L) => I.value.findIndex((W) => Qe(W, O) === Qe(L, O)))) : t.hoverIndex = -1 : t.hoverIndex = I.value.findIndex((L) => be(L) === be(t.selected));
    }, 300);
  }, _e = () => {
    var O, L;
    ke(), (L = (O = i.value) == null ? void 0 : O.updatePopper) == null || L.call(O), e.multiple && ne();
  }, ke = () => {
    var O;
    t.inputWidth = (O = r.value) == null ? void 0 : O.$el.offsetWidth;
  }, Ne = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, A(t.query));
  }, Se = zn(() => {
    Ne();
  }, D.value), Re = zn((O) => {
    A(O.target.value);
  }, D.value), Pe = (O) => {
    fl(e.modelValue, O) || n.emit(Si, O);
  }, Be = (O) => sm(O, (L) => !t.disabledOptions.has(L)), xt = (O) => {
    if (O.code !== Kn.delete) {
      if (O.target.value.length <= 0 && !dt()) {
        const L = e.modelValue.slice(), W = Be(L);
        if (W < 0)
          return;
        L.splice(W, 1), n.emit(ot, L), Pe(L);
      }
      O.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, gt = (O, L) => {
    const W = t.selected.indexOf(L);
    if (W > -1 && !S.value) {
      const se = e.modelValue.slice();
      se.splice(W, 1), n.emit(ot, se), Pe(se), n.emit("remove-tag", L.value);
    }
    O.stopPropagation(), J();
  }, mt = (O) => {
    O.stopPropagation();
    const L = e.multiple ? [] : "";
    if (!_t(L))
      for (const W of t.selected)
        W.isDisabled && L.push(W.value);
    n.emit(ot, L), Pe(L), t.hoverIndex = -1, t.visible = !1, n.emit("clear"), J();
  }, bt = (O) => {
    var L;
    if (e.multiple) {
      const W = (e.modelValue || []).slice(), se = yt(W, O.value);
      se > -1 ? W.splice(se, 1) : (e.multipleLimit <= 0 || W.length < e.multipleLimit) && W.push(O.value), n.emit(ot, W), Pe(W), O.created && (t.query = "", A(""), t.inputLength = 20), e.filterable && ((L = s.value) == null || L.focus());
    } else
      n.emit(ot, O.value), Pe(O.value), t.visible = !1;
    wt(), !t.visible && he(() => {
      ct(O);
    });
  }, yt = (O = [], L) => {
    if (!Et(L))
      return O.indexOf(L);
    const W = e.valueKey;
    let se = -1;
    return O.some((Ge, tt) => Fn(Qe(Ge, W)) === Qe(L, W) ? (se = tt, !0) : !1), se;
  }, wt = () => {
    const O = s.value || r.value;
    O && (O == null || O.focus());
  }, ct = (O) => {
    var L, W, se, Ge, tt;
    const Yt = Array.isArray(O) ? O[0] : O;
    let Xt = null;
    if (Yt != null && Yt.value) {
      const Pt = I.value.filter((Ye) => Ye.value === Yt.value);
      Pt.length > 0 && (Xt = Pt[0].$el);
    }
    if (i.value && Xt) {
      const Pt = (Ge = (se = (W = (L = i.value) == null ? void 0 : L.popperRef) == null ? void 0 : W.contentRef) == null ? void 0 : se.querySelector) == null ? void 0 : Ge.call(se, `.${l.be("dropdown", "wrap")}`);
      Pt && Sm(Pt, Xt);
    }
    (tt = v.value) == null || tt.handleScroll();
  }, qt = (O) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(O.value, O), t.cachedOptions.set(O.value, O), O.disabled && t.disabledOptions.set(O.value, O);
  }, Je = (O, L) => {
    t.options.get(O) === L && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(O));
  }, Ct = (O) => {
    O.code !== Kn.backspace && dt(!1), t.inputLength = s.value.value.length * 15 + 20, ne();
  }, dt = (O) => {
    if (!Array.isArray(t.selected))
      return;
    const L = Be(t.selected.map((se) => se.value)), W = t.selected[L];
    if (W)
      return O === !0 || O === !1 ? (W.hitState = O, O) : (W.hitState = !W.hitState, W.hitState);
  }, zt = (O) => {
    const L = O.target.value;
    if (O.type === "compositionend")
      t.isOnComposition = !1, he(() => A(L));
    else {
      const W = L[L.length - 1] || "";
      t.isOnComposition = !_i(W);
    }
  }, St = () => {
    he(() => ct(t.selected));
  }, z = (O) => {
    t.focused || ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), t.focused = !0, n.emit("focus", O));
  }, J = () => {
    var O, L;
    t.visible ? (O = s.value || r.value) == null || O.focus() : (L = r.value) == null || L.focus();
  }, Ee = () => {
    var O, L, W;
    t.visible = !1, (O = r.value) == null || O.blur(), (W = (L = a.value) == null ? void 0 : L.blur) == null || W.call(L);
  }, ft = (O) => {
    var L, W, se;
    (L = i.value) != null && L.isFocusInsideContent(O) || (W = u.value) != null && W.isFocusInsideContent(O) || (se = d.value) != null && se.contains(O.relatedTarget) || (t.visible && X(), t.focused = !1, n.emit("blur", O));
  }, Gt = (O) => {
    mt(O);
  }, X = () => {
    t.visible = !1;
  }, te = (O) => {
    t.visible && (O.preventDefault(), O.stopPropagation(), t.visible = !1);
  }, pe = (O) => {
    O && !t.mouseEnter || S.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!i.value || !i.value.isFocusInsideContent()) && (t.visible = !t.visible), J());
  }, ce = () => {
    t.visible ? I.value[t.hoverIndex] && bt(I.value[t.hoverIndex]) : pe();
  }, be = (O) => Et(O.value) ? Qe(O.value, e.valueKey) : O.value, Ie = _(() => I.value.filter((O) => O.visible).every((O) => O.disabled)), qe = _(() => t.selected.slice(0, e.maxCollapseTags)), Ht = _(() => t.selected.slice(e.maxCollapseTags)), et = (O) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !Ie.value) {
      O === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : O === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const L = I.value[t.hoverIndex];
      (L.disabled === !0 || L.states.groupDisabled === !0 || !L.visible) && et(O), he(() => ct(g.value));
    }
  }, lo = () => {
    t.mouseEnter = !0;
  }, ro = () => {
    t.mouseEnter = !1;
  }, ln = (O, L) => {
    var W, se;
    gt(O, L), (se = (W = u.value) == null ? void 0 : W.updatePopper) == null || se.call(W);
  }, hn = _(() => ({
    maxWidth: `${h(t.inputWidth) - 32 - (F.value ? 22 : 0)}px`,
    width: "100%"
  }));
  return {
    optionList: m,
    optionsArray: I,
    selectSize: oe,
    handleResize: _e,
    debouncedOnInputChange: Se,
    debouncedQueryChange: Re,
    deletePrevTag: xt,
    deleteTag: gt,
    deleteSelected: mt,
    handleOptionSelect: bt,
    scrollToOption: ct,
    readonly: y,
    resetInputHeight: ne,
    showClose: T,
    iconComponent: $,
    iconReverse: x,
    showNewOption: ee,
    collapseTagSize: le,
    setSelected: ue,
    managePlaceholder: U,
    selectDisabled: S,
    emptyText: B,
    toggleLastOptionHitState: dt,
    resetInputState: Ct,
    handleComposition: zt,
    onOptionCreate: qt,
    onOptionDestroy: Je,
    handleMenuEnter: St,
    handleFocus: z,
    focus: J,
    blur: Ee,
    handleBlur: ft,
    handleClearClick: Gt,
    handleClose: X,
    handleKeydownEscape: te,
    toggleMenu: pe,
    selectOption: ce,
    getValueKey: be,
    navigateOptions: et,
    handleDeleteTooltipTag: ln,
    dropMenuVisible: j,
    queryChange: p,
    groupQueryChange: f,
    showTagList: qe,
    collapseTagList: Ht,
    selectTagsStyle: hn,
    reference: r,
    input: s,
    iOSInput: a,
    tooltipRef: i,
    tagTooltipRef: u,
    tags: c,
    selectWrapper: d,
    scrollbar: v,
    handleMouseEnter: lo,
    handleMouseLeave: ro
  };
};
var vw = H({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let o = [];
    function l(r, s) {
      if (r.length !== s.length)
        return !1;
      for (const [a] of r.entries())
        if (r[a] != s[a])
          return !1;
      return !0;
    }
    return () => {
      var r, s;
      const a = (r = t.default) == null ? void 0 : r.call(t), i = [];
      function u(c) {
        Array.isArray(c) && c.forEach((d) => {
          var v, g, p, f;
          const m = (v = (d == null ? void 0 : d.type) || {}) == null ? void 0 : v.name;
          m === "ElOptionGroup" ? u(!_t(d.children) && !Array.isArray(d.children) && It((g = d.children) == null ? void 0 : g.default) ? (p = d.children) == null ? void 0 : p.default() : d.children) : m === "ElOption" ? i.push((f = d.props) == null ? void 0 : f.label) : Array.isArray(d.children) && u(d.children);
        });
      }
      return a.length && u((s = a[0]) == null ? void 0 : s.children), l(i, o) || (o = i, n("update-options", i)), a;
    };
  }
});
const Ts = "ElSelect", hw = H({
  name: Ts,
  componentName: Ts,
  components: {
    ElInput: Zi,
    ElSelectMenu: dw,
    ElOption: Qr,
    ElOptions: vw,
    ElTag: L1,
    ElScrollbar: Ol,
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
      validator: Tm
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
    teleported: Xr.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Wt,
      default: wr
    },
    fitInputWidth: Boolean,
    suffixIcon: {
      type: Wt,
      default: Hs
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
      values: El,
      default: "bottom-start"
    },
    ariaLabel: {
      type: String,
      default: void 0
    }
  },
  emits: [
    ot,
    Si,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = de("select"), o = de("input"), { t: l } = Ot(), r = fw(e), {
      optionList: s,
      optionsArray: a,
      selectSize: i,
      readonly: u,
      handleResize: c,
      collapseTagSize: d,
      debouncedOnInputChange: v,
      debouncedQueryChange: g,
      deletePrevTag: p,
      deleteTag: f,
      deleteSelected: m,
      handleOptionSelect: b,
      scrollToOption: w,
      setSelected: C,
      resetInputHeight: y,
      managePlaceholder: S,
      showClose: T,
      selectDisabled: $,
      iconComponent: x,
      iconReverse: F,
      showNewOption: D,
      emptyText: B,
      toggleLastOptionHitState: I,
      resetInputState: Q,
      handleComposition: ee,
      onOptionCreate: oe,
      onOptionDestroy: le,
      handleMenuEnter: j,
      handleFocus: ne,
      focus: A,
      blur: U,
      handleBlur: re,
      handleClearClick: ue,
      handleClose: ge,
      handleKeydownEscape: me,
      toggleMenu: _e,
      selectOption: ke,
      getValueKey: Ne,
      navigateOptions: Se,
      handleDeleteTooltipTag: Re,
      dropMenuVisible: Pe,
      reference: Be,
      input: xt,
      iOSInput: gt,
      tooltipRef: mt,
      tagTooltipRef: bt,
      tags: yt,
      selectWrapper: wt,
      scrollbar: ct,
      queryChange: qt,
      groupQueryChange: Je,
      handleMouseEnter: Ct,
      handleMouseLeave: dt,
      showTagList: zt,
      collapseTagList: St,
      selectTagsStyle: z
    } = pw(e, r, t), {
      inputWidth: J,
      selected: Ee,
      inputLength: ft,
      filteredOptionsCount: Gt,
      visible: X,
      selectedLabel: te,
      hoverIndex: pe,
      query: ce,
      inputHovering: be,
      currentPlaceholder: Ie,
      menuVisibleOnFocus: qe,
      isOnComposition: Ht,
      options: et,
      cachedOptions: lo,
      optionsCount: ro,
      prefixWidth: ln
    } = Zn(r), hn = _(() => {
      const Ye = [n.b()], gn = h(i);
      return gn && Ye.push(n.m(gn)), e.disabled && Ye.push(n.m("disabled")), Ye;
    }), O = _(() => [
      n.e("tags"),
      n.is("disabled", h($))
    ]), L = _(() => [
      n.b("tags-wrapper"),
      { "has-prefix": h(ln) && h(Ee).length }
    ]), W = _(() => [
      n.e("input"),
      n.is(h(i)),
      n.is("disabled", h($))
    ]), se = _(() => [
      n.e("input"),
      n.is(h(i)),
      n.em("input", "iOS")
    ]), Ge = _(() => [
      n.is("empty", !e.allowCreate && !!h(ce) && h(Gt) === 0)
    ]), tt = _(() => ({ maxWidth: `${h(J) > 123 ? h(J) - 123 : h(J) - 75}px` })), Yt = _(() => ({
      marginLeft: `${h(ln)}px`,
      flexGrow: 1,
      width: `${h(ft) / (h(J) - 32)}%`,
      maxWidth: `${h(J) - 42}px`
    }));
    lt(Pl, Qn({
      props: e,
      options: et,
      optionsArray: a,
      cachedOptions: lo,
      optionsCount: ro,
      filteredOptionsCount: Gt,
      hoverIndex: pe,
      handleOptionSelect: b,
      onOptionCreate: oe,
      onOptionDestroy: le,
      selectWrapper: wt,
      selected: Ee,
      setSelected: C,
      queryChange: qt,
      groupQueryChange: Je
    })), Me(() => {
      r.cachedPlaceHolder = Ie.value = e.placeholder || (() => l("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Ie.value = ""), Bn(wt, c), e.remote && e.multiple && y(), he(() => {
        const Ye = Be.value && Be.value.$el;
        if (Ye && (J.value = Ye.getBoundingClientRect().width, t.slots.prefix)) {
          const gn = Ye.querySelector(`.${o.e("prefix")}`);
          ln.value = Math.max(gn.getBoundingClientRect().width + 11, 30);
        }
      }), C();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(ot, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(ot, "");
    const Xt = _(() => {
      var Ye, gn;
      return (gn = (Ye = mt.value) == null ? void 0 : Ye.popperRef) == null ? void 0 : gn.contentRef;
    });
    return {
      isIOS: Vs,
      onOptionsRendered: (Ye) => {
        s.value = Ye;
      },
      prefixWidth: ln,
      selectSize: i,
      readonly: u,
      handleResize: c,
      collapseTagSize: d,
      debouncedOnInputChange: v,
      debouncedQueryChange: g,
      deletePrevTag: p,
      deleteTag: f,
      handleDeleteTooltipTag: Re,
      deleteSelected: m,
      handleOptionSelect: b,
      scrollToOption: w,
      inputWidth: J,
      selected: Ee,
      inputLength: ft,
      filteredOptionsCount: Gt,
      visible: X,
      selectedLabel: te,
      hoverIndex: pe,
      query: ce,
      inputHovering: be,
      currentPlaceholder: Ie,
      menuVisibleOnFocus: qe,
      isOnComposition: Ht,
      options: et,
      resetInputHeight: y,
      managePlaceholder: S,
      showClose: T,
      selectDisabled: $,
      iconComponent: x,
      iconReverse: F,
      showNewOption: D,
      emptyText: B,
      toggleLastOptionHitState: I,
      resetInputState: Q,
      handleComposition: ee,
      handleMenuEnter: j,
      handleFocus: ne,
      focus: A,
      blur: U,
      handleBlur: re,
      handleClearClick: ue,
      handleClose: ge,
      handleKeydownEscape: me,
      toggleMenu: _e,
      selectOption: ke,
      getValueKey: Ne,
      navigateOptions: Se,
      dropMenuVisible: Pe,
      reference: Be,
      input: xt,
      iOSInput: gt,
      tooltipRef: mt,
      popperPaneRef: Xt,
      tags: yt,
      selectWrapper: wt,
      scrollbar: ct,
      wrapperKls: hn,
      tagsKls: O,
      tagWrapperKls: L,
      inputKls: W,
      iOSInputKls: se,
      scrollbarKls: Ge,
      selectTagsStyle: z,
      nsSelect: n,
      tagTextStyle: tt,
      inputStyle: Yt,
      handleMouseEnter: Ct,
      handleMouseLeave: dt,
      showTagList: zt,
      collapseTagList: St,
      tagTooltipRef: bt
    };
  }
}), gw = ["disabled", "autocomplete", "aria-label"], mw = ["disabled"], bw = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function yw(e, t, n, o, l, r) {
  const s = q("el-tag"), a = q("el-tooltip"), i = q("el-icon"), u = q("el-input"), c = q("el-option"), d = q("el-options"), v = q("el-scrollbar"), g = q("el-select-menu"), p = mr("click-outside");
  return We((E(), P("div", {
    ref: "selectWrapper",
    class: M(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...f) => e.handleMouseEnter && e.handleMouseEnter(...f)),
    onMouseleave: t[23] || (t[23] = (...f) => e.handleMouseLeave && e.handleMouseLeave(...f)),
    onClick: t[24] || (t[24] = Xe((...f) => e.toggleMenu && e.toggleMenu(...f), ["stop"]))
  }, [
    Z(a, {
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
      default: R(() => [
        N("div", {
          class: "select-trigger",
          onMouseenter: t[20] || (t[20] = (f) => e.inputHovering = !0),
          onMouseleave: t[21] || (t[21] = (f) => e.inputHovering = !1)
        }, [
          e.multiple ? (E(), P("div", {
            key: 0,
            ref: "tags",
            tabindex: "-1",
            class: M(e.tagsKls),
            style: we(e.selectTagsStyle),
            onClick: t[15] || (t[15] = (...f) => e.focus && e.focus(...f))
          }, [
            e.collapseTags && e.selected.length ? (E(), V(yo, {
              key: 0,
              onAfterLeave: e.resetInputHeight
            }, {
              default: R(() => [
                N("span", {
                  class: M(e.tagWrapperKls)
                }, [
                  (E(!0), P($e, null, ze(e.showTagList, (f) => (E(), V(s, {
                    key: e.getValueKey(f),
                    closable: !e.selectDisabled && !f.isDisabled,
                    size: e.collapseTagSize,
                    hit: f.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (m) => e.deleteTag(m, f)
                  }, {
                    default: R(() => [
                      N("span", {
                        class: M(e.nsSelect.e("tags-text")),
                        style: we(e.tagTextStyle)
                      }, ie(f.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                  e.selected.length > e.maxCollapseTags ? (E(), V(s, {
                    key: 0,
                    closable: !1,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    "disable-transitions": ""
                  }, {
                    default: R(() => [
                      e.collapseTagsTooltip ? (E(), V(a, {
                        key: 0,
                        ref: "tagTooltipRef",
                        disabled: e.dropMenuVisible,
                        "fallback-placements": ["bottom", "top", "right", "left"],
                        effect: e.effect,
                        placement: "bottom",
                        teleported: e.teleported
                      }, {
                        default: R(() => [
                          N("span", {
                            class: M(e.nsSelect.e("tags-text"))
                          }, "+ " + ie(e.selected.length - e.maxCollapseTags), 3)
                        ]),
                        content: R(() => [
                          N("div", {
                            class: M(e.nsSelect.e("collapse-tags"))
                          }, [
                            (E(!0), P($e, null, ze(e.collapseTagList, (f) => (E(), P("div", {
                              key: e.getValueKey(f),
                              class: M(e.nsSelect.e("collapse-tag"))
                            }, [
                              Z(s, {
                                class: "in-tooltip",
                                closable: !e.selectDisabled && !f.isDisabled,
                                size: e.collapseTagSize,
                                hit: f.hitState,
                                type: e.tagType,
                                "disable-transitions": "",
                                style: { margin: "2px" },
                                onClose: (m) => e.handleDeleteTooltipTag(m, f)
                              }, {
                                default: R(() => [
                                  N("span", {
                                    class: M(e.nsSelect.e("tags-text")),
                                    style: we({
                                      maxWidth: e.inputWidth - 75 + "px"
                                    })
                                  }, ie(f.currentLabel), 7)
                                ]),
                                _: 2
                              }, 1032, ["closable", "size", "hit", "type", "onClose"])
                            ], 2))), 128))
                          ], 2)
                        ]),
                        _: 1
                      }, 8, ["disabled", "effect", "teleported"])) : (E(), P("span", {
                        key: 1,
                        class: M(e.nsSelect.e("tags-text"))
                      }, "+ " + ie(e.selected.length - e.maxCollapseTags), 3))
                    ]),
                    _: 1
                  }, 8, ["size", "type"])) : G("v-if", !0)
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : G("v-if", !0),
            e.collapseTags ? G("v-if", !0) : (E(), V(yo, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: R(() => [
                N("span", {
                  class: M(e.tagWrapperKls),
                  style: we(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                }, [
                  (E(!0), P($e, null, ze(e.selected, (f) => (E(), V(s, {
                    key: e.getValueKey(f),
                    closable: !e.selectDisabled && !f.isDisabled,
                    size: e.collapseTagSize,
                    hit: f.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (m) => e.deleteTag(m, f)
                  }, {
                    default: R(() => [
                      N("span", {
                        class: M(e.nsSelect.e("tags-text")),
                        style: we({ maxWidth: e.inputWidth - 75 + "px" })
                      }, ie(f.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 6)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            e.filterable && !e.selectDisabled ? We((E(), P("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[0] || (t[0] = (f) => e.query = f),
              type: "text",
              class: M(e.inputKls),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: we(e.inputStyle),
              "aria-label": e.ariaLabel,
              onFocus: t[1] || (t[1] = (...f) => e.handleFocus && e.handleFocus(...f)),
              onBlur: t[2] || (t[2] = (...f) => e.handleBlur && e.handleBlur(...f)),
              onKeyup: t[3] || (t[3] = (...f) => e.managePlaceholder && e.managePlaceholder(...f)),
              onKeydown: [
                t[4] || (t[4] = (...f) => e.resetInputState && e.resetInputState(...f)),
                t[5] || (t[5] = at(Xe((f) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[6] || (t[6] = at(Xe((f) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[7] || (t[7] = at((...f) => e.handleKeydownEscape && e.handleKeydownEscape(...f), ["esc"])),
                t[8] || (t[8] = at(Xe((...f) => e.selectOption && e.selectOption(...f), ["stop", "prevent"]), ["enter"])),
                t[9] || (t[9] = at((...f) => e.deletePrevTag && e.deletePrevTag(...f), ["delete"])),
                t[10] || (t[10] = at((f) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[11] || (t[11] = (...f) => e.handleComposition && e.handleComposition(...f)),
              onCompositionupdate: t[12] || (t[12] = (...f) => e.handleComposition && e.handleComposition(...f)),
              onCompositionend: t[13] || (t[13] = (...f) => e.handleComposition && e.handleComposition(...f)),
              onInput: t[14] || (t[14] = (...f) => e.debouncedQueryChange && e.debouncedQueryChange(...f))
            }, null, 46, gw)), [
              [Zu, e.query]
            ]) : G("v-if", !0)
          ], 6)) : G("v-if", !0),
          G(" fix: https://github.com/element-plus/element-plus/issues/11415 "),
          e.isIOS && !e.multiple && e.filterable && e.readonly ? (E(), P("input", {
            key: 1,
            ref: "iOSInput",
            class: M(e.iOSInputKls),
            disabled: e.selectDisabled,
            type: "text"
          }, null, 10, mw)) : G("v-if", !0),
          Z(u, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": t[16] || (t[16] = (f) => e.selectedLabel = f),
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
            label: e.ariaLabel,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = at(Xe((f) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = at(Xe((f) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              at(Xe(e.selectOption, ["stop", "prevent"]), ["enter"]),
              at(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = at((f) => e.visible = !1, ["tab"]))
            ]
          }, $n({
            suffix: R(() => [
              e.iconComponent && !e.showClose ? (E(), V(i, {
                key: 0,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: R(() => [
                  (E(), V(Ze(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0),
              e.showClose && e.clearIcon ? (E(), V(i, {
                key: 1,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: R(() => [
                  (E(), V(Ze(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : G("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: R(() => [
                N("div", bw, [
                  K(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "label", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: R(() => [
        Z(g, null, {
          default: R(() => [
            We(Z(v, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: M(e.scrollbarKls)
            }, {
              default: R(() => [
                e.showNewOption ? (E(), V(c, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : G("v-if", !0),
                Z(d, { onUpdateOptions: e.onOptionsRendered }, {
                  default: R(() => [
                    K(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [fn, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (E(), P($e, { key: 0 }, [
              e.$slots.empty ? K(e.$slots, "empty", { key: 0 }) : (E(), P("p", {
                key: 1,
                class: M(e.nsSelect.be("dropdown", "empty"))
              }, ie(e.emptyText), 3))
            ], 64)) : G("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [p, e.handleClose, e.popperPaneRef]
  ]);
}
var ww = /* @__PURE__ */ ye(hw, [["render", yw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const Cw = H({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = de("select"), n = k(!0), o = Ce(), l = k([]);
    lt(xu, Qn({
      ...Zn(e)
    }));
    const r = ve(Pl);
    Me(() => {
      l.value = s(o.subTree);
    });
    const s = (i) => {
      const u = [];
      return Array.isArray(i.children) && i.children.forEach((c) => {
        var d;
        c.type && c.type.name === "ElOption" && c.component && c.component.proxy ? u.push(c.component.proxy) : (d = c.children) != null && d.length && u.push(...s(c));
      }), u;
    }, { groupQueryChange: a } = Fn(r);
    return Y(a, () => {
      n.value = l.value.some((i) => i.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function Sw(e, t, n, o, l, r) {
  return We((E(), P("ul", {
    class: M(e.ns.be("group", "wrap"))
  }, [
    N("li", {
      class: M(e.ns.be("group", "title"))
    }, ie(e.label), 3),
    N("li", null, [
      N("ul", {
        class: M(e.ns.b("group"))
      }, [
        K(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [fn, e.visible]
  ]);
}
var Pu = /* @__PURE__ */ ye(Cw, [["render", Sw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const _w = ut(ww, {
  Option: Qr,
  OptionGroup: Pu
}), $w = eo(Qr);
eo(Pu);
const Zr = () => ve(Ou, {}), Ew = Te({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: fe(Array),
    default: () => un([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  size: {
    type: String,
    values: xo
  }
}), Tw = H({
  name: "ElPaginationSizes"
}), kw = /* @__PURE__ */ H({
  ...Tw,
  props: Ew,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: o } = Ot(), l = de("pagination"), r = Zr(), s = k(n.pageSize);
    Y(() => n.pageSizes, (u, c) => {
      if (!fl(u, c) && Array.isArray(u)) {
        const d = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", d);
      }
    }), Y(() => n.pageSize, (u) => {
      s.value = u;
    });
    const a = _(() => n.pageSizes);
    function i(u) {
      var c;
      u !== s.value && (s.value = u, (c = r.handleSizeChange) == null || c.call(r, Number(u)));
    }
    return (u, c) => (E(), P("span", {
      class: M(h(l).e("sizes"))
    }, [
      Z(h(_w), {
        "model-value": s.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        "validate-event": !1,
        onChange: i
      }, {
        default: R(() => [
          (E(!0), P($e, null, ze(h(a), (d) => (E(), V(h($w), {
            key: d,
            value: d,
            label: d + h(o)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size"])
    ], 2));
  }
});
var Ow = /* @__PURE__ */ ye(kw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const xw = Te({
  size: {
    type: String,
    values: xo
  }
}), Pw = ["disabled"], Aw = H({
  name: "ElPaginationJumper"
}), Mw = /* @__PURE__ */ H({
  ...Aw,
  props: xw,
  setup(e) {
    const { t } = Ot(), n = de("pagination"), { pageCount: o, disabled: l, currentPage: r, changeEvent: s } = Zr(), a = k(), i = _(() => {
      var d;
      return (d = a.value) != null ? d : r == null ? void 0 : r.value;
    });
    function u(d) {
      a.value = d ? +d : "";
    }
    function c(d) {
      d = Math.trunc(+d), s == null || s(d), a.value = void 0;
    }
    return (d, v) => (E(), P("span", {
      class: M(h(n).e("jump")),
      disabled: h(l)
    }, [
      N("span", {
        class: M([h(n).e("goto")])
      }, ie(h(t)("el.pagination.goto")), 3),
      Z(h(Zi), {
        size: d.size,
        class: M([h(n).e("editor"), h(n).is("in-pagination")]),
        min: 1,
        max: h(o),
        disabled: h(l),
        "model-value": h(i),
        "validate-event": !1,
        label: h(t)("el.pagination.page"),
        type: "number",
        "onUpdate:modelValue": u,
        onChange: c
      }, null, 8, ["size", "class", "max", "disabled", "model-value", "label"]),
      N("span", {
        class: M([h(n).e("classifier")])
      }, ie(h(t)("el.pagination.pageClassifier")), 3)
    ], 10, Pw));
  }
});
var Iw = /* @__PURE__ */ ye(Mw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const Lw = Te({
  total: {
    type: Number,
    default: 1e3
  }
}), Nw = ["disabled"], Rw = H({
  name: "ElPaginationTotal"
}), Fw = /* @__PURE__ */ H({
  ...Rw,
  props: Lw,
  setup(e) {
    const { t } = Ot(), n = de("pagination"), { disabled: o } = Zr();
    return (l, r) => (E(), P("span", {
      class: M(h(n).e("total")),
      disabled: h(o)
    }, ie(h(t)("el.pagination.total", {
      total: l.total
    })), 11, Nw));
  }
});
var Bw = /* @__PURE__ */ ye(Fw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const zw = Te({
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
}), Hw = ["onKeyup"], Dw = ["aria-current", "aria-label", "tabindex"], Vw = ["tabindex", "aria-label"], Kw = ["aria-current", "aria-label", "tabindex"], Ww = ["tabindex", "aria-label"], jw = ["aria-current", "aria-label", "tabindex"], Uw = H({
  name: "ElPaginationPager"
}), qw = /* @__PURE__ */ H({
  ...Uw,
  props: zw,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = de("pager"), l = de("icon"), { t: r } = Ot(), s = k(!1), a = k(!1), i = k(!1), u = k(!1), c = k(!1), d = k(!1), v = _(() => {
      const y = n.pagerCount, S = (y - 1) / 2, T = Number(n.currentPage), $ = Number(n.pageCount);
      let x = !1, F = !1;
      $ > y && (T > y - S && (x = !0), T < $ - S && (F = !0));
      const D = [];
      if (x && !F) {
        const B = $ - (y - 2);
        for (let I = B; I < $; I++)
          D.push(I);
      } else if (!x && F)
        for (let B = 2; B < y; B++)
          D.push(B);
      else if (x && F) {
        const B = Math.floor(y / 2) - 1;
        for (let I = T - B; I <= T + B; I++)
          D.push(I);
      } else
        for (let B = 2; B < $; B++)
          D.push(B);
      return D;
    }), g = _(() => [
      "more",
      "btn-quickprev",
      l.b(),
      o.is("disabled", n.disabled)
    ]), p = _(() => [
      "more",
      "btn-quicknext",
      l.b(),
      o.is("disabled", n.disabled)
    ]), f = _(() => n.disabled ? -1 : 0);
    Nt(() => {
      const y = (n.pagerCount - 1) / 2;
      s.value = !1, a.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - y && (s.value = !0), n.currentPage < n.pageCount - y && (a.value = !0));
    });
    function m(y = !1) {
      n.disabled || (y ? i.value = !0 : u.value = !0);
    }
    function b(y = !1) {
      y ? c.value = !0 : d.value = !0;
    }
    function w(y) {
      const S = y.target;
      if (S.tagName.toLowerCase() === "li" && Array.from(S.classList).includes("number")) {
        const T = Number(S.textContent);
        T !== n.currentPage && t("change", T);
      } else
        S.tagName.toLowerCase() === "li" && Array.from(S.classList).includes("more") && C(y);
    }
    function C(y) {
      const S = y.target;
      if (S.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let T = Number(S.textContent);
      const $ = n.pageCount, x = n.currentPage, F = n.pagerCount - 2;
      S.className.includes("more") && (S.className.includes("quickprev") ? T = x - F : S.className.includes("quicknext") && (T = x + F)), Number.isNaN(+T) || (T < 1 && (T = 1), T > $ && (T = $)), T !== x && t("change", T);
    }
    return (y, S) => (E(), P("ul", {
      class: M(h(o).b()),
      onClick: C,
      onKeyup: at(w, ["enter"])
    }, [
      y.pageCount > 0 ? (E(), P("li", {
        key: 0,
        class: M([[
          h(o).is("active", y.currentPage === 1),
          h(o).is("disabled", y.disabled)
        ], "number"]),
        "aria-current": y.currentPage === 1,
        "aria-label": h(r)("el.pagination.currentPage", { pager: 1 }),
        tabindex: h(f)
      }, " 1 ", 10, Dw)) : G("v-if", !0),
      s.value ? (E(), P("li", {
        key: 1,
        class: M(h(g)),
        tabindex: h(f),
        "aria-label": h(r)("el.pagination.prevPages", { pager: y.pagerCount - 2 }),
        onMouseenter: S[0] || (S[0] = (T) => m(!0)),
        onMouseleave: S[1] || (S[1] = (T) => i.value = !1),
        onFocus: S[2] || (S[2] = (T) => b(!0)),
        onBlur: S[3] || (S[3] = (T) => c.value = !1)
      }, [
        (i.value || c.value) && !y.disabled ? (E(), V(h(sd), { key: 0 })) : (E(), V(h(ia), { key: 1 }))
      ], 42, Vw)) : G("v-if", !0),
      (E(!0), P($e, null, ze(h(v), (T) => (E(), P("li", {
        key: T,
        class: M([[
          h(o).is("active", y.currentPage === T),
          h(o).is("disabled", y.disabled)
        ], "number"]),
        "aria-current": y.currentPage === T,
        "aria-label": h(r)("el.pagination.currentPage", { pager: T }),
        tabindex: h(f)
      }, ie(T), 11, Kw))), 128)),
      a.value ? (E(), P("li", {
        key: 2,
        class: M(h(p)),
        tabindex: h(f),
        "aria-label": h(r)("el.pagination.nextPages", { pager: y.pagerCount - 2 }),
        onMouseenter: S[4] || (S[4] = (T) => m()),
        onMouseleave: S[5] || (S[5] = (T) => u.value = !1),
        onFocus: S[6] || (S[6] = (T) => b()),
        onBlur: S[7] || (S[7] = (T) => d.value = !1)
      }, [
        (u.value || d.value) && !y.disabled ? (E(), V(h(pd), { key: 0 })) : (E(), V(h(ia), { key: 1 }))
      ], 42, Ww)) : G("v-if", !0),
      y.pageCount > 1 ? (E(), P("li", {
        key: 3,
        class: M([[
          h(o).is("active", y.currentPage === y.pageCount),
          h(o).is("disabled", y.disabled)
        ], "number"]),
        "aria-current": y.currentPage === y.pageCount,
        "aria-label": h(r)("el.pagination.currentPage", { pager: y.pageCount }),
        tabindex: h(f)
      }, ie(y.pageCount), 11, jw)) : G("v-if", !0)
    ], 42, Hw));
  }
});
var Gw = /* @__PURE__ */ ye(qw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const nt = (e) => typeof e != "number", Yw = Te({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => Ae(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
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
    default: () => un([10, 20, 30, 40, 50, 100])
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
    type: Wt,
    default: () => vc
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: Wt,
    default: () => yr
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), Xw = {
  "update:current-page": (e) => Ae(e),
  "update:page-size": (e) => Ae(e),
  "size-change": (e) => Ae(e),
  "current-change": (e) => Ae(e),
  "prev-click": (e) => Ae(e),
  "next-click": (e) => Ae(e)
}, ks = "ElPagination";
var Qw = H({
  name: ks,
  props: Yw,
  emits: Xw,
  setup(e, { emit: t, slots: n }) {
    const { t: o } = Ot(), l = de("pagination"), r = Ce().vnode.props || {}, s = "onUpdate:currentPage" in r || "onUpdate:current-page" in r || "onCurrentChange" in r, a = "onUpdate:pageSize" in r || "onUpdate:page-size" in r || "onSizeChange" in r, i = _(() => {
      if (nt(e.total) && nt(e.pageCount) || !nt(e.currentPage) && !s)
        return !1;
      if (e.layout.includes("sizes")) {
        if (nt(e.pageCount)) {
          if (!nt(e.total) && !nt(e.pageSize) && !a)
            return !1;
        } else if (!a)
          return !1;
      }
      return !0;
    }), u = k(nt(e.defaultPageSize) ? 10 : e.defaultPageSize), c = k(nt(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), d = _({
      get() {
        return nt(e.pageSize) ? u.value : e.pageSize;
      },
      set(C) {
        nt(e.pageSize) && (u.value = C), a && (t("update:page-size", C), t("size-change", C));
      }
    }), v = _(() => {
      let C = 0;
      return nt(e.pageCount) ? nt(e.total) || (C = Math.max(1, Math.ceil(e.total / d.value))) : C = e.pageCount, C;
    }), g = _({
      get() {
        return nt(e.currentPage) ? c.value : e.currentPage;
      },
      set(C) {
        let y = C;
        C < 1 ? y = 1 : C > v.value && (y = v.value), nt(e.currentPage) && (c.value = y), s && (t("update:current-page", y), t("current-change", y));
      }
    });
    Y(v, (C) => {
      g.value > C && (g.value = C);
    });
    function p(C) {
      g.value = C;
    }
    function f(C) {
      d.value = C;
      const y = v.value;
      g.value > y && (g.value = y);
    }
    function m() {
      e.disabled || (g.value -= 1, t("prev-click", g.value));
    }
    function b() {
      e.disabled || (g.value += 1, t("next-click", g.value));
    }
    function w(C, y) {
      C && (C.props || (C.props = {}), C.props.class = [C.props.class, y].join(" "));
    }
    return lt(Ou, {
      pageCount: v,
      disabled: _(() => e.disabled),
      currentPage: g,
      changeEvent: p,
      handleSizeChange: f
    }), () => {
      var C, y;
      if (!i.value)
        return je(ks, o("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && v.value <= 1)
        return null;
      const S = [], T = [], $ = ae("div", { class: l.e("rightwrapper") }, T), x = {
        prev: ae(J1, {
          disabled: e.disabled,
          currentPage: g.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: m
        }),
        jumper: ae(Iw, {
          size: e.small ? "small" : "default"
        }),
        pager: ae(Gw, {
          currentPage: g.value,
          pageCount: v.value,
          pagerCount: e.pagerCount,
          onChange: p,
          disabled: e.disabled
        }),
        next: ae(rw, {
          disabled: e.disabled,
          currentPage: g.value,
          pageCount: v.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: b
        }),
        sizes: ae(Ow, {
          pageSize: d.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          size: e.small ? "small" : "default"
        }),
        slot: (y = (C = n == null ? void 0 : n.default) == null ? void 0 : C.call(n)) != null ? y : null,
        total: ae(Bw, { total: nt(e.total) ? 0 : e.total })
      }, F = e.layout.split(",").map((B) => B.trim());
      let D = !1;
      return F.forEach((B) => {
        if (B === "->") {
          D = !0;
          return;
        }
        D ? T.push(x[B]) : S.push(x[B]);
      }), w(S[0], l.is("first")), w(S[S.length - 1], l.is("last")), D && T.length > 0 && (w(T[0], l.is("first")), w(T[T.length - 1], l.is("last")), S.push($)), ae("div", {
        class: [
          l.b(),
          l.is("background", e.background),
          {
            [l.m("small")]: e.small
          }
        ]
      }, S);
    };
  }
});
const Zw = ut(Qw);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var Jw = /["'&<>]/, e2 = t2;
function t2(e) {
  var t = "" + e, n = Jw.exec(t);
  if (!n)
    return t;
  var o, l = "", r = 0, s = 0;
  for (r = n.index; r < t.length; r++) {
    switch (t.charCodeAt(r)) {
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
    s !== r && (l += t.substring(s, r)), s = r + 1, l += o;
  }
  return s !== r ? l + t.substring(s, r) : l;
}
const n2 = /* @__PURE__ */ o1(e2), Kl = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, o2 = function(e, t, n, o, l) {
  if (!t && !o && (!l || Array.isArray(l) && !l.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const r = o ? null : function(a, i) {
    return l ? (Array.isArray(l) || (l = [l]), l.map((u) => typeof u == "string" ? Qe(a, u) : u(a, i, e))) : (t !== "$key" && Et(a) && "$value" in a && (a = a.$value), [Et(a) ? Qe(a, t) : a]);
  }, s = function(a, i) {
    if (o)
      return o(a.value, i.value);
    for (let u = 0, c = a.key.length; u < c; u++) {
      if (a.key[u] < i.key[u])
        return -1;
      if (a.key[u] > i.key[u])
        return 1;
    }
    return 0;
  };
  return e.map((a, i) => ({
    value: a,
    index: i,
    key: r ? r(a, i) : null
  })).sort((a, i) => {
    let u = s(a, i);
    return u || (u = a.index - i.index), u * +n;
  }).map((a) => a.value);
}, Au = function(e, t) {
  let n = null;
  return e.columns.forEach((o) => {
    o.id === t && (n = o);
  }), n;
}, l2 = function(e, t) {
  let n = null;
  for (let o = 0; o < e.columns.length; o++) {
    const l = e.columns[o];
    if (l.columnKey === t) {
      n = l;
      break;
    }
  }
  return n || mi("ElTable", `No column matching with column-key: ${t}`), n;
}, Os = function(e, t, n) {
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
    for (const l of n)
      o = o[l];
    return `${o}`;
  } else if (typeof t == "function")
    return t.call(null, e);
}, Cn = function(e, t) {
  const n = {};
  return (e || []).forEach((o, l) => {
    n[Ve(o, t)] = { row: o, index: l };
  }), n;
};
function r2(e, t) {
  const n = {};
  let o;
  for (o in e)
    n[o] = e[o];
  for (o in t)
    if (En(t, o)) {
      const l = t[o];
      typeof l < "u" && (n[o] = l);
    }
  return n;
}
function Jr(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function Mu(e) {
  return e === "" || e !== void 0 && (e = Jr(e), Number.isNaN(e) && (e = 80)), e;
}
function a2(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function s2(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function ho(e, t, n) {
  let o = !1;
  const l = e.indexOf(t), r = l !== -1, s = (a) => {
    a === "add" ? e.push(t) : e.splice(l, 1), o = !0, Tn(t.children) && t.children.forEach((i) => {
      ho(e, i, n ?? !r);
    });
  };
  return Dn(n) ? n && !r ? s("add") : !n && r && s("remove") : s(r ? "remove" : "add"), o;
}
function i2(e, t, n = "children", o = "hasChildren") {
  const l = (s) => !(Array.isArray(s) && s.length);
  function r(s, a, i) {
    t(s, a, i), a.forEach((u) => {
      if (u[o]) {
        t(u, null, i + 1);
        return;
      }
      const c = u[n];
      l(c) || r(u, c, i + 1);
    });
  }
  e.forEach((s) => {
    if (s[o]) {
      t(s, null, 0);
      return;
    }
    const a = s[n];
    l(a) || r(s, a, 0);
  });
}
let Zt;
function u2(e, t, n, o, l) {
  l = vi({
    enterable: !0,
    showArrow: !0
  }, l);
  const r = e == null ? void 0 : e.dataset.prefix, s = e == null ? void 0 : e.querySelector(`.${r}-scrollbar__wrap`);
  function a() {
    const m = l.effect === "light", b = document.createElement("div");
    return b.className = [
      `${r}-popper`,
      m ? "is-light" : "is-dark",
      l.popperClass || ""
    ].join(" "), n = n2(n), b.innerHTML = n, b.style.zIndex = String(o()), e == null || e.appendChild(b), b;
  }
  function i() {
    const m = document.createElement("div");
    return m.className = `${r}-popper__arrow`, m;
  }
  function u() {
    c && c.update();
  }
  Zt == null || Zt(), Zt = () => {
    try {
      c && c.destroy(), g && (e == null || e.removeChild(g)), t.removeEventListener("mouseenter", d), t.removeEventListener("mouseleave", v), s == null || s.removeEventListener("scroll", Zt), Zt = void 0;
    } catch {
    }
  };
  let c = null, d = u, v = Zt;
  l.enterable && ({ onOpen: d, onClose: v } = Wi({
    showAfter: l.showAfter,
    hideAfter: l.hideAfter,
    open: u,
    close: Zt
  }));
  const g = a();
  g.onmouseenter = d, g.onmouseleave = v;
  const p = [];
  if (l.offset && p.push({
    name: "offset",
    options: {
      offset: [0, l.offset]
    }
  }), l.showArrow) {
    const m = g.appendChild(i());
    p.push({
      name: "arrow",
      options: {
        element: m,
        padding: 10
      }
    });
  }
  const f = l.popperOptions || {};
  return c = Hi(t, g, {
    placement: l.placement || "top",
    strategy: "fixed",
    ...f,
    modifiers: f.modifiers ? p.concat(f.modifiers) : p
  }), t.addEventListener("mouseenter", d), t.addEventListener("mouseleave", v), s == null || s.addEventListener("scroll", Zt), c;
}
function Iu(e) {
  return e.children ? cm(e.children, Iu) : [e];
}
function xs(e, t) {
  return e + t.colSpan;
}
const Lu = (e, t, n, o) => {
  let l = 0, r = e;
  const s = n.states.columns.value;
  if (o) {
    const i = Iu(o[e]);
    l = s.slice(0, s.indexOf(i[0])).reduce(xs, 0), r = l + i.reduce(xs, 0) - 1;
  } else
    l = e;
  let a;
  switch (t) {
    case "left":
      r < n.states.fixedLeafColumnsLength.value && (a = "left");
      break;
    case "right":
      l >= s.length - n.states.rightFixedLeafColumnsLength.value && (a = "right");
      break;
    default:
      r < n.states.fixedLeafColumnsLength.value ? a = "left" : l >= s.length - n.states.rightFixedLeafColumnsLength.value && (a = "right");
  }
  return a ? {
    direction: a,
    start: l,
    after: r
  } : {};
}, ea = (e, t, n, o, l, r = 0) => {
  const s = [], { direction: a, start: i, after: u } = Lu(t, n, o, l);
  if (a) {
    const c = a === "left";
    s.push(`${e}-fixed-column--${a}`), c && u + r === o.states.fixedLeafColumnsLength.value - 1 ? s.push("is-last-column") : !c && i - r === o.states.columns.value.length - o.states.rightFixedLeafColumnsLength.value && s.push("is-first-column");
  }
  return s;
};
function Ps(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const ta = (e, t, n, o) => {
  const {
    direction: l,
    start: r = 0,
    after: s = 0
  } = Lu(e, t, n, o);
  if (!l)
    return;
  const a = {}, i = l === "left", u = n.states.columns.value;
  return i ? a.left = u.slice(0, r).reduce(Ps, 0) : a.right = u.slice(s + 1).reverse().reduce(Ps, 0), a;
}, Xn = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function c2(e) {
  const t = Ce(), n = k(!1), o = k([]);
  return {
    updateExpandRows: () => {
      const i = e.data.value || [], u = e.rowKey.value;
      if (n.value)
        o.value = i.slice();
      else if (u) {
        const c = Cn(o.value, u);
        o.value = i.reduce((d, v) => {
          const g = Ve(v, u);
          return c[g] && d.push(v), d;
        }, []);
      } else
        o.value = [];
    },
    toggleRowExpansion: (i, u) => {
      ho(o.value, i, u) && t.emit("expand-change", i, o.value.slice());
    },
    setExpandRowKeys: (i) => {
      t.store.assertRowKey();
      const u = e.data.value || [], c = e.rowKey.value, d = Cn(u, c);
      o.value = i.reduce((v, g) => {
        const p = d[g];
        return p && v.push(p.row), v;
      }, []);
    },
    isRowExpanded: (i) => {
      const u = e.rowKey.value;
      return u ? !!Cn(o.value, u)[Ve(i, u)] : o.value.includes(i);
    },
    states: {
      expandRows: o,
      defaultExpandAll: n
    }
  };
}
function d2(e) {
  const t = Ce(), n = k(null), o = k(null), l = (u) => {
    t.store.assertRowKey(), n.value = u, s(u);
  }, r = () => {
    n.value = null;
  }, s = (u) => {
    const { data: c, rowKey: d } = e;
    let v = null;
    d.value && (v = (h(c) || []).find((g) => Ve(g, d.value) === u)), o.value = v, t.emit("current-change", o.value, null);
  };
  return {
    setCurrentRowKey: l,
    restoreCurrentRowKey: r,
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
          const v = Ve(d, u);
          s(v);
        } else
          o.value = null;
        o.value === null && t.emit("current-change", null, d);
      } else
        n.value && (s(n.value), r());
    },
    states: {
      _currentRowKey: n,
      currentRow: o
    }
  };
}
function f2(e) {
  const t = k([]), n = k({}), o = k(16), l = k(!1), r = k({}), s = k("hasChildren"), a = k("children"), i = Ce(), u = _(() => {
    if (!e.rowKey.value)
      return {};
    const b = e.data.value || [];
    return d(b);
  }), c = _(() => {
    const b = e.rowKey.value, w = Object.keys(r.value), C = {};
    return w.length && w.forEach((y) => {
      if (r.value[y].length) {
        const S = { children: [] };
        r.value[y].forEach((T) => {
          const $ = Ve(T, b);
          S.children.push($), T[s.value] && !C[$] && (C[$] = { children: [] });
        }), C[y] = S;
      }
    }), C;
  }), d = (b) => {
    const w = e.rowKey.value, C = {};
    return i2(b, (y, S, T) => {
      const $ = Ve(y, w);
      Array.isArray(S) ? C[$] = {
        children: S.map((x) => Ve(x, w)),
        level: T
      } : l.value && (C[$] = {
        children: [],
        lazy: !0,
        level: T
      });
    }, a.value, s.value), C;
  }, v = (b = !1, w = ((C) => (C = i.store) == null ? void 0 : C.states.defaultExpandAll.value)()) => {
    var C;
    const y = u.value, S = c.value, T = Object.keys(y), $ = {};
    if (T.length) {
      const x = h(n), F = [], D = (I, Q) => {
        if (b)
          return t.value ? w || t.value.includes(Q) : !!(w || I != null && I.expanded);
        {
          const ee = w || t.value && t.value.includes(Q);
          return !!(I != null && I.expanded || ee);
        }
      };
      T.forEach((I) => {
        const Q = x[I], ee = { ...y[I] };
        if (ee.expanded = D(Q, I), ee.lazy) {
          const { loaded: oe = !1, loading: le = !1 } = Q || {};
          ee.loaded = !!oe, ee.loading = !!le, F.push(I);
        }
        $[I] = ee;
      });
      const B = Object.keys(S);
      l.value && B.length && F.length && B.forEach((I) => {
        const Q = x[I], ee = S[I].children;
        if (F.includes(I)) {
          if ($[I].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          $[I].children = ee;
        } else {
          const { loaded: oe = !1, loading: le = !1 } = Q || {};
          $[I] = {
            lazy: !0,
            loaded: !!oe,
            loading: !!le,
            expanded: D(Q, I),
            children: ee,
            level: ""
          };
        }
      });
    }
    n.value = $, (C = i.store) == null || C.updateTableScrollY();
  };
  Y(() => t.value, () => {
    v(!0);
  }), Y(() => u.value, () => {
    v();
  }), Y(() => c.value, () => {
    v();
  });
  const g = (b) => {
    t.value = b, v();
  }, p = (b, w) => {
    i.store.assertRowKey();
    const C = e.rowKey.value, y = Ve(b, C), S = y && n.value[y];
    if (y && S && "expanded" in S) {
      const T = S.expanded;
      w = typeof w > "u" ? !S.expanded : w, n.value[y].expanded = w, T !== w && i.emit("expand-change", b, w), i.store.updateTableScrollY();
    }
  }, f = (b) => {
    i.store.assertRowKey();
    const w = e.rowKey.value, C = Ve(b, w), y = n.value[C];
    l.value && y && "loaded" in y && !y.loaded ? m(b, C, y) : p(b, void 0);
  }, m = (b, w, C) => {
    const { load: y } = i.props;
    y && !n.value[w].loaded && (n.value[w].loading = !0, y(b, C, (S) => {
      if (!Array.isArray(S))
        throw new TypeError("[ElTable] data must be an array");
      n.value[w].loading = !1, n.value[w].loaded = !0, n.value[w].expanded = !0, S.length && (r.value[w] = S), i.emit("expand-change", b, !0);
    }));
  };
  return {
    loadData: m,
    loadOrToggle: f,
    toggleTreeExpansion: p,
    updateTreeExpandKeys: g,
    updateTreeData: v,
    normalize: d,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: o,
      lazy: l,
      lazyTreeNodeMap: r,
      lazyColumnIdentifier: s,
      childrenColumnName: a
    }
  };
}
const p2 = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : o2(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, qo = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children && n.children.length > 0 ? t.push.apply(t, qo(n.children)) : t.push(n);
  }), t;
};
function v2() {
  var e;
  const t = Ce(), { size: n } = Zn((e = t.proxy) == null ? void 0 : e.$props), o = k(null), l = k([]), r = k([]), s = k(!1), a = k([]), i = k([]), u = k([]), c = k([]), d = k([]), v = k([]), g = k([]), p = k([]), f = [], m = k(0), b = k(0), w = k(0), C = k(!1), y = k([]), S = k(!1), T = k(!1), $ = k(null), x = k({}), F = k(null), D = k(null), B = k(null), I = k(null), Q = k(null);
  Y(l, () => t.state && j(!1), {
    deep: !0
  });
  const ee = () => {
    if (!o.value)
      throw new Error("[ElTable] prop row-key is required");
  }, oe = (X) => {
    var te;
    (te = X.children) == null || te.forEach((pe) => {
      pe.fixed = X.fixed, oe(pe);
    });
  }, le = () => {
    a.value.forEach((be) => {
      oe(be);
    }), c.value = a.value.filter((be) => be.fixed === !0 || be.fixed === "left"), d.value = a.value.filter((be) => be.fixed === "right"), c.value.length > 0 && a.value[0] && a.value[0].type === "selection" && !a.value[0].fixed && (a.value[0].fixed = !0, c.value.unshift(a.value[0]));
    const X = a.value.filter((be) => !be.fixed);
    i.value = [].concat(c.value).concat(X).concat(d.value);
    const te = qo(X), pe = qo(c.value), ce = qo(d.value);
    m.value = te.length, b.value = pe.length, w.value = ce.length, u.value = [].concat(pe).concat(te).concat(ce), s.value = c.value.length > 0 || d.value.length > 0;
  }, j = (X, te = !1) => {
    X && le(), te ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, ne = (X) => y.value.includes(X), A = () => {
    C.value = !1, y.value.length && (y.value = [], t.emit("selection-change", []));
  }, U = () => {
    let X;
    if (o.value) {
      X = [];
      const te = Cn(y.value, o.value), pe = Cn(l.value, o.value);
      for (const ce in te)
        En(te, ce) && !pe[ce] && X.push(te[ce].row);
    } else
      X = y.value.filter((te) => !l.value.includes(te));
    if (X.length) {
      const te = y.value.filter((pe) => !X.includes(pe));
      y.value = te, t.emit("selection-change", te.slice());
    }
  }, re = () => (y.value || []).slice(), ue = (X, te = void 0, pe = !0) => {
    if (ho(y.value, X, te)) {
      const be = (y.value || []).slice();
      pe && t.emit("select", be, X), t.emit("selection-change", be);
    }
  }, ge = () => {
    var X, te;
    const pe = T.value ? !C.value : !(C.value || y.value.length);
    C.value = pe;
    let ce = !1, be = 0;
    const Ie = (te = (X = t == null ? void 0 : t.store) == null ? void 0 : X.states) == null ? void 0 : te.rowKey.value;
    l.value.forEach((qe, Ht) => {
      const et = Ht + be;
      $.value ? $.value.call(null, qe, et) && ho(y.value, qe, pe) && (ce = !0) : ho(y.value, qe, pe) && (ce = !0), be += ke(Ve(qe, Ie));
    }), ce && t.emit("selection-change", y.value ? y.value.slice() : []), t.emit("select-all", y.value);
  }, me = () => {
    const X = Cn(y.value, o.value);
    l.value.forEach((te) => {
      const pe = Ve(te, o.value), ce = X[pe];
      ce && (y.value[ce.index] = te);
    });
  }, _e = () => {
    var X, te, pe;
    if (((X = l.value) == null ? void 0 : X.length) === 0) {
      C.value = !1;
      return;
    }
    let ce;
    o.value && (ce = Cn(y.value, o.value));
    const be = function(et) {
      return ce ? !!ce[Ve(et, o.value)] : y.value.includes(et);
    };
    let Ie = !0, qe = 0, Ht = 0;
    for (let et = 0, lo = (l.value || []).length; et < lo; et++) {
      const ro = (pe = (te = t == null ? void 0 : t.store) == null ? void 0 : te.states) == null ? void 0 : pe.rowKey.value, ln = et + Ht, hn = l.value[et], O = $.value && $.value.call(null, hn, ln);
      if (be(hn))
        qe++;
      else if (!$.value || O) {
        Ie = !1;
        break;
      }
      Ht += ke(Ve(hn, ro));
    }
    qe === 0 && (Ie = !1), C.value = Ie;
  }, ke = (X) => {
    var te;
    if (!t || !t.store)
      return 0;
    const { treeData: pe } = t.store.states;
    let ce = 0;
    const be = (te = pe.value[X]) == null ? void 0 : te.children;
    return be && (ce += be.length, be.forEach((Ie) => {
      ce += ke(Ie);
    })), ce;
  }, Ne = (X, te) => {
    Array.isArray(X) || (X = [X]);
    const pe = {};
    return X.forEach((ce) => {
      x.value[ce.id] = te, pe[ce.columnKey || ce.id] = te;
    }), pe;
  }, Se = (X, te, pe) => {
    D.value && D.value !== X && (D.value.order = null), D.value = X, B.value = te, I.value = pe;
  }, Re = () => {
    let X = h(r);
    Object.keys(x.value).forEach((te) => {
      const pe = x.value[te];
      if (!pe || pe.length === 0)
        return;
      const ce = Au({
        columns: u.value
      }, te);
      ce && ce.filterMethod && (X = X.filter((be) => pe.some((Ie) => ce.filterMethod.call(null, Ie, be, ce))));
    }), F.value = X;
  }, Pe = () => {
    l.value = p2(F.value, {
      sortingColumn: D.value,
      sortProp: B.value,
      sortOrder: I.value
    });
  }, Be = (X = void 0) => {
    X && X.filter || Re(), Pe();
  }, xt = (X) => {
    const { tableHeaderRef: te } = t.refs;
    if (!te)
      return;
    const pe = Object.assign({}, te.filterPanels), ce = Object.keys(pe);
    if (ce.length)
      if (typeof X == "string" && (X = [X]), Array.isArray(X)) {
        const be = X.map((Ie) => l2({
          columns: u.value
        }, Ie));
        ce.forEach((Ie) => {
          const qe = be.find((Ht) => Ht.id === Ie);
          qe && (qe.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: be,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        ce.forEach((be) => {
          const Ie = u.value.find((qe) => qe.id === be);
          Ie && (Ie.filteredValue = []);
        }), x.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, gt = () => {
    D.value && (Se(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: mt,
    toggleRowExpansion: bt,
    updateExpandRows: yt,
    states: wt,
    isRowExpanded: ct
  } = c2({
    data: l,
    rowKey: o
  }), {
    updateTreeExpandKeys: qt,
    toggleTreeExpansion: Je,
    updateTreeData: Ct,
    loadOrToggle: dt,
    states: zt
  } = f2({
    data: l,
    rowKey: o
  }), {
    updateCurrentRowData: St,
    updateCurrentRow: z,
    setCurrentRowKey: J,
    states: Ee
  } = d2({
    data: l,
    rowKey: o
  });
  return {
    assertRowKey: ee,
    updateColumns: le,
    scheduleLayout: j,
    isSelected: ne,
    clearSelection: A,
    cleanSelection: U,
    getSelectionRows: re,
    toggleRowSelection: ue,
    _toggleAllSelection: ge,
    toggleAllSelection: null,
    updateSelectionByRowKey: me,
    updateAllSelected: _e,
    updateFilters: Ne,
    updateCurrentRow: z,
    updateSort: Se,
    execFilter: Re,
    execSort: Pe,
    execQuery: Be,
    clearFilter: xt,
    clearSort: gt,
    toggleRowExpansion: bt,
    setExpandRowKeysAdapter: (X) => {
      mt(X), qt(X);
    },
    setCurrentRowKey: J,
    toggleRowExpansionAdapter: (X, te) => {
      u.value.some(({ type: ce }) => ce === "expand") ? bt(X, te) : Je(X, te);
    },
    isRowExpanded: ct,
    updateExpandRows: yt,
    updateCurrentRowData: St,
    loadOrToggle: dt,
    updateTreeData: Ct,
    states: {
      tableSize: n,
      rowKey: o,
      data: l,
      _data: r,
      isComplex: s,
      _columns: a,
      originColumns: i,
      columns: u,
      fixedColumns: c,
      rightFixedColumns: d,
      leafColumns: v,
      fixedLeafColumns: g,
      rightFixedLeafColumns: p,
      updateOrderFns: f,
      leafColumnsLength: m,
      fixedLeafColumnsLength: b,
      rightFixedLeafColumnsLength: w,
      isAllSelected: C,
      selection: y,
      reserveSelection: S,
      selectOnIndeterminate: T,
      selectable: $,
      filters: x,
      filteredData: F,
      sortingColumn: D,
      sortProp: B,
      sortOrder: I,
      hoverRow: Q,
      ...wt,
      ...zt,
      ...Ee
    }
  };
}
function pr(e, t) {
  return e.map((n) => {
    var o;
    return n.id === t.id ? t : ((o = n.children) != null && o.length && (n.children = pr(n.children, t)), n);
  });
}
function vr(e) {
  e.forEach((t) => {
    var n, o;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (o = t.children) != null && o.length && vr(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function h2() {
  const e = Ce(), t = v2();
  return {
    ns: de("table"),
    ...t,
    mutations: {
      setData(s, a) {
        const i = h(s._data) !== a;
        s.data.value = a, s._data.value = a, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), h(s.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : i ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(s, a, i, u) {
        const c = h(s._columns);
        let d = [];
        i ? (i && !i.children && (i.children = []), i.children.push(a), d = pr(c, i)) : (c.push(a), d = c), vr(d), s._columns.value = d, s.updateOrderFns.push(u), a.type === "selection" && (s.selectable.value = a.selectable, s.reserveSelection.value = a.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(s, a) {
        var i;
        ((i = a.getColumnIndex) == null ? void 0 : i.call(a)) !== a.no && (vr(s._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(s, a, i, u) {
        const c = h(s._columns) || [];
        if (i)
          i.children.splice(i.children.findIndex((v) => v.id === a.id), 1), he(() => {
            var v;
            ((v = i.children) == null ? void 0 : v.length) === 0 && delete i.children;
          }), s._columns.value = pr(c, i);
        else {
          const v = c.indexOf(a);
          v > -1 && (c.splice(v, 1), s._columns.value = c);
        }
        const d = s.updateOrderFns.indexOf(u);
        d > -1 && s.updateOrderFns.splice(d, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      sort(s, a) {
        const { prop: i, order: u, init: c } = a;
        if (i) {
          const d = h(s.columns).find((v) => v.property === i);
          d && (d.order = u, e.store.updateSort(d, i, u), e.store.commit("changeSortCondition", { init: c }));
        }
      },
      changeSortCondition(s, a) {
        const { sortingColumn: i, sortProp: u, sortOrder: c } = s, d = h(i), v = h(u), g = h(c);
        g === null && (s.sortingColumn.value = null, s.sortProp.value = null);
        const p = { filter: !0 };
        e.store.execQuery(p), (!a || !(a.silent || a.init)) && e.emit("sort-change", {
          column: d,
          prop: v,
          order: g
        }), e.store.updateTableScrollY();
      },
      filterChange(s, a) {
        const { column: i, values: u, silent: c } = a, d = e.store.updateFilters(i, u);
        e.store.execQuery(), c || e.emit("filter-change", d), e.store.updateTableScrollY();
      },
      toggleAllSelection() {
        e.store.toggleAllSelection();
      },
      rowSelectedChanged(s, a) {
        e.store.toggleRowSelection(a), e.store.updateAllSelected();
      },
      setHoverRow(s, a) {
        s.hoverRow.value = a;
      },
      setCurrentRow(s, a) {
        e.store.updateCurrentRow(a);
      }
    },
    commit: function(s, ...a) {
      const i = e.store.mutations;
      if (i[s])
        i[s].apply(e, [e.store.states].concat(a));
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
function g2(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = h2();
  return n.toggleAllSelection = zn(n._toggleAllSelection, 10), Object.keys(go).forEach((o) => {
    Nu(Ru(t, o), o, n);
  }), m2(n, t), n;
}
function m2(e, t) {
  Object.keys(go).forEach((n) => {
    Y(() => Ru(t, n), (o) => {
      Nu(o, n, e);
    });
  });
}
function Nu(e, t, n) {
  let o = e, l = go[t];
  typeof go[t] == "object" && (l = l.key, o = o || go[t].default), n.states[l].value = o;
}
function Ru(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let o = e;
    return n.forEach((l) => {
      o = o[l];
    }), o;
  } else
    return e[t];
}
class b2 {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = k(null), this.scrollX = k(!1), this.scrollY = k(!1), this.bodyWidth = k(null), this.fixedWidth = k(null), this.rightFixedWidth = k(null), this.gutterWidth = 0;
    for (const n in t)
      En(t, n) && (Rn(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
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
      const l = this.scrollY.value;
      return o = n.wrapRef.scrollHeight > n.wrapRef.clientHeight, this.scrollY.value = o, l !== o;
    }
    return !1;
  }
  setHeight(t, n = "height") {
    if (!Le)
      return;
    const o = this.table.vnode.el;
    if (t = a2(t), this.height.value = Number(t), !o && (t || t === 0))
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
    if (!Le)
      return;
    const t = this.fit, n = this.table.vnode.el.clientWidth;
    let o = 0;
    const l = this.getFlattenColumns(), r = l.filter((i) => typeof i.width != "number");
    if (l.forEach((i) => {
      typeof i.width == "number" && i.realWidth && (i.realWidth = null);
    }), r.length > 0 && t) {
      if (l.forEach((i) => {
        o += Number(i.width || i.minWidth || 80);
      }), o <= n) {
        this.scrollX.value = !1;
        const i = n - o;
        if (r.length === 1)
          r[0].realWidth = Number(r[0].minWidth || 80) + i;
        else {
          const u = r.reduce((v, g) => v + Number(g.minWidth || 80), 0), c = i / u;
          let d = 0;
          r.forEach((v, g) => {
            if (g === 0)
              return;
            const p = Math.floor(Number(v.minWidth || 80) * c);
            d += p, v.realWidth = Number(v.minWidth || 80) + p;
          }), r[0].realWidth = Number(r[0].minWidth || 80) + i - d;
        }
      } else
        this.scrollX.value = !0, r.forEach((i) => {
          i.realWidth = Number(i.minWidth);
        });
      this.bodyWidth.value = Math.max(o, n), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else
      l.forEach((i) => {
        !i.width && !i.minWidth ? i.realWidth = 80 : i.realWidth = Number(i.width || i.minWidth), o += i.realWidth;
      }), this.scrollX.value = o > n, this.bodyWidth.value = o;
    const s = this.store.states.fixedColumns.value;
    if (s.length > 0) {
      let i = 0;
      s.forEach((u) => {
        i += Number(u.realWidth || u.width);
      }), this.fixedWidth.value = i;
    }
    const a = this.store.states.rightFixedColumns.value;
    if (a.length > 0) {
      let i = 0;
      a.forEach((u) => {
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
      var l, r;
      switch (t) {
        case "columns":
          (l = o.state) == null || l.onColumnsChange(this);
          break;
        case "scrollable":
          (r = o.state) == null || r.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${t}.`);
      }
    });
  }
}
const { CheckboxGroup: y2 } = Yn, w2 = H({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: Yn,
    ElCheckboxGroup: y2,
    ElScrollbar: Ol,
    ElTooltip: iu,
    ElIcon: De,
    ArrowDown: Hs,
    ArrowUp: Ec
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
    const t = Ce(), { t: n } = Ot(), o = de("table-filter"), l = t == null ? void 0 : t.parent;
    l.filterPanels.value[e.column.id] || (l.filterPanels.value[e.column.id] = t);
    const r = k(!1), s = k(null), a = _(() => e.column && e.column.filters), i = _({
      get: () => {
        var y;
        return (((y = e.column) == null ? void 0 : y.filteredValue) || [])[0];
      },
      set: (y) => {
        u.value && (typeof y < "u" && y !== null ? u.value.splice(0, 1, y) : u.value.splice(0, 1));
      }
    }), u = _({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(y) {
        e.column && e.upDataColumn("filteredValue", y);
      }
    }), c = _(() => e.column ? e.column.filterMultiple : !0), d = (y) => y.value === i.value, v = () => {
      r.value = !1;
    }, g = (y) => {
      y.stopPropagation(), r.value = !r.value;
    }, p = () => {
      r.value = !1;
    }, f = () => {
      w(u.value), v();
    }, m = () => {
      u.value = [], w(u.value), v();
    }, b = (y) => {
      i.value = y, w(typeof y < "u" && y !== null ? u.value : []), v();
    }, w = (y) => {
      e.store.commit("filterChange", {
        column: e.column,
        values: y
      }), e.store.updateAllSelected();
    };
    Y(r, (y) => {
      e.column && e.upDataColumn("filterOpened", y);
    }, {
      immediate: !0
    });
    const C = _(() => {
      var y, S;
      return (S = (y = s.value) == null ? void 0 : y.popperRef) == null ? void 0 : S.contentRef;
    });
    return {
      tooltipVisible: r,
      multiple: c,
      filteredValue: u,
      filterValue: i,
      filters: a,
      handleConfirm: f,
      handleReset: m,
      handleSelect: b,
      isActive: d,
      t: n,
      ns: o,
      showFilterPanel: g,
      hideFilterPanel: p,
      popperPaneRef: C,
      tooltip: s
    };
  }
}), C2 = { key: 0 }, S2 = ["disabled"], _2 = ["label", "onClick"];
function $2(e, t, n, o, l, r) {
  const s = q("el-checkbox"), a = q("el-checkbox-group"), i = q("el-scrollbar"), u = q("arrow-up"), c = q("arrow-down"), d = q("el-icon"), v = q("el-tooltip"), g = mr("click-outside");
  return E(), V(v, {
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
    content: R(() => [
      e.multiple ? (E(), P("div", C2, [
        N("div", {
          class: M(e.ns.e("content"))
        }, [
          Z(i, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: R(() => [
              Z(a, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (p) => e.filteredValue = p),
                class: M(e.ns.e("checkbox-group"))
              }, {
                default: R(() => [
                  (E(!0), P($e, null, ze(e.filters, (p) => (E(), V(s, {
                    key: p.value,
                    label: p.value
                  }, {
                    default: R(() => [
                      Ke(ie(p.text), 1)
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
        N("div", {
          class: M(e.ns.e("bottom"))
        }, [
          N("button", {
            class: M({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...p) => e.handleConfirm && e.handleConfirm(...p))
          }, ie(e.t("el.table.confirmFilter")), 11, S2),
          N("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...p) => e.handleReset && e.handleReset(...p))
          }, ie(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (E(), P("ul", {
        key: 1,
        class: M(e.ns.e("list"))
      }, [
        N("li", {
          class: M([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (p) => e.handleSelect(null))
        }, ie(e.t("el.table.clearFilter")), 3),
        (E(!0), P($e, null, ze(e.filters, (p) => (E(), P("li", {
          key: p.value,
          class: M([e.ns.e("list-item"), e.ns.is("active", e.isActive(p))]),
          label: p.value,
          onClick: (f) => e.handleSelect(p.value)
        }, ie(p.text), 11, _2))), 128))
      ], 2))
    ]),
    default: R(() => [
      We((E(), P("span", {
        class: M([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...p) => e.showFilterPanel && e.showFilterPanel(...p))
      }, [
        Z(d, null, {
          default: R(() => [
            e.column.filterOpened ? (E(), V(u, { key: 0 })) : (E(), V(c, { key: 1 }))
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
var E2 = /* @__PURE__ */ ye(w2, [["render", $2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function Fu(e) {
  const t = Ce();
  hr(() => {
    n.value.addObserver(t);
  }), Me(() => {
    o(n.value), l(n.value);
  }), gr(() => {
    o(n.value), l(n.value);
  }), To(() => {
    n.value.removeObserver(t);
  });
  const n = _(() => {
    const r = e.layout;
    if (!r)
      throw new Error("Can not find table layout.");
    return r;
  }), o = (r) => {
    var s;
    const a = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("colgroup > col")) || [];
    if (!a.length)
      return;
    const i = r.getFlattenColumns(), u = {};
    i.forEach((c) => {
      u[c.id] = c;
    });
    for (let c = 0, d = a.length; c < d; c++) {
      const v = a[c], g = v.getAttribute("name"), p = u[g];
      p && v.setAttribute("width", p.realWidth || p.width);
    }
  }, l = (r) => {
    var s, a;
    const i = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let c = 0, d = i.length; c < d; c++)
      i[c].setAttribute("width", r.scrollY.value ? r.gutterWidth : "0");
    const u = ((a = e.vnode.el) == null ? void 0 : a.querySelectorAll("th.gutter")) || [];
    for (let c = 0, d = u.length; c < d; c++) {
      const v = u[c];
      v.style.width = r.scrollY.value ? `${r.gutterWidth}px` : "0", v.style.display = r.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: n.value,
    onColumnsChange: o,
    onScrollableChange: l
  };
}
const Ut = Symbol("ElTable");
function T2(e, t) {
  const n = Ce(), o = ve(Ut), l = (f) => {
    f.stopPropagation();
  }, r = (f, m) => {
    !m.filters && m.sortable ? p(f, m, !1) : m.filterable && !m.sortable && l(f), o == null || o.emit("header-click", m, f);
  }, s = (f, m) => {
    o == null || o.emit("header-contextmenu", m, f);
  }, a = k(null), i = k(!1), u = k({}), c = (f, m) => {
    if (Le && !(m.children && m.children.length > 0) && a.value && e.border) {
      i.value = !0;
      const b = o;
      t("set-drag-visible", !0);
      const C = (b == null ? void 0 : b.vnode.el).getBoundingClientRect().left, y = n.vnode.el.querySelector(`th.${m.id}`), S = y.getBoundingClientRect(), T = S.left - C + 30;
      yi(y, "noclick"), u.value = {
        startMouseLeft: f.clientX,
        startLeft: S.right - C,
        startColumnLeft: S.left - C,
        tableLeft: C
      };
      const $ = b == null ? void 0 : b.refs.resizeProxy;
      $.style.left = `${u.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const x = (D) => {
        const B = D.clientX - u.value.startMouseLeft, I = u.value.startLeft + B;
        $.style.left = `${Math.max(T, I)}px`;
      }, F = () => {
        if (i.value) {
          const { startColumnLeft: D, startLeft: B } = u.value, Q = Number.parseInt($.style.left, 10) - D;
          m.width = m.realWidth = Q, b == null || b.emit("header-dragend", m.width, B - D, m, f), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", i.value = !1, a.value = null, u.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", F), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          Zl(y, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", x), document.addEventListener("mouseup", F);
    }
  }, d = (f, m) => {
    if (m.children && m.children.length > 0)
      return;
    const b = f.target;
    if (!Vn(b))
      return;
    const w = b == null ? void 0 : b.closest("th");
    if (!(!m || !m.resizable) && !i.value && e.border) {
      const C = w.getBoundingClientRect(), y = document.body.style;
      C.width > 12 && C.right - f.pageX < 8 ? (y.cursor = "col-resize", Vo(w, "is-sortable") && (w.style.cursor = "col-resize"), a.value = m) : i.value || (y.cursor = "", Vo(w, "is-sortable") && (w.style.cursor = "pointer"), a.value = null);
    }
  }, v = () => {
    Le && (document.body.style.cursor = "");
  }, g = ({ order: f, sortOrders: m }) => {
    if (f === "")
      return m[0];
    const b = m.indexOf(f || null);
    return m[b > m.length - 2 ? 0 : b + 1];
  }, p = (f, m, b) => {
    var w;
    f.stopPropagation();
    const C = m.order === b ? null : b || g(m), y = (w = f.target) == null ? void 0 : w.closest("th");
    if (y && Vo(y, "noclick")) {
      Zl(y, "noclick");
      return;
    }
    if (!m.sortable)
      return;
    const S = e.store.states;
    let T = S.sortProp.value, $;
    const x = S.sortingColumn.value;
    (x !== m || x === m && x.order === null) && (x && (x.order = null), S.sortingColumn.value = m, T = m.property), C ? $ = m.order = C : $ = m.order = null, S.sortProp.value = T, S.sortOrder.value = $, o == null || o.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick: r,
    handleHeaderContextMenu: s,
    handleMouseDown: c,
    handleMouseMove: d,
    handleMouseOut: v,
    handleSortClick: p,
    handleFilterClick: l
  };
}
function k2(e) {
  const t = ve(Ut), n = de("table");
  return {
    getHeaderRowStyle: (a) => {
      const i = t == null ? void 0 : t.props.headerRowStyle;
      return typeof i == "function" ? i.call(null, { rowIndex: a }) : i;
    },
    getHeaderRowClass: (a) => {
      const i = [], u = t == null ? void 0 : t.props.headerRowClassName;
      return typeof u == "string" ? i.push(u) : typeof u == "function" && i.push(u.call(null, { rowIndex: a })), i.join(" ");
    },
    getHeaderCellStyle: (a, i, u, c) => {
      var d;
      let v = (d = t == null ? void 0 : t.props.headerCellStyle) != null ? d : {};
      typeof v == "function" && (v = v.call(null, {
        rowIndex: a,
        columnIndex: i,
        row: u,
        column: c
      }));
      const g = ta(i, c.fixed, e.store, u);
      return Xn(g, "left"), Xn(g, "right"), Object.assign({}, v, g);
    },
    getHeaderCellClass: (a, i, u, c) => {
      const d = ea(n.b(), i, c.fixed, e.store, u), v = [
        c.id,
        c.order,
        c.headerAlign,
        c.className,
        c.labelClassName,
        ...d
      ];
      c.children || v.push("is-leaf"), c.sortable && v.push("is-sortable");
      const g = t == null ? void 0 : t.props.headerCellClassName;
      return typeof g == "string" ? v.push(g) : typeof g == "function" && v.push(g.call(null, {
        rowIndex: a,
        columnIndex: i,
        row: u,
        column: c
      })), v.push(n.e("cell")), v.filter((p) => !!p).join(" ");
    }
  };
}
const Bu = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, Bu(n.children))) : t.push(n);
  }), t;
}, O2 = (e) => {
  let t = 1;
  const n = (r, s) => {
    if (s && (r.level = s.level + 1, t < r.level && (t = r.level)), r.children) {
      let a = 0;
      r.children.forEach((i) => {
        n(i, r), a += i.colSpan;
      }), r.colSpan = a;
    } else
      r.colSpan = 1;
  };
  e.forEach((r) => {
    r.level = 1, n(r, void 0);
  });
  const o = [];
  for (let r = 0; r < t; r++)
    o.push([]);
  return Bu(e).forEach((r) => {
    r.children ? (r.rowSpan = 1, r.children.forEach((s) => s.isSubColumn = !0)) : r.rowSpan = t - r.level + 1, o[r.level - 1].push(r);
  }), o;
};
function x2(e) {
  const t = ve(Ut), n = _(() => O2(e.store.states.originColumns.value));
  return {
    isGroup: _(() => {
      const r = n.value.length > 1;
      return r && t && (t.state.isGroup.value = !0), r;
    }),
    toggleAllSelection: (r) => {
      r.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
var P2 = H({
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
    const n = Ce(), o = ve(Ut), l = de("table"), r = k({}), { onColumnsChange: s, onScrollableChange: a } = Fu(o);
    Me(async () => {
      await he(), await he();
      const { prop: T, order: $ } = e.defaultSort;
      o == null || o.store.commit("sort", { prop: T, order: $, init: !0 });
    });
    const {
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: c,
      handleMouseMove: d,
      handleMouseOut: v,
      handleSortClick: g,
      handleFilterClick: p
    } = T2(e, t), {
      getHeaderRowStyle: f,
      getHeaderRowClass: m,
      getHeaderCellStyle: b,
      getHeaderCellClass: w
    } = k2(e), { isGroup: C, toggleAllSelection: y, columnRows: S } = x2(e);
    return n.state = {
      onColumnsChange: s,
      onScrollableChange: a
    }, n.filterPanels = r, {
      ns: l,
      filterPanels: r,
      onColumnsChange: s,
      onScrollableChange: a,
      columnRows: S,
      getHeaderRowClass: m,
      getHeaderRowStyle: f,
      getHeaderCellClass: w,
      getHeaderCellStyle: b,
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: c,
      handleMouseMove: d,
      handleMouseOut: v,
      handleSortClick: g,
      handleFilterClick: p,
      isGroup: C,
      toggleAllSelection: y
    };
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: n,
      getHeaderCellStyle: o,
      getHeaderCellClass: l,
      getHeaderRowClass: r,
      getHeaderRowStyle: s,
      handleHeaderClick: a,
      handleHeaderContextMenu: i,
      handleMouseDown: u,
      handleMouseMove: c,
      handleSortClick: d,
      handleMouseOut: v,
      store: g,
      $parent: p
    } = this;
    let f = 1;
    return ae("thead", {
      class: { [e.is("group")]: t }
    }, n.map((m, b) => ae("tr", {
      class: r(b),
      key: b,
      style: s(b)
    }, m.map((w, C) => (w.rowSpan > f && (f = w.rowSpan), ae("th", {
      class: l(b, C, m, w),
      colspan: w.colSpan,
      key: `${w.id}-thead`,
      rowspan: w.rowSpan,
      style: o(b, C, m, w),
      onClick: (y) => a(y, w),
      onContextmenu: (y) => i(y, w),
      onMousedown: (y) => u(y, w),
      onMousemove: (y) => c(y, w),
      onMouseout: v
    }, [
      ae("div", {
        class: [
          "cell",
          w.filteredValue && w.filteredValue.length > 0 ? "highlight" : ""
        ]
      }, [
        w.renderHeader ? w.renderHeader({
          column: w,
          $index: C,
          store: g,
          _self: p
        }) : w.label,
        w.sortable && ae("span", {
          onClick: (y) => d(y, w),
          class: "caret-wrapper"
        }, [
          ae("i", {
            onClick: (y) => d(y, w, "ascending"),
            class: "sort-caret ascending"
          }),
          ae("i", {
            onClick: (y) => d(y, w, "descending"),
            class: "sort-caret descending"
          })
        ]),
        w.filterable && ae(E2, {
          store: g,
          placement: w.filterPlacement || "bottom-start",
          column: w,
          upDataColumn: (y, S) => {
            w[y] = S;
          }
        })
      ])
    ]))))));
  }
});
function A2(e) {
  const t = ve(Ut), n = k(""), o = k(ae("div")), { nextZIndex: l } = qi(), r = (p, f, m) => {
    var b;
    const w = t, C = Kl(p);
    let y;
    const S = (b = w == null ? void 0 : w.vnode.el) == null ? void 0 : b.dataset.prefix;
    C && (y = Os({
      columns: e.store.states.columns.value
    }, C, S), y && (w == null || w.emit(`cell-${m}`, f, y, C, p))), w == null || w.emit(`row-${m}`, f, y, p);
  }, s = (p, f) => {
    r(p, f, "dblclick");
  }, a = (p, f) => {
    e.store.commit("setCurrentRow", f), r(p, f, "click");
  }, i = (p, f) => {
    r(p, f, "contextmenu");
  }, u = zn((p) => {
    e.store.commit("setHoverRow", p);
  }, 30), c = zn(() => {
    e.store.commit("setHoverRow", null);
  }, 30), d = (p) => {
    const f = window.getComputedStyle(p, null), m = Number.parseInt(f.paddingLeft, 10) || 0, b = Number.parseInt(f.paddingRight, 10) || 0, w = Number.parseInt(f.paddingTop, 10) || 0, C = Number.parseInt(f.paddingBottom, 10) || 0;
    return {
      left: m,
      right: b,
      top: w,
      bottom: C
    };
  };
  return {
    handleDoubleClick: s,
    handleClick: a,
    handleContextMenu: i,
    handleMouseEnter: u,
    handleMouseLeave: c,
    handleCellMouseEnter: (p, f, m) => {
      var b;
      const w = t, C = Kl(p), y = (b = w == null ? void 0 : w.vnode.el) == null ? void 0 : b.dataset.prefix;
      if (C) {
        const j = Os({
          columns: e.store.states.columns.value
        }, C, y), ne = w.hoverState = { cell: C, column: j, row: f };
        w == null || w.emit("cell-mouse-enter", ne.row, ne.column, ne.cell, p);
      }
      if (!m)
        return;
      const S = p.target.querySelector(".cell");
      if (!(Vo(S, `${y}-tooltip`) && S.childNodes.length))
        return;
      const T = document.createRange();
      T.setStart(S, 0), T.setEnd(S, S.childNodes.length);
      let $ = T.getBoundingClientRect().width, x = T.getBoundingClientRect().height;
      $ - Math.floor($) < 1e-3 && ($ = Math.floor($)), x - Math.floor(x) < 1e-3 && (x = Math.floor(x));
      const { top: B, left: I, right: Q, bottom: ee } = d(S), oe = I + Q, le = B + ee;
      ($ + oe > S.offsetWidth || x + le > S.offsetHeight || S.scrollWidth > S.offsetWidth) && u2(t == null ? void 0 : t.refs.tableWrapper, C, C.innerText || C.textContent, l, m);
    },
    handleCellMouseLeave: (p) => {
      if (!Kl(p))
        return;
      const m = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", m == null ? void 0 : m.row, m == null ? void 0 : m.column, m == null ? void 0 : m.cell, p);
    },
    tooltipContent: n,
    tooltipTrigger: o
  };
}
function M2(e) {
  const t = ve(Ut), n = de("table");
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
      const v = t == null ? void 0 : t.props.rowClassName;
      return typeof v == "string" ? d.push(v) : typeof v == "function" && d.push(v.call(null, {
        row: u,
        rowIndex: c
      })), d;
    },
    getCellStyle: (u, c, d, v) => {
      const g = t == null ? void 0 : t.props.cellStyle;
      let p = g ?? {};
      typeof g == "function" && (p = g.call(null, {
        rowIndex: u,
        columnIndex: c,
        row: d,
        column: v
      }));
      const f = ta(c, e == null ? void 0 : e.fixed, e.store);
      return Xn(f, "left"), Xn(f, "right"), Object.assign({}, p, f);
    },
    getCellClass: (u, c, d, v, g) => {
      const p = ea(n.b(), c, e == null ? void 0 : e.fixed, e.store, void 0, g), f = [v.id, v.align, v.className, ...p], m = t == null ? void 0 : t.props.cellClassName;
      return typeof m == "string" ? f.push(m) : typeof m == "function" && f.push(m.call(null, {
        rowIndex: u,
        columnIndex: c,
        row: d,
        column: v
      })), f.push(n.e("cell")), f.filter((b) => !!b).join(" ");
    },
    getSpan: (u, c, d, v) => {
      let g = 1, p = 1;
      const f = t == null ? void 0 : t.props.spanMethod;
      if (typeof f == "function") {
        const m = f({
          row: u,
          column: c,
          rowIndex: d,
          columnIndex: v
        });
        Array.isArray(m) ? (g = m[0], p = m[1]) : typeof m == "object" && (g = m.rowspan, p = m.colspan);
      }
      return { rowspan: g, colspan: p };
    },
    getColspanRealWidth: (u, c, d) => {
      if (c < 1)
        return u[d].realWidth;
      const v = u.map(({ realWidth: g, width: p }) => g || p).slice(d, d + c);
      return Number(v.reduce((g, p) => Number(g) + Number(p), -1));
    }
  };
}
function I2(e) {
  const t = ve(Ut), n = de("table"), {
    handleDoubleClick: o,
    handleClick: l,
    handleContextMenu: r,
    handleMouseEnter: s,
    handleMouseLeave: a,
    handleCellMouseEnter: i,
    handleCellMouseLeave: u,
    tooltipContent: c,
    tooltipTrigger: d
  } = A2(e), {
    getRowStyle: v,
    getRowClass: g,
    getCellStyle: p,
    getCellClass: f,
    getSpan: m,
    getColspanRealWidth: b
  } = M2(e), w = _(() => e.store.states.columns.value.findIndex(({ type: $ }) => $ === "default")), C = ($, x) => {
    const F = t.props.rowKey;
    return F ? Ve($, F) : x;
  }, y = ($, x, F, D = !1) => {
    const { tooltipEffect: B, tooltipOptions: I, store: Q } = e, { indent: ee, columns: oe } = Q.states, le = g($, x);
    let j = !0;
    return F && (le.push(n.em("row", `level-${F.level}`)), j = F.display), ae("tr", {
      style: [j ? null : {
        display: "none"
      }, v($, x)],
      class: le,
      key: C($, x),
      onDblclick: (A) => o(A, $),
      onClick: (A) => l(A, $),
      onContextmenu: (A) => r(A, $),
      onMouseenter: () => s(x),
      onMouseleave: a
    }, oe.value.map((A, U) => {
      const { rowspan: re, colspan: ue } = m($, A, x, U);
      if (!re || !ue)
        return null;
      const ge = Object.assign({}, A);
      ge.realWidth = b(oe.value, ue, U);
      const me = {
        store: e.store,
        _self: e.context || t,
        column: ge,
        row: $,
        $index: x,
        cellIndex: U,
        expanded: D
      };
      U === w.value && F && (me.treeNode = {
        indent: F.level * ee.value,
        level: F.level
      }, typeof F.expanded == "boolean" && (me.treeNode.expanded = F.expanded, "loading" in F && (me.treeNode.loading = F.loading), "noLazyChildren" in F && (me.treeNode.noLazyChildren = F.noLazyChildren)));
      const _e = `${x},${U}`, ke = ge.columnKey || ge.rawColumnKey || "", Ne = S(U, A, me), Se = A.showOverflowTooltip && vi({
        effect: B
      }, I, A.showOverflowTooltip);
      return ae("td", {
        style: p(x, U, $, A),
        class: f(x, U, $, A, ue - 1),
        key: `${ke}${_e}`,
        rowspan: re,
        colspan: ue,
        onMouseenter: (Re) => i(Re, $, Se),
        onMouseleave: u
      }, [Ne]);
    }));
  }, S = ($, x, F) => x.renderCell(F);
  return {
    wrappedRowRender: ($, x) => {
      const F = e.store, { isRowExpanded: D, assertRowKey: B } = F, { treeData: I, lazyTreeNodeMap: Q, childrenColumnName: ee, rowKey: oe } = F.states, le = F.states.columns.value;
      if (le.some(({ type: ne }) => ne === "expand")) {
        const ne = D($), A = y($, x, void 0, ne), U = t.renderExpanded;
        return ne ? U ? [
          [
            A,
            ae("tr", {
              key: `expanded-row__${A.key}`
            }, [
              ae("td", {
                colspan: le.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [U({ row: $, $index: x, store: F, expanded: ne })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), A) : [[A]];
      } else if (Object.keys(I.value).length) {
        B();
        const ne = Ve($, oe.value);
        let A = I.value[ne], U = null;
        A && (U = {
          expanded: A.expanded,
          level: A.level,
          display: !0
        }, typeof A.lazy == "boolean" && (typeof A.loaded == "boolean" && A.loaded && (U.noLazyChildren = !(A.children && A.children.length)), U.loading = A.loading));
        const re = [y($, x, U)];
        if (A) {
          let ue = 0;
          const ge = (_e, ke) => {
            _e && _e.length && ke && _e.forEach((Ne) => {
              const Se = {
                display: ke.display && ke.expanded,
                level: ke.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, Re = Ve(Ne, oe.value);
              if (Re == null)
                throw new Error("For nested data item, row-key is required.");
              if (A = { ...I.value[Re] }, A && (Se.expanded = A.expanded, A.level = A.level || Se.level, A.display = !!(A.expanded && Se.display), typeof A.lazy == "boolean" && (typeof A.loaded == "boolean" && A.loaded && (Se.noLazyChildren = !(A.children && A.children.length)), Se.loading = A.loading)), ue++, re.push(y(Ne, x + ue, Se)), A) {
                const Pe = Q.value[Re] || Ne[ee.value];
                ge(Pe, A);
              }
            });
          };
          A.display = !0;
          const me = Q.value[ne] || $[ee.value];
          ge(me, A);
        }
        return re;
      } else
        return y($, x, void 0);
    },
    tooltipContent: c,
    tooltipTrigger: d
  };
}
const L2 = {
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
var N2 = H({
  name: "ElTableBody",
  props: L2,
  setup(e) {
    const t = Ce(), n = ve(Ut), o = de("table"), { wrappedRowRender: l, tooltipContent: r, tooltipTrigger: s } = I2(e), { onColumnsChange: a, onScrollableChange: i } = Fu(n);
    return Y(e.store.states.hoverRow, (u, c) => {
      !e.store.states.isComplex.value || !Le || km(() => {
        const d = t == null ? void 0 : t.vnode.el, v = Array.from((d == null ? void 0 : d.children) || []).filter((f) => f == null ? void 0 : f.classList.contains(`${o.e("row")}`)), g = v[c], p = v[u];
        g && Zl(g, "hover-row"), p && yi(p, "hover-row");
      });
    }), To(() => {
      var u;
      (u = Zt) == null || u();
    }), {
      ns: o,
      onColumnsChange: a,
      onScrollableChange: i,
      wrappedRowRender: l,
      tooltipContent: r,
      tooltipTrigger: s
    };
  },
  render() {
    const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
    return ae("tbody", {}, [
      n.reduce((o, l) => o.concat(e(l, o.length)), [])
    ]);
  }
});
function na(e) {
  const t = e.tableLayout === "auto";
  let n = e.columns || [];
  t && n.every((l) => l.width === void 0) && (n = []);
  const o = (l) => {
    const r = {
      key: `${e.tableLayout}_${l.id}`,
      style: {},
      name: void 0
    };
    return t ? r.style = {
      width: `${l.width}px`
    } : r.name = l.id, r;
  };
  return ae("colgroup", {}, n.map((l) => ae("col", o(l))));
}
na.props = ["columns", "tableLayout"];
function R2() {
  const e = ve(Ut), t = e == null ? void 0 : e.store, n = _(() => t.states.fixedLeafColumnsLength.value), o = _(() => t.states.rightFixedColumns.value.length), l = _(() => t.states.columns.value.length), r = _(() => t.states.fixedColumns.value.length), s = _(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: o,
    columnsCount: l,
    leftFixedCount: r,
    rightFixedCount: s,
    columns: t.states.columns
  };
}
function F2(e) {
  const { columns: t } = R2(), n = de("table");
  return {
    getCellClasses: (r, s) => {
      const a = r[s], i = [
        n.e("cell"),
        a.id,
        a.align,
        a.labelClassName,
        ...ea(n.b(), s, a.fixed, e.store)
      ];
      return a.className && i.push(a.className), a.children || i.push(n.is("leaf")), i;
    },
    getCellStyles: (r, s) => {
      const a = ta(s, r.fixed, e.store);
      return Xn(a, "left"), Xn(a, "right"), a;
    },
    columns: t
  };
}
var B2 = H({
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
    const { getCellClasses: t, getCellStyles: n, columns: o } = F2(e);
    return {
      ns: de("table"),
      getCellClasses: t,
      getCellStyles: n,
      columns: o
    };
  },
  render() {
    const {
      columns: e,
      getCellStyles: t,
      getCellClasses: n,
      summaryMethod: o,
      sumText: l,
      ns: r
    } = this, s = this.store.states.data.value;
    let a = [];
    return o ? a = o({
      columns: e,
      data: s
    }) : e.forEach((i, u) => {
      if (u === 0) {
        a[u] = l;
        return;
      }
      const c = s.map((p) => Number(p[i.property])), d = [];
      let v = !0;
      c.forEach((p) => {
        if (!Number.isNaN(+p)) {
          v = !1;
          const f = `${p}`.split(".")[1];
          d.push(f ? f.length : 0);
        }
      });
      const g = Math.max.apply(null, d);
      v ? a[u] = "" : a[u] = c.reduce((p, f) => {
        const m = Number(f);
        return Number.isNaN(+m) ? p : Number.parseFloat((p + f).toFixed(Math.min(g, 20)));
      }, 0);
    }), ae("table", {
      class: r.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      na({
        columns: e
      }),
      ae("tbody", [
        ae("tr", {}, [
          ...e.map((i, u) => ae("td", {
            key: u,
            colspan: i.colSpan,
            rowspan: i.rowSpan,
            class: n(e, u),
            style: t(i, u)
          }, [
            ae("div", {
              class: ["cell", i.labelClassName]
            }, [a[u]])
          ]))
        ])
      ])
    ]);
  }
});
function z2(e) {
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
function H2(e, t, n, o) {
  const l = k(!1), r = k(null), s = k(!1), a = (A) => {
    s.value = A;
  }, i = k({
    width: null,
    height: null,
    headerHeight: null
  }), u = k(!1), c = {
    display: "inline-block",
    verticalAlign: "middle"
  }, d = k(), v = k(0), g = k(0), p = k(0), f = k(0), m = k(0);
  Nt(() => {
    t.setHeight(e.height);
  }), Nt(() => {
    t.setMaxHeight(e.maxHeight);
  }), Y(() => [e.currentRowKey, n.states.rowKey], ([A, U]) => {
    !h(U) || !h(A) || n.setCurrentRowKey(`${A}`);
  }, {
    immediate: !0
  }), Y(() => e.data, (A) => {
    o.store.commit("setData", A);
  }, {
    immediate: !0,
    deep: !0
  }), Nt(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const b = () => {
    o.store.commit("setHoverRow", null), o.hoverState && (o.hoverState = null);
  }, w = (A, U) => {
    const { pixelX: re, pixelY: ue } = U;
    Math.abs(re) >= Math.abs(ue) && (o.refs.bodyWrapper.scrollLeft += U.pixelX / 5);
  }, C = _(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), y = _(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), S = () => {
    C.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(F);
  };
  Me(async () => {
    await he(), n.updateColumns(), D(), requestAnimationFrame(S);
    const A = o.vnode.el, U = o.refs.headerWrapper;
    e.flexible && A && A.parentElement && (A.parentElement.style.minWidth = "0"), i.value = {
      width: d.value = A.offsetWidth,
      height: A.offsetHeight,
      headerHeight: e.showHeader && U ? U.offsetHeight : null
    }, n.states.columns.value.forEach((re) => {
      re.filteredValue && re.filteredValue.length && o.store.commit("filterChange", {
        column: re,
        values: re.filteredValue,
        silent: !0
      });
    }), o.$ready = !0;
  });
  const T = (A, U) => {
    if (!A)
      return;
    const re = Array.from(A.classList).filter((ue) => !ue.startsWith("is-scrolling-"));
    re.push(t.scrollX.value ? U : "is-scrolling-none"), A.className = re.join(" ");
  }, $ = (A) => {
    const { tableWrapper: U } = o.refs;
    T(U, A);
  }, x = (A) => {
    const { tableWrapper: U } = o.refs;
    return !!(U && U.classList.contains(A));
  }, F = function() {
    if (!o.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const ke = "is-scrolling-none";
      x(ke) || $(ke);
      return;
    }
    const A = o.refs.scrollBarRef.wrapRef;
    if (!A)
      return;
    const { scrollLeft: U, offsetWidth: re, scrollWidth: ue } = A, { headerWrapper: ge, footerWrapper: me } = o.refs;
    ge && (ge.scrollLeft = U), me && (me.scrollLeft = U);
    const _e = ue - re - 1;
    U >= _e ? $("is-scrolling-right") : $(U === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, D = () => {
    o.refs.scrollBarRef && (o.refs.scrollBarRef.wrapRef && en(o.refs.scrollBarRef.wrapRef, "scroll", F, {
      passive: !0
    }), e.fit ? Bn(o.vnode.el, B) : en(window, "resize", B), Bn(o.refs.bodyWrapper, () => {
      var A, U;
      B(), (U = (A = o.refs) == null ? void 0 : A.scrollBarRef) == null || U.update();
    }));
  }, B = () => {
    var A, U, re, ue;
    const ge = o.vnode.el;
    if (!o.$ready || !ge)
      return;
    let me = !1;
    const {
      width: _e,
      height: ke,
      headerHeight: Ne
    } = i.value, Se = d.value = ge.offsetWidth;
    _e !== Se && (me = !0);
    const Re = ge.offsetHeight;
    (e.height || C.value) && ke !== Re && (me = !0);
    const Pe = e.tableLayout === "fixed" ? o.refs.headerWrapper : (A = o.refs.tableHeaderRef) == null ? void 0 : A.$el;
    e.showHeader && (Pe == null ? void 0 : Pe.offsetHeight) !== Ne && (me = !0), v.value = ((U = o.refs.tableWrapper) == null ? void 0 : U.scrollHeight) || 0, p.value = (Pe == null ? void 0 : Pe.scrollHeight) || 0, f.value = ((re = o.refs.footerWrapper) == null ? void 0 : re.offsetHeight) || 0, m.value = ((ue = o.refs.appendWrapper) == null ? void 0 : ue.offsetHeight) || 0, g.value = v.value - p.value - f.value - m.value, me && (i.value = {
      width: Se,
      height: Re,
      headerHeight: e.showHeader && (Pe == null ? void 0 : Pe.offsetHeight) || 0
    }, S());
  }, I = On(), Q = _(() => {
    const { bodyWidth: A, scrollY: U, gutterWidth: re } = t;
    return A.value ? `${A.value - (U.value ? re : 0)}px` : "";
  }), ee = _(() => e.maxHeight ? "fixed" : e.tableLayout), oe = _(() => {
    if (e.data && e.data.length)
      return null;
    let A = "100%";
    e.height && g.value && (A = `${g.value}px`);
    const U = d.value;
    return {
      width: U ? `${U}px` : "",
      height: A
    };
  }), le = _(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), j = _(() => e.height ? {
    height: "100%"
  } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? {
    maxHeight: `calc(${e.maxHeight} - ${p.value + f.value}px)`
  } : {
    maxHeight: `${e.maxHeight - p.value - f.value}px`
  } : {});
  return {
    isHidden: l,
    renderExpanded: r,
    setDragVisible: a,
    isGroup: u,
    handleMouseLeave: b,
    handleHeaderFooterMousewheel: w,
    tableSize: I,
    emptyBlockStyle: oe,
    handleFixedMousewheel: (A, U) => {
      const re = o.refs.bodyWrapper;
      if (Math.abs(U.spinY) > 0) {
        const ue = re.scrollTop;
        U.pixelY < 0 && ue !== 0 && A.preventDefault(), U.pixelY > 0 && re.scrollHeight - re.clientHeight > ue && A.preventDefault(), re.scrollTop += Math.ceil(U.pixelY / 5);
      } else
        re.scrollLeft += Math.ceil(U.pixelX / 5);
    },
    resizeProxyVisible: s,
    bodyWidth: Q,
    resizeState: i,
    doLayout: S,
    tableBodyStyles: y,
    tableLayout: ee,
    scrollbarViewStyle: c,
    tableInnerStyle: le,
    scrollbarStyle: j
  };
}
function D2(e) {
  const t = k(), n = () => {
    const l = e.vnode.el.querySelector(".hidden-columns"), r = { childList: !0, subtree: !0 }, s = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      s.forEach((a) => a());
    }), t.value.observe(l, r);
  };
  Me(() => {
    n();
  }), To(() => {
    var o;
    (o = t.value) == null || o.disconnect();
  });
}
var V2 = {
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
const K2 = () => {
  const e = k(), t = (r, s) => {
    const a = e.value;
    a && a.scrollTo(r, s);
  }, n = (r, s) => {
    const a = e.value;
    a && Ae(s) && ["Top", "Left"].includes(r) && a[`setScroll${r}`](s);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (r) => n("Top", r),
    setScrollLeft: (r) => n("Left", r)
  };
};
let W2 = 1;
const j2 = H({
  name: "ElTable",
  directives: {
    Mousewheel: c1
  },
  components: {
    TableHeader: P2,
    TableBody: N2,
    TableFooter: B2,
    ElScrollbar: Ol,
    hColgroup: na
  },
  props: V2,
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
    const { t } = Ot(), n = de("table"), o = Ce();
    lt(Ut, o);
    const l = g2(o, e);
    o.store = l;
    const r = new b2({
      store: o.store,
      table: o,
      fit: e.fit,
      showHeader: e.showHeader
    });
    o.layout = r;
    const s = _(() => (l.states.data.value || []).length === 0), {
      setCurrentRow: a,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: c,
      clearFilter: d,
      toggleAllSelection: v,
      toggleRowExpansion: g,
      clearSort: p,
      sort: f
    } = z2(l), {
      isHidden: m,
      renderExpanded: b,
      setDragVisible: w,
      isGroup: C,
      handleMouseLeave: y,
      handleHeaderFooterMousewheel: S,
      tableSize: T,
      emptyBlockStyle: $,
      handleFixedMousewheel: x,
      resizeProxyVisible: F,
      bodyWidth: D,
      resizeState: B,
      doLayout: I,
      tableBodyStyles: Q,
      tableLayout: ee,
      scrollbarViewStyle: oe,
      tableInnerStyle: le,
      scrollbarStyle: j
    } = H2(e, r, l, o), { scrollBarRef: ne, scrollTo: A, setScrollLeft: U, setScrollTop: re } = K2(), ue = zn(I, 50), ge = `${n.namespace.value}-table_${W2++}`;
    o.tableId = ge, o.state = {
      isGroup: C,
      resizeState: B,
      doLayout: I,
      debouncedUpdateLayout: ue
    };
    const me = _(() => e.sumText || t("el.table.sumText")), _e = _(() => e.emptyText || t("el.table.emptyText"));
    return D2(o), {
      ns: n,
      layout: r,
      store: l,
      handleHeaderFooterMousewheel: S,
      handleMouseLeave: y,
      tableId: ge,
      tableSize: T,
      isHidden: m,
      isEmpty: s,
      renderExpanded: b,
      resizeProxyVisible: F,
      resizeState: B,
      isGroup: C,
      bodyWidth: D,
      tableBodyStyles: Q,
      emptyBlockStyle: $,
      debouncedUpdateLayout: ue,
      handleFixedMousewheel: x,
      setCurrentRow: a,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: c,
      clearFilter: d,
      toggleAllSelection: v,
      toggleRowExpansion: g,
      clearSort: p,
      doLayout: I,
      sort: f,
      t,
      setDragVisible: w,
      context: o,
      computedSumText: me,
      computedEmptyText: _e,
      tableLayout: ee,
      scrollbarViewStyle: oe,
      tableInnerStyle: le,
      scrollbarStyle: j,
      scrollBarRef: ne,
      scrollTo: A,
      setScrollLeft: U,
      setScrollTop: re
    };
  }
}), U2 = ["data-prefix"], q2 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function G2(e, t, n, o, l, r) {
  const s = q("hColgroup"), a = q("table-header"), i = q("table-body"), u = q("el-scrollbar"), c = q("table-footer"), d = mr("mousewheel");
  return E(), P("div", {
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
    style: we(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (...v) => e.handleMouseLeave && e.handleMouseLeave(...v))
  }, [
    N("div", {
      class: M(e.ns.e("inner-wrapper")),
      style: we(e.tableInnerStyle)
    }, [
      N("div", q2, [
        K(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? We((E(), P("div", {
        key: 0,
        ref: "headerWrapper",
        class: M(e.ns.e("header-wrapper"))
      }, [
        N("table", {
          ref: "tableHeader",
          class: M(e.ns.e("header")),
          style: we(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          Z(s, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          Z(a, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [d, e.handleHeaderFooterMousewheel]
      ]) : G("v-if", !0),
      N("div", {
        ref: "bodyWrapper",
        class: M(e.ns.e("body-wrapper"))
      }, [
        Z(u, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: R(() => [
            N("table", {
              ref: "tableBody",
              class: M(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: we({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              Z(s, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (E(), V(a, {
                key: 0,
                ref: "tableHeaderRef",
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : G("v-if", !0),
              Z(i, {
                context: e.context,
                highlight: e.highlightCurrentRow,
                "row-class-name": e.rowClassName,
                "tooltip-effect": e.tooltipEffect,
                "tooltip-options": e.tooltipOptions,
                "row-style": e.rowStyle,
                store: e.store,
                stripe: e.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"])
            ], 6),
            e.isEmpty ? (E(), P("div", {
              key: 0,
              ref: "emptyBlock",
              style: we(e.emptyBlockStyle),
              class: M(e.ns.e("empty-block"))
            }, [
              N("span", {
                class: M(e.ns.e("empty-text"))
              }, [
                K(e.$slots, "empty", {}, () => [
                  Ke(ie(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : G("v-if", !0),
            e.$slots.append ? (E(), P("div", {
              key: 1,
              ref: "appendWrapper",
              class: M(e.ns.e("append-wrapper"))
            }, [
              K(e.$slots, "append")
            ], 2)) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary ? We((E(), P("div", {
        key: 1,
        ref: "footerWrapper",
        class: M(e.ns.e("footer-wrapper"))
      }, [
        Z(c, {
          border: e.border,
          "default-sort": e.defaultSort,
          store: e.store,
          style: we(e.tableBodyStyles),
          "sum-text": e.computedSumText,
          "summary-method": e.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
      ], 2)), [
        [fn, !e.isEmpty],
        [d, e.handleHeaderFooterMousewheel]
      ]) : G("v-if", !0),
      e.border || e.isGroup ? (E(), P("div", {
        key: 2,
        class: M(e.ns.e("border-left-patch"))
      }, null, 2)) : G("v-if", !0)
    ], 6),
    We(N("div", {
      ref: "resizeProxy",
      class: M(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [fn, e.resizeProxyVisible]
    ])
  ], 46, U2);
}
var Y2 = /* @__PURE__ */ ye(j2, [["render", G2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const X2 = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, Q2 = {
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
}, Z2 = (e) => X2[e] || "", J2 = {
  selection: {
    renderHeader({ store: e, column: t }) {
      function n() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return ae(Yn, {
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
      return ae(Yn, {
        disabled: t.selectable ? !t.selectable.call(null, e, o) : !1,
        size: n.states.tableSize.value,
        onChange: () => {
          n.commit("rowSelectedChanged", e);
        },
        onClick: (l) => l.stopPropagation(),
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
      return typeof o == "number" ? n = t + o : typeof o == "function" && (n = o(t)), ae("div", {}, [n]);
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
      const { ns: o } = t, l = [o.e("expand-icon")];
      return n && l.push(o.em("expand-icon", "expanded")), ae("div", {
        class: l,
        onClick: function(s) {
          s.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          ae(De, null, {
            default: () => [ae(yr)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function eC({
  row: e,
  column: t,
  $index: n
}) {
  var o;
  const l = t.property, r = l && wm(e, l).value;
  return t && t.formatter ? t.formatter(e, t, r, n) : ((o = r == null ? void 0 : r.toString) == null ? void 0 : o.call(r)) || "";
}
function tC({
  row: e,
  treeNode: t,
  store: n
}, o = !1) {
  const { ns: l } = n;
  if (!t)
    return o ? [
      ae("span", {
        class: l.e("placeholder")
      })
    ] : null;
  const r = [], s = function(a) {
    a.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && r.push(ae("span", {
    class: l.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const a = [
      l.e("expand-icon"),
      t.expanded ? l.em("expand-icon", "expanded") : ""
    ];
    let i = yr;
    t.loading && (i = Cr), r.push(ae("div", {
      class: a,
      onClick: s
    }, {
      default: () => [
        ae(De, { class: { [l.is("loading")]: t.loading } }, {
          default: () => [ae(i)]
        })
      ]
    }));
  } else
    r.push(ae("span", {
      class: l.e("placeholder")
    }));
  return r;
}
function As(e, t) {
  return e.reduce((n, o) => (n[o] = o, n), t);
}
function nC(e, t) {
  const n = Ce();
  return {
    registerComplexWatchers: () => {
      const r = ["fixed"], s = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, a = As(r, s);
      Object.keys(a).forEach((i) => {
        const u = s[i];
        En(t, u) && Y(() => t[u], (c) => {
          let d = c;
          u === "width" && i === "realWidth" && (d = Jr(c)), u === "minWidth" && i === "realMinWidth" && (d = Mu(c)), n.columnConfig.value[u] = d, n.columnConfig.value[i] = d;
          const v = u === "fixed";
          e.value.store.scheduleLayout(v);
        });
      });
    },
    registerNormalWatchers: () => {
      const r = [
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
      }, a = As(r, s);
      Object.keys(a).forEach((i) => {
        const u = s[i];
        En(t, u) && Y(() => t[u], (c) => {
          n.columnConfig.value[i] = c;
        });
      });
    }
  };
}
function oC(e, t, n) {
  const o = Ce(), l = k(""), r = k(!1), s = k(), a = k(), i = de("table");
  Nt(() => {
    s.value = e.align ? `is-${e.align}` : null, s.value;
  }), Nt(() => {
    a.value = e.headerAlign ? `is-${e.headerAlign}` : s.value, a.value;
  });
  const u = _(() => {
    let y = o.vnode.vParent || o.parent;
    for (; y && !y.tableId && !y.columnId; )
      y = y.vnode.vParent || y.parent;
    return y;
  }), c = _(() => {
    const { store: y } = o.parent;
    if (!y)
      return !1;
    const { treeData: S } = y.states, T = S.value;
    return T && Object.keys(T).length > 0;
  }), d = k(Jr(e.width)), v = k(Mu(e.minWidth)), g = (y) => (d.value && (y.width = d.value), v.value && (y.minWidth = v.value), !d.value && v.value && (y.width = void 0), y.minWidth || (y.minWidth = 80), y.realWidth = Number(y.width === void 0 ? y.minWidth : y.width), y), p = (y) => {
    const S = y.type, T = J2[S] || {};
    Object.keys(T).forEach((x) => {
      const F = T[x];
      x !== "className" && F !== void 0 && (y[x] = F);
    });
    const $ = Z2(S);
    if ($) {
      const x = `${h(i.namespace)}-${$}`;
      y.className = y.className ? `${y.className} ${x}` : x;
    }
    return y;
  }, f = (y) => {
    Array.isArray(y) ? y.forEach((T) => S(T)) : S(y);
    function S(T) {
      var $;
      (($ = T == null ? void 0 : T.type) == null ? void 0 : $.name) === "ElTableColumn" && (T.vParent = o);
    }
  };
  return {
    columnId: l,
    realAlign: s,
    isSubColumn: r,
    realHeaderAlign: a,
    columnOrTableParent: u,
    setColumnWidth: g,
    setColumnForcedProps: p,
    setColumnRenders: (y) => {
      e.renderHeader ? je("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : y.type !== "selection" && (y.renderHeader = (T) => {
        o.columnConfig.value.label;
        const $ = t.header;
        return $ ? $(T) : y.label;
      });
      let S = y.renderCell;
      return y.type === "expand" ? (y.renderCell = (T) => ae("div", {
        class: "cell"
      }, [S(T)]), n.value.renderExpanded = (T) => t.default ? t.default(T) : t.default) : (S = S || eC, y.renderCell = (T) => {
        let $ = null;
        if (t.default) {
          const Q = t.default(T);
          $ = Q.some((ee) => ee.type !== zs) ? Q : S(T);
        } else
          $ = S(T);
        const { columns: x } = n.value.store.states, F = x.value.findIndex((Q) => Q.type === "default"), D = c.value && T.cellIndex === F, B = tC(T, D), I = {
          class: "cell",
          style: {}
        };
        return y.showOverflowTooltip && (I.class = `${I.class} ${h(i.namespace)}-tooltip`, I.style = {
          width: `${(T.column.realWidth || Number(T.column.width)) - 1}px`
        }), f($), ae("div", I, [B, $]);
      }), y;
    },
    getPropsData: (...y) => y.reduce((S, T) => (Array.isArray(T) && T.forEach(($) => {
      S[$] = e[$];
    }), S), {}),
    getColumnElIndex: (y, S) => Array.prototype.indexOf.call(y, S),
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
var zu = H({
  name: "ElTableColumn",
  components: {
    ElCheckbox: Yn
  },
  props: lC,
  setup(e, { slots: t }) {
    const n = Ce(), o = k({}), l = _(() => {
      let C = n.parent;
      for (; C && !C.tableId; )
        C = C.parent;
      return C;
    }), { registerNormalWatchers: r, registerComplexWatchers: s } = nC(l, e), {
      columnId: a,
      isSubColumn: i,
      realHeaderAlign: u,
      columnOrTableParent: c,
      setColumnWidth: d,
      setColumnForcedProps: v,
      setColumnRenders: g,
      getPropsData: p,
      getColumnElIndex: f,
      realAlign: m,
      updateColumnOrder: b
    } = oC(e, t, l), w = c.value;
    a.value = `${w.tableId || w.columnId}_column_${rC++}`, hr(() => {
      i.value = l.value !== w;
      const C = e.type || "default", y = e.sortable === "" ? !0 : e.sortable, S = Hn(e.showOverflowTooltip) ? w.props.showOverflowTooltip : e.showOverflowTooltip, T = {
        ...Q2[C],
        id: a.value,
        type: C,
        property: e.prop || e.property,
        align: m,
        headerAlign: u,
        showOverflowTooltip: S,
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
      let B = p([
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
      B = r2(T, B), B = s2(g, d, v)(B), o.value = B, r(), s();
    }), Me(() => {
      var C;
      const y = c.value, S = i.value ? y.vnode.el.children : (C = y.refs.hiddenColumns) == null ? void 0 : C.children, T = () => f(S || [], n.vnode.el);
      o.value.getColumnIndex = T, T() > -1 && l.value.store.commit("insertColumn", o.value, i.value ? y.columnConfig.value : null, b);
    }), Rt(() => {
      l.value.store.commit("removeColumn", o.value, i.value ? w.columnConfig.value : null, b);
    }), n.columnId = a.value, n.columnConfig = o;
  },
  render() {
    var e, t, n;
    try {
      const o = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, {
        row: {},
        column: {},
        $index: -1
      }), l = [];
      if (Array.isArray(o))
        for (const s of o)
          ((n = s.type) == null ? void 0 : n.name) === "ElTableColumn" || s.shapeFlag & 2 ? l.push(s) : s.type === $e && Array.isArray(s.children) && s.children.forEach((a) => {
            (a == null ? void 0 : a.patchFlag) !== 1024 && !_t(a == null ? void 0 : a.children) && l.push(a);
          });
      return ae("div", l);
    } catch {
      return ae("div", []);
    }
  }
});
const aC = ut(Y2, {
  TableColumn: zu
});
eo(zu);
/*! Element Plus v2.3.12 */
var Hu = {
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
const sC = H({
  name: "KPage",
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: !1 },
    small: { type: Boolean, default: !1 },
    pagerCount: { type: Number, default: 7 }
  },
  components: { ElConfigProvider: Qi, ElPagination: Zw },
  emits: ["update:modelValue", "update:size", "current-change", "size-change", "change"],
  setup(e, { emit: t }) {
    const n = Hu, o = _(() => {
      const { total: u, size: c, showSize: d } = e;
      return d ? !0 : u > c;
    }), l = _({
      get() {
        return e.modelValue;
      },
      set(u) {
        t("update:modelValue", u);
      }
    }), r = _({
      get: () => e.size,
      set: (u) => t("update:size", u)
    }), s = _(() => {
      const u = ["total", "sizes", "prev", "pager", "next", "jumper"];
      return e.showSize || u.splice(1, 1), u.join(",");
    });
    return {
      locale: n,
      currentPage: l,
      layoutList: s,
      handleSizeChange: (u) => {
        l.value = 1, t("update:size", u), t("size-change", u), t("change", { page: e.size === u ? l.value : 1, size: u });
      },
      handleCurrentChange: (u) => {
        t("current-change", u), t("change", { page: u, size: e.size });
      },
      showPage: o,
      pageSize: r
    };
  }
}), iC = {
  key: 0,
  class: "page-right mt20"
};
function uC(e, t, n, o, l, r) {
  const s = q("el-pagination"), a = q("el-config-provider");
  return e.showPage ? (E(), P("div", iC, [
    Z(a, { locale: e.locale }, {
      default: R(() => [
        Z(s, xe({
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
  ])) : G("", !0);
}
const Nn = /* @__PURE__ */ He(sC, [["render", uC], ["__scopeId", "data-v-30359b33"]]);
Nn.install = function(e) {
  e.component(Nn.name, Nn);
};
const cC = H({
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
    const n = _({
      get: () => e.tableData,
      set: (a) => t("update:tableData", a)
    }), o = _({
      get: () => e.modelValue,
      set: (a) => t("update:modelValue", a)
    }), l = (a) => t("current-change", a), r = ({ column: a, order: i }) => {
      const u = i === "ascending" ? 1 : 0;
      t("sort-change", {
        prop: a == null ? void 0 : a.rawColumnKey,
        order: i,
        sortType: u,
        currentPage: o.value,
        column: a,
        sortColumn: a == null ? void 0 : a.rawColumnKey
      });
    }, s = k(null);
    return {
      currentPage: o,
      tableDataList: n,
      changePage: l,
      sortChange: r,
      instance: s,
      elTable: s
    };
  }
}), dC = { key: 2 };
function fC(e, t, n, o, l, r) {
  const s = q("el-table-column"), a = q("el-table"), i = q("pagination");
  return E(), P($e, null, [
    Z(a, xe({
      data: e.tableDataList,
      style: { width: "100%" },
      class: "mt20",
      "header-cell-style": e.headerCellStyle
    }, e.$attrs, {
      "empty-text": e.emptyText,
      onSortChange: e.sortChange,
      ref: "elTable"
    }), $n({
      default: R(() => [
        (E(!0), P($e, null, ze(e.tableColumn, (u) => (E(), V(s, {
          key: u.prop,
          label: u.label,
          name: u.name,
          width: u.width,
          "min-width": u.minWidth,
          fixed: u.fixed,
          sortable: u.sortable,
          type: u.type,
          "show-overflow-tooltip": u.showOverflowTooltip ?? !0
        }, $n({
          default: R((c) => [
            e.$slots.default ? K(e.$slots, "default", {
              key: 0,
              item: c.row,
              row: c.row,
              index: c.$index
            }) : u.custom && c.$index >= 0 ? K(e.$slots, u.custom, {
              key: 1,
              item: c.row,
              row: c.row,
              index: c.$index
            }) : (E(), P("span", dC, ie(c.row[u.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          u.header ? {
            name: "header",
            fn: R(() => [
              K(e.$slots, u.header)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["label", "name", "width", "min-width", "fixed", "sortable", "type", "show-overflow-tooltip"]))), 128))
      ]),
      _: 2
    }, [
      e.$slots.empty ? {
        name: "empty",
        fn: R(() => [
          K(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "empty-text", "onSortChange"]),
    Z(i, {
      total: e.total,
      size: e.size,
      "show-size": e.showSize,
      modelValue: e.currentPage,
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.currentPage = u),
      onCurrentChange: e.changePage
    }, null, 8, ["total", "size", "show-size", "modelValue", "onCurrentChange"])
  ], 64);
}
const Go = /* @__PURE__ */ He(cC, [["render", fC]]);
Go.install = function(e) {
  e.component(Go.name, Go);
};
const pC = H({
  name: "KVirtualList",
  components: { ElScrollbar: Ol },
  props: {
    height: { type: String, default: "500px" },
    rowStyle: { type: Object, default: () => ({}) },
    rowClassName: { type: [Function, String, Object], default: "" },
    data: { type: Array, default: () => [] }
  },
  emits: ["scroll", "row-click"],
  setup(e, { emit: t }) {
    const n = k(0), o = k(0), l = k(null), r = k(10), s = () => {
      var m, b;
      return ((m = document.querySelector(".table-row")) == null ? void 0 : m.offsetHeight) ?? ((b = document.querySelector(".list-item")) == null ? void 0 : b.offsetHeight) ?? 10;
    }, a = () => {
      const { clientHeight: m = 100 } = l.value.wrapRef || {};
      return Math.ceil(m / s()) + n.value;
    }, i = k(100);
    Me(() => {
      r.value = Number(a()) || 10, i.value = e.data.length * s();
    });
    const u = (m) => Math.floor(m / s()), c = (m) => Math.ceil(m * s()), d = (m) => m >= n.value && m <= r.value, v = _(() => e.data.filter((m, b) => d(b)));
    return Y(() => e.data, (m) => {
      m.length || (n.value = 0, o.value = 0), e.data.forEach((b, w) => {
        b.rowIndex = w;
      }), he(() => {
        i.value = e.data.length * s();
      });
    }), {
      startIndex: n,
      endIndex: r,
      startOffset: o,
      viewport: l,
      onScroll: (m) => {
        const { scrollTop: b, clientHeight: w } = l.value.wrapRef;
        n.value = u(b), o.value = c(n.value), r.value = a();
        const C = Math.abs(i.value - w - b);
        t("scroll", { distance: C, ...m });
      },
      showViewRanges: d,
      containHeight: i,
      listRanges: v,
      rowClick: (m, b) => {
        t("row-click", m, b);
      },
      rowClassHandle: (m, b) => typeof e.rowClassName == "function" ? e.rowClassName({ row: m, rowIndex: b }) : e.rowClassName
    };
  }
}), vC = {
  class: "virtual-list",
  "data-testid": "virtual-list"
}, hC = ["onClick"];
function gC(e, t, n, o, l, r) {
  const s = q("el-scrollbar");
  return E(), V(s, xe({
    height: e.height,
    ref: "viewport"
  }, e.$attrs, { onScroll: e.onScroll }), {
    default: R(() => [
      N("div", vC, [
        N("div", {
          class: "list-contain",
          style: we({ height: `${e.containHeight}px` })
        }, null, 4),
        N("div", {
          class: "list-content",
          style: we({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          (E(!0), P($e, null, ze(e.listRanges, (a, i) => (E(), P("div", {
            key: i,
            class: M(["list-item", e.rowClassHandle(a, a.rowIndex)]),
            style: we(e.rowStyle),
            onClick: (u) => e.rowClick(a, a.rowIndex)
          }, [
            K(e.$slots, "default", {
              row: a,
              index: a.rowIndex
            }, () => [
              Ke(ie(a.name), 1)
            ], !0)
          ], 14, hC))), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["height", "onScroll"]);
}
const mo = /* @__PURE__ */ He(pC, [["render", gC], ["__scopeId", "data-v-e53aecaa"]]);
mo.install = function(e) {
  e.component(mo.name, mo);
};
const Du = {
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
function Vu(e) {
  const t = k(null), n = (s) => {
    var v, g, p, f;
    let a = {};
    const {
      align: i,
      width: u,
      fixed: c,
      minWidth: d
    } = s;
    if (i && (a["text-center"] = `${i}`), d && (a["min-width"] = `${d}`), u && (a = {
      ...a,
      width: `${u}`,
      flex: "inherit",
      "flex-shrink": 0
    }), c) {
      const m = e.tableColumn.findIndex((w) => w.prop === s.prop), b = e.tableColumn.length;
      if (a = {
        ...a,
        position: "sticky",
        "z-index": 50
      }, c === "left") {
        const w = (v = e.tableColumn.filter((S) => S.fixed === "left")) == null ? void 0 : v.length;
        let C = 0;
        m > 0 && m < b - 1 && w > 1 && (C = (g = t.value) == null ? void 0 : g.at(m - 1).clientWidth), a.left = `${C}px`;
        let y = 0;
        e.tableColumn.forEach((S, T) => {
          S.fixed === "left" && (y = T);
        }), y === m && (a["box-shadow"] = "3px 0px 4px #b0a8a836");
      } else {
        const w = (p = e.tableColumn.filter((S) => S.fixed && S.fixed !== "left")) == null ? void 0 : p.length;
        let C = 0;
        m < b - 1 && w > 1 && (C = (f = t.value) == null ? void 0 : f.at(m + 1).clientWidth), e.tableColumn.findIndex((S) => S.fixed && S.fixed !== "left") === m && (a["box-shadow"] = "-3px 0 4px #b0a8a836"), a.right = `${C}px`;
      }
    }
    return e.isFooter && (a.color = "#606266"), a;
  }, o = k(null), l = (s) => {
    const a = e.tableData.reduce((i, u) => i + Number(u[s.prop]), 0);
    return Number.isNaN(a) ? "N/A" : a.toFixed(2);
  };
  return {
    headerColmn: t,
    headerClass: n,
    tableHeader: o,
    getSummaries: (s, a) => e.summaryMethod ? e.summaryMethod({ row: s, index: a }) : a ? l(s) : e.sumText
  };
}
const mC = { class: "flex table-border-bottom header-content" }, bC = {
  key: 0,
  class: "table-header-sort flex-column flex-center"
}, yC = { class: "sort-wrapper" }, wC = ["onClick"], CC = ["onClick"], SC = {
  __name: "headerFooter",
  props: {
    ...Du,
    isFooter: { type: Boolean, default: !1 }
  },
  emits: ["sort-change"],
  setup(e, { expose: t, emit: n }) {
    const o = e, { headerClass: l, tableHeader: r } = Vu(o), s = k(null), a = k({}), i = (c, d) => {
      a.value = d, s.value = s.value === c ? null : c, n("sort-change", { column: d, sortType: s.value });
    };
    return t({
      setScrollLeft: (c) => {
        r.value.scrollLeft = `${c}`;
      }
    }), (c, d) => (E(), P("div", {
      class: "table-header overflow",
      ref_key: "tableHeader",
      ref: r
    }, [
      N("div", mC, [
        (E(!0), P($e, null, ze(c.tableColumn, (v, g) => (E(), P("div", {
          key: g,
          class: "header-column cell flex-align-center",
          ref_for: !0,
          ref: "headerColmn",
          style: we([c.headerCellStyle, h(l)(v)])
        }, [
          K(c.$slots, "default", {
            row: v,
            index: g
          }, () => [
            Ke(ie(v.label), 1)
          ], !0),
          v.sortable && !e.isFooter ? (E(), P("div", bC, [
            N("span", yC, [
              N("i", {
                class: M(["sort-caret ascending", { "bottom-caret": s.value === "ascending" && a.value.prop == v.prop }]),
                onClick: (p) => i("ascending", v)
              }, null, 10, wC),
              N("i", {
                class: M(["sort-caret descending", { "top-caret": s.value === "descending" && a.value.prop == v.prop }]),
                onClick: (p) => i("descending", v)
              }, null, 10, CC)
            ])
          ])) : G("", !0)
        ], 4))), 128))
      ])
    ], 512));
  }
}, _C = /* @__PURE__ */ He(SC, [["__scopeId", "data-v-2fd08206"]]);
const $C = H({
  name: "KTableV2",
  components: { virtualList: mo, headerFooter: _C },
  props: Du,
  emits: ["sort-change"],
  setup(e, { emit: t }) {
    const n = _(() => e.tableColumn.map((v, g) => ({ ...v, keyId: g }))), {
      headerColmn: o,
      headerClass: l,
      tableHeader: r,
      getSummaries: s
    } = Vu(e), a = k(null), i = ({ scrollLeft: v }) => {
      var g, p;
      (g = r.value) == null || g.setScrollLeft(v), (p = a.value) == null || p.setScrollLeft(v);
    }, u = ({ column: v, sortType: g }) => t("sort-change", { column: v, sortType: g }), c = k(null), d = (v) => {
      var g;
      return (g = c.value) == null ? void 0 : g.viewport.setScrollTop(v);
    };
    return {
      ...Zn(e),
      columnList: n,
      headerClass: l,
      tableHeader: r,
      tableBottom: a,
      scrollHandle: i,
      headerColmn: o,
      clickSortCaret: u,
      virtualRef: c,
      setScrollTop: d,
      getSummaries: s
    };
  }
}), EC = { class: "table-v2 el-table flex-column" }, TC = { class: "flex table-body" };
function kC(e, t, n, o, l, r) {
  const s = q("headerFooter"), a = q("virtualList");
  return E(), P("div", EC, [
    Z(s, {
      ref: "tableHeader",
      "table-column": e.tableColumn,
      onSortChange: e.clickSortCaret
    }, {
      default: R(({ row: i, index: u }) => [
        K(e.$slots, i == null ? void 0 : i.header, {
          row: i,
          index: u
        }, () => [
          Ke(ie(i.label), 1)
        ], !0)
      ]),
      _: 3
    }, 8, ["table-column", "onSortChange"]),
    e.tableData.length ? (E(), V(a, xe({
      key: 0,
      data: e.tableData,
      always: "",
      ref: "virtualRef",
      "row-class-name": e.rowClassName
    }, e.$attrs, {
      height: e.height,
      onScroll: e.scrollHandle
    }), {
      default: R(({ row: i, index: u }) => [
        K(e.$slots, "content", {}, () => [
          N("div", TC, [
            (E(!0), P($e, null, ze(e.columnList, (c) => (E(), P("div", {
              key: c.keyId,
              class: M(["cell table-row table-border-bottom flex-align-center", { "fixed-cell": c.fixed }]),
              ref_for: !0,
              ref: "bodyCell",
              style: we(e.headerClass(c))
            }, [
              N("div", {
                class: M({ "text-overflow": c.showOverflowTooltip ?? !0 })
              }, [
                K(e.$slots, (c == null ? void 0 : c.custom) ?? "default", {
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
    }, 16, ["data", "row-class-name", "height", "onScroll"])) : (E(), P("div", {
      key: 1,
      class: "flex-center pt20 pb20",
      style: we({ height: e.height })
    }, [
      K(e.$slots, "empty", {}, () => [
        Ke(ie(e.emptyText), 1)
      ], !0)
    ], 4)),
    K(e.$slots, "footer", {}, () => [
      e.showSummary || e.$slots.footer ? (E(), V(s, {
        key: 0,
        ref: "tableBottom",
        "table-column": e.tableColumn,
        "is-footer": ""
      }, {
        default: R(({ row: i, index: u }) => [
          Ke(ie(e.getSummaries(i, u)), 1)
        ]),
        _: 1
      }, 8, ["table-column"])) : G("", !0)
    ], !0)
  ]);
}
const Yo = /* @__PURE__ */ He($C, [["render", kC], ["__scopeId", "data-v-393e4622"]]);
Yo.install = function(e) {
  e.component(Yo.name, Yo);
};
const OC = {
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
      color: "#909399"
    })
  }
}, xC = { key: 2 }, PC = { class: "flex-between" }, AC = { class: "flex1 mr20 mt20" }, bo = /* @__PURE__ */ Object.assign({
  name: "KBatchTable"
}, {
  __name: "main",
  props: OC,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { expose: t, emit: n }) {
    const o = e, l = k(null), r = k([]), s = (w) => {
      w ? w.forEach((C) => {
        const y = o.tableData.find((S) => S[o.keyId] === C[o.keyId]);
        l.value.toggleRowSelection(y ?? C);
      }) : l.value.clearSelection();
    }, a = (w, C = !0) => {
      C ? r.value.push(w) : r.value = r.value.filter((y) => y[o.keyId] !== (w == null ? void 0 : w[o.keyId]));
    }, i = (w) => w[o.checkKey] ?? !w[o.checkKey], u = (w, C) => {
      const y = w.some((S) => S[o.keyId] === (C == null ? void 0 : C[o.keyId]));
      a(C, y);
    }, c = (w) => v(w), d = (w) => {
      if (!i(w))
        return;
      s([w]);
      const C = r.value.some((y) => y[o.keyId] === w[o.keyId]);
      a(w, !C), n("row-click", w);
    };
    Y(() => r.value, (w, C) => {
      C && n("update:modelValue", w);
    }, { immediate: !0, deep: !0 });
    const v = (w = []) => {
      s(), w.forEach((C) => {
        const y = o.tableData.find((S) => S[o.keyId] === C[o.keyId]);
        l.value.toggleRowSelection(y ?? C, !!i(C));
      }), r.value = w;
    }, g = () => v();
    Y(() => o.modelValue, (w, C) => {
      !w.length && C.length && v();
    });
    const p = (w) => w[o.keyId], f = () => {
      o.selectList.length && o.selectList.forEach((w) => {
        o.tableData.forEach((C) => {
          C[o.checkKey] = C[o.checkKey] ?? 1, p(w) === p(C) && (C[o.checkKey] = 0);
        });
      });
    };
    Y(() => o.tableData, (w) => {
      he(() => {
        w.length && f(), w.length && v(o.modelValue);
      });
    }, { immediate: !0 });
    const m = _({
      get: () => o.page,
      set: (w) => n("update:page", w)
    }), b = (w) => {
      n("current-change", w);
    };
    return t({
      toggleSelection: v,
      handleRowClick: d,
      clear: g
    }), (w, C) => {
      const y = q("el-table-column");
      return E(), P($e, null, [
        Z(h(aC), xe({
          ref_key: "multipleTableRef",
          ref: l,
          "empty-text": "暂无数据"
        }, w.$attrs, {
          data: w.tableData,
          "header-cell-style": w.headerCellStyle,
          onSelect: u,
          onSelectAll: c,
          onRowClick: d
        }), $n({
          default: R(() => [
            Z(y, {
              type: "selection",
              width: "55",
              selectable: i
            }),
            (E(!0), P($e, null, ze(w.tableColumn, (S) => (E(), V(y, {
              label: S.label,
              key: S.prop,
              width: S.width,
              fixed: S.fixed,
              "min-width": S.minWidth,
              "show-overflow-tooltip": S.showOverflowTooltip ?? !0
            }, $n({
              default: R((T) => [
                w.$slots.default ? K(w.$slots, "default", {
                  key: 0,
                  item: T.row,
                  row: T.row,
                  column: S,
                  index: T.$index
                }) : G("", !0),
                S.custom && T.$index >= 0 ? K(w.$slots, S.custom, {
                  key: 1,
                  item: T.row,
                  column: S,
                  row: T.row,
                  index: T.$index
                }) : (E(), P("span", xC, ie(T.row[S.prop] ?? "-"), 1))
              ]),
              _: 2
            }, [
              S.header ? {
                name: "header",
                fn: R(() => [
                  K(w.$slots, "header", { column: S }),
                  K(w.$slots, S.header, { column: S })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["label", "width", "fixed", "min-width", "show-overflow-tooltip"]))), 128))
          ]),
          _: 2
        }, [
          w.$slots.empty ? {
            name: "empty",
            fn: R(() => [
              K(w.$slots, "empty")
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["data", "header-cell-style"]),
        N("div", PC, [
          N("div", AC, [
            w.$slots.footer ? K(w.$slots, "footer", { key: 0 }) : G("", !0)
          ]),
          Z(h(Nn), xe({
            total: w.total,
            "show-size": w.showSize
          }, w.$attrs, {
            modelValue: m.value,
            "onUpdate:modelValue": C[0] || (C[0] = (S) => m.value = S),
            onCurrentChange: b
          }), null, 16, ["total", "show-size", "modelValue"])
        ])
      ], 64);
    };
  }
});
bo.install = function(e) {
  e.component(bo.name, bo);
};
const MC = H({
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
    const n = _({
      get: () => e.modelValue,
      set: (a) => t("update:modelValue", a)
    }), o = _(() => e.class ? e.class : e.customClass ? e.customClass : e.showFooter ? "custom-dialog" : "custom-dialog no-footer");
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
}), IC = /* @__PURE__ */ N("span", null, "这是一段信息", -1), LC = { class: "dialog-footer" };
function NC(e, t, n, o, l, r) {
  const s = q("el-button"), a = q("el-dialog");
  return E(), V(a, xe({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": t[1] || (t[1] = (i) => e.dialogVisible = i),
    class: e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), $n({
    default: R(() => [
      K(e.$slots, "default", {}, () => [
        IC
      ])
    ]),
    _: 2
  }, [
    e.showFooter ? {
      name: "footer",
      fn: R(() => [
        K(e.$slots, "footer", {}, () => [
          N("span", LC, [
            Z(s, {
              size: "large",
              onClick: t[0] || (t[0] = (i) => e.dialogVisible = !1)
            }, {
              default: R(() => [
                Ke("取 消")
              ]),
              _: 1
            }),
            Z(s, {
              size: "large",
              type: "primary",
              disabled: e.confirmDisabled,
              onClick: e.confirmHandler
            }, {
              default: R(() => [
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
const Xo = /* @__PURE__ */ He(MC, [["render", NC]]);
Xo.install = function(e) {
  e.component(Xo.name, Xo);
};
const RC = H({
  name: "KBreadcrumb",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const n = Ce().appContext.config.globalProperties.$router;
    return { clickHandle: (l, r) => {
      if (l.url) {
        window.location.href = l.url;
        return;
      }
      const s = r - e.list.length + 1;
      l.path ? n == null || n.push(l.path) : s && (n == null || n.go(s));
    } };
  }
}), FC = { class: "crumb-header flex-between" }, BC = { class: "crumb-contain" }, zC = ["onClick"];
function HC(e, t, n, o, l, r) {
  const s = q("el-space");
  return E(), P("div", FC, [
    N("div", BC, [
      Z(s, { spacer: "/" }, {
        default: R(() => [
          (E(!0), P($e, null, ze(e.list, (a, i) => (E(), P("span", {
            key: i,
            class: M({ "crumb-item": i !== e.list.length - 1 }),
            onClick: (u) => e.clickHandle(a, i)
          }, ie(a.title), 11, zC))), 128))
        ]),
        _: 1
      })
    ]),
    K(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Qo = /* @__PURE__ */ He(RC, [["render", HC], ["__scopeId", "data-v-b570be29"]]);
Qo.install = function(e) {
  e.component(Qo.name, Qo);
};
const DC = H({
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
    const n = Ce(), o = _(() => n.appContext.config.globalProperties.$route), l = n.appContext.config.globalProperties.$router, r = _(() => {
      var u, c;
      return ((u = o.value) == null ? void 0 : u.params.type) || ((c = o.value) == null ? void 0 : c.name);
    }), s = k(r.value);
    Nt(() => {
      s.value = e.modelValue || r.value, t("update:modelValue", s.value);
    });
    const a = _(() => o.value.query);
    return { activeName: s, handleClick: (u) => {
      if (e.isRouter) {
        const c = { path: `${u.paneName}`, query: a.value };
        e.replace ? l.replace(c) : l.push(c);
      }
      t("tab-click", u.paneName), t("change", u.paneName), t("update:modelValue", u.paneName);
    } };
  }
}), VC = { class: "tabs-right ml10" };
function KC(e, t, n, o, l, r) {
  const s = q("el-tab-pane"), a = q("el-tabs");
  return E(), P("div", {
    class: M(["k-tabs", { "style-card": !e.type, "style-padding": e.isPadding && !e.type }])
  }, [
    Z(a, xe({
      class: "flex-tabs",
      type: e.type
    }, e.$attrs, {
      modelValue: e.activeName,
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.activeName = i),
      onTabClick: e.handleClick
    }), {
      default: R(() => [
        (E(!0), P($e, null, ze(e.tabsList, (i) => (E(), V(s, {
          label: i.label,
          name: i.name,
          key: i.name
        }, null, 8, ["label", "name"]))), 128))
      ]),
      _: 1
    }, 16, ["type", "modelValue", "onTabClick"]),
    N("div", VC, [
      K(e.$slots, "default")
    ])
  ], 2);
}
const Zo = /* @__PURE__ */ He(DC, [["render", KC]]);
Zo.install = function(e) {
  e.component(Zo.name, Zo);
};
const oa = H({
  name: "KPicker",
  components: {
    batchTable: bo,
    Delete: yd,
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
    const n = _({
      get: () => e.modelValue,
      set: (v) => t("update:modelValue", v)
    });
    Nt(() => {
      e.showCount && n.value.forEach((v) => {
        v.num = v.num ?? 1;
      });
    });
    const o = k(null), l = () => o.value.toggleSelection(), r = (v) => o.value.handleRowClick(v), s = k(1), a = () => {
      s.value = 1, l();
    }, i = (v) => v[e.keyName], u = (v) => v[e.keyId], c = _(() => e.rightWidth), d = _(() => e.height);
    return {
      multipleSelection: n,
      batchTableRef: o,
      currentPage: s,
      emptyHandler: l,
      resetData: a,
      deleteHandler: r,
      getName: i,
      getId: u,
      rightwidth: c,
      autoheight: d
    };
  }
}), Ms = () => {
  br((e) => ({
    "5d7f46b5": e.autoheight,
    "0031176e": e.rightwidth
  }));
}, Is = oa.setup;
oa.setup = Is ? (e, t) => (Ms(), Is(e, t)) : Ms;
const WC = { class: "k-picker flex-column" }, jC = { class: "col-left height-auto flex-column" }, UC = { class: "col-right flex-column height-auto" }, qC = { class: "selete-header flex-between" }, GC = { class: "selete-content flex1" }, YC = { class: "flex flex1 mr20 overflow" }, XC = { class: "text-overflow" };
function QC(e, t, n, o, l, r) {
  const s = q("batchTable"), a = q("el-col"), i = q("delete"), u = q("el-icon"), c = q("el-button"), d = q("el-tooltip"), v = q("k-input-number"), g = q("el-scrollbar"), p = q("el-row");
  return E(), P("div", WC, [
    K(e.$slots, "top", {}, void 0, !0),
    Z(p, {
      gutter: 10,
      class: M(["height-auto", { "custom-right": e.rightWidth }])
    }, {
      default: R(() => [
        Z(a, {
          span: 15,
          class: "height-auto flex1"
        }, {
          default: R(() => [
            N("div", jC, [
              Z(s, {
                ref: "batchTableRef",
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
                header: R(({ column: f }) => [
                  K(e.$slots, f.header, { column: f }, void 0, !0)
                ]),
                default: R(({ row: f, column: m, index: b }) => [
                  m.custom && b >= 0 ? K(e.$slots, m.custom, {
                    key: 0,
                    row: f,
                    index: b
                  }, void 0, !0) : G("", !0)
                ]),
                _: 3
              }, 8, ["height", "table-data", "table-column", "select-list", "key-id", "modelValue", "page", "scrollbar-always-on"])
            ])
          ]),
          _: 3
        }),
        Z(a, {
          span: 9,
          class: "height-auto flex-column"
        }, {
          default: R(() => [
            N("div", UC, [
              K(e.$slots, "right", {}, () => [
                N("div", qC, [
                  K(e.$slots, "right-header", {}, () => [
                    N("span", null, [
                      Ke("已选择"),
                      N("span", null, "(" + ie(e.multipleSelection.length) + ")", 1)
                    ]),
                    Z(c, {
                      type: "primary",
                      text: "",
                      disabled: !e.multipleSelection.length,
                      onClick: e.emptyHandler
                    }, {
                      default: R(() => [
                        Z(u, null, {
                          default: R(() => [
                            Z(i)
                          ]),
                          _: 1
                        }),
                        Ke(" 清空 ")
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"])
                  ], !0)
                ]),
                N("div", GC, [
                  Z(g, { always: "" }, {
                    default: R(() => [
                      (E(!0), P($e, null, ze(e.multipleSelection, (f) => (E(), P("div", {
                        class: M(["flex-between pl10 pr10", { mt10: e.showCount }]),
                        key: e.getId(f)
                      }, [
                        N("div", YC, [
                          Z(d, {
                            effect: "dark",
                            content: e.getName(f),
                            placement: "top"
                          }, {
                            default: R(() => [
                              N("span", XC, ie(e.getName(f)), 1)
                            ]),
                            _: 2
                          }, 1032, ["content"])
                        ]),
                        e.showCount ? (E(), V(v, {
                          key: 0,
                          modelValue: f.num,
                          "onUpdate:modelValue": (m) => f.num = m,
                          min: 1,
                          class: "width-120 flex-shrink mr10"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : G("", !0),
                        Z(c, {
                          type: "primary",
                          text: "",
                          onClick: (m) => e.deleteHandler(f)
                        }, {
                          default: R(() => [
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
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["class"]),
    K(e.$slots, "footer", {}, void 0, !0)
  ]);
}
const Jo = /* @__PURE__ */ He(oa, [["render", QC], ["__scopeId", "data-v-ba9c4774"]]);
Jo.install = function(e) {
  e.component(Jo.name, Jo);
};
const ZC = H({
  name: "KTooltip",
  props: {
    placement: { type: String, default: "top" },
    showIcon: { type: Boolean, default: !1 },
    overflow: { type: Boolean, default: !1 }
  },
  components: { Warning: af }
});
function JC(e, t, n, o, l, r) {
  const s = q("warning"), a = q("el-icon"), i = q("el-tooltip");
  return E(), P("div", {
    class: M(["flex flex1", { "text-overflow": e.overflow }])
  }, [
    Z(i, xe(e.$attrs, { placement: e.placement }), {
      content: R(() => [
        K(e.$slots, "content", {}, void 0, !0)
      ]),
      default: R(() => [
        N("div", {
          class: M(["flex-center", { "text-overflow": e.overflow }])
        }, [
          K(e.$slots, "default", {}, void 0, !0),
          e.showIcon ? (E(), V(a, {
            key: 0,
            class: "ml5"
          }, {
            default: R(() => [
              K(e.$slots, "icon", {}, () => [
                Z(s)
              ], !0)
            ]),
            _: 3
          })) : G("", !0)
        ], 2)
      ]),
      _: 3
    }, 16, ["placement"])
  ], 2);
}
const el = /* @__PURE__ */ He(ZC, [["render", JC], ["__scopeId", "data-v-d468c200"]]);
el.install = function(e) {
  e.component(el.name, el);
};
const eS = {
  __name: "main",
  setup(e) {
    return (t, n) => (E(), V(h(Qi), { locale: h(Hu) }, {
      default: R(() => [
        K(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale"]));
  }
}, Ku = {
  __name: "datePicker",
  props: {
    type: { type: String, default: "daterange" },
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = _(() => n.type === "datetimerange" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"), l = (c) => {
      const d = /* @__PURE__ */ new Date(), v = /* @__PURE__ */ new Date();
      return d.setTime(d.getTime() - 3600 * 1e3 * 24 * c), d.setHours(0, 0, 0, 0), v.setHours(23, 59, 59, 999), n.type === "date" ? d : [d, v];
    }, r = [
      {
        text: "最近一周",
        value: () => l(7)
      },
      {
        text: "最近一个月",
        value: () => l(30)
      },
      {
        text: "最近三个月",
        value: () => l(90)
      }
    ], s = [new Date(2e3, 1, 1, 0, 0, 0), new Date(2e3, 2, 1, 23, 59, 59)], a = _({
      get: () => n.modelValue,
      set: (c) => t("update:modelValue", c)
    }), i = (c) => c.getTime() > Date.now(), u = (c) => t("change", c);
    return (c, d) => {
      const v = q("el-date-picker");
      return E(), V(v, xe({
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (g) => a.value = g),
        type: e.type,
        "unlink-panels": "",
        "range-separator": "至",
        "start-placeholder": "开始日期",
        "end-placeholder": "结束日期",
        shortcuts: r,
        format: o.value,
        "value-format": "YYYY-MM-DD HH:mm:ss",
        "disabled-date": i,
        "default-time": s,
        editable: !1
      }, c.$attrs, { onChange: u }), null, 16, ["modelValue", "type", "format"]);
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
    const n = e, o = k(0), l = k([
      { value: 0, label: "日" },
      { value: 1, label: "周" },
      { value: 2, label: "月" },
      { value: 3, label: "年" }
    ]), r = _({
      get: () => n.modelValue,
      set: (g) => t("update:modelValue", g)
    }), s = (g) => g.getTime() > Date.now(), a = _(() => ({
      0: "YYYY-MM-DD",
      1: "YYYY 第 ww 周",
      2: "YYYY-MM",
      3: "YYYY"
    })[o.value]), i = _(() => ({
      0: n.daterange ? "daterange" : "date",
      1: "week",
      2: "month",
      3: "year"
    })[o.value]), u = _(() => {
      const { label: g } = l.value.filter((p) => p.value === o.value)[0];
      return `选择${g}`;
    }), c = k("");
    Nt(() => {
      if (Array.isArray(r.value)) {
        const [g, p] = r.value;
        c.value = [g, p];
      }
    });
    const d = (g) => {
      if (g) {
        if (Array.isArray(r.value)) {
          const [p] = r.value;
          r.value = p;
        }
      } else
        n.daterange && (r.value = c.value);
      v();
    }, v = () => {
      t("change", { type: o.value, time: r.value });
    };
    return (g, p) => {
      const f = q("el-option"), m = q("el-select"), b = q("el-date-picker");
      return E(), P("div", tS, [
        Z(m, {
          modelValue: o.value,
          "onUpdate:modelValue": p[0] || (p[0] = (w) => o.value = w),
          class: "width-100 mr10",
          onChange: d
        }, {
          default: R(() => [
            (E(!0), P($e, null, ze(l.value, (w) => (E(), V(f, {
              key: w.value,
              label: w.label,
              value: w.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        N("div", null, [
          e.daterange && !o.value ? (E(), V(Ku, xe({
            key: 0,
            modelValue: r.value,
            "onUpdate:modelValue": p[1] || (p[1] = (w) => r.value = w)
          }, g.$props, { onChange: v }), null, 16, ["modelValue"])) : (E(), V(b, {
            key: 1,
            modelValue: r.value,
            "onUpdate:modelValue": p[2] || (p[2] = (w) => r.value = w),
            type: i.value,
            format: a.value,
            "value-format": "YYYY-MM-DD HH:mm:ss",
            placeholder: u.value,
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
}, oS = H({
  name: "KDatePicker",
  props: {
    selectType: { type: Boolean, default: !1 }
    // 是否选择模式（年月日）
    // daterange: { type: Boolean, default: false }, // 是否选择模式下 是否日期范围
  },
  components: { configProvider: eS, selectType: nS, datePicker: Ku },
  setup() {
  }
});
function lS(e, t, n, o, l, r) {
  const s = q("selectType"), a = q("datePicker"), i = q("config-provider");
  return E(), V(i, null, {
    default: R(() => [
      e.selectType ? (E(), V(s, aa(xe({ key: 0 }, e.$attrs)), null, 16)) : (E(), V(a, aa(xe({ key: 1 }, e.$attrs)), null, 16))
    ]),
    _: 1
  });
}
const tl = /* @__PURE__ */ He(oS, [["render", lS]]);
tl.install = function(e) {
  e.component(tl.name, tl);
};
const la = H({
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
    ], o = _(() => (e.decimalPoint && n.push({ name: "." }), n)), l = _({
      get: () => e.modelValue,
      set: (v) => t("update:modelValue", v)
    }), r = () => {
      he(() => t("change", l.value));
    }, s = (v) => {
      if (e.maxlength && l.value.length >= Number(e.maxlength))
        return;
      const g = l.value.indexOf("."), p = l.value.split(".");
      p.length === 2 && (v === "." || p[1].length >= e.precision) || (l.value = `${g === 0 ? 0 : ""}${l.value}${v}`, !e.startZero && l.value.slice(0, 1) === "0" && (l.value = l.value.slice(1) + v), r());
    }, a = (v) => {
      v === "delete" ? l.value = l.value.slice(0, l.value.length - 1) : v === "clear" && (l.value = "", t("clear")), v === "confirm" ? t("confirm") : r();
    }, i = ({ key: v, name: g }) => {
      v ? a(v) : s(g);
    }, u = _(() => `${Number(4 * e.width + 20)}px`), c = _(() => `${e.width}px`), d = _(() => e.decimalPoint ? 3 : 4);
    return {
      keyboardList: o,
      clickHandleBtn: i,
      clickBtn: s,
      totalwidth: u,
      gridwidth: c,
      numberVal: l,
      zerogridend: d
    };
  }
}), Ls = () => {
  br((e) => ({
    "5f76155e": e.totalwidth,
    af867fde: e.gridwidth,
    c0d11484: e.zerogridend
  }));
}, Ns = la.setup;
la.setup = Ns ? (e, t) => (Ls(), Ns(e, t)) : Ls;
const rS = { class: "number-keyboard mt10" }, aS = { class: "number-ul" };
function sS(e, t, n, o, l, r) {
  const s = q("el-button");
  return E(), P("div", rS, [
    N("ul", aS, [
      (E(!0), P($e, null, ze(e.keyboardList, (a, i) => (E(), P("li", {
        key: i,
        class: M(a.class)
      }, [
        Z(s, {
          type: a.type,
          color: e.color,
          onClick: (u) => e.clickHandleBtn(a)
        }, {
          default: R(() => [
            Ke(ie(a.name), 1)
          ]),
          _: 2
        }, 1032, ["type", "color", "onClick"])
      ], 2))), 128))
    ])
  ]);
}
const nl = /* @__PURE__ */ He(la, [["render", sS], ["__scopeId", "data-v-2e1be318"]]);
nl.install = function(e) {
  e.component(nl.name, nl);
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
    const n = _({
      get: () => e.modelValue,
      set: (a) => t("update:modelValue", a)
    }), o = (a) => e.decimals ? Number(a).toFixed(e.decimals) : a, l = k(null), r = (a = !0) => {
      const i = l.value;
      if (!i)
        return;
      const u = +i.innerText, c = +n.value / 200, d = a && u < Number(n.value) || !a && u > Number(n.value);
      a && u > e.end || u < e.start || (d ? s(i, a ? u + c : u - c, a) : i.interText = o(n.value));
    }, s = (a, i, u = !0) => {
      const c = i < e.start ? e.start : `${e.decimals ? i : Math.floor(i)}`, d = i > e.end ? e.end : `${e.decimals ? i : Math.ceil(i)}`;
      a.innerText = o(u ? d : c);
      const v = setTimeout(() => {
        clearTimeout(v), u ? r() : r(!1);
      }, 5);
    };
    return Me(() => {
      l.value && e.autoinit && r();
    }), gr(() => {
      if (e.autoinit) {
        const a = +l.value.innerText;
        r(a < Number(n.value));
      }
    }), { textValue: n, spanText: l, setDeimals: o };
  }
}), uS = { class: "auto-counter" }, cS = { class: "mr5" }, dS = { class: "ml5" };
function fS(e, t, n, o, l, r) {
  return E(), P("div", uS, [
    N("span", cS, ie(e.prefix), 1),
    N("span", {
      class: "span-text",
      ref: "spanText"
    }, ie(e.autoinit ? e.setDeimals(e.start) : e.setDeimals(e.textValue)), 513),
    N("span", dS, ie(e.suffix), 1)
  ]);
}
const ol = /* @__PURE__ */ He(iS, [["render", fS]]);
ol.install = function(e) {
  e.component(ol.name, ol);
};
const pS = H({
  name: "KCollapseButton",
  components: { ElIcon: De, CaretLeft: Ac, CaretRight: Fc },
  props: {
    style: { type: Object, default: () => ({}) },
    position: { type: String, default: "right" }
  },
  emits: ["click"],
  setup(e, { emit: t, slots: n }) {
    const o = k(!1), l = k(null);
    Me(() => {
      const { parentNode: a } = l.value;
      a.style.position = "relative", a.style.overflow = "initial";
    });
    const r = _(() => {
      const { clientWidth: a, clientHeight: i } = l.value || {}, {
        top: u,
        right: c,
        width: d,
        height: v,
        left: g,
        bottom: p
      } = e.style, f = {
        right: {
          top: u ?? "50%",
          right: c ?? `-${a}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: u ? "0px" : `-${Math.ceil(i / 2)}px`
        },
        left: {
          top: u ?? "50%",
          left: g ?? `-${a}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: u ? "0px" : `-${Math.ceil(i / 2)}px`,
          transform: n != null && n.default ? "" : "rotate(180deg)"
        },
        top: {
          left: g ?? "50%",
          marginLeft: g ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(a / 2)}px` : "0px",
          top: u ?? (n == null ? void 0 : n.default) ? `-${i}px` : `-${Math.ceil(i / 2 + a / 2)}px`,
          borderRadius: n != null && n.default ? "5px 5px 0 0" : "0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(-90deg)"
        },
        bottom: {
          left: g ?? "50%",
          bottom: p ?? (n == null ? void 0 : n.default) ? `-${i}px` : `-${Math.ceil(i / 2 + a / 2)}px`,
          marginLeft: g ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(a / 2)}px` : "0px",
          borderRadius: n != null && n.default ? "0 0 5px 5px" : " 0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(90deg)"
        }
      };
      return {
        width: d ?? (n == null ? void 0 : n.default) ? "" : "10px",
        height: v ?? (n == null ? void 0 : n.default) ? "" : "68px",
        ...f[e.position]
      };
    });
    return {
      isCollapse: o,
      collapse: l,
      clickHandle: () => {
        o.value = !o.value, t("click");
      },
      collapseStyle: r
    };
  }
});
function vS(e, t, n, o, l, r) {
  const s = q("CaretRight"), a = q("CaretLeft"), i = q("el-icon");
  return E(), P("div", {
    class: "collapse-button flex-center pointer",
    style: we(e.collapseStyle),
    ref: "collapse",
    onClick: t[0] || (t[0] = (...u) => e.clickHandle && e.clickHandle(...u))
  }, [
    K(e.$slots, "default", {}, () => [
      Z(i, {
        size: 18,
        color: "#999999"
      }, {
        default: R(() => [
          e.isCollapse ? (E(), V(s, { key: 0 })) : (E(), V(a, { key: 1 }))
        ]),
        _: 1
      })
    ], !0)
  ], 4);
}
const ll = /* @__PURE__ */ He(pS, [["render", vS], ["__scopeId", "data-v-53ad025a"]]);
ll.install = function(e) {
  e.component(ll.name, ll);
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
  const n = k(null), o = k(100), l = k(null), r = () => {
    var w;
    return ((w = document.querySelector(".card-row")) == null ? void 0 : w.offsetHeight) ?? 10;
  }, s = () => {
    var w;
    return ((w = document.querySelector(".card-row")) == null ? void 0 : w.offsetWidth) ?? 10;
  }, a = k(0), i = k(20), u = k(0), c = k(e.columns), d = (w) => Math.ceil(w / r()), v = () => {
    const { clientHeight: w = 100 } = n.value.wrapRef || {};
    return Math.floor(w / (r() + e.gridGap)) + a.value || 1;
  }, g = _(() => e.data.map((w, C) => ({ ...w, rowIndex: C }))), p = _(() => g.value.filter((w, C) => C >= a.value * c.value && C < i.value * c.value)), f = () => {
    const w = c.value * e.gridGap;
    o.value = Math.ceil(e.data.length / c.value * r()) + w;
  }, m = (w) => {
    const { scrollTop: C, clientHeight: y } = n.value.wrapRef, S = o.value - y - C;
    t("scroll", { distance: S, ...w }), a.value = d(C), i.value = v(), u.value = C;
  };
  Y(() => e.data, () => {
    f(), i.value = v();
  });
  const b = () => {
    if (l.value) {
      const { clientWidth: w = 500 } = n.value.wrapRef;
      c.value = Math.floor(w / s()) || 1, f(), u.value = 0, a.value = 0, n.value.setScrollTop(0), i.value = v();
    }
  };
  return Me(() => {
    b(), window.addEventListener("resize", b);
  }), To(() => {
    window.removeEventListener("resize", b);
  }), {
    scrollbarRef: n,
    containHeight: o,
    cardRowRef: l,
    onScroll: m,
    startOffset: u,
    viewListRanges: p,
    resetViewport: b
  };
}
const ra = H({
  name: "KCardList",
  props: hS,
  emits: ["click", "mouseenter", "mouseleave", "update:modelValue", "scroll"],
  setup(e, { emit: t }) {
    const n = _(() => `${Number((100 / e.columns).toFixed(1))}%`), o = _(() => `${e.gridGap}px`), l = _(() => `${e.width}`), r = (m) => m.disabled || e.disabled, s = _(() => e.rowClass === "border" ? "border-row" : e.rowClass === "shadow" ? "box-shadow" : e.rowClass), a = k("");
    Nt(() => {
      a.value = e.modelValue;
    });
    const i = (m) => {
      r(m) || (e.highlight && (a.value = m[e.keyId], t("update:modelValue", m[e.keyId])), t("click", m));
    }, {
      scrollbarRef: u,
      containHeight: c,
      cardRowRef: d,
      startOffset: v,
      viewListRanges: g,
      onScroll: p,
      resetViewport: f
    } = gS(e, t);
    return {
      calcnum: n,
      gridgap: o,
      columnwidth: l,
      rowClassStyle: s,
      clickHandle: i,
      selectedId: a,
      bitNotAllowed: r,
      scrollbarRef: u,
      containHeight: c,
      cardRowRef: d,
      startOffset: v,
      viewListRanges: g,
      onScroll: p,
      resetViewport: f
    };
  }
}), Rs = () => {
  br((e) => ({
    "7d46f10c": e.gridgap,
    "2e51acf2": e.columns,
    "5e29b28a": e.calcnum,
    "221aa64c": e.columnwidth,
    cb2c4c58: e.imgheight
  }));
}, Fs = ra.setup;
ra.setup = Fs ? (e, t) => (Rs(), Fs(e, t)) : Rs;
const mS = { class: "card-contain" }, bS = ["onClick", "onMouseenter", "onMouseleave"], yS = { class: "card-list-content" }, wS = { class: "sign" };
function CS(e, t, n, o, l, r) {
  const s = q("el-scrollbar");
  return E(), V(s, xe({
    ref: "scrollbarRef",
    "data-test": "card-list"
  }, e.$attrs, {
    always: "",
    onScroll: e.onScroll
  }), {
    default: R(() => [
      N("div", mS, [
        N("div", {
          class: "card-wrap",
          style: we({ height: `${e.containHeight}px` })
        }, null, 4),
        N("div", {
          class: "card-list",
          style: we({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          N("div", {
            class: M([e.fixedColumn ? "card-fixed-coumn" : "card-content", { "fixed-width": e.width }])
          }, [
            (E(!0), P($e, null, ze(e.viewListRanges, (a, i) => (E(), P("div", {
              class: M(["card-row border-radius pointer", [e.selectedId === a[e.keyId] ? "select-style" : "", e.bitNotAllowed(a) ? "not-allowed" : "hover-style", e.rowClassStyle]]),
              key: i,
              onClick: (u) => e.clickHandle(a),
              ref_for: !0,
              ref: "cardRowRef",
              onMouseenter: (u) => e.$emit("mouseenter", a),
              onMouseleave: (u) => e.$emit("mouseleave", a)
            }, [
              N("div", yS, [
                K(e.$slots, "default", {
                  row: a,
                  index: a.rowIndex
                }, () => [
                  Ke(ie(a.rowIndex), 1)
                ], !0)
              ]),
              N("div", wS, [
                K(e.$slots, "sign", {
                  row: a,
                  index: a.rowIndex
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
const rl = /* @__PURE__ */ He(ra, [["render", CS], ["__scopeId", "data-v-6f6f8503"]]);
rl.install = function(e) {
  e.component(rl.name, rl);
};
const Wl = {
  KButton: Ho,
  KInput: co,
  KInputNumber: Do,
  KTable: Go,
  KTableV2: Yo,
  KPage: Nn,
  KBatchTable: bo,
  KDialog: Xo,
  KBreadcrumb: Qo,
  KTabs: Zo,
  KPicker: Jo,
  KTooltip: el,
  KDatePicker: tl,
  KNumberKeyboard: nl,
  KVirtualList: mo,
  KAutoCounter: ol,
  KCollapseButton: ll,
  KCardList: rl,
  install: () => {
  }
};
function SS(e, t, n = 0) {
  return e.substr(n, t.length) === t;
}
Wl.install = function(e) {
  Object.keys(Wl).forEach((t) => {
    if (SS(t, "K")) {
      const n = Wl[t];
      e.component(n.name, n);
    }
  }), Object.keys(uo).forEach((t) => {
    e.directive(t, uo[t]);
  });
};
export {
  ol as KAutoCounter,
  bo as KBatchTable,
  Qo as KBreadcrumb,
  Ho as KButton,
  rl as KCardList,
  ll as KCollapseButton,
  tl as KDatePicker,
  Xo as KDialog,
  co as KInput,
  Do as KInputNumber,
  nl as KNumberKeyboard,
  Nn as KPage,
  Jo as KPicker,
  Go as KTable,
  Yo as KTableV2,
  Zo as KTabs,
  el as KTooltip,
  Wl as KUI,
  mo as KVirtualList,
  uo as directives
};
