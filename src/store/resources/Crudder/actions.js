// Default actions
import { VuexModel } from "./VuexModel";
import * as Queries from "@/graphql/queries"
import * as Mutations from "@/graphql/mutations"


export default function(entity) {
  // const vuexModel = this
  return {
    async fetch({ commit }) {
      commit("startLoad");
      try {
        const {
          data: { items }
        } = await VuexModel.API.graphql({ query: Queries[`list${entity}s`] });
        commit("setList", { data: items });
      } catch (e) {
        commit("error", e);
      }

      commit("finishLoad");
    },

    async get({ commit }, id) {
      commit("startLoad");
      try {
        const {
          data: { items }
        } = await VuexModel.client.graphql({
          query: Queries[`get${entity}`],
          variables: { id }
        });
        commit("setList", { data: items });
      } catch (e) {
        commit("error", e);
      }

      commit("finishLoad");
    },

    async create({ commit }, input) {
      commit("startLoad");

      try {
        // const newTodo = await API.graphql({ query: mutations.createTodo, variables: {input: todoDetails}}));
        const response = await VuexModel.client.graphql({
          query: Mutations[`create${entity}`],
          variables: { input }
        });

        commit("setList", { data: response.data });
      } catch (e) {
        commit("error", e);
      }

      commit("finishLoad");
    },

    async update({ commit }, data) {
      commit("startLoad");

      try {
        const response = await VuexModel.client.graphql({
          query: queries[`update${entity}`],
          variables: { input }
        });
        commit("setList", { data: response.data });
      } catch (e) {
        commit("error", e);
      }

      commit("finishLoad");
    },

    // async delete({ commit }, id) {
    //   commit("startLoad");

    //   try {
    //     const response = await VuexModel.client.delete(`${entity}/${id}`);
    //     commit("setList", { data: response.data });
    //   } catch (e) {
    //     commit("error", e);
    //   }

    //   commit("finishLoad");
    // }
  };
}
