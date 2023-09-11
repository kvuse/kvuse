<template>
  <div class="mb10">设置2s后可点击, 点击设置内容</div>
  <el-button type="primary" v-button="{ delay:2000, content:'请稍等...' }">
    点击操作
  </el-button>
</template>

<script setup>
import { vButton } from '@kvuse/directives';

</script>
