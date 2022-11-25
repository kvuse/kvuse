import { createApp } from 'vue';
import { KUI } from '@kvuse/vant';
import router from './router';
import store from './store';
import App from './App.vue';
import './styles/normalize.css';

const app = createApp(App);
app.use(router).use(store).use(KUI).mount('#app');
