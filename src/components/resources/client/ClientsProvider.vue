<script>
import { listClients, getClient } from "@/graphql/queries";
import { createClient, createContract } from "@/graphql/mutations";

export default {
  data() {
    return {
      clients: [],
    };
  },

  methods: {
    async fetchClients() {
      try {
        const { data } = await this.$gql(listClients);
        this.clients = data.listClients.items;
      } catch (error) {
        this.$alert(error, "warning");
      }
    },

    async createClient(input) {
      try {
        await this.$gql(createClient, input);
        this.$alert("Client created successfully", "success");
      } catch (error) {
        this.$alert(error, "warning");
      }

      await this.fetchClients();
    },
  },
  beforeMount() {
    this.fetchClients();
  },
};
</script>