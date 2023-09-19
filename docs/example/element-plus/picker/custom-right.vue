<template>
  <k-picker
    :table-column="tableColumn" :table-data="tableData"
    v-model="multipleSelection" ref="pickerRef"
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
    <template #right>
      <div class="custom-right">
        <div class="p10 flex-between">
          <el-tag>自定义右侧内容</el-tag>
          <el-button type="primary" text :disabled="!multipleSelection.length" @click="emptyHandler">
            <el-icon><delete /></el-icon> 清空
          </el-button>
        </div>
        <div class="custom-conent flex-between mb5" v-for="(item,index) in multipleSelection" :key="index">
          <span>{{ item.name }}</span>
          <el-button type="primary" link @click="removeHandle(item)">删除</el-button>
        </div>
      </div>
    </template>
  </k-picker>
</template>

<script setup>
import { ref } from 'vue';
import { Delete } from '@element-plus/icons-vue';

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

const clickHandle = () => {
  console.log('multipleSelection.value: ', multipleSelection.value);
};

const pickerRef = ref(null);
const removeHandle = (item) => {
  pickerRef.value.deleteHandler(item);
};

const emptyHandler = () => pickerRef.value.resetData();

</script>

<style lang="scss" scoped>
.text-right {
  text-align: right;
}

.custom-right {
  border: 1px solid #d8dce5;
  border-radius: 6px;
  height: 468px;
}

.custom-conent {
  padding: 0 10px;
}
</style>
