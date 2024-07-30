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
  nitro: {
    prerender: {
      routes: [
        "/_ipx/f_webp&fit_outside&s_1100x1100/assets/images/me.jpeg",
        "/_ipx/f_webp&fit_outside&s_550x550/assets/images/me.jpeg",
        "/_ipx/f_webp&fit_outside&s_280x280/assets/images/me.jpeg",
        "/_ipx/f_webp&fit_outside&s_140x140/assets/images/me.jpeg",
        "/_ipx/f_webp&fit_outside&s_1000x1234/assets/images/about.png",
        "/_ipx/f_webp&fit_outside&s_500x617/assets/images/about.png",
        "/_ipx/f_webp&fit_outside&s_440x542/assets/images/about.png",
        "/_ipx/f_webp&fit_outside&s_220x271/assets/images/about.png",
        "/_ipx/f_webp&fit_outside&s_652x434/assets/images/petervardy.png",
        "/_ipx/f_webp&fit_outside&s_326x217/assets/images/petervardy.png",
        "/_ipx/f_webp&fit_outside&s_272x182/assets/images/petervardy.png",
        "/_ipx/f_webp&fit_outside&s_136x91/assets/images/petervardy.png",
        "/_ipx/f_webp&fit_outside&s_652x434/assets/images/carmoney.png",
        "/_ipx/f_webp&fit_outside&s_326x217/assets/images/carmoney.png",
        "/_ipx/f_webp&fit_outside&s_272x182/assets/images/carmoney.png",
        "/_ipx/f_webp&fit_outside&s_136x91/assets/images/carmoney.png"
      ]
    }
  },
  security: {
    headers: {
      contentSecurityPolicy: {
        "frame-ancestors": "'none'"
      }
    }
  },
  srcDir: "src/",
  ssr: false,
})