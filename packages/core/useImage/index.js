import { getCurrentInstance } from 'vue';

export function useImage() {
  /**
   * getImageUrl 获取图片路径
   * @param { string } name 图片名
   * @param { string } floderName 文件夹名字
   * @param { string } instance 实例对象
   * @returns url
   */
  const getImageUrl = (name, floderName = 'images', instance = getCurrentInstance()) => {
    const currentFile = instance.type.__file.split('src')?.[1];
    const metaUrl = `${window.location.origin}/src${currentFile}`;
    const currentPath = /^(\.{1,2}\/)/.test(floderName) ? floderName : `../../assets/${floderName}`;
    return new URL(`${currentPath}/${name}`, metaUrl).href;
  };

  return { getImageUrl };
}
