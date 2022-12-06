<template>
  <div class="k-table bg-white mt10 p20">
    <div class="table-content">
      <div class="table-header flex">
        <template v-for="item in columns" :key="item.prop">
          <div class="flex1" :style="alignStyle">
            {{ item.label }}
          </div>
        </template>
      </div>
      <div class="table-body flex">
        <div v-for="column in columns" :key="column.prop" class="flex1 column-item">
          <div class="mt10 body-item" :style="alignStyle" v-for="(item,index) in data" :key="index" @click="clickRow(item,index)">
            <slot :row="item" :index="index">
              <slot
                :name="column.custom ?? column.prop" :row="item" :index="index"
                v-if="$slots[column?.custom ??column?.prop ]"
              />
              <span v-else>{{ item[column.prop] }}</span>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'KvTable',
  props: {
    align: { // 对齐方式
      type: String,
      default: 'left',
      validate: (value) => ['left', 'center', 'right'].includes(value),
    },
    columns: {
      type: Array,
      default: () => [
        { label: '姓名', prop: 'name' },
        { label: '提成占比', prop: 'rate' },
        { label: '提成金额', prop: 'money' },
      ],
    },
    data: {
      type: Array,
      default: () => [
        { name: '123', rate: 10, money: 20 },
        { name: '456', rate: 20, money: 40 },
      ],
    },
  },
  emits: ['row-click'],
  setup(props, { emit }) {
    const alignStyle = computed(() => `text-align:${props.align}`);
    const clickRow = (row, index) => emit('row-click', row, index);
    return { alignStyle, clickRow };
  },
});
</script>

<style lang="scss" scoped>
.k-table {
  .body-item {
    line-height: 24px;
  }
}
</style>
