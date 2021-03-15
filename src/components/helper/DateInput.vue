<template>
  <v-menu
    :ref="`${name}Picker`"
    v-model="datePicker"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="currentValue[name]"
        :label="label"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="currentValue[name]"
      :range="range"
      landscape
      no-title
      scrollable
      :type="type"
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="datePicker = false"> Cancel </v-btn>
      <v-btn
        text
        color="primary"
        @click="$refs[`${name}Picker`].save(currentValue)"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>
<script>
export default {
  data() {
    return {
      datePicker: false,
      date: null,
    };
  },
  props: {
    label: {
      type: String,
      default: "Date",
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: "date",
    },
    range: {
      type: Boolean,
      default: false,
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