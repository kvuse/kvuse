<template>
  <kv-list :load-change="loadChange" ref="listRef">
    <template v-for="(item, index) in tableData" :key="index">
      <div class="flex-center list-item van-hairline--bottom">
        {{ index }}
      </div>
    </template>
  </kv-list>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const tableData = ref([]);

const listRef = ref(null);

const result = reactive({
  pageIndex: 1,
  isNullData: false,
  isFinished: false,
});

const fetchData = () => new Promise((resolve) => {
  setTimeout(() => {
    tableData.value = [...tableData.value, ...new Array(30).fill({ name: 11 })];
    if (result.pageIndex === 3) {
      result.isNullData = false;
      result.isFinished = true;
    } else {
      result.pageIndex++;
    }
    resolve(result);
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
