<template>
  <config-provider>
    <selectType v-bind="$attrs" v-if="selectType" />
    <datePicker v-bind="$attrs" v-else />
  </config-provider>
</template>

<script>
import { defineComponent } from 'vue';
import configProvider from '../config-provider/main.vue';
import selectType from './selectType.vue';
import datePicker from './datePicker.vue';

export default defineComponent({
  name: 'KDatePicker',
  props: {
    selectType: { type: Boolean, default: false }, // 是否选择模式（年月日）
    // daterange: { type: Boolean, default: false }, // 是否选择模式下 是否日期范围
  },
  components: { configProvider, selectType, datePicker },
  setup() {},
});
</script>

<style lang="scss" scoped>

</style>
