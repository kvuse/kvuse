# Table 表格

## 基础使用

<demo md src="table/basic" dir="vant">

<<< @/example/vant/table/basic.vue
</demo>

## 使用边框

<demo md src="table/border" dir="vant">

<<< @/example/vant/table/border.vue
</demo>

## 超出隐藏

如果设置`show-overflow-tooltip`，设置内容超出隐藏

<demo md src="table/tooltip" dir="vant">

<<< @/example/vant/table/tooltip.vue
</demo>

## 设置表头样式

如果设置`headerStyle`，可修改表头样式

<demo md src="table/header" dir="vant">

<<< @/example/vant/table/header.vue
</demo>

## 设置显示布局

如果设置`align`，可设置内容显示位置

<demo md src="table/align" dir="vant">

<<< @/example/vant/table/align.vue
</demo>

## Table 属性

<v-table type="attrs" :data="[
  { attr :'columns', dec: '表格列表', type: 'array', optional: '-', default: '[]' },
  { attr :'data', dec: '表格数据', type: 'array', optional: '-', default: '[]' },
  { attr :'algin', dec: '内容显示位置', type: 'string', optional: 'left / right / center', default: 'left' },
  { attr :'header-style', dec: '表头样式', type: 'object', optional: '-', default: '-' },
  { attr :'row-style', dec: '表格行样式', type: 'object', optional: '-', default: '-' },
  { attr :'border', dec: '是否显示border-bottom', type: 'boolean', optional: '-', default: false },
  { attr :'show-overflow-tooltip', dec: '内容超出隐藏', type: 'boolean', optional: '-', default: false },
]" />

## Table 事件

<v-table type="event" :data="[
  { event :'row-click', dec: '点击行时候触发', callback: 'row, index' },
]" />
