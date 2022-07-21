<template>
  <k-table
    :table-data="tableData" :table-column="tableColumn"
    @sort-change="sortChange"
  />
</template>

<script setup>
import { ref } from 'vue';

const tableColumn = [
  { label: '日期', prop: 'date', sortable: true },
  { label: '姓名', prop: 'name' },
  { label: '地址', prop: 'address' },
];

const tableData = ref([
  {
    id: 1,
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-03',
    name: 'luke',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 3,
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 4,
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]);

const sortChange = ({
  prop, order, sortType, currentPage, column, sortColumn,
}) => {
  console.log('prop, order, sortType, currentPage, column, sortColumn: ', prop, order, sortType, currentPage, column, sortColumn);

  tableData.value = sortType
    ? tableData.value.sort((a, b) => b.id - a.id)
    : tableData.value.sort((a, b) => a.id - b.id);
};

</script>
