<template>
  <v-data-table
    :search="search"
    :headers="headers"
    :items="clients"
    class="elevation-1"
  >
    <template v-slot:[`item.status`]="{ item }">
      <v-chip right class="mr-2" color="warning" v-text="item.status" />
    </template>
    <template v-slot:[`item.contracts`]="{ item }">
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
      <slot
        name="addContract"
        v-if="item.contracts.items.length < 3"
        :client="item"
      ></slot>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">More info about {{ item.name }}</td>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small class="mr-2" @click="editItem(item)">mdi-file</v-icon>
    </template>
    <template v-slot:no-data>
      <v-progress-linear
        :color="$root.error ? 'warning' : 'info'"
        indeterminate
      />
    </template>
  </v-data-table>
</template>
<script>
export default {
  props: {
    clients: {
      type: Array,
      default: () => [],
    },
    error: {
      type: Object,
      default: () => {},
    },
    search: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      headers: [
        { text: "ID", value: "clientID" },
        { text: "Company Name", value: "name" },
        { text: "Contact Name", value: "contact" },
        { text: "Contact Email", value: "email" },
        { text: "Contact Phone", value: "phone" },
        // { text: "Business Address", value: "address" },
        { text: "Services", value: "contracts" },
        { text: "Status", value: "status" },
        { text: "Actions", value: "actions" },
      ],
    };
  },
  methods: {
    getTypeAbbr(contract) {
      if (contract.type === "BOOKKEEPING") return "BK";
      else if (contract.type === "PAYROLL") return "PR";
      else if (contract.type === "TAXES") return "TX";
      else return "grey";
    },
    getContractColor(contract) {
      if (contract.type === "BOOKKEEPING") return "warning";
      else if (contract.type === "PAYROLL") return "secondary";
      else if (contract.type === "TAXES") return "accent";
      else return "grey";
    },
    getFullName(user) {
      return `${user.firstName} ${user.lastName}`;
    },
    selectUser(e) {
      this.$emit("click:row", e);
    },
    showItem(item) {
      // console.log(item);
      this.$router.push(`/clients/${item.clientID}`);
    },
    editItem(item) {
      this.$router.push(`/clients/${item.clientID}`);
    },
  },
};
</script>

<style>
th span {
  font-size: 1.5em;
}
</style>