<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="12">
        <base-material-card class="v-card-profile" inline>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              {{ client.name }}
            </div>

            <div class="subtitle-1 font-weight-light">
              {{ client.clientNumber }}
            </div>
          </template>
          <v-card-text>
            <!-- <hr /> -->
            <v-list-item>
              <v-list-item-title
                ><h4>Contact information</h4></v-list-item-title
              >
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Name</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.contact
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>Phone</v-list-item-title>
                <v-list-item-subtitle @click="editPhone = !editPhone"
                  ><span v-if="!editPhone">{{ client.phone }}</span
                  ><v-text-field dense v-else v-model="client.phone">
                    <template v-slot:append>
                      <v-icon color="grey"> mdi-cancel </v-icon>
                    </template>
                  </v-text-field></v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle>{{ client.email }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>Address</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.address
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <hr />

            <v-list-item>
              <v-list-item-title><h4>GST</h4></v-list-item-title>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>GST</v-list-item-title>
                <v-list-item-subtitle>{{ client.gst }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>GST Code</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.gstCode
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>QST</v-list-item-title>
                <v-list-item-subtitle>{{ client.qst }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>ClicSecr</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.cliqsecrCode
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <hr />
            <v-list-item>
              <v-list-item-title><h4>Payroll</h4></v-list-item-title>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Payroll</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.payroll
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>Payroll Remittance</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.payrollRemittance
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Corporation</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.corporation
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <!-- <v-list-item-content>
                <v-list-item-title>Corporation Year End Date</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.corporationYearEnd.toLocaleDateString("en-CA")
                }}</v-list-item-subtitle>
              </v-list-item-content> -->
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>WSIB</v-list-item-title>
                <v-list-item-subtitle>{{ client.wsib }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>WSIB Remittance</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.wsibRemittance
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>WSIB Rate</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.wsibcsstRate
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>WSIB Code</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.wsibCode
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>CRA code</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.craCode
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <!-- <v-list-item-content>
                <v-list-item-title>T4 Due Date</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.t4dueDate.toLocaleDateString("en-CA")
                }}</v-list-item-subtitle>
              </v-list-item-content> -->
            </v-list-item>
            <hr />
            <v-list-item>
              <v-list-item-title><h4>Consent forms</h4></v-list-item-title>
            </v-list-item>
          </v-card-text>
        </base-material-card>
      </v-col>
      <v-col cols="12" md="12">
        <base-material-card
          icon="mdi-file-clock"
          title="Jobs list"
          class="px-5 py-3"
          color="primary"
        >
          <template v-slot:after-heading>
            <v-dialog v-model="dialog" max-width="1000px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  style="float: right !important"
                  color="primary"
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                  >New Job</v-btn
                >
              </template>
              <v-card>
                <v-card-title>
                  New Job
                  <!-- <span class="headline">{{ formTitle }}</span> -->
                </v-card-title>

                <v-card-text>
                  <!-- <job-stepper v-model="editedItem" /> -->
                </v-card-text>

                <!-- <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-actions> -->
              </v-card>
            </v-dialog>
          </template>

          <v-data-table
            :headers="jobsHeaders"
            :items="jobs"
            sort-by="name"
            class="elevation-1"
          >
            <template v-slot:no-data>
              <v-progress-linear
                :color="$root.error ? 'warning' : 'info'"
                indeterminate
              />
            </template>
          </v-data-table>
          <!-- <v-flex xs12 style="padding-left: 1.5em">
              <v-layout row wrap>
                <v-flex xs12> </v-flex>
                <v-flex xs12>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>GST</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.gst
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>GST Code</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.gstCode
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>QST</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.qst
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>ClicSecr</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.cliqsecrCode
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>Payroll</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.payroll
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>Payroll Remittance</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.payrollRemittance
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>Corporation</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.corporation
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title
                        >Corporation Year End Date</v-list-item-title
                      >
                      <v-list-item-subtitle>{{
                        client.corporationYearEnd.toLocaleDateString("en-CA")
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>WSIB</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.wsib
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>WSIB Remittance</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.wsibRemittance
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>WSIB Rate</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.wsibcsstRate
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>WSIB Code</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.wsibCode
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>CRA code</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.craCode
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>T4 Due Date</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.t4dueDate.toLocaleDateString("en-CA")
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                </v-flex>
              </v-layout>
            </v-flex> -->
          <!-- <v-flex xs6><div class="label">SSID:</div> {{ partner.ssid }}</v-flex>
            <v-flex xs6><div class="label">SSID ASCI:</div> {{ partner.ssidAsci }}</v-flex>
            <v-flex xs6><div class="label">UC1:</div> {{ partner.uc1.vlanId }}</v-flex>
            <v-flex xs6><div class="label">UC3:</div> {{ partner.uc3.tunnelId }}</v-flex> -->
        </base-material-card>
      </v-col>

      <v-col cols="12" md="4">
        <base-material-card class="v-card-profile" color="primary">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              {{ client.name }}
            </div>

            <div class="subtitle-1 font-weight-light">
              client {{ client.id }}
            </div>
          </template>
          <v-card-title>
            <!-- {{ client.name }}<v-spacer /> -->
            <!-- <div>#{{ client.id }}</div> -->
          </v-card-title>
          <v-card-text>
            <!-- <table style="width: 100%">
              <tr>
                <td>Contact</td>
                <td style="text-align: right">{{ client.contact }}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td style="text-align: right">{{ client.phone }}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td style="text-align: right">{{ client.email }}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td style="text-align: right">{{ client.address }}</td>
              </tr>
            </table> -->
            <!-- <hr /> -->
            <v-list-item>
              <v-list-item-title
                ><h4>Contact information</h4></v-list-item-title
              >
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Name</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.contact
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>Phone</v-list-item-title>
                <v-list-item-subtitle @click="editPhone = !editPhone"
                  ><span v-if="!editPhone">{{ client.phone }}</span
                  ><v-text-field dense v-else v-model="client.phone">
                    <template v-slot:append>
                      <v-icon color="grey"> mdi-cancel </v-icon>
                    </template>
                  </v-text-field></v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle>{{ client.email }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>Address</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.address
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <hr />

            <v-list-item>
              <v-list-item-title><h4>GST</h4></v-list-item-title>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>GST</v-list-item-title>
                <v-list-item-subtitle>{{ client.gst }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>GST Code</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.gstCode
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>QST</v-list-item-title>
                <v-list-item-subtitle>{{ client.qst }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>ClicSecr</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.cliqsecrCode
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <hr />
            <v-list-item>
              <v-list-item-title><h4>Payroll</h4></v-list-item-title>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Payroll</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.payroll
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>Payroll Remittance</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.payrollRemittance
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Corporation</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.corporation
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>Corporation Year End Date</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.corporationYearEnd.toLocaleDateString("en-CA")
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>WSIB</v-list-item-title>
                <v-list-item-subtitle>{{ client.wsib }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>WSIB Remittance</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.wsibRemittance
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>WSIB Rate</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.wsibcsstRate
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>WSIB Code</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.wsibCode
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>CRA code</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.craCode
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>T4 Due Date</v-list-item-title>
                <v-list-item-subtitle>{{
                  client.t4dueDate.toLocaleDateString("en-CA")
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <hr />
            <v-list-item>
              <v-list-item-title><h4>Consent forms</h4></v-list-item-title>
            </v-list-item>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import ServerList from '@/components/resources/server/List'
// import JobStepper from "@/views/dashboard/JobStepper";

import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

// import { get } from "@/components/resources/client/index";

export default {
  mixins: [get],
  components: {},
  data() {
    return {
      getJobs: [],
      dialog: false,
      editPhone: false,
      jobsHeaders: [
        {
          text: "ID",
          align: "start",
          value: "id",
        },
        { value: "type", text: "Type" },
        { value: "assignee", text: "Assignee" },
        { value: "status", text: "Status" },
        { value: "dueDate", text: "Due date" },
      ],
      menu2: null,
      jobs: [
        {
          id: "0001",
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
            corporationYearEnd: new Date(),
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
          id: "0002",
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
            corporationYearEnd: new Date(),
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
      ],
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
    };
  },
  methods: {
    save() {},
    edit() {},
    close() {},
  },
  beforeMount() {
    const clientID = this.$route.params.id;
    this.getClient(clientID);
  },
};
</script>

<style>
.card-title {
  border-bottom: 2px solid #d3d3d3;
}
.card-title-text {
  font-weight: bold;
}
.label {
  width: 5em;
  display: inline-block;
  text-align: right;
  font-weight: 500;
}
</style>
