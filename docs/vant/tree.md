# Tree 树形控件

## 基础使用

<demo md src="tree/basic" dir="vant">

<<< @/example/vant/tree/basic.vue

</demo>

## 修改主题

设置`theme`参数，修改主题模式

<demo md src="tree/theme" dir="vant">

<<< @/example/vant/tree/theme.vue

</demo>

## 配置选项

设置`props`类型，可配置选项, 详情查看Props参数

<demo md src="tree/props" dir="vant">

<<< @/example/vant/tree/props.vue

</demo>

## Tree 属性

<v-table type="attrs" :data="[
  { attr :'modelValue/ v-model', dec:'绑定数据值', type: 'array', optional: '', default: '[ ]' },
  { attr :'props', dec: '配置选项，具体看Props', type: 'object', optional: '', default: '-' },
   { attr :'theme', dec: '主题设置', type: 'string', optional: '', default: '#f4364c' },
]" />

## Props

<v-table type="attrs" :data="[
  { attr :'name', dec: '节点标签属性值', type: 'string',  default: 'name' },
  { attr :'id', dec: '节点唯一值', type: 'string', default: 'id' },
  { attr :'child', dec: '指定子树为节点对象的属性值', type: 'string', default: 'child' },
  { attr :'disabled', dec: '指定节点是否禁用', type: 'boolean', default: 'false' },
]" />

## Tree 事件

<v-table type="event" :data="[
  { event :'click', dec: '当用户点击触发该事件', callback: 'item' },
  { event :'change', dec: '当用户改变值触发该事件', callback: 'item' },
]" />
