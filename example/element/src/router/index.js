// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routesModules = import.meta.glob('../views/**/router/*.js', { eager: true });
const modules = [];
Object.keys(routesModules).forEach((key) => {
  modules.push(...routesModules[key].default);
});

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/about',
    children: [
      ...modules,
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
