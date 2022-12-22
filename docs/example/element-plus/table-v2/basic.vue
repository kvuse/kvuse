<template>
  <k-table-v2 :table-data="tableData" :table-column="tableColumn" />
</template>

<script setup>
import { ref } from 'vue';

const tableColumn = [
  { label: '日期', prop: 'date' },
  { label: '姓名', prop: 'name' },
  { label: '地址', prop: 'address' },
];

const tableData = ref(Array(1000).fill({
  date: '2016-05-03',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}));

</script>
