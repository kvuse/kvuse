<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import locale from 'element-plus/dist/locale/zh-cn.mjs';
</script>

<style lang="scss">
html,
body,
#app,
.home {
  height: 100%;
  width: 100%;
}
</style>
