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
  },
  /**
   * 输入框自动获取焦点 更新和创建
   */
  autofocus: {
    mounted: (el) => {
      setTimeout(() => {
        el.querySelector('input').focus();
      }, 100);
    },
    updated: (el) => {
      setTimeout(() => {
        el.querySelector('input').focus();
      }, 100);
    },
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
      const { inter, point } = binding.modifiers;
      const pointNum = point ? binding.value : 2;
      const valFixed = value >= 0 ? `￥${Number(value).toFixed(pointNum)}` : `-￥${Math.abs(Number(value.toFixed(pointNum)))}`;
      if (inter) valText = value >= 0 ? `￥${value}` : `-￥${Math.abs(value)}`;
      else valText = value ? valFixed : '￥0.00';
      el.innerHTML = `${valText}`;
    },
    updated: (el, binding) => {
      const { point } = binding.modifiers;
      const pointNum = point ? binding.value : 2;
      const valText = binding.arg === 'value' && binding.value ? `￥${Number(binding.value).toFixed(pointNum)}` : el.textContent;
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
  /**
   * 键盘事件
   * @example
   * <div v-keyboard:[fn].focus="object"><div>  fn：执行的方法  object:{ buttonKey:'Enter' }
   * modifiers: { focus, dialog, any }
   * focus：输入框焦点下是否可用 dialog：是否是弹框可用 any: 监听所有键值
   */
  keyboard: {
    mounted: (el, binding) => {
      let lastTime = 0;
      el.handler = function (event) {
        const nowTime = Date.now();
        const currentKey = /^[a-zA-Z]{2,}/.test(event.key) ? event.key : event.key.toLocaleUpperCase();
        const { buttonKey, isCombination = 0 } = binding.value || {};
        const isHasEl = document.contains(el);
        const isFocused = event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT';
        if (!isHasEl) { document.removeEventListener('keydown', el.handler); return; }
        const { dialog, focus, any } = binding.modifiers;
        // any
        if (any && binding.arg) { binding.arg(event); return; }
        const isFast = nowTime - lastTime > 30; // 解决扫码枪回车和单键回车冲突
        const isDialogVisible = document.querySelector('.el-popup-parent--hidden') || document.querySelector('.is-message-box');
        lastTime = nowTime;
        if (isDialogVisible && !dialog) return;
        const modifierPressed = event.ctrlKey || event.metaKey;
        const isEqualKey = isCombination === +modifierPressed && buttonKey === currentKey;
        if ((!isFocused || focus) && isEqualKey && isFast) binding.arg && binding.arg(event);
      };
      document.addEventListener('keydown', el.handler);
    },
    updated(el) {
      document.addEventListener('click', el.handler);
    },
    unmounted: (el) => {
      document.removeEventListener('keydown', el.handler);
    },
  },
  button: {
    mounted: (el, binding) => {
      el.handler = function () {
        const { delay = 800 } = binding.value || {};
        const isHasEl = document.contains(el);
        if (!isHasEl) { document.removeEventListener('click', el.handler); return; }
        el.classList.add('is-disabled');
        el.disabled = true;
        const { once } = binding.modifiers;
        if (once) return;
        el.timer = setTimeout(() => {
          el.classList.remove('is-disabled');
          el.disabled = false;
          clearTimeout(el.timer);
        }, delay);
      };
      document.addEventListener('click', el.handler);
    },
    updated(el) {
      document.addEventListener('click', el.handler);
    },
    unmounted: (el) => {
      document.removeEventListener('click', el.handler);
    },
  },
};
