<template>
  <div class="flex">
    <div class="flex-shrink">
      <div class="collapse-contain border-radius flex-center">
        <div v-show="!isShow">
          点击左侧按钮显示内容
        </div>
        <ul class="content" v-show="isShow">
          <li>我见众生皆草木</li>
          <li>唯有见你是青山</li>
          <li>愿有岁月可回首</li>
          <li>且以你我共白头</li>
        </ul>
        <k-collapse-button position="left" @click="isShow = !isShow" />
      </div>
    </div>
    <div class="flex-shrink">
      <div class="collapse-contain border-radius flex-center">
        <div v-show="!isShow1">
          点击下侧按钮显示内容
        </div>
        <ul class="content" v-show="isShow1">
          <li>我见众生皆草木</li>
          <li>唯有见你是青山</li>
          <li>愿有岁月可回首</li>
          <li>且以你我共白头</li>
        </ul>
        <k-collapse-button position="bottom" @click="isShow1 = !isShow1" />
      </div>
    </div>
    <div class="flex-shrink">
      <div class="collapse-contain border-radius flex-center">
        <div v-show="!isShow2">
          点击右侧按钮显示内容
        </div>
        <ul class="content" v-show="isShow2">
          <li>我见众生皆草木</li>
          <li>唯有见你是青山</li>
          <li>愿有岁月可回首</li>
          <li>且以你我共白头</li>
        </ul>
        <k-collapse-button position="right" :style="{top:'10px'}" @click="isShow2 = !isShow2" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(true);
const isShow1 = ref(true);
const isShow2 = ref(true);

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
