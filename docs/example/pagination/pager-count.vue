<template>
  <k-page
    :total="total" :pager-count="5"
    v-model="currentPage" @current-change="changePage"
  />
</template>

<script setup>
import { ref } from 'vue';

const total = ref(500);
const currentPage = ref(1);

const changePage = (page) => {
  console.log('page: ', page);
};
</script>
