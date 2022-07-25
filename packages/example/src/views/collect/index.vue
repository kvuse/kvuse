<template>
  <div class="collect">
    Collect
    <test />
  </div>
</template>

<script setup>
import { useCommon } from '@kvuse/core';
import test from './test.vue';

const { router, route } = useCommon();
console.log('router, route: ', router, route);
console.log('router: ', router);
</script>

<style lang="scss" scoped>
.collect {
  width: 100%;
}
</style>
