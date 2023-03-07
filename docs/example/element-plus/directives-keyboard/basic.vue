<template>
  <span>
    <span>金额处理：</span>
    <span v-money>{{ value }}</span>
  </span>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(88.8888);
</script>
