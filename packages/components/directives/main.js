export const directives = {
  /**
   * 输入框得到焦点
   */
  focus: {
    mounted: (el) => {
      setTimeout(() => {
        el.querySelector('input').focus();
      }, 100);
    },
    // updated: (el) => {
    //   setTimeout(() => {
    //     el.querySelector('input').focus();
    //   }, 100);
    // },
  },
  /**
   * 返参金额的处理
   * @param { string } inter 数字浮点类型
   * @example v-money.point 小数点后两位
   * @example v-money=“value” 更新后的数据
  */
  money: {
    mounted: (el, binding) => {
      const value = el.textContent;
      if (typeof Number(value) !== 'number') return;
      let valText = '￥0';
      const { inter } = binding.modifiers;
      const valFixed = value >= 0 ? `￥${Number(value).toFixed(2)}` : `-￥${Math.abs(Number(value.toFixed(2)))}`;
      if (inter) valText = value >= 0 ? `￥${value}` : `-￥${Math.abs(value)}`;
      else valText = value ? valFixed : '￥0.00';
      el.innerHTML = `${valText}`;
    },
    updated: (el, binding) => {
      const valText = binding.value ? `￥${Number(binding.value).toFixed(2)}` : el.textContent;
      el.innerHTML = valText;
    },
  },
  /**
   * 参数为空的处理
  */
  params: {
    mounted: (el) => {
      const value = el.textContent;
      el.innerHTML = `${value}` || '-';
    },
  },
  /**
   * title
   * 文字超出显示，绑定title，鼠标hover事件显示内容
   */
  title: {
    mounted: (el) => {
      el.parentNode.style.position = 'relative';
      const titleDiv = document.createElement('div');
      titleDiv.innerHTML = el.textContent;
      titleDiv.setAttribute('class', 'title-hover');
      const bdDiv = document.createElement('div');
      bdDiv.setAttribute('class', 'border-div');
      titleDiv.appendChild(bdDiv);
      el.setAttribute('class', 'text-ellipsis');
      el.onmouseover = () => {
        el.parentNode.appendChild(titleDiv);
      };
      el.onmouseout = () => {
        el.parentNode.removeChild(titleDiv);
      };
    },
  },
};
