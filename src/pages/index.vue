<template>
  <!-- <y-header></y-header> -->
  <div class="w-screen">
    <img id="banner" class="w-full" src="~/assets/img/index/banner.png" />
    <div
      id="timeline"
      class="w-screen aspect-[2/1] flex justify-center items-center bg-[url('~/assets/img/index/bg-banner.png')] bg-right-top bg-no-repeat bg-contain"
    >
      <div class="w-2/5">
        <div
          class="inline-block pt-3.5 text-37px bg-[url('~/assets/img/index/wen-icon.png')] bg-top bg-no-repeat bg-[length:107px_40px]"
        >
          峰会故事
        </div>
        <div class="w-full h-36 flex items-center mt-10 ml-5">
          <y-timeline :times="times" @change-time="changeTime"></y-timeline>
        </div>
        <div class="text-21px text-second font-medium mb-8 max-w-500px">
          {{ titleCom }}
        </div>
        <div class="text-777 text-base max-w-500px mb-10">{{ contentCom }}</div>
        <y-button class="w-52 h-12"></y-button>
      </div>
      <div id="time-banner" class="w-2/5 flex items-center relative -left-20">
        <n-carousel
          ref="bannerCarousel"
          draggable
          :interval="5000"
          autoplay
          :show-dots="false"
          :on-update:current-index="changeBanner"
          class="y-carousel"
        >
          <img
            class="y-carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
          />
          <img
            class="y-carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
          />
          <img
            class="y-carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
          />
          <img
            class="y-carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
          />
          <img
            class="y-carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
          />
          <img
            class="y-carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
          />
        </n-carousel>
      </div>
    </div>
    <img class="w-full" src="~/assets/img/index/jiu.png" />
    <div class="w-screen aspect-[3/2] overflow-hidden">
      <div class="flex">
        <img class="w-full" src="~/assets/img/index/news-left.png" />
        <img class="w-full" src="~/assets/img/index/news-right.png" />
      </div>
      <div>新闻列表</div>
      <div>查看更多</div>

      <!-- <n-carousel
        effect="card"
        prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
        next-slide-style="transform: translateX(50%) translateZ(-800px);"
        style="height: 340px"
        :show-dots="false"
        autoplay
        :interval="3000"
        draggable
      >
        <n-carousel-item :style="{ width: '60%' }">
          <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
          />
        </n-carousel-item>
        <n-carousel-item :style="{ width: '60%' }">
          <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
          />
        </n-carousel-item>
        <n-carousel-item :style="{ width: '60%' }">
          <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
          />
        </n-carousel-item>
        <n-carousel-item :style="{ width: '60%' }">
          <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
          />
        </n-carousel-item>
      </n-carousel> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const times = ref([
  { time: '2014', active: true },
  { time: '2015', active: false },
  { time: '2016', active: false },
  { time: '2017', active: false },
  { time: '2018', active: false },
  { time: '2019', active: false }
])
const yearCom = computed(() => {
  return times.value[currentIndexRef.value]?.time
})
const titleCom = computed(() => {
  return timeText[yearCom.value]?.title
})
const contentCom = computed(() => {
  return timeText[yearCom.value]?.content
})

const timeText = {
  '2014': {
    title: '2014年，第一届中国国际葡萄酒博览会在北京举办',
    content:
      '第二届“读懂中国”国际会议在北京雁栖湖国际会议中心举杯。100多位来自世界各国的前政要、战略家和企业界领袖汇聚一堂共同探讨中国在全球治理中的角色与作用。'
  },
  '2015': {
    title: '2015年，第二届中国国际葡萄酒博览会在北京举办',
    content:
      '第三届“读懂中国”国际会议在北京雁栖湖国际会议中心举杯。100多位来自世界各国的前政要、战略家和企业界领袖汇聚一堂共同探讨中国在全球治理中的角色与作用。'
  },
  '2016': {
    title: '2016年，第三届中国国际葡萄酒博览会在北京举办',
    content:
      '第四届“读懂中国”国际会议在北京雁栖湖国际会议中心举杯。100多位来自世界各国的前政要、战略家和企业界领袖汇聚一堂共同探讨中国在全球治理中的角色与作用。'
  },
  '2017': {
    title: '2017年，第四届中国国际葡萄酒博览会在北京举办',
    content:
      '第五届“读懂中国”国际会议在北京雁栖湖国际会议中心举杯。100多位来自世界各国的前政要、战略家和企业界领袖汇聚一堂共同探讨中国在全球治理中的角色与作用。'
  },
  '2018': {
    title: '2018年，第五届中国国际葡萄酒博览会在北京举办',
    content:
      '第六届“读懂中国”国际会议在北京雁栖湖国际会议中心举杯。100多位来自世界各国的前政要、战略家和企业界领袖汇聚一堂共同探讨中国在全球治理中的角色与作用。'
  },
  '2019': {
    title: '2019年，第六届中国国际葡萄酒博览会在北京举办',
    content:
      '第七届“读懂中国”国际会议在北京雁栖湖国际会议中心举杯。100多位来自世界各国的前政要、战略家和企业界领袖汇聚一堂共同探讨中国在全球治理中的角色与作用。'
  }
}
const currentIndexRef = ref(0)
const changeBanner = (currentIndex: number) => {
  currentIndexRef.value = currentIndex
  setTimes(currentIndex)
}
const changeTime = (value: number) => {
  console.log('changeSlider', value)
  currentIndexRef.value = value
  setTimes(value)
  jumpBanner(value)
}
const setTimes = (value: number) => {
  times.value.forEach((item, index) => {
    if (index === value) {
      item.active = true
    } else {
      item.active = false
    }
  })
}
const bannerCarousel = ref()
const jumpBanner = (value: number) => {
  bannerCarousel.value.to(value)
}
</script>

<style lang="scss" scoped>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.y-carousel {
  width: 50rem;
  height: 38rem;
  &-img {
    width: 50rem;
    height: 38rem;
  }
}
</style>
