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
  if (props.type === 'attrs') {
    return [
      { label: '属性', prop: 'attr' },
      { label: '类型', prop: 'type' },
      { label: '说明', prop: 'dec', width: 200  },
      { label: '可选值', prop: 'optional', width: '220' },
      { label: '默认', prop: 'default' },
    ];
  }
  else if (props.type === 'event') {
    return [
      { label: '事件', prop: 'event' },
      { label: '说明', prop: 'dec' },
      { label: '回调参数', prop: 'callback' },
    ];
  }else if (props.type === 'dec'){
    return [
      { label: '名称', prop: 'name' },
      { label: '说明', prop: 'dec' },
    ];
  }
  return [
    { label: '插槽名', prop: 'name' },
    { label: '说明', prop: 'dec' },
    { label: '子标签', prop: 'child' },
  ];
});
</script>

<style lang="scss" scoped>

</style>
