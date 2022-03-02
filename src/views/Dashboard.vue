<template>
  <div class="dashboard">
    <h1>Dashboard</h1>

    <div v-if="showCreditModal">
      <CreditForm @close="toggleCreditModal" @added="updateTable" />
    </div>
    <div v-if="showDebitModal">
      <DebitForm @close="toggleDebitModal" @added="updateTable" />
    </div>

    <div class="buttons">
      <button @click="toggleCreditModal">Add Credit</button>
      <button @click="toggleDebitModal">Add Debit</button>
    </div>
    <div>
      <DashboardTable :key="componentKey" />
    </div>
  </div>
</template>

<script>
import CreditForm from "../components/BankForm/CreditForm.vue";
import DebitForm from "../components/BankForm/DebitForm.vue";
import DashboardTable from "../components/DashboardTable.vue";
export default {
  data() {
    return {
      username: null,
      showCreditModal: false,
      showDebitModal: false,
      componentKey: 0,
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
  watch: {},
  methods: {
    toggleCreditModal() {
      this.showCreditModal = !this.showCreditModal;
    },
    toggleDebitModal() {
      this.showDebitModal = !this.showDebitModal;
    },
    updateTable() {
      this.componentKey += 1;
    },
  },
  components: { CreditForm, DebitForm, DashboardTable },
};
</script>

<style scoped>
.dashboard {
  text-align: left;
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.buttons {
  display: flex;
  column-gap: 1rem;
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
  box-shadow: 0px 0px 0px 1px #f48668, 0px 0px 0px 0px #f48668;
  outline: none;
}
</style>
