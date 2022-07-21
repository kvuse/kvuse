<template>
  <k-page :total="total" v-model="currentPage" @current-change="changePage" />
</template>

<script setup>
import { ref } from 'vue';

const total = ref(50);
const currentPage = ref(1);

const changePage = (page) => {
  console.log('page: ', page);
};
</script>
