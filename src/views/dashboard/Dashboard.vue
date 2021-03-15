<template>
  <v-container class="full-height" id="dashboard" fluid tag="section">
    <v-row>
      <v-col cols="6">
        <base-material-card class="fill-height" title="Backlog" inline>
          <template #header-actions>
            <v-icon> mdi-arrow-left </v-icon>
            <v-menu
              ref="backlogRangePicker"
              v-model="backlogRangePicker"
              :close-on-content-click="false"
              :return-value.sync="backlogRange"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on">mdi-calendar</v-icon>
                <span>
                  from:
                  {{ backlogRange[0] }}
                </span>
                <span>
                  to:
                  {{ backlogRange[1] }}
                </span>
                <!-- <v-text-field
                  v-model="backlogRange"
                  :label="label"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field> -->
              </template>
              <v-date-picker
                v-model="backlogRange"
                range
                landscape
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="backlogRangePicker = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.backlogRangePicker.save(backlogRange)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </template>
          <v-row>
            <v-col cols="12" class="mt-10">
              <job-provider v-slot="{ JobProvider }">
                <v-simple-table class="ml-2">
                  <tbody>
                    <tr v-for="(job, i) in JobProvider.items" :key="i">
                      <td v-text="job.deadline" />
                      <td v-text="job.contract.client.name" />
                      <td v-text="job.contract.type" />
                      <td v-text="job.name" />
                      <td v-text="job.status" />
                    </tr>
                  </tbody>
                </v-simple-table>
              </job-provider>
            </v-col>
          </v-row>
        </base-material-card>
      </v-col>

      <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <base-material-chart-card
              :data="emailsSubscriptionChart.data"
              :options="emailsSubscriptionChart.options"
              :responsive-options="emailsSubscriptionChart.responsiveOptions"
              color="primary"
              type="Bar"
            >
              <h4 class="card-title font-weight-light mt-2 ml-2">
                Weekly jobs by status
              </h4>

              <!-- <p class="d-inline-flex font-weight-light ml-2 mt-1">
                Last Campaign Performance
              </p> -->

              <!-- <template v-slot:actions>
                <v-icon class="mr-1" small> mdi-clock-outline </v-icon>
                <span class="caption grey--text font-weight-light"
                  >updated 10 minutes ago</span
                >
              </template> -->
            </base-material-chart-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <base-material-stats-card
              color="info"
              icon="mdi-account-cash"
              title="Payroll jobs"
              value="+245"
              sub-icon="mdi-clock"
              sub-text="Just Updated"
            />
          </v-col>
          <v-col cols="4">
            <base-material-stats-card
              color="info"
              icon="mdi-book-open-variant"
              title="Bookkeeping jobs"
              value="+245"
              sub-icon="mdi-clock"
              sub-text="Just Updated"
            />
          </v-col>
          <v-col cols="4">
            <base-material-stats-card
              color="info"
              icon="mdi-twitter"
              title="Followers"
              value="+245"
              sub-icon="mdi-clock"
              sub-text="Just Updated"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { JobProvider } from "@/providers";
export default {
  name: "DashboardDashboard",
  components: {
    JobProvider,
  },
  data() {
    return {
      backlogRange: "",
      backlogRangePicker: false,
      countryData: {
        US: 2920,
        DE: 1390,
        AU: 760,
        GB: 690,
        RO: 600,
        BR: 550,
      },
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      emailsSubscriptionChart: {
        data: {
          labels: ["Pending", "In Progress", "Blocked", "Completed"],
          series: [[542, 443, 320]],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
      headers: [
        {
          sortable: false,
          text: "ID",
          value: "id",
        },
        {
          sortable: false,
          text: "Name",
          value: "name",
        },
        {
          sortable: false,
          text: "Salary",
          value: "salary",
          align: "right",
        },
        {
          sortable: false,
          text: "Country",
          value: "country",
          align: "right",
        },
        {
          sortable: false,
          text: "City",
          value: "city",
          align: "right",
        },
      ],
      items: [
        {
          id: 1,
          name: "Dakota Rice",
          country: "Niger",
          city: "Oud-Tunrhout",
          salary: "$35,738",
        },
        {
          id: 2,
          name: "Minerva Hooper",
          country: "Curaçao",
          city: "Sinaai-Waas",
          salary: "$23,738",
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          country: "Netherlands",
          city: "Overland Park",
          salary: "$56,142",
        },
        {
          id: 4,
          name: "Philip Chanley",
          country: "Korea, South",
          city: "Gloucester",
          salary: "$38,735",
        },
        {
          id: 5,
          name: "Doris Greene",
          country: "Malawi",
          city: "Feldkirchen in Kārnten",
          salary: "$63,542",
        },
      ],
      sales: [
        {
          country: "USA",
          flag:
            "https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/US.png",
          salesInM: 2920,
        },
        {
          country: "Germany",
          flag:
            "https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/DE.png",
          salesInM: 1300,
        },
        {
          country: "Australia",
          flag:
            "https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/AU.png",
          salesInM: 760,
        },
        {
          country: "United Kingdom",
          flag:
            "https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/GB.png",
          salesInM: 690,
        },
        {
          country: "Romania",
          flag:
            "https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/RO.png",
          salesInM: 600,
        },
        {
          country: "Brasil",
          flag:
            "https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/BR.png",
          salesInM: 550,
        },
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false,
      },
    };
  },

  computed: {
    totalSales() {
      return this.sales.reduce((acc, val) => acc + val.salesInM, 0);
    },
  },

  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    },
  },
};
</script>
