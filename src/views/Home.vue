<template>
  <h1>Welcome to the Banking App</h1>
  <div v-if="username">
    <h2>
      Hi {{ username }}
      <br />
      <br />
      Seems like you're logged in Let's go to the
      <span>
        <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link></span
      >
    </h2>
  </div>
  <div v-else>
    <h2>
      Let's get started
      <span> <router-link :to="{ name: 'Login' }">Login</router-link></span>
    </h2>
  </div>
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
