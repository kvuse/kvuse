import {
  ref, reactive, computed, watch, watchEffect, onMounted, nextTick, onUnmounted, getCurrentInstance,
} from 'vue';

export function useCommon() {
  const instance = getCurrentInstance();
  console.log('instance.appContext.config.globalProperties: ', instance.appContext.config.globalProperties);
  const {
    $route, $router, $loading, $message, $pinia, $store,
  } = instance.appContext.config.globalProperties;
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
    route, router, nextTick, ref, reactive, computed, watch, watchEffect, onMounted, onUnmounted, routerName, loadPage, isDev, replacePage, $loading, $message, pinia: $pinia, store: $store,
  };
}
