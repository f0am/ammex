<template>
  <v-container id="regular-tables" fluid tag="section">
    <!-- <base-v-component heading="Clients" link="components/simple-tables" /> -->

    <base-material-card icon="mdi-account-group" title="Clients list" class="px-5 py-3">
      <template v-slot:after-heading>
        <div>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.phone" label="Phone"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.gst" label="GST"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.qst" label="QST"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.remittance"
                        :items="['Monthly', 'Quaterly', 'Yearly']"
                        label="remittance"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-switch v-model="editedItem.cheques" class="ma-2" label="Cheques"></v-switch>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.payrollNumber" label="Payroll Number"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.payrollRemittance"
                        :items="['Monthly', 'Quaterly', 'Yearly']"
                        label="Payroll Remittance"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-switch v-model="editedItem.corporation" class="ma-2" label="Corporation"></v-switch>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.wsib" label="WSIB"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.wsibRemittance"
                        :items="['Monthly', 'Quaterly', 'Yearly']"
                        label="WSIB Remittance"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.wsibCsstRate" label="WSIB Cost Rate"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.wsibCode" label="WSIB Code"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.cliqsecrCode" label="Cliqsecr Code"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.gstCode" label="GST Code"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.craCode" label="CRA Code"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-switch v-model="editedItem.consent" class="ma-2" label="Consent"></v-switch>
                    </v-col>
                    <!-- <v-col>
                      <v-combobox
                        v-model="editedItem.jobs"
                        :items="editedItem.jobs"
                        label="Jobs"
                        multiple
                      ></v-combobox>
                    </v-col>-->
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>
      <v-data-table :headers="headers" :items="clients" sort-by="name" class="elevation-1">
        <!-- <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Clients list</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>-->
        <!-- <template v-slot:item="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>-->
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
    </base-material-card>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name",
      },
      { value: "address", text: "Address" },
      { value: "email", text: "Email" },
      { value: "phone", text: "Phone" },
      { value: "jobs", text: "Jobs pending" },
    ],
    clients: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      address: "",
      email: "",
      phone: "",
      jobs: [],
    },
    defaultItem: {
      name: "",
      name: "",
      address: "",
      email: "",
      phone: "",
      jobs: [],
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.clients = [
        {
          name: "John Doe Inc.",
          owner: "John Doe",
          address: "123 rue quelconque, Gatineau",
          email: "john@doe.ca",
          phone: "819-123-4567",
          partnersName: "Oud-Turnhout",
          cheques: false,
          qst: "12345",
          gst: "12345",
          remittance: "quarterly",
          payrollNumber: "12345",
          payrollRemittance: "monthly",
          corporation: true,
          corporationYearEndDate: new Date(),
          wsib: "12345",
          wsibRemittance: "quaterly",
          wsibCsstRate: "15",
          wsibCode: "12345",
          cliqsecrCode: "12345",
          gstCode: "12345",
          craCode: "12345",
          consent: false,
          t4DueDate: new Date(),
          jobs: [1, 2, 3, 4].length,
        },
        {
          name: "Jane Doe Inc.",
          owner: "Jane Doe",
          address: "123 rue quelconque, Gatineau",
          email: "jane@doe.ca",
          phone: "819-123-4567",
          partnersName: "Oud-Turnhout",
          cheques: false,
          qst: "12345",
          gst: "12345",
          remittance: "quarterly",
          payrollNumber: "12345",
          payrollRemittance: "monthly",
          corporation: true,
          corporationYearEndDate: new Date(),
          wsib: "12345",
          wsibRemittance: "quaterly",
          wsibCsstRate: "15",
          wsibCode: "12345",
          cliqsecrCode: "12345",
          gstCode: "12345",
          craCode: "12345",
          consent: false,
          t4DueDate: new Date(),
          jobs: [1, 2, 3, 4].length,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.clients.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.clients.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.clients.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.clients[this.editedIndex], this.editedItem);
      } else {
        this.clients.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>