<template>
  <v-container fluid>
    <v-layout
      row
      wrap>
      <v-flex xs4>
        <v-card>
          <v-card-title
            primary-title
            class="card-title">
            <div class="card-title-text">{{ partner.name }}</div>
          </v-card-title>
          <v-layout
            row
            wrap>
            <v-flex xs6><div class="label">SSID:</div> {{ partner.ssid }}</v-flex>
            <v-flex xs6><div class="label">SSID ASCI:</div> {{ partner.ssidAsci }}</v-flex>
            <v-flex xs6><div class="label">UC1:</div> {{ partner.uc1.vlanId }}</v-flex>
            <v-flex xs6><div class="label">UC3:</div> {{ partner.uc3.tunnelId }}</v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs8>
        <v-card>
          <v-card-title
            primary-title
            class="card-title">
            <div class="card-title-text">Servers</div>

          </v-card-title>
          <!-- Insert Component -->
          <!-- <server-list :servers="partner.servers" /> -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import ServerList from '@/components/resources/server/List'
export default {
  components: {
    // ServerList
  },
  data () {
    return {
      partner: {}
    }
  },
  mounted () {
    this.partner = {
      id: 2,
      name: 'RIP',
      ssid: 'a SSID',
      ssidAsci: 'a SSID ASCI',
      uc1: { vlanId: 111 },
      uc3: { tunnelId: 111 },
      servers: [{ name: 'Server Name' }, { name: 'Server 2' }]
    }
  }
}
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
