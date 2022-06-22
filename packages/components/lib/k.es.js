import { defineComponent, ref, resolveComponent, openBlock, createBlock, mergeProps, withModifiers, withCtx, renderSlot, createElementBlock, createCommentVNode, computed, withKeys, createSlots, createVNode, Fragment, renderList, toDisplayString, watch, nextTick, createElementVNode, createTextVNode, normalizeClass, getCurrentInstance, watchEffect } from "vue";
const directives = {
  focus: {
    mounted: (el) => {
      setTimeout(() => {
        el.querySelector("input").focus();
      }, 100);
    }
  },
  money: {
    mounted: (el, binding) => {
      const value = el.textContent;
      if (typeof Number(value) !== "number")
        return;
      let valText = "\uFFE50";
      const { inter } = binding.modifiers;
      const valFixed = value >= 0 ? `\uFFE5${Number(value).toFixed(2)}` : `-\uFFE5${Math.abs(Number(value.toFixed(2)))}`;
      if (inter)
        valText = value >= 0 ? `\uFFE5${value}` : `-\uFFE5${Math.abs(value)}`;
      else
        valText = value ? valFixed : "\uFFE50.00";
      el.innerHTML = `${valText}`;
    },
    updated: (el, binding) => {
      const valText = binding.value ? `\uFFE5${Number(binding.value).toFixed(2)}` : el.textContent;
      el.innerHTML = valText;
    }
  },
  params: {
    mounted: (el) => {
      const value = el.textContent;
      el.innerHTML = `${value}` || "-";
    }
  },
  title: {
    mounted: (el) => {
      el.parentNode.style.position = "relative";
      const titleDiv = document.createElement("div");
      titleDiv.innerHTML = el.textContent;
      titleDiv.setAttribute("class", "title-hover");
      const bdDiv = document.createElement("div");
      bdDiv.setAttribute("class", "border-div");
      titleDiv.appendChild(bdDiv);
      el.setAttribute("class", "text-ellipsis");
      el.onmouseover = () => {
        el.parentNode.appendChild(titleDiv);
      };
      el.onmouseout = () => {
        el.parentNode.removeChild(titleDiv);
      };
    }
  }
};
directives.install = function(Vue) {
  Object.keys(directives).forEach((key) => {
    Vue.directive(key, directives[key]);
  });
};
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$9 = defineComponent({
  name: "KButton",
  props: {
    clickState: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    iconLock: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const buttonStatus = ref(true);
    const stopTime = ref(null);
    const onclick = () => {
      if (buttonStatus.value) {
        buttonStatus.value = false;
        emit("click");
      }
      setButton();
    };
    const setButton = () => {
      clearTimeout(stopTime.value);
      stopTime.value = setTimeout(() => {
        buttonStatus.value = true;
      }, 800);
    };
    return { onclick, buttonStatus };
  }
});
const _hoisted_1$7 = {
  key: 0,
  class: "el-icon-lock el-icon--right"
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  return openBlock(), createBlock(_component_el_button, mergeProps({
    disabled: !_ctx.buttonStatus || _ctx.disabled,
    "click-state": _ctx.clickState
  }, _ctx.$attrs, {
    onClick: withModifiers(_ctx.onclick, ["stop"])
  }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default"),
      _ctx.iconLock ? (openBlock(), createElementBlock("i", _hoisted_1$7)) : createCommentVNode("", true)
    ]),
    _: 3
  }, 16, ["disabled", "click-state", "onClick"]);
}
var KButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["render", _sfc_render$9]]);
KButton.install = function(app) {
  app.component(KButton.name, KButton);
};
const _sfc_main$8 = defineComponent({
  name: "KInput",
  props: {
    modelValue: { type: [String, Number], default: "" },
    point: { type: Number, default: 2 },
    type: { type: String, default: "number" }
  },
  emits: ["change", "update:modelValue", "enter"],
  setup(props, { emit, attrs }) {
    const stopTime = ref(null);
    const keyupStatus = ref(true);
    const inputValue = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        changeInput(value);
      }
    });
    const changeInput = (val) => {
      let value = val;
      if (props.type === "number") {
        value = value.replace(/[^\d.]/g, "");
        value = value.replace(/^\./g, "");
        value = value.replace(/\.{2,}/g, ".");
        value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        if (value.indexOf(".") < 0 && value !== "") {
          if (value.substr(0, 1) === "0" && value.length === 2) {
            value = value.substr(1, value.length);
          }
        }
        if (value !== "") {
          if (value.indexOf(".") > 0) {
            if (props.point) {
              const reg = new RegExp(`^\\d+(\\.\\d{0,${props.point}})?`, "g");
              value = value.match(reg)[0] || null;
            }
          }
        }
      } else if (props.type === "integer") {
        value = value.replace(/[^\d]/g, "");
      } else if (props.type === "intText") {
        value = value.replace(/[^\w]/g, "");
      }
      if (attrs.max !== void 0 && value && Number(value) > Number(attrs.max))
        value = attrs.max;
      if (attrs.min !== void 0 && value && Number(value) < Number(attrs.min))
        value = attrs.min;
      emit("update:modelValue", value);
    };
    const searchContent = () => {
      if (keyupStatus.value) {
        keyupStatus.value = false;
        if (inputValue.value)
          emit("enter");
      }
      setButton();
    };
    const changeValue = (value) => {
      emit("change", value);
    };
    const setButton = () => {
      clearTimeout(stopTime.value);
      stopTime.value = setTimeout(() => {
        keyupStatus.value = true;
      }, 800);
    };
    return {
      inputValue,
      changeValue,
      searchContent
    };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  return openBlock(), createBlock(_component_el_input, mergeProps({
    modelValue: _ctx.inputValue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.inputValue = $event),
    modelModifiers: { trim: true }
  }, _ctx.$attrs, {
    onKeyup: withKeys(_ctx.searchContent, ["enter"]),
    onChange: _ctx.changeValue
  }), createSlots({ _: 2 }, [
    _ctx.$slots.append ? {
      name: "append",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "append")
      ])
    } : void 0,
    _ctx.$slots.prepend ? {
      name: "prepend",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "prepend")
      ])
    } : void 0,
    _ctx.$slots.prefix ? {
      name: "prefix",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "prefix")
      ])
    } : void 0,
    _ctx.$slots.suffix ? {
      name: "suffix",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "suffix")
      ])
    } : void 0
  ]), 1040, ["modelValue", "onKeyup", "onChange"]);
}
var KInput = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["render", _sfc_render$8]]);
KInput.install = function(app) {
  app.component(KInput.name, KInput);
};
var main_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$7 = defineComponent({
  name: "KPage",
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: false },
    small: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "update:size", "current-change", "size-change", "change"],
  setup(props, { emit }) {
    const currentPage = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const layoutList = computed(() => {
      const list = ["total", "sizes", "prev", "pager", "next", "jumper"];
      if (!props.showSize)
        list.splice(1, 1);
      return list.join(",");
    });
    const handleSizeChange = (val) => {
      currentPage.value = 1;
      emit("update:size", val);
      emit("size-change", val);
      emit("change", { page: currentPage.value, size: val });
    };
    const handleCurrentChange = (val) => {
      emit("current-change", val);
      emit("change", { page: val, size: props.size });
    };
    return {
      currentPage,
      layoutList,
      handleSizeChange,
      handleCurrentChange
    };
  }
});
const _hoisted_1$6 = {
  key: 0,
  class: "page-right mt20"
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_pagination = resolveComponent("el-pagination");
  return _ctx.total > _ctx.size ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
    createVNode(_component_el_pagination, mergeProps({
      onSizeChange: _ctx.handleSizeChange,
      onCurrentChange: _ctx.handleCurrentChange,
      currentPage: _ctx.currentPage,
      "onUpdate:currentPage": _cache[0] || (_cache[0] = ($event) => _ctx.currentPage = $event),
      "page-sizes": [10, 20, 50, 100],
      "page-size": _ctx.size,
      layout: _ctx.layoutList,
      total: _ctx.total,
      small: _ctx.small
    }, _ctx.$attrs), null, 16, ["onSizeChange", "onCurrentChange", "currentPage", "page-size", "layout", "total", "small"])
  ])) : createCommentVNode("", true);
}
var KPage = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-37f0cb64"]]);
KPage.install = function(app) {
  app.component(KPage.name, KPage);
};
const _sfc_main$6 = defineComponent({
  name: "KTable",
  components: { pagination: KPage },
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
    tableData: { type: Array, default: () => [] },
    modelValue: { type: Number, default: 1 },
    total: { type: Number, default: 9 },
    size: { type: Number, default: 10 }
  },
  emits: ["update:modelValue", "current-change", "update:tableData", "sort-change"],
  setup(props, { emit }) {
    const tableDataList = computed({
      get: () => props.tableData,
      set: (value) => emit("update:tableData", value)
    });
    const currentPage = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    const changePage = (val) => emit("current-change", val);
    const sortChange = ({ column, prop, order }) => {
      const sortType = order === "ascending" ? 1 : 0;
      emit("sort-change", {
        prop,
        order,
        sortType,
        currentPage: currentPage.value,
        column,
        sortColumn: column.rawColumnKey.replace(/[A-Z]/g, (res) => `_${res.toLowerCase()}`)
      });
    };
    return {
      currentPage,
      tableDataList,
      changePage,
      sortChange
    };
  }
});
const _hoisted_1$5 = { key: 2 };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_table = resolveComponent("el-table");
  const _component_pagination = resolveComponent("pagination");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_el_table, mergeProps({
      data: _ctx.tableDataList,
      style: { "width": "100%" },
      class: "mt20",
      "header-cell-style": _ctx.headerCellStyle
    }, _ctx.$attrs, {
      "empty-text": _ctx.emptyText,
      onSortChange: _ctx.sortChange
    }), createSlots({
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tableColumn, (item) => {
          return openBlock(), createBlock(_component_el_table_column, {
            key: item.prop,
            label: item.label,
            name: item.name,
            width: item.width,
            "min-width": item.minWidth,
            fixed: item.fixed,
            sortable: item.sortable,
            type: item.type,
            "show-overflow-tooltip": ""
          }, createSlots({
            default: withCtx((scope) => {
              var _a;
              return [
                _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", {
                  key: 0,
                  item: scope.row,
                  row: scope.row,
                  index: scope.$index
                }) : item.custom && scope.$index >= 0 ? renderSlot(_ctx.$slots, item.custom, {
                  key: 1,
                  item: scope.row,
                  row: scope.row,
                  index: scope.$index
                }) : (openBlock(), createElementBlock("span", _hoisted_1$5, toDisplayString((_a = scope.row[item.prop]) != null ? _a : "-"), 1))
              ];
            }),
            _: 2
          }, [
            item.header ? {
              name: "header",
              fn: withCtx(() => [
                renderSlot(_ctx.$slots, item.header)
              ])
            } : void 0
          ]), 1032, ["label", "name", "width", "min-width", "fixed", "sortable", "type"]);
        }), 128))
      ]),
      _: 2
    }, [
      _ctx.$slots.empty ? {
        name: "empty",
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, "empty")
        ])
      } : void 0
    ]), 1040, ["data", "header-cell-style", "empty-text", "onSortChange"]),
    createVNode(_component_pagination, {
      total: _ctx.total,
      modelValue: _ctx.currentPage,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.currentPage = $event),
      onCurrentChange: _ctx.changePage
    }, null, 8, ["total", "modelValue", "onCurrentChange"])
  ], 64);
}
var KTable = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render$6]]);
KTable.install = function(app) {
  app.component(KTable.name, KTable);
};
var propsValue = {
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
};
const _sfc_main$5 = defineComponent({
  name: "KBatchTable",
  components: { pagination: KPage },
  props: propsValue,
  emits: ["update:modelValue", "update:page", "current-change", "row-click"],
  setup(props, { emit }) {
    const multipleTable = ref(null);
    const toggleSelection = (rows) => {
      if (rows) {
        props.tableData.forEach((item) => {
          rows.forEach((row) => {
            if (getId(item) === getId(row)) {
              nextTick(() => multipleTable.value.toggleRowSelection(item));
            }
          });
        });
      } else {
        multipleSelection.value = [];
        multipleTable.value.clearSelection();
      }
    };
    const multipleSelection = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    watch(() => props.modelValue, (list) => {
      if (!list.length && multipleTable.value)
        multipleTable.value.clearSelection();
    });
    const setSelectable = () => {
      setTimeout(() => {
        if (props.selectList.length) {
          props.tableData.forEach((item) => {
            var _a;
            item[props.checkKey] = (_a = item[props.checkKey]) != null ? _a : 1;
          });
          props.selectList.forEach((item) => {
            props.tableData.forEach((type) => {
              if (getId(item) === getId(type))
                type[props.checkKey] = 0;
            });
          });
          toggleSelection(multipleSelection.value);
        }
      }, 200);
    };
    watch(() => props.tableData, (val) => {
      nextTick(() => {
        val.length && setSelectable();
        val.length && toggleSelection(multipleSelection.value);
      });
    }, { immediate: true });
    const handleSelect = (selection, row) => {
      const bitHas = selection.some((item) => getId(item) === getId(row));
      if (bitHas) {
        multipleSelection.value = [...multipleSelection.value, row];
      } else {
        multipleSelection.value = multipleSelection.value.filter((item) => getId(item) !== getId(row));
      }
    };
    const selectAll = (selection) => {
      if (multipleSelection.value.length) {
        if (selection.length) {
          const list = selection.filter((select) => multipleSelection.value.every((item) => getId(item) !== getId(select)));
          multipleSelection.value = [...multipleSelection.value, ...list];
        } else {
          multipleSelection.value = multipleSelection.value.filter((item) => props.tableData.every((row) => getId(item) !== getId(row)));
        }
      } else
        multipleSelection.value = selection;
    };
    const handleRowClick = (row) => {
      if (!checkSelection(row))
        return;
      const bitHas = multipleSelection.value.some((item) => getId(item) === getId(row));
      toggleSelection([row]);
      if (bitHas) {
        multipleSelection.value = multipleSelection.value.filter((item) => getId(item) !== getId(row));
      } else {
        multipleSelection.value = [...multipleSelection.value, row];
      }
      emit("row-click", row);
    };
    const checkSelection = (row) => {
      var _a;
      return (_a = row[props.checkKey]) != null ? _a : !row[props.checkKey];
    };
    const currentPage = computed({
      get: () => props.page,
      set: (value) => emit("update:page", value)
    });
    const changePage = (value) => {
      emit("current-change", value);
    };
    const getId = (item) => item[props.keyId];
    return {
      multipleTable,
      handleSelect,
      selectAll,
      handleRowClick,
      checkSelection,
      toggleSelection,
      currentPage,
      changePage
    };
  }
});
const _hoisted_1$4 = { key: 1 };
const _hoisted_2$3 = {
  key: 0,
  class: "mt20 flex-between"
};
const _hoisted_3$3 = { class: "flex1" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_table = resolveComponent("el-table");
  const _component_pagination = resolveComponent("pagination");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_el_table, mergeProps({ ref: "multipleTable" }, _ctx.$attrs, {
      "empty-text": "\u6682\u65E0\u6570\u636E",
      data: _ctx.tableData,
      "header-cell-style": _ctx.headerCellStyle,
      onSelect: _ctx.handleSelect,
      onSelectAll: _ctx.selectAll,
      onRowClick: _ctx.handleRowClick
    }), createSlots({
      default: withCtx(() => [
        createVNode(_component_el_table_column, {
          type: "selection",
          width: "55",
          selectable: _ctx.checkSelection
        }, null, 8, ["selectable"]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tableColumn, (item) => {
          return openBlock(), createBlock(_component_el_table_column, {
            label: item.label,
            key: item.prop,
            width: item.width,
            fixed: item.fixed,
            "min-width": item.minWidth,
            "show-overflow-tooltip": ""
          }, createSlots({
            default: withCtx((scope) => {
              var _a;
              return [
                item.custom && scope.$index >= 0 ? renderSlot(_ctx.$slots, item.custom, {
                  key: 0,
                  item: scope.row,
                  row: scope.row,
                  index: scope.$index
                }) : (openBlock(), createElementBlock("span", _hoisted_1$4, toDisplayString((_a = scope.row[item.prop]) != null ? _a : "-"), 1))
              ];
            }),
            _: 2
          }, [
            item.header ? {
              name: "header",
              fn: withCtx(() => [
                renderSlot(_ctx.$slots, item.header)
              ])
            } : void 0
          ]), 1032, ["label", "width", "fixed", "min-width"]);
        }), 128))
      ]),
      _: 2
    }, [
      _ctx.$slots.empty ? {
        name: "empty",
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, "empty")
        ])
      } : void 0
    ]), 1040, ["data", "header-cell-style", "onSelect", "onSelectAll", "onRowClick"]),
    _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
      createElementVNode("div", _hoisted_3$3, [
        renderSlot(_ctx.$slots, "footer")
      ]),
      createVNode(_component_pagination, {
        total: _ctx.total,
        class: "mt0 ml20",
        modelValue: _ctx.currentPage,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.currentPage = $event),
        onCurrentChange: _ctx.changePage
      }, null, 8, ["total", "modelValue", "onCurrentChange"])
    ])) : createCommentVNode("", true)
  ], 64);
}
var batchTable = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["render", _sfc_render$5]]);
batchTable.install = function(app) {
  app.component(batchTable.name, batchTable);
};
var main_vue_vue_type_style_index_0_lang$2 = "";
const _sfc_main$4 = defineComponent({
  name: "KDialog",
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: "\u63D0\u793A" },
    showFooter: { type: Boolean, default: true },
    customClass: { type: String, default: "" }
  },
  emits: ["update:modelValue", "confirm", "open", "close"],
  setup(props, { emit }) {
    const dialogVisible = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    const customClassName = computed(() => {
      if (props.customClass)
        return props.customClass;
      return !props.showFooter ? "custom-dialog no-footer" : "custom-dialog";
    });
    const closeHandle = () => {
      emit("close");
      parent.window.postMessage("closeMask()", "*");
      window.top.postMessage("closeMask()", "*");
    };
    const openHandler = () => {
      emit("open");
      parent.window.postMessage("openMask()", "*");
      window.top.postMessage("openMask()", "*");
    };
    const confirmHandler = () => {
      emit("confirm");
    };
    return {
      dialogVisible,
      customClassName,
      closeHandle,
      openHandler,
      confirmHandler
    };
  }
});
const _hoisted_1$3 = /* @__PURE__ */ createElementVNode("span", null, "\u8FD9\u662F\u4E00\u6BB5\u4FE1\u606F", -1);
const _hoisted_2$2 = { class: "dialog-footer" };
const _hoisted_3$2 = /* @__PURE__ */ createTextVNode("\u53D6 \u6D88");
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode("\u786E \u5B9A");
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_dialog = resolveComponent("el-dialog");
  return openBlock(), createBlock(_component_el_dialog, mergeProps({
    title: _ctx.title,
    modelValue: _ctx.dialogVisible,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.dialogVisible = $event),
    "custom-class": _ctx.customClassName
  }, _ctx.$attrs, {
    onClose: _ctx.closeHandle,
    onOpen: _ctx.openHandler
  }), createSlots({
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, () => [
        _hoisted_1$3
      ])
    ]),
    _: 2
  }, [
    _ctx.showFooter ? {
      name: "footer",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "footer", {}, () => [
          createElementVNode("span", _hoisted_2$2, [
            createVNode(_component_el_button, {
              size: "large",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dialogVisible = false)
            }, {
              default: withCtx(() => [
                _hoisted_3$2
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              size: "large",
              type: "primary",
              onClick: _ctx.confirmHandler
            }, {
              default: withCtx(() => [
                _hoisted_4$1
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ])
      ])
    } : void 0
  ]), 1040, ["title", "modelValue", "custom-class", "onClose", "onOpen"]);
}
var KDialog = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render$4]]);
KDialog.install = function(app) {
  app.component(KDialog.name, KDialog);
};
var main_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$3 = defineComponent({
  name: "KBreadcrumb",
  props: {
    isPadding: { type: Boolean, default: true },
    list: { type: Array, default: () => [] }
  },
  setup() {
    return {};
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_breadcrumb_item = resolveComponent("el-breadcrumb-item");
  const _component_el_breadcrumb = resolveComponent("el-breadcrumb");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["k-breadcrumb flex-between", { "style-padding": _ctx.isPadding }])
  }, [
    createVNode(_component_el_breadcrumb, { separator: "/" }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
          return openBlock(), createBlock(_component_el_breadcrumb_item, {
            to: item.path ? { path: item.path } : "",
            key: item.path
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(item.title), 1)
            ]),
            _: 2
          }, 1032, ["to"]);
        }), 128))
      ]),
      _: 1
    }),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var KBreadcrumb = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["render", _sfc_render$3]]);
