<template>
  <k-button
    type="primary" size="large"
    @click="visible = true"
  >
    内容居中
  </k-button>
  <k-dialog v-model="visible" center>
    这是一个内容居中的对话框
  </k-dialog>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>
