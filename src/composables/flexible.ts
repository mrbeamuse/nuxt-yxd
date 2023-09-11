// 防抖
import { throttle } from 'lodash-es'
const isMobile = usecheckMobile()
/**
 * 初始化 rem 基准值，最大为 40px
 */
// const MAX_FONT_SIZE = 40
const MAX_FONT_SIZE = 75
export const useREM = async () => {
  // 定义最大的 fontSize
  await nextTick()
  // 监听 html 文档被解析完成的事件
  // document.addEventListener('DOMContentLoaded', () => {

  // })
  resizeHandler()
  window.addEventListener('resize', throttle(resizeHandler, 500))
}
const resizeHandler = () => {
  if (!isMobile.value) return
  console.log(111, isMobile.value)

  // 获取 html 标签
  const html = document.querySelector('html')
  // 获取根元素 fontSize 标准，屏幕宽度 / 10。（以 Iphone 为例 Iphone 6 屏幕宽度为 375，则标准 fontSize 为 37.5）
  let fontSize = window.innerWidth / 10
  // 获取到的 fontSize 不允许超过我们定义的最大值
  fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
  // 定义根元素（html）fontSize 的大小 （rem）
  console.log('fontSize', fontSize)
  html!.style.fontSize = fontSize + 'px'
}
