<template>
  <div class="home">
    <van-tabs v-model:active="active" @click-tab="handleSelect">
      <van-tab :title="item.path" v-for="item in menuList" :key="item.path" />
    </van-tabs>
    <router-view />
  </div>
</template>

<script setup>

// 使用router
const route = useRoute();
const router = useRouter();

const active = ref(route.name);
// 获取路由信息
// 详情 https://juejin.cn/post/6972087154398724127#heading-4
onMounted(() => {
  console.log('route: ', route);
});

console.log('active: ', active);
const handleSelect = ({ title }) => {
  router.push(title);
};

const menuList = ref([
  { name: '前台', path: 'collect' },
  { name: '关于', path: 'about' },
]);

// 是否开发环境
const showMenu = computed(() => import.meta.env.MODE === 'development');
console.log('showMenu: ', showMenu);

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
