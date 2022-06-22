import KDialog from './main.vue';

KDialog.install = function (app) {
  app.component(KDialog.name, KDialog);
};

export default KDialog;
