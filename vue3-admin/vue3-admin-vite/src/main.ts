/*
 * @Author: lijian
 * @since: 2022-07-18 14:55:01
 * @lastTime: 2022-07-19 16:15:16
 * @LastAuthor: lijian
 * @message:
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
const app = createApp(App);
app.use(router);
app.mount('#app');
