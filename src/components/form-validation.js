import { required, email, numeric } from "vuelidate/lib/validators";

export default {
  firstname: {
    required
  },
  lastname: {
    required
  },
  email: {
    required,
    email
  },
  postalcode: {
    required,
    numeric
  },
  address: {
    required
  },
  city: {
    required
  }
};
