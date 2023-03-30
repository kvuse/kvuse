// directives.js
export const vOnClickActive = {
  mounted: (el, binding) => {
    const { activeName, className, defaultIndex } = binding.value || {};
    if (className && defaultIndex) {
      const totalListEl = document.querySelectorAll(`.${className}`);
      totalListEl[defaultIndex].classList.add(activeName);
    } else {
      const activeEl = document.querySelector(`.${activeName}`);
      if (!activeEl) el.classList.add(activeName);
    }
    el.handler = function () {
      const clickActiveEl = document.querySelector(`.${activeName}`);
      if (clickActiveEl) {
        clickActiveEl.classList.remove(activeName);
      }
      el.classList.add(activeName);
    };
    el.addEventListener('click', el.handler);
  },
  unmounted: (el) => {
    el.removeEventListener('click', el.handler);
  },
};
