<template>
  <v-container id="regular-tables" fluid tag="section">
    <!-- <base-v-component heading="Jobs" link="components/simple-tables" /> -->
    <base-material-card icon="mdi-file-clock" class="px-5 py-3" color="primary">
      <template v-slot:after-heading>
        <div>
          <!-- <v-btn color="primary" @click="toggleThirtyDays" dark class=""
            >next 30 days</v-btn
          > -->
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            class="ml-auto"
            label="Search"
            single-line
            style="max-width: 250px"
          />
        </div>
        <!-- <div>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
                >New Item</v-btn
              >
            </template>
          </v-dialog>
        </div> -->
      </template>
      <v-data-table
        :search="search"
        :headers="headers"
        :items="filteredJobs"
        sort-by="name"
        class="elevation-1"
      >
        <template v-slot:[`item.contract.type`]="{ item }">
          {{ getAbbr(item.contract.type) }}
        </template>
        <template v-slot:[`item.deadline`]="{ item }">
          {{ new Date(item.deadline).toLocaleDateString("en-CA") }}
          <!-- {{ item.deadline.toLocaleDateString("en-US") }} -->
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-badge
            :color="getStatusColor(item.status) || 'transparent'"
            dot
            left
            offset-y="40px"
            offset-x="-20px"
          >
            <job-provider v-slot="{ JobProvider }">
              <v-select
                :loading="item.id === loadingJobId"
                :disabled="item.id === loadingJobId"
                style="width: 200px"
                @change="updateJobStatus(JobProvider, item)"
                v-model="item.status"
                :items="[
                  'PENDING',
                  'ACTIVE',
                  'IN_PROGRESS',
                  'BLOCKED',
                  'REVIEW',
                  'APPROVAL',
                  'WAITING_FOR_PAYMENT',
                  'COMPLETED',
                ]"
              />
            </job-provider>
          </v-badge>
          <!-- {{ item.deadline.toLocaleDateString("en-US") }} -->
        </template>
        <template v-slot:[`item.assignee`]="{ item }">
          <user-select
            :loading="item.id === loadingJobId"
            :disabled="item.id === loadingJobId"
            v-model="item.assigneeID"
            itemText="name"
            itemValue="id"
            @change="updateJobAssignee(item)"
          />
          <!-- <v-select
            style="width: 200px"
            v-model="item.assignee"
            :items="['USER #1', 'USER #2', 'USER #3']"
            dense
          /> -->
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
import { listJobs } from "@/graphql/queries";
import { updateJob } from "@/graphql/mutations";
// import ClientSelect from "@/components/entities/client/Select";
import UserSelect from "@/components/entities/user/Select";
export default {
  components: {
    // JobStepper,
    UserSelect,
  },
  beforeMount() {
    this.fetchJobs();
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

    // this.fet
  },

  data: () => ({
    dialog: false,
    loadingJobId: -1,
    headers: [
      { value: "name", text: "Job" },
      {
        value: "deadline",
        text: "Due date",
        sort: (a, b) => (new Date(a) > new Date(b) ? -1 : 1),
      },
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
    filter: false,
    jobs: [],
    newJob: {
      clientID: "10000",
      type: "TAXES",
    },
    search: "",
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
    filteredJobs() {
      if (this.filter) {
        const start = new Date();
        const end = new Date(
          start.getFullYear(),
          start.getMonth(),
          start.getDay() + 30
        );
        return this.jobs.filter((i) => {
          return i.deadline > start && i.deadline < end;
        });
      } else {
        return this.jobs;
      }
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  methods: {
    getStatusColor(status) {
      switch (status) {
        case "Created":
          return "primary";
        case "Awaiting payment":
          return "warning";
        case "Awaiting documents":
          return "purple";
        case "Finished":
          return "success";
        default:
          return null;
      }
    },
    toggleThirtyDays() {
      this.filter = !this.filter;
    },
    getAbbr(type) {
      if (type === "BOOKKEEPING") return "BK";
      if (type === "PAYROLL") return "PR";
      if (type === "TAXES") return "TX";
    },
    async fetchJobs() {
      try {
        const { data } = await this.$gql(listJobs);
        this.jobs = data.listJobs.items;
      } catch (error) {
        this.$alert(error, "warning", -1);
      }
    },
    async updateJobStatusHandler(job) {},
    async updateJobStatus(job) {
      this.loadingJobId = job.id;
      try {
        const { id, status, version, ...rest } = job;
        console.log(id, status, version);
        await this.$gql(updateJob, {
          input: {
            id,
            status,
            expectedVersion: version,
          },
        });
        await this.fetchJobs();
        this.$alert("Success updating job", "success");
      } catch (error) {
        this.$alert(error, "warning", -1);
      }
      this.loadingJobId = -1;
    },

    async updateJobAssignee(job) {
      this.loadingJobId = job.id;

      try {
        const { id, assigneeID, version, ...rest } = job;
        // console.log(assigneeID)
        await this.$gql(updateJob, {
          input: {
            id,
            assigneeID,
            expectedVersion: version,
          },
        });
        await this.fetchJobs();
        this.$alert("Success updating job", "success");
      } catch (error) {
        this.$alert(error, "warning", -1);
      }
      this.loadingJobId = -1;
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

