import KvList from './main.vue';

KvList.install = function (app) {
  app.component(KvList.name, KvList);
};

export default KvList;
