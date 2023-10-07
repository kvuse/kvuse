
# 开始

## 设计

vue3组件库

基于vant二次开发，根据项目需求，方便项目开发使用

## 安装

::: code-group

```bash [npm]
npm install @kvuse/vant
```

```bash [yarn]
yarn add @kvuse/vant
```

```bash [pnpm]
pnpm install @kvuse/vant
```

:::

## 全局引入

```js
import { createApp } from 'vue';
import { KVant } from '@kvuse/vant';
import '@kvuse/vant/dist/index.css';

Vue.use(KVant)
```

## 按需引入

<script setup>
import * as moduleList from '@/kvant/index'

const list = []
Object.keys(moduleList).forEach((key)=>{
  list.push(key)
})

const objectMap = (num = 2) => `${list.map(item => ' '.repeat(num) + item).join(', ').replace(/, /g, ',\n')}`

</script>

```js-vue
import {
{{ objectMap() }}
} from '@kvuse/vant';

export default {
  components: {
{{ objectMap(4) }}  
  },
};
```
