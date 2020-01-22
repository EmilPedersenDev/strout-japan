import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDCBoBZ_3rCfWBUxvcKUctFECPAxkjerUI",
  authDomain: "shop-pro-1fbfa.firebaseapp.com",
  databaseURL: "https://shop-pro-1fbfa.firebaseio.com",
  projectId: "shop-pro-1fbfa",
  storageBucket: "shop-pro-1fbfa.appspot.com",
  messagingSenderId: "857980337755",
  appId: "1:857980337755:web:823d87467865560f53897e"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const productsCollection = db.collection("products");
const womenProductsCollection = db.collection("womenShirts");
const activeProductSelected = db.collection("ActiveProduct");

export {
  db,
  productsCollection,
  activeProductSelected,
  womenProductsCollection
};
