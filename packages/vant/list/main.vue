<template>
  <div class="kv-list flex-column flex1">
    <pull-refresh v-model="refreshing" :disabled="disabled" @refresh="onRefresh" class="kv-pull flex1">
      <kv-status type="loading" v-if="loading && (isLoading || currentPage === 1)">
        <template #image>
          <slot name="loading"></slot>
        </template>
      </kv-status>

      <kv-status v-else-if="isNullData">
        <template #image>
          <slot name="empty"></slot>
        </template>
      </kv-status>
      <template v-else>
        <List
          v-model:loading="loading" :finished="finished" :finished-text="finishedText"
          @load="onLoad" v-bind="$attrs"
        >
          <slot :list="listData" />
        </List>
      </template>
    </pull-refresh>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PullRefresh, List } from 'vant';
import KvStatus from '../status';

defineOptions({
  name: 'KvList',
});

const props = defineProps({
  modelValue: { type: Number, default: 1 },
  disabled: { type: Boolean, default: false }, // 是否禁用下拉刷新
  finishedText: { type: String, default: '没有更多了' }, // 加载完成的文字
  loadRequest: { type: Function, default: () => {} }, // load回调
  responseNames: { type: Object, default: () => ({}) }, // response参数说明
  refreshChange: { type: Function, default: () => {} }, // 刷新的回调
});
const loading = ref(false);
const finished = ref(false);
const listData = ref([]);

const currentPage = ref(1);
const isLoading = ref(false);
const isNullData = ref(false);
const refreshing = ref(false);

const setResponseNames = (name, result = {}) => {
  const defaultName = { pageNo: 'pageNo', totalPage: 'totalPage', records: 'records' };
  const paramsName = { ...defaultName, ...props.responseNames };
  return result[paramsName[name]];
};

const onLoad = async () => {
  if (refreshing.value) await props.refreshChange();
  const result = await props.loadRequest(currentPage.value);
  refreshing.value = false;
  loading.value = false;
  const pageNo = setResponseNames('pageNo', result) ?? 1;
  const totalPage = setResponseNames('totalPage', result) ?? 1;
  const records = setResponseNames('records', result) ?? [];
  listData.value = currentPage.value === 1 ? records : [...listData.value, ...records];
  isNullData.value = !listData.value.length;
  if (pageNo >= totalPage) finished.value = true;
  currentPage.value++;
  isLoading.value = false;
};

const reset = () => {
  currentPage.value = 1;
  listData.value = [];
  isLoading.value = true;
  isNullData.value = false;
  finished.value = false;
  loading.value = true;
  onLoad();
};

const onRefresh = async () => {
  await props.refreshChange();
  reset();
};

defineExpose({
  reset,
});

</script>

<style lang="scss">
.kv-pull {
  overflow-y: auto !important;
}
</style>
