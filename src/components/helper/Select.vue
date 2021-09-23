<template>
  <v-layout column>
    <v-flex>
      <v-autocomplete
        :items="options"
        v-model="currentValue"
        :label="label"
        :item-text="itemText"
        :item-value="itemValue"
        :return-object="!returnID"
      />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {},
    },
    creatable: {
      type: Boolean,
      default: false,
    },
    returnID: {
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
