<template>
  <ClientOnly>
    <y-header></y-header>
  </ClientOnly>
  <slot />
  <ClientOnly>
    <y-footer></y-footer>
  </ClientOnly>
</template>
<script setup lang="ts"></script>
