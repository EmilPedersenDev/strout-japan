<template>
  <div id="app">
    <AppNavigation />
    <router-view></router-view>
  </div>
</template>

<script>
//import Home from './components/Home';
import AppNavigation from './components/AppNavigation';
export default {
  name: 'App',
  components: {
    AppNavigation
  }
};
</script>

