/*
 * @Author: lijian
 * @since: 2022-06-26 10:16:59
 * @lastTime: 2022-06-26 10:57:34
 * @LastAuthor: lijian
 * @message:
 */
import hm1 from '../../views/Hm/hm1.vue'
import hm2 from '../../views/Hm/hm2.vue'
import hm3 from '../../views/Hm/hm3.vue'
import hm4 from '../../views/Hm/hm4.vue'
import vedio from '../../views/Common/video.vue'
export default [
  {
    path: '/hm1',
    component: hm1,
    meta: {
      title: '交易规则'
    }
  },
  {
    path: '/hm2',
    component: hm2,
    meta: {
      title: '会员制度'
    }
  },
  {
    path: '/hm3',
    component: hm3,
    meta: {
      title: '积分介绍'
    }
  },
  {
    path: '/hm4',
    component: hm4,
    meta: {
      title: '退换货原则'
    }
  },
  {
    path: '/vedio',
    component: vedio,
    meta: {
      title: '鹊桥会-狼人杀活动'
    }
  }
]
