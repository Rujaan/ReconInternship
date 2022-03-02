<template>
  <Modal heading="Credit Form">
    <form @submit.prevent="handleFormSubmit">
      <label for="datetime">Date</label>
      <input type="date" required v-model="date" />
      <label for="amount">Amount</label>
      <input type="number" required v-model.number="amount" />
      <label for="remarks">Remarks</label>
      <input type="text" v-model="remarks" />
      <div>
        <button>Submit</button>
        {{ credits }}
        <br />
        --------
        {{ bankApp }}
      </div>
    </form>
  </Modal>
</template>

<script>
import Modal from "../../components/Modal.vue";
export default {
  data() {
    return {
      date: new Date().toISOString().slice(0, 10),
      amount: 0,
      remarks: "",
      bankApp: JSON.parse(localStorage.getItem("bankApp")),
      credit: {},
      credits: [],
    };
  },
  methods: {
    handleFormSubmit() {
      this.credits.push({
        amount: this.amount,
        date: this.date,
        remarks: this.remarks,
      });
      this.bankApp.credits = this.credits;
      // this.bankApp.push(this.credits);

      localStorage.setItem("bankApp", JSON.stringify(this.bankApp));
    },
  },
  components: { Modal },
};
</script>

<style></style>
