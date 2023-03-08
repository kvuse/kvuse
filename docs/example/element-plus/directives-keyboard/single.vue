<template>
  <div v-keyboard:[eventListen]="{buttonKey:'Enter'}">
    <span>监听Enter键值：</span>
    <div>当前状态：<span class="c-red font-18">{{ currentState }}</span></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentState = ref('按回车触发');
const eventListen = () => {
  currentState.value = '回车已触发';
  setTimeout(() => {
    currentState.value = '按回车触发';
  }, 800);
};
</script>

<style lang="scss" scoped>

</style>
