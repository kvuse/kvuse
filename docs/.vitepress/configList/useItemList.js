export function useItemList(){
  
  const componentsList = [
    {
      text: '开始',
      link: '/components/element-plus/guide',
    },
    {
      text: 'Layout 布局',
      link: '/components/element-plus/layout',
    },
    {
      text: 'Button 按钮',
      link: '/components/element-plus/button',
    },
    {
      text: 'Input 输入框',
      link: '/components/element-plus/input',
    },
    {
      text: 'InputNumber 数字输入框',
      link: '/components/element-plus/input-number',
    },
    {
      text: 'Tabs 标签页',
      link: '/components/element-plus/tabs',
    },
    {
      text: 'breadcrumb 面包屑',
      link: '/components/element-plus/breadcrumb',
    },
    {
      text: 'Pagination 分页',
      link: '/components/element-plus/pagination',
    },
    {
      text: 'Table 表格',
      link: '/components/element-plus/table',
    },
    // {
    //   text: 'Table-v2 表格',
    //   link: '/components/element-plus/table-v2',
    // },
    {
      text: 'BatchTable 批量表格',
      link: '/components/element-plus/batch-table',
    },
    {
      text: 'Dialog 对话框',
      link: '/components/element-plus/dialog',
    },
    {
      text: 'Picker 添加选择器',
      link: '/components/element-plus/picker',
    },
    {
      text: 'Tooltip 消息提示',
      link: '/components/element-plus/tooltip',
    },
    {
      text: 'DatePicker 时间选择',
      link: '/components/element-plus/date-picker',
    },
    {
      text: 'NumberKeyboard 数字输入框',
      link: '/components/element-plus/number-keyboard',
    },
    {
      text: 'VirtualList 虚拟列表',
      link: '/components/element-plus/virtual-list',
    },
    {
      text: 'AutoCounter 数字动效',
      link: '/components/element-plus/auto-counter',
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