<template>
  <div class="background-main">
    <h1>Complete Purchase</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-wrapper">
        <div class="name">
          <input
            type="text"
            placeholder="Firstname *"
            @blur="$v.name.$touch()"
            v-model.trim="name"
            :class="{ 'name-error': $v.name.$error }"
          />
          <p v-if="!$v.name.required && $v.name.$dirty">Name is mandatory</p>
          <p v-if="!$v.name.minLength">Name at least 2 letters</p>
          <input
            type="text"
            placeholder="Lastname *"
            @blur="$v.lastName.$touch()"
            v-model.trim="lastName"
            :class="{ 'name-error': $v.lastName.$error }"
          />
          <p
            class="p-error"
            v-if="!$v.lastName.required && $v.lastName.$dirty"
          >Lastname is mandatory</p>
          <p
            class="p-error"
            v-if="!$v.lastName.minLength"
          >Name at least 2 letters</p>
        </div>
        <div class="tel-email">
          <input type="text" placeholder="Tel" />
          <input
            type="text"
            placeholder="Mejl *"
            @blur="$v.mail.$touch()"
            v-model.trim="mail"
            :class="{ 'name-error': $v.mail.$error }"
          />
          <p v-if="!$v.mail.required && $v.mail.$dirty">Mail is mandatory</p>
          <p v-if="!$v.mail.email">Mail format not valid</p>
        </div>
        <div class="adress">
          <input
            type="text"
            placeholder="Address *"
            @blur="$v.adress.$touch()"
            v-model.trim="adress"
            :class="{ 'name-error': $v.adress.$error }"
          />
          <p v-if="!$v.adress.required && $v.adress.$dirty">Address is mandatory</p>
          <p v-if="!$v.adress.minLength">Address format not valid</p>
          <input
            type="text"
            placeholder="Postal code *"
            @blur="$v.postCode.$touch()"
            v-model.trim="postCode"
            :class="{ 'name-error': $v.postCode.$error }"
          />
          <p
            class="postcode-error"
            v-if="!$v.postCode.required && $v.postCode.$dirty"
          >Postkod is mandatory</p>
          <p
            class="postcode-error"
            v-if="!$v.postCode.numeric"
          >Only numbers allowed</p>
          <input
            type="text"
            placeholder="City *"
            @blur="$v.city.$touch()"
            v-model.trim="city"
            :class="{ 'name-error': $v.city.$error }"
          />
          <p
            class="city-error"
            v-if="!$v.city.required && $v.city.$dirty"
          >City is mandatory</p>
          <p class="city-error" v-if="!$v.city.minLength">City format not valid</p>
        </div>
        <div class="payment">
          <div class="pay-card" @click="payment('card')">
            <p>Card</p>
          </div>
          <div class="swish" @click="payment('swish')">
            <p>Swish</p>
          </div>
        </div>
        <div class="card-output" v-if="cardActive">
          <div class="card-name">
            <input
              type="text"
              placeholder="Firstname"
              @blur="$v.card.name.$touch()"
              v-model.trim="card.name"
              :class="{ 'name-error': $v.card.name.$error }"
            />
            <input
              type="text"
              placeholder="Lastname"
              @blur="$v.card.lastName.$touch()"
              v-model.trim="card.lastName"
              :class="{ 'name-error': $v.card.lastName.$error }"
            />
          </div>
          <div class="card-number">
            <input
              type="text"
              placeholder="Cardnumber"
              @blur="$v.card.cardNumber.$touch()"
              v-model.trim="card.cardNumber"
              :class="{ 'name-error': $v.card.cardNumber.$error }"
            />
          </div>
          <div class="card-security">
            <input
              type="text"
              placeholder="MM/DD"
              @blur="$v.card.month.$touch()"
              v-model.trim="card.month"
              :class="{ 'name-error': $v.card.month.$error }"
            />
            <input
              type="text"
              placeholder="CVC"
              @blur="$v.card.cvc.$touch()"
              v-model.trim="card.cvc"
              :class="{ 'name-error': $v.card.cvc.$error }"
            />
          </div>
          <p
            class="error-card-name"
            v-if="!$v.card.name.required && $v.card.name.$dirty"
          >Mandatory</p>
          <p
            class="error-card-lastname"
            v-if="!$v.card.lastName.required && $v.card.lastName.$dirty"
          >Mandatory</p>
          <p
            class="error-card-cardnumber"
            v-if="!$v.card.cardNumber.numeric"
          >Cardnumber only numbers</p>
          <p
            class="error-card-cardnumber-numeric"
            v-if="!$v.card.cardNumber.minLength"
          >Cardnumber 16 numbers</p>
          <p
            class="error-card-cardnumber-numeric"
            v-if="!$v.card.cardNumber.required  && $v.card.cardNumber.$dirty"
          >Mandatory</p>
          <p class="error-card-month" v-if="!$v.card.month.numeric">MM/DD</p>
          <p
            class="error-card-month-obl"
            v-if="!$v.card.month.required  && $v.card.month.$dirty"
          >Mandatory</p>
          <p class="error-card-cvc" v-if="!$v.card.cvc.numeric ">CVC 3 numbers</p>
          <p
            class="error-card-cvc-obl"
            v-if="!$v.card.cvc.required && $v.card.cvc.$dirty"
          >Mandatory</p>
        </div>
        <div class="swish-output" v-else-if="swishActive">
          <input
            type="text"
            placeholder="Tel"
            name="Phone number"
            @blur="$v.tel.$touch()"
            v-model.trim="tel"
            :class="{ 'name-error': $v.tel.$error }"
          />
          <p v-if="!$v.tel.required  && $v.tel.$dirty">Mandatory</p>
          <p v-if="!$v.tel.numeric ">Tel only numbers</p>
        </div>
      </div>
      <div class="button-wrapper">
        <button
          :disabled="isValid"
          :class="{'disabled-button': isValid}"
          type="submit"
          value="Submit"
        >Confrim</button>
      </div>
    </form>
    <div class="instruction">
      <span>*Mandatory fields</span>
      <span>**Card/Swish needs to be ckecked</span>
    </div>
    <Modal>
      <template slot="header">
        <font-awesome-icon
          style="font-size:120px; color: #20bf6b; opacity: 0.7;"
          :icon="['fas', 'question-circle']"
        />
      </template>
      <template slot="body">
        <p
          style="margin-top: 1rem; margin-bottom: 1rem"
        >Do you want to complete the order?</p>
      </template>
      <template slot="footer">
        <button class="modal-button" @click="openCloseModal('yes')">Ja</button>
        <button class="modal-button" @click="openCloseModal('nej')">Nej</button>
      </template>
    </Modal>
    <Modal v-if="showSuccessModal">
      <template slot="body">
        <p style="margin-top: 1rem; margin-bottom: 1rem">Thanks!</p>
        <p
          style="margin-top: 1rem; margin-bottom: 1rem"
        >Confirmation has been sent to your mail</p>
      </template>
    </Modal>
  </div>
