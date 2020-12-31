<template>
  <base-material-card title="Clients" class="px-5 py-3" color="primary" inline>
    <template v-slot:header-actions>
      <v-dialog v-model="clientDialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            style="top: -30px"
            color="primary"
            fab
            large
            class="mb-2"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>
        </template>

        <client-wizard v-model="newClient" @confirm="createClient(newClient)" />
      </v-dialog>
    </template>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      class="ml-auto"
      label="Search"
      single-line
      style="max-width: 250px"
    />
    <v-dialog v-model="contractDialog" max-width="600px">
      <stepper v-model="newContract" @confirm="createContract(newContract)" />
    </v-dialog>
    <clients-list :clients="clients" :search="search">
      <template v-slot:addContract="{ client }">
        <v-chip @click="openContractDialog(client)">
          <v-icon>mdi-plus-thick</v-icon>
        </v-chip>
      </template>
    </clients-list>
  </base-material-card>
</template>
<script>
import ClientsList from "@/components/resources/client/List";
import ClientWizard from "@/components/resources/client/Stepper";
import ContractForm from "@/components/resources/contract/Form";
import Stepper from "@/components/resources/contract/Stepper";

import { fetch, create } from "./index";
import { createContractJobs } from "@/components/resources/job/index";
import { createContract } from "@/graphql/mutations";

export default {
  mixins: [fetch, create, createContractJobs],
  components: {
    Stepper,
    ClientsList,
    ClientWizard,
  },
  async beforeMount() {
    this.fetchClients();
  },
  methods: {
    async createContract(input) {
      delete input.client;
      try {
        await this.$gql(createContract, { input });
        this.$alert("Contract created successfully", "success");
        // this.createContractJobs(input);
        if (input.type === "BOOKKEEPING") await this.createBookkeepingJobs(input);
        else if (input.type === "TAXES") await this.createTaxesJobs(input);
      } catch (error) {
        this.$alert(error, "warning");
      }
      await this.fetchClients();
    },
    closeClientDialog() {
      this.clientDialog = false;
      this.newClient = {};
    },
    closeContractDialog() {
      this.contractDialog = false;
      this.newContract = {};
    },
    openContractDialog(client) {
      this.newContract = { ...this.newContract, client, clientID: client.id };
      this.contractDialog = true;
    },
  },
  data() {
    return {
      search: "",

      newClient: {},
      clientDialog: null,

      newContract: {},
      contractDialog: null,
    };
  },
};
</script>

<style scoped>
table#client-info > tr > td:nth-child(1) {
  text-align: left;
}
table#client-info > tr > td:nth-child(2) {
  text-align: right;
}
</style>
