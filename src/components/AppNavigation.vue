<template>
  <div>
    <nav>
      <div class="logo">
        <router-link to="/">
          <img
            src="https://strout.jp/user_data/packages/default/img/common/logo.gif"
            alt
          />
        </router-link>
      </div>
      <ul class="navbar">
        <li class="main-nav 1">
          <router-link to="/">Home</router-link>
        </li>
        <li class="main-nav 3">
          <router-link to="/shop">Shop</router-link>
        </li>
        <li class="main-nav 2">
          <router-link to="/about">About</router-link>
        </li>
        <li class="main-nav 5">
          <router-link to="/Cart" class="last">
            <font-awesome-icon
              v-if="showCartActive"
              :icon="['fas', 'cart-plus']"
            />
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    name: "AppNavigation",
    data() {
      return {
        cartContent: []
      };
    },
    mounted() {
      this.showCart();
    },
    computed: {
      showCartActive() {
        if (this.cartContent.length > 0) {
          return true;
        }
        return false;
      }
    },
    methods: {
      ...mapActions({ isShirtInCart: "GET_ACTIVE_SHIRT" }),
      showCart() {
        this.isShirtInCart().then(result => {
          this.cartContent = result;
        });
      }
    }
  };
</script>

<style scoped>
  img:hover {
    opacity: 0.7;
  }
</style>
