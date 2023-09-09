import { useWindowSize } from '@vueuse/core'

export const usecheckMobile = () => {
  const PC_DEVICE_WIDTH = 1024

  const { width } = useWindowSize()

  const isMobile = computed(() => {
    return width.value < PC_DEVICE_WIDTH
  })
  return isMobile
}
