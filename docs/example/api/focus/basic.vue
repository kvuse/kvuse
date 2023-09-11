<template>
  <div class="width-240">
    <el-input v-model="value" v-focus placeholder="自动获取焦点"></el-input>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { vFocus } from '@kvuse/directives';

const value = ref('');
</script>

<style lang="scss" scoped>

</style>
