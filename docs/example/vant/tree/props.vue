<template>
  <div class="width-180">
    <kv-tree v-model="data" v-model:select="selectId" :props="defaultProps" theme="#409eff" @change="changeHandle" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const defaultProps = {
  name: 'label', child: 'children', disabled: 'disabled',
};

const data = ref([
  {
    label: 'Level one 1',
    id: 1,
    children: [
      {
        label: 'Level two 1-1',
        id: 11,
        children: [
          {
            label: 'Level three 1-1-1',
            id: 111,
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    id: 2,
    disabled: true,
    children: [
      {
        label: 'Level two 2-1',
        id: 21,
        children: [
          {
            label: 'Level three 2-1-1',
            id: 211,
          },
        ],
      },
      {
        label: 'Level two 2-2',
        id: 22,
        children: [
          {
            label: 'Level three 2-2-1',
            id: 221,
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    id: 3,
    children: [
      {
        label: 'Level two 3-1',
        id: 31,
        children: [
          {
            label: 'Level three 3-1-1',
            id: 311,
          },
        ],
      },
      {
        label: 'Level two 3-2',
        id: 32,
        children: [
          {
            label: 'Level three 3-2-1',
            id: 321,
          },
        ],
      },
    ],
  },
]);

const selectId = ref(1);

// change
const changeHandle = (item) => {
  console.log('item: ', item);
};

</script>

<style lang="scss" scoped>

</style>
