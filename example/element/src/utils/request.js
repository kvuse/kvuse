import { useRequest } from '@kvuse/core';

const { $api } = useRequest({
  // 请求拦截器
  beforeResponse(response) {
    console.log('response.config.method: ', response.config.method);
    return response;
  },
  // 报错处理
  errorResponse(error) {
    if (error.code === 20001) {
      sessionStorage.clear();
      // eslint-disable-next-line no-restricted-globals
      parent.window.postMessage('outLogin()', '*');
    }
  },
});

export default $api;
