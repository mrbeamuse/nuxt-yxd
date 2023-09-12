<template>
  <div>
    <n-button type="primary" @click="gotoScroll"> Primary </n-button>
    <!-- <h1 class="bg-slate-800 h-10 text-base">欢迎来到周师傅的第一个页面</h1> -->

    <!-- <n-grid cols="2 sm:3 lg:4 xl:5 2xl:7" responsive="screen" item-responsive> -->
    <ClientOnly>
      <n-grid x-gap="12" cols="3" responsive="screen" item-responsive>
        <n-grid-item
          v-for="(item, index) in bannerList"
          :key="index"
          span="0 lg:1"
        >
          <img class="w-full" :src="item?.url" alt="" />
        </n-grid-item>
      </n-grid>
    </ClientOnly>

    <!-- <NuxtLink to="/list"> 进入列表页 </NuxtLink>
    <NuxtLink to="/user-admin/111"> 进入管理员 id 为 111 的用户中心 </NuxtLink> -->
    <scrollMain></scrollMain>
  </div>
</template>

<script setup>
onMounted(() => {
  // console.log('index mounted', window)
  // document.body.scrollTop = 0
  // 让页面滚动到顶部
  // nextTick(() => {
  //   window.scrollTo(0, 0)
  // })
  setTimeout(() => {
    window.scrollTo(0, 0)
  })
})
const router = useRouter()
// const foo = useFoo()
const testData = ref()
// onMounted(async () => {
//   await nextTick()
//   testRequest()
// })
// const testRequest = async () => {
//   const res = await useFetch(
//     () =>
//       `https://tpay.xiaokangyouxuan.cn/optimization-pms/advertising/noToken/listPmsAdvertisingList/1`
//   )
//   testData.value = res.data.value.data
//   console.log('index', testData.value)
// }

// await testRequest()

const { data, error } = await useFetch(
  () =>
    `https://tpay.xiaokangyouxuan.cn/optimization-pms/advertising/noToken/listPmsAdvertisingList/1`
)
// console.log('index', data.value, error.value)
if (error.value) {
  console.log('index', error.value)
}
testData.value = data.value.data
// console.log('index', testData.value)
const bannerList = computed(() => {
  // console.log('bannerList', testData.value?.advertisingImgs)
  return testData.value?.advertisingImgs
})

const gotoScroll = () => {
  router.push('/scroll')
}
</script>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
