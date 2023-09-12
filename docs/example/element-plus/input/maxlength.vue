<template>
  <div class="width-240">
    <k-input placeholder="请输入金额" v-model="value" maxlength="10" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