KBreadcrumb.install = function(app) {
  app.component(KBreadcrumb.name, KBreadcrumb);
};
var main_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = defineComponent({
  name: "KTabs",
  props: {
    type: { type: String, default: "" },
    path: { type: String, default: "" },
    modelValue: { type: String, default: "" },
    isPadding: { type: Boolean, default: true },
    replace: { type: Boolean, default: false },
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
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const route = instance.appContext.config.globalProperties.$route;
    const router = instance.appContext.config.globalProperties.$router;
    const type = computed(() => props.path || route.params.type || route.name);
    const activeName = ref(type.value);
    watchEffect(() => {
      activeName.value = props.modelValue || type.value;
      emit("update:modelValue", activeName.value);
    });
    const query = computed(() => route.query);
    const handleClick = (tab) => {
      if (!props.path) {
        const pathParams = { path: `${tab.paneName}`, query: query.value };
        if (props.replace)
          router.replace(pathParams);
        else
          router.push(pathParams);
      } else
        emit("tab-click", tab.paneName);
      emit("change", tab.paneName);
    };
    return { activeName, handleClick };
  }
});
const _hoisted_1$2 = { class: "tabs-right ml10" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tab_pane = resolveComponent("el-tab-pane");
  const _component_el_tabs = resolveComponent("el-tabs");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["k-tabs", { "style-card": !_ctx.type, "style-padding": _ctx.isPadding && !_ctx.type }])
  }, [
    createVNode(_component_el_tabs, mergeProps({
      class: "flex-tabs",
      type: _ctx.type
    }, _ctx.$attrs, {
      modelValue: _ctx.activeName,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.activeName = $event),
      onTabClick: _ctx.handleClick
    }), {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tabsList, (item) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            label: item.label,
            name: item.name,
            key: item.name
          }, null, 8, ["label", "name"]);
        }), 128))
      ]),
      _: 1
    }, 16, ["type", "modelValue", "onTabClick"]),
    createElementVNode("div", _hoisted_1$2, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var KTabs = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["render", _sfc_render$2]]);
