# Input 输入框

::: tip
默认数字类型，一般用于金额类型，默认小数点后两位
:::

## 基础使用

<demo md src="input/basic" dir="vant">

<<< @/example/vant/input/basic.vue
</demo>

## 整数类型

如果设置`type`为`integer`类型，输入框只能输入整数

<demo md src="input/integer" dir="vant">

<<< @/example/vant/input/integer.vue
</demo>

## 控制小数点

如果设置`point`属性，可控制小数点后几位，默认为小数点后两位

<demo md src="input/point" dir="vant">

<<< @/example/vant/input/point.vue
</demo>

## 允许输入最大值和最小值

如果设置`min`属性，可控制最小值(**最小为0**), `max`设置最大值

<demo md src="input/minMax" dir="vant">

<<< @/example/vant/input/minMax.vue
</demo>

## Input 属性

<v-table type="attrs" :data="[
  { attr :'type', dec: 'integer 只能输入整数', type: 'String', optional: '-', default: '-' },
  { attr :'modelValue / v-model', dec: '绑定值', type: 'String / Number', optional: '-', default: '-' },
  { attr :'point', dec: '小数点后几位', type: 'Number', optional: '-', default: 2 },
  { attr :'max', dec: '允许输入的最大值', type: 'Number', optional: '-', default: Number.POSITIVE_INFINITY },
]" />

## Input 事件

<v-table type="event" :data="[
  { event :'change', dec: '数值改变的时候触发', callback: 'value' },
]" />
