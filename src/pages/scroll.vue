<template>
  <div id="content" class="h-20 bg-slate-300 overflow-auto">
    <div v-for="item in 20" :key="item">scroll1</div>
    <h1 id="mian" class="h-30">mian</h1>
    <div v-for="item in 80" :key="item">scroll2</div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to('#mian', {
    scrollTrigger: {
      trigger: '#mian',
      start: 'center top',
      markers: true,
      id: 'my',
      // end: 'bottom top',
      toggleActions: 'restart none none reverse',
      // onToggle: (self) => {
      //   console.log('toggle', self.isActive)
      //   enterBanner.value = self.isActive
      // }
      scroller: '#content'
    },
    duration: 0.5,
    y: -300
  })
})
</script>

<style lang="scss"></style>
