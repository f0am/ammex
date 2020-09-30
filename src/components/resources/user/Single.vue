<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs4>
        <v-card>
          <v-card-title primary-title class="card-title">
            <div class="card-title-text">{{ user.name }}</div>
          </v-card-title>
          <v-layout row wrap>
            <!-- <v-flex xs6><div class="label">SSID:</div> {{ user.ssid }}</v-flex>
            <v-flex xs6><div class="label">SSID ASCI:</div> {{ user.ssidAsci }}</v-flex>
            <v-flex xs6><div class="label">UC1:</div> {{ user.uc1.vlanId }}</v-flex>
            <v-flex xs6><div class="label">UC3:</div> {{ user.uc3.tunnelId }}</v-flex>-->
            {{ user }}
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.user = {
      id: 2,
    };
  },
};
</script>

<style>
.card-title {
  border-bottom: 2px solid #d3d3d3;
}
.card-title-text {
  font-weight: bold;
}
.label {
  width: 5em;
  display: inline-block;
  text-align: right;
  font-weight: 500;
}
</style>
