<template>
  <header>
    <div class="logo">
      <NuxtLink to="#"><NuxtImg src="/images/logo.png" alt="Wonder Villavicencio Logo" /></NuxtLink>
    </div>
    <!-- NAVEGACIÓN -->
    <nav>
      <NuxtLink to="#servicios">SERVICIOS</NuxtLink>
      <NuxtLink to="#nosotros">NOSOTROS</NuxtLink>
      <NuxtLink to="#contacto">CONTACTO</NuxtLink>
    </nav>
    <!-- BOTÓN RESERVA -->
    <a id="nav-reserva" href="https://agenda.kumbio.com/wonder-nails-1212" class="book-now" target="_blank" aria-label="Haz tu reserva en línea">
      RESERVAR <i class="fa-regular fa-calendar"></i>
    </a>
  </header>
</template>

<script setup lang="ts">
// No script needed for now
</script>

<style scoped>
/* Styles are in main.scss */
</style>