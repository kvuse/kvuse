<template>
  <div class="collapse-button flex-center pointer" :style="collapseStyle" ref="collapse" @click="clickHandle">
    <slot>
      <el-icon :size="18" color="#999999">
        <CaretRight v-if="isCollapse" />
        <CaretLeft v-else />
      </el-icon>
    </slot>
  </div>
</template>

<script>
import {
  defineComponent, ref, onMounted, computed,
} from 'vue';
import { CaretLeft, CaretRight } from '@element-plus/icons-vue';
import { ElIcon } from 'element-plus';

export default defineComponent({
  name: 'KCollapseButton',
  components: { ElIcon, CaretLeft, CaretRight },
  props: {
    style: { type: Object, default: () => ({}) },
    position: { type: String, default: 'right' },
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const isCollapse = ref(false);

    const collapse = ref(null);
    onMounted(() => {
      const { parentNode } = collapse.value;
      parentNode.style.position = 'relative';
      parentNode.style.overflow = 'initial';
    });

    const collapseStyle = computed(() => {
      const { clientWidth, clientHeight } = collapse.value || {};

      const {
        top, right, width, height, left, bottom,
      } = props.style;
      const list = {
        right: {
          top: top ?? '50%',
          right: right ?? `-${clientWidth}px`,
          borderRadius: '0 5px 5px 0',
          marginTop: top ? '0px' : `-${Math.ceil(clientHeight / 2)}px`,
        },
        left: {
          top: top ?? '50%',
          left: left ?? `-${clientWidth}px`,
          borderRadius: '0 5px 5px 0',
          marginTop: top ? '0px' : `-${Math.ceil(clientHeight / 2)}px`,
          transform: slots?.default ? '' : 'rotate(180deg)',
        },
        top: {
          left: left ?? '50%',
          marginLeft: left ?? slots?.default ? `-${Math.ceil(clientWidth / 2)}px` : '0px',
          top: top ?? slots?.default ? `-${clientHeight}px` : `-${Math.ceil(clientHeight / 2 + clientWidth / 2)}px`,
          borderRadius: slots?.default ? '5px 5px 0 0' : '0 5px 5px 0',
          transform: slots?.default ? '' : 'rotate(-90deg)',
        },
        bottom: {
          left: left ?? '50%',
          bottom: bottom ?? slots?.default ? `-${clientHeight}px` : `-${Math.ceil(clientHeight / 2 + clientWidth / 2)}px`,
          marginLeft: left ?? slots?.default ? `-${Math.ceil(clientWidth / 2)}px` : '0px',
          borderRadius: slots?.default ? '0 0 5px 5px' : ' 0 5px 5px 0',
          transform: slots?.default ? '' : 'rotate(90deg)',
        },
      };
      return {
        width: width ?? slots?.default ? '' : '10px',
        height: height ?? slots?.default ? '' : '68px',
        ...list[props.position],
      };
    });

    const clickHandle = () => {
      isCollapse.value = !isCollapse.value;
      emit('click');
    };
    return {
      isCollapse, collapse, clickHandle, collapseStyle,
    };
  },
});
</script>

<style lang="scss" scoped>
.collapse-button {
  background-color: #e6e7ea;
  position: absolute;
  cursor: pointer;
  z-index: 10;
}
</style>
