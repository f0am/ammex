<template>
  <v-container fluid tag="section">
    <clients-list />
  </v-container>
</template>


<script>
import ClientsList from "@/components/resources/client/ListView";
export default {
  components: {
    ClientsList,
  },
  data() {
    return {};
  },
};
</script>