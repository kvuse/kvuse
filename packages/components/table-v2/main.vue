<template>
  <div class="table-v2 el-table">
    <div class="flex el-table__cell table-bodder-bottom">
      <template v-for="(item, index) in tableColumn" :key="index">
        <slot name="header">
          <div class="flex1">
            {{ item.label }}
          </div>
        </slot>
      </template>
    </div>
    <virtualList :data="tableData">
      <template #default="{ row }">
        <slot name="content">
          <div class="flex el-table__cell table-bodder-bottom">
            <template v-for="(item, index) in tableColumn" :key="index">
              <div class="flex1">
                {{ row[item.prop] }}
              </div>
            </template>
          </div>
        </slot>
      </template>
    </virtualList>
  </div>
</template>

<script>
import { defineComponent, toRefs } from 'vue';
import virtualList from '../virtual-list';
import propsValue from './propsValue';

export default defineComponent({
  name: 'KTableV2',
  components: { virtualList },
  props: propsValue,
  setup(props) {
    console.log('props: ', props);
    return { ...toRefs(props) };
  },
});
</script>

<style lang="scss" scoped>
.table-bodder-bottom {
  border-bottom: 1px solid var(--el-table-border-color);
}
</style>
