import { ref, computed } from 'vue';
import { useDateFormat, useNow } from '@vueuse/core';

export function useCalendar(attrs, pickerData) {
  const currentDay = useDateFormat(useNow(), 'YYYY-MM-DD')?.value;
  const startData = ref(`${currentDay} 00:00:00`);
  const endDate = ref(`${currentDay} 23:59:59`);
  const maxDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  const setStringToDate = (value) => (value && typeof value === 'string' ? new Date(value) : value);

  const currentYear = new Date().getFullYear();
  const minDate = new Date(currentYear - 3, 1, 1);
  const initalDate = computed(() => {
    const propsType = attrs.type ?? 'range';
    if (propsType === 'range') {
      const { startTime, endTime } = pickerData.value || {};
      return [setStringToDate(startTime) ?? new Date(), setStringToDate(endTime) ?? new Date()];
    }
    if (propsType === 'multiple') return null;
    return setStringToDate(pickerData.value) ?? new Date();
  });

  const formatter = (day) => {
    if (new Date().getTime() === new Date(day.date).getTime()) day.type = 'disabled';
    return day;
  };

  const formarData = (time, type = 'YYYY-MM-DD HH:mm:ss') => useDateFormat(time, type)?.value;

  return {
    minDate, maxDate, initalDate, startData, endDate, useDateFormat, formarData, formatter, setStringToDate,
  };
}
