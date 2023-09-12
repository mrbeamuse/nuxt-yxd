<template>
  <ClientOnly>
    <header id="pages-header" class="header">
      <h1 v-if="!isMobile">这里是周师傅的 NuxtLayout 默认模板 header pc</h1>
      <h1 v-else>这里是周师傅的 NuxtLayout 默认模板 header 移动端</h1>
    </header>
  </ClientOnly>
  <slot />
</template>
<script setup lang="ts">
const isMobile = usecheckMobile()
</script>
