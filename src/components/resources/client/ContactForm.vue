<template>
  <v-layout column wrap>
    <validation-observer>
      <v-flex>
        <validation-provider v-slot="{ errors }" rules="required" name="name">
          <v-text-field
            autocomplete="off"
            v-model="currentValue.contact"
            :error-messages="errors"
            label="Name"
          />
        </validation-provider>
      </v-flex>
      <v-flex>
        <validation-provider v-slot="{ errors }" rules="required" name="phone">
          <v-text-field
            autocomplete="off"
            v-model="currentValue.phone"
            :error-messages="errors"
            label="Phone"
            v-mask="'(###) ###-####'"
          />
        </validation-provider>
      </v-flex>
      <v-flex>
        <validation-provider
          v-slot="{ errors }"
          rules="required|email"
          name="email"
        >
          <v-text-field
            v-model="currentValue.email"
            :error-messages="errors"
            label="Email"
          />
        </validation-provider>
        <!-- <v-text-field type="email" v-model="currentValue.email" label="Email" /> -->
      </v-flex>
    </validation-observer>
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
