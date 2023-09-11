<template>
  <k-button type="primary" size="large" @click="openHandler">
    添加商品
  </k-button>
  <k-dialog
    title="添加商品" v-model="showPicker" destroy-on-close
    width="800px" :show-footer="false" @close="closeHandler"
  >
    <k-picker
      :table-column="tableColumn" :table-data="tableData"
      v-model="multipleSelection" :select-list="[tableData[0],tableData[1]]"
    >
      <template #footer>
        <div class="flex-between">
          <k-page :total="total" v-model="currentPage" class="mt0" />
          <div>
            <k-button type="primary" @click="confirmHandle">
              确认
            </k-button>
            <k-button @click="showPicker = false">
              取消
            </k-button>
          </div>
        </div>
      </template>
    </k-picker>
  </k-dialog>
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
]);

const multipleSelection = ref([]);

const showPicker = ref(false);

const openHandler = () => {
  showPicker.value = true;
};

const closeHandler = () => {
  multipleSelection.value = [];
};

const total = ref(100);
const currentPage = ref(1);

const confirmHandle = () => {
  showPicker.value = false;
  console.log('multipleSelection: ', multipleSelection);
};

</script>

<style lang="scss">

</style>
