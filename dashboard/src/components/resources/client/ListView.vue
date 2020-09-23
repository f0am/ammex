<template>
  <v-container fluid tag="section">
    <client-list />
  </v-container>
</template>


<script>
import ClientList from "@/components/resources/client/List";
export default {
  components: {
    ClientList,
  },
};
</script>
