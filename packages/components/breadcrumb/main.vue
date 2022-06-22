<template>
  <div class="k-breadcrumb flex-between" :class="{'style-padding':isPadding}">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in list" :to="item.path ? { path: item.path } : ''" :key="item.path">
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KBreadcrumb',
  props: {
    isPadding: { type: Boolean, default: true },
    list: { type: Array, default: () => [] },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.k-breadcrumb {
  border-bottom: 1px solid #d8dce5;
  height: 50px;
}

.style-padding {
  padding: 0 20px;
}

.is-link {
  color: var(--el-color-primary) !important;
}
</style>
