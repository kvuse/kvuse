<template>
  <div class="table-v2 el-table">
    <div class="table-header overflow" ref="tableHeader">
      <div class="flex table-border-bottom header-content">
        <template v-for="(item, index) in tableColumn" :key="index">
          <div class="header-column cell flex-align-center" ref="headerColmn" :style="[headerClass(item),headerCellStyle]">
            <slot :name="item?.header ?? 'default'">
              {{ item.label }}
            </slot>
            <div class="table-header-sort flex-column flex-center" v-if="item.sortable">
              <span class="sort-wrapper">
                <i class="sort-caret ascending" :class="{'bottom-caret':sortType === 'ascending' && selectedRow.prop == item.prop}" @click="clickSortCaret('ascending',item)"></i>
                <i class="sort-caret descending" :class="{'top-caret':sortType === 'descending' && selectedRow.prop == item.prop}" @click="clickSortCaret('descending',item)"></i>
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>
    <virtualList :data="tableData" :height="height" @scroll="scrollHandle">
      <template #default="{ row }">
        <slot name="content">
          <div class="flex table-body">
            <template v-for="(item, index) in tableColumn" :key="index">
              <div class="cell header-column table-border-bottom flex-align-center" ref="bodyCell" :style="headerClass(item)">
                <div :class="{'text-overflow':item.showOverflowTooltip}">
                  <slot :name="item?.custom ?? 'default'" :row="item" :index="index">
                    {{ row[item.prop] }}
                  </slot>
                </div>
              </div>
            </template>
          </div>
        </slot>
      </template>
    </virtualList>
  </div>
</template>

<script>
import {
  defineComponent, toRefs, ref,
} from 'vue';
import virtualList from '../virtual-list';
import propsValue from './propsValue';

export default defineComponent({
  name: 'KTableV2',
  components: { virtualList },
  props: propsValue,
  emits: ['sort-change'],
  setup(props, { emit }) {
    const headerColmn = ref(null);
    const headerClass = (row) => {
      let classStyles = {};
      const { align, width, fixed } = row;
      if (align) classStyles['text-center'] = `${align}`;
      if (width) {
        classStyles = {
          ...classStyles, width: `${width}`, flex: 'inherit', 'flex-shrink': 0,
        };
      }
      if (fixed) {
        const rowIndex = props.tableColumn.findIndex((item) => item.prop === row.prop);
        const tableLength = props.tableColumn.length;
        classStyles = {
          ...classStyles, position: 'sticky', background: '#ffffff', 'z-index': 5,
        };
        if (fixed === 'left') {
          const leftNum = props.tableColumn.filter((item) => item.fixed === 'left')?.length;

          let left = 0;
          if (rowIndex > 0 && rowIndex < tableLength - 1 && leftNum > 1) left = headerColmn.value?.at(rowIndex - 1).clientWidth;
          classStyles.left = `${left}px`;
          const fixedEndIndex = props.tableColumn.findLastIndex((item) => item.fixed === 'left');
          if (fixedEndIndex === rowIndex) classStyles['box-shadow'] = '3px 0px 4px #b0a8a836';
        } else {
          const rightNum = props.tableColumn.filter((item) => item.fixed && item.fixed !== 'left')?.length;
          let right = 0;
          if (rowIndex < tableLength - 1 && rightNum > 1) {
            right = headerColmn.value?.at(rowIndex + 1).clientWidth;
          }
          const fixedStartIndex = props.tableColumn.findIndex((item) => item.fixed && item.fixed !== 'left');
          if (fixedStartIndex === rowIndex) classStyles['box-shadow'] = '-3px 0 4px #b0a8a836';
          classStyles.right = `${right}px`;
        }
      }
      return classStyles;
    };

    // table-header
    const tableHeader = ref(null);

    const scrollHandle = ({ scrollLeft }) => {
      tableHeader.value.scrollLeft = `${scrollLeft}`;
    };

    // sort
    const sortType = ref(null);
    const selectedRow = ref({});
    const clickSortCaret = (type, column) => {
      selectedRow.value = column;
      sortType.value = sortType.value === type ? null : type;
      emit('sort-change', ({ column, sortType: sortType.value }));
    };

    return {
      ...toRefs(props), headerClass, tableHeader, scrollHandle, headerColmn, sortType, clickSortCaret, selectedRow,
    };
  },
});
</script>

<style lang="scss" scoped>
.table-v2 {
  position: relative;

  .table-border-bottom {
    border-bottom: 1px solid var(--el-border-color-lighter);
  }

  .cell {
    padding: 0 12px;
    flex: 1;
  }

  .header-column {
    padding: 8px 12px;
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
