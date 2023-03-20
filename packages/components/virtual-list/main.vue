<template>
  <el-scrollbar :height="height" ref="viewport" v-bind="$attrs" @scroll="onScroll">
    <div class="virtual-list" data-testid="virtual-list">
      <div class="list-contain" :style="{height:`${containHeight}px`}" />
      <div class="list-content" :style="{ transform: `translate3d(0,${startOffset}px,0)` }">
        <template v-for="(item, index) in listRanges" :key="index">
          <div class="list-item" :class="rowClassHandle(item, item.rowIndex)" :style="rowStyle" @click="rowClick(item, item.rowIndex)">
            <slot :row="item" :index="item.rowIndex">
              {{ item.name }}
            </slot>
          </div>
        </template>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
import {
  defineComponent, ref, onMounted, computed, watch,
} from 'vue';
import { ElScrollbar } from 'element-plus';

export default defineComponent({
  name: 'KVirtualList',
  components: { ElScrollbar },
  props: {
    height: { type: String, default: '500px' },
    rowStyle: { type: Object, default: () => ({}) },
    rowClassName: { type: [Function, String, Object], default: '' },
    data: { type: Array, default: () => [] },
  },
  emits: ['scroll', 'row-click'],
  setup(props, { emit }) {
    const startIndex = ref(0); // 可视区第一个元素标识
    const startOffset = ref(0); // 可视区元素向上的偏移量
    const viewport = ref(null);

    // 可视区最后一个元素标识
    const endIndex = ref(10);
    // get endIndex
    const itemHeight = () => document.querySelector('.list-item')?.offsetHeight ?? 10;

    const getEndIndex = () => {
      const { clientHeight = 100 } = viewport.value.wrapRef || {};
      return Math.ceil(clientHeight / itemHeight()) + startIndex.value;
    };

    // 列表总高度
    const containHeight = ref(100);

    onMounted(() => {
      endIndex.value = Number(getEndIndex()) || 10;
      containHeight.value = props.data.length * itemHeight();
    });

    // 获取startIndex
    const getStartIndex = (scrollTop) => Math.floor(scrollTop / itemHeight());

    // 获取startOffset
    const getStartOffset = (index) => Math.ceil(index * itemHeight());

    const showViewRanges = (index) => index >= startIndex.value && index <= endIndex.value;

    const listRanges = computed(() => props.data.filter((item, index) => showViewRanges(index)));

    watch(() => props.data, (val) => {
      if (!val.length) {
        startIndex.value = 0;
        startOffset.value = 0;
      }
      props.data.forEach((item, index) => {
        item.rowIndex = index;
      });
      containHeight.value = props.data.length * itemHeight();
    });

    const onScroll = (event) => {
      const { scrollTop, clientHeight } = viewport.value.wrapRef;
      startIndex.value = getStartIndex(scrollTop);
      startOffset.value = getStartOffset(startIndex.value);
      endIndex.value = getEndIndex();
      const distance = Math.abs(containHeight.value - clientHeight - scrollTop);
      emit('scroll', { distance, ...event });
    };

    const rowClick = (item, index) => {
      emit('row-click', item, index);
    };

    const rowClassHandle = (row, rowIndex) => {
      if (typeof props.rowClassName === 'function') {
        const data = props.rowClassName({ row, rowIndex });
        return data;
      }
      return props.rowClassName;
    };

    return {
      startIndex, endIndex, startOffset, viewport, onScroll, showViewRanges, containHeight, listRanges, rowClick, rowClassHandle,
    };
  },
});
</script>

<style lang="scss" scoped>
.virtual-list {
  position: relative;
}

.list-contain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.list-item {
  box-sizing: border-box;
}

</style>
