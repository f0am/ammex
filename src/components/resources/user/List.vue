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
      users: [
        {
          id: "0001",
          firstName: "Hada",
          lastName: "Alvarenga",
          phone: "(819)123-4556",
          email: "hada.alvarenga@ammex.com",
          role: "Manager",
          jobs: 15,
        },
        {
          id: "0002",
          firstName: "Jeremie",
          lastName: "St-Pierre Robitaille",
          phone: "(819)123-4556",
          email: "jeremie.st-pierrerobitaille@ammex.com",
          role: "Employee",
          jobs: 3,
        },
        {
          id: "0003",
          firstName: "Yousef",
          lastName: "Refaie",
          phone: "(819)123-4556",
          email: "yousef.refaie@ammex.com",
          role: "Admin",
          jobs: 40,
        },
        {
          id: "0004",
          firstName: "A Venh",
          lastName: "Tsan",
          phone: "(819)123-4556",
          email: "avenh.tsan@ammex.com",
          role: "Director",
          jobs: 9999,
        },
        {
          id: "0005",
          firstName: "Stefan",
          lastName: "Lozo",
          phone: "(819)123-4556",
          email: "stefan.lozo@ammex.com",
          role: "Employee",
          jobs: 2,
        },
        {
          id: "0006",
          firstName: "Beli",
          lastName: "Tomo",
          phone: "(819)123-4556",
          email: "beli.tomo@ammex.com",
          role: "Employee",
          jobs: 0,
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
