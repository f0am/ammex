<template>
  <v-layout row wrap>
    <v-flex xs6 class="pa-2" v-for="(field, i) in fields" :key="`field-${field.name}-${i}`">
      <v-card v-if="field.type === 'group'">
        <v-card-title class="headline font-weight-regular blue-grey white--text">{{field.name}}</v-card-title>
        <v-card-text>
          <v-flex xs12 v-for="(field, i) in field.fields" :key="`field-${field.name}-${i}`">
            <v-select
              v-if="field.type === 'select'"
              v-model="currentValue[field.name]"
              :items="field.options"
              :label="field.label"
            ></v-select>
            <v-switch
              v-else-if="field.type === 'switch'"
              v-model="currentValue[field.name]"
              :label="field.label"
            ></v-switch>
            <component v-else-if="field.type" :is="field.type" />
            <v-text-field v-else v-model="currentValue[field.name]" :label="field.label" />
          </v-flex>
        </v-card-text>
      </v-card>
      <v-select
        v-else-if="field.type === 'select'"
        v-model="currentValue[field.name]"
        :items="field.options"
        :label="field.label"
      ></v-select>
      <v-switch
        v-else-if="field.type === 'switch'"
        v-model="currentValue[field.name]"
        :label="field.label"
      ></v-switch>
      <component v-else-if="field.type" :is="field.type" />
      <v-text-field v-else v-model="currentValue[field.name]" :label="field.label" />
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
  },
  data() {
    return {};
  },
  computed: {
    // fieldsHandler() {
    //   if (this.fields instanceof Array) {
    //     return this.fields
    //   } else {
    //     return this.fields.entries.map(([name, label]) => ({ [name]:label }))
    //   }
    // },
    currentValue: {
      get() {
        return this.value;

        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style>
</style>
