<template>
  <!-- 基础输入框 -->
  <el-input v-model.trim="inputValue" v-bind="$attrs" @keyup.enter="searchContent" @change="changeValue">
    <template #append v-if="$slots.append">
      <slot name="append" />
    </template>
    <template #prepend v-if="$slots.prepend">
      <slot name="prepend" />
    </template>
    <template #prefix v-if="$slots.prefix">
      <slot name="prefix" />
    </template>
    <template #suffix v-if="$slots.suffix">
      <slot name="suffix" />
    </template>
  </el-input>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'KInput',
  props: {
    modelValue: { type: [String, Number], default: '' },
    /**
     * @param { ?number } point 小数点后几位
     * @example :point="2"
     * @param { ?string } 输入框的类型 integer 只能输入整数
     */
    point: { type: Number, default: 2 },
    type: { type: String, default: 'number' },
  },
  emits: ['change', 'update:modelValue', 'enter'],
  setup(props, { emit, attrs }) {
    const stopTime = ref(null);
    const keyupStatus = ref(true);
    const inputValue = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        changeInput(value);
      },
    });
    const changeInput = (val) => {
      let value = val;
      if (props.type === 'number') {
        value = value.replace(/[^\d.]/g, ''); // 清除“数字”和“.”以外的字符
        value = value.replace(/^\./g, ''); // 验证第一个字符是数字而不是.
        value = value.replace(/\.{2,}/g, '.'); // 只保留第一个. 清除多余的.
        value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
        if (value.indexOf('.') < 0 && value !== '') { // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
          if (value.substr(0, 1) === '0' && value.length === 2) {
            value = value.substr(1, value.length);
          }
        }

        if (value !== '') {
          if (value.indexOf('.') > 0) {
            if (props.point) { // 控制只能输入小数点后几位
              const reg = new RegExp(`^\\d+(\\.\\d{0,${props.point}})?`, 'g');
              value = (value.match(reg)[0]) || null;
            }
          }
        }
      } else if (props.type === 'integer') { // 只能输入整数
        value = value.replace(/[^\d]/g, '');
      } else if (props.type === 'intText') { // 只能输入整数或者字母
        value = value.replace(/[^\w]/g, '');
      }
      if (attrs.max !== undefined && value && Number(value) > Number(attrs.max)) value = attrs.max;
      if (attrs.min !== undefined && value && Number(value) < Number(attrs.min)) value = attrs.min;
      emit('update:modelValue', value);
    };
    // 搜索内容
    const searchContent = () => {
      if (keyupStatus.value) {
        keyupStatus.value = false;
        if (inputValue.value) emit('enter');
      }
      setButton();
    };
    const changeValue = (value) => {
      emit('change', value);
    };
    const setButton = () => {
      // 添加一个定时器，点击之后延时0.8s，防二次点击后台报错
      clearTimeout(stopTime.value);
      stopTime.value = setTimeout(() => {
        keyupStatus.value = true;
      }, 800);
    };
    return {
      inputValue, changeValue, searchContent,
    };
  },
});

</script>
