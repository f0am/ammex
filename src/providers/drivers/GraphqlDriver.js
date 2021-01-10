import { API } from "aws-amplify";
import Vue from "vue";
import * as Queries from "@/graphql/queries";
import * as Mutations from "@/graphql/mutations";

export default function makeGraphqlDriver({
  name,
  fetch = Queries[`list${name}s`],
  get = Queries[`get${name}`],
  create = Mutations[`create${name}`],
  update = Mutations[`update${name}`]
}) {
  return {
    async created() {
      this.fetch();
    },
    // render() {
    //   const slot = this.$scopedSlots.default({
    //     [`${name}Provider`]: {
    //       items: this.items,
    //       item: this.item,
    //       loading: this.loading,
    //       fetch: this.fetch,
    //       get: this.get,
    //       create: this.create,
    //       update: this.update
    //     }
    //   });

    //   return Array.isArray(slot) ? slot[0] : slot;
    // },
    data() {
      return {
        items: [],
        item: [],
        loading: false
      };
    },

    methods: {
      fetch: async function() {
        this.loading = true;
        try {
          console.log(`fetching ${name}s`);
          const { data } = await API.graphql({
            query: fetch
          });

          this.items = data[`list${name}s`].items;
          // this.setData(data[`list${name}s`].items);
          // this.items = await Graphql.query(Model);
        } catch (error) {
          this.$alert(error, "warning");
        }

        this.loading = false;
      },
      get: async function(input) {
        this.loading = true;
        try {
          const { data } = await API.graphql({
            query: get,
            variables: { input }
          });
          this.items = data.getClient.items;
        } catch (error) {
          this.$alert(error, "warning");
        }
        this.loading = false;
      },
      create: async function(input) {
        this.loading = true;
        try {
          const { data } = await API.graphql({
            query: create,
            variables: { input }
          });
          this.$alert(`${name} successfully created.`, "success");
        } catch (error) {
          this.$alert(error, "warning");
        }
        this.loading = false;
      },
      update: async function({ id, version, _version }, updated) {
        this.loading = id;
        try {
          const { data } = await API.graphql({
            query: update,
            variables: {
              input: { id, _version, expectedVersion: version, ...updated }
            }
          });
          this.$alert(`${name} successfully updated.`, "success");
        } catch (error) {
          this.$alert(error, "warning");
        }
        this.loading = false;
      }
    }
  };
}
