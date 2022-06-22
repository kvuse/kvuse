import { ElMessage, ElMessageBox } from 'element-plus';

export function useMessage() {
  const setOption = (text, type, arg) => {
    ElMessage.closeAll();
    ElMessage({ message: text, type, ...arg });
  };
  const message = {
    error: (text, arg) => setOption(text, 'error', arg),
    success: (text, arg) => setOption(text, 'success', arg),
    warning: (text, arg) => setOption(text, 'warning', arg),
    info: (text, arg) => setOption(text, 'info', arg),
    close: () => ElMessage.closeAll(),
  };
  const messageBox = {
    confirm: ({ msg, title = '提示', type = 'warning' }) => new Promise((resolve) => {
      // eslint-disable-next-line no-restricted-globals
      parent.window.postMessage('openMask()', '*');
      window.top.postMessage('openMask()', '*');
      ElMessageBox.confirm(msg, title, {
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
      ElMessageBox.alert(msg, title, {
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
