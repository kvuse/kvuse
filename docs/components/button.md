# Button

::: tip
点击之后延时 800ms, 防止重复点击
:::

## 基础使用

<vuecode md>
<button-basic/>
<template #code>

```vue
<template>
  <k-button>button</k-button>
  <k-button type="primary">primary</k-button>
  <k-button type="info">info</k-button>
</template>
```

</template>

</vuecode>

## 调整尺寸

<vuecode md>
<button-size />
<template #code>

```vue
<template>
  <div>
    <k-button size="large">primary</k-button>
    <k-button>default</k-button>
    <k-button size="small">info</k-button>
  </div>
  <div class="mt10">
    <k-button type="primary" size="large">primary</k-button>
    <k-button type="primary">default</k-button>
    <k-button type="primary" size="small">info</k-button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
```

</template>
</vuecode>

## Button 属性

::: tip
其他属性查看 [elementPlus 按钮属性](https://element-plus.gitee.io/zh-CN/component/button.html#button-%E5%B1%9E%E6%80%A7)
:::

| 属性 | 说明     | 类型   | 可选值                                             | 默认 |
| ---- | -------- | ------ | -------------------------------------------------- | ---- |
| size | 按钮大小 | string | large / default /small                             | —    |
| type | 按钮大小 | string | primary / success / warning / danger / info / text | —    |

## Button 事件

| 事件  | 说明                 | 回调参数 |
| ----- | -------------------- | -------- |
| click | 当用户点击触发该事件 | -        |
