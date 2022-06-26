/*
 * @Author: lijian
 * @since: 2022-06-26 14:39:54
 * @lastTime: 2022-06-26 15:35:55
 * @LastAuthor: lijian
 * @message: 华融证券
 */
import hrzq1 from '../../views/Hrzq/hrzq1.vue'
import hrzq2 from '../../views/Hrzq/hrzq2.vue'
import hrzq3 from '../../views/Hrzq/hrzq3.vue'
export default [
  {
    path: '/hrzq1',
    component: hrzq1,
    meta: {
      title: '华融证券'
    }
  },
  {
    path: '/hrzq2',
    component: hrzq2,
    meta: {
      title: '华融瑞泽'
    }
  },
  {
    path: '/hrzq3',
    component: hrzq3,
    meta: {
      title: '华融期货'
    }
  }
]
