<template>
  <k-breadcrumb :list="list" />
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { title: '百度', url: 'https://www.baidu.com/' },
  { title: '掘金', url: 'https://juejin.cn/' },
  { title: '其他' },
]);
</script>
