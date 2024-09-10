<template>
  <div>
    <hello-world :msg="msg" />
    <div class="text-3xl bg-red w-300px h-200px">
      <!-- A basic anchor icon from Phosphor icons -->
      <div class="i-ph-anchor-simple-thin" />
      <!-- An orange alarm from Material Design Icons -->
      <div class="i-mdi-alarm text-orange-400" />
      <!-- A large Vue logo -->
      <div class="i-logos-vue text-3xl" />
      <!-- Sun in light mode, Moon in dark mode, from Carbon -->
      <button class="i-carbon-sun dark:i-carbon-moon" />
      <!-- Twemoji of laugh, turns to tear on hovering -->
      <div
        class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"
      />
    </div>

    <div>
      useToggle: {{ isShow }}
      <button @click="toggle()">toggle show</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import HelloWorld from '../components/hello-world.vue'

const [isShow, toggle] = useToggle()
const msg = ref('demo')
</script>
