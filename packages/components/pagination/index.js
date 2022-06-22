import KPage from './main.vue';

KPage.install = function (app) {
  app.component(KPage.name, KPage);
};

export default KPage;
