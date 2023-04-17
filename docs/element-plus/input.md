# Input 输入框

::: tip
默认数字类型，一般用于金额类型，默认小数点后两位
:::

## 基础使用

<demo md src="input/basic">

<<< @/example/element-plus/input/basic.vue
</demo>

## 整数类型

如果设置`type`为`integer`类型，输入框只能输入整数

<demo md src="input/integer">

<<< @/example/element-plus/input/integer.vue
</demo>

## 控制小数点

如果设置`point`属性，可控制小数点后几位，默认为小数点后两位

<demo md src="input/point">

<<< @/example/element-plus/input/point.vue
</demo>

## Input 属性

<v-table type="attrs" :data="[
  { attr :'type', dec: 'integer 只能输入整数, number: 数字小数点后两位, text: 内容输入框, intText: 整数或者text类型', type: 'String', optional: 'integer / number / text / intText', default: 'number' },
  { attr :'modelValue / v-model', dec: '绑定值', type: 'String / Number', optional: '-', default: '-' },
  { attr :'point', dec: '小数点后几位', type: 'Number', optional: '-', default: 2 },
]" />

## Input 事件

<v-table type="event" :data="[
  { event :'change', dec: '数值改变的时候触发', callback: 'value' },
]" />
