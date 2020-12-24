<template>
  <material-card color="info" title="Jobs List">
    <jobs-list :jobs="jobs" />
    <v-btn @click="createJob" v-text="'createJob'"/>
  </material-card>
</template>

<script>
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

import JobsList from "./List";
export default {
  components: {
    JobsList,
  },
  async beforeMount() {
    try {
      const resp = await this.$api.graphql({ query: queries.listJobs });
      this.jobs = resp.data.listJobs.items;
      console.log(resp);

      console.log(this.jobs);
    } catch (error) {
      this.$root.message = error;
      this.$root.color = "warning";
      this.$root.show = true;
      this.$root.error = error;
    }
  },
  methods: {
    async createJob() {
      try {
        await this.$api.graphql({
          query: mutations.createJob,
          variables: {
            input: this.newJob,
          },
        });
        const resp = await this.$api.graphql({ query: queries.listJobs });
        this.clients = resp.data.listJobs.items;
        this.closeJobDialog();

        this.$root.message = "Job successfully created.";
        this.$root.color = "success";
        this.$root.show = true;
      } catch (error) {
        this.$root.message = error;
        this.$root.color = "warning";
        this.$root.show = true;
        this.$root.error = error;
      }
    },
  },
  data() {
    return {
      jobs: [],
      newJob: {
        clientID: '10001',
        type: 'PAYROLL'
      }
    };
  },
};
</script>

<style>
</style>
