<template>
  <div class="mb10">点击后设置不可点击，接口请求成功恢复</div>
  <el-button
    type="primary"
    v-button-request:[clickTest]
  >
    保存
  </el-button>
  <span class="color-99 ml10">点击显示：请求中...</span>
  <div class="mt20 mb20"></div>
  <el-button
    type="primary"
    v-button-request:[clickTest]="{ content: '接口请求中' }"
  >
    确认
  </el-button>
  <span class="color-99 ml10">点击显示：接口请求中</span>
</template>

<script setup>
import { ref } from 'vue';
import { vButtonRequest } from '@kvuse/directives';

const fetchData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, 2000); // 等待2秒
});

const isLoading = ref(false);
const clickTest = async () => {
  isLoading.value = true;
  const result = await fetchData();
  console.log('result: ', result);
  isLoading.value = false;
};
</script>
