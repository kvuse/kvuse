<template>
  <span>
    <span>金额处理：</span>
    <span v-money:value="value">{{ value }}</span>
  </span>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(88.88888);

setTimeout(() => {
  value.value = 188.66666;
}, 1000);
</script>
