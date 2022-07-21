<template>
  <k-page
    :total="total" show-size v-model="currentPage"
    @current-change="changePage" @size-change="sizeChange"
  />
</template>

<script setup>
import { ref } from 'vue';

const total = ref(50);
const currentPage = ref(1);

const changePage = (page) => {
  console.log('page: ', page);
};

const sizeChange = (size) => {
  console.log('当前size: ', size);
};
</script>
