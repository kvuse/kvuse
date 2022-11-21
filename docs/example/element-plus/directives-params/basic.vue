<template>
  <div>
    <span>参数为空处理：</span>
    <span v-params>{{ isNull }}</span>
  </div>
  <div class="mt20">
    <span>参数有值：</span>
    <span v-params>{{ value }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isNull = ref(null);

const value = ref('6666');
</script>
