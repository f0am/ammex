const c1 = () => import(/* webpackChunkName: "page--src--pages--required-docs-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/RequiredDocs.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--services-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/Services.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--login-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/Login.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--indexfr-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/Indexfr.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--faq-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/FAQ.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--forms-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/Forms.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--contact-us-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/ContactUs.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--covid-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/Covid.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/About.vue")
const c10 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/node_modules/gridsome/app/pages/404.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/Index.vue")

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
    path: "/indexfr/",
    component: c4
  },
  {
    path: "/faq/",
    component: c5
  },
  {
    path: "/forms/",
    component: c6
  },
  {
    path: "/contact-us/",
    component: c7
  },
  {
    path: "/covid/",
    component: c8
  },
  {
    path: "/about/",
    component: c9
  },
  {
    name: "404",
    path: "/404/",
    component: c10
  },
  {
    name: "home",
    path: "/",
    component: c11
  },
  {
    name: "*",
    path: "*",
    component: c10
  }
]
