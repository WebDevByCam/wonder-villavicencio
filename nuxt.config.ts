// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  // css: ['assets/styles/main.scss'],
  app: {
    head: {
      title: 'Wonder Villavicencio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Centro de Belleza Integral - Wonder Villavicencio. Especialistas en cabello, uñas, pestañas y mucho más. ¡Reserva tu cita ahora!.'
        },
        {
          name: 'keywords',
          content: 'wonder villavicencio, uñas, manicura, manicure, pedicura, pedicure, pestañas, cabello, cepillado, estética, belleza, salón, extension, poligel, press, acrilico, cashmere'
        },
        { name: 'author', content: 'Wonder Villavicencio' },
        { name: 'robots', content: 'index, follow' },
        { 'http-equiv': 'Content-Language', content: 'es' },
        { property: 'og:title', content: 'Wonder Villavicencio | Centro de Belleza Integral' },
        {
          property: 'og:description',
          content: 'Centro de Belleza Integral - Wonder Villavicencio. Especialistas en cabello, uñas, pestañas y mucho más. ¡Reserva tu cita ahora!.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.wondervillavicencio.com/' },
        { property: 'og:site_name', content: 'Wonder Villavicencio' },
        { property: 'og:image', content: 'https://www.wondervillavicencio.com/images/logo.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg' },
        { rel: 'shortcut icon', href: '/images/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' },
        { rel: 'manifest', href: '/images/site.webmanifest' },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        }
      ],
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-5GT4NL3PZH'
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5GT4NL3PZH');
          `
        }
      ]
    }
  }
})
