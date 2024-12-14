<!-- Start Generation Here -->
<script setup>
const colorMode = useColorMode();
function toggleTheme() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}
</script>

<template>
  <Button size="icon" variant="outline" class="ml-auto" @click="toggleTheme">
    <ClientOnly>
      <IconSun v-if="colorMode.value === 'dark'" />
      <IconMoon v-else />
    </ClientOnly>
  </Button>
</template>
<!-- End Generation Here -->
