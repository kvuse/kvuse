<template>
  <k-breadcrumb :list="list" />
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { title: '首页', path: 'home' },
  { title: '前台' },
]);
</script>
