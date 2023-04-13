<template>
  <ul class="flex">
    <li
      class="border-radius class-item mr20" v-for="item in list" :key="item.value"
      v-on-click-active="{ activeName:'active-item' }"
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
.class-item {
  border: 1px solid #eaeefb;
  padding: 6px 15px;
}

.active-item {
  border: 1px solid #f00;
  color: #f00;
}
</style>
