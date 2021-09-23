import { listContracts, getContracts } from "@/graphql/queries";
import { createContract, createJob } from "@/graphql/mutations";

export default {
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
    },

    async createContract(input) {
      try {
        await this.$gql(createContract, input);
        this.$alert("Contract created successfully", "success");
      } catch (error) {
        this.$alert(error, "warning");
      }

      await this.fetchContracts();
    }
  },
  created() {
    this.fetchContracts();
  },
  render() {
    const slot = this.$scopedSlots.default({
      // loading: this.loading,
      contracts: this.contracts
    });

    return Array.isArray(slot) ? slot[0] : slot;
  }
};
