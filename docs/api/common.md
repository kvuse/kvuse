# useCommon

使用vue，vue-roter，vuex，pinia等一些公共的api

## Usage

```js
<script setup>
import { useCommon } from '@kvuse/core';

const {
   route, router, routeQuery, routeParams, routerName, loadPage, isDev, replacePage, globalProperties,
   resetParams, store, pinia, nextTick, ref, watch, onMounted, 
   onUnmounted, watchEffect, getCurrentInstance, toRefs,
} = useCommon();
</script>
```

## 路由名称

- `routeQuery`: 路由query  
- `routeParams`: 路由params
- `routerName`: 路由名字

```js
import { useCommon } from '@kvuse/core';
const { routerName, routeQuery, routeParams } = useCommon();
console.log('当前路由名称:', routerName.value);
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

## 重置参数

可以获取初始化参数，重置参数

```js
import { reactive } from 'vue';
import { useCommon } from '@kvuse/core';
const { resetParams } = useCommon();

const data = reactive({
  index: 1,
  page: 2
})

data.index = 3

console.log('resetParams data: ', resetParams(data));
```
