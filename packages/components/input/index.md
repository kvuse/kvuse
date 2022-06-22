#### KInput
> 默认只能输入数字，默认小数点后两位
### props
| 属性 | 类型 | 默认 | 使用说明 |
| ---- | ----| ---- | ---- |
|type | String | number | integer 只能输入整数 |
|point | Number | 2 |  小数点后几位 |

```js
<template>
  <k-input v-model="value" placeholder="输入内容" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');

</script>
```