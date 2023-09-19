<template>
  <k-picker
    :table-column="tableColumn" :table-data="tableData"
    v-model="multipleSelection"
  >
    <template #footer>
      <div class="text-right">
        <k-button type="primary" @click="clickHandle">
          确认
        </k-button>
      </div>
    </template>
  </k-picker>
</template>

<script setup>
import { ref } from 'vue';

const tableColumn = [
  { label: '日期', prop: 'date' },
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
    name: 'xiaoMing',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 4,
    date: '2016-05-01',
    name: 'xiaoHong',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 5,
    date: '2016-05-01',
    name: 'xiaoHong',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 6,
    date: '2016-05-01',
    name: 'xiaoHong',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 7,
    date: '2016-05-01',
    name: 'xiaoHong',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 8,
    date: '2016-05-01',
    name: 'xiaoHong',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 9,
    date: '2016-05-01',
    name: 'xiaoHong',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 10,
    date: '2016-05-01',
    name: 'xiaoHong',
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
