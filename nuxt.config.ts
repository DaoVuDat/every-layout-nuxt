import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  vue: {
    compilerOptions: {
      // isCustomElement: (tag) => tag.includes('-l') || tag === 'stack-l'
      isCustomElement: (tag) => tag.includes('-l')
    }
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/reset.css',
    '~/assets/css/design-tokens.css',
    '~/assets/css/global.css',
    '~/assets/css/layouts/stack.css',
    '~/assets/css/layouts/box.css',
    '~/assets/css/layouts/center.css',
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
})
