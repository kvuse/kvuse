<template>
  <div class="width-240">
    <k-input :point="3" placeholder="可输入小数点后3位" v-model="value" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
