import Vuex from "vuex";
import Vue from "vue";
import playerModule from "./modules/player";
import menShopModule from "./modules/menShop";
import womenShopModule from "./modules/womenShop";
import modal from "./modules/modal";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.VUE_APP_VUEX_STORE_STRICT,
  modules: {
    player: playerModule,
    menshop: menShopModule,
    womenshop: womenShopModule,
    modal: modal
  }
});
