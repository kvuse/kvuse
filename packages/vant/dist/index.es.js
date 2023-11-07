import { inject as Ct, getCurrentInstance as Be, onUnmounted as ln, computed as E, ref as S, reactive as De, onMounted as Ee, nextTick as ne, onActivated as nt, onDeactivated as Qe, isRef as _n, watch as J, unref as oe, provide as ot, isVNode as Vo, defineComponent as Q, createVNode as d, onBeforeUnmount as jt, watchEffect as rn, mergeProps as fe, Transition as eo, withDirectives as cn, vShow as sn, Teleport as Wo, Fragment as Ye, onBeforeUpdate as Ko, createTextVNode as to, createApp as $o, onUpdated as _o, useCssVars as no, resolveComponent as Tt, openBlock as K, createBlock as Se, createSlots as ea, withCtx as ke, renderSlot as Oe, createElementBlock as de, createElementVNode as me, toDisplayString as Ne, normalizeStyle as Rt, renderList as bt, normalizeClass as un, createCommentVNode as _e, withModifiers as ta, getCurrentScope as na, onScopeDispose as oa, readonly as aa, useAttrs as dn } from "vue";
function la() {
}
const re = Object.assign, at = typeof window < "u", lt = (e) => e !== null && typeof e == "object", ae = (e) => e != null, Dt = (e) => typeof e == "function", oo = (e) => lt(e) && Dt(e.then) && Dt(e.catch), Vt = (e) => Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime()), ao = (e) => typeof e == "number" || /^\d+(\.\d+)?$/.test(e), ia = () => at ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function In(e, t) {
  const n = t.split(".");
  let o = e;
  return n.forEach((l) => {
    var a;
    o = lt(o) && (a = o[l]) != null ? a : "";
  }), o;
}
function Ie(e, t, n) {
  return t.reduce(
    (o, l) => ((!n || e[l] !== void 0) && (o[l] = e[l]), o),
    {}
  );
}
const Jt = (e, t) => JSON.stringify(e) === JSON.stringify(t), xn = (e) => Array.isArray(e) ? e : [e], je = null, Y = [Number, String], V = {
  type: Boolean,
  default: !0
}, Pe = (e) => ({
  type: e,
  required: !0
}), et = () => ({
  type: Array,
  default: () => []
}), lo = (e) => ({
  type: Number,
  default: e
}), le = (e) => ({
  type: Y,
  default: e
}), L = (e) => ({
  type: String,
  default: e
});
var Le = typeof window < "u";
function pe(e) {
  return Le ? requestAnimationFrame(e) : -1;
}
function io(e) {
  Le && cancelAnimationFrame(e);
}
function Ke(e) {
  pe(() => pe(e));
}
var ra = (e) => e === window, Tn = (e, t) => ({
  top: 0,
  left: 0,
  right: e,
  bottom: t,
  width: e,
  height: t
}), he = (e) => {
  const t = oe(e);
  if (ra(t)) {
    const n = t.innerWidth, o = t.innerHeight;
    return Tn(n, o);
  }
  return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : Tn(0, 0);
};
function ca(e = !1) {
  const t = S(e);
  return [t, (o = !t.value) => {
    t.value = o;
  }];
}
function qe(e) {
  const t = Ct(e, null);
  if (t) {
    const n = Be(), { link: o, unlink: l, internalChildren: a } = t;
    o(n), ln(() => l(n));
    const c = E(() => a.indexOf(n));
    return {
      parent: t,
      index: c
    };
  }
  return {
    parent: null,
    index: S(-1)
  };
}
function sa(e) {
  const t = [], n = (o) => {
    Array.isArray(o) && o.forEach((l) => {
      var a;
      Vo(l) && (t.push(l), (a = l.component) != null && a.subTree && (t.push(l.component.subTree), n(l.component.subTree.children)), l.children && n(l.children));
    });
  };
  return n(e), t;
}
var Dn = (e, t) => {
  const n = e.indexOf(t);
  return n === -1 ? e.findIndex(
    (o) => t.key !== void 0 && t.key !== null && o.type === t.type && o.key === t.key
  ) : n;
};
function ua(e, t, n) {
  const o = sa(e.subTree.children);
  n.sort(
    (a, c) => Dn(o, a.vnode) - Dn(o, c.vnode)
  );
  const l = n.map((a) => a.proxy);
  t.sort((a, c) => {
    const r = l.indexOf(a), i = l.indexOf(c);
    return r - i;
  });
}
function it(e) {
  const t = De([]), n = De([]), o = Be();
  return {
    children: t,
    linkChildren: (a) => {
      ot(
        e,
        Object.assign(
          {
            link: (i) => {
              i.proxy && (n.push(i), t.push(i.proxy), ua(o, t, n));
            },
            unlink: (i) => {
              const u = n.indexOf(i);
              t.splice(u, 1), n.splice(u, 1);
            },
            children: t,
            internalChildren: n
          },
          a
        )
      );
    }
  };
}
function rt(e) {
  let t;
  Ee(() => {
    e(), ne(() => {
      t = !0;
    });
  }), nt(() => {
    t && e();
  });
}
function ze(e, t, n = {}) {
  if (!Le)
    return;
  const { target: o = window, passive: l = !1, capture: a = !1 } = n;
  let c = !1, r;
  const i = (g) => {
    if (c)
      return;
    const v = oe(g);
    v && !r && (v.addEventListener(e, t, {
      capture: a,
      passive: l
    }), r = !0);
  }, u = (g) => {
    if (c)
      return;
    const v = oe(g);
    v && r && (v.removeEventListener(e, t, a), r = !1);
  };
  ln(() => u(o)), Qe(() => u(o)), rt(() => i(o));
  let s;
  return _n(o) && (s = J(o, (g, v) => {
    u(v), i(g);
  })), () => {
    s == null || s(), u(o), c = !0;
  };
}
var vt, Mt;
function da() {
  if (!vt && (vt = S(0), Mt = S(0), Le)) {
    const e = () => {
      vt.value = window.innerWidth, Mt.value = window.innerHeight;
    };
    e(), window.addEventListener("resize", e, { passive: !0 }), window.addEventListener("orientationchange", e, { passive: !0 });
  }
  return { width: vt, height: Mt };
}
var fa = /scroll|auto|overlay/i, ro = Le ? window : void 0;
function va(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function co(e, t = ro) {
  let n = e;
  for (; n && n !== t && va(n); ) {
    const { overflowY: o } = window.getComputedStyle(n);
    if (fa.test(o))
      return n;
    n = n.parentNode;
  }
  return t;
}
function Ht(e, t = ro) {
  const n = S();
  return Ee(() => {
    e.value && (n.value = co(e.value, t));
  }), n;
}
var gt;
function ga() {
  if (!gt && (gt = S("visible"), Le)) {
    const e = () => {
      gt.value = document.hidden ? "hidden" : "visible";
    };
    e(), window.addEventListener("visibilitychange", e);
  }
  return gt;
}
var ma = Symbol("van-field");
function ct(e) {
  const t = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(t, 0);
}
function zt(e, t) {
  "scrollTop" in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t);
}
function fn() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function vn(e) {
  zt(window, e), zt(document.body, e);
}
function zn(e, t) {
  if (e === window)
    return 0;
  const n = t ? ct(t) : fn();
  return he(e).top + n;
}
const Aa = ia();
function ha() {
  Aa && vn(fn());
}
const ya = (e) => e.stopPropagation();
function xe(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && ya(e);
}
function Ge(e) {
  const t = oe(e);
  if (!t)
    return !1;
  const n = window.getComputedStyle(t), o = n.display === "none", l = t.offsetParent === null && n.position !== "fixed";
  return o || l;
}
const { width: st, height: pt } = da();
function ge(e) {
  if (ae(e))
    return ao(e) ? `${e}px` : String(e);
}
function ba(e) {
  if (ae(e)) {
    if (Array.isArray(e))
      return {
        width: ge(e[0]),
        height: ge(e[1])
      };
    const t = ge(e);
    return {
      width: t,
      height: t
    };
  }
}
function so(e) {
  const t = {};
  return e !== void 0 && (t.zIndex = +e), t;
}
let Zt;
function ka() {
  if (!Zt) {
    const e = document.documentElement, t = e.style.fontSize || window.getComputedStyle(e).fontSize;
    Zt = parseFloat(t);
  }
  return Zt;
}
function Pa(e) {
  return e = e.replace(/rem/g, ""), +e * ka();
}
function Oa(e) {
  return e = e.replace(/vw/g, ""), +e * st.value / 100;
}
function Ea(e) {
  return e = e.replace(/vh/g, ""), +e * pt.value / 100;
}
function gn(e) {
  if (typeof e == "number")
    return e;
  if (at) {
    if (e.includes("rem"))
      return Pa(e);
    if (e.includes("vw"))
      return Oa(e);
    if (e.includes("vh"))
      return Ea(e);
  }
  return parseFloat(e);
}
const Sa = /-(\w)/g, uo = (e) => e.replace(Sa, (t, n) => n.toUpperCase()), Ia = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, ""), Xe = (e, t, n) => Math.min(Math.max(e, t), n);
function wn(e, t, n) {
  const o = e.indexOf(t);
  return o === -1 ? e : t === "-" && o !== 0 ? e.slice(0, o) : e.slice(0, o + 1) + e.slice(o).replace(n, "");
}
function xa(e, t = !0, n = !0) {
  t ? e = wn(e, ".", /\./g) : e = e.split(".")[0], n ? e = wn(e, "-", /-/g) : e = e.replace(/-/, "");
  const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(o, "");
}
const { hasOwnProperty: Ta } = Object.prototype;
function Da(e, t, n) {
  const o = t[n];
  ae(o) && (!Ta.call(e, n) || !lt(o) ? e[n] = o : e[n] = fo(Object(e[n]), o));
}
function fo(e, t) {
  return Object.keys(t).forEach((n) => {
    Da(e, t, n);
  }), e;
}
var za = {
  name: "姓名",
  tel: "电话",
  save: "保存",
  clear: "清空",
  cancel: "取消",
  confirm: "确认",
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
const Cn = S("zh-CN"), jn = De({
  "zh-CN": za
}), wa = {
  messages() {
    return jn[Cn.value];
  },
  use(e, t) {
    Cn.value = e, this.add({ [e]: t });
  },
  add(e = {}) {
    fo(jn, e);
  }
};
var Ca = wa;
function ja(e) {
  const t = uo(e) + ".";
  return (n, ...o) => {
    const l = Ca.messages(), a = In(l, t + n) || In(l, n);
    return Dt(a) ? a(...o) : a;
  };
}
function Wt(e, t) {
  return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce(
    (n, o) => n + Wt(e, o),
    ""
  ) : Object.keys(t).reduce(
    (n, o) => n + (t[o] ? Wt(e, o) : ""),
    ""
  ) : "";
}
function Ha(e) {
  return (t, n) => (t && typeof t != "string" && (n = t, t = ""), t = t ? `${e}__${t}` : e, `${t}${Wt(t, n)}`);
}
function W(e) {
  const t = `van-${e}`;
  return [
    t,
    Ha(t),
    ja(t)
  ];
}
const mn = "van-hairline", pa = `${mn}--surround`, Na = `${mn}--top-bottom`, Ba = `${mn}-unset--top-bottom`, Kt = "van-haptics-feedback", Ra = Symbol("van-form"), Hn = 5;
function vo(e, {
  args: t = [],
  done: n,
  canceled: o
}) {
  if (e) {
    const l = e.apply(null, t);
    oo(l) ? l.then((a) => {
      a ? n() : o && o();
    }).catch(la) : l ? n() : o && o();
  } else
    n();
}
function ce(e) {
  return e.install = (t) => {
    const { name: n } = e;
    n && (t.component(n, e), t.component(uo(`-${n}`), e));
  }, e;
}
const go = Symbol();
function An(e) {
  const t = Ct(go, null);
  t && J(t, (n) => {
    n && e();
  });
}
const Ja = (e, t) => {
  const n = S(), o = () => {
    n.value = he(e).height;
  };
  return Ee(() => {
    if (ne(o), t)
      for (let l = 1; l <= 3; l++)
        setTimeout(o, 100 * l);
  }), An(() => ne(o)), J([st, pt], o), n;
};
function ye(e) {
  const t = Be();
  t && re(t.proxy, e);
}
const hn = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
function mo({
  to: e,
  url: t,
  replace: n,
  $router: o
}) {
  e && o ? o[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t);
}
function Ao() {
  const e = Be().proxy;
  return () => mo(e);
}
const [Ma, pn] = W("badge"), Za = {
  dot: Boolean,
  max: Y,
  tag: L("div"),
  color: String,
  offset: Array,
  content: Y,
  showZero: V,
  position: L("top-right")
};
var Ya = Q({
  name: Ma,
  props: Za,
  setup(e, {
    slots: t
  }) {
    const n = () => {
      if (t.content)
        return !0;
      const {
        content: r,
        showZero: i
      } = e;
      return ae(r) && r !== "" && (i || r !== 0 && r !== "0");
    }, o = () => {
      const {
        dot: r,
        max: i,
        content: u
      } = e;
      if (!r && n())
        return t.content ? t.content() : ae(i) && ao(u) && +u > +i ? `${i}+` : u;
    }, l = (r) => r.startsWith("-") ? r.replace("-", "") : `-${r}`, a = E(() => {
      const r = {
        background: e.color
      };
      if (e.offset) {
        const [i, u] = e.offset, {
          position: s
        } = e, [g, v] = s.split("-");
        t.default ? (typeof u == "number" ? r[g] = ge(g === "top" ? u : -u) : r[g] = g === "top" ? ge(u) : l(u), typeof i == "number" ? r[v] = ge(v === "left" ? i : -i) : r[v] = v === "left" ? ge(i) : l(i)) : (r.marginTop = ge(u), r.marginLeft = ge(i));
      }
      return r;
    }), c = () => {
      if (n() || e.dot)
        return d("div", {
          class: pn([e.position, {
            dot: e.dot,
            fixed: !!t.default
          }]),
          style: a.value
        }, [o()]);
    };
    return () => {
      if (t.default) {
        const {
          tag: r
        } = e;
        return d(r, {
          class: pn("wrapper")
        }, {
          default: () => [t.default(), c()]
        });
      }
      return c();
    };
  }
});
const ho = ce(Ya);
let yo = 2e3;
const Xa = () => ++yo, Ua = (e) => {
  yo = e;
}, [bo, Ga] = W("config-provider"), ko = Symbol(bo), Qa = {
  tag: L("div"),
  theme: L("light"),
  zIndex: Number,
  themeVars: Object,
  themeVarsDark: Object,
  themeVarsLight: Object,
  themeVarsScope: L("local"),
  iconPrefix: String
};
function La(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[`--van-${Ia(n)}`] = e[n];
  }), t;
}
function mt(e = {}, t = {}) {
  Object.keys(e).forEach((n) => {
    e[n] !== t[n] && document.documentElement.style.setProperty(n, e[n]);
  }), Object.keys(t).forEach((n) => {
    e[n] || document.documentElement.style.removeProperty(n);
  });
}
Q({
  name: bo,
  props: Qa,
  setup(e, {
    slots: t
  }) {
    const n = E(() => La(re({}, e.themeVars, e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight)));
    if (at) {
      const o = () => {
        document.documentElement.classList.add(`van-theme-${e.theme}`);
      }, l = (a = e.theme) => {
        document.documentElement.classList.remove(`van-theme-${a}`);
      };
      J(() => e.theme, (a, c) => {
        c && l(c), o();
      }, {
        immediate: !0
      }), nt(o), Qe(l), jt(l), J(n, (a, c) => {
        e.themeVarsScope === "global" && mt(a, c);
      }), J(() => e.themeVarsScope, (a, c) => {
        c === "global" && mt({}, n.value), a === "global" && mt(n.value, {});
      }), e.themeVarsScope === "global" && mt(n.value, {});
    }
    return ot(ko, e), rn(() => {
      e.zIndex !== void 0 && Ua(e.zIndex);
    }), () => d(e.tag, {
      class: Ga(),
      style: e.themeVarsScope === "local" ? n.value : void 0
    }, {
      default: () => {
        var o;
        return [(o = t.default) == null ? void 0 : o.call(t)];
      }
    });
  }
});
const [qa, Nn] = W("icon"), Fa = (e) => e == null ? void 0 : e.includes("/"), Va = {
  dot: Boolean,
  tag: L("i"),
  name: String,
  size: Y,
  badge: Y,
  color: String,
  badgeProps: Object,
  classPrefix: String
};
var Wa = Q({
  name: qa,
  props: Va,
  setup(e, {
    slots: t
  }) {
    const n = Ct(ko, null), o = E(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || Nn());
    return () => {
      const {
        tag: l,
        dot: a,
        name: c,
        size: r,
        badge: i,
        color: u
      } = e, s = Fa(c);
      return d(ho, fe({
        dot: a,
        tag: l,
        class: [o.value, s ? "" : `${o.value}-${c}`],
        style: {
          color: u,
          fontSize: ge(r)
        },
        content: i
      }, e.badgeProps), {
        default: () => {
          var g;
          return [(g = t.default) == null ? void 0 : g.call(t), s && d("img", {
            class: Nn("image"),
            src: c
          }, null)];
        }
      });
    };
  }
});
const Te = ce(Wa), [Ka, $e] = W("loading"), $a = Array(12).fill(null).map((e, t) => d("i", {
  class: $e("line", String(t + 1))
}, null)), _a = d("svg", {
  class: $e("circular"),
  viewBox: "25 25 50 50"
}, [d("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
}, null)]), el = {
  size: Y,
  type: L("circular"),
  color: String,
  vertical: Boolean,
  textSize: Y,
  textColor: String
};
var tl = Q({
  name: Ka,
  props: el,
  setup(e, {
    slots: t
  }) {
    const n = E(() => re({
      color: e.color
    }, ba(e.size))), o = () => {
      const a = e.type === "spinner" ? $a : _a;
      return d("span", {
        class: $e("spinner", e.type),
        style: n.value
      }, [t.icon ? t.icon() : a]);
    }, l = () => {
      var a;
      if (t.default)
        return d("span", {
          class: $e("text"),
          style: {
            fontSize: ge(e.textSize),
            color: (a = e.textColor) != null ? a : e.color
          }
        }, [t.default()]);
    };
    return () => {
      const {
        type: a,
        vertical: c
      } = e;
      return d("div", {
        class: $e([a, {
          vertical: c
        }]),
        "aria-live": "polite",
        "aria-busy": !0
      }, [o(), l()]);
    };
  }
});
const ut = ce(tl), [nl, Re] = W("button"), ol = re({}, hn, {
  tag: L("button"),
  text: String,
  icon: String,
  type: L("default"),
  size: L("normal"),
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: L("button"),
  loadingSize: Y,
  loadingText: String,
  loadingType: String,
  iconPosition: L("left")
});
var al = Q({
  name: nl,
  props: ol,
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = Ao(), l = () => n.loading ? n.loading() : d(ut, {
      size: e.loadingSize,
      type: e.loadingType,
      class: Re("loading")
    }, null), a = () => {
      if (e.loading)
        return l();
      if (n.icon)
        return d("div", {
          class: Re("icon")
        }, [n.icon()]);
      if (e.icon)
        return d(Te, {
          name: e.icon,
          class: Re("icon"),
          classPrefix: e.iconPrefix
        }, null);
    }, c = () => {
      let u;
      if (e.loading ? u = e.loadingText : u = n.default ? n.default() : e.text, u)
        return d("span", {
          class: Re("text")
        }, [u]);
    }, r = () => {
      const {
        color: u,
        plain: s
      } = e;
      if (u) {
        const g = {
          color: s ? u : "white"
        };
        return s || (g.background = u), u.includes("gradient") ? g.border = 0 : g.borderColor = u, g;
      }
    }, i = (u) => {
      e.loading ? xe(u) : e.disabled || (t("click", u), o());
    };
    return () => {
      const {
        tag: u,
        type: s,
        size: g,
        block: v,
        round: y,
        plain: m,
        square: P,
        loading: A,
        disabled: x,
        hairline: I,
        nativeType: M,
        iconPosition: z
      } = e, p = [Re([s, g, {
        plain: m,
        block: v,
        round: y,
        square: P,
        loading: A,
        disabled: x,
        hairline: I
      }]), {
        [pa]: I
      }];
      return d(u, {
        type: M,
        class: p,
        style: r(),
        disabled: x,
        onClick: i
      }, {
        default: () => [d("div", {
          class: Re("content")
        }, [z === "left" && a(), c(), z === "right" && a()])]
      });
    };
  }
});
const yn = ce(al), ll = {
  // whether to show popup
  show: Boolean,
  // z-index
  zIndex: Y,
  // whether to show overlay
  overlay: V,
  // transition duration
  duration: Y,
  // teleport
  teleport: [String, Object],
  // prevent body scroll
  lockScroll: V,
  // whether to lazy render
  lazyRender: V,
  // callback function before close
  beforeClose: Function,
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: je,
  // Initial rendering animation
  transitionAppear: Boolean,
  // whether to close popup when overlay is clicked
  closeOnClickOverlay: V
};
function il(e, t) {
  return e > t ? "horizontal" : t > e ? "vertical" : "";
}
function Nt() {
  const e = S(0), t = S(0), n = S(0), o = S(0), l = S(0), a = S(0), c = S(""), r = S(!0), i = () => c.value === "vertical", u = () => c.value === "horizontal", s = () => {
    n.value = 0, o.value = 0, l.value = 0, a.value = 0, c.value = "", r.value = !0;
  };
  return {
    move: (y) => {
      const m = y.touches[0];
      n.value = (m.clientX < 0 ? 0 : m.clientX) - e.value, o.value = m.clientY - t.value, l.value = Math.abs(n.value), a.value = Math.abs(o.value);
      const P = 10;
      (!c.value || l.value < P && a.value < P) && (c.value = il(l.value, a.value)), r.value && (l.value > Hn || a.value > Hn) && (r.value = !1);
    },
    start: (y) => {
      s(), e.value = y.touches[0].clientX, t.value = y.touches[0].clientY;
    },
    reset: s,
    startX: e,
    startY: t,
    deltaX: n,
    deltaY: o,
    offsetX: l,
    offsetY: a,
    direction: c,
    isVertical: i,
    isHorizontal: u,
    isTap: r
  };
}
let Fe = 0;
const Bn = "van-overflow-hidden";
function rl(e, t) {
  const n = Nt(), o = "01", l = "10", a = (s) => {
    n.move(s);
    const g = n.deltaY.value > 0 ? l : o, v = co(
      s.target,
      e.value
    ), { scrollHeight: y, offsetHeight: m, scrollTop: P } = v;
    let A = "11";
    P === 0 ? A = m >= y ? "00" : "01" : P + m >= y && (A = "10"), A !== "11" && n.isVertical() && !(parseInt(A, 2) & parseInt(g, 2)) && xe(s, !0);
  }, c = () => {
    document.addEventListener("touchstart", n.start), document.addEventListener("touchmove", a, { passive: !1 }), Fe || document.body.classList.add(Bn), Fe++;
  }, r = () => {
    Fe && (document.removeEventListener("touchstart", n.start), document.removeEventListener("touchmove", a), Fe--, Fe || document.body.classList.remove(Bn));
  }, i = () => t() && c(), u = () => t() && r();
  rt(i), Qe(u), jt(u), J(t, (s) => {
    s ? c() : r();
  });
}
function Po(e) {
  const t = S(!1);
  return J(
    e,
    (n) => {
      n && (t.value = n);
    },
    { immediate: !0 }
  ), (n) => () => t.value ? n() : null;
}
const [cl, sl] = W("overlay"), ul = {
  show: Boolean,
  zIndex: Y,
  duration: Y,
  className: je,
  lockScroll: V,
  lazyRender: V,
  customStyle: Object
};
var dl = Q({
  name: cl,
  props: ul,
  setup(e, {
    slots: t
  }) {
    const n = S(), o = Po(() => e.show || !e.lazyRender), l = (c) => {
      e.lockScroll && xe(c, !0);
    }, a = o(() => {
      var c;
      const r = re(so(e.zIndex), e.customStyle);
      return ae(e.duration) && (r.animationDuration = `${e.duration}s`), cn(d("div", {
        ref: n,
        style: r,
        class: [sl(), e.className]
      }, [(c = t.default) == null ? void 0 : c.call(t)]), [[sn, e.show]]);
    });
    return ze("touchmove", l, {
      target: n
    }), () => d(eo, {
      name: "van-fade",
      appear: !0
    }, {
      default: a
    });
  }
});
const fl = ce(dl), vl = re({}, ll, {
  round: Boolean,
  position: L("center"),
  closeIcon: L("cross"),
  closeable: Boolean,
  transition: String,
  iconPrefix: String,
  closeOnPopstate: Boolean,
  closeIconPosition: L("top-right"),
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: Boolean
}), [gl, Rn] = W("popup");
var ml = Q({
  name: gl,
  inheritAttrs: !1,
  props: vl,
  emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
  setup(e, {
    emit: t,
    attrs: n,
    slots: o
  }) {
    let l, a;
    const c = S(), r = S(), i = Po(() => e.show || !e.lazyRender), u = E(() => {
      const H = {
        zIndex: c.value
      };
      if (ae(e.duration)) {
        const q = e.position === "center" ? "animationDuration" : "transitionDuration";
        H[q] = `${e.duration}s`;
      }
      return H;
    }), s = () => {
      l || (l = !0, c.value = e.zIndex !== void 0 ? +e.zIndex : Xa(), t("open"));
    }, g = () => {
      l && vo(e.beforeClose, {
        done() {
          l = !1, t("close"), t("update:show", !1);
        }
      });
    }, v = (H) => {
      t("clickOverlay", H), e.closeOnClickOverlay && g();
    }, y = () => {
      if (e.overlay)
        return d(fl, {
          show: e.show,
          class: e.overlayClass,
          zIndex: c.value,
          duration: e.duration,
          customStyle: e.overlayStyle,
          role: e.closeOnClickOverlay ? "button" : void 0,
          tabindex: e.closeOnClickOverlay ? 0 : void 0,
          onClick: v
        }, {
          default: o["overlay-content"]
        });
    }, m = (H) => {
      t("clickCloseIcon", H), g();
    }, P = () => {
      if (e.closeable)
        return d(Te, {
          role: "button",
          tabindex: 0,
          name: e.closeIcon,
          class: [Rn("close-icon", e.closeIconPosition), Kt],
          classPrefix: e.iconPrefix,
          onClick: m
        }, null);
    };
    let A;
    const x = () => {
      A && clearTimeout(A), A = setTimeout(() => {
        t("opened");
      });
    }, I = () => t("closed"), M = (H) => t("keydown", H), z = i(() => {
      var H;
      const {
        round: q,
        position: ee,
        safeAreaInsetTop: $,
        safeAreaInsetBottom: b
      } = e;
      return cn(d("div", fe({
        ref: r,
        style: u.value,
        role: "dialog",
        tabindex: 0,
        class: [Rn({
          round: q,
          [ee]: ee
        }), {
          "van-safe-area-top": $,
          "van-safe-area-bottom": b
        }],
        onKeydown: M
      }, n), [(H = o.default) == null ? void 0 : H.call(o), P()]), [[sn, e.show]]);
    }), p = () => {
      const {
        position: H,
        transition: q,
        transitionAppear: ee
      } = e, $ = H === "center" ? "van-fade" : `van-popup-slide-${H}`;
      return d(eo, {
        name: q || $,
        appear: ee,
        onAfterEnter: x,
        onAfterLeave: I
      }, {
        default: z
      });
    };
    return J(() => e.show, (H) => {
      H && !l && (s(), n.tabindex === 0 && ne(() => {
        var q;
        (q = r.value) == null || q.focus();
      })), !H && l && (l = !1, t("close"));
    }), ye({
      popupRef: r
    }), rl(r, () => e.show && e.lockScroll), ze("popstate", () => {
      e.closeOnPopstate && (g(), a = !1);
    }), Ee(() => {
      e.show && s();
    }), nt(() => {
      a && (t("update:show", !0), a = !1);
    }), Qe(() => {
      e.show && e.teleport && (g(), a = !0);
    }), ot(go, () => e.show), () => e.teleport ? d(Wo, {
      to: e.teleport
    }, {
      default: () => [y(), p()]
    }) : d(Ye, null, [y(), p()]);
  }
});
const bn = ce(ml), [Al, Ce, Jn] = W("picker"), Oo = (e) => e.find((t) => !t.disabled) || e[0];
function hl(e, t) {
  const n = e[0];
  if (n) {
    if (Array.isArray(n))
      return "multiple";
    if (t.children in n)
      return "cascade";
  }
  return "default";
}
function kt(e, t) {
  t = Xe(t, 0, e.length);
  for (let n = t; n < e.length; n++)
    if (!e[n].disabled)
      return n;
  for (let n = t - 1; n >= 0; n--)
    if (!e[n].disabled)
      return n;
  return 0;
}
const Mn = (e, t, n) => t !== void 0 && !!e.find((o) => o[n.value] === t);
function $t(e, t, n) {
  const o = e.findIndex((a) => a[n.value] === t), l = kt(e, o);
  return e[l];
}
function yl(e, t, n) {
  const o = [];
  let l = {
    [t.children]: e
  }, a = 0;
  for (; l && l[t.children]; ) {
    const c = l[t.children], r = n.value[a];
    if (l = ae(r) ? $t(c, r, t) : void 0, !l && c.length) {
      const i = Oo(c)[t.value];
      l = $t(c, i, t);
    }
    a++, o.push(c);
  }
  return o;
}
function bl(e) {
  const { transform: t } = window.getComputedStyle(e), n = t.slice(7, t.length - 1).split(", ")[5];
  return Number(n);
}
function kl(e) {
  return re(
    {
      text: "text",
      value: "value",
      children: "children"
    },
    e
  );
}
const Zn = 200, Yn = 300, Pl = 15, [Eo, Yt] = W("picker-column"), So = Symbol(Eo);
var Ol = Q({
  name: Eo,
  props: {
    value: Y,
    fields: Pe(Object),
    options: et(),
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: Pe(Number),
    swipeDuration: Pe(Y),
    visibleOptionNum: Pe(Y)
  },
  emits: ["change", "clickOption", "scrollInto"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o, l, a, c, r;
    const i = S(), u = S(), s = S(0), g = S(0), v = Nt(), y = () => e.options.length, m = () => e.optionHeight * (+e.visibleOptionNum - 1) / 2, P = (b) => {
      let h = kt(e.options, b);
      const O = -h * e.optionHeight, D = () => {
        h > y() - 1 && (h = kt(e.options, b));
        const U = e.options[h][e.fields.value];
        U !== e.value && t("change", U);
      };
      o && O !== s.value ? r = D : D(), s.value = O;
    }, A = () => e.readonly || !e.options.length, x = (b) => {
      o || A() || (r = null, g.value = Zn, P(b), t("clickOption", e.options[b]));
    }, I = (b) => Xe(Math.round(-b / e.optionHeight), 0, y() - 1), M = E(() => I(s.value)), z = (b, h) => {
      const O = Math.abs(b / h);
      b = s.value + O / 3e-3 * (b < 0 ? -1 : 1);
      const D = I(b);
      g.value = +e.swipeDuration, P(D);
    }, p = () => {
      o = !1, g.value = 0, r && (r(), r = null);
    }, H = (b) => {
      if (!A()) {
        if (v.start(b), o) {
          const h = bl(u.value);
          s.value = Math.min(0, h - m());
        }
        g.value = 0, l = s.value, a = Date.now(), c = l, r = null;
      }
    }, q = (b) => {
      if (A())
        return;
      v.move(b), v.isVertical() && (o = !0, xe(b, !0));
      const h = Xe(l + v.deltaY.value, -(y() * e.optionHeight), e.optionHeight), O = I(h);
      O !== M.value && t("scrollInto", e.options[O]), s.value = h;
      const D = Date.now();
      D - a > Yn && (a = D, c = h);
    }, ee = () => {
      if (A())
        return;
      const b = s.value - c, h = Date.now() - a;
      if (h < Yn && Math.abs(b) > Pl) {
        z(b, h);
        return;
      }
      const D = I(s.value);
      g.value = Zn, P(D), setTimeout(() => {
        o = !1;
      }, 0);
    }, $ = () => {
      const b = {
        height: `${e.optionHeight}px`
      };
      return e.options.map((h, O) => {
        const D = h[e.fields.text], {
          disabled: U
        } = h, k = h[e.fields.value], C = {
          role: "button",
          style: b,
          tabindex: U ? -1 : 0,
          class: [Yt("item", {
            disabled: U,
            selected: k === e.value
          }), h.className],
          onClick: () => x(O)
        }, R = {
          class: "van-ellipsis",
          [e.allowHtml ? "innerHTML" : "textContent"]: D
        };
        return d("li", C, [n.option ? n.option(h, O) : d("div", R, null)]);
      });
    };
    return qe(So), ye({
      stopMomentum: p
    }), rn(() => {
      const b = o ? Math.floor(-s.value / e.optionHeight) : e.options.findIndex((D) => D[e.fields.value] === e.value), h = kt(e.options, b), O = -h * e.optionHeight;
      o && h < b && p(), s.value = O;
    }), ze("touchmove", q, {
      target: i
    }), () => d("div", {
      ref: i,
      class: Yt(),
      onTouchstartPassive: H,
      onTouchend: ee,
      onTouchcancel: ee
    }, [d("ul", {
      ref: u,
      style: {
        transform: `translate3d(0, ${s.value + m()}px, 0)`,
        transitionDuration: `${g.value}ms`,
        transitionProperty: g.value ? "all" : "none"
      },
      class: Yt("wrapper"),
      onTransitionend: p
    }, [$()])]);
  }
});
const [El] = W("picker-toolbar"), Bt = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String
}, Io = ["cancel", "confirm", "title", "toolbar"], Sl = Object.keys(Bt);
var xo = Q({
  name: El,
  props: Bt,
  emits: ["confirm", "cancel"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = () => {
      if (n.title)
        return n.title();
      if (e.title)
        return d("div", {
          class: [Ce("title"), "van-ellipsis"]
        }, [e.title]);
    }, l = () => t("cancel"), a = () => t("confirm"), c = () => {
      const i = e.cancelButtonText || Jn("cancel");
      return d("button", {
        type: "button",
        class: [Ce("cancel"), Kt],
        onClick: l
      }, [n.cancel ? n.cancel() : i]);
    }, r = () => {
      const i = e.confirmButtonText || Jn("confirm");
      return d("button", {
        type: "button",
        class: [Ce("confirm"), Kt],
        onClick: a
      }, [n.confirm ? n.confirm() : i]);
    };
    return () => d("div", {
      class: Ce("toolbar")
    }, [n.toolbar ? n.toolbar() : [c(), o(), r()]]);
  }
});
const Il = (e, t) => {
  const n = S(e());
  return J(e, (o) => {
    o !== n.value && (n.value = o);
  }), J(n, (o) => {
    o !== e() && t(o);
  }), n;
};
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const To = Array.isArray, tt = (e) => typeof e == "string", Do = (e) => e !== null && typeof e == "object", xl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Tl = /\B([A-Z])/g, Dl = xl(
  (e) => e.replace(Tl, "-$1").toLowerCase()
);
function zo(e) {
  if (To(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], l = tt(o) ? jl(o) : zo(o);
      if (l)
        for (const a in l)
          t[a] = l[a];
    }
    return t;
  } else {
    if (tt(e))
      return e;
    if (Do(e))
      return e;
  }
}
const zl = /;(?![^(]*\))/g, wl = /:([^]+)/, Cl = /\/\*[^]*?\*\//g;
function jl(e) {
  const t = {};
  return e.replace(Cl, "").split(zl).forEach((n) => {
    if (n) {
      const o = n.split(wl);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Hl(e) {
  let t = "";
  if (!e || tt(e))
    return t;
  for (const n in e) {
    const o = e[n], l = n.startsWith("--") ? n : Dl(n);
    (tt(o) || typeof o == "number") && (t += `${l}:${o};`);
  }
  return t;
}
function wo(e) {
  let t = "";
  if (tt(e))
    t = e;
  else if (To(e))
    for (let n = 0; n < e.length; n++) {
      const o = wo(e[n]);
      o && (t += o + " ");
    }
  else if (Do(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function pl(e, t, n) {
  let o, l = 0;
  const a = e.scrollLeft, c = n === 0 ? 1 : Math.round(n * 1e3 / 16);
  function r() {
    io(o);
  }
  function i() {
    e.scrollLeft += (t - a) / c, ++l < c && (o = pe(i));
  }
  return i(), r;
}
function Nl(e, t, n, o) {
  let l, a = ct(e);
  const c = a < t, r = n === 0 ? 1 : Math.round(n * 1e3 / 16), i = (t - a) / r;
  function u() {
    io(l);
  }
  function s() {
    a += i, (c && a > t || !c && a < t) && (a = t), zt(e, a), c && a < t || !c && a > t ? l = pe(s) : o && (l = pe(o));
  }
  return s(), u;
}
let Bl = 0;
function kn() {
  const e = Be(), { name: t = "unknown" } = (e == null ? void 0 : e.type) || {};
  return process.env.NODE_ENV === "test" ? t : `${t}-${++Bl}`;
}
function Co() {
  const e = S([]), t = [];
  return Ko(() => {
    e.value = [];
  }), [e, (o) => (t[o] || (t[o] = (l) => {
    e.value[o] = l;
  }), t[o])];
}
function jo(e, t) {
  if (!at || !window.IntersectionObserver)
    return;
  const n = new IntersectionObserver(
    (a) => {
      t(a[0].intersectionRatio > 0);
    },
    { root: document.body }
  ), o = () => {
    e.value && n.observe(e.value);
  }, l = () => {
    e.value && n.unobserve(e.value);
  };
  Qe(l), jt(l), rt(o);
}
const [Rl, Jl] = W("sticky"), Ml = {
  zIndex: Y,
  position: L("top"),
  container: Object,
  offsetTop: le(0),
  offsetBottom: le(0)
};
var Zl = Q({
  name: Rl,
  props: Ml,
  emits: ["scroll", "change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = S(), l = Ht(o), a = De({
      fixed: !1,
      width: 0,
      // root width
      height: 0,
      // root height
      transform: 0
    }), c = S(!1), r = E(() => gn(e.position === "top" ? e.offsetTop : e.offsetBottom)), i = E(() => {
      if (c.value)
        return;
      const {
        fixed: v,
        height: y,
        width: m
      } = a;
      if (v)
        return {
          width: `${m}px`,
          height: `${y}px`
        };
    }), u = E(() => {
      if (!a.fixed || c.value)
        return;
      const v = re(so(e.zIndex), {
        width: `${a.width}px`,
        height: `${a.height}px`,
        [e.position]: `${r.value}px`
      });
      return a.transform && (v.transform = `translate3d(0, ${a.transform}px, 0)`), v;
    }), s = (v) => t("scroll", {
      scrollTop: v,
      isFixed: a.fixed
    }), g = () => {
      if (!o.value || Ge(o))
        return;
      const {
        container: v,
        position: y
      } = e, m = he(o), P = ct(window);
      if (a.width = m.width, a.height = m.height, y === "top")
        if (v) {
          const A = he(v), x = A.bottom - r.value - a.height;
          a.fixed = r.value > m.top && A.bottom > 0, a.transform = x < 0 ? x : 0;
        } else
          a.fixed = r.value > m.top;
      else {
        const {
          clientHeight: A
        } = document.documentElement;
        if (v) {
          const x = he(v), I = A - x.top - r.value - a.height;
          a.fixed = A - r.value < m.bottom && A > x.top, a.transform = I < 0 ? -I : 0;
        } else
          a.fixed = A - r.value < m.bottom;
      }
      s(P);
    };
    return J(() => a.fixed, (v) => t("change", v)), ze("scroll", g, {
      target: l,
      passive: !0
    }), jo(o, g), J([st, pt], () => {
      !o.value || Ge(o) || !a.fixed || (c.value = !0, ne(() => {
        const v = he(o);
        a.width = v.width, a.height = v.height, c.value = !1;
      }));
    }), () => {
      var v;
      return d("div", {
        ref: o,
        style: i.value
      }, [d("div", {
        class: Jl({
          fixed: a.fixed && !c.value
        }),
        style: u.value
      }, [(v = n.default) == null ? void 0 : v.call(n)])]);
    };
  }
});
const Yl = ce(Zl), [Ho, At] = W("swipe"), Xl = {
  loop: V,
  width: Y,
  height: Y,
  vertical: Boolean,
  autoplay: le(0),
  duration: le(500),
  touchable: V,
  lazyRender: Boolean,
  initialSwipe: le(0),
  indicatorColor: String,
  showIndicators: V,
  stopPropagation: V
}, po = Symbol(Ho);
var Ul = Q({
  name: Ho,
  props: Xl,
  emits: ["change", "dragStart", "dragEnd"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = S(), l = S(), a = De({
      rect: null,
      width: 0,
      height: 0,
      offset: 0,
      active: 0,
      swiping: !1
    });
    let c = !1;
    const r = Nt(), {
      children: i,
      linkChildren: u
    } = it(po), s = E(() => i.length), g = E(() => a[e.vertical ? "height" : "width"]), v = E(() => e.vertical ? r.deltaY.value : r.deltaX.value), y = E(() => a.rect ? (e.vertical ? a.rect.height : a.rect.width) - g.value * s.value : 0), m = E(() => g.value ? Math.ceil(Math.abs(y.value) / g.value) : s.value), P = E(() => s.value * g.value), A = E(() => (a.active + s.value) % s.value), x = E(() => {
      const j = e.vertical ? "vertical" : "horizontal";
      return r.direction.value === j;
    }), I = E(() => {
      const j = {
        transitionDuration: `${a.swiping ? 0 : e.duration}ms`,
        transform: `translate${e.vertical ? "Y" : "X"}(${a.offset}px)`
      };
      if (g.value) {
        const B = e.vertical ? "height" : "width", X = e.vertical ? "width" : "height";
        j[B] = `${P.value}px`, j[X] = e[X] ? `${e[X]}px` : "";
      }
      return j;
    }), M = (j) => {
      const {
        active: B
      } = a;
      return j ? e.loop ? Xe(B + j, -1, s.value) : Xe(B + j, 0, m.value) : B;
    }, z = (j, B = 0) => {
      let X = j * g.value;
      e.loop || (X = Math.min(X, -y.value));
      let se = B - X;
      return e.loop || (se = Xe(se, y.value, 0)), se;
    }, p = ({
      pace: j = 0,
      offset: B = 0,
      emitChange: X
    }) => {
      if (s.value <= 1)
        return;
      const {
        active: se
      } = a, T = M(j), f = z(T, B);
      if (e.loop) {
        if (i[0] && f !== y.value) {
          const w = f < y.value;
          i[0].setOffset(w ? P.value : 0);
        }
        if (i[s.value - 1] && f !== 0) {
          const w = f > 0;
          i[s.value - 1].setOffset(w ? -P.value : 0);
        }
      }
      a.active = T, a.offset = f, X && T !== se && t("change", A.value);
    }, H = () => {
      a.swiping = !0, a.active <= -1 ? p({
        pace: s.value
      }) : a.active >= s.value && p({
        pace: -s.value
      });
    }, q = () => {
      H(), r.reset(), Ke(() => {
        a.swiping = !1, p({
          pace: -1,
          emitChange: !0
        });
      });
    }, ee = () => {
      H(), r.reset(), Ke(() => {
        a.swiping = !1, p({
          pace: 1,
          emitChange: !0
        });
      });
    };
    let $;
    const b = () => clearTimeout($), h = () => {
      b(), +e.autoplay > 0 && s.value > 1 && ($ = setTimeout(() => {
        ee(), h();
      }, +e.autoplay));
    }, O = (j = +e.initialSwipe) => {
      if (!o.value)
        return;
      const B = () => {
        var X, se;
        if (!Ge(o)) {
          const T = {
            width: o.value.offsetWidth,
            height: o.value.offsetHeight
          };
          a.rect = T, a.width = +((X = e.width) != null ? X : T.width), a.height = +((se = e.height) != null ? se : T.height);
        }
        s.value && (j = Math.min(s.value - 1, j), j === -1 && (j = s.value - 1)), a.active = j, a.swiping = !0, a.offset = z(j), i.forEach((T) => {
          T.setOffset(0);
        }), h();
      };
      Ge(o) ? ne().then(B) : B();
    }, D = () => O(a.active);
    let U;
    const k = (j) => {
      !e.touchable || // avoid resetting position on multi-finger touch
      j.touches.length > 1 || (r.start(j), c = !1, U = Date.now(), b(), H());
    }, C = (j) => {
      e.touchable && a.swiping && (r.move(j), x.value && (!e.loop && (a.active === 0 && v.value > 0 || a.active === s.value - 1 && v.value < 0) || (xe(j, e.stopPropagation), p({
        offset: v.value
      }), c || (t("dragStart", {
        index: A.value
      }), c = !0))));
    }, R = () => {
      if (!e.touchable || !a.swiping)
        return;
      const j = Date.now() - U, B = v.value / j;
      if ((Math.abs(B) > 0.25 || Math.abs(v.value) > g.value / 2) && x.value) {
        const se = e.vertical ? r.offsetY.value : r.offsetX.value;
        let T = 0;
        e.loop ? T = se > 0 ? v.value > 0 ? -1 : 1 : 0 : T = -Math[v.value > 0 ? "ceil" : "floor"](v.value / g.value), p({
          pace: T,
          emitChange: !0
        });
      } else
        v.value && p({
          pace: 0
        });
      c = !1, a.swiping = !1, t("dragEnd", {
        index: A.value
      }), h();
    }, G = (j, B = {}) => {
      H(), r.reset(), Ke(() => {
        let X;
        e.loop && j === s.value ? X = a.active === 0 ? 0 : j : X = j % s.value, B.immediate ? Ke(() => {
          a.swiping = !1;
        }) : a.swiping = !1, p({
          pace: X - a.active,
          emitChange: !0
        });
      });
    }, ie = (j, B) => {
      const X = B === A.value, se = X ? {
        backgroundColor: e.indicatorColor
      } : void 0;
      return d("i", {
        style: se,
        class: At("indicator", {
          active: X
        })
      }, null);
    }, _ = () => {
      if (n.indicator)
        return n.indicator({
          active: A.value,
          total: s.value
        });
      if (e.showIndicators && s.value > 1)
        return d("div", {
          class: At("indicators", {
            vertical: e.vertical
          })
        }, [Array(s.value).fill("").map(ie)]);
    };
    return ye({
      prev: q,
      next: ee,
      state: a,
      resize: D,
      swipeTo: G
    }), u({
      size: g,
      props: e,
      count: s,
      activeIndicator: A
    }), J(() => e.initialSwipe, (j) => O(+j)), J(s, () => O(a.active)), J(() => e.autoplay, h), J([st, pt, () => e.width, () => e.height], D), J(ga(), (j) => {
      j === "visible" ? h() : b();
    }), Ee(O), nt(() => O(a.active)), An(() => O(a.active)), Qe(b), jt(b), ze("touchmove", C, {
      target: l
    }), () => {
      var j;
      return d("div", {
        ref: o,
        class: At()
      }, [d("div", {
        ref: l,
        style: I.value,
        class: At("track", {
          vertical: e.vertical
        }),
        onTouchstartPassive: k,
        onTouchend: R,
        onTouchcancel: R
      }, [(j = n.default) == null ? void 0 : j.call(n)]), _()]);
    };
  }
});
const Gl = ce(Ul), [Ql, Xn] = W("tabs");
var Ll = Q({
  name: Ql,
  props: {
    count: Pe(Number),
    inited: Boolean,
    animated: Boolean,
    duration: Pe(Y),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: Pe(Number)
  },
  emits: ["change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = S(), l = (r) => t("change", r), a = () => {
      var r;
      const i = (r = n.default) == null ? void 0 : r.call(n);
      return e.animated || e.swipeable ? d(Gl, {
        ref: o,
        loop: !1,
        class: Xn("track"),
        duration: +e.duration * 1e3,
        touchable: e.swipeable,
        lazyRender: e.lazyRender,
        showIndicators: !1,
        onChange: l
      }, {
        default: () => [i]
      }) : i;
    }, c = (r) => {
      const i = o.value;
      i && i.state.active !== r && i.swipeTo(r, {
        immediate: !e.inited
      });
    };
    return J(() => e.currentIndex, c), Ee(() => {
      c(e.currentIndex);
    }), ye({
      swipeRef: o
    }), () => d("div", {
      class: Xn("content", {
        animated: e.animated || e.swipeable
      })
    }, [a()]);
  }
});
const [No, ht] = W("tabs"), ql = {
  type: L("line"),
  color: String,
  border: Boolean,
  sticky: Boolean,
  shrink: Boolean,
  active: le(0),
  duration: le(0.3),
  animated: Boolean,
  ellipsis: V,
  swipeable: Boolean,
  scrollspy: Boolean,
  offsetTop: le(0),
  background: String,
  lazyRender: V,
  lineWidth: Y,
  lineHeight: Y,
  beforeChange: Function,
  swipeThreshold: le(5),
  titleActiveColor: String,
  titleInactiveColor: String
}, Bo = Symbol(No);
var Fl = Q({
  name: No,
  props: ql,
  emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o, l, a, c, r;
    const i = S(), u = S(), s = S(), g = S(), v = kn(), y = Ht(i), [m, P] = Co(), {
      children: A,
      linkChildren: x
    } = it(Bo), I = De({
      inited: !1,
      position: "",
      lineStyle: {},
      currentIndex: -1
    }), M = E(() => A.length > +e.swipeThreshold || !e.ellipsis || e.shrink), z = E(() => ({
      borderColor: e.color,
      background: e.background
    })), p = (T, f) => {
      var w;
      return (w = T.name) != null ? w : f;
    }, H = E(() => {
      const T = A[I.currentIndex];
      if (T)
        return p(T, I.currentIndex);
    }), q = E(() => gn(e.offsetTop)), ee = E(() => e.sticky ? q.value + o : 0), $ = (T) => {
      const f = u.value, w = m.value;
      if (!M.value || !f || !w || !w[I.currentIndex])
        return;
      const N = w[I.currentIndex].$el, Z = N.offsetLeft - (f.offsetWidth - N.offsetWidth) / 2;
      c && c(), c = pl(f, Z, T ? 0 : +e.duration);
    }, b = () => {
      const T = I.inited;
      ne(() => {
        const f = m.value;
        if (!f || !f[I.currentIndex] || e.type !== "line" || Ge(i.value))
          return;
        const w = f[I.currentIndex].$el, {
          lineWidth: N,
          lineHeight: Z
        } = e, F = w.offsetLeft + w.offsetWidth / 2, te = {
          width: ge(N),
          backgroundColor: e.color,
          transform: `translateX(${F}px) translateX(-50%)`
        };
        if (T && (te.transitionDuration = `${e.duration}s`), ae(Z)) {
          const ve = ge(Z);
          te.height = ve, te.borderRadius = ve;
        }
        I.lineStyle = te;
      });
    }, h = (T) => {
      const f = T < I.currentIndex ? -1 : 1;
      for (; T >= 0 && T < A.length; ) {
        if (!A[T].disabled)
          return T;
        T += f;
      }
    }, O = (T, f) => {
      const w = h(T);
      if (!ae(w))
        return;
      const N = A[w], Z = p(N, w), F = I.currentIndex !== null;
      I.currentIndex !== w && (I.currentIndex = w, f || $(), b()), Z !== e.active && (t("update:active", Z), F && t("change", Z, N.title)), a && !e.scrollspy && vn(Math.ceil(zn(i.value) - q.value));
    }, D = (T, f) => {
      const w = A.find((Z, F) => p(Z, F) === T), N = w ? A.indexOf(w) : 0;
      O(N, f);
    }, U = (T = !1) => {
      if (e.scrollspy) {
        const f = A[I.currentIndex].$el;
        if (f && y.value) {
          const w = zn(f, y.value) - ee.value;
          l = !0, r && r(), r = Nl(y.value, w, T ? 0 : +e.duration, () => {
            l = !1;
          });
        }
      }
    }, k = (T, f, w) => {
      const {
        title: N,
        disabled: Z
      } = A[f], F = p(A[f], f);
      Z || (vo(e.beforeChange, {
        args: [F],
        done: () => {
          O(f), U();
        }
      }), mo(T)), t("clickTab", {
        name: F,
        title: N,
        event: w,
        disabled: Z
      });
    }, C = (T) => {
      a = T.isFixed, t("scroll", T);
    }, R = (T) => {
      ne(() => {
        D(T), U(!0);
      });
    }, G = () => {
      for (let T = 0; T < A.length; T++) {
        const {
          top: f
        } = he(A[T].$el);
        if (f > ee.value)
          return T === 0 ? 0 : T - 1;
      }
      return A.length - 1;
    }, ie = () => {
      if (e.scrollspy && !l) {
        const T = G();
        O(T);
      }
    }, _ = () => {
      if (e.type === "line" && A.length)
        return d("div", {
          class: ht("line"),
          style: I.lineStyle
        }, null);
    }, j = () => {
      var T, f, w;
      const {
        type: N,
        border: Z,
        sticky: F
      } = e, te = [d("div", {
        ref: F ? void 0 : s,
        class: [ht("wrap"), {
          [Na]: N === "line" && Z
        }]
      }, [d("div", {
        ref: u,
        role: "tablist",
        class: ht("nav", [N, {
          shrink: e.shrink,
          complete: M.value
        }]),
        style: z.value,
        "aria-orientation": "horizontal"
      }, [(T = n["nav-left"]) == null ? void 0 : T.call(n), A.map((ve) => ve.renderTitle(k)), _(), (f = n["nav-right"]) == null ? void 0 : f.call(n)])]), (w = n["nav-bottom"]) == null ? void 0 : w.call(n)];
      return F ? d("div", {
        ref: s
      }, [te]) : te;
    }, B = () => {
      b(), ne(() => {
        var T, f;
        $(!0), (f = (T = g.value) == null ? void 0 : T.swipeRef.value) == null || f.resize();
      });
    };
    J(() => [e.color, e.duration, e.lineWidth, e.lineHeight], b), J(st, B), J(() => e.active, (T) => {
      T !== H.value && D(T);
    }), J(() => A.length, () => {
      I.inited && (D(e.active), b(), ne(() => {
        $(!0);
      }));
    });
    const X = () => {
      D(e.active, !0), ne(() => {
        I.inited = !0, s.value && (o = he(s.value).height), $(!0);
      });
    }, se = (T, f) => t("rendered", T, f);
    return ye({
      resize: B,
      scrollTo: R
    }), nt(b), An(b), rt(X), jo(i, b), ze("scroll", ie, {
      target: y,
      passive: !0
    }), x({
      id: v,
      props: e,
      setLine: b,
      scrollable: M,
      onRendered: se,
      currentName: H,
      setTitleRefs: P,
      scrollIntoView: $
    }), () => d("div", {
      ref: i,
      class: ht([e.type])
    }, [e.sticky ? d(Yl, {
      container: i.value,
      offsetTop: q.value,
      onScroll: C
    }, {
      default: () => [j()]
    }) : j(), d(Ll, {
      ref: g,
      count: A.length,
      inited: I.inited,
      animated: e.animated,
      duration: e.duration,
      swipeable: e.swipeable,
      lazyRender: e.lazyRender,
      currentIndex: I.currentIndex,
      onChange: O
    }, {
      default: () => {
        var T;
        return [(T = n.default) == null ? void 0 : T.call(n)];
      }
    })]);
  }
});
const Ro = Symbol(), Vl = () => Ct(Ro, null), [Wl, Un] = W("tab"), Kl = Q({
  name: Wl,
  props: {
    id: String,
    dot: Boolean,
    type: String,
    color: String,
    title: String,
    badge: Y,
    shrink: Boolean,
    isActive: Boolean,
    disabled: Boolean,
    controls: String,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    showZeroBadge: V
  },
  setup(e, {
    slots: t
  }) {
    const n = E(() => {
      const l = {}, {
        type: a,
        color: c,
        disabled: r,
        isActive: i,
        activeColor: u,
        inactiveColor: s
      } = e;
      c && a === "card" && (l.borderColor = c, r || (i ? l.backgroundColor = c : l.color = c));
      const v = i ? u : s;
      return v && (l.color = v), l;
    }), o = () => {
      const l = d("span", {
        class: Un("text", {
          ellipsis: !e.scrollable
        })
      }, [t.title ? t.title() : e.title]);
      return e.dot || ae(e.badge) && e.badge !== "" ? d(ho, {
        dot: e.dot,
        content: e.badge,
        showZero: e.showZeroBadge
      }, {
        default: () => [l]
      }) : l;
    };
    return () => d("div", {
      id: e.id,
      role: "tab",
      class: [Un([e.type, {
        grow: e.scrollable && !e.shrink,
        shrink: e.shrink,
        active: e.isActive,
        disabled: e.disabled
      }])],
      style: n.value,
      tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
      "aria-selected": e.isActive,
      "aria-disabled": e.disabled || void 0,
      "aria-controls": e.controls
    }, [o()]);
  }
}), [$l, _l] = W("swipe-item");
var ei = Q({
  name: $l,
  setup(e, {
    slots: t
  }) {
    let n;
    const o = De({
      offset: 0,
      inited: !1,
      mounted: !1
    }), {
      parent: l,
      index: a
    } = qe(po);
    if (!l) {
      process.env.NODE_ENV !== "production" && console.error("[Vant] <SwipeItem> must be a child component of <Swipe>.");
      return;
    }
    const c = E(() => {
      const u = {}, {
        vertical: s
      } = l.props;
      return l.size.value && (u[s ? "height" : "width"] = `${l.size.value}px`), o.offset && (u.transform = `translate${s ? "Y" : "X"}(${o.offset}px)`), u;
    }), r = E(() => {
      const {
        loop: u,
        lazyRender: s
      } = l.props;
      if (!s || n)
        return !0;
      if (!o.mounted)
        return !1;
      const g = l.activeIndicator.value, v = l.count.value - 1, y = g === 0 && u ? v : g - 1, m = g === v && u ? 0 : g + 1;
      return n = a.value === g || a.value === y || a.value === m, n;
    }), i = (u) => {
      o.offset = u;
    };
    return Ee(() => {
      ne(() => {
        o.mounted = !0;
      });
    }), ye({
      setOffset: i
    }), () => {
      var u;
      return d("div", {
        class: _l(),
        style: c.value
      }, [r.value ? (u = t.default) == null ? void 0 : u.call(t) : null]);
    };
  }
});
const ti = ce(ei), [ni, Xt] = W("tab"), oi = re({}, hn, {
  dot: Boolean,
  name: Y,
  badge: Y,
  title: String,
  disabled: Boolean,
  titleClass: je,
  titleStyle: [String, Object],
  showZeroBadge: V
});
var ai = Q({
  name: ni,
  props: oi,
  setup(e, {
    slots: t
  }) {
    const n = kn(), o = S(!1), l = Be(), {
      parent: a,
      index: c
    } = qe(Bo);
    if (!a) {
      process.env.NODE_ENV !== "production" && console.error("[Vant] <Tab> must be a child component of <Tabs>.");
      return;
    }
    const r = () => {
      var m;
      return (m = e.name) != null ? m : c.value;
    }, i = () => {
      o.value = !0, a.props.lazyRender && ne(() => {
        a.onRendered(r(), e.title);
      });
    }, u = E(() => {
      const m = r() === a.currentName.value;
      return m && !o.value && i(), m;
    }), s = S(""), g = S("");
    rn(() => {
      const {
        titleClass: m,
        titleStyle: P
      } = e;
      s.value = m ? wo(m) : "", g.value = P && typeof P != "string" ? Hl(zo(P)) : P;
    });
    const v = (m) => d(Kl, fe({
      key: n,
      id: `${a.id}-${c.value}`,
      ref: a.setTitleRefs(c.value),
      style: g.value,
      class: s.value,
      isActive: u.value,
      controls: n,
      scrollable: a.scrollable.value,
      activeColor: a.props.titleActiveColor,
      inactiveColor: a.props.titleInactiveColor,
      onClick: (P) => m(l.proxy, c.value, P)
    }, Ie(a.props, ["type", "color", "shrink"]), Ie(e, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
      title: t.title
    }), y = S(!u.value);
    return J(u, (m) => {
      m ? y.value = !1 : Ke(() => {
        y.value = !0;
      });
    }), J(() => e.title, () => {
      a.setLine(), a.scrollIntoView();
    }), ot(Ro, u), ye({
      id: n,
      renderTitle: v
    }), () => {
      var m;
      const P = `${a.id}-${c.value}`, {
        animated: A,
        swipeable: x,
        scrollspy: I,
        lazyRender: M
      } = a.props;
      if (!t.default && !A)
        return;
      const z = I || u.value;
      if (A || x)
        return d(ti, {
          id: n,
          role: "tabpanel",
          class: Xt("panel-wrapper", {
            inactive: y.value
          }),
          tabindex: u.value ? 0 : -1,
          "aria-hidden": !u.value,
          "aria-labelledby": P
        }, {
          default: () => {
            var q;
            return [d("div", {
              class: Xt("panel")
            }, [(q = t.default) == null ? void 0 : q.call(t)])];
          }
        });
      const H = o.value || I || !M ? (m = t.default) == null ? void 0 : m.call(t) : null;
      return cn(d("div", {
        id: n,
        role: "tabpanel",
        class: Xt("panel"),
        tabindex: z ? 0 : -1,
        "aria-labelledby": P
      }, [H]), [[sn, z]]);
    };
  }
});
const li = ce(ai), ii = ce(Fl), [Jo, Ut] = W("picker-group"), Mo = Symbol(Jo), ri = re({
  tabs: et(),
  activeTab: le(0),
  nextStepText: String
}, Bt);
Q({
  name: Jo,
  props: ri,
  emits: ["confirm", "cancel", "update:activeTab"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = Il(() => e.activeTab, (u) => t("update:activeTab", u)), {
      children: l,
      linkChildren: a
    } = it(Mo);
    a();
    const c = () => +o.value < e.tabs.length - 1 && e.nextStepText, r = () => {
      c() ? o.value = +o.value + 1 : t("confirm", l.map((u) => u.confirm()));
    }, i = () => t("cancel");
    return () => {
      var u;
      const s = (u = n.default) == null ? void 0 : u.call(n), g = c() ? e.nextStepText : e.confirmButtonText;
      return d("div", {
        class: Ut()
      }, [d(xo, {
        title: e.title,
        cancelButtonText: e.cancelButtonText,
        confirmButtonText: g,
        onConfirm: r,
        onCancel: i
      }, Ie(n, Io)), d(ii, {
        active: o.value,
        "onUpdate:active": (v) => o.value = v,
        class: Ut("tabs"),
        shrink: !0,
        animated: !0,
        lazyRender: !1
      }, {
        default: () => [e.tabs.map((v, y) => d(li, {
          title: v,
          titleClass: Ut("tab-title")
        }, {
          default: () => [s == null ? void 0 : s[y]]
        }))]
      })]);
    };
  }
});
const Zo = re({
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  optionHeight: le(44),
  showToolbar: V,
  swipeDuration: le(1e3),
  visibleOptionNum: le(6)
}, Bt), ci = re({}, Zo, {
  columns: et(),
  modelValue: et(),
  toolbarPosition: L("top"),
  columnsFieldNames: Object
});
var si = Q({
  name: Al,
  props: ci,
  emits: ["confirm", "cancel", "change", "scrollInto", "clickOption", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = S(), l = S(e.modelValue.slice(0)), {
      parent: a
    } = qe(Mo), {
      children: c,
      linkChildren: r
    } = it(So);
    r();
    const i = E(() => kl(e.columnsFieldNames)), u = E(() => gn(e.optionHeight)), s = E(() => hl(e.columns, i.value)), g = E(() => {
      const {
        columns: h
      } = e;
      switch (s.value) {
        case "multiple":
          return h;
        case "cascade":
          return yl(h, i.value, l);
        default:
          return [h];
      }
    }), v = E(() => g.value.some((h) => h.length)), y = E(() => g.value.map((h, O) => $t(h, l.value[O], i.value))), m = E(() => g.value.map((h, O) => h.findIndex((D) => D[i.value.value] === l.value[O]))), P = (h, O) => {
      if (l.value[h] !== O) {
        const D = l.value.slice(0);
        D[h] = O, l.value = D;
      }
    }, A = () => ({
      selectedValues: l.value.slice(0),
      selectedOptions: y.value,
      selectedIndexes: m.value
    }), x = (h, O) => {
      P(O, h), s.value === "cascade" && l.value.forEach((D, U) => {
        const k = g.value[U];
        Mn(k, D, i.value) || P(U, k.length ? k[0][i.value.value] : void 0);
      }), ne(() => {
        t("change", re({
          columnIndex: O
        }, A()));
      });
    }, I = (h, O) => {
      const D = {
        columnIndex: O,
        currentOption: h
      };
      t("clickOption", re(A(), D)), t("scrollInto", D);
    }, M = () => {
      c.forEach((O) => O.stopMomentum());
      const h = A();
      return ne(() => {
        t("confirm", h);
      }), h;
    }, z = () => t("cancel", A()), p = () => g.value.map((h, O) => d(Ol, {
      value: l.value[O],
      fields: i.value,
      options: h,
      readonly: e.readonly,
      allowHtml: e.allowHtml,
      optionHeight: u.value,
      swipeDuration: e.swipeDuration,
      visibleOptionNum: e.visibleOptionNum,
      onChange: (D) => x(D, O),
      onClickOption: (D) => I(D, O),
      onScrollInto: (D) => {
        t("scrollInto", {
          currentOption: D,
          columnIndex: O
        });
      }
    }, {
      option: n.option
    })), H = (h) => {
      if (v.value) {
        const O = {
          height: `${u.value}px`
        }, D = {
          backgroundSize: `100% ${(h - u.value) / 2}px`
        };
        return [d("div", {
          class: Ce("mask"),
          style: D
        }, null), d("div", {
          class: [Ba, Ce("frame")],
          style: O
        }, null)];
      }
    }, q = () => {
      const h = u.value * +e.visibleOptionNum, O = {
        height: `${h}px`
      };
      return d("div", {
        ref: o,
        class: Ce("columns"),
        style: O
      }, [p(), H(h)]);
    }, ee = () => {
      if (e.showToolbar && !a)
        return d(xo, fe(Ie(e, Sl), {
          onConfirm: M,
          onCancel: z
        }), Ie(n, Io));
    };
    J(g, (h) => {
      h.forEach((O, D) => {
        O.length && !Mn(O, l.value[D], i.value) && P(D, Oo(O)[i.value.value]);
      });
    }, {
      immediate: !0
    });
    let $;
    return J(() => e.modelValue, (h) => {
      !Jt(h, l.value) && !Jt(h, $) && (l.value = h.slice(0), $ = h.slice(0));
    }, {
      deep: !0
    }), J(l, (h) => {
      Jt(h, e.modelValue) || ($ = h.slice(0), t("update:modelValue", $));
    }, {
      immediate: !0
    }), ze("touchmove", xe, {
      target: o
    }), ye({
      confirm: M,
      getSelectedOptions: () => y.value
    }), () => {
      var h, O;
      return d("div", {
        class: Ce()
      }, [e.toolbarPosition === "top" ? ee() : null, e.loading ? d(ut, {
        class: Ce("loading")
      }, null) : null, (h = n["columns-top"]) == null ? void 0 : h.call(n), q(), (O = n["columns-bottom"]) == null ? void 0 : O.call(n), e.toolbarPosition === "bottom" ? ee() : null]);
    };
  }
});
const ui = ce(si), [di, Je] = W("cell"), Yo = {
  tag: L("div"),
  icon: String,
  size: String,
  title: Y,
  value: Y,
  label: Y,
  center: Boolean,
  isLink: Boolean,
  border: V,
  required: Boolean,
  iconPrefix: String,
  valueClass: je,
  labelClass: je,
  titleClass: je,
  titleStyle: null,
  arrowDirection: String,
  clickable: {
    type: Boolean,
    default: null
  }
}, fi = re({}, Yo, hn);
var vi = Q({
  name: di,
  props: fi,
  setup(e, {
    slots: t
  }) {
    const n = Ao(), o = () => {
      if (t.label || ae(e.label))
        return d("div", {
          class: [Je("label"), e.labelClass]
        }, [t.label ? t.label() : e.label]);
    }, l = () => {
      var i;
      if (t.title || ae(e.title)) {
        const u = (i = t.title) == null ? void 0 : i.call(t);
        return Array.isArray(u) && u.length === 0 ? void 0 : d("div", {
          class: [Je("title"), e.titleClass],
          style: e.titleStyle
        }, [u || d("span", null, [e.title]), o()]);
      }
    }, a = () => {
      const i = t.value || t.default;
      if (i || ae(e.value))
        return d("div", {
          class: [Je("value"), e.valueClass]
        }, [i ? i() : d("span", null, [e.value])]);
    }, c = () => {
      if (t.icon)
        return t.icon();
      if (e.icon)
        return d(Te, {
          name: e.icon,
          class: Je("left-icon"),
          classPrefix: e.iconPrefix
        }, null);
    }, r = () => {
      if (t["right-icon"])
        return t["right-icon"]();
      if (e.isLink) {
        const i = e.arrowDirection && e.arrowDirection !== "right" ? `arrow-${e.arrowDirection}` : "arrow";
        return d(Te, {
          name: i,
          class: Je("right-icon")
        }, null);
      }
    };
    return () => {
      var i;
      const {
        tag: u,
        size: s,
        center: g,
        border: v,
        isLink: y,
        required: m
      } = e, P = (i = e.clickable) != null ? i : y, A = {
        center: g,
        required: m,
        clickable: P,
        borderless: !v
      };
      return s && (A[s] = !!s), d(u, {
        class: Je(A),
        role: P ? "button" : void 0,
        tabindex: P ? 0 : void 0,
        onClick: n
      }, {
        default: () => {
          var x;
          return [c(), l(), a(), r(), (x = t.extra) == null ? void 0 : x.call(t)];
        }
      });
    };
  }
});
const gi = ce(vi);
function Xo(e) {
  return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e;
}
function mi(e, t) {
  if (Xo(e)) {
    if (t.required)
      return !1;
    if (t.validateEmpty === !1)
      return !0;
  }
  return !(t.pattern && !t.pattern.test(String(e)));
}
function Ai(e, t) {
  return new Promise((n) => {
    const o = t.validator(e, t);
    if (oo(o)) {
      o.then(n);
      return;
    }
    n(o);
  });
}
function Gn(e, t) {
  const { message: n } = t;
  return Dt(n) ? n(e, t) : n || "";
}
function hi({ target: e }) {
  e.composing = !0;
}
function Qn({ target: e }) {
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
function yi(e, t) {
  const n = fn();
  e.style.height = "auto";
  let o = e.scrollHeight;
  if (lt(t)) {
    const { maxHeight: l, minHeight: a } = t;
    l !== void 0 && (o = Math.min(o, l)), a !== void 0 && (o = Math.max(o, a));
  }
  o && (e.style.height = `${o}px`, vn(n));
}
function bi(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
function we(e) {
  return [...e].length;
}
function Gt(e, t) {
  return [...e].slice(0, t).join("");
}
const [ki, be] = W("field"), Pi = {
  id: String,
  name: String,
  leftIcon: String,
  rightIcon: String,
  autofocus: Boolean,
  clearable: Boolean,
  maxlength: Y,
  formatter: Function,
  clearIcon: L("clear"),
  modelValue: le(""),
  inputAlign: String,
  placeholder: String,
  autocomplete: String,
  autocapitalize: String,
  autocorrect: String,
  errorMessage: String,
  enterkeyhint: String,
  spellcheck: {
    type: Boolean,
    default: null
  },
  clearTrigger: L("focus"),
  formatTrigger: L("onChange"),
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
}, Oi = re({}, Yo, Pi, {
  rows: Y,
  type: L("text"),
  rules: Array,
  autosize: [Boolean, Object],
  labelWidth: Y,
  labelClass: je,
  labelAlign: String,
  showWordLimit: Boolean,
  errorMessageAlign: String,
  colon: {
    type: Boolean,
    default: null
  }
});
var Ei = Q({
  name: ki,
  props: Oi,
  emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = kn(), l = De({
      status: "unvalidated",
      focused: !1,
      validateMessage: ""
    }), a = S(), c = S(), r = S(), {
      parent: i
    } = qe(Ra), u = () => {
      var f;
      return String((f = e.modelValue) != null ? f : "");
    }, s = (f) => {
      if (ae(e[f]))
        return e[f];
      if (i && ae(i.props[f]))
        return i.props[f];
    }, g = E(() => {
      const f = s("readonly");
      if (e.clearable && !f) {
        const w = u() !== "", N = e.clearTrigger === "always" || e.clearTrigger === "focus" && l.focused;
        return w && N;
      }
      return !1;
    }), v = E(() => r.value && n.input ? r.value() : e.modelValue), y = (f) => f.reduce((w, N) => w.then(() => {
      if (l.status === "failed")
        return;
      let {
        value: Z
      } = v;
      if (N.formatter && (Z = N.formatter(Z, N)), !mi(Z, N)) {
        l.status = "failed", l.validateMessage = Gn(Z, N);
        return;
      }
      if (N.validator)
        return Xo(Z) && N.validateEmpty === !1 ? void 0 : Ai(Z, N).then((F) => {
          F && typeof F == "string" ? (l.status = "failed", l.validateMessage = F) : F === !1 && (l.status = "failed", l.validateMessage = Gn(Z, N));
        });
    }), Promise.resolve()), m = () => {
      l.status = "unvalidated", l.validateMessage = "";
    }, P = () => t("endValidate", {
      status: l.status,
      message: l.validateMessage
    }), A = (f = e.rules) => new Promise((w) => {
      m(), f ? (t("startValidate"), y(f).then(() => {
        l.status === "failed" ? (w({
          name: e.name,
          message: l.validateMessage
        }), P()) : (l.status = "passed", w(), P());
      })) : w();
    }), x = (f) => {
      if (i && e.rules) {
        const {
          validateTrigger: w
        } = i.props, N = xn(w).includes(f), Z = e.rules.filter((F) => F.trigger ? xn(F.trigger).includes(f) : N);
        Z.length && A(Z);
      }
    }, I = (f) => {
      var w;
      const {
        maxlength: N
      } = e;
      if (ae(N) && we(f) > +N) {
        const Z = u();
        if (Z && we(Z) === +N)
          return Z;
        const F = (w = a.value) == null ? void 0 : w.selectionEnd;
        if (l.focused && F) {
          const te = [...f], ve = te.length - +N;
          return te.splice(F - ve, ve), te.join("");
        }
        return Gt(f, +N);
      }
      return f;
    }, M = (f, w = "onChange") => {
      const N = f;
      f = I(f);
      const Z = we(N) - we(f);
      if (e.type === "number" || e.type === "digit") {
        const te = e.type === "number";
        f = xa(f, te, te);
      }
      let F = 0;
      if (e.formatter && w === e.formatTrigger) {
        const {
          formatter: te,
          maxlength: ve
        } = e;
        if (f = te(f), ae(ve) && we(f) > +ve && (f = Gt(f, +ve)), a.value && l.focused) {
          const {
            selectionEnd: ft
          } = a.value, Sn = Gt(N, ft);
          F = we(te(Sn)) - we(Sn);
        }
      }
      if (a.value && a.value.value !== f)
        if (l.focused) {
          let {
            selectionStart: te,
            selectionEnd: ve
          } = a.value;
          if (a.value.value = f, ae(te) && ae(ve)) {
            const ft = we(f);
            Z ? (te -= Z, ve -= Z) : F && (te += F, ve += F), a.value.setSelectionRange(Math.min(te, ft), Math.min(ve, ft));
          }
        } else
          a.value.value = f;
      f !== e.modelValue && t("update:modelValue", f);
    }, z = (f) => {
      f.target.composing || M(f.target.value);
    }, p = () => {
      var f;
      return (f = a.value) == null ? void 0 : f.blur();
    }, H = () => {
      var f;
      return (f = a.value) == null ? void 0 : f.focus();
    }, q = () => {
      const f = a.value;
      e.type === "textarea" && e.autosize && f && yi(f, e.autosize);
    }, ee = (f) => {
      l.focused = !0, t("focus", f), ne(q), s("readonly") && p();
    }, $ = (f) => {
      l.focused = !1, M(u(), "onBlur"), t("blur", f), !s("readonly") && (x("onBlur"), ne(q), ha());
    }, b = (f) => t("clickInput", f), h = (f) => t("clickLeftIcon", f), O = (f) => t("clickRightIcon", f), D = (f) => {
      xe(f), t("update:modelValue", ""), t("clear", f);
    }, U = E(() => {
      if (typeof e.error == "boolean")
        return e.error;
      if (i && i.props.showError && l.status === "failed")
        return !0;
    }), k = E(() => {
      const f = s("labelWidth"), w = s("labelAlign");
      if (f && w !== "top")
        return {
          width: ge(f)
        };
    }), C = (f) => {
      f.keyCode === 13 && (!(i && i.props.submitOnEnter) && e.type !== "textarea" && xe(f), e.type === "search" && p()), t("keypress", f);
    }, R = () => e.id || `${o}-input`, G = () => l.status, ie = () => {
      const f = be("control", [s("inputAlign"), {
        error: U.value,
        custom: !!n.input,
        "min-height": e.type === "textarea" && !e.autosize
      }]);
      if (n.input)
        return d("div", {
          class: f,
          onClick: b
        }, [n.input()]);
      const w = {
        id: R(),
        ref: a,
        name: e.name,
        rows: e.rows !== void 0 ? +e.rows : void 0,
        class: f,
        disabled: s("disabled"),
        readonly: s("readonly"),
        autofocus: e.autofocus,
        placeholder: e.placeholder,
        autocomplete: e.autocomplete,
        autocapitalize: e.autocapitalize,
        autocorrect: e.autocorrect,
        enterkeyhint: e.enterkeyhint,
        spellcheck: e.spellcheck,
        "aria-labelledby": e.label ? `${o}-label` : void 0,
        onBlur: $,
        onFocus: ee,
        onInput: z,
        onClick: b,
        onChange: Qn,
        onKeypress: C,
        onCompositionend: Qn,
        onCompositionstart: hi
      };
      return e.type === "textarea" ? d("textarea", w, null) : d("input", fe(bi(e.type), w), null);
    }, _ = () => {
      const f = n["left-icon"];
      if (e.leftIcon || f)
        return d("div", {
          class: be("left-icon"),
          onClick: h
        }, [f ? f() : d(Te, {
          name: e.leftIcon,
          classPrefix: e.iconPrefix
        }, null)]);
    }, j = () => {
      const f = n["right-icon"];
      if (e.rightIcon || f)
        return d("div", {
          class: be("right-icon"),
          onClick: O
        }, [f ? f() : d(Te, {
          name: e.rightIcon,
          classPrefix: e.iconPrefix
        }, null)]);
    }, B = () => {
      if (e.showWordLimit && e.maxlength) {
        const f = we(u());
        return d("div", {
          class: be("word-limit")
        }, [d("span", {
          class: be("word-num")
        }, [f]), to("/"), e.maxlength]);
      }
    }, X = () => {
      if (i && i.props.showErrorMessage === !1)
        return;
      const f = e.errorMessage || l.validateMessage;
      if (f) {
        const w = n["error-message"], N = s("errorMessageAlign");
        return d("div", {
          class: be("error-message", N)
        }, [w ? w({
          message: f
        }) : f]);
      }
    }, se = () => {
      const f = s("labelWidth"), w = s("labelAlign"), N = s("colon") ? ":" : "";
      if (n.label)
        return [n.label(), N];
      if (e.label)
        return d("label", {
          id: `${o}-label`,
          for: n.input ? void 0 : R(),
          onClick: (Z) => {
            xe(Z), H();
          },
          style: w === "top" && f ? {
            width: ge(f)
          } : void 0
        }, [e.label + N]);
    }, T = () => [d("div", {
      class: be("body")
    }, [ie(), g.value && d(Te, {
      ref: c,
      name: e.clearIcon,
      class: be("clear")
    }, null), j(), n.button && d("div", {
      class: be("button")
    }, [n.button()])]), B(), X()];
    return ye({
      blur: p,
      focus: H,
      validate: A,
      formValue: v,
      resetValidation: m,
      getValidationStatus: G
    }), ot(ma, {
      customValue: r,
      resetValidation: m,
      validateWithTrigger: x
    }), J(() => e.modelValue, () => {
      M(u()), m(), x("onChange"), ne(q);
    }), Ee(() => {
      M(u(), e.formatTrigger), ne(q);
    }), ze("touchstart", D, {
      target: E(() => {
        var f;
        return (f = c.value) == null ? void 0 : f.$el;
      })
    }), () => {
      const f = s("disabled"), w = s("labelAlign"), N = _(), Z = () => {
        const F = se();
        return w === "top" ? [N, F].filter(Boolean) : F || [];
      };
      return d(gi, {
        size: e.size,
        class: be({
          error: U.value,
          disabled: f,
          [`label-${w}`]: w
        }),
        center: e.center,
        border: e.border,
        isLink: e.isLink,
        clickable: e.clickable,
        titleStyle: k.value,
        valueClass: be("value"),
        titleClass: [be("label", [w, {
          required: e.required
        }]), e.labelClass],
        arrowDirection: e.arrowDirection
      }, {
        icon: N && w !== "top" ? () => N : null,
        title: Z,
        value: T,
        extra: n.extra
      });
    };
  }
});
const Si = ce(Ei);
let Ve = 0;
function Ii(e) {
  e ? (Ve || document.body.classList.add("van-toast--unclickable"), Ve++) : Ve && (Ve--, Ve || document.body.classList.remove("van-toast--unclickable"));
}
const [xi, Me] = W("toast"), Ti = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay"], Di = {
  icon: String,
  show: Boolean,
  type: L("text"),
  overlay: Boolean,
  message: Y,
  iconSize: Y,
  duration: lo(2e3),
  position: L("middle"),
  teleport: [String, Object],
  wordBreak: String,
  className: je,
  iconPrefix: String,
  transition: L("van-fade"),
  loadingType: String,
  forbidClick: Boolean,
  overlayClass: je,
  overlayStyle: Object,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean
};
var Uo = Q({
  name: xi,
  props: Di,
  emits: ["update:show"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o, l = !1;
    const a = () => {
      const g = e.show && e.forbidClick;
      l !== g && (l = g, Ii(l));
    }, c = (g) => t("update:show", g), r = () => {
      e.closeOnClick && c(!1);
    }, i = () => clearTimeout(o), u = () => {
      const {
        icon: g,
        type: v,
        iconSize: y,
        iconPrefix: m,
        loadingType: P
      } = e;
      if (g || v === "success" || v === "fail")
        return d(Te, {
          name: g || v,
          size: y,
          class: Me("icon"),
          classPrefix: m
        }, null);
      if (v === "loading")
        return d(ut, {
          class: Me("loading"),
          size: y,
          type: P
        }, null);
    }, s = () => {
      const {
        type: g,
        message: v
      } = e;
      if (n.message)
        return d("div", {
          class: Me("text")
        }, [n.message()]);
      if (ae(v) && v !== "")
        return g === "html" ? d("div", {
          key: 0,
          class: Me("text"),
          innerHTML: String(v)
        }, null) : d("div", {
          class: Me("text")
        }, [v]);
    };
    return J(() => [e.show, e.forbidClick], a), J(() => [e.show, e.type, e.message, e.duration], () => {
      i(), e.show && e.duration > 0 && (o = setTimeout(() => {
        c(!1);
      }, e.duration));
    }), Ee(a), ln(a), () => d(bn, fe({
      class: [Me([e.position, e.wordBreak === "normal" ? "break-normal" : e.wordBreak, {
        [e.type]: !e.icon
      }]), e.className],
      lockScroll: !1,
      onClick: r,
      onClosed: i,
      "onUpdate:show": c
    }, Ie(e, Ti)), {
      default: () => [u(), s()]
    });
  }
});
function zi() {
  const e = De({
    show: !1
  }), t = (l) => {
    e.show = l;
  }, n = (l) => {
    re(e, l, { transitionAppear: !0 }), t(!0);
  }, o = () => t(!1);
  return ye({ open: n, close: o, toggle: t }), {
    open: n,
    close: o,
    state: e,
    toggle: t
  };
}
function wi(e) {
  const t = $o(e), n = document.createElement("div");
  return document.body.appendChild(n), {
    instance: t.mount(n),
    unmount() {
      t.unmount(), document.body.removeChild(n);
    }
  };
}
const Ci = {
  icon: "",
  type: "text",
  message: "",
  className: "",
  overlay: !1,
  onClose: void 0,
  onOpened: void 0,
  duration: 2e3,
  teleport: "body",
  iconSize: void 0,
  iconPrefix: void 0,
  position: "middle",
  transition: "van-fade",
  forbidClick: !1,
  loadingType: void 0,
  overlayClass: "",
  overlayStyle: void 0,
  closeOnClick: !1,
  closeOnClickOverlay: !1
};
let yt = [], ji = !1, Ln = re({}, Ci);
const Hi = /* @__PURE__ */ new Map();
function pi(e) {
  return lt(e) ? e : {
    message: e
  };
}
function Ni() {
  const {
    instance: e,
    unmount: t
  } = wi({
    setup() {
      const n = S(""), {
        open: o,
        state: l,
        close: a,
        toggle: c
      } = zi(), r = () => {
      }, i = () => d(Uo, fe(l, {
        onClosed: r,
        "onUpdate:show": c
      }), null);
      return J(n, (u) => {
        l.message = u;
      }), Be().render = i, {
        open: o,
        close: a,
        message: n
      };
    }
  });
  return e;
}
function Bi() {
  if (!yt.length || ji) {
    const e = Ni();
    yt.push(e);
  }
  return yt[yt.length - 1];
}
function qn(e = {}) {
  if (!at)
    return {};
  const t = Bi(), n = pi(e);
  return t.open(re({}, Ln, Hi.get(n.type || Ln.type), n)), t;
}
ce(Uo);
const [Ri, ue, He] = W("calendar"), Ji = (e) => He("monthTitle", e.getFullYear(), e.getMonth() + 1);
function _t(e, t) {
  const n = e.getFullYear(), o = t.getFullYear();
  if (n === o) {
    const l = e.getMonth(), a = t.getMonth();
    return l === a ? 0 : l > a ? 1 : -1;
  }
  return n > o ? 1 : -1;
}
function Ae(e, t) {
  const n = _t(e, t);
  if (n === 0) {
    const o = e.getDate(), l = t.getDate();
    return o === l ? 0 : o > l ? 1 : -1;
  }
  return n;
}
const wt = (e) => new Date(e), Fn = (e) => Array.isArray(e) ? e.map(wt) : wt(e);
function Pn(e, t) {
  const n = wt(e);
  return n.setDate(n.getDate() + t), n;
}
const en = (e) => Pn(e, -1), Go = (e) => Pn(e, 1), tn = () => {
  const e = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), e;
};
function Mi(e) {
  const t = e[0].getTime();
  return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1;
}
re({}, Zo, {
  modelValue: et(),
  filter: Function,
  formatter: {
    type: Function,
    default: (e, t) => t
  }
});
const Zi = (e, t) => 32 - new Date(e, t - 1, 32).getDate(), [Yi] = W("calendar-day");
var Xi = Q({
  name: Yi,
  props: {
    item: Pe(Object),
    color: String,
    index: Number,
    offset: lo(0),
    rowHeight: String
  },
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = E(() => {
      var i;
      const {
        item: u,
        index: s,
        color: g,
        offset: v,
        rowHeight: y
      } = e, m = {
        height: y
      };
      if (u.type === "placeholder")
        return m.width = "100%", m;
      if (s === 0 && (m.marginLeft = `${100 * v / 7}%`), g)
        switch (u.type) {
          case "end":
          case "start":
          case "start-end":
          case "multiple-middle":
          case "multiple-selected":
            m.background = g;
            break;
          case "middle":
            m.color = g;
            break;
        }
      return v + (((i = u.date) == null ? void 0 : i.getDate()) || 1) > 28 && (m.marginBottom = 0), m;
    }), l = () => {
      e.item.type !== "disabled" && t("click", e.item);
    }, a = () => {
      const {
        topInfo: i
      } = e.item;
      if (i || n["top-info"])
        return d("div", {
          class: ue("top-info")
        }, [n["top-info"] ? n["top-info"](e.item) : i]);
    }, c = () => {
      const {
        bottomInfo: i
      } = e.item;
      if (i || n["bottom-info"])
        return d("div", {
          class: ue("bottom-info")
        }, [n["bottom-info"] ? n["bottom-info"](e.item) : i]);
    }, r = () => {
      const {
        item: i,
        color: u,
        rowHeight: s
      } = e, {
        type: g,
        text: v
      } = i, y = [a(), v, c()];
      return g === "selected" ? d("div", {
        class: ue("selected-day"),
        style: {
          width: s,
          height: s,
          background: u
        }
      }, [y]) : y;
    };
    return () => {
      const {
        type: i,
        className: u
      } = e.item;
      return i === "placeholder" ? d("div", {
        class: ue("day"),
        style: o.value
      }, null) : d("div", {
        role: "gridcell",
        style: o.value,
        class: [ue("day", i), u],
        tabindex: i === "disabled" ? void 0 : -1,
        onClick: l
      }, [r()]);
    };
  }
});
const [Ui] = W("calendar-month"), Gi = {
  date: Pe(Date),
  type: String,
  color: String,
  minDate: Pe(Date),
  maxDate: Pe(Date),
  showMark: Boolean,
  rowHeight: Y,
  formatter: Function,
  lazyRender: Boolean,
  currentDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: Boolean,
  showMonthTitle: Boolean,
  firstDayOfWeek: Number
};
var Qi = Q({
  name: Ui,
  props: Gi,
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const [o, l] = ca(), a = S(), c = S(), r = Ja(c), i = E(() => Ji(e.date)), u = E(() => ge(e.rowHeight)), s = E(() => {
      const b = e.date.getDay();
      return e.firstDayOfWeek ? (b + 7 - e.firstDayOfWeek) % 7 : b;
    }), g = E(() => Zi(e.date.getFullYear(), e.date.getMonth() + 1)), v = E(() => o.value || !e.lazyRender), y = () => i.value, m = (b) => {
      const h = (O) => e.currentDate.some((D) => Ae(D, O) === 0);
      if (h(b)) {
        const O = en(b), D = Go(b), U = h(O), k = h(D);
        return U && k ? "multiple-middle" : U ? "end" : k ? "start" : "multiple-selected";
      }
      return "";
    }, P = (b) => {
      const [h, O] = e.currentDate;
      if (!h)
        return "";
      const D = Ae(b, h);
      if (!O)
        return D === 0 ? "start" : "";
      const U = Ae(b, O);
      return e.allowSameDay && D === 0 && U === 0 ? "start-end" : D === 0 ? "start" : U === 0 ? "end" : D > 0 && U < 0 ? "middle" : "";
    }, A = (b) => {
      const {
        type: h,
        minDate: O,
        maxDate: D,
        currentDate: U
      } = e;
      if (Ae(b, O) < 0 || Ae(b, D) > 0)
        return "disabled";
      if (U === null)
        return "";
      if (Array.isArray(U)) {
        if (h === "multiple")
          return m(b);
        if (h === "range")
          return P(b);
      } else if (h === "single")
        return Ae(b, U) === 0 ? "selected" : "";
      return "";
    }, x = (b) => {
      if (e.type === "range") {
        if (b === "start" || b === "end")
          return He(b);
        if (b === "start-end")
          return `${He("start")}/${He("end")}`;
      }
    }, I = () => {
      if (e.showMonthTitle)
        return d("div", {
          class: ue("month-title")
        }, [n["month-title"] ? n["month-title"]({
          date: e.date,
          text: i.value
        }) : i.value]);
    }, M = () => {
      if (e.showMark && v.value)
        return d("div", {
          class: ue("month-mark")
        }, [e.date.getMonth() + 1]);
    }, z = E(() => {
      const b = Math.ceil((g.value + s.value) / 7);
      return Array(b).fill({
        type: "placeholder"
      });
    }), p = E(() => {
      const b = [], h = e.date.getFullYear(), O = e.date.getMonth();
      for (let D = 1; D <= g.value; D++) {
        const U = new Date(h, O, D), k = A(U);
        let C = {
          date: U,
          type: k,
          text: D,
          bottomInfo: x(k)
        };
        e.formatter && (C = e.formatter(C)), b.push(C);
      }
      return b;
    }), H = E(() => p.value.filter((b) => b.type === "disabled")), q = (b, h) => {
      if (a.value) {
        const O = he(a.value), D = z.value.length, k = (Math.ceil((h.getDate() + s.value) / 7) - 1) * O.height / D;
        zt(b, O.top + k + b.scrollTop - he(b).top);
      }
    }, ee = (b, h) => d(Xi, {
      item: b,
      index: h,
      color: e.color,
      offset: s.value,
      rowHeight: u.value,
      onClick: (O) => t("click", O)
    }, Ie(n, ["top-info", "bottom-info"])), $ = () => d("div", {
      ref: a,
      role: "grid",
      class: ue("days")
    }, [M(), (v.value ? p : z).value.map(ee)]);
    return ye({
      getTitle: y,
      getHeight: () => r.value,
      setVisible: l,
      scrollToDate: q,
      disabledDays: H
    }), () => d("div", {
      class: ue("month"),
      ref: c
    }, [I(), $()]);
  }
});
const [Li] = W("calendar-header");
var qi = Q({
  name: Li,
  props: {
    date: Date,
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number
  },
  emits: ["clickSubtitle"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const o = () => {
      if (e.showTitle) {
        const r = e.title || He("title"), i = t.title ? t.title() : r;
        return d("div", {
          class: ue("header-title")
        }, [i]);
      }
    }, l = (r) => n("clickSubtitle", r), a = () => {
      if (e.showSubtitle) {
        const r = t.subtitle ? t.subtitle({
          date: e.date,
          text: e.subtitle
        }) : e.subtitle;
        return d("div", {
          class: ue("header-subtitle"),
          onClick: l
        }, [r]);
      }
    }, c = () => {
      const {
        firstDayOfWeek: r
      } = e, i = He("weekdays"), u = [...i.slice(r, 7), ...i.slice(0, r)];
      return d("div", {
        class: ue("weekdays")
      }, [u.map((s) => d("span", {
        class: ue("weekday")
      }, [s]))]);
    };
    return () => d("div", {
      class: ue("header")
    }, [o(), a(), c()]);
  }
});
const Fi = {
  show: Boolean,
  type: L("single"),
  title: String,
  color: String,
  round: V,
  readonly: Boolean,
  poppable: V,
  maxRange: le(null),
  position: L("bottom"),
  teleport: [String, Object],
  showMark: V,
  showTitle: V,
  formatter: Function,
  rowHeight: Y,
  confirmText: String,
  rangePrompt: String,
  lazyRender: V,
  showConfirm: V,
  defaultDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: V,
  closeOnPopstate: V,
  showRangePrompt: V,
  confirmDisabledText: String,
  closeOnClickOverlay: V,
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: V,
  minDate: {
    type: Date,
    validator: Vt,
    default: tn
  },
  maxDate: {
    type: Date,
    validator: Vt,
    default: () => {
      const e = tn();
      return new Date(e.getFullYear(), e.getMonth() + 6, e.getDate());
    }
  },
  firstDayOfWeek: {
    type: Y,
    default: 0,
    validator: (e) => e >= 0 && e <= 6
  }
};
var Vi = Q({
  name: Ri,
  props: Fi,
  emits: ["select", "confirm", "unselect", "monthShow", "overRange", "update:show", "clickSubtitle"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = (k, C = e.minDate, R = e.maxDate) => Ae(k, C) === -1 ? C : Ae(k, R) === 1 ? R : k, l = (k = e.defaultDate) => {
      const {
        type: C,
        minDate: R,
        maxDate: G,
        allowSameDay: ie
      } = e;
      if (k === null)
        return k;
      const _ = tn();
      if (C === "range") {
        Array.isArray(k) || (k = []);
        const j = o(k[0] || _, R, ie ? G : en(G)), B = o(k[1] || _, ie ? R : Go(R));
        return [j, B];
      }
      return C === "multiple" ? Array.isArray(k) ? k.map((j) => o(j)) : [o(_)] : ((!k || Array.isArray(k)) && (k = _), o(k));
    };
    let a;
    const c = S(), r = S({
      text: "",
      date: void 0
    }), i = S(l()), [u, s] = Co(), g = E(() => e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0), v = E(() => {
      const k = [], C = new Date(e.minDate);
      C.setDate(1);
      do
        k.push(new Date(C)), C.setMonth(C.getMonth() + 1);
      while (_t(C, e.maxDate) !== 1);
      return k;
    }), y = E(() => {
      if (i.value) {
        if (e.type === "range")
          return !i.value[0] || !i.value[1];
        if (e.type === "multiple")
          return !i.value.length;
      }
      return !i.value;
    }), m = () => i.value, P = () => {
      const k = ct(c.value), C = k + a, R = v.value.map((B, X) => u.value[X].getHeight()), G = R.reduce((B, X) => B + X, 0);
      if (C > G && k > 0)
        return;
      let ie = 0, _;
      const j = [-1, -1];
      for (let B = 0; B < v.value.length; B++) {
        const X = u.value[B];
        ie <= C && ie + R[B] >= k && (j[1] = B, _ || (_ = X, j[0] = B), u.value[B].showed || (u.value[B].showed = !0, t("monthShow", {
          date: X.date,
          title: X.getTitle()
        }))), ie += R[B];
      }
      v.value.forEach((B, X) => {
        const se = X >= j[0] - 1 && X <= j[1] + 1;
        u.value[X].setVisible(se);
      }), _ && (r.value = {
        text: _.getTitle(),
        date: _.date
      });
    }, A = (k) => {
      pe(() => {
        v.value.some((C, R) => _t(C, k) === 0 ? (c.value && u.value[R].scrollToDate(c.value, k), !0) : !1), P();
      });
    }, x = () => {
      if (!(e.poppable && !e.show))
        if (i.value) {
          const k = e.type === "single" ? i.value : i.value[0];
          Vt(k) && A(k);
        } else
          pe(P);
    }, I = () => {
      e.poppable && !e.show || (pe(() => {
        a = Math.floor(he(c).height);
      }), x());
    }, M = (k = l()) => {
      i.value = k, x();
    }, z = (k) => {
      const {
        maxRange: C,
        rangePrompt: R,
        showRangePrompt: G
      } = e;
      return C && Mi(k) > +C ? (G && qn(R || He("rangePrompt", C)), t("overRange"), !1) : !0;
    }, p = () => {
      var k;
      return t("confirm", (k = i.value) != null ? k : Fn(i.value));
    }, H = (k, C) => {
      const R = (G) => {
        i.value = G, t("select", Fn(G));
      };
      if (C && e.type === "range" && !z(k)) {
        R([k[0], Pn(k[0], +e.maxRange - 1)]);
        return;
      }
      R(k), C && !e.showConfirm && p();
    }, q = (k, C, R) => {
      var G;
      return (G = k.find((ie) => Ae(C, ie.date) === -1 && Ae(ie.date, R) === -1)) == null ? void 0 : G.date;
    }, ee = E(() => u.value.reduce((k, C) => {
      var R, G;
      return k.push(...(G = (R = C.disabledDays) == null ? void 0 : R.value) != null ? G : []), k;
    }, [])), $ = (k) => {
      if (e.readonly || !k.date)
        return;
      const {
        date: C
      } = k, {
        type: R
      } = e;
      if (R === "range") {
        if (!i.value) {
          H([C]);
          return;
        }
        const [G, ie] = i.value;
        if (G && !ie) {
          const _ = Ae(C, G);
          if (_ === 1) {
            const j = q(ee.value, G, C);
            if (j) {
              const B = en(j);
              Ae(G, B) === -1 ? H([G, B]) : H([C]);
            } else
              H([G, C], !0);
          } else
            _ === -1 ? H([C]) : e.allowSameDay && H([C, C], !0);
        } else
          H([C]);
      } else if (R === "multiple") {
        if (!i.value) {
          H([C]);
          return;
        }
        const G = i.value, ie = G.findIndex((_) => Ae(_, C) === 0);
        if (ie !== -1) {
          const [_] = G.splice(ie, 1);
          t("unselect", wt(_));
        } else
          e.maxRange && G.length >= +e.maxRange ? qn(e.rangePrompt || He("rangePrompt", e.maxRange)) : H([...G, C]);
      } else
        H(C, !0);
    }, b = (k) => t("update:show", k), h = (k, C) => {
      const R = C !== 0 || !e.showSubtitle;
      return d(Qi, fe({
        ref: s(C),
        date: k,
        currentDate: i.value,
        showMonthTitle: R,
        firstDayOfWeek: g.value
      }, Ie(e, ["type", "color", "minDate", "maxDate", "showMark", "formatter", "rowHeight", "lazyRender", "showSubtitle", "allowSameDay"]), {
        onClick: $
      }), Ie(n, ["top-info", "bottom-info", "month-title"]));
    }, O = () => {
      if (n.footer)
        return n.footer();
      if (e.showConfirm) {
        const k = n["confirm-text"], C = y.value, R = C ? e.confirmDisabledText : e.confirmText;
        return d(yn, {
          round: !0,
          block: !0,
          type: "primary",
          color: e.color,
          class: ue("confirm"),
          disabled: C,
          nativeType: "button",
          onClick: p
        }, {
          default: () => [k ? k({
            disabled: C
          }) : R || He("confirm")]
        });
      }
    }, D = () => d("div", {
      class: [ue("footer"), {
        "van-safe-area-bottom": e.safeAreaInsetBottom
      }]
    }, [O()]), U = () => d("div", {
      class: ue()
    }, [d(qi, {
      date: r.value.date,
      title: e.title,
      subtitle: r.value.text,
      showTitle: e.showTitle,
      showSubtitle: e.showSubtitle,
      firstDayOfWeek: g.value,
      onClickSubtitle: (k) => t("clickSubtitle", k)
    }, Ie(n, ["title", "subtitle"])), d("div", {
      ref: c,
      class: ue("body"),
      onScroll: P
    }, [v.value.map(h)]), D()]);
    return J(() => e.show, I), J(() => [e.type, e.minDate, e.maxDate], () => M(l(i.value))), J(() => e.defaultDate, (k = null) => {
      i.value = k, x();
    }), ye({
      reset: M,
      scrollToDate: A,
      getSelectedDate: m
    }), rt(I), () => e.poppable ? d(bn, {
      show: e.show,
      class: ue("popup"),
      round: e.round,
      position: e.position,
      closeable: e.showTitle || e.showSubtitle,
      teleport: e.teleport,
      closeOnPopstate: e.closeOnPopstate,
      safeAreaInsetTop: e.safeAreaInsetTop,
      closeOnClickOverlay: e.closeOnClickOverlay,
      "onUpdate:show": b
    }, {
      default: U
    }) : U();
  }
});
const Wi = ce(Vi), [Qo, Ki] = W("row"), Lo = Symbol(Qo), $i = {
  tag: L("div"),
  wrap: V,
  align: String,
  gutter: le(0),
  justify: String
};
var _i = Q({
  name: Qo,
  props: $i,
  setup(e, {
    slots: t
  }) {
    const {
      children: n,
      linkChildren: o
    } = it(Lo), l = E(() => {
      const c = [[]];
      let r = 0;
      return n.forEach((i, u) => {
        r += Number(i.span), r > 24 ? (c.push([u]), r -= 24) : c[c.length - 1].push(u);
      }), c;
    }), a = E(() => {
      const c = Number(e.gutter), r = [];
      return c && l.value.forEach((i) => {
        const u = c * (i.length - 1) / i.length;
        i.forEach((s, g) => {
          if (g === 0)
            r.push({
              right: u
            });
          else {
            const v = c - r[s - 1].right, y = u - v;
            r.push({
              left: v,
              right: y
            });
          }
        });
      }), r;
    });
    return o({
      spaces: a
    }), () => {
      const {
        tag: c,
        wrap: r,
        align: i,
        justify: u
      } = e;
      return d(c, {
        class: Ki({
          [`align-${i}`]: i,
          [`justify-${u}`]: u,
          nowrap: !r
        })
      }, {
        default: () => {
          var s;
          return [(s = t.default) == null ? void 0 : s.call(t)];
        }
      });
    };
  }
});
const [er, tr] = W("col"), nr = {
  tag: L("div"),
  span: le(0),
  offset: Y
};
var or = Q({
  name: er,
  props: nr,
  setup(e, {
    slots: t
  }) {
    const {
      parent: n,
      index: o
    } = qe(Lo), l = E(() => {
      if (!n)
        return;
      const {
        spaces: a
      } = n;
      if (a && a.value && a.value[o.value]) {
        const {
          left: c,
          right: r
        } = a.value[o.value];
        return {
          paddingLeft: c ? `${c}px` : null,
          paddingRight: r ? `${r}px` : null
        };
      }
    });
    return () => {
      const {
        tag: a,
        span: c,
        offset: r
      } = e;
      return d(a, {
        style: l.value,
        class: tr({
          [c]: c,
          [`offset-${r}`]: r
        })
      }, {
        default: () => {
          var i;
          return [(i = t.default) == null ? void 0 : i.call(t)];
        }
      });
    };
  }
});
const Qt = ce(or), [ar, Ze, lr] = W("list"), ir = {
  error: Boolean,
  offset: le(300),
  loading: Boolean,
  disabled: Boolean,
  finished: Boolean,
  scroller: Object,
  errorText: String,
  direction: L("down"),
  loadingText: String,
  finishedText: String,
  immediateCheck: V
};
var rr = Q({
  name: ar,
  props: ir,
  emits: ["load", "update:error", "update:loading"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = S(e.loading), l = S(), a = S(), c = Vl(), r = Ht(l), i = E(() => e.scroller || r.value), u = () => {
      ne(() => {
        if (o.value || e.finished || e.disabled || e.error || // skip check when inside an inactive tab
        (c == null ? void 0 : c.value) === !1)
          return;
        const {
          direction: m
        } = e, P = +e.offset, A = he(i);
        if (!A.height || Ge(l))
          return;
        let x = !1;
        const I = he(a);
        m === "up" ? x = A.top - I.top <= P : x = I.bottom - A.bottom <= P, x && (o.value = !0, t("update:loading", !0), t("load"));
      });
    }, s = () => {
      if (e.finished) {
        const m = n.finished ? n.finished() : e.finishedText;
        if (m)
          return d("div", {
            class: Ze("finished-text")
          }, [m]);
      }
    }, g = () => {
      t("update:error", !1), u();
    }, v = () => {
      if (e.error) {
        const m = n.error ? n.error() : e.errorText;
        if (m)
          return d("div", {
            role: "button",
            class: Ze("error-text"),
            tabindex: 0,
            onClick: g
          }, [m]);
      }
    }, y = () => {
      if (o.value && !e.finished && !e.disabled)
        return d("div", {
          class: Ze("loading")
        }, [n.loading ? n.loading() : d(ut, {
          class: Ze("loading-icon")
        }, {
          default: () => [e.loadingText || lr("loading")]
        })]);
    };
    return J(() => [e.loading, e.finished, e.error], u), c && J(c, (m) => {
      m && u();
    }), _o(() => {
      o.value = e.loading;
    }), Ee(() => {
      e.immediateCheck && u();
    }), ye({
      check: u
    }), ze("scroll", u, {
      target: i,
      passive: !0
    }), () => {
      var m;
      const P = (m = n.default) == null ? void 0 : m.call(n), A = d("div", {
        ref: a,
        class: Ze("placeholder")
      }, null);
      return d("div", {
        ref: l,
        role: "feed",
        class: Ze(),
        "aria-busy": o.value
      }, [e.direction === "down" ? P : A, y(), s(), v(), e.direction === "up" ? P : A]);
    };
  }
});
const cr = ce(rr), [sr, We, ur] = W("pull-refresh"), qo = 50, dr = ["pulling", "loosing", "success"], fr = {
  disabled: Boolean,
  modelValue: Boolean,
  headHeight: le(qo),
  successText: String,
  pullingText: String,
  loosingText: String,
  loadingText: String,
  pullDistance: Y,
  successDuration: le(500),
  animationDuration: le(300)
};
var vr = Q({
  name: sr,
  props: fr,
  emits: ["change", "refresh", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o;
    const l = S(), a = S(), c = Ht(l), r = De({
      status: "normal",
      distance: 0,
      duration: 0
    }), i = Nt(), u = () => {
      if (e.headHeight !== qo)
        return {
          height: `${e.headHeight}px`
        };
    }, s = () => r.status !== "loading" && r.status !== "success" && !e.disabled, g = (z) => {
      const p = +(e.pullDistance || e.headHeight);
      return z > p && (z < p * 2 ? z = p + (z - p) / 2 : z = p * 1.5 + (z - p * 2) / 4), Math.round(z);
    }, v = (z, p) => {
      const H = +(e.pullDistance || e.headHeight);
      r.distance = z, p ? r.status = "loading" : z === 0 ? r.status = "normal" : z < H ? r.status = "pulling" : r.status = "loosing", t("change", {
        status: r.status,
        distance: z
      });
    }, y = () => {
      const {
        status: z
      } = r;
      return z === "normal" ? "" : e[`${z}Text`] || ur(z);
    }, m = () => {
      const {
        status: z,
        distance: p
      } = r;
      if (n[z])
        return n[z]({
          distance: p
        });
      const H = [];
      return dr.includes(z) && H.push(d("div", {
        class: We("text")
      }, [y()])), z === "loading" && H.push(d(ut, {
        class: We("loading")
      }, {
        default: y
      })), H;
    }, P = () => {
      r.status = "success", setTimeout(() => {
        v(0);
      }, +e.successDuration);
    }, A = (z) => {
      o = ct(c.value) === 0, o && (r.duration = 0, i.start(z));
    }, x = (z) => {
      s() && A(z);
    }, I = (z) => {
      if (s()) {
        o || A(z);
        const {
          deltaY: p
        } = i;
        i.move(z), o && p.value >= 0 && i.isVertical() && (xe(z), v(g(p.value)));
      }
    }, M = () => {
      o && i.deltaY.value && s() && (r.duration = +e.animationDuration, r.status === "loosing" ? (v(+e.headHeight, !0), t("update:modelValue", !0), ne(() => t("refresh"))) : v(0));
    };
    return J(() => e.modelValue, (z) => {
      r.duration = +e.animationDuration, z ? v(+e.headHeight, !0) : n.success || e.successText ? P() : v(0, !1);
    }), ze("touchmove", I, {
      target: a
    }), () => {
      var z;
      const p = {
        transitionDuration: `${r.duration}ms`,
        transform: r.distance ? `translate3d(0,${r.distance}px, 0)` : ""
      };
      return d("div", {
        ref: l,
        class: We()
      }, [d("div", {
        ref: a,
        class: We("track"),
        style: p,
        onTouchstartPassive: x,
        onTouchend: M,
        onTouchcancel: M
      }, [d("div", {
        class: We("head"),
        style: u()
      }, [m()]), (z = n.default) == null ? void 0 : z.call(n)])]);
    };
  }
});
const gr = ce(vr), mr = ce(_i);
const dt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, On = Q({
  name: "KvButton",
  components: { VanButton: yn },
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
    return { textcolor: E(() => `var(--van-button-${e.type}-background)`) };
  }
}), Vn = () => {
  no((e) => ({
    "094aed15": e.textcolor
  }));
}, Wn = On.setup;
On.setup = Wn ? (e, t) => (Vn(), Wn(e, t)) : Vn;
function Ar(e, t, n, o, l, a) {
  const c = Tt("van-button");
  return K(), Se(c, fe({
    type: e.type,
    class: { "is-link": e.link }
  }, e.$attrs), ea({
    loading: ke(() => [
      Oe(e.$slots, "loading", {}, void 0, !0)
    ]),
    default: ke(() => [
      Oe(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 2
  }, [
    e.$attrs.icon ? void 0 : {
      name: "icon",
      fn: ke(() => [
        Oe(e.$slots, "icon", {}, void 0, !0)
      ]),
      key: "0"
    }
  ]), 1040, ["type", "class"]);
}
const Pt = /* @__PURE__ */ dt(On, [["render", Ar], ["__scopeId", "data-v-36fadbb1"]]);
Pt.install = function(e) {
  e.component(Pt.name, Pt);
};
const hr = Q({
  name: "KvInput",
  components: { VanField: Si },
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
      inputValue: E({
        get: () => e.modelValue,
        set: (l) => t("update:modelValue", l)
      }),
      formatter: (l) => {
        if (e.type !== "number")
          return l;
        let a = l;
        a.substr(0, 1) === "0" && a.length === 2 && !a.includes(".") && (a = a.substr(1, a.length));
        const c = new RegExp(`[^0-9]{0,1}(\\d*(?:\\.\\d{0,${e.point}})?).*$`, "g");
        return a = a.replace(c, "$1") ?? "", Number(a) < e.min ? e.min : Number(a) > e.max ? e.max : a;
      }
    };
  }
}), yr = { class: "flex-center k-input" };
function br(e, t, n, o, l, a) {
  const c = Tt("van-field");
  return K(), de("div", yr, [
    me("span", null, Ne(e.prefix), 1),
    d(c, fe({
      modelValue: e.inputValue,
      "onUpdate:modelValue": t[0] || (t[0] = (r) => e.inputValue = r),
      type: e.type
    }, e.$attrs, { formatter: e.formatter }), null, 16, ["modelValue", "type", "formatter"]),
    me("span", null, Ne(e.suffix), 1)
  ]);
}
const Ot = /* @__PURE__ */ dt(hr, [["render", br]]);
Ot.install = function(e) {
  e.component(Ot.name, Ot);
};
const kr = Q({
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
    showOverflowTooltip: { type: Boolean, default: !1 },
    emptyText: { type: String, default: "暂无数据" }
  },
  emits: ["row-click"],
  setup(e, { emit: t }) {
    return { columnStyle: E(() => function(l) {
      const a = Number(l.width) ? `${l.width}px` : l.width;
      return [
        `text-align:${e.align}`,
        e.border ? "border-bottom: 1px solid #ebedf0;padding-bottom: 6px" : "",
        e.rowStyle,
        l.width ? `width: ${a}` : "flex: 1"
      ];
    }), clickRow: (l, a) => t("row-click", l, a) };
  }
}), Pr = { class: "k-table bg-white mt10 p20" }, Or = { class: "table-content" }, Er = { class: "table-body" }, Sr = { key: 1 }, Ir = {
  key: 0,
  class: "flex-center p20"
}, xr = { class: "color-99" };
function Tr(e, t, n, o, l, a) {
  return K(), de("div", Pr, [
    me("div", Or, [
      me("div", {
        class: "table-header flex",
        style: Rt(e.headerStyle)
      }, [
        (K(!0), de(Ye, null, bt(e.columns, (c) => (K(), de("div", {
          key: c.prop,
          class: "table-column",
          style: Rt(e.columnStyle(c))
        }, Ne(c.label), 5))), 128))
      ], 4),
      me("div", Er, [
        (K(!0), de(Ye, null, bt(e.data, (c, r) => (K(), de("div", {
          key: r,
          class: "flex table-column column-item flex-align-center"
        }, [
          (K(!0), de(Ye, null, bt(e.columns, (i) => (K(), de("div", {
            key: i.prop,
            style: Rt(e.columnStyle(i)),
            class: un({ "text-overflow": e.showOverflowTooltip })
          }, [
            e.$slots[(i == null ? void 0 : i.custom) ?? (i == null ? void 0 : i.prop)] ? Oe(e.$slots, i.custom ?? i.prop, {
              key: 0,
              row: c,
              index: r
            }, void 0, !0) : (K(), de("span", Sr, Ne(c[i.prop]), 1))
          ], 6))), 128))
        ]))), 128)),
        e.data.length ? _e("", !0) : (K(), de("div", Ir, [
          Oe(e.$slots, "empty", {}, () => [
            me("span", xr, Ne(e.emptyText), 1)
          ], !0)
        ]))
      ])
    ])
  ]);
}
const Et = /* @__PURE__ */ dt(kr, [["render", Tr], ["__scopeId", "data-v-a71233b4"]]);
Et.install = function(e) {
  e.component(Et.name, Et);
};
const En = Q({
  name: "KvTree",
  components: { VanIcon: Te },
  props: {
    modelValue: { type: Array, default: () => [] },
    depth: { type: Number, default: 0 },
    props: { type: Object, default: () => ({}) },
    theme: { type: String, default: "#f4364c" },
    select: { type: [String, Number], default: "" }
  },
  emits: ["update:modelValue", "update:select", "click", "change"],
  setup(e, { emit: t }) {
    const n = E({
      get: () => e.modelValue,
      set: (s) => t("update:modelValue", s)
    }), o = E(() => ({
      name: "name",
      id: "id",
      child: "child",
      disabled: "disabled",
      ...e.props
    })), l = (s) => (s.forEach((g) => {
      g.showChildren = !1, g[o.value.child] && l(g[o.value.child]);
    }), s), a = S(e.select), c = (s) => {
      s[o.value.disabled] || (s[o.value.child] && s.showChildren || (n.value = l(n.value)), s.showChildren = !s.showChildren, a.value = s[o.value.id], r(s));
    }, r = (s) => {
      t("update:select", s[o.value.id]), t("change", s), t("click", s);
    }, i = (s, g) => s.disabled ? "not-allowed" : s[o.value.id] === a.value ? {
      0: "first-depth c-white",
      1: "second-depth c-white",
      2: "third-depth c-white"
    }[g] : "", u = E(() => e.theme);
    return {
      list: n,
      clickItem: c,
      clickChild: r,
      getClassName: i,
      themecolor: u,
      deaultProps: o
    };
  }
}), Kn = () => {
  no((e) => ({
    "84edf3d6": e.themecolor
  }));
}, $n = En.setup;
En.setup = $n ? (e, t) => (Kn(), $n(e, t)) : Kn;
const Dr = { class: "k-tree" }, zr = ["onClick"], wr = { class: "flex-center flex1 tree-item-content" }, Cr = { class: "mr10" };
function jr(e, t, n, o, l, a) {
  const c = Tt("van-icon"), r = Tt("kv-tree");
  return K(), de("div", Dr, [
    (K(!0), de(Ye, null, bt(e.list, (i) => (K(), de(Ye, {
      key: i[e.deaultProps.id]
    }, [
      me("div", {
        class: un(["tree-item p10 flex-center", e.getClassName(i, e.depth)]),
        onClick: ta((u) => e.clickItem(i, e.depth), ["stop"])
      }, [
        Oe(e.$slots, "default", { row: i }, () => [
          me("div", wr, [
            me("span", Cr, Ne(i[e.deaultProps.name]), 1),
            i[e.deaultProps.child] ? (K(), Se(c, {
              key: 0,
              name: i.showChildren ? "arrow-up" : "arrow-down"
            }, null, 8, ["name"])) : _e("", !0)
          ])
        ], !0)
      ], 10, zr),
      i.showChildren && i[e.deaultProps.child] ? (K(), Se(r, {
        key: 0,
        modelValue: i[e.deaultProps.child],
        "onUpdate:modelValue": (u) => i[e.deaultProps.child] = u,
        props: e.deaultProps,
        theme: e.theme,
        depth: e.depth + 1,
        onClick: e.clickChild
      }, null, 8, ["modelValue", "onUpdate:modelValue", "props", "theme", "depth", "onClick"])) : _e("", !0)
    ], 64))), 128))
  ]);
}
const St = /* @__PURE__ */ dt(En, [["render", jr], ["__scopeId", "data-v-237747de"]]);
St.install = function(e) {
  e.component(St.name, St);
};
const Hr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAErCAYAAACB0AZQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YzEzNTQ5Ni0zOTE5LTk3NDEtYThhMy0xMDA3MDBiYTlhZDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Nzk0NTYxNzg1QjQyMTFFOTk0OEI4QzQxQkFCQTU3NEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Nzk0NTYxNzc1QjQyMTFFOTk0OEI4QzQxQkFCQTU3NEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjI1NTAxMzUtOGJhZi1kZDRlLThjNmMtNjNhYTIyODk1MGZjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Yzc2NDgxMjAtZWY5ZS00NTQyLWIxZTkt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", pr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAErCAYAAACB0AZQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YzEzNTQ5Ni0zOTE5LTk3NDEtYThhMy0xMDA3MDBiYTlhZDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODE4RUZGRTg1QTY1MTFFOTk3MUFGNjFBMEI1MDRCMjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODE4RUZGRTc1QTY1MTFFOTk3MUFGNjFBMEI1MDRCMjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OGZiNWQ1OTgtM2U4ZC05OTQ0LTk4ZGYtMzk3MmE2YjA4MTUzIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MGE2NTY3MWUtMmMyMy1lODRhLTk3OGEt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", Nr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAErCAYAAACB0AZQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YzEzNTQ5Ni0zOTE5LTk3NDEtYThhMy0xMDA3MDBiYTlhZDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkI1QkU3Qjg1QTY1MTFFOTgzNkRGOEVFRDJDRUZDNDMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkI1QkU3Qjc1QTY1MTFFOTgzNkRGOEVFRDJDRUZDNDMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGU5OGNmMmQtNTc5MS0xMTRjLTliMzYtMzQ4NzlkZjI1OGUyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjY5MDNkYjgtYmM5OC04MDRjLThhZTIt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";
const Br = Q({
  name: "KvStatus",
  props: {
    type: { type: String, default: "data" }
  },
  setup(e) {
    return { imgUrl: E(() => new URL((/* @__PURE__ */ Object.assign({ "./images/data.png": Hr, "./images/fail.png": pr, "./images/loading.png": Nr }))[`./images/${e.type}.png`], self.location).href) };
  }
}), Rr = { class: "kv-status flex-column" }, Jr = { class: "error-type flex-center" }, Mr = { class: "status-svg" }, Zr = ["src"], Yr = { class: "mt20 flex-center font-size16 status-text" };
function Xr(e, t, n, o, l, a) {
  return K(), de("div", Rr, [
    me("div", Jr, [
      Oe(e.$slots, "image", {}, () => [
        me("div", Mr, [
          me("img", {
            src: e.imgUrl,
            class: "status-image"
          }, null, 8, Zr)
        ])
      ], !0)
    ]),
    me("div", Yr, [
      Oe(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const Ue = /* @__PURE__ */ dt(Br, [["render", Xr], ["__scopeId", "data-v-4262cba6"]]);
Ue.install = function(e) {
  e.component(Ue.name, Ue);
};
const Ur = { class: "kv-list flex-column flex1" }, It = /* @__PURE__ */ Object.assign({
  name: "KvList"
}, {
  __name: "main",
  props: {
    modelValue: { type: Number, default: 1 },
    disabled: { type: Boolean, default: !1 },
    // 是否禁用下拉刷新
    finishedText: { type: String, default: "没有更多了" },
    // 加载完成的文字
    loadRequest: { type: Function, default: () => {
    } },
    // load回调
    responseNames: { type: Object, default: () => ({}) },
    // response参数说明
    refreshChange: { type: Function, default: () => {
    } }
    // 刷新的回调
  },
  setup(e, { expose: t }) {
    const n = e, o = S(!1), l = S(!1), a = S([]), c = S(1), r = S(!1), i = S(!1), u = S(!1), s = (m, P = {}) => {
      const x = { ...{ pageNo: "pageNo", totalPage: "totalPage", records: "records" }, ...n.responseNames };
      return P[x[m]];
    }, g = async () => {
      u.value && await n.refreshChange();
      const m = await n.loadRequest(c.value);
      u.value = !1, o.value = !1;
      const P = s("pageNo", m) ?? 1, A = s("totalPage", m) ?? 1, x = s("records", m) ?? [];
      a.value = c.value === 1 ? x : [...a.value, ...x], i.value = !a.value.length, P >= A && (l.value = !0), c.value++, r.value = !1;
    }, v = () => {
      c.value = 1, a.value = [], r.value = !0, i.value = !1, l.value = !1, o.value = !0, g();
    }, y = async () => {
      await n.refreshChange(), v();
    };
    return t({
      reset: v
    }), (m, P) => (K(), de("div", Ur, [
      d(oe(gr), {
        modelValue: u.value,
        "onUpdate:modelValue": P[1] || (P[1] = (A) => u.value = A),
        disabled: e.disabled,
        onRefresh: y,
        class: "kv-pull flex1"
      }, {
        default: ke(() => [
          o.value && (r.value || c.value === 1) ? (K(), Se(oe(Ue), {
            key: 0,
            type: "loading"
          }, {
            image: ke(() => [
              Oe(m.$slots, "loading")
            ]),
            _: 3
          })) : i.value ? (K(), Se(oe(Ue), { key: 1 }, {
            image: ke(() => [
              Oe(m.$slots, "empty")
            ]),
            _: 3
          })) : (K(), Se(oe(cr), fe({
            key: 2,
            loading: o.value,
            "onUpdate:loading": P[0] || (P[0] = (A) => o.value = A),
            finished: l.value,
            "finished-text": e.finishedText,
            onLoad: g
          }, m.$attrs), {
            default: ke(() => [
              Oe(m.$slots, "default", { list: a.value })
            ]),
            _: 3
          }, 16, ["loading", "finished", "finished-text"]))
        ]),
        _: 3
      }, 8, ["modelValue", "disabled"])
    ]));
  }
});
It.install = function(e) {
  e.component(It.name, It);
};
function nn(e) {
  return na() ? (oa(e), !0) : !1;
}
function on(e) {
  return typeof e == "function" ? e() : oe(e);
}
const an = typeof window < "u" && typeof document < "u", Gr = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Qr = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
function Lr(e, t, n, o) {
  let l = e < 12 ? "AM" : "PM";
  return o && (l = l.split("").reduce((a, c) => a += `${c}.`, "")), n ? l.toLowerCase() : l;
}
function qr(e, t, n = {}) {
  var o;
  const l = e.getFullYear(), a = e.getMonth(), c = e.getDate(), r = e.getHours(), i = e.getMinutes(), u = e.getSeconds(), s = e.getMilliseconds(), g = e.getDay(), v = (o = n.customMeridiem) != null ? o : Lr, y = {
    YY: () => String(l).slice(-2),
    YYYY: () => l,
    M: () => a + 1,
    MM: () => `${a + 1}`.padStart(2, "0"),
    MMM: () => e.toLocaleDateString(n.locales, { month: "short" }),
    MMMM: () => e.toLocaleDateString(n.locales, { month: "long" }),
    D: () => String(c),
    DD: () => `${c}`.padStart(2, "0"),
    H: () => String(r),
    HH: () => `${r}`.padStart(2, "0"),
    h: () => `${r % 12 || 12}`.padStart(1, "0"),
    hh: () => `${r % 12 || 12}`.padStart(2, "0"),
    m: () => String(i),
    mm: () => `${i}`.padStart(2, "0"),
    s: () => String(u),
    ss: () => `${u}`.padStart(2, "0"),
    SSS: () => `${s}`.padStart(3, "0"),
    d: () => g,
    dd: () => e.toLocaleDateString(n.locales, { weekday: "narrow" }),
    ddd: () => e.toLocaleDateString(n.locales, { weekday: "short" }),
    dddd: () => e.toLocaleDateString(n.locales, { weekday: "long" }),
    A: () => v(r, i),
    AA: () => v(r, i, !1, !0),
    a: () => v(r, i, !0),
    aa: () => v(r, i, !0, !0)
  };
  return t.replace(Qr, (m, P) => {
    var A, x;
    return (x = P ?? ((A = y[m]) == null ? void 0 : A.call(y))) != null ? x : m;
  });
}
function Fr(e) {
  if (e === null)
    return new Date(Number.NaN);
  if (e === void 0)
    return /* @__PURE__ */ new Date();
  if (e instanceof Date)
    return new Date(e);
  if (typeof e == "string" && !/Z$/i.test(e)) {
    const t = e.match(Gr);
    if (t) {
      const n = t[2] - 1 || 0, o = (t[7] || "0").substring(0, 3);
      return new Date(t[1], n, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o);
    }
  }
  return new Date(e);
}
function Lt(e, t = "HH:mm:ss", n = {}) {
  return E(() => qr(Fr(on(e)), on(t), n));
}
function Vr(e, t = 1e3, n = {}) {
  const {
    immediate: o = !0,
    immediateCallback: l = !1
  } = n;
  let a = null;
  const c = S(!1);
  function r() {
    a && (clearInterval(a), a = null);
  }
  function i() {
    c.value = !1, r();
  }
  function u() {
    const s = on(t);
    s <= 0 || (c.value = !0, l && e(), r(), a = setInterval(e, s));
  }
  if (o && an && u(), _n(t) || typeof t == "function") {
    const s = J(t, () => {
      c.value && an && u();
    });
    nn(s);
  }
  return nn(i), {
    isActive: c,
    pause: i,
    resume: u
  };
}
const Wr = an ? window : void 0;
function Kr(e, t = {}) {
  const {
    immediate: n = !0,
    window: o = Wr
  } = t, l = S(!1);
  let a = 0, c = null;
  function r(s) {
    if (!l.value || !o)
      return;
    const g = s - (a || s);
    e({ delta: g, timestamp: s }), a = s, c = o.requestAnimationFrame(r);
  }
  function i() {
    !l.value && o && (l.value = !0, c = o.requestAnimationFrame(r));
  }
  function u() {
    l.value = !1, c != null && o && (o.cancelAnimationFrame(c), c = null);
  }
  return n && i(), nn(u), {
    isActive: aa(l),
    pause: u,
    resume: i
  };
}
function $r(e = {}) {
  const {
    controls: t = !1,
    interval: n = "requestAnimationFrame"
  } = e, o = S(/* @__PURE__ */ new Date()), l = () => o.value = /* @__PURE__ */ new Date(), a = n === "requestAnimationFrame" ? Kr(l, { immediate: !0 }) : Vr(l, n, { immediate: !0 });
  return t ? {
    now: o,
    ...a
  } : o;
}
function Fo(e, t) {
  var v;
  const n = (v = Lt($r(), "YYYY-MM-DD")) == null ? void 0 : v.value, o = S(`${n} 00:00:00`), l = S(`${n} 23:59:59`), a = new Date((/* @__PURE__ */ new Date()).getTime() + 24 * 60 * 60 * 1e3), c = (y) => y && typeof y == "string" ? new Date(y) : y, r = (/* @__PURE__ */ new Date()).getFullYear(), i = new Date(r - 3, 1, 1), u = E(() => {
    const y = e.type ?? "range";
    if (y === "range") {
      const { startTime: m, endTime: P } = t.value || {};
      return [c(m) ?? /* @__PURE__ */ new Date(), c(P) ?? /* @__PURE__ */ new Date()];
    }
    return y === "multiple" ? null : c(t.value) ?? /* @__PURE__ */ new Date();
  });
  return {
    minDate: i,
    maxDate: a,
    initalDate: u,
    startData: o,
    endDate: l,
    useDateFormat: Lt,
    formarData: (y, m = "YYYY-MM-DD HH:mm:ss") => {
      var P;
      return (P = Lt(y, m)) == null ? void 0 : P.value;
    },
    formatter: (y) => ((/* @__PURE__ */ new Date()).getTime() === new Date(y.date).getTime() && (y.type = "disabled"), y),
    setStringToDate: c
  };
}
const _r = { class: "edit-content" }, ec = { class: "left-icon" }, tc = ["value"], qt = {
  __name: "picker-edit",
  props: {
    modelValue: { type: [String, Date], default: "" },
    showFormat: { type: String, default: "YYYY-MM-DD" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { formarData: o, setStringToDate: l } = Fo(), a = dn(), c = E({
      get: () => n.modelValue ? o(l(n.modelValue), a.showFormat ?? n.showFormat) : "",
      set: (i) => t("update:modelValue", i)
    }), r = E(() => ({
      "picker-border": ["round-border", "border"].includes(a.shape),
      "picker-border-round": ["round-border", "round"].includes(a.shape)
    }));
    return (i, u) => (K(), de("div", fe({
      class: ["picker-edit flex-align-center flex", [r.value]]
    }, i.$attrs), [
      me("div", _r, [
        me("div", ec, [
          i.$attrs["show-icon"] ?? !0 ? (K(), Se(oe(Te), {
            key: 0,
            name: "underway-o"
          })) : _e("", !0)
        ])
      ]),
      me("input", {
        class: "edit-control",
        value: c.value,
        disabled: "",
        placeholder: "开始时间"
      }, null, 8, tc)
    ], 16));
  }
};
const nc = { class: "date-shortcuts mr10 flex-shrink" }, oc = {
  __name: "shortcuts",
  props: {
    shortcutsValue: { type: Number, default: -1 }
  },
  emits: ["confirm", "change"],
  setup(e, { emit: t }) {
    const n = e, o = S(!1), l = [
      { text: "昨天", value: 1 },
      { text: "今天", value: 0 },
      { text: "近7天", value: 7 },
      { text: "近一个月", value: 30 },
      { text: "近3个月", value: 90 }
    ], a = dn(), c = E(() => ["round", "round-border"].includes(a.shape)), r = E(() => ["round", "default"].includes(a.shape)), i = S("选择范围");
    Ee(() => {
      const s = l.find((g) => g.value === n.shortcutsValue);
      s && (i.value = s.text, u({ selectedValues: [s.value], selectedOptions: [s] }));
    });
    const u = ({ selectedValues: s, selectedOptions: g }) => {
      const [v] = g;
      i.value = v.text, o.value = !1;
      const [y] = s, P = (/* @__PURE__ */ new Date()).getTime() - 3600 * 1e3 * 24 * y;
      t("confirm", { value: P, select: y });
    };
    return (s, g) => (K(), de("div", nc, [
      d(oe(yn), {
        round: c.value,
        onClick: g[0] || (g[0] = (v) => o.value = !0),
        class: un({ "bg-button": r.value })
      }, {
        default: ke(() => [
          to(Ne(i.value), 1)
        ]),
        _: 1
      }, 8, ["round", "class"]),
      d(oe(bn), {
        show: o.value,
        "onUpdate:show": g[2] || (g[2] = (v) => o.value = v),
        position: "bottom",
        "safe-area-inset-bottom": ""
      }, {
        default: ke(() => [
          d(oe(ui), {
            columns: l,
            onConfirm: u,
            onCancel: g[1] || (g[1] = (v) => o.value = !1)
          })
        ]),
        _: 1
      }, 8, ["show"])
    ]));
  }
}, ac = { class: "k-date-picker flex-align-center" }, xt = /* @__PURE__ */ Object.assign({
  name: "KvDatePicker"
}, {
  __name: "main",
  props: {
    modelValue: { type: [Object, String], default: () => ({}) },
    showShortcuts: { type: Boolean, default: !1 },
    shortcutsValue: { type: Number, default: -1 }
  },
  emits: ["update:modelValue", "confirm"],
  setup(e, { emit: t }) {
    const n = e, o = E({
      get: () => n.modelValue,
      set: (A) => t("update:modelValue", A)
    }), l = S(!1), a = dn(), c = E(() => a.type ?? "range"), {
      minDate: r,
      maxDate: i,
      initalDate: u,
      formarData: s,
      formatter: g,
      setStringToDate: v
    } = Fo(a, o), y = S(u.value), m = (A) => {
      const x = c.value, I = a.valueFormat ?? "YYYY-MM-DD HH:mm:ss";
      if (x === "range") {
        const M = s(A[0], I), z = I === "YYYY-MM-DD HH:mm:ss" ? `${s(A[1], "YYYY-MM-DD")} 23:59:59` : `${s(A[1], I)}`;
        o.value = { startTime: M, endTime: z }, y.value = [new Date(M), new Date(z)];
      } else if (x === "multiple") {
        const M = A.map((z) => `${s(z, I)}`);
        o.value = M, y.value = M;
      } else
        o.value = s(A, I), y.value = v(o.value);
      l.value = !1, ne(() => t("confirm", o.value));
    }, P = ({ value: A, select: x }) => {
      const I = `${s(A, "YYYY-MM-DD")} 00:00:00`, M = x === 1 ? I : `${s(/* @__PURE__ */ new Date(), "YYYY-MM-DD")} 23:59:00`;
      o.value = { startTime: I, endTime: M }, m([I, M]);
    };
    return (A, x) => (K(), de("div", ac, [
      e.showShortcuts && c.value === "range" ? (K(), Se(oc, fe({ key: 0 }, A.$attrs, {
        "shortcuts-value": e.shortcutsValue,
        onConfirm: P
      }), null, 16, ["shortcuts-value"])) : _e("", !0),
      ["single"].includes(A.$attrs.type) ? (K(), Se(qt, fe({ key: 1 }, A.$attrs, {
        modelValue: o.value,
        "onUpdate:modelValue": x[0] || (x[0] = (I) => o.value = I),
        onClick: x[1] || (x[1] = (I) => l.value = !0)
      }), null, 16, ["modelValue"])) : (K(), Se(oe(mr), {
        key: 2,
        justify: "space-between"
      }, {
        default: ke(() => [
          d(oe(Qt), {
            span: "11",
            class: "calendar-col",
            onClick: x[3] || (x[3] = (I) => l.value = !0)
          }, {
            default: ke(() => [
              d(qt, fe(A.$attrs, {
                modelValue: o.value.startTime,
                "onUpdate:modelValue": x[2] || (x[2] = (I) => o.value.startTime = I)
              }), null, 16, ["modelValue"])
            ]),
            _: 1
          }),
          d(oe(Qt), {
            span: "1",
            class: "calendar-line"
          }),
          d(oe(Qt), {
            span: "11",
            class: "calendar-col",
            onClick: x[5] || (x[5] = (I) => l.value = !0)
          }, {
            default: ke(() => [
              d(qt, fe({ placeholder: "结束日期" }, A.$attrs, {
                modelValue: o.value.endTime,
                "onUpdate:modelValue": x[4] || (x[4] = (I) => o.value.endTime = I)
              }), null, 16, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })),
      d(oe(Wi), fe({
        teleport: "body",
        class: "overflow",
        show: l.value,
        "onUpdate:show": x[6] || (x[6] = (I) => l.value = I),
        type: "range",
        onConfirm: m,
        "allow-same-day": "",
        "max-date": oe(i),
        "min-date": oe(r),
        formatter: oe(g),
        "safe-area-inset-bottom": "",
        "default-date": y.value
      }, A.$attrs), null, 16, ["show", "max-date", "min-date", "formatter", "default-date"])
    ]));
  }
});
xt.install = function(e) {
  e.component(xt.name, xt);
};
const Ft = {
  KvButton: Pt,
  KvInput: Ot,
  KvTable: Et,
  KvTree: St,
  KvList: It,
  KvStatus: Ue,
  KvDatePicker: xt,
  install: () => {
  }
};
function lc(e, t, n = 0) {
  return e.substr(n, t.length) === t;
}
Ft.install = function(e) {
  Object.keys(Ft).forEach((t) => {
    if (lc(t, "K")) {
      const n = Ft[t];
      e.component(n.name, n);
    }
  });
};
export {
  Ft as KVant,
  Pt as KvButton,
  xt as KvDatePicker,
  Ot as KvInput,
  It as KvList,
  Ue as KvStatus,
  Et as KvTable,
  St as KvTree
};
