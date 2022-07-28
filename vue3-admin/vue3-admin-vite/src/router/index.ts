/*
 * @Author: lijian
 * @since: 2022-07-19 15:02:32
 * @lastTime: 2022-07-26 18:10:38
 * @LastAuthor: lijian
 * @message:
 */

import { createRouter, createWebHashHistory, Router } from 'vue-router';
import { routerList } from './assignRouter';

console.log(routerList);
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routerList,
});

export default router;
