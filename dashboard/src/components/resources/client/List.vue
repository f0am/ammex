<template>
  <v-data-table :headers="headers" :items="client" class="elevation-1">
    <template v-slot:items="props">
      <td>{{ props.item.contact }}</td>
      <td>{{ props.item.address }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.phone }}</td>
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.name }}</td>
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
      <td>{{ props.item.jobs }}</td>
      <td>{{ props.item.craConsent }}</td>
      <td>{{ props.item.rqConsent }}</td>
      <td>{{ props.item.wsibConsent }}</td>
      <td>{{ props.item.csstConsent }}</td>

      <td>
        <icon-tool-tip :name="props.item.id" :description="'More Info'">
          <v-icon color="info" class="mr-2" @click="moreInfo(props.item)">mdi-information</v-icon>
        </icon-tool-tip>
      </td>
    </template>
    <template slot="no-data">
      <v-progress-linear color="green" indeterminate />
    </template>
  </v-data-table>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        { text: "Contact Name", value: "contact" },
        { text: "Address", value: "address" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Owners", value: "owners" },
        { text: "Cheques", value: "cheques" },
        { text: "Name", value: "name" },
        { text: "GST", value: "gst" },
        { text: "QST", value: "qst" },
        { text: "Remittance", value: "remittance" },
        { text: "Payroll", value: "payroll" },
        { text: "Payroll Remittance", value: "payrollRemittance" },
        { text: "Corporation", value: "corporation" },
        { text: "Corporation Year End", value: "corporationYearEnd" },
        { text: "WSIB", value: "wsib" },
        { text: "WSIB Remittance", value: "wsibRemittance" },
        { text: "WSIB CSST Rate", value: "wsibCsstRate" },
        { text: "WSIB Code", value: "wsibCode" },
        { text: "Cliqsecr Code", value: "cliqsecrCode" },
        { text: "GST Code", value: "gstCode" },
        { text: "CRA Code", value: "craCode" },
        { text: "T4 Due Date", value: "t4DueDate" },
        { text: "Jobs", value: "jobs" },
        { text: "CRA Consent", value: "craConsent" },
        { text: "RQ Consent", value: "rqConsent" },
        { text: "WSIB Consent", value: "wsibConsent" },
        { text: "CSST Consent", value: "csstConsent" },
      ],
      client: [
        {
          contact: 1,
          address: "123 lol",
          email: "123123@aksjd.lol",
          phone: "12341234"
        }
      ]
    };
  },
  methods: {
    moreInfo(item) {
      this.$router.push(`/client/${item.id}`);
    }
  }
};
</script>

<style>
</style>
