<template>
  <div v-keyboard:[eventListen]="{buttonKey:'Enter',isCombination:1}">
    <span>监听Ctrl + Enter键值：</span>
    <div class="width-240 mt10 mb10">
      <k-input placeholder="自动获取焦点" type="text" v-focus v-model="value"></k-input>
    </div>
    <div>当前状态：<span class="c-red font-18">{{ currentState }}</span></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');

const currentState = ref('按Ctrl+Enter触发');
const eventListen = () => {
  currentState.value = '组合键已触发';
  setTimeout(() => {
    currentState.value = '按Ctrl+Enter触发';
  }, 800);
};
</script>

<style lang="scss" scoped>

</style>
