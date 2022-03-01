<template>
  <h1>Welcome to the Banking App</h1>
  <h3>
    Let's get started
    <span> <router-link :to="{ name: 'Login' }">Login</router-link></span>
  </h3>
  <p>
    hi
    {{ username }}
  </p>
</template>

<script>
export default {
  computed: {
    username: function () {
      if (localStorage.getItem("bankApp")) {
        return JSON.parse(localStorage.getItem("bankApp")).username;
      }
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push("/dashboard");
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style></style>
