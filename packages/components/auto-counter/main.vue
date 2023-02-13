<template>
  <div class="auto-counter">
    <span class="mr5">{{ prefix }}</span>
    <span class="span-text" ref="spanText">{{ autoinit ? '' : setDeimals(textValue) }}</span>
    <span class="ml5">{{ suffix }}</span>
  </div>
</template>

<script>
import {
  defineComponent, computed, onMounted, onUpdated, ref,
} from 'vue';

export default defineComponent({
  name: 'KAutoCounter',
  props: {
    modelValue: { type: [Number, String], default: 0 },
    start: { type: Number, default: 0 },
    end: { type: Number, default: Infinity },
    autoinit: { type: Boolean, default: true },
    prefix: { type: String, default: '' },
    suffix: { type: String, default: '' },
    decimals: { type: Number, default: 0 },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const textValue = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });

    const setDeimals = (num) => (props.decimals ? Number(num).toFixed(props.decimals) : num);

    const spanText = ref(null);

    // add and minus
    const updateMinusData = (isAdd = true) => {
      const counter = spanText.value;
      const tmp = +counter.innerText;
      const changeData = +textValue.value / 200;
      const isAddOrMinis = (isAdd && tmp < Number(textValue.value)) || (!isAdd && tmp > Number(textValue.value));
      if ((isAdd && tmp > props.end) || tmp < props.start) return;
      if (isAddOrMinis) {
        setTextValue(counter, isAdd ? tmp + changeData : tmp - changeData, isAdd);
      } else counter.interText = setDeimals(textValue.value);
    };

    const setTextValue = (counter, finiaVal, isAdd = true) => {
      const minusValue = finiaVal < props.start ? props.start : `${props.decimals ? finiaVal : Math.floor(finiaVal)}`;
      const addValue = finiaVal > props.end ? props.end : `${props.decimals ? finiaVal : Math.ceil(finiaVal)}`;
      counter.innerText = isAdd ? setDeimals(addValue) : setDeimals(minusValue);
      const timer = setTimeout(() => {
        clearTimeout(timer);
        if (isAdd) updateMinusData();
        else updateMinusData(false);
      }, 5);
    };

    onMounted(() => {
      const counter = spanText.value;
      if (counter && props.autoinit) {
        counter.innerText = setDeimals(props.start);
        updateMinusData();
      }
    });

    onUpdated(() => {
      if (props.autoinit) {
        const tmp = +spanText.value.innerText;
        updateMinusData(tmp < Number(textValue.value));
      }
    });

    return { textValue, spanText, setDeimals };
  },
});
</script>

<style lang="scss" scoped>

</style>
