const i = {
  mounted: (e) => {
    setTimeout(() => {
      e.querySelector("input").focus();
    }, 100);
  },
  updated: (e) => {
    setTimeout(() => {
      e.querySelector("input").focus();
    }, 100);
  }
}, s = (e, t) => {
  const { money: o, number: n } = t.modifiers;
  o ? e.innerHTML = `￥${Number(t.value).toFixed(2)}` : e.innerHTML = t.value || (n ? 0 : "-");
}, u = {
  mounted: (e, t) => s(e, t),
  updated: (e, t) => s(e, t)
}, d = {
  mounted: (e, t) => {
    e.handler = function() {
      const { delay: o = 800, content: n } = t.value || {};
      e.classList.add("is-disabled"), e.disabled = !0, n && (e.beforeText = e.textContent, e.innerHTML = n);
      const { once: r } = t.modifiers;
      r || (e.timer = setTimeout(() => {
        e.classList.remove("is-disabled"), e.disabled = !1, n && (e.innerHTML = e.beforeText), e.beforeText = null, clearTimeout(e.timer), e.timer = null;
      }, o));
    }, e.addEventListener("click", e.handler);
  },
  updated(e) {
    e.addEventListener("click", e.handler);
  },
  unmounted: (e) => {
    e.removeEventListener("click", e.handler);
  }
};
export {
  d as vButton,
  i as vFocus,
  u as vParams
};
