<template>
  <div v-keyboard:[eventListen]="{buttonKey:'Enter'}" v-keyboard:[shiftListen]="{buttonKey:'Shift'}">
    <span>监听Enter、Shift键值：</span>
    <div>当前状态：<span class="c-red font-18">{{ currentState }}</span></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentState = ref('按键盘触发');

const eventListen = (event) => {
  currentState.value = `${event.key}已触发`;
  setTimeout(() => {
    currentState.value = '按键盘触发';
  }, 800);
};

const shiftListen = (event) => eventListen(event);
</script>

<style lang="scss" scoped>

</style>
