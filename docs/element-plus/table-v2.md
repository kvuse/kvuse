# Table-V2 表格

## 基础使用

<demo md src="table-v2/basic">

<<< @/example/element-plus/table-v2/basic.vue
</demo>

## 使用排序

如果`table-column`中属性设置`sortable`为`true`，可设置排序，可使用`sort-change`方法，进行排序操作

<demo md src="table-v2/sort">

<<< @/example/element-plus/table-v2/sort.vue
</demo>

## 使用插槽

<demo md src="table-v2/slots">

<<< @/example/element-plus/table-v2/slots.vue
</demo>

## 固定行表格

<demo md src="table-v2/fixed">

<<< @/example/element-plus/table-v2/fixed.vue
</demo>

## 显示合计行

将 `show-summary` 设置为`true`就会在表格尾部展示合计行

<demo md src="table-v2/show-summary">

<<< @/example/element-plus/table-v2/show-summary.vue
</demo>

## 自定义页脚

<demo md src="table-v2/footer">

<<< @/example/element-plus/table-v2/footer.vue
</demo>

## TableV2 属性

<v-table type="attrs" :data="[
  { attr :'table-column', dec: '表格列表', type: 'array', optional: '-', default: '[]' },
  { attr :'table-data', dec: '表格数据', type: 'array', optional: '-', default: '[]' },
  { attr :'modelValue / v-model', dec: '绑定的当前页数', type: 'number', optional: '-', default: 1 },
  { attr :'header-cell-style', dec: '表格头部样式', type: 'object', optional: '-', default: `{ background:'#f5f7fa', color:'#909399'}` }, { attr :'height', dec: '表格列表高度', type: 'string', optional: 'auto/string', default: '100%' },
  { attr :'rowStyle', dec: 'row行的样式设置', type: 'object', optional: '-', default: {} },
  { attr :'rowClassName', dec: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className', type: 'function({ row, rowIndex }) / string / object', optional: '-', default: '-' },
  { attr :'show-summary', dec: '是否在表尾显示合计行', type: 'boolean', optional: '-', default: 'false' },
  { attr :'sum-text', dec: '显示摘要行第一列的文本', type: 'string', optional: '-', default: '合计' },
  { attr :'summary-method', dec: '自定义的合计计算方法', type: 'function({ row, index })', optional: '-', default: '-' },
]" />

## TableV2-column 属性

<v-table type="attrs" :data="[
  { attr :'label', dec: '对应列的名字', type: 'string', optional: '-', default: '' },
  { attr :'prop', dec: '对应列的数据', type: 'string', optional: '-', default: '' },
  { attr :'width', dec: '对应列的宽度', type: 'string', optional: '-', default: '' },
  { attr :'minWidth', dec: '对应列的最小宽度', type: 'string', optional: '-', default: '' },
  { attr :'sortable', dec: '对应列是否可以排序', type: 'boolean', optional: '-', default: 'false' },
  { attr :'show-overflow-tooltip', dec: '当内容过长被隐藏时显示 tooltip', type: 'boolean', optional: '-', default: 'true' },
  { attr :'fixed', dec: '列是否固定在左侧`left`或者右侧`right`, true 表示固定在左侧', type: 'string / boolean', optional: 'left / right /true', default: '' },
]" />

## Table-v2 事件

<v-table type="event" :data="[
  { event :'row-click', dec: '当用户点击行触发该事件', callback: 'row,index' },
  { event :'scroll', dec: '滚动条滚动触发，distance：滚动条到底部的距离，scrollTop：滚动条上滚的高度', callback: '{ distance, scrollTop }' },
  { event :'sort-change', dec: '点击排序触发', callback: '{  sortType, column }' },
]" />

## TableV2-column 插槽

<v-table type="slot" :data="[
  { name :'default', dec: '默认插槽', child: '-' },
  { name :'custom', dec: '自定义内容插槽', child: '-' },
  { name :'header', dec: '自定义表头插槽', child: '-' },
  { name :'footer', dec: '自定义页脚插槽', child: '-' },
]" />

## Exposes

<v-table type="event" :data="[
  { event :'setScrollTop', dec: '设置滚动条到顶部的距离', callback: '-' },
]" />
