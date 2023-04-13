/* eslint-disable import/no-unresolved */
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { SearchPlugin } from "vitepress-plugin-search";

import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      include: [/\.vue/, /\.md/],
      dirs: 'example',
      allowOverrides: true,
    }),
    SearchPlugin(),
  ],
  resolve: {
    // 设置别名
    alias: {
      '@/example/element-plus': path.resolve(__dirname, 'example/element-plus/'),
      '@/vant': path.resolve(__dirname, 'vant/'),
      '@/components': path.resolve(__dirname, '../packages/components/'),
      '@/core': path.resolve(__dirname, '../packages/core/'),
      '@/kvant': path.resolve(__dirname, '../packages/vant/'),
    },
  },
  build: {
    rollupOptions: {
      external: ['vue/server-renderer'],
    },
    chunkSizeWarningLimit: 1500,
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
