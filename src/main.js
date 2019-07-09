import Vue from 'vue';
import store from './store/index.js';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
