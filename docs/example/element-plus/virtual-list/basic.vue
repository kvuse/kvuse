<template>
  <k-virtual-list :data="listData" row-class-name="flex-center border-bottom" :row-style="{height:'100px'}" @row-click="rowClick" />
</template>

<script setup>
import { ref } from 'vue';

const listData = ref(Array.from({ length: 200 }, (v, k) => ({ name: k, index: k })));

const rowClick = (item, index) => {
  console.log('item,index: ', item, index);
};
</script>

<style lang="scss" scoped>

</style>
