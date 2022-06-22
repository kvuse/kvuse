import KButton from './main.vue';

KButton.install = function (app) {
  app.component(KButton.name, KButton);
};

export default KButton;
