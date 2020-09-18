<template>
  <v-container id="regular-tables" fluid tag="section">
    <!-- <base-v-component heading="Jobs" link="components/simple-tables" /> -->

    <base-material-card icon="mdi-file-clock" title="Jobs list" class="px-5 py-3">
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
                      <v-select
                        v-model="editedItem.client"
                        :items="[{text: 'John Doe Inc.', value: {name: 'John Doe Inc.' }}, {text: 'Jane Doe Inc.', value: {name: 'Jane Doe Inc.' }}]"
                        label="Client"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.type"
                        :items="['Bookkeeping', 'Payroll', 'Taxes']"
                        label="Type"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.status"
                        :items="['Pending', 'In Progress', 'Completed']"
                        label="Status"
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.assignee"
                        :items="['Hada Alvarenga', 'Jeremie St-Pierre robitaille']"
                        label="Assignee"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-switch v-model="editedItem.cheques" class="ma-2" label="Cheques"></v-switch>
                    </v-col>
                    <v-col cols="12">
                      <client-select v-model="editedItem.client" />
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
      <v-data-table :headers="headers" :items="jobs" sort-by="name" class="elevation-1">
        <!-- <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Jobs list</v-toolbar-title>
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
import ClientSelect from "@/components/resources/client/Select";
export default {
  components: {
    ClientSelect,
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Client",
        align: "start",
        sortable: false,
        value: "client.name",
      },
      { value: "type", text: "Type" },
      { value: "assignee", text: "Assignee" },
      { value: "status", text: "Status" },
      { value: "dueDate", text: "Due date" },
    ],
    jobs: [],
    editedIndex: -1,
    editedItem: {
      client: {},
      assignee: "",
      type: "",
      status: "",
      dueDate: "",
    },
    defaultItem: {
      client: {},
      assignee: "",
      type: "",
      status: "Pending",
      dueDate: "",
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
      this.jobs = [
        {
          assignee: "Hada Alvarenga",
          status: "in progress",
          dueDate: new Date().toLocaleDateString("en-CA"),
          type: "Bookkeeping",
          client: {
            name: "John Doe Inc.",
            owner: "John Doe",
            address: "123 rue des swaggeux, Gatineau",
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
            jobs: [1, 2, 3, 4],
          },
        },
        {
          assignee: "None",
          status: "pending",
          dueDate: new Date().toLocaleDateString("en-CA"),
          type: "Payroll",
          client: {
            name: "Jane Doe Inc.",
            owner: "Jane Doe",
            address: "123 rue des swaggeux, Gatineau",
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
            jobs: [1, 2, 3, 4],
          },
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.jobs.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.jobs.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.jobs.splice(index, 1);
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
        Object.assign(this.jobs[this.editedIndex], this.editedItem);
      } else {
        this.jobs.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>