<template>
  <div class="width-240">
    <k-input-number :controls="false" placeholder="请输入金额" v-model="value" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
