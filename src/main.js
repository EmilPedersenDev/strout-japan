import Vue from "vue";
import Vuex from "vuex";
import store from "./store/index.js";
import router from "./router";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faCheckCircle,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import {
  faAmazonPay,
  faPaypal,
  faCcVisa,
  faCcMastercard
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const fb = require("./firebaseConfig.js");

import "./common/styles/main.scss";

Vue.use(Vuex);
Vue.use(Vuelidate);
library.add(
  faCartPlus,
  faAmazonPay,
  faCheckCircle,
  faPaypal,
  faCcVisa,
  faCcMastercard,
  faQuestionCircle
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  fb,
  render: h => h(App)
}).$mount("#app");
