import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import createRouter from './config/router'
import store from './store/store'
import  './assets/css/test.css'
// // import  './assets/css/test-stylus.styl'
// import  './assets/image/img.png'

Vue.use(VueRouter)
const root = document.createElement('div')
document.body.appendChild(root)
const router = createRouter()

// router.beforeEach((to, from, next) => {
//   console.log('before each');
//   next()
// })

// router.beforeResolve((to,from,next) => {
//   console.log('before resolve');
//   next()
// })

// router.afterEach((to, from) => {
//   console.log('after each');
// })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)