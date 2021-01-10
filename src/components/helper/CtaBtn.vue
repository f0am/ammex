<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      rounded
      style="padding-left: 4px !important"
      :color="color"
      :elevation="hover ? '5' : '1'"
    >
      <v-avatar
        size="35"
        :color="color"
        class="mr-3"
        :class="hover ? '' : altColor"
        style="cursor: pointer; transition: all 0.15s ease-in"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-avatar>
      <span><slot /></span>
    </v-btn>
  </v-hover>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
    },
    altColor: {
      type: String,
      default: "darken-3",
    },
    icon: {
      type: String,
      default: "mdi-exclamation-thick",
    },
  },
};
</script>
<style scoped>
</style>