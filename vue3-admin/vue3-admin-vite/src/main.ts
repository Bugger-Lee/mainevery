/*
 * @Author: lijian
 * @since: 2022-07-18 14:55:01
 * @lastTime: 2022-08-01 15:58:02
 * @LastAuthor: lijian
 * @message:
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import './style.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
