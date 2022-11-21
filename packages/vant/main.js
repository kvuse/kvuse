import KButton from './button';

const KUI = {
  KButton,
  install: () => {},
};

function startsWith(string, query, position = 0) {
  return string.substr(position, query.length) === query;
}

KUI.install = function (app) {
  Object.keys(KUI).forEach((key) => {
    if (startsWith(key, 'K')) {
      const Component = KUI[key];
      app.component(Component.name, Component);
    }
  });
  // 自定义指令
  // Object.keys(directives).forEach((key) => {
  //   app.directive(key, directives[key]);
  // });
};

// export default KUI;

export {
  KButton, KUI,
};
