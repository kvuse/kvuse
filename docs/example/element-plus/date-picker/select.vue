<template>
  <k-date-picker v-model="time" select-type @change="changeHandle" />
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

const time = ref('');
const changeHandle = (value) => {
  console.log('value: ', value);
};

const timeRange = ref('');
const changeRangeHandle = (range) => {
  console.log('range: ', range);
};
</script>

<style lang="scss" scoped>

</style>
