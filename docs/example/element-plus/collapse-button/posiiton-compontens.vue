<template>
  <div class="collapse-contain border-radius flex-center">
    <div v-show="!isShow">
      点击右侧显示内容
    </div>
    <ul class="content" v-show="isShow">
      <li>我见众生如草木</li>
      <li>唯有见你是青山</li>
      <li>愿有岁月可回首</li>
      <li>且以你我共白头</li>
    </ul>
    <k-collapse-button v-bind="$attrs" @click="isShow = !isShow" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(true);

</script>

<style lang="scss" scoped>
.collapse-contain {
  margin: 20px;
  padding: 20px;
  border: 1px solid #eaeefb;
  max-width: 300px;
  min-height: 80px;
}

</style>
