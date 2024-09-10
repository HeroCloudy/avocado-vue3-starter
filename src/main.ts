import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { installRouter } from './router'
import '@/plugins/assets'

const app = createApp(App)

app.use(createPinia())

installRouter(app)

app.mount('#app')
