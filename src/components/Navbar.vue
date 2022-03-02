<template>
  <div class="nav-items">
    <div v-if="username" class="nav-items-2">
      <button @click="logout">Logout</button>
      <div class="user">
        {{ username }}
      </div>
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

<style scoped>
.nav-items a,
.nav-items-2 div {
  padding: 0.6rem 1rem;
}

.nav-items-2 {
  display: flex;
}

.nav-items {
  display: flex;
}

.user {
  padding: 28px 20px;
}

button {
  border: 1px solid #f48668;
  background-color: transparent;
  color: #f48668;

  padding: 0 20px 0 20px;
  border-radius: 7px;
  transition: 0.3s;
}

button:hover {
  background-color: #f48668;
  border: 1px solid #f48668;
  color: #fff;
}

button:focus {
  box-shadow: 0px 0px 0px 5px #f48668, 0px 0px 0px 0px #f48668;
  outline: none;
}
</style>
