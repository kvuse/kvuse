
# Layout 布局

:::tip
  总结一些常用的布局模式
:::

:::info
  可以查看最新的`kucss`,一些常用的class名 [查看详情](https://www.npmjs.com/package/kucss)
:::

::: details 查看详情

- 安装

```bash
# PNPM
pnpm install kucss
```

- 使用

```js
// main.js
 import 'kucss/src/index.css'
```

:::

## 基础用法

> 常用的外边距设置  

## 字体颜色

<demo md src="layout/color">

<<< @/example/element-plus/layout/color.vue
</demo>

## 背景颜色

<demo md src="layout/background">

<<< @/example/element-plus/layout/background.vue
</demo>

## 使用边距

<demo md src="layout/margin">

<<< @/example/element-plus/layout/margin.vue
</demo>

## 鼠标类型

<demo md src="layout/mouse">

<<< @/example/element-plus/layout/mouse.vue
</demo>

## flex布局

<demo md src="layout/flex">

<<< @/example/element-plus/layout/flex.vue
</demo>

## 样式属性class

<v-table type="dec" :data="[
  { name :'c-red, c-yellow, c-blue, c-green', dec: '字体颜色：红色，黄色，蓝色，绿色' },
  { name :'color-33, color-66, color-99', dec: '其他字体颜色：#333，#666，#999' },
  { name :'bg-red, bg-yellow, bg-blue, bg-green', dec: '背景颜色：红色，黄色，蓝色，绿色' },
  { name :'mt10, mt20', dec: '上边距10px，上边距20px' },
  { name :'mb10, mb20', dec: '下边距10px，下边距20px' },
  { name :'p10, p20', dec: '内边距10px，内边距20px' },
  { name :'ml10, ml20, ml30', dec: '左边距10px，左边距20px, 左边距30px' },
  { name :'mr10, mr20, mr30', dec: '右边距10px，右边距10px, 右边距30px' },
  { name :'pl10, pr10, pl20, pr20', dec: '左内距10px，右内边距10px, 左内边距20px,右内边距20px' },
  { name :'p20-d40', dec: '上下内距20px，左右内边距40px' },
  { name :'p-tb20', dec: '上下内距20px' },
  { name :'p-lr40', dec: '左右内距20px' },
  { name :'width-180, width-220, width-240', dec: '宽度180px，宽度220px，宽度240px' },
  { name :'font-12, font-14, font-16, font-18', dec: '字体大小：12px，14px，16px，18px' },
  { name :'border-radius', dec: '边框弧度：8px' },
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
  { name :'flex-shrink', dec: '比例不缩小 flex-shrink：0' },
  { name :'flex-align-center', dec: '左右居中' },
  { name :'flex-justify-center', dec: '上下居中' },
  { name :'flex-center', dec: '左右上下居中' },
  { name :'flex-around', dec: '两侧的间隔相等' },
  { name :'flex-between', dec: '两端对齐，项目之间的间隔都相等' },
  { name :'flex-column', dec: '设置flex方向: column' },
  { name :'flexs-justify-center', dec: '多轴方式：左右居中' },
  { name :'flexs-align-center', dec: '多轴方式：上下居中' },
  { name :'flexs-center', dec: '多轴方式：上下左右居中' },
]" />
