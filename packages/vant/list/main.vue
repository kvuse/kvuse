<template>
  <div class="kv-list flex-column flex1">
    <pull-refresh v-model="refreshing" :disabled="disabled" @refresh="onRefresh" class="kv-pull flex1">
      <kv-status type="loading" v-if="loading && statusData.pageIndex === 1">
        <template #image>
          <slot name="loading"></slot>
        </template>
        <span v-if="!$slots.loading">Loading...</span>
      </kv-status>

      <kv-status v-else-if="statusData.isNullData">
        <template #image>
          <slot name="empty"></slot>
        </template>
        <span v-if="!$slots.empty">暂无数据</span>
      </kv-status>
      <template v-else>
        <list v-model:loading="loading" :finished="finished" :finished-text="finishedText" :offset="200" v-bind="$attrs" @load="onLoad">
          <slot />
        </list>
      </template>
    </pull-refresh>
  </div>
</template>

<script>
import { ref } from 'vue';
import { PullRefresh, List } from 'vant';
import KvStatus from '../status';

export default {
  name: 'KvList',
  components: { PullRefresh, List, KvStatus },
  props: {
    disabled: { type: Boolean, default: false }, // 是否禁用下拉刷新
    finishedText: { type: String, default: '没有更多了' }, // 加载完成的文字
    loadChange: { type: Function, default: () => {} }, // load回调
    refreshChange: { type: Function, default: () => {} }, // 刷新的回调
  },
  setup(props) {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);
    const isReset = ref(false);
    const statusData = ref({ pageIndex: 1, isNullData: false, isFinished: false });

    const onLoad = async () => {
      if (refreshing.value) {
        statusData.value.pageIndex = 1;
        refreshing.value = false;
      }
      if (isReset.value) {
        statusData.value.pageIndex = 1;
        isReset.value = false;
      }
      const result = await props.loadChange(statusData.value.pageIndex);
      loading.value = false;
      if (result) {
        statusData.value = {
          pageIndex: 1, isNullData: false, isFinished: false, ...result,
        };
      } else finished.value = true;
      if (result?.isFinished) finished.value = true;
    };

    const onRefresh = async () => {
      finished.value = false;
      loading.value = true;
      await props.refreshChange();
      onLoad();
    };

    // 重置
    const reset = () => {
      finished.value = false;
      isReset.value = true;
      onRefresh();
    };

    return {
      list,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing,
      statusData,
      reset,
    };
  },
};

</script>

<style lang="scss">
.kv-pull {
  overflow-y: auto !important;
}
</style>
