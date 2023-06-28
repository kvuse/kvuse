<template>
  <div class="k-date-picker flex-align-center">
    <shortcuts v-bind="$attrs" v-if="showShortcuts && type === 'range'" :shortcuts-value="shortcutsValue" @confirm="confirmShortcuts" />
    <pickerEdit v-bind="$attrs" v-model="pickerData" @click="show = true" v-if="['single'].includes($attrs.type)" />
    <van-row justify="space-between" v-else>
      <van-col span="11" class="calendar-col" @click="show = true">
        <pickerEdit v-bind="$attrs" v-model="pickerData.startTime" />
      </van-col>
      <van-col span="1" class="calendar-line"></van-col>
      <van-col span="11" class="calendar-col" @click="show = true">
        <pickerEdit placeholder="结束日期" v-bind="$attrs" v-model="pickerData.endTime" />
      </van-col>
    </van-row>
    <Calendar teleport="body" class="overflow" v-model:show="show" type="range" @confirm="onConfirm" allow-same-day :max-date="maxDate" :min-date="minDate" :formatter="formatter" safe-area-inset-bottom :default-date="defaultDate" v-bind="$attrs" />
  </div>
</template>

<script setup>
import { Col as VanCol, Row as VanRow, Calendar } from 'vant';
import {
  ref, computed, useAttrs, nextTick,
} from 'vue';
import { useCalendar } from './useCalendar';
import pickerEdit from './picker-edit.vue';
import shortcuts from './shortcuts.vue';

defineOptions({
  name: 'KvDatePicker',
});
const props = defineProps({
  modelValue: { type: [Object, String], default: () => ({}) },
  showShortcuts: { type: Boolean, default: false },
  shortcutsValue: { type: Number, default: -1 },
});

const emit = defineEmits(['update:modelValue', 'confirm']);

const pickerData = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const show = ref(false);

const attrs = useAttrs();

const type = computed(() => attrs.type ?? 'range');

const {
  minDate, maxDate, initalDate, formarData, formatter, setStringToDate,
} = useCalendar(attrs, pickerData);

const defaultDate = ref(initalDate.value);

const onConfirm = (data) => {
  const propsType = type.value;
  const valueFormat = attrs.valueFormat ?? 'YYYY-MM-DD HH:mm:ss';
  if (propsType === 'range') {
    const startTime = formarData(data[0], valueFormat);
    const endTime = valueFormat === 'YYYY-MM-DD HH:mm:ss' ? `${formarData(data[1], 'YYYY-MM-DD')} 23:59:59` : `${formarData(data[1], valueFormat)}`;
    pickerData.value = { startTime, endTime };
    defaultDate.value = [new Date(startTime), new Date(endTime)];
  } else if (propsType === 'multiple') {
    const list = data.map((item) => `${formarData(item, valueFormat)}`);
    pickerData.value = list;
    defaultDate.value = list;
  } else {
    pickerData.value = formarData(data, valueFormat);
    defaultDate.value = setStringToDate(pickerData.value);
  }
  show.value = false;
  nextTick(() => emit('confirm', pickerData.value));
};

const confirmShortcuts = ({ value, select }) => {
  const startTime = `${formarData(value, 'YYYY-MM-DD')} 00:00:00`;
  const endTime = select === 1 ? startTime : `${formarData(new Date(), 'YYYY-MM-DD')} 23:59:00`;
  pickerData.value = { startTime, endTime };
  onConfirm([startTime, endTime]);
};

</script>

<style lang="scss">

</style>
