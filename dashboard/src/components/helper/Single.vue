<template>
  <v-layout wrap row>
    <v-flex xs12 v-for="(field, k) in fields" :key="k">
      <!-- <v-layout wrap row v-if="typeof field[1] !== 'Object'">
        <v-flex xs3 style="font-weight: 700; text-transform: capitalize">{{ field[0] }}</v-flex>
        <v-flex xs9>{{ field[1] }}</v-flex>
      </v-layout>-->
      <v-layout wrap row>
        <v-flex xs3 style="font-weight: 700; text-transform: capitalize">{{ translate(field[0]) }}</v-flex>
        <v-flex xs9>
          <pre>{{ field[1] }}</pre>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  computed: {
    fields() {
      return Object.entries(this.model).splice(1);
    }
  },
  methods: {
    translate(s) {
      if (s === "name") return "nom";
      else if (s === "price") return "prix";
      else if (s === "quantity") return "quantité";
      else if (s === "address") return "adresse";
      else return s;
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>