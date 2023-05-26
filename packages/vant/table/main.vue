<template>
  <div class="k-table bg-white mt10 p20">
    <div class="table-content">
      <div class="table-header flex" :style="headerStyle">
        <template v-for="item in columns" :key="item.prop">
          <div class="table-column" :style="columnStyle(item)">
            {{ item.label }}
          </div>
        </template>
      </div>
      <div class="table-body">
        <div v-for="(item,index) in data" :key="index" class="flex table-column column-item flex-align-center">
          <template v-for="column in columns" :key="column.prop">
            <div :style="columnStyle(column)" :class="{'text-overflow':showOverflowTooltip}">
              <slot
                :name="column.custom ?? column.prop" :row="item" :index="index"
                v-if="$slots[column?.custom ??column?.prop ]"
              />
              <span v-else>{{ item[column.prop] }}</span>
            </div>
          </template>
        </div>
        <div class="flex-center p20" v-if="!data.length">
          <slot name="empty">
            <span class="color-99">{{ emptyText }}</span>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'KvTable',
  props: {
    align: { // 对齐方式
      type: String,
      default: 'left',
      validate: (value) => ['left', 'center', 'right'].includes(value),
    },
    columns: { type: Array, default: () => [] },
    data: { type: Array, default: () => [] },
    headerStyle: { type: Object, default: () => ({}) },
    rowStyle: { type: Object, default: () => ({}) },
    border: { type: Boolean, default: false },
    showOverflowTooltip: { type: Boolean, default: false },
    emptyText: { type: String, default: '暂无数据' },
  },
  emits: ['row-click'],
  setup(props, { emit }) {
    const columnStyle = computed(() => function (row) {
      const widthProps = Number(row.width) ? `${row.width}px` : row.width;
      return [
        `text-align:${props.align}`,
        props.border ? 'border-bottom: 1px solid #ebedf0;' : '',
        props.rowStyle,
        row.width ? `width: ${widthProps}` : 'flex: 1',
      ];
    });
    const clickRow = (row, index) => emit('row-click', row, index);
    return { columnStyle, clickRow };
  },
});
</script>

<style lang="scss" scoped>
.k-table {
  .table-column {
    padding: 8px 12px;
  }
}
</style>
