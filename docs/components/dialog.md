# Dialog 对话框

## 基础使用

<demo md src="dialog/basic">

<<< @/example/dialog/basic.vue

</demo>

## 隐藏底部

设置`show-footer`, 可显示隐藏底部

<demo md src="dialog/footer">

<<< @/example/dialog/footer.vue
</demo>

## 自定义底部

使用插槽`footer`, 可自定义底部

<demo md src="dialog/slot">

<<< @/example/dialog/slot.vue
</demo>

## 内容居中

将`center`设置为true即可使标题和底部居中

<demo md src="dialog/center">

<<< @/example/dialog/center.vue
</demo>

## Dialog 属性

<v-table type="attrs" :data="[
  { attr :'modelValue / v-model', dec: '是否显示', type: 'boolean', optional: '-', default: false },
  { attr :'title', dec: '标题', type: 'string', optional: '-', default: '提示' },
  { attr :'width', dec: '宽度', type: 'string', optional: '-', default: '50%' },
  { attr :'center', dec: '是否让header 和 footer 部分居中排列', type: 'boolean', optional: '-', default: false },
  { attr :'fullscreen', dec: '是否为全屏', type: 'boolean', optional: '-', default: false },
  { attr :'append-to-body', dec: '自身是否插入至 body 元素上', type: 'boolean', optional: '-', default: false },
  { attr :'destroy-on-close', dec: '当关闭时，销毁其中的元素', type: 'boolean', optional: '-', default: false },
]" />

## Dialog 事件

<v-table type="event" :data="[
  { event :'confirm', dec: '当用户点击确认的触发该事件', callback: '-' },
  { event :'open', dec: 'Dialog 打开的回调', callback: '-' },
  { event :'close', dec: 'Dialog 关闭的回调', callback: '-' },
]" />

## Dialog slots

<v-table type="slot" :data="[
  { name :'footer', dec: '底部内容插槽', child: '-' },
]" />

:::warning
**如果Iframe模式下，有父级弹框的时候调用，其他模式请忽略**

开启默认调用
`parent.window.postMessage('openMask()', '*');
 window.top.postMessage('openMask()', '*');`

 关闭默认调用
`parent.window.postMessage('closeMask()', '*');
 window.top.postMessage('closeMask()', '*');`
:::
