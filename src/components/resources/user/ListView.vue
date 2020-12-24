<template>
  <base-material-card title="Users" class="px-5 py-3" color="primary" inline>
    <template v-slot:header-actions>
      <!-- <v-dialog v-model="userDialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            style="top: -30px"
            color="primary"
            fab
            large
            class="mb-2"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>
        </template>

        <user-form v-model="newUser" />
      </v-dialog> -->
      <v-dialog v-model="userDialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            style="top: -30px"
            color="primary"
            fab
            large
            class="mb-2"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>
        </template>
        <stepper v-model="newUser" @confirm="saveUser" />
      </v-dialog>
    </template>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      class="ml-auto"
      label="Search"
      single-line
      style="max-width: 250px"
    />
    <users-list :users="users" :search="search" />
  </base-material-card>
</template>

<script>
import UsersList from "./List";
import Stepper from "./Form";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

export default {
  components: {
    UsersList,
    Stepper,
  },

  async beforeMount() {
    try {
      const resp = await this.$api.graphql({ query: queries.listUsers });
      this.users = resp.data.listUsers.items;
      console.log(this.users);
    } catch (error) {
      this.$root.message = error;
      this.$root.color = "warning";
      this.$root.show = true;
      this.$root.error = error;
    }
  },
  methods: {
    async saveUser() {
      try {
        console.log(this.newUser);
        await this.$api.graphql({
          query: mutations.createUser,
          variables: {
            input: this.newUser,
          },
        });
        const resp = await this.$api.graphql({ query: queries.listUsers });
        this.users = resp.data.listUsers.items;
        this.$root.message = "User successfully created.";
        this.$root.color = "success";
        this.$root.show = true;
      } catch (error) {
        this.$root.message = error;
        this.$root.color = "warning";
        this.$root.show = true;
        this.$root.error = error;
      }

      this.closeUserDialog();
    },

    closeUserDialog() {
      this.userDialog = false;
      this.user = {};
    },
  },
  data() {
    return {
      search: "",
      users: [],
      newUser: {},
      userDialog: false,
    };
  },
};
</script>

<style scoped>
table#user-info > tr > td:nth-child(1) {
  text-align: left;
}
table#user-info > tr > td:nth-child(2) {
  text-align: right;
}
</style>