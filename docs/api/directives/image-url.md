# VImageUrl

##### 获取图片路径展示图片

:::warning
获取`assets`文件夹下的文件
:::

## 基础使用

```vue
<template>
  <img v-image-url="{ name: 'name.png', floder:'images'}">
</template>

<script setup>
import { vImageUrl } from '@kvuse/core';
</script>
```

## 动态设置

```vue
<template>
  <img v-image-url="{ name, floder:'images'}">
</template>

<script setup>
import { vImageUrl } from '@kvuse/core';

const name = ref('fail.png');
onMounted(() => {
  setTimeout(() => {
    name.value = 'success.png';
  }, 1000);
});
</script>
```

## 方法使用

**查看使用[UseImageUrl](../image-url.md)**

## 参数说明

<v-table type="dec" :data="[
  { name :'name', dec: '图片名称，例如name.png' },
  { name :'floder', dec: '图片文件夹名，默认images' },
]" />
