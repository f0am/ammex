const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/hm_nice27/ammex-website/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/hm_nice27/ammex-website/src/pages/About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/hm_nice27/ammex-website/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/hm_nice27/ammex-website/src/templates/Post.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/hm_nice27/ammex-website/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    path: "/:title/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
