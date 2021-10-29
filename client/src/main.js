// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(Buefy);
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://unpkg.com/vue-form-wizard/dist/vue-form-wizard.min.css"
  });

  // Add an external JavaScript before the closing </body> tag
  head.script.push({
    src: "https://unpkg.com/vue-form-wizard/dist/vue-form-wizard.js",
    body: true
  });
}
// Burger menus
document.addEventListener("DOMContentLoaded", function() {
  // open/close
  const toggler = document.querySelectorAll('[data-toggle="side-menu"]');

  if (toggler.length) {
    for (var i = 0; i < toggler.length; i++) {
      const target = toggler[i].getAttribute("data-target");

      if (target.length) {
        toggler[i].addEventListener("click", function(event) {
          event.preventDefault();
          const menu = document.querySelector(target);

          if (menu) {
            menu.classList.toggle("is-hidden");
          }
        });
      }
    }
  }
});
