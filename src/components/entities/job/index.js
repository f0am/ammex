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
    getBookkeepingDeadlines(remmitancePeriod, startDate, endDate) {
      switch (remmitancePeriod) {
        case "Monthly":
          const jobs = [];
          for (let dd = startDate; dd < endDate; ) {
            console.log(dd < endDate);
            jobs.push(new Date(dd.getFullYear(), dd.getMonth() + 2, 0));
            dd.setMonth(dd.getMonth() + 1);
          }

          return jobs;
        // return [...Array(12).keys()].map(m => new Date(year, m + 1, 0));
        case "Quaterly":
          // for (let dd = new Date(start.s))
          return [
            new Date(year, 5, 0),
            new Date(year, 7, 0),
            new Date(year, 10, 0),
            new Date(year, 13, 0)
          ];
        // return [...Array(4).keys()].map(m => new Date(year, (m + 1) * 3, 0));
        case "Yearly":
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
          deadline.setMonth(deadline.getMonth() + 2);
          deadline.setFullYear(year);
        } else {
          deadline = new Date(year, 3, 30);
        }

        await this.createJobs({
          clientID: contract.clientID,
          type: contract.type,
          deadline: deadline,
          name: `${contract.client.clientNumber} | T4 - ${year}`,
          description: "T4 stuff"
        });
      }
    },
    createBookkeepingJobs(contract) {

      const jobs = [];

      if (contract.gst) {
        const startDate = new Date(contract.startDate);
        const endDate = new Date(contract.endDate);
        jobs.push(
          ...this.getBookkeepingDeadlines(
            contract.period,
            startDate,
            endDate
          ).map(d => {
            const deadline = new Date(d.getFullYear(), d.getMonth() + 2, 0);
            return {
              clientID: contract.clientID,
              type: contract.type,
              deadline: deadline.toString(),
              name: `${
                contract.client.clientNumber
              } | GST Report - ${d.getMonth() + 1}/${d.getFullYear()}`
            };
          })
        );
      }

      if (contract.qst) {
        const startDate = new Date(contract.startDate);
        const endDate = new Date(contract.endDate);
        jobs.push(
          ...this.getBookkeepingDeadlines(
            contract.period,
            startDate,
            endDate
          ).map(d => {
            const deadline = new Date(d.getFullYear(), d.getMonth() + 2, 0);
            return {
              clientID: contract.clientID,
              type: contract.type,
              deadline: deadline.toString(),
              name: `${
                contract.client.clientNumber
              } | QST Report - ${d.getMonth() + 1}/${d.getFullYear()}`
            };
          })
        );
      }
      this.createJobs(...jobs);
    }
  }
};
