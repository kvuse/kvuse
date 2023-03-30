import {
  reactive, computed, watchEffect, getCurrentInstance, toRefs, nextTick, ref, watch, onMounted, onUnmounted,
} from 'vue';

export function useCommon() {
  const instance = getCurrentInstance();
  const { globalProperties } = instance.appContext.config;

  const {
    $route, $pinia, $store, $router,
  } = globalProperties;

  const router = $router;
  const route = $route;

  const globalParams = reactive({
    routeRef: $route,
  });

  watchEffect(() => {
    const { $route: _route } = globalProperties;
    globalParams.routeRef = _route;
  });

  const routerName = computed(() => globalParams.routeRef.name);
  const routeQuery = computed(() => globalParams.routeRef.query);
  const routeParams = computed(() => globalParams.routeRef.params);

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

  /**
   * 重置参数
   * @param {string} params 参数名称
   * @returns
   */
  const resetParams = (params) => instance.proxy[params];

  return {
    ...toRefs(globalParams), route, router, routeQuery, routeParams, routerName, loadPage, isDev, replacePage, globalProperties, resetParams, store: $store, pinia: $pinia, nextTick, ref, watch, onMounted, onUnmounted, watchEffect, getCurrentInstance, toRefs,
  };
}
