/* eslint-disable import/no-unresolved */
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';

const { resolve } = require('path');

export default defineConfig({
  plugins: [
    Components({
      include: [/\.vue/, /\.md/],
      dirs: 'example',
      allowOverrides: true,
    }),
  ],
  serve: {
    resolve: {
      // 设置别名
      alias: {
        '@': resolve(__dirname, 'example/'),
      },
    },
  },
});
