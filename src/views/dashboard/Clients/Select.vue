<template>
  <v-select
    :items="options"
    v-model="currentValue"
    :label="label"
    item-text="name"
    item-value="id"
    return-object />
</template>

<script>
import { Controller } from '@/store'
export default {
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    currentValue: {
      set (value) {
        this.$emit('input', value)
      },
      get () {
        return this.value
      }
    },
    options () {
      return Controller.all()
    }
  },
  mounted () {
    Controller.$fetchControllers()
  }
}
</script>

<style>

</style>
