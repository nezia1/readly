import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'Pages/Home.vue'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Readly'
    }
  },
  {
    path: '/add',
    name: 'add-feed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ 'Pages/AddFeed.vue'),
    meta: {
      title: 'Readly - Add a feed'
    }
  },
  {
    path: '/feeds/:id',
    name: 'feed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ 'Pages/Feed.vue'),
    meta: {
      title: 'Readly'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
