<template>
  <section id="servicios" class="services-section">
    <h2 class="section-title">Nuestros Servicios</h2>
    <div class="services-grid">
      <ServiceCard
        v-for="service in services"
        :key="service.id"
        :service="service"
        @toggle-menu="toggleMenu"
      />
    </div>

    <section class="social-section">
      <h3>Síguenos en nuestras redes sociales</h3>
      <div class="social-media">
        <a href="https://www.instagram.com/wondervillavicencio" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@wondervillavicencio" target="_blank" aria-label="TikTok">
          <i class="fab fa-tiktok"></i>
        </a>
        <a href="https://m.facebook.com/61559079968646/" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook"></i>
        </a>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const services = ref([
  {
    id: 1,
    title: 'Hair',
    subtitle: 'Cabello',
    description: 'Transforma tu look con un cabello radiante, sedoso y lleno de vida.',
    image: '/images/hair.jpg',
    menu: [
      { category: 'Cortes', items: ['Cabello con diseño - $40.000', 'Perfilado - $30.000'] },
      { category: 'Cepillado', items: ['Corto $30.000 / Medio $40.000 / Largo $50.000'] },
      { category: 'Alisados orgánicos', items: ['Corto $300.000 / Medio $450.000 / Largo $550.000 / Extra Largo $650.000'] },
      { category: 'Color Tonos Planos', items: ['Corto-Medio $180.000 / Largo-Extra Largo $220.000'] },
      { category: 'Cobertura de Canas', items: ['Corto $180.000 / Medio $200.000 / Largo $220.000 / Extra Largo $250.000'] },
      { item: 'Hidratación con Ozono - $120.000 - $160.000' },
      { category: 'Maquillaje y Peinado', items: ['Sencillo $200.000 / Estructurado $250.000'] },
      { item: 'Trenzas - $30.000' }
    ]
  },
  {
    id: 2,
    title: 'Nails',
    subtitle: 'Uñas',
    description: 'Realza tu belleza con un diseño de uñas elegante y sofisticado que refleja tu estilo.',
    image: '/images/nails.png',
    menu: [
      'Semipermanente Manos - $45',
      'Semipermanente Pies - $45',
      'Tradicional Manos - $30',
      'Tradicional Pies - $30',
      'Press On #1 - $100',
      'PolyGel #1 - $110',
      'Acrílicas - $110',
      'Mantenimiento Acrílico - $80',
      'Dipping - $70',
      'Adicional c/u - $10',
      'Base Rubber - $30',
      'Recubrimiento - $80',
      'PediSpa - $70',
      'Retiro Producto - $20 (Gratis si es nuestro)'
    ]
  },
  {
    id: 3,
    title: 'Lash',
    subtitle: 'Pestañas',
    description: 'Dale intensidad a tu mirada con nuestras extensiones de pestañas, para lucir espectacular cada día.',
    image: '/images/lashes.jpg',
    menu: [
      'Clásicas - $130.000 / Retoque $35.000',
      'Cashmere - $160.000 / Retoque $40.000',
      'Volumen Tecnológico - $180.000 / Retoque $45.000',
      'Volumen Ruso - $195.000 / Retoque $55.000'
    ]
  }
])

const toggleMenu = (serviceId: number) => {
  // Logic to toggle menu
}
</script>

<style scoped>
/* Styles in main.scss */
</style>