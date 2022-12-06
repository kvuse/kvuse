<template>
  <div class="width-240">
    <kv-input type="integer" placeholder="请输入整数类型" v-model="value" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
