import { h } from 'vue';
import Theme from 'vitepress/theme';
import '../style/main.scss';
import '../style/vars.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElIconModules from '@element-plus/icons-vue';
import { KUI } from '@kvuse/components';
import { KVant } from '@kvuse/vant';
import '@kvuse/components/dist/index.css';
import '@kvuse/vant/dist/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import { useRoute } from 'vitepress';
import VTable from '../components/VTable.vue';
import Demo from '../components/Demo.vue';
import HomePage from '../components/HomePage.vue';

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomePage),
    });
  },
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.use(KUI);
    app.use(Vant);
    app.use(KVant);
    app.component('Demo', Demo);
    app.component('VTable', VTable);
    Object.keys(ElIconModules).forEach((iconName) => {
      if (Reflect.has(ElIconModules, iconName)) {
        const item = ElIconModules[iconName];
        app.component(iconName, item);
      }
    });
  },
};
