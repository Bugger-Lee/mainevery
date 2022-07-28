/*
 * @Author: lijian
 * @since: 2022-07-26 17:14:32
 * @lastTime: 2022-07-27 18:01:46
 * @LastAuthor: lijian
 * @message:
 */
import test from '../../views/test.vue';
import list from '../../views/list.vue';
export default [
  {
    path: '/test',
    name: 'test',
    component: test,
    meta: {
      title: '测试',
    },
  },
  {
    path: '/list',
    name: 'list',
    component: list,
    meta: {
      title: '列表',
    },
  },
];
