<template>
  <div>
    <button @click="wantPerson()"></button>
    <div class="persons-wrapper" v-for="(person, id) in this.AllPersons" :key="id">
      <span> {{person.id}} </span>
      <span> {{person.title}} </span>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
data() {
  return {
    AllPersons: [],
  }
},
/* eslint-disable */
computed: {
  ...mapGetters({getPlayer: 'getStudent'}),

  player() {
    return this.getPlayer;
  }
},

watch: {
  player(newVal, oldVal) {
    console.log('WATCHER', newVal);
    
    this.AllPersons = newVal;
  }
},
methods: {
  ...mapActions({personVuex: 'GET_PERSON'}),
  wantPerson() {
    let _this = this;
    this.personVuex().then(player => {
    })
    .catch(error => {
      console.log(error);
      
    })
  }
},
}
</script>