import KvTable from './main.vue';

KvTable.install = function (app) {
  app.component(KvTable.name, KvTable);
};

export default KvTable;
