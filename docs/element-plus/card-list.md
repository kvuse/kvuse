# CardList 卡片列表

:::tip
自适应卡片列表，根据不用容器尺寸自适应元素个数

虚拟列表展示数据
:::

## 基础使用

<demo md src="card-list/basic">

<<< @/example/element-plus/card-list/basic.vue
</demo>

## 样式设置

可设置`row-class`设置元素样式，也是使用内置样式`border`或者`shadow`设置

<demo md src="card-list/style">

<<< @/example/element-plus/card-list/style.vue
</demo>

## 滚动加载

<demo md src="card-list/scroll">

<<< @/example/element-plus/card-list/scroll.vue
</demo>

## CardList 属性

<v-table type="attrs" :data="[
  { attr :'modelValue / v-model', dec: '绑定值', type: 'string / Number', optional: '-', default: '-' },
  { attr :'data', dec: '数据列表', type: 'array', optional: '-', default: '[]' },
  { attr :'width', dec: 'card的宽度', type: 'string', optional: '-', default: '' },
  { attr :'columns', dec: '行元素显示的个数', type: 'number', optional: '-', default: '5' },
  { attr :'fixedColumn', dec: '是否固定column', type: 'boolean', optional: '-', default: 'false' },
  { attr :'gridGap', dec: '元素的间距', type: 'number', optional: '-', default: '20' },
  { attr :'disabled', dec: '是否不可点击, 也可单独设置row.disabled', type: 'boolean', optional: '-', default: 'false' },
  { attr :'keyId', dec: '唯一值，点击设置的设置唯一值', type: 'string', optional: '-', default: '' },
  { attr :'rowClass', dec: '元素的样式, 默认border, shadow为阴影', type: 'string / object', optional: 'border / shadow', default: 'border' },
]" />

## CardList 事件

<v-table type="event" :data="[
  { event :'click', dec: '元素点击的时候触发', callback: 'row' },
  { event :'mouseenter', dec: '鼠标进入元素的时候触发', callback: 'row' },
  { event :'mouseleave', dec: '鼠标离开元素的时候触发', callback: 'row' },
  { event :'change', dec: '元素的改变时候触发', callback: 'row' },
  { event :'scroll', dec: '滚动条滚动触发，distance：滚动条到底部的距离，scrollTop：滚动条上滚的高度', callback: '{ distance, scrollTop }' },
]" />

## CardList slots

<v-table type="slot" :data="[
  { name :'default', dec: '默认', child: '{  row, index }' },
]" />

## Exposes

<v-table type="event" :data="[
  { event :'resetViewport', dec: '重置状态', callback: '-' },
  { event :'scrollbarRef', dec: '滚动条ref', callback: '-' },
]" />
