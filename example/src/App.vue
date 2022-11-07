<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import locale from 'element-plus/lib/locale/lang/zh-cn';
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
