<template>
  <div class="bg-main">
    <NConfigProvider
      :theme-overrides="themeOverrides"
      :breakpoints="breakpoints"
    >
      <!-- <NuxtLayout name="header"></NuxtLayout> -->
      <!-- 路由出口 -->
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <!-- <NuxtLayout name="footer"></NuxtLayout> -->
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

// useREM()

// console.log(userInfo)
</script>
