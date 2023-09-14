// import { defineStore } from 'pinia'

// const activeNav = {
//   userName: '周师傅',
//   id: 1,
//   sex: '男'
// }

export const useNavStore = defineStore('nav', () => {
  // 当前页面路径
  // const currentPath = ref('')
  const route = useRoute()
  const currentPath = route.path

  return {
    currentPath
  }
})
