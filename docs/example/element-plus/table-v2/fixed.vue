<template>
  <k-table-v2 :table-data="tableData" :table-column="tableColumn" height="300px">
    <template #set="{ row }">
      <k-button @click="clickHandle(row)">
        设置
      </k-button>
    </template>
  </k-table-v2>
</template>

<script setup>
import { ref } from 'vue';

const tableColumn = [
  {
    label: '日期', prop: 'date', width: '200px', fixed: 'left',
  },
  { label: '姓名', prop: 'name', width: '200px' },
  { label: '地址', prop: 'address', width: '200px' },
  { label: 'amount1', prop: 'amount1', width: '200px' },
  { label: 'amount2', prop: 'amount2', width: '200px' },
  {
    label: '操作', custom: 'set', width: '120px', fixed: true,
  },
];

const tableData = ref(Array(1000).fill({
  date: '2016-05-03',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
  amount1: '234',
  amount2: '3.2',
}));

const clickHandle = (row) => {
  console.log('row: ', row);
};

</script>
