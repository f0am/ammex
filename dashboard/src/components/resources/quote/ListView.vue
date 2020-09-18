<template>
  <material-card color="teal" title="Soumissions" text="Visualiser les soumissions existantes">
    <template slot="headerActions">
      <!-- <v-dialog v-model="dialog" max-width="800px">
        <template slot="activator" slot-scope="{ on }">
          <v-btn fab round dark class="mb-2" outline v-on="on">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Nouvelle soumission</span>
          </v-card-title>

          <v-card-text>
            <quote-form v-model="newQuote" />
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>-->
      <v-btn fab round outline @click="create">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <div>
      <list />
    </div>
  </material-card>
</template>

<script>
import List from "./List";
import QuoteForm from "./Form";
export default {
  components: {
    List,
    QuoteForm
  },
  data() {
    return {
      newQuote: {},
      dialog: false
    };
  },
  methods: {
    create() {
      this.$router.push(`/quotes/new`);
    }
  }
};
</script>

<style>
</style>
