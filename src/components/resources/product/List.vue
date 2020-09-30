<template>
  <v-data-table :headers="headers" :items="partners" class="elevation-1">
    <template v-slot:items="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.ssid }}</td>
      <td>{{ props.item.ssid_ascii }}</td>
      <td>
        <icon-tool-tip :name="props.item.id" :description="'More Info'">
          <v-icon color="info" class="mr-2" @click="moreInfo(props.item)">mdi-information</v-icon>
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
        { text: "Name", value: "name" },
        { text: "SSID", value: "ssid" },
        { text: "SSID ASCII", value: "ssid_ascii" }
      ],
      partners: [
        {
          id: 1,
          name: "ESDC",
          ssid: "123123",
          ssid_ascii: "ESDC-WiFi"
        }
      ]
    };
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
