import {
  ref, computed, onMounted, onUnmounted, watch,
} from 'vue';

export function useCardList(props, emit) {
  const scrollbarRef = ref(null);
  // 列表总高度
  const containHeight = ref(100);
  const cardRowRef = ref(null);

  const rowHeight = () => document.querySelector('.card-row')?.offsetHeight ?? 10;
  const rowWidth = () => document.querySelector('.card-row')?.offsetWidth ?? 10;

  const startIndex = ref(0);
  const endIndex = ref(20);
  const startOffset = ref(0);
  const rowCellNum = ref(props.columns);

  const getStartIndex = (scrollTop) => Math.ceil(scrollTop / rowHeight());

  const getEndIndex = () => {
    const { clientHeight = 100 } = scrollbarRef.value.wrapRef || {};
    const currentEndIndex = Math.floor(clientHeight / (rowHeight() + props.gridGap)) + startIndex.value;
    return currentEndIndex || 1;
  };

  const list = computed(() => props.data.map((item, index) => ({ ...item, rowIndex: index })));

  const viewListRanges = computed(() => list.value.filter((item, index) => index >= startIndex.value * rowCellNum.value && index < endIndex.value * rowCellNum.value));

  const setContainHeight = () => {
    const { clientHeight = 100 } = scrollbarRef.value.wrapRef || {};
    const gridGapHeight = (clientHeight / rowHeight()) * props.gridGap;
    containHeight.value = Math.floor((props.data.length / rowCellNum.value) * rowHeight() + gridGapHeight);
  };

  const onScroll = (event) => {
    const { scrollTop, clientHeight } = scrollbarRef.value.wrapRef;
    const distance = containHeight.value - clientHeight - scrollTop;
    emit('scroll', { distance, ...event });
    startIndex.value = getStartIndex(scrollTop);
    startOffset.value = scrollTop + props.gridGap;
    endIndex.value = getEndIndex();
  };

  watch(() => props.data, () => {
    setContainHeight();
    endIndex.value = getEndIndex();
  });

  const resetViewport = () => {
    if (cardRowRef.value) {
      const { clientWidth = 500 } = scrollbarRef.value.wrapRef;
      rowCellNum.value = Math.floor(clientWidth / rowWidth()) || 1;
      setContainHeight();
      startOffset.value = 0;
      startIndex.value = 0;
      scrollbarRef.value.setScrollTop(0);
      endIndex.value = getEndIndex();
    }
  };

  onMounted(() => {
    resetViewport();
    window.addEventListener('resize', resetViewport);
  });
  onUnmounted(() => {
    window.removeEventListener('resize', resetViewport);
  });

  return {
    scrollbarRef, containHeight, cardRowRef, onScroll, startOffset, viewListRanges, resetViewport,
  };
}
