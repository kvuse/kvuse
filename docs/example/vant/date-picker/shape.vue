<template>
  <kv-date-picker v-model="dateTime" shape="round-border" @confirm="confirmHandle"></kv-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const dateTime = ref({
  startTime: '',
  endTime: '',
});

const confirmHandle = (value) => {
  console.log('value: ', value);
};

</script>
