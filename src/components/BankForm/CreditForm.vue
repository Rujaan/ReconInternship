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
      total: JSON.parse(localStorage.getItem("bankApp")).total || 0,
      bankApp: JSON.parse(localStorage.getItem("bankApp")),
      credit: {},
    };
  },
  methods: {
    handleFormSubmit() {
      this.bankApp.value.push({
        amount: this.amount,
        date: this.date,
        remarks: this.remarks,
        type: "credit",
      });
      this.bankApp.total += this.amount;
      // console.log(this.bankApp.value);
      this.$emit("added");
      // this.bankApp.value = this.bank.value.push(this.credits);

      localStorage.setItem("bankApp", JSON.stringify(this.bankApp));
    },
  },
  mounted() {
    if (!this.bankApp.value) {
      this.bankApp.value = [];
    }
    if (!this.bankApp.total) {
      this.bankApp.total = 0;
    }
  },
  components: { Modal },
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
  box-shadow: 0px 0px 0px 1px #f48668, 0px 0px 0px 0px #f48668;
  outline: none;
}
</style>
