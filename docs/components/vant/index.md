
# 开始

## 设计

vue3组件库

基于vant二次开发，根据项目需求，方便项目开发使用

## 安装

```bash
npm i @kvuse/vant
```

## 全局引入

```js
import { createApp } from 'vue';
import { KUI } from '@kvuse/vant';
import '@kvuse/components/dist/index.css'

Vue.use(KUI)
```

## 按需引入

```js
import {
  KButton,
  KInput,
} from '@kvuse/components';

export default {
  components: {
    KButton,
    KInput,
  },
};
```
