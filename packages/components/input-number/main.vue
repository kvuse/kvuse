<template>
  <div :class="['el-input-number',{ 'is-disabled': disabled },{ 'is-without-controls': !controls },size ? 'el-input-number--' + size : '']">
    <span v-if="controls" class="el-input-number__decrease" role="button" :class="{'is-disabled': minDisabled}" @click="clickBtnHandle('decrease')">
      <el-icon class="el-input__icon"><minus /></el-icon>
    </span>
    <span v-if="controls" class="el-input-number__increase" role="button" :class="{'is-disabled': maxDisabled}" @click="clickBtnHandle('increase')">
      <el-icon class="el-input__icon"><plus /></el-icon>
    </span>
    <k-input ref="input" v-model="currentValue" :disabled="disabled" :type="type" v-bind="$attrs" @blur="handleBlur" maxlength="6" @focus="handleFocus" @change="handleInputChange" @input="handleInput" @keyup.enter="handleKeyUp" />
  </div>
</template>

<script>
import {
  ref, computed, nextTick, watchEffect, defineComponent, watch,
} from 'vue';
import { Minus, Plus } from '@element-plus/icons-vue';
import KInput from '../input';

export default defineComponent({
  name: 'KInputNumber',
  components: { Minus, Plus, KInput },
  props: {
    modelValue: { type: [String, Number], default: '' },
    step: { type: Number, default: 1 },
    placeholder: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    controls: { type: Boolean, default: true },
    size: { type: String, default: 'default' },
    max: { type: Number, default: 999999 },
    min: { type: Number, default: 1 },
    type: { type: String, default: 'integer' },
  },
  emits: ['update:modelValue', 'blur', 'focus', 'enter', 'change'],
  setup(props, { emit }) {
    const currentValue = ref(1);
    const inputValue = ref(null);
    const bitEmpty = ref(false);

    const minDisabled = computed(() => props.modelValue <= props.min);
    const maxDisabled = computed(() => props.modelValue >= props.max);
    const numberValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit('update:modelValue', value);
      },
    });

    const handleBlur = (event) => emit('blur', event);
    const handleFocus = (event) => emit('focus', event);
    const handleKeyUp = (event) => emit('enter', event);

    const handleInputChange = (value) => {
      nextTick(() => {
        const newVal = value === '' ? undefined : Number(value);
        if (!Number.isNaN(newVal) || value === '') {
          setCurrentValue(newVal);
        }
      });
    };

    const handleInput = (value) => {
      bitEmpty.value = !value;
      inputValue.value = value;
    };

    const oldCurrentValue = ref(-1);
    watchEffect(() => {
      currentValue.value = props.modelValue;
    });

    watch(() => oldCurrentValue.value, (val) => {
      if (val < 0) {
        numberValue.value = props.modelValue;
        handleInputChange(currentValue.value);
      }
    }, { immediate: true });

    const clickBtnHandle = (type) => {
      const isPlus = type === 'increase';
      const isDisabled = isPlus ? maxDisabled.value : minDisabled.value;
      if (props.disabled || isDisabled) return;
      const isEmpty = bitEmpty.value ? 0 : numberValue.value;
      const currentVal = inputValue.value ? currentValue.value : isEmpty;
      const newVal = isPlus ? currentVal + props.step : currentVal - props.step;
      setCurrentValue(newVal);
    };

    const setCurrentValue = (value) => {
      inputValue.value = value;
      let newVal = value;
      if (oldCurrentValue.value === newVal) return;
      oldCurrentValue.value = value;
      if (newVal >= props.max) newVal = props.max;
      if (newVal <= props.min) newVal = props.min;
      if (inputValue.value === undefined) newVal = 1;
      emit('update:modelValue', newVal);
      emit('change', newVal, oldCurrentValue.value);
      currentValue.value = newVal;
    };
    return {
      currentValue, minDisabled, maxDisabled, handleBlur, handleFocus, handleKeyUp, handleInputChange, handleInput, clickBtnHandle,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
