export default defineNuxtConfig({
  app: {
    buildAssetsDir: "/nuxt/",
    head: {
      script: [
        {
          src: "/scripts/script.js"
        }
      ]
    }
  },
  css: [
    '@mdi/font/css/materialdesignicons.css',
    '~/styles/main.scss',
  ],
  srcDir: "src/",
  ssr: false,
  compatibilityDate: '2024-07-30',
  googleFonts: {
    families: {
      "DM Sans": [400, 500, 600, 700]
    },
    display: "swap"
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536
    }
  },
  modules: [
    "nuxt-icons",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-security"
  ],
  security: {
    headers: {
      contentSecurityPolicy: {
        "frame-ancestors": "'none'"
      }
    }
  },
})