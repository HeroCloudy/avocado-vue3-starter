<!--
 @name: default.vue
 @description: default layout
 @author: 程序员优雅哥 yygcoder
 @time: 2024/9/10 22:49
-->
<template>
  <div>
    <header>
      <router-link to="/" class="item">home</router-link>
      <router-link to="/about" class="item">about</router-link>
    </header>
    <router-view></router-view>

    <footer>default common footer</footer>
  </div>
</template>

<script setup lang="ts">
console.log('default')
</script>

<style scoped lang="scss">
header {
  @apply ml-30px;
}
.item {
  @apply line-height-loose mr-3;
}
footer {
  @apply text-sm text-gray mt-5;
}
</style>
