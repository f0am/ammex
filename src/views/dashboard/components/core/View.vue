<template>
  <v-main>
    <router-view />

    <dashboard-core-footer />
    <v-snackbar v-model="$root.show" timeout="-1" right :color="$root.color">
      {{ $root.message }}

      <template v-slot:action="{ attrs }">
        <v-btn fab text v-bind="attrs" @click="$root.show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-main>
</template>

<script>
export default {
  name: "DashboardCoreView",
  computed: {},
  components: {
    DashboardCoreFooter: () => import("./Footer"),
  },
};
</script>
