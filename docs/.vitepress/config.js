import { defineConfig } from 'vitepress'
import { version } from '../package.json'
import { mdPlugin } from './config/plugins'

export default defineConfig({
  lang: 'en-CN',
  title: 'kui-next',
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
  lastUpdated: true,
  markdown: {
    config: (md) => mdPlugin(md),
  },
  themeConfig: {
    logo: '/logo1.svg',

    editLink: {
      repo: 'Happylife56/kui-next',
      branch: 'main',
      dir: 'docs',
      text: 'Suggest changes to this page',
    },

    socialLinks: [
      // { icon: 'discord', link: discord },
      { icon: 'github', link: 'https://github.com/Happylife56/kui-next' },
    ],

    nav: [
      { 
        text: '组件', 
        items: [
          { 
            text: 'elementPlus组件',
            link: '/components/'
          }
        ]
       },
      // { text: 'API', link: '/api/' },
      // { text: 'Config', link: '/config/' },
      {
        text: `v${version}`,
        items: [
          // {
          //   text: 'Release Notes ',
          //   link: releases,
          // },
          // {
          //   text: 'Contributing ',
          //   link: contributing,
          // },
        ],
      },
    ],

    sidebar: {
      // TODO: bring sidebar of apis and config back
      '/': [
        {
          text: '组件',
          items: [
            {
              text: '开始',
              link: '/components/',
            },
            {
              text: 'button',
              link: '/components/button',
            },
          ],
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