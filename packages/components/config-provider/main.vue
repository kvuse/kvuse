<template>
  <el-config-provider :locale="zhCn">
    <slot />
  </el-config-provider>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
</script>

<style lang="scss" scoped>

</style>
