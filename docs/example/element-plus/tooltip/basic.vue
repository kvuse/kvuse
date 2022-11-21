<template>
  <div class="flex">
    <k-tooltip content="消息提示">
      <k-button>消息提示</k-button>
    </k-tooltip>
    <k-tooltip>
      <k-button>插槽提示</k-button>
      <template #content>
        插槽消息提示
      </template>
    </k-tooltip>
    <k-tooltip>
      <span class="text-overflow">超出显示省略号超出显示省略号超出显示省略号超出显示省略号超出显示省略号超出显示省略号</span>
      <template #content>
        超出显示省略号超出显示省略号超出显示省略号超出显示省略号超出显示省略号超出显示省略号
      </template>
    </k-tooltip>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
