<template>
  <k-tabs
    :tabs-list="tabsList" v-model="activeName"
    @tab-click="tabClick"
  />
  <span>{{ activeName }}</span>
</template>

<script setup>
import { ref } from 'vue';

const tabsList = ref([
  { label: '全部', name: 'all' },
  { label: '正常', name: 'normal' },
  { label: '已拉黑', name: 'block' },
]);
const activeName = ref('all');

const tabClick = (value) => {
  console.log('value: ', value);
};

</script>
