import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const { resolve } = require('path');

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'k-directives',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'vueRouter'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
