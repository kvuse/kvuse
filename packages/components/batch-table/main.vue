<template>
  <el-table ref="multipleTableRef" v-bind="$attrs" :data="tableData" :header-cell-style="headerCellStyle" @select="handleSelect" @select-all="selectAll" @row-click="handleRowClick">
    <el-table-column type="selection" width="55" :selectable="checkSelection" />
    <el-table-column v-for="item in tableColumn" :label="item.label" :key="item.prop" :width="item.width" :fixed="item.fixed" :min-width="item.minWidth" :show-overflow-tooltip="item.showOverflowTooltip ?? true">
      <template #header v-if="item.header">
        <slot name="header" :column="item" />
        <slot :name="item.header" :column="item" />
      </template>
      <template #default="scope">
        <slot v-if="$slots.default" :item="scope.row" :row="scope.row" :column="item" :index="scope.$index" />
        <slot v-if="item.custom && scope.$index >=0" :name="item.custom" :item="scope.row" :column="item" :row="scope.row" :index="scope.$index" />
        <span v-else>{{ scope.row[item.prop] ?? '-' }}</span>
      </template>
    </el-table-column>
    <template #empty v-if="$slots.empty">
      <slot name="empty" />
    </template>
  </el-table>
  <div class="flex-between">
    <div class="flex1 mr20 mt20">
      <slot name="footer" v-if="$slots.footer" />
    </div>
    <pagination :total="total" :show-size="showSize" v-bind="$attrs" v-model="currentPage" @current-change="changePage" />
  </div>
</template>

<script  setup>
import {
  ref, computed, watch, nextTick,
} from 'vue';
import { ElTable } from 'element-plus';

import propsValue from './propsValue';
import pagination from '../pagination';

defineOptions({
  name: 'KBatchTable',
});

const props = defineProps(propsValue);

const emit = defineEmits(['update:modelValue', 'update:page', 'current-change', 'row-click']);

const multipleTableRef = ref(null);
const multipleSelection = ref([]);
const toggleSelectionHandle = (rows) => {
  if (rows) {
    rows.forEach((row) => {
      const selectedRow = props.tableData.find((item) => item[props.keyId] === row[props.keyId]);
      multipleTableRef.value.toggleRowSelection(selectedRow ?? row);
    });
  } else {
    multipleTableRef.value.clearSelection();
  }
};

const setMultipleSelection = (row, isAdd = true) => {
  if (isAdd) multipleSelection.value.push(row);
  else {
    multipleSelection.value = multipleSelection.value
      .filter((item) => item[props.keyId] !== row?.[props.keyId]);
  }
};

const checkSelection = (row) => row[props.checkKey] ?? !row[props.checkKey];

const handleSelect = (selection, row) => {
  const hasRow = selection.some((item) => item[props.keyId] === row?.[props.keyId]);
  setMultipleSelection(row, hasRow);
};

const selectAll = (selection) => toggleSelection(selection);

const handleRowClick = (row) => {
  if (!checkSelection(row)) return;
  toggleSelectionHandle([row]);
  const hasRowSelection = multipleSelection.value.some((item) => item[props.keyId] === row[props.keyId]);
  setMultipleSelection(row, !hasRowSelection);
  emit('row-click', row);
};

watch(() => multipleSelection.value, (val, oldVal) => {
  if (oldVal) emit('update:modelValue', val);
}, { immediate: true, deep: true });

const toggleSelection = (rows = []) => {
  toggleSelectionHandle();
  rows.forEach((row) => {
    const selectedRow = props.tableData.find((item) => item[props.keyId] === row[props.keyId]);
    multipleTableRef.value.toggleRowSelection(selectedRow ?? row, !!checkSelection(row));
  });
  multipleSelection.value = rows;
};

const clear = () => toggleSelection();

watch(() => props.modelValue, (val, oldVal) => {
  if (!val.length && oldVal.length) toggleSelection();
});

const getId = (item) => item[props.keyId];

const setSelectable = () => {
  if (props.selectList.length) {
    props.selectList.forEach((item) => {
      props.tableData.forEach((type) => {
        type[props.checkKey] = type[props.checkKey] ?? 1;
        if (getId(item) === getId(type)) type[props.checkKey] = 0;
      });
    });
  }
};

watch(() => props.tableData, (val) => {
  nextTick(() => {
    val.length && setSelectable();
    val.length && toggleSelection(props.modelValue);
  });
}, { immediate: true });

const currentPage = computed({
  get: () => props.page,
  set: (value) => emit('update:page', value),
});
const changePage = (value) => {
  emit('current-change', value);
};

defineExpose({
  toggleSelection,
  handleRowClick,
  clear,
});

</script>
