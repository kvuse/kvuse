<template>
  <div class="flex-center">
    <div class="keyborad-content">
      <k-input placeholder="请输入金额" v-model="value" />
      <k-number-keyboard v-model="value" @confirm="confirmHandle" @change="changeHandle" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');

const confirmHandle = (val) => {
  console.log('val: ', val);
};

const changeHandle = (val) => {
  console.log('changeHandle: ', val);
};
</script>

<style scoped>
.keyborad-content {
  width: 300px;
}
</style>
