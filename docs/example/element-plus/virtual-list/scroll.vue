<template>
  <k-virtual-list :data="listData" @scroll="scrollHandle" row-class-name="flex-center border-bottom" :row-style="{height:'100px'}" @row-click="rowClick" />
</template>

<script setup>
import { ref } from 'vue';

const listData = ref(Array.from({ length: 100 }, (v, k) => ({ name: k, index: k })));

const rowClick = (item, index) => {
  console.log('item,index: ', item, index);
};

const isAdd = ref(false);
const scrollHandle = ({ distance }) => {
  console.log('distance: ', distance);
  if (isAdd.value) return;
  const { length } = listData.value;
  if (length > 110) return;
  const addList = Array.from({ length: 10 }, (v, k) => ({ name: k + length, index: k + length }));
  listData.value = [...listData.value, ...addList];
  isAdd.value = true;
  setTimeout(() => {
    isAdd.value = false;
  }, 1000);
};
</script>

<style lang="scss" scoped>

</style>
