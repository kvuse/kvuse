# DatePicker 消息提示

## 基础使用

<demo md src="date-picker/basic">

<<< @/example/date-picker/basic.vue
</demo>

## 选择模式

可设置`daterange: true`属性，在选择日类型的时候，设置为时间段选择

<demo md src="date-picker/select">

<<< @/example/date-picker/select.vue
</demo>

## 设置默认值

<demo md src="date-picker/default">

<<< @/example/date-picker/default.vue
</demo>

## DatePicker 属性

<v-table type="attrs" :data="[
  { attr :'modelValue / v-model', dec: '绑定值', type: 'string / array', optional: '-', default: '-' },
  { attr :'type', dec: 'daterange:日期  datetimerange:日期时间', type: 'string', optional: 'daterange / datetimerange', default: 'daterange' },
  { attr :'select-type', dec: '设置选择类型模式', type: 'boolean', optional: '-', default: 'false' },
  { attr :'daterange', dec: '选择模式下，选择日类型下设置日期范围', type: 'boolean', optional: '-', default: false },
]" />

## DatePicker 事件

<v-table type="event" :data="[
  { event :'change', dec: '数值改变的时候触发', callback: 'value' },
]" />
