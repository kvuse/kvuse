<template>
  <span>
    <span>金额处理：</span>
    <span v-money.point="4">{{ value }}</span>
  </span>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(88.88888);
</script>
