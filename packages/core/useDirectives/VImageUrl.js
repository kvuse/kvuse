import { useImage } from '../useImage';

const setImageSrc = (el, binding, vnode) => {
  const { getImageUrl } = useImage();
  const { floder, name } = binding.value || {};
  const srcUrl = getImageUrl(name, floder, vnode?.ctx);
  el.setAttribute('src', srcUrl);
};

export const VImageUrl = {
  mounted: (el, binding, vnode) => setImageSrc(el, binding, vnode),
  updated: (el, binding, vnode) => setImageSrc(el, binding, vnode),
};
