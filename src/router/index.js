import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/searchFilm',
    name: 'searchFilm',
    component: () => import('../components/SearchFilm.vue')
  },
  {
    path: '/connection',
    name: 'connection',
    component: () => import('../components/LoginForm.vue')    
  },
  {
    path: '/axios',
    name: 'axios',
    component: () => import('../components/ToUseAxios.vue')    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
