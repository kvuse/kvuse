<template>
  <el-table :data="tableDataList" style="width: 100%;" class="mt20" :header-cell-style="headerCellStyle" v-bind="$attrs" :empty-text="emptyText" @sort-change="sortChange" ref="elTable">
    <el-table-column v-for="item in tableColumn" :key="item.prop" :label="item.label" :name="item.name" :width="item.width" :min-width="item.minWidth" :fixed="item.fixed" :sortable="item.sortable" :type="item.type" :show-overflow-tooltip="item.showOverflowTooltip ?? true">
      <template #header v-if="item.header">
        <slot :name="item.header" />
      </template>
      <template #default="scope">
        <slot v-if="$slots.default" :item="scope.row" :row="scope.row" :index="scope.$index" />
        <slot v-else-if="item.custom && scope.$index >=0" :name="item.custom" :item="scope.row" :row="scope.row" :index="scope.$index" />
        <span v-else>{{ scope.row[item.prop] ?? '-' }}</span>
      </template>
    </el-table-column>
    <template #empty v-if="$slots.empty">
      <slot name="empty" />
    </template>
  </el-table>
  <pagination :total="total" :size="size" :show-size="showSize" v-model="currentPage" @current-change="changePage" />
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { ElTable, ElTableColumn } from 'element-plus';
import pagination from '../pagination';

export default defineComponent({
  name: 'KTable',
  components: { pagination, ElTable, ElTableColumn },
  props: {
    emptyText: { type: String, default: '暂无数据' },
    headerCellStyle: {
      type: Object,
      default: () => ({
        background: '#f5f7fa', color: '#909399',
      }),
    },
    tableColumn: {
      type: Array,
      default: () => [
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
      ],
    },
    showOverflowTooltip: { type: Boolean, default: true },
    tableData: { type: Array, default: () => [] },
    modelValue: { type: Number, default: 1 },
    showSize: { type: Boolean, default: false },
    total: { type: Number, default: 9 },
    size: { type: Number, default: 10 },
  },
  emits: ['update:modelValue', 'current-change', 'update:tableData', 'sort-change'],
  setup(props, { emit }) {
    const tableDataList = computed({
      get: () => props.tableData,
      set: (value) => emit('update:tableData', value),
    });
    const currentPage = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });

    const changePage = (val) => emit('current-change', val);

    const sortChange = ({ column, order }) => {
      const sortType = order === 'ascending' ? 1 : 0;
      emit('sort-change', {
        prop: column?.rawColumnKey,
        order,
        sortType,
        currentPage: currentPage.value,
        column,
        sortColumn: column?.rawColumnKey,
      });
    };

    const elTable = ref(null);

    return {
      currentPage, tableDataList, changePage, sortChange, instance: elTable, elTable,
    };
  },
});

</script>

<style>

</style>
