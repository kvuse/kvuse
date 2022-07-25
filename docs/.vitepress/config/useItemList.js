export function useItemList(){

  const componentsList = [
    {
      text: '开始',
      link: '/components/',
    },
    {
      text: 'Button 按钮',
      link: '/components/button',
    },
    {
      text: 'Input 输入框',
      link: '/components/input',
    },
    {
      text: 'Tabs 标签页',
      link: '/components/tabs',
    },
    {
      text: 'breadcrumb 面包屑',
      link: '/components/breadcrumb',
    },
    {
      text: 'Pagination 分页',
      link: '/components/pagination',
    },
    {
      text: 'Table 表格',
      link: '/components/table',
    },
    {
      text: 'BatchTable 批量表格',
      link: '/components/batch-table',
    },
    {
      text: 'Dialog 对话框',
      link: '/components/dialog',
    },
    {
      text: 'Picker 添加选择器',
      link: '/components/picker',
    },
  ]

  const directiveList = [
    {
      text: 'v-focus',
      link: '/directives/',
    },
    {
      text: 'v-autofocus',
      link: '/directives/autofocus',
    },
    {
      text: 'v-money',
      link: '/directives/money',
    },
    {
      text: 'v-params',
      link: '/directives/params',
    },
  ]

  return { componentsList,directiveList }
}