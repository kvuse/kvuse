<template>
  <kv-list :load-request="loadChange" ref="listRef">
    <template #default="{ list }">
      <template v-for="(item, index) in list" :key="index">
        <div class="flex-center list-item van-hairline--bottom">
          {{ index }}
        </div>
      </template>
    </template>
  </kv-list>
</template>

<script setup>
import { ref } from 'vue';

const listRef = ref(null);
const pageIndex = ref(1);
const fetchData = (pageNo = pageIndex.value) => new Promise((resolve) => {
  setTimeout(() => {
    const result = { records: [], pageNo, totalPage: 4 };
    pageIndex.value++;
    result.records = [...result.records, ...new Array(30).fill({ name: 11 })];
    resolve(result);
  }, 2000); // 等待2秒
});

const loadChange = async () => {
  const data = await fetchData();
  return data;
};

</script>

<style lang="scss" scoped>
.list-item {
  padding: 15px;
}
</style>
