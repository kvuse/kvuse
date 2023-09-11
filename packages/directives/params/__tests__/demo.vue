<template>
  <div>
    <div class="text" v-params="text"></div>
    <div class="number" v-params.number="numberText"></div>
    <div class="money" v-params.money="moneyText"></div>
    <button class="btn" @click="updatedText">change</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { vParams } from '../index';

const text = ref('');
const numberText = ref('');
const moneyText = ref('');

const updatedText = () => {
  text.value = 'updated';
  numberText.value = 2;
  moneyText.value = '123.45';
};

</script>

<style lang="scss" scoped>

</style>
