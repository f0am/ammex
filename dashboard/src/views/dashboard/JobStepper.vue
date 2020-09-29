<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> Job info </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> Job type </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> Review new job </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <!-- <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card> -->

        <v-select
          v-model="editedItem.status"
          :items="[
            'Pending',
            'Documents received',
            'Work in progress',
            'Awaiting payment',
            'Filed',
            'Awaiting documents',
          ]"
          label="Status"
        ></v-select>
        <v-select
          v-model="editedItem.assignee"
          :items="['Hada Alvarenga', 'Jeremie St-Pierre robitaille']"
          label="Assignee"
        ></v-select>
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="editedItem.dueDate"
              label="Due date"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            style="margin: 0"
            v-model="editedItem.dueDate"
            @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
        <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-select
          v-model="editedItem.type"
          :items="['Bookkeeping', 'Payroll', 'Taxes', 'GST']"
          label="Type"
        ></v-select>

        <v-select
          v-model="editedItem.remittance"
          :items="['Yearly', 'Quarterly', 'Monthly']"
          label="Remittance"
        ></v-select>
        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <!-- <v-card class="mb-12" color="grey lighten-1" height="200px"> -->
        <!-- <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Client</v-list-item-title>
              <v-list-item-subtitle>Hada Alvarenga Inc.</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>Type</v-list-item-title>
              <v-list-item-subtitle>{{ editedItem.type }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>Due date</v-list-item-title>
              <v-list-item-subtitle>{{
                editedItem.dueDate
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> -->
        <!-- </v-card> -->
        <pre>{{ editedItem }} </pre>
        <v-btn color="primary" @click="e1 = 1"> Confirm </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
export default {
  data() {
    return {
      e1: 1,
      editedItem: {
          client: "Hada Alvarenga Inc."
      },
    };
  },
};
</script>