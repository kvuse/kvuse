<template>
  <div class="table-v2 el-table flex-column">
    <headerFooter ref="tableHeader" :table-column="tableColumn" @sort-change="clickSortCaret">
      <template #default="{ row, index }">
        <slot :row="row" :name="row?.header" :index="index">
          {{ row.label }}
        </slot>
      </template>
    </headerFooter>
    <virtualList :data="tableData" always ref="virtualRef" :row-class-name="rowClassName" v-bind="$attrs" :height="height" @scroll="scrollHandle">
      <template #default="{ row, index:rowIndex }">
        <slot name="content">
          <div class="flex table-body">
            <template v-for="item in columnList" :key="item.keyId">
              <div class="cell table-row table-border-bottom flex-align-center" ref="bodyCell" :class="{'fixed-cell':item.fixed}" :style="headerClass(item)">
                <div :class="{'text-overflow':item.showOverflowTooltip ?? true }">
                  <slot :name="item?.custom ?? 'default'" :row="row" :index="rowIndex">
                    {{ row[item.prop] }}
                  </slot>
                </div>
              </div>
            </template>
          </div>
        </slot>
      </template>
    </virtualList>
    <slot name="footer">
      <headerFooter ref="tableBottom" :table-column="tableColumn" is-footer v-if="showSummary || $slots.footer">
        <template #default="{ row, index }">
          {{ getSummaries(row,index) }}
        </template>
      </headerFooter>
    </slot>
  </div>
</template>

<script>
import {
  defineComponent, toRefs, ref, computed,
} from 'vue';
import virtualList from '../virtual-list';
import propsValue from './propsValue';
import headerFooter from './headerFooter.vue';
import { useTableV2 } from './useTableV2';

export default defineComponent({
  name: 'KTableV2',
  components: { virtualList, headerFooter },
  props: propsValue,
  emits: ['sort-change'],
  setup(props, { emit }) {
    const columnList = computed(() => props.tableColumn.map((item, index) => ({ ...item, keyId: index })));

    const {
      headerColmn, headerClass, tableHeader, getSummaries,
    } = useTableV2(props);

    // header bottom
    const tableBottom = ref(null);
    const scrollHandle = ({ scrollLeft }) => {
      tableHeader.value?.setScrollLeft(scrollLeft);
      tableBottom.value?.setScrollLeft(scrollLeft);
    };

    // sort
    const clickSortCaret = ({ column, sortType }) => emit('sort-change', { column, sortType });
    const virtualRef = ref(null);

    const setScrollTop = (num) => virtualRef.value?.viewport.setScrollTop(num);

    return {
      ...toRefs(props), columnList, headerClass, tableHeader, tableBottom, scrollHandle, headerColmn, clickSortCaret, virtualRef, setScrollTop, getSummaries,
    };
  },
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

  .table-body {
    &:hover {
      background-color: #f5f7fa;

      .table-row {
        background-color: #f5f7fa;
      }
    }

    .fixed-cell {
      background-color: #fff;
    }
  }
}

</style>
