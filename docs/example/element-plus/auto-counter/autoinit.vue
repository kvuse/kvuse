<template>
  <div class="width-240">
    <div class="flex">
      <span>关闭动效：</span>
      <k-auto-counter v-model="count" :autoinit="false" class="font-20 font-bold" />
    </div>
    <div class="mt20">
      <k-button type="primary" @click="setNum">
        设置随机数
      </k-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(100);

const setNum = () => {
  count.value = Math.ceil(Math.random() * 100);
};
</script>
