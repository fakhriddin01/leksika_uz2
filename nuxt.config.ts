// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@pinia/nuxt',
      ],

      pinia: {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },

      app: {
        head: {
          title: "Leksika.uz-High Rated English-Uzbek",
          link: [
            {
              rel: "stylesheet",
              href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            },
    
            {
              rel: "icon",
              href: "./public/favicon.ico"
            }
          ],
          meta: [
            { name: "description", content: "Leksika.uz" },
            { name: "author", content: "Nuxt3 app " }
          ]
        }
      }
      
})
