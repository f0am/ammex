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

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./plugins/base";
import "./plugins/chartist";
import "./plugins/vee-validate";
import "./plugins/vuetify-google-autocomplete";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";

import "@aws-amplify/ui-vue";
import Amplify, { Auth, API } from "aws-amplify";

import awsconfig from "./aws-exports";

import { VueMaskDirective } from "v-mask";

Amplify.configure(awsconfig);
Vue.config.productionTip = false;
Vue.directive("mask", VueMaskDirective);

Vue.use({
  install(Vue) {
    Vue.prototype.$gql = function(query, variables) {
      return this.$root.api.graphql({ query, variables });
    };
    Vue.prototype.$alert = function(msg, color, timeout = 2000) {
      this.$root.message = msg;
      this.$root.color = color;
      this.$root.show = true;
      this.$root.timeout = timeout;
    };
  }
});

new Vue({
  data() {
    return {
      show: false,
      message: "",
      color: null,
      error: null,
      api: API
    };
  },
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
