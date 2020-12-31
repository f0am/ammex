<template>
  <material-card color="info" title="Jobs List">
    <jobs-list :jobs="jobs" />
    <v-btn @click="createJob" v-text="'createJob'" />
  </material-card>
</template>

<script>
import { listJobs, getClient } from "@/graphql/queries";
import { createClient, createContract } from "@/graphql/mutations";

import JobsList from "./List";
export default {
  components: {
    JobsList,
  },
  async beforeMount() {
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      try {
        const { data } = await this.$gql(listJobs);
        this.jobs = data.listJobs.items;
      } catch (error) {
        this.$alert(error, "warning");
      }
    },
    // async createClient(input) {
    //   try {
    //     await this.$gql(saveClient, input);
    //     this.$alert("Client created successfully", "success");
    //   } catch (error) {
    //     this.$alert(error, "warning");
    //   }
    //   await this.fetchClients();
    // },
  },
  data() {
    return {
      jobs: [],
      newJob: {},
    };
  },
};
</script>

<style>
</style>
