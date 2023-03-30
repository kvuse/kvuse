<template>
  <div class="card-basic">
    <k-card-list :data="data">
      <template #default="{ index }">
        <div class="flex-center card-row">{{ `list   ${index}` }}</div>
      </template>
    </k-card-list>
  </div>
</template>

<script setup>

const data = new Array(30).fill({ name: 12 });
</script>

<style lang="scss" scoped>
.card-basic {
  height: 400px;

  .card-row {
    height: 100px;
  }
}
</style>