KTabs.install = function(app) {
  app.component(KTabs.name, KTabs);
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = defineComponent({
  name: "Delete"
});
const _hoisted_1$1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var _delete = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var main_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "KPicker",
  components: { batchTable, Delete: _delete },
  emits: ["update:modelValue", "update:page"],
  props: {
    modelValue: { type: Array, default: () => [] },
    selectList: { type: Array, default: () => [] },
    page: { type: Number, default: 1 },
    tableData: { type: Array, default: () => [] },
    tableColumn: { type: Array, default: () => [] },
    keyId: { type: String, default: "id" },
    keyName: { type: String, default: "pName" },
    showCount: { type: Boolean, default: false }
  },
  setup(props, { emit }) {
    const multipleSelection = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    watchEffect(() => {
      if (props.showCount) {
        multipleSelection.value.forEach((item) => {
          var _a;
          item.num = (_a = item.num) != null ? _a : 1;
        });
      }
    });
    const batchTableRef = ref(null);
    const emptyHandler = () => batchTableRef.value.toggleSelection();
    const deleteHandler = (row) => batchTableRef.value.handleRowClick(row);
    const currentPage = ref(1);
    const resetData = () => {
      currentPage.value = 1;
      emptyHandler();
    };
    const getName = (item) => item[props.keyName];
    const getId = (item) => item[props.keyId];
    return {
      multipleSelection,
      batchTableRef,
      currentPage,
      emptyHandler,
      resetData,
      deleteHandler,
      getName,
      getId
    };
  }
});
const _hoisted_1 = { class: "k-picker" };
const _hoisted_2 = { class: "col-left" };
const _hoisted_3 = { class: "col-right" };
const _hoisted_4 = { class: "selete-header flex-between" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5DF2\u9009\u62E9");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u6E05\u7A7A ");
const _hoisted_7 = { class: "selete-content" };
const _hoisted_8 = { class: "flex flex1 mr20 overflow" };
const _hoisted_9 = { class: "text-overflow" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" \u5220\u9664 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_batchTable = resolveComponent("batchTable");
  const _component_el_col = resolveComponent("el-col");
  const _component_delete = resolveComponent("delete");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_input_number = resolveComponent("el-input-number");
  const _component_el_row = resolveComponent("el-row");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "top", {}, void 0, true),
    createVNode(_component_el_row, { gutter: 10 }, {
      default: withCtx(() => [
        createVNode(_component_el_col, { span: 15 }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_2, [
              createVNode(_component_batchTable, {
                ref: "batchTableRef",
                height: "440px",
                "table-data": _ctx.tableData,
                "table-column": _ctx.tableColumn,
                "select-list": _ctx.selectList,
                "key-id": _ctx.keyId,
                modelValue: _ctx.multipleSelection,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.multipleSelection = $event),
                page: _ctx.currentPage,
                "onUpdate:page": _cache[1] || (_cache[1] = ($event) => _ctx.currentPage = $event)
              }, null, 8, ["table-data", "table-column", "select-list", "key-id", "modelValue", "page"])
            ])
          ]),
          _: 1
        }),
        createVNode(_component_el_col, { span: 9 }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_3, [
              createElementVNode("div", _hoisted_4, [
                createElementVNode("span", null, [
                  _hoisted_5,
                  createElementVNode("span", null, "(" + toDisplayString(_ctx.multipleSelection.length) + ")", 1)
                ]),
                createVNode(_component_el_button, {
                  text: "",
                  disabled: !_ctx.multipleSelection.length,
                  onClick: _ctx.emptyHandler
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(_component_delete)
                      ]),
                      _: 1
                    }),
                    _hoisted_6
                  ]),
                  _: 1
                }, 8, ["disabled", "onClick"])
              ]),
              createElementVNode("div", _hoisted_7, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.multipleSelection, (item) => {
                  return openBlock(), createElementBlock("div", {
                    class: normalizeClass(["flex-between pl10 pr10", { "mt10": _ctx.showCount }]),
                    key: _ctx.getId(item)
                  }, [
                    createElementVNode("div", _hoisted_8, [
                      createVNode(_component_el_tooltip, {
                        effect: "dark",
                        content: _ctx.getName(item),
                        placement: "top"
                      }, {
                        default: withCtx(() => [
                          createElementVNode("span", _hoisted_9, toDisplayString(_ctx.getName(item)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ]),
                    _ctx.showCount ? (openBlock(), createBlock(_component_el_input_number, {
                      key: 0,
                      modelValue: item.num,
                      "onUpdate:modelValue": ($event) => item.num = $event,
                      min: 1,
                      class: "width-100 flex-shrink mr10"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                    createVNode(_component_el_button, {
                      text: "",
                      onClick: ($event) => _ctx.deleteHandler(item)
                    }, {
                      default: withCtx(() => [
                        _hoisted_10
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ], 2);
                }), 128))
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
var KPicker = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3b4a1294"]]);
KPicker.install = function(app) {
  app.component(KPicker.name, KPicker);
};
const KUI = {
  KButton,
  KInput,
  KTable,
  KPage,
  KBatchTable: batchTable,
  KDialog,
  KBreadcrumb,
  KTabs,
  KPicker,
  install: () => {
  }
};
function startsWith(string, query, position = 0) {
  return string.substr(position, query.length) === query;
}
KUI.install = function(app) {
  Object.keys(KUI).forEach((key) => {
    if (startsWith(key, "K")) {
      const Component = KUI[key];
      app.component(Component.name, Component);
    }
  });
  Object.keys(directives).forEach((key) => {
    app.directive(key, directives[key]);
  });
};
export { batchTable as KBatchTable, KBreadcrumb, KButton, KDialog, KInput, KPage, KPicker, KTable, KTabs, KUI, directives };
