export function useUtils() {
  /**
   * 处理参数默认值
   * @param {number | string} value
   * @param {number | string} init 默认为0
   */
  const getFormatParams = (value, init = 0) => value ?? init;

  /**
   * 格式化金额输入框
   * @param {number} value
   * @param {number} pointer // 小数点后几位 默认小数点后2位
   * @returns number
   */
  const formatRadixPoint = (value, point = 2) => {
    const reg = new RegExp(`^\\d+(\\.\\d{0,${point}})?`, 'g');
    if (value.indexOf('.') > 0) return value.match(reg)?.[0];
    if (/(^0\d+)/.test(value)) return value.substr(1);
    return value;
  };

  return { getFormatParams, formatRadixPoint };
}
