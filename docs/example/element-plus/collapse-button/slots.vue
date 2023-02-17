<template>
  <div class="collapse-contain border-radius flex-center" :style="{width:isShow ? '300px' : '0px'}">
    <ul class="content" v-show="isShow">
      <li>我见众生皆草木</li>
      <li>唯有见你是青山</li>
      <li>愿有岁月可回首</li>
      <li>且以你我共白头</li>
    </ul>
    <k-collapse-button @click="isShow = !isShow">
      <div class="p10">
        {{ isShow ? '隐藏' : '显示' }}
      </div>
    </k-collapse-button>
  </div>
  <div class="ml20">
    点击右侧按钮{{ isShow ? '隐藏' :'显示' }}内容
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(true);

</script>

<style lang="scss" scoped>
.collapse-contain {
  margin: 20px;
  border: 1px solid #eaeefb;
  max-width: 300px;
  min-height: 80px;
}

.content {
  padding: 20px;
}
</style>
