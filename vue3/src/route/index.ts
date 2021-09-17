import { createWebHashHistory, createRouter } from 'vue-router'
import credit from '../views/Bank/credit.vue'
import credit1 from '../views/Bank/credit1.vue'
import credit2 from '../views/Bank/credit2.vue'
import credit3 from '../views/Bank/credit3.vue'
import credit4 from '../views/Bank/credit4.vue'
import anwl from './modules/anwl'
import bhw from './modules/bhw'
import msyh from './modules/msyh'
import rcs from './modules/rcs'

const history = createWebHashHistory()
const routesList = [
  {
    path: '/credit',
    component: credit,
    meta: {
      title: '线上支付笔笔返'
    }
  },
  {
    path: '/credit1',
    component: credit1,
    meta: {
      title: '立即还款'
    }
  },
  {
    path: '/credit2',
    component: credit2,
    meta: {
      title: '额度管理'
    }
  },
  {
    path: '/credit3',
    component: credit3,
    meta: {
      title: '爱心贷'
    }
  },
  {
    path: '/credit4',
    component: credit4,
    meta: {
      title: '签约绑定账户'
    }
  }
]
routesList.push(...anwl, ...bhw, ...msyh, ...rcs)
console.log(routesList)
const router = createRouter({
  history,
  routes: routesList
})
router.beforeEach((to, from, next) => {
  window.document.title =
    to.meta.title == undefined ? '默认标题' : to.meta.title
  next()
})
export default router
