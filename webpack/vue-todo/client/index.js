import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import createRouter from './config/router'
// import  './assets/css/test.css'
// // import  './assets/css/test-stylus.styl'
// import  './assets/image/img.png'

Vue.use(VueRouter)
const root = document.createElement('div')
document.body.appendChild(root)
const router = createRouter()
new Vue({
  router,
  render: (h) => h(App)
}).$mount(root)