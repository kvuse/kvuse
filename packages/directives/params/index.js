const setParams = (el, binding) => {
  const { money, number } = binding.modifiers;
  if (money) el.innerHTML = `￥${(Number(binding.value)).toFixed(2)}`;
  else el.innerHTML = binding.value || (number ? 0 : '-');
};

export const vParams = {
  mounted: (el, binding) => setParams(el, binding),
  updated: (el, binding) => setParams(el, binding),
};
