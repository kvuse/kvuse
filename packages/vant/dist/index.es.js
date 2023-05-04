import { inject as xI, getCurrentInstance as OI, onUnmounted as iM, computed as Q, ref as z, onDeactivated as uM, isRef as fM, watch as II, onMounted as oI, unref as aI, nextTick as p, onActivated as AM, reactive as mI, defineComponent as U, createVNode as e, onBeforeUnmount as VM, provide as TM, watchEffect as pM, mergeProps as TI, createTextVNode as cM, onUpdated as HM, useCssVars as CM, resolveComponent as H, openBlock as d, createBlock as q, createSlots as JM, withCtx as R, renderSlot as h, createElementBlock as B, createElementVNode as G, toDisplayString as AI, normalizeStyle as YI, Fragment as DI, renderList as tI, normalizeClass as eM, withModifiers as FM, createCommentVNode as dI } from "vue";
const m = (I) => I != null, SI = (I) => typeof I == "function", QI = (I) => I !== null && typeof I == "object", _M = (I) => QI(I) && SI(I.then) && SI(I.catch), tM = (I) => typeof I == "number" || /^\d+(\.\d+)?$/.test(I), $M = () => yM ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1, MI = Object.assign, yM = typeof window < "u";
function fI(I, M) {
  const N = M.split(".");
  let g = I;
  return N.forEach((j) => {
    var i;
    g = QI(g) && (i = g[j]) != null ? i : "";
  }), g;
}
const VI = (I) => Array.isArray(I) ? I : [I], yI = null, s = [Number, String], UI = {
  type: Boolean,
  default: !0
}, jI = (I) => ({
  type: s,
  default: I
}), Y = (I) => ({
  type: String,
  default: I
});
var rI = typeof window < "u", KM = (I) => I === window, pI = (I, M) => ({
  top: 0,
  left: 0,
  right: I,
  bottom: M,
  width: I,
  height: M
}), HI = (I) => {
  const M = aI(I);
  if (KM(M)) {
    const N = M.innerWidth, g = M.innerHeight;
    return pI(N, g);
  }
  return M != null && M.getBoundingClientRect ? M.getBoundingClientRect() : pI(0, 0);
};
function qM(I) {
  const M = xI(I, null);
  if (M) {
    const N = OI(), { link: g, unlink: j, internalChildren: i } = M;
    g(N), iM(() => j(N));
    const C = Q(() => i.indexOf(N));
    return {
      parent: M,
      index: C
    };
  }
  return {
    parent: null,
    index: z(-1)
  };
}
function IN(I) {
  let M;
  oI(() => {
    I(), p(() => {
      M = !0;
    });
  }), AM(() => {
    M && I();
  });
}
function bI(I, M, N = {}) {
  if (!rI)
    return;
  const { target: g = window, passive: j = !1, capture: i = !1 } = N;
  let C = !1, A;
  const u = (y) => {
    if (C)
      return;
    const L = aI(y);
    L && !A && (L.addEventListener(I, M, {
      capture: i,
      passive: j
    }), A = !0);
  }, c = (y) => {
    if (C)
      return;
    const L = aI(y);
    L && A && (L.removeEventListener(I, M, i), A = !1);
  };
  iM(() => c(g)), uM(() => c(g)), IN(() => u(g));
  let T;
  return fM(g) && (T = II(g, (y, L) => {
    c(L), u(y);
  })), () => {
    T == null || T(), c(g), C = !0;
  };
}
var eI, BI;
function MN() {
  if (!eI && (eI = z(0), BI = z(0), rI)) {
    const I = () => {
      eI.value = window.innerWidth, BI.value = window.innerHeight;
    };
    I(), window.addEventListener("resize", I, { passive: !0 }), window.addEventListener("orientationchange", I, { passive: !0 });
  }
  return { width: eI, height: BI };
}
var NN = /scroll|auto|overlay/i, LM = rI ? window : void 0;
function gN(I) {
  return I.tagName !== "HTML" && I.tagName !== "BODY" && I.nodeType === 1;
}
function DN(I, M = LM) {
  let N = I;
  for (; N && N !== M && gN(N); ) {
    const { overflowY: g } = window.getComputedStyle(N);
    if (NN.test(g))
      return N;
    N = N.parentNode;
  }
  return M;
}
function lM(I, M = LM) {
  const N = z();
  return oI(() => {
    I.value && (N.value = DN(I.value, M));
  }), N;
}
var jN = Symbol("van-field");
function iN(I) {
  const M = "scrollTop" in I ? I.scrollTop : I.pageYOffset;
  return Math.max(M, 0);
}
function JI(I, M) {
  "scrollTop" in I ? I.scrollTop = M : I.scrollTo(I.scrollX, M);
}
function wM() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function zM(I) {
  JI(window, I), JI(document.body, I);
}
const uN = $M();
function AN() {
  uN && zM(wM());
}
const TN = (I) => I.stopPropagation();
function EI(I, M) {
  (typeof I.cancelable != "boolean" || I.cancelable) && I.preventDefault(), M && TN(I);
}
function cN(I) {
  const M = aI(I);
  if (!M)
    return !1;
  const N = window.getComputedStyle(M), g = N.display === "none", j = M.offsetParent === null && N.position !== "fixed";
  return g || j;
}
MN();
function r(I) {
  if (m(I))
    return tM(I) ? `${I}px` : String(I);
}
function CN(I) {
  if (m(I)) {
    if (Array.isArray(I))
      return {
        width: r(I[0]),
        height: r(I[1])
      };
    const M = r(I);
    return {
      width: M,
      height: M
    };
  }
}
const eN = /-(\w)/g, nM = (I) => I.replace(eN, (M, N) => N.toUpperCase()), tN = (I) => I.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
function FI(I, M, N) {
  const g = I.indexOf(M);
  return g === -1 ? I : M === "-" && g !== 0 ? I.slice(0, g) : I.slice(0, g + 1) + I.slice(g).replace(N, "");
}
function yN(I, M = !0, N = !0) {
  M ? I = FI(I, ".", /\./g) : I = I.split(".")[0], N ? I = FI(I, "-", /-/g) : I = I.replace(/-/, "");
  const g = M ? /[^-0-9.]/g : /[^-0-9]/g;
  return I.replace(g, "");
}
const { hasOwnProperty: LN } = Object.prototype;
function lN(I, M, N) {
  const g = M[N];
  m(g) && (!LN.call(I, N) || !QI(g) ? I[N] = g : I[N] = aM(Object(I[N]), g));
}
function aM(I, M) {
  return Object.keys(M).forEach((N) => {
    lN(I, M, N);
  }), I;
}
var wN = {
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
    monthTitle: (I, M) => `${I}年${M}月`,
    rangePrompt: (I) => `最多选择 ${I} 天`
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
    discount: (I) => `${I}折`,
    condition: (I) => `满${I}元可用`
  },
  vanCouponCell: {
    title: "优惠券",
    count: (I) => `${I}张可用`
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
const _I = z("zh-CN"), $I = mI({
  "zh-CN": wN
}), zN = {
  messages() {
    return $I[_I.value];
  },
  use(I, M) {
    _I.value = I, this.add({ [I]: M });
  },
  add(I = {}) {
    aM($I, I);
  }
};
var nN = zN;
function aN(I) {
  const M = nM(I) + ".";
  return (N, ...g) => {
    const j = nN.messages(), i = fI(j, M + N) || fI(j, N);
    return SI(i) ? i(...g) : i;
  };
}
function kI(I, M) {
  return M ? typeof M == "string" ? ` ${I}--${M}` : Array.isArray(M) ? M.reduce(
    (N, g) => N + kI(I, g),
    ""
  ) : Object.keys(M).reduce(
    (N, g) => N + (M[g] ? kI(I, g) : ""),
    ""
  ) : "";
}
function dN(I) {
  return (M, N) => (M && typeof M != "string" && (N = M, M = ""), M = M ? `${I}__${M}` : I, `${M}${kI(M, N)}`);
}
function X(I) {
  const M = `van-${I}`;
  return [
    M,
    dN(M),
    aN(M)
  ];
}
const SN = "van-hairline", EN = `${SN}--surround`, ON = Symbol("van-form");
function f(I) {
  return I.install = (M) => {
    const { name: N } = I;
    N && (M.component(N, I), M.component(nM(`-${N}`), I));
  }, I;
}
function dM(I) {
  const M = OI();
  M && MI(M.proxy, I);
}
const SM = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
function oN({
  to: I,
  url: M,
  replace: N,
  $router: g
}) {
  I && g ? g[N ? "replace" : "push"](I) : M && (N ? location.replace(M) : location.href = M);
}
function EM() {
  const I = OI().proxy;
  return () => oN(I);
}
const [QN, KI] = X("badge"), YN = {
  dot: Boolean,
  max: s,
  tag: Y("div"),
  color: String,
  offset: Array,
  content: s,
  showZero: UI,
  position: Y("top-right")
};
var BN = U({
  name: QN,
  props: YN,
  setup(I, {
    slots: M
  }) {
    const N = () => {
      if (M.content)
        return !0;
      const {
        content: A,
        showZero: u
      } = I;
      return m(A) && A !== "" && (u || A !== 0 && A !== "0");
    }, g = () => {
      const {
        dot: A,
        max: u,
        content: c
      } = I;
      if (!A && N())
        return M.content ? M.content() : m(u) && tM(c) && +c > +u ? `${u}+` : c;
    }, j = (A) => A.startsWith("-") ? A.replace("-", "") : `-${A}`, i = Q(() => {
      const A = {
        background: I.color
      };
      if (I.offset) {
        const [u, c] = I.offset, {
          position: T
        } = I, [y, L] = T.split("-");
        M.default ? (typeof c == "number" ? A[y] = r(y === "top" ? c : -c) : A[y] = y === "top" ? r(c) : j(c), typeof u == "number" ? A[L] = r(L === "left" ? u : -u) : A[L] = L === "left" ? r(u) : j(u)) : (A.marginTop = r(c), A.marginLeft = r(u));
      }
      return A;
    }), C = () => {
      if (N() || I.dot)
        return e("div", {
          class: KI([I.position, {
            dot: I.dot,
            fixed: !!M.default
          }]),
          style: i.value
        }, [g()]);
    };
    return () => {
      if (M.default) {
        const {
          tag: A
        } = I;
        return e(A, {
          class: KI("wrapper")
        }, {
          default: () => [M.default(), C()]
        });
      }
      return C();
    };
  }
});
const sN = f(BN), ZN = (I) => {
}, [OM, kN] = X("config-provider"), oM = Symbol(OM), xN = {
  tag: Y("div"),
  theme: Y("light"),
  zIndex: Number,
  themeVars: Object,
  themeVarsDark: Object,
  themeVarsLight: Object,
  iconPrefix: String
};
function mN(I) {
  const M = {};
  return Object.keys(I).forEach((N) => {
    M[`--van-${tN(N)}`] = I[N];
  }), M;
}
U({
  name: OM,
  props: xN,
  setup(I, {
    slots: M
  }) {
    const N = Q(() => mN(MI({}, I.themeVars, I.theme === "dark" ? I.themeVarsDark : I.themeVarsLight)));
    if (yM) {
      const g = () => {
        document.documentElement.classList.add(`van-theme-${I.theme}`);
      }, j = (i = I.theme) => {
        document.documentElement.classList.remove(`van-theme-${i}`);
      };
      II(() => I.theme, (i, C) => {
        C && j(C), g();
      }, {
        immediate: !0
      }), AM(g), uM(j), VM(j);
    }
    return TM(oM, I), pM(() => {
      I.zIndex !== void 0 && ZN(I.zIndex);
    }), () => e(I.tag, {
      class: kN(),
      style: N.value
    }, {
      default: () => {
        var g;
        return [(g = M.default) == null ? void 0 : g.call(M)];
      }
    });
  }
});
const [UN, qI] = X("icon"), rN = (I) => I == null ? void 0 : I.includes("/"), bN = {
  dot: Boolean,
  tag: Y("i"),
  name: String,
  size: s,
  badge: s,
  color: String,
  badgeProps: Object,
  classPrefix: String
};
var GN = U({
  name: UN,
  props: bN,
  setup(I, {
    slots: M
  }) {
    const N = xI(oM, null), g = Q(() => I.classPrefix || (N == null ? void 0 : N.iconPrefix) || qI());
    return () => {
      const {
        tag: j,
        dot: i,
        name: C,
        size: A,
        badge: u,
        color: c
      } = I, T = rN(C);
      return e(sN, TI({
        dot: i,
        tag: j,
        class: [g.value, T ? "" : `${g.value}-${C}`],
        style: {
          color: c,
          fontSize: r(A)
        },
        content: u
      }, I.badgeProps), {
        default: () => {
          var y;
          return [(y = M.default) == null ? void 0 : y.call(M), T && e("img", {
            class: qI("image"),
            src: C
          }, null)];
        }
      });
    };
  }
});
const J = f(GN), [WN, iI] = X("loading"), vN = Array(12).fill(null).map((I, M) => e("i", {
  class: iI("line", String(M + 1))
}, null)), PN = e("svg", {
  class: iI("circular"),
  viewBox: "25 25 50 50"
}, [e("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
}, null)]), RN = {
  size: s,
  type: Y("circular"),
  color: String,
  vertical: Boolean,
  textSize: s,
  textColor: String
};
var hN = U({
  name: WN,
  props: RN,
  setup(I, {
    slots: M
  }) {
    const N = Q(() => MI({
      color: I.color
    }, CN(I.size))), g = () => {
      const i = I.type === "spinner" ? vN : PN;
      return e("span", {
        class: iI("spinner", I.type),
        style: N.value
      }, [M.icon ? M.icon() : i]);
    }, j = () => {
      var i;
      if (M.default)
        return e("span", {
          class: iI("text"),
          style: {
            fontSize: r(I.textSize),
            color: (i = I.textColor) != null ? i : I.color
          }
        }, [M.default()]);
    };
    return () => {
      const {
        type: i,
        vertical: C
      } = I;
      return e("div", {
        class: iI([i, {
          vertical: C
        }]),
        "aria-live": "polite",
        "aria-busy": !0
      }, [g(), j()]);
    };
  }
});
const GI = f(hN), [XN, _] = X("button"), fN = MI({}, SM, {
  tag: Y("button"),
  text: String,
  icon: String,
  type: Y("default"),
  size: Y("normal"),
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: Y("button"),
  loadingSize: s,
  loadingText: String,
  loadingType: String,
  iconPosition: Y("left")
});
var VN = U({
  name: XN,
  props: fN,
  emits: ["click"],
  setup(I, {
    emit: M,
    slots: N
  }) {
    const g = EM(), j = () => N.loading ? N.loading() : e(GI, {
      size: I.loadingSize,
      type: I.loadingType,
      class: _("loading")
    }, null), i = () => {
      if (I.loading)
        return j();
      if (N.icon)
        return e("div", {
          class: _("icon")
        }, [N.icon()]);
      if (I.icon)
        return e(J, {
          name: I.icon,
          class: _("icon"),
          classPrefix: I.iconPrefix
        }, null);
    }, C = () => {
      let c;
      if (I.loading ? c = I.loadingText : c = N.default ? N.default() : I.text, c)
        return e("span", {
          class: _("text")
        }, [c]);
    }, A = () => {
      const {
        color: c,
        plain: T
      } = I;
      if (c) {
        const y = {
          color: T ? c : "white"
        };
        return T || (y.background = c), c.includes("gradient") ? y.border = 0 : y.borderColor = c, y;
      }
    }, u = (c) => {
      I.loading ? EI(c) : I.disabled || (M("click", c), g());
    };
    return () => {
      const {
        tag: c,
        type: T,
        size: y,
        block: L,
        round: n,
        plain: E,
        square: o,
        loading: Z,
        disabled: k,
        hairline: F,
        nativeType: v,
        iconPosition: t
      } = I, a = [_([T, y, {
        plain: E,
        block: L,
        round: n,
        square: o,
        loading: Z,
        disabled: k,
        hairline: F
      }]), {
        [EN]: F
      }];
      return e(c, {
        type: v,
        class: a,
        style: A(),
        disabled: k,
        onClick: u
      }, {
        default: () => [e("div", {
          class: _("content")
        }, [t === "left" && i(), C(), t === "right" && i()])]
      });
    };
  }
});
const pN = f(VN);
function HN(I, M) {
  return I > M ? "horizontal" : M > I ? "vertical" : "";
}
function JN() {
  const I = z(0), M = z(0), N = z(0), g = z(0), j = z(0), i = z(0), C = z(""), A = () => C.value === "vertical", u = () => C.value === "horizontal", c = () => {
    N.value = 0, g.value = 0, j.value = 0, i.value = 0, C.value = "";
  };
  return {
    move: (L) => {
      const n = L.touches[0];
      N.value = (n.clientX < 0 ? 0 : n.clientX) - I.value, g.value = n.clientY - M.value, j.value = Math.abs(N.value), i.value = Math.abs(g.value);
      const E = 10;
      (!C.value || j.value < E && i.value < E) && (C.value = HN(j.value, i.value));
    },
    start: (L) => {
      c(), I.value = L.touches[0].clientX, M.value = L.touches[0].clientY;
    },
    reset: c,
    startX: I,
    startY: M,
    deltaX: N,
    deltaY: g,
    offsetX: j,
    offsetY: i,
    direction: C,
    isVertical: A,
    isHorizontal: u
  };
}
let FN = 0;
function _N() {
  const I = OI(), { name: M = "unknown" } = (I == null ? void 0 : I.type) || {};
  return process.env.NODE_ENV === "test" ? M : `${M}-${++FN}`;
}
const $N = Symbol(), KN = () => xI($N, null), [qN, $] = X("cell"), QM = {
  tag: Y("div"),
  icon: String,
  size: String,
  title: s,
  value: s,
  label: s,
  center: Boolean,
  isLink: Boolean,
  border: UI,
  required: Boolean,
  iconPrefix: String,
  valueClass: yI,
  labelClass: yI,
  titleClass: yI,
  titleStyle: null,
  arrowDirection: String,
  clickable: {
    type: Boolean,
    default: null
  }
}, Ig = MI({}, QM, SM);
var Mg = U({
  name: qN,
  props: Ig,
  setup(I, {
    slots: M
  }) {
    const N = EM(), g = () => {
      if (M.label || m(I.label))
        return e("div", {
          class: [$("label"), I.labelClass]
        }, [M.label ? M.label() : I.label]);
    }, j = () => {
      var u;
      if (M.title || m(I.title)) {
        const c = (u = M.title) == null ? void 0 : u.call(M);
        return Array.isArray(c) && c.length === 0 ? void 0 : e("div", {
          class: [$("title"), I.titleClass],
          style: I.titleStyle
        }, [c || e("span", null, [I.title]), g()]);
      }
    }, i = () => {
      const u = M.value || M.default;
      if (u || m(I.value))
        return e("div", {
          class: [$("value"), I.valueClass]
        }, [u ? u() : e("span", null, [I.value])]);
    }, C = () => {
      if (M.icon)
        return M.icon();
      if (I.icon)
        return e(J, {
          name: I.icon,
          class: $("left-icon"),
          classPrefix: I.iconPrefix
        }, null);
    }, A = () => {
      if (M["right-icon"])
        return M["right-icon"]();
      if (I.isLink) {
        const u = I.arrowDirection && I.arrowDirection !== "right" ? `arrow-${I.arrowDirection}` : "arrow";
        return e(J, {
          name: u,
          class: $("right-icon")
        }, null);
      }
    };
    return () => {
      var u;
      const {
        tag: c,
        size: T,
        center: y,
        border: L,
        isLink: n,
        required: E
      } = I, o = (u = I.clickable) != null ? u : n, Z = {
        center: y,
        required: E,
        clickable: o,
        borderless: !L
      };
      return T && (Z[T] = !!T), e(c, {
        class: $(Z),
        role: o ? "button" : void 0,
        tabindex: o ? 0 : void 0,
        onClick: N
      }, {
        default: () => {
          var k;
          return [C(), j(), i(), A(), (k = M.extra) == null ? void 0 : k.call(M)];
        }
      });
    };
  }
});
const Ng = f(Mg);
function YM(I) {
  return Array.isArray(I) ? !I.length : I === 0 ? !1 : !I;
}
function gg(I, M) {
  if (YM(I)) {
    if (M.required)
      return !1;
    if (M.validateEmpty === !1)
      return !0;
  }
  return !(M.pattern && !M.pattern.test(String(I)));
}
function Dg(I, M) {
  return new Promise((N) => {
    const g = M.validator(I, M);
    if (_M(g)) {
      g.then(N);
      return;
    }
    N(g);
  });
}
function IM(I, M) {
  const { message: N } = M;
  return SI(N) ? N(I, M) : N || "";
}
function jg({ target: I }) {
  I.composing = !0;
}
function MM({ target: I }) {
  I.composing && (I.composing = !1, I.dispatchEvent(new Event("input")));
}
function ig(I, M) {
  const N = wM();
  I.style.height = "auto";
  let g = I.scrollHeight;
  if (QI(M)) {
    const { maxHeight: j, minHeight: i } = M;
    j !== void 0 && (g = Math.min(g, j)), i !== void 0 && (g = Math.max(g, i));
  }
  g && (I.style.height = `${g}px`, zM(N));
}
function ug(I) {
  return I === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : I === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: I };
}
function P(I) {
  return [...I].length;
}
function sI(I, M) {
  return [...I].slice(0, M).join("");
}
const [Ag, b] = X("field"), Tg = {
  id: String,
  name: String,
  leftIcon: String,
  rightIcon: String,
  autofocus: Boolean,
  clearable: Boolean,
  maxlength: s,
  formatter: Function,
  clearIcon: Y("clear"),
  modelValue: jI(""),
  inputAlign: String,
  placeholder: String,
  autocomplete: String,
  errorMessage: String,
  enterkeyhint: String,
  clearTrigger: Y("focus"),
  formatTrigger: Y("onChange"),
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
}, cg = MI({}, QM, Tg, {
  rows: s,
  type: Y("text"),
  rules: Array,
  autosize: [Boolean, Object],
  labelWidth: s,
  labelClass: yI,
  labelAlign: String,
  showWordLimit: Boolean,
  errorMessageAlign: String,
  colon: {
    type: Boolean,
    default: null
  }
});
var Cg = U({
  name: Ag,
  props: cg,
  emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
  setup(I, {
    emit: M,
    slots: N
  }) {
    const g = _N(), j = mI({
      status: "unvalidated",
      focused: !1,
      validateMessage: ""
    }), i = z(), C = z(), A = z(), {
      parent: u
    } = qM(ON), c = () => {
      var D;
      return String((D = I.modelValue) != null ? D : "");
    }, T = (D) => {
      if (m(I[D]))
        return I[D];
      if (u && m(u.props[D]))
        return u.props[D];
    }, y = Q(() => {
      const D = T("readonly");
      if (I.clearable && !D) {
        const w = c() !== "", l = I.clearTrigger === "always" || I.clearTrigger === "focus" && j.focused;
        return w && l;
      }
      return !1;
    }), L = Q(() => A.value && N.input ? A.value() : I.modelValue), n = (D) => D.reduce((w, l) => w.then(() => {
      if (j.status === "failed")
        return;
      let {
        value: S
      } = L;
      if (l.formatter && (S = l.formatter(S, l)), !gg(S, l)) {
        j.status = "failed", j.validateMessage = IM(S, l);
        return;
      }
      if (l.validator)
        return YM(S) && l.validateEmpty === !1 ? void 0 : Dg(S, l).then((O) => {
          O && typeof O == "string" ? (j.status = "failed", j.validateMessage = O) : O === !1 && (j.status = "failed", j.validateMessage = IM(S, l));
        });
    }), Promise.resolve()), E = () => {
      j.status = "unvalidated", j.validateMessage = "";
    }, o = () => M("endValidate", {
      status: j.status,
      message: j.validateMessage
    }), Z = (D = I.rules) => new Promise((w) => {
      E(), D ? (M("startValidate"), n(D).then(() => {
        j.status === "failed" ? (w({
          name: I.name,
          message: j.validateMessage
        }), o()) : (j.status = "passed", w(), o());
      })) : w();
    }), k = (D) => {
      if (u && I.rules) {
        const {
          validateTrigger: w
        } = u.props, l = VI(w).includes(D), S = I.rules.filter((O) => O.trigger ? VI(O.trigger).includes(D) : l);
        S.length && Z(S);
      }
    }, F = (D) => {
      var w;
      const {
        maxlength: l
      } = I;
      if (m(l) && P(D) > +l) {
        const S = c();
        if (S && P(S) === +l)
          return S;
        const O = (w = i.value) == null ? void 0 : w.selectionEnd;
        if (j.focused && O) {
          const x = [...D], W = x.length - +l;
          return x.splice(O - W, W), x.join("");
        }
        return sI(D, +l);
      }
      return D;
    }, v = (D, w = "onChange") => {
      const l = D;
      D = F(D);
      const S = P(l) - P(D);
      if (I.type === "number" || I.type === "digit") {
        const x = I.type === "number";
        D = yN(D, x, x);
      }
      let O = 0;
      if (I.formatter && w === I.formatTrigger) {
        const {
          formatter: x,
          maxlength: W
        } = I;
        if (D = x(D), m(W) && P(D) > +W && (D = sI(D, +W)), i.value && j.focused) {
          const {
            selectionEnd: CI
          } = i.value, XI = sI(l, CI);
          O = P(x(XI)) - P(XI);
        }
      }
      if (i.value && i.value.value !== D)
        if (j.focused) {
          let {
            selectionStart: x,
            selectionEnd: W
          } = i.value;
          if (i.value.value = D, m(x) && m(W)) {
            const CI = P(D);
            S ? (x -= S, W -= S) : O && (x += O, W += O), i.value.setSelectionRange(Math.min(x, CI), Math.min(W, CI));
          }
        } else
          i.value.value = D;
      D !== I.modelValue && M("update:modelValue", D);
    }, t = (D) => {
      D.target.composing || v(D.target.value);
    }, a = () => {
      var D;
      return (D = i.value) == null ? void 0 : D.blur();
    }, V = () => {
      var D;
      return (D = i.value) == null ? void 0 : D.focus();
    }, cI = () => {
      const D = i.value;
      I.type === "textarea" && I.autosize && D && ig(D, I.autosize);
    }, sM = (D) => {
      j.focused = !0, M("focus", D), p(cI), T("readonly") && a();
    }, ZM = (D) => {
      j.focused = !1, v(c(), "onBlur"), M("blur", D), !T("readonly") && (k("onBlur"), p(cI), AN());
    }, PI = (D) => M("clickInput", D), kM = (D) => M("clickLeftIcon", D), xM = (D) => M("clickRightIcon", D), mM = (D) => {
      EI(D), M("update:modelValue", ""), M("clear", D);
    }, RI = Q(() => {
      if (typeof I.error == "boolean")
        return I.error;
      if (u && u.props.showError && j.status === "failed")
        return !0;
    }), UM = Q(() => {
      const D = T("labelWidth"), w = T("labelAlign");
      if (D && w !== "top")
        return {
          width: r(D)
        };
    }), rM = (D) => {
      D.keyCode === 13 && (!(u && u.props.submitOnEnter) && I.type !== "textarea" && EI(D), I.type === "search" && a()), M("keypress", D);
    }, hI = () => I.id || `${g}-input`, bM = () => j.status, GM = () => {
      const D = b("control", [T("inputAlign"), {
        error: RI.value,
        custom: !!N.input,
        "min-height": I.type === "textarea" && !I.autosize
      }]);
      if (N.input)
        return e("div", {
          class: D,
          onClick: PI
        }, [N.input()]);
      const w = {
        id: hI(),
        ref: i,
        name: I.name,
        rows: I.rows !== void 0 ? +I.rows : void 0,
        class: D,
        disabled: T("disabled"),
        readonly: T("readonly"),
        autofocus: I.autofocus,
        placeholder: I.placeholder,
        autocomplete: I.autocomplete,
        enterkeyhint: I.enterkeyhint,
        "aria-labelledby": I.label ? `${g}-label` : void 0,
        onBlur: ZM,
        onFocus: sM,
        onInput: t,
        onClick: PI,
        onChange: MM,
        onKeypress: rM,
        onCompositionend: MM,
        onCompositionstart: jg
      };
      return I.type === "textarea" ? e("textarea", w, null) : e("input", TI(ug(I.type), w), null);
    }, WM = () => {
      const D = N["left-icon"];
      if (I.leftIcon || D)
        return e("div", {
          class: b("left-icon"),
          onClick: kM
        }, [D ? D() : e(J, {
          name: I.leftIcon,
          classPrefix: I.iconPrefix
        }, null)]);
    }, vM = () => {
      const D = N["right-icon"];
      if (I.rightIcon || D)
        return e("div", {
          class: b("right-icon"),
          onClick: xM
        }, [D ? D() : e(J, {
          name: I.rightIcon,
          classPrefix: I.iconPrefix
        }, null)]);
    }, PM = () => {
      if (I.showWordLimit && I.maxlength) {
        const D = P(c());
        return e("div", {
          class: b("word-limit")
        }, [e("span", {
          class: b("word-num")
        }, [D]), cM("/"), I.maxlength]);
      }
    }, RM = () => {
      if (u && u.props.showErrorMessage === !1)
        return;
      const D = I.errorMessage || j.validateMessage;
      if (D) {
        const w = N["error-message"], l = T("errorMessageAlign");
        return e("div", {
          class: b("error-message", l)
        }, [w ? w({
          message: D
        }) : D]);
      }
    }, hM = () => {
      const D = T("labelWidth"), w = T("labelAlign"), l = T("colon") ? ":" : "";
      if (N.label)
        return [N.label(), l];
      if (I.label)
        return e("label", {
          id: `${g}-label`,
          for: hI(),
          style: w === "top" && D ? {
            width: r(D)
          } : void 0
        }, [I.label + l]);
    }, XM = () => [e("div", {
      class: b("body")
    }, [GM(), y.value && e(J, {
      ref: C,
      name: I.clearIcon,
      class: b("clear")
    }, null), vM(), N.button && e("div", {
      class: b("button")
    }, [N.button()])]), PM(), RM()];
    return dM({
      blur: a,
      focus: V,
      validate: Z,
      formValue: L,
      resetValidation: E,
      getValidationStatus: bM
    }), TM(jN, {
      customValue: A,
      resetValidation: E,
      validateWithTrigger: k
    }), II(() => I.modelValue, () => {
      v(c()), E(), k("onChange"), p(cI);
    }), oI(() => {
      v(c(), I.formatTrigger), p(cI);
    }), bI("touchstart", mM, {
      target: Q(() => {
        var D;
        return (D = C.value) == null ? void 0 : D.$el;
      })
    }), () => {
      const D = T("disabled"), w = T("labelAlign"), l = WM(), S = () => {
        const O = hM();
        return w === "top" ? [l, O].filter(Boolean) : O || [];
      };
      return e(Ng, {
        size: I.size,
        class: b({
          error: RI.value,
          disabled: D,
          [`label-${w}`]: w
        }),
        center: I.center,
        border: I.border,
        isLink: I.isLink,
        clickable: I.clickable,
        titleStyle: UM.value,
        valueClass: b("value"),
        titleClass: [b("label", [w, {
          required: I.required
        }]), I.labelClass],
        arrowDirection: I.arrowDirection
      }, {
        icon: l && w !== "top" ? () => l : null,
        title: S,
        value: XM,
        extra: N.extra
      });
    };
  }
});
const eg = f(Cg), [tg, K, yg] = X("list"), Lg = {
  error: Boolean,
  offset: jI(300),
  loading: Boolean,
  disabled: Boolean,
  finished: Boolean,
  errorText: String,
  direction: Y("down"),
  loadingText: String,
  finishedText: String,
  immediateCheck: UI
};
var lg = U({
  name: tg,
  props: Lg,
  emits: ["load", "update:error", "update:loading"],
  setup(I, {
    emit: M,
    slots: N
  }) {
    const g = z(I.loading), j = z(), i = z(), C = KN(), A = lM(j), u = () => {
      p(() => {
        if (g.value || I.finished || I.disabled || I.error || // skip check when inside an inactive tab
        (C == null ? void 0 : C.value) === !1)
          return;
        const {
          direction: n
        } = I, E = +I.offset, o = HI(A);
        if (!o.height || cN(j))
          return;
        let Z = !1;
        const k = HI(i);
        n === "up" ? Z = o.top - k.top <= E : Z = k.bottom - o.bottom <= E, Z && (g.value = !0, M("update:loading", !0), M("load"));
      });
    }, c = () => {
      if (I.finished) {
        const n = N.finished ? N.finished() : I.finishedText;
        if (n)
          return e("div", {
            class: K("finished-text")
          }, [n]);
      }
    }, T = () => {
      M("update:error", !1), u();
    }, y = () => {
      if (I.error) {
        const n = N.error ? N.error() : I.errorText;
        if (n)
          return e("div", {
            role: "button",
            class: K("error-text"),
            tabindex: 0,
            onClick: T
          }, [n]);
      }
    }, L = () => {
      if (g.value && !I.finished && !I.disabled)
        return e("div", {
          class: K("loading")
        }, [N.loading ? N.loading() : e(GI, {
          class: K("loading-icon")
        }, {
          default: () => [I.loadingText || yg("loading")]
        })]);
    };
    return II(() => [I.loading, I.finished, I.error], u), C && II(C, (n) => {
      n && u();
    }), HM(() => {
      g.value = I.loading;
    }), oI(() => {
      I.immediateCheck && u();
    }), dM({
      check: u
    }), bI("scroll", u, {
      target: A,
      passive: !0
    }), () => {
      var n;
      const E = (n = N.default) == null ? void 0 : n.call(N), o = e("div", {
        ref: i,
        class: K("placeholder")
      }, null);
      return e("div", {
        ref: j,
        role: "feed",
        class: K(),
        "aria-busy": g.value
      }, [I.direction === "down" ? E : o, L(), c(), y(), I.direction === "up" ? E : o]);
    };
  }
});
const wg = f(lg), [zg, gI, ng] = X("pull-refresh"), BM = 50, ag = ["pulling", "loosing", "success"], dg = {
  disabled: Boolean,
  modelValue: Boolean,
  headHeight: jI(BM),
  successText: String,
  pullingText: String,
  loosingText: String,
  loadingText: String,
  pullDistance: s,
  successDuration: jI(500),
  animationDuration: jI(300)
};
var Sg = U({
  name: zg,
  props: dg,
  emits: ["change", "refresh", "update:modelValue"],
  setup(I, {
    emit: M,
    slots: N
  }) {
    let g;
    const j = z(), i = z(), C = lM(j), A = mI({
      status: "normal",
      distance: 0,
      duration: 0
    }), u = JN(), c = () => {
      if (I.headHeight !== BM)
        return {
          height: `${I.headHeight}px`
        };
    }, T = () => A.status !== "loading" && A.status !== "success" && !I.disabled, y = (t) => {
      const a = +(I.pullDistance || I.headHeight);
      return t > a && (t < a * 2 ? t = a + (t - a) / 2 : t = a * 1.5 + (t - a * 2) / 4), Math.round(t);
    }, L = (t, a) => {
      const V = +(I.pullDistance || I.headHeight);
      A.distance = t, a ? A.status = "loading" : t === 0 ? A.status = "normal" : t < V ? A.status = "pulling" : A.status = "loosing", M("change", {
        status: A.status,
        distance: t
      });
    }, n = () => {
      const {
        status: t
      } = A;
      return t === "normal" ? "" : I[`${t}Text`] || ng(t);
    }, E = () => {
      const {
        status: t,
        distance: a
      } = A;
      if (N[t])
        return N[t]({
          distance: a
        });
      const V = [];
      return ag.includes(t) && V.push(e("div", {
        class: gI("text")
      }, [n()])), t === "loading" && V.push(e(GI, {
        class: gI("loading")
      }, {
        default: n
      })), V;
    }, o = () => {
      A.status = "success", setTimeout(() => {
        L(0);
      }, +I.successDuration);
    }, Z = (t) => {
      g = iN(C.value) === 0, g && (A.duration = 0, u.start(t));
    }, k = (t) => {
      T() && Z(t);
    }, F = (t) => {
      if (T()) {
        g || Z(t);
        const {
          deltaY: a
        } = u;
        u.move(t), g && a.value >= 0 && u.isVertical() && (EI(t), L(y(a.value)));
      }
    }, v = () => {
      g && u.deltaY.value && T() && (A.duration = +I.animationDuration, A.status === "loosing" ? (L(+I.headHeight, !0), M("update:modelValue", !0), p(() => M("refresh"))) : L(0));
    };
    return II(() => I.modelValue, (t) => {
      A.duration = +I.animationDuration, t ? L(+I.headHeight, !0) : N.success || I.successText ? o() : L(0, !1);
    }), bI("touchmove", F, {
      target: i
    }), () => {
      var t;
      const a = {
        transitionDuration: `${A.duration}ms`,
        transform: A.distance ? `translate3d(0,${A.distance}px, 0)` : ""
      };
      return e("div", {
        ref: j,
        class: gI()
      }, [e("div", {
        ref: i,
        class: gI("track"),
        style: a,
        onTouchstartPassive: k,
        onTouchend: v,
        onTouchcancel: v
      }, [e("div", {
        class: gI("head"),
        style: c()
      }, [E()]), (t = N.default) == null ? void 0 : t.call(N)])]);
    };
  }
});
const Eg = f(Sg);
const NI = (I, M) => {
  const N = I.__vccOpts || I;
  for (const [g, j] of M)
    N[g] = j;
  return N;
}, WI = U({
  name: "KvButton",
  components: { VanButton: pN },
  props: {
    type: {
      type: String,
      default: "default",
      validate: (I) => ["primary", "success", "warning", "danger", "text"].includes(I)
    },
    link: {
      type: Boolean,
      default: !1
    }
  },
  setup(I) {
    return { textcolor: Q(() => `var(--van-button-${I.type}-background)`) };
  }
}), NM = () => {
  CM((I) => ({
    "094aed15": I.textcolor
  }));
}, gM = WI.setup;
WI.setup = gM ? (I, M) => (NM(), gM(I, M)) : NM;
const Og = WI;
function og(I, M, N, g, j, i) {
  const C = H("van-button");
  return d(), q(C, TI({
    type: I.type,
    class: { "is-link": I.link }
  }, I.$attrs), JM({
    loading: R(() => [
      h(I.$slots, "loading", {}, void 0, !0)
    ]),
    default: R(() => [
      h(I.$slots, "default", {}, void 0, !0)
    ]),
    _: 2
  }, [
    I.$attrs.icon ? void 0 : {
      name: "icon",
      fn: R(() => [
        h(I.$slots, "icon", {}, void 0, !0)
      ]),
      key: "0"
    }
  ]), 1040, ["type", "class"]);
}
const LI = /* @__PURE__ */ NI(Og, [["render", og], ["__scopeId", "data-v-36fadbb1"]]);
LI.install = function(I) {
  I.component(LI.name, LI);
};
const Qg = U({
  name: "KvInput",
  components: { VanField: eg },
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
  setup(I, { emit: M }) {
    return {
      inputValue: Q({
        get: () => I.modelValue,
        set: (j) => M("update:modelValue", j)
      }),
      formatter: (j) => {
        if (I.type !== "number")
          return j;
        let i = j;
        i.substr(0, 1) === "0" && i.length === 2 && !i.includes(".") && (i = i.substr(1, i.length));
        const C = new RegExp(`[^0-9]{0,1}(\\d*(?:\\.\\d{0,${I.point}})?).*$`, "g");
        return i = i.replace(C, "$1") ?? "", Number(i) < I.min ? I.min : Number(i) > I.max ? I.max : i;
      }
    };
  }
}), Yg = { class: "flex-center k-input" };
function Bg(I, M, N, g, j, i) {
  const C = H("van-field");
  return d(), B("div", Yg, [
    G("span", null, AI(I.prefix), 1),
    e(C, TI({
      modelValue: I.inputValue,
      "onUpdate:modelValue": M[0] || (M[0] = (A) => I.inputValue = A),
      type: I.type
    }, I.$attrs, { formatter: I.formatter }), null, 16, ["modelValue", "type", "formatter"]),
    G("span", null, AI(I.suffix), 1)
  ]);
}
const lI = /* @__PURE__ */ NI(Qg, [["render", Bg]]);
lI.install = function(I) {
  I.component(lI.name, lI);
};
const sg = U({
  name: "KvTable",
  props: {
    align: {
      // 对齐方式
      type: String,
      default: "left",
      validate: (I) => ["left", "center", "right"].includes(I)
    },
    columns: { type: Array, default: () => [] },
    data: { type: Array, default: () => [] },
    headerStyle: { type: Object, default: () => ({}) },
    rowStyle: { type: Object, default: () => ({}) },
    border: { type: Boolean, default: !1 },
    showOverflowTooltip: { type: Boolean, default: !1 }
  },
  emits: ["row-click"],
  setup(I, { emit: M }) {
    return { alignStyle: Q(() => [
      `text-align:${I.align}`,
      I.border ? "border-bottom: 1px solid #ebedf0;" : "",
      I.rowStyle
    ]), clickRow: (j, i) => M("row-click", j, i) };
  }
}), Zg = { class: "k-table bg-white mt10 p20" }, kg = { class: "table-content" }, xg = { class: "table-body" };
function mg(I, M, N, g, j, i) {
  return d(), B("div", Zg, [
    G("div", kg, [
      G("div", {
        class: "table-header flex",
        style: YI(I.headerStyle)
      }, [
        (d(!0), B(DI, null, tI(I.columns, (C) => (d(), B("div", {
          key: C.prop,
          class: "flex1 table-column",
          style: YI(I.alignStyle)
        }, AI(C.label), 5))), 128))
      ], 4),
      G("div", xg, [
        (d(!0), B(DI, null, tI(I.data, (C, A) => (d(), B("div", {
          key: A,
          class: "flex table-column column-item flex-align-center",
          style: YI(I.alignStyle)
        }, [
          (d(!0), B(DI, null, tI(I.columns, (u) => (d(), B("div", {
            key: u.prop,
            class: eM(["flex1", { "text-overflow": I.showOverflowTooltip }])
          }, [
            h(I.$slots, "default", {}, () => [
              cM(AI(C[u.prop]), 1)
            ], !0)
          ], 2))), 128))
        ], 4))), 128))
      ])
    ])
  ]);
}
const wI = /* @__PURE__ */ NI(sg, [["render", mg], ["__scopeId", "data-v-b0bde3f2"]]);
wI.install = function(I) {
  I.component(wI.name, wI);
};
const vI = U({
  name: "KvTree",
  components: { VanIcon: J },
  props: {
    modelValue: { type: Array, default: () => [] },
    depth: { type: Number, default: 0 },
    props: { type: Object, default: () => ({}) },
    theme: { type: String, default: "#f4364c" },
    select: { type: [String, Number], default: "" }
  },
  emits: ["update:modelValue", "update:select", "click", "change"],
  setup(I, { emit: M }) {
    const N = Q({
      get: () => I.modelValue,
      set: (T) => M("update:modelValue", T)
    }), g = Q(() => ({
      name: "name",
      id: "id",
      child: "child",
      disabled: "disabled",
      ...I.props
    })), j = (T) => (T.forEach((y) => {
      y.showChildren = !1, y[g.value.child] && j(y[g.value.child]);
    }), T), i = z(I.select), C = (T) => {
      T[g.value.disabled] || (T[g.value.child] && T.showChildren || (N.value = j(N.value)), T.showChildren = !T.showChildren, i.value = T[g.value.id], A(T));
    }, A = (T) => {
      M("update:select", T[g.value.id]), M("change", T), M("click", T);
    }, u = (T, y) => T.disabled ? "not-allowed" : T[g.value.id] === i.value ? {
      0: "first-depth c-white",
      1: "second-depth c-white",
      2: "third-depth c-white"
    }[y] : "", c = Q(() => I.theme);
    return {
      list: N,
      clickItem: C,
      clickChild: A,
      getClassName: u,
      themecolor: c,
      deaultProps: g
    };
  }
}), DM = () => {
  CM((I) => ({
    "80a71366": I.themecolor
  }));
}, jM = vI.setup;
vI.setup = jM ? (I, M) => (DM(), jM(I, M)) : DM;
const Ug = vI, rg = { class: "k-tree" }, bg = ["onClick"], Gg = { class: "flex-center flex1 tree-item-content" }, Wg = { class: "mr10" };
function vg(I, M, N, g, j, i) {
  const C = H("van-icon"), A = H("kv-tree");
  return d(), B("div", rg, [
    (d(!0), B(DI, null, tI(I.list, (u) => (d(), B(DI, {
      key: u[I.deaultProps.id]
    }, [
      G("div", {
        class: eM(["tree-item p10 flex-center", I.getClassName(u, I.depth)]),
        onClick: FM((c) => I.clickItem(u, I.depth), ["stop"])
      }, [
        G("div", Gg, [
          G("span", Wg, AI(u[I.deaultProps.name]), 1),
          u[I.deaultProps.child] ? (d(), q(C, {
            key: 0,
            name: u.showChildren ? "arrow-up" : "arrow-down"
          }, null, 8, ["name"])) : dI("", !0)
        ])
      ], 10, bg),
      u.showChildren && u[I.deaultProps.child] ? (d(), q(A, {
        key: 0,
        modelValue: u[I.deaultProps.child],
        "onUpdate:modelValue": (c) => u[I.deaultProps.child] = c,
        props: I.deaultProps,
        theme: I.theme,
        depth: I.depth + 1,
        onClick: I.clickChild
      }, null, 8, ["modelValue", "onUpdate:modelValue", "props", "theme", "depth", "onClick"])) : dI("", !0)
    ], 64))), 128))
  ]);
}
const zI = /* @__PURE__ */ NI(Ug, [["render", vg], ["__scopeId", "data-v-31963786"]]);
zI.install = function(I) {
  I.component(zI.name, zI);
};
const Pg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBoZWlnaHQ9IjEwMjQiIGxlZ2FjeS1tZXRyaWNzPSJmYWxzZSIgbm9kZS1pZD0iMSIgc2lsbHl2Zz0idHJ1ZSIgdGVtcGxhdGUtaGVpZ2h0PSIxMDI0IiB0ZW1wbGF0ZS13aWR0aD0iMTAyNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB3aWR0aD0iMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnMgbm9kZS1pZD0iNzEiPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTEiIG5vZGUtaWQ9IjUiIHgxPSIwLjUiIHgyPSIwLjUiIHkxPSIxLjAwMTIyMjciIHkyPSItMC4wMDA1Nzk4MzI4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZGY1ZjciIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZhZDRkMiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtMiIgbm9kZS1pZD0iOCIgeDE9IjAuNTAwODQzOSIgeDI9IjAuNTAwODQzOSIgeTE9IjEiIHkyPSIwLjAwMDA2NDk0NzM4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4xIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmRlY2ViIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC0zIiBub2RlLWlkPSIxMSIgeDE9IjAuNTAwMDQ1OSIgeDI9IjAuNTAwMDQ1OSIgeTE9IjAuOTk5MzEyIiB5Mj0iLTAuMDAwODExMjc3MzYiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYWQ2ZDQiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTQiIG5vZGUtaWQ9IjE0IiB4MT0iMC41IiB4Mj0iMC41IiB5MT0iMSIgeTI9IjAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuMTMiIHN0b3AtY29sb3I9IiNmZWZjZmIiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuNDEiIHN0b3AtY29sb3I9IiNmZWZjZmIiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuODEiIHN0b3AtY29sb3I9IiNmOWQ4ZDUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmOWQ4ZDUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTUiIG5vZGUtaWQ9IjIwIiB4MT0iMC4zMzc2NDQ5NiIgeDI9IjAuNSIgeTE9IjAuNTY1OTU1OCIgeTI9IjAuNDIzMDc5NyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmM2YyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmUyZTAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTYiIG5vZGUtaWQ9IjIzIiB4MT0iMCIgeDI9IjEiIHkxPSIwLjUiIHkyPSIwLjUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y2OTg5NiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y2NTU1MSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtNyIgbm9kZS1pZD0iMjYiIHgxPSIwLjUiIHgyPSIwLjUiIHkxPSIwLjgxNzAwMjciIHkyPSIwLjI2OTg3NTgyIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmMzZmNmEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmOGEyYTAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTgiIG5vZGUtaWQ9IjI5IiB4MT0iMC41IiB4Mj0iMC41IiB5MT0iMCIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y3ODQ4MyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y3NzY3MSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtOSIgbm9kZS1pZD0iMzIiIHgxPSIwLjUiIHgyPSIwLjU4MDk3ODQiIHkxPSIwLjQ2NTcyNDI2IiB5Mj0iMC41Njc5NTY0NSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjhhMmEwIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjk0ZTQ3Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC0xMCIgbm9kZS1pZD0iMzUiIHgxPSIwLjg5NTYwNzY1IiB4Mj0iMC4xODM1OTc1IiB5MT0iMC40MzU2Mzk4NiIgeTI9IjAuNTY0MzYwMTQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2U5OWI5YSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2YzYzBiZiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtMTEiIG5vZGUtaWQ9IjM4IiB4MT0iMC44MzUzMjU0IiB4Mj0iMC40MDAzNTQyIiB5MT0iMC4wNTc5MjIxMSIgeTI9IjAuODc2NDE1NSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWE5ZDljIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjJiYmJhIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTSAwLjAwIDAuMDAgTCAxMDI0LjAwIDAuMDAgTCAxMDI0LjAwIDEwMjQuMDAgTCAwLjAwIDEwMjQuMDAgWiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBub2RlLWlkPSIxNDciIHN0cm9rZT0ibm9uZSIgdGFyZ2V0LWhlaWdodD0iMTAyNCIgdGFyZ2V0LXdpZHRoPSIxMDI0IiB0YXJnZXQteD0iMCIgdGFyZ2V0LXk9IjAiPjwvcGF0aD48ZyBub2RlLWlkPSIxNDkiPjxwYXRoIGQ9Ik0gMTAxLjM0IDYwNi4wMCBMIDEwNy4wMCA2NjcuMDAgTCA3Mi4wMCA2NjIuOTMgWiIgZmlsbD0iI2ZhZDRkMiIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNDQiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjYxIiB0YXJnZXQtd2lkdGg9IjM1IiB0YXJnZXQteD0iNzIiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDEwMS4wMCA2MDYuMDAgTCAxMzguMDAgNjU0LjIxIEwgMTA2LjY3IDY2Ny4wMCBaIiBmaWxsPSIjZmRjNmMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0NSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNjEiIHRhcmdldC13aWR0aD0iMzciIHRhcmdldC14PSIxMDEiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDE2Ny4yMyAzNDIuMDMgTCAxNjUuOTkgMzM3LjEwIEwgMTY0LjI2IDMzMi41MSBMIDE2Mi4wMiAzMjguMjIgTCAxNTkuMzAgMzI0LjIxIEwgMTU2LjIwIDMyMC42MSBMIDE1Mi43MCAzMTcuMzcgTCAxNDguODUgMzE0LjU2IEwgMTQ0LjcyIDMxMi4yMyBMIDE0MC4yOSAzMTAuMzUgTCAxMzUuNjggMzA5LjAxIEwgMTMwLjg4IDMwOC4yMyBMIDEyNS44NSAzMDguMDEgTCAxMjEuNzkgMzA4LjE4IEwgMTE3Ljg1IDMwOC43MyBMIDExMy45OSAzMDkuNjMgTCAxMTAuMjEgMzEwLjkwIEwgMTA2LjU2IDMxMi41MiBMIDEwMy4xMCAzMTQuNDYgTCA5OS44MSAzMTYuNzMgTCA5Ni42OCAzMTkuMzUgTCA5My4yNCAzMTguMDAgTCA4OS43NCAzMTcuMDQgTCA4Ni4xNiAzMTYuNDYgTCA4Mi40OCAzMTYuMjYgTCA3OC41OCAzMTYuNDQgTCA3NC44NyAzMTcuMDMgTCA3MS4zMiAzMTguMDIgTCA2Ny45MCAzMTkuNDMgTCA2NC42NSAzMjEuMjEgTCA2MS42NyAzMjMuMzEgTCA1OC45MyAzMjUuNzMgTCA1Ni40MyAzMjguNDggTCA1NC4yNSAzMzEuNDkgTCA1Mi40NCAzMzQuNzMgTCA1MC45NyAzMzguMjIgTCA0OS44NiAzNDIuMDAgTCA0NS45NyAzNDMuMTkgTCA0Mi40NCAzNDQuODcgTCAzOS4yMiAzNDcuMDYgTCAzNi4zNSAzNDkuNjkgTCAzMy45MiAzNTIuNjYgTCAzMS45MCAzNTYuMDEgTCAzMC4zOSAzNTkuNjEgTCAyOS40MiAzNjMuNDMgTCAyOS4wMCAzNjcuNTEgTCAyOS4zNyAzNzEuMjQgTCAzMC4xOCAzNzQuNzMgTCAzMS40MyAzNzguMDMgTCAzMy4wOSAzODEuMTQgTCAzNS4wOSAzODMuOTYgTCAzNy40NCAzODYuNTEgTCA0MC4wOSAzODguNzQgTCA0Mi45OCAzOTAuNjEgTCA0Ni4xNSAzOTIuMTEgTCA0OS40OCAzOTMuMTkgTCA1Mi45OCAzOTMuODIgTCA1Ni42OCAzOTMuOTkgTCAxNjAuMzIgMzkzLjk5IEwgMTY0LjAyIDM5My44MiBMIDE2Ny41MiAzOTMuMjAgTCAxNzAuODYgMzkyLjEyIEwgMTc0LjAyIDM5MC42MiBMIDE3Ni45MiAzODguNzUgTCAxNzkuNTcgMzg2LjUyIEwgMTgxLjkyIDM4My45NyBMIDE4My45MiAzODEuMTUgTCAxODUuNTggMzc4LjA0IEwgMTg2LjgyIDM3NC43NCBMIDE4Ny42MyAzNzEuMjQgTCAxODguMDAgMzY3LjUxIEwgMTg3LjU4IDM2My40NCBMIDE4Ni42MiAzNTkuNjMgTCAxODUuMTEgMzU2LjA0IEwgMTgzLjExIDM1Mi42OSBMIDE4MC42OCAzNDkuNzIgTCAxNzcuODIgMzQ3LjA5IEwgMTc0LjYyIDM0NC45MSBMIDE3MS4xMCAzNDMuMjIgTCAxNjcuMjMgMzQyLjAzIEwgMTY3LjIzIDM0Mi4wMyBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0NiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iODUuOTg0OTI0IiB0YXJnZXQtd2lkdGg9IjE1OSIgdGFyZ2V0LXg9IjI5IiB0YXJnZXQteT0iMzA4LjAwNjg0Ij48L3BhdGg+PHBhdGggZD0iTSA3NjguNzEgMjAzLjEwIEwgNzY2Ljc3IDIwMC4zOSBMIDc2NC42MCAxOTcuOTUgTCA3NjIuMTkgMTk1Ljc4IEwgNzU5LjU3IDE5My44OCBMIDc1Ni43OSAxOTIuMjggTCA3NTMuODQgMTkwLjk4IEwgNzUwLjc3IDE5MC4wMCBMIDc0Ny42MCAxODkuMzUgTCA3NDQuMzEgMTg5LjA1IEwgNzQyLjIyIDE4Ni4xOSBMIDczOS44OCAxODMuNjUgTCA3MzcuMjkgMTgxLjQwIEwgNzM0LjQ3IDE3OS40NSBMIDczMS40OCAxNzcuODUgTCA3MjguMzEgMTc2LjU4IEwgNzI1LjAyIDE3NS42NyBMIDcyMS42MyAxNzUuMTUgTCA3MTguMTIgMTc1LjAwIEwgNzEzLjkxIDE3NS4yNSBMIDcwOS44NiAxNzYuMDQgTCA3MDUuOTQgMTc3LjM3IEwgNzAyLjIyIDE3OS4yMSBMIDY5OC43OCAxODEuNTIgTCA2OTUuNjAgMTg0LjM0IEwgNjkyLjgzIDE4My42MCBMIDY5MC4wMiAxODMuMTUgTCA2ODcuMTYgMTgzLjAwIEwgNjgzLjgyIDE4My4yMSBMIDY4MC42OSAxODMuNzYgTCA2NzcuNzQgMTg0LjY0IEwgNjc0Ljk1IDE4NS44NSBMIDY3MS40NiAxODcuOTQgTCA2NjguNDggMTkwLjQ1IEwgNjY1Ljk0IDE5My4zOCBMIDY2NC4zNyAxOTUuODMgTCA2NjMuMTcgMTk4LjQxIEwgNjYyLjMyIDIwMS4xNSBMIDY2MS44MiAyMDQuMDcgTCA2NTguNTMgMjA1LjEzIEwgNjU1LjU0IDIwNi42MSBMIDY1Mi44MCAyMDguNTAgTCA2NTAuMzcgMjEwLjc2IEwgNjQ4LjI5IDIxMy4zMSBMIDY0Ni41NyAyMTYuMTcgTCA2NDUuMjYgMjE5LjI1IEwgNjQ0LjQwIDIyMi41MSBMIDY0NC4wMCAyMjUuOTkgTCA2NDQuMjQgMjI5LjE0IEwgNjQ0LjkxIDIzMi4xMSBMIDY0Ni4wMSAyMzQuOTMgTCA2NDcuNDkgMjM3LjU5IEwgNjQ5LjMwIDI0MC4wMiBMIDY1MS40NiAyNDIuMjUgTCA2NTMuODkgMjQ0LjE5IEwgNjU2LjU3IDI0NS44MyBMIDY1OS41MiAyNDcuMTkgTCA2NjIuNjIgMjQ4LjE3IEwgNjY1Ljg4IDI0OC43OCBMIDY2OS4zNCAyNDkuMDAgTCA3NjYuNjYgMjQ5LjAwIEwgNzcwLjE3IDI0OC43OCBMIDc3My40NiAyNDguMTcgTCA3NzYuNTYgMjQ3LjE5IEwgNzc5LjUxIDI0NS44MyBMIDc4Mi4xOSAyNDQuMTkgTCA3ODQuNjEgMjQyLjI1IEwgNzg2Ljc2IDI0MC4wMiBMIDc4OC41NSAyMzcuNTkgTCA3OTAuMDIgMjM0LjkzIEwgNzkxLjEwIDIzMi4xMSBMIDc5MS43NiAyMjkuMTQgTCA3OTIuMDAgMjI1Ljk5IEwgNzkxLjgyIDIyMi45OCBMIDc5MS4yNSAyMjAuMTUgTCA3OTAuMzEgMjE3LjQ3IEwgNzg4Ljk3IDIxNC45MSBMIDc4Ni42OSAyMTEuODAgTCA3ODMuOTMgMjA5LjEwIEwgNzgwLjYyIDIwNi43NyBMIDc3Ny45MiAyMDUuMzggTCA3NzUuMDYgMjA0LjMwIEwgNzcyLjAwIDIwMy41NCBMIDc2OC43MSAyMDMuMTAgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0yKSIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNDciIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjczLjk5NTE5IiB0YXJnZXQtd2lkdGg9IjE0Ny45OTY0IiB0YXJnZXQteD0iNjQ0IiB0YXJnZXQteT0iMTc1LjAwNDgiPjwvcGF0aD48cGF0aCBkPSJNIDk0OS42MiAxNzEuNzQgTCA5NDcuMDAgMTY2Ljk1IEwgOTQ0LjAzIDE2Mi41NCBMIDk0MC42OSAxNTguNDcgTCA5MzYuOTkgMTU0Ljc0IEwgOTMyLjk1IDE1MS4zNSBMIDkyOC42NyAxNDguMzggTCA5MjQuMTQgMTQ1LjgxIEwgOTE5LjMzIDE0My42NSBMIDkxNC4zNSAxNDEuOTMgTCA5MDkuMjQgMTQwLjY5IEwgOTAzLjk3IDEzOS45MyBMIDg5OC41MSAxMzkuNjQgTCA4OTIuNDYgMTM5Ljk4IEwgODg2LjU2IDE0MC45NSBMIDg4MC43OCAxNDIuNTQgTCA4NzUuMjEgMTQ0LjczIEwgODY5LjkxIDE0Ny40OSBMIDg2NC44NiAxNTAuODUgTCA4NjIuNTEgMTQ2LjcxIEwgODU5Ljg5IDE0Mi44NiBMIDg1Ny4wMSAxMzkuMzAgTCA4NTMuODYgMTM2LjAwIEwgODQ5LjI3IDEzMi4wMSBMIDg0NC4zNSAxMjguNTcgTCA4MzkuMDggMTI1LjY3IEwgODMzLjUzIDEyMy4zNCBMIDgyNy43OCAxMjEuNjEgTCA4MjEuODAgMTIwLjQ5IEwgODE3LjI1IDEyMC4wNyBMIDgxMi42NyAxMjAuMDMgTCA4MDguMDMgMTIwLjM2IEwgODAzLjMyIDEyMS4wOCBMIDc5OC42OCAxMjIuMjEgTCA3OTQuMjYgMTIzLjY2IEwgNzkwLjA0IDEyNS40NSBMIDc4Ni4wMCAxMjcuNTcgTCA3ODAuOTAgMTMwLjg4IEwgNzc2LjI0IDEzNC42NyBMIDc3Mi4wMCAxMzguOTMgTCA3NjguMjMgMTQzLjYyIEwgNzY0Ljk5IDE0OC42NyBMIDc2Mi4yNiAxNTQuMTEgTCA3NjAuNjEgMTU4LjM2IEwgNzU5LjMxIDE2Mi43NSBMIDc1OC4zNiAxNjcuMzAgTCA3NTcuNzYgMTcyLjAyIEwgNzUyLjgwIDE3My44NSBMIDc0OC4xNyAxNzYuMDMgTCA3NDMuODMgMTc4LjU4IEwgNzM5Ljc2IDE4MS41MCBMIDczNS45NiAxODQuNzcgTCA3MzIuNTAgMTg4LjMwIEwgNzI5LjM4IDE5Mi4xMSBMIDcyNi41OCAxOTYuMTkgTCA3MjQuMTUgMjAwLjUxIEwgNzIyLjEyIDIwNC45OCBMIDcyMC40NyAyMDkuNjQgTCA3MTkuMjEgMjE0LjUwIEwgNzE4LjM5IDIxOS40MyBMIDcxOC4wMyAyMjQuNDUgTCA3MTguMTEgMjI5LjU3IEwgNzE4LjY2IDIzNC44MSBMIDcxOS43MSAyMzkuOTggTCA3MjEuMTcgMjQ0Ljg5IEwgNzIzLjAyIDI0OS41NiBMIDcyNS4yOSAyNTQuMDIgTCA3MjcuOTQgMjU4LjI4IEwgNzMwLjkxIDI2Mi4yMyBMIDczNC4xOSAyNjUuOTAgTCA3MzcuODEgMjY5LjI4IEwgNzQxLjcwIDI3Mi4zNCBMIDc0NS44MiAyNzUuMDMgTCA3NTAuMTggMjc3LjM3IEwgNzU0LjgwIDI3OS4zNSBMIDc1OS41NSAyODAuOTIgTCA3NjQuNDUgMjgyLjA1IEwgNzY5LjUzIDI4Mi43NCBMIDc3NC44MCAyODMuMDAgTCA5MzMuMDUgMjgzLjAwIEwgOTM4LjM2IDI4Mi43NiBMIDk0My40NiAyODIuMDcgTCA5NDguNDAgMjgwLjk0IEwgOTUzLjE3IDI3OS4zNyBMIDk1Ny44MiAyNzcuMzggTCA5NjIuMjAgMjc1LjA0IEwgOTY2LjMzIDI3Mi4zMyBMIDk3MC4yNSAyNjkuMjUgTCA5NzMuODggMjY1Ljg0IEwgOTc3LjE3IDI2Mi4xNSBMIDk4MC4xNCAyNTguMTcgTCA5ODIuODAgMjUzLjg5IEwgOTg1LjA2IDI0OS40MCBMIDk4Ni45MSAyNDQuNjkgTCA5ODguMzUgMjM5Ljc1IEwgOTg5LjM4IDIzNC41NSBMIDk4OS45MSAyMjkuMjcgTCA5ODkuOTYgMjI0LjEyIEwgOTg5LjU2IDIxOS4wOCBMIDk4OC43MCAyMTQuMTMgTCA5ODcuNDAgMjA5LjI2IEwgOTg1LjcxIDIwNC41OSBMIDk4My42MyAyMDAuMTAgTCA5ODEuMTQgMTk1Ljc5IEwgOTc4LjI5IDE5MS43MSBMIDk3NS4xMiAxODcuOTIgTCA5NzEuNjEgMTg0LjQxIEwgOTY3Ljc0IDE4MS4xNiBMIDk2My42MiAxNzguMjcgTCA5NTkuMjMgMTc1Ljc2IEwgOTU0LjU1IDE3My42MiBMIDk0OS41NCAxNzEuODUgTCA5NDkuNjIgMTcxLjc0IFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjQ4IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxNjIuOTc0OTgiIHRhcmdldC13aWR0aD0iMjcxLjkzNjgzIiB0YXJnZXQteD0iNzE4LjAyNTciIHRhcmdldC15PSIxMjAuMDI1MDIiPjwvcGF0aD48ZyBub2RlLWlkPSIxNTIiPjxwYXRoIGQ9Ik0gMTAyNC4wMCA3NDIuMDAgTCAxMDIzLjcyIDc0Ny4yNiBMIDEwMjIuOTIgNzUyLjQ5IEwgMTAyMS41OCA3NTcuNzQgTCAxMDE5LjY4IDc2My4wMiBMIDEwMTcuMTkgNzY4LjM1IEwgMTAxNC4wNyA3NzMuNzUgTCAxMDA5Ljk5IDc3OS42MyBMIDEwMDUuMTIgNzg1LjU4IEwgOTk5LjM5IDc5MS42MiBMIDk5Mi43MiA3OTcuNzYgTCA5ODUuMDMgODAzLjk5IEwgOTc3LjQ0IDgwOS41MCBMIDk2OS4wMCA4MTUuMDQgTCA5NTkuNjYgODIwLjYyIEwgOTQ5LjM0IDgyNi4yNCBMIDkzNy45OCA4MzEuODggTCA5MjQuMTIgODM4LjEzIEwgOTA4LjkxIDg0NC4zNCBMIDg5Mi4yNCA4NTAuNDggTCA4NzQuMDQgODU2LjU1IEwgODU0LjczIDg2Mi4zNSBMIDgzNC4yNSA4NjcuODkgTCA4MTIuNTUgODczLjE1IEwgNzkwLjc2IDg3Ny44OCBMIDc2OC4wMCA4ODIuMzAgTCA3NDQuMjMgODg2LjM4IEwgNzIwLjQxIDg4OS45NyBMIDY5NS44MiA4OTMuMjAgTCA2NzAuNDUgODk2LjA1IEwgNjQ1LjA0IDg5OC40NCBMIDYxOS4wOSA5MDAuNDIgTCA1OTIuNTggOTAxLjk4IEwgNTY2LjA1IDkwMy4xMCBMIDUzOS4xOSA5MDMuNzcgTCA1MTIuMDAgOTA0LjAwIEwgNDg0LjgxIDkwMy43NyBMIDQ1Ny45NSA5MDMuMTAgTCA0MzEuNDIgOTAxLjk4IEwgNDA0LjkxIDkwMC40MiBMIDM3OC45NiA4OTguNDQgTCAzNTMuNTUgODk2LjA1IEwgMzI4LjE4IDg5My4yMCBMIDMwMy41OSA4ODkuOTcgTCAyNzkuNzcgODg2LjM4IEwgMjU2LjAwIDg4Mi4zMCBMIDIzMy4yNCA4NzcuODggTCAyMTEuNDUgODczLjE1IEwgMTg5Ljc1IDg2Ny44OSBMIDE2OS4yNyA4NjIuMzUgTCAxNDkuOTYgODU2LjU1IEwgMTMxLjc2IDg1MC40OCBMIDExNS4wOSA4NDQuMzQgTCA5OS44OCA4MzguMTMgTCA4Ni4wMiA4MzEuODggTCA3NC42NiA4MjYuMjQgTCA2NC4zNCA4MjAuNjIgTCA1NS4wMCA4MTUuMDQgTCA0Ni41NiA4MDkuNTAgTCAzOC45NyA4MDMuOTkgTCAzMS4yOCA3OTcuNzYgTCAyNC42MSA3OTEuNjIgTCAxOC44OCA3ODUuNTggTCAxNC4wMSA3NzkuNjMgTCA5LjkzIDc3My43NSBMIDYuODEgNzY4LjM1IEwgNC4zMiA3NjMuMDIgTCAyLjQyIDc1Ny43NCBMIDEuMDggNzUyLjQ5IEwgMC4yOCA3NDcuMjYgTCAwLjAwIDc0Mi4wMCBMIDAuMjggNzM2Ljc0IEwgMS4wOCA3MzEuNTEgTCAyLjQyIDcyNi4yNiBMIDQuMzIgNzIwLjk4IEwgNi44MSA3MTUuNjUgTCA5LjkzIDcxMC4yNSBMIDE0LjAxIDcwNC4zNyBMIDE4Ljg4IDY5OC40MiBMIDI0LjYxIDY5Mi4zOCBMIDMxLjI4IDY4Ni4yNCBMIDM4Ljk3IDY4MC4wMSBMIDQ2LjU2IDY3NC41MCBMIDU1LjAwIDY2OC45NiBMIDY0LjM0IDY2My4zOCBMIDc0LjY2IDY1Ny43NiBMIDg2LjAyIDY1Mi4xMiBMIDk5Ljg4IDY0NS44NyBMIDExNS4wOSA2MzkuNjYgTCAxMzEuNzYgNjMzLjUyIEwgMTQ5Ljk2IDYyNy40NSBMIDE2OS4yNyA2MjEuNjUgTCAxODkuNzUgNjE2LjExIEwgMjExLjQ1IDYxMC44NSBMIDIzMy4yNCA2MDYuMTIgTCAyNTYuMDAgNjAxLjcwIEwgMjc5Ljc3IDU5Ny42MiBMIDMwMy41OSA1OTQuMDMgTCAzMjguMTggNTkwLjgwIEwgMzUzLjU1IDU4Ny45NSBMIDM3OC45NiA1ODUuNTYgTCA0MDQuOTEgNTgzLjU4IEwgNDMxLjQyIDU4Mi4wMiBMIDQ1Ny45NSA1ODAuOTAgTCA0ODQuODEgNTgwLjIzIEwgNTEyLjAwIDU4MC4wMCBMIDUzOS4xOSA1ODAuMjMgTCA1NjYuMDUgNTgwLjkwIEwgNTkyLjU4IDU4Mi4wMiBMIDYxOS4wOSA1ODMuNTggTCA2NDUuMDQgNTg1LjU2IEwgNjcwLjQ1IDU4Ny45NSBMIDY5NS44MiA1OTAuODAgTCA3MjAuNDEgNTk0LjAzIEwgNzQ0LjIzIDU5Ny42MiBMIDc2OC4wMCA2MDEuNzAgTCA3OTAuNzYgNjA2LjEyIEwgODEyLjU1IDYxMC44NSBMIDgzNC4yNSA2MTYuMTEgTCA4NTQuNzMgNjIxLjY1IEwgODc0LjA0IDYyNy40NSBMIDg5Mi4yNCA2MzMuNTIgTCA5MDguOTEgNjM5LjY2IEwgOTI0LjEyIDY0NS44NyBMIDkzNy45OCA2NTIuMTIgTCA5NDkuMzQgNjU3Ljc2IEwgOTU5LjY2IDY2My4zOCBMIDk2OS4wMCA2NjguOTYgTCA5NzcuNDQgNjc0LjUwIEwgOTg1LjAzIDY4MC4wMSBMIDk5Mi43MiA2ODYuMjQgTCA5OTkuMzkgNjkyLjM4IEwgMTAwNS4xMiA2OTguNDIgTCAxMDA5Ljk5IDcwNC4zNyBMIDEwMTQuMDcgNzEwLjI1IEwgMTAxNy4xOSA3MTUuNjUgTCAxMDE5LjY4IDcyMC45OCBMIDEwMjEuNTggNzI2LjI2IEwgMTAyMi45MiA3MzEuNTEgTCAxMDIzLjcyIDczNi43NCBMIDEwMjQuMDAgNzQyLjAwIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNCkiIGZpbGwtb3BhY2l0eT0iMC40MDc3NDQ2NSIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSw0IiBpZD0i5qSt5ZyG5b2iIiBub2RlLWlkPSI0OSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIwLjQwNzc0NDY1IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjMyNCIgdGFyZ2V0LXdpZHRoPSIxMDI0IiB0YXJnZXQteD0iMCIgdGFyZ2V0LXk9IjU4MCI+PC9wYXRoPjwvZz48cGF0aCBkPSJNIDkwNi4wMCA2MDYuMDAgTCA5MDEuMTMgNjcwLjAwIEwgODY1LjAwIDY1OS41MiBaIiBmaWxsPSIjZmFkNGQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI1MCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNjQiIHRhcmdldC13aWR0aD0iNDEiIHRhcmdldC14PSI4NjUiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDkwNC44NSA2MDYuMDAgTCA5MzUuMDAgNjYyLjM5IEwgOTAwLjAwIDY3MC4wMCBaIiBmaWxsPSIjZmRjNmMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI1MSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNjQiIHRhcmdldC13aWR0aD0iMzUiIHRhcmdldC14PSI5MDAiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDIwMS4zNyA1OTQuMDAgTCAyMDYuMDAgNjQyLjAwIEwgMTc3LjAwIDYzOC44MSBaIiBmaWxsPSIjZjdkOWQ3IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI1MiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNDgiIHRhcmdldC13aWR0aD0iMjkiIHRhcmdldC14PSIxNzciIHRhcmdldC15PSI1OTQiPjwvcGF0aD48cGF0aCBkPSJNIDIwMC4wMCA1OTQuMDAgTCAyMzAuMDAgNjMxLjg5IEwgMjA0LjU1IDY0Mi4wMCBaIiBmaWxsPSIjZmZjY2M4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI1MyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNDgiIHRhcmdldC13aWR0aD0iMzAiIHRhcmdldC14PSIyMDAiIHRhcmdldC15PSI1OTQiPjwvcGF0aD48cGF0aCBkPSJNIDE0OC40OCA1NjQuMDAgTCAxNTguMDAgNjY1LjAwIEwgOTQuMDAgNjU4LjcxIFoiIGZpbGw9IiNmYWQ0ZDIiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjU0IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMDEiIHRhcmdldC13aWR0aD0iNjQiIHRhcmdldC14PSI5NCIgdGFyZ2V0LXk9IjU2NCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTQ3LjAwIDU2NC4wMCBMIDIxNC4wMCA2NDMuMzcgTCAxNTYuNTMgNjY1LjAwIFoiIGZpbGw9IiNmZGM2YzMiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjU1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMDEiIHRhcmdldC13aWR0aD0iNjciIHRhcmdldC14PSIxNDciIHRhcmdldC15PSI1NjQiPjwvcGF0aD48L2c+PHBhdGggZD0iTSA2ODkuMjUgNjY4LjAwIEwgMzQ4LjAwIDY4MC4wMCBMIDIyMS4xNCA4MDQuMDAgTCA0MzEuNDEgODUxLjYxIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9Iui3r+W+hC0yNCIgbm9kZS1pZD0iNTYiIHN0cm9rZT0ibm9uZSIgdGFyZ2V0LWhlaWdodD0iMTgzLjYwNTEiIHRhcmdldC13aWR0aD0iNDY4LjExMTMzIiB0YXJnZXQteD0iMjIxLjEzOTc2IiB0YXJnZXQteT0iNjY4Ij48L3BhdGg+PHBhdGggZD0iTSA2ODkuMjUgNjY1LjAwIEwgNTA2LjUyIDYzNi42NiBMIDUwNi41MiA0NDQuMDAgTCA2ODkuMjUgNDcyLjM0IFoiIGZpbGw9IiNmNjZlNmIiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjIiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjU4IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIyMjEiIHRhcmdldC13aWR0aD0iMTgyLjczMTYzIiB0YXJnZXQteD0iNTA2LjUxOTQ3IiB0YXJnZXQteT0iNDQ0Ij48L3BhdGg+PHBhdGggZD0iTSAzNDYuNzUgNjY3Ljg3IEwgNTA2LjUyIDYzNi42NiBMIDUwNi41MiA0NDQuMDAgTCAzNDYuNzUgNDc0Ljc5IFoiIGZpbGw9IiNmOGE0YTIiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjIiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjU5IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIyMjMuODcwMTIiIHRhcmdldC13aWR0aD0iMTU5Ljc3MDU3IiB0YXJnZXQteD0iMzQ2Ljc0ODkiIHRhcmdldC15PSI0NDQiPjwvcGF0aD48cGF0aCBkPSJNIDUzMS4zOSA2OTUuNjEgTCAzNDUuNzkgNjY3LjI4IEwgMzQ1Ljc5IDQ3NC42MSBMIDUzMC40NCA1MDIuNTEgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC02KSIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMiIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjIyMS4wMDAwMyIgdGFyZ2V0LXdpZHRoPSIxODUuNjAxNzIiIHRhcmdldC14PSIzNDUuNzkyMiIgdGFyZ2V0LXk9IjQ3NC42MTQ3MiI+PC9wYXRoPjxwYXRoIGQ9Ik0gNDc5LjI3IDU0OS4yNCBMIDI5Ny4wMCA1MjAuNzEgTCAzNDYuMjYgNDczLjY2IEwgNTMwLjQ0IDUwMi41MSBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTcpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIyIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI2MSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNzUuNTgwMDgiIHRhcmdldC13aWR0aD0iMjMzLjQzNzI2IiB0YXJnZXQteD0iMjk3IiB0YXJnZXQteT0iNDczLjY1ODAyIj48L3BhdGg+PHBhdGggZD0iTSA1MzAuNDQgNTAyLjUxIEwgNTMwLjQ0IDY5NS42MSBMIDY4OS4yNSA2NjUuMDAgTCA2ODkuMjUgNDcyLjcwIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtOCkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIiIGlkPSLot6/lvoQtNDQiIG5vZGUtaWQ9IjYyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIyMjIuOTEzNDUiIHRhcmdldC13aWR0aD0iMTU4LjgxMzg0IiB0YXJnZXQteD0iNTMwLjQzNzI2IiB0YXJnZXQteT0iNDcyLjcwMTMiPjwvcGF0aD48cGF0aCBkPSJNIDU3OS44MCA1NDkuMjQgTCA3MzkuMDAgNTE5LjQ4IEwgNjg5LjI1IDQ3Mi43MCBMIDUzMS4zOSA1MDIuMTkgTCA1NzkuODAgNTQ5LjI0IFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtOSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIiIGlkPSLot6/lvoQtNDMiIG5vZGUtaWQ9IjYzIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI3Ni41MzY4MDQiIHRhcmdldC13aWR0aD0iMjA3LjYwNjA4IiB0YXJnZXQteD0iNTMxLjM5MzkiIHRhcmdldC15PSI0NzIuNzAxMyI+PC9wYXRoPjxwYXRoIGQ9Ik0gNDk3LjM0IDQ5Ny4wMCBDIDUyOC4wOCA0NDMuMDAgNTY2LjEzIDQwNy42NyA2MTEuNTAgMzkxLjAwIiBmaWxsPSJub25lIiBpZD0i57q/6LevIiBub2RlLWlkPSI2NCIgc3Ryb2tlPSIjZjY2ZTZiIiBzdHJva2UtZGFzaGFycmF5PSIzIDMiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjIiIHRhcmdldC1oZWlnaHQ9IjEwNiIgdGFyZ2V0LXdpZHRoPSIxMTQuMTU5NTgiIHRhcmdldC14PSI0OTcuMzQwNDIiIHRhcmdldC15PSIzOTEiPjwvcGF0aD48cGF0aCBkPSJNIDYxOS42MiAzODAuOTYgTCA2MTkuNjIgMzk4LjcxIEwgNjYwLjQyIDM2MS43NiBaIiBmaWxsPSIjZGE3NTc0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIzIiBpZD0i6Lev5b6ELTQ2IiBub2RlLWlkPSI2NiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMzYuOTQ2MzgiIHRhcmdldC13aWR0aD0iNDAuNzk4NzA2IiB0YXJnZXQteD0iNjE5LjYyMTEiIHRhcmdldC15PSIzNjEuNzYyMzYiPjwvcGF0aD48cGF0aCBkPSJNIDYxOS42MiAzODAuOTYgTCA2MDYuOTIgMzczLjM0IEwgNjYwLjQyIDM2MS43NiBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEwKSIgZmlsbC1ydWxlPSJldmVub2RkIiBncm91cC1pZD0iMyIgaWQ9Iui3r+W+hC00NyIgbm9kZS1pZD0iNjciIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjE5LjE5NTEzIiB0YXJnZXQtd2lkdGg9IjUzLjUwMTY0OCIgdGFyZ2V0LXg9IjYwNi45MTgxNSIgdGFyZ2V0LXk9IjM2MS43NjIzNiI+PC9wYXRoPjxwYXRoIGQ9Ik0gNjE5LjYyIDM5OC43MSBMIDYzMy42NyAzOTUuNjkgTCA2MjguOTMgMzkwLjIxIFoiIGZpbGw9IiNlMDYwNWMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjMiIGlkPSLot6/lvoQtNDkiIG5vZGUtaWQ9IjY4IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI4LjQ5NTExNyIgdGFyZ2V0LXdpZHRoPSIxNC4wNDc5MTMiIHRhcmdldC14PSI2MTkuNjIxMSIgdGFyZ2V0LXk9IjM5MC4yMTM2MiI+PC9wYXRoPjxwYXRoIGQ9Ik0gNjI0LjQ3IDM4My45MyBMIDYzNi45MiA0MDEuMzAgTCA2NjAuNDIgMzYxLjc2IFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMTEpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIzIiBpZD0i6Lev5b6ELTQ4IiBub2RlLWlkPSI2OSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMzkuNTM1NzY3IiB0YXJnZXQtd2lkdGg9IjM1Ljk0ODQyNSIgdGFyZ2V0LXg9IjYyNC40NzE0IiB0YXJnZXQteT0iMzYxLjc2MjM2Ij48L3BhdGg+PC9zdmc+", Rg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBoZWlnaHQ9IjEwMjQiIGxlZ2FjeS1tZXRyaWNzPSJmYWxzZSIgbm9kZS1pZD0iMSIgc2lsbHl2Zz0idHJ1ZSIgdGVtcGxhdGUtaGVpZ2h0PSIxMDI0IiB0ZW1wbGF0ZS13aWR0aD0iMTAyNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB3aWR0aD0iMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnMgbm9kZS1pZD0iNzEiPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTEiIG5vZGUtaWQ9IjUiIHgxPSIwLjUiIHgyPSIwLjUiIHkxPSIxLjAwMTIyMjciIHkyPSItMC4wMDA1Nzk4MzI4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZGY1ZjciIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZhZDRkMiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtMiIgbm9kZS1pZD0iOCIgeDE9IjAuNTAwODQzOSIgeDI9IjAuNTAwODQzOSIgeTE9IjEiIHkyPSIwLjAwMDA2NDk0NzM4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4xIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmRlY2ViIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC0zIiBub2RlLWlkPSIxMSIgeDE9IjAuNTAwMDQ1OSIgeDI9IjAuNTAwMDQ1OSIgeTE9IjAuOTk5MzEyIiB5Mj0iLTAuMDAwODExMjc3MzYiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYWQ2ZDQiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTQiIG5vZGUtaWQ9IjE0IiB4MT0iMC41IiB4Mj0iMC41IiB5MT0iMSIgeTI9IjAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuMTMiIHN0b3AtY29sb3I9IiNmZWZjZmIiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuNDEiIHN0b3AtY29sb3I9IiNmZWZjZmIiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuODEiIHN0b3AtY29sb3I9IiNmOWQ4ZDUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmOWQ4ZDUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTUiIG5vZGUtaWQ9IjIwIiB4MT0iMC41IiB4Mj0iMC41IiB5MT0iMCIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y4ZDBjZSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U1OTQ5MCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtNiIgbm9kZS1pZD0iMjMiIHgxPSIwLjUiIHgyPSIwLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWRhZWFiIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWM0NjNkIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC03IiBub2RlLWlkPSIyNiIgeDE9IjAuNSIgeDI9IjAuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmN2NlY2IiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmNzY2NjIiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTgiIG5vZGUtaWQ9IjI5IiB4MT0iMC41IiB4Mj0iMC4xOCIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlYjU2NTQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmNzg3ODUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTkiIG5vZGUtaWQ9IjMyIiB4MT0iMC4zMzE4MzgzIiB4Mj0iMC44MTcwODcxIiB5MT0iMC4yMjQyMzMzNyIgeTI9IjAuODE3ODQ2NiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjliMGFlIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjY1NjUxIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC0xMCIgbm9kZS1pZD0iMzUiIHgxPSIwLjEyNzA1OTYyIiB4Mj0iMC41IiB5MT0iMC41ODY1ODM3MyIgeTI9IjAuNDM2NDc4OTciPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZjNmMiIgc3RvcC1vcGFjaXR5PSIwIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZlMmUwIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTSAwLjAwIDAuMDAgTCAxMDI0LjAwIDAuMDAgTCAxMDI0LjAwIDEwMjQuMDAgTCAwLjAwIDEwMjQuMDAgWiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBub2RlLWlkPSIxNDEiIHN0cm9rZT0ibm9uZSIgdGFyZ2V0LWhlaWdodD0iMTAyNCIgdGFyZ2V0LXdpZHRoPSIxMDI0IiB0YXJnZXQteD0iMCIgdGFyZ2V0LXk9IjAiPjwvcGF0aD48ZyBub2RlLWlkPSIxNDMiPjxwYXRoIGQ9Ik0gMTAxLjM0IDYwNi4wMCBMIDEwNy4wMCA2NjcuMDAgTCA3Mi4wMCA2NjIuOTMgWiIgZmlsbD0iI2ZhZDRkMiIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNDEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjYxIiB0YXJnZXQtd2lkdGg9IjM1IiB0YXJnZXQteD0iNzIiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDEwMS4wMCA2MDYuMDAgTCAxMzguMDAgNjU0LjIxIEwgMTA2LjY3IDY2Ny4wMCBaIiBmaWxsPSIjZmRjNmMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0MiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNjEiIHRhcmdldC13aWR0aD0iMzciIHRhcmdldC14PSIxMDEiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDE2Ny4yMyAzNDIuMDMgTCAxNjUuOTkgMzM3LjEwIEwgMTY0LjI2IDMzMi41MSBMIDE2Mi4wMiAzMjguMjIgTCAxNTkuMzAgMzI0LjIxIEwgMTU2LjIwIDMyMC42MSBMIDE1Mi43MCAzMTcuMzcgTCAxNDguODUgMzE0LjU2IEwgMTQ0LjcyIDMxMi4yMyBMIDE0MC4yOSAzMTAuMzUgTCAxMzUuNjggMzA5LjAxIEwgMTMwLjg4IDMwOC4yMyBMIDEyNS44NSAzMDguMDEgTCAxMjEuNzkgMzA4LjE4IEwgMTE3Ljg1IDMwOC43MyBMIDExMy45OSAzMDkuNjMgTCAxMTAuMjEgMzEwLjkwIEwgMTA2LjU2IDMxMi41MiBMIDEwMy4xMCAzMTQuNDYgTCA5OS44MSAzMTYuNzMgTCA5Ni42OCAzMTkuMzUgTCA5My4yNCAzMTguMDAgTCA4OS43NCAzMTcuMDQgTCA4Ni4xNiAzMTYuNDYgTCA4Mi40OCAzMTYuMjYgTCA3OC41OCAzMTYuNDQgTCA3NC44NyAzMTcuMDMgTCA3MS4zMiAzMTguMDIgTCA2Ny45MCAzMTkuNDMgTCA2NC42NSAzMjEuMjEgTCA2MS42NyAzMjMuMzEgTCA1OC45MyAzMjUuNzMgTCA1Ni40MyAzMjguNDggTCA1NC4yNSAzMzEuNDkgTCA1Mi40NCAzMzQuNzMgTCA1MC45NyAzMzguMjIgTCA0OS44NiAzNDIuMDAgTCA0NS45NyAzNDMuMTkgTCA0Mi40NCAzNDQuODcgTCAzOS4yMiAzNDcuMDYgTCAzNi4zNSAzNDkuNjkgTCAzMy45MiAzNTIuNjYgTCAzMS45MCAzNTYuMDEgTCAzMC4zOSAzNTkuNjEgTCAyOS40MiAzNjMuNDMgTCAyOS4wMCAzNjcuNTEgTCAyOS4zNyAzNzEuMjQgTCAzMC4xOCAzNzQuNzMgTCAzMS40MyAzNzguMDMgTCAzMy4wOSAzODEuMTQgTCAzNS4wOSAzODMuOTYgTCAzNy40NCAzODYuNTEgTCA0MC4wOSAzODguNzQgTCA0Mi45OCAzOTAuNjEgTCA0Ni4xNSAzOTIuMTEgTCA0OS40OCAzOTMuMTkgTCA1Mi45OCAzOTMuODIgTCA1Ni42OCAzOTMuOTkgTCAxNjAuMzIgMzkzLjk5IEwgMTY0LjAyIDM5My44MiBMIDE2Ny41MiAzOTMuMjAgTCAxNzAuODYgMzkyLjEyIEwgMTc0LjAyIDM5MC42MiBMIDE3Ni45MiAzODguNzUgTCAxNzkuNTcgMzg2LjUyIEwgMTgxLjkyIDM4My45NyBMIDE4My45MiAzODEuMTUgTCAxODUuNTggMzc4LjA0IEwgMTg2LjgyIDM3NC43NCBMIDE4Ny42MyAzNzEuMjQgTCAxODguMDAgMzY3LjUxIEwgMTg3LjU4IDM2My40NCBMIDE4Ni42MiAzNTkuNjMgTCAxODUuMTEgMzU2LjA0IEwgMTgzLjExIDM1Mi42OSBMIDE4MC42OCAzNDkuNzIgTCAxNzcuODIgMzQ3LjA5IEwgMTc0LjYyIDM0NC45MSBMIDE3MS4xMCAzNDMuMjIgTCAxNjcuMjMgMzQyLjAzIEwgMTY3LjIzIDM0Mi4wMyBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0MyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iODUuOTg0OTI0IiB0YXJnZXQtd2lkdGg9IjE1OSIgdGFyZ2V0LXg9IjI5IiB0YXJnZXQteT0iMzA4LjAwNjg0Ij48L3BhdGg+PHBhdGggZD0iTSA3NjguNzEgMjAzLjEwIEwgNzY2Ljc3IDIwMC4zOSBMIDc2NC42MCAxOTcuOTUgTCA3NjIuMTkgMTk1Ljc4IEwgNzU5LjU3IDE5My44OCBMIDc1Ni43OSAxOTIuMjggTCA3NTMuODQgMTkwLjk4IEwgNzUwLjc3IDE5MC4wMCBMIDc0Ny42MCAxODkuMzUgTCA3NDQuMzEgMTg5LjA1IEwgNzQyLjIyIDE4Ni4xOSBMIDczOS44OCAxODMuNjUgTCA3MzcuMjkgMTgxLjQwIEwgNzM0LjQ3IDE3OS40NSBMIDczMS40OCAxNzcuODUgTCA3MjguMzEgMTc2LjU4IEwgNzI1LjAyIDE3NS42NyBMIDcyMS42MyAxNzUuMTUgTCA3MTguMTIgMTc1LjAwIEwgNzEzLjkxIDE3NS4yNSBMIDcwOS44NiAxNzYuMDQgTCA3MDUuOTQgMTc3LjM3IEwgNzAyLjIyIDE3OS4yMSBMIDY5OC43OCAxODEuNTIgTCA2OTUuNjAgMTg0LjM0IEwgNjkyLjgzIDE4My42MCBMIDY5MC4wMiAxODMuMTUgTCA2ODcuMTYgMTgzLjAwIEwgNjgzLjgyIDE4My4yMSBMIDY4MC42OSAxODMuNzYgTCA2NzcuNzQgMTg0LjY0IEwgNjc0Ljk1IDE4NS44NSBMIDY3MS40NiAxODcuOTQgTCA2NjguNDggMTkwLjQ1IEwgNjY1Ljk0IDE5My4zOCBMIDY2NC4zNyAxOTUuODMgTCA2NjMuMTcgMTk4LjQxIEwgNjYyLjMyIDIwMS4xNSBMIDY2MS44MiAyMDQuMDcgTCA2NTguNTMgMjA1LjEzIEwgNjU1LjU0IDIwNi42MSBMIDY1Mi44MCAyMDguNTAgTCA2NTAuMzcgMjEwLjc2IEwgNjQ4LjI5IDIxMy4zMSBMIDY0Ni41NyAyMTYuMTcgTCA2NDUuMjYgMjE5LjI1IEwgNjQ0LjQwIDIyMi41MSBMIDY0NC4wMCAyMjUuOTkgTCA2NDQuMjQgMjI5LjE0IEwgNjQ0LjkxIDIzMi4xMSBMIDY0Ni4wMSAyMzQuOTMgTCA2NDcuNDkgMjM3LjU5IEwgNjQ5LjMwIDI0MC4wMiBMIDY1MS40NiAyNDIuMjUgTCA2NTMuODkgMjQ0LjE5IEwgNjU2LjU3IDI0NS44MyBMIDY1OS41MiAyNDcuMTkgTCA2NjIuNjIgMjQ4LjE3IEwgNjY1Ljg4IDI0OC43OCBMIDY2OS4zNCAyNDkuMDAgTCA3NjYuNjYgMjQ5LjAwIEwgNzcwLjE3IDI0OC43OCBMIDc3My40NiAyNDguMTcgTCA3NzYuNTYgMjQ3LjE5IEwgNzc5LjUxIDI0NS44MyBMIDc4Mi4xOSAyNDQuMTkgTCA3ODQuNjEgMjQyLjI1IEwgNzg2Ljc2IDI0MC4wMiBMIDc4OC41NSAyMzcuNTkgTCA3OTAuMDIgMjM0LjkzIEwgNzkxLjEwIDIzMi4xMSBMIDc5MS43NiAyMjkuMTQgTCA3OTIuMDAgMjI1Ljk5IEwgNzkxLjgyIDIyMi45OCBMIDc5MS4yNSAyMjAuMTUgTCA3OTAuMzEgMjE3LjQ3IEwgNzg4Ljk3IDIxNC45MSBMIDc4Ni42OSAyMTEuODAgTCA3ODMuOTMgMjA5LjEwIEwgNzgwLjYyIDIwNi43NyBMIDc3Ny45MiAyMDUuMzggTCA3NzUuMDYgMjA0LjMwIEwgNzcyLjAwIDIwMy41NCBMIDc2OC43MSAyMDMuMTAgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0yKSIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNDQiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjczLjk5NTE5IiB0YXJnZXQtd2lkdGg9IjE0Ny45OTY0IiB0YXJnZXQteD0iNjQ0IiB0YXJnZXQteT0iMTc1LjAwNDgiPjwvcGF0aD48cGF0aCBkPSJNIDk0OS42MiAxNzEuNzQgTCA5NDcuMDAgMTY2Ljk1IEwgOTQ0LjAzIDE2Mi41NCBMIDk0MC42OSAxNTguNDcgTCA5MzYuOTkgMTU0Ljc0IEwgOTMyLjk1IDE1MS4zNSBMIDkyOC42NyAxNDguMzggTCA5MjQuMTQgMTQ1LjgxIEwgOTE5LjMzIDE0My42NSBMIDkxNC4zNSAxNDEuOTMgTCA5MDkuMjQgMTQwLjY5IEwgOTAzLjk3IDEzOS45MyBMIDg5OC41MSAxMzkuNjQgTCA4OTIuNDYgMTM5Ljk4IEwgODg2LjU2IDE0MC45NSBMIDg4MC43OCAxNDIuNTQgTCA4NzUuMjEgMTQ0LjczIEwgODY5LjkxIDE0Ny40OSBMIDg2NC44NiAxNTAuODUgTCA4NjIuNTEgMTQ2LjcxIEwgODU5Ljg5IDE0Mi44NiBMIDg1Ny4wMSAxMzkuMzAgTCA4NTMuODYgMTM2LjAwIEwgODQ5LjI3IDEzMi4wMSBMIDg0NC4zNSAxMjguNTcgTCA4MzkuMDggMTI1LjY3IEwgODMzLjUzIDEyMy4zNCBMIDgyNy43OCAxMjEuNjEgTCA4MjEuODAgMTIwLjQ5IEwgODE3LjI1IDEyMC4wNyBMIDgxMi42NyAxMjAuMDMgTCA4MDguMDMgMTIwLjM2IEwgODAzLjMyIDEyMS4wOCBMIDc5OC42OCAxMjIuMjEgTCA3OTQuMjYgMTIzLjY2IEwgNzkwLjA0IDEyNS40NSBMIDc4Ni4wMCAxMjcuNTcgTCA3ODAuOTAgMTMwLjg4IEwgNzc2LjI0IDEzNC42NyBMIDc3Mi4wMCAxMzguOTMgTCA3NjguMjMgMTQzLjYyIEwgNzY0Ljk5IDE0OC42NyBMIDc2Mi4yNiAxNTQuMTEgTCA3NjAuNjEgMTU4LjM2IEwgNzU5LjMxIDE2Mi43NSBMIDc1OC4zNiAxNjcuMzAgTCA3NTcuNzYgMTcyLjAyIEwgNzUyLjgwIDE3My44NSBMIDc0OC4xNyAxNzYuMDMgTCA3NDMuODMgMTc4LjU4IEwgNzM5Ljc2IDE4MS41MCBMIDczNS45NiAxODQuNzcgTCA3MzIuNTAgMTg4LjMwIEwgNzI5LjM4IDE5Mi4xMSBMIDcyNi41OCAxOTYuMTkgTCA3MjQuMTUgMjAwLjUxIEwgNzIyLjEyIDIwNC45OCBMIDcyMC40NyAyMDkuNjQgTCA3MTkuMjEgMjE0LjUwIEwgNzE4LjM5IDIxOS40MyBMIDcxOC4wMyAyMjQuNDUgTCA3MTguMTEgMjI5LjU3IEwgNzE4LjY2IDIzNC44MSBMIDcxOS43MSAyMzkuOTggTCA3MjEuMTcgMjQ0Ljg5IEwgNzIzLjAyIDI0OS41NiBMIDcyNS4yOSAyNTQuMDIgTCA3MjcuOTQgMjU4LjI4IEwgNzMwLjkxIDI2Mi4yMyBMIDczNC4xOSAyNjUuOTAgTCA3MzcuODEgMjY5LjI4IEwgNzQxLjcwIDI3Mi4zNCBMIDc0NS44MiAyNzUuMDMgTCA3NTAuMTggMjc3LjM3IEwgNzU0LjgwIDI3OS4zNSBMIDc1OS41NSAyODAuOTIgTCA3NjQuNDUgMjgyLjA1IEwgNzY5LjUzIDI4Mi43NCBMIDc3NC44MCAyODMuMDAgTCA5MzMuMDUgMjgzLjAwIEwgOTM4LjM2IDI4Mi43NiBMIDk0My40NiAyODIuMDcgTCA5NDguNDAgMjgwLjk0IEwgOTUzLjE3IDI3OS4zNyBMIDk1Ny44MiAyNzcuMzggTCA5NjIuMjAgMjc1LjA0IEwgOTY2LjMzIDI3Mi4zMyBMIDk3MC4yNSAyNjkuMjUgTCA5NzMuODggMjY1Ljg0IEwgOTc3LjE3IDI2Mi4xNSBMIDk4MC4xNCAyNTguMTcgTCA5ODIuODAgMjUzLjg5IEwgOTg1LjA2IDI0OS40MCBMIDk4Ni45MSAyNDQuNjkgTCA5ODguMzUgMjM5Ljc1IEwgOTg5LjM4IDIzNC41NSBMIDk4OS45MSAyMjkuMjcgTCA5ODkuOTYgMjI0LjEyIEwgOTg5LjU2IDIxOS4wOCBMIDk4OC43MCAyMTQuMTMgTCA5ODcuNDAgMjA5LjI2IEwgOTg1LjcxIDIwNC41OSBMIDk4My42MyAyMDAuMTAgTCA5ODEuMTQgMTk1Ljc5IEwgOTc4LjI5IDE5MS43MSBMIDk3NS4xMiAxODcuOTIgTCA5NzEuNjEgMTg0LjQxIEwgOTY3Ljc0IDE4MS4xNiBMIDk2My42MiAxNzguMjcgTCA5NTkuMjMgMTc1Ljc2IEwgOTU0LjU1IDE3My42MiBMIDk0OS41NCAxNzEuODUgTCA5NDkuNjIgMTcxLjc0IFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjQ1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxNjIuOTc0OTgiIHRhcmdldC13aWR0aD0iMjcxLjkzNjgzIiB0YXJnZXQteD0iNzE4LjAyNTciIHRhcmdldC15PSIxMjAuMDI1MDIiPjwvcGF0aD48ZyBub2RlLWlkPSIxNDYiPjxwYXRoIGQ9Ik0gMTAyNC4wMCA3NDIuMDAgTCAxMDIzLjcyIDc0Ny4yNiBMIDEwMjIuOTIgNzUyLjQ5IEwgMTAyMS41OCA3NTcuNzQgTCAxMDE5LjY4IDc2My4wMiBMIDEwMTcuMTkgNzY4LjM1IEwgMTAxNC4wNyA3NzMuNzUgTCAxMDA5Ljk5IDc3OS42MyBMIDEwMDUuMTIgNzg1LjU4IEwgOTk5LjM5IDc5MS42MiBMIDk5Mi43MiA3OTcuNzYgTCA5ODUuMDMgODAzLjk5IEwgOTc3LjQ0IDgwOS41MCBMIDk2OS4wMCA4MTUuMDQgTCA5NTkuNjYgODIwLjYyIEwgOTQ5LjM0IDgyNi4yNCBMIDkzNy45OCA4MzEuODggTCA5MjQuMTIgODM4LjEzIEwgOTA4LjkxIDg0NC4zNCBMIDg5Mi4yNCA4NTAuNDggTCA4NzQuMDQgODU2LjU1IEwgODU0LjczIDg2Mi4zNSBMIDgzNC4yNSA4NjcuODkgTCA4MTIuNTUgODczLjE1IEwgNzkwLjc2IDg3Ny44OCBMIDc2OC4wMCA4ODIuMzAgTCA3NDQuMjMgODg2LjM4IEwgNzIwLjQxIDg4OS45NyBMIDY5NS44MiA4OTMuMjAgTCA2NzAuNDUgODk2LjA1IEwgNjQ1LjA0IDg5OC40NCBMIDYxOS4wOSA5MDAuNDIgTCA1OTIuNTggOTAxLjk4IEwgNTY2LjA1IDkwMy4xMCBMIDUzOS4xOSA5MDMuNzcgTCA1MTIuMDAgOTA0LjAwIEwgNDg0LjgxIDkwMy43NyBMIDQ1Ny45NSA5MDMuMTAgTCA0MzEuNDIgOTAxLjk4IEwgNDA0LjkxIDkwMC40MiBMIDM3OC45NiA4OTguNDQgTCAzNTMuNTUgODk2LjA1IEwgMzI4LjE4IDg5My4yMCBMIDMwMy41OSA4ODkuOTcgTCAyNzkuNzcgODg2LjM4IEwgMjU2LjAwIDg4Mi4zMCBMIDIzMy4yNCA4NzcuODggTCAyMTEuNDUgODczLjE1IEwgMTg5Ljc1IDg2Ny44OSBMIDE2OS4yNyA4NjIuMzUgTCAxNDkuOTYgODU2LjU1IEwgMTMxLjc2IDg1MC40OCBMIDExNS4wOSA4NDQuMzQgTCA5OS44OCA4MzguMTMgTCA4Ni4wMiA4MzEuODggTCA3NC42NiA4MjYuMjQgTCA2NC4zNCA4MjAuNjIgTCA1NS4wMCA4MTUuMDQgTCA0Ni41NiA4MDkuNTAgTCAzOC45NyA4MDMuOTkgTCAzMS4yOCA3OTcuNzYgTCAyNC42MSA3OTEuNjIgTCAxOC44OCA3ODUuNTggTCAxNC4wMSA3NzkuNjMgTCA5LjkzIDc3My43NSBMIDYuODEgNzY4LjM1IEwgNC4zMiA3NjMuMDIgTCAyLjQyIDc1Ny43NCBMIDEuMDggNzUyLjQ5IEwgMC4yOCA3NDcuMjYgTCAwLjAwIDc0Mi4wMCBMIDAuMjggNzM2Ljc0IEwgMS4wOCA3MzEuNTEgTCAyLjQyIDcyNi4yNiBMIDQuMzIgNzIwLjk4IEwgNi44MSA3MTUuNjUgTCA5LjkzIDcxMC4yNSBMIDE0LjAxIDcwNC4zNyBMIDE4Ljg4IDY5OC40MiBMIDI0LjYxIDY5Mi4zOCBMIDMxLjI4IDY4Ni4yNCBMIDM4Ljk3IDY4MC4wMSBMIDQ2LjU2IDY3NC41MCBMIDU1LjAwIDY2OC45NiBMIDY0LjM0IDY2My4zOCBMIDc0LjY2IDY1Ny43NiBMIDg2LjAyIDY1Mi4xMiBMIDk5Ljg4IDY0NS44NyBMIDExNS4wOSA2MzkuNjYgTCAxMzEuNzYgNjMzLjUyIEwgMTQ5Ljk2IDYyNy40NSBMIDE2OS4yNyA2MjEuNjUgTCAxODkuNzUgNjE2LjExIEwgMjExLjQ1IDYxMC44NSBMIDIzMy4yNCA2MDYuMTIgTCAyNTYuMDAgNjAxLjcwIEwgMjc5Ljc3IDU5Ny42MiBMIDMwMy41OSA1OTQuMDMgTCAzMjguMTggNTkwLjgwIEwgMzUzLjU1IDU4Ny45NSBMIDM3OC45NiA1ODUuNTYgTCA0MDQuOTEgNTgzLjU4IEwgNDMxLjQyIDU4Mi4wMiBMIDQ1Ny45NSA1ODAuOTAgTCA0ODQuODEgNTgwLjIzIEwgNTEyLjAwIDU4MC4wMCBMIDUzOS4xOSA1ODAuMjMgTCA1NjYuMDUgNTgwLjkwIEwgNTkyLjU4IDU4Mi4wMiBMIDYxOS4wOSA1ODMuNTggTCA2NDUuMDQgNTg1LjU2IEwgNjcwLjQ1IDU4Ny45NSBMIDY5NS44MiA1OTAuODAgTCA3MjAuNDEgNTk0LjAzIEwgNzQ0LjIzIDU5Ny42MiBMIDc2OC4wMCA2MDEuNzAgTCA3OTAuNzYgNjA2LjEyIEwgODEyLjU1IDYxMC44NSBMIDgzNC4yNSA2MTYuMTEgTCA4NTQuNzMgNjIxLjY1IEwgODc0LjA0IDYyNy40NSBMIDg5Mi4yNCA2MzMuNTIgTCA5MDguOTEgNjM5LjY2IEwgOTI0LjEyIDY0NS44NyBMIDkzNy45OCA2NTIuMTIgTCA5NDkuMzQgNjU3Ljc2IEwgOTU5LjY2IDY2My4zOCBMIDk2OS4wMCA2NjguOTYgTCA5NzcuNDQgNjc0LjUwIEwgOTg1LjAzIDY4MC4wMSBMIDk5Mi43MiA2ODYuMjQgTCA5OTkuMzkgNjkyLjM4IEwgMTAwNS4xMiA2OTguNDIgTCAxMDA5Ljk5IDcwNC4zNyBMIDEwMTQuMDcgNzEwLjI1IEwgMTAxNy4xOSA3MTUuNjUgTCAxMDE5LjY4IDcyMC45OCBMIDEwMjEuNTggNzI2LjI2IEwgMTAyMi45MiA3MzEuNTEgTCAxMDIzLjcyIDczNi43NCBMIDEwMjQuMDAgNzQyLjAwIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNCkiIGZpbGwtb3BhY2l0eT0iMC40MDc3NDQ2NSIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSw0IiBpZD0i5qSt5ZyG5b2iIiBub2RlLWlkPSI0NiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIwLjQwNzc0NDY1IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjMyNCIgdGFyZ2V0LXdpZHRoPSIxMDI0IiB0YXJnZXQteD0iMCIgdGFyZ2V0LXk9IjU4MCI+PC9wYXRoPjwvZz48cGF0aCBkPSJNIDkwNi4wMCA2MDYuMDAgTCA5MDEuMTMgNjcwLjAwIEwgODY1LjAwIDY1OS41MiBaIiBmaWxsPSIjZmFkNGQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0NyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNjQiIHRhcmdldC13aWR0aD0iNDEiIHRhcmdldC14PSI4NjUiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDkwNC44NSA2MDYuMDAgTCA5MzUuMDAgNjYyLjM5IEwgOTAwLjAwIDY3MC4wMCBaIiBmaWxsPSIjZmRjNmMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0OCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNjQiIHRhcmdldC13aWR0aD0iMzUiIHRhcmdldC14PSI5MDAiIHRhcmdldC15PSI2MDYiPjwvcGF0aD48cGF0aCBkPSJNIDIwMS4zNyA1OTQuMDAgTCAyMDYuMDAgNjQyLjAwIEwgMTc3LjAwIDYzOC44MSBaIiBmaWxsPSIjZjdkOWQ3IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0OSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNDgiIHRhcmdldC13aWR0aD0iMjkiIHRhcmdldC14PSIxNzciIHRhcmdldC15PSI1OTQiPjwvcGF0aD48cGF0aCBkPSJNIDIwMC4wMCA1OTQuMDAgTCAyMzAuMDAgNjMxLjg5IEwgMjA0LjU1IDY0Mi4wMCBaIiBmaWxsPSIjZmZjY2M4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI1MCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNDgiIHRhcmdldC13aWR0aD0iMzAiIHRhcmdldC14PSIyMDAiIHRhcmdldC15PSI1OTQiPjwvcGF0aD48cGF0aCBkPSJNIDE0OC40OCA1NjQuMDAgTCAxNTguMDAgNjY1LjAwIEwgOTQuMDAgNjU4LjcxIFoiIGZpbGw9IiNmYWQ0ZDIiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjUxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMDEiIHRhcmdldC13aWR0aD0iNjQiIHRhcmdldC14PSI5NCIgdGFyZ2V0LXk9IjU2NCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTQ3LjAwIDU2NC4wMCBMIDIxNC4wMCA2NDMuMzcgTCAxNTYuNTMgNjY1LjAwIFoiIGZpbGw9IiNmZGM2YzMiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjUyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMDEiIHRhcmdldC13aWR0aD0iNjciIHRhcmdldC14PSIxNDciIHRhcmdldC15PSI1NjQiPjwvcGF0aD48L2c+PGcgbm9kZS1pZD0iMTQ0Ij48ZyBub2RlLWlkPSIxNDciPjxnIG5vZGUtaWQ9IjE0OSI+PHBhdGggZD0iTSA0MTEuMTEgMzI5LjYxIEwgNTk0LjMxIDMyOS42MSBMIDU5Ni44NyAzMjkuODUgTCA1OTkuMjEgMzMwLjQ5IEwgNjAxLjM4IDMzMS41MiBMIDYwMy4zNCAzMzIuOTEgTCA2MDUuMDEgMzM0LjU4IEwgNjA2LjQwIDMzNi41NCBMIDYwNy40NCAzMzguNzEgTCA2MDguMDggMzQxLjA1IEwgNjA4LjMxIDM0My42MSBMIDYwOC4yMSAzNDUuMzAgTCA2MDcuOTAgMzQ2Ljk4IEwgNjAyLjgxIDM2Ni4zNyBMIDU5Ny42MSAzODQuMDUgTCA1OTIuMzAgNDAwLjE1IEwgNTg2LjkxIDQxNC43NCBMIDU4MS40NiA0MjcuOTQgTCA1NzUuOTYgNDM5Ljg1IEwgNTcwLjQzIDQ1MC41NCBMIDU2NC44NiA0NjAuMTEgTCA1NTkuMjggNDY4LjY0IEwgNTUzLjY4IDQ3Ni4yMSBMIDU0OC4wOCA0ODIuODkgTCA1NDIuNDYgNDg4Ljc1IEwgNTM2LjgyIDQ5My44NCBMIDUzMS4xNiA0OTguMjMgTCA1MjUuNDcgNTAxLjk2IEwgNTE5LjczIDUwNS4wNyBMIDUxMy45MyA1MDcuNTkgTCA1MDguMDQgNTA5LjU1IEwgNTAxLjE3IDUwNy4xNCBMIDQ5NC40MiA1MDQuMTcgTCA0ODcuNzkgNTAwLjYxIEwgNDgxLjI1IDQ5Ni40NCBMIDQ3NC44MCA0OTEuNjQgTCA0NjguNDEgNDg2LjE2IEwgNDYyLjEwIDQ3OS45NiBMIDQ1NS44NCA0NzIuOTkgTCA0NDkuNjQgNDY1LjIwIEwgNDQzLjUxIDQ1Ni41MyBMIDQzNy40NCA0NDYuOTIgTCA0MzEuNDQgNDM2LjMxIEwgNDI1LjUyIDQyNC42MiBMIDQxOS43MCA0MTEuNzcgTCA0MTMuOTggMzk3LjcwIEwgNDA4LjM4IDM4Mi4zMyBMIDQwMi45MiAzNjUuNTYgTCAzOTcuNjEgMzQ3LjMyIEwgMzk3LjE3IDM0NC43OSBMIDM5Ny4xNiAzNDIuMzYgTCAzOTcuNTggMzQwLjAwIEwgMzk4LjQxIDMzNy43MyBMIDM5OS41NyAzMzUuNjggTCA0MDEuMTAgMzMzLjgyIEwgNDAyLjkyIDMzMi4yNSBMIDQwNS4wMCAzMzEuMDEgTCA0MDcuNDEgMzMwLjExIEwgNDA5LjI0IDMyOS43MyBMIDQxMS4xMSAzMjkuNjEgWiIgZmlsbD0iI2ZlZWRlYyIgZmlsbC1vcGFjaXR5PSIwLjc2ODI0ODEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIsNSw3IiBpZD0i55+p5b2iIiBub2RlLWlkPSI1NSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIwLjc2ODI0ODEiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTc5Ljk0MzM2IiB0YXJnZXQtd2lkdGg9IjIxMS4xNTI2NSIgdGFyZ2V0LXg9IjM5Ny4xNjA1OCIgdGFyZ2V0LXk9IjMyOS42MDg3NiI+PC9wYXRoPjwvZz48cGF0aCBkPSJNIDQwNi44MSAzNjAuMjQgTCA0MDkuMTIgMzU2Ljk0IEwgNDExLjgxIDM1My44MyBMIDQxNC45MSAzNTAuOTAgTCA0MTguNDQgMzQ4LjE0IEwgNDIyLjQ1IDM0NS41NSBMIDQyOS43NyAzNDQuOTUgTCA0MzkuODMgMzQ0LjQxIEwgNDYzLjM0IDM0My43MSBMIDQ5MC41MCAzNDMuNDIgTCA1MTguODMgMzQzLjUxIEwgNTQ1LjgzIDM0My45MiBMIDU2OS4wMSAzNDQuNjEgTCA1ODUuOTEgMzQ1LjU1IEwgNTg5LjE2IDM0Ni41MCBMIDU5MS40MyAzNDcuNjcgTCA1OTMuMzMgMzQ5LjE4IEwgNTk0Ljk1IDM1MC45NSBMIDU5OC4zMCAzNTUuMjEgTCA2MDAuMzcgMzU3LjUzIEwgNjAzLjI5IDM2MC4yNCBMIDYwMy4zNyAzNTUuODkgTCA2MDMuNjEgMzUxLjgzIEwgNjAzLjc5IDM0Ny44NiBMIDYwMy43MSAzNDQuMTkgTCA2MDMuNDIgMzQxLjgxIEwgNjAyLjgzIDMzOS41MyBMIDYwMS45MyAzMzcuMzMgTCA2MDAuNzAgMzM1LjMyIEwgNTk4Ljk0IDMzMy4zMCBMIDU5Ni41NiAzMzEuMjYgTCA1OTMuOTIgMzI5LjU1IEwgNTkwLjQzIDMyNy43OSBMIDU4NS45MSAzMjUuOTkgTCA1NzMuNjMgMzI1LjQ3IEwgNTU1LjI0IDMyNC45MyBMIDUzMi41OCAzMjQuNDUgTCA1MDcuNTIgMzI0LjExIEwgNDgxLjkyIDMyNC4wMCBMIDQ1Ny42NCAzMjQuMjIgTCA0MzYuNTMgMzI0Ljg1IEwgNDI3LjM5IDMyNS4zOCBMIDQyMC40NiAzMjUuOTkgTCA0MTcuODkgMzI2Ljc1IEwgNDE1LjcwIDMyNy43NSBMIDQxMy44NSAzMjguOTggTCA0MTIuMTkgMzMwLjQ3IEwgNDEwLjgwIDMzMi4xMCBMIDQwOS42NSAzMzMuODggTCA0MDguMzIgMzM2Ljc2IEwgNDA3LjQ1IDMzOS43MyBMIDQwNi45NSAzNDIuNzQgTCA0MDYuODEgMzQ1LjU1IEwgNDA2LjgxIDM2MC4yNCBaIiBmaWxsPSIjZWM0NjNkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIyLDUiIGlkPSLot6/lvoQtMjIiIG5vZGUtaWQ9IjU2IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIzNi4yMzcwNiIgdGFyZ2V0LXdpZHRoPSIxOTYuOTg2NjYiIHRhcmdldC14PSI0MDYuODA1MDgiIHRhcmdldC15PSIzMjQuMDAyOCI+PC9wYXRoPjwvZz48ZyBub2RlLWlkPSIxNDgiPjxnIG5vZGUtaWQ9IjE1MCI+PHBhdGggZD0iTSA0MTEuMTEgNjUzLjM5IEwgNTk0LjMxIDY1My4zOSBMIDU5Ni44NyA2NTMuMTUgTCA1OTkuMjEgNjUyLjUxIEwgNjAxLjM4IDY1MS40OCBMIDYwMy4zNCA2NTAuMDkgTCA2MDUuMDEgNjQ4LjQyIEwgNjA2LjQwIDY0Ni40NiBMIDYwNy40NCA2NDQuMjkgTCA2MDguMDggNjQxLjk1IEwgNjA4LjMxIDYzOS4zOSBMIDYwOC4yMSA2MzcuNzAgTCA2MDcuOTAgNjM2LjAyIEwgNjAyLjgxIDYxNi42MyBMIDU5Ny42MSA1OTguOTUgTCA1OTIuMzAgNTgyLjg1IEwgNTg2LjkxIDU2OC4yNiBMIDU4MS40NiA1NTUuMDYgTCA1NzUuOTYgNTQzLjE1IEwgNTcwLjQzIDUzMi40NiBMIDU2NC44NiA1MjIuODkgTCA1NTkuMjggNTE0LjM2IEwgNTUzLjY4IDUwNi43OSBMIDU0OC4wOCA1MDAuMTEgTCA1NDIuNDYgNDk0LjI1IEwgNTM2LjgyIDQ4OS4xNiBMIDUzMS4xNiA0ODQuNzcgTCA1MjUuNDcgNDgxLjA0IEwgNTE5LjczIDQ3Ny45MyBMIDUxMy45MyA0NzUuNDEgTCA1MDguMDQgNDczLjQ1IEwgNTAxLjE3IDQ3NS44NiBMIDQ5NC40MiA0NzguODMgTCA0ODcuNzkgNDgyLjM5IEwgNDgxLjI1IDQ4Ni41NiBMIDQ3NC44MCA0OTEuMzYgTCA0NjguNDEgNDk2Ljg0IEwgNDYyLjEwIDUwMy4wNCBMIDQ1NS44NCA1MTAuMDEgTCA0NDkuNjQgNTE3LjgwIEwgNDQzLjUxIDUyNi40NyBMIDQzNy40NCA1MzYuMDggTCA0MzEuNDQgNTQ2LjY5IEwgNDI1LjUyIDU1OC4zOCBMIDQxOS43MCA1NzEuMjMgTCA0MTMuOTggNTg1LjMwIEwgNDA4LjM4IDYwMC42NyBMIDQwMi45MiA2MTcuNDQgTCAzOTcuNjEgNjM1LjY4IEwgMzk3LjE3IDYzOC4yMSBMIDM5Ny4xNiA2NDAuNjQgTCAzOTcuNTggNjQzLjAwIEwgMzk4LjQxIDY0NS4yNyBMIDM5OS41NyA2NDcuMzIgTCA0MDEuMTAgNjQ5LjE4IEwgNDAyLjkyIDY1MC43NSBMIDQwNS4wMCA2NTEuOTkgTCA0MDcuNDEgNjUyLjg5IEwgNDA5LjI0IDY1My4yNyBMIDQxMS4xMSA2NTMuMzkgWiIgZmlsbD0iI2ZlZWRlYyIgZmlsbC1vcGFjaXR5PSIwLjc2ODI0ODEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIsNiw4IiBpZD0i55+p5b2iIiBub2RlLWlkPSI1OCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIwLjc2ODI0ODEiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTc5Ljk0MzM2IiB0YXJnZXQtd2lkdGg9IjIxMS4xNTI2NSIgdGFyZ2V0LXg9IjM5Ny4xNjA1OCIgdGFyZ2V0LXk9IjQ3My40NDc4OCI+PC9wYXRoPjwvZz48cGF0aCBkPSJNIDQxNS45MyA2MjIuNzYgTCA0MTguNjEgNjI2Ljg5IEwgNDIxLjgxIDYzMC43MCBMIDQyNS41OSA2MzQuMjIgTCA0MjkuOTggNjM3LjQ1IEwgNDM2LjU1IDYzOC4wNSBMIDQ0NS41OCA2MzguNTkgTCA0NjYuNjkgNjM5LjI5IEwgNDkxLjA4IDYzOS41OCBMIDUxNi41MSA2MzkuNDkgTCA1NDAuNzUgNjM5LjA4IEwgNTYxLjU3IDYzOC4zOSBMIDU3Ni43NCA2MzcuNDUgTCA1NzkuNjUgNjM2LjUwIEwgNTgxLjY5IDYzNS4zMyBMIDU4My4zOSA2MzMuODMgTCA1ODQuODYgNjMyLjA1IEwgNTg3Ljg2IDYyNy43OSBMIDU4OS43MyA2MjUuNDYgTCA1OTIuMzQgNjIyLjc2IEwgNTkyLjQyIDYyNy4xMSBMIDU5Mi42MyA2MzEuMTcgTCA1OTIuNzkgNjM1LjE0IEwgNTkyLjcyIDYzOC44MSBMIDU5Mi40NiA2NDEuMTkgTCA1OTEuOTIgNjQzLjQ3IEwgNTkxLjEyIDY0NS42NyBMIDU5MC4wMCA2NDcuNzAgTCA1ODguNDIgNjQ5LjcyIEwgNTg2LjMwIDY1MS43NCBMIDU4My45MiA2NTMuNDYgTCA1ODAuNzggNjU1LjIyIEwgNTc2Ljc0IDY1Ny4wMSBMIDU2NS43MiA2NTcuNTMgTCA1NDkuMjAgNjU4LjA3IEwgNTI4Ljg2IDY1OC41NSBMIDUwNi4zNiA2NTguODkgTCA0ODMuMzcgNjU5LjAwIEwgNDYxLjU3IDY1OC43OCBMIDQ0Mi42MiA2NTguMTUgTCA0MzQuNDEgNjU3LjYyIEwgNDI4LjE5IDY1Ny4wMSBMIDQyNS4xOSA2NTUuOTMgTCA0MjIuNzQgNjU0LjQ0IEwgNDIwLjc4IDY1Mi41NSBMIDQxOS4xNiA2NTAuMzEgTCA0MTcuOTAgNjQ3Ljg5IEwgNDE2Ljk5IDY0NS4yNyBMIDQxNi4xNyA2NDEuMjIgTCA0MTUuOTMgNjM3LjQ1IEwgNDE1LjkzIDYyMi43NiBaIiBmaWxsPSIjZWM0NjNkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIyLDYiIGlkPSLot6/lvoQtMjIiIG5vZGUtaWQ9IjU5IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIzNi4yMzcwNiIgdGFyZ2V0LXdpZHRoPSIxNzYuODYzMjgiIHRhcmdldC14PSI0MTUuOTI5OCIgdGFyZ2V0LXk9IjYyMi43NjAxMyI+PC9wYXRoPjwvZz48cGF0aCBkPSJNIDUwNS4wOCA0NjMuMDAgTCA1MTAuMzcgNDYzLjE3IEwgNTE1LjYxIDQ2My42NCBMIDUyMC43OCA0NjQuNDIgTCA1MjUuOTIgNDY1LjQ5IEwgNTMwLjYxIDQ2Ni43OSBMIDUzNC45MCA0NjguMjggTCA1MzkuMDYgNDcwLjEyIEwgNTQyLjQyIDQ3Mi4wMyBMIDU0NS4wOCA0NzQuMDEgTCA1NDYuODYgNDc1Ljc5IEwgNTQ4LjA1IDQ3Ny41MyBMIDU0OC43NCA0NzkuMjYgTCA1NDkuMDAgNDgxLjAzIEwgNTQ2LjY5IDQ4NC4yNCBMIDU0My45MCA0ODcuNTIgTCA1NDAuNTggNDkwLjg3IEwgNTM3LjAzIDQ5My45NSBMIDUzMi44NiA0OTcuMDYgTCA1MjguMDAgNTAwLjIxIEwgNTIyLjk3IDUwMy4wMiBMIDUxNy4xNiA1MDUuODIgTCA1MTAuNTAgNTA4LjU5IEwgNTEwLjUwIDYwMC4wMCBMIDUwMy4yOCA2MDAuMDAgTCA1MDMuMjggNTA4LjYwIEwgNDk1Ljg3IDUwNS43MSBMIDQ4OS4wOCA1MDIuNTEgTCA0ODIuODYgNDk5LjAyIEwgNDc3LjE3IDQ5NS4yMyBMIDQ3MS45OSA0OTEuMTYgTCA0NjcuMjcgNDg2Ljc5IEwgNDYzLjAwIDQ4Mi4xMyBMIDQ2OC43MyA0NzcuMjkgTCA0NzQuMjkgNDczLjI3IEwgNDc5LjY5IDQ2OS45OSBMIDQ4NC45NCA0NjcuNDAgTCA0OTAuMDkgNDY1LjQ0IEwgNDk1LjE0IDQ2NC4wNyBMIDUwMC4xMyA0NjMuMjcgTCA1MDUuMDggNDYzLjAwIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIiIGlkPSLmpK3lnIblvaItMyIgbm9kZS1pZD0iNjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjEzNyIgdGFyZ2V0LXdpZHRoPSI4NiIgdGFyZ2V0LXg9IjQ2MyIgdGFyZ2V0LXk9IjQ2MyI+PC9wYXRoPjxwYXRoIGQ9Ik0gNTAwLjM3IDU0My4wMCBMIDQ3OS44MCA1NTQuODEgTCA0NjMuNDEgNTY0Ljc5IEwgNDUwLjYyIDU3My4xNyBMIDQ0MC44OCA1ODAuMTQgTCA0MzMuNjYgNTg1Ljg5IEwgNDI4LjUyIDU5MC42MCBMIDQyNS4wNSA1OTQuNDMgTCA0MjIuODYgNTk3LjUzIEwgNDIxLjIzIDYwMC45OCBMIDQyMC4yOSA2MDQuMzkgTCA0MjAuMDAgNjA3LjgxIEwgNDIwLjI3IDYxMS4yNSBMIDQyMS4wMyA2MTQuNTkgTCA0MjIuMjkgNjE3Ljg3IEwgNDIzLjk3IDYyMC45OCBMIDQyNS45OCA2MjMuODYgTCA0MjguMzQgNjI2LjUzIEwgNDMwLjk4IDYyOC45MyBMIDQzMy43NyA2MzAuOTQgTCA0MzYuNzMgNjMyLjU5IEwgNDM5Ljg2IDYzMy44NiBMIDQ0Mi45NiA2MzQuNjEgTCA0NDYuMDYgNjM0Ljg4IEwgNDU3LjE0IDYzNC45MCBMIDQ3My43OCA2MzQuOTQgTCA0OTQuNDMgNjM0Ljk4IEwgNTE3LjU0IDYzNS4wMCBMIDU0MS41NiA2MzQuOTcgTCA1NjQuOTIgNjM0Ljg4IEwgNTY5LjE5IDYzMy4zNCBMIDU3Mi44MiA2MzEuNjkgTCA1NzUuODggNjI5Ljk0IEwgNTc4LjQzIDYyOC4xMCBMIDU4MS41OCA2MjUuMjEgTCA1ODMuOTYgNjIyLjI5IEwgNTg1LjY4IDYxOS4zNCBMIDU4Ni45NSA2MTYuMTUgTCA1ODcuNzEgNjEzLjA3IEwgNTg3Ljk5IDYxMC4wNyBMIDU4Ny44NyA2MDcuMDQgTCA1ODcuNDIgNjA0LjI5IEwgNTg2LjY2IDYwMS43OCBMIDU4NS41OCA1OTkuMzggTCA1ODQuMzcgNTk3LjQ2IEwgNTgzLjAyIDU5NS45NCBMIDU3MC45MyA1ODUuMDQgTCA1NTkuNjAgNTc1LjQwIEwgNTQ5LjAwIDU2Ni45MiBMIDUzOS4wOCA1NTkuNTIgTCA1MjkuODEgNTUzLjEyIEwgNTIxLjE0IDU0Ny42NCBMIDUxMy4wNCA1NDMuMDAgTCA1MDAuMzcgNTQzLjAwIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNikiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIiIGlkPSLot6/lvoQtMjMiIG5vZGUtaWQ9IjYxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI5MiIgdGFyZ2V0LXdpZHRoPSIxNjcuOTg5NTMiIHRhcmdldC14PSI0MjAuMDAwMjciIHRhcmdldC15PSI1NDMiPjwvcGF0aD48cGF0aCBkPSJNIDQ1MC4xOCA2MDYuMjYgTCA0NTEuMzIgNjA4Ljc5IEwgNDUxLjg5IDYxMS4yNCBMIDQ1MS45MiA2MTMuNjYgTCA0NTEuNDIgNjE1Ljc2IEwgNDUwLjgwIDYxNy4wMSBMIDQ0OS45NSA2MTguMDMgTCA0NDguODkgNjE4Ljg0IEwgNDQ3LjY1IDYxOS4zNiBMIDQ0Ni4zNSA2MTkuNTggTCA0NDQuOTUgNjE5LjUwIEwgNDQyLjg4IDYxOC44OCBMIDQ0MC44MCA2MTcuNjQgTCA0MzguOTYgNjE1LjkzIEwgNDM3LjM0IDYxMy42NyBMIDQzNi4xOSA2MTEuMTMgTCA0MzUuNjMgNjA4LjY4IEwgNDM1LjYwIDYwNi4yNiBMIDQzNi4wOSA2MDQuMTYgTCA0MzYuNzIgNjAyLjkxIEwgNDM3LjU2IDYwMS44OSBMIDQzOC42MyA2MDEuMDggTCA0MzkuODcgNjAwLjU2IEwgNDQxLjE3IDYwMC4zNCBMIDQ0Mi41NyA2MDAuNDIgTCA0NDQuNjMgNjAxLjA0IEwgNDQ2LjcxIDYwMi4yOCBMIDQ0OC41NiA2MDQuMDAgTCA0NTAuMTggNjA2LjI2IFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNykiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIiIGlkPSLmpK3lnIblvaIiIG5vZGUtaWQ9IjYyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxOS4yMzk2MjQiIHRhcmdldC13aWR0aD0iMTYuMzE5MDYxIiB0YXJnZXQteD0iNDM1LjU5ODMiIHRhcmdldC15PSI2MDAuMzQyNSI+PC9wYXRoPjwvZz48ZyBub2RlLWlkPSIxNDUiPjxwYXRoIGQ9Ik0gNjIwLjA3IDYyOS4wMCBMIDYzNy4wMCA2MjkuMDAgTCA2MjguNTMgNjU5LjAwIEwgNjEzLjAwIDY1OS4wMCBaIiBmaWxsPSIjY2YzODMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIzIiBpZD0i6Lev5b6ELTIxIiBub2RlLWlkPSI2NCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMzAiIHRhcmdldC13aWR0aD0iMjQiIHRhcmdldC14PSI2MTMiIHRhcmdldC15PSI2MjkiPjwvcGF0aD48cGF0aCBkPSJNIDYxNi4wNyA2MjkuMDAgTCA2MzMuMDAgNjI5LjAwIEwgNjI0LjUzIDY1OS4wMCBMIDYwOS4wMCA2NTkuMDAgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC04KSIgZmlsbC1ydWxlPSJldmVub2RkIiBncm91cC1pZD0iMyIgaWQ9Iui3r+W+hC0yMSIgbm9kZS1pZD0iNjUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjMwIiB0YXJnZXQtd2lkdGg9IjI0IiB0YXJnZXQteD0iNjA5IiB0YXJnZXQteT0iNjI5Ij48L3BhdGg+PHBhdGggZD0iTSA2NDkuMTYgNTM5LjY5IEwgNTc3LjA3IDYxMi42OSBMIDU3Ni4yMCA2MTQuMDMgTCA1NzUuOTIgNjE1LjUzIEwgNTc2LjIyIDYxNy4wMiBMIDU3Ny4xMSA2MTguMzUgTCA1NzguMDAgNjE5LjAxIEwgNTc5LjA1IDYxOS40MSBMIDY4Mi4xNyA2NDIuNDcgTCA2ODMuNzcgNjQyLjUwIEwgNjg1LjE4IDY0MS45NSBMIDY4Ni4yOSA2NDAuOTAgTCA2ODYuOTUgNjM5LjQ0IEwgNjg3LjA0IDYzOC4zOCBMIDY4Ni44NSA2MzcuMzQgTCA2NTUuODEgNTQxLjI3IEwgNjU1LjAyIDUzOS44NyBMIDY1My44MyA1MzguOTQgTCA2NTIuMzYgNTM4LjUxIEwgNjUwLjc3IDUzOC42OSBMIDY0OS45MSA1MzkuMDkgTCA2NDkuMTYgNTM5LjY5IFoiIGZpbGw9IiNkMTMzMmIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjMiIGlkPSLot6/lvoQtMjAiIG5vZGUtaWQ9IjY2IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMDMuOTkwNDIiIHRhcmdldC13aWR0aD0iMTExLjExNzg2IiB0YXJnZXQteD0iNTc1LjkxOTUiIHRhcmdldC15PSI1MzguNTEyNDUiPjwvcGF0aD48cGF0aCBkPSJNIDY0NS4xNiA1MzkuNjkgTCA1NzMuMDcgNjEyLjY5IEwgNTcyLjIwIDYxNC4wMyBMIDU3MS45MiA2MTUuNTMgTCA1NzIuMjIgNjE3LjAyIEwgNTczLjExIDYxOC4zNSBMIDU3NC4wMCA2MTkuMDEgTCA1NzUuMDUgNjE5LjQxIEwgNjc4LjE3IDY0Mi40NyBMIDY3OS43NyA2NDIuNTAgTCA2ODEuMTggNjQxLjk1IEwgNjgyLjI5IDY0MC45MCBMIDY4Mi45NSA2MzkuNDQgTCA2ODMuMDQgNjM4LjM4IEwgNjgyLjg1IDYzNy4zNCBMIDY1MS44MSA1NDEuMjcgTCA2NTEuMDIgNTM5Ljg3IEwgNjQ5LjgzIDUzOC45NCBMIDY0OC4zNiA1MzguNTEgTCA2NDYuNzcgNTM4LjY5IEwgNjQ1LjkxIDUzOS4wOSBMIDY0NS4xNiA1MzkuNjkgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC05KSIgZmlsbC1ydWxlPSJldmVub2RkIiBncm91cC1pZD0iMyIgaWQ9Iui3r+W+hC0yMCIgbm9kZS1pZD0iNjciIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjEwMy45OTA0MiIgdGFyZ2V0LXdpZHRoPSIxMTEuMTE3ODYiIHRhcmdldC14PSI1NzEuOTE5NSIgdGFyZ2V0LXk9IjUzOC41MTI0NSI+PC9wYXRoPjxwYXRoIGQ9Ik0gNjM3LjA2IDYwOC45OCBMIDY0Ny41MSA1ODIuNzkgTCA2NDIuNzkgNTgxLjA3IEwgNjMzLjkxIDYwNy44NCBMIDYzNy4wNiA2MDguOTggWiBNIDYzMS45NCA2MTguMTUgTCA2MzMuMjQgNjE4LjM3IEwgNjM0LjQ5IDYxOC4xMCBMIDYzNS40NiA2MTcuMzkgTCA2MzYuMTQgNjE2LjIzIEwgNjM2LjM1IDYxNC45NiBMIDYzNi4wNiA2MTMuNzkgTCA2MzUuMjggNjEyLjc2IEwgNjM0LjE0IDYxMi4xMSBMIDYzMi44OCA2MTEuODggTCA2MzEuNjQgNjEyLjE4IEwgNjMwLjY0IDYxMi44OSBMIDYzMC4wMCA2MTQuMDAgTCA2MjkuNzggNjE1LjI2IEwgNjMwLjA3IDYxNi41MCBMIDYzMC44MyA2MTcuNDkgTCA2MzEuOTQgNjE4LjE1IFoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjMiIGlkPSLvvIEiIG5vZGUtaWQ9IjY4IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIzNy4yOTkxOTQiIHRhcmdldC13aWR0aD0iMTcuNzM3MDYiIHRhcmdldC14PSI2MjkuNzc1MjciIHRhcmdldC15PSI1ODEuMDcxNjYiPjwvcGF0aD48L2c+PHBhdGggZD0iTSA2MjUuMDAgNjU5LjQ5IEwgNDgyLjAwIDY1OS40NCBMIDM5My4zNyA3MDIuNDggTCA0ODIuMDAgNzQyLjAwIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMTApIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSLot6/lvoQtMjQiIG5vZGUtaWQ9IjY5IiBzdHJva2U9Im5vbmUiIHRhcmdldC1oZWlnaHQ9IjgyLjU1ODQ3IiB0YXJnZXQtd2lkdGg9IjIzMS42MjYzNCIgdGFyZ2V0LXg9IjM5My4zNzM2NiIgdGFyZ2V0LXk9IjY1OS40NDE1Ij48L3BhdGg+PC9zdmc+", hg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBoZWlnaHQ9IjEwMjQiIGxlZ2FjeS1tZXRyaWNzPSJmYWxzZSIgbm9kZS1pZD0iMSIgc2lsbHl2Zz0idHJ1ZSIgdGVtcGxhdGUtaGVpZ2h0PSIxMDI0IiB0ZW1wbGF0ZS13aWR0aD0iMTAyNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB3aWR0aD0iMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnMgbm9kZS1pZD0iODIiPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTEiIG5vZGUtaWQ9IjUiIHgxPSIwLjUiIHgyPSIwLjUiIHkxPSIxLjAwMTIyMjciIHkyPSItMC4wMDA1Nzk4MzI4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZGY1ZjciIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZhZDRkMiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtMiIgbm9kZS1pZD0iOCIgeDE9IjAuNTAwODQzOSIgeDI9IjAuNTAwODQzOSIgeTE9IjEiIHkyPSIwLjAwMDA2NDk0NzM4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4xIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmRlY2ViIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC0zIiBub2RlLWlkPSIxMSIgeDE9IjAuNTAwMDQ1OSIgeDI9IjAuNTAwMDQ1OSIgeTE9IjAuOTk5MzEyIiB5Mj0iLTAuMDAwODExMjc3MzYiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYWQ2ZDQiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTQiIG5vZGUtaWQ9IjE0IiB4MT0iMC41IiB4Mj0iMC41IiB5MT0iMSIgeTI9IjAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuMTMiIHN0b3AtY29sb3I9IiNmZWZjZmIiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuNDEiIHN0b3AtY29sb3I9IiNmZWZjZmIiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuODEiIHN0b3AtY29sb3I9IiNmOWQ4ZDUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmOWQ4ZDUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTUiIG5vZGUtaWQ9IjIwIiB4MT0iMC4zMzc2NDQ5NiIgeDI9IjAuNSIgeTE9IjAuNTYyOTYwMiIgeTI9IjAuNDI2NTczMjgiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZjNmMiIgc3RvcC1vcGFjaXR5PSIwIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZlMmUwIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC02IiBub2RlLWlkPSIyMyIgeDE9IjAuMDY4NTM2IiB4Mj0iMC45MzkwMzkyIiB5MT0iMC40NTU2NTkyIiB5Mj0iMC40OTM0NzkzNCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjc4NDgwIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjY0YTQ1Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC03IiBub2RlLWlkPSIyNiIgeDE9IjAuMzg4NDM0IiB4Mj0iMC4zMjA4NTE5IiB5MT0iMC40NTY0ODI3NCIgeTI9IjAuNTM2MDQ4NSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmJjM2MzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjY0YTQ1IiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTgiIG5vZGUtaWQ9IjI5IiB4MT0iMC41IiB4Mj0iMC41IiB5MT0iMCIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y1MmQyMiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2I5MTEwNCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0ibGluZWFyR3JhZGllbnQtOSIgbm9kZS1pZD0iMzIiIHgxPSIwLjUiIHgyPSIwLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmNkOGQ3Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjc4MzdjIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJsaW5lYXJHcmFkaWVudC0xMCIgbm9kZS1pZD0iMzUiIHgxPSIwLjUiIHgyPSIwLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTM3MzZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTM3MzZmIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTExIiBub2RlLWlkPSIzOCIgeDE9IjAuMTM3OTU0MSIgeDI9IjAuNzU5NjE1MiIgeTE9IjAuMTc4MDk1NjciIHkyPSIwLjg5NTczMDU2Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmYmM2YzQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjk1OGUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImxpbmVhckdyYWRpZW50LTEyIiBub2RlLWlkPSI0MSIgeDE9IjAuNSIgeDI9IjAuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZTk3OTEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmMTcxNmMiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNIDAuMDAgMC4wMCBMIDEwMjQuMDAgMC4wMCBMIDEwMjQuMDAgMTAyNC4wMCBMIDAuMDAgMTAyNC4wMCBaIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG5vZGUtaWQ9IjE2NCIgc3Ryb2tlPSJub25lIiB0YXJnZXQtaGVpZ2h0PSIxMDI0IiB0YXJnZXQtd2lkdGg9IjEwMjQiIHRhcmdldC14PSIwIiB0YXJnZXQteT0iMCI+PC9wYXRoPjxnIG5vZGUtaWQ9IjE2NiI+PHBhdGggZD0iTSAxMDEuMzQgNjA2LjAwIEwgMTA3LjAwIDY2Ny4wMCBMIDcyLjAwIDY2Mi45MyBaIiBmaWxsPSIjZmFkNGQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI0NyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNjEiIHRhcmdldC13aWR0aD0iMzUiIHRhcmdldC14PSI3MiIgdGFyZ2V0LXk9IjYwNiI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTAxLjAwIDYwNi4wMCBMIDEzOC4wMCA2NTQuMjEgTCAxMDYuNjcgNjY3LjAwIFoiIGZpbGw9IiNmZGM2YzMiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjQ4IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI2MSIgdGFyZ2V0LXdpZHRoPSIzNyIgdGFyZ2V0LXg9IjEwMSIgdGFyZ2V0LXk9IjYwNiI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTY3LjIzIDM0Mi4wMyBMIDE2NS45OSAzMzcuMTAgTCAxNjQuMjYgMzMyLjUxIEwgMTYyLjAyIDMyOC4yMiBMIDE1OS4zMCAzMjQuMjEgTCAxNTYuMjAgMzIwLjYxIEwgMTUyLjcwIDMxNy4zNyBMIDE0OC44NSAzMTQuNTYgTCAxNDQuNzIgMzEyLjIzIEwgMTQwLjI5IDMxMC4zNSBMIDEzNS42OCAzMDkuMDEgTCAxMzAuODggMzA4LjIzIEwgMTI1Ljg1IDMwOC4wMSBMIDEyMS43OSAzMDguMTggTCAxMTcuODUgMzA4LjczIEwgMTEzLjk5IDMwOS42MyBMIDExMC4yMSAzMTAuOTAgTCAxMDYuNTYgMzEyLjUyIEwgMTAzLjEwIDMxNC40NiBMIDk5LjgxIDMxNi43MyBMIDk2LjY4IDMxOS4zNSBMIDkzLjI0IDMxOC4wMCBMIDg5Ljc0IDMxNy4wNCBMIDg2LjE2IDMxNi40NiBMIDgyLjQ4IDMxNi4yNiBMIDc4LjU4IDMxNi40NCBMIDc0Ljg3IDMxNy4wMyBMIDcxLjMyIDMxOC4wMiBMIDY3LjkwIDMxOS40MyBMIDY0LjY1IDMyMS4yMSBMIDYxLjY3IDMyMy4zMSBMIDU4LjkzIDMyNS43MyBMIDU2LjQzIDMyOC40OCBMIDU0LjI1IDMzMS40OSBMIDUyLjQ0IDMzNC43MyBMIDUwLjk3IDMzOC4yMiBMIDQ5Ljg2IDM0Mi4wMCBMIDQ1Ljk3IDM0My4xOSBMIDQyLjQ0IDM0NC44NyBMIDM5LjIyIDM0Ny4wNiBMIDM2LjM1IDM0OS42OSBMIDMzLjkyIDM1Mi42NiBMIDMxLjkwIDM1Ni4wMSBMIDMwLjM5IDM1OS42MSBMIDI5LjQyIDM2My40MyBMIDI5LjAwIDM2Ny41MSBMIDI5LjM3IDM3MS4yNCBMIDMwLjE4IDM3NC43MyBMIDMxLjQzIDM3OC4wMyBMIDMzLjA5IDM4MS4xNCBMIDM1LjA5IDM4My45NiBMIDM3LjQ0IDM4Ni41MSBMIDQwLjA5IDM4OC43NCBMIDQyLjk4IDM5MC42MSBMIDQ2LjE1IDM5Mi4xMSBMIDQ5LjQ4IDM5My4xOSBMIDUyLjk4IDM5My44MiBMIDU2LjY4IDM5My45OSBMIDE2MC4zMiAzOTMuOTkgTCAxNjQuMDIgMzkzLjgyIEwgMTY3LjUyIDM5My4yMCBMIDE3MC44NiAzOTIuMTIgTCAxNzQuMDIgMzkwLjYyIEwgMTc2LjkyIDM4OC43NSBMIDE3OS41NyAzODYuNTIgTCAxODEuOTIgMzgzLjk3IEwgMTgzLjkyIDM4MS4xNSBMIDE4NS41OCAzNzguMDQgTCAxODYuODIgMzc0Ljc0IEwgMTg3LjYzIDM3MS4yNCBMIDE4OC4wMCAzNjcuNTEgTCAxODcuNTggMzYzLjQ0IEwgMTg2LjYyIDM1OS42MyBMIDE4NS4xMSAzNTYuMDQgTCAxODMuMTEgMzUyLjY5IEwgMTgwLjY4IDM0OS43MiBMIDE3Ny44MiAzNDcuMDkgTCAxNzQuNjIgMzQ0LjkxIEwgMTcxLjEwIDM0My4yMiBMIDE2Ny4yMyAzNDIuMDMgTCAxNjcuMjMgMzQyLjAzIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjQ5IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI4NS45ODQ5MjQiIHRhcmdldC13aWR0aD0iMTU5IiB0YXJnZXQteD0iMjkiIHRhcmdldC15PSIzMDguMDA2ODQiPjwvcGF0aD48cGF0aCBkPSJNIDc2OC43MSAyMDMuMTAgTCA3NjYuNzcgMjAwLjM5IEwgNzY0LjYwIDE5Ny45NSBMIDc2Mi4xOSAxOTUuNzggTCA3NTkuNTcgMTkzLjg4IEwgNzU2Ljc5IDE5Mi4yOCBMIDc1My44NCAxOTAuOTggTCA3NTAuNzcgMTkwLjAwIEwgNzQ3LjYwIDE4OS4zNSBMIDc0NC4zMSAxODkuMDUgTCA3NDIuMjIgMTg2LjE5IEwgNzM5Ljg4IDE4My42NSBMIDczNy4yOSAxODEuNDAgTCA3MzQuNDcgMTc5LjQ1IEwgNzMxLjQ4IDE3Ny44NSBMIDcyOC4zMSAxNzYuNTggTCA3MjUuMDIgMTc1LjY3IEwgNzIxLjYzIDE3NS4xNSBMIDcxOC4xMiAxNzUuMDAgTCA3MTMuOTEgMTc1LjI1IEwgNzA5Ljg2IDE3Ni4wNCBMIDcwNS45NCAxNzcuMzcgTCA3MDIuMjIgMTc5LjIxIEwgNjk4Ljc4IDE4MS41MiBMIDY5NS42MCAxODQuMzQgTCA2OTIuODMgMTgzLjYwIEwgNjkwLjAyIDE4My4xNSBMIDY4Ny4xNiAxODMuMDAgTCA2ODMuODIgMTgzLjIxIEwgNjgwLjY5IDE4My43NiBMIDY3Ny43NCAxODQuNjQgTCA2NzQuOTUgMTg1Ljg1IEwgNjcxLjQ2IDE4Ny45NCBMIDY2OC40OCAxOTAuNDUgTCA2NjUuOTQgMTkzLjM4IEwgNjY0LjM3IDE5NS44MyBMIDY2My4xNyAxOTguNDEgTCA2NjIuMzIgMjAxLjE1IEwgNjYxLjgyIDIwNC4wNyBMIDY1OC41MyAyMDUuMTMgTCA2NTUuNTQgMjA2LjYxIEwgNjUyLjgwIDIwOC41MCBMIDY1MC4zNyAyMTAuNzYgTCA2NDguMjkgMjEzLjMxIEwgNjQ2LjU3IDIxNi4xNyBMIDY0NS4yNiAyMTkuMjUgTCA2NDQuNDAgMjIyLjUxIEwgNjQ0LjAwIDIyNS45OSBMIDY0NC4yNCAyMjkuMTQgTCA2NDQuOTEgMjMyLjExIEwgNjQ2LjAxIDIzNC45MyBMIDY0Ny40OSAyMzcuNTkgTCA2NDkuMzAgMjQwLjAyIEwgNjUxLjQ2IDI0Mi4yNSBMIDY1My44OSAyNDQuMTkgTCA2NTYuNTcgMjQ1LjgzIEwgNjU5LjUyIDI0Ny4xOSBMIDY2Mi42MiAyNDguMTcgTCA2NjUuODggMjQ4Ljc4IEwgNjY5LjM0IDI0OS4wMCBMIDc2Ni42NiAyNDkuMDAgTCA3NzAuMTcgMjQ4Ljc4IEwgNzczLjQ2IDI0OC4xNyBMIDc3Ni41NiAyNDcuMTkgTCA3NzkuNTEgMjQ1LjgzIEwgNzgyLjE5IDI0NC4xOSBMIDc4NC42MSAyNDIuMjUgTCA3ODYuNzYgMjQwLjAyIEwgNzg4LjU1IDIzNy41OSBMIDc5MC4wMiAyMzQuOTMgTCA3OTEuMTAgMjMyLjExIEwgNzkxLjc2IDIyOS4xNCBMIDc5Mi4wMCAyMjUuOTkgTCA3OTEuODIgMjIyLjk4IEwgNzkxLjI1IDIyMC4xNSBMIDc5MC4zMSAyMTcuNDcgTCA3ODguOTcgMjE0LjkxIEwgNzg2LjY5IDIxMS44MCBMIDc4My45MyAyMDkuMTAgTCA3ODAuNjIgMjA2Ljc3IEwgNzc3LjkyIDIwNS4zOCBMIDc3NS4wNiAyMDQuMzAgTCA3NzIuMDAgMjAzLjU0IEwgNzY4LjcxIDIwMy4xMCBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxIiBpZD0i6Lev5b6EIiBub2RlLWlkPSI1MCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNzMuOTk1MTkiIHRhcmdldC13aWR0aD0iMTQ3Ljk5NjQiIHRhcmdldC14PSI2NDQiIHRhcmdldC15PSIxNzUuMDA0OCI+PC9wYXRoPjxwYXRoIGQ9Ik0gOTQ5LjYyIDE3MS43NCBMIDk0Ny4wMCAxNjYuOTUgTCA5NDQuMDMgMTYyLjU0IEwgOTQwLjY5IDE1OC40NyBMIDkzNi45OSAxNTQuNzQgTCA5MzIuOTUgMTUxLjM1IEwgOTI4LjY3IDE0OC4zOCBMIDkyNC4xNCAxNDUuODEgTCA5MTkuMzMgMTQzLjY1IEwgOTE0LjM1IDE0MS45MyBMIDkwOS4yNCAxNDAuNjkgTCA5MDMuOTcgMTM5LjkzIEwgODk4LjUxIDEzOS42NCBMIDg5Mi40NiAxMzkuOTggTCA4ODYuNTYgMTQwLjk1IEwgODgwLjc4IDE0Mi41NCBMIDg3NS4yMSAxNDQuNzMgTCA4NjkuOTEgMTQ3LjQ5IEwgODY0Ljg2IDE1MC44NSBMIDg2Mi41MSAxNDYuNzEgTCA4NTkuODkgMTQyLjg2IEwgODU3LjAxIDEzOS4zMCBMIDg1My44NiAxMzYuMDAgTCA4NDkuMjcgMTMyLjAxIEwgODQ0LjM1IDEyOC41NyBMIDgzOS4wOCAxMjUuNjcgTCA4MzMuNTMgMTIzLjM0IEwgODI3Ljc4IDEyMS42MSBMIDgyMS44MCAxMjAuNDkgTCA4MTcuMjUgMTIwLjA3IEwgODEyLjY3IDEyMC4wMyBMIDgwOC4wMyAxMjAuMzYgTCA4MDMuMzIgMTIxLjA4IEwgNzk4LjY4IDEyMi4yMSBMIDc5NC4yNiAxMjMuNjYgTCA3OTAuMDQgMTI1LjQ1IEwgNzg2LjAwIDEyNy41NyBMIDc4MC45MCAxMzAuODggTCA3NzYuMjQgMTM0LjY3IEwgNzcyLjAwIDEzOC45MyBMIDc2OC4yMyAxNDMuNjIgTCA3NjQuOTkgMTQ4LjY3IEwgNzYyLjI2IDE1NC4xMSBMIDc2MC42MSAxNTguMzYgTCA3NTkuMzEgMTYyLjc1IEwgNzU4LjM2IDE2Ny4zMCBMIDc1Ny43NiAxNzIuMDIgTCA3NTIuODAgMTczLjg1IEwgNzQ4LjE3IDE3Ni4wMyBMIDc0My44MyAxNzguNTggTCA3MzkuNzYgMTgxLjUwIEwgNzM1Ljk2IDE4NC43NyBMIDczMi41MCAxODguMzAgTCA3MjkuMzggMTkyLjExIEwgNzI2LjU4IDE5Ni4xOSBMIDcyNC4xNSAyMDAuNTEgTCA3MjIuMTIgMjA0Ljk4IEwgNzIwLjQ3IDIwOS42NCBMIDcxOS4yMSAyMTQuNTAgTCA3MTguMzkgMjE5LjQzIEwgNzE4LjAzIDIyNC40NSBMIDcxOC4xMSAyMjkuNTcgTCA3MTguNjYgMjM0LjgxIEwgNzE5LjcxIDIzOS45OCBMIDcyMS4xNyAyNDQuODkgTCA3MjMuMDIgMjQ5LjU2IEwgNzI1LjI5IDI1NC4wMiBMIDcyNy45NCAyNTguMjggTCA3MzAuOTEgMjYyLjIzIEwgNzM0LjE5IDI2NS45MCBMIDczNy44MSAyNjkuMjggTCA3NDEuNzAgMjcyLjM0IEwgNzQ1LjgyIDI3NS4wMyBMIDc1MC4xOCAyNzcuMzcgTCA3NTQuODAgMjc5LjM1IEwgNzU5LjU1IDI4MC45MiBMIDc2NC40NSAyODIuMDUgTCA3NjkuNTMgMjgyLjc0IEwgNzc0LjgwIDI4My4wMCBMIDkzMy4wNSAyODMuMDAgTCA5MzguMzYgMjgyLjc2IEwgOTQzLjQ2IDI4Mi4wNyBMIDk0OC40MCAyODAuOTQgTCA5NTMuMTcgMjc5LjM3IEwgOTU3LjgyIDI3Ny4zOCBMIDk2Mi4yMCAyNzUuMDQgTCA5NjYuMzMgMjcyLjMzIEwgOTcwLjI1IDI2OS4yNSBMIDk3My44OCAyNjUuODQgTCA5NzcuMTcgMjYyLjE1IEwgOTgwLjE0IDI1OC4xNyBMIDk4Mi44MCAyNTMuODkgTCA5ODUuMDYgMjQ5LjQwIEwgOTg2LjkxIDI0NC42OSBMIDk4OC4zNSAyMzkuNzUgTCA5ODkuMzggMjM0LjU1IEwgOTg5LjkxIDIyOS4yNyBMIDk4OS45NiAyMjQuMTIgTCA5ODkuNTYgMjE5LjA4IEwgOTg4LjcwIDIxNC4xMyBMIDk4Ny40MCAyMDkuMjYgTCA5ODUuNzEgMjA0LjU5IEwgOTgzLjYzIDIwMC4xMCBMIDk4MS4xNCAxOTUuNzkgTCA5NzguMjkgMTkxLjcxIEwgOTc1LjEyIDE4Ny45MiBMIDk3MS42MSAxODQuNDEgTCA5NjcuNzQgMTgxLjE2IEwgOTYzLjYyIDE3OC4yNyBMIDk1OS4yMyAxNzUuNzYgTCA5NTQuNTUgMTczLjYyIEwgOTQ5LjU0IDE3MS44NSBMIDk0OS42MiAxNzEuNzQgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0zKSIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNTEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjE2Mi45NzQ5OCIgdGFyZ2V0LXdpZHRoPSIyNzEuOTM2ODMiIHRhcmdldC14PSI3MTguMDI1NyIgdGFyZ2V0LXk9IjEyMC4wMjUwMiI+PC9wYXRoPjxnIG5vZGUtaWQ9IjE2OSI+PHBhdGggZD0iTSAxMDI0LjAwIDc0Mi4wMCBMIDEwMjMuNzIgNzQ3LjI2IEwgMTAyMi45MiA3NTIuNDkgTCAxMDIxLjU4IDc1Ny43NCBMIDEwMTkuNjggNzYzLjAyIEwgMTAxNy4xOSA3NjguMzUgTCAxMDE0LjA3IDc3My43NSBMIDEwMDkuOTkgNzc5LjYzIEwgMTAwNS4xMiA3ODUuNTggTCA5OTkuMzkgNzkxLjYyIEwgOTkyLjcyIDc5Ny43NiBMIDk4NS4wMyA4MDMuOTkgTCA5NzcuNDQgODA5LjUwIEwgOTY5LjAwIDgxNS4wNCBMIDk1OS42NiA4MjAuNjIgTCA5NDkuMzQgODI2LjI0IEwgOTM3Ljk4IDgzMS44OCBMIDkyNC4xMiA4MzguMTMgTCA5MDguOTEgODQ0LjM0IEwgODkyLjI0IDg1MC40OCBMIDg3NC4wNCA4NTYuNTUgTCA4NTQuNzMgODYyLjM1IEwgODM0LjI1IDg2Ny44OSBMIDgxMi41NSA4NzMuMTUgTCA3OTAuNzYgODc3Ljg4IEwgNzY4LjAwIDg4Mi4zMCBMIDc0NC4yMyA4ODYuMzggTCA3MjAuNDEgODg5Ljk3IEwgNjk1LjgyIDg5My4yMCBMIDY3MC40NSA4OTYuMDUgTCA2NDUuMDQgODk4LjQ0IEwgNjE5LjA5IDkwMC40MiBMIDU5Mi41OCA5MDEuOTggTCA1NjYuMDUgOTAzLjEwIEwgNTM5LjE5IDkwMy43NyBMIDUxMi4wMCA5MDQuMDAgTCA0ODQuODEgOTAzLjc3IEwgNDU3Ljk1IDkwMy4xMCBMIDQzMS40MiA5MDEuOTggTCA0MDQuOTEgOTAwLjQyIEwgMzc4Ljk2IDg5OC40NCBMIDM1My41NSA4OTYuMDUgTCAzMjguMTggODkzLjIwIEwgMzAzLjU5IDg4OS45NyBMIDI3OS43NyA4ODYuMzggTCAyNTYuMDAgODgyLjMwIEwgMjMzLjI0IDg3Ny44OCBMIDIxMS40NSA4NzMuMTUgTCAxODkuNzUgODY3Ljg5IEwgMTY5LjI3IDg2Mi4zNSBMIDE0OS45NiA4NTYuNTUgTCAxMzEuNzYgODUwLjQ4IEwgMTE1LjA5IDg0NC4zNCBMIDk5Ljg4IDgzOC4xMyBMIDg2LjAyIDgzMS44OCBMIDc0LjY2IDgyNi4yNCBMIDY0LjM0IDgyMC42MiBMIDU1LjAwIDgxNS4wNCBMIDQ2LjU2IDgwOS41MCBMIDM4Ljk3IDgwMy45OSBMIDMxLjI4IDc5Ny43NiBMIDI0LjYxIDc5MS42MiBMIDE4Ljg4IDc4NS41OCBMIDE0LjAxIDc3OS42MyBMIDkuOTMgNzczLjc1IEwgNi44MSA3NjguMzUgTCA0LjMyIDc2My4wMiBMIDIuNDIgNzU3Ljc0IEwgMS4wOCA3NTIuNDkgTCAwLjI4IDc0Ny4yNiBMIDAuMDAgNzQyLjAwIEwgMC4yOCA3MzYuNzQgTCAxLjA4IDczMS41MSBMIDIuNDIgNzI2LjI2IEwgNC4zMiA3MjAuOTggTCA2LjgxIDcxNS42NSBMIDkuOTMgNzEwLjI1IEwgMTQuMDEgNzA0LjM3IEwgMTguODggNjk4LjQyIEwgMjQuNjEgNjkyLjM4IEwgMzEuMjggNjg2LjI0IEwgMzguOTcgNjgwLjAxIEwgNDYuNTYgNjc0LjUwIEwgNTUuMDAgNjY4Ljk2IEwgNjQuMzQgNjYzLjM4IEwgNzQuNjYgNjU3Ljc2IEwgODYuMDIgNjUyLjEyIEwgOTkuODggNjQ1Ljg3IEwgMTE1LjA5IDYzOS42NiBMIDEzMS43NiA2MzMuNTIgTCAxNDkuOTYgNjI3LjQ1IEwgMTY5LjI3IDYyMS42NSBMIDE4OS43NSA2MTYuMTEgTCAyMTEuNDUgNjEwLjg1IEwgMjMzLjI0IDYwNi4xMiBMIDI1Ni4wMCA2MDEuNzAgTCAyNzkuNzcgNTk3LjYyIEwgMzAzLjU5IDU5NC4wMyBMIDMyOC4xOCA1OTAuODAgTCAzNTMuNTUgNTg3Ljk1IEwgMzc4Ljk2IDU4NS41NiBMIDQwNC45MSA1ODMuNTggTCA0MzEuNDIgNTgyLjAyIEwgNDU3Ljk1IDU4MC45MCBMIDQ4NC44MSA1ODAuMjMgTCA1MTIuMDAgNTgwLjAwIEwgNTM5LjE5IDU4MC4yMyBMIDU2Ni4wNSA1ODAuOTAgTCA1OTIuNTggNTgyLjAyIEwgNjE5LjA5IDU4My41OCBMIDY0NS4wNCA1ODUuNTYgTCA2NzAuNDUgNTg3Ljk1IEwgNjk1LjgyIDU5MC44MCBMIDcyMC40MSA1OTQuMDMgTCA3NDQuMjMgNTk3LjYyIEwgNzY4LjAwIDYwMS43MCBMIDc5MC43NiA2MDYuMTIgTCA4MTIuNTUgNjEwLjg1IEwgODM0LjI1IDYxNi4xMSBMIDg1NC43MyA2MjEuNjUgTCA4NzQuMDQgNjI3LjQ1IEwgODkyLjI0IDYzMy41MiBMIDkwOC45MSA2MzkuNjYgTCA5MjQuMTIgNjQ1Ljg3IEwgOTM3Ljk4IDY1Mi4xMiBMIDk0OS4zNCA2NTcuNzYgTCA5NTkuNjYgNjYzLjM4IEwgOTY5LjAwIDY2OC45NiBMIDk3Ny40NCA2NzQuNTAgTCA5ODUuMDMgNjgwLjAxIEwgOTkyLjcyIDY4Ni4yNCBMIDk5OS4zOSA2OTIuMzggTCAxMDA1LjEyIDY5OC40MiBMIDEwMDkuOTkgNzA0LjM3IEwgMTAxNC4wNyA3MTAuMjUgTCAxMDE3LjE5IDcxNS42NSBMIDEwMTkuNjggNzIwLjk4IEwgMTAyMS41OCA3MjYuMjYgTCAxMDIyLjkyIDczMS41MSBMIDEwMjMuNzIgNzM2Ljc0IEwgMTAyNC4wMCA3NDIuMDAgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC00KSIgZmlsbC1vcGFjaXR5PSIwLjQwNzc0NDY1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIxLDQiIGlkPSLmpK3lnIblvaIiIG5vZGUtaWQ9IjUyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW9wYWNpdHk9IjAuNDA3NzQ0NjUiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMzI0IiB0YXJnZXQtd2lkdGg9IjEwMjQiIHRhcmdldC14PSIwIiB0YXJnZXQteT0iNTgwIj48L3BhdGg+PC9nPjxwYXRoIGQ9Ik0gOTA2LjAwIDYwNi4wMCBMIDkwMS4xMyA2NzAuMDAgTCA4NjUuMDAgNjU5LjUyIFoiIGZpbGw9IiNmYWQ0ZDIiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjUzIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI2NCIgdGFyZ2V0LXdpZHRoPSI0MSIgdGFyZ2V0LXg9Ijg2NSIgdGFyZ2V0LXk9IjYwNiI+PC9wYXRoPjxwYXRoIGQ9Ik0gOTA0Ljg1IDYwNi4wMCBMIDkzNS4wMCA2NjIuMzkgTCA5MDAuMDAgNjcwLjAwIFoiIGZpbGw9IiNmZGM2YzMiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjU0IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI2NCIgdGFyZ2V0LXdpZHRoPSIzNSIgdGFyZ2V0LXg9IjkwMCIgdGFyZ2V0LXk9IjYwNiI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjAxLjM3IDU5NC4wMCBMIDIwNi4wMCA2NDIuMDAgTCAxNzcuMDAgNjM4LjgxIFoiIGZpbGw9IiNmN2Q5ZDciIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjU1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI0OCIgdGFyZ2V0LXdpZHRoPSIyOSIgdGFyZ2V0LXg9IjE3NyIgdGFyZ2V0LXk9IjU5NCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjAwLjAwIDU5NC4wMCBMIDIzMC4wMCA2MzEuODkgTCAyMDQuNTUgNjQyLjAwIFoiIGZpbGw9IiNmZmNjYzgiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjEiIGlkPSLot6/lvoQiIG5vZGUtaWQ9IjU2IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSI0OCIgdGFyZ2V0LXdpZHRoPSIzMCIgdGFyZ2V0LXg9IjIwMCIgdGFyZ2V0LXk9IjU5NCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTQ4LjQ4IDU2NC4wMCBMIDE1OC4wMCA2NjUuMDAgTCA5NC4wMCA2NTguNzEgWiIgZmlsbD0iI2ZhZDRkMiIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNTciIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjEwMSIgdGFyZ2V0LXdpZHRoPSI2NCIgdGFyZ2V0LXg9Ijk0IiB0YXJnZXQteT0iNTY0Ij48L3BhdGg+PHBhdGggZD0iTSAxNDcuMDAgNTY0LjAwIEwgMjE0LjAwIDY0My4zNyBMIDE1Ni41MyA2NjUuMDAgWiIgZmlsbD0iI2ZkYzZjMyIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMSIgaWQ9Iui3r+W+hCIgbm9kZS1pZD0iNTgiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjEwMSIgdGFyZ2V0LXdpZHRoPSI2NyIgdGFyZ2V0LXg9IjE0NyIgdGFyZ2V0LXk9IjU2NCI+PC9wYXRoPjwvZz48cGF0aCBkPSJNIDY1OS43MSA2MzYuNTAgTCAzNTkuNTUgNjIxLjU0IEwgMjIxLjE0IDc0Mi4wMCBMIDQzMS40MSA3ODkuNjEgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC01KSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0i6Lev5b6ELTI0IiBub2RlLWlkPSI1OSIgc3Ryb2tlPSJub25lIiB0YXJnZXQtaGVpZ2h0PSIxNjguMDY2NCIgdGFyZ2V0LXdpZHRoPSI0MzguNTY5ODIiIHRhcmdldC14PSIyMjEuMTM5NzYiIHRhcmdldC15PSI2MjEuNTM4NyI+PC9wYXRoPjxwYXRoIGQ9Ik0gMzkxLjAwIDU5NS40NCBMIDUzMy4xNCA2NzUuMDAgTCA2MzEuNjkgNjI1LjUxIEwgNDY0LjQ2IDU0MC4wMCBaIiBmaWxsPSIjZjUyZDIyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIyIiBpZD0i6Lev5b6ELTMwIiBub2RlLWlkPSI2MSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTM1IiB0YXJnZXQtd2lkdGg9IjI0MC42OTE5NiIgdGFyZ2V0LXg9IjM5MSIgdGFyZ2V0LXk9IjU0MCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMzkyLjczIDU5Ni4wMCBMIDQ4NC4wMCA1NDQuNTYgTCA0NjcuODQgNTExLjAwIEwgMzYxLjAwIDU3NC44OCBaIiBmaWxsPSIjZjY0NTQwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIyIiBpZD0i6Lev5b6ELTMyIiBub2RlLWlkPSI2MiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iODUiIHRhcmdldC13aWR0aD0iMTIzIiB0YXJnZXQteD0iMzYxIiB0YXJnZXQteT0iNTExIj48L3BhdGg+PHBhdGggZD0iTSA2MjkuNDQgNjI4LjAwIEwgNjYyLjAwIDYwNS4wNCBMIDQ2Ny4xOSA1MTEuNTAgTCA0NzUuODQgNTQ2LjY3IFoiIGZpbGw9IiNmNjVjNTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgZ3JvdXAtaWQ9IjIiIGlkPSLot6/lvoQtMzMiIG5vZGUtaWQ9IjYzIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMTYuNDk3NTMiIHRhcmdldC13aWR0aD0iMTk0LjgwNjgiIHRhcmdldC14PSI0NjcuMTkzMiIgdGFyZ2V0LXk9IjUxMS41MDI0NyI+PC9wYXRoPjxwYXRoIGQ9Ik0gMzYyLjk0IDU3Mi41NyBMIDU0MC4wMCA2NjcuMDAgTCA1NDAuMDAgNjY3LjAwIEwgNjYyLjAwIDYwNS4wNCBMIDY2Mi4wMCA2MzUuMDEgTCA1NDkuMzIgNzA4LjIwIEwgNTQ3LjQxIDcwOS4yMSBMIDU0NS40NCA3MDkuODQgTCA1NDMuMzggNzEwLjEyIEwgNTQxLjI5IDcxMC4wNSBMIDUzOS4yNyA3MDkuNjEgTCA1MzcuMjggNzA4LjgwIEwgMzYwLjAwIDYxNy4zMyBMIDM2MC4wMCA2MTcuMzMgTCAzNjAuMDAgNTc0LjMzIEwgMzYwLjE2IDU3My41NSBMIDM2MC41OSA1NzIuOTIgTCAzNjEuMjIgNTcyLjQ5IEwgMzYyLjAwIDU3Mi4zMyBMIDM2Mi45NCA1NzIuNTcgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC02KSIgZmlsbC1ydWxlPSJldmVub2RkIiBncm91cC1pZD0iMiIgaWQ9Iui3r+W+hC0zMSIgbm9kZS1pZD0iNjQiIHN0cm9rZT0idXJsKCNsaW5lYXJHcmFkaWVudC03KSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTM3Ljc5MTYzIiB0YXJnZXQtd2lkdGg9IjMwMiIgdGFyZ2V0LXg9IjM2MCIgdGFyZ2V0LXk9IjU3Mi4zMzM0Ij48L3BhdGg+PHBhdGggZD0iTSA0MjEuODUgNjIyLjc2IEwgNDcyLjY5IDY1MS4wMCBMIDQ3My40NSA2NTEuNjUgTCA0NzMuODggNjUyLjUwIEwgNDczLjk3IDY1My40NSBMIDQ3My42NyA2NTQuNDAgTCA0NjkuNDMgNjYyLjA1IEwgNDY4Ljc4IDY2Mi44MiBMIDQ2Ny45NCA2NjMuMjUgTCA0NjYuOTkgNjYzLjMzIEwgNDY2LjA0IDY2My4wMyBMIDQ2Ni4wMyA2NjMuMDMgTCA0MTUuMTkgNjM0Ljc4IEwgNDE0LjQzIDYzNC4xMyBMIDQxNC4wMCA2MzMuMjkgTCA0MTMuOTIgNjMyLjM0IEwgNDE0LjIyIDYzMS4zOSBMIDQxOC40NSA2MjMuNzMgTCA0MTkuMTAgNjIyLjk3IEwgNDE5Ljk1IDYyMi41NCBMIDQyMC44OSA2MjIuNDUgTCA0MjEuODUgNjIyLjc1IEwgNDIxLjg1IDYyMi43NiBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTgpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIyIiBpZD0i55+p5b2iIiBub2RlLWlkPSI2NSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNDAuODc4NiIgdGFyZ2V0LXdpZHRoPSI2MC4wNTAzMjMiIHRhcmdldC14PSI0MTMuOTE2ODQiIHRhcmdldC15PSI2MjIuNDUzMDYiPjwvcGF0aD48cGF0aCBkPSJNIDQ2NC4wMCA0MTAuMDMgTCA0NzguODggMzk2LjY2IEwgNDc5LjgxIDM5Ni4wNCBMIDQ4MC44NSAzOTUuNzAgTCA0ODEuOTQgMzk1LjY2IEwgNDgzLjAzIDM5NS45MiBMIDY2My4yMSA0NjguMDMgTCA2NjQuODkgNDY4LjkwIEwgNjY2LjMzIDQ3MC4wMiBMIDY2Ny41NSA0NzEuMzkgTCA2NjguNTAgNDcyLjk2IEwgNjY5LjEzIDQ3NC42NyBMIDY2OS40NiA0NzYuNTQgTCA2NzguNzUgNTk2LjY4IEwgNjc4LjYzIDU5OC4wNCBMIDY3OC4wOCA1OTkuMjMgTCA2NzcuMTcgNjAwLjE4IEwgNjc1Ljk2IDYwMC44MCBMIDY1OS4zMyA2MDYuMDAgTCA2NTkuMzMgNjA2LjAwIEwgNjQzLjU0IDQ5MS4wMiBMIDQ2NC4wMCA0MTAuMDMgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC05KSIgZmlsbC1ydWxlPSJldmVub2RkIiBncm91cC1pZD0iMiIgaWQ9Iui3r+W+hC0zNyIgbm9kZS1pZD0iNjYiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjIxMC4zNDI3NyIgdGFyZ2V0LXdpZHRoPSIyMTQuNzU0MjciIHRhcmdldC14PSI0NjQiIHRhcmdldC15PSIzOTUuNjU3MjMiPjwvcGF0aD48cGF0aCBkPSJNIDY2Mi4wMCA2MDUuMDQgTCA2NTMuMTYgNDg5LjQ2IEwgNjUyLjgzIDQ4Ny41NyBMIDY1Mi4xOCA0ODUuODUgTCA2NTEuMjIgNDg0LjI3IEwgNjQ5Ljk4IDQ4Mi44OCBMIDY0OC41MiA0ODEuNzcgTCA2NDYuODAgNDgwLjkwIEwgNDY1LjQ0IDQxMC41NiBMIDQ2NC42OCA0MTAuNTggTCA0NjQuMTUgNDExLjEzIEwgNDY0LjA4IDQxMS41NSBMIDQ2OS44MSA1MTUuOTYgTCA0NjkuODEgNTE1Ljk2IEwgNjYyLjAwIDYwNS4wNCBaIiBmaWxsPSIjZjg4Njg0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIyIiBpZD0i6Lev5b6ELTM0IiBub2RlLWlkPSI2NyIgc3Ryb2tlPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEwKSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTk0LjQ4MTM4IiB0YXJnZXQtd2lkdGg9IjE5Ny45MTUyMiIgdGFyZ2V0LXg9IjQ2NC4wODQ3OCIgdGFyZ2V0LXk9IjQxMC41NjA0MiI+PC9wYXRoPjxwYXRoIGQ9Ik0gNDk1LjAwIDUwMS4wMCBMIDY1OS43MSA1ODEuNjggTCA2NTkuNzEgNjA2LjAwIEwgNDk1LjAwIDUyOS4yNyBaIiBmaWxsPSIjZjU3MzcxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGdyb3VwLWlkPSIyIiBpZD0i6Lev5b6ELTM2IiBub2RlLWlkPSI2OCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTA1IiB0YXJnZXQtd2lkdGg9IjE2NC43MDk2IiB0YXJnZXQteD0iNDk1IiB0YXJnZXQteT0iNTAxIj48L3BhdGg+PHBhdGggZD0iTSA0ODguMDEgNDE5LjIzIEwgNDk4LjAwIDUzMS4wMCBMIDQ2OC4wMCA1MTYuNjUgTCA0NjMuMDcgNDExLjUxIEwgNDYzLjMzIDQxMC43OSBMIDQ2NC4wMiA0MTAuNDYgTCA0NjQuNDIgNDEwLjUyIEwgNDg4LjAxIDQxOS4yMyBMIDQ4OC4wMSA0MTkuMjMgWiIgZmlsbD0iI2Y2NjU1ZiIgZmlsbC1ydWxlPSJldmVub2RkIiBncm91cC1pZD0iMiIgaWQ9Iui3r+W+hC0zNSIgbm9kZS1pZD0iNjkiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjEyMC41MzgyNCIgdGFyZ2V0LXdpZHRoPSIzNC45MjkzMiIgdGFyZ2V0LXg9IjQ2My4wNzA2OCIgdGFyZ2V0LXk9IjQxMC40NjE3NiI+PC9wYXRoPjxwYXRoIGQ9Ik0gNTI3LjY5IDUxNC4zMSBMIDUzMS44MiA1MTguMTcgTCA1MzUuNDIgNTIyLjI2IEwgNTM4LjUzIDUyNi42MCBMIDU0MS4xNiA1MzEuMTkgTCA1NDMuMzQgNTM2LjA0IEwgNTQ1LjAyIDU0MC45OSBMIDU0Ni4yMSA1NDYuMDQgTCA1NDYuOTEgNTUxLjIzIEwgNTQ3LjEyIDU1Ni40NiBMIDU0Ni44MiA1NjEuNjQgTCA1NDYuMDMgNTY2LjgwIEwgNTQ0LjczIDU3MS45NiBMIDU0Mi45MyA1NzYuOTQgTCA1NDAuNjMgNTgxLjc1IEwgNTM3Ljc5IDU4Ni40MCBMIDUzNC4zOSA1OTAuOTIgTCA1MzAuNTMgNTk1LjA1IEwgNTI2LjQ0IDU5OC42NiBMIDUyMi4xMSA2MDEuNzYgTCA1MTcuNTEgNjA0LjM5IEwgNTEyLjY2IDYwNi41NyBMIDUwNy43MiA2MDguMjUgTCA1MDIuNjYgNjA5LjQ0IEwgNDk3LjQ4IDYxMC4xNCBMIDQ5Mi4yNCA2MTAuMzUgTCA0ODcuMDYgNjEwLjA2IEwgNDgxLjkwIDYwOS4yNiBMIDQ3Ni43NCA2MDcuOTYgTCA0NzEuNzYgNjA2LjE3IEwgNDY2Ljk2IDYwMy44NiBMIDQ2Mi4zMCA2MDEuMDIgTCA0NTcuNzggNTk3LjYzIEwgNDUzLjY1IDU5My43NyBMIDQ1MC4wNSA1ODkuNjcgTCA0NDYuOTQgNTg1LjM0IEwgNDQ0LjMxIDU4MC43NSBMIDQ0Mi4xMyA1NzUuODkgTCA0NDAuNDUgNTcwLjk1IEwgNDM5LjI3IDU2NS45MCBMIDQzOC41NiA1NjAuNzEgTCA0MzguMzUgNTU1LjQ4IEwgNDM4LjY1IDU1MC4yOSBMIDQzOS40NCA1NDUuMTMgTCA0NDAuNzUgNTM5Ljk4IEwgNDQyLjU0IDUzNS4wMCBMIDQ0NC44NCA1MzAuMTkgTCA0NDcuNjggNTI1LjUzIEwgNDUxLjA4IDUyMS4wMSBMIDQ1NC45NCA1MTYuODggTCA0NTkuMDMgNTEzLjI4IEwgNDYzLjM2IDUxMC4xOCBMIDQ2Ny45NiA1MDcuNTUgTCA0NzIuODEgNTA1LjM3IEwgNDc3Ljc1IDUwMy42OSBMIDQ4Mi44MSA1MDIuNTAgTCA0ODguMDAgNTAxLjgwIEwgNDkzLjIzIDUwMS41OSBMIDQ5OC40MSA1MDEuODggTCA1MDMuNTcgNTAyLjY3IEwgNTA4LjczIDUwMy45OCBMIDUxMy43MSA1MDUuNzcgTCA1MTguNTIgNTA4LjA4IEwgNTIzLjE3IDUxMC45MSBMIDUyNy42OSA1MTQuMzEgWiIgZmlsbD0iI2U2ZjNmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMyIgaWQ9Ik92YWwiIG5vZGUtaWQ9IjcxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMDguNzYxOTMiIHRhcmdldC13aWR0aD0iMTA4Ljc2MTkiIHRhcmdldC14PSI0MzguMzU0OCIgdGFyZ2V0LXk9IjUwMS41ODc2OCI+PC9wYXRoPjxwYXRoIGQ9Ik0gNDkzLjYxIDUwNi40NyBMIDQ5OC42MyA1MDYuMjkgTCA1MDMuNTAgNTA2LjU5IEwgNTA4LjI1IDUwNy4zNSBMIDUxMi45MCA1MDguNTcgTCA1MTcuNDIgNTEwLjI0IEwgNTIxLjcwIDUxMi4zMCBMIDUyNS43NiA1MTQuNzcgTCA1MjkuNjEgNTE3LjY0IEwgNTMzLjE1IDUyMC44NyBMIDUzNi4zNSA1MjQuNDMgTCA1MzkuMjIgNTI4LjM0IEwgNTQxLjc2IDUzMi42MyBMIDU0My44NSA1MzcuMTYgTCA1NDUuNDMgNTQxLjczIEwgNTQ2LjUzIDU0Ni4zOCBMIDU0Ny4xNyA1NTEuMTEgTCA1NDcuMzQgNTU1Ljg5IEwgNTQ3LjA0IDU2MC42MCBMIDU0Ni4zMCA1NjUuMjcgTCA1NDUuMDggNTY5LjkwIEwgNTQzLjQzIDU3NC4zOCBMIDU0MS4zMyA1NzguNjggTCA1MzguNzggNTgyLjgxIEwgNTM1Ljc2IDU4Ni43OSBMIDUzMi4zMyA1OTAuNDQgTCA1MjguNjggNTkzLjY1IEwgNTI0Ljc3IDU5Ni40NCBMIDUyMC42MCA1OTguODQgTCA1MTYuMjEgNjAwLjgzIEwgNTExLjcxIDYwMi4zNyBMIDUwNy4wOCA2MDMuNDggTCA1MDIuMzAgNjA0LjE0IEwgNDk3LjQ5IDYwNC4zNSBMIDQ5Mi42OCA2MDQuMDggTCA0ODcuODYgNjAzLjMzIEwgNDgzLjAwIDYwMi4wOSBMIDQ3OC4zMCA2MDAuMzUgTCA0NzMuOTIgNTk4LjIzIEwgNDY5LjgyIDU5NS43MiBMIDQ2Ni4wMSA1OTIuODIgTCA0NjIuNDcgNTg5LjU2IEwgNDU5LjMyIDU4Ni4wMyBMIDQ1Ni41MyA1ODIuMjEgTCA0NTQuMDggNTc4LjA5IEwgNDUyLjA2IDU3My43NiBMIDQ1MC40OCA1NjkuMjYgTCA0NDkuMzQgNTY0LjU1IEwgNDQ4LjY1IDU1OS42MiBMIDQ0OC40OCA1NTQuNTMgTCA0NDguODAgNTQ5LjYzIEwgNDQ5LjYwIDU0NC44OSBMIDQ1MC44NyA1NDAuMjggTCA0NTIuNTkgNTM1LjgwIEwgNDU0LjY5IDUzMS41OCBMIDQ1Ny4xOCA1MjcuNjAgTCA0NjAuMDcgNTIzLjg0IEwgNDYzLjMwIDUyMC4zNyBMIDQ2Ni44MiA1MTcuMjUgTCA0NzAuNjUgNTE0LjQ2IEwgNDc0LjgwIDUxMi4wMCBMIDQ3OS4xNSA1MDkuOTYgTCA0ODMuNzIgNTA4LjM2IEwgNDg4LjU0IDUwNy4yMCBMIDQ5My42MyA1MDYuNDcgTCA0OTMuNjEgNTA2LjQ3IFogTSA0OTIuNzYgNDk2LjU0IEwgNDg3Ljg1IDQ5Ny4xOCBMIDQ4My4xNSA0OTguMTYgTCA0NzguNjMgNDk5LjUwIEwgNDc0LjI5IDUwMS4xNyBMIDQ2OC43MSA1MDMuOTMgTCA0NjMuNTQgNTA3LjE4IEwgNDU4Ljc0IDUxMC45NCBMIDQ1NC4zNiA1MTUuMTcgTCA0NTAuNDYgNTE5Ljc3IEwgNDQ3LjAzIDUyNC43OSBMIDQ0NC4xMiA1MzAuMTIgTCA0NDEuNzkgNTM1LjczIEwgNDQwLjAyIDU0MS42NiBMIDQzOS4xMSA1NDYuMjAgTCA0MzguNTcgNTUwLjg0IEwgNDM4LjQxIDU1NS42MCBMIDQzOC42MyA1NjAuNTAgTCA0MzkuMjYgNTY1LjM2IEwgNDQwLjI1IDU3MC4wMiBMIDQ0MS41OSA1NzQuNTAgTCA0NDMuMjcgNTc4LjgxIEwgNDQ2LjA0IDU4NC4zNCBMIDQ0OS4zMiA1ODkuNDYgTCA0NTMuMTAgNTk0LjIxIEwgNDU3LjM1IDU5OC41NSBMIDQ2MS45OSA2MDIuNDEgTCA0NjcuMDQgNjA1LjgxIEwgNDcyLjQyIDYwOC42OCBMIDQ3OC4wNyA2MTAuOTggTCA0ODQuMDUgNjEyLjczIEwgNDg4LjYyIDYxMy42MyBMIDQ5My4zMCA2MTQuMTYgTCA0OTguMTAgNjE0LjMxIEwgNTAzLjA0IDYxNC4wOSBMIDUwNy45NSA2MTMuNDUgTCA1MTIuNjUgNjEyLjQ2IEwgNTE3LjE3IDYxMS4xMyBMIDUyMS41MiA2MDkuNDUgTCA1MjcuMTAgNjA2LjcwIEwgNTMyLjI3IDYwMy40NCBMIDUzNy4wNiA1OTkuNjkgTCA1NDEuNDQgNTk1LjQ2IEwgNTQ1LjM0IDU5MC44NSBMIDU0OC43NyA1ODUuODQgTCA1NTEuNjggNTgwLjUxIEwgNTU0LjAxIDU3NC44OSBMIDU1NS43OCA1NjguOTcgTCA1NTYuNjkgNTY0LjQzIEwgNTU3LjIzIDU1OS43OSBMIDU1Ny4zOSA1NTUuMDMgTCA1NTcuMTcgNTUwLjEzIEwgNTU2LjU0IDU0NS4yNyBMIDU1NS41NSA1NDAuNjAgTCA1NTQuMjEgNTM2LjEzIEwgNTUyLjUzIDUzMS44MSBMIDU0OS43NiA1MjYuMjkgTCA1NDYuNDkgNTIxLjE3IEwgNTQyLjcwIDUxNi40MiBMIDUzOC40NSA1MTIuMDggTCA1MzMuODEgNTA4LjIyIEwgNTI4Ljc2IDUwNC44MiBMIDUyMy4zOSA1MDEuOTUgTCA1MTcuNzMgNDk5LjY0IEwgNTExLjc2IDQ5Ny45MCBMIDUwNy4xOCA0OTcuMDAgTCA1MDIuNTAgNDk2LjQ3IEwgNDk3LjcwIDQ5Ni4zMSBMIDQ5Mi43NiA0OTYuNTQgWiIgZmlsbD0iI2NmMDQwNCIgZmlsbC1ydWxlPSJub256ZXJvIiBncm91cC1pZD0iMyIgaWQ9IlNoYXBlIiBub2RlLWlkPSI3MiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTE3Ljk5ODkiIHRhcmdldC13aWR0aD0iMTE4Ljk4NDMxNCIgdGFyZ2V0LXg9IjQzOC40MDg3IiB0YXJnZXQteT0iNDk2LjMxMzkiPjwvcGF0aD48cGF0aCBkPSJNIDU3NC40NiA2MjguOTIgTCA1NzMuMTkgNjI4LjgwIEwgNTcyLjA4IDYyOC4yMCBMIDUzNC4xMyA1OTcuMTMgTCA1MzMuMzMgNTk2LjEzIEwgNTMyLjk5IDU5NC45NyBMIDUzMy4xMiA1OTMuNzYgTCA1MzMuNzQgNTkyLjYzIEwgNTM0LjA5IDU5Mi4yMiBMIDUzNS4xMiA1OTEuNDMgTCA1MzYuMzEgNTkxLjEwIEwgNTM3LjU1IDU5MS4yMiBMIDUzOC43MCA1OTEuODIgTCA1NzYuNjQgNjIyLjg4IEwgNTc3LjQ1IDYyMy44OSBMIDU3Ny43OCA2MjUuMDUgTCA1NzcuNjUgNjI2LjI2IEwgNTc3LjAzIDYyNy4zOCBMIDU3Ni42OSA2MjcuODAgTCA1NzUuNjkgNjI4LjU3IEwgNTc0LjQ2IDYyOC45MiBaIiBmaWxsPSIjZjdmOGY4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIzIiBpZD0iUGF0aCIgbm9kZS1pZD0iNzMiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjEiIHRhcmdldC1oZWlnaHQ9IjM3LjgxOTA5IiB0YXJnZXQtd2lkdGg9IjQ0Ljc5MjM2IiB0YXJnZXQteD0iNTMyLjk5MDUiIHRhcmdldC15PSI1OTEuMTAxNTYiPjwvcGF0aD48cGF0aCBkPSJNIDUzNS4zMiA1ODguMTggTCA1MzMuODYgNTg4LjQ1IEwgNTMyLjUxIDU4OS4wMCBMIDUzMS4yOCA1ODkuNzkgTCA1MzAuMjIgNTkwLjgzIEwgNTI5Ljg3IDU5MS4yNCBMIDUyOS4wMyA1OTIuNDcgTCA1MjguNDUgNTkzLjgyIEwgNTI4LjE0IDU5NS4yNiBMIDUyOC4xMyA1OTYuNzUgTCA1MjguNDAgNTk4LjIxIEwgNTI4Ljk1IDU5OS41NyBMIDUyOS43NSA2MDAuODAgTCA1MzAuODAgNjAxLjg3IEwgNTY4LjIwIDYzMy4yNyBMIDU2OS40MyA2MzQuMTEgTCA1NzAuNzggNjM0LjY5IEwgNTcyLjIyIDYzNC45OSBMIDU3My43MSA2MzUuMDEgTCA1NzUuMTcgNjM0LjczIEwgNTc2LjUzIDYzNC4xOCBMIDU3Ny43NiA2MzMuMzggTCA1NzguODMgNjMyLjM0IEwgNTc5LjE3IDYzMS45MiBMIDU4MC4wMiA2MzAuNzAgTCA1ODAuNTkgNjI5LjM0IEwgNTgwLjkwIDYyNy45MSBMIDU4MC45MSA2MjYuNDIgTCA1ODAuNjQgNjI0Ljk1IEwgNTgwLjA5IDYyMy41OSBMIDU3OS4yOSA2MjIuMzYgTCA1NzguMjQgNjIxLjMwIEwgNTQwLjgyIDU4OS45MCBMIDUzOS41OSA1ODkuMDYgTCA1MzguMjQgNTg4LjQ5IEwgNTM2LjgxIDU4OC4xOSBMIDUzNS4zMiA1ODguMTggTCA1MzUuMzIgNTg4LjE4IFoiIGZpbGw9IiNjZjA0MDQiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjMiIGlkPSJQYXRoIiBub2RlLWlkPSI3NCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNDYuODMyNzAzIiB0YXJnZXQtd2lkdGg9IjUyLjc4Njc0MyIgdGFyZ2V0LXg9IjUyOC4xMjcyIiB0YXJnZXQteT0iNTg4LjE3NjkiPjwvcGF0aD48cGF0aCBkPSJNIDU1MC4yMCA1NTAuNzQgTCA1NTAuMzkgNTU2LjM1IEwgNTUwLjA0IDU2MS43NSBMIDU0OS4xNiA1NjYuOTggTCA1NDcuNzcgNTcyLjA1IEwgNTQ1Ljg3IDU3Ni45OSBMIDU0My41NSA1ODEuNjQgTCA1NDAuODEgNTg2LjAyIEwgNTM3LjYzIDU5MC4xNyBMIDUzNC4wNyA1OTMuOTkgTCA1MzAuMTggNTk3LjQzIEwgNTI1Ljk2IDYwMC41MCBMIDUyMS4zOCA2MDMuMjEgTCA1MTYuNTggNjA1LjQ1IEwgNTExLjU0IDYwNy4yMSBMIDUwNi4yMyA2MDguNDkgTCA1MDAuNjEgNjA5LjI4IEwgNDk0Ljk1IDYwOS40OCBMIDQ4OS41MCA2MDkuMTQgTCA0ODQuMjMgNjA4LjI4IEwgNDc5LjExIDYwNi45MCBMIDQ3NC4xMyA2MDUuMDMgTCA0NjkuNDQgNjAyLjc0IEwgNDY1LjAyIDYwMC4wMyBMIDQ2MC44NSA1OTYuODggTCA0NTYuOTkgNTkzLjM2IEwgNDUzLjUzIDU4OS41MSBMIDQ1MC40NCA1ODUuMzQgTCA0NDcuNzEgNTgwLjgwIEwgNDQ1LjQ2IDU3Ni4wNSBMIDQ0My42OSA1NzEuMDUgTCA0NDIuNDEgNTY1LjgwIEwgNDQxLjYyIDU2MC4yNCBMIDQ0MS40MyA1NTQuNjMgTCA0NDEuNzggNTQ5LjIyIEwgNDQyLjY1IDU0NC4wMCBMIDQ0NC4wNSA1MzguOTMgTCA0NDUuOTUgNTMzLjk5IEwgNDQ4LjI2IDUyOS4zNCBMIDQ1MS4wMSA1MjQuOTUgTCA0NTQuMTkgNTIwLjgxIEwgNDU3Ljc1IDUxNi45OSBMIDQ2MS42MyA1MTMuNTUgTCA0NjUuODUgNTEwLjQ4IEwgNDcwLjQ0IDUwNy43NyBMIDQ3NS4yNCA1MDUuNTMgTCA0ODAuMjggNTAzLjc3IEwgNDg1LjU5IDUwMi40OSBMIDQ5MS4yMCA1MDEuNjkgTCA0OTYuODcgNTAxLjUwIEwgNTAyLjMyIDUwMS44NCBMIDUwNy41OSA1MDIuNzAgTCA1MTIuNzEgNTA0LjA3IEwgNTE3LjY5IDUwNS45NSBMIDUyMi4zOCA1MDguMjQgTCA1MjYuODAgNTEwLjk1IEwgNTMwLjk3IDUxNC4wOSBMIDUzNC44MyA1MTcuNjIgTCA1MzguMjkgNTIxLjQ2IEwgNTQxLjM4IDUyNS42NCBMIDU0NC4xMCA1MzAuMTcgTCA1NDYuMzYgNTM0LjkzIEwgNTQ4LjEzIDUzOS45MiBMIDU0OS40MSA1NDUuMTggTCA1NTAuMjAgNTUwLjc0IFoiIGZpbGw9IiNmYzhlOGIiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjMiIGlkPSJPdmFsIiBub2RlLWlkPSI3NSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMTA3Ljk3ODMiIHRhcmdldC13aWR0aD0iMTA4Ljk1OTk2IiB0YXJnZXQteD0iNDQxLjQyODQ3IiB0YXJnZXQteT0iNTAxLjQ5ODUiPjwvcGF0aD48cGF0aCBkPSJNIDQ5MS41MyA1MDUuNjUgTCA0OTYuNTUgNTA1LjQ3IEwgNTAxLjQyIDUwNS43NyBMIDUwNi4xNyA1MDYuNTIgTCA1MTAuODIgNTA3Ljc1IEwgNTE1LjM0IDUwOS40MiBMIDUxOS42MiA1MTEuNDggTCA1MjMuNjggNTEzLjk1IEwgNTI3LjUzIDUxNi44MiBMIDUzMS4wNyA1MjAuMDUgTCA1MzQuMjcgNTIzLjYxIEwgNTM3LjE0IDUyNy41MiBMIDUzOS42OSA1MzEuODEgTCA1NDEuNzcgNTM2LjM0IEwgNTQzLjM1IDU0MC45MSBMIDU0NC40NSA1NDUuNTUgTCA1NDUuMDkgNTUwLjI5IEwgNTQ1LjI2IDU1NS4wNyBMIDU0NC45NiA1NTkuNzggTCA1NDQuMjIgNTY0LjQ0IEwgNTQzLjAwIDU2OS4wOCBMIDU0MS4zNSA1NzMuNTYgTCA1MzkuMjUgNTc3Ljg2IEwgNTM2LjcwIDU4MS45OSBMIDUzMy42OCA1ODUuOTcgTCA1MzAuMjUgNTg5LjYyIEwgNTI2LjYwIDU5Mi44MiBMIDUyMi42OSA1OTUuNjIgTCA1MTguNTIgNTk4LjAyIEwgNTE0LjEzIDYwMC4wMSBMIDUwOS42MyA2MDEuNTUgTCA1MDUuMDAgNjAyLjY2IEwgNTAwLjIyIDYwMy4zMiBMIDQ5NS40MSA2MDMuNTMgTCA0OTAuNjAgNjAzLjI2IEwgNDg1Ljc4IDYwMi41MSBMIDQ4MC45MiA2MDEuMjYgTCA0NzYuMjIgNTk5LjUyIEwgNDcxLjg0IDU5Ny40MCBMIDQ2Ny43NSA1OTQuOTAgTCA0NjMuOTMgNTkyLjAwIEwgNDYwLjM5IDU4OC43NCBMIDQ1Ny4yNCA1ODUuMjEgTCA0NTQuNDUgNTgxLjM5IEwgNDUyLjAwIDU3Ny4yNyBMIDQ0OS45OCA1NzIuOTQgTCA0NDguNDAgNTY4LjQzIEwgNDQ3LjI2IDU2My43MyBMIDQ0Ni41NyA1NTguODAgTCA0NDYuNDAgNTUzLjcxIEwgNDQ2LjcyIDU0OC44MSBMIDQ0Ny41MiA1NDQuMDYgTCA0NDguNzkgNTM5LjQ2IEwgNDUwLjUxIDUzNC45OCBMIDQ1Mi42MSA1MzAuNzYgTCA0NTUuMTAgNTI2Ljc4IEwgNDU3Ljk5IDUyMy4wMiBMIDQ2MS4yMiA1MTkuNTUgTCA0NjQuNzQgNTE2LjQzIEwgNDY4LjU3IDUxMy42NCBMIDQ3Mi43MiA1MTEuMTggTCA0NzcuMDcgNTA5LjE0IEwgNDgxLjY1IDUwNy41NCBMIDQ4Ni40NiA1MDYuMzcgTCA0OTEuNTUgNTA1LjY1IEwgNDkxLjUzIDUwNS42NSBaIE0gNDkwLjY4IDQ5NS43MiBMIDQ4NS43NyA0OTYuMzUgTCA0ODEuMDcgNDk3LjM0IEwgNDc2LjU1IDQ5OC42NyBMIDQ3Mi4yMSA1MDAuMzUgTCA0NjYuNjMgNTAzLjExIEwgNDYxLjQ2IDUwNi4zNiBMIDQ1Ni42NyA1MTAuMTIgTCA0NTIuMjggNTE0LjM1IEwgNDQ4LjM4IDUxOC45NSBMIDQ0NC45NSA1MjMuOTYgTCA0NDIuMDQgNTI5LjMwIEwgNDM5LjcxIDUzNC45MSBMIDQzNy45NCA1NDAuODQgTCA0MzcuMDMgNTQ1LjM3IEwgNDM2LjQ5IDU1MC4wMiBMIDQzNi4zMyA1NTQuNzggTCA0MzYuNTUgNTU5LjY4IEwgNDM3LjE4IDU2NC41NCBMIDQzOC4xNyA1NjkuMjAgTCA0MzkuNTEgNTczLjY4IEwgNDQxLjE5IDU3Ny45OSBMIDQ0My45NiA1ODMuNTIgTCA0NDcuMjQgNTg4LjY0IEwgNDUxLjAyIDU5My4zOSBMIDQ1NS4yNyA1OTcuNzMgTCA0NTkuOTEgNjAxLjU5IEwgNDY0Ljk3IDYwNC45OSBMIDQ3MC4zNCA2MDcuODYgTCA0NzUuOTkgNjEwLjE2IEwgNDgxLjk3IDYxMS45MSBMIDQ4Ni41NCA2MTIuODEgTCA0OTEuMjIgNjEzLjMzIEwgNDk2LjAyIDYxMy40OSBMIDUwMC45NiA2MTMuMjcgTCA1MDUuODcgNjEyLjYzIEwgNTEwLjU3IDYxMS42NCBMIDUxNS4wOSA2MTAuMzEgTCA1MTkuNDQgNjA4LjYzIEwgNTI1LjAyIDYwNS44NyBMIDUzMC4xOSA2MDIuNjIgTCA1MzQuOTggNTk4Ljg2IEwgNTM5LjM2IDU5NC42NCBMIDU0My4yNiA1OTAuMDMgTCA1NDYuNzAgNTg1LjAyIEwgNTQ5LjYwIDU3OS42OCBMIDU1MS45MyA1NzQuMDcgTCA1NTMuNzAgNTY4LjE1IEwgNTU0LjYxIDU2My42MSBMIDU1NS4xNSA1NTguOTcgTCA1NTUuMzEgNTU0LjIwIEwgNTU1LjA5IDU0OS4zMSBMIDU1NC40NiA1NDQuNDQgTCA1NTMuNDcgNTM5Ljc4IEwgNTUyLjEzIDUzNS4zMCBMIDU1MC40NSA1MzAuOTkgTCA1NDcuNjggNTI1LjQ3IEwgNTQ0LjQxIDUyMC4zNCBMIDU0MC42MiA1MTUuNTkgTCA1MzYuMzcgNTExLjI1IEwgNTMxLjczIDUwNy4zOSBMIDUyNi42OCA1MDMuOTkgTCA1MjEuMzEgNTAxLjEyIEwgNTE1LjY1IDQ5OC44MiBMIDUwOS42OCA0OTcuMDcgTCA1MDUuMTAgNDk2LjE4IEwgNTAwLjQyIDQ5NS42NSBMIDQ5NS42MiA0OTUuNDkgTCA0OTAuNjggNDk1LjcyIFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIzIiBpZD0iU2hhcGUiIG5vZGUtaWQ9Ijc2IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIxIiB0YXJnZXQtaGVpZ2h0PSIxMTcuOTk4OSIgdGFyZ2V0LXdpZHRoPSIxMTguOTg0MzQ0IiB0YXJnZXQteD0iNDM2LjMyOTEzIiB0YXJnZXQteT0iNDk1LjQ5MiI+PC9wYXRoPjxwYXRoIGQ9Ik0gNTc2LjQ0IDYyOC43NSBMIDU3NS4xNyA2MjguNjIgTCA1NzQuMDYgNjI4LjAyIEwgNTM2LjEyIDU5Ni45NiBMIDUzNS4zMiA1OTUuOTYgTCA1MzQuOTggNTk0Ljc5IEwgNTM1LjExIDU5My41OSBMIDUzNS43MyA1OTIuNDYgTCA1MzYuMDggNTkyLjA1IEwgNTM3LjExIDU5MS4yNiBMIDUzOC4zMCA1OTAuOTMgTCA1MzkuNTQgNTkxLjA1IEwgNTQwLjY5IDU5MS42NSBMIDU3OC42MiA2MjIuNzQgTCA1NzkuNDIgNjIzLjcxIEwgNTc5Ljc4IDYyNC45MSBMIDU3OS42NCA2MjYuMTUgTCA1NzkuMDIgNjI3LjI1IEwgNTc4LjY3IDYyNy42NSBMIDU3Ny42NyA2MjguNDEgTCA1NzYuNDQgNjI4Ljc1IFoiIGZpbGw9IiNmN2Y4ZjgiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjMiIGlkPSJQYXRoIiBub2RlLWlkPSI3NyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iMzcuODE5OTQ2IiB0YXJnZXQtd2lkdGg9IjQ0Ljc5NTQxIiB0YXJnZXQteD0iNTM0Ljk4Mjg1IiB0YXJnZXQteT0iNTkwLjkyNzUiPjwvcGF0aD48cGF0aCBkPSJNIDUzOS4zMSA1ODcuODMgTCA1MzcuODUgNTg4LjEwIEwgNTM2LjQ5IDU4OC42NSBMIDUzNS4yNiA1ODkuNDQgTCA1MzQuMjAgNTkwLjQ4IEwgNTMzLjg1IDU5MC44OSBMIDUzMy4wMSA1OTIuMTIgTCA1MzIuNDMgNTkzLjQ3IEwgNTMyLjEzIDU5NC45MSBMIDUzMi4xMSA1OTYuNDAgTCA1MzIuMzkgNTk3Ljg2IEwgNTMyLjk0IDU5OS4yMyBMIDUzMy43NCA2MDAuNDYgTCA1MzQuNzggNjAxLjUyIEwgNTcyLjE5IDYzMi45MiBMIDU3My40MiA2MzMuNzYgTCA1NzQuNzcgNjM0LjM0IEwgNTc2LjIwIDYzNC42NCBMIDU3Ny42OSA2MzQuNjYgTCA1NzkuMTYgNjM0LjM5IEwgNTgwLjUyIDYzMy44NCBMIDU4MS43NSA2MzMuMDMgTCA1ODIuODEgNjMxLjk5IEwgNTgzLjE2IDYzMS41OCBMIDU4NC4wMCA2MzAuMzUgTCA1ODQuNTggNjI5LjAwIEwgNTg0Ljg4IDYyNy41NiBMIDU4NC45MCA2MjYuMDcgTCA1ODQuNjIgNjI0LjYxIEwgNTg0LjA3IDYyMy4yNCBMIDU4My4yNyA2MjIuMDEgTCA1ODIuMjMgNjIwLjk1IEwgNTQ0LjgwIDU4OS41NSBMIDU0My41OCA1ODguNzIgTCA1NDIuMjMgNTg4LjE0IEwgNTQwLjc5IDU4Ny44NCBMIDUzOS4zMSA1ODcuODMgWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xMikiIGZpbGwtcnVsZT0ibm9uemVybyIgZ3JvdXAtaWQ9IjMiIGlkPSJQYXRoIiBub2RlLWlkPSI3OCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgdGFyZ2V0LWhlaWdodD0iNDYuODMyNzY0IiB0YXJnZXQtd2lkdGg9IjUyLjc4NjgwNCIgdGFyZ2V0LXg9IjUzMi4xMTE5NCIgdGFyZ2V0LXk9IjU4Ny44MjgyNSI+PC9wYXRoPjxwYXRoIGQ9Ik0gNDc0Ljc4IDUyNi4yMiBMIDQ3My4xMyA1MjcuNjIgTCA0NzEuNTEgNTI5LjE5IEwgNDY5LjMyIDUzMS42NiBMIDQ2Ny4xOCA1MzQuNTEgTCA0NjUuMDAgNTM4LjEzIEwgNDYzLjc1IDU0MC43MyBMIDQ2Mi42OSA1NDMuNjIgTCA0NjEuODMgNTQ2LjgyIEwgNDYxLjMyIDU1MC4wOCBMIDQ2MS4yMCA1NTMuNjIgTCA0NjEuNTAgNTU3LjQ5IiBmaWxsPSIjZmRjN2M1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGdyb3VwLWlkPSIzIiBpZD0iUGF0aCIgbm9kZS1pZD0iNzkiIHN0cm9rZT0iI2ZkYzdjNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHRhcmdldC1oZWlnaHQ9IjMxLjI3NjQyOCIgdGFyZ2V0LXdpZHRoPSIxMy41NzcwMjYiIHRhcmdldC14PSI0NjEuMiIgdGFyZ2V0LXk9IjUyNi4yMTgiPjwvcGF0aD48cGF0aCBkPSJNIDQ5Mi4wNCA1NjkuNjYgTCA0OTIuMDQgNTY4LjI4IEMgNDkyLjA0IDU2Ni42NiA0OTIuNDAgNTY1LjIyIDQ5My4xOCA1NjMuOTAgQyA0OTMuNzggNTYyLjgyIDQ5NC42OCA1NjEuNzQgNDk2LjAwIDU2MC42MCBDIDQ5OC42NCA1NTguMjYgNTAwLjI2IDU1Ni43MCA1MDAuODYgNTU1Ljk4IEMgNTAyLjM2IDU1NC4wMCA1MDMuMTQgNTUxLjY2IDUwMy4xNCA1NDguOTYgQyA1MDMuMTQgNTQ1LjM2IDUwMi4wMCA1NDIuNTQgNDk5Ljc4IDU0MC41MCBDIDQ5Ny40NCA1MzguMzQgNDk0LjM4IDUzNy4zMiA0OTAuNTQgNTM3LjMyIEMgNDg2LjIyIDUzNy4zMiA0ODIuODYgNTM4LjY0IDQ4MC40NiA1NDEuMjggQyA0NzguMDYgNTQzLjgwIDQ3Ni45MiA1NDcuMTYgNDc2LjkyIDU1MS4zNiBMIDQ4MS42NiA1NTEuMzYgQyA0ODEuNjYgNTQ4LjQyIDQ4Mi4zMiA1NDYuMTQgNDgzLjY0IDU0NC40NiBDIDQ4NS4wOCA1NDIuNDggNDg3LjMwIDU0MS41MiA0OTAuMzAgNTQxLjUyIEMgNDkyLjgyIDU0MS41MiA0OTQuODAgNTQyLjE4IDQ5Ni4xOCA1NDMuNjIgQyA0OTcuNTAgNTQ0Ljk0IDQ5OC4yMiA1NDYuODAgNDk4LjIyIDU0OS4yMCBDIDQ5OC4yMiA1NTAuODggNDk3LjYyIDU1Mi40NCA0OTYuNDIgNTUzLjk0IEMgNDk2LjA2IDU1NC40MiA0OTUuMzQgNTU1LjE0IDQ5NC4zOCA1NTYuMTAgQyA0OTEuMTQgNTU4Ljk4IDQ4OS4xNiA1NjEuMjYgNDg4LjMyIDU2My4wNiBDIDQ4Ny42MCA1NjQuNTYgNDg3LjI0IDU2Ni4zMCA0ODcuMjQgNTY4LjI4IEwgNDg3LjI0IDU2OS42NiBMIDQ5Mi4wNCA1NjkuNjYgWiBNIDQ4OS42NCA1ODEuMDAgQyA0OTAuNjYgNTgxLjAwIDQ5MS41MCA1ODAuNjQgNDkyLjIyIDU3OS45OCBDIDQ5Mi45NCA1NzkuMzIgNDkzLjMwIDU3OC40OCA0OTMuMzAgNTc3LjQwIEMgNDkzLjMwIDU3Ni4zOCA0OTIuOTQgNTc1LjU0IDQ5Mi4yOCA1NzQuODggQyA0OTEuNTYgNTc0LjE2IDQ5MC42NiA1NzMuODYgNDg5LjY0IDU3My44NiBDIDQ4OC42MiA1NzMuODYgNDg3Ljc4IDU3NC4xNiA0ODcuMDYgNTc0Ljg4IEMgNDg2LjM0IDU3NS41NCA0ODYuMDQgNTc2LjM4IDQ4Ni4wNCA1NzcuNDAgQyA0ODYuMDQgNTc4LjQyIDQ4Ni4zNCA1NzkuMjYgNDg3LjA2IDU3OS45OCBDIDQ4Ny43OCA1ODAuNjQgNDg4LjYyIDU4MS4wMCA0ODkuNjQgNTgxLjAwIFoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgaWQ9Iu+8nyIgbm9kZS1pZD0iODAiIHN0cm9rZT0ibm9uZSIgdGFyZ2V0LWhlaWdodD0iNDMuNjc5OTkzIiB0YXJnZXQtd2lkdGg9IjI2LjIyMDAwMSIgdGFyZ2V0LXg9IjQ3Ni45MiIgdGFyZ2V0LXk9IjUzNy4zMiI+PC9wYXRoPjwvc3ZnPg==";
const Xg = U({
  name: "KvStatus",
  props: {
    type: { type: String, default: "data" }
  },
  setup(I) {
    return { imgUrl: Q(() => new URL((/* @__PURE__ */ Object.assign({ "./svgs/data.svg": Pg, "./svgs/loading.svg": Rg, "./svgs/search.svg": hg }))[`./svgs/${I.type}.svg`], self.location).href) };
  }
}), fg = { class: "kv-status" }, Vg = { class: "error-type flex-center" }, pg = { class: "status-svg" }, Hg = ["src"], Jg = { class: "mt20 flex-center font-size16 status-text" };
function Fg(I, M, N, g, j, i) {
  return d(), B("div", fg, [
    G("div", Vg, [
      h(I.$slots, "image", {}, () => [
        G("div", pg, [
          G("img", { src: I.imgUrl }, null, 8, Hg)
        ])
      ], !0)
    ]),
    G("div", Jg, [
      h(I.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const uI = /* @__PURE__ */ NI(Xg, [["render", Fg], ["__scopeId", "data-v-ac82367c"]]);
uI.install = function(I) {
  I.component(uI.name, uI);
};
const _g = {
  name: "KvList",
  components: { PullRefresh: Eg, List: wg, KvStatus: uI },
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
  setup(I) {
    const M = z([]), N = z(!1), g = z(!1), j = z(!1), i = z(!1), C = z({ pageIndex: 1, isNullData: !1, isFinished: !1 }), A = async () => {
      j.value && (C.value.pageIndex = 1, j.value = !1), i.value && (C.value.pageIndex = 1, i.value = !1);
      const T = await I.loadChange(C.value.pageIndex);
      N.value = !1, T ? C.value = {
        pageIndex: 1,
        isNullData: !1,
        isFinished: !1,
        ...T
      } : g.value = !0, T != null && T.isFinished && (g.value = !0);
    }, u = async () => {
      g.value = !1, N.value = !0, await I.refreshChange(), A();
    };
    return {
      list: M,
      onLoad: A,
      loading: N,
      finished: g,
      onRefresh: u,
      refreshing: j,
      statusData: C,
      reset: () => {
        g.value = !1, i.value = !0, u();
      }
    };
  }
}, $g = { class: "kv-list flex-column flex1" }, Kg = { key: 0 }, qg = { key: 0 };
function ID(I, M, N, g, j, i) {
  const C = H("kv-status"), A = H("list"), u = H("pull-refresh");
  return d(), B("div", $g, [
    e(u, {
      modelValue: g.refreshing,
      "onUpdate:modelValue": M[1] || (M[1] = (c) => g.refreshing = c),
      disabled: N.disabled,
      onRefresh: g.onRefresh,
      class: "kv-pull flex1"
    }, {
      default: R(() => [
        g.loading && g.statusData.pageIndex === 1 ? (d(), q(C, {
          key: 0,
          type: "loading"
        }, {
          image: R(() => [
            h(I.$slots, "loading")
          ]),
          default: R(() => [
            I.$slots.loading ? dI("", !0) : (d(), B("span", Kg, "Loading..."))
          ]),
          _: 3
        })) : g.statusData.isNullData ? (d(), q(C, { key: 1 }, {
          image: R(() => [
            h(I.$slots, "empty")
          ]),
          default: R(() => [
            I.$slots.empty ? dI("", !0) : (d(), B("span", qg, "暂无数据"))
          ]),
          _: 3
        })) : (d(), q(A, TI({
          key: 2,
          loading: g.loading,
          "onUpdate:loading": M[0] || (M[0] = (c) => g.loading = c),
          finished: g.finished,
          "finished-text": N.finishedText,
          offset: 200
        }, I.$attrs, { onLoad: g.onLoad }), {
          default: R(() => [
            h(I.$slots, "default")
          ]),
          _: 3
        }, 16, ["loading", "finished", "finished-text", "onLoad"]))
      ]),
      _: 3
    }, 8, ["modelValue", "disabled", "onRefresh"])
  ]);
}
const nI = /* @__PURE__ */ NI(_g, [["render", ID]]);
nI.install = function(I) {
  I.component(nI.name, nI);
};
const ZI = {
  KvButton: LI,
  KvInput: lI,
  KvTable: wI,
  KvTree: zI,
  KvList: nI,
  KvStatus: uI,
  install: () => {
  }
};
function MD(I, M, N = 0) {
  return I.substr(N, M.length) === M;
}
ZI.install = function(I) {
  Object.keys(ZI).forEach((M) => {
    if (MD(M, "K")) {
      const N = ZI[M];
      I.component(N.name, N);
    }
  });
};
export {
  ZI as KVant,
  LI as KvButton,
  lI as KvInput,
  nI as KvList,
  uI as KvStatus,
  zI as KvTree
};
