<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <form-group
          :label="'First name'"
          :invalid="$v.order.firstname.$invalid"
          required
        >
          <input
            type="text"
            placeholder="First name"
            v-model="order.firstname"
            @blur="$v.order.firstname.$touch"
          />
          <span
            class="form-group-error"
            v-if="!$v.order.firstname.required && $v.order.firstname.$dirty"
          >First name required</span>
        </form-group>
      </div>
      <div class="col-12 col-md-6">
        <form-group
          :label="'Last name'"
          required
          :invalid="$v.order.lastname.$invalid"
        >
          <input
            type="text"
            placeholder="Last name"
            v-model="order.lastname"
            @blur="$v.order.lastname.$touch"
          />
          <span
            class="form-group-error"
            v-if="!$v.order.lastname.required && $v.order.lastname.$dirty"
          >Last name required</span>
        </form-group>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-5">
        <form-group :label="'Phone number'">
          <input
            type="text"
            placeholder="Phone number"
            v-model="order.phonenumber"
          />
        </form-group>
      </div>
      <div class="col-12 col-md-7">
        <form-group
          :label="'E-mail'"
          required
          :invalid="$v.order.email.$invalid"
        >
          <input
            type="text"
            placeholder="E-mail"
            v-model="order.email"
            @blur="$v.order.email.$touch"
          />
          <span
            class="form-group-error"
            v-if="!$v.order.email.required && $v.order.email.$dirty"
          >Email required</span>
          <span
            class="form-group-error"
            v-if="!$v.order.email.email && $v.order.email.$dirty"
          >Email format error</span>
        </form-group>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-4">
        <form-group
          :label="'Postal code'"
          :invalid="$v.order.postalcode.$invalid"
          required
        >
          <input
            type="text"
            placeholder="Postal code"
            v-model="order.postalcode"
            @blur="$v.order.postalcode.$touch"
          />
          <span
            class="form-group-error"
            v-if="!$v.order.postalcode.required && $v.order.postalcode.$dirty"
          >Postal code required</span>
          <span
            class="form-group-error"
            v-if="!$v.order.postalcode.numeric && $v.order.postalcode.$dirty"
          >Only numbers allowed</span>
        </form-group>
      </div>
      <div class="col-6 col-md-4">
        <form-group
          :label="'Address'"
          required
          :invalid="$v.order.address.$invalid"
        >
          <input
            type="text"
            placeholder="Address"
            v-model="order.address"
            @blur="$v.order.address.$touch"
          />
          <span
            class="form-group-error"
            v-if="!$v.order.address.required && $v.order.address.$dirty"
          >Address required</span>
        </form-group>
      </div>
      <div class="col-12 col-md-4">
        <form-group :label="'City'" required :invalid="$v.order.city.$invalid">
          <input
            type="text"
            placeholder="City"
            v-model="order.city"
            @blur="$v.order.city.$touch"
          />
          <span
            class="form-group-error"
            v-if="!$v.order.city.required && $v.order.city.$dirty"
          >City required</span>
        </form-group>
      </div>
    </div>
  </div>
</template>

<script>
  import FormGroup from "../../common/components/formgroup/FormGroup";
  import formValidation from "../../components/form-validation";
  export default {
    name: "form-base",
    components: {
      FormGroup
    },
    props: {
      order: {
        type: Object
      }
    },
    validations: {
      order: {
        ...formValidation
      }
    }
  };
</script>