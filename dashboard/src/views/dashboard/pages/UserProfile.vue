<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Edit Profile</div>

            <div class="subtitle-1 font-weight-light">
              Complete your profile
            </div>
          </template>

          <v-data-table :headers="headers" :items="users" class="elevation-1" />
        </base-material-card>
        <v-text-field v-model="selectedUser" />
      </v-col>

      <v-col cols="12" md="4">
        <base-material-card
          class="v-card-profile"
          avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 grey--text">{{ selectedUser.role }}</h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">
              {{ getFullName(users[selectedUser]) }}
              <div style="font-size: 0.7em">{{ users[selectedUser].id }}</div>
            </h4>

            <table id="user-info" class="font-weight-light" style="width: 100%">
              <tr>
                <td>email</td>
                <td>{{ users[selectedUser].email }}</td>
              </tr>
              <tr>
                <td>phone</td>
                <td>{{ users[selectedUser].phone }}</td>
              </tr>

              <tr>
                <td>role</td>
                <td>{{ users[selectedUser].role }}</td>
              </tr>

              <tr>
                <td>jobs</td>
                <td>{{ users[selectedUser].jobs }}</td>
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
export default {
  //
  methods: {
    getFullName(user) {
      return `${user.firstName} ${user.lastName}`;
    },
  },
  data() {
    return {
      selectedUser: 0,
      headers: [
        {
          text: "ID",
          value: "id",
        },
        {
          text: "First Name",
          value: "firstName",
        },
        {
          text: "Last Name",
          value: "lastName",
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