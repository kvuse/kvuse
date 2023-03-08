<template>
  <div v-keyboard:[eventListen].focus.dialog="{buttonKey:'F2'}">
    <span>弹框下，监听F2键值：</span><br />
    <div class="mt10">
      <span class="mr20">按F2打开弹框 </span>
      <k-button type="primary" @click="visible = true">打开弹框</k-button>
    </div>
    <k-dialog v-model="visible" width="400px"></k-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const eventListen = () => {
  visible.value = !visible.value;
};
</script>

<style lang="scss" scoped>

</style>
