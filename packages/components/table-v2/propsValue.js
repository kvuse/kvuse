export default {
  modelValue: { type: Array, default: () => [] },
  keyId: { type: String, default: 'id' },
  tableData: { type: Array, default: () => [] },
  tableColumn: {
    type: Array,
    default: () => [
      { label: '商品名称', prop: 'name' },
      { label: '等级', prop: 'level' },
      { label: '价格', prop: 'price' },
    ],
  },
};
