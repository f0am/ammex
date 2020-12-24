<template>
  <v-layout  column wrap>
    <v-flex
      v-for="(field, i) in fields.filter(
        (f) => f.condition === undefined || f.condition(currentValue) === true
      )"
      :key="`field-${field.name}-${i}`"
    >
      <v-card v-if="field.type === 'group'">
        <v-card-title
          class="headline font-weight-regular blue-grey white--text"
          >{{ field.name }}</v-card-title
        >
        <v-card-text>
          <v-flex
            xs12
            v-for="(field, i) in field.fields"
            :key="`field-${field.name}-${i}`"
          >
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
            <v-text-field
              v-else
              v-model="currentValue[field.name]"
              :label="field.label"
            />
          </v-flex>
        </v-card-text>
      </v-card>
      <v-autocomplete
        v-else-if="field.type === 'autocomplete'"
        v-model="currentValue[field.name]"
        :items="field.options"
        :label="field.label"
      ></v-autocomplete>
      <v-switch
        v-else-if="field.type === 'switch'"
        v-model="currentValue[field.name]"
        :label="field.label"
      ></v-switch>
      <v-menu
        v-else-if="field.type === 'date'"
        v-model="dateMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="currentValue[field.name]"
            :label="field.label"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          style="margin: 0"
          v-model="currentValue[field.name]"
          @input="dateMenu = false"
        ></v-date-picker>
      </v-menu>
      <v-text-field
        v-else-if="!field.type && field.mask"
        v-model="currentValue[field.name]"
        :label="field.label"
        v-mask="field.mask"
      />
      <v-text-field
        v-else-if="field.type === 'number'"
        type="number"
        v-model="currentValue[field.name]"
        :label="field.label"
      />
      <v-text-field
        v-else-if="!field.type"
        v-model="currentValue[field.name]"
        :label="field.label"
      />
      <span v-else-if="field.type === 'spacer'" />
      <component
        v-else-if="field.type !== null"
        :is="field.type"
        :returnID="field.returnID"
        v-model="currentValue[field.name]"
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
  },
  data() {
    return {
      dateMenu: false,
    };
  },
  computed: {
    currentValue: {
      get() {
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
