<template>
  <div class="center">
    <h2>Login</h2>
    <LoginForm />
  </div>
</template>
<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  components: { LoginForm },
  mounted() {
    if (localStorage.getItem("bankApp")) {
      this.username = JSON.parse(localStorage.getItem("bankApp")).username;
      if (this.username || this.username == "undefined") {
        this.$router.push("/dashboard");
      }
    }
  },
};
</script>

<style scoped>
h2 {
  color: #f48668;
}
</style>
