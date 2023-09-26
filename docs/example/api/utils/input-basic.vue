<template>
  <div class="width-240">
    <el-input
      v-model="value"
      :formatter="formatRadixPoint"
      placeholder="小数点后两位"
    ></el-input>
    <div class="mt20 mb20"></div>
    <el-input
      v-model="value2"
      placeholder="小数点后4位"
      :formatter="(value) => formatRadixPoint(value, 4)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUtils } from '@kvuse/core';

const { formatRadixPoint } = useUtils();

const value = ref('');
const value2 = ref('');

</script>

<style lang="scss" scoped>

</style>
