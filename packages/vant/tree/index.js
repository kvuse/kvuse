import KvTree from './main.vue';

KvTree.install = function (app) {
  app.component(KvTree.name, KvTree);
};

export default KvTree;
