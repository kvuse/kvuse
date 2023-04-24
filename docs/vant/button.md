# Button 按钮

::: tip
点击之后延时 800ms, 防止重复点击
:::

## 基础使用

<demo md src="button/basic" dir="vant">

<<< @/example/vant/button/basic.vue

</demo>

## 调整尺寸

可设置`size`类型，控制按钮大小。可选值：large, default, small

<demo md src="button/size" dir="vant">

<<< @/example/vant/button/size.vue

</demo>

## 链接模式

可设置`link`类型，控制按钮链接模式

<demo md src="button/link" dir="vant">

<<< @/example/vant/button/link.vue
</demo>

## Button 属性

::: tip
其他属性查看 [Vant 按钮属性](https://vant-ui.github.io/vant/#/zh-CN/button)
:::

<v-table type="attrs" :data="[
  { attr :'size', dec: '按钮大小', type: 'String', optional: 'large / small / mini', default: 'normal' },
  { attr :'type', dec: '按钮类型', type: 'String', optional: 'primary / success / warning / danger / info / text', default: 'default' },
   { attr :'link', dec: '链接模式', type: 'Boolean', optional: 'true / false', default: 'false' },
]" />

## Button 事件

<v-table type="event" :data="[
  { event :'click', dec: '当用户点击触发该事件', callback: '-' },
]" />
