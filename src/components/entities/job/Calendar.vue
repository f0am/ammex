<template>
  <base-material-card title="Jobs" class="px-5 py-0" color="primary" inline>
    {{ jobs }}
    <template v-slot:after-heading>
      <v-toolbar class="ma-0 pa-0" flat style="background-color: transparent">
        <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
          Today
        </v-btn>
        <v-spacer />
        <v-btn fab text small color="grey darken-2" @click="prev">
          <v-icon small> mdi-chevron-left </v-icon>
        </v-btn>
        <v-btn v-if="$refs.calendar" outlined @click="setMonth">
          {{ $refs.calendar.title }}
        </v-btn>
        <!-- <v-toolbar-title v-if="$refs.calendar" @click="setMonth()" style="cursor: pointer">
            </v-toolbar-title> -->
        <v-btn fab text small color="grey darken-2" @click="next">
          <v-icon small> mdi-chevron-right </v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-menu bottom right offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
              <span>{{ typeToLabel[type] }}</span>
              <v-icon right> mdi-menu-down </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="type = 'day'">
              <v-list-item-title>Day</v-list-item-title>
            </v-list-item>
            <v-list-item @click="type = 'week'">
              <v-list-item-title>Week</v-list-item-title>
            </v-list-item>
            <v-list-item @click="type = 'month'">
              <v-list-item-title>Month</v-list-item-title>
            </v-list-item>
            <v-list-item @click="type = '4day'">
              <v-list-item-title>4 days</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </template>
    <v-row class="fill-height">
      <v-col>
        <v-sheet style="height: 72vh">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="jobsEvents"
            :event-color="getEventColor"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
          >
            <template v-slot:day-body>
              <div>test</div>
            </template>
          </v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card
              color="grey lighten-4"
              min-width="350px"
              flat
              style="margin-top: 0"
            >
              <v-toolbar :color="selectedEvent.color" dark>
                <!-- <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn> -->
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <!-- <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn> -->
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Client</v-list-item-title>
                    <v-list-item-subtitle>{{
                      selectedEvent &&
                      selectedEvent.job &&
                      selectedEvent.job.client.name
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Type</v-list-item-title>
                    <v-list-item-subtitle>{{
                      selectedEvent &&
                      selectedEvent.job &&
                      selectedEvent.job.type.toLowerCase()
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Status</v-list-item-title>
                    <v-list-item-subtitle>{{
                      selectedEvent &&
                      selectedEvent.job &&
                      selectedEvent.job.status
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Deadline</v-list-item-title>
                    <v-list-item-subtitle>{{
                      selectedEvent &&
                      selectedEvent.job &&
                      selectedEvent.job.deadline
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Assignee</v-list-item-title>
                    <v-list-item-subtitle>{{
                      (selectedEvent &&
                        selectedEvent.job &&
                        selectedEvent.job.assigneeID) ||
                      "Unassigned"
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card-text>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </base-material-card>
</template>
<script>
import { fetch } from "./index";

export default {
  mixins: [fetch],
  data: () => ({
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
  }),
  async mounted() {
    this.$refs.calendar.checkChange();
    await this.fetchJobs();
  },
  computed: {
    jobsEvents() {
      return this.jobs.map((j) => {
        return {
          job: j,
          name: j.name,
          start: new Date(j.deadline),
          end: new Date(j.deadline),
          color: j.assigneeID ? "primary" : "danger",
          timed: false,
        };
      });
    },
  },
  methods: {
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setMonth() {
      this.type = "month";
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      //   const events = [];
      //   const min = new Date(`${start.date}T00:00:00`);
      //   const max = new Date(`${end.date}T23:59:59`);
      //   const days = (max.getTime() - min.getTime()) / 86400000;
      //   const eventCount = this.rnd(days, days + 20);
      //   for (let i = 0; i < eventCount; i++) {
      //     const allDay = this.rnd(0, 3) === 0;
      //     const firstTimestamp = this.rnd(min.getTime(), max.getTime());
      //     const first = new Date(firstTimestamp - (firstTimestamp % 900000));
      //     const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
      //     const second = new Date(first.getTime() + secondTimestamp);
      //     events.push({
      //       name: this.names[this.rnd(0, this.names.length - 1)],
      //       start: first,
      //       end: second,
      //       color: this.colors[this.rnd(0, this.colors.length - 1)],
      //       timed: !allDay,
      //     });
      //   }
      //   this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
};
</script>
<style>
.v-application .v-calendar .transparent {
  color: #000 !important;
}
/* div.v-calendar-monthly.v-calendar-weekly.v-calendar.theme--light.v-calendar-events
  > div
  > div
  > div
  > button.transparent {
  background-color: #000;
} */
/* .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){
  color: #000;
} */
</style>
