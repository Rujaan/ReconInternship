<script setup>
import Navbar from "./components/Navbar.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class="navbar">
    <div class="logo"><router-link to="/">Logo</router-link></div>
    <Navbar v-if="this.$route.path !== '/login'" />
  </div>

  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 3rem 3rem 0 3rem;
  height: 80vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
}

.logo {
  align-self: center;
}

.logo a {
  text-align: left;
  color: #f17756;
  font-size: larger;
  text-decoration: none;
}

.center {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
