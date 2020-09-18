<template>
  <v-data-table :headers="headers" :items="quotes" :rows-per-page-items="[10]">
    <template slot="items" slot-scope="{ item }">
      <td>{{ item.id }}</td>
      <td>{{ item.customer }}</td>
      <td>{{ item.representative }}</td>
      <td>{{ item.deliveryDate }}</td>
      <td>{{ item.updatedAt }}</td>
      <td>{{ item.createdAt }}</td>
      <td>{{ (item.total / 100).toFixed(2) }} $</td>
      <td>
        <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
        <v-icon small @click="deleteItem(item)">delete</v-icon>
      </td>
    </template>
    <template slot="no-data">
      <v-progress-linear color="green" indeterminate />
    </template>
  </v-data-table>
</template>
<script>
import { Quote } from "@/store";
export default {
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Client", value: "customer" },
        { text: "Représentant", value: "representative" },
        { text: "Date de livraison", value: "deliveryAt" },
        { text: "Dernière mise-à-jour", value: "updatedAt" },
        { text: "Date de création", value: "createdAt" },
        { text: "Total", value: "total" },
        {}
      ]
    };
  },
  methods: {
    moreInfo(item) {
      this.$router.push(`/quotes/${item.id}`);
    }
  },
  computed: {
    quotes() {
      return Quote.all();
    }
  },
  mounted() {
    Quote.$fetchQuotes();
  }
};
</script>

<style>
</style>
