export function useFilters() {
  /**
   * 数据类型
   * @param {number|string} val
   * @returns string
   */
  const moneyPoint = (val, arg) => {
    if (val) {
      let value = val;
      if (typeof val === 'string') value = Number(val);
      return value.toFixed(2);
    }
    if (arg) return 0;
    return '0.00';
  };
    /**
   * 金额类型
   * @param {number|string} val
   * @returns string
   */
  const moneyType = (val) => `￥${moneyPoint(val)}`;
  /**
   * 数据类型
   * @param {number} val
   * @returns number
   */

  const dataType = (val) => {
    if (val) {
      return val;
    }
    return 0;
  };

  /**
   * 没有参数的处理
   * @param {number|string} val
   * @returns string
   */
  const paramsType = (val) => {
    if (val !== undefined) {
      return val;
    }
    return '-';
  };
  /**
   * 限制小数点后两位
   * @param {number|string} val
   * @returns string
   */
  const rounding = (val) => Number(val.toFixed(2));

  return {
    moneyType, moneyPoint, dataType, paramsType, rounding,
  };
}
