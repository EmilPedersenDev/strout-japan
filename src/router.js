import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Values from './components/Values.vue'
import Services from './components/Services.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/values',
      name: 'Values',
      component: Values,
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
  ]
});
