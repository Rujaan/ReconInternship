<template>
  <div v-if="values">
    <h2>Table</h2>
    <span class="total"
      ><h4>Total :</h4>
      <h3>{{ total }}</h3>
    </span>
    <table>
      <tr class="header">
        <th>Date</th>
        <th>Remarks</th>
        <th>Amount</th>
        <th>Type</th>
      </tr>
      <tr
        v-for="value in values"
        :key="value.remarks"
        :class="value.type == 'credit' ? 'green' : 'red'"
      >
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
  </div>
  <div v-else class="else">
    <p>Add credit or balance to get started..</p>
  </div>
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

<style scoped>
.total h4,
h3 {
  display: inline-block;
}

.else {
  margin-top: 8rem;
}

.total h3 {
  color: #f48668;
  letter-spacing: 1px;
  margin-left: 5px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  text-align: left;
  padding: 8px;
}

.header {
  background-color: #fbfbfb;
}

.green {
  background-color: rgb(134 239 172);
}

.red {
  background-color: rgb(252 165 165);
}
</style>
