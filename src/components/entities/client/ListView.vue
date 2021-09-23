<template>
  <client-provider v-slot="{ ClientProvider }">
    <base-material-card
      title="Clients"
      class="px-5 py-3"
      color="primary"
      inline
    >
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
          <client-wizard
            v-model="newClient"
            @confirm="ClientProvider.create(newClient)"
          />
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
        <contract-provider v-slot="{ ContractProvider }">
          <stepper
            v-model="newContract"
            @confirm="ContractProvider.create(newContract)"
            style="overflow: hidden"
          />
        </contract-provider>
      </v-dialog>
      <client-list
        :search="search"
        :loading="ClientProvider.loading"
        :items="ClientProvider.items"
      >
        <template v-slot:addContract="{ client }">
          <v-chip @click="openContractDialog(client)">
            <v-icon>mdi-plus-thick</v-icon>
          </v-chip>
        </template>
        <template v-slot:actions="{ client }">
          <v-icon
            small
            class="mr-2"
            @click="ClientProvider.activateClient(client)"
            >mdi-file</v-icon
          >
          <v-icon
            small
            class="mr-2"
            @click="ClientProvider.disableClient(client)"
            >mdi-account</v-icon
          >
        </template>
      </client-list>
    </base-material-card>
  </client-provider>
</template>

<script>
import ClientList from "@/components/entities/client/List";
import ClientWizard from "@/components/entities/client/Stepper";
import ContractForm from "@/components/entities/contract/Form";
import Stepper from "@/components/entities/contract/Stepper";

import { ClientProvider, ContractProvider } from "@/providers";
export default {
  components: {
    Stepper,
    ClientWizard,
    ClientList,
    ClientProvider,
    ContractProvider,
  },
  mounted() {
    console.log(this);
  },
  computed: {},
  methods: {
    closeClientDialog() {
      this.clientDialog = false;
      this.newClient = {};
    },
    closeContractDialog() {
      this.contractDialog = false;
      this.newContract = {};
    },
    openContractDialog(client) {
      this.newContract = { ...this.newContract, contractClientId: client.id };
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
