<template>
  <div class="crumb-header flex-between">
    <div class="crumb-contain">
      <el-space spacer="/">
        <span
          v-for="(item, index) of list" :key="index"
          :class="{'crumb-item': index !== list.length - 1}" @click="clickHandle(item, index)"
        >
          {{ item.title }}
        </span>
      </el-space>
    </div>
    <slot />
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'KBreadcrumb',
  props: {
    list: {
      type: Array,
      default: () => ([]),
    },
  },
  setup(props) {
    const instance = getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;

    const clickHandle = (item, index) => {
      if (item.url) {
        window.location.href = item.url;
        return;
      }
      if (item.path) router?.push(item.path);
      else router?.go((index - props.list.length) + 1);
    };
    return { clickHandle };
  },
});
</script>

<style lang="scss" scoped>
.crumb-header {
  border-bottom: 1px solid #d8dce5;
  height: 50px;
  padding: 0 20px;

  .crumb-item {
    color: var(--el-color-primary) !important;
    font-weight: 600;
    cursor: pointer;
  }
}
</style>
