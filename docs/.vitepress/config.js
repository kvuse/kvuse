import { defineConfig } from 'vitepress';
import { useItemList, useApiList,useVantList } from './configList';

const { componentsList, directiveList, otherList  } = useItemList();
const { apiList,apiDirectiveList } = useApiList();
const {vantComponets} = useVantList()

export default defineConfig({
  lang: 'en-CN',
  title: 'kvuse',
  description: 'vue3常用的组件以及API',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/kvuse/logo.svg', type: 'image/svg+xml' }],
    ['link', {
      rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16',
    }],
    ['meta', { name: 'keywords', content: 'component, element-plus, vant, kvuse, api, composition' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
  ],
  base:'/kvuse/',
  lastUpdated: true,
  themeConfig: {
    logo: './logo.svg',

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
        activeMatch:'/components/',
        items: [
          {
            text: 'elementPlus组件',
            link: '/components/element-plus/',
            activeMatch: '/element-plus/',
          },
          {
            text: 'vant组件',
            link: '/components/vant/',
            activeMatch: '/vant/',
          },
        ],
      },
      { text: 'API', link: '/api/', activeMatch: 'api' },
      // { text: 'Config', link: '/config/' },
    ],

    sidebar: {
      // TODO: bring sidebar of apis and config back
      '/api/': [
        {
          text: 'API',
          items: apiList,
        },
        {
          text: '自定义指令',
          items: apiDirectiveList,
        },
      ],
      '/components/element-plus/': [
        {
          text: '组件',
          items: componentsList,
        },
        {
          text: '自定义指令',
          items: directiveList,
        },
        {
          text: '其他',
          items: otherList,
        },
      ],
      '/components/vant/': [
        {
          text: '组件',
          items: vantComponets,
        },
        {
          text: '更新日志',
          items: directiveList,
        },
      ],
     
    },
  },
});
