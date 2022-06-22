import KTable from './main.vue';

KTable.install = function (app) {
  app.component(KTable.name, KTable);
};

export default KTable;
