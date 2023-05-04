<template>
  <div class="k-table bg-white mt10 p20">
    <div class="table-content">
      <div class="table-header flex" :style="headerStyle">
        <template v-for="item in columns" :key="item.prop">
          <div class="flex1 table-column" :style="alignStyle">
            {{ item.label }}
          </div>
        </template>
      </div>
      <div class="table-body">
        <div v-for="(item,index) in data" :key="index" class="flex table-column column-item flex-align-center" :style="alignStyle">
          <template v-for="column in columns" :key="column.prop">
            <div class="flex1" :class="{'text-overflow':showOverflowTooltip}">
              <slot>{{ item[column.prop] }}</slot>
            </div>
          </template>
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
  },
  emits: ['row-click'],
  setup(props, { emit }) {
    const alignStyle = computed(() => [
      `text-align:${props.align}`,
      props.border ? 'border-bottom: 1px solid #ebedf0;' : '',
      props.rowStyle,
    ]);
    const clickRow = (row, index) => emit('row-click', row, index);
    return { alignStyle, clickRow };
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
