# Table 表格

:::tip
  表格带有分页，如果设置`total`大于10，会显示分页，如果只有一页数据，分页不显示
:::

## 基础使用

<demo md src="table/basic">

<<< @/example/element-plus/table/basic.vue
</demo>

## 使用分页

如果设置`total`值，数值大于`size`值（默认10），显示分页

<demo md src="table/page">

<<< @/example/element-plus/table/page.vue
</demo>

## 使用排序

如果`table-column`中属性设置`sortable`为`true`，可设置排序，可使用`sort-change`方法，进行排序操作

<demo md src="table/sort">

<<< @/example/element-plus/table/sort.vue
</demo>

## 使用插槽

<demo md src="table/slots">

<<< @/example/element-plus/table/slots.vue
</demo>

## 使用批量操作

请使用[BatchTable 批量表格](batch-table.md)

## Table 属性

<v-table type="attrs" :data="[
  { attr :'table-column', dec: '表格列表', type: 'array', optional: '-', default: '[]' },
  { attr :'table-data', dec: '表格数据', type: 'array', optional: '-', default: '[]' },
  { attr :'modelValue / v-model', dec: '绑定的当前页数', type: 'number', optional: '-', default: 1 },
  { attr :'header-cell-style', dec: '表格头部样式', type: 'object', optional: '-', default: `{ background:'#f5f7fa', color:'#909399'}` },
  { attr :'total', dec: '数据的总条数', type: 'number', optional: '-', default: 9 },
  { attr :'size', dec: '每页显示的条数', type: 'number', optional: '-', default: 10 },
  { attr :'show-size', dec: '是否显示切换页码', type: 'boolean', optional: '-', default: false },
]" />

## Table-column 属性

<v-table type="attrs" :data="[
  { attr :'label', dec: '对应列的名字', type: 'string', optional: '-', default: '' },
  { attr :'prop', dec: '对应列的数据', type: 'string', optional: '-', default: '' },
  { attr :'width', dec: '对应列的宽度', type: 'string', optional: '-', default: '' },
  { attr :'minWidth', dec: '对应列的最小宽度', type: 'string', optional: '-', default: '' },
  { attr :'type', dec: '对应列的类型。 如果设置了selection则显示多选框, 如果设置了 expand 则显示为一个可展开的按钮', type: 'string', optional: 'selection / expand', default: '' },
  { attr :'sortable', dec: '对应列是否可以排序', type: 'boolean', optional: '-', default: 'false' },
  { attr :'show-overflow-tooltip', dec: '当内容过长被隐藏时显示 tooltip', type: 'boolean', optional: '-', default: 'true' },
  { attr :'fixed', dec: '列是否固定在左侧`left`或者右侧`right`, true 表示固定在左侧', type: 'string / boolean', optional: 'left / right /true', default: '' },
]" />

## Table 事件

<v-table type="event" :data="[
  { event :'current-change', dec: '当用户切换分页的触发该事件', callback: 'currengPage' },
  { event :'sort-change', dec: '点击排序触发', callback: '{ prop, order, sortType, currentPage, column, sortColumn }' },
]" />

## Table-column slots

<v-table type="slot" :data="[
  { name :'default', dec: '默认插槽', child: '-' },
  { name :'custom', dec: '自定义内容插槽', child: '-' },
  { name :'header', dec: '自定义表头插槽', child: '-' },
]" />
