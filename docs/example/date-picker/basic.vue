<template>
  <k-date-picker v-model="time" @change="changeHandle" />
  <div class="mt20 mb10">
    时间日期类型
  </div>
  <k-date-picker type="datetimerange" v-model="time" @change="changeHandle" />
</template>

<script setup>
import { ref } from 'vue';

const time = ref('');
const changeHandle = (value) => {
  console.log('value: ', value);
};
</script>

<style lang="scss" scoped>
</style>
