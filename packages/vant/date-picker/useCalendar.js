import { ref, computed } from 'vue';
import { useDateFormat, useNow } from '@vueuse/core';

export function useCalendar(attrs) {
  const currentDay = useDateFormat(useNow(), 'YYYY-MM-DD')?.value;
  const startData = ref(`${currentDay} 00:00:00`);
  const endDate = ref(`${currentDay} 23:59:59`);
  const maxDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  const currentYear = new Date().getFullYear();
  const minDate = new Date(currentYear - 3, 1, 1);
  const defaultDate = computed(() => {
    const propsType = attrs.type ?? 'range';
    if (propsType === 'range') return [new Date(), new Date()];
    if (propsType === 'multiple') return null;
    return new Date();
  });

  const formatter = (day) => {
    if (new Date().getTime() === new Date(day.date).getTime()) day.type = 'disabled';
    return day;
  };

  const formarData = (time, type = 'YYYY-MM-DD HH:mm:ss') => useDateFormat(time, type)?.value;

  return {
    minDate, maxDate, defaultDate, startData, endDate, useDateFormat, formarData, formatter,
  };
}
