<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Layout global
// if user visits root on the link subdomain, send them to the static folder
if (process.client) {
  if (
    window.location.host === 'link.wondervillavicencio.com' &&
    window.location.pathname === '/'
  ) {
    window.location.replace('/link/');
  }
}
</script>

<style lang="scss">
@use '~/assets/styles/main.scss' as *;
</style>
