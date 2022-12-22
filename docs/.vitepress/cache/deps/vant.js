import {
  Fragment,
  Teleport,
  Transition,
  computed2 as computed,
  createApp,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  isRef,
  isVNode,
  mergeProps,
  nextTick,
  onActivated,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  provide,
  reactive,
  ref,
  resolveDirective,
  unref,
  vShow,
  watch,
  watchEffect,
  withDirectives,
  withKeys
} from "./chunk-HHWHORSU.js";
import "./chunk-J43GMYXM.js";

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/utils/validate.mjs
var isDef = (val) => val !== void 0 && val !== null;
var isFunction = (val) => typeof val === "function";
var isObject = (val) => val !== null && typeof val === "object";
var isPromise = (val) => isObject(val) && isFunction(val.then) && isFunction(val.catch);
var isDate = (val) => Object.prototype.toString.call(val) === "[object Date]" && !Number.isNaN(val.getTime());
function isMobile(value) {
  value = value.replace(/[^-|\d]/g, "");
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}
var isNumeric = (val) => typeof val === "number" || /^\d+(\.\d+)?$/.test(val);
var isIOS = () => inBrowser ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/utils/basic.mjs
function noop() {
}
var extend = Object.assign;
var inBrowser = typeof window !== "undefined";
function get(object, path) {
  const keys = path.split(".");
  let result = object;
  keys.forEach((key) => {
    var _a;
    result = isObject(result) ? (_a = result[key]) != null ? _a : "" : "";
  });
  return result;
}
function pick(obj, keys, ignoreUndefined) {
  return keys.reduce((ret, key) => {
    if (!ignoreUndefined || obj[key] !== void 0) {
      ret[key] = obj[key];
    }
    return ret;
  }, {});
}
var isSameValue = (newValue, oldValue) => JSON.stringify(newValue) === JSON.stringify(oldValue);
var toArray = (item) => Array.isArray(item) ? item : [item];

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/utils/props.mjs
var unknownProp = null;
var numericProp = [Number, String];
var truthProp = {
  type: Boolean,
  default: true
};
var makeRequiredProp = (type) => ({
  type,
  required: true
});
var makeArrayProp = () => ({
  type: Array,
  default: () => []
});
var makeNumberProp = (defaultVal) => ({
  type: Number,
  default: defaultVal
});
var makeNumericProp = (defaultVal) => ({
  type: numericProp,
  default: defaultVal
});
var makeStringProp = (defaultVal) => ({
  type: String,
  default: defaultVal
});

// ../node_modules/.pnpm/@vant+use@1.4.3/node_modules/@vant/use/dist/index.esm.mjs
var inBrowser2 = typeof window !== "undefined";
function raf(fn2) {
  return inBrowser2 ? requestAnimationFrame(fn2) : -1;
}
function cancelRaf(id) {
  if (inBrowser2) {
    cancelAnimationFrame(id);
  }
}
function doubleRaf(fn2) {
  raf(() => raf(fn2));
}
var isWindow = (val) => val === window;
var makeDOMRect = (width2, height2) => ({
  top: 0,
  left: 0,
  right: width2,
  bottom: height2,
  width: width2,
  height: height2
});
var useRect = (elementOrRef) => {
  const element = unref(elementOrRef);
  if (isWindow(element)) {
    const width2 = element.innerWidth;
    const height2 = element.innerHeight;
    return makeDOMRect(width2, height2);
  }
  if (element == null ? void 0 : element.getBoundingClientRect) {
    return element.getBoundingClientRect();
  }
  return makeDOMRect(0, 0);
};
function useToggle(defaultValue = false) {
  const state = ref(defaultValue);
  const toggle = (value = !state.value) => {
    state.value = value;
  };
  return [state, toggle];
}
function useParent(key) {
  const parent = inject(key, null);
  if (parent) {
    const instance4 = getCurrentInstance();
    const { link, unlink, internalChildren } = parent;
    link(instance4);
    onUnmounted(() => unlink(instance4));
    const index = computed(() => internalChildren.indexOf(instance4));
    return {
      parent,
      index
    };
  }
  return {
    parent: null,
    index: ref(-1)
  };
}
function flattenVNodes(children) {
  const result = [];
  const traverse = (children2) => {
    if (Array.isArray(children2)) {
      children2.forEach((child) => {
        var _a;
        if (isVNode(child)) {
          result.push(child);
          if ((_a = child.component) == null ? void 0 : _a.subTree) {
            result.push(child.component.subTree);
            traverse(child.component.subTree.children);
          }
          if (child.children) {
            traverse(child.children);
          }
        }
      });
    }
  };
  traverse(children);
  return result;
}
function sortChildren(parent, publicChildren, internalChildren) {
  const vnodes = flattenVNodes(parent.subTree.children);
  internalChildren.sort(
    (a, b) => vnodes.indexOf(a.vnode) - vnodes.indexOf(b.vnode)
  );
  const orderedPublicChildren = internalChildren.map((item) => item.proxy);
  publicChildren.sort((a, b) => {
    const indexA = orderedPublicChildren.indexOf(a);
    const indexB = orderedPublicChildren.indexOf(b);
    return indexA - indexB;
  });
}
function useChildren(key) {
  const publicChildren = reactive([]);
  const internalChildren = reactive([]);
  const parent = getCurrentInstance();
  const linkChildren = (value) => {
    const link = (child) => {
      if (child.proxy) {
        internalChildren.push(child);
        publicChildren.push(child.proxy);
        sortChildren(parent, publicChildren, internalChildren);
      }
    };
    const unlink = (child) => {
      const index = internalChildren.indexOf(child);
      publicChildren.splice(index, 1);
      internalChildren.splice(index, 1);
    };
    provide(
      key,
      Object.assign(
        {
          link,
          unlink,
          children: publicChildren,
          internalChildren
        },
        value
      )
    );
  };
  return {
    children: publicChildren,
    linkChildren
  };
}
var SECOND = 1e3;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
function parseTime(time) {
  const days = Math.floor(time / DAY);
  const hours = Math.floor(time % DAY / HOUR);
  const minutes = Math.floor(time % HOUR / MINUTE);
  const seconds = Math.floor(time % MINUTE / SECOND);
  const milliseconds = Math.floor(time % SECOND);
  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  };
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1e3) === Math.floor(time2 / 1e3);
}
function useCountDown(options) {
  let rafId;
  let endTime;
  let counting;
  let deactivated;
  const remain = ref(options.time);
  const current2 = computed(() => parseTime(remain.value));
  const pause = () => {
    counting = false;
    cancelRaf(rafId);
  };
  const getCurrentRemain = () => Math.max(endTime - Date.now(), 0);
  const setRemain = (value) => {
    var _a, _b;
    remain.value = value;
    (_a = options.onChange) == null ? void 0 : _a.call(options, current2.value);
    if (value === 0) {
      pause();
      (_b = options.onFinish) == null ? void 0 : _b.call(options);
    }
  };
  const microTick = () => {
    rafId = raf(() => {
      if (counting) {
        setRemain(getCurrentRemain());
        if (remain.value > 0) {
          microTick();
        }
      }
    });
  };
  const macroTick = () => {
    rafId = raf(() => {
      if (counting) {
        const remainRemain = getCurrentRemain();
        if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
          setRemain(remainRemain);
        }
        if (remain.value > 0) {
          macroTick();
        }
      }
    });
  };
  const tick = () => {
    if (!inBrowser2) {
      return;
    }
    if (options.millisecond) {
      microTick();
    } else {
      macroTick();
    }
  };
  const start2 = () => {
    if (!counting) {
      endTime = Date.now() + remain.value;
      counting = true;
      tick();
    }
  };
  const reset = (totalTime = options.time) => {
    pause();
    remain.value = totalTime;
  };
  onBeforeUnmount(pause);
  onActivated(() => {
    if (deactivated) {
      counting = true;
      deactivated = false;
      tick();
    }
  });
  onDeactivated(() => {
    if (counting) {
      pause();
      deactivated = true;
    }
  });
  return {
    start: start2,
    pause,
    reset,
    current: current2
  };
}
function onMountedOrActivated(hook) {
  let mounted;
  onMounted(() => {
    hook();
    nextTick(() => {
      mounted = true;
    });
  });
  onActivated(() => {
    if (mounted) {
      hook();
    }
  });
}
function useEventListener(type, listener, options = {}) {
  if (!inBrowser2) {
    return;
  }
  const { target = window, passive: passive2 = false, capture = false } = options;
  let attached;
  const add = (target2) => {
    const element = unref(target2);
    if (element && !attached) {
      element.addEventListener(type, listener, {
        capture,
        passive: passive2
      });
      attached = true;
    }
  };
  const remove2 = (target2) => {
    const element = unref(target2);
    if (element && attached) {
      element.removeEventListener(type, listener, capture);
      attached = false;
    }
  };
  onUnmounted(() => remove2(target));
  onDeactivated(() => remove2(target));
  onMountedOrActivated(() => add(target));
  if (isRef(target)) {
    watch(target, (val, oldVal) => {
      remove2(oldVal);
      add(val);
    });
  }
}
function useClickAway(target, listener, options = {}) {
  if (!inBrowser2) {
    return;
  }
  const { eventName = "click" } = options;
  const onClick = (event) => {
    const targets = Array.isArray(target) ? target : [target];
    const isClickAway = targets.every((item) => {
      const element = unref(item);
      return element && !element.contains(event.target);
    });
    if (isClickAway) {
      listener(event);
    }
  };
  useEventListener(eventName, onClick, { target: document });
}
var width;
var height;
function useWindowSize() {
  if (!width) {
    width = ref(0);
    height = ref(0);
    if (inBrowser2) {
      const update = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
      };
      update();
      window.addEventListener("resize", update, { passive: true });
      window.addEventListener("orientationchange", update, { passive: true });
    }
  }
  return { width, height };
}
var overflowScrollReg = /scroll|auto|overlay/i;
var defaultRoot = inBrowser2 ? window : void 0;
function isElement(node) {
  const ELEMENT_NODE_TYPE = 1;
  return node.tagName !== "HTML" && node.tagName !== "BODY" && node.nodeType === ELEMENT_NODE_TYPE;
}
function getScrollParent(el, root = defaultRoot) {
  let node = el;
  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode;
  }
  return root;
}
function useScrollParent(el, root = defaultRoot) {
  const scrollParent = ref();
  onMounted(() => {
    if (el.value) {
      scrollParent.value = getScrollParent(el.value, root);
    }
  });
  return scrollParent;
}
var visibility;
function usePageVisibility() {
  if (!visibility) {
    visibility = ref("visible");
    if (inBrowser2) {
      const update = () => {
        visibility.value = document.hidden ? "hidden" : "visible";
      };
      update();
      window.addEventListener("visibilitychange", update);
    }
  }
  return visibility;
}
var CUSTOM_FIELD_INJECTION_KEY = Symbol("van-field");
function useCustomFieldValue(customValue) {
  const field = inject(CUSTOM_FIELD_INJECTION_KEY, null);
  if (field && !field.customValue.value) {
    field.customValue.value = customValue;
    watch(customValue, () => {
      field.resetValidation();
      field.validateWithTrigger("onChange");
    });
  }
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/utils/dom.mjs
function getScrollTop(el) {
  const top2 = "scrollTop" in el ? el.scrollTop : el.pageYOffset;
  return Math.max(top2, 0);
}
function setScrollTop(el, value) {
  if ("scrollTop" in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}
function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
}
function getElementTop(el, scroller) {
  if (el === window) {
    return 0;
  }
  const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
  return useRect(el).top + scrollTop;
}
var isIOS2 = isIOS();
function resetScroll() {
  if (isIOS2) {
    setRootScrollTop(getRootScrollTop());
  }
}
var stopPropagation = (event) => event.stopPropagation();
function preventDefault(event, isStopPropagation) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    stopPropagation(event);
  }
}
function isHidden(elementRef) {
  const el = unref(elementRef);
  if (!el) {
    return false;
  }
  const style = window.getComputedStyle(el);
  const hidden = style.display === "none";
  const parentHidden = el.offsetParent === null && style.position !== "fixed";
  return hidden || parentHidden;
}
var { width: windowWidth, height: windowHeight } = useWindowSize();

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/utils/format.mjs
function addUnit(value) {
  if (isDef(value)) {
    return isNumeric(value) ? `${value}px` : String(value);
  }
  return void 0;
}
function getSizeStyle(originSize) {
  if (isDef(originSize)) {
    if (Array.isArray(originSize)) {
      return {
        width: addUnit(originSize[0]),
        height: addUnit(originSize[1])
      };
    }
    const size = addUnit(originSize);
    return {
      width: size,
      height: size
    };
  }
}
function getZIndexStyle(zIndex) {
  const style = {};
  if (zIndex !== void 0) {
    style.zIndex = +zIndex;
  }
  return style;
}
var rootFontSize;
function getRootFontSize() {
  if (!rootFontSize) {
    const doc = document.documentElement;
    const fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
    rootFontSize = parseFloat(fontSize);
  }
  return rootFontSize;
}
function convertRem(value) {
  value = value.replace(/rem/g, "");
  return +value * getRootFontSize();
}
function convertVw(value) {
  value = value.replace(/vw/g, "");
  return +value * windowWidth.value / 100;
}
function convertVh(value) {
  value = value.replace(/vh/g, "");
  return +value * windowHeight.value / 100;
}
function unitToPx(value) {
  if (typeof value === "number") {
    return value;
  }
  if (inBrowser) {
    if (value.includes("rem")) {
      return convertRem(value);
    }
    if (value.includes("vw")) {
      return convertVw(value);
    }
    if (value.includes("vh")) {
      return convertVh(value);
    }
  }
  return parseFloat(value);
}
var camelizeRE = /-(\w)/g;
var camelize = (str) => str.replace(camelizeRE, (_, c) => c.toUpperCase());
var kebabCase = (str) => str.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
function padZero(num, targetLength = 2) {
  let str = num + "";
  while (str.length < targetLength) {
    str = "0" + str;
  }
  return str;
}
var clamp = (num, min, max) => Math.min(Math.max(num, min), max);
function trimExtraChar(value, char, regExp) {
  const index = value.indexOf(char);
  if (index === -1) {
    return value;
  }
  if (char === "-" && index !== 0) {
    return value.slice(0, index);
  }
  return value.slice(0, index + 1) + value.slice(index).replace(regExp, "");
}
function formatNumber(value, allowDot = true, allowMinus = true) {
  if (allowDot) {
    value = trimExtraChar(value, ".", /\./g);
  } else {
    value = value.split(".")[0];
  }
  if (allowMinus) {
    value = trimExtraChar(value, "-", /-/g);
  } else {
    value = value.replace(/-/, "");
  }
  const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
  return value.replace(regExp, "");
}
function addNumber(num1, num2) {
  const cardinal = 10 ** 10;
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/utils/deep-assign.mjs
var { hasOwnProperty } = Object.prototype;
function assignKey(to, from, key) {
  const val = from[key];
  if (!isDef(val)) {
    return;
  }
  if (!hasOwnProperty.call(to, key) || !isObject(val)) {
    to[key] = val;
  } else {
    to[key] = deepAssign(Object(to[key]), val);
  }
}
function deepAssign(to, from) {
  Object.keys(from).forEach((key) => {
    assignKey(to, from, key);
  });
  return to;
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/locale/lang/zh-CN.mjs
var stdin_default = {
  name: "姓名",
  tel: "电话",
  save: "保存",
  confirm: "确认",
  cancel: "取消",
  delete: "删除",
  loading: "加载中...",
  noCoupon: "暂无优惠券",
  nameEmpty: "请填写姓名",
  addContact: "添加联系人",
  telInvalid: "请填写正确的电话",
  vanCalendar: {
    end: "结束",
    start: "开始",
    title: "日期选择",
    weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    monthTitle: (year, month) => `${year}年${month}月`,
    rangePrompt: (maxRange) => `最多选择 ${maxRange} 天`
  },
  vanCascader: {
    select: "请选择"
  },
  vanPagination: {
    prev: "上一页",
    next: "下一页"
  },
  vanPullRefresh: {
    pulling: "下拉即可刷新...",
    loosing: "释放即可刷新..."
  },
  vanSubmitBar: {
    label: "合计:"
  },
  vanCoupon: {
    unlimited: "无门槛",
    discount: (discount) => `${discount}折`,
    condition: (condition) => `满${condition}元可用`
  },
  vanCouponCell: {
    title: "优惠券",
    count: (count) => `${count}张可用`
  },
  vanCouponList: {
    exchange: "兑换",
    close: "不使用",
    enable: "可用",
    disabled: "不可用",
    placeholder: "输入优惠码"
  },
  vanAddressEdit: {
    area: "地区",
    areaEmpty: "请选择地区",
    addressEmpty: "请填写详细地址",
    addressDetail: "详细地址",
    defaultAddress: "设为默认收货地址"
  },
  vanAddressList: {
    add: "新增地址"
  }
};

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/locale/index.mjs
var lang = ref("zh-CN");
var messages = reactive({
  "zh-CN": stdin_default
});
var Locale = {
  messages() {
    return messages[lang.value];
  },
  use(newLang, newMessages) {
    lang.value = newLang;
    this.add({ [newLang]: newMessages });
  },
  add(newMessages = {}) {
    deepAssign(messages, newMessages);
  }
};
var stdin_default2 = Locale;

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/utils/create.mjs
function createTranslate(name103) {
  const prefix = camelize(name103) + ".";
  return (path, ...args) => {
    const messages2 = stdin_default2.messages();
    const message = get(messages2, prefix + path) || get(messages2, path);
    return isFunction(message) ? message(...args) : message;
  };
}
function genBem(name103, mods) {
  if (!mods) {
    return "";
  }
  if (typeof mods === "string") {
    return ` ${name103}--${mods}`;
  }
  if (Array.isArray(mods)) {
    return mods.reduce(
      (ret, item) => ret + genBem(name103, item),
      ""
    );
  }
  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? genBem(name103, key) : ""),
    ""
  );
}
function createBEM(name103) {
  return (el, mods) => {
    if (el && typeof el !== "string") {
      mods = el;
      el = "";
    }
    el = el ? `${name103}__${el}` : name103;
    return `${el}${genBem(el, mods)}`;
  };
}
function createNamespace(name103) {
  const prefixedName = `van-${name103}`;
  return [
    prefixedName,
    createBEM(prefixedName),
    createTranslate(prefixedName)
  ];
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/utils/constant.mjs
var BORDER = "van-hairline";
var BORDER_TOP = `${BORDER}--top`;
var BORDER_LEFT = `${BORDER}--left`;
var BORDER_BOTTOM = `${BORDER}--bottom`;
var BORDER_SURROUND = `${BORDER}--surround`;
var BORDER_TOP_BOTTOM = `${BORDER}--top-bottom`;
var BORDER_UNSET_TOP_BOTTOM = `${BORDER}-unset--top-bottom`;
var HAPTICS_FEEDBACK = "van-haptics-feedback";
var FORM_KEY = Symbol("van-form");
var LONG_PRESS_START_TIME = 500;

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/utils/interceptor.mjs
function callInterceptor(interceptor, {
  args = [],
  done,
  canceled
}) {
  if (interceptor) {
    const returnVal = interceptor.apply(null, args);
    if (isPromise(returnVal)) {
      returnVal.then((value) => {
        if (value) {
          done();
        } else if (canceled) {
          canceled();
        }
      }).catch(noop);
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/utils/with-install.mjs
function withInstall(options) {
  options.install = (app) => {
    const { name: name103 } = options;
    if (name103) {
      app.component(name103, options);
      app.component(camelize(`-${name103}`), options);
    }
  };
  return options;
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/composables/on-popup-reopen.mjs
var POPUP_TOGGLE_KEY = Symbol();
function onPopupReopen(callback) {
  const popupToggleStatus = inject(POPUP_TOGGLE_KEY, null);
  if (popupToggleStatus) {
    watch(popupToggleStatus, (show) => {
      if (show) {
        callback();
      }
    });
  }
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/composables/use-height.mjs
var useHeight = (element, withSafeArea) => {
  const height2 = ref();
  const setHeight = () => {
    height2.value = useRect(element).height;
  };
  onMounted(() => {
    nextTick(setHeight);
    if (withSafeArea) {
      for (let i = 1; i <= 3; i++) {
        setTimeout(setHeight, 100 * i);
      }
    }
  });
  onPopupReopen(() => nextTick(setHeight));
  watch([windowWidth, windowHeight], setHeight);
  return height2;
};

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/composables/use-placeholder.mjs
function usePlaceholder(contentRef, bem98) {
  const height2 = useHeight(contentRef, true);
  return (renderContent) => createVNode("div", {
    "class": bem98("placeholder"),
    "style": {
      height: height2.value ? `${height2.value}px` : void 0
    }
  }, [renderContent()]);
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/action-bar/ActionBar.mjs
var [name, bem] = createNamespace("action-bar");
var ACTION_BAR_KEY = Symbol(name);
var actionBarProps = {
  placeholder: Boolean,
  safeAreaInsetBottom: truthProp
};
var stdin_default3 = defineComponent({
  name,
  props: actionBarProps,
  setup(props, {
    slots
  }) {
    const root = ref();
    const renderPlaceholder = usePlaceholder(root, bem);
    const {
      linkChildren
    } = useChildren(ACTION_BAR_KEY);
    linkChildren();
    const renderActionBar = () => {
      var _a;
      return createVNode("div", {
        "ref": root,
        "class": [bem(), {
          "van-safe-area-bottom": props.safeAreaInsetBottom
        }]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
    return () => {
      if (props.placeholder) {
        return renderPlaceholder(renderActionBar);
      }
      return renderActionBar();
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/action-bar/index.mjs
var ActionBar = withInstall(stdin_default3);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/composables/use-expose.mjs
function useExpose(apis) {
  const instance4 = getCurrentInstance();
  if (instance4) {
    extend(instance4.proxy, apis);
  }
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/composables/use-route.mjs
var routeProps = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
function route({
  to,
  url,
  replace,
  $router: router
}) {
  if (to && router) {
    router[replace ? "replace" : "push"](to);
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}
function useRoute() {
  const vm = getCurrentInstance().proxy;
  return () => route(vm);
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/badge/Badge.mjs
var [name2, bem2] = createNamespace("badge");
var badgeProps = {
  dot: Boolean,
  max: numericProp,
  tag: makeStringProp("div"),
  color: String,
  offset: Array,
  content: numericProp,
  showZero: truthProp,
  position: makeStringProp("top-right")
};
var stdin_default4 = defineComponent({
  name: name2,
  props: badgeProps,
  setup(props, {
    slots
  }) {
    const hasContent = () => {
      if (slots.content) {
        return true;
      }
      const {
        content,
        showZero
      } = props;
      return isDef(content) && content !== "" && (showZero || content !== 0 && content !== "0");
    };
    const renderContent = () => {
      const {
        dot,
        max,
        content
      } = props;
      if (!dot && hasContent()) {
        if (slots.content) {
          return slots.content();
        }
        if (isDef(max) && isNumeric(content) && +content > max) {
          return `${max}+`;
        }
        return content;
      }
    };
    const style = computed(() => {
      const style2 = {
        background: props.color
      };
      if (props.offset) {
        const [x, y] = props.offset;
        if (slots.default) {
          style2.top = addUnit(y);
          if (typeof x === "number") {
            style2.right = addUnit(-x);
          } else {
            style2.right = x.startsWith("-") ? x.replace("-", "") : `-${x}`;
          }
        } else {
          style2.marginTop = addUnit(y);
          style2.marginLeft = addUnit(x);
        }
      }
      return style2;
    });
    const renderBadge = () => {
      if (hasContent() || props.dot) {
        return createVNode("div", {
          "class": bem2([props.position, {
            dot: props.dot,
            fixed: !!slots.default
          }]),
          "style": style.value
        }, [renderContent()]);
      }
    };
    return () => {
      if (slots.default) {
        const {
          tag
        } = props;
        return createVNode(tag, {
          "class": bem2("wrapper")
        }, {
          default: () => [slots.default(), renderBadge()]
        });
      }
      return renderBadge();
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/badge/index.mjs
var Badge = withInstall(stdin_default4);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/composables/use-global-z-index.mjs
var globalZIndex = 2e3;
var useGlobalZIndex = () => ++globalZIndex;
var setGlobalZIndex = (val) => {
  globalZIndex = val;
};

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/config-provider/ConfigProvider.mjs
var [name3, bem3] = createNamespace("config-provider");
var CONFIG_PROVIDER_KEY = Symbol(name3);
var configProviderProps = {
  tag: makeStringProp("div"),
  theme: makeStringProp("light"),
  zIndex: Number,
  themeVars: Object,
  themeVarsDark: Object,
  themeVarsLight: Object,
  iconPrefix: String
};
function mapThemeVarsToCSSVars(themeVars) {
  const cssVars = {};
  Object.keys(themeVars).forEach((key) => {
    cssVars[`--van-${kebabCase(key)}`] = themeVars[key];
  });
  return cssVars;
}
var stdin_default5 = defineComponent({
  name: name3,
  props: configProviderProps,
  setup(props, {
    slots
  }) {
    const style = computed(() => mapThemeVarsToCSSVars(extend({}, props.themeVars, props.theme === "dark" ? props.themeVarsDark : props.themeVarsLight)));
    if (inBrowser) {
      const addTheme = () => {
        document.documentElement.classList.add(`van-theme-${props.theme}`);
      };
      const removeTheme = (theme = props.theme) => {
        document.documentElement.classList.remove(`van-theme-${theme}`);
      };
      watch(() => props.theme, (newVal, oldVal) => {
        if (oldVal) {
          removeTheme(oldVal);
        }
        addTheme();
      }, {
        immediate: true
      });
      onActivated(addTheme);
      onDeactivated(removeTheme);
      onBeforeUnmount(removeTheme);
    }
    provide(CONFIG_PROVIDER_KEY, props);
    watchEffect(() => {
      if (props.zIndex !== void 0) {
        setGlobalZIndex(props.zIndex);
      }
    });
    return () => createVNode(props.tag, {
      "class": bem3(),
      "style": style.value
    }, {
      default: () => {
        var _a;
        return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
      }
    });
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/icon/Icon.mjs
var [name4, bem4] = createNamespace("icon");
var isImage = (name210) => name210 == null ? void 0 : name210.includes("/");
var iconProps = {
  dot: Boolean,
  tag: makeStringProp("i"),
  name: String,
  size: numericProp,
  badge: numericProp,
  color: String,
  badgeProps: Object,
  classPrefix: String
};
var stdin_default6 = defineComponent({
  name: name4,
  props: iconProps,
  setup(props, {
    slots
  }) {
    const config = inject(CONFIG_PROVIDER_KEY, null);
    const classPrefix = computed(() => props.classPrefix || (config == null ? void 0 : config.iconPrefix) || bem4());
    return () => {
      const {
        tag,
        dot,
        name: name210,
        size,
        badge,
        color
      } = props;
      const isImageIcon = isImage(name210);
      return createVNode(Badge, mergeProps({
        "dot": dot,
        "tag": tag,
        "class": [classPrefix.value, isImageIcon ? "" : `${classPrefix.value}-${name210}`],
        "style": {
          color,
          fontSize: addUnit(size)
        },
        "content": badge
      }, props.badgeProps), {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots), isImageIcon && createVNode("img", {
            "class": bem4("image"),
            "src": name210
          }, null)];
        }
      });
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/icon/index.mjs
var Icon = withInstall(stdin_default6);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/loading/Loading.mjs
var [name5, bem5] = createNamespace("loading");
var SpinIcon = Array(12).fill(null).map((_, index) => createVNode("i", {
  "class": bem5("line", String(index + 1))
}, null));
var CircularIcon = createVNode("svg", {
  "class": bem5("circular"),
  "viewBox": "25 25 50 50"
}, [createVNode("circle", {
  "cx": "50",
  "cy": "50",
  "r": "20",
  "fill": "none"
}, null)]);
var loadingProps = {
  size: numericProp,
  type: makeStringProp("circular"),
  color: String,
  vertical: Boolean,
  textSize: numericProp,
  textColor: String
};
var stdin_default7 = defineComponent({
  name: name5,
  props: loadingProps,
  setup(props, {
    slots
  }) {
    const spinnerStyle = computed(() => extend({
      color: props.color
    }, getSizeStyle(props.size)));
    const renderIcon = () => {
      const DefaultIcon = props.type === "spinner" ? SpinIcon : CircularIcon;
      return createVNode("span", {
        "class": bem5("spinner", props.type),
        "style": spinnerStyle.value
      }, [slots.icon ? slots.icon() : DefaultIcon]);
    };
    const renderText = () => {
      var _a;
      if (slots.default) {
        return createVNode("span", {
          "class": bem5("text"),
          "style": {
            fontSize: addUnit(props.textSize),
            color: (_a = props.textColor) != null ? _a : props.color
          }
        }, [slots.default()]);
      }
    };
    return () => {
      const {
        type,
        vertical
      } = props;
      return createVNode("div", {
        "class": bem5([type, {
          vertical
        }]),
        "aria-live": "polite",
        "aria-busy": true
      }, [renderIcon(), renderText()]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/loading/index.mjs
var Loading = withInstall(stdin_default7);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/button/Button.mjs
var [name6, bem6] = createNamespace("button");
var buttonProps = extend({}, routeProps, {
  tag: makeStringProp("button"),
  text: String,
  icon: String,
  type: makeStringProp("default"),
  size: makeStringProp("normal"),
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: makeStringProp("button"),
  loadingSize: numericProp,
  loadingText: String,
  loadingType: String,
  iconPosition: makeStringProp("left")
});
var stdin_default8 = defineComponent({
  name: name6,
  props: buttonProps,
  emits: ["click"],
  setup(props, {
    emit,
    slots
  }) {
    const route2 = useRoute();
    const renderLoadingIcon = () => {
      if (slots.loading) {
        return slots.loading();
      }
      return createVNode(Loading, {
        "size": props.loadingSize,
        "type": props.loadingType,
        "class": bem6("loading")
      }, null);
    };
    const renderIcon = () => {
      if (props.loading) {
        return renderLoadingIcon();
      }
      if (slots.icon) {
        return createVNode("div", {
          "class": bem6("icon")
        }, [slots.icon()]);
      }
      if (props.icon) {
        return createVNode(Icon, {
          "name": props.icon,
          "class": bem6("icon"),
          "classPrefix": props.iconPrefix
        }, null);
      }
    };
    const renderText = () => {
      let text;
      if (props.loading) {
        text = props.loadingText;
      } else {
        text = slots.default ? slots.default() : props.text;
      }
      if (text) {
        return createVNode("span", {
          "class": bem6("text")
        }, [text]);
      }
    };
    const getStyle = () => {
      const {
        color,
        plain
      } = props;
      if (color) {
        const style = {
          color: plain ? color : "white"
        };
        if (!plain) {
          style.background = color;
        }
        if (color.includes("gradient")) {
          style.border = 0;
        } else {
          style.borderColor = color;
        }
        return style;
      }
    };
    const onClick = (event) => {
      if (props.loading) {
        preventDefault(event);
      } else if (!props.disabled) {
        emit("click", event);
        route2();
      }
    };
    return () => {
      const {
        tag,
        type,
        size,
        block,
        round: round2,
        plain,
        square,
        loading,
        disabled,
        hairline,
        nativeType,
        iconPosition
      } = props;
      const classes = [bem6([type, size, {
        plain,
        block,
        round: round2,
        square,
        loading,
        disabled,
        hairline
      }]), {
        [BORDER_SURROUND]: hairline
      }];
      return createVNode(tag, {
        "type": nativeType,
        "class": classes,
        "style": getStyle(),
        "disabled": disabled,
        "onClick": onClick
      }, {
        default: () => [createVNode("div", {
          "class": bem6("content")
        }, [iconPosition === "left" && renderIcon(), renderText(), iconPosition === "right" && renderIcon()])]
      });
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/button/index.mjs
var Button = withInstall(stdin_default8);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/action-bar-button/ActionBarButton.mjs
var [name7, bem7] = createNamespace("action-bar-button");
var actionBarButtonProps = extend({}, routeProps, {
  type: String,
  text: String,
  icon: String,
  color: String,
  loading: Boolean,
  disabled: Boolean
});
var stdin_default9 = defineComponent({
  name: name7,
  props: actionBarButtonProps,
  setup(props, {
    slots
  }) {
    const route2 = useRoute();
    const {
      parent,
      index
    } = useParent(ACTION_BAR_KEY);
    const isFirst = computed(() => {
      if (parent) {
        const prev = parent.children[index.value - 1];
        return !(prev && "isButton" in prev);
      }
    });
    const isLast = computed(() => {
      if (parent) {
        const next = parent.children[index.value + 1];
        return !(next && "isButton" in next);
      }
    });
    useExpose({
      isButton: true
    });
    return () => {
      const {
        type,
        icon,
        text,
        color,
        loading,
        disabled
      } = props;
      return createVNode(Button, {
        "class": bem7([type, {
          last: isLast.value,
          first: isFirst.value
        }]),
        "size": "large",
        "type": type,
        "icon": icon,
        "color": color,
        "loading": loading,
        "disabled": disabled,
        "onClick": route2
      }, {
        default: () => [slots.default ? slots.default() : text]
      });
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/action-bar-button/index.mjs
var ActionBarButton = withInstall(stdin_default9);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/action-bar-icon/ActionBarIcon.mjs
var [name8, bem8] = createNamespace("action-bar-icon");
var actionBarIconProps = extend({}, routeProps, {
  dot: Boolean,
  text: String,
  icon: String,
  color: String,
  badge: numericProp,
  iconClass: unknownProp,
  badgeProps: Object,
  iconPrefix: String
});
var stdin_default10 = defineComponent({
  name: name8,
  props: actionBarIconProps,
  setup(props, {
    slots
  }) {
    const route2 = useRoute();
    useParent(ACTION_BAR_KEY);
    const renderIcon = () => {
      const {
        dot,
        badge,
        icon,
        color,
        iconClass,
        badgeProps: badgeProps2,
        iconPrefix
      } = props;
      if (slots.icon) {
        return createVNode(Badge, mergeProps({
          "dot": dot,
          "class": bem8("icon"),
          "content": badge
        }, badgeProps2), {
          default: slots.icon
        });
      }
      return createVNode(Icon, {
        "tag": "div",
        "dot": dot,
        "name": icon,
        "badge": badge,
        "color": color,
        "class": [bem8("icon"), iconClass],
        "badgeProps": badgeProps2,
        "classPrefix": iconPrefix
      }, null);
    };
    return () => createVNode("div", {
      "role": "button",
      "class": bem8(),
      "tabindex": 0,
      "onClick": route2
    }, [renderIcon(), slots.default ? slots.default() : props.text]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/action-bar-icon/index.mjs
var ActionBarIcon = withInstall(stdin_default10);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/popup/shared.mjs
var popupSharedProps = {
  show: Boolean,
  zIndex: numericProp,
  overlay: truthProp,
  duration: numericProp,
  teleport: [String, Object],
  lockScroll: truthProp,
  lazyRender: truthProp,
  beforeClose: Function,
  overlayStyle: Object,
  overlayClass: unknownProp,
  transitionAppear: Boolean,
  closeOnClickOverlay: truthProp
};
var popupSharedPropKeys = Object.keys(
  popupSharedProps
);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/composables/use-touch.mjs
function getDirection(x, y) {
  if (x > y) {
    return "horizontal";
  }
  if (y > x) {
    return "vertical";
  }
  return "";
}
function useTouch() {
  const startX = ref(0);
  const startY = ref(0);
  const deltaX = ref(0);
  const deltaY = ref(0);
  const offsetX = ref(0);
  const offsetY = ref(0);
  const direction = ref("");
  const isVertical = () => direction.value === "vertical";
  const isHorizontal = () => direction.value === "horizontal";
  const reset = () => {
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    direction.value = "";
  };
  const start2 = (event) => {
    reset();
    startX.value = event.touches[0].clientX;
    startY.value = event.touches[0].clientY;
  };
  const move = (event) => {
    const touch = event.touches[0];
    deltaX.value = (touch.clientX < 0 ? 0 : touch.clientX) - startX.value;
    deltaY.value = touch.clientY - startY.value;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);
    const LOCK_DIRECTION_DISTANCE = 10;
    if (!direction.value || offsetX.value < LOCK_DIRECTION_DISTANCE && offsetY.value < LOCK_DIRECTION_DISTANCE) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }
  };
  return {
    move,
    start: start2,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal
  };
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/composables/use-lock-scroll.mjs
var totalLockCount = 0;
var BODY_LOCK_CLASS = "van-overflow-hidden";
function useLockScroll(rootRef, shouldLock) {
  const touch = useTouch();
  const DIRECTION_UP = "01";
  const DIRECTION_DOWN = "10";
  const onTouchMove = (event) => {
    touch.move(event);
    const direction = touch.deltaY.value > 0 ? DIRECTION_DOWN : DIRECTION_UP;
    const el = getScrollParent(
      event.target,
      rootRef.value
    );
    const { scrollHeight, offsetHeight, scrollTop } = el;
    let status = "11";
    if (scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? "00" : "01";
    } else if (scrollTop + offsetHeight >= scrollHeight) {
      status = "10";
    }
    if (status !== "11" && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2))) {
      preventDefault(event, true);
    }
  };
  const lock = () => {
    document.addEventListener("touchstart", touch.start);
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    if (!totalLockCount) {
      document.body.classList.add(BODY_LOCK_CLASS);
    }
    totalLockCount++;
  };
  const unlock = () => {
    if (totalLockCount) {
      document.removeEventListener("touchstart", touch.start);
      document.removeEventListener("touchmove", onTouchMove);
      totalLockCount--;
      if (!totalLockCount) {
        document.body.classList.remove(BODY_LOCK_CLASS);
      }
    }
  };
  const init = () => shouldLock() && lock();
  const destroy = () => shouldLock() && unlock();
  onMountedOrActivated(init);
  onDeactivated(destroy);
  onBeforeUnmount(destroy);
  watch(shouldLock, (value) => {
    value ? lock() : unlock();
  });
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/composables/use-lazy-render.mjs
function useLazyRender(show) {
  const inited = ref(false);
  watch(
    show,
    (value) => {
      if (value) {
        inited.value = value;
      }
    },
    { immediate: true }
  );
  return (render) => () => inited.value ? render() : null;
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/overlay/Overlay.mjs
var [name9, bem9] = createNamespace("overlay");
var overlayProps = {
  show: Boolean,
  zIndex: numericProp,
  duration: numericProp,
  className: unknownProp,
  lockScroll: truthProp,
  lazyRender: truthProp,
  customStyle: Object
};
var stdin_default11 = defineComponent({
  name: name9,
  props: overlayProps,
  setup(props, {
    slots
  }) {
    const root = ref();
    const lazyRender = useLazyRender(() => props.show || !props.lazyRender);
    const onTouchMove = (event) => {
      if (props.lockScroll) {
        preventDefault(event, true);
      }
    };
    const renderOverlay = lazyRender(() => {
      var _a;
      const style = extend(getZIndexStyle(props.zIndex), props.customStyle);
      if (isDef(props.duration)) {
        style.animationDuration = `${props.duration}s`;
      }
      return withDirectives(createVNode("div", {
        "ref": root,
        "style": style,
        "class": [bem9(), props.className]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), [[vShow, props.show]]);
    });
    useEventListener("touchmove", onTouchMove, {
      target: root
    });
    return () => createVNode(Transition, {
      "name": "van-fade",
      "appear": true
    }, {
      default: renderOverlay
    });
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/overlay/index.mjs
var Overlay = withInstall(stdin_default11);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/popup/Popup.mjs
var popupProps = extend({}, popupSharedProps, {
  round: Boolean,
  position: makeStringProp("center"),
  closeIcon: makeStringProp("cross"),
  closeable: Boolean,
  transition: String,
  iconPrefix: String,
  closeOnPopstate: Boolean,
  closeIconPosition: makeStringProp("top-right"),
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: Boolean
});
var [name10, bem10] = createNamespace("popup");
var stdin_default12 = defineComponent({
  name: name10,
  inheritAttrs: false,
  props: popupProps,
  emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
  setup(props, {
    emit,
    attrs,
    slots
  }) {
    let opened;
    let shouldReopen;
    const zIndex = ref();
    const popupRef = ref();
    const lazyRender = useLazyRender(() => props.show || !props.lazyRender);
    const style = computed(() => {
      const style2 = {
        zIndex: zIndex.value
      };
      if (isDef(props.duration)) {
        const key = props.position === "center" ? "animationDuration" : "transitionDuration";
        style2[key] = `${props.duration}s`;
      }
      return style2;
    });
    const open = () => {
      if (!opened) {
        opened = true;
        zIndex.value = props.zIndex !== void 0 ? +props.zIndex : useGlobalZIndex();
        emit("open");
      }
    };
    const close = () => {
      if (opened) {
        callInterceptor(props.beforeClose, {
          done() {
            opened = false;
            emit("close");
            emit("update:show", false);
          }
        });
      }
    };
    const onClickOverlay = (event) => {
      emit("clickOverlay", event);
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const renderOverlay = () => {
      if (props.overlay) {
        return createVNode(Overlay, {
          "show": props.show,
          "class": props.overlayClass,
          "zIndex": zIndex.value,
          "duration": props.duration,
          "customStyle": props.overlayStyle,
          "role": props.closeOnClickOverlay ? "button" : void 0,
          "tabindex": props.closeOnClickOverlay ? 0 : void 0,
          "onClick": onClickOverlay
        }, {
          default: slots["overlay-content"]
        });
      }
    };
    const onClickCloseIcon = (event) => {
      emit("clickCloseIcon", event);
      close();
    };
    const renderCloseIcon = () => {
      if (props.closeable) {
        return createVNode(Icon, {
          "role": "button",
          "tabindex": 0,
          "name": props.closeIcon,
          "class": [bem10("close-icon", props.closeIconPosition), HAPTICS_FEEDBACK],
          "classPrefix": props.iconPrefix,
          "onClick": onClickCloseIcon
        }, null);
      }
    };
    const onOpened = () => emit("opened");
    const onClosed = () => emit("closed");
    const onKeydown = (event) => emit("keydown", event);
    const renderPopup = lazyRender(() => {
      var _a;
      const {
        round: round2,
        position,
        safeAreaInsetTop,
        safeAreaInsetBottom
      } = props;
      return withDirectives(createVNode("div", mergeProps({
        "ref": popupRef,
        "style": style.value,
        "role": "dialog",
        "tabindex": 0,
        "class": [bem10({
          round: round2,
          [position]: position
        }), {
          "van-safe-area-top": safeAreaInsetTop,
          "van-safe-area-bottom": safeAreaInsetBottom
        }],
        "onKeydown": onKeydown
      }, attrs), [(_a = slots.default) == null ? void 0 : _a.call(slots), renderCloseIcon()]), [[vShow, props.show]]);
    });
    const renderTransition = () => {
      const {
        position,
        transition,
        transitionAppear
      } = props;
      const name210 = position === "center" ? "van-fade" : `van-popup-slide-${position}`;
      return createVNode(Transition, {
        "name": transition || name210,
        "appear": transitionAppear,
        "onAfterEnter": onOpened,
        "onAfterLeave": onClosed
      }, {
        default: renderPopup
      });
    };
    watch(() => props.show, (show) => {
      if (show && !opened) {
        open();
        if (attrs.tabindex === 0) {
          nextTick(() => {
            var _a;
            (_a = popupRef.value) == null ? void 0 : _a.focus();
          });
        }
      }
      if (!show && opened) {
        opened = false;
        emit("close");
      }
    });
    useExpose({
      popupRef
    });
    useLockScroll(popupRef, () => props.show && props.lockScroll);
    useEventListener("popstate", () => {
      if (props.closeOnPopstate) {
        close();
        shouldReopen = false;
      }
    });
    onMounted(() => {
      if (props.show) {
        open();
      }
    });
    onActivated(() => {
      if (shouldReopen) {
        emit("update:show", true);
        shouldReopen = false;
      }
    });
    onDeactivated(() => {
      if (props.show && props.teleport) {
        close();
        shouldReopen = true;
      }
    });
    provide(POPUP_TOGGLE_KEY, () => props.show);
    return () => {
      if (props.teleport) {
        return createVNode(Teleport, {
          "to": props.teleport
        }, {
          default: () => [renderOverlay(), renderTransition()]
        });
      }
      return createVNode(Fragment, null, [renderOverlay(), renderTransition()]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/popup/index.mjs
var Popup = withInstall(stdin_default12);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/action-sheet/ActionSheet.mjs
var [name11, bem11] = createNamespace("action-sheet");
var actionSheetProps = extend({}, popupSharedProps, {
  title: String,
  round: truthProp,
  actions: makeArrayProp(),
  closeIcon: makeStringProp("cross"),
  closeable: truthProp,
  cancelText: String,
  description: String,
  closeOnPopstate: truthProp,
  closeOnClickAction: Boolean,
  safeAreaInsetBottom: truthProp
});
var popupInheritKeys = [...popupSharedPropKeys, "round", "closeOnPopstate", "safeAreaInsetBottom"];
var stdin_default13 = defineComponent({
  name: name11,
  props: actionSheetProps,
  emits: ["select", "cancel", "update:show"],
  setup(props, {
    slots,
    emit
  }) {
    const updateShow = (show) => emit("update:show", show);
    const onCancel = () => {
      updateShow(false);
      emit("cancel");
    };
    const renderHeader = () => {
      if (props.title) {
        return createVNode("div", {
          "class": bem11("header")
        }, [props.title, props.closeable && createVNode(Icon, {
          "name": props.closeIcon,
          "class": [bem11("close"), HAPTICS_FEEDBACK],
          "onClick": onCancel
        }, null)]);
      }
    };
    const renderCancel = () => {
      if (slots.cancel || props.cancelText) {
        return [createVNode("div", {
          "class": bem11("gap")
        }, null), createVNode("button", {
          "type": "button",
          "class": bem11("cancel"),
          "onClick": onCancel
        }, [slots.cancel ? slots.cancel() : props.cancelText])];
      }
    };
    const renderActionContent = (action, index) => {
      if (action.loading) {
        return createVNode(Loading, {
          "class": bem11("loading-icon")
        }, null);
      }
      if (slots.action) {
        return slots.action({
          action,
          index
        });
      }
      return [createVNode("span", {
        "class": bem11("name")
      }, [action.name]), action.subname && createVNode("div", {
        "class": bem11("subname")
      }, [action.subname])];
    };
    const renderAction = (action, index) => {
      const {
        color,
        loading,
        callback,
        disabled,
        className
      } = action;
      const onClick = () => {
        if (disabled || loading) {
          return;
        }
        if (callback) {
          callback(action);
        }
        if (props.closeOnClickAction) {
          updateShow(false);
        }
        nextTick(() => emit("select", action, index));
      };
      return createVNode("button", {
        "type": "button",
        "style": {
          color
        },
        "class": [bem11("item", {
          loading,
          disabled
        }), className],
        "onClick": onClick
      }, [renderActionContent(action, index)]);
    };
    const renderDescription = () => {
      if (props.description || slots.description) {
        const content = slots.description ? slots.description() : props.description;
        return createVNode("div", {
          "class": bem11("description")
        }, [content]);
      }
    };
    return () => createVNode(Popup, mergeProps({
      "class": bem11(),
      "position": "bottom",
      "onUpdate:show": updateShow
    }, pick(props, popupInheritKeys)), {
      default: () => {
        var _a;
        return [renderHeader(), renderDescription(), createVNode("div", {
          "class": bem11("content")
        }, [props.actions.map(renderAction), (_a = slots.default) == null ? void 0 : _a.call(slots)]), renderCancel()];
      }
    });
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/action-sheet/index.mjs
var ActionSheet = withInstall(stdin_default13);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/picker/utils.mjs
var [name12, bem12, t] = createNamespace("picker");
var getFirstEnabledOption = (options) => options.find((option) => !option.disabled) || options[0];
function getColumnsType(columns, fields) {
  const firstColumn = columns[0];
  if (firstColumn) {
    if (Array.isArray(firstColumn)) {
      return "multiple";
    }
    if (fields.children in firstColumn) {
      return "cascade";
    }
  }
  return "default";
}
function findIndexOfEnabledOption(options, index) {
  index = clamp(index, 0, options.length);
  for (let i = index; i < options.length; i++) {
    if (!options[i].disabled)
      return i;
  }
  for (let i = index - 1; i >= 0; i--) {
    if (!options[i].disabled)
      return i;
  }
  return 0;
}
var isOptionExist = (options, value, fields) => value !== void 0 && !!options.find((option) => option[fields.value] === value);
function findOptionByValue(options, value, fields) {
  const index = options.findIndex((option) => option[fields.value] === value);
  const enabledIndex = findIndexOfEnabledOption(options, index);
  return options[enabledIndex];
}
function formatCascadeColumns(columns, fields, selectedValues) {
  const formatted = [];
  let cursor = {
    [fields.children]: columns
  };
  let columnIndex = 0;
  while (cursor && cursor[fields.children]) {
    const options = cursor[fields.children];
    const value = selectedValues.value[columnIndex];
    cursor = isDef(value) ? findOptionByValue(options, value, fields) : void 0;
    if (!cursor && options.length) {
      const firstValue = getFirstEnabledOption(options)[fields.value];
      cursor = findOptionByValue(options, firstValue, fields);
    }
    columnIndex++;
    formatted.push(options);
  }
  return formatted;
}
function getElementTranslateY(element) {
  const { transform } = window.getComputedStyle(element);
  const translateY = transform.slice(7, transform.length - 1).split(", ")[5];
  return Number(translateY);
}
function assignDefaultFields(fields) {
  return extend(
    {
      text: "text",
      value: "value",
      children: "children"
    },
    fields
  );
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/picker/PickerColumn.mjs
var DEFAULT_DURATION = 200;
var MOMENTUM_TIME = 300;
var MOMENTUM_DISTANCE = 15;
var [name13, bem13] = createNamespace("picker-column");
var PICKER_KEY = Symbol(name13);
var stdin_default14 = defineComponent({
  name: name13,
  props: {
    value: numericProp,
    fields: makeRequiredProp(Object),
    options: makeArrayProp(),
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: makeRequiredProp(Number),
    swipeDuration: makeRequiredProp(numericProp),
    visibleOptionNum: makeRequiredProp(numericProp)
  },
  emits: ["change", "clickOption"],
  setup(props, {
    emit,
    slots
  }) {
    let moving;
    let startOffset;
    let touchStartTime;
    let momentumOffset;
    let transitionEndTrigger;
    const root = ref();
    const wrapper = ref();
    const currentOffset = ref(0);
    const currentDuration = ref(0);
    const touch = useTouch();
    const count = () => props.options.length;
    const baseOffset = () => props.optionHeight * (+props.visibleOptionNum - 1) / 2;
    const updateValueByIndex = (index) => {
      const enabledIndex = findIndexOfEnabledOption(props.options, index);
      const offset2 = -enabledIndex * props.optionHeight;
      const trigger = () => {
        const value = props.options[enabledIndex][props.fields.value];
        if (value !== props.value) {
          emit("change", value);
        }
      };
      if (moving && offset2 !== currentOffset.value) {
        transitionEndTrigger = trigger;
      } else {
        trigger();
      }
      currentOffset.value = offset2;
    };
    const isReadonly = () => props.readonly || !props.options.length;
    const onClickOption = (index) => {
      if (moving || isReadonly()) {
        return;
      }
      transitionEndTrigger = null;
      currentDuration.value = DEFAULT_DURATION;
      updateValueByIndex(index);
      emit("clickOption", props.options[index]);
    };
    const getIndexByOffset = (offset2) => clamp(Math.round(-offset2 / props.optionHeight), 0, count() - 1);
    const momentum = (distance, duration) => {
      const speed = Math.abs(distance / duration);
      distance = currentOffset.value + speed / 3e-3 * (distance < 0 ? -1 : 1);
      const index = getIndexByOffset(distance);
      currentDuration.value = +props.swipeDuration;
      updateValueByIndex(index);
    };
    const stopMomentum = () => {
      moving = false;
      currentDuration.value = 0;
      if (transitionEndTrigger) {
        transitionEndTrigger();
        transitionEndTrigger = null;
      }
    };
    const onTouchStart = (event) => {
      if (isReadonly()) {
        return;
      }
      touch.start(event);
      if (moving) {
        const translateY = getElementTranslateY(wrapper.value);
        currentOffset.value = Math.min(0, translateY - baseOffset());
      }
      currentDuration.value = 0;
      startOffset = currentOffset.value;
      touchStartTime = Date.now();
      momentumOffset = startOffset;
      transitionEndTrigger = null;
    };
    const onTouchMove = (event) => {
      if (isReadonly()) {
        return;
      }
      touch.move(event);
      if (touch.isVertical()) {
        moving = true;
        preventDefault(event, true);
      }
      currentOffset.value = clamp(startOffset + touch.deltaY.value, -(count() * props.optionHeight), props.optionHeight);
      const now = Date.now();
      if (now - touchStartTime > MOMENTUM_TIME) {
        touchStartTime = now;
        momentumOffset = currentOffset.value;
      }
    };
    const onTouchEnd = () => {
      if (isReadonly()) {
        return;
      }
      const distance = currentOffset.value - momentumOffset;
      const duration = Date.now() - touchStartTime;
      const startMomentum = duration < MOMENTUM_TIME && Math.abs(distance) > MOMENTUM_DISTANCE;
      if (startMomentum) {
        momentum(distance, duration);
        return;
      }
      const index = getIndexByOffset(currentOffset.value);
      currentDuration.value = DEFAULT_DURATION;
      updateValueByIndex(index);
      setTimeout(() => {
        moving = false;
      }, 0);
    };
    const renderOptions = () => {
      const optionStyle = {
        height: `${props.optionHeight}px`
      };
      return props.options.map((option, index) => {
        const text = option[props.fields.text];
        const {
          disabled
        } = option;
        const value = option[props.fields.value];
        const data = {
          role: "button",
          style: optionStyle,
          tabindex: disabled ? -1 : 0,
          class: [bem13("item", {
            disabled,
            selected: value === props.value
          }), option.className],
          onClick: () => onClickOption(index)
        };
        const childData = {
          class: "van-ellipsis",
          [props.allowHtml ? "innerHTML" : "textContent"]: text
        };
        return createVNode("li", data, [slots.option ? slots.option(option) : createVNode("div", childData, null)]);
      });
    };
    useParent(PICKER_KEY);
    useExpose({
      stopMomentum
    });
    watchEffect(() => {
      const index = props.options.findIndex((option) => option[props.fields.value] === props.value);
      const enabledIndex = findIndexOfEnabledOption(props.options, index);
      const offset2 = -enabledIndex * props.optionHeight;
      currentOffset.value = offset2;
    });
    useEventListener("touchmove", onTouchMove, {
      target: root
    });
    return () => createVNode("div", {
      "ref": root,
      "class": bem13(),
      "onTouchstartPassive": onTouchStart,
      "onTouchend": onTouchEnd,
      "onTouchcancel": onTouchEnd
    }, [createVNode("ul", {
      "ref": wrapper,
      "style": {
        transform: `translate3d(0, ${currentOffset.value + baseOffset()}px, 0)`,
        transitionDuration: `${currentDuration.value}ms`,
        transitionProperty: currentDuration.value ? "all" : "none"
      },
      "class": bem13("wrapper"),
      "onTransitionend": stopMomentum
    }, [renderOptions()])]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/picker/PickerToolbar.mjs
var [name14] = createNamespace("picker-toolbar");
var pickerToolbarProps = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String
};
var pickerToolbarSlots = ["cancel", "confirm", "title", "toolbar"];
var pickerToolbarPropKeys = Object.keys(pickerToolbarProps);
var stdin_default15 = defineComponent({
  name: name14,
  props: pickerToolbarProps,
  emits: ["confirm", "cancel"],
  setup(props, {
    emit,
    slots
  }) {
    const renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }
      if (props.title) {
        return createVNode("div", {
          "class": [bem12("title"), "van-ellipsis"]
        }, [props.title]);
      }
    };
    const onCancel = () => emit("cancel");
    const onConfirm = () => emit("confirm");
    const renderCancel = () => {
      const text = props.cancelButtonText || t("cancel");
      return createVNode("button", {
        "type": "button",
        "class": [bem12("cancel"), HAPTICS_FEEDBACK],
        "onClick": onCancel
      }, [slots.cancel ? slots.cancel() : text]);
    };
    const renderConfirm = () => {
      const text = props.confirmButtonText || t("confirm");
      return createVNode("button", {
        "type": "button",
        "class": [bem12("confirm"), HAPTICS_FEEDBACK],
        "onClick": onConfirm
      }, [slots.confirm ? slots.confirm() : text]);
    };
    return () => createVNode("div", {
      "class": bem12("toolbar")
    }, [slots.toolbar ? slots.toolbar() : [renderCancel(), renderTitle(), renderConfirm()]]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tabs/utils.mjs
function scrollLeftTo(scroller, to, duration) {
  let count = 0;
  const from = scroller.scrollLeft;
  const frames = duration === 0 ? 1 : Math.round(duration * 1e3 / 16);
  function animate() {
    scroller.scrollLeft += (to - from) / frames;
    if (++count < frames) {
      raf(animate);
    }
  }
  animate();
}
function scrollTopTo(scroller, to, duration, callback) {
  let current2 = getScrollTop(scroller);
  const isDown = current2 < to;
  const frames = duration === 0 ? 1 : Math.round(duration * 1e3 / 16);
  const step = (to - current2) / frames;
  function animate() {
    current2 += step;
    if (isDown && current2 > to || !isDown && current2 < to) {
      current2 = to;
    }
    setScrollTop(scroller, current2);
    if (isDown && current2 < to || !isDown && current2 > to) {
      raf(animate);
    } else if (callback) {
      raf(callback);
    }
  }
  animate();
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/composables/use-id.mjs
var current = 0;
function useId() {
  const vm = getCurrentInstance();
  const { name: name103 = "unknown" } = (vm == null ? void 0 : vm.type) || {};
  if (false) {
    return name103;
  }
  return `${name103}-${++current}`;
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/composables/use-refs.mjs
function useRefs() {
  const refs = ref([]);
  const cache = [];
  onBeforeUpdate(() => {
    refs.value = [];
  });
  const setRefs = (index) => {
    if (!cache[index]) {
      cache[index] = (el) => {
        refs.value[index] = el;
      };
    }
    return cache[index];
  };
  return [refs, setRefs];
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/composables/use-visibility-change.mjs
function useVisibilityChange(target, onChange) {
  if (!inBrowser || !window.IntersectionObserver) {
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      onChange(entries[0].intersectionRatio > 0);
    },
    { root: document.body }
  );
  const observe = () => {
    if (target.value) {
      observer.observe(target.value);
    }
  };
  const unobserve = () => {
    if (target.value) {
      observer.unobserve(target.value);
    }
  };
  onDeactivated(unobserve);
  onBeforeUnmount(unobserve);
  onMountedOrActivated(observe);
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/sticky/Sticky.mjs
var [name15, bem14] = createNamespace("sticky");
var stickyProps = {
  zIndex: numericProp,
  position: makeStringProp("top"),
  container: Object,
  offsetTop: makeNumericProp(0),
  offsetBottom: makeNumericProp(0)
};
var stdin_default16 = defineComponent({
  name: name15,
  props: stickyProps,
  emits: ["scroll", "change"],
  setup(props, {
    emit,
    slots
  }) {
    const root = ref();
    const scrollParent = useScrollParent(root);
    const state = reactive({
      fixed: false,
      width: 0,
      height: 0,
      transform: 0
    });
    const offset2 = computed(() => unitToPx(props.position === "top" ? props.offsetTop : props.offsetBottom));
    const rootStyle = computed(() => {
      const {
        fixed,
        height: height2,
        width: width2
      } = state;
      if (fixed) {
        return {
          width: `${width2}px`,
          height: `${height2}px`
        };
      }
    });
    const stickyStyle = computed(() => {
      if (!state.fixed) {
        return;
      }
      const style = extend(getZIndexStyle(props.zIndex), {
        width: `${state.width}px`,
        height: `${state.height}px`,
        [props.position]: `${offset2.value}px`
      });
      if (state.transform) {
        style.transform = `translate3d(0, ${state.transform}px, 0)`;
      }
      return style;
    });
    const emitScroll = (scrollTop) => emit("scroll", {
      scrollTop,
      isFixed: state.fixed
    });
    const onScroll = () => {
      if (!root.value || isHidden(root)) {
        return;
      }
      const {
        container,
        position
      } = props;
      const rootRect = useRect(root);
      const scrollTop = getScrollTop(window);
      state.width = rootRect.width;
      state.height = rootRect.height;
      if (position === "top") {
        if (container) {
          const containerRect = useRect(container);
          const difference = containerRect.bottom - offset2.value - state.height;
          state.fixed = offset2.value > rootRect.top && containerRect.bottom > 0;
          state.transform = difference < 0 ? difference : 0;
        } else {
          state.fixed = offset2.value > rootRect.top;
        }
      } else {
        const {
          clientHeight
        } = document.documentElement;
        if (container) {
          const containerRect = useRect(container);
          const difference = clientHeight - containerRect.top - offset2.value - state.height;
          state.fixed = clientHeight - offset2.value < rootRect.bottom && clientHeight > containerRect.top;
          state.transform = difference < 0 ? -difference : 0;
        } else {
          state.fixed = clientHeight - offset2.value < rootRect.bottom;
        }
      }
      emitScroll(scrollTop);
    };
    watch(() => state.fixed, (value) => emit("change", value));
    useEventListener("scroll", onScroll, {
      target: scrollParent,
      passive: true
    });
    useVisibilityChange(root, onScroll);
    return () => {
      var _a;
      return createVNode("div", {
        "ref": root,
        "style": rootStyle.value
      }, [createVNode("div", {
        "class": bem14({
          fixed: state.fixed
        }),
        "style": stickyStyle.value
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/sticky/index.mjs
var Sticky = withInstall(stdin_default16);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tabs/TabsTitle.mjs
var [name16, bem15] = createNamespace("tab");
var stdin_default17 = defineComponent({
  name: name16,
  props: {
    id: String,
    dot: Boolean,
    type: String,
    color: String,
    title: String,
    badge: numericProp,
    shrink: Boolean,
    isActive: Boolean,
    disabled: Boolean,
    controls: String,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    showZeroBadge: truthProp
  },
  setup(props, {
    slots
  }) {
    const style = computed(() => {
      const style2 = {};
      const {
        type,
        color,
        disabled,
        isActive,
        activeColor,
        inactiveColor
      } = props;
      const isCard = type === "card";
      if (color && isCard) {
        style2.borderColor = color;
        if (!disabled) {
          if (isActive) {
            style2.backgroundColor = color;
          } else {
            style2.color = color;
          }
        }
      }
      const titleColor = isActive ? activeColor : inactiveColor;
      if (titleColor) {
        style2.color = titleColor;
      }
      return style2;
    });
    const renderText = () => {
      const Text2 = createVNode("span", {
        "class": bem15("text", {
          ellipsis: !props.scrollable
        })
      }, [slots.title ? slots.title() : props.title]);
      if (props.dot || isDef(props.badge) && props.badge !== "") {
        return createVNode(Badge, {
          "dot": props.dot,
          "content": props.badge,
          "showZero": props.showZeroBadge
        }, {
          default: () => [Text2]
        });
      }
      return Text2;
    };
    return () => createVNode("div", {
      "id": props.id,
      "role": "tab",
      "class": [bem15([props.type, {
        grow: props.scrollable && !props.shrink,
        shrink: props.shrink,
        active: props.isActive,
        disabled: props.disabled
      }])],
      "style": style.value,
      "tabindex": props.disabled ? void 0 : props.isActive ? 0 : -1,
      "aria-selected": props.isActive,
      "aria-disabled": props.disabled || void 0,
      "aria-controls": props.controls
    }, [renderText()]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/swipe/Swipe.mjs
var [name17, bem16] = createNamespace("swipe");
var swipeProps = {
  loop: truthProp,
  width: numericProp,
  height: numericProp,
  vertical: Boolean,
  autoplay: makeNumericProp(0),
  duration: makeNumericProp(500),
  touchable: truthProp,
  lazyRender: Boolean,
  initialSwipe: makeNumericProp(0),
  indicatorColor: String,
  showIndicators: truthProp,
  stopPropagation: truthProp
};
var SWIPE_KEY = Symbol(name17);
var stdin_default18 = defineComponent({
  name: name17,
  props: swipeProps,
  emits: ["change"],
  setup(props, {
    emit,
    slots
  }) {
    const root = ref();
    const track = ref();
    const state = reactive({
      rect: null,
      width: 0,
      height: 0,
      offset: 0,
      active: 0,
      swiping: false
    });
    const touch = useTouch();
    const {
      children,
      linkChildren
    } = useChildren(SWIPE_KEY);
    const count = computed(() => children.length);
    const size = computed(() => state[props.vertical ? "height" : "width"]);
    const delta = computed(() => props.vertical ? touch.deltaY.value : touch.deltaX.value);
    const minOffset = computed(() => {
      if (state.rect) {
        const base = props.vertical ? state.rect.height : state.rect.width;
        return base - size.value * count.value;
      }
      return 0;
    });
    const maxCount = computed(() => size.value ? Math.ceil(Math.abs(minOffset.value) / size.value) : count.value);
    const trackSize = computed(() => count.value * size.value);
    const activeIndicator = computed(() => (state.active + count.value) % count.value);
    const isCorrectDirection = computed(() => {
      const expect = props.vertical ? "vertical" : "horizontal";
      return touch.direction.value === expect;
    });
    const trackStyle = computed(() => {
      const style = {
        transitionDuration: `${state.swiping ? 0 : props.duration}ms`,
        transform: `translate${props.vertical ? "Y" : "X"}(${state.offset}px)`
      };
      if (size.value) {
        const mainAxis = props.vertical ? "height" : "width";
        const crossAxis = props.vertical ? "width" : "height";
        style[mainAxis] = `${trackSize.value}px`;
        style[crossAxis] = props[crossAxis] ? `${props[crossAxis]}px` : "";
      }
      return style;
    });
    const getTargetActive = (pace) => {
      const {
        active
      } = state;
      if (pace) {
        if (props.loop) {
          return clamp(active + pace, -1, count.value);
        }
        return clamp(active + pace, 0, maxCount.value);
      }
      return active;
    };
    const getTargetOffset = (targetActive, offset2 = 0) => {
      let currentPosition = targetActive * size.value;
      if (!props.loop) {
        currentPosition = Math.min(currentPosition, -minOffset.value);
      }
      let targetOffset = offset2 - currentPosition;
      if (!props.loop) {
        targetOffset = clamp(targetOffset, minOffset.value, 0);
      }
      return targetOffset;
    };
    const move = ({
      pace = 0,
      offset: offset2 = 0,
      emitChange
    }) => {
      if (count.value <= 1) {
        return;
      }
      const {
        active
      } = state;
      const targetActive = getTargetActive(pace);
      const targetOffset = getTargetOffset(targetActive, offset2);
      if (props.loop) {
        if (children[0] && targetOffset !== minOffset.value) {
          const outRightBound = targetOffset < minOffset.value;
          children[0].setOffset(outRightBound ? trackSize.value : 0);
        }
        if (children[count.value - 1] && targetOffset !== 0) {
          const outLeftBound = targetOffset > 0;
          children[count.value - 1].setOffset(outLeftBound ? -trackSize.value : 0);
        }
      }
      state.active = targetActive;
      state.offset = targetOffset;
      if (emitChange && targetActive !== active) {
        emit("change", activeIndicator.value);
      }
    };
    const correctPosition = () => {
      state.swiping = true;
      if (state.active <= -1) {
        move({
          pace: count.value
        });
      } else if (state.active >= count.value) {
        move({
          pace: -count.value
        });
      }
    };
    const prev = () => {
      correctPosition();
      touch.reset();
      doubleRaf(() => {
        state.swiping = false;
        move({
          pace: -1,
          emitChange: true
        });
      });
    };
    const next = () => {
      correctPosition();
      touch.reset();
      doubleRaf(() => {
        state.swiping = false;
        move({
          pace: 1,
          emitChange: true
        });
      });
    };
    let autoplayTimer;
    const stopAutoplay = () => clearTimeout(autoplayTimer);
    const autoplay = () => {
      stopAutoplay();
      if (props.autoplay > 0 && count.value > 1) {
        autoplayTimer = setTimeout(() => {
          next();
          autoplay();
        }, +props.autoplay);
      }
    };
    const initialize = (active = +props.initialSwipe) => {
      if (!root.value) {
        return;
      }
      const cb = () => {
        var _a, _b;
        if (!isHidden(root)) {
          const rect = {
            width: root.value.offsetWidth,
            height: root.value.offsetHeight
          };
          state.rect = rect;
          state.width = +((_a = props.width) != null ? _a : rect.width);
          state.height = +((_b = props.height) != null ? _b : rect.height);
        }
        if (count.value) {
          active = Math.min(count.value - 1, active);
        }
        state.active = active;
        state.swiping = true;
        state.offset = getTargetOffset(active);
        children.forEach((swipe) => {
          swipe.setOffset(0);
        });
        autoplay();
      };
      if (isHidden(root)) {
        nextTick().then(cb);
      } else {
        cb();
      }
    };
    const resize = () => initialize(state.active);
    let touchStartTime;
    const onTouchStart = (event) => {
      if (!props.touchable)
        return;
      touch.start(event);
      touchStartTime = Date.now();
      stopAutoplay();
      correctPosition();
    };
    const onTouchMove = (event) => {
      if (props.touchable && state.swiping) {
        touch.move(event);
        if (isCorrectDirection.value) {
          const isEdgeTouch = !props.loop && (state.active === 0 && delta.value > 0 || state.active === count.value - 1 && delta.value < 0);
          if (!isEdgeTouch) {
            preventDefault(event, props.stopPropagation);
            move({
              offset: delta.value
            });
          }
        }
      }
    };
    const onTouchEnd = () => {
      if (!props.touchable || !state.swiping) {
        return;
      }
      const duration = Date.now() - touchStartTime;
      const speed = delta.value / duration;
      const shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(delta.value) > size.value / 2;
      if (shouldSwipe && isCorrectDirection.value) {
        const offset2 = props.vertical ? touch.offsetY.value : touch.offsetX.value;
        let pace = 0;
        if (props.loop) {
          pace = offset2 > 0 ? delta.value > 0 ? -1 : 1 : 0;
        } else {
          pace = -Math[delta.value > 0 ? "ceil" : "floor"](delta.value / size.value);
        }
        move({
          pace,
          emitChange: true
        });
      } else if (delta.value) {
        move({
          pace: 0
        });
      }
      state.swiping = false;
      autoplay();
    };
    const swipeTo = (index, options = {}) => {
      correctPosition();
      touch.reset();
      doubleRaf(() => {
        let targetIndex;
        if (props.loop && index === count.value) {
          targetIndex = state.active === 0 ? 0 : index;
        } else {
          targetIndex = index % count.value;
        }
        if (options.immediate) {
          doubleRaf(() => {
            state.swiping = false;
          });
        } else {
          state.swiping = false;
        }
        move({
          pace: targetIndex - state.active,
          emitChange: true
        });
      });
    };
    const renderDot = (_, index) => {
      const active = index === activeIndicator.value;
      const style = active ? {
        backgroundColor: props.indicatorColor
      } : void 0;
      return createVNode("i", {
        "style": style,
        "class": bem16("indicator", {
          active
        })
      }, null);
    };
    const renderIndicator = () => {
      if (slots.indicator) {
        return slots.indicator({
          active: activeIndicator.value,
          total: count.value
        });
      }
      if (props.showIndicators && count.value > 1) {
        return createVNode("div", {
          "class": bem16("indicators", {
            vertical: props.vertical
          })
        }, [Array(count.value).fill("").map(renderDot)]);
      }
    };
    useExpose({
      prev,
      next,
      state,
      resize,
      swipeTo
    });
    linkChildren({
      size,
      props,
      count,
      activeIndicator
    });
    watch(() => props.initialSwipe, (value) => initialize(+value));
    watch(count, () => initialize(state.active));
    watch(() => props.autoplay, autoplay);
    watch([windowWidth, windowHeight], resize);
    watch(usePageVisibility(), (visible) => {
      if (visible === "visible") {
        autoplay();
      } else {
        stopAutoplay();
      }
    });
    onMounted(initialize);
    onActivated(() => initialize(state.active));
    onPopupReopen(() => initialize(state.active));
    onDeactivated(stopAutoplay);
    onBeforeUnmount(stopAutoplay);
    useEventListener("touchmove", onTouchMove, {
      target: track
    });
    return () => {
      var _a;
      return createVNode("div", {
        "ref": root,
        "class": bem16()
      }, [createVNode("div", {
        "ref": track,
        "style": trackStyle.value,
        "class": bem16("track", {
          vertical: props.vertical
        }),
        "onTouchstartPassive": onTouchStart,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), renderIndicator()]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/swipe/index.mjs
var Swipe = withInstall(stdin_default18);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tabs/TabsContent.mjs
var [name18, bem17] = createNamespace("tabs");
var stdin_default19 = defineComponent({
  name: name18,
  props: {
    count: makeRequiredProp(Number),
    inited: Boolean,
    animated: Boolean,
    duration: makeRequiredProp(numericProp),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: makeRequiredProp(Number)
  },
  emits: ["change"],
  setup(props, {
    emit,
    slots
  }) {
    const swipeRef = ref();
    const onChange = (index) => emit("change", index);
    const renderChildren = () => {
      var _a;
      const Content = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (props.animated || props.swipeable) {
        return createVNode(Swipe, {
          "ref": swipeRef,
          "loop": false,
          "class": bem17("track"),
          "duration": +props.duration * 1e3,
          "touchable": props.swipeable,
          "lazyRender": props.lazyRender,
          "showIndicators": false,
          "onChange": onChange
        }, {
          default: () => [Content]
        });
      }
      return Content;
    };
    const swipeToCurrentTab = (index) => {
      const swipe = swipeRef.value;
      if (swipe && swipe.state.active !== index) {
        swipe.swipeTo(index, {
          immediate: !props.inited
        });
      }
    };
    watch(() => props.currentIndex, swipeToCurrentTab);
    onMounted(() => {
      swipeToCurrentTab(props.currentIndex);
    });
    useExpose({
      swipeRef
    });
    return () => createVNode("div", {
      "class": bem17("content", {
        animated: props.animated || props.swipeable
      })
    }, [renderChildren()]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tabs/Tabs.mjs
var [name19, bem18] = createNamespace("tabs");
var tabsProps = {
  type: makeStringProp("line"),
  color: String,
  border: Boolean,
  sticky: Boolean,
  shrink: Boolean,
  active: makeNumericProp(0),
  duration: makeNumericProp(0.3),
  animated: Boolean,
  ellipsis: truthProp,
  swipeable: Boolean,
  scrollspy: Boolean,
  offsetTop: makeNumericProp(0),
  background: String,
  lazyRender: truthProp,
  lineWidth: numericProp,
  lineHeight: numericProp,
  beforeChange: Function,
  swipeThreshold: makeNumericProp(5),
  titleActiveColor: String,
  titleInactiveColor: String
};
var TABS_KEY = Symbol(name19);
var stdin_default20 = defineComponent({
  name: name19,
  props: tabsProps,
  emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
  setup(props, {
    emit,
    slots
  }) {
    let tabHeight;
    let lockScroll;
    let stickyFixed;
    const root = ref();
    const navRef = ref();
    const wrapRef = ref();
    const contentRef = ref();
    const id = useId();
    const scroller = useScrollParent(root);
    const [titleRefs, setTitleRefs] = useRefs();
    const {
      children,
      linkChildren
    } = useChildren(TABS_KEY);
    const state = reactive({
      inited: false,
      position: "",
      lineStyle: {},
      currentIndex: -1
    });
    const scrollable = computed(() => children.length > props.swipeThreshold || !props.ellipsis || props.shrink);
    const navStyle = computed(() => ({
      borderColor: props.color,
      background: props.background
    }));
    const getTabName = (tab, index) => {
      var _a;
      return (_a = tab.name) != null ? _a : index;
    };
    const currentName = computed(() => {
      const activeTab = children[state.currentIndex];
      if (activeTab) {
        return getTabName(activeTab, state.currentIndex);
      }
    });
    const offsetTopPx = computed(() => unitToPx(props.offsetTop));
    const scrollOffset = computed(() => {
      if (props.sticky) {
        return offsetTopPx.value + tabHeight;
      }
      return 0;
    });
    const scrollIntoView = (immediate) => {
      const nav = navRef.value;
      const titles = titleRefs.value;
      if (!scrollable.value || !nav || !titles || !titles[state.currentIndex]) {
        return;
      }
      const title = titles[state.currentIndex].$el;
      const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      scrollLeftTo(nav, to, immediate ? 0 : +props.duration);
    };
    const setLine = () => {
      const shouldAnimate = state.inited;
      nextTick(() => {
        const titles = titleRefs.value;
        if (!titles || !titles[state.currentIndex] || props.type !== "line" || isHidden(root.value)) {
          return;
        }
        const title = titles[state.currentIndex].$el;
        const {
          lineWidth,
          lineHeight
        } = props;
        const left2 = title.offsetLeft + title.offsetWidth / 2;
        const lineStyle = {
          width: addUnit(lineWidth),
          backgroundColor: props.color,
          transform: `translateX(${left2}px) translateX(-50%)`
        };
        if (shouldAnimate) {
          lineStyle.transitionDuration = `${props.duration}s`;
        }
        if (isDef(lineHeight)) {
          const height2 = addUnit(lineHeight);
          lineStyle.height = height2;
          lineStyle.borderRadius = height2;
        }
        state.lineStyle = lineStyle;
      });
    };
    const findAvailableTab = (index) => {
      const diff = index < state.currentIndex ? -1 : 1;
      while (index >= 0 && index < children.length) {
        if (!children[index].disabled) {
          return index;
        }
        index += diff;
      }
    };
    const setCurrentIndex = (currentIndex, skipScrollIntoView) => {
      const newIndex = findAvailableTab(currentIndex);
      if (!isDef(newIndex)) {
        return;
      }
      const newTab = children[newIndex];
      const newName = getTabName(newTab, newIndex);
      const shouldEmitChange = state.currentIndex !== null;
      if (state.currentIndex !== newIndex) {
        state.currentIndex = newIndex;
        if (!skipScrollIntoView) {
          scrollIntoView();
        }
        setLine();
      }
      if (newName !== props.active) {
        emit("update:active", newName);
        if (shouldEmitChange) {
          emit("change", newName, newTab.title);
        }
      }
      if (stickyFixed && !props.scrollspy) {
        setRootScrollTop(Math.ceil(getElementTop(root.value) - offsetTopPx.value));
      }
    };
    const setCurrentIndexByName = (name210, skipScrollIntoView) => {
      const matched = children.find((tab, index2) => getTabName(tab, index2) === name210);
      const index = matched ? children.indexOf(matched) : 0;
      setCurrentIndex(index, skipScrollIntoView);
    };
    const scrollToCurrentContent = (immediate = false) => {
      if (props.scrollspy) {
        const target = children[state.currentIndex].$el;
        if (target && scroller.value) {
          const to = getElementTop(target, scroller.value) - scrollOffset.value;
          lockScroll = true;
          scrollTopTo(scroller.value, to, immediate ? 0 : +props.duration, () => {
            lockScroll = false;
          });
        }
      }
    };
    const onClickTab = (item, index, event) => {
      const {
        title,
        disabled
      } = children[index];
      const name210 = getTabName(children[index], index);
      if (!disabled) {
        callInterceptor(props.beforeChange, {
          args: [name210],
          done: () => {
            setCurrentIndex(index);
            scrollToCurrentContent();
          }
        });
        route(item);
      }
      emit("clickTab", {
        name: name210,
        title,
        event,
        disabled
      });
    };
    const onStickyScroll = (params) => {
      stickyFixed = params.isFixed;
      emit("scroll", params);
    };
    const scrollTo = (name210) => {
      nextTick(() => {
        setCurrentIndexByName(name210);
        scrollToCurrentContent(true);
      });
    };
    const getCurrentIndexOnScroll = () => {
      for (let index = 0; index < children.length; index++) {
        const {
          top: top2
        } = useRect(children[index].$el);
        if (top2 > scrollOffset.value) {
          return index === 0 ? 0 : index - 1;
        }
      }
      return children.length - 1;
    };
    const onScroll = () => {
      if (props.scrollspy && !lockScroll) {
        const index = getCurrentIndexOnScroll();
        setCurrentIndex(index);
      }
    };
    const renderNav = () => children.map((item, index) => createVNode(stdin_default17, mergeProps({
      "key": item.id,
      "id": `${id}-${index}`,
      "ref": setTitleRefs(index),
      "type": props.type,
      "color": props.color,
      "style": item.titleStyle,
      "class": item.titleClass,
      "shrink": props.shrink,
      "isActive": index === state.currentIndex,
      "controls": item.id,
      "scrollable": scrollable.value,
      "activeColor": props.titleActiveColor,
      "inactiveColor": props.titleInactiveColor,
      "onClick": (event) => onClickTab(item, index, event)
    }, pick(item, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
      title: item.$slots.title
    }));
    const renderLine = () => {
      if (props.type === "line" && children.length) {
        return createVNode("div", {
          "class": bem18("line"),
          "style": state.lineStyle
        }, null);
      }
    };
    const renderHeader = () => {
      var _a, _b, _c;
      const {
        type,
        border,
        sticky
      } = props;
      const Header = [createVNode("div", {
        "ref": sticky ? void 0 : wrapRef,
        "class": [bem18("wrap"), {
          [BORDER_TOP_BOTTOM]: type === "line" && border
        }]
      }, [createVNode("div", {
        "ref": navRef,
        "role": "tablist",
        "class": bem18("nav", [type, {
          shrink: props.shrink,
          complete: scrollable.value
        }]),
        "style": navStyle.value,
        "aria-orientation": "horizontal"
      }, [(_a = slots["nav-left"]) == null ? void 0 : _a.call(slots), renderNav(), renderLine(), (_b = slots["nav-right"]) == null ? void 0 : _b.call(slots)])]), (_c = slots["nav-bottom"]) == null ? void 0 : _c.call(slots)];
      if (sticky) {
        return createVNode("div", {
          "ref": wrapRef
        }, [Header]);
      }
      return Header;
    };
    watch([() => props.color, windowWidth], setLine);
    watch(() => props.active, (value) => {
      if (value !== currentName.value) {
        setCurrentIndexByName(value);
      }
    });
    watch(() => children.length, () => {
      if (state.inited) {
        setCurrentIndexByName(props.active);
        setLine();
        nextTick(() => {
          scrollIntoView(true);
        });
      }
    });
    const init = () => {
      setCurrentIndexByName(props.active, true);
      nextTick(() => {
        state.inited = true;
        if (wrapRef.value) {
          tabHeight = useRect(wrapRef.value).height;
        }
        scrollIntoView(true);
      });
    };
    const onRendered = (name210, title) => emit("rendered", name210, title);
    const resize = () => {
      setLine();
      nextTick(() => {
        var _a, _b;
        return (_b = (_a = contentRef.value) == null ? void 0 : _a.swipeRef.value) == null ? void 0 : _b.resize();
      });
    };
    useExpose({
      resize,
      scrollTo
    });
    onActivated(setLine);
    onPopupReopen(setLine);
    onMountedOrActivated(init);
    useEventListener("scroll", onScroll, {
      target: scroller,
      passive: true
    });
    linkChildren({
      id,
      props,
      setLine,
      onRendered,
      currentName,
      scrollIntoView
    });
    return () => createVNode("div", {
      "ref": root,
      "class": bem18([props.type])
    }, [props.sticky ? createVNode(Sticky, {
      "container": root.value,
      "offsetTop": offsetTopPx.value,
      "onScroll": onStickyScroll
    }, {
      default: () => [renderHeader()]
    }) : renderHeader(), createVNode(stdin_default19, {
      "ref": contentRef,
      "count": children.length,
      "inited": state.inited,
      "animated": props.animated,
      "duration": props.duration,
      "swipeable": props.swipeable,
      "lazyRender": props.lazyRender,
      "currentIndex": state.currentIndex,
      "onChange": setCurrentIndex
    }, {
      default: () => {
        var _a;
        return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
      }
    })]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/composables/use-tab-status.mjs
var TAB_STATUS_KEY = Symbol();
var useTabStatus = () => inject(TAB_STATUS_KEY, null);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/swipe-item/SwipeItem.mjs
var [name20, bem19] = createNamespace("swipe-item");
var stdin_default21 = defineComponent({
  name: name20,
  setup(props, {
    slots
  }) {
    let rendered;
    const state = reactive({
      offset: 0,
      inited: false,
      mounted: false
    });
    const {
      parent,
      index
    } = useParent(SWIPE_KEY);
    if (!parent) {
      if (true) {
        console.error("[Vant] <SwipeItem> must be a child component of <Swipe>.");
      }
      return;
    }
    const style = computed(() => {
      const style2 = {};
      const {
        vertical
      } = parent.props;
      if (parent.size.value) {
        style2[vertical ? "height" : "width"] = `${parent.size.value}px`;
      }
      if (state.offset) {
        style2.transform = `translate${vertical ? "Y" : "X"}(${state.offset}px)`;
      }
      return style2;
    });
    const shouldRender = computed(() => {
      const {
        loop,
        lazyRender
      } = parent.props;
      if (!lazyRender || rendered) {
        return true;
      }
      if (!state.mounted) {
        return false;
      }
      const active = parent.activeIndicator.value;
      const maxActive = parent.count.value - 1;
      const prevActive = active === 0 && loop ? maxActive : active - 1;
      const nextActive = active === maxActive && loop ? 0 : active + 1;
      rendered = index.value === active || index.value === prevActive || index.value === nextActive;
      return rendered;
    });
    const setOffset = (offset2) => {
      state.offset = offset2;
    };
    onMounted(() => {
      nextTick(() => {
        state.mounted = true;
      });
    });
    useExpose({
      setOffset
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": bem19(),
        "style": style.value
      }, [shouldRender.value ? (_a = slots.default) == null ? void 0 : _a.call(slots) : null]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/swipe-item/index.mjs
var SwipeItem = withInstall(stdin_default21);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tab/Tab.mjs
var [name21, bem20] = createNamespace("tab");
var tabProps = extend({}, routeProps, {
  dot: Boolean,
  name: numericProp,
  badge: numericProp,
  title: String,
  disabled: Boolean,
  titleClass: unknownProp,
  titleStyle: [String, Object],
  showZeroBadge: truthProp
});
var stdin_default22 = defineComponent({
  name: name21,
  props: tabProps,
  setup(props, {
    slots
  }) {
    const id = useId();
    const inited = ref(false);
    const {
      parent,
      index
    } = useParent(TABS_KEY);
    if (!parent) {
      if (true) {
        console.error("[Vant] <Tab> must be a child component of <Tabs>.");
      }
      return;
    }
    const getName = () => {
      var _a;
      return (_a = props.name) != null ? _a : index.value;
    };
    const init = () => {
      inited.value = true;
      if (parent.props.lazyRender) {
        nextTick(() => {
          parent.onRendered(getName(), props.title);
        });
      }
    };
    const active = computed(() => {
      const isActive = getName() === parent.currentName.value;
      if (isActive && !inited.value) {
        init();
      }
      return isActive;
    });
    const hasInactiveClass = ref(!active.value);
    watch(active, (val) => {
      if (val) {
        hasInactiveClass.value = false;
      } else {
        doubleRaf(() => {
          hasInactiveClass.value = true;
        });
      }
    });
    watch(() => props.title, () => {
      parent.setLine();
      parent.scrollIntoView();
    });
    provide(TAB_STATUS_KEY, active);
    return () => {
      var _a;
      const label = `${parent.id}-${index.value}`;
      const {
        animated,
        swipeable,
        scrollspy,
        lazyRender
      } = parent.props;
      if (!slots.default && !animated) {
        return;
      }
      const show = scrollspy || active.value;
      if (animated || swipeable) {
        return createVNode(SwipeItem, {
          "id": id,
          "role": "tabpanel",
          "class": bem20("panel-wrapper", {
            inactive: hasInactiveClass.value
          }),
          "tabindex": active.value ? 0 : -1,
          "aria-hidden": !active.value,
          "aria-labelledby": label
        }, {
          default: () => {
            var _a2;
            return [createVNode("div", {
              "class": bem20("panel")
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])];
          }
        });
      }
      const shouldRender = inited.value || scrollspy || !lazyRender;
      const Content = shouldRender ? (_a = slots.default) == null ? void 0 : _a.call(slots) : null;
      useExpose({
        id
      });
      return withDirectives(createVNode("div", {
        "id": id,
        "role": "tabpanel",
        "class": bem20("panel"),
        "tabindex": show ? 0 : -1,
        "aria-labelledby": label
      }, [Content]), [[vShow, show]]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tab/index.mjs
var Tab = withInstall(stdin_default22);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tabs/index.mjs
var Tabs = withInstall(stdin_default20);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/picker-group/PickerGroup.mjs
var [name22, bem21] = createNamespace("picker-group");
var PICKER_GROUP_KEY = Symbol(name22);
var pickerGroupProps = extend({
  tabs: makeArrayProp()
}, pickerToolbarProps);
var stdin_default23 = defineComponent({
  name: name22,
  props: pickerGroupProps,
  emits: ["confirm", "cancel"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      children,
      linkChildren
    } = useChildren(PICKER_GROUP_KEY);
    linkChildren();
    const onConfirm = () => {
      emit("confirm", children.map((item) => item.confirm()));
    };
    const onCancel = () => emit("cancel");
    return () => {
      var _a;
      const childNodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
      return createVNode("div", {
        "class": bem21()
      }, [createVNode(stdin_default15, mergeProps(props, {
        "onConfirm": onConfirm,
        "onCancel": onCancel
      }), null), createVNode(Tabs, {
        "shrink": true,
        "class": bem21("tabs"),
        "animated": true
      }, {
        default: () => [props.tabs.map((title, index) => createVNode(Tab, {
          "title": title,
          "titleClass": bem21("tab-title")
        }, {
          default: () => [childNodes == null ? void 0 : childNodes[index]]
        }))]
      })]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/picker/Picker.mjs
var pickerSharedProps = extend({
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  optionHeight: makeNumericProp(44),
  showToolbar: truthProp,
  swipeDuration: makeNumericProp(1e3),
  visibleOptionNum: makeNumericProp(6)
}, pickerToolbarProps);
var pickerProps = extend({}, pickerSharedProps, {
  columns: makeArrayProp(),
  modelValue: makeArrayProp(),
  toolbarPosition: makeStringProp("top"),
  columnsFieldNames: Object
});
var stdin_default24 = defineComponent({
  name: name12,
  props: pickerProps,
  emits: ["confirm", "cancel", "change", "clickOption", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const columnsRef = ref();
    const selectedValues = ref(props.modelValue.slice(0));
    const {
      parent
    } = useParent(PICKER_GROUP_KEY);
    const {
      children,
      linkChildren
    } = useChildren(PICKER_KEY);
    linkChildren();
    const fields = computed(() => assignDefaultFields(props.columnsFieldNames));
    const optionHeight = computed(() => unitToPx(props.optionHeight));
    const columnsType = computed(() => getColumnsType(props.columns, fields.value));
    const currentColumns = computed(() => {
      const {
        columns
      } = props;
      switch (columnsType.value) {
        case "multiple":
          return columns;
        case "cascade":
          return formatCascadeColumns(columns, fields.value, selectedValues);
        default:
          return [columns];
      }
    });
    const hasOptions = computed(() => currentColumns.value.some((options) => options.length));
    const selectedOptions = computed(() => currentColumns.value.map((options, index) => findOptionByValue(options, selectedValues.value[index], fields.value)));
    const selectedIndexes = computed(() => currentColumns.value.map((options, index) => options.findIndex((option) => option[fields.value.value] === selectedValues.value[index])));
    const setValue = (index, value) => {
      if (selectedValues.value[index] !== value) {
        const newValues = selectedValues.value.slice(0);
        newValues[index] = value;
        selectedValues.value = newValues;
      }
    };
    const getEventParams = () => ({
      selectedValues: selectedValues.value.slice(0),
      selectedOptions: selectedOptions.value,
      selectedIndexes: selectedIndexes.value
    });
    const onChange = (value, columnIndex) => {
      setValue(columnIndex, value);
      if (columnsType.value === "cascade") {
        selectedValues.value.forEach((value2, index) => {
          const options = currentColumns.value[index];
          if (!isOptionExist(options, value2, fields.value)) {
            setValue(index, options.length ? options[0][fields.value.value] : void 0);
          }
        });
      }
      emit("change", extend({
        columnIndex
      }, getEventParams()));
    };
    const onClickOption = (currentOption, columnIndex) => emit("clickOption", extend({
      columnIndex,
      currentOption
    }, getEventParams()));
    const confirm = () => {
      children.forEach((child) => child.stopMomentum());
      const params = getEventParams();
      nextTick(() => {
        emit("confirm", params);
      });
      return params;
    };
    const cancel = () => emit("cancel", getEventParams());
    const renderColumnItems = () => currentColumns.value.map((options, columnIndex) => createVNode(stdin_default14, {
      "value": selectedValues.value[columnIndex],
      "fields": fields.value,
      "options": options,
      "readonly": props.readonly,
      "allowHtml": props.allowHtml,
      "optionHeight": optionHeight.value,
      "swipeDuration": props.swipeDuration,
      "visibleOptionNum": props.visibleOptionNum,
      "onChange": (value) => onChange(value, columnIndex),
      "onClickOption": (option) => onClickOption(option, columnIndex)
    }, {
      option: slots.option
    }));
    const renderMask = (wrapHeight) => {
      if (hasOptions.value) {
        const frameStyle = {
          height: `${optionHeight.value}px`
        };
        const maskStyle = {
          backgroundSize: `100% ${(wrapHeight - optionHeight.value) / 2}px`
        };
        return [createVNode("div", {
          "class": bem12("mask"),
          "style": maskStyle
        }, null), createVNode("div", {
          "class": [BORDER_UNSET_TOP_BOTTOM, bem12("frame")],
          "style": frameStyle
        }, null)];
      }
    };
    const renderColumns = () => {
      const wrapHeight = optionHeight.value * +props.visibleOptionNum;
      const columnsStyle = {
        height: `${wrapHeight}px`
      };
      return createVNode("div", {
        "ref": columnsRef,
        "class": bem12("columns"),
        "style": columnsStyle
      }, [renderColumnItems(), renderMask(wrapHeight)]);
    };
    const renderToolbar = () => {
      if (props.showToolbar && !parent) {
        return createVNode(stdin_default15, mergeProps(pick(props, pickerToolbarPropKeys), {
          "onConfirm": confirm,
          "onCancel": cancel
        }), pick(slots, pickerToolbarSlots));
      }
    };
    watch(currentColumns, (columns) => {
      columns.forEach((options, index) => {
        if (options.length && !isOptionExist(options, selectedValues.value[index], fields.value)) {
          setValue(index, getFirstEnabledOption(options)[fields.value.value]);
        }
      });
    }, {
      immediate: true
    });
    let lastEmittedModelValue;
    watch(() => props.modelValue, (newValues) => {
      if (!isSameValue(newValues, selectedValues.value) && !isSameValue(newValues, lastEmittedModelValue)) {
        selectedValues.value = newValues.slice(0);
      }
    }, {
      deep: true
    });
    watch(selectedValues, (newValues) => {
      if (!isSameValue(newValues, props.modelValue)) {
        lastEmittedModelValue = newValues.slice(0);
        emit("update:modelValue", lastEmittedModelValue);
      }
    }, {
      immediate: true
    });
    useEventListener("touchmove", preventDefault, {
      target: columnsRef
    });
    const getSelectedOptions = () => selectedOptions.value;
    useExpose({
      confirm,
      getSelectedOptions
    });
    return () => {
      var _a, _b;
      return createVNode("div", {
        "class": bem12()
      }, [props.toolbarPosition === "top" ? renderToolbar() : null, props.loading ? createVNode(Loading, {
        "class": bem12("loading")
      }, null) : null, (_a = slots["columns-top"]) == null ? void 0 : _a.call(slots), renderColumns(), (_b = slots["columns-bottom"]) == null ? void 0 : _b.call(slots), props.toolbarPosition === "bottom" ? renderToolbar() : null]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/area/utils.mjs
var AREA_EMPTY_CODE = "000000";
var INHERIT_SLOTS = [
  "title",
  "cancel",
  "confirm",
  "toolbar",
  "columns-top",
  "columns-bottom"
];
var INHERIT_PROPS = [
  "title",
  "loading",
  "readonly",
  "optionHeight",
  "swipeDuration",
  "visibleOptionNum",
  "cancelButtonText",
  "confirmButtonText"
];
var makeOption = (text = "", value = AREA_EMPTY_CODE, children = void 0) => ({
  text,
  value,
  children
});
function formatDataForCascade({
  areaList,
  columnsNum,
  columnsPlaceholder: placeholder
}) {
  const {
    city_list: city = {},
    county_list: county = {},
    province_list: province = {}
  } = areaList;
  const showCity = columnsNum > 1;
  const showCounty = columnsNum > 2;
  const getProvinceChildren = () => {
    if (showCity) {
      return placeholder.length ? [
        makeOption(
          placeholder[0],
          AREA_EMPTY_CODE,
          showCounty ? [] : void 0
        )
      ] : [];
    }
  };
  const provinceMap = /* @__PURE__ */ new Map();
  Object.keys(province).forEach((code) => {
    provinceMap.set(
      code.slice(0, 2),
      makeOption(province[code], code, getProvinceChildren())
    );
  });
  const cityMap = /* @__PURE__ */ new Map();
  if (showCity) {
    const getCityChildren = () => {
      if (showCounty) {
        return placeholder.length ? [makeOption(placeholder[1])] : [];
      }
    };
    Object.keys(city).forEach((code) => {
      const option = makeOption(city[code], code, getCityChildren());
      cityMap.set(code.slice(0, 4), option);
      const province2 = provinceMap.get(code.slice(0, 2));
      if (province2) {
        province2.children.push(option);
      }
    });
  }
  if (showCounty) {
    Object.keys(county).forEach((code) => {
      const city2 = cityMap.get(code.slice(0, 4));
      if (city2) {
        city2.children.push(makeOption(county[code], code));
      }
    });
  }
  const options = Array.from(provinceMap.values());
  if (placeholder.length) {
    const county2 = showCounty ? [makeOption(placeholder[2])] : void 0;
    const city2 = showCity ? [makeOption(placeholder[1], AREA_EMPTY_CODE, county2)] : void 0;
    options.unshift(makeOption(placeholder[0], AREA_EMPTY_CODE, city2));
  }
  return options;
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/picker/index.mjs
var Picker = withInstall(stdin_default24);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/area/Area.mjs
var [name23, bem22] = createNamespace("area");
var areaProps = extend({}, pickerSharedProps, {
  modelValue: String,
  columnsNum: makeNumericProp(3),
  columnsPlaceholder: makeArrayProp(),
  areaList: {
    type: Object,
    default: () => ({})
  }
});
var stdin_default25 = defineComponent({
  name: name23,
  props: areaProps,
  emits: ["change", "confirm", "cancel", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const codes = ref([]);
    const picker = ref();
    const columns = computed(() => formatDataForCascade(props));
    const onChange = (...args) => emit("change", ...args);
    const onCancel = (...args) => emit("cancel", ...args);
    const onConfirm = (...args) => emit("confirm", ...args);
    watch(codes, (newCodes) => {
      const lastCode = newCodes.length ? newCodes[newCodes.length - 1] : "";
      if (lastCode && lastCode !== props.modelValue) {
        emit("update:modelValue", lastCode);
      }
    }, {
      deep: true
    });
    watch(() => props.modelValue, (newCode) => {
      if (newCode) {
        const lastCode = codes.value.length ? codes.value[codes.value.length - 1] : "";
        if (newCode !== lastCode) {
          codes.value = [`${newCode.slice(0, 2)}0000`, `${newCode.slice(0, 4)}00`, newCode].slice(0, +props.columnsNum);
        }
      } else {
        codes.value = [];
      }
    }, {
      immediate: true
    });
    useExpose({
      confirm: () => {
        var _a;
        return (_a = picker.value) == null ? void 0 : _a.confirm();
      },
      getSelectedOptions: () => {
        var _a;
        return ((_a = picker.value) == null ? void 0 : _a.getSelectedOptions()) || [];
      }
    });
    return () => createVNode(Picker, mergeProps({
      "ref": picker,
      "modelValue": codes.value,
      "onUpdate:modelValue": ($event) => codes.value = $event,
      "class": bem22(),
      "columns": columns.value,
      "onChange": onChange,
      "onCancel": onCancel,
      "onConfirm": onConfirm
    }, pick(props, INHERIT_PROPS)), pick(slots, INHERIT_SLOTS));
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/area/index.mjs
var Area = withInstall(stdin_default25);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/cell/Cell.mjs
var [name24, bem23] = createNamespace("cell");
var cellSharedProps = {
  tag: makeStringProp("div"),
  icon: String,
  size: String,
  title: numericProp,
  value: numericProp,
  label: numericProp,
  center: Boolean,
  isLink: Boolean,
  border: truthProp,
  required: Boolean,
  iconPrefix: String,
  valueClass: unknownProp,
  labelClass: unknownProp,
  titleClass: unknownProp,
  titleStyle: null,
  arrowDirection: String,
  clickable: {
    type: Boolean,
    default: null
  }
};
var cellProps = extend({}, cellSharedProps, routeProps);
var stdin_default26 = defineComponent({
  name: name24,
  props: cellProps,
  setup(props, {
    slots
  }) {
    const route2 = useRoute();
    const renderLabel = () => {
      const showLabel = slots.label || isDef(props.label);
      if (showLabel) {
        return createVNode("div", {
          "class": [bem23("label"), props.labelClass]
        }, [slots.label ? slots.label() : props.label]);
      }
    };
    const renderTitle = () => {
      var _a;
      if (slots.title || isDef(props.title)) {
        const titleSlot = (_a = slots.title) == null ? void 0 : _a.call(slots);
        if (Array.isArray(titleSlot) && titleSlot.length === 0) {
          return;
        }
        return createVNode("div", {
          "class": [bem23("title"), props.titleClass],
          "style": props.titleStyle
        }, [titleSlot || createVNode("span", null, [props.title]), renderLabel()]);
      }
    };
    const renderValue = () => {
      const slot = slots.value || slots.default;
      const hasValue = slot || isDef(props.value);
      if (hasValue) {
        return createVNode("div", {
          "class": [bem23("value"), props.valueClass]
        }, [slot ? slot() : createVNode("span", null, [props.value])]);
      }
    };
    const renderLeftIcon = () => {
      if (slots.icon) {
        return slots.icon();
      }
      if (props.icon) {
        return createVNode(Icon, {
          "name": props.icon,
          "class": bem23("left-icon"),
          "classPrefix": props.iconPrefix
        }, null);
      }
    };
    const renderRightIcon = () => {
      if (slots["right-icon"]) {
        return slots["right-icon"]();
      }
      if (props.isLink) {
        const name210 = props.arrowDirection && props.arrowDirection !== "right" ? `arrow-${props.arrowDirection}` : "arrow";
        return createVNode(Icon, {
          "name": name210,
          "class": bem23("right-icon")
        }, null);
      }
    };
    return () => {
      var _a;
      const {
        tag,
        size,
        center,
        border,
        isLink,
        required
      } = props;
      const clickable = (_a = props.clickable) != null ? _a : isLink;
      const classes = {
        center,
        required,
        clickable,
        borderless: !border
      };
      if (size) {
        classes[size] = !!size;
      }
      return createVNode(tag, {
        "class": bem23(classes),
        "role": clickable ? "button" : void 0,
        "tabindex": clickable ? 0 : void 0,
        "onClick": route2
      }, {
        default: () => {
          var _a2;
          return [renderLeftIcon(), renderTitle(), renderValue(), renderRightIcon(), (_a2 = slots.extra) == null ? void 0 : _a2.call(slots)];
        }
      });
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/cell/index.mjs
var Cell = withInstall(stdin_default26);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/form/Form.mjs
var [name25, bem24] = createNamespace("form");
var formProps = {
  colon: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  showError: Boolean,
  labelWidth: numericProp,
  labelAlign: String,
  inputAlign: String,
  scrollToError: Boolean,
  validateFirst: Boolean,
  submitOnEnter: truthProp,
  showErrorMessage: truthProp,
  errorMessageAlign: String,
  validateTrigger: {
    type: [String, Array],
    default: "onBlur"
  }
};
var stdin_default27 = defineComponent({
  name: name25,
  props: formProps,
  emits: ["submit", "failed"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      children,
      linkChildren
    } = useChildren(FORM_KEY);
    const getFieldsByNames = (names) => {
      if (names) {
        return children.filter((field) => names.includes(field.name));
      }
      return children;
    };
    const validateSeq = (names) => new Promise((resolve, reject) => {
      const errors = [];
      const fields = getFieldsByNames(names);
      fields.reduce((promise, field) => promise.then(() => {
        if (!errors.length) {
          return field.validate().then((error) => {
            if (error) {
              errors.push(error);
            }
          });
        }
      }), Promise.resolve()).then(() => {
        if (errors.length) {
          reject(errors);
        } else {
          resolve();
        }
      });
    });
    const validateAll = (names) => new Promise((resolve, reject) => {
      const fields = getFieldsByNames(names);
      Promise.all(fields.map((item) => item.validate())).then((errors) => {
        errors = errors.filter(Boolean);
        if (errors.length) {
          reject(errors);
        } else {
          resolve();
        }
      });
    });
    const validateField = (name210) => {
      const matched = children.find((item) => item.name === name210);
      if (matched) {
        return new Promise((resolve, reject) => {
          matched.validate().then((error) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });
      }
      return Promise.reject();
    };
    const validate = (name210) => {
      if (typeof name210 === "string") {
        return validateField(name210);
      }
      return props.validateFirst ? validateSeq(name210) : validateAll(name210);
    };
    const resetValidation = (name210) => {
      if (typeof name210 === "string") {
        name210 = [name210];
      }
      const fields = getFieldsByNames(name210);
      fields.forEach((item) => {
        item.resetValidation();
      });
    };
    const getValidationStatus = () => children.reduce((form, field) => {
      form[field.name] = field.getValidationStatus();
      return form;
    }, {});
    const scrollToField = (name210, options) => {
      children.some((item) => {
        if (item.name === name210) {
          item.$el.scrollIntoView(options);
          return true;
        }
        return false;
      });
    };
    const getValues = () => children.reduce((form, field) => {
      form[field.name] = field.formValue.value;
      return form;
    }, {});
    const submit = () => {
      const values = getValues();
      validate().then(() => emit("submit", values)).catch((errors) => {
        emit("failed", {
          values,
          errors
        });
        if (props.scrollToError && errors[0].name) {
          scrollToField(errors[0].name);
        }
      });
    };
    const onSubmit = (event) => {
      preventDefault(event);
      submit();
    };
    linkChildren({
      props
    });
    useExpose({
      submit,
      validate,
      getValues,
      scrollToField,
      resetValidation,
      getValidationStatus
    });
    return () => {
      var _a;
      return createVNode("form", {
        "class": bem24(),
        "onSubmit": onSubmit
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/form/index.mjs
var Form = withInstall(stdin_default27);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/field/utils.mjs
function isEmptyValue(value) {
  if (Array.isArray(value)) {
    return !value.length;
  }
  if (value === 0) {
    return false;
  }
  return !value;
}
function runSyncRule(value, rule) {
  if (isEmptyValue(value)) {
    if (rule.required) {
      return false;
    }
    if (rule.validateEmpty === false) {
      return true;
    }
  }
  if (rule.pattern && !rule.pattern.test(String(value))) {
    return false;
  }
  return true;
}
function runRuleValidator(value, rule) {
  return new Promise((resolve) => {
    const returnVal = rule.validator(value, rule);
    if (isPromise(returnVal)) {
      returnVal.then(resolve);
      return;
    }
    resolve(returnVal);
  });
}
function getRuleMessage(value, rule) {
  const { message } = rule;
  if (isFunction(message)) {
    return message(value, rule);
  }
  return message || "";
}
function startComposing({ target }) {
  target.composing = true;
}
function endComposing({ target }) {
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
function resizeTextarea(input, autosize) {
  const scrollTop = getRootScrollTop();
  input.style.height = "auto";
  let height2 = input.scrollHeight;
  if (isObject(autosize)) {
    const { maxHeight, minHeight } = autosize;
    if (maxHeight !== void 0) {
      height2 = Math.min(height2, maxHeight);
    }
    if (minHeight !== void 0) {
      height2 = Math.max(height2, minHeight);
    }
  }
  if (height2) {
    input.style.height = `${height2}px`;
    setRootScrollTop(scrollTop);
  }
}
function mapInputType(type) {
  if (type === "number") {
    return {
      type: "text",
      inputmode: "decimal"
    };
  }
  if (type === "digit") {
    return {
      type: "tel",
      inputmode: "numeric"
    };
  }
  return { type };
}
function getStringLength(str) {
  return [...str].length;
}
function cutString(str, maxlength) {
  return [...str].slice(0, maxlength).join("");
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/field/Field.mjs
var [name26, bem25] = createNamespace("field");
var fieldSharedProps = {
  id: String,
  name: String,
  leftIcon: String,
  rightIcon: String,
  autofocus: Boolean,
  clearable: Boolean,
  maxlength: numericProp,
  formatter: Function,
  clearIcon: makeStringProp("clear"),
  modelValue: makeNumericProp(""),
  inputAlign: String,
  placeholder: String,
  autocomplete: String,
  errorMessage: String,
  enterkeyhint: String,
  clearTrigger: makeStringProp("focus"),
  formatTrigger: makeStringProp("onChange"),
  error: {
    type: Boolean,
    default: null
  },
  disabled: {
    type: Boolean,
    default: null
  },
  readonly: {
    type: Boolean,
    default: null
  }
};
var fieldProps = extend({}, cellSharedProps, fieldSharedProps, {
  rows: numericProp,
  type: makeStringProp("text"),
  rules: Array,
  autosize: [Boolean, Object],
  labelWidth: numericProp,
  labelClass: unknownProp,
  labelAlign: String,
  showWordLimit: Boolean,
  errorMessageAlign: String,
  colon: {
    type: Boolean,
    default: null
  }
});
var stdin_default28 = defineComponent({
  name: name26,
  props: fieldProps,
  emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const id = useId();
    const state = reactive({
      status: "unvalidated",
      focused: false,
      validateMessage: ""
    });
    const inputRef = ref();
    const clearIconRef = ref();
    const customValue = ref();
    const {
      parent: form
    } = useParent(FORM_KEY);
    const getModelValue = () => {
      var _a;
      return String((_a = props.modelValue) != null ? _a : "");
    };
    const getProp = (key) => {
      if (isDef(props[key])) {
        return props[key];
      }
      if (form && isDef(form.props[key])) {
        return form.props[key];
      }
    };
    const showClear = computed(() => {
      const readonly = getProp("readonly");
      if (props.clearable && !readonly) {
        const hasValue = getModelValue() !== "";
        const trigger = props.clearTrigger === "always" || props.clearTrigger === "focus" && state.focused;
        return hasValue && trigger;
      }
      return false;
    });
    const formValue = computed(() => {
      if (customValue.value && slots.input) {
        return customValue.value();
      }
      return props.modelValue;
    });
    const runRules = (rules) => rules.reduce((promise, rule) => promise.then(() => {
      if (state.status === "failed") {
        return;
      }
      let {
        value
      } = formValue;
      if (rule.formatter) {
        value = rule.formatter(value, rule);
      }
      if (!runSyncRule(value, rule)) {
        state.status = "failed";
        state.validateMessage = getRuleMessage(value, rule);
        return;
      }
      if (rule.validator) {
        if (isEmptyValue(value) && rule.validateEmpty === false) {
          return;
        }
        return runRuleValidator(value, rule).then((result) => {
          if (result && typeof result === "string") {
            state.status = "failed";
            state.validateMessage = result;
          } else if (result === false) {
            state.status = "failed";
            state.validateMessage = getRuleMessage(value, rule);
          }
        });
      }
    }), Promise.resolve());
    const resetValidation = () => {
      state.status = "unvalidated";
      state.validateMessage = "";
    };
    const endValidate = () => emit("endValidate", {
      status: state.status,
      message: state.validateMessage
    });
    const validate = (rules = props.rules) => new Promise((resolve) => {
      resetValidation();
      if (rules) {
        emit("startValidate");
        runRules(rules).then(() => {
          if (state.status === "failed") {
            resolve({
              name: props.name,
              message: state.validateMessage
            });
            endValidate();
          } else {
            state.status = "passed";
            resolve();
            endValidate();
          }
        });
      } else {
        resolve();
      }
    });
    const validateWithTrigger = (trigger) => {
      if (form && props.rules) {
        const {
          validateTrigger
        } = form.props;
        const defaultTrigger = toArray(validateTrigger).includes(trigger);
        const rules = props.rules.filter((rule) => {
          if (rule.trigger) {
            return toArray(rule.trigger).includes(trigger);
          }
          return defaultTrigger;
        });
        if (rules.length) {
          validate(rules);
        }
      }
    };
    const limitValueLength = (value) => {
      const {
        maxlength
      } = props;
      if (isDef(maxlength) && getStringLength(value) > maxlength) {
        const modelValue = getModelValue();
        if (modelValue && getStringLength(modelValue) === +maxlength) {
          return modelValue;
        }
        return cutString(value, +maxlength);
      }
      return value;
    };
    const updateValue = (value, trigger = "onChange") => {
      const originalValue = value;
      value = limitValueLength(value);
      const isExceedLimit = value !== originalValue;
      if (props.type === "number" || props.type === "digit") {
        const isNumber = props.type === "number";
        value = formatNumber(value, isNumber, isNumber);
      }
      if (props.formatter && trigger === props.formatTrigger) {
        value = props.formatter(value);
      }
      if (inputRef.value && inputRef.value.value !== value) {
        if (state.focused && isExceedLimit) {
          const {
            selectionStart,
            selectionEnd
          } = inputRef.value;
          inputRef.value.value = value;
          inputRef.value.setSelectionRange(selectionStart - 1, selectionEnd - 1);
        } else {
          inputRef.value.value = value;
        }
      }
      if (value !== props.modelValue) {
        emit("update:modelValue", value);
      }
    };
    const onInput = (event) => {
      if (!event.target.composing) {
        updateValue(event.target.value);
      }
    };
    const blur = () => {
      var _a;
      return (_a = inputRef.value) == null ? void 0 : _a.blur();
    };
    const focus = () => {
      var _a;
      return (_a = inputRef.value) == null ? void 0 : _a.focus();
    };
    const adjustTextareaSize = () => {
      const input = inputRef.value;
      if (props.type === "textarea" && props.autosize && input) {
        resizeTextarea(input, props.autosize);
      }
    };
    const onFocus = (event) => {
      state.focused = true;
      emit("focus", event);
      nextTick(adjustTextareaSize);
      if (getProp("readonly")) {
        blur();
      }
    };
    const onBlur = (event) => {
      if (getProp("readonly")) {
        return;
      }
      state.focused = false;
      updateValue(getModelValue(), "onBlur");
      emit("blur", event);
      validateWithTrigger("onBlur");
      nextTick(adjustTextareaSize);
      resetScroll();
    };
    const onClickInput = (event) => emit("clickInput", event);
    const onClickLeftIcon = (event) => emit("clickLeftIcon", event);
    const onClickRightIcon = (event) => emit("clickRightIcon", event);
    const onClear = (event) => {
      preventDefault(event);
      emit("update:modelValue", "");
      emit("clear", event);
    };
    const showError = computed(() => {
      if (typeof props.error === "boolean") {
        return props.error;
      }
      if (form && form.props.showError && state.status === "failed") {
        return true;
      }
    });
    const labelStyle = computed(() => {
      const labelWidth = getProp("labelWidth");
      if (labelWidth) {
        return {
          width: addUnit(labelWidth)
        };
      }
    });
    const onKeypress = (event) => {
      const ENTER_CODE = 13;
      if (event.keyCode === ENTER_CODE) {
        const submitOnEnter = form && form.props.submitOnEnter;
        if (!submitOnEnter && props.type !== "textarea") {
          preventDefault(event);
        }
        if (props.type === "search") {
          blur();
        }
      }
      emit("keypress", event);
    };
    const getInputId = () => props.id || `${id}-input`;
    const getValidationStatus = () => state.status;
    const renderInput = () => {
      const controlClass = bem25("control", [getProp("inputAlign"), {
        error: showError.value,
        custom: !!slots.input,
        "min-height": props.type === "textarea" && !props.autosize
      }]);
      if (slots.input) {
        return createVNode("div", {
          "class": controlClass,
          "onClick": onClickInput
        }, [slots.input()]);
      }
      const inputAttrs = {
        id: getInputId(),
        ref: inputRef,
        name: props.name,
        rows: props.rows !== void 0 ? +props.rows : void 0,
        class: controlClass,
        disabled: getProp("disabled"),
        readonly: getProp("readonly"),
        autofocus: props.autofocus,
        placeholder: props.placeholder,
        autocomplete: props.autocomplete,
        enterkeyhint: props.enterkeyhint,
        "aria-labelledby": props.label ? `${id}-label` : void 0,
        onBlur,
        onFocus,
        onInput,
        onClick: onClickInput,
        onChange: endComposing,
        onKeypress,
        onCompositionend: endComposing,
        onCompositionstart: startComposing
      };
      if (props.type === "textarea") {
        return createVNode("textarea", inputAttrs, null);
      }
      return createVNode("input", mergeProps(mapInputType(props.type), inputAttrs), null);
    };
    const renderLeftIcon = () => {
      const leftIconSlot = slots["left-icon"];
      if (props.leftIcon || leftIconSlot) {
        return createVNode("div", {
          "class": bem25("left-icon"),
          "onClick": onClickLeftIcon
        }, [leftIconSlot ? leftIconSlot() : createVNode(Icon, {
          "name": props.leftIcon,
          "classPrefix": props.iconPrefix
        }, null)]);
      }
    };
    const renderRightIcon = () => {
      const rightIconSlot = slots["right-icon"];
      if (props.rightIcon || rightIconSlot) {
        return createVNode("div", {
          "class": bem25("right-icon"),
          "onClick": onClickRightIcon
        }, [rightIconSlot ? rightIconSlot() : createVNode(Icon, {
          "name": props.rightIcon,
          "classPrefix": props.iconPrefix
        }, null)]);
      }
    };
    const renderWordLimit = () => {
      if (props.showWordLimit && props.maxlength) {
        const count = getStringLength(getModelValue());
        return createVNode("div", {
          "class": bem25("word-limit")
        }, [createVNode("span", {
          "class": bem25("word-num")
        }, [count]), createTextVNode("/"), props.maxlength]);
      }
    };
    const renderMessage = () => {
      if (form && form.props.showErrorMessage === false) {
        return;
      }
      const message = props.errorMessage || state.validateMessage;
      if (message) {
        const slot = slots["error-message"];
        const errorMessageAlign = getProp("errorMessageAlign");
        return createVNode("div", {
          "class": bem25("error-message", errorMessageAlign)
        }, [slot ? slot({
          message
        }) : message]);
      }
    };
    const renderLabel = () => {
      const colon = getProp("colon") ? ":" : "";
      if (slots.label) {
        return [slots.label(), colon];
      }
      if (props.label) {
        return createVNode("label", {
          "id": `${id}-label`,
          "for": getInputId()
        }, [props.label + colon]);
      }
    };
    const renderFieldBody = () => [createVNode("div", {
      "class": bem25("body")
    }, [renderInput(), showClear.value && createVNode(Icon, {
      "ref": clearIconRef,
      "name": props.clearIcon,
      "class": bem25("clear")
    }, null), renderRightIcon(), slots.button && createVNode("div", {
      "class": bem25("button")
    }, [slots.button()])]), renderWordLimit(), renderMessage()];
    useExpose({
      blur,
      focus,
      validate,
      formValue,
      resetValidation,
      getValidationStatus
    });
    provide(CUSTOM_FIELD_INJECTION_KEY, {
      customValue,
      resetValidation,
      validateWithTrigger
    });
    watch(() => props.modelValue, () => {
      updateValue(getModelValue());
      resetValidation();
      validateWithTrigger("onChange");
      nextTick(adjustTextareaSize);
    });
    onMounted(() => {
      updateValue(getModelValue(), props.formatTrigger);
      nextTick(adjustTextareaSize);
    });
    useEventListener("touchstart", onClear, {
      target: computed(() => {
        var _a;
        return (_a = clearIconRef.value) == null ? void 0 : _a.$el;
      })
    });
    return () => {
      const disabled = getProp("disabled");
      const labelAlign = getProp("labelAlign");
      const LeftIcon = renderLeftIcon();
      const renderTitle = () => {
        const Label = renderLabel();
        if (labelAlign === "top") {
          return [LeftIcon, Label].filter(Boolean);
        }
        return Label || [];
      };
      return createVNode(Cell, {
        "size": props.size,
        "class": bem25({
          error: showError.value,
          disabled,
          [`label-${labelAlign}`]: labelAlign
        }),
        "center": props.center,
        "border": props.border,
        "isLink": props.isLink,
        "clickable": props.clickable,
        "titleStyle": labelStyle.value,
        "valueClass": bem25("value"),
        "titleClass": [bem25("label", [labelAlign, {
          required: props.required
        }]), props.labelClass],
        "arrowDirection": props.arrowDirection
      }, {
        icon: LeftIcon && labelAlign !== "top" ? () => LeftIcon : null,
        title: renderTitle,
        value: renderFieldBody,
        extra: slots.extra
      });
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/field/index.mjs
var Field = withInstall(stdin_default28);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/toast/lock-click.mjs
var lockCount = 0;
function lockClick(lock) {
  if (lock) {
    if (!lockCount) {
      document.body.classList.add("van-toast--unclickable");
    }
    lockCount++;
  } else if (lockCount) {
    lockCount--;
    if (!lockCount) {
      document.body.classList.remove("van-toast--unclickable");
    }
  }
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/toast/Toast.mjs
var [name27, bem26] = createNamespace("toast");
var popupInheritProps = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay"];
var toastProps = {
  icon: String,
  show: Boolean,
  type: makeStringProp("text"),
  overlay: Boolean,
  message: numericProp,
  iconSize: numericProp,
  duration: makeNumberProp(2e3),
  position: makeStringProp("middle"),
  teleport: [String, Object],
  wordBreak: String,
  className: unknownProp,
  iconPrefix: String,
  transition: makeStringProp("van-fade"),
  loadingType: String,
  forbidClick: Boolean,
  overlayClass: unknownProp,
  overlayStyle: Object,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean
};
var stdin_default29 = defineComponent({
  name: name27,
  props: toastProps,
  emits: ["update:show"],
  setup(props, {
    emit,
    slots
  }) {
    let timer2;
    let clickable = false;
    const toggleClickable = () => {
      const newValue = props.show && props.forbidClick;
      if (clickable !== newValue) {
        clickable = newValue;
        lockClick(clickable);
      }
    };
    const updateShow = (show) => emit("update:show", show);
    const onClick = () => {
      if (props.closeOnClick) {
        updateShow(false);
      }
    };
    const clearTimer = () => clearTimeout(timer2);
    const renderIcon = () => {
      const {
        icon,
        type,
        iconSize,
        iconPrefix,
        loadingType
      } = props;
      const hasIcon = icon || type === "success" || type === "fail";
      if (hasIcon) {
        return createVNode(Icon, {
          "name": icon || type,
          "size": iconSize,
          "class": bem26("icon"),
          "classPrefix": iconPrefix
        }, null);
      }
      if (type === "loading") {
        return createVNode(Loading, {
          "class": bem26("loading"),
          "size": iconSize,
          "type": loadingType
        }, null);
      }
    };
    const renderMessage = () => {
      const {
        type,
        message
      } = props;
      if (slots.message) {
        return createVNode("div", {
          "class": bem26("text")
        }, [slots.message()]);
      }
      if (isDef(message) && message !== "") {
        return type === "html" ? createVNode("div", {
          "key": 0,
          "class": bem26("text"),
          "innerHTML": String(message)
        }, null) : createVNode("div", {
          "class": bem26("text")
        }, [message]);
      }
    };
    watch(() => [props.show, props.forbidClick], toggleClickable);
    watch(() => [props.show, props.type, props.message, props.duration], () => {
      clearTimer();
      if (props.show && props.duration > 0) {
        timer2 = setTimeout(() => {
          updateShow(false);
        }, props.duration);
      }
    });
    onMounted(toggleClickable);
    onUnmounted(toggleClickable);
    return () => createVNode(Popup, mergeProps({
      "class": [bem26([props.position, props.wordBreak === "normal" ? "break-normal" : props.wordBreak, {
        [props.type]: !props.icon
      }]), props.className],
      "lockScroll": false,
      "onClick": onClick,
      "onClosed": clearTimer,
      "onUpdate:show": updateShow
    }, pick(props, popupInheritProps)), {
      default: () => [renderIcon(), renderMessage()]
    });
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/utils/mount-component.mjs
function usePopupState() {
  const state = reactive({
    show: false
  });
  const toggle = (show) => {
    state.show = show;
  };
  const open = (props) => {
    extend(state, props, { transitionAppear: true });
    toggle(true);
  };
  const close = () => toggle(false);
  useExpose({ open, close, toggle });
  return {
    open,
    close,
    state,
    toggle
  };
}
function mountComponent(RootComponent) {
  const app = createApp(RootComponent);
  const root = document.createElement("div");
  document.body.appendChild(root);
  return {
    instance: app.mount(root),
    unmount() {
      app.unmount();
      document.body.removeChild(root);
    }
  };
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/toast/function-call.mjs
var defaultOptions = {
  icon: "",
  type: "text",
  message: "",
  className: "",
  overlay: false,
  onClose: void 0,
  onOpened: void 0,
  duration: 2e3,
  teleport: "body",
  iconSize: void 0,
  iconPrefix: void 0,
  position: "middle",
  transition: "van-fade",
  forbidClick: false,
  loadingType: void 0,
  overlayClass: "",
  overlayStyle: void 0,
  closeOnClick: false,
  closeOnClickOverlay: false
};
var queue = [];
var allowMultiple = false;
var currentOptions = extend({}, defaultOptions);
var defaultOptionsMap = /* @__PURE__ */ new Map();
function parseOptions(message) {
  if (isObject(message)) {
    return message;
  }
  return {
    message
  };
}
function createInstance() {
  const {
    instance: instance4,
    unmount
  } = mountComponent({
    setup() {
      const message = ref("");
      const {
        open,
        state,
        close,
        toggle
      } = usePopupState();
      const onClosed = () => {
        if (allowMultiple) {
          queue = queue.filter((item) => item !== instance4);
          unmount();
        }
      };
      const render = () => {
        const attrs = {
          onClosed,
          "onUpdate:show": toggle
        };
        return createVNode(stdin_default29, mergeProps(state, attrs), null);
      };
      watch(message, (val) => {
        state.message = val;
      });
      getCurrentInstance().render = render;
      return {
        open,
        close,
        message
      };
    }
  });
  return instance4;
}
function getInstance() {
  if (!queue.length || allowMultiple) {
    const instance4 = createInstance();
    queue.push(instance4);
  }
  return queue[queue.length - 1];
}
function showToast(options = {}) {
  if (!inBrowser) {
    return {};
  }
  const toast = getInstance();
  const parsedOptions = parseOptions(options);
  toast.open(extend({}, currentOptions, defaultOptionsMap.get(parsedOptions.type || currentOptions.type), parsedOptions));
  return toast;
}
var createMethod = (type) => (options) => showToast(extend({
  type
}, parseOptions(options)));
var showLoadingToast = createMethod("loading");
var showSuccessToast = createMethod("success");
var showFailToast = createMethod("fail");
var closeToast = (all) => {
  var _a;
  if (queue.length) {
    if (all) {
      queue.forEach((toast) => {
        toast.close();
      });
      queue = [];
    } else if (!allowMultiple) {
      queue[0].close();
    } else {
      (_a = queue.shift()) == null ? void 0 : _a.close();
    }
  }
};
function setToastDefaultOptions(type, options) {
  if (typeof type === "string") {
    defaultOptionsMap.set(type, options);
  } else {
    extend(currentOptions, type);
  }
}
var resetToastDefaultOptions = (type) => {
  if (typeof type === "string") {
    defaultOptionsMap.delete(type);
  } else {
    currentOptions = extend({}, defaultOptions);
    defaultOptionsMap.clear();
  }
};
var allowMultipleToast = (value = true) => {
  allowMultiple = value;
};

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/toast/index.mjs
var Toast = withInstall(stdin_default29);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/switch/Switch.mjs
var [name28, bem27] = createNamespace("switch");
var switchProps = {
  size: numericProp,
  loading: Boolean,
  disabled: Boolean,
  modelValue: unknownProp,
  activeColor: String,
  inactiveColor: String,
  activeValue: {
    type: unknownProp,
    default: true
  },
  inactiveValue: {
    type: unknownProp,
    default: false
  }
};
var stdin_default30 = defineComponent({
  name: name28,
  props: switchProps,
  emits: ["change", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const isChecked = () => props.modelValue === props.activeValue;
    const onClick = () => {
      if (!props.disabled && !props.loading) {
        const newValue = isChecked() ? props.inactiveValue : props.activeValue;
        emit("update:modelValue", newValue);
        emit("change", newValue);
      }
    };
    const renderLoading = () => {
      if (props.loading) {
        const color = isChecked() ? props.activeColor : props.inactiveColor;
        return createVNode(Loading, {
          "class": bem27("loading"),
          "color": color
        }, null);
      }
      if (slots.node) {
        return slots.node();
      }
    };
    useCustomFieldValue(() => props.modelValue);
    return () => {
      var _a;
      const {
        size,
        loading,
        disabled,
        activeColor,
        inactiveColor
      } = props;
      const checked = isChecked();
      const style = {
        fontSize: addUnit(size),
        backgroundColor: checked ? activeColor : inactiveColor
      };
      return createVNode("div", {
        "role": "switch",
        "class": bem27({
          on: checked,
          loading,
          disabled
        }),
        "style": style,
        "tabindex": disabled ? void 0 : 0,
        "aria-checked": checked,
        "onClick": onClick
      }, [createVNode("div", {
        "class": bem27("node")
      }, [renderLoading()]), (_a = slots.background) == null ? void 0 : _a.call(slots)]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/switch/index.mjs
var Switch = withInstall(stdin_default30);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/address-edit/AddressEditDetail.mjs
var [name29, bem28] = createNamespace("address-edit-detail");
var t2 = createNamespace("address-edit")[2];
var stdin_default31 = defineComponent({
  name: name29,
  props: {
    show: Boolean,
    rows: numericProp,
    value: String,
    rules: Array,
    focused: Boolean,
    maxlength: numericProp,
    searchResult: Array,
    showSearchResult: Boolean
  },
  emits: ["blur", "focus", "input", "selectSearch"],
  setup(props, {
    emit
  }) {
    const field = ref();
    const showSearchResult = () => props.focused && props.searchResult && props.showSearchResult;
    const onSelect = (express) => {
      emit("selectSearch", express);
      emit("input", `${express.address || ""} ${express.name || ""}`.trim());
    };
    const renderSearchResult = () => {
      if (!showSearchResult()) {
        return;
      }
      const {
        searchResult
      } = props;
      return searchResult.map((express) => createVNode(Cell, {
        "clickable": true,
        "key": (express.name || "") + (express.address || ""),
        "icon": "location-o",
        "title": express.name,
        "label": express.address,
        "class": bem28("search-item"),
        "border": false,
        "onClick": () => onSelect(express)
      }, null));
    };
    const onBlur = (event) => emit("blur", event);
    const onFocus = (event) => emit("focus", event);
    const onInput = (value) => emit("input", value);
    return () => {
      if (props.show) {
        return createVNode(Fragment, null, [createVNode(Field, {
          "autosize": true,
          "clearable": true,
          "ref": field,
          "class": bem28(),
          "rows": props.rows,
          "type": "textarea",
          "rules": props.rules,
          "label": t2("addressDetail"),
          "border": !showSearchResult(),
          "maxlength": props.maxlength,
          "modelValue": props.value,
          "placeholder": t2("addressDetail"),
          "onBlur": onBlur,
          "onFocus": onFocus,
          "onUpdate:modelValue": onInput
        }, null), renderSearchResult()]);
      }
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/address-edit/AddressEdit.mjs
var [name30, bem29, t3] = createNamespace("address-edit");
var DEFAULT_DATA = {
  name: "",
  tel: "",
  city: "",
  county: "",
  country: "",
  province: "",
  areaCode: "",
  isDefault: false,
  addressDetail: ""
};
var addressEditProps = {
  areaList: Object,
  isSaving: Boolean,
  isDeleting: Boolean,
  validator: Function,
  showArea: truthProp,
  showDetail: truthProp,
  showDelete: Boolean,
  disableArea: Boolean,
  searchResult: Array,
  telMaxlength: numericProp,
  showSetDefault: Boolean,
  saveButtonText: String,
  areaPlaceholder: String,
  deleteButtonText: String,
  showSearchResult: Boolean,
  detailRows: makeNumericProp(1),
  detailMaxlength: makeNumericProp(200),
  areaColumnsPlaceholder: makeArrayProp(),
  addressInfo: {
    type: Object,
    default: () => extend({}, DEFAULT_DATA)
  },
  telValidator: {
    type: Function,
    default: isMobile
  }
};
var stdin_default32 = defineComponent({
  name: name30,
  props: addressEditProps,
  emits: ["save", "focus", "delete", "clickArea", "changeArea", "changeDetail", "selectSearch", "changeDefault"],
  setup(props, {
    emit,
    slots
  }) {
    const areaRef = ref();
    const data = reactive({});
    const showAreaPopup = ref(false);
    const detailFocused = ref(false);
    const areaListLoaded = computed(() => isObject(props.areaList) && Object.keys(props.areaList).length);
    const areaText = computed(() => {
      const {
        province,
        city,
        county,
        areaCode
      } = data;
      if (areaCode) {
        const arr = [province, city, county];
        if (province && province === city) {
          arr.splice(1, 1);
        }
        return arr.filter(Boolean).join("/");
      }
      return "";
    });
    const hideBottomFields = computed(() => {
      var _a;
      return ((_a = props.searchResult) == null ? void 0 : _a.length) && detailFocused.value;
    });
    const onFocus = (key) => {
      detailFocused.value = key === "addressDetail";
      emit("focus", key);
    };
    const rules = computed(() => {
      const {
        validator,
        telValidator
      } = props;
      const makeRule = (name210, emptyMessage) => ({
        validator: (value) => {
          if (validator) {
            const message = validator(name210, value);
            if (message) {
              return message;
            }
          }
          if (!value) {
            return emptyMessage;
          }
          return true;
        }
      });
      return {
        name: [makeRule("name", t3("nameEmpty"))],
        tel: [makeRule("tel", t3("telInvalid")), {
          validator: telValidator,
          message: t3("telInvalid")
        }],
        areaCode: [makeRule("areaCode", t3("areaEmpty"))],
        addressDetail: [makeRule("addressDetail", t3("addressEmpty"))]
      };
    });
    const onSave = () => emit("save", data);
    const onChangeDetail = (val) => {
      data.addressDetail = val;
      emit("changeDetail", val);
    };
    const assignAreaText = (options) => {
      data.province = options[0].text;
      data.city = options[1].text;
      data.county = options[2].text;
    };
    const onAreaConfirm = ({
      selectedValues,
      selectedOptions
    }) => {
      if (selectedValues.some((value) => value === AREA_EMPTY_CODE)) {
        showToast(t3("areaEmpty"));
      } else {
        showAreaPopup.value = false;
        assignAreaText(selectedOptions);
        emit("changeArea", selectedOptions);
      }
    };
    const onDelete = () => emit("delete", data);
    const setAreaCode = (code) => {
      data.areaCode = code || "";
    };
    const onDetailBlur = () => {
      setTimeout(() => {
        detailFocused.value = false;
      });
    };
    const setAddressDetail = (value) => {
      data.addressDetail = value;
    };
    const renderSetDefaultCell = () => {
      if (props.showSetDefault) {
        const slots2 = {
          "right-icon": () => createVNode(Switch, {
            "modelValue": data.isDefault,
            "onUpdate:modelValue": ($event) => data.isDefault = $event,
            "onChange": (event) => emit("changeDefault", event)
          }, null)
        };
        return withDirectives(createVNode(Cell, {
          "center": true,
          "title": t3("defaultAddress"),
          "class": bem29("default")
        }, slots2), [[vShow, !hideBottomFields.value]]);
      }
    };
    useExpose({
      setAreaCode,
      setAddressDetail
    });
    watch(() => props.addressInfo, (value) => {
      extend(data, DEFAULT_DATA, value);
      nextTick(() => {
        var _a;
        const options = (_a = areaRef.value) == null ? void 0 : _a.getSelectedOptions();
        if (options && options.every((option) => option && option.value !== AREA_EMPTY_CODE)) {
          assignAreaText(options);
        }
      });
    }, {
      deep: true,
      immediate: true
    });
    return () => {
      const {
        disableArea
      } = props;
      return createVNode(Form, {
        "class": bem29(),
        "onSubmit": onSave
      }, {
        default: () => {
          var _a;
          return [createVNode("div", {
            "class": bem29("fields")
          }, [createVNode(Field, {
            "modelValue": data.name,
            "onUpdate:modelValue": ($event) => data.name = $event,
            "clearable": true,
            "label": t3("name"),
            "rules": rules.value.name,
            "placeholder": t3("name"),
            "onFocus": () => onFocus("name")
          }, null), createVNode(Field, {
            "modelValue": data.tel,
            "onUpdate:modelValue": ($event) => data.tel = $event,
            "clearable": true,
            "type": "tel",
            "label": t3("tel"),
            "rules": rules.value.tel,
            "maxlength": props.telMaxlength,
            "placeholder": t3("tel"),
            "onFocus": () => onFocus("tel")
          }, null), withDirectives(createVNode(Field, {
            "readonly": true,
            "label": t3("area"),
            "is-link": !disableArea,
            "modelValue": areaText.value,
            "rules": rules.value.areaCode,
            "placeholder": props.areaPlaceholder || t3("area"),
            "onFocus": () => onFocus("areaCode"),
            "onClick": () => {
              emit("clickArea");
              showAreaPopup.value = !disableArea;
            }
          }, null), [[vShow, props.showArea]]), createVNode(stdin_default31, {
            "show": props.showDetail,
            "rows": props.detailRows,
            "rules": rules.value.addressDetail,
            "value": data.addressDetail,
            "focused": detailFocused.value,
            "maxlength": props.detailMaxlength,
            "searchResult": props.searchResult,
            "showSearchResult": props.showSearchResult,
            "onBlur": onDetailBlur,
            "onFocus": () => onFocus("addressDetail"),
            "onInput": onChangeDetail,
            "onSelectSearch": (event) => emit("selectSearch", event)
          }, null), (_a = slots.default) == null ? void 0 : _a.call(slots)]), renderSetDefaultCell(), withDirectives(createVNode("div", {
            "class": bem29("buttons")
          }, [createVNode(Button, {
            "block": true,
            "round": true,
            "type": "primary",
            "text": props.saveButtonText || t3("save"),
            "class": bem29("button"),
            "loading": props.isSaving,
            "nativeType": "submit"
          }, null), props.showDelete && createVNode(Button, {
            "block": true,
            "round": true,
            "class": bem29("button"),
            "loading": props.isDeleting,
            "text": props.deleteButtonText || t3("delete"),
            "onClick": onDelete
          }, null)]), [[vShow, !hideBottomFields.value]]), createVNode(Popup, {
            "show": showAreaPopup.value,
            "onUpdate:show": ($event) => showAreaPopup.value = $event,
            "round": true,
            "teleport": "body",
            "position": "bottom",
            "lazyRender": false
          }, {
            default: () => [createVNode(Area, {
              "modelValue": data.areaCode,
              "onUpdate:modelValue": ($event) => data.areaCode = $event,
              "ref": areaRef,
              "loading": !areaListLoaded.value,
              "areaList": props.areaList,
              "columnsPlaceholder": props.areaColumnsPlaceholder,
              "onConfirm": onAreaConfirm,
              "onCancel": () => {
                showAreaPopup.value = false;
              }
            }, null)]
          })];
        }
      });
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/address-edit/index.mjs
var AddressEdit = withInstall(stdin_default32);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/radio-group/RadioGroup.mjs
var [name31, bem30] = createNamespace("radio-group");
var radioGroupProps = {
  disabled: Boolean,
  iconSize: numericProp,
  direction: String,
  modelValue: unknownProp,
  checkedColor: String
};
var RADIO_KEY = Symbol(name31);
var stdin_default33 = defineComponent({
  name: name31,
  props: radioGroupProps,
  emits: ["change", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      linkChildren
    } = useChildren(RADIO_KEY);
    const updateValue = (value) => emit("update:modelValue", value);
    watch(() => props.modelValue, (value) => emit("change", value));
    linkChildren({
      props,
      updateValue
    });
    useCustomFieldValue(() => props.modelValue);
    return () => {
      var _a;
      return createVNode("div", {
        "class": bem30([props.direction]),
        "role": "radiogroup"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/radio-group/index.mjs
var RadioGroup = withInstall(stdin_default33);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tag/Tag.mjs
var [name32, bem31] = createNamespace("tag");
var tagProps = {
  size: String,
  mark: Boolean,
  show: truthProp,
  type: makeStringProp("default"),
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String,
  closeable: Boolean
};
var stdin_default34 = defineComponent({
  name: name32,
  props: tagProps,
  emits: ["close"],
  setup(props, {
    slots,
    emit
  }) {
    const onClose = (event) => {
      event.stopPropagation();
      emit("close", event);
    };
    const getStyle = () => {
      if (props.plain) {
        return {
          color: props.textColor || props.color,
          borderColor: props.color
        };
      }
      return {
        color: props.textColor,
        background: props.color
      };
    };
    const renderTag = () => {
      var _a;
      const {
        type,
        mark,
        plain,
        round: round2,
        size,
        closeable
      } = props;
      const classes = {
        mark,
        plain,
        round: round2
      };
      if (size) {
        classes[size] = size;
      }
      const CloseIcon = closeable && createVNode(Icon, {
        "name": "cross",
        "class": [bem31("close"), HAPTICS_FEEDBACK],
        "onClick": onClose
      }, null);
      return createVNode("span", {
        "style": getStyle(),
        "class": bem31([classes, type])
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots), CloseIcon]);
    };
    return () => createVNode(Transition, {
      "name": props.closeable ? "van-fade" : void 0
    }, {
      default: () => [props.show ? renderTag() : null]
    });
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tag/index.mjs
var Tag = withInstall(stdin_default34);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/checkbox/Checker.mjs
var checkerProps = {
  name: unknownProp,
  shape: makeStringProp("round"),
  disabled: Boolean,
  iconSize: numericProp,
  modelValue: unknownProp,
  checkedColor: String,
  labelPosition: String,
  labelDisabled: Boolean
};
var stdin_default35 = defineComponent({
  props: extend({}, checkerProps, {
    bem: makeRequiredProp(Function),
    role: String,
    parent: Object,
    checked: Boolean,
    bindGroup: truthProp
  }),
  emits: ["click", "toggle"],
  setup(props, {
    emit,
    slots
  }) {
    const iconRef = ref();
    const getParentProp = (name103) => {
      if (props.parent && props.bindGroup) {
        return props.parent.props[name103];
      }
    };
    const disabled = computed(() => getParentProp("disabled") || props.disabled);
    const direction = computed(() => getParentProp("direction"));
    const iconStyle = computed(() => {
      const checkedColor = props.checkedColor || getParentProp("checkedColor");
      if (checkedColor && props.checked && !disabled.value) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor
        };
      }
    });
    const onClick = (event) => {
      const {
        target
      } = event;
      const icon = iconRef.value;
      const iconClicked = icon === target || (icon == null ? void 0 : icon.contains(target));
      if (!disabled.value && (iconClicked || !props.labelDisabled)) {
        emit("toggle");
      }
      emit("click", event);
    };
    const renderIcon = () => {
      const {
        bem: bem98,
        shape,
        checked
      } = props;
      const iconSize = props.iconSize || getParentProp("iconSize");
      return createVNode("div", {
        "ref": iconRef,
        "class": bem98("icon", [shape, {
          disabled: disabled.value,
          checked
        }]),
        "style": {
          fontSize: addUnit(iconSize)
        }
      }, [slots.icon ? slots.icon({
        checked,
        disabled: disabled.value
      }) : createVNode(Icon, {
        "name": "success",
        "style": iconStyle.value
      }, null)]);
    };
    const renderLabel = () => {
      if (slots.default) {
        return createVNode("span", {
          "class": props.bem("label", [props.labelPosition, {
            disabled: disabled.value
          }])
        }, [slots.default()]);
      }
    };
    return () => {
      const nodes = props.labelPosition === "left" ? [renderLabel(), renderIcon()] : [renderIcon(), renderLabel()];
      return createVNode("div", {
        "role": props.role,
        "class": props.bem([{
          disabled: disabled.value,
          "label-disabled": props.labelDisabled
        }, direction.value]),
        "tabindex": disabled.value ? void 0 : 0,
        "aria-checked": props.checked,
        "onClick": onClick
      }, [nodes]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/radio/Radio.mjs
var radioProps = checkerProps;
var [name33, bem32] = createNamespace("radio");
var stdin_default36 = defineComponent({
  name: name33,
  props: checkerProps,
  emits: ["update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      parent
    } = useParent(RADIO_KEY);
    const checked = () => {
      const value = parent ? parent.props.modelValue : props.modelValue;
      return value === props.name;
    };
    const toggle = () => {
      if (parent) {
        parent.updateValue(props.name);
      } else {
        emit("update:modelValue", props.name);
      }
    };
    return () => createVNode(stdin_default35, mergeProps({
      "bem": bem32,
      "role": "radio",
      "parent": parent,
      "checked": checked(),
      "onToggle": toggle
    }, props), pick(slots, ["default", "icon"]));
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/radio/index.mjs
var Radio = withInstall(stdin_default36);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/address-list/AddressListItem.mjs
var [name34, bem33] = createNamespace("address-item");
var stdin_default37 = defineComponent({
  name: name34,
  props: {
    address: makeRequiredProp(Object),
    disabled: Boolean,
    switchable: Boolean,
    defaultTagText: String
  },
  emits: ["edit", "click", "select"],
  setup(props, {
    slots,
    emit
  }) {
    const onClick = () => {
      if (props.switchable) {
        emit("select");
      }
      emit("click");
    };
    const renderRightIcon = () => createVNode(Icon, {
      "name": "edit",
      "class": bem33("edit"),
      "onClick": (event) => {
        event.stopPropagation();
        emit("edit");
        emit("click");
      }
    }, null);
    const renderTag = () => {
      if (slots.tag) {
        return slots.tag(props.address);
      }
      if (props.address.isDefault && props.defaultTagText) {
        return createVNode(Tag, {
          "type": "primary",
          "round": true,
          "class": bem33("tag")
        }, {
          default: () => [props.defaultTagText]
        });
      }
    };
    const renderContent = () => {
      const {
        address,
        disabled,
        switchable
      } = props;
      const Info = [createVNode("div", {
        "class": bem33("name")
      }, [`${address.name} ${address.tel}`, renderTag()]), createVNode("div", {
        "class": bem33("address")
      }, [address.address])];
      if (switchable && !disabled) {
        return createVNode(Radio, {
          "name": address.id,
          "iconSize": 18
        }, {
          default: () => [Info]
        });
      }
      return Info;
    };
    return () => {
      var _a;
      const {
        disabled
      } = props;
      return createVNode("div", {
        "class": bem33({
          disabled
        }),
        "onClick": onClick
      }, [createVNode(Cell, {
        "border": false,
        "titleClass": bem33("title")
      }, {
        title: renderContent,
        "right-icon": renderRightIcon
      }), (_a = slots.bottom) == null ? void 0 : _a.call(slots, extend({}, props.address, {
        disabled
      }))]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/address-list/AddressList.mjs
var [name35, bem34, t4] = createNamespace("address-list");
var addressListProps = {
  list: makeArrayProp(),
  modelValue: numericProp,
  switchable: truthProp,
  disabledText: String,
  disabledList: makeArrayProp(),
  addButtonText: String,
  defaultTagText: String
};
var stdin_default38 = defineComponent({
  name: name35,
  props: addressListProps,
  emits: ["add", "edit", "select", "clickItem", "editDisabled", "selectDisabled", "update:modelValue"],
  setup(props, {
    slots,
    emit
  }) {
    const renderItem = (item, index, disabled) => {
      const onEdit = () => emit(disabled ? "editDisabled" : "edit", item, index);
      const onClick = () => emit("clickItem", item, index);
      const onSelect = () => {
        emit(disabled ? "selectDisabled" : "select", item, index);
        if (!disabled) {
          emit("update:modelValue", item.id);
        }
      };
      return createVNode(stdin_default37, {
        "key": item.id,
        "address": item,
        "disabled": disabled,
        "switchable": props.switchable,
        "defaultTagText": props.defaultTagText,
        "onEdit": onEdit,
        "onClick": onClick,
        "onSelect": onSelect
      }, {
        bottom: slots["item-bottom"],
        tag: slots.tag
      });
    };
    const renderList = (list, disabled) => {
      if (list) {
        return list.map((item, index) => renderItem(item, index, disabled));
      }
    };
    const renderBottom = () => createVNode("div", {
      "class": [bem34("bottom"), "van-safe-area-bottom"]
    }, [createVNode(Button, {
      "round": true,
      "block": true,
      "type": "primary",
      "text": props.addButtonText || t4("add"),
      "class": bem34("add"),
      "onClick": () => emit("add")
    }, null)]);
    return () => {
      var _a, _b;
      const List2 = renderList(props.list);
      const DisabledList = renderList(props.disabledList, true);
      const DisabledText = props.disabledText && createVNode("div", {
        "class": bem34("disabled-text")
      }, [props.disabledText]);
      return createVNode("div", {
        "class": bem34()
      }, [(_a = slots.top) == null ? void 0 : _a.call(slots), createVNode(RadioGroup, {
        "modelValue": props.modelValue
      }, {
        default: () => [List2]
      }), DisabledText, DisabledList, (_b = slots.default) == null ? void 0 : _b.call(slots), renderBottom()]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/address-list/index.mjs
var AddressList = withInstall(stdin_default38);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/lazyload/vue-lazyload/util.mjs
var hasIntersectionObserver = inBrowser2 && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype;
var modeType = {
  event: "event",
  observer: "observer"
};
function remove(arr, item) {
  if (!arr.length)
    return;
  const index = arr.indexOf(item);
  if (index > -1)
    return arr.splice(index, 1);
}
function getBestSelectionFromSrcset(el, scale) {
  if (el.tagName !== "IMG" || !el.getAttribute("data-srcset"))
    return;
  let options = el.getAttribute("data-srcset");
  const container = el.parentNode;
  const containerWidth = container.offsetWidth * scale;
  let spaceIndex;
  let tmpSrc;
  let tmpWidth;
  options = options.trim().split(",");
  const result = options.map((item) => {
    item = item.trim();
    spaceIndex = item.lastIndexOf(" ");
    if (spaceIndex === -1) {
      tmpSrc = item;
      tmpWidth = 999998;
    } else {
      tmpSrc = item.substr(0, spaceIndex);
      tmpWidth = parseInt(
        item.substr(spaceIndex + 1, item.length - spaceIndex - 2),
        10
      );
    }
    return [tmpWidth, tmpSrc];
  });
  result.sort((a, b) => {
    if (a[0] < b[0]) {
      return 1;
    }
    if (a[0] > b[0]) {
      return -1;
    }
    if (a[0] === b[0]) {
      if (b[1].indexOf(".webp", b[1].length - 5) !== -1) {
        return 1;
      }
      if (a[1].indexOf(".webp", a[1].length - 5) !== -1) {
        return -1;
      }
    }
    return 0;
  });
  let bestSelectedSrc = "";
  let tmpOption;
  for (let i = 0; i < result.length; i++) {
    tmpOption = result[i];
    bestSelectedSrc = tmpOption[1];
    const next = result[i + 1];
    if (next && next[0] < containerWidth) {
      bestSelectedSrc = tmpOption[1];
      break;
    } else if (!next) {
      bestSelectedSrc = tmpOption[1];
      break;
    }
  }
  return bestSelectedSrc;
}
var getDPR = (scale = 1) => inBrowser2 ? window.devicePixelRatio || scale : scale;
function supportWebp() {
  if (!inBrowser2)
    return false;
  let support = true;
  try {
    const elem = document.createElement("canvas");
    if (elem.getContext && elem.getContext("2d")) {
      support = elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    }
  } catch (err) {
    support = false;
  }
  return support;
}
function throttle(action, delay) {
  let timeout = null;
  let lastRun = 0;
  return function(...args) {
    if (timeout) {
      return;
    }
    const elapsed = Date.now() - lastRun;
    const runCallback = () => {
      lastRun = Date.now();
      timeout = false;
      action.apply(this, args);
    };
    if (elapsed >= delay) {
      runCallback();
    } else {
      timeout = setTimeout(runCallback, delay);
    }
  };
}
function on(el, type, func) {
  el.addEventListener(type, func, {
    capture: false,
    passive: true
  });
}
function off(el, type, func) {
  el.removeEventListener(type, func, false);
}
var loadImageAsync = (item, resolve, reject) => {
  const image = new Image();
  if (!item || !item.src) {
    return reject(new Error("image src is required"));
  }
  image.src = item.src;
  if (item.cors) {
    image.crossOrigin = item.cors;
  }
  image.onload = () => resolve({
    naturalHeight: image.naturalHeight,
    naturalWidth: image.naturalWidth,
    src: image.src
  });
  image.onerror = (e) => reject(e);
};
var ImageCache = class {
  constructor({ max }) {
    this.options = {
      max: max || 100
    };
    this.caches = [];
  }
  has(key) {
    return this.caches.indexOf(key) > -1;
  }
  add(key) {
    if (this.has(key))
      return;
    this.caches.push(key);
    if (this.caches.length > this.options.max) {
      this.free();
    }
  }
  free() {
    this.caches.shift();
  }
};

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/back-top/BackTop.mjs
var [name36, bem35] = createNamespace("back-top");
var backTopProps = {
  right: numericProp,
  bottom: numericProp,
  target: [String, Object],
  offset: makeNumericProp(200),
  teleport: {
    type: [String, Object],
    default: "body"
  }
};
var stdin_default39 = defineComponent({
  name: name36,
  inheritAttrs: false,
  props: backTopProps,
  emits: ["click"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const show = ref(false);
    const root = ref();
    const scrollParent = ref();
    const style = computed(() => ({
      right: addUnit(props.right),
      bottom: addUnit(props.bottom)
    }));
    const onClick = (event) => {
      var _a;
      emit("click", event);
      (_a = scrollParent.value) == null ? void 0 : _a.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
    const scroll = () => {
      show.value = scrollParent.value ? getScrollTop(scrollParent.value) >= props.offset : false;
    };
    const getTarget = () => {
      const {
        target
      } = props;
      if (typeof target === "string") {
        const el = document.querySelector(target);
        if (el) {
          return el;
        }
        if (true) {
          console.error(`[Vant] BackTop: target element "${target}" was not found, the BackTop component will not be rendered.`);
        }
      } else {
        return target;
      }
    };
    const updateTarget = () => {
      if (inBrowser) {
        nextTick(() => {
          scrollParent.value = props.target ? getTarget() : getScrollParent(root.value);
          scroll();
        });
      }
    };
    useEventListener("scroll", throttle(scroll, 100), {
      target: scrollParent
    });
    onMounted(updateTarget);
    watch(() => props.target, updateTarget);
    return () => {
      const Content = createVNode("div", mergeProps({
        "ref": root,
        "class": bem35({
          active: show.value
        }),
        "style": style.value,
        "onClick": onClick
      }, attrs), [slots.default ? slots.default() : createVNode(Icon, {
        "name": "back-top",
        "class": bem35("icon")
      }, null)]);
      if (props.teleport) {
        return createVNode(Teleport, {
          "to": props.teleport
        }, {
          default: () => [Content]
        });
      }
      return Content;
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/back-top/index.mjs
var BackTop = withInstall(stdin_default39);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/calendar/utils.mjs
var [name37, bem36, t5] = createNamespace("calendar");
var formatMonthTitle = (date) => t5("monthTitle", date.getFullYear(), date.getMonth() + 1);
function compareMonth(date1, date2) {
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  if (year1 === year2) {
    const month1 = date1.getMonth();
    const month2 = date2.getMonth();
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }
  return year1 > year2 ? 1 : -1;
}
function compareDay(day1, day2) {
  const compareMonthResult = compareMonth(day1, day2);
  if (compareMonthResult === 0) {
    const date1 = day1.getDate();
    const date2 = day2.getDate();
    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
  }
  return compareMonthResult;
}
var cloneDate = (date) => new Date(date);
var cloneDates = (dates) => Array.isArray(dates) ? dates.map(cloneDate) : cloneDate(dates);
function getDayByOffset(date, offset2) {
  const cloned = cloneDate(date);
  cloned.setDate(cloned.getDate() + offset2);
  return cloned;
}
var getPrevDay = (date) => getDayByOffset(date, -1);
var getNextDay = (date) => getDayByOffset(date, 1);
var getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};
function calcDateNum(date) {
  const day1 = date[0].getTime();
  const day2 = date[1].getTime();
  return (day2 - day1) / (1e3 * 60 * 60 * 24) + 1;
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/date-picker/utils.mjs
var sharedProps = extend({}, pickerSharedProps, {
  modelValue: makeArrayProp(),
  filter: Function,
  formatter: {
    type: Function,
    default: (type, option) => option
  }
});
var pickerInheritKeys = Object.keys(pickerSharedProps);
function times(n, iteratee) {
  if (n < 0) {
    return [];
  }
  const result = Array(n);
  let index = -1;
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var getMonthEndDay = (year, month) => 32 - new Date(year, month - 1, 32).getDate();
var genOptions = (min, max, type, formatter, filter) => {
  const options = times(max - min + 1, (index) => {
    const value = padZero(min + index);
    return formatter(type, {
      text: value,
      value
    });
  });
  return filter ? filter(type, options) : options;
};
var formatValueRange = (values, columns) => values.map((value, index) => {
  const column = columns[index];
  if (column.length) {
    const maxValue = +column[column.length - 1].value;
    if (+value > maxValue) {
      return String(maxValue);
    }
  }
  return value;
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/calendar/CalendarDay.mjs
var [name38] = createNamespace("calendar-day");
var stdin_default40 = defineComponent({
  name: name38,
  props: {
    item: makeRequiredProp(Object),
    color: String,
    index: Number,
    offset: makeNumberProp(0),
    rowHeight: String
  },
  emits: ["click"],
  setup(props, {
    emit,
    slots
  }) {
    const style = computed(() => {
      var _a;
      const {
        item,
        index,
        color,
        offset: offset2,
        rowHeight
      } = props;
      const style2 = {
        height: rowHeight
      };
      if (item.type === "placeholder") {
        style2.width = "100%";
        return style2;
      }
      if (index === 0) {
        style2.marginLeft = `${100 * offset2 / 7}%`;
      }
      if (color) {
        switch (item.type) {
          case "end":
          case "start":
          case "start-end":
          case "multiple-middle":
          case "multiple-selected":
            style2.background = color;
            break;
          case "middle":
            style2.color = color;
            break;
        }
      }
      if (offset2 + (((_a = item.date) == null ? void 0 : _a.getDate()) || 1) > 28) {
        style2.marginBottom = 0;
      }
      return style2;
    });
    const onClick = () => {
      if (props.item.type !== "disabled") {
        emit("click", props.item);
      }
    };
    const renderTopInfo = () => {
      const {
        topInfo
      } = props.item;
      if (topInfo || slots["top-info"]) {
        return createVNode("div", {
          "class": bem36("top-info")
        }, [slots["top-info"] ? slots["top-info"](props.item) : topInfo]);
      }
    };
    const renderBottomInfo = () => {
      const {
        bottomInfo
      } = props.item;
      if (bottomInfo || slots["bottom-info"]) {
        return createVNode("div", {
          "class": bem36("bottom-info")
        }, [slots["bottom-info"] ? slots["bottom-info"](props.item) : bottomInfo]);
      }
    };
    const renderContent = () => {
      const {
        item,
        color,
        rowHeight
      } = props;
      const {
        type,
        text
      } = item;
      const Nodes = [renderTopInfo(), text, renderBottomInfo()];
      if (type === "selected") {
        return createVNode("div", {
          "class": bem36("selected-day"),
          "style": {
            width: rowHeight,
            height: rowHeight,
            background: color
          }
        }, [Nodes]);
      }
      return Nodes;
    };
    return () => {
      const {
        type,
        className
      } = props.item;
      if (type === "placeholder") {
        return createVNode("div", {
          "class": bem36("day"),
          "style": style.value
        }, null);
      }
      return createVNode("div", {
        "role": "gridcell",
        "style": style.value,
        "class": [bem36("day", type), className],
        "tabindex": type === "disabled" ? void 0 : -1,
        "onClick": onClick
      }, [renderContent()]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/calendar/CalendarMonth.mjs
var [name39] = createNamespace("calendar-month");
var calendarMonthProps = {
  date: makeRequiredProp(Date),
  type: String,
  color: String,
  minDate: makeRequiredProp(Date),
  maxDate: makeRequiredProp(Date),
  showMark: Boolean,
  rowHeight: numericProp,
  formatter: Function,
  lazyRender: Boolean,
  currentDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: Boolean,
  showMonthTitle: Boolean,
  firstDayOfWeek: Number
};
var stdin_default41 = defineComponent({
  name: name39,
  props: calendarMonthProps,
  emits: ["click"],
  setup(props, {
    emit,
    slots
  }) {
    const [visible, setVisible] = useToggle();
    const daysRef = ref();
    const monthRef = ref();
    const height2 = useHeight(monthRef);
    const title = computed(() => formatMonthTitle(props.date));
    const rowHeight = computed(() => addUnit(props.rowHeight));
    const offset2 = computed(() => {
      const realDay = props.date.getDay();
      if (props.firstDayOfWeek) {
        return (realDay + 7 - props.firstDayOfWeek) % 7;
      }
      return realDay;
    });
    const totalDay = computed(() => getMonthEndDay(props.date.getFullYear(), props.date.getMonth() + 1));
    const shouldRender = computed(() => visible.value || !props.lazyRender);
    const getTitle = () => title.value;
    const getMultipleDayType = (day) => {
      const isSelected = (date) => props.currentDate.some((item) => compareDay(item, date) === 0);
      if (isSelected(day)) {
        const prevDay = getPrevDay(day);
        const nextDay = getNextDay(day);
        const prevSelected = isSelected(prevDay);
        const nextSelected = isSelected(nextDay);
        if (prevSelected && nextSelected) {
          return "multiple-middle";
        }
        if (prevSelected) {
          return "end";
        }
        if (nextSelected) {
          return "start";
        }
        return "multiple-selected";
      }
      return "";
    };
    const getRangeDayType = (day) => {
      const [startDay, endDay] = props.currentDate;
      if (!startDay) {
        return "";
      }
      const compareToStart = compareDay(day, startDay);
      if (!endDay) {
        return compareToStart === 0 ? "start" : "";
      }
      const compareToEnd = compareDay(day, endDay);
      if (props.allowSameDay && compareToStart === 0 && compareToEnd === 0) {
        return "start-end";
      }
      if (compareToStart === 0) {
        return "start";
      }
      if (compareToEnd === 0) {
        return "end";
      }
      if (compareToStart > 0 && compareToEnd < 0) {
        return "middle";
      }
      return "";
    };
    const getDayType = (day) => {
      const {
        type,
        minDate,
        maxDate,
        currentDate
      } = props;
      if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
        return "disabled";
      }
      if (currentDate === null) {
        return "";
      }
      if (Array.isArray(currentDate)) {
        if (type === "multiple") {
          return getMultipleDayType(day);
        }
        if (type === "range") {
          return getRangeDayType(day);
        }
      } else if (type === "single") {
        return compareDay(day, currentDate) === 0 ? "selected" : "";
      }
      return "";
    };
    const getBottomInfo = (dayType) => {
      if (props.type === "range") {
        if (dayType === "start" || dayType === "end") {
          return t5(dayType);
        }
        if (dayType === "start-end") {
          return `${t5("start")}/${t5("end")}`;
        }
      }
    };
    const renderTitle = () => {
      if (props.showMonthTitle) {
        return createVNode("div", {
          "class": bem36("month-title")
        }, [title.value]);
      }
    };
    const renderMark = () => {
      if (props.showMark && shouldRender.value) {
        return createVNode("div", {
          "class": bem36("month-mark")
        }, [props.date.getMonth() + 1]);
      }
    };
    const placeholders = computed(() => {
      const count = Math.ceil((totalDay.value + offset2.value) / 7);
      return Array(count).fill({
        type: "placeholder"
      });
    });
    const days = computed(() => {
      const days2 = [];
      const year = props.date.getFullYear();
      const month = props.date.getMonth();
      for (let day = 1; day <= totalDay.value; day++) {
        const date = new Date(year, month, day);
        const type = getDayType(date);
        let config = {
          date,
          type,
          text: day,
          bottomInfo: getBottomInfo(type)
        };
        if (props.formatter) {
          config = props.formatter(config);
        }
        days2.push(config);
      }
      return days2;
    });
    const disabledDays = computed(() => days.value.filter((day) => day.type === "disabled"));
    const scrollToDate = (body, targetDate) => {
      if (daysRef.value) {
        const daysRect = useRect(daysRef.value);
        const totalRows = placeholders.value.length;
        const currentRow = Math.ceil((targetDate.getDate() + offset2.value) / 7);
        const rowOffset = (currentRow - 1) * daysRect.height / totalRows;
        setScrollTop(body, daysRect.top + rowOffset + body.scrollTop - useRect(body).top);
      }
    };
    const renderDay = (item, index) => createVNode(stdin_default40, {
      "item": item,
      "index": index,
      "color": props.color,
      "offset": offset2.value,
      "rowHeight": rowHeight.value,
      "onClick": (item2) => emit("click", item2)
    }, pick(slots, ["top-info", "bottom-info"]));
    const renderDays = () => createVNode("div", {
      "ref": daysRef,
      "role": "grid",
      "class": bem36("days")
    }, [renderMark(), (shouldRender.value ? days : placeholders).value.map(renderDay)]);
    useExpose({
      getTitle,
      getHeight: () => height2.value,
      setVisible,
      scrollToDate,
      disabledDays
    });
    return () => createVNode("div", {
      "class": bem36("month"),
      "ref": monthRef
    }, [renderTitle(), renderDays()]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/calendar/CalendarHeader.mjs
var [name40] = createNamespace("calendar-header");
var stdin_default42 = defineComponent({
  name: name40,
  props: {
    date: Date,
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number
  },
  emits: ["clickSubtitle"],
  setup(props, {
    slots,
    emit
  }) {
    const renderTitle = () => {
      if (props.showTitle) {
        const text = props.title || t5("title");
        const title = slots.title ? slots.title() : text;
        return createVNode("div", {
          "class": bem36("header-title")
        }, [title]);
      }
    };
    const onClickSubtitle = (event) => emit("clickSubtitle", event);
    const renderSubtitle = () => {
      if (props.showSubtitle) {
        const title = slots.subtitle ? slots.subtitle({
          date: props.date,
          text: props.subtitle
        }) : props.subtitle;
        return createVNode("div", {
          "class": bem36("header-subtitle"),
          "onClick": onClickSubtitle
        }, [title]);
      }
    };
    const renderWeekDays = () => {
      const {
        firstDayOfWeek
      } = props;
      const weekdays = t5("weekdays");
      const renderWeekDays2 = [...weekdays.slice(firstDayOfWeek, 7), ...weekdays.slice(0, firstDayOfWeek)];
      return createVNode("div", {
        "class": bem36("weekdays")
      }, [renderWeekDays2.map((text) => createVNode("span", {
        "class": bem36("weekday")
      }, [text]))]);
    };
    return () => createVNode("div", {
      "class": bem36("header")
    }, [renderTitle(), renderSubtitle(), renderWeekDays()]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/calendar/Calendar.mjs
var calendarProps = {
  show: Boolean,
  type: makeStringProp("single"),
  title: String,
  color: String,
  round: truthProp,
  readonly: Boolean,
  poppable: truthProp,
  maxRange: makeNumericProp(null),
  position: makeStringProp("bottom"),
  teleport: [String, Object],
  showMark: truthProp,
  showTitle: truthProp,
  formatter: Function,
  rowHeight: numericProp,
  confirmText: String,
  rangePrompt: String,
  lazyRender: truthProp,
  showConfirm: truthProp,
  defaultDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: truthProp,
  closeOnPopstate: truthProp,
  showRangePrompt: truthProp,
  confirmDisabledText: String,
  closeOnClickOverlay: truthProp,
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: truthProp,
  minDate: {
    type: Date,
    validator: isDate,
    default: getToday
  },
  maxDate: {
    type: Date,
    validator: isDate,
    default: () => {
      const now = getToday();
      return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
    }
  },
  firstDayOfWeek: {
    type: numericProp,
    default: 0,
    validator: (val) => val >= 0 && val <= 6
  }
};
var stdin_default43 = defineComponent({
  name: name37,
  props: calendarProps,
  emits: ["select", "confirm", "unselect", "monthShow", "overRange", "update:show", "clickSubtitle"],
  setup(props, {
    emit,
    slots
  }) {
    const limitDateRange = (date, minDate = props.minDate, maxDate = props.maxDate) => {
      if (compareDay(date, minDate) === -1) {
        return minDate;
      }
      if (compareDay(date, maxDate) === 1) {
        return maxDate;
      }
      return date;
    };
    const getInitialDate = (defaultDate = props.defaultDate) => {
      const {
        type,
        minDate,
        maxDate,
        allowSameDay
      } = props;
      if (defaultDate === null) {
        return defaultDate;
      }
      const now = getToday();
      if (type === "range") {
        if (!Array.isArray(defaultDate)) {
          defaultDate = [];
        }
        const start2 = limitDateRange(defaultDate[0] || now, minDate, allowSameDay ? maxDate : getPrevDay(maxDate));
        const end2 = limitDateRange(defaultDate[1] || now, allowSameDay ? minDate : getNextDay(minDate));
        return [start2, end2];
      }
      if (type === "multiple") {
        if (Array.isArray(defaultDate)) {
          return defaultDate.map((date) => limitDateRange(date));
        }
        return [limitDateRange(now)];
      }
      if (!defaultDate || Array.isArray(defaultDate)) {
        defaultDate = now;
      }
      return limitDateRange(defaultDate);
    };
    let bodyHeight;
    const bodyRef = ref();
    const subtitle = ref({
      text: "",
      date: void 0
    });
    const currentDate = ref(getInitialDate());
    const [monthRefs, setMonthRefs] = useRefs();
    const dayOffset = computed(() => props.firstDayOfWeek ? +props.firstDayOfWeek % 7 : 0);
    const months = computed(() => {
      const months2 = [];
      const cursor = new Date(props.minDate);
      cursor.setDate(1);
      do {
        months2.push(new Date(cursor));
        cursor.setMonth(cursor.getMonth() + 1);
      } while (compareMonth(cursor, props.maxDate) !== 1);
      return months2;
    });
    const buttonDisabled = computed(() => {
      if (currentDate.value) {
        if (props.type === "range") {
          return !currentDate.value[0] || !currentDate.value[1];
        }
        if (props.type === "multiple") {
          return !currentDate.value.length;
        }
      }
      return !currentDate.value;
    });
    const getSelectedDate = () => currentDate.value;
    const onScroll = () => {
      const top2 = getScrollTop(bodyRef.value);
      const bottom2 = top2 + bodyHeight;
      const heights = months.value.map((item, index) => monthRefs.value[index].getHeight());
      const heightSum = heights.reduce((a, b) => a + b, 0);
      if (bottom2 > heightSum && top2 > 0) {
        return;
      }
      let height2 = 0;
      let currentMonth;
      const visibleRange = [-1, -1];
      for (let i = 0; i < months.value.length; i++) {
        const month = monthRefs.value[i];
        const visible = height2 <= bottom2 && height2 + heights[i] >= top2;
        if (visible) {
          visibleRange[1] = i;
          if (!currentMonth) {
            currentMonth = month;
            visibleRange[0] = i;
          }
          if (!monthRefs.value[i].showed) {
            monthRefs.value[i].showed = true;
            emit("monthShow", {
              date: month.date,
              title: month.getTitle()
            });
          }
        }
        height2 += heights[i];
      }
      months.value.forEach((month, index) => {
        const visible = index >= visibleRange[0] - 1 && index <= visibleRange[1] + 1;
        monthRefs.value[index].setVisible(visible);
      });
      if (currentMonth) {
        subtitle.value = {
          text: currentMonth.getTitle(),
          date: currentMonth.date
        };
      }
    };
    const scrollToDate = (targetDate) => {
      raf(() => {
        months.value.some((month, index) => {
          if (compareMonth(month, targetDate) === 0) {
            if (bodyRef.value) {
              monthRefs.value[index].scrollToDate(bodyRef.value, targetDate);
            }
            return true;
          }
          return false;
        });
        onScroll();
      });
    };
    const scrollToCurrentDate = () => {
      if (props.poppable && !props.show) {
        return;
      }
      if (currentDate.value) {
        const targetDate = props.type === "single" ? currentDate.value : currentDate.value[0];
        if (isDate(targetDate)) {
          scrollToDate(targetDate);
        }
      } else {
        raf(onScroll);
      }
    };
    const init = () => {
      if (props.poppable && !props.show) {
        return;
      }
      raf(() => {
        bodyHeight = Math.floor(useRect(bodyRef).height);
      });
      scrollToCurrentDate();
    };
    const reset = (date = getInitialDate()) => {
      currentDate.value = date;
      scrollToCurrentDate();
    };
    const checkRange = (date) => {
      const {
        maxRange,
        rangePrompt,
        showRangePrompt
      } = props;
      if (maxRange && calcDateNum(date) > maxRange) {
        if (showRangePrompt) {
          showToast(rangePrompt || t5("rangePrompt", maxRange));
        }
        emit("overRange");
        return false;
      }
      return true;
    };
    const onConfirm = () => {
      var _a;
      return emit("confirm", (_a = currentDate.value) != null ? _a : cloneDates(currentDate.value));
    };
    const select = (date, complete) => {
      const setCurrentDate = (date2) => {
        currentDate.value = date2;
        emit("select", cloneDates(date2));
      };
      if (complete && props.type === "range") {
        const valid = checkRange(date);
        if (!valid) {
          setCurrentDate([date[0], getDayByOffset(date[0], +props.maxRange - 1)]);
          return;
        }
      }
      setCurrentDate(date);
      if (complete && !props.showConfirm) {
        onConfirm();
      }
    };
    const getDisabledDate = (disabledDays2, startDay, date) => {
      var _a;
      return (_a = disabledDays2.find((day) => compareDay(startDay, day.date) === -1 && compareDay(day.date, date) === -1)) == null ? void 0 : _a.date;
    };
    const disabledDays = computed(() => monthRefs.value.reduce((arr, ref2) => {
      var _a, _b;
      arr.push(...(_b = (_a = ref2.disabledDays) == null ? void 0 : _a.value) != null ? _b : []);
      return arr;
    }, []));
    const onClickDay = (item) => {
      if (props.readonly || !item.date) {
        return;
      }
      const {
        date
      } = item;
      const {
        type
      } = props;
      if (type === "range") {
        if (!currentDate.value) {
          select([date]);
          return;
        }
        const [startDay, endDay] = currentDate.value;
        if (startDay && !endDay) {
          const compareToStart = compareDay(date, startDay);
          if (compareToStart === 1) {
            const disabledDay = getDisabledDate(disabledDays.value, startDay, date);
            if (disabledDay) {
              const endDay2 = getPrevDay(disabledDay);
              if (compareDay(startDay, endDay2) === -1) {
                select([startDay, endDay2]);
              } else {
                select([date]);
              }
            } else {
              select([startDay, date], true);
            }
          } else if (compareToStart === -1) {
            select([date]);
          } else if (props.allowSameDay) {
            select([date, date], true);
          }
        } else {
          select([date]);
        }
      } else if (type === "multiple") {
        if (!currentDate.value) {
          select([date]);
          return;
        }
        const dates = currentDate.value;
        const selectedIndex = dates.findIndex((dateItem) => compareDay(dateItem, date) === 0);
        if (selectedIndex !== -1) {
          const [unselectedDate] = dates.splice(selectedIndex, 1);
          emit("unselect", cloneDate(unselectedDate));
        } else if (props.maxRange && dates.length >= props.maxRange) {
          showToast(props.rangePrompt || t5("rangePrompt", props.maxRange));
        } else {
          select([...dates, date]);
        }
      } else {
        select(date, true);
      }
    };
    const updateShow = (value) => emit("update:show", value);
    const renderMonth = (date, index) => {
      const showMonthTitle = index !== 0 || !props.showSubtitle;
      return createVNode(stdin_default41, mergeProps({
        "ref": setMonthRefs(index),
        "date": date,
        "currentDate": currentDate.value,
        "showMonthTitle": showMonthTitle,
        "firstDayOfWeek": dayOffset.value
      }, pick(props, ["type", "color", "minDate", "maxDate", "showMark", "formatter", "rowHeight", "lazyRender", "showSubtitle", "allowSameDay"]), {
        "onClick": onClickDay
      }), pick(slots, ["top-info", "bottom-info"]));
    };
    const renderFooterButton = () => {
      if (slots.footer) {
        return slots.footer();
      }
      if (props.showConfirm) {
        const slot = slots["confirm-text"];
        const disabled = buttonDisabled.value;
        const text = disabled ? props.confirmDisabledText : props.confirmText;
        return createVNode(Button, {
          "round": true,
          "block": true,
          "type": "primary",
          "color": props.color,
          "class": bem36("confirm"),
          "disabled": disabled,
          "nativeType": "button",
          "onClick": onConfirm
        }, {
          default: () => [slot ? slot({
            disabled
          }) : text || t5("confirm")]
        });
      }
    };
    const renderFooter = () => createVNode("div", {
      "class": [bem36("footer"), {
        "van-safe-area-bottom": props.safeAreaInsetBottom
      }]
    }, [renderFooterButton()]);
    const renderCalendar = () => createVNode("div", {
      "class": bem36()
    }, [createVNode(stdin_default42, {
      "date": subtitle.value.date,
      "title": props.title,
      "subtitle": subtitle.value.text,
      "showTitle": props.showTitle,
      "showSubtitle": props.showSubtitle,
      "firstDayOfWeek": dayOffset.value,
      "onClickSubtitle": (event) => emit("clickSubtitle", event)
    }, pick(slots, ["title", "subtitle"])), createVNode("div", {
      "ref": bodyRef,
      "class": bem36("body"),
      "onScroll": onScroll
    }, [months.value.map(renderMonth)]), renderFooter()]);
    watch(() => props.show, init);
    watch(() => [props.type, props.minDate, props.maxDate], () => reset(getInitialDate(currentDate.value)));
    watch(() => props.defaultDate, (value = null) => {
      currentDate.value = value;
      scrollToCurrentDate();
    });
    useExpose({
      reset,
      scrollToDate,
      getSelectedDate
    });
    onMountedOrActivated(init);
    return () => {
      if (props.poppable) {
        return createVNode(Popup, {
          "show": props.show,
          "class": bem36("popup"),
          "round": props.round,
          "position": props.position,
          "closeable": props.showTitle || props.showSubtitle,
          "teleport": props.teleport,
          "closeOnPopstate": props.closeOnPopstate,
          "safeAreaInsetTop": props.safeAreaInsetTop,
          "closeOnClickOverlay": props.closeOnClickOverlay,
          "onUpdate:show": updateShow
        }, {
          default: renderCalendar
        });
      }
      return renderCalendar();
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/calendar/index.mjs
var Calendar = withInstall(stdin_default43);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/image/Image.mjs
var [name41, bem37] = createNamespace("image");
var imageProps = {
  src: String,
  alt: String,
  fit: String,
  position: String,
  round: Boolean,
  block: Boolean,
  width: numericProp,
  height: numericProp,
  radius: numericProp,
  lazyLoad: Boolean,
  iconSize: numericProp,
  showError: truthProp,
  errorIcon: makeStringProp("photo-fail"),
  iconPrefix: String,
  showLoading: truthProp,
  loadingIcon: makeStringProp("photo")
};
var stdin_default44 = defineComponent({
  name: name41,
  props: imageProps,
  emits: ["load", "error"],
  setup(props, {
    emit,
    slots
  }) {
    const error = ref(false);
    const loading = ref(true);
    const imageRef = ref();
    const {
      $Lazyload
    } = getCurrentInstance().proxy;
    const style = computed(() => {
      const style2 = {
        width: addUnit(props.width),
        height: addUnit(props.height)
      };
      if (isDef(props.radius)) {
        style2.overflow = "hidden";
        style2.borderRadius = addUnit(props.radius);
      }
      return style2;
    });
    watch(() => props.src, () => {
      error.value = false;
      loading.value = true;
    });
    const onLoad = (event) => {
      if (loading.value) {
        loading.value = false;
        emit("load", event);
      }
    };
    const onError = (event) => {
      error.value = true;
      loading.value = false;
      emit("error", event);
    };
    const renderIcon = (name210, className, slot) => {
      if (slot) {
        return slot();
      }
      return createVNode(Icon, {
        "name": name210,
        "size": props.iconSize,
        "class": className,
        "classPrefix": props.iconPrefix
      }, null);
    };
    const renderPlaceholder = () => {
      if (loading.value && props.showLoading) {
        return createVNode("div", {
          "class": bem37("loading")
        }, [renderIcon(props.loadingIcon, bem37("loading-icon"), slots.loading)]);
      }
      if (error.value && props.showError) {
        return createVNode("div", {
          "class": bem37("error")
        }, [renderIcon(props.errorIcon, bem37("error-icon"), slots.error)]);
      }
    };
    const renderImage = () => {
      if (error.value || !props.src) {
        return;
      }
      const attrs = {
        alt: props.alt,
        class: bem37("img"),
        style: {
          objectFit: props.fit,
          objectPosition: props.position
        }
      };
      if (props.lazyLoad) {
        return withDirectives(createVNode("img", mergeProps({
          "ref": imageRef
        }, attrs), null), [[resolveDirective("lazy"), props.src]]);
      }
      return createVNode("img", mergeProps({
        "ref": imageRef,
        "src": props.src,
        "onLoad": onLoad,
        "onError": onError
      }, attrs), null);
    };
    const onLazyLoaded = ({
      el
    }) => {
      const check = () => {
        if (el === imageRef.value && loading.value) {
          onLoad();
        }
      };
      if (imageRef.value) {
        check();
      } else {
        nextTick(check);
      }
    };
    const onLazyLoadError = ({
      el
    }) => {
      if (el === imageRef.value && !error.value) {
        onError();
      }
    };
    if ($Lazyload && inBrowser) {
      $Lazyload.$on("loaded", onLazyLoaded);
      $Lazyload.$on("error", onLazyLoadError);
      onBeforeUnmount(() => {
        $Lazyload.$off("loaded", onLazyLoaded);
        $Lazyload.$off("error", onLazyLoadError);
      });
    }
    onMounted(() => {
      nextTick(() => {
        var _a;
        if ((_a = imageRef.value) == null ? void 0 : _a.complete) {
          onLoad();
        }
      });
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": bem37({
          round: props.round,
          block: props.block
        }),
        "style": style.value
      }, [renderImage(), renderPlaceholder(), (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/image/index.mjs
var Image2 = withInstall(stdin_default44);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/card/Card.mjs
var [name42, bem38] = createNamespace("card");
var cardProps = {
  tag: String,
  num: numericProp,
  desc: String,
  thumb: String,
  title: String,
  price: numericProp,
  centered: Boolean,
  lazyLoad: Boolean,
  currency: makeStringProp("¥"),
  thumbLink: String,
  originPrice: numericProp
};
var stdin_default45 = defineComponent({
  name: name42,
  props: cardProps,
  emits: ["clickThumb"],
  setup(props, {
    slots,
    emit
  }) {
    const renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }
      if (props.title) {
        return createVNode("div", {
          "class": [bem38("title"), "van-multi-ellipsis--l2"]
        }, [props.title]);
      }
    };
    const renderThumbTag = () => {
      if (slots.tag || props.tag) {
        return createVNode("div", {
          "class": bem38("tag")
        }, [slots.tag ? slots.tag() : createVNode(Tag, {
          "mark": true,
          "type": "primary"
        }, {
          default: () => [props.tag]
        })]);
      }
    };
    const renderThumbImage = () => {
      if (slots.thumb) {
        return slots.thumb();
      }
      return createVNode(Image2, {
        "src": props.thumb,
        "fit": "cover",
        "width": "100%",
        "height": "100%",
        "lazyLoad": props.lazyLoad
      }, null);
    };
    const renderThumb = () => {
      if (slots.thumb || props.thumb) {
        return createVNode("a", {
          "href": props.thumbLink,
          "class": bem38("thumb"),
          "onClick": (event) => emit("clickThumb", event)
        }, [renderThumbImage(), renderThumbTag()]);
      }
    };
    const renderDesc = () => {
      if (slots.desc) {
        return slots.desc();
      }
      if (props.desc) {
        return createVNode("div", {
          "class": [bem38("desc"), "van-ellipsis"]
        }, [props.desc]);
      }
    };
    const renderPriceText = () => {
      const priceArr = props.price.toString().split(".");
      return createVNode("div", null, [createVNode("span", {
        "class": bem38("price-currency")
      }, [props.currency]), createVNode("span", {
        "class": bem38("price-integer")
      }, [priceArr[0]]), createTextVNode("."), createVNode("span", {
        "class": bem38("price-decimal")
      }, [priceArr[1]])]);
    };
    return () => {
      var _a, _b, _c;
      const showNum = slots.num || isDef(props.num);
      const showPrice = slots.price || isDef(props.price);
      const showOriginPrice = slots["origin-price"] || isDef(props.originPrice);
      const showBottom = showNum || showPrice || showOriginPrice || slots.bottom;
      const Price = showPrice && createVNode("div", {
        "class": bem38("price")
      }, [slots.price ? slots.price() : renderPriceText()]);
      const OriginPrice = showOriginPrice && createVNode("div", {
        "class": bem38("origin-price")
      }, [slots["origin-price"] ? slots["origin-price"]() : `${props.currency} ${props.originPrice}`]);
      const Num = showNum && createVNode("div", {
        "class": bem38("num")
      }, [slots.num ? slots.num() : `x${props.num}`]);
      const Footer = slots.footer && createVNode("div", {
        "class": bem38("footer")
      }, [slots.footer()]);
      const Bottom = showBottom && createVNode("div", {
        "class": bem38("bottom")
      }, [(_a = slots["price-top"]) == null ? void 0 : _a.call(slots), Price, OriginPrice, Num, (_b = slots.bottom) == null ? void 0 : _b.call(slots)]);
      return createVNode("div", {
        "class": bem38()
      }, [createVNode("div", {
        "class": bem38("header")
      }, [renderThumb(), createVNode("div", {
        "class": bem38("content", {
          centered: props.centered
        })
      }, [createVNode("div", null, [renderTitle(), renderDesc(), (_c = slots.tags) == null ? void 0 : _c.call(slots)]), Bottom])]), Footer]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/card/index.mjs
var Card = withInstall(stdin_default45);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/cascader/Cascader.mjs
var [name43, bem39, t6] = createNamespace("cascader");
var cascaderProps = {
  title: String,
  options: makeArrayProp(),
  closeable: truthProp,
  swipeable: truthProp,
  closeIcon: makeStringProp("cross"),
  showHeader: truthProp,
  modelValue: numericProp,
  fieldNames: Object,
  placeholder: String,
  activeColor: String
};
var stdin_default46 = defineComponent({
  name: name43,
  props: cascaderProps,
  emits: ["close", "change", "finish", "clickTab", "update:modelValue"],
  setup(props, {
    slots,
    emit
  }) {
    const tabs = ref([]);
    const activeTab = ref(0);
    const {
      text: textKey,
      value: valueKey,
      children: childrenKey
    } = extend({
      text: "text",
      value: "value",
      children: "children"
    }, props.fieldNames);
    const getSelectedOptionsByValue = (options, value) => {
      for (const option of options) {
        if (option[valueKey] === value) {
          return [option];
        }
        if (option[childrenKey]) {
          const selectedOptions = getSelectedOptionsByValue(option[childrenKey], value);
          if (selectedOptions) {
            return [option, ...selectedOptions];
          }
        }
      }
    };
    const updateTabs = () => {
      const {
        options,
        modelValue
      } = props;
      if (modelValue !== void 0) {
        const selectedOptions = getSelectedOptionsByValue(options, modelValue);
        if (selectedOptions) {
          let optionsCursor = options;
          tabs.value = selectedOptions.map((option) => {
            const tab = {
              options: optionsCursor,
              selected: option
            };
            const next = optionsCursor.find((item) => item[valueKey] === option[valueKey]);
            if (next) {
              optionsCursor = next[childrenKey];
            }
            return tab;
          });
          if (optionsCursor) {
            tabs.value.push({
              options: optionsCursor,
              selected: null
            });
          }
          nextTick(() => {
            activeTab.value = tabs.value.length - 1;
          });
          return;
        }
      }
      tabs.value = [{
        options,
        selected: null
      }];
    };
    const onSelect = (option, tabIndex) => {
      if (option.disabled) {
        return;
      }
      tabs.value[tabIndex].selected = option;
      if (tabs.value.length > tabIndex + 1) {
        tabs.value = tabs.value.slice(0, tabIndex + 1);
      }
      if (option[childrenKey]) {
        const nextTab = {
          options: option[childrenKey],
          selected: null
        };
        if (tabs.value[tabIndex + 1]) {
          tabs.value[tabIndex + 1] = nextTab;
        } else {
          tabs.value.push(nextTab);
        }
        nextTick(() => {
          activeTab.value++;
        });
      }
      const selectedOptions = tabs.value.map((tab) => tab.selected).filter(Boolean);
      emit("update:modelValue", option[valueKey]);
      const params = {
        value: option[valueKey],
        tabIndex,
        selectedOptions
      };
      emit("change", params);
      if (!option[childrenKey]) {
        emit("finish", params);
      }
    };
    const onClose = () => emit("close");
    const onClickTab = ({
      name: name210,
      title
    }) => emit("clickTab", name210, title);
    const renderHeader = () => props.showHeader ? createVNode("div", {
      "class": bem39("header")
    }, [createVNode("h2", {
      "class": bem39("title")
    }, [slots.title ? slots.title() : props.title]), props.closeable ? createVNode(Icon, {
      "name": props.closeIcon,
      "class": [bem39("close-icon"), HAPTICS_FEEDBACK],
      "onClick": onClose
    }, null) : null]) : null;
    const renderOption = (option, selectedOption, tabIndex) => {
      const {
        disabled
      } = option;
      const selected = !!(selectedOption && option[valueKey] === selectedOption[valueKey]);
      const color = option.color || (selected ? props.activeColor : void 0);
      const Text2 = slots.option ? slots.option({
        option,
        selected
      }) : createVNode("span", null, [option[textKey]]);
      return createVNode("li", {
        "role": "menuitemradio",
        "class": [bem39("option", {
          selected,
          disabled
        }), option.className],
        "style": {
          color
        },
        "tabindex": disabled ? void 0 : selected ? 0 : -1,
        "aria-checked": selected,
        "aria-disabled": disabled || void 0,
        "onClick": () => onSelect(option, tabIndex)
      }, [Text2, selected ? createVNode(Icon, {
        "name": "success",
        "class": bem39("selected-icon")
      }, null) : null]);
    };
    const renderOptions = (options, selectedOption, tabIndex) => createVNode("ul", {
      "role": "menu",
      "class": bem39("options")
    }, [options.map((option) => renderOption(option, selectedOption, tabIndex))]);
    const renderTab = (tab, tabIndex) => {
      const {
        options,
        selected
      } = tab;
      const placeholder = props.placeholder || t6("select");
      const title = selected ? selected[textKey] : placeholder;
      return createVNode(Tab, {
        "title": title,
        "titleClass": bem39("tab", {
          unselected: !selected
        })
      }, {
        default: () => {
          var _a, _b;
          return [(_a = slots["options-top"]) == null ? void 0 : _a.call(slots, {
            tabIndex
          }), renderOptions(options, selected, tabIndex), (_b = slots["options-bottom"]) == null ? void 0 : _b.call(slots, {
            tabIndex
          })];
        }
      });
    };
    const renderTabs = () => createVNode(Tabs, {
      "active": activeTab.value,
      "onUpdate:active": ($event) => activeTab.value = $event,
      "shrink": true,
      "animated": true,
      "class": bem39("tabs"),
      "color": props.activeColor,
      "swipeable": props.swipeable,
      "onClickTab": onClickTab
    }, {
      default: () => [tabs.value.map(renderTab)]
    });
    updateTabs();
    watch(() => props.options, updateTabs, {
      deep: true
    });
    watch(() => props.modelValue, (value) => {
      if (value !== void 0) {
        const values = tabs.value.map((tab) => {
          var _a;
          return (_a = tab.selected) == null ? void 0 : _a[valueKey];
        });
        if (values.includes(value)) {
          return;
        }
      }
      updateTabs();
    });
    return () => createVNode("div", {
      "class": bem39()
    }, [renderHeader(), renderTabs()]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/cascader/index.mjs
var Cascader = withInstall(stdin_default46);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/cell-group/CellGroup.mjs
var [name44, bem40] = createNamespace("cell-group");
var cellGroupProps = {
  title: String,
  inset: Boolean,
  border: truthProp
};
var stdin_default47 = defineComponent({
  name: name44,
  inheritAttrs: false,
  props: cellGroupProps,
  setup(props, {
    slots,
    attrs
  }) {
    const renderGroup = () => {
      var _a;
      return createVNode("div", mergeProps({
        "class": [bem40({
          inset: props.inset
        }), {
          [BORDER_TOP_BOTTOM]: props.border && !props.inset
        }]
      }, attrs), [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
    const renderTitle = () => createVNode("div", {
      "class": bem40("title", {
        inset: props.inset
      })
    }, [slots.title ? slots.title() : props.title]);
    return () => {
      if (props.title || slots.title) {
        return createVNode(Fragment, null, [renderTitle(), renderGroup()]);
      }
      return renderGroup();
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/cell-group/index.mjs
var CellGroup = withInstall(stdin_default47);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/checkbox-group/CheckboxGroup.mjs
var [name45, bem41] = createNamespace("checkbox-group");
var checkboxGroupProps = {
  max: numericProp,
  disabled: Boolean,
  iconSize: numericProp,
  direction: String,
  modelValue: makeArrayProp(),
  checkedColor: String
};
var CHECKBOX_GROUP_KEY = Symbol(name45);
var stdin_default48 = defineComponent({
  name: name45,
  props: checkboxGroupProps,
  emits: ["change", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      children,
      linkChildren
    } = useChildren(CHECKBOX_GROUP_KEY);
    const updateValue = (value) => emit("update:modelValue", value);
    const toggleAll = (options = {}) => {
      if (typeof options === "boolean") {
        options = {
          checked: options
        };
      }
      const {
        checked,
        skipDisabled
      } = options;
      const checkedChildren = children.filter((item) => {
        if (!item.props.bindGroup) {
          return false;
        }
        if (item.props.disabled && skipDisabled) {
          return item.checked.value;
        }
        return checked != null ? checked : !item.checked.value;
      });
      const names = checkedChildren.map((item) => item.name);
      updateValue(names);
    };
    watch(() => props.modelValue, (value) => emit("change", value));
    useExpose({
      toggleAll
    });
    useCustomFieldValue(() => props.modelValue);
    linkChildren({
      props,
      updateValue
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": bem41([props.direction])
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/checkbox/Checkbox.mjs
var [name46, bem42] = createNamespace("checkbox");
var checkboxProps = extend({}, checkerProps, {
  bindGroup: truthProp
});
var stdin_default49 = defineComponent({
  name: name46,
  props: checkboxProps,
  emits: ["change", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      parent
    } = useParent(CHECKBOX_GROUP_KEY);
    const setParentValue = (checked2) => {
      const {
        name: name210
      } = props;
      const {
        max,
        modelValue
      } = parent.props;
      const value = modelValue.slice();
      if (checked2) {
        const overlimit = max && value.length >= max;
        if (!overlimit && !value.includes(name210)) {
          value.push(name210);
          if (props.bindGroup) {
            parent.updateValue(value);
          }
        }
      } else {
        const index = value.indexOf(name210);
        if (index !== -1) {
          value.splice(index, 1);
          if (props.bindGroup) {
            parent.updateValue(value);
          }
        }
      }
    };
    const checked = computed(() => {
      if (parent && props.bindGroup) {
        return parent.props.modelValue.indexOf(props.name) !== -1;
      }
      return !!props.modelValue;
    });
    const toggle = (newValue = !checked.value) => {
      if (parent && props.bindGroup) {
        setParentValue(newValue);
      } else {
        emit("update:modelValue", newValue);
      }
    };
    watch(() => props.modelValue, (value) => emit("change", value));
    useExpose({
      toggle,
      props,
      checked
    });
    useCustomFieldValue(() => props.modelValue);
    return () => createVNode(stdin_default35, mergeProps({
      "bem": bem42,
      "role": "checkbox",
      "parent": parent,
      "checked": checked.value,
      "onToggle": toggle
    }, props), pick(slots, ["default", "icon"]));
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/checkbox/index.mjs
var Checkbox = withInstall(stdin_default49);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/checkbox-group/index.mjs
var CheckboxGroup = withInstall(stdin_default48);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/circle/Circle.mjs
var [name47, bem43] = createNamespace("circle");
var uid = 0;
var format = (rate) => Math.min(Math.max(+rate, 0), 100);
function getPath(clockwise, viewBoxSize) {
  const sweepFlag = clockwise ? 1 : 0;
  return `M ${viewBoxSize / 2} ${viewBoxSize / 2} m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`;
}
var circleProps = {
  text: String,
  size: numericProp,
  fill: makeStringProp("none"),
  rate: makeNumericProp(100),
  speed: makeNumericProp(0),
  color: [String, Object],
  clockwise: truthProp,
  layerColor: String,
  currentRate: makeNumberProp(0),
  strokeWidth: makeNumericProp(40),
  strokeLinecap: String,
  startPosition: makeStringProp("top")
};
var stdin_default50 = defineComponent({
  name: name47,
  props: circleProps,
  emits: ["update:currentRate"],
  setup(props, {
    emit,
    slots
  }) {
    const id = `van-circle-${uid++}`;
    const viewBoxSize = computed(() => +props.strokeWidth + 1e3);
    const path = computed(() => getPath(props.clockwise, viewBoxSize.value));
    const svgStyle = computed(() => {
      const ROTATE_ANGLE_MAP = {
        top: 0,
        right: 90,
        bottom: 180,
        left: 270
      };
      const angleValue = ROTATE_ANGLE_MAP[props.startPosition];
      if (angleValue) {
        return {
          transform: `rotate(${angleValue}deg)`
        };
      }
    });
    watch(() => props.rate, (rate) => {
      let rafId;
      const startTime = Date.now();
      const startRate = props.currentRate;
      const endRate = format(rate);
      const duration = Math.abs((startRate - endRate) * 1e3 / +props.speed);
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const rate2 = progress * (endRate - startRate) + startRate;
        emit("update:currentRate", format(parseFloat(rate2.toFixed(1))));
        if (endRate > startRate ? rate2 < endRate : rate2 > endRate) {
          rafId = raf(animate);
        }
      };
      if (props.speed) {
        if (rafId) {
          cancelRaf(rafId);
        }
        rafId = raf(animate);
      } else {
        emit("update:currentRate", endRate);
      }
    }, {
      immediate: true
    });
    const renderHover = () => {
      const PERIMETER = 3140;
      const {
        strokeWidth,
        currentRate,
        strokeLinecap
      } = props;
      const offset2 = PERIMETER * currentRate / 100;
      const color = isObject(props.color) ? `url(#${id})` : props.color;
      const style = {
        stroke: color,
        strokeWidth: `${+strokeWidth + 1}px`,
        strokeLinecap,
        strokeDasharray: `${offset2}px ${PERIMETER}px`
      };
      return createVNode("path", {
        "d": path.value,
        "style": style,
        "class": bem43("hover"),
        "stroke": color
      }, null);
    };
    const renderLayer = () => {
      const style = {
        fill: props.fill,
        stroke: props.layerColor,
        strokeWidth: `${props.strokeWidth}px`
      };
      return createVNode("path", {
        "class": bem43("layer"),
        "style": style,
        "d": path.value
      }, null);
    };
    const renderGradient = () => {
      const {
        color
      } = props;
      if (!isObject(color)) {
        return;
      }
      const Stops = Object.keys(color).sort((a, b) => parseFloat(a) - parseFloat(b)).map((key, index) => createVNode("stop", {
        "key": index,
        "offset": key,
        "stop-color": color[key]
      }, null));
      return createVNode("defs", null, [createVNode("linearGradient", {
        "id": id,
        "x1": "100%",
        "y1": "0%",
        "x2": "0%",
        "y2": "0%"
      }, [Stops])]);
    };
    const renderText = () => {
      if (slots.default) {
        return slots.default();
      }
      if (props.text) {
        return createVNode("div", {
          "class": bem43("text")
        }, [props.text]);
      }
    };
    return () => createVNode("div", {
      "class": bem43(),
      "style": getSizeStyle(props.size)
    }, [createVNode("svg", {
      "viewBox": `0 0 ${viewBoxSize.value} ${viewBoxSize.value}`,
      "style": svgStyle.value
    }, [renderGradient(), renderLayer(), renderHover()]), renderText()]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/circle/index.mjs
var Circle = withInstall(stdin_default50);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/row/Row.mjs
var [name48, bem44] = createNamespace("row");
var ROW_KEY = Symbol(name48);
var rowProps = {
  tag: makeStringProp("div"),
  wrap: truthProp,
  align: String,
  gutter: makeNumericProp(0),
  justify: String
};
var stdin_default51 = defineComponent({
  name: name48,
  props: rowProps,
  setup(props, {
    slots
  }) {
    const {
      children,
      linkChildren
    } = useChildren(ROW_KEY);
    const groups = computed(() => {
      const groups2 = [[]];
      let totalSpan = 0;
      children.forEach((child, index) => {
        totalSpan += Number(child.span);
        if (totalSpan > 24) {
          groups2.push([index]);
          totalSpan -= 24;
        } else {
          groups2[groups2.length - 1].push(index);
        }
      });
      return groups2;
    });
    const spaces = computed(() => {
      const gutter = Number(props.gutter);
      const spaces2 = [];
      if (!gutter) {
        return spaces2;
      }
      groups.value.forEach((group) => {
        const averagePadding = gutter * (group.length - 1) / group.length;
        group.forEach((item, index) => {
          if (index === 0) {
            spaces2.push({
              right: averagePadding
            });
          } else {
            const left2 = gutter - spaces2[item - 1].right;
            const right2 = averagePadding - left2;
            spaces2.push({
              left: left2,
              right: right2
            });
          }
        });
      });
      return spaces2;
    });
    linkChildren({
      spaces
    });
    return () => {
      const {
        tag,
        wrap,
        align,
        justify
      } = props;
      return createVNode(tag, {
        "class": bem44({
          [`align-${align}`]: align,
          [`justify-${justify}`]: justify,
          nowrap: !wrap
        })
      }, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/col/Col.mjs
var [name49, bem45] = createNamespace("col");
var colProps = {
  tag: makeStringProp("div"),
  span: makeNumericProp(0),
  offset: numericProp
};
var stdin_default52 = defineComponent({
  name: name49,
  props: colProps,
  setup(props, {
    slots
  }) {
    const {
      parent,
      index
    } = useParent(ROW_KEY);
    const style = computed(() => {
      if (!parent) {
        return;
      }
      const {
        spaces
      } = parent;
      if (spaces && spaces.value && spaces.value[index.value]) {
        const {
          left: left2,
          right: right2
        } = spaces.value[index.value];
        return {
          paddingLeft: left2 ? `${left2}px` : null,
          paddingRight: right2 ? `${right2}px` : null
        };
      }
    });
    return () => {
      const {
        tag,
        span,
        offset: offset2
      } = props;
      return createVNode(tag, {
        "style": style.value,
        "class": bem45({
          [span]: span,
          [`offset-${offset2}`]: offset2
        })
      }, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/col/index.mjs
var Col = withInstall(stdin_default52);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/collapse/Collapse.mjs
var [name50, bem46] = createNamespace("collapse");
var COLLAPSE_KEY = Symbol(name50);
var collapseProps = {
  border: truthProp,
  accordion: Boolean,
  modelValue: {
    type: [String, Number, Array],
    default: ""
  }
};
function validateModelValue(modelValue, accordion) {
  if (accordion && Array.isArray(modelValue)) {
    console.error('[Vant] Collapse: "v-model" should not be Array in accordion mode');
    return false;
  }
  if (!accordion && !Array.isArray(modelValue)) {
    console.error('[Vant] Collapse: "v-model" should be Array in non-accordion mode');
    return false;
  }
  return true;
}
var stdin_default53 = defineComponent({
  name: name50,
  props: collapseProps,
  emits: ["change", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      linkChildren,
      children
    } = useChildren(COLLAPSE_KEY);
    const updateName = (name210) => {
      emit("change", name210);
      emit("update:modelValue", name210);
    };
    const toggle = (name210, expanded) => {
      const {
        accordion,
        modelValue
      } = props;
      if (accordion) {
        updateName(name210 === modelValue ? "" : name210);
      } else if (expanded) {
        updateName(modelValue.concat(name210));
      } else {
        updateName(modelValue.filter((activeName) => activeName !== name210));
      }
    };
    const toggleAll = (options = {}) => {
      if (props.accordion) {
        return;
      }
      if (typeof options === "boolean") {
        options = {
          expanded: options
        };
      }
      const {
        expanded,
        skipDisabled
      } = options;
      const expandedChildren = children.filter((item) => {
        if (item.disabled && skipDisabled) {
          return item.expanded.value;
        }
        return expanded != null ? expanded : !item.expanded.value;
      });
      const names = expandedChildren.map((item) => item.itemName.value);
      updateName(names);
    };
    const isExpanded = (name210) => {
      const {
        accordion,
        modelValue
      } = props;
      if (!validateModelValue(modelValue, accordion)) {
        return false;
      }
      return accordion ? modelValue === name210 : modelValue.includes(name210);
    };
    useExpose({
      toggleAll
    });
    linkChildren({
      toggle,
      isExpanded
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": [bem46(), {
          [BORDER_TOP_BOTTOM]: props.border
        }]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/collapse/index.mjs
var Collapse = withInstall(stdin_default53);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/collapse-item/CollapseItem.mjs
var [name51, bem47] = createNamespace("collapse-item");
var CELL_SLOTS = ["icon", "title", "value", "label", "right-icon"];
var collapseItemProps = extend({}, cellSharedProps, {
  name: numericProp,
  isLink: truthProp,
  disabled: Boolean,
  readonly: Boolean,
  lazyRender: truthProp
});
var stdin_default54 = defineComponent({
  name: name51,
  props: collapseItemProps,
  setup(props, {
    slots
  }) {
    const wrapperRef = ref();
    const contentRef = ref();
    const {
      parent,
      index
    } = useParent(COLLAPSE_KEY);
    if (!parent) {
      if (true) {
        console.error("[Vant] <CollapseItem> must be a child component of <Collapse>.");
      }
      return;
    }
    const name210 = computed(() => {
      var _a;
      return (_a = props.name) != null ? _a : index.value;
    });
    const expanded = computed(() => parent.isExpanded(name210.value));
    const show = ref(expanded.value);
    const lazyRender = useLazyRender(() => show.value || !props.lazyRender);
    const onTransitionEnd = () => {
      if (!expanded.value) {
        show.value = false;
      } else if (wrapperRef.value) {
        wrapperRef.value.style.height = "";
      }
    };
    watch(expanded, (value, oldValue) => {
      if (oldValue === null) {
        return;
      }
      if (value) {
        show.value = true;
      }
      const tick = value ? nextTick : raf;
      tick(() => {
        if (!contentRef.value || !wrapperRef.value) {
          return;
        }
        const {
          offsetHeight
        } = contentRef.value;
        if (offsetHeight) {
          const contentHeight = `${offsetHeight}px`;
          wrapperRef.value.style.height = value ? "0" : contentHeight;
          doubleRaf(() => {
            if (wrapperRef.value) {
              wrapperRef.value.style.height = value ? contentHeight : "0";
            }
          });
        } else {
          onTransitionEnd();
        }
      });
    });
    const toggle = (newValue = !expanded.value) => {
      parent.toggle(name210.value, newValue);
    };
    const onClickTitle = () => {
      if (!props.disabled && !props.readonly) {
        toggle();
      }
    };
    const renderTitle = () => {
      const {
        border,
        disabled,
        readonly
      } = props;
      const attrs = pick(props, Object.keys(cellSharedProps));
      if (readonly) {
        attrs.isLink = false;
      }
      if (disabled || readonly) {
        attrs.clickable = false;
      }
      return createVNode(Cell, mergeProps({
        "role": "button",
        "class": bem47("title", {
          disabled,
          expanded: expanded.value,
          borderless: !border
        }),
        "aria-expanded": String(expanded.value),
        "onClick": onClickTitle
      }, attrs), pick(slots, CELL_SLOTS));
    };
    const renderContent = lazyRender(() => {
      var _a;
      return withDirectives(createVNode("div", {
        "ref": wrapperRef,
        "class": bem47("wrapper"),
        "onTransitionend": onTransitionEnd
      }, [createVNode("div", {
        "ref": contentRef,
        "class": bem47("content")
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]), [[vShow, show.value]]);
    });
    useExpose({
      toggle,
      expanded,
      itemName: name210
    });
    return () => createVNode("div", {
      "class": [bem47({
        border: index.value && props.border
      })]
    }, [renderTitle(), renderContent()]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/collapse-item/index.mjs
var CollapseItem = withInstall(stdin_default54);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/config-provider/index.mjs
var ConfigProvider = withInstall(stdin_default5);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/contact-card/ContactCard.mjs
var [name52, bem48, t7] = createNamespace("contact-card");
var contactCardProps = {
  tel: String,
  name: String,
  type: makeStringProp("add"),
  addText: String,
  editable: truthProp
};
var stdin_default55 = defineComponent({
  name: name52,
  props: contactCardProps,
  emits: ["click"],
  setup(props, {
    emit
  }) {
    const onClick = (event) => {
      if (props.editable) {
        emit("click", event);
      }
    };
    const renderContent = () => {
      if (props.type === "add") {
        return props.addText || t7("addContact");
      }
      return [createVNode("div", null, [`${t7("name")}：${props.name}`]), createVNode("div", null, [`${t7("tel")}：${props.tel}`])];
    };
    return () => createVNode(Cell, {
      "center": true,
      "icon": props.type === "edit" ? "contact" : "add-square",
      "class": bem48([props.type]),
      "border": false,
      "isLink": props.editable,
      "titleClass": bem48("title"),
      "onClick": onClick
    }, {
      title: renderContent
    });
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/contact-card/index.mjs
var ContactCard = withInstall(stdin_default55);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/contact-edit/ContactEdit.mjs
var [name53, bem49, t8] = createNamespace("contact-edit");
var DEFAULT_CONTACT = {
  tel: "",
  name: ""
};
var contactEditProps = {
  isEdit: Boolean,
  isSaving: Boolean,
  isDeleting: Boolean,
  showSetDefault: Boolean,
  setDefaultLabel: String,
  contactInfo: {
    type: Object,
    default: () => extend({}, DEFAULT_CONTACT)
  },
  telValidator: {
    type: Function,
    default: isMobile
  }
};
var stdin_default56 = defineComponent({
  name: name53,
  props: contactEditProps,
  emits: ["save", "delete", "changeDefault"],
  setup(props, {
    emit
  }) {
    const contact = reactive(extend({}, DEFAULT_CONTACT, props.contactInfo));
    const onSave = () => {
      if (!props.isSaving) {
        emit("save", contact);
      }
    };
    const onDelete = () => emit("delete", contact);
    const renderButtons = () => createVNode("div", {
      "class": bem49("buttons")
    }, [createVNode(Button, {
      "block": true,
      "round": true,
      "type": "primary",
      "text": t8("save"),
      "class": bem49("button"),
      "loading": props.isSaving,
      "nativeType": "submit"
    }, null), props.isEdit && createVNode(Button, {
      "block": true,
      "round": true,
      "text": t8("delete"),
      "class": bem49("button"),
      "loading": props.isDeleting,
      "onClick": onDelete
    }, null)]);
    const renderSwitch = () => createVNode(Switch, {
      "modelValue": contact.isDefault,
      "onUpdate:modelValue": ($event) => contact.isDefault = $event,
      "onChange": (checked) => emit("changeDefault", checked)
    }, null);
    const renderSetDefault = () => {
      if (props.showSetDefault) {
        return createVNode(Cell, {
          "title": props.setDefaultLabel,
          "class": bem49("switch-cell"),
          "border": false
        }, {
          "right-icon": renderSwitch
        });
      }
    };
    watch(() => props.contactInfo, (value) => extend(contact, DEFAULT_CONTACT, value));
    return () => createVNode(Form, {
      "class": bem49(),
      "onSubmit": onSave
    }, {
      default: () => [createVNode("div", {
        "class": bem49("fields")
      }, [createVNode(Field, {
        "modelValue": contact.name,
        "onUpdate:modelValue": ($event) => contact.name = $event,
        "clearable": true,
        "label": t8("name"),
        "rules": [{
          required: true,
          message: t8("nameEmpty")
        }],
        "maxlength": "30",
        "placeholder": t8("name")
      }, null), createVNode(Field, {
        "modelValue": contact.tel,
        "onUpdate:modelValue": ($event) => contact.tel = $event,
        "clearable": true,
        "type": "tel",
        "label": t8("tel"),
        "rules": [{
          validator: props.telValidator,
          message: t8("telInvalid")
        }],
        "placeholder": t8("tel")
      }, null)]), renderSetDefault(), renderButtons()]
    });
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/contact-edit/index.mjs
var ContactEdit = withInstall(stdin_default56);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/contact-list/ContactList.mjs
var [name54, bem50, t9] = createNamespace("contact-list");
var contactListProps = {
  list: Array,
  addText: String,
  modelValue: unknownProp,
  defaultTagText: String
};
var stdin_default57 = defineComponent({
  name: name54,
  props: contactListProps,
  emits: ["add", "edit", "select", "update:modelValue"],
  setup(props, {
    emit
  }) {
    const renderItem = (item, index) => {
      const onClick = () => {
        emit("update:modelValue", item.id);
        emit("select", item, index);
      };
      const renderRightIcon = () => createVNode(Radio, {
        "class": bem50("radio"),
        "name": item.id,
        "iconSize": 16
      }, null);
      const renderEditIcon = () => createVNode(Icon, {
        "name": "edit",
        "class": bem50("edit"),
        "onClick": (event) => {
          event.stopPropagation();
          emit("edit", item, index);
        }
      }, null);
      const renderContent = () => {
        const nodes = [`${item.name}，${item.tel}`];
        if (item.isDefault && props.defaultTagText) {
          nodes.push(createVNode(Tag, {
            "type": "primary",
            "round": true,
            "class": bem50("item-tag")
          }, {
            default: () => [props.defaultTagText]
          }));
        }
        return nodes;
      };
      return createVNode(Cell, {
        "key": item.id,
        "isLink": true,
        "center": true,
        "class": bem50("item"),
        "titleClass": bem50("item-title"),
        "onClick": onClick
      }, {
        icon: renderEditIcon,
        title: renderContent,
        "right-icon": renderRightIcon
      });
    };
    return () => createVNode("div", {
      "class": bem50()
    }, [createVNode(RadioGroup, {
      "modelValue": props.modelValue,
      "class": bem50("group")
    }, {
      default: () => [props.list && props.list.map(renderItem)]
    }), createVNode("div", {
      "class": [bem50("bottom"), "van-safe-area-bottom"]
    }, [createVNode(Button, {
      "round": true,
      "block": true,
      "type": "primary",
      "class": bem50("add"),
      "text": props.addText || t9("addContact"),
      "onClick": () => emit("add")
    }, null)])]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/contact-list/index.mjs
var ContactList = withInstall(stdin_default57);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/count-down/utils.mjs
function parseFormat(format3, currentTime) {
  const { days } = currentTime;
  let { hours, minutes, seconds, milliseconds } = currentTime;
  if (format3.includes("DD")) {
    format3 = format3.replace("DD", padZero(days));
  } else {
    hours += days * 24;
  }
  if (format3.includes("HH")) {
    format3 = format3.replace("HH", padZero(hours));
  } else {
    minutes += hours * 60;
  }
  if (format3.includes("mm")) {
    format3 = format3.replace("mm", padZero(minutes));
  } else {
    seconds += minutes * 60;
  }
  if (format3.includes("ss")) {
    format3 = format3.replace("ss", padZero(seconds));
  } else {
    milliseconds += seconds * 1e3;
  }
  if (format3.includes("S")) {
    const ms = padZero(milliseconds, 3);
    if (format3.includes("SSS")) {
      format3 = format3.replace("SSS", ms);
    } else if (format3.includes("SS")) {
      format3 = format3.replace("SS", ms.slice(0, 2));
    } else {
      format3 = format3.replace("S", ms.charAt(0));
    }
  }
  return format3;
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/count-down/CountDown.mjs
var [name55, bem51] = createNamespace("count-down");
var countDownProps = {
  time: makeNumericProp(0),
  format: makeStringProp("HH:mm:ss"),
  autoStart: truthProp,
  millisecond: Boolean
};
var stdin_default58 = defineComponent({
  name: name55,
  props: countDownProps,
  emits: ["change", "finish"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      start: start2,
      pause,
      reset,
      current: current2
    } = useCountDown({
      time: +props.time,
      millisecond: props.millisecond,
      onChange: (current22) => emit("change", current22),
      onFinish: () => emit("finish")
    });
    const timeText = computed(() => parseFormat(props.format, current2.value));
    const resetTime = () => {
      reset(+props.time);
      if (props.autoStart) {
        start2();
      }
    };
    watch(() => props.time, resetTime, {
      immediate: true
    });
    useExpose({
      start: start2,
      pause,
      reset: resetTime
    });
    return () => createVNode("div", {
      "role": "timer",
      "class": bem51()
    }, [slots.default ? slots.default(current2.value) : timeText.value]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/count-down/index.mjs
var CountDown = withInstall(stdin_default58);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/coupon/utils.mjs
function getDate(timeStamp) {
  const date = new Date(timeStamp * 1e3);
  return `${date.getFullYear()}.${padZero(date.getMonth() + 1)}.${padZero(
    date.getDate()
  )}`;
}
var formatDiscount = (discount) => (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
var formatAmount = (amount) => (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/coupon/Coupon.mjs
var [name56, bem52, t10] = createNamespace("coupon");
var stdin_default59 = defineComponent({
  name: name56,
  props: {
    chosen: Boolean,
    coupon: makeRequiredProp(Object),
    disabled: Boolean,
    currency: makeStringProp("¥")
  },
  setup(props) {
    const validPeriod = computed(() => {
      const {
        startAt,
        endAt
      } = props.coupon;
      return `${getDate(startAt)} - ${getDate(endAt)}`;
    });
    const faceAmount = computed(() => {
      const {
        coupon,
        currency
      } = props;
      if (coupon.valueDesc) {
        return [coupon.valueDesc, createVNode("span", null, [coupon.unitDesc || ""])];
      }
      if (coupon.denominations) {
        const denominations = formatAmount(coupon.denominations);
        return [createVNode("span", null, [currency]), ` ${denominations}`];
      }
      if (coupon.discount) {
        return t10("discount", formatDiscount(coupon.discount));
      }
      return "";
    });
    const conditionMessage = computed(() => {
      const condition = formatAmount(props.coupon.originCondition || 0);
      return condition === "0" ? t10("unlimited") : t10("condition", condition);
    });
    return () => {
      const {
        chosen,
        coupon,
        disabled
      } = props;
      const description = disabled && coupon.reason || coupon.description;
      return createVNode("div", {
        "class": bem52({
          disabled
        })
      }, [createVNode("div", {
        "class": bem52("content")
      }, [createVNode("div", {
        "class": bem52("head")
      }, [createVNode("h2", {
        "class": bem52("amount")
      }, [faceAmount.value]), createVNode("p", {
        "class": bem52("condition")
      }, [coupon.condition || conditionMessage.value])]), createVNode("div", {
        "class": bem52("body")
      }, [createVNode("p", {
        "class": bem52("name")
      }, [coupon.name]), createVNode("p", {
        "class": bem52("valid")
      }, [validPeriod.value]), !disabled && createVNode(Checkbox, {
        "class": bem52("corner"),
        "modelValue": chosen
      }, null)])]), description && createVNode("p", {
        "class": bem52("description")
      }, [description])]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/coupon/index.mjs
var Coupon = withInstall(stdin_default59);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/coupon-cell/CouponCell.mjs
var [name57, bem53, t11] = createNamespace("coupon-cell");
var couponCellProps = {
  title: String,
  border: truthProp,
  editable: truthProp,
  coupons: makeArrayProp(),
  currency: makeStringProp("¥"),
  chosenCoupon: makeNumericProp(-1)
};
function formatValue({
  coupons,
  chosenCoupon,
  currency
}) {
  const coupon = coupons[+chosenCoupon];
  if (coupon) {
    let value = 0;
    if (isDef(coupon.value)) {
      ({
        value
      } = coupon);
    } else if (isDef(coupon.denominations)) {
      value = coupon.denominations;
    }
    return `-${currency} ${(value / 100).toFixed(2)}`;
  }
  return coupons.length === 0 ? t11("noCoupon") : t11("count", coupons.length);
}
var stdin_default60 = defineComponent({
  name: name57,
  props: couponCellProps,
  setup(props) {
    return () => {
      const selected = props.coupons[+props.chosenCoupon];
      return createVNode(Cell, {
        "class": bem53(),
        "value": formatValue(props),
        "title": props.title || t11("title"),
        "border": props.border,
        "isLink": props.editable,
        "valueClass": bem53("value", {
          selected
        })
      }, null);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/coupon-cell/index.mjs
var CouponCell = withInstall(stdin_default60);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/empty/Empty.mjs
var [name58, bem54] = createNamespace("empty");
var emptyProps = {
  image: makeStringProp("default"),
  imageSize: [Number, String, Array],
  description: String
};
var stdin_default61 = defineComponent({
  name: name58,
  props: emptyProps,
  setup(props, {
    slots
  }) {
    const renderDescription = () => {
      const description = slots.description ? slots.description() : props.description;
      if (description) {
        return createVNode("p", {
          "class": bem54("description")
        }, [description]);
      }
    };
    const renderBottom = () => {
      if (slots.default) {
        return createVNode("div", {
          "class": bem54("bottom")
        }, [slots.default()]);
      }
    };
    const baseId = useId();
    const getId = (num) => `${baseId}-${num}`;
    const getUrlById = (num) => `url(#${getId(num)})`;
    const renderStop = (color, offset2, opacity) => createVNode("stop", {
      "stop-color": color,
      "offset": `${offset2}%`,
      "stop-opacity": opacity
    }, null);
    const renderStops = (fromColor, toColor) => [renderStop(fromColor, 0), renderStop(toColor, 100)];
    const renderShadow = (id) => [createVNode("defs", null, [createVNode("radialGradient", {
      "id": getId(id),
      "cx": "50%",
      "cy": "54%",
      "fx": "50%",
      "fy": "54%",
      "r": "297%",
      "gradientTransform": "matrix(-.16 0 0 -.33 .58 .72)"
    }, [renderStop("#EBEDF0", 0), renderStop("#F2F3F5", 100, 0.3)])]), createVNode("ellipse", {
      "fill": getUrlById(id),
      "opacity": ".8",
      "cx": "80",
      "cy": "140",
      "rx": "46",
      "ry": "8"
    }, null)];
    const renderBuilding = () => [createVNode("defs", null, [createVNode("linearGradient", {
      "id": getId("a"),
      "x1": "64%",
      "y1": "100%",
      "x2": "64%"
    }, [renderStop("#FFF", 0, 0.5), renderStop("#F2F3F5", 100)])]), createVNode("g", {
      "opacity": ".8"
    }, [createVNode("path", {
      "d": "M36 131V53H16v20H2v58h34z",
      "fill": getUrlById("a")
    }, null), createVNode("path", {
      "d": "M123 15h22v14h9v77h-31V15z",
      "fill": getUrlById("a")
    }, null)])];
    const renderCloud = () => [createVNode("defs", null, [createVNode("linearGradient", {
      "id": getId("b"),
      "x1": "64%",
      "y1": "97%",
      "x2": "64%",
      "y2": "0%"
    }, [renderStop("#F2F3F5", 0, 0.3), renderStop("#F2F3F5", 100)])]), createVNode("g", {
      "opacity": ".8"
    }, [createVNode("path", {
      "d": "M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",
      "fill": getUrlById("b")
    }, null), createVNode("path", {
      "d": "M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",
      "fill": getUrlById("b")
    }, null)])];
    const renderNetwork = () => createVNode("svg", {
      "viewBox": "0 0 160 160"
    }, [createVNode("defs", null, [createVNode("linearGradient", {
      "id": getId(1),
      "x1": "64%",
      "y1": "100%",
      "x2": "64%"
    }, [renderStop("#FFF", 0, 0.5), renderStop("#F2F3F5", 100)]), createVNode("linearGradient", {
      "id": getId(2),
      "x1": "50%",
      "x2": "50%",
      "y2": "84%"
    }, [renderStop("#EBEDF0", 0), renderStop("#DCDEE0", 100, 0)]), createVNode("linearGradient", {
      "id": getId(3),
      "x1": "100%",
      "x2": "100%",
      "y2": "100%"
    }, [renderStops("#EAEDF0", "#DCDEE0")]), createVNode("radialGradient", {
      "id": getId(4),
      "cx": "50%",
      "cy": "0%",
      "fx": "50%",
      "fy": "0%",
      "r": "100%",
      "gradientTransform": "matrix(0 1 -.54 0 .5 -.5)"
    }, [renderStop("#EBEDF0", 0), renderStop("#FFF", 100, 0)])]), createVNode("g", {
      "fill": "none"
    }, [renderBuilding(), createVNode("path", {
      "fill": getUrlById(4),
      "d": "M0 139h160v21H0z"
    }, null), createVNode("path", {
      "d": "M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",
      "fill": getUrlById(2)
    }, null), createVNode("g", {
      "opacity": ".6",
      "stroke-linecap": "round",
      "stroke-width": "7"
    }, [createVNode("path", {
      "d": "M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",
      "stroke": getUrlById(3)
    }, null), createVNode("path", {
      "d": "M53 36a34 34 0 0 0 0 48",
      "stroke": getUrlById(3)
    }, null), createVNode("path", {
      "d": "M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",
      "stroke": getUrlById(3)
    }, null), createVNode("path", {
      "d": "M106 84a34 34 0 0 0 0-48",
      "stroke": getUrlById(3)
    }, null)]), createVNode("g", {
      "transform": "translate(31 105)"
    }, [createVNode("rect", {
      "fill": "#EBEDF0",
      "width": "98",
      "height": "34",
      "rx": "2"
    }, null), createVNode("rect", {
      "fill": "#FFF",
      "x": "9",
      "y": "8",
      "width": "80",
      "height": "18",
      "rx": "1.1"
    }, null), createVNode("rect", {
      "fill": "#EBEDF0",
      "x": "15",
      "y": "12",
      "width": "18",
      "height": "6",
      "rx": "1.1"
    }, null)])])]);
    const renderMaterial = () => createVNode("svg", {
      "viewBox": "0 0 160 160"
    }, [createVNode("defs", null, [createVNode("linearGradient", {
      "x1": "50%",
      "x2": "50%",
      "y2": "100%",
      "id": getId(5)
    }, [renderStops("#F2F3F5", "#DCDEE0")]), createVNode("linearGradient", {
      "x1": "95%",
      "y1": "48%",
      "x2": "5.5%",
      "y2": "51%",
      "id": getId(6)
    }, [renderStops("#EAEDF1", "#DCDEE0")]), createVNode("linearGradient", {
      "y1": "45%",
      "x2": "100%",
      "y2": "54%",
      "id": getId(7)
    }, [renderStops("#EAEDF1", "#DCDEE0")])]), renderBuilding(), renderCloud(), createVNode("g", {
      "transform": "translate(36 50)",
      "fill": "none"
    }, [createVNode("g", {
      "transform": "translate(8)"
    }, [createVNode("rect", {
      "fill": "#EBEDF0",
      "opacity": ".6",
      "x": "38",
      "y": "13",
      "width": "36",
      "height": "53",
      "rx": "2"
    }, null), createVNode("rect", {
      "fill": getUrlById(5),
      "width": "64",
      "height": "66",
      "rx": "2"
    }, null), createVNode("rect", {
      "fill": "#FFF",
      "x": "6",
      "y": "6",
      "width": "52",
      "height": "55",
      "rx": "1"
    }, null), createVNode("g", {
      "transform": "translate(15 17)",
      "fill": getUrlById(6)
    }, [createVNode("rect", {
      "width": "34",
      "height": "6",
      "rx": "1"
    }, null), createVNode("path", {
      "d": "M0 14h34v6H0z"
    }, null), createVNode("rect", {
      "y": "28",
      "width": "34",
      "height": "6",
      "rx": "1"
    }, null)])]), createVNode("rect", {
      "fill": getUrlById(7),
      "y": "61",
      "width": "88",
      "height": "28",
      "rx": "1"
    }, null), createVNode("rect", {
      "fill": "#F7F8FA",
      "x": "29",
      "y": "72",
      "width": "30",
      "height": "6",
      "rx": "1"
    }, null)])]);
    const renderError = () => createVNode("svg", {
      "viewBox": "0 0 160 160"
    }, [createVNode("defs", null, [createVNode("linearGradient", {
      "x1": "50%",
      "x2": "50%",
      "y2": "100%",
      "id": getId(8)
    }, [renderStops("#EAEDF1", "#DCDEE0")])]), renderBuilding(), renderCloud(), renderShadow("c"), createVNode("path", {
      "d": "m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",
      "fill": getUrlById(8)
    }, null)]);
    const renderSearch = () => createVNode("svg", {
      "viewBox": "0 0 160 160"
    }, [createVNode("defs", null, [createVNode("linearGradient", {
      "x1": "50%",
      "y1": "100%",
      "x2": "50%",
      "id": getId(9)
    }, [renderStops("#EEE", "#D8D8D8")]), createVNode("linearGradient", {
      "x1": "100%",
      "y1": "50%",
      "y2": "50%",
      "id": getId(10)
    }, [renderStops("#F2F3F5", "#DCDEE0")]), createVNode("linearGradient", {
      "x1": "50%",
      "x2": "50%",
      "y2": "100%",
      "id": getId(11)
    }, [renderStops("#F2F3F5", "#DCDEE0")]), createVNode("linearGradient", {
      "x1": "50%",
      "x2": "50%",
      "y2": "100%",
      "id": getId(12)
    }, [renderStops("#FFF", "#F7F8FA")])]), renderBuilding(), renderCloud(), renderShadow("d"), createVNode("g", {
      "transform": "rotate(-45 113 -4)",
      "fill": "none"
    }, [createVNode("rect", {
      "fill": getUrlById(9),
      "x": "24",
      "y": "52.8",
      "width": "5.8",
      "height": "19",
      "rx": "1"
    }, null), createVNode("rect", {
      "fill": getUrlById(10),
      "x": "22.1",
      "y": "67.3",
      "width": "9.9",
      "height": "28",
      "rx": "1"
    }, null), createVNode("circle", {
      "stroke": getUrlById(11),
      "stroke-width": "8",
      "cx": "27",
      "cy": "27",
      "r": "27"
    }, null), createVNode("circle", {
      "fill": getUrlById(12),
      "cx": "27",
      "cy": "27",
      "r": "16"
    }, null), createVNode("path", {
      "d": "M37 7c-8 0-15 5-16 12",
      "stroke": getUrlById(11),
      "stroke-width": "3",
      "opacity": ".5",
      "stroke-linecap": "round",
      "transform": "rotate(45 29 13)"
    }, null)])]);
    const renderImage = () => {
      var _a;
      if (slots.image) {
        return slots.image();
      }
      const PRESET_IMAGES = {
        error: renderError,
        search: renderSearch,
        network: renderNetwork,
        default: renderMaterial
      };
      return ((_a = PRESET_IMAGES[props.image]) == null ? void 0 : _a.call(PRESET_IMAGES)) || createVNode("img", {
        "src": props.image
      }, null);
    };
    return () => createVNode("div", {
      "class": bem54()
    }, [createVNode("div", {
      "class": bem54("image"),
      "style": getSizeStyle(props.imageSize)
    }, [renderImage()]), renderDescription(), renderBottom()]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/empty/index.mjs
var Empty = withInstall(stdin_default61);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/coupon-list/CouponList.mjs
var [name59, bem55, t12] = createNamespace("coupon-list");
var couponListProps = {
  code: makeStringProp(""),
  coupons: makeArrayProp(),
  currency: makeStringProp("¥"),
  showCount: truthProp,
  emptyImage: String,
  chosenCoupon: makeNumberProp(-1),
  enabledTitle: String,
  disabledTitle: String,
  disabledCoupons: makeArrayProp(),
  showExchangeBar: truthProp,
  showCloseButton: truthProp,
  closeButtonText: String,
  inputPlaceholder: String,
  exchangeMinLength: makeNumberProp(1),
  exchangeButtonText: String,
  displayedCouponIndex: makeNumberProp(-1),
  exchangeButtonLoading: Boolean,
  exchangeButtonDisabled: Boolean
};
var stdin_default62 = defineComponent({
  name: name59,
  props: couponListProps,
  emits: ["change", "exchange", "update:code"],
  setup(props, {
    emit,
    slots
  }) {
    const [couponRefs, setCouponRefs] = useRefs();
    const root = ref();
    const barRef = ref();
    const activeTab = ref(0);
    const listHeight = ref(0);
    const currentCode = ref(props.code);
    const buttonDisabled = computed(() => !props.exchangeButtonLoading && (props.exchangeButtonDisabled || !currentCode.value || currentCode.value.length < props.exchangeMinLength));
    const updateListHeight = () => {
      const TABS_HEIGHT = 44;
      const rootHeight = useRect(root).height;
      const headerHeight = useRect(barRef).height + TABS_HEIGHT;
      listHeight.value = (rootHeight > headerHeight ? rootHeight : windowHeight.value) - headerHeight;
    };
    const onExchange = () => {
      emit("exchange", currentCode.value);
      if (!props.code) {
        currentCode.value = "";
      }
    };
    const scrollToCoupon = (index) => {
      nextTick(() => {
        var _a;
        return (_a = couponRefs.value[index]) == null ? void 0 : _a.scrollIntoView();
      });
    };
    const renderEmpty = () => createVNode(Empty, {
      "image": props.emptyImage
    }, {
      default: () => [createVNode("p", {
        "class": bem55("empty-tip")
      }, [t12("noCoupon")])]
    });
    const renderExchangeBar = () => {
      if (props.showExchangeBar) {
        return createVNode("div", {
          "ref": barRef,
          "class": bem55("exchange-bar")
        }, [createVNode(Field, {
          "modelValue": currentCode.value,
          "onUpdate:modelValue": ($event) => currentCode.value = $event,
          "clearable": true,
          "border": false,
          "class": bem55("field"),
          "placeholder": props.inputPlaceholder || t12("placeholder"),
          "maxlength": "20"
        }, null), createVNode(Button, {
          "plain": true,
          "type": "primary",
          "class": bem55("exchange"),
          "text": props.exchangeButtonText || t12("exchange"),
          "loading": props.exchangeButtonLoading,
          "disabled": buttonDisabled.value,
          "onClick": onExchange
        }, null)]);
      }
    };
    const renderCouponTab = () => {
      const {
        coupons
      } = props;
      const count = props.showCount ? ` (${coupons.length})` : "";
      const title = (props.enabledTitle || t12("enable")) + count;
      return createVNode(Tab, {
        "title": title
      }, {
        default: () => {
          var _a;
          return [createVNode("div", {
            "class": bem55("list", {
              "with-bottom": props.showCloseButton
            }),
            "style": {
              height: `${listHeight.value}px`
            }
          }, [coupons.map((coupon, index) => createVNode(Coupon, {
            "key": coupon.id,
            "ref": setCouponRefs(index),
            "coupon": coupon,
            "chosen": index === props.chosenCoupon,
            "currency": props.currency,
            "onClick": () => emit("change", index)
          }, null)), !coupons.length && renderEmpty(), (_a = slots["list-footer"]) == null ? void 0 : _a.call(slots)])];
        }
      });
    };
    const renderDisabledTab = () => {
      const {
        disabledCoupons
      } = props;
      const count = props.showCount ? ` (${disabledCoupons.length})` : "";
      const title = (props.disabledTitle || t12("disabled")) + count;
      return createVNode(Tab, {
        "title": title
      }, {
        default: () => {
          var _a;
          return [createVNode("div", {
            "class": bem55("list", {
              "with-bottom": props.showCloseButton
            }),
            "style": {
              height: `${listHeight.value}px`
            }
          }, [disabledCoupons.map((coupon) => createVNode(Coupon, {
            "disabled": true,
            "key": coupon.id,
            "coupon": coupon,
            "currency": props.currency
          }, null)), !disabledCoupons.length && renderEmpty(), (_a = slots["disabled-list-footer"]) == null ? void 0 : _a.call(slots)])];
        }
      });
    };
    watch(() => props.code, (value) => {
      currentCode.value = value;
    });
    watch(windowHeight, updateListHeight);
    watch(currentCode, (value) => emit("update:code", value));
    watch(() => props.displayedCouponIndex, scrollToCoupon);
    onMounted(() => {
      updateListHeight();
      scrollToCoupon(props.displayedCouponIndex);
    });
    return () => createVNode("div", {
      "ref": root,
      "class": bem55()
    }, [renderExchangeBar(), createVNode(Tabs, {
      "active": activeTab.value,
      "onUpdate:active": ($event) => activeTab.value = $event,
      "class": bem55("tab")
    }, {
      default: () => [renderCouponTab(), renderDisabledTab()]
    }), createVNode("div", {
      "class": bem55("bottom")
    }, [withDirectives(createVNode(Button, {
      "round": true,
      "block": true,
      "type": "primary",
      "class": bem55("close"),
      "text": props.closeButtonText || t12("close"),
      "onClick": () => emit("change", -1)
    }, null), [[vShow, props.showCloseButton]])])]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/coupon-list/index.mjs
var CouponList = withInstall(stdin_default62);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/date-picker/DatePicker.mjs
var currentYear = new Date().getFullYear();
var [name60] = createNamespace("date-picker");
var datePickerProps = extend({}, sharedProps, {
  columnsType: {
    type: Array,
    default: () => ["year", "month", "day"]
  },
  minDate: {
    type: Date,
    default: () => new Date(currentYear - 10, 0, 1),
    validator: isDate
  },
  maxDate: {
    type: Date,
    default: () => new Date(currentYear + 10, 11, 31),
    validator: isDate
  }
});
var stdin_default63 = defineComponent({
  name: name60,
  props: datePickerProps,
  emits: ["confirm", "cancel", "change", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const currentValues = ref(props.modelValue);
    const genYearOptions = () => {
      const minYear = props.minDate.getFullYear();
      const maxYear = props.maxDate.getFullYear();
      return genOptions(minYear, maxYear, "year", props.formatter, props.filter);
    };
    const isMinYear = (year) => year === props.minDate.getFullYear();
    const isMaxYear = (year) => year === props.maxDate.getFullYear();
    const isMinMonth = (month) => month === props.minDate.getMonth() + 1;
    const isMaxMonth = (month) => month === props.maxDate.getMonth() + 1;
    const getValue = (type) => {
      const {
        minDate,
        columnsType
      } = props;
      const index = columnsType.indexOf(type);
      const value = currentValues.value[index];
      if (value) {
        return +value;
      }
      switch (type) {
        case "year":
          return minDate.getFullYear();
        case "month":
          return minDate.getMonth() + 1;
        case "day":
          return minDate.getDate();
      }
    };
    const genMonthOptions = () => {
      const year = getValue("year");
      const minMonth = isMinYear(year) ? props.minDate.getMonth() + 1 : 1;
      const maxMonth = isMaxYear(year) ? props.maxDate.getMonth() + 1 : 12;
      return genOptions(minMonth, maxMonth, "month", props.formatter, props.filter);
    };
    const genDayOptions = () => {
      const year = getValue("year");
      const month = getValue("month");
      const minDate = isMinYear(year) && isMinMonth(month) ? props.minDate.getDate() : 1;
      const maxDate = isMaxYear(year) && isMaxMonth(month) ? props.maxDate.getDate() : getMonthEndDay(year, month);
      return genOptions(minDate, maxDate, "day", props.formatter, props.filter);
    };
    const columns = computed(() => props.columnsType.map((type) => {
      switch (type) {
        case "year":
          return genYearOptions();
        case "month":
          return genMonthOptions();
        case "day":
          return genDayOptions();
        default:
          if (true) {
            throw new Error(`[Vant] DatePicker: unsupported columns type: ${type}`);
          }
          return [];
      }
    }));
    watch(currentValues, (newValues) => {
      if (!isSameValue(newValues, props.modelValue)) {
        emit("update:modelValue", newValues);
      }
    });
    watch(() => props.modelValue, (newValues) => {
      newValues = formatValueRange(newValues, columns.value);
      if (!isSameValue(newValues, currentValues.value)) {
        currentValues.value = newValues;
      }
    }, {
      immediate: true
    });
    const onChange = (...args) => emit("change", ...args);
    const onCancel = (...args) => emit("cancel", ...args);
    const onConfirm = (...args) => emit("confirm", ...args);
    return () => createVNode(Picker, mergeProps({
      "modelValue": currentValues.value,
      "onUpdate:modelValue": ($event) => currentValues.value = $event,
      "columns": columns.value,
      "onChange": onChange,
      "onCancel": onCancel,
      "onConfirm": onConfirm
    }, pick(props, pickerInheritKeys)), slots);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/date-picker/index.mjs
var DatePicker = withInstall(stdin_default63);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/dialog/Dialog.mjs
var [name61, bem56, t13] = createNamespace("dialog");
var dialogProps = extend({}, popupSharedProps, {
  title: String,
  theme: String,
  width: numericProp,
  message: [String, Function],
  callback: Function,
  allowHtml: Boolean,
  className: unknownProp,
  transition: makeStringProp("van-dialog-bounce"),
  messageAlign: String,
  closeOnPopstate: truthProp,
  showCancelButton: Boolean,
  cancelButtonText: String,
  cancelButtonColor: String,
  cancelButtonDisabled: Boolean,
  confirmButtonText: String,
  confirmButtonColor: String,
  confirmButtonDisabled: Boolean,
  showConfirmButton: truthProp,
  closeOnClickOverlay: Boolean
});
var popupInheritKeys2 = [...popupSharedPropKeys, "transition", "closeOnPopstate"];
var stdin_default64 = defineComponent({
  name: name61,
  props: dialogProps,
  emits: ["confirm", "cancel", "keydown", "update:show"],
  setup(props, {
    emit,
    slots
  }) {
    const root = ref();
    const loading = reactive({
      confirm: false,
      cancel: false
    });
    const updateShow = (value) => emit("update:show", value);
    const close = (action) => {
      var _a;
      updateShow(false);
      (_a = props.callback) == null ? void 0 : _a.call(props, action);
    };
    const getActionHandler = (action) => () => {
      if (!props.show) {
        return;
      }
      emit(action);
      if (props.beforeClose) {
        loading[action] = true;
        callInterceptor(props.beforeClose, {
          args: [action],
          done() {
            close(action);
            loading[action] = false;
          },
          canceled() {
            loading[action] = false;
          }
        });
      } else {
        close(action);
      }
    };
    const onCancel = getActionHandler("cancel");
    const onConfirm = getActionHandler("confirm");
    const onKeydown = withKeys((event) => {
      var _a, _b;
      if (event.target !== ((_b = (_a = root.value) == null ? void 0 : _a.popupRef) == null ? void 0 : _b.value)) {
        return;
      }
      const onEventType = {
        Enter: props.showConfirmButton ? onConfirm : noop,
        Escape: props.showCancelButton ? onCancel : noop
      };
      onEventType[event.key]();
      emit("keydown", event);
    }, ["enter", "esc"]);
    const renderTitle = () => {
      const title = slots.title ? slots.title() : props.title;
      if (title) {
        return createVNode("div", {
          "class": bem56("header", {
            isolated: !props.message && !slots.default
          })
        }, [title]);
      }
    };
    const renderMessage = (hasTitle) => {
      const {
        message,
        allowHtml,
        messageAlign
      } = props;
      const classNames = bem56("message", {
        "has-title": hasTitle,
        [messageAlign]: messageAlign
      });
      const content = isFunction(message) ? message() : message;
      if (allowHtml && typeof content === "string") {
        return createVNode("div", {
          "class": classNames,
          "innerHTML": content
        }, null);
      }
      return createVNode("div", {
        "class": classNames
      }, [content]);
    };
    const renderContent = () => {
      if (slots.default) {
        return createVNode("div", {
          "class": bem56("content")
        }, [slots.default()]);
      }
      const {
        title,
        message,
        allowHtml
      } = props;
      if (message) {
        const hasTitle = !!(title || slots.title);
        return createVNode("div", {
          "key": allowHtml ? 1 : 0,
          "class": bem56("content", {
            isolated: !hasTitle
          })
        }, [renderMessage(hasTitle)]);
      }
    };
    const renderButtons = () => createVNode("div", {
      "class": [BORDER_TOP, bem56("footer")]
    }, [props.showCancelButton && createVNode(Button, {
      "size": "large",
      "text": props.cancelButtonText || t13("cancel"),
      "class": bem56("cancel"),
      "style": {
        color: props.cancelButtonColor
      },
      "loading": loading.cancel,
      "disabled": props.cancelButtonDisabled,
      "onClick": onCancel
    }, null), props.showConfirmButton && createVNode(Button, {
      "size": "large",
      "text": props.confirmButtonText || t13("confirm"),
      "class": [bem56("confirm"), {
        [BORDER_LEFT]: props.showCancelButton
      }],
      "style": {
        color: props.confirmButtonColor
      },
      "loading": loading.confirm,
      "disabled": props.confirmButtonDisabled,
      "onClick": onConfirm
    }, null)]);
    const renderRoundButtons = () => createVNode(ActionBar, {
      "class": bem56("footer")
    }, {
      default: () => [props.showCancelButton && createVNode(ActionBarButton, {
        "type": "warning",
        "text": props.cancelButtonText || t13("cancel"),
        "class": bem56("cancel"),
        "color": props.cancelButtonColor,
        "loading": loading.cancel,
        "disabled": props.cancelButtonDisabled,
        "onClick": onCancel
      }, null), props.showConfirmButton && createVNode(ActionBarButton, {
        "type": "danger",
        "text": props.confirmButtonText || t13("confirm"),
        "class": bem56("confirm"),
        "color": props.confirmButtonColor,
        "loading": loading.confirm,
        "disabled": props.confirmButtonDisabled,
        "onClick": onConfirm
      }, null)]
    });
    const renderFooter = () => {
      if (slots.footer) {
        return slots.footer();
      }
      return props.theme === "round-button" ? renderRoundButtons() : renderButtons();
    };
    return () => {
      const {
        width: width2,
        title,
        theme,
        message,
        className
      } = props;
      return createVNode(Popup, mergeProps({
        "ref": root,
        "role": "dialog",
        "class": [bem56([theme]), className],
        "style": {
          width: addUnit(width2)
        },
        "tabindex": 0,
        "aria-labelledby": title || message,
        "onKeydown": onKeydown,
        "onUpdate:show": updateShow
      }, pick(props, popupInheritKeys2)), {
        default: () => [renderTitle(), renderContent(), renderFooter()]
      });
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/dialog/function-call.mjs
var instance;
var DEFAULT_OPTIONS = {
  title: "",
  width: "",
  theme: null,
  message: "",
  overlay: true,
  callback: null,
  teleport: "body",
  className: "",
  allowHtml: false,
  lockScroll: true,
  transition: void 0,
  beforeClose: null,
  overlayClass: "",
  overlayStyle: void 0,
  messageAlign: "",
  cancelButtonText: "",
  cancelButtonColor: null,
  cancelButtonDisabled: false,
  confirmButtonText: "",
  confirmButtonColor: null,
  confirmButtonDisabled: false,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: true,
  closeOnClickOverlay: false
};
var currentOptions2 = extend({}, DEFAULT_OPTIONS);
function initInstance() {
  const Wrapper = {
    setup() {
      const {
        state,
        toggle
      } = usePopupState();
      return () => createVNode(stdin_default64, mergeProps(state, {
        "onUpdate:show": toggle
      }), null);
    }
  };
  ({
    instance
  } = mountComponent(Wrapper));
}
function showDialog(options) {
  if (!inBrowser) {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }
    instance.open(extend({}, currentOptions2, options, {
      callback: (action) => {
        (action === "confirm" ? resolve : reject)(action);
      }
    }));
  });
}
var setDialogDefaultOptions = (options) => {
  extend(currentOptions2, options);
};
var resetDialogDefaultOptions = () => {
  currentOptions2 = extend({}, DEFAULT_OPTIONS);
};
var showConfirmDialog = (options) => showDialog(extend({
  showCancelButton: true
}, options));
var closeDialog = () => {
  if (instance) {
    instance.toggle(false);
  }
};

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/dialog/index.mjs
var Dialog = withInstall(stdin_default64);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/divider/Divider.mjs
var [name62, bem57] = createNamespace("divider");
var dividerProps = {
  dashed: Boolean,
  hairline: truthProp,
  contentPosition: makeStringProp("center")
};
var stdin_default65 = defineComponent({
  name: name62,
  props: dividerProps,
  setup(props, {
    slots
  }) {
    return () => {
      var _a;
      return createVNode("div", {
        "role": "separator",
        "class": bem57({
          dashed: props.dashed,
          hairline: props.hairline,
          [`content-${props.contentPosition}`]: !!slots.default
        })
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/divider/index.mjs
var Divider = withInstall(stdin_default65);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/dropdown-menu/DropdownMenu.mjs
var [name63, bem58] = createNamespace("dropdown-menu");
var dropdownMenuProps = {
  overlay: truthProp,
  zIndex: numericProp,
  duration: makeNumericProp(0.2),
  direction: makeStringProp("down"),
  activeColor: String,
  closeOnClickOutside: truthProp,
  closeOnClickOverlay: truthProp
};
var DROPDOWN_KEY = Symbol(name63);
var stdin_default66 = defineComponent({
  name: name63,
  props: dropdownMenuProps,
  setup(props, {
    slots
  }) {
    const id = useId();
    const root = ref();
    const barRef = ref();
    const offset2 = ref(0);
    const {
      children,
      linkChildren
    } = useChildren(DROPDOWN_KEY);
    const scrollParent = useScrollParent(root);
    const opened = computed(() => children.some((item) => item.state.showWrapper));
    const barStyle = computed(() => {
      if (opened.value && isDef(props.zIndex)) {
        return {
          zIndex: +props.zIndex + 1
        };
      }
    });
    const onClickAway = () => {
      if (props.closeOnClickOutside) {
        children.forEach((item) => {
          item.toggle(false);
        });
      }
    };
    const updateOffset = () => {
      if (barRef.value) {
        const rect = useRect(barRef);
        if (props.direction === "down") {
          offset2.value = rect.bottom;
        } else {
          offset2.value = windowHeight.value - rect.top;
        }
      }
    };
    const onScroll = () => {
      if (opened.value) {
        updateOffset();
      }
    };
    const toggleItem = (active) => {
      children.forEach((item, index) => {
        if (index === active) {
          updateOffset();
          item.toggle();
        } else if (item.state.showPopup) {
          item.toggle(false, {
            immediate: true
          });
        }
      });
    };
    const renderTitle = (item, index) => {
      const {
        showPopup
      } = item.state;
      const {
        disabled,
        titleClass
      } = item;
      return createVNode("div", {
        "id": `${id}-${index}`,
        "role": "button",
        "tabindex": disabled ? void 0 : 0,
        "class": [bem58("item", {
          disabled
        }), {
          [HAPTICS_FEEDBACK]: !disabled
        }],
        "onClick": () => {
          if (!disabled) {
            toggleItem(index);
          }
        }
      }, [createVNode("span", {
        "class": [bem58("title", {
          down: showPopup === (props.direction === "down"),
          active: showPopup
        }), titleClass],
        "style": {
          color: showPopup ? props.activeColor : ""
        }
      }, [createVNode("div", {
        "class": "van-ellipsis"
      }, [item.renderTitle()])])]);
    };
    linkChildren({
      id,
      props,
      offset: offset2
    });
    useClickAway(root, onClickAway);
    useEventListener("scroll", onScroll, {
      target: scrollParent,
      passive: true
    });
    return () => {
      var _a;
      return createVNode("div", {
        "ref": root,
        "class": bem58()
      }, [createVNode("div", {
        "ref": barRef,
        "style": barStyle.value,
        "class": bem58("bar", {
          opened: opened.value
        })
      }, [children.map(renderTitle)]), (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/dropdown-item/DropdownItem.mjs
var [name64, bem59] = createNamespace("dropdown-item");
var dropdownItemProps = {
  title: String,
  options: makeArrayProp(),
  disabled: Boolean,
  teleport: [String, Object],
  lazyRender: truthProp,
  modelValue: unknownProp,
  titleClass: unknownProp
};
var stdin_default67 = defineComponent({
  name: name64,
  inheritAttrs: false,
  props: dropdownItemProps,
  emits: ["open", "opened", "close", "closed", "change", "update:modelValue"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const state = reactive({
      showPopup: false,
      transition: true,
      showWrapper: false
    });
    const {
      parent,
      index
    } = useParent(DROPDOWN_KEY);
    if (!parent) {
      if (true) {
        console.error("[Vant] <DropdownItem> must be a child component of <DropdownMenu>.");
      }
      return;
    }
    const getEmitter = (name210) => () => emit(name210);
    const onOpen = getEmitter("open");
    const onClose = getEmitter("close");
    const onOpened = getEmitter("opened");
    const onClosed = () => {
      state.showWrapper = false;
      emit("closed");
    };
    const onClickWrapper = (event) => {
      if (props.teleport) {
        event.stopPropagation();
      }
    };
    const toggle = (show = !state.showPopup, options = {}) => {
      if (show === state.showPopup) {
        return;
      }
      state.showPopup = show;
      state.transition = !options.immediate;
      if (show) {
        state.showWrapper = true;
      }
    };
    const renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }
      if (props.title) {
        return props.title;
      }
      const match = props.options.find((option) => option.value === props.modelValue);
      return match ? match.text : "";
    };
    const renderOption = (option) => {
      const {
        activeColor
      } = parent.props;
      const active = option.value === props.modelValue;
      const onClick = () => {
        state.showPopup = false;
        if (option.value !== props.modelValue) {
          emit("update:modelValue", option.value);
          emit("change", option.value);
        }
      };
      const renderIcon = () => {
        if (active) {
          return createVNode(Icon, {
            "class": bem59("icon"),
            "color": activeColor,
            "name": "success"
          }, null);
        }
      };
      return createVNode(Cell, {
        "role": "menuitem",
        "key": option.value,
        "icon": option.icon,
        "title": option.text,
        "class": bem59("option", {
          active
        }),
        "style": {
          color: active ? activeColor : ""
        },
        "tabindex": active ? 0 : -1,
        "clickable": true,
        "onClick": onClick
      }, {
        value: renderIcon
      });
    };
    const renderContent = () => {
      const {
        offset: offset2
      } = parent;
      const {
        zIndex,
        overlay,
        duration,
        direction,
        closeOnClickOverlay
      } = parent.props;
      const style = getZIndexStyle(zIndex);
      if (direction === "down") {
        style.top = `${offset2.value}px`;
      } else {
        style.bottom = `${offset2.value}px`;
      }
      return withDirectives(createVNode("div", mergeProps({
        "style": style,
        "class": bem59([direction]),
        "onClick": onClickWrapper
      }, attrs), [createVNode(Popup, {
        "show": state.showPopup,
        "onUpdate:show": ($event) => state.showPopup = $event,
        "role": "menu",
        "class": bem59("content"),
        "overlay": overlay,
        "position": direction === "down" ? "top" : "bottom",
        "duration": state.transition ? duration : 0,
        "lazyRender": props.lazyRender,
        "overlayStyle": {
          position: "absolute"
        },
        "aria-labelledby": `${parent.id}-${index.value}`,
        "closeOnClickOverlay": closeOnClickOverlay,
        "onOpen": onOpen,
        "onClose": onClose,
        "onOpened": onOpened,
        "onClosed": onClosed
      }, {
        default: () => {
          var _a;
          return [props.options.map(renderOption), (_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      })]), [[vShow, state.showWrapper]]);
    };
    useExpose({
      state,
      toggle,
      renderTitle
    });
    return () => {
      if (props.teleport) {
        return createVNode(Teleport, {
          "to": props.teleport
        }, {
          default: () => [renderContent()]
        });
      }
      return renderContent();
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/dropdown-item/index.mjs
var DropdownItem = withInstall(stdin_default67);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/dropdown-menu/index.mjs
var DropdownMenu = withInstall(stdin_default66);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/grid/Grid.mjs
var [name65, bem60] = createNamespace("grid");
var gridProps = {
  square: Boolean,
  center: truthProp,
  border: truthProp,
  gutter: numericProp,
  reverse: Boolean,
  iconSize: numericProp,
  direction: String,
  clickable: Boolean,
  columnNum: makeNumericProp(4)
};
var GRID_KEY = Symbol(name65);
var stdin_default68 = defineComponent({
  name: name65,
  props: gridProps,
  setup(props, {
    slots
  }) {
    const {
      linkChildren
    } = useChildren(GRID_KEY);
    linkChildren({
      props
    });
    return () => {
      var _a;
      return createVNode("div", {
        "style": {
          paddingLeft: addUnit(props.gutter)
        },
        "class": [bem60(), {
          [BORDER_TOP]: props.border && !props.gutter
        }]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/grid/index.mjs
var Grid = withInstall(stdin_default68);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/grid-item/GridItem.mjs
var [name66, bem61] = createNamespace("grid-item");
var gridItemProps = extend({}, routeProps, {
  dot: Boolean,
  text: String,
  icon: String,
  badge: numericProp,
  iconColor: String,
  iconPrefix: String,
  badgeProps: Object
});
var stdin_default69 = defineComponent({
  name: name66,
  props: gridItemProps,
  setup(props, {
    slots
  }) {
    const {
      parent,
      index
    } = useParent(GRID_KEY);
    const route2 = useRoute();
    if (!parent) {
      if (true) {
        console.error("[Vant] <GridItem> must be a child component of <Grid>.");
      }
      return;
    }
    const rootStyle = computed(() => {
      const {
        square,
        gutter,
        columnNum
      } = parent.props;
      const percent = `${100 / +columnNum}%`;
      const style = {
        flexBasis: percent
      };
      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        const gutterValue = addUnit(gutter);
        style.paddingRight = gutterValue;
        if (index.value >= columnNum) {
          style.marginTop = gutterValue;
        }
      }
      return style;
    });
    const contentStyle = computed(() => {
      const {
        square,
        gutter
      } = parent.props;
      if (square && gutter) {
        const gutterValue = addUnit(gutter);
        return {
          right: gutterValue,
          bottom: gutterValue,
          height: "auto"
        };
      }
    });
    const renderIcon = () => {
      if (slots.icon) {
        return createVNode(Badge, mergeProps({
          "dot": props.dot,
          "content": props.badge
        }, props.badgeProps), {
          default: slots.icon
        });
      }
      if (props.icon) {
        return createVNode(Icon, {
          "dot": props.dot,
          "name": props.icon,
          "size": parent.props.iconSize,
          "badge": props.badge,
          "class": bem61("icon"),
          "color": props.iconColor,
          "badgeProps": props.badgeProps,
          "classPrefix": props.iconPrefix
        }, null);
      }
    };
    const renderText = () => {
      if (slots.text) {
        return slots.text();
      }
      if (props.text) {
        return createVNode("span", {
          "class": bem61("text")
        }, [props.text]);
      }
    };
    const renderContent = () => {
      if (slots.default) {
        return slots.default();
      }
      return [renderIcon(), renderText()];
    };
    return () => {
      const {
        center,
        border,
        square,
        gutter,
        reverse,
        direction,
        clickable
      } = parent.props;
      const classes = [bem61("content", [direction, {
        center,
        square,
        reverse,
        clickable,
        surround: border && gutter
      }]), {
        [BORDER]: border
      }];
      return createVNode("div", {
        "class": [bem61({
          square
        })],
        "style": rootStyle.value
      }, [createVNode("div", {
        "role": clickable ? "button" : void 0,
        "class": classes,
        "style": contentStyle.value,
        "tabindex": clickable ? 0 : void 0,
        "onClick": route2
      }, [renderContent()])]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/grid-item/index.mjs
var GridItem = withInstall(stdin_default69);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/image-preview/ImagePreviewItem.mjs
var getDistance = (touches) => Math.sqrt((touches[0].clientX - touches[1].clientX) ** 2 + (touches[0].clientY - touches[1].clientY) ** 2);
var bem62 = createNamespace("image-preview")[1];
var stdin_default70 = defineComponent({
  props: {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: makeRequiredProp(numericProp),
    maxZoom: makeRequiredProp(numericProp),
    rootWidth: makeRequiredProp(Number),
    rootHeight: makeRequiredProp(Number)
  },
  emits: ["scale", "close", "longPress"],
  setup(props, {
    emit,
    slots
  }) {
    const state = reactive({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    });
    const touch = useTouch();
    const swipeItem = ref();
    const vertical = computed(() => {
      const {
        rootWidth,
        rootHeight
      } = props;
      const rootRatio = rootHeight / rootWidth;
      return state.imageRatio > rootRatio;
    });
    const imageStyle = computed(() => {
      const {
        scale,
        moveX,
        moveY,
        moving,
        zooming
      } = state;
      const style = {
        transitionDuration: zooming || moving ? "0s" : ".3s"
      };
      if (scale !== 1) {
        const offsetX = moveX / scale;
        const offsetY = moveY / scale;
        style.transform = `scale(${scale}, ${scale}) translate(${offsetX}px, ${offsetY}px)`;
      }
      return style;
    });
    const maxMoveX = computed(() => {
      if (state.imageRatio) {
        const {
          rootWidth,
          rootHeight
        } = props;
        const displayWidth = vertical.value ? rootHeight / state.imageRatio : rootWidth;
        return Math.max(0, (state.scale * displayWidth - rootWidth) / 2);
      }
      return 0;
    });
    const maxMoveY = computed(() => {
      if (state.imageRatio) {
        const {
          rootWidth,
          rootHeight
        } = props;
        const displayHeight = vertical.value ? rootHeight : rootWidth * state.imageRatio;
        return Math.max(0, (state.scale * displayHeight - rootHeight) / 2);
      }
      return 0;
    });
    const setScale = (scale) => {
      scale = clamp(scale, +props.minZoom, +props.maxZoom + 1);
      if (scale !== state.scale) {
        state.scale = scale;
        emit("scale", {
          scale,
          index: props.active
        });
      }
    };
    const resetScale = () => {
      setScale(1);
      state.moveX = 0;
      state.moveY = 0;
    };
    const toggleScale = () => {
      const scale = state.scale > 1 ? 1 : 2;
      setScale(scale);
      state.moveX = 0;
      state.moveY = 0;
    };
    let fingerNum;
    let startMoveX;
    let startMoveY;
    let startScale;
    let startDistance;
    let doubleTapTimer;
    let touchStartTime;
    const onTouchStart = (event) => {
      const {
        touches
      } = event;
      const {
        offsetX
      } = touch;
      touch.start(event);
      fingerNum = touches.length;
      startMoveX = state.moveX;
      startMoveY = state.moveY;
      touchStartTime = Date.now();
      state.moving = fingerNum === 1 && state.scale !== 1;
      state.zooming = fingerNum === 2 && !offsetX.value;
      if (state.zooming) {
        startScale = state.scale;
        startDistance = getDistance(event.touches);
      }
    };
    const onTouchMove = (event) => {
      const {
        touches
      } = event;
      touch.move(event);
      if (state.moving || state.zooming) {
        preventDefault(event, true);
      }
      if (state.moving) {
        const {
          deltaX,
          deltaY
        } = touch;
        const moveX = deltaX.value + startMoveX;
        const moveY = deltaY.value + startMoveY;
        state.moveX = clamp(moveX, -maxMoveX.value, maxMoveX.value);
        state.moveY = clamp(moveY, -maxMoveY.value, maxMoveY.value);
      }
      if (state.zooming && touches.length === 2) {
        const distance = getDistance(touches);
        const scale = startScale * distance / startDistance;
        setScale(scale);
      }
    };
    const checkTap = () => {
      if (fingerNum > 1) {
        return;
      }
      const {
        offsetX,
        offsetY
      } = touch;
      const deltaTime = Date.now() - touchStartTime;
      const TAP_TIME = 250;
      const TAP_OFFSET = 5;
      if (offsetX.value < TAP_OFFSET && offsetY.value < TAP_OFFSET) {
        if (deltaTime < TAP_TIME) {
          if (doubleTapTimer) {
            clearTimeout(doubleTapTimer);
            doubleTapTimer = null;
            toggleScale();
          } else {
            doubleTapTimer = setTimeout(() => {
              emit("close");
              doubleTapTimer = null;
            }, TAP_TIME);
          }
        } else if (deltaTime > LONG_PRESS_START_TIME) {
          emit("longPress");
        }
      }
    };
    const onTouchEnd = (event) => {
      let stopPropagation2 = false;
      if (state.moving || state.zooming) {
        stopPropagation2 = true;
        if (state.moving && startMoveX === state.moveX && startMoveY === state.moveY) {
          stopPropagation2 = false;
        }
        if (!event.touches.length) {
          if (state.zooming) {
            state.moveX = clamp(state.moveX, -maxMoveX.value, maxMoveX.value);
            state.moveY = clamp(state.moveY, -maxMoveY.value, maxMoveY.value);
            state.zooming = false;
          }
          state.moving = false;
          startMoveX = 0;
          startMoveY = 0;
          startScale = 1;
          if (state.scale < 1) {
            resetScale();
          }
          if (state.scale > props.maxZoom) {
            state.scale = +props.maxZoom;
          }
        }
      }
      preventDefault(event, stopPropagation2);
      checkTap();
      touch.reset();
    };
    const onLoad = (event) => {
      const {
        naturalWidth,
        naturalHeight
      } = event.target;
      state.imageRatio = naturalHeight / naturalWidth;
    };
    watch(() => props.active, resetScale);
    watch(() => props.show, (value) => {
      if (!value) {
        resetScale();
      }
    });
    useEventListener("touchmove", onTouchMove, {
      target: computed(() => {
        var _a;
        return (_a = swipeItem.value) == null ? void 0 : _a.$el;
      })
    });
    return () => {
      const imageSlots = {
        loading: () => createVNode(Loading, {
          "type": "spinner"
        }, null)
      };
      return createVNode(SwipeItem, {
        "ref": swipeItem,
        "class": bem62("swipe-item"),
        "onTouchstartPassive": onTouchStart,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, {
        default: () => [slots.image ? createVNode("div", {
          "class": bem62("image-wrap")
        }, [slots.image({
          src: props.src
        })]) : createVNode(Image2, {
          "src": props.src,
          "fit": "contain",
          "class": bem62("image", {
            vertical: vertical.value
          }),
          "style": imageStyle.value,
          "onLoad": onLoad
        }, imageSlots)]
      });
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/image-preview/ImagePreview.mjs
var [name67, bem63] = createNamespace("image-preview");
var popupProps2 = ["show", "transition", "overlayStyle", "closeOnPopstate"];
var imagePreviewProps = {
  show: Boolean,
  loop: truthProp,
  images: makeArrayProp(),
  minZoom: makeNumericProp(1 / 3),
  maxZoom: makeNumericProp(3),
  overlay: truthProp,
  closeable: Boolean,
  showIndex: truthProp,
  className: unknownProp,
  closeIcon: makeStringProp("clear"),
  transition: String,
  beforeClose: Function,
  overlayClass: unknownProp,
  overlayStyle: Object,
  swipeDuration: makeNumericProp(300),
  startPosition: makeNumericProp(0),
  showIndicators: Boolean,
  closeOnPopstate: truthProp,
  closeIconPosition: makeStringProp("top-right")
};
var stdin_default71 = defineComponent({
  name: name67,
  props: imagePreviewProps,
  emits: ["scale", "close", "closed", "change", "longPress", "update:show"],
  setup(props, {
    emit,
    slots
  }) {
    const swipeRef = ref();
    const state = reactive({
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    });
    const resize = () => {
      if (swipeRef.value) {
        const rect = useRect(swipeRef.value.$el);
        state.rootWidth = rect.width;
        state.rootHeight = rect.height;
        swipeRef.value.resize();
      }
    };
    const emitScale = (args) => emit("scale", args);
    const updateShow = (show) => emit("update:show", show);
    const emitClose = () => {
      callInterceptor(props.beforeClose, {
        args: [state.active],
        done: () => updateShow(false)
      });
    };
    const setActive = (active) => {
      if (active !== state.active) {
        state.active = active;
        emit("change", active);
      }
    };
    const renderIndex = () => {
      if (props.showIndex) {
        return createVNode("div", {
          "class": bem63("index")
        }, [slots.index ? slots.index({
          index: state.active
        }) : `${state.active + 1} / ${props.images.length}`]);
      }
    };
    const renderCover = () => {
      if (slots.cover) {
        return createVNode("div", {
          "class": bem63("cover")
        }, [slots.cover()]);
      }
    };
    const renderImages = () => createVNode(Swipe, {
      "ref": swipeRef,
      "lazyRender": true,
      "loop": props.loop,
      "class": bem63("swipe"),
      "duration": props.swipeDuration,
      "initialSwipe": props.startPosition,
      "showIndicators": props.showIndicators,
      "indicatorColor": "white",
      "onChange": setActive
    }, {
      default: () => [props.images.map((image, index) => createVNode(stdin_default70, {
        "src": image,
        "show": props.show,
        "active": state.active,
        "maxZoom": props.maxZoom,
        "minZoom": props.minZoom,
        "rootWidth": state.rootWidth,
        "rootHeight": state.rootHeight,
        "onScale": emitScale,
        "onClose": emitClose,
        "onLongPress": () => emit("longPress", {
          index
        })
      }, {
        image: slots.image
      }))]
    });
    const renderClose = () => {
      if (props.closeable) {
        return createVNode(Icon, {
          "role": "button",
          "name": props.closeIcon,
          "class": [bem63("close-icon", props.closeIconPosition), HAPTICS_FEEDBACK],
          "onClick": emitClose
        }, null);
      }
    };
    const onClosed = () => emit("closed");
    const swipeTo = (index, options) => {
      var _a;
      return (_a = swipeRef.value) == null ? void 0 : _a.swipeTo(index, options);
    };
    useExpose({
      swipeTo
    });
    onMounted(resize);
    watch([windowWidth, windowHeight], resize);
    watch(() => props.startPosition, (value) => setActive(+value));
    watch(() => props.show, (value) => {
      const {
        images,
        startPosition
      } = props;
      if (value) {
        setActive(+startPosition);
        nextTick(() => {
          resize();
          swipeTo(+startPosition, {
            immediate: true
          });
        });
      } else {
        emit("close", {
          index: state.active,
          url: images[state.active]
        });
      }
    });
    return () => createVNode(Popup, mergeProps({
      "class": [bem63(), props.className],
      "overlayClass": [bem63("overlay"), props.overlayClass],
      "onClosed": onClosed,
      "onUpdate:show": updateShow
    }, pick(props, popupProps2)), {
      default: () => [renderClose(), renderImages(), renderIndex(), renderCover()]
    });
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/image-preview/function-call.mjs
var instance2;
var defaultConfig = {
  loop: true,
  images: [],
  maxZoom: 3,
  minZoom: 1 / 3,
  onScale: void 0,
  onClose: void 0,
  onChange: void 0,
  teleport: "body",
  className: "",
  showIndex: true,
  closeable: false,
  closeIcon: "clear",
  transition: void 0,
  beforeClose: void 0,
  overlayStyle: void 0,
  overlayClass: void 0,
  startPosition: 0,
  swipeDuration: 300,
  showIndicators: false,
  closeOnPopstate: true,
  closeIconPosition: "top-right"
};
function initInstance2() {
  ({
    instance: instance2
  } = mountComponent({
    setup() {
      const {
        state,
        toggle
      } = usePopupState();
      const onClosed = () => {
        state.images = [];
      };
      return () => createVNode(stdin_default71, mergeProps(state, {
        "onClosed": onClosed,
        "onUpdate:show": toggle
      }), null);
    }
  }));
}
var showImagePreview = (options, startPosition = 0) => {
  if (!inBrowser) {
    return;
  }
  if (!instance2) {
    initInstance2();
  }
  options = Array.isArray(options) ? {
    images: options,
    startPosition
  } : options;
  instance2.open(extend({}, defaultConfig, options));
  return instance2;
};

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/image-preview/index.mjs
var ImagePreview = withInstall(stdin_default71);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/index-bar/IndexBar.mjs
function genAlphabet() {
  const charCodeOfA = "A".charCodeAt(0);
  const indexList = Array(26).fill("").map((_, i) => String.fromCharCode(charCodeOfA + i));
  return indexList;
}
var [name68, bem64] = createNamespace("index-bar");
var indexBarProps = {
  sticky: truthProp,
  zIndex: numericProp,
  teleport: [String, Object],
  highlightColor: String,
  stickyOffsetTop: makeNumberProp(0),
  indexList: {
    type: Array,
    default: genAlphabet
  }
};
var INDEX_BAR_KEY = Symbol(name68);
var stdin_default72 = defineComponent({
  name: name68,
  props: indexBarProps,
  emits: ["select", "change"],
  setup(props, {
    emit,
    slots
  }) {
    const root = ref();
    const sidebar = ref();
    const activeAnchor = ref("");
    const touch = useTouch();
    const scrollParent = useScrollParent(root);
    const {
      children,
      linkChildren
    } = useChildren(INDEX_BAR_KEY);
    let selectActiveIndex;
    linkChildren({
      props
    });
    const sidebarStyle = computed(() => {
      if (isDef(props.zIndex)) {
        return {
          zIndex: +props.zIndex + 1
        };
      }
    });
    const highlightStyle = computed(() => {
      if (props.highlightColor) {
        return {
          color: props.highlightColor
        };
      }
    });
    const getActiveAnchor = (scrollTop, rects) => {
      for (let i = children.length - 1; i >= 0; i--) {
        const prevHeight = i > 0 ? rects[i - 1].height : 0;
        const reachTop = props.sticky ? prevHeight + props.stickyOffsetTop : 0;
        if (scrollTop + reachTop >= rects[i].top) {
          return i;
        }
      }
      return -1;
    };
    const getMatchAnchor = (index) => children.find((item) => String(item.index) === index);
    const onScroll = () => {
      if (isHidden(root)) {
        return;
      }
      const {
        sticky,
        indexList
      } = props;
      const scrollTop = getScrollTop(scrollParent.value);
      const scrollParentRect = useRect(scrollParent);
      const rects = children.map((item) => item.getRect(scrollParent.value, scrollParentRect));
      let active = -1;
      if (selectActiveIndex) {
        const match = getMatchAnchor(selectActiveIndex);
        if (match) {
          const rect = match.getRect(scrollParent.value, scrollParentRect);
          active = getActiveAnchor(rect.top, rects);
        }
      } else {
        active = getActiveAnchor(scrollTop, rects);
      }
      activeAnchor.value = indexList[active];
      if (sticky) {
        children.forEach((item, index) => {
          const {
            state,
            $el
          } = item;
          if (index === active || index === active - 1) {
            const rect = $el.getBoundingClientRect();
            state.left = rect.left;
            state.width = rect.width;
          } else {
            state.left = null;
            state.width = null;
          }
          if (index === active) {
            state.active = true;
            state.top = Math.max(props.stickyOffsetTop, rects[index].top - scrollTop) + scrollParentRect.top;
          } else if (index === active - 1 && selectActiveIndex === "") {
            const activeItemTop = rects[active].top - scrollTop;
            state.active = activeItemTop > 0;
            state.top = activeItemTop + scrollParentRect.top - rects[index].height;
          } else {
            state.active = false;
          }
        });
      }
      selectActiveIndex = "";
    };
    const init = () => {
      nextTick(onScroll);
    };
    useEventListener("scroll", onScroll, {
      target: scrollParent,
      passive: true
    });
    onMounted(init);
    watch(() => props.indexList, init);
    watch(activeAnchor, (value) => {
      if (value) {
        emit("change", value);
      }
    });
    const renderIndexes = () => props.indexList.map((index) => {
      const active = index === activeAnchor.value;
      return createVNode("span", {
        "class": bem64("index", {
          active
        }),
        "style": active ? highlightStyle.value : void 0,
        "data-index": index
      }, [index]);
    });
    const scrollTo = (index) => {
      selectActiveIndex = String(index);
      const match = getMatchAnchor(selectActiveIndex);
      if (match) {
        const scrollTop = getScrollTop(scrollParent.value);
        const scrollParentRect = useRect(scrollParent);
        const {
          offsetHeight
        } = document.documentElement;
        match.$el.scrollIntoView();
        if (scrollTop === offsetHeight - scrollParentRect.height) {
          onScroll();
          return;
        }
        if (props.sticky && props.stickyOffsetTop) {
          setRootScrollTop(getRootScrollTop() - props.stickyOffsetTop);
        }
        emit("select", match.index);
      }
    };
    const scrollToElement = (element) => {
      const {
        index
      } = element.dataset;
      if (index) {
        scrollTo(index);
      }
    };
    const onClickSidebar = (event) => {
      scrollToElement(event.target);
    };
    let touchActiveIndex;
    const onTouchMove = (event) => {
      touch.move(event);
      if (touch.isVertical()) {
        preventDefault(event);
        const {
          clientX,
          clientY
        } = event.touches[0];
        const target = document.elementFromPoint(clientX, clientY);
        if (target) {
          const {
            index
          } = target.dataset;
          if (index && touchActiveIndex !== index) {
            touchActiveIndex = index;
            scrollToElement(target);
          }
        }
      }
    };
    const renderSidebar = () => createVNode("div", {
      "ref": sidebar,
      "class": bem64("sidebar"),
      "style": sidebarStyle.value,
      "onClick": onClickSidebar,
      "onTouchstartPassive": touch.start
    }, [renderIndexes()]);
    useExpose({
      scrollTo
    });
    useEventListener("touchmove", onTouchMove, {
      target: sidebar
    });
    return () => {
      var _a;
      return createVNode("div", {
        "ref": root,
        "class": bem64()
      }, [props.teleport ? createVNode(Teleport, {
        "to": props.teleport
      }, {
        default: () => [renderSidebar()]
      }) : renderSidebar(), (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/index-anchor/IndexAnchor.mjs
var [name69, bem65] = createNamespace("index-anchor");
var indexAnchorProps = {
  index: numericProp
};
var stdin_default73 = defineComponent({
  name: name69,
  props: indexAnchorProps,
  setup(props, {
    slots
  }) {
    const state = reactive({
      top: 0,
      left: null,
      rect: {
        top: 0,
        height: 0
      },
      width: null,
      active: false
    });
    const root = ref();
    const {
      parent
    } = useParent(INDEX_BAR_KEY);
    if (!parent) {
      if (true) {
        console.error("[Vant] <IndexAnchor> must be a child component of <IndexBar>.");
      }
      return;
    }
    const isSticky = () => state.active && parent.props.sticky;
    const anchorStyle = computed(() => {
      const {
        zIndex,
        highlightColor
      } = parent.props;
      if (isSticky()) {
        return extend(getZIndexStyle(zIndex), {
          left: state.left ? `${state.left}px` : void 0,
          width: state.width ? `${state.width}px` : void 0,
          transform: state.top ? `translate3d(0, ${state.top}px, 0)` : void 0,
          color: highlightColor
        });
      }
    });
    const getRect = (scrollParent, scrollParentRect) => {
      const rootRect = useRect(root);
      state.rect.height = rootRect.height;
      if (scrollParent === window || scrollParent === document.body) {
        state.rect.top = rootRect.top + getRootScrollTop();
      } else {
        state.rect.top = rootRect.top + getScrollTop(scrollParent) - scrollParentRect.top;
      }
      return state.rect;
    };
    useExpose({
      state,
      getRect
    });
    return () => {
      const sticky = isSticky();
      return createVNode("div", {
        "ref": root,
        "style": {
          height: sticky ? `${state.rect.height}px` : void 0
        }
      }, [createVNode("div", {
        "style": anchorStyle.value,
        "class": [bem65({
          sticky
        }), {
          [BORDER_BOTTOM]: sticky
        }]
      }, [slots.default ? slots.default() : props.index])]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/index-anchor/index.mjs
var IndexAnchor = withInstall(stdin_default73);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/index-bar/index.mjs
var IndexBar = withInstall(stdin_default72);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/list/List.mjs
var [name70, bem66, t14] = createNamespace("list");
var listProps = {
  error: Boolean,
  offset: makeNumericProp(300),
  loading: Boolean,
  disabled: Boolean,
  finished: Boolean,
  errorText: String,
  direction: makeStringProp("down"),
  loadingText: String,
  finishedText: String,
  immediateCheck: truthProp
};
var stdin_default74 = defineComponent({
  name: name70,
  props: listProps,
  emits: ["load", "update:error", "update:loading"],
  setup(props, {
    emit,
    slots
  }) {
    const loading = ref(props.loading);
    const root = ref();
    const placeholder = ref();
    const tabStatus = useTabStatus();
    const scrollParent = useScrollParent(root);
    const check = () => {
      nextTick(() => {
        if (loading.value || props.finished || props.disabled || props.error || (tabStatus == null ? void 0 : tabStatus.value) === false) {
          return;
        }
        const {
          offset: offset2,
          direction
        } = props;
        const scrollParentRect = useRect(scrollParent);
        if (!scrollParentRect.height || isHidden(root)) {
          return;
        }
        let isReachEdge = false;
        const placeholderRect = useRect(placeholder);
        if (direction === "up") {
          isReachEdge = scrollParentRect.top - placeholderRect.top <= offset2;
        } else {
          isReachEdge = placeholderRect.bottom - scrollParentRect.bottom <= offset2;
        }
        if (isReachEdge) {
          loading.value = true;
          emit("update:loading", true);
          emit("load");
        }
      });
    };
    const renderFinishedText = () => {
      if (props.finished) {
        const text = slots.finished ? slots.finished() : props.finishedText;
        if (text) {
          return createVNode("div", {
            "class": bem66("finished-text")
          }, [text]);
        }
      }
    };
    const clickErrorText = () => {
      emit("update:error", false);
      check();
    };
    const renderErrorText = () => {
      if (props.error) {
        const text = slots.error ? slots.error() : props.errorText;
        if (text) {
          return createVNode("div", {
            "role": "button",
            "class": bem66("error-text"),
            "tabindex": 0,
            "onClick": clickErrorText
          }, [text]);
        }
      }
    };
    const renderLoading = () => {
      if (loading.value && !props.finished && !props.disabled) {
        return createVNode("div", {
          "class": bem66("loading")
        }, [slots.loading ? slots.loading() : createVNode(Loading, {
          "class": bem66("loading-icon")
        }, {
          default: () => [props.loadingText || t14("loading")]
        })]);
      }
    };
    watch(() => [props.loading, props.finished, props.error], check);
    if (tabStatus) {
      watch(tabStatus, (tabActive) => {
        if (tabActive) {
          check();
        }
      });
    }
    onUpdated(() => {
      loading.value = props.loading;
    });
    onMounted(() => {
      if (props.immediateCheck) {
        check();
      }
    });
    useExpose({
      check
    });
    useEventListener("scroll", check, {
      target: scrollParent,
      passive: true
    });
    return () => {
      var _a;
      const Content = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const Placeholder = createVNode("div", {
        "ref": placeholder,
        "class": bem66("placeholder")
      }, null);
      return createVNode("div", {
        "ref": root,
        "role": "feed",
        "class": bem66(),
        "aria-busy": loading.value
      }, [props.direction === "down" ? Content : Placeholder, renderLoading(), renderFinishedText(), renderErrorText(), props.direction === "up" ? Content : Placeholder]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/list/index.mjs
var List = withInstall(stdin_default74);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/nav-bar/NavBar.mjs
var [name71, bem67] = createNamespace("nav-bar");
var navBarProps = {
  title: String,
  fixed: Boolean,
  zIndex: numericProp,
  border: truthProp,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  placeholder: Boolean,
  safeAreaInsetTop: Boolean,
  clickable: truthProp
};
var stdin_default75 = defineComponent({
  name: name71,
  props: navBarProps,
  emits: ["clickLeft", "clickRight"],
  setup(props, {
    emit,
    slots
  }) {
    const navBarRef = ref();
    const renderPlaceholder = usePlaceholder(navBarRef, bem67);
    const onClickLeft = (event) => emit("clickLeft", event);
    const onClickRight = (event) => emit("clickRight", event);
    const renderLeft = () => {
      if (slots.left) {
        return slots.left();
      }
      return [props.leftArrow && createVNode(Icon, {
        "class": bem67("arrow"),
        "name": "arrow-left"
      }, null), props.leftText && createVNode("span", {
        "class": bem67("text")
      }, [props.leftText])];
    };
    const renderRight = () => {
      if (slots.right) {
        return slots.right();
      }
      return createVNode("span", {
        "class": bem67("text")
      }, [props.rightText]);
    };
    const renderNavBar = () => {
      const {
        title,
        fixed,
        border,
        zIndex
      } = props;
      const style = getZIndexStyle(zIndex);
      const hasLeft = props.leftArrow || props.leftText || slots.left;
      const hasRight = props.rightText || slots.right;
      return createVNode("div", {
        "ref": navBarRef,
        "style": style,
        "class": [bem67({
          fixed
        }), {
          [BORDER_BOTTOM]: border,
          "van-safe-area-top": props.safeAreaInsetTop
        }]
      }, [createVNode("div", {
        "class": bem67("content")
      }, [hasLeft && createVNode("div", {
        "class": [bem67("left"), props.clickable ? HAPTICS_FEEDBACK : ""],
        "onClick": onClickLeft
      }, [renderLeft()]), createVNode("div", {
        "class": [bem67("title"), "van-ellipsis"]
      }, [slots.title ? slots.title() : title]), hasRight && createVNode("div", {
        "class": [bem67("right"), props.clickable ? HAPTICS_FEEDBACK : ""],
        "onClick": onClickRight
      }, [renderRight()])])]);
    };
    return () => {
      if (props.fixed && props.placeholder) {
        return renderPlaceholder(renderNavBar);
      }
      return renderNavBar();
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/nav-bar/index.mjs
var NavBar = withInstall(stdin_default75);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/notice-bar/NoticeBar.mjs
var [name72, bem68] = createNamespace("notice-bar");
var noticeBarProps = {
  text: String,
  mode: String,
  color: String,
  delay: makeNumericProp(1),
  speed: makeNumericProp(60),
  leftIcon: String,
  wrapable: Boolean,
  background: String,
  scrollable: {
    type: Boolean,
    default: null
  }
};
var stdin_default76 = defineComponent({
  name: name72,
  props: noticeBarProps,
  emits: ["close", "replay"],
  setup(props, {
    emit,
    slots
  }) {
    let wrapWidth = 0;
    let contentWidth = 0;
    let startTimer;
    const wrapRef = ref();
    const contentRef = ref();
    const state = reactive({
      show: true,
      offset: 0,
      duration: 0
    });
    const renderLeftIcon = () => {
      if (slots["left-icon"]) {
        return slots["left-icon"]();
      }
      if (props.leftIcon) {
        return createVNode(Icon, {
          "class": bem68("left-icon"),
          "name": props.leftIcon
        }, null);
      }
    };
    const getRightIconName = () => {
      if (props.mode === "closeable") {
        return "cross";
      }
      if (props.mode === "link") {
        return "arrow";
      }
    };
    const onClickRightIcon = (event) => {
      if (props.mode === "closeable") {
        state.show = false;
        emit("close", event);
      }
    };
    const renderRightIcon = () => {
      if (slots["right-icon"]) {
        return slots["right-icon"]();
      }
      const name210 = getRightIconName();
      if (name210) {
        return createVNode(Icon, {
          "name": name210,
          "class": bem68("right-icon"),
          "onClick": onClickRightIcon
        }, null);
      }
    };
    const onTransitionEnd = () => {
      state.offset = wrapWidth;
      state.duration = 0;
      raf(() => {
        doubleRaf(() => {
          state.offset = -contentWidth;
          state.duration = (contentWidth + wrapWidth) / +props.speed;
          emit("replay");
        });
      });
    };
    const renderMarquee = () => {
      const ellipsis = props.scrollable === false && !props.wrapable;
      const style = {
        transform: state.offset ? `translateX(${state.offset}px)` : "",
        transitionDuration: `${state.duration}s`
      };
      return createVNode("div", {
        "ref": wrapRef,
        "role": "marquee",
        "class": bem68("wrap")
      }, [createVNode("div", {
        "ref": contentRef,
        "style": style,
        "class": [bem68("content"), {
          "van-ellipsis": ellipsis
        }],
        "onTransitionend": onTransitionEnd
      }, [slots.default ? slots.default() : props.text])]);
    };
    const reset = () => {
      const {
        delay,
        speed,
        scrollable
      } = props;
      const ms = isDef(delay) ? +delay * 1e3 : 0;
      wrapWidth = 0;
      contentWidth = 0;
      state.offset = 0;
      state.duration = 0;
      clearTimeout(startTimer);
      startTimer = setTimeout(() => {
        if (!wrapRef.value || !contentRef.value || scrollable === false) {
          return;
        }
        const wrapRefWidth = useRect(wrapRef).width;
        const contentRefWidth = useRect(contentRef).width;
        if (scrollable || contentRefWidth > wrapRefWidth) {
          doubleRaf(() => {
            wrapWidth = wrapRefWidth;
            contentWidth = contentRefWidth;
            state.offset = -contentWidth;
            state.duration = contentWidth / +speed;
          });
        }
      }, ms);
    };
    onPopupReopen(reset);
    onMountedOrActivated(reset);
    useEventListener("pageshow", reset);
    useExpose({
      reset
    });
    watch(() => [props.text, props.scrollable], reset);
    return () => {
      const {
        color,
        wrapable,
        background
      } = props;
      return withDirectives(createVNode("div", {
        "role": "alert",
        "class": bem68({
          wrapable
        }),
        "style": {
          color,
          background
        }
      }, [renderLeftIcon(), renderMarquee(), renderRightIcon()]), [[vShow, state.show]]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/notice-bar/index.mjs
var NoticeBar = withInstall(stdin_default76);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/notify/Notify.mjs
var [name73, bem69] = createNamespace("notify");
var notifyProps = extend({}, popupSharedProps, {
  type: makeStringProp("danger"),
  color: String,
  message: numericProp,
  position: makeStringProp("top"),
  className: unknownProp,
  background: String,
  lockScroll: Boolean
});
var stdin_default77 = defineComponent({
  name: name73,
  props: notifyProps,
  emits: ["update:show"],
  setup(props, {
    emit,
    slots
  }) {
    const updateShow = (show) => emit("update:show", show);
    return () => createVNode(Popup, {
      "show": props.show,
      "class": [bem69([props.type]), props.className],
      "style": {
        color: props.color,
        background: props.background
      },
      "overlay": false,
      "zIndex": props.zIndex,
      "position": props.position,
      "duration": 0.2,
      "lockScroll": props.lockScroll,
      "onUpdate:show": updateShow
    }, {
      default: () => [slots.default ? slots.default() : props.message]
    });
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/notify/function-call.mjs
var timer;
var instance3;
var parseOptions2 = (message) => isObject(message) ? message : {
  message
};
function initInstance3() {
  ({
    instance: instance3
  } = mountComponent({
    setup() {
      const {
        state,
        toggle
      } = usePopupState();
      return () => createVNode(stdin_default77, mergeProps(state, {
        "onUpdate:show": toggle
      }), null);
    }
  }));
}
var getDefaultOptions = () => ({
  type: "danger",
  color: void 0,
  message: "",
  onClose: void 0,
  onClick: void 0,
  onOpened: void 0,
  duration: 3e3,
  position: void 0,
  className: "",
  lockScroll: false,
  background: void 0
});
var currentOptions3 = getDefaultOptions();
var closeNotify = () => {
  if (instance3) {
    instance3.toggle(false);
  }
};
function showNotify(options) {
  if (!inBrowser) {
    return;
  }
  if (!instance3) {
    initInstance3();
  }
  options = extend({}, currentOptions3, parseOptions2(options));
  instance3.open(options);
  clearTimeout(timer);
  if (options.duration > 0) {
    timer = setTimeout(closeNotify, options.duration);
  }
  return instance3;
}
var setNotifyDefaultOptions = (options) => extend(currentOptions3, options);
var resetNotifyDefaultOptions = () => {
  currentOptions3 = getDefaultOptions();
};

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/notify/index.mjs
var Notify = withInstall(stdin_default77);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/number-keyboard/NumberKeyboardKey.mjs
var [name74, bem70] = createNamespace("key");
var CollapseIcon = createVNode("svg", {
  "class": bem70("collapse-icon"),
  "viewBox": "0 0 30 24"
}, [createVNode("path", {
  "d": "M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",
  "fill": "currentColor"
}, null)]);
var DeleteIcon = createVNode("svg", {
  "class": bem70("delete-icon"),
  "viewBox": "0 0 32 22"
}, [createVNode("path", {
  "d": "M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",
  "fill": "currentColor"
}, null)]);
var stdin_default78 = defineComponent({
  name: name74,
  props: {
    type: String,
    text: numericProp,
    color: String,
    wider: Boolean,
    large: Boolean,
    loading: Boolean
  },
  emits: ["press"],
  setup(props, {
    emit,
    slots
  }) {
    const active = ref(false);
    const touch = useTouch();
    const onTouchStart = (event) => {
      touch.start(event);
      active.value = true;
    };
    const onTouchMove = (event) => {
      touch.move(event);
      if (touch.direction.value) {
        active.value = false;
      }
    };
    const onTouchEnd = (event) => {
      if (active.value) {
        if (!slots.default) {
          preventDefault(event);
        }
        active.value = false;
        emit("press", props.text, props.type);
      }
    };
    const renderContent = () => {
      if (props.loading) {
        return createVNode(Loading, {
          "class": bem70("loading-icon")
        }, null);
      }
      const text = slots.default ? slots.default() : props.text;
      switch (props.type) {
        case "delete":
          return text || DeleteIcon;
        case "extra":
          return text || CollapseIcon;
        default:
          return text;
      }
    };
    return () => createVNode("div", {
      "class": bem70("wrapper", {
        wider: props.wider
      }),
      "onTouchstartPassive": onTouchStart,
      "onTouchmovePassive": onTouchMove,
      "onTouchend": onTouchEnd,
      "onTouchcancel": onTouchEnd
    }, [createVNode("div", {
      "role": "button",
      "tabindex": 0,
      "class": bem70([props.color, {
        large: props.large,
        active: active.value,
        delete: props.type === "delete"
      }])
    }, [renderContent()])]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/number-keyboard/NumberKeyboard.mjs
var [name75, bem71] = createNamespace("number-keyboard");
var numberKeyboardProps = {
  show: Boolean,
  title: String,
  theme: makeStringProp("default"),
  zIndex: numericProp,
  teleport: [String, Object],
  maxlength: makeNumericProp(Infinity),
  modelValue: makeStringProp(""),
  transition: truthProp,
  blurOnClose: truthProp,
  showDeleteKey: truthProp,
  randomKeyOrder: Boolean,
  closeButtonText: String,
  deleteButtonText: String,
  closeButtonLoading: Boolean,
  hideOnClickOutside: truthProp,
  safeAreaInsetBottom: truthProp,
  extraKey: {
    type: [String, Array],
    default: ""
  }
};
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
var stdin_default79 = defineComponent({
  name: name75,
  inheritAttrs: false,
  props: numberKeyboardProps,
  emits: ["show", "hide", "blur", "input", "close", "delete", "update:modelValue"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const root = ref();
    const genBasicKeys = () => {
      const keys2 = Array(9).fill("").map((_, i) => ({
        text: i + 1
      }));
      if (props.randomKeyOrder) {
        shuffle(keys2);
      }
      return keys2;
    };
    const genDefaultKeys = () => [...genBasicKeys(), {
      text: props.extraKey,
      type: "extra"
    }, {
      text: 0
    }, {
      text: props.showDeleteKey ? props.deleteButtonText : "",
      type: props.showDeleteKey ? "delete" : ""
    }];
    const genCustomKeys = () => {
      const keys2 = genBasicKeys();
      const {
        extraKey
      } = props;
      const extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];
      if (extraKeys.length === 1) {
        keys2.push({
          text: 0,
          wider: true
        }, {
          text: extraKeys[0],
          type: "extra"
        });
      } else if (extraKeys.length === 2) {
        keys2.push({
          text: extraKeys[0],
          type: "extra"
        }, {
          text: 0
        }, {
          text: extraKeys[1],
          type: "extra"
        });
      }
      return keys2;
    };
    const keys = computed(() => props.theme === "custom" ? genCustomKeys() : genDefaultKeys());
    const onBlur = () => {
      if (props.show) {
        emit("blur");
      }
    };
    const onClose = () => {
      emit("close");
      if (props.blurOnClose) {
        onBlur();
      }
    };
    const onAnimationEnd = () => emit(props.show ? "show" : "hide");
    const onPress = (text, type) => {
      if (text === "") {
        if (type === "extra") {
          onBlur();
        }
        return;
      }
      const value = props.modelValue;
      if (type === "delete") {
        emit("delete");
        emit("update:modelValue", value.slice(0, value.length - 1));
      } else if (type === "close") {
        onClose();
      } else if (value.length < props.maxlength) {
        emit("input", text);
        emit("update:modelValue", value + text);
      }
    };
    const renderTitle = () => {
      const {
        title,
        theme,
        closeButtonText
      } = props;
      const leftSlot = slots["title-left"];
      const showClose = closeButtonText && theme === "default";
      const showTitle = title || showClose || leftSlot;
      if (!showTitle) {
        return;
      }
      return createVNode("div", {
        "class": bem71("header")
      }, [leftSlot && createVNode("span", {
        "class": bem71("title-left")
      }, [leftSlot()]), title && createVNode("h2", {
        "class": bem71("title")
      }, [title]), showClose && createVNode("button", {
        "type": "button",
        "class": [bem71("close"), HAPTICS_FEEDBACK],
        "onClick": onClose
      }, [closeButtonText])]);
    };
    const renderKeys = () => keys.value.map((key) => {
      const keySlots = {};
      if (key.type === "delete") {
        keySlots.default = slots.delete;
      }
      if (key.type === "extra") {
        keySlots.default = slots["extra-key"];
      }
      return createVNode(stdin_default78, {
        "key": key.text,
        "text": key.text,
        "type": key.type,
        "wider": key.wider,
        "color": key.color,
        "onPress": onPress
      }, keySlots);
    });
    const renderSidebar = () => {
      if (props.theme === "custom") {
        return createVNode("div", {
          "class": bem71("sidebar")
        }, [props.showDeleteKey && createVNode(stdin_default78, {
          "large": true,
          "text": props.deleteButtonText,
          "type": "delete",
          "onPress": onPress
        }, {
          delete: slots.delete
        }), createVNode(stdin_default78, {
          "large": true,
          "text": props.closeButtonText,
          "type": "close",
          "color": "blue",
          "loading": props.closeButtonLoading,
          "onPress": onPress
        }, null)]);
      }
    };
    watch(() => props.show, (value) => {
      if (!props.transition) {
        emit(value ? "show" : "hide");
      }
    });
    if (props.hideOnClickOutside) {
      useClickAway(root, onBlur, {
        eventName: "touchstart"
      });
    }
    return () => {
      const Title = renderTitle();
      const Content = createVNode(Transition, {
        "name": props.transition ? "van-slide-up" : ""
      }, {
        default: () => [withDirectives(createVNode("div", mergeProps({
          "ref": root,
          "style": getZIndexStyle(props.zIndex),
          "class": bem71({
            unfit: !props.safeAreaInsetBottom,
            "with-title": !!Title
          }),
          "onAnimationend": onAnimationEnd,
          "onTouchstartPassive": stopPropagation
        }, attrs), [Title, createVNode("div", {
          "class": bem71("body")
        }, [createVNode("div", {
          "class": bem71("keys")
        }, [renderKeys()]), renderSidebar()])]), [[vShow, props.show]])]
      });
      if (props.teleport) {
        return createVNode(Teleport, {
          "to": props.teleport
        }, {
          default: () => [Content]
        });
      }
      return Content;
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/number-keyboard/index.mjs
var NumberKeyboard = withInstall(stdin_default79);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/pagination/Pagination.mjs
var [name76, bem72, t15] = createNamespace("pagination");
var makePage = (number, text, active) => ({
  number,
  text,
  active
});
var paginationProps = {
  mode: makeStringProp("multi"),
  prevText: String,
  nextText: String,
  pageCount: makeNumericProp(0),
  modelValue: makeNumberProp(0),
  totalItems: makeNumericProp(0),
  showPageSize: makeNumericProp(5),
  itemsPerPage: makeNumericProp(10),
  forceEllipses: Boolean
};
var stdin_default80 = defineComponent({
  name: name76,
  props: paginationProps,
  emits: ["change", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const count = computed(() => {
      const {
        pageCount,
        totalItems,
        itemsPerPage
      } = props;
      const count2 = +pageCount || Math.ceil(+totalItems / +itemsPerPage);
      return Math.max(1, count2);
    });
    const pages = computed(() => {
      const items = [];
      const pageCount = count.value;
      const showPageSize = +props.showPageSize;
      const {
        modelValue,
        forceEllipses
      } = props;
      let startPage = 1;
      let endPage = pageCount;
      const isMaxSized = showPageSize < pageCount;
      if (isMaxSized) {
        startPage = Math.max(modelValue - Math.floor(showPageSize / 2), 1);
        endPage = startPage + showPageSize - 1;
        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - showPageSize + 1;
        }
      }
      for (let number = startPage; number <= endPage; number++) {
        const page = makePage(number, number, number === modelValue);
        items.push(page);
      }
      if (isMaxSized && showPageSize > 0 && forceEllipses) {
        if (startPage > 1) {
          const prevPages = makePage(startPage - 1, "...");
          items.unshift(prevPages);
        }
        if (endPage < pageCount) {
          const nextPages = makePage(endPage + 1, "...");
          items.push(nextPages);
        }
      }
      return items;
    });
    const updateModelValue = (value, emitChange) => {
      value = clamp(value, 1, count.value);
      if (props.modelValue !== value) {
        emit("update:modelValue", value);
        if (emitChange) {
          emit("change", value);
        }
      }
    };
    watchEffect(() => updateModelValue(props.modelValue));
    const renderDesc = () => createVNode("li", {
      "class": bem72("page-desc")
    }, [slots.pageDesc ? slots.pageDesc() : `${props.modelValue}/${count.value}`]);
    const renderPrevButton = () => {
      const {
        mode,
        modelValue
      } = props;
      const slot = slots["prev-text"];
      const disabled = modelValue === 1;
      return createVNode("li", {
        "class": [bem72("item", {
          disabled,
          border: mode === "simple",
          prev: true
        }), BORDER_SURROUND]
      }, [createVNode("button", {
        "type": "button",
        "disabled": disabled,
        "onClick": () => updateModelValue(modelValue - 1, true)
      }, [slot ? slot() : props.prevText || t15("prev")])]);
    };
    const renderNextButton = () => {
      const {
        mode,
        modelValue
      } = props;
      const slot = slots["next-text"];
      const disabled = modelValue === count.value;
      return createVNode("li", {
        "class": [bem72("item", {
          disabled,
          border: mode === "simple",
          next: true
        }), BORDER_SURROUND]
      }, [createVNode("button", {
        "type": "button",
        "disabled": disabled,
        "onClick": () => updateModelValue(modelValue + 1, true)
      }, [slot ? slot() : props.nextText || t15("next")])]);
    };
    const renderPages = () => pages.value.map((page) => createVNode("li", {
      "class": [bem72("item", {
        active: page.active,
        page: true
      }), BORDER_SURROUND]
    }, [createVNode("button", {
      "type": "button",
      "aria-current": page.active || void 0,
      "onClick": () => updateModelValue(page.number, true)
    }, [slots.page ? slots.page(page) : page.text])]));
    return () => createVNode("nav", {
      "role": "navigation",
      "class": bem72()
    }, [createVNode("ul", {
      "class": bem72("items")
    }, [renderPrevButton(), props.mode === "simple" ? renderDesc() : renderPages(), renderNextButton()])]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/pagination/index.mjs
var Pagination = withInstall(stdin_default80);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/password-input/PasswordInput.mjs
var [name77, bem73] = createNamespace("password-input");
var passwordInputProps = {
  info: String,
  mask: truthProp,
  value: makeStringProp(""),
  gutter: numericProp,
  length: makeNumericProp(6),
  focused: Boolean,
  errorInfo: String
};
var stdin_default81 = defineComponent({
  name: name77,
  props: passwordInputProps,
  emits: ["focus"],
  setup(props, {
    emit
  }) {
    const onTouchStart = (event) => {
      event.stopPropagation();
      emit("focus", event);
    };
    const renderPoints = () => {
      const Points = [];
      const {
        mask,
        value,
        length,
        gutter,
        focused
      } = props;
      for (let i = 0; i < length; i++) {
        const char = value[i];
        const showBorder = i !== 0 && !gutter;
        const showCursor = focused && i === value.length;
        let style;
        if (i !== 0 && gutter) {
          style = {
            marginLeft: addUnit(gutter)
          };
        }
        Points.push(createVNode("li", {
          "class": [{
            [BORDER_LEFT]: showBorder
          }, bem73("item", {
            focus: showCursor
          })],
          "style": style
        }, [mask ? createVNode("i", {
          "style": {
            visibility: char ? "visible" : "hidden"
          }
        }, null) : char, showCursor && createVNode("div", {
          "class": bem73("cursor")
        }, null)]));
      }
      return Points;
    };
    return () => {
      const info = props.errorInfo || props.info;
      return createVNode("div", {
        "class": bem73()
      }, [createVNode("ul", {
        "class": [bem73("security"), {
          [BORDER_SURROUND]: !props.gutter
        }],
        "onTouchstartPassive": onTouchStart
      }, [renderPoints()]), info && createVNode("div", {
        "class": bem73(props.errorInfo ? "error-info" : "info")
      }, [info])]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/password-input/index.mjs
var PasswordInput = withInstall(stdin_default81);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/picker-group/index.mjs
var PickerGroup = withInstall(stdin_default23);

// ../node_modules/.pnpm/@vant+popperjs@1.3.0/node_modules/@vant/popperjs/dist/index.esm.mjs
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement2(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement2(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width2 = clientRect.width / scaleX;
  var height2 = clientRect.height / scaleY;
  return {
    width: width2,
    height: height2,
    top: y,
    right: x + width2,
    bottom: y + height2,
    left: x,
    x,
    y
  };
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getDocumentElement(element) {
  return ((isElement2(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width2 = element.offsetWidth;
  var height2 = element.offsetHeight;
  if (Math.abs(clientRect.width - width2) <= 1) {
    width2 = clientRect.width;
  }
  if (Math.abs(clientRect.height - height2) <= 1) {
    height2 = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width2,
    height: height2
  };
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getScrollParent2(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent2(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent2(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function format2(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str);
}
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format2(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format2(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format2(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format2(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format2(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format2(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format2(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format2(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}
function uniqueBy(arr, fn2) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn2(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current2) {
    var existing = merged2[current2.name];
    merged2[current2.name] = existing ? Object.assign({}, existing, current2, {
      options: Object.assign({}, existing.options, current2.options),
      data: Object.assign({}, existing.data, current2.data)
    }) : current2;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
function getVariation(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function computeOffsets(_ref) {
  var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS2 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions3 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS2 : _generatorOptions$def2;
  return function createPopper2(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions3;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS2, defaultOptions3),
      modifiersData: {},
      elements: {
        reference,
        popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance4 = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions3, state.options, options2);
        state.scrollParents = {
          reference: isElement2(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name103 = _ref.name;
            return name103;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name103 = _ref2.name;
              return name103 === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle(popper), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance4.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference2 = _state$elements.reference, popper2 = _state$elements.popper;
        if (!areValidElements(reference2, popper2)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference2, getOffsetParent(popper2), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper2)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name103 = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name: name103,
              instance: instance4
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance4.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance4;
    }
    instance4.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name103 = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect3 = _ref3.effect;
        if (typeof effect3 === "function") {
          var cleanupFn = effect3({
            state,
            name: name103,
            instance: instance4,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance4;
  };
}
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance4 = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance4.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance4.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance4.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance4.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
function popperOffsets(_ref) {
  var state = _ref.state, name103 = _ref.name;
  state.modifiersData[name103] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name103) {
    var style = state.styles[name103] || {};
    var attributes = state.attributes[name103] || {};
    var element = state.elements[name103];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name210) {
      var value = attributes[name210];
      if (value === false) {
        element.removeAttribute(name210);
      } else {
        element.setAttribute(name210, value === true ? "" : value);
      }
    });
  });
}
function effect2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name103) {
      var element = state.elements[name103];
      var attributes = state.attributes[name103] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name103) ? state.styles[name103] : initialStyles[name103]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect2,
  requires: ["computeStyles"]
};
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper = popperGenerator({
  defaultModifiers
});
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name103 = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name103] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/composables/use-sync-prop-ref.mjs
var useSyncPropRef = (getProp, setProp) => {
  const propRef = ref(getProp());
  watch(getProp, (value) => {
    if (value !== propRef.value) {
      propRef.value = value;
    }
  });
  watch(propRef, (value) => {
    if (value !== getProp()) {
      setProp(value);
    }
  });
  return propRef;
};

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/popover/Popover.mjs
var [name78, bem74] = createNamespace("popover");
var popupProps3 = ["overlay", "duration", "teleport", "overlayStyle", "overlayClass", "closeOnClickOverlay"];
var popoverProps = {
  show: Boolean,
  theme: makeStringProp("light"),
  overlay: Boolean,
  actions: makeArrayProp(),
  trigger: makeStringProp("click"),
  duration: numericProp,
  showArrow: truthProp,
  placement: makeStringProp("bottom"),
  iconPrefix: String,
  overlayClass: unknownProp,
  overlayStyle: Object,
  closeOnClickAction: truthProp,
  closeOnClickOverlay: truthProp,
  closeOnClickOutside: truthProp,
  offset: {
    type: Array,
    default: () => [0, 8]
  },
  teleport: {
    type: [String, Object],
    default: "body"
  }
};
var stdin_default82 = defineComponent({
  name: name78,
  props: popoverProps,
  emits: ["select", "touchstart", "update:show"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    let popper;
    const popupRef = ref();
    const wrapperRef = ref();
    const popoverRef = ref();
    const show = useSyncPropRef(() => props.show, (value) => emit("update:show", value));
    const getPopoverOptions = () => ({
      placement: props.placement,
      modifiers: [{
        name: "computeStyles",
        options: {
          adaptive: false,
          gpuAcceleration: false
        }
      }, extend({}, offset_default, {
        options: {
          offset: props.offset
        }
      })]
    });
    const createPopperInstance = () => {
      if (wrapperRef.value && popoverRef.value) {
        return createPopper(wrapperRef.value, popoverRef.value.popupRef.value, getPopoverOptions());
      }
      return null;
    };
    const updateLocation = () => {
      nextTick(() => {
        if (!show.value) {
          return;
        }
        if (!popper) {
          popper = createPopperInstance();
        } else {
          popper.setOptions(getPopoverOptions());
        }
      });
    };
    const updateShow = (value) => {
      show.value = value;
    };
    const onClickWrapper = () => {
      if (props.trigger === "click") {
        show.value = !show.value;
      }
    };
    const onClickAction = (action, index) => {
      if (action.disabled) {
        return;
      }
      emit("select", action, index);
      if (props.closeOnClickAction) {
        show.value = false;
      }
    };
    const onClickAway = () => {
      if (show.value && props.closeOnClickOutside && (!props.overlay || props.closeOnClickOverlay)) {
        show.value = false;
      }
    };
    const renderActionContent = (action, index) => {
      if (slots.action) {
        return slots.action({
          action,
          index
        });
      }
      return [action.icon && createVNode(Icon, {
        "name": action.icon,
        "classPrefix": props.iconPrefix,
        "class": bem74("action-icon")
      }, null), createVNode("div", {
        "class": [bem74("action-text"), BORDER_BOTTOM]
      }, [action.text])];
    };
    const renderAction = (action, index) => {
      const {
        icon,
        color,
        disabled,
        className
      } = action;
      return createVNode("div", {
        "role": "menuitem",
        "class": [bem74("action", {
          disabled,
          "with-icon": icon
        }), className],
        "style": {
          color
        },
        "tabindex": disabled ? void 0 : 0,
        "aria-disabled": disabled || void 0,
        "onClick": () => onClickAction(action, index)
      }, [renderActionContent(action, index)]);
    };
    onMounted(() => {
      updateLocation();
      watchEffect(() => {
        var _a;
        popupRef.value = (_a = popoverRef.value) == null ? void 0 : _a.popupRef.value;
      });
    });
    onBeforeUnmount(() => {
      if (popper) {
        popper.destroy();
        popper = null;
      }
    });
    watch(() => [show.value, props.offset, props.placement], updateLocation);
    useClickAway([wrapperRef, popupRef], onClickAway, {
      eventName: "touchstart"
    });
    return () => {
      var _a;
      return createVNode(Fragment, null, [createVNode("span", {
        "ref": wrapperRef,
        "class": bem74("wrapper"),
        "onClick": onClickWrapper
      }, [(_a = slots.reference) == null ? void 0 : _a.call(slots)]), createVNode(Popup, mergeProps({
        "ref": popoverRef,
        "show": show.value,
        "class": bem74([props.theme]),
        "position": "",
        "transition": "van-popover-zoom",
        "lockScroll": false,
        "onUpdate:show": updateShow
      }, attrs, pick(props, popupProps3)), {
        default: () => [props.showArrow && createVNode("div", {
          "class": bem74("arrow")
        }, null), createVNode("div", {
          "role": "menu",
          "class": bem74("content")
        }, [slots.default ? slots.default() : props.actions.map(renderAction)])]
      })]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/popover/index.mjs
var Popover = withInstall(stdin_default82);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/progress/Progress.mjs
var [name79, bem75] = createNamespace("progress");
var progressProps = {
  color: String,
  inactive: Boolean,
  pivotText: String,
  textColor: String,
  showPivot: truthProp,
  pivotColor: String,
  trackColor: String,
  strokeWidth: numericProp,
  percentage: {
    type: numericProp,
    default: 0,
    validator: (value) => value >= 0 && value <= 100
  }
};
var stdin_default83 = defineComponent({
  name: name79,
  props: progressProps,
  setup(props) {
    const background = computed(() => props.inactive ? void 0 : props.color);
    const renderPivot = () => {
      const {
        textColor,
        pivotText,
        pivotColor,
        percentage
      } = props;
      const text = pivotText != null ? pivotText : `${percentage}%`;
      if (props.showPivot && text) {
        const style = {
          color: textColor,
          left: `${+percentage}%`,
          transform: `translate(-${+percentage}%,-50%)`,
          background: pivotColor || background.value
        };
        return createVNode("span", {
          "style": style,
          "class": bem75("pivot", {
            inactive: props.inactive
          })
        }, [text]);
      }
    };
    return () => {
      const {
        trackColor,
        percentage,
        strokeWidth
      } = props;
      const rootStyle = {
        background: trackColor,
        height: addUnit(strokeWidth)
      };
      const portionStyle = {
        width: `${percentage}%`,
        background: background.value
      };
      return createVNode("div", {
        "class": bem75(),
        "style": rootStyle
      }, [createVNode("span", {
        "class": bem75("portion", {
          inactive: props.inactive
        }),
        "style": portionStyle
      }, null), renderPivot()]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/progress/index.mjs
var Progress = withInstall(stdin_default83);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/pull-refresh/PullRefresh.mjs
var [name80, bem76, t16] = createNamespace("pull-refresh");
var DEFAULT_HEAD_HEIGHT = 50;
var TEXT_STATUS = ["pulling", "loosing", "success"];
var pullRefreshProps = {
  disabled: Boolean,
  modelValue: Boolean,
  headHeight: makeNumericProp(DEFAULT_HEAD_HEIGHT),
  successText: String,
  pullingText: String,
  loosingText: String,
  loadingText: String,
  pullDistance: numericProp,
  successDuration: makeNumericProp(500),
  animationDuration: makeNumericProp(300)
};
var stdin_default84 = defineComponent({
  name: name80,
  props: pullRefreshProps,
  emits: ["change", "refresh", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    let reachTop;
    const root = ref();
    const track = ref();
    const scrollParent = useScrollParent(root);
    const state = reactive({
      status: "normal",
      distance: 0,
      duration: 0
    });
    const touch = useTouch();
    const getHeadStyle = () => {
      if (props.headHeight !== DEFAULT_HEAD_HEIGHT) {
        return {
          height: `${props.headHeight}px`
        };
      }
    };
    const isTouchable = () => state.status !== "loading" && state.status !== "success" && !props.disabled;
    const ease = (distance) => {
      const pullDistance = +(props.pullDistance || props.headHeight);
      if (distance > pullDistance) {
        if (distance < pullDistance * 2) {
          distance = pullDistance + (distance - pullDistance) / 2;
        } else {
          distance = pullDistance * 1.5 + (distance - pullDistance * 2) / 4;
        }
      }
      return Math.round(distance);
    };
    const setStatus = (distance, isLoading) => {
      const pullDistance = +(props.pullDistance || props.headHeight);
      state.distance = distance;
      if (isLoading) {
        state.status = "loading";
      } else if (distance === 0) {
        state.status = "normal";
      } else if (distance < pullDistance) {
        state.status = "pulling";
      } else {
        state.status = "loosing";
      }
      emit("change", {
        status: state.status,
        distance
      });
    };
    const getStatusText = () => {
      const {
        status
      } = state;
      if (status === "normal") {
        return "";
      }
      return props[`${status}Text`] || t16(status);
    };
    const renderStatus = () => {
      const {
        status,
        distance
      } = state;
      if (slots[status]) {
        return slots[status]({
          distance
        });
      }
      const nodes = [];
      if (TEXT_STATUS.includes(status)) {
        nodes.push(createVNode("div", {
          "class": bem76("text")
        }, [getStatusText()]));
      }
      if (status === "loading") {
        nodes.push(createVNode(Loading, {
          "class": bem76("loading")
        }, {
          default: getStatusText
        }));
      }
      return nodes;
    };
    const showSuccessTip = () => {
      state.status = "success";
      setTimeout(() => {
        setStatus(0);
      }, +props.successDuration);
    };
    const checkPosition = (event) => {
      reachTop = getScrollTop(scrollParent.value) === 0;
      if (reachTop) {
        state.duration = 0;
        touch.start(event);
      }
    };
    const onTouchStart = (event) => {
      if (isTouchable()) {
        checkPosition(event);
      }
    };
    const onTouchMove = (event) => {
      if (isTouchable()) {
        if (!reachTop) {
          checkPosition(event);
        }
        const {
          deltaY
        } = touch;
        touch.move(event);
        if (reachTop && deltaY.value >= 0 && touch.isVertical()) {
          preventDefault(event);
          setStatus(ease(deltaY.value));
        }
      }
    };
    const onTouchEnd = () => {
      if (reachTop && touch.deltaY.value && isTouchable()) {
        state.duration = +props.animationDuration;
        if (state.status === "loosing") {
          setStatus(+props.headHeight, true);
          emit("update:modelValue", true);
          nextTick(() => emit("refresh"));
        } else {
          setStatus(0);
        }
      }
    };
    watch(() => props.modelValue, (value) => {
      state.duration = +props.animationDuration;
      if (value) {
        setStatus(+props.headHeight, true);
      } else if (slots.success || props.successText) {
        showSuccessTip();
      } else {
        setStatus(0, false);
      }
    });
    useEventListener("touchmove", onTouchMove, {
      target: track
    });
    return () => {
      var _a;
      const trackStyle = {
        transitionDuration: `${state.duration}ms`,
        transform: state.distance ? `translate3d(0,${state.distance}px, 0)` : ""
      };
      return createVNode("div", {
        "ref": root,
        "class": bem76()
      }, [createVNode("div", {
        "ref": track,
        "class": bem76("track"),
        "style": trackStyle,
        "onTouchstartPassive": onTouchStart,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [createVNode("div", {
        "class": bem76("head"),
        "style": getHeadStyle()
      }, [renderStatus()]), (_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/pull-refresh/index.mjs
var PullRefresh = withInstall(stdin_default84);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/rate/Rate.mjs
var [name81, bem77] = createNamespace("rate");
function getRateStatus(value, index, allowHalf, readonly) {
  if (value >= index) {
    return {
      status: "full",
      value: 1
    };
  }
  if (value + 0.5 >= index && allowHalf && !readonly) {
    return {
      status: "half",
      value: 0.5
    };
  }
  if (value + 1 >= index && allowHalf && readonly) {
    const cardinal = 10 ** 10;
    return {
      status: "half",
      value: Math.round((value - index + 1) * cardinal) / cardinal
    };
  }
  return {
    status: "void",
    value: 0
  };
}
var rateProps = {
  size: numericProp,
  icon: makeStringProp("star"),
  color: String,
  count: makeNumericProp(5),
  gutter: numericProp,
  readonly: Boolean,
  disabled: Boolean,
  voidIcon: makeStringProp("star-o"),
  allowHalf: Boolean,
  voidColor: String,
  touchable: truthProp,
  iconPrefix: String,
  modelValue: makeNumberProp(0),
  disabledColor: String
};
var stdin_default85 = defineComponent({
  name: name81,
  props: rateProps,
  emits: ["change", "update:modelValue"],
  setup(props, {
    emit
  }) {
    const touch = useTouch();
    const [itemRefs, setItemRefs] = useRefs();
    const groupRef = ref();
    const untouchable = () => props.readonly || props.disabled || !props.touchable;
    const list = computed(() => Array(+props.count).fill("").map((_, i) => getRateStatus(props.modelValue, i + 1, props.allowHalf, props.readonly)));
    let ranges;
    let groupRefRect;
    let minRectTop = Number.MAX_SAFE_INTEGER;
    let maxRectTop = Number.MIN_SAFE_INTEGER;
    const updateRanges = () => {
      groupRefRect = useRect(groupRef);
      const rects = itemRefs.value.map(useRect);
      ranges = [];
      rects.forEach((rect, index) => {
        minRectTop = Math.min(rect.top, minRectTop);
        maxRectTop = Math.max(rect.top, maxRectTop);
        if (props.allowHalf) {
          ranges.push({
            score: index + 0.5,
            left: rect.left,
            top: rect.top,
            height: rect.height
          }, {
            score: index + 1,
            left: rect.left + rect.width / 2,
            top: rect.top,
            height: rect.height
          });
        } else {
          ranges.push({
            score: index + 1,
            left: rect.left,
            top: rect.top,
            height: rect.height
          });
        }
      });
    };
    const getScoreByPosition = (x, y) => {
      for (let i = ranges.length - 1; i > 0; i--) {
        if (y >= groupRefRect.top && y <= groupRefRect.bottom) {
          if (x > ranges[i].left && y >= ranges[i].top && y <= ranges[i].top + ranges[i].height) {
            return ranges[i].score;
          }
        } else {
          const curTop = y < groupRefRect.top ? minRectTop : maxRectTop;
          if (x > ranges[i].left && ranges[i].top === curTop) {
            return ranges[i].score;
          }
        }
      }
      return props.allowHalf ? 0.5 : 1;
    };
    const select = (index) => {
      if (!props.disabled && !props.readonly && index !== props.modelValue) {
        emit("update:modelValue", index);
        emit("change", index);
      }
    };
    const onTouchStart = (event) => {
      if (untouchable()) {
        return;
      }
      touch.start(event);
      updateRanges();
    };
    const onTouchMove = (event) => {
      if (untouchable()) {
        return;
      }
      touch.move(event);
      if (touch.isHorizontal()) {
        const {
          clientX,
          clientY
        } = event.touches[0];
        preventDefault(event);
        select(getScoreByPosition(clientX, clientY));
      }
    };
    const renderStar = (item, index) => {
      const {
        icon,
        size,
        color,
        count,
        gutter,
        voidIcon,
        disabled,
        voidColor,
        allowHalf,
        iconPrefix,
        disabledColor
      } = props;
      const score = index + 1;
      const isFull = item.status === "full";
      const isVoid = item.status === "void";
      const renderHalf = allowHalf && item.value > 0 && item.value < 1;
      let style;
      if (gutter && score !== +count) {
        style = {
          paddingRight: addUnit(gutter)
        };
      }
      const onClickItem = (event) => {
        updateRanges();
        select(allowHalf ? getScoreByPosition(event.clientX, event.clientY) : score);
      };
      return createVNode("div", {
        "key": index,
        "ref": setItemRefs(index),
        "role": "radio",
        "style": style,
        "class": bem77("item"),
        "tabindex": disabled ? void 0 : 0,
        "aria-setsize": count,
        "aria-posinset": score,
        "aria-checked": !isVoid,
        "onClick": onClickItem
      }, [createVNode(Icon, {
        "size": size,
        "name": isFull ? icon : voidIcon,
        "class": bem77("icon", {
          disabled,
          full: isFull
        }),
        "color": disabled ? disabledColor : isFull ? color : voidColor,
        "classPrefix": iconPrefix
      }, null), renderHalf && createVNode(Icon, {
        "size": size,
        "style": {
          width: item.value + "em"
        },
        "name": isVoid ? voidIcon : icon,
        "class": bem77("icon", ["half", {
          disabled,
          full: !isVoid
        }]),
        "color": disabled ? disabledColor : isVoid ? voidColor : color,
        "classPrefix": iconPrefix
      }, null)]);
    };
    useCustomFieldValue(() => props.modelValue);
    useEventListener("touchmove", onTouchMove, {
      target: groupRef
    });
    return () => createVNode("div", {
      "ref": groupRef,
      "role": "radiogroup",
      "class": bem77({
        readonly: props.readonly,
        disabled: props.disabled
      }),
      "tabindex": props.disabled ? void 0 : 0,
      "aria-disabled": props.disabled,
      "aria-readonly": props.readonly,
      "onTouchstartPassive": onTouchStart
    }, [list.value.map(renderStar)]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/rate/index.mjs
var Rate = withInstall(stdin_default85);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/row/index.mjs
var Row = withInstall(stdin_default51);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/search/Search.mjs
var [name82, bem78, t17] = createNamespace("search");
var searchProps = extend({}, fieldSharedProps, {
  label: String,
  shape: makeStringProp("square"),
  leftIcon: makeStringProp("search"),
  clearable: truthProp,
  actionText: String,
  background: String,
  showAction: Boolean
});
var stdin_default86 = defineComponent({
  name: name82,
  props: searchProps,
  emits: ["blur", "focus", "clear", "search", "cancel", "clickInput", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const id = useId();
    const filedRef = ref();
    const onCancel = () => {
      if (!slots.action) {
        emit("update:modelValue", "");
        emit("cancel");
      }
    };
    const onKeypress = (event) => {
      const ENTER_CODE = 13;
      if (event.keyCode === ENTER_CODE) {
        preventDefault(event);
        emit("search", props.modelValue);
      }
    };
    const getInputId = () => props.id || `${id}-input`;
    const renderLabel = () => {
      if (slots.label || props.label) {
        return createVNode("label", {
          "class": bem78("label"),
          "for": getInputId()
        }, [slots.label ? slots.label() : props.label]);
      }
    };
    const renderAction = () => {
      if (props.showAction) {
        const text = props.actionText || t17("cancel");
        return createVNode("div", {
          "class": bem78("action"),
          "role": "button",
          "tabindex": 0,
          "onClick": onCancel
        }, [slots.action ? slots.action() : text]);
      }
    };
    const blur = () => {
      var _a;
      return (_a = filedRef.value) == null ? void 0 : _a.blur();
    };
    const focus = () => {
      var _a;
      return (_a = filedRef.value) == null ? void 0 : _a.focus();
    };
    const onBlur = (event) => emit("blur", event);
    const onFocus = (event) => emit("focus", event);
    const onClear = (event) => emit("clear", event);
    const onClickInput = (event) => emit("clickInput", event);
    const onClickLeftIcon = (event) => emit("clickLeftIcon", event);
    const onClickRightIcon = (event) => emit("clickRightIcon", event);
    const fieldPropNames = Object.keys(fieldSharedProps);
    const renderField = () => {
      const fieldAttrs = extend({}, attrs, pick(props, fieldPropNames), {
        id: getInputId()
      });
      const onInput = (value) => emit("update:modelValue", value);
      return createVNode(Field, mergeProps({
        "ref": filedRef,
        "type": "search",
        "class": bem78("field"),
        "border": false,
        "onBlur": onBlur,
        "onFocus": onFocus,
        "onClear": onClear,
        "onKeypress": onKeypress,
        "onClickInput": onClickInput,
        "onClickLeftIcon": onClickLeftIcon,
        "onClickRightIcon": onClickRightIcon,
        "onUpdate:modelValue": onInput
      }, fieldAttrs), pick(slots, ["left-icon", "right-icon"]));
    };
    useExpose({
      focus,
      blur
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": bem78({
          "show-action": props.showAction
        }),
        "style": {
          background: props.background
        }
      }, [(_a = slots.left) == null ? void 0 : _a.call(slots), createVNode("div", {
        "class": bem78("content", props.shape)
      }, [renderLabel(), renderField()]), renderAction()]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/search/index.mjs
var Search = withInstall(stdin_default86);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/share-sheet/ShareSheet.mjs
var popupInheritKeys3 = [...popupSharedPropKeys, "round", "closeOnPopstate", "safeAreaInsetBottom"];
var iconMap = {
  qq: "qq",
  link: "link-o",
  weibo: "weibo",
  qrcode: "qr",
  poster: "photo-o",
  wechat: "wechat",
  "weapp-qrcode": "miniprogram-o",
  "wechat-moments": "wechat-moments"
};
var [name83, bem79, t18] = createNamespace("share-sheet");
var shareSheetProps = extend({}, popupSharedProps, {
  title: String,
  round: truthProp,
  options: makeArrayProp(),
  cancelText: String,
  description: String,
  closeOnPopstate: truthProp,
  safeAreaInsetBottom: truthProp
});
var stdin_default87 = defineComponent({
  name: name83,
  props: shareSheetProps,
  emits: ["cancel", "select", "update:show"],
  setup(props, {
    emit,
    slots
  }) {
    const updateShow = (value) => emit("update:show", value);
    const onCancel = () => {
      updateShow(false);
      emit("cancel");
    };
    const onSelect = (option, index) => emit("select", option, index);
    const renderHeader = () => {
      const title = slots.title ? slots.title() : props.title;
      const description = slots.description ? slots.description() : props.description;
      if (title || description) {
        return createVNode("div", {
          "class": bem79("header")
        }, [title && createVNode("h2", {
          "class": bem79("title")
        }, [title]), description && createVNode("span", {
          "class": bem79("description")
        }, [description])]);
      }
    };
    const renderIcon = (icon) => {
      if (iconMap[icon]) {
        return createVNode("div", {
          "class": bem79("icon", [icon])
        }, [createVNode(Icon, {
          "name": iconMap[icon] || icon
        }, null)]);
      }
      return createVNode("img", {
        "src": icon,
        "class": bem79("image-icon")
      }, null);
    };
    const renderOption = (option, index) => {
      const {
        name: name210,
        icon,
        className,
        description
      } = option;
      return createVNode("div", {
        "role": "button",
        "tabindex": 0,
        "class": [bem79("option"), className, HAPTICS_FEEDBACK],
        "onClick": () => onSelect(option, index)
      }, [renderIcon(icon), name210 && createVNode("span", {
        "class": bem79("name")
      }, [name210]), description && createVNode("span", {
        "class": bem79("option-description")
      }, [description])]);
    };
    const renderOptions = (options, border) => createVNode("div", {
      "class": bem79("options", {
        border
      })
    }, [options.map(renderOption)]);
    const renderRows = () => {
      const {
        options
      } = props;
      if (Array.isArray(options[0])) {
        return options.map((item, index) => renderOptions(item, index !== 0));
      }
      return renderOptions(options);
    };
    const renderCancelButton = () => {
      var _a;
      const cancelText = (_a = props.cancelText) != null ? _a : t18("cancel");
      if (slots.cancel || cancelText) {
        return createVNode("button", {
          "type": "button",
          "class": bem79("cancel"),
          "onClick": onCancel
        }, [slots.cancel ? slots.cancel() : cancelText]);
      }
    };
    return () => createVNode(Popup, mergeProps({
      "class": bem79(),
      "position": "bottom",
      "onUpdate:show": updateShow
    }, pick(props, popupInheritKeys3)), {
      default: () => [renderHeader(), renderRows(), renderCancelButton()]
    });
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/share-sheet/index.mjs
var ShareSheet = withInstall(stdin_default87);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/sidebar/Sidebar.mjs
var [name84, bem80] = createNamespace("sidebar");
var SIDEBAR_KEY = Symbol(name84);
var sidebarProps = {
  modelValue: makeNumericProp(0)
};
var stdin_default88 = defineComponent({
  name: name84,
  props: sidebarProps,
  emits: ["change", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      linkChildren
    } = useChildren(SIDEBAR_KEY);
    const getActive = () => +props.modelValue;
    const setActive = (value) => {
      if (value !== getActive()) {
        emit("update:modelValue", value);
        emit("change", value);
      }
    };
    linkChildren({
      getActive,
      setActive
    });
    return () => {
      var _a;
      return createVNode("div", {
        "role": "tablist",
        "class": bem80()
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/sidebar/index.mjs
var Sidebar = withInstall(stdin_default88);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/sidebar-item/SidebarItem.mjs
var [name85, bem81] = createNamespace("sidebar-item");
var sidebarItemProps = extend({}, routeProps, {
  dot: Boolean,
  title: String,
  badge: numericProp,
  disabled: Boolean,
  badgeProps: Object
});
var stdin_default89 = defineComponent({
  name: name85,
  props: sidebarItemProps,
  emits: ["click"],
  setup(props, {
    emit,
    slots
  }) {
    const route2 = useRoute();
    const {
      parent,
      index
    } = useParent(SIDEBAR_KEY);
    if (!parent) {
      if (true) {
        console.error("[Vant] <SidebarItem> must be a child component of <Sidebar>.");
      }
      return;
    }
    const onClick = () => {
      if (props.disabled) {
        return;
      }
      emit("click", index.value);
      parent.setActive(index.value);
      route2();
    };
    return () => {
      const {
        dot,
        badge,
        title,
        disabled
      } = props;
      const selected = index.value === parent.getActive();
      return createVNode("div", {
        "role": "tab",
        "class": bem81({
          select: selected,
          disabled
        }),
        "tabindex": disabled ? void 0 : 0,
        "aria-selected": selected,
        "onClick": onClick
      }, [createVNode(Badge, mergeProps({
        "dot": dot,
        "class": bem81("text"),
        "content": badge
      }, props.badgeProps), {
        default: () => [slots.title ? slots.title() : title]
      })]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/sidebar-item/index.mjs
var SidebarItem = withInstall(stdin_default89);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/skeleton/SkeletonTitle.mjs
var [name86, bem82] = createNamespace("skeleton-title");
var skeletonTitleProps = {
  round: Boolean,
  titleWidth: numericProp
};
var stdin_default90 = defineComponent({
  name: name86,
  props: skeletonTitleProps,
  setup(props) {
    return () => createVNode("h3", {
      "class": bem82([{
        round: props.round
      }]),
      "style": {
        width: addUnit(props.titleWidth)
      }
    }, null);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/skeleton/SkeletonAvatar.mjs
var [name87, bem83] = createNamespace("skeleton-avatar");
var skeletonAvatarProps = {
  avatarSize: numericProp,
  avatarShape: makeStringProp("round")
};
var stdin_default91 = defineComponent({
  name: name87,
  props: skeletonAvatarProps,
  setup(props) {
    return () => createVNode("div", {
      "class": bem83([props.avatarShape]),
      "style": getSizeStyle(props.avatarSize)
    }, null);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/skeleton/SkeletonParagraph.mjs
var DEFAULT_ROW_WIDTH = "100%";
var skeletonParagraphProps = {
  round: Boolean,
  rowWidth: {
    type: numericProp,
    default: DEFAULT_ROW_WIDTH
  }
};
var [name88, bem84] = createNamespace("skeleton-paragraph");
var stdin_default92 = defineComponent({
  name: name88,
  props: skeletonParagraphProps,
  setup(props) {
    return () => createVNode("div", {
      "class": bem84([{
        round: props.round
      }]),
      "style": {
        width: props.rowWidth
      }
    }, null);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/skeleton/Skeleton.mjs
var [name89, bem85] = createNamespace("skeleton");
var DEFAULT_LAST_ROW_WIDTH = "60%";
var skeletonProps = {
  row: makeNumericProp(0),
  round: Boolean,
  title: Boolean,
  titleWidth: numericProp,
  avatar: Boolean,
  avatarSize: numericProp,
  avatarShape: makeStringProp("round"),
  loading: truthProp,
  animate: truthProp,
  rowWidth: {
    type: [Number, String, Array],
    default: DEFAULT_ROW_WIDTH
  }
};
var stdin_default93 = defineComponent({
  name: name89,
  inheritAttrs: false,
  props: skeletonProps,
  setup(props, {
    slots,
    attrs
  }) {
    const renderAvatar = () => {
      if (props.avatar) {
        return createVNode(stdin_default91, {
          "avatarShape": props.avatarShape,
          "avatarSize": props.avatarSize
        }, null);
      }
    };
    const renderTitle = () => {
      if (props.title) {
        return createVNode(stdin_default90, {
          "round": props.round,
          "titleWidth": props.titleWidth
        }, null);
      }
    };
    const getRowWidth = (index) => {
      const {
        rowWidth
      } = props;
      if (rowWidth === DEFAULT_ROW_WIDTH && index === +props.row - 1) {
        return DEFAULT_LAST_ROW_WIDTH;
      }
      if (Array.isArray(rowWidth)) {
        return rowWidth[index];
      }
      return rowWidth;
    };
    const renderRows = () => Array(+props.row).fill("").map((_, i) => createVNode(stdin_default92, {
      "key": i,
      "round": props.round,
      "rowWidth": addUnit(getRowWidth(i))
    }, null));
    const renderContents = () => {
      if (slots.template) {
        return slots.template();
      }
      return createVNode(Fragment, null, [renderAvatar(), createVNode("div", {
        "class": bem85("content")
      }, [renderTitle(), renderRows()])]);
    };
    return () => {
      var _a;
      if (!props.loading) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      return createVNode("div", mergeProps({
        "class": bem85({
          animate: props.animate,
          round: props.round
        })
      }, attrs), [renderContents()]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/skeleton/SkeletonImage.mjs
var [name90, bem86] = createNamespace("skeleton-image");
var skeletonImageProps = {
  imageSize: numericProp,
  imageShape: makeStringProp("square")
};
var stdin_default94 = defineComponent({
  name: name90,
  props: skeletonImageProps,
  setup(props) {
    return () => createVNode("div", {
      "class": bem86([props.imageShape]),
      "style": getSizeStyle(props.imageSize)
    }, [createVNode(Icon, {
      "name": "photo",
      "class": bem86("icon")
    }, null)]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/skeleton/index.mjs
var SkeletonImage = withInstall(stdin_default94);
var SkeletonTitle = withInstall(stdin_default90);
var SkeletonAvatar = withInstall(stdin_default91);
var SkeletonParagraph = withInstall(stdin_default92);
var Skeleton = withInstall(stdin_default93);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/slider/Slider.mjs
var [name91, bem87] = createNamespace("slider");
var sliderProps = {
  min: makeNumericProp(0),
  max: makeNumericProp(100),
  step: makeNumericProp(1),
  range: Boolean,
  reverse: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  vertical: Boolean,
  barHeight: numericProp,
  buttonSize: numericProp,
  activeColor: String,
  inactiveColor: String,
  modelValue: {
    type: [Number, Array],
    default: 0
  }
};
var stdin_default95 = defineComponent({
  name: name91,
  props: sliderProps,
  emits: ["change", "dragEnd", "dragStart", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    let buttonIndex;
    let current2;
    let startValue;
    const root = ref();
    const slider = ref();
    const dragStatus = ref();
    const touch = useTouch();
    const scope = computed(() => Number(props.max) - Number(props.min));
    const wrapperStyle = computed(() => {
      const crossAxis = props.vertical ? "width" : "height";
      return {
        background: props.inactiveColor,
        [crossAxis]: addUnit(props.barHeight)
      };
    });
    const isRange = (val) => props.range && Array.isArray(val);
    const calcMainAxis = () => {
      const {
        modelValue,
        min
      } = props;
      if (isRange(modelValue)) {
        return `${(modelValue[1] - modelValue[0]) * 100 / scope.value}%`;
      }
      return `${(modelValue - Number(min)) * 100 / scope.value}%`;
    };
    const calcOffset = () => {
      const {
        modelValue,
        min
      } = props;
      if (isRange(modelValue)) {
        return `${(modelValue[0] - Number(min)) * 100 / scope.value}%`;
      }
      return "0%";
    };
    const barStyle = computed(() => {
      const mainAxis = props.vertical ? "height" : "width";
      const style = {
        [mainAxis]: calcMainAxis(),
        background: props.activeColor
      };
      if (dragStatus.value) {
        style.transition = "none";
      }
      const getPositionKey = () => {
        if (props.vertical) {
          return props.reverse ? "bottom" : "top";
        }
        return props.reverse ? "right" : "left";
      };
      style[getPositionKey()] = calcOffset();
      return style;
    });
    const format3 = (value) => {
      const min = +props.min;
      const max = +props.max;
      const step = +props.step;
      value = clamp(value, min, max);
      const diff = Math.round((value - min) / step) * step;
      return addNumber(min, diff);
    };
    const handleRangeValue = (value) => {
      var _a, _b;
      const left2 = (_a = value[0]) != null ? _a : Number(props.min);
      const right2 = (_b = value[1]) != null ? _b : Number(props.max);
      return left2 > right2 ? [right2, left2] : [left2, right2];
    };
    const updateValue = (value, end2) => {
      if (isRange(value)) {
        value = handleRangeValue(value).map(format3);
      } else {
        value = format3(value);
      }
      if (!isSameValue(value, props.modelValue)) {
        emit("update:modelValue", value);
      }
      if (end2 && !isSameValue(value, startValue)) {
        emit("change", value);
      }
    };
    const onClick = (event) => {
      event.stopPropagation();
      if (props.disabled || props.readonly) {
        return;
      }
      const {
        min,
        reverse,
        vertical,
        modelValue
      } = props;
      const rect = useRect(root);
      const getDelta = () => {
        if (vertical) {
          if (reverse) {
            return rect.bottom - event.clientY;
          }
          return event.clientY - rect.top;
        }
        if (reverse) {
          return rect.right - event.clientX;
        }
        return event.clientX - rect.left;
      };
      const total = vertical ? rect.height : rect.width;
      const value = Number(min) + getDelta() / total * scope.value;
      if (isRange(modelValue)) {
        const [left2, right2] = modelValue;
        const middle = (left2 + right2) / 2;
        if (value <= middle) {
          updateValue([value, right2], true);
        } else {
          updateValue([left2, value], true);
        }
      } else {
        updateValue(value, true);
      }
    };
    const onTouchStart = (event) => {
      if (props.disabled || props.readonly) {
        return;
      }
      touch.start(event);
      current2 = props.modelValue;
      if (isRange(current2)) {
        startValue = current2.map(format3);
      } else {
        startValue = format3(current2);
      }
      dragStatus.value = "start";
    };
    const onTouchMove = (event) => {
      if (props.disabled || props.readonly) {
        return;
      }
      if (dragStatus.value === "start") {
        emit("dragStart", event);
      }
      preventDefault(event, true);
      touch.move(event);
      dragStatus.value = "dragging";
      const rect = useRect(root);
      const delta = props.vertical ? touch.deltaY.value : touch.deltaX.value;
      const total = props.vertical ? rect.height : rect.width;
      let diff = delta / total * scope.value;
      if (props.reverse) {
        diff = -diff;
      }
      if (isRange(startValue)) {
        const index = props.reverse ? 1 - buttonIndex : buttonIndex;
        current2[index] = startValue[index] + diff;
      } else {
        current2 = startValue + diff;
      }
      updateValue(current2);
    };
    const onTouchEnd = (event) => {
      if (props.disabled || props.readonly) {
        return;
      }
      if (dragStatus.value === "dragging") {
        updateValue(current2, true);
        emit("dragEnd", event);
      }
      dragStatus.value = "";
    };
    const getButtonClassName = (index) => {
      if (typeof index === "number") {
        const position = ["left", "right"];
        return bem87(`button-wrapper`, position[index]);
      }
      return bem87("button-wrapper", props.reverse ? "left" : "right");
    };
    const renderButtonContent = (value, index) => {
      if (typeof index === "number") {
        const slot = slots[index === 0 ? "left-button" : "right-button"];
        if (slot) {
          return slot({
            value
          });
        }
      }
      if (slots.button) {
        return slots.button({
          value
        });
      }
      return createVNode("div", {
        "class": bem87("button"),
        "style": getSizeStyle(props.buttonSize)
      }, null);
    };
    const renderButton = (index) => {
      const current22 = typeof index === "number" ? props.modelValue[index] : props.modelValue;
      return createVNode("div", {
        "ref": slider,
        "role": "slider",
        "class": getButtonClassName(index),
        "tabindex": props.disabled ? void 0 : 0,
        "aria-valuemin": props.min,
        "aria-valuenow": current22,
        "aria-valuemax": props.max,
        "aria-disabled": props.disabled || void 0,
        "aria-readonly": props.readonly || void 0,
        "aria-orientation": props.vertical ? "vertical" : "horizontal",
        "onTouchstartPassive": (event) => {
          if (typeof index === "number") {
            buttonIndex = index;
          }
          onTouchStart(event);
        },
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd,
        "onClick": stopPropagation
      }, [renderButtonContent(current22, index)]);
    };
    updateValue(props.modelValue);
    useCustomFieldValue(() => props.modelValue);
    useEventListener("touchmove", onTouchMove, {
      target: slider
    });
    return () => createVNode("div", {
      "ref": root,
      "style": wrapperStyle.value,
      "class": bem87({
        vertical: props.vertical,
        disabled: props.disabled
      }),
      "onClick": onClick
    }, [createVNode("div", {
      "class": bem87("bar"),
      "style": barStyle.value
    }, [props.range ? [renderButton(0), renderButton(1)] : renderButton()])]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/slider/index.mjs
var Slider = withInstall(stdin_default95);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/space/Space.mjs
var [name92, bem88] = createNamespace("space");
var spaceProps = {
  align: String,
  direction: {
    type: String,
    default: "horizontal"
  },
  size: {
    type: [Number, String, Array],
    default: 8
  },
  wrap: Boolean,
  fill: Boolean
};
function filterEmpty(children = []) {
  const nodes = [];
  children.forEach((child) => {
    if (Array.isArray(child)) {
      nodes.push(...child);
    } else if (child.type === Fragment) {
      nodes.push(...filterEmpty(child.children));
    } else {
      nodes.push(child);
    }
  });
  return nodes.filter((c) => {
    var _a;
    return !(c && (typeof Comment !== "undefined" && c.type === Comment || c.type === Fragment && ((_a = c.children) == null ? void 0 : _a.length) === 0 || c.type === Text && c.children.trim() === ""));
  });
}
var stdin_default96 = defineComponent({
  name: name92,
  props: spaceProps,
  setup(props, {
    slots
  }) {
    const mergedAlign = computed(() => {
      var _a;
      return (_a = props.align) != null ? _a : props.direction === "horizontal" ? "center" : "";
    });
    const getMargin = (size) => {
      if (typeof size === "number") {
        return size + "px";
      }
      return size;
    };
    const getMarginStyle = (isLast) => {
      const style = {};
      const marginRight = `${getMargin(Array.isArray(props.size) ? props.size[0] : props.size)}`;
      const marginBottom = `${getMargin(Array.isArray(props.size) ? props.size[1] : props.size)}`;
      if (isLast) {
        return props.wrap ? {
          marginBottom
        } : {};
      }
      if (props.direction === "horizontal") {
        style.marginRight = marginRight;
      }
      if (props.direction === "vertical" || props.wrap) {
        style.marginBottom = marginBottom;
      }
      return style;
    };
    return () => {
      var _a;
      const children = filterEmpty((_a = slots.default) == null ? void 0 : _a.call(slots));
      return createVNode("div", {
        "class": [bem88({
          [props.direction]: props.direction,
          [`align-${mergedAlign.value}`]: mergedAlign.value,
          wrap: props.wrap,
          fill: props.fill
        })]
      }, [children.map((c, i) => createVNode("div", {
        "key": `item-${i}`,
        "class": `${name92}-item`,
        "style": getMarginStyle(i === children.length - 1)
      }, [c]))]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/space/index.mjs
var Space = withInstall(stdin_default96);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/steps/Steps.mjs
var [name93, bem89] = createNamespace("steps");
var stepsProps = {
  active: makeNumericProp(0),
  direction: makeStringProp("horizontal"),
  activeIcon: makeStringProp("checked"),
  iconPrefix: String,
  finishIcon: String,
  activeColor: String,
  inactiveIcon: String,
  inactiveColor: String
};
var STEPS_KEY = Symbol(name93);
var stdin_default97 = defineComponent({
  name: name93,
  props: stepsProps,
  emits: ["clickStep"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      linkChildren
    } = useChildren(STEPS_KEY);
    const onClickStep = (index) => emit("clickStep", index);
    linkChildren({
      props,
      onClickStep
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": bem89([props.direction])
      }, [createVNode("div", {
        "class": bem89("items")
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/step/Step.mjs
var [name94, bem90] = createNamespace("step");
var stdin_default98 = defineComponent({
  name: name94,
  setup(props, {
    slots
  }) {
    const {
      parent,
      index
    } = useParent(STEPS_KEY);
    if (!parent) {
      if (true) {
        console.error("[Vant] <Step> must be a child component of <Steps>.");
      }
      return;
    }
    const parentProps = parent.props;
    const getStatus = () => {
      const active = +parentProps.active;
      if (index.value < active) {
        return "finish";
      }
      return index.value === active ? "process" : "waiting";
    };
    const isActive = () => getStatus() === "process";
    const lineStyle = computed(() => ({
      background: getStatus() === "finish" ? parentProps.activeColor : parentProps.inactiveColor
    }));
    const titleStyle = computed(() => {
      if (isActive()) {
        return {
          color: parentProps.activeColor
        };
      }
      if (getStatus() === "waiting") {
        return {
          color: parentProps.inactiveColor
        };
      }
    });
    const onClickStep = () => parent.onClickStep(index.value);
    const renderCircle = () => {
      const {
        iconPrefix,
        finishIcon,
        activeIcon,
        activeColor,
        inactiveIcon
      } = parentProps;
      if (isActive()) {
        if (slots["active-icon"]) {
          return slots["active-icon"]();
        }
        return createVNode(Icon, {
          "class": bem90("icon", "active"),
          "name": activeIcon,
          "color": activeColor,
          "classPrefix": iconPrefix
        }, null);
      }
      if (getStatus() === "finish" && (finishIcon || slots["finish-icon"])) {
        if (slots["finish-icon"]) {
          return slots["finish-icon"]();
        }
        return createVNode(Icon, {
          "class": bem90("icon", "finish"),
          "name": finishIcon,
          "color": activeColor,
          "classPrefix": iconPrefix
        }, null);
      }
      if (slots["inactive-icon"]) {
        return slots["inactive-icon"]();
      }
      if (inactiveIcon) {
        return createVNode(Icon, {
          "class": bem90("icon"),
          "name": inactiveIcon,
          "classPrefix": iconPrefix
        }, null);
      }
      return createVNode("i", {
        "class": bem90("circle"),
        "style": lineStyle.value
      }, null);
    };
    return () => {
      var _a;
      const status = getStatus();
      return createVNode("div", {
        "class": [BORDER, bem90([parentProps.direction, {
          [status]: status
        }])]
      }, [createVNode("div", {
        "class": bem90("title", {
          active: isActive()
        }),
        "style": titleStyle.value,
        "onClick": onClickStep
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), createVNode("div", {
        "class": bem90("circle-container"),
        "onClick": onClickStep
      }, [renderCircle()]), createVNode("div", {
        "class": bem90("line"),
        "style": lineStyle.value
      }, null)]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/step/index.mjs
var Step = withInstall(stdin_default98);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/stepper/Stepper.mjs
var [name95, bem91] = createNamespace("stepper");
var LONG_PRESS_INTERVAL = 200;
var isEqual = (value1, value2) => String(value1) === String(value2);
var stepperProps = {
  min: makeNumericProp(1),
  max: makeNumericProp(Infinity),
  name: makeNumericProp(""),
  step: makeNumericProp(1),
  theme: String,
  integer: Boolean,
  disabled: Boolean,
  showPlus: truthProp,
  showMinus: truthProp,
  showInput: truthProp,
  longPress: truthProp,
  autoFixed: truthProp,
  allowEmpty: Boolean,
  modelValue: numericProp,
  inputWidth: numericProp,
  buttonSize: numericProp,
  placeholder: String,
  disablePlus: Boolean,
  disableMinus: Boolean,
  disableInput: Boolean,
  beforeChange: Function,
  defaultValue: makeNumericProp(1),
  decimalLength: numericProp
};
var stdin_default99 = defineComponent({
  name: name95,
  props: stepperProps,
  emits: ["plus", "blur", "minus", "focus", "change", "overlimit", "update:modelValue"],
  setup(props, {
    emit
  }) {
    const format3 = (value, autoFixed = true) => {
      const {
        min,
        max,
        allowEmpty,
        decimalLength
      } = props;
      if (allowEmpty && value === "") {
        return value;
      }
      value = formatNumber(String(value), !props.integer);
      value = value === "" ? 0 : +value;
      value = Number.isNaN(value) ? +min : value;
      value = autoFixed ? Math.max(Math.min(+max, value), +min) : value;
      if (isDef(decimalLength)) {
        value = value.toFixed(+decimalLength);
      }
      return value;
    };
    const getInitialValue = () => {
      var _a;
      const defaultValue = (_a = props.modelValue) != null ? _a : props.defaultValue;
      const value = format3(defaultValue);
      if (!isEqual(value, props.modelValue)) {
        emit("update:modelValue", value);
      }
      return value;
    };
    let actionType;
    const inputRef = ref();
    const current2 = ref(getInitialValue());
    const minusDisabled = computed(() => props.disabled || props.disableMinus || current2.value <= +props.min);
    const plusDisabled = computed(() => props.disabled || props.disablePlus || current2.value >= +props.max);
    const inputStyle = computed(() => ({
      width: addUnit(props.inputWidth),
      height: addUnit(props.buttonSize)
    }));
    const buttonStyle = computed(() => getSizeStyle(props.buttonSize));
    const check = () => {
      const value = format3(current2.value);
      if (!isEqual(value, current2.value)) {
        current2.value = value;
      }
    };
    const setValue = (value) => {
      if (props.beforeChange) {
        callInterceptor(props.beforeChange, {
          args: [value],
          done() {
            current2.value = value;
          }
        });
      } else {
        current2.value = value;
      }
    };
    const onChange = () => {
      if (actionType === "plus" && plusDisabled.value || actionType === "minus" && minusDisabled.value) {
        emit("overlimit", actionType);
        return;
      }
      const diff = actionType === "minus" ? -props.step : +props.step;
      const value = format3(addNumber(+current2.value, diff));
      setValue(value);
      emit(actionType);
    };
    const onInput = (event) => {
      const input = event.target;
      const {
        value
      } = input;
      const {
        decimalLength
      } = props;
      let formatted = formatNumber(String(value), !props.integer);
      if (isDef(decimalLength) && formatted.includes(".")) {
        const pair = formatted.split(".");
        formatted = `${pair[0]}.${pair[1].slice(0, +decimalLength)}`;
      }
      if (props.beforeChange) {
        input.value = String(current2.value);
      } else if (!isEqual(value, formatted)) {
        input.value = formatted;
      }
      const isNumeric2 = formatted === String(+formatted);
      setValue(isNumeric2 ? +formatted : formatted);
    };
    const onFocus = (event) => {
      var _a;
      if (props.disableInput) {
        (_a = inputRef.value) == null ? void 0 : _a.blur();
      } else {
        emit("focus", event);
      }
    };
    const onBlur = (event) => {
      const input = event.target;
      const value = format3(input.value, props.autoFixed);
      input.value = String(value);
      current2.value = value;
      nextTick(() => {
        emit("blur", event);
        resetScroll();
      });
    };
    let isLongPress;
    let longPressTimer;
    const longPressStep = () => {
      longPressTimer = setTimeout(() => {
        onChange();
        longPressStep();
      }, LONG_PRESS_INTERVAL);
    };
    const onTouchStart = () => {
      if (props.longPress) {
        isLongPress = false;
        clearTimeout(longPressTimer);
        longPressTimer = setTimeout(() => {
          isLongPress = true;
          onChange();
          longPressStep();
        }, LONG_PRESS_START_TIME);
      }
    };
    const onTouchEnd = (event) => {
      if (props.longPress) {
        clearTimeout(longPressTimer);
        if (isLongPress) {
          preventDefault(event);
        }
      }
    };
    const onMousedown = (event) => {
      if (props.disableInput) {
        preventDefault(event);
      }
    };
    const createListeners = (type) => ({
      onClick: (event) => {
        preventDefault(event);
        actionType = type;
        onChange();
      },
      onTouchstartPassive: () => {
        actionType = type;
        onTouchStart();
      },
      onTouchend: onTouchEnd,
      onTouchcancel: onTouchEnd
    });
    watch(() => [props.max, props.min, props.integer, props.decimalLength], check);
    watch(() => props.modelValue, (value) => {
      if (!isEqual(value, current2.value)) {
        current2.value = format3(value);
      }
    });
    watch(current2, (value) => {
      emit("update:modelValue", value);
      emit("change", value, {
        name: props.name
      });
    });
    useCustomFieldValue(() => props.modelValue);
    return () => createVNode("div", {
      "role": "group",
      "class": bem91([props.theme])
    }, [withDirectives(createVNode("button", mergeProps({
      "type": "button",
      "style": buttonStyle.value,
      "class": [bem91("minus", {
        disabled: minusDisabled.value
      }), {
        [HAPTICS_FEEDBACK]: !minusDisabled.value
      }],
      "aria-disabled": minusDisabled.value || void 0
    }, createListeners("minus")), null), [[vShow, props.showMinus]]), withDirectives(createVNode("input", {
      "ref": inputRef,
      "type": props.integer ? "tel" : "text",
      "role": "spinbutton",
      "class": bem91("input"),
      "value": current2.value,
      "style": inputStyle.value,
      "disabled": props.disabled,
      "readonly": props.disableInput,
      "inputmode": props.integer ? "numeric" : "decimal",
      "placeholder": props.placeholder,
      "aria-valuemax": props.max,
      "aria-valuemin": props.min,
      "aria-valuenow": current2.value,
      "onBlur": onBlur,
      "onInput": onInput,
      "onFocus": onFocus,
      "onMousedown": onMousedown
    }, null), [[vShow, props.showInput]]), withDirectives(createVNode("button", mergeProps({
      "type": "button",
      "style": buttonStyle.value,
      "class": [bem91("plus", {
        disabled: plusDisabled.value
      }), {
        [HAPTICS_FEEDBACK]: !plusDisabled.value
      }],
      "aria-disabled": plusDisabled.value || void 0
    }, createListeners("plus")), null), [[vShow, props.showPlus]])]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/stepper/index.mjs
var Stepper = withInstall(stdin_default99);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/steps/index.mjs
var Steps = withInstall(stdin_default97);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/submit-bar/SubmitBar.mjs
var [name96, bem92, t19] = createNamespace("submit-bar");
var submitBarProps = {
  tip: String,
  label: String,
  price: Number,
  tipIcon: String,
  loading: Boolean,
  currency: makeStringProp("¥"),
  disabled: Boolean,
  textAlign: String,
  buttonText: String,
  buttonType: makeStringProp("danger"),
  buttonColor: String,
  suffixLabel: String,
  placeholder: Boolean,
  decimalLength: makeNumericProp(2),
  safeAreaInsetBottom: truthProp
};
var stdin_default100 = defineComponent({
  name: name96,
  props: submitBarProps,
  emits: ["submit"],
  setup(props, {
    emit,
    slots
  }) {
    const root = ref();
    const renderPlaceholder = usePlaceholder(root, bem92);
    const renderText = () => {
      const {
        price,
        label,
        currency,
        textAlign,
        suffixLabel,
        decimalLength
      } = props;
      if (typeof price === "number") {
        const pricePair = (price / 100).toFixed(+decimalLength).split(".");
        const decimal = decimalLength ? `.${pricePair[1]}` : "";
        return createVNode("div", {
          "class": bem92("text"),
          "style": {
            textAlign
          }
        }, [createVNode("span", null, [label || t19("label")]), createVNode("span", {
          "class": bem92("price")
        }, [currency, createVNode("span", {
          "class": bem92("price-integer")
        }, [pricePair[0]]), decimal]), suffixLabel && createVNode("span", {
          "class": bem92("suffix-label")
        }, [suffixLabel])]);
      }
    };
    const renderTip = () => {
      var _a;
      const {
        tip,
        tipIcon
      } = props;
      if (slots.tip || tip) {
        return createVNode("div", {
          "class": bem92("tip")
        }, [tipIcon && createVNode(Icon, {
          "class": bem92("tip-icon"),
          "name": tipIcon
        }, null), tip && createVNode("span", {
          "class": bem92("tip-text")
        }, [tip]), (_a = slots.tip) == null ? void 0 : _a.call(slots)]);
      }
    };
    const onClickButton = () => emit("submit");
    const renderButton = () => {
      if (slots.button) {
        return slots.button();
      }
      return createVNode(Button, {
        "round": true,
        "type": props.buttonType,
        "text": props.buttonText,
        "class": bem92("button", props.buttonType),
        "color": props.buttonColor,
        "loading": props.loading,
        "disabled": props.disabled,
        "onClick": onClickButton
      }, null);
    };
    const renderSubmitBar = () => {
      var _a, _b;
      return createVNode("div", {
        "ref": root,
        "class": [bem92(), {
          "van-safe-area-bottom": props.safeAreaInsetBottom
        }]
      }, [(_a = slots.top) == null ? void 0 : _a.call(slots), renderTip(), createVNode("div", {
        "class": bem92("bar")
      }, [(_b = slots.default) == null ? void 0 : _b.call(slots), renderText(), renderButton()])]);
    };
    return () => {
      if (props.placeholder) {
        return renderPlaceholder(renderSubmitBar);
      }
      return renderSubmitBar();
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/submit-bar/index.mjs
var SubmitBar = withInstall(stdin_default100);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/swipe-cell/SwipeCell.mjs
var [name97, bem93] = createNamespace("swipe-cell");
var swipeCellProps = {
  name: makeNumericProp(""),
  disabled: Boolean,
  leftWidth: numericProp,
  rightWidth: numericProp,
  beforeClose: Function,
  stopPropagation: Boolean
};
var stdin_default101 = defineComponent({
  name: name97,
  props: swipeCellProps,
  emits: ["open", "close", "click"],
  setup(props, {
    emit,
    slots
  }) {
    let opened;
    let lockClick2;
    let startOffset;
    const root = ref();
    const leftRef = ref();
    const rightRef = ref();
    const state = reactive({
      offset: 0,
      dragging: false
    });
    const touch = useTouch();
    const getWidthByRef = (ref2) => ref2.value ? useRect(ref2).width : 0;
    const leftWidth = computed(() => isDef(props.leftWidth) ? +props.leftWidth : getWidthByRef(leftRef));
    const rightWidth = computed(() => isDef(props.rightWidth) ? +props.rightWidth : getWidthByRef(rightRef));
    const open = (side) => {
      state.offset = side === "left" ? leftWidth.value : -rightWidth.value;
      if (!opened) {
        opened = true;
        emit("open", {
          name: props.name,
          position: side
        });
      }
    };
    const close = (position) => {
      state.offset = 0;
      if (opened) {
        opened = false;
        emit("close", {
          name: props.name,
          position
        });
      }
    };
    const toggle = (side) => {
      const offset2 = Math.abs(state.offset);
      const THRESHOLD = 0.15;
      const threshold = opened ? 1 - THRESHOLD : THRESHOLD;
      const width2 = side === "left" ? leftWidth.value : rightWidth.value;
      if (width2 && offset2 > width2 * threshold) {
        open(side);
      } else {
        close(side);
      }
    };
    const onTouchStart = (event) => {
      if (!props.disabled) {
        startOffset = state.offset;
        touch.start(event);
      }
    };
    const onTouchMove = (event) => {
      if (props.disabled) {
        return;
      }
      const {
        deltaX
      } = touch;
      touch.move(event);
      if (touch.isHorizontal()) {
        lockClick2 = true;
        state.dragging = true;
        const isEdge = !opened || deltaX.value * startOffset < 0;
        if (isEdge) {
          preventDefault(event, props.stopPropagation);
        }
        state.offset = clamp(deltaX.value + startOffset, -rightWidth.value, leftWidth.value);
      }
    };
    const onTouchEnd = () => {
      if (state.dragging) {
        state.dragging = false;
        toggle(state.offset > 0 ? "left" : "right");
        setTimeout(() => {
          lockClick2 = false;
        }, 0);
      }
    };
    const onClick = (position = "outside") => {
      emit("click", position);
      if (opened && !lockClick2) {
        callInterceptor(props.beforeClose, {
          args: [{
            name: props.name,
            position
          }],
          done: () => close(position)
        });
      }
    };
    const getClickHandler = (position, stop) => (event) => {
      if (stop) {
        event.stopPropagation();
      }
      onClick(position);
    };
    const renderSideContent = (side, ref2) => {
      const contentSlot = slots[side];
      if (contentSlot) {
        return createVNode("div", {
          "ref": ref2,
          "class": bem93(side),
          "onClick": getClickHandler(side, true)
        }, [contentSlot()]);
      }
    };
    useExpose({
      open,
      close
    });
    useClickAway(root, () => onClick("outside"), {
      eventName: "touchstart"
    });
    useEventListener("touchmove", onTouchMove, {
      target: root
    });
    return () => {
      var _a;
      const wrapperStyle = {
        transform: `translate3d(${state.offset}px, 0, 0)`,
        transitionDuration: state.dragging ? "0s" : ".6s"
      };
      return createVNode("div", {
        "ref": root,
        "class": bem93(),
        "onClick": getClickHandler("cell", lockClick2),
        "onTouchstartPassive": onTouchStart,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [createVNode("div", {
        "class": bem93("wrapper"),
        "style": wrapperStyle
      }, [renderSideContent("left", leftRef), (_a = slots.default) == null ? void 0 : _a.call(slots), renderSideContent("right", rightRef)])]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/swipe-cell/index.mjs
var SwipeCell = withInstall(stdin_default101);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tabbar/Tabbar.mjs
var [name98, bem94] = createNamespace("tabbar");
var tabbarProps = {
  route: Boolean,
  fixed: truthProp,
  border: truthProp,
  zIndex: numericProp,
  placeholder: Boolean,
  activeColor: String,
  beforeChange: Function,
  inactiveColor: String,
  modelValue: makeNumericProp(0),
  safeAreaInsetBottom: {
    type: Boolean,
    default: null
  }
};
var TABBAR_KEY = Symbol(name98);
var stdin_default102 = defineComponent({
  name: name98,
  props: tabbarProps,
  emits: ["change", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const root = ref();
    const {
      linkChildren
    } = useChildren(TABBAR_KEY);
    const renderPlaceholder = usePlaceholder(root, bem94);
    const enableSafeArea = () => {
      var _a;
      return (_a = props.safeAreaInsetBottom) != null ? _a : props.fixed;
    };
    const renderTabbar = () => {
      var _a;
      const {
        fixed,
        zIndex,
        border
      } = props;
      return createVNode("div", {
        "ref": root,
        "role": "tablist",
        "style": getZIndexStyle(zIndex),
        "class": [bem94({
          fixed
        }), {
          [BORDER_TOP_BOTTOM]: border,
          "van-safe-area-bottom": enableSafeArea()
        }]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
    const setActive = (active, afterChange) => {
      callInterceptor(props.beforeChange, {
        args: [active],
        done() {
          emit("update:modelValue", active);
          emit("change", active);
          afterChange();
        }
      });
    };
    linkChildren({
      props,
      setActive
    });
    return () => {
      if (props.fixed && props.placeholder) {
        return renderPlaceholder(renderTabbar);
      }
      return renderTabbar();
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tabbar/index.mjs
var Tabbar = withInstall(stdin_default102);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tabbar-item/TabbarItem.mjs
var [name99, bem95] = createNamespace("tabbar-item");
var tabbarItemProps = extend({}, routeProps, {
  dot: Boolean,
  icon: String,
  name: numericProp,
  badge: numericProp,
  badgeProps: Object,
  iconPrefix: String
});
var stdin_default103 = defineComponent({
  name: name99,
  props: tabbarItemProps,
  emits: ["click"],
  setup(props, {
    emit,
    slots
  }) {
    const route2 = useRoute();
    const vm = getCurrentInstance().proxy;
    const {
      parent,
      index
    } = useParent(TABBAR_KEY);
    if (!parent) {
      if (true) {
        console.error("[Vant] <TabbarItem> must be a child component of <Tabbar>.");
      }
      return;
    }
    const active = computed(() => {
      var _a;
      const {
        route: route22,
        modelValue
      } = parent.props;
      if (route22 && "$route" in vm) {
        const {
          $route
        } = vm;
        const {
          to
        } = props;
        const config = isObject(to) ? to : {
          path: to
        };
        return !!$route.matched.find((val) => {
          const pathMatched = "path" in config && config.path === val.path;
          const nameMatched = "name" in config && config.name === val.name;
          return pathMatched || nameMatched;
        });
      }
      return ((_a = props.name) != null ? _a : index.value) === modelValue;
    });
    const onClick = (event) => {
      var _a;
      if (!active.value) {
        parent.setActive((_a = props.name) != null ? _a : index.value, route2);
      }
      emit("click", event);
    };
    const renderIcon = () => {
      if (slots.icon) {
        return slots.icon({
          active: active.value
        });
      }
      if (props.icon) {
        return createVNode(Icon, {
          "name": props.icon,
          "classPrefix": props.iconPrefix
        }, null);
      }
    };
    return () => {
      var _a;
      const {
        dot,
        badge
      } = props;
      const {
        activeColor,
        inactiveColor
      } = parent.props;
      const color = active.value ? activeColor : inactiveColor;
      return createVNode("div", {
        "role": "tab",
        "class": bem95({
          active: active.value
        }),
        "style": {
          color
        },
        "tabindex": 0,
        "aria-selected": active.value,
        "onClick": onClick
      }, [createVNode(Badge, mergeProps({
        "dot": dot,
        "class": bem95("icon"),
        "content": badge
      }, props.badgeProps), {
        default: renderIcon
      }), createVNode("div", {
        "class": bem95("text")
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
        active: active.value
      })])]);
    };
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tabbar-item/index.mjs
var TabbarItem = withInstall(stdin_default103);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/time-picker/TimePicker.mjs
var [name100] = createNamespace("time-picker");
var timePickerProps = extend({}, sharedProps, {
  minHour: makeNumericProp(0),
  maxHour: makeNumericProp(23),
  minMinute: makeNumericProp(0),
  maxMinute: makeNumericProp(59),
  minSecond: makeNumericProp(0),
  maxSecond: makeNumericProp(59),
  columnsType: {
    type: Array,
    default: () => ["hour", "minute"]
  }
});
var stdin_default104 = defineComponent({
  name: name100,
  props: timePickerProps,
  emits: ["confirm", "cancel", "change", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const currentValues = ref(props.modelValue);
    const columns = computed(() => props.columnsType.map((type) => {
      const {
        filter,
        formatter
      } = props;
      switch (type) {
        case "hour":
          return genOptions(+props.minHour, +props.maxHour, type, formatter, filter);
        case "minute":
          return genOptions(+props.minMinute, +props.maxMinute, type, formatter, filter);
        case "second":
          return genOptions(+props.minSecond, +props.maxSecond, type, formatter, filter);
        default:
          if (true) {
            throw new Error(`[Vant] DatePicker: unsupported columns type: ${type}`);
          }
          return [];
      }
    }));
    watch(currentValues, (newValues) => {
      if (!isSameValue(newValues, props.modelValue)) {
        emit("update:modelValue", newValues);
      }
    });
    watch(() => props.modelValue, (newValues) => {
      newValues = formatValueRange(newValues, columns.value);
      if (!isSameValue(newValues, currentValues.value)) {
        currentValues.value = newValues;
      }
    }, {
      immediate: true
    });
    const onChange = (...args) => emit("change", ...args);
    const onCancel = (...args) => emit("cancel", ...args);
    const onConfirm = (...args) => emit("confirm", ...args);
    return () => createVNode(Picker, mergeProps({
      "modelValue": currentValues.value,
      "onUpdate:modelValue": ($event) => currentValues.value = $event,
      "columns": columns.value,
      "onChange": onChange,
      "onCancel": onCancel,
      "onConfirm": onConfirm
    }, pick(props, pickerInheritKeys)), slots);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/time-picker/index.mjs
var TimePicker = withInstall(stdin_default104);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tree-select/TreeSelect.mjs
var [name101, bem96] = createNamespace("tree-select");
var treeSelectProps = {
  max: makeNumericProp(Infinity),
  items: makeArrayProp(),
  height: makeNumericProp(300),
  selectedIcon: makeStringProp("success"),
  mainActiveIndex: makeNumericProp(0),
  activeId: {
    type: [Number, String, Array],
    default: 0
  }
};
var stdin_default105 = defineComponent({
  name: name101,
  props: treeSelectProps,
  emits: ["clickNav", "clickItem", "update:activeId", "update:mainActiveIndex"],
  setup(props, {
    emit,
    slots
  }) {
    const isActiveItem = (id) => Array.isArray(props.activeId) ? props.activeId.includes(id) : props.activeId === id;
    const renderSubItem = (item) => {
      const onClick = () => {
        if (item.disabled) {
          return;
        }
        let activeId;
        if (Array.isArray(props.activeId)) {
          activeId = props.activeId.slice();
          const index = activeId.indexOf(item.id);
          if (index !== -1) {
            activeId.splice(index, 1);
          } else if (activeId.length < props.max) {
            activeId.push(item.id);
          }
        } else {
          activeId = item.id;
        }
        emit("update:activeId", activeId);
        emit("clickItem", item);
      };
      return createVNode("div", {
        "key": item.id,
        "class": ["van-ellipsis", bem96("item", {
          active: isActiveItem(item.id),
          disabled: item.disabled
        })],
        "onClick": onClick
      }, [item.text, isActiveItem(item.id) && createVNode(Icon, {
        "name": props.selectedIcon,
        "class": bem96("selected")
      }, null)]);
    };
    const onSidebarChange = (index) => {
      emit("update:mainActiveIndex", index);
    };
    const onClickSidebarItem = (index) => emit("clickNav", index);
    const renderSidebar = () => {
      const Items = props.items.map((item) => createVNode(SidebarItem, {
        "dot": item.dot,
        "title": item.text,
        "badge": item.badge,
        "class": [bem96("nav-item"), item.className],
        "disabled": item.disabled,
        "onClick": onClickSidebarItem
      }, null));
      return createVNode(Sidebar, {
        "class": bem96("nav"),
        "modelValue": props.mainActiveIndex,
        "onChange": onSidebarChange
      }, {
        default: () => [Items]
      });
    };
    const renderContent = () => {
      if (slots.content) {
        return slots.content();
      }
      const selected = props.items[+props.mainActiveIndex] || {};
      if (selected.children) {
        return selected.children.map(renderSubItem);
      }
    };
    return () => createVNode("div", {
      "class": bem96(),
      "style": {
        height: addUnit(props.height)
      }
    }, [renderSidebar(), createVNode("div", {
      "class": bem96("content")
    }, [renderContent()])]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/tree-select/index.mjs
var TreeSelect = withInstall(stdin_default105);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/uploader/utils.mjs
var [name102, bem97, t20] = createNamespace("uploader");
function readFileContent(file, resultType) {
  return new Promise((resolve) => {
    if (resultType === "file") {
      resolve();
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    if (resultType === "dataUrl") {
      reader.readAsDataURL(file);
    } else if (resultType === "text") {
      reader.readAsText(file);
    }
  });
}
function isOversize(items, maxSize) {
  return toArray(items).some((item) => {
    if (item.file) {
      if (isFunction(maxSize)) {
        return maxSize(item.file);
      }
      return item.file.size > maxSize;
    }
    return false;
  });
}
function filterFiles(items, maxSize) {
  const valid = [];
  const invalid = [];
  items.forEach((item) => {
    if (isOversize(item, maxSize)) {
      invalid.push(item);
    } else {
      valid.push(item);
    }
  });
  return { valid, invalid };
}
var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
var isImageUrl = (url) => IMAGE_REGEXP.test(url);
function isImageFile(item) {
  if (item.isImage) {
    return true;
  }
  if (item.file && item.file.type) {
    return item.file.type.indexOf("image") === 0;
  }
  if (item.url) {
    return isImageUrl(item.url);
  }
  if (typeof item.content === "string") {
    return item.content.indexOf("data:image") === 0;
  }
  return false;
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/uploader/UploaderPreviewItem.mjs
var stdin_default106 = defineComponent({
  props: {
    name: numericProp,
    item: makeRequiredProp(Object),
    index: Number,
    imageFit: String,
    lazyLoad: Boolean,
    deletable: Boolean,
    previewSize: [Number, String, Array],
    beforeDelete: Function
  },
  emits: ["delete", "preview"],
  setup(props, {
    emit,
    slots
  }) {
    const renderMask = () => {
      const {
        status,
        message
      } = props.item;
      if (status === "uploading" || status === "failed") {
        const MaskIcon = status === "failed" ? createVNode(Icon, {
          "name": "close",
          "class": bem97("mask-icon")
        }, null) : createVNode(Loading, {
          "class": bem97("loading")
        }, null);
        const showMessage = isDef(message) && message !== "";
        return createVNode("div", {
          "class": bem97("mask")
        }, [MaskIcon, showMessage && createVNode("div", {
          "class": bem97("mask-message")
        }, [message])]);
      }
    };
    const onDelete = (event) => {
      const {
        name: name103,
        item,
        index,
        beforeDelete
      } = props;
      event.stopPropagation();
      callInterceptor(beforeDelete, {
        args: [item, {
          name: name103,
          index
        }],
        done: () => emit("delete")
      });
    };
    const onPreview = () => emit("preview");
    const renderDeleteIcon = () => {
      if (props.deletable && props.item.status !== "uploading") {
        const slot = slots["preview-delete"];
        return createVNode("div", {
          "role": "button",
          "class": bem97("preview-delete", {
            shadow: !slot
          }),
          "tabindex": 0,
          "aria-label": t20("delete"),
          "onClick": onDelete
        }, [slot ? slot() : createVNode(Icon, {
          "name": "cross",
          "class": bem97("preview-delete-icon")
        }, null)]);
      }
    };
    const renderCover = () => {
      if (slots["preview-cover"]) {
        const {
          index,
          item
        } = props;
        return createVNode("div", {
          "class": bem97("preview-cover")
        }, [slots["preview-cover"](extend({
          index
        }, item))]);
      }
    };
    const renderPreview = () => {
      const {
        item,
        lazyLoad,
        imageFit,
        previewSize
      } = props;
      if (isImageFile(item)) {
        return createVNode(Image2, {
          "fit": imageFit,
          "src": item.content || item.url,
          "class": bem97("preview-image"),
          "width": Array.isArray(previewSize) ? previewSize[0] : previewSize,
          "height": Array.isArray(previewSize) ? previewSize[1] : previewSize,
          "lazyLoad": lazyLoad,
          "onClick": onPreview
        }, {
          default: renderCover
        });
      }
      return createVNode("div", {
        "class": bem97("file"),
        "style": getSizeStyle(props.previewSize)
      }, [createVNode(Icon, {
        "class": bem97("file-icon"),
        "name": "description"
      }, null), createVNode("div", {
        "class": [bem97("file-name"), "van-ellipsis"]
      }, [item.file ? item.file.name : item.url]), renderCover()]);
    };
    return () => createVNode("div", {
      "class": bem97("preview")
    }, [renderPreview(), renderMask(), renderDeleteIcon()]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/uploader/Uploader.mjs
var uploaderProps = {
  name: makeNumericProp(""),
  accept: makeStringProp("image/*"),
  capture: String,
  multiple: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  lazyLoad: Boolean,
  maxCount: makeNumericProp(Infinity),
  imageFit: makeStringProp("cover"),
  resultType: makeStringProp("dataUrl"),
  uploadIcon: makeStringProp("photograph"),
  uploadText: String,
  deletable: truthProp,
  afterRead: Function,
  showUpload: truthProp,
  modelValue: makeArrayProp(),
  beforeRead: Function,
  beforeDelete: Function,
  previewSize: [Number, String, Array],
  previewImage: truthProp,
  previewOptions: Object,
  previewFullImage: truthProp,
  maxSize: {
    type: [Number, String, Function],
    default: Infinity
  }
};
var stdin_default107 = defineComponent({
  name: name102,
  props: uploaderProps,
  emits: ["delete", "oversize", "clickUpload", "closePreview", "clickPreview", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const inputRef = ref();
    const urls = [];
    const getDetail = (index = props.modelValue.length) => ({
      name: props.name,
      index
    });
    const resetInput = () => {
      if (inputRef.value) {
        inputRef.value.value = "";
      }
    };
    const onAfterRead = (items) => {
      resetInput();
      if (isOversize(items, props.maxSize)) {
        if (Array.isArray(items)) {
          const result = filterFiles(items, props.maxSize);
          items = result.valid;
          emit("oversize", result.invalid, getDetail());
          if (!items.length) {
            return;
          }
        } else {
          emit("oversize", items, getDetail());
          return;
        }
      }
      items = reactive(items);
      emit("update:modelValue", [...props.modelValue, ...toArray(items)]);
      if (props.afterRead) {
        props.afterRead(items, getDetail());
      }
    };
    const readFile = (files) => {
      const {
        maxCount,
        modelValue,
        resultType
      } = props;
      if (Array.isArray(files)) {
        const remainCount = +maxCount - modelValue.length;
        if (files.length > remainCount) {
          files = files.slice(0, remainCount);
        }
        Promise.all(files.map((file) => readFileContent(file, resultType))).then((contents) => {
          const fileList = files.map((file, index) => {
            const result = {
              file,
              status: "",
              message: ""
            };
            if (contents[index]) {
              result.content = contents[index];
            }
            return result;
          });
          onAfterRead(fileList);
        });
      } else {
        readFileContent(files, resultType).then((content) => {
          const result = {
            file: files,
            status: "",
            message: ""
          };
          if (content) {
            result.content = content;
          }
          onAfterRead(result);
        });
      }
    };
    const onChange = (event) => {
      const {
        files
      } = event.target;
      if (props.disabled || !files || !files.length) {
        return;
      }
      const file = files.length === 1 ? files[0] : [].slice.call(files);
      if (props.beforeRead) {
        const response = props.beforeRead(file, getDetail());
        if (!response) {
          resetInput();
          return;
        }
        if (isPromise(response)) {
          response.then((data) => {
            if (data) {
              readFile(data);
            } else {
              readFile(file);
            }
          }).catch(resetInput);
          return;
        }
      }
      readFile(file);
    };
    let imagePreview;
    const onClosePreview = () => emit("closePreview");
    const previewImage = (item) => {
      if (props.previewFullImage) {
        const imageFiles = props.modelValue.filter(isImageFile);
        const images = imageFiles.map((item2) => {
          if (item2.file && !item2.url && item2.status !== "failed") {
            item2.url = URL.createObjectURL(item2.file);
            urls.push(item2.url);
          }
          return item2.url;
        }).filter(Boolean);
        imagePreview = showImagePreview(extend({
          images,
          startPosition: imageFiles.indexOf(item),
          onClose: onClosePreview
        }, props.previewOptions));
      }
    };
    const closeImagePreview = () => {
      if (imagePreview) {
        imagePreview.close();
      }
    };
    const deleteFile = (item, index) => {
      const fileList = props.modelValue.slice(0);
      fileList.splice(index, 1);
      emit("update:modelValue", fileList);
      emit("delete", item, getDetail(index));
    };
    const renderPreviewItem = (item, index) => {
      const needPickData = ["imageFit", "deletable", "previewSize", "beforeDelete"];
      const previewData = extend(pick(props, needPickData), pick(item, needPickData, true));
      return createVNode(stdin_default106, mergeProps({
        "item": item,
        "index": index,
        "onClick": () => emit("clickPreview", item, getDetail(index)),
        "onDelete": () => deleteFile(item, index),
        "onPreview": () => previewImage(item)
      }, pick(props, ["name", "lazyLoad"]), previewData), pick(slots, ["preview-cover", "preview-delete"]));
    };
    const renderPreviewList = () => {
      if (props.previewImage) {
        return props.modelValue.map(renderPreviewItem);
      }
    };
    const onClickUpload = (event) => emit("clickUpload", event);
    const renderUpload = () => {
      if (props.modelValue.length >= props.maxCount) {
        return;
      }
      const Input = props.readonly ? null : createVNode("input", {
        "ref": inputRef,
        "type": "file",
        "class": bem97("input"),
        "accept": props.accept,
        "capture": props.capture,
        "multiple": props.multiple,
        "disabled": props.disabled,
        "onChange": onChange
      }, null);
      if (slots.default) {
        return createVNode("div", {
          "class": bem97("input-wrapper"),
          "onClick": onClickUpload
        }, [slots.default(), Input]);
      }
      return withDirectives(createVNode("div", {
        "class": bem97("upload", {
          readonly: props.readonly
        }),
        "style": getSizeStyle(props.previewSize),
        "onClick": onClickUpload
      }, [createVNode(Icon, {
        "name": props.uploadIcon,
        "class": bem97("upload-icon")
      }, null), props.uploadText && createVNode("span", {
        "class": bem97("upload-text")
      }, [props.uploadText]), Input]), [[vShow, props.showUpload]]);
    };
    const chooseFile = () => {
      if (inputRef.value && !props.disabled) {
        inputRef.value.click();
      }
    };
    onBeforeUnmount(() => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    });
    useExpose({
      chooseFile,
      closeImagePreview
    });
    useCustomFieldValue(() => props.modelValue);
    return () => createVNode("div", {
      "class": bem97()
    }, [createVNode("div", {
      "class": bem97("wrapper", {
        disabled: props.disabled
      })
    }, [renderPreviewList(), renderUpload()])]);
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/uploader/index.mjs
var Uploader = withInstall(stdin_default107);

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/lazyload/vue-lazyload/listener.mjs
var ReactiveListener = class {
  constructor({
    el,
    src,
    error,
    loading,
    bindType,
    $parent,
    options,
    cors,
    elRenderer,
    imageCache
  }) {
    this.el = el;
    this.src = src;
    this.error = error;
    this.loading = loading;
    this.bindType = bindType;
    this.attempt = 0;
    this.cors = cors;
    this.naturalHeight = 0;
    this.naturalWidth = 0;
    this.options = options;
    this.$parent = $parent;
    this.elRenderer = elRenderer;
    this.imageCache = imageCache;
    this.performanceData = {
      loadStart: 0,
      loadEnd: 0
    };
    this.filter();
    this.initState();
    this.render("loading", false);
  }
  initState() {
    if ("dataset" in this.el) {
      this.el.dataset.src = this.src;
    } else {
      this.el.setAttribute("data-src", this.src);
    }
    this.state = {
      loading: false,
      error: false,
      loaded: false,
      rendered: false
    };
  }
  record(event) {
    this.performanceData[event] = Date.now();
  }
  update({ src, loading, error }) {
    const oldSrc = this.src;
    this.src = src;
    this.loading = loading;
    this.error = error;
    this.filter();
    if (oldSrc !== this.src) {
      this.attempt = 0;
      this.initState();
    }
  }
  checkInView() {
    const rect = useRect(this.el);
    return rect.top < window.innerHeight * this.options.preLoad && rect.bottom > this.options.preLoadTop && rect.left < window.innerWidth * this.options.preLoad && rect.right > 0;
  }
  filter() {
    Object.keys(this.options.filter).forEach((key) => {
      this.options.filter[key](this, this.options);
    });
  }
  renderLoading(cb) {
    this.state.loading = true;
    loadImageAsync(
      {
        src: this.loading,
        cors: this.cors
      },
      () => {
        this.render("loading", false);
        this.state.loading = false;
        cb();
      },
      () => {
        cb();
        this.state.loading = false;
        if (!this.options.silent)
          console.warn(
            `[@vant/lazyload] load failed with loading image(${this.loading})`
          );
      }
    );
  }
  load(onFinish = noop) {
    if (this.attempt > this.options.attempt - 1 && this.state.error) {
      if (!this.options.silent) {
        console.log(
          `[@vant/lazyload] ${this.src} tried too more than ${this.options.attempt} times`
        );
      }
      onFinish();
      return;
    }
    if (this.state.rendered && this.state.loaded)
      return;
    if (this.imageCache.has(this.src)) {
      this.state.loaded = true;
      this.render("loaded", true);
      this.state.rendered = true;
      return onFinish();
    }
    this.renderLoading(() => {
      var _a, _b;
      this.attempt++;
      (_b = (_a = this.options.adapter).beforeLoad) == null ? void 0 : _b.call(_a, this, this.options);
      this.record("loadStart");
      loadImageAsync(
        {
          src: this.src,
          cors: this.cors
        },
        (data) => {
          this.naturalHeight = data.naturalHeight;
          this.naturalWidth = data.naturalWidth;
          this.state.loaded = true;
          this.state.error = false;
          this.record("loadEnd");
          this.render("loaded", false);
          this.state.rendered = true;
          this.imageCache.add(this.src);
          onFinish();
        },
        (err) => {
          !this.options.silent && console.error(err);
          this.state.error = true;
          this.state.loaded = false;
          this.render("error", false);
        }
      );
    });
  }
  render(state, cache) {
    this.elRenderer(this, state, cache);
  }
  performance() {
    let state = "loading";
    let time = 0;
    if (this.state.loaded) {
      state = "loaded";
      time = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3;
    }
    if (this.state.error)
      state = "error";
    return {
      src: this.src,
      state,
      time
    };
  }
  $destroy() {
    this.el = null;
    this.src = null;
    this.error = null;
    this.loading = null;
    this.bindType = null;
    this.attempt = 0;
  }
};

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/lazyload/vue-lazyload/lazy.mjs
var DEFAULT_URL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
var DEFAULT_EVENTS = [
  "scroll",
  "wheel",
  "mousewheel",
  "resize",
  "animationend",
  "transitionend",
  "touchmove"
];
var DEFAULT_OBSERVER_OPTIONS = {
  rootMargin: "0px",
  threshold: 0
};
function stdin_default108() {
  return class Lazy {
    constructor({
      preLoad,
      error,
      throttleWait,
      preLoadTop,
      dispatchEvent,
      loading,
      attempt,
      silent = true,
      scale,
      listenEvents,
      filter,
      adapter,
      observer,
      observerOptions
    }) {
      this.mode = modeType.event;
      this.listeners = [];
      this.targetIndex = 0;
      this.targets = [];
      this.options = {
        silent,
        dispatchEvent: !!dispatchEvent,
        throttleWait: throttleWait || 200,
        preLoad: preLoad || 1.3,
        preLoadTop: preLoadTop || 0,
        error: error || DEFAULT_URL,
        loading: loading || DEFAULT_URL,
        attempt: attempt || 3,
        scale: scale || getDPR(scale),
        ListenEvents: listenEvents || DEFAULT_EVENTS,
        supportWebp: supportWebp(),
        filter: filter || {},
        adapter: adapter || {},
        observer: !!observer,
        observerOptions: observerOptions || DEFAULT_OBSERVER_OPTIONS
      };
      this.initEvent();
      this.imageCache = new ImageCache({ max: 200 });
      this.lazyLoadHandler = throttle(
        this.lazyLoadHandler.bind(this),
        this.options.throttleWait
      );
      this.setMode(this.options.observer ? modeType.observer : modeType.event);
    }
    config(options = {}) {
      Object.assign(this.options, options);
    }
    performance() {
      return this.listeners.map((item) => item.performance());
    }
    addLazyBox(vm) {
      this.listeners.push(vm);
      if (inBrowser2) {
        this.addListenerTarget(window);
        this.observer && this.observer.observe(vm.el);
        if (vm.$el && vm.$el.parentNode) {
          this.addListenerTarget(vm.$el.parentNode);
        }
      }
    }
    add(el, binding, vnode) {
      if (this.listeners.some((item) => item.el === el)) {
        this.update(el, binding);
        return nextTick(this.lazyLoadHandler);
      }
      const value = this.valueFormatter(binding.value);
      let { src } = value;
      nextTick(() => {
        src = getBestSelectionFromSrcset(el, this.options.scale) || src;
        this.observer && this.observer.observe(el);
        const container = Object.keys(binding.modifiers)[0];
        let $parent;
        if (container) {
          $parent = vnode.context.$refs[container];
          $parent = $parent ? $parent.$el || $parent : document.getElementById(container);
        }
        if (!$parent) {
          $parent = getScrollParent(el);
        }
        const newListener = new ReactiveListener({
          bindType: binding.arg,
          $parent,
          el,
          src,
          loading: value.loading,
          error: value.error,
          cors: value.cors,
          elRenderer: this.elRenderer.bind(this),
          options: this.options,
          imageCache: this.imageCache
        });
        this.listeners.push(newListener);
        if (inBrowser2) {
          this.addListenerTarget(window);
          this.addListenerTarget($parent);
        }
        this.lazyLoadHandler();
        nextTick(() => this.lazyLoadHandler());
      });
    }
    update(el, binding, vnode) {
      const value = this.valueFormatter(binding.value);
      let { src } = value;
      src = getBestSelectionFromSrcset(el, this.options.scale) || src;
      const exist = this.listeners.find((item) => item.el === el);
      if (!exist) {
        this.add(el, binding, vnode);
      } else {
        exist.update({
          src,
          error: value.error,
          loading: value.loading
        });
      }
      if (this.observer) {
        this.observer.unobserve(el);
        this.observer.observe(el);
      }
      this.lazyLoadHandler();
      nextTick(() => this.lazyLoadHandler());
    }
    remove(el) {
      if (!el)
        return;
      this.observer && this.observer.unobserve(el);
      const existItem = this.listeners.find((item) => item.el === el);
      if (existItem) {
        this.removeListenerTarget(existItem.$parent);
        this.removeListenerTarget(window);
        remove(this.listeners, existItem);
        existItem.$destroy();
      }
    }
    removeComponent(vm) {
      if (!vm)
        return;
      remove(this.listeners, vm);
      this.observer && this.observer.unobserve(vm.el);
      if (vm.$parent && vm.$el.parentNode) {
        this.removeListenerTarget(vm.$el.parentNode);
      }
      this.removeListenerTarget(window);
    }
    setMode(mode) {
      if (!hasIntersectionObserver && mode === modeType.observer) {
        mode = modeType.event;
      }
      this.mode = mode;
      if (mode === modeType.event) {
        if (this.observer) {
          this.listeners.forEach((listener) => {
            this.observer.unobserve(listener.el);
          });
          this.observer = null;
        }
        this.targets.forEach((target) => {
          this.initListen(target.el, true);
        });
      } else {
        this.targets.forEach((target) => {
          this.initListen(target.el, false);
        });
        this.initIntersectionObserver();
      }
    }
    addListenerTarget(el) {
      if (!el)
        return;
      let target = this.targets.find((target2) => target2.el === el);
      if (!target) {
        target = {
          el,
          id: ++this.targetIndex,
          childrenCount: 1,
          listened: true
        };
        this.mode === modeType.event && this.initListen(target.el, true);
        this.targets.push(target);
      } else {
        target.childrenCount++;
      }
      return this.targetIndex;
    }
    removeListenerTarget(el) {
      this.targets.forEach((target, index) => {
        if (target.el === el) {
          target.childrenCount--;
          if (!target.childrenCount) {
            this.initListen(target.el, false);
            this.targets.splice(index, 1);
            target = null;
          }
        }
      });
    }
    initListen(el, start2) {
      this.options.ListenEvents.forEach(
        (evt) => (start2 ? on : off)(el, evt, this.lazyLoadHandler)
      );
    }
    initEvent() {
      this.Event = {
        listeners: {
          loading: [],
          loaded: [],
          error: []
        }
      };
      this.$on = (event, func) => {
        if (!this.Event.listeners[event])
          this.Event.listeners[event] = [];
        this.Event.listeners[event].push(func);
      };
      this.$once = (event, func) => {
        const on2 = (...args) => {
          this.$off(event, on2);
          func.apply(this, args);
        };
        this.$on(event, on2);
      };
      this.$off = (event, func) => {
        if (!func) {
          if (!this.Event.listeners[event])
            return;
          this.Event.listeners[event].length = 0;
          return;
        }
        remove(this.Event.listeners[event], func);
      };
      this.$emit = (event, context, inCache) => {
        if (!this.Event.listeners[event])
          return;
        this.Event.listeners[event].forEach((func) => func(context, inCache));
      };
    }
    lazyLoadHandler() {
      const freeList = [];
      this.listeners.forEach((listener) => {
        if (!listener.el || !listener.el.parentNode) {
          freeList.push(listener);
        }
        const catIn = listener.checkInView();
        if (!catIn)
          return;
        listener.load();
      });
      freeList.forEach((item) => {
        remove(this.listeners, item);
        item.$destroy();
      });
    }
    initIntersectionObserver() {
      if (!hasIntersectionObserver) {
        return;
      }
      this.observer = new IntersectionObserver(
        this.observerHandler.bind(this),
        this.options.observerOptions
      );
      if (this.listeners.length) {
        this.listeners.forEach((listener) => {
          this.observer.observe(listener.el);
        });
      }
    }
    observerHandler(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.listeners.forEach((listener) => {
            if (listener.el === entry.target) {
              if (listener.state.loaded)
                return this.observer.unobserve(listener.el);
              listener.load();
            }
          });
        }
      });
    }
    elRenderer(listener, state, cache) {
      if (!listener.el)
        return;
      const { el, bindType } = listener;
      let src;
      switch (state) {
        case "loading":
          src = listener.loading;
          break;
        case "error":
          src = listener.error;
          break;
        default:
          ({ src } = listener);
          break;
      }
      if (bindType) {
        el.style[bindType] = 'url("' + src + '")';
      } else if (el.getAttribute("src") !== src) {
        el.setAttribute("src", src);
      }
      el.setAttribute("lazy", state);
      this.$emit(state, listener, cache);
      this.options.adapter[state] && this.options.adapter[state](listener, this.options);
      if (this.options.dispatchEvent) {
        const event = new CustomEvent(state, {
          detail: listener
        });
        el.dispatchEvent(event);
      }
    }
    valueFormatter(value) {
      let src = value;
      let { loading, error } = this.options;
      if (isObject(value)) {
        if (!value.src && !this.options.silent) {
          console.error("[@vant/lazyload] miss src with " + value);
        }
        ({ src } = value);
        loading = value.loading || this.options.loading;
        error = value.error || this.options.error;
      }
      return {
        src,
        loading,
        error
      };
    }
  };
}

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/lazyload/vue-lazyload/lazy-component.mjs
var stdin_default109 = (lazy) => ({
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: ["show"],
  render() {
    return h(
      this.tag,
      this.show && this.$slots.default ? this.$slots.default() : null
    );
  },
  data() {
    return {
      el: null,
      state: {
        loaded: false
      },
      show: false
    };
  },
  mounted() {
    this.el = this.$el;
    lazy.addLazyBox(this);
    lazy.lazyLoadHandler();
  },
  beforeUnmount() {
    lazy.removeComponent(this);
  },
  methods: {
    checkInView() {
      const rect = useRect(this.$el);
      return inBrowser2 && rect.top < window.innerHeight * lazy.options.preLoad && rect.bottom > 0 && rect.left < window.innerWidth * lazy.options.preLoad && rect.right > 0;
    },
    load() {
      this.show = true;
      this.state.loaded = true;
      this.$emit("show", this);
    },
    destroy() {
      return this.$destroy;
    }
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/lazyload/vue-lazyload/lazy-container.mjs
var defaultOptions2 = {
  selector: "img"
};
var LazyContainer = class {
  constructor({ el, binding, vnode, lazy }) {
    this.el = null;
    this.vnode = vnode;
    this.binding = binding;
    this.options = {};
    this.lazy = lazy;
    this.queue = [];
    this.update({ el, binding });
  }
  update({ el, binding }) {
    this.el = el;
    this.options = Object.assign({}, defaultOptions2, binding.value);
    const imgs = this.getImgs();
    imgs.forEach((el2) => {
      this.lazy.add(
        el2,
        Object.assign({}, this.binding, {
          value: {
            src: "dataset" in el2 ? el2.dataset.src : el2.getAttribute("data-src"),
            error: ("dataset" in el2 ? el2.dataset.error : el2.getAttribute("data-error")) || this.options.error,
            loading: ("dataset" in el2 ? el2.dataset.loading : el2.getAttribute("data-loading")) || this.options.loading
          }
        }),
        this.vnode
      );
    });
  }
  getImgs() {
    return Array.from(this.el.querySelectorAll(this.options.selector));
  }
  clear() {
    const imgs = this.getImgs();
    imgs.forEach((el) => this.lazy.remove(el));
    this.vnode = null;
    this.binding = null;
    this.lazy = null;
  }
};
var LazyContainerManager = class {
  constructor({ lazy }) {
    this.lazy = lazy;
    this.queue = [];
  }
  bind(el, binding, vnode) {
    const container = new LazyContainer({
      el,
      binding,
      vnode,
      lazy: this.lazy
    });
    this.queue.push(container);
  }
  update(el, binding, vnode) {
    const container = this.queue.find((item) => item.el === el);
    if (!container)
      return;
    container.update({ el, binding, vnode });
  }
  unbind(el) {
    const container = this.queue.find((item) => item.el === el);
    if (!container)
      return;
    container.clear();
    remove(this.queue, container);
  }
};

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/lazyload/vue-lazyload/lazy-image.mjs
var stdin_default110 = (lazyManager) => ({
  props: {
    src: [String, Object],
    tag: {
      type: String,
      default: "img"
    }
  },
  render() {
    var _a, _b;
    return h(
      this.tag,
      {
        src: this.renderSrc
      },
      (_b = (_a = this.$slots).default) == null ? void 0 : _b.call(_a)
    );
  },
  data() {
    return {
      el: null,
      options: {
        src: "",
        error: "",
        loading: "",
        attempt: lazyManager.options.attempt
      },
      state: {
        loaded: false,
        error: false,
        attempt: 0
      },
      renderSrc: ""
    };
  },
  watch: {
    src() {
      this.init();
      lazyManager.addLazyBox(this);
      lazyManager.lazyLoadHandler();
    }
  },
  created() {
    this.init();
    this.renderSrc = this.options.loading;
  },
  mounted() {
    this.el = this.$el;
    lazyManager.addLazyBox(this);
    lazyManager.lazyLoadHandler();
  },
  beforeUnmount() {
    lazyManager.removeComponent(this);
  },
  methods: {
    init() {
      const { src, loading, error } = lazyManager.valueFormatter(this.src);
      this.state.loaded = false;
      this.options.src = src;
      this.options.error = error;
      this.options.loading = loading;
      this.renderSrc = this.options.loading;
    },
    checkInView() {
      const rect = useRect(this.$el);
      return rect.top < window.innerHeight * lazyManager.options.preLoad && rect.bottom > 0 && rect.left < window.innerWidth * lazyManager.options.preLoad && rect.right > 0;
    },
    load(onFinish = noop) {
      if (this.state.attempt > this.options.attempt - 1 && this.state.error) {
        if (!lazyManager.options.silent) {
          console.log(
            `[@vant/lazyload] ${this.options.src} tried too more than ${this.options.attempt} times`
          );
        }
        onFinish();
        return;
      }
      const { src } = this.options;
      loadImageAsync(
        { src },
        ({ src: src2 }) => {
          this.renderSrc = src2;
          this.state.loaded = true;
        },
        () => {
          this.state.attempt++;
          this.renderSrc = this.options.error;
          this.state.error = true;
        }
      );
    }
  }
});

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/lazyload/vue-lazyload/index.mjs
var Lazyload = {
  install(app, options = {}) {
    const LazyClass = stdin_default108();
    const lazy = new LazyClass(options);
    const lazyContainer = new LazyContainerManager({ lazy });
    app.config.globalProperties.$Lazyload = lazy;
    if (options.lazyComponent) {
      app.component("LazyComponent", stdin_default109(lazy));
    }
    if (options.lazyImage) {
      app.component("LazyImage", stdin_default110(lazy));
    }
    app.directive("lazy", {
      beforeMount: lazy.add.bind(lazy),
      updated: lazy.update.bind(lazy),
      unmounted: lazy.remove.bind(lazy)
    });
    app.directive("lazy-container", {
      beforeMount: lazyContainer.bind.bind(lazyContainer),
      updated: lazyContainer.update.bind(lazyContainer),
      unmounted: lazyContainer.unbind.bind(lazyContainer)
    });
  }
};

// ../node_modules/.pnpm/vant@4.0.3_vue@3.2.45/node_modules/vant/es/index.mjs
var version = "4.0.3";
function install(app) {
  const components = [
    ActionBar,
    ActionBarButton,
    ActionBarIcon,
    ActionSheet,
    AddressEdit,
    AddressList,
    Area,
    BackTop,
    Badge,
    Button,
    Calendar,
    Card,
    Cascader,
    Cell,
    CellGroup,
    Checkbox,
    CheckboxGroup,
    Circle,
    Col,
    Collapse,
    CollapseItem,
    ConfigProvider,
    ContactCard,
    ContactEdit,
    ContactList,
    CountDown,
    Coupon,
    CouponCell,
    CouponList,
    DatePicker,
    Dialog,
    Divider,
    DropdownItem,
    DropdownMenu,
    Empty,
    Field,
    Form,
    Grid,
    GridItem,
    Icon,
    Image2,
    ImagePreview,
    IndexAnchor,
    IndexBar,
    List,
    Loading,
    Locale,
    NavBar,
    NoticeBar,
    Notify,
    NumberKeyboard,
    Overlay,
    Pagination,
    PasswordInput,
    Picker,
    PickerGroup,
    Popover,
    Popup,
    Progress,
    PullRefresh,
    Radio,
    RadioGroup,
    Rate,
    Row,
    Search,
    ShareSheet,
    Sidebar,
    SidebarItem,
    Skeleton,
    Slider,
    Space,
    Step,
    Stepper,
    Steps,
    Sticky,
    SubmitBar,
    Swipe,
    SwipeCell,
    SwipeItem,
    Switch,
    Tab,
    Tabbar,
    TabbarItem,
    Tabs,
    Tag,
    TimePicker,
    Toast,
    TreeSelect,
    Uploader
  ];
  components.forEach((item) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
var stdin_default111 = {
  install,
  version
};
export {
  ActionBar,
  ActionBarButton,
  ActionBarIcon,
  ActionSheet,
  AddressEdit,
  AddressList,
  Area,
  BackTop,
  Badge,
  Button,
  Calendar,
  Card,
  Cascader,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Circle,
  Col,
  Collapse,
  CollapseItem,
  ConfigProvider,
  ContactCard,
  ContactEdit,
  ContactList,
  CountDown,
  Coupon,
  CouponCell,
  CouponList,
  DatePicker,
  Dialog,
  Divider,
  DropdownItem,
  DropdownMenu,
  Empty,
  Field,
  Form,
  Grid,
  GridItem,
  Icon,
  Image2 as Image,
  ImagePreview,
  IndexAnchor,
  IndexBar,
  Lazyload,
  List,
  Loading,
  Locale,
  NavBar,
  NoticeBar,
  Notify,
  NumberKeyboard,
  Overlay,
  Pagination,
  PasswordInput,
  Picker,
  PickerGroup,
  Popover,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  RadioGroup,
  Rate,
  Row,
  Search,
  ShareSheet,
  Sidebar,
  SidebarItem,
  Skeleton,
  SkeletonAvatar,
  SkeletonImage,
  SkeletonParagraph,
  SkeletonTitle,
  Slider,
  Space,
  Step,
  Stepper,
  Steps,
  Sticky,
  SubmitBar,
  Swipe,
  SwipeCell,
  SwipeItem,
  Switch,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  TimePicker,
  Toast,
  TreeSelect,
  Uploader,
  actionBarButtonProps,
  actionBarIconProps,
  actionBarProps,
  actionSheetProps,
  addressEditProps,
  addressListProps,
  allowMultipleToast,
  areaProps,
  backTopProps,
  badgeProps,
  buttonProps,
  calendarProps,
  cardProps,
  cascaderProps,
  cellGroupProps,
  cellProps,
  checkboxGroupProps,
  checkboxProps,
  circleProps,
  closeDialog,
  closeNotify,
  closeToast,
  colProps,
  collapseItemProps,
  collapseProps,
  configProviderProps,
  contactCardProps,
  contactEditProps,
  contactListProps,
  countDownProps,
  couponCellProps,
  couponListProps,
  datePickerProps,
  stdin_default111 as default,
  dialogProps,
  dividerProps,
  dropdownItemProps,
  dropdownMenuProps,
  emptyProps,
  fieldProps,
  formProps,
  gridItemProps,
  gridProps,
  iconProps,
  imagePreviewProps,
  imageProps,
  indexAnchorProps,
  indexBarProps,
  install,
  listProps,
  loadingProps,
  navBarProps,
  noticeBarProps,
  notifyProps,
  numberKeyboardProps,
  overlayProps,
  paginationProps,
  passwordInputProps,
  pickerGroupProps,
  pickerProps,
  popoverProps,
  popupProps,
  progressProps,
  pullRefreshProps,
  radioGroupProps,
  radioProps,
  rateProps,
  resetDialogDefaultOptions,
  resetNotifyDefaultOptions,
  resetToastDefaultOptions,
  rowProps,
  searchProps,
  setDialogDefaultOptions,
  setNotifyDefaultOptions,
  setToastDefaultOptions,
  shareSheetProps,
  showConfirmDialog,
  showDialog,
  showFailToast,
  showImagePreview,
  showLoadingToast,
  showNotify,
  showSuccessToast,
  showToast,
  sidebarItemProps,
  sidebarProps,
  skeletonAvatarProps,
  skeletonImageProps,
  skeletonParagraphProps,
  skeletonProps,
  skeletonTitleProps,
  sliderProps,
  spaceProps,
  stepperProps,
  stepsProps,
  stickyProps,
  submitBarProps,
  swipeCellProps,
  swipeProps,
  switchProps,
  tabProps,
  tabbarItemProps,
  tabbarProps,
  tabsProps,
  tagProps,
  timePickerProps,
  toastProps,
  treeSelectProps,
  uploaderProps,
  version
};
//# sourceMappingURL=vant.js.map
