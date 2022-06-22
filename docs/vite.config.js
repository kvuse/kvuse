/* eslint-disable import/no-unresolved */
import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    Components({
      include: [/\.vue/, /\.md/],
      dirs: ".vitepress/components",
    }),
  ],
});
