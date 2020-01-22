<template>
  <div>
    <button class="button-class">{{text}}</button>
  </div>
</template>

<script>
  export default {
    name: "ButtonCustom",

    props: {
      text: {
        type: String
      }
    }
  };
</script>

<style>
  .button-class {
    color: #20bf6b !important;
    text-transform: uppercase;
    background-color: Transparent;
    padding: 10px 20px 10px 20px;
    border: 2px solid #20bf6b !important;
    border-radius: 6px;
    display: inline-block;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    width: 100px;
  }

  .button-class:hover {
    color: gray !important;
    border-radius: 50px;
    border-color: lightgray !important;
    transition: all 0.3s ease 0s;
  }
</style>