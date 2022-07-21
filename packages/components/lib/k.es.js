import { defineComponent as k, ref as w, resolveComponent as g, openBlock as h, createBlock as D, mergeProps as B, withModifiers as se, withCtx as m, renderSlot as v, createElementBlock as _, createCommentVNode as G, computed as $, withKeys as re, createSlots as F, warn as ie, getCurrentInstance as Q, provide as de, unref as ce, inject as pe, watch as Y, createVNode as y, Fragment as S, renderList as K, toDisplayString as O, nextTick as Z, createElementVNode as C, createTextVNode as N, normalizeClass as X, watchEffect as te } from "vue";
const z = {
  focus: {
    mounted: (e) => {
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
      let a = "\uFFE50";
      const { inter: l } = t.modifiers, c = n >= 0 ? `\uFFE5${Number(n).toFixed(2)}` : `-\uFFE5${Math.abs(Number(n.toFixed(2)))}`;
      l ? a = n >= 0 ? `\uFFE5${n}` : `-\uFFE5${Math.abs(n)}` : a = n ? c : "\uFFE50.00", e.innerHTML = `${a}`;
    },
    updated: (e, t) => {
      const n = t.value ? `\uFFE5${Number(t.value).toFixed(2)}` : e.textContent;
      e.innerHTML = n;
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
z.install = function(e) {
  Object.keys(z).forEach((t) => {
    e.directive(t, z[t]);
  });
};
const V = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
}, fe = k({
  name: "KButton",
  props: {
    clickState: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    iconLock: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = w(!0), a = w(null), l = () => {
      n.value && (n.value = !1, t("click")), c();
    }, c = () => {
      clearTimeout(a.value), a.value = setTimeout(() => {
        n.value = !0;
      }, 800);
    };
    return { onclick: l, buttonStatus: n };
  }
}), me = {
  key: 0,
  class: "el-icon-lock el-icon--right"
};
function ge(e, t, n, a, l, c) {
  const o = g("el-button");
  return h(), D(o, B({
    disabled: !e.buttonStatus || e.disabled,
    "click-state": e.clickState
  }, e.$attrs, {
    onClick: se(e.onclick, ["stop"])
  }), {
    default: m(() => [
      v(e.$slots, "default"),
      e.iconLock ? (h(), _("i", me)) : G("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "click-state", "onClick"]);
}
const H = /* @__PURE__ */ V(fe, [["render", ge]]);
H.install = function(e) {
  e.component(H.name, H);
};
const he = k({
  name: "KInput",
  props: {
    modelValue: { type: [String, Number], default: "" },
    point: { type: Number, default: 2 },
    type: { type: String, default: "number" }
  },
  emits: ["change", "update:modelValue", "enter"],
  setup(e, { emit: t, attrs: n }) {
    const a = w(null), l = w(!0), c = $({
      get() {
        return e.modelValue;
      },
      set(r) {
        o(r);
      }
    }), o = (r) => {
      let s = r;
      if (e.type === "number") {
        if (s = s.replace(/[^\d.]/g, ""), s = s.replace(/^\./g, ""), s = s.replace(/\.{2,}/g, "."), s = s.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), s.indexOf(".") < 0 && s !== "" && s.substr(0, 1) === "0" && s.length === 2 && (s = s.substr(1, s.length)), s !== "" && s.indexOf(".") > 0 && e.point) {
          const b = new RegExp(`^\\d+(\\.\\d{0,${e.point}})?`, "g");
          s = s.match(b)[0] || null;
        }
      } else
        e.type === "integer" ? s = s.replace(/[^\d]/g, "") : e.type === "intText" && (s = s.replace(/[^\w]/g, ""));
      n.max !== void 0 && s && Number(s) > Number(n.max) && (s = n.max), n.min !== void 0 && s && Number(s) < Number(n.min) && (s = n.min), t("update:modelValue", s);
    }, p = () => {
      l.value && (l.value = !1, c.value && t("enter")), i();
    }, u = (r) => {
      t("change", r);
    }, i = () => {
      clearTimeout(a.value), a.value = setTimeout(() => {
        l.value = !0;
      }, 800);
    };
    return {
      inputValue: c,
      changeValue: u,
      searchContent: p
    };
  }
});
function be(e, t, n, a, l, c) {
  const o = g("el-input");
  return h(), D(o, B({
    modelValue: e.inputValue,
    "onUpdate:modelValue": t[0] || (t[0] = (p) => e.inputValue = p),
    modelModifiers: { trim: !0 }
  }, e.$attrs, {
    onKeyup: re(e.searchContent, ["enter"]),
    onChange: e.changeValue
  }), F({ _: 2 }, [
    e.$slots.append ? {
      name: "append",
      fn: m(() => [
        v(e.$slots, "append")
      ])
    } : void 0,
    e.$slots.prepend ? {
      name: "prepend",
      fn: m(() => [
        v(e.$slots, "prepend")
      ])
    } : void 0,
    e.$slots.prefix ? {
      name: "prefix",
      fn: m(() => [
        v(e.$slots, "prefix")
      ])
    } : void 0,
    e.$slots.suffix ? {
      name: "suffix",
      fn: m(() => [
        v(e.$slots, "suffix")
      ])
    } : void 0
  ]), 1040, ["modelValue", "onKeyup", "onChange"]);
}
const M = /* @__PURE__ */ V(he, [["render", be]]);
M.install = function(e) {
  e.component(M.name, M);
};
function ye(e) {
  for (var t = -1, n = e == null ? 0 : e.length, a = {}; ++t < n; ) {
    var l = e[t];
    a[l[0]] = l[1];
  }
  return a;
}
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ve = Object.prototype.hasOwnProperty, x = (e, t) => ve.call(e, t), _e = (e) => typeof e == "string", ne = (e) => e !== null && typeof e == "object", ee = (e) => Object.keys(e);
class $e extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ce(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = _e(e) ? new $e(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const ae = "__epPropKey", j = (e) => e, Ee = (e) => ne(e) && !!e[ae], le = (e, t) => {
  if (!ne(e) || Ee(e))
    return e;
  const { values: n, required: a, default: l, type: c, validator: o } = e, u = {
    type: c,
    required: !!a,
    validator: n || o ? (i) => {
      let r = !1, s = [];
      if (n && (s = Array.from(n), x(e, "default") && s.push(l), r || (r = s.includes(i))), o && (r || (r = o(i))), !r && s.length > 0) {
        const b = [...new Set(s)].map((d) => JSON.stringify(d)).join(", ");
        ie(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${b}], got value ${JSON.stringify(i)}.`);
      }
      return r;
    } : void 0,
    [ae]: !0
  };
  return x(e, "default") && (u.default = l), u;
}, ke = (e) => ye(Object.entries(e).map(([t, n]) => [
  t,
  le(n, t)
])), we = (e, t) => {
  if (e.install = (n) => {
    for (const a of [e, ...Object.values(t != null ? t : {})])
      n.component(a.name, a);
  }, t)
    for (const [n, a] of Object.entries(t))
      e[n] = a;
  return e;
}, Ve = ["", "default", "small", "large"], oe = Symbol(), W = w();
function De(e, t = void 0) {
  const n = Q() ? pe(oe, W) : W;
  return e ? $(() => {
    var a, l;
    return (l = (a = n.value) == null ? void 0 : a[e]) != null ? l : t;
  }) : n;
}
const Se = (e, t, n = !1) => {
  var a;
  const l = !!Q(), c = l ? De() : void 0, o = (a = t == null ? void 0 : t.provide) != null ? a : l ? de : void 0;
  if (!o) {
    Ce("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const p = $(() => {
    const u = ce(e);
    return c != null && c.value ? Be(c.value, u) : u;
  });
  return o(oe, p), (n || !W.value) && (W.value = p.value), p;
}, Be = (e, t) => {
  var n;
  const a = [.../* @__PURE__ */ new Set([...ee(e), ...ee(t)])], l = {};
  for (const c of a)
    l[c] = (n = t[c]) != null ? n : e[c];
  return l;
}, Pe = le({
  type: String,
  values: Ve,
  required: !1
});
function Fe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const Ne = {}, Te = ke({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: j(Object)
  },
  size: Pe,
  button: {
    type: j(Object)
  },
  experimentalFeatures: {
    type: j(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: j(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), ze = k({
  name: "ElConfigProvider",
  props: Te,
  setup(e, { slots: t }) {
    Y(() => e.message, (a) => {
      Object.assign(Ne, a != null ? a : {});
    }, { immediate: !0, deep: !0 });
    const n = Se(e);
    return () => v(t, "default", { config: n == null ? void 0 : n.value });
  }
}), Ae = we(ze);
var ue = {};
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
})(ue);
const Oe = /* @__PURE__ */ Fe(ue);
const Ke = k({
  name: "KPage",
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: !1 },
    small: { type: Boolean, default: !1 }
  },
  components: { ElConfigProvider: Ae },
  emits: ["update:modelValue", "update:size", "current-change", "size-change", "change"],
  setup(e, { emit: t }) {
    const n = Oe, a = $(() => {
      const { total: u, size: i, showSize: r } = e;
      return r ? !0 : u > i;
    }), l = $({
      get() {
        return e.modelValue;
      },
      set(u) {
        t("update:modelValue", u);
      }
    }), c = $(() => {
      const u = ["total", "sizes", "prev", "pager", "next", "jumper"];
      return e.showSize || u.splice(1, 1), u.join(",");
    });
    return {
      locale: n,
      currentPage: l,
      layoutList: c,
      handleSizeChange: (u) => {
        l.value = 1, t("update:size", u), t("size-change", u), t("change", { page: l.value, size: u });
      },
      handleCurrentChange: (u) => {
        t("current-change", u), t("change", { page: u, size: e.size });
      },
      showPage: a
    };
  }
}), je = {
  key: 0,
  class: "page-right mt20"
};
function He(e, t, n, a, l, c) {
  const o = g("el-pagination"), p = g("el-config-provider");
  return e.showPage ? (h(), _("div", je, [
    y(p, { locale: e.locale }, {
      default: m(() => [
        y(o, B({
          onSizeChange: e.handleSizeChange,
          onCurrentChange: e.handleCurrentChange,
          currentPage: e.currentPage,
          "onUpdate:currentPage": t[0] || (t[0] = (u) => e.currentPage = u),
          "page-sizes": [10, 20, 50, 100],
          "page-size": e.size,
          layout: e.layoutList,
          total: e.total,
          small: e.small
        }, e.$attrs), null, 16, ["onSizeChange", "onCurrentChange", "currentPage", "page-size", "layout", "total", "small"])
      ]),
      _: 1
    }, 8, ["locale"])
  ])) : G("", !0);
}
const P = /* @__PURE__ */ V(Ke, [["render", He], ["__scopeId", "data-v-616afc5b"]]);
P.install = function(e) {
  e.component(P.name, P);
};
const Me = k({
  name: "KTable",
  components: { pagination: P },
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
    const n = $({
      get: () => e.tableData,
      set: (o) => t("update:tableData", o)
    }), a = $({
      get: () => e.modelValue,
      set: (o) => t("update:modelValue", o)
    });
    return {
      currentPage: a,
      tableDataList: n,
      changePage: (o) => t("current-change", o),
      sortChange: ({ column: o, order: p }) => {
        const u = p === "ascending" ? 1 : 0;
        t("sort-change", {
          prop: o == null ? void 0 : o.rawColumnKey,
          order: p,
          sortType: u,
          currentPage: a.value,
          column: o,
          sortColumn: o == null ? void 0 : o.rawColumnKey
        });
      }
    };
  }
}), Ie = { key: 2 };
function Le(e, t, n, a, l, c) {
  const o = g("el-table-column"), p = g("el-table"), u = g("pagination");
  return h(), _(S, null, [
    y(p, B({
      data: e.tableDataList,
      style: { width: "100%" },
      class: "mt20",
      "header-cell-style": e.headerCellStyle
    }, e.$attrs, {
      "empty-text": e.emptyText,
      onSortChange: e.sortChange
    }), F({
      default: m(() => [
        (h(!0), _(S, null, K(e.tableColumn, (i) => (h(), D(o, {
          key: i.prop,
          label: i.label,
          name: i.name,
          width: i.width,
          "min-width": i.minWidth,
          fixed: i.fixed,
          sortable: i.sortable,
          type: i.type,
          "show-overflow-tooltip": e.showOverflowTooltip
        }, F({
          default: m((r) => {
            var s;
            return [
              e.$slots.default ? v(e.$slots, "default", {
                key: 0,
                item: r.row,
                row: r.row,
                index: r.$index
              }) : i.custom && r.$index >= 0 ? v(e.$slots, i.custom, {
                key: 1,
                item: r.row,
                row: r.row,
                index: r.$index
              }) : (h(), _("span", Ie, O((s = r.row[i.prop]) != null ? s : "-"), 1))
            ];
          }),
          _: 2
        }, [
          i.header ? {
            name: "header",
            fn: m(() => [
              v(e.$slots, i.header)
            ])
          } : void 0
        ]), 1032, ["label", "name", "width", "min-width", "fixed", "sortable", "type", "show-overflow-tooltip"]))), 128))
      ]),
      _: 2
    }, [
      e.$slots.empty ? {
        name: "empty",
        fn: m(() => [
          v(e.$slots, "empty")
        ])
      } : void 0
    ]), 1040, ["data", "header-cell-style", "empty-text", "onSortChange"]),
    y(u, {
      total: e.total,
      modelValue: e.currentPage,
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.currentPage = i),
      onCurrentChange: e.changePage
    }, null, 8, ["total", "modelValue", "onCurrentChange"])
  ], 64);
}
const I = /* @__PURE__ */ V(Me, [["render", Le]]);
I.install = function(e) {
  e.component(I.name, I);
};
const Re = {
  modelValue: { type: Array, default: () => [] },
  total: { type: Number, default: 9 },
  size: { type: Number, default: 10 },
  page: { type: Number, default: 1 },
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
}, Ue = k({
  name: "KBatchTable",
  components: { pagination: P },
  props: Re,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(e, { emit: t }) {
    console.log("props: ", e.total);
    const n = w(null), a = (d) => {
      d ? e.tableData.forEach((f) => {
        d.forEach((E) => {
          b(f) === b(E) && Z(() => n.value.toggleRowSelection(f));
        });
      }) : (l.value = [], n.value.clearSelection());
    }, l = $({
      get: () => e.modelValue,
      set: (d) => t("update:modelValue", d)
    });
    Y(() => e.modelValue, (d) => {
      !d.length && n.value && n.value.clearSelection();
    });
    const c = () => {
      setTimeout(() => {
        e.selectList.length && (e.tableData.forEach((d) => {
          var f;
          d[e.checkKey] = (f = d[e.checkKey]) != null ? f : 1;
        }), e.selectList.forEach((d) => {
          e.tableData.forEach((f) => {
            b(d) === b(f) && (f[e.checkKey] = 0);
          });
        }), a(l.value));
      }, 200);
    };
    Y(() => e.tableData, (d) => {
      Z(() => {
        d.length && c(), d.length && a(l.value);
      });
    }, { immediate: !0 });
    const o = (d, f) => {
      d.some((T) => b(T) === b(f)) ? l.value = [...l.value, f] : l.value = l.value.filter((T) => b(T) !== b(f));
    }, p = (d) => {
      if (l.value.length)
        if (d.length) {
          const f = d.filter((E) => l.value.every((T) => b(T) !== b(E)));
          l.value = [...l.value, ...f];
        } else
          l.value = l.value.filter((f) => e.tableData.every((E) => b(f) !== b(E)));
      else
        l.value = d;
    }, u = (d) => {
      if (!i(d))
        return;
      const f = l.value.some((E) => b(E) === b(d));
      a([d]), f ? l.value = l.value.filter((E) => b(E) !== b(d)) : l.value = [...l.value, d], t("row-click", d);
    }, i = (d) => {
      var f;
      return (f = d[e.checkKey]) != null ? f : !d[e.checkKey];
    }, r = $({
      get: () => e.page,
      set: (d) => t("update:page", d)
    }), s = (d) => {
      t("current-change", d);
    }, b = (d) => d[e.keyId];
    return {
      multipleTable: n,
      handleSelect: o,
      selectAll: p,
      handleRowClick: u,
      checkSelection: i,
      toggleSelection: a,
      currentPage: r,
      changePage: s
    };
  }
}), qe = { key: 1 }, We = { class: "mt20 flex-between" }, Ge = { class: "flex1" };
function Je(e, t, n, a, l, c) {
  const o = g("el-table-column"), p = g("el-table"), u = g("pagination");
  return h(), _(S, null, [
    y(p, B({ ref: "multipleTable" }, e.$attrs, {
      "empty-text": "\u6682\u65E0\u6570\u636E",
      data: e.tableData,
      "header-cell-style": e.headerCellStyle,
      onSelect: e.handleSelect,
      onSelectAll: e.selectAll,
      onRowClick: e.handleRowClick
    }), F({
      default: m(() => [
        y(o, {
          type: "selection",
          width: "55",
          selectable: e.checkSelection
        }, null, 8, ["selectable"]),
        (h(!0), _(S, null, K(e.tableColumn, (i) => (h(), D(o, {
          label: i.label,
          key: i.prop,
          width: i.width,
          fixed: i.fixed,
          "min-width": i.minWidth,
          "show-overflow-tooltip": ""
        }, F({
          default: m((r) => {
            var s;
            return [
              i.custom && r.$index >= 0 ? v(e.$slots, i.custom, {
                key: 0,
                item: r.row,
                row: r.row,
                index: r.$index
              }) : (h(), _("span", qe, O((s = r.row[i.prop]) != null ? s : "-"), 1))
            ];
          }),
          _: 2
        }, [
          i.header ? {
            name: "header",
            fn: m(() => [
              v(e.$slots, i.header)
            ])
          } : void 0
        ]), 1032, ["label", "width", "fixed", "min-width"]))), 128))
      ]),
      _: 2
    }, [
      e.$slots.empty ? {
        name: "empty",
        fn: m(() => [
          v(e.$slots, "empty")
        ])
      } : void 0
    ]), 1040, ["data", "header-cell-style", "onSelect", "onSelectAll", "onRowClick"]),
    C("div", We, [
      C("div", Ge, [
        e.$slots.footer ? v(e.$slots, "footer", { key: 0 }) : G("", !0)
      ]),
      y(u, {
        total: e.total,
        class: "mt0 ml20",
        modelValue: e.currentPage,
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.currentPage = i),
        onCurrentChange: e.changePage
      }, null, 8, ["total", "modelValue", "onCurrentChange"])
    ])
  ], 64);
}
const A = /* @__PURE__ */ V(Ue, [["render", Je]]);
A.install = function(e) {
  e.component(A.name, A);
};
const Ye = k({
  name: "KDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { type: String, default: "\u63D0\u793A" },
    showFooter: { type: Boolean, default: !0 },
    customClass: { type: String, default: "" }
  },
  emits: ["update:modelValue", "confirm", "open", "close"],
  setup(e, { emit: t }) {
    const n = $({
      get: () => e.modelValue,
      set: (p) => t("update:modelValue", p)
    }), a = $(() => e.customClass ? e.customClass : e.showFooter ? "custom-dialog" : "custom-dialog no-footer");
    return {
      dialogVisible: n,
      customClassName: a,
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
}), Qe = /* @__PURE__ */ C("span", null, "\u8FD9\u662F\u4E00\u6BB5\u4FE1\u606F", -1), Xe = { class: "dialog-footer" }, Ze = /* @__PURE__ */ N("\u53D6 \u6D88"), xe = /* @__PURE__ */ N("\u786E \u5B9A");
function et(e, t, n, a, l, c) {
  const o = g("el-button"), p = g("el-dialog");
  return h(), D(p, B({
    title: e.title,
    modelValue: e.dialogVisible,
    "onUpdate:modelValue": t[1] || (t[1] = (u) => e.dialogVisible = u),
    "custom-class": e.customClassName
  }, e.$attrs, {
    onClose: e.closeHandle,
    onOpen: e.openHandler
  }), F({
    default: m(() => [
      v(e.$slots, "default", {}, () => [
        Qe
      ])
    ]),
    _: 2
  }, [
    e.showFooter ? {
      name: "footer",
      fn: m(() => [
        v(e.$slots, "footer", {}, () => [
          C("span", Xe, [
            y(o, {
              size: "large",
              onClick: t[0] || (t[0] = (u) => e.dialogVisible = !1)
            }, {
              default: m(() => [
                Ze
              ]),
              _: 1
            }),
            y(o, {
              size: "large",
              type: "primary",
              onClick: e.confirmHandler
            }, {
              default: m(() => [
                xe
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ])
      ])
    } : void 0
  ]), 1040, ["title", "modelValue", "custom-class", "onClose", "onOpen"]);
}
const L = /* @__PURE__ */ V(Ye, [["render", et]]);
L.install = function(e) {
  e.component(L.name, L);
};
const tt = k({
  name: "KBreadcrumb",
  props: {
    isPadding: { type: Boolean, default: !0 },
    list: { type: Array, default: () => [] }
  },
  setup() {
    return {};
  }
});
function nt(e, t, n, a, l, c) {
  const o = g("el-breadcrumb-item"), p = g("el-breadcrumb");
  return h(), _("div", {
    class: X(["k-breadcrumb flex-between", { "style-padding": e.isPadding }])
  }, [
    y(p, { separator: "/" }, {
      default: m(() => [
        (h(!0), _(S, null, K(e.list, (u) => (h(), D(o, {
          to: u.path ? { path: u.path } : "",
          key: u.path
        }, {
          default: m(() => [
            N(O(u.title), 1)
          ]),
          _: 2
        }, 1032, ["to"]))), 128))
      ]),
      _: 1
    }),
    v(e.$slots, "default")
  ], 2);
}
const R = /* @__PURE__ */ V(tt, [["render", nt]]);
R.install = function(e) {
  e.component(R.name, R);
};
const at = k({
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
    const n = Q(), a = n.appContext.config.globalProperties.$route, l = n.appContext.config.globalProperties.$router, c = $(() => (a == null ? void 0 : a.params.type) || (a == null ? void 0 : a.name)), o = w(c.value);
    te(() => {
      o.value = e.modelValue || c.value, t("update:modelValue", o.value);
    });
    const p = $(() => a.query);
    return { activeName: o, handleClick: (i) => {
      if (e.isRouter) {
        const r = { path: `${i.paneName}`, query: p.value };
        e.replace ? l.replace(r) : l.push(r);
      }
      t("tab-click", i.paneName), t("update:modelValue", i.paneName);
    } };
  }
}), lt = { class: "tabs-right ml10" };
function ot(e, t, n, a, l, c) {
  const o = g("el-tab-pane"), p = g("el-tabs");
  return h(), _("div", {
    class: X(["k-tabs", { "style-card": !e.type, "style-padding": e.isPadding && !e.type }])
  }, [
    y(p, B({
      class: "flex-tabs",
      type: e.type
    }, e.$attrs, {
      modelValue: e.activeName,
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.activeName = u),
      onTabClick: e.handleClick
    }), {
      default: m(() => [
        (h(!0), _(S, null, K(e.tabsList, (u) => (h(), D(o, {
          label: u.label,
          name: u.name,
          key: u.name
        }, null, 8, ["label", "name"]))), 128))
      ]),
      _: 1
    }, 16, ["type", "modelValue", "onTabClick"]),
    C("div", lt, [
      v(e.$slots, "default")
    ])
  ], 2);
}
const U = /* @__PURE__ */ V(at, [["render", ot]]);
U.install = function(e) {
  e.component(U.name, U);
};
var ut = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
};
const st = k({
  name: "Delete"
}), rt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, it = /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1), dt = [
  it
];
function ct(e, t, n, a, l, c) {
  return h(), _("svg", rt, dt);
}
var pt = /* @__PURE__ */ ut(st, [["render", ct]]);
const ft = k({
  name: "KPicker",
  components: { batchTable: A, Delete: pt },
  emits: ["update:modelValue", "update:page"],
  props: {
    modelValue: { type: Array, default: () => [] },
    selectList: { type: Array, default: () => [] },
    page: { type: Number, default: 1 },
    tableData: { type: Array, default: () => [] },
    tableColumn: { type: Array, default: () => [] },
    keyId: { type: String, default: "id" },
    keyName: { type: String, default: "pName" },
    showCount: { type: Boolean, default: !1 }
  },
  setup(e, { emit: t }) {
    const n = $({
      get: () => e.modelValue,
      set: (r) => t("update:modelValue", r)
    });
    te(() => {
      e.showCount && n.value.forEach((r) => {
        var s;
        r.num = (s = r.num) != null ? s : 1;
      });
    });
    const a = w(null), l = () => a.value.toggleSelection(), c = (r) => a.value.handleRowClick(r), o = w(1);
    return {
      multipleSelection: n,
      batchTableRef: a,
      currentPage: o,
      emptyHandler: l,
      resetData: () => {
        o.value = 1, l();
      },
      deleteHandler: c,
      getName: (r) => r[e.keyName],
      getId: (r) => r[e.keyId]
    };
  }
}), mt = { class: "k-picker" }, gt = { class: "col-left" }, ht = { class: "col-right" }, bt = { class: "selete-header flex-between" }, yt = /* @__PURE__ */ N("\u5DF2\u9009\u62E9"), vt = /* @__PURE__ */ N(" \u6E05\u7A7A "), _t = { class: "selete-content" }, $t = { class: "flex flex1 mr20 overflow" }, Ct = { class: "text-overflow" }, Et = /* @__PURE__ */ N(" \u5220\u9664 ");
function kt(e, t, n, a, l, c) {
  const o = g("batchTable"), p = g("el-col"), u = g("delete"), i = g("el-icon"), r = g("el-button"), s = g("el-tooltip"), b = g("el-input-number"), d = g("el-row");
  return h(), _("div", mt, [
    v(e.$slots, "top", {}, void 0, !0),
    y(d, { gutter: 10 }, {
      default: m(() => [
        y(p, { span: 15 }, {
          default: m(() => [
            C("div", gt, [
              y(o, {
                ref: "batchTableRef",
                height: "440px",
                "table-data": e.tableData,
                "table-column": e.tableColumn,
                "select-list": e.selectList,
                "key-id": e.keyId,
                modelValue: e.multipleSelection,
                "onUpdate:modelValue": t[0] || (t[0] = (f) => e.multipleSelection = f),
                page: e.currentPage,
                "onUpdate:page": t[1] || (t[1] = (f) => e.currentPage = f)
              }, null, 8, ["table-data", "table-column", "select-list", "key-id", "modelValue", "page"])
            ])
          ]),
          _: 1
        }),
        y(p, { span: 9 }, {
          default: m(() => [
            C("div", ht, [
              C("div", bt, [
                C("span", null, [
                  yt,
                  C("span", null, "(" + O(e.multipleSelection.length) + ")", 1)
                ]),
                y(r, {
                  text: "",
                  disabled: !e.multipleSelection.length,
                  onClick: e.emptyHandler
                }, {
                  default: m(() => [
                    y(i, null, {
                      default: m(() => [
                        y(u)
                      ]),
                      _: 1
                    }),
                    vt
                  ]),
                  _: 1
                }, 8, ["disabled", "onClick"])
              ]),
              C("div", _t, [
                (h(!0), _(S, null, K(e.multipleSelection, (f) => (h(), _("div", {
                  class: X(["flex-between pl10 pr10", { mt10: e.showCount }]),
                  key: e.getId(f)
                }, [
                  C("div", $t, [
                    y(s, {
                      effect: "dark",
                      content: e.getName(f),
                      placement: "top"
                    }, {
                      default: m(() => [
                        C("span", Ct, O(e.getName(f)), 1)
                      ]),
                      _: 2
                    }, 1032, ["content"])
                  ]),
                  e.showCount ? (h(), D(b, {
                    key: 0,
                    modelValue: f.num,
                    "onUpdate:modelValue": (E) => f.num = E,
                    min: 1,
                    class: "width-100 flex-shrink mr10"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : G("", !0),
                  y(r, {
                    text: "",
                    onClick: (E) => e.deleteHandler(f)
                  }, {
                    default: m(() => [
                      Et
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
      _: 1
    })
  ]);
}
const q = /* @__PURE__ */ V(ft, [["render", kt], ["__scopeId", "data-v-3b4a1294"]]);
q.install = function(e) {
  e.component(q.name, q);
};
const J = {
  KButton: H,
  KInput: M,
  KTable: I,
  KPage: P,
  KBatchTable: A,
  KDialog: L,
  KBreadcrumb: R,
  KTabs: U,
  KPicker: q,
  install: () => {
  }
};
function wt(e, t, n = 0) {
  return e.substr(n, t.length) === t;
}
J.install = function(e) {
  Object.keys(J).forEach((t) => {
    if (wt(t, "K")) {
      const n = J[t];
      e.component(n.name, n);
    }
  }), Object.keys(z).forEach((t) => {
    e.directive(t, z[t]);
  });
};
export {
  A as KBatchTable,
  R as KBreadcrumb,
  H as KButton,
  L as KDialog,
  M as KInput,
  P as KPage,
  q as KPicker,
  I as KTable,
  U as KTabs,
  J as KUI,
  z as directives
};
