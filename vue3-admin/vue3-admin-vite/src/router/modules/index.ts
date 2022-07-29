/*
 * @Author: lijian
 * @since: 2022-07-25 18:08:03
 * @lastTime: 2022-07-28 16:35:20
 * @LastAuthor: lijian
 * @message:
 */
import helloWord from '../../components/HelloWorld.vue';
import login from '../../views/login.vue';
export default [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: '登录',
    },
  },
  {
    path: '/hahaha',
    name: 'hahaha',
    component: helloWord,
    meta: {
      title: '首页',
    },
  },
];
