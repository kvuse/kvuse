/* eslint-disable import/no-unresolved */
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { SearchPlugin } from "vitepress-plugin-search";

const { resolve } = require('path');

export default defineConfig({
  plugins: [
    Components({
      include: [/\.vue/, /\.md/],
      dirs: 'example',
      allowOverrides: true,
    }),
    SearchPlugin({
      placeholder: "搜索内容!",
      buttonLabel: "搜索",
      previewLength: 62,
    }),
  ],
  resolve: {
    // 设置别名
    alias: {
      '@/example/element-plus': resolve(__dirname, 'example/element-plus/'),
      '@/vant': resolve(__dirname, 'vant/'),
    },
  },
  server: {
    fs: {
      allow: ['../..'],
    },
  },
});
