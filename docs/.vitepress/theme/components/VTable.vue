<template>
  <k-table
    :header-cell-style="{ background: '#fff', color: '#909399'}"
    :show-overflow-tooltip="false"
    :table-column="tableColumn"
    :table-data="data"
  />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: { type: String, default: 'attrs' },
  data: { type: Array, default: () => [] },
});

const tableColumn = computed(() => {
  const columnMap = {
    attrs: [
      { label: '属性', prop: 'attr', showOverflowTooltip: false },
      { label: '类型', prop: 'type', showOverflowTooltip: false },
      { label: '说明', prop: 'dec', showOverflowTooltip: false },
      { label: '可选值', prop: 'optional', showOverflowTooltip: false },
      { label: '默认', prop: 'default', showOverflowTooltip: false },
    ],
    'attrs-dec': [
      { label: '属性', prop: 'attr', showOverflowTooltip: false },
      { label: '类型', prop: 'type', showOverflowTooltip: false },
      { label: '说明', prop: 'dec', showOverflowTooltip: false },
      { label: '默认', prop: 'default', showOverflowTooltip: false },
    ],
    event: [
      { label: '事件', prop: 'event', showOverflowTooltip: false },
      { label: '说明', prop: 'dec', showOverflowTooltip: false },
      { label: '回调参数', prop: 'callback', showOverflowTooltip: false },
    ],
    dec: [
      { label: '名称', prop: 'name', showOverflowTooltip: false },
      { label: '说明', prop: 'dec', showOverflowTooltip: false },
    ],
  };
  return columnMap[props.type] ?? [
    { label: '插槽名', prop: 'name', showOverflowTooltip: false },
    { label: '说明', prop: 'dec', showOverflowTooltip: false },
    { label: '子标签', prop: 'child', showOverflowTooltip: false },
  ];
});
</script>

<style lang="scss" scoped>

</style>
