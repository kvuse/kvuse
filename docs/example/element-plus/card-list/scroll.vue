<template>
  <div class="card-basic">
    <k-card-list :data="data" row-class="shadow" @scroll="scrollHandle">
      <template #default="{ index }">
        <div class="flex-center card-row">{{ `list   ${index}` }}</div>
      </template>
    </k-card-list>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref(new Array(30).fill({ name: 12 }));

const scrollHandle = ({ distance }) => {
  setTimeout(() => {
    if (distance < 100 && data.value.length < 100) data.value = [...data.value, ...data.value];
  }, 1000);
};
</script>

<style lang="scss" scoped>
.card-basic {
  height: 400px;

  .card-row {
    height: 100px;
  }
}
</style>
