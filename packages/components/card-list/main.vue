<template>
  <el-scrollbar ref="scrollbarRef" data-test="card-list" v-bind="$attrs" always @scroll="onScroll">
    <div class="card-contain">
      <div class="card-wrap" :style="{height:`${containHeight}px`}"></div>
      <div class="card-list" :style="{ transform: `translate3d(0,${startOffset}px,0)` }">
        <div :class="[fixedColumn ? 'card-fixed-coumn' : 'card-content',{'fixed-width':width}]">
          <div class="card-row border-radius pointer" v-for="(item,index) in viewListRanges" :key="index" :class="[selectedId === item[keyId] ? 'select-style': '',bitNotAllowed(item) ?'not-allowed' : 'hover-style', rowClassStyle]" @click="clickHandle(item)" ref="cardRowRef" @mouseenter="$emit('mouseenter', item)" @mouseleave="$emit('mouseleave', item)">
            <div class="card-list-content">
              <slot :row="item" :index="item.rowIndex">{{ item.rowIndex }}</slot>
            </div>
            <div class="sign">
              <slot name="sign" :row="item" :index="item.rowIndex" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
import {
  defineComponent, ref, computed, watchEffect,
} from 'vue';
import { ElScrollbar } from 'element-plus';
import propsValue from './propsValue';
import { useCardList } from './useCardList';

export default defineComponent({
  name: 'KCardList',
  props: propsValue,
  components: { ElScrollbar },
  emits: ['click', 'mouseenter', 'mouseleave', 'update:modelValue', 'scroll'],
  setup(props, { emit }) {
    const calcnum = computed(() => `${Number((100 / props.columns).toFixed(1))}%`);
    const gridgap = computed(() => `${props.gridGap}px`);
    const columnwidth = computed(() => `${props.width}`);

    // 可选
    const bitNotAllowed = (item) => item.disabled || props.disabled;

    const rowClassStyle = computed(() => {
      if (props.rowClass === 'border') return 'border-row';
      if (props.rowClass === 'shadow') return 'box-shadow';
      return props.rowClass;
    });

    const selectedId = ref('');

    watchEffect(() => {
      selectedId.value = props.modelValue;
    });

    const clickHandle = (item) => {
      if (bitNotAllowed(item)) return;
      if (props.highlight) {
        selectedId.value = item[props.keyId];
        emit('update:modelValue', item[props.keyId]);
      }
      emit('click', item);
    };

    const {
      scrollbarRef, containHeight, cardRowRef, startOffset, viewListRanges, onScroll, resetViewport,
    } = useCardList(props, emit);

    return {
      calcnum, gridgap, columnwidth, rowClassStyle, clickHandle, selectedId, bitNotAllowed, scrollbarRef, containHeight, cardRowRef, startOffset, viewListRanges, onScroll, resetViewport,
    };
  },
});

</script>

<style lang="scss" scoped>
.card-contain {
  padding: 10px;
  position: relative;

  .card-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}

.card-list {
  .card-content,
  .card-fixed-coumn {
    display: grid;
    grid-gap: v-bind(gridgap);
    grid-template-columns: repeat(v-bind(columns), calc(v-bind(calcnum) - v-bind(gridgap)));
  }

  .fixed-width {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, v-bind(columnwidth)) !important;
  }

  .card-row {
    line-height: 1.4;
    overflow: hidden;
    position: relative;
  }

  .border-row {
    border: 1px solid var(--el-border-color-dark);
  }

  .box-shadow {
    box-shadow: var(--el-box-shadow-light);
  }

  .goods-img {
    height: v-bind(imgheight);
    width: 100%;
  }

  .card-img,
  .card-list-content {
    position: relative;

    .stock-contain {
      height: 150px;
      width: 100%;
      position: absolute;
      top: -5px;
      right: 0;
    }

    .nostock-icon {
      background-color: #000;
      border-radius: 50%;
      color: #fff;
      height: 100px;
      opacity: 0.55;
      width: 100px;
      z-index: 1;
    }
  }

  .commodity-contain {
    .stock-contain {
      height: 100px;
    }

    .nostock-icon {
      width: 80px;
      height: 80px;
    }
  }

  .img-container {
    .item-img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  .not-allowed {
    cursor: not-allowed;
  }

  .select-style {
    border: 1px solid var(--el-color-primary);

    // box-shadow: var(--el-box-shadow-light);
  }

  .hover-style {
    &:hover {
      // box-shadow: var(--el-box-shadow-light);
      border: 1px solid var(--el-color-primary);
      animation: pulse 0.4s ease-in-out;
    }
  }
}

@media screen and (max-width: 1650px) {
  .card-content {
    grid-template-columns: repeat(5, calc(20% - 20px)) !important;
  }
}

@media screen and (max-width: 1500px) {
  .card-content {
    grid-template-columns: repeat(4, calc(25% - 20px)) !important;
  }
}

@media screen and (max-width: 1400px) {
  .card-content {
    grid-template-columns: repeat(3, calc(33.3% - 20px)) !important;
  }
}

@media screen and (max-width: 1200px) {
  .card-content {
    grid-template-columns: repeat(2, calc(50% - 20px)) !important;
  }
}
</style>
