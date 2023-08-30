<template>
  <k-date-picker v-model="time" @change="changeHandle" />
  <div class="mt20 mb10">
    时间日期类型
  </div>
  <k-date-picker type="datetimerange" v-model="time" :clearable="false" @change="changeHandle" />
  <div class="mt20 mb20">
    选择类型模式
  </div>
  <k-date-picker v-model="time1" select-type @change="changeHandle" />
  <div class="mt20 mb10">
    选择日 设置时间段：
  </div>
  <k-date-picker
    v-model="timeRange" select-type daterange
    @change="changeRangeHandle"
  />
</template>

<script setup>
import { ref } from 'vue';

const time = ref(['2022-08-01 00:00:00', '2022-08-08 00:00:00']);

const time1 = ref('2022-08-01 00:00:00');
const timeRange = ref(['2022-08-01 00:00:00', '2022-08-08 00:00:00']);
const changeHandle = (value) => {
  console.log('value: ', value);
};

const changeRangeHandle = (range) => {
  console.log('range: ', range);
};
</script>

<style lang="scss" scoped>
</style>
