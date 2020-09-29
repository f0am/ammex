<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card icon="mdi-account" class="px-5 py-3" color="primary">
          <template v-slot:after-heading>
            <div>
              <v-dialog v-model="dialog" max-width="800px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                    >New Item</v-btn
                  >
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <user-form v-model="editedItem" />
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </template>

          <users-list @click:row="selectUser" />
          <!-- <v-data-table :headers="headers" :items="users" class="elevation-1" /> -->
        </base-material-card>
      </v-col>

      <v-col cols="12" md="4">
        <base-material-card
          class="v-card-profile"
          avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
        >
          <v-card-text v-if="selectedUser" class="text-center">
            <h6 class="display-1 mb-1 grey--text">{{ selectedUser.role }}</h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">
              {{ getFullName(selectedUser) }}
              <div style="font-size: 0.7em">{{ selectedUser.id }}</div>
            </h4>

            <table id="user-info" class="font-weight-light" style="width: 100%">
              <tr>
                <td>email</td>
                <td>{{ selectedUser.email }}</td>
              </tr>
              <tr>
                <td>phone</td>
                <td>{{ selectedUser.phone }}</td>
              </tr>

              <tr>
                <td>role</td>
                <td>{{ selectedUser.role }}</td>
              </tr>

              <tr>
                <td>jobs</td>
                <td>{{ selectedUser.jobs }}</td>
              </tr>
            </table>

            <!-- <v-btn color="success" rounded class="mr-0"> Follow </v-btn> -->
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersList from "@/components/resources/user/List";
import UserForm from "@/components/resources/user/Form";
export default {
  components: {
    UsersList,
    UserForm,
  },
  //
  methods: {
    selectUser(e) {
      this.selectedUser = e;
    },
    getFullName(user) {
      return `${user.firstName} ${user.lastName}`;
    },
  },
  data() {
    return {
      selectedUser: null,
      editedItem: {},
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