import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router"
import vue3GoogleLogin from "vue3-google-login"

import { createPinia } from 'pinia'
import  createPluginPersistedState  from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(createPluginPersistedState)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(vue3GoogleLogin,{
    clientId:"718543284873-fc2q0b2aa87s5g2h4scn3nbd6laotc7k.apps.googleusercontent.com",
})
app.mount('#app')
 