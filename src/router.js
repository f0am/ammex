import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("@/views/dashboard/Index"),
      children: [
        // Dashboard
        {
          name: "Dashboard",
          path: "",
          component: () => import("@/components/resources/job/Calendar")

          // component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: "Users",
          path: "users",
          component: () => import("@/views/dashboard/Users")
        },
        {
          name: "Notifications",
          path: "components/notifications",
          component: () => import("@/views/dashboard/component/Notifications")
        },
        {
          name: "Icons",
          path: "components/icons",
          component: () => import("@/views/dashboard/component/Icons")
        },
        {
          name: "Typography",
          path: "components/typography",
          component: () => import("@/views/dashboard/component/Typography")
        },
        // Tables
        {
          name: "Regular Tables",
          path: "tables/regular-tables",
          component: () => import("@/views/dashboard/tables/RegularTables")
        },
        // Maps
        {
          name: "Google Maps",
          path: "maps/google-maps",
          component: () => import("@/views/dashboard/maps/GoogleMaps")
        },
        // Upgrade
        {
          name: "Upgrade",
          path: "upgrade",
          component: () => import("@/views/dashboard/Upgrade")
        },
        {
          name: "Clients",
          path: "clients",
          component: () => import("@/views/dashboard/Clients")
        },
        {
          name: "Clients",
          path: "clients/:id",
          component: () => import("@/views/dashboard/SingleClient")
        },
        {
          name: "Jobs",
          path: "jobs",
          component: () => import("@/views/dashboard/Jobs")
        },
        {
          name: "Calendar",
          path: "calendar",
          component: () => import("@/components/resources/job/Calendar")
        }
      ]
    }
  ]
});
