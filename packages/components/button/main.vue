<template>
  <!--  按钮防多次点击 -->
  <el-button :disabled="!buttonStatus || disabled" :style="buttonStyle" :click-state="clickState" v-bind="$attrs" @click.stop="onclick">
    <slot />
    <i class="el-icon-lock el-icon--right" v-if="iconLock" />
  </el-button>
</template>

<script>
import { ref, computed, defineComponent } from 'vue';
import { ElButton } from 'element-plus';

export default defineComponent({
  name: 'KButton',
  components: { ElButton },
  props: {
    // 是否可以点击
    clickState: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    // 是否有权限
    iconLock: { type: Boolean, default: false },
  },
  emits: ['click'],
  setup(props, { emit, attrs }) {
    const buttonStatus = ref(true);
    const stopTime = ref(null);

    const onclick = () => {
      if (buttonStatus.value) {
        buttonStatus.value = false;
        emit('click');
      }
      setButton();
    };
    const setButton = () => {
      // 添加一个定时器，点击之后延时1.5s，防二次点击后台报错
      clearTimeout(stopTime.value);
      stopTime.value = setTimeout(() => {
        buttonStatus.value = true;
      }, 800);
    };

    const buttonStyle = computed(() => {
      const { border } = props;
      const { type = 'text' } = attrs;
      if (border) {
        return {
          backgroundColor: 'transparent',
          color: `var(--el-color-${type})`,
        };
      }
      return {};
    });

    return { onclick, buttonStatus, buttonStyle };
  },
});
</script>
