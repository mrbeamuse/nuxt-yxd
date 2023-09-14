<template>
  <div
    v-if="type === 'red'"
    :style="{
      backgroundColor: bgcolor,
      color: color
    }"
    class="text-21px text-center bu-height bg-center bg-no-repeat bg-98% bg-[url('~/assets/img/index/red-bg-icon.png')]"
    @click="clickButton"
  >
    {{ title }}
  </div>
  <div
    v-else-if="type === 'gold'"
    :style="{
      backgroundColor: bgcolor,
      color: color
    }"
    class="text-21px text-center bu-height bg-center bg-no-repeat bg-98% bg-[url('~/assets/img/index/gold-bg-icon.png')]"
    @click="clickButton"
  >
    {{ title }}
  </div>
</template>
<script setup>
defineProps({
  bgcolor: {
    type: String,
    default: '#7D0011'
  },
  color: {
    type: String,
    default: '#F9EA9D'
  },
  title: {
    type: String,
    default: '了解更多'
  },
  type: {
    type: String,
    default: 'red'
  }
})

const emit = defineEmits(['click'])
const clickButton = () => {
  emit('click')
}
</script>

<style lang="scss" scoped>
.bu-height {
  line-height: 3rem;
}
</style>
