<template>
  <div class="width-240">
    <kv-input placeholder="可输入最小值或者最大值" v-model="value" :max="10" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
