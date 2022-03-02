<template>
  Dashboard
  <br />
  <div v-if="showCreditModal">
    <CreditForm @close="toggleCreditModal" />
  </div>
  <div v-if="showDebitModal">
    <DebitForm @close="toggleDebitModal" />
  </div>
  <div>
    <button @click="toggleCreditModal">Credit</button>
    <button @click="toggleDebitModal">Debit</button>
  </div>
  <div>
    <DashboardTable />
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
  methods: {
    toggleCreditModal() {
      this.showCreditModal = !this.showCreditModal;
    },
    toggleDebitModal() {
      this.showDebitModal = !this.showDebitModal;
    },
  },
  components: { CreditForm, DebitForm, DashboardTable },
};
</script>

<style></style>
