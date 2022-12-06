<template>
  <van-button :type="type" :class="{'is-link':link}" v-bind="$attrs">
    <slot />
    <template #icon v-if="!$attrs.icon">
      <slot name="icon" />
    </template>
    <template #loading>
      <slot name="loading" />
    </template>
  </van-button>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { Button as VanButton } from 'vant';

export default defineComponent({
  name: 'KvButton',
  components: { VanButton },
  props: {
    type: {
      type: String,
      default: 'default',
      validate: (value) => ['primary', 'success', 'warning', 'danger', 'text'].includes(value),
    },
    link: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const textcolor = computed(() => `var(--van-button-${props.type}-background)`);
    return { textcolor };
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

.is-link {
  background: transparent;
  border-color: transparent;
  padding: 2px;
  color: v-bind(textcolor);

  &::before {
    border-color: transparent;
    background: none;
  }
}

.van-button:not(:last-child) {
  margin-right: var(--van-padding-md);
}
</style>
