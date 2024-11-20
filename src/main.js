import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { createApp } from 'vue'
import apiClient from './axios.js'
import { createPinia } from 'pinia'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css'

import App from './App.vue'
import router from './router'
const app = createApp(App)
app.provide('$http', apiClient)
app.use(Loading)
app.use(createPinia())
app.use(router)

app.mount('#app')
