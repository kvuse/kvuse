<template>
  <div class="date-shortcuts mr10 flex-shrink">
    <van-button :round="round" @click="show = true" :class="{'bg-button':bgButton}">{{ current }}</van-button>
    <van-popup v-model:show="show" position="bottom" safe-area-inset-bottom>
      <van-picker :columns="columns" @confirm="onConfirm" @cancel="show = false" />
    </van-popup>
  </div>
</template>

<script setup>
import {
  Button as VanButton, Popup as vanPopup, Picker as vanPicker,
} from 'vant';
import {
  ref, onMounted, computed, useAttrs,
} from 'vue';

const show = ref(false);
const columns = [
  { text: '昨天', value: 1 },
  { text: '今天', value: 0 },
  { text: '近7天', value: 7 },
  { text: '近一个月', value: 30 },
  { text: '近3个月', value: 90 },
];

const emit = defineEmits(['confirm', 'change']);

const props = defineProps({
  shortcutsValue: { type: Number, default: -1 },
});

const attrs = useAttrs();

const round = computed(() => ['round', 'round-border'].includes(attrs.shape));
const bgButton = computed(() => ['round', 'default'].includes(attrs.shape));

const current = ref('选择范围');

onMounted(() => {
  const currentItem = columns.find((item) => item.value === props.shortcutsValue);
  if (currentItem) {
    current.value = currentItem.text;
    onConfirm({ selectedValues: [currentItem.value], selectedOptions: [currentItem] });
  }
});

const onConfirm = ({ selectedValues, selectedOptions }) => {
  const [item] = selectedOptions;
  current.value = item.text;
  show.value = false;
  const [select] = selectedValues;
  const date = new Date();
  const dataTime = date.getTime() - 3600 * 1000 * 24 * select;
  emit('confirm', { value: dataTime, select });
};

</script>

<style lang="scss">
.date-shortcuts {
  .van-button--normal {
    height: 36px;
  }

  .bg-button {
    background: var(--van-search-content-background);
    border-color: transparent;
  }
}
</style>
