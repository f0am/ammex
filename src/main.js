// =========================================================
// * Vuetify Material Dashboard - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import './plugins/vuetify-google-autocomplete'
import vuetify from './plugins/vuetify'
import i18n from './i18n'

import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

import { VueMaskDirective } from 'v-mask'

Amplify.configure(awsconfig);

Vue.config.productionTip = false
Vue.directive('mask', VueMaskDirective);

import clientSeeds from './seeds/clients'
import contractSeeds from './seeds/contracts'

// clientSeeds()

// contractSeeds()


Vue.use({
  install(Vue) {
    Vue.prototype.$api = API;
  }
})


new Vue({
  data() {
    return {
      show: false,
      message: '',
      color: null,
      error: null
    }
  },
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')