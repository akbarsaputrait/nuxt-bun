// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  srcDir: "src/",
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    "nuxt-lucide-icons",
    "@nuxt/image",
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  components: {
    dirs: [
      {
        path: "~/components",
        pathPrefix: false,
      },
      {
        path: "~/components/ui",
        pathPrefix: false,
      },
      {
        path: "~/components/shared",
        pathPrefix: false,
      },
    ],
  },

  /**
   * Nuxt Tailwind
   * @link https://tailwindcss.nuxtjs.org/tailwind/config
   */
  tailwindcss: {
    cssPath: ["~/assets/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config.ts",
    viewer: true,
  },

  colorMode: {
    classSuffix: "",
  },

  lucide: {
    namePrefix: "Icon",
  },

  shadcn: {
    prefix: "",
    componentDir: "src/components/ui",
  },

  image: {
    domains: ["cdn.simpleicons.org"],
    quality: 80,
  },
});
