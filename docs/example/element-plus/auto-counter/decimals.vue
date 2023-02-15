<template>
  <div class="width-240">
    <k-auto-counter v-model="count" prefix="小数点两位：" suffix="元" :decimals="2" class="font-20 font-bold mt20" />
    <div class="mt20">
      <k-button type="primary" @click="setNum">
        设置随机数
      </k-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(20);

const setNum = () => {
  count.value = Math.random() * 100;
};
</script>
