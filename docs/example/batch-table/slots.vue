<template>
  <k-batch-table
    :table-data="tableData" :table-column="tableColumn"
    v-model:page="currentPage" v-model="multipleSelection"
    :total="total" @current-change="currentChange"
  >
    <template #footer>
      <el-button @click="batchHandle">
        批量操作
      </el-button>
    </template>
    <template #dateHeader>
      <el-tag>自定义表头</el-tag>
    </template>
    <template #set="{ row, index }">
      <k-button @click="clickHandle(row, index)">
        操作
      </k-button>
    </template>
  </k-batch-table>
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

const multipleSelection = ref([]);

const total = ref(50);
const currentPage = ref(1);

const currentChange = (val) => {
  console.log('current page: ', val);
};

const batchHandle = () => {
  console.log('multipleSelection: ', multipleSelection);
};

</script>
