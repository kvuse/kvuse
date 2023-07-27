<template>
  <div class="page-right mt20" v-if="showPage">
    <el-config-provider :locale="locale">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" v-model:currentPage="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="size" :layout="layoutList" :total="total" :small="small" :pager-count="pagerCount" />
    </el-config-provider>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

export default defineComponent({
  name: 'KPage',
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    pagerCount: { type: Number, default: 7 },
  },
  components: { ElConfigProvider },
  emits: ['update:modelValue', 'update:size', 'current-change', 'size-change', 'change'],
  setup(props, { emit }) {
    const locale = zhCn;
    const showPage = computed(() => {
      const { total, size, showSize } = props;
      return showSize ? true : total > size;
    });
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
      emit('change', { page: props.size === val ? currentPage.value : 1, size: val });
    };
    const handleCurrentChange = (val) => {
      emit('current-change', val);
      emit('change', { page: val, size: props.size });
    };
    return {
      locale, currentPage, layoutList, handleSizeChange, handleCurrentChange, showPage,
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
