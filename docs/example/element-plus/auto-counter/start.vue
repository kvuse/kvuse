<template>
  <div class="width-240">
    <k-auto-counter v-model="count" :start="20" class="font-20 font-bold" />
    <p class="color-99">
      设置start从10开始
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

const count = ref(50);

const setNum = () => {
  count.value = Math.ceil(Math.random() * 100);
  console.log('count.value: ', count.value);
};
</script>
