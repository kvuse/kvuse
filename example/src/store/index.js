import { createPinia } from 'pinia';
import persistedstate from 'pinia-persistedstate';

const pinia = createPinia();

pinia.use(
  persistedstate({
    storage: window.sessionStorage, // 修改存储的状态
    // paths: ['dataStore', 'dataStore.count']  // Keep state, use module id, or state
  }),
);

pinia.use(({ store, pinia: { state } }) => {
  store.$subscribe(() => {
    sessionStorage.setItem('pinia', JSON.stringify(state.value));
  }, { detached: true });
});

export default pinia;
