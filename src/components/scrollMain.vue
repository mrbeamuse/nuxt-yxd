<template>
  <div id="banner">
    <img class="h-100 lg:h-screen" src="~/assets/img/banner.png" alt="" />
  </div>
  <div id="srcoll-image">
    <img class="h-100 lg:h-50" src="~/assets/img/content.png" alt="" />
    <n-carousel draggable autoplay>
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      />
      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li
            v-for="index of total"
            :key="index"
            :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)"
          >
            {{ index }}
          </li>
        </ul>
      </template>
    </n-carousel>
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
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  right: 200px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition:
    width 0.3s,
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
</style>
