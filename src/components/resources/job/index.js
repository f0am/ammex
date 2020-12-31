import { listJobs, getJob } from "@/graphql/queries";
import { createJob } from "@/graphql/mutations";

export const get = {
  data() {
    return {
      job: null
    };
  },
  methods: {
    async getJob(id) {
      try {
        const { data } = await this.$gql(getJob, { id });
        this.job = data.getJob;
      } catch (error) {
        this.$alert(error, "warning");
      }
    }
  }
};

export const fetch = {
  data() {
    return {
      jobs: []
    };
  },
  methods: {
    async fetchJobs() {
      try {
        const { data } = await this.$gql(listJobs);
        this.jobs = data.listJobs.items;
      } catch (error) {
        this.$alert(error, "warning");
      }
    }
  }
};

export const create = {
  data() {
    return {
      newJob: null
    };
  },
  methods: {
    async createJob(input) {
      try {
        await this.$gql(createJob, { input });
        this.$alert("Job created successfully", "success");
      } catch (error) {
        this.$alert(error, "warning");
      }
    }
  }
};

export const createContractJobs = {
  methods: {
    getBookkeepingDeadlines(remmitancePeriod, year) {
      switch (remmitancePeriod) {
        case "monthly":
          return [...Array(12).keys()].map(m => new Date(year, m + 1, 0));
        case "quaterly":
          return [...Array(4).keys()].map(m => new Date(year, (m + 1) * 3, 0));
        case "yearly":
          return new Date(year, 4, 0);
      }
    },
    async createJobs(...inputs) {
      try {
        inputs.forEach(async input => {
          await this.$gql(createJob, { input });
        });
        this.$alert("Jobs created successfully", "success");
      } catch (error) {
        this.$alert(error, "warning");
      }
    },
    async createTaxesJobs(contract) {
      const startDate = new Date(contract.startDate);
      const endDate = new Date(contract.endDate);

      let deadline;
      for (
        let year = startDate.getFullYear();
        year <= endDate.getFullYear();
        year++
      ) {
        if (contract.corporation) {
          deadline = new Date(contract.corporationYearEndDate);
          deadline.setFullYear(year);
        } else {
          deadline = new Date(year, 3, 30);
        }

        await createJobs({
          clientID: contract.clientID,
          type: contract.type,
          deadline: deadline.toISOString(),
          name: `${contract.client.clientNumber} | T4 - ${year}`,
          description: "T4 stuff"
        });
      }
    },
    async createBookkeepingJobs(contract) {
      const startDate = new Date(contract.startDate);
      const endDate = new Date(contract.endDate);

      // Bookkeeping:
      // GST Report:
      //   - Monthly/Quaterly - Last day of the month
      //   - Yearly - 31 mars
      // QST Report:
      //   - Monthly/Quaterly - Last day of the month
      //   - Yearly - 31 mars

      for (
        let year = startDate.getFullYear();
        year <= endDate.getFullYear();
        year++
      ) {
        if (contract.gst) {
          const jobs = this.getBookkeepingDeadlines(
            contract.remmitancePeriod,
            year
          ).map(d => ({
            clientID: contract.clientID,
            type: contract.type,
            deadline: d.toISOString(),
            name: `${
              contract.client.clientNumber
            } | GST Report - ${d.getMonth()}/${d.getFullYear()}`
          }));

          this.createJobs(...jobs);
        }

        if (contract.qst) {
          const jobs = this.getBookkeepingDeadlines(
            contract.remmitancePeriodQc,
            year
          ).map(d => ({
            clientID: contract.clientID,
            type: contract.type,
            deadline: d.toISOString(),
            name: `${
              contract.client.clientNumber
            } | QST Report - ${d.getMonth()}/${d.getFullYear()}`
          }));

          this.createJobs(...jobs);
        }
      }
    }
  }
};
