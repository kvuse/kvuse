<template>
  <kv-list :load-request="loadChange" :response-names="{pageNo:'pageIndex'}" ref="listRef">
    <template v-for="(item, index) in tableData" :key="index">
      <div class="flex-center list-item van-hairline--bottom">
        {{ index }}
      </div>
    </template>
  </kv-list>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const tableData = ref([]);

const listRef = ref(null);

const fetchData = () => new Promise((resolve) => {
  setTimeout(() => {
    tableData.value = new Array(30).fill({ name: 11 });
    resolve({
      pageNo: 2,
      records: tableData.value,
      totalPage: 1,
    });
  }, 2000); // 等待2秒
});

const loadChange = async () => {
  const data = await fetchData();
  return data;
};

onMounted(() => {
  listRef.value.reset();
});
</script>

<style lang="scss" scoped>
.list-item {
  padding: 15px;
}
</style>
