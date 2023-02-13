<template>
  <div class="width-240">
    <k-auto-counter v-model="count" :end="60" class="font-20 font-bold" />
    <p class="color-99">
      设置end：60结束
    </p>
    <div class="mt20">
      <k-button type="primary" @click="setNum">
        设置随机数
      </k-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(10);

const setNum = () => {
  count.value = Math.ceil(Math.random() * 100);
  console.log('count.value: ', count.value);
};
</script>
