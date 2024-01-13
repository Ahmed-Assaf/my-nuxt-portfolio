<template>
  <div>We are inside a blog {{ route.params.id }}</div>
</template>

<script setup>
const route = useRoute();
</script>

<style></style>
