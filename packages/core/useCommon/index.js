import {
  ref, reactive, computed, watch, watchEffect, onMounted, nextTick, onUnmounted, getCurrentInstance,
} from 'vue';

export function useCommon() {
  const instance = getCurrentInstance();
  const { globalProperties } = instance.appContext.config;
  const {
    $route, $router, $pinia, $store,
  } = globalProperties;
  const route = $route;
  const router = $router;

  const routerName = computed(() => route.name);

  const loadPage = (name, params) => {
    if (params) router.push({ path: name, ...params });
    else if (name.includes('/')) router.push(name);
    else router.push({ name });
  };

  const replacePage = (name, params) => {
    if (params) router.replace({ path: name, ...params });
    else if (name.includes('/')) router.replace(name);
    else router.replace({ name });
  };

  const isDev = computed(() => import.meta.env.MODE === 'development');

  return {
    route, router, nextTick, ref, reactive, computed, watch, watchEffect, onMounted, onUnmounted, routerName, loadPage, isDev, replacePage, pinia: $pinia, store: $store, globalProperties,
  };
}
