<template>
  <div class="mb10">点击后设置不可点击</div>
  <el-button type="primary" v-button.once>点击一次</el-button>
</template>

<script setup>
import { vButton } from '@kvuse/directives';

</script>
