import KNumberKeyboard from './main.vue';

KNumberKeyboard.install = function (app) {
  app.component(KNumberKeyboard.name, KNumberKeyboard);
};

export default KNumberKeyboard;
