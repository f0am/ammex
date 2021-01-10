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
        <template v-slot:title> Service Request </template>

        <template v-slot:subtitle>
          Create a new service request for an existing client
        </template>
        <!-- <v-tab-item class="pb-12">
          <div class="text-center display-1 font-weight-light mb-6">
            Select the client needing services
          </div>

          <v-row
            class="mx-auto"
            justify="space-around"
            style="max-width: 700px"
          >
            <v-col cols="10" class="text-center">
              <client-select v-model="currentValue.client" @input="next" />
            </v-col>
          </v-row>
        </v-tab-item> -->

        <v-tab-item class="pb-12">
          <div class="text-center display-1 font-weight-light mb-6">
            Select the type of service required
          </div>

          <v-row
            class="mx-auto"
            justify="space-around"
            style="max-width: 600px"
          >
            <v-col cols="10" class="text-center">
              <v-item-group
                v-model="selectedContractType"
                @change="next"
                class="row ma-0"
              >
                <v-item v-for="(contractType, i) in contractTypes" :key="i">
                  <template v-slot="{ active, toggle }">
                    <v-col class="text-center" cols="3">
                      <v-card
                        :class="active ? 'primary--text' : 'grey--text'"
                        class="mb-6 mx-auto pa-6 d-inline-block v-card--account"
                        outlined
                        @click="toggle"
                      >
                        <v-icon large v-text="contractType.icon" />
                      </v-card>

                      <div
                        class="subtitle-2 text--primary"
                        v-text="contractType.label"
                      />
                    </v-col>
                  </template>
                </v-item>
              </v-item-group>
              <!-- <v-autocomplete
                v-model="currentValue.type"
                :items="['BOOKKEEPING', 'PAYROLL', 'TAXES']"
                label="Select Service Type"
                @input="next"
              ></v-autocomplete> -->
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item class="pb-12">
          <div class="text-center display-1 font-weight-light mb-6">
            Some details are needed in order to complete the request
          </div>
          <v-row
            class="mx-auto"
            justify="space-around"
            style="max-width: 600px"
          >
            <v-col cols="10" class="text-center">
              <label>Start date</label>
              <v-row>
                <v-col cols="5">
                  <v-menu
                    ref="startDatePicker"
                    v-model="startDatePicker"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="currentValue.startDate"
                        label="Start date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="currentValue.startDate"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="startDatePicker = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="
                          $refs.startDatePicker.save(currentValue.startDate)
                        "
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="5">
                  <v-menu
                    ref="endDatePicker"
                    v-model="endDatePicker"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="currentValue.endDate"
                        label="End date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="currentValue.endDate"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="endDatePicker = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.endDatePicker.save(currentValue.endDate)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item class="pb-12">
          <div class="text-center display-1 font-weight-light mb-6">
            Some details are needed in order to complete the request
          </div>
          <v-row
            class="mx-auto"
            justify="space-around"
            style="max-width: 600px"
          >
            <v-col cols="10" class="text-center">
              <taxes-form
                v-if="currentValue.type === 'TAXES'"
                v-model="currentValue"
              />
              <payroll-form
                v-if="currentValue.type === 'PAYROLL'"
                v-model="currentValue"
              />
              <bookkeeping-form
                v-if="currentValue.type === 'BOOKKEEPING'"
                v-model="currentValue"
              />
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item class="pb-12">
          <div class="text-center display-1 font-weight-light mb-6">
            Confirm that the information provided is accurate
          </div>

          <form>
            <v-row
              class="mx-auto"
              justify="space-around"
              style="max-width: 600px"
            >
              <v-col cols="10">
                <pre>{{ currentValue }}</pre>
                <!-- <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{
                      currentValue.client.name
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider />
                <v-list-item two-line v-if="selectedContractType">
                  <v-list-item-icon>
                    <v-icon>{{
                      contractTypes[selectedContractType].icon
                    }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{
                      contractTypes[selectedContractType].label
                    }}</v-list-item-title>
                    <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider />

                <v-list-item two-line v-if="selectedContractType">
                  <v-list-item-icon>
                    <v-icon></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{
                      contractTypes[selectedContractType].label
                    }}</v-list-item-title>
                    <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title>Three-line item</v-list-item-title>
                    <v-list-item-subtitle>
                      Secondary line text Lorem ipsum dolor sit amet,
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      consectetur adipiscing elit.
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item> -->
              </v-col>
            </v-row>
          </form>
        </v-tab-item>
      </base-material-wizard>
    </validation-observer>
  </v-container>
</template>

<script>
// import ClientSelect from "@/components/resources/client/Select";
import TaxesForm from "./taxes/Form";
import PayrollForm from "./payroll/Form";
import BookkeepingForm from "./bookkeeping/Form";
export default {
  name: "DashboardFormsWizard",

  components: {
    // ClientSelect,
    BookkeepingForm,
    TaxesForm,
    PayrollForm,
  },

  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      client: null,
      tab: 0,
      tabs: ["Service", "Details", "Details", "Review"],
      selectedContractType: null,
      contractTypes: [
        {
          value: "BOOKKEEPING",
          label: "Bookkeeping",
          icon: "mdi-book-open-variant",
        },
        {
          value: "PAYROLL",
          label: "Payroll",
          icon: "mdi-account-cash",
        },
        {
          value: "TAXES",
          label: "Taxes",
          icon: "mdi-file-document-multiple",
        },
      ],
    };
  },

  computed: {
    availableSteps() {
      const steps = [0, 1, 2, 3, 4];

      // if (this.currentValue.client) steps.push(1);
      // if (this.currentValue.type) steps.push(2);
      // if (this.currentValue.type) steps.push(3);
      // if (this.first && this.last && this.email) steps.push(1);

      // if (this.stringAccount && steps.includes(1)) steps.push(2);

      // if (
      //   this.address &&
      //   this.street &&
      //   this.city &&
      //   this.state &&
      //   steps.includes(2)
      // )
      //   steps.push(3);

      return steps;
    },
    currentValue: {
      set(value) {
        this.$emit("input", value);
      },
      get() {
        return this.value;
      },
    },
  },
  watch: {
    selectedContractType(val) {
      this.$emit("input", {
        ...this.currentValue,
        type: this.contractTypes[this.selectedContractType].value,
      });
    },
  },
  methods: {
    next(valid) {
      // if (!valid) return;

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
.v-card.v-card.v-card--account
  border-color: currentColor
  border-width: 4px

  .v-icon
    color: inherit

  .v-card--account,
  .v-card--account:before
    border-radius: 50%
</style>
