<template>
  <div class="flex flex1" :class="{'text-overflow':overflow}">
    <el-tooltip v-bind="$attrs" :placement="placement">
      <template #content>
        <slot name="content" />
      </template>
      <div class="flex-center" :class="{'text-overflow':overflow}">
        <slot />
        <el-icon class="ml5" v-if="showIcon">
          <slot name="icon">
            <warning />
          </slot>
        </el-icon>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Warning } from '@element-plus/icons-vue';
import { ElTooltip } from 'element-plus';

export default defineComponent({
  name: 'KTooltip',
  props: {
    placement: { type: String, default: 'top' },
    showIcon: { type: Boolean, default: false },
    overflow: { type: Boolean, default: false },
  },
  components: { Warning, ElTooltip },
});
</script>

<style lang="scss" scoped>
.ml5 {
  margin-left: 5px;
}
</style>
