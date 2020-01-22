<template>
  <div class="container">
    <h1>Cart Checkout</h1>
    <div class="product-container" v-if="cartItems.length > 0">
      <div class="product-content" v-for="(product, id) in cartItems" :key="id">
        <img :src="product.image" alt />
        <div class="product-text">
          <p>{{product.name}}</p>
          <h6>{{product.price}} kr</h6>

          <h6>1 piece</h6>
        </div>
        <div class="delete">
          <p @click="remove(product,id)">X</p>
        </div>
      </div>
      <p
        style="font-size: 30px; margin-bottom: 0; opacity: 0.7;"
      >Total: {{countTotal}}</p>
      <button @click="toCart()">Buy Now</button>
    </div>
    <div class="no-items" v-else>
      <h1>No Current Items</h1>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import { mapActions } from "vuex";

  export default {
    name: "Cart",
    data() {
      return {
        cartItems: [],
        id: null,
        totalSum: null,
        activeProducts: []
      };
    },
    mounted() {
      this.showProducts();
    },
    computed: {
      countTotal() {
        let totalPrice = this.cartItems.reduce((a, b) => ({
          price: Number(a.price) + Number(b.price)
        }));
        this.totalSum = totalPrice.price;
        return `${totalPrice.price} kr`;
      }
    },
    methods: {
      ...mapActions({ isShirtInCart: "GET_CART_SHIRTS" }),
      showProducts() {
        this.isShirtInCart(this.id).then(result => {
          this.cartItems = result;
        });
      },
      remove(product, id) {
        this.cartItems.splice(id, 1);
        this.id = id;
        this.$store.dispatch("REMOVE_SHIRT", product, id);
      },
      toCart() {
        this.$router.push({
          name: "Form",
          params: {
            total: this.totalSum
          }
        });
      }
    }
  };
</script>

<style scoped>
  body {
    height: 100%;
    width: 100%;
  }
  h1 {
    font-size: 66px;
  }
  .no-items h1 {
    font-size: 40px;
  }
  .container {
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }
  .product-container {
    width: 100%;
  }
  .product-content {
    display: flex;
    background: #e3e3e3;
    margin-bottom: 10px;
  }

  .product-content img {
    height: 300px;
  }
  .product-content .product-text {
    width: 70%;
  }
  .product-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .product-text p {
    font-size: 40px;
    opacity: 0.6;
    flex-grow: 1;
    transform: translateY(50%);
  }
  .product-text h6 {
    font-size: 24px;
    margin: 5px 0;
  }
  .product-text h6:last-child {
    opacity: 0.4;
    margin-bottom: 20px;
  }
  .product-content .delete {
    width: 15%;
    transform: translateY(35%);
  }
  .product-content .delete p {
    font-size: 25px;
    opacity: 0.6;
  }
  .product-content .delete p:hover {
    cursor: pointer;
    color: red;
    opacity: 0.5;
  }
  .product-container button {
    font-weight: lighter;
    text-transform: uppercase;
    font-size: 24px;
    width: 20%;
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 30px;
    color: #20bf6b !important;
    background-color: Transparent;
    border: 2px solid #20bf6b !important;
    border-radius: 6px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }
  .product-container button:hover {
    color: gray !important;
    border-radius: 50px;
    border-color: lightgray !important;
    transition: all 0.3s ease 0s;
  }
</style>