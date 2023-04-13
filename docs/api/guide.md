# 开始

## 设计

一些常用的组合式API

- useCommon 使用vue，vue-roter，vuex，pinia等一些公共的api
- useRequest axios请求
- usePage 接口数据的处理
- useMessage ElMessage提示的方法，取消上次提示，防止重复多次提示
- useForm elForm表单验证
- useFilter 一些常用的数据格式处理

## 安装

::: code-group

```bash [npm]
npm install @kvuse/core
```

```bash [yarn]
yarn add @kvuse/core
```

```bash [pnpm]
pnpm install @kvuse/core
```

:::

## 使用

<script setup>
import * as moduleList from '@/core/index'

const list = []
Object.keys(moduleList).forEach((key)=>{
  list.push(key)
})

const objectMap = (num = 2) => `${list.map(item => ' '.repeat(num) + item).join(', ').replace(/, /g, ',\n')}`

</script>

```js-vue
import {
{{ objectMap() }}
} from '@kvuse/core';

```

## 自动引入

- 下载[`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import)

- 设置`vite.config.js`

  ```js
  // vite.config.ts
  import AutoImport from 'unplugin-auto-import/vite'

  export default defineConfig({
    plugins: [
      AutoImport({ 
        '@kvuse/core': [
            'useCommon', 'usePage', 'useFilters', 'useMessage'
          ],
       }),
    ],
  })
  ```
