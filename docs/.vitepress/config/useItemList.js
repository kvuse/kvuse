export function useItemList(){

  const componentsList = [
    {
      text: '开始',
      link: '/components/',
    },
    {
      text: 'button 按钮',
      link: '/components/button',
    },
    {
      text: 'input 输入框',
      link: '/components/input',
    },
  ]

  return { componentsList }
}