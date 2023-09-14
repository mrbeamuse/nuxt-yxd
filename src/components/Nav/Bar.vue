<template>
  <div class="flex">
    <nav-item
      v-for="(item, index) in titleArr"
      :key="index"
      :title="item"
      :active="currentPath === item?.path"
      @click="goOther(item)"
    ></nav-item>
  </div>
</template>
<script setup lang="ts">
import { TitleArr, Title } from './types'
// const route =
// const currentPath = computed(() => useRoute().path)
const currentPath = ref(useRoute().path)
// useRoute().path

const router = useRouter()
const route = useRoute()
const goOther = (item: Title) => {
  router.push(item?.path)
  // 获取当前页面路径
  setTimeout(() => {
    currentPath.value = useNavStore().currentPath
    console.log(
      'currentPathNext',
      route,
      useNavStore().currentPath,
      currentPath.value,
      item?.path
    )
  })
}

const props = defineProps<{
  titleArr: TitleArr
}>()

console.log(props.titleArr)
</script>

<style lang="scss" scoped></style>
