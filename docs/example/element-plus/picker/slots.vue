<template>
  <k-picker
    :table-column="tableColumn" :table-data="tableData"
    v-model="multipleSelection"
  >
    <template #header-address>
      <el-tag>自定义表头</el-tag>
    </template>
    <template #address="{ row }">
      {{ `custom: ${row.address}` }}
    </template>
    <template #footer>
      <div class="text-right">
        <k-button type="primary" @click="clickHandle">
          确认
        </k-button>
      </div>
    </template>
    <template #right-header>
      <el-tag>自定义右侧表头</el-tag>
    </template>
  </k-picker>
</template>

<script setup>
import { ref } from 'vue';

const tableColumn = [
  { label: '日期', prop: 'date' },
  { label: '姓名', prop: 'name' },
  {
    label: '地址', prop: 'address', custom: 'address', header: 'header-address',
  },
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

const clickHandle = () => {
  console.log('multipleSelection.value: ', multipleSelection.value);
};

</script>

<style lang="scss" scoped>
.text-right {
  text-align: right;
}
</style>
