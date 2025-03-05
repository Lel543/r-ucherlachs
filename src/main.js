// filepath: /c:/Users/paulh/rlachs/src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' // Import Vuetify
import './assets/css/normalize.css'
import './assets/css/skeleton.css'
import './assets/css/style.css'
import './assets/css/custom.css'

const app = createApp(App)
app.use(router)
app.use(vuetify) // Use Vuetify
app.mount('#app')
