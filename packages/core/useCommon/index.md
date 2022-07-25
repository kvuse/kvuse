# useCommon

使用vue，vue-roter，vuex一些公共的api

## Usage

```js
<script setup>
  import { useCommon } from '@common/core';
  const { store, route, router, ref, nextTick, reactive, computed, watch, onMounted, routerName, loadPage } = useCommon();
</script>
```