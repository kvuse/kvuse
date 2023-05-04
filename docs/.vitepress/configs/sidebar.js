/* eslint-disable no-use-before-define */
import { join } from 'path';
import { readdirSync, statSync, readFileSync } from 'fs';
import c from 'picocolors';

const customTitle = {
  directives: '自定义指令',
  basic: '基础',
  components: '组件',
  other: '其他',
};
const ingoreList = ['node_modules', 'example', 'public'];

const getFileName = (file) => file.replace(/\.md$/, '');

const getMapItem = (parentFile, childFile, file = '') => {
  const itemPath = join(parentFile, childFile, file);
  const text = getFileName(file || childFile);
  if (!/\.md$/.test(file || childFile)) return;
  const mdTitle = readFileSync(itemPath, 'utf-8').split('\n\n')[0];
  const regex = /# (.+)/;
  const match = regex.exec(mdTitle);
  const filePath = file ? `/${childFile}` : '';
  const item = {
    text: match[1] || customTitle[childFile],
    link: `/${parentFile}${filePath}/${text}`,
  };

  return item;
};

const sidebarItems = {};
const ingoreFile = []; // 忽略文件列表
const getItemsList = (parentFile, childFile = '') => {
  const currentPath = join(process.cwd(), parentFile, childFile);
  const currentItem = sidebarItems[`/${getFileName(parentFile)}`];
  if (statSync(currentPath).isDirectory()) {
    const itemLinks = [];
    const nodeList = readdirSync(currentPath);
    const filterNodeList = nodeList.filter((file) => /\.md$/.test(file));
    filterNodeList.forEach((child) => {
      if (!ingoreFile.includes(getFileName(child))) itemLinks.push(getMapItem(parentFile, childFile, child));
    });
    currentItem.push({
      text: customTitle[childFile],
      sort: `${childFile}`,
      items: itemLinks,
    });
  } else if (!ingoreFile.includes(getFileName(childFile))) {
    currentItem.push(getMapItem(parentFile, childFile));
  }
};

/**
 *
 * @param {string} path 路径
 * @param {array} ingoreList 忽略数组
 */

const getComponentsSider = (path) => {
  const nodeList = readdirSync(path);
  const filteredFiles = nodeList.filter((file) => !/(^\.)|(\.md$|\.js$|\.json$)/.test(file) && !ingoreList.includes(file));
  filteredFiles.forEach((files) => {
    sidebarItems[`/${files}`] = [];
    if (statSync(join(path, files)).isDirectory()) {
      readdirSync(files).forEach((childFile) => {
        getItemsList(files, childFile, path);
      });
    }
  });
};

/**
 * 生成侧边栏
 * @param {string} param0 ingoreList 忽略文件夹
 */
function getSidebars() {
  const currentPath = join(process.cwd());
  getComponentsSider(currentPath);
  console.log(c.blue('[sidebar]'), c.green('insert sidebar data successfully'));
  Object.keys(sidebarItems).forEach((key) => sidebarItems[key].sort((a, b) => {
    const aLink = a.link?.split('/')?.at(-1)?.split('-')[0];
    const bLink = b.link?.split('/')?.at(-1)?.split('-')[0];
    if ((a.link && !b.link) || (a.link?.includes('guide'))) return -1;
    if (!a.link && b.link && a.link) return 1;
    if (aLink == bLink) return 1;
    if (a.sort && b.sort) return 1;
    return 0;
  }));
  return sidebarItems;
}

export const sidebar = getSidebars();
