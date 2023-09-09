export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    mounted(el) {
      console.log('focus', el)
      el.focus()
    },
    getSSRProps(binding, vnode) {
      // you can provide SSR-specific props here
      console.log('getSSRProps', binding, vnode)
      return {}
    }
  })
})
