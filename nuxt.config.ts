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
    '~/assets/css/layouts/cluster.css',
    '~/assets/css/layouts/sidebar.css',
    '~/assets/css/layouts/switcher.css',
    '~/assets/css/layouts/cover.css',
    '~/assets/css/layouts/grid.css',
    '~/assets/css/layouts/frame.css',
    '~/assets/css/layouts/reel.css',
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
})
