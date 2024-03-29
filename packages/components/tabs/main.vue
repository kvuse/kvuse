<template>
  <div class="k-tabs" :class="{'style-card':!type,'style-padding':isPadding && !type}">
    <el-tabs class="flex-tabs" :type="type" v-bind="$attrs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in tabsList" :label="item.label" :name="item.name" :key="item.name">
        <slot name="label" :row="item" :index="index" />
      </el-tab-pane>
      <template #addIcon>
        <slot name="addIcon" />
      </template>
    </el-tabs>
    <div class="tabs-right ml10">
      <slot name="right" />
      <slot />
    </div>
  </div>
</template>

<script>
import {
  ref, computed, watchEffect, defineComponent, getCurrentInstance,
} from 'vue';

import { ElTabs, ElTabPane } from 'element-plus';

export default defineComponent({
  name: 'KTabs',
  components: { ElTabs, ElTabPane },
  props: {
    type: { type: String, default: '' },
    isRouter: { type: Boolean, default: false },
    modelValue: { type: [String, Number], default: '' },
    isPadding: { type: Boolean, default: true },
    replace: { type: Boolean, default: false },
    tabsList: {
      type: Array,
      default: () => [
        { label: '全部', name: 'all' },
        { label: '正常', name: 'normal' },
        { label: '已拉黑', name: 'block' },
      ],
    },
  },
  emits: ['tab-click', 'change', 'update:modelValue'],
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const route = computed(() => instance.appContext.config.globalProperties.$route);
    const router = instance.appContext.config.globalProperties.$router;
    const active = computed(() => route.value?.params.type || route.value?.name);

    const activeName = ref(active.value);

    watchEffect(() => {
      activeName.value = props.modelValue || active.value;
      emit('update:modelValue', activeName.value);
    });

    const query = computed(() => route.value.query);
    const handleClick = (tab) => {
      if (props.isRouter) {
        const pathParams = { path: `${tab.paneName}`, query: query.value };
        if (props.replace) router.replace(pathParams);
        else router.push(pathParams);
      }
      emit('tab-click', tab.paneName);
      emit('change', tab.paneName);
      emit('update:modelValue', tab.paneName);
    };
    return { activeName, handleClick };
  },
});

</script>

<style lang="scss">
.k-tabs {
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: relative;

  &::after {
    background-color: #d8dce5;
    bottom: 0;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  .flex-tabs {
    flex: 1;
    overflow: hidden;
  }

  .tabs-right {
    align-items: center;
    display: flex;
    min-height: 40px;
  }

  .el-tabs__nav-wrap {
    margin-bottom: -2px !important;
  }

  .el-tabs__header {
    margin-bottom: 0 !important;
  }

  .el-tabs--card {
    .is-active {
      border-bottom: 2px solid #fff !important;
    }
  }
}

.style-padding {
  padding: 0 20px;
}

.style-card {
  position: relative;

  &::after {
    height: 2px;
  }

  .el-tabs__nav-wrap::after {
    background-color: transparent !important;
  }

  .el-tabs__nav-wrap {
    margin-bottom: -1px !important;
  }

  .tabs-right {
    border-width: 2px;
  }

  .el-tabs__header {
    margin-bottom: 1px !important;
  }
}
</style>
