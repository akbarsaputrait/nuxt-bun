<script setup>
const { t } = useI18n();

const simpleIconUrl = "https://cdn.simpleicons.org";
const technologies = [
  {
    name: "Nuxt",
    description: "The Intuitive Vue Framework",
    icon: `${simpleIconUrl}/nuxt.js/78716C`,
  },
  {
    name: "Bun",
    description: "Lightning-fast JavaScript runtime & package manager",
    icon: `${simpleIconUrl}/bun/eee/78716C`,
  },
  {
    name: "Shadcn UI",
    description:
      "A component library for building high-quality, accessible user interfaces.",
    icon: `${simpleIconUrl}/shadcnui/78716C`,
  },
];

useSeoMeta({
  title: "Home",
  description: "Nuxt ❤️ Bun",
  ogTitle: "Nuxt ❤️ Bun",
  ogDescription: "Nuxt ❤️ Bun",
  ogImage: "https://cdn.simpleicons.org/nuxt.js/78716C",
});
</script>

<template>
  <div class="container py-24 lg:py-32">
    <!-- Announcement Banner -->
    <div class="flex justify-center">
      <span
        class="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
        href="#"
      >
        {{ t("crafting") }} ⚡️
      </span>
    </div>
    <!-- End Announcement Banner -->
    <!-- Title -->
    <div class="mt-5 max-w-2xl text-center mx-auto">
      <h1
        class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      >
        Nuxt ❤️ Bun
      </h1>
    </div>
    <!-- End Title -->
    <div class="mt-5 max-w-3xl text-center mx-auto">
      <p class="text-xl text-muted-foreground">
        {{ t("description1") }} 💻
        <br />
        {{ t("description2") }} 🌟
      </p>
    </div>
    <!-- Buttons -->
    <div class="mt-8 gap-3 flex justify-center">
      <Button size="lg" as-child>
        <a href="https://github.com/akbarsaputrait/nuxt-bun" target="_blank">
          {{ t("viewProject") }} 👀
        </a>
      </Button>
      <Button size="lg" variant="outline" as-child>
        <a href="https://github.com/akbarsaputrait" target="_blank">
          {{ t("connect") }} 🤝
        </a>
      </Button>
    </div>
    <!-- End Buttons -->
    <div class="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
      <ul class="mt-5 space-y-4">
        <li
          v-for="tech in technologies"
          :key="tech.name"
          class="flex items-center p-4 border rounded-lg shadow-md"
        >
          <NuxtImg :src="tech.icon" alt="" class="w-8 h-8 mr-3" />
          <div>
            <h2 class="text-md font-semibold">
              {{ tech.name }}
            </h2>
            <p class="text-xs text-gray-600">
              {{ tech.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
