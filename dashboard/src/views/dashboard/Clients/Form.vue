<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex md4>
        <v-text-field v-model="currentValue.name" label="Name" />
      </v-flex>
      <v-flex md4>
        <v-text-field v-model="currentValue.owner" label="Owner" />
      </v-flex>
      <v-flex md4>
        <v-text-field v-model="currentValue.address" label="Address" />
      </v-flex>
      <v-flex md4>
        <v-text-field v-model="currentValue.email" label="Email" />
      </v-flex>
      <v-flex md4>
        <v-text-field v-model="currentValue.phone" label="Phone" />
      </v-flex>
      <v-flex md4>
        <v-text-field v-model="currentValue.qst" label="QST" />
      </v-flex>
      <v-flex md4>
        <v-text-field v-model="currentValue.qst" label="GST" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
//  {
//         name: "John Doe Inc.",
//         owner: "John Doe",
//         address: "123 rue des swaggeux, Gatineau",
//         email: "john@doe.ca",
//         phone: "819-123-4567",
//         partnersName: "Oud-Turnhout",
//         cheques: false,
//         qst: "12345",
//         gst: "12345",
//         remittance: "quarterly",
//         payrollNumber: "12345",
//         payrollRemittance: "monthly",
//         corporation: true,
//         corporationYearEndDate: new Date(),
//         wsib: "12345",
//         wsibRemittance: "quaterly",
//         wsibCsstRate: "15",
//         wsibCode: "12345",
//         cliqsecrCode: "12345",
//         gstCode: "12345",
//         craCode: "12345",
//         consent: false,
//         t4DueDate: new Date(),
//         jobs: [1, 2, 3, 4].length,
//       },
export default {
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    currentValue: {
      set(value) {
        this.$emit("input", value);
      },
      get() {
        return this.value;
      },
    },
  },
};
</script>

<style>
</style>

   