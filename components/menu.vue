<template>
  <nav class="font-mono">
    <ul class="flex items-center space-x-4">
      <li><NuxtLink to="/" class="link">Home</NuxtLink></li>
      <li><NuxtLink to="/about" class="link">About</NuxtLink></li>
      <li><NuxtLink to="/projects" class="link">Projects</NuxtLink></li>
      <li><NuxtLink to="/blog" class="link">Blog</NuxtLink></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup></script>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-100;
}
</style>
