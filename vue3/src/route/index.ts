import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Switch from '../components/Switch.vue'
import Button from '../components/Button.vue'
import Dialog from '../components/Dialog.vue'
import Tabs from '../components/Tabs.vue'

import MarkDown from '../components/MarkDown.vue'
import { h } from 'vue'
const md = filename => h(MarkDown, {path: `../markdown/${filename}.md`,key: filename})

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: '',
          redirect: 'doc/intro'
        },
        {
          path: 'intro',
          component: md('intro')
        },
        {
          path: 'install',
          component: md('install')
        },
        {
          path: 'get-started',
          component: md('get-started')
        },
        {
          path: 'switch',
          component: Switch  
        },
        {
          path: 'button',
          component: Button  
        },
        {
          path: 'dialog',
          component: Dialog  
        },
        {
          path: 'tabs',
          component: Tabs  
        },
        
      ]
    }
  ]
})

export default router