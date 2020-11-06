import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index/index')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news/index')
  }
]

const route = new Router({
  mode: 'history',
  routes
})

export default route