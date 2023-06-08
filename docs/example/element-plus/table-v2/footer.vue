<template>
  <k-table-v2 :table-data="tableData" :table-column="tableColumn" height="300px" @row-click="clickHandle">
    <template #footer>
      <div class="custom-footer flex-center">自定义页脚</div>
    </template>
  </k-table-v2>
</template>

<script setup>
import { ref } from 'vue';

const tableColumn = [
  { label: '日期', prop: 'date' },
  { label: '姓名', prop: 'name' },
  { label: '地址', prop: 'address' },
  { label: '姓名', prop: 'name' },
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

<style scoped>
.custom-footer {
  background-color: #f5f7fa;
  padding: 6px 12px;
}
</style>
