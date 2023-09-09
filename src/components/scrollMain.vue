<template>
  <div id="banner">
    <img class="h-screen" src="~/assets/img/banner.png" alt="" />
  </div>
  <div id="srcoll-image">
    <img class="h-50" src="~/assets/img/content.png" alt="" />
    <div class="yun-container">
      <img class="yun-left" src="~/assets/img/left.png" alt="" />
      <img class="yun-right" src="~/assets/img/right.png" alt="" />
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const tagHeight = 5
// onMounted(() => {
// const fullHeight = document.getElementById('banner').offsetHeight

// gsap.to('#srcoll-image', {
//   scrollTrigger: {
//     triger: '#srcoll-image',
//     start: tagHeight + 'px top',
//     markers: true,
//     id: 'my',
//     // end: 'bottom top',
//     toggleActions: 'restart none none reverse'
//   },
//   duration: 0.5,
//   y: 0 - Number(fullHeight) + tagHeight
// })
// })
onMounted(() => {
  const fullHeight = document.getElementById('banner').offsetHeight

  gsap.to('#srcoll-image', {
    scrollTrigger: {
      triger: '#srcoll-image',
      start: tagHeight + 'px top',
      markers: true,
      id: 'my',
      // end: 'bottom top',
      toggleActions: 'restart none none reverse'
    },
    duration: 0.5,
    y: 0 - Number(fullHeight) + tagHeight
  })
  gsap.to('.yun-left', {
    scrollTrigger: {
      triger: '.yun-left',
      start: '500px top',
      markers: true,
      id: 'left',
      // end: 'bottom top',
      toggleActions: 'restart none none reverse'
    },
    duration: 1,
    x: -700
  })
  gsap.to('.yun-right', {
    scrollTrigger: {
      triger: '.yun-right',
      start: '500px top',
      markers: true,
      id: 'right',
      // end: 'bottom top',
      toggleActions: 'restart none none reverse'
    },
    duration: 1,
    x: 700
  })
})

// gsap.from('#srcoll-image', { duration: 2, scale: 0.3 })
</script>

<style lang="scss">
#srcoll-image {
  // height: 2000px;
  background-color: #fff;
}
.yun-container {
  width: 100%;
  height: 500px;
  background-color: blueviolet;
  position: relative;
  .yun-left {
    position: absolute;
    width: 1000px;
    height: 500px;
    left: 0;
    top: 0;
  }
  .yun-right {
    position: absolute;
    width: 1000px;
    height: 500px;
    right: 0;
    top: 0;
  }
}
</style>
