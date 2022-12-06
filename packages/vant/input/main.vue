<template>
  <div class="flex-center k-input">
    <span>{{ prefix }}</span>
    <van-field v-model="inputValue" :type="type" v-bind="$attrs" :formatter="formatter" />
    <span>{{ suffix }}</span>
  </div>
</template>

<script>
import { Field as VanField } from 'vant';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'KvInput',
  components: { VanField },
  /**
    * @param1 { ?number } point 小数点后几位 :point="2"
    * @param2 { ?string } type 输入框的类型 digit 只能输入整数
    * @param3 { ?string } prefix 内容前 显示标识
    * @param4 { ?string } suffix 内容后 显示标识
    * @param5 { ?number } min 最小值
    * @param5 { ?number } max 最大值
    */
  props: {
    modelValue: { type: [Number, String], default: '' },
    point: { type: Number, default: 2 },
    type: { type: String, default: 'number' },
    prefix: { type: String, default: '' },
    suffix: { type: String, default: '' },
    min: { type: Number, default: Number.NEGATIVE_INFINITY },
    max: { type: Number, default: Number.POSITIVE_INFINITY },
  },
  emits: ['update:modelValue', 'clear'],
  setup(props, { emit }) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });

    const formatter = (val) => {
      if (props.type !== 'number') return val;
      let value = val;
      if (value.substr(0, 1) === '0' && value.length === 2 && !value.includes('.')) value = value.substr(1, value.length);
      // const reg = new RegExp(`^\\d+(\\.\\d{0,${props.point}})?`, 'g');
      // value = value.match(reg)?.at(0) ?? '';
      const reg = new RegExp(`[^0-9]{0,1}(\\d*(?:\\.\\d{0,${props.point}})?).*$`, 'g');
      value = value.replace(reg, '$1') ?? '';
      if (Number(value) < props.min) return props.min;
      if (Number(value) > props.max) return props.max;
      return value;
    };

    return {
      inputValue, formatter,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
