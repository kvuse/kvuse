
# @kvuse/vant

vue3组件库

## 基于vant二次开发，根据项目需求，方便项目开发使用

## 安装

```js
# Npm  
npm install @kvuse/vant
 
# Yarn  
yarn add @kvuse/vant
```

## 使用 按需引入

```js
import {
  KvButton,
  KvInput,
  KvTable,
  KvTree,
  KvList,
  KvStatus,
  KvDatePicker,
} from '@kvuse/vant';

export default {
  components: {
    KvButton,
    KvInput,
    KvTable,
    KvTree,
    KvList,
    KvStatus,
    KvDatePicker,
  },
};
```

## 全局components

```js
import { createApp } from 'vue';
import { KVant } from '@kvuse/vant';
import '@kvuse/vant/dist/index.css';

Vue.use(KVant)
```
