// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    [
      '@nuxtjs/eslint-module',
      {
        /* module options */
      }
    ],
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/src/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.scss";'
        }
      }
    }
  }
})
