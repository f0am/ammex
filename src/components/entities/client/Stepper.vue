<template>
  <v-container class="pa-0" id="wizard" tag="section">
    <validation-observer v-slot="{ valid }">
      <base-material-wizard
        v-model="tab"
        :available-steps="availableSteps"
        :items="tabs"
        class="mx-auto"
        @click:next="next(valid)"
        @click:prev="tab--"
      >
        <template v-slot:title> New Client </template>

        <template v-slot:subtitle> Add a new client to the system </template>
        <v-tab-item class="pb-12">
          <v-row
            class="mx-auto"
            justify="space-around"
            style="max-width: 700px"
          >
            <v-col cols="10" class="text-center">
              <v-layout column wrap>
                <v-flex>
                  <v-text-field
                    id="name"
                    v-model="currentValue.name"
                    label="Company Name"
                  />
                </v-flex>
                <v-flex>
                  <v-text-field
                    id="clientNumber"
                    v-model="currentValue.clientNumber"
                    label="Client Number"
                    v-mask="'#####'"
                  />
                </v-flex>
                <v-flex>
                  <vuetify-google-autocomplete
                    ref="address"
                    id="map"
                    label="Business Address"
                    v-on:placechanged="getAddressData"
                    country="ca"
                  >
                  </vuetify-google-autocomplete>
                </v-flex>
                <!-- <v-flex>
                  <v-combobox
                    v-model="currentValue.owners"
                    label="Company Owner/Partners"
                    multiple
                    chips
                  ></v-combobox>
                </v-flex> -->
              </v-layout>
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item class="pb-12">
          <v-row
            class="mx-auto"
            justify="space-around"
            style="max-width: 700px"
          >
            <v-col cols="10" class="text-center">
              <v-layout column wrap>
                <v-flex>
                  <validation-provider
                    v-slot="{ errors }"
                    rules="required"
                    name="name"
                  >
                    <v-text-field
                      autocomplete="off"
                      v-model="currentValue.contact.firstName"
                      :error-messages="errors"
                      label="First Name"
                    />
                  </validation-provider>
                </v-flex>
                <v-flex>
                  <validation-provider
                    v-slot="{ errors }"
                    rules="required"
                    name="name"
                  >
                    <v-text-field
                      autocomplete="off"
                      v-model="currentValue.contact.lastName"
                      :error-messages="errors"
                      label="Last Name"
                    />
                  </validation-provider>
                </v-flex>
                <v-flex>
                  <validation-provider
                    v-slot="{ errors }"
                    rules="required"
                    name="phone"
                  >
                    <v-text-field
                      autocomplete="off"
                      v-model="currentValue.contact.phone"
                      :error-messages="errors"
                      label="Phone"
                      v-mask="'(###) ###-####'"
                    />
                  </validation-provider>
                </v-flex>
                <v-flex>
                  <validation-provider
                    v-slot="{ errors }"
                    rules="required|email"
                    name="email"
                  >
                    <v-text-field
                      v-model="currentValue.contact.email"
                      :error-messages="errors"
                      label="Email"
                    />
                  </validation-provider>
                </v-flex>
              </v-layout>
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item class="pb-12">
          <div class="text-center display-1 grey--text font-weight-light mb-6">
            Please review
          </div>

          <form>
            <v-row
              class="mx-auto"
              justify="space-around"
              style="max-width: 800px"
            >
              <v-col cols="12">
                <show-client :item="currentValue" />
                {{ currentValue }}
              </v-col>
            </v-row>
          </form>
        </v-tab-item>
      </base-material-wizard>
    </validation-observer>
  </v-container>
</template>

<script>
import ShowClient from "./ShowClient";
export default {
  components: { ShowClient },
  name: "ClientFormWizard",
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      address: "",
      client: {},
      type: "",
      tab: 0,
      owners: [],
      tabs: ["Client", "Contact", "Review"],
    };
  },

  computed: {
    availableSteps() {
      const steps = [0, 1, 2, 3];

      return steps;
    },
    currentValue: {
      set(value) {
        this.$emit("input", value);
      },
      get() {
        return this.value
      },
    },
  },
  methods: {
    getAddressData(addressData, placeResultData, id) {
      // this.currentValue.address = addressData.
      console.log(addressData);
      this.currentValue.address = `${addressData.name}, ${addressData.locality}, ${addressData.administrative_area_level_1}, ${addressData.country}, ${addressData.postal_code}`;
      // this.currentValue.streetName = addressData.name;
      this.currentValue.province = addressData.administrative_area_level_1;
      this.currentValue.city = addressData.locality;
      this.currentValue.postalCode = addressData.postal_code;
    },
    next(valid) {
      if (!valid) return;

      if (this.tab === this.tabs.length - 1) {
        this.$emit("confirm");
      } else {
        this.tab++;
      }
    },
  },
};
</script>

<style lang="sass">
.v-text-field--placeholder
  display: 'none'

.v-card.v-card.v-card--account
  border-color: currentColor
  border-width: 4px

.v-icon
  color: inherit

.v-card--account,
.v-card--account:before
  border-radius: 50%
</style>
