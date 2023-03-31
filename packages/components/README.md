
# @kvuse/components

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
  directives,
  KButton,
  KInput,
  KInputNumber,
  KTable,
  KTableV2,
  KPage,
  KBatchTable,
  KDialog,
  KBreadcrumb,
  KTabs,
  KPicker,
  KTooltip,
  KDatePicker,
  KNumberKeyboard,
  KVirtualList,
  KAutoCounter,
  KCollapseButton,
  KCardList,
} from '@kvuse/components';

export default {
  components: {
    directives,
    KButton,
    KInput,
    KInputNumber,
    KTable,
    KTableV2,
    KPage,
    KBatchTable,
    KDialog,
    KBreadcrumb,
    KTabs,
    KPicker,
    KTooltip,
    KDatePicker,
    KNumberKeyboard,
    KVirtualList,
    KAutoCounter,
    KCollapseButton,
    KCardList,
  },
};
```

## 按需引入自定义指令

```js
import { directives } from '@kvuse/components';
import { directive } from 'vue';

export default {
  name: 'MyComponent',
  directives,
  // 组件选项
  setup() {
    // 组件代码
  }
};

```

## 全局components

```js
import { createApp } from 'vue';
import { KUI } from '@kvuse/components';
import '@kvuse/components/dist/index.css';

Vue.use(KUI)
```

## 常见问题

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
