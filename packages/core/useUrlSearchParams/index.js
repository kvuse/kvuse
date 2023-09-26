/**
  * 获取链接参数
  * @param {string} url 链接
*/
export function useUrlSearchParams(url) {
  const searchParams = (url ?? window.location.href).split('?')[1];
  const params = {};
  if (searchParams) {
    const urlParamsList = searchParams.split('&');
    for (let i = 0; i < urlParamsList.length; i += 1) {
      const [key, value] = urlParamsList[i].split('=');
      params[key] = value;
    }
  }
  return params;
}
