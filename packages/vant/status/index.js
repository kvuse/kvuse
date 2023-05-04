import KvStatus from './main.vue';

KvStatus.install = function (app) {
  app.component(KvStatus.name, KvStatus);
};

export default KvStatus;
