import type { App, Component } from 'vue'
import '@/plugins/assets'
import HelloWorld from '@/components/hello-world.vue'

const components: Component[] = [HelloWorld]

export const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name!, component)
  })
}

export { HelloWorld }
