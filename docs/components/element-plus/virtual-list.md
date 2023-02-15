# VirtualList 虚拟列表

## 基础使用

<demo md src="virtual-list/basic">

<<< @/example/element-plus/virtual-list/basic.vue
</demo>

## 滚动加载

<demo md src="virtual-list/scroll">

<<< @/example/element-plus/virtual-list/scroll.vue
</demo>

## VirtualList 属性

<v-table type="attrs" :data="[
  { attr :'height', dec: '容器高度', type: 'string', optional: '', default: '500px' },
  { attr :'rowClass', dec: 'row行的class', type: 'string / object', optional: '-', default: '-' },
  { attr :'rowStyle', dec: 'row行的样式设置', type: 'object', optional: '-', default: {} },
  { attr :'data', dec: '绑定列表的数组', type: 'array', optional: '-', default: [] },
]" />

## VirtualList 事件

<v-table type="event" :data="[
  { event :'row-click', dec: '当用户点击行触发该事件', callback: 'row,index' },
  { event :'scroll', dec: '滚动条滚动触发，distance：滚动条到底部的距离，scrollTop：滚动条上滚的高度', callback: '{ distance, scrollTop }' },
]" />

## VirtualList slots

<v-table type="slot" :data="[
  { name :'-', dec: '默认slot内容,参数: { row, index }', child: '-' },
]" />
