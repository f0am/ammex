import { API } from "aws-amplify";
import Vue from "vue";
import * as Queries from "@/graphql/queries";
import * as Mutations from "@/graphql/mutations";
import * as Subscriptions from "@/graphql/subscriptions";

export default function makeGraphqlDriver({
  name,
  fetch = Queries[`list${name}s`],
  get = Queries[`get${name}`],
  create = Mutations[`create${name}`],
  update = Mutations[`update${name}`],
  onCreate = Subscriptions[`onCreate${name}`],
  onUpdate = Subscriptions[`onUpdate${name}`]
}) {
  return {
    async created() {
      this.fetch();
      this.subscribe(this);
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
    beforeDestroy() {
      this.subscriptions.forEach(sub => sub.unsubscribe());
    },
    data() {
      return {
        items: [],
        item: [],
        loading: false,
        subscriptions: []
      };
    },

    methods: {
      subscribe: async function(node) {
        const updateSub = await API.graphql({ query: onUpdate }).subscribe({
          next: data => {
            const updatedItem = data.value.data[`onUpdate${name}`];
            const index = node.$data.items.findIndex(
              item => item.id == updatedItem.id
            );
            node.$data.items.splice(index, 1, updatedItem);
          },
          error: error => {
            console.log("error", error);
          }
        });

        const createSub = await API.graphql({ query: onCreate }).subscribe({
          next: function(data) {
            node.fetch();
          },
          error: error => {
            console.log("error", error);
          }
        });

        this.subscriptions.push(updateSub, createSub);
      },
      fetch: async function() {
        this.loading = true;
        try {
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
        delete input.client;
        try {
          const { data } = await API.graphql({
            query: create,
            variables: { input }
          });
          this.$alert(`${input.name} successfully created.`, "success");
          console.log(data);
          return data;
        } catch (error) {
          console.log({error});
          this.$alert(error, "warning");
          return null;
        }
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
