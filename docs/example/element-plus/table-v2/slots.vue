<template>
  <k-table-v2 :table-data="tableData" :table-column="tableColumn" height="300px">
    <template #dateHeader>
      <el-tag>自定义表头</el-tag>
    </template>
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
    label: '日期', prop: 'date', header: 'dateHeader', width: '200px', fixed: 'left',
  },
  {
    label: '姓名', prop: 'name', width: '200px', fixed: 'left',
  },
  { label: '地址', prop: 'address', width: '200px' },
  { label: '姓名', prop: 'name', width: '200px' },
  { label: '地址', prop: 'address', width: '200px' },
  { label: '姓名', prop: 'name', width: '200px' },
  {
    label: '地址2', prop: 'address2', width: '200px', fixed: true,
  },
  {
    label: '操作', custom: 'set', width: '120px', fixed: true,
  },
];

const tableData = ref(Array(1000).fill({
  date: '2016-05-03',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
  address2: 'No. 189, Grove St, Los Angeles',
}));

const clickHandle = (row) => {
  console.log('row: ', row);
};

</script>
