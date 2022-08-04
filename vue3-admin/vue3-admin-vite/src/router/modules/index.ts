/*
 * @Author: lijian
 * @since: 2022-07-25 18:08:03
 * @lastTime: 2022-08-03 16:07:22
 * @LastAuthor: lijian
 * @message:
 */
import helloWord from '@/components/HelloWorld.vue'
import login from '@/views/login/login.vue'
export default [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/hahaha',
    name: 'hahaha',
    component: helloWord,
    meta: {
      title: '首页'
    }
  }
]
