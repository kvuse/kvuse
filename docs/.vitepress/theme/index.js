import { h } from "vue";
import Theme from "vitepress/theme";
import "../style/main.css";
import "../style/vars.css";
import HomePage from "../components/HomePage.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElIconModules from "@element-plus/icons-vue";
import vuecode from "../components/vueCode.vue";
import demo from "../components/Demo.vue";
import { KUI } from "kui-next";
import "../../../styles/common.scss";

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      "home-features-after": () => h(HomePage),
    });
  },
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.use(KUI);
    app.component("Demo", demo);
    app.component("vuecode", vuecode);
    Object.keys(ElIconModules).forEach((iconName) => {
      if (Reflect.has(ElIconModules, iconName)) {
        const item = ElIconModules[iconName];
        app.component(iconName, item);
      }
    });
  },
};
