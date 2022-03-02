<template>
  <div class="dashboardDetails">
    <p @click="goBack" class="back">- Go back</p>
    <h2>Dashboard</h2>
    <span class="total"
      ><h4>All Value For :</h4>
      <h3>{{ id }}</h3>
    </span>
    <table v-if="values">
      <tr class="header">
        <th>Date</th>
        <th>Remarks</th>
        <th>Amount</th>
        <th>Type</th>
      </tr>
      <tr
        v-for="value in filteredDate"
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
</template>

<script>
export default {
  props: ["id"],
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
    goBack() {
      this.$router.go(-1);
    },
  },
  beforeMount() {
    this.getCredits();
  },
  computed: {
    filteredDate() {
      var values = this.values;
      var found = values.filter((value) => value.date === this.id);
      return found;
    },
  },
};
</script>

<style scoped>
.dashboardDetails {
  text-align: left;
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.total h4,
h3 {
  display: inline-block;
}

.back {
  cursor: pointer;
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
