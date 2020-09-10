<template>
  <div>
    <md-table v-model="clients" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Owner">{{ item.owner }}</md-table-cell>
        <md-table-cell md-label="Address">{{ item.address }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Phone">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Jobs">{{ item.jobs.length }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      clients: [
        {
          name: "John Doe Inc.",
          owner: "John Doe",
          address: "123 rue des swaggeux, Gatineau",
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
          jobs: [1, 2, 3, 4]
        },
        {
          name: "Jane Doe Inc.",
          owner: "Jane Doe",
          address: "123 rue des swaggeux, Gatineau",
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
          jobs: [1, 2, 3, 4]
        }
      ]
    };
  }
};
</script>
