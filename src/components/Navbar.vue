<template>
  <div class="nav-items">
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    <router-link :to="{ name: 'Dashboard' }">Go to Dashboard</router-link>
    <router-link :to="{ name: 'Login' }">Go to Login</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-items a {
  padding: 0 1rem 0 1rem;
}
</style>
