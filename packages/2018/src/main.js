import Vue from 'vue';
import router from './router';

import '@/styles/App.sass';

Vue.config.productionTip = true;

import eventBus from './eventBus'

new Vue({
  el: '#cryptonix',
  router,
  template: '<transition appear name="fade"><router-view /></transition>',
});
