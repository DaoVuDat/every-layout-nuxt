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
      isCustomElement: (tag) => tag.includes('-') || tag === 'stack-l'
    }
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/design-tokens.css',
    '~/assets/css/stack.css',
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
})
