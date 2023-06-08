<template>
  <div class="table-header overflow" ref="tableHeader">
    <div class="flex table-border-bottom header-content">
      <template v-for="(item, index) in tableColumn" :key="index">
        <div class="header-column cell flex-align-center" ref="headerColmn" :style="[headerCellStyle,headerClass(item)]">
          <slot :row="item" :index="index">
            {{ item.label }}
          </slot>
          <div class="table-header-sort flex-column flex-center" v-if="item.sortable && !isFooter">
            <span class="sort-wrapper">
              <i class="sort-caret ascending" :class="{'bottom-caret':sortType === 'ascending' && selectedRow.prop == item.prop}" @click="clickSortCaret('ascending',item)"></i>
              <i class="sort-caret descending" :class="{'top-caret':sortType === 'descending' && selectedRow.prop == item.prop}" @click="clickSortCaret('descending',item)"></i>
            </span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import propsValue from './propsValue';
import { useTableV2 } from './useTableV2';

const props = defineProps({
  ...propsValue,
  isFooter: { type: Boolean, default: false },
});

const emit = defineEmits(['sort-change']);

const { headerClass, tableHeader } = useTableV2(props);

// sort
const sortType = ref(null);
const selectedRow = ref({});
const clickSortCaret = (type, column) => {
  selectedRow.value = column;
  sortType.value = sortType.value === type ? null : type;
  emit('sort-change', { column, sortType: sortType.value });
};

const setScrollLeft = (scrollLeft) => {
  tableHeader.value.scrollLeft = `${scrollLeft}`;
};

defineExpose({
  setScrollLeft,
});
</script>

<style lang="scss" scoped>
.table-v2 {
  position: relative;
  height: 100%;

  .table-border-bottom {
    border-bottom: 1px solid var(--el-border-color-lighter);
  }

  .cell {
    padding: 8px 12px;
    flex: 1;
  }

  .table-header {
    overflow: hidden;
  }

  .header-content {
    position: relative;

    .header-column {
      position: sticky;
    }
  }

  .table-header-sort {
    .sort-wrapper {
      height: 14px;
      width: 24px;
      cursor: pointer;
      overflow: initial;
      position: relative;
      top: 2px;
    }

    .top-caret {
      border-top-color: var(--el-color-primary);
    }

    .bottom-caret {
      border-bottom-color: var(--el-color-primary);
    }
  }
}

</style>
