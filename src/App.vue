<script setup>
import Navbar from "./components/Navbar.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class="navbar">
    <div class="logo">Logo</div>
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
}

.navbar {
  display: flex;
  justify-content: space-between;
}

.logo {
  text-align: left;
}
</style>
