# Picker 添加选择器

## 基础使用

<demo md src="picker/basic">

<<< @/example/element-plus/picker/basic.vue

</demo>

## 插槽使用

<demo md src="picker/slots">

<<< @/example/element-plus/picker/slots.vue

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

## Pagination 属性

<v-table type="attrs" :data="[
  { attr :'modelValue / v-model', dec: '勾选的列表', type: 'array', optional: '-', default: [] },
  { attr :'table-column', dec: '表格列表', type: 'array', optional: '-', default: '[]' },
  { attr :'table-data', dec: '表格数据', type: 'array', optional: '-', default: '[]' },
  { attr :'select-list', dec: '设置选中的数组', type: 'array', optional: '-', default: [] },
  { attr :'key-id', dec: '设置选择的唯一值', type: 'string', optional: '-', default: 'id' },
  { attr :'key-name', dec: '设置选择的名字参数', type: 'string', optional: '-', default: 'name' },
]" />

## TableColumn 属性

[查看TableColumn属性](/components/batch-table)

## Table-column slots

<v-table type="slot" :data="[
  { name :'header', dec: '自定义表头插槽', child: '{  column }' },
  { name :'custom', dec: '自定义内容插槽', child: '{ row, column, index }' },
]" />
