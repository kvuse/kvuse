import { inject as Ue, getCurrentInstance as ce, onUnmounted as Ye, computed as p, ref as D, onDeactivated as qe, isRef as Vt, watch as Se, onMounted as He, nextTick as Y, onActivated as Ze, unref as Ie, reactive as Ge, defineComponent as I, createVNode as d, onBeforeUnmount as Pt, provide as Xe, watchEffect as Tt, mergeProps as se, createTextVNode as At, useCssVars as Je, resolveComponent as ie, openBlock as S, createBlock as pe, createSlots as Dt, withCtx as ge, renderSlot as me, createElementBlock as x, createElementVNode as L, toDisplayString as Z, normalizeStyle as he, Fragment as q, renderList as te, normalizeClass as Qe, withModifiers as Lt, createCommentVNode as Ve } from "vue";
const $ = (e) => e != null, ue = (e) => typeof e == "function", de = (e) => e !== null && typeof e == "object", Ot = (e) => de(e) && ue(e.then) && ue(e.catch), et = (e) => typeof e == "number" || /^\d+(\.\d+)?$/.test(e), Nt = () => tt ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1, j = Object.assign, tt = typeof window < "u";
function Pe(e, t) {
  const n = t.split(".");
  let r = e;
  return n.forEach((l) => {
    var o;
    r = de(r) && (o = r[l]) != null ? o : "";
  }), r;
}
const Te = (e) => Array.isArray(e) ? e : [e], ne = null, w = [Number, String], nt = {
  type: Boolean,
  default: !0
}, Ft = (e) => ({
  type: w,
  default: e
}), _ = (e) => ({
  type: String,
  default: e
});
var at = typeof window < "u";
function Rt(e) {
  const t = Ue(e, null);
  if (t) {
    const n = ce(), { link: r, unlink: l, internalChildren: o } = t;
    r(n), Ye(() => l(n));
    const f = p(() => o.indexOf(n));
    return {
      parent: t,
      index: f
    };
  }
  return {
    parent: null,
    index: D(-1)
  };
}
function zt(e) {
  let t;
  He(() => {
    e(), Y(() => {
      t = !0;
    });
  }), Ze(() => {
    t && e();
  });
}
function Mt(e, t, n = {}) {
  if (!at)
    return;
  const { target: r = window, passive: l = !1, capture: o = !1 } = n;
  let f = !1, s;
  const i = (h) => {
    if (f)
      return;
    const b = Ie(h);
    b && !s && (b.addEventListener(e, t, {
      capture: o,
      passive: l
    }), s = !0);
  }, u = (h) => {
    if (f)
      return;
    const b = Ie(h);
    b && s && (b.removeEventListener(e, t, o), s = !1);
  };
  Ye(() => u(r)), qe(() => u(r)), zt(() => i(r));
  let c;
  return Vt(r) && (c = Se(r, (h, b) => {
    u(b), i(h);
  })), () => {
    c == null || c(), u(r), f = !0;
  };
}
var ee, be;
function jt() {
  if (!ee && (ee = D(0), be = D(0), at)) {
    const e = () => {
      ee.value = window.innerWidth, be.value = window.innerHeight;
    };
    e(), window.addEventListener("resize", e, { passive: !0 }), window.addEventListener("orientationchange", e, { passive: !0 });
  }
  return { width: ee, height: be };
}
var Kt = Symbol("van-field");
function Ae(e, t) {
  "scrollTop" in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t);
}
function rt() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function ot(e) {
  Ae(window, e), Ae(document.body, e);
}
const Wt = Nt();
function Ut() {
  Wt && ot(rt());
}
const Yt = (e) => e.stopPropagation();
function _e(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && Yt(e);
}
jt();
function C(e) {
  if ($(e))
    return et(e) ? `${e}px` : String(e);
}
function qt(e) {
  if ($(e)) {
    if (Array.isArray(e))
      return {
        width: C(e[0]),
        height: C(e[1])
      };
    const t = C(e);
    return {
      width: t,
      height: t
    };
  }
}
const Ht = /-(\w)/g, lt = (e) => e.replace(Ht, (t, n) => n.toUpperCase()), Zt = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
function De(e, t, n) {
  const r = e.indexOf(t);
  return r === -1 ? e : t === "-" && r !== 0 ? e.slice(0, r) : e.slice(0, r + 1) + e.slice(r).replace(n, "");
}
function Gt(e, t = !0, n = !0) {
  t ? e = De(e, ".", /\./g) : e = e.split(".")[0], n ? e = De(e, "-", /-/g) : e = e.replace(/-/, "");
  const r = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(r, "");
}
const { hasOwnProperty: Xt } = Object.prototype;
function Jt(e, t, n) {
  const r = t[n];
  $(r) && (!Xt.call(e, n) || !de(r) ? e[n] = r : e[n] = it(Object(e[n]), r));
}
function it(e, t) {
  return Object.keys(t).forEach((n) => {
    Jt(e, t, n);
  }), e;
}
var Qt = {
  name: "姓名",
  tel: "电话",
  save: "保存",
  confirm: "确认",
  cancel: "取消",
  delete: "删除",
  loading: "加载中...",
  noCoupon: "暂无优惠券",
  nameEmpty: "请填写姓名",
  addContact: "添加联系人",
  telInvalid: "请填写正确的电话",
  vanCalendar: {
    end: "结束",
    start: "开始",
    title: "日期选择",
    weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    monthTitle: (e, t) => `${e}年${t}月`,
    rangePrompt: (e) => `最多选择 ${e} 天`
  },
  vanCascader: {
    select: "请选择"
  },
  vanPagination: {
    prev: "上一页",
    next: "下一页"
  },
  vanPullRefresh: {
    pulling: "下拉即可刷新...",
    loosing: "释放即可刷新..."
  },
  vanSubmitBar: {
    label: "合计:"
  },
  vanCoupon: {
    unlimited: "无门槛",
    discount: (e) => `${e}折`,
    condition: (e) => `满${e}元可用`
  },
  vanCouponCell: {
    title: "优惠券",
    count: (e) => `${e}张可用`
  },
  vanCouponList: {
    exchange: "兑换",
    close: "不使用",
    enable: "可用",
    disabled: "不可用",
    placeholder: "输入优惠码"
  },
  vanAddressEdit: {
    area: "地区",
    areaEmpty: "请选择地区",
    addressEmpty: "请填写详细地址",
    addressDetail: "详细地址",
    defaultAddress: "设为默认收货地址"
  },
  vanAddressList: {
    add: "新增地址"
  }
};
const Le = D("zh-CN"), Oe = Ge({
  "zh-CN": Qt
}), en = {
  messages() {
    return Oe[Le.value];
  },
  use(e, t) {
    Le.value = e, this.add({ [e]: t });
  },
  add(e = {}) {
    it(Oe, e);
  }
};
var tn = en;
function nn(e) {
  const t = lt(e) + ".";
  return (n, ...r) => {
    const l = tn.messages(), o = Pe(l, t + n) || Pe(l, n);
    return ue(o) ? o(...r) : o;
  };
}
function Ee(e, t) {
  return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce(
    (n, r) => n + Ee(e, r),
    ""
  ) : Object.keys(t).reduce(
    (n, r) => n + (t[r] ? Ee(e, r) : ""),
    ""
  ) : "";
}
function an(e) {
  return (t, n) => (t && typeof t != "string" && (n = t, t = ""), t = t ? `${e}__${t}` : e, `${t}${Ee(t, n)}`);
}
function F(e) {
  const t = `van-${e}`;
  return [
    t,
    an(t),
    nn(t)
  ];
}
const rn = "van-hairline", on = `${rn}--surround`, ln = Symbol("van-form");
function K(e) {
  return e.install = (t) => {
    const { name: n } = e;
    n && (t.component(n, e), t.component(lt(`-${n}`), e));
  }, e;
}
function un(e) {
  const t = ce();
  t && j(t.proxy, e);
}
const ut = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
function cn({
  to: e,
  url: t,
  replace: n,
  $router: r
}) {
  e && r ? r[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t);
}
function ct() {
  const e = ce().proxy;
  return () => cn(e);
}
const [sn, Ne] = F("badge"), dn = {
  dot: Boolean,
  max: w,
  tag: _("div"),
  color: String,
  offset: Array,
  content: w,
  showZero: nt,
  position: _("top-right")
};
var fn = I({
  name: sn,
  props: dn,
  setup(e, {
    slots: t
  }) {
    const n = () => {
      if (t.content)
        return !0;
      const {
        content: s,
        showZero: i
      } = e;
      return $(s) && s !== "" && (i || s !== 0 && s !== "0");
    }, r = () => {
      const {
        dot: s,
        max: i,
        content: u
      } = e;
      if (!s && n())
        return t.content ? t.content() : $(i) && et(u) && +u > +i ? `${i}+` : u;
    }, l = (s) => s.startsWith("-") ? s.replace("-", "") : `-${s}`, o = p(() => {
      const s = {
        background: e.color
      };
      if (e.offset) {
        const [i, u] = e.offset, {
          position: c
        } = e, [h, b] = c.split("-");
        t.default ? (typeof u == "number" ? s[h] = C(h === "top" ? u : -u) : s[h] = h === "top" ? C(u) : l(u), typeof i == "number" ? s[b] = C(b === "left" ? i : -i) : s[b] = b === "left" ? C(i) : l(i)) : (s.marginTop = C(u), s.marginLeft = C(i));
      }
      return s;
    }), f = () => {
      if (n() || e.dot)
        return d("div", {
          class: Ne([e.position, {
            dot: e.dot,
            fixed: !!t.default
          }]),
          style: o.value
        }, [r()]);
    };
    return () => {
      if (t.default) {
        const {
          tag: s
        } = e;
        return d(s, {
          class: Ne("wrapper")
        }, {
          default: () => [t.default(), f()]
        });
      }
      return f();
    };
  }
});
const gn = K(fn), mn = (e) => {
}, [st, hn] = F("config-provider"), dt = Symbol(st), bn = {
  tag: _("div"),
  theme: _("light"),
  zIndex: Number,
  themeVars: Object,
  themeVarsDark: Object,
  themeVarsLight: Object,
  iconPrefix: String
};
function vn(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[`--van-${Zt(n)}`] = e[n];
  }), t;
}
I({
  name: st,
  props: bn,
  setup(e, {
    slots: t
  }) {
    const n = p(() => vn(j({}, e.themeVars, e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight)));
    if (tt) {
      const r = () => {
        document.documentElement.classList.add(`van-theme-${e.theme}`);
      }, l = (o = e.theme) => {
        document.documentElement.classList.remove(`van-theme-${o}`);
      };
      Se(() => e.theme, (o, f) => {
        f && l(f), r();
      }, {
        immediate: !0
      }), Ze(r), qe(l), Pt(l);
    }
    return Xe(dt, e), Tt(() => {
      e.zIndex !== void 0 && mn(e.zIndex);
    }), () => d(e.tag, {
      class: hn(),
      style: n.value
    }, {
      default: () => {
        var r;
        return [(r = t.default) == null ? void 0 : r.call(t)];
      }
    });
  }
});
const [yn, Fe] = F("icon"), pn = (e) => e == null ? void 0 : e.includes("/"), _n = {
  dot: Boolean,
  tag: _("i"),
  name: String,
  size: w,
  badge: w,
  color: String,
  badgeProps: Object,
  classPrefix: String
};
var En = I({
  name: yn,
  props: _n,
  setup(e, {
    slots: t
  }) {
    const n = Ue(dt, null), r = p(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || Fe());
    return () => {
      const {
        tag: l,
        dot: o,
        name: f,
        size: s,
        badge: i,
        color: u
      } = e, c = pn(f);
      return d(gn, se({
        dot: o,
        tag: l,
        class: [r.value, c ? "" : `${r.value}-${f}`],
        style: {
          color: u,
          fontSize: C(s)
        },
        content: i
      }, e.badgeProps), {
        default: () => {
          var h;
          return [(h = t.default) == null ? void 0 : h.call(t), c && d("img", {
            class: Fe("image"),
            src: f
          }, null)];
        }
      });
    };
  }
});
const N = K(En), [Sn, H] = F("loading"), $n = Array(12).fill(null).map((e, t) => d("i", {
  class: H("line", String(t + 1))
}, null)), wn = d("svg", {
  class: H("circular"),
  viewBox: "25 25 50 50"
}, [d("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
}, null)]), Cn = {
  size: w,
  type: _("circular"),
  color: String,
  vertical: Boolean,
  textSize: w,
  textColor: String
};
var Bn = I({
  name: Sn,
  props: Cn,
  setup(e, {
    slots: t
  }) {
    const n = p(() => j({
      color: e.color
    }, qt(e.size))), r = () => {
      const o = e.type === "spinner" ? $n : wn;
      return d("span", {
        class: H("spinner", e.type),
        style: n.value
      }, [t.icon ? t.icon() : o]);
    }, l = () => {
      var o;
      if (t.default)
        return d("span", {
          class: H("text"),
          style: {
            fontSize: C(e.textSize),
            color: (o = e.textColor) != null ? o : e.color
          }
        }, [t.default()]);
    };
    return () => {
      const {
        type: o,
        vertical: f
      } = e;
      return d("div", {
        class: H([o, {
          vertical: f
        }]),
        "aria-live": "polite",
        "aria-busy": !0
      }, [r(), l()]);
    };
  }
});
const kn = K(Bn), [xn, z] = F("button"), In = j({}, ut, {
  tag: _("button"),
  text: String,
  icon: String,
  type: _("default"),
  size: _("normal"),
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: _("button"),
  loadingSize: w,
  loadingText: String,
  loadingType: String,
  iconPosition: _("left")
});
var Vn = I({
  name: xn,
  props: In,
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const r = ct(), l = () => n.loading ? n.loading() : d(kn, {
      size: e.loadingSize,
      type: e.loadingType,
      class: z("loading")
    }, null), o = () => {
      if (e.loading)
        return l();
      if (n.icon)
        return d("div", {
          class: z("icon")
        }, [n.icon()]);
      if (e.icon)
        return d(N, {
          name: e.icon,
          class: z("icon"),
          classPrefix: e.iconPrefix
        }, null);
    }, f = () => {
      let u;
      if (e.loading ? u = e.loadingText : u = n.default ? n.default() : e.text, u)
        return d("span", {
          class: z("text")
        }, [u]);
    }, s = () => {
      const {
        color: u,
        plain: c
      } = e;
      if (u) {
        const h = {
          color: c ? u : "white"
        };
        return c || (h.background = u), u.includes("gradient") ? h.border = 0 : h.borderColor = u, h;
      }
    }, i = (u) => {
      e.loading ? _e(u) : e.disabled || (t("click", u), r());
    };
    return () => {
      const {
        tag: u,
        type: c,
        size: h,
        block: b,
        round: W,
        plain: T,
        square: A,
        loading: O,
        disabled: V,
        hairline: G,
        nativeType: R,
        iconPosition: X
      } = e, U = [z([c, h, {
        plain: T,
        block: b,
        round: W,
        square: A,
        loading: O,
        disabled: V,
        hairline: G
      }]), {
        [on]: G
      }];
      return d(u, {
        type: R,
        class: U,
        style: s(),
        disabled: V,
        onClick: i
      }, {
        default: () => [d("div", {
          class: z("content")
        }, [X === "left" && o(), f(), X === "right" && o()])]
      });
    };
  }
});
const Pn = K(Vn);
let Tn = 0;
function An() {
  const e = ce(), { name: t = "unknown" } = (e == null ? void 0 : e.type) || {};
  return process.env.NODE_ENV === "test" ? t : `${t}-${++Tn}`;
}
const [Dn, M] = F("cell"), ft = {
  tag: _("div"),
  icon: String,
  size: String,
  title: w,
  value: w,
  label: w,
  center: Boolean,
  isLink: Boolean,
  border: nt,
  required: Boolean,
  iconPrefix: String,
  valueClass: ne,
  labelClass: ne,
  titleClass: ne,
  titleStyle: null,
  arrowDirection: String,
  clickable: {
    type: Boolean,
    default: null
  }
}, Ln = j({}, ft, ut);
var On = I({
  name: Dn,
  props: Ln,
  setup(e, {
    slots: t
  }) {
    const n = ct(), r = () => {
      if (t.label || $(e.label))
        return d("div", {
          class: [M("label"), e.labelClass]
        }, [t.label ? t.label() : e.label]);
    }, l = () => {
      var i;
      if (t.title || $(e.title)) {
        const u = (i = t.title) == null ? void 0 : i.call(t);
        return Array.isArray(u) && u.length === 0 ? void 0 : d("div", {
          class: [M("title"), e.titleClass],
          style: e.titleStyle
        }, [u || d("span", null, [e.title]), r()]);
      }
    }, o = () => {
      const i = t.value || t.default;
      if (i || $(e.value))
        return d("div", {
          class: [M("value"), e.valueClass]
        }, [i ? i() : d("span", null, [e.value])]);
    }, f = () => {
      if (t.icon)
        return t.icon();
      if (e.icon)
        return d(N, {
          name: e.icon,
          class: M("left-icon"),
          classPrefix: e.iconPrefix
        }, null);
    }, s = () => {
      if (t["right-icon"])
        return t["right-icon"]();
      if (e.isLink) {
        const i = e.arrowDirection && e.arrowDirection !== "right" ? `arrow-${e.arrowDirection}` : "arrow";
        return d(N, {
          name: i,
          class: M("right-icon")
        }, null);
      }
    };
    return () => {
      var i;
      const {
        tag: u,
        size: c,
        center: h,
        border: b,
        isLink: W,
        required: T
      } = e, A = (i = e.clickable) != null ? i : W, O = {
        center: h,
        required: T,
        clickable: A,
        borderless: !b
      };
      return c && (O[c] = !!c), d(u, {
        class: M(O),
        role: A ? "button" : void 0,
        tabindex: A ? 0 : void 0,
        onClick: n
      }, {
        default: () => {
          var V;
          return [f(), l(), o(), s(), (V = t.extra) == null ? void 0 : V.call(t)];
        }
      });
    };
  }
});
const Nn = K(On);
function gt(e) {
  return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e;
}
function Fn(e, t) {
  if (gt(e)) {
    if (t.required)
      return !1;
    if (t.validateEmpty === !1)
      return !0;
  }
  return !(t.pattern && !t.pattern.test(String(e)));
}
function Rn(e, t) {
  return new Promise((n) => {
    const r = t.validator(e, t);
    if (Ot(r)) {
      r.then(n);
      return;
    }
    n(r);
  });
}
function Re(e, t) {
  const { message: n } = t;
  return ue(n) ? n(e, t) : n || "";
}
function zn({ target: e }) {
  e.composing = !0;
}
function ze({ target: e }) {
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
function Mn(e, t) {
  const n = rt();
  e.style.height = "auto";
  let r = e.scrollHeight;
  if (de(t)) {
    const { maxHeight: l, minHeight: o } = t;
    l !== void 0 && (r = Math.min(r, l)), o !== void 0 && (r = Math.max(r, o));
  }
  r && (e.style.height = `${r}px`, ot(n));
}
function jn(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
function P(e) {
  return [...e].length;
}
function ve(e, t) {
  return [...e].slice(0, t).join("");
}
const [Kn, B] = F("field"), Wn = {
  id: String,
  name: String,
  leftIcon: String,
  rightIcon: String,
  autofocus: Boolean,
  clearable: Boolean,
  maxlength: w,
  formatter: Function,
  clearIcon: _("clear"),
  modelValue: Ft(""),
  inputAlign: String,
  placeholder: String,
  autocomplete: String,
  errorMessage: String,
  enterkeyhint: String,
  clearTrigger: _("focus"),
  formatTrigger: _("onChange"),
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
}, Un = j({}, ft, Wn, {
  rows: w,
  type: _("text"),
  rules: Array,
  autosize: [Boolean, Object],
  labelWidth: w,
  labelClass: ne,
  labelAlign: String,
  showWordLimit: Boolean,
  errorMessageAlign: String,
  colon: {
    type: Boolean,
    default: null
  }
});
var Yn = I({
  name: Kn,
  props: Un,
  emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const r = An(), l = Ge({
      status: "unvalidated",
      focused: !1,
      validateMessage: ""
    }), o = D(), f = D(), s = D(), {
      parent: i
    } = Rt(ln), u = () => {
      var a;
      return String((a = e.modelValue) != null ? a : "");
    }, c = (a) => {
      if ($(e[a]))
        return e[a];
      if (i && $(i.props[a]))
        return i.props[a];
    }, h = p(() => {
      const a = c("readonly");
      if (e.clearable && !a) {
        const m = u() !== "", g = e.clearTrigger === "always" || e.clearTrigger === "focus" && l.focused;
        return m && g;
      }
      return !1;
    }), b = p(() => s.value && n.input ? s.value() : e.modelValue), W = (a) => a.reduce((m, g) => m.then(() => {
      if (l.status === "failed")
        return;
      let {
        value: v
      } = b;
      if (g.formatter && (v = g.formatter(v, g)), !Fn(v, g)) {
        l.status = "failed", l.validateMessage = Re(v, g);
        return;
      }
      if (g.validator)
        return gt(v) && g.validateEmpty === !1 ? void 0 : Rn(v, g).then((y) => {
          y && typeof y == "string" ? (l.status = "failed", l.validateMessage = y) : y === !1 && (l.status = "failed", l.validateMessage = Re(v, g));
        });
    }), Promise.resolve()), T = () => {
      l.status = "unvalidated", l.validateMessage = "";
    }, A = () => t("endValidate", {
      status: l.status,
      message: l.validateMessage
    }), O = (a = e.rules) => new Promise((m) => {
      T(), a ? (t("startValidate"), W(a).then(() => {
        l.status === "failed" ? (m({
          name: e.name,
          message: l.validateMessage
        }), A()) : (l.status = "passed", m(), A());
      })) : m();
    }), V = (a) => {
      if (i && e.rules) {
        const {
          validateTrigger: m
        } = i.props, g = Te(m).includes(a), v = e.rules.filter((y) => y.trigger ? Te(y.trigger).includes(a) : g);
        v.length && O(v);
      }
    }, G = (a) => {
      var m;
      const {
        maxlength: g
      } = e;
      if ($(g) && P(a) > +g) {
        const v = u();
        if (v && P(v) === +g)
          return v;
        const y = (m = o.value) == null ? void 0 : m.selectionEnd;
        if (l.focused && y) {
          const E = [...a], k = E.length - +g;
          return E.splice(y - k, k), E.join("");
        }
        return ve(a, +g);
      }
      return a;
    }, R = (a, m = "onChange") => {
      const g = a;
      a = G(a);
      const v = P(g) - P(a);
      if (e.type === "number" || e.type === "digit") {
        const E = e.type === "number";
        a = Gt(a, E, E);
      }
      let y = 0;
      if (e.formatter && m === e.formatTrigger) {
        const {
          formatter: E,
          maxlength: k
        } = e;
        if (a = E(a), $(k) && P(a) > +k && (a = ve(a, +k)), o.value && l.focused) {
          const {
            selectionEnd: Q
          } = o.value, xe = ve(g, Q);
          y = P(E(xe)) - P(xe);
        }
      }
      if (o.value && o.value.value !== a)
        if (l.focused) {
          let {
            selectionStart: E,
            selectionEnd: k
          } = o.value;
          if (o.value.value = a, $(E) && $(k)) {
            const Q = P(a);
            v ? (E -= v, k -= v) : y && (E += y, k += y), o.value.setSelectionRange(Math.min(E, Q), Math.min(k, Q));
          }
        } else
          o.value.value = a;
      a !== e.modelValue && t("update:modelValue", a);
    }, X = (a) => {
      a.target.composing || R(a.target.value);
    }, U = () => {
      var a;
      return (a = o.value) == null ? void 0 : a.blur();
    }, mt = () => {
      var a;
      return (a = o.value) == null ? void 0 : a.focus();
    }, J = () => {
      const a = o.value;
      e.type === "textarea" && e.autosize && a && Mn(a, e.autosize);
    }, ht = (a) => {
      l.focused = !0, t("focus", a), Y(J), c("readonly") && U();
    }, bt = (a) => {
      l.focused = !1, R(u(), "onBlur"), t("blur", a), !c("readonly") && (V("onBlur"), Y(J), Ut());
    }, Ce = (a) => t("clickInput", a), vt = (a) => t("clickLeftIcon", a), yt = (a) => t("clickRightIcon", a), pt = (a) => {
      _e(a), t("update:modelValue", ""), t("clear", a);
    }, Be = p(() => {
      if (typeof e.error == "boolean")
        return e.error;
      if (i && i.props.showError && l.status === "failed")
        return !0;
    }), _t = p(() => {
      const a = c("labelWidth"), m = c("labelAlign");
      if (a && m !== "top")
        return {
          width: C(a)
        };
    }), Et = (a) => {
      a.keyCode === 13 && (!(i && i.props.submitOnEnter) && e.type !== "textarea" && _e(a), e.type === "search" && U()), t("keypress", a);
    }, ke = () => e.id || `${r}-input`, St = () => l.status, $t = () => {
      const a = B("control", [c("inputAlign"), {
        error: Be.value,
        custom: !!n.input,
        "min-height": e.type === "textarea" && !e.autosize
      }]);
      if (n.input)
        return d("div", {
          class: a,
          onClick: Ce
        }, [n.input()]);
      const m = {
        id: ke(),
        ref: o,
        name: e.name,
        rows: e.rows !== void 0 ? +e.rows : void 0,
        class: a,
        disabled: c("disabled"),
        readonly: c("readonly"),
        autofocus: e.autofocus,
        placeholder: e.placeholder,
        autocomplete: e.autocomplete,
        enterkeyhint: e.enterkeyhint,
        "aria-labelledby": e.label ? `${r}-label` : void 0,
        onBlur: bt,
        onFocus: ht,
        onInput: X,
        onClick: Ce,
        onChange: ze,
        onKeypress: Et,
        onCompositionend: ze,
        onCompositionstart: zn
      };
      return e.type === "textarea" ? d("textarea", m, null) : d("input", se(jn(e.type), m), null);
    }, wt = () => {
      const a = n["left-icon"];
      if (e.leftIcon || a)
        return d("div", {
          class: B("left-icon"),
          onClick: vt
        }, [a ? a() : d(N, {
          name: e.leftIcon,
          classPrefix: e.iconPrefix
        }, null)]);
    }, Ct = () => {
      const a = n["right-icon"];
      if (e.rightIcon || a)
        return d("div", {
          class: B("right-icon"),
          onClick: yt
        }, [a ? a() : d(N, {
          name: e.rightIcon,
          classPrefix: e.iconPrefix
        }, null)]);
    }, Bt = () => {
      if (e.showWordLimit && e.maxlength) {
        const a = P(u());
        return d("div", {
          class: B("word-limit")
        }, [d("span", {
          class: B("word-num")
        }, [a]), At("/"), e.maxlength]);
      }
    }, kt = () => {
      if (i && i.props.showErrorMessage === !1)
        return;
      const a = e.errorMessage || l.validateMessage;
      if (a) {
        const m = n["error-message"], g = c("errorMessageAlign");
        return d("div", {
          class: B("error-message", g)
        }, [m ? m({
          message: a
        }) : a]);
      }
    }, xt = () => {
      const a = c("labelWidth"), m = c("labelAlign"), g = c("colon") ? ":" : "";
      if (n.label)
        return [n.label(), g];
      if (e.label)
        return d("label", {
          id: `${r}-label`,
          for: ke(),
          style: m === "top" && a ? {
            width: C(a)
          } : void 0
        }, [e.label + g]);
    }, It = () => [d("div", {
      class: B("body")
    }, [$t(), h.value && d(N, {
      ref: f,
      name: e.clearIcon,
      class: B("clear")
    }, null), Ct(), n.button && d("div", {
      class: B("button")
    }, [n.button()])]), Bt(), kt()];
    return un({
      blur: U,
      focus: mt,
      validate: O,
      formValue: b,
      resetValidation: T,
      getValidationStatus: St
    }), Xe(Kt, {
      customValue: s,
      resetValidation: T,
      validateWithTrigger: V
    }), Se(() => e.modelValue, () => {
      R(u()), T(), V("onChange"), Y(J);
    }), He(() => {
      R(u(), e.formatTrigger), Y(J);
    }), Mt("touchstart", pt, {
      target: p(() => {
        var a;
        return (a = f.value) == null ? void 0 : a.$el;
      })
    }), () => {
      const a = c("disabled"), m = c("labelAlign"), g = wt(), v = () => {
        const y = xt();
        return m === "top" ? [g, y].filter(Boolean) : y || [];
      };
      return d(Nn, {
        size: e.size,
        class: B({
          error: Be.value,
          disabled: a,
          [`label-${m}`]: m
        }),
        center: e.center,
        border: e.border,
        isLink: e.isLink,
        clickable: e.clickable,
        titleStyle: _t.value,
        valueClass: B("value"),
        titleClass: [B("label", [m, {
          required: e.required
        }]), e.labelClass],
        arrowDirection: e.arrowDirection
      }, {
        icon: g && m !== "top" ? () => g : null,
        title: v,
        value: It,
        extra: n.extra
      });
    };
  }
});
const qn = K(Yn);
const fe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, l] of t)
    n[r] = l;
  return n;
}, $e = I({
  name: "KvButton",
  components: { VanButton: Pn },
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
    return { textcolor: p(() => `var(--van-button-${e.type}-background)`) };
  }
}), Me = () => {
  Je((e) => ({
    "094aed15": e.textcolor
  }));
}, je = $e.setup;
$e.setup = je ? (e, t) => (Me(), je(e, t)) : Me;
const Hn = $e;
function Zn(e, t, n, r, l, o) {
  const f = ie("van-button");
  return S(), pe(f, se({
    type: e.type,
    class: { "is-link": e.link }
  }, e.$attrs), Dt({
    loading: ge(() => [
      me(e.$slots, "loading", {}, void 0, !0)
    ]),
    default: ge(() => [
      me(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 2
  }, [
    e.$attrs.icon ? void 0 : {
      name: "icon",
      fn: ge(() => [
        me(e.$slots, "icon", {}, void 0, !0)
      ]),
      key: "0"
    }
  ]), 1040, ["type", "class"]);
}
const ae = /* @__PURE__ */ fe(Hn, [["render", Zn], ["__scopeId", "data-v-36fadbb1"]]);
ae.install = function(e) {
  e.component(ae.name, ae);
};
const Gn = I({
  name: "KvInput",
  components: { VanField: qn },
  /**
    * @param1 { ?number } point 小数点后几位 :point="2"
    * @param2 { ?string } type 输入框的类型 digit 只能输入整数
    * @param3 { ?string } prefix 内容前 显示标识
    * @param4 { ?string } suffix 内容后 显示标识
    * @param5 { ?number } min 最小值
    * @param5 { ?number } max 最大值
    */
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
      inputValue: p({
        get: () => e.modelValue,
        set: (l) => t("update:modelValue", l)
      }),
      formatter: (l) => {
        if (e.type !== "number")
          return l;
        let o = l;
        o.substr(0, 1) === "0" && o.length === 2 && !o.includes(".") && (o = o.substr(1, o.length));
        const f = new RegExp(`[^0-9]{0,1}(\\d*(?:\\.\\d{0,${e.point}})?).*$`, "g");
        return o = o.replace(f, "$1") ?? "", Number(o) < e.min ? e.min : Number(o) > e.max ? e.max : o;
      }
    };
  }
}), Xn = { class: "flex-center k-input" };
function Jn(e, t, n, r, l, o) {
  const f = ie("van-field");
  return S(), x("div", Xn, [
    L("span", null, Z(e.prefix), 1),
    d(f, se({
      modelValue: e.inputValue,
      "onUpdate:modelValue": t[0] || (t[0] = (s) => e.inputValue = s),
      type: e.type
    }, e.$attrs, { formatter: e.formatter }), null, 16, ["modelValue", "type", "formatter"]),
    L("span", null, Z(e.suffix), 1)
  ]);
}
const re = /* @__PURE__ */ fe(Gn, [["render", Jn]]);
re.install = function(e) {
  e.component(re.name, re);
};
const Qn = I({
  name: "KvTable",
  props: {
    align: {
      // 对齐方式
      type: String,
      default: "left",
      validate: (e) => ["left", "center", "right"].includes(e)
    },
    columns: { type: Array, default: () => [] },
    data: { type: Array, default: () => [] },
    headerStyle: { type: Object, default: () => ({}) },
    rowStyle: { type: Object, default: () => ({}) },
    border: { type: Boolean, default: !1 },
    showOverflowTooltip: { type: Boolean, default: !1 }
  },
  emits: ["row-click"],
  setup(e, { emit: t }) {
    return { alignStyle: p(() => [
      `text-align:${e.align}`,
      e.border ? "border-bottom: 1px solid #ebedf0;" : "",
      e.rowStyle
    ]), clickRow: (l, o) => t("row-click", l, o) };
  }
}), ea = { class: "k-table bg-white mt10 p20" }, ta = { class: "table-content" }, na = { class: "table-body" };
function aa(e, t, n, r, l, o) {
  return S(), x("div", ea, [
    L("div", ta, [
      L("div", {
        class: "table-header flex",
        style: he(e.headerStyle)
      }, [
        (S(!0), x(q, null, te(e.columns, (f) => (S(), x("div", {
          key: f.prop,
          class: "flex1 table-column",
          style: he(e.alignStyle)
        }, Z(f.label), 5))), 128))
      ], 4),
      L("div", na, [
        (S(!0), x(q, null, te(e.data, (f, s) => (S(), x("div", {
          key: s,
          class: "flex table-column flex-align-center",
          style: he(e.alignStyle)
        }, [
          (S(!0), x(q, null, te(e.columns, (i) => (S(), x("div", {
            key: i.prop,
            class: Qe(["flex1", { "text-overflow": e.showOverflowTooltip }])
          }, Z(f[i.prop]), 3))), 128))
        ], 4))), 128))
      ])
    ])
  ]);
}
const oe = /* @__PURE__ */ fe(Qn, [["render", aa], ["__scopeId", "data-v-80eb79a8"]]);
oe.install = function(e) {
  e.component(oe.name, oe);
};
const we = I({
  name: "KvTree",
  components: { VanIcon: N },
  props: {
    modelValue: { type: Array, default: () => [] },
    depth: { type: Number, default: 0 },
    props: { type: Object, default: () => ({}) },
    theme: { type: String, default: "#f4364c" },
    select: { type: [String, Number], default: "" }
  },
  emits: ["update:modelValue", "update:select", "click", "change"],
  setup(e, { emit: t }) {
    const n = p({
      get: () => e.modelValue,
      set: (c) => t("update:modelValue", c)
    }), r = p(() => ({
      name: "name",
      id: "id",
      child: "child",
      disabled: "disabled",
      ...e.props
    })), l = (c) => (c.forEach((h) => {
      h.showChildren = !1, h[r.value.child] && l(h[r.value.child]);
    }), c), o = D(e.select), f = (c) => {
      c[r.value.disabled] || (c[r.value.child] && c.showChildren || (n.value = l(n.value)), c.showChildren = !c.showChildren, o.value = c[r.value.id], s(c));
    }, s = (c) => {
      t("update:select", c[r.value.id]), t("change", c), t("click", c);
    }, i = (c, h) => c.disabled ? "not-allowed" : c[r.value.id] === o.value ? {
      0: "first-depth c-white",
      1: "second-depth c-white",
      2: "third-depth c-white"
    }[h] : "", u = p(() => e.theme);
    return {
      list: n,
      clickItem: f,
      clickChild: s,
      getClassName: i,
      themecolor: u,
      deaultProps: r
    };
  }
}), Ke = () => {
  Je((e) => ({
    "80a71366": e.themecolor
  }));
}, We = we.setup;
we.setup = We ? (e, t) => (Ke(), We(e, t)) : Ke;
const ra = we, oa = { class: "k-tree" }, la = ["onClick"], ia = { class: "flex-center flex1 tree-item-content" }, ua = { class: "mr10" };
function ca(e, t, n, r, l, o) {
  const f = ie("van-icon"), s = ie("kv-tree");
  return S(), x("div", oa, [
    (S(!0), x(q, null, te(e.list, (i) => (S(), x(q, {
      key: i[e.deaultProps.id]
    }, [
      L("div", {
        class: Qe(["tree-item p10 flex-center", e.getClassName(i, e.depth)]),
        onClick: Lt((u) => e.clickItem(i, e.depth), ["stop"])
      }, [
        L("div", ia, [
          L("span", ua, Z(i[e.deaultProps.name]), 1),
          i[e.deaultProps.child] ? (S(), pe(f, {
            key: 0,
            name: i.showChildren ? "arrow-up" : "arrow-down"
          }, null, 8, ["name"])) : Ve("", !0)
        ])
      ], 10, la),
      i.showChildren && i[e.deaultProps.child] ? (S(), pe(s, {
        key: 0,
        modelValue: i[e.deaultProps.child],
        "onUpdate:modelValue": (u) => i[e.deaultProps.child] = u,
        props: e.deaultProps,
        theme: e.theme,
        depth: e.depth + 1,
        onClick: e.clickChild
      }, null, 8, ["modelValue", "onUpdate:modelValue", "props", "theme", "depth", "onClick"])) : Ve("", !0)
    ], 64))), 128))
  ]);
}
const le = /* @__PURE__ */ fe(ra, [["render", ca], ["__scopeId", "data-v-31963786"]]);
le.install = function(e) {
  e.component(le.name, le);
};
const ye = {
  KvButton: ae,
  KvInput: re,
  KvTable: oe,
  KvTree: le,
  install: () => {
  }
};
function sa(e, t, n = 0) {
  return e.substr(n, t.length) === t;
}
ye.install = function(e) {
  Object.keys(ye).forEach((t) => {
    if (sa(t, "K")) {
      const n = ye[t];
      e.component(n.name, n);
    }
  });
};
export {
  ye as KVant,
  ae as KvButton,
  re as KvInput,
  le as KvTree
};
