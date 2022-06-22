import KBreadcrumb from './main.vue';

KBreadcrumb.install = function (app) {
  app.component(KBreadcrumb.name, KBreadcrumb);
};

export default KBreadcrumb;
