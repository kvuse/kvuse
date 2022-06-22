<template>
  <!--  按钮防多次点击 -->
  <el-button :disabled="!buttonStatus || disabled" :click-state="clickState" v-bind="$attrs" @click.stop="onclick">
    <slot />
    <i class="el-icon-lock el-icon--right" v-if="iconLock" />
  </el-button>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'KButton',
  props: {
    // 是否可以点击
    clickState: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    // 是否有权限
    iconLock: { type: Boolean, default: false },
  },
  emits: ['click'],
  setup(props, { emit }) {
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
    return { onclick, buttonStatus };
  },
});
</script>
