<template>
  <div v-keyboard:[eventListen].focus="{buttonKey:'Enter'}">
    <div class="c-red mb20">提示：一般情况下：封装的输入框都有`enter`事件，在这只是举个例子</div>
    <span>输入框焦点下，监听Enter键值：</span>
    <div class="width-240 mt10 mb10">
      <k-input placeholder="自动获取焦点" type="text" v-focus v-model="value"></k-input>
    </div>
    <div>当前状态：<span class="c-red font-18">{{ currentState }}</span></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');

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
