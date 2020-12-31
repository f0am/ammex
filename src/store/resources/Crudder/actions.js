// Default actions
import { VuexModel } from "./VuexModel";

export default function(resource, queries) {
  // const vuexModel = this
  return {
    async fetch({ commit }) {
      commit("startLoad");
      try {
        const {
          data: { items }
        } = await VuexModel.API.graphql({ query: queries[`list${resource}s`] });
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
          query: queries[`get${resource}`],
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
          query: queries[`create${resource}`],
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
          query: queries[`update${resource}`],
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
    //     const response = await VuexModel.client.delete(`${resource}/${id}`);
    //     commit("setList", { data: response.data });
    //   } catch (e) {
    //     commit("error", e);
    //   }

    //   commit("finishLoad");
    // }
  };
}
