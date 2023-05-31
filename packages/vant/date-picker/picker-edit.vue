<template>
  <van-config-provider :theme-vars="themeVars">
    <van-search :class="[borderClasses,'picker-edit']" v-model="dateTime" placeholder="开始时间" disabled v-bind="$attrs">
      <template #left-icon>
        <van-icon name="underway-o" v-if="$attrs.showIcon || true" />
      </template>
    </van-search>
  </van-config-provider>
</template>

<script setup>
import { computed, useAttrs } from 'vue';
import { Search as VanSearch, Icon as VanIcon } from 'vant';
import { useCalendar } from './useCalendar';

const props = defineProps({
  modelValue: { type: [String, Date], default: '' },
  showFormat: { type: String, default: 'YYYY-MM-DD' },
});

const themeVars = {
  searchPadding: '10px 0px',
};

const emit = defineEmits(['update:modelValue']);

const { formarData } = useCalendar();

const attrs = useAttrs();
const dateTime = computed({
  get: () => (props.modelValue ? formarData(props.modelValue, attrs.showFormat ?? props.showFormat) : ''),
  set: (value) => emit('update:modelValue', value),
});

const borderClasses = computed(() => ({
  'van-search-border': ['round-border', 'border'].includes(attrs.shape),
  'van-search-border-round': attrs.shape === 'round-border',
}));

</script>

<style lang="scss">
.calendar-line {
  height: 1px;
  background-color: #333;
  align-self: center;
}

.van-search-border {
  .van-search__content {
    border: var(--van-button-border-width) solid var(--van-button-default-border-color);
    background: none;
    border-radius: var(--van-radius-md);
  }

  .van-field__control:disabled {
    cursor: pointer;
  }
}

.van-search-border-round {
  .van-search__content {
    border-radius: var(--van-radius-max);
  }
}

.picker-edit {
  .van-field__control:disabled {
    -webkit-text-fill-color: var(--van-text-color);
  }

  .van-field__control::placeholder {
    -webkit-text-fill-color: var(--van-field-input-disabled-text-color);
  }
}
</style>
