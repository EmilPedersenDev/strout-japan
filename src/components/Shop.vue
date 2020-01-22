<template>
  <div class="background">
    <div class="menOrWomen" style="text-align: center;">
      <button @click="menOrWomen('women')">Women</button>
      <button @click="menOrWomen('men')">Men</button>
    </div>
    <div class="container">
      <div
        class="product-card"
        v-for="(product, id) in images"
        :key="id"
        @click="routerToProduct(product.id)"
      >
        <div class="product-image">
          <img :src="product.image" height="450px" width="300px" />
          <img
            class="img-hover"
            :src="product.imageHover"
            height="450px"
            width="300px"
          />
        </div>
        <div class="product-info">
          <p style="font-weight">{{product.name}}</p>
          <p style="color: #9d9da1;">{{product.price}} kr</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    props: {
      shopDir: String
    },
    data() {
      return {
        images: [],
        activePressedShirt: "",
        maleFemale: ""
      };
    },

    created() {
      this.maleFemale = this.shopDir;
    },
    beforeMount() {
      this.maleFemale = this.shopDir;
    },

    mounted() {
      this.maleFemale = this.shopDir;
      if (this.shopDir === "men") {
        this.getMensProducts();
      } else {
        this.getWomensProducts();
      }
    },

    methods: {
      ...mapActions({ shirts: "GET_SHIRTS", womenShirts: "GET_WOMEN_SHIRTS" }),
      menOrWomen(value) {
        this.maleFemale = value;

        if (value === "women") {
          this.getWomensProducts();
        } else {
          this.getMensProducts();
        }
      },
      getMensProducts() {
        this.shirts().then(result => {
          this.images = result;
        });
      },
      getWomensProducts() {
        this.womenShirts().then(result => {
          this.images = result;
        });
      },
      routerToProduct(shirtId) {
        this.$router.push({
          name: "Products",
          params: {
            id: shirtId,
            gender: !this.maleFemale ? "women" : this.maleFemale
          }
        });
      }
    }
  };
</script>

<style scoped lang="scss">
  body {
    /* width: 100%; */
    width: 100%;
    height: 100%;
    margin: 0;
  }
  .background {
    background: linear-gradient(rgba(255, 255, 255, 0.2)),
      url("~@/assets/forest1.jpg") no-repeat;
    background-size: cover;
  }
  .menOrWomen {
    text-align: center;
    transform: translateY(55%);
  }
  .menOrWomen button {
    margin-right: 30px;
    width: 100px;
    height: 40px;
    color: #20bf6b !important;
    text-transform: uppercase;
    background-color: Transparent;
    padding: 10px 20px 10px 20px;
    border: 2px solid #20bf6b !important;
    border-radius: 6px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }
  .menOrWomen button:hover {
    color: gray !important;
    border-radius: 50px;
    border-color: lightgray !important;
    transition: all 0.3s ease 0s;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    margin-top: 50px;
    background-color: #f0f0f0;
  }

  .product-card {
    padding: 2%;
    flex-grow: 1;
    flex-basis: 25%;
    text-align: center;
    max-width: 33.3333%;
  }

  .product-image {
    height: 450px;
    width: 300px;
    margin: 0 auto;
    position: relative;
    display: inline-block;
  }
  .product-image img {
    transition: 0.6s;
  }
  .product-image:hover {
    cursor: pointer;
  }

  .product-image .img-hover {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
  }

  .product-image:hover .img-hover {
    display: inline;
  }

  .product-info {
    margin-top: auto;
    display: inline-flex;
  }
  .product-info p:first-child {
    margin-right: 8px;
  }
  .product-info p:last-child {
    opacity: 0.9;
  }
</style>