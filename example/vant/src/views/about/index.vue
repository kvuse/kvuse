<template>
  <div class="about">
    <span>About</span>
    <div class="mt20 mb20">
      获取state-->details:
      <span class="c-red">{{ details }}</span>
    </div>
    <div class="mt20 mb20">
      获取getters-->getDetailsData:
      <span class="c-red">{{ getDetailsData }}</span>
    </div>
    <van-button @click="setDetailsHandle">
      修改details
    </van-button>
    <kv-button type="primary" link>
      测试
    </kv-button>
    <div class="bg-white">
      <kv-date-picker v-model="dateTime" shape="round" :shortcuts-value="0" show-shortcuts @confirm="confirmHandle" />
    </div>

    <van-search v-model="value" placeholder="请输入搜索关键词" />
  </div>
</template>

<script setup>
import { useAboutStore } from './store';

// 如果解构要用storeToRefs，要不就会失去响应式
// pinia使用详情 https://juejin.cn/post/7047762419019415559
const { details, getDetailsData } = storeToRefs(useAboutStore());

// set details
const { setDetails } = useAboutStore();

const setDetailsHandle = () => {
  const num = Math.random();
  setDetails(num);
};

const dateTime = ref({
  startTime: '',
  endTime: '',
});

const confirmHandle = (value) => {
  console.log('value: ', value);
};

const value = ref('');
</script>

<style lang="scss" scoped>
.store-list {
  .shop-add {
    background: #f5f5f5;
  }
}
</style>
