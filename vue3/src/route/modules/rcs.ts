/*
 * @Author: lijian
 * @since: 2021-09-17 10:14:11
 * @lastTime: 2021-10-08 10:25:04
 * @LastAuthor: lijian
 * @message:
 */
import activity from '../../views/rsc/activity/index.vue'
import close from '../../views/rsc/close/index.vue'

export default [
  {
    path: '/activity',
    component: activity,
    meta: {
      title: '活动详情'
    }
  },
  {
    path: '/close',
    component: close,
    meta: {
      title: '自动关闭'
    }
  }
]
