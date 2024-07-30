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
    "@nuxtjs/google-fonts"
  ],
  nitro: {
    prerender: {
      routes: [
        "/_ipx/f_webp&fit_outside&s_1100x1100/images/me.jpeg",
        "/_ipx/f_webp&fit_outside&s_550x550/images/me.jpeg",
        "/_ipx/f_webp&fit_outside&s_280x280/images/me.jpeg",
        "/_ipx/f_webp&fit_outside&s_140x140/images/me.jpeg",
        "/_ipx/f_webp&fit_outside&s_1000x1234/images/about.png",
        "/_ipx/f_webp&fit_outside&s_500x617/images/about.png",
        "/_ipx/f_webp&fit_outside&s_440x542/images/about.png",
        "/_ipx/f_webp&fit_outside&s_220x271/images/about.png",
        "/_ipx/f_webp&fit_outside&s_652x434/images/petervardy.png",
        "/_ipx/f_webp&fit_outside&s_326x217/images/petervardy.png",
        "/_ipx/f_webp&fit_outside&s_272x182/images/petervardy.png",
        "/_ipx/f_webp&fit_outside&s_136x91/images/petervardy.png",
        "/_ipx/f_webp&fit_outside&s_652x434/images/carmoney.png",
        "/_ipx/f_webp&fit_outside&s_326x217/images/carmoney.png",
        "/_ipx/f_webp&fit_outside&s_272x182/images/carmoney.png",
        "/_ipx/f_webp&fit_outside&s_136x91/images/carmoney.png"
      ]
    }
  },

})