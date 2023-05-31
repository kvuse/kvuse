import { inject as kt, getCurrentInstance as Ze, onUnmounted as nI, computed as z, ref as S, reactive as Oe, onMounted as Se, nextTick as te, onActivated as it, onDeactivated as Xe, isRef as KI, watch as h, unref as Ne, provide as nt, isVNode as VM, defineComponent as R, createVNode as l, onBeforeUnmount as vt, watchEffect as qI, mergeProps as De, Transition as eM, withDirectives as gI, vShow as uI, Teleport as XM, Fragment as Pe, onBeforeUpdate as HM, createTextVNode as tM, createApp as JM, onUpdated as FM, useCssVars as IM, resolveComponent as xe, openBlock as F, createBlock as Le, createSlots as _M, withCtx as je, renderSlot as Ee, createElementBlock as ae, createElementVNode as Ae, toDisplayString as Qe, normalizeStyle as Qt, renderList as dt, normalizeClass as cI, createCommentVNode as pe, withModifiers as $M, getCurrentScope as KM, onScopeDispose as qM, readonly as ei, useAttrs as NI } from "vue";
const ie = (e) => e != null, Et = (e) => typeof e == "function", gt = (e) => e !== null && typeof e == "object", MM = (e) => gt(e) && Et(e.then) && Et(e.catch), Jt = (e) => Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime()), iM = (e) => typeof e == "number" || /^\d+(\.\d+)?$/.test(e), ti = () => ut ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function Ii() {
}
const Ie = Object.assign, ut = typeof window < "u";
function LI(e, t) {
  const I = t.split(".");
  let M = e;
  return I.forEach((n) => {
    var i;
    M = gt(M) && (i = M[n]) != null ? i : "";
  }), M;
}
function ye(e, t, I) {
  return t.reduce((M, n) => ((!I || e[n] !== void 0) && (M[n] = e[n]), M), {});
}
const Zt = (e, t) => JSON.stringify(e) === JSON.stringify(t), zI = (e) => Array.isArray(e) ? e : [e], Ye = null, G = [Number, String], X = {
  type: Boolean,
  default: !0
}, we = (e) => ({
  type: e,
  required: !0
}), Mt = () => ({
  type: Array,
  default: () => []
}), nM = (e) => ({
  type: Number,
  default: e
}), ne = (e) => ({
  type: G,
  default: e
}), V = (e) => ({
  type: String,
  default: e
});
var He = typeof window < "u";
function be(e) {
  return He ? requestAnimationFrame(e) : -1;
}
function gM(e) {
  He && cancelAnimationFrame(e);
}
function et(e) {
  be(() => be(e));
}
var Mi = (e) => e === window, SI = (e, t) => ({
  top: 0,
  left: 0,
  right: e,
  bottom: t,
  width: e,
  height: t
}), de = (e) => {
  const t = Ne(e);
  if (Mi(t)) {
    const I = t.innerWidth, M = t.innerHeight;
    return SI(I, M);
  }
  return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : SI(0, 0);
};
function ii(e = !1) {
  const t = S(e);
  return [t, (M = !t.value) => {
    t.value = M;
  }];
}
function Je(e) {
  const t = kt(e, null);
  if (t) {
    const I = Ze(), { link: M, unlink: n, internalChildren: i } = t;
    M(I), nI(() => n(I));
    const c = z(() => i.indexOf(I));
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
function ni(e) {
  const t = [], I = (M) => {
    Array.isArray(M) && M.forEach((n) => {
      var i;
      VM(n) && (t.push(n), (i = n.component) != null && i.subTree && (t.push(n.component.subTree), I(n.component.subTree.children)), n.children && I(n.children));
    });
  };
  return I(e), t;
}
var EI = (e, t) => {
  const I = e.indexOf(t);
  return I === -1 ? e.findIndex(
    (M) => t.key !== void 0 && t.key !== null && M.type === t.type && M.key === t.key
  ) : I;
};
function gi(e, t, I) {
  const M = ni(e.subTree.children);
  I.sort(
    (i, c) => EI(M, i.vnode) - EI(M, c.vnode)
  );
  const n = I.map((i) => i.proxy);
  t.sort((i, c) => {
    const u = n.indexOf(i), g = n.indexOf(c);
    return u - g;
  });
}
function ct(e) {
  const t = Oe([]), I = Oe([]), M = Ze();
  return {
    children: t,
    linkChildren: (i) => {
      nt(
        e,
        Object.assign(
          {
            link: (g) => {
              g.proxy && (I.push(g), t.push(g.proxy), gi(M, t, I));
            },
            unlink: (g) => {
              const a = I.indexOf(g);
              t.splice(a, 1), I.splice(a, 1);
            },
            children: t,
            internalChildren: I
          },
          i
        )
      );
    }
  };
}
function Nt(e) {
  let t;
  Se(() => {
    e(), te(() => {
      t = !0;
    });
  }), it(() => {
    t && e();
  });
}
function ke(e, t, I = {}) {
  if (!He)
    return;
  const { target: M = window, passive: n = !1, capture: i = !1 } = I;
  let c = !1, u;
  const g = (o) => {
    if (c)
      return;
    const D = Ne(o);
    D && !u && (D.addEventListener(e, t, {
      capture: i,
      passive: n
    }), u = !0);
  }, a = (o) => {
    if (c)
      return;
    const D = Ne(o);
    D && u && (D.removeEventListener(e, t, i), u = !1);
  };
  nI(() => a(M)), Xe(() => a(M)), Nt(() => g(M));
  let N;
  return KI(M) && (N = h(M, (o, D) => {
    a(D), g(o);
  })), () => {
    N == null || N(), a(M), c = !0;
  };
}
var jt, Ut;
function ui() {
  if (!jt && (jt = S(0), Ut = S(0), He)) {
    const e = () => {
      jt.value = window.innerWidth, Ut.value = window.innerHeight;
    };
    e(), window.addEventListener("resize", e, { passive: !0 }), window.addEventListener("orientationchange", e, { passive: !0 });
  }
  return { width: jt, height: Ut };
}
var ci = /scroll|auto|overlay/i, uM = He ? window : void 0;
function Ni(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function cM(e, t = uM) {
  let I = e;
  for (; I && I !== t && Ni(I); ) {
    const { overflowY: M } = window.getComputedStyle(I);
    if (ci.test(M))
      return I;
    I = I.parentNode;
  }
  return t;
}
function ft(e, t = uM) {
  const I = S();
  return Se(() => {
    e.value && (I.value = cM(e.value, t));
  }), I;
}
var st;
function ai() {
  if (!st && (st = S("visible"), He)) {
    const e = () => {
      st.value = document.hidden ? "hidden" : "visible";
    };
    e(), window.addEventListener("visibilitychange", e);
  }
  return st;
}
var li = Symbol("van-field");
function at(e) {
  const t = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(t, 0);
}
function mt(e, t) {
  "scrollTop" in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t);
}
function aI() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function lI(e) {
  mt(window, e), mt(document.body, e);
}
function mI(e, t) {
  if (e === window)
    return 0;
  const I = t ? at(t) : aI();
  return de(e).top + I;
}
const Di = ti();
function oi() {
  Di && lI(aI());
}
const ji = (e) => e.stopPropagation();
function ze(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && ji(e);
}
function Ve(e) {
  const t = Ne(e);
  if (!t)
    return !1;
  const I = window.getComputedStyle(t), M = I.display === "none", n = t.offsetParent === null && I.position !== "fixed";
  return M || n;
}
const { width: lt, height: Yt } = ui();
function se(e) {
  if (ie(e))
    return iM(e) ? `${e}px` : String(e);
}
function si(e) {
  if (ie(e)) {
    if (Array.isArray(e))
      return {
        width: se(e[0]),
        height: se(e[1])
      };
    const t = se(e);
    return {
      width: t,
      height: t
    };
  }
}
function NM(e) {
  const t = {};
  return e !== void 0 && (t.zIndex = +e), t;
}
let ht;
function Ti() {
  if (!ht) {
    const e = document.documentElement, t = e.style.fontSize || window.getComputedStyle(e).fontSize;
    ht = parseFloat(t);
  }
  return ht;
}
function ri(e) {
  return e = e.replace(/rem/g, ""), +e * Ti();
}
function Ai(e) {
  return e = e.replace(/vw/g, ""), +e * lt.value / 100;
}
function di(e) {
  return e = e.replace(/vh/g, ""), +e * Yt.value / 100;
}
function DI(e) {
  if (typeof e == "number")
    return e;
  if (ut) {
    if (e.includes("rem"))
      return ri(e);
    if (e.includes("vw"))
      return Ai(e);
    if (e.includes("vh"))
      return di(e);
  }
  return parseFloat(e);
}
const Ci = /-(\w)/g, aM = (e) => e.replace(Ci, (t, I) => I.toUpperCase()), yi = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, ""), Re = (e, t, I) => Math.min(Math.max(e, t), I);
function OI(e, t, I) {
  const M = e.indexOf(t);
  return M === -1 ? e : t === "-" && M !== 0 ? e.slice(0, M) : e.slice(0, M + 1) + e.slice(M).replace(I, "");
}
function wi(e, t = !0, I = !0) {
  t ? e = OI(e, ".", /\./g) : e = e.split(".")[0], I ? e = OI(e, "-", /-/g) : e = e.replace(/-/, "");
  const M = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(M, "");
}
const { hasOwnProperty: Li } = Object.prototype;
function zi(e, t, I) {
  const M = t[I];
  ie(M) && (!Li.call(e, I) || !gt(M) ? e[I] = M : e[I] = lM(Object(e[I]), M));
}
function lM(e, t) {
  return Object.keys(t).forEach((I) => {
    zi(e, t, I);
  }), e;
}
var Si = {
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
const kI = S("zh-CN"), vI = Oe({
  "zh-CN": Si
}), Ei = {
  messages() {
    return vI[kI.value];
  },
  use(e, t) {
    kI.value = e, this.add({ [e]: t });
  },
  add(e = {}) {
    lM(vI, e);
  }
};
var mi = Ei;
function Oi(e) {
  const t = aM(e) + ".";
  return (I, ...M) => {
    const n = mi.messages(), i = LI(n, t + I) || LI(n, I);
    return Et(i) ? i(...M) : i;
  };
}
function Ft(e, t) {
  return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce(
    (I, M) => I + Ft(e, M),
    ""
  ) : Object.keys(t).reduce(
    (I, M) => I + (t[M] ? Ft(e, M) : ""),
    ""
  ) : "";
}
function ki(e) {
  return (t, I) => (t && typeof t != "string" && (I = t, t = ""), t = t ? `${e}__${t}` : e, `${t}${Ft(t, I)}`);
}
function _(e) {
  const t = `van-${e}`;
  return [
    t,
    ki(t),
    Oi(t)
  ];
}
const oI = "van-hairline", vi = `${oI}--surround`, fi = `${oI}--top-bottom`, Yi = `${oI}-unset--top-bottom`, _t = "van-haptics-feedback", Bi = Symbol("van-form");
function DM(e, {
  args: t = [],
  done: I,
  canceled: M
}) {
  if (e) {
    const n = e.apply(null, t);
    MM(n) ? n.then((i) => {
      i ? I() : M && M();
    }).catch(Ii) : n ? I() : M && M();
  } else
    I();
}
function ge(e) {
  return e.install = (t) => {
    const { name: I } = e;
    I && (t.component(I, e), t.component(aM(`-${I}`), e));
  }, e;
}
const oM = Symbol();
function jI(e) {
  const t = kt(oM, null);
  t && h(t, (I) => {
    I && e();
  });
}
const xi = (e, t) => {
  const I = S(), M = () => {
    I.value = de(e).height;
  };
  return Se(() => {
    if (te(M), t)
      for (let n = 1; n <= 3; n++)
        setTimeout(M, 100 * n);
  }), jI(() => te(M)), h([lt, Yt], M), I;
};
function Te(e) {
  const t = Ze();
  t && Ie(t.proxy, e);
}
const sI = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
function jM({
  to: e,
  url: t,
  replace: I,
  $router: M
}) {
  e && M ? M[I ? "replace" : "push"](e) : t && (I ? location.replace(t) : location.href = t);
}
function sM() {
  const e = Ze().proxy;
  return () => jM(e);
}
const [bi, fI] = _("badge"), Qi = {
  dot: Boolean,
  max: G,
  tag: V("div"),
  color: String,
  offset: Array,
  content: G,
  showZero: X,
  position: V("top-right")
};
var Zi = R({
  name: bi,
  props: Qi,
  setup(e, {
    slots: t
  }) {
    const I = () => {
      if (t.content)
        return !0;
      const {
        content: u,
        showZero: g
      } = e;
      return ie(u) && u !== "" && (g || u !== 0 && u !== "0");
    }, M = () => {
      const {
        dot: u,
        max: g,
        content: a
      } = e;
      if (!u && I())
        return t.content ? t.content() : ie(g) && iM(a) && +a > +g ? `${g}+` : a;
    }, n = (u) => u.startsWith("-") ? u.replace("-", "") : `-${u}`, i = z(() => {
      const u = {
        background: e.color
      };
      if (e.offset) {
        const [g, a] = e.offset, {
          position: N
        } = e, [o, D] = N.split("-");
        t.default ? (typeof a == "number" ? u[o] = se(o === "top" ? a : -a) : u[o] = o === "top" ? se(a) : n(a), typeof g == "number" ? u[D] = se(D === "left" ? g : -g) : u[D] = D === "left" ? se(g) : n(g)) : (u.marginTop = se(a), u.marginLeft = se(g));
      }
      return u;
    }), c = () => {
      if (I() || e.dot)
        return l("div", {
          class: fI([e.position, {
            dot: e.dot,
            fixed: !!t.default
          }]),
          style: i.value
        }, [M()]);
    };
    return () => {
      if (t.default) {
        const {
          tag: u
        } = e;
        return l(u, {
          class: fI("wrapper")
        }, {
          default: () => [t.default(), c()]
        });
      }
      return c();
    };
  }
});
const TM = ge(Zi);
let rM = 2e3;
const Ui = () => ++rM, hi = (e) => {
  rM = e;
}, [AM, Gi] = _("config-provider"), dM = Symbol(AM), Wi = {
  tag: V("div"),
  theme: V("light"),
  zIndex: Number,
  themeVars: Object,
  themeVarsDark: Object,
  themeVarsLight: Object,
  iconPrefix: String
};
function Pi(e) {
  const t = {};
  return Object.keys(e).forEach((I) => {
    t[`--van-${yi(I)}`] = e[I];
  }), t;
}
R({
  name: AM,
  props: Wi,
  setup(e, {
    slots: t
  }) {
    const I = z(() => Pi(Ie({}, e.themeVars, e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight)));
    if (ut) {
      const M = () => {
        document.documentElement.classList.add(`van-theme-${e.theme}`);
      }, n = (i = e.theme) => {
        document.documentElement.classList.remove(`van-theme-${i}`);
      };
      h(() => e.theme, (i, c) => {
        c && n(c), M();
      }, {
        immediate: !0
      }), it(M), Xe(n), vt(n);
    }
    return nt(dM, e), qI(() => {
      e.zIndex !== void 0 && hi(e.zIndex);
    }), () => l(e.tag, {
      class: Gi(),
      style: I.value
    }, {
      default: () => {
        var M;
        return [(M = t.default) == null ? void 0 : M.call(t)];
      }
    });
  }
});
const [Ri, YI] = _("icon"), pi = (e) => e == null ? void 0 : e.includes("/"), Vi = {
  dot: Boolean,
  tag: V("i"),
  name: String,
  size: G,
  badge: G,
  color: String,
  badgeProps: Object,
  classPrefix: String
};
var Xi = R({
  name: Ri,
  props: Vi,
  setup(e, {
    slots: t
  }) {
    const I = kt(dM, null), M = z(() => e.classPrefix || (I == null ? void 0 : I.iconPrefix) || YI());
    return () => {
      const {
        tag: n,
        dot: i,
        name: c,
        size: u,
        badge: g,
        color: a
      } = e, N = pi(c);
      return l(TM, De({
        dot: i,
        tag: n,
        class: [M.value, N ? "" : `${M.value}-${c}`],
        style: {
          color: a,
          fontSize: se(u)
        },
        content: g
      }, e.badgeProps), {
        default: () => {
          var o;
          return [(o = t.default) == null ? void 0 : o.call(t), N && l("img", {
            class: YI("image"),
            src: c
          }, null)];
        }
      });
    };
  }
});
const me = ge(Xi), [Hi, tt] = _("loading"), Ji = Array(12).fill(null).map((e, t) => l("i", {
  class: tt("line", String(t + 1))
}, null)), Fi = l("svg", {
  class: tt("circular"),
  viewBox: "25 25 50 50"
}, [l("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
}, null)]), _i = {
  size: G,
  type: V("circular"),
  color: String,
  vertical: Boolean,
  textSize: G,
  textColor: String
};
var $i = R({
  name: Hi,
  props: _i,
  setup(e, {
    slots: t
  }) {
    const I = z(() => Ie({
      color: e.color
    }, si(e.size))), M = () => {
      const i = e.type === "spinner" ? Ji : Fi;
      return l("span", {
        class: tt("spinner", e.type),
        style: I.value
      }, [t.icon ? t.icon() : i]);
    }, n = () => {
      var i;
      if (t.default)
        return l("span", {
          class: tt("text"),
          style: {
            fontSize: se(e.textSize),
            color: (i = e.textColor) != null ? i : e.color
          }
        }, [t.default()]);
    };
    return () => {
      const {
        type: i,
        vertical: c
      } = e;
      return l("div", {
        class: tt([i, {
          vertical: c
        }]),
        "aria-live": "polite",
        "aria-busy": !0
      }, [M(), n()]);
    };
  }
});
const Dt = ge($i), [Ki, Ue] = _("button"), qi = Ie({}, sI, {
  tag: V("button"),
  text: String,
  icon: String,
  type: V("default"),
  size: V("normal"),
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: V("button"),
  loadingSize: G,
  loadingText: String,
  loadingType: String,
  iconPosition: V("left")
});
var en = R({
  name: Ki,
  props: qi,
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    const M = sM(), n = () => I.loading ? I.loading() : l(Dt, {
      size: e.loadingSize,
      type: e.loadingType,
      class: Ue("loading")
    }, null), i = () => {
      if (e.loading)
        return n();
      if (I.icon)
        return l("div", {
          class: Ue("icon")
        }, [I.icon()]);
      if (e.icon)
        return l(me, {
          name: e.icon,
          class: Ue("icon"),
          classPrefix: e.iconPrefix
        }, null);
    }, c = () => {
      let a;
      if (e.loading ? a = e.loadingText : a = I.default ? I.default() : e.text, a)
        return l("span", {
          class: Ue("text")
        }, [a]);
    }, u = () => {
      const {
        color: a,
        plain: N
      } = e;
      if (a) {
        const o = {
          color: N ? a : "white"
        };
        return N || (o.background = a), a.includes("gradient") ? o.border = 0 : o.borderColor = a, o;
      }
    }, g = (a) => {
      e.loading ? ze(a) : e.disabled || (t("click", a), M());
    };
    return () => {
      const {
        tag: a,
        type: N,
        size: o,
        block: D,
        round: A,
        plain: d,
        square: L,
        loading: s,
        disabled: x,
        hairline: Y,
        nativeType: H,
        iconPosition: k
      } = e, T = [Ue([N, o, {
        plain: d,
        block: D,
        round: A,
        square: L,
        loading: s,
        disabled: x,
        hairline: Y
      }]), {
        [vi]: Y
      }];
      return l(a, {
        type: H,
        class: T,
        style: u(),
        disabled: x,
        onClick: g
      }, {
        default: () => [l("div", {
          class: Ue("content")
        }, [k === "left" && i(), c(), k === "right" && i()])]
      });
    };
  }
});
const TI = ge(en), tn = {
  // whether to show popup
  show: Boolean,
  // z-index
  zIndex: G,
  // whether to show overlay
  overlay: X,
  // transition duration
  duration: G,
  // teleport
  teleport: [String, Object],
  // prevent body scroll
  lockScroll: X,
  // whether to lazy render
  lazyRender: X,
  // callback function before close
  beforeClose: Function,
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: Ye,
  // Initial rendering animation
  transitionAppear: Boolean,
  // whether to close popup when overlay is clicked
  closeOnClickOverlay: X
};
function In(e, t) {
  return e > t ? "horizontal" : t > e ? "vertical" : "";
}
function Bt() {
  const e = S(0), t = S(0), I = S(0), M = S(0), n = S(0), i = S(0), c = S(""), u = () => c.value === "vertical", g = () => c.value === "horizontal", a = () => {
    I.value = 0, M.value = 0, n.value = 0, i.value = 0, c.value = "";
  };
  return {
    move: (D) => {
      const A = D.touches[0];
      I.value = (A.clientX < 0 ? 0 : A.clientX) - e.value, M.value = A.clientY - t.value, n.value = Math.abs(I.value), i.value = Math.abs(M.value);
      const d = 10;
      (!c.value || n.value < d && i.value < d) && (c.value = In(n.value, i.value));
    },
    start: (D) => {
      a(), e.value = D.touches[0].clientX, t.value = D.touches[0].clientY;
    },
    reset: a,
    startX: e,
    startY: t,
    deltaX: I,
    deltaY: M,
    offsetX: n,
    offsetY: i,
    direction: c,
    isVertical: u,
    isHorizontal: g
  };
}
let _e = 0;
const BI = "van-overflow-hidden";
function Mn(e, t) {
  const I = Bt(), M = "01", n = "10", i = (N) => {
    I.move(N);
    const o = I.deltaY.value > 0 ? n : M, D = cM(
      N.target,
      e.value
    ), { scrollHeight: A, offsetHeight: d, scrollTop: L } = D;
    let s = "11";
    L === 0 ? s = d >= A ? "00" : "01" : L + d >= A && (s = "10"), s !== "11" && I.isVertical() && !(parseInt(s, 2) & parseInt(o, 2)) && ze(N, !0);
  }, c = () => {
    document.addEventListener("touchstart", I.start), document.addEventListener("touchmove", i, { passive: !1 }), _e || document.body.classList.add(BI), _e++;
  }, u = () => {
    _e && (document.removeEventListener("touchstart", I.start), document.removeEventListener("touchmove", i), _e--, _e || document.body.classList.remove(BI));
  }, g = () => t() && c(), a = () => t() && u();
  Nt(g), Xe(a), vt(a), h(t, (N) => {
    N ? c() : u();
  });
}
function CM(e) {
  const t = S(!1);
  return h(
    e,
    (I) => {
      I && (t.value = I);
    },
    { immediate: !0 }
  ), (I) => () => t.value ? I() : null;
}
const [nn, gn] = _("overlay"), un = {
  show: Boolean,
  zIndex: G,
  duration: G,
  className: Ye,
  lockScroll: X,
  lazyRender: X,
  customStyle: Object
};
var cn = R({
  name: nn,
  props: un,
  setup(e, {
    slots: t
  }) {
    const I = S(), M = CM(() => e.show || !e.lazyRender), n = (c) => {
      e.lockScroll && ze(c, !0);
    }, i = M(() => {
      var c;
      const u = Ie(NM(e.zIndex), e.customStyle);
      return ie(e.duration) && (u.animationDuration = `${e.duration}s`), gI(l("div", {
        ref: I,
        style: u,
        class: [gn(), e.className]
      }, [(c = t.default) == null ? void 0 : c.call(t)]), [[uI, e.show]]);
    });
    return ke("touchmove", n, {
      target: I
    }), () => l(eM, {
      name: "van-fade",
      appear: !0
    }, {
      default: i
    });
  }
});
const Nn = ge(cn), an = Ie({}, tn, {
  round: Boolean,
  position: V("center"),
  closeIcon: V("cross"),
  closeable: Boolean,
  transition: String,
  iconPrefix: String,
  closeOnPopstate: Boolean,
  closeIconPosition: V("top-right"),
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: Boolean
}), [ln, xI] = _("popup");
var Dn = R({
  name: ln,
  inheritAttrs: !1,
  props: an,
  emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
  setup(e, {
    emit: t,
    attrs: I,
    slots: M
  }) {
    let n, i;
    const c = S(), u = S(), g = CM(() => e.show || !e.lazyRender), a = z(() => {
      const T = {
        zIndex: c.value
      };
      if (ie(e.duration)) {
        const b = e.position === "center" ? "animationDuration" : "transitionDuration";
        T[b] = `${e.duration}s`;
      }
      return T;
    }), N = () => {
      n || (n = !0, c.value = e.zIndex !== void 0 ? +e.zIndex : Ui(), t("open"));
    }, o = () => {
      n && DM(e.beforeClose, {
        done() {
          n = !1, t("close"), t("update:show", !1);
        }
      });
    }, D = (T) => {
      t("clickOverlay", T), e.closeOnClickOverlay && o();
    }, A = () => {
      if (e.overlay)
        return l(Nn, {
          show: e.show,
          class: e.overlayClass,
          zIndex: c.value,
          duration: e.duration,
          customStyle: e.overlayStyle,
          role: e.closeOnClickOverlay ? "button" : void 0,
          tabindex: e.closeOnClickOverlay ? 0 : void 0,
          onClick: D
        }, {
          default: M["overlay-content"]
        });
    }, d = (T) => {
      t("clickCloseIcon", T), o();
    }, L = () => {
      if (e.closeable)
        return l(me, {
          role: "button",
          tabindex: 0,
          name: e.closeIcon,
          class: [xI("close-icon", e.closeIconPosition), _t],
          classPrefix: e.iconPrefix,
          onClick: d
        }, null);
    }, s = () => t("opened"), x = () => t("closed"), Y = (T) => t("keydown", T), H = g(() => {
      var T;
      const {
        round: b,
        position: $,
        safeAreaInsetTop: Me,
        safeAreaInsetBottom: K
      } = e;
      return gI(l("div", De({
        ref: u,
        style: a.value,
        role: "dialog",
        tabindex: 0,
        class: [xI({
          round: b,
          [$]: $
        }), {
          "van-safe-area-top": Me,
          "van-safe-area-bottom": K
        }],
        onKeydown: Y
      }, I), [(T = M.default) == null ? void 0 : T.call(M), L()]), [[uI, e.show]]);
    }), k = () => {
      const {
        position: T,
        transition: b,
        transitionAppear: $
      } = e, Me = T === "center" ? "van-fade" : `van-popup-slide-${T}`;
      return l(eM, {
        name: b || Me,
        appear: $,
        onAfterEnter: s,
        onAfterLeave: x
      }, {
        default: H
      });
    };
    return h(() => e.show, (T) => {
      T && !n && (N(), I.tabindex === 0 && te(() => {
        var b;
        (b = u.value) == null || b.focus();
      })), !T && n && (n = !1, t("close"));
    }), Te({
      popupRef: u
    }), Mn(u, () => e.show && e.lockScroll), ke("popstate", () => {
      e.closeOnPopstate && (o(), i = !1);
    }), Se(() => {
      e.show && N();
    }), it(() => {
      i && (t("update:show", !0), i = !1);
    }), Xe(() => {
      e.show && e.teleport && (o(), i = !0);
    }), nt(oM, () => e.show), () => e.teleport ? l(XM, {
      to: e.teleport
    }, {
      default: () => [A(), k()]
    }) : l(Pe, null, [A(), k()]);
  }
});
const rI = ge(Dn), [on, fe, bI] = _("picker"), yM = (e) => e.find((t) => !t.disabled) || e[0];
function jn(e, t) {
  const I = e[0];
  if (I) {
    if (Array.isArray(I))
      return "multiple";
    if (t.children in I)
      return "cascade";
  }
  return "default";
}
function $t(e, t) {
  t = Re(t, 0, e.length);
  for (let I = t; I < e.length; I++)
    if (!e[I].disabled)
      return I;
  for (let I = t - 1; I >= 0; I--)
    if (!e[I].disabled)
      return I;
  return 0;
}
const QI = (e, t, I) => t !== void 0 && !!e.find((M) => M[I.value] === t);
function Kt(e, t, I) {
  const M = e.findIndex((i) => i[I.value] === t), n = $t(e, M);
  return e[n];
}
function sn(e, t, I) {
  const M = [];
  let n = {
    [t.children]: e
  }, i = 0;
  for (; n && n[t.children]; ) {
    const c = n[t.children], u = I.value[i];
    if (n = ie(u) ? Kt(c, u, t) : void 0, !n && c.length) {
      const g = yM(c)[t.value];
      n = Kt(c, g, t);
    }
    i++, M.push(c);
  }
  return M;
}
function Tn(e) {
  const { transform: t } = window.getComputedStyle(e), I = t.slice(7, t.length - 1).split(", ")[5];
  return Number(I);
}
function rn(e) {
  return Ie(
    {
      text: "text",
      value: "value",
      children: "children"
    },
    e
  );
}
const ZI = 200, UI = 300, An = 15, [wM, Gt] = _("picker-column"), LM = Symbol(wM);
var dn = R({
  name: wM,
  props: {
    value: G,
    fields: we(Object),
    options: Mt(),
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: we(Number),
    swipeDuration: we(G),
    visibleOptionNum: we(G)
  },
  emits: ["change", "clickOption", "scrollInto"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    let M, n, i, c, u;
    const g = S(), a = S(), N = S(0), o = S(0), D = Bt(), A = () => e.options.length, d = () => e.optionHeight * (+e.visibleOptionNum - 1) / 2, L = (y) => {
      const r = $t(e.options, y), w = -r * e.optionHeight, m = () => {
        const P = e.options[r][e.fields.value];
        P !== e.value && t("change", P);
      };
      M && w !== N.value ? u = m : m(), N.value = w;
    }, s = () => e.readonly || !e.options.length, x = (y) => {
      M || s() || (u = null, o.value = ZI, L(y), t("clickOption", e.options[y]));
    }, Y = (y) => Re(Math.round(-y / e.optionHeight), 0, A() - 1), H = z(() => Y(N.value)), k = (y, r) => {
      const w = Math.abs(y / r);
      y = N.value + w / 3e-3 * (y < 0 ? -1 : 1);
      const m = Y(y);
      o.value = +e.swipeDuration, L(m);
    }, T = () => {
      M = !1, o.value = 0, u && (u(), u = null);
    }, b = (y) => {
      if (!s()) {
        if (D.start(y), M) {
          const r = Tn(a.value);
          N.value = Math.min(0, r - d());
        }
        o.value = 0, n = N.value, i = Date.now(), c = n, u = null;
      }
    }, $ = (y) => {
      if (s())
        return;
      D.move(y), D.isVertical() && (M = !0, ze(y, !0));
      const r = Re(n + D.deltaY.value, -(A() * e.optionHeight), e.optionHeight), w = Y(r);
      w !== H.value && t("scrollInto", e.options[w]), N.value = r;
      const m = Date.now();
      m - i > UI && (i = m, c = r);
    }, Me = () => {
      if (s())
        return;
      const y = N.value - c, r = Date.now() - i;
      if (r < UI && Math.abs(y) > An) {
        k(y, r);
        return;
      }
      const m = Y(N.value);
      o.value = ZI, L(m), setTimeout(() => {
        M = !1;
      }, 0);
    }, K = () => {
      const y = {
        height: `${e.optionHeight}px`
      };
      return e.options.map((r, w) => {
        const m = r[e.fields.text], {
          disabled: P
        } = r, C = r[e.fields.value], v = {
          role: "button",
          style: y,
          tabindex: P ? -1 : 0,
          class: [Gt("item", {
            disabled: P,
            selected: C === e.value
          }), r.className],
          onClick: () => x(w)
        }, Z = {
          class: "van-ellipsis",
          [e.allowHtml ? "innerHTML" : "textContent"]: m
        };
        return l("li", v, [I.option ? I.option(r, w) : l("div", Z, null)]);
      });
    };
    return Je(LM), Te({
      stopMomentum: T
    }), qI(() => {
      const y = e.options.findIndex((m) => m[e.fields.value] === e.value), w = -$t(e.options, y) * e.optionHeight;
      N.value = w;
    }), ke("touchmove", $, {
      target: g
    }), () => l("div", {
      ref: g,
      class: Gt(),
      onTouchstartPassive: b,
      onTouchend: Me,
      onTouchcancel: Me
    }, [l("ul", {
      ref: a,
      style: {
        transform: `translate3d(0, ${N.value + d()}px, 0)`,
        transitionDuration: `${o.value}ms`,
        transitionProperty: o.value ? "all" : "none"
      },
      class: Gt("wrapper"),
      onTransitionend: T
    }, [K()])]);
  }
});
const [Cn] = _("picker-toolbar"), xt = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String
}, zM = ["cancel", "confirm", "title", "toolbar"], yn = Object.keys(xt);
var SM = R({
  name: Cn,
  props: xt,
  emits: ["confirm", "cancel"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    const M = () => {
      if (I.title)
        return I.title();
      if (e.title)
        return l("div", {
          class: [fe("title"), "van-ellipsis"]
        }, [e.title]);
    }, n = () => t("cancel"), i = () => t("confirm"), c = () => {
      const g = e.cancelButtonText || bI("cancel");
      return l("button", {
        type: "button",
        class: [fe("cancel"), _t],
        onClick: n
      }, [I.cancel ? I.cancel() : g]);
    }, u = () => {
      const g = e.confirmButtonText || bI("confirm");
      return l("button", {
        type: "button",
        class: [fe("confirm"), _t],
        onClick: i
      }, [I.confirm ? I.confirm() : g]);
    };
    return () => l("div", {
      class: fe("toolbar")
    }, [I.toolbar ? I.toolbar() : [c(), M(), u()]]);
  }
});
const wn = (e, t) => {
  const I = S(e());
  return h(e, (M) => {
    M !== I.value && (I.value = M);
  }), h(I, (M) => {
    M !== e() && t(M);
  }), I;
};
function Ln(e, t, I) {
  let M, n = 0;
  const i = e.scrollLeft, c = I === 0 ? 1 : Math.round(I * 1e3 / 16);
  function u() {
    gM(M);
  }
  function g() {
    e.scrollLeft += (t - i) / c, ++n < c && (M = be(g));
  }
  return g(), u;
}
function zn(e, t, I, M) {
  let n, i = at(e);
  const c = i < t, u = I === 0 ? 1 : Math.round(I * 1e3 / 16), g = (t - i) / u;
  function a() {
    gM(n);
  }
  function N() {
    i += g, (c && i > t || !c && i < t) && (i = t), mt(e, i), c && i < t || !c && i > t ? n = be(N) : M && (n = be(M));
  }
  return N(), a;
}
let Sn = 0;
function bt() {
  const e = Ze(), { name: t = "unknown" } = (e == null ? void 0 : e.type) || {};
  return process.env.NODE_ENV === "test" ? t : `${t}-${++Sn}`;
}
function EM() {
  const e = S([]), t = [];
  return HM(() => {
    e.value = [];
  }), [e, (M) => (t[M] || (t[M] = (n) => {
    e.value[M] = n;
  }), t[M])];
}
function mM(e, t) {
  if (!ut || !window.IntersectionObserver)
    return;
  const I = new IntersectionObserver(
    (i) => {
      t(i[0].intersectionRatio > 0);
    },
    { root: document.body }
  ), M = () => {
    e.value && I.observe(e.value);
  }, n = () => {
    e.value && I.unobserve(e.value);
  };
  Xe(n), vt(n), Nt(M);
}
const [En, mn] = _("sticky"), On = {
  zIndex: G,
  position: V("top"),
  container: Object,
  offsetTop: ne(0),
  offsetBottom: ne(0)
};
var kn = R({
  name: En,
  props: On,
  emits: ["scroll", "change"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    const M = S(), n = ft(M), i = Oe({
      fixed: !1,
      width: 0,
      // root width
      height: 0,
      // root height
      transform: 0
    }), c = S(!1), u = z(() => DI(e.position === "top" ? e.offsetTop : e.offsetBottom)), g = z(() => {
      if (c.value)
        return;
      const {
        fixed: D,
        height: A,
        width: d
      } = i;
      if (D)
        return {
          width: `${d}px`,
          height: `${A}px`
        };
    }), a = z(() => {
      if (!i.fixed || c.value)
        return;
      const D = Ie(NM(e.zIndex), {
        width: `${i.width}px`,
        height: `${i.height}px`,
        [e.position]: `${u.value}px`
      });
      return i.transform && (D.transform = `translate3d(0, ${i.transform}px, 0)`), D;
    }), N = (D) => t("scroll", {
      scrollTop: D,
      isFixed: i.fixed
    }), o = () => {
      if (!M.value || Ve(M))
        return;
      const {
        container: D,
        position: A
      } = e, d = de(M), L = at(window);
      if (i.width = d.width, i.height = d.height, A === "top")
        if (D) {
          const s = de(D), x = s.bottom - u.value - i.height;
          i.fixed = u.value > d.top && s.bottom > 0, i.transform = x < 0 ? x : 0;
        } else
          i.fixed = u.value > d.top;
      else {
        const {
          clientHeight: s
        } = document.documentElement;
        if (D) {
          const x = de(D), Y = s - x.top - u.value - i.height;
          i.fixed = s - u.value < d.bottom && s > x.top, i.transform = Y < 0 ? -Y : 0;
        } else
          i.fixed = s - u.value < d.bottom;
      }
      N(L);
    };
    return h(() => i.fixed, (D) => t("change", D)), ke("scroll", o, {
      target: n,
      passive: !0
    }), mM(M, o), h([lt, Yt], () => {
      !M.value || Ve(M) || !i.fixed || (c.value = !0, te(() => {
        const D = de(M);
        i.width = D.width, i.height = D.height, c.value = !1;
      }));
    }), () => {
      var D;
      return l("div", {
        ref: M,
        style: g.value
      }, [l("div", {
        class: mn({
          fixed: i.fixed && !c.value
        }),
        style: a.value
      }, [(D = I.default) == null ? void 0 : D.call(I)])]);
    };
  }
});
const vn = ge(kn), [OM, Tt] = _("swipe"), fn = {
  loop: X,
  width: G,
  height: G,
  vertical: Boolean,
  autoplay: ne(0),
  duration: ne(500),
  touchable: X,
  lazyRender: Boolean,
  initialSwipe: ne(0),
  indicatorColor: String,
  showIndicators: X,
  stopPropagation: X
}, kM = Symbol(OM);
var Yn = R({
  name: OM,
  props: fn,
  emits: ["change", "dragStart", "dragEnd"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    const M = S(), n = S(), i = Oe({
      rect: null,
      width: 0,
      height: 0,
      offset: 0,
      active: 0,
      swiping: !1
    });
    let c = !1;
    const u = Bt(), {
      children: g,
      linkChildren: a
    } = ct(kM), N = z(() => g.length), o = z(() => i[e.vertical ? "height" : "width"]), D = z(() => e.vertical ? u.deltaY.value : u.deltaX.value), A = z(() => i.rect ? (e.vertical ? i.rect.height : i.rect.width) - o.value * N.value : 0), d = z(() => o.value ? Math.ceil(Math.abs(A.value) / o.value) : N.value), L = z(() => N.value * o.value), s = z(() => (i.active + N.value) % N.value), x = z(() => {
      const f = e.vertical ? "vertical" : "horizontal";
      return u.direction.value === f;
    }), Y = z(() => {
      const f = {
        transitionDuration: `${i.swiping ? 0 : e.duration}ms`,
        transform: `translate${e.vertical ? "Y" : "X"}(${i.offset}px)`
      };
      if (o.value) {
        const Q = e.vertical ? "height" : "width", W = e.vertical ? "width" : "height";
        f[Q] = `${L.value}px`, f[W] = e[W] ? `${e[W]}px` : "";
      }
      return f;
    }), H = (f) => {
      const {
        active: Q
      } = i;
      return f ? e.loop ? Re(Q + f, -1, N.value) : Re(Q + f, 0, d.value) : Q;
    }, k = (f, Q = 0) => {
      let W = f * o.value;
      e.loop || (W = Math.min(W, -A.value));
      let ce = Q - W;
      return e.loop || (ce = Re(ce, A.value, 0)), ce;
    }, T = ({
      pace: f = 0,
      offset: Q = 0,
      emitChange: W
    }) => {
      if (N.value <= 1)
        return;
      const {
        active: ce
      } = i, E = H(f), j = k(E, Q);
      if (e.loop) {
        if (g[0] && j !== A.value) {
          const O = j < A.value;
          g[0].setOffset(O ? L.value : 0);
        }
        if (g[N.value - 1] && j !== 0) {
          const O = j > 0;
          g[N.value - 1].setOffset(O ? -L.value : 0);
        }
      }
      i.active = E, i.offset = j, W && E !== ce && t("change", s.value);
    }, b = () => {
      i.swiping = !0, i.active <= -1 ? T({
        pace: N.value
      }) : i.active >= N.value && T({
        pace: -N.value
      });
    }, $ = () => {
      b(), u.reset(), et(() => {
        i.swiping = !1, T({
          pace: -1,
          emitChange: !0
        });
      });
    }, Me = () => {
      b(), u.reset(), et(() => {
        i.swiping = !1, T({
          pace: 1,
          emitChange: !0
        });
      });
    };
    let K;
    const y = () => clearTimeout(K), r = () => {
      y(), +e.autoplay > 0 && N.value > 1 && (K = setTimeout(() => {
        Me(), r();
      }, +e.autoplay));
    }, w = (f = +e.initialSwipe) => {
      if (!M.value)
        return;
      const Q = () => {
        var W, ce;
        if (!Ve(M)) {
          const E = {
            width: M.value.offsetWidth,
            height: M.value.offsetHeight
          };
          i.rect = E, i.width = +((W = e.width) != null ? W : E.width), i.height = +((ce = e.height) != null ? ce : E.height);
        }
        N.value && (f = Math.min(N.value - 1, f), f === -1 && (f = N.value - 1)), i.active = f, i.swiping = !0, i.offset = k(f), g.forEach((E) => {
          E.setOffset(0);
        }), r();
      };
      Ve(M) ? te().then(Q) : Q();
    }, m = () => w(i.active);
    let P;
    const C = (f) => {
      !e.touchable || // avoid resetting position on multi-finger touch
      f.touches.length > 1 || (u.start(f), c = !1, P = Date.now(), y(), b());
    }, v = (f) => {
      e.touchable && i.swiping && (u.move(f), x.value && (!e.loop && (i.active === 0 && D.value > 0 || i.active === N.value - 1 && D.value < 0) || (ze(f, e.stopPropagation), T({
        offset: D.value
      }), c || (t("dragStart", {
        index: s.value
      }), c = !0))));
    }, Z = () => {
      if (!e.touchable || !i.swiping)
        return;
      const f = Date.now() - P, Q = D.value / f;
      if ((Math.abs(Q) > 0.25 || Math.abs(D.value) > o.value / 2) && x.value) {
        const ce = e.vertical ? u.offsetY.value : u.offsetX.value;
        let E = 0;
        e.loop ? E = ce > 0 ? D.value > 0 ? -1 : 1 : 0 : E = -Math[D.value > 0 ? "ceil" : "floor"](D.value / o.value), T({
          pace: E,
          emitChange: !0
        });
      } else
        D.value && T({
          pace: 0
        });
      c = !1, i.swiping = !1, t("dragEnd", {
        index: s.value
      }), r();
    }, p = (f, Q = {}) => {
      b(), u.reset(), et(() => {
        let W;
        e.loop && f === N.value ? W = i.active === 0 ? 0 : f : W = f % N.value, Q.immediate ? et(() => {
          i.swiping = !1;
        }) : i.swiping = !1, T({
          pace: W - i.active,
          emitChange: !0
        });
      });
    }, ue = (f, Q) => {
      const W = Q === s.value, ce = W ? {
        backgroundColor: e.indicatorColor
      } : void 0;
      return l("i", {
        style: ce,
        class: Tt("indicator", {
          active: W
        })
      }, null);
    }, q = () => {
      if (I.indicator)
        return I.indicator({
          active: s.value,
          total: N.value
        });
      if (e.showIndicators && N.value > 1)
        return l("div", {
          class: Tt("indicators", {
            vertical: e.vertical
          })
        }, [Array(N.value).fill("").map(ue)]);
    };
    return Te({
      prev: $,
      next: Me,
      state: i,
      resize: m,
      swipeTo: p
    }), a({
      size: o,
      props: e,
      count: N,
      activeIndicator: s
    }), h(() => e.initialSwipe, (f) => w(+f)), h(N, () => w(i.active)), h(() => e.autoplay, r), h([lt, Yt, () => e.width, () => e.height], m), h(ai(), (f) => {
      f === "visible" ? r() : y();
    }), Se(w), it(() => w(i.active)), jI(() => w(i.active)), Xe(y), vt(y), ke("touchmove", v, {
      target: n
    }), () => {
      var f;
      return l("div", {
        ref: M,
        class: Tt()
      }, [l("div", {
        ref: n,
        style: Y.value,
        class: Tt("track", {
          vertical: e.vertical
        }),
        onTouchstartPassive: C,
        onTouchend: Z,
        onTouchcancel: Z
      }, [(f = I.default) == null ? void 0 : f.call(I)]), q()]);
    };
  }
});
const Bn = ge(Yn), [xn, hI] = _("tabs");
var bn = R({
  name: xn,
  props: {
    count: we(Number),
    inited: Boolean,
    animated: Boolean,
    duration: we(G),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: we(Number)
  },
  emits: ["change"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    const M = S(), n = (u) => t("change", u), i = () => {
      var u;
      const g = (u = I.default) == null ? void 0 : u.call(I);
      return e.animated || e.swipeable ? l(Bn, {
        ref: M,
        loop: !1,
        class: hI("track"),
        duration: +e.duration * 1e3,
        touchable: e.swipeable,
        lazyRender: e.lazyRender,
        showIndicators: !1,
        onChange: n
      }, {
        default: () => [g]
      }) : g;
    }, c = (u) => {
      const g = M.value;
      g && g.state.active !== u && g.swipeTo(u, {
        immediate: !e.inited
      });
    };
    return h(() => e.currentIndex, c), Se(() => {
      c(e.currentIndex);
    }), Te({
      swipeRef: M
    }), () => l("div", {
      class: hI("content", {
        animated: e.animated || e.swipeable
      })
    }, [i()]);
  }
});
const [vM, rt] = _("tabs"), Qn = {
  type: V("line"),
  color: String,
  border: Boolean,
  sticky: Boolean,
  shrink: Boolean,
  active: ne(0),
  duration: ne(0.3),
  animated: Boolean,
  ellipsis: X,
  swipeable: Boolean,
  scrollspy: Boolean,
  offsetTop: ne(0),
  background: String,
  lazyRender: X,
  lineWidth: G,
  lineHeight: G,
  beforeChange: Function,
  swipeThreshold: ne(5),
  titleActiveColor: String,
  titleInactiveColor: String
}, fM = Symbol(vM);
var Zn = R({
  name: vM,
  props: Qn,
  emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    let M, n, i, c, u;
    const g = S(), a = S(), N = S(), o = S(), D = bt(), A = ft(g), [d, L] = EM(), {
      children: s,
      linkChildren: x
    } = ct(fM), Y = Oe({
      inited: !1,
      position: "",
      lineStyle: {},
      currentIndex: -1
    }), H = z(() => s.length > +e.swipeThreshold || !e.ellipsis || e.shrink), k = z(() => ({
      borderColor: e.color,
      background: e.background
    })), T = (E, j) => {
      var O;
      return (O = E.name) != null ? O : j;
    }, b = z(() => {
      const E = s[Y.currentIndex];
      if (E)
        return T(E, Y.currentIndex);
    }), $ = z(() => DI(e.offsetTop)), Me = z(() => e.sticky ? $.value + M : 0), K = (E) => {
      const j = a.value, O = d.value;
      if (!H.value || !j || !O || !O[Y.currentIndex])
        return;
      const B = O[Y.currentIndex].$el, U = B.offsetLeft - (j.offsetWidth - B.offsetWidth) / 2;
      c && c(), c = Ln(j, U, E ? 0 : +e.duration);
    }, y = () => {
      const E = Y.inited;
      te(() => {
        const j = d.value;
        if (!j || !j[Y.currentIndex] || e.type !== "line" || Ve(g.value))
          return;
        const O = j[Y.currentIndex].$el, {
          lineWidth: B,
          lineHeight: U
        } = e, J = O.offsetLeft + O.offsetWidth / 2, ee = {
          width: se(B),
          backgroundColor: e.color,
          transform: `translateX(${J}px) translateX(-50%)`
        };
        if (E && (ee.transitionDuration = `${e.duration}s`), ie(U)) {
          const oe = se(U);
          ee.height = oe, ee.borderRadius = oe;
        }
        Y.lineStyle = ee;
      });
    }, r = (E) => {
      const j = E < Y.currentIndex ? -1 : 1;
      for (; E >= 0 && E < s.length; ) {
        if (!s[E].disabled)
          return E;
        E += j;
      }
    }, w = (E, j) => {
      const O = r(E);
      if (!ie(O))
        return;
      const B = s[O], U = T(B, O), J = Y.currentIndex !== null;
      Y.currentIndex !== O && (Y.currentIndex = O, j || K(), y()), U !== e.active && (t("update:active", U), J && t("change", U, B.title)), i && !e.scrollspy && lI(Math.ceil(mI(g.value) - $.value));
    }, m = (E, j) => {
      const O = s.find((U, J) => T(U, J) === E), B = O ? s.indexOf(O) : 0;
      w(B, j);
    }, P = (E = !1) => {
      if (e.scrollspy) {
        const j = s[Y.currentIndex].$el;
        if (j && A.value) {
          const O = mI(j, A.value) - Me.value;
          n = !0, u && u(), u = zn(A.value, O, E ? 0 : +e.duration, () => {
            n = !1;
          });
        }
      }
    }, C = (E, j, O) => {
      const {
        title: B,
        disabled: U
      } = s[j], J = T(s[j], j);
      U || (DM(e.beforeChange, {
        args: [J],
        done: () => {
          w(j), P();
        }
      }), jM(E)), t("clickTab", {
        name: J,
        title: B,
        event: O,
        disabled: U
      });
    }, v = (E) => {
      i = E.isFixed, t("scroll", E);
    }, Z = (E) => {
      te(() => {
        m(E), P(!0);
      });
    }, p = () => {
      for (let E = 0; E < s.length; E++) {
        const {
          top: j
        } = de(s[E].$el);
        if (j > Me.value)
          return E === 0 ? 0 : E - 1;
      }
      return s.length - 1;
    }, ue = () => {
      if (e.scrollspy && !n) {
        const E = p();
        w(E);
      }
    }, q = () => {
      if (e.type === "line" && s.length)
        return l("div", {
          class: rt("line"),
          style: Y.lineStyle
        }, null);
    }, f = () => {
      var E, j, O;
      const {
        type: B,
        border: U,
        sticky: J
      } = e, ee = [l("div", {
        ref: J ? void 0 : N,
        class: [rt("wrap"), {
          [fi]: B === "line" && U
        }]
      }, [l("div", {
        ref: a,
        role: "tablist",
        class: rt("nav", [B, {
          shrink: e.shrink,
          complete: H.value
        }]),
        style: k.value,
        "aria-orientation": "horizontal"
      }, [(E = I["nav-left"]) == null ? void 0 : E.call(I), s.map((oe) => oe.renderTitle(C)), q(), (j = I["nav-right"]) == null ? void 0 : j.call(I)])]), (O = I["nav-bottom"]) == null ? void 0 : O.call(I)];
      return J ? l("div", {
        ref: N
      }, [ee]) : ee;
    }, Q = () => {
      y(), te(() => {
        var E, j;
        K(!0), (j = (E = o.value) == null ? void 0 : E.swipeRef.value) == null || j.resize();
      });
    };
    h(() => [e.color, e.duration, e.lineWidth, e.lineHeight], y), h(lt, Q), h(() => e.active, (E) => {
      E !== b.value && m(E);
    }), h(() => s.length, () => {
      Y.inited && (m(e.active), y(), te(() => {
        K(!0);
      }));
    });
    const W = () => {
      m(e.active, !0), te(() => {
        Y.inited = !0, N.value && (M = de(N.value).height), K(!0);
      });
    }, ce = (E, j) => t("rendered", E, j);
    return Te({
      resize: Q,
      scrollTo: Z
    }), it(y), jI(y), Nt(W), mM(g, y), ke("scroll", ue, {
      target: A,
      passive: !0
    }), x({
      id: D,
      props: e,
      setLine: y,
      scrollable: H,
      onRendered: ce,
      currentName: b,
      setTitleRefs: L,
      scrollIntoView: K
    }), () => l("div", {
      ref: g,
      class: rt([e.type])
    }, [e.sticky ? l(vn, {
      container: g.value,
      offsetTop: $.value,
      onScroll: v
    }, {
      default: () => [f()]
    }) : f(), l(bn, {
      ref: o,
      count: s.length,
      inited: Y.inited,
      animated: e.animated,
      duration: e.duration,
      swipeable: e.swipeable,
      lazyRender: e.lazyRender,
      currentIndex: Y.currentIndex,
      onChange: w
    }, {
      default: () => {
        var E;
        return [(E = I.default) == null ? void 0 : E.call(I)];
      }
    })]);
  }
});
const YM = Symbol(), Un = () => kt(YM, null), [hn, GI] = _("tab"), Gn = R({
  name: hn,
  props: {
    id: String,
    dot: Boolean,
    type: String,
    color: String,
    title: String,
    badge: G,
    shrink: Boolean,
    isActive: Boolean,
    disabled: Boolean,
    controls: String,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    showZeroBadge: X
  },
  setup(e, {
    slots: t
  }) {
    const I = z(() => {
      const n = {}, {
        type: i,
        color: c,
        disabled: u,
        isActive: g,
        activeColor: a,
        inactiveColor: N
      } = e;
      c && i === "card" && (n.borderColor = c, u || (g ? n.backgroundColor = c : n.color = c));
      const D = g ? a : N;
      return D && (n.color = D), n;
    }), M = () => {
      const n = l("span", {
        class: GI("text", {
          ellipsis: !e.scrollable
        })
      }, [t.title ? t.title() : e.title]);
      return e.dot || ie(e.badge) && e.badge !== "" ? l(TM, {
        dot: e.dot,
        content: e.badge,
        showZero: e.showZeroBadge
      }, {
        default: () => [n]
      }) : n;
    };
    return () => l("div", {
      id: e.id,
      role: "tab",
      class: [GI([e.type, {
        grow: e.scrollable && !e.shrink,
        shrink: e.shrink,
        active: e.isActive,
        disabled: e.disabled
      }])],
      style: I.value,
      tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
      "aria-selected": e.isActive,
      "aria-disabled": e.disabled || void 0,
      "aria-controls": e.controls
    }, [M()]);
  }
}), [Wn, Pn] = _("swipe-item");
var Rn = R({
  name: Wn,
  setup(e, {
    slots: t
  }) {
    let I;
    const M = Oe({
      offset: 0,
      inited: !1,
      mounted: !1
    }), {
      parent: n,
      index: i
    } = Je(kM);
    if (!n) {
      process.env.NODE_ENV !== "production" && console.error("[Vant] <SwipeItem> must be a child component of <Swipe>.");
      return;
    }
    const c = z(() => {
      const a = {}, {
        vertical: N
      } = n.props;
      return n.size.value && (a[N ? "height" : "width"] = `${n.size.value}px`), M.offset && (a.transform = `translate${N ? "Y" : "X"}(${M.offset}px)`), a;
    }), u = z(() => {
      const {
        loop: a,
        lazyRender: N
      } = n.props;
      if (!N || I)
        return !0;
      if (!M.mounted)
        return !1;
      const o = n.activeIndicator.value, D = n.count.value - 1, A = o === 0 && a ? D : o - 1, d = o === D && a ? 0 : o + 1;
      return I = i.value === o || i.value === A || i.value === d, I;
    }), g = (a) => {
      M.offset = a;
    };
    return Se(() => {
      te(() => {
        M.mounted = !0;
      });
    }), Te({
      setOffset: g
    }), () => {
      var a;
      return l("div", {
        class: Pn(),
        style: c.value
      }, [u.value ? (a = t.default) == null ? void 0 : a.call(t) : null]);
    };
  }
});
const pn = ge(Rn), [Vn, Wt] = _("tab"), Xn = Ie({}, sI, {
  dot: Boolean,
  name: G,
  badge: G,
  title: String,
  disabled: Boolean,
  titleClass: Ye,
  titleStyle: [String, Object],
  showZeroBadge: X
});
var Hn = R({
  name: Vn,
  props: Xn,
  setup(e, {
    slots: t
  }) {
    const I = bt(), M = S(!1), n = Ze(), {
      parent: i,
      index: c
    } = Je(fM);
    if (!i) {
      process.env.NODE_ENV !== "production" && console.error("[Vant] <Tab> must be a child component of <Tabs>.");
      return;
    }
    const u = () => {
      var D;
      return (D = e.name) != null ? D : c.value;
    }, g = () => {
      M.value = !0, i.props.lazyRender && te(() => {
        i.onRendered(u(), e.title);
      });
    }, a = z(() => {
      const D = u() === i.currentName.value;
      return D && !M.value && g(), D;
    }), N = (D) => l(Gn, De({
      key: I,
      id: `${i.id}-${c.value}`,
      ref: i.setTitleRefs(c.value),
      style: e.titleStyle,
      class: e.titleClass,
      isActive: a.value,
      controls: I,
      scrollable: i.scrollable.value,
      activeColor: i.props.titleActiveColor,
      inactiveColor: i.props.titleInactiveColor,
      onClick: (A) => D(n.proxy, c.value, A)
    }, ye(i.props, ["type", "color", "shrink"]), ye(e, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
      title: t.title
    }), o = S(!a.value);
    return h(a, (D) => {
      D ? o.value = !1 : et(() => {
        o.value = !0;
      });
    }), h(() => e.title, () => {
      i.setLine(), i.scrollIntoView();
    }), nt(YM, a), Te({
      id: I,
      renderTitle: N
    }), () => {
      var D;
      const A = `${i.id}-${c.value}`, {
        animated: d,
        swipeable: L,
        scrollspy: s,
        lazyRender: x
      } = i.props;
      if (!t.default && !d)
        return;
      const Y = s || a.value;
      if (d || L)
        return l(pn, {
          id: I,
          role: "tabpanel",
          class: Wt("panel-wrapper", {
            inactive: o.value
          }),
          tabindex: a.value ? 0 : -1,
          "aria-hidden": !a.value,
          "aria-labelledby": A
        }, {
          default: () => {
            var T;
            return [l("div", {
              class: Wt("panel")
            }, [(T = t.default) == null ? void 0 : T.call(t)])];
          }
        });
      const k = M.value || s || !x ? (D = t.default) == null ? void 0 : D.call(t) : null;
      return gI(l("div", {
        id: I,
        role: "tabpanel",
        class: Wt("panel"),
        tabindex: Y ? 0 : -1,
        "aria-labelledby": A
      }, [k]), [[uI, Y]]);
    };
  }
});
const Jn = ge(Hn), Fn = ge(Zn), [BM, Pt] = _("picker-group"), xM = Symbol(BM), _n = Ie({
  tabs: Mt(),
  activeTab: ne(0),
  nextStepText: String
}, xt);
R({
  name: BM,
  props: _n,
  emits: ["confirm", "cancel", "update:activeTab"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    const M = wn(() => e.activeTab, (a) => t("update:activeTab", a)), {
      children: n,
      linkChildren: i
    } = ct(xM);
    i();
    const c = () => +M.value < e.tabs.length - 1 && e.nextStepText, u = () => {
      c() ? M.value = +M.value + 1 : t("confirm", n.map((a) => a.confirm()));
    }, g = () => t("cancel");
    return () => {
      var a;
      const N = (a = I.default) == null ? void 0 : a.call(I), o = c() ? e.nextStepText : e.confirmButtonText;
      return l("div", {
        class: Pt()
      }, [l(SM, {
        title: e.title,
        cancelButtonText: e.cancelButtonText,
        confirmButtonText: o,
        onConfirm: u,
        onCancel: g
      }, ye(I, zM)), l(Fn, {
        active: M.value,
        "onUpdate:active": (D) => M.value = D,
        class: Pt("tabs"),
        shrink: !0,
        animated: !0,
        lazyRender: !1
      }, {
        default: () => [e.tabs.map((D, A) => l(Jn, {
          title: D,
          titleClass: Pt("tab-title")
        }, {
          default: () => [N == null ? void 0 : N[A]]
        }))]
      })]);
    };
  }
});
const bM = Ie({
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  optionHeight: ne(44),
  showToolbar: X,
  swipeDuration: ne(1e3),
  visibleOptionNum: ne(6)
}, xt), $n = Ie({}, bM, {
  columns: Mt(),
  modelValue: Mt(),
  toolbarPosition: V("top"),
  columnsFieldNames: Object
});
var Kn = R({
  name: on,
  props: $n,
  emits: ["confirm", "cancel", "change", "scrollInto", "clickOption", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    const M = S(), n = S(e.modelValue.slice(0)), {
      parent: i
    } = Je(xM), {
      children: c,
      linkChildren: u
    } = ct(LM);
    u();
    const g = z(() => rn(e.columnsFieldNames)), a = z(() => DI(e.optionHeight)), N = z(() => jn(e.columns, g.value)), o = z(() => {
      const {
        columns: r
      } = e;
      switch (N.value) {
        case "multiple":
          return r;
        case "cascade":
          return sn(r, g.value, n);
        default:
          return [r];
      }
    }), D = z(() => o.value.some((r) => r.length)), A = z(() => o.value.map((r, w) => Kt(r, n.value[w], g.value))), d = z(() => o.value.map((r, w) => r.findIndex((m) => m[g.value.value] === n.value[w]))), L = (r, w) => {
      if (n.value[r] !== w) {
        const m = n.value.slice(0);
        m[r] = w, n.value = m;
      }
    }, s = () => ({
      selectedValues: n.value.slice(0),
      selectedOptions: A.value,
      selectedIndexes: d.value
    }), x = (r, w) => {
      L(w, r), N.value === "cascade" && n.value.forEach((m, P) => {
        const C = o.value[P];
        QI(C, m, g.value) || L(P, C.length ? C[0][g.value.value] : void 0);
      }), te(() => {
        t("change", Ie({
          columnIndex: w
        }, s()));
      });
    }, Y = (r, w) => {
      const m = {
        columnIndex: w,
        currentOption: r
      };
      t("clickOption", Ie(s(), m)), t("scrollInto", m);
    }, H = () => {
      c.forEach((w) => w.stopMomentum());
      const r = s();
      return te(() => {
        t("confirm", r);
      }), r;
    }, k = () => t("cancel", s()), T = () => o.value.map((r, w) => l(dn, {
      value: n.value[w],
      fields: g.value,
      options: r,
      readonly: e.readonly,
      allowHtml: e.allowHtml,
      optionHeight: a.value,
      swipeDuration: e.swipeDuration,
      visibleOptionNum: e.visibleOptionNum,
      onChange: (m) => x(m, w),
      onClickOption: (m) => Y(m, w),
      onScrollInto: (m) => {
        t("scrollInto", {
          currentOption: m,
          columnIndex: w
        });
      }
    }, {
      option: I.option
    })), b = (r) => {
      if (D.value) {
        const w = {
          height: `${a.value}px`
        }, m = {
          backgroundSize: `100% ${(r - a.value) / 2}px`
        };
        return [l("div", {
          class: fe("mask"),
          style: m
        }, null), l("div", {
          class: [Yi, fe("frame")],
          style: w
        }, null)];
      }
    }, $ = () => {
      const r = a.value * +e.visibleOptionNum, w = {
        height: `${r}px`
      };
      return l("div", {
        ref: M,
        class: fe("columns"),
        style: w
      }, [T(), b(r)]);
    }, Me = () => {
      if (e.showToolbar && !i)
        return l(SM, De(ye(e, yn), {
          onConfirm: H,
          onCancel: k
        }), ye(I, zM));
    };
    h(o, (r) => {
      r.forEach((w, m) => {
        w.length && !QI(w, n.value[m], g.value) && L(m, yM(w)[g.value.value]);
      });
    }, {
      immediate: !0
    });
    let K;
    return h(() => e.modelValue, (r) => {
      !Zt(r, n.value) && !Zt(r, K) && (n.value = r.slice(0), K = r.slice(0));
    }, {
      deep: !0
    }), h(n, (r) => {
      Zt(r, e.modelValue) || (K = r.slice(0), t("update:modelValue", K));
    }, {
      immediate: !0
    }), ke("touchmove", ze, {
      target: M
    }), Te({
      confirm: H,
      getSelectedOptions: () => A.value
    }), () => {
      var r, w;
      return l("div", {
        class: fe()
      }, [e.toolbarPosition === "top" ? Me() : null, e.loading ? l(Dt, {
        class: fe("loading")
      }, null) : null, (r = I["columns-top"]) == null ? void 0 : r.call(I), $(), (w = I["columns-bottom"]) == null ? void 0 : w.call(I), e.toolbarPosition === "bottom" ? Me() : null]);
    };
  }
});
const qn = ge(Kn), [eg, he] = _("cell"), QM = {
  tag: V("div"),
  icon: String,
  size: String,
  title: G,
  value: G,
  label: G,
  center: Boolean,
  isLink: Boolean,
  border: X,
  required: Boolean,
  iconPrefix: String,
  valueClass: Ye,
  labelClass: Ye,
  titleClass: Ye,
  titleStyle: null,
  arrowDirection: String,
  clickable: {
    type: Boolean,
    default: null
  }
}, tg = Ie({}, QM, sI);
var Ig = R({
  name: eg,
  props: tg,
  setup(e, {
    slots: t
  }) {
    const I = sM(), M = () => {
      if (t.label || ie(e.label))
        return l("div", {
          class: [he("label"), e.labelClass]
        }, [t.label ? t.label() : e.label]);
    }, n = () => {
      var g;
      if (t.title || ie(e.title)) {
        const a = (g = t.title) == null ? void 0 : g.call(t);
        return Array.isArray(a) && a.length === 0 ? void 0 : l("div", {
          class: [he("title"), e.titleClass],
          style: e.titleStyle
        }, [a || l("span", null, [e.title]), M()]);
      }
    }, i = () => {
      const g = t.value || t.default;
      if (g || ie(e.value))
        return l("div", {
          class: [he("value"), e.valueClass]
        }, [g ? g() : l("span", null, [e.value])]);
    }, c = () => {
      if (t.icon)
        return t.icon();
      if (e.icon)
        return l(me, {
          name: e.icon,
          class: he("left-icon"),
          classPrefix: e.iconPrefix
        }, null);
    }, u = () => {
      if (t["right-icon"])
        return t["right-icon"]();
      if (e.isLink) {
        const g = e.arrowDirection && e.arrowDirection !== "right" ? `arrow-${e.arrowDirection}` : "arrow";
        return l(me, {
          name: g,
          class: he("right-icon")
        }, null);
      }
    };
    return () => {
      var g;
      const {
        tag: a,
        size: N,
        center: o,
        border: D,
        isLink: A,
        required: d
      } = e, L = (g = e.clickable) != null ? g : A, s = {
        center: o,
        required: d,
        clickable: L,
        borderless: !D
      };
      return N && (s[N] = !!N), l(a, {
        class: he(s),
        role: L ? "button" : void 0,
        tabindex: L ? 0 : void 0,
        onClick: I
      }, {
        default: () => {
          var x;
          return [c(), n(), i(), u(), (x = t.extra) == null ? void 0 : x.call(t)];
        }
      });
    };
  }
});
const Mg = ge(Ig);
function ZM(e) {
  return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e;
}
function ig(e, t) {
  if (ZM(e)) {
    if (t.required)
      return !1;
    if (t.validateEmpty === !1)
      return !0;
  }
  return !(t.pattern && !t.pattern.test(String(e)));
}
function ng(e, t) {
  return new Promise((I) => {
    const M = t.validator(e, t);
    if (MM(M)) {
      M.then(I);
      return;
    }
    I(M);
  });
}
function WI(e, t) {
  const { message: I } = t;
  return Et(I) ? I(e, t) : I || "";
}
function gg({ target: e }) {
  e.composing = !0;
}
function PI({ target: e }) {
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
function ug(e, t) {
  const I = aI();
  e.style.height = "auto";
  let M = e.scrollHeight;
  if (gt(t)) {
    const { maxHeight: n, minHeight: i } = t;
    n !== void 0 && (M = Math.min(M, n)), i !== void 0 && (M = Math.max(M, i));
  }
  M && (e.style.height = `${M}px`, lI(I));
}
function cg(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
function ve(e) {
  return [...e].length;
}
function Rt(e, t) {
  return [...e].slice(0, t).join("");
}
const [Ng, Ce] = _("field"), AI = {
  id: String,
  name: String,
  leftIcon: String,
  rightIcon: String,
  autofocus: Boolean,
  clearable: Boolean,
  maxlength: G,
  formatter: Function,
  clearIcon: V("clear"),
  modelValue: ne(""),
  inputAlign: String,
  placeholder: String,
  autocomplete: String,
  errorMessage: String,
  enterkeyhint: String,
  clearTrigger: V("focus"),
  formatTrigger: V("onChange"),
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
}, ag = Ie({}, QM, AI, {
  rows: G,
  type: V("text"),
  rules: Array,
  autosize: [Boolean, Object],
  labelWidth: G,
  labelClass: Ye,
  labelAlign: String,
  showWordLimit: Boolean,
  errorMessageAlign: String,
  colon: {
    type: Boolean,
    default: null
  }
});
var lg = R({
  name: Ng,
  props: ag,
  emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    const M = bt(), n = Oe({
      status: "unvalidated",
      focused: !1,
      validateMessage: ""
    }), i = S(), c = S(), u = S(), {
      parent: g
    } = Je(Bi), a = () => {
      var j;
      return String((j = e.modelValue) != null ? j : "");
    }, N = (j) => {
      if (ie(e[j]))
        return e[j];
      if (g && ie(g.props[j]))
        return g.props[j];
    }, o = z(() => {
      const j = N("readonly");
      if (e.clearable && !j) {
        const O = a() !== "", B = e.clearTrigger === "always" || e.clearTrigger === "focus" && n.focused;
        return O && B;
      }
      return !1;
    }), D = z(() => u.value && I.input ? u.value() : e.modelValue), A = (j) => j.reduce((O, B) => O.then(() => {
      if (n.status === "failed")
        return;
      let {
        value: U
      } = D;
      if (B.formatter && (U = B.formatter(U, B)), !ig(U, B)) {
        n.status = "failed", n.validateMessage = WI(U, B);
        return;
      }
      if (B.validator)
        return ZM(U) && B.validateEmpty === !1 ? void 0 : ng(U, B).then((J) => {
          J && typeof J == "string" ? (n.status = "failed", n.validateMessage = J) : J === !1 && (n.status = "failed", n.validateMessage = WI(U, B));
        });
    }), Promise.resolve()), d = () => {
      n.status = "unvalidated", n.validateMessage = "";
    }, L = () => t("endValidate", {
      status: n.status,
      message: n.validateMessage
    }), s = (j = e.rules) => new Promise((O) => {
      d(), j ? (t("startValidate"), A(j).then(() => {
        n.status === "failed" ? (O({
          name: e.name,
          message: n.validateMessage
        }), L()) : (n.status = "passed", O(), L());
      })) : O();
    }), x = (j) => {
      if (g && e.rules) {
        const {
          validateTrigger: O
        } = g.props, B = zI(O).includes(j), U = e.rules.filter((J) => J.trigger ? zI(J.trigger).includes(j) : B);
        U.length && s(U);
      }
    }, Y = (j) => {
      var O;
      const {
        maxlength: B
      } = e;
      if (ie(B) && ve(j) > +B) {
        const U = a();
        if (U && ve(U) === +B)
          return U;
        const J = (O = i.value) == null ? void 0 : O.selectionEnd;
        if (n.focused && J) {
          const ee = [...j], oe = ee.length - +B;
          return ee.splice(J - oe, oe), ee.join("");
        }
        return Rt(j, +B);
      }
      return j;
    }, H = (j, O = "onChange") => {
      const B = j;
      j = Y(j);
      const U = ve(B) - ve(j);
      if (e.type === "number" || e.type === "digit") {
        const ee = e.type === "number";
        j = wi(j, ee, ee);
      }
      let J = 0;
      if (e.formatter && O === e.formatTrigger) {
        const {
          formatter: ee,
          maxlength: oe
        } = e;
        if (j = ee(j), ie(oe) && ve(j) > +oe && (j = Rt(j, +oe)), i.value && n.focused) {
          const {
            selectionEnd: ot
          } = i.value, wI = Rt(B, ot);
          J = ve(ee(wI)) - ve(wI);
        }
      }
      if (i.value && i.value.value !== j)
        if (n.focused) {
          let {
            selectionStart: ee,
            selectionEnd: oe
          } = i.value;
          if (i.value.value = j, ie(ee) && ie(oe)) {
            const ot = ve(j);
            U ? (ee -= U, oe -= U) : J && (ee += J, oe += J), i.value.setSelectionRange(Math.min(ee, ot), Math.min(oe, ot));
          }
        } else
          i.value.value = j;
      j !== e.modelValue && t("update:modelValue", j);
    }, k = (j) => {
      j.target.composing || H(j.target.value);
    }, T = () => {
      var j;
      return (j = i.value) == null ? void 0 : j.blur();
    }, b = () => {
      var j;
      return (j = i.value) == null ? void 0 : j.focus();
    }, $ = () => {
      const j = i.value;
      e.type === "textarea" && e.autosize && j && ug(j, e.autosize);
    }, Me = (j) => {
      n.focused = !0, t("focus", j), te($), N("readonly") && T();
    }, K = (j) => {
      n.focused = !1, H(a(), "onBlur"), t("blur", j), !N("readonly") && (x("onBlur"), te($), oi());
    }, y = (j) => t("clickInput", j), r = (j) => t("clickLeftIcon", j), w = (j) => t("clickRightIcon", j), m = (j) => {
      ze(j), t("update:modelValue", ""), t("clear", j);
    }, P = z(() => {
      if (typeof e.error == "boolean")
        return e.error;
      if (g && g.props.showError && n.status === "failed")
        return !0;
    }), C = z(() => {
      const j = N("labelWidth"), O = N("labelAlign");
      if (j && O !== "top")
        return {
          width: se(j)
        };
    }), v = (j) => {
      j.keyCode === 13 && (!(g && g.props.submitOnEnter) && e.type !== "textarea" && ze(j), e.type === "search" && T()), t("keypress", j);
    }, Z = () => e.id || `${M}-input`, p = () => n.status, ue = () => {
      const j = Ce("control", [N("inputAlign"), {
        error: P.value,
        custom: !!I.input,
        "min-height": e.type === "textarea" && !e.autosize
      }]);
      if (I.input)
        return l("div", {
          class: j,
          onClick: y
        }, [I.input()]);
      const O = {
        id: Z(),
        ref: i,
        name: e.name,
        rows: e.rows !== void 0 ? +e.rows : void 0,
        class: j,
        disabled: N("disabled"),
        readonly: N("readonly"),
        autofocus: e.autofocus,
        placeholder: e.placeholder,
        autocomplete: e.autocomplete,
        enterkeyhint: e.enterkeyhint,
        "aria-labelledby": e.label ? `${M}-label` : void 0,
        onBlur: K,
        onFocus: Me,
        onInput: k,
        onClick: y,
        onChange: PI,
        onKeypress: v,
        onCompositionend: PI,
        onCompositionstart: gg
      };
      return e.type === "textarea" ? l("textarea", O, null) : l("input", De(cg(e.type), O), null);
    }, q = () => {
      const j = I["left-icon"];
      if (e.leftIcon || j)
        return l("div", {
          class: Ce("left-icon"),
          onClick: r
        }, [j ? j() : l(me, {
          name: e.leftIcon,
          classPrefix: e.iconPrefix
        }, null)]);
    }, f = () => {
      const j = I["right-icon"];
      if (e.rightIcon || j)
        return l("div", {
          class: Ce("right-icon"),
          onClick: w
        }, [j ? j() : l(me, {
          name: e.rightIcon,
          classPrefix: e.iconPrefix
        }, null)]);
    }, Q = () => {
      if (e.showWordLimit && e.maxlength) {
        const j = ve(a());
        return l("div", {
          class: Ce("word-limit")
        }, [l("span", {
          class: Ce("word-num")
        }, [j]), tM("/"), e.maxlength]);
      }
    }, W = () => {
      if (g && g.props.showErrorMessage === !1)
        return;
      const j = e.errorMessage || n.validateMessage;
      if (j) {
        const O = I["error-message"], B = N("errorMessageAlign");
        return l("div", {
          class: Ce("error-message", B)
        }, [O ? O({
          message: j
        }) : j]);
      }
    }, ce = () => {
      const j = N("labelWidth"), O = N("labelAlign"), B = N("colon") ? ":" : "";
      if (I.label)
        return [I.label(), B];
      if (e.label)
        return l("label", {
          id: `${M}-label`,
          for: Z(),
          onClick: (U) => {
            ze(U), b();
          },
          style: O === "top" && j ? {
            width: se(j)
          } : void 0
        }, [e.label + B]);
    }, E = () => [l("div", {
      class: Ce("body")
    }, [ue(), o.value && l(me, {
      ref: c,
      name: e.clearIcon,
      class: Ce("clear")
    }, null), f(), I.button && l("div", {
      class: Ce("button")
    }, [I.button()])]), Q(), W()];
    return Te({
      blur: T,
      focus: b,
      validate: s,
      formValue: D,
      resetValidation: d,
      getValidationStatus: p
    }), nt(li, {
      customValue: u,
      resetValidation: d,
      validateWithTrigger: x
    }), h(() => e.modelValue, () => {
      H(a()), d(), x("onChange"), te($);
    }), Se(() => {
      H(a(), e.formatTrigger), te($);
    }), ke("touchstart", m, {
      target: z(() => {
        var j;
        return (j = c.value) == null ? void 0 : j.$el;
      })
    }), () => {
      const j = N("disabled"), O = N("labelAlign"), B = q(), U = () => {
        const J = ce();
        return O === "top" ? [B, J].filter(Boolean) : J || [];
      };
      return l(Mg, {
        size: e.size,
        class: Ce({
          error: P.value,
          disabled: j,
          [`label-${O}`]: O
        }),
        center: e.center,
        border: e.border,
        isLink: e.isLink,
        clickable: e.clickable,
        titleStyle: C.value,
        valueClass: Ce("value"),
        titleClass: [Ce("label", [O, {
          required: e.required
        }]), e.labelClass],
        arrowDirection: e.arrowDirection
      }, {
        icon: B && O !== "top" ? () => B : null,
        title: U,
        value: E,
        extra: I.extra
      });
    };
  }
});
const UM = ge(lg);
let $e = 0;
function Dg(e) {
  e ? ($e || document.body.classList.add("van-toast--unclickable"), $e++) : $e && ($e--, $e || document.body.classList.remove("van-toast--unclickable"));
}
const [og, Ge] = _("toast"), jg = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay"], sg = {
  icon: String,
  show: Boolean,
  type: V("text"),
  overlay: Boolean,
  message: G,
  iconSize: G,
  duration: nM(2e3),
  position: V("middle"),
  teleport: [String, Object],
  wordBreak: String,
  className: Ye,
  iconPrefix: String,
  transition: V("van-fade"),
  loadingType: String,
  forbidClick: Boolean,
  overlayClass: Ye,
  overlayStyle: Object,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean
};
var hM = R({
  name: og,
  props: sg,
  emits: ["update:show"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    let M, n = !1;
    const i = () => {
      const o = e.show && e.forbidClick;
      n !== o && (n = o, Dg(n));
    }, c = (o) => t("update:show", o), u = () => {
      e.closeOnClick && c(!1);
    }, g = () => clearTimeout(M), a = () => {
      const {
        icon: o,
        type: D,
        iconSize: A,
        iconPrefix: d,
        loadingType: L
      } = e;
      if (o || D === "success" || D === "fail")
        return l(me, {
          name: o || D,
          size: A,
          class: Ge("icon"),
          classPrefix: d
        }, null);
      if (D === "loading")
        return l(Dt, {
          class: Ge("loading"),
          size: A,
          type: L
        }, null);
    }, N = () => {
      const {
        type: o,
        message: D
      } = e;
      if (I.message)
        return l("div", {
          class: Ge("text")
        }, [I.message()]);
      if (ie(D) && D !== "")
        return o === "html" ? l("div", {
          key: 0,
          class: Ge("text"),
          innerHTML: String(D)
        }, null) : l("div", {
          class: Ge("text")
        }, [D]);
    };
    return h(() => [e.show, e.forbidClick], i), h(() => [e.show, e.type, e.message, e.duration], () => {
      g(), e.show && e.duration > 0 && (M = setTimeout(() => {
        c(!1);
      }, e.duration));
    }), Se(i), nI(i), () => l(rI, De({
      class: [Ge([e.position, e.wordBreak === "normal" ? "break-normal" : e.wordBreak, {
        [e.type]: !e.icon
      }]), e.className],
      lockScroll: !1,
      onClick: u,
      onClosed: g,
      "onUpdate:show": c
    }, ye(e, jg)), {
      default: () => [a(), N()]
    });
  }
});
function Tg() {
  const e = Oe({
    show: !1
  }), t = (n) => {
    e.show = n;
  }, I = (n) => {
    Ie(e, n, { transitionAppear: !0 }), t(!0);
  }, M = () => t(!1);
  return Te({ open: I, close: M, toggle: t }), {
    open: I,
    close: M,
    state: e,
    toggle: t
  };
}
function rg(e) {
  const t = JM(e), I = document.createElement("div");
  return document.body.appendChild(I), {
    instance: t.mount(I),
    unmount() {
      t.unmount(), document.body.removeChild(I);
    }
  };
}
const Ag = {
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
let At = [], dg = !1, RI = Ie({}, Ag);
const Cg = /* @__PURE__ */ new Map();
function yg(e) {
  return gt(e) ? e : {
    message: e
  };
}
function wg() {
  const {
    instance: e,
    unmount: t
  } = rg({
    setup() {
      const I = S(""), {
        open: M,
        state: n,
        close: i,
        toggle: c
      } = Tg(), u = () => {
      }, g = () => l(hM, De(n, {
        onClosed: u,
        "onUpdate:show": c
      }), null);
      return h(I, (a) => {
        n.message = a;
      }), Ze().render = g, {
        open: M,
        close: i,
        message: I
      };
    }
  });
  return e;
}
function Lg() {
  if (!At.length || dg) {
    const e = wg();
    At.push(e);
  }
  return At[At.length - 1];
}
function pI(e = {}) {
  if (!ut)
    return {};
  const t = Lg(), I = yg(e);
  return t.open(Ie({}, RI, Cg.get(I.type || RI.type), I)), t;
}
ge(hM);
const [zg, le, Be] = _("calendar"), Sg = (e) => Be("monthTitle", e.getFullYear(), e.getMonth() + 1);
function qt(e, t) {
  const I = e.getFullYear(), M = t.getFullYear();
  if (I === M) {
    const n = e.getMonth(), i = t.getMonth();
    return n === i ? 0 : n > i ? 1 : -1;
  }
  return I > M ? 1 : -1;
}
function re(e, t) {
  const I = qt(e, t);
  if (I === 0) {
    const M = e.getDate(), n = t.getDate();
    return M === n ? 0 : M > n ? 1 : -1;
  }
  return I;
}
const Ot = (e) => new Date(e), VI = (e) => Array.isArray(e) ? e.map(Ot) : Ot(e);
function dI(e, t) {
  const I = Ot(e);
  return I.setDate(I.getDate() + t), I;
}
const eI = (e) => dI(e, -1), GM = (e) => dI(e, 1), tI = () => {
  const e = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), e;
};
function Eg(e) {
  const t = e[0].getTime();
  return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1;
}
Ie({}, bM, {
  modelValue: Mt(),
  filter: Function,
  formatter: {
    type: Function,
    default: (e, t) => t
  }
});
const mg = (e, t) => 32 - new Date(e, t - 1, 32).getDate(), [Og] = _("calendar-day");
var kg = R({
  name: Og,
  props: {
    item: we(Object),
    color: String,
    index: Number,
    offset: nM(0),
    rowHeight: String
  },
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    const M = z(() => {
      var g;
      const {
        item: a,
        index: N,
        color: o,
        offset: D,
        rowHeight: A
      } = e, d = {
        height: A
      };
      if (a.type === "placeholder")
        return d.width = "100%", d;
      if (N === 0 && (d.marginLeft = `${100 * D / 7}%`), o)
        switch (a.type) {
          case "end":
          case "start":
          case "start-end":
          case "multiple-middle":
          case "multiple-selected":
            d.background = o;
            break;
          case "middle":
            d.color = o;
            break;
        }
      return D + (((g = a.date) == null ? void 0 : g.getDate()) || 1) > 28 && (d.marginBottom = 0), d;
    }), n = () => {
      e.item.type !== "disabled" && t("click", e.item);
    }, i = () => {
      const {
        topInfo: g
      } = e.item;
      if (g || I["top-info"])
        return l("div", {
          class: le("top-info")
        }, [I["top-info"] ? I["top-info"](e.item) : g]);
    }, c = () => {
      const {
        bottomInfo: g
      } = e.item;
      if (g || I["bottom-info"])
        return l("div", {
          class: le("bottom-info")
        }, [I["bottom-info"] ? I["bottom-info"](e.item) : g]);
    }, u = () => {
      const {
        item: g,
        color: a,
        rowHeight: N
      } = e, {
        type: o,
        text: D
      } = g, A = [i(), D, c()];
      return o === "selected" ? l("div", {
        class: le("selected-day"),
        style: {
          width: N,
          height: N,
          background: a
        }
      }, [A]) : A;
    };
    return () => {
      const {
        type: g,
        className: a
      } = e.item;
      return g === "placeholder" ? l("div", {
        class: le("day"),
        style: M.value
      }, null) : l("div", {
        role: "gridcell",
        style: M.value,
        class: [le("day", g), a],
        tabindex: g === "disabled" ? void 0 : -1,
        onClick: n
      }, [u()]);
    };
  }
});
const [vg] = _("calendar-month"), fg = {
  date: we(Date),
  type: String,
  color: String,
  minDate: we(Date),
  maxDate: we(Date),
  showMark: Boolean,
  rowHeight: G,
  formatter: Function,
  lazyRender: Boolean,
  currentDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: Boolean,
  showMonthTitle: Boolean,
  firstDayOfWeek: Number
};
var Yg = R({
  name: vg,
  props: fg,
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    const [M, n] = ii(), i = S(), c = S(), u = xi(c), g = z(() => Sg(e.date)), a = z(() => se(e.rowHeight)), N = z(() => {
      const y = e.date.getDay();
      return e.firstDayOfWeek ? (y + 7 - e.firstDayOfWeek) % 7 : y;
    }), o = z(() => mg(e.date.getFullYear(), e.date.getMonth() + 1)), D = z(() => M.value || !e.lazyRender), A = () => g.value, d = (y) => {
      const r = (w) => e.currentDate.some((m) => re(m, w) === 0);
      if (r(y)) {
        const w = eI(y), m = GM(y), P = r(w), C = r(m);
        return P && C ? "multiple-middle" : P ? "end" : C ? "start" : "multiple-selected";
      }
      return "";
    }, L = (y) => {
      const [r, w] = e.currentDate;
      if (!r)
        return "";
      const m = re(y, r);
      if (!w)
        return m === 0 ? "start" : "";
      const P = re(y, w);
      return e.allowSameDay && m === 0 && P === 0 ? "start-end" : m === 0 ? "start" : P === 0 ? "end" : m > 0 && P < 0 ? "middle" : "";
    }, s = (y) => {
      const {
        type: r,
        minDate: w,
        maxDate: m,
        currentDate: P
      } = e;
      if (re(y, w) < 0 || re(y, m) > 0)
        return "disabled";
      if (P === null)
        return "";
      if (Array.isArray(P)) {
        if (r === "multiple")
          return d(y);
        if (r === "range")
          return L(y);
      } else if (r === "single")
        return re(y, P) === 0 ? "selected" : "";
      return "";
    }, x = (y) => {
      if (e.type === "range") {
        if (y === "start" || y === "end")
          return Be(y);
        if (y === "start-end")
          return `${Be("start")}/${Be("end")}`;
      }
    }, Y = () => {
      if (e.showMonthTitle)
        return l("div", {
          class: le("month-title")
        }, [I["month-title"] ? I["month-title"]({
          date: e.date,
          text: g.value
        }) : g.value]);
    }, H = () => {
      if (e.showMark && D.value)
        return l("div", {
          class: le("month-mark")
        }, [e.date.getMonth() + 1]);
    }, k = z(() => {
      const y = Math.ceil((o.value + N.value) / 7);
      return Array(y).fill({
        type: "placeholder"
      });
    }), T = z(() => {
      const y = [], r = e.date.getFullYear(), w = e.date.getMonth();
      for (let m = 1; m <= o.value; m++) {
        const P = new Date(r, w, m), C = s(P);
        let v = {
          date: P,
          type: C,
          text: m,
          bottomInfo: x(C)
        };
        e.formatter && (v = e.formatter(v)), y.push(v);
      }
      return y;
    }), b = z(() => T.value.filter((y) => y.type === "disabled")), $ = (y, r) => {
      if (i.value) {
        const w = de(i.value), m = k.value.length, C = (Math.ceil((r.getDate() + N.value) / 7) - 1) * w.height / m;
        mt(y, w.top + C + y.scrollTop - de(y).top);
      }
    }, Me = (y, r) => l(kg, {
      item: y,
      index: r,
      color: e.color,
      offset: N.value,
      rowHeight: a.value,
      onClick: (w) => t("click", w)
    }, ye(I, ["top-info", "bottom-info"])), K = () => l("div", {
      ref: i,
      role: "grid",
      class: le("days")
    }, [H(), (D.value ? T : k).value.map(Me)]);
    return Te({
      getTitle: A,
      getHeight: () => u.value,
      setVisible: n,
      scrollToDate: $,
      disabledDays: b
    }), () => l("div", {
      class: le("month"),
      ref: c
    }, [Y(), K()]);
  }
});
const [Bg] = _("calendar-header");
var xg = R({
  name: Bg,
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
    emit: I
  }) {
    const M = () => {
      if (e.showTitle) {
        const u = e.title || Be("title"), g = t.title ? t.title() : u;
        return l("div", {
          class: le("header-title")
        }, [g]);
      }
    }, n = (u) => I("clickSubtitle", u), i = () => {
      if (e.showSubtitle) {
        const u = t.subtitle ? t.subtitle({
          date: e.date,
          text: e.subtitle
        }) : e.subtitle;
        return l("div", {
          class: le("header-subtitle"),
          onClick: n
        }, [u]);
      }
    }, c = () => {
      const {
        firstDayOfWeek: u
      } = e, g = Be("weekdays"), a = [...g.slice(u, 7), ...g.slice(0, u)];
      return l("div", {
        class: le("weekdays")
      }, [a.map((N) => l("span", {
        class: le("weekday")
      }, [N]))]);
    };
    return () => l("div", {
      class: le("header")
    }, [M(), i(), c()]);
  }
});
const bg = {
  show: Boolean,
  type: V("single"),
  title: String,
  color: String,
  round: X,
  readonly: Boolean,
  poppable: X,
  maxRange: ne(null),
  position: V("bottom"),
  teleport: [String, Object],
  showMark: X,
  showTitle: X,
  formatter: Function,
  rowHeight: G,
  confirmText: String,
  rangePrompt: String,
  lazyRender: X,
  showConfirm: X,
  defaultDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: X,
  closeOnPopstate: X,
  showRangePrompt: X,
  confirmDisabledText: String,
  closeOnClickOverlay: X,
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: X,
  minDate: {
    type: Date,
    validator: Jt,
    default: tI
  },
  maxDate: {
    type: Date,
    validator: Jt,
    default: () => {
      const e = tI();
      return new Date(e.getFullYear(), e.getMonth() + 6, e.getDate());
    }
  },
  firstDayOfWeek: {
    type: G,
    default: 0,
    validator: (e) => e >= 0 && e <= 6
  }
};
var Qg = R({
  name: zg,
  props: bg,
  emits: ["select", "confirm", "unselect", "monthShow", "overRange", "update:show", "clickSubtitle"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    const M = (C, v = e.minDate, Z = e.maxDate) => re(C, v) === -1 ? v : re(C, Z) === 1 ? Z : C, n = (C = e.defaultDate) => {
      const {
        type: v,
        minDate: Z,
        maxDate: p,
        allowSameDay: ue
      } = e;
      if (C === null)
        return C;
      const q = tI();
      if (v === "range") {
        Array.isArray(C) || (C = []);
        const f = M(C[0] || q, Z, ue ? p : eI(p)), Q = M(C[1] || q, ue ? Z : GM(Z));
        return [f, Q];
      }
      return v === "multiple" ? Array.isArray(C) ? C.map((f) => M(f)) : [M(q)] : ((!C || Array.isArray(C)) && (C = q), M(C));
    };
    let i;
    const c = S(), u = S({
      text: "",
      date: void 0
    }), g = S(n()), [a, N] = EM(), o = z(() => e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0), D = z(() => {
      const C = [], v = new Date(e.minDate);
      v.setDate(1);
      do
        C.push(new Date(v)), v.setMonth(v.getMonth() + 1);
      while (qt(v, e.maxDate) !== 1);
      return C;
    }), A = z(() => {
      if (g.value) {
        if (e.type === "range")
          return !g.value[0] || !g.value[1];
        if (e.type === "multiple")
          return !g.value.length;
      }
      return !g.value;
    }), d = () => g.value, L = () => {
      const C = at(c.value), v = C + i, Z = D.value.map((Q, W) => a.value[W].getHeight()), p = Z.reduce((Q, W) => Q + W, 0);
      if (v > p && C > 0)
        return;
      let ue = 0, q;
      const f = [-1, -1];
      for (let Q = 0; Q < D.value.length; Q++) {
        const W = a.value[Q];
        ue <= v && ue + Z[Q] >= C && (f[1] = Q, q || (q = W, f[0] = Q), a.value[Q].showed || (a.value[Q].showed = !0, t("monthShow", {
          date: W.date,
          title: W.getTitle()
        }))), ue += Z[Q];
      }
      D.value.forEach((Q, W) => {
        const ce = W >= f[0] - 1 && W <= f[1] + 1;
        a.value[W].setVisible(ce);
      }), q && (u.value = {
        text: q.getTitle(),
        date: q.date
      });
    }, s = (C) => {
      be(() => {
        D.value.some((v, Z) => qt(v, C) === 0 ? (c.value && a.value[Z].scrollToDate(c.value, C), !0) : !1), L();
      });
    }, x = () => {
      if (!(e.poppable && !e.show))
        if (g.value) {
          const C = e.type === "single" ? g.value : g.value[0];
          Jt(C) && s(C);
        } else
          be(L);
    }, Y = () => {
      e.poppable && !e.show || (be(() => {
        i = Math.floor(de(c).height);
      }), x());
    }, H = (C = n()) => {
      g.value = C, x();
    }, k = (C) => {
      const {
        maxRange: v,
        rangePrompt: Z,
        showRangePrompt: p
      } = e;
      return v && Eg(C) > +v ? (p && pI(Z || Be("rangePrompt", v)), t("overRange"), !1) : !0;
    }, T = () => {
      var C;
      return t("confirm", (C = g.value) != null ? C : VI(g.value));
    }, b = (C, v) => {
      const Z = (p) => {
        g.value = p, t("select", VI(p));
      };
      if (v && e.type === "range" && !k(C)) {
        Z([C[0], dI(C[0], +e.maxRange - 1)]);
        return;
      }
      Z(C), v && !e.showConfirm && T();
    }, $ = (C, v, Z) => {
      var p;
      return (p = C.find((ue) => re(v, ue.date) === -1 && re(ue.date, Z) === -1)) == null ? void 0 : p.date;
    }, Me = z(() => a.value.reduce((C, v) => {
      var Z, p;
      return C.push(...(p = (Z = v.disabledDays) == null ? void 0 : Z.value) != null ? p : []), C;
    }, [])), K = (C) => {
      if (e.readonly || !C.date)
        return;
      const {
        date: v
      } = C, {
        type: Z
      } = e;
      if (Z === "range") {
        if (!g.value) {
          b([v]);
          return;
        }
        const [p, ue] = g.value;
        if (p && !ue) {
          const q = re(v, p);
          if (q === 1) {
            const f = $(Me.value, p, v);
            if (f) {
              const Q = eI(f);
              re(p, Q) === -1 ? b([p, Q]) : b([v]);
            } else
              b([p, v], !0);
          } else
            q === -1 ? b([v]) : e.allowSameDay && b([v, v], !0);
        } else
          b([v]);
      } else if (Z === "multiple") {
        if (!g.value) {
          b([v]);
          return;
        }
        const p = g.value, ue = p.findIndex((q) => re(q, v) === 0);
        if (ue !== -1) {
          const [q] = p.splice(ue, 1);
          t("unselect", Ot(q));
        } else
          e.maxRange && p.length >= +e.maxRange ? pI(e.rangePrompt || Be("rangePrompt", e.maxRange)) : b([...p, v]);
      } else
        b(v, !0);
    }, y = (C) => t("update:show", C), r = (C, v) => {
      const Z = v !== 0 || !e.showSubtitle;
      return l(Yg, De({
        ref: N(v),
        date: C,
        currentDate: g.value,
        showMonthTitle: Z,
        firstDayOfWeek: o.value
      }, ye(e, ["type", "color", "minDate", "maxDate", "showMark", "formatter", "rowHeight", "lazyRender", "showSubtitle", "allowSameDay"]), {
        onClick: K
      }), ye(I, ["top-info", "bottom-info", "month-title"]));
    }, w = () => {
      if (I.footer)
        return I.footer();
      if (e.showConfirm) {
        const C = I["confirm-text"], v = A.value, Z = v ? e.confirmDisabledText : e.confirmText;
        return l(TI, {
          round: !0,
          block: !0,
          type: "primary",
          color: e.color,
          class: le("confirm"),
          disabled: v,
          nativeType: "button",
          onClick: T
        }, {
          default: () => [C ? C({
            disabled: v
          }) : Z || Be("confirm")]
        });
      }
    }, m = () => l("div", {
      class: [le("footer"), {
        "van-safe-area-bottom": e.safeAreaInsetBottom
      }]
    }, [w()]), P = () => l("div", {
      class: le()
    }, [l(xg, {
      date: u.value.date,
      title: e.title,
      subtitle: u.value.text,
      showTitle: e.showTitle,
      showSubtitle: e.showSubtitle,
      firstDayOfWeek: o.value,
      onClickSubtitle: (C) => t("clickSubtitle", C)
    }, ye(I, ["title", "subtitle"])), l("div", {
      ref: c,
      class: le("body"),
      onScroll: L
    }, [D.value.map(r)]), m()]);
    return h(() => e.show, Y), h(() => [e.type, e.minDate, e.maxDate], () => H(n(g.value))), h(() => e.defaultDate, (C = null) => {
      g.value = C, x();
    }), Te({
      reset: H,
      scrollToDate: s,
      getSelectedDate: d
    }), Nt(Y), () => e.poppable ? l(rI, {
      show: e.show,
      class: le("popup"),
      round: e.round,
      position: e.position,
      closeable: e.showTitle || e.showSubtitle,
      teleport: e.teleport,
      closeOnPopstate: e.closeOnPopstate,
      safeAreaInsetTop: e.safeAreaInsetTop,
      closeOnClickOverlay: e.closeOnClickOverlay,
      "onUpdate:show": y
    }, {
      default: P
    }) : P();
  }
});
const Zg = ge(Qg), [WM, Ug] = _("row"), PM = Symbol(WM), hg = {
  tag: V("div"),
  wrap: X,
  align: String,
  gutter: ne(0),
  justify: String
};
var Gg = R({
  name: WM,
  props: hg,
  setup(e, {
    slots: t
  }) {
    const {
      children: I,
      linkChildren: M
    } = ct(PM), n = z(() => {
      const c = [[]];
      let u = 0;
      return I.forEach((g, a) => {
        u += Number(g.span), u > 24 ? (c.push([a]), u -= 24) : c[c.length - 1].push(a);
      }), c;
    }), i = z(() => {
      const c = Number(e.gutter), u = [];
      return c && n.value.forEach((g) => {
        const a = c * (g.length - 1) / g.length;
        g.forEach((N, o) => {
          if (o === 0)
            u.push({
              right: a
            });
          else {
            const D = c - u[N - 1].right, A = a - D;
            u.push({
              left: D,
              right: A
            });
          }
        });
      }), u;
    });
    return M({
      spaces: i
    }), () => {
      const {
        tag: c,
        wrap: u,
        align: g,
        justify: a
      } = e;
      return l(c, {
        class: Ug({
          [`align-${g}`]: g,
          [`justify-${a}`]: a,
          nowrap: !u
        })
      }, {
        default: () => {
          var N;
          return [(N = t.default) == null ? void 0 : N.call(t)];
        }
      });
    };
  }
});
const [Wg, Pg] = _("col"), Rg = {
  tag: V("div"),
  span: ne(0),
  offset: G
};
var pg = R({
  name: Wg,
  props: Rg,
  setup(e, {
    slots: t
  }) {
    const {
      parent: I,
      index: M
    } = Je(PM), n = z(() => {
      if (!I)
        return;
      const {
        spaces: i
      } = I;
      if (i && i.value && i.value[M.value]) {
        const {
          left: c,
          right: u
        } = i.value[M.value];
        return {
          paddingLeft: c ? `${c}px` : null,
          paddingRight: u ? `${u}px` : null
        };
      }
    });
    return () => {
      const {
        tag: i,
        span: c,
        offset: u
      } = e;
      return l(i, {
        style: n.value,
        class: Pg({
          [c]: c,
          [`offset-${u}`]: u
        })
      }, {
        default: () => {
          var g;
          return [(g = t.default) == null ? void 0 : g.call(t)];
        }
      });
    };
  }
});
const pt = ge(pg), [Vg, We, Xg] = _("list"), Hg = {
  error: Boolean,
  offset: ne(300),
  loading: Boolean,
  disabled: Boolean,
  finished: Boolean,
  errorText: String,
  direction: V("down"),
  loadingText: String,
  finishedText: String,
  immediateCheck: X
};
var Jg = R({
  name: Vg,
  props: Hg,
  emits: ["load", "update:error", "update:loading"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    const M = S(e.loading), n = S(), i = S(), c = Un(), u = ft(n), g = () => {
      te(() => {
        if (M.value || e.finished || e.disabled || e.error || // skip check when inside an inactive tab
        (c == null ? void 0 : c.value) === !1)
          return;
        const {
          direction: A
        } = e, d = +e.offset, L = de(u);
        if (!L.height || Ve(n))
          return;
        let s = !1;
        const x = de(i);
        A === "up" ? s = L.top - x.top <= d : s = x.bottom - L.bottom <= d, s && (M.value = !0, t("update:loading", !0), t("load"));
      });
    }, a = () => {
      if (e.finished) {
        const A = I.finished ? I.finished() : e.finishedText;
        if (A)
          return l("div", {
            class: We("finished-text")
          }, [A]);
      }
    }, N = () => {
      t("update:error", !1), g();
    }, o = () => {
      if (e.error) {
        const A = I.error ? I.error() : e.errorText;
        if (A)
          return l("div", {
            role: "button",
            class: We("error-text"),
            tabindex: 0,
            onClick: N
          }, [A]);
      }
    }, D = () => {
      if (M.value && !e.finished && !e.disabled)
        return l("div", {
          class: We("loading")
        }, [I.loading ? I.loading() : l(Dt, {
          class: We("loading-icon")
        }, {
          default: () => [e.loadingText || Xg("loading")]
        })]);
    };
    return h(() => [e.loading, e.finished, e.error], g), c && h(c, (A) => {
      A && g();
    }), FM(() => {
      M.value = e.loading;
    }), Se(() => {
      e.immediateCheck && g();
    }), Te({
      check: g
    }), ke("scroll", g, {
      target: u,
      passive: !0
    }), () => {
      var A;
      const d = (A = I.default) == null ? void 0 : A.call(I), L = l("div", {
        ref: i,
        class: We("placeholder")
      }, null);
      return l("div", {
        ref: n,
        role: "feed",
        class: We(),
        "aria-busy": M.value
      }, [e.direction === "down" ? d : L, D(), a(), o(), e.direction === "up" ? d : L]);
    };
  }
});
const Fg = ge(Jg), [_g, Ke, $g] = _("pull-refresh"), RM = 50, Kg = ["pulling", "loosing", "success"], qg = {
  disabled: Boolean,
  modelValue: Boolean,
  headHeight: ne(RM),
  successText: String,
  pullingText: String,
  loosingText: String,
  loadingText: String,
  pullDistance: G,
  successDuration: ne(500),
  animationDuration: ne(300)
};
var eu = R({
  name: _g,
  props: qg,
  emits: ["change", "refresh", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: I
  }) {
    let M;
    const n = S(), i = S(), c = ft(n), u = Oe({
      status: "normal",
      distance: 0,
      duration: 0
    }), g = Bt(), a = () => {
      if (e.headHeight !== RM)
        return {
          height: `${e.headHeight}px`
        };
    }, N = () => u.status !== "loading" && u.status !== "success" && !e.disabled, o = (k) => {
      const T = +(e.pullDistance || e.headHeight);
      return k > T && (k < T * 2 ? k = T + (k - T) / 2 : k = T * 1.5 + (k - T * 2) / 4), Math.round(k);
    }, D = (k, T) => {
      const b = +(e.pullDistance || e.headHeight);
      u.distance = k, T ? u.status = "loading" : k === 0 ? u.status = "normal" : k < b ? u.status = "pulling" : u.status = "loosing", t("change", {
        status: u.status,
        distance: k
      });
    }, A = () => {
      const {
        status: k
      } = u;
      return k === "normal" ? "" : e[`${k}Text`] || $g(k);
    }, d = () => {
      const {
        status: k,
        distance: T
      } = u;
      if (I[k])
        return I[k]({
          distance: T
        });
      const b = [];
      return Kg.includes(k) && b.push(l("div", {
        class: Ke("text")
      }, [A()])), k === "loading" && b.push(l(Dt, {
        class: Ke("loading")
      }, {
        default: A
      })), b;
    }, L = () => {
      u.status = "success", setTimeout(() => {
        D(0);
      }, +e.successDuration);
    }, s = (k) => {
      M = at(c.value) === 0, M && (u.duration = 0, g.start(k));
    }, x = (k) => {
      N() && s(k);
    }, Y = (k) => {
      if (N()) {
        M || s(k);
        const {
          deltaY: T
        } = g;
        g.move(k), M && T.value >= 0 && g.isVertical() && (ze(k), D(o(T.value)));
      }
    }, H = () => {
      M && g.deltaY.value && N() && (u.duration = +e.animationDuration, u.status === "loosing" ? (D(+e.headHeight, !0), t("update:modelValue", !0), te(() => t("refresh"))) : D(0));
    };
    return h(() => e.modelValue, (k) => {
      u.duration = +e.animationDuration, k ? D(+e.headHeight, !0) : I.success || e.successText ? L() : D(0, !1);
    }), ke("touchmove", Y, {
      target: i
    }), () => {
      var k;
      const T = {
        transitionDuration: `${u.duration}ms`,
        transform: u.distance ? `translate3d(0,${u.distance}px, 0)` : ""
      };
      return l("div", {
        ref: n,
        class: Ke()
      }, [l("div", {
        ref: i,
        class: Ke("track"),
        style: T,
        onTouchstartPassive: x,
        onTouchend: H,
        onTouchcancel: H
      }, [l("div", {
        class: Ke("head"),
        style: a()
      }, [d()]), (k = I.default) == null ? void 0 : k.call(I)])]);
    };
  }
});
const tu = ge(eu), Iu = ge(Gg), [Mu, qe, iu] = _("search"), nu = Ie({}, AI, {
  label: String,
  shape: V("square"),
  leftIcon: V("search"),
  clearable: X,
  actionText: String,
  background: String,
  showAction: Boolean
});
var gu = R({
  name: Mu,
  props: nu,
  emits: ["blur", "focus", "clear", "search", "cancel", "clickInput", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: I,
    attrs: M
  }) {
    const n = bt(), i = S(), c = () => {
      I.action || (t("update:modelValue", ""), t("cancel"));
    }, u = (T) => {
      T.keyCode === 13 && (ze(T), t("search", e.modelValue));
    }, g = () => e.id || `${n}-input`, a = () => {
      if (I.label || e.label)
        return l("label", {
          class: qe("label"),
          for: g()
        }, [I.label ? I.label() : e.label]);
    }, N = () => {
      if (e.showAction) {
        const T = e.actionText || iu("cancel");
        return l("div", {
          class: qe("action"),
          role: "button",
          tabindex: 0,
          onClick: c
        }, [I.action ? I.action() : T]);
      }
    }, o = () => {
      var T;
      return (T = i.value) == null ? void 0 : T.blur();
    }, D = () => {
      var T;
      return (T = i.value) == null ? void 0 : T.focus();
    }, A = (T) => t("blur", T), d = (T) => t("focus", T), L = (T) => t("clear", T), s = (T) => t("clickInput", T), x = (T) => t("clickLeftIcon", T), Y = (T) => t("clickRightIcon", T), H = Object.keys(AI), k = () => {
      const T = Ie({}, M, ye(e, H), {
        id: g()
      }), b = ($) => t("update:modelValue", $);
      return l(UM, De({
        ref: i,
        type: "search",
        class: qe("field"),
        border: !1,
        onBlur: A,
        onFocus: d,
        onClear: L,
        onKeypress: u,
        onClickInput: s,
        onClickLeftIcon: x,
        onClickRightIcon: Y,
        "onUpdate:modelValue": b
      }, T), ye(I, ["left-icon", "right-icon"]));
    };
    return Te({
      focus: D,
      blur: o
    }), () => {
      var T;
      return l("div", {
        class: qe({
          "show-action": e.showAction
        }),
        style: {
          background: e.background
        }
      }, [(T = I.left) == null ? void 0 : T.call(I), l("div", {
        class: qe("content", e.shape)
      }, [a(), k()]), N()]);
    };
  }
});
const uu = ge(gu);
const Fe = (e, t) => {
  const I = e.__vccOpts || e;
  for (const [M, n] of t)
    I[M] = n;
  return I;
}, CI = R({
  name: "KvButton",
  components: { VanButton: TI },
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
    return { textcolor: z(() => `var(--van-button-${e.type}-background)`) };
  }
}), XI = () => {
  IM((e) => ({
    "094aed15": e.textcolor
  }));
}, HI = CI.setup;
CI.setup = HI ? (e, t) => (XI(), HI(e, t)) : XI;
function cu(e, t, I, M, n, i) {
  const c = xe("van-button");
  return F(), Le(c, De({
    type: e.type,
    class: { "is-link": e.link }
  }, e.$attrs), _M({
    loading: je(() => [
      Ee(e.$slots, "loading", {}, void 0, !0)
    ]),
    default: je(() => [
      Ee(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 2
  }, [
    e.$attrs.icon ? void 0 : {
      name: "icon",
      fn: je(() => [
        Ee(e.$slots, "icon", {}, void 0, !0)
      ]),
      key: "0"
    }
  ]), 1040, ["type", "class"]);
}
const Ct = /* @__PURE__ */ Fe(CI, [["render", cu], ["__scopeId", "data-v-36fadbb1"]]);
Ct.install = function(e) {
  e.component(Ct.name, Ct);
};
const Nu = R({
  name: "KvInput",
  components: { VanField: UM },
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
      inputValue: z({
        get: () => e.modelValue,
        set: (n) => t("update:modelValue", n)
      }),
      formatter: (n) => {
        if (e.type !== "number")
          return n;
        let i = n;
        i.substr(0, 1) === "0" && i.length === 2 && !i.includes(".") && (i = i.substr(1, i.length));
        const c = new RegExp(`[^0-9]{0,1}(\\d*(?:\\.\\d{0,${e.point}})?).*$`, "g");
        return i = i.replace(c, "$1") ?? "", Number(i) < e.min ? e.min : Number(i) > e.max ? e.max : i;
      }
    };
  }
}), au = { class: "flex-center k-input" };
function lu(e, t, I, M, n, i) {
  const c = xe("van-field");
  return F(), ae("div", au, [
    Ae("span", null, Qe(e.prefix), 1),
    l(c, De({
      modelValue: e.inputValue,
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.inputValue = u),
      type: e.type
    }, e.$attrs, { formatter: e.formatter }), null, 16, ["modelValue", "type", "formatter"]),
    Ae("span", null, Qe(e.suffix), 1)
  ]);
}
const yt = /* @__PURE__ */ Fe(Nu, [["render", lu]]);
yt.install = function(e) {
  e.component(yt.name, yt);
};
const Du = R({
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
    return { columnStyle: z(() => function(n) {
      const i = Number(n.width) ? `${n.width}px` : n.width;
      return [
        `text-align:${e.align}`,
        e.border ? "border-bottom: 1px solid #ebedf0;padding-bottom: 6px" : "",
        e.rowStyle,
        n.width ? `width: ${i}` : "flex: 1"
      ];
    }), clickRow: (n, i) => t("row-click", n, i) };
  }
}), ou = { class: "k-table bg-white mt10 p20" }, ju = { class: "table-content" }, su = { class: "table-body" }, Tu = { key: 1 }, ru = {
  key: 0,
  class: "flex-center p20"
}, Au = { class: "color-99" };
function du(e, t, I, M, n, i) {
  return F(), ae("div", ou, [
    Ae("div", ju, [
      Ae("div", {
        class: "table-header flex",
        style: Qt(e.headerStyle)
      }, [
        (F(!0), ae(Pe, null, dt(e.columns, (c) => (F(), ae("div", {
          key: c.prop,
          class: "table-column",
          style: Qt(e.columnStyle(c))
        }, Qe(c.label), 5))), 128))
      ], 4),
      Ae("div", su, [
        (F(!0), ae(Pe, null, dt(e.data, (c, u) => (F(), ae("div", {
          key: u,
          class: "flex table-column column-item flex-align-center"
        }, [
          (F(!0), ae(Pe, null, dt(e.columns, (g) => (F(), ae("div", {
            key: g.prop,
            style: Qt(e.columnStyle(g)),
            class: cI({ "text-overflow": e.showOverflowTooltip })
          }, [
            e.$slots[(g == null ? void 0 : g.custom) ?? (g == null ? void 0 : g.prop)] ? Ee(e.$slots, g.custom ?? g.prop, {
              key: 0,
              row: c,
              index: u
            }, void 0, !0) : (F(), ae("span", Tu, Qe(c[g.prop]), 1))
          ], 6))), 128))
        ]))), 128)),
        e.data.length ? pe("", !0) : (F(), ae("div", ru, [
          Ee(e.$slots, "empty", {}, () => [
            Ae("span", Au, Qe(e.emptyText), 1)
          ], !0)
        ]))
      ])
    ])
  ]);
}
const wt = /* @__PURE__ */ Fe(Du, [["render", du], ["__scopeId", "data-v-a71233b4"]]);
wt.install = function(e) {
  e.component(wt.name, wt);
};
const yI = R({
  name: "KvTree",
  components: { VanIcon: me },
  props: {
    modelValue: { type: Array, default: () => [] },
    depth: { type: Number, default: 0 },
    props: { type: Object, default: () => ({}) },
    theme: { type: String, default: "#f4364c" },
    select: { type: [String, Number], default: "" }
  },
  emits: ["update:modelValue", "update:select", "click", "change"],
  setup(e, { emit: t }) {
    const I = z({
      get: () => e.modelValue,
      set: (N) => t("update:modelValue", N)
    }), M = z(() => ({
      name: "name",
      id: "id",
      child: "child",
      disabled: "disabled",
      ...e.props
    })), n = (N) => (N.forEach((o) => {
      o.showChildren = !1, o[M.value.child] && n(o[M.value.child]);
    }), N), i = S(e.select), c = (N) => {
      N[M.value.disabled] || (N[M.value.child] && N.showChildren || (I.value = n(I.value)), N.showChildren = !N.showChildren, i.value = N[M.value.id], u(N));
    }, u = (N) => {
      t("update:select", N[M.value.id]), t("change", N), t("click", N);
    }, g = (N, o) => N.disabled ? "not-allowed" : N[M.value.id] === i.value ? {
      0: "first-depth c-white",
      1: "second-depth c-white",
      2: "third-depth c-white"
    }[o] : "", a = z(() => e.theme);
    return {
      list: I,
      clickItem: c,
      clickChild: u,
      getClassName: g,
      themecolor: a,
      deaultProps: M
    };
  }
}), JI = () => {
  IM((e) => ({
    "80a71366": e.themecolor
  }));
}, FI = yI.setup;
yI.setup = FI ? (e, t) => (JI(), FI(e, t)) : JI;
const Cu = { class: "k-tree" }, yu = ["onClick"], wu = { class: "flex-center flex1 tree-item-content" }, Lu = { class: "mr10" };
function zu(e, t, I, M, n, i) {
  const c = xe("van-icon"), u = xe("kv-tree");
  return F(), ae("div", Cu, [
    (F(!0), ae(Pe, null, dt(e.list, (g) => (F(), ae(Pe, {
      key: g[e.deaultProps.id]
    }, [
      Ae("div", {
        class: cI(["tree-item p10 flex-center", e.getClassName(g, e.depth)]),
        onClick: $M((a) => e.clickItem(g, e.depth), ["stop"])
      }, [
        Ae("div", wu, [
          Ae("span", Lu, Qe(g[e.deaultProps.name]), 1),
          g[e.deaultProps.child] ? (F(), Le(c, {
            key: 0,
            name: g.showChildren ? "arrow-up" : "arrow-down"
          }, null, 8, ["name"])) : pe("", !0)
        ])
      ], 10, yu),
      g.showChildren && g[e.deaultProps.child] ? (F(), Le(u, {
        key: 0,
        modelValue: g[e.deaultProps.child],
        "onUpdate:modelValue": (a) => g[e.deaultProps.child] = a,
        props: e.deaultProps,
        theme: e.theme,
        depth: e.depth + 1,
        onClick: e.clickChild
      }, null, 8, ["modelValue", "onUpdate:modelValue", "props", "theme", "depth", "onClick"])) : pe("", !0)
    ], 64))), 128))
  ]);
}
const Lt = /* @__PURE__ */ Fe(yI, [["render", zu], ["__scopeId", "data-v-31963786"]]);
Lt.install = function(e) {
  e.component(Lt.name, Lt);
};
const Su = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBoZWlnaHQ9IjEwMjQiIGxlZ2FjeS1tZXRyaWNzPSJmYWxzZSIgbm9kZS1pZD0iMSIgc2lsbHl2Zz0idHJ1ZSIgdGVtcGxhdGUtaGVpZ2h0PSIxMDI0IiB0ZW1wbGF0ZS13aWR0aD0iMTAyNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB3aWR0aD0iMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnMgbm9kZS1pZD0iNzEiPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTEiIG5vZGUtaWQ9IjUiIHgxPSIwLjUiIHgyPSIwLjUiIHkxPSIxLjAwMTIyMjciIHkyPSItMC4wMDA1Nzk4MzI4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZGY1ZjciIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZhZDRkMiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtMiIgbm9kZS1pZD0iOCIgeDE9IjAuNTAwODQzOSIgeDI9IjAuNTAwODQzOSIgeTE9IjEiIHkyPSIwLjAwMDA2NDk0NzM4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4xIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmRlY2ViIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC0zIiBub2RlLWlkPSIxMSIgeDE9IjAuNTAwMDQ1OSIgeDI9IjAuNTAwMDQ1OSIgeTE9IjAuOTk5MzEyIiB5Mj0iLTAuMDAwODExMjc3MzYiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYWQ2ZDQiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTQiIG5vZGUtaWQ9IjE0IiB4MT0iMC41IiB4Mj0iMC41IiB5MT0iMSIgeTI9IjAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuMTMiIHN0b3AtY29sb3I9IiNmZWZjZmIiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuNDEiIHN0b3AtY29sb3I9IiNmZWZjZmIiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuODEiIHN0b3AtY29sb3I9IiNmOWQ4ZDUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmOWQ4ZDUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTUiIG5vZGUtaWQ9IjIwIiB4MT0iMC4zMzc2NDQ5NiIgeDI9IjAuNSIgeTE9IjAuNTY1OTU1OCIgeTI9IjAuNDIzMDc5NyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmM2YyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmUyZTAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTYiIG5vZGUtaWQ9IjIzIiB4MT0iMCIgeDI9IjEiIHkxPSIwLjUiIHkyPSIwLjUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y2OTg5NiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y2NTU1MSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtNyIgbm9kZS1pZD0iMjYiIHgxPSIwLjUiIHgyPSIwLjUiIHkxPSIwLjgxNzAwMjciIHkyPSIwLjI2OTg3NTgyIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmMzZmNmEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmOGEyYTAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTgiIG5vZGUtaWQ9IjI5IiB4MT0iMC41IiB4Mj0iMC41IiB5MT0iMCIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y3ODQ4MyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y3NzY3MSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtOSIgbm9kZS1pZD0iMzIiIHgxPSIwLjUiIHgyPSIwLjU4MDk3ODQiIHkxPSIwLjQ2NTcyNDI2IiB5Mj0iMC41Njc5NTY0NSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjhhMmEwIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjk0ZTQ3Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC0xMCIgbm9kZS1pZD0iMzUiIHgxPSIwLjg5NTYwNzY1IiB4Mj0iMC4xODM1OTc1IiB5MT0iMC40MzU2Mzk4NiIgeTI9IjAuNTY0MzYwMTQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2U5OWI5YSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2YzYzBiZiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtMTEiIG5vZGUtaWQ9IjM4IiB4MT0iMC44MzUzMjU0IiB4Mj0iMC40MDAzNTQyIiB5MT0iMC4wNTc5MjIxMSIgeTI9IjAuODc2NDE1NSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWE5ZDljIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjJiYmJhIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTSAwLjAwIDAuMDAgTCAxMDI0LjAwIDAuMDAgTCAxMDI0LjAwIDEwMjQuMDAgTCAwLjAwIDEwMjQuMDAgWiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBub2RlLWlkPSIxNDciIHN0cm9rZT0ibm9uZSIgdGFyZ2V0LWhlaWdodD0iMTAyNCIgdGFyZ2V0LXdpZHRoPSIxMDI0IiB0YXJnZXQteD0iMCIgdGFyZ2V0LXk9IjAiPjwvcGF0aD48ZyBub2RlLWlkPSIxNDkiPjxwYXRoIGQ9Ik0gMTAxLjM0IDYwNi4wMCBMIDEwNy4wMCA2NjcuMDAgTCA3Mi4wMCA2NjIuOTMgWiIgZmlsbD0iI2ZhZDRkMiIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNDQiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjYxIiB0YXJnZXQtd2lkdGg9IjM1IiB0YXJnZXQteD0iNzIiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDEwMS4wMCA2MDYuMDAgTCAxMzguMDAgNjU0LjIxIEwgMTA2LjY3IDY2Ny4wMCBaIiBmaWxsPSIjZmRjNmMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0NSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNjEiIHRhcmdldC13aWR0aD0iMzciIHRhcmdldC14PSIxMDEiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDE2Ny4yMyAzNDIuMDMgTCAxNjUuOTkgMzM3LjEwIEwgMTY0LjI2IDMzMi41MSBMIDE2Mi4wMiAzMjguMjIgTCAxNTkuMzAgMzI0LjIxIEwgMTU2LjIwIDMyMC42MSBMIDE1Mi43MCAzMTcuMzcgTCAxNDguODUgMzE0LjU2IEwgMTQ0LjcyIDMxMi4yMyBMIDE0MC4yOSAzMTAuMzUgTCAxMzUuNjggMzA5LjAxIEwgMTMwLjg4IDMwOC4yMyBMIDEyNS44NSAzMDguMDEgTCAxMjEuNzkgMzA4LjE4IEwgMTE3Ljg1IDMwOC43MyBMIDExMy45OSAzMDkuNjMgTCAxMTAuMjEgMzEwLjkwIEwgMTA2LjU2IDMxMi41MiBMIDEwMy4xMCAzMTQuNDYgTCA5OS44MSAzMTYuNzMgTCA5Ni42OCAzMTkuMzUgTCA5My4yNCAzMTguMDAgTCA4OS43NCAzMTcuMDQgTCA4Ni4xNiAzMTYuNDYgTCA4Mi40OCAzMTYuMjYgTCA3OC41OCAzMTYuNDQgTCA3NC44NyAzMTcuMDMgTCA3MS4zMiAzMTguMDIgTCA2Ny45MCAzMTkuNDMgTCA2NC42NSAzMjEuMjEgTCA2MS42NyAzMjMuMzEgTCA1OC45MyAzMjUuNzMgTCA1Ni40MyAzMjguNDggTCA1NC4yNSAzMzEuNDkgTCA1Mi40NCAzMzQuNzMgTCA1MC45NyAzMzguMjIgTCA0OS44NiAzNDIuMDAgTCA0NS45NyAzNDMuMTkgTCA0Mi40NCAzNDQuODcgTCAzOS4yMiAzNDcuMDYgTCAzNi4zNSAzNDkuNjkgTCAzMy45MiAzNTIuNjYgTCAzMS45MCAzNTYuMDEgTCAzMC4zOSAzNTkuNjEgTCAyOS40MiAzNjMuNDMgTCAyOS4wMCAzNjcuNTEgTCAyOS4zNyAzNzEuMjQgTCAzMC4xOCAzNzQuNzMgTCAzMS40MyAzNzguMDMgTCAzMy4wOSAzODEuMTQgTCAzNS4wOSAzODMuOTYgTCAzNy40NCAzODYuNTEgTCA0MC4wOSAzODguNzQgTCA0Mi45OCAzOTAuNjEgTCA0Ni4xNSAzOTIuMTEgTCA0OS40OCAzOTMuMTkgTCA1Mi45OCAzOTMuODIgTCA1Ni42OCAzOTMuOTkgTCAxNjAuMzIgMzkzLjk5IEwgMTY0LjAyIDM5My44MiBMIDE2Ny41MiAzOTMuMjAgTCAxNzAuODYgMzkyLjEyIEwgMTc0LjAyIDM5MC42MiBMIDE3Ni45MiAzODguNzUgTCAxNzkuNTcgMzg2LjUyIEwgMTgxLjkyIDM4My45NyBMIDE4My45MiAzODEuMTUgTCAxODUuNTggMzc4LjA0IEwgMTg2LjgyIDM3NC43NCBMIDE4Ny42MyAzNzEuMjQgTCAxODguMDAgMzY3LjUxIEwgMTg3LjU4IDM2My40NCBMIDE4Ni42MiAzNTkuNjMgTCAxODUuMTEgMzU2LjA0IEwgMTgzLjExIDM1Mi42OSBMIDE4MC42OCAzNDkuNzIgTCAxNzcuODIgMzQ3LjA5IEwgMTc0LjYyIDM0NC45MSBMIDE3MS4xMCAzNDMuMjIgTCAxNjcuMjMgMzQyLjAzIEwgMTY3LjIzIDM0Mi4wMyBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0NiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iODUuOTg0OTI0IiB0YXJnZXQtd2lkdGg9IjE1OSIgdGFyZ2V0LXg9IjI5IiB0YXJnZXQteT0iMzA4LjAwNjg0Ij48L3BhdGg+PHBhdGggZD0iTSA3NjguNzEgMjAzLjEwIEwgNzY2Ljc3IDIwMC4zOSBMIDc2NC42MCAxOTcuOTUgTCA3NjIuMTkgMTk1Ljc4IEwgNzU5LjU3IDE5My44OCBMIDc1Ni43OSAxOTIuMjggTCA3NTMuODQgMTkwLjk4IEwgNzUwLjc3IDE5MC4wMCBMIDc0Ny42MCAxODkuMzUgTCA3NDQuMzEgMTg5LjA1IEwgNzQyLjIyIDE4Ni4xOSBMIDczOS44OCAxODMuNjUgTCA3MzcuMjkgMTgxLjQwIEwgNzM0LjQ3IDE3OS40NSBMIDczMS40OCAxNzcuODUgTCA3MjguMzEgMTc2LjU4IEwgNzI1LjAyIDE3NS42NyBMIDcyMS42MyAxNzUuMTUgTCA3MTguMTIgMTc1LjAwIEwgNzEzLjkxIDE3NS4yNSBMIDcwOS44NiAxNzYuMDQgTCA3MDUuOTQgMTc3LjM3IEwgNzAyLjIyIDE3OS4yMSBMIDY5OC43OCAxODEuNTIgTCA2OTUuNjAgMTg0LjM0IEwgNjkyLjgzIDE4My42MCBMIDY5MC4wMiAxODMuMTUgTCA2ODcuMTYgMTgzLjAwIEwgNjgzLjgyIDE4My4yMSBMIDY4MC42OSAxODMuNzYgTCA2NzcuNzQgMTg0LjY0IEwgNjc0Ljk1IDE4NS44NSBMIDY3MS40NiAxODcuOTQgTCA2NjguNDggMTkwLjQ1IEwgNjY1Ljk0IDE5My4zOCBMIDY2NC4zNyAxOTUuODMgTCA2NjMuMTcgMTk4LjQxIEwgNjYyLjMyIDIwMS4xNSBMIDY2MS44MiAyMDQuMDcgTCA2NTguNTMgMjA1LjEzIEwgNjU1LjU0IDIwNi42MSBMIDY1Mi44MCAyMDguNTAgTCA2NTAuMzcgMjEwLjc2IEwgNjQ4LjI5IDIxMy4zMSBMIDY0Ni41NyAyMTYuMTcgTCA2NDUuMjYgMjE5LjI1IEwgNjQ0LjQwIDIyMi41MSBMIDY0NC4wMCAyMjUuOTkgTCA2NDQuMjQgMjI5LjE0IEwgNjQ0LjkxIDIzMi4xMSBMIDY0Ni4wMSAyMzQuOTMgTCA2NDcuNDkgMjM3LjU5IEwgNjQ5LjMwIDI0MC4wMiBMIDY1MS40NiAyNDIuMjUgTCA2NTMuODkgMjQ0LjE5IEwgNjU2LjU3IDI0NS44MyBMIDY1OS41MiAyNDcuMTkgTCA2NjIuNjIgMjQ4LjE3IEwgNjY1Ljg4IDI0OC43OCBMIDY2OS4zNCAyNDkuMDAgTCA3NjYuNjYgMjQ5LjAwIEwgNzcwLjE3IDI0OC43OCBMIDc3My40NiAyNDguMTcgTCA3NzYuNTYgMjQ3LjE5IEwgNzc5LjUxIDI0NS44MyBMIDc4Mi4xOSAyNDQuMTkgTCA3ODQuNjEgMjQyLjI1IEwgNzg2Ljc2IDI0MC4wMiBMIDc4OC41NSAyMzcuNTkgTCA3OTAuMDIgMjM0LjkzIEwgNzkxLjEwIDIzMi4xMSBMIDc5MS43NiAyMjkuMTQgTCA3OTIuMDAgMjI1Ljk5IEwgNzkxLjgyIDIyMi45OCBMIDc5MS4yNSAyMjAuMTUgTCA3OTAuMzEgMjE3LjQ3IEwgNzg4Ljk3IDIxNC45MSBMIDc4Ni42OSAyMTEuODAgTCA3ODMuOTMgMjA5LjEwIEwgNzgwLjYyIDIwNi43NyBMIDc3Ny45MiAyMDUuMzggTCA3NzUuMDYgMjA0LjMwIEwgNzcyLjAwIDIwMy41NCBMIDc2OC43MSAyMDMuMTAgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0yKSIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNDciIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjczLjk5NTE5IiB0YXJnZXQtd2lkdGg9IjE0Ny45OTY0IiB0YXJnZXQteD0iNjQ0IiB0YXJnZXQteT0iMTc1LjAwNDgiPjwvcGF0aD48cGF0aCBkPSJNIDk0OS42MiAxNzEuNzQgTCA5NDcuMDAgMTY2Ljk1IEwgOTQ0LjAzIDE2Mi41NCBMIDk0MC42OSAxNTguNDcgTCA5MzYuOTkgMTU0Ljc0IEwgOTMyLjk1IDE1MS4zNSBMIDkyOC42NyAxNDguMzggTCA5MjQuMTQgMTQ1LjgxIEwgOTE5LjMzIDE0My42NSBMIDkxNC4zNSAxNDEuOTMgTCA5MDkuMjQgMTQwLjY5IEwgOTAzLjk3IDEzOS45MyBMIDg5OC41MSAxMzkuNjQgTCA4OTIuNDYgMTM5Ljk4IEwgODg2LjU2IDE0MC45NSBMIDg4MC43OCAxNDIuNTQgTCA4NzUuMjEgMTQ0LjczIEwgODY5LjkxIDE0Ny40OSBMIDg2NC44NiAxNTAuODUgTCA4NjIuNTEgMTQ2LjcxIEwgODU5Ljg5IDE0Mi44NiBMIDg1Ny4wMSAxMzkuMzAgTCA4NTMuODYgMTM2LjAwIEwgODQ5LjI3IDEzMi4wMSBMIDg0NC4zNSAxMjguNTcgTCA4MzkuMDggMTI1LjY3IEwgODMzLjUzIDEyMy4zNCBMIDgyNy43OCAxMjEuNjEgTCA4MjEuODAgMTIwLjQ5IEwgODE3LjI1IDEyMC4wNyBMIDgxMi42NyAxMjAuMDMgTCA4MDguMDMgMTIwLjM2IEwgODAzLjMyIDEyMS4wOCBMIDc5OC42OCAxMjIuMjEgTCA3OTQuMjYgMTIzLjY2IEwgNzkwLjA0IDEyNS40NSBMIDc4Ni4wMCAxMjcuNTcgTCA3ODAuOTAgMTMwLjg4IEwgNzc2LjI0IDEzNC42NyBMIDc3Mi4wMCAxMzguOTMgTCA3NjguMjMgMTQzLjYyIEwgNzY0Ljk5IDE0OC42NyBMIDc2Mi4yNiAxNTQuMTEgTCA3NjAuNjEgMTU4LjM2IEwgNzU5LjMxIDE2Mi43NSBMIDc1OC4zNiAxNjcuMzAgTCA3NTcuNzYgMTcyLjAyIEwgNzUyLjgwIDE3My44NSBMIDc0OC4xNyAxNzYuMDMgTCA3NDMuODMgMTc4LjU4IEwgNzM5Ljc2IDE4MS41MCBMIDczNS45NiAxODQuNzcgTCA3MzIuNTAgMTg4LjMwIEwgNzI5LjM4IDE5Mi4xMSBMIDcyNi41OCAxOTYuMTkgTCA3MjQuMTUgMjAwLjUxIEwgNzIyLjEyIDIwNC45OCBMIDcyMC40NyAyMDkuNjQgTCA3MTkuMjEgMjE0LjUwIEwgNzE4LjM5IDIxOS40MyBMIDcxOC4wMyAyMjQuNDUgTCA3MTguMTEgMjI5LjU3IEwgNzE4LjY2IDIzNC44MSBMIDcxOS43MSAyMzkuOTggTCA3MjEuMTcgMjQ0Ljg5IEwgNzIzLjAyIDI0OS41NiBMIDcyNS4yOSAyNTQuMDIgTCA3MjcuOTQgMjU4LjI4IEwgNzMwLjkxIDI2Mi4yMyBMIDczNC4xOSAyNjUuOTAgTCA3MzcuODEgMjY5LjI4IEwgNzQxLjcwIDI3Mi4zNCBMIDc0NS44MiAyNzUuMDMgTCA3NTAuMTggMjc3LjM3IEwgNzU0LjgwIDI3OS4zNSBMIDc1OS41NSAyODAuOTIgTCA3NjQuNDUgMjgyLjA1IEwgNzY5LjUzIDI4Mi43NCBMIDc3NC44MCAyODMuMDAgTCA5MzMuMDUgMjgzLjAwIEwgOTM4LjM2IDI4Mi43NiBMIDk0My40NiAyODIuMDcgTCA5NDguNDAgMjgwLjk0IEwgOTUzLjE3IDI3OS4zNyBMIDk1Ny44MiAyNzcuMzggTCA5NjIuMjAgMjc1LjA0IEwgOTY2LjMzIDI3Mi4zMyBMIDk3MC4yNSAyNjkuMjUgTCA5NzMuODggMjY1Ljg0IEwgOTc3LjE3IDI2Mi4xNSBMIDk4MC4xNCAyNTguMTcgTCA5ODIuODAgMjUzLjg5IEwgOTg1LjA2IDI0OS40MCBMIDk4Ni45MSAyNDQuNjkgTCA5ODguMzUgMjM5Ljc1IEwgOTg5LjM4IDIzNC41NSBMIDk4OS45MSAyMjkuMjcgTCA5ODkuOTYgMjI0LjEyIEwgOTg5LjU2IDIxOS4wOCBMIDk4OC43MCAyMTQuMTMgTCA5ODcuNDAgMjA5LjI2IEwgOTg1LjcxIDIwNC41OSBMIDk4My42MyAyMDAuMTAgTCA5ODEuMTQgMTk1Ljc5IEwgOTc4LjI5IDE5MS43MSBMIDk3NS4xMiAxODcuOTIgTCA5NzEuNjEgMTg0LjQxIEwgOTY3Ljc0IDE4MS4xNiBMIDk2My42MiAxNzguMjcgTCA5NTkuMjMgMTc1Ljc2IEwgOTU0LjU1IDE3My42MiBMIDk0OS41NCAxNzEuODUgTCA5NDkuNjIgMTcxLjc0IFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjQ4IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxNjIuOTc0OTgiIHRhcmdldC13aWR0aD0iMjcxLjkzNjgzIiB0YXJnZXQteD0iNzE4LjAyNTciIHRhcmdldC15PSIxMjAuMDI1MDIiPjwvcGF0aD48ZyBub2RlLWlkPSIxNTIiPjxwYXRoIGQ9Ik0gMTAyNC4wMCA3NDIuMDAgTCAxMDIzLjcyIDc0Ny4yNiBMIDEwMjIuOTIgNzUyLjQ5IEwgMTAyMS41OCA3NTcuNzQgTCAxMDE5LjY4IDc2My4wMiBMIDEwMTcuMTkgNzY4LjM1IEwgMTAxNC4wNyA3NzMuNzUgTCAxMDA5Ljk5IDc3OS42MyBMIDEwMDUuMTIgNzg1LjU4IEwgOTk5LjM5IDc5MS42MiBMIDk5Mi43MiA3OTcuNzYgTCA5ODUuMDMgODAzLjk5IEwgOTc3LjQ0IDgwOS41MCBMIDk2OS4wMCA4MTUuMDQgTCA5NTkuNjYgODIwLjYyIEwgOTQ5LjM0IDgyNi4yNCBMIDkzNy45OCA4MzEuODggTCA5MjQuMTIgODM4LjEzIEwgOTA4LjkxIDg0NC4zNCBMIDg5Mi4yNCA4NTAuNDggTCA4NzQuMDQgODU2LjU1IEwgODU0LjczIDg2Mi4zNSBMIDgzNC4yNSA4NjcuODkgTCA4MTIuNTUgODczLjE1IEwgNzkwLjc2IDg3Ny44OCBMIDc2OC4wMCA4ODIuMzAgTCA3NDQuMjMgODg2LjM4IEwgNzIwLjQxIDg4OS45NyBMIDY5NS44MiA4OTMuMjAgTCA2NzAuNDUgODk2LjA1IEwgNjQ1LjA0IDg5OC40NCBMIDYxOS4wOSA5MDAuNDIgTCA1OTIuNTggOTAxLjk4IEwgNTY2LjA1IDkwMy4xMCBMIDUzOS4xOSA5MDMuNzcgTCA1MTIuMDAgOTA0LjAwIEwgNDg0LjgxIDkwMy43NyBMIDQ1Ny45NSA5MDMuMTAgTCA0MzEuNDIgOTAxLjk4IEwgNDA0LjkxIDkwMC40MiBMIDM3OC45NiA4OTguNDQgTCAzNTMuNTUgODk2LjA1IEwgMzI4LjE4IDg5My4yMCBMIDMwMy41OSA4ODkuOTcgTCAyNzkuNzcgODg2LjM4IEwgMjU2LjAwIDg4Mi4zMCBMIDIzMy4yNCA4NzcuODggTCAyMTEuNDUgODczLjE1IEwgMTg5Ljc1IDg2Ny44OSBMIDE2OS4yNyA4NjIuMzUgTCAxNDkuOTYgODU2LjU1IEwgMTMxLjc2IDg1MC40OCBMIDExNS4wOSA4NDQuMzQgTCA5OS44OCA4MzguMTMgTCA4Ni4wMiA4MzEuODggTCA3NC42NiA4MjYuMjQgTCA2NC4zNCA4MjAuNjIgTCA1NS4wMCA4MTUuMDQgTCA0Ni41NiA4MDkuNTAgTCAzOC45NyA4MDMuOTkgTCAzMS4yOCA3OTcuNzYgTCAyNC42MSA3OTEuNjIgTCAxOC44OCA3ODUuNTggTCAxNC4wMSA3NzkuNjMgTCA5LjkzIDc3My43NSBMIDYuODEgNzY4LjM1IEwgNC4zMiA3NjMuMDIgTCAyLjQyIDc1Ny43NCBMIDEuMDggNzUyLjQ5IEwgMC4yOCA3NDcuMjYgTCAwLjAwIDc0Mi4wMCBMIDAuMjggNzM2Ljc0IEwgMS4wOCA3MzEuNTEgTCAyLjQyIDcyNi4yNiBMIDQuMzIgNzIwLjk4IEwgNi44MSA3MTUuNjUgTCA5LjkzIDcxMC4yNSBMIDE0LjAxIDcwNC4zNyBMIDE4Ljg4IDY5OC40MiBMIDI0LjYxIDY5Mi4zOCBMIDMxLjI4IDY4Ni4yNCBMIDM4Ljk3IDY4MC4wMSBMIDQ2LjU2IDY3NC41MCBMIDU1LjAwIDY2OC45NiBMIDY0LjM0IDY2My4zOCBMIDc0LjY2IDY1Ny43NiBMIDg2LjAyIDY1Mi4xMiBMIDk5Ljg4IDY0NS44NyBMIDExNS4wOSA2MzkuNjYgTCAxMzEuNzYgNjMzLjUyIEwgMTQ5Ljk2IDYyNy40NSBMIDE2OS4yNyA2MjEuNjUgTCAxODkuNzUgNjE2LjExIEwgMjExLjQ1IDYxMC44NSBMIDIzMy4yNCA2MDYuMTIgTCAyNTYuMDAgNjAxLjcwIEwgMjc5Ljc3IDU5Ny42MiBMIDMwMy41OSA1OTQuMDMgTCAzMjguMTggNTkwLjgwIEwgMzUzLjU1IDU4Ny45NSBMIDM3OC45NiA1ODUuNTYgTCA0MDQuOTEgNTgzLjU4IEwgNDMxLjQyIDU4Mi4wMiBMIDQ1Ny45NSA1ODAuOTAgTCA0ODQuODEgNTgwLjIzIEwgNTEyLjAwIDU4MC4wMCBMIDUzOS4xOSA1ODAuMjMgTCA1NjYuMDUgNTgwLjkwIEwgNTkyLjU4IDU4Mi4wMiBMIDYxOS4wOSA1ODMuNTggTCA2NDUuMDQgNTg1LjU2IEwgNjcwLjQ1IDU4Ny45NSBMIDY5NS44MiA1OTAuODAgTCA3MjAuNDEgNTk0LjAzIEwgNzQ0LjIzIDU5Ny42MiBMIDc2OC4wMCA2MDEuNzAgTCA3OTAuNzYgNjA2LjEyIEwgODEyLjU1IDYxMC44NSBMIDgzNC4yNSA2MTYuMTEgTCA4NTQuNzMgNjIxLjY1IEwgODc0LjA0IDYyNy40NSBMIDg5Mi4yNCA2MzMuNTIgTCA5MDguOTEgNjM5LjY2IEwgOTI0LjEyIDY0NS44NyBMIDkzNy45OCA2NTIuMTIgTCA5NDkuMzQgNjU3Ljc2IEwgOTU5LjY2IDY2My4zOCBMIDk2OS4wMCA2NjguOTYgTCA5NzcuNDQgNjc0LjUwIEwgOTg1LjAzIDY4MC4wMSBMIDk5Mi43MiA2ODYuMjQgTCA5OTkuMzkgNjkyLjM4IEwgMTAwNS4xMiA2OTguNDIgTCAxMDA5Ljk5IDcwNC4zNyBMIDEwMTQuMDcgNzEwLjI1IEwgMTAxNy4xOSA3MTUuNjUgTCAxMDE5LjY4IDcyMC45OCBMIDEwMjEuNTggNzI2LjI2IEwgMTAyMi45MiA3MzEuNTEgTCAxMDIzLjcyIDczNi43NCBMIDEwMjQuMDAgNzQyLjAwIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNCkiIGZpbGwtb3BhY2l0eT0iMC40MDc3NDQ2NSIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSw0IiBpZD0i5qSt5ZyG5b2iIiBub2RlLWlkPSI0OSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIwLjQwNzc0NDY1IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjMyNCIgdGFyZ2V0LXdpZHRoPSIxMDI0IiB0YXJnZXQteD0iMCIgdGFyZ2V0LXk9IjU4MCI+PC9wYXRoPjwvZz48cGF0aCBkPSJNIDkwNi4wMCA2MDYuMDAgTCA5MDEuMTMgNjcwLjAwIEwgODY1LjAwIDY1OS41MiBaIiBmaWxsPSIjZmFkNGQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI1MCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNjQiIHRhcmdldC13aWR0aD0iNDEiIHRhcmdldC14PSI4NjUiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDkwNC44NSA2MDYuMDAgTCA5MzUuMDAgNjYyLjM5IEwgOTAwLjAwIDY3MC4wMCBaIiBmaWxsPSIjZmRjNmMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI1MSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNjQiIHRhcmdldC13aWR0aD0iMzUiIHRhcmdldC14PSI5MDAiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDIwMS4zNyA1OTQuMDAgTCAyMDYuMDAgNjQyLjAwIEwgMTc3LjAwIDYzOC44MSBaIiBmaWxsPSIjZjdkOWQ3IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI1MiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNDgiIHRhcmdldC13aWR0aD0iMjkiIHRhcmdldC14PSIxNzciIHRhcmdldC15PSI1OTQiPjwvcGF0aD48cGF0aCBkPSJNIDIwMC4wMCA1OTQuMDAgTCAyMzAuMDAgNjMxLjg5IEwgMjA0LjU1IDY0Mi4wMCBaIiBmaWxsPSIjZmZjY2M4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI1MyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNDgiIHRhcmdldC13aWR0aD0iMzAiIHRhcmdldC14PSIyMDAiIHRhcmdldC15PSI1OTQiPjwvcGF0aD48cGF0aCBkPSJNIDE0OC40OCA1NjQuMDAgTCAxNTguMDAgNjY1LjAwIEwgOTQuMDAgNjU4LjcxIFoiIGZpbGw9IiNmYWQ0ZDIiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjU0IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMDEiIHRhcmdldC13aWR0aD0iNjQiIHRhcmdldC14PSI5NCIgdGFyZ2V0LXk9IjU2NCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTQ3LjAwIDU2NC4wMCBMIDIxNC4wMCA2NDMuMzcgTCAxNTYuNTMgNjY1LjAwIFoiIGZpbGw9IiNmZGM2YzMiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjU1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMDEiIHRhcmdldC13aWR0aD0iNjciIHRhcmdldC14PSIxNDciIHRhcmdldC15PSI1NjQiPjwvcGF0aD48L2c+PHBhdGggZD0iTSA2ODkuMjUgNjY4LjAwIEwgMzQ4LjAwIDY4MC4wMCBMIDIyMS4xNCA4MDQuMDAgTCA0MzEuNDEgODUxLjYxIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9Iui3r+W+hC0yNCIgbm9kZS1pZD0iNTYiIHN0cm9rZT0ibm9uZSIgdGFyZ2V0LWhlaWdodD0iMTgzLjYwNTEiIHRhcmdldC13aWR0aD0iNDY4LjExMTMzIiB0YXJnZXQteD0iMjIxLjEzOTc2IiB0YXJnZXQteT0iNjY4Ij48L3BhdGg+PHBhdGggZD0iTSA2ODkuMjUgNjY1LjAwIEwgNTA2LjUyIDYzNi42NiBMIDUwNi41MiA0NDQuMDAgTCA2ODkuMjUgNDcyLjM0IFoiIGZpbGw9IiNmNjZlNmIiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjIiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjU4IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIyMjEiIHRhcmdldC13aWR0aD0iMTgyLjczMTYzIiB0YXJnZXQteD0iNTA2LjUxOTQ3IiB0YXJnZXQteT0iNDQ0Ij48L3BhdGg+PHBhdGggZD0iTSAzNDYuNzUgNjY3Ljg3IEwgNTA2LjUyIDYzNi42NiBMIDUwNi41MiA0NDQuMDAgTCAzNDYuNzUgNDc0Ljc5IFoiIGZpbGw9IiNmOGE0YTIiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjIiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjU5IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIyMjMuODcwMTIiIHRhcmdldC13aWR0aD0iMTU5Ljc3MDU3IiB0YXJnZXQteD0iMzQ2Ljc0ODkiIHRhcmdldC15PSI0NDQiPjwvcGF0aD48cGF0aCBkPSJNIDUzMS4zOSA2OTUuNjEgTCAzNDUuNzkgNjY3LjI4IEwgMzQ1Ljc5IDQ3NC42MSBMIDUzMC40NCA1MDIuNTEgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC02KSIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMiIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjIyMS4wMDAwMyIgdGFyZ2V0LXdpZHRoPSIxODUuNjAxNzIiIHRhcmdldC14PSIzNDUuNzkyMiIgdGFyZ2V0LXk9IjQ3NC42MTQ3MiI+PC9wYXRoPjxwYXRoIGQ9Ik0gNDc5LjI3IDU0OS4yNCBMIDI5Ny4wMCA1MjAuNzEgTCAzNDYuMjYgNDczLjY2IEwgNTMwLjQ0IDUwMi41MSBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTcpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIyIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI2MSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNzUuNTgwMDgiIHRhcmdldC13aWR0aD0iMjMzLjQzNzI2IiB0YXJnZXQteD0iMjk3IiB0YXJnZXQteT0iNDczLjY1ODAyIj48L3BhdGg+PHBhdGggZD0iTSA1MzAuNDQgNTAyLjUxIEwgNTMwLjQ0IDY5NS42MSBMIDY4OS4yNSA2NjUuMDAgTCA2ODkuMjUgNDcyLjcwIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtOCkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIiIGlkPSLot6/lvoQtNDQiIG5vZGUtaWQ9IjYyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIyMjIuOTEzNDUiIHRhcmdldC13aWR0aD0iMTU4LjgxMzg0IiB0YXJnZXQteD0iNTMwLjQzNzI2IiB0YXJnZXQteT0iNDcyLjcwMTMiPjwvcGF0aD48cGF0aCBkPSJNIDU3OS44MCA1NDkuMjQgTCA3MzkuMDAgNTE5LjQ4IEwgNjg5LjI1IDQ3Mi43MCBMIDUzMS4zOSA1MDIuMTkgTCA1NzkuODAgNTQ5LjI0IFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtOSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIiIGlkPSLot6/lvoQtNDMiIG5vZGUtaWQ9IjYzIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI3Ni41MzY4MDQiIHRhcmdldC13aWR0aD0iMjA3LjYwNjA4IiB0YXJnZXQteD0iNTMxLjM5MzkiIHRhcmdldC15PSI0NzIuNzAxMyI+PC9wYXRoPjxwYXRoIGQ9Ik0gNDk3LjM0IDQ5Ny4wMCBDIDUyOC4wOCA0NDMuMDAgNTY2LjEzIDQwNy42NyA2MTEuNTAgMzkxLjAwIiBmaWxsPSJub25lIiBpZD0i57q/6LevIiBub2RlLWlkPSI2NCIgc3Ryb2tlPSIjZjY2ZTZiIiBzdHJva2UtZGFzaGFycmF5PSIzIDMiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjIiIHRhcmdldC1oZWlnaHQ9IjEwNiIgdGFyZ2V0LXdpZHRoPSIxMTQuMTU5NTgiIHRhcmdldC14PSI0OTcuMzQwNDIiIHRhcmdldC15PSIzOTEiPjwvcGF0aD48cGF0aCBkPSJNIDYxOS42MiAzODAuOTYgTCA2MTkuNjIgMzk4LjcxIEwgNjYwLjQyIDM2MS43NiBaIiBmaWxsPSIjZGE3NTc0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIzIiBpZD0i6Lev5b6ELTQ2IiBub2RlLWlkPSI2NiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMzYuOTQ2MzgiIHRhcmdldC13aWR0aD0iNDAuNzk4NzA2IiB0YXJnZXQteD0iNjE5LjYyMTEiIHRhcmdldC15PSIzNjEuNzYyMzYiPjwvcGF0aD48cGF0aCBkPSJNIDYxOS42MiAzODAuOTYgTCA2MDYuOTIgMzczLjM0IEwgNjYwLjQyIDM2MS43NiBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEwKSIgZmlsbC1ydWxlPSJldmVub2RkIiBncm91cC1pZD0iMyIgaWQ9Iui3r+W+hC00NyIgbm9kZS1pZD0iNjciIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjE5LjE5NTEzIiB0YXJnZXQtd2lkdGg9IjUzLjUwMTY0OCIgdGFyZ2V0LXg9IjYwNi45MTgxNSIgdGFyZ2V0LXk9IjM2MS43NjIzNiI+PC9wYXRoPjxwYXRoIGQ9Ik0gNjE5LjYyIDM5OC43MSBMIDYzMy42NyAzOTUuNjkgTCA2MjguOTMgMzkwLjIxIFoiIGZpbGw9IiNlMDYwNWMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjMiIGlkPSLot6/lvoQtNDkiIG5vZGUtaWQ9IjY4IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI4LjQ5NTExNyIgdGFyZ2V0LXdpZHRoPSIxNC4wNDc5MTMiIHRhcmdldC14PSI2MTkuNjIxMSIgdGFyZ2V0LXk9IjM5MC4yMTM2MiI+PC9wYXRoPjxwYXRoIGQ9Ik0gNjI0LjQ3IDM4My45MyBMIDYzNi45MiA0MDEuMzAgTCA2NjAuNDIgMzYxLjc2IFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMTEpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIzIiBpZD0i6Lev5b6ELTQ4IiBub2RlLWlkPSI2OSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMzkuNTM1NzY3IiB0YXJnZXQtd2lkdGg9IjM1Ljk0ODQyNSIgdGFyZ2V0LXg9IjYyNC40NzE0IiB0YXJnZXQteT0iMzYxLjc2MjM2Ij48L3BhdGg+PC9zdmc+", Eu = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBoZWlnaHQ9IjEwMjQiIGxlZ2FjeS1tZXRyaWNzPSJmYWxzZSIgbm9kZS1pZD0iMSIgc2lsbHl2Zz0idHJ1ZSIgdGVtcGxhdGUtaGVpZ2h0PSIxMDI0IiB0ZW1wbGF0ZS13aWR0aD0iMTAyNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB3aWR0aD0iMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnMgbm9kZS1pZD0iNzEiPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTEiIG5vZGUtaWQ9IjUiIHgxPSIwLjUiIHgyPSIwLjUiIHkxPSIxLjAwMTIyMjciIHkyPSItMC4wMDA1Nzk4MzI4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZGY1ZjciIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZhZDRkMiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtMiIgbm9kZS1pZD0iOCIgeDE9IjAuNTAwODQzOSIgeDI9IjAuNTAwODQzOSIgeTE9IjEiIHkyPSIwLjAwMDA2NDk0NzM4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4xIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmRlY2ViIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC0zIiBub2RlLWlkPSIxMSIgeDE9IjAuNTAwMDQ1OSIgeDI9IjAuNTAwMDQ1OSIgeTE9IjAuOTk5MzEyIiB5Mj0iLTAuMDAwODExMjc3MzYiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYWQ2ZDQiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTQiIG5vZGUtaWQ9IjE0IiB4MT0iMC41IiB4Mj0iMC41IiB5MT0iMSIgeTI9IjAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuMTMiIHN0b3AtY29sb3I9IiNmZWZjZmIiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuNDEiIHN0b3AtY29sb3I9IiNmZWZjZmIiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuODEiIHN0b3AtY29sb3I9IiNmOWQ4ZDUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmOWQ4ZDUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTUiIG5vZGUtaWQ9IjIwIiB4MT0iMC41IiB4Mj0iMC41IiB5MT0iMCIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y4ZDBjZSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U1OTQ5MCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtNiIgbm9kZS1pZD0iMjMiIHgxPSIwLjUiIHgyPSIwLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWRhZWFiIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWM0NjNkIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC03IiBub2RlLWlkPSIyNiIgeDE9IjAuNSIgeDI9IjAuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmN2NlY2IiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmNzY2NjIiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTgiIG5vZGUtaWQ9IjI5IiB4MT0iMC41IiB4Mj0iMC4xOCIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlYjU2NTQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmNzg3ODUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTkiIG5vZGUtaWQ9IjMyIiB4MT0iMC4zMzE4MzgzIiB4Mj0iMC44MTcwODcxIiB5MT0iMC4yMjQyMzMzNyIgeTI9IjAuODE3ODQ2NiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjliMGFlIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjY1NjUxIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC0xMCIgbm9kZS1pZD0iMzUiIHgxPSIwLjEyNzA1OTYyIiB4Mj0iMC41IiB5MT0iMC41ODY1ODM3MyIgeTI9IjAuNDM2NDc4OTciPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZjNmMiIgc3RvcC1vcGFjaXR5PSIwIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZlMmUwIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTSAwLjAwIDAuMDAgTCAxMDI0LjAwIDAuMDAgTCAxMDI0LjAwIDEwMjQuMDAgTCAwLjAwIDEwMjQuMDAgWiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBub2RlLWlkPSIxNDEiIHN0cm9rZT0ibm9uZSIgdGFyZ2V0LWhlaWdodD0iMTAyNCIgdGFyZ2V0LXdpZHRoPSIxMDI0IiB0YXJnZXQteD0iMCIgdGFyZ2V0LXk9IjAiPjwvcGF0aD48ZyBub2RlLWlkPSIxNDMiPjxwYXRoIGQ9Ik0gMTAxLjM0IDYwNi4wMCBMIDEwNy4wMCA2NjcuMDAgTCA3Mi4wMCA2NjIuOTMgWiIgZmlsbD0iI2ZhZDRkMiIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNDEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjYxIiB0YXJnZXQtd2lkdGg9IjM1IiB0YXJnZXQteD0iNzIiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDEwMS4wMCA2MDYuMDAgTCAxMzguMDAgNjU0LjIxIEwgMTA2LjY3IDY2Ny4wMCBaIiBmaWxsPSIjZmRjNmMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0MiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNjEiIHRhcmdldC13aWR0aD0iMzciIHRhcmdldC14PSIxMDEiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDE2Ny4yMyAzNDIuMDMgTCAxNjUuOTkgMzM3LjEwIEwgMTY0LjI2IDMzMi41MSBMIDE2Mi4wMiAzMjguMjIgTCAxNTkuMzAgMzI0LjIxIEwgMTU2LjIwIDMyMC42MSBMIDE1Mi43MCAzMTcuMzcgTCAxNDguODUgMzE0LjU2IEwgMTQ0LjcyIDMxMi4yMyBMIDE0MC4yOSAzMTAuMzUgTCAxMzUuNjggMzA5LjAxIEwgMTMwLjg4IDMwOC4yMyBMIDEyNS44NSAzMDguMDEgTCAxMjEuNzkgMzA4LjE4IEwgMTE3Ljg1IDMwOC43MyBMIDExMy45OSAzMDkuNjMgTCAxMTAuMjEgMzEwLjkwIEwgMTA2LjU2IDMxMi41MiBMIDEwMy4xMCAzMTQuNDYgTCA5OS44MSAzMTYuNzMgTCA5Ni42OCAzMTkuMzUgTCA5My4yNCAzMTguMDAgTCA4OS43NCAzMTcuMDQgTCA4Ni4xNiAzMTYuNDYgTCA4Mi40OCAzMTYuMjYgTCA3OC41OCAzMTYuNDQgTCA3NC44NyAzMTcuMDMgTCA3MS4zMiAzMTguMDIgTCA2Ny45MCAzMTkuNDMgTCA2NC42NSAzMjEuMjEgTCA2MS42NyAzMjMuMzEgTCA1OC45MyAzMjUuNzMgTCA1Ni40MyAzMjguNDggTCA1NC4yNSAzMzEuNDkgTCA1Mi40NCAzMzQuNzMgTCA1MC45NyAzMzguMjIgTCA0OS44NiAzNDIuMDAgTCA0NS45NyAzNDMuMTkgTCA0Mi40NCAzNDQuODcgTCAzOS4yMiAzNDcuMDYgTCAzNi4zNSAzNDkuNjkgTCAzMy45MiAzNTIuNjYgTCAzMS45MCAzNTYuMDEgTCAzMC4zOSAzNTkuNjEgTCAyOS40MiAzNjMuNDMgTCAyOS4wMCAzNjcuNTEgTCAyOS4zNyAzNzEuMjQgTCAzMC4xOCAzNzQuNzMgTCAzMS40MyAzNzguMDMgTCAzMy4wOSAzODEuMTQgTCAzNS4wOSAzODMuOTYgTCAzNy40NCAzODYuNTEgTCA0MC4wOSAzODguNzQgTCA0Mi45OCAzOTAuNjEgTCA0Ni4xNSAzOTIuMTEgTCA0OS40OCAzOTMuMTkgTCA1Mi45OCAzOTMuODIgTCA1Ni42OCAzOTMuOTkgTCAxNjAuMzIgMzkzLjk5IEwgMTY0LjAyIDM5My44MiBMIDE2Ny41MiAzOTMuMjAgTCAxNzAuODYgMzkyLjEyIEwgMTc0LjAyIDM5MC42MiBMIDE3Ni45MiAzODguNzUgTCAxNzkuNTcgMzg2LjUyIEwgMTgxLjkyIDM4My45NyBMIDE4My45MiAzODEuMTUgTCAxODUuNTggMzc4LjA0IEwgMTg2LjgyIDM3NC43NCBMIDE4Ny42MyAzNzEuMjQgTCAxODguMDAgMzY3LjUxIEwgMTg3LjU4IDM2My40NCBMIDE4Ni42MiAzNTkuNjMgTCAxODUuMTEgMzU2LjA0IEwgMTgzLjExIDM1Mi42OSBMIDE4MC42OCAzNDkuNzIgTCAxNzcuODIgMzQ3LjA5IEwgMTc0LjYyIDM0NC45MSBMIDE3MS4xMCAzNDMuMjIgTCAxNjcuMjMgMzQyLjAzIEwgMTY3LjIzIDM0Mi4wMyBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0MyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iODUuOTg0OTI0IiB0YXJnZXQtd2lkdGg9IjE1OSIgdGFyZ2V0LXg9IjI5IiB0YXJnZXQteT0iMzA4LjAwNjg0Ij48L3BhdGg+PHBhdGggZD0iTSA3NjguNzEgMjAzLjEwIEwgNzY2Ljc3IDIwMC4zOSBMIDc2NC42MCAxOTcuOTUgTCA3NjIuMTkgMTk1Ljc4IEwgNzU5LjU3IDE5My44OCBMIDc1Ni43OSAxOTIuMjggTCA3NTMuODQgMTkwLjk4IEwgNzUwLjc3IDE5MC4wMCBMIDc0Ny42MCAxODkuMzUgTCA3NDQuMzEgMTg5LjA1IEwgNzQyLjIyIDE4Ni4xOSBMIDczOS44OCAxODMuNjUgTCA3MzcuMjkgMTgxLjQwIEwgNzM0LjQ3IDE3OS40NSBMIDczMS40OCAxNzcuODUgTCA3MjguMzEgMTc2LjU4IEwgNzI1LjAyIDE3NS42NyBMIDcyMS42MyAxNzUuMTUgTCA3MTguMTIgMTc1LjAwIEwgNzEzLjkxIDE3NS4yNSBMIDcwOS44NiAxNzYuMDQgTCA3MDUuOTQgMTc3LjM3IEwgNzAyLjIyIDE3OS4yMSBMIDY5OC43OCAxODEuNTIgTCA2OTUuNjAgMTg0LjM0IEwgNjkyLjgzIDE4My42MCBMIDY5MC4wMiAxODMuMTUgTCA2ODcuMTYgMTgzLjAwIEwgNjgzLjgyIDE4My4yMSBMIDY4MC42OSAxODMuNzYgTCA2NzcuNzQgMTg0LjY0IEwgNjc0Ljk1IDE4NS44NSBMIDY3MS40NiAxODcuOTQgTCA2NjguNDggMTkwLjQ1IEwgNjY1Ljk0IDE5My4zOCBMIDY2NC4zNyAxOTUuODMgTCA2NjMuMTcgMTk4LjQxIEwgNjYyLjMyIDIwMS4xNSBMIDY2MS44MiAyMDQuMDcgTCA2NTguNTMgMjA1LjEzIEwgNjU1LjU0IDIwNi42MSBMIDY1Mi44MCAyMDguNTAgTCA2NTAuMzcgMjEwLjc2IEwgNjQ4LjI5IDIxMy4zMSBMIDY0Ni41NyAyMTYuMTcgTCA2NDUuMjYgMjE5LjI1IEwgNjQ0LjQwIDIyMi41MSBMIDY0NC4wMCAyMjUuOTkgTCA2NDQuMjQgMjI5LjE0IEwgNjQ0LjkxIDIzMi4xMSBMIDY0Ni4wMSAyMzQuOTMgTCA2NDcuNDkgMjM3LjU5IEwgNjQ5LjMwIDI0MC4wMiBMIDY1MS40NiAyNDIuMjUgTCA2NTMuODkgMjQ0LjE5IEwgNjU2LjU3IDI0NS44MyBMIDY1OS41MiAyNDcuMTkgTCA2NjIuNjIgMjQ4LjE3IEwgNjY1Ljg4IDI0OC43OCBMIDY2OS4zNCAyNDkuMDAgTCA3NjYuNjYgMjQ5LjAwIEwgNzcwLjE3IDI0OC43OCBMIDc3My40NiAyNDguMTcgTCA3NzYuNTYgMjQ3LjE5IEwgNzc5LjUxIDI0NS44MyBMIDc4Mi4xOSAyNDQuMTkgTCA3ODQuNjEgMjQyLjI1IEwgNzg2Ljc2IDI0MC4wMiBMIDc4OC41NSAyMzcuNTkgTCA3OTAuMDIgMjM0LjkzIEwgNzkxLjEwIDIzMi4xMSBMIDc5MS43NiAyMjkuMTQgTCA3OTIuMDAgMjI1Ljk5IEwgNzkxLjgyIDIyMi45OCBMIDc5MS4yNSAyMjAuMTUgTCA3OTAuMzEgMjE3LjQ3IEwgNzg4Ljk3IDIxNC45MSBMIDc4Ni42OSAyMTEuODAgTCA3ODMuOTMgMjA5LjEwIEwgNzgwLjYyIDIwNi43NyBMIDc3Ny45MiAyMDUuMzggTCA3NzUuMDYgMjA0LjMwIEwgNzcyLjAwIDIwMy41NCBMIDc2OC43MSAyMDMuMTAgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0yKSIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNDQiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjczLjk5NTE5IiB0YXJnZXQtd2lkdGg9IjE0Ny45OTY0IiB0YXJnZXQteD0iNjQ0IiB0YXJnZXQteT0iMTc1LjAwNDgiPjwvcGF0aD48cGF0aCBkPSJNIDk0OS42MiAxNzEuNzQgTCA5NDcuMDAgMTY2Ljk1IEwgOTQ0LjAzIDE2Mi41NCBMIDk0MC42OSAxNTguNDcgTCA5MzYuOTkgMTU0Ljc0IEwgOTMyLjk1IDE1MS4zNSBMIDkyOC42NyAxNDguMzggTCA5MjQuMTQgMTQ1LjgxIEwgOTE5LjMzIDE0My42NSBMIDkxNC4zNSAxNDEuOTMgTCA5MDkuMjQgMTQwLjY5IEwgOTAzLjk3IDEzOS45MyBMIDg5OC41MSAxMzkuNjQgTCA4OTIuNDYgMTM5Ljk4IEwgODg2LjU2IDE0MC45NSBMIDg4MC43OCAxNDIuNTQgTCA4NzUuMjEgMTQ0LjczIEwgODY5LjkxIDE0Ny40OSBMIDg2NC44NiAxNTAuODUgTCA4NjIuNTEgMTQ2LjcxIEwgODU5Ljg5IDE0Mi44NiBMIDg1Ny4wMSAxMzkuMzAgTCA4NTMuODYgMTM2LjAwIEwgODQ5LjI3IDEzMi4wMSBMIDg0NC4zNSAxMjguNTcgTCA4MzkuMDggMTI1LjY3IEwgODMzLjUzIDEyMy4zNCBMIDgyNy43OCAxMjEuNjEgTCA4MjEuODAgMTIwLjQ5IEwgODE3LjI1IDEyMC4wNyBMIDgxMi42NyAxMjAuMDMgTCA4MDguMDMgMTIwLjM2IEwgODAzLjMyIDEyMS4wOCBMIDc5OC42OCAxMjIuMjEgTCA3OTQuMjYgMTIzLjY2IEwgNzkwLjA0IDEyNS40NSBMIDc4Ni4wMCAxMjcuNTcgTCA3ODAuOTAgMTMwLjg4IEwgNzc2LjI0IDEzNC42NyBMIDc3Mi4wMCAxMzguOTMgTCA3NjguMjMgMTQzLjYyIEwgNzY0Ljk5IDE0OC42NyBMIDc2Mi4yNiAxNTQuMTEgTCA3NjAuNjEgMTU4LjM2IEwgNzU5LjMxIDE2Mi43NSBMIDc1OC4zNiAxNjcuMzAgTCA3NTcuNzYgMTcyLjAyIEwgNzUyLjgwIDE3My44NSBMIDc0OC4xNyAxNzYuMDMgTCA3NDMuODMgMTc4LjU4IEwgNzM5Ljc2IDE4MS41MCBMIDczNS45NiAxODQuNzcgTCA3MzIuNTAgMTg4LjMwIEwgNzI5LjM4IDE5Mi4xMSBMIDcyNi41OCAxOTYuMTkgTCA3MjQuMTUgMjAwLjUxIEwgNzIyLjEyIDIwNC45OCBMIDcyMC40NyAyMDkuNjQgTCA3MTkuMjEgMjE0LjUwIEwgNzE4LjM5IDIxOS40MyBMIDcxOC4wMyAyMjQuNDUgTCA3MTguMTEgMjI5LjU3IEwgNzE4LjY2IDIzNC44MSBMIDcxOS43MSAyMzkuOTggTCA3MjEuMTcgMjQ0Ljg5IEwgNzIzLjAyIDI0OS41NiBMIDcyNS4yOSAyNTQuMDIgTCA3MjcuOTQgMjU4LjI4IEwgNzMwLjkxIDI2Mi4yMyBMIDczNC4xOSAyNjUuOTAgTCA3MzcuODEgMjY5LjI4IEwgNzQxLjcwIDI3Mi4zNCBMIDc0NS44MiAyNzUuMDMgTCA3NTAuMTggMjc3LjM3IEwgNzU0LjgwIDI3OS4zNSBMIDc1OS41NSAyODAuOTIgTCA3NjQuNDUgMjgyLjA1IEwgNzY5LjUzIDI4Mi43NCBMIDc3NC44MCAyODMuMDAgTCA5MzMuMDUgMjgzLjAwIEwgOTM4LjM2IDI4Mi43NiBMIDk0My40NiAyODIuMDcgTCA5NDguNDAgMjgwLjk0IEwgOTUzLjE3IDI3OS4zNyBMIDk1Ny44MiAyNzcuMzggTCA5NjIuMjAgMjc1LjA0IEwgOTY2LjMzIDI3Mi4zMyBMIDk3MC4yNSAyNjkuMjUgTCA5NzMuODggMjY1Ljg0IEwgOTc3LjE3IDI2Mi4xNSBMIDk4MC4xNCAyNTguMTcgTCA5ODIuODAgMjUzLjg5IEwgOTg1LjA2IDI0OS40MCBMIDk4Ni45MSAyNDQuNjkgTCA5ODguMzUgMjM5Ljc1IEwgOTg5LjM4IDIzNC41NSBMIDk4OS45MSAyMjkuMjcgTCA5ODkuOTYgMjI0LjEyIEwgOTg5LjU2IDIxOS4wOCBMIDk4OC43MCAyMTQuMTMgTCA5ODcuNDAgMjA5LjI2IEwgOTg1LjcxIDIwNC41OSBMIDk4My42MyAyMDAuMTAgTCA5ODEuMTQgMTk1Ljc5IEwgOTc4LjI5IDE5MS43MSBMIDk3NS4xMiAxODcuOTIgTCA5NzEuNjEgMTg0LjQxIEwgOTY3Ljc0IDE4MS4xNiBMIDk2My42MiAxNzguMjcgTCA5NTkuMjMgMTc1Ljc2IEwgOTU0LjU1IDE3My42MiBMIDk0OS41NCAxNzEuODUgTCA5NDkuNjIgMTcxLjc0IFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjQ1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxNjIuOTc0OTgiIHRhcmdldC13aWR0aD0iMjcxLjkzNjgzIiB0YXJnZXQteD0iNzE4LjAyNTciIHRhcmdldC15PSIxMjAuMDI1MDIiPjwvcGF0aD48ZyBub2RlLWlkPSIxNDYiPjxwYXRoIGQ9Ik0gMTAyNC4wMCA3NDIuMDAgTCAxMDIzLjcyIDc0Ny4yNiBMIDEwMjIuOTIgNzUyLjQ5IEwgMTAyMS41OCA3NTcuNzQgTCAxMDE5LjY4IDc2My4wMiBMIDEwMTcuMTkgNzY4LjM1IEwgMTAxNC4wNyA3NzMuNzUgTCAxMDA5Ljk5IDc3OS42MyBMIDEwMDUuMTIgNzg1LjU4IEwgOTk5LjM5IDc5MS42MiBMIDk5Mi43MiA3OTcuNzYgTCA5ODUuMDMgODAzLjk5IEwgOTc3LjQ0IDgwOS41MCBMIDk2OS4wMCA4MTUuMDQgTCA5NTkuNjYgODIwLjYyIEwgOTQ5LjM0IDgyNi4yNCBMIDkzNy45OCA4MzEuODggTCA5MjQuMTIgODM4LjEzIEwgOTA4LjkxIDg0NC4zNCBMIDg5Mi4yNCA4NTAuNDggTCA4NzQuMDQgODU2LjU1IEwgODU0LjczIDg2Mi4zNSBMIDgzNC4yNSA4NjcuODkgTCA4MTIuNTUgODczLjE1IEwgNzkwLjc2IDg3Ny44OCBMIDc2OC4wMCA4ODIuMzAgTCA3NDQuMjMgODg2LjM4IEwgNzIwLjQxIDg4OS45NyBMIDY5NS44MiA4OTMuMjAgTCA2NzAuNDUgODk2LjA1IEwgNjQ1LjA0IDg5OC40NCBMIDYxOS4wOSA5MDAuNDIgTCA1OTIuNTggOTAxLjk4IEwgNTY2LjA1IDkwMy4xMCBMIDUzOS4xOSA5MDMuNzcgTCA1MTIuMDAgOTA0LjAwIEwgNDg0LjgxIDkwMy43NyBMIDQ1Ny45NSA5MDMuMTAgTCA0MzEuNDIgOTAxLjk4IEwgNDA0LjkxIDkwMC40MiBMIDM3OC45NiA4OTguNDQgTCAzNTMuNTUgODk2LjA1IEwgMzI4LjE4IDg5My4yMCBMIDMwMy41OSA4ODkuOTcgTCAyNzkuNzcgODg2LjM4IEwgMjU2LjAwIDg4Mi4zMCBMIDIzMy4yNCA4NzcuODggTCAyMTEuNDUgODczLjE1IEwgMTg5Ljc1IDg2Ny44OSBMIDE2OS4yNyA4NjIuMzUgTCAxNDkuOTYgODU2LjU1IEwgMTMxLjc2IDg1MC40OCBMIDExNS4wOSA4NDQuMzQgTCA5OS44OCA4MzguMTMgTCA4Ni4wMiA4MzEuODggTCA3NC42NiA4MjYuMjQgTCA2NC4zNCA4MjAuNjIgTCA1NS4wMCA4MTUuMDQgTCA0Ni41NiA4MDkuNTAgTCAzOC45NyA4MDMuOTkgTCAzMS4yOCA3OTcuNzYgTCAyNC42MSA3OTEuNjIgTCAxOC44OCA3ODUuNTggTCAxNC4wMSA3NzkuNjMgTCA5LjkzIDc3My43NSBMIDYuODEgNzY4LjM1IEwgNC4zMiA3NjMuMDIgTCAyLjQyIDc1Ny43NCBMIDEuMDggNzUyLjQ5IEwgMC4yOCA3NDcuMjYgTCAwLjAwIDc0Mi4wMCBMIDAuMjggNzM2Ljc0IEwgMS4wOCA3MzEuNTEgTCAyLjQyIDcyNi4yNiBMIDQuMzIgNzIwLjk4IEwgNi44MSA3MTUuNjUgTCA5LjkzIDcxMC4yNSBMIDE0LjAxIDcwNC4zNyBMIDE4Ljg4IDY5OC40MiBMIDI0LjYxIDY5Mi4zOCBMIDMxLjI4IDY4Ni4yNCBMIDM4Ljk3IDY4MC4wMSBMIDQ2LjU2IDY3NC41MCBMIDU1LjAwIDY2OC45NiBMIDY0LjM0IDY2My4zOCBMIDc0LjY2IDY1Ny43NiBMIDg2LjAyIDY1Mi4xMiBMIDk5Ljg4IDY0NS44NyBMIDExNS4wOSA2MzkuNjYgTCAxMzEuNzYgNjMzLjUyIEwgMTQ5Ljk2IDYyNy40NSBMIDE2OS4yNyA2MjEuNjUgTCAxODkuNzUgNjE2LjExIEwgMjExLjQ1IDYxMC44NSBMIDIzMy4yNCA2MDYuMTIgTCAyNTYuMDAgNjAxLjcwIEwgMjc5Ljc3IDU5Ny42MiBMIDMwMy41OSA1OTQuMDMgTCAzMjguMTggNTkwLjgwIEwgMzUzLjU1IDU4Ny45NSBMIDM3OC45NiA1ODUuNTYgTCA0MDQuOTEgNTgzLjU4IEwgNDMxLjQyIDU4Mi4wMiBMIDQ1Ny45NSA1ODAuOTAgTCA0ODQuODEgNTgwLjIzIEwgNTEyLjAwIDU4MC4wMCBMIDUzOS4xOSA1ODAuMjMgTCA1NjYuMDUgNTgwLjkwIEwgNTkyLjU4IDU4Mi4wMiBMIDYxOS4wOSA1ODMuNTggTCA2NDUuMDQgNTg1LjU2IEwgNjcwLjQ1IDU4Ny45NSBMIDY5NS44MiA1OTAuODAgTCA3MjAuNDEgNTk0LjAzIEwgNzQ0LjIzIDU5Ny42MiBMIDc2OC4wMCA2MDEuNzAgTCA3OTAuNzYgNjA2LjEyIEwgODEyLjU1IDYxMC44NSBMIDgzNC4yNSA2MTYuMTEgTCA4NTQuNzMgNjIxLjY1IEwgODc0LjA0IDYyNy40NSBMIDg5Mi4yNCA2MzMuNTIgTCA5MDguOTEgNjM5LjY2IEwgOTI0LjEyIDY0NS44NyBMIDkzNy45OCA2NTIuMTIgTCA5NDkuMzQgNjU3Ljc2IEwgOTU5LjY2IDY2My4zOCBMIDk2OS4wMCA2NjguOTYgTCA5NzcuNDQgNjc0LjUwIEwgOTg1LjAzIDY4MC4wMSBMIDk5Mi43MiA2ODYuMjQgTCA5OTkuMzkgNjkyLjM4IEwgMTAwNS4xMiA2OTguNDIgTCAxMDA5Ljk5IDcwNC4zNyBMIDEwMTQuMDcgNzEwLjI1IEwgMTAxNy4xOSA3MTUuNjUgTCAxMDE5LjY4IDcyMC45OCBMIDEwMjEuNTggNzI2LjI2IEwgMTAyMi45MiA3MzEuNTEgTCAxMDIzLjcyIDczNi43NCBMIDEwMjQuMDAgNzQyLjAwIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNCkiIGZpbGwtb3BhY2l0eT0iMC40MDc3NDQ2NSIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSw0IiBpZD0i5qSt5ZyG5b2iIiBub2RlLWlkPSI0NiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIwLjQwNzc0NDY1IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjMyNCIgdGFyZ2V0LXdpZHRoPSIxMDI0IiB0YXJnZXQteD0iMCIgdGFyZ2V0LXk9IjU4MCI+PC9wYXRoPjwvZz48cGF0aCBkPSJNIDkwNi4wMCA2MDYuMDAgTCA5MDEuMTMgNjcwLjAwIEwgODY1LjAwIDY1OS41MiBaIiBmaWxsPSIjZmFkNGQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0NyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNjQiIHRhcmdldC13aWR0aD0iNDEiIHRhcmdldC14PSI4NjUiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDkwNC44NSA2MDYuMDAgTCA5MzUuMDAgNjYyLjM5IEwgOTAwLjAwIDY3MC4wMCBaIiBmaWxsPSIjZmRjNmMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0OCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNjQiIHRhcmdldC13aWR0aD0iMzUiIHRhcmdldC14PSI5MDAiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDIwMS4zNyA1OTQuMDAgTCAyMDYuMDAgNjQyLjAwIEwgMTc3LjAwIDYzOC44MSBaIiBmaWxsPSIjZjdkOWQ3IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0OSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNDgiIHRhcmdldC13aWR0aD0iMjkiIHRhcmdldC14PSIxNzciIHRhcmdldC15PSI1OTQiPjwvcGF0aD48cGF0aCBkPSJNIDIwMC4wMCA1OTQuMDAgTCAyMzAuMDAgNjMxLjg5IEwgMjA0LjU1IDY0Mi4wMCBaIiBmaWxsPSIjZmZjY2M4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI1MCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNDgiIHRhcmdldC13aWR0aD0iMzAiIHRhcmdldC14PSIyMDAiIHRhcmdldC15PSI1OTQiPjwvcGF0aD48cGF0aCBkPSJNIDE0OC40OCA1NjQuMDAgTCAxNTguMDAgNjY1LjAwIEwgOTQuMDAgNjU4LjcxIFoiIGZpbGw9IiNmYWQ0ZDIiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjUxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMDEiIHRhcmdldC13aWR0aD0iNjQiIHRhcmdldC14PSI5NCIgdGFyZ2V0LXk9IjU2NCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTQ3LjAwIDU2NC4wMCBMIDIxNC4wMCA2NDMuMzcgTCAxNTYuNTMgNjY1LjAwIFoiIGZpbGw9IiNmZGM2YzMiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjUyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMDEiIHRhcmdldC13aWR0aD0iNjciIHRhcmdldC14PSIxNDciIHRhcmdldC15PSI1NjQiPjwvcGF0aD48L2c+PGcgbm9kZS1pZD0iMTQ0Ij48ZyBub2RlLWlkPSIxNDciPjxnIG5vZGUtaWQ9IjE0OSI+PHBhdGggZD0iTSA0MTEuMTEgMzI5LjYxIEwgNTk0LjMxIDMyOS42MSBMIDU5Ni44NyAzMjkuODUgTCA1OTkuMjEgMzMwLjQ5IEwgNjAxLjM4IDMzMS41MiBMIDYwMy4zNCAzMzIuOTEgTCA2MDUuMDEgMzM0LjU4IEwgNjA2LjQwIDMzNi41NCBMIDYwNy40NCAzMzguNzEgTCA2MDguMDggMzQxLjA1IEwgNjA4LjMxIDM0My42MSBMIDYwOC4yMSAzNDUuMzAgTCA2MDcuOTAgMzQ2Ljk4IEwgNjAyLjgxIDM2Ni4zNyBMIDU5Ny42MSAzODQuMDUgTCA1OTIuMzAgNDAwLjE1IEwgNTg2LjkxIDQxNC43NCBMIDU4MS40NiA0MjcuOTQgTCA1NzUuOTYgNDM5Ljg1IEwgNTcwLjQzIDQ1MC41NCBMIDU2NC44NiA0NjAuMTEgTCA1NTkuMjggNDY4LjY0IEwgNTUzLjY4IDQ3Ni4yMSBMIDU0OC4wOCA0ODIuODkgTCA1NDIuNDYgNDg4Ljc1IEwgNTM2LjgyIDQ5My44NCBMIDUzMS4xNiA0OTguMjMgTCA1MjUuNDcgNTAxLjk2IEwgNTE5LjczIDUwNS4wNyBMIDUxMy45MyA1MDcuNTkgTCA1MDguMDQgNTA5LjU1IEwgNTAxLjE3IDUwNy4xNCBMIDQ5NC40MiA1MDQuMTcgTCA0ODcuNzkgNTAwLjYxIEwgNDgxLjI1IDQ5Ni40NCBMIDQ3NC44MCA0OTEuNjQgTCA0NjguNDEgNDg2LjE2IEwgNDYyLjEwIDQ3OS45NiBMIDQ1NS44NCA0NzIuOTkgTCA0NDkuNjQgNDY1LjIwIEwgNDQzLjUxIDQ1Ni41MyBMIDQzNy40NCA0NDYuOTIgTCA0MzEuNDQgNDM2LjMxIEwgNDI1LjUyIDQyNC42MiBMIDQxOS43MCA0MTEuNzcgTCA0MTMuOTggMzk3LjcwIEwgNDA4LjM4IDM4Mi4zMyBMIDQwMi45MiAzNjUuNTYgTCAzOTcuNjEgMzQ3LjMyIEwgMzk3LjE3IDM0NC43OSBMIDM5Ny4xNiAzNDIuMzYgTCAzOTcuNTggMzQwLjAwIEwgMzk4LjQxIDMzNy43MyBMIDM5OS41NyAzMzUuNjggTCA0MDEuMTAgMzMzLjgyIEwgNDAyLjkyIDMzMi4yNSBMIDQwNS4wMCAzMzEuMDEgTCA0MDcuNDEgMzMwLjExIEwgNDA5LjI0IDMyOS43MyBMIDQxMS4xMSAzMjkuNjEgWiIgZmlsbD0iI2ZlZWRlYyIgZmlsbC1vcGFjaXR5PSIwLjc2ODI0ODEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIsNSw3IiBpZD0i55+p5b2iIiBub2RlLWlkPSI1NSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIwLjc2ODI0ODEiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTc5Ljk0MzM2IiB0YXJnZXQtd2lkdGg9IjIxMS4xNTI2NSIgdGFyZ2V0LXg9IjM5Ny4xNjA1OCIgdGFyZ2V0LXk9IjMyOS42MDg3NiI+PC9wYXRoPjwvZz48cGF0aCBkPSJNIDQwNi44MSAzNjAuMjQgTCA0MDkuMTIgMzU2Ljk0IEwgNDExLjgxIDM1My44MyBMIDQxNC45MSAzNTAuOTAgTCA0MTguNDQgMzQ4LjE0IEwgNDIyLjQ1IDM0NS41NSBMIDQyOS43NyAzNDQuOTUgTCA0MzkuODMgMzQ0LjQxIEwgNDYzLjM0IDM0My43MSBMIDQ5MC41MCAzNDMuNDIgTCA1MTguODMgMzQzLjUxIEwgNTQ1LjgzIDM0My45MiBMIDU2OS4wMSAzNDQuNjEgTCA1ODUuOTEgMzQ1LjU1IEwgNTg5LjE2IDM0Ni41MCBMIDU5MS40MyAzNDcuNjcgTCA1OTMuMzMgMzQ5LjE4IEwgNTk0Ljk1IDM1MC45NSBMIDU5OC4zMCAzNTUuMjEgTCA2MDAuMzcgMzU3LjUzIEwgNjAzLjI5IDM2MC4yNCBMIDYwMy4zNyAzNTUuODkgTCA2MDMuNjEgMzUxLjgzIEwgNjAzLjc5IDM0Ny44NiBMIDYwMy43MSAzNDQuMTkgTCA2MDMuNDIgMzQxLjgxIEwgNjAyLjgzIDMzOS41MyBMIDYwMS45MyAzMzcuMzMgTCA2MDAuNzAgMzM1LjMyIEwgNTk4Ljk0IDMzMy4zMCBMIDU5Ni41NiAzMzEuMjYgTCA1OTMuOTIgMzI5LjU1IEwgNTkwLjQzIDMyNy43OSBMIDU4NS45MSAzMjUuOTkgTCA1NzMuNjMgMzI1LjQ3IEwgNTU1LjI0IDMyNC45MyBMIDUzMi41OCAzMjQuNDUgTCA1MDcuNTIgMzI0LjExIEwgNDgxLjkyIDMyNC4wMCBMIDQ1Ny42NCAzMjQuMjIgTCA0MzYuNTMgMzI0Ljg1IEwgNDI3LjM5IDMyNS4zOCBMIDQyMC40NiAzMjUuOTkgTCA0MTcuODkgMzI2Ljc1IEwgNDE1LjcwIDMyNy43NSBMIDQxMy44NSAzMjguOTggTCA0MTIuMTkgMzMwLjQ3IEwgNDEwLjgwIDMzMi4xMCBMIDQwOS42NSAzMzMuODggTCA0MDguMzIgMzM2Ljc2IEwgNDA3LjQ1IDMzOS43MyBMIDQwNi45NSAzNDIuNzQgTCA0MDYuODEgMzQ1LjU1IEwgNDA2LjgxIDM2MC4yNCBaIiBmaWxsPSIjZWM0NjNkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIyLDUiIGlkPSLot6/lvoQtMjIiIG5vZGUtaWQ9IjU2IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIzNi4yMzcwNiIgdGFyZ2V0LXdpZHRoPSIxOTYuOTg2NjYiIHRhcmdldC14PSI0MDYuODA1MDgiIHRhcmdldC15PSIzMjQuMDAyOCI+PC9wYXRoPjwvZz48ZyBub2RlLWlkPSIxNDgiPjxnIG5vZGUtaWQ9IjE1MCI+PHBhdGggZD0iTSA0MTEuMTEgNjUzLjM5IEwgNTk0LjMxIDY1My4zOSBMIDU5Ni44NyA2NTMuMTUgTCA1OTkuMjEgNjUyLjUxIEwgNjAxLjM4IDY1MS40OCBMIDYwMy4zNCA2NTAuMDkgTCA2MDUuMDEgNjQ4LjQyIEwgNjA2LjQwIDY0Ni40NiBMIDYwNy40NCA2NDQuMjkgTCA2MDguMDggNjQxLjk1IEwgNjA4LjMxIDYzOS4zOSBMIDYwOC4yMSA2MzcuNzAgTCA2MDcuOTAgNjM2LjAyIEwgNjAyLjgxIDYxNi42MyBMIDU5Ny42MSA1OTguOTUgTCA1OTIuMzAgNTgyLjg1IEwgNTg2LjkxIDU2OC4yNiBMIDU4MS40NiA1NTUuMDYgTCA1NzUuOTYgNTQzLjE1IEwgNTcwLjQzIDUzMi40NiBMIDU2NC44NiA1MjIuODkgTCA1NTkuMjggNTE0LjM2IEwgNTUzLjY4IDUwNi43OSBMIDU0OC4wOCA1MDAuMTEgTCA1NDIuNDYgNDk0LjI1IEwgNTM2LjgyIDQ4OS4xNiBMIDUzMS4xNiA0ODQuNzcgTCA1MjUuNDcgNDgxLjA0IEwgNTE5LjczIDQ3Ny45MyBMIDUxMy45MyA0NzUuNDEgTCA1MDguMDQgNDczLjQ1IEwgNTAxLjE3IDQ3NS44NiBMIDQ5NC40MiA0NzguODMgTCA0ODcuNzkgNDgyLjM5IEwgNDgxLjI1IDQ4Ni41NiBMIDQ3NC44MCA0OTEuMzYgTCA0NjguNDEgNDk2Ljg0IEwgNDYyLjEwIDUwMy4wNCBMIDQ1NS44NCA1MTAuMDEgTCA0NDkuNjQgNTE3LjgwIEwgNDQzLjUxIDUyNi40NyBMIDQzNy40NCA1MzYuMDggTCA0MzEuNDQgNTQ2LjY5IEwgNDI1LjUyIDU1OC4zOCBMIDQxOS43MCA1NzEuMjMgTCA0MTMuOTggNTg1LjMwIEwgNDA4LjM4IDYwMC42NyBMIDQwMi45MiA2MTcuNDQgTCAzOTcuNjEgNjM1LjY4IEwgMzk3LjE3IDYzOC4yMSBMIDM5Ny4xNiA2NDAuNjQgTCAzOTcuNTggNjQzLjAwIEwgMzk4LjQxIDY0NS4yNyBMIDM5OS41NyA2NDcuMzIgTCA0MDEuMTAgNjQ5LjE4IEwgNDAyLjkyIDY1MC43NSBMIDQwNS4wMCA2NTEuOTkgTCA0MDcuNDEgNjUyLjg5IEwgNDA5LjI0IDY1My4yNyBMIDQxMS4xMSA2NTMuMzkgWiIgZmlsbD0iI2ZlZWRlYyIgZmlsbC1vcGFjaXR5PSIwLjc2ODI0ODEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIsNiw4IiBpZD0i55+p5b2iIiBub2RlLWlkPSI1OCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIwLjc2ODI0ODEiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTc5Ljk0MzM2IiB0YXJnZXQtd2lkdGg9IjIxMS4xNTI2NSIgdGFyZ2V0LXg9IjM5Ny4xNjA1OCIgdGFyZ2V0LXk9IjQ3My40NDc4OCI+PC9wYXRoPjwvZz48cGF0aCBkPSJNIDQxNS45MyA2MjIuNzYgTCA0MTguNjEgNjI2Ljg5IEwgNDIxLjgxIDYzMC43MCBMIDQyNS41OSA2MzQuMjIgTCA0MjkuOTggNjM3LjQ1IEwgNDM2LjU1IDYzOC4wNSBMIDQ0NS41OCA2MzguNTkgTCA0NjYuNjkgNjM5LjI5IEwgNDkxLjA4IDYzOS41OCBMIDUxNi41MSA2MzkuNDkgTCA1NDAuNzUgNjM5LjA4IEwgNTYxLjU3IDYzOC4zOSBMIDU3Ni43NCA2MzcuNDUgTCA1NzkuNjUgNjM2LjUwIEwgNTgxLjY5IDYzNS4zMyBMIDU4My4zOSA2MzMuODMgTCA1ODQuODYgNjMyLjA1IEwgNTg3Ljg2IDYyNy43OSBMIDU4OS43MyA2MjUuNDYgTCA1OTIuMzQgNjIyLjc2IEwgNTkyLjQyIDYyNy4xMSBMIDU5Mi42MyA2MzEuMTcgTCA1OTIuNzkgNjM1LjE0IEwgNTkyLjcyIDYzOC44MSBMIDU5Mi40NiA2NDEuMTkgTCA1OTEuOTIgNjQzLjQ3IEwgNTkxLjEyIDY0NS42NyBMIDU5MC4wMCA2NDcuNzAgTCA1ODguNDIgNjQ5LjcyIEwgNTg2LjMwIDY1MS43NCBMIDU4My45MiA2NTMuNDYgTCA1ODAuNzggNjU1LjIyIEwgNTc2Ljc0IDY1Ny4wMSBMIDU2NS43MiA2NTcuNTMgTCA1NDkuMjAgNjU4LjA3IEwgNTI4Ljg2IDY1OC41NSBMIDUwNi4zNiA2NTguODkgTCA0ODMuMzcgNjU5LjAwIEwgNDYxLjU3IDY1OC43OCBMIDQ0Mi42MiA2NTguMTUgTCA0MzQuNDEgNjU3LjYyIEwgNDI4LjE5IDY1Ny4wMSBMIDQyNS4xOSA2NTUuOTMgTCA0MjIuNzQgNjU0LjQ0IEwgNDIwLjc4IDY1Mi41NSBMIDQxOS4xNiA2NTAuMzEgTCA0MTcuOTAgNjQ3Ljg5IEwgNDE2Ljk5IDY0NS4yNyBMIDQxNi4xNyA2NDEuMjIgTCA0MTUuOTMgNjM3LjQ1IEwgNDE1LjkzIDYyMi43NiBaIiBmaWxsPSIjZWM0NjNkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIyLDYiIGlkPSLot6/lvoQtMjIiIG5vZGUtaWQ9IjU5IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIzNi4yMzcwNiIgdGFyZ2V0LXdpZHRoPSIxNzYuODYzMjgiIHRhcmdldC14PSI0MTUuOTI5OCIgdGFyZ2V0LXk9IjYyMi43NjAxMyI+PC9wYXRoPjwvZz48cGF0aCBkPSJNIDUwNS4wOCA0NjMuMDAgTCA1MTAuMzcgNDYzLjE3IEwgNTE1LjYxIDQ2My42NCBMIDUyMC43OCA0NjQuNDIgTCA1MjUuOTIgNDY1LjQ5IEwgNTMwLjYxIDQ2Ni43OSBMIDUzNC45MCA0NjguMjggTCA1MzkuMDYgNDcwLjEyIEwgNTQyLjQyIDQ3Mi4wMyBMIDU0NS4wOCA0NzQuMDEgTCA1NDYuODYgNDc1Ljc5IEwgNTQ4LjA1IDQ3Ny41MyBMIDU0OC43NCA0NzkuMjYgTCA1NDkuMDAgNDgxLjAzIEwgNTQ2LjY5IDQ4NC4yNCBMIDU0My45MCA0ODcuNTIgTCA1NDAuNTggNDkwLjg3IEwgNTM3LjAzIDQ5My45NSBMIDUzMi44NiA0OTcuMDYgTCA1MjguMDAgNTAwLjIxIEwgNTIyLjk3IDUwMy4wMiBMIDUxNy4xNiA1MDUuODIgTCA1MTAuNTAgNTA4LjU5IEwgNTEwLjUwIDYwMC4wMCBMIDUwMy4yOCA2MDAuMDAgTCA1MDMuMjggNTA4LjYwIEwgNDk1Ljg3IDUwNS43MSBMIDQ4OS4wOCA1MDIuNTEgTCA0ODIuODYgNDk5LjAyIEwgNDc3LjE3IDQ5NS4yMyBMIDQ3MS45OSA0OTEuMTYgTCA0NjcuMjcgNDg2Ljc5IEwgNDYzLjAwIDQ4Mi4xMyBMIDQ2OC43MyA0NzcuMjkgTCA0NzQuMjkgNDczLjI3IEwgNDc5LjY5IDQ2OS45OSBMIDQ4NC45NCA0NjcuNDAgTCA0OTAuMDkgNDY1LjQ0IEwgNDk1LjE0IDQ2NC4wNyBMIDUwMC4xMyA0NjMuMjcgTCA1MDUuMDggNDYzLjAwIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIiIGlkPSLmpK3lnIblvaItMyIgbm9kZS1pZD0iNjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjEzNyIgdGFyZ2V0LXdpZHRoPSI4NiIgdGFyZ2V0LXg9IjQ2MyIgdGFyZ2V0LXk9IjQ2MyI+PC9wYXRoPjxwYXRoIGQ9Ik0gNTAwLjM3IDU0My4wMCBMIDQ3OS44MCA1NTQuODEgTCA0NjMuNDEgNTY0Ljc5IEwgNDUwLjYyIDU3My4xNyBMIDQ0MC44OCA1ODAuMTQgTCA0MzMuNjYgNTg1Ljg5IEwgNDI4LjUyIDU5MC42MCBMIDQyNS4wNSA1OTQuNDMgTCA0MjIuODYgNTk3LjUzIEwgNDIxLjIzIDYwMC45OCBMIDQyMC4yOSA2MDQuMzkgTCA0MjAuMDAgNjA3LjgxIEwgNDIwLjI3IDYxMS4yNSBMIDQyMS4wMyA2MTQuNTkgTCA0MjIuMjkgNjE3Ljg3IEwgNDIzLjk3IDYyMC45OCBMIDQyNS45OCA2MjMuODYgTCA0MjguMzQgNjI2LjUzIEwgNDMwLjk4IDYyOC45MyBMIDQzMy43NyA2MzAuOTQgTCA0MzYuNzMgNjMyLjU5IEwgNDM5Ljg2IDYzMy44NiBMIDQ0Mi45NiA2MzQuNjEgTCA0NDYuMDYgNjM0Ljg4IEwgNDU3LjE0IDYzNC45MCBMIDQ3My43OCA2MzQuOTQgTCA0OTQuNDMgNjM0Ljk4IEwgNTE3LjU0IDYzNS4wMCBMIDU0MS41NiA2MzQuOTcgTCA1NjQuOTIgNjM0Ljg4IEwgNTY5LjE5IDYzMy4zNCBMIDU3Mi44MiA2MzEuNjkgTCA1NzUuODggNjI5Ljk0IEwgNTc4LjQzIDYyOC4xMCBMIDU4MS41OCA2MjUuMjEgTCA1ODMuOTYgNjIyLjI5IEwgNTg1LjY4IDYxOS4zNCBMIDU4Ni45NSA2MTYuMTUgTCA1ODcuNzEgNjEzLjA3IEwgNTg3Ljk5IDYxMC4wNyBMIDU4Ny44NyA2MDcuMDQgTCA1ODcuNDIgNjA0LjI5IEwgNTg2LjY2IDYwMS43OCBMIDU4NS41OCA1OTkuMzggTCA1ODQuMzcgNTk3LjQ2IEwgNTgzLjAyIDU5NS45NCBMIDU3MC45MyA1ODUuMDQgTCA1NTkuNjAgNTc1LjQwIEwgNTQ5LjAwIDU2Ni45MiBMIDUzOS4wOCA1NTkuNTIgTCA1MjkuODEgNTUzLjEyIEwgNTIxLjE0IDU0Ny42NCBMIDUxMy4wNCA1NDMuMDAgTCA1MDAuMzcgNTQzLjAwIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNikiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIiIGlkPSLot6/lvoQtMjMiIG5vZGUtaWQ9IjYxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI5MiIgdGFyZ2V0LXdpZHRoPSIxNjcuOTg5NTMiIHRhcmdldC14PSI0MjAuMDAwMjciIHRhcmdldC15PSI1NDMiPjwvcGF0aD48cGF0aCBkPSJNIDQ1MC4xOCA2MDYuMjYgTCA0NTEuMzIgNjA4Ljc5IEwgNDUxLjg5IDYxMS4yNCBMIDQ1MS45MiA2MTMuNjYgTCA0NTEuNDIgNjE1Ljc2IEwgNDUwLjgwIDYxNy4wMSBMIDQ0OS45NSA2MTguMDMgTCA0NDguODkgNjE4Ljg0IEwgNDQ3LjY1IDYxOS4zNiBMIDQ0Ni4zNSA2MTkuNTggTCA0NDQuOTUgNjE5LjUwIEwgNDQyLjg4IDYxOC44OCBMIDQ0MC44MCA2MTcuNjQgTCA0MzguOTYgNjE1LjkzIEwgNDM3LjM0IDYxMy42NyBMIDQzNi4xOSA2MTEuMTMgTCA0MzUuNjMgNjA4LjY4IEwgNDM1LjYwIDYwNi4yNiBMIDQzNi4wOSA2MDQuMTYgTCA0MzYuNzIgNjAyLjkxIEwgNDM3LjU2IDYwMS44OSBMIDQzOC42MyA2MDEuMDggTCA0MzkuODcgNjAwLjU2IEwgNDQxLjE3IDYwMC4zNCBMIDQ0Mi41NyA2MDAuNDIgTCA0NDQuNjMgNjAxLjA0IEwgNDQ2LjcxIDYwMi4yOCBMIDQ0OC41NiA2MDQuMDAgTCA0NTAuMTggNjA2LjI2IFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNykiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIiIGlkPSLmpK3lnIblvaIiIG5vZGUtaWQ9IjYyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxOS4yMzk2MjQiIHRhcmdldC13aWR0aD0iMTYuMzE5MDYxIiB0YXJnZXQteD0iNDM1LjU5ODMiIHRhcmdldC15PSI2MDAuMzQyNSI+PC9wYXRoPjwvZz48ZyBub2RlLWlkPSIxNDUiPjxwYXRoIGQ9Ik0gNjIwLjA3IDYyOS4wMCBMIDYzNy4wMCA2MjkuMDAgTCA2MjguNTMgNjU5LjAwIEwgNjEzLjAwIDY1OS4wMCBaIiBmaWxsPSIjY2YzODMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIzIiBpZD0i6Lev5b6ELTIxIiBub2RlLWlkPSI2NCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMzAiIHRhcmdldC13aWR0aD0iMjQiIHRhcmdldC14PSI2MTMiIHRhcmdldC15PSI2MjkiPjwvcGF0aD48cGF0aCBkPSJNIDYxNi4wNyA2MjkuMDAgTCA2MzMuMDAgNjI5LjAwIEwgNjI0LjUzIDY1OS4wMCBMIDYwOS4wMCA2NTkuMDAgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC04KSIgZmlsbC1ydWxlPSJldmVub2RkIiBncm91cC1pZD0iMyIgaWQ9Iui3r+W+hC0yMSIgbm9kZS1pZD0iNjUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjMwIiB0YXJnZXQtd2lkdGg9IjI0IiB0YXJnZXQteD0iNjA5IiB0YXJnZXQteT0iNjI5Ij48L3BhdGg+PHBhdGggZD0iTSA2NDkuMTYgNTM5LjY5IEwgNTc3LjA3IDYxMi42OSBMIDU3Ni4yMCA2MTQuMDMgTCA1NzUuOTIgNjE1LjUzIEwgNTc2LjIyIDYxNy4wMiBMIDU3Ny4xMSA2MTguMzUgTCA1NzguMDAgNjE5LjAxIEwgNTc5LjA1IDYxOS40MSBMIDY4Mi4xNyA2NDIuNDcgTCA2ODMuNzcgNjQyLjUwIEwgNjg1LjE4IDY0MS45NSBMIDY4Ni4yOSA2NDAuOTAgTCA2ODYuOTUgNjM5LjQ0IEwgNjg3LjA0IDYzOC4zOCBMIDY4Ni44NSA2MzcuMzQgTCA2NTUuODEgNTQxLjI3IEwgNjU1LjAyIDUzOS44NyBMIDY1My44MyA1MzguOTQgTCA2NTIuMzYgNTM4LjUxIEwgNjUwLjc3IDUzOC42OSBMIDY0OS45MSA1MzkuMDkgTCA2NDkuMTYgNTM5LjY5IFoiIGZpbGw9IiNkMTMzMmIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjMiIGlkPSLot6/lvoQtMjAiIG5vZGUtaWQ9IjY2IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMDMuOTkwNDIiIHRhcmdldC13aWR0aD0iMTExLjExNzg2IiB0YXJnZXQteD0iNTc1LjkxOTUiIHRhcmdldC15PSI1MzguNTEyNDUiPjwvcGF0aD48cGF0aCBkPSJNIDY0NS4xNiA1MzkuNjkgTCA1NzMuMDcgNjEyLjY5IEwgNTcyLjIwIDYxNC4wMyBMIDU3MS45MiA2MTUuNTMgTCA1NzIuMjIgNjE3LjAyIEwgNTczLjExIDYxOC4zNSBMIDU3NC4wMCA2MTkuMDEgTCA1NzUuMDUgNjE5LjQxIEwgNjc4LjE3IDY0Mi40NyBMIDY3OS43NyA2NDIuNTAgTCA2ODEuMTggNjQxLjk1IEwgNjgyLjI5IDY0MC45MCBMIDY4Mi45NSA2MzkuNDQgTCA2ODMuMDQgNjM4LjM4IEwgNjgyLjg1IDYzNy4zNCBMIDY1MS44MSA1NDEuMjcgTCA2NTEuMDIgNTM5Ljg3IEwgNjQ5LjgzIDUzOC45NCBMIDY0OC4zNiA1MzguNTEgTCA2NDYuNzcgNTM4LjY5IEwgNjQ1LjkxIDUzOS4wOSBMIDY0NS4xNiA1MzkuNjkgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC05KSIgZmlsbC1ydWxlPSJldmVub2RkIiBncm91cC1pZD0iMyIgaWQ9Iui3r+W+hC0yMCIgbm9kZS1pZD0iNjciIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjEwMy45OTA0MiIgdGFyZ2V0LXdpZHRoPSIxMTEuMTE3ODYiIHRhcmdldC14PSI1NzEuOTE5NSIgdGFyZ2V0LXk9IjUzOC41MTI0NSI+PC9wYXRoPjxwYXRoIGQ9Ik0gNjM3LjA2IDYwOC45OCBMIDY0Ny41MSA1ODIuNzkgTCA2NDIuNzkgNTgxLjA3IEwgNjMzLjkxIDYwNy44NCBMIDYzNy4wNiA2MDguOTggWiBNIDYzMS45NCA2MTguMTUgTCA2MzMuMjQgNjE4LjM3IEwgNjM0LjQ5IDYxOC4xMCBMIDYzNS40NiA2MTcuMzkgTCA2MzYuMTQgNjE2LjIzIEwgNjM2LjM1IDYxNC45NiBMIDYzNi4wNiA2MTMuNzkgTCA2MzUuMjggNjEyLjc2IEwgNjM0LjE0IDYxMi4xMSBMIDYzMi44OCA2MTEuODggTCA2MzEuNjQgNjEyLjE4IEwgNjMwLjY0IDYxMi44OSBMIDYzMC4wMCA2MTQuMDAgTCA2MjkuNzggNjE1LjI2IEwgNjMwLjA3IDYxNi41MCBMIDYzMC44MyA2MTcuNDkgTCA2MzEuOTQgNjE4LjE1IFoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjMiIGlkPSLvvIEiIG5vZGUtaWQ9IjY4IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIzNy4yOTkxOTQiIHRhcmdldC13aWR0aD0iMTcuNzM3MDYiIHRhcmdldC14PSI2MjkuNzc1MjciIHRhcmdldC15PSI1ODEuMDcxNjYiPjwvcGF0aD48L2c+PHBhdGggZD0iTSA2MjUuMDAgNjU5LjQ5IEwgNDgyLjAwIDY1OS40NCBMIDM5My4zNyA3MDIuNDggTCA0ODIuMDAgNzQyLjAwIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMTApIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSLot6/lvoQtMjQiIG5vZGUtaWQ9IjY5IiBzdHJva2U9Im5vbmUiIHRhcmdldC1oZWlnaHQ9IjgyLjU1ODQ3IiB0YXJnZXQtd2lkdGg9IjIzMS42MjYzNCIgdGFyZ2V0LXg9IjM5My4zNzM2NiIgdGFyZ2V0LXk9IjY1OS40NDE1Ij48L3BhdGg+PC9zdmc+", mu = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBoZWlnaHQ9IjEwMjQiIGxlZ2FjeS1tZXRyaWNzPSJmYWxzZSIgbm9kZS1pZD0iMSIgc2lsbHl2Zz0idHJ1ZSIgdGVtcGxhdGUtaGVpZ2h0PSIxMDI0IiB0ZW1wbGF0ZS13aWR0aD0iMTAyNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB3aWR0aD0iMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnMgbm9kZS1pZD0iODIiPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTEiIG5vZGUtaWQ9IjUiIHgxPSIwLjUiIHgyPSIwLjUiIHkxPSIxLjAwMTIyMjciIHkyPSItMC4wMDA1Nzk4MzI4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZGY1ZjciIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZhZDRkMiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtMiIgbm9kZS1pZD0iOCIgeDE9IjAuNTAwODQzOSIgeDI9IjAuNTAwODQzOSIgeTE9IjEiIHkyPSIwLjAwMDA2NDk0NzM4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4xIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmRlY2ViIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC0zIiBub2RlLWlkPSIxMSIgeDE9IjAuNTAwMDQ1OSIgeDI9IjAuNTAwMDQ1OSIgeTE9IjAuOTk5MzEyIiB5Mj0iLTAuMDAwODExMjc3MzYiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYWQ2ZDQiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTQiIG5vZGUtaWQ9IjE0IiB4MT0iMC41IiB4Mj0iMC41IiB5MT0iMSIgeTI9IjAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuMTMiIHN0b3AtY29sb3I9IiNmZWZjZmIiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuNDEiIHN0b3AtY29sb3I9IiNmZWZjZmIiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuODEiIHN0b3AtY29sb3I9IiNmOWQ4ZDUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmOWQ4ZDUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTUiIG5vZGUtaWQ9IjIwIiB4MT0iMC4zMzc2NDQ5NiIgeDI9IjAuNSIgeTE9IjAuNTYyOTYwMiIgeTI9IjAuNDI2NTczMjgiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZjNmMiIgc3RvcC1vcGFjaXR5PSIwIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZlMmUwIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC02IiBub2RlLWlkPSIyMyIgeDE9IjAuMDY4NTM2IiB4Mj0iMC45MzkwMzkyIiB5MT0iMC40NTU2NTkyIiB5Mj0iMC40OTM0NzkzNCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjc4NDgwIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjY0YTQ1Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC03IiBub2RlLWlkPSIyNiIgeDE9IjAuMzg4NDM0IiB4Mj0iMC4zMjA4NTE5IiB5MT0iMC40NTY0ODI3NCIgeTI9IjAuNTM2MDQ4NSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmJjM2MzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjY0YTQ1IiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTgiIG5vZGUtaWQ9IjI5IiB4MT0iMC41IiB4Mj0iMC41IiB5MT0iMCIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y1MmQyMiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2I5MTEwNCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtOSIgbm9kZS1pZD0iMzIiIHgxPSIwLjUiIHgyPSIwLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmNkOGQ3Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjc4MzdjIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC0xMCIgbm9kZS1pZD0iMzUiIHgxPSIwLjUiIHgyPSIwLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTM3MzZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTM3MzZmIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTExIiBub2RlLWlkPSIzOCIgeDE9IjAuMTM3OTU0MSIgeDI9IjAuNzU5NjE1MiIgeTE9IjAuMTc4MDk1NjciIHkyPSIwLjg5NTczMDU2Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmYmM2YzQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjk1OGUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTEyIiBub2RlLWlkPSI0MSIgeDE9IjAuNSIgeDI9IjAuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZTk3OTEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmMTcxNmMiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNIDAuMDAgMC4wMCBMIDEwMjQuMDAgMC4wMCBMIDEwMjQuMDAgMTAyNC4wMCBMIDAuMDAgMTAyNC4wMCBaIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG5vZGUtaWQ9IjE2NCIgc3Ryb2tlPSJub25lIiB0YXJnZXQtaGVpZ2h0PSIxMDI0IiB0YXJnZXQtd2lkdGg9IjEwMjQiIHRhcmdldC14PSIwIiB0YXJnZXQteT0iMCI+PC9wYXRoPjxnIG5vZGUtaWQ9IjE2NiI+PHBhdGggZD0iTSAxMDEuMzQgNjA2LjAwIEwgMTA3LjAwIDY2Ny4wMCBMIDcyLjAwIDY2Mi45MyBaIiBmaWxsPSIjZmFkNGQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0NyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNjEiIHRhcmdldC13aWR0aD0iMzUiIHRhcmdldC14PSI3MiIgdGFyZ2V0LXk9IjYwNiI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTAxLjAwIDYwNi4wMCBMIDEzOC4wMCA2NTQuMjEgTCAxMDYuNjcgNjY3LjAwIFoiIGZpbGw9IiNmZGM2YzMiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjQ4IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI2MSIgdGFyZ2V0LXdpZHRoPSIzNyIgdGFyZ2V0LXg9IjEwMSIgdGFyZ2V0LXk9IjYwNiI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTY3LjIzIDM0Mi4wMyBMIDE2NS45OSAzMzcuMTAgTCAxNjQuMjYgMzMyLjUxIEwgMTYyLjAyIDMyOC4yMiBMIDE1OS4zMCAzMjQuMjEgTCAxNTYuMjAgMzIwLjYxIEwgMTUyLjcwIDMxNy4zNyBMIDE0OC44NSAzMTQuNTYgTCAxNDQuNzIgMzEyLjIzIEwgMTQwLjI5IDMxMC4zNSBMIDEzNS42OCAzMDkuMDEgTCAxMzAuODggMzA4LjIzIEwgMTI1Ljg1IDMwOC4wMSBMIDEyMS43OSAzMDguMTggTCAxMTcuODUgMzA4LjczIEwgMTEzLjk5IDMwOS42MyBMIDExMC4yMSAzMTAuOTAgTCAxMDYuNTYgMzEyLjUyIEwgMTAzLjEwIDMxNC40NiBMIDk5LjgxIDMxNi43MyBMIDk2LjY4IDMxOS4zNSBMIDkzLjI0IDMxOC4wMCBMIDg5Ljc0IDMxNy4wNCBMIDg2LjE2IDMxNi40NiBMIDgyLjQ4IDMxNi4yNiBMIDc4LjU4IDMxNi40NCBMIDc0Ljg3IDMxNy4wMyBMIDcxLjMyIDMxOC4wMiBMIDY3LjkwIDMxOS40MyBMIDY0LjY1IDMyMS4yMSBMIDYxLjY3IDMyMy4zMSBMIDU4LjkzIDMyNS43MyBMIDU2LjQzIDMyOC40OCBMIDU0LjI1IDMzMS40OSBMIDUyLjQ0IDMzNC43MyBMIDUwLjk3IDMzOC4yMiBMIDQ5Ljg2IDM0Mi4wMCBMIDQ1Ljk3IDM0My4xOSBMIDQyLjQ0IDM0NC44NyBMIDM5LjIyIDM0Ny4wNiBMIDM2LjM1IDM0OS42OSBMIDMzLjkyIDM1Mi42NiBMIDMxLjkwIDM1Ni4wMSBMIDMwLjM5IDM1OS42MSBMIDI5LjQyIDM2My40MyBMIDI5LjAwIDM2Ny41MSBMIDI5LjM3IDM3MS4yNCBMIDMwLjE4IDM3NC43MyBMIDMxLjQzIDM3OC4wMyBMIDMzLjA5IDM4MS4xNCBMIDM1LjA5IDM4My45NiBMIDM3LjQ0IDM4Ni41MSBMIDQwLjA5IDM4OC43NCBMIDQyLjk4IDM5MC42MSBMIDQ2LjE1IDM5Mi4xMSBMIDQ5LjQ4IDM5My4xOSBMIDUyLjk4IDM5My44MiBMIDU2LjY4IDM5My45OSBMIDE2MC4zMiAzOTMuOTkgTCAxNjQuMDIgMzkzLjgyIEwgMTY3LjUyIDM5My4yMCBMIDE3MC44NiAzOTIuMTIgTCAxNzQuMDIgMzkwLjYyIEwgMTc2LjkyIDM4OC43NSBMIDE3OS41NyAzODYuNTIgTCAxODEuOTIgMzgzLjk3IEwgMTgzLjkyIDM4MS4xNSBMIDE4NS41OCAzNzguMDQgTCAxODYuODIgMzc0Ljc0IEwgMTg3LjYzIDM3MS4yNCBMIDE4OC4wMCAzNjcuNTEgTCAxODcuNTggMzYzLjQ0IEwgMTg2LjYyIDM1OS42MyBMIDE4NS4xMSAzNTYuMDQgTCAxODMuMTEgMzUyLjY5IEwgMTgwLjY4IDM0OS43MiBMIDE3Ny44MiAzNDcuMDkgTCAxNzQuNjIgMzQ0LjkxIEwgMTcxLjEwIDM0My4yMiBMIDE2Ny4yMyAzNDIuMDMgTCAxNjcuMjMgMzQyLjAzIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjQ5IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI4NS45ODQ5MjQiIHRhcmdldC13aWR0aD0iMTU5IiB0YXJnZXQteD0iMjkiIHRhcmdldC15PSIzMDguMDA2ODQiPjwvcGF0aD48cGF0aCBkPSJNIDc2OC43MSAyMDMuMTAgTCA3NjYuNzcgMjAwLjM5IEwgNzY0LjYwIDE5Ny45NSBMIDc2Mi4xOSAxOTUuNzggTCA3NTkuNTcgMTkzLjg4IEwgNzU2Ljc5IDE5Mi4yOCBMIDc1My44NCAxOTAuOTggTCA3NTAuNzcgMTkwLjAwIEwgNzQ3LjYwIDE4OS4zNSBMIDc0NC4zMSAxODkuMDUgTCA3NDIuMjIgMTg2LjE5IEwgNzM5Ljg4IDE4My42NSBMIDczNy4yOSAxODEuNDAgTCA3MzQuNDcgMTc5LjQ1IEwgNzMxLjQ4IDE3Ny44NSBMIDcyOC4zMSAxNzYuNTggTCA3MjUuMDIgMTc1LjY3IEwgNzIxLjYzIDE3NS4xNSBMIDcxOC4xMiAxNzUuMDAgTCA3MTMuOTEgMTc1LjI1IEwgNzA5Ljg2IDE3Ni4wNCBMIDcwNS45NCAxNzcuMzcgTCA3MDIuMjIgMTc5LjIxIEwgNjk4Ljc4IDE4MS41MiBMIDY5NS42MCAxODQuMzQgTCA2OTIuODMgMTgzLjYwIEwgNjkwLjAyIDE4My4xNSBMIDY4Ny4xNiAxODMuMDAgTCA2ODMuODIgMTgzLjIxIEwgNjgwLjY5IDE4My43NiBMIDY3Ny43NCAxODQuNjQgTCA2NzQuOTUgMTg1Ljg1IEwgNjcxLjQ2IDE4Ny45NCBMIDY2OC40OCAxOTAuNDUgTCA2NjUuOTQgMTkzLjM4IEwgNjY0LjM3IDE5NS44MyBMIDY2My4xNyAxOTguNDEgTCA2NjIuMzIgMjAxLjE1IEwgNjYxLjgyIDIwNC4wNyBMIDY1OC41MyAyMDUuMTMgTCA2NTUuNTQgMjA2LjYxIEwgNjUyLjgwIDIwOC41MCBMIDY1MC4zNyAyMTAuNzYgTCA2NDguMjkgMjEzLjMxIEwgNjQ2LjU3IDIxNi4xNyBMIDY0NS4yNiAyMTkuMjUgTCA2NDQuNDAgMjIyLjUxIEwgNjQ0LjAwIDIyNS45OSBMIDY0NC4yNCAyMjkuMTQgTCA2NDQuOTEgMjMyLjExIEwgNjQ2LjAxIDIzNC45MyBMIDY0Ny40OSAyMzcuNTkgTCA2NDkuMzAgMjQwLjAyIEwgNjUxLjQ2IDI0Mi4yNSBMIDY1My44OSAyNDQuMTkgTCA2NTYuNTcgMjQ1LjgzIEwgNjU5LjUyIDI0Ny4xOSBMIDY2Mi42MiAyNDguMTcgTCA2NjUuODggMjQ4Ljc4IEwgNjY5LjM0IDI0OS4wMCBMIDc2Ni42NiAyNDkuMDAgTCA3NzAuMTcgMjQ4Ljc4IEwgNzczLjQ2IDI0OC4xNyBMIDc3Ni41NiAyNDcuMTkgTCA3NzkuNTEgMjQ1LjgzIEwgNzgyLjE5IDI0NC4xOSBMIDc4NC42MSAyNDIuMjUgTCA3ODYuNzYgMjQwLjAyIEwgNzg4LjU1IDIzNy41OSBMIDc5MC4wMiAyMzQuOTMgTCA3OTEuMTAgMjMyLjExIEwgNzkxLjc2IDIyOS4xNCBMIDc5Mi4wMCAyMjUuOTkgTCA3OTEuODIgMjIyLjk4IEwgNzkxLjI1IDIyMC4xNSBMIDc5MC4zMSAyMTcuNDcgTCA3ODguOTcgMjE0LjkxIEwgNzg2LjY5IDIxMS44MCBMIDc4My45MyAyMDkuMTAgTCA3ODAuNjIgMjA2Ljc3IEwgNzc3LjkyIDIwNS4zOCBMIDc3NS4wNiAyMDQuMzAgTCA3NzIuMDAgMjAzLjU0IEwgNzY4LjcxIDIwMy4xMCBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI1MCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNzMuOTk1MTkiIHRhcmdldC13aWR0aD0iMTQ3Ljk5NjQiIHRhcmdldC14PSI2NDQiIHRhcmdldC15PSIxNzUuMDA0OCI+PC9wYXRoPjxwYXRoIGQ9Ik0gOTQ5LjYyIDE3MS43NCBMIDk0Ny4wMCAxNjYuOTUgTCA5NDQuMDMgMTYyLjU0IEwgOTQwLjY5IDE1OC40NyBMIDkzNi45OSAxNTQuNzQgTCA5MzIuOTUgMTUxLjM1IEwgOTI4LjY3IDE0OC4zOCBMIDkyNC4xNCAxNDUuODEgTCA5MTkuMzMgMTQzLjY1IEwgOTE0LjM1IDE0MS45MyBMIDkwOS4yNCAxNDAuNjkgTCA5MDMuOTcgMTM5LjkzIEwgODk4LjUxIDEzOS42NCBMIDg5Mi40NiAxMzkuOTggTCA4ODYuNTYgMTQwLjk1IEwgODgwLjc4IDE0Mi41NCBMIDg3NS4yMSAxNDQuNzMgTCA4NjkuOTEgMTQ3LjQ5IEwgODY0Ljg2IDE1MC44NSBMIDg2Mi41MSAxNDYuNzEgTCA4NTkuODkgMTQyLjg2IEwgODU3LjAxIDEzOS4zMCBMIDg1My44NiAxMzYuMDAgTCA4NDkuMjcgMTMyLjAxIEwgODQ0LjM1IDEyOC41NyBMIDgzOS4wOCAxMjUuNjcgTCA4MzMuNTMgMTIzLjM0IEwgODI3Ljc4IDEyMS42MSBMIDgyMS44MCAxMjAuNDkgTCA4MTcuMjUgMTIwLjA3IEwgODEyLjY3IDEyMC4wMyBMIDgwOC4wMyAxMjAuMzYgTCA4MDMuMzIgMTIxLjA4IEwgNzk4LjY4IDEyMi4yMSBMIDc5NC4yNiAxMjMuNjYgTCA3OTAuMDQgMTI1LjQ1IEwgNzg2LjAwIDEyNy41NyBMIDc4MC45MCAxMzAuODggTCA3NzYuMjQgMTM0LjY3IEwgNzcyLjAwIDEzOC45MyBMIDc2OC4yMyAxNDMuNjIgTCA3NjQuOTkgMTQ4LjY3IEwgNzYyLjI2IDE1NC4xMSBMIDc2MC42MSAxNTguMzYgTCA3NTkuMzEgMTYyLjc1IEwgNzU4LjM2IDE2Ny4zMCBMIDc1Ny43NiAxNzIuMDIgTCA3NTIuODAgMTczLjg1IEwgNzQ4LjE3IDE3Ni4wMyBMIDc0My44MyAxNzguNTggTCA3MzkuNzYgMTgxLjUwIEwgNzM1Ljk2IDE4NC43NyBMIDczMi41MCAxODguMzAgTCA3MjkuMzggMTkyLjExIEwgNzI2LjU4IDE5Ni4xOSBMIDcyNC4xNSAyMDAuNTEgTCA3MjIuMTIgMjA0Ljk4IEwgNzIwLjQ3IDIwOS42NCBMIDcxOS4yMSAyMTQuNTAgTCA3MTguMzkgMjE5LjQzIEwgNzE4LjAzIDIyNC40NSBMIDcxOC4xMSAyMjkuNTcgTCA3MTguNjYgMjM0LjgxIEwgNzE5LjcxIDIzOS45OCBMIDcyMS4xNyAyNDQuODkgTCA3MjMuMDIgMjQ5LjU2IEwgNzI1LjI5IDI1NC4wMiBMIDcyNy45NCAyNTguMjggTCA3MzAuOTEgMjYyLjIzIEwgNzM0LjE5IDI2NS45MCBMIDczNy44MSAyNjkuMjggTCA3NDEuNzAgMjcyLjM0IEwgNzQ1LjgyIDI3NS4wMyBMIDc1MC4xOCAyNzcuMzcgTCA3NTQuODAgMjc5LjM1IEwgNzU5LjU1IDI4MC45MiBMIDc2NC40NSAyODIuMDUgTCA3NjkuNTMgMjgyLjc0IEwgNzc0LjgwIDI4My4wMCBMIDkzMy4wNSAyODMuMDAgTCA5MzguMzYgMjgyLjc2IEwgOTQzLjQ2IDI4Mi4wNyBMIDk0OC40MCAyODAuOTQgTCA5NTMuMTcgMjc5LjM3IEwgOTU3LjgyIDI3Ny4zOCBMIDk2Mi4yMCAyNzUuMDQgTCA5NjYuMzMgMjcyLjMzIEwgOTcwLjI1IDI2OS4yNSBMIDk3My44OCAyNjUuODQgTCA5NzcuMTcgMjYyLjE1IEwgOTgwLjE0IDI1OC4xNyBMIDk4Mi44MCAyNTMuODkgTCA5ODUuMDYgMjQ5LjQwIEwgOTg2LjkxIDI0NC42OSBMIDk4OC4zNSAyMzkuNzUgTCA5ODkuMzggMjM0LjU1IEwgOTg5LjkxIDIyOS4yNyBMIDk4OS45NiAyMjQuMTIgTCA5ODkuNTYgMjE5LjA4IEwgOTg4LjcwIDIxNC4xMyBMIDk4Ny40MCAyMDkuMjYgTCA5ODUuNzEgMjA0LjU5IEwgOTgzLjYzIDIwMC4xMCBMIDk4MS4xNCAxOTUuNzkgTCA5NzguMjkgMTkxLjcxIEwgOTc1LjEyIDE4Ny45MiBMIDk3MS42MSAxODQuNDEgTCA5NjcuNzQgMTgxLjE2IEwgOTYzLjYyIDE3OC4yNyBMIDk1OS4yMyAxNzUuNzYgTCA5NTQuNTUgMTczLjYyIEwgOTQ5LjU0IDE3MS44NSBMIDk0OS42MiAxNzEuNzQgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0zKSIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNTEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjE2Mi45NzQ5OCIgdGFyZ2V0LXdpZHRoPSIyNzEuOTM2ODMiIHRhcmdldC14PSI3MTguMDI1NyIgdGFyZ2V0LXk9IjEyMC4wMjUwMiI+PC9wYXRoPjxnIG5vZGUtaWQ9IjE2OSI+PHBhdGggZD0iTSAxMDI0LjAwIDc0Mi4wMCBMIDEwMjMuNzIgNzQ3LjI2IEwgMTAyMi45MiA3NTIuNDkgTCAxMDIxLjU4IDc1Ny43NCBMIDEwMTkuNjggNzYzLjAyIEwgMTAxNy4xOSA3NjguMzUgTCAxMDE0LjA3IDc3My43NSBMIDEwMDkuOTkgNzc5LjYzIEwgMTAwNS4xMiA3ODUuNTggTCA5OTkuMzkgNzkxLjYyIEwgOTkyLjcyIDc5Ny43NiBMIDk4NS4wMyA4MDMuOTkgTCA5NzcuNDQgODA5LjUwIEwgOTY5LjAwIDgxNS4wNCBMIDk1OS42NiA4MjAuNjIgTCA5NDkuMzQgODI2LjI0IEwgOTM3Ljk4IDgzMS44OCBMIDkyNC4xMiA4MzguMTMgTCA5MDguOTEgODQ0LjM0IEwgODkyLjI0IDg1MC40OCBMIDg3NC4wNCA4NTYuNTUgTCA4NTQuNzMgODYyLjM1IEwgODM0LjI1IDg2Ny44OSBMIDgxMi41NSA4NzMuMTUgTCA3OTAuNzYgODc3Ljg4IEwgNzY4LjAwIDg4Mi4zMCBMIDc0NC4yMyA4ODYuMzggTCA3MjAuNDEgODg5Ljk3IEwgNjk1LjgyIDg5My4yMCBMIDY3MC40NSA4OTYuMDUgTCA2NDUuMDQgODk4LjQ0IEwgNjE5LjA5IDkwMC40MiBMIDU5Mi41OCA5MDEuOTggTCA1NjYuMDUgOTAzLjEwIEwgNTM5LjE5IDkwMy43NyBMIDUxMi4wMCA5MDQuMDAgTCA0ODQuODEgOTAzLjc3IEwgNDU3Ljk1IDkwMy4xMCBMIDQzMS40MiA5MDEuOTggTCA0MDQuOTEgOTAwLjQyIEwgMzc4Ljk2IDg5OC40NCBMIDM1My41NSA4OTYuMDUgTCAzMjguMTggODkzLjIwIEwgMzAzLjU5IDg4OS45NyBMIDI3OS43NyA4ODYuMzggTCAyNTYuMDAgODgyLjMwIEwgMjMzLjI0IDg3Ny44OCBMIDIxMS40NSA4NzMuMTUgTCAxODkuNzUgODY3Ljg5IEwgMTY5LjI3IDg2Mi4zNSBMIDE0OS45NiA4NTYuNTUgTCAxMzEuNzYgODUwLjQ4IEwgMTE1LjA5IDg0NC4zNCBMIDk5Ljg4IDgzOC4xMyBMIDg2LjAyIDgzMS44OCBMIDc0LjY2IDgyNi4yNCBMIDY0LjM0IDgyMC42MiBMIDU1LjAwIDgxNS4wNCBMIDQ2LjU2IDgwOS41MCBMIDM4Ljk3IDgwMy45OSBMIDMxLjI4IDc5Ny43NiBMIDI0LjYxIDc5MS42MiBMIDE4Ljg4IDc4NS41OCBMIDE0LjAxIDc3OS42MyBMIDkuOTMgNzczLjc1IEwgNi44MSA3NjguMzUgTCA0LjMyIDc2My4wMiBMIDIuNDIgNzU3Ljc0IEwgMS4wOCA3NTIuNDkgTCAwLjI4IDc0Ny4yNiBMIDAuMDAgNzQyLjAwIEwgMC4yOCA3MzYuNzQgTCAxLjA4IDczMS41MSBMIDIuNDIgNzI2LjI2IEwgNC4zMiA3MjAuOTggTCA2LjgxIDcxNS42NSBMIDkuOTMgNzEwLjI1IEwgMTQuMDEgNzA0LjM3IEwgMTguODggNjk4LjQyIEwgMjQuNjEgNjkyLjM4IEwgMzEuMjggNjg2LjI0IEwgMzguOTcgNjgwLjAxIEwgNDYuNTYgNjc0LjUwIEwgNTUuMDAgNjY4Ljk2IEwgNjQuMzQgNjYzLjM4IEwgNzQuNjYgNjU3Ljc2IEwgODYuMDIgNjUyLjEyIEwgOTkuODggNjQ1Ljg3IEwgMTE1LjA5IDYzOS42NiBMIDEzMS43NiA2MzMuNTIgTCAxNDkuOTYgNjI3LjQ1IEwgMTY5LjI3IDYyMS42NSBMIDE4OS43NSA2MTYuMTEgTCAyMTEuNDUgNjEwLjg1IEwgMjMzLjI0IDYwNi4xMiBMIDI1Ni4wMCA2MDEuNzAgTCAyNzkuNzcgNTk3LjYyIEwgMzAzLjU5IDU5NC4wMyBMIDMyOC4xOCA1OTAuODAgTCAzNTMuNTUgNTg3Ljk1IEwgMzc4Ljk2IDU4NS41NiBMIDQwNC45MSA1ODMuNTggTCA0MzEuNDIgNTgyLjAyIEwgNDU3Ljk1IDU4MC45MCBMIDQ4NC44MSA1ODAuMjMgTCA1MTIuMDAgNTgwLjAwIEwgNTM5LjE5IDU4MC4yMyBMIDU2Ni4wNSA1ODAuOTAgTCA1OTIuNTggNTgyLjAyIEwgNjE5LjA5IDU4My41OCBMIDY0NS4wNCA1ODUuNTYgTCA2NzAuNDUgNTg3Ljk1IEwgNjk1LjgyIDU5MC44MCBMIDcyMC40MSA1OTQuMDMgTCA3NDQuMjMgNTk3LjYyIEwgNzY4LjAwIDYwMS43MCBMIDc5MC43NiA2MDYuMTIgTCA4MTIuNTUgNjEwLjg1IEwgODM0LjI1IDYxNi4xMSBMIDg1NC43MyA2MjEuNjUgTCA4NzQuMDQgNjI3LjQ1IEwgODkyLjI0IDYzMy41MiBMIDkwOC45MSA2MzkuNjYgTCA5MjQuMTIgNjQ1Ljg3IEwgOTM3Ljk4IDY1Mi4xMiBMIDk0OS4zNCA2NTcuNzYgTCA5NTkuNjYgNjYzLjM4IEwgOTY5LjAwIDY2OC45NiBMIDk3Ny40NCA2NzQuNTAgTCA5ODUuMDMgNjgwLjAxIEwgOTkyLjcyIDY4Ni4yNCBMIDk5OS4zOSA2OTIuMzggTCAxMDA1LjEyIDY5OC40MiBMIDEwMDkuOTkgNzA0LjM3IEwgMTAxNC4wNyA3MTAuMjUgTCAxMDE3LjE5IDcxNS42NSBMIDEwMTkuNjggNzIwLjk4IEwgMTAyMS41OCA3MjYuMjYgTCAxMDIyLjkyIDczMS41MSBMIDEwMjMuNzIgNzM2Ljc0IEwgMTAyNC4wMCA3NDIuMDAgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC00KSIgZmlsbC1vcGFjaXR5PSIwLjQwNzc0NDY1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxLDQiIGlkPSLmpK3lnIblvaIiIG5vZGUtaWQ9IjUyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW9wYWNpdHk9IjAuNDA3NzQ0NjUiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMzI0IiB0YXJnZXQtd2lkdGg9IjEwMjQiIHRhcmdldC14PSIwIiB0YXJnZXQteT0iNTgwIj48L3BhdGg+PC9nPjxwYXRoIGQ9Ik0gOTA2LjAwIDYwNi4wMCBMIDkwMS4xMyA2NzAuMDAgTCA4NjUuMDAgNjU5LjUyIFoiIGZpbGw9IiNmYWQ0ZDIiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjUzIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI2NCIgdGFyZ2V0LXdpZHRoPSI0MSIgdGFyZ2V0LXg9Ijg2NSIgdGFyZ2V0LXk9IjYwNiI+PC9wYXRoPjxwYXRoIGQ9Ik0gOTA0Ljg1IDYwNi4wMCBMIDkzNS4wMCA2NjIuMzkgTCA5MDAuMDAgNjcwLjAwIFoiIGZpbGw9IiNmZGM2YzMiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjU0IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI2NCIgdGFyZ2V0LXdpZHRoPSIzNSIgdGFyZ2V0LXg9IjkwMCIgdGFyZ2V0LXk9IjYwNiI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjAxLjM3IDU5NC4wMCBMIDIwNi4wMCA2NDIuMDAgTCAxNzcuMDAgNjM4LjgxIFoiIGZpbGw9IiNmN2Q5ZDciIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjU1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI0OCIgdGFyZ2V0LXdpZHRoPSIyOSIgdGFyZ2V0LXg9IjE3NyIgdGFyZ2V0LXk9IjU5NCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjAwLjAwIDU5NC4wMCBMIDIzMC4wMCA2MzEuODkgTCAyMDQuNTUgNjQyLjAwIFoiIGZpbGw9IiNmZmNjYzgiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjU2IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI0OCIgdGFyZ2V0LXdpZHRoPSIzMCIgdGFyZ2V0LXg9IjIwMCIgdGFyZ2V0LXk9IjU5NCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTQ4LjQ4IDU2NC4wMCBMIDE1OC4wMCA2NjUuMDAgTCA5NC4wMCA2NTguNzEgWiIgZmlsbD0iI2ZhZDRkMiIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNTciIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjEwMSIgdGFyZ2V0LXdpZHRoPSI2NCIgdGFyZ2V0LXg9Ijk0IiB0YXJnZXQteT0iNTY0Ij48L3BhdGg+PHBhdGggZD0iTSAxNDcuMDAgNTY0LjAwIEwgMjE0LjAwIDY0My4zNyBMIDE1Ni41MyA2NjUuMDAgWiIgZmlsbD0iI2ZkYzZjMyIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNTgiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjEwMSIgdGFyZ2V0LXdpZHRoPSI2NyIgdGFyZ2V0LXg9IjE0NyIgdGFyZ2V0LXk9IjU2NCI+PC9wYXRoPjwvZz48cGF0aCBkPSJNIDY1OS43MSA2MzYuNTAgTCAzNTkuNTUgNjIxLjU0IEwgMjIxLjE0IDc0Mi4wMCBMIDQzMS40MSA3ODkuNjEgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC01KSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0i6Lev5b6ELTI0IiBub2RlLWlkPSI1OSIgc3Ryb2tlPSJub25lIiB0YXJnZXQtaGVpZ2h0PSIxNjguMDY2NCIgdGFyZ2V0LXdpZHRoPSI0MzguNTY5ODIiIHRhcmdldC14PSIyMjEuMTM5NzYiIHRhcmdldC15PSI2MjEuNTM4NyI+PC9wYXRoPjxwYXRoIGQ9Ik0gMzkxLjAwIDU5NS40NCBMIDUzMy4xNCA2NzUuMDAgTCA2MzEuNjkgNjI1LjUxIEwgNDY0LjQ2IDU0MC4wMCBaIiBmaWxsPSIjZjUyZDIyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIyIiBpZD0i6Lev5b6ELTMwIiBub2RlLWlkPSI2MSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTM1IiB0YXJnZXQtd2lkdGg9IjI0MC42OTE5NiIgdGFyZ2V0LXg9IjM5MSIgdGFyZ2V0LXk9IjU0MCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMzkyLjczIDU5Ni4wMCBMIDQ4NC4wMCA1NDQuNTYgTCA0NjcuODQgNTExLjAwIEwgMzYxLjAwIDU3NC44OCBaIiBmaWxsPSIjZjY0NTQwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIyIiBpZD0i6Lev5b6ELTMyIiBub2RlLWlkPSI2MiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iODUiIHRhcmdldC13aWR0aD0iMTIzIiB0YXJnZXQteD0iMzYxIiB0YXJnZXQteT0iNTExIj48L3BhdGg+PHBhdGggZD0iTSA2MjkuNDQgNjI4LjAwIEwgNjYyLjAwIDYwNS4wNCBMIDQ2Ny4xOSA1MTEuNTAgTCA0NzUuODQgNTQ2LjY3IFoiIGZpbGw9IiNmNjVjNTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIiIGlkPSLot6/lvoQtMzMiIG5vZGUtaWQ9IjYzIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMTYuNDk3NTMiIHRhcmdldC13aWR0aD0iMTk0LjgwNjgiIHRhcmdldC14PSI0NjcuMTkzMiIgdGFyZ2V0LXk9IjUxMS41MDI0NyI+PC9wYXRoPjxwYXRoIGQ9Ik0gMzYyLjk0IDU3Mi41NyBMIDU0MC4wMCA2NjcuMDAgTCA1NDAuMDAgNjY3LjAwIEwgNjYyLjAwIDYwNS4wNCBMIDY2Mi4wMCA2MzUuMDEgTCA1NDkuMzIgNzA4LjIwIEwgNTQ3LjQxIDcwOS4yMSBMIDU0NS40NCA3MDkuODQgTCA1NDMuMzggNzEwLjEyIEwgNTQxLjI5IDcxMC4wNSBMIDUzOS4yNyA3MDkuNjEgTCA1MzcuMjggNzA4LjgwIEwgMzYwLjAwIDYxNy4zMyBMIDM2MC4wMCA2MTcuMzMgTCAzNjAuMDAgNTc0LjMzIEwgMzYwLjE2IDU3My41NSBMIDM2MC41OSA1NzIuOTIgTCAzNjEuMjIgNTcyLjQ5IEwgMzYyLjAwIDU3Mi4zMyBMIDM2Mi45NCA1NzIuNTcgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC02KSIgZmlsbC1ydWxlPSJldmVub2RkIiBncm91cC1pZD0iMiIgaWQ9Iui3r+W+hC0zMSIgbm9kZS1pZD0iNjQiIHN0cm9rZT0idXJsKCNsaW5lYXJHcmFkaWVudC03KSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTM3Ljc5MTYzIiB0YXJnZXQtd2lkdGg9IjMwMiIgdGFyZ2V0LXg9IjM2MCIgdGFyZ2V0LXk9IjU3Mi4zMzM0Ij48L3BhdGg+PHBhdGggZD0iTSA0MjEuODUgNjIyLjc2IEwgNDcyLjY5IDY1MS4wMCBMIDQ3My40NSA2NTEuNjUgTCA0NzMuODggNjUyLjUwIEwgNDczLjk3IDY1My40NSBMIDQ3My42NyA2NTQuNDAgTCA0NjkuNDMgNjYyLjA1IEwgNDY4Ljc4IDY2Mi44MiBMIDQ2Ny45NCA2NjMuMjUgTCA0NjYuOTkgNjYzLjMzIEwgNDY2LjA0IDY2My4wMyBMIDQ2Ni4wMyA2NjMuMDMgTCA0MTUuMTkgNjM0Ljc4IEwgNDE0LjQzIDYzNC4xMyBMIDQxNC4wMCA2MzMuMjkgTCA0MTMuOTIgNjMyLjM0IEwgNDE0LjIyIDYzMS4zOSBMIDQxOC40NSA2MjMuNzMgTCA0MTkuMTAgNjIyLjk3IEwgNDE5Ljk1IDYyMi41NCBMIDQyMC44OSA2MjIuNDUgTCA0MjEuODUgNjIyLjc1IEwgNDIxLjg1IDYyMi43NiBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTgpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIyIiBpZD0i55+p5b2iIiBub2RlLWlkPSI2NSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNDAuODc4NiIgdGFyZ2V0LXdpZHRoPSI2MC4wNTAzMjMiIHRhcmdldC14PSI0MTMuOTE2ODQiIHRhcmdldC15PSI2MjIuNDUzMDYiPjwvcGF0aD48cGF0aCBkPSJNIDQ2NC4wMCA0MTAuMDMgTCA0NzguODggMzk2LjY2IEwgNDc5LjgxIDM5Ni4wNCBMIDQ4MC44NSAzOTUuNzAgTCA0ODEuOTQgMzk1LjY2IEwgNDgzLjAzIDM5NS45MiBMIDY2My4yMSA0NjguMDMgTCA2NjQuODkgNDY4LjkwIEwgNjY2LjMzIDQ3MC4wMiBMIDY2Ny41NSA0NzEuMzkgTCA2NjguNTAgNDcyLjk2IEwgNjY5LjEzIDQ3NC42NyBMIDY2OS40NiA0NzYuNTQgTCA2NzguNzUgNTk2LjY4IEwgNjc4LjYzIDU5OC4wNCBMIDY3OC4wOCA1OTkuMjMgTCA2NzcuMTcgNjAwLjE4IEwgNjc1Ljk2IDYwMC44MCBMIDY1OS4zMyA2MDYuMDAgTCA2NTkuMzMgNjA2LjAwIEwgNjQzLjU0IDQ5MS4wMiBMIDQ2NC4wMCA0MTAuMDMgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC05KSIgZmlsbC1ydWxlPSJldmVub2RkIiBncm91cC1pZD0iMiIgaWQ9Iui3r+W+hC0zNyIgbm9kZS1pZD0iNjYiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjIxMC4zNDI3NyIgdGFyZ2V0LXdpZHRoPSIyMTQuNzU0MjciIHRhcmdldC14PSI0NjQiIHRhcmdldC15PSIzOTUuNjU3MjMiPjwvcGF0aD48cGF0aCBkPSJNIDY2Mi4wMCA2MDUuMDQgTCA2NTMuMTYgNDg5LjQ2IEwgNjUyLjgzIDQ4Ny41NyBMIDY1Mi4xOCA0ODUuODUgTCA2NTEuMjIgNDg0LjI3IEwgNjQ5Ljk4IDQ4Mi44OCBMIDY0OC41MiA0ODEuNzcgTCA2NDYuODAgNDgwLjkwIEwgNDY1LjQ0IDQxMC41NiBMIDQ2NC42OCA0MTAuNTggTCA0NjQuMTUgNDExLjEzIEwgNDY0LjA4IDQxMS41NSBMIDQ2OS44MSA1MTUuOTYgTCA0NjkuODEgNTE1Ljk2IEwgNjYyLjAwIDYwNS4wNCBaIiBmaWxsPSIjZjg4Njg0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIyIiBpZD0i6Lev5b6ELTM0IiBub2RlLWlkPSI2NyIgc3Ryb2tlPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEwKSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTk0LjQ4MTM4IiB0YXJnZXQtd2lkdGg9IjE5Ny45MTUyMiIgdGFyZ2V0LXg9IjQ2NC4wODQ3OCIgdGFyZ2V0LXk9IjQxMC41NjA0MiI+PC9wYXRoPjxwYXRoIGQ9Ik0gNDk1LjAwIDUwMS4wMCBMIDY1OS43MSA1ODEuNjggTCA2NTkuNzEgNjA2LjAwIEwgNDk1LjAwIDUyOS4yNyBaIiBmaWxsPSIjZjU3MzcxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIyIiBpZD0i6Lev5b6ELTM2IiBub2RlLWlkPSI2OCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTA1IiB0YXJnZXQtd2lkdGg9IjE2NC43MDk2IiB0YXJnZXQteD0iNDk1IiB0YXJnZXQteT0iNTAxIj48L3BhdGg+PHBhdGggZD0iTSA0ODguMDEgNDE5LjIzIEwgNDk4LjAwIDUzMS4wMCBMIDQ2OC4wMCA1MTYuNjUgTCA0NjMuMDcgNDExLjUxIEwgNDYzLjMzIDQxMC43OSBMIDQ2NC4wMiA0MTAuNDYgTCA0NjQuNDIgNDEwLjUyIEwgNDg4LjAxIDQxOS4yMyBMIDQ4OC4wMSA0MTkuMjMgWiIgZmlsbD0iI2Y2NjU1ZiIgZmlsbC1ydWxlPSJldmVub2RkIiBncm91cC1pZD0iMiIgaWQ9Iui3r+W+hC0zNSIgbm9kZS1pZD0iNjkiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjEyMC41MzgyNCIgdGFyZ2V0LXdpZHRoPSIzNC45MjkzMiIgdGFyZ2V0LXg9IjQ2My4wNzA2OCIgdGFyZ2V0LXk9IjQxMC40NjE3NiI+PC9wYXRoPjxwYXRoIGQ9Ik0gNTI3LjY5IDUxNC4zMSBMIDUzMS44MiA1MTguMTcgTCA1MzUuNDIgNTIyLjI2IEwgNTM4LjUzIDUyNi42MCBMIDU0MS4xNiA1MzEuMTkgTCA1NDMuMzQgNTM2LjA0IEwgNTQ1LjAyIDU0MC45OSBMIDU0Ni4yMSA1NDYuMDQgTCA1NDYuOTEgNTUxLjIzIEwgNTQ3LjEyIDU1Ni40NiBMIDU0Ni44MiA1NjEuNjQgTCA1NDYuMDMgNTY2LjgwIEwgNTQ0LjczIDU3MS45NiBMIDU0Mi45MyA1NzYuOTQgTCA1NDAuNjMgNTgxLjc1IEwgNTM3Ljc5IDU4Ni40MCBMIDUzNC4zOSA1OTAuOTIgTCA1MzAuNTMgNTk1LjA1IEwgNTI2LjQ0IDU5OC42NiBMIDUyMi4xMSA2MDEuNzYgTCA1MTcuNTEgNjA0LjM5IEwgNTEyLjY2IDYwNi41NyBMIDUwNy43MiA2MDguMjUgTCA1MDIuNjYgNjA5LjQ0IEwgNDk3LjQ4IDYxMC4xNCBMIDQ5Mi4yNCA2MTAuMzUgTCA0ODcuMDYgNjEwLjA2IEwgNDgxLjkwIDYwOS4yNiBMIDQ3Ni43NCA2MDcuOTYgTCA0NzEuNzYgNjA2LjE3IEwgNDY2Ljk2IDYwMy44NiBMIDQ2Mi4zMCA2MDEuMDIgTCA0NTcuNzggNTk3LjYzIEwgNDUzLjY1IDU5My43NyBMIDQ1MC4wNSA1ODkuNjcgTCA0NDYuOTQgNTg1LjM0IEwgNDQ0LjMxIDU4MC43NSBMIDQ0Mi4xMyA1NzUuODkgTCA0NDAuNDUgNTcwLjk1IEwgNDM5LjI3IDU2NS45MCBMIDQzOC41NiA1NjAuNzEgTCA0MzguMzUgNTU1LjQ4IEwgNDM4LjY1IDU1MC4yOSBMIDQzOS40NCA1NDUuMTMgTCA0NDAuNzUgNTM5Ljk4IEwgNDQyLjU0IDUzNS4wMCBMIDQ0NC44NCA1MzAuMTkgTCA0NDcuNjggNTI1LjUzIEwgNDUxLjA4IDUyMS4wMSBMIDQ1NC45NCA1MTYuODggTCA0NTkuMDMgNTEzLjI4IEwgNDYzLjM2IDUxMC4xOCBMIDQ2Ny45NiA1MDcuNTUgTCA0NzIuODEgNTA1LjM3IEwgNDc3Ljc1IDUwMy42OSBMIDQ4Mi44MSA1MDIuNTAgTCA0ODguMDAgNTAxLjgwIEwgNDkzLjIzIDUwMS41OSBMIDQ5OC40MSA1MDEuODggTCA1MDMuNTcgNTAyLjY3IEwgNTA4LjczIDUwMy45OCBMIDUxMy43MSA1MDUuNzcgTCA1MTguNTIgNTA4LjA4IEwgNTIzLjE3IDUxMC45MSBMIDUyNy42OSA1MTQuMzEgWiIgZmlsbD0iI2U2ZjNmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMyIgaWQ9Ik92YWwiIG5vZGUtaWQ9IjcxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMDguNzYxOTMiIHRhcmdldC13aWR0aD0iMTA4Ljc2MTkiIHRhcmdldC14PSI0MzguMzU0OCIgdGFyZ2V0LXk9IjUwMS41ODc2OCI+PC9wYXRoPjxwYXRoIGQ9Ik0gNDkzLjYxIDUwNi40NyBMIDQ5OC42MyA1MDYuMjkgTCA1MDMuNTAgNTA2LjU5IEwgNTA4LjI1IDUwNy4zNSBMIDUxMi45MCA1MDguNTcgTCA1MTcuNDIgNTEwLjI0IEwgNTIxLjcwIDUxMi4zMCBMIDUyNS43NiA1MTQuNzcgTCA1MjkuNjEgNTE3LjY0IEwgNTMzLjE1IDUyMC44NyBMIDUzNi4zNSA1MjQuNDMgTCA1MzkuMjIgNTI4LjM0IEwgNTQxLjc2IDUzMi42MyBMIDU0My44NSA1MzcuMTYgTCA1NDUuNDMgNTQxLjczIEwgNTQ2LjUzIDU0Ni4zOCBMIDU0Ny4xNyA1NTEuMTEgTCA1NDcuMzQgNTU1Ljg5IEwgNTQ3LjA0IDU2MC42MCBMIDU0Ni4zMCA1NjUuMjcgTCA1NDUuMDggNTY5LjkwIEwgNTQzLjQzIDU3NC4zOCBMIDU0MS4zMyA1NzguNjggTCA1MzguNzggNTgyLjgxIEwgNTM1Ljc2IDU4Ni43OSBMIDUzMi4zMyA1OTAuNDQgTCA1MjguNjggNTkzLjY1IEwgNTI0Ljc3IDU5Ni40NCBMIDUyMC42MCA1OTguODQgTCA1MTYuMjEgNjAwLjgzIEwgNTExLjcxIDYwMi4zNyBMIDUwNy4wOCA2MDMuNDggTCA1MDIuMzAgNjA0LjE0IEwgNDk3LjQ5IDYwNC4zNSBMIDQ5Mi42OCA2MDQuMDggTCA0ODcuODYgNjAzLjMzIEwgNDgzLjAwIDYwMi4wOSBMIDQ3OC4zMCA2MDAuMzUgTCA0NzMuOTIgNTk4LjIzIEwgNDY5LjgyIDU5NS43MiBMIDQ2Ni4wMSA1OTIuODIgTCA0NjIuNDcgNTg5LjU2IEwgNDU5LjMyIDU4Ni4wMyBMIDQ1Ni41MyA1ODIuMjEgTCA0NTQuMDggNTc4LjA5IEwgNDUyLjA2IDU3My43NiBMIDQ1MC40OCA1NjkuMjYgTCA0NDkuMzQgNTY0LjU1IEwgNDQ4LjY1IDU1OS42MiBMIDQ0OC40OCA1NTQuNTMgTCA0NDguODAgNTQ5LjYzIEwgNDQ5LjYwIDU0NC44OSBMIDQ1MC44NyA1NDAuMjggTCA0NTIuNTkgNTM1LjgwIEwgNDU0LjY5IDUzMS41OCBMIDQ1Ny4xOCA1MjcuNjAgTCA0NjAuMDcgNTIzLjg0IEwgNDYzLjMwIDUyMC4zNyBMIDQ2Ni44MiA1MTcuMjUgTCA0NzAuNjUgNTE0LjQ2IEwgNDc0LjgwIDUxMi4wMCBMIDQ3OS4xNSA1MDkuOTYgTCA0ODMuNzIgNTA4LjM2IEwgNDg4LjU0IDUwNy4yMCBMIDQ5My42MyA1MDYuNDcgTCA0OTMuNjEgNTA2LjQ3IFogTSA0OTIuNzYgNDk2LjU0IEwgNDg3Ljg1IDQ5Ny4xOCBMIDQ4My4xNSA0OTguMTYgTCA0NzguNjMgNDk5LjUwIEwgNDc0LjI5IDUwMS4xNyBMIDQ2OC43MSA1MDMuOTMgTCA0NjMuNTQgNTA3LjE4IEwgNDU4Ljc0IDUxMC45NCBMIDQ1NC4zNiA1MTUuMTcgTCA0NTAuNDYgNTE5Ljc3IEwgNDQ3LjAzIDUyNC43OSBMIDQ0NC4xMiA1MzAuMTIgTCA0NDEuNzkgNTM1LjczIEwgNDQwLjAyIDU0MS42NiBMIDQzOS4xMSA1NDYuMjAgTCA0MzguNTcgNTUwLjg0IEwgNDM4LjQxIDU1NS42MCBMIDQzOC42MyA1NjAuNTAgTCA0MzkuMjYgNTY1LjM2IEwgNDQwLjI1IDU3MC4wMiBMIDQ0MS41OSA1NzQuNTAgTCA0NDMuMjcgNTc4LjgxIEwgNDQ2LjA0IDU4NC4zNCBMIDQ0OS4zMiA1ODkuNDYgTCA0NTMuMTAgNTk0LjIxIEwgNDU3LjM1IDU5OC41NSBMIDQ2MS45OSA2MDIuNDEgTCA0NjcuMDQgNjA1LjgxIEwgNDcyLjQyIDYwOC42OCBMIDQ3OC4wNyA2MTAuOTggTCA0ODQuMDUgNjEyLjczIEwgNDg4LjYyIDYxMy42MyBMIDQ5My4zMCA2MTQuMTYgTCA0OTguMTAgNjE0LjMxIEwgNTAzLjA0IDYxNC4wOSBMIDUwNy45NSA2MTMuNDUgTCA1MTIuNjUgNjEyLjQ2IEwgNTE3LjE3IDYxMS4xMyBMIDUyMS41MiA2MDkuNDUgTCA1MjcuMTAgNjA2LjcwIEwgNTMyLjI3IDYwMy40NCBMIDUzNy4wNiA1OTkuNjkgTCA1NDEuNDQgNTk1LjQ2IEwgNTQ1LjM0IDU5MC44NSBMIDU0OC43NyA1ODUuODQgTCA1NTEuNjggNTgwLjUxIEwgNTU0LjAxIDU3NC44OSBMIDU1NS43OCA1NjguOTcgTCA1NTYuNjkgNTY0LjQzIEwgNTU3LjIzIDU1OS43OSBMIDU1Ny4zOSA1NTUuMDMgTCA1NTcuMTcgNTUwLjEzIEwgNTU2LjU0IDU0NS4yNyBMIDU1NS41NSA1NDAuNjAgTCA1NTQuMjEgNTM2LjEzIEwgNTUyLjUzIDUzMS44MSBMIDU0OS43NiA1MjYuMjkgTCA1NDYuNDkgNTIxLjE3IEwgNTQyLjcwIDUxNi40MiBMIDUzOC40NSA1MTIuMDggTCA1MzMuODEgNTA4LjIyIEwgNTI4Ljc2IDUwNC44MiBMIDUyMy4zOSA1MDEuOTUgTCA1MTcuNzMgNDk5LjY0IEwgNTExLjc2IDQ5Ny45MCBMIDUwNy4xOCA0OTcuMDAgTCA1MDIuNTAgNDk2LjQ3IEwgNDk3LjcwIDQ5Ni4zMSBMIDQ5Mi43NiA0OTYuNTQgWiIgZmlsbD0iI2NmMDQwNCIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMyIgaWQ9IlNoYXBlIiBub2RlLWlkPSI3MiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTE3Ljk5ODkiIHRhcmdldC13aWR0aD0iMTE4Ljk4NDMxNCIgdGFyZ2V0LXg9IjQzOC40MDg3IiB0YXJnZXQteT0iNDk2LjMxMzkiPjwvcGF0aD48cGF0aCBkPSJNIDU3NC40NiA2MjguOTIgTCA1NzMuMTkgNjI4LjgwIEwgNTcyLjA4IDYyOC4yMCBMIDUzNC4xMyA1OTcuMTMgTCA1MzMuMzMgNTk2LjEzIEwgNTMyLjk5IDU5NC45NyBMIDUzMy4xMiA1OTMuNzYgTCA1MzMuNzQgNTkyLjYzIEwgNTM0LjA5IDU5Mi4yMiBMIDUzNS4xMiA1OTEuNDMgTCA1MzYuMzEgNTkxLjEwIEwgNTM3LjU1IDU5MS4yMiBMIDUzOC43MCA1OTEuODIgTCA1NzYuNjQgNjIyLjg4IEwgNTc3LjQ1IDYyMy44OSBMIDU3Ny43OCA2MjUuMDUgTCA1NzcuNjUgNjI2LjI2IEwgNTc3LjAzIDYyNy4zOCBMIDU3Ni42OSA2MjcuODAgTCA1NzUuNjkgNjI4LjU3IEwgNTc0LjQ2IDYyOC45MiBaIiBmaWxsPSIjZjdmOGY4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIzIiBpZD0iUGF0aCIgbm9kZS1pZD0iNzMiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjM3LjgxOTA5IiB0YXJnZXQtd2lkdGg9IjQ0Ljc5MjM2IiB0YXJnZXQteD0iNTMyLjk5MDUiIHRhcmdldC15PSI1OTEuMTAxNTYiPjwvcGF0aD48cGF0aCBkPSJNIDUzNS4zMiA1ODguMTggTCA1MzMuODYgNTg4LjQ1IEwgNTMyLjUxIDU4OS4wMCBMIDUzMS4yOCA1ODkuNzkgTCA1MzAuMjIgNTkwLjgzIEwgNTI5Ljg3IDU5MS4yNCBMIDUyOS4wMyA1OTIuNDcgTCA1MjguNDUgNTkzLjgyIEwgNTI4LjE0IDU5NS4yNiBMIDUyOC4xMyA1OTYuNzUgTCA1MjguNDAgNTk4LjIxIEwgNTI4Ljk1IDU5OS41NyBMIDUyOS43NSA2MDAuODAgTCA1MzAuODAgNjAxLjg3IEwgNTY4LjIwIDYzMy4yNyBMIDU2OS40MyA2MzQuMTEgTCA1NzAuNzggNjM0LjY5IEwgNTcyLjIyIDYzNC45OSBMIDU3My43MSA2MzUuMDEgTCA1NzUuMTcgNjM0LjczIEwgNTc2LjUzIDYzNC4xOCBMIDU3Ny43NiA2MzMuMzggTCA1NzguODMgNjMyLjM0IEwgNTc5LjE3IDYzMS45MiBMIDU4MC4wMiA2MzAuNzAgTCA1ODAuNTkgNjI5LjM0IEwgNTgwLjkwIDYyNy45MSBMIDU4MC45MSA2MjYuNDIgTCA1ODAuNjQgNjI0Ljk1IEwgNTgwLjA5IDYyMy41OSBMIDU3OS4yOSA2MjIuMzYgTCA1NzguMjQgNjIxLjMwIEwgNTQwLjgyIDU4OS45MCBMIDUzOS41OSA1ODkuMDYgTCA1MzguMjQgNTg4LjQ5IEwgNTM2LjgxIDU4OC4xOSBMIDUzNS4zMiA1ODguMTggTCA1MzUuMzIgNTg4LjE4IFoiIGZpbGw9IiNjZjA0MDQiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjMiIGlkPSJQYXRoIiBub2RlLWlkPSI3NCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNDYuODMyNzAzIiB0YXJnZXQtd2lkdGg9IjUyLjc4Njc0MyIgdGFyZ2V0LXg9IjUyOC4xMjcyIiB0YXJnZXQteT0iNTg4LjE3NjkiPjwvcGF0aD48cGF0aCBkPSJNIDU1MC4yMCA1NTAuNzQgTCA1NTAuMzkgNTU2LjM1IEwgNTUwLjA0IDU2MS43NSBMIDU0OS4xNiA1NjYuOTggTCA1NDcuNzcgNTcyLjA1IEwgNTQ1Ljg3IDU3Ni45OSBMIDU0My41NSA1ODEuNjQgTCA1NDAuODEgNTg2LjAyIEwgNTM3LjYzIDU5MC4xNyBMIDUzNC4wNyA1OTMuOTkgTCA1MzAuMTggNTk3LjQzIEwgNTI1Ljk2IDYwMC41MCBMIDUyMS4zOCA2MDMuMjEgTCA1MTYuNTggNjA1LjQ1IEwgNTExLjU0IDYwNy4yMSBMIDUwNi4yMyA2MDguNDkgTCA1MDAuNjEgNjA5LjI4IEwgNDk0Ljk1IDYwOS40OCBMIDQ4OS41MCA2MDkuMTQgTCA0ODQuMjMgNjA4LjI4IEwgNDc5LjExIDYwNi45MCBMIDQ3NC4xMyA2MDUuMDMgTCA0NjkuNDQgNjAyLjc0IEwgNDY1LjAyIDYwMC4wMyBMIDQ2MC44NSA1OTYuODggTCA0NTYuOTkgNTkzLjM2IEwgNDUzLjUzIDU4OS41MSBMIDQ1MC40NCA1ODUuMzQgTCA0NDcuNzEgNTgwLjgwIEwgNDQ1LjQ2IDU3Ni4wNSBMIDQ0My42OSA1NzEuMDUgTCA0NDIuNDEgNTY1LjgwIEwgNDQxLjYyIDU2MC4yNCBMIDQ0MS40MyA1NTQuNjMgTCA0NDEuNzggNTQ5LjIyIEwgNDQyLjY1IDU0NC4wMCBMIDQ0NC4wNSA1MzguOTMgTCA0NDUuOTUgNTMzLjk5IEwgNDQ4LjI2IDUyOS4zNCBMIDQ1MS4wMSA1MjQuOTUgTCA0NTQuMTkgNTIwLjgxIEwgNDU3Ljc1IDUxNi45OSBMIDQ2MS42MyA1MTMuNTUgTCA0NjUuODUgNTEwLjQ4IEwgNDcwLjQ0IDUwNy43NyBMIDQ3NS4yNCA1MDUuNTMgTCA0ODAuMjggNTAzLjc3IEwgNDg1LjU5IDUwMi40OSBMIDQ5MS4yMCA1MDEuNjkgTCA0OTYuODcgNTAxLjUwIEwgNTAyLjMyIDUwMS44NCBMIDUwNy41OSA1MDIuNzAgTCA1MTIuNzEgNTA0LjA3IEwgNTE3LjY5IDUwNS45NSBMIDUyMi4zOCA1MDguMjQgTCA1MjYuODAgNTEwLjk1IEwgNTMwLjk3IDUxNC4wOSBMIDUzNC44MyA1MTcuNjIgTCA1MzguMjkgNTIxLjQ2IEwgNTQxLjM4IDUyNS42NCBMIDU0NC4xMCA1MzAuMTcgTCA1NDYuMzYgNTM0LjkzIEwgNTQ4LjEzIDUzOS45MiBMIDU0OS40MSA1NDUuMTggTCA1NTAuMjAgNTUwLjc0IFoiIGZpbGw9IiNmYzhlOGIiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjMiIGlkPSJPdmFsIiBub2RlLWlkPSI3NSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTA3Ljk3ODMiIHRhcmdldC13aWR0aD0iMTA4Ljk1OTk2IiB0YXJnZXQteD0iNDQxLjQyODQ3IiB0YXJnZXQteT0iNTAxLjQ5ODUiPjwvcGF0aD48cGF0aCBkPSJNIDQ5MS41MyA1MDUuNjUgTCA0OTYuNTUgNTA1LjQ3IEwgNTAxLjQyIDUwNS43NyBMIDUwNi4xNyA1MDYuNTIgTCA1MTAuODIgNTA3Ljc1IEwgNTE1LjM0IDUwOS40MiBMIDUxOS42MiA1MTEuNDggTCA1MjMuNjggNTEzLjk1IEwgNTI3LjUzIDUxNi44MiBMIDUzMS4wNyA1MjAuMDUgTCA1MzQuMjcgNTIzLjYxIEwgNTM3LjE0IDUyNy41MiBMIDUzOS42OSA1MzEuODEgTCA1NDEuNzcgNTM2LjM0IEwgNTQzLjM1IDU0MC45MSBMIDU0NC40NSA1NDUuNTUgTCA1NDUuMDkgNTUwLjI5IEwgNTQ1LjI2IDU1NS4wNyBMIDU0NC45NiA1NTkuNzggTCA1NDQuMjIgNTY0LjQ0IEwgNTQzLjAwIDU2OS4wOCBMIDU0MS4zNSA1NzMuNTYgTCA1MzkuMjUgNTc3Ljg2IEwgNTM2LjcwIDU4MS45OSBMIDUzMy42OCA1ODUuOTcgTCA1MzAuMjUgNTg5LjYyIEwgNTI2LjYwIDU5Mi44MiBMIDUyMi42OSA1OTUuNjIgTCA1MTguNTIgNTk4LjAyIEwgNTE0LjEzIDYwMC4wMSBMIDUwOS42MyA2MDEuNTUgTCA1MDUuMDAgNjAyLjY2IEwgNTAwLjIyIDYwMy4zMiBMIDQ5NS40MSA2MDMuNTMgTCA0OTAuNjAgNjAzLjI2IEwgNDg1Ljc4IDYwMi41MSBMIDQ4MC45MiA2MDEuMjYgTCA0NzYuMjIgNTk5LjUyIEwgNDcxLjg0IDU5Ny40MCBMIDQ2Ny43NSA1OTQuOTAgTCA0NjMuOTMgNTkyLjAwIEwgNDYwLjM5IDU4OC43NCBMIDQ1Ny4yNCA1ODUuMjEgTCA0NTQuNDUgNTgxLjM5IEwgNDUyLjAwIDU3Ny4yNyBMIDQ0OS45OCA1NzIuOTQgTCA0NDguNDAgNTY4LjQzIEwgNDQ3LjI2IDU2My43MyBMIDQ0Ni41NyA1NTguODAgTCA0NDYuNDAgNTUzLjcxIEwgNDQ2LjcyIDU0OC44MSBMIDQ0Ny41MiA1NDQuMDYgTCA0NDguNzkgNTM5LjQ2IEwgNDUwLjUxIDUzNC45OCBMIDQ1Mi42MSA1MzAuNzYgTCA0NTUuMTAgNTI2Ljc4IEwgNDU3Ljk5IDUyMy4wMiBMIDQ2MS4yMiA1MTkuNTUgTCA0NjQuNzQgNTE2LjQzIEwgNDY4LjU3IDUxMy42NCBMIDQ3Mi43MiA1MTEuMTggTCA0NzcuMDcgNTA5LjE0IEwgNDgxLjY1IDUwNy41NCBMIDQ4Ni40NiA1MDYuMzcgTCA0OTEuNTUgNTA1LjY1IEwgNDkxLjUzIDUwNS42NSBaIE0gNDkwLjY4IDQ5NS43MiBMIDQ4NS43NyA0OTYuMzUgTCA0ODEuMDcgNDk3LjM0IEwgNDc2LjU1IDQ5OC42NyBMIDQ3Mi4yMSA1MDAuMzUgTCA0NjYuNjMgNTAzLjExIEwgNDYxLjQ2IDUwNi4zNiBMIDQ1Ni42NyA1MTAuMTIgTCA0NTIuMjggNTE0LjM1IEwgNDQ4LjM4IDUxOC45NSBMIDQ0NC45NSA1MjMuOTYgTCA0NDIuMDQgNTI5LjMwIEwgNDM5LjcxIDUzNC45MSBMIDQzNy45NCA1NDAuODQgTCA0MzcuMDMgNTQ1LjM3IEwgNDM2LjQ5IDU1MC4wMiBMIDQzNi4zMyA1NTQuNzggTCA0MzYuNTUgNTU5LjY4IEwgNDM3LjE4IDU2NC41NCBMIDQzOC4xNyA1NjkuMjAgTCA0MzkuNTEgNTczLjY4IEwgNDQxLjE5IDU3Ny45OSBMIDQ0My45NiA1ODMuNTIgTCA0NDcuMjQgNTg4LjY0IEwgNDUxLjAyIDU5My4zOSBMIDQ1NS4yNyA1OTcuNzMgTCA0NTkuOTEgNjAxLjU5IEwgNDY0Ljk3IDYwNC45OSBMIDQ3MC4zNCA2MDcuODYgTCA0NzUuOTkgNjEwLjE2IEwgNDgxLjk3IDYxMS45MSBMIDQ4Ni41NCA2MTIuODEgTCA0OTEuMjIgNjEzLjMzIEwgNDk2LjAyIDYxMy40OSBMIDUwMC45NiA2MTMuMjcgTCA1MDUuODcgNjEyLjYzIEwgNTEwLjU3IDYxMS42NCBMIDUxNS4wOSA2MTAuMzEgTCA1MTkuNDQgNjA4LjYzIEwgNTI1LjAyIDYwNS44NyBMIDUzMC4xOSA2MDIuNjIgTCA1MzQuOTggNTk4Ljg2IEwgNTM5LjM2IDU5NC42NCBMIDU0My4yNiA1OTAuMDMgTCA1NDYuNzAgNTg1LjAyIEwgNTQ5LjYwIDU3OS42OCBMIDU1MS45MyA1NzQuMDcgTCA1NTMuNzAgNTY4LjE1IEwgNTU0LjYxIDU2My42MSBMIDU1NS4xNSA1NTguOTcgTCA1NTUuMzEgNTU0LjIwIEwgNTU1LjA5IDU0OS4zMSBMIDU1NC40NiA1NDQuNDQgTCA1NTMuNDcgNTM5Ljc4IEwgNTUyLjEzIDUzNS4zMCBMIDU1MC40NSA1MzAuOTkgTCA1NDcuNjggNTI1LjQ3IEwgNTQ0LjQxIDUyMC4zNCBMIDU0MC42MiA1MTUuNTkgTCA1MzYuMzcgNTExLjI1IEwgNTMxLjczIDUwNy4zOSBMIDUyNi42OCA1MDMuOTkgTCA1MjEuMzEgNTAxLjEyIEwgNTE1LjY1IDQ5OC44MiBMIDUwOS42OCA0OTcuMDcgTCA1MDUuMTAgNDk2LjE4IEwgNTAwLjQyIDQ5NS42NSBMIDQ5NS42MiA0OTUuNDkgTCA0OTAuNjggNDk1LjcyIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIzIiBpZD0iU2hhcGUiIG5vZGUtaWQ9Ijc2IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMTcuOTk4OSIgdGFyZ2V0LXdpZHRoPSIxMTguOTg0MzQ0IiB0YXJnZXQteD0iNDM2LjMyOTEzIiB0YXJnZXQteT0iNDk1LjQ5MiI+PC9wYXRoPjxwYXRoIGQ9Ik0gNTc2LjQ0IDYyOC43NSBMIDU3NS4xNyA2MjguNjIgTCA1NzQuMDYgNjI4LjAyIEwgNTM2LjEyIDU5Ni45NiBMIDUzNS4zMiA1OTUuOTYgTCA1MzQuOTggNTk0Ljc5IEwgNTM1LjExIDU5My41OSBMIDUzNS43MyA1OTIuNDYgTCA1MzYuMDggNTkyLjA1IEwgNTM3LjExIDU5MS4yNiBMIDUzOC4zMCA1OTAuOTMgTCA1MzkuNTQgNTkxLjA1IEwgNTQwLjY5IDU5MS42NSBMIDU3OC42MiA2MjIuNzQgTCA1NzkuNDIgNjIzLjcxIEwgNTc5Ljc4IDYyNC45MSBMIDU3OS42NCA2MjYuMTUgTCA1NzkuMDIgNjI3LjI1IEwgNTc4LjY3IDYyNy42NSBMIDU3Ny42NyA2MjguNDEgTCA1NzYuNDQgNjI4Ljc1IFoiIGZpbGw9IiNmN2Y4ZjgiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjMiIGlkPSJQYXRoIiBub2RlLWlkPSI3NyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMzcuODE5OTQ2IiB0YXJnZXQtd2lkdGg9IjQ0Ljc5NTQxIiB0YXJnZXQteD0iNTM0Ljk4Mjg1IiB0YXJnZXQteT0iNTkwLjkyNzUiPjwvcGF0aD48cGF0aCBkPSJNIDUzOS4zMSA1ODcuODMgTCA1MzcuODUgNTg4LjEwIEwgNTM2LjQ5IDU4OC42NSBMIDUzNS4yNiA1ODkuNDQgTCA1MzQuMjAgNTkwLjQ4IEwgNTMzLjg1IDU5MC44OSBMIDUzMy4wMSA1OTIuMTIgTCA1MzIuNDMgNTkzLjQ3IEwgNTMyLjEzIDU5NC45MSBMIDUzMi4xMSA1OTYuNDAgTCA1MzIuMzkgNTk3Ljg2IEwgNTMyLjk0IDU5OS4yMyBMIDUzMy43NCA2MDAuNDYgTCA1MzQuNzggNjAxLjUyIEwgNTcyLjE5IDYzMi45MiBMIDU3My40MiA2MzMuNzYgTCA1NzQuNzcgNjM0LjM0IEwgNTc2LjIwIDYzNC42NCBMIDU3Ny42OSA2MzQuNjYgTCA1NzkuMTYgNjM0LjM5IEwgNTgwLjUyIDYzMy44NCBMIDU4MS43NSA2MzMuMDMgTCA1ODIuODEgNjMxLjk5IEwgNTgzLjE2IDYzMS41OCBMIDU4NC4wMCA2MzAuMzUgTCA1ODQuNTggNjI5LjAwIEwgNTg0Ljg4IDYyNy41NiBMIDU4NC45MCA2MjYuMDcgTCA1ODQuNjIgNjI0LjYxIEwgNTg0LjA3IDYyMy4yNCBMIDU4My4yNyA2MjIuMDEgTCA1ODIuMjMgNjIwLjk1IEwgNTQ0LjgwIDU4OS41NSBMIDU0My41OCA1ODguNzIgTCA1NDIuMjMgNTg4LjE0IEwgNTQwLjc5IDU4Ny44NCBMIDUzOS4zMSA1ODcuODMgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xMikiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjMiIGlkPSJQYXRoIiBub2RlLWlkPSI3OCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNDYuODMyNzY0IiB0YXJnZXQtd2lkdGg9IjUyLjc4NjgwNCIgdGFyZ2V0LXg9IjUzMi4xMTE5NCIgdGFyZ2V0LXk9IjU4Ny44MjgyNSI+PC9wYXRoPjxwYXRoIGQ9Ik0gNDc0Ljc4IDUyNi4yMiBMIDQ3My4xMyA1MjcuNjIgTCA0NzEuNTEgNTI5LjE5IEwgNDY5LjMyIDUzMS42NiBMIDQ2Ny4xOCA1MzQuNTEgTCA0NjUuMDAgNTM4LjEzIEwgNDYzLjc1IDU0MC43MyBMIDQ2Mi42OSA1NDMuNjIgTCA0NjEuODMgNTQ2LjgyIEwgNDYxLjMyIDU1MC4wOCBMIDQ2MS4yMCA1NTMuNjIgTCA0NjEuNTAgNTU3LjQ5IiBmaWxsPSIjZmRjN2M1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIzIiBpZD0iUGF0aCIgbm9kZS1pZD0iNzkiIHN0cm9rZT0iI2ZkYzdjNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHRhcmdldC1oZWlnaHQ9IjMxLjI3NjQyOCIgdGFyZ2V0LXdpZHRoPSIxMy41NzcwMjYiIHRhcmdldC14PSI0NjEuMiIgdGFyZ2V0LXk9IjUyNi4yMTgiPjwvcGF0aD48cGF0aCBkPSJNIDQ5Mi4wNCA1NjkuNjYgTCA0OTIuMDQgNTY4LjI4IEMgNDkyLjA0IDU2Ni42NiA0OTIuNDAgNTY1LjIyIDQ5My4xOCA1NjMuOTAgQyA0OTMuNzggNTYyLjgyIDQ5NC42OCA1NjEuNzQgNDk2LjAwIDU2MC42MCBDIDQ5OC42NCA1NTguMjYgNTAwLjI2IDU1Ni43MCA1MDAuODYgNTU1Ljk4IEMgNTAyLjM2IDU1NC4wMCA1MDMuMTQgNTUxLjY2IDUwMy4xNCA1NDguOTYgQyA1MDMuMTQgNTQ1LjM2IDUwMi4wMCA1NDIuNTQgNDk5Ljc4IDU0MC41MCBDIDQ5Ny40NCA1MzguMzQgNDk0LjM4IDUzNy4zMiA0OTAuNTQgNTM3LjMyIEMgNDg2LjIyIDUzNy4zMiA0ODIuODYgNTM4LjY0IDQ4MC40NiA1NDEuMjggQyA0NzguMDYgNTQzLjgwIDQ3Ni45MiA1NDcuMTYgNDc2LjkyIDU1MS4zNiBMIDQ4MS42NiA1NTEuMzYgQyA0ODEuNjYgNTQ4LjQyIDQ4Mi4zMiA1NDYuMTQgNDgzLjY0IDU0NC40NiBDIDQ4NS4wOCA1NDIuNDggNDg3LjMwIDU0MS41MiA0OTAuMzAgNTQxLjUyIEMgNDkyLjgyIDU0MS41MiA0OTQuODAgNTQyLjE4IDQ5Ni4xOCA1NDMuNjIgQyA0OTcuNTAgNTQ0Ljk0IDQ5OC4yMiA1NDYuODAgNDk4LjIyIDU0OS4yMCBDIDQ5OC4yMiA1NTAuODggNDk3LjYyIDU1Mi40NCA0OTYuNDIgNTUzLjk0IEMgNDk2LjA2IDU1NC40MiA0OTUuMzQgNTU1LjE0IDQ5NC4zOCA1NTYuMTAgQyA0OTEuMTQgNTU4Ljk4IDQ4OS4xNiA1NjEuMjYgNDg4LjMyIDU2My4wNiBDIDQ4Ny42MCA1NjQuNTYgNDg3LjI0IDU2Ni4zMCA0ODcuMjQgNTY4LjI4IEwgNDg3LjI0IDU2OS42NiBMIDQ5Mi4wNCA1NjkuNjYgWiBNIDQ4OS42NCA1ODEuMDAgQyA0OTAuNjYgNTgxLjAwIDQ5MS41MCA1ODAuNjQgNDkyLjIyIDU3OS45OCBDIDQ5Mi45NCA1NzkuMzIgNDkzLjMwIDU3OC40OCA0OTMuMzAgNTc3LjQwIEMgNDkzLjMwIDU3Ni4zOCA0OTIuOTQgNTc1LjU0IDQ5Mi4yOCA1NzQuODggQyA0OTEuNTYgNTc0LjE2IDQ5MC42NiA1NzMuODYgNDg5LjY0IDU3My44NiBDIDQ4OC42MiA1NzMuODYgNDg3Ljc4IDU3NC4xNiA0ODcuMDYgNTc0Ljg4IEMgNDg2LjM0IDU3NS41NCA0ODYuMDQgNTc2LjM4IDQ4Ni4wNCA1NzcuNDAgQyA0ODYuMDQgNTc4LjQyIDQ4Ni4zNCA1NzkuMjYgNDg3LjA2IDU3OS45OCBDIDQ4Ny43OCA1ODAuNjQgNDg4LjYyIDU4MS4wMCA0ODkuNjQgNTgxLjAwIFoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgaWQ9Iu+8nyIgbm9kZS1pZD0iODAiIHN0cm9rZT0ibm9uZSIgdGFyZ2V0LWhlaWdodD0iNDMuNjc5OTkzIiB0YXJnZXQtd2lkdGg9IjI2LjIyMDAwMSIgdGFyZ2V0LXg9IjQ3Ni45MiIgdGFyZ2V0LXk9IjUzNy4zMiI+PC9wYXRoPjwvc3ZnPg==";
const Ou = R({
  name: "KvStatus",
  props: {
    type: { type: String, default: "data" }
  },
  setup(e) {
    return { imgUrl: z(() => new URL((/* @__PURE__ */ Object.assign({ "./svgs/data.svg": Su, "./svgs/loading.svg": Eu, "./svgs/search.svg": mu }))[`./svgs/${e.type}.svg`], self.location).href) };
  }
}), ku = { class: "kv-status" }, vu = { class: "error-type flex-center" }, fu = { class: "status-svg" }, Yu = ["src"], Bu = { class: "mt20 flex-center font-size16 status-text" };
function xu(e, t, I, M, n, i) {
  return F(), ae("div", ku, [
    Ae("div", vu, [
      Ee(e.$slots, "image", {}, () => [
        Ae("div", fu, [
          Ae("img", { src: e.imgUrl }, null, 8, Yu)
        ])
      ], !0)
    ]),
    Ae("div", Bu, [
      Ee(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const It = /* @__PURE__ */ Fe(Ou, [["render", xu], ["__scopeId", "data-v-ac82367c"]]);
It.install = function(e) {
  e.component(It.name, It);
};
const bu = {
  name: "KvList",
  components: { PullRefresh: tu, List: Fg, KvStatus: It },
  props: {
    disabled: { type: Boolean, default: !1 },
    // 是否禁用下拉刷新
    finishedText: { type: String, default: "没有更多了" },
    // 加载完成的文字
    loadChange: { type: Function, default: () => {
    } },
    // load回调
    refreshChange: { type: Function, default: () => {
    } }
    // 刷新的回调
  },
  setup(e) {
    const t = S([]), I = S(!1), M = S(!1), n = S(!1), i = S(!1), c = S({ pageIndex: 1, isNullData: !1, isFinished: !1 }), u = async () => {
      n.value && (c.value.pageIndex = 1, n.value = !1), i.value && (c.value.pageIndex = 1, i.value = !1);
      const N = await e.loadChange(c.value.pageIndex);
      I.value = !1, N ? c.value = {
        pageIndex: 1,
        isNullData: !1,
        isFinished: !1,
        ...N
      } : M.value = !0, N != null && N.isFinished && (M.value = !0);
    }, g = async () => {
      M.value = !1, I.value = !0, await e.refreshChange(), u();
    };
    return {
      list: t,
      onLoad: u,
      loading: I,
      finished: M,
      onRefresh: g,
      refreshing: n,
      statusData: c,
      reset: () => {
        M.value = !1, i.value = !0, g();
      }
    };
  }
}, Qu = { class: "kv-list flex-column flex1" }, Zu = { key: 0 }, Uu = { key: 0 };
function hu(e, t, I, M, n, i) {
  const c = xe("kv-status"), u = xe("list"), g = xe("pull-refresh");
  return F(), ae("div", Qu, [
    l(g, {
      modelValue: M.refreshing,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => M.refreshing = a),
      disabled: I.disabled,
      onRefresh: M.onRefresh,
      class: "kv-pull flex1"
    }, {
      default: je(() => [
        M.loading && M.statusData.pageIndex === 1 ? (F(), Le(c, {
          key: 0,
          type: "loading"
        }, {
          image: je(() => [
            Ee(e.$slots, "loading")
          ]),
          default: je(() => [
            e.$slots.loading ? pe("", !0) : (F(), ae("span", Zu, "Loading..."))
          ]),
          _: 3
        })) : M.statusData.isNullData ? (F(), Le(c, { key: 1 }, {
          image: je(() => [
            Ee(e.$slots, "empty")
          ]),
          default: je(() => [
            e.$slots.empty ? pe("", !0) : (F(), ae("span", Uu, "暂无数据"))
          ]),
          _: 3
        })) : (F(), Le(u, De({
          key: 2,
          loading: M.loading,
          "onUpdate:loading": t[0] || (t[0] = (a) => M.loading = a),
          finished: M.finished,
          "finished-text": I.finishedText,
          offset: 200
        }, e.$attrs, { onLoad: M.onLoad }), {
          default: je(() => [
            Ee(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["loading", "finished", "finished-text", "onLoad"]))
      ]),
      _: 3
    }, 8, ["modelValue", "disabled", "onRefresh"])
  ]);
}
const zt = /* @__PURE__ */ Fe(bu, [["render", hu]]);
zt.install = function(e) {
  e.component(zt.name, zt);
};
function II(e) {
  return KM() ? (qM(e), !0) : !1;
}
function MI(e) {
  return typeof e == "function" ? e() : Ne(e);
}
const iI = typeof window < "u", Gu = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Wu = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
function Pu(e, t, I, M) {
  let n = e < 12 ? "AM" : "PM";
  return M && (n = n.split("").reduce((i, c) => i += `${c}.`, "")), I ? n.toLowerCase() : n;
}
function Ru(e, t, I = {}) {
  var M;
  const n = e.getFullYear(), i = e.getMonth(), c = e.getDate(), u = e.getHours(), g = e.getMinutes(), a = e.getSeconds(), N = e.getMilliseconds(), o = e.getDay(), D = (M = I.customMeridiem) != null ? M : Pu, A = {
    YY: () => String(n).slice(-2),
    YYYY: () => n,
    M: () => i + 1,
    MM: () => `${i + 1}`.padStart(2, "0"),
    MMM: () => e.toLocaleDateString(I.locales, { month: "short" }),
    MMMM: () => e.toLocaleDateString(I.locales, { month: "long" }),
    D: () => String(c),
    DD: () => `${c}`.padStart(2, "0"),
    H: () => String(u),
    HH: () => `${u}`.padStart(2, "0"),
    h: () => `${u % 12 || 12}`.padStart(1, "0"),
    hh: () => `${u % 12 || 12}`.padStart(2, "0"),
    m: () => String(g),
    mm: () => `${g}`.padStart(2, "0"),
    s: () => String(a),
    ss: () => `${a}`.padStart(2, "0"),
    SSS: () => `${N}`.padStart(3, "0"),
    d: () => o,
    dd: () => e.toLocaleDateString(I.locales, { weekday: "narrow" }),
    ddd: () => e.toLocaleDateString(I.locales, { weekday: "short" }),
    dddd: () => e.toLocaleDateString(I.locales, { weekday: "long" }),
    A: () => D(u, g),
    AA: () => D(u, g, !1, !0),
    a: () => D(u, g, !0),
    aa: () => D(u, g, !0, !0)
  };
  return t.replace(Wu, (d, L) => {
    var s;
    return L || ((s = A[d]) == null ? void 0 : s.call(A)) || d;
  });
}
function pu(e) {
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  if (e === void 0)
    return /* @__PURE__ */ new Date();
  if (e instanceof Date)
    return new Date(e);
  if (typeof e == "string" && !/Z$/i.test(e)) {
    const t = e.match(Gu);
    if (t) {
      const I = t[2] - 1 || 0, M = (t[7] || "0").substring(0, 3);
      return new Date(t[1], I, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, M);
    }
  }
  return new Date(e);
}
function Vt(e, t = "HH:mm:ss", I = {}) {
  return z(() => Ru(pu(MI(e)), MI(t), I));
}
function Vu(e, t = 1e3, I = {}) {
  const {
    immediate: M = !0,
    immediateCallback: n = !1
  } = I;
  let i = null;
  const c = S(!1);
  function u() {
    i && (clearInterval(i), i = null);
  }
  function g() {
    c.value = !1, u();
  }
  function a() {
    const N = MI(t);
    N <= 0 || (c.value = !0, n && e(), u(), i = setInterval(e, N));
  }
  if (M && iI && a(), KI(t) || typeof t == "function") {
    const N = h(t, () => {
      c.value && iI && a();
    });
    II(N);
  }
  return II(g), {
    isActive: c,
    pause: g,
    resume: a
  };
}
const Xu = iI ? window : void 0;
function Hu(e, t = {}) {
  const {
    immediate: I = !0,
    window: M = Xu
  } = t, n = S(!1);
  let i = 0, c = null;
  function u(N) {
    if (!n.value || !M)
      return;
    const o = N - i;
    e({ delta: o, timestamp: N }), i = N, c = M.requestAnimationFrame(u);
  }
  function g() {
    !n.value && M && (n.value = !0, c = M.requestAnimationFrame(u));
  }
  function a() {
    n.value = !1, c != null && M && (M.cancelAnimationFrame(c), c = null);
  }
  return I && g(), II(a), {
    isActive: ei(n),
    pause: a,
    resume: g
  };
}
var Ju = Object.defineProperty, _I = Object.getOwnPropertySymbols, Fu = Object.prototype.hasOwnProperty, _u = Object.prototype.propertyIsEnumerable, $I = (e, t, I) => t in e ? Ju(e, t, { enumerable: !0, configurable: !0, writable: !0, value: I }) : e[t] = I, $u = (e, t) => {
  for (var I in t || (t = {}))
    Fu.call(t, I) && $I(e, I, t[I]);
  if (_I)
    for (var I of _I(t))
      _u.call(t, I) && $I(e, I, t[I]);
  return e;
};
function Ku(e = {}) {
  const {
    controls: t = !1,
    interval: I = "requestAnimationFrame"
  } = e, M = S(/* @__PURE__ */ new Date()), n = () => M.value = /* @__PURE__ */ new Date(), i = I === "requestAnimationFrame" ? Hu(n, { immediate: !0 }) : Vu(n, I, { immediate: !0 });
  return t ? $u({
    now: M
  }, i) : M;
}
function pM(e) {
  var N;
  const t = (N = Vt(Ku(), "YYYY-MM-DD")) == null ? void 0 : N.value, I = S(`${t} 00:00:00`), M = S(`${t} 23:59:59`), n = new Date((/* @__PURE__ */ new Date()).getTime() + 24 * 60 * 60 * 1e3), i = (/* @__PURE__ */ new Date()).getFullYear(), c = new Date(i - 3, 1, 1), u = z(() => {
    const o = e.type ?? "range";
    return o === "range" ? [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()] : o === "multiple" ? null : /* @__PURE__ */ new Date();
  });
  return {
    minDate: c,
    maxDate: n,
    defaultDate: u,
    startData: I,
    endDate: M,
    useDateFormat: Vt,
    formarData: (o, D = "YYYY-MM-DD HH:mm:ss") => {
      var A;
      return (A = Vt(o, D)) == null ? void 0 : A.value;
    },
    formatter: (o) => ((/* @__PURE__ */ new Date()).getTime() === new Date(o.date).getTime() && (o.type = "disabled"), o)
  };
}
const Xt = {
  __name: "picker-edit",
  props: {
    modelValue: { type: [String, Date], default: "" },
    showFormat: { type: String, default: "YYYY-MM-DD" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const I = e, M = {
      searchPadding: "10px 0px"
    }, { formarData: n } = pM(), i = NI(), c = z({
      get: () => I.modelValue ? n(I.modelValue, i.showFormat ?? I.showFormat) : "",
      set: (g) => t("update:modelValue", g)
    }), u = z(() => ({
      "van-search-border": ["round-border", "border"].includes(i.shape),
      "van-search-border-round": i.shape === "round-border"
    }));
    return (g, a) => {
      const N = xe("van-config-provider");
      return F(), Le(N, { "theme-vars": M }, {
        default: je(() => [
          l(Ne(uu), De({
            class: [u.value, "picker-edit"],
            modelValue: c.value,
            "onUpdate:modelValue": a[0] || (a[0] = (o) => c.value = o),
            placeholder: "开始时间",
            disabled: ""
          }, g.$attrs), {
            "left-icon": je(() => [
              (g.$attrs.showIcon, F(), Le(Ne(me), {
                key: 0,
                name: "underway-o"
              }))
            ]),
            _: 1
          }, 16, ["class", "modelValue"])
        ]),
        _: 1
      });
    };
  }
};
const qu = { class: "date-shortcuts mr10" }, ec = {
  __name: "shortcuts",
  props: {
    shortcutsValue: { type: Number, default: -1 }
  },
  emits: ["confirm", "change"],
  setup(e, { emit: t }) {
    const I = e, M = S(!1), n = [
      { text: "昨天", value: 1 },
      { text: "今天", value: 0 },
      { text: "近7天", value: 7 },
      { text: "近一个月", value: 30 },
      { text: "近3个月", value: 90 }
    ], i = NI(), c = z(() => ["round", "round-border"].includes(i.shape)), u = z(() => ["round", "default"].includes(i.shape)), g = S("选择范围");
    Se(() => {
      const N = n.find((o) => o.value === I.shortcutsValue);
      N && (g.value = N.text, a({ selectedValues: [N.value], selectedOptions: [N] }));
    });
    const a = ({ selectedValues: N, selectedOptions: o }) => {
      const [D] = o;
      g.value = D.text, M.value = !1;
      const [A] = N, L = (/* @__PURE__ */ new Date()).getTime() - 3600 * 1e3 * 24 * A;
      t("confirm", L);
    };
    return (N, o) => (F(), ae("div", qu, [
      l(Ne(TI), {
        round: c.value,
        onClick: o[0] || (o[0] = (D) => M.value = !0),
        class: cI({ "bg-button": u.value })
      }, {
        default: je(() => [
          tM(Qe(g.value), 1)
        ]),
        _: 1
      }, 8, ["round", "class"]),
      l(Ne(rI), {
        show: M.value,
        "onUpdate:show": o[2] || (o[2] = (D) => M.value = D),
        position: "bottom",
        "safe-area-inset-bottom": ""
      }, {
        default: je(() => [
          l(Ne(qn), {
            columns: n,
            onConfirm: a,
            onCancel: o[1] || (o[1] = (D) => M.value = !1)
          })
        ]),
        _: 1
      }, 8, ["show"])
    ]));
  }
}, tc = { class: "k-date-picker flex-align-center" }, St = /* @__PURE__ */ Object.assign({
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
    const I = e, M = z({
      get: () => I.modelValue,
      set: (d) => t("update:modelValue", d)
    }), n = S(!1), i = NI(), c = z(() => i.type ?? "range"), {
      minDate: u,
      maxDate: g,
      defaultDate: a,
      formarData: N,
      formatter: o
    } = pM(i), D = (d) => {
      const L = c.value, s = i.valueFormat ?? "YYYY-MM-DD HH:mm:ss";
      if (L === "range") {
        const x = N(d[0], s), Y = s === "YYYY-MM-DD HH:mm:ss" ? `${N(d[1], "YYYY-MM-DD")} 23:59:59` : `${N(d[1], s)}`;
        M.value = { startTime: x, endTime: Y };
      } else if (L === "multiple") {
        const x = d.map((Y) => `${N(Y, s)}`);
        M.value = x;
      } else
        M.value = N(d, s);
      n.value = !1, te(() => t("confirm", M.value));
    }, A = (d) => {
      const L = `${N(d, "YYYY-MM-DD")} 00:00:00`, s = `${N(/* @__PURE__ */ new Date(), "YYYY-MM-DD")} 23:59:00`;
      D([L, s]);
    };
    return (d, L) => (F(), ae("div", tc, [
      e.showShortcuts && c.value === "range" ? (F(), Le(ec, De({ key: 0 }, d.$attrs, {
        "shortcuts-value": e.shortcutsValue,
        onConfirm: A
      }), null, 16, ["shortcuts-value"])) : pe("", !0),
      d.$attrs.type === "single" ? (F(), Le(Xt, De({ key: 1 }, d.$attrs, {
        modelValue: M.value,
        "onUpdate:modelValue": L[0] || (L[0] = (s) => M.value = s),
        onClick: L[1] || (L[1] = (s) => n.value = !0)
      }), null, 16, ["modelValue"])) : (F(), Le(Ne(Iu), {
        key: 2,
        justify: "space-between"
      }, {
        default: je(() => [
          l(Ne(pt), {
            span: "11",
            class: "calendar-col",
            onClick: L[3] || (L[3] = (s) => n.value = !0)
          }, {
            default: je(() => [
              l(Xt, De(d.$attrs, {
                modelValue: M.value.startTime,
                "onUpdate:modelValue": L[2] || (L[2] = (s) => M.value.startTime = s)
              }), null, 16, ["modelValue"])
            ]),
            _: 1
          }),
          l(Ne(pt), {
            span: "1",
            class: "calendar-line"
          }),
          l(Ne(pt), {
            span: "11",
            class: "calendar-col",
            onClick: L[5] || (L[5] = (s) => n.value = !0)
          }, {
            default: je(() => [
              l(Xt, De({ placeholder: "结束日期" }, d.$attrs, {
                modelValue: M.value.endTime,
                "onUpdate:modelValue": L[4] || (L[4] = (s) => M.value.endTime = s)
              }), null, 16, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })),
      l(Ne(Zg), De({
        teleport: "body",
        class: "overflow",
        show: n.value,
        "onUpdate:show": L[6] || (L[6] = (s) => n.value = s),
        type: "range",
        onConfirm: D,
        "allow-same-day": "",
        "max-date": Ne(g),
        "min-date": Ne(u),
        formatter: Ne(o),
        "safe-area-inset-bottom": "",
        "default-date": Ne(a)
      }, d.$attrs), null, 16, ["show", "max-date", "min-date", "formatter", "default-date"])
    ]));
  }
});
St.install = function(e) {
  e.component(St.name, St);
};
const Ht = {
  KvButton: Ct,
  KvInput: yt,
  KvTable: wt,
  KvTree: Lt,
  KvList: zt,
  KvStatus: It,
  KvDatePicker: St,
  install: () => {
  }
};
function Ic(e, t, I = 0) {
  return e.substr(I, t.length) === t;
}
Ht.install = function(e) {
  Object.keys(Ht).forEach((t) => {
    if (Ic(t, "K")) {
      const I = Ht[t];
      e.component(I.name, I);
    }
  });
};
export {
  Ht as KVant,
  Ct as KvButton,
  St as KvDatePicker,
  yt as KvInput,
  zt as KvList,
  It as KvStatus,
  wt as KvTable,
  Lt as KvTree
};
