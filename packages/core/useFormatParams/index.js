/**
 * 格式化参数对象
 * @param {object} params 参数对象
 * @param {array} excludeList 排除参数key值列表
 * @returns Object
 */
export function useFormatParams(params = {}, excludeList = []) {
  const currentParams = {};
  Object.keys(params).forEach((key) => {
    if (params[key] && !excludeList.includes(key)) currentParams[key] = params[key];
  });
  return currentParams;
}
