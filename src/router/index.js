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
    path: '/quiz0',
    name: 'Quiz',
    component: () => import('../views/Quiz0.vue'),
  },
  {
    path: '/quiz1',
    name: 'Quiz1',
    component: () => import('../views/Quiz1.vue'),
  },
  {
    path: '/quiz2',
    name: 'Quiz2',
    component: () => import('../views/Quiz2.vue'),
  },
  {
    path: '/quiz3',
    name: 'Quiz3',
    component: () => import('../views/Quiz3.vue'),
  },
  {
    path: '/quiz4',
    name: 'Quiz4',
    component: () => import('../views/Quiz4.vue'),
  },
  {
    path: '/quiz5',
    name: 'Quiz5',
    component: () => import('../views/Quiz5.vue'),
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
