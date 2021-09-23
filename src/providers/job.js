import makeGraphqlDriver from "./drivers/GraphqlDriver";
import Vue from "vue";

const name = "Job";

const driverComponent = makeGraphqlDriver({
  name
});

const comp = Vue.component("JobProvider", {
  extends: driverComponent,
  methods: {
    setStatus: async function(jobs, status) {
      this.update(jobs, { status });
    },
    // setName: async function(jobs, name) {
    //   this.update(jobs, { name });
    // },
    // createJobJobs: async function(jobs) {
    //   jobs.type === "TAXES" && (await createTaxesJobs(jobs));
    // }
    createMany: async function(jobs) {
      jobs.map(async job => {
        await this.create(job);
      });
    }
  },
  render: function() {
    const slot = this.$scopedSlots.default({
      [`${name}Provider`]: {
        items: this.items,
        item: this.item,
        loading: this.loading,
        fetch: this.fetch,
        get: this.get,
        create: this.create,
        update: this.update,
        createMany: this.createMany,
        setStatus: this.setStatus
        // setName: this.setName
      }
    });
    return Array.isArray(slot) ? slot[0] : slot;
  }
});

export default comp;
