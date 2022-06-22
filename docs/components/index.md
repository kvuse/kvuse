
# 开始

## 设计

vue3组件库

基于element-ui二次开发，根据项目需求，方便项目开发使用

## 安装

```bash
npm i kui-next
```

## 全局引入
```js
import { createApp } from 'vue';
import { KUI } from 'kui-next';
 
Vue.use(KUI)
```

## 按需引入

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
