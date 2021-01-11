const c1 = () => import(/* webpackChunkName: "page--src--pages--required-docs-vue" */ "/home/jsr/dev/ammex/client/src/pages/RequiredDocs.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--services-vue" */ "/home/jsr/dev/ammex/client/src/pages/Services.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--login-vue" */ "/home/jsr/dev/ammex/client/src/pages/Login.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--faq-vue" */ "/home/jsr/dev/ammex/client/src/pages/FAQ.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--forms-vue" */ "/home/jsr/dev/ammex/client/src/pages/Forms.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--contact-us-vue" */ "/home/jsr/dev/ammex/client/src/pages/ContactUs.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--covid-vue" */ "/home/jsr/dev/ammex/client/src/pages/Covid.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/jsr/dev/ammex/client/src/pages/About.vue")
const c9 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/jsr/dev/ammex/client/node_modules/gridsome/app/pages/404.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/jsr/dev/ammex/client/src/pages/Index.vue")

export default [
  {
    path: "/required-docs/",
    component: c1
  },
  {
    path: "/services/",
    component: c2
  },
  {
    path: "/login/",
    component: c3
  },
  {
    path: "/faq/",
    component: c4
  },
  {
    path: "/forms/",
    component: c5
  },
  {
    path: "/contact-us/",
    component: c6
  },
  {
    path: "/covid/",
    component: c7
  },
  {
    path: "/about/",
    component: c8
  },
  {
    name: "404",
    path: "/404/",
    component: c9
  },
  {
    name: "home",
    path: "/",
    component: c10
  },
  {
    name: "*",
    path: "*",
    component: c9
  }
]
