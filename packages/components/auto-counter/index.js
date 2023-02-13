import KAutoCounter from './main.vue';

KAutoCounter.install = function (app) {
  app.component(KAutoCounter.name, KAutoCounter);
};

export default KAutoCounter;
