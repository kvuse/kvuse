<template>
  <div class="width-240">
    <kv-input placeholder="请输入金额" v-model="value" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
