import { defineConfig } from 'vitepress'
import { useItemList } from './config/useItemList'

const { componentsList } = useItemList()

export default defineConfig({
  lang: 'en-CN',
  title: 'kvuse',
  description: 'vue3常用的组件以及API',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo1.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    ['meta', { name: 'keywords', content: 'vitest, vite, test, coverage, snapshot, react, vue, preact, svelte, solid, lit, ruby, cypress, puppeteer, jsdom, happy-dom, test-runner, jest, typescript, esm, tinypool, tinyspy, c8, node' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'mask-icon', href: '/logo1.svg', color: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
  ],
  // base:'/docs/',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo1.svg',

    editLink: {
      pattern: 'https://github.com/kvuse/kvuse/master/docs',
    },

    socialLinks: [
      // { icon: 'discord', link: discord },
      { icon: 'github', link: 'https://github.com/kvuse/kvuse' },
    ],

    nav: [
      { 
        text: '组件', 
        items: [
          { 
            text: 'elementPlus组件',
            link: '/components/',
            activeMatch: '/components/'
          }
        ]
       },
      // { text: 'API', link: '/api/' },
      // { text: 'Config', link: '/config/' },
    ],

    sidebar: {
      // TODO: bring sidebar of apis and config back
      '/': [
        {
          text: '组件',
          items: componentsList,
        },
        {
          text: '自定义指令',
          items: [
            {
              text: 'v-focus',
              link: '/directives/',
            },
          ],
        },
      ],
    },
  },
})