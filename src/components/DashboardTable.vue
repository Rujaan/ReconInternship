<template>
  <h1>Table</h1>
  total: {{ total }}
  <table v-if="values">
    <tr>
      <th>Date</th>
      <th>Remarks</th>
      <th>Amount</th>
      <th>Type</th>
    </tr>
    <tr v-for="value in values" :key="value.remarks">
      <td>
        <router-link
          :to="{ name: 'DashboardDetails', params: { id: value.date } }"
        >
          {{ value.date }}
        </router-link>
      </td>
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
      total: 0,
    };
  },
  methods: {
    getCredits() {
      if (localStorage.getItem("bankApp")) {
        this.values = JSON.parse(localStorage.getItem("bankApp")).value;
        this.total = JSON.parse(localStorage.getItem("bankApp")).total;
      }
    },
  },
  mounted() {
    this.getCredits();
  },
};
</script>

<style></style>
