import { inject as ze, getCurrentInstance as ie, onUnmounted as Me, computed as b, ref as x, onDeactivated as je, isRef as Ct, watch as be, onMounted as Ke, nextTick as K, onActivated as We, unref as Se, reactive as Ue, defineComponent as C, createVNode as d, onBeforeUnmount as wt, provide as qe, watchEffect as kt, mergeProps as le, createTextVNode as Bt, useCssVars as Ye, resolveComponent as re, openBlock as p, createBlock as me, createSlots as It, withCtx as ce, renderSlot as W, createElementBlock as $, createElementVNode as P, toDisplayString as Y, Fragment as U, renderList as X, normalizeStyle as Ce, normalizeClass as Vt, withModifiers as xt, createCommentVNode as we } from "vue";
const S = (e) => e != null, oe = (e) => typeof e == "function", ue = (e) => e !== null && typeof e == "object", Pt = (e) => ue(e) && oe(e.then) && oe(e.catch), He = (e) => typeof e == "number" || /^\d+(\.\d+)?$/.test(e), Tt = () => Ze ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1, R = Object.assign, Ze = typeof window < "u";
function ke(e, t) {
  const n = t.split(".");
  let r = e;
  return n.forEach((i) => {
    var o;
    r = ue(r) && (o = r[i]) != null ? o : "";
  }), r;
}
const Be = (e) => Array.isArray(e) ? e : [e], Q = null, _ = [Number, String], Ge = {
  type: Boolean,
  default: !0
}, Dt = (e) => ({
  type: _,
  default: e
}), y = (e) => ({
  type: String,
  default: e
});
var Je = typeof window < "u";
function At(e) {
  const t = ze(e, null);
  if (t) {
    const n = ie(), { link: r, unlink: i, internalChildren: o } = t;
    r(n), Me(() => i(n));
    const l = b(() => o.indexOf(n));
    return {
      parent: t,
      index: l
    };
  }
  return {
    parent: null,
    index: x(-1)
  };
}
function Lt(e) {
  let t;
  Ke(() => {
    e(), K(() => {
      t = !0;
    });
  }), We(() => {
    t && e();
  });
}
function Nt(e, t, n = {}) {
  if (!Je)
    return;
  const { target: r = window, passive: i = !1, capture: o = !1 } = n;
  let l;
  const f = (c) => {
    const s = Se(c);
    s && !l && (s.addEventListener(e, t, {
      capture: o,
      passive: i
    }), l = !0);
  }, u = (c) => {
    const s = Se(c);
    s && l && (s.removeEventListener(e, t, o), l = !1);
  };
  Me(() => u(r)), je(() => u(r)), Lt(() => f(r)), Ct(r) && be(r, (c, s) => {
    u(s), f(c);
  });
}
var J, de;
function Ot() {
  if (!J && (J = x(0), de = x(0), Je)) {
    const e = () => {
      J.value = window.innerWidth, de.value = window.innerHeight;
    };
    e(), window.addEventListener("resize", e, { passive: !0 }), window.addEventListener("orientationchange", e, { passive: !0 });
  }
  return { width: J, height: de };
}
var Ft = Symbol("van-field");
function Ie(e, t) {
  "scrollTop" in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t);
}
function Xe() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function Qe(e) {
  Ie(window, e), Ie(document.body, e);
}
const Rt = Tt();
function zt() {
  Rt && Qe(Xe());
}
const Mt = (e) => e.stopPropagation();
function he(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && Mt(e);
}
Ot();
function w(e) {
  if (S(e))
    return He(e) ? `${e}px` : String(e);
}
function jt(e) {
  if (S(e)) {
    if (Array.isArray(e))
      return {
        width: w(e[0]),
        height: w(e[1])
      };
    const t = w(e);
    return {
      width: t,
      height: t
    };
  }
}
const Kt = /-(\w)/g, et = (e) => e.replace(Kt, (t, n) => n.toUpperCase()), Wt = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
function Ve(e, t, n) {
  const r = e.indexOf(t);
  return r === -1 ? e : t === "-" && r !== 0 ? e.slice(0, r) : e.slice(0, r + 1) + e.slice(r).replace(n, "");
}
function Ut(e, t = !0, n = !0) {
  t ? e = Ve(e, ".", /\./g) : e = e.split(".")[0], n ? e = Ve(e, "-", /-/g) : e = e.replace(/-/, "");
  const r = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(r, "");
}
const { hasOwnProperty: qt } = Object.prototype;
function Yt(e, t, n) {
  const r = t[n];
  !S(r) || (!qt.call(e, n) || !ue(r) ? e[n] = r : e[n] = tt(Object(e[n]), r));
}
function tt(e, t) {
  return Object.keys(t).forEach((n) => {
    Yt(e, t, n);
  }), e;
}
var Ht = {
  name: "\u59D3\u540D",
  tel: "\u7535\u8BDD",
  save: "\u4FDD\u5B58",
  confirm: "\u786E\u8BA4",
  cancel: "\u53D6\u6D88",
  delete: "\u5220\u9664",
  loading: "\u52A0\u8F7D\u4E2D...",
  noCoupon: "\u6682\u65E0\u4F18\u60E0\u5238",
  nameEmpty: "\u8BF7\u586B\u5199\u59D3\u540D",
  addContact: "\u6DFB\u52A0\u8054\u7CFB\u4EBA",
  telInvalid: "\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",
  vanCalendar: {
    end: "\u7ED3\u675F",
    start: "\u5F00\u59CB",
    title: "\u65E5\u671F\u9009\u62E9",
    weekdays: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
    monthTitle: (e, t) => `${e}\u5E74${t}\u6708`,
    rangePrompt: (e) => `\u6700\u591A\u9009\u62E9 ${e} \u5929`
  },
  vanCascader: {
    select: "\u8BF7\u9009\u62E9"
  },
  vanPagination: {
    prev: "\u4E0A\u4E00\u9875",
    next: "\u4E0B\u4E00\u9875"
  },
  vanPullRefresh: {
    pulling: "\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",
    loosing: "\u91CA\u653E\u5373\u53EF\u5237\u65B0..."
  },
  vanSubmitBar: {
    label: "\u5408\u8BA1:"
  },
  vanCoupon: {
    unlimited: "\u65E0\u95E8\u69DB",
    discount: (e) => `${e}\u6298`,
    condition: (e) => `\u6EE1${e}\u5143\u53EF\u7528`
  },
  vanCouponCell: {
    title: "\u4F18\u60E0\u5238",
    count: (e) => `${e}\u5F20\u53EF\u7528`
  },
  vanCouponList: {
    exchange: "\u5151\u6362",
    close: "\u4E0D\u4F7F\u7528",
    enable: "\u53EF\u7528",
    disabled: "\u4E0D\u53EF\u7528",
    placeholder: "\u8F93\u5165\u4F18\u60E0\u7801"
  },
  vanAddressEdit: {
    area: "\u5730\u533A",
    areaEmpty: "\u8BF7\u9009\u62E9\u5730\u533A",
    addressEmpty: "\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",
    addressDetail: "\u8BE6\u7EC6\u5730\u5740",
    defaultAddress: "\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"
  },
  vanAddressList: {
    add: "\u65B0\u589E\u5730\u5740"
  }
};
const xe = x("zh-CN"), Pe = Ue({
  "zh-CN": Ht
}), Zt = {
  messages() {
    return Pe[xe.value];
  },
  use(e, t) {
    xe.value = e, this.add({ [e]: t });
  },
  add(e = {}) {
    tt(Pe, e);
  }
};
var Gt = Zt;
function Jt(e) {
  const t = et(e) + ".";
  return (n, ...r) => {
    const i = Gt.messages(), o = ke(i, t + n) || ke(i, n);
    return oe(o) ? o(...r) : o;
  };
}
function ve(e, t) {
  return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce(
    (n, r) => n + ve(e, r),
    ""
  ) : Object.keys(t).reduce(
    (n, r) => n + (t[r] ? ve(e, r) : ""),
    ""
  ) : "";
}
function Xt(e) {
  return (t, n) => (t && typeof t != "string" && (n = t, t = ""), t = t ? `${e}__${t}` : e, `${t}${ve(t, n)}`);
}
function L(e) {
  const t = `van-${e}`;
  return [
    t,
    Xt(t),
    Jt(t)
  ];
}
const Qt = "van-hairline", en = `${Qt}--surround`, tn = Symbol("van-form");
function z(e) {
  return e.install = (t) => {
    const { name: n } = e;
    n && (t.component(n, e), t.component(et(`-${n}`), e));
  }, e;
}
function nn(e) {
  const t = ie();
  t && R(t.proxy, e);
}
const nt = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
function an({
  to: e,
  url: t,
  replace: n,
  $router: r
}) {
  e && r ? r[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t);
}
function at() {
  const e = ie().proxy;
  return () => an(e);
}
const [rn, Te] = L("badge"), on = {
  dot: Boolean,
  max: _,
  tag: y("div"),
  color: String,
  offset: Array,
  content: _,
  showZero: Ge,
  position: y("top-right")
};
var ln = C({
  name: rn,
  props: on,
  setup(e, {
    slots: t
  }) {
    const n = () => {
      if (t.content)
        return !0;
      const {
        content: l,
        showZero: f
      } = e;
      return S(l) && l !== "" && (f || l !== 0 && l !== "0");
    }, r = () => {
      const {
        dot: l,
        max: f,
        content: u
      } = e;
      if (!l && n())
        return t.content ? t.content() : S(f) && He(u) && +u > f ? `${f}+` : u;
    }, i = b(() => {
      const l = {
        background: e.color
      };
      if (e.offset) {
        const [f, u] = e.offset;
        t.default ? (l.top = w(u), typeof f == "number" ? l.right = w(-f) : l.right = f.startsWith("-") ? f.replace("-", "") : `-${f}`) : (l.marginTop = w(u), l.marginLeft = w(f));
      }
      return l;
    }), o = () => {
      if (n() || e.dot)
        return d("div", {
          class: Te([e.position, {
            dot: e.dot,
            fixed: !!t.default
          }]),
          style: i.value
        }, [r()]);
    };
    return () => {
      if (t.default) {
        const {
          tag: l
        } = e;
        return d(l, {
          class: Te("wrapper")
        }, {
          default: () => [t.default(), o()]
        });
      }
      return o();
    };
  }
});
const un = z(ln), sn = (e) => {
}, [rt, cn] = L("config-provider"), ot = Symbol(rt), dn = {
  tag: y("div"),
  theme: y("light"),
  zIndex: Number,
  themeVars: Object,
  themeVarsDark: Object,
  themeVarsLight: Object,
  iconPrefix: String
};
function fn(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[`--van-${Wt(n)}`] = e[n];
  }), t;
}
C({
  name: rt,
  props: dn,
  setup(e, {
    slots: t
  }) {
    const n = b(() => fn(R({}, e.themeVars, e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight)));
    if (Ze) {
      const r = () => {
        document.documentElement.classList.add(`van-theme-${e.theme}`);
      }, i = (o = e.theme) => {
        document.documentElement.classList.remove(`van-theme-${o}`);
      };
      be(() => e.theme, (o, l) => {
        l && i(l), r();
      }, {
        immediate: !0
      }), We(r), je(i), wt(i);
    }
    return qe(ot, e), kt(() => {
      e.zIndex !== void 0 && sn(e.zIndex);
    }), () => d(e.tag, {
      class: cn(),
      style: n.value
    }, {
      default: () => {
        var r;
        return [(r = t.default) == null ? void 0 : r.call(t)];
      }
    });
  }
});
const [gn, De] = L("icon"), mn = (e) => e == null ? void 0 : e.includes("/"), hn = {
  dot: Boolean,
  tag: y("i"),
  name: String,
  size: _,
  badge: _,
  color: String,
  badgeProps: Object,
  classPrefix: String
};
var vn = C({
  name: gn,
  props: hn,
  setup(e, {
    slots: t
  }) {
    const n = ze(ot, null), r = b(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || De());
    return () => {
      const {
        tag: i,
        dot: o,
        name: l,
        size: f,
        badge: u,
        color: c
      } = e, s = mn(l);
      return d(un, le({
        dot: o,
        tag: i,
        class: [r.value, s ? "" : `${r.value}-${l}`],
        style: {
          color: c,
          fontSize: w(f)
        },
        content: u
      }, e.badgeProps), {
        default: () => {
          var h;
          return [(h = t.default) == null ? void 0 : h.call(t), s && d("img", {
            class: De("image"),
            src: l
          }, null)];
        }
      });
    };
  }
});
const A = z(vn), [bn, q] = L("loading"), yn = Array(12).fill(null).map((e, t) => d("i", {
  class: q("line", String(t + 1))
}, null)), pn = d("svg", {
  class: q("circular"),
  viewBox: "25 25 50 50"
}, [d("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
}, null)]), _n = {
  size: _,
  type: y("circular"),
  color: String,
  vertical: Boolean,
  textSize: _,
  textColor: String
};
var En = C({
  name: bn,
  props: _n,
  setup(e, {
    slots: t
  }) {
    const n = b(() => R({
      color: e.color
    }, jt(e.size))), r = () => {
      const o = e.type === "spinner" ? yn : pn;
      return d("span", {
        class: q("spinner", e.type),
        style: n.value
      }, [t.icon ? t.icon() : o]);
    }, i = () => {
      var o;
      if (t.default)
        return d("span", {
          class: q("text"),
          style: {
            fontSize: w(e.textSize),
            color: (o = e.textColor) != null ? o : e.color
          }
        }, [t.default()]);
    };
    return () => {
      const {
        type: o,
        vertical: l
      } = e;
      return d("div", {
        class: q([o, {
          vertical: l
        }]),
        "aria-live": "polite",
        "aria-busy": !0
      }, [r(), i()]);
    };
  }
});
const $n = z(En), [Sn, O] = L("button"), Cn = R({}, nt, {
  tag: y("button"),
  text: String,
  icon: String,
  type: y("default"),
  size: y("normal"),
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: y("button"),
  loadingSize: _,
  loadingText: String,
  loadingType: String,
  iconPosition: y("left")
});
var wn = C({
  name: Sn,
  props: Cn,
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const r = at(), i = () => n.loading ? n.loading() : d($n, {
      size: e.loadingSize,
      type: e.loadingType,
      class: O("loading")
    }, null), o = () => {
      if (e.loading)
        return i();
      if (n.icon)
        return d("div", {
          class: O("icon")
        }, [n.icon()]);
      if (e.icon)
        return d(A, {
          name: e.icon,
          class: O("icon"),
          classPrefix: e.iconPrefix
        }, null);
    }, l = () => {
      let c;
      if (e.loading ? c = e.loadingText : c = n.default ? n.default() : e.text, c)
        return d("span", {
          class: O("text")
        }, [c]);
    }, f = () => {
      const {
        color: c,
        plain: s
      } = e;
      if (c) {
        const h = {
          color: s ? c : "white"
        };
        return s || (h.background = c), c.includes("gradient") ? h.border = 0 : h.borderColor = c, h;
      }
    }, u = (c) => {
      e.loading ? he(c) : e.disabled || (t("click", c), r());
    };
    return () => {
      const {
        tag: c,
        type: s,
        size: h,
        block: T,
        round: M,
        plain: I,
        square: V,
        loading: D,
        disabled: k,
        hairline: H,
        nativeType: N,
        iconPosition: Z
      } = e, j = [O([s, h, {
        plain: I,
        block: T,
        round: M,
        square: V,
        loading: D,
        disabled: k,
        hairline: H
      }]), {
        [en]: H
      }];
      return d(c, {
        type: N,
        class: j,
        style: f(),
        disabled: k,
        onClick: u
      }, {
        default: () => [d("div", {
          class: O("content")
        }, [Z === "left" && o(), l(), Z === "right" && o()])]
      });
    };
  }
});
const kn = z(wn);
let Bn = 0;
function In() {
  const e = ie(), { name: t = "unknown" } = (e == null ? void 0 : e.type) || {};
  return process.env.NODE_ENV === "test" ? t : `${t}-${++Bn}`;
}
const [Vn, F] = L("cell"), it = {
  tag: y("div"),
  icon: String,
  size: String,
  title: _,
  value: _,
  label: _,
  center: Boolean,
  isLink: Boolean,
  border: Ge,
  required: Boolean,
  iconPrefix: String,
  valueClass: Q,
  labelClass: Q,
  titleClass: Q,
  titleStyle: null,
  arrowDirection: String,
  clickable: {
    type: Boolean,
    default: null
  }
}, xn = R({}, it, nt);
var Pn = C({
  name: Vn,
  props: xn,
  setup(e, {
    slots: t
  }) {
    const n = at(), r = () => {
      if (t.label || S(e.label))
        return d("div", {
          class: [F("label"), e.labelClass]
        }, [t.label ? t.label() : e.label]);
    }, i = () => {
      if (t.title || S(e.title))
        return d("div", {
          class: [F("title"), e.titleClass],
          style: e.titleStyle
        }, [t.title ? t.title() : d("span", null, [e.title]), r()]);
    }, o = () => {
      const u = t.value || t.default;
      if (u || S(e.value))
        return d("div", {
          class: [F("value"), e.valueClass]
        }, [u ? u() : d("span", null, [e.value])]);
    }, l = () => {
      if (t.icon)
        return t.icon();
      if (e.icon)
        return d(A, {
          name: e.icon,
          class: F("left-icon"),
          classPrefix: e.iconPrefix
        }, null);
    }, f = () => {
      if (t["right-icon"])
        return t["right-icon"]();
      if (e.isLink) {
        const u = e.arrowDirection && e.arrowDirection !== "right" ? `arrow-${e.arrowDirection}` : "arrow";
        return d(A, {
          name: u,
          class: F("right-icon")
        }, null);
      }
    };
    return () => {
      var u;
      const {
        tag: c,
        size: s,
        center: h,
        border: T,
        isLink: M,
        required: I
      } = e, V = (u = e.clickable) != null ? u : M, D = {
        center: h,
        required: I,
        clickable: V,
        borderless: !T
      };
      return s && (D[s] = !!s), d(c, {
        class: F(D),
        role: V ? "button" : void 0,
        tabindex: V ? 0 : void 0,
        onClick: n
      }, {
        default: () => {
          var k;
          return [l(), i(), o(), f(), (k = t.extra) == null ? void 0 : k.call(t)];
        }
      });
    };
  }
});
const Tn = z(Pn);
function lt(e) {
  return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e;
}
function Dn(e, t) {
  if (lt(e)) {
    if (t.required)
      return !1;
    if (t.validateEmpty === !1)
      return !0;
  }
  return !(t.pattern && !t.pattern.test(String(e)));
}
function An(e, t) {
  return new Promise((n) => {
    const r = t.validator(e, t);
    if (Pt(r)) {
      r.then(n);
      return;
    }
    n(r);
  });
}
function Ae(e, t) {
  const { message: n } = t;
  return oe(n) ? n(e, t) : n || "";
}
function Ln({ target: e }) {
  e.composing = !0;
}
function Le({ target: e }) {
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
function Nn(e, t) {
  const n = Xe();
  e.style.height = "auto";
  let r = e.scrollHeight;
  if (ue(t)) {
    const { maxHeight: i, minHeight: o } = t;
    i !== void 0 && (r = Math.min(r, i)), o !== void 0 && (r = Math.max(r, o));
  }
  r && (e.style.height = `${r}px`, Qe(n));
}
function On(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
function fe(e) {
  return [...e].length;
}
function Fn(e, t) {
  return [...e].slice(0, t).join("");
}
const [Rn, E] = L("field"), zn = {
  id: String,
  name: String,
  leftIcon: String,
  rightIcon: String,
  autofocus: Boolean,
  clearable: Boolean,
  maxlength: _,
  formatter: Function,
  clearIcon: y("clear"),
  modelValue: Dt(""),
  inputAlign: String,
  placeholder: String,
  autocomplete: String,
  errorMessage: String,
  enterkeyhint: String,
  clearTrigger: y("focus"),
  formatTrigger: y("onChange"),
  error: {
    type: Boolean,
    default: null
  },
  disabled: {
    type: Boolean,
    default: null
  },
  readonly: {
    type: Boolean,
    default: null
  }
}, Mn = R({}, it, zn, {
  rows: _,
  type: y("text"),
  rules: Array,
  autosize: [Boolean, Object],
  labelWidth: _,
  labelClass: Q,
  labelAlign: String,
  showWordLimit: Boolean,
  errorMessageAlign: String,
  colon: {
    type: Boolean,
    default: null
  }
});
var jn = C({
  name: Rn,
  props: Mn,
  emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const r = In(), i = Ue({
      status: "unvalidated",
      focused: !1,
      validateMessage: ""
    }), o = x(), l = x(), f = x(), {
      parent: u
    } = At(tn), c = () => {
      var a;
      return String((a = e.modelValue) != null ? a : "");
    }, s = (a) => {
      if (S(e[a]))
        return e[a];
      if (u && S(u.props[a]))
        return u.props[a];
    }, h = b(() => {
      const a = s("readonly");
      if (e.clearable && !a) {
        const g = c() !== "", m = e.clearTrigger === "always" || e.clearTrigger === "focus" && i.focused;
        return g && m;
      }
      return !1;
    }), T = b(() => f.value && n.input ? f.value() : e.modelValue), M = (a) => a.reduce((g, m) => g.then(() => {
      if (i.status === "failed")
        return;
      let {
        value: v
      } = T;
      if (m.formatter && (v = m.formatter(v, m)), !Dn(v, m)) {
        i.status = "failed", i.validateMessage = Ae(v, m);
        return;
      }
      if (m.validator)
        return lt(v) && m.validateEmpty === !1 ? void 0 : An(v, m).then((B) => {
          B && typeof B == "string" ? (i.status = "failed", i.validateMessage = B) : B === !1 && (i.status = "failed", i.validateMessage = Ae(v, m));
        });
    }), Promise.resolve()), I = () => {
      i.status = "unvalidated", i.validateMessage = "";
    }, V = () => t("endValidate", {
      status: i.status,
      message: i.validateMessage
    }), D = (a = e.rules) => new Promise((g) => {
      I(), a ? (t("startValidate"), M(a).then(() => {
        i.status === "failed" ? (g({
          name: e.name,
          message: i.validateMessage
        }), V()) : (i.status = "passed", g(), V());
      })) : g();
    }), k = (a) => {
      if (u && e.rules) {
        const {
          validateTrigger: g
        } = u.props, m = Be(g).includes(a), v = e.rules.filter((B) => B.trigger ? Be(B.trigger).includes(a) : m);
        v.length && D(v);
      }
    }, H = (a) => {
      const {
        maxlength: g
      } = e;
      if (S(g) && fe(a) > g) {
        const m = c();
        return m && fe(m) === +g ? m : Fn(a, +g);
      }
      return a;
    }, N = (a, g = "onChange") => {
      if (a = H(a), e.type === "number" || e.type === "digit") {
        const m = e.type === "number";
        a = Ut(a, m, m);
      }
      if (e.formatter && g === e.formatTrigger && (a = e.formatter(a)), o.value && o.value.value !== a) {
        const {
          selectionStart: m,
          selectionEnd: v
        } = o.value;
        o.value.value = a, o.value.setSelectionRange(m, v);
      }
      a !== e.modelValue && t("update:modelValue", a);
    }, Z = (a) => {
      a.target.composing || N(a.target.value);
    }, j = () => {
      var a;
      return (a = o.value) == null ? void 0 : a.blur();
    }, ut = () => {
      var a;
      return (a = o.value) == null ? void 0 : a.focus();
    }, G = () => {
      const a = o.value;
      e.type === "textarea" && e.autosize && a && Nn(a, e.autosize);
    }, st = (a) => {
      i.focused = !0, t("focus", a), K(G), s("readonly") && j();
    }, ct = (a) => {
      s("readonly") || (i.focused = !1, N(c(), "onBlur"), t("blur", a), k("onBlur"), K(G), zt());
    }, _e = (a) => t("clickInput", a), dt = (a) => t("clickLeftIcon", a), ft = (a) => t("clickRightIcon", a), gt = (a) => {
      he(a), t("update:modelValue", ""), t("clear", a);
    }, Ee = b(() => {
      if (typeof e.error == "boolean")
        return e.error;
      if (u && u.props.showError && i.status === "failed")
        return !0;
    }), mt = b(() => {
      const a = s("labelWidth");
      if (a)
        return {
          width: w(a)
        };
    }), ht = (a) => {
      a.keyCode === 13 && (!(u && u.props.submitOnEnter) && e.type !== "textarea" && he(a), e.type === "search" && j()), t("keypress", a);
    }, $e = () => e.id || `${r}-input`, vt = () => i.status, bt = () => {
      const a = E("control", [s("inputAlign"), {
        error: Ee.value,
        custom: !!n.input,
        "min-height": e.type === "textarea" && !e.autosize
      }]);
      if (n.input)
        return d("div", {
          class: a,
          onClick: _e
        }, [n.input()]);
      const g = {
        id: $e(),
        ref: o,
        name: e.name,
        rows: e.rows !== void 0 ? +e.rows : void 0,
        class: a,
        disabled: s("disabled"),
        readonly: s("readonly"),
        autofocus: e.autofocus,
        placeholder: e.placeholder,
        autocomplete: e.autocomplete,
        enterkeyhint: e.enterkeyhint,
        "aria-labelledby": e.label ? `${r}-label` : void 0,
        onBlur: ct,
        onFocus: st,
        onInput: Z,
        onClick: _e,
        onChange: Le,
        onKeypress: ht,
        onCompositionend: Le,
        onCompositionstart: Ln
      };
      return e.type === "textarea" ? d("textarea", g, null) : d("input", le(On(e.type), g), null);
    }, yt = () => {
      const a = n["left-icon"];
      if (e.leftIcon || a)
        return d("div", {
          class: E("left-icon"),
          onClick: dt
        }, [a ? a() : d(A, {
          name: e.leftIcon,
          classPrefix: e.iconPrefix
        }, null)]);
    }, pt = () => {
      const a = n["right-icon"];
      if (e.rightIcon || a)
        return d("div", {
          class: E("right-icon"),
          onClick: ft
        }, [a ? a() : d(A, {
          name: e.rightIcon,
          classPrefix: e.iconPrefix
        }, null)]);
    }, _t = () => {
      if (e.showWordLimit && e.maxlength) {
        const a = fe(c());
        return d("div", {
          class: E("word-limit")
        }, [d("span", {
          class: E("word-num")
        }, [a]), Bt("/"), e.maxlength]);
      }
    }, Et = () => {
      if (u && u.props.showErrorMessage === !1)
        return;
      const a = e.errorMessage || i.validateMessage;
      if (a) {
        const g = n["error-message"], m = s("errorMessageAlign");
        return d("div", {
          class: E("error-message", m)
        }, [g ? g({
          message: a
        }) : a]);
      }
    }, $t = () => {
      const a = s("colon") ? ":" : "";
      if (n.label)
        return [n.label(), a];
      if (e.label)
        return d("label", {
          id: `${r}-label`,
          for: $e()
        }, [e.label + a]);
    }, St = () => [d("div", {
      class: E("body")
    }, [bt(), h.value && d(A, {
      ref: l,
      name: e.clearIcon,
      class: E("clear")
    }, null), pt(), n.button && d("div", {
      class: E("button")
    }, [n.button()])]), _t(), Et()];
    return nn({
      blur: j,
      focus: ut,
      validate: D,
      formValue: T,
      resetValidation: I,
      getValidationStatus: vt
    }), qe(Ft, {
      customValue: f,
      resetValidation: I,
      validateWithTrigger: k
    }), be(() => e.modelValue, () => {
      N(c()), I(), k("onChange"), K(G);
    }), Ke(() => {
      N(c(), e.formatTrigger), K(G);
    }), Nt("touchstart", gt, {
      target: b(() => {
        var a;
        return (a = l.value) == null ? void 0 : a.$el;
      })
    }), () => {
      const a = s("disabled"), g = s("labelAlign"), m = $t(), v = yt(), B = () => g === "top" ? [v, m] : m;
      return d(Tn, {
        size: e.size,
        class: E({
          error: Ee.value,
          disabled: a,
          [`label-${g}`]: g
        }),
        center: e.center,
        border: e.border,
        isLink: e.isLink,
        clickable: e.clickable,
        titleStyle: mt.value,
        valueClass: E("value"),
        titleClass: [E("label", [g, {
          required: e.required
        }]), e.labelClass],
        arrowDirection: e.arrowDirection
      }, {
        icon: v && g !== "top" ? () => v : null,
        title: m || g === "top" ? B : null,
        value: St,
        extra: n.extra
      });
    };
  }
});
const Kn = z(jn);
const se = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, ye = C({
  name: "KvButton",
  components: { VanButton: kn },
  props: {
    type: {
      type: String,
      default: "default",
      validate: (e) => ["primary", "success", "warning", "danger", "text"].includes(e)
    },
    link: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return { textcolor: b(() => `var(--van-button-${e.type}-background)`) };
  }
}), Ne = () => {
  Ye((e) => ({
    "094aed15": e.textcolor
  }));
}, Oe = ye.setup;
ye.setup = Oe ? (e, t) => (Ne(), Oe(e, t)) : Ne;
const Wn = ye;
function Un(e, t, n, r, i, o) {
  const l = re("van-button");
  return p(), me(l, le({
    type: e.type,
    class: { "is-link": e.link }
  }, e.$attrs), It({
    loading: ce(() => [
      W(e.$slots, "loading", {}, void 0, !0)
    ]),
    default: ce(() => [
      W(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 2
  }, [
    e.$attrs.icon ? void 0 : {
      name: "icon",
      fn: ce(() => [
        W(e.$slots, "icon", {}, void 0, !0)
      ]),
      key: "0"
    }
  ]), 1040, ["type", "class"]);
}
const ee = /* @__PURE__ */ se(Wn, [["render", Un], ["__scopeId", "data-v-36fadbb1"]]);
ee.install = function(e) {
  e.component(ee.name, ee);
};
const qn = C({
  name: "KvInput",
  components: { VanField: Kn },
  props: {
    modelValue: { type: [Number, String], default: "" },
    point: { type: Number, default: 2 },
    type: { type: String, default: "number" },
    prefix: { type: String, default: "" },
    suffix: { type: String, default: "" },
    min: { type: Number, default: Number.NEGATIVE_INFINITY },
    max: { type: Number, default: Number.POSITIVE_INFINITY }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: t }) {
    return {
      inputValue: b({
        get: () => e.modelValue,
        set: (i) => t("update:modelValue", i)
      }),
      formatter: (i) => {
        var f;
        if (e.type !== "number")
          return i;
        let o = i;
        o.substr(0, 1) === "0" && o.length === 2 && !o.includes(".") && (o = o.substr(1, o.length));
        const l = new RegExp(`[^0-9]{0,1}(\\d*(?:\\.\\d{0,${e.point}})?).*$`, "g");
        return o = (f = o.replace(l, "$1")) != null ? f : "", Number(o) < e.min ? e.min : Number(o) > e.max ? e.max : o;
      }
    };
  }
}), Yn = { class: "flex-center k-input" };
function Hn(e, t, n, r, i, o) {
  const l = re("van-field");
  return p(), $("div", Yn, [
    P("span", null, Y(e.prefix), 1),
    d(l, le({
      modelValue: e.inputValue,
      "onUpdate:modelValue": t[0] || (t[0] = (f) => e.inputValue = f),
      type: e.type
    }, e.$attrs, { formatter: e.formatter }), null, 16, ["modelValue", "type", "formatter"]),
    P("span", null, Y(e.suffix), 1)
  ]);
}
const te = /* @__PURE__ */ se(qn, [["render", Hn]]);
te.install = function(e) {
  e.component(te.name, te);
};
const Zn = C({
  name: "KvTable",
  props: {
    align: {
      type: String,
      default: "left",
      validate: (e) => ["left", "center", "right"].includes(e)
    },
    columns: {
      type: Array,
      default: () => [
        { label: "\u59D3\u540D", prop: "name" },
        { label: "\u63D0\u6210\u5360\u6BD4", prop: "rate" },
        { label: "\u63D0\u6210\u91D1\u989D", prop: "money" }
      ]
    },
    data: {
      type: Array,
      default: () => [
        { name: "123", rate: 10, money: 20 },
        { name: "456", rate: 20, money: 40 }
      ]
    }
  },
  emits: ["row-click"],
  setup(e, { emit: t }) {
    return { alignStyle: b(() => `text-align:${e.align}`), clickRow: (i, o) => t("row-click", i, o) };
  }
}), Gn = { class: "k-table bg-white mt10 p20" }, Jn = { class: "table-content" }, Xn = { class: "table-header flex" }, Qn = { class: "table-body flex" }, ea = ["onClick"], ta = { key: 1 };
function na(e, t, n, r, i, o) {
  return p(), $("div", Gn, [
    P("div", Jn, [
      P("div", Xn, [
        (p(!0), $(U, null, X(e.columns, (l) => (p(), $("div", {
          key: l.prop,
          class: "flex1",
          style: Ce(e.alignStyle)
        }, Y(l.label), 5))), 128))
      ]),
      P("div", Qn, [
        (p(!0), $(U, null, X(e.columns, (l) => (p(), $("div", {
          key: l.prop,
          class: "flex1 column-item"
        }, [
          (p(!0), $(U, null, X(e.data, (f, u) => (p(), $("div", {
            class: "mt10 body-item",
            style: Ce(e.alignStyle),
            key: u,
            onClick: (c) => e.clickRow(f, u)
          }, [
            W(e.$slots, "default", {
              row: f,
              index: u
            }, () => {
              var c, s;
              return [
                e.$slots[(c = l == null ? void 0 : l.custom) != null ? c : l == null ? void 0 : l.prop] ? W(e.$slots, (s = l.custom) != null ? s : l.prop, {
                  key: 0,
                  row: f,
                  index: u
                }, void 0, !0) : (p(), $("span", ta, Y(f[l.prop]), 1))
              ];
            }, !0)
          ], 12, ea))), 128))
        ]))), 128))
      ])
    ])
  ]);
}
const ne = /* @__PURE__ */ se(Zn, [["render", na], ["__scopeId", "data-v-4183cb54"]]);
ne.install = function(e) {
  e.component(ne.name, ne);
};
const pe = C({
  name: "KvTree",
  components: { VanIcon: A },
  props: {
    modelValue: { type: Array, default: () => [] },
    depth: { type: Number, default: 0 },
    props: { type: Object, default: () => ({}) },
    theme: { type: String, default: "#f4364c" },
    select: { type: [String, Number], default: "" }
  },
  emits: ["update:modelValue", "update:select", "click", "change"],
  setup(e, { emit: t }) {
    const n = b({
      get: () => e.modelValue,
      set: (s) => t("update:modelValue", s)
    }), r = b(() => ({
      name: "name",
      id: "id",
      child: "child",
      disabled: "disabled",
      ...e.props
    })), i = (s) => (s.forEach((h) => {
      h.showChildren = !1, h[r.value.child] && i(h[r.value.child]);
    }), s), o = x(e.select), l = (s) => {
      s[r.value.disabled] || (s[r.value.child] && s.showChildren || (n.value = i(n.value)), s.showChildren = !s.showChildren, o.value = s[r.value.id], f(s));
    }, f = (s) => {
      t("update:select", s[r.value.id]), t("change", s), t("click", s);
    }, u = (s, h) => s.disabled ? "not-allowed" : s[r.value.id] === o.value ? {
      0: "first-depth c-white",
      1: "second-depth c-white",
      2: "third-depth c-white"
    }[h] : "", c = b(() => e.theme);
    return {
      list: n,
      clickItem: l,
      clickChild: f,
      getClassName: u,
      themecolor: c,
      deaultProps: r
    };
  }
}), Fe = () => {
  Ye((e) => ({
    "80a71366": e.themecolor
  }));
}, Re = pe.setup;
pe.setup = Re ? (e, t) => (Fe(), Re(e, t)) : Fe;
const aa = pe, ra = { class: "k-tree" }, oa = ["onClick"], ia = { class: "flex-center flex1 tree-item-content" }, la = { class: "mr10" };
function ua(e, t, n, r, i, o) {
  const l = re("van-icon"), f = re("kv-tree");
  return p(), $("div", ra, [
    (p(!0), $(U, null, X(e.list, (u) => (p(), $(U, {
      key: u[e.deaultProps.id]
    }, [
      P("div", {
        class: Vt(["tree-item p10 flex-center", e.getClassName(u, e.depth)]),
        onClick: xt((c) => e.clickItem(u, e.depth), ["stop"])
      }, [
        P("div", ia, [
          P("span", la, Y(u[e.deaultProps.name]), 1),
          u[e.deaultProps.child] ? (p(), me(l, {
            key: 0,
            name: u.showChildren ? "arrow-up" : "arrow-down"
          }, null, 8, ["name"])) : we("", !0)
        ])
      ], 10, oa),
      u.showChildren && u[e.deaultProps.child] ? (p(), me(f, {
        key: 0,
        modelValue: u[e.deaultProps.child],
        "onUpdate:modelValue": (c) => u[e.deaultProps.child] = c,
        props: e.deaultProps,
        theme: e.theme,
        depth: e.depth + 1,
        onClick: e.clickChild
      }, null, 8, ["modelValue", "onUpdate:modelValue", "props", "theme", "depth", "onClick"])) : we("", !0)
    ], 64))), 128))
  ]);
}
const ae = /* @__PURE__ */ se(aa, [["render", ua], ["__scopeId", "data-v-31963786"]]);
ae.install = function(e) {
  e.component(ae.name, ae);
};
const ge = {
  KvButton: ee,
  KvInput: te,
  KvTable: ne,
  KvTree: ae,
  install: () => {
  }
};
function sa(e, t, n = 0) {
  return e.substr(n, t.length) === t;
}
ge.install = function(e) {
  Object.keys(ge).forEach((t) => {
    if (sa(t, "K")) {
      const n = ge[t];
      e.component(n.name, n);
    }
  });
};
export {
  ge as KVant,
  ee as KvButton,
  te as KvInput,
  ae as KvTree
};
