<template>
  <div v-keyboard:[eventListen].any>
    <span>监听所有键值：</span>
    <div>当前键值：<span class="c-red font-18">{{ currentKey.toLocaleUpperCase() }}</span></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentKey = ref('');
const eventListen = (event) => {
  console.log('event: ', event);
  currentKey.value = event.key;
};
</script>

<style lang="scss" scoped>

</style>
