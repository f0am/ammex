<template>
  <v-data-table
    :headers="headers"
    :items="users"
    class="elevation-1"
    @click:row="selectUser"
  >
    <template v-slot:[`item.name`]="{ item }">
      {{ getFullName(item) }}
    </template>

    <template v-slot:[`item.jobs`]="{ item }">
      {{ item.jobs.items.length }}
    </template>
    <template v-slot:[`item.role`]="{ item }">
      <v-chip class="mr-2" :color="getRoleColor(item)">
        <span style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.2)">
          {{ item.role }}
          <!-- <span style="font-size: 1.2em">({{
            item.jobs.items.length
          }})</span> -->
        </span>
      </v-chip>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
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
        // {
        //   text: "ID",
        //   value: "userID",
        // },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Phone",
          value: "phone",
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
    getRoleColor(user) {
      if (user.role === "ADMIN") return "warning";
      if (user.role === "MANAGER") return "accent";
      if (user.role === "EMPLOYEE") return "secondary";
    },
    getFullName(user) {
      return `${user.firstName} ${user.lastName}`;
    },
    selectUser(e) {
      this.$emit("click:row", e);
    },
    showItem(user) {
      // console.log(user);
      this.$router.push(`/users/${user.id}`);
    },
    editItem(user) {
      this.$router.push(`/users/${user.id}`);
    },
  },
};
</script>

<style>
</style>
