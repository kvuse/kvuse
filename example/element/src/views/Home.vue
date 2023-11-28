<template>
  <div class="home flex">
    <el-menu :default-active="activeIndex" class="el-menu-demo flex-shrink" mode="vertical" @select="handleSelect" v-if="showMenu">
      <el-menu-item :index="item.path" v-for="item in menuList" :key="item.path" class="menu-item">
        {{ item.name }}
      </el-menu-item>
    </el-menu>
    <el-container>
      <router-view />
    </el-container>
  </div>
  <k-tabs />
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

// 使用router
const route = useRoute();
const router = useRouter();

// 获取路由信息
// 详情 https://juejin.cn/post/6972087154398724127#heading-4
onMounted(() => {
  console.log('route: ', route);
});

const activeIndex = ref('collect');
const handleSelect = (key) => {
  activeIndex.value = key;
  router.push(key);
};

const menuList = ref([
  { name: '前台', path: 'collect' },
  { name: '关于', path: 'about' },
]);

// 是否开发环境
const showMenu = computed(() => import.meta.env.MODE === 'development');

</script>

<style lang="scss" scoped>
.el-menu-demo {
  height: 100%;
  width: 120px;

  .el-menu-item {
    text-align: center;
  }
}

.overflow-x {
  overflow-x: hidden;
}

.el-container {
  padding: 20px;
}
</style>
