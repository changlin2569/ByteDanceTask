import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.css'
// import 'element-plus/dist/index.css'
import '../node_modules/element-plus/dist/index.css'
import { myAxios } from './utils/myAxios'

const app = createApp(App)
// app.use(ElButton)
app.config.globalProperties.$http = myAxios
app.mount('#app')