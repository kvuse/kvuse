<template>
  <div class="k-picker">
    <slot name="top" />
    <el-row :gutter="10">
      <el-col :span="15">
        <div class="col-left">
          <batchTable ref="batchTableRef" height="440px" :table-data="tableData" :table-column="tableColumn" :select-list="selectList" :key-id="keyId" v-model="multipleSelection" v-model:page="currentPage" />
        </div>
      </el-col>
      <el-col :span="9">
        <div class="col-right">
          <div class="selete-header flex-between">
            <span>已选择<span>({{ multipleSelection.length }})</span>
            </span>

            <el-button text :disabled="!multipleSelection.length" @click="emptyHandler">
              <el-icon><delete /></el-icon> 清空
            </el-button>
          </div>
          <div class="selete-content">
            <div class="flex-between pl10 pr10" :class="{'mt10':showCount}" v-for="item in multipleSelection" :key="getId(item)">
              <div class="flex flex1 mr20 overflow">
                <el-tooltip effect="dark" :content="getName(item)" placement="top">
                  <span class="text-overflow">{{ getName(item) }}</span>
                </el-tooltip>
              </div>
              <el-input-number v-model="item.num" :min="1" class="width-100 flex-shrink mr10" v-if="showCount" />
              <el-button text @click="deleteHandler(item)">
                删除
              </el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  ref, computed, defineComponent, watchEffect,
} from 'vue';
import { Delete } from '@element-plus/icons-vue';
import batchTable from '../batch-table/main.vue';

export default defineComponent({
  name: 'KPicker',
  components: { batchTable, Delete },
  emits: ['update:modelValue', 'update:page'],
  props: {
    modelValue: { type: Array, default: () => [] },
    selectList: { type: Array, default: () => [] },
    page: { type: Number, default: 1 },
    tableData: { type: Array, default: () => [] },
    tableColumn: { type: Array, default: () => [] },
    keyId: { type: String, default: 'id' },
    keyName: { type: String, default: 'pName' },
    showCount: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const multipleSelection = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });
    watchEffect(() => {
      if (props.showCount) {
        multipleSelection.value.forEach((item) => {
          item.num = item.num ?? 1;
        });
      }
    });
    const batchTableRef = ref(null);
    // clear all
    const emptyHandler = () => batchTableRef.value.toggleSelection();
    // delete tag
    const deleteHandler = (row) => batchTableRef.value.handleRowClick(row);

    // 重置数据
    const currentPage = ref(1);
    const resetData = () => {
      currentPage.value = 1;
      emptyHandler();
    };

    const getName = (item) => item[props.keyName];
    const getId = (item) => item[props.keyId];

    return {
      multipleSelection, batchTableRef, currentPage, emptyHandler, resetData, deleteHandler, getName, getId,
    };
  },
});
</script>

<style lang="scss" scoped>
.k-picker {
  .col-left {
    min-height: 430px;
  }

  .col-right {
    border: 1px solid #d8dce5;
    border-radius: 6px;

    .selete-header {
      background: #f5f5f5;
      height: 46.38px;
      padding: 0 10px;
    }

    .selete-content {
      height: 392px;
      overflow-y: auto;
    }

    .width-100 {
      width: 100px;
    }
  }
}

:deep(.el-button--text.is-disabled) {
  background-color: #f5f5f5;
}
</style>
