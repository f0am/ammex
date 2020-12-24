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

        <client-wizard v-model="newClient" @confirm="saveClient" />
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
      <stepper v-model="newContract" @confirm="saveContract" />
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

import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

import Stepper from "@/components/resources/contract/Stepper";

export default {
  components: {
    Stepper,
    ClientsList,
    ClientWizard,
  },
  async beforeMount() {
    try {
      const resp = await this.$api.graphql({ query: queries.listClients });
      this.clients = resp.data.listClients.items;
      console.log(resp);

      console.log(this.clients);
    } catch (error) {
      this.$root.message = error;
      this.$root.color = "warning";
      this.$root.show = true;
      this.$root.error = error;
    }
  },
  methods: {
    selectClient(client) {
      this.newContract.client = client;
    },
    async saveClient() {
      try {
        await this.$api.graphql({
          query: mutations.createClient,
          variables: {
            input: this.newClient,
          },
        });
        const resp = await this.$api.graphql({ query: queries.listClients });
        this.clients = resp.data.listClients.items;
        this.closeClientDialog();

        this.$root.message = "Client successfully created.";
        this.$root.color = "success";
        this.$root.show = true;
      } catch (error) {
        this.$root.message = error;
        this.$root.color = "warning";
        this.$root.show = true;
        this.$root.error = error;
      }
    },
    async saveContract() {
      try {
        console.log(JSON.stringify(this.newContract));
        const { client, ...input } = this.newContract;
        console.log(input);
        const s = await this.$api.graphql({
          query: mutations.createContract,
          variables: {
            input: {
              ...input,
              clientID: client.id,
              cheques: parseInt(input.cheques)
            },
          },
        });
        const resp = await this.$api.graphql({ query: queries.listClients });
        this.clients = resp.data.listClients.items;
        this.closeContractDialog();

        this.$root.message = "Client successfully created.";
        this.$root.color = "success";
        this.$root.show = true;
      } catch (error) {
        this.$root.message = error;
        this.$root.color = "warning";
        this.$root.show = true;
        this.$root.error = error;
      }
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
      this.newContract = { ...this.newContract, client };
      this.contractDialog = true;
    },
  },
  data() {
    return {
      search: "",
      clients: [],
      selectedClient: null,
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