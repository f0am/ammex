const c1 = () => import(/* webpackChunkName: "page--src--pages--en--login-vue" */ "/home/jsr/dev/ammex/client/src/pages/en/Login.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--en--faq-vue" */ "/home/jsr/dev/ammex/client/src/pages/en/FAQ.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--en--forms-vue" */ "/home/jsr/dev/ammex/client/src/pages/en/Forms.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--en--contact-us-vue" */ "/home/jsr/dev/ammex/client/src/pages/en/ContactUs.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--en--covid-vue" */ "/home/jsr/dev/ammex/client/src/pages/en/Covid.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--fr--about-vue" */ "/home/jsr/dev/ammex/client/src/pages/fr/About.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--en--about-vue" */ "/home/jsr/dev/ammex/client/src/pages/en/About.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--required-docs-vue" */ "/home/jsr/dev/ammex/client/src/pages/RequiredDocs.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--services-vue" */ "/home/jsr/dev/ammex/client/src/pages/Services.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--fr--index-vue" */ "/home/jsr/dev/ammex/client/src/pages/fr/Index.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--en--index-vue" */ "/home/jsr/dev/ammex/client/src/pages/en/Index.vue")
const c12 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/jsr/dev/ammex/client/node_modules/gridsome/app/pages/404.vue")
const c13 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/jsr/dev/ammex/client/src/pages/Index.vue")

export default [
  {
    path: "/en/login/",
    component: c1
  },
  {
    path: "/en/faq/",
    component: c2
  },
  {
    path: "/en/forms/",
    component: c3
  },
  {
    path: "/en/contact-us/",
    component: c4
  },
  {
    path: "/en/covid/",
    component: c5
  },
  {
    path: "/fr/about/",
    component: c6
  },
  {
    path: "/en/about/",
    component: c7
  },
  {
    path: "/required-docs/",
    component: c8
  },
  {
    path: "/services/",
    component: c9
  },
  {
    path: "/fr/",
    component: c10
  },
  {
    path: "/en/",
    component: c11
  },
  {
    name: "404",
    path: "/404/",
    component: c12
  },
  {
    name: "home",
    path: "/",
    component: c13
  },
  {
    name: "*",
    path: "*",
    component: c12
  }
]
