<template>
  <kv-list :load-change="loadChange" ref="listRef">
    <template #loading>
      <van-loading type="spinner" color="#1989fa" size="40px" vertical>加载中...</van-loading>
    </template>
    <template #empty>
      <div class="flexs-center">
        <img src="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png" />
        <div class="mt20 color-66">暂无数据</div>
      </div>
    </template>
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
      pageIndex: 1,
      isNullData: true,
      isFinished: true,
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
