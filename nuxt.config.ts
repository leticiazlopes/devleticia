import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'devLeticia',
      meta: [
        { name: 'description', content: 'Portfólio de Letícia Lopes, desenvolvedora front-end e estudante de Sistemas de Informação.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800&display=swap' }
      ]
    }
  },
  css: ['@/assets/css/main.css']
})
