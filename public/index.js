import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import Router from './router';

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  components: { App },
  router: Router,
  template: '<App/>',
});
