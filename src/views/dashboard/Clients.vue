<template>
  <v-container fluid tag="section">
    <client-list-view />
  </v-container>
</template>

<script>
import ClientListView from "@/components/resources/client/ListView";

export default {
  components: {
    ClientListView,
  },
};
</script>