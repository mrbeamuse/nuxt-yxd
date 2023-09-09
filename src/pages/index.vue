<template>
  <div>
    <h1 class="bg-slate-800">欢迎来到周师傅的第一个页面</h1>
    <img
      v-for="(item, index) in bannerList"
      :key="index"
      :src="item?.url"
      alt=""
    />
    <!-- <NButton>hello</NButton>
    <NuxtLink to="/list"> 进入列表页 </NuxtLink>
    <NuxtLink to="/user-admin/111"> 进入管理员 id 为 111 的用户中心 </NuxtLink> -->
    <scrollMain></scrollMain>
  </div>
</template>

<script setup>
// const foo = useFoo()
const testData = ref()
// onMounted(async () => {
//   await nextTick()
//   testRequest()
// })
const testRequest = async () => {
  const res = await useFetch(
    () =>
      `https://tpay.xiaokangyouxuan.cn/optimization-pms/advertising/noToken/listPmsAdvertisingList/1`
  )
  testData.value = res.data.value.data
  console.log('index', testData.value)
}

await testRequest()

const bannerList = computed(() => {
  console.log('bannerList', testData.value?.advertisingImgs)
  return testData.value?.advertisingImgs
})
</script>
