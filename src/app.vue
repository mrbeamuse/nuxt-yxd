<template>
  <div>
    <NConfigProvider :theme-overrides="themeOverrides">
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
const userInfo = useUserStore().userInfo
// const isMobile = usecheckMobile()
useREM()
// watch(isMobile, (val) => {
//   console.log('isMobile', val)
// })
console.log(userInfo)
</script>
