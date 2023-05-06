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

<v-table type="attrs" :data="[
  { attr :'disabled', dec: '是否禁用下拉刷新', type: 'boolean', optional: '-', default: 'false' },
  { attr :'finishedText', dec: '完成加载的文字提示', type: 'string', optional: '-', default: '没有更多了' },
  { attr :'loadChange', dec: 'load 回调 返参查看Option', type: 'function', optional: '-', default: '' },
  { attr :'refreshChange', dec: '下拉刷新的回调', type: 'function', optional: '-', default: '-' },
]" />

## loadChange Option

<v-table type="dec" :data="[
  { name :'pageIndex', dec: '当前页数' },
  { name :'isNullData', dec: '数据是否为空' },
  { name :'isFinished', dec: '页码是否全部加载完成' },
]" />

## List slots

<v-table type="slot" :data="[
  { name :'default', dec: '默认插槽，显示内容', child: '-' },
  { name :'loading', dec: '加载中图片插槽', child: '-' },
  { name :'empty', dec: '没有数据图片插槽', child: '-' },
]" />

## Exposes

<v-table type="event" :data="[
  { event :'reset', dec: '重置状态', callback: '-' },
]" />
