<template>
  <div class="flex-center">
    <div class="keyborad-content">
      <k-input :point="2" placeholder="可输入小数点后2位" v-model="value" />
      <k-number-keyboard decimal-point v-model="value" @confirm="confirmHandle" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');

const confirmHandle = (val) => {
  console.log('val: ', val);
};
</script>

<style scoped>
.keyborad-content {
  width: 300px;
}
</style>
