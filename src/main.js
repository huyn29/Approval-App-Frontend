import './assets/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(router)
app.mount('#app')
