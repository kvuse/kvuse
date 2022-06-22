<template>
  <div class="page-right mt20" v-if="total > size">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" v-model:currentPage="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="size" :layout="layoutList" :total="total" :small="small" v-bind="$attrs" />
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'KPage',
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
  },
  emits: ['update:modelValue', 'update:size', 'current-change', 'size-change', 'change'],
  setup(props, { emit }) {
    const currentPage = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit('update:modelValue', value);
      },
    });
    const layoutList = computed(() => {
      const list = ['total', 'sizes', 'prev', 'pager', 'next', 'jumper'];
      if (!props.showSize) list.splice(1, 1);
      return list.join(',');
    });
    const handleSizeChange = (val) => {
      currentPage.value = 1;
      emit('update:size', val);
      emit('size-change', val);
      emit('change', { page: currentPage.value, size: val });
    };
    const handleCurrentChange = (val) => {
      emit('current-change', val);
      emit('change', { page: val, size: props.size });
    };
    return {
      currentPage, layoutList, handleSizeChange, handleCurrentChange,
    };
  },
});

</script>

<style lang="scss" scoped>
.page-right {
  display: flex;
  justify-content: flex-end;
}
</style>
