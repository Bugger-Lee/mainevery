import Router from 'vue-router'
import routes from './routers'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/'
    // linkActiveClass: 'active-link',
    // linkExactActiveClass: 'exact-active-link'
    scrollBehavior (to, from, savedPosition) {
      
    }
  })
}