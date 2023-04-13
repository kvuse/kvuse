import { defineConfig } from 'vitepress';
import { pagefindPlugin } from 'vitepress-plugin-pagefind';
import { sidebar, nav } from './configs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'kvuse',
  description: 'vue3常用的组件以及API  ',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/kvuse/logo.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'keywords', content: 'component, element-plus, vant, kvuse, api, composition' }],
    ['link', { rel: 'mask-icon', href: '/kvuse/logo.svg', color: '#ffffff' }],
  ],
  base: '/kvuse/',
  lastUpdated: true,
  cleanUrls: true,
  outDir: './.vitepress/dist2',
  themeConfig: {
    logo: '/logo.svg',
    localSearch: true,
    editLink: {
      pattern: 'https://kvuse.github.io/kvuse/element-plus/',
    },
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kvuse/kvuse' },
    ],
  },
  vite: {
    plugins: [pagefindPlugin()],
  },
});
