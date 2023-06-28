<template>
  <kv-date-picker v-model="dateTime"></kv-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const dateTime = ref({
  startTime: new Date('2023-06-20 12:00:00'),
  endTime: new Date(),
});
</script>
