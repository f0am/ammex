import makeGraphqlDriver from "./drivers/GraphqlDriver";
import Vue from "vue";

const name = "Contract";

const driverComponent = makeGraphqlDriver({
  name
});

async function createTaxesJobs(contract) {
  const year = new Date(contract.year);
  let deadline;

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

const comp = Vue.component("ContractProvider", {
  extends: driverComponent,
  methods: {
    setStatus: async function(contract, status) {
      this.update(contract, { status });
    },
    setName: async function(contract, name) {
      this.update(contract, { name });
    },
    createContractJobs: async function(contract) {
      contract.type === "TAXES" && (await createTaxesJobs(contract));
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
        setStatus: this.setStatus,
        setName: this.setName
      }
    });
    return Array.isArray(slot) ? slot[0] : slot;
  }
});

export default comp;
