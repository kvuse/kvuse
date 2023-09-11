export const vButton = {
  mounted: (el, binding) => {
    el.handler = function () {
      const { delay = 800, content } = binding.value || {};
      el.classList.add('is-disabled');
      el.disabled = true;
      if (content) {
        el.beforeText = el.textContent;
        el.innerHTML = content;
      }
      const { once } = binding.modifiers;
      if (once) return;
      el.timer = setTimeout(() => {
        el.classList.remove('is-disabled');
        el.disabled = false;
        if (content) el.innerHTML = el.beforeText;
        el.beforeText = null;
        clearTimeout(el.timer);
        el.timer = null;
      }, delay);
    };
    el.addEventListener('click', el.handler);
  },
  updated(el) {
    el.addEventListener('click', el.handler);
  },
  unmounted: (el) => {
    el.removeEventListener('click', el.handler);
  },
};
