/* eslint-disable import/no-unresolved */
// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import { KUI } from '@kvuse/components';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import '@kvuse/components/dist/index.css';
import { KVant } from '@kvuse/vant';
import '@kvuse/vant/dist/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import './style.css';
import Layout, { globals } from './components';

export default {
  ...Theme,
  Layout,
  enhanceApp({ app }) {
    app.use(ElementPlus, { locale: zhCn });
    app.use(KUI);
    app.use(Vant);
    app.use(KVant);
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  },
};
