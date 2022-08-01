
# Layout 布局

:::tip
  总结一些常用的布局模式
:::

## 基础用法

> 常用的外边距设置  

## 字体颜色

<demo md src="layout/color">

<<< @/example/layout/color.vue
</demo>

## 使用边距

<demo md src="layout/margin">

<<< @/example/layout/margin.vue
</demo>

## 鼠标类型

<demo md src="layout/mouse">

<<< @/example/layout/mouse.vue
</demo>

## flex布局

<demo md src="layout/flex">

<<< @/example/layout/flex.vue
</demo>

## 样式属性class

<v-table type="dec" :data="[
  { name :'mt10, mt20', dec: '上边距10px，上边距20px' },
  { name :'mb10, mb20', dec: '下边距10px，下边距20px' },
  { name :'ml10, ml20, ml30', dec: '左边距10px，左边距20px, 左边距30px' },
  { name :'mr10, mr20, mr30', dec: '右边距10px，右边距10px, 右边距30px' },
  { name :'pl10, pr10, pl20, pr20', dec: '左内距10px，右内边距10px, 左内边距20px,右内边距20px' },
  { name :'p20-d40', dec: '上下内距20px，左右内边距40px' },
  { name :'p-tb20', dec: '上下内距20px' },
  { name :'p-lr40', dec: '左右内距20px' },
  { name :'width-180, width-220, width-240', dec: '宽度180px，宽度220px，宽度240px' },
  { name :'line-through', dec: '中划线' },
  { name :'pointer', dec: '光标手指指针' },
  { name :'not-allowed', dec: '禁用样式' },
  { name :'overflow', dec: '超出隐藏' },
  { name :'text-overflow', dec: '超出显示...' },
  { name :'text-right', dec: '内容右侧' },
  { name :'text-center', dec: '内容居中' },
  { name :'overflow-y', dec: '设置y轴: auto' },
  { name :'flex', dec: '设置flex布局' },
  { name :'flex-warp', dec: '超出换行' },
  { name :'flex-align-center', dec: '左右居中' },
  { name :'flex-justify-center', dec: '上下居中' },
  { name :'flex-center', dec: '左右上下居中' },
  { name :'flex-around', dec: '两侧的间隔相等' },
  { name :'flex-between', dec: '两端对齐，项目之间的间隔都相等' },
  { name :'flex-column', dec: '设置flex方向: column' },
  { name :'flexs-justify', dec: '多轴方式：左右居中' },
  { name :'flexs-align', dec: '多轴方式：上下居中' },
  { name :'flexs-center', dec: '多轴方式：上下左右居中' },
]" />
