export default {
  modelValue: { type: Array, default: () => [] },
  keyId: { type: String, default: 'id' },
  tableData: { type: Array, default: () => [] },
  tableColumn: {
    type: Array,
    default: () => [
      { label: '商品名称', prop: 'name', aglin: 'center' },
      { label: '等级', prop: 'level' },
      { label: '价格', prop: 'price' },
    ],
  },
  headerCellStyle: {
    type: Object,
    default: () => ({
      background: '#f5f7fa', color: '#909399',
    }),
  },
  height: { type: String, default: '500px' },
};