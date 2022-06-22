import { directives } from './main';

directives.install = function (Vue) {
  Object.keys(directives).forEach((key) => {
    Vue.directive(key, directives[key]);
  });
};

export default directives;
