<template>
  <k-table :table-data="tableData" :table-column="tableColumn">
    <template #dateHeader>
      <el-tag>自定义表头</el-tag>
    </template>
    <template #set="{ row, index }">
      <k-button @click="clickHandle(row, index)">
        操作
      </k-button>
    </template>
  </k-table>
</template>

<script setup>
import { ref } from 'vue';

const tableColumn = [
  { label: '日期', prop: 'date', header: 'dateHeader' },
  { label: '姓名', prop: 'name' },
  { label: '地址', prop: 'address' },
  { label: '操作', custom: 'set' },
];

const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]);

const clickHandle = (row, index) => {
  console.log('row,index: ', row, index);
};

</script>
