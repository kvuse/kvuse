<template>
  <ul class="flex">
    <li
      class="border-radius default-item mr20" v-for="item in list" :key="item.value"
      v-on-click-active="{ activeName:'active-default', className:'default-item', defaultIndex: 2 }"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script setup>
import { vOnClickActive } from '@kvuse/core';

const list = [
  { label: '微信', value: 1 },
  { label: '支付宝', value: 2 },
  { label: '其他', value: 3 },
];
</script>

<style lang="scss" scoped>
.default-item {
  border: 1px solid #eaeefb;
  padding: 6px 15px;
}

.active-default {
  border: 1px solid #f00;
  color: #f00;
}
</style>
