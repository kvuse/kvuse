<template>
  <el-date-picker v-model="dateTime" :type="type" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts" :format="pickerFormat" value-format="YYYY-MM-DD HH:mm:ss" :disabled-date="disabledDate" :default-time="defaultTime" :editable="false" v-bind="$attrs" @change="changeHandle" />
</template>

<script setup>
import { computed } from 'vue';

/**
 * @param {string} type daterange:日期  datetimerange:日期时间
 */
const props = defineProps({
  type: { type: String, default: 'daterange' },
  modelValue: { type: [String, Array], default: () => [] },
});

const pickerFormat = computed(() => (props.type === 'datetimerange' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'));

const getDateResult = (day) => {
  const start = new Date();
  const end = new Date();
  start.setTime(start.getTime() - 3600 * 1000 * 24 * day);
  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);
  return props.type === 'date' ? start : [start, end];
};

const shortcuts = [
  {
    text: '最近一周',
    value: () => getDateResult(7),
  },
  {
    text: '最近一个月',
    value: () => getDateResult(30),
  },
  {
    text: '最近三个月',
    value: () => getDateResult(90),
  },
];
const defaultTime = [new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59)];

const emit = defineEmits(['change', 'update:modelValue']);

const dateTime = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const disabledDate = (data) => data.getTime() > Date.now();

const changeHandle = (val) => emit('change', val);

</script>

<style lang="scss" scoped>
</style>
