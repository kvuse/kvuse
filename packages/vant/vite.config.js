import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line import/no-unresolved

const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'kvuse-vant',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'vueRouter'],
      output: {
        assetFileNames: 'index.[ext]',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
