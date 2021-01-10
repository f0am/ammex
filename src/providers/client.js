import makeGraphqlDriver from "./drivers/GraphqlDriver";
import Vue from "vue";

const name = "Client";

const driverComponent = makeGraphqlDriver({
  name
});

const comp = Vue.component("ClientProvider", {
  extends: driverComponent,
  methods: {
    setStatus: async function(client, status) {
      this.update(client, { status });
    },
    setName: async function(client, name) {
      this.update(client, { name });
    },
    activateClient: async function(client) {
      this.setStatus(client, "ACTIVE");
    },
    disableClient: async function({ id, version, _version }) {
      this.setStatus(client, "DISABLED");
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
        activateClient: this.activateClient,
        disableClient: this.disableClient,
        setStatus: this.setStatus,
        setName: this.setName
      }
    });
    return Array.isArray(slot) ? slot[0] : slot;
  }
});

export default comp;
