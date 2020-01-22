<template>
  <div>
    <main v-if="shirt.length > 0">
      <section id="one" class="image" v-for="item in shirt" :key="item.id">
        <img
          :src="item.image"
          alt
          height="450px"
          width="300px"
          srcset
          style="margin-right: 20px;"
        />
        <img :src="item.imageHover" alt height="450px" width="300px" srcset />
        <div class="site-header" style="opacity: 0.5">
          <h1>
            <span style="color: black;">strou</span>
            <span style="color: #20bf6b">t</span>
          </h1>
        </div>
      </section>
      <section id="two">
        <div class="header" v-for="item in shirt" :key="item.id">
          <p>{{item.name}}</p>
          <p style="font-size: 16px;">{{item.price}} kr</p>
        </div>
        <div class="color-size">
          <div class="colors">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="size">
            <div class="size-container">
              <p>S</p>
            </div>
            <div class="size-container">
              <p>M</p>
            </div>
            <div class="size-container">
              <p>L</p>
            </div>
            <div class="size-container">
              <p>XL</p>
            </div>
          </div>
        </div>
        <div class="buyNow">
          <button class="button-class" @click="addToCart()">Push to cart</button>
        </div>
        <div class="delivery">
          <div class="type frakt">Free shipping</div>
          <div class="type butik">Available in store</div>
          <div class="type oppetKop">Open purchase</div>
          <div class="type retur">Free return in store</div>
        </div>
      </section>
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

<style scoped>
  body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: "Roboto";
  }
  main {
    display: flex;
    height: 100%;
  }
  .image {
    width: 50%;
    height: 100%;
    text-align: center;
    transform: translateY(10%);
  }

  .site-header {
    font-size: 66px;
  }

  #two {
    width: 50%;
    height: 100%;
    text-align: center;
    transform: translateY(20%);
    margin-right: 140px;
  }

  .header {
    height: 100px;
    text-align: center;
  }
  .header p:first-child {
    /* transform: translateY(90%); */
    font-size: 50px;
    margin: 0;
  }

  .colors ul {
    height: 50px;
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;
    padding: 0;
  }

  .colors ul li {
    list-style-type: none;
    padding: 8px;
    height: 1px;
    margin-top: 15px;
    /* border: 0.5px solid black; */
    border-radius: 50%;
  }
  .colors ul li:hover {
    opacity: 0.5;
  }
  .colors ul li:first-child {
    background-color: black;
  }
  .colors ul li:nth-child(2) {
    background-color: rgb(2, 100, 2);
  }
  .colors ul li:nth-child(3) {
    background-color: rgb(177, 177, 177);
  }
  .colors ul li:last-child {
    background-color: rgb(128, 42, 42);
  }

  .colors ul li:hover {
    cursor: pointer;
  }

  .size {
    height: 35px;
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }
  .size-container {
    background-color: #dcdcdc;
    border: rgba(0, 0, 0, 0.2) solid 1px;
    border-right: 0.5px;
    width: 25%;
    cursor: pointer;
  }

  .size-container p {
    transform: translateY(40%);
    margin: 0;
  }

  .size-container:last-child {
    border-right: rgba(0, 0, 0, 0.2) solid 1px;
  }

  .size-container:hover {
    background-color: #dcdcdc;
    opacity: 0.7;
  }

  .buyNow {
    height: 150px;
    width: 50%;
    margin: 0 auto;
  }

  .button-class {
    margin-top: 50px;
    width: 100%;
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
    width: 50%;
    margin: 0 auto;
    height: 150px;
    display: flex;
    flex-wrap: wrap;
  }

  .delivery .type {
    padding: 2%;
    flex-grow: 1;
    flex-basis: 30%;
  }
</style>