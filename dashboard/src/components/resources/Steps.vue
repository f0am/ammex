<template>
  <v-stepper alt-labels color="teal" v-model="currentStep">
    <v-stepper-header>
      <v-stepper-step step="1">Client</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step step="2">Produits</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step step="3">Sommaire</v-stepper-step>
      <!-- <v-divider></v-divider> -->
    </v-stepper-header>
    <v-stepper-items style="padding: 5%; height: 70vh">
      <v-stepper-content step="1">
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex offset-xs1 xs4>
              <customer-select v-model="customer" />
              <customer-form v-model="customer" />
            </v-flex>
            <v-flex offset-xs2 xs4>
              <contact-select v-model="customer.contact" />
              <contact-form v-model="customer.contact" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-stepper-content>

      <v-stepper-content step="2">
        <h4>UC-1 VLAN</h4>
        <product-select v-model="products" multiple/>
        <!-- <vlan-form v-model="config.building" /> -->
      </v-stepper-content>

      <v-stepper-content step="3">
        <h4>UC-3 VLAN</h4>
        <!-- <vlan-form v-model="config.building" /> -->
      </v-stepper-content>

      <v-stepper-content step="4">
        <h4>VRRP config</h4>
        <!-- <vrrp-form v-model="config.vrrp" /> -->
      </v-stepper-content>

      <v-stepper-content step="5">
        <h4>Servers</h4>
        <!-- <server-form v-model="config.servers" /> -->
      </v-stepper-content>

      <v-btn
        color="teal"
        class="previous"
        @click="currentStep--"
        :disabled="currentStep === 1"
      >Previous</v-btn>
      <v-btn color="teal" class="next" @click="currentStep++" :disabled="currentStep === 10">Next</v-btn>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import CustomerForm from "@/components/resources/customer/Form";
import CustomerSelect from "@/components/resources/customer/Select";

import ContactForm from "@/components/resources/contact/Form";
import ContactSelect from "@/components/resources/contact/SelectCreate";


import ProductForm from "@/components/resources/product/Form";
import ProductSelect from "@/components/resources/product/Select";

export default {
  components: {
    CustomerForm,
    CustomerSelect,
    ContactForm,
    ContactSelect,
    ProductForm,
    ProductSelect
  },
  data() {
    return {
      customer: {
        contact: {}
      },
      products: [],
      config: {
        partner: {},
        building: {},
        vrrp: {},
        uc1: {},
        uc2: {},
        servers: {}
      },
      currentStep: 1
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