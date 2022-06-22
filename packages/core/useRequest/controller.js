/* eslint-disable no-restricted-globals */

function getSource(url) {
  if (url.includes('/admin/')) return 'admin'; // 后台操作
  if (url.includes('/erp/')) return 'erp';
  return '';
}

function interceptors(code, config) {
  const piniaSessions = JSON.parse(sessionStorage.getItem('pinia'));
  const source = getSource(config.url);
  if (source === 'admin') { // cookie过期
    if (code === 20001) {
      clearStorage();
      parent.window.postMessage('outLogin()', '*');
    }
  }
  if (source === 'erp') {
    // erp没有当班信息
    const codeList = [32101, 20001];
    const isClient = /electron/i.test(window.navigator.userAgent);
    if (codeList.includes(code)) {
      clearStorage();
      if (isClient) return;
      // 退出
      const webLoginOutUrl = piniaSessions?.home.baseGlobal.webLoginOutUrl;
      if (webLoginOutUrl) window.location.href = piniaSessions?.home.baseGlobal.webLoginOutUrl;
    }
  }
}

function clearStorage() {
  localStorage.clear();
  sessionStorage.clear();
}

export {
  getSource, clearStorage, interceptors,
};
