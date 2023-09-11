# 开始

## 设计

一些常用自定义指令

## 安装

::: code-group

```bash [npm]
npm install @kvuse/directives
```

```bash [yarn]
yarn add @kvuse/directives
```

```bash [pnpm]
pnpm install @kvuse/directives
```

:::

## 使用

<script setup>
import * as moduleList from '@/directives/index'

const list = []
Object.keys(moduleList).forEach((key)=>{
  list.push(key)
})

const objectMap = (num = 2) => `${list.map(item => ' '.repeat(num) + item).join(', ').replace(/, /g, ',\n')}`

</script>

```js-vue
import {
{{ objectMap() }}
} from '@kvuse/directives';

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
        '@kvuse/directives': [
            'vFocus', 'vParams',
             ...
          ],
       }),
    ],
  })
  ```
