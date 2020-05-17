<template>
  <div class="background-main">
    <h1>Complete Purchase</h1>
    <div class="form">
      <form-base :order="order"></form-base>
      <div class="swish">
        <img src="https://www.swish.nu/img/swish-logotype.82ec35e3.svg" alt />
        <div class="col-12 col-md-6 swish-input">
          <form-group
            :label="'Swish'"
            required
            :invalid="$v.order.swish.$invalid"
          >
            <input
              type="text"
              placeholder="Swish"
              v-model="order.swish"
              @blur="$v.order.swish.$touch"
            />
            <span
              class="form-group-error"
              v-if="!$v.order.swish.required && $v.order.swish.$dirty"
              >Phone number required</span
            >
            <span
              class="form-group-error"
              v-if="!$v.order.swish.numeric && $v.order.swish.$dirty"
              >Only numbers</span
            >
          </form-group>
        </div>
      </div>
      <div class="button-wrapper">
        <button @click="openModal" :disabled="$v.$invalid">Beställ</button>
      </div>
    </div>
    <Modal>
      <template slot="header">
        <font-awesome-icon
          style="font-size:120px; color: #20bf6b; opacity: 0.7;"
          :icon="['fas', 'question-circle']"
        />
      </template>
      <template slot="body">
        <p style="margin-top: 1rem; margin-bottom: 1rem">
          Do you want to complete the order?
        </p>
      </template>
      <template slot="footer">
        <button class="modal-button" @click="openCloseModal('yes')">Ja</button>
        <button class="modal-button" @click="openCloseModal('nej')">Nej</button>
      </template>
    </Modal>
    <Modal v-if="showSuccessModal">
      <template slot="body">
        <p style="margin-top: 1rem; margin-bottom: 1rem">Thanks!</p>
        <p style="margin-top: 1rem; margin-bottom: 1rem">
          Confirmation has been sent to your mail
        </p>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "../common/components/Modal";
import FormBase from "../common/components/FormBase";
import FormGroup from "../common/components/formgroup/FormGroup";
import { mapActions } from "vuex";
import { required, numeric } from "vuelidate/lib/validators";

export default {
  name: "Form",
  props: {
    total: Number
  },

  components: {
    Modal,
    FormBase,
    FormGroup
  },
  data() {
    return {
      cardActive: false,
      swishActive: false,
      order: {
        firstname: "",
        lastname: "",
        phonenumber: "",
        email: "",
        postalcode: "",
        address: "",
        city: "",
        swish: ""
      },
      activeProducts: [],
      showSuccessModal: false
    };
  },
  validations: {
    order: {
      swish: {
        required,
        numeric
      }
    }
  },

  mounted() {
    this.getShirts();
  },
  methods: {
    ...mapActions(["ShowOrHideModal", "GET_CART_SHIRTS", "REMOVE_ALL_IN_CART"]),
    openModal() {
      this.$store.dispatch("ShowOrHideModal");
    },
    openCloseModal(showModal) {
      if (showModal === "yes") {
        this.showSuccessModal = true;
        this.openModal();
        this.clearCart();
        this.openModal();
      } else {
        this.showSuccessModal = false;
        this.openModal();
      }
    },
    getShirts() {
      this.GET_CART_SHIRTS().then(result => {
        this.activeProducts = result;
      });
    },
    clearCart() {
      this.$store.dispatch("REMOVE_ALL_IN_CART", this.activeProducts);
    },

    onSubmit() {
      this.openModal();
    }
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  width: 100%;
  height: 100%;
}
.background-main {
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0.2)),
    url("~@/assets/forest1.jpg") no-repeat;
  background-size: cover;
  @media (min-width: 767px) {
    min-height: 1000px;
  }
  @media (max-width: 767px) {
    background: #fff;
  }

  h1 {
    text-align: center;
    font-size: 30px;
    padding: 30px;
    @media (max-width: 767px) {
      padding-bottom: 0px;
    }
  }
  .form {
    padding: 30px 0px;
    .swish {
      margin-top: 40px;
      text-align: center;
      img {
        width: 30%;
        @media (max-width: 767px) {
          background: linear-gradient(rgba(255, 255, 255, 0.5));
          padding: 20px;
          border-radius: 16px;
          box-shadow: 1px 2px 9px 9px rgba(77, 72, 69, 0.25);
        }
      }
      .swish-input {
        margin: 0 auto;
      }
    }
    @media (min-width: 767px) {
      width: 60%;
      margin: 0 auto;
      background: linear-gradient(rgba(255, 255, 255, 0.5));
      border-radius: 16px;
      padding: 30px;
    }
    .button-wrapper {
      text-align: center;
      margin: 20px 0px 0px 0px;
      button {
        background: #fff;
        border: none;
        border-radius: 8px;
        padding: 10px 30px;
        transition: all 0.3s ease 0s;
        border: 1px solid #20bf6b;
        &:hover {
          cursor: pointer;
          background: transparent;
          border: 1px solid #20bf6b;
        }
        &:disabled {
          opacity: 0.5;
          background: gray;
          color: #fff;
        }
      }
    }
  }
}
.modal-button {
  color: #20bf6b !important;
  text-transform: uppercase;
  background-color: Transparent;
  padding: 10px 20px 10px 20px;
  border: 2px solid #20bf6b !important;
  border-radius: 6px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
}
.modal-button:hover {
  color: gray !important;
  border-radius: 50px;
  border-color: lightgray !important;
  transition: all 0.3s ease 0s;
}
.modal-button:first-child {
  margin-right: 20px;
}
</style>
