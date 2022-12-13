<template>
  <div class="width-180">
    <kv-tree v-model="data" v-model:select="selectId" theme="#409eff" @change="changeHandle" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  {
    name: 'Level one 1',
    id: 1,
    child: [
      {
        name: 'Level two 1-1',
        id: 11,
        child: [
          {
            name: 'Level three 1-1-1',
            id: 111,
          },
        ],
      },
    ],
  },
  {
    name: 'Level one 2',
    id: 2,
    child: [
      {
        name: 'Level two 2-1',
        id: 21,
        child: [
          {
            name: 'Level three 2-1-1',
            id: 211,
          },
        ],
      },
      {
        name: 'Level two 2-2',
        id: 22,
        child: [
          {
            name: 'Level three 2-2-1',
            id: 221,
          },
        ],
      },
    ],
  },
  {
    name: 'Level one 3',
    id: 3,
    child: [
      {
        name: 'Level two 3-1',
        id: 31,
        child: [
          {
            name: 'Level three 3-1-1',
            id: 311,
          },
        ],
      },
      {
        name: 'Level two 3-2',
        id: 32,
        child: [
          {
            name: 'Level three 3-2-1',
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
