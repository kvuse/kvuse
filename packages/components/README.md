
# kui-next

vue3组件库

## 基于element-ui二次开发，根据项目需求，方便项目开发使用

## 安装

```js
# Npm  
npm install @kvuse/components
 
# Yarn  
yarn add @kvuse/components
```

## 使用 按需引入

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

## 全局components

```
import { createApp } from 'vue';
import { KUI } from '@kvuse/components';
import '@kvuse/components/lib/style.css';
 
Vue.use(KUI)
```
