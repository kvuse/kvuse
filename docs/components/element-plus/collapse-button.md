# CollapseButton 折叠按钮

:::tip
📌 折叠按钮采用定位设计

折叠哪个节点，请把组件放到该节点下，会默认设置父节点相对定位
:::

## 基础使用

<demo md src="collapse-button/basic">

<<< @/example/element-plus/collapse-button/basic.vue

</demo>

## 自定义

可使用插槽，进行自定义

<demo md src="collapse-button/slots">

<<< @/example/element-plus/collapse-button/slots.vue
</demo>

## 按钮位置

可设置`position`, 控制按钮位置, 也可设置`style`单独修改定位的距离，默认居中

<demo md src="collapse-button/position">

<<< @/example/element-plus/collapse-button/position.vue
</demo>

## CollapseButton 属性

<v-table type="attrs" :data="[
  { attr :'style', dec: '样式属性', type: 'object', optional: '-', default: '-' },
  { attr :'position', dec: '按钮位置', type: 'string', optional: 'left / right / top / bottom ', default: 'right' },
]" />

## CollapseButton 事件

<v-table type="event" :data="[
  { event :'click', dec: '当用户点击触发该事件', callback: '-' },
]" />

## CollapseButton 插槽

<v-table type="slot" :data="[
  { name :'-', dec: '内容插槽', child: '-' },
]" />
