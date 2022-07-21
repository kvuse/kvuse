import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { KUI } from '@kvuse/components';
import * as ElIconModules from '@element-plus/icons-vue';
import router from './router';
import store from './store';
import App from './App.vue';
import './styles/normalize.css';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(router).use(store).use(ElementPlus).use(KUI)
  .mount('#app');

// 统一注册Icon图标
Object.keys(ElIconModules).forEach((iconName) => {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName];
    app.component(iconName, item);
  }
});
