# Pagination 分页

## 基础使用

<demo md src="pagination/basic">

<<< @/example/element-plus/pagination/basic.vue

</demo>

## 切换页码

:::warning
如果使用切换页码`show-size`，需要配合 `v-model:size` 使用
:::

<demo md src="pagination/change-size">

<<< @/example/element-plus/pagination/change-size.vue
</demo>

## 小型分页

设置`small`, 可设置小型分页

<demo md src="pagination/small">

<<< @/example/element-plus/pagination/small.vue
</demo>

## 设置最大页码按钮数

默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。 通过 `pager-count` 属性可以设置最大页码按钮数。

<demo md src="pagination/pager-count">

<<< @/example/element-plus/pagination/pager-count.vue
</demo>

## Pagination 属性

<v-table type="attrs" :data="[
  { attr :'modelValue / v-model', dec: '绑定的当前页数', type: 'number', optional: '-', default: 1 },
  { attr :'total', dec: '数据的总条数', type: 'number', optional: '-', default: 9 },
  { attr :'size / v-model:size', dec: '每页显示的条数', type: 'number', optional: '-', default: 10 },
  { attr :'small', dec: '是否使用小型分页', type: 'boolean', optional: '-', default: false },
  { attr :'show-size', dec: '是否显示切换页码', type: 'boolean', optional: '-', default: false },
  { attr :'pager-count', dec: '最多显示的页码按钮', type: 'number', optional: '5 ≤ x ≤ 21 的奇数', default: 7 },
]" />

## Pagination 事件

<v-table type="event" :data="[
  { event :'current-change', dec: '当用户切换分页的触发该事件', callback: 'currengPage' },
  { event :'size-change', dec: '当用户切换页码的时候触发', callback: 'curentSize' },
  { event :'change', dec: '当用户切换页码或者分页的时候触发', callback: 'page, size' },
]" />
