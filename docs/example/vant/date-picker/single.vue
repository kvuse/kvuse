<template>
  <kv-date-picker v-model="dateTime" shape="border" type="single" @confirm="confirmHandle"></kv-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const dateTime = ref('2023-06-20');

const confirmHandle = (value) => {
  console.log('value: ', value);
};

</script>
