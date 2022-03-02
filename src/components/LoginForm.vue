<template>
  <form @submit.prevent="handleFormSubmit">
    <label for="username">Username</label>
    <input type="text" required v-model="username" />
    <label for="password">Password</label>
    <input type="password" required v-model="password" />
    <div>
      <button>Submit</button>
    </div>
    <p class="noAcc">
      Don't Have an account ? <strong>Don't Worry</strong> . We'll create it on
      the get go.
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      bankApp: {},
    };
  },
  methods: {
    handleFormSubmit() {
      this.bankApp.username = this.username;
      localStorage.setItem("bankApp", JSON.stringify(this.bankApp));
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  background: white;
  text-align: left;
  margin-top: 1rem;
  border-radius: 10px;
}
label {
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
form p {
  color: #f48668;
  font-size: 0.8em;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input:focus {
  border: 1px solid #f48668;
  outline: none;
}
button {
  margin: 25px 0 15px;
  background-color: #f48668;
  border: 1px solid #f48668;
  padding: 12px 20px;
  border-radius: 7px;
  transition: 0.3s;
  color: #fff;
}

button:hover {
  border: 1px solid #f48668;
  background-color: transparent;
  color: #f48668;
}

button:focus {
  box-shadow: 0px 0px 0px 5px #f48668, 0px 0px 0px 0px #f48668;
  outline: none;
}
</style>
