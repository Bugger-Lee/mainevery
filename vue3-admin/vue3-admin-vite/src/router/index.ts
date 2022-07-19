/*
 * @Author: lijian
 * @since: 2022-07-19 15:02:32
 * @lastTime: 2022-07-19 16:54:37
 * @LastAuthor: lijian
 * @message:
 */

import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecord,
} from 'vue-router';
import helloWord from '../components/HelloWorld.vue';
const routerList = [
  {
    path: '/index',
    component: helloWord,
    meta: {
      title: '首页',
    },
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routerList,
});

export default router;
