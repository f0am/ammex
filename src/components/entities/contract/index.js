import { listContracts, getContract } from "@/graphql/queries";
import { createContract, createJob } from "@/graphql/mutations";

export const get = {
  data() {
    return {
      contract: null
    };
  },
  methods: {
    async getContract(id) {
      try {
        const { data } = await this.$gql(getContract, { id });
        this.contract = data.getContract;
      } catch (error) {
        this.$alert(error, "warning");
      }
    }
  }
};

export const fetch = {
  data() {
    return {
      contracts: []
    };
  },
  methods: {
    async fetchContracts() {
      try {
        const { data } = await this.$gql(listContracts);
        this.contracts = data.listContracts.items;
      } catch (error) {
        this.$alert(error, "warning");
      }
    }
  }
};

export const create = {
  data() {
    return {
      newContract: null
    };
  },
  methods: {
    async createContract(input) {
      try {
        await this.$gql(createContract, { input });
        this.$alert("Contract created successfully", "success");
      } catch (error) {
        this.$alert(error, "warning");
      }
    }
  }
};

