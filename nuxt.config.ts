// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  dir: {
    public: "public",
  },
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
    "@nuxtjs/i18n",
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
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/assets/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/assets/apple-icon-57x57.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/assets/apple-icon-60x60.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/assets/apple-icon-72x72.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/assets/apple-icon-76x76.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/assets/apple-icon-114x114.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/assets/apple-icon-120x120.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/assets/apple-icon-144x144.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/assets/apple-icon-152x152.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/assets/apple-icon-180x180.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/assets/android-icon-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/assets/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/assets/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/assets/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/assets/manifest.json",
        },
      ],
      meta: [
        {
          name: "msapplication-TileColor",
          content: "#ffffff",
        },
        {
          name: "msapplication-TileImage",
          content: "/assets/ms-icon-144x144.png",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ],
    },
  },

  i18n: {
    baseUrl: "https://nuxt-bun.vercel.app",
    langDir: "../src/locales",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        language: "en-US",
        file: "en.ts",
      },
      {
        code: "id",
        language: "id-ID",
        files: ["id.ts"],
      },
    ],
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "nuxt_i18n",
      redirectOn: "root", // recommended
    },
    lazy: true,
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
