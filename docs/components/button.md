# Button 


::: tip
点击之后延时 800ms, 防止重复点击
:::

## 基础使用

<demo md src="button/basic">

<<< @/example/button/basic.vue

</demo>

## 调整尺寸

可设置`size`类型，控制按钮大小。可选值：large, default, small

<demo md src="button/size">

<<< @/example/button/size.vue
</demo>

## Button 属性

::: tip
其他属性查看 [elementPlus 按钮属性](https://element-plus.gitee.io/zh-CN/component/button.html#button-%E5%B1%9E%E6%80%A7)
:::

<v-table type="attrs" :data="[
  { attr :'size', dec: '按钮大小', type: 'String', Optional: 'large / default /small', default: '-' },
  { attr :'type', dec: '按钮类型', type: 'String', Optional: 'primary / success / warning / danger / info / text', default: '-' },
]" />


## Button 事件

<v-table type="event" :data="[
  { event :'click', dec: '当用户点击触发该事件', callback: '-' },
]" />

