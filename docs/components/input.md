# Input

::: tip
默认数字类型，一般用于金额类型，默认小数点后两位
:::

## 基础使用

<demo md src="input/basic">

<<< @/example/input/basic.vue
</demo>

## 整数类型

如果设置`type`为`integer`类型，输入框只能输入整数

<demo md src="input/integer">

<<< @/example/input/integer.vue
</demo>

## 控制小数点

如果设置`point`属性，可控制小数点后几位，默认为小数点后两位

<demo md src="input/point">

<<< @/example/input/point.vue
</demo>

## 属性
<v-table type="attrs" :data="[
  { attr :'type', dec: 'integer 只能输入整数', type: 'String', Optional: '-', default: '-' },
  { attr :'point', dec: '小数点后几位', type: 'Number', Optional: '-', default: 2 },
]" />

