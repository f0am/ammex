const c1 = () => import(/* webpackChunkName: "page--src--pages--fr--required-docs-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/fr/RequiredDocs.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--fr--services-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/fr/Services.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--en--required-docs-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/en/RequiredDocs.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--en--services-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/en/Services.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--fr--login-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/fr/Login.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--en--login-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/en/Login.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--fr--faq-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/fr/FAQ.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--fr--forms-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/fr/Forms.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--en--faq-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/en/FAQ.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--en--forms-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/en/Forms.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--fr--contact-us-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/fr/ContactUs.vue")
const c12 = () => import(/* webpackChunkName: "page--src--pages--en--contact-us-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/en/ContactUs.vue")
const c13 = () => import(/* webpackChunkName: "page--src--pages--fr--covid-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/fr/Covid.vue")
const c14 = () => import(/* webpackChunkName: "page--src--pages--en--covid-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/en/Covid.vue")
const c15 = () => import(/* webpackChunkName: "page--src--pages--fr--about-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/fr/About.vue")
const c16 = () => import(/* webpackChunkName: "page--src--pages--en--about-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/en/About.vue")
const c17 = () => import(/* webpackChunkName: "page--src--pages--fr--index-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/fr/Index.vue")
const c18 = () => import(/* webpackChunkName: "page--src--pages--en--index-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/en/Index.vue")
const c19 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/node_modules/gridsome/app/pages/404.vue")
const c20 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/hm_nice27/Desktop/Hada MA/ammex/client/src/pages/Index.vue")

export default [
  {
    path: "/fr/required-docs/",
    component: c1
  },
  {
    path: "/fr/services/",
    component: c2
  },
  {
    path: "/en/required-docs/",
    component: c3
  },
  {
    path: "/en/services/",
    component: c4
  },
  {
    path: "/fr/login/",
    component: c5
  },
  {
    path: "/en/login/",
    component: c6
  },
  {
    path: "/fr/faq/",
    component: c7
  },
  {
    path: "/fr/forms/",
    component: c8
  },
  {
    path: "/en/faq/",
    component: c9
  },
  {
    path: "/en/forms/",
    component: c10
  },
  {
    path: "/fr/contact-us/",
    component: c11
  },
  {
    path: "/en/contact-us/",
    component: c12
  },
  {
    path: "/fr/covid/",
    component: c13
  },
  {
    path: "/en/covid/",
    component: c14
  },
  {
    path: "/fr/about/",
    component: c15
  },
  {
    path: "/en/about/",
    component: c16
  },
  {
    path: "/fr/",
    component: c17
  },
  {
    path: "/en/",
    component: c18
  },
  {
    name: "404",
    path: "/404/",
    component: c19
  },
  {
    name: "home",
    path: "/",
    component: c20
  },
  {
    name: "*",
    path: "*",
    component: c19
  }
]
