<template>
  <k-table-v2
    height="auto"
    :table-data="tableData" :table-column="tableColumn"
    @sort-change="sortChange"
  />
</template>

<script setup>
import { ref } from 'vue';

const tableColumn = [
  { label: '日期', prop: 'date', sortable: true },
  { label: '姓名', prop: 'name', sortable: true },
  {
    label: '地址', prop: 'address', showOverflowTooltip: true, width: '150px',
  },
];

const tableData = ref([
  {
    id: 1,
    date: '2016-05-04',
    name: 'Jhon',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-03',
    name: 'Luke',
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
    name: 'XiaoMing',
    address: 'No. 189, Grove St, Los Angeles',
  },
]);

const sortChange = ({ column, sortType }) => {
  console.log('column, sortType: ', column, sortType);
  console.log('sortType: ', sortType);

  tableData.value = sortType === 'ascending'
    ? tableData.value.sort((a, b) => b.id - a.id)
    : tableData.value.sort((a, b) => a.id - b.id);
};

</script>
