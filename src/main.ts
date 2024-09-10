import type { App, Component } from 'vue'
import '@/plugins/assets'
import HelloWorld from '@/components/hello-world.vue'

const components: Component[] = [HelloWorld]

export default {
  install: (app: App) => {
    components.forEach((c) => app.component(`Avo${c.name}`, c))
  }
}

export { HelloWorld }
