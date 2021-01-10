<template>
  <v-data-table :headers="headers" :items="jobs" class="elevation-1">
    <template slot="no-data">
      <v-progress-linear color="green" indeterminate />
    </template>
  </v-data-table>
</template>
<script>
export default {
  props: {
    jobs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      headers: [
        { text: "ID", value: "jobID" },
        { text: "Client", value: "clientID" },
        { text: "Type", value: "type" },
        { text: "Due Date", value: "dueDate" },
      ],
    };
  },
  methods: {
    moreInfo(item) {
      // this.$router.push(`/partners/${item.id}`);
    },
  },
};
</script>

<style>
</style>
