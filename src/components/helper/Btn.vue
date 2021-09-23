<template>
  <v-btn rounded :color="color">
    <span><slot /></span>
  </v-btn>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "mdi-check",
    },
  },
};
</script>
<style scoped>
</style>