<template>
  <k-table-v2 :table-data="tableData" :table-column="tableColumn" height="300px" show-summary>
    <template #dateHeader>
      <el-tag>自定义表头</el-tag>
    </template>
    <template #set="{ row }">
      <k-button @click="clickHandle(row)">
        设置
      </k-button>
    </template>
  </k-table-v2>
  <div class="mt20 mb10">自定义的合计计算方法</div>
  <k-table-v2 :table-data="tableData" :table-column="tableColumn" height="300px" show-summary :summary-method="summaryMethod"></k-table-v2>
</template>

<script setup>
import { ref } from 'vue';

const tableColumn = [
  { label: '日期', prop: 'date' },
  { label: '姓名', prop: 'name' },
  { label: 'amount1', prop: 'amount1' },
  { label: 'amount2', prop: 'amount2' },
  { label: 'amount3', prop: 'amount3' },
];

const tableData = ref(Array(1000).fill({
  date: '2016-05-03',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
  address2: 'No. 189, Grove St, Los Angeles',
  amount1: '234',
  amount2: '3.2',
  amount3: 10,
}));

const clickHandle = (row) => {
  console.log('row: ', row);
};

const summaryMethod = ({ row, index }) => {
  if (!index) return 'sum';

  const sum = tableData.value.reduce((totle, pre) => totle + Number(pre[row.prop]), 0);

  return Number.isNaN(sum) ? '' : `￥${sum.toFixed(2)}`;
};

</script>
