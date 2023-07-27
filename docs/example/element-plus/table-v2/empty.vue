<template>
  <k-table-v2 :table-data="tableData" :table-column="tableColumn" />
</template>

<script setup>
import { ref } from 'vue';

const tableColumn = [
  { label: '日期', prop: 'date', align: 'right' },
  { label: '姓名', prop: 'name' },
  { label: '地址', prop: 'address' },
];

const tableData = ref([]);

</script>
