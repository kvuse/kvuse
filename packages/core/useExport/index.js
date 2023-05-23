import axios from 'axios';
import { useUtils } from '../useUtils';
import { useMessage } from '../useMessage';

export function useExport() {
  const { setUrlParams } = useUtils();

  /**
   * 导出为空提示
   * @params isNullData 是否为空数据
   * @returns Boolean
   */
  const isExportEmpty = (isNullData) => {
    const { message } = useMessage();
    if (isNullData) {
      message.warning('当前无数据可导出');
      return true;
    }
    return false;
  };

  /**
   * 下载文件
   * @param {string} url 下载路径
   * @param {string} title  文件名字
   */
  const downloadFile = async (url, title) => {
    const titleType = /\.xlsx$/.test(title) ? title : `${title}.xlsx`;
    const res = await axios.get(url, { responseType: 'blob' });
    const aLink = document.createElement('a');
    function blobToDataURL(blob, callback) {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = function (e) { callback(e.target.result); };
    }
    if (typeof dfAndroidAppHD !== 'undefined') { // 平板HD
      const blob = new Blob([res.data], { type: 'application/vnd.ms-excel' });
      blobToDataURL(blob, (b) => {
        window.webkit && window.webkit.messageHandlers.openDocument && window.webkit.messageHandlers.openDocument.postMessage(`${titleType};${b}`);
        // eslint-disable-next-line no-undef
        typeof dfAndroidAppHD !== 'undefined' && dfAndroidAppHD.openDocument(`${titleType};${b}`);
      });
    } else { // 客户端
      aLink.href = URL.createObjectURL(res.data);
      aLink.download = `${titleType}`;
      aLink.click();
      document.body.appendChild(aLink);
    }
  };

  return { setUrlParams, isExportEmpty, downloadFile };
}
