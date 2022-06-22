<template>
  <el-table ref="multipleTable" v-bind="$attrs" empty-text="暂无数据" :data="tableData" :header-cell-style="headerCellStyle" @select="handleSelect" @select-all="selectAll" @row-click="handleRowClick">
    <el-table-column type="selection" width="55" :selectable="checkSelection" />
    <el-table-column v-for="item in tableColumn" :label="item.label" :key="item.prop" :width="item.width" :fixed="item.fixed" :min-width="item.minWidth" show-overflow-tooltip>
      <template #header v-if="item.header">
        <slot :name="item.header" />
      </template>
      <template #default="scope">
        <slot v-if="item.custom && scope.$index >=0" :name="item.custom" :item="scope.row" :row="scope.row" :index="scope.$index" />
        <span v-else>{{ scope.row[item.prop] ?? '-' }}</span>
      </template>
    </el-table-column>
    <template #empty v-if="$slots.empty">
      <slot name="empty" />
    </template>
  </el-table>
  <div v-if="$slots.footer" class="mt20 flex-between">
    <div class="flex1">
      <slot name="footer" />
    </div>
    <pagination :total="total" class="mt0 ml20" v-model="currentPage" @current-change="changePage" />
  </div>
</template>

<script>
import {
  ref, computed, watch, defineComponent, nextTick,
} from 'vue';
import pagination from '../pagination';
import propsValue from './propsValue';

export default defineComponent({
  name: 'KBatchTable',
  components: { pagination },
  props: propsValue,
  emits: ['update:modelValue', 'update:page', 'current-change', 'row-click'],
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
      set: (value) => emit('update:modelValue', value),
    });

    watch(() => props.modelValue, (list) => {
      if (!list.length && multipleTable.value) multipleTable.value.clearSelection();
    });

    const setSelectable = () => {
      setTimeout(() => {
        if (props.selectList.length) {
          props.tableData.forEach((item) => {
            item[props.checkKey] = item[props.checkKey] ?? 1;
          });
          props.selectList.forEach((item) => {
            props.tableData.forEach((type) => {
              if (getId(item) === getId(type)) type[props.checkKey] = 0;
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
      } else multipleSelection.value = selection;
    };

    const handleRowClick = (row) => {
      if (!checkSelection(row)) return;
      const bitHas = multipleSelection.value.some((item) => getId(item) === getId(row));
      toggleSelection([row]);
      if (bitHas) {
        multipleSelection.value = multipleSelection.value.filter((item) => getId(item) !== getId(row));
      } else {
        multipleSelection.value = [...multipleSelection.value, row];
      }
      emit('row-click', row);
    };

    const checkSelection = (row) => row[props.checkKey] ?? !row[props.checkKey];

    const currentPage = computed({
      get: () => props.page,
      set: (value) => emit('update:page', value),
    });
    const changePage = (value) => {
      emit('current-change', value);
    };

    const getId = (item) => item[props.keyId];

    return {
      multipleTable, handleSelect, selectAll, handleRowClick, checkSelection, toggleSelection, currentPage, changePage,
    };
  },
});

</script>
