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
        <template v-slot:title> New User </template>

        <template v-slot:subtitle>
          Create an account for a new employee
        </template>
        <v-tab-item class="pb-12">
          <div class="text-center display-1 font-weight-light mb-6">
            Let's start with basic information
          </div>
          <v-row
            class="mx-auto"
            justify="space-around"
            style="max-width: 700px"
          >
            <v-col cols="10" class="text-center">
              <v-layout column wrap>
                <v-flex>
                  <v-text-field v-model="currentValue.userID" label="Employee Number" />
                </v-flex>
                <v-flex>
                  <v-text-field
                    v-model="currentValue.firstName"
                    label="First Name"
                  />
                </v-flex>
                <v-flex>
                  <v-text-field
                    v-model="currentValue.lastName"
                    label="Last Name"
                  />
                </v-flex>
                <v-flex>
                  <v-text-field v-model="currentValue.email" label="Email" />
                </v-flex>
                <v-flex>
                  <v-text-field
                    v-model="currentValue.phone"
                    label="Phone"
                    v-mask="'(###) ###-####'"
                  />
                </v-flex>
              </v-layout>
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item class="pb-12">
          <div class="text-center display-1 font-weight-light mb-6">
            Please select a role for the new user
          </div>
          <v-row
            class="mx-auto"
            justify="space-around"
            style="max-width: 700px"
          >
            <v-col cols="10" class="text-center">
              <v-item-group v-model="currentValue.role" class="row ma-0">
                <v-item v-for="(role, i) in roles" :key="i" :value="role.value">
                  <template v-slot="{ active, toggle }">
                    <v-col class="text-center" cols="4">
                      <v-card
                        :class="active ? 'primary--text' : 'grey--text'"
                        class="mb-6 mx-auto pa-6 d-inline-block v-card--account"
                        outlined
                        @click="toggle"
                      >
                        <v-icon large v-text="role.icon" />
                      </v-card>

                      <div
                        class="subtitle-2 text--primary"
                        v-text="role.label"
                      />
                    </v-col>
                  </template>
                </v-item>
              </v-item-group>
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
              style="max-width: 800px"
            >
              <v-col cols="12" md="8">
                <pre
                  >{{ currentValue }}
                </pre>
              </v-col>
            </v-row>
          </form>
        </v-tab-item>
      </base-material-wizard>
    </validation-observer>
  </v-container>
</template>

<script>
export default {
  name: "DashboardFormsWizard",

  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      tab: 0,
      tabs: ["Profile", "Role", "Review"],
      serviceType: null,
      roles: [
        {
          value: "EMPLOYEE",
          label: "Employee",
          icon: "mdi-book-open-variant",
        },
        {
          value: "MANAGER",
          label: "Manager",
          icon: "mdi-account-cash",
        },
        {
          value: "ADMIN",
          label: "Administrator",
          icon: "mdi-file-document-multiple",
        },
      ],
    };
  },

  computed: {
    availableSteps() {
      const steps = [0, 1, 2, 3];

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
