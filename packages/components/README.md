
# kui-next 

vue3组件库
####  基于element-ui二次开发，根据项目需求，方便项目开发使用 

#### 安装
```
# Npm  
npm install kui-next
 
# Yarn  
yarn add kui-next 
```
#### 使用 按需引入

```js
import {
  KButton,
  KInput,
  KTable,
  KPage,
  KBatchTable,
  KDialog,
  KBreadcrumb,
  KTabs,
  KPicker,
} from 'kui-next';

export default {
  components: {
    KButton,
    KInput,
    KTable,
    KPage,
    KBatchTable,
    KDialog,
    KBreadcrumb,
    KTabs,
    KPicker,
  },
};
```
#### 全局components:

```
import { createApp } from 'vue';
import { KUI } from 'kui-next';
 
Vue.use(KUI)
```
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