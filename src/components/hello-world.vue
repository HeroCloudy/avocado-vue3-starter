<template>
  <div class="greetings">
    <h3>Hello World Component. {{ msg }}</h3>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: 'HelloWorld' })
defineProps<{
  msg: string
}>()
</script>
<style scoped lang="scss"></style>
