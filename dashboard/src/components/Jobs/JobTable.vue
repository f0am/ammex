<template>
  <div>
    <md-table v-model="jobs">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Due Date">{{ item.dueDate }}</md-table-cell>
        <md-table-cell md-label="Client">{{ item.company.name }}</md-table-cell>
        <md-table-cell md-label="Client">{{ item.status }}</md-table-cell>
        <md-table-cell md-label="Client">{{ item.assignee }}</md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <!-- <md-button class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Close</md-tooltip>
          </md-button>-->
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "nav-tabs-table",
  data() {
    return {
      selected: [],
      jobs: [
        { 
          assignee: "Hada Alvarenga",
          status: "in progress",
          dueDate: new Date().toLocaleDateString("en-CA"),
          company: {
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
            jobs: [1, 2, 3, 4]
          }
        },
        {
          assignee: "None",
          status: "pending",
          dueDate: new Date().toLocaleDateString("en-CA"),
          company: {
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
            jobs: [1, 2, 3, 4]
          }
        }
      ]
    };
  },
  methods: {
    onSelect: function(items) {
      this.selected = items;
    }
  }
};
</script>