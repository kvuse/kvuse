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
}, d = (e, t) => {
  const { money: n, number: s } = t.modifiers;
  n ? e.innerHTML = `￥${Number(t.value).toFixed(2)}` : e.innerHTML = t.value || (s ? 0 : "-");
}, o = {
  mounted: (e, t) => d(e, t),
  updated: (e, t) => d(e, t)
}, a = {
  mounted: (e, t) => {
    e.handler = function() {
      const { delay: n = 800, content: s } = t.value || {};
      e.classList.add("is-disabled"), e.disabled = !0, s && (e.beforeText = e.textContent, e.innerHTML = s);
      const { once: r } = t.modifiers;
      r || (e.timer = setTimeout(() => {
        e.classList.remove("is-disabled"), e.disabled = !1, s && (e.innerHTML = e.beforeText), e.beforeText = null, clearTimeout(e.timer), e.timer = null;
      }, n));
    }, e.addEventListener("click", e.handler);
  },
  updated(e) {
    e.addEventListener("click", e.handler);
  },
  unmounted: (e) => {
    e.removeEventListener("click", e.handler);
  }
}, u = {
  mounted: (e, t) => {
    e.handler = async function() {
      const { content: n = "请求中..." } = t.value || {};
      e.classList.add("is-disabled"), e.disabled = !0, n && (e.beforeText = e.textContent, e.innerHTML = n), await t.arg(), e.innerHTML = e.beforeText, e.classList.remove("is-disabled"), e.disabled = !1;
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
  a as vButton,
  u as vButtonRequest,
  i as vFocus,
  o as vParams
};
