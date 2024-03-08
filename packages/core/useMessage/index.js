import { getCurrentInstance } from 'vue';

export function useMessage() {
  const instance = getCurrentInstance();
  const getMessage = (type = '$message') => {
    const { globalProperties } = instance.appContext.config;
    return globalProperties[type];
  };
  const setOption = (text, type, arg) => {
    getMessage()?.closeAll();
    getMessage()?.({ message: text, type, ...arg });
  };
  const message = {
    error: (text, arg) => setOption(text, 'error', arg),
    success: (text, arg) => setOption(text, 'success', arg),
    warning: (text, arg) => setOption(text, 'warning', arg),
    info: (text, arg) => setOption(text, 'info', arg),
    close: () => getMessage()?.closeAll(),
  };
  const messageBox = {
    confirm: ({
      msg, title = '提示', type = 'warning', ...arg
    }) => new Promise((resolve, reject) => {
      // eslint-disable-next-line no-restricted-globals
      parent.window.postMessage('openMask()', '*');
      window.top.postMessage('openMask()', '*');
      getMessage('$messageBox')?.confirm(msg, title, {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        buttonSize: '',
        type,
        ...arg,
      }).then(() => resolve(true))
        .catch(() => {
          // eslint-disable-next-line no-restricted-globals
          parent.window.postMessage('closeMask()', '*');
          window.top.postMessage('closeMask()', '*');
          reject();
        });
    }),
    alert: ({
      msg, title = '提示', type = 'warning', ...arg
    }, callback) => {
      getMessage('$messageBox')?.close();
      getMessage('$messageBox')?.alert(msg, title, {
        confirmButtonText: '确认',
        type,
        ...arg,
        callback: (action) => callback(action),
      });
    },
  };

  const closeMessageBox = () => getMessage('$messageBox')?.close();

  return {
    message, messageBox, closeMessageBox,
  };
}
