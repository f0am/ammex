<template>
  <v-layout column>
    <v-flex>
      <v-select
        :items="options"
        v-model="currentValue"
        :label="label"
        :item-text="itemText"
        :item-value="itemValue"
        return-object
      />
    </v-flex>
    <v-flex>
      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn small color="teal" v-on="on">{{dialogButtonText || dialogTitle}}</v-btn>
          <!-- <v-btn color="teal" style="float:right" v-on="on">{{dialogButtonText || dialogTitle}}</v-btn> -->
        </template>
        <v-card style="padding: 0 25px">
          <v-card-title>
            <slot name="title">
              <h3>{{dialogTitle}}</h3>
            </slot>
          </v-card-title>
          <v-card-text>
            <slot name="content">
              <component v-if="dialogContent" v-model="newValue" :is="dialogContent" />
            </slot>
            <div style="width: 100%; text-align: right">
              <v-btn style="float: left" color="red" @click="cancel">Annuler</v-btn>
              <v-btn color="green" @click="save">Confirmer</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    creatable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      label: "",
      itemText: "name",
      itemValue: "id",
      dialog: false,
      dialogTitle: "Title",
      dialogButtonText: null,
      dialogContent: null,
      model: null,
      newValue: {},
    };
  },
  methods: {
    cancel() {
      this.dialog = false;
    },
    save() {
      this.currentValue = this.newValue;
      this.dialog = false;
    },
  },
  computed: {
    currentValue: {
      set(value) {
        this.$emit("input", value);
      },
      get() {
        return this.value;
      },
    },
  },
};
</script>

<style>
</style>
