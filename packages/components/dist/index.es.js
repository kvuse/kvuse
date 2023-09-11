import { defineComponent as D, ref as k, computed as _, resolveComponent as G, openBlock as E, createBlock as V, mergeProps as Oe, withModifiers as Ye, withCtx as F, renderSlot as U, createElementBlock as P, createCommentVNode as q, withKeys as rt, createSlots as _n, createElementVNode as R, watchEffect as Lt, watch as Y, nextTick as ve, normalizeClass as M, createVNode as Z, unref as g, getCurrentScope as zu, onScopeDispose as Hu, getCurrentInstance as ye, onMounted as Ae, warn as Du, inject as pe, isRef as Rn, shallowRef as Cn, onBeforeUnmount as Nt, onBeforeMount as vl, provide as it, toRef as It, onUnmounted as Eo, useAttrs as Vu, useSlots as hr, withDirectives as Ke, Fragment as $e, resolveDynamicComponent as lt, toDisplayString as ie, normalizeStyle as Se, vShow as dn, Transition as bo, reactive as Xn, onUpdated as hl, cloneVNode as Ku, Text as Ls, Comment as Rs, Teleport as Wu, readonly as ju, onDeactivated as Uu, toRaw as Nn, vModelCheckbox as lr, createTextVNode as Ve, toRefs as Qn, triggerRef as lo, resolveDirective as gl, renderList as ze, vModelText as qu, h as ae, normalizeProps as ra, useCssVars as Ns } from "vue";
const io = {
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
      const { inter: r, point: l } = t.modifiers, s = l ? t.value : 2, a = n >= 0 ? `￥${Number(n).toFixed(s)}` : `-￥${Math.abs(Number(n.toFixed(s)))}`;
      r ? o = n >= 0 ? `￥${n}` : `-￥${Math.abs(n)}` : o = n ? a : "￥0.00", e.innerHTML = `${o}`;
    },
    updated: (e, t) => {
      const { point: n } = t.modifiers, o = n ? t.value : 2, r = t.arg === "value" && t.value ? `￥${Number(t.value).toFixed(o)}` : e.textContent;
      e.innerHTML = r;
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
        const r = Date.now(), l = /^[a-zA-Z]{2,}/.test(o.key) ? o.key : o.key.toLocaleUpperCase(), { buttonKey: s, isCombination: a = 0 } = t.value || e.valueKeys || {}, i = document.contains(e), u = o.target.tagName === "TEXTAREA" || o.target.tagName === "INPUT", {
          dialog: c,
          focus: d,
          long: v,
          any: h,
          fast: p
        } = t.modifiers;
        if (!i && !v) {
          document.removeEventListener("keydown", e.handler);
          return;
        }
        if (h && t.arg) {
          t.arg(o);
          return;
        }
        const f = p ? r - n > 30 : !0, m = document.querySelector(".el-popup-parent--hidden") || document.querySelector(".is-message-box");
        if (n = r, m && !c)
          return;
        const y = o.ctrlKey || o.metaKey, w = a === +y && s === l;
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
        const { once: r } = t.modifiers;
        r || (e.timer = setTimeout(() => {
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
io.install = function(e) {
  Object.keys(io).forEach((t) => {
    e.directive(t, io[t]);
  });
};
const He = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Gu = D({
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
    const o = k(!0), r = k(null), l = () => {
      o.value && (o.value = !1, t("click")), s();
    }, s = () => {
      clearTimeout(r.value), r.value = setTimeout(() => {
        o.value = !0;
      }, 800);
    }, a = _(() => {
      const { border: i } = e, { type: u = "text" } = n;
      return i ? {
        backgroundColor: "transparent",
        color: `var(--el-color-${u})`
      } : {};
    });
    return { onclick: l, buttonStatus: o, buttonStyle: a };
  }
}), Yu = {
  key: 0,
  class: "el-icon-lock el-icon--right"
};
function Xu(e, t, n, o, r, l) {
  const s = G("el-button");
  return E(), V(s, Oe({
    disabled: !e.buttonStatus || e.disabled,
    style: e.buttonStyle,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: Ye(e.onclick, ["stop"])
  }), {
    default: F(() => [
      U(e.$slots, "default"),
      e.iconLock ? (E(), P("i", Yu)) : q("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "style", "click-state", "onClick"]);
}
const zo = /* @__PURE__ */ He(Gu, [["render", Xu]]);
zo.install = function(e) {
  e.component(zo.name, zo);
};
const Qu = D({
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
    const o = k(null), r = k(!0), l = _({
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
              const h = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
              d = d.match(h)[0] || null;
            }
          } else
            d === "." && (d = "");
        v = n.max ?? 999999.99;
      } else
        e.type === "integer" ? (d = d.replace(/[^\d]/g, ""), v = n.max ?? 999999) : e.type === "intText" && (d = d.replace(/[^\w]/g, ""));
      v !== void 0 && d && Number(d) > Number(v) && (d = v), n.min !== void 0 && d && Number(d) < Number(n.min) && (d = n.min), t("update:modelValue", d);
    }, a = () => {
      r.value && (r.value = !1, l.value && t("enter")), u();
    }, i = (c) => {
      t("change", c);
    }, u = () => {
      clearTimeout(o.value), o.value = setTimeout(() => {
        r.value = !0;
      }, 800);
    };
    return {
      inputValue: l,
      changeValue: i,
      searchContent: a
    };
  }
});
function Zu(e, t, n, o, r, l) {
  const s = G("el-input");
  return E(), V(s, Oe({
    modelValue: e.inputValue,
    "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputValue = a),
    modelModifiers: { trim: !0 }
  }, e.$attrs, {
    onKeyup: rt(e.searchContent, ["enter"]),
    onChange: e.changeValue
  }), _n({ _: 2 }, [
    e.$slots.append ? {
      name: "append",
      fn: F(() => [
        U(e.$slots, "append")
      ]),
      key: "0"
    } : void 0,
    e.$slots.prepend ? {
      name: "prepend",
      fn: F(() => [
        U(e.$slots, "prepend")
      ]),
      key: "1"
    } : void 0,
    e.$slots.prefix ? {
      name: "prefix",
      fn: F(() => [
        U(e.$slots, "prefix")
      ]),
      key: "2"
    } : void 0,
    e.$slots.suffix ? {
      name: "suffix",
      fn: F(() => [
        U(e.$slots, "suffix")
      ]),
      key: "3"
    } : void 0
  ]), 1040, ["modelValue", "onKeyup", "onChange"]);
}
const uo = /* @__PURE__ */ He(Qu, [["render", Zu]]);
uo.install = function(e) {
  e.component(uo.name, uo);
};
/*! Element Plus Icons Vue v2.1.0 */
var Fe = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, r] of t)
    n[o] = r;
  return n;
}, Ju = {
  name: "ArrowDown"
}, ec = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, tc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), nc = [
  tc
];
function oc(e, t, n, o, r, l) {
  return E(), P("svg", ec, nc);
}
var Fs = /* @__PURE__ */ Fe(Ju, [["render", oc], ["__file", "arrow-down.vue"]]), rc = {
  name: "ArrowLeft"
}, lc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ac = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), sc = [
  ac
];
function ic(e, t, n, o, r, l) {
  return E(), P("svg", lc, sc);
}
var uc = /* @__PURE__ */ Fe(rc, [["render", ic], ["__file", "arrow-left.vue"]]), cc = {
  name: "ArrowRight"
}, dc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), pc = [
  fc
];
function vc(e, t, n, o, r, l) {
  return E(), P("svg", dc, pc);
}
var ml = /* @__PURE__ */ Fe(cc, [["render", vc], ["__file", "arrow-right.vue"]]), hc = {
  name: "ArrowUp"
}, gc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), bc = [
  mc
];
function yc(e, t, n, o, r, l) {
  return E(), P("svg", gc, bc);
}
var wc = /* @__PURE__ */ Fe(hc, [["render", yc], ["__file", "arrow-up.vue"]]), Cc = {
  name: "CaretLeft"
}, Sc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _c = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M672 192 288 511.936 672 832z"
  },
  null,
  -1
  /* HOISTED */
), $c = [
  _c
];
function Ec(e, t, n, o, r, l) {
  return E(), P("svg", Sc, $c);
}
var Tc = /* @__PURE__ */ Fe(Cc, [["render", Ec], ["__file", "caret-left.vue"]]), kc = {
  name: "CaretRight"
}, Oc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M384 192v640l384-320.064z"
  },
  null,
  -1
  /* HOISTED */
), Pc = [
  xc
];
function Ac(e, t, n, o, r, l) {
  return E(), P("svg", Oc, Pc);
}
var Mc = /* @__PURE__ */ Fe(kc, [["render", Ac], ["__file", "caret-right.vue"]]), Ic = {
  name: "CircleCheck"
}, Lc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Nc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), Fc = [
  Rc,
  Nc
];
function Bc(e, t, n, o, r, l) {
  return E(), P("svg", Lc, Fc);
}
var zc = /* @__PURE__ */ Fe(Ic, [["render", Bc], ["__file", "circle-check.vue"]]), Hc = {
  name: "CircleClose"
}, Dc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), Kc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Wc = [
  Vc,
  Kc
];
function jc(e, t, n, o, r, l) {
  return E(), P("svg", Dc, Wc);
}
var bl = /* @__PURE__ */ Fe(Hc, [["render", jc], ["__file", "circle-close.vue"]]), Uc = {
  name: "Close"
}, qc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), Yc = [
  Gc
];
function Xc(e, t, n, o, r, l) {
  return E(), P("svg", qc, Yc);
}
var la = /* @__PURE__ */ Fe(Uc, [["render", Xc], ["__file", "close.vue"]]), Qc = {
  name: "DArrowLeft"
}, Zc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Jc = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
  },
  null,
  -1
  /* HOISTED */
), ed = [
  Jc
];
function td(e, t, n, o, r, l) {
  return E(), P("svg", Zc, ed);
}
var nd = /* @__PURE__ */ Fe(Qc, [["render", td], ["__file", "d-arrow-left.vue"]]), od = {
  name: "DArrowRight"
}, rd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ld = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
  },
  null,
  -1
  /* HOISTED */
), ad = [
  ld
];
function sd(e, t, n, o, r, l) {
  return E(), P("svg", rd, ad);
}
var id = /* @__PURE__ */ Fe(od, [["render", sd], ["__file", "d-arrow-right.vue"]]), ud = {
  name: "Delete"
}, cd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dd = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
  },
  null,
  -1
  /* HOISTED */
), fd = [
  dd
];
function pd(e, t, n, o, r, l) {
  return E(), P("svg", cd, fd);
}
var vd = /* @__PURE__ */ Fe(ud, [["render", pd], ["__file", "delete.vue"]]), hd = {
  name: "Hide"
}, gd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, md = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), bd = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), yd = [
  md,
  bd
];
function wd(e, t, n, o, r, l) {
  return E(), P("svg", gd, yd);
}
var Cd = /* @__PURE__ */ Fe(hd, [["render", wd], ["__file", "hide.vue"]]), Sd = {
  name: "Loading"
}, _d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $d = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), Ed = [
  $d
];
function Td(e, t, n, o, r, l) {
  return E(), P("svg", _d, Ed);
}
var yl = /* @__PURE__ */ Fe(Sd, [["render", Td], ["__file", "loading.vue"]]), kd = {
  name: "Minus"
}, Od = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xd = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
  },
  null,
  -1
  /* HOISTED */
), Pd = [
  xd
];
function Ad(e, t, n, o, r, l) {
  return E(), P("svg", Od, Pd);
}
var Md = /* @__PURE__ */ Fe(kd, [["render", Ad], ["__file", "minus.vue"]]), Id = {
  name: "MoreFilled"
}, Ld = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rd = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
  },
  null,
  -1
  /* HOISTED */
), Nd = [
  Rd
];
function Fd(e, t, n, o, r, l) {
  return E(), P("svg", Ld, Nd);
}
var aa = /* @__PURE__ */ Fe(Id, [["render", Fd], ["__file", "more-filled.vue"]]), Bd = {
  name: "Plus"
}, zd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hd = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  },
  null,
  -1
  /* HOISTED */
), Dd = [
  Hd
];
function Vd(e, t, n, o, r, l) {
  return E(), P("svg", zd, Dd);
}
var Kd = /* @__PURE__ */ Fe(Bd, [["render", Vd], ["__file", "plus.vue"]]), Wd = {
  name: "View"
}, jd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ud = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), qd = [
  Ud
];
function Gd(e, t, n, o, r, l) {
  return E(), P("svg", jd, qd);
}
var Yd = /* @__PURE__ */ Fe(Wd, [["render", Gd], ["__file", "view.vue"]]), Xd = {
  name: "Warning"
}, Qd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Zd = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Jd = [
  Zd
];
function ef(e, t, n, o, r, l) {
  return E(), P("svg", Qd, Jd);
}
var tf = /* @__PURE__ */ Fe(Xd, [["render", ef], ["__file", "warning.vue"]]);
const nf = D({
  name: "KInputNumber",
  components: { Minus: Md, Plus: Kd, KInput: uo },
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
    const n = k(1), o = k(null), r = k(!1), l = _(() => e.modelValue <= e.min), s = _(() => e.modelValue >= e.max), a = _({
      get: () => e.modelValue,
      set: (m) => {
        t("update:modelValue", m);
      }
    }), i = (m) => t("blur", m), u = (m) => t("focus", m), c = (m) => t("enter", m), d = (m) => {
      ve(() => {
        const y = m === "" ? void 0 : Number(m);
        (!Number.isNaN(y) || m === "") && f(y);
      });
    }, v = (m) => {
      r.value = !m, o.value = m;
    }, h = k(-1);
    Lt(() => {
      n.value = e.modelValue;
    }), Y(() => h.value, (m) => {
      m < 0 && (a.value = e.modelValue, d(n.value));
    }, { immediate: !0 });
    const p = (m) => {
      const y = m === "increase", w = y ? s.value : l.value;
      if (e.disabled || w)
        return;
      const C = r.value ? 0 : a.value, b = o.value ? n.value : C, S = y ? b + e.step : b - e.step;
      f(S);
    }, f = (m) => {
      o.value = m;
      let y = m;
      h.value !== y && (h.value = m, y >= e.max && (y = e.max), y <= e.min && (y = e.min), o.value === void 0 && (y = 1), t("update:modelValue", y), t("change", y, h.value), n.value = y);
    };
    return {
      currentValue: n,
      minDisabled: l,
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
function of(e, t, n, o, r, l) {
  const s = G("minus"), a = G("el-icon"), i = G("plus"), u = G("k-input");
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
        default: F(() => [
          Z(s)
        ]),
        _: 1
      })
    ], 2)) : q("", !0),
    e.controls ? (E(), P("span", {
      key: 1,
      class: M(["el-input-number__increase", { "is-disabled": e.maxDisabled }]),
      role: "button",
      onClick: t[1] || (t[1] = (c) => e.clickBtnHandle("increase"))
    }, [
      Z(a, { class: "el-input__icon" }, {
        default: F(() => [
          Z(i)
        ]),
        _: 1
      })
    ], 2)) : q("", !0),
    Z(u, Oe({
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
      onKeyup: rt(e.handleKeyUp, ["enter"])
    }), null, 16, ["modelValue", "disabled", "type", "onBlur", "onFocus", "onChange", "onInput", "onKeyup"])
  ], 2);
}
const Ho = /* @__PURE__ */ He(nf, [["render", of]]);
Ho.install = function(e) {
  e.component(Ho.name, Ho);
};
const Jt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const l = e == null ? void 0 : e(r);
  if (n === !1 || !l)
    return t == null ? void 0 : t(r);
};
var sa;
const Ie = typeof window < "u", rf = (e) => typeof e == "string", Bs = () => {
}, zs = Ie && ((sa = window == null ? void 0 : window.navigator) == null ? void 0 : sa.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Hs(e) {
  return typeof e == "function" ? e() : g(e);
}
function lf(e) {
  return e;
}
function wl(e) {
  return zu() ? (Hu(e), !0) : !1;
}
function af(e, t = !0) {
  ye() ? Ae(e) : t ? e() : ve(e);
}
function un(e) {
  var t;
  const n = Hs(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Cl = Ie ? window : void 0;
function en(...e) {
  let t, n, o, r;
  if (rf(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = Cl) : [t, n, o, r] = e, !t)
    return Bs;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], s = () => {
    l.forEach((c) => c()), l.length = 0;
  }, a = (c, d, v, h) => (c.addEventListener(d, v, h), () => c.removeEventListener(d, v, h)), i = Y(() => [un(t), Hs(r)], ([c, d]) => {
    s(), c && l.push(...n.flatMap((v) => o.map((h) => a(c, v, h, d))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), s();
  };
  return wl(u), u;
}
let ia = !1;
function sf(e, t, n = {}) {
  const { window: o = Cl, ignore: r = [], capture: l = !0, detectIframe: s = !1 } = n;
  if (!o)
    return;
  zs && !ia && (ia = !0, Array.from(o.document.body.children).forEach((v) => v.addEventListener("click", Bs)));
  let a = !0;
  const i = (v) => r.some((h) => {
    if (typeof h == "string")
      return Array.from(o.document.querySelectorAll(h)).some((p) => p === v.target || v.composedPath().includes(p));
    {
      const p = un(h);
      return p && (v.target === p || v.composedPath().includes(p));
    }
  }), c = [
    en(o, "click", (v) => {
      const h = un(e);
      if (!(!h || h === v.target || v.composedPath().includes(h))) {
        if (v.detail === 0 && (a = !i(v)), !a) {
          a = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: l }),
    en(o, "pointerdown", (v) => {
      const h = un(e);
      h && (a = !v.composedPath().includes(h) && !i(v));
    }, { passive: !0 }),
    s && en(o, "blur", (v) => {
      var h;
      const p = un(e);
      ((h = o.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(p != null && p.contains(o.document.activeElement)) && t(v);
    })
  ].filter(Boolean);
  return () => c.forEach((v) => v());
}
function uf(e, t = !1) {
  const n = k(), o = () => n.value = !!e();
  return o(), af(o, t), n;
}
const ua = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ca = "__vueuse_ssr_handlers__";
ua[ca] = ua[ca] || {};
var da = Object.getOwnPropertySymbols, cf = Object.prototype.hasOwnProperty, df = Object.prototype.propertyIsEnumerable, ff = (e, t) => {
  var n = {};
  for (var o in e)
    cf.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && da)
    for (var o of da(e))
      t.indexOf(o) < 0 && df.call(e, o) && (n[o] = e[o]);
  return n;
};
function Fn(e, t, n = {}) {
  const o = n, { window: r = Cl } = o, l = ff(o, ["window"]);
  let s;
  const a = uf(() => r && "ResizeObserver" in r), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Y(() => un(e), (d) => {
    i(), a.value && r && d && (s = new ResizeObserver(t), s.observe(d, l));
  }, { immediate: !0, flush: "post" }), c = () => {
    i(), u();
  };
  return wl(c), {
    isSupported: a,
    stop: c
  };
}
var fa;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(fa || (fa = {}));
var pf = Object.defineProperty, pa = Object.getOwnPropertySymbols, vf = Object.prototype.hasOwnProperty, hf = Object.prototype.propertyIsEnumerable, va = (e, t, n) => t in e ? pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, gf = (e, t) => {
  for (var n in t || (t = {}))
    vf.call(t, n) && va(e, n, t[n]);
  if (pa)
    for (var n of pa(t))
      hf.call(t, n) && va(e, n, t[n]);
  return e;
};
const mf = {
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
gf({
  linear: lf
}, mf);
const bf = () => Ie && /firefox/i.test(window.navigator.userAgent);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const yo = () => {
}, yf = Object.prototype.hasOwnProperty, $n = (e, t) => yf.call(e, t), En = Array.isArray, Mt = (e) => typeof e == "function", St = (e) => typeof e == "string", Rt = (e) => e !== null && typeof e == "object", wf = Object.prototype.toString, Cf = (e) => wf.call(e), Pr = (e) => Cf(e).slice(8, -1);
var Sf = typeof global == "object" && global && global.Object === Object && global;
const Ds = Sf;
var _f = typeof self == "object" && self && self.Object === Object && self, $f = Ds || _f || Function("return this")();
const Ft = $f;
var Ef = Ft.Symbol;
const Kt = Ef;
var Vs = Object.prototype, Tf = Vs.hasOwnProperty, kf = Vs.toString, ao = Kt ? Kt.toStringTag : void 0;
function Of(e) {
  var t = Tf.call(e, ao), n = e[ao];
  try {
    e[ao] = void 0;
    var o = !0;
  } catch {
  }
  var r = kf.call(e);
  return o && (t ? e[ao] = n : delete e[ao]), r;
}
var xf = Object.prototype, Pf = xf.toString;
function Af(e) {
  return Pf.call(e);
}
var Mf = "[object Null]", If = "[object Undefined]", ha = Kt ? Kt.toStringTag : void 0;
function On(e) {
  return e == null ? e === void 0 ? If : Mf : ha && ha in Object(e) ? Of(e) : Af(e);
}
function fn(e) {
  return e != null && typeof e == "object";
}
var Lf = "[object Symbol]";
function gr(e) {
  return typeof e == "symbol" || fn(e) && On(e) == Lf;
}
function Ks(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Rf = Array.isArray;
const pt = Rf;
var Nf = 1 / 0, ga = Kt ? Kt.prototype : void 0, ma = ga ? ga.toString : void 0;
function Ws(e) {
  if (typeof e == "string")
    return e;
  if (pt(e))
    return Ks(e, Ws) + "";
  if (gr(e))
    return ma ? ma.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Nf ? "-0" : t;
}
var Ff = /\s/;
function Bf(e) {
  for (var t = e.length; t-- && Ff.test(e.charAt(t)); )
    ;
  return t;
}
var zf = /^\s+/;
function Hf(e) {
  return e && e.slice(0, Bf(e) + 1).replace(zf, "");
}
function vt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ba = 0 / 0, Df = /^[-+]0x[0-9a-f]+$/i, Vf = /^0b[01]+$/i, Kf = /^0o[0-7]+$/i, Wf = parseInt;
function Wr(e) {
  if (typeof e == "number")
    return e;
  if (gr(e))
    return ba;
  if (vt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = vt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Hf(e);
  var n = Vf.test(e);
  return n || Kf.test(e) ? Wf(e.slice(2), n ? 2 : 8) : Df.test(e) ? ba : +e;
}
var ya = 1 / 0, jf = 17976931348623157e292;
function Uf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Wr(e), e === ya || e === -ya) {
    var t = e < 0 ? -1 : 1;
    return t * jf;
  }
  return e === e ? e : 0;
}
function qf(e) {
  var t = Uf(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function Sl(e) {
  return e;
}
var Gf = "[object AsyncFunction]", Yf = "[object Function]", Xf = "[object GeneratorFunction]", Qf = "[object Proxy]";
function _l(e) {
  if (!vt(e))
    return !1;
  var t = On(e);
  return t == Yf || t == Xf || t == Gf || t == Qf;
}
var Zf = Ft["__core-js_shared__"];
const Ar = Zf;
var wa = function() {
  var e = /[^.]+$/.exec(Ar && Ar.keys && Ar.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Jf(e) {
  return !!wa && wa in e;
}
var ep = Function.prototype, tp = ep.toString;
function xn(e) {
  if (e != null) {
    try {
      return tp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var np = /[\\^$.*+?()[\]{}|]/g, op = /^\[object .+?Constructor\]$/, rp = Function.prototype, lp = Object.prototype, ap = rp.toString, sp = lp.hasOwnProperty, ip = RegExp(
  "^" + ap.call(sp).replace(np, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function up(e) {
  if (!vt(e) || Jf(e))
    return !1;
  var t = _l(e) ? ip : op;
  return t.test(xn(e));
}
function cp(e, t) {
  return e == null ? void 0 : e[t];
}
function Pn(e, t) {
  var n = cp(e, t);
  return up(n) ? n : void 0;
}
var dp = Pn(Ft, "WeakMap");
const jr = dp;
var Ca = Object.create, fp = function() {
  function e() {
  }
  return function(t) {
    if (!vt(t))
      return {};
    if (Ca)
      return Ca(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const pp = fp;
function vp(e, t, n) {
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
function hp(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var gp = 800, mp = 16, bp = Date.now;
function yp(e) {
  var t = 0, n = 0;
  return function() {
    var o = bp(), r = mp - (o - n);
    if (n = o, r > 0) {
      if (++t >= gp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function wp(e) {
  return function() {
    return e;
  };
}
var Cp = function() {
  try {
    var e = Pn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ar = Cp;
var Sp = ar ? function(e, t) {
  return ar(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: wp(t),
    writable: !0
  });
} : Sl;
const _p = Sp;
var $p = yp(_p);
const js = $p;
function Ep(e, t, n, o) {
  for (var r = e.length, l = n + (o ? 1 : -1); o ? l-- : ++l < r; )
    if (t(e[l], l, e))
      return l;
  return -1;
}
var Tp = 9007199254740991, kp = /^(?:0|[1-9]\d*)$/;
function mr(e, t) {
  var n = typeof e;
  return t = t ?? Tp, !!t && (n == "number" || n != "symbol" && kp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function $l(e, t, n) {
  t == "__proto__" && ar ? ar(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function To(e, t) {
  return e === t || e !== e && t !== t;
}
var Op = Object.prototype, xp = Op.hasOwnProperty;
function Us(e, t, n) {
  var o = e[t];
  (!(xp.call(e, t) && To(o, n)) || n === void 0 && !(t in e)) && $l(e, t, n);
}
function Pp(e, t, n, o) {
  var r = !n;
  n || (n = {});
  for (var l = -1, s = t.length; ++l < s; ) {
    var a = t[l], i = o ? o(n[a], e[a], a, n, e) : void 0;
    i === void 0 && (i = e[a]), r ? $l(n, a, i) : Us(n, a, i);
  }
  return n;
}
var Sa = Math.max;
function qs(e, t, n) {
  return t = Sa(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, l = Sa(o.length - t, 0), s = Array(l); ++r < l; )
      s[r] = o[t + r];
    r = -1;
    for (var a = Array(t + 1); ++r < t; )
      a[r] = o[r];
    return a[t] = n(s), vp(e, this, a);
  };
}
function Ap(e, t) {
  return js(qs(e, t, Sl), e + "");
}
var Mp = 9007199254740991;
function El(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Mp;
}
function Zn(e) {
  return e != null && El(e.length) && !_l(e);
}
function Ip(e, t, n) {
  if (!vt(n))
    return !1;
  var o = typeof t;
  return (o == "number" ? Zn(n) && mr(t, n.length) : o == "string" && t in n) ? To(n[t], e) : !1;
}
function Lp(e) {
  return Ap(function(t, n) {
    var o = -1, r = n.length, l = r > 1 ? n[r - 1] : void 0, s = r > 2 ? n[2] : void 0;
    for (l = e.length > 3 && typeof l == "function" ? (r--, l) : void 0, s && Ip(n[0], n[1], s) && (l = r < 3 ? void 0 : l, r = 1), t = Object(t); ++o < r; ) {
      var a = n[o];
      a && e(t, a, o, l);
    }
    return t;
  });
}
var Rp = Object.prototype;
function Tl(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Rp;
  return e === n;
}
function Np(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Fp = "[object Arguments]";
function _a(e) {
  return fn(e) && On(e) == Fp;
}
var Gs = Object.prototype, Bp = Gs.hasOwnProperty, zp = Gs.propertyIsEnumerable, Hp = _a(function() {
  return arguments;
}()) ? _a : function(e) {
  return fn(e) && Bp.call(e, "callee") && !zp.call(e, "callee");
};
const wo = Hp;
function Dp() {
  return !1;
}
var Ys = typeof exports == "object" && exports && !exports.nodeType && exports, $a = Ys && typeof module == "object" && module && !module.nodeType && module, Vp = $a && $a.exports === Ys, Ea = Vp ? Ft.Buffer : void 0, Kp = Ea ? Ea.isBuffer : void 0, Wp = Kp || Dp;
const sr = Wp;
var jp = "[object Arguments]", Up = "[object Array]", qp = "[object Boolean]", Gp = "[object Date]", Yp = "[object Error]", Xp = "[object Function]", Qp = "[object Map]", Zp = "[object Number]", Jp = "[object Object]", ev = "[object RegExp]", tv = "[object Set]", nv = "[object String]", ov = "[object WeakMap]", rv = "[object ArrayBuffer]", lv = "[object DataView]", av = "[object Float32Array]", sv = "[object Float64Array]", iv = "[object Int8Array]", uv = "[object Int16Array]", cv = "[object Int32Array]", dv = "[object Uint8Array]", fv = "[object Uint8ClampedArray]", pv = "[object Uint16Array]", vv = "[object Uint32Array]", ke = {};
ke[av] = ke[sv] = ke[iv] = ke[uv] = ke[cv] = ke[dv] = ke[fv] = ke[pv] = ke[vv] = !0;
ke[jp] = ke[Up] = ke[rv] = ke[qp] = ke[lv] = ke[Gp] = ke[Yp] = ke[Xp] = ke[Qp] = ke[Zp] = ke[Jp] = ke[ev] = ke[tv] = ke[nv] = ke[ov] = !1;
function hv(e) {
  return fn(e) && El(e.length) && !!ke[On(e)];
}
function gv(e) {
  return function(t) {
    return e(t);
  };
}
var Xs = typeof exports == "object" && exports && !exports.nodeType && exports, co = Xs && typeof module == "object" && module && !module.nodeType && module, mv = co && co.exports === Xs, Mr = mv && Ds.process, bv = function() {
  try {
    var e = co && co.require && co.require("util").types;
    return e || Mr && Mr.binding && Mr.binding("util");
  } catch {
  }
}();
const Ta = bv;
var ka = Ta && Ta.isTypedArray, yv = ka ? gv(ka) : hv;
const kl = yv;
var wv = Object.prototype, Cv = wv.hasOwnProperty;
function Qs(e, t) {
  var n = pt(e), o = !n && wo(e), r = !n && !o && sr(e), l = !n && !o && !r && kl(e), s = n || o || r || l, a = s ? Np(e.length, String) : [], i = a.length;
  for (var u in e)
    (t || Cv.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    mr(u, i))) && a.push(u);
  return a;
}
function Zs(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Sv = Zs(Object.keys, Object);
const _v = Sv;
var $v = Object.prototype, Ev = $v.hasOwnProperty;
function Tv(e) {
  if (!Tl(e))
    return _v(e);
  var t = [];
  for (var n in Object(e))
    Ev.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ol(e) {
  return Zn(e) ? Qs(e) : Tv(e);
}
function kv(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Ov = Object.prototype, xv = Ov.hasOwnProperty;
function Pv(e) {
  if (!vt(e))
    return kv(e);
  var t = Tl(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !xv.call(e, o)) || n.push(o);
  return n;
}
function Js(e) {
  return Zn(e) ? Qs(e, !0) : Pv(e);
}
var Av = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mv = /^\w*$/;
function xl(e, t) {
  if (pt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || gr(e) ? !0 : Mv.test(e) || !Av.test(e) || t != null && e in Object(t);
}
var Iv = Pn(Object, "create");
const Co = Iv;
function Lv() {
  this.__data__ = Co ? Co(null) : {}, this.size = 0;
}
function Rv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Nv = "__lodash_hash_undefined__", Fv = Object.prototype, Bv = Fv.hasOwnProperty;
function zv(e) {
  var t = this.__data__;
  if (Co) {
    var n = t[e];
    return n === Nv ? void 0 : n;
  }
  return Bv.call(t, e) ? t[e] : void 0;
}
var Hv = Object.prototype, Dv = Hv.hasOwnProperty;
function Vv(e) {
  var t = this.__data__;
  return Co ? t[e] !== void 0 : Dv.call(t, e);
}
var Kv = "__lodash_hash_undefined__";
function Wv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Co && t === void 0 ? Kv : t, this;
}
function Tn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Tn.prototype.clear = Lv;
Tn.prototype.delete = Rv;
Tn.prototype.get = zv;
Tn.prototype.has = Vv;
Tn.prototype.set = Wv;
function jv() {
  this.__data__ = [], this.size = 0;
}
function br(e, t) {
  for (var n = e.length; n--; )
    if (To(e[n][0], t))
      return n;
  return -1;
}
var Uv = Array.prototype, qv = Uv.splice;
function Gv(e) {
  var t = this.__data__, n = br(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : qv.call(t, n, 1), --this.size, !0;
}
function Yv(e) {
  var t = this.__data__, n = br(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Xv(e) {
  return br(this.__data__, e) > -1;
}
function Qv(e, t) {
  var n = this.__data__, o = br(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function nn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
nn.prototype.clear = jv;
nn.prototype.delete = Gv;
nn.prototype.get = Yv;
nn.prototype.has = Xv;
nn.prototype.set = Qv;
var Zv = Pn(Ft, "Map");
const So = Zv;
function Jv() {
  this.size = 0, this.__data__ = {
    hash: new Tn(),
    map: new (So || nn)(),
    string: new Tn()
  };
}
function eh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function yr(e, t) {
  var n = e.__data__;
  return eh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function th(e) {
  var t = yr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function nh(e) {
  return yr(this, e).get(e);
}
function oh(e) {
  return yr(this, e).has(e);
}
function rh(e, t) {
  var n = yr(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function on(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
on.prototype.clear = Jv;
on.prototype.delete = th;
on.prototype.get = nh;
on.prototype.has = oh;
on.prototype.set = rh;
var lh = "Expected a function";
function Pl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(lh);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(r))
      return l.get(r);
    var s = e.apply(this, o);
    return n.cache = l.set(r, s) || l, s;
  };
  return n.cache = new (Pl.Cache || on)(), n;
}
Pl.Cache = on;
var ah = 500;
function sh(e) {
  var t = Pl(e, function(o) {
    return n.size === ah && n.clear(), o;
  }), n = t.cache;
  return t;
}
var ih = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, uh = /\\(\\)?/g, ch = sh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ih, function(n, o, r, l) {
    t.push(r ? l.replace(uh, "$1") : o || n);
  }), t;
});
const dh = ch;
function fh(e) {
  return e == null ? "" : Ws(e);
}
function wr(e, t) {
  return pt(e) ? e : xl(e, t) ? [e] : dh(fh(e));
}
var ph = 1 / 0;
function ko(e) {
  if (typeof e == "string" || gr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -ph ? "-0" : t;
}
function Al(e, t) {
  t = wr(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[ko(t[n++])];
  return n && n == o ? e : void 0;
}
function Xe(e, t, n) {
  var o = e == null ? void 0 : Al(e, t);
  return o === void 0 ? n : o;
}
function ei(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Oa = Kt ? Kt.isConcatSpreadable : void 0;
function vh(e) {
  return pt(e) || wo(e) || !!(Oa && e && e[Oa]);
}
function Ml(e, t, n, o, r) {
  var l = -1, s = e.length;
  for (n || (n = vh), r || (r = []); ++l < s; ) {
    var a = e[l];
    t > 0 && n(a) ? t > 1 ? Ml(a, t - 1, n, o, r) : ei(r, a) : o || (r[r.length] = a);
  }
  return r;
}
function hh(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ml(e, 1) : [];
}
function gh(e) {
  return js(qs(e, void 0, hh), e + "");
}
var mh = Zs(Object.getPrototypeOf, Object);
const ti = mh;
var bh = "[object Object]", yh = Function.prototype, wh = Object.prototype, ni = yh.toString, Ch = wh.hasOwnProperty, Sh = ni.call(Object);
function _h(e) {
  if (!fn(e) || On(e) != bh)
    return !1;
  var t = ti(e);
  if (t === null)
    return !0;
  var n = Ch.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && ni.call(n) == Sh;
}
function $h() {
  this.__data__ = new nn(), this.size = 0;
}
function Eh(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Th(e) {
  return this.__data__.get(e);
}
function kh(e) {
  return this.__data__.has(e);
}
var Oh = 200;
function xh(e, t) {
  var n = this.__data__;
  if (n instanceof nn) {
    var o = n.__data__;
    if (!So || o.length < Oh - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new on(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Dt(e) {
  var t = this.__data__ = new nn(e);
  this.size = t.size;
}
Dt.prototype.clear = $h;
Dt.prototype.delete = Eh;
Dt.prototype.get = Th;
Dt.prototype.has = kh;
Dt.prototype.set = xh;
var oi = typeof exports == "object" && exports && !exports.nodeType && exports, xa = oi && typeof module == "object" && module && !module.nodeType && module, Ph = xa && xa.exports === oi, Pa = Ph ? Ft.Buffer : void 0, Aa = Pa ? Pa.allocUnsafe : void 0;
function Ah(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = Aa ? Aa(n) : new e.constructor(n);
  return e.copy(o), o;
}
function Mh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, l = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (l[r++] = s);
  }
  return l;
}
function Ih() {
  return [];
}
var Lh = Object.prototype, Rh = Lh.propertyIsEnumerable, Ma = Object.getOwnPropertySymbols, Nh = Ma ? function(e) {
  return e == null ? [] : (e = Object(e), Mh(Ma(e), function(t) {
    return Rh.call(e, t);
  }));
} : Ih;
const Fh = Nh;
function Bh(e, t, n) {
  var o = t(e);
  return pt(e) ? o : ei(o, n(e));
}
function Ia(e) {
  return Bh(e, Ol, Fh);
}
var zh = Pn(Ft, "DataView");
const Ur = zh;
var Hh = Pn(Ft, "Promise");
const qr = Hh;
var Dh = Pn(Ft, "Set");
const Gr = Dh;
var La = "[object Map]", Vh = "[object Object]", Ra = "[object Promise]", Na = "[object Set]", Fa = "[object WeakMap]", Ba = "[object DataView]", Kh = xn(Ur), Wh = xn(So), jh = xn(qr), Uh = xn(Gr), qh = xn(jr), mn = On;
(Ur && mn(new Ur(new ArrayBuffer(1))) != Ba || So && mn(new So()) != La || qr && mn(qr.resolve()) != Ra || Gr && mn(new Gr()) != Na || jr && mn(new jr()) != Fa) && (mn = function(e) {
  var t = On(e), n = t == Vh ? e.constructor : void 0, o = n ? xn(n) : "";
  if (o)
    switch (o) {
      case Kh:
        return Ba;
      case Wh:
        return La;
      case jh:
        return Ra;
      case Uh:
        return Na;
      case qh:
        return Fa;
    }
  return t;
});
const za = mn;
var Gh = Ft.Uint8Array;
const ir = Gh;
function Yh(e) {
  var t = new e.constructor(e.byteLength);
  return new ir(t).set(new ir(e)), t;
}
function Xh(e, t) {
  var n = t ? Yh(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function Qh(e) {
  return typeof e.constructor == "function" && !Tl(e) ? pp(ti(e)) : {};
}
var Zh = "__lodash_hash_undefined__";
function Jh(e) {
  return this.__data__.set(e, Zh), this;
}
function eg(e) {
  return this.__data__.has(e);
}
function ur(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new on(); ++t < n; )
    this.add(e[t]);
}
ur.prototype.add = ur.prototype.push = Jh;
ur.prototype.has = eg;
function tg(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function ng(e, t) {
  return e.has(t);
}
var og = 1, rg = 2;
function ri(e, t, n, o, r, l) {
  var s = n & og, a = e.length, i = t.length;
  if (a != i && !(s && i > a))
    return !1;
  var u = l.get(e), c = l.get(t);
  if (u && c)
    return u == t && c == e;
  var d = -1, v = !0, h = n & rg ? new ur() : void 0;
  for (l.set(e, t), l.set(t, e); ++d < a; ) {
    var p = e[d], f = t[d];
    if (o)
      var m = s ? o(f, p, d, t, e, l) : o(p, f, d, e, t, l);
    if (m !== void 0) {
      if (m)
        continue;
      v = !1;
      break;
    }
    if (h) {
      if (!tg(t, function(y, w) {
        if (!ng(h, w) && (p === y || r(p, y, n, o, l)))
          return h.push(w);
      })) {
        v = !1;
        break;
      }
    } else if (!(p === f || r(p, f, n, o, l))) {
      v = !1;
      break;
    }
  }
  return l.delete(e), l.delete(t), v;
}
function lg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function ag(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var sg = 1, ig = 2, ug = "[object Boolean]", cg = "[object Date]", dg = "[object Error]", fg = "[object Map]", pg = "[object Number]", vg = "[object RegExp]", hg = "[object Set]", gg = "[object String]", mg = "[object Symbol]", bg = "[object ArrayBuffer]", yg = "[object DataView]", Ha = Kt ? Kt.prototype : void 0, Ir = Ha ? Ha.valueOf : void 0;
function wg(e, t, n, o, r, l, s) {
  switch (n) {
    case yg:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case bg:
      return !(e.byteLength != t.byteLength || !l(new ir(e), new ir(t)));
    case ug:
    case cg:
    case pg:
      return To(+e, +t);
    case dg:
      return e.name == t.name && e.message == t.message;
    case vg:
    case gg:
      return e == t + "";
    case fg:
      var a = lg;
    case hg:
      var i = o & sg;
      if (a || (a = ag), e.size != t.size && !i)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      o |= ig, s.set(e, t);
      var c = ri(a(e), a(t), o, r, l, s);
      return s.delete(e), c;
    case mg:
      if (Ir)
        return Ir.call(e) == Ir.call(t);
  }
  return !1;
}
var Cg = 1, Sg = Object.prototype, _g = Sg.hasOwnProperty;
function $g(e, t, n, o, r, l) {
  var s = n & Cg, a = Ia(e), i = a.length, u = Ia(t), c = u.length;
  if (i != c && !s)
    return !1;
  for (var d = i; d--; ) {
    var v = a[d];
    if (!(s ? v in t : _g.call(t, v)))
      return !1;
  }
  var h = l.get(e), p = l.get(t);
  if (h && p)
    return h == t && p == e;
  var f = !0;
  l.set(e, t), l.set(t, e);
  for (var m = s; ++d < i; ) {
    v = a[d];
    var y = e[v], w = t[v];
    if (o)
      var C = s ? o(w, y, v, t, e, l) : o(y, w, v, e, t, l);
    if (!(C === void 0 ? y === w || r(y, w, n, o, l) : C)) {
      f = !1;
      break;
    }
    m || (m = v == "constructor");
  }
  if (f && !m) {
    var b = e.constructor, S = t.constructor;
    b != S && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof S == "function" && S instanceof S) && (f = !1);
  }
  return l.delete(e), l.delete(t), f;
}
var Eg = 1, Da = "[object Arguments]", Va = "[object Array]", Ao = "[object Object]", Tg = Object.prototype, Ka = Tg.hasOwnProperty;
function kg(e, t, n, o, r, l) {
  var s = pt(e), a = pt(t), i = s ? Va : za(e), u = a ? Va : za(t);
  i = i == Da ? Ao : i, u = u == Da ? Ao : u;
  var c = i == Ao, d = u == Ao, v = i == u;
  if (v && sr(e)) {
    if (!sr(t))
      return !1;
    s = !0, c = !1;
  }
  if (v && !c)
    return l || (l = new Dt()), s || kl(e) ? ri(e, t, n, o, r, l) : wg(e, t, i, n, o, r, l);
  if (!(n & Eg)) {
    var h = c && Ka.call(e, "__wrapped__"), p = d && Ka.call(t, "__wrapped__");
    if (h || p) {
      var f = h ? e.value() : e, m = p ? t.value() : t;
      return l || (l = new Dt()), r(f, m, n, o, l);
    }
  }
  return v ? (l || (l = new Dt()), $g(e, t, n, o, r, l)) : !1;
}
function Cr(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !fn(e) && !fn(t) ? e !== e && t !== t : kg(e, t, n, o, Cr, r);
}
var Og = 1, xg = 2;
function Pg(e, t, n, o) {
  var r = n.length, l = r, s = !o;
  if (e == null)
    return !l;
  for (e = Object(e); r--; ) {
    var a = n[r];
    if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++r < l; ) {
    a = n[r];
    var i = a[0], u = e[i], c = a[1];
    if (s && a[2]) {
      if (u === void 0 && !(i in e))
        return !1;
    } else {
      var d = new Dt();
      if (o)
        var v = o(u, c, i, e, t, d);
      if (!(v === void 0 ? Cr(c, u, Og | xg, o, d) : v))
        return !1;
    }
  }
  return !0;
}
function li(e) {
  return e === e && !vt(e);
}
function Ag(e) {
  for (var t = Ol(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, li(r)];
  }
  return t;
}
function ai(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Mg(e) {
  var t = Ag(e);
  return t.length == 1 && t[0][2] ? ai(t[0][0], t[0][1]) : function(n) {
    return n === e || Pg(n, e, t);
  };
}
function Ig(e, t) {
  return e != null && t in Object(e);
}
function Lg(e, t, n) {
  t = wr(t, e);
  for (var o = -1, r = t.length, l = !1; ++o < r; ) {
    var s = ko(t[o]);
    if (!(l = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return l || ++o != r ? l : (r = e == null ? 0 : e.length, !!r && El(r) && mr(s, r) && (pt(e) || wo(e)));
}
function si(e, t) {
  return e != null && Lg(e, t, Ig);
}
var Rg = 1, Ng = 2;
function Fg(e, t) {
  return xl(e) && li(t) ? ai(ko(e), t) : function(n) {
    var o = Xe(n, e);
    return o === void 0 && o === t ? si(n, e) : Cr(t, o, Rg | Ng);
  };
}
function Bg(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function zg(e) {
  return function(t) {
    return Al(t, e);
  };
}
function Hg(e) {
  return xl(e) ? Bg(ko(e)) : zg(e);
}
function ii(e) {
  return typeof e == "function" ? e : e == null ? Sl : typeof e == "object" ? pt(e) ? Fg(e[0], e[1]) : Mg(e) : Hg(e);
}
function Dg(e) {
  return function(t, n, o) {
    for (var r = -1, l = Object(t), s = o(t), a = s.length; a--; ) {
      var i = s[e ? a : ++r];
      if (n(l[i], i, l) === !1)
        break;
    }
    return t;
  };
}
var Vg = Dg();
const ui = Vg;
function Kg(e, t) {
  return e && ui(e, t, Ol);
}
function Wg(e, t) {
  return function(n, o) {
    if (n == null)
      return n;
    if (!Zn(n))
      return e(n, o);
    for (var r = n.length, l = t ? r : -1, s = Object(n); (t ? l-- : ++l < r) && o(s[l], l, s) !== !1; )
      ;
    return n;
  };
}
var jg = Wg(Kg);
const Ug = jg;
var qg = function() {
  return Ft.Date.now();
};
const Lr = qg;
var Gg = "Expected a function", Yg = Math.max, Xg = Math.min;
function Bn(e, t, n) {
  var o, r, l, s, a, i, u = 0, c = !1, d = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Gg);
  t = Wr(t) || 0, vt(n) && (c = !!n.leading, d = "maxWait" in n, l = d ? Yg(Wr(n.maxWait) || 0, t) : l, v = "trailing" in n ? !!n.trailing : v);
  function h(T) {
    var $ = o, x = r;
    return o = r = void 0, u = T, s = e.apply(x, $), s;
  }
  function p(T) {
    return u = T, a = setTimeout(y, t), c ? h(T) : s;
  }
  function f(T) {
    var $ = T - i, x = T - u, N = t - $;
    return d ? Xg(N, l - x) : N;
  }
  function m(T) {
    var $ = T - i, x = T - u;
    return i === void 0 || $ >= t || $ < 0 || d && x >= l;
  }
  function y() {
    var T = Lr();
    if (m(T))
      return w(T);
    a = setTimeout(y, f(T));
  }
  function w(T) {
    return a = void 0, v && o ? h(T) : (o = r = void 0, s);
  }
  function C() {
    a !== void 0 && clearTimeout(a), u = 0, o = i = r = a = void 0;
  }
  function b() {
    return a === void 0 ? s : w(Lr());
  }
  function S() {
    var T = Lr(), $ = m(T);
    if (o = arguments, r = this, i = T, $) {
      if (a === void 0)
        return p(i);
      if (d)
        return clearTimeout(a), a = setTimeout(y, t), h(i);
    }
    return a === void 0 && (a = setTimeout(y, t)), s;
  }
  return S.cancel = C, S.flush = b, S;
}
function Yr(e, t, n) {
  (n !== void 0 && !To(e[t], n) || n === void 0 && !(t in e)) && $l(e, t, n);
}
function Qg(e) {
  return fn(e) && Zn(e);
}
function Xr(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Zg(e) {
  return Pp(e, Js(e));
}
function Jg(e, t, n, o, r, l, s) {
  var a = Xr(e, n), i = Xr(t, n), u = s.get(i);
  if (u) {
    Yr(e, n, u);
    return;
  }
  var c = l ? l(a, i, n + "", e, t, s) : void 0, d = c === void 0;
  if (d) {
    var v = pt(i), h = !v && sr(i), p = !v && !h && kl(i);
    c = i, v || h || p ? pt(a) ? c = a : Qg(a) ? c = hp(a) : h ? (d = !1, c = Ah(i, !0)) : p ? (d = !1, c = Xh(i, !0)) : c = [] : _h(i) || wo(i) ? (c = a, wo(a) ? c = Zg(a) : (!vt(a) || _l(a)) && (c = Qh(i))) : d = !1;
  }
  d && (s.set(i, c), r(c, i, o, l, s), s.delete(i)), Yr(e, n, c);
}
function ci(e, t, n, o, r) {
  e !== t && ui(t, function(l, s) {
    if (r || (r = new Dt()), vt(l))
      Jg(e, t, s, n, ci, o, r);
    else {
      var a = o ? o(Xr(e, s), l, s + "", e, t, r) : void 0;
      a === void 0 && (a = l), Yr(e, s, a);
    }
  }, Js);
}
var em = Math.max, tm = Math.min;
function nm(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return n !== void 0 && (r = qf(n), r = n < 0 ? em(o + r, 0) : tm(r, o - 1)), Ep(e, ii(t), r, !0);
}
function om(e, t) {
  var n = -1, o = Zn(e) ? Array(e.length) : [];
  return Ug(e, function(r, l, s) {
    o[++n] = t(r, l, s);
  }), o;
}
function rm(e, t) {
  var n = pt(e) ? Ks : om;
  return n(e, ii(t));
}
function lm(e, t) {
  return Ml(rm(e, t), 1);
}
function cr(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function dr(e, t) {
  return Cr(e, t);
}
function Sr(e) {
  return e == null;
}
function am(e) {
  return e === void 0;
}
var sm = Lp(function(e, t, n) {
  ci(e, t, n);
});
const di = sm;
function fi(e, t, n, o) {
  if (!vt(e))
    return e;
  t = wr(t, e);
  for (var r = -1, l = t.length, s = l - 1, a = e; a != null && ++r < l; ) {
    var i = ko(t[r]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (r != s) {
      var c = a[i];
      u = o ? o(c, i, a) : void 0, u === void 0 && (u = vt(c) ? c : mr(t[r + 1]) ? [] : {});
    }
    Us(a, i, u), a = a[i];
  }
  return e;
}
function im(e, t, n) {
  for (var o = -1, r = t.length, l = {}; ++o < r; ) {
    var s = t[o], a = Al(e, s);
    n(a, s) && fi(l, wr(s, e), a);
  }
  return l;
}
function um(e, t) {
  return im(e, t, function(n, o) {
    return si(e, o);
  });
}
var cm = gh(function(e, t) {
  return e == null ? {} : um(e, t);
});
const dm = cm;
function fm(e, t, n) {
  return e == null ? e : fi(e, t, n);
}
const zn = (e) => e === void 0, Hn = (e) => typeof e == "boolean", Re = (e) => typeof e == "number", Dn = (e) => typeof Element > "u" ? !1 : e instanceof Element, pm = (e) => St(e) ? !Number.isNaN(Number(e)) : !1, vm = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Wa = (e) => Object.keys(e), hm = (e, t, n) => ({
  get value() {
    return Xe(e, t, n);
  },
  set value(o) {
    fm(e, t, o);
  }
});
class pi extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function vi(e, t) {
  throw new pi(`[${e}] ${t}`);
}
function We(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = St(e) ? new pi(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const gm = "utils/dom/style", hi = (e = "") => e.split(" ").filter((t) => !!t.trim()), Do = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, gi = (e, t) => {
  !e || !t.trim() || e.classList.add(...hi(t));
}, Qr = (e, t) => {
  !e || !t.trim() || e.classList.remove(...hi(t));
};
function Zr(e, t = "px") {
  if (!e)
    return "";
  if (Re(e) || pm(e))
    return `${e}${t}`;
  if (St(e))
    return e;
  We(gm, "binding value must be a string or number");
}
function mm(e, t) {
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
  const r = t.offsetTop + n.reduce((i, u) => i + u.offsetTop, 0), l = r + t.offsetHeight, s = e.scrollTop, a = s + e.clientHeight;
  r < s ? e.scrollTop = r : l > a && (e.scrollTop = l - e.clientHeight);
}
const mi = "__epPropKey", he = (e) => e, bm = (e) => Rt(e) && !!e[mi], _r = (e, t) => {
  if (!Rt(e) || bm(e))
    return e;
  const { values: n, required: o, default: r, type: l, validator: s } = e, i = {
    type: l,
    required: !!o,
    validator: n || s ? (u) => {
      let c = !1, d = [];
      if (n && (d = Array.from(n), $n(e, "default") && d.push(r), c || (c = d.includes(u))), s && (c || (c = s(u))), !c && d.length > 0) {
        const v = [...new Set(d)].map((h) => JSON.stringify(h)).join(", ");
        Du(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(u)}.`);
      }
      return c;
    } : void 0,
    [mi]: !0
  };
  return $n(e, "default") && (i.default = r), i;
}, xe = (e) => cr(Object.entries(e).map(([t, n]) => [
  t,
  _r(n, t)
])), Wt = he([
  String,
  Object,
  Function
]), bi = {
  validating: yl,
  success: zc,
  error: bl
}, Tt = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, Jn = (e) => (e.install = yo, e), Vn = {
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
}, nt = "update:modelValue", yi = "change", Oo = ["", "default", "small", "large"], ym = {
  large: 40,
  default: 32,
  small: 24
}, wm = (e) => ym[e || "default"], Cm = (e) => ["", ...Oo].includes(e), wi = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), Sm = (e) => Ie ? window.requestAnimationFrame(e) : setTimeout(e, 16), Il = (e) => e, _m = ["class", "style"], $m = /^on[A-Z]/, Em = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = _(() => ((n == null ? void 0 : n.value) || []).concat(_m)), r = ye();
  return r ? _(() => {
    var l;
    return cr(Object.entries((l = r.proxy) == null ? void 0 : l.$attrs).filter(([s]) => !o.value.includes(s) && !(t && $m.test(s))));
  }) : (We("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), _(() => ({})));
}, Ci = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: l = "API" }, s) => {
  Y(() => g(s), (a) => {
    a && We(n, `[${l}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
};
var Tm = {
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
const km = (e) => (t, n) => Om(t, n, g(e)), Om = (e, t, n) => Xe(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var l;
  return `${(l = t == null ? void 0 : t[r]) != null ? l : `{${r}}`}`;
}), xm = (e) => {
  const t = _(() => g(e).name), n = Rn(e) ? e : k(e);
  return {
    lang: t,
    locale: n,
    t: km(e)
  };
}, Si = Symbol("localeContextKey"), kt = (e) => {
  const t = e || pe(Si, k());
  return xm(_(() => t.value || Tm));
}, Rr = "el", Pm = "is-", gn = (e, t, n, o, r) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), r && (l += `--${r}`), l;
}, _i = Symbol("namespaceContextKey"), Ll = (e) => {
  const t = e || (ye() ? pe(_i, k(Rr)) : k(Rr));
  return _(() => g(t) || Rr);
}, fe = (e, t) => {
  const n = Ll(t);
  return {
    namespace: n,
    b: (f = "") => gn(n.value, e, f, "", ""),
    e: (f) => f ? gn(n.value, e, "", f, "") : "",
    m: (f) => f ? gn(n.value, e, "", "", f) : "",
    be: (f, m) => f && m ? gn(n.value, e, f, m, "") : "",
    em: (f, m) => f && m ? gn(n.value, e, "", f, m) : "",
    bm: (f, m) => f && m ? gn(n.value, e, f, "", m) : "",
    bem: (f, m, y) => f && m && y ? gn(n.value, e, f, m, y) : "",
    is: (f, ...m) => {
      const y = m.length >= 1 ? m[0] : !0;
      return f && y ? `${Pm}${f}` : "";
    },
    cssVar: (f) => {
      const m = {};
      for (const y in f)
        f[y] && (m[`--${n.value}-${y}`] = f[y]);
      return m;
    },
    cssVarName: (f) => `--${n.value}-${f}`,
    cssVarBlock: (f) => {
      const m = {};
      for (const y in f)
        f[y] && (m[`--${n.value}-${e}-${y}`] = f[y]);
      return m;
    },
    cssVarBlockName: (f) => `--${n.value}-${e}-${f}`
  };
}, Am = _r({
  type: he(Boolean),
  default: null
}), Mm = _r({
  type: he(Function)
}), $i = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: Am,
    [n]: Mm
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
      const v = ye(), { emit: h } = v, p = v.props, f = _(() => Mt(p[n])), m = _(() => p[e] === null), y = ($) => {
        s.value !== !0 && (s.value = !0, a && (a.value = $), Mt(c) && c($));
      }, w = ($) => {
        s.value !== !1 && (s.value = !1, a && (a.value = $), Mt(d) && d($));
      }, C = ($) => {
        if (p.disabled === !0 || Mt(u) && !u())
          return;
        const x = f.value && Ie;
        x && h(t, !0), (m.value || !x) && y($);
      }, b = ($) => {
        if (p.disabled === !0 || !Ie)
          return;
        const x = f.value && Ie;
        x && h(t, !1), (m.value || !x) && w($);
      }, S = ($) => {
        Hn($) && (p.disabled && $ ? f.value && h(t, !1) : s.value !== $ && ($ ? y() : w()));
      }, T = () => {
        s.value ? b() : C();
      };
      return Y(() => p[e], S), i && v.appContext.config.globalProperties.$route !== void 0 && Y(() => ({
        ...v.proxy.$route
      }), () => {
        i.value && s.value && b();
      }), Ae(() => {
        S(p[e]);
      }), {
        hide: b,
        show: C,
        toggle: T,
        hasUpdateHandler: f
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
$i("modelValue");
const Ei = (e) => {
  const t = ye();
  return _(() => {
    var n, o;
    return (o = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
};
var at = "top", $t = "bottom", Et = "right", st = "left", Rl = "auto", xo = [at, $t, Et, st], Kn = "start", _o = "end", Im = "clippingParents", Ti = "viewport", so = "popper", Lm = "reference", ja = xo.reduce(function(e, t) {
  return e.concat([t + "-" + Kn, t + "-" + _o]);
}, []), $r = [].concat(xo, [Rl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Kn, t + "-" + _o]);
}, []), Rm = "beforeRead", Nm = "read", Fm = "afterRead", Bm = "beforeMain", zm = "main", Hm = "afterMain", Dm = "beforeWrite", Vm = "write", Km = "afterWrite", Wm = [Rm, Nm, Fm, Bm, zm, Hm, Dm, Vm, Km];
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
function Wn(e) {
  var t = Bt(e).Element;
  return e instanceof t || e instanceof Element;
}
function _t(e) {
  var t = Bt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Nl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Bt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function jm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
    !_t(l) || !jt(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(s) {
      var a = r[s];
      a === !1 ? l.removeAttribute(s) : l.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function Um(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], l = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = s.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !_t(r) || !jt(r) || (Object.assign(r.style, a), Object.keys(l).forEach(function(i) {
        r.removeAttribute(i);
      }));
    });
  };
}
var ki = { name: "applyStyles", enabled: !0, phase: "write", fn: jm, effect: Um, requires: ["computeStyles"] };
function Vt(e) {
  return e.split("-")[0];
}
var Sn = Math.max, fr = Math.min, jn = Math.round;
function Un(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (_t(e) && t) {
    var l = e.offsetHeight, s = e.offsetWidth;
    s > 0 && (o = jn(n.width) / s || 1), l > 0 && (r = jn(n.height) / l || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function Fl(e) {
  var t = Un(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Oi(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Nl(n)) {
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
function qm(e) {
  return ["table", "td", "th"].indexOf(jt(e)) >= 0;
}
function pn(e) {
  return ((Wn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Er(e) {
  return jt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Nl(e) ? e.host : null) || pn(e);
}
function Ua(e) {
  return !_t(e) || tn(e).position === "fixed" ? null : e.offsetParent;
}
function Gm(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && _t(e)) {
    var o = tn(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Er(e);
  for (Nl(r) && (r = r.host); _t(r) && ["html", "body"].indexOf(jt(r)) < 0; ) {
    var l = tn(r);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Po(e) {
  for (var t = Bt(e), n = Ua(e); n && qm(n) && tn(n).position === "static"; )
    n = Ua(n);
  return n && (jt(n) === "html" || jt(n) === "body" && tn(n).position === "static") ? t : n || Gm(e) || t;
}
function Bl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fo(e, t, n) {
  return Sn(e, fr(t, n));
}
function Ym(e, t, n) {
  var o = fo(e, t, n);
  return o > n ? n : o;
}
function xi() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Pi(e) {
  return Object.assign({}, xi(), e);
}
function Ai(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Xm = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Pi(typeof e != "number" ? e : Ai(e, xo));
};
function Qm(e) {
  var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, s = n.modifiersData.popperOffsets, a = Vt(n.placement), i = Bl(a), u = [st, Et].indexOf(a) >= 0, c = u ? "height" : "width";
  if (!(!l || !s)) {
    var d = Xm(r.padding, n), v = Fl(l), h = i === "y" ? at : st, p = i === "y" ? $t : Et, f = n.rects.reference[c] + n.rects.reference[i] - s[i] - n.rects.popper[c], m = s[i] - n.rects.reference[i], y = Po(l), w = y ? i === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, C = f / 2 - m / 2, b = d[h], S = w - v[c] - d[p], T = w / 2 - v[c] / 2 + C, $ = fo(b, T, S), x = i;
    n.modifiersData[o] = (t = {}, t[x] = $, t.centerOffset = $ - T, t);
  }
}
function Zm(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !Oi(t.elements.popper, r) || (t.elements.arrow = r));
}
var Jm = { name: "arrow", enabled: !0, phase: "main", fn: Qm, effect: Zm, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function qn(e) {
  return e.split("-")[1];
}
var e0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function t0(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: jn(t * r) / r || 0, y: jn(n * r) / r || 0 };
}
function qa(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, s = e.offsets, a = e.position, i = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, v = s.x, h = v === void 0 ? 0 : v, p = s.y, f = p === void 0 ? 0 : p, m = typeof c == "function" ? c({ x: h, y: f }) : { x: h, y: f };
  h = m.x, f = m.y;
  var y = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), C = st, b = at, S = window;
  if (u) {
    var T = Po(n), $ = "clientHeight", x = "clientWidth";
    if (T === Bt(n) && (T = pn(n), tn(T).position !== "static" && a === "absolute" && ($ = "scrollHeight", x = "scrollWidth")), T = T, r === at || (r === st || r === Et) && l === _o) {
      b = $t;
      var N = d && T === S && S.visualViewport ? S.visualViewport.height : T[$];
      f -= N - o.height, f *= i ? 1 : -1;
    }
    if (r === st || (r === at || r === $t) && l === _o) {
      C = Et;
      var H = d && T === S && S.visualViewport ? S.visualViewport.width : T[x];
      h -= H - o.width, h *= i ? 1 : -1;
    }
  }
  var B = Object.assign({ position: a }, u && e0), I = c === !0 ? t0({ x: h, y: f }) : { x: h, y: f };
  if (h = I.x, f = I.y, i) {
    var Q;
    return Object.assign({}, B, (Q = {}, Q[b] = w ? "0" : "", Q[C] = y ? "0" : "", Q.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + f + "px)" : "translate3d(" + h + "px, " + f + "px, 0)", Q));
  }
  return Object.assign({}, B, (t = {}, t[b] = w ? f + "px" : "", t[C] = y ? h + "px" : "", t.transform = "", t));
}
function n0(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, l = n.adaptive, s = l === void 0 ? !0 : l, a = n.roundOffsets, i = a === void 0 ? !0 : a, u = { placement: Vt(t.placement), variation: qn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, qa(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, qa(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Mi = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: n0, data: {} }, Mo = { passive: !0 };
function o0(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? !0 : r, s = o.resize, a = s === void 0 ? !0 : s, i = Bt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Mo);
  }), a && i.addEventListener("resize", n.update, Mo), function() {
    l && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Mo);
    }), a && i.removeEventListener("resize", n.update, Mo);
  };
}
var Ii = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: o0, data: {} }, r0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Vo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return r0[t];
  });
}
var l0 = { start: "end", end: "start" };
function Ga(e) {
  return e.replace(/start|end/g, function(t) {
    return l0[t];
  });
}
function zl(e) {
  var t = Bt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Hl(e) {
  return Un(pn(e)).left + zl(e).scrollLeft;
}
function a0(e) {
  var t = Bt(e), n = pn(e), o = t.visualViewport, r = n.clientWidth, l = n.clientHeight, s = 0, a = 0;
  return o && (r = o.width, l = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = o.offsetLeft, a = o.offsetTop)), { width: r, height: l, x: s + Hl(e), y: a };
}
function s0(e) {
  var t, n = pn(e), o = zl(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = Sn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Sn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + Hl(e), i = -o.scrollTop;
  return tn(r || n).direction === "rtl" && (a += Sn(n.clientWidth, r ? r.clientWidth : 0) - l), { width: l, height: s, x: a, y: i };
}
function Dl(e) {
  var t = tn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Li(e) {
  return ["html", "body", "#document"].indexOf(jt(e)) >= 0 ? e.ownerDocument.body : _t(e) && Dl(e) ? e : Li(Er(e));
}
function po(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Li(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Bt(o), s = r ? [l].concat(l.visualViewport || [], Dl(o) ? o : []) : o, a = t.concat(s);
  return r ? a : a.concat(po(Er(s)));
}
function Jr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function i0(e) {
  var t = Un(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Ya(e, t) {
  return t === Ti ? Jr(a0(e)) : Wn(t) ? i0(t) : Jr(s0(pn(e)));
}
function u0(e) {
  var t = po(Er(e)), n = ["absolute", "fixed"].indexOf(tn(e).position) >= 0, o = n && _t(e) ? Po(e) : e;
  return Wn(o) ? t.filter(function(r) {
    return Wn(r) && Oi(r, o) && jt(r) !== "body";
  }) : [];
}
function c0(e, t, n) {
  var o = t === "clippingParents" ? u0(e) : [].concat(t), r = [].concat(o, [n]), l = r[0], s = r.reduce(function(a, i) {
    var u = Ya(e, i);
    return a.top = Sn(u.top, a.top), a.right = fr(u.right, a.right), a.bottom = fr(u.bottom, a.bottom), a.left = Sn(u.left, a.left), a;
  }, Ya(e, l));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Ri(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Vt(o) : null, l = o ? qn(o) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, i;
  switch (r) {
    case at:
      i = { x: s, y: t.y - n.height };
      break;
    case $t:
      i = { x: s, y: t.y + t.height };
      break;
    case Et:
      i = { x: t.x + t.width, y: a };
      break;
    case st:
      i = { x: t.x - n.width, y: a };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = r ? Bl(r) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (l) {
      case Kn:
        i[u] = i[u] - (t[c] / 2 - n[c] / 2);
        break;
      case _o:
        i[u] = i[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return i;
}
function $o(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.boundary, s = l === void 0 ? Im : l, a = n.rootBoundary, i = a === void 0 ? Ti : a, u = n.elementContext, c = u === void 0 ? so : u, d = n.altBoundary, v = d === void 0 ? !1 : d, h = n.padding, p = h === void 0 ? 0 : h, f = Pi(typeof p != "number" ? p : Ai(p, xo)), m = c === so ? Lm : so, y = e.rects.popper, w = e.elements[v ? m : c], C = c0(Wn(w) ? w : w.contextElement || pn(e.elements.popper), s, i), b = Un(e.elements.reference), S = Ri({ reference: b, element: y, strategy: "absolute", placement: r }), T = Jr(Object.assign({}, y, S)), $ = c === so ? T : b, x = { top: C.top - $.top + f.top, bottom: $.bottom - C.bottom + f.bottom, left: C.left - $.left + f.left, right: $.right - C.right + f.right }, N = e.modifiersData.offset;
  if (c === so && N) {
    var H = N[r];
    Object.keys(x).forEach(function(B) {
      var I = [Et, $t].indexOf(B) >= 0 ? 1 : -1, Q = [at, $t].indexOf(B) >= 0 ? "y" : "x";
      x[B] += H[Q] * I;
    });
  }
  return x;
}
function d0(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, s = n.padding, a = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? $r : i, c = qn(o), d = c ? a ? ja : ja.filter(function(p) {
    return qn(p) === c;
  }) : xo, v = d.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  v.length === 0 && (v = d);
  var h = v.reduce(function(p, f) {
    return p[f] = $o(e, { placement: f, boundary: r, rootBoundary: l, padding: s })[Vt(f)], p;
  }, {});
  return Object.keys(h).sort(function(p, f) {
    return h[p] - h[f];
  });
}
function f0(e) {
  if (Vt(e) === Rl)
    return [];
  var t = Vo(e);
  return [Ga(e), t, Ga(t)];
}
function p0(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, l = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !0 : s, i = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, v = n.altBoundary, h = n.flipVariations, p = h === void 0 ? !0 : h, f = n.allowedAutoPlacements, m = t.options.placement, y = Vt(m), w = y === m, C = i || (w || !p ? [Vo(m)] : f0(m)), b = [m].concat(C).reduce(function(me, _e) {
      return me.concat(Vt(_e) === Rl ? d0(t, { placement: _e, boundary: c, rootBoundary: d, padding: u, flipVariations: p, allowedAutoPlacements: f }) : _e);
    }, []), S = t.rects.reference, T = t.rects.popper, $ = /* @__PURE__ */ new Map(), x = !0, N = b[0], H = 0; H < b.length; H++) {
      var B = b[H], I = Vt(B), Q = qn(B) === Kn, ee = [at, $t].indexOf(I) >= 0, oe = ee ? "width" : "height", re = $o(t, { placement: B, boundary: c, rootBoundary: d, altBoundary: v, padding: u }), W = ee ? Q ? Et : st : Q ? $t : at;
      S[oe] > T[oe] && (W = Vo(W));
      var ne = Vo(W), A = [];
      if (l && A.push(re[I] <= 0), a && A.push(re[W] <= 0, re[ne] <= 0), A.every(function(me) {
        return me;
      })) {
        N = B, x = !1;
        break;
      }
      $.set(B, A);
    }
    if (x)
      for (var j = p ? 3 : 1, le = function(me) {
        var _e = b.find(function(Te) {
          var Le = $.get(Te);
          if (Le)
            return Le.slice(0, me).every(function(we) {
              return we;
            });
        });
        if (_e)
          return N = _e, "break";
      }, ue = j; ue > 0; ue--) {
        var ge = le(ue);
        if (ge === "break")
          break;
      }
    t.placement !== N && (t.modifiersData[o]._skip = !0, t.placement = N, t.reset = !0);
  }
}
var v0 = { name: "flip", enabled: !0, phase: "main", fn: p0, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Xa(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Qa(e) {
  return [at, Et, $t, st].some(function(t) {
    return e[t] >= 0;
  });
}
function h0(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, s = $o(t, { elementContext: "reference" }), a = $o(t, { altBoundary: !0 }), i = Xa(s, o), u = Xa(a, r, l), c = Qa(i), d = Qa(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: c, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": c, "data-popper-escaped": d });
}
var g0 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: h0 };
function m0(e, t, n) {
  var o = Vt(e), r = [st, at].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = l[0], a = l[1];
  return s = s || 0, a = (a || 0) * r, [st, Et].indexOf(o) >= 0 ? { x: a, y: s } : { x: s, y: a };
}
function b0(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [0, 0] : r, s = $r.reduce(function(c, d) {
    return c[d] = m0(d, t.rects, l), c;
  }, {}), a = s[t.placement], i = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
}
var y0 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: b0 };
function w0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ri({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var Ni = { name: "popperOffsets", enabled: !0, phase: "read", fn: w0, data: {} };
function C0(e) {
  return e === "x" ? "y" : "x";
}
function S0(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !1 : s, i = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, v = n.tether, h = v === void 0 ? !0 : v, p = n.tetherOffset, f = p === void 0 ? 0 : p, m = $o(t, { boundary: i, rootBoundary: u, padding: d, altBoundary: c }), y = Vt(t.placement), w = qn(t.placement), C = !w, b = Bl(y), S = C0(b), T = t.modifiersData.popperOffsets, $ = t.rects.reference, x = t.rects.popper, N = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f, H = typeof N == "number" ? { mainAxis: N, altAxis: N } : Object.assign({ mainAxis: 0, altAxis: 0 }, N), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = { x: 0, y: 0 };
  if (T) {
    if (l) {
      var Q, ee = b === "y" ? at : st, oe = b === "y" ? $t : Et, re = b === "y" ? "height" : "width", W = T[b], ne = W + m[ee], A = W - m[oe], j = h ? -x[re] / 2 : 0, le = w === Kn ? $[re] : x[re], ue = w === Kn ? -x[re] : -$[re], ge = t.elements.arrow, me = h && ge ? Fl(ge) : { width: 0, height: 0 }, _e = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : xi(), Te = _e[ee], Le = _e[oe], we = fo(0, $[re], me[re]), Ne = C ? $[re] / 2 - j - we - Te - H.mainAxis : le - we - Te - H.mainAxis, Pe = C ? -$[re] / 2 + j + we + Le + H.mainAxis : ue + we + Le + H.mainAxis, Be = t.elements.arrow && Po(t.elements.arrow), Ot = Be ? b === "y" ? Be.clientTop || 0 : Be.clientLeft || 0 : 0, ht = (Q = B == null ? void 0 : B[b]) != null ? Q : 0, gt = W + Ne - ht - Ot, mt = W + Pe - ht, bt = fo(h ? fr(ne, gt) : ne, W, h ? Sn(A, mt) : A);
      T[b] = bt, I[b] = bt - W;
    }
    if (a) {
      var yt, ut = b === "x" ? at : st, qt = b === "x" ? $t : Et, Ze = T[S], wt = S === "y" ? "height" : "width", ct = Ze + m[ut], zt = Ze - m[qt], Ct = [at, st].indexOf(y) !== -1, z = (yt = B == null ? void 0 : B[S]) != null ? yt : 0, J = Ct ? ct : Ze - $[wt] - x[wt] - z + H.altAxis, Ee = Ct ? Ze + $[wt] + x[wt] - z - H.altAxis : zt, dt = h && Ct ? Ym(J, Ze, Ee) : fo(h ? J : ct, Ze, h ? Ee : zt);
      T[S] = dt, I[S] = dt - Ze;
    }
    t.modifiersData[o] = I;
  }
}
var _0 = { name: "preventOverflow", enabled: !0, phase: "main", fn: S0, requiresIfExists: ["offset"] };
function $0(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function E0(e) {
  return e === Bt(e) || !_t(e) ? zl(e) : $0(e);
}
function T0(e) {
  var t = e.getBoundingClientRect(), n = jn(t.width) / e.offsetWidth || 1, o = jn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function k0(e, t, n) {
  n === void 0 && (n = !1);
  var o = _t(t), r = _t(t) && T0(t), l = pn(t), s = Un(e, r), a = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((jt(t) !== "body" || Dl(l)) && (a = E0(t)), _t(t) ? (i = Un(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = Hl(l))), { x: s.left + a.scrollLeft - i.x, y: s.top + a.scrollTop - i.y, width: s.width, height: s.height };
}
function O0(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(l) {
    t.set(l.name, l);
  });
  function r(l) {
    n.add(l.name);
    var s = [].concat(l.requires || [], l.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var i = t.get(a);
        i && r(i);
      }
    }), o.push(l);
  }
  return e.forEach(function(l) {
    n.has(l.name) || r(l);
  }), o;
}
function x0(e) {
  var t = O0(e);
  return Wm.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function P0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function A0(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Za = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Ja() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Vl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? Za : r;
  return function(s, a, i) {
    i === void 0 && (i = l);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Za, l), modifiersData: {}, elements: { reference: s, popper: a }, attributes: {}, styles: {} }, c = [], d = !1, v = { state: u, setOptions: function(f) {
      var m = typeof f == "function" ? f(u.options) : f;
      p(), u.options = Object.assign({}, l, u.options, m), u.scrollParents = { reference: Wn(s) ? po(s) : s.contextElement ? po(s.contextElement) : [], popper: po(a) };
      var y = x0(A0([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = y.filter(function(w) {
        return w.enabled;
      }), h(), v.update();
    }, forceUpdate: function() {
      if (!d) {
        var f = u.elements, m = f.reference, y = f.popper;
        if (Ja(m, y)) {
          u.rects = { reference: k0(m, Po(y), u.options.strategy === "fixed"), popper: Fl(y) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(x) {
            return u.modifiersData[x.name] = Object.assign({}, x.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var C = u.orderedModifiers[w], b = C.fn, S = C.options, T = S === void 0 ? {} : S, $ = C.name;
            typeof b == "function" && (u = b({ state: u, options: T, name: $, instance: v }) || u);
          }
        }
      }
    }, update: P0(function() {
      return new Promise(function(f) {
        v.forceUpdate(), f(u);
      });
    }), destroy: function() {
      p(), d = !0;
    } };
    if (!Ja(s, a))
      return v;
    v.setOptions(i).then(function(f) {
      !d && i.onFirstUpdate && i.onFirstUpdate(f);
    });
    function h() {
      u.orderedModifiers.forEach(function(f) {
        var m = f.name, y = f.options, w = y === void 0 ? {} : y, C = f.effect;
        if (typeof C == "function") {
          var b = C({ state: u, name: m, instance: v, options: w }), S = function() {
          };
          c.push(b || S);
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
Vl();
var M0 = [Ii, Ni, Mi, ki];
Vl({ defaultModifiers: M0 });
var I0 = [Ii, Ni, Mi, ki, y0, v0, _0, Jm, g0], Fi = Vl({ defaultModifiers: I0 });
const L0 = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = R0(i);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, r = _(() => {
    const { onFirstUpdate: i, placement: u, strategy: c, modifiers: d } = g(n);
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
        position: g(r).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), a = () => {
    l.value && (l.value.destroy(), l.value = void 0);
  };
  return Y(r, (i) => {
    const u = g(l);
    u && u.setOptions(i);
  }, {
    deep: !0
  }), Y([e, t], ([i, u]) => {
    a(), !(!i || !u) && (l.value = Fi(i, u, g(r)));
  }), Nt(() => {
    a();
  }), {
    state: _(() => {
      var i;
      return { ...((i = g(l)) == null ? void 0 : i.state) || {} };
    }),
    styles: _(() => g(s).styles),
    attributes: _(() => g(s).attributes),
    update: () => {
      var i;
      return (i = g(l)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = g(l)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: _(() => g(l))
  };
};
function R0(e) {
  const t = Object.keys(e.elements), n = cr(t.map((r) => [r, e.styles[r] || {}])), o = cr(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
function es() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return wl(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const el = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, N0 = Symbol("elIdInjection"), Bi = () => ye() ? pe(N0, el) : el, zi = (e) => {
  const t = Bi();
  !Ie && t === el && We("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Ll();
  return _(() => g(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let Mn = [];
const ts = (e) => {
  const t = e;
  t.key === Vn.esc && Mn.forEach((n) => n(t));
}, F0 = (e) => {
  Ae(() => {
    Mn.length === 0 && document.addEventListener("keydown", ts), Ie && Mn.push(e);
  }), Nt(() => {
    Mn = Mn.filter((t) => t !== e), Mn.length === 0 && Ie && document.removeEventListener("keydown", ts);
  });
};
let ns;
const Hi = () => {
  const e = Ll(), t = Bi(), n = _(() => `${e.value}-popper-container-${t.prefix}`), o = _(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, B0 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, z0 = () => {
  const { id: e, selector: t } = Hi();
  return vl(() => {
    Ie && (process.env.NODE_ENV === "test" || !ns && !document.body.querySelector(t.value)) && (ns = B0(e.value));
  }), {
    id: e,
    selector: t
  };
}, H0 = xe({
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
}), Di = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: l } = es(), {
    registerTimeout: s,
    cancelTimeout: a
  } = es();
  return {
    onOpen: (c) => {
      l(() => {
        o(c);
        const d = g(n);
        Re(d) && d > 0 && s(() => {
          r(c);
        }, d);
      }, g(e));
    },
    onClose: (c) => {
      a(), l(() => {
        r(c);
      }, g(t));
    }
  };
}, Vi = Symbol("elForwardRef"), D0 = (e) => {
  it(Vi, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, V0 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), os = k(0), K0 = 2e3, Ki = Symbol("zIndexContextKey"), Wi = (e) => {
  const t = e || (ye() ? pe(Ki, void 0) : void 0), n = _(() => {
    const l = g(t);
    return Re(l) ? l : K0;
  }), o = _(() => n.value + os.value);
  return {
    initialZIndex: n,
    currentZIndex: o,
    nextZIndex: () => (os.value++, o.value)
  };
};
function W0(e) {
  const t = k();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: l, value: s } = e.value;
    if (r == null || l == null)
      return;
    const a = s.slice(0, Math.max(0, r)), i = s.slice(Math.max(0, l));
    t.value = {
      selectionStart: r,
      selectionEnd: l,
      value: s,
      beforeTxt: a,
      afterTxt: i
    };
  }
  function o() {
    if (e.value == null || t.value == null)
      return;
    const { value: r } = e.value, { beforeTxt: l, afterTxt: s, selectionStart: a } = t.value;
    if (l == null || s == null || a == null)
      return;
    let i = r.length;
    if (r.endsWith(s))
      i = r.length - s.length;
    else if (r.startsWith(l))
      i = l.length;
    else {
      const u = l[a - 1], c = r.indexOf(u, a - 1);
      c !== -1 && (i = c + 1);
    }
    e.value.setSelectionRange(i, i);
  }
  return [n, o];
}
const eo = _r({
  type: String,
  values: Oo,
  required: !1
}), ji = Symbol("size"), j0 = () => {
  const e = pe(ji, {});
  return _(() => g(e.size) || "");
};
function U0(e, { afterFocus: t, afterBlur: n } = {}) {
  const o = ye(), { emit: r } = o, l = Cn(), s = k(!1), a = (c) => {
    s.value || (s.value = !0, r("focus", c), t == null || t());
  }, i = (c) => {
    var d;
    c.relatedTarget && ((d = l.value) != null && d.contains(c.relatedTarget)) || (s.value = !1, r("blur", c), n == null || n());
  }, u = () => {
    var c;
    (c = e.value) == null || c.focus();
  };
  return Y(l, (c) => {
    c && c.setAttribute("tabindex", "-1");
  }), en(l, "click", u), {
    wrapperRef: l,
    isFocused: s,
    handleFocus: a,
    handleBlur: i
  };
}
const Ui = Symbol(), pr = k();
function qi(e, t = void 0) {
  const n = ye() ? pe(Ui, pr) : pr;
  return e ? _(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
const q0 = (e, t, n = !1) => {
  var o;
  const r = !!ye(), l = r ? qi() : void 0, s = (o = t == null ? void 0 : t.provide) != null ? o : r ? it : void 0;
  if (!s) {
    We("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const a = _(() => {
    const i = g(e);
    return l != null && l.value ? G0(l.value, i) : i;
  });
  return s(Ui, a), s(Si, _(() => a.value.locale)), s(_i, _(() => a.value.namespace)), s(Ki, _(() => a.value.zIndex)), s(ji, {
    size: _(() => a.value.size || "")
  }), (n || !pr.value) && (pr.value = a.value), a;
}, G0 = (e, t) => {
  var n;
  const o = [.../* @__PURE__ */ new Set([...Wa(e), ...Wa(t)])], r = {};
  for (const l of o)
    r[l] = (n = t[l]) != null ? n : e[l];
  return r;
}, Y0 = xe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: he(Object)
  },
  size: eo,
  button: {
    type: he(Object)
  },
  experimentalFeatures: {
    type: he(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: he(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), X0 = {}, Q0 = D({
  name: "ElConfigProvider",
  props: Y0,
  setup(e, { slots: t }) {
    Y(() => e.message, (o) => {
      Object.assign(X0, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = q0(e);
    return () => U(t, "default", { config: n == null ? void 0 : n.value });
  }
}), Gi = Tt(Q0);
var Ce = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const Z0 = xe({
  size: {
    type: he([Number, String])
  },
  color: {
    type: String
  }
}), J0 = D({
  name: "ElIcon",
  inheritAttrs: !1
}), eb = /* @__PURE__ */ D({
  ...J0,
  props: Z0,
  setup(e) {
    const t = e, n = fe("icon"), o = _(() => {
      const { size: r, color: l } = t;
      return !r && !l ? {} : {
        fontSize: zn(r) ? void 0 : Zr(r),
        "--color": l
      };
    });
    return (r, l) => (E(), P("i", Oe({
      class: g(n).b(),
      style: g(o)
    }, r.$attrs), [
      U(r.$slots, "default")
    ], 16));
  }
});
var tb = /* @__PURE__ */ Ce(eb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Qe = Tt(tb), Kl = Symbol("formContextKey"), vr = Symbol("formItemContextKey"), kn = (e, t = {}) => {
  const n = k(void 0), o = t.prop ? n : Ei("size"), r = t.global ? n : j0(), l = t.form ? { size: void 0 } : pe(Kl, void 0), s = t.formItem ? { size: void 0 } : pe(vr, void 0);
  return _(() => o.value || g(e) || (s == null ? void 0 : s.size) || (l == null ? void 0 : l.size) || r.value || "");
}, Tr = (e) => {
  const t = Ei("disabled"), n = pe(Kl, void 0);
  return _(() => t.value || g(e) || (n == null ? void 0 : n.disabled) || !1);
}, to = () => {
  const e = pe(Kl, void 0), t = pe(vr, void 0);
  return {
    form: e,
    formItem: t
  };
}, Wl = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = k(!1)), o || (o = k(!1));
  const r = k();
  let l;
  const s = _(() => {
    var a;
    return !!(!e.label && t && t.inputIds && ((a = t.inputIds) == null ? void 0 : a.length) <= 1);
  });
  return Ae(() => {
    l = Y([It(e, "id"), n], ([a, i]) => {
      const u = a ?? (i ? void 0 : zi().value);
      u !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(o != null && o.value) && !i && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), Eo(() => {
    l && l(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: s,
    inputId: r
  };
};
let Pt;
const nb = `
  height:0 !important;
  visibility:hidden !important;
  ${bf() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, ob = [
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
function rb(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: ob.map((s) => `${s}:${t.getPropertyValue(s)}`).join(";"), paddingSize: o, borderSize: r, boxSizing: n };
}
function rs(e, t = 1, n) {
  var o;
  Pt || (Pt = document.createElement("textarea"), document.body.appendChild(Pt));
  const { paddingSize: r, borderSize: l, boxSizing: s, contextStyle: a } = rb(e);
  Pt.setAttribute("style", `${a};${nb}`), Pt.value = e.value || e.placeholder || "";
  let i = Pt.scrollHeight;
  const u = {};
  s === "border-box" ? i = i + l : s === "content-box" && (i = i - r), Pt.value = "";
  const c = Pt.scrollHeight - r;
  if (Re(t)) {
    let d = c * t;
    s === "border-box" && (d = d + r + l), i = Math.max(d, i), u.minHeight = `${d}px`;
  }
  if (Re(n)) {
    let d = c * n;
    s === "border-box" && (d = d + r + l), i = Math.min(d, i);
  }
  return u.height = `${i}px`, (o = Pt.parentNode) == null || o.removeChild(Pt), Pt = void 0, u;
}
const lb = xe({
  id: {
    type: String,
    default: void 0
  },
  size: eo,
  disabled: Boolean,
  modelValue: {
    type: he([
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
    type: he([Boolean, Object]),
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
    type: he([Object, Array, String]),
    default: () => Il({})
  }
}), ab = {
  [nt]: (e) => St(e),
  input: (e) => St(e),
  change: (e) => St(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, sb = ["role"], ib = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], ub = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], cb = D({
  name: "ElInput",
  inheritAttrs: !1
}), db = /* @__PURE__ */ D({
  ...cb,
  props: lb,
  emits: ab,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Vu(), l = hr(), s = _(() => {
      const z = {};
      return o.containerRole === "combobox" && (z["aria-haspopup"] = r["aria-haspopup"], z["aria-owns"] = r["aria-owns"], z["aria-expanded"] = r["aria-expanded"]), z;
    }), a = _(() => [
      o.type === "textarea" ? m.b() : f.b(),
      f.m(h.value),
      f.is("disabled", p.value),
      f.is("exceed", me.value),
      {
        [f.b("group")]: l.prepend || l.append,
        [f.bm("group", "append")]: l.append,
        [f.bm("group", "prepend")]: l.prepend,
        [f.m("prefix")]: l.prefix || o.prefixIcon,
        [f.m("suffix")]: l.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [f.bm("suffix", "password-clear")]: j.value && le.value
      },
      r.class
    ]), i = _(() => [
      f.e("wrapper"),
      f.is("focus", H.value)
    ]), u = Em({
      excludeKeys: _(() => Object.keys(s.value))
    }), { form: c, formItem: d } = to(), { inputId: v } = Wl(o, {
      formItemContext: d
    }), h = kn(), p = Tr(), f = fe("input"), m = fe("textarea"), y = Cn(), w = Cn(), C = k(!1), b = k(!1), S = k(!1), T = k(), $ = Cn(o.inputStyle), x = _(() => y.value || w.value), { wrapperRef: N, isFocused: H, handleFocus: B, handleBlur: I } = U0(x, {
      afterBlur() {
        var z;
        o.validateEvent && ((z = d == null ? void 0 : d.validate) == null || z.call(d, "blur").catch((J) => We(J)));
      }
    }), Q = _(() => {
      var z;
      return (z = c == null ? void 0 : c.statusIcon) != null ? z : !1;
    }), ee = _(() => (d == null ? void 0 : d.validateState) || ""), oe = _(() => ee.value && bi[ee.value]), re = _(() => S.value ? Yd : Cd), W = _(() => [
      r.style,
      o.inputStyle
    ]), ne = _(() => [
      o.inputStyle,
      $.value,
      { resize: o.resize }
    ]), A = _(() => Sr(o.modelValue) ? "" : String(o.modelValue)), j = _(() => o.clearable && !p.value && !o.readonly && !!A.value && (H.value || C.value)), le = _(() => o.showPassword && !p.value && !o.readonly && !!A.value && (!!A.value || H.value)), ue = _(() => o.showWordLimit && !!u.value.maxlength && (o.type === "text" || o.type === "textarea") && !p.value && !o.readonly && !o.showPassword), ge = _(() => A.value.length), me = _(() => !!ue.value && ge.value > Number(u.value.maxlength)), _e = _(() => !!l.suffix || !!o.suffixIcon || j.value || o.showPassword || ue.value || !!ee.value && Q.value), [Te, Le] = W0(y);
    Fn(w, (z) => {
      if (Pe(), !ue.value || o.resize !== "both")
        return;
      const J = z[0], { width: Ee } = J.contentRect;
      T.value = {
        right: `calc(100% - ${Ee + 15 + 6}px)`
      };
    });
    const we = () => {
      const { type: z, autosize: J } = o;
      if (!(!Ie || z !== "textarea" || !w.value))
        if (J) {
          const Ee = Rt(J) ? J.minRows : void 0, dt = Rt(J) ? J.maxRows : void 0, Gt = rs(w.value, Ee, dt);
          $.value = {
            overflowY: "hidden",
            ...Gt
          }, ve(() => {
            w.value.offsetHeight, $.value = Gt;
          });
        } else
          $.value = {
            minHeight: rs(w.value).minHeight
          };
    }, Pe = ((z) => {
      let J = !1;
      return () => {
        var Ee;
        if (J || !o.autosize)
          return;
        ((Ee = w.value) == null ? void 0 : Ee.offsetParent) === null || (z(), J = !0);
      };
    })(we), Be = () => {
      const z = x.value, J = o.formatter ? o.formatter(A.value) : A.value;
      !z || z.value === J || (z.value = J);
    }, Ot = async (z) => {
      Te();
      let { value: J } = z.target;
      if (o.formatter && (J = o.parser ? o.parser(J) : J), !b.value) {
        if (J === A.value) {
          Be();
          return;
        }
        n(nt, J), n("input", J), await ve(), Be(), Le();
      }
    }, ht = (z) => {
      n("change", z.target.value);
    }, gt = (z) => {
      n("compositionstart", z), b.value = !0;
    }, mt = (z) => {
      var J;
      n("compositionupdate", z);
      const Ee = (J = z.target) == null ? void 0 : J.value, dt = Ee[Ee.length - 1] || "";
      b.value = !wi(dt);
    }, bt = (z) => {
      n("compositionend", z), b.value && (b.value = !1, Ot(z));
    }, yt = () => {
      S.value = !S.value, ut();
    }, ut = async () => {
      var z;
      await ve(), (z = x.value) == null || z.focus();
    }, qt = () => {
      var z;
      return (z = x.value) == null ? void 0 : z.blur();
    }, Ze = (z) => {
      C.value = !1, n("mouseleave", z);
    }, wt = (z) => {
      C.value = !0, n("mouseenter", z);
    }, ct = (z) => {
      n("keydown", z);
    }, zt = () => {
      var z;
      (z = x.value) == null || z.select();
    }, Ct = () => {
      n(nt, ""), n("change", ""), n("clear"), n("input", "");
    };
    return Y(() => o.modelValue, () => {
      var z;
      ve(() => we()), o.validateEvent && ((z = d == null ? void 0 : d.validate) == null || z.call(d, "change").catch((J) => We(J)));
    }), Y(A, () => Be()), Y(() => o.type, async () => {
      await ve(), Be(), we();
    }), Ae(() => {
      !o.formatter && o.parser && We("ElInput", "If you set the parser, you also need to set the formatter."), Be(), ve(we);
    }), t({
      input: y,
      textarea: w,
      ref: x,
      textareaStyle: ne,
      autosize: It(o, "autosize"),
      focus: ut,
      blur: qt,
      select: zt,
      clear: Ct,
      resizeTextarea: we
    }), (z, J) => Ke((E(), P("div", Oe(g(s), {
      class: g(a),
      style: g(W),
      role: z.containerRole,
      onMouseenter: wt,
      onMouseleave: Ze
    }), [
      q(" input "),
      z.type !== "textarea" ? (E(), P($e, { key: 0 }, [
        q(" prepend slot "),
        z.$slots.prepend ? (E(), P("div", {
          key: 0,
          class: M(g(f).be("group", "prepend"))
        }, [
          U(z.$slots, "prepend")
        ], 2)) : q("v-if", !0),
        R("div", {
          ref_key: "wrapperRef",
          ref: N,
          class: M(g(i))
        }, [
          q(" prefix slot "),
          z.$slots.prefix || z.prefixIcon ? (E(), P("span", {
            key: 0,
            class: M(g(f).e("prefix"))
          }, [
            R("span", {
              class: M(g(f).e("prefix-inner"))
            }, [
              U(z.$slots, "prefix"),
              z.prefixIcon ? (E(), V(g(Qe), {
                key: 0,
                class: M(g(f).e("icon"))
              }, {
                default: F(() => [
                  (E(), V(lt(z.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0)
            ], 2)
          ], 2)) : q("v-if", !0),
          R("input", Oe({
            id: g(v),
            ref_key: "input",
            ref: y,
            class: g(f).e("inner")
          }, g(u), {
            type: z.showPassword ? S.value ? "text" : "password" : z.type,
            disabled: g(p),
            formatter: z.formatter,
            parser: z.parser,
            readonly: z.readonly,
            autocomplete: z.autocomplete,
            tabindex: z.tabindex,
            "aria-label": z.label,
            placeholder: z.placeholder,
            style: z.inputStyle,
            form: o.form,
            onCompositionstart: gt,
            onCompositionupdate: mt,
            onCompositionend: bt,
            onInput: Ot,
            onFocus: J[0] || (J[0] = (...Ee) => g(B) && g(B)(...Ee)),
            onBlur: J[1] || (J[1] = (...Ee) => g(I) && g(I)(...Ee)),
            onChange: ht,
            onKeydown: ct
          }), null, 16, ib),
          q(" suffix slot "),
          g(_e) ? (E(), P("span", {
            key: 1,
            class: M(g(f).e("suffix"))
          }, [
            R("span", {
              class: M(g(f).e("suffix-inner"))
            }, [
              !g(j) || !g(le) || !g(ue) ? (E(), P($e, { key: 0 }, [
                U(z.$slots, "suffix"),
                z.suffixIcon ? (E(), V(g(Qe), {
                  key: 0,
                  class: M(g(f).e("icon"))
                }, {
                  default: F(() => [
                    (E(), V(lt(z.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : q("v-if", !0)
              ], 64)) : q("v-if", !0),
              g(j) ? (E(), V(g(Qe), {
                key: 1,
                class: M([g(f).e("icon"), g(f).e("clear")]),
                onMousedown: Ye(g(yo), ["prevent"]),
                onClick: Ct
              }, {
                default: F(() => [
                  Z(g(bl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : q("v-if", !0),
              g(le) ? (E(), V(g(Qe), {
                key: 2,
                class: M([g(f).e("icon"), g(f).e("password")]),
                onClick: yt
              }, {
                default: F(() => [
                  (E(), V(lt(g(re))))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0),
              g(ue) ? (E(), P("span", {
                key: 3,
                class: M(g(f).e("count"))
              }, [
                R("span", {
                  class: M(g(f).e("count-inner"))
                }, ie(g(ge)) + " / " + ie(g(u).maxlength), 3)
              ], 2)) : q("v-if", !0),
              g(ee) && g(oe) && g(Q) ? (E(), V(g(Qe), {
                key: 4,
                class: M([
                  g(f).e("icon"),
                  g(f).e("validateIcon"),
                  g(f).is("loading", g(ee) === "validating")
                ])
              }, {
                default: F(() => [
                  (E(), V(lt(g(oe))))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0)
            ], 2)
          ], 2)) : q("v-if", !0)
        ], 2),
        q(" append slot "),
        z.$slots.append ? (E(), P("div", {
          key: 1,
          class: M(g(f).be("group", "append"))
        }, [
          U(z.$slots, "append")
        ], 2)) : q("v-if", !0)
      ], 64)) : (E(), P($e, { key: 1 }, [
        q(" textarea "),
        R("textarea", Oe({
          id: g(v),
          ref_key: "textarea",
          ref: w,
          class: g(m).e("inner")
        }, g(u), {
          tabindex: z.tabindex,
          disabled: g(p),
          readonly: z.readonly,
          autocomplete: z.autocomplete,
          style: g(ne),
          "aria-label": z.label,
          placeholder: z.placeholder,
          form: o.form,
          onCompositionstart: gt,
          onCompositionupdate: mt,
          onCompositionend: bt,
          onInput: Ot,
          onFocus: J[2] || (J[2] = (...Ee) => g(B) && g(B)(...Ee)),
          onBlur: J[3] || (J[3] = (...Ee) => g(I) && g(I)(...Ee)),
          onChange: ht,
          onKeydown: ct
        }), null, 16, ub),
        g(ue) ? (E(), P("span", {
          key: 0,
          style: Se(T.value),
          class: M(g(f).e("count"))
        }, ie(g(ge)) + " / " + ie(g(u).maxlength), 7)) : q("v-if", !0)
      ], 64))
    ], 16, sb)), [
      [dn, z.type !== "hidden"]
    ]);
  }
});
var fb = /* @__PURE__ */ Ce(db, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Yi = Tt(fb), In = 4, pb = {
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
}, vb = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Xi = Symbol("scrollbarContextKey"), hb = xe({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), gb = "Thumb", mb = /* @__PURE__ */ D({
  __name: "thumb",
  props: hb,
  setup(e) {
    const t = e, n = pe(Xi), o = fe("scrollbar");
    n || vi(gb, "can not inject scrollbar context");
    const r = k(), l = k(), s = k({}), a = k(!1);
    let i = !1, u = !1, c = Ie ? document.onselectstart : null;
    const d = _(() => pb[t.vertical ? "vertical" : "horizontal"]), v = _(() => vb({
      size: t.size,
      move: t.move,
      bar: d.value
    })), h = _(() => r.value[d.value.offset] ** 2 / n.wrapElement[d.value.scrollSize] / t.ratio / l.value[d.value.offset]), p = (T) => {
      var $;
      if (T.stopPropagation(), T.ctrlKey || [1, 2].includes(T.button))
        return;
      ($ = window.getSelection()) == null || $.removeAllRanges(), m(T);
      const x = T.currentTarget;
      x && (s.value[d.value.axis] = x[d.value.offset] - (T[d.value.client] - x.getBoundingClientRect()[d.value.direction]));
    }, f = (T) => {
      if (!l.value || !r.value || !n.wrapElement)
        return;
      const $ = Math.abs(T.target.getBoundingClientRect()[d.value.direction] - T[d.value.client]), x = l.value[d.value.offset] / 2, N = ($ - x) * 100 * h.value / r.value[d.value.offset];
      n.wrapElement[d.value.scroll] = N * n.wrapElement[d.value.scrollSize] / 100;
    }, m = (T) => {
      T.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", y), document.addEventListener("mouseup", w), c = document.onselectstart, document.onselectstart = () => !1;
    }, y = (T) => {
      if (!r.value || !l.value || i === !1)
        return;
      const $ = s.value[d.value.axis];
      if (!$)
        return;
      const x = (r.value.getBoundingClientRect()[d.value.direction] - T[d.value.client]) * -1, N = l.value[d.value.offset] - $, H = (x - N) * 100 * h.value / r.value[d.value.offset];
      n.wrapElement[d.value.scroll] = H * n.wrapElement[d.value.scrollSize] / 100;
    }, w = () => {
      i = !1, s.value[d.value.axis] = 0, document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", w), S(), u && (a.value = !1);
    }, C = () => {
      u = !1, a.value = !!t.size;
    }, b = () => {
      u = !0, a.value = i;
    };
    Nt(() => {
      S(), document.removeEventListener("mouseup", w);
    });
    const S = () => {
      document.onselectstart !== c && (document.onselectstart = c);
    };
    return en(It(n, "scrollbarElement"), "mousemove", C), en(It(n, "scrollbarElement"), "mouseleave", b), (T, $) => (E(), V(bo, {
      name: g(o).b("fade"),
      persisted: ""
    }, {
      default: F(() => [
        Ke(R("div", {
          ref_key: "instance",
          ref: r,
          class: M([g(o).e("bar"), g(o).is(g(d).key)]),
          onMousedown: f
        }, [
          R("div", {
            ref_key: "thumb",
            ref: l,
            class: M(g(o).e("thumb")),
            style: Se(g(v)),
            onMousedown: p
          }, null, 38)
        ], 34), [
          [dn, T.always || a.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var ls = /* @__PURE__ */ Ce(mb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const bb = xe({
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
}), yb = /* @__PURE__ */ D({
  __name: "bar",
  props: bb,
  setup(e, { expose: t }) {
    const n = e, o = k(0), r = k(0);
    return t({
      handleScroll: (s) => {
        if (s) {
          const a = s.offsetHeight - In, i = s.offsetWidth - In;
          r.value = s.scrollTop * 100 / a * n.ratioY, o.value = s.scrollLeft * 100 / i * n.ratioX;
        }
      }
    }), (s, a) => (E(), P($e, null, [
      Z(ls, {
        move: o.value,
        ratio: s.ratioX,
        size: s.width,
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      Z(ls, {
        move: r.value,
        ratio: s.ratioY,
        size: s.height,
        vertical: "",
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var wb = /* @__PURE__ */ Ce(yb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const Cb = xe({
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
    type: he([String, Object, Array]),
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
}), Sb = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Re)
}, tl = "ElScrollbar", _b = D({
  name: tl
}), $b = /* @__PURE__ */ D({
  ..._b,
  props: Cb,
  emits: Sb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = fe("scrollbar");
    let l, s;
    const a = k(), i = k(), u = k(), c = k("0"), d = k("0"), v = k(), h = k(1), p = k(1), f = _(() => {
      const $ = {};
      return o.height && ($.height = Zr(o.height)), o.maxHeight && ($.maxHeight = Zr(o.maxHeight)), [o.wrapStyle, $];
    }), m = _(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), y = _(() => [r.e("view"), o.viewClass]), w = () => {
      var $;
      i.value && (($ = v.value) == null || $.handleScroll(i.value), n("scroll", {
        scrollTop: i.value.scrollTop,
        scrollLeft: i.value.scrollLeft
      }));
    };
    function C($, x) {
      Rt($) ? i.value.scrollTo($) : Re($) && Re(x) && i.value.scrollTo($, x);
    }
    const b = ($) => {
      if (!Re($)) {
        We(tl, "value must be a number");
        return;
      }
      i.value.scrollTop = $;
    }, S = ($) => {
      if (!Re($)) {
        We(tl, "value must be a number");
        return;
      }
      i.value.scrollLeft = $;
    }, T = () => {
      if (!i.value)
        return;
      const $ = i.value.offsetHeight - In, x = i.value.offsetWidth - In, N = $ ** 2 / i.value.scrollHeight, H = x ** 2 / i.value.scrollWidth, B = Math.max(N, o.minSize), I = Math.max(H, o.minSize);
      h.value = N / ($ - N) / (B / ($ - B)), p.value = H / (x - H) / (I / (x - I)), d.value = B + In < $ ? `${B}px` : "", c.value = I + In < x ? `${I}px` : "";
    };
    return Y(() => o.noresize, ($) => {
      $ ? (l == null || l(), s == null || s()) : ({ stop: l } = Fn(u, T), s = en("resize", T));
    }, { immediate: !0 }), Y(() => [o.maxHeight, o.height], () => {
      o.native || ve(() => {
        var $;
        T(), i.value && (($ = v.value) == null || $.handleScroll(i.value));
      });
    }), it(Xi, Xn({
      scrollbarElement: a,
      wrapElement: i
    })), Ae(() => {
      o.native || ve(() => {
        T();
      });
    }), hl(() => T()), t({
      wrapRef: i,
      update: T,
      scrollTo: C,
      setScrollTop: b,
      setScrollLeft: S,
      handleScroll: w
    }), ($, x) => (E(), P("div", {
      ref_key: "scrollbarRef",
      ref: a,
      class: M(g(r).b())
    }, [
      R("div", {
        ref_key: "wrapRef",
        ref: i,
        class: M(g(m)),
        style: Se(g(f)),
        onScroll: w
      }, [
        (E(), V(lt($.tag), {
          ref_key: "resizeRef",
          ref: u,
          class: M(g(y)),
          style: Se($.viewStyle)
        }, {
          default: F(() => [
            U($.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      $.native ? q("v-if", !0) : (E(), V(wb, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        height: d.value,
        width: c.value,
        always: $.always,
        "ratio-x": p.value,
        "ratio-y": h.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var Eb = /* @__PURE__ */ Ce($b, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const kr = Tt(Eb), jl = Symbol("popper"), Qi = Symbol("popperContent"), Tb = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Zi = xe({
  role: {
    type: String,
    values: Tb,
    default: "tooltip"
  }
}), kb = D({
  name: "ElPopper",
  inheritAttrs: !1
}), Ob = /* @__PURE__ */ D({
  ...kb,
  props: Zi,
  setup(e, { expose: t }) {
    const n = e, o = k(), r = k(), l = k(), s = k(), a = _(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: l,
      referenceRef: s,
      role: a
    };
    return t(i), it(jl, i), (u, c) => U(u.$slots, "default");
  }
});
var xb = /* @__PURE__ */ Ce(Ob, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const Ji = xe({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Pb = D({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Ab = /* @__PURE__ */ D({
  ...Pb,
  props: Ji,
  setup(e, { expose: t }) {
    const n = e, o = fe("popper"), { arrowOffset: r, arrowRef: l, arrowStyle: s } = pe(Qi, void 0);
    return Y(() => n.arrowOffset, (a) => {
      r.value = a;
    }), Nt(() => {
      l.value = void 0;
    }), t({
      arrowRef: l
    }), (a, i) => (E(), P("span", {
      ref_key: "arrowRef",
      ref: l,
      class: M(g(o).e("arrow")),
      style: Se(g(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Mb = /* @__PURE__ */ Ce(Ab, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const Nr = "ElOnlyChild", Ib = D({
  name: Nr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = pe(Vi), l = V0((o = r == null ? void 0 : r.setForwardRef) != null ? o : yo);
    return () => {
      var s;
      const a = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!a)
        return null;
      if (a.length > 1)
        return We(Nr, "requires exact only one valid child."), null;
      const i = eu(a);
      return i ? Ke(Ku(i, n), [[l]]) : (We(Nr, "no valid child node found"), null);
    };
  }
});
function eu(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Rt(n))
      switch (n.type) {
        case Rs:
          continue;
        case Ls:
        case "svg":
          return as(n);
        case $e:
          return eu(n.children);
        default:
          return n;
      }
    return as(n);
  }
  return null;
}
function as(e) {
  const t = fe("only-child");
  return Z("span", {
    class: t.e("content")
  }, [e]);
}
const tu = xe({
  virtualRef: {
    type: he(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: he(Function)
  },
  onMouseleave: {
    type: he(Function)
  },
  onClick: {
    type: he(Function)
  },
  onKeydown: {
    type: he(Function)
  },
  onFocus: {
    type: he(Function)
  },
  onBlur: {
    type: he(Function)
  },
  onContextmenu: {
    type: he(Function)
  },
  id: String,
  open: Boolean
}), Lb = D({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Rb = /* @__PURE__ */ D({
  ...Lb,
  props: tu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = pe(jl, void 0);
    D0(r);
    const l = _(() => a.value ? n.id : void 0), s = _(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), a = _(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = _(() => a.value ? `${n.open}` : void 0);
    let u;
    return Ae(() => {
      Y(() => n.virtualRef, (c) => {
        c && (r.value = un(c));
      }, {
        immediate: !0
      }), Y(r, (c, d) => {
        u == null || u(), u = void 0, Dn(c) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((v) => {
          var h;
          const p = n[v];
          p && (c.addEventListener(v.slice(2).toLowerCase(), p), (h = d == null ? void 0 : d.removeEventListener) == null || h.call(d, v.slice(2).toLowerCase(), p));
        }), u = Y([l, s, a, i], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, p) => {
            Sr(v[p]) ? c.removeAttribute(h) : c.setAttribute(h, v[p]);
          });
        }, { immediate: !0 })), Dn(d) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((v) => d.removeAttribute(v));
      }, {
        immediate: !0
      });
    }), Nt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: r
    }), (c, d) => c.virtualTriggering ? q("v-if", !0) : (E(), V(g(Ib), Oe({ key: 0 }, c.$attrs, {
      "aria-controls": g(l),
      "aria-describedby": g(s),
      "aria-expanded": g(i),
      "aria-haspopup": g(a)
    }), {
      default: F(() => [
        U(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Nb = /* @__PURE__ */ Ce(Rb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Fr = "focus-trap.focus-after-trapped", Br = "focus-trap.focus-after-released", Fb = "focus-trap.focusout-prevented", ss = {
  cancelable: !0,
  bubbles: !1
}, Bb = {
  cancelable: !0,
  bubbles: !1
}, is = "focusAfterTrapped", us = "focusAfterReleased", zb = Symbol("elFocusTrap"), Ul = k(), Or = k(0), ql = k(0);
let Io = 0;
const nu = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, cs = (e, t) => {
  for (const n of e)
    if (!Hb(n, t))
      return n;
}, Hb = (e, t) => {
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
}, Db = (e) => {
  const t = nu(e), n = cs(t, e), o = cs(t.reverse(), e);
  return [n, o];
}, Vb = (e) => e instanceof HTMLInputElement && "select" in e, an = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), ql.value = window.performance.now(), e !== n && Vb(e) && t && e.select();
  }
};
function ds(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Kb = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = ds(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, l;
      e = ds(e, o), (l = (r = e[0]) == null ? void 0 : r.resume) == null || l.call(r);
    }
  };
}, Wb = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (an(o, t), document.activeElement !== n)
      return;
}, fs = Kb(), jb = () => Or.value > ql.value, Lo = () => {
  Ul.value = "pointer", Or.value = window.performance.now();
}, ps = () => {
  Ul.value = "keyboard", Or.value = window.performance.now();
}, Ub = () => (Ae(() => {
  Io === 0 && (document.addEventListener("mousedown", Lo), document.addEventListener("touchstart", Lo), document.addEventListener("keydown", ps)), Io++;
}), Nt(() => {
  Io--, Io <= 0 && (document.removeEventListener("mousedown", Lo), document.removeEventListener("touchstart", Lo), document.removeEventListener("keydown", ps));
}), {
  focusReason: Ul,
  lastUserFocusTimestamp: Or,
  lastAutomatedFocusTimestamp: ql
}), Ro = (e) => new CustomEvent(Fb, {
  ...Bb,
  detail: e
}), qb = D({
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
    is,
    us,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = k();
    let o, r;
    const { focusReason: l } = Ub();
    F0((p) => {
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
      const { key: f, altKey: m, ctrlKey: y, metaKey: w, currentTarget: C, shiftKey: b } = p, { loop: S } = e, T = f === Vn.tab && !m && !y && !w, $ = document.activeElement;
      if (T && $) {
        const x = C, [N, H] = Db(x);
        if (N && H) {
          if (!b && $ === H) {
            const I = Ro({
              focusReason: l.value
            });
            t("focusout-prevented", I), I.defaultPrevented || (p.preventDefault(), S && an(N, !0));
          } else if (b && [N, x].includes($)) {
            const I = Ro({
              focusReason: l.value
            });
            t("focusout-prevented", I), I.defaultPrevented || (p.preventDefault(), S && an(H, !0));
          }
        } else if ($ === x) {
          const I = Ro({
            focusReason: l.value
          });
          t("focusout-prevented", I), I.defaultPrevented || p.preventDefault();
        }
      }
    };
    it(zb, {
      focusTrapRef: n,
      onKeydown: a
    }), Y(() => e.focusTrapEl, (p) => {
      p && (n.value = p);
    }, { immediate: !0 }), Y([n], ([p], [f]) => {
      p && (p.addEventListener("keydown", a), p.addEventListener("focusin", c), p.addEventListener("focusout", d)), f && (f.removeEventListener("keydown", a), f.removeEventListener("focusin", c), f.removeEventListener("focusout", d));
    });
    const i = (p) => {
      t(is, p);
    }, u = (p) => t(us, p), c = (p) => {
      const f = g(n);
      if (!f)
        return;
      const m = p.target, y = p.relatedTarget, w = m && f.contains(m);
      e.trapped || y && f.contains(y) || (o = y), w && t("focusin", p), !s.paused && e.trapped && (w ? r = m : an(r, !0));
    }, d = (p) => {
      const f = g(n);
      if (!(s.paused || !f))
        if (e.trapped) {
          const m = p.relatedTarget;
          !Sr(m) && !f.contains(m) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const y = Ro({
                focusReason: l.value
              });
              t("focusout-prevented", y), y.defaultPrevented || an(r, !0);
            }
          }, 0);
        } else {
          const m = p.target;
          m && f.contains(m) || t("focusout", p);
        }
    };
    async function v() {
      await ve();
      const p = g(n);
      if (p) {
        fs.push(s);
        const f = p.contains(document.activeElement) ? o : document.activeElement;
        if (o = f, !p.contains(f)) {
          const y = new Event(Fr, ss);
          p.addEventListener(Fr, i), p.dispatchEvent(y), y.defaultPrevented || ve(() => {
            let w = e.focusStartEl;
            St(w) || (an(w), document.activeElement !== w && (w = "first")), w === "first" && Wb(nu(p), !0), (document.activeElement === f || w === "container") && an(p);
          });
        }
      }
    }
    function h() {
      const p = g(n);
      if (p) {
        p.removeEventListener(Fr, i);
        const f = new CustomEvent(Br, {
          ...ss,
          detail: {
            focusReason: l.value
          }
        });
        p.addEventListener(Br, u), p.dispatchEvent(f), !f.defaultPrevented && (l.value == "keyboard" || !jb() || p.contains(document.activeElement)) && an(o ?? document.body), p.removeEventListener(Br, u), fs.remove(s);
      }
    }
    return Ae(() => {
      e.trapped && v(), Y(() => e.trapped, (p) => {
        p ? v() : h();
      });
    }), Nt(() => {
      e.trapped && h();
    }), {
      onKeydown: a
    };
  }
});
function Gb(e, t, n, o, r, l) {
  return U(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Yb = /* @__PURE__ */ Ce(qb, [["render", Gb], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const Xb = ["fixed", "absolute"], Qb = xe({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: he(Array),
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
    values: $r,
    default: "bottom"
  },
  popperOptions: {
    type: he(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Xb,
    default: "absolute"
  }
}), ou = xe({
  ...Qb,
  id: String,
  style: {
    type: he([String, Array, Object])
  },
  className: {
    type: he([String, Array, Object])
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
    type: he([String, Array, Object])
  },
  popperStyle: {
    type: he([String, Array, Object])
  },
  referenceEl: {
    type: he(Object)
  },
  triggerTargetEl: {
    type: he(Object)
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
}), Zb = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Jb = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, l = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...ty(e), ...t]
  };
  return ny(l, r == null ? void 0 : r.modifiers), l;
}, ey = (e) => {
  if (Ie)
    return un(e);
};
function ty(e) {
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
function ny(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const oy = 0, ry = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = pe(jl, void 0), l = k(), s = k(), a = _(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = _(() => {
    var y;
    const w = g(l), C = (y = g(s)) != null ? y : oy;
    return {
      name: "arrow",
      enabled: !am(w),
      options: {
        element: w,
        padding: C
      }
    };
  }), u = _(() => ({
    onFirstUpdate: () => {
      p();
    },
    ...Jb(e, [
      g(i),
      g(a)
    ])
  })), c = _(() => ey(e.referenceEl) || g(o)), { attributes: d, state: v, styles: h, update: p, forceUpdate: f, instanceRef: m } = L0(c, n, u);
  return Y(m, (y) => t.value = y), Ae(() => {
    Y(() => {
      var y;
      return (y = g(c)) == null ? void 0 : y.getBoundingClientRect();
    }, () => {
      p();
    });
  }), {
    attributes: d,
    arrowRef: l,
    contentRef: n,
    instanceRef: m,
    state: v,
    styles: h,
    role: r,
    forceUpdate: f,
    update: p
  };
}, ly = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = Wi(), l = fe("popper"), s = _(() => g(t).popper), a = k(e.zIndex || r()), i = _(() => [
    l.b(),
    l.is("pure", e.pure),
    l.is(e.effect),
    e.popperClass
  ]), u = _(() => [
    { zIndex: g(a) },
    g(n).popper,
    e.popperStyle || {}
  ]), c = _(() => o.value === "dialog" ? "false" : void 0), d = _(() => g(n).arrow || {});
  return {
    ariaModal: c,
    arrowStyle: d,
    contentAttrs: s,
    contentClass: i,
    contentStyle: u,
    contentZIndex: a,
    updateZIndex: () => {
      a.value = e.zIndex || r();
    }
  };
}, ay = (e, t) => {
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
}, sy = D({
  name: "ElPopperContent"
}), iy = /* @__PURE__ */ D({
  ...sy,
  props: ou,
  emits: Zb,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: l,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: a,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: c
    } = ay(o, n), { attributes: d, arrowRef: v, contentRef: h, styles: p, instanceRef: f, role: m, update: y } = ry(o), {
      ariaModal: w,
      arrowStyle: C,
      contentAttrs: b,
      contentClass: S,
      contentStyle: T,
      updateZIndex: $
    } = ly(o, {
      styles: p,
      attributes: d,
      role: m
    }), x = pe(vr, void 0), N = k();
    it(Qi, {
      arrowStyle: C,
      arrowRef: v,
      arrowOffset: N
    }), x && (x.addInputId || x.removeInputId) && it(vr, {
      ...x,
      addInputId: yo,
      removeInputId: yo
    });
    let H;
    const B = (Q = !0) => {
      y(), Q && $();
    }, I = () => {
      B(!1), o.visible && o.focusOnShow ? l.value = !0 : o.visible === !1 && (l.value = !1);
    };
    return Ae(() => {
      Y(() => o.triggerTargetEl, (Q, ee) => {
        H == null || H(), H = void 0;
        const oe = g(Q || h.value), re = g(ee || h.value);
        Dn(oe) && (H = Y([m, () => o.ariaLabel, w, () => o.id], (W) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ne, A) => {
            Sr(W[A]) ? oe.removeAttribute(ne) : oe.setAttribute(ne, W[A]);
          });
        }, { immediate: !0 })), re !== oe && Dn(re) && ["role", "aria-label", "aria-modal", "id"].forEach((W) => {
          re.removeAttribute(W);
        });
      }, { immediate: !0 }), Y(() => o.visible, I, { immediate: !0 });
    }), Nt(() => {
      H == null || H(), H = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: f,
      updatePopper: B,
      contentStyle: T
    }), (Q, ee) => (E(), P("div", Oe({
      ref_key: "contentRef",
      ref: h
    }, g(b), {
      style: g(T),
      class: g(S),
      tabindex: "-1",
      onMouseenter: ee[0] || (ee[0] = (oe) => Q.$emit("mouseenter", oe)),
      onMouseleave: ee[1] || (ee[1] = (oe) => Q.$emit("mouseleave", oe))
    }), [
      Z(g(Yb), {
        trapped: g(l),
        "trap-on-focus-in": !0,
        "focus-trap-el": g(h),
        "focus-start-el": g(r),
        onFocusAfterTrapped: g(a),
        onFocusAfterReleased: g(s),
        onFocusin: g(i),
        onFocusoutPrevented: g(u),
        onReleaseRequested: g(c)
      }, {
        default: F(() => [
          U(Q.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var uy = /* @__PURE__ */ Ce(iy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const cy = Tt(xb), Gl = Symbol("elTooltip"), Yl = xe({
  ...H0,
  ...ou,
  appendTo: {
    type: he([String, Object])
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
    type: he(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), ru = xe({
  ...tu,
  disabled: Boolean,
  trigger: {
    type: he([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: he(Array),
    default: () => [Vn.enter, Vn.space]
  }
}), {
  useModelToggleProps: dy,
  useModelToggleEmits: fy,
  useModelToggle: py
} = $i("visible"), vy = xe({
  ...Zi,
  ...dy,
  ...Yl,
  ...ru,
  ...Ji,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), hy = [
  ...fy,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], gy = (e, t) => En(e) ? e.includes(t) : e === t, An = (e, t, n) => (o) => {
  gy(g(e), t) && n(o);
}, my = D({
  name: "ElTooltipTrigger"
}), by = /* @__PURE__ */ D({
  ...my,
  props: ru,
  setup(e, { expose: t }) {
    const n = e, o = fe("tooltip"), { controlled: r, id: l, open: s, onOpen: a, onClose: i, onToggle: u } = pe(Gl, void 0), c = k(null), d = () => {
      if (g(r) || n.disabled)
        return !0;
    }, v = It(n, "trigger"), h = Jt(d, An(v, "hover", a)), p = Jt(d, An(v, "hover", i)), f = Jt(d, An(v, "click", (b) => {
      b.button === 0 && u(b);
    })), m = Jt(d, An(v, "focus", a)), y = Jt(d, An(v, "focus", i)), w = Jt(d, An(v, "contextmenu", (b) => {
      b.preventDefault(), u(b);
    })), C = Jt(d, (b) => {
      const { code: S } = b;
      n.triggerKeys.includes(S) && (b.preventDefault(), u(b));
    });
    return t({
      triggerRef: c
    }), (b, S) => (E(), V(g(Nb), {
      id: g(l),
      "virtual-ref": b.virtualRef,
      open: g(s),
      "virtual-triggering": b.virtualTriggering,
      class: M(g(o).e("trigger")),
      onBlur: g(y),
      onClick: g(f),
      onContextmenu: g(w),
      onFocus: g(m),
      onMouseenter: g(h),
      onMouseleave: g(p),
      onKeydown: g(C)
    }, {
      default: F(() => [
        U(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var yy = /* @__PURE__ */ Ce(by, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const wy = D({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Cy = /* @__PURE__ */ D({
  ...wy,
  props: Yl,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Hi(), r = fe("tooltip"), l = k(null), s = k(!1), {
      controlled: a,
      id: i,
      open: u,
      trigger: c,
      onClose: d,
      onOpen: v,
      onShow: h,
      onHide: p,
      onBeforeShow: f,
      onBeforeHide: m
    } = pe(Gl, void 0), y = _(() => n.transition || `${r.namespace.value}-fade-in-linear`), w = _(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    Nt(() => {
      s.value = !0;
    });
    const C = _(() => g(w) ? !0 : g(u)), b = _(() => n.disabled ? !1 : g(u)), S = _(() => n.appendTo || o.value), T = _(() => {
      var W;
      return (W = n.style) != null ? W : {};
    }), $ = _(() => !g(u)), x = () => {
      p();
    }, N = () => {
      if (g(a))
        return !0;
    }, H = Jt(N, () => {
      n.enterable && g(c) === "hover" && v();
    }), B = Jt(N, () => {
      g(c) === "hover" && d();
    }), I = () => {
      var W, ne;
      (ne = (W = l.value) == null ? void 0 : W.updatePopper) == null || ne.call(W), f == null || f();
    }, Q = () => {
      m == null || m();
    }, ee = () => {
      h(), re = sf(_(() => {
        var W;
        return (W = l.value) == null ? void 0 : W.popperContentRef;
      }), () => {
        if (g(a))
          return;
        g(c) !== "hover" && d();
      });
    }, oe = () => {
      n.virtualTriggering || d();
    };
    let re;
    return Y(() => g(u), (W) => {
      W || re == null || re();
    }, {
      flush: "post"
    }), Y(() => n.content, () => {
      var W, ne;
      (ne = (W = l.value) == null ? void 0 : W.updatePopper) == null || ne.call(W);
    }), t({
      contentRef: l
    }), (W, ne) => (E(), V(Wu, {
      disabled: !W.teleported,
      to: g(S)
    }, [
      Z(bo, {
        name: g(y),
        onAfterLeave: x,
        onBeforeEnter: I,
        onAfterEnter: ee,
        onBeforeLeave: Q
      }, {
        default: F(() => [
          g(C) ? Ke((E(), V(g(uy), Oe({
            key: 0,
            id: g(i),
            ref_key: "contentRef",
            ref: l
          }, W.$attrs, {
            "aria-label": W.ariaLabel,
            "aria-hidden": g($),
            "boundaries-padding": W.boundariesPadding,
            "fallback-placements": W.fallbackPlacements,
            "gpu-acceleration": W.gpuAcceleration,
            offset: W.offset,
            placement: W.placement,
            "popper-options": W.popperOptions,
            strategy: W.strategy,
            effect: W.effect,
            enterable: W.enterable,
            pure: W.pure,
            "popper-class": W.popperClass,
            "popper-style": [W.popperStyle, g(T)],
            "reference-el": W.referenceEl,
            "trigger-target-el": W.triggerTargetEl,
            visible: g(b),
            "z-index": W.zIndex,
            onMouseenter: g(H),
            onMouseleave: g(B),
            onBlur: oe,
            onClose: g(d)
          }), {
            default: F(() => [
              s.value ? q("v-if", !0) : U(W.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [dn, g(b)]
          ]) : q("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var Sy = /* @__PURE__ */ Ce(Cy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const _y = ["innerHTML"], $y = { key: 1 }, Ey = D({
  name: "ElTooltip"
}), Ty = /* @__PURE__ */ D({
  ...Ey,
  props: vy,
  emits: hy,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    z0();
    const r = zi(), l = k(), s = k(), a = () => {
      var y;
      const w = g(l);
      w && ((y = w.popperInstanceRef) == null || y.update());
    }, i = k(!1), u = k(), { show: c, hide: d, hasUpdateHandler: v } = py({
      indicator: i,
      toggleReason: u
    }), { onOpen: h, onClose: p } = Di({
      showAfter: It(o, "showAfter"),
      hideAfter: It(o, "hideAfter"),
      autoClose: It(o, "autoClose"),
      open: c,
      close: d
    }), f = _(() => Hn(o.visible) && !v.value);
    it(Gl, {
      controlled: f,
      id: r,
      open: ju(i),
      trigger: It(o, "trigger"),
      onOpen: (y) => {
        h(y);
      },
      onClose: (y) => {
        p(y);
      },
      onToggle: (y) => {
        g(i) ? p(y) : h(y);
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
    }), Y(() => o.disabled, (y) => {
      y && i.value && (i.value = !1);
    });
    const m = (y) => {
      var w, C;
      const b = (C = (w = s.value) == null ? void 0 : w.contentRef) == null ? void 0 : C.popperContentRef, S = (y == null ? void 0 : y.relatedTarget) || document.activeElement;
      return b && b.contains(S);
    };
    return Uu(() => i.value && d()), t({
      popperRef: l,
      contentRef: s,
      isFocusInsideContent: m,
      updatePopper: a,
      onOpen: h,
      onClose: p,
      hide: d
    }), (y, w) => (E(), V(g(cy), {
      ref_key: "popperRef",
      ref: l,
      role: y.role
    }, {
      default: F(() => [
        Z(yy, {
          disabled: y.disabled,
          trigger: y.trigger,
          "trigger-keys": y.triggerKeys,
          "virtual-ref": y.virtualRef,
          "virtual-triggering": y.virtualTriggering
        }, {
          default: F(() => [
            y.$slots.default ? U(y.$slots, "default", { key: 0 }) : q("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        Z(Sy, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": y.ariaLabel,
          "boundaries-padding": y.boundariesPadding,
          content: y.content,
          disabled: y.disabled,
          effect: y.effect,
          enterable: y.enterable,
          "fallback-placements": y.fallbackPlacements,
          "hide-after": y.hideAfter,
          "gpu-acceleration": y.gpuAcceleration,
          offset: y.offset,
          persistent: y.persistent,
          "popper-class": y.popperClass,
          "popper-style": y.popperStyle,
          placement: y.placement,
          "popper-options": y.popperOptions,
          pure: y.pure,
          "raw-content": y.rawContent,
          "reference-el": y.referenceEl,
          "trigger-target-el": y.triggerTargetEl,
          "show-after": y.showAfter,
          strategy: y.strategy,
          teleported: y.teleported,
          transition: y.transition,
          "virtual-triggering": y.virtualTriggering,
          "z-index": y.zIndex,
          "append-to": y.appendTo
        }, {
          default: F(() => [
            U(y.$slots, "content", {}, () => [
              y.rawContent ? (E(), P("span", {
                key: 0,
                innerHTML: y.content
              }, null, 8, _y)) : (E(), P("span", $y, ie(y.content), 1))
            ]),
            y.showArrow ? (E(), V(g(Mb), {
              key: 0,
              "arrow-offset": y.arrowOffset
            }, null, 8, ["arrow-offset"])) : q("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var ky = /* @__PURE__ */ Ce(Ty, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const lu = Tt(ky), au = Symbol("buttonGroupContextKey"), Oy = (e, t) => {
  Ci({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, _(() => e.type === "text"));
  const n = pe(au, void 0), o = qi("button"), { form: r } = to(), l = kn(_(() => n == null ? void 0 : n.size)), s = Tr(), a = k(), i = hr(), u = _(() => e.type || (n == null ? void 0 : n.type) || ""), c = _(() => {
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
      if ((m == null ? void 0 : m.type) === Ls) {
        const y = m.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(y.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: l,
    _type: u,
    _ref: a,
    _props: d,
    shouldAddSpace: v,
    handleClick: (p) => {
      e.nativeType === "reset" && (r == null || r.resetFields()), t("click", p);
    }
  };
}, xy = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Py = ["button", "submit", "reset"], nl = xe({
  size: eo,
  disabled: Boolean,
  type: {
    type: String,
    values: xy,
    default: ""
  },
  icon: {
    type: Wt
  },
  nativeType: {
    type: String,
    values: Py,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Wt,
    default: () => yl
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
    type: he([String, Object]),
    default: "button"
  }
}), Ay = {
  click: (e) => e instanceof MouseEvent
};
function je(e, t) {
  My(e) && (e = "100%");
  var n = Iy(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function No(e) {
  return Math.min(1, Math.max(0, e));
}
function My(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Iy(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function su(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Fo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function yn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Ly(e, t, n) {
  return {
    r: je(e, 255) * 255,
    g: je(t, 255) * 255,
    b: je(n, 255) * 255
  };
}
function vs(e, t, n) {
  e = je(e, 255), t = je(t, 255), n = je(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), l = 0, s = 0, a = (o + r) / 2;
  if (o === r)
    s = 0, l = 0;
  else {
    var i = o - r;
    switch (s = a > 0.5 ? i / (2 - o - r) : i / (o + r), o) {
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
  return { h: l, s, l: a };
}
function zr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Ry(e, t, n) {
  var o, r, l;
  if (e = je(e, 360), t = je(t, 100), n = je(n, 100), t === 0)
    r = n, l = n, o = n;
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
    o = zr(a, s, e + 1 / 3), r = zr(a, s, e), l = zr(a, s, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: l * 255 };
}
function hs(e, t, n) {
  e = je(e, 255), t = je(t, 255), n = je(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), l = 0, s = o, a = o - r, i = o === 0 ? 0 : a / o;
  if (o === r)
    l = 0;
  else {
    switch (o) {
      case e:
        l = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        l = (n - e) / a + 2;
        break;
      case n:
        l = (e - t) / a + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s: i, v: s };
}
function Ny(e, t, n) {
  e = je(e, 360) * 6, t = je(t, 100), n = je(n, 100);
  var o = Math.floor(e), r = e - o, l = n * (1 - t), s = n * (1 - r * t), a = n * (1 - (1 - r) * t), i = o % 6, u = [n, s, l, l, a, n][i], c = [a, n, n, s, l, l][i], d = [l, l, a, n, n, s][i];
  return { r: u * 255, g: c * 255, b: d * 255 };
}
function gs(e, t, n, o) {
  var r = [
    yn(Math.round(e).toString(16)),
    yn(Math.round(t).toString(16)),
    yn(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function Fy(e, t, n, o, r) {
  var l = [
    yn(Math.round(e).toString(16)),
    yn(Math.round(t).toString(16)),
    yn(Math.round(n).toString(16)),
    yn(By(o))
  ];
  return r && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function By(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ms(e) {
  return ft(e) / 255;
}
function ft(e) {
  return parseInt(e, 16);
}
function zy(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var ol = {
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
function Hy(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, l = null, s = !1, a = !1;
  return typeof e == "string" && (e = Ky(e)), typeof e == "object" && (Qt(e.r) && Qt(e.g) && Qt(e.b) ? (t = Ly(e.r, e.g, e.b), s = !0, a = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Qt(e.h) && Qt(e.s) && Qt(e.v) ? (o = Fo(e.s), r = Fo(e.v), t = Ny(e.h, o, r), s = !0, a = "hsv") : Qt(e.h) && Qt(e.s) && Qt(e.l) && (o = Fo(e.s), l = Fo(e.l), t = Ry(e.h, o, l), s = !0, a = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = su(n), {
    ok: s,
    format: e.format || a,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Dy = "[-\\+]?\\d+%?", Vy = "[-\\+]?\\d*\\.\\d+%?", cn = "(?:".concat(Vy, ")|(?:").concat(Dy, ")"), Hr = "[\\s|\\(]+(".concat(cn, ")[,|\\s]+(").concat(cn, ")[,|\\s]+(").concat(cn, ")\\s*\\)?"), Dr = "[\\s|\\(]+(".concat(cn, ")[,|\\s]+(").concat(cn, ")[,|\\s]+(").concat(cn, ")[,|\\s]+(").concat(cn, ")\\s*\\)?"), At = {
  CSS_UNIT: new RegExp(cn),
  rgb: new RegExp("rgb" + Hr),
  rgba: new RegExp("rgba" + Dr),
  hsl: new RegExp("hsl" + Hr),
  hsla: new RegExp("hsla" + Dr),
  hsv: new RegExp("hsv" + Hr),
  hsva: new RegExp("hsva" + Dr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Ky(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (ol[e])
    e = ol[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = At.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = At.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = At.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = At.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = At.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = At.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = At.hex8.exec(e), n ? {
    r: ft(n[1]),
    g: ft(n[2]),
    b: ft(n[3]),
    a: ms(n[4]),
    format: t ? "name" : "hex8"
  } : (n = At.hex6.exec(e), n ? {
    r: ft(n[1]),
    g: ft(n[2]),
    b: ft(n[3]),
    format: t ? "name" : "hex"
  } : (n = At.hex4.exec(e), n ? {
    r: ft(n[1] + n[1]),
    g: ft(n[2] + n[2]),
    b: ft(n[3] + n[3]),
    a: ms(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = At.hex3.exec(e), n ? {
    r: ft(n[1] + n[1]),
    g: ft(n[2] + n[2]),
    b: ft(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Qt(e) {
  return !!At.CSS_UNIT.exec(String(e));
}
var Wy = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = zy(t)), this.originalInput = t;
      var r = Hy(t);
      this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (o = n.format) !== null && o !== void 0 ? o : r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, o, r, l = t.r / 255, s = t.g / 255, a = t.b / 255;
      return l <= 0.03928 ? n = l / 12.92 : n = Math.pow((l + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = su(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = hs(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = hs(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = vs(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = vs(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), gs(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Fy(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(je(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(je(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + gs(this.r, this.g, this.b, !1), n = 0, o = Object.entries(ol); n < o.length; n++) {
        var r = o[n], l = r[0], s = r[1];
        if (t === s)
          return l;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var o = !1, r = this.a < 1 && this.a >= 0, l = !n && r && (t.startsWith("hex") || t === "name");
      return l ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = No(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = No(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = No(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = No(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), l = n / 100, s = {
        r: (r.r - o.r) * l + o.r,
        g: (r.g - o.g) * l + o.g,
        b: (r.b - o.b) * l + o.b,
        a: (r.a - o.a) * l + o.a
      };
      return new e(s);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), r = 360 / n, l = [this];
      for (o.h = (o.h - (r * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + r) % 360, l.push(new e(o));
      return l;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, r = n.s, l = n.v, s = [], a = 1 / t; t--; )
        s.push(new e({ h: o, s: r, v: l })), l = (l + a) % 1;
      return s;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), o = new e(t).toRgb(), r = n.a + o.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + o.r * o.a * (1 - n.a)) / r,
        g: (n.g * n.a + o.g * o.a * (1 - n.a)) / r,
        b: (n.b * n.a + o.b * o.a * (1 - n.a)) / r,
        a: r
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), o = n.h, r = [this], l = 360 / t, s = 1; s < t; s++)
        r.push(new e({ h: (o + s * l) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function ln(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function jy(e) {
  const t = Tr(), n = fe("button");
  return _(() => {
    let o = {};
    const r = e.color;
    if (r) {
      const l = new Wy(r), s = e.dark ? l.tint(20).toString() : ln(l, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? ln(l, 90) : l.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? ln(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": s,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": s
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? ln(l, 90) : l.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? ln(l, 50) : l.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? ln(l, 80) : l.tint(80).toString());
      else {
        const a = e.dark ? ln(l, 30) : l.tint(30).toString(), i = l.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (o = n.cssVarBlock({
          "bg-color": r,
          "text-color": i,
          "border-color": r,
          "hover-bg-color": a,
          "hover-text-color": i,
          "hover-border-color": a,
          "active-bg-color": s,
          "active-border-color": s
        }), t.value) {
          const u = e.dark ? ln(l, 50) : l.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = u, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return o;
  });
}
const Uy = D({
  name: "ElButton"
}), qy = /* @__PURE__ */ D({
  ...Uy,
  props: nl,
  emits: Ay,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = jy(o), l = fe("button"), { _ref: s, _size: a, _type: i, _disabled: u, _props: c, shouldAddSpace: d, handleClick: v } = Oy(o, n);
    return t({
      ref: s,
      size: a,
      type: i,
      disabled: u,
      shouldAddSpace: d
    }), (h, p) => (E(), V(lt(h.tag), Oe({
      ref_key: "_ref",
      ref: s
    }, g(c), {
      class: [
        g(l).b(),
        g(l).m(g(i)),
        g(l).m(g(a)),
        g(l).is("disabled", g(u)),
        g(l).is("loading", h.loading),
        g(l).is("plain", h.plain),
        g(l).is("round", h.round),
        g(l).is("circle", h.circle),
        g(l).is("text", h.text),
        g(l).is("link", h.link),
        g(l).is("has-bg", h.bg)
      ],
      style: g(r),
      onClick: g(v)
    }), {
      default: F(() => [
        h.loading ? (E(), P($e, { key: 0 }, [
          h.$slots.loading ? U(h.$slots, "loading", { key: 0 }) : (E(), V(g(Qe), {
            key: 1,
            class: M(g(l).is("loading"))
          }, {
            default: F(() => [
              (E(), V(lt(h.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : h.icon || h.$slots.icon ? (E(), V(g(Qe), { key: 1 }, {
          default: F(() => [
            h.icon ? (E(), V(lt(h.icon), { key: 0 })) : U(h.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : q("v-if", !0),
        h.$slots.default ? (E(), P("span", {
          key: 2,
          class: M({ [g(l).em("text", "expand")]: g(d) })
        }, [
          U(h.$slots, "default")
        ], 2)) : q("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var Gy = /* @__PURE__ */ Ce(qy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const Yy = {
  size: nl.size,
  type: nl.type
}, Xy = D({
  name: "ElButtonGroup"
}), Qy = /* @__PURE__ */ D({
  ...Xy,
  props: Yy,
  setup(e) {
    const t = e;
    it(au, Xn({
      size: It(t, "size"),
      type: It(t, "type")
    }));
    const n = fe("button");
    return (o, r) => (E(), P("div", {
      class: M(`${g(n).b("group")}`)
    }, [
      U(o.$slots, "default")
    ], 2));
  }
});
var iu = /* @__PURE__ */ Ce(Qy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const Zy = Tt(Gy, {
  ButtonGroup: iu
});
Jn(iu);
function Jy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const sn = /* @__PURE__ */ new Map();
let bs;
Ie && (document.addEventListener("mousedown", (e) => bs = e), document.addEventListener("mouseup", (e) => {
  for (const t of sn.values())
    for (const { documentHandler: n } of t)
      n(e, bs);
}));
function ys(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : Dn(t.arg) && n.push(t.arg), function(o, r) {
    const l = t.instance.popperRef, s = o.target, a = r == null ? void 0 : r.target, i = !t || !t.instance, u = !s || !a, c = e.contains(s) || e.contains(a), d = e === s, v = n.length && n.some((p) => p == null ? void 0 : p.contains(s)) || n.length && n.includes(a), h = l && (l.contains(s) || l.contains(a));
    i || u || c || d || v || h || t.value(o, r);
  };
}
const uu = {
  beforeMount(e, t) {
    sn.has(e) || sn.set(e, []), sn.get(e).push({
      documentHandler: ys(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    sn.has(e) || sn.set(e, []);
    const n = sn.get(e), o = n.findIndex((l) => l.bindingFn === t.oldValue), r = {
      documentHandler: ys(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    sn.delete(e);
  }
};
var ws = !1, bn, rl, ll, Ko, Wo, cu, jo, al, sl, il, du, ul, cl, fu, pu;
function ot() {
  if (!ws) {
    ws = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (ul = /\b(iPhone|iP[ao]d)/.exec(e), cl = /\b(iP[ao]d)/.exec(e), il = /Android/i.exec(e), fu = /FBAN\/\w+;/i.exec(e), pu = /Mobile/i.exec(e), du = !!/Win64/.exec(e), t) {
      bn = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, bn && document && document.documentMode && (bn = document.documentMode);
      var o = /(?:Trident\/(\d+.\d+))/.exec(e);
      cu = o ? parseFloat(o[1]) + 4 : bn, rl = t[2] ? parseFloat(t[2]) : NaN, ll = t[3] ? parseFloat(t[3]) : NaN, Ko = t[4] ? parseFloat(t[4]) : NaN, Ko ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), Wo = t && t[1] ? parseFloat(t[1]) : NaN) : Wo = NaN;
    } else
      bn = rl = ll = Wo = Ko = NaN;
    if (n) {
      if (n[1]) {
        var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        jo = r ? parseFloat(r[1].replace("_", ".")) : !0;
      } else
        jo = !1;
      al = !!n[2], sl = !!n[3];
    } else
      jo = al = sl = !1;
  }
}
var dl = { ie: function() {
  return ot() || bn;
}, ieCompatibilityMode: function() {
  return ot() || cu > bn;
}, ie64: function() {
  return dl.ie() && du;
}, firefox: function() {
  return ot() || rl;
}, opera: function() {
  return ot() || ll;
}, webkit: function() {
  return ot() || Ko;
}, safari: function() {
  return dl.webkit();
}, chrome: function() {
  return ot() || Wo;
}, windows: function() {
  return ot() || al;
}, osx: function() {
  return ot() || jo;
}, linux: function() {
  return ot() || sl;
}, iphone: function() {
  return ot() || ul;
}, mobile: function() {
  return ot() || ul || cl || il || pu;
}, nativeApp: function() {
  return ot() || fu;
}, android: function() {
  return ot() || il;
}, ipad: function() {
  return ot() || cl;
} }, e1 = dl, Bo = !!(typeof window < "u" && window.document && window.document.createElement), t1 = { canUseDOM: Bo, canUseWorkers: typeof Worker < "u", canUseEventListeners: Bo && !!(window.addEventListener || window.attachEvent), canUseViewport: Bo && !!window.screen, isInWorker: !Bo }, vu = t1, hu;
vu.canUseDOM && (hu = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function n1(e, t) {
  if (!vu.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, o = n in document;
  if (!o) {
    var r = document.createElement("div");
    r.setAttribute(n, "return;"), o = typeof r[n] == "function";
  }
  return !o && hu && e === "wheel" && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
}
var o1 = n1, Cs = 10, Ss = 40, _s = 800;
function gu(e) {
  var t = 0, n = 0, o = 0, r = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), o = t * Cs, r = n * Cs, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (o = e.deltaX), (o || r) && e.deltaMode && (e.deltaMode == 1 ? (o *= Ss, r *= Ss) : (o *= _s, r *= _s)), o && !t && (t = o < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: o, pixelY: r };
}
gu.getEventType = function() {
  return e1.firefox() ? "DOMMouseScroll" : o1("wheel") ? "wheel" : "mousewheel";
};
var r1 = gu;
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
const l1 = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(o) {
      const r = r1(o);
      t && Reflect.apply(t, this, [o, r]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, a1 = {
  beforeMount(e, t) {
    l1(e, t.value);
  }
}, mu = {
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
  size: eo,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, bu = {
  [nt]: (e) => St(e) || Re(e) || Hn(e),
  change: (e) => St(e) || Re(e) || Hn(e)
}, no = Symbol("checkboxGroupContextKey"), s1 = ({
  model: e,
  isChecked: t
}) => {
  const n = pe(no, void 0), o = _(() => {
    var l, s;
    const a = (l = n == null ? void 0 : n.max) == null ? void 0 : l.value, i = (s = n == null ? void 0 : n.min) == null ? void 0 : s.value;
    return !zn(a) && e.value.length >= a && !t.value || !zn(i) && e.value.length <= i && t.value;
  });
  return {
    isDisabled: Tr(_(() => (n == null ? void 0 : n.disabled.value) || o.value)),
    isLimitDisabled: o
  };
}, i1 = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: r,
  isLabeledByFormItem: l
}) => {
  const s = pe(no, void 0), { formItem: a } = to(), { emit: i } = ye();
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
    n.value || !o.value && !r.value && l.value && (p.composedPath().some((y) => y.tagName === "LABEL") || (t.value = u([!1, e.falseLabel].includes(t.value)), await ve(), c(t.value, p)));
  }
  const h = _(() => (s == null ? void 0 : s.validateEvent) || e.validateEvent);
  return Y(() => e.modelValue, () => {
    h.value && (a == null || a.validate("change").catch((p) => We(p)));
  }), {
    handleChange: d,
    onClickRoot: v
  };
}, u1 = (e) => {
  const t = k(!1), { emit: n } = ye(), o = pe(no, void 0), r = _(() => zn(o) === !1), l = k(!1);
  return {
    model: _({
      get() {
        var a, i;
        return r.value ? (a = o == null ? void 0 : o.modelValue) == null ? void 0 : a.value : (i = e.modelValue) != null ? i : t.value;
      },
      set(a) {
        var i, u;
        r.value && En(a) ? (l.value = ((i = o == null ? void 0 : o.max) == null ? void 0 : i.value) !== void 0 && a.length > (o == null ? void 0 : o.max.value), l.value === !1 && ((u = o == null ? void 0 : o.changeEvent) == null || u.call(o, a))) : (n(nt, a), t.value = a);
      }
    }),
    isGroup: r,
    isLimitExceeded: l
  };
}, c1 = (e, t, { model: n }) => {
  const o = pe(no, void 0), r = k(!1), l = _(() => {
    const u = n.value;
    return Hn(u) ? u : En(u) ? Rt(e.label) ? u.map(Nn).some((c) => dr(c, e.label)) : u.map(Nn).includes(e.label) : u != null ? u === e.trueLabel : !!u;
  }), s = kn(_(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), a = kn(_(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  })), i = _(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: s,
    isChecked: l,
    isFocused: r,
    checkboxSize: a,
    hasOwnLabel: i
  };
}, d1 = (e, { model: t }) => {
  function n() {
    En(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, yu = (e, t) => {
  const { formItem: n } = to(), { model: o, isGroup: r, isLimitExceeded: l } = u1(e), {
    isFocused: s,
    isChecked: a,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: c
  } = c1(e, t, { model: o }), { isDisabled: d } = s1({ model: o, isChecked: a }), { inputId: v, isLabeledByFormItem: h } = Wl(e, {
    formItemContext: n,
    disableIdGeneration: c,
    disableIdManagement: r
  }), { handleChange: p, onClickRoot: f } = i1(e, {
    model: o,
    isLimitExceeded: l,
    hasOwnLabel: c,
    isDisabled: d,
    isLabeledByFormItem: h
  });
  return d1(e, { model: o }), {
    inputId: v,
    isLabeledByFormItem: h,
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
}, f1 = ["tabindex", "role", "aria-checked"], p1 = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], v1 = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], h1 = D({
  name: "ElCheckbox"
}), g1 = /* @__PURE__ */ D({
  ...h1,
  props: mu,
  emits: bu,
  setup(e) {
    const t = e, n = hr(), {
      inputId: o,
      isLabeledByFormItem: r,
      isChecked: l,
      isDisabled: s,
      isFocused: a,
      checkboxSize: i,
      hasOwnLabel: u,
      model: c,
      handleChange: d,
      onClickRoot: v
    } = yu(t, n), h = fe("checkbox"), p = _(() => [
      h.b(),
      h.m(i.value),
      h.is("disabled", s.value),
      h.is("bordered", t.border),
      h.is("checked", l.value)
    ]), f = _(() => [
      h.e("input"),
      h.is("disabled", s.value),
      h.is("checked", l.value),
      h.is("indeterminate", t.indeterminate),
      h.is("focus", a.value)
    ]);
    return (m, y) => (E(), V(lt(!g(u) && g(r) ? "span" : "label"), {
      class: M(g(p)),
      "aria-controls": m.indeterminate ? m.controls : null,
      onClick: g(v)
    }, {
      default: F(() => [
        R("span", {
          class: M(g(f)),
          tabindex: m.indeterminate ? 0 : void 0,
          role: m.indeterminate ? "checkbox" : void 0,
          "aria-checked": m.indeterminate ? "mixed" : void 0
        }, [
          m.trueLabel || m.falseLabel ? Ke((E(), P("input", {
            key: 0,
            id: g(o),
            "onUpdate:modelValue": y[0] || (y[0] = (w) => Rn(c) ? c.value = w : null),
            class: M(g(h).e("original")),
            type: "checkbox",
            "aria-hidden": m.indeterminate ? "true" : "false",
            name: m.name,
            tabindex: m.tabindex,
            disabled: g(s),
            "true-value": m.trueLabel,
            "false-value": m.falseLabel,
            onChange: y[1] || (y[1] = (...w) => g(d) && g(d)(...w)),
            onFocus: y[2] || (y[2] = (w) => a.value = !0),
            onBlur: y[3] || (y[3] = (w) => a.value = !1),
            onClick: y[4] || (y[4] = Ye(() => {
            }, ["stop"]))
          }, null, 42, p1)), [
            [lr, g(c)]
          ]) : Ke((E(), P("input", {
            key: 1,
            id: g(o),
            "onUpdate:modelValue": y[5] || (y[5] = (w) => Rn(c) ? c.value = w : null),
            class: M(g(h).e("original")),
            type: "checkbox",
            "aria-hidden": m.indeterminate ? "true" : "false",
            disabled: g(s),
            value: m.label,
            name: m.name,
            tabindex: m.tabindex,
            onChange: y[6] || (y[6] = (...w) => g(d) && g(d)(...w)),
            onFocus: y[7] || (y[7] = (w) => a.value = !0),
            onBlur: y[8] || (y[8] = (w) => a.value = !1),
            onClick: y[9] || (y[9] = Ye(() => {
            }, ["stop"]))
          }, null, 42, v1)), [
            [lr, g(c)]
          ]),
          R("span", {
            class: M(g(h).e("inner"))
          }, null, 2)
        ], 10, f1),
        g(u) ? (E(), P("span", {
          key: 0,
          class: M(g(h).e("label"))
        }, [
          U(m.$slots, "default"),
          m.$slots.default ? q("v-if", !0) : (E(), P($e, { key: 0 }, [
            Ve(ie(m.label), 1)
          ], 64))
        ], 2)) : q("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var m1 = /* @__PURE__ */ Ce(g1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const b1 = ["name", "tabindex", "disabled", "true-value", "false-value"], y1 = ["name", "tabindex", "disabled", "value"], w1 = D({
  name: "ElCheckboxButton"
}), C1 = /* @__PURE__ */ D({
  ...w1,
  props: mu,
  emits: bu,
  setup(e) {
    const t = e, n = hr(), {
      isFocused: o,
      isChecked: r,
      isDisabled: l,
      checkboxButtonSize: s,
      model: a,
      handleChange: i
    } = yu(t, n), u = pe(no, void 0), c = fe("checkbox"), d = _(() => {
      var h, p, f, m;
      const y = (p = (h = u == null ? void 0 : u.fill) == null ? void 0 : h.value) != null ? p : "";
      return {
        backgroundColor: y,
        borderColor: y,
        color: (m = (f = u == null ? void 0 : u.textColor) == null ? void 0 : f.value) != null ? m : "",
        boxShadow: y ? `-1px 0 0 0 ${y}` : void 0
      };
    }), v = _(() => [
      c.b("button"),
      c.bm("button", s.value),
      c.is("disabled", l.value),
      c.is("checked", r.value),
      c.is("focus", o.value)
    ]);
    return (h, p) => (E(), P("label", {
      class: M(g(v))
    }, [
      h.trueLabel || h.falseLabel ? Ke((E(), P("input", {
        key: 0,
        "onUpdate:modelValue": p[0] || (p[0] = (f) => Rn(a) ? a.value = f : null),
        class: M(g(c).be("button", "original")),
        type: "checkbox",
        name: h.name,
        tabindex: h.tabindex,
        disabled: g(l),
        "true-value": h.trueLabel,
        "false-value": h.falseLabel,
        onChange: p[1] || (p[1] = (...f) => g(i) && g(i)(...f)),
        onFocus: p[2] || (p[2] = (f) => o.value = !0),
        onBlur: p[3] || (p[3] = (f) => o.value = !1),
        onClick: p[4] || (p[4] = Ye(() => {
        }, ["stop"]))
      }, null, 42, b1)), [
        [lr, g(a)]
      ]) : Ke((E(), P("input", {
        key: 1,
        "onUpdate:modelValue": p[5] || (p[5] = (f) => Rn(a) ? a.value = f : null),
        class: M(g(c).be("button", "original")),
        type: "checkbox",
        name: h.name,
        tabindex: h.tabindex,
        disabled: g(l),
        value: h.label,
        onChange: p[6] || (p[6] = (...f) => g(i) && g(i)(...f)),
        onFocus: p[7] || (p[7] = (f) => o.value = !0),
        onBlur: p[8] || (p[8] = (f) => o.value = !1),
        onClick: p[9] || (p[9] = Ye(() => {
        }, ["stop"]))
      }, null, 42, y1)), [
        [lr, g(a)]
      ]),
      h.$slots.default || h.label ? (E(), P("span", {
        key: 2,
        class: M(g(c).be("button", "inner")),
        style: Se(g(r) ? g(d) : void 0)
      }, [
        U(h.$slots, "default", {}, () => [
          Ve(ie(h.label), 1)
        ])
      ], 6)) : q("v-if", !0)
    ], 2));
  }
});
var wu = /* @__PURE__ */ Ce(C1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const S1 = xe({
  modelValue: {
    type: he(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: eo,
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
}), _1 = {
  [nt]: (e) => En(e),
  change: (e) => En(e)
}, $1 = D({
  name: "ElCheckboxGroup"
}), E1 = /* @__PURE__ */ D({
  ...$1,
  props: S1,
  emits: _1,
  setup(e, { emit: t }) {
    const n = e, o = fe("checkbox"), { formItem: r } = to(), { inputId: l, isLabeledByFormItem: s } = Wl(n, {
      formItemContext: r
    }), a = async (u) => {
      t(nt, u), await ve(), t("change", u);
    }, i = _({
      get() {
        return n.modelValue;
      },
      set(u) {
        a(u);
      }
    });
    return it(no, {
      ...dm(Qn(n), [
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
      n.validateEvent && (r == null || r.validate("change").catch((u) => We(u)));
    }), (u, c) => {
      var d;
      return E(), V(lt(u.tag), {
        id: g(l),
        class: M(g(o).b("group")),
        role: "group",
        "aria-label": g(s) ? void 0 : u.label || "checkbox-group",
        "aria-labelledby": g(s) ? (d = g(r)) == null ? void 0 : d.labelId : void 0
      }, {
        default: F(() => [
          U(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Cu = /* @__PURE__ */ Ce(E1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const Gn = Tt(m1, {
  CheckboxButton: wu,
  CheckboxGroup: Cu
});
Jn(wu);
Jn(Cu);
const Su = xe({
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
    values: Oo,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), T1 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, k1 = D({
  name: "ElTag"
}), O1 = /* @__PURE__ */ D({
  ...k1,
  props: Su,
  emits: T1,
  setup(e, { emit: t }) {
    const n = e, o = kn(), r = fe("tag"), l = _(() => {
      const { type: i, hit: u, effect: c, closable: d, round: v } = n;
      return [
        r.b(),
        r.is("closable", d),
        r.m(i),
        r.m(o.value),
        r.m(c),
        r.is("hit", u),
        r.is("round", v)
      ];
    }), s = (i) => {
      t("close", i);
    }, a = (i) => {
      t("click", i);
    };
    return (i, u) => i.disableTransitions ? (E(), P("span", {
      key: 0,
      class: M(g(l)),
      style: Se({ backgroundColor: i.color }),
      onClick: a
    }, [
      R("span", {
        class: M(g(r).e("content"))
      }, [
        U(i.$slots, "default")
      ], 2),
      i.closable ? (E(), V(g(Qe), {
        key: 0,
        class: M(g(r).e("close")),
        onClick: Ye(s, ["stop"])
      }, {
        default: F(() => [
          Z(g(la))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : q("v-if", !0)
    ], 6)) : (E(), V(bo, {
      key: 1,
      name: `${g(r).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: F(() => [
        R("span", {
          class: M(g(l)),
          style: Se({ backgroundColor: i.color }),
          onClick: a
        }, [
          R("span", {
            class: M(g(r).e("content"))
          }, [
            U(i.$slots, "default")
          ], 2),
          i.closable ? (E(), V(g(Qe), {
            key: 0,
            class: M(g(r).e("close")),
            onClick: Ye(s, ["stop"])
          }, {
            default: F(() => [
              Z(g(la))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : q("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var x1 = /* @__PURE__ */ Ce(O1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const P1 = Tt(x1), _u = Symbol("elPaginationKey"), A1 = xe({
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
}), M1 = {
  click: (e) => e instanceof MouseEvent
}, I1 = ["disabled", "aria-label", "aria-disabled"], L1 = { key: 0 }, R1 = D({
  name: "ElPaginationPrev"
}), N1 = /* @__PURE__ */ D({
  ...R1,
  props: A1,
  emits: M1,
  setup(e) {
    const t = e, { t: n } = kt(), o = _(() => t.disabled || t.currentPage <= 1);
    return (r, l) => (E(), P("button", {
      type: "button",
      class: "btn-prev",
      disabled: g(o),
      "aria-label": r.prevText || g(n)("el.pagination.prev"),
      "aria-disabled": g(o),
      onClick: l[0] || (l[0] = (s) => r.$emit("click", s))
    }, [
      r.prevText ? (E(), P("span", L1, ie(r.prevText), 1)) : (E(), V(g(Qe), { key: 1 }, {
        default: F(() => [
          (E(), V(lt(r.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, I1));
  }
});
var F1 = /* @__PURE__ */ Ce(N1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const B1 = xe({
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
}), z1 = ["disabled", "aria-label", "aria-disabled"], H1 = { key: 0 }, D1 = D({
  name: "ElPaginationNext"
}), V1 = /* @__PURE__ */ D({
  ...D1,
  props: B1,
  emits: ["click"],
  setup(e) {
    const t = e, { t: n } = kt(), o = _(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (r, l) => (E(), P("button", {
      type: "button",
      class: "btn-next",
      disabled: g(o),
      "aria-label": r.nextText || g(n)("el.pagination.next"),
      "aria-disabled": g(o),
      onClick: l[0] || (l[0] = (s) => r.$emit("click", s))
    }, [
      r.nextText ? (E(), P("span", H1, ie(r.nextText), 1)) : (E(), V(g(Qe), { key: 1 }, {
        default: F(() => [
          (E(), V(lt(r.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, z1));
  }
});
var K1 = /* @__PURE__ */ Ce(V1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const $u = Symbol("ElSelectGroup"), xr = Symbol("ElSelect");
function W1(e, t) {
  const n = pe(xr), o = pe($u, { disabled: !1 }), r = _(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), l = _(() => n.props.multiple ? d(n.props.modelValue, e.value) : v(e.value, n.props.modelValue)), s = _(() => {
    if (n.props.multiple) {
      const f = n.props.modelValue || [];
      return !l.value && f.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = _(() => e.label || (r.value ? "" : e.value)), i = _(() => e.value || e.label || ""), u = _(() => e.disabled || t.groupDisabled || s.value), c = ye(), d = (f = [], m) => {
    if (r.value) {
      const y = n.props.valueKey;
      return f && f.some((w) => Nn(Xe(w, y)) === Xe(m, y));
    } else
      return f && f.includes(m);
  }, v = (f, m) => {
    if (r.value) {
      const { valueKey: y } = n.props;
      return Xe(f, y) === Xe(m, y);
    } else
      return f === m;
  }, h = () => {
    !e.disabled && !o.disabled && (n.hoverIndex = n.optionsArray.indexOf(c.proxy));
  };
  Y(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Y(() => e.value, (f, m) => {
    const { remote: y, valueKey: w } = n.props;
    if (Object.is(f, m) || (n.onOptionDestroy(m, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !y) {
      if (w && typeof f == "object" && typeof m == "object" && f[w] === m[w])
        return;
      n.setSelected();
    }
  }), Y(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: p } = Nn(n);
  return Y(p, (f) => {
    const { query: m } = g(f), y = new RegExp(vm(m), "i");
    t.visible = y.test(a.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: i,
    itemSelected: l,
    isDisabled: u,
    hoverItem: h
  };
}
const j1 = D({
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
    const t = fe("select"), n = _(() => [
      t.be("dropdown", "item"),
      t.is("disabled", g(s)),
      {
        selected: g(l),
        hover: g(c)
      }
    ]), o = Xn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: r, itemSelected: l, isDisabled: s, select: a, hoverItem: i } = W1(e, o), { visible: u, hover: c } = Qn(o), d = ye().proxy;
    a.onOptionCreate(d), Nt(() => {
      const h = d.value, { selected: p } = a, m = (a.props.multiple ? p : [p]).some((y) => y.value === d.value);
      ve(() => {
        a.cachedOptions.get(h) === d && !m && a.cachedOptions.delete(h);
      }), a.onOptionDestroy(h, d);
    });
    function v() {
      e.disabled !== !0 && o.groupDisabled !== !0 && a.handleOptionSelect(d);
    }
    return {
      ns: t,
      containerKls: n,
      currentLabel: r,
      itemSelected: l,
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
function U1(e, t, n, o, r, l) {
  return Ke((E(), P("li", {
    class: M(e.containerKls),
    onMouseenter: t[0] || (t[0] = (...s) => e.hoverItem && e.hoverItem(...s)),
    onClick: t[1] || (t[1] = Ye((...s) => e.selectOptionClick && e.selectOptionClick(...s), ["stop"]))
  }, [
    U(e.$slots, "default", {}, () => [
      R("span", null, ie(e.currentLabel), 1)
    ])
  ], 34)), [
    [dn, e.visible]
  ]);
}
var Xl = /* @__PURE__ */ Ce(j1, [["render", U1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const q1 = D({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = pe(xr), t = fe("select"), n = _(() => e.props.popperClass), o = _(() => e.props.multiple), r = _(() => e.props.fitInputWidth), l = k("");
    function s() {
      var a;
      l.value = `${(a = e.selectWrapper) == null ? void 0 : a.offsetWidth}px`;
    }
    return Ae(() => {
      s(), Fn(e.selectWrapper, s);
    }), {
      ns: t,
      minWidth: l,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function G1(e, t, n, o, r, l) {
  return E(), P("div", {
    class: M([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Se({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    U(e.$slots, "default")
  ], 6);
}
var Y1 = /* @__PURE__ */ Ce(q1, [["render", G1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function X1(e) {
  const { t } = kt();
  return Xn({
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
const Q1 = (e, t, n) => {
  const { t: o } = kt(), r = fe("select");
  Ci({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, _(() => e.suffixTransition === !1));
  const l = k(null), s = k(null), a = k(null), i = k(null), u = k(null), c = k(null), d = k(null), v = k(null), h = k(-1), p = Cn({ query: "" }), f = Cn(""), m = k([]);
  let y = 0;
  const { form: w, formItem: C } = to(), b = _(() => !e.filterable || e.multiple || !t.visible), S = _(() => e.disabled || (w == null ? void 0 : w.disabled)), T = _(() => {
    const O = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !S.value && t.inputHovering && O;
  }), $ = _(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), x = _(() => r.is("reverse", $.value && t.visible && e.suffixTransition)), N = _(() => (w == null ? void 0 : w.statusIcon) && (C == null ? void 0 : C.validateState) && bi[C == null ? void 0 : C.validateState]), H = _(() => e.remote ? 300 : 0), B = _(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), I = _(() => {
    const O = Array.from(t.options.values()), L = [];
    return m.value.forEach((K) => {
      const se = O.findIndex((qe) => qe.currentLabel === K);
      se > -1 && L.push(O[se]);
    }), L.length ? L : O;
  }), Q = _(() => Array.from(t.cachedOptions.values())), ee = _(() => {
    const O = I.value.filter((L) => !L.created).some((L) => L.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !O;
  }), oe = kn(), re = _(() => ["small"].includes(oe.value) ? "small" : "default"), W = _({
    get() {
      return t.visible && B.value !== !1;
    },
    set(O) {
      t.visible = O;
    }
  });
  Y([() => S.value, () => oe.value, () => w == null ? void 0 : w.size], () => {
    ve(() => {
      ne();
    });
  }), Y(() => e.placeholder, (O) => {
    t.cachedPlaceHolder = t.currentPlaceholder = O, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), Y(() => e.modelValue, (O, L) => {
    e.multiple && (ne(), O && O.length > 0 || s.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", A(t.query))), ue(), e.filterable && !e.multiple && (t.inputLength = 20), !dr(O, L) && e.validateEvent && (C == null || C.validate("change").catch((K) => We(K)));
  }, {
    flush: "post",
    deep: !0
  }), Y(() => t.visible, (O) => {
    var L, K, se, qe, et;
    O ? ((K = (L = i.value) == null ? void 0 : L.updatePopper) == null || K.call(L), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (qe = (se = a.value) == null ? void 0 : se.focus) == null || qe.call(se), e.multiple ? (et = s.value) == null || et.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), A(t.query), !e.multiple && !e.remote && (p.value.query = "", lo(p), lo(f)))) : (e.filterable && (Mt(e.filterMethod) && e.filterMethod(""), Mt(e.remoteMethod) && e.remoteMethod("")), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, me(), ve(() => {
      s.value && s.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", O);
  }), Y(() => t.options.entries(), () => {
    var O, L, K;
    if (!Ie)
      return;
    (L = (O = i.value) == null ? void 0 : O.updatePopper) == null || L.call(O), e.multiple && ne();
    const se = ((K = d.value) == null ? void 0 : K.querySelectorAll("input")) || [];
    (!e.filterable && !e.defaultFirstOption && !zn(e.modelValue) || !Array.from(se).includes(document.activeElement)) && ue(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && le();
  }, {
    flush: "post"
  }), Y(() => t.hoverIndex, (O) => {
    Re(O) && O > -1 ? h.value = I.value[O] || {} : h.value = {}, I.value.forEach((L) => {
      L.hover = h.value === L;
    });
  });
  const ne = () => {
    ve(() => {
      var O, L;
      if (!l.value)
        return;
      const K = l.value.$el.querySelector("input");
      y = y || (K.clientHeight > 0 ? K.clientHeight + 2 : 0);
      const se = c.value, qe = wm(oe.value || (w == null ? void 0 : w.size)), et = oe.value || qe === y || y <= 0 ? qe : y;
      !(K.offsetParent === null) && (K.style.height = `${(t.selected.length === 0 ? et : Math.max(se ? se.clientHeight + (se.clientHeight > et ? 6 : 0) : 0, et)) - 2}px`), t.visible && B.value !== !1 && ((L = (O = i.value) == null ? void 0 : O.updatePopper) == null || L.call(O));
    });
  }, A = async (O) => {
    if (!(t.previousQuery === O || t.isOnComposition)) {
      if (t.previousQuery === null && (Mt(e.filterMethod) || Mt(e.remoteMethod))) {
        t.previousQuery = O;
        return;
      }
      t.previousQuery = O, ve(() => {
        var L, K;
        t.visible && ((K = (L = i.value) == null ? void 0 : L.updatePopper) == null || K.call(L));
      }), t.hoverIndex = -1, e.multiple && e.filterable && ve(() => {
        if (!S.value) {
          const L = s.value.value.length * 15 + 20;
          t.inputLength = e.collapseTags ? Math.min(50, L) : L, j();
        }
        ne();
      }), e.remote && Mt(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(O)) : Mt(e.filterMethod) ? (e.filterMethod(O), lo(f)) : (t.filteredOptionsCount = t.optionsCount, p.value.query = O, lo(p), lo(f)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await ve(), le());
    }
  }, j = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = s.value.value ? "" : t.cachedPlaceHolder);
  }, le = () => {
    const O = I.value.filter((se) => se.visible && !se.disabled && !se.states.groupDisabled), L = O.find((se) => se.created), K = O[0];
    t.hoverIndex = bt(I.value, L || K);
  }, ue = () => {
    var O;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const K = ge(e.modelValue);
      (O = K.props) != null && O.created ? (t.createdLabel = K.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = K.currentLabel, t.selected = K, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const L = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((K) => {
      L.push(ge(K));
    }), t.selected = L, ve(() => {
      ne();
    });
  }, ge = (O) => {
    let L;
    const K = Pr(O).toLowerCase() === "object", se = Pr(O).toLowerCase() === "null", qe = Pr(O).toLowerCase() === "undefined";
    for (let Xt = t.cachedOptions.size - 1; Xt >= 0; Xt--) {
      const xt = Q.value[Xt];
      if (K ? Xe(xt.value, e.valueKey) === Xe(O, e.valueKey) : xt.value === O) {
        L = {
          value: O,
          currentLabel: xt.currentLabel,
          isDisabled: xt.isDisabled
        };
        break;
      }
    }
    if (L)
      return L;
    const et = K ? O.label : !se && !qe ? O : "", Yt = {
      value: O,
      currentLabel: et
    };
    return e.multiple && (Yt.hitState = !1), Yt;
  }, me = () => {
    setTimeout(() => {
      const O = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((L) => I.value.findIndex((K) => Xe(K, O) === Xe(L, O)))) : t.hoverIndex = -1 : t.hoverIndex = I.value.findIndex((L) => be(L) === be(t.selected));
    }, 300);
  }, _e = () => {
    var O, L;
    Te(), (L = (O = i.value) == null ? void 0 : O.updatePopper) == null || L.call(O), e.multiple && ne();
  }, Te = () => {
    var O;
    t.inputWidth = (O = l.value) == null ? void 0 : O.$el.offsetWidth;
  }, Le = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, A(t.query));
  }, we = Bn(() => {
    Le();
  }, H.value), Ne = Bn((O) => {
    A(O.target.value);
  }, H.value), Pe = (O) => {
    dr(e.modelValue, O) || n.emit(yi, O);
  }, Be = (O) => nm(O, (L) => !t.disabledOptions.has(L)), Ot = (O) => {
    if (O.code !== Vn.delete) {
      if (O.target.value.length <= 0 && !ct()) {
        const L = e.modelValue.slice(), K = Be(L);
        if (K < 0)
          return;
        L.splice(K, 1), n.emit(nt, L), Pe(L);
      }
      O.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, ht = (O, L) => {
    const K = t.selected.indexOf(L);
    if (K > -1 && !S.value) {
      const se = e.modelValue.slice();
      se.splice(K, 1), n.emit(nt, se), Pe(se), n.emit("remove-tag", L.value);
    }
    O.stopPropagation(), J();
  }, gt = (O) => {
    O.stopPropagation();
    const L = e.multiple ? [] : "";
    if (!St(L))
      for (const K of t.selected)
        K.isDisabled && L.push(K.value);
    n.emit(nt, L), Pe(L), t.hoverIndex = -1, t.visible = !1, n.emit("clear"), J();
  }, mt = (O) => {
    var L;
    if (e.multiple) {
      const K = (e.modelValue || []).slice(), se = bt(K, O.value);
      se > -1 ? K.splice(se, 1) : (e.multipleLimit <= 0 || K.length < e.multipleLimit) && K.push(O.value), n.emit(nt, K), Pe(K), O.created && (t.query = "", A(""), t.inputLength = 20), e.filterable && ((L = s.value) == null || L.focus());
    } else
      n.emit(nt, O.value), Pe(O.value), t.visible = !1;
    yt(), !t.visible && ve(() => {
      ut(O);
    });
  }, bt = (O = [], L) => {
    if (!Rt(L))
      return O.indexOf(L);
    const K = e.valueKey;
    let se = -1;
    return O.some((qe, et) => Nn(Xe(qe, K)) === Xe(L, K) ? (se = et, !0) : !1), se;
  }, yt = () => {
    const O = s.value || l.value;
    O && (O == null || O.focus());
  }, ut = (O) => {
    var L, K, se, qe, et;
    const Yt = Array.isArray(O) ? O[0] : O;
    let Xt = null;
    if (Yt != null && Yt.value) {
      const xt = I.value.filter((Ge) => Ge.value === Yt.value);
      xt.length > 0 && (Xt = xt[0].$el);
    }
    if (i.value && Xt) {
      const xt = (qe = (se = (K = (L = i.value) == null ? void 0 : L.popperRef) == null ? void 0 : K.contentRef) == null ? void 0 : se.querySelector) == null ? void 0 : qe.call(se, `.${r.be("dropdown", "wrap")}`);
      xt && mm(xt, Xt);
    }
    (et = v.value) == null || et.handleScroll();
  }, qt = (O) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(O.value, O), t.cachedOptions.set(O.value, O), O.disabled && t.disabledOptions.set(O.value, O);
  }, Ze = (O, L) => {
    t.options.get(O) === L && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(O));
  }, wt = (O) => {
    O.code !== Vn.backspace && ct(!1), t.inputLength = s.value.value.length * 15 + 20, ne();
  }, ct = (O) => {
    if (!Array.isArray(t.selected))
      return;
    const L = Be(t.selected.map((se) => se.value)), K = t.selected[L];
    if (K)
      return O === !0 || O === !1 ? (K.hitState = O, O) : (K.hitState = !K.hitState, K.hitState);
  }, zt = (O) => {
    const L = O.target.value;
    if (O.type === "compositionend")
      t.isOnComposition = !1, ve(() => A(L));
    else {
      const K = L[L.length - 1] || "";
      t.isOnComposition = !wi(K);
    }
  }, Ct = () => {
    ve(() => ut(t.selected));
  }, z = (O) => {
    t.focused || ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), t.focused = !0, n.emit("focus", O));
  }, J = () => {
    var O, L;
    t.visible ? (O = s.value || l.value) == null || O.focus() : (L = l.value) == null || L.focus();
  }, Ee = () => {
    var O, L, K;
    t.visible = !1, (O = l.value) == null || O.blur(), (K = (L = a.value) == null ? void 0 : L.blur) == null || K.call(L);
  }, dt = (O) => {
    var L, K, se;
    (L = i.value) != null && L.isFocusInsideContent(O) || (K = u.value) != null && K.isFocusInsideContent(O) || (se = d.value) != null && se.contains(O.relatedTarget) || (t.visible && X(), t.focused = !1, n.emit("blur", O));
  }, Gt = (O) => {
    gt(O);
  }, X = () => {
    t.visible = !1;
  }, te = (O) => {
    t.visible && (O.preventDefault(), O.stopPropagation(), t.visible = !1);
  }, de = (O) => {
    O && !t.mouseEnter || S.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!i.value || !i.value.isFocusInsideContent()) && (t.visible = !t.visible), J());
  }, ce = () => {
    t.visible ? I.value[t.hoverIndex] && mt(I.value[t.hoverIndex]) : de();
  }, be = (O) => Rt(O.value) ? Xe(O.value, e.valueKey) : O.value, Me = _(() => I.value.filter((O) => O.visible).every((O) => O.disabled)), Ue = _(() => t.selected.slice(0, e.maxCollapseTags)), Ht = _(() => t.selected.slice(e.maxCollapseTags)), Je = (O) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !Me.value) {
      O === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : O === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const L = I.value[t.hoverIndex];
      (L.disabled === !0 || L.states.groupDisabled === !0 || !L.visible) && Je(O), ve(() => ut(h.value));
    }
  }, oo = () => {
    t.mouseEnter = !0;
  }, ro = () => {
    t.mouseEnter = !1;
  }, rn = (O, L) => {
    var K, se;
    ht(O, L), (se = (K = u.value) == null ? void 0 : K.updatePopper) == null || se.call(K);
  }, vn = _(() => ({
    maxWidth: `${g(t.inputWidth) - 32 - (N.value ? 22 : 0)}px`,
    width: "100%"
  }));
  return {
    optionList: m,
    optionsArray: I,
    selectSize: oe,
    handleResize: _e,
    debouncedOnInputChange: we,
    debouncedQueryChange: Ne,
    deletePrevTag: Ot,
    deleteTag: ht,
    deleteSelected: gt,
    handleOptionSelect: mt,
    scrollToOption: ut,
    readonly: b,
    resetInputHeight: ne,
    showClose: T,
    iconComponent: $,
    iconReverse: x,
    showNewOption: ee,
    collapseTagSize: re,
    setSelected: ue,
    managePlaceholder: j,
    selectDisabled: S,
    emptyText: B,
    toggleLastOptionHitState: ct,
    resetInputState: wt,
    handleComposition: zt,
    onOptionCreate: qt,
    onOptionDestroy: Ze,
    handleMenuEnter: Ct,
    handleFocus: z,
    focus: J,
    blur: Ee,
    handleBlur: dt,
    handleClearClick: Gt,
    handleClose: X,
    handleKeydownEscape: te,
    toggleMenu: de,
    selectOption: ce,
    getValueKey: be,
    navigateOptions: Je,
    handleDeleteTooltipTag: rn,
    dropMenuVisible: W,
    queryChange: p,
    groupQueryChange: f,
    showTagList: Ue,
    collapseTagList: Ht,
    selectTagsStyle: vn,
    reference: l,
    input: s,
    iOSInput: a,
    tooltipRef: i,
    tagTooltipRef: u,
    tags: c,
    selectWrapper: d,
    scrollbar: v,
    handleMouseEnter: oo,
    handleMouseLeave: ro
  };
};
var Z1 = D({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let o = [];
    function r(l, s) {
      if (l.length !== s.length)
        return !1;
      for (const [a] of l.entries())
        if (l[a] != s[a])
          return !1;
      return !0;
    }
    return () => {
      var l, s;
      const a = (l = t.default) == null ? void 0 : l.call(t), i = [];
      function u(c) {
        Array.isArray(c) && c.forEach((d) => {
          var v, h, p, f;
          const m = (v = (d == null ? void 0 : d.type) || {}) == null ? void 0 : v.name;
          m === "ElOptionGroup" ? u(!St(d.children) && !Array.isArray(d.children) && Mt((h = d.children) == null ? void 0 : h.default) ? (p = d.children) == null ? void 0 : p.default() : d.children) : m === "ElOption" ? i.push((f = d.props) == null ? void 0 : f.label) : Array.isArray(d.children) && u(d.children);
        });
      }
      return a.length && u((s = a[0]) == null ? void 0 : s.children), r(i, o) || (o = i, n("update-options", i)), a;
    };
  }
});
const $s = "ElSelect", J1 = D({
  name: $s,
  componentName: $s,
  components: {
    ElInput: Yi,
    ElSelectMenu: Y1,
    ElOption: Xl,
    ElOptions: Z1,
    ElTag: P1,
    ElScrollbar: kr,
    ElTooltip: lu,
    ElIcon: Qe
  },
  directives: { ClickOutside: uu },
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
      validator: Cm
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
    teleported: Yl.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Wt,
      default: bl
    },
    fitInputWidth: Boolean,
    suffixIcon: {
      type: Wt,
      default: Fs
    },
    tagType: { ...Su.type, default: "info" },
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
      values: $r,
      default: "bottom-start"
    },
    ariaLabel: {
      type: String,
      default: void 0
    }
  },
  emits: [
    nt,
    yi,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = fe("select"), o = fe("input"), { t: r } = kt(), l = X1(e), {
      optionList: s,
      optionsArray: a,
      selectSize: i,
      readonly: u,
      handleResize: c,
      collapseTagSize: d,
      debouncedOnInputChange: v,
      debouncedQueryChange: h,
      deletePrevTag: p,
      deleteTag: f,
      deleteSelected: m,
      handleOptionSelect: y,
      scrollToOption: w,
      setSelected: C,
      resetInputHeight: b,
      managePlaceholder: S,
      showClose: T,
      selectDisabled: $,
      iconComponent: x,
      iconReverse: N,
      showNewOption: H,
      emptyText: B,
      toggleLastOptionHitState: I,
      resetInputState: Q,
      handleComposition: ee,
      onOptionCreate: oe,
      onOptionDestroy: re,
      handleMenuEnter: W,
      handleFocus: ne,
      focus: A,
      blur: j,
      handleBlur: le,
      handleClearClick: ue,
      handleClose: ge,
      handleKeydownEscape: me,
      toggleMenu: _e,
      selectOption: Te,
      getValueKey: Le,
      navigateOptions: we,
      handleDeleteTooltipTag: Ne,
      dropMenuVisible: Pe,
      reference: Be,
      input: Ot,
      iOSInput: ht,
      tooltipRef: gt,
      tagTooltipRef: mt,
      tags: bt,
      selectWrapper: yt,
      scrollbar: ut,
      queryChange: qt,
      groupQueryChange: Ze,
      handleMouseEnter: wt,
      handleMouseLeave: ct,
      showTagList: zt,
      collapseTagList: Ct,
      selectTagsStyle: z
    } = Q1(e, l, t), {
      inputWidth: J,
      selected: Ee,
      inputLength: dt,
      filteredOptionsCount: Gt,
      visible: X,
      selectedLabel: te,
      hoverIndex: de,
      query: ce,
      inputHovering: be,
      currentPlaceholder: Me,
      menuVisibleOnFocus: Ue,
      isOnComposition: Ht,
      options: Je,
      cachedOptions: oo,
      optionsCount: ro,
      prefixWidth: rn
    } = Qn(l), vn = _(() => {
      const Ge = [n.b()], hn = g(i);
      return hn && Ge.push(n.m(hn)), e.disabled && Ge.push(n.m("disabled")), Ge;
    }), O = _(() => [
      n.e("tags"),
      n.is("disabled", g($))
    ]), L = _(() => [
      n.b("tags-wrapper"),
      { "has-prefix": g(rn) && g(Ee).length }
    ]), K = _(() => [
      n.e("input"),
      n.is(g(i)),
      n.is("disabled", g($))
    ]), se = _(() => [
      n.e("input"),
      n.is(g(i)),
      n.em("input", "iOS")
    ]), qe = _(() => [
      n.is("empty", !e.allowCreate && !!g(ce) && g(Gt) === 0)
    ]), et = _(() => ({ maxWidth: `${g(J) > 123 ? g(J) - 123 : g(J) - 75}px` })), Yt = _(() => ({
      marginLeft: `${g(rn)}px`,
      flexGrow: 1,
      width: `${g(dt) / (g(J) - 32)}%`,
      maxWidth: `${g(J) - 42}px`
    }));
    it(xr, Xn({
      props: e,
      options: Je,
      optionsArray: a,
      cachedOptions: oo,
      optionsCount: ro,
      filteredOptionsCount: Gt,
      hoverIndex: de,
      handleOptionSelect: y,
      onOptionCreate: oe,
      onOptionDestroy: re,
      selectWrapper: yt,
      selected: Ee,
      setSelected: C,
      queryChange: qt,
      groupQueryChange: Ze
    })), Ae(() => {
      l.cachedPlaceHolder = Me.value = e.placeholder || (() => r("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Me.value = ""), Fn(yt, c), e.remote && e.multiple && b(), ve(() => {
        const Ge = Be.value && Be.value.$el;
        if (Ge && (J.value = Ge.getBoundingClientRect().width, t.slots.prefix)) {
          const hn = Ge.querySelector(`.${o.e("prefix")}`);
          rn.value = Math.max(hn.getBoundingClientRect().width + 11, 30);
        }
      }), C();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(nt, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(nt, "");
    const Xt = _(() => {
      var Ge, hn;
      return (hn = (Ge = gt.value) == null ? void 0 : Ge.popperRef) == null ? void 0 : hn.contentRef;
    });
    return {
      isIOS: zs,
      onOptionsRendered: (Ge) => {
        s.value = Ge;
      },
      prefixWidth: rn,
      selectSize: i,
      readonly: u,
      handleResize: c,
      collapseTagSize: d,
      debouncedOnInputChange: v,
      debouncedQueryChange: h,
      deletePrevTag: p,
      deleteTag: f,
      handleDeleteTooltipTag: Ne,
      deleteSelected: m,
      handleOptionSelect: y,
      scrollToOption: w,
      inputWidth: J,
      selected: Ee,
      inputLength: dt,
      filteredOptionsCount: Gt,
      visible: X,
      selectedLabel: te,
      hoverIndex: de,
      query: ce,
      inputHovering: be,
      currentPlaceholder: Me,
      menuVisibleOnFocus: Ue,
      isOnComposition: Ht,
      options: Je,
      resetInputHeight: b,
      managePlaceholder: S,
      showClose: T,
      selectDisabled: $,
      iconComponent: x,
      iconReverse: N,
      showNewOption: H,
      emptyText: B,
      toggleLastOptionHitState: I,
      resetInputState: Q,
      handleComposition: ee,
      handleMenuEnter: W,
      handleFocus: ne,
      focus: A,
      blur: j,
      handleBlur: le,
      handleClearClick: ue,
      handleClose: ge,
      handleKeydownEscape: me,
      toggleMenu: _e,
      selectOption: Te,
      getValueKey: Le,
      navigateOptions: we,
      dropMenuVisible: Pe,
      reference: Be,
      input: Ot,
      iOSInput: ht,
      tooltipRef: gt,
      popperPaneRef: Xt,
      tags: bt,
      selectWrapper: yt,
      scrollbar: ut,
      wrapperKls: vn,
      tagsKls: O,
      tagWrapperKls: L,
      inputKls: K,
      iOSInputKls: se,
      scrollbarKls: qe,
      selectTagsStyle: z,
      nsSelect: n,
      tagTextStyle: et,
      inputStyle: Yt,
      handleMouseEnter: wt,
      handleMouseLeave: ct,
      showTagList: zt,
      collapseTagList: Ct,
      tagTooltipRef: mt
    };
  }
}), ew = ["disabled", "autocomplete", "aria-label"], tw = ["disabled"], nw = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function ow(e, t, n, o, r, l) {
  const s = G("el-tag"), a = G("el-tooltip"), i = G("el-icon"), u = G("el-input"), c = G("el-option"), d = G("el-options"), v = G("el-scrollbar"), h = G("el-select-menu"), p = gl("click-outside");
  return Ke((E(), P("div", {
    ref: "selectWrapper",
    class: M(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...f) => e.handleMouseEnter && e.handleMouseEnter(...f)),
    onMouseleave: t[23] || (t[23] = (...f) => e.handleMouseLeave && e.handleMouseLeave(...f)),
    onClick: t[24] || (t[24] = Ye((...f) => e.toggleMenu && e.toggleMenu(...f), ["stop"]))
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
      default: F(() => [
        R("div", {
          class: "select-trigger",
          onMouseenter: t[20] || (t[20] = (f) => e.inputHovering = !0),
          onMouseleave: t[21] || (t[21] = (f) => e.inputHovering = !1)
        }, [
          e.multiple ? (E(), P("div", {
            key: 0,
            ref: "tags",
            tabindex: "-1",
            class: M(e.tagsKls),
            style: Se(e.selectTagsStyle),
            onClick: t[15] || (t[15] = (...f) => e.focus && e.focus(...f))
          }, [
            e.collapseTags && e.selected.length ? (E(), V(bo, {
              key: 0,
              onAfterLeave: e.resetInputHeight
            }, {
              default: F(() => [
                R("span", {
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
                    default: F(() => [
                      R("span", {
                        class: M(e.nsSelect.e("tags-text")),
                        style: Se(e.tagTextStyle)
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
                    default: F(() => [
                      e.collapseTagsTooltip ? (E(), V(a, {
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
                                default: F(() => [
                                  R("span", {
                                    class: M(e.nsSelect.e("tags-text")),
                                    style: Se({
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
                  }, 8, ["size", "type"])) : q("v-if", !0)
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : q("v-if", !0),
            e.collapseTags ? q("v-if", !0) : (E(), V(bo, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: F(() => [
                R("span", {
                  class: M(e.tagWrapperKls),
                  style: Se(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
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
                    default: F(() => [
                      R("span", {
                        class: M(e.nsSelect.e("tags-text")),
                        style: Se({ maxWidth: e.inputWidth - 75 + "px" })
                      }, ie(f.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 6)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            e.filterable && !e.selectDisabled ? Ke((E(), P("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[0] || (t[0] = (f) => e.query = f),
              type: "text",
              class: M(e.inputKls),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: Se(e.inputStyle),
              "aria-label": e.ariaLabel,
              onFocus: t[1] || (t[1] = (...f) => e.handleFocus && e.handleFocus(...f)),
              onBlur: t[2] || (t[2] = (...f) => e.handleBlur && e.handleBlur(...f)),
              onKeyup: t[3] || (t[3] = (...f) => e.managePlaceholder && e.managePlaceholder(...f)),
              onKeydown: [
                t[4] || (t[4] = (...f) => e.resetInputState && e.resetInputState(...f)),
                t[5] || (t[5] = rt(Ye((f) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[6] || (t[6] = rt(Ye((f) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[7] || (t[7] = rt((...f) => e.handleKeydownEscape && e.handleKeydownEscape(...f), ["esc"])),
                t[8] || (t[8] = rt(Ye((...f) => e.selectOption && e.selectOption(...f), ["stop", "prevent"]), ["enter"])),
                t[9] || (t[9] = rt((...f) => e.deletePrevTag && e.deletePrevTag(...f), ["delete"])),
                t[10] || (t[10] = rt((f) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[11] || (t[11] = (...f) => e.handleComposition && e.handleComposition(...f)),
              onCompositionupdate: t[12] || (t[12] = (...f) => e.handleComposition && e.handleComposition(...f)),
              onCompositionend: t[13] || (t[13] = (...f) => e.handleComposition && e.handleComposition(...f)),
              onInput: t[14] || (t[14] = (...f) => e.debouncedQueryChange && e.debouncedQueryChange(...f))
            }, null, 46, ew)), [
              [qu, e.query]
            ]) : q("v-if", !0)
          ], 6)) : q("v-if", !0),
          q(" fix: https://github.com/element-plus/element-plus/issues/11415 "),
          e.isIOS && !e.multiple && e.filterable && e.readonly ? (E(), P("input", {
            key: 1,
            ref: "iOSInput",
            class: M(e.iOSInputKls),
            disabled: e.selectDisabled,
            type: "text"
          }, null, 10, tw)) : q("v-if", !0),
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
              t[17] || (t[17] = rt(Ye((f) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = rt(Ye((f) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              rt(Ye(e.selectOption, ["stop", "prevent"]), ["enter"]),
              rt(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = rt((f) => e.visible = !1, ["tab"]))
            ]
          }, _n({
            suffix: F(() => [
              e.iconComponent && !e.showClose ? (E(), V(i, {
                key: 0,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: F(() => [
                  (E(), V(lt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0),
              e.showClose && e.clearIcon ? (E(), V(i, {
                key: 1,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: F(() => [
                  (E(), V(lt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : q("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: F(() => [
                R("div", nw, [
                  U(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "label", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: F(() => [
        Z(h, null, {
          default: F(() => [
            Ke(Z(v, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: M(e.scrollbarKls)
            }, {
              default: F(() => [
                e.showNewOption ? (E(), V(c, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : q("v-if", !0),
                Z(d, { onUpdateOptions: e.onOptionsRendered }, {
                  default: F(() => [
                    U(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [dn, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (E(), P($e, { key: 0 }, [
              e.$slots.empty ? U(e.$slots, "empty", { key: 0 }) : (E(), P("p", {
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
    [p, e.handleClose, e.popperPaneRef]
  ]);
}
var rw = /* @__PURE__ */ Ce(J1, [["render", ow], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const lw = D({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = fe("select"), n = k(!0), o = ye(), r = k([]);
    it($u, Xn({
      ...Qn(e)
    }));
    const l = pe(xr);
    Ae(() => {
      r.value = s(o.subTree);
    });
    const s = (i) => {
      const u = [];
      return Array.isArray(i.children) && i.children.forEach((c) => {
        var d;
        c.type && c.type.name === "ElOption" && c.component && c.component.proxy ? u.push(c.component.proxy) : (d = c.children) != null && d.length && u.push(...s(c));
      }), u;
    }, { groupQueryChange: a } = Nn(l);
    return Y(a, () => {
      n.value = r.value.some((i) => i.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function aw(e, t, n, o, r, l) {
  return Ke((E(), P("ul", {
    class: M(e.ns.be("group", "wrap"))
  }, [
    R("li", {
      class: M(e.ns.be("group", "title"))
    }, ie(e.label), 3),
    R("li", null, [
      R("ul", {
        class: M(e.ns.b("group"))
      }, [
        U(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [dn, e.visible]
  ]);
}
var Eu = /* @__PURE__ */ Ce(lw, [["render", aw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const sw = Tt(rw, {
  Option: Xl,
  OptionGroup: Eu
}), iw = Jn(Xl);
Jn(Eu);
const Ql = () => pe(_u, {}), uw = xe({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: he(Array),
    default: () => Il([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  size: {
    type: String,
    values: Oo
  }
}), cw = D({
  name: "ElPaginationSizes"
}), dw = /* @__PURE__ */ D({
  ...cw,
  props: uw,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: o } = kt(), r = fe("pagination"), l = Ql(), s = k(n.pageSize);
    Y(() => n.pageSizes, (u, c) => {
      if (!dr(u, c) && Array.isArray(u)) {
        const d = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", d);
      }
    }), Y(() => n.pageSize, (u) => {
      s.value = u;
    });
    const a = _(() => n.pageSizes);
    function i(u) {
      var c;
      u !== s.value && (s.value = u, (c = l.handleSizeChange) == null || c.call(l, Number(u)));
    }
    return (u, c) => (E(), P("span", {
      class: M(g(r).e("sizes"))
    }, [
      Z(g(sw), {
        "model-value": s.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        "validate-event": !1,
        onChange: i
      }, {
        default: F(() => [
          (E(!0), P($e, null, ze(g(a), (d) => (E(), V(g(iw), {
            key: d,
            value: d,
            label: d + g(o)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size"])
    ], 2));
  }
});
var fw = /* @__PURE__ */ Ce(dw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const pw = xe({
  size: {
    type: String,
    values: Oo
  }
}), vw = ["disabled"], hw = D({
  name: "ElPaginationJumper"
}), gw = /* @__PURE__ */ D({
  ...hw,
  props: pw,
  setup(e) {
    const { t } = kt(), n = fe("pagination"), { pageCount: o, disabled: r, currentPage: l, changeEvent: s } = Ql(), a = k(), i = _(() => {
      var d;
      return (d = a.value) != null ? d : l == null ? void 0 : l.value;
    });
    function u(d) {
      a.value = d ? +d : "";
    }
    function c(d) {
      d = Math.trunc(+d), s == null || s(d), a.value = void 0;
    }
    return (d, v) => (E(), P("span", {
      class: M(g(n).e("jump")),
      disabled: g(r)
    }, [
      R("span", {
        class: M([g(n).e("goto")])
      }, ie(g(t)("el.pagination.goto")), 3),
      Z(g(Yi), {
        size: d.size,
        class: M([g(n).e("editor"), g(n).is("in-pagination")]),
        min: 1,
        max: g(o),
        disabled: g(r),
        "model-value": g(i),
        "validate-event": !1,
        label: g(t)("el.pagination.page"),
        type: "number",
        "onUpdate:modelValue": u,
        onChange: c
      }, null, 8, ["size", "class", "max", "disabled", "model-value", "label"]),
      R("span", {
        class: M([g(n).e("classifier")])
      }, ie(g(t)("el.pagination.pageClassifier")), 3)
    ], 10, vw));
  }
});
var mw = /* @__PURE__ */ Ce(gw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const bw = xe({
  total: {
    type: Number,
    default: 1e3
  }
}), yw = ["disabled"], ww = D({
  name: "ElPaginationTotal"
}), Cw = /* @__PURE__ */ D({
  ...ww,
  props: bw,
  setup(e) {
    const { t } = kt(), n = fe("pagination"), { disabled: o } = Ql();
    return (r, l) => (E(), P("span", {
      class: M(g(n).e("total")),
      disabled: g(o)
    }, ie(g(t)("el.pagination.total", {
      total: r.total
    })), 11, yw));
  }
});
var Sw = /* @__PURE__ */ Ce(Cw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const _w = xe({
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
}), $w = ["onKeyup"], Ew = ["aria-current", "aria-label", "tabindex"], Tw = ["tabindex", "aria-label"], kw = ["aria-current", "aria-label", "tabindex"], Ow = ["tabindex", "aria-label"], xw = ["aria-current", "aria-label", "tabindex"], Pw = D({
  name: "ElPaginationPager"
}), Aw = /* @__PURE__ */ D({
  ...Pw,
  props: _w,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = fe("pager"), r = fe("icon"), { t: l } = kt(), s = k(!1), a = k(!1), i = k(!1), u = k(!1), c = k(!1), d = k(!1), v = _(() => {
      const b = n.pagerCount, S = (b - 1) / 2, T = Number(n.currentPage), $ = Number(n.pageCount);
      let x = !1, N = !1;
      $ > b && (T > b - S && (x = !0), T < $ - S && (N = !0));
      const H = [];
      if (x && !N) {
        const B = $ - (b - 2);
        for (let I = B; I < $; I++)
          H.push(I);
      } else if (!x && N)
        for (let B = 2; B < b; B++)
          H.push(B);
      else if (x && N) {
        const B = Math.floor(b / 2) - 1;
        for (let I = T - B; I <= T + B; I++)
          H.push(I);
      } else
        for (let B = 2; B < $; B++)
          H.push(B);
      return H;
    }), h = _(() => [
      "more",
      "btn-quickprev",
      r.b(),
      o.is("disabled", n.disabled)
    ]), p = _(() => [
      "more",
      "btn-quicknext",
      r.b(),
      o.is("disabled", n.disabled)
    ]), f = _(() => n.disabled ? -1 : 0);
    Lt(() => {
      const b = (n.pagerCount - 1) / 2;
      s.value = !1, a.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - b && (s.value = !0), n.currentPage < n.pageCount - b && (a.value = !0));
    });
    function m(b = !1) {
      n.disabled || (b ? i.value = !0 : u.value = !0);
    }
    function y(b = !1) {
      b ? c.value = !0 : d.value = !0;
    }
    function w(b) {
      const S = b.target;
      if (S.tagName.toLowerCase() === "li" && Array.from(S.classList).includes("number")) {
        const T = Number(S.textContent);
        T !== n.currentPage && t("change", T);
      } else
        S.tagName.toLowerCase() === "li" && Array.from(S.classList).includes("more") && C(b);
    }
    function C(b) {
      const S = b.target;
      if (S.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let T = Number(S.textContent);
      const $ = n.pageCount, x = n.currentPage, N = n.pagerCount - 2;
      S.className.includes("more") && (S.className.includes("quickprev") ? T = x - N : S.className.includes("quicknext") && (T = x + N)), Number.isNaN(+T) || (T < 1 && (T = 1), T > $ && (T = $)), T !== x && t("change", T);
    }
    return (b, S) => (E(), P("ul", {
      class: M(g(o).b()),
      onClick: C,
      onKeyup: rt(w, ["enter"])
    }, [
      b.pageCount > 0 ? (E(), P("li", {
        key: 0,
        class: M([[
          g(o).is("active", b.currentPage === 1),
          g(o).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === 1,
        "aria-label": g(l)("el.pagination.currentPage", { pager: 1 }),
        tabindex: g(f)
      }, " 1 ", 10, Ew)) : q("v-if", !0),
      s.value ? (E(), P("li", {
        key: 1,
        class: M(g(h)),
        tabindex: g(f),
        "aria-label": g(l)("el.pagination.prevPages", { pager: b.pagerCount - 2 }),
        onMouseenter: S[0] || (S[0] = (T) => m(!0)),
        onMouseleave: S[1] || (S[1] = (T) => i.value = !1),
        onFocus: S[2] || (S[2] = (T) => y(!0)),
        onBlur: S[3] || (S[3] = (T) => c.value = !1)
      }, [
        (i.value || c.value) && !b.disabled ? (E(), V(g(nd), { key: 0 })) : (E(), V(g(aa), { key: 1 }))
      ], 42, Tw)) : q("v-if", !0),
      (E(!0), P($e, null, ze(g(v), (T) => (E(), P("li", {
        key: T,
        class: M([[
          g(o).is("active", b.currentPage === T),
          g(o).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === T,
        "aria-label": g(l)("el.pagination.currentPage", { pager: T }),
        tabindex: g(f)
      }, ie(T), 11, kw))), 128)),
      a.value ? (E(), P("li", {
        key: 2,
        class: M(g(p)),
        tabindex: g(f),
        "aria-label": g(l)("el.pagination.nextPages", { pager: b.pagerCount - 2 }),
        onMouseenter: S[4] || (S[4] = (T) => m()),
        onMouseleave: S[5] || (S[5] = (T) => u.value = !1),
        onFocus: S[6] || (S[6] = (T) => y()),
        onBlur: S[7] || (S[7] = (T) => d.value = !1)
      }, [
        (u.value || d.value) && !b.disabled ? (E(), V(g(id), { key: 0 })) : (E(), V(g(aa), { key: 1 }))
      ], 42, Ow)) : q("v-if", !0),
      b.pageCount > 1 ? (E(), P("li", {
        key: 3,
        class: M([[
          g(o).is("active", b.currentPage === b.pageCount),
          g(o).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === b.pageCount,
        "aria-label": g(l)("el.pagination.currentPage", { pager: b.pageCount }),
        tabindex: g(f)
      }, ie(b.pageCount), 11, xw)) : q("v-if", !0)
    ], 42, $w));
  }
});
var Mw = /* @__PURE__ */ Ce(Aw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const tt = (e) => typeof e != "number", Iw = xe({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => Re(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  currentPage: Number,
  defaultCurrentPage: Number,
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: he(Array),
    default: () => Il([10, 20, 30, 40, 50, 100])
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
    default: () => uc
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: Wt,
    default: () => ml
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), Lw = {
  "update:current-page": (e) => Re(e),
  "update:page-size": (e) => Re(e),
  "size-change": (e) => Re(e),
  "current-change": (e) => Re(e),
  "prev-click": (e) => Re(e),
  "next-click": (e) => Re(e)
}, Es = "ElPagination";
var Rw = D({
  name: Es,
  props: Iw,
  emits: Lw,
  setup(e, { emit: t, slots: n }) {
    const { t: o } = kt(), r = fe("pagination"), l = ye().vnode.props || {}, s = "onUpdate:currentPage" in l || "onUpdate:current-page" in l || "onCurrentChange" in l, a = "onUpdate:pageSize" in l || "onUpdate:page-size" in l || "onSizeChange" in l, i = _(() => {
      if (tt(e.total) && tt(e.pageCount) || !tt(e.currentPage) && !s)
        return !1;
      if (e.layout.includes("sizes")) {
        if (tt(e.pageCount)) {
          if (!tt(e.total) && !tt(e.pageSize) && !a)
            return !1;
        } else if (!a)
          return !1;
      }
      return !0;
    }), u = k(tt(e.defaultPageSize) ? 10 : e.defaultPageSize), c = k(tt(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), d = _({
      get() {
        return tt(e.pageSize) ? u.value : e.pageSize;
      },
      set(C) {
        tt(e.pageSize) && (u.value = C), a && (t("update:page-size", C), t("size-change", C));
      }
    }), v = _(() => {
      let C = 0;
      return tt(e.pageCount) ? tt(e.total) || (C = Math.max(1, Math.ceil(e.total / d.value))) : C = e.pageCount, C;
    }), h = _({
      get() {
        return tt(e.currentPage) ? c.value : e.currentPage;
      },
      set(C) {
        let b = C;
        C < 1 ? b = 1 : C > v.value && (b = v.value), tt(e.currentPage) && (c.value = b), s && (t("update:current-page", b), t("current-change", b));
      }
    });
    Y(v, (C) => {
      h.value > C && (h.value = C);
    });
    function p(C) {
      h.value = C;
    }
    function f(C) {
      d.value = C;
      const b = v.value;
      h.value > b && (h.value = b);
    }
    function m() {
      e.disabled || (h.value -= 1, t("prev-click", h.value));
    }
    function y() {
      e.disabled || (h.value += 1, t("next-click", h.value));
    }
    function w(C, b) {
      C && (C.props || (C.props = {}), C.props.class = [C.props.class, b].join(" "));
    }
    return it(_u, {
      pageCount: v,
      disabled: _(() => e.disabled),
      currentPage: h,
      changeEvent: p,
      handleSizeChange: f
    }), () => {
      var C, b;
      if (!i.value)
        return We(Es, o("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && v.value <= 1)
        return null;
      const S = [], T = [], $ = ae("div", { class: r.e("rightwrapper") }, T), x = {
        prev: ae(F1, {
          disabled: e.disabled,
          currentPage: h.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: m
        }),
        jumper: ae(mw, {
          size: e.small ? "small" : "default"
        }),
        pager: ae(Mw, {
          currentPage: h.value,
          pageCount: v.value,
          pagerCount: e.pagerCount,
          onChange: p,
          disabled: e.disabled
        }),
        next: ae(K1, {
          disabled: e.disabled,
          currentPage: h.value,
          pageCount: v.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: y
        }),
        sizes: ae(fw, {
          pageSize: d.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          size: e.small ? "small" : "default"
        }),
        slot: (b = (C = n == null ? void 0 : n.default) == null ? void 0 : C.call(n)) != null ? b : null,
        total: ae(Sw, { total: tt(e.total) ? 0 : e.total })
      }, N = e.layout.split(",").map((B) => B.trim());
      let H = !1;
      return N.forEach((B) => {
        if (B === "->") {
          H = !0;
          return;
        }
        H ? T.push(x[B]) : S.push(x[B]);
      }), w(S[0], r.is("first")), w(S[S.length - 1], r.is("last")), H && T.length > 0 && (w(T[0], r.is("first")), w(T[T.length - 1], r.is("last")), S.push($)), ae("div", {
        class: [
          r.b(),
          r.is("background", e.background),
          {
            [r.m("small")]: e.small
          }
        ]
      }, S);
    };
  }
});
const Nw = Tt(Rw);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var Fw = /["'&<>]/, Bw = zw;
function zw(e) {
  var t = "" + e, n = Fw.exec(t);
  if (!n)
    return t;
  var o, r = "", l = 0, s = 0;
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
    s !== l && (r += t.substring(s, l)), s = l + 1, r += o;
  }
  return s !== l ? r + t.substring(s, l) : r;
}
const Hw = /* @__PURE__ */ Jy(Bw), Vr = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, Dw = function(e, t, n, o, r) {
  if (!t && !o && (!r || Array.isArray(r) && !r.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const l = o ? null : function(a, i) {
    return r ? (Array.isArray(r) || (r = [r]), r.map((u) => typeof u == "string" ? Xe(a, u) : u(a, i, e))) : (t !== "$key" && Rt(a) && "$value" in a && (a = a.$value), [Rt(a) ? Xe(a, t) : a]);
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
    key: l ? l(a, i) : null
  })).sort((a, i) => {
    let u = s(a, i);
    return u || (u = a.index - i.index), u * +n;
  }).map((a) => a.value);
}, Tu = function(e, t) {
  let n = null;
  return e.columns.forEach((o) => {
    o.id === t && (n = o);
  }), n;
}, Vw = function(e, t) {
  let n = null;
  for (let o = 0; o < e.columns.length; o++) {
    const r = e.columns[o];
    if (r.columnKey === t) {
      n = r;
      break;
    }
  }
  return n || vi("ElTable", `No column matching with column-key: ${t}`), n;
}, Ts = function(e, t, n) {
  const o = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return o ? Tu(e, o[0]) : null;
}, De = (e, t) => {
  if (!e)
    throw new Error("Row is required when get row identity");
  if (typeof t == "string") {
    if (!t.includes("."))
      return `${e[t]}`;
    const n = t.split(".");
    let o = e;
    for (const r of n)
      o = o[r];
    return `${o}`;
  } else if (typeof t == "function")
    return t.call(null, e);
}, wn = function(e, t) {
  const n = {};
  return (e || []).forEach((o, r) => {
    n[De(o, t)] = { row: o, index: r };
  }), n;
};
function Kw(e, t) {
  const n = {};
  let o;
  for (o in e)
    n[o] = e[o];
  for (o in t)
    if ($n(t, o)) {
      const r = t[o];
      typeof r < "u" && (n[o] = r);
    }
  return n;
}
function Zl(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function ku(e) {
  return e === "" || e !== void 0 && (e = Zl(e), Number.isNaN(e) && (e = 80)), e;
}
function Ww(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function jw(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function vo(e, t, n) {
  let o = !1;
  const r = e.indexOf(t), l = r !== -1, s = (a) => {
    a === "add" ? e.push(t) : e.splice(r, 1), o = !0, En(t.children) && t.children.forEach((i) => {
      vo(e, i, n ?? !l);
    });
  };
  return Hn(n) ? n && !l ? s("add") : !n && l && s("remove") : s(l ? "remove" : "add"), o;
}
function Uw(e, t, n = "children", o = "hasChildren") {
  const r = (s) => !(Array.isArray(s) && s.length);
  function l(s, a, i) {
    t(s, a, i), a.forEach((u) => {
      if (u[o]) {
        t(u, null, i + 1);
        return;
      }
      const c = u[n];
      r(c) || l(u, c, i + 1);
    });
  }
  e.forEach((s) => {
    if (s[o]) {
      t(s, null, 0);
      return;
    }
    const a = s[n];
    r(a) || l(s, a, 0);
  });
}
let Zt;
function qw(e, t, n, o, r) {
  r = di({
    enterable: !0,
    showArrow: !0
  }, r);
  const l = e == null ? void 0 : e.dataset.prefix, s = e == null ? void 0 : e.querySelector(`.${l}-scrollbar__wrap`);
  function a() {
    const m = r.effect === "light", y = document.createElement("div");
    return y.className = [
      `${l}-popper`,
      m ? "is-light" : "is-dark",
      r.popperClass || ""
    ].join(" "), n = Hw(n), y.innerHTML = n, y.style.zIndex = String(o()), e == null || e.appendChild(y), y;
  }
  function i() {
    const m = document.createElement("div");
    return m.className = `${l}-popper__arrow`, m;
  }
  function u() {
    c && c.update();
  }
  Zt == null || Zt(), Zt = () => {
    try {
      c && c.destroy(), h && (e == null || e.removeChild(h)), t.removeEventListener("mouseenter", d), t.removeEventListener("mouseleave", v), s == null || s.removeEventListener("scroll", Zt), Zt = void 0;
    } catch {
    }
  };
  let c = null, d = u, v = Zt;
  r.enterable && ({ onOpen: d, onClose: v } = Di({
    showAfter: r.showAfter,
    hideAfter: r.hideAfter,
    open: u,
    close: Zt
  }));
  const h = a();
  h.onmouseenter = d, h.onmouseleave = v;
  const p = [];
  if (r.offset && p.push({
    name: "offset",
    options: {
      offset: [0, r.offset]
    }
  }), r.showArrow) {
    const m = h.appendChild(i());
    p.push({
      name: "arrow",
      options: {
        element: m,
        padding: 10
      }
    });
  }
  const f = r.popperOptions || {};
  return c = Fi(t, h, {
    placement: r.placement || "top",
    strategy: "fixed",
    ...f,
    modifiers: f.modifiers ? p.concat(f.modifiers) : p
  }), t.addEventListener("mouseenter", d), t.addEventListener("mouseleave", v), s == null || s.addEventListener("scroll", Zt), c;
}
function Ou(e) {
  return e.children ? lm(e.children, Ou) : [e];
}
function ks(e, t) {
  return e + t.colSpan;
}
const xu = (e, t, n, o) => {
  let r = 0, l = e;
  const s = n.states.columns.value;
  if (o) {
    const i = Ou(o[e]);
    r = s.slice(0, s.indexOf(i[0])).reduce(ks, 0), l = r + i.reduce(ks, 0) - 1;
  } else
    r = e;
  let a;
  switch (t) {
    case "left":
      l < n.states.fixedLeafColumnsLength.value && (a = "left");
      break;
    case "right":
      r >= s.length - n.states.rightFixedLeafColumnsLength.value && (a = "right");
      break;
    default:
      l < n.states.fixedLeafColumnsLength.value ? a = "left" : r >= s.length - n.states.rightFixedLeafColumnsLength.value && (a = "right");
  }
  return a ? {
    direction: a,
    start: r,
    after: l
  } : {};
}, Jl = (e, t, n, o, r, l = 0) => {
  const s = [], { direction: a, start: i, after: u } = xu(t, n, o, r);
  if (a) {
    const c = a === "left";
    s.push(`${e}-fixed-column--${a}`), c && u + l === o.states.fixedLeafColumnsLength.value - 1 ? s.push("is-last-column") : !c && i - l === o.states.columns.value.length - o.states.rightFixedLeafColumnsLength.value && s.push("is-first-column");
  }
  return s;
};
function Os(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const ea = (e, t, n, o) => {
  const {
    direction: r,
    start: l = 0,
    after: s = 0
  } = xu(e, t, n, o);
  if (!r)
    return;
  const a = {}, i = r === "left", u = n.states.columns.value;
  return i ? a.left = u.slice(0, l).reduce(Os, 0) : a.right = u.slice(s + 1).reverse().reduce(Os, 0), a;
}, Yn = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function Gw(e) {
  const t = ye(), n = k(!1), o = k([]);
  return {
    updateExpandRows: () => {
      const i = e.data.value || [], u = e.rowKey.value;
      if (n.value)
        o.value = i.slice();
      else if (u) {
        const c = wn(o.value, u);
        o.value = i.reduce((d, v) => {
          const h = De(v, u);
          return c[h] && d.push(v), d;
        }, []);
      } else
        o.value = [];
    },
    toggleRowExpansion: (i, u) => {
      vo(o.value, i, u) && t.emit("expand-change", i, o.value.slice());
    },
    setExpandRowKeys: (i) => {
      t.store.assertRowKey();
      const u = e.data.value || [], c = e.rowKey.value, d = wn(u, c);
      o.value = i.reduce((v, h) => {
        const p = d[h];
        return p && v.push(p.row), v;
      }, []);
    },
    isRowExpanded: (i) => {
      const u = e.rowKey.value;
      return u ? !!wn(o.value, u)[De(i, u)] : o.value.includes(i);
    },
    states: {
      expandRows: o,
      defaultExpandAll: n
    }
  };
}
function Yw(e) {
  const t = ye(), n = k(null), o = k(null), r = (u) => {
    t.store.assertRowKey(), n.value = u, s(u);
  }, l = () => {
    n.value = null;
  }, s = (u) => {
    const { data: c, rowKey: d } = e;
    let v = null;
    d.value && (v = (g(c) || []).find((h) => De(h, d.value) === u)), o.value = v, t.emit("current-change", o.value, null);
  };
  return {
    setCurrentRowKey: r,
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
          const v = De(d, u);
          s(v);
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
function Xw(e) {
  const t = k([]), n = k({}), o = k(16), r = k(!1), l = k({}), s = k("hasChildren"), a = k("children"), i = ye(), u = _(() => {
    if (!e.rowKey.value)
      return {};
    const y = e.data.value || [];
    return d(y);
  }), c = _(() => {
    const y = e.rowKey.value, w = Object.keys(l.value), C = {};
    return w.length && w.forEach((b) => {
      if (l.value[b].length) {
        const S = { children: [] };
        l.value[b].forEach((T) => {
          const $ = De(T, y);
          S.children.push($), T[s.value] && !C[$] && (C[$] = { children: [] });
        }), C[b] = S;
      }
    }), C;
  }), d = (y) => {
    const w = e.rowKey.value, C = {};
    return Uw(y, (b, S, T) => {
      const $ = De(b, w);
      Array.isArray(S) ? C[$] = {
        children: S.map((x) => De(x, w)),
        level: T
      } : r.value && (C[$] = {
        children: [],
        lazy: !0,
        level: T
      });
    }, a.value, s.value), C;
  }, v = (y = !1, w = ((C) => (C = i.store) == null ? void 0 : C.states.defaultExpandAll.value)()) => {
    var C;
    const b = u.value, S = c.value, T = Object.keys(b), $ = {};
    if (T.length) {
      const x = g(n), N = [], H = (I, Q) => {
        if (y)
          return t.value ? w || t.value.includes(Q) : !!(w || I != null && I.expanded);
        {
          const ee = w || t.value && t.value.includes(Q);
          return !!(I != null && I.expanded || ee);
        }
      };
      T.forEach((I) => {
        const Q = x[I], ee = { ...b[I] };
        if (ee.expanded = H(Q, I), ee.lazy) {
          const { loaded: oe = !1, loading: re = !1 } = Q || {};
          ee.loaded = !!oe, ee.loading = !!re, N.push(I);
        }
        $[I] = ee;
      });
      const B = Object.keys(S);
      r.value && B.length && N.length && B.forEach((I) => {
        const Q = x[I], ee = S[I].children;
        if (N.includes(I)) {
          if ($[I].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          $[I].children = ee;
        } else {
          const { loaded: oe = !1, loading: re = !1 } = Q || {};
          $[I] = {
            lazy: !0,
            loaded: !!oe,
            loading: !!re,
            expanded: H(Q, I),
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
  const h = (y) => {
    t.value = y, v();
  }, p = (y, w) => {
    i.store.assertRowKey();
    const C = e.rowKey.value, b = De(y, C), S = b && n.value[b];
    if (b && S && "expanded" in S) {
      const T = S.expanded;
      w = typeof w > "u" ? !S.expanded : w, n.value[b].expanded = w, T !== w && i.emit("expand-change", y, w), i.store.updateTableScrollY();
    }
  }, f = (y) => {
    i.store.assertRowKey();
    const w = e.rowKey.value, C = De(y, w), b = n.value[C];
    r.value && b && "loaded" in b && !b.loaded ? m(y, C, b) : p(y, void 0);
  }, m = (y, w, C) => {
    const { load: b } = i.props;
    b && !n.value[w].loaded && (n.value[w].loading = !0, b(y, C, (S) => {
      if (!Array.isArray(S))
        throw new TypeError("[ElTable] data must be an array");
      n.value[w].loading = !1, n.value[w].loaded = !0, n.value[w].expanded = !0, S.length && (l.value[w] = S), i.emit("expand-change", y, !0);
    }));
  };
  return {
    loadData: m,
    loadOrToggle: f,
    toggleTreeExpansion: p,
    updateTreeExpandKeys: h,
    updateTreeData: v,
    normalize: d,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: o,
      lazy: r,
      lazyTreeNodeMap: l,
      lazyColumnIdentifier: s,
      childrenColumnName: a
    }
  };
}
const Qw = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : Dw(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, Uo = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children && n.children.length > 0 ? t.push.apply(t, Uo(n.children)) : t.push(n);
  }), t;
};
function Zw() {
  var e;
  const t = ye(), { size: n } = Qn((e = t.proxy) == null ? void 0 : e.$props), o = k(null), r = k([]), l = k([]), s = k(!1), a = k([]), i = k([]), u = k([]), c = k([]), d = k([]), v = k([]), h = k([]), p = k([]), f = [], m = k(0), y = k(0), w = k(0), C = k(!1), b = k([]), S = k(!1), T = k(!1), $ = k(null), x = k({}), N = k(null), H = k(null), B = k(null), I = k(null), Q = k(null);
  Y(r, () => t.state && W(!1), {
    deep: !0
  });
  const ee = () => {
    if (!o.value)
      throw new Error("[ElTable] prop row-key is required");
  }, oe = (X) => {
    var te;
    (te = X.children) == null || te.forEach((de) => {
      de.fixed = X.fixed, oe(de);
    });
  }, re = () => {
    a.value.forEach((be) => {
      oe(be);
    }), c.value = a.value.filter((be) => be.fixed === !0 || be.fixed === "left"), d.value = a.value.filter((be) => be.fixed === "right"), c.value.length > 0 && a.value[0] && a.value[0].type === "selection" && !a.value[0].fixed && (a.value[0].fixed = !0, c.value.unshift(a.value[0]));
    const X = a.value.filter((be) => !be.fixed);
    i.value = [].concat(c.value).concat(X).concat(d.value);
    const te = Uo(X), de = Uo(c.value), ce = Uo(d.value);
    m.value = te.length, y.value = de.length, w.value = ce.length, u.value = [].concat(de).concat(te).concat(ce), s.value = c.value.length > 0 || d.value.length > 0;
  }, W = (X, te = !1) => {
    X && re(), te ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, ne = (X) => b.value.includes(X), A = () => {
    C.value = !1, b.value.length && (b.value = [], t.emit("selection-change", []));
  }, j = () => {
    let X;
    if (o.value) {
      X = [];
      const te = wn(b.value, o.value), de = wn(r.value, o.value);
      for (const ce in te)
        $n(te, ce) && !de[ce] && X.push(te[ce].row);
    } else
      X = b.value.filter((te) => !r.value.includes(te));
    if (X.length) {
      const te = b.value.filter((de) => !X.includes(de));
      b.value = te, t.emit("selection-change", te.slice());
    }
  }, le = () => (b.value || []).slice(), ue = (X, te = void 0, de = !0) => {
    if (vo(b.value, X, te)) {
      const be = (b.value || []).slice();
      de && t.emit("select", be, X), t.emit("selection-change", be);
    }
  }, ge = () => {
    var X, te;
    const de = T.value ? !C.value : !(C.value || b.value.length);
    C.value = de;
    let ce = !1, be = 0;
    const Me = (te = (X = t == null ? void 0 : t.store) == null ? void 0 : X.states) == null ? void 0 : te.rowKey.value;
    r.value.forEach((Ue, Ht) => {
      const Je = Ht + be;
      $.value ? $.value.call(null, Ue, Je) && vo(b.value, Ue, de) && (ce = !0) : vo(b.value, Ue, de) && (ce = !0), be += Te(De(Ue, Me));
    }), ce && t.emit("selection-change", b.value ? b.value.slice() : []), t.emit("select-all", b.value);
  }, me = () => {
    const X = wn(b.value, o.value);
    r.value.forEach((te) => {
      const de = De(te, o.value), ce = X[de];
      ce && (b.value[ce.index] = te);
    });
  }, _e = () => {
    var X, te, de;
    if (((X = r.value) == null ? void 0 : X.length) === 0) {
      C.value = !1;
      return;
    }
    let ce;
    o.value && (ce = wn(b.value, o.value));
    const be = function(Je) {
      return ce ? !!ce[De(Je, o.value)] : b.value.includes(Je);
    };
    let Me = !0, Ue = 0, Ht = 0;
    for (let Je = 0, oo = (r.value || []).length; Je < oo; Je++) {
      const ro = (de = (te = t == null ? void 0 : t.store) == null ? void 0 : te.states) == null ? void 0 : de.rowKey.value, rn = Je + Ht, vn = r.value[Je], O = $.value && $.value.call(null, vn, rn);
      if (be(vn))
        Ue++;
      else if (!$.value || O) {
        Me = !1;
        break;
      }
      Ht += Te(De(vn, ro));
    }
    Ue === 0 && (Me = !1), C.value = Me;
  }, Te = (X) => {
    var te;
    if (!t || !t.store)
      return 0;
    const { treeData: de } = t.store.states;
    let ce = 0;
    const be = (te = de.value[X]) == null ? void 0 : te.children;
    return be && (ce += be.length, be.forEach((Me) => {
      ce += Te(Me);
    })), ce;
  }, Le = (X, te) => {
    Array.isArray(X) || (X = [X]);
    const de = {};
    return X.forEach((ce) => {
      x.value[ce.id] = te, de[ce.columnKey || ce.id] = te;
    }), de;
  }, we = (X, te, de) => {
    H.value && H.value !== X && (H.value.order = null), H.value = X, B.value = te, I.value = de;
  }, Ne = () => {
    let X = g(l);
    Object.keys(x.value).forEach((te) => {
      const de = x.value[te];
      if (!de || de.length === 0)
        return;
      const ce = Tu({
        columns: u.value
      }, te);
      ce && ce.filterMethod && (X = X.filter((be) => de.some((Me) => ce.filterMethod.call(null, Me, be, ce))));
    }), N.value = X;
  }, Pe = () => {
    r.value = Qw(N.value, {
      sortingColumn: H.value,
      sortProp: B.value,
      sortOrder: I.value
    });
  }, Be = (X = void 0) => {
    X && X.filter || Ne(), Pe();
  }, Ot = (X) => {
    const { tableHeaderRef: te } = t.refs;
    if (!te)
      return;
    const de = Object.assign({}, te.filterPanels), ce = Object.keys(de);
    if (ce.length)
      if (typeof X == "string" && (X = [X]), Array.isArray(X)) {
        const be = X.map((Me) => Vw({
          columns: u.value
        }, Me));
        ce.forEach((Me) => {
          const Ue = be.find((Ht) => Ht.id === Me);
          Ue && (Ue.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: be,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        ce.forEach((be) => {
          const Me = u.value.find((Ue) => Ue.id === be);
          Me && (Me.filteredValue = []);
        }), x.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, ht = () => {
    H.value && (we(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: gt,
    toggleRowExpansion: mt,
    updateExpandRows: bt,
    states: yt,
    isRowExpanded: ut
  } = Gw({
    data: r,
    rowKey: o
  }), {
    updateTreeExpandKeys: qt,
    toggleTreeExpansion: Ze,
    updateTreeData: wt,
    loadOrToggle: ct,
    states: zt
  } = Xw({
    data: r,
    rowKey: o
  }), {
    updateCurrentRowData: Ct,
    updateCurrentRow: z,
    setCurrentRowKey: J,
    states: Ee
  } = Yw({
    data: r,
    rowKey: o
  });
  return {
    assertRowKey: ee,
    updateColumns: re,
    scheduleLayout: W,
    isSelected: ne,
    clearSelection: A,
    cleanSelection: j,
    getSelectionRows: le,
    toggleRowSelection: ue,
    _toggleAllSelection: ge,
    toggleAllSelection: null,
    updateSelectionByRowKey: me,
    updateAllSelected: _e,
    updateFilters: Le,
    updateCurrentRow: z,
    updateSort: we,
    execFilter: Ne,
    execSort: Pe,
    execQuery: Be,
    clearFilter: Ot,
    clearSort: ht,
    toggleRowExpansion: mt,
    setExpandRowKeysAdapter: (X) => {
      gt(X), qt(X);
    },
    setCurrentRowKey: J,
    toggleRowExpansionAdapter: (X, te) => {
      u.value.some(({ type: ce }) => ce === "expand") ? mt(X, te) : Ze(X, te);
    },
    isRowExpanded: ut,
    updateExpandRows: bt,
    updateCurrentRowData: Ct,
    loadOrToggle: ct,
    updateTreeData: wt,
    states: {
      tableSize: n,
      rowKey: o,
      data: r,
      _data: l,
      isComplex: s,
      _columns: a,
      originColumns: i,
      columns: u,
      fixedColumns: c,
      rightFixedColumns: d,
      leafColumns: v,
      fixedLeafColumns: h,
      rightFixedLeafColumns: p,
      updateOrderFns: f,
      leafColumnsLength: m,
      fixedLeafColumnsLength: y,
      rightFixedLeafColumnsLength: w,
      isAllSelected: C,
      selection: b,
      reserveSelection: S,
      selectOnIndeterminate: T,
      selectable: $,
      filters: x,
      filteredData: N,
      sortingColumn: H,
      sortProp: B,
      sortOrder: I,
      hoverRow: Q,
      ...yt,
      ...zt,
      ...Ee
    }
  };
}
function fl(e, t) {
  return e.map((n) => {
    var o;
    return n.id === t.id ? t : ((o = n.children) != null && o.length && (n.children = fl(n.children, t)), n);
  });
}
function pl(e) {
  e.forEach((t) => {
    var n, o;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (o = t.children) != null && o.length && pl(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function Jw() {
  const e = ye(), t = Zw();
  return {
    ns: fe("table"),
    ...t,
    mutations: {
      setData(s, a) {
        const i = g(s._data) !== a;
        s.data.value = a, s._data.value = a, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), g(s.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : i ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(s, a, i, u) {
        const c = g(s._columns);
        let d = [];
        i ? (i && !i.children && (i.children = []), i.children.push(a), d = fl(c, i)) : (c.push(a), d = c), pl(d), s._columns.value = d, s.updateOrderFns.push(u), a.type === "selection" && (s.selectable.value = a.selectable, s.reserveSelection.value = a.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(s, a) {
        var i;
        ((i = a.getColumnIndex) == null ? void 0 : i.call(a)) !== a.no && (pl(s._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(s, a, i, u) {
        const c = g(s._columns) || [];
        if (i)
          i.children.splice(i.children.findIndex((v) => v.id === a.id), 1), ve(() => {
            var v;
            ((v = i.children) == null ? void 0 : v.length) === 0 && delete i.children;
          }), s._columns.value = fl(c, i);
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
          const d = g(s.columns).find((v) => v.property === i);
          d && (d.order = u, e.store.updateSort(d, i, u), e.store.commit("changeSortCondition", { init: c }));
        }
      },
      changeSortCondition(s, a) {
        const { sortingColumn: i, sortProp: u, sortOrder: c } = s, d = g(i), v = g(u), h = g(c);
        h === null && (s.sortingColumn.value = null, s.sortProp.value = null);
        const p = { filter: !0 };
        e.store.execQuery(p), (!a || !(a.silent || a.init)) && e.emit("sort-change", {
          column: d,
          prop: v,
          order: h
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
      ve(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const ho = {
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
function e2(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = Jw();
  return n.toggleAllSelection = Bn(n._toggleAllSelection, 10), Object.keys(ho).forEach((o) => {
    Pu(Au(t, o), o, n);
  }), t2(n, t), n;
}
function t2(e, t) {
  Object.keys(ho).forEach((n) => {
    Y(() => Au(t, n), (o) => {
      Pu(o, n, e);
    });
  });
}
function Pu(e, t, n) {
  let o = e, r = ho[t];
  typeof ho[t] == "object" && (r = r.key, o = o || ho[t].default), n.states[r].value = o;
}
function Au(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let o = e;
    return n.forEach((r) => {
      o = o[r];
    }), o;
  } else
    return e[t];
}
class n2 {
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
      const r = this.scrollY.value;
      return o = n.wrapRef.scrollHeight > n.wrapRef.clientHeight, this.scrollY.value = o, r !== o;
    }
    return !1;
  }
  setHeight(t, n = "height") {
    if (!Ie)
      return;
    const o = this.table.vnode.el;
    if (t = Ww(t), this.height.value = Number(t), !o && (t || t === 0))
      return ve(() => this.setHeight(t, n));
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
    const r = this.getFlattenColumns(), l = r.filter((i) => typeof i.width != "number");
    if (r.forEach((i) => {
      typeof i.width == "number" && i.realWidth && (i.realWidth = null);
    }), l.length > 0 && t) {
      if (r.forEach((i) => {
        o += Number(i.width || i.minWidth || 80);
      }), o <= n) {
        this.scrollX.value = !1;
        const i = n - o;
        if (l.length === 1)
          l[0].realWidth = Number(l[0].minWidth || 80) + i;
        else {
          const u = l.reduce((v, h) => v + Number(h.minWidth || 80), 0), c = i / u;
          let d = 0;
          l.forEach((v, h) => {
            if (h === 0)
              return;
            const p = Math.floor(Number(v.minWidth || 80) * c);
            d += p, v.realWidth = Number(v.minWidth || 80) + p;
          }), l[0].realWidth = Number(l[0].minWidth || 80) + i - d;
        }
      } else
        this.scrollX.value = !0, l.forEach((i) => {
          i.realWidth = Number(i.minWidth);
        });
      this.bodyWidth.value = Math.max(o, n), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else
      r.forEach((i) => {
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
      var r, l;
      switch (t) {
        case "columns":
          (r = o.state) == null || r.onColumnsChange(this);
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
const { CheckboxGroup: o2 } = Gn, r2 = D({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: Gn,
    ElCheckboxGroup: o2,
    ElScrollbar: kr,
    ElTooltip: lu,
    ElIcon: Qe,
    ArrowDown: Fs,
    ArrowUp: wc
  },
  directives: { ClickOutside: uu },
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
    const t = ye(), { t: n } = kt(), o = fe("table-filter"), r = t == null ? void 0 : t.parent;
    r.filterPanels.value[e.column.id] || (r.filterPanels.value[e.column.id] = t);
    const l = k(!1), s = k(null), a = _(() => e.column && e.column.filters), i = _({
      get: () => {
        var b;
        return (((b = e.column) == null ? void 0 : b.filteredValue) || [])[0];
      },
      set: (b) => {
        u.value && (typeof b < "u" && b !== null ? u.value.splice(0, 1, b) : u.value.splice(0, 1));
      }
    }), u = _({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(b) {
        e.column && e.upDataColumn("filteredValue", b);
      }
    }), c = _(() => e.column ? e.column.filterMultiple : !0), d = (b) => b.value === i.value, v = () => {
      l.value = !1;
    }, h = (b) => {
      b.stopPropagation(), l.value = !l.value;
    }, p = () => {
      l.value = !1;
    }, f = () => {
      w(u.value), v();
    }, m = () => {
      u.value = [], w(u.value), v();
    }, y = (b) => {
      i.value = b, w(typeof b < "u" && b !== null ? u.value : []), v();
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
    const C = _(() => {
      var b, S;
      return (S = (b = s.value) == null ? void 0 : b.popperRef) == null ? void 0 : S.contentRef;
    });
    return {
      tooltipVisible: l,
      multiple: c,
      filteredValue: u,
      filterValue: i,
      filters: a,
      handleConfirm: f,
      handleReset: m,
      handleSelect: y,
      isActive: d,
      t: n,
      ns: o,
      showFilterPanel: h,
      hideFilterPanel: p,
      popperPaneRef: C,
      tooltip: s
    };
  }
}), l2 = { key: 0 }, a2 = ["disabled"], s2 = ["label", "onClick"];
function i2(e, t, n, o, r, l) {
  const s = G("el-checkbox"), a = G("el-checkbox-group"), i = G("el-scrollbar"), u = G("arrow-up"), c = G("arrow-down"), d = G("el-icon"), v = G("el-tooltip"), h = gl("click-outside");
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
    content: F(() => [
      e.multiple ? (E(), P("div", l2, [
        R("div", {
          class: M(e.ns.e("content"))
        }, [
          Z(i, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: F(() => [
              Z(a, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (p) => e.filteredValue = p),
                class: M(e.ns.e("checkbox-group"))
              }, {
                default: F(() => [
                  (E(!0), P($e, null, ze(e.filters, (p) => (E(), V(s, {
                    key: p.value,
                    label: p.value
                  }, {
                    default: F(() => [
                      Ve(ie(p.text), 1)
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
            onClick: t[1] || (t[1] = (...p) => e.handleConfirm && e.handleConfirm(...p))
          }, ie(e.t("el.table.confirmFilter")), 11, a2),
          R("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...p) => e.handleReset && e.handleReset(...p))
          }, ie(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (E(), P("ul", {
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
          onClick: t[3] || (t[3] = (p) => e.handleSelect(null))
        }, ie(e.t("el.table.clearFilter")), 3),
        (E(!0), P($e, null, ze(e.filters, (p) => (E(), P("li", {
          key: p.value,
          class: M([e.ns.e("list-item"), e.ns.is("active", e.isActive(p))]),
          label: p.value,
          onClick: (f) => e.handleSelect(p.value)
        }, ie(p.text), 11, s2))), 128))
      ], 2))
    ]),
    default: F(() => [
      Ke((E(), P("span", {
        class: M([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...p) => e.showFilterPanel && e.showFilterPanel(...p))
      }, [
        Z(d, null, {
          default: F(() => [
            e.column.filterOpened ? (E(), V(u, { key: 0 })) : (E(), V(c, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [h, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var u2 = /* @__PURE__ */ Ce(r2, [["render", i2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function Mu(e) {
  const t = ye();
  vl(() => {
    n.value.addObserver(t);
  }), Ae(() => {
    o(n.value), r(n.value);
  }), hl(() => {
    o(n.value), r(n.value);
  }), Eo(() => {
    n.value.removeObserver(t);
  });
  const n = _(() => {
    const l = e.layout;
    if (!l)
      throw new Error("Can not find table layout.");
    return l;
  }), o = (l) => {
    var s;
    const a = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("colgroup > col")) || [];
    if (!a.length)
      return;
    const i = l.getFlattenColumns(), u = {};
    i.forEach((c) => {
      u[c.id] = c;
    });
    for (let c = 0, d = a.length; c < d; c++) {
      const v = a[c], h = v.getAttribute("name"), p = u[h];
      p && v.setAttribute("width", p.realWidth || p.width);
    }
  }, r = (l) => {
    var s, a;
    const i = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let c = 0, d = i.length; c < d; c++)
      i[c].setAttribute("width", l.scrollY.value ? l.gutterWidth : "0");
    const u = ((a = e.vnode.el) == null ? void 0 : a.querySelectorAll("th.gutter")) || [];
    for (let c = 0, d = u.length; c < d; c++) {
      const v = u[c];
      v.style.width = l.scrollY.value ? `${l.gutterWidth}px` : "0", v.style.display = l.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: n.value,
    onColumnsChange: o,
    onScrollableChange: r
  };
}
const Ut = Symbol("ElTable");
function c2(e, t) {
  const n = ye(), o = pe(Ut), r = (f) => {
    f.stopPropagation();
  }, l = (f, m) => {
    !m.filters && m.sortable ? p(f, m, !1) : m.filterable && !m.sortable && r(f), o == null || o.emit("header-click", m, f);
  }, s = (f, m) => {
    o == null || o.emit("header-contextmenu", m, f);
  }, a = k(null), i = k(!1), u = k({}), c = (f, m) => {
    if (Ie && !(m.children && m.children.length > 0) && a.value && e.border) {
      i.value = !0;
      const y = o;
      t("set-drag-visible", !0);
      const C = (y == null ? void 0 : y.vnode.el).getBoundingClientRect().left, b = n.vnode.el.querySelector(`th.${m.id}`), S = b.getBoundingClientRect(), T = S.left - C + 30;
      gi(b, "noclick"), u.value = {
        startMouseLeft: f.clientX,
        startLeft: S.right - C,
        startColumnLeft: S.left - C,
        tableLeft: C
      };
      const $ = y == null ? void 0 : y.refs.resizeProxy;
      $.style.left = `${u.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const x = (H) => {
        const B = H.clientX - u.value.startMouseLeft, I = u.value.startLeft + B;
        $.style.left = `${Math.max(T, I)}px`;
      }, N = () => {
        if (i.value) {
          const { startColumnLeft: H, startLeft: B } = u.value, Q = Number.parseInt($.style.left, 10) - H;
          m.width = m.realWidth = Q, y == null || y.emit("header-dragend", m.width, B - H, m, f), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", i.value = !1, a.value = null, u.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", N), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          Qr(b, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", x), document.addEventListener("mouseup", N);
    }
  }, d = (f, m) => {
    if (m.children && m.children.length > 0)
      return;
    const y = f.target;
    if (!Dn(y))
      return;
    const w = y == null ? void 0 : y.closest("th");
    if (!(!m || !m.resizable) && !i.value && e.border) {
      const C = w.getBoundingClientRect(), b = document.body.style;
      C.width > 12 && C.right - f.pageX < 8 ? (b.cursor = "col-resize", Do(w, "is-sortable") && (w.style.cursor = "col-resize"), a.value = m) : i.value || (b.cursor = "", Do(w, "is-sortable") && (w.style.cursor = "pointer"), a.value = null);
    }
  }, v = () => {
    Ie && (document.body.style.cursor = "");
  }, h = ({ order: f, sortOrders: m }) => {
    if (f === "")
      return m[0];
    const y = m.indexOf(f || null);
    return m[y > m.length - 2 ? 0 : y + 1];
  }, p = (f, m, y) => {
    var w;
    f.stopPropagation();
    const C = m.order === y ? null : y || h(m), b = (w = f.target) == null ? void 0 : w.closest("th");
    if (b && Do(b, "noclick")) {
      Qr(b, "noclick");
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
    handleHeaderClick: l,
    handleHeaderContextMenu: s,
    handleMouseDown: c,
    handleMouseMove: d,
    handleMouseOut: v,
    handleSortClick: p,
    handleFilterClick: r
  };
}
function d2(e) {
  const t = pe(Ut), n = fe("table");
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
      const h = ea(i, c.fixed, e.store, u);
      return Yn(h, "left"), Yn(h, "right"), Object.assign({}, v, h);
    },
    getHeaderCellClass: (a, i, u, c) => {
      const d = Jl(n.b(), i, c.fixed, e.store, u), v = [
        c.id,
        c.order,
        c.headerAlign,
        c.className,
        c.labelClassName,
        ...d
      ];
      c.children || v.push("is-leaf"), c.sortable && v.push("is-sortable");
      const h = t == null ? void 0 : t.props.headerCellClassName;
      return typeof h == "string" ? v.push(h) : typeof h == "function" && v.push(h.call(null, {
        rowIndex: a,
        columnIndex: i,
        row: u,
        column: c
      })), v.push(n.e("cell")), v.filter((p) => !!p).join(" ");
    }
  };
}
const Iu = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, Iu(n.children))) : t.push(n);
  }), t;
}, f2 = (e) => {
  let t = 1;
  const n = (l, s) => {
    if (s && (l.level = s.level + 1, t < l.level && (t = l.level)), l.children) {
      let a = 0;
      l.children.forEach((i) => {
        n(i, l), a += i.colSpan;
      }), l.colSpan = a;
    } else
      l.colSpan = 1;
  };
  e.forEach((l) => {
    l.level = 1, n(l, void 0);
  });
  const o = [];
  for (let l = 0; l < t; l++)
    o.push([]);
  return Iu(e).forEach((l) => {
    l.children ? (l.rowSpan = 1, l.children.forEach((s) => s.isSubColumn = !0)) : l.rowSpan = t - l.level + 1, o[l.level - 1].push(l);
  }), o;
};
function p2(e) {
  const t = pe(Ut), n = _(() => f2(e.store.states.originColumns.value));
  return {
    isGroup: _(() => {
      const l = n.value.length > 1;
      return l && t && (t.state.isGroup.value = !0), l;
    }),
    toggleAllSelection: (l) => {
      l.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
var v2 = D({
  name: "ElTableHeader",
  components: {
    ElCheckbox: Gn
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
    const n = ye(), o = pe(Ut), r = fe("table"), l = k({}), { onColumnsChange: s, onScrollableChange: a } = Mu(o);
    Ae(async () => {
      await ve(), await ve();
      const { prop: T, order: $ } = e.defaultSort;
      o == null || o.store.commit("sort", { prop: T, order: $, init: !0 });
    });
    const {
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: c,
      handleMouseMove: d,
      handleMouseOut: v,
      handleSortClick: h,
      handleFilterClick: p
    } = c2(e, t), {
      getHeaderRowStyle: f,
      getHeaderRowClass: m,
      getHeaderCellStyle: y,
      getHeaderCellClass: w
    } = d2(e), { isGroup: C, toggleAllSelection: b, columnRows: S } = p2(e);
    return n.state = {
      onColumnsChange: s,
      onScrollableChange: a
    }, n.filterPanels = l, {
      ns: r,
      filterPanels: l,
      onColumnsChange: s,
      onScrollableChange: a,
      columnRows: S,
      getHeaderRowClass: m,
      getHeaderRowStyle: f,
      getHeaderCellClass: w,
      getHeaderCellStyle: y,
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: c,
      handleMouseMove: d,
      handleMouseOut: v,
      handleSortClick: h,
      handleFilterClick: p,
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
      getHeaderCellClass: r,
      getHeaderRowClass: l,
      getHeaderRowStyle: s,
      handleHeaderClick: a,
      handleHeaderContextMenu: i,
      handleMouseDown: u,
      handleMouseMove: c,
      handleSortClick: d,
      handleMouseOut: v,
      store: h,
      $parent: p
    } = this;
    let f = 1;
    return ae("thead", {
      class: { [e.is("group")]: t }
    }, n.map((m, y) => ae("tr", {
      class: l(y),
      key: y,
      style: s(y)
    }, m.map((w, C) => (w.rowSpan > f && (f = w.rowSpan), ae("th", {
      class: r(y, C, m, w),
      colspan: w.colSpan,
      key: `${w.id}-thead`,
      rowspan: w.rowSpan,
      style: o(y, C, m, w),
      onClick: (b) => a(b, w),
      onContextmenu: (b) => i(b, w),
      onMousedown: (b) => u(b, w),
      onMousemove: (b) => c(b, w),
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
          store: h,
          _self: p
        }) : w.label,
        w.sortable && ae("span", {
          onClick: (b) => d(b, w),
          class: "caret-wrapper"
        }, [
          ae("i", {
            onClick: (b) => d(b, w, "ascending"),
            class: "sort-caret ascending"
          }),
          ae("i", {
            onClick: (b) => d(b, w, "descending"),
            class: "sort-caret descending"
          })
        ]),
        w.filterable && ae(u2, {
          store: h,
          placement: w.filterPlacement || "bottom-start",
          column: w,
          upDataColumn: (b, S) => {
            w[b] = S;
          }
        })
      ])
    ]))))));
  }
});
function h2(e) {
  const t = pe(Ut), n = k(""), o = k(ae("div")), { nextZIndex: r } = Wi(), l = (p, f, m) => {
    var y;
    const w = t, C = Vr(p);
    let b;
    const S = (y = w == null ? void 0 : w.vnode.el) == null ? void 0 : y.dataset.prefix;
    C && (b = Ts({
      columns: e.store.states.columns.value
    }, C, S), b && (w == null || w.emit(`cell-${m}`, f, b, C, p))), w == null || w.emit(`row-${m}`, f, b, p);
  }, s = (p, f) => {
    l(p, f, "dblclick");
  }, a = (p, f) => {
    e.store.commit("setCurrentRow", f), l(p, f, "click");
  }, i = (p, f) => {
    l(p, f, "contextmenu");
  }, u = Bn((p) => {
    e.store.commit("setHoverRow", p);
  }, 30), c = Bn(() => {
    e.store.commit("setHoverRow", null);
  }, 30), d = (p) => {
    const f = window.getComputedStyle(p, null), m = Number.parseInt(f.paddingLeft, 10) || 0, y = Number.parseInt(f.paddingRight, 10) || 0, w = Number.parseInt(f.paddingTop, 10) || 0, C = Number.parseInt(f.paddingBottom, 10) || 0;
    return {
      left: m,
      right: y,
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
      var y;
      const w = t, C = Vr(p), b = (y = w == null ? void 0 : w.vnode.el) == null ? void 0 : y.dataset.prefix;
      if (C) {
        const W = Ts({
          columns: e.store.states.columns.value
        }, C, b), ne = w.hoverState = { cell: C, column: W, row: f };
        w == null || w.emit("cell-mouse-enter", ne.row, ne.column, ne.cell, p);
      }
      if (!m)
        return;
      const S = p.target.querySelector(".cell");
      if (!(Do(S, `${b}-tooltip`) && S.childNodes.length))
        return;
      const T = document.createRange();
      T.setStart(S, 0), T.setEnd(S, S.childNodes.length);
      let $ = T.getBoundingClientRect().width, x = T.getBoundingClientRect().height;
      $ - Math.floor($) < 1e-3 && ($ = Math.floor($)), x - Math.floor(x) < 1e-3 && (x = Math.floor(x));
      const { top: B, left: I, right: Q, bottom: ee } = d(S), oe = I + Q, re = B + ee;
      ($ + oe > S.offsetWidth || x + re > S.offsetHeight || S.scrollWidth > S.offsetWidth) && qw(t == null ? void 0 : t.refs.tableWrapper, C, C.innerText || C.textContent, r, m);
    },
    handleCellMouseLeave: (p) => {
      if (!Vr(p))
        return;
      const m = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", m == null ? void 0 : m.row, m == null ? void 0 : m.column, m == null ? void 0 : m.cell, p);
    },
    tooltipContent: n,
    tooltipTrigger: o
  };
}
function g2(e) {
  const t = pe(Ut), n = fe("table");
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
      const h = t == null ? void 0 : t.props.cellStyle;
      let p = h ?? {};
      typeof h == "function" && (p = h.call(null, {
        rowIndex: u,
        columnIndex: c,
        row: d,
        column: v
      }));
      const f = ea(c, e == null ? void 0 : e.fixed, e.store);
      return Yn(f, "left"), Yn(f, "right"), Object.assign({}, p, f);
    },
    getCellClass: (u, c, d, v, h) => {
      const p = Jl(n.b(), c, e == null ? void 0 : e.fixed, e.store, void 0, h), f = [v.id, v.align, v.className, ...p], m = t == null ? void 0 : t.props.cellClassName;
      return typeof m == "string" ? f.push(m) : typeof m == "function" && f.push(m.call(null, {
        rowIndex: u,
        columnIndex: c,
        row: d,
        column: v
      })), f.push(n.e("cell")), f.filter((y) => !!y).join(" ");
    },
    getSpan: (u, c, d, v) => {
      let h = 1, p = 1;
      const f = t == null ? void 0 : t.props.spanMethod;
      if (typeof f == "function") {
        const m = f({
          row: u,
          column: c,
          rowIndex: d,
          columnIndex: v
        });
        Array.isArray(m) ? (h = m[0], p = m[1]) : typeof m == "object" && (h = m.rowspan, p = m.colspan);
      }
      return { rowspan: h, colspan: p };
    },
    getColspanRealWidth: (u, c, d) => {
      if (c < 1)
        return u[d].realWidth;
      const v = u.map(({ realWidth: h, width: p }) => h || p).slice(d, d + c);
      return Number(v.reduce((h, p) => Number(h) + Number(p), -1));
    }
  };
}
function m2(e) {
  const t = pe(Ut), n = fe("table"), {
    handleDoubleClick: o,
    handleClick: r,
    handleContextMenu: l,
    handleMouseEnter: s,
    handleMouseLeave: a,
    handleCellMouseEnter: i,
    handleCellMouseLeave: u,
    tooltipContent: c,
    tooltipTrigger: d
  } = h2(e), {
    getRowStyle: v,
    getRowClass: h,
    getCellStyle: p,
    getCellClass: f,
    getSpan: m,
    getColspanRealWidth: y
  } = g2(e), w = _(() => e.store.states.columns.value.findIndex(({ type: $ }) => $ === "default")), C = ($, x) => {
    const N = t.props.rowKey;
    return N ? De($, N) : x;
  }, b = ($, x, N, H = !1) => {
    const { tooltipEffect: B, tooltipOptions: I, store: Q } = e, { indent: ee, columns: oe } = Q.states, re = h($, x);
    let W = !0;
    return N && (re.push(n.em("row", `level-${N.level}`)), W = N.display), ae("tr", {
      style: [W ? null : {
        display: "none"
      }, v($, x)],
      class: re,
      key: C($, x),
      onDblclick: (A) => o(A, $),
      onClick: (A) => r(A, $),
      onContextmenu: (A) => l(A, $),
      onMouseenter: () => s(x),
      onMouseleave: a
    }, oe.value.map((A, j) => {
      const { rowspan: le, colspan: ue } = m($, A, x, j);
      if (!le || !ue)
        return null;
      const ge = Object.assign({}, A);
      ge.realWidth = y(oe.value, ue, j);
      const me = {
        store: e.store,
        _self: e.context || t,
        column: ge,
        row: $,
        $index: x,
        cellIndex: j,
        expanded: H
      };
      j === w.value && N && (me.treeNode = {
        indent: N.level * ee.value,
        level: N.level
      }, typeof N.expanded == "boolean" && (me.treeNode.expanded = N.expanded, "loading" in N && (me.treeNode.loading = N.loading), "noLazyChildren" in N && (me.treeNode.noLazyChildren = N.noLazyChildren)));
      const _e = `${x},${j}`, Te = ge.columnKey || ge.rawColumnKey || "", Le = S(j, A, me), we = A.showOverflowTooltip && di({
        effect: B
      }, I, A.showOverflowTooltip);
      return ae("td", {
        style: p(x, j, $, A),
        class: f(x, j, $, A, ue - 1),
        key: `${Te}${_e}`,
        rowspan: le,
        colspan: ue,
        onMouseenter: (Ne) => i(Ne, $, we),
        onMouseleave: u
      }, [Le]);
    }));
  }, S = ($, x, N) => x.renderCell(N);
  return {
    wrappedRowRender: ($, x) => {
      const N = e.store, { isRowExpanded: H, assertRowKey: B } = N, { treeData: I, lazyTreeNodeMap: Q, childrenColumnName: ee, rowKey: oe } = N.states, re = N.states.columns.value;
      if (re.some(({ type: ne }) => ne === "expand")) {
        const ne = H($), A = b($, x, void 0, ne), j = t.renderExpanded;
        return ne ? j ? [
          [
            A,
            ae("tr", {
              key: `expanded-row__${A.key}`
            }, [
              ae("td", {
                colspan: re.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [j({ row: $, $index: x, store: N, expanded: ne })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), A) : [[A]];
      } else if (Object.keys(I.value).length) {
        B();
        const ne = De($, oe.value);
        let A = I.value[ne], j = null;
        A && (j = {
          expanded: A.expanded,
          level: A.level,
          display: !0
        }, typeof A.lazy == "boolean" && (typeof A.loaded == "boolean" && A.loaded && (j.noLazyChildren = !(A.children && A.children.length)), j.loading = A.loading));
        const le = [b($, x, j)];
        if (A) {
          let ue = 0;
          const ge = (_e, Te) => {
            _e && _e.length && Te && _e.forEach((Le) => {
              const we = {
                display: Te.display && Te.expanded,
                level: Te.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, Ne = De(Le, oe.value);
              if (Ne == null)
                throw new Error("For nested data item, row-key is required.");
              if (A = { ...I.value[Ne] }, A && (we.expanded = A.expanded, A.level = A.level || we.level, A.display = !!(A.expanded && we.display), typeof A.lazy == "boolean" && (typeof A.loaded == "boolean" && A.loaded && (we.noLazyChildren = !(A.children && A.children.length)), we.loading = A.loading)), ue++, le.push(b(Le, x + ue, we)), A) {
                const Pe = Q.value[Ne] || Le[ee.value];
                ge(Pe, A);
              }
            });
          };
          A.display = !0;
          const me = Q.value[ne] || $[ee.value];
          ge(me, A);
        }
        return le;
      } else
        return b($, x, void 0);
    },
    tooltipContent: c,
    tooltipTrigger: d
  };
}
const b2 = {
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
var y2 = D({
  name: "ElTableBody",
  props: b2,
  setup(e) {
    const t = ye(), n = pe(Ut), o = fe("table"), { wrappedRowRender: r, tooltipContent: l, tooltipTrigger: s } = m2(e), { onColumnsChange: a, onScrollableChange: i } = Mu(n);
    return Y(e.store.states.hoverRow, (u, c) => {
      !e.store.states.isComplex.value || !Ie || Sm(() => {
        const d = t == null ? void 0 : t.vnode.el, v = Array.from((d == null ? void 0 : d.children) || []).filter((f) => f == null ? void 0 : f.classList.contains(`${o.e("row")}`)), h = v[c], p = v[u];
        h && Qr(h, "hover-row"), p && gi(p, "hover-row");
      });
    }), Eo(() => {
      var u;
      (u = Zt) == null || u();
    }), {
      ns: o,
      onColumnsChange: a,
      onScrollableChange: i,
      wrappedRowRender: r,
      tooltipContent: l,
      tooltipTrigger: s
    };
  },
  render() {
    const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
    return ae("tbody", {}, [
      n.reduce((o, r) => o.concat(e(r, o.length)), [])
    ]);
  }
});
function ta(e) {
  const t = e.tableLayout === "auto";
  let n = e.columns || [];
  t && n.every((r) => r.width === void 0) && (n = []);
  const o = (r) => {
    const l = {
      key: `${e.tableLayout}_${r.id}`,
      style: {},
      name: void 0
    };
    return t ? l.style = {
      width: `${r.width}px`
    } : l.name = r.id, l;
  };
  return ae("colgroup", {}, n.map((r) => ae("col", o(r))));
}
ta.props = ["columns", "tableLayout"];
function w2() {
  const e = pe(Ut), t = e == null ? void 0 : e.store, n = _(() => t.states.fixedLeafColumnsLength.value), o = _(() => t.states.rightFixedColumns.value.length), r = _(() => t.states.columns.value.length), l = _(() => t.states.fixedColumns.value.length), s = _(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: o,
    columnsCount: r,
    leftFixedCount: l,
    rightFixedCount: s,
    columns: t.states.columns
  };
}
function C2(e) {
  const { columns: t } = w2(), n = fe("table");
  return {
    getCellClasses: (l, s) => {
      const a = l[s], i = [
        n.e("cell"),
        a.id,
        a.align,
        a.labelClassName,
        ...Jl(n.b(), s, a.fixed, e.store)
      ];
      return a.className && i.push(a.className), a.children || i.push(n.is("leaf")), i;
    },
    getCellStyles: (l, s) => {
      const a = ea(s, l.fixed, e.store);
      return Yn(a, "left"), Yn(a, "right"), a;
    },
    columns: t
  };
}
var S2 = D({
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
    const { getCellClasses: t, getCellStyles: n, columns: o } = C2(e);
    return {
      ns: fe("table"),
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
      sumText: r,
      ns: l
    } = this, s = this.store.states.data.value;
    let a = [];
    return o ? a = o({
      columns: e,
      data: s
    }) : e.forEach((i, u) => {
      if (u === 0) {
        a[u] = r;
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
      const h = Math.max.apply(null, d);
      v ? a[u] = "" : a[u] = c.reduce((p, f) => {
        const m = Number(f);
        return Number.isNaN(+m) ? p : Number.parseFloat((p + f).toFixed(Math.min(h, 20)));
      }, 0);
    }), ae("table", {
      class: l.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      ta({
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
function _2(e) {
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
function $2(e, t, n, o) {
  const r = k(!1), l = k(null), s = k(!1), a = (A) => {
    s.value = A;
  }, i = k({
    width: null,
    height: null,
    headerHeight: null
  }), u = k(!1), c = {
    display: "inline-block",
    verticalAlign: "middle"
  }, d = k(), v = k(0), h = k(0), p = k(0), f = k(0), m = k(0);
  Lt(() => {
    t.setHeight(e.height);
  }), Lt(() => {
    t.setMaxHeight(e.maxHeight);
  }), Y(() => [e.currentRowKey, n.states.rowKey], ([A, j]) => {
    !g(j) || !g(A) || n.setCurrentRowKey(`${A}`);
  }, {
    immediate: !0
  }), Y(() => e.data, (A) => {
    o.store.commit("setData", A);
  }, {
    immediate: !0,
    deep: !0
  }), Lt(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const y = () => {
    o.store.commit("setHoverRow", null), o.hoverState && (o.hoverState = null);
  }, w = (A, j) => {
    const { pixelX: le, pixelY: ue } = j;
    Math.abs(le) >= Math.abs(ue) && (o.refs.bodyWrapper.scrollLeft += j.pixelX / 5);
  }, C = _(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), b = _(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), S = () => {
    C.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(N);
  };
  Ae(async () => {
    await ve(), n.updateColumns(), H(), requestAnimationFrame(S);
    const A = o.vnode.el, j = o.refs.headerWrapper;
    e.flexible && A && A.parentElement && (A.parentElement.style.minWidth = "0"), i.value = {
      width: d.value = A.offsetWidth,
      height: A.offsetHeight,
      headerHeight: e.showHeader && j ? j.offsetHeight : null
    }, n.states.columns.value.forEach((le) => {
      le.filteredValue && le.filteredValue.length && o.store.commit("filterChange", {
        column: le,
        values: le.filteredValue,
        silent: !0
      });
    }), o.$ready = !0;
  });
  const T = (A, j) => {
    if (!A)
      return;
    const le = Array.from(A.classList).filter((ue) => !ue.startsWith("is-scrolling-"));
    le.push(t.scrollX.value ? j : "is-scrolling-none"), A.className = le.join(" ");
  }, $ = (A) => {
    const { tableWrapper: j } = o.refs;
    T(j, A);
  }, x = (A) => {
    const { tableWrapper: j } = o.refs;
    return !!(j && j.classList.contains(A));
  }, N = function() {
    if (!o.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const Te = "is-scrolling-none";
      x(Te) || $(Te);
      return;
    }
    const A = o.refs.scrollBarRef.wrapRef;
    if (!A)
      return;
    const { scrollLeft: j, offsetWidth: le, scrollWidth: ue } = A, { headerWrapper: ge, footerWrapper: me } = o.refs;
    ge && (ge.scrollLeft = j), me && (me.scrollLeft = j);
    const _e = ue - le - 1;
    j >= _e ? $("is-scrolling-right") : $(j === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, H = () => {
    o.refs.scrollBarRef && (o.refs.scrollBarRef.wrapRef && en(o.refs.scrollBarRef.wrapRef, "scroll", N, {
      passive: !0
    }), e.fit ? Fn(o.vnode.el, B) : en(window, "resize", B), Fn(o.refs.bodyWrapper, () => {
      var A, j;
      B(), (j = (A = o.refs) == null ? void 0 : A.scrollBarRef) == null || j.update();
    }));
  }, B = () => {
    var A, j, le, ue;
    const ge = o.vnode.el;
    if (!o.$ready || !ge)
      return;
    let me = !1;
    const {
      width: _e,
      height: Te,
      headerHeight: Le
    } = i.value, we = d.value = ge.offsetWidth;
    _e !== we && (me = !0);
    const Ne = ge.offsetHeight;
    (e.height || C.value) && Te !== Ne && (me = !0);
    const Pe = e.tableLayout === "fixed" ? o.refs.headerWrapper : (A = o.refs.tableHeaderRef) == null ? void 0 : A.$el;
    e.showHeader && (Pe == null ? void 0 : Pe.offsetHeight) !== Le && (me = !0), v.value = ((j = o.refs.tableWrapper) == null ? void 0 : j.scrollHeight) || 0, p.value = (Pe == null ? void 0 : Pe.scrollHeight) || 0, f.value = ((le = o.refs.footerWrapper) == null ? void 0 : le.offsetHeight) || 0, m.value = ((ue = o.refs.appendWrapper) == null ? void 0 : ue.offsetHeight) || 0, h.value = v.value - p.value - f.value - m.value, me && (i.value = {
      width: we,
      height: Ne,
      headerHeight: e.showHeader && (Pe == null ? void 0 : Pe.offsetHeight) || 0
    }, S());
  }, I = kn(), Q = _(() => {
    const { bodyWidth: A, scrollY: j, gutterWidth: le } = t;
    return A.value ? `${A.value - (j.value ? le : 0)}px` : "";
  }), ee = _(() => e.maxHeight ? "fixed" : e.tableLayout), oe = _(() => {
    if (e.data && e.data.length)
      return null;
    let A = "100%";
    e.height && h.value && (A = `${h.value}px`);
    const j = d.value;
    return {
      width: j ? `${j}px` : "",
      height: A
    };
  }), re = _(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), W = _(() => e.height ? {
    height: "100%"
  } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? {
    maxHeight: `calc(${e.maxHeight} - ${p.value + f.value}px)`
  } : {
    maxHeight: `${e.maxHeight - p.value - f.value}px`
  } : {});
  return {
    isHidden: r,
    renderExpanded: l,
    setDragVisible: a,
    isGroup: u,
    handleMouseLeave: y,
    handleHeaderFooterMousewheel: w,
    tableSize: I,
    emptyBlockStyle: oe,
    handleFixedMousewheel: (A, j) => {
      const le = o.refs.bodyWrapper;
      if (Math.abs(j.spinY) > 0) {
        const ue = le.scrollTop;
        j.pixelY < 0 && ue !== 0 && A.preventDefault(), j.pixelY > 0 && le.scrollHeight - le.clientHeight > ue && A.preventDefault(), le.scrollTop += Math.ceil(j.pixelY / 5);
      } else
        le.scrollLeft += Math.ceil(j.pixelX / 5);
    },
    resizeProxyVisible: s,
    bodyWidth: Q,
    resizeState: i,
    doLayout: S,
    tableBodyStyles: b,
    tableLayout: ee,
    scrollbarViewStyle: c,
    tableInnerStyle: re,
    scrollbarStyle: W
  };
}
function E2(e) {
  const t = k(), n = () => {
    const r = e.vnode.el.querySelector(".hidden-columns"), l = { childList: !0, subtree: !0 }, s = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      s.forEach((a) => a());
    }), t.value.observe(r, l);
  };
  Ae(() => {
    n();
  }), Eo(() => {
    var o;
    (o = t.value) == null || o.disconnect();
  });
}
var T2 = {
  data: {
    type: Array,
    default: () => []
  },
  size: eo,
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
const k2 = () => {
  const e = k(), t = (l, s) => {
    const a = e.value;
    a && a.scrollTo(l, s);
  }, n = (l, s) => {
    const a = e.value;
    a && Re(s) && ["Top", "Left"].includes(l) && a[`setScroll${l}`](s);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (l) => n("Top", l),
    setScrollLeft: (l) => n("Left", l)
  };
};
let O2 = 1;
const x2 = D({
  name: "ElTable",
  directives: {
    Mousewheel: a1
  },
  components: {
    TableHeader: v2,
    TableBody: y2,
    TableFooter: S2,
    ElScrollbar: kr,
    hColgroup: ta
  },
  props: T2,
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
    const { t } = kt(), n = fe("table"), o = ye();
    it(Ut, o);
    const r = e2(o, e);
    o.store = r;
    const l = new n2({
      store: o.store,
      table: o,
      fit: e.fit,
      showHeader: e.showHeader
    });
    o.layout = l;
    const s = _(() => (r.states.data.value || []).length === 0), {
      setCurrentRow: a,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: c,
      clearFilter: d,
      toggleAllSelection: v,
      toggleRowExpansion: h,
      clearSort: p,
      sort: f
    } = _2(r), {
      isHidden: m,
      renderExpanded: y,
      setDragVisible: w,
      isGroup: C,
      handleMouseLeave: b,
      handleHeaderFooterMousewheel: S,
      tableSize: T,
      emptyBlockStyle: $,
      handleFixedMousewheel: x,
      resizeProxyVisible: N,
      bodyWidth: H,
      resizeState: B,
      doLayout: I,
      tableBodyStyles: Q,
      tableLayout: ee,
      scrollbarViewStyle: oe,
      tableInnerStyle: re,
      scrollbarStyle: W
    } = $2(e, l, r, o), { scrollBarRef: ne, scrollTo: A, setScrollLeft: j, setScrollTop: le } = k2(), ue = Bn(I, 50), ge = `${n.namespace.value}-table_${O2++}`;
    o.tableId = ge, o.state = {
      isGroup: C,
      resizeState: B,
      doLayout: I,
      debouncedUpdateLayout: ue
    };
    const me = _(() => e.sumText || t("el.table.sumText")), _e = _(() => e.emptyText || t("el.table.emptyText"));
    return E2(o), {
      ns: n,
      layout: l,
      store: r,
      handleHeaderFooterMousewheel: S,
      handleMouseLeave: b,
      tableId: ge,
      tableSize: T,
      isHidden: m,
      isEmpty: s,
      renderExpanded: y,
      resizeProxyVisible: N,
      resizeState: B,
      isGroup: C,
      bodyWidth: H,
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
      toggleRowExpansion: h,
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
      tableInnerStyle: re,
      scrollbarStyle: W,
      scrollBarRef: ne,
      scrollTo: A,
      setScrollLeft: j,
      setScrollTop: le
    };
  }
}), P2 = ["data-prefix"], A2 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function M2(e, t, n, o, r, l) {
  const s = G("hColgroup"), a = G("table-header"), i = G("table-body"), u = G("el-scrollbar"), c = G("table-footer"), d = gl("mousewheel");
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
    style: Se(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (...v) => e.handleMouseLeave && e.handleMouseLeave(...v))
  }, [
    R("div", {
      class: M(e.ns.e("inner-wrapper")),
      style: Se(e.tableInnerStyle)
    }, [
      R("div", A2, [
        U(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? Ke((E(), P("div", {
        key: 0,
        ref: "headerWrapper",
        class: M(e.ns.e("header-wrapper"))
      }, [
        R("table", {
          ref: "tableHeader",
          class: M(e.ns.e("header")),
          style: Se(e.tableBodyStyles),
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
      ]) : q("v-if", !0),
      R("div", {
        ref: "bodyWrapper",
        class: M(e.ns.e("body-wrapper"))
      }, [
        Z(u, {
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
              style: Se({
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
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : q("v-if", !0),
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
              style: Se(e.emptyBlockStyle),
              class: M(e.ns.e("empty-block"))
            }, [
              R("span", {
                class: M(e.ns.e("empty-text"))
              }, [
                U(e.$slots, "empty", {}, () => [
                  Ve(ie(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : q("v-if", !0),
            e.$slots.append ? (E(), P("div", {
              key: 1,
              ref: "appendWrapper",
              class: M(e.ns.e("append-wrapper"))
            }, [
              U(e.$slots, "append")
            ], 2)) : q("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary ? Ke((E(), P("div", {
        key: 1,
        ref: "footerWrapper",
        class: M(e.ns.e("footer-wrapper"))
      }, [
        Z(c, {
          border: e.border,
          "default-sort": e.defaultSort,
          store: e.store,
          style: Se(e.tableBodyStyles),
          "sum-text": e.computedSumText,
          "summary-method": e.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
      ], 2)), [
        [dn, !e.isEmpty],
        [d, e.handleHeaderFooterMousewheel]
      ]) : q("v-if", !0),
      e.border || e.isGroup ? (E(), P("div", {
        key: 2,
        class: M(e.ns.e("border-left-patch"))
      }, null, 2)) : q("v-if", !0)
    ], 6),
    Ke(R("div", {
      ref: "resizeProxy",
      class: M(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [dn, e.resizeProxyVisible]
    ])
  ], 46, P2);
}
var I2 = /* @__PURE__ */ Ce(x2, [["render", M2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const L2 = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, R2 = {
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
}, N2 = (e) => L2[e] || "", F2 = {
  selection: {
    renderHeader({ store: e, column: t }) {
      function n() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return ae(Gn, {
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
      return ae(Gn, {
        disabled: t.selectable ? !t.selectable.call(null, e, o) : !1,
        size: n.states.tableSize.value,
        onChange: () => {
          n.commit("rowSelectedChanged", e);
        },
        onClick: (r) => r.stopPropagation(),
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
      const { ns: o } = t, r = [o.e("expand-icon")];
      return n && r.push(o.em("expand-icon", "expanded")), ae("div", {
        class: r,
        onClick: function(s) {
          s.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          ae(Qe, null, {
            default: () => [ae(ml)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function B2({
  row: e,
  column: t,
  $index: n
}) {
  var o;
  const r = t.property, l = r && hm(e, r).value;
  return t && t.formatter ? t.formatter(e, t, l, n) : ((o = l == null ? void 0 : l.toString) == null ? void 0 : o.call(l)) || "";
}
function z2({
  row: e,
  treeNode: t,
  store: n
}, o = !1) {
  const { ns: r } = n;
  if (!t)
    return o ? [
      ae("span", {
        class: r.e("placeholder")
      })
    ] : null;
  const l = [], s = function(a) {
    a.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && l.push(ae("span", {
    class: r.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const a = [
      r.e("expand-icon"),
      t.expanded ? r.em("expand-icon", "expanded") : ""
    ];
    let i = ml;
    t.loading && (i = yl), l.push(ae("div", {
      class: a,
      onClick: s
    }, {
      default: () => [
        ae(Qe, { class: { [r.is("loading")]: t.loading } }, {
          default: () => [ae(i)]
        })
      ]
    }));
  } else
    l.push(ae("span", {
      class: r.e("placeholder")
    }));
  return l;
}
function xs(e, t) {
  return e.reduce((n, o) => (n[o] = o, n), t);
}
function H2(e, t) {
  const n = ye();
  return {
    registerComplexWatchers: () => {
      const l = ["fixed"], s = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, a = xs(l, s);
      Object.keys(a).forEach((i) => {
        const u = s[i];
        $n(t, u) && Y(() => t[u], (c) => {
          let d = c;
          u === "width" && i === "realWidth" && (d = Zl(c)), u === "minWidth" && i === "realMinWidth" && (d = ku(c)), n.columnConfig.value[u] = d, n.columnConfig.value[i] = d;
          const v = u === "fixed";
          e.value.store.scheduleLayout(v);
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
      }, a = xs(l, s);
      Object.keys(a).forEach((i) => {
        const u = s[i];
        $n(t, u) && Y(() => t[u], (c) => {
          n.columnConfig.value[i] = c;
        });
      });
    }
  };
}
function D2(e, t, n) {
  const o = ye(), r = k(""), l = k(!1), s = k(), a = k(), i = fe("table");
  Lt(() => {
    s.value = e.align ? `is-${e.align}` : null, s.value;
  }), Lt(() => {
    a.value = e.headerAlign ? `is-${e.headerAlign}` : s.value, a.value;
  });
  const u = _(() => {
    let b = o.vnode.vParent || o.parent;
    for (; b && !b.tableId && !b.columnId; )
      b = b.vnode.vParent || b.parent;
    return b;
  }), c = _(() => {
    const { store: b } = o.parent;
    if (!b)
      return !1;
    const { treeData: S } = b.states, T = S.value;
    return T && Object.keys(T).length > 0;
  }), d = k(Zl(e.width)), v = k(ku(e.minWidth)), h = (b) => (d.value && (b.width = d.value), v.value && (b.minWidth = v.value), !d.value && v.value && (b.width = void 0), b.minWidth || (b.minWidth = 80), b.realWidth = Number(b.width === void 0 ? b.minWidth : b.width), b), p = (b) => {
    const S = b.type, T = F2[S] || {};
    Object.keys(T).forEach((x) => {
      const N = T[x];
      x !== "className" && N !== void 0 && (b[x] = N);
    });
    const $ = N2(S);
    if ($) {
      const x = `${g(i.namespace)}-${$}`;
      b.className = b.className ? `${b.className} ${x}` : x;
    }
    return b;
  }, f = (b) => {
    Array.isArray(b) ? b.forEach((T) => S(T)) : S(b);
    function S(T) {
      var $;
      (($ = T == null ? void 0 : T.type) == null ? void 0 : $.name) === "ElTableColumn" && (T.vParent = o);
    }
  };
  return {
    columnId: r,
    realAlign: s,
    isSubColumn: l,
    realHeaderAlign: a,
    columnOrTableParent: u,
    setColumnWidth: h,
    setColumnForcedProps: p,
    setColumnRenders: (b) => {
      e.renderHeader ? We("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : b.type !== "selection" && (b.renderHeader = (T) => {
        o.columnConfig.value.label;
        const $ = t.header;
        return $ ? $(T) : b.label;
      });
      let S = b.renderCell;
      return b.type === "expand" ? (b.renderCell = (T) => ae("div", {
        class: "cell"
      }, [S(T)]), n.value.renderExpanded = (T) => t.default ? t.default(T) : t.default) : (S = S || B2, b.renderCell = (T) => {
        let $ = null;
        if (t.default) {
          const Q = t.default(T);
          $ = Q.some((ee) => ee.type !== Rs) ? Q : S(T);
        } else
          $ = S(T);
        const { columns: x } = n.value.store.states, N = x.value.findIndex((Q) => Q.type === "default"), H = c.value && T.cellIndex === N, B = z2(T, H), I = {
          class: "cell",
          style: {}
        };
        return b.showOverflowTooltip && (I.class = `${I.class} ${g(i.namespace)}-tooltip`, I.style = {
          width: `${(T.column.realWidth || Number(T.column.width)) - 1}px`
        }), f($), ae("div", I, [B, $]);
      }), b;
    },
    getPropsData: (...b) => b.reduce((S, T) => (Array.isArray(T) && T.forEach(($) => {
      S[$] = e[$];
    }), S), {}),
    getColumnElIndex: (b, S) => Array.prototype.indexOf.call(b, S),
    updateColumnOrder: () => {
      n.value.store.commit("updateColumnOrder", o.columnConfig.value);
    }
  };
}
var V2 = {
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
let K2 = 1;
var Lu = D({
  name: "ElTableColumn",
  components: {
    ElCheckbox: Gn
  },
  props: V2,
  setup(e, { slots: t }) {
    const n = ye(), o = k({}), r = _(() => {
      let C = n.parent;
      for (; C && !C.tableId; )
        C = C.parent;
      return C;
    }), { registerNormalWatchers: l, registerComplexWatchers: s } = H2(r, e), {
      columnId: a,
      isSubColumn: i,
      realHeaderAlign: u,
      columnOrTableParent: c,
      setColumnWidth: d,
      setColumnForcedProps: v,
      setColumnRenders: h,
      getPropsData: p,
      getColumnElIndex: f,
      realAlign: m,
      updateColumnOrder: y
    } = D2(e, t, r), w = c.value;
    a.value = `${w.tableId || w.columnId}_column_${K2++}`, vl(() => {
      i.value = r.value !== w;
      const C = e.type || "default", b = e.sortable === "" ? !0 : e.sortable, S = zn(e.showOverflowTooltip) ? w.props.showOverflowTooltip : e.showOverflowTooltip, T = {
        ...R2[C],
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
        sortable: b,
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
      B = Kw(T, B), B = jw(h, d, v)(B), o.value = B, l(), s();
    }), Ae(() => {
      var C;
      const b = c.value, S = i.value ? b.vnode.el.children : (C = b.refs.hiddenColumns) == null ? void 0 : C.children, T = () => f(S || [], n.vnode.el);
      o.value.getColumnIndex = T, T() > -1 && r.value.store.commit("insertColumn", o.value, i.value ? b.columnConfig.value : null, y);
    }), Nt(() => {
      r.value.store.commit("removeColumn", o.value, i.value ? w.columnConfig.value : null, y);
    }), n.columnId = a.value, n.columnConfig = o;
  },
  render() {
    var e, t, n;
    try {
      const o = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, {
        row: {},
        column: {},
        $index: -1
      }), r = [];
      if (Array.isArray(o))
        for (const s of o)
          ((n = s.type) == null ? void 0 : n.name) === "ElTableColumn" || s.shapeFlag & 2 ? r.push(s) : s.type === $e && Array.isArray(s.children) && s.children.forEach((a) => {
            (a == null ? void 0 : a.patchFlag) !== 1024 && !St(a == null ? void 0 : a.children) && r.push(a);
          });
      return ae("div", r);
    } catch {
      return ae("div", []);
    }
  }
});
const W2 = Tt(I2, {
  TableColumn: Lu
});
Jn(Lu);
/*! Element Plus v2.3.12 */
var Ru = {
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
const j2 = D({
  name: "KPage",
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: !1 },
    small: { type: Boolean, default: !1 },
    pagerCount: { type: Number, default: 7 }
  },
  components: { ElConfigProvider: Gi, ElPagination: Nw },
  emits: ["update:modelValue", "update:size", "current-change", "size-change", "change"],
  setup(e, { emit: t }) {
    const n = Ru, o = _(() => {
      const { total: u, size: c, showSize: d } = e;
      return d ? !0 : u > c;
    }), r = _({
      get() {
        return e.modelValue;
      },
      set(u) {
        t("update:modelValue", u);
      }
    }), l = _({
      get: () => e.size,
      set: (u) => t("update:size", u)
    }), s = _(() => {
      const u = ["total", "sizes", "prev", "pager", "next", "jumper"];
      return e.showSize || u.splice(1, 1), u.join(",");
    });
    return {
      locale: n,
      currentPage: r,
      layoutList: s,
      handleSizeChange: (u) => {
        r.value = 1, t("update:size", u), t("size-change", u), t("change", { page: e.size === u ? r.value : 1, size: u });
      },
      handleCurrentChange: (u) => {
        t("current-change", u), t("change", { page: u, size: e.size });
      },
      showPage: o,
      pageSize: l
    };
  }
}), U2 = {
  key: 0,
  class: "page-right mt20"
};
function q2(e, t, n, o, r, l) {
  const s = G("el-pagination"), a = G("el-config-provider");
  return e.showPage ? (E(), P("div", U2, [
    Z(a, { locale: e.locale }, {
      default: F(() => [
        Z(s, Oe({
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
const Ln = /* @__PURE__ */ He(j2, [["render", q2], ["__scopeId", "data-v-30359b33"]]);
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
const G2 = D({
  name: "KTable",
  components: { pagination: Ln },
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
    }), r = (a) => t("current-change", a), l = ({ column: a, order: i }) => {
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
      changePage: r,
      sortChange: l,
      instance: s,
      elTable: s
    };
  }
}), Y2 = { key: 2 };
function X2(e, t, n, o, r, l) {
  const s = G("el-table-column"), a = G("el-table"), i = G("pagination");
  return E(), P($e, null, [
    Z(a, Oe({
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
        }, _n({
          default: F((c) => [
            e.$slots.default ? U(e.$slots, "default", {
              key: 0,
              item: c.row,
              row: c.row,
              index: c.$index
            }) : u.custom && c.$index >= 0 ? U(e.$slots, u.custom, {
              key: 1,
              item: c.row,
              row: c.row,
              index: c.$index
            }) : (E(), P("span", Y2, ie(c.row[u.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          u.header ? {
            name: "header",
            fn: F(() => [
              U(e.$slots, u.header)
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
          U(e.$slots, "empty")
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
const qo = /* @__PURE__ */ He(G2, [["render", X2]]);
qo.install = function(e) {
  e.component(qo.name, qo);
};
const Q2 = D({
  name: "KVirtualList",
  components: { ElScrollbar: kr },
  props: {
    height: { type: String, default: "500px" },
    rowStyle: { type: Object, default: () => ({}) },
    rowClassName: { type: [Function, String, Object], default: "" },
    data: { type: Array, default: () => [] }
  },
  emits: ["scroll", "row-click"],
  setup(e, { emit: t }) {
    const n = k(0), o = k(0), r = k(null), l = k(10), s = () => {
      var m, y;
      return ((m = document.querySelector(".table-row")) == null ? void 0 : m.offsetHeight) ?? ((y = document.querySelector(".list-item")) == null ? void 0 : y.offsetHeight) ?? 10;
    }, a = () => {
      const { clientHeight: m = 100 } = r.value.wrapRef || {};
      return Math.ceil(m / s()) + n.value;
    }, i = k(100);
    Ae(() => {
      l.value = Number(a()) || 10, i.value = e.data.length * s();
    });
    const u = (m) => Math.floor(m / s()), c = (m) => Math.ceil(m * s()), d = (m) => m >= n.value && m <= l.value, v = _(() => e.data.filter((m, y) => d(y)));
    return Y(() => e.data, (m) => {
      m.length || (n.value = 0, o.value = 0), e.data.forEach((y, w) => {
        y.rowIndex = w;
      }), ve(() => {
        i.value = e.data.length * s();
      });
    }), {
      startIndex: n,
      endIndex: l,
      startOffset: o,
      viewport: r,
      onScroll: (m) => {
        const { scrollTop: y, clientHeight: w } = r.value.wrapRef;
        n.value = u(y), o.value = c(n.value), l.value = a();
        const C = Math.abs(i.value - w - y);
        t("scroll", { distance: C, ...m });
      },
      showViewRanges: d,
      containHeight: i,
      listRanges: v,
      rowClick: (m, y) => {
        t("row-click", m, y);
      },
      rowClassHandle: (m, y) => typeof e.rowClassName == "function" ? e.rowClassName({ row: m, rowIndex: y }) : e.rowClassName
    };
  }
}), Z2 = {
  class: "virtual-list",
  "data-testid": "virtual-list"
}, J2 = ["onClick"];
function eC(e, t, n, o, r, l) {
  const s = G("el-scrollbar");
  return E(), V(s, Oe({
    height: e.height,
    ref: "viewport"
  }, e.$attrs, { onScroll: e.onScroll }), {
    default: F(() => [
      R("div", Z2, [
        R("div", {
          class: "list-contain",
          style: Se({ height: `${e.containHeight}px` })
        }, null, 4),
        R("div", {
          class: "list-content",
          style: Se({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          (E(!0), P($e, null, ze(e.listRanges, (a, i) => (E(), P("div", {
            key: i,
            class: M(["list-item", e.rowClassHandle(a, a.rowIndex)]),
            style: Se(e.rowStyle),
            onClick: (u) => e.rowClick(a, a.rowIndex)
          }, [
            U(e.$slots, "default", {
              row: a,
              index: a.rowIndex
            }, () => [
              Ve(ie(a.name), 1)
            ], !0)
          ], 14, J2))), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["height", "onScroll"]);
}
const go = /* @__PURE__ */ He(Q2, [["render", eC], ["__scopeId", "data-v-e53aecaa"]]);
go.install = function(e) {
  e.component(go.name, go);
};
const Nu = {
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
function Fu(e) {
  const t = k(null), n = (s) => {
    var v, h, p, f;
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
      const m = e.tableColumn.findIndex((w) => w.prop === s.prop), y = e.tableColumn.length;
      if (a = {
        ...a,
        position: "sticky",
        "z-index": 50
      }, c === "left") {
        const w = (v = e.tableColumn.filter((S) => S.fixed === "left")) == null ? void 0 : v.length;
        let C = 0;
        m > 0 && m < y - 1 && w > 1 && (C = (h = t.value) == null ? void 0 : h.at(m - 1).clientWidth), a.left = `${C}px`;
        let b = 0;
        e.tableColumn.forEach((S, T) => {
          S.fixed === "left" && (b = T);
        }), b === m && (a["box-shadow"] = "3px 0px 4px #b0a8a836");
      } else {
        const w = (p = e.tableColumn.filter((S) => S.fixed && S.fixed !== "left")) == null ? void 0 : p.length;
        let C = 0;
        m < y - 1 && w > 1 && (C = (f = t.value) == null ? void 0 : f.at(m + 1).clientWidth), e.tableColumn.findIndex((S) => S.fixed && S.fixed !== "left") === m && (a["box-shadow"] = "-3px 0 4px #b0a8a836"), a.right = `${C}px`;
      }
    }
    return e.isFooter && (a.color = "#606266"), a;
  }, o = k(null), r = (s) => {
    const a = e.tableData.reduce((i, u) => i + Number(u[s.prop]), 0);
    return Number.isNaN(a) ? "N/A" : a.toFixed(2);
  };
  return {
    headerColmn: t,
    headerClass: n,
    tableHeader: o,
    getSummaries: (s, a) => e.summaryMethod ? e.summaryMethod({ row: s, index: a }) : a ? r(s) : e.sumText
  };
}
const tC = { class: "flex table-border-bottom header-content" }, nC = {
  key: 0,
  class: "table-header-sort flex-column flex-center"
}, oC = { class: "sort-wrapper" }, rC = ["onClick"], lC = ["onClick"], aC = {
  __name: "headerFooter",
  props: {
    ...Nu,
    isFooter: { type: Boolean, default: !1 }
  },
  emits: ["sort-change"],
  setup(e, { expose: t, emit: n }) {
    const o = e, { headerClass: r, tableHeader: l } = Fu(o), s = k(null), a = k({}), i = (c, d) => {
      a.value = d, s.value = s.value === c ? null : c, n("sort-change", { column: d, sortType: s.value });
    };
    return t({
      setScrollLeft: (c) => {
        l.value.scrollLeft = `${c}`;
      }
    }), (c, d) => (E(), P("div", {
      class: "table-header overflow",
      ref_key: "tableHeader",
      ref: l
    }, [
      R("div", tC, [
        (E(!0), P($e, null, ze(c.tableColumn, (v, h) => (E(), P("div", {
          key: h,
          class: "header-column cell flex-align-center",
          ref_for: !0,
          ref: "headerColmn",
          style: Se([c.headerCellStyle, g(r)(v)])
        }, [
          U(c.$slots, "default", {
            row: v,
            index: h
          }, () => [
            Ve(ie(v.label), 1)
          ], !0),
          v.sortable && !e.isFooter ? (E(), P("div", nC, [
            R("span", oC, [
              R("i", {
                class: M(["sort-caret ascending", { "bottom-caret": s.value === "ascending" && a.value.prop == v.prop }]),
                onClick: (p) => i("ascending", v)
              }, null, 10, rC),
              R("i", {
                class: M(["sort-caret descending", { "top-caret": s.value === "descending" && a.value.prop == v.prop }]),
                onClick: (p) => i("descending", v)
              }, null, 10, lC)
            ])
          ])) : q("", !0)
        ], 4))), 128))
      ])
    ], 512));
  }
}, sC = /* @__PURE__ */ He(aC, [["__scopeId", "data-v-2fd08206"]]);
const iC = D({
  name: "KTableV2",
  components: { virtualList: go, headerFooter: sC },
  props: Nu,
  emits: ["sort-change"],
  setup(e, { emit: t }) {
    const n = _(() => e.tableColumn.map((v, h) => ({ ...v, keyId: h }))), {
      headerColmn: o,
      headerClass: r,
      tableHeader: l,
      getSummaries: s
    } = Fu(e), a = k(null), i = ({ scrollLeft: v }) => {
      var h, p;
      (h = l.value) == null || h.setScrollLeft(v), (p = a.value) == null || p.setScrollLeft(v);
    }, u = ({ column: v, sortType: h }) => t("sort-change", { column: v, sortType: h }), c = k(null), d = (v) => {
      var h;
      return (h = c.value) == null ? void 0 : h.viewport.setScrollTop(v);
    };
    return {
      ...Qn(e),
      columnList: n,
      headerClass: r,
      tableHeader: l,
      tableBottom: a,
      scrollHandle: i,
      headerColmn: o,
      clickSortCaret: u,
      virtualRef: c,
      setScrollTop: d,
      getSummaries: s
    };
  }
}), uC = { class: "table-v2 el-table flex-column" }, cC = { class: "flex table-body" };
function dC(e, t, n, o, r, l) {
  const s = G("headerFooter"), a = G("virtualList");
  return E(), P("div", uC, [
    Z(s, {
      ref: "tableHeader",
      "table-column": e.tableColumn,
      onSortChange: e.clickSortCaret
    }, {
      default: F(({ row: i, index: u }) => [
        U(e.$slots, i == null ? void 0 : i.header, {
          row: i,
          index: u
        }, () => [
          Ve(ie(i.label), 1)
        ], !0)
      ]),
      _: 3
    }, 8, ["table-column", "onSortChange"]),
    e.tableData.length ? (E(), V(a, Oe({
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
        U(e.$slots, "content", {}, () => [
          R("div", cC, [
            (E(!0), P($e, null, ze(e.columnList, (c) => (E(), P("div", {
              key: c.keyId,
              class: M(["cell table-row table-border-bottom flex-align-center", { "fixed-cell": c.fixed }]),
              ref_for: !0,
              ref: "bodyCell",
              style: Se(e.headerClass(c))
            }, [
              R("div", {
                class: M({ "text-overflow": c.showOverflowTooltip ?? !0 })
              }, [
                U(e.$slots, (c == null ? void 0 : c.custom) ?? "default", {
                  row: i,
                  index: u
                }, () => [
                  Ve(ie(i[c.prop]), 1)
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
      style: Se({ height: e.height })
    }, [
      U(e.$slots, "empty", {}, () => [
        Ve(ie(e.emptyText), 1)
      ], !0)
    ], 4)),
    U(e.$slots, "footer", {}, () => [
      e.showSummary || e.$slots.footer ? (E(), V(s, {
        key: 0,
        ref: "tableBottom",
        "table-column": e.tableColumn,
        "is-footer": ""
      }, {
        default: F(({ row: i, index: u }) => [
          Ve(ie(e.getSummaries(i, u)), 1)
        ]),
        _: 1
      }, 8, ["table-column"])) : q("", !0)
    ], !0)
  ]);
}
const Go = /* @__PURE__ */ He(iC, [["render", dC], ["__scopeId", "data-v-393e4622"]]);
Go.install = function(e) {
  e.component(Go.name, Go);
};
const fC = {
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
}, pC = { key: 2 }, vC = { class: "flex-between" }, hC = { class: "flex1 mr20 mt20" }, mo = /* @__PURE__ */ Object.assign({
  name: "KBatchTable"
}, {
  __name: "main",
  props: fC,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = k(null), l = k([]), s = (w) => {
      w ? w.forEach((C) => {
        const b = o.tableData.find((S) => S[o.keyId] === C[o.keyId]);
        r.value.toggleRowSelection(b ?? C);
      }) : r.value.clearSelection();
    }, a = (w, C = !0) => {
      C ? l.value.push(w) : l.value = l.value.filter((b) => b[o.keyId] !== (w == null ? void 0 : w[o.keyId]));
    }, i = (w) => w[o.checkKey] ?? !w[o.checkKey], u = (w, C) => {
      const b = w.some((S) => S[o.keyId] === (C == null ? void 0 : C[o.keyId]));
      a(C, b);
    }, c = (w) => v(w), d = (w) => {
      if (!i(w))
        return;
      s([w]);
      const C = l.value.some((b) => b[o.keyId] === w[o.keyId]);
      a(w, !C), n("row-click", w);
    };
    Y(() => l.value, (w, C) => {
      C && n("update:modelValue", w);
    }, { immediate: !0, deep: !0 });
    const v = (w = []) => {
      s(), w.forEach((C) => {
        const b = o.tableData.find((S) => S[o.keyId] === C[o.keyId]);
        r.value.toggleRowSelection(b ?? C, !!i(C));
      }), l.value = w;
    }, h = () => v();
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
      ve(() => {
        w.length && f(), w.length && v(o.modelValue);
      });
    }, { immediate: !0 });
    const m = _({
      get: () => o.page,
      set: (w) => n("update:page", w)
    }), y = (w) => {
      n("current-change", w);
    };
    return t({
      toggleSelection: v,
      handleRowClick: d,
      clear: h
    }), (w, C) => {
      const b = G("el-table-column");
      return E(), P($e, null, [
        Z(g(W2), Oe({
          ref_key: "multipleTableRef",
          ref: r
        }, w.$attrs, {
          data: w.tableData,
          "header-cell-style": w.headerCellStyle,
          onSelect: u,
          onSelectAll: c,
          onRowClick: d
        }), _n({
          default: F(() => [
            Z(b, {
              type: "selection",
              width: "55",
              selectable: i
            }),
            (E(!0), P($e, null, ze(w.tableColumn, (S) => (E(), V(b, {
              label: S.label,
              key: S.prop,
              width: S.width,
              fixed: S.fixed,
              "min-width": S.minWidth,
              "show-overflow-tooltip": S.showOverflowTooltip ?? !0
            }, _n({
              default: F((T) => [
                w.$slots.default ? U(w.$slots, "default", {
                  key: 0,
                  item: T.row,
                  row: T.row,
                  column: S,
                  index: T.$index
                }) : q("", !0),
                S.custom && T.$index >= 0 ? U(w.$slots, S.custom, {
                  key: 1,
                  item: T.row,
                  column: S,
                  row: T.row,
                  index: T.$index
                }) : (E(), P("span", pC, ie(T.row[S.prop] ?? "-"), 1))
              ]),
              _: 2
            }, [
              S.header ? {
                name: "header",
                fn: F(() => [
                  U(w.$slots, "header", { column: S }),
                  U(w.$slots, S.header, { column: S })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["label", "width", "fixed", "min-width", "show-overflow-tooltip"]))), 128))
          ]),
          _: 2
        }, [
          w.$slots.empty ? {
            name: "empty",
            fn: F(() => [
              U(w.$slots, "empty")
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["data", "header-cell-style"]),
        R("div", vC, [
          R("div", hC, [
            w.$slots.footer ? U(w.$slots, "footer", { key: 0 }) : q("", !0)
          ]),
          Z(g(Ln), Oe({
            total: w.total,
            "show-size": w.showSize
          }, w.$attrs, {
            modelValue: m.value,
            "onUpdate:modelValue": C[0] || (C[0] = (S) => m.value = S),
            onCurrentChange: y
          }), null, 16, ["total", "show-size", "modelValue"])
        ])
      ], 64);
    };
  }
});
mo.install = function(e) {
  e.component(mo.name, mo);
};
const gC = D({
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
}), mC = /* @__PURE__ */ R("span", null, "这是一段信息", -1), bC = { class: "dialog-footer" };
function yC(e, t, n, o, r, l) {
  const s = G("el-button"), a = G("el-dialog");
  return E(), V(a, Oe({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": t[1] || (t[1] = (i) => e.dialogVisible = i),
    class: e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), _n({
    default: F(() => [
      U(e.$slots, "default", {}, () => [
        mC
      ])
    ]),
    _: 2
  }, [
    e.showFooter ? {
      name: "footer",
      fn: F(() => [
        U(e.$slots, "footer", {}, () => [
          R("span", bC, [
            Z(s, {
              size: "large",
              onClick: t[0] || (t[0] = (i) => e.dialogVisible = !1)
            }, {
              default: F(() => [
                Ve("取 消")
              ]),
              _: 1
            }),
            Z(s, {
              size: "large",
              type: "primary",
              disabled: e.confirmDisabled,
              onClick: e.confirmHandler
            }, {
              default: F(() => [
                Ve("确 定")
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
const Yo = /* @__PURE__ */ He(gC, [["render", yC]]);
Yo.install = function(e) {
  e.component(Yo.name, Yo);
};
const wC = D({
  name: "KBreadcrumb",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const n = ye().appContext.config.globalProperties.$router;
    return { clickHandle: (r, l) => {
      if (r.url) {
        window.location.href = r.url;
        return;
      }
      const s = l - e.list.length + 1;
      r.path ? n == null || n.push(r.path) : s && (n == null || n.go(s));
    } };
  }
}), CC = { class: "crumb-header flex-between" }, SC = { class: "crumb-contain" }, _C = ["onClick"];
function $C(e, t, n, o, r, l) {
  const s = G("el-space");
  return E(), P("div", CC, [
    R("div", SC, [
      Z(s, { spacer: "/" }, {
        default: F(() => [
          (E(!0), P($e, null, ze(e.list, (a, i) => (E(), P("span", {
            key: i,
            class: M({ "crumb-item": i !== e.list.length - 1 }),
            onClick: (u) => e.clickHandle(a, i)
          }, ie(a.title), 11, _C))), 128))
        ]),
        _: 1
      })
    ]),
    U(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Xo = /* @__PURE__ */ He(wC, [["render", $C], ["__scopeId", "data-v-b570be29"]]);
Xo.install = function(e) {
  e.component(Xo.name, Xo);
};
const EC = D({
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
    const n = ye(), o = _(() => n.appContext.config.globalProperties.$route), r = n.appContext.config.globalProperties.$router, l = _(() => {
      var u, c;
      return ((u = o.value) == null ? void 0 : u.params.type) || ((c = o.value) == null ? void 0 : c.name);
    }), s = k(l.value);
    Lt(() => {
      s.value = e.modelValue || l.value, t("update:modelValue", s.value);
    });
    const a = _(() => o.value.query);
    return { activeName: s, handleClick: (u) => {
      if (e.isRouter) {
        const c = { path: `${u.paneName}`, query: a.value };
        e.replace ? r.replace(c) : r.push(c);
      }
      t("tab-click", u.paneName), t("change", u.paneName), t("update:modelValue", u.paneName);
    } };
  }
}), TC = { class: "tabs-right ml10" };
function kC(e, t, n, o, r, l) {
  const s = G("el-tab-pane"), a = G("el-tabs");
  return E(), P("div", {
    class: M(["k-tabs", { "style-card": !e.type, "style-padding": e.isPadding && !e.type }])
  }, [
    Z(a, Oe({
      class: "flex-tabs",
      type: e.type
    }, e.$attrs, {
      modelValue: e.activeName,
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.activeName = i),
      onTabClick: e.handleClick
    }), {
      default: F(() => [
        (E(!0), P($e, null, ze(e.tabsList, (i) => (E(), V(s, {
          label: i.label,
          name: i.name,
          key: i.name
        }, null, 8, ["label", "name"]))), 128))
      ]),
      _: 1
    }, 16, ["type", "modelValue", "onTabClick"]),
    R("div", TC, [
      U(e.$slots, "default")
    ])
  ], 2);
}
const Qo = /* @__PURE__ */ He(EC, [["render", kC]]);
Qo.install = function(e) {
  e.component(Qo.name, Qo);
};
const OC = D({
  name: "KPicker",
  components: { batchTable: mo, Delete: vd },
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
      set: (c) => t("update:modelValue", c)
    });
    Lt(() => {
      e.showCount && n.value.forEach((c) => {
        c.num = c.num ?? 1;
      });
    });
    const o = k(null), r = () => o.value.toggleSelection(), l = (c) => o.value.handleRowClick(c), s = k(1);
    return {
      multipleSelection: n,
      batchTableRef: o,
      currentPage: s,
      emptyHandler: r,
      resetData: () => {
        s.value = 1, r();
      },
      deleteHandler: l,
      getName: (c) => c[e.keyName],
      getId: (c) => c[e.keyId]
    };
  }
}), xC = { class: "k-picker" }, PC = { class: "col-left" }, AC = { class: "col-right" }, MC = { class: "selete-header flex-between" }, IC = { class: "selete-content" }, LC = { class: "flex flex1 mr20 overflow" }, RC = { class: "text-overflow" };
function NC(e, t, n, o, r, l) {
  const s = G("batchTable"), a = G("el-col"), i = G("delete"), u = G("el-icon"), c = G("el-button"), d = G("el-tooltip"), v = G("k-input-number"), h = G("el-row");
  return E(), P("div", xC, [
    U(e.$slots, "top", {}, void 0, !0),
    Z(h, { gutter: 10 }, {
      default: F(() => [
        Z(a, { span: 15 }, {
          default: F(() => [
            R("div", PC, [
              Z(s, {
                ref: "batchTableRef",
                height: "440px",
                "table-data": e.tableData,
                "table-column": e.tableColumn,
                "select-list": e.selectList,
                "key-id": e.keyId,
                modelValue: e.multipleSelection,
                "onUpdate:modelValue": t[0] || (t[0] = (p) => e.multipleSelection = p),
                page: e.currentPage,
                "onUpdate:page": t[1] || (t[1] = (p) => e.currentPage = p)
              }, {
                header: F(({ column: p }) => [
                  U(e.$slots, p.header, { column: p }, void 0, !0)
                ]),
                default: F(({ row: p, column: f, index: m }) => [
                  f.custom && m >= 0 ? U(e.$slots, f.custom, {
                    key: 0,
                    row: p,
                    index: m
                  }, void 0, !0) : q("", !0)
                ]),
                _: 3
              }, 8, ["table-data", "table-column", "select-list", "key-id", "modelValue", "page"])
            ])
          ]),
          _: 3
        }),
        Z(a, { span: 9 }, {
          default: F(() => [
            U(e.$slots, "right", {}, () => [
              R("div", AC, [
                R("div", MC, [
                  U(e.$slots, "right-header", {}, () => [
                    R("span", null, [
                      Ve("已选择"),
                      R("span", null, "(" + ie(e.multipleSelection.length) + ")", 1)
                    ]),
                    Z(c, {
                      type: "primary",
                      text: "",
                      disabled: !e.multipleSelection.length,
                      onClick: e.emptyHandler
                    }, {
                      default: F(() => [
                        Z(u, null, {
                          default: F(() => [
                            Z(i)
                          ]),
                          _: 1
                        }),
                        Ve(" 清空 ")
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"])
                  ], !0)
                ]),
                R("div", IC, [
                  (E(!0), P($e, null, ze(e.multipleSelection, (p) => (E(), P("div", {
                    class: M(["flex-between pl10 pr10", { mt10: e.showCount }]),
                    key: e.getId(p)
                  }, [
                    R("div", LC, [
                      Z(d, {
                        effect: "dark",
                        content: e.getName(p),
                        placement: "top"
                      }, {
                        default: F(() => [
                          R("span", RC, ie(e.getName(p)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ]),
                    e.showCount ? (E(), V(v, {
                      key: 0,
                      modelValue: p.num,
                      "onUpdate:modelValue": (f) => p.num = f,
                      min: 1,
                      class: "width-100 flex-shrink mr10"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : q("", !0),
                    Z(c, {
                      type: "primary",
                      text: "",
                      onClick: (f) => e.deleteHandler(p)
                    }, {
                      default: F(() => [
                        Ve(" 删除 ")
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
    U(e.$slots, "footer", {}, void 0, !0)
  ]);
}
const Zo = /* @__PURE__ */ He(OC, [["render", NC], ["__scopeId", "data-v-52b9e7a8"]]);
Zo.install = function(e) {
  e.component(Zo.name, Zo);
};
const FC = D({
  name: "KTooltip",
  props: {
    placement: { type: String, default: "top" },
    showIcon: { type: Boolean, default: !1 },
    overflow: { type: Boolean, default: !1 }
  },
  components: { Warning: tf }
});
function BC(e, t, n, o, r, l) {
  const s = G("warning"), a = G("el-icon"), i = G("el-tooltip");
  return E(), P("div", {
    class: M(["flex flex1", { "text-overflow": e.overflow }])
  }, [
    Z(i, Oe(e.$attrs, { placement: e.placement }), {
      content: F(() => [
        U(e.$slots, "content", {}, void 0, !0)
      ]),
      default: F(() => [
        R("div", {
          class: M(["flex-center", { "text-overflow": e.overflow }])
        }, [
          U(e.$slots, "default", {}, void 0, !0),
          e.showIcon ? (E(), V(a, {
            key: 0,
            class: "ml5"
          }, {
            default: F(() => [
              U(e.$slots, "icon", {}, () => [
                Z(s)
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
const Jo = /* @__PURE__ */ He(FC, [["render", BC], ["__scopeId", "data-v-d468c200"]]);
Jo.install = function(e) {
  e.component(Jo.name, Jo);
};
const zC = {
  __name: "main",
  setup(e) {
    return (t, n) => (E(), V(g(Gi), { locale: g(Ru) }, {
      default: F(() => [
        U(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale"]));
  }
}, Bu = {
  __name: "datePicker",
  props: {
    type: { type: String, default: "daterange" },
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = _(() => n.type === "datetimerange" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"), r = (c) => {
      const d = /* @__PURE__ */ new Date(), v = /* @__PURE__ */ new Date();
      return d.setTime(d.getTime() - 3600 * 1e3 * 24 * c), d.setHours(0, 0, 0, 0), v.setHours(23, 59, 59, 999), n.type === "date" ? d : [d, v];
    }, l = [
      {
        text: "最近一周",
        value: () => r(7)
      },
      {
        text: "最近一个月",
        value: () => r(30)
      },
      {
        text: "最近三个月",
        value: () => r(90)
      }
    ], s = [new Date(2e3, 1, 1, 0, 0, 0), new Date(2e3, 2, 1, 23, 59, 59)], a = _({
      get: () => n.modelValue,
      set: (c) => t("update:modelValue", c)
    }), i = (c) => c.getTime() > Date.now(), u = (c) => t("change", c);
    return (c, d) => {
      const v = G("el-date-picker");
      return E(), V(v, Oe({
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (h) => a.value = h),
        type: e.type,
        "unlink-panels": "",
        "range-separator": "至",
        "start-placeholder": "开始日期",
        "end-placeholder": "结束日期",
        shortcuts: l,
        format: o.value,
        "value-format": "YYYY-MM-DD HH:mm:ss",
        "disabled-date": i,
        "default-time": s,
        editable: !1
      }, c.$attrs, { onChange: u }), null, 16, ["modelValue", "type", "format"]);
    };
  }
}, HC = { class: "date-picker flex" }, DC = {
  __name: "selectType",
  props: {
    daterange: { type: Boolean, default: !1 },
    // 是否选择模式下 是否日期范围
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = k(0), r = k([
      { value: 0, label: "日" },
      { value: 1, label: "周" },
      { value: 2, label: "月" },
      { value: 3, label: "年" }
    ]), l = _({
      get: () => n.modelValue,
      set: (h) => t("update:modelValue", h)
    }), s = (h) => h.getTime() > Date.now(), a = _(() => ({
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
      const { label: h } = r.value.filter((p) => p.value === o.value)[0];
      return `选择${h}`;
    }), c = k("");
    Lt(() => {
      if (Array.isArray(l.value)) {
        const [h, p] = l.value;
        c.value = [h, p];
      }
    });
    const d = (h) => {
      if (h) {
        if (Array.isArray(l.value)) {
          const [p] = l.value;
          l.value = p;
        }
      } else
        n.daterange && (l.value = c.value);
      v();
    }, v = () => {
      t("change", { type: o.value, time: l.value });
    };
    return (h, p) => {
      const f = G("el-option"), m = G("el-select"), y = G("el-date-picker");
      return E(), P("div", HC, [
        Z(m, {
          modelValue: o.value,
          "onUpdate:modelValue": p[0] || (p[0] = (w) => o.value = w),
          class: "width-100 mr10",
          onChange: d
        }, {
          default: F(() => [
            (E(!0), P($e, null, ze(r.value, (w) => (E(), V(f, {
              key: w.value,
              label: w.label,
              value: w.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        R("div", null, [
          e.daterange && !o.value ? (E(), V(Bu, Oe({
            key: 0,
            modelValue: l.value,
            "onUpdate:modelValue": p[1] || (p[1] = (w) => l.value = w)
          }, h.$props, { onChange: v }), null, 16, ["modelValue"])) : (E(), V(y, {
            key: 1,
            modelValue: l.value,
            "onUpdate:modelValue": p[2] || (p[2] = (w) => l.value = w),
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
}, VC = D({
  name: "KDatePicker",
  props: {
    selectType: { type: Boolean, default: !1 }
    // 是否选择模式（年月日）
    // daterange: { type: Boolean, default: false }, // 是否选择模式下 是否日期范围
  },
  components: { configProvider: zC, selectType: DC, datePicker: Bu },
  setup() {
  }
});
function KC(e, t, n, o, r, l) {
  const s = G("selectType"), a = G("datePicker"), i = G("config-provider");
  return E(), V(i, null, {
    default: F(() => [
      e.selectType ? (E(), V(s, ra(Oe({ key: 0 }, e.$attrs)), null, 16)) : (E(), V(a, ra(Oe({ key: 1 }, e.$attrs)), null, 16))
    ]),
    _: 1
  });
}
const er = /* @__PURE__ */ He(VC, [["render", KC]]);
er.install = function(e) {
  e.component(er.name, er);
};
const na = D({
  name: "KNumberKeyboard",
  components: { ElButton: Zy },
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
    ], o = _(() => (e.decimalPoint && n.push({ name: "." }), n)), r = _({
      get: () => e.modelValue,
      set: (v) => t("update:modelValue", v)
    }), l = () => {
      ve(() => t("change", r.value));
    }, s = (v) => {
      if (e.maxlength && r.value.length >= Number(e.maxlength))
        return;
      const h = r.value.indexOf("."), p = r.value.split(".");
      p.length === 2 && (v === "." || p[1].length >= e.precision) || (r.value = `${h === 0 ? 0 : ""}${r.value}${v}`, !e.startZero && r.value.slice(0, 1) === "0" && (r.value = r.value.slice(1) + v), l());
    }, a = (v) => {
      v === "delete" ? r.value = r.value.slice(0, r.value.length - 1) : v === "clear" && (r.value = "", t("clear")), v === "confirm" ? t("confirm") : l();
    }, i = ({ key: v, name: h }) => {
      v ? a(v) : s(h);
    }, u = _(() => `${Number(4 * e.width + 20)}px`), c = _(() => `${e.width}px`), d = _(() => e.decimalPoint ? 3 : 4);
    return {
      keyboardList: o,
      clickHandleBtn: i,
      clickBtn: s,
      totalwidth: u,
      gridwidth: c,
      numberVal: r,
      zerogridend: d
    };
  }
}), Ps = () => {
  Ns((e) => ({
    "5f76155e": e.totalwidth,
    af867fde: e.gridwidth,
    c0d11484: e.zerogridend
  }));
}, As = na.setup;
na.setup = As ? (e, t) => (Ps(), As(e, t)) : Ps;
const WC = { class: "number-keyboard mt10" }, jC = { class: "number-ul" };
function UC(e, t, n, o, r, l) {
  const s = G("el-button");
  return E(), P("div", WC, [
    R("ul", jC, [
      (E(!0), P($e, null, ze(e.keyboardList, (a, i) => (E(), P("li", {
        key: i,
        class: M(a.class)
      }, [
        Z(s, {
          type: a.type,
          color: e.color,
          onClick: (u) => e.clickHandleBtn(a)
        }, {
          default: F(() => [
            Ve(ie(a.name), 1)
          ]),
          _: 2
        }, 1032, ["type", "color", "onClick"])
      ], 2))), 128))
    ])
  ]);
}
const tr = /* @__PURE__ */ He(na, [["render", UC], ["__scopeId", "data-v-2e1be318"]]);
tr.install = function(e) {
  e.component(tr.name, tr);
};
const qC = D({
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
    }), o = (a) => e.decimals ? Number(a).toFixed(e.decimals) : a, r = k(null), l = (a = !0) => {
      const i = r.value;
      if (!i)
        return;
      const u = +i.innerText, c = +n.value / 200, d = a && u < Number(n.value) || !a && u > Number(n.value);
      a && u > e.end || u < e.start || (d ? s(i, a ? u + c : u - c, a) : i.interText = o(n.value));
    }, s = (a, i, u = !0) => {
      const c = i < e.start ? e.start : `${e.decimals ? i : Math.floor(i)}`, d = i > e.end ? e.end : `${e.decimals ? i : Math.ceil(i)}`;
      a.innerText = o(u ? d : c);
      const v = setTimeout(() => {
        clearTimeout(v), u ? l() : l(!1);
      }, 5);
    };
    return Ae(() => {
      r.value && e.autoinit && l();
    }), hl(() => {
      if (e.autoinit) {
        const a = +r.value.innerText;
        l(a < Number(n.value));
      }
    }), { textValue: n, spanText: r, setDeimals: o };
  }
}), GC = { class: "auto-counter" }, YC = { class: "mr5" }, XC = { class: "ml5" };
function QC(e, t, n, o, r, l) {
  return E(), P("div", GC, [
    R("span", YC, ie(e.prefix), 1),
    R("span", {
      class: "span-text",
      ref: "spanText"
    }, ie(e.autoinit ? e.setDeimals(e.start) : e.setDeimals(e.textValue)), 513),
    R("span", XC, ie(e.suffix), 1)
  ]);
}
const nr = /* @__PURE__ */ He(qC, [["render", QC]]);
nr.install = function(e) {
  e.component(nr.name, nr);
};
const ZC = D({
  name: "KCollapseButton",
  components: { ElIcon: Qe, CaretLeft: Tc, CaretRight: Mc },
  props: {
    style: { type: Object, default: () => ({}) },
    position: { type: String, default: "right" }
  },
  emits: ["click"],
  setup(e, { emit: t, slots: n }) {
    const o = k(!1), r = k(null);
    Ae(() => {
      const { parentNode: a } = r.value;
      a.style.position = "relative", a.style.overflow = "initial";
    });
    const l = _(() => {
      const { clientWidth: a, clientHeight: i } = r.value || {}, {
        top: u,
        right: c,
        width: d,
        height: v,
        left: h,
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
          left: h ?? `-${a}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: u ? "0px" : `-${Math.ceil(i / 2)}px`,
          transform: n != null && n.default ? "" : "rotate(180deg)"
        },
        top: {
          left: h ?? "50%",
          marginLeft: h ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(a / 2)}px` : "0px",
          top: u ?? (n == null ? void 0 : n.default) ? `-${i}px` : `-${Math.ceil(i / 2 + a / 2)}px`,
          borderRadius: n != null && n.default ? "5px 5px 0 0" : "0 5px 5px 0",
          transform: n != null && n.default ? "" : "rotate(-90deg)"
        },
        bottom: {
          left: h ?? "50%",
          bottom: p ?? (n == null ? void 0 : n.default) ? `-${i}px` : `-${Math.ceil(i / 2 + a / 2)}px`,
          marginLeft: h ?? (n == null ? void 0 : n.default) ? `-${Math.ceil(a / 2)}px` : "0px",
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
      collapse: r,
      clickHandle: () => {
        o.value = !o.value, t("click");
      },
      collapseStyle: l
    };
  }
});
function JC(e, t, n, o, r, l) {
  const s = G("CaretRight"), a = G("CaretLeft"), i = G("el-icon");
  return E(), P("div", {
    class: "collapse-button flex-center pointer",
    style: Se(e.collapseStyle),
    ref: "collapse",
    onClick: t[0] || (t[0] = (...u) => e.clickHandle && e.clickHandle(...u))
  }, [
    U(e.$slots, "default", {}, () => [
      Z(i, {
        size: 18,
        color: "#999999"
      }, {
        default: F(() => [
          e.isCollapse ? (E(), V(s, { key: 0 })) : (E(), V(a, { key: 1 }))
        ]),
        _: 1
      })
    ], !0)
  ], 4);
}
const or = /* @__PURE__ */ He(ZC, [["render", JC], ["__scopeId", "data-v-53ad025a"]]);
or.install = function(e) {
  e.component(or.name, or);
};
const eS = {
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
function tS(e, t) {
  const n = k(null), o = k(100), r = k(null), l = () => {
    var w;
    return ((w = document.querySelector(".card-row")) == null ? void 0 : w.offsetHeight) ?? 10;
  }, s = () => {
    var w;
    return ((w = document.querySelector(".card-row")) == null ? void 0 : w.offsetWidth) ?? 10;
  }, a = k(0), i = k(20), u = k(0), c = k(e.columns), d = (w) => Math.ceil(w / l()), v = () => {
    const { clientHeight: w = 100 } = n.value.wrapRef || {};
    return Math.floor(w / (l() + e.gridGap)) + a.value || 1;
  }, h = _(() => e.data.map((w, C) => ({ ...w, rowIndex: C }))), p = _(() => h.value.filter((w, C) => C >= a.value * c.value && C < i.value * c.value)), f = () => {
    const w = c.value * e.gridGap;
    o.value = Math.ceil(e.data.length / c.value * l()) + w;
  }, m = (w) => {
    const { scrollTop: C, clientHeight: b } = n.value.wrapRef, S = o.value - b - C;
    t("scroll", { distance: S, ...w }), a.value = d(C), i.value = v(), u.value = C;
  };
  Y(() => e.data, () => {
    f(), i.value = v();
  });
  const y = () => {
    if (r.value) {
      const { clientWidth: w = 500 } = n.value.wrapRef;
      c.value = Math.floor(w / s()) || 1, f(), u.value = 0, a.value = 0, n.value.setScrollTop(0), i.value = v();
    }
  };
  return Ae(() => {
    y(), window.addEventListener("resize", y);
  }), Eo(() => {
    window.removeEventListener("resize", y);
  }), {
    scrollbarRef: n,
    containHeight: o,
    cardRowRef: r,
    onScroll: m,
    startOffset: u,
    viewListRanges: p,
    resetViewport: y
  };
}
const oa = D({
  name: "KCardList",
  props: eS,
  emits: ["click", "mouseenter", "mouseleave", "update:modelValue", "scroll"],
  setup(e, { emit: t }) {
    const n = _(() => `${Number((100 / e.columns).toFixed(1))}%`), o = _(() => `${e.gridGap}px`), r = _(() => `${e.width}`), l = (m) => m.disabled || e.disabled, s = _(() => e.rowClass === "border" ? "border-row" : e.rowClass === "shadow" ? "box-shadow" : e.rowClass), a = k("");
    Lt(() => {
      a.value = e.modelValue;
    });
    const i = (m) => {
      l(m) || (e.highlight && (a.value = m[e.keyId], t("update:modelValue", m[e.keyId])), t("click", m));
    }, {
      scrollbarRef: u,
      containHeight: c,
      cardRowRef: d,
      startOffset: v,
      viewListRanges: h,
      onScroll: p,
      resetViewport: f
    } = tS(e, t);
    return {
      calcnum: n,
      gridgap: o,
      columnwidth: r,
      rowClassStyle: s,
      clickHandle: i,
      selectedId: a,
      bitNotAllowed: l,
      scrollbarRef: u,
      containHeight: c,
      cardRowRef: d,
      startOffset: v,
      viewListRanges: h,
      onScroll: p,
      resetViewport: f
    };
  }
}), Ms = () => {
  Ns((e) => ({
    "7d46f10c": e.gridgap,
    "2e51acf2": e.columns,
    "5e29b28a": e.calcnum,
    "221aa64c": e.columnwidth,
    cb2c4c58: e.imgheight
  }));
}, Is = oa.setup;
oa.setup = Is ? (e, t) => (Ms(), Is(e, t)) : Ms;
const nS = { class: "card-contain" }, oS = ["onClick", "onMouseenter", "onMouseleave"], rS = { class: "card-list-content" }, lS = { class: "sign" };
function aS(e, t, n, o, r, l) {
  const s = G("el-scrollbar");
  return E(), V(s, Oe({
    ref: "scrollbarRef",
    "data-test": "card-list"
  }, e.$attrs, {
    always: "",
    onScroll: e.onScroll
  }), {
    default: F(() => [
      R("div", nS, [
        R("div", {
          class: "card-wrap",
          style: Se({ height: `${e.containHeight}px` })
        }, null, 4),
        R("div", {
          class: "card-list",
          style: Se({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          R("div", {
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
              R("div", rS, [
                U(e.$slots, "default", {
                  row: a,
                  index: a.rowIndex
                }, () => [
                  Ve(ie(a.rowIndex), 1)
                ], !0)
              ]),
              R("div", lS, [
                U(e.$slots, "sign", {
                  row: a,
                  index: a.rowIndex
                }, void 0, !0)
              ])
            ], 42, oS))), 128))
          ], 2)
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["onScroll"]);
}
const rr = /* @__PURE__ */ He(oa, [["render", aS], ["__scopeId", "data-v-6f6f8503"]]);
rr.install = function(e) {
  e.component(rr.name, rr);
};
const Kr = {
  KButton: zo,
  KInput: uo,
  KInputNumber: Ho,
  KTable: qo,
  KTableV2: Go,
  KPage: Ln,
  KBatchTable: mo,
  KDialog: Yo,
  KBreadcrumb: Xo,
  KTabs: Qo,
  KPicker: Zo,
  KTooltip: Jo,
  KDatePicker: er,
  KNumberKeyboard: tr,
  KVirtualList: go,
  KAutoCounter: nr,
  KCollapseButton: or,
  KCardList: rr,
  install: () => {
  }
};
function sS(e, t, n = 0) {
  return e.substr(n, t.length) === t;
}
Kr.install = function(e) {
  Object.keys(Kr).forEach((t) => {
    if (sS(t, "K")) {
      const n = Kr[t];
      e.component(n.name, n);
    }
  }), Object.keys(io).forEach((t) => {
    e.directive(t, io[t]);
  });
};
export {
  nr as KAutoCounter,
  mo as KBatchTable,
  Xo as KBreadcrumb,
  zo as KButton,
  rr as KCardList,
  or as KCollapseButton,
  er as KDatePicker,
  Yo as KDialog,
  uo as KInput,
  Ho as KInputNumber,
  tr as KNumberKeyboard,
  Ln as KPage,
  Zo as KPicker,
  qo as KTable,
  Go as KTableV2,
  Qo as KTabs,
  Jo as KTooltip,
  Kr as KUI,
  go as KVirtualList,
  io as directives
};
