<template>
  <el-config-provider :locale="zhCn">
    <slot />
  </el-config-provider>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
</script>

<style lang="scss" scoped>

</style>
