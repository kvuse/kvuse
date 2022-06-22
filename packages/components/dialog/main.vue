<template>
  <el-dialog :title="title" v-model="dialogVisible" :custom-class="customClassName" v-bind="$attrs" @close="closeHandle" @open="openHandler">
    <slot>
      <span>这是一段信息</span>
    </slot>
    <template #footer v-if="showFooter">
      <slot name="footer">
        <span class="dialog-footer">
          <el-button size="large" @click="dialogVisible = false">取 消</el-button>
          <el-button size="large" type="primary" @click="confirmHandler">确 定</el-button>
        </span>
      </slot>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'KDialog',
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: '提示' },
    showFooter: { type: Boolean, default: true },
    customClass: { type: String, default: '' },
  },
  emits: ['update:modelValue', 'confirm', 'open', 'close'],
  setup(props, { emit }) {
    const dialogVisible = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });

    const customClassName = computed(() => {
      if (props.customClass) return props.customClass;
      return !props.showFooter ? 'custom-dialog no-footer' : 'custom-dialog';
    });

    const closeHandle = () => {
      emit('close');
      // eslint-disable-next-line no-restricted-globals
      parent.window.postMessage('closeMask()', '*');
      window.top.postMessage('closeMask()', '*');
    };

    const openHandler = () => {
      emit('open');
      // eslint-disable-next-line no-restricted-globals
      parent.window.postMessage('openMask()', '*');
      window.top.postMessage('openMask()', '*');
    };

    const confirmHandler = () => {
      emit('confirm');
    };

    return {
      dialogVisible, customClassName, closeHandle, openHandler, confirmHandler,
    };
  },
});
</script>

<style lang="scss">
.custom-dialog {
  .el-dialog__body {
    padding: 6px 20px 20px;
  }
}

.no-footer {
  .el-dialog__footer {
    padding: 0;
  }
}
</style>
