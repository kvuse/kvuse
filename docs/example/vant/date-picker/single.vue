<template>
  <kv-date-picker v-model="dateTime" shape="border" type="single" @confirm="confirmHandle"></kv-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const dateTime = ref(new Date());

const confirmHandle = (value) => {
  console.log('value: ', value);
};

</script>
