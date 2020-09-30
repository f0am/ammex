<template>
  <div>
    <v-select
      :items="options"
      v-model="currentValue"
      :label="label"
      :item-text="itemText"
      :item-value="itemValue"
      return-object
      clearable
      :multiple="multiple"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object | Array,
      default: () => {}
    },
    creatable: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      label: "",
      itemText: "name",
      itemValue: "id"
    };
  },
  computed: {
    options() {
      return [];
    },
    items() {
      if (this.creatable) {
        return [
          {
            [this.itemText]: "Nouveau",
            [this.itemValue]: false
          },
          ...this.options
        ];
      } else {
        return this.options;
      }
    },
    currentValue: {
      set(value) {
        this.$emit("input", value);
      },
      get() {
        return this.value;
      }
    }
  }
};
</script>

<style>
</style>
