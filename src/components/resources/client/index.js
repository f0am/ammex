import { listClients, getClient } from "@/graphql/queries";
import { createClient } from "@/graphql/mutations";

export const get = {
  data() {
    return {
      client: null
    };
  },
  methods: {
    async getClient(id) {
      try {
        const { data } = await this.$gql(getClient, { id });
        this.client = data.getClient;
      } catch (error) {
        this.$alert(error, "warning");
      }
    }
  }
};

export const fetch = {
  data() {
    return {
      clients: []
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
    }
  }
};

export const create = {
  data() {
    return {
      newClient: null
    };
  },
  methods: {
    async createClient(input) {
      try {
        await this.$gql(createClient, { input });
        this.$alert("Client created successfully", "success");
      } catch (error) {
        this.$alert(error, "warning");
      }
    }
  }
};
