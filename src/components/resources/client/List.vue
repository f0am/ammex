<template>
  <v-data-table
    :headers="headers"
    :items="client"
    class="elevation-1"
    @click:row="showItem"
  
  >
    <!-- <template v-slot:items="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.contact }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.phone }}</td>
      <td>{{ props.item.jobs }}</td>
      <td>{{ props.item.address }}</td>
      <td>{{ props.item.owners }}</td>
      <td>{{ props.item.cheques }}</td>
      <td>{{ props.item.qst }}</td>
      <td>{{ props.item.gst }}</td>
      <td>{{ props.item.remittance }}</td>
      <td>{{ props.item.payrollNumber }}</td>
      <td>{{ props.item.payrollRemittance }}</td>
      <td>{{ props.item.corporation }}</td>
      <td>{{ props.item.corporationYearEnd }}</td>
      <td>{{ props.item.wsib }}</td>
      <td>{{ props.item.wsibRemittance }}</td>
      <td>{{ props.item.wsibCsstRate }}</td>
      <td>{{ props.item.wsibCode }}</td>
      <td>{{ props.item.cliqsecrCode }}</td>
      <td>{{ props.item.gstCode }}</td>
      <td>{{ props.item.craCode }}</td>
      <td>{{ props.item.t4DueDate }}</td>
      <td>{{ props.item.craConsent }}</td>
      <td>{{ props.item.rqConsent }}</td>
      <td>{{ props.item.wsibConsent }}</td>
      <td>{{ props.item.csstConsent }}</td> -->
    <!-- </template> -->
    <template v-slot:item.jobs="{ item }">
      <v-avatar color="primary" size="25" style="color: #fff">{{
        item.jobs
      }}</v-avatar>
      <v-avatar color="secondary" size="25" style="color: #fff">2</v-avatar>
      <v-avatar color="warning" size="25" style="color: #fff">2</v-avatar>
      <v-avatar color="info" size="25" style="color: #fff">2</v-avatar>
    </template>
    <!-- <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="showItem(item)"> mdi-pencil </v-icon>
    </template> -->
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Contact Name", value: "contact" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        { text: "Address", value: "address" },
        { text: "Jobs", value: "jobs" },
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
      client: [
        {
          id: 1,
          contact: "Jeremie S Robitaille",
          name: "Hada Alvarenga Inc.",
          address: "1234 boulevard de l'Hopital, Gatineau, QC",
          email: "123123@aksjd.lol",
          phone: "(123)111-1234",
          jobs: [
            {
              type: "Taxes",
            },
            {
              type: "Payroll",
            },
            {
              type: "GST",
            },
          ],
        },
      ],
    };
  },
  methods: {
    showItem(item) {
      this.$router.push(`/clients/${item.id}`);
    },
    jobsByType(jobs) {
      let jobsByType = {};
      jobs.forEach((job) => {
        if (jobsByType[job.type]) {
          jobsByType[job.type] = jobsByType[job.type] + 1;
        } else {
          jobsByType[job.type] = 1;
        }
      });

      return jobsByType;
    },
  },
};
</script>

<style>
table tr {
  cursor: pointer;
}
</style>
