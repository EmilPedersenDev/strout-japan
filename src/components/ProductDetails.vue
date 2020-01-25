<template>
  <div>
    <main v-if="shirt.length > 0">
      <section id="header">
        <div class="header-info" v-for="item in shirt" :key="item.id">
          <h1>{{item.name}}</h1>
          <p style="font-size: 16px;">{{item.price}} kr</p>
        </div>
      </section>
      <section id="body" v-for="item in shirt" :key="item.id">
        <img :src="item.image" alt height="450px" width="300px" srcset />
        <img :src="item.imageHover" alt height="450px" width="300px" srcset />
        <div class="buyNow">
          <button class="button-class" @click="addToCart()">Push to cart</button>
        </div>
        <div class="site-header" style="opacity: 0.5">
          <h1>
            <span style="color: black;">strou</span>
            <span style="color: #20bf6b">t</span>
          </h1>
        </div>
      </section>
      <div class="delivery">
        <div class="type frakt">Free shipping</div>
        <div class="type butik">Available in store</div>
        <div class="type oppetKop">Open purchase</div>
        <div class="type retur">Free return in store</div>
      </div>
    </main>
    <Modal></Modal>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import Modal from "../common/components/Modal";
  export default {
    props: {
      id: {
        type: Number
      },
      gender: {
        type: String
      }
    },
    components: {
      Modal
    },
    data() {
      return {
        shirt: []
      };
    },
    name: "ProductDetails",
    mounted() {
      if (this.gender === "women") {
        this.getWomenActiveShirt();
      } else {
        this.getActiveShirt();
      }
    },

    methods: {
      ...mapActions(
        { activeShirt: "GET_SHIRT", womenShirt: "GET_SHIRT_WOMEN" },
        { modal: "ShowOrHideModal" }
      ),
      getActiveShirt() {
        this.activeShirt(this.id).then(result => {
          this.shirt = result;
        });
      },
      getWomenActiveShirt() {
        this.womenShirt(this.id).then(result => {
          this.shirt = result;
        });
      },

      openModal() {
        this.$store.dispatch("ShowOrHideModal");
      },
      addToCart() {
        let parameters = {};
        this.shirt.map(function(val) {
          parameters = {
            name: val.name,
            id: val.id,
            image: val.image,
            price: val.price
          };
        });

        this.$store.dispatch("SET_SHIRT_CART", parameters);
        this.openModal();
      }
    }
  };
</script>

<style lang="scss" scoped>
  body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: "Roboto";
  }
  h1 {
    margin: 20px;
  }
  img {
    &:first-child {
      margin-right: 20px;
    }
  }
  main {
    height: 100%;
    width: 100%;
  }
  #body {
    height: 100%;
    text-align: center;
  }

  .site-header {
    font-size: 66px;
  }

  .header-info {
    text-align: center;
  }
  .header p:first-child {
    font-size: 50px;
    margin: 0;
  }

  .buyNow {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
  }

  .button-class {
    margin: 30px auto 0px auto;
    width: 40%;
    color: #228b22 !important;
    text-transform: uppercase;
    background-color: Transparent;
    padding: 10px 20px 10px 20px;
    border: 2px solid #228b22 !important;
    border-radius: 6px;
    display: inline-block;
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }

  .button-class:hover {
    color: #92b558 !important;
    border-radius: 50px;
    border-color: #92b558 !important;
    transition: all 0.3s ease 0s;
  }

  .delivery {
    width: 30%;
    text-align: center;
    align-items: center;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    border-radius: 16px;
    margin: 0 auto;
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }

  .delivery .type {
    padding: 2%;
    flex-grow: 1;
    flex-basis: 50%;
  }

  @media (max-width: 767px) {
    img {
      &:first-child {
        margin: 0px 0px 10px 0px;
      }
    }
    .delivery {
      width: 80%;
    }
    .buyNow {
      width: 80%;
      .button-class {
        width: 100%;
      }
    }
  }
</style>