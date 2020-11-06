import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import {createStore} from './store/index'
import sync from 'vuex-router-sync'

export function createApp() {

  const store = createStore()

  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
