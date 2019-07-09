import Vuex from 'vuex';
import Vue from 'vue';
import playerModule from './modules/player';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.VUE_APP_VUEX_STORE_STRICT,
    modules: {
        player: playerModule,
    }
});
