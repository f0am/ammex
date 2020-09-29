<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">{{ client.name }}</div>

            <div class="subtitle-1 font-weight-light">
              Client #{{ client.id }}
            </div>
            <v-spacer />
          </template>

          <v-layout row wrap>
            <v-flex xs12 style="padding-left: 1.5em">
              <v-layout row wrap>
                <v-flex xs12>
                 
                </v-flex>
                <v-flex xs12>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>GST</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.gst
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>GST Code</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.gstCode
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>QST</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.qst
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>ClicSecr</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.cliqsecrCode
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>Payroll</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.payroll
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>Payroll Remittance</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.payrollRemittance
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>Corporation</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.corporation
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title
                        >Corporation Year End Date</v-list-item-title
                      >
                      <v-list-item-subtitle>{{
                        client.corporationYearEnd.toLocaleDateString("en-CA")
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>WSIB</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.wsib
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>WSIB Remittance</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.wsibRemittance
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>WSIB Rate</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.wsibcsstRate
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>WSIB Code</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.wsibCode
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>CRA code</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.craCode
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>T4 Due Date</v-list-item-title>
                      <v-list-item-subtitle>{{
                        client.t4dueDate.toLocaleDateString("en-CA")
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <!-- <v-card>
                    <v-card-title>
                      GST <v-spacer /> <v-icon>mdi-pencil</v-icon></v-card-title
                    >
                    <v-card-text>
                      <div>
                        {{ client.gst }}
                      </div>
                      <div>
                        {{ client.qst }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs6>
                  <v-card>
                    <v-card-title> Contact </v-card-title>
                    <v-card-text>
                      {{ client.contact }}
                    </v-card-text>
                  </v-card> -->
                </v-flex>
              </v-layout>
            </v-flex>
            <!-- <v-flex xs6><div class="label">SSID:</div> {{ partner.ssid }}</v-flex>
            <v-flex xs6><div class="label">SSID ASCI:</div> {{ partner.ssidAsci }}</v-flex>
            <v-flex xs6><div class="label">UC1:</div> {{ partner.uc1.vlanId }}</v-flex>
            <v-flex xs6><div class="label">UC3:</div> {{ partner.uc3.tunnelId }}</v-flex> -->
          </v-layout>
        </base-material-card>
      </v-col>

      <v-col cols="12" md="4">
        <base-material-card
          class="v-card-profile"
          avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
        >
          <v-card-title>
            Contact information<v-spacer />
            <v-icon>mdi-pencil</v-icon>
          </v-card-title>
          <v-card-text>
            <table style="width: 100%">
              <tr>
                <td>Contact</td>
                <td style="text-align: right">{{ client.contact }}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td style="text-align: right">{{ client.phone }}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td style="text-align: right">{{ client.email }}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td style="text-align: right">{{ client.address }}</td>
              </tr>
            </table>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import ServerList from '@/components/resources/server/List'
export default {
  components: {
    // ServerList
  },
  data() {
    return {
      client: {},
    };
  },
  mounted() {
    this.client = {
      id: 1,
      contact: "Jeremie S Robitaille",
      name: "Hada Alvarenga Inc.",
      address: "1234 boulevard de l'Hopital, Gatineau, QC",
      email: "123123@aksjd.lol",
      phone: "(123)111-1234",
      owners: ["Gilles", "Jacques"],
      cheques: 15,
      gst: "123456789RT0001",
      qst: "123456789RT0001",
      remittance: "Quarterly",
      payroll: "123456789RP0001",
      payrollRemittance: "Quaterly",
      corporation: "123456789RC0001",
      corporationYearEnd: new Date(),
      wsib: "99999",
      wsibRemittance: "Quaterly",
      wsibcsstRate: 0.05,
      wsibCode: "99999",
      cliqsecrCode: "99999",
      gstCode: "99999",
      craCode: "99999",
      wsibCode: "99999",
      t4dueDate: new Date(),
      craConsent: true,
      rqConsent: true,
      wsibConsent: true,
      csstConsent: true,
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
