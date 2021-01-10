import Vue from "vue";
import { API, DataStore } from "aws-amplify";

export default function makeDataStoreProvider(name, Model, queries) {
  return Vue.component(`${name}Provider`, {
    async created() {
      if (!this.items.length > 0) await this.fetch();
    },
    render() {
      const slot = this.$scopedSlots.default({
        items: this.items,
        [`fetch${name}`]: this.fetch,
        [`get${name}`]: this.get,
        [`create${name}`]: this.create,
        [`update${name}`]: this.update,
        [`delete${name}`]: this.delete,
        loading: this.loading
      });

      return Array.isArray(slot) ? slot[0] : slot;
    },
    data() {
      return {
        items: [],
        item: [],
        loading: false
      };
    },
    methods: {
      async fetch() {
        this.loading = true;
        try {
          const { data } = await API.graphql({
            query: queries.fetch
          });
          this.items = data.listClients.items;
          // this.items = await DataStore.query(Model);
        } catch (error) {
          this.$alert(error, "warning");
        }

        this.loading = false;
      },
      async get(input) {
        this.loading = true;
        try {
          const { data } = await API.graphql({
            query: fetch,
            variables: { input }
          });
          this.items = data.getClient.items;
        } catch (error) {
          this.$alert(error, "warning");
        }
        this.loading = false;
      },
      async create(input) {
        this.loading = true;
        try {
          await DataStore.save(new Model(input));
          this.$alert(`${name} successfully created.`, "success");
        } catch (error) {
          this.$alert(error, "warning");
        }
        this.loading = false;
      },
      async update(input) {
        this.loading = true;
        try {
          await DataStore.save(new Model(input));
          this.$alert(`${name} successfully updated.`, "success");
        } catch (error) {
          this.$alert(error, "warning");
        }
        this.loading = false;
      }
    }
  });
}
