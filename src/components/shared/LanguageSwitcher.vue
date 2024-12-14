<!-- Start Generation Here -->
<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <Button
    v-for="locale in availableLocales"
    :key="locale.code"
    size="sm"
    @click="setLocale(locale.code)"
  >
    {{ t("switchLanguage") }}
  </Button>
</template>
<!-- End Generation Here -->
