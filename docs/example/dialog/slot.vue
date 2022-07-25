<template>
  <k-button
    type="primary" size="large"
    @click="visible = true"
  >
    自定义底部按钮
  </k-button>
  <k-dialog v-model="visible">
    这是一个没有底部的对话框
    <template #footer>
      <k-button>自定义按钮</k-button>
    </template>
  </k-dialog>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>
