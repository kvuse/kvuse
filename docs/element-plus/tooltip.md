# Tooltip 消息提示

## 基础使用

<demo md src="tooltip/basic">

<<< @/example/element-plus/tooltip/basic.vue
</demo>

## 使用主题

<demo md src="tooltip/theme">

<<< @/example/element-plus/tooltip/theme.vue
</demo>

## 显示图标

<demo md src="tooltip/icon">

<<< @/example/element-plus/tooltip/icon.vue
</demo>

## Tooltip 属性

<v-table type="attrs" :data="[
  { attr :'placement', dec: 'Tooltip 组件出现的位置', type: 'string', optional: 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end', default: 'bottom' },
  { attr :'content', dec: '显示的内容', type: 'string', optional: 'dark / light', default: 'dark' },
  { attr :'effect', dec: 'Tooltip 主题', type: 'array', optional: '-', default: [] },
  { attr :'overflow', dec: '当内容过长超出显示...', type: 'boolean', optional: '-', default: false },
]" />

## Tooltip slots

<v-table type="slot" :data="[
  { name :'content', dec: '提示内容插槽', child: '-' },
  { name :'icon', dec: '图标插槽', child: '-' },
]" />
