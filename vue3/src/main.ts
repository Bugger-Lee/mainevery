import './lib/glablmoon.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index'
import 'github-markdown-css'
import Markdown from './components/MarkDown.vue'


const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('MarkDown', Markdown)
