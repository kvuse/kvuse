<template>
  <div class="table-header flex border-bottom p10">
    <template v-for="(item, index) in data" :key="index">
      <slot>
        <div class="flex1">
          {{ item.label }}
        </div>
      </slot>
    </template>
  </div>
</template>

<script setup>
defineProps({
  data: { type: Array, default: () => [] },
});
</script>

<style lang="scss" scoped>
</style>
