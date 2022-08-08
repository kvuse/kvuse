<template>
  <div class="date-picker flex">
    <el-select v-model="timeType" class="width-100 mr10" @change="changeTimeType">
      <el-option v-for="item in selectList" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <div>
      <datePicker v-model="dateTime" v-bind="$props" v-if="daterange && !timeType" @change="changeHandle" />
      <el-date-picker v-model="dateTime" :type="pickerType" :format="pickerFormat" value-format="YYYY-MM-DD HH:mm:ss" :placeholder="pickerPlaceholder" :disabled-date="disabledDate" :clearable="false" :editable="false" start-placeholder="开始日期" end-placeholder="结束日期" @change="changeHandle" v-else />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import datePicker from './datePicker.vue';

const props = defineProps({
  daterange: { type: Boolean, default: false }, // 是否选择模式下 是否日期范围
  modelValue: { type: [String, Array], default: () => [] },
});

const timeType = ref(0);
const selectList = ref([
  { value: 0, label: '日' },
  { value: 1, label: '周' },
  { value: 2, label: '月' },
  { value: 3, label: '年' },
]);

const dateTime = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const disabledDate = (data) => data.getTime() > Date.now();

const pickerFormat = computed(() => {
  const listMap = {
    0: 'YYYY-MM-DD', 1: 'YYYY 第 ww 周', 2: 'YYYY-MM', 3: 'YYYY',
  };
  return listMap[timeType.value];
});
const pickerType = computed(() => {
  const listMap = {
    0: props.daterange ? 'daterange' : 'date', 1: 'week', 2: 'month', 3: 'year',
  };
  return listMap[timeType.value];
});
const pickerPlaceholder = computed(() => {
  const { label } = selectList.value.filter((item) => item.value === timeType.value)[0];
  return `选择${label}`;
});

const emit = defineEmits(['change', 'update:modelValue']);

const currentDateTime = ref('');
watchEffect(() => {
  if (Array.isArray(dateTime.value)) {
    const [startTime, endTime] = dateTime.value;
    currentDateTime.value = [startTime, endTime];
  }
});

const changeTimeType = (type) => {
  if (type) {
    if (Array.isArray(dateTime.value)) {
      const [startTime] = dateTime.value;
      dateTime.value = startTime;
    }
  } else if (props.daterange) {
    dateTime.value = currentDateTime.value;
  }
  changeHandle();
};
const changeHandle = () => {
  emit('change', { type: timeType.value, time: dateTime.value });
};

</script>

<style lang="scss" scoped>

</style>
