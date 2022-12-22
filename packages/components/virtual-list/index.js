import KVirtualList from './main.vue';

KVirtualList.install = function (app) {
  app.component(KVirtualList.name, KVirtualList);
};

export default KVirtualList;
