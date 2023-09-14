<template>
  <header
    id="pages-header"
    class="header w-full h-[80px] fixed top-0 z-20 bg-main bg-transparent"
  >
    <!-- <n-space justify="space-between"> -->
    <div class="flex justify-between items-center">
      <img class="w-20 ml-10 mt-6" src="~/assets/img/index/logo.png" />
      <!-- <h1 v-if="!isMobile">这里是周师傅的 NuxtLayout 默认模板 header pc</h1>
      <h1 v-else>这里是周师傅的 NuxtLayout 默认模板 header 移动端</h1> -->
      <nav-bar :title-arr="titleArr"></nav-bar>
    </div>

    <!-- </n-space> -->
  </header>
</template>
<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
interface TitleArr {
  title: string
  path: string
}
const titleArr: TitleArr[] = [
  {
    title: '首页',
    path: '/'
  },
  {
    title: '品牌',
    path: '/brand'
  },
  {
    title: '产品',
    path: '/product'
  },
  {
    title: '新闻',
    path: '/news'
  },
  {
    title: '联系',
    path: '/contact'
  }
]

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  setTimeout(() => {
    // window.scrollTo(0, 0)
    setAnimation()
  })
})
const setAnimation = () => {
  // const fullHeight = document.getElementById('banner')!.offsetHeight
  // const header = document.getElementById('pages-header')
  // console.log('fullHeight', fullHeight, header)
  gsap.to('#pages-header', {
    scrollTrigger: {
      // trigger: '#pages-header',
      start: '400px top',
      markers: true,
      id: 'my',
      // end: 'bottom top',
      toggleActions: 'restart none none reverse',
      onEnterBack: () => console.log('enter back'), // 滚动到进入位置
      onLeaveBack: () => console.log('leave back'), // 滚动到退出位置
      onToggle: (self) => {
        console.log('toggle', self.isActive)
        // enterBanner.value = self.isActives
      }
      // scroller: '#app'
    },
    duration: 0.5,
    backgroundColor: 'rgba(73, 9, 9, 0.6)'
  })
  // gsap.from('#time-banner', {
  //   scrollTrigger: {
  //     trigger: '#timeline',
  //     start: '-400px top',
  //     markers: true,
  //     id: 'banner',
  //     // end: 'bottom top',
  //     toggleActions: 'restart none none reverse',
  //     onEnterBack: () => console.log('enter back'), // 滚动到进入位置
  //     onLeaveBack: () => console.log('leave back'), // 滚动到退出位置
  //     onToggle: (self) => {
  //       console.log('toggle', self.isActive)
  //       // enterBanner.value = self.isActives
  //     }
  //     // scroller: '#app'
  //   },
  //   duration: 1,
  //   x: 400
  // })
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '#pages-header',
  //     start: '400px top',
  //     markers: true,
  //     id: 'my',
  //     toggleActions: 'restart none none reverse'
  //   }
  // })
  // tl.to('#pages-header', {
  //   backgroundColor: 'rgba(73, 9, 9, 0.6)',
  //   ease: 'none',
  //   duration: 0.8
  // })
}
</script>

<style lang="scss"></style>
