<template>
  <div class="order flex1 flex-column">
    <div class="flex-center p10 border-bottom mb10">
      选择器头部
    </div>
    <k-picker class="flex1" :table-column="tableColumn" height="100%" :table-data="tableData" v-model="multipleSelection" right-width="390px" scrollbar-always-on show-count />
    <div class="flex-center mt10 border-top p10">
      底部
    </div>
  </div>
</template>

<script setup>
const tableColumn = [
  { label: '日期', prop: 'date' },
  { label: '姓名', prop: 'name' },
];

const initList = Array.from({ length: 100 }, (_, i) => ({
  date: '2022-12-20',
  name: 'eeee',
  id: i + 1,
}));

const tableData = ref(initList);

const multipleSelection = ref([]);
</script>

<style lang="scss" scoped>

</style>
