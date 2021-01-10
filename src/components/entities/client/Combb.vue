<template>
  <v-menu offset-y>
    <template #activator="{ on }">
      <v-chip v-on="on" @click="edit = true" v-bind="attrs" outlined>
        <span style="font-weight: 400; font-size: 1.4em">{{
          currentValue
        }}</span>
        <!-- <v-icon v-if="!edit" right dense> mdi-arrow-down </v-icon>
        <v-icon v-else right dense>mdi-check</v-icon> -->
      </v-chip>
    </template>
    <!-- <v-chip
      v-for="option in options"
      :key="option"
      outlined
      @click="currentValue = option"
    >
      <span style="font-weight: 400; font-size: 1.4em">{{ option }}</span>
    </v-chip> -->
    <!-- <v-btn fab x-small @click="ClientProvider.setStatus(item, 'ACTIVE')">
      <v-icon small> mdi-file </v-icon>
    </v-btn>
    <v-btn fab x-small @click="ClientProvider.setStatus(item, 'DISABLED')">
      <v-icon small> mdi-account </v-icon>
    </v-btn>
    <v-btn fab x-small @click="ClientProvider.setStatus(item, 'PENDING')">
      <v-icon small> mdi-account </v-icon>
    </v-btn> -->
  </v-menu>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      edit: false,
    };
  },
  methods: {
    handler(...params) {
      console.log(params);
      //   this.edit = true;
      //   return on(params);
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