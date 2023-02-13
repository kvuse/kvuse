# AutoCounter 数字动效

## 基础使用

:::tip
  **默认从0开始**
:::

<demo md src="auto-counter/basic">

<<< @/example/element-plus/auto-counter/basic.vue
</demo>

## 设置开始值

如果设置`start`，可设置开始数值

<demo md src="auto-counter/start">

<<< @/example/element-plus/auto-counter/start.vue
</demo>

## 设置结束值

如果设置`end`，可设置结束值

<demo md src="auto-counter/end">

<<< @/example/element-plus/auto-counter/end.vue
</demo>

## 是否开启动效

如果设置`autoinit`，可设置是否开启功效，默认true

<demo md src="auto-counter/autoinit">

<<< @/example/element-plus/auto-counter/autoinit.vue
</demo>

## 显示前后缀

如果设置`prefix`，显示前缀，设置`suffix`,显示后缀

<demo md src="auto-counter/prefix-suffix">

<<< @/example/element-plus/auto-counter/prefix-suffix.vue
</demo>

## 小数点位数

如果设置`decimals`，可显示小数点位数

<demo md src="auto-counter/decimals">

<<< @/example/element-plus/auto-counter/decimals.vue
</demo>

## AutoCounter 属性

<v-table type="attrs" :data="[
  { attr :'modelValue / v-model', dec: '绑定值', type: 'String / Number', optional: '-', default: '-' },
  { attr :'start', dec: '设置开始值，最小值', type: 'number', optional: '-', default: '-' },
  { attr :'end', dec: '设置结束值，最大值', type: 'number', optional: '-', default: '-' },
  { attr :'autoinit', dec: '是否自动化动效', type: 'boolean', optional: '-', default: 'true' },
  { attr :'prefix', dec: '显示前缀', type: 'string', optional: '-', default: '-' },
  { attr :'suffix', dec: '显示后缀', type: 'string', optional: '-', default: '-' },
  { attr :'decimals', dec: '小数点位数', type: '', optional: '-', default: '0' },
]" />
