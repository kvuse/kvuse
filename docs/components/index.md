
# 开始

## 设计

vue3组件库

基于element-ui二次开发，根据项目需求，方便项目开发使用

## 安装

```bash
npm i @kvuse/components
```

## 全局引入

```js
import { createApp } from 'vue';
import { KUI } from '@kvuse/components';
import '@kvuse/components/lib/style.css'

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
} from '@kvuse/components';

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
