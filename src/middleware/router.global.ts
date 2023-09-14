export default defineNuxtRouteMiddleware((to) => {
  useNavStore().currentPath = to.path
})
