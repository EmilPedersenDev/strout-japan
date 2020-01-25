<template>
  <div>
    <transition name="modal">
      <div class="modal-mask" v-show="showModal">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                <font-awesome-icon
                  style="font-size:120px; color: #20bf6b; opacity: 0.7;"
                  :icon="['fas', 'check-circle']"
                />
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                <p>Product added in cart</p>
              </slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <button class="modal-default-button" @click="closeModal()">Okay!</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  export default {
    computed: {
      ...mapGetters({ showModal: "getModal" })
    },
    methods: {
      ...mapActions(["ShowOrHideModal"]),
      closeModal() {
        this.ShowOrHideModal();
        this.$router.push("/shop");
      }
    }
  };
</script>

<style lang="scss" scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 500px;
    min-height: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .modal-header {
    text-align: center;
    height: 60%;
    justify-content: center;
    svg {
      margin: 0 auto;
    }
  }
  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }
  .modal-body {
    height: 20%;
    text-align: center;
    padding-top: 8px;
    p {
      margin-top: 1rem !important;
      margin-bottom: 1rem;
    }
  }
  .modal-footer {
    height: 20%;
    text-align: center;
    justify-content: center;
    button {
      margin: 0 auto;
    }
  }
  .modal-default-button {
    color: #20bf6b !important;
    text-transform: uppercase;
    background-color: Transparent;
    padding: 10px 20px 10px 20px;
    border: 2px solid #20bf6b !important;
    border-radius: 6px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }
  .modal-default-button:hover {
    color: gray !important;
    border-radius: 50px;
    border-color: lightgray !important;
    transition: all 0.3s ease 0s;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
