# useCommon

使用vue，vue-roter，vuex，pinia等一些公共的api

## Usage

```js
<script setup>
import { useCommon } from '@kvuse/core';

const {
  route, router, nextTick, ref, reactive, computed, watch, watchEffect, onMounted, onUnmounted, 
  routerName, loadPage, isDev, replacePage, pinia, store, globalProperties
} = useCommon();
</script>
```

## 路由名称

```js
import { useCommon } from '@kvuse/core';
const { routerName } = useCommon();
console.log('当前路由名称:', routerName);
```

## 跳转页面

:::tip
loadPage为路由history模式，事件`router.push`

**如果使用`router.replace`, 请使用`replacePage`**
:::

```js
import { useCommon } from '@kvuse/core';
const { loadPage } = useCommon();
loadPage('home'); // name
loadPage('/home'); // path
loadPage('/home', { query: { id: 123 } }); // query
loadPage('/home', { params: { type: 123 } }); // params
```

## 开发模式

```js
import { useCommon } from '@kvuse/core';
const { isDev } = useCommon();
console.log('isDev: ', isDev);
```

## 全局对象

可以获取绑定的全局对象

```js
import { useCommon } from '@kvuse/core';
const { globalProperties } = useCommon();
console.log('globalProperties: ', globalProperties);
```
