/*
 * @Author: lijian
 * @since: 2022-07-25 17:36:38
 * @lastTime: 2022-07-26 18:08:36
 * @LastAuthor: lijian
 * @message: 自动引入组件
 */

// import { RouteRecordRaw } from 'vue-router';

// const requiredModules = import.meta.glob('./modules/**.ts');

// const length = Object.keys(requiredModules).length;
// const routerPromise = new Promise((resolve, reject) => {
//   const routes: Array<RouteRecordRaw> = [];
//   for (let i = 0; i < length; i++) {
//     Object.values(requiredModules)
//       [i]()
//       .then((res: any) => {
//         routes.push(...res.default);
//         if (i === length - 1) {
//           resolve(routes);
//         }
//       });
//   }
// });

// const routes = await routerPromise;
// console.log(routes);

// export default routes;

import test from './modules/test';
import index from './modules/index';
export const routerList = [...test, ...index];
