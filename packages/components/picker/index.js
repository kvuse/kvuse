import KPicker from './main.vue';

KPicker.install = function (app) {
  app.component(KPicker.name, KPicker);
};

export default KPicker;
