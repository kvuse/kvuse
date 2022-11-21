<template>
  <van-button :type="type" v-bind="$attrs">
    <slot />
    <template #icon v-if="!$attrs.icon">
      <slot name="icon" />
    </template>
    <template #loading>
      <slot name="loading" />
    </template>
  </van-button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'default',
    validate: (value) => ['primary', 'success', 'warning', 'danger', 'text'].includes(value),
  },
});
</script>

<style lang="scss" scoped>
.van-button--text {
  border: none;
  background: none;
  height: inherit;
  padding: 0 2vw;

  &:focus {
    color: var(--van-tab-active-text-color);
  }

  &::before {
    background: none;
  }
}

.van-button {
  :deep(.van-button__icon) {
    .iconfont {
      font-size: 1.1rem;
    }
  }

  &:focus {
    :deep(.iconfont) {
      color: var(--van-tab-active-text-color);
    }
  }
}
</style>
