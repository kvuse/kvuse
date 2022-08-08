import KTooltip from './main.vue';

KTooltip.install = function (app) {
  app.component(KTooltip.name, KTooltip);
};

export default KTooltip;
