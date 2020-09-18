<template>
  <v-stepper alt-labels v-model="currentStep">
    <!-- <v-stepper-header>
      <v-stepper-step step="1">Controller</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step step="2">UC-1</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step step="3">UC-3</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step step="4">VRRP</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step step="5">Servers</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step step="6">Review</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items style="padding: 5%; height: 70vh">
      <v-stepper-content step="1">
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs6 offset-xs3>
              <h4>Partner</h4>
              <partner-select v-model="config.partner" />
            </v-flex>
            <v-flex xs6 offset-xs3>
              <h4>Controllers</h4>
              <controller-select v-model="config.building" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-stepper-content>

      <v-stepper-content step="2">
      </v-stepper-content>

      <v-stepper-content step="2">
        <h4>UC-1 VLAN</h4>
        <vlan-form v-model="config.building" />
      </v-stepper-content>

      <v-stepper-content step="3">
        <h4>UC-3 VLAN</h4>
        <vlan-form v-model="config.building" />
      </v-stepper-content>

      <v-stepper-content step="4">
        <h4>VRRP config</h4>
        <vrrp-form v-model="config.vrrp" />
      </v-stepper-content>

      <v-stepper-content step="5">
        <h4>Servers</h4>
        <server-form v-model="config.servers" />
      </v-stepper-content>

      <v-btn
        color="primary"
        class="previous"
        @click="currentStep--"
        :disabled="currentStep === 1"
      >Previous</v-btn>
      <v-btn color="primary" class="next" @click="currentStep++" :disabled="currentStep === 10">Next</v-btn>
    </v-stepper-items> -->
  </v-stepper>
</template>

<script>
// import partnerSelect from "./partner/Select";
// import buildingSelect from "./building/List";
// import controllerSelect from "./controller/Select";
// import wapMgmtForm from "./wapMgmt/Form";
// import vrrpForm from "./vrrp/Form";
// import vlanForm from "./vlan/Form";
// import serverForm from "./server/Form";

export default {
  components: {
    // partnerSelect,
    // wapMgmtForm,
    // buildingSelect,
    // controllerSelect,
    // vrrpForm,
    // vlanForm,
    // serverForm
  },
  data() {
    return {
      config: {
        partner: {},
        building: {},
        vrrp: {},
        uc1: {},
        uc2: {},
        servers: {}
      },
      currentStep: 1,
    };
  }
};
</script>

<style scoped>
.previous {
  position: absolute !important;
  bottom: 15px;
  left: 5%;
}

.next {
  position: absolute !important;
  bottom: 15px;
  right: 5%;
}
</style>