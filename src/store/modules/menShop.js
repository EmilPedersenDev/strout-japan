//import axios from "axios";
const fb = require("../../firebaseConfig");

const state = {
  shirts: [],
  shirt: [],
  activeShirt: []
};

const mutations = {
  SET_SHIRTS: (state, shirts) => {
    state.shirts = shirts;
  },
  SET_SHIRT: (state, shirt) => {
    state.shirt = shirt;
  },
  SET_ACTIVE_SHIRT: (state, product) => {
    state.activeShirt.push(product);
  }
};

const actions = {
  GET_SHIRTS: ({ commit }) => {
    let images = [];
    fb.productsCollection.onSnapshot(snapshot => {
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
    commit("SET_SHIRTS", images);
    return images;
  },
  GET_SHIRT: ({ commit }, id) => {
    let image = [];
    fb.productsCollection.onSnapshot(snapshot => {
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
  },
  SET_SHIRT_CART: ({ dispatch, commit }, shirt) => {
    fb.activeProductSelected.doc("ProductSelected" + shirt.id).set({
      name: shirt.name,
      image: shirt.image,
      id: shirt.id,
      price: shirt.price,
      isActive: true,
      Quantity: 1
    });
  },
  GET_ACTIVE_SHIRT: ({ commit }, id) => {
    let product = [];
    fb.activeProductSelected.onSnapshot(snapshot => {
      snapshot.forEach(e => {
        if (id !== e.data().id) {
          product.push({
            name: e.data().name,
            image: e.data().image,
            price: e.data().price,
            id: e.data().id
          });
        }
      });
    });
    commit("SET_ACTIVE_SHIRT", product);

    return product;
  },
  GET_CART_SHIRTS: ({ commit }) => {
    let product = [];
    fb.activeProductSelected.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        product.push(doc.data());
      });
    });
    return product;
  },
  REMOVE_SHIRT: ({ dispatch, commit }, product) => {
    fb.activeProductSelected.doc("ProductSelected" + product.id).delete();
  },
  REMOVE_ALL_IN_CART: ({ commit }, product) => {
    for (let i = 0; i < product.length; i++) {
      fb.activeProductSelected.doc("ProductSelected" + product[i].id).delete();
    }
  }
};

const getters = {
  GET_SHIRTS: state => {
    return state.shirts;
  },
  GET_SHIRT: state => {
    return state.shirt;
  },
  GET_ACTIVE_SHIRT: state => {
    return state.activeShirt;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
