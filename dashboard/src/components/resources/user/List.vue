<template>
  <v-data-table :headers="headers" :items="users" class="elevation-1">
    <template v-slot:items="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.firstName }}</td>
      <td>{{ props.item.lastName }}</td>
      <!-- Ajouter les autres propriete ici -->
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
        { text: "First name", value: "firstName" },
        { text: "Last name", value: "lastName" },
        // Ajouter les entetes de la table ici
      ],
      users: [
        // Ca c'est du dummy data pour valider que ca fonctionne
        {
          id: 1,
          firstName: "Hada",
          lastName: "Alvarenga",
        },
      ],
    };
  },
  methods: {
    moreInfo(item) {
      this.$router.push(`/users/${item.id}`);
    },
  },
};
</script>

<style>
</style>
