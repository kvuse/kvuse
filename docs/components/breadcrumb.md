# Breadcrumb 面包屑

## 基础使用

可通过设置`path`, 跳转路径

<demo md src="breadcrumb/basic">

<<< @/example/breadcrumb/basic.vue

</demo>

## 左右布局

<demo md src="breadcrumb/layout">

<<< @/example/breadcrumb/layout.vue
</demo>

## href 模式

可通过设置`url`, 跳转链接地址

<demo md src="breadcrumb/href">

<<< @/example/breadcrumb/href.vue
</demo>

## Breadcrumb 属性

<v-table type="attrs" :data="[
  { attr :'list', dec: 'list', type: 'array', optional: '-', default: '[]' },
]" />

## List 属性

<v-table type="attrs" :data="[
  { attr :'title', dec: '标题', type: 'string', optional: '-', default: '' },
  { attr :'path', dec: '跳转路径', type: 'string', optional: '-', default: '' },
  { attr :'url', dec: '跳转链接', type: 'string', optional: '-', default: '' },
]" />
