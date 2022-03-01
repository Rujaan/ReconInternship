<template>Dashboard {{ username }}</template>

<script>
export default {
  data() {
    return {
      username: null,
    };
  },
  mounted() {
    if (localStorage.getItem("bankApp")) {
      this.username = JSON.parse(localStorage.getItem("bankApp")).username;
      if (!this.username || this.username == "undefined") {
        this.$router.push("/login");
      }
    } else {
      this.$router.push("/login");
    }
  },
};
</script>

<style></style>
