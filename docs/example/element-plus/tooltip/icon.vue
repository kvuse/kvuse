<template>
  <div class="flex">
    <k-tooltip content="消息提示显示图标" show-icon placement="right">
      显示图标
    </k-tooltip>
    <k-tooltip content="消息提示显示图标" show-icon placement="right">
      <k-button>插槽图标提示</k-button>
      <template #icon>
        <el-icon><InfoFilled /></el-icon>
      </template>
    </k-tooltip>
  </div>
</template>

<script setup>
import { InfoFilled } from '@element-plus/icons-vue';
</script>

<style lang="scss" scoped>

</style>
