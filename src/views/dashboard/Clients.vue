<template>
  <v-container fluid tag="section">
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
        <!-- <template #[`item.contracts`]="{ item }">
          <span v-if="item.contracts">
            <v-chip
              right
              v-for="contract in item.contracts.items"
              class="mr-1 lighten-1"
              :color="getContractColor(contract)"
              :key="contract.id"
              outlined
              style="font-weight: 400"
              v-text="getTypeAbbr(contract)"
            >
            </v-chip>
          </span>
          <v-chip @click="openContractDialog(client)">
            <v-icon>mdi-plus-thick</v-icon>
          </v-chip>
        </template> -->
        <template #[`item.actions`]="{ item }">
          <v-dialog v-model="editClientDialog" max-width="600px">
            <template #activator="{ on, attrs }">
              <v-btn
                color="info"
                class="darken-4"
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
          <!-- <v-btn rounded style="padding-left: 4px !important">
            <v-avatar size="35" class="green darken-4 mr-3">
              <v-icon>mdi-file</v-icon>
            </v-avatar>
            <span>STUFF</span>
          </v-btn>
          <cta-btn
            color="primary"
            icon="mdi-exclamation-thick"
            v-bind="{ item, ClientProvider }"
          >
            CONFIRM
          </cta-btn> -->
        </template>
        <template #[`item.status`]="{ item }">
          <cta-btn
            color="warning"
            altColor="darken-3"
            icon="mdi-exclamation-thick"
            v-bind="{ item, ClientProvider }"
            @click="$refs"
          >
            {{ item.status }}
          </cta-btn>
        </template>
      </list-with-clients>
    </base-material-card>
  </v-container>
</template>

<script>
import ListWithClients from "@/components/entities/client/ListWithClients";
// import ClientListView from "@/components/entities/client/ListView";
import ClientWizard from "@/components/entities/client/Stepper";
import ContractForm from "@/components/entities/contract/Form";
import Stepper from "@/components/entities/contract/Stepper";
import { ClientProvider } from "@/providers";
import CtaBtn from "@/components/helper/CtaBtn";
import ChipColor from "@/components/helper/ColoredChip";
const ClientStatus = ChipColor({
  PENDING: "primary",
  ACTIVE: "success",
  DISABLED: "",
});
export default {
  components: {
    ListWithClients,
    ClientWizard,
    ClientProvider,
    // ClientStatus,
    CtaBtn,
    // ClientListView,
  },
  data() {
    return {
      search: "",
      itemLoading: null,
      clientDialog: false,
      newClient: {},
      editClientDialog: false,
    };
  },
};
</script>
