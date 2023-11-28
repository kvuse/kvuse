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
import { ElSpace } from 'element-plus';

export default defineComponent({
  name: 'KBreadcrumb',
  props: {
    list: {
      type: Array,
      default: () => ([]),
    },
  },
  components: { ElSpace },
  setup(props) {
    const instance = getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;

    const clickHandle = (item, index) => {
      if (item.url) {
        window.location.href = item.url;
        return;
      }
      const pathIndex = (index - props.list.length) + 1;
      if (item.path) router?.push(item.path);
      else if (pathIndex) router?.go(pathIndex);
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
