import { getCurrentInstance } from 'vue';

export function useMessage() {
  const instance = getCurrentInstance();
  const { globalProperties } = instance.appContext.config;
  const { $message, $messageBox } = globalProperties;
  const setOption = (text, type, arg) => {
    $message.closeAll();
    $message({ message: text, type, ...arg });
  };
  const message = {
    error: (text, arg) => setOption(text, 'error', arg),
    success: (text, arg) => setOption(text, 'success', arg),
    warning: (text, arg) => setOption(text, 'warning', arg),
    info: (text, arg) => setOption(text, 'info', arg),
    close: () => $message.closeAll(),
  };
  const messageBox = {
    confirm: ({ msg, title = '提示', type = 'warning' }) => new Promise((resolve) => {
      // eslint-disable-next-line no-restricted-globals
      parent.window.postMessage('openMask()', '*');
      window.top.postMessage('openMask()', '*');
      $messageBox.confirm(msg, title, {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        buttonSize: '',
        type,
      }).then(() => resolve(true))
        .catch(() => { }).finally(() => {
          // eslint-disable-next-line no-restricted-globals
          parent.window.postMessage('closeMask()', '*');
          window.top.postMessage('closeMask()', '*');
        });
    }),
    alert: ({ msg, title = '提示', type = 'warning' }, callback) => {
      $messageBox.alert(msg, title, {
        confirmButtonText: '确认',
        type,
        callback: (action) => callback(action),
      });
    },
  };

  return {
    message, messageBox,
  };
}
