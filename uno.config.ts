import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  rules: [],
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()]
})
