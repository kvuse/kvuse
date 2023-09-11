export const vFocus = {
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
};
