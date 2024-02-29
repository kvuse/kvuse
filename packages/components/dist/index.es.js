import { defineComponent as B, ref as E, computed as k, resolveComponent as w, openBlock as g, createBlock as I, mergeProps as H, withModifiers as Pe, withCtx as b, renderSlot as _, createElementBlock as $, createCommentVNode as A, withKeys as De, createSlots as j, createElementVNode as V, watchEffect as J, watch as O, nextTick as pe, normalizeClass as F, createVNode as N, Fragment as P, renderList as R, toDisplayString as K, onMounted as fe, normalizeStyle as x, createTextVNode as L, unref as Y, toRefs as Ae, getCurrentInstance as Ne, useCssVars as ye, normalizeProps as _e, onUpdated as Re, onUnmounted as xe } from "vue";
import { ElButton as me, ElInput as Ye, ElConfigProvider as Be, ElPagination as Oe, ElTable as Ie, ElTableColumn as ge, ElScrollbar as ve, ElDialog as Ue, ElSpace as je, ElTabs as We, ElTabPane as qe, ElRow as Ge, ElCol as Ze, ElIcon as He, ElTooltip as Me, ElDatePicker as Xe } from "element-plus";
const W = {
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
      const a = e.textContent;
      if (typeof Number(a) != "number")
        return;
      let l = "￥0";
      const { inter: s, point: i } = t.modifiers, r = i ? t.value : 2, n = a >= 0 ? `￥${Number(a).toFixed(r)}` : `-￥${Math.abs(Number(a.toFixed(r)))}`;
      s ? l = a >= 0 ? `￥${a}` : `-￥${Math.abs(a)}` : l = a ? n : "￥0.00", e.innerHTML = `${l}`;
    },
    updated: (e, t) => {
      const { point: a } = t.modifiers, l = a ? t.value : 2, s = t.arg === "value" && t.value ? `￥${Number(t.value).toFixed(l)}` : e.textContent;
      e.innerHTML = s;
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
      const a = document.createElement("div");
      a.setAttribute("class", "border-div"), t.appendChild(a), e.setAttribute("class", "text-ellipsis"), e.onmouseover = () => {
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
      let a = 0;
      e.handler = function(l) {
        const s = Date.now(), i = /^[a-zA-Z]{2,}/.test(l.key) ? l.key : l.key.toLocaleUpperCase(), { buttonKey: r, isCombination: n = 0 } = t.value || e.valueKeys || {}, u = document.contains(e), o = l.target.tagName === "TEXTAREA" || l.target.tagName === "INPUT", {
          dialog: p,
          focus: d,
          long: h,
          any: f,
          fast: S
        } = t.modifiers;
        if (!u && !h) {
          document.removeEventListener("keydown", e.handler);
          return;
        }
        if (f && t.arg) {
          t.arg(l);
          return;
        }
        const y = S ? s - a > 30 : !0, m = document.querySelector(".el-popup-parent--hidden") || document.querySelector(".is-message-box");
        if (a = s, m && !p)
          return;
        const v = l.ctrlKey || l.metaKey, T = n === +v && r === i;
        (!o || d || n) && T && y && t.arg && t.arg(l);
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
        const { delay: a = 800, content: l } = t.value || {};
        e.classList.add("is-disabled"), e.disabled = !0, l && (e.beforeText = e.textContent, e.innerHTML = l);
        const { once: s } = t.modifiers;
        s || (e.timer = setTimeout(() => {
          e.classList.remove("is-disabled"), e.disabled = !1, l && (e.innerHTML = e.beforeText), e.beforeText = null, clearTimeout(e.timer), e.timer = null;
        }, a));
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
W.install = function(e) {
  Object.keys(W).forEach((t) => {
    e.directive(t, W[t]);
  });
};
const M = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [l, s] of t)
    a[l] = s;
  return a;
}, Je = B({
  name: "KButton",
  components: { ElButton: me },
  props: {
    // 是否可以点击
    clickState: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 },
    // 是否有权限
    iconLock: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t, attrs: a }) {
    const l = E(!0), s = E(null), i = () => {
      l.value && (l.value = !1, t("click")), r();
    }, r = () => {
      clearTimeout(s.value), s.value = setTimeout(() => {
        l.value = !0;
      }, 800);
    }, n = k(() => {
      const { border: u } = e, { type: o = "text" } = a;
      return u ? {
        backgroundColor: "transparent",
        color: `var(--el-color-${o})`
      } : {};
    });
    return { onclick: i, buttonStatus: l, buttonStyle: n };
  }
}), Qe = {
  key: 0,
  class: "el-icon-lock el-icon--right"
};
function et(e, t, a, l, s, i) {
  const r = w("el-button");
  return g(), I(r, H({
    disabled: !e.buttonStatus || e.disabled,
    style: e.buttonStyle,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: Pe(e.onclick, ["stop"])
  }), {
    default: b(() => [
      _(e.$slots, "default"),
      e.iconLock ? (g(), $("i", Qe)) : A("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "style", "click-state", "onClick"]);
}
const Q = /* @__PURE__ */ M(Je, [["render", et]]);
Q.install = function(e) {
  e.component(Q.name, Q);
};
const tt = B({
  name: "KInput",
  components: { ElInput: Ye },
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
  setup(e, { emit: t, attrs: a }) {
    const l = E(null), s = E(!0), i = k({
      get() {
        return e.modelValue;
      },
      set(p) {
        r(p);
      }
    }), r = (p) => {
      let d = p, h = a.max;
      if (e.type === "number") {
        if (d = d.replace(/[^\d.]/g, ""), d = d.replace(/^\./g, ""), d = d.replace(/\.{2,}/g, "."), d = d.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), d.indexOf(".") < 0 && d !== "" && d.substr(0, 1) === "0" && d.length === 2 && (d = d.substr(1, d.length)), d !== "")
          if (d.indexOf(".") > 0) {
            if (e.point) {
              const f = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
              d = d.match(f)[0] || null;
            }
          } else
            d === "." && (d = "");
        h = a.max ?? 999999.99;
      } else
        e.type === "integer" ? (d = d.replace(/[^\d]/g, ""), h = a.max ?? 999999) : e.type === "intText" && (d = d.replace(/[^\w]/g, ""));
      !a.maxlength && h !== void 0 && d && Number(d) > Number(h) && (d = h), a.min !== void 0 && d && Number(d) < Number(a.min) && (d = a.min), t("update:modelValue", d);
    }, n = () => {
      s.value && (s.value = !1, i.value && t("enter")), o();
    }, u = (p) => {
      t("change", p);
    }, o = () => {
      clearTimeout(l.value), l.value = setTimeout(() => {
        s.value = !0;
      }, 800);
    };
    return {
      inputValue: i,
      changeValue: u,
      searchContent: n
    };
  }
});
function at(e, t, a, l, s, i) {
  const r = w("el-input");
  return g(), I(r, H({
    modelValue: e.inputValue,
    "onUpdate:modelValue": t[0] || (t[0] = (n) => e.inputValue = n)
  }, e.$attrs, {
    onKeyup: De(e.searchContent, ["enter"]),
    onChange: e.changeValue
  }), j({ _: 2 }, [
    e.$slots.append ? {
      name: "append",
      fn: b(() => [
        _(e.$slots, "append")
      ]),
      key: "0"
    } : void 0,
    e.$slots.prepend ? {
      name: "prepend",
      fn: b(() => [
        _(e.$slots, "prepend")
      ]),
      key: "1"
    } : void 0,
    e.$slots.prefix ? {
      name: "prefix",
      fn: b(() => [
        _(e.$slots, "prefix")
      ]),
      key: "2"
    } : void 0,
    e.$slots.suffix ? {
      name: "suffix",
      fn: b(() => [
        _(e.$slots, "suffix")
      ]),
      key: "3"
    } : void 0
  ]), 1040, ["modelValue", "onKeyup", "onChange"]);
}
const q = /* @__PURE__ */ M(tt, [["render", at]]);
q.install = function(e) {
  e.component(q.name, q);
};
/*! Element Plus Icons Vue v2.3.1 */
var nt = /* @__PURE__ */ B({
  name: "CaretLeft",
  __name: "caret-left",
  setup(e) {
    return (t, a) => (g(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      V("path", {
        fill: "currentColor",
        d: "M672 192 288 511.936 672 832z"
      })
    ]));
  }
}), lt = nt, ot = /* @__PURE__ */ B({
  name: "CaretRight",
  __name: "caret-right",
  setup(e) {
    return (t, a) => (g(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      V("path", {
        fill: "currentColor",
        d: "M384 192v640l384-320.064z"
      })
    ]));
  }
}), ut = ot, st = /* @__PURE__ */ B({
  name: "Delete",
  __name: "delete",
  setup(e) {
    return (t, a) => (g(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      V("path", {
        fill: "currentColor",
        d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
      })
    ]));
  }
}), rt = st, it = /* @__PURE__ */ B({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, a) => (g(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      V("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), dt = it, ct = /* @__PURE__ */ B({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, a) => (g(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      V("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), pt = ct, ft = /* @__PURE__ */ B({
  name: "Warning",
  __name: "warning",
  setup(e) {
    return (t, a) => (g(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      V("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), mt = ft;
const ht = B({
  name: "KInputNumber",
  components: { Minus: dt, Plus: pt, KInput: q },
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
    const a = E(1), l = E(null), s = E(!1), i = k(() => e.modelValue <= e.min), r = k(() => e.modelValue >= e.max), n = k({
      get: () => e.modelValue,
      set: (m) => {
        t("update:modelValue", m);
      }
    }), u = (m) => t("blur", m), o = (m) => t("focus", m), p = (m) => t("enter", m), d = (m) => {
      pe(() => {
        const v = m === "" ? void 0 : Number(m);
        (!Number.isNaN(v) || m === "") && y(v);
      });
    }, h = (m) => {
      s.value = !m, l.value = m;
    }, f = E(-1);
    J(() => {
      a.value = e.modelValue;
    }), O(() => f.value, (m) => {
      m < 0 && (n.value = e.modelValue, d(a.value));
    }, { immediate: !0 });
    const S = (m) => {
      const v = m === "increase", T = v ? r.value : i.value;
      if (e.disabled || T)
        return;
      const c = s.value ? 0 : n.value, D = l.value ? a.value : c, C = v ? D + e.step : D - e.step;
      y(C);
    }, y = (m) => {
      l.value = m;
      let v = m;
      f.value !== v && (f.value = m, v >= e.max && (v = e.max), v <= e.min && (v = e.min), l.value === void 0 && (v = 1), t("update:modelValue", v), t("change", v, f.value), a.value = v);
    };
    return {
      currentValue: a,
      minDisabled: i,
      maxDisabled: r,
      handleBlur: u,
      handleFocus: o,
      handleKeyUp: p,
      handleInputChange: d,
      handleInput: h,
      clickBtnHandle: S
    };
  }
});
function gt(e, t, a, l, s, i) {
  const r = w("minus"), n = w("el-icon"), u = w("plus"), o = w("k-input");
  return g(), $("div", {
    class: F(["el-input-number", { "is-disabled": e.disabled }, { "is-without-controls": !e.controls }, e.size ? "el-input-number--" + e.size : ""])
  }, [
    e.controls ? (g(), $("span", {
      key: 0,
      class: F(["el-input-number__decrease", { "is-disabled": e.minDisabled }]),
      role: "button",
      onClick: t[0] || (t[0] = (p) => e.clickBtnHandle("decrease"))
    }, [
      N(n, { class: "el-input__icon" }, {
        default: b(() => [
          N(r)
        ]),
        _: 1
      })
    ], 2)) : A("", !0),
    e.controls ? (g(), $("span", {
      key: 1,
      class: F(["el-input-number__increase", { "is-disabled": e.maxDisabled }]),
      role: "button",
      onClick: t[1] || (t[1] = (p) => e.clickBtnHandle("increase"))
    }, [
      N(n, { class: "el-input__icon" }, {
        default: b(() => [
          N(u)
        ]),
        _: 1
      })
    ], 2)) : A("", !0),
    N(o, H({
      ref: "input",
      modelValue: e.currentValue,
      "onUpdate:modelValue": t[2] || (t[2] = (p) => e.currentValue = p),
      disabled: e.disabled,
      type: e.type
    }, e.$attrs, {
      onBlur: e.handleBlur,
      maxlength: "6",
      onFocus: e.handleFocus,
      onChange: e.handleInputChange,
      onInput: e.handleInput,
      onKeyup: De(e.handleKeyUp, ["enter"])
    }), null, 16, ["modelValue", "disabled", "type", "onBlur", "onFocus", "onChange", "onInput", "onKeyup"])
  ], 2);
}
const G = /* @__PURE__ */ M(ht, [["render", gt]]);
G.install = function(e) {
  e.component(G.name, G);
};
/*! Element Plus v2.4.3 */
var Fe = {
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
const yt = B({
  name: "KPage",
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: !1 },
    small: { type: Boolean, default: !1 },
    pagerCount: { type: Number, default: 7 }
  },
  components: { ElConfigProvider: Be, ElPagination: Oe },
  emits: ["update:modelValue", "update:size", "current-change", "size-change", "change"],
  setup(e, { emit: t }) {
    const a = Fe, l = k(() => {
      const { total: o, size: p, showSize: d } = e;
      return d ? !0 : o > p;
    }), s = k({
      get() {
        return e.modelValue;
      },
      set(o) {
        t("update:modelValue", o);
      }
    }), i = k({
      get: () => e.size,
      set: (o) => t("update:size", o)
    }), r = k(() => {
      const o = ["total", "sizes", "prev", "pager", "next", "jumper"];
      return e.showSize || o.splice(1, 1), o.join(",");
    });
    return {
      locale: a,
      currentPage: s,
      layoutList: r,
      handleSizeChange: (o) => {
        s.value = 1, t("update:size", o), t("size-change", o), t("change", { page: e.size === o ? s.value : 1, size: o });
      },
      handleCurrentChange: (o) => {
        t("current-change", o), t("change", { page: o, size: e.size });
      },
      showPage: l,
      pageSize: i
    };
  }
}), vt = {
  key: 0,
  class: "page-right mt20"
};
function bt(e, t, a, l, s, i) {
  const r = w("el-pagination"), n = w("el-config-provider");
  return e.showPage ? (g(), $("div", vt, [
    N(n, { locale: e.locale }, {
      default: b(() => [
        N(r, H({
          onSizeChange: e.handleSizeChange,
          onCurrentChange: e.handleCurrentChange,
          currentPage: e.currentPage,
          "onUpdate:currentPage": t[0] || (t[0] = (u) => e.currentPage = u),
          "page-sizes": [10, 20, 50, 100],
          "page-size": e.pageSize,
          "onUpdate:pageSize": t[1] || (t[1] = (u) => e.pageSize = u),
          layout: e.layoutList,
          total: e.total,
          small: e.small,
          "pager-count": e.pagerCount
        }, e.$attrs), null, 16, ["onSizeChange", "onCurrentChange", "currentPage", "page-size", "layout", "total", "small", "pager-count"])
      ]),
      _: 1
    }, 8, ["locale"])
  ])) : A("", !0);
}
const U = /* @__PURE__ */ M(yt, [["render", bt], ["__scopeId", "data-v-30359b33"]]);
U.install = function(e) {
  e.component(U.name, U);
};
const $t = B({
  name: "KTable",
  components: { pagination: U, ElTable: Ie, ElTableColumn: ge },
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
    const a = k({
      get: () => e.tableData,
      set: (n) => t("update:tableData", n)
    }), l = k({
      get: () => e.modelValue,
      set: (n) => t("update:modelValue", n)
    }), s = (n) => t("current-change", n), i = ({ column: n, order: u }) => {
      const o = u === "ascending" ? 1 : 0;
      t("sort-change", {
        prop: n == null ? void 0 : n.rawColumnKey,
        order: u,
        sortType: o,
        currentPage: l.value,
        column: n,
        sortColumn: n == null ? void 0 : n.rawColumnKey
      });
    }, r = E(null);
    return {
      currentPage: l,
      tableDataList: a,
      changePage: s,
      sortChange: i,
      instance: r,
      elTable: r
    };
  }
}), wt = { key: 2 };
function _t(e, t, a, l, s, i) {
  const r = w("el-table-column"), n = w("el-table"), u = w("pagination");
  return g(), $(P, null, [
    N(n, H({
      data: e.tableDataList,
      style: { width: "100%" },
      class: "mt20",
      "header-cell-style": e.headerCellStyle
    }, e.$attrs, {
      "empty-text": e.emptyText,
      onSortChange: e.sortChange,
      ref: "elTable"
    }), j({
      default: b(() => [
        (g(!0), $(P, null, R(e.tableColumn, (o) => (g(), I(r, {
          key: o.prop,
          label: o.label,
          name: o.name,
          width: o.width,
          "min-width": o.minWidth,
          fixed: o.fixed,
          sortable: o.sortable,
          type: o.type,
          "show-overflow-tooltip": o.showOverflowTooltip ?? !0
        }, j({
          default: b((p) => [
            e.$slots.default ? _(e.$slots, "default", {
              key: 0,
              item: p.row,
              row: p.row,
              index: p.$index
            }) : o.custom && p.$index >= 0 ? _(e.$slots, o.custom, {
              key: 1,
              item: p.row,
              row: p.row,
              index: p.$index
            }) : (g(), $("span", wt, K(p.row[o.prop] ?? "-"), 1))
          ]),
          _: 2
        }, [
          o.header ? {
            name: "header",
            fn: b(() => [
              _(e.$slots, o.header)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["label", "name", "width", "min-width", "fixed", "sortable", "type", "show-overflow-tooltip"]))), 128))
      ]),
      _: 2
    }, [
      e.$slots.empty ? {
        name: "empty",
        fn: b(() => [
          _(e.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["data", "header-cell-style", "empty-text", "onSortChange"]),
    N(u, H({
      total: e.total,
      size: e.size,
      "show-size": e.showSize,
      modelValue: e.currentPage,
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.currentPage = o),
      onCurrentChange: e.changePage
    }, e.$attrs), null, 16, ["total", "size", "show-size", "modelValue", "onCurrentChange"])
  ], 64);
}
const ee = /* @__PURE__ */ M($t, [["render", _t]]);
ee.install = function(e) {
  e.component(ee.name, ee);
};
const kt = B({
  name: "KVirtualList",
  components: { ElScrollbar: ve },
  props: {
    height: { type: String, default: "500px" },
    rowStyle: { type: Object, default: () => ({}) },
    rowClassName: { type: [Function, String, Object], default: "" },
    data: { type: Array, default: () => [] }
  },
  emits: ["scroll", "row-click"],
  setup(e, { emit: t }) {
    const a = E(0), l = E(0), s = E(null), i = E(10), r = () => {
      var m, v;
      return ((m = document.querySelector(".table-row")) == null ? void 0 : m.offsetHeight) ?? ((v = document.querySelector(".list-item")) == null ? void 0 : v.offsetHeight) ?? 10;
    }, n = () => {
      const { clientHeight: m = 100 } = s.value.wrapRef || {};
      return Math.ceil(m / r()) + a.value;
    }, u = E(100);
    fe(() => {
      i.value = Number(n()) || 10, u.value = e.data.length * r();
    });
    const o = (m) => Math.floor(m / r()), p = (m) => Math.ceil(m * r()), d = (m) => m >= a.value && m <= i.value, h = k(() => e.data.filter((m, v) => d(v)));
    return O(() => e.data, (m) => {
      m.length || (a.value = 0, l.value = 0), e.data.forEach((v, T) => {
        v.rowIndex = T;
      }), pe(() => {
        u.value = e.data.length * r();
      });
    }), {
      startIndex: a,
      endIndex: i,
      startOffset: l,
      viewport: s,
      onScroll: (m) => {
        const { scrollTop: v, clientHeight: T } = s.value.wrapRef;
        a.value = o(v), l.value = p(a.value), i.value = n();
        const c = Math.abs(u.value - T - v);
        t("scroll", { distance: c, ...m });
      },
      showViewRanges: d,
      containHeight: u,
      listRanges: h,
      rowClick: (m, v) => {
        t("row-click", m, v);
      },
      rowClassHandle: (m, v) => typeof e.rowClassName == "function" ? e.rowClassName({ row: m, rowIndex: v }) : e.rowClassName
    };
  }
}), Ct = {
  class: "virtual-list",
  "data-testid": "virtual-list"
}, St = ["onClick"];
function Vt(e, t, a, l, s, i) {
  const r = w("el-scrollbar");
  return g(), I(r, H({
    height: e.height,
    ref: "viewport"
  }, e.$attrs, { onScroll: e.onScroll }), {
    default: b(() => [
      V("div", Ct, [
        V("div", {
          class: "list-contain",
          style: x({ height: `${e.containHeight}px` })
        }, null, 4),
        V("div", {
          class: "list-content",
          style: x({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          (g(!0), $(P, null, R(e.listRanges, (n, u) => (g(), $("div", {
            key: u,
            class: F(["list-item", e.rowClassHandle(n, n.rowIndex)]),
            style: x(e.rowStyle),
            onClick: (o) => e.rowClick(n, n.rowIndex)
          }, [
            _(e.$slots, "default", {
              row: n,
              index: n.rowIndex
            }, () => [
              L(K(n.name), 1)
            ], !0)
          ], 14, St))), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["height", "onScroll"]);
}
const Z = /* @__PURE__ */ M(kt, [["render", Vt], ["__scopeId", "data-v-e53aecaa"]]);
Z.install = function(e) {
  e.component(Z.name, Z);
};
const ze = {
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
function Ke(e) {
  const t = E(null), a = (r) => {
    var h, f, S, y;
    let n = {};
    const {
      align: u,
      width: o,
      fixed: p,
      minWidth: d
    } = r;
    if (u && (n["text-center"] = `${u}`), d && (n["min-width"] = `${d}`), o && (n = {
      ...n,
      width: `${o}`,
      flex: "inherit",
      "flex-shrink": 0
    }), p) {
      const m = e.tableColumn.findIndex((T) => T.prop === r.prop), v = e.tableColumn.length;
      if (n = {
        ...n,
        position: "sticky",
        "z-index": 50
      }, p === "left") {
        const T = (h = e.tableColumn.filter((C) => C.fixed === "left")) == null ? void 0 : h.length;
        let c = 0;
        m > 0 && m < v - 1 && T > 1 && (c = (f = t.value) == null ? void 0 : f.at(m - 1).clientWidth), n.left = `${c}px`;
        let D = 0;
        e.tableColumn.forEach((C, z) => {
          C.fixed === "left" && (D = z);
        }), D === m && (n["box-shadow"] = "3px 0px 4px #b0a8a836");
      } else {
        const T = (S = e.tableColumn.filter((C) => C.fixed && C.fixed !== "left")) == null ? void 0 : S.length;
        let c = 0;
        m < v - 1 && T > 1 && (c = (y = t.value) == null ? void 0 : y.at(m + 1).clientWidth), e.tableColumn.findIndex((C) => C.fixed && C.fixed !== "left") === m && (n["box-shadow"] = "-3px 0 4px #b0a8a836"), n.right = `${c}px`;
      }
    }
    return e.isFooter && (n.color = "#606266"), n;
  }, l = E(null), s = (r) => {
    const n = e.tableData.reduce((u, o) => u + Number(o[r.prop]), 0);
    return Number.isNaN(n) ? "N/A" : n.toFixed(2);
  };
  return {
    headerColmn: t,
    headerClass: a,
    tableHeader: l,
    getSummaries: (r, n) => e.summaryMethod ? e.summaryMethod({ row: r, index: n }) : n ? s(r) : e.sumText
  };
}
const Et = { class: "flex table-border-bottom header-content" }, Tt = {
  key: 0,
  class: "table-header-sort flex-column flex-center"
}, Dt = { class: "sort-wrapper" }, Nt = ["onClick"], Bt = ["onClick"], It = {
  __name: "headerFooter",
  props: {
    ...ze,
    isFooter: { type: Boolean, default: !1 }
  },
  emits: ["sort-change"],
  setup(e, { expose: t, emit: a }) {
    const l = e, s = a, { headerClass: i, tableHeader: r } = Ke(l), n = E(null), u = E({}), o = (d, h) => {
      u.value = h, n.value = n.value === d ? null : d, s("sort-change", { column: h, sortType: n.value });
    };
    return t({
      setScrollLeft: (d) => {
        r.value.scrollLeft = `${d}`;
      }
    }), (d, h) => (g(), $("div", {
      class: "table-header overflow",
      ref_key: "tableHeader",
      ref: r
    }, [
      V("div", Et, [
        (g(!0), $(P, null, R(d.tableColumn, (f, S) => (g(), $("div", {
          key: S,
          class: "header-column cell flex-align-center",
          ref_for: !0,
          ref: "headerColmn",
          style: x([d.headerCellStyle, Y(i)(f)])
        }, [
          _(d.$slots, "default", {
            row: f,
            index: S
          }, () => [
            L(K(f.label), 1)
          ], !0),
          f.sortable && !e.isFooter ? (g(), $("div", Tt, [
            V("span", Dt, [
              V("i", {
                class: F(["sort-caret ascending", { "bottom-caret": n.value === "ascending" && u.value.prop == f.prop }]),
                onClick: (y) => o("ascending", f)
              }, null, 10, Nt),
              V("i", {
                class: F(["sort-caret descending", { "top-caret": n.value === "descending" && u.value.prop == f.prop }]),
                onClick: (y) => o("descending", f)
              }, null, 10, Bt)
            ])
          ])) : A("", !0)
        ], 4))), 128))
      ])
    ], 512));
  }
}, Ht = /* @__PURE__ */ M(It, [["__scopeId", "data-v-2fd08206"]]), Mt = B({
  name: "KTableV2",
  components: { virtualList: Z, headerFooter: Ht },
  props: ze,
  emits: ["sort-change"],
  setup(e, { emit: t }) {
    const a = k(() => e.tableColumn.map((h, f) => ({ ...h, keyId: f }))), {
      headerColmn: l,
      headerClass: s,
      tableHeader: i,
      getSummaries: r
    } = Ke(e), n = E(null), u = ({ scrollLeft: h }) => {
      var f, S;
      (f = i.value) == null || f.setScrollLeft(h), (S = n.value) == null || S.setScrollLeft(h);
    }, o = ({ column: h, sortType: f }) => t("sort-change", { column: h, sortType: f }), p = E(null), d = (h) => {
      var f;
      return (f = p.value) == null ? void 0 : f.viewport.setScrollTop(h);
    };
    return {
      ...Ae(e),
      columnList: a,
      headerClass: s,
      tableHeader: i,
      tableBottom: n,
      scrollHandle: u,
      headerColmn: l,
      clickSortCaret: o,
      virtualRef: p,
      setScrollTop: d,
      getSummaries: r
    };
  }
}), Ft = { class: "table-v2 el-table flex-column" }, zt = { class: "flex table-body" };
function Kt(e, t, a, l, s, i) {
  const r = w("headerFooter"), n = w("virtualList");
  return g(), $("div", Ft, [
    N(r, {
      ref: "tableHeader",
      "table-column": e.tableColumn,
      onSortChange: e.clickSortCaret
    }, {
      default: b(({ row: u, index: o }) => [
        _(e.$slots, u == null ? void 0 : u.header, {
          row: u,
          index: o
        }, () => [
          L(K(u.label), 1)
        ], !0)
      ]),
      _: 3
    }, 8, ["table-column", "onSortChange"]),
    e.tableData.length ? (g(), I(n, H({
      key: 0,
      data: e.tableData,
      always: "",
      ref: "virtualRef",
      "row-class-name": e.rowClassName
    }, e.$attrs, {
      height: e.height,
      onScroll: e.scrollHandle
    }), {
      default: b(({ row: u, index: o }) => [
        _(e.$slots, "content", {}, () => [
          V("div", zt, [
            (g(!0), $(P, null, R(e.columnList, (p) => (g(), $("div", {
              key: p.keyId,
              class: F(["cell table-row table-border-bottom flex-align-center", { "fixed-cell": p.fixed }]),
              ref_for: !0,
              ref: "bodyCell",
              style: x(e.headerClass(p))
            }, [
              V("div", {
                class: F({ "text-overflow": p.showOverflowTooltip ?? !0 })
              }, [
                _(e.$slots, (p == null ? void 0 : p.custom) ?? "default", {
                  row: u,
                  index: o
                }, () => [
                  L(K(u[p.prop]), 1)
                ], !0)
              ], 2)
            ], 6))), 128))
          ])
        ], !0)
      ]),
      _: 3
    }, 16, ["data", "row-class-name", "height", "onScroll"])) : (g(), $("div", {
      key: 1,
      class: "flex-center pt20 pb20",
      style: x({ height: e.height })
    }, [
      _(e.$slots, "empty", {}, () => [
        L(K(e.emptyText), 1)
      ], !0)
    ], 4)),
    _(e.$slots, "footer", {}, () => [
      e.showSummary || e.$slots.footer ? (g(), I(r, {
        key: 0,
        ref: "tableBottom",
        "table-column": e.tableColumn,
        "is-footer": ""
      }, {
        default: b(({ row: u, index: o }) => [
          L(K(e.getSummaries(u, o)), 1)
        ]),
        _: 1
      }, 8, ["table-column"])) : A("", !0)
    ], !0)
  ]);
}
const te = /* @__PURE__ */ M(Mt, [["render", Kt], ["__scopeId", "data-v-393e4622"]]);
te.install = function(e) {
  e.component(te.name, te);
};
const Lt = {
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
}, Pt = { key: 2 }, At = {
  key: 0,
  class: "flex-between"
}, Rt = { class: "flex1 mr20 mt20" }, X = /* @__PURE__ */ Object.assign({
  name: "KBatchTable"
}, {
  __name: "main",
  props: Lt,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { expose: t, emit: a }) {
    const l = e, s = a, i = E(null), r = E([]), n = (c) => {
      c ? c.forEach((D) => {
        const C = l.tableData.find((z) => z[l.keyId] === D[l.keyId]);
        i.value.toggleRowSelection(C ?? D);
      }) : i.value.clearSelection();
    }, u = (c, D = !0) => {
      D ? r.value.push(c) : r.value = r.value.filter((C) => C[l.keyId] !== (c == null ? void 0 : c[l.keyId]));
    }, o = (c) => c[l.checkKey] ?? !c[l.checkKey], p = (c, D) => {
      const C = c.some((z) => z[l.keyId] === (D == null ? void 0 : D[l.keyId]));
      u(D, C);
    }, d = (c) => f(c), h = (c) => {
      if (!o(c))
        return;
      n([c]);
      const D = r.value.some((C) => C[l.keyId] === c[l.keyId]);
      u(c, !D), s("row-click", c);
    };
    O(() => r.value, (c, D) => {
      D && s("update:modelValue", c);
    }, { immediate: !0, deep: !0 });
    const f = (c = []) => {
      n(), c.forEach((D) => {
        const C = l.tableData.find((z) => z[l.keyId] === D[l.keyId]);
        i.value.toggleRowSelection(C ?? D, !!o(D));
      }), r.value = c;
    }, S = () => f();
    O(() => l.modelValue, (c, D) => {
      !c.length && D.length && f();
    });
    const y = (c) => c[l.keyId], m = () => {
      l.selectList.length && l.selectList.forEach((c) => {
        l.tableData.forEach((D) => {
          D[l.checkKey] = D[l.checkKey] ?? 1, y(c) === y(D) && (D[l.checkKey] = 0);
        });
      });
    };
    O(() => l.tableData, (c) => {
      pe(() => {
        c.length && m(), c.length && f(l.modelValue);
      });
    }, { immediate: !0 });
    const v = k({
      get: () => l.page,
      set: (c) => s("update:page", c)
    }), T = (c) => {
      s("current-change", c);
    };
    return t({
      toggleSelection: f,
      handleRowClick: h,
      clear: S
    }), (c, D) => (g(), $(P, null, [
      N(Y(Ie), H({
        ref_key: "multipleTableRef",
        ref: i,
        "empty-text": "暂无数据"
      }, c.$attrs, {
        data: c.tableData,
        "header-cell-style": c.headerCellStyle,
        onSelect: p,
        onSelectAll: d,
        onRowClick: h
      }), j({
        default: b(() => [
          N(Y(ge), {
            type: "selection",
            width: "55",
            selectable: o
          }),
          (g(!0), $(P, null, R(c.tableColumn, (C) => (g(), I(Y(ge), {
            label: C.label,
            key: C.prop,
            width: C.width,
            fixed: C.fixed,
            "min-width": C.minWidth,
            "show-overflow-tooltip": C.showOverflowTooltip ?? !0
          }, j({
            default: b((z) => [
              c.$slots.default ? _(c.$slots, "default", {
                key: 0,
                item: z.row,
                row: z.row,
                column: C,
                index: z.$index
              }) : A("", !0),
              C.custom && z.$index >= 0 ? _(c.$slots, C.custom, {
                key: 1,
                item: z.row,
                column: C,
                row: z.row,
                index: z.$index
              }) : (g(), $("span", Pt, K(z.row[C.prop] ?? "-"), 1))
            ]),
            _: 2
          }, [
            C.header ? {
              name: "header",
              fn: b(() => [
                _(c.$slots, "header", { column: C }),
                _(c.$slots, C.header, { column: C })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["label", "width", "fixed", "min-width", "show-overflow-tooltip"]))), 128))
        ]),
        _: 2
      }, [
        c.$slots.empty ? {
          name: "empty",
          fn: b(() => [
            _(c.$slots, "empty")
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["data", "header-cell-style"]),
      c.showFooter ? (g(), $("div", At, [
        V("div", Rt, [
          c.$slots.footer ? _(c.$slots, "footer", { key: 0 }) : A("", !0)
        ]),
        N(Y(U), H({
          total: c.total,
          "show-size": c.showSize
        }, c.$attrs, {
          modelValue: v.value,
          "onUpdate:modelValue": D[0] || (D[0] = (C) => v.value = C),
          onCurrentChange: T
        }), null, 16, ["total", "show-size", "modelValue"])
      ])) : A("", !0)
    ], 64));
  }
});
X.install = function(e) {
  e.component(X.name, X);
};
const xt = B({
  name: "KDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { type: String, default: "提示" },
    showFooter: { type: Boolean, default: !0 },
    customClass: { type: String, default: "" },
    class: { type: String, default: "" },
    confirmDisabled: { type: Boolean, default: !1 }
  },
  components: { ElDialog: Ue, ElButton: me },
  emits: ["update:modelValue", "confirm", "open", "close"],
  setup(e, { emit: t }) {
    const a = k({
      get: () => e.modelValue,
      set: (n) => t("update:modelValue", n)
    }), l = k(() => e.class ? e.class : e.customClass ? e.customClass : e.showFooter ? "custom-dialog" : "custom-dialog no-footer");
    return {
      dialogVisible: a,
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
}), Yt = /* @__PURE__ */ V("span", null, "这是一段信息", -1), Ot = { class: "dialog-footer" };
function Ut(e, t, a, l, s, i) {
  const r = w("el-button"), n = w("el-dialog");
  return g(), I(n, H({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": t[1] || (t[1] = (u) => e.dialogVisible = u),
    class: e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), j({
    default: b(() => [
      _(e.$slots, "default", {}, () => [
        Yt
      ])
    ]),
    _: 2
  }, [
    e.showFooter ? {
      name: "footer",
      fn: b(() => [
        _(e.$slots, "footer", {}, () => [
          V("span", Ot, [
            N(r, {
              size: "large",
              onClick: t[0] || (t[0] = (u) => e.dialogVisible = !1)
            }, {
              default: b(() => [
                L("取 消")
              ]),
              _: 1
            }),
            N(r, {
              size: "large",
              type: "primary",
              disabled: e.confirmDisabled,
              onClick: e.confirmHandler
            }, {
              default: b(() => [
                L("确 定")
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
const ae = /* @__PURE__ */ M(xt, [["render", Ut]]);
ae.install = function(e) {
  e.component(ae.name, ae);
};
const jt = B({
  name: "KBreadcrumb",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: { ElSpace: je },
  setup(e) {
    const a = Ne().appContext.config.globalProperties.$router;
    return { clickHandle: (s, i) => {
      if (s.url) {
        window.location.href = s.url;
        return;
      }
      const r = i - e.list.length + 1;
      s.path ? a == null || a.push(s.path) : r && (a == null || a.go(r));
    } };
  }
}), Wt = { class: "crumb-header flex-between" }, qt = { class: "crumb-contain" }, Gt = ["onClick"];
function Zt(e, t, a, l, s, i) {
  const r = w("el-space");
  return g(), $("div", Wt, [
    V("div", qt, [
      N(r, { spacer: "/" }, {
        default: b(() => [
          (g(!0), $(P, null, R(e.list, (n, u) => (g(), $("span", {
            key: u,
            class: F({ "crumb-item": u !== e.list.length - 1 }),
            onClick: (o) => e.clickHandle(n, u)
          }, K(n.title), 11, Gt))), 128))
        ]),
        _: 1
      })
    ]),
    _(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ne = /* @__PURE__ */ M(jt, [["render", Zt], ["__scopeId", "data-v-fbf3e6d2"]]);
ne.install = function(e) {
  e.component(ne.name, ne);
};
const Xt = B({
  name: "KTabs",
  components: { ElTabs: We, ElTabPane: qe },
  props: {
    type: { type: String, default: "" },
    isRouter: { type: Boolean, default: !1 },
    modelValue: { type: [String, Number], default: "" },
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
    const a = Ne(), l = k(() => a.appContext.config.globalProperties.$route), s = a.appContext.config.globalProperties.$router, i = k(() => {
      var o, p;
      return ((o = l.value) == null ? void 0 : o.params.type) || ((p = l.value) == null ? void 0 : p.name);
    }), r = E(i.value);
    J(() => {
      r.value = e.modelValue || i.value, t("update:modelValue", r.value);
    });
    const n = k(() => l.value.query);
    return { activeName: r, handleClick: (o) => {
      if (e.isRouter) {
        const p = { path: `${o.paneName}`, query: n.value };
        e.replace ? s.replace(p) : s.push(p);
      }
      t("tab-click", o.paneName), t("change", o.paneName), t("update:modelValue", o.paneName);
    } };
  }
}), Jt = { class: "tabs-right ml10" };
function Qt(e, t, a, l, s, i) {
  const r = w("el-tab-pane"), n = w("el-tabs");
  return g(), $("div", {
    class: F(["k-tabs", { "style-card": !e.type, "style-padding": e.isPadding && !e.type }])
  }, [
    N(n, H({
      class: "flex-tabs",
      type: e.type
    }, e.$attrs, {
      modelValue: e.activeName,
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.activeName = u),
      onTabClick: e.handleClick
    }), {
      addIcon: b(() => [
        _(e.$slots, "addIcon")
      ]),
      default: b(() => [
        (g(!0), $(P, null, R(e.tabsList, (u, o) => (g(), I(r, {
          label: u.label,
          name: u.name,
          key: u.name
        }, {
          default: b(() => [
            _(e.$slots, "label", {
              row: u,
              index: o
            })
          ]),
          _: 2
        }, 1032, ["label", "name"]))), 128))
      ]),
      _: 3
    }, 16, ["type", "modelValue", "onTabClick"]),
    V("div", Jt, [
      _(e.$slots, "right"),
      _(e.$slots, "default")
    ])
  ], 2);
}
const le = /* @__PURE__ */ M(Xt, [["render", Qt]]);
le.install = function(e) {
  e.component(le.name, le);
};
const be = B({
  name: "KPicker",
  components: {
    batchTable: X,
    kInputNumber: G,
    Delete: rt,
    ElRow: Ge,
    ElCol: Ze,
    ElButton: me,
    ElIcon: He,
    ElScrollbar: ve,
    ElTooltip: Me
  },
  emits: ["update:modelValue", "update:page"],
  props: {
    modelValue: { type: Array, default: () => [] },
    selectList: { type: Array, default: () => [] },
    page: { type: Number, default: 1 },
    tableData: { type: Array, default: () => [] },
    tableColumn: { type: Array, default: () => [] },
    keyId: { type: String, default: "id" },
    checkKey: { type: String, default: "isSelect" },
    keyName: { type: String, default: "name" },
    showCount: { type: Boolean, default: !1 },
    height: { type: String, default: "442px" },
    scrollbarAlwaysOn: { type: Boolean, default: !1 },
    rightWidth: { type: String, default: "" },
    rightSpan: { type: Number, default: 9 }
  },
  setup(e, { emit: t }) {
    const a = k({
      get: () => e.modelValue,
      set: (f) => t("update:modelValue", f)
    });
    J(() => {
      e.showCount && a.value.forEach((f) => {
        f.num = f.num ?? 1;
      });
    });
    const l = E(null), s = () => l.value.toggleSelection(), i = (f) => l.value.handleRowClick(f), r = E(1), n = () => {
      r.value = 1, s();
    }, u = (f) => f[e.keyName], o = (f) => f[e.keyId], p = k(() => 24 - e.rightSpan), d = k(() => e.rightWidth), h = k(() => e.height);
    return {
      multipleSelection: a,
      batchTableRef: l,
      currentPage: r,
      emptyHandler: s,
      resetData: n,
      deleteHandler: i,
      getName: u,
      getId: o,
      rightwidth: d,
      autoheight: h,
      leftSpan: p
    };
  }
}), ke = () => {
  ye((e) => ({
    "3d88ab14": e.autoheight,
    f8b84fec: e.rightwidth
  }));
}, Ce = be.setup;
be.setup = Ce ? (e, t) => (ke(), Ce(e, t)) : ke;
const ea = { class: "k-picker flex-column" }, ta = { class: "col-left height-auto flex-column" }, aa = { class: "selete-header flex-between" }, na = { class: "selete-content flex1" }, la = { class: "flex flex1 mr20 overflow" }, oa = { class: "text-overflow" };
function ua(e, t, a, l, s, i) {
  const r = w("batchTable"), n = w("el-col"), u = w("delete"), o = w("el-icon"), p = w("el-button"), d = w("el-tooltip"), h = w("k-input-number"), f = w("el-scrollbar"), S = w("el-row");
  return g(), $("div", ea, [
    _(e.$slots, "top", {}, void 0, !0),
    N(S, {
      gutter: 10,
      class: F(["height-auto mb20", { "custom-right": e.rightwidth }])
    }, {
      default: b(() => [
        N(n, {
          span: e.leftSpan,
          class: "height-auto flex1"
        }, {
          default: b(() => [
            V("div", ta, [
              N(r, {
                ref: "batchTableRef",
                "show-footer": !1,
                height: e.height,
                "table-data": e.tableData,
                "table-column": e.tableColumn,
                "select-list": e.selectList,
                "key-id": e.keyId,
                "check-key": e.checkKey,
                modelValue: e.multipleSelection,
                "onUpdate:modelValue": t[0] || (t[0] = (y) => e.multipleSelection = y),
                page: e.currentPage,
                "onUpdate:page": t[1] || (t[1] = (y) => e.currentPage = y),
                "scrollbar-always-on": e.scrollbarAlwaysOn
              }, {
                header: b(({ column: y }) => [
                  _(e.$slots, y.header, { column: y }, void 0, !0)
                ]),
                default: b(({ row: y, column: m, index: v }) => [
                  m.custom && v >= 0 ? _(e.$slots, m.custom, {
                    key: 0,
                    row: y,
                    index: v
                  }, void 0, !0) : A("", !0)
                ]),
                _: 3
              }, 8, ["height", "table-data", "table-column", "select-list", "key-id", "check-key", "modelValue", "page", "scrollbar-always-on"])
            ])
          ]),
          _: 3
        }, 8, ["span"]),
        N(n, {
          span: e.rightSpan,
          class: "height-auto flex-column flex1"
        }, {
          default: b(() => [
            V("div", {
              class: "col-right flex-column height-auto",
              style: x({ height: e.height })
            }, [
              _(e.$slots, "right", {}, () => [
                V("div", aa, [
                  _(e.$slots, "right-header", {}, () => [
                    V("span", null, [
                      L("已选择"),
                      V("span", null, "(" + K(e.multipleSelection.length) + ")", 1)
                    ]),
                    N(p, {
                      type: "primary",
                      text: "",
                      disabled: !e.multipleSelection.length,
                      onClick: e.emptyHandler
                    }, {
                      default: b(() => [
                        N(o, null, {
                          default: b(() => [
                            N(u)
                          ]),
                          _: 1
                        }),
                        L(" 清空 ")
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"])
                  ], !0)
                ]),
                V("div", na, [
                  N(f, { always: "" }, {
                    default: b(() => [
                      (g(!0), $(P, null, R(e.multipleSelection, (y) => (g(), $("div", {
                        class: F(["flex-between pl10 pr10", { mt10: e.showCount }]),
                        key: e.getId(y)
                      }, [
                        V("div", la, [
                          N(d, {
                            effect: "dark",
                            content: e.getName(y),
                            placement: "top"
                          }, {
                            default: b(() => [
                              V("span", oa, K(e.getName(y)), 1)
                            ]),
                            _: 2
                          }, 1032, ["content"])
                        ]),
                        e.showCount ? (g(), I(h, {
                          key: 0,
                          modelValue: y.num,
                          "onUpdate:modelValue": (m) => y.num = m,
                          min: 1,
                          class: "width-120 flex-shrink mr10"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : A("", !0),
                        N(p, {
                          type: "primary",
                          text: "",
                          onClick: (m) => e.deleteHandler(y)
                        }, {
                          default: b(() => [
                            L(" 删除 ")
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
        }, 8, ["span"])
      ]),
      _: 3
    }, 8, ["class"]),
    _(e.$slots, "footer", {}, void 0, !0)
  ]);
}
const oe = /* @__PURE__ */ M(be, [["render", ua], ["__scopeId", "data-v-26399515"]]);
oe.install = function(e) {
  e.component(oe.name, oe);
};
const sa = B({
  name: "KTooltip",
  props: {
    placement: { type: String, default: "top" },
    showIcon: { type: Boolean, default: !1 },
    overflow: { type: Boolean, default: !1 }
  },
  components: { Warning: mt, ElTooltip: Me }
});
function ra(e, t, a, l, s, i) {
  const r = w("warning"), n = w("el-icon"), u = w("el-tooltip");
  return g(), $("div", {
    class: F(["flex flex1", { "text-overflow": e.overflow }])
  }, [
    N(u, H(e.$attrs, { placement: e.placement }), {
      content: b(() => [
        _(e.$slots, "content", {}, void 0, !0)
      ]),
      default: b(() => [
        V("div", {
          class: F(["flex-center", { "text-overflow": e.overflow }])
        }, [
          _(e.$slots, "default", {}, void 0, !0),
          e.showIcon ? (g(), I(n, {
            key: 0,
            class: "ml5"
          }, {
            default: b(() => [
              _(e.$slots, "icon", {}, () => [
                N(r)
              ], !0)
            ]),
            _: 3
          })) : A("", !0)
        ], 2)
      ]),
      _: 3
    }, 16, ["placement"])
  ], 2);
}
const ue = /* @__PURE__ */ M(sa, [["render", ra], ["__scopeId", "data-v-734f22cf"]]);
ue.install = function(e) {
  e.component(ue.name, ue);
};
const ia = {
  __name: "main",
  setup(e) {
    return (t, a) => (g(), I(Y(Be), { locale: Y(Fe) }, {
      default: b(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale"]));
  }
}, Le = {
  __name: "datePicker",
  props: {
    type: { type: String, default: "daterange" },
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, l = k(() => a.type === "datetimerange" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"), s = (d) => {
      const h = /* @__PURE__ */ new Date(), f = /* @__PURE__ */ new Date();
      return h.setTime(h.getTime() - 3600 * 1e3 * 24 * d), h.setHours(0, 0, 0, 0), f.setHours(23, 59, 59, 999), a.type === "date" ? h : [h, f];
    }, i = [
      {
        text: "最近一周",
        value: () => s(7)
      },
      {
        text: "最近一个月",
        value: () => s(30)
      },
      {
        text: "最近三个月",
        value: () => s(90)
      }
    ], r = [new Date(2e3, 1, 1, 0, 0, 0), new Date(2e3, 2, 1, 23, 59, 59)], n = t, u = k({
      get: () => a.modelValue,
      set: (d) => n("update:modelValue", d)
    }), o = (d) => d.getTime() > Date.now(), p = (d) => n("change", d);
    return (d, h) => (g(), I(Y(Xe), H({
      modelValue: u.value,
      "onUpdate:modelValue": h[0] || (h[0] = (f) => u.value = f),
      type: e.type,
      "unlink-panels": "",
      "range-separator": "至",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期",
      shortcuts: i,
      format: l.value,
      "value-format": "YYYY-MM-DD HH:mm:ss",
      "disabled-date": o,
      "default-time": r,
      editable: !1
    }, d.$attrs, { onChange: p }), null, 16, ["modelValue", "type", "format"]));
  }
}, da = { class: "date-picker flex" }, ca = {
  __name: "selectType",
  props: {
    daterange: { type: Boolean, default: !1 },
    // 是否选择模式下 是否日期范围
    modelValue: { type: [String, Array], default: () => [] }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, l = E(0), s = E([
      { value: 0, label: "日" },
      { value: 1, label: "周" },
      { value: 2, label: "月" },
      { value: 3, label: "年" }
    ]), i = k({
      get: () => a.modelValue,
      set: (S) => p("update:modelValue", S)
    }), r = (S) => S.getTime() > Date.now(), n = k(() => ({
      0: "YYYY-MM-DD",
      1: "YYYY 第 ww 周",
      2: "YYYY-MM",
      3: "YYYY"
    })[l.value]), u = k(() => ({
      0: a.daterange ? "daterange" : "date",
      1: "week",
      2: "month",
      3: "year"
    })[l.value]), o = k(() => {
      const { label: S } = s.value.filter((y) => y.value === l.value)[0];
      return `选择${S}`;
    }), p = t, d = E("");
    J(() => {
      if (Array.isArray(i.value)) {
        const [S, y] = i.value;
        d.value = [S, y];
      }
    });
    const h = (S) => {
      if (S) {
        if (Array.isArray(i.value)) {
          const [y] = i.value;
          i.value = y;
        }
      } else
        a.daterange && (i.value = d.value);
      f();
    }, f = () => {
      p("change", { type: l.value, time: i.value });
    };
    return (S, y) => {
      const m = w("el-option"), v = w("el-select"), T = w("el-date-picker");
      return g(), $("div", da, [
        N(v, {
          modelValue: l.value,
          "onUpdate:modelValue": y[0] || (y[0] = (c) => l.value = c),
          class: "width-100 mr10",
          onChange: h
        }, {
          default: b(() => [
            (g(!0), $(P, null, R(s.value, (c) => (g(), I(m, {
              key: c.value,
              label: c.label,
              value: c.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        V("div", null, [
          e.daterange && !l.value ? (g(), I(Le, H({
            key: 0,
            modelValue: i.value,
            "onUpdate:modelValue": y[1] || (y[1] = (c) => i.value = c)
          }, S.$props, { onChange: f }), null, 16, ["modelValue"])) : (g(), I(T, {
            key: 1,
            modelValue: i.value,
            "onUpdate:modelValue": y[2] || (y[2] = (c) => i.value = c),
            type: u.value,
            format: n.value,
            "value-format": "YYYY-MM-DD HH:mm:ss",
            placeholder: o.value,
            "disabled-date": r,
            clearable: !1,
            editable: !1,
            "start-placeholder": "开始日期",
            "end-placeholder": "结束日期",
            onChange: f
          }, null, 8, ["modelValue", "type", "format", "placeholder"]))
        ])
      ]);
    };
  }
}, pa = B({
  name: "KDatePicker",
  props: {
    selectType: { type: Boolean, default: !1 }
    // 是否选择模式（年月日）
    // daterange: { type: Boolean, default: false }, // 是否选择模式下 是否日期范围
  },
  components: { configProvider: ia, selectType: ca, datePicker: Le },
  setup() {
  }
});
function fa(e, t, a, l, s, i) {
  const r = w("selectType"), n = w("datePicker"), u = w("config-provider");
  return g(), I(u, null, {
    default: b(() => [
      e.selectType ? (g(), I(r, _e(H({ key: 0 }, e.$attrs)), null, 16)) : (g(), I(n, _e(H({ key: 1 }, e.$attrs)), null, 16))
    ]),
    _: 1
  });
}
const se = /* @__PURE__ */ M(pa, [["render", fa]]);
se.install = function(e) {
  e.component(se.name, se);
};
const $e = B({
  name: "KNumberKeyboard",
  components: { ElButton: me },
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
    const a = [
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
    ], l = k(() => (e.decimalPoint && a.push({ name: "." }), a)), s = k({
      get: () => e.modelValue,
      set: (h) => t("update:modelValue", h)
    }), i = () => {
      pe(() => t("change", s.value));
    }, r = (h) => {
      if (e.maxlength && s.value.length >= Number(e.maxlength))
        return;
      const f = s.value.indexOf("."), S = s.value.split(".");
      S.length === 2 && (h === "." || S[1].length >= e.precision) || (s.value = `${f === 0 ? 0 : ""}${s.value}${h}`, !e.startZero && s.value.slice(0, 1) === "0" && (s.value = s.value.slice(1) + h), i());
    }, n = (h) => {
      h === "delete" ? s.value = s.value.slice(0, s.value.length - 1) : h === "clear" && (s.value = "", t("clear")), h === "confirm" ? t("confirm") : i();
    }, u = ({ key: h, name: f }) => {
      h ? n(h) : r(f);
    }, o = k(() => `${Number(4 * e.width + 20)}px`), p = k(() => `${e.width}px`), d = k(() => e.decimalPoint ? 3 : 4);
    return {
      keyboardList: l,
      clickHandleBtn: u,
      clickBtn: r,
      totalwidth: o,
      gridwidth: p,
      numberVal: s,
      zerogridend: d
    };
  }
}), Se = () => {
  ye((e) => ({
    "5f76155e": e.totalwidth,
    af867fde: e.gridwidth,
    c0d11484: e.zerogridend
  }));
}, Ve = $e.setup;
$e.setup = Ve ? (e, t) => (Se(), Ve(e, t)) : Se;
const ma = { class: "number-keyboard mt10" }, ha = { class: "number-ul" };
function ga(e, t, a, l, s, i) {
  const r = w("el-button");
  return g(), $("div", ma, [
    V("ul", ha, [
      (g(!0), $(P, null, R(e.keyboardList, (n, u) => (g(), $("li", {
        key: u,
        class: F(n.class)
      }, [
        N(r, {
          type: n.type,
          color: e.color,
          onClick: (o) => e.clickHandleBtn(n)
        }, {
          default: b(() => [
            L(K(n.name), 1)
          ]),
          _: 2
        }, 1032, ["type", "color", "onClick"])
      ], 2))), 128))
    ])
  ]);
}
const re = /* @__PURE__ */ M($e, [["render", ga], ["__scopeId", "data-v-2e1be318"]]);
re.install = function(e) {
  e.component(re.name, re);
};
const ya = B({
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
    const a = k({
      get: () => e.modelValue,
      set: (n) => t("update:modelValue", n)
    }), l = (n) => e.decimals ? Number(n).toFixed(e.decimals) : n, s = E(null), i = (n = !0) => {
      const u = s.value;
      if (!u)
        return;
      const o = +u.innerText, p = +a.value / 200, d = n && o < Number(a.value) || !n && o > Number(a.value);
      n && o > e.end || o < e.start || (d ? r(u, n ? o + p : o - p, n) : u.interText = l(a.value));
    }, r = (n, u, o = !0) => {
      const p = u < e.start ? e.start : `${e.decimals ? u : Math.floor(u)}`, d = u > e.end ? e.end : `${e.decimals ? u : Math.ceil(u)}`;
      n.innerText = l(o ? d : p);
      const h = setTimeout(() => {
        clearTimeout(h), o ? i() : i(!1);
      }, 5);
    };
    return fe(() => {
      s.value && e.autoinit && i();
    }), Re(() => {
      if (e.autoinit) {
        const n = +s.value.innerText;
        i(n < Number(a.value));
      }
    }), { textValue: a, spanText: s, setDeimals: l };
  }
}), va = { class: "auto-counter" }, ba = { class: "mr5" }, $a = { class: "ml5" };
function wa(e, t, a, l, s, i) {
  return g(), $("div", va, [
    V("span", ba, K(e.prefix), 1),
    V("span", {
      class: "span-text",
      ref: "spanText"
    }, K(e.autoinit ? e.setDeimals(e.start) : e.setDeimals(e.textValue)), 513),
    V("span", $a, K(e.suffix), 1)
  ]);
}
const ie = /* @__PURE__ */ M(ya, [["render", wa]]);
ie.install = function(e) {
  e.component(ie.name, ie);
};
const _a = B({
  name: "KCollapseButton",
  components: { ElIcon: He, CaretLeft: lt, CaretRight: ut },
  props: {
    style: { type: Object, default: () => ({}) },
    position: { type: String, default: "right" }
  },
  emits: ["click"],
  setup(e, { emit: t, slots: a }) {
    const l = E(!1), s = E(null);
    fe(() => {
      const { parentNode: n } = s.value;
      n.style.position = "relative", n.style.overflow = "initial";
    });
    const i = k(() => {
      const { clientWidth: n, clientHeight: u } = s.value || {}, {
        top: o,
        right: p,
        width: d,
        height: h,
        left: f,
        bottom: S
      } = e.style, y = {
        right: {
          top: o ?? "50%",
          right: p ?? `-${n}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: o ? "0px" : `-${Math.ceil(u / 2)}px`
        },
        left: {
          top: o ?? "50%",
          left: f ?? `-${n}px`,
          borderRadius: "0 5px 5px 0",
          marginTop: o ? "0px" : `-${Math.ceil(u / 2)}px`,
          transform: a != null && a.default ? "" : "rotate(180deg)"
        },
        top: {
          left: f ?? "50%",
          marginLeft: f ?? (a == null ? void 0 : a.default) ? `-${Math.ceil(n / 2)}px` : "0px",
          top: o ?? (a == null ? void 0 : a.default) ? `-${u}px` : `-${Math.ceil(u / 2 + n / 2)}px`,
          borderRadius: a != null && a.default ? "5px 5px 0 0" : "0 5px 5px 0",
          transform: a != null && a.default ? "" : "rotate(-90deg)"
        },
        bottom: {
          left: f ?? "50%",
          bottom: S ?? (a == null ? void 0 : a.default) ? `-${u}px` : `-${Math.ceil(u / 2 + n / 2)}px`,
          marginLeft: f ?? (a == null ? void 0 : a.default) ? `-${Math.ceil(n / 2)}px` : "0px",
          borderRadius: a != null && a.default ? "0 0 5px 5px" : " 0 5px 5px 0",
          transform: a != null && a.default ? "" : "rotate(90deg)"
        }
      };
      return {
        width: d ?? (a == null ? void 0 : a.default) ? "" : "10px",
        height: h ?? (a == null ? void 0 : a.default) ? "" : "68px",
        ...y[e.position]
      };
    });
    return {
      isCollapse: l,
      collapse: s,
      clickHandle: () => {
        l.value = !l.value, t("click");
      },
      collapseStyle: i
    };
  }
});
function ka(e, t, a, l, s, i) {
  const r = w("CaretRight"), n = w("CaretLeft"), u = w("el-icon");
  return g(), $("div", {
    class: "collapse-button flex-center pointer",
    style: x(e.collapseStyle),
    ref: "collapse",
    onClick: t[0] || (t[0] = (...o) => e.clickHandle && e.clickHandle(...o))
  }, [
    _(e.$slots, "default", {}, () => [
      N(u, {
        size: 18,
        color: "#999999"
      }, {
        default: b(() => [
          e.isCollapse ? (g(), I(r, { key: 0 })) : (g(), I(n, { key: 1 }))
        ]),
        _: 1
      })
    ], !0)
  ], 4);
}
const de = /* @__PURE__ */ M(_a, [["render", ka], ["__scopeId", "data-v-53ad025a"]]);
de.install = function(e) {
  e.component(de.name, de);
};
const Ca = {
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
function Sa(e, t) {
  const a = E(null), l = E(100), s = E(null), i = () => {
    var T;
    return ((T = document.querySelector(".card-row")) == null ? void 0 : T.offsetHeight) ?? 10;
  }, r = () => {
    var T;
    return ((T = document.querySelector(".card-row")) == null ? void 0 : T.offsetWidth) ?? 10;
  }, n = E(0), u = E(20), o = E(0), p = E(e.columns), d = (T) => Math.ceil(T / i()), h = () => {
    const { clientHeight: T = 100 } = a.value.wrapRef || {};
    return Math.floor(T / (i() + e.gridGap)) + n.value || 1;
  }, f = k(() => e.data.map((T, c) => ({ ...T, rowIndex: c }))), S = k(() => f.value.filter((T, c) => c >= n.value * p.value && c < u.value * p.value)), y = () => {
    const T = p.value * e.gridGap;
    l.value = Math.ceil(e.data.length / p.value * i()) + T;
  }, m = (T) => {
    const { scrollTop: c, clientHeight: D } = a.value.wrapRef, C = l.value - D - c;
    t("scroll", { distance: C, ...T }), n.value = d(c), u.value = h(), o.value = c;
  };
  O(() => e.data, () => {
    y(), u.value = h();
  });
  const v = () => {
    if (s.value) {
      const { clientWidth: T = 500 } = a.value.wrapRef;
      p.value = Math.floor(T / r()) || 1, y(), o.value = 0, n.value = 0, a.value.setScrollTop(0), u.value = h();
    }
  };
  return fe(() => {
    v(), window.addEventListener("resize", v);
  }), xe(() => {
    window.removeEventListener("resize", v);
  }), {
    scrollbarRef: a,
    containHeight: l,
    cardRowRef: s,
    onScroll: m,
    startOffset: o,
    viewListRanges: S,
    resetViewport: v
  };
}
const we = B({
  name: "KCardList",
  props: Ca,
  components: { ElScrollbar: ve },
  emits: ["click", "mouseenter", "mouseleave", "update:modelValue", "scroll"],
  setup(e, { emit: t }) {
    const a = k(() => `${Number((100 / e.columns).toFixed(1))}%`), l = k(() => `${e.gridGap}px`), s = k(() => `${e.width}`), i = (m) => m.disabled || e.disabled, r = k(() => e.rowClass === "border" ? "border-row" : e.rowClass === "shadow" ? "box-shadow" : e.rowClass), n = E("");
    J(() => {
      n.value = e.modelValue;
    });
    const u = (m) => {
      i(m) || (e.highlight && (n.value = m[e.keyId], t("update:modelValue", m[e.keyId])), t("click", m));
    }, {
      scrollbarRef: o,
      containHeight: p,
      cardRowRef: d,
      startOffset: h,
      viewListRanges: f,
      onScroll: S,
      resetViewport: y
    } = Sa(e, t);
    return {
      calcnum: a,
      gridgap: l,
      columnwidth: s,
      rowClassStyle: r,
      clickHandle: u,
      selectedId: n,
      bitNotAllowed: i,
      scrollbarRef: o,
      containHeight: p,
      cardRowRef: d,
      startOffset: h,
      viewListRanges: f,
      onScroll: S,
      resetViewport: y
    };
  }
}), Ee = () => {
  ye((e) => ({
    a9602a90: e.gridgap,
    "5a6ae676": e.columns,
    "8a42ec0e": e.calcnum,
    "1de64118": e.columnwidth,
    "55dd34dc": e.imgheight
  }));
}, Te = we.setup;
we.setup = Te ? (e, t) => (Ee(), Te(e, t)) : Ee;
const Va = { class: "card-contain" }, Ea = ["onClick", "onMouseenter", "onMouseleave"], Ta = { class: "card-list-content" }, Da = { class: "sign" };
function Na(e, t, a, l, s, i) {
  const r = w("el-scrollbar");
  return g(), I(r, H({
    ref: "scrollbarRef",
    "data-test": "card-list"
  }, e.$attrs, {
    always: "",
    onScroll: e.onScroll
  }), {
    default: b(() => [
      V("div", Va, [
        V("div", {
          class: "card-wrap",
          style: x({ height: `${e.containHeight}px` })
        }, null, 4),
        V("div", {
          class: "card-list",
          style: x({ transform: `translate3d(0,${e.startOffset}px,0)` })
        }, [
          V("div", {
            class: F([e.fixedColumn ? "card-fixed-coumn" : "card-content", { "fixed-width": e.width }])
          }, [
            (g(!0), $(P, null, R(e.viewListRanges, (n, u) => (g(), $("div", {
              class: F(["card-row border-radius pointer", [e.selectedId === n[e.keyId] ? "select-style" : "", e.bitNotAllowed(n) ? "not-allowed" : "hover-style", e.rowClassStyle]]),
              key: u,
              onClick: (o) => e.clickHandle(n),
              ref_for: !0,
              ref: "cardRowRef",
              onMouseenter: (o) => e.$emit("mouseenter", n),
              onMouseleave: (o) => e.$emit("mouseleave", n)
            }, [
              V("div", Ta, [
                _(e.$slots, "default", {
                  row: n,
                  index: n.rowIndex
                }, () => [
                  L(K(n.rowIndex), 1)
                ], !0)
              ]),
              V("div", Da, [
                _(e.$slots, "sign", {
                  row: n,
                  index: n.rowIndex
                }, void 0, !0)
              ])
            ], 42, Ea))), 128))
          ], 2)
        ], 4)
      ])
    ]),
    _: 3
  }, 16, ["onScroll"]);
}
const ce = /* @__PURE__ */ M(we, [["render", Na], ["__scopeId", "data-v-fe95936c"]]);
ce.install = function(e) {
  e.component(ce.name, ce);
};
const he = {
  KButton: Q,
  KInput: q,
  KInputNumber: G,
  KTable: ee,
  KTableV2: te,
  KPage: U,
  KBatchTable: X,
  KDialog: ae,
  KBreadcrumb: ne,
  KTabs: le,
  KPicker: oe,
  KTooltip: ue,
  KDatePicker: se,
  KNumberKeyboard: re,
  KVirtualList: Z,
  KAutoCounter: ie,
  KCollapseButton: de,
  KCardList: ce,
  install: () => {
  }
};
function Ba(e, t, a = 0) {
  return e.substr(a, t.length) === t;
}
he.install = function(e) {
  Object.keys(he).forEach((t) => {
    if (Ba(t, "K")) {
      const a = he[t];
      e.component(a.name, a);
    }
  }), Object.keys(W).forEach((t) => {
    e.directive(t, W[t]);
  });
};
export {
  ie as KAutoCounter,
  X as KBatchTable,
  ne as KBreadcrumb,
  Q as KButton,
  ce as KCardList,
  de as KCollapseButton,
  se as KDatePicker,
  ae as KDialog,
  q as KInput,
  G as KInputNumber,
  re as KNumberKeyboard,
  U as KPage,
  oe as KPicker,
  ee as KTable,
  te as KTableV2,
  le as KTabs,
  ue as KTooltip,
  he as KUI,
  Z as KVirtualList,
  W as directives
};
