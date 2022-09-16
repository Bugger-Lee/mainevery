/*
 * @Author: lijian
 * @since: 2022-09-14 17:34:01
 * @lastTime: 2022-09-14 17:35:34
 * @LastAuthor: lijian
 * @message:
 */
import dfhk from '../../views/Dfhk/dfhk-select.vue'
import dfhk1 from '../../views/Dfhk/dfhk-select-success.vue'
export default [
  {
    path: '/dfhk',
    component: dfhk,
    meta: {
      title: '选座'
    }
  },
  {
    path: '/dfhk1',
    component: dfhk1,
    meta: {
      title: '选座成功'
    }
  }
]
