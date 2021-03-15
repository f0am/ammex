<template>
  <v-container fluid tag="section">
    <v-dialog v-model="contractDialog" max-width="600px">
      <contract-provider v-slot="{ ContractProvider }">
        <job-provider v-slot="{ JobProvider }">
          <stepper
            v-model="newContract"
            @confirm="handlerContract(ContractProvider, JobProvider)"
            style="overflow: hidden"
          />
        </job-provider>
      </contract-provider>
    </v-dialog>
    <base-material-card
      title="Clients"
      class="px-5 py-3"
      color="primary"
      inline
    >
      <template #card-actions>
        <v-dialog v-model="clientDialog" max-width="600px">
          <template #activator="{ on, attrs }">
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
          <client-provider v-slot="{ ClientProvider }">
            <client-wizard
              v-model="newClient"
              @confirm="ClientProvider.create(newClient)"
            />
          </client-provider>
        </v-dialog>
      </template>
      <template #header-actions>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          class="ml-auto"
          label="Search"
          single-line
          style="max-width: 250px"
        />
      </template>

      <list-with-clients :search="search">
        <template #[`item.actions`]="{ item }">
          <v-btn fab small color="primary" @click="openContractDialog(item)">
            <v-icon>mdi-text-box-plus</v-icon>
          </v-btn>
          <v-dialog v-model="editClientDialog" max-width="600px">
            <template #activator="{ on, attrs }">
              <v-btn
                color="info"
                class="ml-3 darken-4"
                fab
                small
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </template>
            <v-card>
              {{ item }}
            </v-card>
          </v-dialog>
        </template>
        <template #[`item.status`]="{ item, ClientProvider }">
          <client-status :value="item.status">
            <template
              slot="PENDING"
              title="Confirm client"
              icon="mdi-exclamation-thick"
              @confirm="ClientProvider.setStatus(item, 'ACTIVE')"
            >
              Please confirm the current information about newclient.
              <show-client :item="item" />
            </template>
          </client-status>
        </template>
      </list-with-clients>
    </base-material-card>
  </v-container>
</template>

<script>
import ListWithClients from "@/components/entities/client/ListWithClients";
import ClientWizard from "@/components/entities/client/Stepper";
import ContractForm from "@/components/entities/contract/Form";
import Stepper from "@/components/entities/contract/Stepper";
import { ClientProvider, JobProvider } from "@/providers";
import CtaBtn from "@/components/helper/CtaBtn";
import ChipColor from "@/components/helper/ColoredChip";
import MapCondComp from "@/components/helper/MapCondComp";
import ShowClient from "@/components/entities/client/ShowClient";
const ClientStatus = MapCondComp({
  colors: {
    PENDING: "warning",
    ACTIVE: "success",
    DISABLED: "",
  },
});
export default {
  components: {
    ListWithClients,
    ClientWizard,
    ClientProvider,
    JobProvider,
    ClientStatus,
    ShowClient,
    Stepper,
  },
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
      this.newContract = {
        ...this.newContract,
        client: client,
        contractClientId: client.id,
      };
      this.contractDialog = true;
    },
    async handlerContract(contract, job) {
      const cw = await contract.create(this.newContract);
      await job.createMany(this.newJobs(cw.createContract));
    },
    newJobs(contract) {
      const jobs = [
        {
          name: "T4",
          jobContractId: contract.id,
          deadline: "2020-02-02",
        },
      ];

      return jobs;
    },
  },
  data() {
    return {
      search: "",
      itemLoading: null,
      clientDialog: false,
      newClient: {
        contact: {
          firstName: "qwe ",
          lastName: "qwe ",
          phone: "(123) 123-1312",
          email: "qwe@qwe.com",
        },
        name: "qeqwe q",
        clientNumber: "12312",
        address: "1235 Bay St, Toronto, ON, Canada, M5R 3K4",
        province: "ON",
        city: "Toronto",
        postalCode: "M5R 3K4",
        owners: [],
      },
      editClientDialog: false,
      contractDialog: false,
      newContract: {},
    };
  },
};
</script>
<style>
.cta-btn div.v-avatar {
  /* background-color: transparent !important; */
  border: transparent 1px solid;
}

.cta-btn:hover div.v-avatar {
  background-color: transparent !important;
  border: #fff 2px solid !important;
}
</style>