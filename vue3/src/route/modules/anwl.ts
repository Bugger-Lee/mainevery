import anwl from '../../views/Anwl/anwl.vue'
import anwl1 from '../../views/Anwl/anwl1.vue'
import anwl2 from '../../views/Anwl/anwl2.vue'
import anwl3 from '../../views/Anwl/anwl3.vue'
import anwl4 from '../../views/Anwl/anwl4.vue'
import anwl5 from '../../views/Anwl/anwl5.vue'
export default [
  {
    path: '/anwl',
    component: anwl,
    meta: {
      title: '下单'
    }
  },
  {
    path: '/anwl1',
    component: anwl1,
    meta: {
      title: '运单查询'
    }
  },
  {
    path: '/anwl2',
    component: anwl2,
    meta: {
      title: '时效运费'
    }
  },
  {
    path: '/anwl3',
    component: anwl3,
    meta: {
      title: '招商加盟'
    }
  },
  {
    path: '/anwl4',
    component: anwl4,
    meta: {
      title: '会员中心'
    }
  },
  {
    path: '/anwl5',
    component: anwl5,
    meta: {
      title: '安能官网'
    }
  }
]