/* eslint-disable import/no-unresolved */
import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';
import VueMacros from 'unplugin-vue-macros/vite';

export default defineConfig({
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: Vue(),
      },
    }),
  ],
  test: {
    environment: 'jsdom',
  },
});
