import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { createPinia } from 'pinia'
// import xx from 'ss'

axios.interceptors.response.use((config) => {
    NProgress.start()
    // alert('请求开始')
    return config
})

axios.interceptors.response.use((config) => {
    NProgress.done()
    return config
})

createApp(App).use(router).use(createPinia()).mount('#app')
// createApp(App).use(ElementPlus).use(router).mount('#app')
