export default {
  modelValue: { type: [String, Number], default: '' },
  data: { type: Array, default: () => [] },
  width: { type: String, default: '' },
  columns: { type: Number, default: 5 },
  fixedColumn: { type: Boolean, default: false }, // 固定column
  gridGap: { type: Number, default: 20 },
  disabled: { type: Boolean, default: false }, // 是否可选
  keyId: { type: String, default: 'id' },
  highlight: { type: Boolean, default: false }, // 点击是否高亮
  rowClass: { type: [String, Object], default: 'border' },
};
