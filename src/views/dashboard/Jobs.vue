<template>
  <v-container id="regular-tables" fluid tag="section">
    <!-- <base-v-component heading="Jobs" link="components/simple-tables" /> -->
    <v-btn @click="seedJobs">Stuff</v-btn>
    <base-material-card icon="mdi-file-clock" class="px-5 py-3" color="primary">
      <template v-slot:after-heading>
        <div>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
                >New Item</v-btn
              >
            </template>
            <!-- <job-stepper /> -->
          </v-dialog>
        </div>
      </template>
      <v-data-table
        :headers="headers"
        :items="jobs"
        sort-by="name"
        class="elevation-1"
      >
        <template v-slot:[`item.deadline`]="{ item }">
          {{ new Date(item.deadline).toLocaleDateString("en-CA") }}
          <!-- {{ item.deadline.toLocaleDateString("en-US") }} -->
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-select
            style="width: 200px"
            v-model="item.status"
            :items="[
              'CREATED',
              'FINISHED',
              'AWAITING PAYMENT',
              'AWAITING DOCUMENTS',
            ]"
            dense
          />
          <!-- {{ item.deadline.toLocaleDateString("en-US") }} -->
        </template>
        <template v-slot:[`item.assignee`]="{ item }">
          <v-select
            style="width: 200px"
            v-model="item.assignee"
            :items="['USER #1', 'USER #2', 'USER #3']"
            dense
          />
          <!-- {{ item.deadline.toLocaleDateString("en-US") }} -->
        </template>
        <template v-slot:no-data>
          <v-progress-linear
            :color="$root.error ? 'warning' : 'info'"
            indeterminate
          />
        </template>
      </v-data-table>
    </base-material-card>
  </v-container>
</template>


<script>
// import JobStepper from "@/views/dashboard/JobStepper";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
// import ClientSelect from "@/components/resources/client/Select";
export default {
  components: {
    // JobStepper,
  },
  async beforeMount() {
    try {
      const resp = await this.$api.graphql({ query: queries.listJobs });
      this.jobs = resp.data.listJobs.items.map((i) => ({ ...i, assignee: "" }));
      console.log(this.jobs);
    } catch (error) {
      this.$root.message = error;
      this.$root.color = "warning";
      this.$root.show = true;
      this.$root.error = error;
    }

    //  try {
    //   const resp = await this.$api.graphql({ query: queries.listClients });
    //   this.clients = resp.data.listClients.items;
    //   console.log(this.clients);
    // } catch (error) {
    //   this.$root.message = error;
    //   this.$root.color = "warning";
    //   this.$root.show = true;
    //   this.$root.error = error;
    // }

    try {
      const resp = await this.$api.graphql({ query: queries.listContracts });
      this.contracts = resp.data.listContracts.items;
      console.log(this.contracts);
    } catch (error) {
      this.$root.message = error;
      this.$root.color = "warning";
      this.$root.show = true;
      this.$root.error = error;
    }
  },

  data: () => ({
    dialog: false,
    headers: [
      { value: "deadline", text: "Due date" },
      {
        text: "Client",
        align: "start",
        value: "contract.client.name",
      },
      { value: "contract.type", text: "Type" },
      { value: "status", text: "Status" },
      { value: "assignee", text: "Assignee" },
    ],
    menu2: null,
    clients: [],
    jobs: [],
    newJob: {
      clientID: "10000",
      type: "TAXES",
    },
    contracts: [],
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

  methods: {
    randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    },

    async seedJobs() {
      // const clients = { ...this.clients }
      const contracts = [...this.contracts];
      contracts.forEach(async (cl, i) => {
        const newJob = {
          clientID: cl.clientID,
          type: cl.type,
          deadline: this.randomDate(new Date(), new Date(2022, 0, 1)),
        };
        console.log("newJob", newJob);
        const job = await this.createJob(newJob);
      });
    },
    async createJob(newJob) {
      try {
        await this.$api.graphql({
          query: mutations.createJob,
          variables: {
            input: newJob || this.newJob,
          },
        });
        // const resp = await this.$api.graphql({ query: queries.listJobs });
        // this.clients = resp.data.listJobs.items;
        // this.closeJobDialog();

        this.$root.message = "Job successfully created.";
        this.$root.color = "success";
        this.$root.show = true;
      } catch (error) {
        this.$root.message = error;
        this.$root.color = "warning";
        this.$root.show = true;
        this.$root.error = error;
      }
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

