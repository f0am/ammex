const c1 = () => import(/* webpackChunkName: "page--src--pages--required-docs-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/gridsome-bulma/src/pages/RequiredDocs.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--services-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/gridsome-bulma/src/pages/Services.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--login-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/gridsome-bulma/src/pages/Login.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--faq-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/gridsome-bulma/src/pages/FAQ.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--forms-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/gridsome-bulma/src/pages/Forms.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--contact-us-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/gridsome-bulma/src/pages/ContactUs.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--covid-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/gridsome-bulma/src/pages/Covid.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/gridsome-bulma/src/pages/About.vue")
const c9 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/gridsome-bulma/node_modules/gridsome/app/pages/404.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/gridsome-bulma/src/pages/Index.vue")

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
