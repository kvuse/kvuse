import { join } from 'path';
import {
  readdirSync, statSync, closeSync, openSync, utimesSync, existsSync, readFileSync,
} from 'fs';
import c from 'picocolors';

let configFilePath = '';

function log(...info) {
  console.log(c.blue('[auto-sidebar]'), ...info);
}

function updateFile() {
  const time = new Date();

  try {
    utimesSync(configFilePath, time, time);
  } catch (err) {
    closeSync(openSync(configFilePath, 'w'));
  }
}

function createSideBarItems(targetPath, option, ...reset) {
  const { customTitle = {} } = option || {};
  const nodeList = readdirSync(join(targetPath, ...reset));
  const result = [];
  nodeList.forEach((fname) => {
    if (statSync(join(targetPath, ...reset, fname)).isDirectory()) {
      const items = createSideBarItems(join(targetPath), option, ...reset, fname);
      if (items.length) {
        result.push({ text: customTitle[fname] || fname, items });
      }
    } else {
      const text = fname.replace(/\.md$/, '');
      const mdTitle = readFileSync(join(targetPath, ...reset, fname), 'utf-8').split('\n')[0];
      const regex = /# (.+)/;
      const match = regex.exec(mdTitle);
      const item = {
        text: customTitle[fname] || match[1],
        link: ['', ...reset, `${text}`].join('/'),
      };
      result.push(item);
    }
  });
  return result;
}

function createSideBarGroups(targetPath, folder, option) {
  return [
    {
      items: createSideBarItems(targetPath, option, folder),
    },
  ];
}

function createSidebar(path, option) {
  const { ignoreFolderList = [] } = option || {};
  const data = {};
  const nodeList = readdirSync(path)
    .filter((file) => statSync(join(path, file)).isDirectory() && !ignoreFolderList.includes(file));

  nodeList.forEach((folder) => {
    data[`/${folder}/`] = createSideBarGroups(path, folder, option);
  });
  return data;
}

function insertStr(source, start, newStr) {
  return source.slice(0, start) + newStr + source.slice(start);
}

function insertSiderData(source, data) {
  const themeConfigPosition = source.indexOf('{', source.indexOf('themeConfig'));
  return insertStr(
    source,
    themeConfigPosition + 1,
    `"sidebar": ${JSON.stringify(data)}${
      source[themeConfigPosition + 1] !== '}' ? ',' : ''
    }`.replaceAll('"', '\\"'),
  );
}

export default function VitePluginVitepressAutoSidebar(option = {}) {
  return {
    name: 'vite-plugin-vitepress-autosidebar',
    configureServer({ watcher }) {
      const fsWatcher = watcher.add('*.md');
      fsWatcher.on('all', (event, path) => {
        if (event !== 'change') {
          updateFile();
          log(`${event} ${path}`);
          log('update sidebar...');
        }
      });
    },
    async transform(source, id) {
      if (/\/@siteData/.test(id)) {
        const { path = '', ignoreFolderList = [] } = option || {};

        // get config file path
        const configPath = join(process.cwd(), `${path}/.vitepress`);
        configFilePath = existsSync(join(configPath, 'config.ts')) ? join(configPath, 'config.ts') : join(configPath, 'config.js');

        option.ignoreFolderList = ['scripts', 'assets', '.vitepress', 'node_modules', 'public', ...ignoreFolderList];
        const docsPath = join(process.cwd(), path);
        // // 创建侧边栏对象
        const data = createSidebar(docsPath, option);
        // // // 插入数据
        const code = await insertSiderData(source, data);
        log(c.green('insert sidebar data successfully'));
        return code;
      }
    },
  };
}
