# UseImage

##### 获取图片路径展示图片

:::warning
默认获取`assets`文件夹下`images`的文件

可设置第二个参数，使用其他的路径
:::

## 基础使用

```vue
<template>
  <img :src="getImageUrl('fail.png')">
</template>

<script setup>
import { useImage } from '@kvuse/core';

const { getImageUrl } = useImage();
</script>
```

## 其他路径

如果设置其他路径，可设置第二个参数，设置相对路径, 例如：`./image`

```vue
<template>
  <img :src="getImageUrl('fail.png','./images')">
</template>

<script setup>
import { useImage } from '@kvuse/core';

const { getImageUrl } = useImage();
</script>
```

## 指令使用

**查看使用[VImageUrl](./directives/image-url.md)**

## 参数说明

<v-table type="dec" :data="[
  { name :'name', dec: '图片名称，例如name.png' },
  { name :'floder', dec: '图片文件夹名，默认images' },
]" />
