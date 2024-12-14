<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt Bun` : "Nuxt Bun";
  },
});
</script>

<template>
  <div>
    <ThemeSwitcher />
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>
