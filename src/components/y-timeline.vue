<template>
  <div class="w-7/10 flex">
    <div
      v-for="(item, index) in times"
      :key="item.time"
      class="w-1/5 flex items-center"
    >
      <div class="relative" @click="changeTime(index)">
        <div
          class="absolute -top-12 -left-4 text-21px text-line-main"
          :class="[item.active ? 'active' : '']"
        >
          {{ item.time }}
        </div>
        <div
          class="w-[5px] h-[5px] rounded bg-timeline"
          :class="[item.active ? 'active-cricle' : '']"
        ></div>
      </div>
      <div v-if="index !== timeLength" class="bg-timeline h-[1px] flex-1"></div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  times: {
    type: Array,
    required: true
  }
})
const timeLength = computed(() => props.times.length - 1)
const emit = defineEmits(['changeTime'])
const changeTime = (index) => {
  console.log('changeTime')
  emit('changeTime', index)
}
</script>

<style lang="scss" scoped>
.active {
  font-size: 1.5rem;
  color: black;
  font-weight: 600;
  top: -3.125rem; // -50px
  left: -1.5rem; // -24px
}
.active-cricle {
  width: 0.8125rem;
  height: 0.8125rem;
  border-radius: 1rem;
  border: 0.1875rem solid #7d0011;
  background-color: #fffaf5;
}
</style>
