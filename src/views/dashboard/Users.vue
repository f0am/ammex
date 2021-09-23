<template>
  <v-container fluid tag="section">
    <user-list-view />
  </v-container>
</template>

<script>
import UserListView from "@/components/entities/user/ListView";
export default {
  components: {
    UserListView,
  },
};
</script>