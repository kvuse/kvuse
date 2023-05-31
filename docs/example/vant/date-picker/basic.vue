<template>
  <kv-date-picker v-model="dateTime"></kv-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const dateTime = ref({
  startTime: new Date(),
  endTime: new Date(),
});
</script>
