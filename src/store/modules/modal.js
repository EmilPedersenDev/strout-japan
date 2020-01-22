const state = {
  showModal: false
};

const getters = {
  getModal: state => state.showModal
};

const mutations = {
  SHOW_MODAL: state => {
    state.showModal = !state.showModal;
  }
};
const actions = {
  ShowOrHideModal: context => {
    context.commit("SHOW_MODAL");
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
