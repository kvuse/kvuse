# Picker 添加选择器

## 基础使用

<demo md src="picker/basic">

<<< @/example/element-plus/picker/basic.vue

</demo>

## 插槽使用

<demo md src="picker/slots">

<<< @/example/element-plus/picker/slots.vue

</demo>

## 自适应高度

<demo md src="picker/auto-height">

<<< @/example/element-plus/picker/auto-height.vue

</demo>

## 自定义右侧

<demo md src="picker/custom-right">

<<< @/example/element-plus/picker/custom-right.vue

</demo>

## 弹框模式

:::tip
一般添加商品，都是使用弹框模式
:::

<demo md src="picker/dialog">

<<< @/example/element-plus/picker/dialog.vue
</demo>

## 显示数量

设置`show-count`, 可设置数量选择

<demo md src="picker/show-count">

<<< @/example/element-plus/picker/show-count.vue
</demo>

## Picker 属性

<v-table type="attrs" :data="[
  { attr :'modelValue / v-model', dec: '勾选的列表', type: 'array', optional: '-', default: [] },
  { attr :'table-column', dec: '表格列表', type: 'array', optional: '-', default: '[]' },
  { attr :'table-data', dec: '表格数据', type: 'array', optional: '-', default: '[]' },
  { attr :'select-list', dec: '设置选中的数组', type: 'array', optional: '-', default: [] },
  { attr :'key-id', dec: '设置选择的唯一值', type: 'string', optional: '-', default: 'id' },
  { attr :'key-name', dec: '设置选择的名字参数', type: 'string', optional: '-', default: 'name' },
  { attr :'scrollbar-always-on', dec: '总是显示滚动条', type: 'string', optional: '-', default: 'false' },
  { attr :'height', dec: '表格的高度,如果自适应布局,设置100%', type: 'string', optional: '-', default: '442px' },
  { attr :'right-width', dec: '右侧的固定宽度，如果没有设置15:9', type: 'string', optional: '-', default: '' },
]" />

## TableColumn 属性

[查看TableColumn属性](table-batch)

## Picker slots

<v-table type="slot" :data="[
  { name :'header', dec: '自定义表头插槽', child: '{  column }' },
  { name :'custom', dec: '自定义内容插槽', child: '{ row, column, index }' },
  { name :'right', dec: '右侧插槽', child: '-' },
  { name :'right-header', dec: '右侧表头插槽', child: '-' },
]" />

## Picker Expose

<v-table type="slot" :data="[
  { name :'resetData', dec: '清空以及重置数据', child: '-' },
  { name :'deleteHandler', dec: '删除选中的某一个', child: 'row' },
]" />
