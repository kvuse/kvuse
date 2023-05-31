# Date Picker 日期选择器

## 基础使用

<demo md src="date-picker/basic" dir="vant">

<<< @/example/vant/date-picker/basic.vue

</demo>

## 搜索框形状

可设置`shape`类型，控制选择框样式。

可选值：`default`, `round`, `border`,`round-border`

<demo md src="date-picker/shape" dir="vant" >

<<< @/example/vant/date-picker/shape.vue

</demo>

## 日历类型

设置 `type` 属性，选择日期类型

可选值包括 single 表示选择单个日期，
multiple 表示选择多个日期，
range 表示选择日期区间

<demo md src="date-picker/single" dir="vant" >

<<< @/example/vant/date-picker/single.vue

</demo>

## 快捷选项

设置 `shortcuts` 属性，设置快捷选项 只有`type="range"`显示

设置`shortcutsValue`属性，可以设置默认值

可选值：
1:昨天  0:今天  7:近7天  30:近一个月  90:近3个月

<demo md src="date-picker/shortcuts" dir="vant" >

<<< @/example/vant/date-picker/shortcuts.vue

</demo>

## Date Picker 属性

::: tip
其他属性查看 [Vant 日历属性](https://vant-ui.github.io/vant/#/zh-CN/calendar)
:::

<v-table type="attrs" :data="[
  { attr :'shape', dec: '搜索框形状', type: 'String', optional: 'default / round / border', default: 'default' },
  { attr :'type', dec: '日历类型,  single 表示选择单个日期，multiple 表示选择多个日期，range 表示选择日期区间', type: 'String', optional: 'single / multiple / range', default: 'range' },
   { attr :'show-format', dec: '显示数据格式化', type: 'string', optional: '', default: 'YYYY-MM-DD' },
   { attr :'value-format', dec: '绑定值数据格式化', type: 'string', optional: '', default: 'YYYY-MM-DD HH:mm:ss' },
   { attr :'show-icon', dec: '是否显示图标', type: 'boolean', optional: '', default: 'true' },
   { attr :'shortcuts', dec: '设置快捷选项, 只有range有效', type: 'boolean', optional: '', default: 'false' },
   { attr :'shortcuts-value', dec: '设置快捷选项默认值', type: 'number', optional: '', default: '' },
]" />

## Date Picker 事件

<v-table type="event" :data="[
  { event :'change', dec: '当数据发生变化时触发该事件', callback: 'value' },
  { event :'confirm', dec: '当点击确认时触发该事件', callback: 'value' },
]" />
