import KvButton from './main.vue';

KvButton.install = function (app) {
  app.component(KvButton.name, KvButton);
};

export default KvButton;
