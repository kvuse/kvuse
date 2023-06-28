# List 列表

## 基础使用

<demo md src="list/basic" dir="vant" is-view>

<<< @/example/vant/list/basic.vue
</demo>

## 滚动加载

<demo md src="list/scroll" dir="vant" is-view>

<<< @/example/vant/list/scroll.vue
</demo>

## 下拉加载

可设置`disabled`, 默认为`true`可下拉加载, 如果不可下拉加载，可设置`false`。

<demo md src="list/pull" dir="vant" is-view>

<<< @/example/vant/list/pull.vue
</demo>

## 自定义图片

<demo md src="list/image" dir="vant" is-view>

<<< @/example/vant/list/image.vue
</demo>

## List 属性

<v-table type="attrs-dec" :data="[
  { attr :'disabled', dec: '是否禁用下拉刷新', type: 'boolean', optional: '-', default: 'false' },
  { attr :'finishedText', dec: '完成加载的文字提示', type: 'string', optional: '-', default: '没有更多了' },
  { attr :'refreshChange', dec: '下拉刷新的回调，默认会回调用loadRequest', type: 'function', optional: '-', default: '-' },
  { attr :'loadRequest', dec: '加载时请求函数', type: 'function', optional: '-', default: '' },
  { attr :'responseNames', dec: '自定义 response 结构中的字段参数', type: 'object', optional: '-', default: '查看Option' },
]" />

## responseNames Option

<v-table type="dec" :data="[
  { name :'pageNo', dec: '当前页数' },
  { name :'totalPage', dec: '总页数' },
  { name :'records', dec: '数据列表数组' },
]" />

## List slots

<v-table type="slot" :data="[
  { name :'default', dec: '默认插槽，显示内容', child: '-' },
  { name :'row', dec: 'row插槽,显示每行的内容', child: '{ row, index }' },
  { name :'loading', dec: '加载中图片插槽', child: '-' },
  { name :'empty', dec: '没有数据图片插槽', child: '-' },
]" />

## Exposes

<v-table type="event" :data="[
  { event :'reset', dec: '重置状态', callback: '-' },
]" />
