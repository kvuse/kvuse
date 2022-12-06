export function useVantList(){
  
  const vantComponets = [
    {
      text: '开始',
      link: '/components/vant/',
    },
    {
      text: 'Layout 布局',
      link: '/components/vant/layout',
    },
    {
      text: 'Button 按钮',
      link: '/components/vant/button',
    },
    {
      text: 'Input 输入框',
      link: '/components/vant/input',
    },
  ]

  const vantDirectives = []

  return { vantComponets,vantDirectives }
}