<template>
  <h1>Table</h1>
  <table v-if="values">
    <tr>
      <th>Date</th>
      <th>Remarks</th>
      <th>Amount</th>
      <th>Type</th>
    </tr>
    <tr v-for="value in values" :key="value.type">
      <td>{{ value.date }}</td>
      <td>{{ value.remarks }}</td>
      <td>{{ value.amount }}</td>
      <td>{{ value.type }}</td>
    </tr>
    <tr></tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      values: {},
    };
  },
  watch: {
    values: function (values) {
      //do something when the data changes.
      if (values) {
        console.log("changeddd");
      }
    },
  },

  methods: {
    getCredits() {
      if (localStorage.getItem("bankApp")) {
        this.values = JSON.parse(localStorage.getItem("bankApp")).value;
      }
    },
  },
  mounted() {
    this.getCredits();
  },
};
</script>

<style></style>
