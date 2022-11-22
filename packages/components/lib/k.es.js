import { defineComponent as S, ref as E, computed as k, resolveComponent as y, openBlock as f, createBlock as D, mergeProps as P, withModifiers as we, withCtx as h, renderSlot as b, createElementBlock as $, createCommentVNode as z, withKeys as pe, createSlots as K, createElementVNode as C, watchEffect as ne, watch as ee, nextTick as ue, normalizeClass as M, createVNode as _, warn as Ce, getCurrentInstance as le, provide as Ve, unref as N, inject as Ee, Fragment as F, renderList as H, toDisplayString as L, createTextVNode as O, isRef as se, normalizeProps as ie } from "vue";
const Y = {
  focus: {
    mounted: (e) => {
      setTimeout(() => {
        e.querySelector("input").focus();
      }, 100);
    }
  },
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
  money: {
    mounted: (e, t) => {
      const n = e.textContent;
      if (typeof Number(n) != "number")
        return;
      let l = "\uFFE50";
      const { inter: o, point: a } = t.modifiers, u = a ? t.value : 2, p = n >= 0 ? `\uFFE5${Number(n).toFixed(u)}` : `-\uFFE5${Math.abs(Number(n.toFixed(u)))}`;
      o ? l = n >= 0 ? `\uFFE5${n}` : `-\uFFE5${Math.abs(n)}` : l = n ? p : "\uFFE50.00", e.innerHTML = `${l}`;
    },
    updated: (e, t) => {
      const { point: n } = t.modifiers, l = n ? t.value : 2, o = t.arg === "value" && t.value ? `\uFFE5${Number(t.value).toFixed(l)}` : e.textContent;
      e.innerHTML = o;
    }
  },
  params: {
    mounted: (e) => {
      const t = e.textContent;
      e.innerHTML = `${t}` || "-";
    }
  },
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
  }
};
Y.install = function(e) {
  Object.keys(Y).forEach((t) => {
    e.directive(t, Y[t]);
  });
};
const T = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, De = S({
  name: "KButton",
  props: {
    clickState: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 },
    iconLock: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t, attrs: n }) {
    const l = E(!0), o = E(null), a = () => {
      l.value && (l.value = !1, t("click")), u();
    }, u = () => {
      clearTimeout(o.value), o.value = setTimeout(() => {
        l.value = !0;
      }, 800);
    }, p = k(() => {
      const { border: i } = e, { type: c = "text" } = n;
      return i ? {
        backgroundColor: "transparent",
        color: `var(--el-color-${c})`
      } : {};
    });
    return { onclick: a, buttonStatus: l, buttonStyle: p };
  }
}), Se = {
  key: 0,
  class: "el-icon-lock el-icon--right"
};
function Te(e, t, n, l, o, a) {
  const u = y("el-button");
  return f(), D(u, P({
    disabled: !e.buttonStatus || e.disabled,
    style: e.buttonStyle,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: we(e.onclick, ["stop"])
  }), {
    default: h(() => [
      b(e.$slots, "default"),
      e.iconLock ? (f(), $("i", Se)) : z("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "style", "click-state", "onClick"]);
}
const R = /* @__PURE__ */ T(De, [["render", Te]]);
R.install = function(e) {
  e.component(R.name, R);
};
const Be = S({
  name: "KInput",
  props: {
    modelValue: { type: [String, Number], default: "" },
    point: { type: Number, default: 2 },
    type: { type: String, default: "number" }
  },
  emits: ["change", "update:modelValue", "enter"],
  setup(e, { emit: t, attrs: n }) {
    const l = E(null), o = E(!0), a = k({
      get() {
        return e.modelValue;
      },
      set(s) {
        u(s);
      }
    }), u = (s) => {
      let d = s;
      if (e.type === "number") {
        if (d = d.replace(/[^\d.]/g, ""), d = d.replace(/^\./g, ""), d = d.replace(/\.{2,}/g, "."), d = d.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), d.indexOf(".") < 0 && d !== "" && d.substr(0, 1) === "0" && d.length === 2 && (d = d.substr(1, d.length)), d !== "" && d.indexOf(".") > 0 && e.point) {
          const V = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
          d = d.match(V)[0] || null;
        }
      } else
        e.type === "integer" ? d = d.replace(/[^\d]/g, "") : e.type === "intText" && (d = d.replace(/[^\w]/g, ""));
      n.max !== void 0 && d && Number(d) > Number(n.max) && (d = n.max), n.min !== void 0 && d && Number(d) < Number(n.min) && (d = n.min), t("update:modelValue", d);
    }, p = () => {
      o.value && (o.value = !1, a.value && t("enter")), c();
    }, i = (s) => {
      t("change", s);
    }, c = () => {
      clearTimeout(l.value), l.value = setTimeout(() => {
        o.value = !0;
      }, 800);
    };
    return {
      inputValue: a,
      changeValue: i,
      searchContent: p
    };
  }
});
function Pe(e, t, n, l, o, a) {
  const u = y("el-input");
  return f(), D(u, P({
    modelValue: e.inputValue,
    "onUpdate:modelValue": t[0] || (t[0] = (p) => e.inputValue = p),
    modelModifiers: { trim: !0 }
  }, e.$attrs, {
    onKeyup: pe(e.searchContent, ["enter"]),
    onChange: e.changeValue
  }), K({ _: 2 }, [
    e.$slots.append ? {
      name: "append",
      fn: h(() => [
        b(e.$slots, "append")
      ]),
      key: "0"
    } : void 0,
    e.$slots.prepend ? {
      name: "prepend",
      fn: h(() => [
        b(e.$slots, "prepend")
      ]),
      key: "1"
    } : void 0,
    e.$slots.prefix ? {
      name: "prefix",
      fn: h(() => [
        b(e.$slots, "prefix")
      ]),
      key: "2"
    } : void 0,
    e.$slots.suffix ? {
      name: "suffix",
      fn: h(() => [
        b(e.$slots, "suffix")
      ]),
      key: "3"
    } : void 0
  ]), 1040, ["modelValue", "onKeyup", "onChange"]);
}
const I = /* @__PURE__ */ T(Be, [["render", Pe]]);
I.install = function(e) {
  e.component(I.name, I);
};
/*! Element Plus Icons Vue v2.0.10 */
var ae = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [l, o] of t)
    n[l] = o;
  return n;
}, Ne = {
  name: "Delete"
}, ze = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fe = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1), Me = [
  Fe
];
function Ae(e, t, n, l, o, a) {
  return f(), $("svg", ze, Me);
}
var Ke = /* @__PURE__ */ ae(Ne, [["render", Ae], ["__file", "delete.vue"]]), He = {
  name: "Minus"
}, Oe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ye = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1), Ie = [
  Ye
];
function je(e, t, n, l, o, a) {
  return f(), $("svg", Oe, Ie);
}
var Le = /* @__PURE__ */ ae(He, [["render", je], ["__file", "minus.vue"]]), Ue = {
  name: "Plus"
}, Re = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qe = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), We = [
  qe
];
function Ge(e, t, n, l, o, a) {
  return f(), $("svg", Re, We);
}
var Je = /* @__PURE__ */ ae(Ue, [["render", Ge], ["__file", "plus.vue"]]), Qe = {
  name: "Warning"
}, Xe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ze = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), xe = [
  Ze
];
function et(e, t, n, l, o, a) {
  return f(), $("svg", Xe, xe);
}
var tt = /* @__PURE__ */ ae(Qe, [["render", et], ["__file", "warning.vue"]]);
const nt = S({
  name: "KInputNumber",
  components: { Minus: Le, Plus: Je, KInput: I },
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
    const n = E(1), l = E(null), o = E(!1), a = k(() => e.modelValue <= e.min), u = k(() => e.modelValue >= e.max), p = k({
      get: () => e.modelValue,
      set: (g) => {
        t("update:modelValue", g);
      }
    }), i = (g) => t("blur", g), c = (g) => t("focus", g), s = (g) => t("enter", g), d = (g) => {
      ue(() => {
        const w = g === "" ? void 0 : Number(g);
        (!Number.isNaN(w) || g === "") && v(w);
      });
    }, V = (g) => {
      o.value = !g, l.value = g;
    }, m = E(-1);
    ne(() => {
      n.value = e.modelValue;
    }), ee(() => m.value, (g) => {
      g < 0 && (p.value = e.modelValue, d(n.value));
    }, { immediate: !0 });
    const r = (g) => {
      const w = g === "increase", B = w ? u.value : a.value;
      if (e.disabled || B)
        return;
      const $e = o.value ? 0 : p.value, re = l.value ? n.value : $e, ke = w ? re + e.step : re - e.step;
      v(ke);
    }, v = (g) => {
      l.value = g;
      let w = g;
      m.value !== w && (m.value = g, w >= e.max && (w = e.max), w <= e.min && (w = e.min), l.value === void 0 && (w = 1), t("update:modelValue", w), t("change", w, m.value), n.value = w);
    };
    return {
      currentValue: n,
      minDisabled: a,
      maxDisabled: u,
      handleBlur: i,
      handleFocus: c,
      handleKeyUp: s,
      handleInputChange: d,
      handleInput: V,
      clickBtnHandle: r
    };
  }
});
function lt(e, t, n, l, o, a) {
  const u = y("minus"), p = y("el-icon"), i = y("plus"), c = y("k-input");
  return f(), $("div", {
    class: M(["el-input-number", { "is-disabled": e.disabled }, { "is-without-controls": !e.controls }, e.size ? "el-input-number--" + e.size : ""])
  }, [
    e.controls ? (f(), $("span", {
      key: 0,
      class: M(["el-input-number__decrease", { "is-disabled": e.minDisabled }]),
      role: "button",
      onClick: t[0] || (t[0] = (s) => e.clickBtnHandle("decrease"))
    }, [
      _(p, { class: "el-input__icon" }, {
        default: h(() => [
          _(u)
        ]),
        _: 1
      })
    ], 2)) : z("", !0),
    e.controls ? (f(), $("span", {
      key: 1,
      class: M(["el-input-number__increase", { "is-disabled": e.maxDisabled }]),
      role: "button",
      onClick: t[1] || (t[1] = (s) => e.clickBtnHandle("increase"))
    }, [
      _(p, { class: "el-input__icon" }, {
        default: h(() => [
          _(i)
        ]),
        _: 1
      })
    ], 2)) : z("", !0),
    _(c, P({
      ref: "input",
      modelValue: e.currentValue,
      "onUpdate:modelValue": t[2] || (t[2] = (s) => e.currentValue = s),
      disabled: e.disabled,
      type: e.type
    }, e.$attrs, {
      onBlur: e.handleBlur,
      maxlength: "6",
      onFocus: e.handleFocus,
      onChange: e.handleInputChange,
      onInput: e.handleInput,
      onKeyup: pe(e.handleKeyUp, ["enter"])
    }), null, 16, ["modelValue", "disabled", "type", "onBlur", "onFocus", "onChange", "onInput", "onKeyup"])
  ], 2);
}
const q = /* @__PURE__ */ T(nt, [["render", lt]]);
q.install = function(e) {
  e.component(q.name, q);
};
function at(e) {
  for (var t = -1, n = e == null ? 0 : e.length, l = {}; ++t < n; ) {
    var o = e[t];
    l[o[0]] = o[1];
  }
  return l;
}
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ot = Object.prototype.hasOwnProperty, de = (e, t) => ot.call(e, t), ut = (e) => typeof e == "string", fe = (e) => e !== null && typeof e == "object", ce = (e) => Object.keys(e);
class st extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function rt(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = ut(e) ? new st(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const me = "__epPropKey", U = (e) => e, it = (e) => fe(e) && !!e[me], ge = (e, t) => {
  if (!fe(e) || it(e))
    return e;
  const { values: n, required: l, default: o, type: a, validator: u } = e, i = {
    type: a,
    required: !!l,
    validator: n || u ? (c) => {
      let s = !1, d = [];
      if (n && (d = Array.from(n), de(e, "default") && d.push(o), s || (s = d.includes(c))), u && (s || (s = u(c))), !s && d.length > 0) {
        const V = [...new Set(d)].map((m) => JSON.stringify(m)).join(", ");
        Ce(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${V}], got value ${JSON.stringify(c)}.`);
      }
      return s;
    } : void 0,
    [me]: !0
  };
  return de(e, "default") && (i.default = o), i;
}, dt = (e) => at(Object.entries(e).map(([t, n]) => [
  t,
  ge(n, t)
])), ct = (e, t) => {
  if (e.install = (n) => {
    for (const l of [e, ...Object.values(t != null ? t : {})])
      n.component(l.name, l);
  }, t)
    for (const [n, l] of Object.entries(t))
      e[n] = l;
  return e;
}, pt = ["", "default", "small", "large"], he = Symbol(), te = E();
function ft(e, t = void 0) {
  const n = le() ? Ee(he, te) : te;
  return e ? k(() => {
    var l, o;
    return (o = (l = n.value) == null ? void 0 : l[e]) != null ? o : t;
  }) : n;
}
const mt = (e, t, n = !1) => {
  var l;
  const o = !!le(), a = o ? ft() : void 0, u = (l = t == null ? void 0 : t.provide) != null ? l : o ? Ve : void 0;
  if (!u) {
    rt("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const p = k(() => {
    const i = N(e);
    return a != null && a.value ? gt(a.value, i) : i;
  });
  return u(he, p), (n || !te.value) && (te.value = p.value), p;
}, gt = (e, t) => {
  var n;
  const l = [.../* @__PURE__ */ new Set([...ce(e), ...ce(t)])], o = {};
  for (const a of l)
    o[a] = (n = t[a]) != null ? n : e[a];
  return o;
}, ht = ge({
  type: String,
  values: pt,
  required: !1
});
function yt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const vt = {}, _t = dt({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: U(Object)
  },
  size: ht,
  button: {
    type: U(Object)
  },
  experimentalFeatures: {
    type: U(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: U(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), bt = S({
  name: "ElConfigProvider",
  props: _t,
  setup(e, { slots: t }) {
    ee(() => e.message, (l) => {
      Object.assign(vt, l != null ? l : {});
    }, { immediate: !0, deep: !0 });
    const n = mt(e);
    return () => b(t, "default", { config: n == null ? void 0 : n.value });
  }
}), ye = ct(bt);
var ve = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = {
    name: "zh-cn",
    el: {
      colorpicker: {
        confirm: "\u786E\u5B9A",
        clear: "\u6E05\u7A7A"
      },
      datepicker: {
        now: "\u6B64\u523B",
        today: "\u4ECA\u5929",
        cancel: "\u53D6\u6D88",
        clear: "\u6E05\u7A7A",
        confirm: "\u786E\u5B9A",
        selectDate: "\u9009\u62E9\u65E5\u671F",
        selectTime: "\u9009\u62E9\u65F6\u95F4",
        startDate: "\u5F00\u59CB\u65E5\u671F",
        startTime: "\u5F00\u59CB\u65F6\u95F4",
        endDate: "\u7ED3\u675F\u65E5\u671F",
        endTime: "\u7ED3\u675F\u65F6\u95F4",
        prevYear: "\u524D\u4E00\u5E74",
        nextYear: "\u540E\u4E00\u5E74",
        prevMonth: "\u4E0A\u4E2A\u6708",
        nextMonth: "\u4E0B\u4E2A\u6708",
        year: "\u5E74",
        month1: "1 \u6708",
        month2: "2 \u6708",
        month3: "3 \u6708",
        month4: "4 \u6708",
        month5: "5 \u6708",
        month6: "6 \u6708",
        month7: "7 \u6708",
        month8: "8 \u6708",
        month9: "9 \u6708",
        month10: "10 \u6708",
        month11: "11 \u6708",
        month12: "12 \u6708",
        weeks: {
          sun: "\u65E5",
          mon: "\u4E00",
          tue: "\u4E8C",
          wed: "\u4E09",
          thu: "\u56DB",
          fri: "\u4E94",
          sat: "\u516D"
        },
        months: {
          jan: "\u4E00\u6708",
          feb: "\u4E8C\u6708",
          mar: "\u4E09\u6708",
          apr: "\u56DB\u6708",
          may: "\u4E94\u6708",
          jun: "\u516D\u6708",
          jul: "\u4E03\u6708",
          aug: "\u516B\u6708",
          sep: "\u4E5D\u6708",
          oct: "\u5341\u6708",
          nov: "\u5341\u4E00\u6708",
          dec: "\u5341\u4E8C\u6708"
        }
      },
      select: {
        loading: "\u52A0\u8F7D\u4E2D",
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        noData: "\u65E0\u6570\u636E",
        placeholder: "\u8BF7\u9009\u62E9"
      },
      cascader: {
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        loading: "\u52A0\u8F7D\u4E2D",
        placeholder: "\u8BF7\u9009\u62E9",
        noData: "\u6682\u65E0\u6570\u636E"
      },
      pagination: {
        goto: "\u524D\u5F80",
        pagesize: "\u6761/\u9875",
        total: "\u5171 {total} \u6761",
        pageClassifier: "\u9875",
        deprecationWarning: "\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863"
      },
      messagebox: {
        title: "\u63D0\u793A",
        confirm: "\u786E\u5B9A",
        cancel: "\u53D6\u6D88",
        error: "\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!"
      },
      upload: {
        deleteTip: "\u6309 delete \u952E\u53EF\u5220\u9664",
        delete: "\u5220\u9664",
        preview: "\u67E5\u770B\u56FE\u7247",
        continue: "\u7EE7\u7EED\u4E0A\u4F20"
      },
      table: {
        emptyText: "\u6682\u65E0\u6570\u636E",
        confirmFilter: "\u7B5B\u9009",
        resetFilter: "\u91CD\u7F6E",
        clearFilter: "\u5168\u90E8",
        sumText: "\u5408\u8BA1"
      },
      tree: {
        emptyText: "\u6682\u65E0\u6570\u636E"
      },
      transfer: {
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        noData: "\u65E0\u6570\u636E",
        titles: ["\u5217\u8868 1", "\u5217\u8868 2"],
        filterPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
        noCheckedFormat: "\u5171 {total} \u9879",
        hasCheckedFormat: "\u5DF2\u9009 {checked}/{total} \u9879"
      },
      image: {
        error: "\u52A0\u8F7D\u5931\u8D25"
      },
      pageHeader: {
        title: "\u8FD4\u56DE"
      },
      popconfirm: {
        confirmButtonText: "\u786E\u5B9A",
        cancelButtonText: "\u53D6\u6D88"
      }
    }
  };
  e.default = t;
})(ve);
const _e = /* @__PURE__ */ yt(ve);
const $t = S({
  name: "KPage",
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: !1 },
    small: { type: Boolean, default: !1 },
    pagerCount: { type: Number, default: 7 }
  },
  components: { ElConfigProvider: ye },
  emits: ["update:modelValue", "update:size", "current-change", "size-change", "change"],
  setup(e, { emit: t }) {
    const n = _e, l = k(() => {
      const { total: i, size: c, showSize: s } = e;
      return s ? !0 : i > c;
    }), o = k({
      get() {
        return e.modelValue;
      },
      set(i) {
        t("update:modelValue", i);
      }
    }), a = k(() => {
      const i = ["total", "sizes", "prev", "pager", "next", "jumper"];
      return e.showSize || i.splice(1, 1), i.join(",");
    });
    return {
      locale: n,
      currentPage: o,
      layoutList: a,
      handleSizeChange: (i) => {
        o.value = 1, t("update:size", i), t("size-change", i), t("change", { page: e.size === i ? o.value : 1, size: i });
      },
      handleCurrentChange: (i) => {
        t("current-change", i), t("change", { page: i, size: e.size });
      },
      showPage: l
    };
  }
}), kt = {
  key: 0,
  class: "page-right mt20"
};
function wt(e, t, n, l, o, a) {
  const u = y("el-pagination"), p = y("el-config-provider");
  return e.showPage ? (f(), $("div", kt, [
    _(p, { locale: e.locale }, {
      default: h(() => [
        _(u, {
          onSizeChange: e.handleSizeChange,
          onCurrentChange: e.handleCurrentChange,
          currentPage: e.currentPage,
          "onUpdate:currentPage": t[0] || (t[0] = (i) => e.currentPage = i),
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
  ])) : z("", !0);
}
const A = /* @__PURE__ */ T($t, [["render", wt], ["__scopeId", "data-v-77c509db"]]);
A.install = function(e) {
  e.component(A.name, A);
};
const Ct = S({
  name: "KTable",
  components: { pagination: A },
  props: {
    emptyText: { type: String, default: "\u6682\u65E0\u6570\u636E" },
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
        { label: "\u65E5\u671F", prop: "date" },
        { label: "\u59D3\u540D", prop: "name" }
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
    const n = k({
      get: () => e.tableData,
      set: (u) => t("update:tableData", u)
    }), l = k({
      get: () => e.modelValue,
      set: (u) => t("update:modelValue", u)
    });
    return {
      currentPage: l,
      tableDataList: n,
      changePage: (u) => t("current-change", u),
      sortChange: ({ column: u, order: p }) => {
        const i = p === "ascending" ? 1 : 0;
        t("sort-change", {
          prop: u == null ? void 0 : u.rawColumnKey,
          order: p,
          sortType: i,
          currentPage: l.value,
          column: u,
          sortColumn: u == null ? void 0 : u.rawColumnKey
        });
      }
    };
  }
}), Vt = { key: 2 };
function Et(e, t, n, l, o, a) {
  const u = y("el-table-column"), p = y("el-table"), i = y("pagination");
  return f(), $(F, null, [
    _(p, P({
      data: e.tableDataList,
      style: { width: "100%" },
      class: "mt20",
      "header-cell-style": e.headerCellStyle
    }, e.$attrs, {
      "empty-text": e.emptyText,
      onSortChange: e.sortChange
    }), K({
      default: h(() => [
        (f(!0), $(F, null, H(e.tableColumn, (c) => (f(), D(u, {
          key: c.prop,
          label: c.label,
          name: c.name,
          width: c.width,
          "min-width": c.minWidth,
          fixed: c.fixed,
          sortable: c.sortable,
          type: c.type,
          "show-overflow-tooltip": e.showOverflowTooltip
        }, K({
          default: h((s) => {
            var d;
            return [
              e.$slots.default ? b(e.$slots, "default", {
                key: 0,
                item: s.row,
                row: s.row,
                index: s.$index
              }) : c.custom && s.$index >= 0 ? b(e.$slots, c.custom, {
                key: 1,
                item: s.row,
                row: s.row,
                index: s.$index
              }) : (f(), $("span", Vt, L((d = s.row[c.prop]) != null ? d : "-"), 1))
            ];
          }),
          _: 2
        }, [
          c.header ? {
            name: "header",
            fn: h(() => [
              b(e.$slots, c.header)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["label", "name", "width", "min-width", "fixed", "sortable", "type", "show-overflow-tooltip"]))), 128))
      ]),
      _: 2
    }, [
      e.$slots.empty ? {
        name: "empty",
        fn: h(() => [
          b(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "empty-text", "onSortChange"]),
    _(i, {
      total: e.total,
      "show-size": e.showSize,
      modelValue: e.currentPage,
      "onUpdate:modelValue": t[0] || (t[0] = (c) => e.currentPage = c),
      onCurrentChange: e.changePage
    }, null, 8, ["total", "show-size", "modelValue", "onCurrentChange"])
  ], 64);
}
const W = /* @__PURE__ */ T(Ct, [["render", Et]]);
W.install = function(e) {
  e.component(W.name, W);
};
const Dt = {
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
      { label: "\u5546\u54C1\u540D\u79F0", prop: "name" },
      { label: "\u7B49\u7EA7", prop: "level" },
      { label: "\u4EF7\u683C", prop: "price" }
    ]
  },
  headerCellStyle: {
    type: Object,
    default: () => ({
      background: "#f5f7fa",
      color: "#909366"
    })
  }
}, St = S({
  name: "KBatchTable",
  components: { pagination: A },
  props: Dt,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { emit: t }) {
    const n = E(null), l = () => n.value.clearSelection(), o = (r) => {
      r ? e.tableData.forEach((v) => {
        r.forEach((g) => {
          m(v) === m(g) && ue(() => n.value && n.value.toggleRowSelection(v));
        });
      }) : (a.value = [], n.value.clearSelection());
    }, a = k({
      get: () => e.modelValue,
      set: (r) => t("update:modelValue", r)
    });
    ee(() => e.modelValue, (r) => {
      !r.length && n.value && n.value.clearSelection();
    });
    const u = () => {
      setTimeout(() => {
        e.selectList.length && (e.tableData.forEach((r) => {
          var v;
          r[e.checkKey] = (v = r[e.checkKey]) != null ? v : 1;
        }), e.selectList.forEach((r) => {
          e.tableData.forEach((v) => {
            m(r) === m(v) && (v[e.checkKey] = 0);
          });
        }), o(a.value));
      }, 200);
    };
    ee(() => e.tableData, (r) => {
      ue(() => {
        r.length && u(), r.length && o(a.value);
      });
    }, { immediate: !0 });
    const p = (r, v) => {
      r.some((w) => m(w) === m(v)) ? a.value = [...a.value, v] : a.value = a.value.filter((w) => m(w) !== m(v));
    }, i = (r) => {
      if (a.value.length)
        if (r.length) {
          const v = r.filter((g) => a.value.every((w) => m(w) !== m(g)));
          a.value = [...a.value, ...v];
        } else
          a.value = a.value.filter((v) => e.tableData.every((g) => m(v) !== m(g)));
      else
        a.value = r;
    }, c = (r) => {
      if (!s(r))
        return;
      const v = a.value.some((g) => m(g) === m(r));
      o([r]), v ? a.value = a.value.filter((g) => m(g) !== m(r)) : a.value = [...a.value, r], t("row-click", r);
    }, s = (r) => {
      var v;
      return (v = r[e.checkKey]) != null ? v : !r[e.checkKey];
    }, d = k({
      get: () => e.page,
      set: (r) => t("update:page", r)
    }), V = (r) => {
      t("current-change", r);
    }, m = (r) => r[e.keyId];
    return {
      multipleTable: n,
      handleSelect: p,
      selectAll: i,
      handleRowClick: c,
      checkSelection: s,
      toggleSelection: o,
      currentPage: d,
      changePage: V,
      clear: l
    };
  }
}), Tt = { key: 2 }, Bt = { class: "mt20 flex-between" }, Pt = { class: "flex1" };
function Nt(e, t, n, l, o, a) {
  const u = y("el-table-column"), p = y("el-table"), i = y("pagination");
  return f(), $(F, null, [
    _(p, P({ ref: "multipleTable" }, e.$attrs, {
      "empty-text": "\u6682\u65E0\u6570\u636E",
      data: e.tableData,
      "header-cell-style": e.headerCellStyle,
      onSelect: e.handleSelect,
      onSelectAll: e.selectAll,
      onRowClick: e.handleRowClick
    }), K({
      default: h(() => [
        _(u, {
          type: "selection",
          width: "55",
          selectable: e.checkSelection
        }, null, 8, ["selectable"]),
        (f(!0), $(F, null, H(e.tableColumn, (c) => (f(), D(u, {
          label: c.label,
          key: c.prop,
          width: c.width,
          fixed: c.fixed,
          "min-width": c.minWidth,
          "show-overflow-tooltip": ""
        }, K({
          default: h((s) => {
            var d;
            return [
              e.$slots.default ? b(e.$slots, "default", {
                key: 0,
                item: s.row,
                row: s.row,
                column: c,
                index: s.$index
              }) : z("", !0),
              c.custom && s.$index >= 0 ? b(e.$slots, c.custom, {
                key: 1,
                item: s.row,
                column: c,
                row: s.row,
                index: s.$index
              }) : (f(), $("span", Tt, L((d = s.row[c.prop]) != null ? d : "-"), 1))
            ];
          }),
          _: 2
        }, [
          c.header ? {
            name: "header",
            fn: h(() => [
              b(e.$slots, "header", { column: c }),
              b(e.$slots, c.header, { column: c })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["label", "width", "fixed", "min-width"]))), 128))
      ]),
      _: 2
    }, [
      e.$slots.empty ? {
        name: "empty",
        fn: h(() => [
          b(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "onSelect", "onSelectAll", "onRowClick"]),
    C("div", Bt, [
      C("div", Pt, [
        e.$slots.footer ? b(e.$slots, "footer", { key: 0 }) : z("", !0)
      ]),
      _(i, {
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
const j = /* @__PURE__ */ T(St, [["render", Nt]]);
j.install = function(e) {
  e.component(j.name, j);
};
const zt = S({
  name: "KDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { type: String, default: "\u63D0\u793A" },
    showFooter: { type: Boolean, default: !0 },
    customClass: { type: String, default: "" }
  },
  emits: ["update:modelValue", "confirm", "open", "close"],
  setup(e, { emit: t }) {
    const n = k({
      get: () => e.modelValue,
      set: (p) => t("update:modelValue", p)
    }), l = k(() => e.customClass ? e.customClass : e.showFooter ? "custom-dialog" : "custom-dialog no-footer");
    return {
      dialogVisible: n,
      customClassName: l,
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
}), Ft = /* @__PURE__ */ C("span", null, "\u8FD9\u662F\u4E00\u6BB5\u4FE1\u606F", -1), Mt = { class: "dialog-footer" };
function At(e, t, n, l, o, a) {
  const u = y("el-button"), p = y("el-dialog");
  return f(), D(p, P({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": t[1] || (t[1] = (i) => e.dialogVisible = i),
    "custom-class": e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), K({
    default: h(() => [
      b(e.$slots, "default", {}, () => [
        Ft
      ])
    ]),
    _: 2
  }, [
    e.showFooter ? {
      name: "footer",
      fn: h(() => [
        b(e.$slots, "footer", {}, () => [
          C("span", Mt, [
            _(u, {
              size: "large",
              onClick: t[0] || (t[0] = (i) => e.dialogVisible = !1)
            }, {
              default: h(() => [
                O("\u53D6 \u6D88")
              ]),
              _: 1
            }),
            _(u, {
              size: "large",
              type: "primary",
              onClick: e.confirmHandler
            }, {
              default: h(() => [
                O("\u786E \u5B9A")
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ])
      ]),
      key: "0"
    } : void 0
  ]), 1040, ["title", "modelValue", "custom-class", "onClose", "onOpen"]);
}
const G = /* @__PURE__ */ T(zt, [["render", At]]);
G.install = function(e) {
  e.component(G.name, G);
};
const Kt = S({
  name: "KBreadcrumb",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const n = le().appContext.config.globalProperties.$router;
    return { clickHandle: (o, a) => {
      if (o.url) {
        window.location.href = o.url;
        return;
      }
      o.path ? n == null || n.push(o.path) : n == null || n.go(a - e.list.length + 1);
    } };
  }
}), Ht = { class: "crumb-header flex-between" }, Ot = { class: "crumb-contain" }, Yt = ["onClick"];
function It(e, t, n, l, o, a) {
  const u = y("el-space");
  return f(), $("div", Ht, [
    C("div", Ot, [
      _(u, { spacer: "/" }, {
        default: h(() => [
          (f(!0), $(F, null, H(e.list, (p, i) => (f(), $("span", {
            key: i,
            class: M({ "crumb-item": i !== e.list.length - 1 }),
            onClick: (c) => e.clickHandle(p, i)
          }, L(p.title), 11, Yt))), 128))
        ]),
        _: 1
      })
    ]),
    b(e.$slots, "default", {}, void 0, !0)
  ]);
}
const J = /* @__PURE__ */ T(Kt, [["render", It], ["__scopeId", "data-v-4520378f"]]);
J.install = function(e) {
  e.component(J.name, J);
};
const jt = S({
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
        { label: "\u5168\u90E8", name: "all" },
        { label: "\u6B63\u5E38", name: "normal" },
        { label: "\u5DF2\u62C9\u9ED1", name: "block" }
      ]
    }
  },
  emits: ["tab-click", "change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = le(), l = n.appContext.config.globalProperties.$route, o = n.appContext.config.globalProperties.$router, a = k(() => (l == null ? void 0 : l.params.type) || (l == null ? void 0 : l.name)), u = E(a.value);
    ne(() => {
      u.value = e.modelValue || a.value, t("update:modelValue", u.value);
    });
    const p = k(() => l.query);
    return { activeName: u, handleClick: (c) => {
      if (e.isRouter) {
        const s = { path: `${c.paneName}`, query: p.value };
        e.replace ? o.replace(s) : o.push(s);
      }
      t("tab-click", c.paneName), t("update:modelValue", c.paneName);
    } };
  }
}), Lt = { class: "tabs-right ml10" };
function Ut(e, t, n, l, o, a) {
  const u = y("el-tab-pane"), p = y("el-tabs");
  return f(), $("div", {
    class: M(["k-tabs", { "style-card": !e.type, "style-padding": e.isPadding && !e.type }])
  }, [
    _(p, P({
      class: "flex-tabs",
      type: e.type
    }, e.$attrs, {
      modelValue: e.activeName,
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.activeName = i),
      onTabClick: e.handleClick
    }), {
      default: h(() => [
        (f(!0), $(F, null, H(e.tabsList, (i) => (f(), D(u, {
          label: i.label,
          name: i.name,
          key: i.name
        }, null, 8, ["label", "name"]))), 128))
      ]),
      _: 1
    }, 16, ["type", "modelValue", "onTabClick"]),
    C("div", Lt, [
      b(e.$slots, "default")
    ])
  ], 2);
}
const Q = /* @__PURE__ */ T(jt, [["render", Ut]]);
Q.install = function(e) {
  e.component(Q.name, Q);
};
const Rt = S({
  name: "KPicker",
  components: { batchTable: j, Delete: Ke },
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
    const n = k({
      get: () => e.modelValue,
      set: (s) => t("update:modelValue", s)
    });
    ne(() => {
      e.showCount && n.value.forEach((s) => {
        var d;
        s.num = (d = s.num) != null ? d : 1;
      });
    });
    const l = E(null), o = () => l.value.toggleSelection(), a = (s) => l.value.handleRowClick(s), u = E(1);
    return {
      multipleSelection: n,
      batchTableRef: l,
      currentPage: u,
      emptyHandler: o,
      resetData: () => {
        u.value = 1, o();
      },
      deleteHandler: a,
      getName: (s) => s[e.keyName],
      getId: (s) => s[e.keyId]
    };
  }
}), qt = { class: "k-picker" }, Wt = { class: "col-left" }, Gt = { class: "col-right" }, Jt = { class: "selete-header flex-between" }, Qt = { class: "selete-content" }, Xt = { class: "flex flex1 mr20 overflow" }, Zt = { class: "text-overflow" };
function xt(e, t, n, l, o, a) {
  const u = y("batchTable"), p = y("el-col"), i = y("delete"), c = y("el-icon"), s = y("el-button"), d = y("el-tooltip"), V = y("el-input-number"), m = y("el-row");
  return f(), $("div", qt, [
    b(e.$slots, "top", {}, void 0, !0),
    _(m, { gutter: 10 }, {
      default: h(() => [
        _(p, { span: 15 }, {
          default: h(() => [
            C("div", Wt, [
              _(u, {
                ref: "batchTableRef",
                height: "440px",
                "table-data": e.tableData,
                "table-column": e.tableColumn,
                "select-list": e.selectList,
                "key-id": e.keyId,
                modelValue: e.multipleSelection,
                "onUpdate:modelValue": t[0] || (t[0] = (r) => e.multipleSelection = r),
                page: e.currentPage,
                "onUpdate:page": t[1] || (t[1] = (r) => e.currentPage = r)
              }, {
                header: h(({ column: r }) => [
                  b(e.$slots, r.header, { column: r }, void 0, !0)
                ]),
                default: h(({ row: r, column: v, index: g }) => [
                  v.custom && g >= 0 ? b(e.$slots, v.custom, {
                    key: 0,
                    row: r,
                    index: g
                  }, void 0, !0) : z("", !0)
                ]),
                _: 3
              }, 8, ["table-data", "table-column", "select-list", "key-id", "modelValue", "page"])
            ])
          ]),
          _: 3
        }),
        _(p, { span: 9 }, {
          default: h(() => [
            C("div", Gt, [
              C("div", Jt, [
                C("span", null, [
                  O("\u5DF2\u9009\u62E9"),
                  C("span", null, "(" + L(e.multipleSelection.length) + ")", 1)
                ]),
                _(s, {
                  text: "",
                  disabled: !e.multipleSelection.length,
                  onClick: e.emptyHandler
                }, {
                  default: h(() => [
                    _(c, null, {
                      default: h(() => [
                        _(i)
                      ]),
                      _: 1
                    }),
                    O(" \u6E05\u7A7A ")
                  ]),
                  _: 1
                }, 8, ["disabled", "onClick"])
              ]),
              C("div", Qt, [
                (f(!0), $(F, null, H(e.multipleSelection, (r) => (f(), $("div", {
                  class: M(["flex-between pl10 pr10", { mt10: e.showCount }]),
                  key: e.getId(r)
                }, [
                  C("div", Xt, [
                    _(d, {
                      effect: "dark",
                      content: e.getName(r),
                      placement: "top"
                    }, {
                      default: h(() => [
                        C("span", Zt, L(e.getName(r)), 1)
                      ]),
                      _: 2
                    }, 1032, ["content"])
                  ]),
                  e.showCount ? (f(), D(V, {
                    key: 0,
                    modelValue: r.num,
                    "onUpdate:modelValue": (v) => r.num = v,
                    min: 1,
                    class: "width-100 flex-shrink mr10"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : z("", !0),
                  _(s, {
                    text: "",
                    onClick: (v) => e.deleteHandler(r)
                  }, {
                    default: h(() => [
                      O(" \u5220\u9664 ")
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
    b(e.$slots, "footer", {}, void 0, !0)
  ]);
}
const X = /* @__PURE__ */ T(Rt, [["render", xt], ["__scopeId", "data-v-11e20448"]]);
X.install = function(e) {
  e.component(X.name, X);
};
const en = S({
  name: "KTooltip",
  props: {
    placement: { type: String, default: "top" },
    showIcon: { type: Boolean, default: !1 }
  },
  components: { Warning: tt }
}), tn = { class: "flex flex1 overflow" }, nn = { class: "text-overflow flex-center" };
function ln(e, t, n, l, o, a) {
  const u = y("warning"), p = y("el-icon"), i = y("el-tooltip");
  return f(), $("div", tn, [
    _(i, P(e.$attrs, { placement: e.placement }), {
      content: h(() => [
        b(e.$slots, "content", {}, void 0, !0)
      ]),
      default: h(() => [
        C("div", nn, [
          b(e.$slots, "default", {}, void 0, !0),
          e.showIcon ? (f(), D(p, {
            key: 0,
            class: "ml5"
          }, {
            default: h(() => [
              b(e.$slots, "icon", {}, () => [
                _(u)
              ], !0)
            ]),
            _: 3
          })) : z("", !0)
        ])
      ]),
      _: 3
    }, 16, ["placement"])
  ]);
}
const Z = /* @__PURE__ */ T(en, [["render", ln], ["__scopeId", "data-v-dcf7f846"]]);
Z.install = function(e) {
  e.component(Z.name, Z);
};
const an = {
  __name: "main",
  setup(e) {
    return (t, n) => (f(), D(N(ye), { locale: N(_e) }, {
      default: h(() => [
        b(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale"]));
  }
}, be = {
  __name: "datePicker",
  props: {
    type: { type: String, default: "daterange" },
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, l = k(() => n.type === "datetimerange" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"), o = (s) => {
      const d = new Date(), V = new Date();
      return d.setTime(d.getTime() - 3600 * 1e3 * 24 * s), n.type === "date" ? d : [d, V];
    }, a = [
      {
        text: "\u6700\u8FD1\u4E00\u5468",
        value: () => o(7)
      },
      {
        text: "\u6700\u8FD1\u4E00\u4E2A\u6708",
        value: () => o(30)
      },
      {
        text: "\u6700\u8FD1\u4E09\u4E2A\u6708",
        value: () => o(90)
      }
    ], u = [new Date(2e3, 1, 1, 0, 0, 0), new Date(2e3, 2, 1, 23, 59, 59)], p = k({
      get: () => n.modelValue,
      set: (s) => t("update:modelValue", s)
    }), i = (s) => s.getTime() > Date.now(), c = (s) => t("change", s);
    return (s, d) => {
      const V = y("el-date-picker");
      return f(), D(V, {
        modelValue: N(p),
        "onUpdate:modelValue": d[0] || (d[0] = (m) => se(p) ? p.value = m : null),
        type: e.type,
        "unlink-panels": "",
        "range-separator": "\u81F3",
        "start-placeholder": "\u5F00\u59CB\u65E5\u671F",
        "end-placeholder": "\u7ED3\u675F\u65E5\u671F",
        shortcuts: a,
        format: N(l),
        "value-format": "YYYY-MM-DD HH:mm:ss",
        "disabled-date": i,
        "default-time": u,
        editable: !1,
        clearable: !1,
        onChange: c
      }, null, 8, ["modelValue", "type", "format"]);
    };
  }
}, on = { class: "date-picker flex" }, un = {
  __name: "selectType",
  props: {
    daterange: { type: Boolean, default: !1 },
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, l = E(0), o = E([
      { value: 0, label: "\u65E5" },
      { value: 1, label: "\u5468" },
      { value: 2, label: "\u6708" },
      { value: 3, label: "\u5E74" }
    ]), a = k({
      get: () => n.modelValue,
      set: (m) => t("update:modelValue", m)
    }), u = (m) => m.getTime() > Date.now(), p = k(() => ({
      0: "YYYY-MM-DD",
      1: "YYYY \u7B2C ww \u5468",
      2: "YYYY-MM",
      3: "YYYY"
    })[l.value]), i = k(() => ({
      0: n.daterange ? "daterange" : "date",
      1: "week",
      2: "month",
      3: "year"
    })[l.value]), c = k(() => {
      const { label: m } = o.value.filter((r) => r.value === l.value)[0];
      return `\u9009\u62E9${m}`;
    }), s = E("");
    ne(() => {
      if (Array.isArray(a.value)) {
        const [m, r] = a.value;
        s.value = [m, r];
      }
    });
    const d = (m) => {
      if (m) {
        if (Array.isArray(a.value)) {
          const [r] = a.value;
          a.value = r;
        }
      } else
        n.daterange && (a.value = s.value);
      V();
    }, V = () => {
      t("change", { type: l.value, time: a.value });
    };
    return (m, r) => {
      const v = y("el-option"), g = y("el-select"), w = y("el-date-picker");
      return f(), $("div", on, [
        _(g, {
          modelValue: l.value,
          "onUpdate:modelValue": r[0] || (r[0] = (B) => l.value = B),
          class: "width-100 mr10",
          onChange: d
        }, {
          default: h(() => [
            (f(!0), $(F, null, H(o.value, (B) => (f(), D(v, {
              key: B.value,
              label: B.label,
              value: B.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        C("div", null, [
          e.daterange && !l.value ? (f(), D(be, P({
            key: 0,
            modelValue: N(a),
            "onUpdate:modelValue": r[1] || (r[1] = (B) => se(a) ? a.value = B : null)
          }, m.$props, { onChange: V }), null, 16, ["modelValue"])) : (f(), D(w, {
            key: 1,
            modelValue: N(a),
            "onUpdate:modelValue": r[2] || (r[2] = (B) => se(a) ? a.value = B : null),
            type: N(i),
            format: N(p),
            "value-format": "YYYY-MM-DD HH:mm:ss",
            placeholder: N(c),
            "disabled-date": u,
            clearable: !1,
            editable: !1,
            "start-placeholder": "\u5F00\u59CB\u65E5\u671F",
            "end-placeholder": "\u7ED3\u675F\u65E5\u671F",
            onChange: V
          }, null, 8, ["modelValue", "type", "format", "placeholder"]))
        ])
      ]);
    };
  }
}, sn = S({
  name: "KDatePicker",
  props: {
    selectType: { type: Boolean, default: !1 }
  },
  components: { configProvider: an, selectType: un, datePicker: be },
  setup() {
  }
});
function rn(e, t, n, l, o, a) {
  const u = y("selectType"), p = y("datePicker"), i = y("config-provider");
  return f(), D(i, null, {
    default: h(() => [
      e.selectType ? (f(), D(u, ie(P({ key: 0 }, e.$attrs)), null, 16)) : (f(), D(p, ie(P({ key: 1 }, e.$attrs)), null, 16))
    ]),
    _: 1
  });
}
const x = /* @__PURE__ */ T(sn, [["render", rn]]);
x.install = function(e) {
  e.component(x.name, x);
};
const oe = {
  KButton: R,
  KInput: I,
  KInputNumber: q,
  KTable: W,
  KPage: A,
  KBatchTable: j,
  KDialog: G,
  KBreadcrumb: J,
  KTabs: Q,
  KPicker: X,
  KTooltip: Z,
  KDatePicker: x,
  install: () => {
  }
};
function dn(e, t, n = 0) {
  return e.substr(n, t.length) === t;
}
oe.install = function(e) {
  Object.keys(oe).forEach((t) => {
    if (dn(t, "K")) {
      const n = oe[t];
      e.component(n.name, n);
    }
  }), Object.keys(Y).forEach((t) => {
    e.directive(t, Y[t]);
  });
};
export {
  j as KBatchTable,
  J as KBreadcrumb,
  R as KButton,
  x as KDatePicker,
  G as KDialog,
  I as KInput,
  q as KInputNumber,
  A as KPage,
  X as KPicker,
  W as KTable,
  Q as KTabs,
  Z as KTooltip,
  oe as KUI,
  Y as directives
};
