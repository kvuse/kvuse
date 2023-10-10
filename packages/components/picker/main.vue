<template>
  <div class="k-picker flex-column">
    <slot name="top" />
    <el-row :gutter="10" class="height-auto" :class="{'custom-right':rightWidth}">
      <el-col :span="15" class="height-auto flex1">
        <div class="col-left height-auto flex-column">
          <batchTable ref="batchTableRef" :height="height" :table-data="tableData" :table-column="tableColumn" :select-list="selectList" :key-id="keyId" v-model="multipleSelection" v-model:page="currentPage" :scrollbar-always-on="scrollbarAlwaysOn">
            <template #header="{column}">
              <slot :name="column.header" :column="column" />
            </template>
            <template #default="{row,column,index}">
              <slot v-if="column.custom && index >=0" :name="column.custom" :row="row" :index="index" />
            </template>
          </batchTable>
        </div>
      </el-col>
      <el-col :span="9" class="height-auto flex-column">
        <div class="col-right flex-column height-auto">
          <slot name="right">
            <div class="selete-header flex-between">
              <slot name="right-header">
                <span>已选择<span>({{ multipleSelection.length }})</span>
                </span>

                <el-button type="primary" text :disabled="!multipleSelection.length" @click="emptyHandler">
                  <el-icon><delete /></el-icon> 清空
                </el-button>
              </slot>
            </div>
            <div class="selete-content flex1">
              <el-scrollbar always>
                <div class="flex-between pl10 pr10" :class="{'mt10':showCount}" v-for="item in multipleSelection" :key="getId(item)">
                  <div class="flex flex1 mr20 overflow">
                    <el-tooltip effect="dark" :content="getName(item)" placement="top">
                      <span class="text-overflow">{{ getName(item) }}</span>
                    </el-tooltip>
                  </div>
                  <k-input-number v-model="item.num" :min="1" class="width-120 flex-shrink mr10" v-if="showCount" />
                  <el-button type="primary" text @click="deleteHandler(item)">
                    删除
                  </el-button>
                </div>
              </el-scrollbar>
            </div>
          </slot>
        </div>
      </el-col>
    </el-row>
    <slot name="footer" />
  </div>
</template>

<script>
import {
  ref, computed, defineComponent, watchEffect,
} from 'vue';
import { Delete } from '@element-plus/icons-vue';
import {
  ElRow, ElCol, ElButton, ElIcon,
} from 'element-plus';
import batchTable from '../batch-table/main.vue';

export default defineComponent({
  name: 'KPicker',
  components: {
    batchTable, Delete, ElRow, ElCol, ElButton, ElIcon,
  },
  emits: ['update:modelValue', 'update:page'],
  props: {
    modelValue: { type: Array, default: () => [] },
    selectList: { type: Array, default: () => [] },
    page: { type: Number, default: 1 },
    tableData: { type: Array, default: () => [] },
    tableColumn: { type: Array, default: () => [] },
    keyId: { type: String, default: 'id' },
    keyName: { type: String, default: 'name' },
    showCount: { type: Boolean, default: false },
    height: { type: String, default: '442px' },
    scrollbarAlwaysOn: { type: Boolean, default: false },
    rightWidth: { type: String, default: '' },
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

    const rightwidth = computed(() => props.rightWidth);
    const autoheight = computed(() => props.height);

    return {
      multipleSelection, batchTableRef, currentPage, emptyHandler, resetData, deleteHandler, getName, getId, rightwidth, autoheight,
    };
  },
});
</script>

<style lang="scss" scoped>
.k-picker {
  .height-auto {
    height: 100%;
    overflow: hidden;
  }

  .col-left {
    min-height: v-bind(autoheight);
  }

  .col-right {
    border: 1px solid #d8dce5;
    border-radius: 6px;
    min-height: v-bind(autoheight);
    height: calc(100% - 20px);

    .selete-header {
      background: #f5f5f5;
      height: 42px;
      padding: 0 10px;
    }

    .selete-content {
      overflow-y: auto;
    }

    .width-120 {
      width: 120px;
    }
  }

  .custom-right {
    flex: 1;

    .el-col-15 {
      flex: 1;
      max-width: none;
    }

    .el-col-9 {
      flex: none;
      width: v-bind(rightwidth);
    }
  }

  :deep(.el-table th) {
    height: 42px;
  }
}

:deep(.el-button--text.is-disabled) {
  background-color: #f5f5f5;
}

</style>
