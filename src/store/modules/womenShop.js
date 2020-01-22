const fb = require("../../firebaseConfig");

const state = {};

const getters = {};

const mutations = {};
const actions = {
  GET_WOMEN_SHIRTS: ({ commit }) => {
    let images = [];
    fb.womenProductsCollection.onSnapshot(snapshot => {
      snapshot.forEach(e => {
        images.push({
          name: e.data().name,
          image: e.data().image,
          imageHover: e.data().imageHover,
          price: e.data().price,
          id: e.data().id
        });
      });
    });
    return images;
  },
  GET_SHIRT_WOMEN: ({ commit }, id) => {
    let image = [];
    fb.womenProductsCollection.onSnapshot(snapshot => {
      snapshot.forEach(x => {
        if (x.data().id === id) {
          image.push({
            name: x.data().name,
            image: x.data().image,
            imageHover: x.data().imageHover,
            price: x.data().price,
            id: x.data().id,
            collection: x.id
          });
        } else {
          return;
        }
      });
    });
    commit("SET_SHIRT", image);
    return image;
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
