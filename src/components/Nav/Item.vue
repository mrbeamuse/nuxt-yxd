<template>
  <div
    class="w-[100px] h-[80px] text-center text-title-main bg-transparent relative"
    :class="[active ? 'active' : '']"
  >
    <img
      v-if="active"
      class="w-[100px]"
      src="~/assets/img/index/bg-icon.png"
      alt=""
    />
    <div
      class="absolute z-10 top-0 left-0 bottom-0 right-0 m-auto text-center leading-[80px] text-under"
    >
      {{ title.title }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { Title } from './types'

const props = defineProps<{
  title: Title
  active: boolean
}>()

console.log(props)
</script>

<style lang="scss" scoped>
.active {
  position: relative;
  color: #ffe697;
  font-weight: 600;
  background-color: #490909;
}
.text-under {
  &::after {
    display: block;
    content: '';
    width: 20px;
    height: 2px;
    color: #ffe697;
    position: absolute;
    bottom: 20px;
    z-index: 20;
  }
}
</style>
