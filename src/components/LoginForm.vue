<template>
  <form @submit.prevent="handleFormSubmit">
    <label for="username">Username</label>
    <input type="text" required v-model="username" />
    <label for="password">Password</label>
    <input type="password" required v-model="password" />
    <div>
      <button>Submit</button>
    </div>
  </form>
  <p>email: {{ username }} passwrd : {{ password }}</p>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleFormSubmit() {
      console.log(this.username);
      console.log(this.password);
      localStorage.setItem("username", this.username);
    },
  },
};
</script>

<style></style>
