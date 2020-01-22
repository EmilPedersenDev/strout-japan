import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Values from "./components/Values.vue";
import Services from "./components/Services.vue";
import Shop from "./components/Shop.vue";
import ProductDetails from "./components/ProductDetails.vue";
import Cart from "./components/Cart.vue";
import Form from "./components/Form.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/values",
      name: "Values",
      component: Values
    },
    {
      path: "/services",
      name: "Services",
      component: Services
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop,
      props: true
      // children: [
      //   {
      //     path: "/product",
      //     name: "Products",
      //     component: ProductDetails
      //   }
      // ]
    },
    {
      path: "/product",
      name: "Products",
      component: ProductDetails,
      props: true
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
      props: true
    },
    {
      path: "/form",
      name: "Form",
      component: Form,
      props: true
    }
  ]
});
