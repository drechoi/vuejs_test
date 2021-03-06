// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { store } from './store/store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import the plugin here
import AuthPlugin from './plugins/auth';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(faCoffee);

// Install the authentication plugin here
Vue.use(AuthPlugin);
Vue.use(BootstrapVue);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
