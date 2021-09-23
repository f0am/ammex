import Vue from "vue";
import { API, DataStore } from "aws-amplify";

export default function makeGqlProvider(name, Model){
  return {
    async created() {
      if (!this[name].length > 0) await this.fetch();
    },
    data() {
      return {
        [name]: [],
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
          this[name] = data.listClients.items;
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
  }