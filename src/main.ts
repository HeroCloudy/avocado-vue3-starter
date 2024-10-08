import { createApp } from 'vue'

import App from './App.vue'
import { installRouter } from './router'
import '@/plugins/assets'
import { installStore } from '@/stores'

const app = createApp(App)

installRouter(app)
installStore(app)

app.mount('#app')
