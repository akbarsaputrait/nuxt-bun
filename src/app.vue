<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt Bun` : "Nuxt Bun";
  },
});
</script>

<template>
  <NuxtLayout>
    <div class="fixed top-4 right-4 flex items-center gap-3">
      <LanguageSwitcher />
      <ThemeSwitcher />
    </div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
