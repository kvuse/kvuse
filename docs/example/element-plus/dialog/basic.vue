<template>
  <k-button
    type="primary" size="large"
    @click="visible = true"
  >
    打开对话框
  </k-button>
  <k-dialog v-model="visible">
    这是一个对话框
  </k-dialog>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>
