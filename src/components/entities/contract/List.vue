<template>
  <v-data-table
    :headers="headers"
    :items="clients"
    class="elevation-1"
    @click:row="selectUser"
    style="text-transform: capitalize"
  >
    <template v-slot:[`item.action`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <!-- <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->
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
  },
  data() {
    return {
      headers: [
        { text: "ID", value: "clientNumber" },
        { text: "Name", value: "name" },
        { text: "Contact Name", value: "contact" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        { text: "Address", value: "address" },
        { text: "Contracts", value: "contracts" },
        { text: "Actions", value: "actions" },
        // { text: "Actions", value: "actions" },
        // { text: "Owners", value: "owners" },
        // { text: "Cheques", value: "cheques" },
        // { text: "GST", value: "gst" },
        // { text: "QST", value: "qst" },
        // { text: "Remittance", value: "remittance" },
        // { text: "Payroll", value: "payroll" },
        // { text: "Payroll Remittance", value: "payrollRemittance" },
        // { text: "Corporation", value: "corporation" },
        // { text: "Corporation Year End", value: "corporationYearEnd" },
        // { text: "WSIB", value: "wsib" },
        // { text: "WSIB Remittance", value: "wsibRemittance" },
        // { text: "WSIB CSST Rate", value: "wsibCsstRate" },
        // { text: "WSIB Code", value: "wsibCode" },
        // { text: "Cliqsecr Code", value: "cliqsecrCode" },
        // { text: "GST Code", value: "gstCode" },
        // { text: "CRA Code", value: "craCode" },
        // { text: "T4 Due Date", value: "t4DueDate" },
        // { text: "CRA Consent", value: "craConsent" },
        // { text: "RQ Consent", value: "rqConsent" },
        // { text: "WSIB Consent", value: "wsibConsent" },
        // { text: "CSST Consent", value: "csstConsent" },
      ],
    };
  },
  methods: {
    getFullName(user) {
      return `${user.firstName} ${user.lastName}`;
    },
    selectUser(e) {
      this.$emit("click:row", e);
    },
    showItem(item) {
      // console.log(item);
      this.$router.push(`/clients/${item.id}`);
    },
    editItem(item) {
      this.$router.push(`/clients/${item.id}`);
    },
  },
};
</script>

<style>
</style>