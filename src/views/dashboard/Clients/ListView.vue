<template>
  <material-card color="info" title="Clients">
    <v-dialog slot="headerActions" v-model="dialog" max-width="800px">
      <v-btn slot="activator" outline>New Client</v-btn>
      <v-card>
        <v-card-text>
          <client-form v-model="client" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" flat @click="create">Create</v-btn>
          <v-btn color="blue darken-1" flat @click="cancel">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <client-list :clients="clients" actions />
  </material-card>
</template>

<script>
// import { Client } from '@/store'
import ClientList from "./List";
import ClientForm from "./Form";
export default {
  components: {
    ClientList,
    ClientForm,
  },
  data() {
    return {
      dialog: false,
      client: {},
      clients: [
        {
          name: "John Doe Inc.",
          owner: "John Doe",
          address: "123 rue quelconque, Gatineau",
          email: "john@doe.ca",
          phone: "819-123-4567",
          partnersName: "Oud-Turnhout",
          cheques: false,
          qst: "12345",
          gst: "12345",
          remittance: "quarterly",
          payrollNumber: "12345",
          payrollRemittance: "monthly",
          corporation: true,
          corporationYearEndDate: new Date(),
          wsib: "12345",
          wsibRemittance: "quaterly",
          wsibCsstRate: "15",
          wsibCode: "12345",
          cliqsecrCode: "12345",
          gstCode: "12345",
          craCode: "12345",
          consent: false,
          t4DueDate: new Date(),
          jobs: [1, 2, 3, 4].length,
        },
        {
          name: "Jane Doe Inc.",
          owner: "Jane Doe",
          address: "123 rue quelconque, Gatineau",
          email: "jane@doe.ca",
          phone: "819-123-4567",
          partnersName: "Oud-Turnhout",
          cheques: false,
          qst: "12345",
          gst: "12345",
          remittance: "quarterly",
          payrollNumber: "12345",
          payrollRemittance: "monthly",
          corporation: true,
          corporationYearEndDate: new Date(),
          wsib: "12345",
          wsibRemittance: "quaterly",
          wsibCsstRate: "15",
          wsibCode: "12345",
          cliqsecrCode: "12345",
          gstCode: "12345",
          craCode: "12345",
          consent: false,
          t4DueDate: new Date(),
          jobs: [1, 2, 3, 4].length,
        },
      ],
    };
  },
  computed: {
    // clients () {
    // return Client.all()
    // }
  },
  mounted() {
    // Client.$fetchClients()
  },
  methods: {
    create() {
      this.dialog = false;
    },
    cancel() {
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>