</template>

<script>
  import { required, minLength, email, numeric } from "vuelidate/lib/validators";
  import Modal from "../common/components/Modal";
  import { mapActions } from "vuex";

  export default {
    name: "Form",
    props: {
      total: Number
    },

    components: {
      Modal
    },
    data() {
      return {
        cardActive: false,
        swishActive: false,
        name: "",
        lastName: "",
        adress: "",
        postCode: "",
        city: "",
        mail: "",
        tel: "",
        card: {
          name: "",
          lastName: "",
          cardNumber: "",
          month: "",
          cvc: ""
        },
        activeProducts: [],
        showSuccessModal: false
      };
    },
    computed: {
      isValid() {
        return this.cardActive
          ? this.$v.name.$invalid ||
              this.$v.lastName.$invalid ||
              this.$v.adress.$invalid ||
              this.$v.postCode.$invalid ||
              this.$v.city.$invalid ||
              this.$v.mail.$invalid ||
              this.$v.card.name.$invalid ||
              this.$v.card.lastName.$invalid ||
              this.$v.card.cardNumber.$invalid ||
              this.$v.card.month.$invalid ||
              this.$v.card.cvc.$invalid
          : this.$v.name.$invalid ||
              this.$v.lastName.$invalid ||
              this.$v.adress.$invalid ||
              this.$v.postCode.$invalid ||
              this.$v.city.$invalid ||
              this.$v.mail.$invalid ||
              this.$v.tel.$invalid;
      }
    },

    mounted() {
      this.getShirts();
    },
    validations: {
      name: {
        required,
        minLength: minLength(2)
      },
      lastName: {
        required,
        minLength: minLength(2)
      },
      mail: {
        required,
        email
      },
      adress: {
        required,
        minLength: minLength(4)
      },
      city: {
        required,
        minLength: minLength(4)
      },
      postCode: {
        required,
        numeric
      },
      tel: {
        required,
        numeric
      },
      card: {
        required,
        numeric,
        name: {
          required
        },
        lastName: {
          required
        },
        cardNumber: {
          required,
          numeric,
          minLength: minLength(16)
        },
        month: {
          required,
          numeric,
          minLength: minLength(4)
        },
        cvc: {
          required,
          numeric,
          minLength: minLength(3)
        }
      }
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
      payment(value) {
        if (value === "card") {
          this.cardActive = true;
          this.swishActive = false;
          this.tel = "";
        } else {
          this.cardActive = false;
          this.swishActive = true;
          this.card.name = "";
          this.card.lastName = "";
          this.card.cardNumber = "";
          this.card.month = "";
          this.card.cvc = "";
        }
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
    @media (min-width: 676px) {
      position: absolute;
    }
    h1 {
      text-align: center;
      font-size: 30px;
      padding: 30px;
      @media (min-width: 676px) {
        font-size: 60px;
        transform: translateY(100%);
      }
    }
  }
  .instruction {
    height: 2%;
    @media (min-width: 676px) {
    }
  }
  .instruction span {
    position: absolute;
    left: 31%;
    bottom: 16%;
    color: white;
    @media (max-width: 676px) {
      left: 2%;
      bottom: -1%;
    }
  }
  .instruction span:last-child {
    position: absolute;
    left: 31%;
    bottom: 14%;
    color: white;
    @media (max-width: 676px) {
      left: 2%;
      bottom: -4%;
    }
  }
  form {
    height: 600px;
    margin: 0 auto;
    border-radius: 4px;
    @media (min-width: 676px) {
      background: linear-gradient(rgba(255, 255, 255, 0.3));
      width: 40%;
      transform: translateY(20%);
    }
  }
  form::before {
    opacity: 0.4;
  }
  .disabled-button {
    color: red;
    background: red;
    transition: none;
  }
  .disabled-button:hover {
    color: #fff !important;
    background: red;
    transition: none;
    border-radius: 6px;
    border-color: #fff !important;
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
  .button-wrapper {
    text-align: center;
    margin-top: 60px;
  }
  form button {
    background: #000;
    opacity: 0.7;
    color: #fff !important;
    text-transform: uppercase;
    padding: 10px 20px 10px 20px;
    border: 2px solid #fff !important;
    border-radius: 6px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    width: 120px;
    @media (min-width: 676px) {
      position: absolute;
      left: 39%;
      bottom: 2%;
    }
  }
  form button:hover {
    color: gray !important;
    border-radius: 50px;
    border-color: lightgray !important;
    transition: all 0.3s ease 0s;
  }
  .form-wrapper {
    height: 80%;
    margin: 0 auto;
    background: #000;
    border-radius: 4px;
    opacity: 0.6;
    @media (min-width: 676px) {
      transform: translateY(10%);
      width: 80%;
    }
  }

  .name {
    text-align: center;
    height: 15%;
    width: 100%;
    @media (max-width: 676px) {
      padding-top: 20px;
    }
  }
  .name p {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 13%;
    left: 9%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 34%;
      left: 9%;
    }
  }
  .name .p-error {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 13%;
    left: 51%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 34%;
      left: 51%;
    }
  }
  input {
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    padding: 8px;
    width: 40%;
    outline: none;
    color: #fff;
    @media (min-width: 676px) {
      transform: translateY(50%);
    }
  }
  input:focus {
    color: #fff;
  }
  .name-error {
    border-bottom: 1px solid red;
  }
  input::placeholder {
    color: #fff;
  }
  .name input:first-child {
    margin-right: 2%;
    font-weight: bold;
  }

  .tel-email {
    text-align: center;
    height: 15%;
    width: 100%;
  }
  .tel-email input {
    border: none;
    background: transparent;
    padding: 8px;
    outline: none;
    border-bottom: 1px solid #fff;
    @media (min-width: 676px) {
      transform: translateY(50%);
    }
  }
  .tel-email p {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 28%;
    left: 42%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 42%;
      left: 42%;
    }
  }
  .tel-email .name-error {
    border-bottom: 1px solid red;
    width: 50%;
  }
  .tel-email input:first-child {
    width: 30%;
  }
  .tel-email input:last-child {
    width: 50%;
  }
  .tel-email input:first-child {
    margin-right: 2%;
  }

  .adress {
    text-align: center;
    height: 15%;
    width: 100%;
  }
  .adress p {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 43%;
    left: 11%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 53%;
      left: 11%;
      font-size: 10px;
    }
  }
  .adress .postcode-error {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 43%;
    left: 37%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 53%;
      left: 37%;
      font-size: 10px;
    }
  }
  .adress .city-error {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 43%;
    left: 64%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 53%;
      left: 64%;
      font-size: 10px;
    }
  }

  .adress input {
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    padding: 8px;
    outline: none;
    width: 24.3333%;
    margin-right: 2%;
    @media (min-width: 676px) {
      transform: translateY(50%);
    }
  }
  .adress input:first-child {
    margin-right: 2%;
    width: 24.3333%;
  }
  .adress .name-error {
    margin-right: 2%;
    width: 24.3333%;
    border-bottom: 1px solid red;
  }
  .adress input:nth-child(2) {
    margin-right: 2%;
    width: 24.3333%;
  }
  .adress input:last-child {
    width: 24.3333%;
  }
  .payment {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .pay-card {
    width: 40%;
    text-align: center;
    cursor: pointer;
    border: solid rgb(151, 151, 151);
    border-width: 0.01em;
    margin-right: 10px;
  }
  .pay-card:hover {
    background: linear-gradient(rgba(255, 255, 255, 0.05));
  }
  .pay-card p {
    margin: 0;
    color: #fff;
    padding-top: 10px;
    @media (min-width: 676px) {
      transform: translateY(60%);
      padding-top: 0px;
    }
  }
  .swish {
    width: 40%;
    cursor: pointer;
    text-align: center;
    border: solid rgb(151, 151, 151);
    border-width: 0.01em;
  }
  .swish:hover {
    background: linear-gradient(rgba(255, 255, 255, 0.05));
  }
  .swish p {
    margin: 0;
    color: #fff;
    padding-top: 10px;
    @media (min-width: 676px) {
      transform: translateY(60%);
      padding-top: 0px;
    }
  }
  .swish-output {
    height: 30%;
    text-align: center;
    transform: translateY(30%);
    @media (min-width: 676px) {
      transform: translateY(30%);
    }
  }
  .swish-output .name-error {
    border-bottom: 1px solid red;
  }
  .swish-output p {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 43%;
    left: 30%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 30%;
    }
  }
  .card-output {
    height: 40%;
    text-align: center;
  }
  .card-output .error-card-name {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 70%;
    left: 9%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 73%;
    }
  }
  .card-output .error-card-lastname {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 70%;
    left: 52%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 73%;
    }
  }
  .card-output .error-card-cardnumber {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 86%;
    left: 9%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 85%;
    }
  }
  .card-output .error-card-cardnumber-numeric {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 83%;
    left: 9%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 82%;
    }
  }
  .card-output .error-card-month {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 96%;
    left: 25%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 92%;
    }
  }
  .card-output .error-card-month-obl {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 96%;
    left: 25%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 92%;
    }
  }
  .card-output .error-card-cvc {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 96%;
    left: 56%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 92%;
    }
  }
  .card-output .error-card-cvc-obl {
    color: rgb(255, 1, 1);
    font-weight: bold;
    display: inline;
    position: absolute;
    top: 96%;
    left: 55%;
    font-size: 12px;
    @media (max-width: 676px) {
      top: 92%;
    }
  }
  .card-name {
    height: 33%;
  }
  .card-name input:first-child {
    margin-right: 2%;
  }
  .card-security {
    height: 33%;
    width: 100%;
    float: left;
  }
  .card-security input {
    width: 20%;
  }
  .card-security input:first-child {
    margin-right: 10%;
  }
  .card-number {
    height: 33%;
    width: 100%;
  }
  .card-number input {
    width: 85%;
  }
</style>