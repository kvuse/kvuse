<template>
  <k-breadcrumb :list="list">
    <k-button>设置</k-button>
  </k-breadcrumb>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { title: '首页', path: 'home' },
  { title: '前台' },
]);
</script>
