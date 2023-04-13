
# 开始

## 设计

vue3组件库

基于element-ui二次开发，根据项目需求，方便项目开发使用

## 安装

::: code-group

```bash [npm]
npm install @kvuse/components
```

```bash [yarn]
yarn add @kvuse/components
```

```bash [pnpm]
pnpm install @kvuse/components
```

:::

## 全局引入

```js
import { createApp } from 'vue';
import { KUI } from '@kvuse/components';
import '@kvuse/components/dist/index.css'

Vue.use(KUI)

```

## 按需引入

<script setup>
import * as moduleList from '@/components/main'

const list = []
Object.keys(moduleList).forEach((key)=>{
  list.push(key)
})

const objectMap = (num = 2) => `${list.map(item => ' '.repeat(num) + item).join(', ').replace(/, /g, ',\n')}`

</script>

```js-vue
import {
{{ objectMap() }}
} from '@kvuse/components';

export default {
  components: {
{{ objectMap(4) }}  
  },
};
```

## 常见问题

:::warning
 常见问题
:::

- 如果出现以下警告⚠️

  ```js
  resolveComponent can only be used in render() or setup()
  ```

  是因为vue版本不统一导致，解决如下：
  `vite.config.js`设置
  
  ```js
  const { resolve } = require('path');

  export default {
    resolve: {
      alias: {
        vue: resolve(__dirname, './node_modules/vue'),
      },
    },
  };
  ```
