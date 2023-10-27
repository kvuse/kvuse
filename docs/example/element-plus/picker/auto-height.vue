<template>
  <div class="flex-column basic-picker">
    <k-picker
      :table-column="tableColumn" :table-data="tableData"
      v-model="multipleSelection" height="100%"
    >
      <template #footer>
        <div class="text-right">
          <k-button type="primary" @click="clickHandle">
            确认
          </k-button>
        </div>
      </template>
    </k-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tableColumn = [
  { label: '日期', prop: 'date' },
  { label: '姓名', prop: 'name' },
  { label: '地址', prop: 'address' },
];

const tableData = new Array(30).fill(null).map((_, index) => ({
  id: index + 1,
  name: `Edrward ${index + 1}`,
  date: `2023-10-${index < 10 ? `0${index + 1}` : index + 1}`,
  address: `London No. ${index + 1}
  Sesame St, Los Angeles`,
}));

const multipleSelection = ref([]);

const clickHandle = () => {
  console.log('multipleSelection.value: ', multipleSelection.value);
};

</script>

<style lang="scss" scoped>
.text-right {
  text-align: right;
}

.basic-picker {
  height: 495px;
}
</style>
