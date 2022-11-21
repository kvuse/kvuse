# InputNumber 数字输入框

::: tip
默认数字类型，数值限制范围1-999999，如果为空，默认设置为1
:::

## 基础使用

<demo md src="input-number/basic">

<<< @/example/element-plus/input-number/basic.vue
</demo>

## 整数类型

如果设置`type`为`integer`类型，输入框只能输入整数

<demo md src="input-number/integer">

<<< @/example/element-plus/input-number/integer.vue
</demo>

## 控制按钮

如果设置`point`属性，可控制小数点后几位，默认为小数点后两位

<demo md src="input-number/controls">

<<< @/example/element-plus/input-number/controls.vue
</demo>

## Input 属性

<v-table type="attrs" :data="[
  { attr :'type', dec: 'integer 只能输入整数', type: 'string', optional: '-', default: '-' },
  { attr :'modelValue / v-model', dec: '绑定值', type: 'string / Number', optional: '-', default: '-' },
  { attr :'disabled', dec: '是否禁用状态', type: 'boolean', optional: '-', default: false },
  { attr :'controls', dec: '是否使用控制按钮', type: 'boolean', optional: '-', default: true },
  { attr :'size', dec: '计数器尺寸', type: 'sting', optional: 'large / default / small', default: 'default' },
  { attr :'max', dec: '设置计数器允许的最大值', type: 'number', optional: '-', default: '999999' },
  { attr :'min', dec: '设置计数器允许的最小值', type: 'number', optional: '-', default: '1' },
  { attr :'step', dec: '计数器步长', type: 'number', optional: '-', default: '1' },
]" />

## Input 事件

<v-table type="event" :data="[
  { event :'change', dec: '数值改变的时候触发', callback: 'value' },
  { event :'blur', dec: 'Input 失去焦点时触发', callback: 'event: FocusEvent' },
  { event :'focus', dec: 'Input 获得焦点时触发', callback: 'event: FocusEvent' },
]" />
