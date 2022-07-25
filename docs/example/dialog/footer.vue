<template>
  <k-button
    type="primary" size="large"
    @click="visible = true"
  >
    隐藏底部按钮
  </k-button>
  <k-dialog v-model="visible" :show-footer="false">
    这是一个没有底部的对话框
  </k-dialog>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>
