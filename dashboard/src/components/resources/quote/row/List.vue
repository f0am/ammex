<template>
  <v-data-table :headers="headers" :items="itemsHandler" class="elevation-1">
    <template v-slot:items="{ item }">
      <td>{{ item.id }}</td>
      <td>{{ item.amount }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td>{{ item.total }}</td>
      <td>
        <icon-tool-tip :name="item.id" :description="'More Info'">
          <v-icon color="info" class="mr-2" @click="moreInfo(item)">mdi-information</v-icon>
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
        { text: "ID", value: "id" },
        { text: "Qté", value: "amount" },
        { text: "Item", value: "name" },
        { text: "Prix unitaire", value: "price" },
        { text: "Total", value: "total" }
      ],
      items: [
        {
          id: 1,
          amount: 3,
          name: "Piece A",
          price: 1999,
        }
      ]
    };
  },
  computed: {
    itemsHandler() {
      return this.items.map(i => {
        return {
          total: i.amount * i.price,
          ...i
        }
      })
    }
  },
  methods: {
    moreInfo(item) {
      this.$router.push(`/partners/${item.id}`);
    }
  }
};
</script>

<style>
</style>
