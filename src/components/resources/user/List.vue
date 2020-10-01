<template>
  <v-data-table
    :headers="headers"
    :items="users"
    class="elevation-1"
    @click:row="selectUser"
  >
    <template v-slot:item.name="{ item }">
      {{ getFullName(item) }}
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <!-- <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->
    </template>
  </v-data-table>
</template>
<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      headers: [
        {
          text: "ID",
          value: "id",
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Phone",
          value: "phone",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Role",
          value: "role",
        },
        // {
        //   text: "Status",
        //   value: "status"
        // },
        {
          text: "Jobs",
          value: "jobs",
        },
        {
          text: "Actions",
          value: "actions",
        },
      ],
    };
  },
  methods: {
    getFullName(user) {
      return `${user.firstName} ${user.lastName}`;
    },
    selectUser(e) {
      this.$emit("click:row", e);
    },
    showItem(item) {
      // console.log(item);
      this.$router.push(`/users/${item.id}`);
    },
    editItem(item) {
      this.$router.push(`/users/${item.id}`);
    },
  },
};
</script>

<style>
</style>
