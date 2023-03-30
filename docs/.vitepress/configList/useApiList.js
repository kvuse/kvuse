

export function useApiList(){

  const apiList = [
    {
      text: '开始',
      link: '/api/',
    },
    {
      text: 'useCommon',
      link: '/api/common',
    },
    {
      text: 'useRequest',
      link: '/api/request',
    },
    {
      text: 'usePage',
      link: '/api/page',
    },
    {
      text: 'useMessage',
      link: '/api/message',
    },
    {
      text: 'useForm',
      link: '/api/form',
    },
    {
      text: 'useFilter',
      link: '/api/filter',
    },
  ]

  const apiDirectiveList = [
    {
      text: 'onClickActive',
      link: '/api/click-active',
    },
  ]

  return { apiList,apiDirectiveList }
}