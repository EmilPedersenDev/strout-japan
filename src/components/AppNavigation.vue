<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <div class="dropdown">
      <button class="dropbtn">Om Oss <i class="fa fa-chevron-down"></i></button>
      <div class="dropdown-content">
        <router-link to="/services">Vad vi gör</router-link>
        <router-link to="/values">Värderingar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation'
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
body {
  font-family: 'Roboto', sans-serif;
}
.navbar {
  border-bottom: 3px solid rgba(0,0,0,0.1);
  overflow: hidden;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
font-size: 16px;  
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  color: green;
  cursor: pointer;
}

.dropdown-content{
   display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  font-family: 'Roboto', sans-serif;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
