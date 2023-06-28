# status 状态

## 基础使用

<demo md src="status/basic" dir="vant" is-view>

<<< @/example/vant/status/basic.vue
</demo>

## 图片类型

可设置`type`属性来使用图片类型。内置了三种图片类型：`data`, `fail`, `loading`

<demo md src="status/loading" dir="vant" is-view>

<<< @/example/vant/status/loading.vue
</demo>

## 自定义图片

<demo md src="status/image" dir="vant" is-view>

<<< @/example/vant/status/image.vue
</demo>

## Status 属性

<v-table type="attrs" :data="[
  { attr :'type', dec: '图片类型', type: 'String', optional: '-', default: 'data' },
]" />

## Status slots

<v-table type="slot" :data="[
  { name :'default', dec: '默认插槽，显示内容', child: '-' },
  { name :'image', dec: '图片插槽', child: '-' },
]" />
