<template>
  <div>
    <NConfigProvider
      :theme-overrides="themeOverrides"
      :breakpoints="breakpoints"
    >
      <!-- 路由出口 -->
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </NConfigProvider>
  </div>
</template>
<script setup lang="ts">
// import { useUserStore } from '@/store/useUserStore'
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#bd1818'
  }
  // Button: {
  //   textColor: '#FF0000'
  // }
}
// onMounted(() => {
//   console.log('app mounted')
//   // 让页面滚动到顶部
//   window.scrollTo(0, 0)
// })
// const nuxtApp = useNuxtApp()
// console.log('nuxtApp', nuxtApp)
// nuxtApp.$router.afterEach(async (to, from) => {
//   console.log('app route', to, from)
//   await window.scrollTo(0, 0)
// })
// watch(
//   () => nuxtApp.$route.path,
//   (val) => {
//     console.log('app route', val)
//   },
//   {
//     immediate: true
//   }
// )
const breakpoints = {
  xs: 0,
  sm: 640,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
  // xxl: 1920
}
// const userInfo = useUserStore().userInfo
const isMobile = usecheckMobile()
watch(
  isMobile,
  (val) => {
    console.log('isMobile', val)
  },
  {
    immediate: true
  }
)

// 测试
// 测试2
// useREM()

// console.log(userInfo)
</script>
