# Tabs 标签页


## 基础使用

<demo md src="tabs/basic">

<<< @/example/tabs/basic.vue
</demo>

## Card 类型

如果设置`type`为`card`类型，展示卡片类型

<demo md src="tabs/card">

<<< @/example/tabs/card.vue
</demo>

## Router 路由模式

如果设置`is-router`属性，可设置路由模式 `name`就是跳转的路由

::: warning
**首先要配置路由，name值要和路由名一致，切换路由自动跳转，刷新默认当前路由**

**如果没有配置路由，去掉`is-router`**
:::

<demo md src="tabs/router">

<<< @/example/tabs/router.vue
</demo>

## Layout 左右布局

可以通过插槽`<slot>`，设置左右布局

<demo md src="tabs/layout">

<<< @/example/tabs/layout.vue
</demo>

## Tabs 属性
<v-table type="attrs" :data="[
  { attr :'type', dec: '风格类型', type: 'string', optional: 'card/border-card', default: '-' },
  { attr :'modelValue / v-model', dec: '绑定值', type: 'string / Number', optional: '-', default: '-' },
  { attr :'tabsList', dec: 'tabs列表', type: 'array', optional: '-', default: [] },
  { attr :'is-router', dec: '是否设置路由模式', type: 'boolean', optional: '-', default: false },
  { attr :'is-padding', dec: '设置左右padding', type: 'boolean', optional: '-', default: true },
  { attr :'replace', dec: '是否跳转路由模式replace', type: 'boolean', optional: '-', default: false },
]" />

## Tabs 事件
<v-table type="event" :data="[
  { event :'tab-click', dec: '当用户点击确认触发该事件', callback: 'name' },
  { event :'change', dec: '数值改变的时候触发', callback: 'name' },
]" />


## Tabs slots 
<v-table type="slot" :data="[
  { name :'-', dec: '右侧的内容', child: '-' },
]" />



