# useCommon

使用vue，vue-roter，vuex，pinia等一些公共的api

## Usage

```js
<script setup>
import { useCommon } from '@kvuse/core';

const {
  route, router, nextTick, ref, reactive, computed, watch, watchEffect, onMounted, onUnmounted, 
  routerName, loadPage, isDev, replacePage, $loading, $message, pinia, store,
} = useCommon();
</script>
```
