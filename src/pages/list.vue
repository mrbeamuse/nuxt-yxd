<template>
  <div>
    <h1>欢迎来到周师傅的列表页面</h1>

    <ListItem />

    <div v-focus>focus</div>

    <strong> 姓名：{{ userInfo.userName }} 性别：{{ userInfo.sex }} </strong>
  </div>
</template>

<script setup lang="ts">
// import { useUserStore } from '@/store/useUserStore'
const userInfo = useUserStore().userInfo
// console.log(userInfo);
</script>
