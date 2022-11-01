import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/quizes',
    name: 'Quizes',
    component: () => import('../views/Quizes.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Result.vue')
  },
  {
    path: '/garden',
    name: 'Garden',
    component: () => import('../views/Garden.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
