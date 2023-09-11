// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  imports: {
    dirs: ['store/**']
  },
  // app: {
  //   head: {
  //     charset: 'utf-8', // 快捷方式
  //     viewport: 'width=device-width, initial-scale=1', // 快捷方式
  //     title: 'My App',
  //     meta: [
  //       { name: 'description', content: 'My amazing site.' },
  //       { name: 'charset', content: 'utf-8' },
  //       { name: 'name="naive-ui-style"' }
  //     ],
  //     link: [],
  //     style: [],
  //     script: []
  //   }
  // },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          'defineStore',
          'storeToRefs'
        ]
      }
    ],
    '@vueuse/nuxt',
    [
      '@nuxtjs/eslint-module',
      {
        /* module options */
      }
    ],
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt'
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
