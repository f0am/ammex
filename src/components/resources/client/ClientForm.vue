<template>
  <v-layout column wrap>
    <v-flex>
      <v-text-field
        id="companyName"
        v-model="currentValue.name"
        label="Company Name"
      />
    </v-flex>
    <v-flex>
      <v-text-field
        id="clientNumber"
        v-model="currentValue.clientNumber"
        label="Client Number"
      />
    </v-flex>
    <v-flex>
      <vuetify-google-autocomplete
        ref="address"
        id="map"
        classname="form-control"
        placeholder="Please type your address"
        v-on:placechanged="getAddressData"
        country="ca"
      >
      </vuetify-google-autocomplete>
    </v-flex>
    <v-flex>
      <v-combobox
        v-model="currentValue.owners"
        label="Company Owner/Partners"
        multiple
        chips
      ></v-combobox>
    </v-flex>
  </v-layout>
</template> 

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      dateMenu: false,
      address: {},
    };
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    getAddressData: function (addressData, placeResultData, id) {
      this.address = addressData;
    },
  },
};
</script>

<style>
</style>
