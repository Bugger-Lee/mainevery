import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Switch from '../components/Switch.vue'
import Button from '../components/Button.vue'
import Dialog from '../components/Dialog.vue'
import Tabs from '../components/Tabs.vue'

import MarkDown from '../components/MarkDown.vue'
import intro from '../markdown/intro.md'
import install from '../markdown/install.md'
import getStarted from '../markdown/get-started.md'
import { h } from 'vue'
const md = (string, key) => h(MarkDown, { content: string, key })

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
          component: md(intro, '1')
        },
        {
          path: 'install',
          component: md(install, '2')
        },
        {
          path: 'get-started',
          component: md(getStarted, '3')
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