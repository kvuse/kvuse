import { createApp } from 'vue';
import { KVant } from '@kvuse/vant';
import router from './router';
import store from './store';
import App from './App.vue';
import './styles/normalize.css';
import 'vant/es/toast/style';

const app = createApp(App);
app.use(router).use(store).use(KVant).mount('#app');
