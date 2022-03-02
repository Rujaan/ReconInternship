<template>
  Dashboard Detauls
  <br />
  <p>All value for {{ id }}</p>
  {{ filteredDate }}
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

<style></style>
