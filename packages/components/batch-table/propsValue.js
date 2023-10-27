export default {
  modelValue: { type: Array, default: () => [] },
  total: { type: Number, default: 9 },
  size: { type: Number, default: 10 },
  page: { type: Number, default: 1 },
  showSize: { type: Boolean, default: false },
  keyId: { type: String, default: 'id' },
  checkKey: { type: String, default: 'isSelect' },
  tableData: { type: Array, default: () => [] },
  selectList: { type: Array, default: () => [] },
  showFooter: { type: Boolean, default: true },
  tableColumn: {
    type: Array,
    default: () => [
      { label: '商品名称', prop: 'name' },
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
};
