<template>
  <div class="collect">
    Collect
    <test />
    <k-input v-model="num" placeholder="测试输入框" class="mt20" />
    <!-- ￥1.88 -->
    <span v-params="text" />
    <img v-image-url="{ name: 'fail.png'}">
  </div>
</template>

<script setup>
import {
  useMessage, useRequest, VParams, VImageUrl,
} from '@kvuse/core';
import axios from 'axios';
import test from './test.vue';

console.log('useCommon: ', useMessage());

const text = ref('test');

const num = ref('');
// console.log('useRequest: ', useRequest);

const instance = axios.create({
  timeout: 1000,
});

const { $api, $http } = useRequest({
  instance,
  responseHandler(response) {
    const { data, data: { code } } = response || {};
    if (code === 0) return data;
    // 报错处理
    return data;
  },
  beforeResponse(response) {
    console.log('response.config.method: ', response.config.method);
    return response.data;
  },
});

const getData = async () => {
  const result = await $api.get('/erp/global');
  console.log('result: ', result);
  const { code, data, message } = await $http.get('/erp/global/list');
  console.log('code,data,message: ', code, data, message);
};

onMounted(() => {
  getData();
  setTimeout(() => {
    text.value = 'changeText';
  }, 1000);
});

</script>

<style lang="scss" scoped>
.collect {
  width: 100%;
}
</style>
