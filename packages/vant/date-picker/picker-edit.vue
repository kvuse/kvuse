<template>
  <div class="picker-edit flex-align-center flex" :class="[borderClasses]" v-bind="$attrs">
    <div class="edit-content">
      <div class="left-icon">
        <van-icon name="underway-o" v-if="$attrs.showIcon || true" />
      </div>
    </div>
    <input class="edit-control" :value="dateTime" disabled placeholder="开始时间" />
  </div>
</template>

<script setup>
import { computed, useAttrs } from 'vue';
import { Icon as VanIcon } from 'vant';
import { useCalendar } from './useCalendar';

const props = defineProps({
  modelValue: { type: [String, Date], default: '' },
  showFormat: { type: String, default: 'YYYY-MM-DD' },
});

const emit = defineEmits(['update:modelValue']);

const { formarData, setStringToDate } = useCalendar();

const attrs = useAttrs();
const dateTime = computed({
  get: () => (props.modelValue ? formarData(setStringToDate(props.modelValue), attrs.showFormat ?? props.showFormat) : ''),
  set: (value) => emit('update:modelValue', value),
});

const borderClasses = computed(() => ({
  'picker-border': ['round-border', 'border'].includes(attrs.shape),
  'picker-border-round': ['round-border', 'round'].includes(attrs.shape),
}));

</script>

<style lang="scss">
.calendar-line {
  height: 1px;
  background-color: #333;
  align-self: center;
}

.picker-edit {
  padding: 0 var(--van-padding-xs) 0 0;
  height: var(--van-search-input-height);
  background: var(--van-search-content-background);
  font-size: var(--van-font-size-md);

  .edit-content {
    padding-left: var(--van-padding-sm);
    border-radius: var(--van-radius-sm);
    color: var(--van-search-left-icon-color);
    margin-right: var(--van-padding-base);
  }

  .edit-control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    color: var(--van-field-input-text-color);
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
    user-select: auto;
  }
}

.picker-border {
  border: var(--van-button-border-width) solid var(--van-button-default-border-color);
  background: #fff;
  border-radius: var(--van-radius-md);
}

.picker-border-round {
  border-radius: var(--van-radius-max);
}

</style>
