<template>
  <div v-keyboard:[eventListen].long.any="{buttonKey:'F2'}">
    <span>keepAlvie下，监听键值：</span><br />
    <div>当前键值：<span class="c-red font-18">{{ currentKey.toLocaleUpperCase() }}</span></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentKey = ref('');
const eventListen = (event) => {
  currentKey.value = event.key;
};
</script>

<style lang="scss" scoped>

</style>
