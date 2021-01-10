<template>
  <v-container fluid tag="section">
    <user-list-view />
  </v-container>
</template>

<script>
import UserListView from "@/components/resources/user/ListView";
export default {
  components: {
    UserListView,
  },
};
</script>