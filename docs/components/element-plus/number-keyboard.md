# NumberKeyboard 数字输入框

## 基础使用

<demo md src="number-keyboard/basic">

<<< @/example/element-plus/number-keyboard/basic.vue
</demo>

## 控制小数点

设置`decimalPoint`显示小数点

> 如果设置`precision`属性，可控制小数点后几位，默认为小数点后两位

<demo md src="number-keyboard/precision">

<<< @/example/element-plus/number-keyboard/precision.vue
</demo>

## 最大输入长度

设置`maxLength`最大输入长度

<demo md src="number-keyboard/max-length">

<<< @/example/element-plus/number-keyboard/max-length.vue
</demo>

## 开头是否为0

设置`startZero`,可设置能否为0开头，默认`true`

<demo md src="number-keyboard/start-zero">

<<< @/example/element-plus/number-keyboard/start-zero.vue
</demo>

## NumberKeyboard 属性

<v-table type="attrs" :data="[
  { attr :'modelValue / v-model', dec: '绑定值', type: 'string / number', optional: '-', default: '-' },
  { attr :'width', dec: '按键的宽度', type: 'number', optional: '-', default: 60 },
  { attr :'color', dec: '自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色', type: 'string', optional: '-', default: '-' },
  { attr :'maxlength', dec: '最大输入长度', type: 'number', optional: '-', default: '-' },
  { attr :'decimalPoint', dec: '按键显示小数点', type: 'boolean', optional: '-', default: false },
  { attr :'precision', dec: '小数点后几位', type: 'number', optional: '-', default: 2 },
  { attr :'startZero', dec: '是否开头可以输入0', type: 'boolean', optional: '-', default: true },
]" />

## NumberKeyboard 事件

<v-table type="event" :data="[
  { event :'change', dec: '数值改变的时候触发', callback: 'value' },
  { event :'confirm', dec: '点击确认的时候触发', callback: 'value' },
  { event :'clear', dec: '点击清空的时候触发', callback: '' },
]" />
