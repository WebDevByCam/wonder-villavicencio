<template>
  <section id="nosotros" class="our-works-section">
    <h3 class="our-works-title">Nuestro trabajo</h3>
    <div class="works-gallery">
      <NuxtImg
        v-for="work in works"
        :key="work.id"
        :src="work.src"
        loading="lazy"
        :alt="work.alt"
      />
    </div>
    <div class="works-cta">
      <a
        href="https://agenda.kumbio.com/wonder-nails-1212"
        class="appointment-btn"
        target="_blank"
        aria-label="Haz tu reserva en línea"
      >
        HAZ TU RESERVA
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const works = [
  { id: 1, src: '/images/work1.jpg', alt: 'Trabajo 1' },
  { id: 2, src: '/images/work2.jpg', alt: 'Trabajo 2' },
  { id: 3, src: '/images/work3.jpg', alt: 'Trabajo 3' },
  { id: 4, src: '/images/work4.jpg', alt: 'Trabajo 4' },
  { id: 5, src: '/images/work5.jpg', alt: 'Trabajo 5' },
  { id: 6, src: '/images/work6.jpg', alt: 'Trabajo 6' },
  { id: 7, src: '/images/work7.jpg', alt: 'Trabajo 7' },
  { id: 8, src: '/images/work8.jpg', alt: 'Trabajo 8' },
  { id: 9, src: '/images/work9.jpg', alt: 'Trabajo 9' },
  { id: 10, src: '/images/work10.jpg', alt: 'Trabajo 10' }
]
</script>

<style scoped>
/* Estilos en main.scss */
</style>