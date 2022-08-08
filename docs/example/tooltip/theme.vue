<template>
  <div class="flex">
    <k-tooltip content="dark 主题">
      <k-button>dark 主题</k-button>
    </k-tooltip>
    <k-tooltip effect="light">
      <k-button>light 主题</k-button>
      <template #content>
        light 主题
      </template>
    </k-tooltip>
    <k-tooltip content="custom 主题" effect="customized">
      <k-button>custom 主题</k-button>
    </k-tooltip>
  </div>
</template>

<script setup>

</script>

<style>
.el-popper.is-customized {
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159 229 151), rgb(204 229 129));
}

.el-popper.is-customized .el-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>
