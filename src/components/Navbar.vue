<template>
  <div class="nav-items">
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->

    <router-link :to="{ name: 'Dashboard' }">Go to Dashboard</router-link>

    <div v-if="username" class="nav-items-2">
      <button @click="logout">Logout</button>
      <div>
        {{ username }}
      </div>
    </div>
    <div v-else>
      <router-link :to="{ name: 'Login' }">Go to Login</router-link>
    </div>
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
    logout() {
      localStorage.removeItem("bankApp");
      this.$router.push("/");
    },
  },
};
</script>

<style>
.nav-items a,
.nav-items-2 div {
  padding: 0 1rem 0 1rem;
}

.nav-items-2 {
  display: flex;
}

.nav-items {
  display: flex;
}
</style>
